---
title: Round 6a: claim-by-claim check of an external audit
last_researched: 2026-10-04
scope: An external review (a Gemini-based multi-agent audit, pasted by the owner on 4 Oct 2026) listed errors in the research library and the Atlas. Each claim was checked against the repository and, where it depended on a fact, against a primary or official source. This file records the verdict and every edit made.
confidence: medium to high on the verdicts that rest on a file read or an official page; lower where only search summaries were available (marked).
review_by: 2027-03-31
---

# Round 6a: external audit check

Method: grep and read the library and the Atlas data for what the audit says is missing or wrong; fetch the official page for any figure the audit asserts; edit only where the audit was right or partly right. Verdicts: **False** (the library already had it, or the audit's fact is wrong), **Partly true**, **True**.

## Summary

Roughly half of the audit's points were false or already covered. The real defects were: missing English-test rules, missing application-platform and ATS content, Milan costs estimated with a Turin proxy, a circular cross-reference, "scraper" wording leaking into user-facing Atlas notes, an allegation filed under a "proven cases" heading, a thin glossary, and a handful of unwritten career families. Several of the audit's own figures were wrong (BNL loan ceiling, TAGE MAGE scale, apprentice pay, UK advance-rent practice).

## The four "critical errors"

| # | Audit claim | Verdict | Evidence | Action |
|---|---|---|---|---|
| 1 | Scraper pathology: Japan and Taiwan have no IT hubs; Switzerland no business hub; leading employers dropped because pages blocked or lacked an address; sentences like "Temasek: access denied" appear in published text | **Partly true** | Atlas notes did say "refused automated access" in about 30 places (e.g. data/atlas/sg.js, nl.js, de.js). Tokyo IT and Zurich/Basel business are rated `gap` (shown as "not rated"), as the test suite allows when no citable source exists. Hsinchu has IT standing 4/2/2, not zero; Dublin IT is rated dominant. TSMC and MediaTek were not named | Rewrote all those notes in plain language ("no source we can cite was read") in English and Italian. Added TSMC (Hsinchu), Sony, Mizuho and Nomura (Tokyo) from their SEC EDGAR filings as employer-stated claims. Ratings unchanged: no new statistic was found for Tokyo IT, Zurich business or Dublin big-tech names, and a rating without a source would break the Atlas rule. Still open: Mitsubishi UFJ, SMBC, MediaTek, Temasek, GIC, Nestlé, Google/Meta/Microsoft in Dublin |
| 2 | Italian master's legal trap not explained (LM 120 CFU vs Master I livello 60 CFU; concorsi, albo; equivalence via Art. 38 D.Lgs. 165/2001) | **False** | places/italy-playbook.md §1 and bottom line 7, glossary, evidence/hypotheses.md IT-5 and decisions/school-types-and-accreditation.md already explain the difference, the DM 270/2004 art. 3 basis and the Funzione Pubblica equivalence (art. 38; DPR 189/2009) | None needed |
| 3 | Files call interview-prep guides "folklore" and skip the technical content (3-statement links, EV bridge, DCF, case frameworks) | **Partly true** | The "folklore" word applied to two vendor-invented benchmarks (a percentile cut-off and "40-60 mock cases"), not to preparation; the file says case-only prep is a blind spot. But there was no list of the technical core | Added applications-and-interviews.md §2.3 stating that "no evidence for paid coaching" does not mean "do not prepare", with the technical topics tagged as practitioner consensus |
| 4 | Costs hide the UK £13,761 held 28 days, the German €11,904 blocked account, and London advance-rent demands of 6 to 12 months | **Mostly false, one part outdated** | money/costs-and-funding.md already gave £1,529 x 9 = £13,761 held 28 consecutive days and €11,904. The 28-day rule also requires the period to end within 31 days of the application (GOV.UK, read 4 Oct 2026). "6 to 12 months' rent upfront" was a common practice but, from 1 May 2026, landlords in England cannot require more than one month in advance and councils can fine up to £5,000 (GOV.UK Renters' Rights Act guidance) | Added the 31-day detail, a note that the higher €1,091 German figure belongs to the Chancenkarte, and a rent/advance-rent paragraph with the 2026 law |

## `research/decisions/` and `research/it/`

| Claim | Verdict | Evidence / action |
|---|---|---|
| Old GMAT scores (LBS MFA 703, CEMS 600) are used without the Focus scale | **False** | getting-in/admissions.md §1 explains Focus 205-805 and the concordance; old-edition figures are labelled; programme-choice.md writes "600 (Focus 555)". Glossary entry added for clarity |
| Computing/STEM students are a ghost; no "work now vs master's" analysis | **False** | careers/tech-data-and-ai.md §3 (master's vs bachelor's, direct entry vs master's, author calculation) and the computing model on the site |
| Missing: corporate vs quantitative finance vs fintech; supply chain; economics/econometrics | **Partly true** | Quant and fintech are in careers/finance.md and tech-data-and-ai.md §6; supply chain appears inside industrial, luxury, pharma dossiers but not as a track; economic consulting was absent | Added careers/economic-consulting-real-estate-and-sustainability.md (economic consulting). Supply chain as a standalone track remains unwritten |
| ESCP's triple diploma gives a laurea magistrale to everyone | **False as stated** | ESCP offers a double degree with Politecnico di Torino for engineering students (Italian laurea magistrale plus ESCP Grade de Master). It is not a feature of the standard MiM (ESCP pages, 4 Oct 2026). Added to programme-choice.md §4 and school-types-and-accreditation.md |

## `research/careers/`

| Claim | Verdict | Evidence / action |
|---|---|---|
| finance.md is almost only London M&A; private credit, REPE, corporate banking missing | **Partly true** | finance.md covers private credit (§1.5, exits), corporate banking, quant, risk, fintech, central banks. REPE was missing | REPE covered in the new careers file |
| consulting.md lacks economic consulting and restructuring | **True** | Restructuring appears only for Accenture's layoffs | Economic consulting written; restructuring flagged as unresearched |
| tech-business lacks PMM and European fintech (only Revolut) | **False** | tech-data-and-ai.md §8a covers product management and Google's APMM internship; tech-business-and-startups.md names Klarna, Adyen, N26 and others | None |
| tech-data-and-ai confuses BI, data science, data engineering, AI engineer | **False** | §8b separates data and analytics roles with sources | None |
| accounting file lacks FP&A and mid-tier audit firms | **False** | FP&A in §6 and mid-tier audit in the scope line and Big 4 sections | None |
| luxury file lacks merchandising and buying | **Partly true** | Merchandising appears in several roles; no dedicated buying section | Not changed |
| Missing sectors: crypto/quant trading, sports/F1, gaming, climate/ESG | **Partly true** | Crypto and quant trading are in finance.md and tech-data-and-ai.md; sports, gaming and ESG were absent | Sustainability advisory written with the 2026 CSRD cut; sports and gaming flagged unresearched |

## `research/getting-in/`

| Claim | Verdict | Evidence / action |
|---|---|---|
| Bocconi test penalties and target scores missing | **Partly true** | The file said only "penalties for wrong answers". The official page gives -0.25 to -0.33 per wrong answer; below 15/50 excludes. The "32-36/50 safe score" is not on the page and is not used | Penalty figures added |
| TAGE MAGE marked "not researched"; mandatory for HEC, ESSEC, ESCP; scale -150 to +600 | **False in detail** | It is one accepted option, not mandatory; the scale is 0-600 (search summaries of French sources). School thresholds are unverified | Scale and format added with an unverified-threshold warning |
| IELTS/TOEFL absent; LSE 7.0/6.5; Oxford 7.5; waiver trap | **True, partly accurate** | LSE standard 7.0 overall and 6.5 per component is confirmed; its waiver needs study in an English-speaking country on UKVI's list, so an English-taught degree elsewhere does not count. Oxford: 7.0/6.5 standard, 7.5/7.0 higher; a degree taught in English can support a waiver there, the opposite of the audit's claim | New English-test section in admissions.md |
| ATS rules, knockout visa questions, auto-reject in 30 seconds | **Partly true** | Parsing guidance is platform-dependent; knockout questions are real; the "30 seconds" figure has no source | §2.1 written; the 30-second claim stated as unsourced |
| Pymetrics/Harver, HireVue, Cappfinity (secretly tracks time), McKinsey Solve | **Partly true** | Harver acquired pymetrics (Aug 2022); Solve was built with Imbellus; HireVue dropped facial analysis (reported 2021). The Cappfinity timing claim has no source | §2.2 table; unverified claim explicitly not stated |
| Applying to 5-6 masters costs EUR 1,500-2,500 | **Plausible** | Arithmetic from published fees gives about EUR 1,500-1,700 for five applications, one English test and two GMAT sittings, more with translations | Worked estimate added, labelled author calculation |

## `research/money/`

| Claim | Verdict | Evidence / action |
|---|---|---|
| costs-and-funding.md and countries-and-cities.md point at each other for rents | **True** | The only rent data were Numbeo lines in salaries-and-roi.md | Rent sub-section added to costs-and-funding.md §2; countries-and-cities.md now states where rents live |
| Turin used as Milan; real Milan budget EUR 1,400-1,850 and 8-12k underestimate | **Partly true** | The file used ESCP's Turin range and said Milan was "likely higher". Immobiliare.it Insights (2026/27): Milan room EUR 704 vs Turin EUR 479. Rent alone adds about EUR 5,000 over 22 months; a 8-12k gap is not supported | Example A recomputed: EUR 62,000-74,000 |
| Munich uses the DAAD national average | **Partly true** | The file already warned the average was "possibly stale for big cities" | MLP 2025: Munich EUR 840 and Frankfurt EUR 730 for a model student flat added |
| Frankfurt and Dublin missing from net-pay tables; no New York comparison or 40x rule | **True** | Frankfurt shares Munich's tax rules; Dublin and New York were not modelled | Frankfurt note, Dublin/New York logged as claims to verify, 40x rule stated as practitioner consensus |
| Alternance pays 100% of tuition and EUR 1,100-1,800/month tax-free; Werkstudent EUR 1,200-1,800 exempt from health and unemployment | **Partly true** | Apprentice pay at 21-25 is 53%/61%/78% of the SMIC (about EUR 990/1,139/1,456) with income-tax exemption up to the annual SMIC for contracts from 1 March 2025. Werkstudent is exempt from health, care and unemployment but pays pension contributions; no income source found for the monthly range | Both explained with the real figures |
| Loans: Intesa per Merito up to EUR 50,000; BNL Futuriamo EUR 70,000; Consap state guarantee 70% | **Mostly true; my first correction was wrong** | Corrected on 4 Oct 2026 (third pass) with the owner's screenshots and primary sheets: BNL Futuriamo is EUR 5,000-70,000 (BNL product page), so the audit was right and my 'EUR 5-50k' was wrong; Intesa per Merito is now up to EUR 75,000 (EUR 50,000 was the 2019 launch ceiling); Consap-guaranteed loans at Sparkasse Bolzano go up to EUR 50,000 in Italy and EUR 70,000 abroad, TAEG 4.30% in the bank's example | Rows rewritten and a Consap cost guide added in money/costs-and-funding.md |

## `research/evidence/`, glossary, legal

| Claim | Verdict | Evidence / action |
|---|---|---|
| TBS filed under proven fraud next to Temple | **Partly true** | The table already labelled TBS "Allegation", but the planned site box was called "Proven cases" and one paragraph said "Verified example" | Renamed the box, relabelled TBS "allegation only", added a defamation-risk note |
| Glossary lacks 20+ terms | **True for most** | Target/non-target, off-cycle and FP&A existed; coffee chat, ATS, TC, clawback, reneging, exploding offer, up-or-out, bench, PIP, rolling admissions and others did not | About 20 terms added |
| UK s.84 Immigration and Asylum Act 1999 makes tailored immigration advice a criminal offence; use objective wording and a disclaimer | **Largely true** | Providing immigration advice about a particular individual while unregulated is an offence; general information is different. The Atlas already said it is "not advice" and told users to ask a lawyer | Added an explicit "general information, not advice on your case" line in English and Italian on the Atlas page |

## Second part of the audit: `research/places/` and `research/countries/`

| Claim | Verdict | Evidence / action |
|---|---|---|
| UK Graduate visa must be applied for from inside the UK, only after the provider has told the Home Office you completed; early application is rejected | **True (rejection and refund detail unverified)** | GOV.UK eligibility page: you must be in the UK, hold a Student visa, and your provider must have told the Home Office you completed; you need not wait for graduation. Not in the library before | Added to places/visas-and-work-rights.md; refund not stated |
| The 4-year new-entrant clock includes Graduate-visa time (£33,400 floor) | **True, partly already in the library** | The file already said "at most 4 years in total" but not that Graduate time counts. Secondary sources (university and law-firm guidance) say it does; the GOV.UK page was not readable | Worked example added, tagged practitioner consensus. The audit's "£41,700 to £50,200" range was not used |
| Swiss priority-test waiver is not a quota exemption | **True** | The library said the waiver exists and quotas apply, but not that they are separate. A 2022 Federal Council proposal would exempt shortage-field master's/PhD graduates; adoption not verified | Clarified in visas file |
| VISALE omitted | **True** | Not mentioned anywhere in the library. Free Action Logement guarantee, students up to about 30 with a valid student visa or permit | Added to student-logistics.md |
| German Anmeldung circle (no landlord form, no registration, no tax ID or bank) | **Partly true** | Anmeldung needs the landlord's form; hostels often refuse; registration unlocks tax ID and bank account. Some providers open accounts earlier, and temporary addresses can be registered where the provider issues the form | Added with those qualifications |
| Dutch BSN circle with unregistrable sublets | **True, with an RNI exception** | BSN needs registration; sublets often block it; non-resident registration (RNI) issues a BSN for stays under four months | Added |
| Italian SSN contribution rose from €149 to €700 for non-EU students (L. 213/2023) | **True** | University of Bologna guidance: €700 minimum for study-permit holders, €2,000 with dependants, under the 2024 Budget Law | Added |
| Impatriati cannot be combined with the flat tax | **True** | Revenue Agency position summarised by several tax advisers; extends to art. 5 D.Lgs. 209/2023. Not in the library | Added to italy-playbook.md |
| 13th/14th months make AlmaLaurea net pay x 12 misleading | **Plausible, unresolved** | The contract practice is real; AlmaLaurea's definition (whether the extra months are averaged in) was not found | Caveat added; no adjustment made |
| Atlas: Japan and Taiwan have zero IT hubs, Switzerland zero business hubs, Dublin software at gap | **As in part 1** | Rated `gap` by rule; not changed | See part 1 |
| Austin, San Diego, Raleigh-Durham missing | **True for the Atlas** | The US record had 14 hubs and no Austin (Austin appeared only in the Startup Genome claim) | Austin added with Tesla, Oracle and Dell from SEC filings and a software standing from Startup Genome; San Diego and Raleigh-Durham logged as not mapped |
| Oxford has zero rated families; Saïd and Warwick missing | **Partly true, partly category error** | Oxford has a computing standing but no demand ratings, as the brief says. The Atlas maps where graduates work, not schools; school programmes live in the masters model | Not changed |
| St. Gallen/HSG has zero rated families | **Partly true** | St. Gallen has a business standing (2 / 1 / 1) and no demand ratings; "number 1 for finance in DACH" has no source | Not changed |
| Hub lumping in Spain (5 cities in one paragraph) and Germany (Cologne, Ruhr, Hanover, Leipzig) | **True for the briefs, false for the Atlas** | data/atlas/es.js and de.js already hold each city as its own hub; the briefs grouped them | Split into one sub-section per city |
| Five briefs (au, my, nz, th, vn) merge hypotheses, myths and decision rules into one section | **True** | They had 7 sections instead of the standard 9 | Restructured to the 9 standard sections |

## Third part: the "pre-launch audit" (seven-domain report) and the loan correction

The owner pasted a second Gemini report on 4 Oct 2026, plus BNL screenshots and his own experience with study loans. Verdicts below; "design choice" means the point is an opinion about scope, not an error.

### Loans (owner's correction)

| Point | Verdict | Action |
|---|---|---|
| BNL Futuriamo EUR 5,000-70,000 | **True; my earlier "EUR 5-50k" was wrong** | Row corrected from BNL's product page; added the owner's experience that it is an ordinary personal loan that can require guarantors, with merit only trimming TAN/TAEG |
| Intesa per Merito up to EUR 75,000 | **True** (EUR 50,000 was the 2019 ceiling) | Row corrected; convention caps (Bocconi EUR 20,000) noted |
| How Consap-guaranteed loans really cost | **Documented** from the Sparkasse Bolzano information sheet (1 July 2026): IRS 10y + 1.00 fixed, TAEG 4.30% example, EUR 2 vs EUR 10 instalment fee, 36-month grace, EUR 50k Italy / 70k abroad | New sub-section and checklist in money/costs-and-funding.md; the owner's report of grace-period interest paid out of the loan is tagged anecdotal |

### Domain 1: calculators (`data/`, `js/`)

| Claim | Verdict | Evidence / action |
|---|---|---|
| Employer search says unlisted employers "score 0" | **True, a real UX bug** | The field accepts any value 0-4 and the examples list (with Admetia's own calibrations for Blackstone, KKR, Citadel, Jane Street, Lazard, Evercore...) already covers them; the message contradicted both. Changed to point users to the examples and the number box (EN and IT) |
| BofA/Citi 1 vs Barclays/DB 2; Microsoft 3 vs Amazon 4 | **True that the values look odd; they are the published model's values**, kept unchanged by design as the file header says | Not changed; flag for the owner |
| Focus 705 is the 99th percentile | **False** | GMAC concordance (Aug 2026): 705 = 97.5%, 715 = 98.6%. conversions.js anchors updated to the Aug 2026 table; admissions.md table updated from the 2024 edition |
| GMAT input is a classic-score list with Focus shown alongside | **True (presentation choice)**; but two rows were wrong: 770 and 780 were shown as Focus 805 | Fixed to GMAC's concordance (770 -> 745, 780 -> 775); scoring keys unchanged |
| GRE verbal discarded | **True for the master's calculator, by design** (quant only), but the help text told users to enter a GRE total that was never scored | Help text corrected (EN and IT) |
| Executive Assessment missing | **True** | Not added: needs per-school acceptance data |
| Duolingo / Cambridge missing, no waiver toggle | **Mostly false** | English is asked as CEFR levels (C1/C2 cover Cambridge); programme notes list Duolingo where schools accept it. Note: the option "a full degree taught in English" is scored as C2, which is about proficiency, not about LSE-style waivers |
| Grade conversion only for Italy | **True (design choice)** | Others pick a cohort band; not changed |
| NUS, ISB, UCL, Frankfurt School, Baruch etc. missing | **Coverage choice** | Logged for the owner |

### Domain 2: careers

| Claim | Verdict | Evidence / action |
|---|---|---|
| economic-consulting file is a 67-line stub | **True; it was written as a gap marker in part 1** | Kept, low confidence stated |
| Growth equity missing | **True** | One practitioner-consensus bullet added to finance.md |
| Private debt one bullet; PE "very few pre-experience hires"; HF "rarely" | **Partly true** | Two bullets exist; added a caveat on multi-manager graduate programmes (e.g. Point72 Academy, unverified size) |
| Quant QT/QR/QD conflated | **Mostly false** | tech-data-and-ai.md §6 covers quant roles |
| Strategy& erased, EY-Parthenon once | **False** | Both appear in consulting.md, the glossary and other files |
| Candidate-led vs interviewer-led cases missing | **True** | Added to applications-and-interviews.md §2.3 |
| PMM and data-role conflation | **False** (see part 1) | — |
| Solutions engineering missing | **True** | Logged as a gap |
| Tech pay anchored at GBP 35k | **False as stated** | GBP 35-36k is the LBS MiM tech outcome for business graduates, not a tech-pay anchor |

### Domains 3-4: getting in and decisions

| Claim | Verdict | Evidence / action |
|---|---|---|
| STAR appears zero times | **True** | Added (§2.3) |
| Coffee chat zero times; no templates; WSO/XYZ formats | **Partly true** | Glossary now defines coffee chat and cold outreach; templates are an editorial choice, not added |
| MBA file conflates European MBAs as one-year (line 175) | **False** | Line 175 is about part-time recruiting; the file gives LBS 18 months, Oxford/Cambridge 12, INSEAD 10. Added a line on programme lengths and the summer-internship difference |
| IESE Young Talent Path omitted | **True** (scholarship is EUR 22,000 in summaries, not 20,000) | Added |
| German 300-ECTS rule legally bars PhD and civil service | **Overstated** | KMK guidelines expect 300 ECTS but allow deviations; doctoral admission is per university. Added with that nuance |
| Online degrees: no Graduate route or OPT | **True** | Added |
| Spanish título propio, Italian Master di I livello | **Already covered** | — |

### Domain 5: money

| Claim | Verdict | Evidence / action |
|---|---|---|
| Rent-only residual makes London look solvent (+GBP 785 vs -GBP 2) | **The criticism is fair; the -GBP 2 figure is unsourced** | Column renamed "after rent only" and a warning added; no full budget invented |
| BAföG, Italian regional vouchers | **True gap** | Added (regional schemes verified to exist; amounts not) |
| Verlustvortrag | **True** | Added with conditions; refund size not stated |
| Italy 19% deduction EUR 741/yr | **Outdated** | Current reported caps give at most about EUR 780; added |
| Lendwise, ISAs, CROUS waivers, Intesa | **Already covered** (Lendwise, Esade ISA, SSE Lendorse, CROUS at ESSEC) | — |
| US 529 codes, Indian TCS | Niche; TCS already in origin-countries-non-eu.md | Not added |

### Domain 6: places and the Atlas

| Claim | Verdict | Evidence / action |
|---|---|---|
| UK Graduate time does not count to ILR; only to the 10-year route | **First half true; second half outdated** | The 10-year long-residence route is proposed for removal under "earned settlement" (consultation closed 12 Feb 2026, outcome pending on GOV.UK). Added |
| H-1B cap-exempt employers missing | **True** | Added (INA 214(g)(5)) |
| 12 months full-time CPT forfeits OPT | **True** | Added (8 CFR 214.2(f)(10)(i)) |
| 33 countries have one arrival step, 3 have none | **True** (counted: 0 steps 3, 1 step 33, 2 steps 7, 3 steps 2, 5 steps 1) | Italy's SSN EUR 700 step added; the rest logged. Denmark already lists the CPR number and Switzerland health insurance, contrary to the report |
| 28 of 46 countries have no language claim | **Roughly true** (24 by a text count; Switzerland among them) | Logged |
| 117 "ghost hubs" with all families at gap and one employer | **False** | 34 of 200 hubs have no demand rating, and 5 of those have one employer or fewer |

### Domain 7: computing and evidence

| Claim | Verdict | Evidence / action |
|---|---|---|
| research/it/ is Italian, not IT | **True, and intentional** (it-IT translations); not an error | — |
| Conversion MSc rests on 2011-16 Irish data | **True, but already labelled "old and not like-for-like"** | — |
| CSRankings missing | **True (opinion)** | Logged |
| UK SOC 2134 new-entrant floor is GBP 38,300, not GBP 40,000 | **False as a correction**: the library already says GBP 38,300 | — |
| Graduate route to 18 months from 2027; Ross MM not STEM | **Already in the library** | — |

## Items left open

- Atlas: arrival steps for the 33 one-step countries, language claims for about 24 countries (Switzerland first), US SSN rule, Dutch BSN in the NL record.
- Calculators: Executive Assessment, more grade scales, the BofA/Citi/Microsoft values in the published employer guide.
- Careers: solutions engineering, restructuring, sports and gaming; growth equity at source.
0. San Diego and Raleigh-Durham (US), Oxford and Warwick demand ratings.
1. Tokyo IT, Zurich and Basel business, Dublin big-tech names, MediaTek, MUFG, SMBC, Temasek, GIC, Nestlé: need a citable source before they can be rated or named.
2. Supply chain and operations management as a standalone career track.
3. Restructuring advisory, sports business and gaming (listed as unresearched).
4. Intesa "per Merito" rates and eligibility from information sheets FI-1429 and FI-1476 (not read); how each Consap bank settles grace-period interest.
5. GMAT and IELTS fees at source; the LSE page for the MSc Finance English level; Oxford MFE level (standard or higher).
