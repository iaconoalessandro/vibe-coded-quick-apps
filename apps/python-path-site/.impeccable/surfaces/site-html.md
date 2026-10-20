---
version: 1
slug: "site-html"
primary_target: "site.html"
related_targets: []
---

# Surface brief: Python Path (single-page artifact)

Scope: the whole artifact (Today, week pages, Project, Cheat sheet). Visitor mode: Operate.
Audience: the owner alone, daily, Mac half-window beside VS Code and phone. Task: see and tick today's next exercises; read the week; quiz; look things up.
Constraints: content and progress ids unchanged (progress/state: done, quiz); cheat sheet from CHEATSHEET.md; owner's avoid list in PRODUCT.md.
Decision: the owner chose BOTH the rolled direction (Orario) and the pick (Olivetti manual) as two switchable looks over one shared layout, each in light and dark.

## Direction contract
THESIS: The path is a timetable you are riding (Orario) or a manual whose chapters each own a colour (Olivetti); either way Today puts the next three exercises first. Refuses the course-dashboard default of sidebar, progress ring and card grid.
OWN-WORLD: Orario: rail-green band, pure white ground, ink near-black, one-pixel rules, square structure, signal red only for "behind plan"; Archivo with its narrow width for column heads, tabular figures. Olivetti: flat colour fields, one colour per week (green, blue, red, ochre, violet...), the current week's colour owns the header field; Hanken Grotesk heavy numerals. Code in JetBrains Mono in both.
STORY: Open, see the week you are actually on and whether you are behind plan, tick the next exercise, continue the lesson; weeks, project and cheat sheet are one step away.
FIRST VIEWPORT: Top bar: name left, Today / Project / Cheat sheet right. Then date and DSS countdown on one line, the week title large, an optional plan note, a done count with a thin rule, the next three exercises as tall tickable rows (largest targets on screen), two text links (lesson, quiz). Below: the plan as a timetable with a route line (Orario) or colour swatches (Olivetti).
FORM: Orario, assigned candidate 4 of 7; Olivetti manual, own pick (candidate 1). Seed key c594f61e.
FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance
