---
title: "Verification round 5f: Atlas deepening — Australia, New Zealand, Malaysia, Thailand, Vietnam"
last_researched: 2026-10-03
scope: Log of every claim and metric added or changed on 3 October 2026 in data/atlas/au.js, nz.js, my.js, th.js and vn.js, with the source read and what it says, plus every rating changed. One section per country under its P number (P62, P63, P69, P70, P71). Information only.
confidence: high for statistics read on official pages or PDFs; medium for standing steps, which are judgements from published indices (GFCI 40, Startup Genome GSER 2026); lower where a claim rests on a company's own statement.
review_by: 2027-03-31
---

# Verification round 5f (3 October 2026)

Method: `curl` with a browser user agent plus `pypdf` and HTML stripping for official pages and PDFs (so the figure was read in the page text, not in a search summary); the Browser pane (reading the rendered page) where a site refused `curl` (APSC, BHP); WebSearch only to find URLs. Rankings: **GFCI 40** (Z/Yen and Long Finance, 16 Sep 2026, PDF, tables 1 and 9) and **Startup Genome GSER 2026** (ecosystem pages and the emerging-ecosystems ranking page, read as text). Metrics follow the brief: one source and one kind of area per metric per country. **Rent:** Numbeo returned HTTP 429 (and "Access Restricted" in the browser) on every attempt on 3 October 2026, so no rent is given anywhere in this round unless a section says otherwise; no official city rent series was read.

Status vocabulary as in earlier rounds: CONFIRMED (read on the page), PARTLY CONFIRMED, LIBRARY, STILL UNVERIFIED.

## P62 Australia (data/atlas/au.js): 11 → 26 claims, 6 hubs

**Rating changes.** Sydney finance: strong → *dominant* (au-syd is `data`: finance is the largest sector by jobs in the City of Sydney, 125,002; plus GFCI rank 24 and two named banks headquartered there). Sydney software: not rated → *strong* (au-gser-syd, au-syd). Sydney banking: not rated → *strong* (au-cba, au-wbc); asset management: not rated → *present* (au-macq). Sydney business and IT strong unchanged (au-gser-syd added to IT). Melbourne finance and banking: not rated → *present* (au-nab: registered office in Melbourne). Brisbane finance: not rated → *present* (au-suncorp). Perth, Adelaide and Canberra: no family rated. Country `roles` gains software. Summary extended by one clause (GFCI and GSER).

