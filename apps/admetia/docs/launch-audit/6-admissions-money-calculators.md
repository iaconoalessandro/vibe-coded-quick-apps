# Audit 6: admissions, MBA and business master's calculators, money

Auditor: Agent 6. Date: 5 Oct 2026. The repo was not changed.
Method: I read the models, the scorers, deadlines.js, conversions.js, the pages, research/getting-in/*, research/money/* and audits 6a/6b. I ran both scorers in Node on typical profiles (scripts are in scratchpad/mba-sim.js and ms-sim.js). I checked dates, fees and percentiles against official pages. WebFetch summaries invented fee figures twice (ESSEC), so every fee quoted below was read with curl from the raw page.

## Executive summary

1. **Both calculators give "Stretch" verdicts to typical, admissible profiles.**
   - MBA: an EU applicant with GMAT Focus 635 (81st percentile), GPA 3.2, 3+ years at UniCredit or Intesa and a "medium" file scores 49.3. That is "Stretch, roughly 10%" at all ten European schools, SDA Bocconi, IE and Mannheim included. SDA Bocconi itself only *recommends* Focus 595+.
   - Master's: a UK 2:1 graduate at the median, with Focus 615, six months of internships and an exchange, gets "Stretch" at Alliance Manchester and Warwick MSc Management. Both programmes publish only a 2:1 entry requirement.
2. **Several "OFF" (official) fees in masters-model.js are wrong or stale.**
   - ESSEC MiM Intensive is shown as €23,100. The official page says €38,000 tuition (€42,170 total).
   - Imperial MSc Management is shown as £47,000. The August 2027 fee is £51,000.
   - ESCP still shows its 2026 fees (€24,300 / €28,000). Sept 2027 is €25,100 / €28,800.
   - Esade Finance says "sources conflict". The library's own costs file has the official €39,000.
3. **LBS MiM Stage 1 closes today (5 Oct 2026), and the calculator shows no countdown.**
   - 44 programmes are still link-only. That includes LBS MiM, ESSEC MiM, ESCP MiM, LBS MFA, Oxford MFE, HEC MiF and IMD.
   - Cambridge Judge (round 5) and Bocconi (round V) are missing a round each.
   - HBS 2+2 (28 Apr 2027) and the other deferred-MBA deadlines are missing, although they are the most relevant MBA dates for final-year students.
4. **Test handling.**
   - The MBA picker is built on the old (10th edition) GMAT scale. Its floor is GMAT 550 (Focus 525). It has no "no test", waiver or Executive Assessment option, and one wrong Focus label (730 shows Focus 695; GMAC says 675–685).
   - The GRE-Quant percentile table is about three ETS editions old (170 shown as 96th; ETS 2022–25 data says 89th).
   - English options cover only IELTS and TOEFL on the 0–120 scale. There is no TOEFL 1–6 band (live since 21 Jan 2026), no Duolingo, PTE or Cambridge. "Not tested yet" is treated as "below B2", so it fails C1 gates.
5. **Grades.**
   - Only Italian marks are converted. Everyone else picks a cohort band, guided by percentage and GPA notes that misplace UK, French and Indian students.
   - The MBA calculator has no grade conversion at all, not even Italian.
   - No degree-class floor (2:1, or 104/110 at LSE) is gated, although the computing calculator already supports `minDegreeClass`.
   - The "CEMS / double degree" checkbox does nothing.
6. **Gaps in what is covered.**
   - Programme types: no EMBA, part-time MBA, Business Analytics, Accounting, Supply Chain, Luxury or Sport tracks, and CEMS MIM is not a programme.
   - Schools: Imperial, Warwick, Cranfield, RSM, St. Gallen, ESMT, WHU, Frankfurt School, Vlerick, ESSEC, ESCP, EDHEC and others are missing from the MBA list. NUS and HKUST are missing while Fudan and Peking are in.
   - The money and application-craft research is deep for Italians, but no calculator page links to it. MBA application craft (essays, recommendations, interviews, waitlists) is barely covered for MBAs.
7. **Ethics and reputation risk.** The MBA model gives +3.5 points for being female and −1 for Indian origin. That is enough to flip verdicts, it ships without explanation, and the site is about to launch publicly in the EU.

---

## 1. CRITICAL — wrong or dangerously misleading

### 1.1 The MBA verdicts are far too harsh for typical European applicants

Files: data/mba-model.js:554–610 (school points and gap legend) and js/score-mba.js. These are simulated outputs.

| Profile (round 2, EU→EU, male, under-50 undergrad, "basic" community service) | Base | INSEAD / LBS | IESE / HEC / ESADE / IE / SDA Bocconi | Mannheim |
|---|---|---|---|---|
| Focus 635, GPA 3.2, 3+ yrs, employer 1 (UniCredit, Intesa), manages 1–2, 1 promotion, medium essays, recommendations and CV | 49.3 | Stretch | **Stretch ("roughly 10%")** | **Stretch** |
| Same, with a strong file | 57.8 | Stretch | "Closer to Stretch / Competitive" | Competitive |
| Same strong file, female | 61.3 | – | "Competitive to Strong, with scholarship potential" | Strong |

- **What is true:** SDA Bocconi does not publish an average. It recommends GMAT 650+ on the old scale, which is 595+ on the GMAT Focus (third-party summaries of the school's guidance; Clear Admit and Aringo pages, 2026). IE's widely reported average is about 680 on the old scale. Focus 635 maps to old 680–690 (GMAC concordance, Aug 2026). An applicant at or above the class median is not "rarely admitted, roughly 10%".
- **Why it happens:** the model was calibrated on US elite MBAs. "Medium" on essays, recommendations and CV is worth 22 points against 30.5 for "strong", and every applicant has to rate themselves on these without guidance. The community-service penalty (−0.5 for "basic", −1.5 for "none") is a US-centric signal, and in Europe most candidates answer "basic" or "none".
- **Fix:**
  - Recalibrate the "points" for European tier-2 schools (IE, ESADE, SDA Bocconi, Mannheim, HEC, IESE) against their class profiles. A profile at the class median should land on "Competitive".
  - Set the default rating of essays, recommendations and CV to "medium" and say what "medium" means.

### 1.2 The probability labels overclaim

- data/mba-model.js:609 and js/results-kit.js:1169 label "Strong" as "Roughly 75–80%". The same label applies to HBS (admit rate about 10%) and Stanford GSB (about 6–7%).
- No public data supports a 75–80% admit probability at a single-digit-admit-rate school, for any profile.
- Fix: either scale the label by each school's base rate, or drop the percentages for the eight individually modelled US schools.

### 1.3 Gender and nationality points (reputation and legal risk)

- data/mba-model.js:119–123 gives +3.5 for female. :463 gives −1 for "Applicant from India". :459–462 add destination and origin points.
- In the simulation, gender alone moves IE from "Closer to Stretch" to "Competitive to Strong, with scholarship potential".
- The help text for gender says only "kept so the scores stay unchanged". The origin question has no help text at all.
- For an EU-launched public tool, a published −1 for Indian nationality is a reputational and possibly discrimination-law risk. India→Europe is in scope.
- Fix: show both scores, or make these lines neutral by default with an explicit "historical model" toggle and a written rationale.

### 1.4 Fees tagged OFF (official) in masters-model.js that are wrong or stale

All were read from the raw official page on 5 Oct 2026.

| File:line | Shows | Official | Source |
|---|---|---|---|
| masters-model.js:713 ESSEC MiM | "€23,100 intensive; €46,200–69,300 flexible" | Intensive track: €38,000 tuition, **€42,170 total EU / €42,270 non-EU**. Flexible: €21,500/yr EU, €25,300/yr non-EU. €6,000 deposit. research/money/costs-and-funding.md already has the right figure, so the model contradicts the library | https://www.essec.edu/en/program/master-in-management-admission-with-degree/ |
| masters-model.js:791 Imperial MSc Management | "£47,000, £6,500 deposit" | **£51,000 for the August 2027 intake** (next deadline 6 Jan 2027) | https://www.imperial.ac.uk/business-school/programmes/msc-management/ |
| masters-model.js:727 ESCP MiM | €24,300 / €28,000 per year | Sept 2027: **€25,100 EU / €28,800 non-EU per year** (€22,200 / €25,900 tuition + €2,900) | https://escp.eu/programmes/master-in-management |
| masters-model.js:1136 Esade MSc Finance | "Sources conflict badly — €24,500 and €37,500" | costs-and-funding.md quotes the official Esade MSc fee page: €39,000 for 2027–28 one-year MSc programmes | Esade MSc fees page |
| masters-model.js:683, 1043 LBS MiM / MFA | "£52,950 (2026)" | Correct for the 2026 intake. Students now apply for August 2027, so label it as the 2026 fee with the 2027 fee to be confirmed | london.edu MiM fees page |

Internal contradictions to settle:
- Imperial deposit: £6,500 (costs-and-funding.md, masters-model.js:791) versus £7,000 (admissions.md lines 20, 260, 293).
- ESCP fees differ between the model and the costs file (different years, no year shown in the model).

### 1.5 LBS MiM stage 1 closes today and the calculator is silent

- data/deadlines.js:152 has `lbs-mim` as `link()` only.
- The official page gives these MiM2028 (August 2027 intake) deadlines: Stage 1 **Mon 5 Oct 2026**, Stage 2 Wed 6 Jan 2027, Stage 3 Mon 8 Mar 2027, Stage 4 Tue 4 May 2027 (https://www.london.edu/masters-degrees/masters-in-management/apply).
- The model tags LBS MiM with regime C (capacity-limited), which makes the missing dates worse.

### 1.6 Wrong Bocconi date in research text

- research/getting-in/admissions.md:152 gives Bocconi international Round II as "26 Jan".
- The official timeline (and deadlines.js:157) says **20 Jan 2027**. The page also lists a Round V that deadlines.js omits (https://www.unibocconi.it/en/applying-bocconi/master-science-and-ma-programs/timeline).

### 1.7 Typical UK, French and Indian graduates are misplaced in the master's calculator

- The grade bands at data/masters-model.js:258–264 attach "under 70% · GPA under 3.0 → Below the median (v 0.2)".
- **UK:** a 2:1 graduate on 65% follows the % note and picks "Below the median". In UK classification a 2:1 is about the middle of the cohort (about 30% get a First). In the simulation:
  - "below median" scores 44 at Warwick and Manchester (Stretch);
  - "median" scores 52.5, still Stretch, against thresholds of 68 and 66;
  - the published requirement for both is only a 2:1 (masters-model.js:800 and :814).
- **France and India:** French 14/20 (mention bien, typically the top 10–20%) reads as 70% → "median". Indian 72% (first class, often the top decile) reads as "median".
- **Fix:**
  - Add per-country converters. LSE's country pages are a usable official anchor: Italy 104/110 = 2:1 and 110 = First. India and China have similar per-institution tables.
  - Recalibrate the UK "transcript" profile so that meeting the published 2:1 lands on at least "Possible".

### 1.8 The MBA GMAT picker has one wrong Focus label and gaps

- data/mba-model.js:29 shows `gm_730 → Focus 695`. GMAC's concordance (Aug 2026, data 1 Jul 2021–30 Jun 2026) links old 730 to **Focus 675–685** (94.0–95.1%), and 695 to old 740–750. So Focus 685 appears nowhere and 695 appears twice (https://go.gmac.com/hubfs/07.Assessments/GMAT%20Exam/GMAT_Total_Concordance_Aug2026.pdf). All other rows match the table.
- The picker floor is old 550 (Focus 525, 34th percentile). A candidate with Focus 505 has to choose 550 and is overscored.
- There is no option for waiver, test-optional, Executive Assessment or IE's ieGAT. The school sources show IE accepts ieGAT for its MBA (deadlines.js comment; masters-model.js:878). GMAC publishes an EA accepting-schools list (https://go.gmac.com/hubfs/07.Assessments/Executive%20Assessment/EA%202025/EA%20Accepting%20Schools.pdf). Audit 6a logged EA as "Not added".

### 1.9 GRE percentiles are stale

- data/conversions.js:26–30 has GRE Q 170 = 96th, 165 = 78th, 160 = 56th.
- ETS Table 1B (tests from 1 Jul 2022 to 30 Jun 2025) gives **170 = 89, 165 = 67, 160 = 50, 155 = 37, 150 = 23** (https://www.ets.org/pdfs/gre/gre-guide-table-1a.pdf).
- The calculator converts a GRE-Quant-only percentile into a GMAT-total percentile, which is a mismatch in itself. With the stale table, a Q165 maps to about GMAT 665 instead of about 637.
- RSM's actual GRE rule is a 316 total plus Q160 (admissions-support.rsm.nl). The model gates only a converted quant score.
- Use ETS's own GRE→GMAT comparison approach (verbal and quant), or at least the 2022–25 table.

### 1.10 Dead or misleading inputs in the master's calculator

- masters-model.js:605–608: the "I want a CEMS or double-degree track" checkbox has no effect anywhere. It appears only in NO_SUGGEST in score-masters.js:320.
- masters-model.js:346: "Below B2, **or not tested yet**" is level `none`. A C1 student who has not booked IELTS fails every `minEnglish` C1 gate (CBS Sales Management, for example). It needs an "I will test" option, like `ts_planned` for the GMAT.
- masters-model.js:341: "full degree taught in English" counts as C2. LSE does not accept an English-taught degree from a non-English-speaking country (admissions.md:100), and Imperial's rule is similar. Bocconi and Cattolica English-taught graduates will miss the test requirement.

### 1.11 Employer values differ depending on how the user enters them

- data/mba-model.js:316–332 (the examples dropdown) puts Alvarez & Marsal, Bank of America, Citigroup, Jefferies, Houlihan Lokey and BNP Paribas at **1**.
- data/mba-companies.js (the search box) gives the same firms **2**.
- The same applicant's base score moves 1 point depending on which UI path they use.
- docs/EMPLOYER-GUIDE.md lists Mediobanca as both "National" and "Global IB", and Ferrero and BNP as Global, while the MBA values are 1.

---

## 2. MISSING basics a student will ask about

### 2.1 Schools missing from the MBA calculator (data/mba-model.js:554–597)

A European student would type these first:
- **UK:** Imperial MBA, Warwick, Cranfield, Alliance Manchester, Durham, Bayes (City), UCL (EMBA only), Hult.
- **Continent:** RSM, St. Gallen, ESMT Berlin, WHU, Frankfurt School, HHL, Vlerick, ESSEC Global MBA, ESCP, EDHEC, emlyon, Grenoble, Copenhagen BS, Trinity (Dublin), UCD Smurfit, Nova, Católica, Politecnico di Milano (MIP), LUISS, Nyenrode, EU Business School.
- **Asia:** NUS, HKUST, HKU, CUHK, SMU. The model has Fudan and Peking but not NUS or HKUST, which European applicants consider far more often.
- **US:** Rice, Vanderbilt, Notre Dame, Indiana Kelley (lower priority).

### 2.2 Programmes missing from the master's calculator (data/masters-model.js)

- **Management:** CEMS MIM as its own programme, SSE MiM (only its Finance programme is in), WHU MiM, ESMT MiM, Frankfurt School MiM, Vlerick MiM, Católica Lisbon MSc Management, UCL MSc Management, KCL, Trinity, UCD Smurfit, Maastricht, Tilburg, UvA, KU Leuven, Solvay, NHH, Aalto, HEC Lausanne, LUISS, Politecnico di Milano (Management Engineering), Grenoble, NEOMA, Audencia, KEDGE, IÉSEG.
- **Finance:** Cambridge MPhil Finance, UCL MSc Finance, Bayes MSc Finance, Frankfurt School MiF, WHU MiF, Católica MSc Finance, UZH Banking & Finance, UvA/Erasmus School of Economics (ESE) MSc Finance, UCD Smurfit MSc Finance, EDHEC MSc Corporate Finance (its fee is in costs-and-funding.md but it is not in the model), LSE MSc Finance & Private Equity and Accounting & Finance (fees are in costs-and-funding.md, but the programmes are not in the model), Bocconi AFC.

### 2.3 Programme types missing (with the question a student will ask)

| Type | Example question | Where it should go |
|---|---|---|
| Executive and part-time MBA | "Can I do an EMBA at LBS / INSEAD / Trium / Kellogg-HKUST and keep my job?" | MBA calculator with a "keep working" path. The research exists (decisions/mba-and-career-switchers.md §5) but there is no calculator |
| Online MBA | Imperial, Warwick, IE online | Same |
| MSc Business Analytics | Imperial BA, MIT MBAn, ESSEC-CentraleSupélec, HEC Data Science for Business, Bocconi DSBA, UCL | New "Analytics" track. Neither computing-model.js nor masters-model.js has any analytics programme |
| MSc Accounting / Accounting & Finance | LSE A&F, Bocconi AFC, HSG MACFin | Finance track |
| Supply chain / operations | MIT SCM, Cranfield, RSM Supply Chain | New track or the management track |
| Luxury, fashion, sport | ESSEC Luxury, SDA Bocconi MAFED, CIES FIFA Master | Specialised list; careers/luxury-and-fashion.md exists |
| Deferred MBA (final-year students) | HBS 2+2 (deadline 28 Apr 2027, decision 30 Jun 2027 on hbs.edu), Stanford deferred, Yale Silver Scholars, Wharton Moelis, IESE YTP | deadlines.js plus a calculator entry. Covered in timing-and-sequencing.md but absent from the tools |
| Double degrees | Bocconi–ESSEC, HEC–MIT etc. | The CEMS checkbox is dead (1.10) |

### 2.4 Test and English options missing

- **MBA:** Executive Assessment (accepted by Columbia, Stern and Wharton, among others; GMAC EA list) and GRE entered directly.
- **Master's:**
  - ieGAT, the Esade Admissions Test and the IESE test are named in notes but cannot be entered.
  - TAGE MAGE (HEC, ESSEC, ESCP, EDHEC, SKEMA all accept it) cannot be entered. French applicants are the largest pool at these schools.
  - CAT (accepted by ESSEC for Indian applicants) cannot be entered.
- **English:** Duolingo, PTE Academic, Cambridge C1 Advanced/C2 Proficiency and TOEIC (ESSEC 850) are missing.
- **TOEFL 1–6 scale:** live since 21 Jan 2026, with 0–120 shown alongside only for a two-year transition. 6 = C2, 5–5.5 = C1, 4.5 is about 86+ (ETS, https://www.ets.org/toefl/test-takers/ibt/scores/understand-scores.html). The model's "C1 — TOEFL 100" also disagrees with ETS, which aligns C1 with 95+ (band 5.0).

### 2.5 Grade converters still missing

Audit 6b gave formulas. Most are not implemented.
- **German 1.0–4.0:** two uses. The cohort band, and the modified Bavarian formula that Mannheim and TUM apply to *foreign* grades. That formula drives 33% (Mannheim) and 21% (TUM) of the published points table.
- **French /20.**
- **Spanish /10.**
- **UK classes.**
- **US GPA.**
- **Indian % or CGPA:** a per-tier rule, since LSE country pages vary by institution tier.
- **Chinese 100-point scale:** UK schools typically ask 80–85 for a 2:1.
- **The Italian /110 mark itself.** The calculator asks for the exam average. Most students know their 110 mark, and LSE's 104/110 floor is stated in 110 terms.
- **The MBA calculator has no grade conversion at all.** Its US-only bands (data/mba-model.js:50–59) leave a 105/110 Italian or a 15/20 French graduate guessing.

### 2.6 Money questions no calculator page answers

- **Total cost and ROI:** what the programme costs all-in, and the payback. The research has worked examples (costs-and-funding.md §7, salaries-and-roi.md §6), but no page links money/*.md. The only links to research/ come from Atlas country briefs.
- **National study finance for EU students who are not Italian:**
  - Germany: BAföG and Auslands-BAföG (only background, unverified);
  - Netherlands: DUO portable student finance and tuition-fee credit;
  - Sweden: CSN; Norway: Lånekassen (covers tuition abroad); Finland: Kela;
  - Spain: "la Caixa" postgraduate fellowships abroad;
  - Germany: Studienstiftung, Deutschlandstipendium;
  - Greece: Onassis, Bodossaki;
  - France: CROUS for France-based study.
  These are the biggest levers for those origins, and the library is written almost entirely for Italians (scholarships.md bottom line 1–2).
- **Italian schemes missing:**
  - INPS "Master universitari" grants for children of public-sector employees (the Gestione Unitaria call), the largest Italian master's funding call for that group. Absent.
  - Fondazione Rocca and Collegio Italia are listed as "not verified".
- **Non-EU→Europe and MBA-specific funding:**
  - GREAT Scholarships (British Council, £10,000);
  - Commonwealth Master's;
  - Marshall (US→UK);
  - Fulbright for US citizens to Europe;
  - Forté Fellowships (MBA women);
  - INSEAD, LBS and HEC MBA scholarships;
  - Knight-Hennessy (Stanford);
  - MEXT and GKS for Europe→Japan/Korea (in scope as Europe-origin routes).
  MPOWER and Prodigy are covered.
- **Application budget:** GMAT $275 at a centre or $300 online, $35 per extra score report, still "Claims to verify" (admissions.md:350, costs-and-funding.md). These are now easy to confirm on mba.com.

### 2.7 MBA application craft is almost entirely missing

- research/getting-in/applications-and-interviews.md and admissions.md cover pre-experience master's (LBS MiM, HEC, ESSEC, Imperial, Bocconi) plus job interviews.
- For the MBA there is nothing on:
  - essay prompts (HBS one open essay; Stanford "What matters most"; INSEAD job description plus motivation essays and a Kira video with 4 spoken and 1 written answer; LBS "goals" essay);
  - recommender rules (two professional, a current supervisor);
  - interview formats (Wharton Team-Based Discussion, HBS post-interview reflection, INSEAD two alumni interviews, alumni versus admissions-committee interviews);
  - waitlist handling (audit 6b says "100% absent", and that is still true);
  - MBA deposits and deferrals (HBS, Stanford and INSEAD seat deposits; deferral policies);
  - reapplication rules;
  - when round 3 works for a visa applicant.
- Audit 6b §3 suggested content. Some of it is unsourced (the "ReVera" detection tool, "Turnitin on LORs"), so do not copy it without checking.

---

## 3. SUPERFICIAL or too generic

1. **data/mba-model.js:176–197, the essays, recommendations and CV "Strong / Medium / Weak" options.** These carry over 30 of roughly 75 points with no definition, so a self-rating can swing a verdict by 10+ points. "Deep" means 3–4 concrete markers per level, for example:
   - Strong recommendation = a direct supervisor who ranks you top 5% with examples;
   - Medium essays = clear goals but generic "why us".
2. **data/mba-model.js:148–155, undergraduate university.** "Harvard / very prestigious / top-50 / other". A European applicant needs examples: Oxbridge, LSE, Bocconi, HEC, ETH, TUM, Sciences Po, ESADE, Mannheim, St. Gallen.
3. **data/masters-model.js:575–580, references.** One question for all schools. HEC needs one academic reference, LBS one (professional preferred), LSE two, and Bocconi none. The modifier is applied after weights, but the user is not told which schools in their list need which.
4. **Deadlines.** There is still no MBA early-decision or deferred-path note, no time-of-day for most entries (HBS noon ET, Stanford 4 pm PT, Imperial 23:59 UK), and no "results by" dates. The official pages publish those, and they matter for juggling deposits.
5. **research/money/salaries-and-roi.md.**
   - The LBS MiM employment report used is the 2024 class. The class-of-2025 report is probably out by now.
   - The BFS Swiss survey is the class of 2022.
   - No MBA salary or ROI is in money/ at all; it sits in decisions/mba-and-career-switchers.md.
   - No HEC, ESSEC, Bocconi, Imperial or LSE employment reports were fetched (§2a says "could not be fetched").
   - Germany, the Netherlands, the Nordics and the US starting salaries are "not fetched".
6. **research/money/scholarships.md §1.5 (Eiffel).**
   - It hedges on the €1,181 vs €1,200 amount, while ESSEC's official page states €1,181/month (read today).
   - The 2027 call is not out. On 5 Oct 2026 Campus France still shows the 2026 campaign, which opened on 1 Oct 2025, so the 2027 call is late or paused. Say so explicitly.
   - Chevening's 6 Oct 2026 deadline (tomorrow) will be past at launch. Rewrite the entry for the 2028/29 cycle (opens in August 2027).
7. **admissions.md "Which test where" (lines 67–79).** Only 7 programmes are listed, and IE, Esade, EDHEC, ESCP, St. Gallen, Mannheim, RSM and the US schools are absent. The tests are in the model, but the reader cannot see them as a table.

---

## 4. UNDERREPRESENTED

- **Origins:** both calculators and the money files are written around Italians. Missing:
  - Indian applicants (the largest GMAT-sending group; CAT, 3-year B.Com versus 4-year B.Tech eligibility, % conversions);
  - Chinese applicants (100-point scale, 3-year versus 4-year degrees);
  - French applicants (TAGE MAGE, /20);
  - German applicants (1.0–4.0, Werkstudent);
  - Spanish, Greek, Turkish and Nigerian applicants.
- **Destinations:** Ireland, Belgium, Nordics apart from SSE and CBS, Portugal apart from Nova, Austria apart from WU, and Switzerland apart from HSG and IMD (HEC Lausanne appears only in the FT table).
- **Programme types:** EMBA, part-time and online MBA, Analytics, Accounting, Supply Chain, Luxury, Sport, CEMS, double degrees, and deferred MBAs.
- **Tests:** EA, TAGE MAGE, CAT, ieGAT, the Esade test, the IESE test, Duolingo, PTE, Cambridge, and the TOEFL 1–6 bands.
- **Employers in data/mba-companies.js (199 entries).** Common European pre-MBA employers are missing: Generali, Allianz, AXA, Zurich, Swiss Re, Prada, EssilorLuxottica, Pirelli, Leonardo, Prysmian, Fincantieri, CDP, Bank of Italy, Permira, Ardian, PAI, Wise, Zalando, Delivery Hero, Novo Nordisk, Maersk, Equinor, Philips, Telefónica, Vodafone, Orange, Deutsche Telekom, Lufthansa and Ryanair.

---

## 5. Quick wins (< 1 hour each)

1. Fix the four fees in §1.4 (ESSEC, Imperial, ESCP, Esade) and add the intake year to every tuition fact.
2. Add LBS MiM stages (5 Oct, 6 Jan, 8 Mar, 4 May). Add Cambridge round 5 (4 May 2027) and Bocconi Round V. Add `mba:Harvard` 2+2 (28 Apr 2027).
3. Fill the other link-only deadlines from pages the project already cites: ESSEC MiM (same freshdesk calendar used for `essec-mif`), ESCP, LBS MFA, Oxford MFE, HEC MiF and IMD.
4. Change data/mba-model.js:29 `gm_730` to `focus: 685`.
5. Replace GRE_Q_PCT with ETS 2022–25 values: 170:89, 169:85, 168:80, 167:75, 166:72, 165:67, 164:63, 163:60, 162:57, 161:53, 160:50, 159:47, 158:45, 157:42, 156:39, 155:37, 154:34, 153:31, 152:29, 151:26, 150:23, 145:12, 140:5. Also add `[645, 85.6]` to FOCUS_PCT.
6. Make the employer examples match mba-companies.js (A&M, BofA, Citi, Jefferies, Houlihan, BNP). Settle Mediobanca, Ferrero and BNP in EMPLOYER-GUIDE.md.
7. Split "Below B2, or not tested yet" into two options. Add TOEFL 1–6 bands, Duolingo, PTE and Cambridge equivalents to the English labels.
8. Remove or wire up the dead CEMS checkbox.
9. Fix "26 Jan" to "20 Jan" in admissions.md:152. Settle Imperial's £6,500 vs £7,000 deposit. Fix CREDITS.md:79 ("42 business schools" vs 43 in README and mba.html).
10. Reword the grade-band notes to say "UK: a 2:1 (60–69%) is roughly mid-cohort; France: 14/20+ is top ~15%; India: 70%+ first class…" until converters exist.
11. Add `minDegreeClass` gates to LSE, Imperial, Warwick and Manchester (the computing calculator already supports them; `CONVERT.italian` already returns `cls`).
12. Link each school's results card to money/costs-and-funding.md and money/scholarships.md, or to a rendered page.

---

## 6. Top 10 priorities for the next 4 weeks (ranked)

1. **Recalibrate the verdicts for European schools in both calculators** (§1.1, §1.7). Use the published class profiles and entry floors as anchors. Test with 10 typical profiles. The rule: a candidate at the class median should be "Competitive", and a candidate who meets a UK 2:1 entry requirement with a median test should be at least "Possible".
2. **Decide on the gender and origin points before launch** (§1.3). The options are neutral by default, an explicit historical-model toggle, or a written rationale. Also drop or base-rate-adjust the "75–80%" label (§1.2).
3. **Fees and deadlines sweep** (§1.4, §1.5, quick wins 1–3). Re-read every OFF fee and fill the 44 link-only deadlines, starting with LBS MiM, ESSEC, ESCP, LBS MFA, Oxford MFE, HEC MiF and IMD. Add deferred-MBA dates.
4. **Migrate the MBA test input to GMAT Focus first** (205–805), with old-GMAT, GRE, EA and "waiver / not yet" options. Extend the floor below Focus 525.
5. **Grade converters** for UK, FR, DE (cohort and Bavarian formula), ES, IN, CN and the Italian 110 mark, shared by both calculators. Add degree-class gates.
6. **English module:** TOEFL 1–6, Duolingo, PTE, Cambridge, TOEIC, "will test", and the UKVI English-taught-degree trap as a per-school warning.
7. **Add the missing European MBA schools** (Imperial, Warwick, Cranfield, RSM, St. Gallen, ESMT, WHU, Frankfurt School, Vlerick, ESSEC, ESCP, EDHEC, Trinity, Smurfit, NUS, HKUST) and an EMBA / part-time path.
8. **Write the MBA application-craft brief:** essays per school, recommenders, interview formats (Wharton TBD, INSEAD alumni, HBS reflection), waitlist, deposits, deferral, reapplication and visa-safe rounds. Every claim needs an official source.
9. **Money for non-Italians:** national study-finance schemes (BAföG, DUO, CSN, Lånekassen, Kela, la Caixa, Studienstiftung) and MBA scholarships (Forté, GREAT, Commonwealth, Marshall, school MBA awards). Add Italy's INPS master's grants. Surface money/*.md from the calculator results.
10. **Business Analytics track and CEMS MIM as programmes,** then Accounting & Finance programmes (LSE A&F, Bocconi AFC, HSG MACFin). These are the most-asked pre-experience programmes the tool cannot score today.

---

### Sources checked today (5 Oct 2026)

- GMAC GMAT Total Concordance, Aug 2026: https://go.gmac.com/hubfs/07.Assessments/GMAT%20Exam/GMAT_Total_Concordance_Aug2026.pdf
- ETS GRE interpretive data (2022–25): https://www.ets.org/pdfs/gre/gre-guide-table-1a.pdf
- ETS TOEFL scores: https://www.ets.org/toefl/test-takers/ibt/scores/understand-scores.html
- HBS: https://www.hbs.edu/mba/admissions/application-dates
- Stanford GSB: https://www.gsb.stanford.edu/programs/mba/admission/deadlines
- Wharton: https://mba.wharton.upenn.edu/admissions/
- INSEAD MBA: https://www.insead.edu/master-programmes/mba/admissions
- Cambridge Judge MBA: https://www.jbs.cam.ac.uk/programmes/mba/apply/
- HEC MiM: https://www.hec.edu/en/master-s-programs/master-management/admissions
- Imperial MSc Management dates: https://www.imperial.ac.uk/business-school/programmes/msc-management/admissions/key-dates-and-deadlines/
- Bocconi timeline: https://www.unibocconi.it/en/applying-bocconi/master-science-and-ma-programs/timeline
- LBS MiM apply page: https://www.london.edu/masters-degrees/masters-in-management/apply

Deadlines that matched deadlines.js: HBS, Stanford, Wharton, INSEAD, Imperial, HEC MiM and Bocconi rounds I–IV. Cambridge matched but is missing its round 5.

- Fees:
  - ESSEC: https://www.essec.edu/en/program/master-in-management-admission-with-degree/
  - Imperial: https://www.imperial.ac.uk/business-school/programmes/msc-management/
  - ESCP: https://escp.eu/programmes/master-in-management
  - HEC (€58,970 confirmed): https://www.hec.edu/en/master-s-programs/master-management/fees-and-financing
  - LBS (£52,950 for 2026): https://www.london.edu/masters-degrees/masters-in-management/fees-financing-and-scholarships
  - IE (€50,000 + €1,200 confirmed): https://www.ie.edu/business-school/programs/masters/master-in-management/admissions-fees/
  - IESE MiM (€55,500, €10,000 commitment fee): https://www.iese.edu/master-in-management/admissions-fees/
  - LSE MiM (£42,900, 12 months): https://www.lse.ac.uk/study-at-lse/graduate/masters-in-management
- UK Student visa £558 and funds £1,529 / £1,171 confirmed: https://www.gov.uk/student-visa, https://www.gov.uk/student-visa/money
- Graduate route at 18 months from 1 Jan 2027: already correct in places/visas-and-work-rights.md.
- Eiffel (2026 call still displayed): https://www.campusfrance.org/en/france-excellence-eiffel-scholarship-program
- RSM GRE rule (316 total + Q160): admissions-support.rsm.nl FAQ (search summary).
