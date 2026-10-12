# Admetia image-placement plan

Audit of 10 October 2026, branch `optimize`, working tree as found. This is a specification. No image was created, sourced, downloaded or placed, and no site file was changed.

Companion files: [coverage.csv](coverage.csv) (one row per page or view, 294 rows) and [image-briefs.json](image-briefs.json) (67 asset briefs, 68 placements). Evidence screenshots are in [evidence/](evidence/).

## 0. What was built (11 October 2026)

The plan below was implemented the next day, with four changes from what it specifies:

- **Country images are drawings, not sourced photographs.** The owner preferred generated illustrations in the same hand as the rest. They are captioned "Illustration." and described as such in CREDITS.md. Section 12's caution about named places still applies: they are impressions, not records.
- **33 of the 35 planned country images are in.** Romania and Singapore had no image supplied.
- **Every image is 3:2, not 4:3.** The supplied drawings fill a 3:2 frame and cropping would have cut objects at the edges.
- **Role figures are contained by clearing the next section** rather than by the section itself, so the research text's markup and its word-count test stay as they were.

Where things live: `tools/build-plates.sh` (renditions in `img/plates/`), `tools/careers/figures.js` (role figures and the eight diagrams), `tools/careers/render.js` (field header, role section), `PLATES` in `js/page-map.js` (Atlas), and checks in `tests/careers-test.js` and `tests/atlas-test.js`.

## 1. Recommendation

Add 68 images to 68 of the 294 pages and views assessed, and leave the other 226 as they are. The images belong to four families, each with one job:

| Family | Where | Placements | Unique assets | Kind |
|---|---|---|---|---|
| Field plates | the 13 career-field pages, in the header | 13 | 13 | drawn still life |
| Role scenes | 11 role pages whose workplace is physical and unfamiliar | 11 | 11 | drawn scene |
| Diagrams | 9 role pages where one paragraph hides a structure | 9 | 8 | live SVG or HTML, no image file |
| Country photographs | 35 Atlas country overviews | 35 | 35 | real photograph, sourced and credited |

The rule behind the split: **draw work, photograph places, diagram mechanisms.** A photograph of desk work looks the same for every job and cannot show a real employer, so careers are drawn. A place is a fact, so countries get real photographs. A process is clearer as a diagram than as either.

No hub, calculator, table or tool gets an image. Those pages are either routers that read in a screen or two, or working surfaces where an image would sit between a question and its answer. The front page stays typographic.

This is deliberately less than "an image per page". Admetia's readers arrive on deep links (PRODUCT.md), so the pages that most need a face are the field pages, the country guides and a minority of role pages, not the hubs.

## 2. Current imagery baseline (verified in the rendered pages)

Every state below was opened in a headless browser and its `<img>`, `<svg>`, `<canvas>` and CSS background images counted.

- **Editorial photographs or illustrations on screen: none.** 708 renders of the 177 static routes (two widths, two languages), 543 Atlas renders and 141 calculator and tool states contain no editorial image.
- **School marks (logos):** 30 visible in the Programme Directory's default list (31 with three programmes side by side) and 19 to 43 in the four business calculators' results. The three computing calculators' results show none. These identify rows; they are not editorial imagery.
- **Data graphics:** the track-to-field diagram on `study.html` (inline SVG with a table, E16); the Atlas world map and each country's hub map (SVG); and several graphics built from HTML and CSS (the recruiting timeline on `jobs.html` and the calendar, the score bars in each role's At a glance box, the key-figure strips and hub comparison bars in the Atlas).
- **On disk but shown nowhere:** `img/photo/` holds 13 photographs and their 36 WebP copies. CREDITS.md records that they were removed from the site on 10 October 2026, and the working tree has also removed their styles; no page, script or stylesheet references them. The eight line marks `img/mark-*.svg` are likewise unreferenced.
- **Not page imagery:** `img/og-admetia.jpg` is the link-preview card, referenced from page metadata only; the favicon and touch icon.

The 13 removed photographs were stock (eleven from Pexels, one from Wikimedia Commons): students at desks, a boardroom, trading screens, code on a monitor, graduation caps, billboards. Several are the clichés this brief rules out, and on phones the old stylesheet hid them. This plan does not bring any of them back.

## 3. The established visual direction, kept

The City: a financial newspaper. Salmon paper `#fff1e5`, ink `#33302e`, claret `#990f3d` for kickers and emphasis, teal `#0d7680` for links, buttons and meters, a second paper tone `#f2dfce` for feature boxes. Source Serif 4 for headlines, Hanken Grotesk for text and labels. Double rules, hairlines, square corners, no cards, no shadows. PRODUCT.md's commitment is "no decoration that competes with reading".

"Lighter" is taken to mean easier to scan and more inviting to start reading. Nothing here changes the palette, the type, the grid or the copy.

Two layout facts shape every placement:

- Headers set their standfirst across the full 1,120px column, about 125 to 150 characters a line at 1440px (E01, E09). A figure in the header's right column costs little height and brings that line down to a comfortable length. The simpler remedy, a narrower standfirst with nothing beside it, would also fix the line length and is the fallback if an asset is not ready.
- Role and field body text runs at a 782px measure, about 100 characters a line, inside an 846px column (measured, E04). There is no empty margin to put a figure in, so body figures float right inside their section and the text wraps beside them at about 500px.

## 4. Coverage

| | Count |
|---|---|
| Pages and views assessed (rows in coverage.csv) | 294 |
| of which static routes | 174 |
| of which dynamic states (calculator steps and results, planner, directory, compass, tools) | 28 |
| of which Atlas country rows (46 overviews with their whole-guide view, 46 sets of seven task views) | 92 |
| Decision: add images | 68 |
| Decision: keep current imagery | 60 |
| Decision: no image needed | 166 |
| Decision: blocked | 0 |
| Rendered on desktop (1440 × 900) | 294 of 294 |
| Rendered on phone (390 × 844) | 251; the other 43 are shared-layout-verified |
| Checked in Italian as well as English | 189 |
| Source-only | 0 |

What "rendered" covers, precisely:

- **Static routes:** all 177 addresses (the 174 assessed, plus `masters.html` and `computing.html` without a track and a missing address that serves the 404 page) at both widths in both languages, with layout measurements and first-screen and full-page screenshots. No script errors and no horizontal scrolling at 390px on any of them.
- **Atlas:** all 46 countries in all nine views at 1440px in English (414 renders). On phones, the overview and the Life there view for all 46, and every view for Germany, Italy and Japan. In Italian, the overview, Life there and Getting hired for Germany, Italy, Japan and the UAE on desktop and two countries on phones. The 43 rows marked shared-layout-verified are the other countries' six remaining task views on phones: same script, same template, different text.
- **Calculators:** all seven tracks walked from the first step to the results at both widths with synthetic answers (the second option of every question, the middle of every range); the Finance track also in Italian on desktop and the MBA in Italian on a phone.
- **Other states:** the hiring planner with a plan shown (Germany, Italy, Japan) and its table; a directory row opened and three programmes side by side; a calculator opened from the directory; role comparison with three roles; the careers search; unfolded sections of the calendar, toolkit and interview prep; the Career Compass through questions to results in the quick version (both widths, and Italian) and the full version.

Not done, stated plainly:

- I did not read every sentence of every page. For each of the 124 role pages I read the opening of "What you actually do" (the first 280 to 430 characters) and, for the 23 that were serious candidates for a figure, a longer extract of that section and of "A typical day and week". For each country I read the summary, the hub list and whether an advisory exists. Field, background and tool pages were read from the rendered page and their generators.
- Full-page screenshots of the longest pages (over about 16,000px) were inspected as reduced contact sheets, which show rhythm and density but not small text.
- Italian was checked for layout and length, not for the quality of translation. The Career Explorer's body text stays in English in Italian mode by design; only its menus and labels are translated (verified).
- The calculators were walked with one synthetic profile each. Other answer combinations change which programmes appear, not the page's structure.
- No real device, no screen reader and no user was involved. Every benefit claimed below is a likely benefit.

## 5. Site-wide art direction

### 5.1 Four families, one page furniture

| | Field plates | Role scenes | Diagrams | Country photographs |
|---|---|---|---|---|
| Medium | pen-and-ink drawing | pen-and-ink drawing | inline SVG or HTML | documentary photograph |
| Subject | the objects of the work, no people | the workplace, people small and from behind | the structure named in the paragraph | the working district of the lead hub, at street level |
| Colour | ink line; claret and teal as spot colour on one or two objects each | same | ink rules; one claret or teal element | natural, lightly muted; never duotone |
| Ground | transparent, on the paper | transparent, on the paper | on the paper | full-bleed rectangle |
| Ratio | 4:3 | 4:3 | intrinsic, vertical flow | 3:2 |
| Frame | none | none | none | none; square corners |
| Caption | none (decorative) | one line, ends "Illustration." | one line | "District, city. Photograph: author, licence." |
| Role for assistive technology | decorative, empty alt | informative | informative, labels are live text | informative |

