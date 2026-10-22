# 4. Validation

Design note (10 October 2026): The City is now the only design. Edition comparisons
below describe the earlier audit; the edition picker and saved preference are removed.

What was run, on what, and what it showed. "Agent walkthrough" means the agent drove the built site in a browser; no person other than the agent tested anything, and nothing here is a usability-test result.

## 4.1 Tests and build

| Check | Result |
|---|---|
| `npm test` at the baseline | 13 suites pass |
| `npm test` on this branch | 14 suites pass (the 13, updated where they pinned the old navigation, plus `tests/ux-test.js`, 150 checks) |
| `npm run careers` | 157 pages; 0 interface strings without Italian |
| `npm run shell` | idempotent (a test fails if a page is stale) |
| `npm run build` | passes; `_site/` served under `/admetia/` opens with bundled, hashed CSS and JS and registers the service worker |
| Model regressions (`mba`, `masters`, `computing`, `profiles`, `features`, `deadlines`) | unchanged and passing; no model, score or data file was edited |

## 4.2 Content preservation

- **Ledger** (`node tools/ux-ledger.js`, also in `npm test`): 30,287 text blocks on 167 baseline pages, 0 missing; 3,567 script strings, 0 missing; external links, 0 missing; data, downloads, photographs, typefaces, research: 0 changed, 0 removed. Eight exceptions, all labels or decoration, each with its reason in `content-exceptions.json`.
- **Rendered country guides** (the Atlas is drawn by script, so the ledger's script-string check was backed by a browser comparison of the baseline page with this branch, same origin, English, EU passport):

| Country | Baseline blocks | Whole-guide view | Union of the eight views | Baseline sources | Sources now | Baseline height | Tallest view |
|---|---|---|---|---|---|---|---|
| Germany | 577 | 577 (only the `<h1>` differs: it now names the view) | all 577 present | 132 | 132, same titles and links | 26,839 px | 7,849 px |
| Russia | 360 | 360 | all present | 74 | 74 | 19,310 px | 5,685 px |
| Singapore | 383 | 384 | all present | 85 | 85 | 21,072 px | 6,651 px |
| Italy | 503 | 503 | all present | 116 | 116 | 25,966 px | 8,268 px |

- Not compared in the browser: the other 42 countries (same code path; their data files are byte-identical), other passports, Italian.

## 4.3 Accessibility

Target: WCAG 2.2 AA. An automated scan finds a minority of failures; passing it is not conformance.

**Automated (axe-core 4.10.2, tags wcag2a/aa, wcag21a/aa, wcag22aa, best-practice; The City edition, 1280 px unless said).** Pages and states scanned: front page, master's hub, jobs hub, method, directory, business picker, finance calculator (first step), hiring with a plan drawn, Atlas world view, Germany overview, cities, getting hired (all parts open), visas, working there, life there, first weeks, sources, careers home, a field page (all parts open), a role page, recruiting calendar, compare. FBI Watchlist: jobs, getting hired, master's hub, a field page. Wall Street: master's hub, first weeks.

| Finding | Where | WCAG | Status |
|---|---|---|---|
| Link colour on tinted boxes 4.13:1 | boxouts, reality checks, verify boxes, plan box | 1.4.3 | Fixed: `--link-tint` through the token on every tint |
| Green verdict text 2.9–3.3:1 | "No permit needed" chips | 1.4.3 | Fixed: The City's `--high` darkened to 5.8:1 / 4.9:1 |
| Filter pill text 4.28:1 (34 nodes) | directory | 1.4.3 | Fixed |
| Wall Street link colour 4.3:1 | every text link in that edition | 1.4.3 | Fixed: `--link` 5.8:1 |
| Watchlist strip label 3.9:1, accent links 4.4:1, grey notes on tint 4.2:1 | strip, "more" links, tinted boxes | 1.4.3 | Fixed |
| Breadcrumb targets 17.5 px tall beside another link | country views | 2.5.8 | Fixed: 25 px |
| Empty table headers (14) | Hubs compared, standing table | best practice | Fixed: plain cells |
| Complementary landmark inside a region | master's hub | best practice | Fixed |
| Two landmarks with one name | careers home | best practice | Fixed |
| Heading skips from h1 to h3 | calculator questionnaires (`js/engine.js:394`) | best practice (1.3.1 advisory) | **Open.** Existing; the questionnaire's group headings are styled and tested as `h3`. |
| Complementary landmark inside a section | recruiting calendar's "How sure is each line?" | best practice | **Open.** Existing. |
| Region landmarks sharing a name | a field page's two score tables | best practice | **Open.** Existing. |
| Citation marks 9 × 16 px where two sit side by side (2 nodes on Germany's Cities view) | Atlas demand tables | 2.5.8 (inline targets are exempt; adjacent ones in a table cell are arguable) | **Open.** Existing. Enlarging them would change the line spacing of every cited sentence. |

After the fixes the scanned pages report no WCAG A or AA violations in the three editions checked. Not scanned: Italian (same markup, longer strings checked for overflow only), the calculators' results pages, the Compass mid-questionnaire.

**Keyboard (agent, real key presses in the browser pane).**

| Check | Result |
|---|---|
| First Tab on any page | Skip link appears at the top left; Enter moves focus to `main` |
| Tab order on the master's hub | skip → Pause → language → edition → nameplate → global navigation → section navigation → content |
| Menu at 320 px | Enter opens (`aria-expanded="true"`), five 48 px items, Escape closes and focus returns to the button |
| A country's views | view links change the address; focus lands on the `<h1>` naming country and view; Back and Forward move between views |
| Deep link to a folded part (`#de/hiring/apply`) | the part opens, its summary has focus, 65 px from the top (strip ends at 42 px), Back returns to the previous view |
| Routes filter | read in the code and the accessibility tree, not pressed: a radio group whose arrow keys move and select (the same control as the passport picker); the count of routes shown is in a polite live region |
| Folded parts | native `<details>`, so Enter and Space toggle; opened by deep link in the check above, not toggled by key press |

**Screen reader.** No screen reader was run. What was checked instead: the accessibility tree of a country view (roles and names of the navigation, breadcrumb, guide navigation and passport control are as intended), landmark and heading lists by script, and axe's name/role/value rules. A VoiceOver and an NVDA pass on the Menu button, the routes filter, a folded part and the timeline table remain to be done by a person.

**Visual.**

| Check | Result |
|---|---|
| Reflow at 320 CSS px | No horizontal page scroll on: front, master's hub, jobs, method, directory, hiring, a field page, and Germany's eight views. Two defects found and fixed (hidden labels widening the page from inside the timeline; a long part label not wrapping). Wide tables scroll inside their own region. |
| Italian at 320 CSS px | Front, jobs, method: no overflow. Germany's Getting hired, all parts open: two verdict chips with long Italian labels overflowed; fixed (they wrap). Other views and pages were not re-checked in Italian. |
| Editions | The City, Wall Street and FBI Watchlist checked on the hubs and a country view at 1280 px. |
| Reduced motion | The Admissions Index starts paused; the edition change and opening titles already honoured it. Not re-tested by emulation. |
| Text resize to 200%, text-spacing overrides | **Not tested.** |
| Print | Folded parts open on `beforeprint` (code and test); the chrome is hidden. No printed page or PDF was inspected. |

## 4.4 Web Interface Guidelines review

Rules fetched from `vercel-labs/web-interface-guidelines` on 10 October 2026 and applied to the new chrome, pages and scripts. Fixed during the review: headings balanced, `touch-action` on the new controls, safe-area padding on the navigation and breadcrumbs, numerals for counts of ten and over, a space between a part's title and its note in its accessible name. Remaining, with reasons:

```text
## css/app.css
css/app.css:2820 - main:focus outline removed: main is focused only by the skip link, never tabbed to
css/app.css:3163 - #compare:focus outline removed: same, a scroll target

## tools/careers/render.js
tools/careers/render.js:220 - hardcoded thousands separator in "10,729 words": the text is built once, in English, at build time

## tools/shell.js
tools/shell.js:145 - brand name not wrapped in translate="no": tests/intro-test.js pins the nameplate's exact markup

## index.html, study.html, jobs.html, method.html
(all) - no <meta name="theme-color">: existing pages have none; three editions would each need their own
(all) - headings in sentence case, not Title Case: the site's editorial style

## js/page-map.js
js/page-map.js:1501 - individual folded parts are not in the address unless linked (#cc/view/part); "Open every part" is kept for the visit, not in the URL
js/page-map.js - long views are not virtualised: split by view instead; the whole-guide view is the deliberate exception

## js/theme.js, careers/assets/careers.js
✓ pass
```

## 4.5 Acceptance scenarios (agent walkthroughs on the built site, `/admetia/`)

| # | Start | Actions | Result | Remaining friction |
|---|---|---|---|---|
| 1 Student | `/admetia/` | *Choose a master's* → *Browse and compare programmes* → Finance filter → *Test my chances* at Bocconi MSc Finance | Directory shows 25 of 136, filter in the address (`#t=mif`); each row has its requirements, fee, deadlines and source tags; the calculator opens with "Testing your chances at Bocconi — MSc Finance", breadcrumb Home › Choose a master's › Business calculators, Finance marked, and a link back to the directory | The breadcrumb says "Master's calculator", not the track; the track is marked in the section navigation instead |
| 2 Internship seeker | `/admetia/jobs.html` | *Studying, and looking for an internship* → Germany → *How hiring works in Germany, in full* | Planner preset to "Still studying" / "Internship to job"; the plan names the route and its dates with sources; the country view shows 2 of 6 routes, experienced-hire routes not on screen, "Every path" one control away; the calendar, toolkit and interview prep are linked at the foot | The planner needs a country before it shows anything; the jobs page's timeline covers six countries only, as the research does |
| 3 Working professional | `/admetia/hiring.html#-/working/exp` | Netherlands → the plan → full hiring view → visas | Stage "Already working", path "Experienced hire"; route shown as "number 3 of 6"; links to `#nl/hiring/exp` and `#nl/visas`; student routes restored by "Every path" | — |
| 4 Relocating | `/admetia/map.html#nl/visas` | Pick "Another passport" → First weeks → Singapore visas | Nine situations with verdicts (Open to you, Needs a sponsor, Limited), "Traps people fall into" and "Not settled yet"; First weeks shows "A visa or permit comes first", then seven steps; Singapore on a non-European passport says "Outside Admetia's scope" rather than guessing | Costs are spread over three views (visa figures, Working there, Life there), as in the data |
| 5 Undecided (walked on the source pages, not the built site) | front page | "Not sure…" → by what you studied → Economics → a role → Compare → Back | Each step is a link; Back returns through each page; no questionnaire is required | The Compass's results were not re-walked (the page is unchanged) |
| 6 Keyboard only | as 4.3 | Skip link, Menu, view links, a folded part by deep link, Back | All completed | See the screen-reader note above |

## 4.6 Performance

- `map.html` and `hiring.html` no longer load the three calculator models or the ticker (about 200 KB less script on those pages).
- The front page, the jobs hub and the method page load no model and no Atlas data.
- New images: none. Two existing photographs are reused with their existing responsive sources, dimensions and alt text.
- Not measured: load times, Core Web Vitals.

## 4.7 Known limits

1. No real user has seen this structure. The script in `02-journeys-and-ia.md` §2.6 is ready and unrun.
2. Screen readers, 200% text and text-spacing overrides were not tested.
3. Browser Find does not open folded parts in every browser; "Open every part" and the whole-guide view are the alternative.
4. The Career Explorer's pages are served unbundled, as before.
5. The research library is linked as plain Markdown; it is not rendered as pages.
