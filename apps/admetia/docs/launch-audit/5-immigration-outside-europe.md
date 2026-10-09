# Audit 5: immigration, procedures and costs in the 21 non-European destinations (EU/EEA/Swiss and UK passports)

> Note (6 Oct 2026): the US sections of this audit are superseded by `visas_immigration/united_states/` (single source of truth); the US figures and plans here are unverified by the council and kept only as history.

Auditor: agent 5. Date: 5 October 2026. Repo is read-only, so nothing was edited.
Scope: `route`, `arrival`, `work` and immigration `claims` in data/atlas/{us,ca,jp,kr,cn,hk,tw,sg,my,th,vn,au,nz,ae,sa,qa,kw,om,il,tr,ru}.js; research/places/beyond-europe.md, gulf-and-central-eastern-europe.md (Gulf parts), visas-and-work-rights.md (non-EU parts), student-logistics.md and money/costs-and-funding.md.
Method: dumped every route, arrival and immigration claim with its line number. Grepped the repo for basic procedure terms, then checked them on official pages: Federal Register API, IRCC, Study Australia, Immigration NZ, ICA Singapore, ICP and u.ae, HK ImmD and info.gov.hk, and FCDO. For the rest I used dated secondary sources, labelled as such.

## Executive summary

1. **The owner is right.** The non-European atlas records cover what happens after graduation (OPT, PGWP, 485, IANG) but barely cover how you get in, what it costs or what you must prove. Across the 21 records, none gives a full procedure from application to arrival, with fees, proof of funds and health insurance.
2. **Missing study-visa steps.** 15 of 21 records have no study-visa step at all: JP, KR, CN, HK, TW, MY, VN, SA, QA, KW, OM, TR and RU have none, and CA has only the PAL exemption. No record states the total government fees for a student.
3. **Entry rules for EU passports are missing.** 17 of 21 records give entry rules only for UK passports (`only: ['uk']`). 16 records admit in `gaps` that "entry for EU passports was not researched". The US and Canada have no entry step at all: no ESTA or eTA.
4. **A false premise built into the data model.** The headers of us.js:3 and ca.js:3, and the `uk: 'eu'` line in all 21 records, say the routes are "identical" for every EU/EEA/Swiss and UK passport. They are not:
   - Bulgaria and Cyprus are outside the US Visa Waiver Program.
   - Bulgaria, Cyprus, Hungary, Malta and Romania have no Canadian IEC agreement.
   - Korea's K-ETA exemption covers only some EU states.
   - Vietnam's visa exemption covers 24 European passports. Austria, Greece, Portugal, Ireland, the Baltics, Malta and Cyprus are not among them.
   - Working-holiday eligibility differs by passport everywhere.
   - UK passports are exempt from Australia's English test; EU passports are not.
5. **The biggest omission is working-holiday and youth-mobility visas.** No atlas or research file mentions them. Yet IEC Canada (27 European partners), Australia 417/462 (18 to 30, and up to 35 for many countries, A$840), New Zealand (45 partners), Japan (32), Korea (about 30), Taiwan (about 12 European) and Singapore's Work Holiday Pass are the cheapest and most realistic way for a 22-to-30-year-old European to get work experience in these countries. The owner's own docs/GAP-ANALYSIS.md:66 lists this as G8, still open.
6. **US: the procedure and its 2025–26 changes are missing or understated.**
   - Not on the site: DS-160, MRV $185, the $250 visa integrity fee (OBBBA, being collected in 2026), the in-person interview now required for nearly everyone, applying in your country of nationality or residence, and the public-social-media rule (June 2025).
   - The Duration of Status final rule (Federal Register 17 Jul 2026, effective 15 Sep 2026) is in the research library but not in the atlas. It cuts the post-study grace period from 60 to 30 days, bans graduate-student transfers and requires extension-of-stay filings for OPT.
   - DHS put an OPT restriction rule (RIN 1653-AA97) on its agenda. The site still presents OPT/STEM OPT as stable.
   - The proposed $103,265 fee on all cap-subject H-1B petitions, including in-country changes of status (FR 25 Aug 2026), is in the library but not in the atlas. Without it, the atlas's reassurance that F-1 graduates are "shielded" from the $100,000 payment is misleading.
   - us.js:19 and us.js:1143 say a European master's "does not open the US on its own". That ignores the J-1 Intern and Trainee programmes, built for exactly that case, and the L-1 and E-2 routes.
7. **Canada:**
   - Missing: proof of funds (CAD 23,448 from 1 Sep 2026, IRCC), study-permit and biometrics fees, Quebec's CAQ for Montréal students, and IEC for 27 European countries.
   - Montréal is a hub, yet Quebec's PEQ graduate route to permanent residence was abolished in November 2025, and only Ontario's closure is mentioned.
8. **Hong Kong's TTPS is described as "top 100".** Since 1 January 2026 it uses an aggregate list of 200 institutions, Politecnico di Milano among them (info.gov.hk, 28 Dec 2025). The atlas (hk.js:88) and beyond-europe.md both understate who qualifies.
9. **Research files contradict each other and the atlas:**
   - The Australian visa fee is "not verified" in beyond-europe.md but A$2,500 in the atlas (correct).
   - The UAE Golden visa has "no cut-off" in the Gulf file but the correct ICP criteria in the atlas.
   - US fees are "not read" in costs-and-funding.md but tabulated in beyond-europe.md.
   - New Zealand's post-study length for a master's is "not set out" in nz.js, though it is 3 years.
   - beyond-europe.md §6 still says Korea and New Zealand were "not researched".