Captions use the figure style the site already has (`.fig figcaption`, 14.5px Hanken Grotesk, with `.fig-src` for the credit line; css/app.css about line 2391). Photographs are credited in CREDITS.md and stored with the site, as the earlier ones were; nothing is hot-linked.

### 5.2 Tone

Plain and accurate. The role pages are candid about hours and odds, so the drawings show work as it is: a desk before dawn, a bench with a board on it, a cabinet on a plant floor. Nothing aspirational, nobody smiling at the viewer.

### 5.3 Reuse

One asset is reused: the data-pipeline diagram (AST-031) appears on the data-engineer and analytics-engineer pages with a different stretch highlighted. Nothing else is shared, on purpose:

- Field plates are not reused as thumbnails in the careers hub, the roles index or the background pages. At 50 to 80px a line drawing of five objects is a smudge.
- Role scenes are not reused across neighbouring roles. The bank-trader desk is not repeated on the salesperson or hedge-fund pages; a second use would say nothing about those jobs.
- Country photographs appear on the overview and the whole-guide view only, never in the seven task views.

### 5.4 Patterns to avoid

Handshakes, staged meetings, graduation caps, skylines and landmarks, hooded hackers, glowing brains, robots with faces, abstract "technology" shapes, rising-arrow charts, coins, magnifying glasses, lightbulbs, rockets. Readable text or numbers inside any drawing. Any real company, product, school or institution in a drawing. Any generated image of a named place. Any raster image that carries information as pixels of text.

One more, specific to this site: **no inviting picture above official advice.** Eleven country guides carry an advisory section; those overviews get no photograph (section 6, Atlas table).

### 5.5 Phones

- Field plates are hidden at 640px and below and must not be downloaded there. They are decorative and the first phone screen is already full (E03).
- Role scenes and diagrams stay, at full column width, directly under the section heading. A scene adds about 310px to pages that run 9,200 to 19,900px on a phone.
- Country photographs stay but move below the list of views, so they never sit above the passport control (E10).

## 6. Page-by-page plan

Every decision in coverage.csv is here: one line per page or view, except the Atlas task views, which are summarised under the Atlas table. IDs resolve in image-briefs.json.

### Root pages, hubs and tools

| Route or state | Decision | Reason |
|---|---|---|
| `index.html` | no-image-needed | A 437-word router: four task blocks and three ways to look around, read in about one screen and a half on desktop (1,626px). Nothing here is unfamiliar enough to need explaining, and the masthead already gives the page its identity. An image in the header would push the second row of tasks below the first screen. The one real issue, a standfirst about 150 characters wide, is a line-length problem, not an image problem. The photograph placed here during the refactor was removed the same day. |
| `study.html` | keep-current-imagery | Already carries one explanatory figure, the track-to-field diagram with its table (E16), plus the Admissions Index ticker. The page is a router to the directory and calculators; a second visual would compete with the diagram. The former lead photograph (students writing an exam) is rightly gone: it explained nothing. |
| `programmes.html` | keep-current-imagery | 30 school marks are visible in the default list and identify each row (E18). The directory is a filter-and-compare tool; any further image would sit between filters and results. |
| `business.html` | no-image-needed | A choice between four programme types the applicant already knows by name. The four track photographs that used to sit on these cards (boardroom, trading screens, meeting, billboards) lengthened a four-way choice without helping it. |
| `it.html` | no-image-needed | A choice between three computing tracks, each explained in two lines. The removed photographs here were code on screens in three variations; they did not help anyone tell Conversion from Computer Science. |
| `mba.html` | no-image-needed | A questionnaire with a running score. Every element is a label, an input or a margin note; an image would sit between a question and its answer. |
| `masters.html?track=mim` | no-image-needed | Management track questionnaire: 25 questions in five parts with margin notes. Task-focused; no image. |
| `masters.html?track=mif` | no-image-needed | Finance track questionnaire (E17). The margin notes already do the explaining an image might; the trading-screens photograph that used to head it was decoration. |
| `masters.html?track=marketing` | no-image-needed | Marketing track questionnaire. Same reasoning; the removed billboard photograph showed real brands on a tool that claims no affiliations. |
| `computing.html?track=cs` | no-image-needed | Computer Science questionnaire: rule-first questions about degree, modules and mathematics. No image. |
| `computing.html?track=dsai` | no-image-needed | Data Science and AI questionnaire. Same structure and reasoning as the Computer Science track. |
| `computing.html?track=conversion` | no-image-needed | Conversion questionnaire, where a computing degree disqualifies. The rule is the content; a picture cannot state it. |
| `jobs.html` | keep-current-imagery | Already carries the recruiting timeline, a 15-row month-by-month graphic drawn from site data, as its centrepiece. The former header photograph (people reviewing documents) was generic and has been removed. Nothing else on the page is hard to picture. |
| `hiring.html` | no-image-needed | A planner (four selects) above a 46-row comparison table. An image would either push the planner down or interrupt comparison rows. |
| `map.html` | keep-current-imagery | The zoomable world map is the page: 46 countries coloured by an IMF indicator with a legend and a country list. It needs nothing beside it. |
| `method.html` | no-image-needed | 2,028 words of method notes with a contents list and one table of source labels. Its readers come to check how something was sourced; the table is the right visual and an illustration would undercut the page’s register. |
| `404.html` | no-image-needed | A finished typographic joke (“This page never went to press”, dateline, erratum box) and 15 links, in one screen (E19). An illustration would dilute it. |
| `careers/index.html` | no-image-needed | A search box, three doors and a 13-row table of fields. Using the field plates as row thumbnails was considered and rejected: at about 50px they would not read, and they would add height to a comparison table. |
| `careers/compass.html` | no-image-needed | The start screen is a choice between a quick and a full questionnaire with three short columns on what you get. A compass illustration would be a pun on the name and nothing more. |
| `careers/compare.html` | no-image-needed | A 124-row sortable table with 135 controls. Any image would sit in the way of the comparison. |
| `careers/italy-pay.html` | no-image-needed | The longest page on the site (23,026px on desktop, 14 tables of pay rows). The reading problem is real but it is one of table length; a chart drawn from the same rows would help more than any picture, and that is a data-graphics decision outside this audit. |
| `careers/sources.html` | no-image-needed | Rating scales, assumptions, gaps and source lists behind folded sections. Reference apparatus; no image. |
| `careers/roles/index.html` | no-image-needed | A filterable list of 124 role families under 13 field headings. Field plates beside the headings were considered; at heading size they would be too small to read and would lengthen a 10,810px list. |
| `careers/recruiting-calendar.html` | keep-current-imagery | Built around its own timeline graphic (15 windows as bars with a key) and two month-by-month tables. It is already the most visual page in the section. |
| `careers/toolkit.html` | no-image-needed | Thumbnails of the four CV templates were considered and rejected: each card already has “Preview the template”, which prints the layout as live text (E20), and a raster of a one-page CV would be unreadable at card size. |
| `careers/interview-prep.html` | no-image-needed | A working tool: frequency tables, a story builder with text areas, flashcards and practice cases behind 49 folded sections and 147 controls. No room for, or need of, imagery. |
| `mba.html — question steps 2 to 6` | no-image-needed | MBA: each later step is a set of questions with margin notes and the pinned Back / Next bar; on a phone a step runs 7234px at most. Nothing may sit between a label and its input. |
| `mba.html#results` | keep-current-imagery | MBA results: a league table of programmes with verdicts, the what-if panel, a deadline calendar and 43 school marks that identify the rows. Dense decision content (11436px); an image would separate a programme from its verdict. |
| `masters.html?track=mim — question steps 2 to 5` | no-image-needed | Management: each later step is a set of questions with margin notes and the pinned Back / Next bar; on a phone a step runs 6029px at most. Nothing may sit between a label and its input. |
| `masters.html?track=mim#results` | keep-current-imagery | Management results: a league table of programmes with verdicts, the what-if panel, a deadline calendar and 27 school marks that identify the rows. Dense decision content (6922px); an image would separate a programme from its verdict. |
| `masters.html?track=mif — question steps 2 to 5` | no-image-needed | Finance: each later step is a set of questions with margin notes and the pinned Back / Next bar; on a phone a step runs 6029px at most. Nothing may sit between a label and its input. |
| `masters.html?track=mif#results` | keep-current-imagery | Finance results: a league table of programmes with verdicts, the what-if panel, a deadline calendar and 26 school marks that identify the rows. Dense decision content (8772px); an image would separate a programme from its verdict. |
| `masters.html?track=marketing — question steps 2 to 5` | no-image-needed | Marketing: each later step is a set of questions with margin notes and the pinned Back / Next bar; on a phone a step runs 6029px at most. Nothing may sit between a label and its input. |
| `masters.html?track=marketing#results` | keep-current-imagery | Marketing results: a league table of programmes with verdicts, the what-if panel, a deadline calendar and 19 school marks that identify the rows. Dense decision content (7225px); an image would separate a programme from its verdict. |
| `computing.html?track=cs — question steps 2 to 5` | no-image-needed | Computer Science: each later step is a set of questions with margin notes and the pinned Back / Next bar; on a phone a step runs 6395px at most. Nothing may sit between a label and its input. |
| `computing.html?track=cs#results` | no-image-needed | Computer Science results: a league table of programmes with verdicts, the what-if panel, a deadline calendar; this track shows no school marks. Dense decision content (7820px); an image would separate a programme from its verdict. |
| `computing.html?track=dsai — question steps 2 to 5` | no-image-needed | Data Science & AI: each later step is a set of questions with margin notes and the pinned Back / Next bar; on a phone a step runs 6395px at most. Nothing may sit between a label and its input. |
| `computing.html?track=dsai#results` | no-image-needed | Data Science & AI results: a league table of programmes with verdicts, the what-if panel, a deadline calendar; this track shows no school marks. Dense decision content (7757px); an image would separate a programme from its verdict. |
| `computing.html?track=conversion — question steps 2 to 5` | no-image-needed | Conversion: each later step is a set of questions with margin notes and the pinned Back / Next bar; on a phone a step runs 6375px at most. Nothing may sit between a label and its input. |
| `computing.html?track=conversion#results` | no-image-needed | Conversion results: a league table of programmes with verdicts, the what-if panel, a deadline calendar; this track shows no school marks. Dense decision content (3595px); an image would separate a programme from its verdict. |
| `masters.html?track=mif&school=<id>` | no-image-needed | The questionnaire with a one-line note naming the programme it was opened for. Same task screen; no image. |
| `hiring.html#<country>/<stage>/<path>/<field> (planner with a plan shown; tested de, it, jp)` | no-image-needed | The planner’s answer: the most-used route for that country and path, what it needs and when it opens, with sources. A short, dated answer; no image. |
| `hiring.html#compare (the table, filtered or not)` | no-image-needed | Forty-six rows by ten columns of verdict chips. A comparison table must not be interrupted. |
| `programmes.html (a programme row opened)` | keep-current-imagery | The opened row lists requirements, fee and deadlines beside the school mark already shown. |
| `programmes.html (three programmes side by side)` | keep-current-imagery | Three columns of requirements headed by the three school marks; a comparison view. |
| `map.html#countries (world view at the country list)` | keep-current-imagery | The same world view scrolled to its list of 46 countries. Country thumbnails in the list were considered and rejected: 46 small photographs would slow a list people use to jump. |
| `map.html#<id>/<hub> (cities view with one hub open; tested de/munich)` | keep-current-imagery | The hub map with one hub’s sectors, employers and demand levels open beside it. The map is the image. |
| `careers/compare.html (roles selected for comparison)` | no-image-needed | Selected rows of scores side by side; comparison content. |
| `careers/index.html (search results)` | no-image-needed | A list of matching role names under the search box; thumbnails would slow scanning. |
| `careers/interview-prep.html (sections unfolded)` | no-image-needed | Unfolded sections show frequency tables, cases and worked answers; working text. |
| `careers/toolkit.html (template preview unfolded)` | no-image-needed | The unfolded preview is the template printed as live text, which is why a thumbnail is unnecessary. |
| `careers/recruiting-calendar.html (a window unfolded)` | keep-current-imagery | Unfolding a row adds who can apply, the evidence and the portals under its timeline bar. |
| `careers/compass.html (questions, quick and full versions)` | no-image-needed | One question group per screen with Back and Next. A form; no image between question and options. |
| `careers/compass.html (results: shortlist and reasons)` | no-image-needed | Ranked fields and role families with the answers that moved each one and the obstacles. Showing a role plate beside a ranked role was considered and rejected: only 11 of 124 roles have one, so most results would have none. |

