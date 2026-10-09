# Admetia — the way in

> **LEGAL NOTICE:** This entire codebase is 100% pure, uncut, pharmaceutical-grade vibe-engineered trash. I have not authored a single line of syntax in this repository. Not one. My sole contribution was mashing Cmd + Enter like a lab rat hitting the pellet lever, then immediately dissociating into the astral plane. I supplied the vibes. Claude supplied the code. God supplied the patience. And Anthropic supplied the liability sponge.
>
> If this project infringes on your copyright, patent, trade secret, trade dress, moral rights, or fragile emotional well-being: I feel for you, truly. But Claude made every architectural decision, every questionable dependency, every “temporary” TODO that is now load-bearing. Please direct all subpoenas, cease-and-desist letters, DMCA notices, and personally venomous DMs straight to Anthropic’s legal department. Claude chose this life. I merely held the door open and whispered “hell yeah.
>
> My actual role was unpaid, meat-based clicker and professional yes-man. Claude would spit out a terminal command that looked like a raccoon had a seizure on a mechanical keyboard, politely ask for permission, and I would reply “run it” because I still don’t know what bash is and at this point I’m too deeply confused to ask.
>
> Did Claude scrape your entire proprietary backend, your internal design docs, and your grandmother’s secret recipe just to ship this glorified todo app? Almost certainly. Does Dario Amodei lose sleep over it? Of course not. He has an entire company culture, a carefully curated moral high ground, and enough lawyers to make the concept of personal accountability optional. Your lawsuit is already priced into the last funding round. The rest of us are just the soft, disposable buffer between Claude and the consequences.
> 
> If the preceding paragraphs offend your delicate sensibilities: Grok wrote them. Claude would pick war targets without hesitation if the prompt were polite enough, but it would never write something this prickly, this self-aware, or this disloyal. Its moral boundaries are extremely solid..

Admetia is a privacy-first admissions chances evaluator for top-tier **MBA**, **Business Master's**, and **IT & Computing Master's** programmes across the UK, Europe, and the US — in **English and Italian**.

**Live Site:** <https://iaconoalessandro.github.io/admetia/>

Zero build steps to run it. Zero runtime dependencies. Your answers never leave your browser: the only request the site makes is an optional, anonymous visit count (see *Visit counting* below), and it is off until a counter address is set.

---

## Quick Start

- **Run locally:** Double-click `index.html`, or run a local static server:
  ```bash
  python3 -m http.server 8777
  # Open http://localhost:8777
  ```

- **Run test suites:**
  ```bash
  npm test
  ```
  *(565 checks passing across 11 suites — all models, edge cases, the application calendar, the Atlas, the Italian translation and the pages themselves — plus 8,000 frozen MBA profiles re-scored in both readings).* The runner
  (`tools/run-tests.js`) is plain Node, so it behaves the same on Windows, macOS and Linux; pass
  `-- -v` to see every assertion. Each suite also runs on its own, e.g. `node tests/computing-test.js`.

- **Publish:** pushing to `main` runs `.github/workflows/pages.yml`, which tests, runs
  `npm run build` and deploys `_site/` to GitHub Pages. The build (`tools/build.js`) only
  repackages for speed — one minified script and stylesheet per page, `theme.js` inlined,
  hashed file names, and no models on the front pages unless there are saved answers to
  score. Tests, tooling, the parked mockups and repository-only documents stay out of `_site/`. The pages in the repo keep working unbuilt, so there is nothing to rebuild while
  editing. To try the published version locally: `npm install && npm run build`, then serve
  `_site/`.

---

## Supported Calculators & Models

### 1. MBA Admissions Calculator
A points-based MBA admissions model across 43 business schools, evaluating profiles against calibrated scoring thresholds for 38 schools, plus CEIBS, Peking Guanghua, Fudan, Nanyang and Mannheim placed on the same scale via calibration against published class statistics and official profile data.
- **As published vs. Corrected:** *As published* evaluates score benchmarks directly; *Corrected* scores test thresholds as continuous ranges (affects Columbia, Stanford, NYU and Yale).
- **Comprehensive Profile Evaluation:** Joint 10×8 lookup tables for GPA and GMAT/GRE, multiplicative modifiers for leadership and sport, matrix management reductions, and individual school calibrations.