10. **student-logistics.md and costs-and-funding.md cover only Europe.** There is no day-zero cash table, proof-of-funds table, health-insurance cost or banking note for any non-European country: no US school health plan (Vanderbilt lists $4,244), no Australian OSHC, no Canadian provincial health cover, no Japanese National Health Insurance.
11. **Gulf and the rest:**
    - Saudi Arabia, Qatar, Kuwait and Oman offer only "employer-sponsored work permit".
    - Not covered: how to study there (KAUST and Education City), the iqama and exit/re-entry visa, the visa-free or eVisa rules for EU citizens, and fully funded options. KAUST and MBZUAI pay full tuition plus a stipend, which matters for computing students.
    - Russia: no study procedure, no HIV test, migration registration or fingerprinting rules. Leaving the route minimal is defensible, but the record should say so.
12. **What is correct.** I checked these against official pages and they are right:
    - Australia: A$2,500 visa fee from 1 Jul 2026; 48 hours a fortnight.
    - New Zealand: NZ$850 visa; NZ$20,000 a year; 25 hours a week; post-study visa from NZ$1,670.
    - Singapore: S$45 Student's Pass; EP S$5,600/6,200, rising to S$6,000/6,600 on 1 Jan 2027.
    - UAE: jobseeker visa (top 500 universities, within 2 years); Golden visa (top 100, GPA 3.5, within 2 years).
    - Thailand: 30-day visa exemption from 15 Sep 2026.
    - US: SEVIS $350; weighted H-1B lottery; Proclamation 11069; the $100k vacatur.
    - Canada: PAL exemption for public master's; 3-year PGWP with CLB 7.
13. **Priority.** Before launch, add to every country record a standard "Getting in" block (procedure, fees, funds, insurance, entry by passport) and a youth-mobility table by passport and destination. Fix the 8 critical items below, most of which take under an hour.

---

## 1. CRITICAL: wrong or dangerously misleading

