---
title: "Verification round 5b: the Atlas deepened — United Kingdom, Ireland, Italy, Spain, Portugal, Malta, Greece"
last_researched: 2026-10-03
scope: Log of every claim, metric and rating added or changed in the Atlas records gb.js, ie.js, it.js, es.js, pt.js, mt.js and gr.js in round 5, with the source, what the page says, and any rating changed. One P number per country, as in the record's `log` field. Information only; not legal, tax or immigration advice.
confidence: high for statistics read from official tables on the day; medium for hub ratings and standing, which are judgements from the claims listed.
review_by: 2027-03-31
---

# Verification round 5b (3 October 2026)

Status vocabulary as in round 4: **CONFIRMED** (source read and matches), **PARTLY CONFIRMED**, **LIBRARY**, **STILL UNVERIFIED**. Quotes marked as arithmetic are the researcher's own sums on the source's figures. Statistics were pulled from the statistical offices' own APIs or tables (Nomis for the ONS tables) and saved as CSV or JSON; employer addresses are the Companies House registered office (or the company's own register), which is not necessarily where most staff work.

## P41 United Kingdom (data/atlas/gb.js)

Claims 23 → 82; hubs 12 → 12. Brief: research/countries/gb-united-kingdom.md.

### Ratings changed (old → new)

| Hub | Family | Old | New | Rests on |
|---|---|---|---|---|
| London | business | gap | strong | claims: gb-lon-bres, gb-lon-city |
| London | ai | gap | strong | claims: gb-lon-gser, gb-lon-dealroom |
| London | vc | gap | strong | claims: gb-lon-vc |
| Manchester | business | gap | strong | claims: gb-man-bres |
| Manchester | finance | gap | strong | claims: gb-man-bres |
| Manchester | accounting | gap | strong | claims: gb-man-bres |
| Manchester | management | gap | strong | claims: gb-man-bres |
| Cambridge | cs | present | strong | claims: gb-cam-arm, gb-cam-dealroom |
| Birmingham | business | gap | strong | claims: gb-bham-bres |
| Birmingham | finance | gap | present | claims: gb-bham-hsbc |
| Birmingham | accounting | gap | strong | claims: gb-bham-bres |
| Birmingham | management | gap | strong | claims: gb-bham-bres |
| Leeds | business | gap | strong | claims: gb-leeds-bres |
| Leeds | management | gap | strong | claims: gb-leeds-bres |
| Leeds | software | gap | strong | claims: gb-leeds-bres |
| Bristol | finance | gap | present | claims: gb-bristol-hl |
| Bristol | accounting | gap | strong | claims: gb-bristol-bres |
| Bristol | marketing | gap | strong | claims: gb-bristol-bres |
| Bristol | software | gap | strong | claims: gb-bristol-bres |
| Cardiff | finance | gap | present | claims: gb-cardiff-admiral, gb-cardiff-admiral-ch |
| Liverpool | logistics | gap | present | claims: gb-liverpool-peel |
| Newcastle | software | gap | present | claims: gb-newcastle-sage |

Rule applied: dominant needs a `data` claim; strong needs a statistic or two claims; present needs one named employer; otherwise gap.

### Standing (new)

- **London**: finance 5/5/5 (gb-lon-gfci, gb-lon-city, gb-cityuk); software 5/5/4 (gb-lon-gser, gb-lon-dealroom, gb-lon-tech); it 5/5/4 (gb-lon-bres, gb-lon-gser, gb-lon-dealroom); ai 5/5/3 (gb-lon-gser, gb-lon-dealroom); management 5/3/3 (gb-lon-bres, gb-lon-city); accounting 5/3/3 (gb-lon-bres, gb-lon-city); business 5/3/3 (gb-lon-bres, gb-lon-city)
- **Edinburgh**: finance 4/3/2 (gb-edi-bres, gb-edi-gfci, gb-edi-fs)
- **Manchester**: software 4/3/2 (gb-man-bres, gb-man-gser); it 4/2/1 (gb-man-bres, gb-man-digital); finance 4/2/1 (gb-man-bres); accounting 4/2/1 (gb-man-bres); management 4/2/1 (gb-man-bres); business 4/2/1 (gb-man-bres)
- **Cambridge**: cs 4/4/3 (gb-cam-dealroom, gb-cam-bres, gb-cam-arm)
- **Birmingham**: business 4/2/1 (gb-bham-bres); management 4/2/1 (gb-bham-bres); accounting 4/2/1 (gb-bham-bres)
- **Leeds**: it 4/2/1 (gb-leeds, gb-leeds-bres); software 4/2/1 (gb-leeds-bres); finance 4/2/1 (gb-leeds); management 4/2/1 (gb-leeds-bres); business 4/2/1 (gb-leeds-bres)
- **Glasgow**: finance 4/2/2 (gb-glasgow-bres, gb-edi-gfci)
- **Bristol**: it 4/2/1 (gb-bristol, gb-bristol-bres); software 4/2/1 (gb-bristol-bres, gb-bristol-gser); accounting 4/2/1 (gb-bristol-bres); marketing 4/2/1 (gb-bristol-bres)
- **Cardiff**: finance 3/2/1 (gb-cardiff-bres, gb-cardiff-admiral)
- **Liverpool**: logistics 3/2/1 (gb-liverpool-peel, gb-liverpool-bres)
- **Newcastle**: software 3/2/1 (gb-newcastle-sage, gb-newcastle-bres)
- **Oxford**: cs 3/2/1 (gb-oxford-bres, gb-cam-dealroom)

### Metrics (new)

| Hub | pop | gdp | wage | rent |
|---|---|---|---|---|
| London | 9122909 (2025, city) | 617.9 GBP (2023, city) | 4141 GBP (2025, median, city) | 2332 GBP (2026, city) |
| Edinburgh | 531370 (2025, city) | 36.5 GBP (2023, city) | 3643 GBP (2025, median, city) | 1415 GBP (2026, city) |
| Manchester | 588256 (2025, city) | 38 GBP (2023, city) | 3373 GBP (2025, median, city) | 1373 GBP (2026, city) |
| Cambridge | 149872 (2025, city) | 9.4 GBP (2023, city) | 3814 GBP (2025, median, city) | 1805 GBP (2026, city) |
| Birmingham | 1176960 (2025, city) | 38.9 GBP (2023, city) | 3213 GBP (2025, median, city) | 1099 GBP (2026, city) |
| Leeds | 840550 (2025, city) | 39.3 GBP (2023, city) | 3152 GBP (2025, median, city) | 1145 GBP (2026, city) |
| Glasgow | 654330 (2025, city) | 31.8 GBP (2023, city) | 3380 GBP (2025, median, city) | 1266 GBP (2026, city) |
| Bristol | 495260 (2025, city) | 22.8 GBP (2023, city) | 3513 GBP (2025, median, city) | 1883 GBP (2026, city) |
| Cardiff | 381516 (2025, city) | 16.7 GBP (2023, city) | 3185 GBP (2025, median, city) | 1177 GBP (2026, city) |
| Liverpool | 507915 (2025, city) | 20.3 GBP (2023, city) | 3203 GBP (2025, median, city) | 913 GBP (2026, city) |
| Newcastle | 320838 (2025, city) | 13.3 GBP (2023, city) | 3061 GBP (2025, median, city) | 1215 GBP (2026, city) |
| Oxford | 165940 (2025, city) | 9.1 GBP (2023, city) | 3625 GBP (2025, median, city) | 1963 GBP (2026, city) |

- pop source: https://www.nomisweb.co.uk/datasets/pestsyoala — ONS, mid-2025 population estimates by local authority (via Nomis). Greater London (all 33 boroughs and the City) is used for London. [data]

- gdp source: https://www.ons.gov.uk/economy/grossdomesticproductgdp/datasets/regionalgrossdomesticproductlocalauthorities — ONS, Regional GDP: local authorities, 1998 to 2023 edition (17 Apr 2025), current market prices, £ million ÷ 1,000. Greater London (all 33 boroughs and the City) is used for London. [data]

- wage source: https://www.nomisweb.co.uk/datasets/ashe — ONS, Annual Survey of Hours and Earnings 2025, workplace analysis, full-time employees, median annual gross pay ÷ 12 (via Nomis). The London region is used for London. [data]

- rent source: https://www.ons.gov.uk/economy/inflationandpriceindices/datasets/priceindexofprivaterentsukmonthlypricestatistics — ONS, Price Index of Private Rents, August 2026: average monthly private rent, all property types and sizes (ONS publishes no one-bedroom rent for cities). Greater London is used for London. [data]

### New and changed claims