### Career fields (13)

| Page | Placement | Asset | What the plate shows |
|---|---|---|---|
| `careers/fields/finance.html` | IMG-001 | AST-001 | pitch book with tab dividers; printed spreadsheet grid with one column tinted teal; lucite deal tombstone tinted claret; term sheet with a signature line |
| `careers/fields/computer-science.html` | IMG-002 | AST-002 | pull-request diff as claret and teal bars; mechanical keyboard; on-call phone; one rack server unit |
| `careers/fields/artificial-intelligence.html` | IMG-003 | AST-003 | GPU card; hand-drawn loss curve; evaluation grid of ticks and crosses; stack of labelled cards |
| `careers/fields/data-science.html` | IMG-004 | AST-004 | scatter plot with fitted line and band; two cards lettered A and B; box-plot printout; pencil |
| `careers/fields/data-analytics.html` | IMG-005 | AST-005 | dashboard printout with KPI tiles; SQL query on a card as indented lines; spreadsheet with one outlined cell; sticky note with a question mark |
| `careers/fields/cybersecurity.html` | IMG-006 | AST-006 | hardware security key; alert queue with one claret row; network switch and patch cables; runbook binder |
| `careers/fields/management.html` | IMG-007 | AST-007 | shift rota grid; Gantt chart strip; contract folder; weekly KPI page; blank lanyard badge |
| `careers/fields/logistics-supply-chain.html` | IMG-008 | AST-008 | pallet of cartons; small container tinted claret; handheld scanner; shipping label with barcode; planning sheet with a forecast line |
| `careers/fields/accounting.html` | IMG-009 | AST-009 | lever-arch file with ticked invoices; ledger printout; calculator with paper tape; sealed envelope |
| `careers/fields/marketing.html` | IMG-010 | AST-010 | creative brief; three-frame storyboard; blank packaging mock-up; phone with a tile grid; two-line share chart |
| `careers/fields/economics.html` | IMG-011 | AST-011 | working paper with a regression table; fan chart with widening bands; policy brief; statistical yearbook |
| `careers/fields/management-consulting.html` | IMG-012 | AST-012 | issue tree; interview notes; market-sizing printout; sticky-note storyboard; luggage tag |
| `careers/fields/product-management-startups.html` | IMG-013 | AST-013 | one-page requirements document; three-lane roadmap; paper wireframe of a phone screen; cap-table sheet with ownership bars |

### Career backgrounds (11)

| Page | Decision | Reason |
|---|---|---|
| `careers/backgrounds/management.html` | no-image-needed | A sorted list: all 124 role families for a Management graduate, grouped as strong (20), possible (52) and stretch (52), each with a one-line reason. The page is long (15811px) because the list is long; a picture would not shorten it or explain a fit. Reusing the matching field plate here was rejected: the page is about every field, not one. |
| `careers/backgrounds/logistics-and-supply-chain.html` | no-image-needed | A sorted list: all 124 role families for a Logistics & Supply Chain graduate, grouped as strong (17), possible (39) and stretch (68), each with a one-line reason. The page is long (15958px) because the list is long; a picture would not shorten it or explain a fit. Reusing the matching field plate here was rejected: the page is about every field, not one. |
| `careers/backgrounds/finance.html` | no-image-needed | A sorted list: all 124 role families for a Finance graduate, grouped as strong (35), possible (52) and stretch (37), each with a one-line reason. The page is long (15875px) because the list is long; a picture would not shorten it or explain a fit. Reusing the matching field plate here was rejected: the page is about every field, not one. |
| `careers/backgrounds/accounting.html` | no-image-needed | A sorted list: all 124 role families for a Accounting graduate, grouped as strong (17), possible (50) and stretch (57), each with a one-line reason. The page is long (15574px) because the list is long; a picture would not shorten it or explain a fit. Reusing the matching field plate here was rejected: the page is about every field, not one. |
| `careers/backgrounds/marketing.html` | no-image-needed | A sorted list: all 124 role families for a Marketing graduate, grouped as strong (11), possible (39) and stretch (74), each with a one-line reason. The page is long (15251px) because the list is long; a picture would not shorten it or explain a fit. Reusing the matching field plate here was rejected: the page is about every field, not one. |
| `careers/backgrounds/data-analytics.html` | no-image-needed | A sorted list: all 124 role families for a Data Analytics graduate, grouped as strong (35), possible (63) and stretch (26), each with a one-line reason. The page is long (15781px) because the list is long; a picture would not shorten it or explain a fit. Reusing the matching field plate here was rejected: the page is about every field, not one. |
| `careers/backgrounds/economics.html` | no-image-needed | A sorted list: all 124 role families for a Economics graduate, grouped as strong (46), possible (54) and stretch (24), each with a one-line reason. The page is long (15422px) because the list is long; a picture would not shorten it or explain a fit. Reusing the matching field plate here was rejected: the page is about every field, not one. |
| `careers/backgrounds/computer-science.html` | no-image-needed | A sorted list: all 124 role families for a Computer Science graduate, grouped as strong (50), possible (54) and stretch (20), each with a one-line reason. The page is long (15426px) because the list is long; a picture would not shorten it or explain a fit. Reusing the matching field plate here was rejected: the page is about every field, not one. |
| `careers/backgrounds/cybersecurity.html` | no-image-needed | A sorted list: all 124 role families for a Cybersecurity graduate, grouped as strong (19), possible (38) and stretch (67), each with a one-line reason. The page is long (15142px) because the list is long; a picture would not shorten it or explain a fit. Reusing the matching field plate here was rejected: the page is about every field, not one. |
| `careers/backgrounds/data-science.html` | no-image-needed | A sorted list: all 124 role families for a Data Science graduate, grouped as strong (44), possible (55) and stretch (25), each with a one-line reason. The page is long (15485px) because the list is long; a picture would not shorten it or explain a fit. Reusing the matching field plate here was rejected: the page is about every field, not one. |
| `careers/backgrounds/artificial-intelligence.html` | no-image-needed | A sorted list: all 124 role families for a Artificial Intelligence graduate, grouped as strong (25), possible (64) and stretch (35), each with a one-line reason. The page is long (15665px) because the list is long; a picture would not shorten it or explain a fit. Reusing the matching field plate here was rejected: the page is about every field, not one. |

