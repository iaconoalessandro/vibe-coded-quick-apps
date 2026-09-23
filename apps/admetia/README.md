# Admissions Chances Calculator

> **LEGAL NOTICE:** This entire codebase is 100% pure, uncut, pharmaceutical-grade vibe-engineered trash. I have not authored a single line of syntax in this repository. Not one. My sole contribution was mashing Cmd + Enter like a lab rat hitting the pellet lever, then immediately dissociating into the astral plane. I supplied the vibes. Claude supplied the code. God supplied the patience. And Anthropic supplied the liability sponge.
>
> If this project infringes on your copyright, patent, trade secret, trade dress, moral rights, or fragile emotional well-being: I feel for you, truly. But Claude made every architectural decision, every questionable dependency, every “temporary” TODO that is now load-bearing. Please direct all subpoenas, cease-and-desist letters, DMCA notices, and personally venomous DMs straight to Anthropic’s legal department. Claude chose this life. I merely held the door open and whispered “hell yeah.
>
> My actual role was unpaid, meat-based clicker and professional yes-man. Claude would spit out a terminal command that looked like a raccoon had a seizure on a mechanical keyboard, politely ask for permission, and I would reply “run it” because I still don’t know what bash is and at this point I’m too deeply confused to ask.
>
> Did Claude scrape your entire proprietary backend, your internal design docs, and your grandmother’s secret recipe just to ship this glorified todo app? Almost certainly. Does Dario Amodei lose sleep over it? Of course not. He has an entire company culture, a carefully curated moral high ground, and enough lawyers to make the concept of personal accountability optional. Your lawsuit is already priced into the last funding round. The rest of us are just the soft, disposable buffer between Claude and the consequences.
> 
> If the preceding paragraphs offend your delicate sensibilities: Grok wrote them. Claude would pick war targets without hesitation if the prompt were polite enough, but it would never write something this prickly, this self-aware, or this disloyal. Its moral boundaries are extremely solid..

A privacy-first admissions chances evaluator for top-tier **MBA**, **Business Master's**, and **IT & Computing Master's** programmes across the UK, Europe, and the US — in **English and Italian**.

**Live Site:** <https://iaconoalessandro.github.io/admissions-calculator/>

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
  *(224 tests passing across all models, edge cases, the application calendar, the Italian translation and the pages themselves).* The runner
  (`tools/run-tests.js`) is plain Node, so it behaves the same on Windows, macOS and Linux; pass
  `-- -v` to see every assertion. Each suite also runs on its own, e.g. `node tests/it-test.js`.

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
A points-based MBA admissions model across 38 business schools. It reimplements a scoring model published by a third-party MBA admissions consultancy and reproduces its results; it is independent and not affiliated with or endorsed by that firm.
- **As published vs. Corrected:** *As published* keeps the model's scoring exactly, including two test-score checks that list individual scores where a range is meant; *Corrected* scores those as ranges (affects Columbia, Stanford, NYU and Yale).
- **Comprehensive Profile Evaluation:** Joint 10×8 lookup tables for GPA and GMAT/GRE, multiplicative modifiers for leadership and sport, matrix management reductions, and individual school calibrations.

### 2. Business Master's Calculator
An original multi-track model for pre-experience Master's in Management (MiM), Finance (MiF), and Marketing.
- **Hard Eligibility Gates:** Enforces strict prerequisite barriers (e.g., degree requirements, minimum quantitative ECTS credits, C1/B2 language hurdles, and work experience caps).
- **Institution-Specific Weightings:** Differentiates between *numbers-led* schools (e.g., Bocconi) and *holistic* reviewers (e.g., HEC Paris).
- **Counterfactual Guidance:** Tells you exactly which improvements (GMAT score, essays, recommendations) would close the gap for your target schools.

### 3. IT & Computing Master's Calculator
A rule-first evaluation model for 26 computing master's programmes in the UK, Europe and the US (Stanford, Carnegie Mellon and Berkeley) across three specialisations:
- **Tracks:** Computer Science (MSc CS), Data Science & AI, and Conversion MSc.
- **Inverted Rules:** Directly models conversion gates that disqualify candidates who already hold a computing degree (e.g., Imperial, UCL, Glasgow).
- **Hard Academic Bars:** Evaluates first-class honours requirements, prerequisite module audits, and minimum mathematics credits.
- **Calibrated Admissions Data:** Incorporates 5 years of pooled applicant outcomes and acceptance distributions under strict sample-size thresholds (UK and European programmes; the US ones are modelled from their published rules only).
- **Why not MIT:** MIT EECS has no terminal master's for outside applicants — everyone is admitted to the PhD — so there is nothing to score, and the results page says so.

---

## Key Features