| Claim | Tag | Source | What the page says | Status |
|---|---|---|---|---|
| gb-lon-gfci | practitioner consensus | https://www.longfinance.net/media/documents/GFCI_40_Report_2026.09.16_v1.2.pdf (Z/Yen and China Development Institute, Global Financial Centres Index 40 (16 Sep 2026)) | Table 1: New York 1 (761), London 2 (757), Hong Kong 3; Frankfurt 29 (730), Dublin 30 (729), Edinburgh 33 (726). Table 8, Western Europe top 15: London first, then Zurich, Geneva, Luxembourg, Lugano, Paris. | CONFIRMED (read 2026-10-03) |
| gb-lon-bres | data | https://www.nomisweb.co.uk/datasets/newbres6pub (ONS, Business Register and Employment Survey 2024 (via Nomis)) | Nomis NM_189_1, 2024, employment: London region SIC 62 = 294,000 (GB 844,000); SIC 70 = 302,000 (GB 923,000); SIC 69 = 245,000 (GB 846,000); SIC 663 = 59,000 (GB 77,000). Percentages are my arithmetic (34.8%, 32.7%, 29.0%). | CONFIRMED (read 2026-10-03) |
| gb-lon-gser | practitioner consensus | https://startupgenome.com/ecosystems/london (Startup Genome, Global Startup Ecosystem Report 2026, ecosystem page) | Page header: "#3 Global Startup Ecosystem, #1 Europe ECOSYSTEM, #1 Europe Ecosystem in AI-Native Cluster"; "ECOSYSTEM VALUE ... $437 BN GLOBAL AVG. $25 BN". | CONFIRMED (read 2026-10-03) |
| gb-lon-dealroom | practitioner consensus | https://www.uktech.news/tech-hubs/london/london-reclaims-top-spot-as-europes-leading-tech-ecosystem-20260528 (UKTN, reporting Dealroom Global Tech Ecosystem Index 2026 (28 May 2026)) | "London has overtaken Paris and reclaimed its position as Europe’s leading tech ecosystem, according to the latest Dealroom Global Tech Ecosystem Index 2026. Ranked fourth globally". | CONFIRMED (read 2026-10-03) |
| gb-lon-vc | data | https://assets.publishing.service.gov.uk/media/6a4f8a649e9c95844ae64b77/UK_startups___VC_landscape_evidence_pack.pdf (GOV.UK, UK startups and VC landscape evidence pack (June 2026), Dealroom data) | Page 2: "In 2025, UK startups raised $23.7B"; page 10: "UK VC is very concentrated in London. In 2025, London startups have raised 75% UK venture capital". | CONFIRMED (read 2026-10-03) |
| gb-lon-hsbc | data | https://find-and-update.company-information.service.gov.uk/company/00617987 (Companies House, HSBC Holdings plc (00617987)) | Registered office address: 8 Canada Square, London, E14 5HQ. | CONFIRMED (read 2026-10-03) |
| gb-lon-barclays | data | https://find-and-update.company-information.service.gov.uk/company/00048839 (Companies House, Barclays PLC (00048839)) | Registered office address: 1 Churchill Place, London, E14 5HP (also the registered office stated on home.barclays). | CONFIRMED (read 2026-10-03) |
| gb-lon-lseg | data | https://find-and-update.company-information.service.gov.uk/company/05369106 (Companies House, London Stock Exchange Group plc (05369106)) | Registered office address: 10 Paternoster Square, London, EC4M 7LS. | CONFIRMED (read 2026-10-03) |
| gb-lon-deloitte | data | https://find-and-update.company-information.service.gov.uk/company/OC303675 (Companies House, Deloitte LLP (OC303675)) | Registered office address: 1 New Street Square, London, EC4A 3HQ (also stated on deloitte.com/uk legal page). | CONFIRMED (read 2026-10-03) |
| gb-lon-kpmg | data | https://find-and-update.company-information.service.gov.uk/company/OC301540 (Companies House, KPMG LLP (OC301540)) | Registered office address: 15 Canada Square, London, E14 5GL (also stated on kpmg.com/uk legal page). | CONFIRMED (read 2026-10-03) |
| gb-lon-revolut | data | https://find-and-update.company-information.service.gov.uk/company/08804411 (Companies House, Revolut Ltd (08804411)) | Registered office address: 30 South Colonnade, London, E14 5HX. | CONFIRMED (read 2026-10-03) |
| gb-lon-hsbc-grad | employer-stated | https://www.hsbc.com/careers/students-and-graduates (HSBC, Careers: students and graduates) | Menu: "Students and graduates: Overview, University students and graduates, Schools and apprenticeships, Events, Application guide, FAQs, Find a programme". | CONFIRMED (read 2026-10-03) |
| gb-lon-barclays-grad | employer-stated | https://search.jobs.barclays/early-careers (Barclays, Early Careers) | "Our Early Careers graduate and internship programmes... teams to choose from — like Tech, Investment Banking, Capital Markets, Sustainability, and more"; locations menu: Americas, APAC, EMEA, UK. | CONFIRMED (read 2026-10-03) |
| gb-lon-kpmg-grad | employer-stated | https://www.kpmgcareers.co.uk/graduates (KPMG UK careers, Graduates) | Navigation under "Graduate: Overview, Audit, Consulting, Tax & Law, Technology & Engineering, Applying to KPMG". | CONFIRMED (read 2026-10-03) |
| gb-edi-bres | data | https://www.nomisweb.co.uk/datasets/newbres6pub (ONS, Business Register and Employment Survey 2024 (via Nomis)) | Nomis NM_189_1, 2024, City of Edinburgh: total 373,000; section K 42,000 (Glasgow 27,000, Manchester and Leeds 25,000); SIC 663 fund management 6,000 (Liverpool 1,500, Leeds 600); SIC 64 = 25,000; section J = 18,000. | CONFIRMED (read 2026-10-03) |
| gb-edi-gfci | practitioner consensus | https://www.longfinance.net/media/documents/GFCI_40_Report_2026.09.16_v1.2.pdf (Z/Yen and China Development Institute, Global Financial Centres Index 40 (16 Sep 2026)) | Table 1: Edinburgh 33 (726), Glasgow 54 (705). Table 8 Western Europe top 15 lists London, Zurich, Geneva, Luxembourg, Lugano, Paris, Copenhagen, Amsterdam, Frankfurt, Dublin, Edinburgh (11th) ... Rank 11 is my count of that list. | CONFIRMED (read 2026-10-03) |
| gb-edi-natwest | data | https://find-and-update.company-information.service.gov.uk/company/SC045551 (Companies House, NatWest Group plc (SC045551)) | Registered office address: 36 St Andrew Square, Edinburgh, EH2 2YB. | CONFIRMED (read 2026-10-03) |
| gb-edi-lloyds | data | https://find-and-update.company-information.service.gov.uk/company/SC095000 (Companies House, Lloyds Banking Group plc (SC095000)) | Registered office address: The Mound, Edinburgh, EH1 1YZ. | CONFIRMED (read 2026-10-03) |
| gb-edi-bg | data | https://find-and-update.company-information.service.gov.uk/company/SC069524 (Companies House, Baillie Gifford & Co Limited (SC069524)) | Registered office address: 3 Haymarket Square, Edinburgh, EH3 8RY. | CONFIRMED (read 2026-10-03) |
| gb-edi-abrdn | data | https://find-and-update.company-information.service.gov.uk/company/SC286832 (Companies House, Aberdeen Group plc (SC286832)) | Registered office address: 1 George Street, Edinburgh, EH2 2LL. | CONFIRMED (read 2026-10-03) |
| gb-edi-gser | practitioner consensus | https://startupgenome.com/ecosystems/edinburgh-glasgow (Startup Genome, Global Startup Ecosystem Report 2026, ecosystem page) | Ecosystem by the numbers: Ecosystem Value $6 BN (global avg $25 BN); total early-stage funding $943 M (global avg $554 M, regional avg $531 M). | CONFIRMED (read 2026-10-03) |
| gb-man-bres | data | https://www.nomisweb.co.uk/datasets/newbres6pub (ONS, Business Register and Employment Survey 2024 (via Nomis)) | Nomis NM_189_1, 2024, Manchester: total 457,000; J 25,000 (Leeds 26,000); K 25,000 (joint with Leeds, Glasgow 27,000); M 61,000 (Birmingham 65,000); SIC 69 = 23,000 (Bristol and Birmingham 21,000); SIC 62 = 17,000; SIC 70 = 16,000 (Birmingham 25,000, Leeds 17,000). | CONFIRMED (read 2026-10-03) |
| gb-man-autotrader | data | https://find-and-update.company-information.service.gov.uk/company/09439967 (Companies House, Auto Trader Group plc (09439967)) | Registered office address: No.3 Circle Square, 3 Hawkshaw Street, Manchester, M1 7BL. | CONFIRMED (read 2026-10-03) |
| gb-man-boohoo | data | https://find-and-update.company-information.service.gov.uk/company/05723154 (Companies House, boohoo.com UK Limited (05723154)) | Registered office address: 49-51 Dale Street, Manchester, M1 2HF. | CONFIRMED (read 2026-10-03) |
| gb-man-gser | practitioner consensus | https://startupgenome.com/ecosystems/manchester-liverpool (Startup Genome, Global Startup Ecosystem Report 2026, ecosystem page) | Manchester-Liverpool page: Ecosystem Value $124 BN (global avg $25 BN); early-stage funding $706 M. Other UK ecosystem pages read: Birmingham $7 BN, Bristol $6 BN, Edinburgh-Glasgow $6 BN; London $437 BN. "Largest after London" is my comparison of those pages. | CONFIRMED (read 2026-10-03) |
| gb-cam-bres | data | https://www.nomisweb.co.uk/datasets/newbres6pub (ONS, Business Register and Employment Survey 2024 (via Nomis)) | Nomis NM_189_1, 2024, Cambridge: total 120,000; SIC 72 = 9,000 (Oxford 4,000, Edinburgh 2,500); SIC 62 = 6,000. | CONFIRMED (read 2026-10-03) |
| gb-cam-dealroom | practitioner consensus | https://www.uktech.news/tech-hubs/london/london-reclaims-top-spot-as-europes-leading-tech-ecosystem-20260528 (UKTN, reporting Dealroom Global Tech Ecosystem Index 2026 (28 May 2026)) | "Cambridge is the third-highest density leader in the world, behind only the Bay Area and Boston, and is number one in Europe"; "Oxford also continues to perform strongly as a global deep tech and life sciences hub". | CONFIRMED (read 2026-10-03) |
| gb-cam-arm | data | https://find-and-update.company-information.service.gov.uk/company/11299879 (Companies House, Arm Holdings plc (11299879)) | Registered office address: 110 Fulbourn Road, Cambridge, CB1 9NJ. | CONFIRMED (read 2026-10-03) |
| gb-cam-az | data | https://find-and-update.company-information.service.gov.uk/company/02723534 (Companies House, AstraZeneca PLC (02723534)) | Registered office address: 1 Francis Crick Avenue, Cambridge Biomedical Campus, Cambridge, CB2 0AA. | CONFIRMED (read 2026-10-03) |
| gb-cam-darktrace | data | https://find-and-update.company-information.service.gov.uk/company/08562035 (Companies House, Darktrace Holdings Limited (08562035)) | Registered office address: Maurice Wilkes Building, St John's Innovation Park, Cowley Road, Cambridge, CB4 0DS. | CONFIRMED (read 2026-10-03) |
| gb-bham-bres | data | https://www.nomisweb.co.uk/datasets/newbres6pub (ONS, Business Register and Employment Survey 2024 (via Nomis)) | Nomis NM_189_1, 2024, Birmingham: total 568,000 (Leeds 511,000); M 65,000 (Manchester 61,000); SIC 70 = 25,000 (Leeds 17,000); SIC 69 = 21,000 (Bristol 21,000, Manchester 23,000); K 23,000. | CONFIRMED (read 2026-10-03) |
| gb-bham-hsbc | data | https://find-and-update.company-information.service.gov.uk/company/09928412 (Companies House, HSBC UK Bank plc (09928412)) | Registered office address: 1 Centenary Square, Birmingham, B1 1HQ. | CONFIRMED (read 2026-10-03) |
| gb-bham-mobico | data | https://find-and-update.company-information.service.gov.uk/company/02590560 (Companies House, Mobico Group PLC (02590560)) | Registered office address: National Express House, Birmingham Coach Station, Mill Lane, Digbeth, Birmingham, B5 6DD. | CONFIRMED (read 2026-10-03) |
| gb-bham-gser | practitioner consensus | https://startupgenome.com/ecosystems/birmingham (Startup Genome, Global Startup Ecosystem Report 2026, ecosystem page) | Birmingham page: Ecosystem Value $7 BN; total early-stage funding $1.1 BN (global avg $554 M). "Twice" is my arithmetic (1.1 BN / 554 M = 1.99). The 2025 article (startupgenome.com/insights/europes-startup-ecosystems-gain-momentum) put Birmingham in the #21-30 Emerging ranking. | CONFIRMED (read 2026-10-03) |
| gb-leeds-bres | data | https://www.nomisweb.co.uk/datasets/newbres6pub (ONS, Business Register and Employment Survey 2024 (via Nomis)) | Nomis NM_189_1, 2024, Leeds: total 511,000; SIC 62 = 18,000 (Manchester 17,000, Bristol 13,000); M 57,000; SIC 70 = 17,000 (Birmingham 25,000, Manchester 16,000). | CONFIRMED (read 2026-10-03) |
| gb-leeds-asda | data | https://find-and-update.company-information.service.gov.uk/company/00464777 (Companies House, Asda Stores Limited (00464777)) | Registered office address: Asda House, South Bank, Great Wilson Street, Leeds, LS11 5AD. | CONFIRMED (read 2026-10-03) |
| gb-leeds-lbs | employer-stated | https://www.leedsbuildingsociety.co.uk/ (Leeds Building Society, website footer) | Footer: "Head office: 26 Sovereign Street, Leeds, West Yorkshire, LS1 4BJ © 2014 - 2026 Copyright Leeds Building Society". | CONFIRMED (read 2026-10-03) |
| gb-glasgow-bres | data | https://www.nomisweb.co.uk/datasets/newbres6pub (ONS, Business Register and Employment Survey 2024 (via Nomis)) | Nomis NM_189_1, 2024, Glasgow City: total 448,000; K 27,000; SIC 64 = 14,000; SIC 65 = 3,500; M 48,000. | CONFIRMED (read 2026-10-03) |
| gb-glasgow-spower | data | https://find-and-update.company-information.service.gov.uk/company/SC193794 (Companies House, Scottish Power Limited (SC193794)) | Registered office address: 320 St. Vincent Street, Glasgow, G2 5AD. | CONFIRMED (read 2026-10-03) |
| gb-glasgow-weir | data | https://find-and-update.company-information.service.gov.uk/company/SC002934 (Companies House, Weir plc (SC002934)) | Registered office address: 1 West Regent Street, Glasgow, G2 1RW. | CONFIRMED (read 2026-10-03) |
| gb-glasgow-aggreko | data | https://find-and-update.company-information.service.gov.uk/company/SC177553 (Companies House, Aggreko Limited (SC177553)) | Registered office address: 7th Floor Sentinel Building, 103 Waterloo Street, Glasgow, G2 7BW. | CONFIRMED (read 2026-10-03) |
| gb-bristol-bres | data | https://www.nomisweb.co.uk/datasets/newbres6pub (ONS, Business Register and Employment Survey 2024 (via Nomis)) | Nomis NM_189_1, 2024, Bristol, City of: total 316,000; SIC 62 = 13,000 (Leeds 18,000, Manchester 17,000); SIC 69 = 21,000 (joint with Birmingham; Manchester 23,000); SIC 73 = 6,000 (Manchester 4,000). | CONFIRMED (read 2026-10-03) |
| gb-bristol-airbus | data | https://find-and-update.company-information.service.gov.uk/company/03468788 (Companies House, Airbus Operations Limited (03468788)) | Registered office address: Pegasus House Aerospace Avenue, Filton, Bristol, BS34 7PA. | CONFIRMED (read 2026-10-03) |
| gb-bristol-hl | data | https://find-and-update.company-information.service.gov.uk/company/02122142 (Companies House, Hargreaves Lansdown Limited (02122142)) | Registered office address: Welcome Building, Avon Street, Bristol, BS2 0TR. | CONFIRMED (read 2026-10-03) |
| gb-bristol-ovo | data | https://find-and-update.company-information.service.gov.uk/company/06890795 (Companies House, OVO Energy Ltd (06890795)) | Registered office address: Floor 5, Crescent, Temple Back, Redcliffe, BS1 6EZ. | CONFIRMED (read 2026-10-03) |
| gb-bristol-gser | practitioner consensus | https://startupgenome.com/ecosystems/bristol (Startup Genome, Global Startup Ecosystem Report 2026, ecosystem page) | Bristol page: Ecosystem Value $6 BN; total early-stage funding $621 M (global avg $554 M). | CONFIRMED (read 2026-10-03) |
| gb-cardiff-bres | data | https://www.nomisweb.co.uk/datasets/newbres6pub (ONS, Business Register and Employment Survey 2024 (via Nomis)) | Nomis NM_189_1, 2024, Cardiff: total 229,000; K 18,000 (7th); SIC 662 = 8,000 (Leeds 6,000, Glasgow 5,000, Birmingham 4,000). | CONFIRMED (read 2026-10-03) |
| gb-cardiff-admiral | employer-stated | https://www.admiraljobs.co.uk/jobs-in-cardiff (Admiral Group, Jobs in Cardiff) | "Did you know that we're Wales' only FTSE 100 company?"; "With two offices based in Cardiff, our HQ, Tŷ Admiral and our newly renovated office, Capital Tower". | CONFIRMED (read 2026-10-03) |
| gb-cardiff-admiral-ch | data | https://find-and-update.company-information.service.gov.uk/company/03849958 (Companies House, Admiral Group plc (03849958)) | Registered office address: Ty Admiral, David Street, Cardiff, CF10 2EH. | CONFIRMED (read 2026-10-03) |
| gb-liverpool-bres | data | https://www.nomisweb.co.uk/datasets/newbres6pub (ONS, Business Register and Employment Survey 2024 (via Nomis)) | Nomis NM_189_1, 2024, Liverpool: total 291,000; K 11,000; SIC 663 = 1,500 (Edinburgh 6,000, Leeds 600). | CONFIRMED (read 2026-10-03) |
| gb-liverpool-peel | data | https://find-and-update.company-information.service.gov.uk/company/05965116 (Companies House, Peel Ports Group Limited (05965116)) | Registered office address: Maritime Centre, Port Of Liverpool, Liverpool, L21 1LA. | CONFIRMED (read 2026-10-03) |
| gb-liverpool-bibby | data | https://find-and-update.company-information.service.gov.uk/company/00034121 (Companies House, Bibby Line Group Limited (00034121)) | Registered office address: 3rd Floor Walker House, Exchange Flags, Liverpool, L2 3YL. | CONFIRMED (read 2026-10-03) |
| gb-newcastle-bres | data | https://www.nomisweb.co.uk/datasets/newbres6pub (ONS, Business Register and Employment Survey 2024 (via Nomis)) | Nomis NM_189_1, 2024, Newcastle upon Tyne: total 202,000; SIC 62 = 5,000; SIC 69 = 7,000. | CONFIRMED (read 2026-10-03) |
| gb-newcastle-sage | data | https://find-and-update.company-information.service.gov.uk/company/02231246 (Companies House, The Sage Group plc (02231246)) | Registered office address: C23 - 5 & 6 Cobalt Park Way Cobalt Park, Newcastle Upon Tyne, NE28 9EJ. (Cobalt Park lies in North Tyneside, outside the Newcastle council area; flagged in the log.) | CONFIRMED (read 2026-10-03) |
| gb-newcastle-greggs | data | https://find-and-update.company-information.service.gov.uk/company/00502851 (Companies House, Greggs plc (00502851)) | Registered office address: Greggs House, Quorum Business Park, Newcastle Upon Tyne, NE12 8BU. (Quorum Business Park is in North Tyneside; flagged in the log.) | CONFIRMED (read 2026-10-03) |
| gb-oxford-bres | data | https://www.nomisweb.co.uk/datasets/newbres6pub (ONS, Business Register and Employment Survey 2024 (via Nomis)) | Nomis NM_189_1, 2024, Oxford: total 125,000; SIC 72 = 4,000 (Cambridge 9,000); SIC 62 = 3,500. | CONFIRMED (read 2026-10-03) |
| gb-oxford-nanopore | data | https://find-and-update.company-information.service.gov.uk/company/05386273 (Companies House, Oxford Nanopore Technologies plc (05386273)) | Registered office address: Gosling Building, Edmund Halley Road, Oxford Science Park, Oxford, OX4 4DQ. | CONFIRMED (read 2026-10-03) |
| gb-isepay | practitioner consensus | https://ise.org.uk/knowledge/insights/513/ise_top_10_stats_of_2025_you_need_to_know/ (Institute of Student Employers, top 10 stats of 2025) | "Average salaries are £33,000 for graduates and £24,000 for apprentices"; "140 average applications per graduate vacancy"; "Graduate vacancies are down 8% but apprentice vacancies are up 8%". | CONFIRMED (read 2026-10-03) |
| gb-cityuk | data | https://www.cityoflondon.gov.uk/assets/Business/COL-City-Stats-Factsheet-July-2026-Digital.pdf (City of London Corporation, The role of financial and professional services in the UK (July 2026)) | Page 1: "Financial and related professional services account for over 2.4m jobs across GB"; "Two thirds outside of London"; "The UK was the largest net exporter of financial services (£92.6bn) in the world in 2024". | CONFIRMED (read 2026-10-03) |


### Notes on the United Kingdom section

- **Wage basis.** Pay is the ONS ASHE 2025 **median** full-time workplace pay ÷ 12. The mean was read too (London £70,275, Cambridge £66,351, Edinburgh £52,628) but is skewed by high earners, so it is not used.
- **GDP year.** 2023, because the ONS 2024 edition withholds Bristol, Cardiff and Glasgow.
- **Rent.** ONS Price Index of Private Rents, all property types, August 2026; ONS publishes no one-bedroom figure for cities.
- **Oxford** is rated for no family (recorded in the gaps).
- **Employer addresses.** Sage and Greggs have registered offices in North Tyneside (NE28, NE12), described as in the Newcastle upon Tyne postal area. Two unverified descriptions in the first draft (Mobico "former National Express Group", Bibby "shipping and finance group") were removed.
- **Ranking in Western Europe.** Edinburgh's rank (11th) is the researcher's count of GFCI 40 Table 8, where Edinburgh appears in 11th place of the listed 15.

## P44 Ireland (data/atlas/ie.js)

Claims 10 → 23; hubs 2 → 2. Brief: research/countries/ie-ireland.md.

### Ratings changed (old → new)

| Hub | Family | Old | New | Rests on |
|---|---|---|---|---|
| Dublin | finance | present | dominant | claims: ie-dub-emp, ie-gfci, ie-funds |
| Dublin | accounting | gap | present | claims: ie-kpmg, ie-deloitte |
| Dublin | it | present | dominant | claims: ie-dub-emp, ie-dub-rank, ie-ida-region |
| Dublin | am | present | strong | claims: ie-funds, ie-dub-emp |

Rule applied: dominant needs a `data` claim; strong needs a statistic or two claims; present needs one named employer; otherwise gap.

### Standing (new)

- **Dublin**: it 5/3/2 (ie-dub-emp, ie-dub-rank); finance 5/3/2 (ie-dub-emp, ie-gfci, ie-funds); business 5/2/1 (ie-ida, ie-ida-region)
- **Cork**: it 4/2/1 (ie-cork, ie-dub-emp); finance 4/2/1 (ie-cork, ie-dub-emp)

### Metrics (new)

| Hub | pop | gdp | wage | rent |
|---|---|---|---|---|
| Dublin | 2275381 (2023, metro) | 230.4 EUR (2021, metro) | 4102 EUR (2024, median, region) | 1741 EUR (2025, region) |
| Cork | 756254 (2023, metro) | 115.7 EUR (2021, metro) | 3868 EUR (2024, median, region) | 1153 EUR (2025, region) |

- pop source: https://ec.europa.eu/eurostat/databrowser/view/met_pjanaggr3/default/table?lang=en — Eurostat, metropolitan regions: population on 1 January (met_pjanaggr3), Dublin metropolitan region [data]

- gdp source: https://ec.europa.eu/eurostat/databrowser/view/met_10r_3gdp/default/table?lang=en — Eurostat, metropolitan regions: GDP at current market prices (met_10r_3gdp), Dublin, EUR 230,366 million (inflated by multinationals’ profits) [data]

- wage source: https://data.cso.ie/table/DEA08 — CSO, DEA08 median annual earnings of employees in work 50+ weeks, County Dublin, EUR 49,224, annual ÷ 12 [data]

- rent source: https://data.cso.ie/table/RIQ02 — CSO / Residential Tenancies Board, RIQ02 average monthly rent, one bed, all property types, Q4 2025, County Dublin [data]

### New and changed claims

