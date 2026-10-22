"""Reference solutions for week 3."""
import csv
import json
import xml.etree.ElementTree as ET
from collections import Counter
from pathlib import Path

MISSING = {"", "?"}  # ARFF writes missing values as "?"


def count_lines(path):
    count = 0
    with open(path, encoding="utf-8") as f:
        for _ in f:                 # reads one line at a time, never the whole file
            count += 1
    return count


def read_header_file(path):
    with open(path, encoding="utf-8") as f:
        line = f.readline()
    return [name.strip() for name in line.split(",")]


def read_csv_rows(path, fieldnames=None):
    with open(path, encoding="utf-8", newline="") as f:
        reader = csv.DictReader(f, fieldnames=fieldnames)   # None: take names from line 1
        return [{k: v.strip() for k, v in row.items()} for row in reader]


def write_csv(rows, path, fieldnames):
    path = Path(path)
    path.parent.mkdir(parents=True, exist_ok=True)
    with open(path, "w", encoding="utf-8", newline="") as f:
        writer = csv.DictWriter(f, fieldnames=fieldnames)
        writer.writeheader()
        n = 0
        for row in rows:
            writer.writerow(row)    # the writer adds quotes around commas and quotes for you
            n += 1
    return n


def to_number(value):
    text = value.strip()
    if text in MISSING:
        return None
    try:
        return int(text)            # try the strictest type first: "3.5" fails here...
    except ValueError:
        pass
    try:
        return float(text)          # ...and succeeds here
    except ValueError:
        return text                 # not a number at all: keep the cleaned text


def convert_types(rows):
    return [{k: to_number(v) for k, v in row.items()} for row in rows]


def missing_report(rows):
    report = Counter()
    for row in rows:
        for field, value in row.items():
            if value is None or (isinstance(value, str) and value.strip() in MISSING):
                report[field] += 1
    return dict(report)


def parse_arff(path):
    relation, attributes, data_lines = None, [], []
    in_data = False
    with open(path, encoding="utf-8") as f:
        for line in f:
            line = line.strip()
            if not line or line.startswith("%"):    # blank lines and comments carry no data
                continue
            if in_data:
                data_lines.append(line)
                continue
            parts = line.split(maxsplit=2)          # "@attribute", name, the rest (the type)
            keyword = parts[0].lower()
            if keyword == "@relation":
                relation = parts[1].strip("'\"")
            elif keyword == "@attribute":
                attributes.append((parts[1], parts[2]))
            elif keyword == "@data":
                in_data = True
    names = [name for name, _ in attributes]
    reader = csv.reader(data_lines, quotechar="'", skipinitialspace=True)
    rows = [dict(zip(names, values)) for values in reader]
    return {"relation": relation, "attributes": attributes, "rows": rows}


def xml_attribute_rows(path, record_tag="row"):
    root = ET.parse(path).getroot()
    return [dict(el.attrib) for el in root.iter(record_tag)]


def xml_element_rows(path, record_tag):
    root = ET.parse(path).getroot()
    return [{child.tag: child.text or "" for child in el} for el in root.iter(record_tag)]


def count_values_streaming(path, record_tag, field):
    counts = Counter()
    for _, elem in ET.iterparse(path, events=("end",)):
        if elem.tag == record_tag:          # "end" fires when the closing tag is read
            counts[elem.findtext(field)] += 1
            elem.clear()                    # free this record before reading the next
    return dict(counts)


def load_json(path):
    with open(path, encoding="utf-8") as f:
        return json.load(f)


def save_json(obj, path):
    path = Path(path)
    path.parent.mkdir(parents=True, exist_ok=True)
    with open(path, "w", encoding="utf-8") as f:
        json.dump(obj, f, indent=2, ensure_ascii=False)


def borrows_per_member(path):
    data = load_json(path)
    names = {m["id"]: m["name"] for m in data["members"]}   # id -> name, for instant lookups
    counts = Counter()
    for event in data["events"]:
        if event["type"] != "borrow":
            continue
        name = names.get(event.get("member_id"))            # None for a missing or unknown id
        if name is not None:
            counts[name] += 1
    return dict(counts)


def read_text_safely(path):
    try:
        with open(path, encoding="utf-8") as f:
            return f.read()
    except FileNotFoundError:
        return None
    except UnicodeDecodeError:
        with open(path, encoding="utf-8", errors="replace") as f:
            return f.read()