| Claim or metric | Source read, and what it says | Status |
|---|---|---|
| au-gfci | GFCI 40 table 1: Sydney 24 (rating 735), Melbourne 32 (727); table 9 Asia/Pacific top 15: Sydney tenth, Melbourne thirteenth | CONFIRMED |
| au-gser-syd | startupgenome.com/ecosystems/sydney: "Sydney #26 Global Startup Ecosystem #1 Oceania"; "Tech Central anchors a $42 billion economy and supports more than 100,000 workers" | CONFIRMED |
| au-gser-mel | startupgenome.com/ecosystems/melbourne: "#30 … #2 Oceania"; "$2.4 billion raised in 2025"; "More than 50% of Australia's startups in the Enterprise Software and Healthtech sectors are based in Victoria"; "record $467 million mega-round by Airwallex" | CONFIRMED |
| au-gser-bne | startupgenome.com/ecosystems/brisbane: "#51-60 Emerging Ecosystem #4 Oceania"; "PsiQuantum's $1 billion project" | CONFIRMED |
| au-cba | CBA FY26 results announcement (12 Aug 2026): "Commonwealth Bank Place South, Level 1, 11 Harbour Street, Sydney NSW 2000"; Cash NPAT $10,982m. Annual Review 2026 five-year table: "Full-time equivalent employees from continuing operations 51,714" (brief only) | CONFIRMED |
| au-wbc | Westpac 2025 results announcement: "Westpac Head Office 275 Kent Street, Sydney"; "Full time equivalent employees (FTE) 35,236" | CONFIRMED |
| au-macq | Macquarie FY26 annual report: "now employs 19,124 people globally across 30 markets … ANZ ~50%"; sites "representing approximately 50% of Macquarie people (Sydney: 50 Martin Place, 1 Elizabeth Street, and London: Ropemaker)"; "$A325.9 billion in assets in Australia" (Macquarie Asset Management) | CONFIRMED (company statement) |
| au-nab | NAB 2025 annual report: "Registered office Level 28 395 Bourke Street MELBOURNE"; "FTE (spot) 41,880"; "Ranked #1 Graduate Employer in the Banking and Finance Industry for the fourth consecutive year on Prosple's Top 100 Australian Graduate Employers" | CONFIRMED |
| au-telstra | Telstra annual report FY26: "Registered Office Level 41, 242 Exhibition Street Melbourne" | CONFIRMED |
| au-suncorp | Suncorp FY26 annual report: "registered office is at Level 23, 80 Ann Street, Brisbane" | CONFIRMED |
| au-wds | Woodside half-year 2026 transcript (ASX announcement 26 Aug 2026, hosted on bulletin.webull.com): "Mia Yellagonga 11 Mount Street Perth WA 6000" | CONFIRMED (third-party host of the ASX document) |
| au-wa-mining | WA DEMIRS economic indicators: "more than 136,000 on-site FTEs in the mining sector in 2025"; "Iron ore: 66,367 FTEs; Gold: 38,816 FTEs; Lithium: 7,954 FTEs" | CONFIRMED |
| au-aps | APSC State of the Service 2024-25, Table 13 (read in the Browser pane): ACT 70,221 (35.4%); Melbourne 30,165; Sydney 23,822; Brisbane 19,461; Adelaide 13,648; Perth 9,125; All 198,529 | CONFIRMED |
| au-sa-def | skills.sa.gov.au/defence-and-space: "South Australia's defence sector employs more than 14,000 workers, with another 10,000 jobs expected to be added … over the next 20 years" | CONFIRMED |
| au-awe | ABS Average Weekly Earnings, May 2026 (13 Aug 2026): full-time adult average weekly ordinary time earnings 2,083.70, +3.7%; by state original: NSW 2,108.80, Vic 2,041.10, Qld 2,039.70, SA 1,970.20, WA 2,227.40, ACT 2,290.20 | CONFIRMED |
| metric pop (all six) | ABS Regional population 2024-25: Sydney 5,638,830; Melbourne 5,435,590; Brisbane 2,833,524; Adelaide 1,491,015; Perth 2,452,765; Canberra 484,630 (capital-city ERP at 30 June 2025) | CONFIRMED |
| metric gdp | ABS State Accounts 2024-25, Table 1 (xlsx), current prices, $ million: NSW 855,408; Vic 637,435; Qld 531,007; SA 157,887; WA 458,831; ACT 59,443; Australia 2,778,897. State figure used for the state's capital | CONFIRMED |
| metric wage | ABS AWE May 2026 (above) × 52 ÷ 12: NSW 9,138; Vic 8,845; Qld 8,839; SA 8,538; WA 9,652; ACT 9,924 (mean) | CONFIRMED (computed) |
| metric rent | Numbeo HTTP 429 | OMITTED |