| Claim | Tag | Source | What the page says | Status |
|---|---|---|---|---|
| ie-dub-emp | data | https://ec.europa.eu/eurostat/databrowser/view/met_10r_3emp/default/table?lang=en (Eurostat, metropolitan regions: employment by activity (met_10r_3emp), 2021) | met_10r_3emp 2021, employed persons, thousand: Dublin (IE001MC) total 1,073.37; J 97.68; K 80.65. Ireland (IE) J 149.36; K 118.77. Percentages are my arithmetic (65.4%, 67.9%). | CONFIRMED (read 2026-10-03) |
| ie-dub-rank | data | https://ec.europa.eu/eurostat/databrowser/view/met_10r_3emp/default/table?lang=en (Eurostat, metropolitan regions: employment by activity (met_10r_3emp), 2021) | met_10r_3emp 2021, employed persons, thousand, metropolitan regions only (the "non-metropolitan" aggregates excluded; 152 with a figure for J and for K). J: Paris 476.5, Milano 147.2, Budapest 141.3, Roma 121.8, Warszawa 119.2, Stockholm 117, Amsterdam 114, Bucuresti 108.8, Sofia 104.6, Dublin 97.7 (10th). K: Paris 306.5, Warszawa 113.8, Milano 100.7, Dublin 80.65 (4th). Ranks are my count. | CONFIRMED (read 2026-10-03) |
| ie-gfci | practitioner consensus | https://www.longfinance.net/media/documents/GFCI_40_Report_2026.09.16_v1.2.pdf (Z/Yen and China Development Institute, Global Financial Centres Index 40 (16 Sep 2026)) | Table 1: Dublin 30 (729). Table 8 Western Europe: London, Zurich, Geneva, Luxembourg, Lugano, Paris, Copenhagen, Amsterdam, Frankfurt, Dublin (10th). Rank 10 is my count of that list. | CONFIRMED (read 2026-10-03) |
| ie-funds | data | https://www.irishfunds.ie/about-us/ (Irish Funds, About us (Indecon impact assessment, 2024)) | "There are over 19,500 employed directly in the funds and asset management industry in Ireland, with over 37,500 of a total employment impact"; "directly employing 19,519 people and contributing nearly €1 billion in direct tax revenue in 2023, according to the latest Indecon report commissioned by Irish Funds". Industry body; Indecon figures reported by it (secondary). | CONFIRMED (read 2026-10-03) |
| ie-alia | data | https://data.cso.ie/table/ALIA01 (CSO, Employment and earnings of persons employed in aircraft leasing (ALIA01)) | ALIA01 (updated 13 Aug 2025): Persons employed 2024 = 3,005; Average earnings per person 2024 = €206,324 (national). | CONFIRMED (read 2026-10-03) |
| ie-ida-region | data | https://www.idaireland.com/getmedia/e556d4b5-604c-4502-aa18-820d74604d68/IDA-Annual-Report-2025_3.pdf (IDA Ireland, Annual Report 2025 (DETE Annual Employment Survey 2025)) | p.12-13: Dublin 142,501; Mid-West 28,125; South-West 53,535; West 32,562; "Employment outside Dublin rose to 169,967". Sector table: Information and communication 112,300; Business, financial and other services 61,155; total 312,468. (South-West region = Cork and Kerry is my gloss of the DETE regions.) | CONFIRMED (read 2026-10-03) |
| ie-grad-pay | data | https://data.cso.ie/table/HEO12 (CSO, Higher Education Outcomes: Graduate Earnings (HEO12), graduation years 2013–2022) | HEO12 P50 earnings, 2022 cohort, 1 year after: Business, Administration and Law NFQ9 650, NFQ8 570; ICT NFQ9 855, NFQ8 770 (€; weekly per the CSO release). Key findings: "84%... were in substantial employment in the first year after graduation"; "median earnings... €625 per week". | CONFIRMED (read 2026-10-03) |
| ie-unemp | data | https://data.cso.ie/table/MUM01 (CSO, Monthly Unemployment (MUM01), September 2026) | MUM01 seasonally adjusted monthly unemployment rate, 2026 September: 15–74 years 5.0; 15–24 years 12.5; 25–74 years 4.0 (table updated 30 Sep 2026). | CONFIRMED (read 2026-10-03) |
| ie-kpmg | employer-stated | https://www.kpmg.com/ie/en/home/careers/graduate.html (KPMG Ireland, Graduate programmes) | "KPMG Graduate Programme Ireland: Grad Employer of the Year 2026"; "Opening in 2026, Harcourt Square is our new Dublin headquarters". | CONFIRMED (read 2026-10-03) |
| ie-deloitte | employer-stated | https://www.deloitte.com/ie/en/careers/students.html (Deloitte Ireland, Students and graduates) | "Graduate Programme: Deloitte Ireland's award-winning graduate programme Future Leaders Academy"; "our graduate intakes are always 50/50". | CONFIRMED (read 2026-10-03) |
| ie-ey | employer-stated | https://www.ey.com/en_ie/careers/students (EY Ireland, Students) | Spotlight: "Graduate Programme 2026"; menu: "Tax and Law Graduate Programme", "Careers in Tech". | CONFIRMED (read 2026-10-03) |
| ie-boi | employer-stated | https://www.bankofireland.com/about-bank-of-ireland/careers/ (Bank of Ireland, Careers) | "Our 2027 Graduate Programme is now closed for applications! ... register your interest to receive updates on our 2028 Graduate Programme." | CONFIRMED (read 2026-10-03) |
| ie-apple | employer-stated | https://www.apple.com/ie/job-creation/ (Apple, Job creation in Europe) | "Nicole / Product Quality Engineer / Cork, Ireland. Our facility in Ireland builds iMac for customers across Europe, the Middle East and Africa."; "Tom / Technical Support Advisor / Cork, Ireland. Provides expert telephone support to customers across Europe." | CONFIRMED (read 2026-10-03) |

### Notes on the Ireland section

- Dublin IT and finance moved present → dominant on Eurostat's 2021 metropolitan counts (65% and 68% of the national totals; second place Cork has 11% and 7%).
- Ranks of 10th and 4th among 152 metropolitan regions are the researcher's own count of met_10r_3emp for 2021, excluding the "non-metropolitan" aggregates; London, Berlin, Frankfurt and Madrid have no 2021 figure, so the rank is a floor on Dublin's standing among all European metros, not a full ranking.
- Pay: CSO DEA08, median annual earnings 2024 (employees in work 50+ weeks): Co. Dublin €49,224, Co. Cork €46,416 (mean €65,822 and €57,273), ÷ 12. Rent: CSO RIQ02 (RTB) Q4 2025, one bed, all property types: "Dublin" (county-wide row) €1,740.68; "Cork" (county) €1,153.15. Cork City €1,235.26, Galway City €1,215.02 and Limerick City €1,289.04 were also read, but no further hub was added.
- Not added: Galway and Limerick hubs (IDA West 32,562 and Mid-West 28,125 jobs read, but no city-level employer or sector source).
- The first build of this record was accidentally rebuilt from its own output once; the original (10 claims, Dublin with 3 rated families, Cork with 2) was reconstructed from the file as it stood and the "before" figures above are those.

## P38 Italy (data/atlas/it.js)

Claims 20 → 62; hubs 8 → 8 (Milan, Rome, Turin, Bologna, Padua–Venice, Florence, Naples, Genoa); no new hubs. Brief: research/countries/it-italy.md.

### Ratings changed (old → new)

| Hub | Family | Old | New | Rests on |
|---|---|---|---|---|
| Milan | finance | strong | dominant | claims: it-metro-k, it-metro-eu, it-e-unicredit, it-e-mediobanca |
| Milan | business | gap | strong | claims: it-mil-chamber, it-mil-assol |
| Milan | it | gap | dominant | claims: it-metro-j, it-metro-eu, it-mil-fdi |
| Milan | finance: am | gap | present | claims: it-e-azimut |
| Rome | finance | gap | strong | claims: it-metro-k, it-metro-eu, it-gfci |
| Rome | it | gap | strong | claims: it-metro-j, it-metro-eu |
| Turin | business | gap | present | claims: it-e-intesa, it-e-stellantis |
| Bologna and the Motor Valley | business | gap | present | claims: it-e-ducati, it-motor-valley |
| Bologna and the Motor Valley | finance | gap | present | claims: it-e-unipol |
| Padua and Venice (Veneto) | business | gap | present | claims: it-e-safilo |
| Padua and Venice (Veneto) | finance | gap | present | claims: it-e-ifis |
| Florence (Tuscany) | business | gap | present | claims: it-e-menarini |
| Florence (Tuscany) | marketing | gap | present | claims: it-e-ferragamo |
| Naples | business | gap | present | claims: it-e-kimbo |
| Genoa | business | gap | present | claims: it-e-ansaldo, it-e-costa, it-e-esaote, it-e-erg |

Rule applied: dominant needs a `data` claim; strong needs a statistic or two claims; present needs one named employer; otherwise gap.

### Standing (new)

- **Milan**: finance 5/3/2 (it-metro-k, it-metro-eu, it-gfci); it 5/3/2 (it-metro-j, it-metro-eu, it-gser); business 5/3/2 (it-mil-chamber, it-mil-assol)
- **Rome**: finance 4/3/2 (it-metro-k, it-metro-eu, it-gfci); it 4/3/1 (it-metro-j, it-metro-eu, it-gser); business 4/2/1 (it-rome, it-e-eni, it-e-enel)
- **Turin**: finance 4/3/1 (it-turin, it-metro-k, it-metro-eu); it 4/2/1 (it-turin, it-metro-j, it-metro-eu)
- **Bologna and the Motor Valley**: it 4/2/1 (it-bologna, it-metro-j); finance 4/2/1 (it-bologna, it-metro-k)
- **Padua and Venice (Veneto)**: it 4/2/1 (it-padua-venice, it-padua-venice-2, it-metro-j); finance 4/2/1 (it-padua-venice, it-padua-venice-2, it-metro-k)
- **Florence (Tuscany)**: finance 3/2/1 (it-florence, it-metro-k); it 3/2/1 (it-florence, it-metro-j)
- **Naples**: it 4/2/1 (it-naples, it-metro-j); finance 4/2/1 (it-naples, it-metro-k)
- **Genoa**: it 3/2/1 (it-genoa, it-metro-j); finance 3/2/1 (it-genoa, it-metro-k)

### Metrics (new)

| Hub | pop | gdp | wage | rent |
|---|---|---|---|---|
| Milan | 4329748 (2023, metro) | 228.4 EUR (2021, metro) | 3231 EUR (2024, city, mean) | - |
| Rome | 4227059 (2023, metro) | 163.5 EUR (2021, metro) | 2458 EUR (2024, city, mean) | - |
| Turin | 2204632 (2023, metro) | 75.9 EUR (2021, metro) | 2300 EUR (2024, city, mean) | - |
| Bologna and the Motor Valley | 1014124 (2023, metro) | 43.1 EUR (2021, metro) | 2411 EUR (2024, city, mean) | - |
| Padua and Venice (Veneto) | 1766244 (2023, metro) | 59.9 EUR (2021, metro) | 2176 EUR (2024, city, mean) | - |
| Florence (Tuscany) | 988194 (2023, metro) | 38.8 EUR (2021, metro) | 2271 EUR (2024, city, mean) | - |
| Naples | 2980338 (2023, metro) | 61.1 EUR (2021, metro) | 1847 EUR (2024, city, mean) | - |
| Genoa | 816606 (2023, metro) | 29 EUR (2021, metro) | 2067 EUR (2024, city, mean) | - |

- pop source: https://ec.europa.eu/eurostat/databrowser/view/met_pjanaggr3/default/table?lang=en — Eurostat, metropolitan regions: population on 1 January (met_pjanaggr3), Milano metropolitan region, 1 January 2023 [data]
- gdp source: https://ec.europa.eu/eurostat/databrowser/view/met_10r_3gdp/default/table?lang=en — Eurostat, GDP at current market prices by metropolitan region, 2021 [data]
- wage source: https://www.finanze.gov.it/it/statistiche-fiscali/open-data-comunale-principali-variabili-irpef/ — MEF open data: employee income per declarant, tax year 2024, annual ÷ 12, comune of residence [data]
- rent: not given for any Italian hub (no national source for one-bedroom rents by city was found; Numbeo was not used).

### New and changed claims

