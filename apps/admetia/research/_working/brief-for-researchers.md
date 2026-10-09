---
title: Shared brief for every research file
last_researched: 2026-09-30
scope: Instructions and house style that every file in /research follows. Internal.
confidence: n/a
review_by: 2027-03-31
---

# Brief: how every file in /research is written

Today is **30 September 2026**. You are writing one file in a research library for "Admetia", a website that currently offers an admissions calculator for pre-experience business master's (Management / MiM, Finance / MiF, Marketing) and MBAs. The site is growing into a master's and career-navigation product. The paid value is **decision-grade knowledge that is hard to find in one place**: trade-offs, timing, employer behaviour and non-obvious insights.

## Reader
A smart 20–25-year-old deciding under uncertainty. Mostly an **Italian or other European (EU citizen) bachelor's student or recent graduate** choosing a pre-experience master's. Secondary readers are non-EU internationals and future MBA applicants. The calculator scores ~70 programmes: UK (LSE, LBS, Imperial, Warwick, Oxford, Cambridge, Manchester), France (HEC, ESSEC, ESCP, EDHEC, emlyon, SKEMA), Italy (Bocconi), Spain (IE, Esade, IESE), Germany (Mannheim, TUM), Switzerland (St. Gallen), NL (RSM), Denmark (CBS), Sweden (SSE), Austria (WU), Portugal (Nova, Católica), and the US (MIT, Princeton, Duke, Michigan, Vanderbilt, WashU, Berkeley MFE). Where an answer differs for EU vs non-EU readers, say so.

## Evidence standard (non-negotiable)
- Every non-obvious claim carries **a source (URL), a date (publication or data year), and one tag**:
  - `[data]`: official statistics, audited or school employment reports, government portals, survey microdata
  - `[employer-stated]`: an employer's own careers page, press release, or an executive quoted on the record
  - `[practitioner consensus]`: multiple independent recruiters, advisors, career-service offices or specialist press agreeing
  - `[anecdotal]`: forums (Reddit, WSO, GMAT Club), single blogs, single testimonials. Signals only; never present as fact.
- Inline format: `claim (Source name, year, URL) [tag]`. A compact footnote style is fine if every claim still maps to a URL.
- **Prefer primary sources**: employer career pages, national statistics offices (ONS, HESA, Destatis, INSEE, BFS/FSO, ISTAT, AlmaLaurea, CBS NL), school employment reports (PDFs), accreditation bodies, government immigration portals, GMAC and CFA Institute reports. **Fetch and read pages in full** with WebFetch. Don't rely on search snippets for numbers. If a number only appears in a snippet and you can't open the page, either mark it `(unverified — snippet only)` or move it to the "Claims to verify" section.
- **Run many separate searches**: one per sub-question, country, employer type or school, not one combined query. Aim for 25–50 searches and 10–25 page fetches per file. Where sources conflict, show both and say which you trust and why.
- **Never invent numbers, sources, URLs or quotes.** If you can't verify something, put it in the file's final "Claims to verify" section, never in the body.
- Label insider insights as non-obvious, but still tag them; never present anecdote as fact.
- Dates matter: markets changed a lot in 2023–26. Flag data older than 2023 as possibly stale.

## File format
Markdown, starting with YAML frontmatter:
```
---
title: ...
last_researched: 2026-09-30
scope: one or two sentences on what this file covers and excludes
confidence: high | medium | low, with a one-clause reason
review_by: YYYY-MM-DD (sooner for fast-moving topics, e.g. visas 3–6 months, salaries 12 months)
---
```
Then, in order:
1. **Bottom line** (5–10 bullets): the ranked, most decision-relevant conclusions.
2. The body: organised by sub-question, with tables where comparison helps (country × metric, employer type × metric). Concrete numbers, named schools and employers, named trade-offs. No filler, no generic advice ("network more") unless made specific (who, when, how, with what conversion evidence).
3. **Hypotheses tested**: at least 3 non-obvious hypotheses you generated yourself (plus any assigned). For each: statement → verdict (supported / partly supported / not supported / insufficient evidence) → under what conditions it holds → where it fails → key evidence with tags.
4. **Common mistakes and myths**: what advisors, recruiters and alumni say students get wrong, tagged.
5. **Decision rules**: 6–15 rules in "If X and Y, prefer Z (because …)" form, specific enough to become a tool or calculator rule.
6. **Claims to verify**: numbered list of things you found but couldn't confirm from a primary source, each with where you saw it.
7. **Sources**: the full list of URLs used, with titles and dates.