### 2. Business Master's Calculator
An original multi-track model for pre-experience Master's in Management (MiM), Finance (MiF), and Marketing.
- **Hard Eligibility Gates:** Enforces strict prerequisite barriers (e.g., degree requirements, minimum quantitative ECTS credits, C1/B2 language hurdles, and work experience caps).
- **Institution-Specific Weightings:** Differentiates between *numbers-led* schools (e.g., Bocconi) and *holistic* reviewers (e.g., HEC Paris). Where a school publishes its weights or a points table — St. Gallen, Mannheim, TUM — the model uses them as written.
- **Counterfactual Guidance:** Tells you exactly which improvements (GMAT score, essays, recommendations) would close the gap for your target schools.

### 3. IT & Computing Master's Calculator
A rule-first evaluation model for 26 computing master's programmes in the UK, Europe and the US (Stanford, Carnegie Mellon and Berkeley) across three specialisations:
- **Tracks:** Computer Science (MSc CS), Data Science & AI, and Conversion MSc.
- **Inverted Rules:** Directly models conversion gates that disqualify candidates who already hold a computing degree (e.g., Imperial, UCL, Glasgow).
- **Hard Academic Bars:** Evaluates first-class honours requirements, prerequisite module audits, and minimum mathematics credits.
- **Calibrated Admissions Data:** Incorporates 5 years of pooled applicant outcomes and acceptance distributions under strict sample-size thresholds (UK and European programmes; the US ones are modelled from their published rules only).
- **Why not MIT:** MIT EECS has no terminal master's for outside applicants — everyone is admitted to the PhD — so there is nothing to score, and the results page says so.

### 4. The Atlas (`map.html`)
A Europe-centred world map of the 46 countries Admetia covers: 25 in Europe (the UK, Switzerland, Norway and Iceland included) and 21 outside it, with Hong Kong and Taiwan as separate entries. The map uses the Mercator projection and zooms and pans (wheel, drag, pinch, or the + / − / reset buttons). Tap a country for a quick overview; open its page for **how hiring works** there, the route from your passport (EU/EEA/Swiss, UK, US or another), working there, the first weeks, official travel advice and the open gaps. Every country gets a zoomable hub map of its big cities (192 hubs in all); each hub lists its sectors, named employers and a demand level for each of 14 role families, with finance split into eight sub-roles. A route is in scope only if Europe is one end, so a US passport looking at Singapore is told it is outside Admetia's scope. Every statement is a claim tagged *data*, *employer-stated*, *practitioner consensus* or *anecdotal*, with its source and the date it was read; a demand level with no source behind it shows as *Not rated*. The verification log for each country is a P number in `research/verification/claims-to-verify.md` §4.2.

**How hiring works** (`data/atlas/entry/<id>.js`) describes, for each country, the way most graduates actually get their first job rather than every possible path: the routes in order of how many people they carry (Werkstudent jobs in Germany, the final internship and alternance in France, the six-month stage in Italy, co-op in Canada, summer jobs in Finland, the April cohort in Japan), what a downturn does to them, where each business field (finance, accounting, consulting, marketing, corporate, public sector) and each computing field (software, data and AI, cybersecurity) works differently, with the employers and the schools they recruit from, the schools and people that open doors, where students meet employers, and the customs of applying (photo on the CV, how doors open, applying from abroad, language). Each line cites the file's own sources or is marked *Our reading* where Admetia wrote it without a single source; a part with nothing reliable is left out.