### Role pages (124)

**Finance** (29)

| Role page | Decision | IDs | Reason |
|---|---|---|---|
| `m-and-a-and-industry-coverage-banker` | none |  | The work product is Excel models and PowerPoint pitch books; any picture of it is a person at a spreadsheet. The page’s hours (75 to 85 a week, peaks over 100) tell the story better than an image could. |
| `equity-capital-markets` | none |  | IPO and follow-on origination is valuation tables, pipeline lists and calls; nothing in the setting distinguishes it from the M&A page. |
| `debt-capital-markets-and-leveraged-finance` | none |  | Comparable-bond tables, term sheets and pricing-day calls: screen and document work with no distinctive object or place. |
| `restructuring` | none |  | A recovery-waterfall diagram was considered and rejected: the research names the waterfall but never lists the creditor classes, so its labels would have to be invented. |
| `corporate-and-transaction-banking` | none |  | Credit papers and meetings with clients’ finance teams; indistinguishable office work, and a client-meeting image would be staged. |
| `transaction-services-valuation-corporate-finance-advisory-at-big` | none |  | Due-diligence reconciliations and EBITDA adjustments are spreadsheet work; the unfamiliar terms are already defined inline. |
| `trader-at-a-bank` | scene | IMG-014 / AST-014 | One illustrated scene beside “What you actually do”. The section explains pricing risk for clients and managing the book with “Bloomberg terminals, bank pricing systems, trading platforms, voice and chat”, and the next section starts the day at 6.30am. The plate shows that desk, which a student has usually never seen. |
| `institutional-salesperson` | none |  | Same trading floor as the bank-trader page; a second floor scene would repeat that plate without saying anything about sales. |
| `structurer` | none |  | A payoff diagram (for the autocallable the page defines) was considered and rejected: it would need barrier levels and coupons, and exact financial figures must not be drawn without a sourced example. |
| `sell-side-equity-research-analyst` | none |  | Models and written notes; the output is text and a rating. |
| `trader-analyst-at-a-physical-commodity-trading-house` | scene | IMG-015 / AST-015 | One illustrated scene beside “What you actually do”. The section’s first sentence is that trading houses “buy cargoes of crude oil, fuel, LNG, metals or grain, arrange shipping, storage, insurance and financing”. The plate puts the physical cargo and the desk in one frame, which is the difference between this page and the bank-trader page. |
| `discretionary-trader-pm-at-a-hedge-fund-or` | none |  | Macro judgement exercised on screens; any image would be the multi-monitor trader already used once on the bank-trader page. |
| `asset-management-investment-roles-long-only` | none |  | Reading filings, updating models and meeting companies; no setting that a photograph or drawing could make specific. |
| `asset-management-client-and-distribution-roles` | none |  | Pitch books, RFP answers and two or three client meetings a day; a meeting image is the staged-boardroom genre. |
| `hedge-fund-analyst-portfolio-manager` | none |  | Idea generation, earnings models and risk checks; screen work measured by P&L, which cannot be shown truthfully. |
| `private-equity-associate-to-partner` | none |  | LBO models, data rooms and 30 to 40-page committee memos: documents, not places. |
| `venture-capital-analyst-associate-to-partner` | none |  | Founder calls and investment memos; a sourcing-funnel diagram was considered but the steps already fit in one sentence. |
| `private-credit-analyst-associate` | none |  | Credit memos, covenant reading and lender negotiations; documents. |
| `investment-professional-at-an-institutional-allocator` | none |  | Manager selection and allocation papers for an investment committee; no distinctive setting. |
| `private-banker-wealth-manager` | none |  | Relationship work with wealthy clients; depicting it means inventing clients, which is the staged-meeting cliché. |
| `fp-and-a-corporate-finance-analyst` | none |  | Budget, forecast and variance commentary in spreadsheets and board packs. |
| `corporate-treasury-analyst` | none |  | Cash positions and hedges on bank portals; nothing a reader needs to see to understand it. |
| `corporate-development` | none |  | Target screening and valuation models; the same artefacts as the M&A page from the buyer’s side. |
| `risk-management-at-banks-insurers-and-asset-managers` | none |  | The page covers market, credit and other risk sub-areas; no single picture is true of all of them. |
| `compliance-and-financial-crime` | none |  | KYC files and alert queues; “financial crime” imagery slides into handcuffs and magnifying glasses. |
| `bank-quant-strats-desk-quant-pricing-and-xva` | none |  | Pricing models in C++ and Python; the mathematics cannot be pictured without formulas the page does not contain. |
| `quantitative-researcher-and-quantitative-trader` | none |  | Signals, backtests and order-book models; abstract work with no honest visual. |
| `quant-developer-trading-systems-engineer` | none |  | Low-latency code and data pipelines; a server-rack image would say nothing specific to this role. |
| `fintech-business-roles` | none |  | Four different jobs (strategy, product, risk, partnerships) share the page; no single setting represents them. |

**Computer Science** (14)

| Role page | Decision | IDs | Reason |
|---|---|---|---|
| `backend-software-engineer` | none |  | Services, migrations and code review; code on a screen is what the removed it.jpg showed, and it distinguished nothing. |
| `frontend-engineer` | none |  | The work is interface code; showing an interface would mean inventing a product. |
| `full-stack-engineer` | none |  | Database-to-screen feature work; the field plate’s laptop and diff already stand for it. |
| `mobile-engineer` | none |  | App code and store releases; a phone mock-up would be a fake product. |
| `game-developer` | none |  | Gameplay, engine and profiling work happens in an editor; a game frame would imply a real title. |
| `qa-test-automation-engineer-sdet` | none |  | Automated tests and pipeline results; the output is text. |
| `solutions-engineer-sales-engineer-developer-advocate` | none |  | Demos, proofs of concept and security questionnaires, mostly on calls. |
| `devops-site-reliability-platform-engineer` | none |  | A CI/CD flow diagram was considered, but the paragraph lists tools rather than a sequence, so the steps would be mine, not the page’s. |
| `cloud-engineer-cloud-solutions-architect` | none |  | Architectures are drawn per customer; a generic cloud diagram is the abstract-technology filler the brief rules out. |
| `embedded-firmware-systems-engineer` | scene | IMG-016 / AST-016 | One illustrated scene beside “What you actually do”. The section says “you debug with oscilloscopes, logic analysers and debuggers” and the next section adds that “lab time is part of the job, so full remote work is rare”. The plate shows why: the work is attached to hardware on a bench. |
| `data-engineer` | diagram | IMG-031 / AST-031 | One explanatory diagram beside “What you actually do”. The two pages describe adjacent stretches of one pipeline and each mentions the other’s tools, so a newcomer cannot tell the jobs apart from the tool lists. One diagram with the page’s own stretch highlighted answers “which part is mine?”. |
| `enterprise-applications-consultant-and-it-systems-administrator-support` | none |  | Requirements workshops and SAP or Salesforce configuration; office and screen work. |
| `technology-consultant-at-an-it-consultancy-system-integrator` | none |  | Client delivery teams whose work changes with every project. |
| `computer-science-researcher` | none |  | Papers, proofs and experiments across subfields too different for one image. |

**Artificial Intelligence** (11)

