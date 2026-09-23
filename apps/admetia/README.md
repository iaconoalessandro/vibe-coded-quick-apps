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

An offline, privacy-first admissions chances evaluator for top-tier **MBA**, **Business Master's**, and **IT & Computing Master's** programmes across the UK, Europe, and the US.

**Live Site:** <https://iaconoalessandro.github.io/admissions-calculator/>

Zero build steps to run it. Zero runtime dependencies. Zero network calls. Everything runs locally in your browser.

---

## Quick Start

- **Run locally:** Double-click `index.html`, or run a local static server:
  ```bash
  python3 -m http.server 8777
  # Open http://localhost:8777
  ```

- **Run test suites:**
  ```bash
  node tests/mba-test.js && node tests/masters-test.js && node tests/features-test.js && node tests/profiles-test.js && node tests/it-test.js
  ```
  *(146 tests passing across all models and edge cases).* `npm test` runs the same suites.

- **Publish:** pushing to `main` runs `.github/workflows/pages.yml`, which tests, runs
  `npm run build` and deploys `_site/` to GitHub Pages. The build (`tools/build.js`) only
  repackages for speed — one minified script and stylesheet per page, `theme.js` inlined,
  hashed file names, and no models on the front pages unless there are saved answers to
  score. The pages in the repo keep working unbuilt, so there is nothing to rebuild while
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
A rule-first evaluation model for 22 premier UK and European computing master's programmes across three specialisations:
- **Tracks:** Computer Science (MSc CS), Data Science & AI, and Conversion MSc.
- **Inverted Rules:** Directly models conversion gates that disqualify candidates who already hold a computing degree (e.g., Imperial, UCL, Glasgow).
- **Hard Academic Bars:** Evaluates first-class honours requirements, prerequisite module audits, and minimum mathematics credits.
- **Calibrated Admissions Data:** Incorporates 5 years of pooled applicant outcomes and acceptance distributions under strict sample-size thresholds.

---

## Key Features

- **Hard Gates Before Scoring:** If a programme requires a quantitative degree or excludes computing graduates, it is explicitly flagged as *Ineligible* alongside the exact published rule.
- **Targeted Score Insights:** Shows estimated GMAT/GRE distributions for admitted cohorts and calculates break-even test percentiles.
- **Built-in Employer Placement:** In-app dropdown examples help you benchmark internship and full-time employer prestige without guesswork. *(Detailed reference in [docs/EMPLOYER-GUIDE.md](docs/EMPLOYER-GUIDE.md)).*
- **100% Client-Side Privacy:** Your answers are saved only in your browser's `localStorage` so refreshing doesn't lose your work. Easily wiped with the footer's *"Clear everything"* or *"Forget on tab close"* options.
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
js/engine.js        Core wizard runtime and reactive form logic
js/score-*.js       Scoring algorithms and gate evaluation rules
js/page-*.js        UI presentation and dynamic results rendering
data/*-model.js     Declarative question definitions, school profiles, and thresholds
data/it-evidence.js 5-year aggregated admissions data

tests/*.js          Comprehensive test suites (equivalence, gates, profiles)
tools/build.js      Packages the site into _site/ for publishing (bundled, minified, hashed)
docs/               Supplementary documentation and employer placement guide
design/concepts/    Parked alternative redesigns (static mockups, not part of the site)
CREDITS.md          Photograph and typeface credits and licensing details
VERIFICATION.md     Mathematical proof and verification methodology
```

---

## Important Caveats & Legal

- **Ranking Tool, Not a Guarantee:** Outputs indicate relative competitiveness and rule eligibility; admissions committees make holistic, qualitative decisions.
- **Approximate Conversions:** Cross-scale test mappings (GMAT 10th Ed, GMAT Focus, GRE) and international GPA conversions are percentile-based approximations.
- **Independent & Unofficial:** Not affiliated with, endorsed by, or connected to any university, testing body, or admissions consulting service.
