---
title: Comparison with the Gemini research library — coverage gaps, reliability audit, and what was adopted
last_researched: 2026-10-01
scope: Read-only review of the parallel library at "admetia Gemini/research" (v1 files plus v2 breadth, depth, data and audit). Covers which topics it has that this library lacks, a spot-check of its factual reliability against primary sources, what was adopted (only after verification), what was rejected and why, and a brief for the next research run. Nothing in the Gemini folder was modified.
confidence: high for the spot-check verdicts (each checked against a named primary source on 2026-09-30/10-01); medium for the coverage map (based on headings and bottom lines, not a full read of ~400k words).
review_by: 2026-12-31
---

# Comparison with the Gemini research library

## Bottom line

1. **Gemini is broader, ours is deeper and better sourced.** Gemini has about 32 v1 files plus 14 breadth monographs, 7 engineering specs, JSON datasets (190 programmes, 328 employers, tax tables for 13 countries) and an audit layer. Our 17 research files carry about 60–90 source URLs each, against 6–12 for Gemini's v1 files.
2. **Gemini's numbers can't be used without re-verification.** In a spot-check of 20 specific claims:
   - 6 matched primary sources;
   - 1 had the right mechanism but an invented size;
   - 4 were outdated or misstated;
   - 3 were contradicted by the official source or partly wrong;
   - 6 had no traceable source or showed signs of fabrication. Examples: "audited intake reports across 8 London banks", "LinkedIn Talent Insights confirms Bocconi 68–74% of Milan hires", and a "1,200-attempt" cold-email response study with no citation.
   - Several claims were labelled "VERIFIED" in Gemini's own ledger but were outdated (UK Skilled Worker £38,700; HSG fee CHF 3,326).
3. **Its best contribution is the questions, not the answers.** Gemini identified real blind spots:
   - should you do a master's at all;
   - student logistics (cash on day zero, housing, work limits);
   - sectors we covered thinly (pharma/healthcare commercial, commodity trading, industrial/automotive and defence);
   - long-horizon careers (attrition, plateaus, settlement rules);
   - origin-country playbooks beyond Italy;
   - destinations beyond Europe;
   - mid-career switchers;
   - socioeconomic feasibility (who can afford unpaid internships and gap years);
   - legislative risk in tax-based advice.
4. **Adopted now, after verification:**
   - a new **evidence/how-numbers-mislead.md** (the fact-check field guide);
   - **decisions/should-you-do-a-masters.md**;
   - **places/student-logistics.md**;
   - four red-team ideas folded into product/product-map.md (whole-cohort reading, month-zero visa cash, Swiss quota warning, tax-regime stress test).
   - Everything else is in the next-run brief (§5) with Gemini's figures marked as unverified leads.
5. **Two Gemini red-team claims are wrong and must not reach the site:**
   - the "Article L6222-1 legal wall" stopping non-EU first-year students from French apprenticeships;
   - the claim that non-EU HSG students are "legally excluded from 95% of Swiss recruitment".

   See §3.

---

## 1. Coverage map: topics Gemini has that this library lacked

