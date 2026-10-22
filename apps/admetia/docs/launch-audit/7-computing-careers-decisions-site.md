# Agent 7: Computing calculator, careers, decisions, evidence, glossary and the site as a whole

Audit date: 5 October 2026. Read-only. Files read in full or in the relevant sections: data/computing-model.js, data/computing-evidence.js (header and records), js/score-computing.js (gates), js/page-computing.js (evidence and results), computing.html, it.html, index.html, map.html, 404.html, README.md, tools/build.js, .github/workflows/pages.yml, js/results-kit.js, js/i18n-it.js (stale notice), research/glossary.md, research/it/README.md, research/careers/tech-data-and-ai.md (all of it), the "Reality" sections of the other careers files, the headings and bottom lines of all 7 decisions and 6 evidence files, research/product/product-map.md and competitors.md, docs/GAP-ANALYSIS.md, research/verification/claims-to-verify.md §2–5, freshness-register.md, and round-6a-external-audit.md. I ran `npm test` (all 11 suites pass) and `node tools/i18n-report.js`. The live site (iaconoalessandro.github.io/admetia/) and the public GitHub repo were checked with curl and `gh`.

## Executive summary

1. **The README's "LEGAL NOTICE" joke is already public.** It is committed to the PUBLIC repo github.com/iaconoalessandro/admetia and is the first thing anyone sees there. It names Dario Amodei, says Claude "would pick war targets" and that the code "almost certainly" scraped proprietary material. It is not shipped in `_site/`, but the live URL leads straight to the repo. That is a real reputational and legal risk at launch. Students on the site also see profanity: the stale-deadline banner reads "The developer should move their ass", and the Italian version says "muovere il culo" (js/results-kit.js:173, js/i18n-it.js:355). That banner starts firing on about 21 January 2027.
2. **The build publishes internal files.** `tools/build.js` copies everything not in SKIP, and SKIP does not list `research/`, `graphify-out/` (11 MB) or `CLAUDE.md`. The research library, including product/competitors.md ("product team only", pricing and monetisation plans), _working/ and verification/, would go live the moment `research/` is committed. If it is not committed, every Atlas "Briefs in the research library" link 404s. Today research/glossary.md returns 404 on the live site.
3. **The Manchester computing record is wrong in four ways.** The official 2027 page says First-class (70%), IELTS 7.0 with 6.5 per component, four staged deadlines (Stage 1 closes **6 Nov 2026**) and £41,400 for international students. The model has a 2:1 gate, a C1 (6.5) English gate and a "rolling" regime. It also calls the course "Alliance Manchester", which is the business school, not the Department of Computer Science.
4. **The computing calculator is UK-centric and has no Italian programmes, on a site built for Italians.** It has 26 programmes: 16 UK, 6 continental, 4 US. Nothing from Italy, France, Spain, Denmark, Finland, Belgium, Austria or Ireland. The Italian grade converter feeds a list with no Polimi, Bocconi, Sapienza, PoliTo, Pisa or Bologna, and Polimi's first LM call for 2027/28 is open now. There are no cybersecurity, HCI, robotics, quantum, bioinformatics, information-systems, online or part-time programmes. OMSCS and Imperial online are excluded by design.
5. **The computing calculator shows no fees, visas or ATAS.** EU students pay overseas fees in the UK: Imperial Advanced Computing is £48,300 against £25,850 for home students, and Manchester is £41,400. ETH and EPFL now charge foreigners CHF 2,190 a semester. TUM charges non-EU students €4,000–6,000 a semester. None of this appears. ATAS (required for UK CS and AI master's for most non-EEA nationals: CAH11-01-01 to -05) appears nowhere in the site or the library.
6. **Several careers files contain unsourced "Reality Check" sections in an LLM voice.** They break the library's own rule that every figure is tagged and sourced, and they assert numbers with no source: "0% direct hiring rate" at AI labs, SA pay "£65k–£95k London", sports pay "£28,000–£36,000", "50–65% below 2021 peaks", "1–3 PE analyst seats a year across Europe". They are in tech-data-and-ai.md §3a.1, tech-business-and-startups.md §2 and §3, economic-consulting…md §4.1 and §5, consulting.md "Macro Realities" and finance.md "PE Reality Check".
7. **For computing students the research library barely exists.** research/it/ is the *Italian* edition of three business files, not IT research. Only careers/tech-data-and-ai.md covers computing. There is nothing on computing admissions (SOPs, LORs, GRE), fees, CS rankings, interview preparation (LeetCode, system design, OAs), the Italian IT job market beyond Bending Spoons, or cybersecurity and semiconductor careers. The decision framework's cross-career table has no software, data or AI row.
8. **The glossary misses about 40 basics a student will look up.** These include the UK degree classes (First/2:1/2:2) that drive every computing gate, Conversion MSc, ATAS, CAS, eVisa, uni-assist/VPD, APS, Diploma Supplement, dichiarazione di valore/CIMEA, apostille, Erasmus+/Erasmus Mundus/EIT Digital, numerus clausus, valore legale, Chancenkarte, F-1/I-20/SEVIS, SOP/LOR and GRE. It also says the impatriati regime is "now" in art. 225 D.Lgs. 117/2026, which contradicts the freshness register (that article applies only from 1 Jan 2027).
9. **Whole decision topics are missing.** Disability, first-generation students, LGBTQ+ safety by country (GAP-ANALYSIS G17, still open), women in finance and tech, housing search and scams, mental health support, online vs on-campus, and entrepreneur and startup visas have 0 dedicated coverage. Freelancing (partita IVA forfettario, IR35) and family business have 0 hits.
10. **The site has no about, methodology, privacy, contact, corrections or FAQ page.** The library promises a "Dated corrections log, public" (evidence/how-numbers-mislead.md Part G), and nothing on the site delivers it. The homepage body never mentions the Atlas or the library and still calls the site "built for personal use". The footer says visits "are counted" while `COUNTER = ''`.

The report is ordered by severity below; section 6 gives the top 10 for the next four weeks.

---

## 1. CRITICAL: wrong or dangerously misleading

### 1.1 README "LEGAL NOTICE" is public, and profanity is shown to students
- **README.md:3–11** (committed; `git show HEAD:README.md` shows it). The repo is **PUBLIC** (`gh repo view` → visibility PUBLIC). The live site at iaconoalessandro.github.io/admetia/ leads anyone curious straight to the repo.
- What it says includes: "pharmaceutical-grade vibe-engineered trash"; "Did Claude scrape your entire proprietary backend… Almost certainly"; Dario Amodei named; "Claude would pick war targets without hesitation if the prompt were polite enough"; "Please direct all subpoenas… straight to Anthropic's legal department".
- **Why it is critical at launch:**
  - It is a written admission that the code may contain infringing material. That undermines the "Every number sourced" trust pitch on index.html.
  - It names a real person in a derogatory way.
  - Any journalist, university or school admissions office that checks the source sees it first.
  - Remove it from README.md (and from git history if you want it gone, since the repo is public). Replace it with a one-line authorship and AI-assistance statement.
- **Shown on the live site, to students, in both languages:**
  - js/results-kit.js:173: "The developer should move their ass and update the dates."
  - js/i18n-it.js:355: "Lo sviluppatore dovrebbe muovere il culo e aggiornare le date."
  - It fires once the oldest `checked` in data/deadlines.js (2026-09-23, line 321) is over 120 days old, so from about **21 January 2027**, in the middle of R2/R3 season. Rewrite it as "These dates were last checked on {date}; confirm on the school's page."
- Smaller reputational item: the edition picker names a theme "FBI Watchlist". It is harmless as a joke, but on a site about visas and immigration a reader can misread it. Consider renaming.

### 1.2 The build will publish internal research, the graph and CLAUDE.md, or the Atlas links will 404
- **tools/build.js:40–42.** SKIP = .git, .github, .claude, node_modules, _site, .DS_Store, .venv, .gitignore, package*.json, tests, tools, design, docs and README.md. `copyTree(ROOT, OUT)` (line 94) copies everything else. Your local `_site/` already contains `research/` and `graphify-out/`.
- research/, graphify-out/ and CLAUDE.md are untracked today. Once committed, the Pages workflow publishes:
  - research/product/competitors.md, titled "Competitors, pricing, legal and platform research (product team only)", with price ladders and paid-tier plans
  - research/product/product-map.md (free vs paid strategy)
  - research/_working/*, the brief for researchers and progress logs
  - research/verification/* (round logs, the external audit)
  - an 11 MB graphify-out/ including graph.json
- If they are not committed, js/page-map.js:1210 links every country page to `research/<brief>.md`, and those links 404. Live check: `research/glossary.md` returns 404.
- Even when published, the links serve **raw Markdown**, not a rendered page. js/page-map.js:1223 also shows students "Verification log: P12 in research/verification/claims-to-verify.md", which is internal jargon.
- **Fix:**
  - Add `graphify-out`, `CLAUDE.md`, `research/_working`, `research/verification` and `research/product` to SKIP.
  - Either render the student-facing briefs as HTML pages or drop the links before launch.

### 1.3 Manchester MSc Advanced Computer Science: wrong gates, wrong regime, wrong school name
Location: **data/computing-model.js:670–684**.

| Field | Model says | Official page, 2027 entry (manchester.ac.uk/study/masters/courses/list/21573/msc-advanced-computer-science/all-content/) |
|---|---|---|
| Name | "Alliance Manchester — MSc Advanced Computer Science" | Run by the **Department of Computer Science**, School of Engineering. Alliance MBS is the business school |
| Degree gate | `minDegreeClass '2:1'` | "First-class honours degree (70% average)… in a Computer Science degree with a minimum of 50% Computer Science content" |
| English | `minEnglish 'C1'` (IELTS 6.5) | IELTS 7.0 with no sub-test below 6.5; TOEFL 100 (min 22) → should be `C1H` |
| Regime | `C` (rolling until full) | Four staged deadlines: **6 Nov 2026**, 1 Jan 2027, 26 Feb 2027, 21 May 2027 → regime B |
| Fees | absent | UK £17,600; international £41,400 |

- Effect: a student with a 2:1 or IELTS 6.5 is told they are eligible. The first stage closes about the week of launch.
- data/deadlines.js and the Admissions Index ticker should be checked for the same record.

### 1.4 Unsourced "Reality Check" content in careers files breaks the library's evidence standard
These sections use a different voice (bold headings, "The Winning Strategy", "vanishingly small", "non-negotiable"). They carry specific numbers with **no source and no tag**, against _working/brief-for-researchers.md and evidence/how-numbers-mislead.md Part G ("Every outcome figure shows… source, plus one evidence tag"). round-6a-external-audit.md lists "solutions engineering, restructuring, sports and gaming" as *left open*, so these sections were apparently added without the verification pass.

| File:line | Unsourced claim | Problem |
|---|---|---|
| careers/tech-data-and-ai.md:103–112 (§3a.1 "Frontier AI Labs") | Research scientists need a PhD "from an elite institution"; an MSc without top-venue papers has "an effective **0% direct hiring rate**"; core SWE needs "Kubernetes at petabyte scale" and "very rarely hires fresh new graduates" | Invented statistic. No posting is cited, unlike every other row in the same file. Labs run documented non-PhD routes: Anthropic Fellows, OpenAI Residency, Google DeepMind student researcher and research engineer roles at MSc level. Delete or source it |
| careers/tech-business-and-startups.md:60–66 | "Entry-level business and non-engineering headcount remains 50–65% below 2021 peaks"; Google, Meta and Apple use "automated turnstile badge-swipe monitoring linked directly to… termination"; "Death of Geographic Arbitrage… non-negotiable" | No source; overstated. Amazon's 5-day office rule (effective 2 Jan 2025) is real but is written as "January 2025/2026" |
| careers/tech-business-and-startups.md:68–72 | OpenAI and Anthropic "list zero campus graduate programmes"; GTM needs "5 to 8+ years" | No source, no date of board read |
| careers/tech-business-and-startups.md:98–110 | APM classes "often 15–30 globally"; Solutions Architect early-career TC "£65k–£95k in London, €75k–€110k in Germany/Netherlands" | No source; pay band presented as fact |
| careers/economic-consulting-real-estate-and-sustainability.md:223–240 | Sports pay "£28,000–£36,000 base vs £45,000–£60,000"; "30% to 50% below corporate norms"; senior sports roles "almost never promoted" internally | No source |
| careers/economic-consulting-…md:176ff (§4.1 ESG "bubble") | ASCII box with Omnibus thresholds and "~50,000" companies cut | Mixes a verifiable legal fact with unsourced estimates |
| careers/consulting.md:61–65 ("Macro Realities") | Bain "$30,000–$40,000 stipends", McKinsey "~45,100 to ~40,000", "counselled to leave" | Contradicts the sourced timeline directly below it (line 72 marks the Bain figure "unverified, snippet only") |
| careers/finance.md:119–135 ("PE Reality Check") | Mega-fund analyst seats "1–3 per year across Europe"; post-MBA PE "almost exclusively restricted" | No source |

**Fix before launch:** tag each sentence [practitioner consensus] or [anecdotal] with a source, or remove it. These read as the most authoritative parts of the files and are the least supported.

### 1.5 it.html over-promises FOI data the calculator does not have
- **it.html:140–144:** "in the UK their real acceptance rates are obtainable under Freedom of Information. So this track leads with the rules…"
- In data/computing-model.js, no school carries an FOI-tagged figure. Every UK "Acceptance rate" fact is `NP`, or `TP` for Oxford. Imperial (line 554) even says the FOI disclosures "could not be retrieved automatically".
- Either obtain FOI figures (WhatDoTheyKnow, or direct requests to Imperial, UCL and Edinburgh, which take 20 working days) or remove the sentence.

### 1.6 The "5 years of calibrated applicant outcomes" claim overstates what the data is
- README.md "Calibrated Admissions Data: Incorporates 5 years of pooled applicant outcomes and acceptance distributions".
- data/computing-evidence.js: Oxford n=54, Cambridge n=33, Imperial n=23, UCL n=23, Edinburgh n=23. The UCL figure is copied onto both UCL programmes and the Imperial figure onto three, because the data is per institution. `gpa` is null for every school below 40 reports.
- js/page-computing.js:527–531 shows "the middle of them around 2022-03-07". A median *calendar date across five cycles* tells a student nothing. They need "decisions typically arrive in Feb–Mar of the cycle", i.e. a month-of-cycle distribution.
- **Legal note (not legal advice):** GradCafe's terms (thegradcafe.com/terms, read 5 Oct 2026) forbid users to "create derivative works from… any of the Material". Publishing aggregates on a site with planned paid tiers (product/product-map.md) needs a deliberate decision, and research/product/competitors.md §5 does not address the terms on reuse.

### 1.7 Glossary errors and stale entries
- **research/glossary.md:95.** "Impatriati regime (Italy)… **now** in art. 225 of D.Lgs. 117/2026". The library's own freshness-register.md rows 16 and 62 say art. 5 D.Lgs. 209/2023 is operative until **31 Dec 2026** and art. 225 applies from **1 Jan 2027**. A student moving in 2026 would cite the wrong law. Fix to "art. 5 D.Lgs. 209/2023 (re-enacted as art. 225 D.Lgs. 117/2026 from 1 Jan 2027)".
- **research/glossary.md:86.** "H-1B: an employer-sponsored work visa allocated by lottery." The library itself (careers/tech-data-and-ai.md:261; freshness register rows 60–61) says the FY2027 selection is wage-level weighted and covers the US$100,000 proclamation and the proposed fee. The glossary entry is the one students will read. Update it.
- **research/glossary.md:29.** "Bologna process: the European 3+2 degree structure". Too thin and partly wrong: many systems are 4+1 or 3+1 (UK, Ireland, Spain's grados, Netherlands HBO). It omits ECTS and the Diploma Supplement, which are exactly what decide master's eligibility gates.

### 1.8 Time-sensitive blocks that will be expired on launch day
- **research/decisions/decision-framework.md:25–31.** "Time-sensitive (as of 1 October 2026)":
  - HEC R1 7 Oct
  - Bocconi 29 Oct / 2 Nov
  - BofA London IB closes 11 Oct
- claims-to-verify.md §3 S6 calls this "Fixed", but every date will be past in about four weeks. The same pattern appears in money/scholarships.md:18 (Chevening closes 6 Oct 2026). Replace these with a pointer to data/deadlines.js, or re-date them weekly.

---

## 2. MISSING basics a student will ask about

### 2.1 Computing calculator: programmes a European student expects (none are in the model)
Current list (data/computing-model.js:504–971): 16 UK, ETH, EPFL, TU Delft, TUM, KTH ML, UvA AI, Stanford, CMU MSCS, CMU MSML and Berkeley MEng. EXCLUDED (lines 974–1006) names only OMSCS, RWTH, Saarland, DTU, Aalto and MIT.

**Italy (zero programmes, on a site whose core reader is Italian):**

| Institution | Programmes to add |
|---|---|
| Politecnico di Milano | LM Computer Science and Engineering (English). About €3,900 a year at the top band. Calls for foreign-degree holders open Sept–Nov and Jan–Mar. The page: polimi.it/en/international-prospective-students |
| Bocconi | MSc Artificial Intelligence; MSc Data Science and Business Analytics; MSc Cyber Risk Strategy and Governance (with Polimi) |
| Sapienza | Engineering in Computer Science; Artificial Intelligence and Robotics; Cybersecurity; Data Science |
| Politecnico di Torino | Computer Engineering; Data Science and Engineering; Cybersecurity |
| Others | Bologna LM Artificial Intelligence; Pisa LM Computer Science and AI & Data Engineering; Sant'Anna/Pisa joint; Padova Computer Engineering and Data Science; Milano-Bicocca Data Science; Trento |

Italian LMs gate on CFU in named SSDs (INF/01, ING-INF/05, MAT/*). That is a perfect fit for the existing `minCsEcts` and `minMathsEcts` gates.

**Continental Europe (missing):**
- **France:** ENS Ulm/Paris-Saclay MPRI; MVA (ENS Paris-Saclay); IP Paris (Polytechnique) MSc&T and M2 programmes; Sorbonne Université M2 Informatique; Grenoble MoSIG; EURECOM.
- **Germany:** RWTH Aachen; KIT; TU Berlin; LMU; TU Darmstadt; Saarland (MPI-linked); Stuttgart.
- **Denmark:** DTU; Copenhagen (DIKU); ITU Copenhagen.
- **Finland:** Aalto.
- **Sweden:** Chalmers; KTH beyond ML (Computer Science; Systems, Control and Robotics).
- **Netherlands:** TU/e; Leiden; VU Amsterdam; Utrecht.
- **Belgium:** KU Leuven (MSc Computer Science, Artificial Intelligence).
- **Austria:** TU Wien.
- **Spain:** UPC (FIB MIRI, MAI).
- **Central and Eastern Europe:** Charles (Prague); Warsaw (MIMUW).
- **Ireland:** TCD; UCD (MSc CS conversion, already named in careers/tech-data-and-ai.md:205).
- **Joint degrees:** Erasmus Mundus Joint Masters (e.g. EMJM in cybersecurity and data science); **EIT Digital Master School** (two universities, two countries; a major route for European CS students).

**UK (missing):** UCL MSc Computer Science (non-conversion), Machine Learning and HCI; Imperial MSc Computing (Security and Reliability; Visual Computing); Oxford MSc Mathematics and Foundations of CS; Cambridge MPhil in Machine Learning and Machine Intelligence (Engineering); Edinburgh MSc Data Science and Cyber Security; Bristol, Bath and Durham (CS and conversion); Birmingham; Leeds; Sheffield; Nottingham; QMUL; Lancaster (cyber); Royal Holloway MSc Information Security.

**US and Canada (Europe-origin routes are in scope):**
- **US:** Georgia Tech MSCS (on campus); UIUC MCS; Columbia MS CS; Cornell MEng; Princeton MSE; Penn MSE CIS; UW Seattle; UCSD; NYU Courant; USC; Michigan; Harvard SM/ME CSE.
- **Canada:** Toronto MScAC; Waterloo MMath; UBC MDS; McGill.

**Programme types missing entirely:**
- Cybersecurity
- HCI
- Robotics (ETH Robotics, Systems and Control; TUM Robotics, Cognition, Intelligence; KTH)
- Quantum (ETH Quantum Engineering; TUM Quantum Science and Technology)
- Bioinformatics and computational biology
- Business informatics and information systems (Mannheim Wirtschaftsinformatik; WU Vienna; LSE MSc MISDI)
- Online and part-time:
  - Georgia Tech OMSCS, about US$7,000 in total
  - UT Austin MSCSO
  - UIUC MCS online
  - Imperial online MSc Machine Learning and Data Science
  - University of London online MSc

  EXCLUDED line 977 dismisses OMSCS because "admission is close to open". Students still need a page that compares online with on-campus on price, visas (none), recognition and employer view.

### 2.2 Computing calculator: missing basic facts for every programme
- **Tuition and fee status.**
  - EU students are "overseas" in the UK:
    - Imperial Advanced Computing: £48,300 overseas vs £25,850 home (imperial.ac.uk course page, 2027 entry)
    - Manchester ACS: £41,400 vs £17,600
  - ETH and EPFL: CHF 2,190 a semester for foreigners who move to study, CHF 730 otherwise (ethz.ch/students/en/studies/financial/studiengebuehren.html; ETH Board decision effective autumn 2025)
  - TUM: €4,000–6,000 a semester for non-EU students, plus a €97 semester fee
  - KTH, Delft, UvA: non-EU fees are large; EU students pay statutory fees
  - US: Stanford and CMU fees are above US$60,000 a year
  - research/money/costs-and-funding.md:14 says "UK business MSc fees are flat". That is **not true for computing**, and a student generalising from it would be badly misled.
- **Visa and ATAS.**
  - ATAS is required for UK master's in CAH11-01-01 Computer Science, -02 IT, -03 Information Systems, -04 Software Engineering and -05 Artificial Intelligence, for nationals outside the exempt list: EU/EEA, Switzerland, Australia, Canada, Japan, New Zealand, Singapore, South Korea, US (gov.uk/guidance/immigration-rules/immigration-rules-appendix-atas-academic-technology-approval-scheme-atas).
  - Processing takes about 20 working days, longer in peak season, and must happen before the CAS.
  - This hits the library's own Indian, Chinese, Nigerian and Turkish readers (places/origin-countries-non-eu.md). There are 0 hits for "ATAS" in the whole research library.
- **Deadlines** for the 26 programmes. They are in data/deadlines.js for some, but the computing facts mostly omit them. Manchester's Stage 1 (6 Nov 2026) and CMU early (18 Nov 2026, US$80 fee rising to US$100) are imminent.
- **Application documents** per programme: number of LORs, SOP length, GRE policy, portfolio or GitHub, interview. The Stanford, CMU and Berkeley entries have them; the UK and European entries mostly do not.
- **German process:** uni-assist vs direct application, VPD for non-German degrees, the APS certificate for Chinese, Indian and Vietnamese applicants, and TUM's EIGNUNGSFESTSTELLUNG with its documents and timeline. There are 0 hits for uni-assist or VPD in the library.
- **"What happens after":** careers/tech-data-and-ai.md "What this changes in the site" (lines ~360–370) recommends a "master's pays?" panel, a visa line per programme, a quant note and an "AI and junior hiring" box. **None is implemented.** A grep of js/page-computing.js for visa, fee or salary finds nothing.

### 2.3 Careers: missing for computing students
- **Technical interview preparation.** 0 hits for LeetCode, "coding interview" or "system design". This is the single most asked question by CS master's students. It needs:
  - OA platforms (HackerRank, CodeSignal), take-homes, system design for new grads
  - how quant firms test (mental maths: Optiver's 80-in-8, Zetamac)
  - Imperial and UCL careers-service guides as sources
- **The Italian IT job market.** The file's only Italian employer is Bending Spoons (EUR 63,965 junior). That is an extreme outlier, and the file admits about 50,000 applications in nine months.
  - Missing: Reply, Accenture Italia, Engineering Ingegneria Informatica, NTT Data Italia, Capgemini, Deloitte Digital, banks' IT departments (Intesa, UniCredit), Leonardo, STMicroelectronics, Satispay, Scalapay.
  - Missing: typical RAL for a new LM graduate (roughly €28–35k; needs an AlmaLaurea or JobPricing source), and the "body rental / consulenza" structure.
  - AlmaLaurea LM-32 (Ingegneria informatica) and LM-18 (Informatica) one-year outcomes are missing, although evidence/base-rates-and-failure-modes.md §5.1 already uses the 2026 AlmaLaurea report.
- **Cybersecurity careers.** 0 dedicated coverage: ENISA skills framework (ECSF), SOC analyst entry, certifications (OSCP, CompTIA Security+), clearance rules (overlap with careers/industrial-automotive-defence.md §Security clearance), and employers (Leonardo, Thales, Airbus Defence and Space, NCC Group, banks).
- **Semiconductors and hardware.** 0 hits: ASML (Veldhoven), NXP (Eindhoven), Infineon (Munich, Dresden), STMicroelectronics (Agrate, Catania, Grenoble), GlobalFoundries Dresden, ESMC/TSMC Dresden, Arm (Cambridge), Graphcore. This is a European growth area under the EU Chips Act.
- **Embedded and automotive software:** Bosch, Continental, CARIAD, Ferrari, Stellantis software. Only touched in the industrial file.
- **Gaming as an engineering career.** The only coverage is the unsourced business-roles section (1.4). Missing: CD Projekt (Warsaw), Ubisoft (Paris, Milan), Supercell, King (Stockholm, Barcelona), Rovio, Paradox, Remedy, Rockstar North.
- **Freelancing and contracting.** 0 hits: Italy partita IVA regime forfettario (15%, 5% for the first 5 years, €85,000 ceiling), UK IR35, the German Scheinselbständigkeit risk, and EOR/remote contracts (Deel, Remote).
- **Remote work for a foreign employer:** tax residence, A1 certificate, Italian employer-of-record. It is mentioned only in passing in 2 files, and then via the unsourced "Death of Geographic Arbitrage" line.
- **Entrepreneur and startup visas.** 0 hits for Italia Startup Visa, French Tech Visa / Passeport Talent, Dutch startup visa, German §21 AufenthG, Irish STEP, Estonian startup visa, and the UK Innovator Founder (mentioned only in long-horizon-careers.md). Also missing: the EU "Erasmus for Young Entrepreneurs" programme.
- **Family business** (common for Italian readers): 0 hits.
- **Public-sector IT and research engineering:** CERN Fellowship and Graduate Engineering Training (Geneva), ESA YGT, EUMETSAT, ECMWF (Bologna/Reading), JRC (Ispra). These are EU-citizen-friendly, salaried, and strongly suited to CS graduates. CERN and ESA are not mentioned as computing routes.
- **PhD as a paid job in Europe.** careers/public-policy-and-academia.md covers academia, but the computing angle is missing:
  - In DE, NL, CH, DK and SE the PhD is a salaried contract (e.g. ETH doctoral salary of about CHF 50–56k).
  - ELLIS PhD programme, Max Planck IMPRS, CDTs in the UK.
  - This is the actual alternative to a taught MSc for the strongest applicants.
- **Covered adequately (not missing):** AI and junior hiring data (SignalFire 2026, Indeed Jul 2026, Stanford Canaries rev. Aug 2026, Bitkom Sep 2026); EPSO and Blue Book; JPO and YPP; the CFA, ACCA and Big 4 ladder; MBB vs tier 2; internship conversion (Trackr, ISE); startups and equity. These are good. The weakness is the unsourced inserts.

### 2.4 Decisions: missing topics
Coverage found by grep across research/:

| Topic | Coverage | What is needed / where |
|---|---|---|
| Students with disabilities | **0** (only in product/competitors.md) | UK DSA is for home students only; reasonable adjustments; extra time on GMAT, GRE and IELTS (ETS and GMAC accommodation processes); Italian L.17/1999 and L.170/2010 (DSA certification) and university disability services; ETH and TUM disability offices. New decisions/ file or a section in getting-in/admissions.md |
| First-generation students | **0** | Sutton Trust is used in base-rates §7.2, but there is no guidance: cost of applications, hidden curriculum, fee waivers (GMAT fee waiver, application-fee waivers at UK and US schools), ISEE-based waivers |
| LGBTQ+ legal safety by destination | **0** (GAP-ANALYSIS G17, still open) | ILGA-Europe Rainbow Map 2026 and the ILGA World database for the Gulf, Russia, Malaysia, Turkey, Hungary, Poland and Italy. Add one line per Atlas country with an official or treaty-body source |
| Women in finance and tech | Mentions only | UK FCA/HMT Women in Finance Charter data; gender pay gap reports (UK statutory, from banks and consultancies); women-targeted programmes (Morgan Stanley Step In Step Up, Goldman Women's Possibilities Summit) and scholarships (Forté for MBA, Women in Tech scholarships at Imperial and UCL) |
| Mental health and burnout | long-horizon-careers.md §2 covers hours | Student-side support (university counselling, Italian SSN access for EU students, UK GP registration under IHS), and "what if I fail a module or semester" (resits, compensation rules, visa consequences of withdrawing) |
| Housing search and scams | **0** (GAP-ANALYSIS G10, open) | Deposit scams (pay-before-viewing), official accommodation offices (ETH and UZH WOKO, Munich Studierendenwerk waiting lists, Milan's Polimi and Bocconi residences), "Wohnungsgeberbestätigung" needed for Anmeldung, UK guarantor services (Housing Hand) for international students |
| Online vs on-campus | 0 dedicated | Price (OMSCS about US$7,000 vs Imperial £48,300), visa (none), employer view, part-time while working |
| Rankings literacy for computing | FT business only | CSRankings (research output), QS and THE CS subject tables, why rankings do not track MSc teaching; logged as "True (opinion)" in round-6a and not acted on |
| Master's vs job first (computing) | tech-data-and-ai.md §3c only | A decisions-level summary, and a cross-career row for software, data, AI and quant in decisions/decision-framework.md:51–68 (no SWE row today) |
| Partner and family moves | Shallow (GAP-ANALYSIS G14) | Can a spouse work? (UK Student dependants are banned for taught master's since Jan 2024; Germany §32; NL) |
| Part-time work while studying | places/student-logistics.md (work-hour limits) | Fine; link it from the computing pages |
| Second master's, gap year, MBA timing, cost vs ROI | Covered (decisions/timing-and-sequencing.md, mba-and-career-switchers.md, should-you-do-a-masters.md) | Business-only. Add the "MSc then PhD vs direct PhD" decision for computing |

### 2.5 Glossary: missing basic terms (research/glossary.md)
Present: ECTS/CFU, Bologna (thin), AACSB/EQUIS/AMBA, GMAT Focus, MiM, CEMS, Blue Card, OPT, Sperrkonto (€11,904 for 2026, which is correct).

Missing (each one is a term the calculators or Atlas use or a student will meet):

| Group | Missing terms |
|---|---|
| UK degree classes | **First / 2:1 / 2:2 / Third**; "high 2:1" (used by the KCL and Warwick gates); **GPA** |
| Italian grades | **voto di laurea, 110 e lode** |
| Programme types | **Conversion MSc**; MEng / MPhil / MRes / MSc by Research; integrated master's |
| Applications | **SOP / personal statement, LOR**; **GRE**, **Duolingo English Test**; **conditional vs unconditional offer**; **deposit/caparra** |
| UK immigration | **CAS**; **ATAS**; **eVisa / UKVI account / share code** (BRPs were replaced by eVisas; 0 hits for "eVisa" in the library); FOI |
| Admissions process | **gathered field** (used in the calculator's regime E); **rolling** (present) |
| Recognition | **Diploma Supplement**; **dichiarazione di valore / CIMEA attestato di comparabilità**; **apostille** (Hague Convention); **ENIC-NARIC / UK ENIC**; **anabin / ZAB**; **WES** |
| Italian system | **valore legale del titolo** (it is in decisions/school-types-and-accreditation.md but not the glossary); **numerus clausus / numero chiuso / programmato**; **bando, graduatoria** |
| German applications | **uni-assist, VPD, APS**; **Studienkolleg** (bachelor-level, but students ask); **Semesterbeitrag**; **Studiengebühren** for non-EU (TUM, Baden-Württemberg €1,500 a semester) |
| Germany, residence and work | **Anmeldung, Steuer-ID**; **Chancenkarte** (Opportunity Card) |
| Other countries' registrations | **codice fiscale, permesso di soggiorno**; **NIE / TIE** (ES); **BSN** (NL) |
| US study | **F-1 / J-1 / I-20 / SEVIS fee / CPT** |
| EU mobility and funding | **Erasmus+, Erasmus Mundus Joint Master, EIT Digital**; **Talent Passport** (FR) |
| Careers | **JPO / YPP** (used in careers/public-policy-and-academia.md); **OA / LeetCode / system design** |
| Admissions bodies | **TOLC** and **UCAS Postgraduate** (absent) |

The glossary is also English-only; research/it/ has no glossary.

### 2.6 Site-level pages missing
- **About / who is behind this.** There is none. index.html:129 says "An independent, unofficial tool built for personal use." For a public launch that line reads as "not for you" and gives no accountable author.
- **Methodology.** The scoring explanation is spread across margin notes. docs/VERIFICATION.md exists but is excluded from the build (SKIP includes `docs`).
- **Privacy notice.** Required if GoatCounter is enabled (GDPR Art. 13; the EDPB 2/2023 point is in research/product/product-map.md:284). The footer already says "Visits are counted anonymously" (index.html, it.html:167, computing.html:104) while js/stats.js:29 has `COUNTER = ''`. Today the statement is false, and once switched on there is no notice.
- **Contact and corrections.** None. evidence/how-numbers-mislead.md Part G promises a "Dated corrections log, public". The site has none, and no channel for a school to report an error.
- **FAQ.** None. Obvious entries: "Why isn't school X here?" (the computing EXCLUDED list exists only inside results), "Is this an acceptance probability?", "Does it work for non-Italian grades?".
- **Disclaimer page.** A reality-check card exists on each page and is good. map.html carries the IAA 1999 immigration-advice caveat, but the calculator pages do not mention that visa and fee figures (once added) are general information.

---

## 3. SUPERFICIAL / too generic

1. **data/computing-model.js:504–971.** Each programme has 3–6 facts and no fees, no class size (except Oxford's TP figure and KTH's 58/1,019), no deadlines in the facts, no outcomes, and no link to its careers page.
   - A "deep" record would have: fee by status (home / EU / overseas), intake size, applications per place (FOI where UK), deadline stages, documents, ATAS yes/no, post-study visa route, top employers (from the school's own destination table, e.g. Imperial Careers Service PGT tables), and a median salary with denominator.
2. **data/computing-model.js:983–988.** The EXCLUDED rationale "could not read their published entry rules at source" for RWTH, Saarland, DTU and Aalto. These pages are public: rwth-aachen.de; dtu.dk (MSc Computer Science and Engineering admission requirements list ECTS by area); aalto.fi (CS major). The reason will not convince a student. Read them and add them.
3. **js/page-computing.js:527–531.** "Decisions reported between 2021-02-16 and 2026-03-14, with the middle of them around 2022-03-07" is meaningless. Replace it with a month-of-year histogram ("most decisions reported in Feb–Apr").
4. **research/careers/tech-data-and-ai.md §4.** "Pay" for Europe rests on:
   - swissICT via a trade-press report
   - get-in-it.de (which names no underlying survey)
   - one Italian employer
   - ITJobsWatch's 104 ads

   Deep would add: AlmaLaurea LM-32 and LM-18; Destatis Verdienststrukturerhebung for Informatiker; HESA Graduate Outcomes for postgraduate taught computing (blocked fetch noted; use the HEDIIP/Discover Uni CSV downloads); Dutch CBS; INSEE/APEC "Les jeunes diplômés" for informatique.
5. **research/careers/tech-data-and-ai.md §5 (conversion).**
   - Only UK and old Irish data. Ireland's current Springboard+ / HCI Pillar 1 conversion courses (up to 90–100% state-funded for eligible EU residents) are a live, cheap route and are not mentioned as current.
   - UK OfS AI and Data Science conversion scholarships (2020–2023) are not mentioned either.
6. **research/decisions/decision-framework.md:51–68.** The cross-career table covers IB, quant, AM, MBB, tier 2, Big 4, corporate rotations, FMCG, luxury, agencies, tech business and EU institutions. There is **no row for software engineering, data science or ML engineering**. That excludes the entire computing half of the site from the "decision path" that product-map.md §1 makes the start page.
7. **research/glossary.md** is defined as covering "the jargon used across /research", but it has no computing terms at all (see 2.5).
8. **research/it/README.md:11.**
   - Only 3 of about 60 files are in Italian, and the index itself describes the library as "scegliere un master in ambito business".
   - The folder name `it/` is confusing next to the IT/computing track. round-6a judged it "intentional", but the brief for this audit assumed it was IT research. Rename it to `research/it-IT/` or `research/italiano/`.
9. **index.html:96–123.** The homepage pitch is "Three calculators". The Atlas (46 countries, 200 hubs) and the research library are not mentioned in the body or the meta description (index.html:7, 11). The biggest new feature is undersold.
10. **README.md:69.** "192 hubs in all" vs the brief's and the gap report's 200 hubs. The README "454 checks passing" (line ~25) is hard-coded: the runner prints 446 across 10 suites plus the MBA suite's own counts. Drop the number or generate it.
11. **research/evidence/trends.md** (149 lines) covers the AI and entry-level squeeze for business roles. Its European data for computing is stock data only (Eurostat, Bitkom), and it says so honestly. A deeper version would add Dutch UWV and German Bundesagentur IT vacancy series by experience level, and LinkedIn Economic Graph Europe entry-level postings.
12. **research/careers/public-policy-and-academia.md.** EU institutions are well done. The computing angles are missing: CERN, ESA, EUMETSAT, ECMWF, the EU DG DIGIT, and EU-LISA (Tallinn/Strasbourg) as IT employers.

---

## 4. UNDERREPRESENTED

**Computing programmes by country (in the model / should have at least):**
- UK 16 / 16 is fine; add cyber, HCI and ML
- Switzerland 2 / 4: ETH Data Science, ETH Robotics
- Netherlands 2 / 5: TU/e, Leiden, VU
- Germany 1 / 6: RWTH, KIT, LMU, TU Berlin, Saarland, TU Darmstadt
- Sweden 1 / 3: KTH CS, Chalmers
- US 4 / about 10
- **Italy 0 / 6+**
- **France 0 / 4**
- **Denmark 0 / 2**
- **Finland 0 / 1**
- **Belgium 0 / 1**
- **Austria 0 / 1**
- **Spain 0 / 1**
- **Ireland 0 / 2**
- **Poland and Czechia 0 / 2**
- **Canada 0 / 2**

**Computing tracks:** CS, DS/AI and Conversion only. Missing: Cybersecurity, HCI, Robotics, Quantum, Bioinformatics, Information Systems / Business Informatics, Online / part-time, Erasmus Mundus / EIT Digital.

**Careers sectors with no dedicated, sourced section:**
- semiconductors
- cybersecurity
- gaming (engineering)
- embedded / automotive software
- insurance and actuarial (only passing mentions in consulting.md and places/beyond-europe.md)
- shipping and maritime (passing mention only)
- agri-food (passing)
- hospitality (passing in luxury-and-fashion.md)
- media and publishing
- education and edtech
- public-sector IT
- space (ESA)
- retail (non-luxury)
- telecoms
- utilities IT

**Roles:** software engineer (interview process), data engineer, DevOps/SRE, security analyst, solutions engineer (unsourced), research engineer (partly unsourced), UX/HCI, product manager (thin), IT consultant (Reply/Accenture model).

**Nationalities:** the library has deep playbooks for Italy plus ES, FR, DE, PT, GR, PL (EU) and IN, CN, NG, TR, UK, US (non-EU). Missing for computing in particular:
- Pakistan, Bangladesh, Egypt, Iran: large CS master's applicant groups to DE, IT, SE and FI; ATAS-relevant; APS-like requirements
- Brazil, Mexico
- Ukraine: temporary-protection holders studying in the EU
- Romania, Bulgaria, Hungary, Czechia, Baltics as origin countries: big CS outbound

**Atlas computing coverage (from atlas-gap-report.txt):** 95 of 200 hubs have no computing rating; analytics and bigdata are rated in 0 hubs, datasci in 11, ai in 12, cs in 7. Fully white hubs include Hsinchu (TSMC HQ; semiconductors), Grenoble (STMicro, CEA-Leti), Austin (Tesla, Dell, Apple campus), Trondheim (NTNU), Uppsala, Oxford, Osaka, Kyoto, Gdańsk, Poznań, Łódź and Bern. Grenoble and Hsinchu being blank while semiconductors are absent from the careers files is the same gap twice.

---

## 5. Quick wins (each under 1 hour)

1. **README.md:3–11.** Delete the LEGAL NOTICE. Replace it with "Built by Alessandro Iacono with AI assistance (Claude). Independent, not affiliated with any school." Consider a history rewrite, since the repo is public.
2. **js/results-kit.js:173 and js/i18n-it.js:355.** Remove "move their ass" / "muovere il culo".
3. **tools/build.js:40–42.** Add `'graphify-out', 'CLAUDE.md', 'research'` to SKIP, or whitelist only `research/countries`, `research/places` and so on. Hide js/page-map.js:1223's "Verification log: P…" line from students.
4. **data/computing-model.js:670–684 (Manchester).** Make these changes:
   - name → "Manchester — MSc Advanced Computer Science"
   - gate → `minDegreeClass 'first'`
   - English → `C1H`
   - regime → `B`
   - facts → fees £17,600 / £41,400 and stages 6 Nov 2026, 1 Jan, 26 Feb, 21 May 2027 (`OFF`)
5. **it.html:140–144.** Delete the FOI acceptance-rate promise, or add the FOI data.
6. **research/glossary.md:95, :86, :29.** Fix impatriati (art. 5 D.Lgs. 209/2023 until 31 Dec 2026), H-1B (wage-weighted selection; the proclamation fee) and Bologna.
7. **research/glossary.md.** Add the about 40 terms in 2.5; each is one line, so 2–3 hours in total, or under an hour for the top 15: First/2:1, Conversion MSc, ATAS, CAS, eVisa, uni-assist, APS, Diploma Supplement, dichiarazione di valore/CIMEA, apostille, Erasmus Mundus, EIT Digital, valore legale, numero chiuso, Chancenkarte.
8. **research/decisions/decision-framework.md:25–31 and money/scholarships.md:18.** Replace the dated "time-sensitive" blocks with a pointer to the deadline calendar, or re-date them.
9. **index.html:129.** Change "built for personal use" to "an independent, free tool"; add one sentence and a link for the Atlas; add the Atlas to the meta description (lines 7 and 11).
10. **Footer** (index.html, it.html:167, computing.html:104). Make the "Visits are counted anonymously" sentence conditional on `COUNTER` being set, or change it to "may be counted".
11. **README.md:69.** Change 192 → 200 hubs and drop the hard-coded "454 checks".
12. **Tag or delete the unsourced lines in 1.4.** For each section, either put "[practitioner consensus, unsourced: see Claims to verify]" at the top or cut it. The cheapest honest fix is about 45 minutes in total.
13. **js/page-computing.js:527–531.** Drop the "middle around {date}" sentence until a month-of-cycle figure exists.
14. **data/computing-model.js EXCLUDED.** Add an entry: "Italian, French, Danish, Finnish and Belgian programmes: not yet modelled; coming." Students then know the gap is acknowledged.
15. **ATAS line.** Add a one-sentence ATAS warning to every UK computing programme (all 16 are CS, AI, IT or data-science CAH codes). Effort is minimal and it prevents a blocked visa.

---

## 6. Top 10 priorities for the next 4 weeks (ranked)

1. **Remove the public reputational and legal hazards (day 1).** The README LEGAL NOTICE in the public repo; the profanity in the stale banner; the build SKIP for research/product, _working, verification, graphify-out and CLAUDE.md; the "built for personal use" line. Sections 1.1 and 1.2.
2. **Re-verify all 26 computing records against the 2027-entry pages, starting with Manchester (wrong today).** Use `OFF`-read pages for the 15 entries currently tagged `OFF2` or `TP`, e.g. Warwick's whole record and Bristol's and St Andrews' degree class. Add deadlines and fee-by-status. Manchester Stage 1 closes 6 Nov 2026 and CMU early closes 18 Nov 2026.
3. **Add fee status, tuition and ATAS/visa lines to every computing programme.** Examples: Imperial £48,300 overseas; ETH CHF 2,190 a semester; TUM €4,000–6,000 a semester for non-EU; ATAS for UK CAH11-01. This is the most-asked practical question and the cheapest to source.
4. **Add Italian computing master's (Polimi CSE, Bocconi AI and DSBA, Sapienza, PoliTo, Bologna AI, Pisa) using CFU/SSD gates.** The core reader is Italian, the Italian grade converter already exists, and Polimi's first call for foreign-degree holders is open now.
5. **Purge or source the "Reality Check" sections (1.4)** across 6 careers files before any of them is surfaced on the site. Add a lint to the research workflow: no bold numbers without a tag.
6. **Add a minimum site frame:** About, Methodology (render docs/VERIFICATION.md), Privacy, Contact/Corrections (a GitHub issue form or an email alias), and an FAQ with "Why isn't school X here?". The library already promises a public corrections log.
7. **Fill the computing knowledge gap in the library.** Write two new briefs:
   - **getting-in/computing-admissions.md:** SOP/LOR norms per country, GRE policy, uni-assist/VPD/APS, ATAS/CAS timeline, and the decision calendar by month
   - **careers/software-interviews-and-markets.md:** OA, LeetCode, system design and quant tests; the Italian IT market with AlmaLaurea LM-32/LM-18 and Reply/Accenture/NTT Data; cybersecurity; semiconductors; gaming engineering; freelancing (forfettario, IR35)

   Add a software/data/AI row to decisions/decision-framework.md.
8. **Glossary overhaul (2.5) and an Italian glossary.** About 40 terms; the glossary is the cheapest fix for "I didn't see X".
9. **Decision topics with 0 coverage:** disability and accommodations, first-generation students and fee waivers, LGBTQ+ legal safety per Atlas country (ILGA-Europe Rainbow Map 2026, ILGA World), housing search and scams, online vs on-campus (OMSCS vs on-campus cost), and entrepreneur and startup visas (IT, FR, NL, DE §21, IE STEP, EE, UK Innovator Founder). One short sourced section each.
10. **Broaden the computing track:**
    - Add a Cybersecurity track (Royal Holloway, Sapienza, PoliTo, KTH, TU/e, EIT Digital) and Robotics/HCI as sub-tracks.
    - Read and add RWTH, DTU, Aalto, KU Leuven and TU Wien (the "could not read at source" exclusion does not hold).
    - Replace the OMSCS exclusion with an "online and part-time" comparison panel.
    - Reconsider publishing GradCafe-derived aggregates given its "no derivative works" clause, at least before any paid tier.

---

### Sources consulted for this report (official pages, read 5 Oct 2026)
- University of Manchester, MSc Advanced Computer Science, all content (entry, English, fees 2027, stages): https://www.manchester.ac.uk/study/masters/courses/list/21573/msc-advanced-computer-science/all-content/
- Imperial College London, MSc Advanced Computing (fees 2027 £25,850 / £48,300; rounds): https://www.imperial.ac.uk/study/courses/postgraduate-taught/advanced-computing/
- Stanford CS graduate deadlines (8 Dec 2026 for Autumn 2027; the model is correct): https://www.cs.stanford.edu/admissions-graduate-application-deadlines
- Carnegie Mellon CSD MS admissions (18 Nov / 9 Dec 2026; the model is correct; fee US$80 → US$100): https://csd.cmu.edu/academics/masters/admissions
- University of Edinburgh MSc Artificial Intelligence (the model is consistent; 2027–28 requirements published from 1 Oct 2026): https://study.ed.ac.uk/postgraduate/degrees/index.php?r=site/view&id=107
- Warwick MSc Computer Science (First or high 2:1 in CS, maths, statistics or physics; IELTS 6.5/6.0; three routes from 2026–27): https://warwick.ac.uk/study/postgraduate/courses/msc-computer-science
- ETH Zurich tuition fees (CHF 730 / CHF 2,190 a semester): https://ethz.ch/students/en/studies/financial/studiengebuehren.html
- TUM Master Informatics (non-EU tuition is programme-specific, €4,000–6,000 a semester; confirm on the page): https://www.cit.tum.de/en/cit/studies/degree-programs/master-informatics/
- Politecnico di Milano, LM admission deadlines for foreign qualifications: https://www1.polimi.it/en/prospective-students/how-to-apply/admission-to-laurea-magistrale/foreign-qualification/deadlines
- GOV.UK Immigration Rules Appendix ATAS (CAH11-01-01 to -05 listed): https://www.gov.uk/guidance/immigration-rules/immigration-rules-appendix-atas-academic-technology-approval-scheme-atas
- TheGradCafe terms ("may not… create derivative works from… any of the Material"): https://www.thegradcafe.com/terms
- German blocked account €11,904 for 2026 (the glossary is correct; secondary confirmation): https://prodigyfinance.com/resources/blog/german-blocked-account-2026-how-the-euro11-904-sperrkonto-works-and-how-to-fund-it/
- Live-site checks (curl, 5 Oct 2026):
  - https://iaconoalessandro.github.io/admetia/ → 200
  - /map.html → 404 (the Atlas is not deployed yet)
  - /research/glossary.md → 404
- Repo visibility: `gh repo view` → PUBLIC.
