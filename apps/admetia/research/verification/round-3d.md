---
title: Verification round 3d (P2, P13, P17: IBD degree mix, sponsorship odds by employer type, internship-to-full-time conversion)
last_researched: 2026-10-02
scope: Primary-source verification of three weak claims from verification/claims-to-verify.md section 4. P2 is the IBD-only degree mix (finance vs STEM vs other) in London and European analyst classes, 2024-26. P13 is sponsorship odds by employer type and evidence that needing a visa lowers hiring odds. P17 is summer-internship-to-full-time conversion in London investment banking. Log of what each source says, status, and every edit to body files. Immigration information is general and is not advice.
confidence: medium for P13 (the UK register and Home Office tables were read directly, but employer-type odds are inferred, not measured), low for P2 and P17 (no primary bank data exist, so the answer is a documented gap)
review_by: 2027-03-31
---

# Verification round 3d (2 October 2026)

Method notes: pages fetched with curl -A 'Mozilla/5.0', WebFetch, WebSearch and the browser pane (eFinancialCareers blocks curl with a CAPTCHA, but loaded in the browser pane); PDFs read with pypdf; the UK sponsor register CSV and the Home Office .xlsx read with Python. Helper scripts were kept in the session scratchpad. Status vocabulary: CONFIRMED / CORRECTED / PARTLY CONFIRMED / STILL UNVERIFIED. Evidence tags: [data], [employer-stated], [practitioner consensus], [anecdotal]. Nothing was taken from LinkedIn.

## Summary

- **P2 (IBD-only degree mix, 2024-26): STILL UNVERIFIED, and "no better source exists" is the honest result.** No bank, school, trade body or reputable analysis published an IBD-only degree split for 2023-26 in anything I could read. The 2016-17 eFinancialCareers analyses remain the latest division-level data. The Goldman 2026 intern class came with no discipline breakdown. Nothing found contradicts the "partly supported" verdict on H3.
- **P13 (sponsorship by employer type; visa need and hiring odds): PARTLY CONFIRMED.** Employer-type pattern is now supported by three independent data sets: the UK sponsor register (about 122,000 organisations hold a Skilled Worker licence on 2 Oct 2026; every large bank, MBB and Big 4 firm I name-checked is on it), Home Office grants by sponsor industry (finance and insurance = 22.1% of Skilled Worker entry-clearance grants in the year to June 2026), and an employer survey (HEPI/IoD, Jan 2023: 5% of firms under £250k turnover had sponsored vs 18% over £50m). Evidence that *needing a visa lowers hiring odds*: only an employer-willingness series (GMAC 2026: 81% of Western European and about 33% of US employers will hire graduates needing legal documentation). No audit or correspondence study isolating visa need was found. STILL UNVERIFIED as a causal odds penalty.
- **P17 (summer-to-full-time conversion, London IB): STILL UNVERIFIED for banks; the 70-90% figure stays [anecdotal].** No bank, Big 4 or school page publishes it. Best adjacent data: Trackr spring-week to summer conversion (31% in 2025, 20% in 2026, self-selected surveys), a 2023 eFinancialCareers report relaying forum posts (Rothschild no more than 30%, Morgan Stanley no more than 50% in some US groups, "upwards of 75%" in good years), and an ISE all-sector UK intern-to-graduate-offer figure of 50% (2025) that I could only find in a secondary blog.

## P2. IBD-only degree mix, London and European analyst classes, 2024-26 (careers/finance.md bottom line 5, s5.1-5.3, H3, claims 2-3, evidence/trends.md STEM row)

**What I checked and what each source contains.**

