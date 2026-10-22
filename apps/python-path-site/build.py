"""Build the Python Path page from src/.

    python3 build.py [--cheatsheet PATH]

Writes two files from the same source:
  dist/artifact.html  the claude.ai artifact (no <html>/<head>: the artifact host adds its own skeleton)
  docs/index.html     the GitHub Pages copy (full document; progress saves only in that browser)

The cheat sheet text comes from the python-path repo's CHEATSHEET.md (single source), and each
exercise's text from that repo's exercises/*.py stubs. Solutions live in src/solutions/; check them
with tools/check_solutions.py.
"""
import argparse
import ast
import json
import re
from pathlib import Path

ROOT = Path(__file__).parent
SRC = ROOT / "src"
SKELETON = (
    '<!doctype html><html lang="en"><head><meta charset="utf-8">'
    '<meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">'
    '<meta name="theme-color" content="#1d5443" media="(prefers-color-scheme: light)">'
    '<meta name="theme-color" content="#163f33" media="(prefers-color-scheme: dark)">'
    "<style>:root{color-scheme:light;box-sizing:border-box;padding-top:env(safe-area-inset-top,0px);"
    "padding-bottom:env(safe-area-inset-bottom,0px)}html{scroll-padding-top:env(safe-area-inset-top,0px)}"
    "body{margin:0;padding:0}img{max-width:100%}[hidden]:not([hidden=until-found i]){display:none!important}</style>"
    "</head><body>"
)


def script_safe(text, what):
    # these would end or corrupt the <script type="text/markdown"> block the text sits in
    assert "</script" not in text.lower() and "<!--" not in text, f"{what} would break its script block"
    return text


def exercises(stub_dir):
    """Each exercise as it appears in the student's file, plus its reference solution from src/solutions/.

    Returns {"heads": {week: file header}, "fns": {"<week>-<function>": {"stub": ..., "sol": ...}}}.
    """
    heads, fns = {}, {}
    for stub_file in sorted(stub_dir.glob("w[0-9][0-9]*_*.py")):
        num, suffix = re.match(r"w(\d\d)([a-z]?)_", stub_file.stem).groups()
        week = f"w{int(num)}{suffix}"  # w04p_pandas.py -> w4p
        stub_src = stub_file.read_text(encoding="utf-8")
        sol_src = (SRC / "solutions" / stub_file.name).read_text(encoding="utf-8")
        sols = {n.name: ast.get_source_segment(sol_src, n) for n in ast.parse(sol_src).body if isinstance(n, ast.FunctionDef)}
        defs = [n for n in ast.parse(stub_src).body if isinstance(n, ast.FunctionDef)]
        # everything above the first function: docstring, imports, constants (minus section rulers)
        head = stub_src.splitlines()[: defs[0].lineno - 1]
        heads[week] = "\n".join(line for line in head if not line.startswith("# ----------")).strip()
        for n in defs:
            assert n.name in sols, f"src/solutions/{stub_file.name} has no {n.name}()"
            fns[f"{week}-{n.name}"] = {"stub": ast.get_source_segment(stub_src, n), "sol": sols[n.name]}
    return {"heads": heads, "fns": fns}


def slug(title):
    # same rule as encSlug() in src/parts/40-encyclopedia.js
    return re.sub(r"[^a-z0-9_]+", "-", title.replace("`", "").lower()).strip("-")


def encyclopedia(lessons_text):
    """The encyclopedia markdown, after checking entry names are unique and every #encyclopedia/ link resolves."""
    text = (SRC / "encyclopedia.md").read_text(encoding="utf-8")
    slugs = [slug(t) for t in re.findall(r"^### (.+)$", text, re.M)]
    dup = {s for s in slugs if slugs.count(s) > 1}
    assert not dup, f"encyclopedia entries share a name: {dup}"
    broken = set(re.findall(r"#encyclopedia/([\w-]+)", text + lessons_text)) - set(slugs)
    assert not broken, f"links to missing encyclopedia entries: {broken}"
    return script_safe(text, "encyclopedia.md")


def build(cheatsheet, stub_dir):
    lessons = "\n".join(
        f'<script type="text/markdown" id="md-{f.stem}">\n{script_safe(f.read_text(encoding="utf-8"), f.name)}</script>'
        for f in sorted((SRC / "lessons").glob("*.md"))
    )
    parts = sorted((SRC / "parts").glob("*"))
    slots = {
        "{{CHEATSHEET}}": script_safe(cheatsheet.read_text(encoding="utf-8"), "CHEATSHEET.md"),
        "{{LESSONS}}": lessons,
        "{{ENCYCLOPEDIA}}": encyclopedia(lessons),
        "{{DATA}}": (SRC / "data.js").read_text(encoding="utf-8"),
        "{{EXERCISES}}": script_safe(json.dumps(exercises(stub_dir), ensure_ascii=False), "exercises"),
        "{{PARTS_JS}}": "\n".join(f.read_text(encoding="utf-8") for f in parts if f.suffix == ".js"),
        "{{PARTS_CSS}}": "\n".join(f.read_text(encoding="utf-8") for f in parts if f.suffix == ".css"),
    }
    page = (SRC / "site.html").read_text(encoding="utf-8")
    for key, value in slots.items():
        assert page.count(key) == 1, f"{key} must appear exactly once in src/site.html"
        page = page.replace(key, value)
    return page


if __name__ == "__main__":
    ap = argparse.ArgumentParser(description=__doc__.splitlines()[0])
    ap.add_argument("--cheatsheet", type=Path, default=ROOT.parent / "python-path" / "CHEATSHEET.md")
    ap.add_argument("--exercises", type=Path, default=ROOT.parent / "python-path" / "exercises")
    args = ap.parse_args()
    page = build(args.cheatsheet, args.exercises)
    (ROOT / "dist").mkdir(exist_ok=True)
    (ROOT / "dist" / "artifact.html").write_text(page, encoding="utf-8")
    (ROOT / "docs" / "index.html").write_text(SKELETON + page + "</body></html>", encoding="utf-8")
    print(f"built dist/artifact.html and docs/index.html ({len(page):,} chars)")