- **Running Score:** The questionnaire shows your score as you fill it in — the evenly weighted track score (the MBA's base points), before any school's own emphasis — and flashes how much each answer moved it. On phones it rides in the pinned Back / Next bar.
- **What-If Slider:** On every results page, move an answer — your test score first, then essays, experience, maths and the rest — and every programme below re-scores in place, flipping verdicts and tiers as it goes. Changes to several answers add up. Nothing is saved unless you press *Keep these answers*.
- **Me Now / Me After:** As soon as you try a change, the what-if panel puts two cards side by side — your score and your Safe / Target / Dream counts now, and after the change ("GMAT 670 → 760") — with every programme whose verdict changes listed underneath, best news first.
- **Filter Pills:** *All · UK · Europe · US · Canada* and *Safe · Target · Dream* cut a 30-school table down to the part you care about. Safe is at or above a school's Strong line, Target is Competitive, Dream is eligible but below it.
- **Deadlines and Official Links:** Each programme shows its next application deadline as a countdown ("Round 2 · 6 Jan 2027 · in 15 weeks") beside a link to its official admissions page, from `data/deadlines.js`. Every date is tagged with where it came from, and programmes whose dates could not be confirmed show the link alone rather than a guess. Dates were read on 23 September 2026 for the 2026–27 cycle, and every programme says when its entry was last checked ("Checked 23 Sep 2026").
- **Stale-Date Warning:** Once the oldest check in `data/deadlines.js` is more than 120 days old, every results page opens with a warning that the dates are getting old and that the developer should move their ass and update them, and each programme's date turns red. See *Refreshing the deadlines* below.
- **Battle Plan (PDF):** A two-page summary — your list by tier with deadlines, your strengths and gaps, and a dated checklist — sent to the print dialog, where *Save as PDF* makes the file.
- **Built for Thumbs:** On phones every control is at least 44px, answers are full-width cards, and the sideways menus fade at the edge and snap to an item.
- **Hard Gates Before Scoring:** If a programme requires a quantitative degree or excludes computing graduates, it is explicitly flagged as *Ineligible* alongside the exact published rule.
- **Targeted Score Insights:** Shows estimated GMAT/GRE distributions for admitted cohorts and calculates break-even test percentiles.
- **Built-in Employer Placement:** In-app dropdown examples help you benchmark internship and full-time employer prestige without guesswork. *(Detailed reference in [docs/EMPLOYER-GUIDE.md](docs/EMPLOYER-GUIDE.md)).*
- **100% Client-Side Answers:** Your answers are saved only in your browser's `localStorage` so refreshing doesn't lose your work. Easily wiped with the footer's *"Clear everything"* or *"Forget on tab close"* options.
- **English and Italian:** *EN · IT* in the top strip switches the whole site — pages, questions, options, school facts, deadline notes and results — and the choice is remembered. English stays the default. On phones the strip shows just the other language. Translating never changes a score: only the words are swapped, and `tests/i18n-test.js` proves the numbers match.
- **Link Previews:** Every page carries a preview card (`img/og-card.jpg`), so a shared link shows a picture, a title and a line of description in WhatsApp, LinkedIn, Telegram and the rest.
- **Three Editions:** The site is laid out like a financial newspaper — masthead, section navigation grouped under Business and Computing, a questionnaire with margin notes, results as a league table — and the *Edition* picker in the top strip switches between **The City** (the default, after the Financial Times: salmon paper, claret and teal, a dark market bar), **Wall Street** (after the WSJ: black and white with colour photographs, Times New Roman with a condensed display face for headlines) and **FBI Watchlist** (after Forbes: black masthead, white page, full colour). The choice is remembered in this browser.
- **The Admissions Index:** a market-style ticker under the navigation. Each programme is a symbol whose "price" is the Competitive bar the model uses for it; once you have answered a calculator, the change column shows your margin against each bar in green or red. It is built from the models and your saved answers — nothing is fetched, and none of it is market data.

---

## Project Structure

```text
index.html          Landing page — Business or IT track selector
business.html       Business track picker (MBA, Finance, Management, Marketing)
mba.html            MBA calculator and results
masters.html        Master's calculator (?track=mim|mif|marketing)
it.html             IT track picker (Computer Science, Data Science & AI, Conversion)
computing.html      Computing calculator (?track=cs|dsai|conversion)

css/app.css         The newspaper layout and its three editions
css/fonts.css       @font-face rules for the typefaces in fonts/ (all SIL OFL)
img/photo/          Photographs: JPEG masters plus 480/800/1240px WebP (tools/build-images.sh)
img/wordmark/       Nameplate images for the Wall Street and FBI Watchlist editions
sw.js               Service worker — keeps visited calculators working offline
js/theme.js         Edition picker, section-nav highlighting and the dateline
js/ticker.js        The Admissions Index ticker and the front page's "Highest bars"
js/engine.js        Core wizard runtime, reactive form logic and the running score
js/results-kit.js   Filter pills, the what-if slider and Me now / Me after, deadline countdowns
                    and freshness, the battle plan
js/i18n.js          The language switch and the translation engine
js/i18n-it.js       Italian for the pages and the interface
data/i18n-it-models.js  Italian for the questions, options and school facts
js/stats.js         Anonymous visit counting (off until configured)
js/score-*.js       Scoring algorithms and gate evaluation rules
js/page-*.js        UI presentation and dynamic results rendering
data/*-model.js     Declarative question definitions, school profiles, and thresholds
data/it-evidence.js 5-year aggregated admissions data
data/deadlines.js   Official admissions links and 2026–27 deadlines, each date source-tagged

tests/*.js          Test suites (equivalence, gates, profiles, calendar, translation, pages)
tools/build.js      Packages the site into _site/ for publishing (bundled, minified, hashed)
tools/run-tests.js  Cross-platform test runner behind `npm test`
tools/i18n-report.js  What is missing or out of date in the Italian
docs/               Supplementary documentation and employer placement guide
design/concepts/    Parked alternative redesigns (static mockups, not part of the site)
CREDITS.md          Photograph and typeface credits and licensing details
VERIFICATION.md     Mathematical proof and verification methodology
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
- **Independent & Unofficial:** Not affiliated with, endorsed by, or connected to any university, testing body, or admissions consulting service.