| Claim | Tag | Source | What the page says | Status |
|---|---|---|---|---|
| it-unemp | data | https://ec.europa.eu/eurostat/databrowser/view/une_rt_m/default/table?lang=en (Eurostat, Unemployment by sex and age, monthly (une_rt_m), August 2026) | une_rt_m, seasonally adjusted, % of labour force, Italy, 2026-08: total 6.2; under 25 20.3. | CONFIRMED (re-read 2026-10-03) |
| it-alma-1y | data | https://www.almalaurea.it/document-download/sintesi-rapporto-almalaurea-2026-sugli-esiti-occupazionali-della-laurea (AlmaLaurea, Sintesi del Rapporto 2026 sugli esiti occupazionali della laurea (June 2026)) | Sintesi AlmaLaurea 2026: "all’80,8% tra i laureati di secondo livello del 2024"; "1.495 euro per i laureati di secondo livello"; three years on "1.695 euro"; abroad "673 euro netti mensili in più rispetto a chi lavora nel Mezzogiorno"; North "68 euro mensili netti in più". | CONFIRMED (re-read 2026-10-03) |
| it-metro-j | data | https://ec.europa.eu/eurostat/databrowser/view/met_10r_3emp/default/table?lang=en (Eurostat, metropolitan regions: employment by activity (met_10r_3emp), 2021) | met_10r_3emp 2021, employed persons, thousand, J: Milano 147.2, Roma 121.8, Torino 40.3, Napoli 23.1, Bologna 19.4, Padova 13.7, Venezia 7.4, Firenze 11.3, Genova 9.2. Italy 642.6 (national figure per the first pass). | CONFIRMED (re-read 2026-10-03) |
| it-metro-k | data | https://ec.europa.eu/eurostat/databrowser/view/met_10r_3emp/default/table?lang=en (Eurostat, metropolitan regions: employment by activity (met_10r_3emp), 2021) | met_10r_3emp 2021, employed persons, thousand, K: Milano 100.7, Roma 68.8, Torino 53.6, Napoli 18.3, Bologna 14.8, Firenze 13.1, Genova 9.5, Padova 9.4, Venezia 6.7. | CONFIRMED (re-read 2026-10-03) |
| it-metro-eu | data | https://ec.europa.eu/eurostat/databrowser/view/met_10r_3emp/default/table?lang=en (Eurostat, metropolitan regions: employment by activity (met_10r_3emp), 2021) | met_10r_3emp 2021, metropolitan-region codes only (152 with a figure): J ranks Paris 1, Milano 2, Budapest 3, Roma 4, ..., Dublin 10, Torino 23; K ranks Paris 1, Warszawa 2, Milano 3, Dublin 4, Roma 5, Stockholm 6, Torino 10 (own count). | CONFIRMED (re-read 2026-10-03) |
| it-gfci | practitioner consensus | https://www.longfinance.net/media/documents/GFCI_40_Report_2026.09.16_v1.2.pdf (Z/Yen and China Development Institute, Global Financial Centres Index 40 (16 Sep 2026)) | GFCI 40 Table 1: Rome 47 (712, rank change 0), Milan 62 (697, was 45); Table 8 Western Europe lists Rome 15th, Milan not in the top 15. | CONFIRMED (re-read 2026-10-03) |
| it-mil-chamber | data | https://www.confcommerciomilano.it/export/sites/unione/doc/news_comunicati/pdf/2026/CamComMIMBLO_CS_260714_Milano-Produttiva-2026.pdf (Camera di commercio Milano Monza Brianza Lodi, press release on the 36th Milano Produttiva report (14 July 2026)) | Press release 14 Jul 2026: "imprese a partecipazione estera, che nella provincia di Milano sono 6.043 (32,7% del totale nazionale)"; "8,5% dei lavoratori in Italia"; "NEET Rate che scende al 7,7%"; "26.262 nuove imprese iscritte nel 2025". | CONFIRMED (re-read 2026-10-03) |
| it-mil-assol | practitioner consensus | https://www.assolombarda.it/centro-studi/report-your-next-milano-2026 (Assolombarda, Your Next Milano 2026) | Assolombarda’s 2026 benchmark puts Milan seventh among its eleven peer cities for greenfield foreign investment projects in 2025, up two places, behind London, Paris and New York at the top; Milan is last of the eleven on average  | READ in the first pass (2026-10-03); not re-opened after the interruption |
| it-gser | practitioner consensus | https://startupgenome.com/ecosystems/milan (Startup Genome, Global Startup Ecosystem Report 2026, ecosystem page) | Startup Genome ecosystem pages, GSER 2026: Milan Ecosystem Value $25 BN (global avg $25 BN, regional $14.3 BN), early-stage funding $788 M; Rome $2 BN, $157 M; Turin "#81-90 Emerging Ecosystem". | CONFIRMED (re-read 2026-10-03) |
| it-e-unicredit | data | https://api.gleif.org/api/v1/lei-records/549300TRUWO2CD2G5692 (GLEIF, Global LEI Index record for UNICREDIT, SOCIETA' PER AZIONI (LEI 549300TRUWO2CD2G5692)) | GLEIF record: legalName "UNICREDIT, SOCIETA' PER AZIONI"; headquartersAddress: PIAZZA GAE AULENTI 3, MILANO, IT. | CONFIRMED (re-read 2026-10-03) |
| it-e-mediobanca | data | https://api.gleif.org/api/v1/lei-records/PSNL19R2RXX5U3QWHI44 (GLEIF, Global LEI Index record for MEDIOBANCA - BANCA DI CREDITO FINANZIARIO S.P.A. (LEI PSNL19R2RXX5U3QWHI44)) | GLEIF record: legalName "MEDIOBANCA - BANCA DI CREDITO FINANZIARIO S.P.A."; headquartersAddress: PIAZZETTA ENRICO CUCCIA, 1, MILAN, IT. | CONFIRMED (re-read 2026-10-03) |
| it-e-bancobpm | data | https://api.gleif.org/api/v1/lei-records/815600E4E6DCD2D25E30 (GLEIF, Global LEI Index record for BANCO BPM SOCIETA' PER AZIONI (LEI 815600E4E6DCD2D25E30)) | GLEIF record: legalName "BANCO BPM SOCIETA' PER AZIONI"; headquartersAddress: PIAZZA FILIPPO MEDA, 4, MILANO, IT. | CONFIRMED (re-read 2026-10-03) |
| it-e-fineco | data | https://api.gleif.org/api/v1/lei-records/549300L7YCATGO57ZE10 (GLEIF, Global LEI Index record for FINECOBANK BANCA FINECO S.P.A. (LEI 549300L7YCATGO57ZE10)) | GLEIF record: legalName "FINECOBANK BANCA FINECO S.P.A."; headquartersAddress: PIAZZALE DURANTE FRANCESCO 11, MILAN, IT. | CONFIRMED (re-read 2026-10-03) |
| it-e-mediolanum | data | https://api.gleif.org/api/v1/lei-records/7LVZJ6XRIE7VNZ4UBX81 (GLEIF, Global LEI Index record for BANCA MEDIOLANUM SPA (LEI 7LVZJ6XRIE7VNZ4UBX81)) | GLEIF record: legalName "BANCA MEDIOLANUM SPA"; headquartersAddress: VIA ENNIO DORIS, SNC (MILANO 3), BASIGLIO, IT. | CONFIRMED (re-read 2026-10-03) |
| it-e-pirelli | data | https://api.gleif.org/api/v1/lei-records/815600A0C9AFC1F2A709 (GLEIF, Global LEI Index record for PIRELLI & C. S.P.A. (LEI 815600A0C9AFC1F2A709)) | GLEIF record: legalName "PIRELLI & C. S.P.A."; headquartersAddress: VIALE PIERO E ALBERTO PIRELLI, 25, MILANO, IT. | CONFIRMED (re-read 2026-10-03) |
| it-e-prada | data | https://api.gleif.org/api/v1/lei-records/8156000FE0A2DC5B7852 (GLEIF, Global LEI Index record for PRADA S.P.A. (LEI 8156000FE0A2DC5B7852)) | GLEIF record: legalName "PRADA S.P.A."; headquartersAddress: VIA ANTONIO FOGAZZARO, 28, MILANO, IT. | CONFIRMED (re-read 2026-10-03) |
| it-e-moncler | data | https://api.gleif.org/api/v1/lei-records/815600EBD7FB00525B20 (GLEIF, Global LEI Index record for MONCLER S.P.A. (LEI 815600EBD7FB00525B20)) | GLEIF record: legalName "MONCLER S.P.A."; headquartersAddress: VIA STENDHAL, 47, MILANO, IT. | CONFIRMED (re-read 2026-10-03) |
| it-e-snam | data | https://api.gleif.org/api/v1/lei-records/8156002278562044AF79 (GLEIF, Global LEI Index record for SNAM S.P.A. (LEI 8156002278562044AF79)) | GLEIF record: legalName "SNAM S.P.A."; headquartersAddress: VIA VEZZA D'OGLIO, 6, MILANO, IT. | CONFIRMED (re-read 2026-10-03) |
| it-e-prysmian | data | https://api.gleif.org/api/v1/lei-records/529900X0H1IO3RS1A464 (GLEIF, Global LEI Index record for PRYSMIAN S.P.A. (LEI 529900X0H1IO3RS1A464)) | GLEIF record: legalName "PRYSMIAN S.P.A."; headquartersAddress: VIA CHIESE 6, Milano, IT. | CONFIRMED (re-read 2026-10-03) |
| it-e-eni | data | https://api.gleif.org/api/v1/lei-records/BUCRF72VH5RBN7X3VL35 (GLEIF, Global LEI Index record for ENI S.P.A. (LEI BUCRF72VH5RBN7X3VL35)) | GLEIF record: legalName "ENI S.P.A."; headquartersAddress: PIAZZALE ENRICO MATTEI, 1, ROMA, IT. | CONFIRMED (re-read 2026-10-03) |
| it-e-enel | data | https://api.gleif.org/api/v1/lei-records/WOCMU6HCI0OJWNPRZS33 (GLEIF, Global LEI Index record for ENEL - SPA (LEI WOCMU6HCI0OJWNPRZS33)) | GLEIF record: legalName "ENEL - SPA"; headquartersAddress: VIALE REGINA MARGHERITA 137, Roma, IT. | CONFIRMED (re-read 2026-10-03) |
| it-e-leonardo | data | https://api.gleif.org/api/v1/lei-records/529900X4EEX1U9LN3U39 (GLEIF, Global LEI Index record for LEONARDO - SOCIETA' PER AZIONI (LEI 529900X4EEX1U9LN3U39)) | GLEIF record: legalName "LEONARDO - SOCIETA' PER AZIONI"; headquartersAddress: Piazza Monte Grappa 4, Roma, IT. | CONFIRMED (re-read 2026-10-03) |
| it-e-poste | data | https://api.gleif.org/api/v1/lei-records/815600354DEDBD0BA991 (GLEIF, Global LEI Index record for POSTE ITALIANE - SOCIETA' PER AZIONI (LEI 815600354DEDBD0BA991)) | GLEIF record: legalName "POSTE ITALIANE - SOCIETA' PER AZIONI"; headquartersAddress: VIALE EUROPA, 190, ROMA, IT. | CONFIRMED (re-read 2026-10-03) |
| it-e-fs | data | https://api.gleif.org/api/v1/lei-records/549300J4SXC5ALCJM731 (GLEIF, Global LEI Index record for FERROVIE DELLO STATO ITALIANE S.P.A. (LEI 549300J4SXC5ALCJM731)) | GLEIF record: legalName "FERROVIE DELLO STATO ITALIANE S.P.A."; headquartersAddress: PIAZZA DELLA CROCE ROSSA 1, ROME, IT. | CONFIRMED (re-read 2026-10-03) |
| it-e-intesa | data | https://api.gleif.org/api/v1/lei-records/2W8N8UU78PMDQKZENC08 (GLEIF, Global LEI Index record for INTESA SANPAOLO SPA (LEI 2W8N8UU78PMDQKZENC08)) | GLEIF record: legalName "INTESA SANPAOLO SPA"; headquartersAddress: PIAZZA SAN CARLO, 156, TORINO, IT. | CONFIRMED (re-read 2026-10-03) |
| it-e-stellantis | data | https://api.gleif.org/api/v1/lei-records/54930007BBNT0XZVEU52 (GLEIF, Global LEI Index record for STELLANTIS EUROPE S.P.A. (LEI 54930007BBNT0XZVEU52)) | GLEIF record: legalName "STELLANTIS EUROPE S.P.A."; headquartersAddress: CORSO GIOVANNI AGNELLI 200, TURIN, IT. | CONFIRMED (re-read 2026-10-03) |
| it-e-unipol | data | https://api.gleif.org/api/v1/lei-records/8156005CE5E7340CCA86 (GLEIF, Global LEI Index record for UNIPOL ASSICURAZIONI S.P.A. (LEI 8156005CE5E7340CCA86)) | GLEIF record: legalName "UNIPOL ASSICURAZIONI S.P.A."; headquartersAddress: VIA STALINGRADO, 45, BOLOGNA, IT. | CONFIRMED (re-read 2026-10-03) |
| it-e-ducati | data | https://api.gleif.org/api/v1/lei-records/5299005TE9713O1TVI13 (GLEIF, Global LEI Index record for DUCATI MOTOR HOLDING SPA (LEI 5299005TE9713O1TVI13)) | GLEIF record: legalName "DUCATI MOTOR HOLDING SPA"; headquartersAddress: VIA CAVALIERI DUCATI 3, Bologna, IT. | CONFIRMED (re-read 2026-10-03) |
| it-e-ferragamo | data | https://api.gleif.org/api/v1/lei-records/5493005GRP0FEE3NRI35 (GLEIF, Global LEI Index record for SALVATORE FERRAGAMO S.P.A. (LEI 5493005GRP0FEE3NRI35)) | GLEIF record: legalName "SALVATORE FERRAGAMO S.P.A."; headquartersAddress: VIA TORNABUONI, 2, FIRENZE, IT. | CONFIRMED (re-read 2026-10-03) |
| it-e-menarini | data | https://api.gleif.org/api/v1/lei-records/8156002DC6B01873B624 (GLEIF, Global LEI Index record for A. MENARINI - INDUSTRIE FARMACEUTICHE RIUNITE - S.R.L. (LEI 8156002DC6B01873B624)) | GLEIF record: legalName "A. MENARINI - INDUSTRIE FARMACEUTICHE RIUNITE - S.R.L."; headquartersAddress: VIA DEI SETTE SANTI, 3, FIRENZE, IT. | CONFIRMED (re-read 2026-10-03) |
| it-e-ansaldo | data | https://api.gleif.org/api/v1/lei-records/815600B611746717CC98 (GLEIF, Global LEI Index record for "ANSALDO ENERGIA S.P.A." (LEI 815600B611746717CC98)) | GLEIF record: legalName ""ANSALDO ENERGIA S.P.A.""; headquartersAddress: VIA NICOLA LORENZI, 8, GENOVA, IT. | CONFIRMED (re-read 2026-10-03) |
| it-e-costa | data | https://api.gleif.org/api/v1/lei-records/8156007E606D24BE8F80 (GLEIF, Global LEI Index record for "COSTA CROCIERE S.P.A." (LEI 8156007E606D24BE8F80)) | GLEIF record: legalName ""COSTA CROCIERE S.P.A.""; headquartersAddress: PIAZZA PICCAPIETRA, 48, GENOVA, IT. | CONFIRMED (re-read 2026-10-03) |
| it-e-safilo | data | https://api.gleif.org/api/v1/lei-records/81560026FA1A26642782 (GLEIF, Global LEI Index record for SAFILO GROUP S.P.A. (LEI 81560026FA1A26642782)) | GLEIF record: legalName "SAFILO GROUP S.P.A."; headquartersAddress: ZONA INDUSTRIALE VII STRADA, 15, PADOVA, IT. | CONFIRMED (re-read 2026-10-03) |
| it-e-kimbo | data | https://api.gleif.org/api/v1/lei-records/8156005CFBABC8699924 (GLEIF, Global LEI Index record for KIMBO S.P.A. (LEI 8156005CFBABC8699924)) | GLEIF record: legalName "KIMBO S.P.A."; headquartersAddress: VIA BERNINI, 20, NAPOLI, IT. | CONFIRMED (re-read 2026-10-03) |
| it-e-ifis | data | https://api.gleif.org/api/v1/lei-records/8156005420362AE59184 (GLEIF, Global LEI Index record for BANCA IFIS S.P.A. (LEI 8156005420362AE59184)) | GLEIF record: legalName "BANCA IFIS S.P.A."; headquartersAddress: VIA TERRAGLIO, 63 (MESTRE), VENEZIA, IT. | CONFIRMED (re-read 2026-10-03) |
| it-e-marchesini | data | https://api.gleif.org/api/v1/lei-records/815600C0B26B399DE691 (GLEIF, Global LEI Index record for MARCHESINI GROUP S.P.A. (LEI 815600C0B26B399DE691)) | GLEIF record: legalName "MARCHESINI GROUP S.P.A."; headquartersAddress: VIA NAZIONALE, 100, PIANORO, IT. | CONFIRMED (re-read 2026-10-03) |
| it-e-esaote | data | https://api.gleif.org/api/v1/lei-records/815600A50C763397B555 (GLEIF, Global LEI Index record for ESAOTE S.P.A. (LEI 815600A50C763397B555)) | GLEIF record: legalName "ESAOTE S.P.A."; headquartersAddress: VIA ENRICO MELEN, 77, GENOVA, IT. | CONFIRMED (re-read 2026-10-03) |
| it-e-erg | data | https://api.gleif.org/api/v1/lei-records/8156004604684CA44A90 (GLEIF, Global LEI Index record for ERG S.P.A. (LEI 8156004604684CA44A90)) | GLEIF record: legalName "ERG S.P.A."; headquartersAddress: VIA DE MARINI, 1, GENOVA, IT. | CONFIRMED (re-read 2026-10-03) |
| it-e-spoons | data | https://api.gleif.org/api/v1/lei-records/8156003EE5CFCCBBEB31 (GLEIF, Global LEI Index record for BENDING SPOONS S.P.A. (LEI 8156003EE5CFCCBBEB31)) | GLEIF record: legalName "BENDING SPOONS S.P.A."; headquartersAddress: VIA BONNET NINO, 10, MILANO, IT. | CONFIRMED (re-read 2026-10-03) |
| it-e-azimut | data | https://api.gleif.org/api/v1/lei-records/81560025690EF8540635 (GLEIF, Global LEI Index record for AZIMUT HOLDING S.P.A. (LEI 81560025690EF8540635)) | GLEIF record: legalName "AZIMUT HOLDING S.P.A."; headquartersAddress: VIA CUSANI, 4, MILAN, IT. | CONFIRMED (re-read 2026-10-03) |
| it-e-luxottica | data | https://api.gleif.org/api/v1/lei-records/549300I1NMOBS4B1LT88 (GLEIF, Global LEI Index record for LUXOTTICA GROUP SPA (LEI 549300I1NMOBS4B1LT88)) | GLEIF record: legalName "LUXOTTICA GROUP SPA"; headquartersAddress: PIAZZALE LUIGI CADORNA 3, MILAN, IT. | CONFIRMED (re-read 2026-10-03) |
| it-e-italgas | data | https://api.gleif.org/api/v1/lei-records/815600F25FF44EF1FA76 (GLEIF, Global LEI Index record for ITALGAS S.P.A. (LEI 815600F25FF44EF1FA76)) | GLEIF record: legalName "ITALGAS S.P.A."; headquartersAddress: VIA CARLO BO, 11, MILANO, IT. | CONFIRMED (re-read 2026-10-03) |

### Notes on the Italy section

- **Metropolitan basis.** Population and GDP are Eurostat metropolitan regions (area metro); pay is the MEF comune-level IRPEF figure (area city, mean employee income of declarants resident in the comune, so it includes part-time and part-year work and is not a gross monthly contract wage). Padua–Venice adds the two metropolitan regions; its pay is weighted by declarants.
- **Ratings** rest mainly on Eurostat's 2021 metropolitan counts (the latest year with Italian figures: London, Berlin, Madrid and Frankfurt have none for 2021) and on the GFCI 40. Milan IT and finance are dominant on the national concentration (Milan has 23% of national information and communication jobs and 16% of finance and insurance jobs, arithmetic on 147.2/642.6 and 100.7/620.4).
- **GFCI** puts Rome (47th) above Milan (62nd, down from 45th); the brief discusses why jobs and the index disagree.
- **Rents** are absent for every hub; the record's gaps say so.
- **Employers**: headquarters are the Global LEI Index's registered headquarters addresses (GLEIF, re-read for all 33 companies on 3 October 2026), not headcounts.

## P39 Spain (data/atlas/es.js)

Claims 14 → 48; hubs 7 → 7 (no new hubs). Brief: research/countries/es-spain.md.

### Ratings changed (old → new)

| Hub | Family | Old | New | Rests on |
|---|---|---|---|---|
| Madrid | finance | strong | dominant | claims: es-mad, es-mad-lfs, es-santander |
| Madrid | it | gap | dominant | claims: es-mad-lfs, es-e-telefonica |
| Madrid | software | gap | strong | claims: es-mad-lfs, es-mad-gser, es-e-amadeus |
| Barcelona | business | gap | present | claims: es-e-seat |
| Barcelona | finance | gap | present | claims: es-e-sabadell |
| Barcelona | it | gap | strong | claims: es-cat-lfs, es-bcn-gser |
| Valencia | business | gap | present | claims: es-e-mercadona |
| Valencia | finance | gap | present | claims: es-e-caixabank |
| Valencia | logistics | gap | present | claims: es-e-valenciaport |
| Seville | business | gap | present | claims: es-e-abengoa |
| Málaga | finance | gap | present | claims: es-e-unicaja |
| Bilbao | business | gap | present | claims: es-e-iberdrola |
| Bilbao | finance | gap | strong | claims: es-e-bbva, es-e-kutxabank |
| Zaragoza | business | gap | present | claims: es-e-pikolin |

Rule applied: dominant needs a `data` claim; strong needs a statistic or two claims; present needs one named employer; otherwise gap.

### Standing (new)

- **Madrid**: finance 5/3/2 (es-mad-lfs, es-gfci, es-mad); it 5/3/2 (es-mad-lfs, es-mad-gser, es-bcn-blink); software 5/3/2 (es-mad-lfs, es-mad-gser, es-bcn-blink); business 5/3/2 (es-mad, es-mad-lfs)
- **Barcelona**: software 4/3/2 (es-cat-lfs, es-bcn-gser, es-bcn-blink); it 4/3/2 (es-cat-lfs, es-bcn-gser, es-bcn-blink)
- **Valencia**: logistics 3/2/1 (es-e-valenciaport, es-valencia)
- **Seville**: business 3/2/1 (es-seville, es-and-lfs, es-e-abengoa)
- **Málaga**: finance 3/2/1 (es-e-unicaja, es-malaga)
- **Bilbao**: finance 3/2/1 (es-e-bbva, es-e-kutxabank, es-pv-lfs)
- **Zaragoza**: business 3/2/1 (es-zaragoza, es-e-pikolin, es-e-saica)

### Metrics (new)

| Hub | pop | gdp | wage | rent |
|---|---|---|---|---|
| Madrid | 6871903 (2023, metro) | 237.5 EUR (2021, metro) | 2868 EUR (2024, region, mean) | - |
| Barcelona | 5797356 (2023, metro) | 173.7 EUR (2021, metro) | 2644 EUR (2024, region, mean) | - |
| Valencia | 2656841 (2023, metro) | 61.4 EUR (2021, metro) | 2235 EUR (2024, region, mean) | - |
| Seville | 1959394 (2023, metro) | 40.7 EUR (2021, metro) | 2174 EUR (2024, region, mean) | - |
| Málaga | 1752728 (2023, metro) | 30.8 EUR (2021, metro) | 2174 EUR (2024, region, mean) | - |
| Bilbao | 1153282 (2023, metro) | 35.4 EUR (2021, metro) | 2931 EUR (2024, region, mean) | - |
| Zaragoza | 979365 (2023, metro) | 27.9 EUR (2021, metro) | 2338 EUR (2024, region, mean) | - |

- pop sources: https://ec.europa.eu/eurostat/databrowser/view/met_pjanaggr3/default/table?lang=en | Eurostat (data)
- gdp sources: https://ec.europa.eu/eurostat/databrowser/view/met_10r_3gdp/default/table?lang=en | Eurostat (data)
- wage sources: https://www.ine.es/jaxiT3/Tabla.htm?t=28191 | INE (data)
- rent: not given for any hub

### New and changed claims