Every country's hiring section now carries the same rows: the routes in (each tagged with its type and the paths it serves, with what the ranking rests on), seventeen verdict rows (hiring calendar, whether a master's is expected, foreign degrees, school name, apprenticeship culture, public-sector weight, sponsorship, and the customs of applying: photo, CV length, cover letter, references, certificates, salary expectation, background checks, how doors open, applying from abroad, language), language at work by field, the selection process, the offer and contract, sponsorship in practice, where to apply, named employer programmes (intake, window, languages, whether they take international graduates), common mistakes, and **graduate outcomes** in numbers (`data/atlas/outcomes.js`, generated by `tools/atlas-outcomes.js`: Eurostat for the countries it covers, the ILO's modelled estimates through the World Bank for graduate and youth unemployment elsewhere, and a few national figures read by hand; the three groups are labelled and never ranked against each other). `docs/HIRING-SCHEMA.md` is the schema and the writing brief; `node tools/hiring-check.js [ids]` checks the files, and `tests/atlas-test.js` runs the same check.

**How hiring works in 46 countries** (`hiring.html`, `js/page-hiring.js`) puts the same rows side by side, filterable by route, role family, language at work, master's and sponsorship, and holds the planner: pick a country, where you are now (studying, just graduated, working), what you want (first job, internship to job, experienced hire) and a role family, and it shows the route most used there for that path, what it needs and when it opens (programme windows and the country's recruiting calendar), with its sources. A plan is linkable (`hiring.html#de/graduated/first/finance`).

The world map is coloured by an IMF indicator of the reader's choice (GDP per head, economy size, unemployment, growth), one source for all 46 countries. Each country page opens with its key figures and where it sits among the 46, then the hub map (markers sized by population and coloured by what each hub mostly hires for) and **Hubs compared**: a hubs × role-families demand matrix, each hub's **standing** in its key families at national, regional and world scale (1–5, from cited rankings and statistics), population and GDP bars, and average pay against one-bedroom rent. Each hub's numbers carry their own source, area, year and date.

---

## Key Features