| Role page | Decision | IDs | Reason |
|---|---|---|---|
| `machine-learning-engineer` | none |  | Training code, features and evaluation; the neighbouring MLOps page carries the layer diagram and a second ML diagram here would duplicate it. |
| `ai-engineer-llm-application-engineer` | diagram | IMG-025 / AST-025 | One explanatory diagram beside “What you actually do”. The paragraph packs the five steps of a RAG pipeline into one parenthesis in a ten-line sentence (evidence E07). The diagram unpacks that parenthesis into a sequence the reader can follow. |
| `mlops-ml-platform-ai-infrastructure-engineer` | diagram | IMG-026 / AST-026 | One explanatory diagram beside “What you actually do”. The paragraph opens “Three layers.” and then runs them together in a single block of prose with tool names. Three bands make the structure the author intended visible before the reader meets the tool lists. |
| `computer-vision-robotics-edge-ai-engineer` | scene | IMG-017 / AST-017 | One illustrated scene beside “What you actually do”. The section lists “calibrating cameras and lidar”, compressing models “to run on small chips” and a model that must hit its recall “at 30 frames per second on a specific device”; the next section adds a weekly session at “a test track, a factory floor, a robot cell”. The plate shows that cell. |
| `ai-data-specialist-ai-trainer-annotation-and-human` | none |  | An annotated example (boxes on an image, a ranked pair of answers) was considered and rejected for now: it needs a real, licensed sample and a real task, and the research contains neither. |
| `ai-research-scientist` | none |  | Experiments on clusters and papers; any image lands in the glowing-brain genre. |
| `research-engineer` | none |  | RL environments, verifiers and training pipelines; abstract. |
| `ai-safety-alignment-interpretability-and-evaluations-red-teaming` | none |  | Evaluations and interpretability experiments at named labs; no honest visual, and the labs must not be implied. |
| `forward-deployed-engineer-ai-solutions-engineer-ai-consultant` | none |  | Integration work on a customer’s site that differs for every customer. |
| `ai-governance-policy-and-responsible-ai-specialist` | none |  | Legislation, standards and briefings; documents, and institution buildings would be landmarks rather than the work. |
| `ai-product-manager` | none |  | Roadmaps, metrics and experiments; the same artefacts as the product-manager page. |

**Data Science** (7)

| Role page | Decision | IDs | Reason |
|---|---|---|---|
| `product-experimentation-data-scientist` | none |  | An A/B-test diagram was considered; the control-and-variant picture is familiar to this page’s reader and the sizing terms are defined in words. |
| `machine-learning-modeling-data-scientist` | none |  | Forecasting and ranking models built in notebooks. |
| `decision-scientist-operations-research-analyst` | none |  | Routing and scheduling are visual in principle, but any route map or schedule would be invented data. |
| `statistician-biostatistician` | none |  | Analysis plans and trial tables are regulated documents that should not be mocked up. |
| `data-scientist-in-banking-and-insurance` | none |  | Credit, fraud and pricing models with regulated documentation; nothing to show. |
| `applied-scientist-research-data-scientist` | none |  | Open-ended research on ranking and forecasting; abstract. |
| `data-science-consultant` | none |  | Client proofs of concept that change with each engagement. |

**Data Analytics** (8)

| Role page | Decision | IDs | Reason |
|---|---|---|---|
| `data-analyst-business-analyst` | none |  | SQL, spreadsheets and recurring reports; the field plate already shows these objects. |
| `bi-developer-bi-analyst` | diagram | IMG-027 / AST-027 | One explanatory diagram beside “What you actually do”. The paragraph names the star schema and defines it in a parenthesis; the name only makes sense once the shape is seen. The diagram is that shape with the paragraph’s own example tables. |
| `analytics-engineer` | diagram | IMG-032 / AST-031 | One explanatory diagram beside “What you actually do”. The two pages describe adjacent stretches of one pipeline and each mentions the other’s tools, so a newcomer cannot tell the jobs apart from the tool lists. One diagram with the page’s own stretch highlighted answers “which part is mine?”. |
| `marketing-digital-and-product-analyst` | none |  | Tracking set-up, funnels and attribution reports; real analytics interfaces cannot be reproduced. |
| `operations-and-supply-chain-analyst` | none |  | The analyst studies physical flows from a desk; the warehouse and transport pages carry the physical settings. |
| `people-hr-analyst` | none |  | Headcount, attrition and pay-equity dashboards; people data should not be mocked up. |
| `data-governance-data-quality-and-data-steward-roles` | none |  | Glossaries, quality rules and catalogues; definitional work with no visual form. |
| `analytics-consultant` | none |  | Dashboards and data models delivered to clients; same artefacts as the BI page, which has the diagram. |

**Cybersecurity** (10)

| Role page | Decision | IDs | Reason |
|---|---|---|---|
| `soc-analyst` | diagram | IMG-028 / AST-028 | One explanatory diagram beside “What you actually do”. The page title is “SOC analyst (T1-3)” and the paragraph describes the tiers one after another. The diagram shows what the prose cannot: that work flows up by escalation and comes back down as detection rules. |
| `incident-responder-digital-forensics` | scene | IMG-018 / AST-018 | One illustrated scene beside “What you actually do”. The section says forensics specialists “preserve evidence to a legal standard (chain of custody)”, and the next section describes “a client on a video call at 3 a.m.”. The plate shows custody as a physical procedure, which the tool names in the paragraph do not convey. |
| `threat-intelligence-analyst` | none |  | Finished reports at three levels; “dark web” imagery is the hooded-hacker genre. |
| `penetration-tester-red-teamer-offensive-security` | none |  | Every tool named is software, and any picture of “attacking” falls into the hacker cliché the brief rules out. |
| `application-security-product-security-engineer` | none |  | Threat models, design reviews and scanner triage; review work. |
| `security-engineer-cloud-security-engineer-iam-engineer` | none |  | Controls, policies and detection rules; configuration work. |
| `security-architect` | none |  | Reference architectures are specific to each organisation; a generic zero-trust diagram would be filler. |
| `grc-analyst-security-auditor-privacy-specialist` | none |  | Risk registers, control assessments and evidence collection; documents. |
| `ot-ics-security-specialist` | scene | IMG-019 / AST-019 | One illustrated scene beside “What you actually do”. The section ends “work happens in plants, substations or control rooms as well as in the office” and stresses passive monitoring and patching “without taking plants offline”. Most security students have never seen the inside of a control cabinet; the plate shows the environment that makes this role different from the other nine in the field. |
| `security-consultant-and-the-path-to-ciso` | none |  | Assessments and programmes for clients, then a management track; no setting of its own. |

**Management** (6)

| Role page | Decision | IDs | Reason |
|---|---|---|---|
| `management-trainee-graduate-leadership-programme-to-general-manager` | none |  | Year one differs by scheme (a warehouse shift, a sales territory, HR casework); one setting would misrepresent the others. The operations-manager and warehouse pages show the operations case. |
| `operations-manager` | scene | IMG-020 / AST-020 | One illustrated scene beside “What you actually do”. The section defines OEE in words and lists shift schedules and absences; the next section’s example is “you run the 7am shift handover for 40 operators … and present weekly OEE figures”. The plate shows the handover and the board the acronym lives on. |
| `project-programme-manager` | none |  | Plans, risk logs and steering committees; a picture of a Gantt chart adds nothing the words lack. |
| `hr-people-professional` | none |  | Case work, hiring and advice to managers; images of interviews and conversations are staged by nature. |
| `corporate-strategy-and-business-development` | none |  | Plans, market models and board papers; the consulting field plate shows the same artefacts. |
| `public-sector-and-non-profit-manager` | none |  | Briefings, budgets and grants; a government building would be a landmark, not the work. |

**Logistics & Supply Chain** (7)

| Role page | Decision | IDs | Reason |
|---|---|---|---|
| `buyer-procurement-specialist-category-manager` | none |  | Tenders, negotiations and contracts; office work. |
| `demand-supply-planner-and-s-and-op-analyst` | diagram | IMG-033 / AST-032 | One explanatory diagram beside “What you actually do”. The page title joins three jobs with a comma and an “and”; the paragraph gives each one a sentence. The loop shows how the three hand work to one another each month, which is the reason they share a page. |
| `logistics-and-transport-coordinator-manager` | scene | IMG-021 / AST-021 | One illustrated scene beside “What you actually do”. The section says you “prepare or check documents (bills of lading, invoices, certificates of origin)” and gives the example of a vessel “rolled (bumped) at Rotterdam”. The plate ties the document to the box it controls; few students have seen a bill of lading. |
| `warehouse-distribution-operations-manager` | scene | IMG-022 / AST-022 | One illustrated scene beside “What you actually do”. The section is about “picking and packing productivity, inbound and outbound flow” and its example is a pick-path jam delaying outbound trailers. The plate shows a pick path and the dock it feeds, so the example can be pictured. |
| `shipping-and-maritime-roles` | scene | IMG-023 / AST-023 | One illustrated scene beside “What you actually do”. The section says brokers “quote, negotiate rates, draft fixtures on BIMCO-based contracts” and a trainee “drafts charter contracts, tracks vessel positions”. The plate shows the contract, the position list and the kind of ship being fixed. |
| `supply-chain-analyst-supply-chain-systems-specialist` | none |  | Dashboards and system configuration; the physical side is on the warehouse and transport pages. |
| `supply-chain-consultant` | none |  | Models, decks and implementation plans for a client; varies by project. |

**Accounting** (7)

