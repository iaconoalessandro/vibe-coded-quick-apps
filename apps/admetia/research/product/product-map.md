---
title: Product map — turning the research into site sections, tools and free vs paid content
last_researched: 2026-10-02
scope: How the /research library becomes the Admetia master's and career-navigation product. Covers sections, interactive tools (with the data and rules each needs and the file it comes from), free vs paid lines, a data model, a maintenance plan and a build order. The admissions calculator is one tool among about a dozen.
confidence: medium. The content and rules are sourced in the library. Demand, pricing and conversion assumptions are untested and labelled as such.
review_by: 2027-03-31
---

# Product map

## Bottom line

1. **Reposition from "Can I get in?" to "What should I choose, and when?"** The calculator answers one of eight decisions (Step 4 of decisions/decision-framework.md). The research shows the costliest mistakes happen elsewhere:
   - the wrong country or language for the target job;
   - the wrong format for internship timing;
   - missing the pre-experience window;
   - misreading rankings and salaries;
   - visa timing.
2. **The defensible paid asset is structured, dated, sourced data that nobody else assembles.** Three datasets matter most:
   - school → employer/sector/country pipelines from employment reports;
   - city "net minus rent" by salary;
   - a personalised recruiting and application calendar.

   Prose guides are easy to copy. Maintained datasets with source tags and review dates are not.
3. **Keep the site's existing strengths:** client-side and privacy-first, EN/IT, source tags (OFF/TP/NP/CAL), stale-data warnings, and the newspaper voice. Every tool below can run in the browser on static JSON. That fits GitHub Pages and the current "your answers never leave your browser" promise.
4. **Free = trust and reach** (myths, visa basics, rankings decoder, the calculator). **Paid = personal, time-sensitive decisions** (a personalised plan, the pipeline database, the ROI comparator with your inputs, deadline tracking, the Italy return planner).
5. **Build order:** first the recruiting/application calendar and the constraint filter (highest value, data mostly in hand), then the net-minus-rent ROI comparator, then the pipeline database (highest value, highest maintenance).
6. **Freshness is a product feature and a liability.** The library has about 25 time-sensitive facts with expiry dates in the next 3–6 months (visa rules, deadlines, H-1B status, Mediobanca, UK–EU youth scheme). The site's existing "stale date" mechanism should extend to every data file.

---

## 1. Proposed site sections

| Section | What it answers | Built from | Free / paid |
|---|---|---|---|
| **Start here: the decision path** | The 8-step order of decisions with a progress tracker | decisions/decision-framework.md | Free |
| **Admissions** (existing calculator, extended) | Can I get in, what blocks me, what would change it | Existing models + getting-in/admissions.md | Free (core); paid add-ons (round strategy, deposit planner) |
| **Careers**: one page per family (IB, quant/AM, MBB, tier-2, Big 4, corporate programmes, FMCG/luxury, agencies, tech/startups, EU institutions) | Entry door, pay, hours, language, visa, AI exposure, master's value | careers-*.md | Free summary; paid "playbook" (calendar, employer list, rules) |
| **Countries and cities** | Where can I actually work, in which language, at what net pay | places/countries-and-cities.md, places/visas-and-work-rights.md, money/salaries-and-roi.md | Free overview; paid comparator |
| **Programmes and schools** | Which programme type and format; how to read rankings; school dossiers | decisions/programme-choice.md, decisions/school-types-and-accreditation.md, getting-in/employer-pipelines.md | Free decoder; paid dossiers and pipeline data |
| **Money** | Total cost, funding, loans, ROI | money/costs-and-funding.md, money/salaries-and-roi.md | Free cost tables; paid personal ROI |
| **Timing** | Now vs later, gap year, second master's, deferred MBA | decisions/timing-and-sequencing.md | Free guide; paid window checker within the plan |
| **Getting in** (recruiting) | Calendars, tests, CVs, networking, back doors | getting-in/recruiting-calendar.md, getting-in/breaking-in.md | Free basics; paid personalised calendar |
| **Italia** (IT-language hub) | Laurea magistrale vs Master vs MSc; AlmaLaurea reality; going abroad and coming back | places/italy-playbook.md | Free core; paid return planner |
| **The Briefing** (trends, newspaper-style) | What changed this quarter | evidence/trends.md + dated updates | Free (reach); paid alerts |
| **Myths desk** | The 15 most damaging myths, with evidence | decisions/decision-framework.md myths table, every file's myths | Free (SEO and shareable) |