| Source (date) | Read how | Degree-mix content |
|---|---|---|
| Fortune, "Goldman Sachs intern acceptance rate falls below 1% for third straight year", 8 Jun 2026, https://fortune.com/2026/06/08/exclusive-goldman-sachs-intern-acceptance-rate-falls-below-1-for-third-straight-year/ | curl, full text | 2,500 interns from 500+ universities, 90+ nationalities; about 2,500 entry-level hires; extras on athletes and musicians. No discipline split [employer-stated, via press] |
| Fortune, Goldman 2025 intern class, 16 Jun 2025, https://fortune.com/2025/06/16/goldman-sachs-internship-summer-analysts-wall-street-tpg-olaplex-red-lobster | curl, full text | Acceptance and applicant counts only; no discipline split |
| eFinancialCareers "Inside Knowledge: Careers in Banking and Financial Markets 2025/26" (Sept 2025, hosted by Imperial College Careers), https://www.imperial.ac.uk/media/imperial-college/administration-and-support-services/careers-service/public/resources/efinancialcareers-Careers-in-Banking-and-Financial-Markets-2526.pdf | pypdf, about 367,000 characters, searched for degree, STEM, major, subject | Qualitative remarks on engineers and electronic trading. No table of analyst degrees |
| Bridge Group / Progress Together, "Shaping the Sector", 2 Oct 2024, https://www.thebridgegroup.org.uk/research-1/2024/10/02/shaping-the-sector | curl (press page only; the full report was not opened) | Socio-economic background, not degree subject: 58% of senior staff vs 45% of junior staff from a higher socio-economic background; 200,000 employees; senior lower-SEB share 28% (26% in 2023) [data]. Sector-wide, not IBD, not degree |
| High Fliers "The Graduate Market in 2024" (public PDF), https://warwick.ac.uk/fac/sci/statistics/highfliers-graduate-market-report-2024.pdf; 2023 edition https://www.highfliers.co.uk/download/2023/graduate_market/GMReport23.pdf | pypdf | Applications per vacancy, salaries, university targeting. No degree-subject mix of investment-bank hires |
| CFA Institute, "How to pursue a career in finance with STEM qualifications", https://www.cfainstitute.org/insights/articles/how-to-pursue-a-career-in-finance-with-stem-qualifications | curl | Skills-gap survey on AI; no analyst class mix |
| Trackr Summer Internship reports 2023/24 and 2024/25 | pypdf | Respondent mix by year and prior experience, not degree subject of hires |
| Searches for Goldman or other bank "class profile", "STEM share", "analyst class degrees" 2024-26; for eFinancialCareers profile analyses of M&A analysts; for City of London Corporation / Sutton Trust / Bright Network degree data | WebSearch | Only job-posting analyses (365financialanalyst: share of postings naming a degree, not hires), coaching sites and the 2016-17 eFinancialCareers pieces already in the library. Nothing usable |

| Claim as written | What the primary source says | Status | Edit |
|---|---|---|---|
| "The best available data (2016-17) show economics and finance degrees dominating analyst and intern classes"; "No bank publishes the major split for its IBD analyst class" (careers-finance bottom line 5, s5.2) | Re-checked on 2 Oct 2026 against the sources above: still no 2023-26 IBD-only split from any bank, school or reputable analysis I could open. Goldman's 2026 class story carries no discipline data | STILL UNVERIFIED (the gap is real, not a search failure of one outlet) | one sentence recording the 2 Oct 2026 re-check added to s5.2; claim 3 reworded |
| Goldman intern class "~45% STEM (2021), up from 37%" as the only recent series | Unchanged. The 2026 and 2025 Goldman disclosures give size and acceptance rate only. The 45% is firm-wide, all divisions, and 2021 is five years old | CONFIRMED as the last disclosed number; stale | label "last disclosed; none since" added in s5.1 |
| H3 verdict "partly supported; the sharpest test (banks' own 2024-26 IBD-only splits) is not public" | Still true | CONFIRMED | none |

**What would settle it.** A bank's UK diversity or early-careers disclosure that names degree subject, or a school report (LSE, Oxford, Imperial careers destination surveys) that reports IB hires by subject. I found neither. A LinkedIn-profile count is the only route left and is outside the platform terms for this library.

**Bottom line for the site.** Say "no bank publishes the degree mix of its IBD analyst class; the last division-level data are from 2016-17; the firm-wide Goldman intern class was about 45% STEM in 2021". Do not give students a 2025 STEM-vs-finance percentage for M&A.

## P13. Sponsorship odds by employer type; visa need and hiring odds (places/visas-and-work-rights.md s9, claim 19, bottom line 3; evidence/base-rates-and-failure-modes.md; getting-in/breaking-in.md)