| # | File:line | What the site says | What is true (Oct 2026) | Official source |
|---|---|---|---|---|
| C1 | data/atlas/us.js:3, ca.js:3; `uk: 'eu'` in all 21 records (us.js:1101, ca.js:394, jp.js:184, kr.js:131, hk.js:59, cn.js:284, tw.js:99, my.js:106, vn.js:128, sg.js:69, th.js:72, nz.js:105, au.js:187, sa.js:146, kw.js:60, ae.js:151, il.js:158, om.js:92, ru.js:121, qa.js:61, tr.js:190) | Routes "for EU/EEA/Swiss and UK passports only, which are identical"; one route serves all of them. | Entry and youth-mobility rules differ by passport:<br>• US VWP: Bulgaria and Cyprus need a B visa.<br>• IEC Canada: not open to Bulgaria, Cyprus, Hungary, Malta or Romania.<br>• Korea: the K-ETA exemption to 31 Dec 2026 covers only about 22 countries (e.g. DE, FR, IT, NL, ES, PL, SE, AT, BE, DK, FI, UK); others pay for K-ETA.<br>• Vietnam: 45-day exemption for 24 European passports only (Res. 44/229); AT, GR, PT, IE, Baltics, MT and CY need the US$25 e-visa.<br>• Australia: English evidence is waived for UK and Irish passports, not for other EU passports.<br>• China: visa-free for the UK only since 17 Feb 2026.<br>• Turkey: Republic of Cyprus passports are not visa-free.<br>The data model needs per-passport exceptions, at least as a "check your passport" list. | IRCC IEC eligibility (modified 2026): https://www.canada.ca/en/immigration-refugees-citizenship/services/work-canada/iec/eligibility.html ; K-ETA extension (Ministry of Justice, Jan 2026, via eiglaw); Vietnam Res. 229/NQ-CP (Vietnam embassy, Copenhagen): https://vnembassy-copenhagen.mofa.gov.vn/en-us/News/EmbassyNews/Pages/Viet-Nam-to-waive-visas-for-citizens-from-12-countries.aspx ; https://esta.cbp.dhs.gov |
| C2 | us.js:19 (summary), us.js:1143 `us-euro` | "A European master's alone rarely opens the US"; "a European master's does not open the US on its own". | It is true for OPT and the H-1B master's cap. But the J-1 Intern category exists for recent graduates of foreign universities: within 12 months of graduation, for up to 12 months, through a State Department sponsor. J-1 Trainee takes a degree plus 1 year of experience abroad, for up to 18 months. Other routes for Europeans: L-1 (after 1 year at a multinational abroad), E-2 (employee of a company owned by nationals of a treaty country such as Italy, France, Germany or Spain) and O-1. None is mentioned. | https://j1visa.state.gov/programs/intern ; https://j1visa.state.gov/programs/trainee (not re-read this session: page fetch failed; criteria from standing State Department rules, so re-verify) ; E-2 treaty list: https://travel.state.gov/content/travel/en/us-visas/visa-information-resources/fees/treaty.html |
| C3 | us.js:1142 `us-100k`; us.js:1098 ("Work visa") | The $100,000 payment "does not apply to a change of status inside the US, such as from F-1 or OPT", and its guidance was vacated. | Correct about the proclamation. But DHS proposed a **$103,265 fee on all cap-subject H-1B petitions, including advanced-degree-exempt and in-country petitions** (proposed rule, FR 25 Aug 2026; comments closed 24 Sep 2026). On 30 Sep 2026 N.D. Cal. issued a partial injunction. The library has this (visas-and-work-rights.md:26, 301) but the atlas omits it, so a student reads "safe" when the cost of the main graduate route is open. | https://www.federalregister.gov/documents/2026/08/25/2026-17324/fee-for-certain-h-1b-petitions ; Proclamation 11069: https://www.federalregister.gov/documents/2026/09/23/2026-19554/restriction-on-entry-of-certain-nonimmigrant-workers |
| C4 | us.js:1139 `us-opt`, us.js:1097; visas-and-work-rights.md:219 ("A rule restricting OPT itself was not found") | OPT gives 12 months, with no warning. | (a) **Fixed-admission final rule** (FR 17 Jul 2026, effective 15 Sep 2026, subject to congressional review):<br>• F-1 admitted for the programme length, 4 years at most;<br>• grace period after study or OPT cut **from 60 to 30 days**;<br>• graduate students **may not transfer or change educational objective**;<br>• extension-of-stay filings (USCIS fee plus biometrics) needed for OPT and STEM OPT after a 6-month reprieve.<br>(b) DHS has an **OPT/STEM OPT restriction rule on its regulatory agenda (RIN 1653-AA97)**, and in January 2026 confirmed it is re-evaluating OPT's scope and duration (secondary; no proposed rule yet).<br>The atlas presents OPT plus 24 STEM months as a stable plan. Add a dated risk line. | https://www.federalregister.gov/documents/2026/07/17/2026-14439/establishing-a-fixed-time-period-of-admission-and-an-extension-of-stay-procedure-for-nonimmigrant ; https://www.reginfo.gov (RIN 1653-AA97) |
| C5 | hk.js:88 `hk-ttps`; beyond-europe.md:21, 203, 283, 352 | TTPS Category C is for graduates of "the top 100 of named world rankings". | Since 1 Jan 2026 eligibility uses an **aggregate list of 200 institutions**: the top 100 of THE, QS, US News or ARWU in any of the past five years, plus top hospitality, art and design schools and top-20 mainland universities. The 2026 update added Politecnico di Milano, Vienna, KIT and Adelaide and removed École Polytechnique, Grenoble Alpes, USPC and Freiburg. Italian and German graduates may qualify where the site implies they do not. | https://www.info.gov.hk/gia/general/202512/28/P2025122400232.htm ; https://www.immd.gov.hk/eng/services/visas/TTPS.html |
| C6 | ca.js:16 (summary), ca.js:392–433 `ca-pr` | "The harder step is permanent residence, after Ontario closed its no-job-offer master's stream." Only Ontario is mentioned. | Montréal is a mapped hub. Quebec **abolished the PEQ** (Programme de l'expérience québécoise), the standard route to permanent residence for Quebec graduates, in November 2025 (student union and press). Studying in Quebec also needs a **CAQ** first, with Quebec's own funds requirement (reported as CAD 20,635 plus tuition in 2026). Neither appears. A student choosing McGill or HEC Montréal gets a wrong picture. | https://www.quebec.ca/en/education/study-quebec/caq (Quebec MIFI); IRCC funds page, which defers to MIFI for Quebec: https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada/study-permit/get-documents/financial-support.html |
| C7 | 17 records: au.js:182, nz.js:100, jp.js:178, kr.js:125, cn.js:279, hk.js:53, tw.js:93, my.js:101, th.js:68, vn.js:123, sa.js:141, qa.js:56, kw.js:60, om.js:92, il.js:158, tr.js:186, ru.js:115 | "Entering" exists only for UK passports (`only: ['uk']`), so an EU reader sees no entry rule. | Concrete EU rules to add (all differ in some way from the UK text):<br>• Australia: free eVisitor 651.<br>• New Zealand: NZeTA plus NZ$100 IVL.<br>• Japan: 90 days visa-free for most EU.<br>• Korea: K-ETA, or exemption for listed states.<br>• China: 30 days visa-free for most EU to 31 Dec 2026.<br>• Hong Kong: 90 days for most EU.<br>• Taiwan: 90 days.<br>• Malaysia: 90 days.<br>• Thailand: 30 days from 15 Sep 2026, plus the TDAC arrival card.<br>• Vietnam: 45 days or the 90-day e-visa.<br>• Saudi Arabia: tourist eVisa, 1 year multiple entry, 90 days a visit, SAR 300 plus insurance.<br>• Qatar: visa waiver on arrival.<br>• Kuwait: visa on arrival or eVisa.<br>• Oman: 14 days visa-free (103 countries).<br>• Israel: ETA-IL, NIS 25.<br>• Turkey: 90/180 for most EU, not Cyprus.<br>• Russia: visa required; unified e-visa up to 30 days for EU/Schengen. | https://www.tatnews.org/2026/09/thailand-introduces-new-30-day-and-15-day-visa-exemption-rules-from-15-september/ ; https://visa.visitsaudi.com ; https://evisa.gov.vn ; https://www.fm.gov.om/en/52262/ ; https://evisa.kdmid.ru |
| C8 | research/places/student-logistics.md:4 and whole file; research/money/costs-and-funding.md:123–131 (proof-of-funds table: UK, DE, FR/CH only) and §6 (hidden costs: UK only) | Called "the practical constraints that make plans fail", but no non-European country is covered. | A student going to Toronto, Sydney or New York finds no funds floor, visa fee, insurance cost or deposit. The figures exist and are verified (section 2 below). Not wrong, but a reader will take the silence as "nothing to budget". | see 2.1 |

Lesser factual problems (wrong or stale, lower risk):

| # | File:line | Says | Correct | Source |
|---|---|---|---|---|
| E1 | vn.js:154 `vn-expert` | An expert "needs a university degree or higher plus confirmed years of experience". | Decree 219/2025: a bachelor's degree plus **at least 2 years' experience, or 1 year in finance, science and technology, innovation or digital transformation**. A fresh master's graduate does not qualify as an expert; say so. | Decree 219/2025/ND-CP (Baker McKenzie, Aug 2025): https://www.bakermckenzie.com/en/insight/publications/alerts/2025/08/vietnam-new-work-permit-rules-for-foreign-employees |
| E2 | nz.js:123 (gap) | "How long the post-study work visa lasts for each kind of master's is not set out." | A master's (level 9) gives **3 years**, with at least 30 weeks of full-time study in the master's itself. From 16 Nov 2026: eligibility extended to graduate diplomas, online applications, and a new 6-month short-term graduate work visa. | https://www.immigration.govt.nz/visas/post-study-work-visa/ ; https://www.immigration.govt.nz/about-us/news-centre/post-study-work-visa-eligibility-extended-from-16-november-2026/ |
| E3 | beyond-europe.md:140 and :395 (CtV #5) | Australian student visa fee "could not verify". | **A$2,500 from 1 Jul 2026** (Study Australia). The atlas au.js:215 already has it; update the library. Financial capacity is still **A$29,710 a year** plus first-year fees and travel (since 10 May 2024). | https://www.studyaustralia.gov.au/en/plan-your-move/your-guide-to-visas/student-visa-subclass-500 |
| E4 | gulf-and-central-eastern-europe.md:29 and visas-and-work-rights.md:231 | Golden visa: the portal "gives no GPA or ranking cut-off… should not plan on it". | ICP sets the criteria (ae.js:190 is correct): **top-100 university abroad, bachelor's GPA ≥3.5, no more than 2 years since graduating**, degree attested by the Ministry of Education. UAE universities: GPA 3.5 (category A) or 3.8 (category B). Make the two files agree. | https://icp.gov.ae/en/services/uae-golden-residency/ |
| E5 | costs-and-funding.md:88 | "MIT MFin, Princeton MFin and Duke MMS fees could not be read." | beyond-europe.md:233–244 already tabulates them (MIT $96,884, Duke $69,900 / CoA $105,421, Vanderbilt $76,700 plus health insurance $4,244). Contradiction. | n/a (internal) |
| E6 | beyond-europe.md:218–225 (§6) | "South Korea and New Zealand: not researched, evidence insufficient." | The atlas (kr.js, nz.js) now has verified D-10 and post-study work data. The library section is stale. | n/a (internal) |
| E7 | visas-and-work-rights.md:267 | Singapore post-study pass is "CtV #21". | The atlas sg.js:103 cites ICA's Long-Term Visit Pass for IHL graduates seeking work. Resolve. | https://www.ica.gov.sg/reside/LTVP/apply/graduate-from-an-institute-of-higher-learning-seeking-employment-in-singapore |
| E8 | beyond-europe.md:280; us.js:1143 | A European master's "competes only in the 65,000 regular cap". | Correct, but 6,800 of the 65,000 are reserved for Chile and Singapore (H-1B1). Minor. | USCIS cap season |

---

## 2. MISSING basics a student will ask about

### 2.1 Per-country "getting in" facts that should sit in each atlas record (route step 1, plus an arrival checklist)

**United States** (us.js:1093–1114)
- **Procedure, in order:**
  1. Admission and I-20 with funds evidence for the first year.
  2. SEVIS I-901, **$350** (fmjfee.com).
  3. DS-160.
  4. MRV fee **$185**.
  5. **Visa integrity fee $250**, collected at issuance (OBBBA, Pub. L. 119-21; collection rolled out from late 2025; listed among student fees in the FR 17 Jul 2026 rule text). Refund process unpublished.
  6. In-person interview: the interview-waiver programme was largely ended on 2 Sep 2025, and applicants must apply in their country of nationality or residence from 6 Sep 2025.
  7. **Social-media handles of the past 5 years disclosed, profiles set to public** (State Department, 18 Jun 2025).
  8. Enter at most 30 days before the start date (already there).
- **Total government cost:** about $785 before travel.
- **ESTA ($40) is for visits only**, never for study. Bulgaria and Cyprus are not in the Visa Waiver Program.
- **Health insurance:** school plans are usually compulsory. Vanderbilt lists $4,244 (beyond-europe.md:235). Budget $3,000–5,000 a year.
- **Tax:** F-1 non-residents are exempt from FICA for 5 calendar years; federal and state income tax and the treaty articles apply.
- **OPT cost:** I-765 fee. Also the 90-day unemployment limit on OPT.
- **New 2026 rule:** 30-day grace period; graduate students cannot transfer (C4).
- **Sources:** https://studyinthestates.dhs.gov ; https://www.fmjfee.com ; https://travel.state.gov/content/travel/en/us-visas/study/student-visa.html ; FR 2026-14439.

**Canada** (ca.js:387–407)
- **Proof of funds:** **CAD 23,448** a year for a single student for applications from 1 Sep 2026 (CAD 22,895 before), plus first-year tuition and travel (IRCC page modified 28 Aug 2026).
- **Fees:** study permit CAD 150 plus biometrics CAD 85.
- **Quebec:** a CAQ first, with MIFI funds.
- **Health cover:** provincial and different everywhere. Ontario universities use UHIP (compulsory). BC's MSP has a waiting period and a monthly premium. Quebec has social-security agreements covering some European students (France, Belgium, Denmark, Finland, Greece, Luxembourg, Norway, Portugal, Sweden); verify on RAMQ.
- **Tuition:** French (and Belgian francophone) students at Quebec universities pay reduced rates at graduate level under the France–Quebec agreement (verify on quebec.ca). That is a large money item for French students at HEC Montréal and McGill.
- **Missing routes:** Express Entry or CEC as the main route to permanent residence (beyond-europe.md has the cut-offs; the atlas does not), and IEC (2.2).

**Australia** (au.js:180–197)
- **Genuine Student requirement** (replaced GTE, March 2024).
- **Financial capacity:** A$29,710.
- **English evidence:** EU passports are not exempt; UK and Irish passports are.
- **OSHC** is compulsory, from roughly A$600–700 a year for a single student. Belgian, Norwegian and Swedish students covered by home schemes are exempt.
- **485 visa:** no fee given. It also needs English evidence and must be applied for from inside Australia.
- **Working holiday:** 417/462 (2.2).
- **Tax:** non-residents pay from the first dollar; working-holiday-maker rate.
- **Sources:** https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/student-500 ; OSHC: https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/student-500/overseas-student-health-cover

**New Zealand:** add the 3-year length for a master's, the NZ$5,000 funds needed for the post-study work visa, the 16 Nov 2026 changes (E2), the IVL on visas and NZeTA, and the working holiday scheme.

**Japan** (jp.js:177–196, no study step at all)
- Certificate of Eligibility through the university, then the student visa at the embassy, then the residence card at the airport.
- Register your address at the ward office within 14 days.
- **National Health Insurance** compulsory.
- National pension: students can apply for exemption.
- Job-hunting "Designated Activities" status is there. Missing: Highly Skilled Professional points (master's = 20 points) and the working holiday.
- Sources: https://www.studyinjapan.go.jp/en/planning/visa-and-status-of-residence/ ; https://www.moj.go.jp/isa/

**South Korea** (kr.js:124–140): D-2 standard admission letter and bank balance, Alien Registration Card within 90 days, compulsory National Health Insurance for students, K-ETA status by passport, working holiday H-1. Sources: https://www.hikorea.go.kr ; https://www.studyinkorea.go.kr

**China** (cn.js:278–294)
- X1 visa: admission notice plus JW201/JW202 form plus physical examination form for stays over 180 days. Residence permit within 30 days. Local police registration within 24 hours.
- Z visa and work permit (points A/B/C).
- **New K visa for young STEM graduates** (from 1 Oct 2025; no employer invitation needed). Very relevant to the computing audience.
- EU visa-free 30 days to 31 Dec 2026.
- Sources: https://www.visaforchina.cn ; State Council notice on the K visa (Aug 2025).

**Hong Kong** (hk.js:52–67)
- Student visa through the university as sponsor. **ImmD visa fee HK$330 since 8 Sep 2025** (was HK$230).
- HKID registration within 30 days.
- Working holiday scheme with several EU states and the UK.
- TTPS list of 200 (C5).
- Source: https://www.immd.gov.hk/eng/services/visas/study.html

**Taiwan:** resident visa for study and ARC; National Health Insurance after 6 months; Employment Gold Card as the work-to-residence route; working holiday with about 12 European countries (DE, FR, UK, IE, BE, NL, PL, AT, CZ, HU, SK, LU). Sources: https://www.boca.gov.tw ; https://goldcard.nat.gov.tw

**Singapore:** S$45 is verified. Add the S$60 issuance fee (verify), the EP fees, the ONE Pass (S$30,000 a month), the EP minimum rising for renewals from 1 Jan 2028, and that the 2027 increase was announced in Budget 2026.

**Malaysia:** EMGS student-pass procedure and fees (verify), compulsory insurance, the Employment Pass from the Immigration Department or ESD rather than a KPMG alert (my.js:135 is tagged practitioner), and DE Rantau. Sources: https://educationmalaysia.gov.my ; https://esd.imi.gov.my

**Thailand** (th.js:67–79)
- Non-ED visa is there.
- Missing: work permit plus Non-B visa for jobs, the reserved-occupations list, the **DTV** (5-year Destination Thailand Visa, 10,000 baht, for remote work and soft-power activities, not local employment), the **LTR** visa for highly skilled professionals, and the TDAC arrival card.
- Source: https://www.thaievisa.go.th

**Vietnam:** e-visa (90 days, multiple entry) for passports outside the exemption list, student visa (DH), temporary residence card, Decree 219 detail (E1). Source: https://evisa.gov.vn

**UAE** (ae.js:142–161)
- Student residence costs: entry permit plus ICP or GDRFA fees, Emirates ID, medical.
- Compulsory health insurance in Dubai and Abu Dhabi.
- Bank account needs the Emirates ID.
- Golden visa for graduates of UAE universities (GPA 3.5 or 3.8).
- **MBZUAI**: fully funded AI master's (tuition, housing, stipend).
- **NYU Abu Dhabi and INSEAD Abu Dhabi** as study options.
- Sources: https://u.ae ; https://mbzuai.ac.ae/admissions

**Saudi Arabia** (sa.js:140–156, only "Working")
- Work visa: Qiwa contract, then iqama (residence permit) through Muqeem/Absher.
- **Exit/re-entry visa** needed to leave and come back. Final exit.
- 2021 labour reform: job mobility.
- Premium Residency tracks (pr.gov.sa).
- **KAUST**: fellowship for all admitted master's students, covering full tuition, housing, stipend and medical. Important for computing and data students.
- Sources: https://www.kaust.edu.sa/en/study ; https://sapr.gov.sa

**Qatar:** Education City (Georgetown, Carnegie Mellon, Northwestern, HEC Paris in Qatar, Texas A&M, HBKU) and student residence through the university; work visa and QID; the 2020 reforms (no exit permit for most private-sector workers, no NOC for job change). Source: https://portal.moi.gov.qa

**Kuwait and Oman:** add EU entry (visa on arrival or eVisa; Oman 14 days visa-free), Kuwait's civil ID and the 2024 residency law, and Oman's labour card and 2023 Labour Law.

**Israel:** A/2 is there. Add the B/1 work visa through the employer, the high-tech expert fast track, ETA-IL for EU passports (NIS 25), and the security caveat. Source: https://www.gov.il/en/departments/population_and_immigration_authority

**Turkey** (tr.js:185–195)
- Student residence permit through e-İkamet within 30 days of arrival: card fee plus compulsory health insurance (GSS or private).
- Address registration.
- Work permit through the employer's application (there); Turquoise Card.
- Source: https://e-ikamet.goc.gov.tr

**Russia:** if a route is kept, it needs:
- a study visa on a university invitation;
- migration registration within 7 working days;
- **fingerprinting, photo and medical exam (including HIV) within 90 days for students** (university pages, e.g. SPbU);
- that EU-issued cards do not work (there);
- the EU sanctions on services and payments (there);
- that EU and member-state travel advisories, e.g. Farnesina, also advise against travel.

Recommendation: keep "no route", but say plainly that the site does not recommend or document a study route, and why. The rest is defensible.

### 2.2 Working holiday and youth mobility (none anywhere; GAP-ANALYSIS G8 still open)

| Destination | European partners (check each passport) | Age and length | Fee | Source |
|---|---|---|---|---|
| Canada (IEC) | AT, BE, HR, CZ, DK, EE, FI, FR, DE, GR, IS, IE, IT, LV, LT, LU, NL, NO, PL, PT, SM, SK, SI, ES, SE, CH, UK. **Not** BG, CY, HU, MT, RO. | Mostly 18–35; 12 months (IT, DE) to 24 months (UK, FR); Young Professionals and Co-op categories too. 2026: 61,189 places in total, now capped. | Participation fee plus open work permit plus biometrics (verify current CAD) | https://www.canada.ca/en/immigration-refugees-citizenship/services/work-canada/iec/eligibility.html |
| Australia 417 | BE, CY, DK, EE, FI, FR, DE, IE, IT, MT, NL, NO, SE, UK | 18–30; 18–35 for DK, FR, IE, IT, UK, and from 1 Jul 2026 also CY, FI, DE; up to 3 years with regional work | A$840 (2026, secondary) | https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/work-holiday-417 |
| Australia 462 | AT, CZ, GR, HU, LU, PL, PT, SK, SI, ES, SM (and others) | 18–30; English and education requirements; country caps | as 417 | https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/work-holiday-462 |
| New Zealand | 45 partners, including AT, BE, HR, CZ, DK, EE, FI, FR, DE, HU, IE, IT, LV, LT, LU, MT, NL, NO, PL, PT, SK, SI, ES, SE, UK (15,000 places, up to 35 and 3 years for the UK) | 18–30 or 35 | NZ$ plus IVL | https://www.immigration.govt.nz/visas/working-holiday-visa/ |
| Japan | 32 partners incl. UK, IE, FR, DE, DK, NL, NO, PL, PT, SK, CZ, AT, HU, ES, IT, IS, LT, EE, SE, FI (secondary list; check MOFA) | 18–30, 1 year | usually free | https://www.mofa.go.jp/j_info/visit/w_holiday/index.html |
| South Korea H-1 | AT, BE, CZ, DK, FI, FR, DE, HU, IE, IT, LV, LU, NL, PL, PT, ES, SE, UK, AD (secondary) | 18–30, some to 35; 1 year | — | https://www.visa.go.kr |
| Taiwan | DE, UK, IE, BE, HU, SK, PL, AT, CZ, FR, LU, NL (secondary) | 18–30, 1 year | — | https://www.boca.gov.tw |
| Hong Kong | several EU states and the UK | 18–30 | — | https://www.immd.gov.hk/eng/services/visas/working_holiday_scheme.html |
| Singapore Work Holiday Pass | by university, not passport (FR, DE, NL, CH, UK on the list); 18–25; 6 months | — | sg.js:104 already has it (good) | MOM |
| US, Gulf, China | none (US: J-1 Intern/Trainee instead) | | | |

Placement: a new route step "If you are 18–30/35" in each of CA, AU, NZ, JP, KR, TW and HK, plus a passport-by-destination table on map.html.

### 2.3 Other basics missing across all 21 records
- **Total government cost of the student visa**, in local currency and euros, on one line per country. Examples: US about $785; Canada CAD 235 plus CAQ; Australia A$2,500 plus OSHC; New Zealand NZ$850 plus IVL; Singapore S$45 plus issuance; Hong Kong HK$330.
- **Proof-of-funds floor**: US (I-20 figure), Canada CAD 23,448, Australia A$29,710, New Zealand NZ$20,000, Japan, Korea and others.
- **Health insurance requirement and cost** in every record.
- **Banking on arrival.** Which ID unlocks an account: US SSN or ITIN, Canada SIN, Japan residence card, UAE Emirates ID, Saudi iqama. Also whether EU cards work (Russia: no, there).
- **Tax residence.** Only Singapore (sg-tax), New Zealand (nz-tax) and the UAE AIRE note exist. Missing: US FICA exemption and treaties, Australia's non-resident rates, Japan's 1-year residence rule. Also the Gulf AIRE trap for all EU nationals, not only Italians.
- **Work-to-residence** step for JP (HSP), KR (E-7 to F-2), SG (PR is discretionary), HK (7 years), TW (Gold Card, 5 years), AU (employer sponsorship 482/186), NZ (Skilled Migrant) and US (employer green card).

---

## 3. SUPERFICIAL / too generic

| File:line | What is thin | What "deep" would look like |
|---|---|---|
| us.js:1095 `us-i20` | One sentence. | A numbered checklist: I-20, I-901, DS-160, MRV, integrity fee, interview, social media, port of entry, SEVIS check-in, with fees and timing. |
| us.js:1111–1114 arrival | Two items. | Add: SEVIS reporting to the DSO within 30 days, SSN application if employed, school health plan, the 30-day grace period after programme end (new rule). |
| ca.js:389 `ca-pal` | The PAL exemption only. | Add funds, fees, biometrics, the CAQ for Quebec, the letter of acceptance from a designated institution, and that study-permit processing times are published on IRCC. |
| ca.js:407 arrival | One item (PGWP deadline). | Add SIN, provincial health card or UHIP, a bank account, keeping enrolment full-time (PGWP eligibility). |
| au.js:195 arrival | "Keep health cover." | Add OSHC cost, TFN, Genuine Student, English test, the 485 deadline (within 6 months of course completion). |
| ae.js:187 `ae-study` | Sponsored by the university. | Add cost, insurance, Emirates ID, and the UAE-university Golden visa route. |
| sa.js:182, qa.js:84, kw.js:87, om.js:117 `*-sponsor` | All four Gulf states share one sentence sourced to the library, not to a government. | Per country: visa type, residence card (iqama, QID, civil ID, resident card), exit rules, gratuity, quota relevant to graduates, with an official URL for each. |
| cn.js:316 `cn-grad` | A 2017 municipal page. | Add the national work-permit points system, the K visa, and the X1-to-Z conversion steps. |
| il.js:178 `il-a2` | A university page only. | Population and Immigration Authority page; B/1 and HIT expert routes. |
| my.js:135 `my-ep` | KPMG alert. | Immigration Department or ESD page; Employment Pass categories I–III and processing; student-pass fees. |
| beyond-europe.md §6 (lines 218–225) | Japan, Korea, New Zealand "brief"; Japan figures unverified. | Fold in the atlas's verified jp, kr and nz claims, and add HSP points from the Immigration Services Agency. |
| visas-and-work-rights.md §8 (lines 221–231) | Canada, Singapore and UAE in 10 lines; Australia, Hong Kong, Japan, Korea and New Zealand absent from the comparison table (lines 253–268). | Extend the table to all 21 countries, with columns for study visa fee, funds, post-study permit, then work visa and floor, and residence after N years. |
| gulf…md:37 Saudi Premium Residency | Snippet from an expat blog, "anecdotal". | Read pr.gov.sa (it needs JavaScript; try the browser pane) or the Ministry of Investment page. |
| th.js:99 | ED visa only. | Explicit "students may not work; graduates need employer, Non-B and work permit", plus DTV and LTR. |

---

## 4. UNDERREPRESENTED

- **Passports:** routes are written for a generic EU passport with a UK variant. The exceptions that need flagging: Bulgaria, Cyprus and Romania (US VWP, IEC), Ireland (EU–UAE agreement excludes Ireland; UK-style English exemption in Australia), Hungary and Malta (no IEC), Swiss and EEA passports (separate agreements, e.g. Switzerland and Norway in IEC).
- **Visa types:**
  - US: J-1 Intern, Trainee and Academic Training (up to 18 months after study), L-1, E-2, O-1, Diversity Visa lottery (open to EU nationals, not UK-born applicants).
  - Canada: Young Professionals, CEC.
  - Japan: HSP and J-Skip.
  - Korea: E-7 and the top-tier visa.
  - China: K visa.
  - Taiwan: Gold Card.
  - Singapore: ONE Pass.
  - Thailand: LTR and DTV.
  - UAE: Golden visa for UAE-university graduates.
  - Australia: 482 and 186.
  - New Zealand: Skilled Migrant.
- **Fully funded study options** for computing students: KAUST (Saudi Arabia), MBZUAI (Abu Dhabi), MEXT (Japan; library CtV #12 unverified), Korea's GKS, Taiwan's ICDF, the Chinese Government Scholarship.
- **Study hubs with no study route:** Doha's Education City, Riyadh, Jeddah and KAUST in Thuwal, Istanbul (Boğaziçi, Koç, Sabancı), Tel Aviv University and Technion, Moscow (deliberately), Kuala Lumpur, Bangkok (Chulalongkorn, Sasin), Ho Chi Minh City (RMIT Vietnam, Fulbright University Vietnam).
- **Costs:** health insurance (all 21), visa fee totals (only AU, NZ, SG and KR's D-10 KRW 130,000 present), proof of funds (only NZ present in the atlas).

---

## 5. Quick wins (each under 1 hour)

1. us.js: add a `us-fees` claim. SEVIS $350, MRV $185, integrity fee $250, ESTA not for study; interview in country of residence; social media public. Sources: studyinthestates.dhs.gov, FR 2026-14439.
2. us.js: add a `us-ds` claim from FR 2026-14439 (30-day grace period, no graduate transfers, extension filings for OPT) and an OPT-risk line (RIN 1653-AA97).
3. us.js:1142: append the proposed $103,265 fee (FR 2026-17324) and the 30 Sep 2026 partial injunction (already in visas-and-work-rights.md:27).
4. us.js:1143 and :19: soften "does not open the US", and add a J-1 Intern/Trainee claim (j1visa.state.gov).
5. hk.js:88 and beyond-europe.md:21, 203, 283, 352: "aggregate list of 200 institutions (from 1 Jan 2026), incl. Politecnico di Milano"; source info.gov.hk P2025122400232. Add the HK$330 visa fee.
6. ca.js: add `ca-funds` (CAD 23,448 from 1 Sep 2026), fees CAD 150 + 85, and `ca-quebec` (CAQ; PEQ abolished Nov 2025).
7. nz.js:123: delete the gap. Master's = 3 years; add the 16 Nov 2026 changes.
8. vn.js:154: state 2 years' experience (1 year in priority fields).
9. au.js: add Genuine Student, A$29,710 funds, English test (EU passports not exempt), OSHC exemptions for Belgium, Norway and Sweden.
10. beyond-europe.md:140, gulf…md:29, costs-and-funding.md:88, visas-and-work-rights.md:267: align them with the atlas (E3–E7).
11. EU "Entering" claims for TH, VN, SA, OM, KR and CN from the sources in C7, so EU readers stop seeing nothing.
12. ae.js: add MBZUAI; sa.js: add KAUST, as "fully funded options" notes.

---

## 6. Top 10 priorities for the next 4 weeks (ranked)

1. **A "Getting in" block in all 21 records**: procedure steps, total government fees, proof of funds, compulsory insurance and cost, first-week registrations. Fifteen records have no study-visa step today.
2. **Youth-mobility table by passport and destination** (IEC, 417/462, NZ, JP, KR, TW, HK, SG WHP), shown as a route step for ages 18–30/35. This is the single biggest "I didn't see X".
3. **Per-passport exceptions** in place of `uk: 'eu'` plus the "identical" headers: flag BG, CY and RO for the US; BG, CY, HU, MT and RO for IEC; partial K-ETA and Vietnam exemption lists; English-test exemptions for UK and Irish passports.
4. **US update:** fees, interview and social-media vetting, the fixed-admission rule, the OPT-risk agenda item, the $103,265 proposal, and J-1/L-1/E-2 alternatives. The US is the most-read destination and has moved the most since 2025.
5. **Canada:** funds and fees, the Quebec CAQ and PEQ abolition, Express Entry as the main route to permanent residence, and IEC.
6. **EU entry rules** for the 17 UK-only records (C7).
7. **Gulf rewrite:** one generic sponsor sentence becomes a per-country procedure (iqama or QID, exit/re-entry, insurance, Emirates ID), plus study routes: KAUST, MBZUAI, Education City, NYU Abu Dhabi.
8. **Extend student-logistics.md and costs-and-funding.md** with a non-European day-zero cash table and a proof-of-funds table (US, CA, AU, NZ, SG, HK, JP, KR, AE).
9. **Work-to-residence step** per country (HSP Japan, E-7 to F-2 Korea, Gold Card Taiwan, HK 7 years, AU 482/186, NZ Skilled Migrant, US green card), and fix the TTPS list in hk.js.
10. **Resolve the internal contradictions** (E3–E7), and add a freshness rule: every fee claim carries "valid from" and a re-check date, since AU, NZ, SG, HK, TH and US fees all changed between July 2025 and September 2026.

---

## Per-country table (EU/EEA/Swiss and UK passports)

Procedure = steps to obtain the student visa or permit. Fees = government fees stated. Funds = proof-of-funds floor. Post-study = permit after graduating. Work-to-residence = route to settlement. ✅ correct and adequate, ⚠️ partial or thin, ❌ missing or wrong.

| Country | Procedure | Fees | Funds | Post-study | Work-to-residence | Note |
|---|---|---|---|---|---|---|
| US | ⚠️ I-20 only | ⚠️ SEVIS named, not priced; MRV and integrity fee missing | ❌ | ⚠️ OPT/STEM correct, risks missing (C4) | ⚠️ H-1B correct, $103k proposal missing; J-1/L-1/E-2 missing | C2–C4 |
| Canada | ⚠️ PAL only | ❌ | ❌ (CAD 23,448) | ✅ PGWP | ⚠️ Ontario only; PEQ and EE missing | C6, IEC |
| Australia | ⚠️ | ✅ A$2,500 | ❌ (A$29,710) | ✅ 485 | ❌ | GS, OSHC, English, 417/462 |
| New Zealand | ⚠️ | ✅ NZ$850 / 1,670 | ✅ NZ$20,000 | ⚠️ length wrongly "unknown" (E2) | ❌ | WHS |
| Japan | ❌ no CoE step | ❌ | ❌ | ✅ job-hunt status, J-Find | ⚠️ EHI only, no HSP | WH |
| South Korea | ❌ no D-2 step | ⚠️ D-10 fee only | ❌ | ✅ D-10 (Oct 2025) | ⚠️ E-7 only via top-200 | K-ETA by passport, WH |
| China | ✅ X1/X2 verified | ✅ CVASC/PSB priced | ✅ $2,500/yr | ✅ 2017 rule verified (Top 500) | ✅ Z/R/FWP verified | ✅ K visa (Decree 814/2025) verified; consolidated in visas_immigration/china/ |
| Hong Kong | ❌ no student visa step | ❌ HK$330 | ❌ | ✅ IANG | ⚠️ TTPS "top 100" wrong (C5) | WH |
| Taiwan | ❌ | ❌ | ❌ | ✅ 2-year permit-free stay | ⚠️ points test; Gold Card missing | WH |
| Singapore | ✅ Student's Pass S$45 | ⚠️ EP fees missing | ❌ | ✅ LTVP, WHP | ✅ EP/COMPASS; ONE Pass missing | |
| Malaysia | ❌ no EMGS step | ❌ | ❌ | ❌ none (stated) | ⚠️ EP from a KPMG alert | |
| Thailand | ✅ ED visa | ❌ | ❌ | ❌ | ❌ (no LTR, DTV or Non-B) | |
| Vietnam | ❌ | ❌ | ❌ | ⚠️ intern exemption | ⚠️ expert rule vague (E1) | e-visa |
| UAE | ⚠️ sponsor only | ❌ | ❌ | ✅ jobseeker, Golden (correct) | ⚠️ employer visa; Golden visa contradicted in the Gulf md | MBZUAI |
| Saudi Arabia | ❌ no study route | ❌ | ❌ | ❌ | ⚠️ "sponsored" only; iqama, exit/re-entry, Premium Residency missing | KAUST |
| Qatar | ❌ | ❌ | ❌ | ❌ | ⚠️ one sentence | Education City |
| Kuwait | ❌ | ❌ | ❌ | ❌ | ⚠️ one sentence | |
| Oman | ❌ | ❌ | ❌ | ❌ | ⚠️ one sentence | |
| Israel | ⚠️ A/2 (university page) | ❌ | ❌ | ❌ | ❌ | ETA-IL for EU |
| Turkey | ❌ no e-İkamet step | ❌ | ❌ | ❌ (stated) | ⚠️ work permit through employer | |
| Russia | ❌ (deliberate) | ❌ | ❌ | ❌ | ❌ | Keep minimal, add registration and medical facts, say why there is no route |

Verified correct in this session: au-500 fee and hours; nz-stv and nz-psw fees, funds and hours; sg-stp S$45; sg-ep 2026 and 2027 floors; ae-jobseeker and ae-golden criteria; th-uk-entry 30 days from 15 Sep 2026; ca-pgwp and ca-pal; us-h1b weighted rule (FR 2025-12-29); Proclamation 11069 (FR 23 Sep 2026); fixed-admission rule (FR 17 Jul 2026); China visa-free for EU to 31 Dec 2026 and for the UK from 17 Feb 2026; K-ETA exemption to 31 Dec 2026.
Not verified (secondary only, flag when used): the IEC ages by country; working-holiday partner lists for Japan, Korea and Taiwan (MOFA returned 403); the A$840 working-holiday fee; that the visa integrity fee is being collected at all posts; Quebec's CAQ funds figure; the J-1 criteria (page fetch failed).
