---
title: Competitors, pricing benchmarks, legal basics and platform constraints for the Admetia product team
last_researched: 2026-10-02
scope: Product-team file (not student advice). Audits competitors and substitutes, pricing and willingness-to-pay evidence, EU/Italy legal basics for a privacy-first education-information site, content liability, a user-contributed data flywheel, and GitHub Pages technical constraints. Excludes student-facing career content (see sibling files).
confidence: low to medium. Legal and regulatory text was read on official pages, but nothing here is legal advice; competitor pages were read on the dates shown and prices change often; there is no direct willingness-to-pay study for this product.
review_by: 2027-01-31
---

> **NOT LEGAL ADVICE.** Everything in the legal sections is a research reading of official texts, written by a non-lawyer for a product team. A qualified lawyer (ideally an Italian avvocato with GDPR and consumer-law experience) and a commercialista for VAT must review the site's terms, privacy notice, checkout flow and any named-school critique **before any paid launch or any data collection**. Legal dates and rules were read on 2026-10-02 and may have moved.

# Competitors, pricing, legal and platform research (product team only)

## Bottom line

1. **White space exists but is narrower than it looks (H-a partly supported).** Of the players whose pages could be read, none combines Europe-first pre-experience master's logic, a visible rule/source trail, Italian language and an admission-chance model. MiM Compass (directory, 17 languages including Italian) and MiM-Essay (probabilities, India-specific, collects email and phone) are the nearest. About 11 of the roughly 26 names in the brief and the Gemini lead could not be read at all (403s, CAPTCHAs), so this is "not seen", not "does not exist".
2. **No direct willingness-to-pay evidence exists for this product.** Competitors' prices are anchors, not WTP: free (GMAC Program Finder, MiM Compass), €79 a year one-off (PrepLounge), $497 five-year (BIWS), €199 and up for coaching. Candidates' information sources are mostly free and institutional (GMAC 2025: 52% of global candidates use school websites; Italy's list is mba.com 55%, school websites 52%, FT 38%). The Gemini €49 / €19 / €249 tiers are proposals only.
3. **A client-side design does lower the data-protection burden, with conditions (H-b supported with conditions).** The EDPB says information processed inside the browser that does not leave the device is not "accessed" under ePrivacy Art. 5(3). The burden returns with analytics (consent question for a lawyer), email alerts, accounts, payments, free text and uploads. GitHub as host still sees ordinary request data.
4. **Selling to EU consumers: withdrawal rights apply from the first sale; OSS does not (H-c partly supported).** Digital-content waiver needs prior express consent plus acknowledgement plus a durable-medium confirmation (Art. 16(m) as amended, primary text); services have a different rule (waiver only after full performance; proportionate payment under Art. 14(3)); and from 19 June 2026 online checkouts also need a withdrawal button (Art. 11a, Italy art. 54-bis). The €10,000 EU-wide threshold lets a small seller stay on home-country VAT; OSS registration is optional (Commission and Agenzia delle Entrate pages). Italian rate and forfettario treatment were not read.
5. **GitHub Pages cannot be assumed to host a paid product.** Its documentation says Pages is not "allowed to be used as a free web-hosting service to run your online business" or a site "primarily directed at … facilitating commercial transactions". And static files cannot be secret: a paywall on public JSON sells convenience, not exclusivity.
6. **Advice boundaries are about "a particular individual".** UK immigration advice is regulated when it "relates to a particular individual" (IAA 1999 s. 82) and may be given only by qualified persons (s. 84). General rules are outside; "you are eligible" outputs are nearer the line. Tax and other countries' immigration rules were not researched.
7. **Use facts, not tables.** The Commission's database-right summary shows protection can rest on obtaining, verifying or presenting data; the *BHB v William Hill* line narrows it but is not blanket permission. Never copy rankings or report tables wholesale.
8. **A user-outcome flywheel is legally and statistically harder than the Gemini lead suggests.** WP29 Opinion 05/2014 says k-anonymity alone leaves linkability and inference risks; GradCafe-type data is self-reported, selected and has no denominator. Publish only aggregates with suppression and show n.
9. **AI Act: low risk for a rule-based, applicant-side calculator, but dates are moving.** The Commission page (3 Aug 2026) lists education-access systems as high-risk with obligations from 2 Dec 2027 and says an AI Omnibus entered into force on 27 July 2026. A generative assistant would bring transparency duties.
10. **Limits of this file.** EUR-Lex was unreadable to automated tools, so key EU texts were read through substitutes. No lawyer has reviewed anything. **Do not launch payments, alerts or data collection without a qualified lawyer and a commercialista.**

## 1. Competitor and substitute audit

### 1.1 Method and what could actually be read

All pages below were opened on **2 October 2026** (a few on 1–2 October by `curl`/WebFetch). Many commercial sites block automated readers, so the audit has three tiers of evidence, shown in the last column of the matrix:

- **Read**: the player's own public page was opened and the facts below come from it.
- **Partial**: the page loaded but did not show prices or the relevant feature, or a price comes only from a search-result snippet of the player's own page (snippet-only, to be re-checked by hand).
- **Not read**: blocked (HTTP 403, CAPTCHA, 404 or a PHP error). These players are listed so the team knows they were not audited, and no number from them is used.

Players attempted and **not read at all**: Management Consulted (403), WSO and WSO Academy (403), MBAMission (page returned PHP errors), Prepory (403), eFinancialCareers (CAPTCHA), Glassdoor (403), Bright Network (no connection), Indeed career guides, LinkedIn Learning, Menlo Coaching, Admit.io-style tools and Poets&Quants' own consultant pricing. Nothing in this file should be read as a statement about them.

### 1.2 Audit table (what each player says on its own pages)

| Player | Type | What it does (from its own page) | Coverage | Price read | Evidence status |
|---|---|---|---|---|---|
| **GMAT Club** (gmatclub.com, free start page, 2 Oct 2026) | Forum, test prep, marketplace | Forum, practice tests, a "Decision Tracker" (self-reported admission results), a school reviews section. The page itself lists "GMAT Courses starting at $50" and "Admissions Consulting Packages from $750". It carries a deals marketplace for third-party prep brands and a "$500 Prodigy Loan Cashback" banner, i.e. affiliate-style revenue [employer-stated] | MBA-led, global, English | Tests: Free (1 adaptive test), Starter $99.95, Pro $139.95, Elite $189.95 for 3 months, from a search snippet of gmatclub.com/tests_new (page itself returned 403) | Partial |
| **Poets&Quants** (poetsandquants.com, 2 Oct 2026) | Business-school media | Free editorial. The home page shows consultant-written "Mr/Ms" profile evaluations headed by school, GMAT and GPA, plus a "Cost of an MBA" table (e.g. Columbia $137,571 total cost 2025–26) | US MBA first, some Europe | Free to read | Read (home page only) |
| **Accepted** (accepted.com, 2 Oct 2026) | Admissions consultancy with free tools | A free "Admissions Calculator" (a 12-question MBA quiz returning feedback per answer), a "Selectivity Index", free guides, and a free 30-minute profile evaluation that promises to "assess your chances of acceptance" | US-centred; MBA, law, medical, college | Consulting prices not shown on pages read; quiz free. Output type (probability or not) not stated on the page | Partial |
| **GMAC mba.com Program Finder** (gmac.com FAQ, 2 Oct 2026) | Test-owner directory | A database of GMAT-accepting programmes to "view, search, compare and connect". The FAQ says schools do not pay to be listed; data is gathered from school websites each autumn; free for students [employer-stated] | Global, all GMAT-accepting programmes; no admission-chance estimate | Free | Read (FAQ) |
| **MiM Compass** (mim-compass.com, 2 Oct 2026) | Specialist MiM guide | Database of "over 2,400 programmes" filterable by country and language, the FT MiM ranking, school profiles, forum, deadlines calendar, two eBooks, student blogs. Site offered in 17 languages including Italian; Europe 1,526 programmes. Operator named only as "The Master in Management Compass" [employer-stated] | Global, European depth | Appears free (no paid item seen); revenue model not stated | Read (home page) |
| **MiM-Essay** (mim-essay.com/profile-evaluation, 2 Oct 2026) | Consultancy lead-gen tool | "Free, instant, India-specific" profile evaluation giving school-by-school admission probabilities and Reach/Target/Safety. It collects academics, extracurriculars, work, test scores, **email and phone (OTP-verified)**. It says weights are "updated annually" from admit data, and advertises "13,000+ Indian applicants" and a "98% admit rate at target schools"; no limitation or accuracy warning was visible [employer-stated] | MBA and MiM, India-specific | Free tool; paid consulting price not shown | Read |
| **MBA Crystal Ball** (mbacrystalball.com, 2 Oct 2026) | Consultancy | Profile builder, essays, interviews, SoP review, free career aptitude tests; India-focused | India to global MBA | No prices on home page | Partial |
| **Leland** (joinleland.com, 2 Oct 2026) | Coaching marketplace | Coach marketplace with categories including MBA, "Master's Programs", GMAT, consulting, finance; "free livestreams" and an AI category | US-centred, global | **No price on the home page** (WebFetch and page text both show none) | Partial |
| **GradCafe** (thegradcafe.com, 2 Oct 2026) | Results database | "Share your grad school admission results … over 250 graduate schools … over 840,000 contributors". The "Top Master Programs" box is led by US and non-business programmes (e.g. Creative Writing, Computer Science). The terms disclaim "accuracy" of forum content [employer-stated] | US-heavy, all fields | Free | Read |
| **Studyportals / Mastersportal** (2 Oct 2026) | Programme marketplace | "270K+ programmes", "3,700+ participating institutions", "40M+ unique visitors per year". The institution side sells "Student Recruitment & Marketing", "Data & Insights" and "Consulting". Mastersportal's footer lists "Our Marketing Services" and the pages read show **no per-listing disclosure** of paid placement | Global, English-taught focus (93K+ English-taught masters) | Free to students | Read |
| **Edvoy** (edvoy.com, 2 Oct 2026) | Study-abroad agency | App to search courses, with student loans ("interest rates from 9.25%", "zero service charge") and accommodation | Mainly UK/Ireland/Australia-type destinations; global | Free to students; revenue is from partners (not stated on page read) | Partial |
| **PrepLounge** (preplounge.com/en/pricing, 2 Oct 2026) | Case-interview community | Premium Membership **€79, one-off payment for one year** (not a subscription); "Premium + Coaching" **from €199**; "580,000+ community members"; English and German site [employer-stated] | Consulting candidates, global with German base | €79 / from €199 | Read |
| **Breaking Into Wall Street (and Mergers & Inquisitions)** (breakingintowallstreet.com comparison page, 2 Oct 2026) | Finance training | Premium package **$497**, 5 years of access and updates, a 90-day money-back guarantee, case studies from North America, Europe, Asia and Australia; it quotes a rival's premium at $499 [employer-stated] | Finance technical training, global | $497 | Read |
| **Levels.fyi** (levels.fyi/about, 2 Oct 2026) | Pay data | Free salary data; verifies by a three-tier system (documents, corporate email, screened anonymous); "1,000+ locations across more than 40 countries"; paid negotiation coaching $1,250–$5,000, resume reviews $99–$349, visa salary reports $395; employer benchmarking from $800 to $4,000 a month [employer-stated] | Tech-heavy, US/UK/DE/IN | Free + coaching | Read |
| **TargetJobs** (targetjobs.co.uk, 2 Oct 2026) | UK graduate job board and advice | Job listings by sector with salaries shown (examples £26,050 placements); free to students | UK only | Free to students; revenue model not stated | Read (home page) |
| **MBAMission, Menlo, WSO, Management Consulted, Prepory, eFinancialCareers, Glassdoor, Bright Network, CaseCoach, Indeed, LinkedIn Learning** | various | Not audited (see 1.1). CaseCoach's pricing page returned 404 | – | – | Not read |

Matching a player to an AI use: none of the pages read advertised a generative-AI feature other than Leland's "AI" coaching category and the generic "AI" labelling of Levels.fyi's employer API/MCP offer (Levels.fyi page). No page read stated how, if at all, it uses AI to produce admission or pay estimates.

### 1.3 Feature matrix (what was seen, not what may exist behind logins)

Legend: Y seen on page, p partial or implied, n not seen, ? could not be read.

| Feature | GMAT Club | Accepted | MiM-Essay | GMAC Program Finder | MiM Compass | Studyportals | GradCafe | Levels.fyi | PrepLounge | TargetJobs | Admetia (today) |
|---|---|---|---|---|---|---|---|---|---|---|---|
| Admission-chance output | p (decision tracker) | p (quiz feedback) | Y (% per school) | n | n | n | p (raw results) | n | n | n | Y (rule-based tiers) |
| Pre-experience MiM/MiF focus | n | n | p | p | **Y** | p | n | n | n | n | **Y** |
| European programme depth | n | n | p | p | **Y** | Y | n | n | n | UK only | Y (~70 programmes) |
| Italian-language interface | ? | n | n | ? | **Y** | ? | n | n | n | n | **Y** |
| Shows its rules or sources | n | n | claims calibration only | Y (schools' own sites) | p | n | n | Y (verification tiers) | n | n | **Y** (OFF/TP/NP/CAL tags) |
| Denominators / coverage shown | n | n | n | n | n | n | n | p | n | n | p (in places) |
| Net pay after tax and rent | n | n | n | n | n | n | n | n | n | n | n (planned T3) |
| Application and recruiting calendar | p | p ("Deadlines") | n | p | Y (deadlines) | n | n | n | n | p (job deadlines) | Y (deadlines.js; T1 planned) |
| Fact-checking of school claims | n | n | n | n | n | n | n | p (corrects pay) | n | n | planned (T13) |
| Runs without sending data to a server | not stated | not stated | **No** (email, phone, OTP) | not stated | not stated | not stated | n/a | n/a | n/a | n/a | **Y** (client-side) |
| Free to students | Y core | Y quiz | Y tool | Y | Y | Y | Y | Y core | basic free | Y | Y |

### 1.4 What this shows (test of H-a)

- **No competitor read combines all four of: Europe-first pre-experience master's coverage, a visible rule/source trail, Italian language and an admission-chance model.** The nearest are MiM Compass (European, multilingual including Italian, free, but a directory and forum, not a model) and MiM-Essay (a probability tool, but India-specific and collecting email and phone). H-a is **partly supported**: the combination is absent from what could be read, but several players were not readable, the audit is of home and pricing pages rather than product trials, and "does not advertise" is weaker than "does not exist".
- **Incentives matter.** Studyportals and the GMAC directory list programmes for institutions (Studyportals sells marketing to them; GMAC says schools do not pay), GMAT Club shows affiliate and lead-generation placements (Prodigy loan cashback, consulting packages), and consultancies run free calculators as a funnel to paid consulting (Accepted offers a free 30-minute evaluation; MiM-Essay offers a free session). These are observable commercial structures, not accusations of bias. They do mean none of them is positioned as an independent, evidence-tagged decision aid.
- **Data transparency is the weakest point across the field.** None of the admission tools read published a denominator, a sample size or an error range. GradCafe discloses that content is user-submitted and disclaims accuracy; Levels.fyi is the only player read that documents a verification method for user-submitted data.
- **Privacy**: the one probability tool whose data capture was visible (MiM-Essay) takes email and phone; the others' privacy policies were not readable. A genuinely client-side calculator is therefore a differentiator that can be stated factually ("answers stay in your browser"), but only for what Admetia has actually verified (see section 6).

### 1.5 The price ladder these players imply (for the team's anchors; all USD or EUR as published)

| Band | Examples read | Price |
|---|---|---|
| Free | GMAC Program Finder, MiM Compass, Accepted quiz, GradCafe, TargetJobs, Levels.fyi core | €0 |
| Self-serve study tools | PrepLounge Premium | €79 for a year |
| Self-serve test prep | GMAT Club Tests Starter to Elite (snippet) | $99.95 to $189.95 for 3 months |
| Self-serve finance training | BIWS Premium | $497 (5-year access) |
| Coaching and packages | GMAT Club-listed consulting "from $750"; PrepLounge + coaching from €199; Levels.fyi coaching $1,250 to $5,000 | €199 to $5,000 |

### 1.6 White space this library's content could fill

1. **Europe-first, pre-experience master's** with the rules of each school's own published process (the calculator already does this for ~70 programmes). The big directories cover breadth, not decision logic.
2. **Italian-language, Italian-audience content.** Only MiM Compass among players read offers Italian, and as a directory.
3. **Evidence tags and denominators on every number.** No player read does this; Levels.fyi comes closest on verification for pay data.
4. **Fact-checking of school and ranking claims** (T13): not seen at any player.
5. **Calendars and window checkers** (T1, T5): job boards show deadlines by listing; nobody was seen combining master's rounds, visa cut-offs and internship windows.
6. **Net-pay-after-tax-and-rent comparisons across European cities** (T3): not seen on any page read. This is also where the most legal care is needed (section 3.4).

Risk to state plainly: these are gaps in what was **read**, and a well-funded rival (or a general-purpose AI assistant) can close several quickly; the durable parts are the maintained, dated data and the trust record (see section 5).

## 2. Willingness to pay and pricing benchmarks

### 2.1 The honest starting point

**No direct willingness-to-pay (WTP) study for an Italian or European pre-experience master's decision tool was found.** Searches for consumer surveys on paying for admissions or career-decision information returned only vendor marketing and general subscription-app benchmarks. Every price in this file's section 1.5 is a price **competitors charge**, which shows what the market tolerates for adjacent products, not what Admetia's readers would pay. The product-map assumption of a paid "decision season" pass is therefore **untested**, as product/product-map.md itself says.

### 2.2 What the evidence does show

**(a) Where candidates look for information is mostly free and institution-run.** The GMAC Prospective Students Survey 2025 reports that 52% of global candidates name school websites as a top resource, and that school websites are the number one or two source in each country listed. For Italy the report's country figure lists mba.com 55%, school websites 52% and the FT 38%; for France school websites 61%; for Germany school websites 71%; for the UK school websites 50% (GMAC, Prospective Students Survey 2025, figure 12 text read from the PDF, pp. 28–29; GMAC's survey covers graduate **management** candidates, mostly MBA-leaning, not specifically Italian MiM applicants) [data]. Implication: the free anchors are strong (schools, GMAC, the FT), so a paid product has to offer something those sources structurally do not (comparison across schools, the other side of trade-offs, personal timing).
URL: https://www.gmac.com/-/media/files/gmac/research/prospective-student-data/2025/2025_pss_final.pdf (PDF text extracted and the information-source pages 7, 23 and 28–29 read, 2 Oct 2026; country list is figure text, so "chart-read": the 52% global figure is stated in prose on p. 28).

**(b) Adjacent products already sell one-off, time-limited access.** PrepLounge sells Premium for **€79 as a one-off payment covering one year, "not a subscription"**, and a coaching bundle from €199 (PrepLounge pricing page, 2 Oct 2026) [employer-stated]. Breaking Into Wall Street sells a Premium package at **$497** with five years of access and a 90-day money-back guarantee (BIWS page, 2 Oct 2026) [employer-stated]. So the "season pass" shape is not exotic in this market; what is unproven is the price for Admetia's audience.

**(c) Consumer-app subscription benchmarks are a weak analogy.** RevenueCat's State of Subscription Apps 2026 (published 19 March 2026; 115,000+ apps, $16bn revenue) reports a median Day-35 conversion of 2.1% for freemium apps against 10.7% for hard-paywall apps, and one-year subscriber retention of 27% (hard paywall) and 28% (freemium) (RevenueCat blog summary, read 2 Oct 2026) [data, vendor-published]. These are **mobile-app** figures with no education or web-content breakdown in the summary read; they should not be used as a conversion forecast for a static website. They do support one design point: freemium gives reach, hard paywalls give early conversion, and long-run retention is similar.
URL: https://www.revenuecat.com/blog/growth/subscription-app-trends-benchmarks-2026.md

**(c2) Test-fee anchor (snippet-only).** A search summary of mba.com pages states GMAT exam fees of US$275 in person and US$300 online in the US, with rescheduling from US$55 (search result of mba.com/gmac.com pages, 2 Oct 2026; the official fee pages returned a bot-block, so this is **unverified, snippet only**). The point for pricing is only the order of magnitude: candidates already pay hundreds of dollars for a test.

### 2.3 Price ladder for positioning (competitor prices, not WTP)

| Rung | Price seen | Source read |
|---|---|---|
| Free information | €0 | GMAC, MiM Compass, school sites |
| One-off self-serve access | €79 per year (PrepLounge); $497 five-year (BIWS) | pricing pages, 2 Oct 2026 |
| Test-prep subscriptions | $99.95–$189.95 per 3 months (GMAT Club, snippet) | snippet-only |
| Human coaching | from €199 (PrepLounge bundle); $750 consulting packages (GMAT Club listing); $1,250–$5,000 (Levels.fyi negotiation coaching) | pages read |

A reader-facing master's decision pass priced anywhere in the €20–€80 band would sit between "free" and "one test attempt". That is a **positioning observation, not a recommendation or a WTP estimate**.

### 2.4 The Gemini pricing proposals

The Gemini lead file proposed a **€49 Season Pass, €19 per month and a €249 concierge tier**, with a contribution-margin table, a "73%–96% 90-day churn" figure attributed to OpenView and blended customer-acquisition costs of €4.50–€12 and LTV/CAC of 4.5–6.4x. **None of these was found in a source read for this file; treat them as proposals.** The churn range was not located in the sources searched; the only retention figure found here (RevenueCat) is about one-year retention of roughly 27–28% for mobile subscriptions. The CAC and LTV/CAC figures are assumptions, not data. The concierge tier would add human review of personal data, which brings in the GDPR obligations in section 3.

### 2.5 What a valid test would look like

1. **Fake-door price test** on the live site: a "Plan builder" button with 2–3 price points shown to random visitors, counting only clicks (no personal data), with an explicit "not on sale yet" message. Use the existing GoatCounter events (see section 3.1 for what counting changes legally).
2. **A short, voluntary, anonymous survey** after the results page asking what the reader would pay, compared with what they actually click. Stated WTP overstates real payment, so the click test carries more weight.
3. **Segment by audience**: Italian bachelor's students (low disposable income, strong price anchoring to free university resources) versus working professionals considering MBAs (higher WTP). The data in 2.2 cannot separate them.
4. **Re-run in the application season** (Oct–Jan) because intent peaks around deadlines (see getting-in/recruiting-calendar.md).

### 2.6 What was not used

Filings of listed education companies (Chegg, Coursera, Duolingo) were not researched: their products and student populations differ from a niche European master's decision tool, and no filing was found that reports WTP for admissions-decision information.

## 3. Legal and regulatory basics

**Reminder: nothing in this section is legal advice.** It records what official texts say as read on 2 October 2026, and where the reading is incomplete.

### 3.0 What could and could not be read

EUR-Lex (the official EU law portal) blocks automated readers (HTTP 202 and an empty body, re-tested 2 Oct 2026). In verification round 3a the same texts were read from the EU Publications Office's Cellar service (`https://publications.europa.eu/resource/celex/<CELEX>`, XHTML), which serves the OJ and consolidated texts: Directive 2011/83/EU consolidated at 28 May 2022 (CELEX 02011L0083-20220528, includes Directive (EU) 2019/2161), Directive (EU) 2023/2673 (CELEX 32023L2673), Directive (EU) 2019/770 (CELEX 32019L0770), GDPR (CELEX 02016R0679-20160504), ePrivacy Directive consolidated at 19 Dec 2009 (CELEX 02002L0058-20091219) and VAT Directive 2006/112/EC consolidated at 1 Jan 2025 (CELEX 02006L0112-20250101); Italian texts from Normattiva (Codice del consumo arts 52, 54-bis, 59, "ultimo aggiornamento all'atto: 15/05/2026"). The table shows what was read first and what the earlier substitutes were: Round 3g re-read the CRD (Arts 14, 16), GDPR Art. 9 and ePrivacy Art. 5(3) in the Cellar copies and found the quotations below accurate. The Commission's Digital Omnibus proposal would move parts of ePrivacy Art. 5(3) into the GDPR; secondary reports (Kennedys; EDRi, March 2026) say no final agreement existed as of October 2026, so the lawyer should re-check the current text before launch [practitioner consensus, secondary].

| Need | What was actually read | Weakness |
|---|---|---|
| GDPR Articles 5, 6, 7, 9 | Primary text, Publications Office consolidated copy of 4 May 2016 (CELEX 02016R0679-20160504), read 2 Oct 2026; earlier the EDPB "SME data protection guide" and gdpr-info.eu | Later amendments to the GDPR were not checked |
| ePrivacy Art. 5(3) | **EDPB Guidelines 2/2023, version 2.0, adopted 7 October 2024** (PDF read) and the primary Directive 2002/58/EC text as amended by 2009/136/EC (consolidated copy of 19 Dec 2009, read 2 Oct 2026) | Official |
| Italian cookie rules | **Garante, Linee guida cookie, delibera 10 June 2021** (gpdp.it docweb 9677876, page read) | Read through a page summary; section numbers as reported |
| Consumer Rights Directive 2011/83/EU | Primary consolidated text at 28 May 2022 (CELEX 02011L0083-20220528: Arts 2, 7, 8, 9, 14, 16 as amended by Directive (EU) 2019/2161), Directive (EU) 2019/2161 Art. 4 and recital 30, Directive (EU) 2019/770 Art. 2, Directive (EU) 2023/2673 Art. 1 (new Art. 11a), plus the Commission "Your Europe" returns page; earlier the 2018 legislation.gov.uk copy | A consolidated version later than 28 May 2022 was not available from Cellar, so the 2023/2673 amendment was read in its own text |
| Italian Codice del consumo (D.Lgs. 206/2005) | Normattiva arts 52, 54-bis and 59 (updated to 15 May 2026); D.Lgs. 21/2014 (transposition of 2011/83/EU), D.Lgs. 26/2023, D.Lgs. 209/2025 as named in the Normattiva and Gazzetta notes | Other articles (49 to 51, 53 to 58) not read in full |
| VAT OSS | European Commission OSS page, **Agenzia delle Entrate OSS FAQ** (both read) and Directive 2006/112/EC Art. 59c (consolidated 1 Jan 2025, read 2 Oct 2026) | Articles on the OSS scheme itself (Title XII) not read |
| Database right | Commission staff working document SWD(2018) 147 (Council copy of the executive summary, text extracted) | Summary only; the CJEU judgments were not opened |
| AI Act | European Commission AI Act overview page (updated 3 Aug 2026) | Overview, not the Regulation text |
| UK immigration advice | Immigration and Asylum Act 1999 ss. 82 and 84 on legislation.gov.uk (revised to 30 Sept 2026) | UK only |
| Defamation | Defamation Act 2013 ss. 2 and 3 on legislation.gov.uk | UK illustration only; Italian principles read only through secondary summaries |

### 3.1 GDPR and ePrivacy: what a purely client-side calculator changes (test of H-b)

**What the EDPB says about information that stays on the device.** Guidelines 2/2023, point 44: web browsers that process information stored or generated inside the device (cookies, local storage, WebSQL, "or even information provided by the users themselves") are **not** "gaining access to information already stored" under Article 5(3) of the ePrivacy Directive "as long as the information does not leave the device"; but "when this information or any derivation of this information is accessed, Article 5(3) ePD would apply" (EDPB, Guidelines 2/2023 v2.0, 7 Oct 2024, p. 12, https://www.edpb.europa.eu/system/files/2024-10/edpb_guidelines_202302_technical_scope_art_53_eprivacydirective_v2_en_0.pdf) [data, regulator guidance]. That is the closest official support for the site's "your answers never leave your browser" design. It concerns ePrivacy consent, not the whole of the GDPR.

**My reading of the GDPR side (inference, not a quoted rule):** if Admetia and its service providers never receive the inputs, the calculator inputs are not data Admetia processes, so Articles 6, 13 and 15–22 have little to attach to for that feature. Three things keep some data-protection duties alive even for a "pure" static site:

1. **Hosting logs.** GitHub Pages is a third-party host. GitHub's General Privacy Statement (effective 27 April 2026) says GitHub collects "IP address, device information, session details, date and time of requests" about interactions with its Services generally; it does not say specifically what is logged for Pages visitors [employer-stated, vendor policy; Pages-specific logging unverified]. The site's privacy notice should say that the host receives ordinary request data.
2. **Local storage.** The site stores answers, language and edition in `localStorage` (repo files `js/storage.js`, `js/i18n.js`, `js/theme.js`). Article 5(3) ePrivacy covers storing information on a terminal and exempts storage "strictly necessary in order for the provider of an information society service explicitly requested by the … user to provide the service" (Directive 2002/58/EC Art. 5(3) as amended by 2009/136/EC, consolidated text read 2 Oct 2026, CELEX 02002L0058-20091219; also quoted in EDPB Guidelines 2/2023) [data]. The Garante's 2021 guidelines say technical cookies need only an information notice, not consent (section 5 as reported on the Garante page). Remembering a visitor's own answers or language is plausibly within that exemption; whether **auto-saving without a user action** is "explicitly requested" is a point for a lawyer.
3. **Analytics.** See below.

**Analytics (GoatCounter or similar).**
- The repo's `js/stats.js` is switched off by default (`COUNTER` is empty) and, when on, sends the page path (with `?track=` only), the referrer's origin and path, and screen width via a beacon or an image request; it stays silent for Do Not Track, Global Privacy Control, localhost and a footer opt-out.
- GoatCounter's own documentation says it "probably doesn't require a GDPR consent notice" because it stores aggregate, computed data and not IP addresses or user agents, and relies on legitimate interest (GoatCounter GDPR page, read 2 Oct 2026) [employer-stated, vendor claim; not a regulator's view].
- The Garante's cookie guidelines (section 7.2 as reported) allow analytics without consent when they are "limited solely to the production of aggregate statistics", used for a **single** site, and mask at least the fourth IPv4 component. GoatCounter's no-IP design is a different technique from IP masking, so whether it fits that section is a legal question, not a given [data, regulator guidance, read via page summary].
- EDPB point 51 treats JavaScript that instructs a browser to send information as an "instruction" that can be a "gaining of access" under Article 5(3). Screen width and referrer sent by a script may therefore fall under 5(3), so the exemption analysis above matters. **Treat "no consent banner needed" as a conclusion for the lawyer to confirm, not a fact.**

**What changes when features are added (design consequences, my reading):**

| Feature | New role for Admetia | Likely lawful basis (Art. 6) | New duties to plan for |
|---|---|---|---|
| Visit counting without identifiers | Possibly none beyond ePrivacy 5(3) | Legitimate interest (vendor view) | Privacy notice, opt-out, lawyer sign-off on consent question |
| Email alerts | Controller of email addresses | Consent (marketing/alerts) or contract (a paid alert service); the EDPB SME guide says the contract basis "does not cover marketing" | Privacy notice; processor contract with the mailing provider; unsubscribe; retention limit; check where the provider stores data |
| Accounts / saved plans on a server | Controller of profile data | Contract (Art. 6(1)(b)) for delivering the plan; consent for anything extra | Data-minimisation, access/erasure routes, security, breach process, retention |
| Payments | Controller of purchase records; payment provider is separate | Contract and legal obligation (invoices) | Withdrawal-right records (see 3.2); tax record retention periods (not researched) |
| User-contributed outcome data | Controller | Consent (Art. 6(1)(a)) for each purpose | See section 5 |

**Lawful bases and special categories.** The six Article 6(1) bases are consent, contract, legal obligation, vital interests, public task and legitimate interest (GDPR Art. 6(1)(a) to (f), primary text, CELEX 02016R0679-20160504, read 2 Oct 2026; also the EDPB SME guide) [data]. Article 9(1) prohibits processing personal data "revealing racial or ethnic origin, political opinions, religious or philosophical beliefs, or trade union membership", genetic data, "biometric data for the purpose of uniquely identifying a natural person", "data concerning health" and sex life or sexual orientation, unless an exception such as explicit consent (Art. 9(2)(a)) applies (primary text, same source) [data]. Related primary rules: Art. 5(1)(c) requires data "limited to what is necessary" (data minimisation); Art. 7(1) requires the controller to be able to demonstrate consent; Art. 7(3) requires withdrawal to be as easy as giving consent; Art. 7(4) counts conditioning a service on unnecessary consent against consent being free [data]. **Nationality and citizenship are not on that list.** But three product risks exist: (i) questions or free-text boxes about disability, health conditions, ethnicity, religion or "background" would invite special-category data; (ii) a combination such as citizenship plus a religion-sensitive visa query can become a proxy; (iii) a future "tell us about your situation" box can collect anything. Keep inputs to a closed list of categorical answers, and keep any free text on-device.

**Automated decisions (GDPR Art. 22).** The Gemini lead relied on CJEU C-634/21 (*SCHUFA*). That judgment was **not read** for this file. The Admetia score is shown to the user for self-assessment and is not sent to a school, so legal effect on the user from a third party is unlikely, but this point needs the lawyer's confirmation.

**Verdict on H-b ("privacy-first client-side design lowers the GDPR burden materially"): supported with conditions.** It holds while (a) inputs never leave the browser, (b) the privacy notice discloses host logs and local storage, and (c) analytics is limited to aggregate, non-identifying counts. It stops holding the moment email, accounts, payments, free-text inputs or uploads exist.

### 3.2 EU consumer law for paid digital products

- **Withdrawal right.** EU consumers have 14 days to cancel distance contracts without giving a reason (Directive 2011/83/EU Art. 9(1), primary text); the period runs from "the day of the conclusion of the contract" for service contracts (Art. 9(2)(a)) and for digital content not on a tangible medium (Art. 9(2)(c)); Member States may extend it to 30 days only for unsolicited home visits and excursions (Art. 9(1a)). Italy's Codice del consumo art. 52(1) and (2)(a), (c) repeat the 14-day rule and the starting points (Normattiva, updated 15 May 2026) [data, primary]. The Commission's "Your Europe" page says the exception covers "online digital content … that you started downloading or streaming after you expressly agreed to lose your right of withdrawal by starting the performance" (europa.eu/youreurope, returns page, read 2 Oct 2026) [data, official].
- **Digital content exception (Art. 16(m), as amended by Directive (EU) 2019/2161).** Member States "shall not provide for the right of withdrawal" for "contracts for the supply of digital content which is not supplied on a tangible medium if the performance has begun and, if the contract places the consumer under an obligation to pay, where: (i) the consumer has provided prior express consent to begin the performance during the right of withdrawal period; (ii) the consumer has provided acknowledgement that he thereby loses his right of withdrawal; and (iii) the trader has provided confirmation in accordance with Article 7(2) or Article 8(7)" (Directive 2011/83/EU consolidated at 28 May 2022, CELEX 02011L0083-20220528, read 2 Oct 2026) [data, primary]. Art. 8(7) requires that confirmation "on a durable medium within a reasonable time after the conclusion of the distance contract" and at the latest before a service begins, including the consent and acknowledgement. So all three conditions, including the durable-medium confirmation, are in the primary text (an earlier version of this file relied on the pre-2019 text hosted at legislation.gov.uk and had not seen the third condition). Article 14(4)(b) says the consumer bears no cost for digital content where (i) prior express consent to start before the 14-day period ended, (ii) acknowledgement of loss of the right, or (iii) the Art. 7(2)/8(7) confirmation is missing. Italy: Codice del consumo art. 59(1)(o) has the same three conditions (Normattiva) [data, primary].
- **Services are treated differently.** Art. 16(a) (as amended) excludes "service contracts after the service has been fully performed but, if the contract places the consumer under an obligation to pay, only if the performance has begun with the consumer's prior express consent and acknowledgement that he will lose his right of withdrawal once the contract has been fully performed by the trader"; and where the consumer withdraws after asking performance to start in the withdrawal period (Art. 8(8) obliges the trader to ask for an express request and acknowledgement), Art. 14(3) requires payment "in proportion to what has been provided" [data, primary; Italy art. 59(1)(a) is the same]. Whether a web product is a service or digital content turns on the definitions the directive takes from Directive (EU) 2019/770 Art. 2: "digital content" is "data which are produced and supplied in digital form"; a "digital service" is "a service that allows the consumer to create, process, store or access data in digital form" or to share or interact with data. Recital 30 of Directive 2019/2161 gives "games offered in the cloud, cloud storage, webmail, social media and cloud applications" as examples of digital services, says their "continuous involvement" justifies the right of withdrawal, keeps the 16(m) exception for single-supply downloads, and adds: "Where there is doubt ... the rules on right of withdrawal for services should apply" [data, primary]. My reading (not legal advice): a subscription to a hosted, continuously updated web tool points to service rules, so the waiver under 16(a) would not take effect until the service is fully performed, and a withdrawing customer who asked for immediate access pays pro rata under Art. 14(3); a one-off downloadable report points to 16(m). Whether Admetia's paid tier is one or the other is for the lawyer; design the checkout to satisfy both: an unticked box requesting immediate access and acknowledging loss of withdrawal, plus an emailed confirmation.
- **After withdrawal (Art. 14(2a), inserted by Directive (EU) 2019/2161).** "In the event of withdrawal from the contract, the consumer shall refrain from using the digital content or digital service and from making it available to third parties" (consolidated text of 28 May 2022, re-read 2 Oct 2026, round 3g) [data]. Not legal advice; a lawyer must review how this interacts with any paid product before launch.
- **Withdrawal button from 19 June 2026 (new).** Directive (EU) 2023/2673 inserts Art. 11a into Directive 2011/83/EU: for distance contracts concluded by means of an online interface, the trader "shall ensure that the consumer can also withdraw from the contract by using a withdrawal function" labelled "withdraw from contract here" (or an unambiguous equivalent), "continuously available throughout the withdrawal period" and "prominently displayed"; after the consumer completes an online withdrawal statement, a "confirm withdrawal" function follows, and the trader must send an acknowledgement of receipt on a durable medium. Member States apply the measures from 19 June 2026 (Directive (EU) 2023/2673 Art. 2). Italy implements it as Codice del consumo art. 54-bis ("recedere dal contratto qui", "conferma recesso"), introduced by D.Lgs. 31 dicembre 2025, n. 209, which applies from 19 June 2026 "e ai contratti conclusi successivamente" (Normattiva note on art. 54-bis, read 2 Oct 2026) [data, primary]. How the button interacts with the 16(a)/16(m) waivers is a question for the lawyer; the safe design assumption is that any paid online checkout needs the button and the confirmation.
- **No size threshold.** Nothing read ties these rules to a turnover level. The right applies to each consumer sale by a trader, which is why H-c's second half is supported (below).
- **Gemini's "log the IP address" proposal** for the waiver is not required by anything read and conflicts with data minimisation; the lawyer can decide what evidence of consent to keep (timestamp, text version, order ID are the minimum a typical design needs).
- **Price display and unfair commercial practices (not read on primary pages).** The Gemini lead cites Directive 2005/29/EC and a 2021 Commission Notice on misleading omissions; neither was opened. Practical principle for the team: show the full consumer price including VAT before payment, state clearly what a paid tier unlocks and what it does not, and disclose any commercial relationship (affiliate links, sponsored placements, paid school listings) next to the item it affects. A named lawyer should review against the directive text and the Italian Consumer Code (arts 52, 54-bis and 59 were read on Normattiva in round 3a; the price-display and unfair-practice articles were not).

### 3.3 VAT on sales to EU consumers (test of H-c)

- **Rule as stated by the Commission.** "Below this EUR 10 000 threshold, supplies of TBE (telecommunications, broadcasting and electronic) services and distance sales of goods within the EU may remain subject to VAT in the Member State where the taxable person is established." The threshold is EU-wide since 1 July 2021 (European Commission OSS page, read 2 Oct 2026; no update date shown) [data, official]. In the Directive it is Article 59c(1)(c) of Directive 2006/112/EC: Art. 59c switches off the destination rule in Art. 58 where the supplier is established in one Member State and "the total value, exclusive of VAT, of the supplies ... does not in the current calendar year exceed EUR 10 000 ... nor did it do so in the course of the preceding calendar year"; if exceeded in the year, Art. 58 applies "as of that time" (59c(2)); and the Member State of establishment must let the supplier opt for destination taxation for at least two calendar years (59c(3)) (consolidated text of 1 Jan 2025, CELEX 02006L0112-20250101, read 2 Oct 2026) [data, primary]. Agenzia delle Entrate's FAQ adds that the threshold is calculated annually on the seller's VAT-exclusive turnover of the **previous calendar year** from such cross-border sales across the EU, that if it is exceeded during the year the earlier sales stay taxed in the seller's own state and destination-country VAT applies from the transaction that exceeds it, and that registering for OSS is optional (AdE, "Risposte alle domande più frequenti OSS – imprese", read 2 Oct 2026) [data, official]. The AdE page also says the threshold applies only to a company established in a single Member State.
- **Meaning for a small Italian seller (informational).** Selling a digital subscription to consumers in other EU countries below €10,000 a year can be taxed with Italian VAT; above it, VAT follows the customer's country and the OSS gives one quarterly return (AdE FAQ: for Q1 by 30 April) instead of registering in each country. The Italian rate and the treatment of a small business under Italy's flat-rate (forfettario) regime were **not** read and must be checked with a commercialista. The AdE page read does not address the forfettario regime.
- **Merchant-of-record route.** Paddle's help centre says it "acts as a reseller of your product, and is, therefore, the 'seller on record'" and so handles collection and payment of VAT (Paddle help, read 2 Oct 2026) [employer-stated]. Stripe Tax calculates and collects tax but, per its Italian page, "does NOT file" returns itself, offering partner automation or reports for self-filing, and lists €0.45 per transaction once registered (Stripe Tax page, read 2 Oct 2026) [employer-stated]. Fees and terms change; these are illustrations of two categories (see section 6.3).

**Verdict on H-c ("selling subscriptions to EU consumers triggers VAT OSS and withdrawal-right obligations from the first euro"): partly supported.** Withdrawal-right obligations: supported, with no threshold in anything read. **OSS: not supported as stated**: below €10,000 a seller may remain on home-country VAT, and OSS registration is optional. VAT itself, however, is due on the first sale unless a specific exemption applies (not researched).

### 3.4 "Advice" boundaries: immigration, tax, admissions

- **UK immigration advice.** Section 84(1) of the Immigration and Asylum Act 1999: "No person may provide immigration advice or immigration services unless he is a qualified person" (registered with the OISC, authorised by a designated professional body or regulator, or acting under supervision of such a person), revised to 30 Sept 2026. Section 82(1) defines "immigration advice" as advice that "relates to a particular individual", is given in connection with "relevant matters" (including applications for entry clearance or leave to enter or remain), and is given by a person who knows it is for a particular individual (legislation.gov.uk, read 2 Oct 2026) [data, official]. The OISC states it "regulates immigration advisers; ensuring they are fit, competent and act in their clients' best interests" (gov.uk OISC page, read 2 Oct 2026). A secondary summary in the search results states that giving such advice without being qualified is a criminal offence under s. 91 (not read in primary).
- **What follows (reading, not advice).** General statements of rules for everyone fall outside the s. 82 definition as written because they do not relate to "a particular individual". A tool that outputs "you are eligible for the Graduate visa" from a person's own inputs is closer to the line than one that shows the rule and conditions ("the route requires X; check GOV.UK"). Safer design: show rules, dates and conditions, link the official page, avoid "you will qualify" wording, and never help complete an application. Whether the OISC would regard a self-service calculator as "advice" was not found. The same question for other countries (Italy, France, Germany, Switzerland) was **not researched**.
- **Tax.** No official source was read on whether net-pay estimators or an "impatriati" simulator count as a reserved professional activity in Italy or Germany. The Gemini lead cites D.Lgs. 139/2005, Italian Criminal Code art. 348 and German StBerG/RDG; **none was opened**. Treat as an open question for a commercialista/avvocato. The product-map's "not tax advice" labelling and showing the statute and date is a sensible minimum, not a legal safe harbour.
- **Admissions.** Probability-style outputs on school admission are a prediction tool; no regulation specific to such calculators was found. The AI Act question is in 3.6.

### 3.5 Using school data, rankings and quotations

- **Database right.** The Commission's 2018 evaluation summary states that the sui generis right "protects databases regardless of their originality, as long as there has been substantial investment in obtaining, verifying or presenting the contents", calls it "the more controversial" right, and refers to the four 9 Nov 2004 CJEU rulings (including *British Horseracing Board v William Hill*, C-203/02) that narrowed it (SWD(2018) 147, Council doc ST 8467/18; text read 2 Oct 2026) [data, official]. The Gemini lead concludes that university employment reports are "created data" so extracting from them is free of database rights. That is **too strong**: the 2004 judgments concern investment in *creating* data as a by-product of a core activity, but a compiled table (such as a magazine's ranking, or a school's compilation) can involve investment in obtaining, verifying and presenting; and repeated or systematic extraction of even insubstantial parts can be a problem. Practical rule: **use facts, not tables.** Record a figure, its source, year and URL; link to the original; never copy a ranking or a report's table wholesale. This matches product/product-map.md's "do not republish FT tables".
- **Quotation.** The Italian copyright statute allows summary, quotation and reproduction of parts of a work for criticism or discussion "within limits justified by such purposes" and without competing with the work's economic use, with credit to title and author (Law 633/1941, art. 70, as summarised in a search-result excerpt of avvocato.it; WIPO Lex lists the law as consolidated to Law 142/2022). The primary text was not read; **verify before relying**. Limit any quotation to a short phrase with attribution.
- **Open-data and trade-mark points in the Gemini lead** (Directive 2019/1024 re-use of public university data; Art. 14 of the EU Trade Mark Regulation for naming schools and employers) were not opened and are listed under Claims to verify.
- **Scraping.** If any dataset is collected by automated means, check each site's terms and the text-and-data-mining rules of Directive 2019/790. Not researched.

### 3.6 EU AI Act (if AI features are added)

- The Commission's overview (page "last updated" 3 August 2026) lists four risk tiers: unacceptable, high, transparency and minimal. It says systems used in "education institutions, that may determine the access to education" are high-risk, and gives these dates: 2 Feb 2025 (prohibited practices and AI literacy), 2 Aug 2025 (governance and general-purpose AI), August 2026 (general enforcement and transparency rules), **2 December 2027 for high-risk systems in sensitive areas including education**, and 2 Aug 2028 for those embedded in regulated products. It says an "AI Omnibus" entered into force on 27 July 2026 and simplified timelines (Commission AI Act page, read 2 Oct 2026) [data, official].
- **For Admetia:** the calculator today is rule-based (README: points tables, hard gates, published thresholds), and it is applicant-side, so the education-admission high-risk category, which is about systems that determine access to education, is unlikely to be the one that applies. If a generative-AI assistant is added, the transparency tier (telling users they are talking to AI) becomes relevant. The exact Annex III wording and the post-Omnibus dates were **not read in the Regulation itself**; dates have moved before and may move again. Not legal advice; a lawyer must confirm.

## 4. Content liability and trust

**Not legal advice. Defamation law differs by country and Admetia's exposure depends on where a school or employer sues.** The two illustrations below show the shape of the principle only.

- **UK illustration (primary text read).** Defamation Act 2013 s. 2: it is a defence "to show that the imputation conveyed by the statement complained of is substantially true". Section 3 (honest opinion): the statement must be one of opinion, must indicate "the basis of the opinion", and "an honest person could have held the opinion" on the facts that existed at publication (legislation.gov.uk, read 2 Oct 2026) [data, official]. The lesson for editorial design: **separate checkable facts from judgements, show the facts the judgement rests on, and keep the evidence.**
- **Italian illustration (secondary only).** Search summaries of Italian Court of Cassation case law describe three limits on the rights to report (cronaca) and to criticise (critica): the truth of the facts reported, their pertinence (public interest) and "continenza" (a restrained form that does not turn into a gratuitous attack on reputation); for opinion, truth is required only of the facts on which the opinion rests (summaries on diritto.it and brocardi.it, found 2 Oct 2026; the judgments themselves were not read) [practitioner consensus, secondary]. This is the same shape as the UK defences, which is a reason to expect similar editorial practice to work, not a guarantee.
- **Whether Admetia is "press".** The Italian rules on registered periodicals and the right of reply (Law 47/1948) were not researched; whether an informational website counts is a lawyer's question.

**Editorial practice that follows (suggestions, not legal requirements):**
1. Quote the school's or ranking's own claim exactly, with source, year and URL, then say what is missing (denominator, coverage, horizon). Describe a claim as "incomplete" or "not comparable", not "false", unless a regulator or court has found it so (this is also the library brief's tone rule).
2. Keep a dated evidence file for every published critique (screenshot or PDF of the original at the date read).
3. Offer a **right of reply** in practice: before publishing a pointed comparison, send the school the figure and the reading; publish a dated reply or update, and keep a public corrections log with an address. No law read requires this for a website; it reduces both error and dispute.
4. Do not publish unverified user allegations about named schools or individuals; route them through the same verification as other claims.
5. Label opinion as opinion and show its basis (UK s. 3(3) logic).

## 5. Data moat and flywheel

### 5.1 What users could contribute

Ideas that fit the product: anonymous admission outcomes (school, programme, round, test band, result), offers and deposit decisions, first-job location and sector, and error reports on published data. Ideas that raise the legal and ethical stakes sharply: uploading offer or rejection letters, contracts or CVs (these carry identifiers), and free-text stories.

### 5.2 Legal and ethical conditions (my reading of the sources)

- **A user-submitted record is personal data unless it is truly anonymous.** The Article 29 Working Party's Opinion 05/2014 on anonymisation (10 April 2014; still the main reference, though pre-GDPR) says effective anonymisation must prevent three risks: **singling out**, **linkability** and **inference**, and that "removing directly identifying elements in itself is not enough". It notes that k-anonymity "aim[s] to prevent a data subject from being singled out by grouping them with, at least, k other" records but "does not prevent inference attacks", and its summary table shows aggregation/k-anonymity leaves linkability and inference as risks (WP29 WP216, read 2 Oct 2026, pp. 9–17, 24) [data, regulator guidance]. The EDPB's Guidelines 01/2025 on pseudonymisation (adopted 16 January 2025, public-consultation version) exist and were not read in depth. **No legal minimum "k" was found**; any threshold (such as 10 or 20 records per published cell) is a design choice, to be set conservatively and reviewed.
- **Consent and purpose.** Collecting outcomes from users needs a clear purpose, a lawful basis (consent is the natural one for voluntary reporting, Art. 6(1)(a)), a notice, and a way to withdraw. The EDPB SME guide (read 2 Oct 2026) says consent must be "freely given, informed, specific and unambiguous" and cannot be bundled across purposes [data]. **Do not make consent a condition of seeing results** that the user could otherwise get.
- **Incentives.** The Gemini lead proposed paying contributors with free Pro access. A reward is not prohibited by anything read, but it affects whether consent is "freely given"; and a reward for admits only would worsen bias. Reward all outcome types equally.
- **Special categories.** Avoid collecting health, ethnicity, religion or similar. Nationality alone is not special-category, but combined with a small cohort (one Italian admitted to one programme in one year) it can single someone out. Publish only aggregates with minimum cell sizes and suppress small cells.
- **Verification.** Levels.fyi documents a three-tier method (document extraction, corporate-email verification, screened anonymous submissions) (Levels.fyi about page, read 2 Oct 2026) [employer-stated]. For Admetia the data-protection-safer pattern is verify-then-delete: read an uploaded document or a school-email confirmation, store only the verified outcome fields and delete the document. Whether to ever accept documents is a decision with the lawyer, because uploads enlarge the data held.

### 5.3 Data-quality problems of GradCafe-style data

- GradCafe's homepage advertises "over 840,000 contributors" and "over 250 graduate schools" (thegradcafe.com, read 2 Oct 2026) [employer-stated], and its terms disclaim representations of "accuracy" for the site and forum content (thegradcafe.com/terms, read 2 Oct 2026). Its top "most submitted" programmes shown on the home page are US programmes across many fields, not European business master's.
- An academic user of the data lists the limitations as: the data "is self-reported", the sample is "limited and to some extent biased", reporters are likely to be "very interested in continuing to graduate programs" and to be better students, and the analysis "does not correct for the quality of the programs" applied to (Makkinje, "An Analysis of Physics Graduate Admission Data", arXiv:1504.03952, April 2015) [anecdotal: one author, physics, 2015, expectations rather than measured bias].
- The structural issues for any self-report outcome database follow from the above and are well known in survey practice: **no denominator** (you see reports, not applicants), **self-selection** (people who got in post more, or people who did not post less), **unverifiable values**, **mixed cycles and versions of tests**, and **duplicate or false entries**. This library already warns about the same issues in school employment reports (see evidence/how-numbers-mislead.md). Mitigations: show counts and the share that are verified, label unverified outcomes, never turn a handful of reports into a probability, and display "n = x" on every aggregate.

### 5.4 Is it a moat?

Competitors read already run user-result databases (GradCafe, GMAT Club's decision tracker, Levels.fyi for pay). Admetia's possible edge is a **European, business-master's, verified, aggregated** dataset. That edge requires scale in a narrow audience and long time, and the legal care above. **No evidence was found on how much contribution a niche audience will give;** the Gemini "100k+ profiles a year" figure is unsupported. Until contributions exist, the realistic moat is the maintained, dated, source-tagged rules and employer data the library already produces, plus the trust record.

## 6. Platform and technical constraints

### 6.1 GitHub Pages: what the official documentation says

- **Limits.** Source repository 1 GB (recommended), published site 1 GB maximum, soft bandwidth limit 100 GB a month, builds time out after 10 minutes, soft limit of 10 builds per hour (does not apply to custom GitHub Actions workflows) (GitHub Docs, "GitHub Pages limits", read 2 Oct 2026; no date shown) [employer-stated].
- **Commercial-use restriction (important for a paid launch).** GitHub states: "GitHub Pages is not intended for or allowed to be used as a free web-hosting service to run your online business, e-commerce site, or any other website that is primarily directed at either facilitating commercial transactions or providing commercial software as a service (SaaS)." It also prohibits using Pages for sensitive transactions such as passwords or credit-card numbers (same page). A free, informational site is not the same as a site whose main purpose is selling access; **a paid tier hosted on GitHub Pages sits close to this sentence**. The safe reading is: payments and any account area live on a different host or provider (hosted checkout), and Pages stays an informational front end, or the whole site moves to a host whose terms allow commerce. Confirm with GitHub's terms and support before launch.
- **No server-side code** is available on Pages, consistent with the repo (static HTML, JS, JSON; `sw.js` service worker). Custom response headers and server logic were not documented on the page read.

### 6.2 Which planned tools (product-map T1–T14) can stay client-side

| Tool | Client-side feasible? | Needs a backend when |
|---|---|---|
| T1 calendar (generic and personalised) | Yes: static JSON + local computation; PDF/print and `.ics` export in the browser | Alerts, cross-device sync, or "save plan to account" |
| T2 work-access filter | Yes | Never, except to count usage |
| T3 net-minus-rent comparator | Yes (static tax parameters) | Never; but tax-correctness and "not tax advice" labelling matter more than architecture |
| T4 cost calculator | Yes | Never |
| T5 window checker | Yes | Never |
| T6 rankings decoder | Yes, if only derived flags are stored (see 3.5) | Never |
| T7 pipeline explorer | Yes: large static JSON, lazy-loaded; data maintenance is the cost, not hosting | Never |
| T8 career comparator | Yes | Never |
| T9 Italy classifier / return planner | Yes | Never |
| T10 offer and deposit helper | Yes, if offers stay on-device | Reminders by email |
| T11 myth quiz | Yes | Shareable score pages need no server if state is in the URL fragment |
| T12 alerts | **No** | Always: needs an address store, a sender and consent records |
| T13 fact-check desk / Report X-ray | Yes | Never; right-of-reply and correction inbox is an email address |
| T14 red-team checks | Yes | Never |
| Paid access control | **Not securely** | Any paywall on static files is only a convenience: JSON on a public site is downloadable by anyone, so truly paid datasets (T7, T3 parameters) need server-side or edge-side access control, or accept that "paid" means "convenience and personalisation", not secrecy |

The last row matters commercially: the product-map's paid tier is mostly **personal calculation on public data**. If the data files are public, paying customers pay for the tool and the freshness, not for secrecy; the legal and business design should say so (see competitor note in section 1: PrepLounge and BIWS sell training content behind logins).

### 6.3 Where a backend becomes necessary, and the privacy trade-off

| Need | Smallest backend | Privacy trade-off |
|---|---|---|
| Take payment | Hosted checkout from a payment provider or merchant of record (no card data on the site) | The provider becomes a data recipient; the buyer's email, country and payment data exist outside the browser; withdrawal-right and VAT records must be kept (section 3.2–3.3) |
| Unlock paid features | A token or signed link checked at the edge or in a small function | Introduces an identifier and cookies/storage for login (check ePrivacy exemption, section 3.1) |
| Alerts | An email-service provider holding addresses | Controller duties, processor contract, retention, consent records |
| Cross-device saved plans | A database | Moves answers off-device, which ends the "never leaves your browser" claim for that feature; offer it as an explicit, optional, separate mode, ideally end-to-end encrypted or exportable file instead |
| User-submitted outcomes | A form endpoint and storage | Section 5 applies in full |

A **file-based alternative** keeps the promise: let users export their plan as a file or a link containing the plan in the URL fragment, and re-import it, so no account is needed. This is an engineering option not researched for security; URL fragments are not sent to servers in ordinary HTTP requests, but they remain in browser history.

**Service worker and offline.** The site's `sw.js` caches the shell and media on first use and falls back to the cache when offline. That supports offline use of the calculators and means data in the cache is not refreshed until the next online visit, so stale-date logic must not depend on the network (the repo's deadlines banner is computed locally).

**Neutral categories of platform, with official pages read (examples only, no recommendation):**

| Category | Example | What the official page says (read 2 Oct 2026) |
|---|---|---|
| Merchant of record | Paddle | Acts as reseller and "seller on record", responsible for collecting and paying VAT instead of the seller (Paddle help centre) |
| Payment processor with tax calculation | Stripe Tax | Calculates and collects tax; does not file returns itself; €0.45 per transaction when registered (Stripe Italian page) |
| Anonymous analytics | GoatCounter | No cookies; stores aggregate data; says consent probably not needed (vendor view) |
| Consent management | Not researched | Only needed if non-exempt trackers are added; the Garante's 2021 guidelines set rules for banner design (read via summary) |

Fees and terms change; verify on the day. A third category, **hosted email services**, was not researched.

## Hypotheses tested

**H-a. "No competitor offers evidence-tagged, Europe-first, Italian-language master's decision support."**
- Verdict: **partly supported.**
- Holds when: the test is the combination of all four features among players whose pages could be read (section 1.4).
- Fails where: MiM Compass already offers a European, multilingual (Italian included) directory with deadlines and the FT ranking; 11 named players were unreadable; "not advertised" is not "not available"; a general-purpose AI assistant can approximate parts of it.
- Evidence: MiM Compass home page (2 Oct 2026) [employer-stated]; MiM-Essay tool page [employer-stated]; GMAC Program Finder FAQ [employer-stated].

**H-b. "A privacy-first, client-side design lowers GDPR compliance burden materially."**
- Verdict: **supported with conditions.**
- Holds when: answers never leave the browser; analytics is aggregate and non-identifying; no accounts, email, payments or free text.
- Fails where: host logs, local storage and analytics still need notices and possibly consent analysis; any server-side feature restores controller duties; a lawyer must confirm the localStorage and analytics exemptions.
- Evidence: EDPB Guidelines 2/2023 pt 44 [data, regulator guidance]; Garante 2021 guidelines [data, via summary]; GitHub privacy statement [employer-stated].

**H-c. "Selling digital subscriptions to EU consumers triggers VAT OSS and withdrawal-right obligations from the first euro."**
- Verdict: **partly supported** (withdrawal yes, OSS no).
- Holds when: the buyer is a consumer and the seller is a trader (withdrawal right has no threshold in any text read); VAT itself is due from the first sale unless an exemption applies.
- Fails where: the €10,000 EU-wide threshold allows home-country VAT below it, and OSS registration is optional (Commission OSS page; AdE FAQ) [data, official].
- Not tested: Italian VAT rate and forfettario status; UK VAT for UK consumers.

**H-d (own). "Static hosting plus a paywall protects paid datasets."**
- Verdict: **not supported.**
- Reason: any JSON served from a public static site can be fetched by anyone who knows the URL; GitHub Pages has no server-side access control (the limits page documents no such feature). The paid value therefore has to be personalisation, freshness and convenience, or the data must sit behind a server.
- Evidence: architecture reasoning from the repo plus GitHub Pages documentation [data, vendor docs]; no empirical study.

**H-e (own). "GitHub Pages can host the paid product as it stands."**
- Verdict: **not supported on the documentation read.**
- Reason: the quoted restriction on sites "primarily directed at … facilitating commercial transactions". A free informational site with an external checkout is a different case that GitHub's terms do not clearly address.
- Evidence: GitHub Docs, Pages limits [employer-stated].

**H-f (own). "Anonymised, k-anonymous outcome tables are safe to publish."**
- Verdict: **not supported as stated.**
- Holds when: cells are large, attributes coarse and inference risk assessed.
- Fails where: small cohorts (one nationality, one programme, one year) single people out; k-anonymity does not stop inference or linkage.
- Evidence: WP29 Opinion 05/2014, section 3 and Table 6 [data, regulator guidance].

**H-g (own). "Free incumbent sources anchor willingness to pay for information near zero, so a master's decision tool must sell personal, time-bound outputs."**
- Verdict: **insufficient evidence; mildly supported.**
- Evidence: GMAC 2025 shows school and GMAC sites as the top sources (including Italy) [data]; paid products found are training, coaching or tests, not information tools [employer-stated]. No WTP study exists.

**H-h (own). "Consultancies run free calculators as lead generation, so their methodology disclosure is minimal."**
- Verdict: **partly supported.**
- Evidence: MiM-Essay's page discloses a claimed calibration and no limitations, collects email and phone, and routes to paid consulting; Accepted pairs its quiz with a free consultation [employer-stated]. Only two tools were examined, and intent is inferred, not stated.

## Common mistakes and myths

1. **"It runs in the browser, so GDPR does not apply."** The EDPB's position (pt 44) is narrower: browser processing that does not leave the device is not "access" under ePrivacy 5(3). Host logs, local storage, analytics, and any email or payment still bring duties (sections 3.1, 6). [data, regulator guidance; my reading]
2. **"Anonymous because there is no name."** WP29 says singling out, linkability and inference must all be addressed; small cells identify people. [data]
3. **"OSS registration is mandatory from the first euro."** Not on the Commission and AdE pages read: the €10,000 threshold applies and OSS is optional. But VAT still applies and withdrawal rights apply from the first sale. [data]
4. **"A disclaimer cures advice risk."** Statutory definitions turn on what is done (UK s. 82: advice relating to a particular individual), not on labels. A disclaimer helps but does not change the activity. [data, UK law]
5. **"BHB v William Hill means school data is free to copy."** The Commission's own summary stresses protection for obtaining, verifying or presenting; the case narrows, not abolishes. [data]
6. **"One checkbox waives the withdrawal right for any digital product."** Content and services are treated differently (Arts 16(m), 16(a), 14(3)), and the durable-medium confirmation is a third condition of the 16(m) exception. [data, primary text, consolidated 28 May 2022]
7. **"We can use US advertising rules."** The Gemini lead leans on the FTC endorsement guides; for an EU-facing site the relevant framework is EU and Italian consumer law, not read here.
8. **"A paid tier on a static site is protected."** Public JSON is downloadable (H-d).
9. **"Consent banner always needed" or "never needed for analytics."** Both are over-simple: the Garante accepts aggregate analytics without consent under conditions, and EDPB's reading of 5(3) is broad; the answer depends on what is sent and how. [data]

## Decision rules

1. **If** a feature needs an email address, account, payment, uploaded document or free-text field, **then** treat it as a new data-protection project (notice, lawful basis, processor contract, retention) **because** the client-side exemption ends there (section 3.1).
2. **If** the answer to an input question could reveal health, ethnicity or religion, **then** do not ask it, or keep it on-device with no transmission, **because** Article 9 prohibits processing unless an exception applies.
3. **If** a paid product is delivered online, **then** build checkout with an unticked "start now and lose withdrawal right" box, an emailed confirmation on a durable medium and, from 19 June 2026, a "withdraw from contract here" function with a "confirm withdrawal" step, and have a lawyer decide whether it is digital content or a service, **because** the rules differ (Arts 16(a), 16(m), 14(3), 11a).
4. **If** annual cross-border B2C sales to EU consumers could pass €10,000 (previous or current year), **then** plan OSS registration or a merchant of record before they do, **because** VAT then follows the customer's country (Commission, AdE).
5. **If** the paid tier runs on GitHub Pages, **then** move checkout and any account area to a separate provider and get GitHub's position in writing, **because** Pages' terms restrict sites primarily for commercial transactions.
6. **If** a dataset must stay exclusive, **then** put it behind a server or edge check; **if** it is public JSON, **then** price the personalisation and freshness, not the data (H-d).
7. **If** an output could be read as "you qualify for visa X", **then** rephrase as the published rule and conditions with a link to the official page, **because** UK s. 82 targets advice relating to a particular individual.
8. **If** using a school's or magazine's table, **then** store individual facts with source, year and URL and link out, **because** database right and copyright may protect the compilation.
9. **If** publishing a critique of a named school, **then** quote its claim, show the evidence and basis, label opinion, keep the evidence file, and send a right-of-reply note first, **because** truth and honest-opinion-style defences depend on showing the basis (UK ss. 2–3 as illustration).
10. **If** publishing aggregates from user-submitted outcomes, **then** suppress cells below a conservative n, show n and the verified share, and never convert a handful of reports into a probability, **because** k-anonymity does not prevent inference and self-report data has no denominator.
11. **If** analytics is on, **then** keep it aggregate, honour Do Not Track and Global Privacy Control as the repo does, disclose it in the privacy notice, and get the lawyer to confirm whether consent is needed.
12. **If** adding a generative-AI assistant, **then** disclose it to users and re-check the AI Act timeline on the Commission page, **because** transparency duties apply and dates have moved.
13. **If** pricing, **then** test with a fake-door click test before building, **because** no WTP data exist (section 2).

## What this changes in the site

1. **Privacy notice and footer (now).** Add a plain-language notice stating exactly what stays in the browser, what the host and counter receive, and the localStorage use; keep the opt-out and DNT/GPC behaviour. Do not claim "no data is collected" because the host receives request data.
2. **Paid-launch gate (before any payment).** A checklist page for the team: lawyer review of terms and checkout, commercialista on VAT/forfettario, choose merchant of record or processor, solve the GitHub Pages commerce restriction, withdrawal-waiver checkbox and confirmation email.
3. **Wording rules in tools.** In T1, T2, T3 and T9 replace "you are eligible" with rule-and-condition language, show the statute or official page and a `checked` date, and keep the existing "estimate, not tax or immigration advice" labels. Do not add free-text fields.
4. **Fact-check desk (T13) editorial protocol.** Add a right-of-reply and corrections log page and an evidence file for each critique; use "incomplete" or "not comparable" wording.
5. **Data hygiene.** In `pipelines.json` and ranking-related data store facts with source and year, not copied tables; add a licensing note per source.
6. **Flywheel (later).** Start with an error-report form and an opt-in, aggregate-only outcome survey after a lawyer reviews; no uploads at first. Every aggregate shows n.
7. **Positioning copy.** Use factual comparisons only ("answers stay in your browser", "every number shows source and date") and avoid claims about competitors beyond what was read.

## Corrections to the Gemini leads

1. **PrepLounge price.** Gemini: "Premium €69–€79/yr". The PrepLounge page read shows **€79, one-off for one year (not a subscription)** and "Premium + Coaching from €199"; €69 was not seen.
2. **Prices not verifiable.** WSO Academy $6,000–$9,000, CaseCoach €43/month or €171/year, Crimson $10,000–$30,000+, MBA Crystal Ball $1,500–$4,500, Leland $150–$650/hr, Studyportals €1,000–€2,500 per student: the pages were blocked or showed no price (Leland and MBA Crystal Ball home pages show none; CaseCoach's pricing URL returned 404). Treated as unverified.
3. **GMAT Club tests.** The $99.95–$189.95 range matches a search snippet of gmatclub.com/tests_new (Starter $99.95, Pro $139.95, Elite $189.95 for 3 months), but the page itself returned 403; the "$19.99–$29.99/mo forum quiz" was not found.
4. **VAT threshold attribution.** Gemini attributes the €10,000 threshold to Article 58 and implies OSS from the threshold. The threshold sits in Article 59c(1)(c) of Directive 2006/112/EC; Article 58 is the place-of-supply rule that Article 59c disapplies below the threshold (read in the consolidated text, round 3a), so Gemini pointed at the neighbouring article, not the threshold. The Commission and AdE pages say OSS registration is optional. The UK VAT registration, the municipal-surcharge worry for Stripe and the Italy 22% rate were not sourced.
5. **Withdrawal waiver detail.** Art. 16(m) is stated broadly right, but Gemini omits the durable-medium confirmation (not in primary text read) and the different regime for services (Art. 16(a), 14(3)); its IP-address logging is not required and conflicts with minimisation.
6. **Database right.** The "created data, so free to extract" conclusion from *BHB v William Hill* is overbroad (section 3.5). The Directive 2019/1024 and Art. 14 EUTMR claims were not opened.
7. **FTC guides.** US rules are not the governing framework for an EU/Italy-facing site.
8. **Impatriati.** Gemini cites D.Lgs. 209/2023; the library's verified fact says the regime now sits in art. 225 D.Lgs. 117/2026 (see places/italy-playbook.md).
9. **Churn, CAC and LTV/CAC figures.** "73–96% 90-day churn (OpenView)" and the CAC/LTV tables were not found in any source read; the only retention figures found are RevenueCat's one-year 27–28%.
10. **AI Act.** The high-risk education category exists, but the date (2 Dec 2027 per the Commission page after the AI Omnibus) was missing from Gemini, and the applicant-side/rule-based point was only noted as unsettled.
11. **Liability cap and "mandatory disclaimer" text.** Presented as settled; enforceability against consumers was not researched.

## Numbers to treat with care

| Figure | Why |
|---|---|
| GMAT Club Tests $99.95 / $139.95 / $189.95 | Search snippet of the player's page; page itself blocked |
| GMAT exam fee US$275 in person / US$300 online; reschedule from US$55 | Search summary of mba.com; official fee pages blocked |
| PrepLounge €79 and €199; BIWS $497; Levels.fyi coaching and report prices; Stripe €0.45 per transaction | Single-source vendor pages, read 2 Oct 2026; prices change |
| GMAC 2025 country source percentages (Italy mba.com 55%, school websites 52%, FT 38%) | Read from figure text in a PDF (chart-read); only the 52% global figure is stated in prose; survey is of graduate management candidates, not MiM-specific |
| RevenueCat 2.1% / 10.7% conversion and 27% / 28% retention | Vendor summary of mobile-app data; no education or web breakdown |
| "840,000 contributors", "250 graduate schools" (GradCafe); "270K programmes" (Studyportals); "2,400 programmes" (MiM Compass); "580,000 members" (PrepLounge); "13,000+ applicants, 98% admit rate" (MiM-Essay) | Self-reported marketing claims |
| Makkinje arXiv paper on GradCafe bias | One author, physics, 2015; expectations, not measured |
| Legal text quotes via legislation.gov.uk (CRD version of 1 July 2018) and gdpr-info.eu | Not the current official EU consolidated texts |
| Garante section references (5, 6.1, 6.2, 7.2) | Taken from a page summary of the guidelines |
| Italian defamation criteria (truth, pertinence, continenza) | Secondary summaries only |

## Claims to verify

1. Whether `localStorage` auto-saving of answers and language is covered by the "strictly necessary / explicitly requested" exemption and the Garante's technical-cookie category (sections 5 and 6 of the guidelines). Where seen: EDPB Guidelines 2/2023 fn.; Garante page summary.
2. Whether GoatCounter-style analytics (page, referrer, screen width, events, no IP stored) needs consent in Italy under Garante section 7.2 and EDPB point 51. Seen: GoatCounter GDPR page (vendor claim).
3. What GitHub logs for Pages visitors and under what controller or processor role. Seen: GitHub General Privacy Statement (general wording only).
4. Whether GitHub's Pages commercial-use sentence blocks a site with an external checkout. Seen: GitHub Docs, Pages limits.
5. Directive 2011/83/EU as amended: the primary text of Arts 14, 16 and the durable-medium confirmation were read in round 3a (see verification/round-3a.md). Still open: whether Admetia's own paid product is "digital content" or a "digital service" (recital 30 of 2019/2161 points to service rules for continuously supplied web applications), and how the Art. 11a withdrawal function interacts with the 16(a)/16(m) waivers.
6. Italian Consumer Code transposition and price-display rules; UCPD and 2021 Commission Notice on misleading omissions and ranking transparency. Seen: Gemini only.
7. Italian VAT standard rate for digital services, forfettario sellers' VAT/OSS position, UK VAT for UK consumers, and Italian record-retention periods. Seen: not read (AdE FAQ silent on forfettario).
8. Article numbers: where the €10,000 threshold sits in Directive 2006/112/EC (resolved in round 3a: Art. 59c(1)(c); Art. 58 is the rule it disapplies).
9. UK s. 91 offence wording and OISC's view of self-service eligibility tools; the same issue in Italy, France, Germany, Switzerland. Seen: search-result summary of s. 91.
10. Whether net-pay and "impatriati" calculators are reserved activities in Italy (D.Lgs. 139/2005, Criminal Code art. 348) or Germany (StBerG, RDG). Seen: Gemini only.
11. The text of Law 633/1941 arts 70 and 102-bis and Directive 96/9/EC arts 7–9; the CJEU judgments C-203/02 and the other three of 9 Nov 2004. Seen: Commission summary; search-result excerpt of art. 70.
12. Directive 2019/1024 (open data) applicability to universities' reports; EUTMR Art. 14 nominative use; Directive 2019/790 text-and-data-mining. Seen: Gemini only.
13. CJEU C-634/21 (*SCHUFA*) and whether an applicant-side score could ever be "automated decision" under GDPR Art. 22. Seen: Gemini only.
14. Italian digital-consent age (14?) and the right of reply (Law 47/1948) for websites. Seen: not read.
15. AI Act: exact Annex III point 3 wording, the Omnibus text and dates, transparency obligations for chatbots. Seen: Commission overview page only.
16. Enforceability of liability caps and exclusion clauses against consumers in an EU/Italian context. Seen: Gemini only.
17. Prices of unread players (Management Consulted, WSO, MBAMission, Menlo, Prepory, CaseCoach, Leland, MBA Crystal Ball) and their data practices.
18. Contribution willingness and WTP of Italian/European master's applicants (needs the fake-door test in 2.5).

## Sources

Dates are read dates (2 Oct 2026) unless stated; "snippet" means a search result or summary only.

**Competitors and pricing**
- GMAT Club start page: https://gmatclub.com/tests-beta/dashboard/startfree.html (read by curl; "Admissions Consulting Packages from $750", marketplace deals, "$500 Prodigy Loan Cashback", Decision Tracker). Tests prices: https://gmatclub.com/tests_new (snippet; 403).
- Poets&Quants home: https://poetsandquants.com/
- Accepted home and quiz: https://www.accepted.com/ ; https://accepted.com/mba-quiz
- GMAC Program Finder FAQ: https://www.gmac.com/tools/program-finder/program-finder-faqs
- MiM Compass: https://www.mim-compass.com/
- MiM-Essay profile evaluation: https://mim-essay.com/profile-evaluation
- MBA Crystal Ball: https://www.mbacrystalball.com/
- Leland: https://joinleland.com/
- GradCafe home and terms: https://www.thegradcafe.com/ ; https://www.thegradcafe.com/terms
- Studyportals and Mastersportal: https://studyportals.com/ ; https://www.mastersportal.com/
- Edvoy: https://www.edvoy.com/
- PrepLounge pricing: https://www.preplounge.com/en/pricing
- BIWS comparison page: https://breakingintowallstreet.com/biws-vs-wall-street-prep-comparison
- Levels.fyi about: https://www.levels.fyi/about/
- TargetJobs: https://targetjobs.co.uk/
- GMAC Prospective Students Survey 2025 (PDF): https://www.gmac.com/-/media/files/gmac/research/prospective-student-data/2025/2025_pss_final.pdf
- RevenueCat State of Subscription Apps 2026 summary (published 19 Mar 2026): https://www.revenuecat.com/blog/growth/subscription-app-trends-benchmarks-2026.md
- GMAT fees (snippet via search of mba.com and gmac.com; pages blocked): https://www.gmac.com/gmat-other-assessments/about-the-gmat-focus-edition/gmat-focus-edition
- Not read (blocked or no data): Management Consulted, WSO, MBAMission, Prepory, eFinancialCareers, Glassdoor, Bright Network, CaseCoach pricing, Indeed, LinkedIn Learning, Menlo.

**Legal and regulatory**
- EDPB Guidelines 2/2023 v2.0, adopted 7 Oct 2024 (PDF): https://www.edpb.europa.eu/system/files/2024-10/edpb_guidelines_202302_technical_scope_art_53_eprivacydirective_v2_en_0.pdf
- EDPB SME guide, lawful processing: https://www.edpb.europa.eu/sme-data-protection-guide/process-personal-data-lawfully_en
- GDPR Art. 9 text (non-official reproduction, superseded by the primary text below): https://gdpr-info.eu/art-9-gdpr/
- Primary EU texts read 2 Oct 2026 via the Publications Office (Cellar; EUR-Lex itself blocks automated readers): Directive 2011/83/EU consolidated 28.05.2022, https://publications.europa.eu/resource/celex/02011L0083-20220528 (ELI http://data.europa.eu/eli/dir/2011/83/oj); Directive (EU) 2019/2161, https://publications.europa.eu/resource/celex/32019L2161 (OJ L 328, 18.12.2019); Directive (EU) 2019/770, https://publications.europa.eu/resource/celex/32019L0770 (OJ L 136, 22.5.2019); Directive (EU) 2023/2673, https://publications.europa.eu/resource/celex/32023L2673 (ELI http://data.europa.eu/eli/dir/2023/2673/oj); GDPR consolidated, https://publications.europa.eu/resource/celex/02016R0679-20160504; Directive 2002/58/EC consolidated 19.12.2009, https://publications.europa.eu/resource/celex/02002L0058-20091219; Directive 2006/112/EC consolidated 1.1.2025, https://publications.europa.eu/resource/celex/02006L0112-20250101 (each fetched with headers Accept: application/xhtml+xml, Accept-Language: eng)
- Normattiva, Codice del consumo (D.Lgs. 206/2005) arts 52, 54-bis, 59: https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:2005-09-06;206~art59 (and ~art52, ~art54bis); D.Lgs. 21/2014: https://www.gazzettaufficiale.it/eli/id/2014/03/11/14G00033/sg
- Garante cookie guidelines, 10 June 2021: https://gpdp.it/garante/doc.jsp?ID=9677876
- GoatCounter GDPR page: https://www.goatcounter.com/gdpr
- Article 29 WP Opinion 05/2014 (WP216), 10 Apr 2014: https://ec.europa.eu/justice/article-29/documentation/opinion-recommendation/files/2014/wp216_en.pdf
- EDPB Guidelines 01/2025 on pseudonymisation (listed, not read in depth): https://www.edpb.europa.eu/system/files/2025-01/edpb_guidelines_202501_pseudonymisation_en.pdf
- Your Europe, returns and withdrawal: https://europa.eu/youreurope/citizens/consumers/shopping/returns/index_en.htm
- Directive 2011/83/EU Arts 14 and 16 (UK-hosted EU text, 2018 version): https://www.legislation.gov.uk/eudr/2011/83/article/16 ; https://www.legislation.gov.uk/eudr/2011/83/article/14
- Commission OSS page: https://vat-one-stop-shop.ec.europa.eu/index_en
- Agenzia delle Entrate OSS FAQ: https://www.agenziaentrate.gov.it/portale/risposte-alle-domande-piu-frequenti-oss-imprese
- Paddle help (merchant of record): https://www.paddle.com/help/start/intro-to-paddle/how-paddle-is-able-to-take-on-your-vat-and-tax-responsibilities
- Stripe Tax (Italian page): https://stripe.com/tax
- Immigration and Asylum Act 1999 ss. 82, 84: https://www.legislation.gov.uk/ukpga/1999/33/section/82 ; https://www.legislation.gov.uk/ukpga/1999/33/section/84
- OISC: https://www.gov.uk/government/organisations/office-of-the-immigration-services-commissioner
- Defamation Act 2013 ss. 2, 3: https://www.legislation.gov.uk/ukpga/2013/26/section/2 ; https://www.legislation.gov.uk/ukpga/2013/26/section/3
- Commission database-directive evaluation summary SWD(2018) 147 (Council copy): https://data.consilium.europa.eu/doc/document/ST-8467-2018-INIT/en/pdf
- Italian copyright law 633/1941 (WIPO Lex listing, consolidated to Law 142/2022): https://www.wipo.int/wipolex/en/legislation/details/21564 ; art. 70 summary from a search result (avvocato.it), not read in primary.
- Italian defamation criteria (secondary, not read in full): diritto.it and brocardi.it search results, 2 Oct 2026.
- European Commission AI Act overview (updated 3 Aug 2026): https://digital-strategy.ec.europa.eu/en/policies/regulatory-framework-ai
- GitHub Pages limits: https://docs.github.com/en/pages/getting-started-with-github-pages/github-pages-limits
- GitHub General Privacy Statement (effective 27 Apr 2026): https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement
- Makkinje, "An Analysis of Physics Graduate Admission Data", arXiv, Apr 2015: https://arxiv.org/pdf/1504.03952

**Repository and lead files**
- /Users/alessandro/Documents/Vibe Coding Projects/admetia/README.md; js/stats.js; sw.js; research/product/product-map.md
- Gemini lead (not relied on): /Users/alessandro/Documents/Vibe Coding Projects/admetia Gemini/research/v2/breadth/business-and-legal-of-admetia.md