| Role page | Decision | IDs | Reason |
|---|---|---|---|
| `external-auditor` | diagram | IMG-030 / AST-030 | One explanatory diagram beside “What you actually do”. The paragraph’s first concrete example of audit work is matching a sampled invoice to three pieces of evidence. The diagram shows the single test that the associate repeats, which is what “testing whether the numbers are right” means in practice. |
| `tax-advisor-tax-accountant` | none |  | Computations, returns and advice memos; documents. |
| `financial-accountant-financial-controller` | none |  | Journal entries, reconciliations and the month-end close; the field plate’s ledger already stands for it. |
| `management-accountant-controller` | none |  | Budgets and variance analysis; the same artefacts as the FP&A page. |
| `internal-auditor` | diagram | IMG-029 / AST-029 | One explanatory diagram beside “What you actually do”. The paragraph’s typical audit tests “a sample of 40 purchase orders for approval and three-way match (order, receipt, invoice)”. The term is the control being tested; a reader who cannot picture it cannot picture the audit. |
| `forensic-accountant` | none |  | Payment tracing and interviews; investigation imagery (magnifying glass, red string) is cliché. |
| `sustainability-reporting-esg-assurance-specialist` | none |  | Emissions and workforce data mapped to reporting standards; a nature photograph would be the usual ESG greenery and say nothing about the reporting. |

**Marketing (incl. sales)** (8)

| Role page | Decision | IDs | Reason |
|---|---|---|---|
| `brand-manager` | scene | IMG-024 / AST-024 | One illustrated scene beside “What you actually do”. The section says you “track weekly sales and market share data … plan promotions with sales” and that you “own the brand’s numbers but depend on sales, supply chain and the retailer for execution”. The shelf is where that dependence is visible: share, facings and the promotion tag. |
| `digital-performance-marketing-specialist` | none |  | Budgets and return on ad spend inside ad platforms whose interfaces cannot be reproduced. |
| `content-social-and-community-marketer` | none |  | The output is posts and short video; showing samples would mean inventing a brand. |
| `product-marketing-manager` | none |  | Positioning, launch plans and battlecards; documents. |
| `crm-lifecycle-marketing-specialist` | none |  | A journey diagram was considered, but the page names the flows (welcome, abandoned basket, win-back) without ordering them. |
| `market-research-consumer-insights-analyst` | none |  | Surveys, crosstabs and slides. |
| `agency-roles` | none |  | Three jobs (account, planning, media) share the page; no single setting is true of all. |
| `sales-and-business-development` | none |  | Outbound messages, demos and negotiation; the obvious image is the handshake the brief rules out. |

**Economics** (7)

| Role page | Decision | IDs | Reason |
|---|---|---|---|
| `central-bank-economist` | none |  | Working papers and models; a central-bank façade would imply a named institution. |
| `economist-at-an-international-organisation` | none |  | Country reports and missions; the same named-institution problem. |
| `government-economist-official-statistician` | none |  | Cost-benefit analysis and official statistics; documents and data releases. |
| `economic-consultant` | none |  | Empirical analysis behind expert reports in competition and litigation cases. |
| `tech-sector-economist` | none |  | Pricing and marketplace experiments inside technology firms that must not be implied. |
| `think-tank-policy-researcher` | none |  | Briefs, reports and events at named institutes. |
| `academic-economist-and-pre-doctoral-research-assistant` | none |  | Research, teaching and data cleaning; a lecture hall is the campus cliché. |

**Management Consulting** (5)

| Role page | Decision | IDs | Reason |
|---|---|---|---|
| `strategy-consultant-analyst-associate-to-partner` | none |  | Models, expert interviews and slides; team-room photographs are the staged-meeting genre, and the field plate shows the artefacts. |
| `management-operations-transformation-consultant-at-big-4-accenture` | none |  | Operating models, PMOs and process maps for clients; varies by project. |
| `specialist-boutique-consultant` | none |  | Deep sector work whose content differs by boutique (healthcare, pricing, economics). |
| `technology-and-digital-consultant` | none |  | Requirements and digital strategy without writing code; documents and workshops. |
| `internal-strategy-corporate-transformation-in-house-consulting` | none |  | Plans and transformation tracking for one employer; same artefacts as the consulting pages. |

**Product Management & Startups** (5)

| Role page | Decision | IDs | Reason |
|---|---|---|---|
| `product-manager` | none |  | Interviews, a one-page PRD and prioritisation; the field plate shows the PRD and roadmap. |
| `associate-rotational-product-manager` | none |  | A junior version of the product-manager page inside named programmes that must not be implied. |
| `technical-programme-manager-and-product-operations` | none |  | Dependency maps, plans and status reports. |
| `startup-operator-founder-s-associate-chief-of-staff` | none |  | Whatever the founder hands over: models, updates, special projects. No fixed setting. |
| `founder-entrepreneur` | none |  | Every founder image is a stereotype (garage, hoodie, pitch stage); the page’s value is its candour about the odds. |

### Atlas country guides (46)

| Country | Overview decision | IDs | Subject or reason | Priority |
|---|---|---|---|---|
| United Arab Emirates `#ae` | none |  | the guide opens with the UK Foreign Office’s report of strikes in the region |  |
| Austria `#at` | photograph | IMG-034 / AST-033 | Vienna: Donau City or the Hauptbahnhof office quarter; trams or U-Bahn commuters between office buildings | low |
| Australia `#au` | photograph | IMG-035 / AST-034 | Sydney: Martin Place or the George Street light-rail corridor; office workers crossing a pedestrian plaza between bank buildings | low |
| Belgium `#be` | photograph | IMG-036 / AST-035 | Brussels: the European Quarter around Rue de la Loi and Schuman; commuters leaving Schuman station with institution buildings behind | low |
| Bulgaria `#bg` | photograph | IMG-037 / AST-036 | Sofia: an office district such as Business Park Sofia or the Tsarigradsko Shose corridor; office blocks with a metro entrance and people arriving for work | low |
| Canada `#ca` | photograph | IMG-038 / AST-037 | Toronto: the Financial District around King and Bay; a streetcar and pedestrians between bank towers at street level | low |
| Switzerland `#ch` | photograph | IMG-039 / AST-038 | Zurich: Paradeplatz; trams and commuters crossing the square in front of bank headquarters | medium |
| China `#cn` | none |  | the guide carries an official-advice section |  |
| Czech Republic `#cz` | photograph | IMG-040 / AST-039 | Prague: the Pankrác or Karlín office districts; a tram stop in front of modern office buildings | low |
| Germany `#de` | photograph | IMG-041 / AST-040 | Frankfurt am Main: the Bankenviertel around Taunusanlage; commuters at street level between bank towers, S-Bahn entrance in frame | medium |
| Denmark `#dk` | photograph | IMG-042 / AST-041 | Copenhagen: the harbour-front office strip (Kalvebod Brygge) or Nordhavn; cyclists commuting past office buildings | low |
| Estonia `#ee` | photograph | IMG-043 / AST-042 | Tallinn: Ülemiste City or the Rotermann quarter; converted industrial buildings used as tech offices, people walking between them | low |
| Spain `#es` | photograph | IMG-044 / AST-043 | Madrid: the Castellana business axis (AZCA or the northern towers); office workers on the pavement of Paseo de la Castellana | medium |
| Finland `#fi` | photograph | IMG-045 / AST-044 | Helsinki: the Ruoholahti, Pasila or Keilaniemi office districts; a tram or metro stop by office buildings in ordinary northern light | low |
| France `#fr` | photograph | IMG-046 / AST-045 | Paris: La Défense; commuters crossing the esplanade towards the towers at the start of the day | medium |
| United Kingdom `#gb` | photograph | IMG-047 / AST-046 | London: the City of London around Bank or Bishopsgate; office workers at street level between old and new City buildings | medium |
| Greece `#gr` | photograph | IMG-048 / AST-047 | Athens and Piraeus: the Piraeus waterfront where shipping companies have their offices; office buildings facing the port, with ships in the background | low |
| Hong Kong `#hk` | photograph | IMG-049 / AST-048 | Hong Kong: Central; office workers on the elevated walkways or beside the tramline on Des Voeux Road | low |
| Ireland `#ie` | photograph | IMG-050 / AST-049 | Dublin: Grand Canal Dock or the IFSC; modern offices along the dock with people walking to work, Luas tram if in frame | medium |
| Israel `#il` | none |  | the guide carries an official-advice section |  |
| Iceland `#is` | photograph | IMG-051 / AST-050 | Reykjavík: the Borgartún business street; low office buildings and everyday street traffic | low |
| Italy `#it` | photograph | IMG-052 / AST-051 | Milan: Porta Nuova around Piazza Gae Aulenti; people crossing the square or leaving the metro on a working morning | medium |
| Japan `#jp` | photograph | IMG-053 / AST-052 | Tokyo: Marunouchi or Otemachi, beside Tokyo Station; office workers walking between headquarters buildings in the morning | low |
| South Korea `#kr` | photograph | IMG-054 / AST-053 | Seoul: Yeouido; commuters between the financial district’s office towers | low |
| Kuwait `#kw` | none |  | the guide carries an official-advice section and its own summary calls the evidence thin |  |
| Lithuania `#lt` | photograph | IMG-055 / AST-054 | Vilnius: the new business district on the right bank of the Neris (Konstitucijos prospektas); office towers with pedestrians and buses at street level | low |
| Luxembourg `#lu` | photograph | IMG-056 / AST-055 | Luxembourg City: the Kirchberg plateau; the tram running between fund-industry and institution buildings | low |
| Malta `#mt` | photograph | IMG-057 / AST-056 | Valletta and the harbour towns: the Sliema, Gżira or St Julian’s office waterfront; office buildings along the harbour road with weekday traffic and pedestrians | low |
| Malaysia `#my` | none |  | the guide carries an official-advice section |  |
| Netherlands `#nl` | photograph | IMG-058 / AST-057 | Amsterdam: Zuidas, around Amsterdam Zuid station; cyclists and pedestrians between office towers | medium |
| Norway `#no` | photograph | IMG-059 / AST-058 | Oslo: Bjørvika (the Barcode row); commuters and a tram in front of the office buildings | low |
| New Zealand `#nz` | photograph | IMG-060 / AST-059 | Auckland: the city centre around Britomart or Queen Street; office workers on the street near the transport hub | low |
| Oman `#om` | none |  | the summary itself says “Read the UK’s advice on regional attacks” and calls this the least documented Gulf market |  |
| Poland `#pl` | photograph | IMG-061 / AST-060 | Warsaw: the Wola business district around Rondo Daszyńskiego; people leaving the metro among new office towers | low |
| Portugal `#pt` | photograph | IMG-062 / AST-061 | Lisbon: Parque das Nações or the Saldanha office district; office buildings with commuters at a station entrance | low |
| Qatar `#qa` | none |  | the guide carries an official-advice section and says graduate evidence is thin |  |
| Romania `#ro` | photograph | IMG-063 / AST-062 | Bucharest: the northern office district around Aurel Vlaicu and Pipera; office buildings with commuters at the metro exit | low |
| Russia `#ru` | none |  | the summary opens with advice against all travel; the guide says it does not rate this country |  |
| Saudi Arabia `#sa` | none |  | the guide carries an official-advice section |  |
| Sweden `#se` | photograph | IMG-064 / AST-063 | Stockholm: the central business district around Norrmalm and the central station; commuters on foot and by bicycle on a working morning | low |
| Singapore `#sg` | photograph | IMG-065 / AST-064 | Singapore: Raffles Place; the lunchtime office crowd at ground level among the towers | low |
| Thailand `#th` | none |  | the guide carries an official-advice section |  |
| Turkey `#tr` | none |  | the guide carries two official-advice entries (UK and US) |  |
| Taiwan `#tw` | photograph | IMG-066 / AST-065 | Taipei: the Xinyi business district; commuters and scooters at a junction among office buildings | low |
| United States `#us` | photograph | IMG-067 / AST-066 | New York: the Financial District or Midtown’s office avenues; commuters at street level on a weekday morning | medium |
| Vietnam `#vn` | photograph | IMG-068 / AST-067 | Ho Chi Minh City: District 1’s office streets; motorbike commuters in front of office buildings | low |