## 2. Tools (ranked by value ÷ effort)

Each tool lists its inputs, its logic and data, its source files, and its main risk.

### T1. Personal recruiting and application calendar ("battle plan" v2)
- **Inputs:**
  - target careers (≤2);
  - target countries;
  - programme and start date (from the calculator's school list);
  - current year of study;
  - citizenship.
- **Output:** a month-by-month plan from now to 12 months after the programme, which can be printed or exported to calendar (the site already prints a battle plan and has calendar features). It covers:
  - application rounds (existing deadlines.js);
  - test dates;
  - scholarship deadlines;
  - internship windows by sector and country;
  - UK Graduate visa cut-off (31 Dec 2026);
  - experience-cap and deferred-MBA deadlines.
- **Rules:** R7.1–R7.8 and R5.1/R5.6/R5.7 in decisions/decision-framework.md, plus the month tables in getting-in/recruiting-calendar.md §10.
- **Data needed:** a `calendar-windows.json` of sector × country × programme-type windows, each with a source tag and `checked` date.
- **Why first:** timing failures are the most avoidable and most expensive mistake (missing the London window, round 1, the pre-experience window). The data is mostly in hand. It extends something the site already does.
- **Risk:** windows move year to year. Needs a quarterly refresh and the stale-date banner.
- **Tier:** free generic calendar; **paid** personalised, multi-target plan with alerts.

### T2. "Where can I actually work?" constraint filter
- **Inputs:** citizenship, languages with CEFR levels, target career family.
- **Output:** a country/city grid marked open / possible with conditions / effectively closed, with the binding reason. For example:
  - "DACH MBB: closed below C1 German (McKinsey: 'zwingend erforderlich')".
  - "UK: open via Graduate visa, 18 months from 2027; HPI not available from HEC/Bocconi/HSG".
- **Rules:** decision-framework R2.1–R2.5; places/visas-and-work-rights.md comparison table; places/countries-and-cities.md language data (only 2.4–3.4% of German postings waive German).
- **Data needed:** `work-access.json` (country × citizenship × language × career → status, reason, source, checked).
- **Risk:** visa law changes. Must show its review date.
- **Tier:** **free** (the strongest top-of-funnel tool; it reframes the whole choice).

### T3. Net-minus-rent city comparator (ROI v1)
- **Inputs:** an offer salary or a career family; candidate cities; family status (affects impatriati, Swiss tax); whether expat regimes apply.
- **Output:** gross → net → minus a central one-bed rent → monthly disposable. Optional: tuition payback months.
- **Data needed:**
  - tax schedules and method from money/salaries-and-roi.md §5 (which reproduces PwC's Swiss example to within ~1%);
  - rents;
  - BFS, LBS, CGE and AlmaLaurea entry salaries;
  - expat-regime rules (Beckham, 30% ruling incl. the 150 km test, impatriati art. 225).
- **Key outputs the research already supports:**
  - Zurich ≈ €3,500/month after rent vs London ≈ €900 at typical graduate salaries.
  - At €60k: Dubai > Paris ≈ Madrid ≈ Amsterdam (30% ruling) > Munich ≈ Milan ≈ Zurich > London ≈ Amsterdam (no ruling).
- **Risk:** tax modelling errors. Health insurance and other gaps are already flagged. Label it "estimate", show the method, and test against official calculators.
- **Tier:** **paid** (personal, high-stakes, hard to find elsewhere). A free teaser with fixed €60k examples.

### T4. Total cost of attendance calculator
- **Inputs:** programme (from the calculator's list), citizenship, city living standard, loan or no loan.
- **Output:**
  - tuition (EU vs non-EU) + living (school mid-point, not the visa floor) + visa/IHS + deposits + test fees;
  - the forfeit if holding two offers;
  - FX exposure of the loan.
- **Data:** money/costs-and-funding.md tuition table and worked examples; deposits (LBS £8,000, ESSEC €6,000, HEC €5,000, LSE 10–15%).
- **Risk:** fees change each year. Needs a yearly refresh in September.
- **Tier:** free basic; paid side-by-side with ROI (bundle with T3).

### T5. Pre-experience window and deferred-MBA checker
- **Inputs:** graduation date(s), full-time work months, internships, target programmes or schemes.
- **Output:** which windows are still open and until when. Examples:
  - LBS MiM: 2 years after graduation;
  - Unilever: 24 months;
  - L'Oréal UK: 2 years;
  - LVMH: 3 years;
  - Airbus: 3 years;
  - HBS 2+2, Stanford and Wharton Moelis: no full-time work between degrees.
- **Rules:** decisions/timing-and-sequencing.md R1–R4; careers/marketing.md; careers/accounting-and-corporate.md.
- **Tier:** **free** (small, viral, directly prevents an irreversible mistake). Folds into T1 for paid users.

### T6. Rankings and employment-report decoder
- **Inputs:** two or more schools.
- **Output:**
  - FT tier, rank, and whether the gap is "noise" (below the top 30, <15 places);
  - employment coverage warning (see the Round-3 coverage-flag logic below: amber under 75%, plus a class-size flag under 60; this replaces the earlier 70% rule of thumb);
  - PPP caveat;
  - "salary increase rewards low starting pay";
  - French grade de master status;
  - HPI eligibility;
  - accreditation as a minimum screen only.
- **Data:** decisions/school-types-and-accreditation.md; FT figures must **not** be republished wholesale (licensing). Store only what's needed (tier, coverage flag) with attribution, or link out.
- **Tier:** **free** (trust-building, differentiating, SEO).

### T7. School pipeline explorer (the moat)
- **Inputs:** a school (and programme), or a target employer/sector/city.
- **Output:** where graduates go (sector %, country %, named employer volumes where published, salary by sector, report year and coverage), and the reverse view: which schools feed a target.
- **Data in hand (examples):**
  - Bocconi by MSc: 63.9% of Finance graduates abroad vs 38.4% of Marketing Management;
  - LBS MiM/MFA/MAM sector and pay splits;
  - RSM's top five employers;
  - SSE: 38% of international graduates stay in Sweden;
  - HEC MIF €103k vs Master in Marketing €63k;
  - Imperial Strategic Marketing: 15% into marketing roles;
  - CGE channel data.
- **Data model:** `pipelines.json`, one row per (school, programme, report year, sector or country or employer, share, salary, coverage, source, checked).
- **Risk:** the highest maintenance load. Schools publish in different formats, and some sit behind forms. Start with the ~70 calculator programmes, mark unknowns as NP (as the calculator already does), and never extrapolate.
- **Tier:** **paid** (core subscription value), with a free summary per school.

### T8. Career-family comparator
- **Output:** the decisions/decision-framework.md cross-career table, made interactive (filter by language, citizenship, risk tolerance, hours). It links each family to its playbook.
- **Tier:** free table; paid playbooks.

### T9. Italy: "Laurea magistrale, Master or MSc?" and the return planner
- **Part 1 (free):** a classifier that explains the legal status of the three options (DM 270/2004 art. 3 c. 9 vs c. 1–2), AlmaLaurea outcomes by class and university, and the concorsi equivalence rule (Funzione Pubblica).
- **Part 2 (paid):** a return planner. It takes years abroad, the employer on return (same group or not), children and expected salary, and shows impatriati eligibility with an estimated saving. Legal basis: art. 5 D.Lgs. 209/2023 for tax years to 31 Dec 2026; art. 225 D.Lgs. 117/2026 (Testo unico, in force 4 Jul 2026) applies from 1 Jan 2027 with the same conditions (verification/round-3b.md P6). The key warning: "London → Milan transfer within the same group after 3 years does not qualify".
- **Risk:** tax interpretation. Label it "not tax advice". Show the article and the ruling (AdE 263/2025).

### T10. Offer and deposit decision helper
- **Inputs:** offers held, deposit deadlines, refund windows, pending decisions.
- **Output:** the forfeit cost of each path and a recommended sequence. Bocconi's first instalment is refundable within set windows; LSE deposits aren't; LSE's July–August windows are 7 days.
- **Tier:** paid add-on to the calculator.

### T11. Myth-buster quiz
A shareable 10-question quiz from the myths table (e.g. "Can an EU citizen work in London after an LSE MSc without a visa?"). **Free.** It drives acquisition and corrects the most damaging beliefs.

### T12. Alerts (paid)
Email or push notices when a watched fact changes (deadline, visa rule, scheme opening). This needs a backend or a third-party service, which conflicts with the zero-backend design. **Assumption:** use an opt-in third-party mailing tool and keep calculators client-side. Decide explicitly before building.

### T13. Fact-check desk and "Report X-ray" (added 2026-10-01)
- **What it is.** A permanent section (and an Italian edition) that takes the claims schools, rankings and newspapers publish and shows what each number does and doesn't say. Each entry gives the original figure, its source and date, the missing piece (denominator, coverage, horizon, PPP, selection) and the corrected reading.
- **Report X-ray tool:** paste or pick a school's employment claim. The tool asks the 12 questions from evidence/how-numbers-mislead.md Part F and flags missing items, e.g. "no coverage figure", "received vs accepted", "PPP salary".
- **Content source:** evidence/how-numbers-mislead.md (28 mechanisms with verified examples) and the public correction log.
- **Tier:** **free.** This is the trust anchor and the most shareable content.
- **Tone guardrail:** "misleading" or "incomplete", never "lie", unless a regulator or court has said so. A right of reply and a corrections address appear on every page.

### T14. Red-team checks built into tools (adopted from the Gemini review, verified)
- **Whole-cohort reading:** where a school publishes total class size, show outcomes over the whole class next to the school's own rate. Never estimate an unpublished gap (Gemini's "15–20%" is unsourced).
- **Month-zero visa cash:** add upfront fees and health surcharge to the cost tool, e.g. UK Graduate visa £937 + £1,035/yr IHS ≈ £2,490 for 18 months (GOV.UK, 2026).
- **Swiss non-EU warning:** for non-EU users selecting a Swiss school, show the 8,500 national third-country cap for 2026 (Federal Council) and the economic-interest test.
- **Tax-regime stress test:** every net-pay result using an expat regime (impatriati, 30% facility, Beckham) is shown with and without the relief.
- **Liquidity check:** plans that rely on unpaid or low-paid internships or gap years ask whether the user can cover living costs, and show the budget.
- **Not adopted:** Gemini's French "legal wall" warning (contradicted by service-public F2728) and its placement-probability numbers (unsourced).

### Round-2 additions to the tool list (2026-10-02)

| # | Tool or page | What it does | Built from | Tier |
|---|---|---|---|---|
| T15 | **Sector pages** (pharma, commodities, industrial/auto/defence, luxury, tech/data/AI, public sector/academia) | Same template as the existing careers pages: entry door, language, pay (with scope), AI exposure, calendar, decision rules | careers-healthcare-pharma, -commodities-energy, -industrial-automotive-defence, -luxury-fashion, -tech-data-ai, -public-policy-academia | Free summary; paid playbook |
| T16 | **"Where I come from" pages** | Grade-conversion lookup (LSE country equivalents on file; school-by-school warning for India/China/Turkey), return-tax-regime check (Spain/France/Portugal need ~5 years abroad; Italy art. 225 rules), home funding and currency effect | origin-countries-eu, origin-countries-non-eu, italy-playbook | Free; return-regime planner paid |
| T17 | **STEM-and-sponsorship checker** | For a US/UK/Canada/Singapore programme, shows STEM status by CIP code, work-permit length, salary floors and the 2027 changes. Status values: "on the DHS list (CIP shown)", "STEM per the school; ask for your I-20 CIP", "not STEM" (e.g. Michigan Ross MM). Show the DHS list date (22 Jul 2024) and the H-1B state: Proclamation 11069 runs to 21 Sep 2027, the $103,265 fee rule is only proposed | destinations-beyond-europe, visas-and-work-rights, verification-round-3b | Free |
| T18 | **Scholarship finder** | Filters schemes by nationality, work-experience requirement, deadline and return obligation; shows what the pre-experience reader is eligible for | scholarships-global (structured table, section 10) | Free; deadline alerts paid |
| T19 | **Settlement clock** | Compares the time to settlement by country (UK 5-year baseline under review, Germany §18c 3/2 years, NL 5) and flags what changes with a local degree | long-horizon-careers, visas-and-work-rights | Free summary; paid personalised |
| T20 | **Odds-in-context panel** | Shows seats, funnel stage and conversion with scope labels (UK only? global? applications vs applicants), never a single "chance of getting in" | base-rates-and-failure-modes, how-numbers-mislead | Free |
| T21 | **Interview and offer guide** | What predicts performance (structured interviews), employer AI-use rules by firm, probation/fixed-term rules by country | application-and-interview-craft | Free |
| T22 | **Ranking X-ray** (extends T13) | FT/QS/Eduniversal entry gates, tiers, coverage, programme size, and the proven-fraud box (Temple, Columbia; TBS as an allegation) | ranking-methodologies-dissected | Free |

### Round-3 additions to the tool list (2026-10-02)

| # | Tool, card or rule | What it does | Built from | Tier |
|---|---|---|---|---|
| T23 | **Stay-rate card per Nordic school** | One card per school or country: CBS 46% (DI, graduating 2022, status Nov 2024, employed in Denmark 2 years after; Denmark overall 53%, SDU 45%, DTU 69%, ITU 63%); SSE 38% of international MSc alumni (class of 2025, school-reported, 278 of 336 responded); Sweden SCB 36% (class of 2019, living in Sweden in 2022); Finland 53% (foreign citizens with a Finnish degree, employed 3 years after, 2023, OPH). Each card shows year, definition, denominator and source tag; cards are not ranked against each other because the definitions differ. Add the Italian stayer share in Denmark (9%) as a note | places/iberia-and-nordics.md s1.2 (DI March 2026; SCB; SSE 2026; OPH 28 Oct 2025) | Free |
| T24 | **Denmark job-seeking permit warning** (dated 1 Oct 2026) | Shown on any Danish school or country page for non-EU users: "Study permit applied for before 1 Oct 2026: job-seeking permit up to 3 years. On or after 1 Oct 2026: 1 year (PhDs and some Turkish nationals excepted)." Also shows the Pay Limit (DKK 552,000 a year, 2026 level, about €73,800) the first job must clear. Date-stamped; re-check each 1 January and when SIRI changes. EU/EEA users: the warning does not apply, but language and network constraints do (evidence/hypotheses.md IN-c) | places/iberia-and-nordics.md s5; SIRI pages (nyidanmark.dk, updated 22 Sep and 1 Oct 2026) † | Free |
| T25 | **Nordic and Iberian permit-floor panel** | Sweden SEK 34,470 a month (90% of median, since 16 Jun 2026); Finland €1,600 a month (2026); Norway NOK 599,200 / 522,600 shown as "unverified (UDI blocked)" and not used as a tool input (rule 4); Spain art. 190 direct switch; Portugal qualified job-seeker visa (Lei 61/2025) | places/iberia-and-nordics.md s5 | Free |
| T26 | **Net-minus-rent toggles for regimes** (extends T3, T14) | Add Beckham (Spain), IRS Jovem (Portugal: 100% / 75% / 50% / 25% by year (the 25% for years 8-10 was not re-read by the lead), cap 55 × IAS = €29,542.15 for 2026), Denmark/Finland/Sweden expert-tax regimes as toggles, always with and without, with the eligibility warning. The IRS Jovem benefit at €45,000 (about €7,200 in year one) stays labelled "author calculation" | places/iberia-and-nordics.md s3-s4; Portal das Finanças ruling PIV 30125 † | Paid (with T3) |
| T27 | **T6 coverage-flag logic** (extends T6) | For every FT row outside the calculator show the coverage figure beside the employment rate. Flag amber if coverage is under 75% (14 of 52 non-scored FT 2026 programmes, against 3 of 23 scored ones); flag "small class" if the class is under 60; show "no coverage stated" (grey) for school pages that omit it (Vlerick, Audencia, Frankfurt School's page); never show an employment rate without its coverage or its absence. Low coverage goes with lower, not higher, reported employment in this table (85.5% under 75% coverage vs 93.4% at 90%+), so the flag is a warning about missing data, not about inflated data. Do not republish the FT table: store the flag and attribute | evidence/mid-tier-school-outcomes.md s3.1, s6 (FT MiM 2026; author tallies) | Free |
| T28 | **Official-data panel by country, with a comparability warning** | LEO (England), InserSup (France), SIIU (Spain), AlmaLaurea (Italy), each with its definition beside the number. **Hard rule: InserSup and FT employment rates are not comparable.** InserSup = salaried jobs in France divided by all leavers, 18 months, jobs abroad invisible, social-security records; FT = self-reported employment of respondents, 3 months, coverage 15-100%, worldwide, PPP pay. The UI blocks side-by-side display of the two (or shows both with a red "different definitions" banner); LEO "one year" is the tax year about 19-24 months after graduation | evidence/mid-tier-school-outcomes.md s2, s7; evidence/how-numbers-mislead.md | Free |
| T29 | **Cost-per-premium calculator** | Fee difference divided by the observed monthly premium, preloaded with Polimi vs LUISS (similar FT pay; LUISS €17,000 a year in 2026/27) and a French public master's vs a mid-tier PGE (fee €255 vs five figures; pay 12.5% lower, salaried in France 73.7% vs 64.8%) | evidence/mid-tier-school-outcomes.md s5 | Paid (with T4) |

Rules added in Round 3:
- **Every Nordic or Iberian permit statement carries a date.** Denmark changed on 1 Oct 2026; re-check on each SIRI update.
- **Not comparable, not displayed together:** InserSup vs FT employment rates; LEO sustained employment vs a school's "employed at 3 months"; SIIU affiliation vs any pay survey.
- **Weighted-average pay in InserSup rows is an author approximation** (programme medians cannot be summed): show "about" and the label "author calculation".
- Norwegian UDI floors, Danish/Norwegian/Finnish net-pay parameter assumptions, BBVA-Ivie chart-read pay and INE Portugal press-only figures are not tool inputs until verified (claims lists in the two source files).

Product rules from Round 2:
- Every number shown carries its **scope** and **checked date** (see verification/freshness-register.md). Chart-read, snippet-only and author-calculated figures are labelled and not used as tool inputs until verified.
- **Paid hosting:** a paid tier cannot run on GitHub Pages as is (see the hosting constraints above).
- **Not legal advice:** immigration, tax and legal outputs stay general; a lawyer reviews before any paid launch (product/competitors.md).

## 3. Free vs paid: the line and why

| Free (acquisition, trust, SEO) | Paid (decision-grade, personal, maintained) |
|---|---|
| Admissions calculator (existing) | Personalised calendar and plan (T1) with exports and alerts |
| Constraint filter (T2) | Net-minus-rent and ROI comparator with your inputs (T3+T4) |
| Window checker (T5) | School pipeline explorer and dossiers (T7) |
| Rankings decoder (T6) | Career playbooks (calendars, employer lists, rules per family) |
| Myths desk and quiz (T11) | Italy return planner (T9 part 2) |
| Career and country overviews | Offer/deposit helper (T10) |
| The Briefing (trends) | Change alerts (T12) |
| Hypotheses headlines ("half-true" verdicts) | Full hypotheses register with conditions and sources |

**The principle:** charge for things that are personal, time-sensitive or expensive to maintain. Never charge for warnings that prevent harm (visa misconceptions, windows closing). Those build the trust that sells the rest.

**Pricing assumption (untested):** a one-off "decision season" pass (e.g. 6 months, Sept–Feb) fits the cycle better than a monthly subscription, because the purchase is tied to one application and recruiting season. Validate with a fake-door test before building payments.

## 4. Data model (static JSON, client-side, mirrors deadlines.js conventions)

Every record carries `src` (OFF, OFF2, TP, NP, CAL, plus FOI/STAT for statistics offices) and `checked` (YYYY-MM-DD). The site's stale-date banner extends to every file.

| File | Grain | Seeded from | Refresh |
|---|---|---|---|
| `calendar-windows.json` | sector × country × programme type → open/close months, rolling flag | getting-in/recruiting-calendar.md | Quarterly |
| `work-access.json` | country × citizenship × career → status, binding constraint | places/visas-and-work-rights.md, places/countries-and-cities.md, careers-*.md | Every 3 months (visas) |
| `city-econ.json` | city → tax schedule params, expat regimes, rent | money/salaries-and-roi.md | Yearly (Jan) + on law change |
| `costs.json` | programme → tuition EU/non-EU, deposit, living mid-point | money/costs-and-funding.md | Yearly (Sept) |
| `pipelines.json` | school × programme × year → sector/country/employer shares, salary, coverage | employment reports via getting-in/employer-pipelines.md, decisions/programme-choice.md, money/salaries-and-roi.md | Yearly per school |
| `windows.json` | programme or scheme → experience cap, graduation window | decisions/timing-and-sequencing.md, careers-*.md | Yearly |
| `rules.json` | decision rules as condition → recommendation → reason → source file | every file's "Decision rules" | When files update |

**Rules as data.** Every "Decision rules" section in the library is written as "If X and Y, prefer Z (because …)". About 200 rules can be encoded as `{conditions: {...}, recommend: "...", because: "...", file: "...", confidence: "..."}` and shown as "why" notes beside tool outputs, the same way the calculator shows gates and published rules today.

## 5. Maintenance plan (the real cost of the paid tier)

| Cadence | What | Source of truth |
|---|---|---|
| Monthly (Sept–Mar) | Application deadlines; scheme openings; anything in verification/claims-to-verify.md marked urgent | school and employer pages |
| Quarterly | Visa rules (UK, US H-1B, Swiss quotas, NL/DE thresholds); calendar windows; The Briefing | gov portals; evidence/trends.md |
| Yearly | Tuition (Sept), employment reports (as published), FT tables (Sept MiM / June MiF), AlmaLaurea (June), CGE (June), BFS (biennial), tax parameters (Jan) | as listed in each file |
| On event | Law changes (e.g. impatriati recodification, UK Graduate Route), mergers (Mediobanca/MPS), large layoffs | evidence/trends.md |

Each research file's `review_by` date drives this. Visas and the recruiting calendar are the earliest to expire.

## 6. Build order (impact × effort × data readiness)

| Phase | Ship | Why now |
|---|---|---|
| 1 (now – Nov 2026) | T5 window checker; T2 constraint filter; Myths desk; "Start here" decision path; UK Graduate visa 31 Dec 2026 notice | Free, high-trust, data in hand; deadlines are live this season |
| 2 (Dec 2026 – Feb 2027) | T1 personalised calendar (paid) for the 2027–28 cycle; T4 cost calculator; T6 rankings decoder | Ready before the spring internship and round-2/3 season |
| 3 (Mar – Jun 2027) | T3 net-minus-rent ROI (paid); T9 Italy hub + return planner; career playbooks | Offer-decision season |
| 4 (Jun – Sept 2027) | T7 pipeline explorer for the ~70 calculator programmes (paid); T10 offer helper | Employment reports publish; next cycle opens in Sept |
| Later | T12 alerts (needs a backend decision); expand pipelines beyond the calculator's schools | — |

## 7. Risks and guardrails

- **Accuracy.** Every tool shows its sources, its `checked` date and a "this is an estimate" label. Two errors were caught in this library's own spot-check (a mis-read GMAC chart and a mis-attributed figure). Budget for verification on every data refresh.
- **Licensing.** Don't republish FT tables, GMAC charts or paywalled reports wholesale. Store derived flags and short facts with attribution and links.
- **Advice boundaries.** Tax (impatriati, Beckham, 30% ruling) and immigration outputs are informational, not legal or tax advice. Say so, and link the statute or portal.
- **Privacy promise.** Tools T1–T11 can run entirely in the browser. Only T12 (alerts) requires collecting an email. Make that the single, explicit exception.
- **Bias in sources.** Employment reports are school-published, the FT salary is self-reported, and forum data is anecdotal. Keep the tags visible in the UI, as the calculator already does with OFF/TP/NP/CAL.
- **Audience drift.** The library is Europe-first and Italy-weighted, which matches the current audience. Expanding to non-EU readers needs deeper US/Canada/Asia data (thin today; see verification/claims-to-verify.md).

## Hosting and legal constraints found in Round 2 (2026-10-01; see product/competitors.md; not legal advice)

- **GitHub Pages restricts commercial use.** Its documentation says Pages is not allowed as free hosting for "any other website that is primarily directed at either facilitating commercial transactions or providing commercial software as a service (SaaS)" (GitHub Docs, read 2026-10-01). A paid tier therefore needs a separate checkout/hosting provider or a different host for paid features. The free, client-side tools can stay where they are.
- **Static JSON can't be secret.** Anything shipped to the browser can be read, so paid value should be personalisation, freshness and convenience, not locked data.
- **Client-side processing eases ePrivacy duties but not everything.** EDPB Guidelines 2/2023 (v2.0, 7 Oct 2024) say information that never leaves the device is not "access" under ePrivacy Art. 5(3); the burden returns with analytics, accounts, email alerts, payments and uploads (EDPB; consent question for GoatCounter-style analytics is for a lawyer).
- **VAT:** the EU €10,000 OSS threshold applies and OSS registration is optional (Agenzia delle Entrate, Commission pages).
- **Immigration/tax outputs:** keep them general and informational. UK immigration advice relating to a particular individual is regulated (IAA 1999 ss. 82, 84), so avoid "you are eligible" wording.
- **Before launching any paid feature:** lawyer review (consumer law, VAT, privacy notice), per the notice in product/competitors.md.

## Decision rules (for the product team)

1. **If** a tool's output depends on a fact with `review_by` within 90 days, **show** the stale banner and the source link, **because** visas and deadlines change mid-cycle.
2. **If** a feature prevents an irreversible mistake (visa cut-off, closing window, non-refundable deposit), **make** it free, **because** trust drives conversion on the paid tools.
3. **If** a dataset requires per-school yearly collection (pipelines), **launch** it only for programmes already in the calculator, and mark unknowns NP, **because** maintenance cost scales with coverage.
4. **If** a number is chart-read, snippet-only or single-source, **don't** use it as a tool input until it's verified (see verification/claims-to-verify.md), **because** tool outputs look more authoritative than prose.
5. **If** adding alerts requires a backend, **decide** it explicitly against the privacy promise before building, **because** that promise is the site's current differentiator.

## Claims to verify (product assumptions, untested)

1. Willingness to pay for a "decision season" pass and its price point. Needs a fake-door test.
2. Search demand for the myth topics (e.g. "EU citizen UK graduate visa", "laurea magistrale vs master"). Needs keyword research in EN and IT.
3. Whether schools allow structured reuse of employment-report figures with attribution. Needs a check of each report's terms.
4. Whether the existing print/calendar battle plan can be extended to multi-target plans without a backend. Needs a technical spike.