Standing steps, with reasoning: Sydney finance 5/3/2 (first in Australia on jobs and GFCI; tenth of Asia/Pacific's top 15; 24th globally, as Frankfurt, GFCI 29, is 5/3/2 in Germany); Sydney IT and software 5/3/2 (GSER #26, #1 Oceania); Sydney business 4/2/1 (no cross-city table); Melbourne finance and software 4/3/2 (second in Australia on GFCI and GSER; thirteenth in Asia/Pacific); Brisbane software 4/2/1 (fourth in Oceania, so third in Australia), finance 3/2/1; Perth business 3/2/1, Adelaide and Canberra management 3/2/1 and 5/2/1 are judgements (public administration read as management; resource-company head offices as business), flagged in the record's gaps.

Not read: BHP (access denied; the about page gave "More than 80,000 employees and contractors" without a city), Rio Tinto (graduate page not found), ANZ Group (graduate page 404; the one annual-report PDF found was ANZ New Zealand's), Atlassian (SEC refused automated access; a WebFetch read gave San Francisco as principal executive office, so no Sydney claim is made), Canva (script wall), Woodside's own site (script wall), APS graduate page (access denied), City of Melbourne CLUE (blocked), Jobs and Skills Australia profiles (connection failed).

## P63 New Zealand (data/atlas/nz.js): 9 → 16 claims, 3 hubs

**Rating changes.** Auckland banking: not rated → *present* (nz-anz); finance dominant and IT strong unchanged (nz-anz added to finance). Wellington IT and software: not rated → *present* (nz-xero: registered address in Wellington). Christchurch IT: not rated → *present* (nz-chch-tech: Tait Communications and Seequent named as based in the city). Wellington finance and Christchurch business remain not rated.

| Claim or metric | Source read, and what it says | Status |
|---|---|---|
| nz-gser-akl | Startup Genome emerging-ecosystems ranking page: "Auckland made the most dramatic climb of any ecosystem in the Top 40 Emerging rankings, surging more than 75 positions to the 31-40 range" | CONFIRMED |
| nz-gser-wel | startupgenome.com/ecosystems/wellington: ecosystem value "$2 BN", regional average "$5.6 BN"; early-stage funding "$87 M", regional "$202 M"; no rank shown (the GFCI lists Wellington only as an associate centre) | CONFIRMED (the figures' currency is not stated in the text read) |
| nz-anz | ANZ Holdings (New Zealand) Limited FS, 30 Sep 2025: "registered office and its principal place of business is Ground Floor, ANZ Centre, 23-29 Albert Street, Auckland" | CONFIRMED |
| nz-fph | FPH investor fact sheet 2026: "We employ over 7,500 people around the world, including more than 950 employees dedicated to research and development"; "established in 1969 in New Zealand"; address "PO Box 14348, Panmure, Auckland" | CONFIRMED |
| nz-xero | Xero FY26 annual report (ASX 14 May 2026): "Registered Address 19-23 Taranaki St, Te Aro, Wellington 6011" | CONFIRMED |
| nz-psc | Public Service Commission, regional workforce: "At 42.6% … Wellington region"; "Auckland (21.3%), Canterbury (10.3%)"; the page names 2024 and 2025 as latest | CONFIRMED |
| nz-chch-tech | ChristchurchNZ high-tech services: "tech sector contributing $2.4 billion worth of GDP and over 15,000 jobs"; "Tait Communications and Seequent" | CONFIRMED (agency's own figure) |
| metric pop | Stats NZ subnational estimates 30 June 2025 (provisional), xlsx Table 2: Auckland 1,816,000; Wellington city 210,800; Christchurch city 419,200 (note: a search summary gave Auckland 1,547,200, which the spreadsheet contradicts; the spreadsheet is used) | CONFIRMED |
| metric gdp | Stats NZ regional GDP year ended March 2025, xlsx Table 1/5, NZ$ million: Auckland 161,800; Wellington 51,317; Canterbury 55,505; New Zealand 431,457 | CONFIRMED |
| metric wage | Not read (Stats NZ earnings by region only via the data explorer; the labour-market income release has no regional table) | OMITTED |
| metric rent | Numbeo HTTP 429; MBIE rental-bond data are by area unit and by all dwellings at territorial-authority level (July 2026 medians: Auckland NZ$640, Wellington city NZ$560, Christchurch city NZ$550 a week), not one-bedroom flats | OMITTED |

Standing: Auckland finance and IT 5/2/1 (first in New Zealand; no cross-city table lifts it in Asia-Pacific); Wellington management 5/2/1 (public administration read as management; 42.6% of the Public Service), software 4/2/1, finance 3/2/1; Christchurch IT 4/2/1. Not read: Kiwibank (PDF would not download), Air New Zealand (NZX attachment not found), Reserve Bank, Stats NZ LEED earnings.

## P69 Malaysia (data/atlas/my.js): 9 → 17 claims, 3 hubs

**Rating changes.** Kuala Lumpur finance: present → *strong*; banking: present → *strong* (my-cimb, my-db, my-boa: three named banks with their head offices in the city; my-gfci added to finance). Penang IT: not rated → *present* (my-intel: Intel Malaysia's design, development and shared-services functions; one named employer with a major site). Johor IT strong unchanged (my-mida added). Country `roles` gains finance.

| Claim or metric | Source read, and what it says | Status |
|---|---|---|
| my-gfci | GFCI 40 table 1: Kuala Lumpur 39 (rating 720; GFCI 39 rank 42); Labuan 44 (715) | CONFIRMED |
| my-gser-kl | startupgenome.com/ecosystems/kuala-lumpur: "Kuala Lumpur #31-40 Emerging Ecosystem #19 Asia"; emerging ranking page: "Kuala Lumpur slipped more than 15 positions to the 31-40 range" | CONFIRMED |
| my-cimb | CIMB IAR 2025: "From our headquarters in Kuala Lumpur, we have grown … with around 33,000 #teamCIMB employees serving over 30 million customers across ASEAN"; Menara CIMB, Kuala Lumpur Sentral | CONFIRMED |
| my-wage / metric wage | DOSM Employee Wages Statistics (Formal Sector) Q4 2025 report PDF (release-document-log id 19169, tables 2.3a, pp. 78–79) and release page: "Wilayah Persekutuan Kuala Lumpur recorded the highest median monthly wage at RM4,391, followed by Pulau Pinang (RM3,500) and Selangor (RM3,400) in December 2025"; Johor 2,982 and Malaysia 3,167 read from the state table (December column, rows aligned with the Malaysia row, which matches RM3,167) | CONFIRMED (Johor chart-read from a table, cross-checked against the national and Penang figures) |
| my-intel | MIDA success story: "Intel Malaysia was established in 1972 in Penang … Intel Corporation’s largest and most diverse site outside of the United States … high tech manufacturing, design and development … global shared services" (the page's older employee count, 9,000, is not used) | CONFIRMED (undated agency page) |
| my-infineon | Infineon careers page: "Strategically located in the Phase 2 Bayan Lepas Free Industrial Zone in Penang" | CONFIRMED |
| my-micron | Micron corporate profile: manufacturing locations include "Muar, Malaysia; Penang, Malaysia" | CONFIRMED |
| my-mida | MIDA media release: "RM385.7 billion in data-centre-related investments from 2021 to the first half of 2026"; operators "AWS, Microsoft, Google, Bridge Data Centres, DayOne, AirTrunk and Vantage Data Centres … particularly in Greater Kuala Lumpur and Johor" | CONFIRMED |
| metric pop | DOSM Current Population Estimates 2025 (31 Jul 2025), state table (million): W.P. Kuala Lumpur 2.1; Pulau Pinang 1.8; Johor 4.2 (to the nearest 0.1 million; state level) | CONFIRMED (rounded in source) |
| metric gdp | Existing claims, DOSM GDP by State 2025: Kuala Lumpur RM265.1 billion; Pulau Pinang RM130.3 billion; Johor RM171 billion | CONFIRMED |
| metric rent | Numbeo HTTP 429 | OMITTED |

Standing: Kuala Lumpur finance 5/2/1 (GFCI 39th is outside the Asia/Pacific top 15; world step 1 as Frankfurt at 29 is 2); Kuala Lumpur IT 5/2/1 (only ranked ecosystem; 19th in Asia); Penang and Johor IT 4/2/1 (judgements: second or third in Malaysia). Not read: Maybank (PDF blocked; the Maybank announcement page returned nothing), Petronas (PDF not retrievable), Intel and Penang agency pages that refused access, Micron headcount, Salaries & Wages Survey 2025 (its page returned a server error).

## P70 Thailand (data/atlas/th.js): 5 → 10 claims, 2 hubs

**Rating changes.** None. Bangkok finance stays *present* (th-set-cap and th-kbank added to the rating; no named bank's head office was read, so not upgraded). EEC: no family rated.

| Claim or metric | Source read, and what it says | Status |
|---|---|---|
| th-set-cap | SET market overview (page read in the Browser pane): "Key Market Statistics and Performance (SET) As of 02 Oct 2026 … Market Cap. (M.Baht) 19,831,438.51 [SET] 215,537.25 [mai]" | CONFIRMED |
| th-gfci | GFCI 40 table 1: Bangkok 88 (659), GFCI 39 rank 100 | CONFIRMED |
| th-kbank | Kasikornbank Annex 1 to the 2025 annual registration statement: "Number of employees 17,194 18,948 …"; "Number of domestic branches 732 781 …" (PDF saved by a WebFetch call and read with pypdf; the text names no head office) | CONFIRMED |
| th-bkk-gpp / metrics | NESDC GPP 2024 Excel (read in the Browser pane: workbook unzipped in the page), sheet "PER CAPITA": "0701 BANGKOK METROPOLIS: GPP 2024p 6,351,791.655 million baht; population 2024p 9,106.136 thousand; per capita 697,528.72 baht"; sheet "BKK&VIC" current-price block agrees | CONFIRMED |
| th-chon-gpp / metrics | Same workbook: "0401 CHON BURI: GPP 2024p 1,234,302.75 million baht; population 2,050.416 thousand; per capita 601,976.65 baht" | CONFIRMED |
| metric wage | Not read: NSO labour-force averages are by region (Bangkok alone, Chonburi inside Eastern), not by province | OMITTED |
| metric rent | Numbeo HTTP 429 | OMITTED |

Note on population: NESDC's estimate (Bangkok 9.1 million) is not the registered population; an unverified search summary gave 5,422,568 registered at 31 Dec 2025 (DOPA), not used. Standing: Bangkok finance 5/2/1; EEC IT 3/2/1 (judgement from investment approvals). Not read: Bangkok Bank (PDF blocked), SCB, PTT (403), SET listed-company count (not on the page).

## P71 Vietnam (data/atlas/vn.js): 7 → 12 claims, 4 hubs

**Rating changes.** Ho Chi Minh City: business not rated → *present* (vn-vnm). Hanoi: IT, software, finance and banking not rated → *present* (vn-fpt; vn-tcb). Hai Phong: logistics not rated → *strong* (vn-hp-port is a `data` statistic: 2 million TEU handled for the first time, over 104 million tonnes in 11 months, plus vn-haiphong). Da Nang: IT not rated → *present* (vn-fpt: R&D centre). Country `roles` gains logistics.

| Claim or metric | Source read, and what it says | Status |
|---|---|---|
| vn-gfci | GFCI 40 table 1: Ho Chi Minh City 67 (692; GFCI 39 rank 84); "Da Nang entered the index for the first time in 71st position" | CONFIRMED |
| vn-fpt | FPT Annual Report 2025: "Headquarters No. 10 Pham Van Bach Street, Cau Giay Ward, Hanoi"; "54,110 employees and a presence in more than 30 countries and territories"; "FPT’s high technology and semiconductor chip R&D Center in Da Nang is envisioned to become a Tech hub" | CONFIRMED (the Da Nang centre is described as envisioned, not as staffed) |
| vn-tcb | Techcombank Annual Report 2025: "Techcombank Tower – 6 Quang Trung St., Cua Nam Ward, Hanoi"; "total workforce reached 12,705 employees, up from 11,848" | CONFIRMED |
| vn-vnm | Vinamilk Annual Report 2025: "Headquarters 10 Tan Trao Street, Tan My Ward, Ho Chi Minh City"; "nearly 10,000 Vinamilk employees" (CEO message) | CONFIRMED |
| vn-hp-port | Hai Phong city portal: "Hai Phong Port has handled the 2 million TEU containers for the first time"; "first 11 months … over 104 million tons, up approximately 8%"; Hateco terminal "Commenced in February of this year" | CONFIRMED (a search summary's "first in northern Vietnam" wording is not used, as the page does not say it) |
| metric pop | NSO 63-province book, key indicators tables (bilingual), 2024 preliminary, thousand persons: Ho Chi Minh City 9,543.6 (p. 820); Hanoi 8,717.6 (p. 30); Hai Phong 2,124.5 (p. 110); Da Nang 1,276.0 (p. 531) | CONFIRMED |
| metric gdp | Same tables, GRDP at current prices, billion VND, 2024 preliminary: HCMC 1,778,271.1; Hanoi 1,425,521; Hai Phong 445,994.8; Da Nang 151,307.0 | CONFIRMED |
| metric wage | Same tables, "Average compensation per month of employees in enterprises" (thousand VND), latest year 2023: HCMC 14,324; Hanoi 12,817; Hai Phong 12,233; Da Nang 10,948 (four values 2020–2023 printed; no 2024 value) | CONFIRMED (the year column read by position) |
| metric rent | Numbeo HTTP 429 | OMITTED |

Standing: HCMC finance 5/2/1 (GFCI 67th, credit above VND5 quadrillion); Hanoi IT and finance 4/2/1 (a national 5 would need a statistic, so employer-only evidence stops at 4); Hai Phong logistics 4/2/1; Da Nang IT 3/2/1. Not read: Vietcombank, Viettel, Sacombank, ACB, VinFast (SEC filing blocked), the decree text; Startup Genome pages returned no ecosystem text for Hanoi, Ho Chi Minh City or Da Nang.