**The seven task views of each country** (cities and hubs, getting hired, visas and permits, working there, life there, first weeks, sources; 46 rows in coverage.csv, one per country) share one decision, *keep current imagery*, for one reason with local detail: the cities view already has the hub map and its comparison bars, first weeks has its step line, and the other views are rows of sourced claims where a picture would separate a claim from its note. Each row in the CSV names that country’s hubs and gives the rendered height of every view.

## 7. Rollout

Priorities are about value for the effort, not order of difficulty. "Firm" means I recommend doing it; "optional" means it is sound but the site is fine without it.

### High: the thirteen field plates (firm)

IMG-001 to IMG-013, assets AST-001 to AST-013.

Each field page is the door to between 5 and 29 role pages, and all thirteen currently open with the same screen (E01, E02). One set of thirteen drawings, made together so they match, gives every field a face. It is the smallest piece of work that changes the most pages people land on, it adds no height on phones, and because the plates are decorative nothing depends on them. Make all thirteen or none: a partial set would look like an oversight.

### Medium (firm)

- **Nine role scenes**, IMG-014 to IMG-017 and IMG-019 to IMG-022 and IMG-024: bank trader, commodity trading house, embedded engineer, computer vision and robotics, OT/ICS security, operations manager, transport coordinator, warehouse manager, brand manager. These are the roles where the page describes a place most students have never stood in. Expected benefit: the reader can picture the job before reading its numbers.
- **Five diagrams**, IMG-025, IMG-027, IMG-028, IMG-031, IMG-032: the RAG pipeline, the star schema, the SOC tiers and the data pipeline on its two pages. Each unpacks a term the paragraph defines in a parenthesis. They cost almost nothing to build or load, need no artwork, and can ship before any drawing exists.
- **Nine country photographs**, the guides an Italian or European reader is most likely to open and the ones with the most hubs behind them: Switzerland (IMG-039), Germany (IMG-041), Spain (IMG-044), France (IMG-046), United Kingdom (IMG-047), Ireland (IMG-050), Italy (IMG-052), Netherlands (IMG-058), United States (IMG-067). The choice of nine is my judgement; the site has no analytics to rank countries by.

### Low (optional)

- **Two role scenes**: digital forensics (IMG-018) and shipping (IMG-023). Both are accurate and specific; they come second because forensics overlaps in feel with the OT cabinet and shipping with the two other logistics scenes.
- **Four diagrams**: the three ML layers (IMG-026), the three-way match (IMG-029), testing a sampled invoice (IMG-030) and the planning loop (IMG-033). Each restates a short, already clear sentence.
- **Twenty-six country photographs**: the remaining guides without an advisory. Worth doing only if the first nine turn out well, since each needs sourcing, a licence check and a caption.

### Suggested order

1. The five medium diagrams. No assets to wait for, and they test the float-in-section layout on real pages.
2. The thirteen field plates, commissioned or generated as one batch, with one approved first so the hand is fixed before the other twelve.
3. The nine role scenes, in the same hand.
4. The nine country photographs, sourced and credited.
5. Everything marked low, if wanted.

## 8. Totals

| | Count |
|---|---|
| Image placements | 68 |
| Unique new assets | 67 |
| of which drawn (field plates and role scenes) | 24 |
| of which diagrams built in code | 8 |
| of which real photographs to source | 35 |
| Reused assets | 1 (AST-031, on two pages) |
| Existing assets reused | 0 |
| Pages and views that need no new image | 226 of 294 (166 with none, 60 keeping what they have) |
| Placements by priority | 13 high, 23 medium, 32 low |
| Placements shown on desktop | 68 |
| Placements shown on phones | 55 |

Desktop and phone totals differ by 13: the field plates are hidden on phones. The 35 country photographs count once each although they appear on two addresses (the overview and the whole-guide view).

If only the firm recommendations are built: 36 placements, 35 assets (13 plates, 9 scenes, 4 diagrams, 9 photographs).

## 9. What the review passes changed

The plan was checked against three references: Impeccable's rules for reading surfaces, a design-critique pass and an accessibility pass. Impeccable's context launcher was not run (it may download a binary, which this task forbids); its guidance was read directly.

**From the reading-surface rules.** "The world owns the frame and serves the column … nothing performing behind the text." This is why no image goes inside tables, calculators or lists, why the drawings sit on the paper without frames or backgrounds, and why hubs stay typographic.

**From the critique pass.**

- *Does every element earn its place?* Three candidates were cut for failing this: CV-template thumbnails (the toolkit already previews each template as text, E20), field-plate thumbnails in lists (unreadable at that size), and a front-page illustration (the page reads in a screen and a half and its job is routing).
- *Consistency.* Only 20 of 124 role pages get a figure. A reader may wonder why. The answer is the rule itself: a figure appears only where it shows something the words cannot. I would rather have 104 honest text pages than 104 pictures of laptops. This is the plan's main risk and the owner should weigh it.
- *Protect the primary action.* The country photograph was first placed under the summary on phones. That put it above the passport control, so it was moved below the list of views.
- *When the problem is not an image problem.* Three pages have a real reading problem that pictures will not fix: `careers/italy-pay.html` (23,026px of pay tables; a chart from the same rows would help), the eleven background pages (15,000px lists; jump links already exist), and every header's 125 to 150-character standfirst (a narrower measure fixes it without any image).