**Access.** (1) GOV.UK Register of Worker and Temporary Worker licensed sponsors, file dated 2 Oct 2026 (https://assets.publishing.service.gov.uk/media/6abf628355bc01d752a7f28a/SP_-_Worker_and_Temporary_Worker_Web_Register_-_2026-10-02.csv; located through the GOV.UK content API for https://www.gov.uk/government/publications/register-of-licensed-sponsors-workers), read with Python. (2) Home Office "Sponsored work entry clearance visas by occupation and industry (SOC 2020), year ending June 2026", published 27 Aug 2026 (https://assets.publishing.service.gov.uk/media/6a85c4761b45e4e555421edd/occupation-soc2020-visas-datasets-jun-2026.xlsx; table Data_Occ_D02, grants), read with openpyxl. (3) GMAC Corporate Recruiters Survey 2026 report PDF (https://www.gmac.com/-/media/files/gmac/research/employment-outlook/2026-corporate-recruiters-survey/report.pdf; pypdf; also read in round 3c). (4) HEPI Policy Note 43, "'Not heard of this': Employers' perceptions of the UK's Graduate Route visa", 5 Jan 2023 (PDF https://www.hepi.ac.uk/wp-content/uploads/2023/01/Not-heard-of-this-Employers-perceptions-of-the-UKs-Graduate-Route-visa.pdf; blog https://www.hepi.ac.uk/2023/01/05/not-heard-of-this-just-3-of-employers-have-knowingly-used-the-graduate-route-visa-to-tackle-their-skills-shortages/). (5) MAC Rapid Review of the Graduate Route (May 2024), already in the library.

### A. What the sponsor register can and cannot say

The register lists organisation name, town, county, licence type and rating, and route. **It has no sector, size or SIC field, so a count "by sector or size" is not possible from the file.** What can be counted:

| Measure (register dated 2 Oct 2026) | Figure |
|---|---|
| Rows (organisation x route) | 143,138 |
| Unique organisation names | 127,606 |
| Rows on the Skilled Worker route | 123,107 (122,238 unique names) |
| Rows on Global Business Mobility: Senior or Specialist Worker | 10,449 |
| Rows on Global Business Mobility: Graduate Trainee | 621 |
| Skilled Worker rows with a London town/city | 35,497 (28.8%) |
| Rating | 137,329 worker rows A-rated; 87 B-rated |

Context: HEPI's 2023 note said "only 32,000 UK organisations out of a total of 1.4 million employers" were on the register (written late 2022). I did not reconcile that with today's 122,000; the 2026 file includes name variants and every worker route. Treat "about one in eleven UK employers" (122,000 / 1.4 million) as an order of magnitude only, because the 1.4 million employer count is HEPI's 2022 figure and I did not re-check it.

**Name-matched check of employer types students ask about** (case-insensitive substring match on the Skilled Worker rows; presence of a licence does not mean the firm sponsors *graduates* or *this* role):

| Employer type | Entities found on the Skilled Worker register |
|---|---|
| Bulge-bracket and large banks | Goldman Sachs International; JPMorgan Chase Bank, National Association; Morgan Stanley UK Limited; Barclays Bank PLC (three Barclays entities); HSBC Holdings plc; Citi Group; UBS AG; Bank of America, N.A.; Standard Chartered Bank; Lloyds Bank plc; NatWest Group PLC; BNP Paribas London Branch; Societe Generale London Branch; Santander UK PLC; Mizuho International plc |
| Elite boutiques and mid-market | Lazard & Co., Services Limited; N.M. Rothschild & Sons Limited; Evercore Group Services Limited; PJT Partners UK Limited; Moelis & Company UK LLP; Houlihan Lokey UK Limited; Jefferies International Limited; Perella Weinberg UK Limited |
| Strategy consulting | McKinsey & Company Inc. United Kingdom; The Boston Consulting Group UK LLP; Bain & Company United Kingdom LLP; Oliver Wyman Limited; Roland Berger; A T Kearney Limited |
| Big 4 and accounting | Deloitte LLP; PricewaterhouseCoopers LLP; "Ernst & Young" (plus EY Private Client Services Limited); KPMG LLP (Local Hires, plus other KPMG entities); BDO LLP |
| FMCG, luxury, tech | Unilever UK Limited; L'Oreal UK Ltd; Reckitt Benckiser Group Plc; Diageo plc; LVMH Services Limited; Chanel Limited; Burberry Limited; Google (UK) Limited; Microsoft Limited; Amazon UK Services Ltd |
| Trading firms | Jane Street Europe Limited; Hudson River Trading Europe Ltd. |
| No entry with that exact name string | Deutsche Bank (only other "Deutsche" entities appear), KKR, Credit Suisse. The firm may be licensed under a different legal name; this is a limit of name matching, not evidence the firm does not sponsor |

So the claim "banks, MBB and Big 4 are licensed sponsors" is **CONFIRMED by name** for the firms checked. A licence is a necessary condition only. The Skilled Worker route also needs a role at the right skill level and pay: £33,400 for a new entrant (70% of the going rate) or £41,700 otherwise (see places/visas-and-work-rights.md s1.3) [data].

### B. Home Office: who actually brings in Skilled Workers (by sponsor industry)

Table Data_Occ_D02 (grants of entry clearance; main applicants applying from outside the UK; sponsor-declared industry), year ending June 2026 = quarters 2025 Q3 to 2026 Q2. The "Skilled Worker" subgroup excludes the separate Health and Care Worker route.

| Sponsor industry (self-assigned) | Skilled Worker grants, YE Q2 2026 | Share |
|---|---|---|
| Financial and Insurance Activities | 5,933 | 22.1% |
| Professional, Scientific and Technical Activities (includes consulting, law, engineering, accounting) | 5,310 | 19.8% |
| Information and Communications | 3,640 | 13.6% |
| Manufacturing | 2,307 | 8.6% |
| Education | 1,720 | 6.4% |
| All industries | 26,798 | 100% |

Within finance and insurance, the largest occupation minor groups were Finance Professionals (SOC 242) 2,394, IT Professionals (213) 1,077, Business, Research and Administrative Professionals (243) 895, Functional Managers and Directors (113) 511, Finance Associate Professionals (353) 349. Graduate Trainee (Global Business Mobility) grants in the same year: 427 in total, of which 74 (17%) were in finance and insurance (largest: manufacturing 109) [data].

**Trend and caveats (read before quoting).** Finance's share of Skilled Worker grants was 9.1% (YE Q2 2024), 16.2% (YE Q2 2025) and 22.1% (YE Q2 2026), but the denominator fell from 71,268 to 38,258 to 26,798 while finance grants barely moved (6,472, 6,182, 5,933). So the rising share reflects a shrinking pool elsewhere, not growth in banking sponsorship. Quarters from Q1 2021 to Q3 2024 are modelled estimates converted from SOC 2010, Q1 2026 onwards is provisional, and the "Industry" field is self-assigned by the sponsor (Home Office notes 1, 3 and 9). **The dataset covers entry clearance applications made outside the UK. It does not capture people already in the UK who switch from the Graduate visa to Skilled Worker, which is the main route for UK master's graduates**, so it understates the share of UK-educated graduates in each industry. The MAC (May 2024) found that about half of Graduate visa holders switched to work or study routes, mostly Skilled Worker [data].

### C. Employer surveys on size and willingness

| Source | Figure | Reading |
|---|---|---|
| HEPI Policy Note 43 (Jan 2023; fieldwork late Oct 2022; 656 members of the Institute of Directors; HEPI/Kaplan) | 5% of firms with turnover under £250,000 had sponsored a visa, against 18% of firms over £50 million. 35% had not but would consider it; 28% had not and would not. Of non-sponsors, 60% said they could find skills without the visa system and 21% (about one in five) were put off by hassle, cost or waiting time [data, IoD members only, not representative; pre-2023 so possibly stale] | The only quantified firm-size gradient I found. Sponsorship is a large-firm behaviour. Cost and complexity, not hostility to foreigners, is the stated reason |
| GMAC Corporate Recruiters Survey 2026 (621 employers, 39 countries; fieldwork 2026) | Prose p.40: "Four-of-five employers in Western Europe and Asia were willing to hire GME graduates who require additional legal documentation", a 17-point rise for Western Europe against 2025; "just under one-third of U.S. employers" were open to hiring international talent, roughly flat on 2025 and 26 points below 2022. Respondent table (alphabetical columns, read as): Western Europe n=144, United States n=173 [data, survey of employers that recruit from business schools] | Willingness to hire, not hiring odds. Western Europe is not split into UK and EU. The US figure is consistent with the library's H-1B material (weighted lottery, $100,000 proclamation) |
| JobPing blog, "Spring Weeks vs Summer Internships" (Aug-Sep 2026) | "Fewer than 6% of UK early-career roles explicitly flag Skilled Worker sponsorship" | [anecdotal]: secondary blog, no method stated. Not used in the body |

### D. Does needing a visa lower hiring odds?

- **Audit or correspondence studies on visa status: none found.** WebSearch for field experiments on "visa sponsorship" or "requires sponsorship" and callbacks returned general hiring-discrimination correspondence studies (ethnicity, gender, age) and nothing isolating visa need for UK or EU graduates. One search summary mentioned a US experiment in which foreign-born applicants signalling a need for H-1B sponsorship did not receive fewer responses; I could not open the paper, so this is snippet only and not used.
- **Indirect evidence points one way, but is not an odds ratio.** Employers state willingness (GMAC), small firms decline for cost and complexity (HEPI), and the Skilled Worker salary floors and the ISC (£1,320 a year for large sponsors in the library's visas file, s1.4) are a hard cost per hire [data]. None of this measures how much a candidate's callback or offer probability falls when they need sponsorship.
- **ISE written evidence to Parliament** (AEIAG0038, https://committees.parliament.uk/writtenevidence/107176/pdf/) reportedly says international students are about 10% of graduates hired by ISE's mostly large members and that SMEs lack the resources and appetite to sponsor. The page returned 403 to curl and WebFetch, so this is [anecdotal] (search summary only) and is not used.

| Claim as written | What the source says | Status | Edit |
|---|---|---|---|
| "Which employer types sponsor (banks, MBB and Big 4 yes; SMEs rarely)" (visas s9 last bullet, claim 19) | Register: all named banks, boutiques, MBB and Big 4 entities found by name. Home Office: finance and insurance 22.1% and professional/technical 19.8% of outside-UK Skilled Worker grants (YE Q2 2026). HEPI 2023: 5% of the smallest firms vs 18% of the largest had sponsored. Register has no size or sector field, so no register-based "SME share" can be given | PARTLY CONFIRMED (pattern supported; "SMEs rarely" rests on one 2023 IoD poll; no firm-size or sector count of the register) | s9 bullet rewritten with the figures; claim 19 narrowed |
| "Quantitative evidence that needing a visa lowers hiring odds" (claim 19) | Only employer willingness (GMAC 2026: Western Europe 81%, US about 33%; US 26 points below 2022) and cost-driven reluctance (HEPI). No callback or offer-rate study | STILL UNVERIFIED (as an odds penalty); PARTLY CONFIRMED as "employers state lower willingness, most in the US" | GMAC sentence added to s9; claim 19 rewritten |
| "Under half of UK Graduate-visa holders move onto a work visa" (bottom line 9) | MAC May 2024: 50% switched to a work or study visa; 86% of those to Skilled Worker (so about 43% of the cohort to Skilled Worker; 50% includes study) | PARTLY CONFIRMED: "under half" holds for Skilled Worker (about 43%); the 50% includes returns to study | none (wording already says "work or study visa" in s9) |
| Bank-by-bank sponsorship of graduates | Not available. The register shows a licence, not sponsorship of entry-level hires. 621 Graduate Trainee (GBM) rows exist, which covers intra-group transfers, not local hires | STILL UNVERIFIED | none |

**Not pursued (time cap).** MAC annual report (Dec 2025) and MAC salary-requirements review (17 Dec 2025: seen only in a search summary); NFAP or other US H-1B employer-type studies (the library's visas file already covers the weighted lottery and $100,000 proclamation); Home Office sponsor-licence counts by route as at 15 June 2026 (LexisNexis summary only: Skilled Worker 86%).

## P17. Summer-internship-to-full-time conversion, London investment banking (careers/finance.md s1.1, claim 4; evidence/base-rates-and-failure-modes.md s4; getting-in/recruiting-calendar.md claim 10)

**What I checked.** Barclays early-careers page (https://search.jobs.barclays/early-careers), Citi internships page (https://jobs.citi.com/early-career-programs-internships), JPMorgan IB Summer Analyst and Full-Time Analyst pages (https://www.jpmorganchase.com/careers/explore-opportunities/programs/investment-banking-summer-analyst; .../investment-banking-fulltime-analyst), Fortune on Goldman (8 Jun 2026), High Fliers 2023 and 2024 public reports, ISE insight pages (508, 513, 498; 2025), Trackr PDFs (Spring Weeks Season Insights 2025; Summer Internship Season Reports 2023/24 and 2024/25), Trackr blog posts, eFinancialCareers (14 Aug 2023, in the browser pane), and coaching sites returned by search.

| Claim as written | What the primary source says | Status | Edit |
|---|---|---|---|
| "No published bank-level conversion rate" (careers-finance s1.1) | Confirmed again. Barclays gives no figure. Citi says only that programmes "offer a clear pathway to potential full-time roles" and "the opportunity to be offered a full-time analyst role after successful internship". JPMorgan's IB summer and full-time pages carry no conversion figure. Goldman discloses 2,500 interns and about 2,500 entry hires (Fortune, 8 Jun 2026), not a conversion rate and not how many hires were interns. High Fliers' public 2023 and 2024 reports have no investment-bank conversion figure (the 2023 report says a quarter of the 2022 graduates hired by the top employers came through work-experience programmes, across all sectors) [employer-stated / data] | CONFIRMED (the gap) | none beyond wording |
| "70-90% convert" (forums and coaching sites) | Repeated across coaching sites (Extern, Wall Street Mastermind, SuperdayAI, accessecs and similar) with no named dataset; one search summary even attributes "conversion near 65-75% at HSBC" and "Goldman 60-70%" to unnamed sources. The only press-relayed numbers are from 2023: eFinancialCareers (S. Butcher, 14 Aug 2023, https://www.efinancialcareers.com/news/2023/08/internship-conversions-banking-2023) reported Wall Street Oasis posters saying "no more than 30% and 50% (in some groups at MS)" of interns at Rothschild and Morgan Stanley got full-time offers (US classes), and wrote "In good years, upwards of 75% of interns can receive return offers" [anecdotal, relayed by a specialist outlet; US interns; no named source for the 75%] | STILL UNVERIFIED; PARTLY CONFIRMED only as "a good-year range, cyclical, and much lower in a downturn (2023)" | claim 4 rewritten; s1.1 bullet rewritten |
| ISE intern-to-graduate conversion (the brief's suggestion) | ISE's own pages I could read (2025 insight pieces) give intern hiring counts and applications per hire (101 per internship, 123 per placement) but no conversion rate. The figure "50% of interns converted to a graduate offer in 2025, 54% the year before" appears only in secondary pages (JobPing blog, updated 28 Sep 2026, citing "ISE's 2025 employer survey ... 175 employers"; a search summary quoted the same), while search summaries of ISE's own survey description say 155 employers (the 155 was not on the ISE pages I opened, so the discrepancy is itself unconfirmed). The primary report is paywalled | STILL UNVERIFIED (secondary; not sector-specific; possible employer-count discrepancy) | recorded as unverified in s1.1 and claim 4 |
| Trackr (adjacent step, spring week to summer) | Trackr Spring Weeks Season Insights 2025 (136 respondents, 168 offers; PDF https://the-trackr.com/wp-content/uploads/2025/08/Spring-Weeks-Season-Insights-2025.pdf): 31% of spring interns "landed return offers", 38% fast-tracked, 31% rejected (excluding non-convertible spring weeks). Trackr 2026 (https://the-trackr.com/blog/spring-weeks-season-insights-2026): 20% direct return offer, 44% fast-tracked, 36% nothing, 49% of applicants with no offer [data, self-selected platform users]. Trackr's 2023/24 summer report (126 respondents) mentions "low 2023 full-time conversion rates" in prose with no figure | PARTLY CONFIRMED for the first step only (spring to summer); no Trackr figure for summer to full-time was found | s1.1 sentence added |
| "Bank-level conversion varies from near 90% to near 15%" (JobPing, attributed to Trackr) | Not found in any Trackr document I read; the eFinancialCareers/Trackr coverage says only that conversion "varies wildly between banks" (search summary). Spring-to-summer, not summer-to-full-time | STILL UNVERIFIED | not used |
| eFinancialCareers 2026: an MD saying 2026 interns "will be lucky to get an offer at all this year" | Seen only in search summaries; I could not locate and open the article. The same summaries attach it to the "banks cutting junior classes by two-thirds" story that the library already marks unsupported (claims-to-verify s5) | STILL UNVERIFIED (snippet only) | not used |

**Reading for students.** There is no published London IB summer-to-full-time conversion rate. The honest framing is: (1) banks do not disclose it; (2) press and forum figures put a normal year at about 70-90% but 2023 showed it can fall to 30-50% at some firms, so it moves with the deal cycle and the bank's headcount plan; (3) the nearest hard data are for the step before (spring week to summer, 20% to 31% direct, plus fast-tracks) and for all UK sectors (ISE, a reported 50%, unverified). **The "internship is the door" rule survives on the weaker evidence of Goldman's 1:1 ratio of interns to hires and press reports, not on a published conversion statistic.** Never present 70-90% to a student as a measured rate.

## Edit log

Research folder is untracked in git, so these pairs are the record.

**careers/finance.md** (P2, P17)
1. s1.1, third bullet. Old: "Published bank-level summer-to-full-time conversion rates were not found on primary sources this session. Figures of 70-90% circulate on forums and coaching sites. See Claims to verify." New: states that no bank publishes it (Barclays, Citi, JPMorgan pages and the Goldman Fortune story re-read 2 Oct 2026), the 2023 eFinancialCareers report relaying forum posts (30% Rothschild, 50% some Morgan Stanley groups, "upwards of 75%" in good years), Trackr spring-to-summer 31% (2025) and 20% (2026), and the secondary-only ISE 50% (2025) figure; ends with "treat 70-90% as a good-year anecdote".
2. s5.2, second bullet. Old: "...(London front office, 2016-17) show economics and finance dominating... [practitioner consensus; stale, pre-2020]". New: adds "Re-checked on 2 Oct 2026 (round 3d): no bank, school or trade-body source gives a 2023-26 IBD-only split; the Goldman 2025 and 2026 intern-class stories carry no discipline data."
3. s5.1 table, Goldman 2021 row: appended "(last disclosed breakdown; none found for 2022-26)".
4. Claims to verify #3 and #4 reworded (re-checked 2 Oct 2026; conversion evidence listed; still unverified).

**places/visas-and-work-rights.md** (P13)
5. s9, bullet "Which employer types sponsor, and hiring-odds penalties: not confirmed from primary data (Claims to verify #19)." New: a sourced bullet with register counts (about 122,000 Skilled Worker licence holders, 2 Oct 2026; named banks, boutiques, MBB and Big 4 entities present; register has no sector or size field), Home Office grants by sponsor industry (finance and insurance 22.1%, professional/technical 19.8% of outside-UK Skilled Worker grants, YE Q2 2026, with the in-country switcher caveat), HEPI 2023 size gradient (5% vs 18%), GMAC 2026 willingness (Western Europe 81%, US about 33%), and the statement that no audit study isolating visa need was found.
6. s9, "Cost" bullet: "Small firms often decline." now carries "(HEPI 2023: 5% of firms under £250k turnover had sponsored vs 18% over £50m) [data]".
7. Claims to verify #19 rewritten as PARTLY RESOLVED (round 3d).

**evidence/base-rates-and-failure-modes.md** (P17, consistency)
8. s4.2, last bullet: added that the "around 40%" attributed to ISE is contradicted by a secondary "50% in 2025, 54% in 2024" figure; neither read on a primary page. Added the 2023 eFinancialCareers figures to s4 "What is published" paragraph.

## Items for lead-owned files and freshness register

**Freshness-register candidates (volatile figures and re-check URLs)**

| Item | Value (date) | Re-check |
|---|---|---|
| UK licensed sponsor register size | 127,606 unique names; 122,238 on Skilled Worker (2 Oct 2026) | https://www.gov.uk/government/publications/register-of-licensed-sponsors-workers (republished on working days) |
| Home Office Skilled Worker grants by sponsor industry | finance and insurance 22.1% of 26,798 outside-UK grants, YE Q2 2026 | https://www.gov.uk/government/statistical-data-sets/immigration-system-statistics-data-tables (quarterly; next release Nov 2026) |
| GMAC willingness to hire candidates needing legal documentation | Western Europe 81%, US about 33% (2026) | GMAC Corporate Recruiters Survey, annual (about June) |
| Trackr spring-to-summer return offers | 31% (2025), 20% (2026) | https://the-trackr.com/blog (spring report each Aug-Sep; summer report each Apr-Dec) |
| ISE intern-to-graduate conversion (secondary: 50%, 2025) | unverified | ISE Student Recruitment Survey, Nov each year |

**Edits needed in lead-owned files (not made by me)**
- verification/claims-to-verify.md section 4: mark P2 "STILL UNVERIFIED: no 2023-26 IBD-only data exists in public; last division data 2016-17"; P13 "PARTLY CONFIRMED: register, Home Office industry table, HEPI and GMAC figures in verification/round-3d.md; no audit study found"; P17 "STILL UNVERIFIED: no bank, school or Trackr summer-to-full-time figure; 2023 range 30-50% reported; 70-90% anecdotal". The appendix lines for careers-finance (items 3-4) and visas (item 19) should change likewise.
- evidence/hypotheses.md H3: no change to the verdict ("partly supported"); add "re-checked 2 Oct 2026, still no IBD-only 2023-26 data".
- evidence/trends.md line 81 (STEM share row): append "no newer firm-wide or IBD-only disclosure found 2 Oct 2026".
- decisions/decision-framework.md and evidence/how-numbers-mislead.md: wherever "70-90% conversion" or "banks, MBB and Big 4 sponsor" is used, label the first [anecdotal, cyclical: 2023 saw 30-50% at some firms] and the second "licence is necessary, not sufficient; role must clear the £33,400 / £41,700 floor" (check with grep; I did not search those files for the phrases).
- product/product-map.md: a sponsor-register lookup (employer name to "holds Skilled Worker licence: yes/no, date of register") is feasible from the free CSV, but it only answers "can sponsor", not "will sponsor a graduate". Label accordingly.
- verification/freshness-register.md: add the five rows above.

**Still unverified after this round.** (1) Any 2023-26 IBD-only degree mix. (2) Any bank's summer-to-full-time conversion rate; ISE's primary conversion figure. (3) Any audit or correspondence study isolating visa need. (4) Register-based count of sponsors by sector or size (not in the file). (5) ISE's parliamentary evidence on international-student shares (page blocked). (6) MAC December 2025 reports (not opened).

**Sources read (fetched) in this round.** GOV.UK sponsor register CSV (2 Oct 2026); Home Office occupation-and-industry visas dataset (year ending June 2026; published 27 Aug 2026); GMAC CRS 2026 PDF; HEPI Policy Note 43 (5 Jan 2023) and its blog post; MAC Rapid Review of the Graduate Route (May 2024); ISE insight pages 508, 513, 498; Trackr Spring Weeks 2025 PDF, Spring Weeks 2026 blog, Summer Internship Season Reports 2023/24 and 2024/25; eFinancialCareers, 14 Aug 2023 (browser pane); Fortune 8 Jun 2026 and 16 Jun 2025; JPMorgan, Barclays and Citi early-careers pages; High Fliers GM 2023 and 2024; Imperial-hosted eFinancialCareers 2025/26 guide; Bridge Group "Shaping the Sector" press page; CFA Institute STEM article; JobPing blog (secondary).
