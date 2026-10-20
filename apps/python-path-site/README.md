# Python Path

A personal study page for a 7-week path from zero Python to a data-engineering course project (DSS, due 11 and 18 December 2026), then an exam retake and a career track.

- **Live (claude.ai, progress synced):** https://claude.ai/artifact/ATih4P8Ama1jkHyG5DnYJG (private to the owner)
- **GitHub Pages copy:** https://iaconoalessandro.github.io/python-path-site/ (progress saves only in the browser you use)
- **Exercises:** the separate `python-path` repo (stubs in `exercises/`, checked with `pytest`)

## What's here

```
src/site.html        page shell: layout, both looks (Orario, Olivetti), Today view, router, saving
src/parts/           week page, DSS project view, cheat sheet view (JS + CSS each)
src/lessons/*.md     the weekly lessons
src/data.js          weeks, tasks, quizzes, Sunday questions, DSS assignments, later phases
build.py             assembles the page; injects CHEATSHEET.md from the python-path repo
docs/index.html      built page served by GitHub Pages
dist/artifact.html   built page for the claude.ai artifact (git-ignored)
PRODUCT.md           product record; .impeccable/ and DESIGN.md hold the design decisions
tools/               preview wrapper and headless screenshot helper used for checks
```

## Build

```bash
python3 build.py
```

It expects `../python-path/CHEATSHEET.md` next to this repo (`--cheatsheet PATH` to point elsewhere). Commit `docs/index.html` to update GitHub Pages.

## Progress

On claude.ai the page stores ticks and quiz answers in the artifact's database, document `progress/state` (`done`: task id → true, `quiz`: question key → chosen option). It also keeps a copy in the browser. The Pages copy uses only the browser copy.