| Topic (Gemini file) | Our coverage before | Value for our audience | Action taken |
|---|---|---|---|
| **Statistical fallacies in school data** (council-audit.md, red-team audit, the pasted red-team text) | Partial: scattered in school-types and salaries | Very high (trust anchor) | **New file evidence/how-numbers-mislead.md**, built on our own verified examples |
| **No-master counterfactual** (v2/breadth/no-master-counterfactual.md) | Partial: Big 4 grade parity, dual study, ICAEW school-leaver shift | High | **New file decisions/should-you-do-a-masters.md** |
| **Student logistics** (v2/breadth/student-logistics.md) | Thin: costs only | High (practical, prevents failure) | **New file places/student-logistics.md** |
| Month-zero visa cash (pasted red-team §2.3) | Partial: visa fees listed | High for non-EU and EU-in-UK | Verified (Graduate visa £937 + IHS £1,035/yr); added to places/student-logistics.md and product/product-map.md |
| Swiss third-country quotas (red-team §2.2) | Partial: SEM rule cited | High for non-EU | Verified (8,500 for 2026); added to places/student-logistics.md; claim "95% excluded" rejected |
| French alternance for non-EU (red-team §2.1) | Partial | Medium | Gemini's legal claim contradicted; corrected rule recorded in §3 and places/student-logistics.md |
| Healthcare/pharma commercial careers | Thin (Roche, Novartis programmes in careers/accounting-and-corporate.md) | Medium–high (recession-resilient) | Next-run brief |
| Commodity trading (Geneva, Zug, London) | Thin (SuisseNégoce in places/countries-and-cities.md) | Medium | Next-run brief |
| Industrial/automotive and defence (IG Metall pay scales, downturn) | Partial (pipelines; Helsing, Airbus) | Medium–high for DACH and Italy | Next-run brief, including the automotive downturn |
| Luxury and fashion | Partial (careers/marketing.md) | Medium | Next-run brief (pay data gap persists) |
| Global hubs by field | Partial (places/countries-and-cities.md) | Medium | Next-run brief |
| Cost-effective degrees | Covered (money/costs-and-funding.md) | — | None needed |
| Long-horizon careers (attrition, plateaus, ILR absence rules, childcare) | Missing (our gap A2) | High | Next-run brief |
| Origin-country playbooks (India, China, Brazil, Turkey, Nigeria, Spain/LatAm…) | Italy only | Medium (secondary audience) | Next-run brief |
| Destinations beyond Europe (Australia, Canada, Singapore, HK, Japan) | Partial (US, Canada, Singapore, UAE in visas file) | Low–medium | Next-run brief |
| Mid-career switchers / MBA | Missing (our gap A9) | Medium (the calculator has MBAs) | Next-run brief |
| Tech, data and AI careers (computing track) | Missing (business-only scope) | Medium (the site has a computing calculator) | Next-run brief |
| Engineering, law/policy, creative, academia/PhD | Mostly out of scope; short PhD note | Low for this audience | Listed only |
| Application and interview craft | Partial (admissions, breaking-in) | Medium | Next-run brief (practical guides) |
| Scholarships database | Partial (money/costs-and-funding.md) | Medium | Next-run brief: dataset |
| Business and legal of Admetia (competitors, pricing, GDPR, VAT) | Missing | High for the product team, not for students | Next-run brief: product research, separate from student content |
| Engines and datasets (ROI, tax, admissions calibration, 328 employers, 190 programmes) | product/product-map.md data model only | High for build | Don't import the data as-is. Use the schemas as inspiration and re-populate from verified sources (§4) |

## 2. Reliability spot-check: 20 Gemini claims against primary sources