**From the accessibility pass (WCAG 2.2 AA is the site's target).**

- Field plates are decorative: empty alt text, and no information is lost when they are hidden.
- Scenes and photographs carry English and Italian alt text that describes what is visible and does not repeat the caption. Photograph alt text can only be finalised once the photograph is chosen; the briefs say so.
- Diagrams keep every label as live text at 13px or more, in English as the page text is, with a translated caption and accessible name. The reused pipeline diagram marks the current role with the words "this page" as well as with colour (1.4.1).
- A figure sits in the same place in the document on every screen size, so reading order and visual order agree (1.3.2). The country photograph is the one exception in position; it must be drawn once and placed by script, never duplicated and hidden.
- Claret on the paper is about 7.6:1 and teal about 4.9:1, both enough for label text; any grey line in a diagram must still reach 3:1 (1.4.11).
- Every image reserves its space with width and height so nothing shifts as it loads.
- Captions on drawings end with "Illustration." so that nobody takes a drawing for a photograph of a real workplace.

## 10. Rejected and blocked ideas, with reasons

| Idea | Why not |
|---|---|
| Bring back the 13 archived photographs | Generic stock; several are the clichés ruled out; they explained nothing and were hidden on phones. |
| Front-page illustration | A 437-word router. Identity is already carried by the masthead; an image costs first-screen space on the page whose job is to send people elsewhere. |
| Photographs on the track pickers | The applicant already knows which degree they are applying for. |
| Recovery-waterfall diagram (restructuring) | The research names it but lists no creditor classes; the labels would be invented. |
| Autocallable payoff diagram (structurer) | Needs exact barrier and coupon figures; none is sourced. |
| Annotation example (AI data specialist) | Needs a real licensed sample image and a real task; the research has neither. |
| A/B test, CI/CD, VC funnel, CRM journey diagrams | Either familiar to that page's reader, or the paragraph gives no order to draw. |
| CV-template thumbnails | The live-text preview exists and is better. |
| Field plates as thumbnails in lists and tables | Unreadable at 50 to 80px; would add height to comparison rows. |
| A photograph in each Atlas task view | Those views are rows of sourced claims; a picture would separate a claim from its source. A second photograph per country would also double the sourcing work. |
| Photographs for the 11 countries with an advisory | An inviting picture should not sit above official advice on whether to travel. |
| A scene for every role | For 104 roles the truthful picture is a person at a screen. |

## 11. Exclusions from the inventory

| Path | Why it is not a public page |
|---|---|
| `site-graph.html` | A developer's navigation-graph viewer: untracked, linked from no page, absent from the sitemap. Note that `tools/build.js` does not skip it, so it would be published as things stand. |
| `design/concepts/**`, `design/intro/` | Parked mock-ups and the opening-titles lab; excluded from the build. |
| `graphify-out/` | Generated knowledge-graph viewer and reports. |
| `_site/` | The build's output; a packaged copy of the pages assessed here. |
| `.verify/`, `.cache/`, `tools/.brand-cache/`, `node_modules/`, `.venv/` | Test harness, caches and tooling. |
| `research/**/*.md` | The research library, linked from `method.html` and published as raw Markdown text files. They are documents, not designed pages. |
| `careers/templates/*.docx`, `*.tex` | Downloads. |
| `CREDITS.md`, `careers-progress.md`, `README.md`, `PRODUCT.md`, `docs/**` | Repository documents. |
| `sitemap.xml`, `robots.txt`, `sw.js` | Machine files. |
| `mba/` | An empty directory. |
| `masters.html` and `computing.html` without `?track=` | Rendered; identical to the first track of each (same heading, same height). Covered by those rows. |
| A missing address | Serves `404.html`, which has its own row. |
| The opening titles (`js/intro.js`) on `study.html`, `business.html` and `it.html` | A short type animation shown on some arrivals. It does not play for automated browsers, so it was read in source only; it is motion, not imagery, and takes no image. |

## 12. Open questions and limits

1. **Should a partial advisory suppress the photograph?** The rule proposed is simple: any country record with an advisory shows none. That removes eleven guides, including the UAE, China, Malaysia, Thailand and Turkey, whose advisories may be regional. Relaxing it is an editorial call for the owner.
2. **The districts are proposals.** For each country photograph I named a working district from general knowledge of the city. The project data confirms the city and what it is known for, not the district. Each must be confirmed when the photograph is sourced; the brief gives a fallback.
3. **Pixel shifts are estimates.** Column widths and current heights were measured in the rendered pages. How much a header grows or a section lengthens once a figure is added was calculated, not built.
4. **Twenty of 124.** Whether an uneven spread of figures across role pages reads as considered or as unfinished can only be judged on the real pages, ideally by a few readers.
5. **Who draws.** The plates and scenes depend on one consistent hand. If they are generated, a person must check each against its must-include and must-avoid lists; the briefs are written to make that check mechanical.
6. **No analytics, no user research.** Priorities rest on the site's structure and on PRODUCT.md, not on what people actually open.
7. **Computing results show no school marks** while business results do. Not an image-audit matter, but it surfaced here.

## 13. How the audit was run

- Read-only on the site. The only files written are in `docs/image-audit/`.
- Rendering used the Playwright and Chromium already installed for the project's own verification harness, driven by scripts kept outside the repository. Each run used a new browser context, so no saved answers, passport choice or language setting in any real browser profile was read or changed; every answer entered was synthetic.
- The pages were served from the working tree by a temporary local server started inside the script and stopped with it. No dev server configuration was added or edited.
- Other sessions were editing this checkout during the audit. Line numbers in the briefs are a snapshot from 10 October 2026 and are given as supplements to selectors, headings and template names, which are the durable anchors.
- One file outside `docs/image-audit/` changed as a side effect: `graphify-out/cache/last_query_stamp`, a git-ignored cache stamp written by the project's own `graphify query` command, which the project instructions require before reading source.

## 14. Evidence index

| ID | File | Shows |
|---|---|---|
| E01 | [E01-field-finance-first-screen-1440.jpg](evidence/E01-field-finance-first-screen-1440.jpg) | Finance field page, first screen, 1440px: kicker, one-word title, full-width standfirst, warning box |
| E02 | [E02-field-logistics-first-screen-1440.jpg](evidence/E02-field-logistics-first-screen-1440.jpg) | Logistics field page, first screen, 1440px: the same screen with different words |
| E03 | [E03-field-finance-first-screen-390.jpg](evidence/E03-field-finance-first-screen-390.jpg) | Finance field page, first screen, 390px: already full without an image |
| E04 | [E04-role-warehouse-what-you-do-1440.jpg](evidence/E04-role-warehouse-what-you-do-1440.jpg) | Warehouse role, “What you actually do”, 1440px: 782px measure in an 846px column |
| E05 | [E05-role-warehouse-first-screen-390.jpg](evidence/E05-role-warehouse-first-screen-390.jpg) | Warehouse role, first screen, 390px |
| E06 | [E06-role-warehouse-what-you-do-390.jpg](evidence/E06-role-warehouse-what-you-do-390.jpg) | Warehouse role, “What you actually do”, 390px |
| E07 | [E07-role-ai-engineer-what-you-do-1440.jpg](evidence/E07-role-ai-engineer-what-you-do-1440.jpg) | AI engineer role, “What you actually do”, 1440px: the RAG pipeline inside one parenthesis |
| E08 | [E08-role-bi-developer-what-you-do-1440.jpg](evidence/E08-role-bi-developer-what-you-do-1440.jpg) | BI developer role, “What you actually do”, 1440px: the star schema defined in a parenthesis |
| E09 | [E09-atlas-de-overview-1440.jpg](evidence/E09-atlas-de-overview-1440.jpg) | Germany overview, 1440px: name, full-width summary, key figures |
| E10 | [E10-atlas-de-overview-390.jpg](evidence/E10-atlas-de-overview-390.jpg) | Germany overview, 390px: header fills the first screen; view tabs follow |
| E11 | [E11-atlas-it-overview-1440-it.jpg](evidence/E11-atlas-it-overview-1440-it.jpg) | Italy overview in Italian, 1440px |
| E12 | [E12-atlas-ru-overview-1440.jpg](evidence/E12-atlas-ru-overview-1440.jpg) | Russia overview, 1440px: the guide opens on official advice |
| E13 | [E13-atlas-de-cities-1440.jpg](evidence/E13-atlas-de-cities-1440.jpg) | Germany, Cities and hubs, 1440px: the existing hub map |
| E14 | [E14-index-first-screen-1440.jpg](evidence/E14-index-first-screen-1440.jpg) | Front page, first screen, 1440px |
| E15 | [E15-index-first-screen-390.jpg](evidence/E15-index-first-screen-390.jpg) | Front page, first screen, 390px |
| E16 | [E16-study-track-field-diagram-1440.jpg](evidence/E16-study-track-field-diagram-1440.jpg) | study.html: the existing track-to-field diagram |
| E17 | [E17-calculator-mif-step1-1440.jpg](evidence/E17-calculator-mif-step1-1440.jpg) | Finance calculator, step 1, 1440px: questions with margin notes |
| E18 | [E18-programmes-logos-1440.jpg](evidence/E18-programmes-logos-1440.jpg) | Programme Directory, 1440px: school marks in the list |
| E19 | [E19-404-1440.jpg](evidence/E19-404-1440.jpg) | 404 page, 1440px |
| E20 | [E20-toolkit-template-preview-1440.jpg](evidence/E20-toolkit-template-preview-1440.jpg) | Application toolkit, 1440px: template cards with “Preview the template” |

The full census (about 1,400 renders with measurements and screenshots) was kept outside the repository and is not part of the deliverables; the figures quoted in coverage.csv come from it.