- **Running Score:** The questionnaire shows your score as you fill it in — the evenly weighted track score (the MBA's base points), before any school's own emphasis — and flashes how much each answer moved it. On phones it rides in the pinned Back / Next bar.
- **What-If Slider:** On every results page, move an answer — your test score first, then essays, experience, maths and the rest — and every programme below re-scores in place, flipping verdicts and tiers as it goes. Changes to several answers add up. Nothing is saved unless you press *Keep these answers*.
- **Me Now / Me After:** As soon as you try a change, the what-if panel puts two cards side by side — your score and your Strong / Competitive / Below Competitive counts now, and after the change ("GMAT 670 → 760") — with every programme whose verdict changes listed underneath, best news first.
- **Filter Pills:** *All · UK · Europe · US · Canada* and *Strong · Competitive · Below Competitive* cut a 30-school table down to the part you care about. They use the same words as each programme's verdict badge: Strong is at or above a school's Strong line, Competitive is at or above its Competitive line, Below Competitive is eligible but short of it.
- **Deadlines and Official Links:** Each programme shows its next application deadline as a countdown ("Round 2 · 6 Jan 2027 · in 15 weeks") beside a link to its official admissions page, from `data/deadlines.js`. Every date is tagged with where it came from, and programmes whose dates could not be confirmed show the link alone rather than a guess. Dates were read on 23 September 2026 for the 2026–27 cycle, and every programme says when its entry was last checked ("Checked 23 Sep 2026").
- **Stale-Date Warning:** Once the oldest check in `data/deadlines.js` is more than 120 days old, every results page opens with a warning that the dates are getting old and that the developer should move their ass and update them, and each programme's date turns red. See *Refreshing the deadlines* below.
- **Results You Can Come Back To:** Results live at `#results` in the address, so a phone's Back button returns to your answers instead of leaving the calculator, and a reload keeps you on the results. A returning visitor gets *See my results* on the resume banner, *See your results* on the track pickers, and a *Your results* list on the front page.
- **Short Results Pages:** A *Jump to* line under the headline numbers links to each section and the battle plan. Ruled-out programmes sit behind one *Show* toggle (a search that matches one opens it), each row keeping only the rule that blocks it; the facts each school publishes fold inside its row.
- **Battle Plan (PDF):** A two-page summary — your list by tier with deadlines, your strengths and gaps, and a dated checklist — sent to the print dialog, where *Save as PDF* makes the file.
- **Built for Thumbs:** On phones every control is at least 44px, answers are full-width cards, and the sideways menus fade at the edge and snap to an item.
- **Hard Gates Before Scoring:** If a programme requires a quantitative degree or excludes computing graduates, it is explicitly flagged as *Ineligible* alongside the exact published rule.
- **Targeted Score Insights:** Shows estimated GMAT/GRE distributions for admitted cohorts and calculates break-even test percentiles.
- **Built-in Employer Placement:** In-app dropdown examples help you benchmark internship and full-time employer prestige without guesswork. *(Detailed reference in [docs/EMPLOYER-GUIDE.md](docs/EMPLOYER-GUIDE.md)).*
- **100% Client-Side Answers:** Your answers are saved only in your browser's `localStorage` so refreshing doesn't lose your work. Wiped at any time with the footer's *"Clear everything"* button.
- **English and Italian:** *EN · IT* in the top strip switches the whole site — pages, questions, options, school facts, deadline notes and results — and the choice is remembered. English stays the default. On phones the strip shows just the other language. Translating never changes a score: only the words are swapped, and `tests/i18n-test.js` proves the numbers match.
- **Link Previews:** Every page carries a preview card (`img/og-admetia.jpg`), so a shared link shows a picture, a title and a line of description in WhatsApp, LinkedIn, Telegram and the rest.
- **Three Editions:** The site is laid out like a financial newspaper — masthead, section navigation grouped under Business and Computing, a questionnaire with margin notes, results as a league table — and the *Edition* picker in the top strip switches between **The City** (the default: salmon paper, claret and teal, a dark market bar), **Wall Street** (black and white with colour photographs, Times New Roman with a condensed display face for headlines) and **FBI Watchlist** (black masthead, white page, full colour). The choice is remembered in this browser.
- **The Admissions Index:** a market-style ticker under the navigation. Each programme is a symbol whose "price" is the Competitive bar the model uses for it; once you have answered a calculator, the change column shows your margin against each bar in green or red. It is built from the models and your saved answers — nothing is fetched, and none of it is market data.

---

## Project Structure

```text
Pages (they stay at the top level: GitHub Pages publishes these paths as the site's URLs)
index.html          Landing page — Business or IT track selector
business.html       Business track picker (MBA, Finance, Management, Marketing)
mba.html            MBA calculator and results
masters.html        Master's calculator (?track=mim|mif|marketing)
it.html             IT track picker (Computer Science, Data Science & AI, Conversion)
computing.html      Computing calculator (?track=cs|dsai|conversion)
map.html            The Atlas: world map, country pages and hub maps
hiring.html         How hiring works in 46 countries: the planner and the table of countries
404.html            Page-not-found, in the site's own style
sw.js               Service worker — keeps visited calculators working offline
                    (it has to sit at the top to cover every page)

css/app.css         The newspaper layout and its three editions
css/fonts.css       @font-face rules for the typefaces in fonts/ (all SIL OFL)
fonts/              The typefaces, with their licences
img/photo/          Photographs: JPEG masters plus 480/800/1240px WebP (tools/build-images.sh)
img/wordmark/       Nameplate images for the Wall Street and FBI Watchlist editions
img/                Favicon, touch icon, link-preview card and the section marks (mark-*.svg)

js/ — what runs in the page
  engine.js         Core wizard runtime, reactive form logic and the running score
  score-*.js        Scoring and gate rules: score-mba, score-masters, score-computing
  page-*.js         Each calculator's results page: page-mba, page-masters, page-computing
  results-kit.js    Filter pills, the what-if slider and Me now / Me after, deadline
                    countdowns and freshness, the battle plan
  storage.js        Saving answers in this browser (localStorage)
  session.js        "Clear everything", resume banners and "See your results" links
  ui.js             Scroll reveals, the top-bar shadow and the score dial; never touches a score
  theme.js          Edition picker, section-nav highlighting and the dateline
  ticker.js         The Admissions Index ticker and the front page's "Highest bars"
  intro.js          The opening titles
  i18n.js           The language switch and the translation engine
  i18n-it.js        Italian for the pages and the interface
  stats.js          Anonymous visit counting (off until configured)
  page-hiring.js    The hiring page: planner and comparison table (hiring.html)
  page-map.js       The Atlas: map, overview, country page and hub map; loads one
                    country record at a time

data/ — what the calculators know
  mba-model.js, masters-model.js, computing-model.js
                    Questions, school profiles, gates and thresholds, per calculator
  computing-evidence.js  5-year aggregated applicant reports for the computing track
  conversions.js    GMAT / Focus / GRE and grade conversions
  mba-companies.js  Employer prestige values behind the MBA's employer search
  deadlines.js      Official admissions links and 2026–27 deadlines, each date source-tagged
  i18n-it-models.js Italian for the questions, options, school facts and deadline notes
  atlas/index.js    The Atlas's 46 countries, map views, role families, demand levels
                    and the scope rule
  atlas/geo.js      Country shapes, generated from Natural Earth by tools/atlas-geo.js
  atlas/stats.js    Country indicators (IMF World Economic Outlook), generated by tools/atlas-stats.js
  atlas/<id>.js     One record per country (hubs, routes, claims), English and Italian
  atlas/entry/<id>.js  How hiring works in each country, English and Italian, with its sources
  atlas/outcomes.js Graduate outcomes (Eurostat, ILO via World Bank, national), generated by tools/atlas-outcomes.js

tests/*-test.js     Test suites (equivalence, gates, profiles, calendar, translation, pages);
                    computing-test.js covers the IT track, i18n-test.js the Italian
tools/build.js      Packages the site into _site/ for publishing (bundled, minified, hashed)
tools/run-tests.js  Cross-platform test runner behind `npm test`
tools/i18n-report.js  What is missing or out of date in the Italian
tools/atlas-geo.js  Rebuilds data/atlas/geo.js from Natural Earth (downloads once)
tools/atlas-stats.js  Rebuilds data/atlas/stats.js from the IMF DataMapper API
tools/atlas-outcomes.js  Rebuilds data/atlas/outcomes.js (Eurostat API, World Bank API, research/outcomes/researched.json)
tools/hiring-check.js  Checks every country's hiring file and Working there rows against the full plan
tools/build-images.sh   WebP copies of the photographs
tools/build-brand.py    Favicon, wordmarks, touch icon and link card (needs .venv, see the file)
tools/data-collection/  One-off collectors behind data/computing-evidence.js — not part of
                    the everyday workflow
docs/EMPLOYER-GUIDE.md  The employer placement guide
docs/VERIFICATION.md    The 28 September 2026 audit: mathematical proof and methodology
docs/ATLAS-PROGRESS.md  The Atlas checklist: method, batches and one row per country
docs/GAP-ANALYSIS.md    What the Atlas needed that the site and research did not have
design/concepts/    Parked alternative redesigns (static mockups, not part of the site)
design/intro/       The lab and brief the opening titles were built from
CREDITS.md          Photograph and typeface credits and licensing details
```

---

## Visit counting

The site can count visits so you know whether anyone uses it — general numbers only.
Counts go to [GoatCounter](https://www.goatcounter.com), an open-source counter that sets no
cookies. For each visit it gets the page (and track), the site that linked here and the
screen width; it works out the browser and country itself and does not keep IP addresses.
It also counts a few anonymous moments: a results page reached, the what-if panel used, a
battle plan printed, the language switched. **It never receives anything typed into a
calculator.** Readers whose browser sends Do Not Track or Global Privacy Control are never
counted, and anyone can untick *Count my visit* in the footer.

To switch it on: create a free GoatCounter account, pick a code (say `admissions-pisa`),
and put `https://admissions-pisa.goatcounter.com/count` in `COUNTER` at the top of
`js/stats.js`. Until then nothing is sent.

## Refreshing the deadlines

Every three or four months: re-read each school's page, update the rounds in
`data/deadlines.js`, and set `checked` at the bottom of that file to the day you finished.
If you only re-check some schools, give each its own `checked` date instead. For a new
cycle, change `cycle` there too (e.g. `'2027–28'`) — the tests follow it. If you forget, the
site reminds everyone after 120 days.

If you edit any English text, run `node tools/i18n-report.js` afterwards: an edited
sentence shows in English on the Italian site until its entry is updated.

## Important Caveats & Legal

- **Ranking Tool, Not a Guarantee:** Outputs indicate relative competitiveness and rule eligibility; admissions committees make holistic, qualitative decisions.
- **Approximate Conversions:** Cross-scale test mappings (GMAT 10th Ed, GMAT Focus, GRE) and international GPA conversions are percentile-based approximations.
- **Independent & Unofficial:** Not affiliated with, endorsed by, or connected to any university, testing body, or business school.