Target length: 2,500–6,000 words. Depth beats breadth. Write in plain, concrete British English, and avoid long em-dash-heavy sentences.

## Boundaries
- Write **only** your assigned file in `/Users/alessandro/Documents/Vibe Coding Projects/admetia/research/`. Don't create, modify or delete any other file in the repo.
- Other researchers are writing the other files at the same time (list below). Stay in your lane: cover your topic in depth and point to sibling files for the rest ("see places/visas-and-work-rights.md") rather than duplicating them.

## Sibling files being written in parallel
decisions/programme-choice.md · decisions/school-types-and-accreditation.md · places/countries-and-cities.md · places/visas-and-work-rights.md · money/costs-and-funding.md · money/salaries-and-roi.md · getting-in/employer-pipelines.md · careers/finance.md · careers/consulting.md · careers/accounting-and-corporate.md · careers/marketing.md · careers/tech-business-and-startups.md · getting-in/recruiting-calendar.md · getting-in/admissions.md · decisions/timing-and-sequencing.md · getting-in/breaking-in.md · places/italy-playbook.md
Synthesis files written later by the lead: decisions/decision-framework.md, evidence/trends.md, evidence/hypotheses.md, product/product-map.md, verification/claims-to-verify.md.

## When you finish
Reply with: (a) the file path, (b) the 5 most important findings, (c) the 3 claims you are least sure of, (d) the 5 most important source URLs you actually fetched and read in full. The lead will spot-check those.

---

# ADDENDUM — Round 2 (2026-10-01): broadening the library

Round 2 researches topics a parallel library (Gemini, folder `/Users/alessandro/Documents/Vibe Coding Projects/admetia Gemini/research/`) proposed. You may read the matching Gemini file for **leads only**. A spot-check of 20 of its claims found 6 correct, 7 outdated/contradicted/misstated and 6 with no traceable source, so **never copy a number, source or sentence from it**. Every figure must be re-found and read on a primary source by you. Treat its figures as hypotheses to confirm or refute, and say when it was wrong.

## Lessons from round 1 (the lead found these mistakes; don't repeat them)
1. **Save early.** Within your first ~10 tool calls, write the file skeleton with frontmatter and every section header, then fill and re-save after each section. Agents were interrupted by usage limits three times, and only saved work survived. Never leave "(in progress)" markers in the final version.
2. **Chart-read figures.** In PDFs the text layer of a bar chart can list rows in the reverse order of the labels, which mis-mapped a GMAC table. If you read numbers off a chart, cross-check them against a figure stated in the prose, and label the figure "chart-read".
3. **Secondary summaries drift.** A "91%" turned out to be 90.5% in the primary report. When a secondary page quotes a statistic, find the primary document. If you can't, label it "(unverified, secondary)" and put it in Claims to verify, not in the bottom line.
4. **Attribute carefully.** Check which article, year and edition each figure comes from.
5. **Outdated rules.** Visa fees, salary thresholds and tax regimes changed in 2024–26. Read the official page on the day, and give its update date.
6. **Search tools.** Use WebSearch for discovery (about 20–30 searches) and WebFetch for reading. If WebSearch is capped or WebFetch is blocked, fetch primary URLs with `curl -sL -A "Mozilla/5.0"` and extract PDF text with `pypdf` (`python3 -c "import pypdf"`). Never fetch search-engine result pages. Use your own scratchpad subfolder (name it after your file) for helper scripts, since agents share the scratchpad.
7. **Tone.** Describe what employers and schools publish accurately and with dates. Don't call anything a "lie" or "fraud" unless a regulator or court has.
8. **Anchor to the audience.** European (often Italian) pre-experience business students. Say where the answer differs for non-EU readers.

