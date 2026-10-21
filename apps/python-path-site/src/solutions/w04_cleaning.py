"""Reference solutions for week 4."""
import re
import statistics
from datetime import datetime
from pathlib import Path

from exercises.w03_files import write_csv

WEEKDAYS = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]


def parse_timestamp(text):
    return datetime.strptime(text.replace("T", " "), "%Y-%m-%d %H:%M:%S")


def season(dt):
    # Dec=12 -> 0, Jan=1 -> 0, Feb=2 -> 0, Mar=3 -> 1 ... Nov=11 -> 3
    return ["winter", "spring", "summer", "autumn"][dt.month % 12 // 3]


def date_dimension_row(dt):
    return {
        "date_id": dt.year * 10000 + dt.month * 100 + dt.day,
        "date": dt.strftime("%Y-%m-%d"),
        "day": dt.day,
        "month": dt.month,
        "year": dt.year,
        "quarter": (dt.month - 1) // 3 + 1,
        "weekday": WEEKDAYS[dt.weekday()],      # weekday(): Monday is 0
        "season": season(dt),
    }


def hours_between(start, end):
    return (parse_timestamp(end) - parse_timestamp(start)).total_seconds() / 3600


def row_key(row, key_fields):
    if key_fields is None:
        return tuple(sorted(row.items()))       # sorted: key order in the dict doesn't matter
    return tuple(row[f] for f in key_fields)


def find_duplicates(rows, key_fields):
    seen, dups = set(), []
    for row in rows:
        key = row_key(row, key_fields)
        if key in seen and key not in dups:
            dups.append(key)
        seen.add(key)
    return dups


def drop_duplicates(rows, key_fields=None):
    seen, result = set(), []
    for row in rows:
        key = row_key(row, key_fields)
        if key not in seen:
            seen.add(key)
            result.append(row)
    return result


def mean_std(values):
    present = [v for v in values if v is not None]
    if not present:
        return None, None
    if len(present) == 1:                       # stdev needs two values: decide, don't crash
        return float(present[0]), 0.0
    return statistics.mean(present), statistics.stdev(present)


def zscore_outliers(values, k=3.0):
    mean, std = mean_std(values)
    if not std:                                 # None or 0: nothing can be "far" from the mean
        return []
    return [i for i, v in enumerate(values) if v is not None and abs(v - mean) > k * std]


def clean_text(text):
    if text is None:
        return ""
    return " ".join(text.split())               # split() with no argument splits on any whitespace


def extract_hashtags(text):
    return [tag.lower() for tag in re.findall(r"#(\w+)", text)]


def extract_urls(text):
    return [url.rstrip(".,)!?") for url in re.findall(r"https?://\S+", text)]


def categorize(text, rules, default="other"):
    for category, words in rules.items():       # dicts keep insertion order: rule order wins
        for word in words:
            if re.search(rf"\b{re.escape(word)}\b", text, re.IGNORECASE):
                return category
    return default


def build_dimension(rows, fields, key_name):
    dim_rows, lookup = [], {}
    for row in rows:
        values = tuple(row[f] for f in fields)
        if values not in lookup:
            lookup[values] = len(lookup) + 1    # next surrogate key: 1, 2, 3, ...
            dim_rows.append({key_name: lookup[values], **dict(zip(fields, values))})
    return dim_rows, lookup


def build_sales_star(rows):
    dim_store, stores = build_dimension(rows, ["stor_id"], "store_key")
    dim_title, titles = build_dimension(rows, ["title_id"], "title_key")
    dates = {}
    facts = []
    for row in rows:
        dt = parse_timestamp(row["ord_date"])
        date = date_dimension_row(dt)
        dates[date["date_id"]] = date           # a dict keeps one row per distinct date
        facts.append({
            "ord_num": row["ord_num"],
            "store_key": stores[(row["stor_id"],)],
            "title_key": titles[(row["title_id"],)],
            "date_id": date["date_id"],
            "payterms": row["payterms"],
            "qty": int(row["qty"]),
        })
    dim_date = [dates[k] for k in sorted(dates)]
    return {"dim_store": dim_store, "dim_title": dim_title, "dim_date": dim_date, "fact_sales": facts}


def write_tables(tables, out_dir):
    counts = {}
    for name, rows in tables.items():
        counts[name] = write_csv(rows, Path(out_dir) / f"{name}.csv", list(rows[0]))
    return counts
