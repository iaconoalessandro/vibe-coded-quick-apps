# Career Compass: plan

A guided questionnaire for undecided students that ends in a short, ranked list of career fields and role families, each with the reason it fits, what stands in the way, and the next step. Branch `career-explorer`. Status at the end.

## 1. What it is, and what it is not

- **Is:** a 5-to-7-minute diagnostic that turns a student's background, constraints and preferences into a ranked shortlist of the 124 role families in the Career Explorer, using only numbers and rules already in `research/`.
- **Is not:** a personality test. It does not claim psychometric validity, it does not "predict success", and it never says "your ideal career". It says "these fit what you told us; here is why, and here is what to check".
- **Claim we can stand behind:** every score, flag and sentence on the results page traces to a file in `research/` (quoted with its path on the "How this works" panel). Where the research is thin (hours, stress, Italian pay), the result says so.

## 2. The research it uses (most of it is not on the site today)

| Source | What the compass takes from it | On the site today? |
|---|---|---|
| `research/branches/index.md` §2–§4 (via `careers/data/careers.json`) | Per role: hours, stress, people, quant, entry difficulty; background fit S/P/X for 11 backgrounds | Yes (explorer) |
| `research/decisions/decision-framework.md` | Order of decisions; constraints first (citizenship, languages, budget, graduation date, quant credits); cross-career table (language need, visa-friendliness, AI exposure of junior work, main door, does a master's help); rule R1.1 (adjacent families, doors still open); the 15 myths | No |
| `research/decisions/should-you-do-a-masters.md` | Career-by-career "does a master's change the outcome" verdicts; country degree norms | No |
| `research/decisions/long-horizon-careers.md` | Exits are broad (ex-MBB: tech ≈25%, PE/VC ≈5%); settlement clocks for non-EU; childcare; AI risk sits at the entry rung | No |
| `research/decisions/timing-and-sequencing.md`, `getting-in/recruiting-calendar.md` | Pre-experience windows close on graduation date; recruiting windows by sector | No |
| `research/evidence/trends.md` | Functions most and least exposed to AI at entry; uneven squeeze by employer type | No |
| `research/careers/*.md` (12 sector files) | Sector lenses not in the 124 roles: pharma, luxury, commodities/energy, industrial/automotive/defence, public policy and EU institutions, tech business and startups, economic consulting, real estate, sustainability | No |
| `research/places/*.md` | Language as the binding constraint (2–3% of German postings waive German); EU citizens need UK visas | Partly (Atlas) |

## 3. The questionnaire (four parts, 17 questions in the full mode, every one skippable; quick mode asks 1, 2, 6, 7, 8, 9, 10, 13)

**Part A. Where you start** (constraints first, as decision-framework.md Step 0 orders them)
1. What did you study (or are studying)? 11 backgrounds + engineering/maths/science + humanities/law/social science + other. Drives background fit.
2. Where are you now? Bachelor's years 1–2 / final year / in a master's / graduated < 2 years / working 2+ years. Drives timing warnings.
3. Citizenship: EU/EEA/Swiss, UK, US, other. Drives visa and EU-institution flags.
4. Languages at B2/C1 or better (multi): English, German, French, Italian, Spanish, Dutch, Nordic, other. Drives language-binding flags.
5. Where would you like to work first (multi)? UK, DACH, France, Italy, Benelux, Nordics, Iberia, US, Gulf/Asia, open.

**Part B. What you want to spend your days doing** (activity interests; the biggest weight)
6. Pick up to four activities you would enjoy most (12 options: build software; analyse data to answer a question; build models with maths and statistics; protect systems and investigate incidents; advise clients on problems; negotiate and execute deals; persuade, sell and win customers; create brands and campaigns; plan operations and make things run; check, audit and report numbers; research and write about the economy and policy; lead and develop people).
7. One activity you would rather avoid (same list). A penalty, not an exclusion.

**Part C. How you want to work** (maps to the research's 1–5 scales)
8. People: mostly solo ↔ the job is relationships (people 1–5).
9. Technical depth: basic numeracy ↔ maths or code is the job (quant 1–5).
10. Hours you would accept in the first three years: ~40 / ~50 / ~60 / 70+.
11. Pressure: predictable deadlines ↔ sustained high stakes (stress 1–5).
12. Competition: how selective a door you are ready to try (entry difficulty 1–5), with "and I want a plan B" always on.

**Part D. What matters and what's next**
13. Rank what matters most (pick two): starting pay; long-run pay; balance; learning and exits; stability; mission or public impact; creativity.
14. Further study you'd consider (multi): a master's; a PhD; a professional qualification (ACCA/ACA, CFA, CPA); none.
15. Kind of employer you would enjoy (up to two): bank or financial firm; consulting or professional services; large company; tech company; startup; public sector or international organisation; agency or boutique; university or research lab; no preference.
16. Sectors that attract you (optional, multi): pharma and health; luxury and fashion; energy and commodities; industry, automotive and defence; public sector and EU institutions; tech and startups; sports and gaming; none in particular.
17. How much does AI pressure on junior hiring worry you? Not much / some / a lot.

## 4. Scoring (transparent, client-side, no model)

For each role family, a fit score 0–100 = weighted sum of:

| Component | Weight | How |
|---|---|---|
| Activity interest | 40 | Role's activity tags (editorial file `tools/careers/compass-map.json`, one line per role) ∩ chosen activities; avoided activity subtracts |
| Work style | 25 | People and quant: distance between answer and the role's range mid-point. Hours and stress: penalty only when the role exceeds what the student accepts (being calmer is never penalised) |
| Background | 15 | S = full, P = half, X = none; "other" backgrounds use the closest rated background named in the role's "How to enter", otherwise neutral |
| Priorities | 10 | Pay, balance, exits, stability, mission, creativity: role-level attributes from the research (e.g. hours ≤45 and stress ≤3 = balance) |
| Entry realism | 10 | Entry difficulty vs appetite; above appetite costs points |

**Flags, not filters** (shown on the result, with source): language binding (DACH consulting, FMCG local roles, Milan/Frankfurt IB), visa (EU institutions EU-only, UK Fast Stream closed to most EU graduates, sponsorship), PhD-gated (AI research, most economist roles), qualification-gated (audit, tax), timing (pre-experience caps; recruiting windows), AI exposure of junior work.

**Always shown:** a "reachable alternative" for each top role (closest profile, lower entry difficulty, door still open: rule R1.1), and the myths from the myths table that the answers trigger.

## 5. Results page

1. Top three fields with a one-line reason each.
2. Top eight role families: fit bar, the two or three answers that drove the score, the strongest flag, at-a-glance scores, link to the role page.
3. "Watch-outs for you": the flags and myths triggered by the answers.
4. "Next steps": role pages, the matching calculator (MiF, MiM, Marketing, MBA, CS, DS&AI, Conversion), the Atlas/Hiring planner for the chosen country, and the recruiting-timing note for the student's stage.
5. "How this works": weights, what each answer changed, sources, and limits.
6. Share link (answers in the URL fragment; nothing leaves the browser), print, restart.

## 6. Build

- `tools/careers/compass-map.json`: per-role activity tags, priority attributes and flags, each flag with its research path. Editorial, like `italy-map.json`.
- `tools/careers/compass.js`: validates the map against `careers.json` (every role mapped, every tag known, every cited file exists) and emits `careers/data/compass.json`.
- `careers/compass.html` rendered by `render.js` (same strip, nav, local nav entry "Compass"), works without JS as a description plus links.
- `careers/assets/compass.js`: the questionnaire, scoring and results; no requests except the data JSON.
- Italian interface strings in `js/i18n-it.js`; research text stays English (`translate="no"`).
- Links in: explorer home (a fourth door "I don't know yet"), local nav, sitemap.

## 7. Checks

- Every role in `careers.json` has a compass entry; no unknown tags; every cited path exists.
- Persona fixtures (pure scoring function, run in Node): e.g. CS graduate who likes building software and dislikes selling ranks software roles first; finance graduate with high hours tolerance and deal interest ranks M&A/PE in the top five; a no-German, no-French EU student wanting DACH consulting gets the language flag.
- Determinism: same answers, same ranking. Skipping everything still returns a result with a note.
- Existing suites still pass; page weight limit; no external requests.

## 8. Competitor review (9 October 2026) and what it changed

Read on 9 October 2026. Vendor claims are the vendors' own; none publishes independent validation.

| Tool | What it does | What we take | What we avoid |
|---|---|---|---|
| **CareerLeader** (Butler and Waldroop, Harvard Business School; used by several hundred MBA programmes) | Business Career Interest Inventory + reward profile + abilities profile; report sections Interests, Motivators, Skills, Career Match, Culture Match, **Things to Be Alert For**; about an hour; paid via schools | Interest as the foundation, skills and credentials as a *threshold*; a separate motivators question; an employer-culture question; a "be alert for" section | Hour-long length; norms we do not have; a reviewer's complaint that it is weak on tech careers (we cover 49 tech and data roles) |
| **O\*NET Interest Profiler / My Next Move** (US Dept. of Labor) | RIASEC interests; **Job Zones** for preparation kept separate from interest; "Best fit / Great fit" labels; notice that results are for exploration, not hiring | Keep "fits now" apart from "fits after more preparation" (PhD, lateral-only entry); several results, never one winner; labels defined on the page; the exploration notice next to the results; a data date stamp | RIASEC codes: generic, and inventories disagree on a person's top code |
| **CareerExplorer (Sokanu)** | ~30 min, five sections, 140+ traits; asks you to **rate a few careers** and updates matches live; resume later; archetypes to share | "Interested / not for me" on each result re-ranks the list; resume later; live update | Personality archetypes (Barnum effect); machine-learned claims we cannot show |
| **National Careers Service (England)** | 40 questions, 5–10 min; no account; **reference code to return**; drill-down by category; job profiles with pay, hours, routes in | No signup; a share/return link; each result opens a role page with pay, hours and the way in | — |
| **Bright Network Career Path Test** | 2-minute sector test + optional 4-minute advanced test | A **quick mode** (8 questions) and a full mode | Sector-only output |
| **Accepted.com MBA quiz** (`research/product/competitors.md`) | 12 questions with **feedback on each answer**, then a consultation pitch | Short notes under the constraint answers (e.g. EU citizen + UK) | Upsell; collecting email |
| **80,000 Hours career guide** | Sceptical of career tests: interest fit correlates only weakly with satisfaction; recommends cheap tests (talk to people, try the work) and exploring adjacent options | A "test it cheaply" block for each top role; two adjacent families instead of one answer (decision-framework.md R1.1) | — |
| Critics of online quizzes (Career Key, counsellors) | Vague flattering output, false precision, self-report bias, one-off snapshot | Every reason names the answer and the number behind it; scores shown as bands with labels; "what would change your list"; "retake when your plans change" | Percent-precise claims; "your ideal career" |

**Changes to the plan from this review**
1. Two modes: **Quick** (8 questions, about 2 minutes) and **Full** (17 questions, about 6 minutes).
2. New question: **employer type** you would enjoy (bank, consulting, large company, tech, startup, public sector or international organisation, agency or boutique, university or lab). Each role is tagged.
3. Results split into **Fits now** and **Later, after more preparation** (PhD-gated, lateral-entry-only, senior-only roles), like Job Zones.
4. **Refine**: "Interested" / "Not for me" on each result re-ranks by similarity of activities and work style.
5. **What would change your list**: the best role held back by one answer (hours, pressure, competition, avoided activity) and the rank it would reach if that answer changed.
6. **Test it cheaply**: per top role, the people to ask and the questions to ask them (from long-horizon-careers.md decision rules 4 and 8), and the door and its timing.
7. **Inline notes** under constraint answers (citizenship × place, languages × place, stage).
8. **Anti-Barnum rules**: no archetypes, no adjectives about the reader; every sentence on the results page is either an answer echoed back or a sourced research fact.
9. Data date and compass version on the results; "retake when your plans change".

## 9. Status

- [x] Plan v1
- [x] Competitor review and plan v2
- [x] Map, generator, page, script
- [x] Checks, Italian strings, visual review (desktop and 375 px; The City and Wall Street; English and Italian)

## 10. As built (9 October 2026)

| Piece | File |
|---|---|
| Per-role tags (our reading) and the research passages quoted, with the extractors that fail loudly if a passage moves | `tools/careers/compass.js` |
| The page (generated with the rest of the explorer; a fourth "door zero" on the explorer home and "Compass" in its local nav) | `tools/careers/render.js` → `careers/compass.html` |
| The data, as a script so the page also works from `file://` (about 155 KB) | `tools/build-careers.js` → `careers/data/compass-data.js` |
| Scoring, pure and shared with the tests | `careers/assets/compass-core.js` |
| Questionnaire, results, refine, share link | `careers/assets/compass.js` |
| Styles (edition tokens only) | `careers/assets/careers.css`, "compass" block |
| Italian interface (340 strings) | `js/i18n-it.js`, "Career Compass" block |
| Checks (17 new) | `tests/careers-test.js`, "compass" block |

**Where the build differs from sections 3–5.**
- Weights are interest 35, work style 25, background 15, motives 10, entry realism 10, employer type 5 (the employer question took 5 points from interest).
- The quick version asks 8 questions across the same four parts; parts with no question are skipped.
- "Doors still open" first uses a route the research itself names (a role whose exits lead to the hard one, from the explorer's exit links) and only then a role with the same core activity, same field first.
- Myths are shown at most five at a time, by the research's own damage ranking.
- The score bands are 75+, 60–74, 45–59, below 45, defined on the results page next to the scores.

**Not done, and why.**
- No machine-learned weights or norms: there is no outcome data to train or validate against, and the page says so.
- No per-country nationality model for public-sector roles: the research gives the conditions only for a few bodies, so the compass flags "some posts require citizenship" instead of guessing.
- Pay is compared on a three-step reading, not in currency: the research never converts pay, and neither does the compass.
