"""Build the Python Path page from src/.

    python3 build.py [--cheatsheet PATH]

Writes two files from the same source:
  dist/artifact.html  the claude.ai artifact (no <html>/<head>: the artifact host adds its own skeleton)
  docs/index.html     the GitHub Pages copy (full document; progress saves only in that browser)

The cheat sheet text comes from the python-path repo's CHEATSHEET.md (single source).
"""
import argparse
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


def build(cheatsheet):
    lessons = "\n".join(
        f'<script type="text/markdown" id="md-{f.stem}">\n{script_safe(f.read_text(encoding="utf-8"), f.name)}</script>'
        for f in sorted((SRC / "lessons").glob("*.md"))
    )
    parts = sorted((SRC / "parts").glob("*"))
    slots = {
        "{{CHEATSHEET}}": script_safe(cheatsheet.read_text(encoding="utf-8"), "CHEATSHEET.md"),
        "{{LESSONS}}": lessons,
        "{{DATA}}": (SRC / "data.js").read_text(encoding="utf-8"),
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
    args = ap.parse_args()
    page = build(args.cheatsheet)
    (ROOT / "dist").mkdir(exist_ok=True)
    (ROOT / "dist" / "artifact.html").write_text(page, encoding="utf-8")
    (ROOT / "docs" / "index.html").write_text(SKELETON + page + "</body></html>", encoding="utf-8")
    print(f"built dist/artifact.html and docs/index.html ({len(page):,} chars)")