| # | Gemini claim (where) | Primary source checked | Verdict |
|---|---|---|---|
| 1 | UK Graduate visa fee £822 (council-audit, visas) | GOV.UK Graduate visa page: "£937 application fee" | **Outdated** |
| 2 | UK Immigration Health Surcharge £1,035/yr adult, £776 students (ledger) | GOV.UK IHS page | **Correct** |
| 3 | UK Skilled Worker general threshold £38,700, new entrant £30,960 (ledger, marked "VERIFIED") | GOV.UK Skilled Worker page: £41,700; reduced rate £33,400 | **Outdated** (pre-July 2025) |
| 4 | German students may work 140 days a year (§16b AufenthG) (ledger) | gesetze-im-internet.de §16b(3): "bis zu 140 Arbeitstage im Jahr" | **Correct** |
| 5 | Swiss third-country quota ~8,500 B+L permits (red team) | Federal Council, 19 Nov 2025: 4,500 B + 4,000 L = 8,500 for 2026; UK nationals have a separate 3,500 | **Correct**, and Gemini omits the separate UK quota |
| 6 | Non-EU HSG students "legally excluded from 95% of Swiss graduate campus recruitment" (red team) | No source; SEM rules require priority for residents and "high economic interest", within quotas | **Unsupported** (the direction is right, the number is invented) |
| 7 | French Art. L6222-1 bars non-EU first-year students from apprenticeship without a DREETS authorisation (red team) | service-public.gouv.fr F2728 (updated 18 Jun 2026): the employer is exempt from requesting a work authorisation when the apprenticeship contract is validated by the OPCO/Dreets; no first-year restriction mentioned | **Contradicted** |
| 8 | HSG foreign-student fee CHF 3,326/semester (ledger, "VERIFIED") | HSG costs page, autumn 2026: CHF 3,557.50 (via money/costs-and-funding.md) | **Outdated** |
| 9 | Prodigy representative APR 13.26% (ledger) | Prodigy representative example (via money/costs-and-funding.md) | **Correct** |
| 10 | German Blue Card €50,700 / €45,934.20 (2026) (ledger) | Matches places/visas-and-work-rights.md (Berlin Blue Card page) | **Correct** |
| 11 | GMAT Focus 655 = 91st percentile (v2 README) | GMAC concordance (via getting-in/admissions.md) | **Correct** |
| 12 | ISE "290 applicants per hired graduate in FMCG" (ledger) | ISE: 290 *applications per vacancy* | **Misstated** (applications ≠ applicants; vacancy ≠ hire) |
| 13 | Big 4 UK cuts "PwC −12%, KPMG −16%, Deloitte advisory −28%" (ledger, FT URL) | Our sources: KPMG 1,399→942 (−29%), Deloitte 1,700→1,400 (−18%), PwC 1,500→1,300 (−13%) | **Contradicted / unverifiable** (the FT URL could not be matched) |
| 14 | HBS admit rate 11.2% in R1 vs 10.8% in R2 (v2 README) | HBS doesn't publish admit rates by round | **No traceable source** |
| 15 | "LinkedIn Talent Insights … Bocconi alumni are 68–74% of Milan junior hires at MBB/BB" (ledger) | No public dataset; LinkedIn Talent Insights is a paid tool and no report is cited | **No traceable source** |
| 16 | Cold-email response 3.8% vs 14.6–18.2% "across 1,200 student outreach attempts" (ledger) | No study cited | **No traceable source** |
| 17 | "Audited intake reports across 8 London investment banks" confirm 30–35% spring-week conversion (ledger) | Banks don't publish such reports; the closest real data is Trackr via eFinancialCareers (31% → 20% return offers) | **No traceable source** (the conclusion is roughly consistent with the real data) |
| 18 | "52% of London IBD analysts exit within 24 months" (pasted red team) | No source | **No traceable source** |
| 19 | Italy's impatriati regime was cut in Dec 2023 with a "4-year retroactive residency lock-in" (red team) | D.Lgs. 209/2023 (via places/italy-playbook.md): the 4-year stay commitment applies going forward; the regime is now art. 225 D.Lgs. 117/2026 | **Partly wrong** ("retroactive" is incorrect) |
| 20 | CSEA lets schools remove "not seeking" graduates from the denominator (red team) | LBS reports cite CSEA and exclude sponsored students; the CGE "net" rate formula excludes further study and inactive graduates; the CSEA site itself was blocked (403) | **Mechanism correct**; Gemini's "15–20% deflation" estimate has **no source** |

