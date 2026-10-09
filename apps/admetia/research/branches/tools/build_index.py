"""Build index.md from snippets/index-head.md, generated tables and snippets/index-tail.md.

Usage: python3 build_index.py  (run collect.py first)
"""
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
sys.path.insert(0, str(ROOT / "tools"))
from assemble import split_sections, tables, norm_bg, BACKGROUNDS  # noqa: E402
from collect import BRANCHES  # noqa: E402

NAMES = {"management": "Management", "logistics-supply-chain": "Logistics & Supply Chain",
         "finance": "Finance", "accounting": "Accounting", "marketing": "Marketing (incl. sales)",
         "data-analytics": "Data Analytics", "economics": "Economics",
         "computer-science": "Computer Science", "cybersecurity": "Cybersecurity",
         "data-science": "Data Science", "artificial-intelligence": "Artificial Intelligence",
         "management-consulting": "Management Consulting",
         "product-management-startups": "Product Management & Startups"}
SHORT = ["Mgmt", "Log", "Fin", "Acc", "Mkt", "DA", "Econ", "CS", "Cyber", "DS", "AI"]
LETTER = {"strong": "S", "possible": "P", "stretch": "X"}


def link(slug):
    return f"[{NAMES[slug]}](reports/{slug}.md)"


def overall_matrix():
    rows = []
    for slug in BRANCHES:
        _, secs = split_sections((ROOT / f"reports/{slug}.md").read_text())
        t = next(t for t in tables(secs[5]) if len(t[0]) == 3)
        grid = {norm_bg(r[0]): LETTER.get(re.sub(r"[*_]", "", r[1]).strip().lower().split()[0], "?")
                for r in t[1:]}
        rows.append(f"| {link(slug)} | " + " | ".join(grid.get(b, "?") for b in BACKGROUNDS) + " |")
    head = "| Branch (overall) | " + " | ".join(SHORT) + " |"
    return [head, "|---|" + "---|" * 11] + rows


def collected():
    lines = (ROOT / "tools/collected.md").read_text().splitlines()
    split = lines.index("")
    roles = [l.split("|")[1:-1] for l in lines[2:split]]
    mat = [l.split("|")[1:-1] for l in lines[split + 3:]]
    return [[c.strip() for c in r] for r in roles], [[c.strip() for c in r] for r in mat]


def main():
    roles, mat = collected()
    out = [(ROOT / "snippets/index-head.md").read_text().rstrip(), ""]
    out += ["## 3. Background fit matrix", "",
            "S = strong, P = possible, X = stretch. Columns are the 11 base backgrounds: "
            + ", ".join(f"{s} = {b}" for s, b in zip(SHORT, BACKGROUNDS)) + ". "
            "Ratings come from section 5 of each report; \"strong\" means the background is a standard "
            "feeder, not that entry is easy (check entry difficulty in section 4).", "",
            "### 3.1 By branch (overall rating)", ""] + overall_matrix()
    out += ["", "### 3.2 By role family", ""]
    cur = None
    for r in mat:
        slug, fam, cells = r[0], r[1], r[2:]
        if slug != cur:
            out += ["", f"#### {link(slug)}", "", "| Role family | " + " | ".join(SHORT) + " |",
                    "|---|" + "---|" * 11]
            cur = slug
        out.append(f"| {fam} | " + " | ".join(cells) + " |")
    out += ["", "## 4. Role families compared across branches", "",
            "Hours are typical (peak) per week; stress, people, quant and entry difficulty use the 1-5 scales "
            "in section 2. Entry pay is approximate, copied from each report's summary table, with currency "
            "and base/total as stated there; \"n/a\" or \"no reliable data found\" means the researcher found "
            "no reliable figure (for Italy see [the Italy pay addendum](reports/italy-pay-addendum.md)). "
            "Ranges such as \"3-4\" or \"4 (5 at top boutiques)\" are kept as the reports give them.", ""]
    cur = None
    for r in roles:
        slug, fam, hours, stress, people, quant, comp, diff = r
        if slug != cur:
            out += ["", f"#### {link(slug)}", "",
                    "| Role family | Hours/week (peak) | Stress | People | Quant | Entry pay: US / UK / Italy (approx.) | Entry difficulty |",
                    "|---|---|---|---|---|---|---|"]
            cur = slug
        out.append(f"| {fam} | {hours} | {stress} | {people} | {quant} | {comp} | {diff} |")
    out += ["", (ROOT / "snippets/index-tail.md").read_text().rstrip(), ""]
    (ROOT / "index.md").write_text("\n".join(out))
    print("index.md", len(" ".join(out).split()), "words")


if __name__ == "__main__":
    main()
