"""Collect role-family summary rows and background matrices from every branch report.

Usage: python3 collect.py  ->  writes tools/collected.md (role table + background matrix)
and prints consistency warnings (missing or out-of-range ratings).
"""
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
sys_path = ROOT / "tools"
import sys
sys.path.insert(0, str(sys_path))
from assemble import split_sections, tables, norm_bg, BACKGROUNDS  # noqa: E402

BRANCHES = ["management", "logistics-supply-chain", "finance", "accounting", "marketing",
            "data-analytics", "economics", "computer-science", "cybersecurity", "data-science",
            "artificial-intelligence", "management-consulting", "product-management-startups"]


def first_int(s):
    m = re.search(r"\d", s)
    return int(m.group()) if m else None


def main():
    role_rows, matrix_rows, warnings = [], [], []
    for slug in BRANCHES:
        p = ROOT / f"reports/{slug}.md"
        if not p.exists():
            warnings.append(f"{slug}: report missing")
            continue
        _, secs = split_sections(p.read_text())
        missing = [n for n in range(1, 7) if n not in secs]
        if missing:
            warnings.append(f"{slug}: sections missing {missing}")
            continue
        s3 = secs[3]
        cut = s3.rfind("### Role family summary")
        summ = tables(s3[cut:])[0]
        for r in summ[1:]:
            if len(r) < 7:
                warnings.append(f"{slug}: short summary row {r[:1]}")
                continue
            for col, name in ((2, "stress"), (3, "people"), (4, "quant"), (6, "difficulty")):
                v = first_int(r[col])
                if v is None or not 1 <= v <= 5:
                    warnings.append(f"{slug}: {r[0]} {name}={r[col]!r}")
            role_rows.append([slug] + r[:7])
        mats = [t for t in tables(secs[5]) if len(t[0]) > 3]
        if not mats:
            warnings.append(f"{slug}: no background matrix")
            continue
        trans = [t for t in mats if t[0][0].lower().startswith("role family")]
        if trans:
            for r in trans[0][1:]:
                matrix_rows.append([slug, r[0]] + [c.strip()[:1].upper() for c in r[1:]])
            continue
        mat = mats[-1]
        grid = {norm_bg(r[0]): r[1:] for r in mat[1:]}
        if any(b not in grid for b in BACKGROUNDS):
            warnings.append(f"{slug}: matrix rows missing {[b for b in BACKGROUNDS if b not in grid]}")
            continue
        heads = mat[0][1:]
        for c, h in enumerate(heads):
            cells = [re.sub(r"[*_]", "", grid[b][c]).strip()[:1].upper() for b in BACKGROUNDS]
            bad = [x for x in cells if x not in "SPX"]
            if bad:
                warnings.append(f"{slug}: matrix column {h!r} odd cells {bad}")
            matrix_rows.append([slug, h] + cells)
    out = ["| Branch | Role family | Hours (peak) | Stress | People | Quant | Entry comp | Difficulty |",
           "|---|---|---|---|---|---|---|---|"]
    out += ["| " + " | ".join(r) + " |" for r in role_rows]
    out += ["", "| Branch | Role family | " + " | ".join(BACKGROUNDS) + " |",
            "|---|---|" + "---|" * len(BACKGROUNDS)]
    out += ["| " + " | ".join(r) + " |" for r in matrix_rows]
    (ROOT / "tools/collected.md").write_text("\n".join(out) + "\n")
    print(len(role_rows), "role rows;", len(matrix_rows), "matrix columns")
    print("\n".join(warnings) or "no warnings")


if __name__ == "__main__":
    main()