**Score: 6 correct (#2, 4, 5, 9, 10, 11), 1 correct mechanism with an invented size (#20), 4 outdated or misstated (#1, 3, 8, 12), 3 contradicted or partly wrong (#7, 13, 19), 6 with no traceable source (#6, 14–18).** Several "VERIFIED" labels in Gemini's ledger point to rules that changed in 2025. This shows why every imported fact needs a dated primary check, and why our own `checked` dates matter.

## 3. Gemini red-team points: verdicts and what we did

| Red-team point | Verdict | What we did |
|---|---|---|
| 1.1 Denominator manipulation (CSEA "not seeking") | Mechanism supported (CGE formula, LBS CSEA note); size unknown | evidence/how-numbers-mislead.md A1; whole-cohort reading added to Admetia's reporting standard |
| 1.2 Volunteer response bias in salaries | Supported (FT coverage: Bocconi 55%, TUM 15%; CGE response falls to 36.6%) | evidence/how-numbers-mislead.md A2 |
| 2.1 French alternance "legal wall" for non-EU students | **Contradicted** by service-public (Jun 2026). The real constraints are a validated contract, the 964-hour cap on ordinary student jobs, and the practical French-language bar | Corrected rule in places/student-logistics.md; not shown as a legal barrier |
| 2.2 Swiss quota "meat-grinder" | Quota verified (8,500 for 2026); "95% excluded" unsupported | Quota and the "high economic interest" rule in places/student-logistics.md; product warning in product/product-map.md |
| 2.3 UK day-zero visa cash | Supported, and **larger** than Gemini says: £937 + £1,035 × years of IHS (≈ £2,490 for 18 months; ≈ £3,007 for 24 months) | places/student-logistics.md; month-zero cash item in product/product-map.md |
| 3.1 "10:1 target-school overhang", "90% of target students fail" | Concept sound (base rates); every component number is invented | Not adopted as numbers. The base-rate logic is used with verified anchors (Goldman ~2,500 interns, <1%) in evidence/how-numbers-mislead.md E1 |
| 3.2 German automotive downturn, OEM schemes cut 40–60%, graduates pushed to temp agencies | Direction plausible; figures unverified | Next-run brief |
| 3.3 Consulting deferred starts | Partly supported (2023 deferrals reported in careers/consulting.md, snippet-level) | Already in careers/consulting.md claims |
| 4.1 Social and cultural capital in final rounds; who can afford gap years | Supported in the literature (Rivera, cited in getting-in/employer-pipelines.md). The affordability point is valid: Italian internships pay €600–1,000/month (places/italy-playbook.md) | Socioeconomic feasibility added to product/product-map.md; caveat added in decisions/should-you-do-a-masters.md |
| 4.2 Attrition, mental health ("52% exit in 24 months", stimulant use) | Topic valid; numbers unsourced | Next-run brief (our gap A4) |
| 5 Expat tax regimes as legislative risk | Supported (Italy's 2024 cut from 70%/90% to 50%; 2026 recodification; Dutch changes) | evidence/how-numbers-mislead.md D3; with/without-relief rule in product/product-map.md |
| 6 Missing hubs (Gulf, CEE nearshoring, life sciences) | Valid gaps | Next-run brief |

## 4. Datasets and engines: use or not?

- **Don't import Gemini's JSON as-is.**
  - Gemini's own check found 95 of 190 programmes with unverified fields.
  - Its ledger mislabels outdated values as verified.
  - Its employer file (328 employers) asserts feeder schools and visa sponsorship without traceable sources in the cases checked.
- **Do borrow the schema ideas:**
  - `unverified_fields` per record;
  - tax test vectors per country;
  - a freshness register of volatile rules with monitoring URLs.

  These match product/product-map.md §4 (our `src` and `checked` fields). Re-populate them from primary sources, starting with the ~70 calculator programmes.
- **The ROI and tax "engines" are specifications, not evidence.** Their outputs (e.g. "−€42,150 NPV", "+€118k capital delta") depend on unverified inputs. Use the structure (NPV with opportunity cost, debt amortisation, scenario branches), not the numbers.

## 5. Brief for the next research run (Gemini topics, to be researched to our standard)

Gemini's figures below are **leads only**: unverified, often uncited. Each item lists the primary sources to use.

1. **Long-horizon careers** (our gap A2, A4):
   - attrition in IB, MBB and Big 4;
   - promotion timelines;
   - up-or-out;
   - UK settlement continuity (the 180-day absence rule);
   - German settlement after 21 months with B1 (§18c AufenthG);
   - childcare costs by city.

   *Sources:* firm disclosures, Home Office guidance, BAMF, OECD Family Database, national surveys.
2. **Healthcare and pharma commercial careers:**
   - Basel (Novartis, Roche, Lonza);
   - Copenhagen/Medicon Valley (Novo Nordisk);
   - market access, pricing, brand roles;
   - graduate programmes and pay.

   *Sources:* employer programme pages, Medicon Valley Alliance, BFS and Statistics Denmark. *Gemini leads (unverified):* Basel entry CHF 110–125k; Danish DKK 500–560k.
3. **Commodity trading:**
   - the traffic/operations entry door;
   - Geneva master's pipelines (University of Geneva, with SuisseNégoce);
   - pay structure.

   *Sources:* SuisseNégoce publications, trading-house careers pages. *Gemini lead:* "50% of free-market oil traded via Switzerland and London", which needs the SuisseNégoce fact sheet.
4. **Industrial, automotive and defence:**
   - IG Metall pay tables (Entgeltgruppen) and the 35-hour week;
   - the 2024–26 automotive restructuring (VW, Bosch, ZF, Continental);
   - the defence hiring boom (Rheinmetall, Leonardo, Airbus D&S, Safran);
   - Italy's Motor Valley.

   *Sources:* IG Metall regional tables, company press releases, Destatis. *Gemini leads:* OEM trainee cuts of 40–60%; temporary-agency entry at €42–48k.
5. **Luxury and fashion pay:** our persistent gap. *Sources:* employer programme pages (LVMH, Kering), French and Italian collective agreements, CGE data by sector.
6. **The Gulf and CEE as first-job destinations:**
   - Saudization and Emiratisation rules for consulting and finance;
   - Warsaw and Kraków bank and tech hubs.

   *Sources:* MoHRE (UAE), HRSD (Saudi), firm press releases, GUS (Poland).
7. **Origin-country playbooks** beyond Italy (Spain, France, Germany, Greece, Portugal first; then India, China, Turkey, Brazil). *Sources:* national grading bodies and loan schemes.
8. **Mid-career switchers and the MBA track** (the calculator's 43 MBA schools). *Sources:* GMAC, school class profiles and employment reports.
9. **Application and interview craft:** practical guides built on employer-published process pages (already partly in getting-in/recruiting-calendar.md).
10. **Product and business research** (kept separate from student content): competitors, willingness to pay, GDPR, VAT. Gemini's "€49 pass / €19 per month / €249 concierge" are proposals, not evidence.

## Hypotheses tested

**G-1. "A broader AI-generated library is a substitute for a narrower, verified one."** Verdict: **not supported.** 7 of 20 spot-checked Gemini claims were outdated, misstated, contradicted or partly wrong, and 6 more had no traceable source. Only 6 matched primary sources outright. Breadth is useful for *finding questions*. It's unsafe as *evidence*.

**G-2. "Gemini's red team identifies real blind spots in our library."** Verdict: **supported.** Denominators, response bias, day-zero cash, Swiss quotas, legislative risk and socioeconomic feasibility were all real gaps or under-emphasised. Three of its factual claims were wrong, though (§3).

## Decision rules

1. **If** a fact comes from the Gemini library, **then** treat it as a lead and verify it against the primary source before use, **because** 7 of 20 checked claims were outdated, misstated or contradicted, and 6 more had no traceable source.
2. **If** a Gemini claim cites "audited", "LinkedIn Talent Insights" or a study with an exact sample size but no URL, **then** assume it's unsupported until a document is found.
3. **If** a rule changed in 2024–26 (UK visa thresholds, fees, Swiss quotas, expat tax regimes), **then** check the official page on the day of publication, **because** even "VERIFIED" ledgers go stale.
4. **If** a Gemini topic fits the audience but has no verified anchors yet, **then** publish it only as a "what we're researching" note, not as advice.

## Claims to verify

1. The full CSEA "not seeking" category list (cseaglobal.org blocked).
2. The Dutch non-EU student work rule (16 hours a week, or full-time in June–August, with an employer-obtained TWV). This is common knowledge, but the IND page URL tried returned 404.
3. The UK deposit cap (5 weeks' rent where annual rent is under £50,000) after the Renters' Rights Act 2025. The Tenant Fees Act guidance page is withdrawn.
4. Free health coverage for non-EU students in France via etudiant-etranger.ameli.fr (ameli page read; "free" not stated).
5. All Gemini leads in §5.

## Sources (checked for this file)

- GOV.UK Graduate visa: https://www.gov.uk/graduate-visa
- GOV.UK Immigration Health Surcharge: https://www.gov.uk/healthcare-immigration-application/how-much-pay
- GOV.UK Skilled Worker salary rules: https://www.gov.uk/skilled-worker-visa/your-job
- GOV.UK Immigration Rules, Appendix Student (work conditions): https://www.gov.uk/guidance/immigration-rules/immigration-rules-appendix-student
- §16b AufenthG: https://www.gesetze-im-internet.de/aufenthg_2004/__16b.html
- Swiss Federal Council, third-country quotas 2026 (19 Nov 2025): https://www.admin.ch/en/newnsb/7HwBjdg5HpBA
- service-public.gouv.fr, work authorisation for foreign employees, incl. students and apprentices (updated 18 Jun 2026): https://www.service-public.gouv.fr/particuliers/vosdroits/F2728
- service-public.gouv.fr, dépôt de garantie (updated 9 Jun 2026): https://www.service-public.gouv.fr/particuliers/vosdroits/F31269
- §551 BGB (rental deposit): https://www.gesetze-im-internet.de/bgb/__551.html
- ameli.fr, coming to study in France (updated 19 Jan 2026): https://www.ameli.fr/assure/droits-demarches/europe-international/protection-sociale-france/vous-venez-etudier-en-france
- Gemini library (read-only): /Users/alessandro/Documents/Vibe Coding Projects/admetia Gemini/research/ (v1 files; v2/README.md; v2/audit/claim-ledger.csv; council-audit.md; the breadth/depth files' bottom lines)