## Facts already verified in the library (cite them instead of re-researching)
- ISE 2025: 140 applications per graduate vacancy; 290 in retail/FMCG/tourism; graduate vacancies −8%, apprentice +8% (ise.org.uk top-10 stats, 8 Dec 2025).
- CGE 2026 (grandes écoles): net employment at 6 months 76% (90.5% in 2023); 42.3% of hires via final internship or apprenticeship; response rates 62.4% / 44.1% / 36.6% by cohort.
- Stanford "Canaries" (rev. Aug 2026): 22–25-year-olds in AI-exposed occupations ~19% below trend.
- GMAC Corporate Recruiters Survey 2026: one in three employers replacing some entry-level roles with AI.
- UK Graduate visa: £937 fee + £1,035/yr IHS; 24 months if applied by 31 Dec 2026, 18 months from 1 Jan 2027. Skilled Worker £41,700 / £33,400 new entrant. HPI list includes TUM, ETH, PSL, Amsterdam, MIT, Princeton, Duke, WashU, Vanderbilt, Michigan; excludes HEC, Bocconi, St Gallen, ESSEC, LBS.
- Swiss third-country quota 2026: 8,500 (4,500 B + 4,000 L); UK nationals separate 3,500.
- BFS: Swiss university economics master's median CHF 87,100 (one year out); FH bachelor's CHF 80,300 vs university master's CHF 80,900. LBS MiM 2025 UK mean base £44,675 (2024 report); LBS MiM 2025 overall mean base £41,229; tech £36,231; consulting £44,571.
- Goldman 2026: ~2,500 interns, <1% acceptance, ~2,500 entry hires.
- German §16b AufenthG: 140 working days; France foreign students 964 h/yr; apprenticeship exemption (service-public F2728).
- Italy: AlmaLaurea 2025 pay at 5 years ≈ €2,900 abroad vs ≈ €1,800 in Italy; impatriati regime now art. 225 D.Lgs. 117/2026.

## Round-2 sibling files (being written in parallel)
careers/healthcare-and-pharma.md · careers/commodities-and-energy.md · careers/industrial-automotive-defence.md · careers/luxury-and-fashion.md · decisions/long-horizon-careers.md · places/gulf-and-central-eastern-europe.md · careers/tech-data-and-ai.md · decisions/mba-and-career-switchers.md · places/origin-countries-eu.md · places/origin-countries-non-eu.md · places/beyond-europe.md · money/scholarships.md · getting-in/applications-and-interviews.md · evidence/ranking-methodologies.md · evidence/base-rates-and-failure-modes.md · product/competitors.md · careers/public-policy-and-academia.md
Round-1 files remain: program-choice, school-types-rankings-accreditation, countries-and-cities, visas-and-work-rights, costs-and-funding, salaries-and-roi, employer-pipelines, careers-finance, careers-consulting, careers-accounting-corporate, careers-marketing, careers-tech-startups, recruiting-calendar, admissions-and-applications, timing-and-sequencing, breaking-in, italy-playbook, plus synthesis (decision-framework, hypotheses, trends, product-map, claims-to-verify, how-numbers-mislead, should-you-do-a-masters, student-logistics).

## Extra requirements for round 2
- Add a **"What this changes in the site"** section (3–6 bullets): tools, pages or warnings that follow from your findings.
- Where Gemini's lead was **wrong or outdated**, say so in a short "Corrections to the Gemini leads" list (or "none").
- Add a **"Numbers to treat with care"** section: figures in your file that are single-source, chart-read, self-reported or from secondary summaries, so the site can label them.
- Target 3,500–6,500 words. Depth beats length.
