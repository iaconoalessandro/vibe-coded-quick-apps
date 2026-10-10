# 1. Inventory, baseline and migration ledger

Design note (10 October 2026): The City is now the only design. Edition comparisons
below describe the earlier audit; the edition picker and saved preference are removed.

Baseline: commit `cb68ad5` (`main`, 10 October 2026). Everything below was read from the repository and the rendered pages; nothing is inferred from memory of the site.

## 1.1 What is published, and what is not

`tools/build.js` copies the whole repository into `_site/` except tooling and repository documents.

| Published (in `_site/`) | Not published |
|---|---|
| The root pages, `404.html`, `sw.js`, `sitemap.xml` | `tests/`, `tools/`, `design/` (parked mockups), `docs/` |
| `careers/` (157 generated pages, 16 template downloads, search index, Compass data) | `README.md`, `CLAUDE.md`, `PRODUCT.md`, `package*.json` |
| `data/` (models, deadlines, fees, the Atlas's 46 × 3 country files) | `careers/BUILD_NOTES.md`, `careers/data/careers.json` |
| `css/`, `js/`, `fonts/`, `img/`, `CREDITS.md` | `graphify-out/`, `.github/`, `.claude/` |
| `research/` (about 300 Markdown files, served as plain text) | |

**Research: published, but mostly unlinked.** At the baseline the library was reachable only from an Atlas country page's "Research behind this page" (its briefs and its visa guide). `research/README.md`, the decisions, evidence, money and getting-in files were on the server with no link to them. `research/_working/` and `research/product/` are internal notes that happen to be served. The refactor links the library from `method.html#library` (folder by folder, starting from its own index); it does not rewrite or surface the internal notes.

`docs/` (verification audit, gap analysis, hiring schema, launch audit) was never part of the public site and still is not.

## 1.2 Routes at the baseline

| Route | Type | Drawn by | Words (example) |
|---|---|---|---|
| `index.html` | Front page: calculator landing | static | 500 |
| `business.html`, `it.html` | Track pickers | static | 400 |
| `mba.html`, `masters.html?track=mif\|mim\|marketing`, `computing.html?track=cs\|dsai\|conversion` | Questionnaire → results at `#results`; `?school=<id>` opens at a programme | `js/engine.js`, `page-*.js`, `results-kit.js` | — |
| `programmes.html` | Directory of 136 programmes; filters in the fragment (`#t=mif;…`) | `js/page-programmes.js` | — |
| `map.html` | World map and list of 46 countries | `js/page-map.js` | — |
| `map.html#<cc>` | A country's whole guide on one page | `js/page-map.js` | Germany 9,385 words, 26,638 px, 10 sections, 85 sub-headings, no disclosure |
| `map.html#<cc>/<hub>` | The same page with a hub open | `js/page-map.js` | — |
| `hiring.html`, `hiring.html#<cc>/<stage>/<path>[/<field>]` | Planner and 46-country table | `js/page-hiring.js` | — |
| `careers/index.html` | Career Explorer home | generated | 1,000 |
| `careers/fields/*.html` (13) | A field's whole report | generated | Finance 24,770 |
| `careers/roles/*.html` (124) + `roles/index.html` | A role family, ten template sections | generated | 1,900 |
| `careers/backgrounds/*.html` (11) | Roles by degree subject | generated | 3,400 |
| `careers/compare.html?pick=…`, `compass.html#<answers>` | Tools | generated + `careers.js`, `compass.js` | — |
| `careers/italy-pay.html`, `sources.html` | Reference | generated | 5,600 / 15,200 |
| `careers/recruiting-calendar.html`, `toolkit.html`, `interview-prep.html` | Getting-in pages | generated + `getting-in.js` | 4,500 / 3,500 / 7,600 |
| `careers/templates/*.docx`, `*.tex` (16) | Downloads | generated | — |
| `404.html` | Not found | static | — |

Languages: English and Italian on every page (dictionary keyed by the English, `js/i18n-it.js`; the Atlas carries its Italian beside its English). The Career Explorer's research text stays in English by design.

Saved in the browser: calculator answers (`admissions-calc:<key>`), the Atlas passport (`admissions-calc:atlas`), edition, language, visit-count opt-out, Compass answers (`admetia:compass`), calendar filters (`admetia:calendar`), interview stories (`admetia:star`).

## 1.3 Baseline results

- `npm test`: 13 suites, all passing. `npm run build`: passes.
- Browser, 1280 px and 800 px: every page family opened without console errors.

## 1.4 Problems found

**Observed** (measured on the baseline in the browser or read in the source):

1. The global navigation was labelled "Calculators" and led with two calculator clusters (nine links); Atlas, Hiring and Careers came last. At 800 px "Atlas" was clipped and "Careers" was off-screen in a row that scrolls sideways with no cue.
2. `programmes.html` had no entry in the navigation at all: it was reachable from one line on the front page and from the 404 page.
3. The front page was a calculator landing ("Work out where you actually stand"). Nothing on it led to careers, hiring or moving except the navigation in point 1.
4. A country guide was one view: Germany 26,638 px. A reader wanting visa rules scrolled 14,600 px past hubs and hiring; the "On this page" list jumped within the page but could not be linked to.
5. Field pages: Finance 24,770 words in one page, with 10,700 words of "Map of areas" between the introduction and the list of role families.
6. `careers/italy-pay.html` was not in the Career Explorer's local navigation (linked from the home page and from role pages only).
7. Calendar, Toolkit and Interview prep sat under "Careers" while `hiring.html` sat under "Atlas": one journey, two sections.
8. The opening titles (kinetic type about GMAT and verdicts) played on any arrival from outside, including a deep link to a country's visa rules.
9. The moving Admissions Index ran on every root page with no pause control (WCAG 2.2.2), on pages where it had no bearing (Atlas, hiring).
10. `map.html` and `hiring.html` loaded three calculator models (about 200 KB) only to feed that ticker.
11. Working notes were printed among the guidance: each field report's "Scope notes" paragraph ("search allowance ran out…") inside section 1; a country's research briefs, unverified list and verification log as a section of its guide.
12. Root pages had no skip link and no `<main id>`; the Explorer's pages had both, with their own classes. Breadcrumbs existed only in the Explorer.
13. Contrast below 4.5:1: The City's link colour on tinted boxes (4.13), its green verdict text (2.9–3.3), its filter-pill text (4.28); Wall Street's link colour (4.3); FBI Watchlist's strip label (3.9) and accent links (4.4).
14. Labels for the same thing differed: "Compass" / "Career Compass", "Italy pay" / "Italy pay add-on", "Programmes" / "Programme Directory", "Atlas" / "Where the work is".
15. The README and the first draft of the new copy said 192 hubs; the data has 200. The new pages state 200, and a test compares the number with the data.

**Hypotheses** (plausible, not measured; for the validation script in `02-journeys-and-ia.md`):

- Readers do not know what "Atlas" holds until they open it.
- A student choosing a master's wants the directory before a questionnaire.
- "Getting in" was read as admissions rather than hiring.

## 1.5 Migration ledger

The ledger is generated, not hand-kept: `node tools/ux-ledger.js --write` compares the baseline commit with the working tree and writes

- `ledger-pages.json`: every baseline page with its count of text blocks, how many are still on the same page, how many moved and where;
- `ledger-blocks.csv`: every block that moved or was replaced, with a stable id (`<page>#<n>`), its anchor, a hash of its text, its status and where it now is;
- `content-exceptions.json`: the only things allowed to be missing, each with its reason.

Result on this branch: **30,287 text blocks on 167 pages, 0 missing**; 249 moved to another page; 3,567 script strings, 0 missing; every external link still present; no data file, download, photograph, typeface or research file changed or removed. Eight exceptions, all interface labels or decoration (the old local-navigation row, four renamed labels, two decorative numerals, one comment fragment). `tests/ux-test.js` runs the same comparison on every `npm test`.

Page-level decisions (the block-level detail is in the CSV):

| Id | Baseline route | Purpose / task | Decision | Now at | Pattern | Verified by |
|---|---|---|---|---|---|---|
| R1 | `index.html` | Calculator landing | Split: entry points → new front page; content → master's hub | `study.html#calculators`, `#choose`, `#highest`, `#how`, reality check | Hub: task list, then the original blocks | ledger (35 blocks → `study.html`); `ux-test` "old front page's content" |
| R2 | `business.html`, `it.html` | Pick a track | Retained; section navigation, breadcrumbs, next steps added | same | Picker | ledger; `site-test` |
| R3 | `mba.html`, `masters.html`, `computing.html` | Questionnaire, results | Retained untouched; shell only | same | Operate | model suites; `?school`, `#results` checks |
| R4 | `programmes.html` | Browse and compare programmes | Retained; now in the section navigation | same | Search, filters, compare | `programmes-test` |
| R5 | `map.html` | Choose a country | Retained; `#countries` anchor | same | Map with list equivalent | `atlas-test` |
| R6 | `map.html#cc` | A country's guide | Split by task into eight views, plus the whole guide on one page | `#cc` overview · `/cities` · `/hiring` · `/visas` · `/work` · `/life` · `/arrival` · `/sources` · `/all` | Sub-views; disclosures inside Getting hired | `ux-test` routes and views; browser comparison (04) |
| R7 | `map.html#cc/hub` | A hub's detail | Kept as an address; opens the Cities view | `#cc/<hub>` | Deep link | `ux-test` routes |
| R8 | country "Research behind this page" | Working notes | Moved out of the practical views | `#cc/sources` | Provenance view | `ux-test` views |
| R9 | `hiring.html` | Plan a route, compare countries | Retained; moved to the jobs section; stage-only links; `#compare` | same | Planner + table | `ux-test` hiring routes |
| R10 | `careers/index.html` and 150 explorer pages | Explore careers | Retained; shared shell | same | — | `careers-test` |
| R11 | `careers/fields/*.html` | A field | Reorganised in place: long sections fold at their own headings; sources one labelled part; scope notes to "How this field was researched" | same, `#research-notes` | Disclosures with expand-all | `ux-test` provenance; ledger |
| R12 | `careers/roles/*.html` | A role | Retained; "Getting hired in this role" links added | same | Read, with contents | `careers-test` word counts |
| R13 | `recruiting-calendar`, `toolkit`, `interview-prep` | Getting in | Retained at the same addresses; moved to the jobs section's navigation | same | — | `careers-test` nav |
| R14 | `careers/templates/*` | Downloads | Untouched | same | — | ledger: byte-identical |
| R15 | `research/**` | Research library | Untouched; now linked | `method.html#library` | Index of folders | ledger: byte-identical; `ux-test` links exist |
| R16 | reality checks, colophons | Limits at the point of use | Retained on every page that had one | same | Footer aside | `design-test` |
| R17 | Admissions Index ticker | Programme bars | Kept on the master's pages only; pause control | `study`, `business`, `it`, calculators, directory | Contextual | `ux-test` shell |
| R18 | Opening titles | Arrival effect | Kept on the three master's fronts only | `study`, `business`, `it` | Contextual | `intro-test` |