| Claim | Tag | Source | What the page says | Status |
|---|---|---|---|---|
| es-mad-lfs | data | https://ec.europa.eu/eurostat/databrowser/view/lfst_r_lfe2en2/default/table?lang=en (Eurostat, Labour Force Survey: employed persons by economic activity and NUTS 2 region (lfst_r_lfe2en2), 2025) | lfst_r_lfe2en2 2025, thousand persons 15-74, total sex: ES30 J 259.4, K 171.9; Spain J 839.6, K 468.2; ranking of NUTS2 codes (excluding aggregates): J Île-de-France 480.3, Madrid 259.4, Cataluña 192.3, Lombardia 177.7; K Île-de-France 310.5, Madrid 171.9, Lombardia 158.7. Shares are my arithmetic (259.4/839.6 = 30.9%, 171.9/468.2 = 36.7%). | CONFIRMED (read 2026-10-03) |
| es-cat-lfs | data | https://ec.europa.eu/eurostat/databrowser/view/lfst_r_lfe2en2/default/table?lang=en (Eurostat, Labour Force Survey: employed persons by economic activity and NUTS 2 region (lfst_r_lfe2en2), 2025) | lfst_r_lfe2en2 2025, thousand persons 15-74: ES51 J 192.3 (3rd of 257 after Île-de-France and Madrid), K 75.3. 192.3/839.6 = 22.9% (arithmetic). | CONFIRMED (read 2026-10-03) |
| es-val-lfs | data | https://ec.europa.eu/eurostat/databrowser/view/lfst_r_lfe2en2/default/table?lang=en (Eurostat, Labour Force Survey: employed persons by economic activity and NUTS 2 region (lfst_r_lfe2en2), 2025) | lfst_r_lfe2en2 2025, ES52: total 2,419.3; J 68.5; K 35.6 (thousand). | CONFIRMED (read 2026-10-03) |
| es-and-lfs | data | https://ec.europa.eu/eurostat/databrowser/view/lfst_r_lfe2en2/default/table?lang=en (Eurostat, Labour Force Survey: employed persons by economic activity and NUTS 2 region (lfst_r_lfe2en2), 2025) | lfst_r_lfe2en2 2025, ES61: total 3,564.8; J 95.8; K 56.8 (thousand). | CONFIRMED (read 2026-10-03) |
| es-pv-lfs | data | https://ec.europa.eu/eurostat/databrowser/view/lfst_r_lfe2en2/default/table?lang=en (Eurostat, Labour Force Survey: employed persons by economic activity and NUTS 2 region (lfst_r_lfe2en2), 2025) | lfst_r_lfe2en2 2025, ES21: total 999.0; J 32.8; K 13.4 (thousand). | CONFIRMED (read 2026-10-03) |
| es-ara-lfs | data | https://ec.europa.eu/eurostat/databrowser/view/lfst_r_lfe2en2/default/table?lang=en (Eurostat, Labour Force Survey: employed persons by economic activity and NUTS 2 region (lfst_r_lfe2en2), 2025) | lfst_r_lfe2en2 2025, ES24: total 626.1; J 17.6; K 10.5 (thousand). | CONFIRMED (read 2026-10-03) |
| es-gfci | practitioner consensus | https://www.longfinance.net/media/documents/GFCI_40_Report_2026.09.16_v1.2.pdf (Z/Yen and China Development Institute, Global Financial Centres Index 40 (16 Sep 2026)) | Table 1: Madrid 43 (716, was 40). Table 8 Western Europe top 15: London, Zurich, Geneva, Luxembourg, Lugano, Paris, Copenhagen, Amsterdam, Frankfurt, Dublin, Edinburgh, Stockholm, Madrid (13th), Berlin, Rome. Barcelona and Bilbao do not appear in Table 1 (117 centres). | CONFIRMED (read 2026-10-03) |
| es-mad-gser | practitioner consensus | https://startupgenome.com/ecosystems/madrid (Startup Genome, Global Startup Ecosystem Report 2026, ecosystem page) | Madrid page header: "#3 Emerging Ecosystem, #9 Europe ECOSYSTEM, Top 10 Europe Ecosystem in Performance, Top 10 Europe Ecosystem in Talent Strength, Top 15 Europe Ecosystem in AI-Native Cluster". Press release of 17 Jun 2026: "Mumbai ranked #1 Emerging Startup Ecosystem, followed by Istanbul and Madrid". | CONFIRMED (read 2026-10-03) |
| es-bcn-gser | practitioner consensus | https://startupgenome.com/ecosystems/barcelona (Startup Genome, Global Startup Ecosystem Report 2026, ecosystem page) | Barcelona page: Ecosystem Value $16 BN (global avg $25 BN, regional avg $14.3 BN); total early-stage funding $771 M (global avg $554 M). | CONFIRMED (read 2026-10-03) |
| es-bcn-blink | practitioner consensus | https://www.accio.gencat.cat/web/.content/bancconeixement/documents/pindoles/ACCIO-analisi-ecosistema-startup-catalunya-2026-pindola-en.pdf (ACCIÓ (Government of Catalonia), Analysis of the startup ecosystem in Catalonia 2026 (February 2026), citing StartupBlink) | "this year, Barcelona has risen 5 positions in the world ranking of cities and is placed in 33rd position. The next city in Spain is Madrid, which is in 51st place"; summary: "5th best startup ecosystem in the EU StartupBlink". | CONFIRMED (read 2026-10-03) |
| es-val-gser | practitioner consensus | https://startupgenome.com/ecosystems/valencia (Startup Genome, Global Startup Ecosystem Report 2026, ecosystem page) | Valencia page header: "#61-70 Emerging Ecosystem ... Top 30 European Ecosystem in Affordable Talent, Top 30 Europe Ecosystem in Funding Momentum, Top 35 Europe Ecosystem in AI-Native Cluster"; press release: "Valencia and Porto were standout European climbers, rising 22 and 16 places respectively". | CONFIRMED (read 2026-10-03) |
| es-bil-gser | practitioner consensus | https://startupgenome.com/ecosystems/bilbao (Startup Genome, Global Startup Ecosystem Report 2026, ecosystem page) | Bilbao page: Ecosystem Value $1 BN (global avg $25 BN); total early-stage funding $107 M. Zaragoza page: Ecosystem Value NA; early-stage funding $4 M (not used). | CONFIRMED (read 2026-10-03) |
| es-unemp | data | https://ec.europa.eu/eurostat/databrowser/view/une_rt_m/default/table?lang=en (Eurostat, Unemployment by sex and age, monthly (une_rt_m), August 2026) | une_rt_m, s_adj SA, % of labour force, sex total, 2026-08: Spain total 10.0, under 25 22.7; EU27 total 6.1, under 25 15.4. | CONFIRMED (read 2026-10-03) |
| es-grad-emp | data | https://ec.europa.eu/eurostat/databrowser/view/edat_lfse_24/default/table?lang=en (Eurostat, Employment rates of young people not in education and training (edat_lfse_24), 2025) | edat_lfse_24 2025, ISCED 5-8, age 20-34, total sex, years since graduation 3 or less: ES 84.9; EU27 85.3 (all years since graduation: ES 86.8, EU 88.4). | CONFIRMED (read 2026-10-03) |
| es-e-telefonica | data | https://api.gleif.org/api/v1/lei-records/549300EEJH4FEPDBBR25 (GLEIF, Global LEI Index record for TELEFONICA SA (LEI 549300EEJH4FEPDBBR25)) | headquartersAddress: GRAN VIA 28, MADRID, ES. | CONFIRMED (read 2026-10-03) |
| es-e-repsol | data | https://api.gleif.org/api/v1/lei-records/BSYCX13Y0NOTV14V9N85 (GLEIF, Global LEI Index record for REPSOL SA (LEI BSYCX13Y0NOTV14V9N85)) | headquartersAddress: calle Méndez Alvaro 44, Madrid, ES. | CONFIRMED (read 2026-10-03) |
| es-e-amadeus | data | https://api.gleif.org/api/v1/lei-records/9598004A3FTY3TEHHN09 (GLEIF, Global LEI Index record for AMADEUS IT GROUP SOCIEDAD ANONIMA (LEI 9598004A3FTY3TEHHN09)) | headquartersAddress: Salvador de Madariaga 1, Madrid, ES. | CONFIRMED (read 2026-10-03) |
| es-e-endesa | data | https://api.gleif.org/api/v1/lei-records/549300LHK07F2CHV4X31 (GLEIF, Global LEI Index record for ENDESA SA (LEI 549300LHK07F2CHV4X31)) | headquartersAddress: CALLE RIBERA DEL LOIRA NUMERO 60, Madrid, ES. | CONFIRMED (read 2026-10-03) |
| es-e-bde | data | https://api.gleif.org/api/v1/lei-records/95980020140006022422 (GLEIF, Global LEI Index record for BANCO DE ESPAÑA (LEI 95980020140006022422)) | headquartersAddress: C/ Alcalá 48, Madrid, ES. | CONFIRMED (read 2026-10-03) |
| es-e-bme | data | https://api.gleif.org/api/v1/lei-records/9598003MSLCX8JT38V69 (GLEIF, Global LEI Index record for BOLSAS Y MERCADOS ESPAÑOLES, SOCIEDAD HOLDING DE MERCADOS Y SISTEMAS FINANCIEROS, S.A. (LEI 9598003MSLCX8JT38V69)) | headquartersAddress: PLAZA DE LA LEALTAD 1, Madrid, ES. | CONFIRMED (read 2026-10-03) |
| es-e-glovo | data | https://api.gleif.org/api/v1/lei-records/254900104NN37XK6MA89 (GLEIF, Global LEI Index record for GLOVOAPP23 S.A. (LEI 254900104NN37XK6MA89)) | headquartersAddress: CL LLULL Num.108, Barcelona, ES. | CONFIRMED (read 2026-10-03) |
| es-e-seat | data | https://api.gleif.org/api/v1/lei-records/529900C2P7V7P1UGVX95 (GLEIF, Global LEI Index record for SEAT SA (LEI 529900C2P7V7P1UGVX95)) | headquartersAddress: Autovía A-2, KM.585, Martorell, Barcelona, ES. | CONFIRMED (read 2026-10-03) |
| es-e-sabadell | data | https://api.gleif.org/api/v1/lei-records/SI5RG2M0WQQLZCXKRM20 (GLEIF, Global LEI Index record for BANCO DE SABADELL S.A. (LEI SI5RG2M0WQQLZCXKRM20)) | headquartersAddress: Plaça de Sant Roc 20, Sabadell, ES. | CONFIRMED (read 2026-10-03) |
| es-e-caixabank | data | https://api.gleif.org/api/v1/lei-records/7CUNS533WID6K7DGFI87 (GLEIF, Global LEI Index record for CAIXABANK SA (LEI 7CUNS533WID6K7DGFI87)) | headquartersAddress: CALLE PINTOR SOROLLA 2 - 4, Valencia, ES. (A CaixaBank operational-services entity is at Gran Via Carles III 97, Barcelona.) | CONFIRMED (read 2026-10-03) |
| es-e-mercadona | data | https://api.gleif.org/api/v1/lei-records/959800G1STVUPYU6NU22 (GLEIF, Global LEI Index record for MERCADONA SA (LEI 959800G1STVUPYU6NU22)) | headquartersAddress: Calle Alfonso Roig Alfonso S/n, Albalat dels Sorells, ES. | CONFIRMED (read 2026-10-03) |
| es-e-valenciaport | data | https://api.gleif.org/api/v1/lei-records/959800N0APRWEFBHS352 (GLEIF, Global LEI Index record for AUTORIDAD PORTUARIA DE VALENCIA (LEI 959800N0APRWEFBHS352)) | headquartersAddress: AVENIDA DEL MUELLE TURIA S/N, Valencia, ES. | CONFIRMED (read 2026-10-03) |
| es-e-abengoa | data | https://api.gleif.org/api/v1/lei-records/8ZQH7RR6DBQZIX8PEQ84 (GLEIF, Global LEI Index record for ABENGOA, S.A. (LEI 8ZQH7RR6DBQZIX8PEQ84)) | headquartersAddress: Campus Palmas Altas, calle Energía Solar 1, Sevilla, ES. | CONFIRMED (read 2026-10-03) |
| es-e-heineken | data | https://api.gleif.org/api/v1/lei-records/9598003983KNFL970116 (GLEIF, Global LEI Index record for HEINEKEN ESPAÑA, SA (LEI 9598003983KNFL970116)) | headquartersAddress: AVENIDA ANDALUCIA, 1, Sevilla, ES. | CONFIRMED (read 2026-10-03) |
| es-e-unicaja | data | https://api.gleif.org/api/v1/lei-records/5493007SJLLCTM6J6M37 (GLEIF, Global LEI Index record for UNICAJA BANCO SA (LEI 5493007SJLLCTM6J6M37)) | headquartersAddress: Avenida de Andalucía 10-12, Málaga, ES. | CONFIRMED (read 2026-10-03) |
| es-e-bbva | data | https://api.gleif.org/api/v1/lei-records/K8MS7FD7N5Z2WQ51AZ71 (GLEIF, Global LEI Index record for BANCO BILBAO VIZCAYA ARGENTARIA SOCIEDAD ANONIMA (LEI K8MS7FD7N5Z2WQ51AZ71)) | headquartersAddress: PLAZA DE SAN NICOLÁS, 4, BILBAO, ES. | CONFIRMED (read 2026-10-03) |
| es-e-iberdrola | data | https://api.gleif.org/api/v1/lei-records/5QK37QC7NWOJ8D7WVQ45 (GLEIF, Global LEI Index record for IBERDROLA SA (LEI 5QK37QC7NWOJ8D7WVQ45)) | headquartersAddress: PLAZA EUSKADI, 5- -Torre Iberdrola-, Bilbao, ES. | CONFIRMED (read 2026-10-03) |
| es-e-kutxabank | data | https://api.gleif.org/api/v1/lei-records/549300U4LIZV0REEQQ46 (GLEIF, Global LEI Index record for KUTXABANK SA (LEI 549300U4LIZV0REEQQ46)) | headquartersAddress: Gran Vía, 30-32, Bilbao, ES. (The description "Basque savings-bank group" is general knowledge, not read on the record; flagged in the log.) | CONFIRMED (read 2026-10-03) |
| es-e-pikolin | data | https://api.gleif.org/api/v1/lei-records/95980020140005833854 (GLEIF, Global LEI Index record for PIKOLIN SL (LEI 95980020140005833854)) | headquartersAddress: PLATAFORMA LOGISTICA ZARAGOZA -PLAZA- Ronda del Ferrocarril 24, Zaragoza, ES. | CONFIRMED (read 2026-10-03) |
| es-e-saica | data | https://api.gleif.org/api/v1/lei-records/9598007VYTBCGU20JD72 (GLEIF, Global LEI Index record for SAICA PACK S.L. (LEI 9598007VYTBCGU20JD72)) | headquartersAddress: AVENIDA SAN JUAN PEÑA 144, Zaragoza, ES. | CONFIRMED (read 2026-10-03) |

### Notes on the Spain section

- **Why regional sector counts.** Eurostat's metropolitan table gives no split by sector for Spanish metros (only the total), and NUTS 3 gives no sector split for Spain, so the sector counts come from the Labour Force Survey by NUTS 2 region (autonomous community), 2025, in thousands of persons aged 15 to 74. They are survey estimates for whole regions: Seville and Málaga share Andalucía's, and the figures are not city counts. Ranks (second of 257 for information and communication, second of 255 for finance and insurance for Madrid; third of 257 for Cataluña) are the researcher's own count of the NUTS 2 codes, excluding euro-area and EU aggregates; the UK is not in Eurostat's regional data.
- **Pay.** INE Encuesta Anual de Estructura Salarial 2024, table 28191 (read through the INE API): mean gross annual earnings per worker, both sexes: Madrid €34,410.01, Cataluña €31,730.05, Comunitat Valenciana €26,816.98, Andalucía €26,089.70, País Vasco €35,170.28, Aragón €28,061.94; Spain €29,540.26 (medians: Madrid €28,037.75, Spain €24,497.17). Monthly figure = annual ÷ 12; regional (autonomous-community) basis, so Seville and Málaga show the same value.
- **Population and GDP.** Eurostat metropolitan regions: population on 1 January 2023 (latest year published) and GDP 2021 (latest year published); GDP in the existing claims (Valencia €61.4 bn and so on) matches the series.
- **Rent.** No source: Numbeo returned "Access Restricted"; no official one-bedroom rent by city was read.
- **GLEIF.** Headquarters addresses are the "headquartersAddress" of each Global LEI Index record, read through the GLEIF API; legal-name search was exact. Santander's own record (Banco Santander S.A.) gives Paseo de Pereda 9–12, Santander, so it is not claimed as a Madrid headquarters; the existing programme claim stands. A company at Épila (Proma Hispania) was dropped from the draft because the link to the Opel plant was only the street name. The description "Basque savings-bank group" (Kutxabank) is general knowledge, not read on the GLEIF record.
- **Rankings.** GSER 2026 ecosystem pages read on 3 October 2026 (Madrid "#3 Emerging Ecosystem, #9 Europe"; Valencia "#61-70 Emerging"); StartupBlink positions (Barcelona 33rd, Madrid 51st, 5th in the EU) are as reported by ACCIÓ, not read at StartupBlink. Barcelona and Bilbao do not appear in the GFCI 40 table.
- **Standing.** Madrid is held to 3 in Europe, as Milan is in the Italy section, because the GFCI 40 ranks it 43rd (13th in Western Europe) although its job counts are second in Europe; Barcelona is 4 nationally on the second-largest information and communication count and the best start-up ranking.


## P47 Portugal (data/atlas/pt.js)

Claims 8 → 32; hubs 2 → 2 (no new hubs). Brief: research/countries/pt-portugal.md.

### Ratings changed (old → new)

| Hub | Family | Old | New | Rests on |
|---|---|---|---|---|
| Lisbon | business | present | strong | claims: pt-edp, pt-galp-gen, pt-jm-trainee, pt-e-edp, pt-e-galp, pt-e-jm |
| Lisbon | finance | gap | dominant | claims: pt-lis-emp, pt-e-cgd, pt-e-bdp |
| Lisbon | management | gap | present | claims: pt-jm-trainee, pt-galp-gen |
| Lisbon | it | gap | dominant | claims: pt-lis-emp, pt-lis-gser |
| Lisbon | software | gap | present | claims: pt-e-outsystems |
| Lisbon | finance: banking | gap | present | claims: pt-e-cgd |
| Porto | business | gap | present | claims: pt-e-mota, pt-e-sonae, pt-sonae-contacto |
| Porto | finance: banking | gap | present | claims: pt-e-bpi, pt-e-bcp |

Rule applied: dominant needs a `data` claim; strong needs a statistic or two claims; present needs one named employer; otherwise gap.

### Standing (new)

