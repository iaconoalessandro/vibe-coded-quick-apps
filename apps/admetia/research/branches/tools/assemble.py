"""Assemble a multi-part branch report from its part files.

Usage: python3 assemble.py <branch-slug>
Reads reports/<slug>-part-N.md and snippets/<slug>-{s1,s2,s4,s5}.md,
writes reports/<slug>.md. Part numbering is kept and prefixed (P1-3.2),
so cross-references inside a part still resolve.
"""
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
BACKGROUNDS = ["Management", "Logistics & Supply Chain", "Finance", "Accounting",
               "Marketing", "Data Analytics", "Economics", "Computer Science",
               "Cybersecurity", "Data Science", "Artificial Intelligence"]
TITLES = {"finance": "Finance", "computer-science": "Computer Science",
          "artificial-intelligence": "Artificial Intelligence"}


def split_sections(text):
    lines = text.splitlines()
    title = next(l for l in lines if l.startswith("# "))
    secs, cur = {}, None
    for l in lines:
        m = re.match(r"^## (\d)\. ", l)
        if m:
            cur = int(m.group(1))
            secs[cur] = []
        elif cur is not None:
            secs[cur].append(l)
    return title, {k: "\n".join(v).strip("\n -") for k, v in secs.items()}


def demote(body, p):
    out = []
    for l in body.splitlines():
        m = re.match(r"^(#{3,5}) (\d+\.\d+(?:\.\d+)?)\s+(.*)$", l)
        if m:
            l = f"#{m.group(1)} {p}-{m.group(2)} {m.group(3)}"
        elif re.match(r"^#{3,5} ", l):
            l = "#" + l
        out.append(l)
    return "\n".join(out).strip()


def tables(body):
    """Return list of tables, each a list of row cell-lists (header first, separator dropped)."""
    res, cur = [], []
    for l in body.splitlines() + [""]:
        if l.startswith("|"):
            cells = [c.strip() for c in l.strip().strip("|").split("|")]
            if not all(re.fullmatch(r":?-{2,}:?", c) for c in cells):
                cur.append(cells)
        elif cur:
            res.append(cur)
            cur = []
    return res


def norm_bg(s):
    s = re.sub(r"[*_]", "", s).strip().lower().replace("and", "&")
    for b in BACKGROUNDS:
        if b.lower() == s or b.lower().replace(" ", "") == s.replace(" ", ""):
            return b
    return None


def main(slug):
    parts = sorted(ROOT.glob(f"reports/{slug}-part-*.md"))
    snip = lambda n: (ROOT / f"snippets/{slug}-{n}.md").read_text().strip()
    out = [f"# {TITLES[slug]}", "",
           f"*Assembled on 9 October 2026 from {len(parts)} research parts "
           f"({', '.join(p.name for p in parts)}). Headings inside each part keep that part's own "
           "numbering with a prefix (P1-3.2 = part 1, section 3.2), so cross-references such as "
           "\"see 2.6\" inside a part point to that part's own subsection. Ratings use the shared "
           "scales defined in ../index.md.*", ""]
    parsed = []
    for i, p in enumerate(parts, 1):
        title, secs = split_sections(p.read_text())
        parsed.append((i, title.lstrip("# ").split(": ", 1)[-1], secs))

    out += ["## 1. What this branch is", "", snip("s1"), ""]
    out += ["## 2. Map of areas and sectors", "", snip("s2"), ""]
    for i, name, secs in parsed:
        out += [f"### Part {i}: {name}", "", secs[1], "", demote(secs[2], f"P{i}"), ""]

    out += ["## 3. Role families", ""]
    summary_rows, header, families = [], None, []
    for i, name, secs in parsed:
        body = secs[3]
        cut = body.find("### Role family summary")
        fam, summ = body[:cut], body[cut:]
        families += [(f"P{i}-{m.group(1)}", m.group(2).strip())
                     for m in re.finditer(r"^### (3\.\d+)\s+(.*)$", fam, re.M)]
        out += [f"### Part {i}: {name}", "", demote(fam, f"P{i}"), ""]
        t = tables(summ)[0]
        header = header or t[0]
        for r in t[1:]:
            r[0] = re.sub(r"^(3\.\d+)", rf"P{i}-\1", r[0])
            summary_rows.append(r)
    out += ["### Role family summary (all parts)", "",
            "| " + " | ".join(header) + " |", "|" + "---|" * len(header)]
    out += ["| " + " | ".join(r) + " |" for r in summary_rows]
    out += ["", "Hours and stress ratings are the researchers' estimates from surveys, postings and "
            "practitioner consensus, not survey outputs per role family; see each part's notes.", ""]

    out += ["## 4. Banks vs. other employer types", "", snip("s4"), ""]
    for i, name, secs in parsed:
        out += [f"### Part {i}: {name}", "", demote(secs[4], f"P{i}"), ""]

    out += ["## 5. Which backgrounds fit this branch", "", snip("s5"), "",
            "### (b) Matrix by role family (all parts)", "",
            "S = strong, P = possible, X = stretch. Columns are the 11 base backgrounds: "
            "Mgmt = Management, Log = Logistics & Supply Chain, Fin = Finance, Acc = Accounting, "
            "Mkt = Marketing, DA = Data Analytics, Econ = Economics, CS = Computer Science, "
            "Cyber = Cybersecurity, DS = Data Science, AI = Artificial Intelligence.", "",
            "| Role family | Mgmt | Log | Fin | Acc | Mkt | DA | Econ | CS | Cyber | DS | AI |",
            "|---|---|---|---|---|---|---|---|---|---|---|---|"]
    fam_iter = iter(families)
    for i, name, secs in parsed:
        mats = [t for t in tables(secs[5]) if len(t[0]) > 3]
        grid = {norm_bg(r[0]): r[1:] for r in mats[-1][1:]}
        missing = [b for b in BACKGROUNDS if b not in grid]
        if missing:
            sys.exit(f"part {i}: background rows not found: {missing}")
        for c in range(len(mats[-1][0]) - 1):
            code, fname = next(fam_iter)
            cells = [re.sub(r"[*_]", "", grid[b][c]).strip() for b in BACKGROUNDS]
            out.append(f"| {code} {fname} | " + " | ".join(cells) + " |")
    out += ["", "### Part-level ratings and notes", ""]
    for i, name, secs in parsed:
        out += [f"#### Part {i}: {name}", "", demote(secs[5], f"P{i}"), ""]

    out += ["## 6. Sources", ""]
    for i, name, secs in parsed:
        out += [f"### Part {i}: {name}", "", demote(secs[6], f"P{i}"), ""]
    dest = ROOT / f"reports/{slug}.md"
    dest.write_text("\n".join(out).rstrip() + "\n")
    print(dest, len(" ".join(out).split()), "words;", len(families), "role families")


if __name__ == "__main__":
    main(sys.argv[1])
