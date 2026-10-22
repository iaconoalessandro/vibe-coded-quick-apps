# 3. Components and patterns

One small system for every page family, in plain HTML, CSS and script. The chrome is written once in `tools/shell.js` and stamped into the root pages (`npm run shell`) and the Career Explorer (`npm run careers`); the styles are the "Shared chrome and components" block at the end of `css/app.css`. `tests/ux-test.js` fails if a page's chrome differs from the generator's.

Mode per surface (Impeccable's terms): the calculators, directory, planner, Compass, compare and the map are **Operate** surfaces (familiar controls, dense where useful, no decoration); country guides, field and role pages, the method page and the hubs are **Read** surfaces (measure about 68 characters, headings that say what follows, contents and next steps).

## Tokens

Every colour and face comes from the three editions' custom properties (`--paper`, `--paper-2`, `--ink`, `--ink-2`, `--muted`, `--rule`, `--hair`, `--accent`, `--link`, `--font-head`, `--font-ui`, `--font-body`). Added:

| Token | Value | Use |
|---|---|---|
| `--space-1` … `--space-7` | 4, 8, 12, 18, 28, 44, 64 px | spacing steps |
| `--measure` | 68ch | the widest a paragraph runs |
| `--tap` | 44px | the height aimed for on touch targets (a preference; WCAG 2.2 AA asks for 24 px) |
| `--strip-h` | 42px | the pinned strip; `scroll-padding-top` keeps anchors and focus clear of it |
| `--surface-active`, `--surface-hover`, `--border-subtle` | 6%, 3% and 14% ink | the selected tab, a hover, a quiet button edge |
| `--ease-out` | `cubic-bezier(.16, 1, .3, 1)` | every fold and lift |
| `--link-tint`, `--muted-tint` | darker link and secondary text | read through `--link` / `--muted` inside any tinted box, so contrast holds on `--paper-2` |

Corners are square everywhere (the Atlas's rule, now tested for the new block too). Focus is the global `:focus-visible` outline, 2 px in the accent colour.

## Chrome

| Component | Markup | Behaviour and states |
|---|---|---|
| Skip link | `a.skip[href="#main"]` first in `<body>` | Off-screen until focused; then top-left over the strip. Target `main#main[tabindex=-1]`. |
| Strip | `div.ticker` (master's pages) or `div.ticker.strip` | Pinned. Holds the edition and language pickers. On master's pages the Admissions Index moves and has a **Pause / Play** button (`aria-pressed`; remembered for the visit; starts paused under reduced motion). Elsewhere it shows the section's name and nothing moves. |
| Nameplate | `header.masthead` | Full with motto on the front page, compact elsewhere. |
| Global navigation | `nav.site-nav[aria-label="Main"] > ul > li > a[data-section]` | Five links. Current section: `aria-current="page"` on its hub, `"true"` deeper; marked by a 4 px bar and bold, not colour alone. Below 760 px with script: a **Menu** button (`aria-expanded`, `aria-controls`), which also names the current section; Escape closes and returns focus. Without script the list stays open and wraps. |
| Section navigation | `nav.sections[aria-label=<section>]` | The section's pages; current `aria-current="page"`. One row, scrolling sideways on narrow screens. In the master's section the calculators keep their two labelled clusters. |
| Breadcrumbs | `nav.trail[aria-label="Breadcrumb"] > ol#trail` | Home › section › page; last item `aria-current="page"`, not a link. The Atlas rewrites it per country and view. Links are 25 px tall targets. |
| Footer index | `nav.site-foot[aria-label="Site index"]` | Five columns (two, then one, on narrow screens). |

## Content patterns

| Pattern | Class | When to use | Notes |
|---|---|---|---|
| Page head | `.page-head`, `.front-head` | Top of a hub or reference page | `h1` + standfirst; optional photograph (`.page-head-photo`). No kicker on new pages. |
| Task list | `ul.tasks > li.task` | Entry points named by what the reader wants to do | Heading link, one paragraph, optional `ul.task-links` of direct links (labelled). `.tasks-row` lays them in columns. Not cards: ruled rows. |
| Next steps | `nav.next > ul.next-list` | Foot of a page or view | Link plus one line on what is there. Never a dead end. |
| Notice | `.notice[role="note"]`, `.notice.warn` | Something to know before acting on the page (official advice applies) | Label, sentence, link to the full text. |
| Disclosure | `details.disc > summary > h3.disc-t (+ span.disc-n)` | Optional, specialist or time-bound parts of a long view | Native element: keyboard and assistive technology with no script. The label is the part's own heading plus what it holds or how long it is; a verdict that could block the reader stays in the label. Never nested. Parts needed before deciding are built open. |
| Disclosure tools | `.disc-tools` | Above the first folded part | "Open every part" (`aria-pressed`) and, in the Atlas, "Read the whole guide on one page". |
| Figure | `figure.fig` + `figcaption` + `.fig-src` | A diagram or chart | The caption says what it shows, what it does not claim, and its source and date. A table or list with the same content sits beside it. |
| Scrolling table | `div.tbl-scroll[role="region"][tabindex="0"][aria-labelledby]` | A table wider than the page | Scrolls inside itself; focusable so the keyboard can scroll it; `position: relative` so hidden labels do not widen the page. |
| Long document | `.doc-layout` (`nav.doc-toc` + `.doc-body`) | The method page | Contents beside the text, pinned on wide screens. |
| Guide navigation | `nav.atlas-toc.viewnav > ol[role="tablist"]` | A country's views | The dossier's index tabs (below): links with `role="tab"` and `aria-selected`; a strip on narrow screens that scrolls the current view into sight. |
| Source and date | existing claim marks `[n]`, "Checked", "read {date}" | Any factual line | Unchanged; each view lists its own numbered sources at its foot. |

## Archetypes

Two arrangements of the components above; the styles are the "Decision Workspace and Layered Dossier" block at the end of `css/app.css`.

| Archetype | Where | Markup | Behaviour |
|---|---|---|---|
| Decision Workspace | The seven calculators (`js/engine.js`) | `.q-grid`: `#stepnav[role="tablist"]` and the running score in the rail, `#wizard[role="tabpanel"]` with each question's margin note beside it | The chosen step has the ink tint (`--surface-active`) and a 2px ink edge. Changing step folds the old page away on its left edge while the new one unfolds (240ms, `.fold-ghost`). |
| Layered Dossier | A country's guide in the Atlas (`js/page-map.js`) | `.atlas-body`: the view tabs (`ol[role="tablist"]`, the chosen one marked in the accent colour), `#atlas-sheet[role="tabpanel"]` | Flat ruled paper, no edges or shadows. Choosing a view lifts its page 3px into place (200ms). Each tab keeps its own address. Below 1101px the tabs are a strip. |

Tabs everywhere: arrows, Home and End move the focus (`js/ui.js`), Enter or Space opens the tab. Motion is transform and opacity only on `--ease-out`, and becomes an 80ms fade under reduced motion. Buttons (`.btn`) have a `--border-subtle` edge and a `--surface-hover` tint.

## Disclosure behaviour, in full

- A link or address that names a part (`#de/hiring/apply`; on field pages any id inside a part) opens it, scrolls to it and moves focus to its summary.
- "Open every part" opens all parts in the view (Atlas: remembered for the visit).
- Printing opens every part and restores the folds afterwards. The Atlas also prints from "Whole guide on one page".
- Browser Find: Chromium opens a closed `<details>` when it finds a match; Safari and Firefox do not search closed parts reliably, which is why "Open every part" and the whole-guide view exist and are offered beside the first fold.
- With no script, each part opens by itself; nothing is hidden for good.

## Figures in the site

| Figure | Where | Question it answers | Data | Equivalent |
|---|---|---|---|---|
| Track-to-field diagram | `study.html#pathways` | Which master's track leads to which career field? | `careers/data/careers.json` (each field's calculators) | Table beside it, one row per field |
| Recruiting timeline | `jobs.html#when` | When does each window open, and for whom? | `tools/careers/calendar.js` (the calendar page's own rows) | It is a table: letters and names in every cell, confidence column, each row linked to its full entry |
| First-weeks line | `map.html#<cc>/arrival` | What do I do after arriving, in what order, on this passport? | the country's arrival steps and visa verdict | Ordered list of links; the steps' full text below |
| World and hub maps, key-figure strips, demand matrix, pay against rent | Atlas | (existing) | (existing) | (existing lists and tables) |
| Full recruiting calendar | `careers/recruiting-calendar.html` | (existing) | (existing) | (existing) |

Not built: a cross-programme fee chart. Fees are in five currencies and three bases (total, year, semester); the directory already refuses to convert them, and a chart would compare what the data says is not comparable.

Photographs: two existing, licensed photographs were given a place (`picker.jpg` on the front page, `scoring.jpg` on the jobs page; `CREDITS.md` updated). No new images were sourced.