- **Lisbon**: it 5/3/2 (pt-lis-emp, pt-lis-gser); finance 5/2/2 (pt-lis-emp, pt-lis-gfci); business 5/2/1 (pt-lis-emp, pt-e-edp, pt-e-galp, pt-e-jm)
- **Porto**: it 4/2/1 (pt-porto, pt-porto-gser); finance 4/2/1 (pt-porto, pt-e-bpi)

### Metrics (new)

| Hub | pop | gdp | wage | rent |
|---|---|---|---|---|
| Lisbon | 2899670 (2023, metro) | 87.37 EUR (2022, metro) | 2121 EUR (2024, city, mean) | - |
| Porto | 1774104 (2023, metro) | 39.18 EUR (2022, metro) | 1930 EUR (2024, city, mean) | - |

- pop sources: https://ec.europa.eu/eurostat/databrowser/view/met_pjanaggr3/default/table?lang=en | Eurostat (data)
- gdp sources: https://ec.europa.eu/eurostat/databrowser/view/met_10r_3gdp/default/table?lang=en | Eurostat (data)
- wage sources: https://www.ine.pt/ine/json_indicador/pindica.jsp?op=1&varcd=0012655&lang=EN | INE Portugal (data)
- rent: not given for any hub

### New and changed claims

| Claim | Tag | Source | What the page says | Status |
|---|---|---|---|---|
| pt-lis-emp | data | https://ec.europa.eu/eurostat/databrowser/view/met_10r_3emp/default/table?lang=en (Eurostat, metropolitan regions: employment by activity (met_10r_3emp), 2021) | met_10r_3emp 2021, employed persons, thousand: Lisboa (PT001MC) total 1,474.0, J 79.86, K 47.95; Portugal J 133.23, K 82.36. Ranks among the 152 metropolitan-region codes with a J/K figure (own count): J Lisboa 12th, K Lisboa 14th. Shares are arithmetic (79.86/133.23 = 59.9%; 47.95/82.36 = 58.2%). met_10r_3gdp 2022: Lisboa (PT001MC) 87,368.25 EUR million; Portugal 242,340.81 (87,368.25 / 242,340.81 = 36.05%). (2021:  | CONFIRMED (read 2026-10-03) |
| pt-lis-gfci | practitioner consensus | https://www.longfinance.net/media/documents/GFCI_40_Report_2026.09.16_v1.2.pdf (Z/Yen and China Development Institute, Global Financial Centres Index 40 (16 Sep 2026)) | Table 1: Lisbon 61 (698; GFCI 39 rank 75, change +14). Table 8 lists the Western European top 15 (London ... Rome); Lisbon is not among them. Category: "Local Diversified". | CONFIRMED (read 2026-10-03) |
| pt-lis-gser | practitioner consensus | https://startupgenome.com/ecosystems/lisbon (Startup Genome, Global Startup Ecosystem Report 2026, ecosystem page) | Lisbon page: Ecosystem Value $35 BN (global avg $25 BN, regional avg $14.3 BN); total early-stage funding $316 M (global avg $554 M); exit amount $2 BN. | CONFIRMED (read 2026-10-03) |
| pt-porto-gser | practitioner consensus | https://startupgenome.com/ecosystems/porto (Startup Genome, Global Startup Ecosystem Report 2026, ecosystem page) | Porto page header: "#51-60 Emerging Ecosystem ... Top 10 Europe Ecosystem in Funding Runway, Top 15 Europe Ecosystem in Affordable Talent, Top 20 Europe Ecosystem in AI-Native Cluster". Press release: "Valencia and Porto were standout European climbers, rising 22 and 16 places". | CONFIRMED (read 2026-10-03) |
| pt-unemp | data | https://ec.europa.eu/eurostat/databrowser/view/une_rt_m/default/table?lang=en (Eurostat, Unemployment by sex and age, monthly (une_rt_m), August 2026) | une_rt_m, s_adj SA, % of labour force, 2026-08: Portugal total 5.7, under 25 19.8; EU27 total 6.1, under 25 15.4. | CONFIRMED (read 2026-10-03) |
| pt-grad-emp | data | https://ec.europa.eu/eurostat/databrowser/view/edat_lfse_24/default/table?lang=en (Eurostat, Employment rates of young people not in education and training (edat_lfse_24), 2025) | edat_lfse_24 2025, ISCED 5-8, age 20-34, total sex, 3 years or less since graduation: PT 83.9; EU27 85.3 (all years since graduation: PT 90.3, EU 88.4). | CONFIRMED (read 2026-10-03) |
| pt-wage-lfs | data | https://www.ine.pt/ine/json_indicador/pindica.jsp?op=1&varcd=0012655&lang=EN (INE Portugal, Average monthly earnings by NUTS and occupation (indicator 0012655; MTSSS/GEP Personnel tables), 2024) | INE indicator 0012655 (updated 2026-03-27; Portuguese metadata: ganho = "montante ilíquido", i.e. gross, regular, in cash or kind; geography is the establishment's location; the English metadata mistranslates it as net), 2024, all occupations (dim_3 "T"): Portugal 1576.03; Lisboa (1A01106) 2120.94; Porto (11A1312) 1929.73; Área Metropolitana do Porto 1620.05; Grande Lisboa 1935.68. | CONFIRMED (read 2026-10-03) |
| pt-e-edp | data | https://api.gleif.org/api/v1/lei-records/529900CLC3WDMGI9VH80 (GLEIF, Global LEI Index record for EDP, S.A. (LEI 529900CLC3WDMGI9VH80)) | headquartersAddress: Avenida 24 de Julho, n.º 12, LISBOA, PT. | CONFIRMED (read 2026-10-03) |
| pt-e-galp | data | https://api.gleif.org/api/v1/lei-records/2138003319Y7NM75FG53 (GLEIF, Global LEI Index record for Galp Energia, SGPS, S.A. (LEI 2138003319Y7NM75FG53)) | headquartersAddress: Avenida da Índia, 8 Alcântara, Lisboa, PT. | CONFIRMED (read 2026-10-03) |
| pt-e-cgd | data | https://api.gleif.org/api/v1/lei-records/TO822O0VT80V06K0FH57 (GLEIF, Global LEI Index record for CAIXA GERAL DE DEPÓSITOS S.A. (LEI TO822O0VT80V06K0FH57)) | headquartersAddress: AVENIDA JOÃO XXI, Nº 63 AREEIRO, LISBON, PT. | CONFIRMED (read 2026-10-03) |
| pt-e-bdp | data | https://api.gleif.org/api/v1/lei-records/54930037NWG1CCVQHF93 (GLEIF, Global LEI Index record for BANCO DE PORTUGAL (LEI 54930037NWG1CCVQHF93)) | headquartersAddress: RUA DO COMÉRCIO, 148 SANTA MARIA MAIOR, LISBON, PT. | CONFIRMED (read 2026-10-03) |
| pt-e-nos | data | https://api.gleif.org/api/v1/lei-records/5493004DM8FGIY6QKF37 (GLEIF, Global LEI Index record for NOS, SGPS, S.A. (LEI 5493004DM8FGIY6QKF37)) | headquartersAddress: RUA ACTOR ANTONIO SILVA, NUMERO 9, CAMPO GRANDE LUMIAR, LISBON, PT. | CONFIRMED (read 2026-10-03) |
| pt-e-jm | data | https://api.gleif.org/api/v1/lei-records/259400A8SZP10GB5IB19 (GLEIF, Global LEI Index record for JERÓNIMO MARTINS SGPS SA (LEI 259400A8SZP10GB5IB19)) | headquartersAddress: LISBOA RUA ACTOR ANTÓNIO SILVA 7, LISBOA, PT. | CONFIRMED (read 2026-10-03) |
| pt-e-outsystems | data | https://api.gleif.org/api/v1/lei-records/254900240SHJ4587YW79 (GLEIF, Global LEI Index record for OUTSYSTEMS - SOFTWARE EM REDE S.A. (LEI 254900240SHJ4587YW79)) | headquartersAddress: Rua Central Park N6 2A, Lisboa, PT. | CONFIRMED (read 2026-10-03) |
| pt-e-ren | data | https://api.gleif.org/api/v1/lei-records/549300FR1FN48IGHR915 (GLEIF, Global LEI Index record for REN - REDES ENERGÉTICAS NACIONAIS, SGPS, S.A. (LEI 549300FR1FN48IGHR915)) | headquartersAddress: AVENIDA ESTADOS UNIDOS DA AMÉRICA, Nº 55 ALVALADE, LISBON, PT. | CONFIRMED (read 2026-10-03) |
| pt-e-bpi | data | https://api.gleif.org/api/v1/lei-records/3DM5DPGI3W6OU6GJ4N92 (GLEIF, Global LEI Index record for BANCO BPI S.A. (LEI 3DM5DPGI3W6OU6GJ4N92)) | headquartersAddress: Avenida da Boavista, 1117, Porto, PT. | CONFIRMED (read 2026-10-03) |
| pt-e-bcp | data | https://api.gleif.org/api/v1/lei-records/JU1U6S0DG9YLT7N8ZV32 (GLEIF, Global LEI Index record for BANCO COMERCIAL PORTUGUÊS S.A. (LEI JU1U6S0DG9YLT7N8ZV32)) | headquartersAddress: Praça D. João I, nº 28, Porto, PT. | CONFIRMED (read 2026-10-03) |
| pt-e-mota | data | https://api.gleif.org/api/v1/lei-records/549300L6RR1203WN9F57 (GLEIF, Global LEI Index record for MOTA - ENGIL, SGPS S.A. (LEI 549300L6RR1203WN9F57)) | headquartersAddress: RUA DO REGO LAMEIRO, N.º 38 CAMPANHÃ, PORTO, PT. | CONFIRMED (read 2026-10-03) |
| pt-e-sonae | data | https://api.gleif.org/api/v1/lei-records/549300847SOBT7HY7R50 (GLEIF, Global LEI Index record for SONAE - SGPS, S.A. (LEI 549300847SOBT7HY7R50)) | headquartersAddress: Lugar Do Espido Via Norte, Maia, PT. | CONFIRMED (read 2026-10-03) |
| pt-rent | data | https://www.ine.pt/ngt_server/attachfileu.jsp?look_parentBoui=800184186&att_display=n&att_download=y (INE Portugal, Estatísticas de rendas da habitação ao nível local, 1.º trimestre de 2026 (26 June 2026)) | Section 4 (12 months to March 2026, 149,690 contracts): "a renda mediana em Portugal foi 9,50 €/m2"; "Lisboa apresentou o valor mais elevado (17,22 €/m2)"; "o maior no Porto (14,29 €/m2)"; "Lisboa registou o maior número de contratos ... 17 144 ... o Porto (7 574)". Summary: Lisboa 17,42 €/m2 in Q1 2026 (the 24 municipalities above 100,000 inhabitants). The Porto Q1 value is only in a chart. | CONFIRMED (read 2026-10-03) |
| pt-galp-gen | employer-stated | https://galp.com/corp/en/people/young-talent/generation-galp (Galp, Generation Galp trainee programme page) | "Generation Galp has been around since 1998 ... more than 500 employees who have joined Galp through the various editions"; "1-year traineeship contract"; "Screening, Online assessment, Group dynamics and pitch, Business case, Final interview"; "You have completed or are completing your master's degree"; "(Applications now closed)". Young-talent page: professional internships of 6 to 12 months for recent graduates, a | CONFIRMED (read 2026-10-03) |
| pt-jm-trainee | employer-stated | https://www.jeronimomartins.com/en/press_releases/pr_20250916_1_en/ (Jerónimo Martins, press release “Jerónimo Martins launches new edition of Trainee Programme in Portugal” (16 September 2025)) | "students with a master's degree already or being completed, preferably in the areas of Management, Hotel Management, Economics, Finance, Engineering or Technology, and fluent in Portuguese and English"; "will start in early January 2026"; "In 2025, the Trainee Programme in Portugal received more than 1,400 applications and had 11 participants." | CONFIRMED (read 2026-10-03) |
| pt-sonae-contacto | employer-stated | https://www.sonae.pt/fotos/press_releases/20250310_pr_programa_contacto_2026_vf_98343912669aef6218e8c7.pdf (Sonae, press release “Programa Contacto da Sonae celebra 40 anos e vai recrutar mais de 80 jovens talentos” (Maia, 10 March 2026)) | "Maia, 10 de março de 2026 ... vai recrutar mais de 80 jovens talentos"; "Criado em 1986"; "finalistas ou recém-graduados de licenciatura ou mestrado ... Economia, Gestão, Tecnologias de Informação, ... Análise de Dados, Inteligência Artificial"; "candidatar-se até ao dia 6 de abril"; "Assessment Days presenciais ... no Porto e em Lisboa durante o mês de abril"; "arranque do programa em setembro de 2026"; "remuneraçã | CONFIRMED (read 2026-10-03) |
| pt-catolica | data | research/places/iberia-and-nordics.md (Financial Times Masters in Management ranking 2026, via places/iberia-and-nordics.md §7) | Library statement, cited with its own source: FT 2026 as tabulated in iberia-and-nordics.md §7 (Católica Lisbon rank 25, $99,125, 97% employed, response 88%; Católica Porto rank 66, $55,831, 100% employed, response 51%). Not re-read at the FT (paywalled). | LIBRARY (FT table not re-read) |

### Notes on the Portugal section

- **Sector counts.** Eurostat met_10r_3emp (2021, thousand persons, API read 3 October 2026): Lisboa (PT001MC) total 1,474.0, J 79.86, K 47.95; Porto (PT002M) total 829.75, J 25.76, K 11.69; Portugal J 133.23, K 82.36, total 4,959.84, C 753.25. Ranks are my own count of the 152 metropolitan-region codes with a figure (Lisboa 12th J, 14th K; Porto 38th J, 51st K). The previous rating of Porto as strong for IT and finance stands on these counts.
- **GDP year changed.** The first draft of the metrics used 2021 GDP; Eurostat met_10r_3gdp has 2022 (Lisboa EUR 87,368.25 million, Porto 39,178.95, Portugal 242,340.81), so the metrics and the Lisbon claim use 2022 (36% of national GDP by arithmetic). The existing claim `pt-porto` already used 2022.
- **Population.** met_pjanaggr3, 1 January 2023: Lisboa 2,899,670; Porto 1,774,104 (2023 is the latest year in the file).
- **Pay.** INE indicator 0012655, 2024, all occupations: Portugal 1,576.03; Lisboa (municipality 1A01106) 2,120.94; Porto (11A1312) 1,929.73. The Portuguese metadata defines "ganho" as "montante ilíquido" (gross) and the geography as the establishment's location; the English metadata page mistranslates it as "net". The first draft called the figure "full-time employees": the metadata does not say so, so the claim now says "employees" and "establishments in the municipality". Metric area is `city` for both hubs (municipality).
- **Rent.** No rent metric: INE's official rent is per square metre of new leases (12 months to March 2026: Portugal 9.50, Lisboa 17.22, Porto 14.29 EUR/m2); Numbeo returned an access error. The library's earlier press-reported Porto Q1 2026 value (14.60) is not in the INE text; the INE release text gives Lisboa 17.42 for Q1 only.
- **Ratings changed.** Lisbon: it gap -> dominant, finance gap -> dominant (Eurostat counts: 60% and 58% of national jobs), business present -> strong (three headquarters, EDP, Galp and Jerónimo Martins, plus their graduate programmes), management gap -> present (Jerónimo Martins and Galp trainee programmes), software gap -> present (OutSystems headquarters), banking gap -> present (Caixa Geral de Depósitos headquarters). Porto (carried from the earlier pass, re-checked): it and finance strong; business gap -> present (Mota-Engil and Sonae headquarters; Contacto assessment in Porto); banking gap -> present (Banco BPI and Millennium bcp, whose address is the registered headquarters). Not upgraded to strong although two headquarters were claimed, because the BCP address may be only the registered one.
- **Standing.** Lisbon IT 5/3/2 (60% of national jobs; 12th of 152 European metros; GSER value above global average but funding below), finance 5/2/2 (58% of national jobs; Eurostat 14th of 152, but the GFCI 40 ranks Lisbon 61st in the world and outside the Western European top 15, so the lower reading is used), business 5/2/1 (judgement from named headquarters and programmes). Porto IT and finance 4/2/1 (second in Portugal; 38th and 51st of 152). No 4 or 5 beyond the country.
- **GLEIF.** Every headquarters address was re-read through the GLEIF API on 3 October 2026 and matches the quoted "headquartersAddress". The descriptions "state-owned" (Caixa Geral de Depósitos) and "Taguspark campus" (Millennium bcp) in the first draft were general knowledge, not read, and were removed.
- **Graduate programmes.** Galp (Generation Galp page and young-talent page), Jerónimo Martins (press release of 16 September 2025, trainee programme page) and Sonae (press release PDF, 10 March 2026) were read in full on 3 October 2026. Sonae's file name carries "20250310" but the text is dated "Maia, 10 de março de 2026". The programme page for Sonae (sonae.pt/en/people/young-talent-programmes/) returned no text to the fetcher.
- **Católica.** `pt-catolica` relays the FT 2026 figures tabulated in places/iberia-and-nordics.md §7; the FT table itself was not re-read.
- **QS.** Not used: globalscholarships.com says U.Porto is 237th in QS 2027 and study.eu says the University of Lisbon is 237th and Porto 255th; the secondary sources disagree and the QS site was not read.
- **Removed claims.** None. Existing claim ids kept. The summary was rewritten (Nova SBE sentence moved out; it remains in the `pt-nova` claim).


## P58 Malta (data/atlas/mt.js)

Claims 4 → 24; hubs 1 → 1 (no new hubs). Brief: research/countries/mt-malta.md.

### Ratings changed (old → new)

| Hub | Family | Old | New | Rests on |
|---|---|---|---|---|
| Valletta and the harbour towns | finance | gap | dominant | claims: mt-mfsa, mt-emp-sector, mt-gfci |
| Valletta and the harbour towns | accounting | gap | present | claims: mt-kpmg, mt-deloitte |
| Valletta and the harbour towns | it | gap | strong | claims: mt-emp-sector |
| Valletta and the harbour towns | finance: banking | gap | strong | claims: mt-e-bov, mt-e-hsbc, mt-e-aps, mt-e-lombard, mt-e-cbm |

Rule applied: dominant needs a `data` claim; strong needs a statistic or two claims; present needs one named employer; otherwise gap.

### Standing (new)

- **Valletta and the harbour towns**: finance 5/2/2 (mt-mfsa, mt-emp-sector, mt-gfci); it 5/2/1 (mt-emp-sector)

### Metrics (new)

| Hub | pop | gdp | wage | rent |
|---|---|---|---|---|
| Valletta and the harbour towns | 532997 (2025, region) | 22.1 EUR (2024, region) | 2080 EUR (2022, region, mean) | - |

- pop sources: https://ec.europa.eu/eurostat/databrowser/view/demo_r_pjangrp3/default/table?lang=en | Eurostat (data)
- gdp sources: https://ec.europa.eu/eurostat/databrowser/view/nama_10r_3gdp/default/table?lang=en | Eurostat (data)
- wage sources: https://ec.europa.eu/eurostat/databrowser/view/earn_ses22_19/default/table?lang=en | Eurostat (data)
- rent: not given for any hub

### New and changed claims

| Claim | Tag | Source | What the page says | Status |
|---|---|---|---|---|
| mt-mga25 | data | https://www.mga.org.mt/app/uploads/MGA_Annual_Report_2025.pdf (Malta Gaming Authority, Annual Report 2025 (published 7 July 2026), overview of the Maltese gaming industry) | Table 2: licences 326/323/311, companies 316/315/302, employment 13,404/14,357/15,039 (2023/2024/2025; online type A 10,115, type B 3,974, land-based 950). Text: "total employment directly or indirectly tied to the gaming industry in Malta in 2025 is estimated to stand at approximately 19,150 employees, representing around 6.5% of the national workforce"; "an estimated €1,422.0 million in Gross Value Added ... approx | CONFIRMED (read 2026-10-03) |
| mt-nuts | data | https://ec.europa.eu/eurostat/databrowser/view/demo_r_pjangrp3/default/table?lang=en (Eurostat, population on 1 January by NUTS 3 region (demo_r_pjangrp3) and GDP by NUTS 3 region (nama_10r_3gdp)) | demo_r_pjangrp3 2025, total sex and age, persons: MT 574,250; MT001 532,997; MT002 (Gozo and Comino) 41,253. nama_10r_3gdp 2024, EUR million: MT 23,125.03; MT001 22,102.25; MT002 992.82. Shares are arithmetic (92.8%, 95.6%). | CONFIRMED (read 2026-10-03) |
| mt-emp-sector | data | https://ec.europa.eu/eurostat/databrowser/view/nama_10_a10_e/default/table?lang=en (Eurostat, employment by 10 branches (nama_10_a10_e), domestic concept, 2025) | nama_10_a10_e 2025, thousand persons, EMP_DC: Malta total 338.19, J 16.25, K 17.10; EU27 total 220,498.57, J 7,624.11, K 5,043.63. Shares are arithmetic (4.80% and 5.06% against 3.46% and 2.29%). Gambling is not in J or K. | CONFIRMED (read 2026-10-03) |
| mt-unemp | data | https://ec.europa.eu/eurostat/databrowser/view/une_rt_m/default/table?lang=en (Eurostat, Unemployment by sex and age, monthly (une_rt_m), August 2026) | une_rt_m, s_adj SA, % of labour force, sex total, 2026-08: Malta total 3.4, under 25 9.7; EU27 total 6.1, under 25 15.4. | CONFIRMED (read 2026-10-03) |
| mt-grad-emp | data | https://ec.europa.eu/eurostat/databrowser/view/edat_lfse_24/default/table?lang=en (Eurostat, Employment rates of young people not in education and training (edat_lfse_24), 2025) | edat_lfse_24 2025, ISCED 5-8, age 20-34, total sex, 3 years or less since graduation: MT 92.8; EU27 85.3 (all years since graduation: MT 92.3, EU 88.4). | CONFIRMED (read 2026-10-03) |
| mt-ses | data | https://ec.europa.eu/eurostat/databrowser/view/earn_ses22_19/default/table?lang=en (Eurostat, Structure of earnings survey 2022: earnings by NACE and age (earn_ses22_19, earn_ses22_20, earn_ses22_26)) | earn_ses22_19 2022, EUR, gross earnings, all sexes, firms GE10, total collective pay agreement: B-S 2,080; J 2,749; K 2,781; M 2,566. earn_ses22_20: age Y_LT30 1,832 (30-49 2,173; 50+ 2,132). earn_ses22_26 (annual, same filters): B-S 30,960; J 39,711; K 39,899. The figure for tertiary-educated staff is not published for Malta. Data from 2022 (before 2023: possibly stale). | CONFIRMED (read 2026-10-03) |
| mt-gfci | practitioner consensus | https://www.longfinance.net/media/documents/GFCI_40_Report_2026.09.16_v1.2.pdf (Z/Yen and China Development Institute, Global Financial Centres Index 40 (16 Sep 2026)) | Table 1: Malta 63 (696; GFCI 39 rank 58, change ▼5). Table 7 profiles: Malta* in the "International Specialists" column. Table 8 Western European top 15 (London ... Rome) does not include Malta. Table 16 (fintech): Malta 89 (613; was 101, ▲12). | CONFIRMED (read 2026-10-03) |
| mt-mfsa | data | https://www.mfsa.mt/wp-content/uploads/2026/06/MFSA-Annual-Report-2025.pdf (Malta Financial Services Authority, Annual Report 2025 (June 2026)) | "financial activities generated around €1.3 billion in gross value added (GVA), representing 7.3% of Malta’s total GVA, while employing approximately 6.2% of the national workforce. Pay levels in the sector remained circa 36% higher than the national average"; "financial and insurance activities make up about 4% of total economic output" in the euro area; "the Authority supervised 2,413 authorised entities, supported | CONFIRMED (read 2026-10-03) |
| mt-tax | practitioner consensus | https://taxsummaries.pwc.com/malta/individual/taxes-on-personal-income (PwC Worldwide Tax Summaries, Malta individual taxes on personal income and other taxes (last reviewed 30 September 2026)) | Taxes on personal income: "Basis year 2026 ... Single rates: 0-12,000 0%; 12,001-16,000 15% (deduct 1,800); 16,001-60,000 25% (deduct 3,400); 60,001 and above 35%". Other taxes: "both the employer and the employee are each required to pay social security contributions at the rate of 10% of the individual employee’s salary and at fixed rates of EUR 55.93 per week for annual salaries exceeding EUR 29,084" (born on or a | CONFIRMED (read 2026-10-03) |
| mt-deloitte | employer-stated | https://www.deloitte.com/mt/en/careers/explore-your-fit/students/mt-programme-international-graduate.html (Deloitte Malta, International Graduate Programme page) | "Have you recently graduated or are you about to graduate in accounting? Our International Graduate Programme provides you with an opportunity to work with Deloitte in Malta in our Audit & Assurance business"; "An attractive salary package and relocation allowance to get you started"; successful candidates "are offered a permanent job" (permanent employment with growth opportunities). | CONFIRMED (read 2026-10-03) |
| mt-kpmg | employer-stated | https://kpmg.com/mt/en/careers/our-premises.html (KPMG Malta, careers: our premises) | "Today, we are proud to house over 600 professionals in our offices in Pietà, including students enrolled in our Graduate Recruitment Programme." | CONFIRMED (read 2026-10-03) |
| mt-kindred | employer-stated | https://www.kindredgroup.com/en/careers/ (FDJ UNITED corporate site (served at kindredgroup.com), news item of 18 September 2026) | "Two other sites, in Stockholm (Kindred People AB) and Malta (Kindred Group), have also been certified. These three sites, which support the Group’s online betting and gaming operations, now have an internationally recognised Environmental Management System (EMS)." (news dated 18 September 2026 on the FDJ UNITED site, reached from kindredgroup.com). | CONFIRMED (read 2026-10-03) |
| mt-lang | data | https://european-union.europa.eu/principles-countries-history/eu-countries/malta_en (European Union, Malta country profile) | Overview: "Official EU language(s): Maltese, English"; population 574,250 (Eurostat, 2025); 316 km2. | CONFIRMED (read 2026-10-03) |
| mt-e-bov | data | https://api.gleif.org/api/v1/lei-records/529900RWC8ZYB066JF16 (GLEIF, Global LEI Index record for BANK OF VALLETTA P.L.C. (LEI 529900RWC8ZYB066JF16)) | headquartersAddress: Cannon Road, Zone 4, Central Business District, Santa Venera, MT. | CONFIRMED (read 2026-10-03) |
| mt-e-hsbc | data | https://api.gleif.org/api/v1/lei-records/549300X34UUBDEUL1Z91 (GLEIF, Global LEI Index record for HSBC BANK MALTA P.L.C. (LEI 549300X34UUBDEUL1Z91)) | headquartersAddress: 116, ARCHBISHOP STREET, VALLETTA, MT. | CONFIRMED (read 2026-10-03) |
| mt-e-aps | data | https://api.gleif.org/api/v1/lei-records/213800A1O379I6DMCU10 (GLEIF, Global LEI Index record for APS BANK P.L.C. (LEI 213800A1O379I6DMCU10)) | headquartersAddress: APS CENTRE, TOWER STREET, BIRKIRKARA, MT. | CONFIRMED (read 2026-10-03) |
| mt-e-lombard | data | https://api.gleif.org/api/v1/lei-records/529900UIRB65OY6U4B21 (GLEIF, Global LEI Index record for LOMBARD BANK MALTA P.L.C. (LEI 529900UIRB65OY6U4B21)) | headquartersAddress: Republic St 67, Valletta, MT. | CONFIRMED (read 2026-10-03) |
| mt-e-cbm | data | https://api.gleif.org/api/v1/lei-records/5493002F1U5CO1UMKD70 (GLEIF, Global LEI Index record for Central Bank of Malta (LEI 5493002F1U5CO1UMKD70)) | headquartersAddress: Castille Place, Valletta, MT. | CONFIRMED (read 2026-10-03) |
| mt-e-mse | data | https://api.gleif.org/api/v1/lei-records/5299009CKES2S5E3YG94 (GLEIF, Global LEI Index record for Malta Stock Exchange plc (LEI 5299009CKES2S5E3YG94)) | headquartersAddress: Garrison Chapel, Castille Place, Valletta, MT. | CONFIRMED (read 2026-10-03) |
| mt-e-kindred | data | https://api.gleif.org/api/v1/lei-records/213800D1MJVOT6SNBX11 (GLEIF, Global LEI Index record for KINDRED GROUP PLC (LEI 213800D1MJVOT6SNBX11)) | headquartersAddress: THE CENTRE, TIGNE POINT, SLIEMA, MT. | CONFIRMED (read 2026-10-03) |

### Notes on the Malta section

- **Gaming.** The 2025 annual report (published 7 July 2026; PDF read in full text) supersedes the interim report for the headline: 302 companies, 311 licences, 15,039 FTEs (2024: 14,357). The old claim `mt-mga` (June 2025: 304 companies, 14,797 FTEs) is still true for its date and is kept (cited in the hub's reasons), not contradicted. Type B FTEs (3,974) work in Malta but not on MGA-licensed activities. The MGA's GVA figure (EUR 1,422.0 million, 6.3% of output) is NSO data it quotes (NR 033/2026); the NSO site itself returned a Cloudflare block.
- **Eurostat.** nama_10_a10_e (EMP_DC, thousand persons, 2025): Malta total 338.19, J 16.25, K 17.10; EU27 total 220,498.57, J 7,624.11, K 5,043.63. demo_r_pjangrp3 (2025) and nama_10r_3gdp (2024): MT001 532,997 and EUR 22,102.25 million; MT 574,250 and 23,125.03. SES 2022: earn_ses22_19 (monthly), earn_ses22_20 (age), earn_ses22_26 (annual), firms with 10+ employees, total collective pay agreement type; tertiary-education earnings are not published for Malta (earn_ses22_23 has only ED3_4).
- **Metrics.** pop and gdp are for the island of Malta (NUTS 3 MT001), area `region`; wage is the national figure, area `region`, because Eurostat has no regional split. 2022 is older than 2023: flagged in the gaps. No rent: Numbeo returned "Access Restricted"; the Housing Authority's rent insight is an interactive app; blogs (investropa.com, freemalta.com) quote rents but have no traceable source, so none is used.
- **Ratings changed.** All gap -> rated: finance dominant (MFSA: 7.3% of value added against about 4% in the euro area, 6.2% of the workforce, 2,413 supervised entities; Eurostat: 5.1% of jobs against 2.3%; GFCI), it strong (statistic: Eurostat J share 4.8% against 3.5%), accounting present (KPMG Malta's 600-plus professionals in Pietà and Deloitte Malta's graduate programme; not strong because neither gives intake size), banking strong (statistic-free but five named headquarters: Bank of Valletta, HSBC Bank Malta, APS Bank, Lombard Bank Malta, Central Bank of Malta). `roles` is now finance and it (both strong or dominant); accounting is not listed because it is only present.
- **Standing.** Finance 5/2/2 and IT 5/2/1. National 5 because the country has one hub and the claims are data; regional 2 because the GFCI 40 ranks Malta 63rd and outside the Western European top 15 and the absolute job counts (17,100 and 16,250) are small beside any large European centre; world 2 and 1 accordingly. No 4 or 5 beyond Malta.
- **GLEIF.** Seven headquarters read through the GLEIF API on 3 October 2026 (headquartersAddress). Banks are named with the entity's own legal name. Not claimed: Tipico, Evolution Malta Holding and Betsson entities (addresses found, but the sector is not stated on the record), GO plc, Melita and Mapfre Malta (address or sector not tied to the hub).
- **PwC.** The tax and social-security figures are PwC Worldwide Tax Summaries (reviewed 30 September 2026), tagged practitioner consensus; the CFR (Commissioner for Revenue) site blocked automated access. "Fixed rates of EUR 55.93 per week for annual salaries exceeding EUR 29,084" is quoted as the page words it.
- **Language claim.** `mt-lang` says only what the EU profile says (official EU languages). It is not a statement about the language of work.
- **Not used.** Evolution headcount by country (a secondary workforce-data site), QS rankings, Startup Genome (no Malta page) and wage figures from trading-data sites.
- **Removed claims.** None.


## P56 Greece (data/atlas/gr.js)

Claims 7 → 33; hubs 2 → 2 (no new hubs). Brief: research/countries/gr-greece.md.

### Ratings changed (old → new)

| Hub | Family | Old | New | Rests on |
|---|---|---|---|---|
| Athens and Piraeus | logistics | present | strong | claims: gr-ugs, gr-ugs-econ, gr-e-ppa |
| Athens and Piraeus | business | gap | strong | claims: gr-helleniq-efl, gr-e-helleniq, gr-e-ote, gr-e-motoroil |
| Athens and Piraeus | finance | gap | dominant | claims: gr-athens-emp, gr-e-nbg, gr-e-piraeus, gr-e-alpha |
| Athens and Piraeus | accounting | gap | present | claims: gr-deloitte |
| Athens and Piraeus | it | gap | dominant | claims: gr-athens-emp, gr-gser |
| Athens and Piraeus | finance: banking | gap | strong | claims: gr-e-nbg, gr-e-piraeus, gr-e-alpha |
| Thessaloniki | logistics | gap | present | claims: gr-e-thpa |
| Thessaloniki | software | gap | present | claims: gr-pfizer-cdi |

Rule applied: dominant needs a `data` claim; strong needs a statistic or two claims; present needs one named employer; otherwise gap.

### Standing (new)

- **Athens and Piraeus**: it 5/3/1 (gr-athens-emp, gr-gser); finance 5/2/1 (gr-athens-emp, gr-gfci); business 5/2/1 (gr-athens-emp, gr-e-helleniq, gr-e-ote, gr-e-motoroil); logistics 5/4/3 (gr-ugs, gr-ugs-econ)
- **Thessaloniki**: it 4/2/1 (gr-thessaloniki, gr-thess-rank); finance 4/2/1 (gr-thessaloniki, gr-thess-rank)

### Metrics (new)

| Hub | pop | gdp | wage | rent |
|---|---|---|---|---|
| Athens and Piraeus | 3626216 (2023, metro) | 82.62 EUR (2021, metro) | - | - |
| Thessaloniki | 1089819 (2023, metro) | 16 EUR (2021, metro) | - | - |

- pop sources: https://ec.europa.eu/eurostat/databrowser/view/met_pjanaggr3/default/table?lang=en | Eurostat (data)
- gdp sources: https://ec.europa.eu/eurostat/databrowser/view/met_10r_3gdp/default/table?lang=en | Eurostat (data)
- wage: not given for any hub
- rent: not given for any hub

### New and changed claims

| Claim | Tag | Source | What the page says | Status |
|---|---|---|---|---|
| gr-athens-emp | data | https://ec.europa.eu/eurostat/databrowser/view/met_10r_3emp/default/table?lang=en (Eurostat, metropolitan regions: employment by activity (met_10r_3emp), 2021) | met_10r_3emp 2021, employed persons, thousand: Athina (EL001MC) total 1,733.94, J 76.22, K 46.23; Greece J 108.58, K 78.46. Ranks among the 152 metropolitan-region codes with a J/K figure (own count): J 13th, K 16th. Shares are arithmetic (70.2%, 58.9%). met_10r_3gdp 2021: Athina 82,615.47 EUR million; Greece 181,500.37 (45.5%). | CONFIRMED (read 2026-10-03) |
| gr-thess-rank | data | https://ec.europa.eu/eurostat/databrowser/view/met_10r_3emp/default/table?lang=en (Eurostat, metropolitan regions: employment by activity (met_10r_3emp), 2021) | met_10r_3emp 2021 (thousand): Thessaloniki (EL002M) J 10.16, K 7.40; Greece J 108.58, K 78.46; Athina J 76.22 (7.5 times Thessaloniki). Ranks are my count of the 152 codes (J 68th, K 74th). | CONFIRMED (read 2026-10-03) |
| gr-metro | data | https://ec.europa.eu/eurostat/databrowser/view/met_pjanaggr3/default/table?lang=en (Eurostat, metropolitan regions: population on 1 January (met_pjanaggr3) and GDP (met_10r_3gdp)) | met_pjanaggr3 2023: EL001MC 3,626,216; EL002M 1,089,819; EL 10,413,982 (34.8%, 10.5%). met_10r_3gdp 2021 (EUR million): EL001MC 82,615.47; EL002M 16,002.59; no later year for these regions (Greece itself has 2022: 206,620.39). | CONFIRMED (read 2026-10-03) |
| gr-emp-sector | data | https://ec.europa.eu/eurostat/databrowser/view/nama_10_a10_e/default/table?lang=en (Eurostat, employment by 10 branches (nama_10_a10_e), domestic concept, 2025) | nama_10_a10_e 2025, thousand persons, EMP_DC: Greece total 5,226.00, J 131.07, K 91.01; EU27 total 220,498.57, J 7,624.11, K 5,043.63. Shares are arithmetic (2.51% and 1.74% against 3.46% and 2.29%). | CONFIRMED (read 2026-10-03) |
| gr-unemp | data | https://ec.europa.eu/eurostat/databrowser/view/une_rt_m/default/table?lang=en (Eurostat, Unemployment by sex and age, monthly (une_rt_m), August 2026) | une_rt_m, s_adj SA, % of labour force, sex total, 2026-08: Greece total 7.4, under 25 15.6; EU27 total 6.1, under 25 15.4. | CONFIRMED (read 2026-10-03) |
| gr-grad-emp | data | https://ec.europa.eu/eurostat/databrowser/view/edat_lfse_24/default/table?lang=en (Eurostat, Employment rates of young people not in education and training (edat_lfse_24), 2025) | edat_lfse_24 2025, ISCED 5-8, age 20-34, total sex, 3 years or less since graduation (Y_LE3): EL 64.0, TR 64.4, MK 65.4, BA 68.6, RS 75.3, IT 75.8; EU27 85.3. All durations: EL 80.3, EU27 88.4. (1 to 3 years since graduation: EL 66.9, EU27 86.9, as in gr-grads.) | CONFIRMED (read 2026-10-03) |
| gr-ses | data | https://ec.europa.eu/eurostat/databrowser/view/earn_ses22_19/default/table?lang=en (Eurostat, Structure of earnings survey 2022: earnings by NACE (earn_ses22_19, earn_ses22_26)) | earn_ses22_19 2022, EUR, gross earnings, all sexes, firms GE10, total collective agreement: Greece J 2,011, K 2,719, M 1,824; EU27 J 4,026, K 4,234, M 3,876. earn_ses22_26 (annual): Greece J 27,043, K 37,468; EU27 J 54,364, K 60,207. The all-sector total is not published for Greece in these tables. Data from 2022 (before 2023: possibly stale); all employees, not graduates. | CONFIRMED (read 2026-10-03) |
| gr-gfci | practitioner consensus | https://www.longfinance.net/media/documents/GFCI_40_Report_2026.09.16_v1.2.pdf (Z/Yen and China Development Institute, Global Financial Centres Index 40 (16 Sep 2026)) | Table 1: Athens 114 (599; GFCI 39 rank 109, change ▼5). Table 16 (fintech): Athens 113 (581). Table 11 lists Athens among Eastern European and Central Asian centres (rank 114). | CONFIRMED (read 2026-10-03) |
| gr-gser | practitioner consensus | https://startupgenome.com/ecosystems/athens (Startup Genome, Global Startup Ecosystem Report 2026, Athens ecosystem page) | Athens page: Ecosystem Value $4 BN (global avg $25 BN, regional avg $14.3 BN); total early-stage funding $124 M (global avg $554 M, regional avg $531 M); exit amount $3 BN (global avg $7.6 BN). No Thessaloniki ecosystem page exists. | CONFIRMED (read 2026-10-03) |
| gr-ugs-econ | employer-stated | https://ugs.gr/en/greek-shipping-and-economy/greek-shipping-and-economy-2025/shipping-in-greece/ (Union of Greek Shipowners, Greek shipping and the economy 2025: Shipping in Greece) | "a total economic impact that ranges between 7%-8% of the country’s Gross Domestic Product (GDP) each year"; "around 10% of the total private payroll in Greece is related to shipping and it provides around 160,000 jobs (directly and indirectly)"; "the average wage in shipping companies is 3 times higher than the private sector wage average in the country" (cites a McKinsey study, July 2024; an industry body’s own est | CONFIRMED (read 2026-10-03) |
| gr-helleniq-efl | employer-stated | https://www.helleniqenergy.gr/en/career/empowering-future-leaders (HELLENiQ ENERGY, Empowering Future Leaders Graduate Employment Program) | "Empowering Future Leaders is a two-year employment program for young graduates"; four journeys: Technical (Engineering), Commercial, Digital Transformation, Corporate ("Human Resources, Finance, Procurement, and Corporate Affairs"); eligibility: "A bachelor’s degree ... in a field related to engineering or economic sciences ... Up to 2 years of work experience ... Excellent knowledge of Greek and English at C2 level | CONFIRMED (read 2026-10-03) |
| gr-metlen | employer-stated | https://www.metlengroup.com/our-people/engineers-in-action/requirements-selection-process (METLEN Energy & Metals, Engineers in Action: requirements and press release of 15 September 2025) | Requirements page (Greece): "Willingness to relocate to areas in Greece where METLEN operates: Athens, Thessaloniki, Viotia, Corinth and Volos"; "Excellent command of Greek and English". Press release 15 September 2025: "one-year, fully paid internship"; "Applications: September 15 – October 20, 2025"; "recent engineering graduates with up to 2 years of work experience"; "more than 260 young engineers have taken part | CONFIRMED (read 2026-10-03) |
| gr-pfizer-cdi | employer-stated | https://centerfordigitalinnovation.pfizer.com/ (Pfizer, Center for Digital Innovation (CDI), Thessaloniki, home and press pages) | Home page: "~500 Employees >35% are women 200+ global digital projects 18000h+ of learning and development 500+ positions since 2020". Press item of 1 June 2023: "recruitment of 15 young professionals, mainly software engineers, who stood out during the 8th Bootcamp in Software & Cloud Engineering". | CONFIRMED (read 2026-10-03) |
| gr-deloitte | employer-stated | https://www.deloitte.com/gr/en/careers.html (Deloitte Greece, careers page (legal notice)) | Legal notice: "Deloitte Business Solutions Societe Anonyme of Business Consultants ... registered office at Marousi Attica"; "Deloitte Certified Public Accountants Societe Anonyme ... registered office at Marousi, Attica"; "Deloitte Alexander Competence Center Single Member Societe Anonyme of Business Consultants ... registered office at Thessaloniki, PAEGA Building, Land Port Zone of the Port of Thessaloniki". The p | CONFIRMED (read 2026-10-03) |
| gr-grad-labour-note | data | https://ec.europa.eu/eurostat/databrowser/view/edat_lfse_24/default/table?lang=en (Eurostat, edat_lfse_24 (see gr-grad-emp)) | Derived from une_rt_m (2026-08: EL 15.6, EU27 15.4) and edat_lfse_24 (2025). | CONFIRMED (read 2026-10-03) |
| gr-e-nbg | data | https://api.gleif.org/api/v1/lei-records/5UMCZOEYKCVFAW8ZLO05 (GLEIF, Global LEI Index record for ΕΘΝΙΚΗ ΤΡΑΠΕΖΑ ΤΗΣ ΕΛΛΑΔΟΣ Α.Ε. (National Bank of Greece) (LEI 5UMCZOEYKCVFAW8ZLO05)) | headquartersAddress: 86 EOLOU STREET, ATHENS, GR (legal name ΕΘΝΙΚΗ ΤΡΑΠΕΖΑ ΤΗΣ ΕΛΛΑΔΟΣ Α.Ε.). | CONFIRMED (read 2026-10-03) |
| gr-e-piraeus | data | https://api.gleif.org/api/v1/lei-records/213800OYHR1MPQ5VJL60 (GLEIF, Global LEI Index record for ΤΡΑΠΕΖΑ ΠΕΙΡΑΙΩΣ ΑΝΩΝΥΜΟΣ ΕΤΑΙΡΕΙΑ (Piraeus Bank) (LEI 213800OYHR1MPQ5VJL60)) | headquartersAddress: AMERIKIS 4, ATHENS, GR. | CONFIRMED (read 2026-10-03) |
| gr-e-alpha | data | https://api.gleif.org/api/v1/lei-records/213800DBQIB6VBNU5C64 (GLEIF, Global LEI Index record for ΑΛΦΑ ΤΡΑΠΕΖΑ Α.Ε. (Alpha Bank) (LEI 213800DBQIB6VBNU5C64)) | headquartersAddress: 40, STADIOU STREET, ATHENS, GR. | CONFIRMED (read 2026-10-03) |
| gr-e-ote | data | https://api.gleif.org/api/v1/lei-records/ELPUFM0XZRZO4LFXW404 (GLEIF, Global LEI Index record for ΟΡΓΑΝΙΣΜΟΣ ΤΗΛΕΠΙΚΟΙΝΩΝΙΩΝ ΤΗΣ ΕΛΛΑΔΟΣ ΑΝΩΝΥΜΗ ΕΤΑΙΡΕΙΑ (OTE) (LEI ELPUFM0XZRZO4LFXW404)) | headquartersAddress: 99 KIFISSIAS AVENUE, MAROUSI, GR (legal name ΟΡΓΑΝΙΣΜΟΣ ΤΗΛΕΠΙΚΟΙΝΩΝΙΩΝ ΤΗΣ ΕΛΛΑΔΟΣ = Hellenic Telecommunications Organization). | CONFIRMED (read 2026-10-03) |
| gr-e-helleniq | data | https://api.gleif.org/api/v1/lei-records/213800YUBJMZYR1SNG35 (GLEIF, Global LEI Index record for HELLENIQ ENERGY ΑΝΩΝΥΜΗ ΕΤΑΙΡΕΙΑ ΣΥΜΜΕΤΟΧΩΝ (LEI 213800YUBJMZYR1SNG35)) | headquartersAddress: CHEIMARRAS 8A, MAROUSI, GR. | CONFIRMED (read 2026-10-03) |
| gr-e-motoroil | data | https://api.gleif.org/api/v1/lei-records/213800U3Y9UL7Y4QVM11 (GLEIF, Global LEI Index record for ΜΟΤΟΡ ΟΙΛ (ΕΛΛΑΣ) ΔΙΥΛΙΣΤΗΡΙΑ ΚΟΡΙΝΘΟΥ Α.Ε. (Motor Oil Hellas Corinth Refineries) (LEI 213800U3Y9UL7Y4QVM11)) | headquartersAddress: 12A IRODOU ATTIKOU STREET, MAROUSI, GR. | CONFIRMED (read 2026-10-03) |
| gr-e-metlen | data | https://api.gleif.org/api/v1/lei-records/213800KT8MEUJEJ2KW41 (GLEIF, Global LEI Index record for METLEN ENERGY & METALS ΜΟΝΟΠΡΟΣΩΠΗ Α.Ε. (LEI 213800KT8MEUJEJ2KW41)) | headquartersAddress: 8 ARTEMIDOS, MAROUSI, GR. (The Greek operating company; the listed parent METLEN plc is not claimed.) | CONFIRMED (read 2026-10-03) |
| gr-e-titan | data | https://api.gleif.org/api/v1/lei-records/213800OREKC9BL58G144 (GLEIF, Global LEI Index record for Ανώνυμη Εταιρία Τσιμέντων ΤΙΤΑΝ (Titan Cement Company) (LEI 213800OREKC9BL58G144)) | headquartersAddress: CHALKIDOS 22A, ATHENS, GR (legal name Ανώνυμη Εταιρία Τσιμέντων ΤΙΤΑΝ = Titan Cement Company S.A.). | CONFIRMED (read 2026-10-03) |
| gr-e-ppa | data | https://api.gleif.org/api/v1/lei-records/549300UNB6JCR0XZT864 (GLEIF, Global LEI Index record for ΟΡΓΑΝΙΣΜΟΣ ΛΙΜΕΝΟΣ ΠΕΙΡΑΙΩΣ ΑΕ (Piraeus Port Authority) (LEI 549300UNB6JCR0XZT864)) | headquartersAddress: 10, AKTI MIAOULI STR., PIRAEUS, GR. | CONFIRMED (read 2026-10-03) |
| gr-e-aegean | data | https://api.gleif.org/api/v1/lei-records/213800VI8OH5EJM18L21 (GLEIF, Global LEI Index record for ΑΕΡΟΠΟΡΙΑ ΑΙΓΑΙΟΥ ΑΝΩΝΥΜΗ ΑΕΡΟΠΟΡΙΚΗ ΕΤΑΙΡΕΙΑ (Aegean Airlines) (LEI 213800VI8OH5EJM18L21)) | headquartersAddress: ATHENS INTERNATIONAL AIRPORT, BUILDING 57, SPATA ATTIKIS, GR. | CONFIRMED (read 2026-10-03) |
| gr-e-thpa | data | https://api.gleif.org/api/v1/lei-records/213800ETW48B6KOWZA42 (GLEIF, Global LEI Index record for ΟΡΓΑΝΙΣΜΟΣ ΛΙΜΕΝΟΣ ΘΕΣΣΑΛΟΝΙΚΗΣ Α.Ε. (Thessaloniki Port Authority) (LEI 213800ETW48B6KOWZA42)) | headquartersAddress: PIER A, INSIDE THE PORT, THESSALONIKI, GR. | CONFIRMED (read 2026-10-03) |

### Notes on the Greece section

- **Sector counts.** Eurostat met_10r_3emp (2021, thousand persons, API/file read 3 October 2026): Athina (EL001MC) total 1,733.94, J 76.22, K 46.23; Thessaloniki (EL002M) total 489.30, J 10.16, K 7.40; Greece J 108.58, K 78.46. Ranks are my own count of the 152 metropolitan-region codes with a figure (Athina J 13th, K 16th; Thessaloniki J 68th, K 74th). The earlier pass (round 4k) rated Thessaloniki strong on the same counts; unchanged.
- **GDP and population.** met_10r_3gdp has 2021 as the latest year for Greek metropolitan regions (Athina EUR 82,615.47 million; Thessaloniki 16,002.59; Greece 2021 181,500.37, 2022 206,620.39). met_pjanaggr3 1 January 2023: 3,626,216 and 1,089,819; Greece 10,413,982. Attica (NUTS 2 EL30, 2021 GDP 89,769) is a different area from the metropolitan region, so the metropolitan series is used for both hubs.
- **Pay and rent.** No metric. The Hellenic Statistical Authority publication pages returned only navigation to the fetcher, searches found no regional earnings table, and Numbeo refused access. Eurostat's national structure-of-earnings figures (2022) are given as a claim only; the all-sector total is not published for Greece in those tables, and they are older than 2023.
- **Graduate employment.** edat_lfse_24 2025, ISCED 5-8, age 20-34: up to three years since graduation (Y_LE3): Greece 64.0, TR 64.4, MK 65.4, BA 68.6, RS 75.3, IT 75.8 of the 36 countries listed (Greece lowest); EU27 85.3. The existing claim `gr-grads` (66.9 against 86.9) is the 1-to-3-years series and stays; both series are in `gr-grad-emp`. Unemployment une_rt_m 2026-08: Greece 7.4 and 15.6 (under 25), EU27 6.1 and 15.4. The old summary's "two in three" is now "64% ... against 85%".
- **Ratings changed.** Athens: it gap -> dominant (70% of national jobs, Eurostat), finance gap -> dominant (59%), business gap -> strong (headquarters of HELLENiQ ENERGY, OTE, Motor Oil plus the HELLENiQ programme with commercial and corporate routes), logistics present -> strong (fleet share, the union's 160,000-job estimate, Piraeus Port Authority headquarters), accounting gap -> present (Deloitte registered offices only), banking gap -> strong (three bank headquarters). Thessaloniki: software gap -> present (Pfizer centre bootcamp hires), logistics gap -> present (port authority headquarters); it and finance stay strong. `roles` now finance, it, business, logistics.
- **Standing.** Athens IT 5/3/1 (13th of 152; GSER value $4 bn against a $25 bn global average), finance 5/2/1 (16th of 152 on jobs but the GFCI 40 ranks Athens 114th of 117, so the lower reading), business 5/2/1 (judgement), logistics 5/4/3 (the 4 at European scale rests on the cross-country statistic of the Greek-owned fleet, about 20% of world capacity, the largest of any country; the family is wider than shipowning and no ranking of maritime cities was read, so world is held at 3). Thessaloniki IT and finance 4/2/1 (second in Greece; 68th and 74th of 152).
- **Shipping.** `gr-ugs-econ` quotes the Union of Greek Shipowners' own page (citing a McKinsey study of July 2024, not read): an industry body's estimate, tagged employer-stated and flagged in the brief.
- **Programmes.** HELLENiQ ENERGY page read in full (no dates or intake size given). METLEN: requirements page and the 15 September 2025 press release read. Pfizer CDI pages read. Deloitte Greece: legal notice only. Eurobank, Alpha and National Bank pages refused or returned no text; WebFetch returned 403 for Eurobank; the Piraeus Bank "Project Future" releases (2018-2020) were seen only as search results and are not used.
- **GLEIF.** Eleven headquarters read through the GLEIF API on 3 October 2026; Greek companies sit under their Greek legal names, shown in the quote. Not used: Eurobank (current record not found; the holding-company record is inactive), PPC and Bank of Greece (no matching record found), Jumbo (sector not tied to the record), Alumil and Cosmote entities.
- **Removed claims.** None; old gap lines replaced (the "hubs added on 3 October" rating note is superseded by these notes).

