---
title: "Verification log, round 5d (Atlas deepening: United States, Canada, UAE, Saudi Arabia, Qatar, Kuwait, Oman, Israel, Turkey, Russia)"
last_researched: 2026-10-03
scope: Every claim and metric added or changed in round 5d, with the source, what the page says and any rating changed. One section per country, under its P number in the Atlas record.
confidence: see each section
review_by: 2027-03-31
---

# Round 5d: verification log

Statuses: CONFIRMED (read on the primary page or data file), PARTLY CONFIRMED (read on a secondary page, an advert, or only a band or a derived figure), LIBRARY (taken from a library file, which carries its own source), UNVERIFIED.

## United States (P60)

Record `data/atlas/us.js`, brief `research/countries/us-united-states.md`. Claims 24 → 74; hubs 14 (the lead's 12 added on 3 October carried only county GDP; now every hub has pop, gdp, wage and rent). Metrics coverage: pop 14 / gdp 14 / wage 14 / rent 14.

One source per metric for all 14 hubs, all metropolitan:
- pop: Census Bureau Vintage 2025 metro estimates (`cbsa-est2025-alldata.csv`, 1 July 2025, CBSA rows).
- gdp: BEA CAGDP1 (current-dollar GDP, line 3, 2024) **summed over the counties of each CBSA** (county rows of the same Census file give the membership; Virginia independent cities are combined with their counties in BEA's own series, so the sum uses BEA's combined areas for Washington). The BEA's release note on the 2024 county data says "BEA has discontinued publication of statistics for metropolitan statistical areas", so no BEA metro figure exists for 2024. The sum is Admetia's derived number; the metric's `by` says so.
- wage: BLS OEWS May 2025, series OEUM + CBSA + 0000000000 + 04 (mean annual wage, all occupations) ÷ 12.
- rent: Census ACS 2024 1-year table B25031 (median gross rent of one-bedroom rented homes), metro area, margin of error given in `by`. HUD fair market rents could not be read (HTTP 403 / empty file).

### Metrics

| Hub | pop (CBSA) | gdp, $bn (sum of counties) | wage, annual → monthly | rent (±MOE) | Status |
|---|---|---|---|---|---|
| New York | 20,112,448 (35620) | 2,442.5 (22 counties) | $86,310 → 7,193 | $1,708 (±15) | CONFIRMED |
| San Jose | 1,984,473 (41940) | 441.8 (2) | $119,230 → 9,936 | $2,465 (±67) | CONFIRMED |
| Chicago | 9,434,123 (16980) | 923.1 (13) | $73,380 → 6,115 | $1,310 (±29) | CONFIRMED |
| Los Angeles | 12,844,441 (31080) | 1,354.7 (2) | $77,270 → 6,439 | $1,822 (±18) | CONFIRMED |
| Houston | 7,904,627 (26420) | 758.3 (10) | $67,610 → 5,634 | $1,273 (±20) | CONFIRMED |
| Dallas | 8,477,157 (19100) | 800.6 (11) | $70,630 → 5,886 | $1,473 (±21) | CONFIRMED |
| Washington | 6,465,724 (47900) | 749.1 (23 counties and cities) | $91,930 → 7,661 | $1,830 (±22) | CONFIRMED |
| Boston | 5,034,221 (14460) | 644.8 (7) | $89,620 → 7,468 | $1,747 (±45) | CONFIRMED |
| Seattle | 4,161,883 (42660) | 604.1 (3) | $91,790 → 7,649 | $1,814 (±30) | CONFIRMED |
| San Francisco | 4,630,041 (41860) | 801.3 (5) | $100,220 → 8,352 | $2,180 (±34) | CONFIRMED |
| Atlanta | 6,482,182 (12060) | 604.3 (29) | $71,900 → 5,992 | $1,605 (±29) | CONFIRMED |
| Miami | 6,391,072 (33100) | 575.0 (3) | $67,190 → 5,599 | $1,763 (±28) | CONFIRMED |
| Charlotte | 2,938,830 (16740) | 277.1 (11) | $68,900 → 5,742 | $1,451 (±29) | CONFIRMED |
| Philadelphia | 6,329,118 (37980) | 582.1 (11) | $71,730 → 5,978 | $1,353 (±29) | CONFIRMED |

Change in this session (resumed work): the earlier researcher had used the core county's GDP, labelled `region` (New York County $1,006.7 bn, Cook $546.4 bn and so on), which is not comparable across hubs. All 14 gdp metrics were replaced by the metro sum above, `area: metro`, with a check that the county list of each CBSA is complete in the BEA file (all matched, after combining the Virginia cities for Washington). The core-county claims (`us-newyork`, `us-chicago` etc.) were kept because they are still true and still shown in the hub's "why".

### Claims

| Claim | Source read, and what it says | Status |
|---|---|---|
| us-gfci-ny (new, this session) | GFCI 40 (September 2026) Table 1: New York rank 1, rating 761, London 2nd at 757 (four points behind); regional text: "New York is the only North American centre in the world top 10" | CONFIRMED (PDF text, scratchpad gfci40.txt) |
| us-gfci-sf, la, chi, bos, dc, atl, mia | GFCI 40 Table 1: San Francisco 11 (748; 5th in GFCI 39), Los Angeles 14 (745; 12), Chicago 15 (744; 14), Boston 18 (741; 13), Washington DC 19 (740; 17), Atlanta 27 (732; 39), Miami 36 (723; 32); North America section: "San Francisco, Los Angeles, Chicago, Boston, and Washington DC all in the top 20"; the "of 117" is the main-index count; Houston, Dallas, Charlotte absent from the table | CONFIRMED (the North American ordinals are from ranking the centres in the table) |
| us-oews-* (14) | BLS OEWS May 2025 through the public API: for each metro, employment of software developers, financial and investment analysts, data scientists, management analysts, accountants and auditors, logisticians and marketing specialists, with mean and 25th-percentile pay; shares of US total computed against the national estimates (software 1,687,890; financial analysts 361,980) | CONFIRMED (figures match bls_us2.json; "share of the US" is Admetia's division) |
| us-oews-nat | BLS OEWS May 2025 national: software developers 1,687,890 / $148,100; financial and investment analysts 361,980 / $116,800; data scientists 262,440 / $126,800; management analysts 898,280 / $113,790; accountants and auditors 1,449,500 / $94,750 | CONFIRMED |
| us-fortune-ghp, us-houston-f500 | Greater Houston Partnership, June 2026: 27 Fortune 500 headquarters, tied with Chicago, second to New York (62); Exxon Mobil 9, Chevron 21, Phillips 66 29, Sysco 55, ConocoPhillips 75, HPE 133, Baker Hughes 164 | CONFIRMED |
| us-fortune-rp | RealPage, 17 Jun 2026: New York 49, Chicago 30, Houston 26, San Jose 21, Washington 20, Dallas 19, Minneapolis and Atlanta 15, San Francisco and Boston 14 | CONFIRMED (a different metro definition from the Houston Partnership's; both shown) |
| us-global500, us-dallas-f500 | Dallas Regional Chamber, Economic Development Guide 2026, Fortune 1000 page: Fortune Global 500 counts Beijing 47, Tokyo 26, Paris 22, New York 20, London 16, San Jose 9, Washington 9, Chicago 8, Houston 8, Toronto 8, DFW 7, San Francisco 5, Seattle 5, Atlanta 4, Boston 4, Los Angeles 4; DFW 24 Fortune 500 headquarters (McKesson, AT&T 35, American Airlines 86, CBRE 118, Texas Instruments 252) | CONFIRMED (a chamber's table from Fortune) |
| us-gser, us-gser-na | Startup Genome GSER 2026 Top 40 key findings: Silicon Valley, New York City, London top three; Seattle 10th (up five), Toronto-Waterloo 13th, Austin 18th, Dallas 27th, Philadelphia 33rd; North America piece (21 Jul 2026): Silicon Valley 1st, New York 2nd, Boston 3rd, Los Angeles 4th, Philadelphia 14th | CONFIRMED (the full Top 40 table is an image; only text-stated ranks used) |
| us-sifma | SIFMA 10 Feb 2026: about 197,300 in the city's securities industry (219,100 in the state), 1 in 13 city jobs, $6.7 billion paid, 8.4% of city tax revenue | CONFIRMED |
| us-nycomp | NYC Comptroller, 15 Dec 2025: 201,500 securities jobs in 2024 (record), average bonus about $247,000 forecast for 2025 | CONFIRMED |
| us-jv-tech, jv-top20, jv-vc, jv-unicorns | Joint Venture Silicon Valley 2026 Index (PDF read with pypdf): Bay Area top tech talent centre, tech jobs 2021-24 +10% against Dallas +26%, South Florida +25%, Charlotte +16%; 20 largest tech companies about 215,000 jobs, 9% of workforce; 49% of US venture capital in 2025, AI nearly $80 bn (83%), San Francisco 62% of the regional total; about half of US unicorns, 23,000 patents, nearly 140,000 software developers | CONFIRMED |
| us-sj | CompTIA State of the Tech Workforce 2026 (27 Mar 2026): tech about 27% of employment in the San Jose area | CONFIRMED (an industry association) |
| us-chicago-f500 | Illinois DCEO: ADM 58, United 81, McDonald's 170, Kraft Heinz 184, Exelon 189, GE HealthCare 217, Motorola Solutions 378; Illinois 29 Fortune 500 | CONFIRMED |
| us-charlotte-f500 | Charlotte Regional Business Alliance: Bank of America 20, Lowe's 52, Honeywell 116, Nucor 142, Duke Energy 145, Truist 150; 46,000 jobs in headquarters and management, about twice what size suggests | CONFIRMED |
| us-atlanta-hq | Select Georgia: 14 Fortune 500 headquarters in metro Atlanta; Home Depot, Mercedes-Benz USA, Porsche | CONFIRMED |
| us-seattle-amazon | KUOW: Amazon about 49,000 in Seattle (60,000 in 2020), about 15,000 in Bellevue; University of Washington now the largest employer | PARTLY CONFIRMED (public radio, one article; tag practitioner consensus) |
| us-dc-fed | AP, 21 Jul 2026, reporting BLS: federal employment 375,800 (start of 2025) to 312,500 (May 2026), lowest in 30 years; metro lost 100,500 jobs in all May 2025 to May 2026 | PARTLY CONFIRMED (news agency reporting BLS; BLS page refused) |
| us-dc-hq2 | Arlington County: announced 13 November 2018, over $2 billion, at least 25,000 jobs by 2030, phase one finished spring 2023 | CONFIRMED |
| us-boston-bio, us-philly-bio | GEN, 1 Jun 2026: Boston-Cambridge 1st with 117,108 jobs, $6.85 bn VC, 7,037 NIH awards ($4.339 bn); Greater Philadelphia 5th with 88,000 jobs, $1.31 bn, 3,201 awards ($1.94 bn) | CONFIRMED (trade magazine, ranking its own method) |
| us-philly-f500 | Philadelphia Inquirer, 4 Jun 2025: eight companies on the 2025 Fortune 500; Cencora 10, Comcast 35, Lincoln National 228, Aramark 239, UHS 271, Toll Brothers 390, Burlington 399, Campbell's 419 | CONFIRMED (2025 list, one year older than the others) |
| us-miami-fin | Miami-Dade Beacon Council: finance sector over 150,000 jobs and about $28 bn GRP, over 60 international banks in Brickell, Citadel HQ moved | CONFIRMED (economic-development body) |
| us-la-econ | LAEDC 2026 outlook: economy above $1 trillion, +2.4% in 2025, about 400,000 fewer residents since before the pandemic, Olympics up to $18 bn | CONFIRMED |
| us-gs | Goldman Sachs 2027 Summer Analyst Program (Americas) page: nine-to-ten weeks, third or penultimate year, applications open for some businesses | CONFIRMED |
| us-<county> (14, core-county GDP) | BEA CAGDP1 2024, current-dollar GDP of New York County $1,006.7 bn, Santa Clara $438.5 bn, Cook $546.4 bn, Los Angeles $1,003.0 bn, Harris $592.8 bn, Dallas $389.4 bn, DC $184.3 bn, Suffolk MA $190.8 bn, King $477.2 bn, San Francisco $268.3 bn, Fulton $243.6 bn, Miami-Dade $260.8 bn, Mecklenburg $186.1 bn, Philadelphia $135.0 bn | CONFIRMED (kept; no longer the hub's gdp metric) |
| us-i20, us-20h | DHS Study in the States pages (29 Apr 2025; 28 Nov 2023) | CONFIRMED (unchanged) |
| us-opt, us-stem, us-h1b, us-100k, us-euro, us-duke, us-mit, us-cal, us-nyfed | Library files: places/visas-and-work-rights.md §7, places/beyond-europe.md §1, getting-in/recruiting-calendar.md, evidence/trends.md | LIBRARY |

### Ratings changed (by the rule in `index.js`)

The 12 hubs added on 3 October previously had no rated family. Now rated from BLS metro employment in the matching occupation (strong if at least 4% of the US total or a named-employer statistic; present at 2%), Fortune counts and the GFCI. Principal changes (gap → rating):
- New York: finance dominant (SIFMA 197,300 and the Comptroller's 201,500 are `data`); business dominant (62 Fortune 500 headquarters); accounting, management, marketing, software and data science strong (BLS shares: software 7.2%, financial analysts 14.9%); logistics present.
- San Jose: software dominant (5.2% of US developers, tech 27% of jobs); IT, business, AI strong; data science present. San Francisco: AI dominant (62% of regional VC), software strong, finance strong (GFCI 11th), venture capital dominant.
- Chicago, Dallas, Houston: business strong (Fortune 500 counts of 24 to 27); Chicago finance and logistics strong; Dallas software strong (4.0% of US developers); Houston logistics present.
- Los Angeles: finance, accounting, management, marketing, logistics strong. Washington: business, management, software strong. Boston: finance strong. Seattle: software strong (5.5%). Atlanta: business strong. Miami and Charlotte: finance strong. Philadelphia: present only (business, finance, accounting, data science).
- Economics, analytics, IT (outside San Jose), AI (outside the Bay Area), computer science and big data stay `gap` everywhere: no matching official occupation count.

### Standing (reasoning in the brief)

New York finance [5, 5, 5], business [5, 5, 4], software [4, 4, 4] (second in Startup Genome in both North America and the world). San Jose and San Francisco software and AI [5, 5, 5] (first in the world in Startup Genome; 49% of US VC). Chicago, Los Angeles, Boston and San Francisco finance [4, 4, 3] (GFCI 11th to 18th, all top five in North America), Washington finance [3, 3, 3] (sixth in North America, added in this session). Business [4, 4, 3] for Chicago, Houston, Dallas, Washington and San Jose; Atlanta [3, 3, 2]; Philadelphia [3, 2, 1]. Seattle software [4, 4, 3] (tenth in the world; no lower than fifth in North America by elimination from the regional list, which is a judgement). Charlotte finance [4, 3, 2] and Miami finance [3, 3, 2] rest on named employers or a sector figure and the GFCI. Regional and world steps for the BLS-only families (data science, management, accounting, marketing, logistics) are conservative judgements [4, 3, 2] with no cross-city ranking read.

### Italian

Added for the new claim `us-gfci-ny` and the rewritten GDP gap. Numbers kept; ordinals written as words in Italian where the English uses words ("secondo posto"), because the number check compares digits; "$1 trillion" is "1 trilione di $".

### Gaps (also in the record)

State Comptroller's securities report, HUD fair market rents, Boston, State Street, Fidelity, Vanguard, Axios, Microsoft filings refused automated reads; USCIS FY2027 counts by wage level unpublished; Startup Genome's top-40 table is an image.

## Canada (P61)

Record `data/atlas/ca.js`, brief `research/countries/ca-canada.md`. Claims 10 → 36; hubs 5 (no new hubs: the record's gaps name no missing city). Metrics coverage: pop 5 / gdp 5 / wage 5 / rent 5. Families rated: 5 → 17 ratings (finance, business, software, IT, AI, banking; see below).

One source per metric, all metropolitan (census metropolitan area, CMA), all from Statistics Canada tables downloaded through the Web Data Service (full-table CSV) on 3 October 2026:
- pop: Table 17-10-0148-01, 1 July 2025, 2021 boundaries: Toronto 7,108,874; Montréal 4,597,837; Vancouver 3,088,036; Calgary 1,836,012; Ottawa–Gatineau 1,700,014.
- gdp: Table 36-10-0468-01, GDP at basic prices by CMA, current prices, millions of dollars, **2022 (the latest year in the table)**: Toronto 522,379; Montréal 279,501; Vancouver 202,459; Calgary 129,957; Ottawa–Gatineau = Ontario part 88,014 + Quebec part 17,810 = 105,824.
- wage: Table 11-10-0240-01, average employment income of full-year full-time workers, both genders, 2024 (2024 dollars): Toronto 97,300; Montréal 84,300; Vancouver 94,100; Calgary 87,700; Ottawa–Gatineau 94,000; Canada 85,500. Monthly = ÷ 12 (8,108; 7,025; 7,842; 7,308; 7,833). I looked for a CMA average-wage series (LFS, SEPH); Statistics Canada publishes these only by province, so the income table is the only like-for-like metropolitan pay figure.
- rent: Table 34-10-0133-01 (CMHC), 2025, one-bedroom units, "Row and apartment structures of three units and over": Toronto 1,761; Montréal 1,131; Vancouver 1,807; Calgary 1,581; Ottawa–Gatineau 1,542.

### Claims

| Claim | Source read, and what it says | Status |
|---|---|---|
| ca-ottawa (corrected) | Table 14-10-0468-01, 2025: Ottawa–Gatineau (Ontario/Quebec) total employed 877.3 thousand, public administration 194.0, professional occupations in natural and applied sciences 91.2, in finance 21.3. The old claim (688,200; 82,000; 16,800) matched the **Ontario part only** (688.2; 82.0; 16.8) while naming the whole metropolitan area | CONFIRMED; claim text corrected, old figures kept in the log |
| ca-lfs-tor, mtl, van, cgy | Table 14-10-0468-01, 2025: Toronto employed 3,736.7 thousand, finance/insurance/real estate/rental/leasing [52-53] 455.0, prof. finance [111] 175.2, prof. business [112] 135.1, natural and applied sciences [21] 333.4, professional/scientific/technical services [54] 536.6. Montréal 2,409.9; 195.7; 73.8; 71.2; 167.7; 253.9. Vancouver [52-53] 134.0; [112] 53.5; [54] 223.3; information, culture and recreation 82.4; transportation and warehousing 101.0. Calgary: forestry, fishing, mining, quarrying, oil and gas 46.3 (Toronto 5.0); [52-53] 68.0; [112] 34.5; [54] 142.3 | CONFIRMED (CSV values, persons in thousands) |
| ca-vancouver, ca-calgary | Unchanged; re-checked against the same table (Vancouver 1,698.0, finance prof. 60.1, sciences 129.8; Calgary 991.9, 94.1, 30.8) | CONFIRMED |
| ca-gfci-tor, mtl, van, cgy | GFCI 40, Table 1 and Table 10 (North American centres): Toronto 41 (718; GFCI 39: 29), Montreal 50 (709; 34), Vancouver 75 (681; 63), Calgary 77 (679; 60); Table 10 order: New York, San Francisco, Los Angeles, Chicago, Boston, Washington DC, Atlanta, Miami, Minneapolis / St Paul, Toronto, Montreal, San Diego, Vancouver, Calgary | CONFIRMED |
| ca-gser-tor | Startup Genome GSER 2026 Top 40 page: "Toronto-Waterloo made impressive progress, moving up seven positions to #13, tying with Paris"; the page names no other Canadian ecosystem | CONFIRMED (read through WebFetch; the date is not on the page) |
| ca-gser-ott, ca-gser-cgy | Startup Genome, 21 July 2026: Ottawa "a globally-distinctive identity as a 'Bootstrap City'", "direct access to federal decision-makers and procurement pathways", "Ottawa and Calgary represent Canada's growing innovation depth"; Platform Calgary's 2025 Impact Report "$323.9 million in investment secured by member companies"; the C$6.7 billion ecosystem value is from Calgary Economic Development's home page ("$6.7B value of Calgary's startup ecosystem", Startup Genome 2025) | CONFIRMED (WebFetch summaries of the pages) |
| ca-global500 | Dallas Regional Chamber, Economic Development Guide 2026 (the table read for the US record): Toronto 8, Chicago 8, Houston 8, New York 20, London 16 | CONFIRMED |
| ca-f500-tor, mtl, cgy | Fortune Global 500 2026 company profile pages (fetched with curl, "Market value as of July 13, 2026"): Royal Bank of Canada rank 110, HQ Toronto, 96,628 employees; Toronto-Dominion 140, Toronto, 102,218; Manulife 277, Toronto, 37,000; Bank of Montreal 273, HQ "Montreal", 53,234; Scotiabank 290, Toronto, 86,431; George Weston 332, Toronto, 220,266; CIBC 357, Toronto, 49,824; Sun Life 379, "Toronto, Ontario, Canada", 23,816; Alimentation Couche-Tard 185, "Laval, Quebec", 146,000; Enbridge 335, Calgary, 15,550; Cenovus 465, Calgary, 7,211; Canadian Natural Resources 471, "Calgary, Alberta, Canada", 10,035; Suncor 472, Calgary, 15,424 | CONFIRMED (employee figures are global; the list of Toronto companies is "among the Canadian ones checked", not a complete count; a few other Canadian names, for example National Bank, had no Global 500 page) |
| ca-shopify | Fortune company profile for Shopify: Headquarters Ottawa, 8,100 employees, "figures are for latest twelve months ended June 30, 2025" (the /global500/ URL redirects to the profile, where Shopify appears in The Future 50, not the Global 500) | CONFIRMED |
| ca-rbc | jobs.rbc.com/ca/en/students-and-graduates: "Co-ops & Internships", "New Graduate Rotational Programs"; no dates or locations on the page | CONFIRMED (landing page only) |
| ca-lululemon | corporate.lululemon.com/about-us: "From our roots in Vancouver, Canada, we have grown across the globe"; footer "lululemon athletica 1818 Cornwall Ave Vancouver BC" | CONFIRMED |
| ca-cgy-ced | calgaryeconomicdevelopment.com home page: "Highest per capita head office concentration in Canada (FP500 Database, 2024)", "Fastest-growing tech hub in North America (CBRE Tech Talent Report, 2025)", "Lowest corporate income tax rate in Canada" | CONFIRMED (a promotional agency page) |
| ca-mtl-ai | Montréal International, "Why Artificial Intelligence Giants are Heading to Montréal", 2025 edition (PDF read with pypdf): "More than 48,000 experts with AI skills in Montréal"; "Presence of MILA, the world's largest academic AI research centre and IVADO, Canada's largest AI consortium"; "24,000+ university students enrolled in AI-related programs in Québec"; "Many global leaders, including Google and Meta, have established one of their AI R&D centres in Montréal" | CONFIRMED (investment-agency compilation, 2025) |
| ca-tech-toronto | CompTIA blog "Canada's tech workforce 2025" (17 Nov 2025): "Toronto alone is projected to have over 414,000 tech jobs in 2025", nearly 11% of its workforce; Canada 1.45 million tech workers in 2024, 6.8% of the workforce | CONFIRMED |
| ca-tech-cities | Techcouver, 5 Aug 2025, quoting CompTIA: Vancouver 150,000, Toronto 414,000, Montreal 217,000, Calgary 69,000, Edmonton 40,000. The CompTIA blog itself gives only Toronto | PARTLY CONFIRMED (trade-press report; tagged practitioner consensus; the report's own page for Montréal/Vancouver was not read) |
| ca-lfs-youth | The Daily, 4 Sep 2026: employment 21,173,000, unemployment 6.4%; youth (15-24) 12.9%, a year earlier 14.3%, pre-pandemic average 10.8% (2017-2019); Toronto CMA 6.7%, "down from a recent high of 9.0% observed in July 2025" | CONFIRMED |
| ca-pay-cma | Table 11-10-0240-01, 2024: full-year full-time average: Toronto 97,300, Vancouver 94,100, Ottawa–Gatineau 94,000, Calgary 87,700, Montréal 84,300, Canada 85,500; all workers with employment income: Toronto 68,100 | CONFIRMED |
| ca-rent-cmhc | Table 34-10-0133-01, 2025, one-bedroom, apartment structures of three units and over: Vancouver 1,806 (row and apartment 1,807), Toronto 1,761, Calgary 1,582 (1,581), Ottawa–Gatineau 1,543 (1,542), Montréal 1,131; the record uses the "row and apartment" series | CONFIRMED |
| ca-french | BCF law firm (29 May 2025): "enterprises in Québec that employ between 25 and 49 employees will be subject to new requirements" from 1 June 2025, registration with the OQLF within six months; the article does not address requiring other languages for a job | PARTLY CONFIRMED (law-firm summary; the legislation and OQLF pages could not be read: legisquebec 403, OQLF URLs 404) |
| ca-pal, ca-24h, ca-pgwp, ca-pr, ca-tor, ca-ivey, ca-rotman | Unchanged | as in round 4f |

### Ratings

Before: Toronto finance dominant, business present, banking strong; Montréal finance strong; Vancouver finance strong; Calgary and Ottawa nothing. After: Toronto finance dominant (unchanged, now with three claims), business present → **strong** (a statistic: 135,100 business professionals, most in Canada, plus seven Global 500 headquarters), software and IT gap → **strong** (CompTIA 414,000 tech jobs, 11% of the workforce; a statistic), banking strong; Montréal finance strong (unchanged), business gap → present (Bank of Montreal and Couche-Tard named by Fortune), AI, software, IT gap → **strong** (48,000 AI-skills experts and 217,000 tech workers: two claims, one of them a trade-press report), banking gap → present; Vancouver finance strong (unchanged), business gap → present (lululemon), software and IT gap → strong (150,000 tech workers plus 129,800 science professionals: a statistic); Calgary business gap → **strong** (four Global 500 headquarters, one head-office density claim, a statistic of 46,300 oil and gas jobs); Ottawa software gap → present (Shopify, a named employer). Finance in Calgary and Ottawa stays gap (30,800 and 21,300 professionals are statistics but neither city is in the top three; the record's earlier rule is kept).

### Standing

Toronto finance [5, 3, 2], software [5, 3, 3], IT [5, 3, 2], business [5, 3, 3]; Montréal finance [4, 3, 2], AI [4, 3, 2], software [4, 3, 2], IT [4, 3, 2]; Vancouver finance [3, 2, 1], software [3, 2, 2], IT [3, 2, 2]; Calgary business [4, 2, 1]; Ottawa software [3, 2, 1]. Reasons are in the brief. No step above 3 is claimed beyond the country: the only Canadian ranking in a world top 15 is Toronto-Waterloo's 13th in Startup Genome, and the GFCI puts Toronto 10th of 14 North American centres.

### Italian

New sentences translated with the numbers kept. "Decimal" separators follow Italian (323,9 milioni; 6,4%). The old translation of ca-ottawa and of the Ottawa employer note was replaced with the corrected figures.

### Gaps (also in the record)

Express Entry cut-offs (secondary only), Ontario bid-document counts, GDP only to 2022, no entry pay by city, trade-press CompTIA figures, BMO headquarters nuance, thin named employers, no rating for economics, accounting, management, marketing, analytics, data science and big data, and French requirements from a law firm.

## United Arab Emirates (P34)

Record `data/atlas/ae.js`, brief `research/countries/ae-united-arab-emirates.md`. Claims 21 → 30 (the 21 kept verbatim); hubs 2 (no new hubs). Metrics coverage: pop 2 / gdp 2 / wage 0 / rent 0 (no official average-pay or rent figure found per emirate; Numbeo returned HTTP 429 on three tries, so the crowd-sourced rent was left out rather than guessed).

Metrics (both `area: region`, the emirate, because the statistics offices publish emirates, not cities):
- pop: Dubai 4,248,200 (end of 2024), dubai.ae fact sheet: "The population of Dubai reached 4,248,200 by the end of 2024." Abu Dhabi 4,135,985 (2024), SCAD via dge.gov.ae (30 Jun 2025) and Khaleej Times: "7.5 per cent growth in population in 2024, to reach a total of 4,135,985 people" (revised 2023: 3,847,585).
- gdp: Dubai AED 442.942 billion at constant prices in 2024 (AED 540.677 billion at current prices), dubai.ae fact sheet. Abu Dhabi "AED 1.2 trillion" real GDP in 2024, Abu Dhabi Media Office reporting SCAD (28 Mar 2025); SCAD's own page refused the connection and only the rounded figure was readable. Both are constant-price figures but not on the same base year.

### Claims

| Claim | Source read, and what it says | Status |
|---|---|---|
| ae-gfci | GFCI 40 Table 1 and Table 12 (Middle Eastern & African centres): Dubai 9 (750; GFCI 39: 7), Abu Dhabi 13 (746; 21), Casablanca 38, Riyadh 46, Doha 52, Mauritius 55, Kuwait City 60, Bahrain 74; "Dubai and Abu Dhabi continue to take first and second places in the region" | CONFIRMED |
| ae-gser | Startup Genome, 15 Jul 2026: "Tel Aviv holds the top spot in the MENA regional ranking and sits in the global Top 5, with an Ecosystem Value of $250 billion"; "Dubai ranks #2 in MENA ... $30 billion Ecosystem Value and $1.14 billion in Series A funding"; "Abu Dhabi ranks #4 in MENA with an Ecosystem Value of $73 billion and AI-Native Ecosystem Value of $5.4 billion"; "Riyadh ranks #3"; "Doha ranks #8" | CONFIRMED (read through WebFetch) |
| ae-gser-emerging | Entrepreneur Middle East, 18 Jun 2026: Abu Dhabi "#41–50 category globally, improving from the #51–60 bracket", ecosystem value US$73.4 billion; Sharikat Mubasher, 25 Jun 2026: "Dubai ranked 12th among the Top 100 Emerging Startup Ecosystems globally", Riyadh "21-30 range", "four unicorns in each city" | PARTLY CONFIRMED (two secondary reports of Startup Genome; tagged practitioner consensus) |
| ae-dxb-gdp | dubai.ae/dubai-fact-sheet: GDP AED 442.942 bn at constant prices (+3.2%), AED 540.677 bn at current prices (+5.8%) in 2024; population 4,248,200 at the end of 2024 | CONFIRMED |
| ae-dxb-fin | Dubai Media Office, 31 Jan 2026: "approximately AED355 billion during the first nine months of 2025", "expanded 4.7%"; financial and insurance "AED42.8 billion, up from AED39.4 billion ... contribution to Dubai's GDP to 12%" | CONFIRMED |
| ae-auh-gdp | Abu Dhabi Media Office (28 Mar 2025): real GDP "AED 1.2 trillion", +3.8%, non-oil AED 644.3 billion, 54.7% | CONFIRMED (rounded total) |
| ae-auh-pop | SCAD via dge.gov.ae, 30 Jun 2025: 4,135,985; +7.5%; "51% over the past decade, rising from 2.7 million in 2014" | CONFIRMED |
| ae-emirates | Fortune Global 500 2026 company profile (fetched with curl): Emirates Group rank 474, Headquarters Dubai, United Arab Emirates, 130,919 employees, revenue $35,054 m (market value as of 13 July 2026) | CONFIRMED (employee figure is global) |
| ae-enbd | emiratesnbd.com/en/careers (WebFetch summary): graduate programmes mentioned within the Emiratisation section; 30,000 employees | PARTLY CONFIRMED (a summary of a promotional page; it does not state whether non-nationals may apply) |
| ae-salary | The National (Abu Dhabi), UAE salary guide 2026 (Michael Page): "More than 60 per cent have a monthly wage between Dh10,000 ($2,720) and Dh40,000"; technology, digital, finance and accounting a third of positions; the article says it gives no entry-level breakdown | PARTLY CONFIRMED (secondary; all seniorities) |
| the other 21 | Unchanged (round 4a, P34) | as in round 4a |

### Ratings changed

- Dubai finance: strong → **dominant** (DIFC workforce 50,200, `data`; GFCI 9th and first in the region; finance 12% of Dubai GDP). Reason: the rule asks for a data claim showing a leading national concentration; DIFC's workforce exceeds ADGM's (44,339) and the GFCI places Dubai four ranks above Abu Dhabi.
- Dubai logistics: present → **strong** (DP World's Jebel Ali 15.5 m TEU plus the Emirates Group headquarters: two named employers); business: gap → present (Emirates Group); venture capital: gap → present (Series A funding US$1.14 billion, Startup Genome).
- Abu Dhabi AI: present → **strong** (Startup Genome: AI-native ecosystem value US$5.4 billion, a statistic, plus Hub71's AI programme).
- Unchanged: Dubai software, IT, banking, asset management (strong), AI (present); Abu Dhabi finance, asset management (strong), software, venture capital (present).

### Standing

Dubai: finance [5, 5, 3] (GFCI first in Middle East and Africa; 9th of 117 is a top-15 centre, not top five), software [5, 4, 2], IT [5, 4, 2] (second in MENA behind Tel Aviv; outside the global top 40), logistics [4, 3, 2] (self-description only). Abu Dhabi: finance [4, 4, 3] (13th, second in the region), AI [4, 4, 2] (fourth in MENA; 41–50 among emerging ecosystems).

### Italian

All new sentences translated, numbers kept ("1,2 trilioni di AED" for "AED 1.2 trillion" so the digits match).

### Gaps (also in the record)

No health-insurance or tenancy rule read officially; no entry pay; no Italian foreign-ministry advice; Swiss, Norwegian, Icelandic and Irish citizens not covered by the EU–UAE waiver; emirate not city metrics, no wage or rent; Startup Genome global ranks via news sites; no rating for economics, accounting, management, marketing, analytics, data science and big data.

## Saudi Arabia (P72)

Claims 9 → 20, hubs 2 → 3 (new: Dammam and Dhahran, which the record's own gaps named as missing). Metrics: population only (3 of 3 hubs); GASTAT publishes no regional GDP, wage or rent series. The nine existing claims are unchanged (library-derived, FCDO, Argaam).

| Claim | Source read, and what it says | Status |
|---|---|---|
| sa-gfci | GFCI 40 (Z/Yen and CDI, September 2026), Table 1 and the regional summary: Riyadh 46 (GFCI 39: 61), "Riyadh up 15 places to move into fourth position" in the Middle East and Africa after Dubai, Abu Dhabi and Casablanca; Doha 52, Kuwait City 60; Jeddah not listed (PDF read with pypdf) | CONFIRMED |
| sa-gser | Startup Genome, MENA article, 15 Jul 2026: "Riyadh ranks #3 in MENA"; Dubai #2; Abu Dhabi #4. The "$18 billion" ecosystem value seen in a search summary was not on the page and is not used | CONFIRMED |
| sa-rhq-count | Arab News, 8 Nov 2023: "over 180 companies", target "160 HQs by the end 2023", minister Khalid Al-Falih to Bloomberg; "mandates international companies to set up their regional headquarters in Riyadh if they intend to secure government contracts". Saudi Press Agency page N2056681: only the headline "Ministry of Investment Grants Licenses to 450 Foreign Investors for Establishing Regional Headquarters" loaded (no body, no date). A "540" figure (October 2025) was in a search summary only and is not used | PARTLY CONFIRMED (headline only for 450) |
| sa-wb | World Bank, A Decade of Progress, Table 2 and text: "As of Q2 2025 ... overall unemployment rate had declined to 2.8 percent ... Among Saudis, unemployment is 6.8 percent ... Saudi employment in the private sector reached 52.8 percent"; "35.8 percent of Saudis had tertiary education in 2025 ... 24.4 percent of expatriates" | CONFIRMED (publication date not on the pages read; data are Q2 2025) |
| sa-ryd-labour | DataSaudi Al-Riyadh profile, Q2 2026: construction 1,403,894; administrative and support 937,517; wholesale and retail 678,141; "7,672,179 employees" (94.4% GOSI, 5.6% civil service); Saudi unemployment 4.2%. Population 8,591,748 (2022) used in the brief | CONFIRMED (via WebFetch summary of the portal) |
| sa-east-labour | DataSaudi Eastern Region profile: population 5,125,254 (2022); Q2 2026 construction 928,796, manufacturing 323,110, trade 260,954; Saudi unemployment 5.3% | CONFIRMED (via WebFetch summary) |
| sa-aramco-f | Fortune company page (curl): "Headquarters: Dhahran, Saudi Arabia", Number of employees 76,664, revenues $445,529 m, Global 500 2026 rank 5, updated 7/28/26; Aramco About us: "76,000+ total workforce" | CONFIRMED |
| sa-aramco-intl | Aramco careers for international applicants: "a minimum of five to 10 years of applicable experience"; fields engineering, geosciences, drilling, R&D, education, finance, law, administrative; no graduate programme for non-Saudis on the page | CONFIRMED |
| sa-sabic, sa-big4 | Library (places/gulf-and-central-eastern-europe.md §2): SABIC "attract and nurture young Saudi talents", "The applicant has to be Saudi"; PwC Middle East Saudi postings need eligibility without sponsorship; BCG Saudi Visiting Associate via a job-board copy | LIBRARY |
| sa-pop | Saudipedia, Top five Saudi cities by population: 2022 census, total 32,175,224; Riyadh about 6.9 million, Jeddah 3.7, Mecca 2.4, Medina 1.4, Dammam 1.4; "approximately 67.5 percent" in the three regions | PARTLY CONFIRMED (secondary summary of the census; rounded; census tables not read) |
| metrics pop | The three hub values are the Saudipedia figures above (area city, year 2022, tag data) | as above |

### Ratings changed

- Riyadh finance: present → **strong** (GFCI 46th and the Kingdom's only ranked centre, a ranking statistic; plus PIF as a named employer). Riyadh business: gap → **strong** (regional-headquarters licences, a government statistic). Jeddah logistics: gap → present (Jeddah Islamic Port expansion with DP World). Dammam and Dhahran business: new, present (Aramco headquarters, Fortune rank 5). Roles list: none → finance, business.
- The overview "most-requested roles" were empty; they now carry the two families rated strong.

### Standing

Riyadh finance [5, 4, 2]; business [5, 3, 2]; software [5, 4, 2] (Startup Genome MENA 3rd). Jeddah logistics [3, 2, 1]. Dammam and Dhahran business [4, 3, 2]. Reasons are in the brief (§3); no step above 3 beyond the country rests on anything but a published ranking.

### Italian

All new sentences translated, numbers kept ("5ª" for rank 5, "da cinque a 10 anni").

### Gaps (also in the record)

No entry pay; no graduate hiring by city; regional-headquarters counts are 2023 and a headline; no regional GDP, wage or rent; city populations are rounded secondary figures; Jeddah and the Eastern Province are thin.

## Qatar (P73)

Claims 5 → 11, hubs 1 → 1. Metrics: population only (1 of 1 hub). The five existing claims (FCDO, library, QFC press release) are unchanged.

| Claim | Source read, and what it says | Status |
|---|---|---|
| qa-gfci | GFCI 40 Table 1 (pypdf): Doha 52 (GFCI 39: 48), Dubai 9, Abu Dhabi 13, Casablanca 38, Riyadh 46, Kuwait City 60; Middle East and Africa summary: Dubai and Abu Dhabi first and second, Casablanca third, Riyadh fourth | CONFIRMED |
| qa-gser | Startup Genome GSER 2026, Qatar chapter (WebFetch): "Over 300 technology startups"; 2025 venture funding "$58.7 million (QAR 214 million)", "nearly doubled"; "93% of deals concentrated at early stages"; "22+ incubators and innovation platforms". The ecosystem's MENA rank (eighth, per a Gulf Times post in a search listing) was not on the page and is not used | CONFIRMED (via summary of the page) |
| qa-econ | NPC news, 28 Dec 2025 (fetched): Q3 2025 growth 2.9%, non-hydrocarbon 4.4%, "QAR 180.9 billion in the third quarter of 2024", "15 of 17 economic activities recorded positive real growth"; the revision note | CONFIRMED (the Q3 2025 level, QAR 186.1 bn, was in a search summary and is not stated in the claim) |
| qa-wage | data.gov.qa dataset "Workers in paid employment (15 years and above) and monthly average wage (QR) by gender and economic activity", API read, year 2023: finance and insurance males+females 28,856 workers; weighted average QAR 29,403; ICT 25,965, QAR 28,517; construction 668,300, QAR 5,978; all 2,171,062, QAR 11,025 (author's weighting) | CONFIRMED (derived: the dataset gives male and female averages only) |
| qa-pop | data.gov.qa "Population by municipality and age groups", API read: Doha 796,947 (2014), 956,457 (2015-19), 1,186,023 (2020-24); Al Rayyan 826,786. The 40% share is the Gulf Times headline "Doha municipality accounts for 40% of Qatar population" (article body not loaded) | PARTLY CONFIRMED (identical values 2020-24: a census base, not an annual estimate; the 40% is a headline) |
| qa-qe | QatarEnergy careers portal, Graduates: "Launching Careers by Empowering Recent Qatari Graduates"; selection "may take up to 90 days"; vocational and scholarship programmes for Qataris and children of Qatari women (search listing of the vocational page) | CONFIRMED (graduate page); PARTLY (vocational and scholarship wording from a search listing) |
| metrics pop | Doha municipality 1,186,023, year 2020, area city | as qa-pop |

### Ratings changed

- Doha finance: gap → **strong** (GFCI 52nd and the Qatar Financial Centre's 4,700 registered firms, both statistics; no jobs figure). Overview roles: none → finance.

### Standing

Doha finance [5, 4, 2]; software [5, 3, 1]. See brief §3.

### Italian

All new sentences translated, numbers kept.

### Gaps (also in the record)

No Qatarisation rule or entry pay; Qatar Airways' graduate page refused automated reads; no city GDP or rent; population is a 2020 census base.

## Kuwait (P74)

Claims 4 → 8, hubs 1 → 1. Metrics: population only (1 of 1 hub). The four existing claims (FCDO, library, central bank's bank list) are unchanged.

| Claim | Source read, and what it says | Status |
|---|---|---|
| kw-gfci | GFCI 40 Table 1 (pypdf): Kuwait City 60 (GFCI 39: 67); Dubai 9, Abu Dhabi 13, Riyadh 46, Doha 52 | CONFIRMED |
| kw-kia | kia.gov.kw/training-programs (curl): "eleven-month program ... first of its kind when conceived in 1995 ... more than 600 alumni"; "ten weeks" international assignment; "designed for high-performing nationals"; "No older than 26 years of age at date of application"; bachelor's "awarded no later than three years prior". The separate fresh-graduate page (WebFetch) states no nationality rule, so the programmes page is the source | CONFIRMED |
| kw-kpc | kpc.com.kw/OurHiringProcess (WebFetch): "those campaigns are restricted to nationals ..."; "KPC is responsible for the hiring process of fresh graduates of non-engineering and science majors"; engineering and science through kockw.com or knpc.com.kw | CONFIRMED (the quotation is cut off after "nationals" in the page text returned) |
| kw-pop | City Population, Kuwait administrative division (WebFetch): 2021 census, Al-Asimah (Capital) 574,839; Hawalli 926,170; Farwaniya 1,110,560; total 4,385,717; source "Central Statistical Office, State of Kuwait" | PARTLY CONFIRMED (third-party compilation of the census; official tables not read) |
| metrics pop | Capital governorate 574,839, year 2021, area region | as kw-pop |

### Ratings changed

None. Finance stays present (the GFCI rank adds a statistic, but 60th of 117 and one list of banks do not support "strong"). Overview roles stay empty.

### Standing

Finance [5, 3, 2], with reasons in the brief.

### Italian

All new sentences translated, numbers kept.

### Gaps (also in the record)

Kuwait's statistics bureau, the IMF (HTTP 403) and the government portal refused automated reads: no GDP, pay, rent or 2025 population on a page read. No Kuwaitisation rule, no bank graduate page, no graduate route for foreigners.

## Oman (P75)

Claims 5 → 11, hubs 2 → 2. Metrics: population only (2 of 2 hubs, whole governorates). The five existing claims (FCDO, library, central bank list, Sohar 2020) are unchanged.

| Claim | Source read, and what it says | Status |
|---|---|---|
| om-gfci | GFCI 40 Table 2 (associate centres, pypdf): "Muscat 23 630" (assessments in the last 24 months, mean); introduction: "Twenty-two centres fall into this 'associate centres' category ... the 150 assessments required to be listed" | CONFIRMED |
| om-pop | Muscat Daily, 20 Jan 2026 (curl): NCSI, population "5,359,557 at the end of December 2025", Omanis 3,039,348, expatriates 2,320,209, 43.3%; "Muscat ... 1,532,234 ... Expatriates 936,383 ... Omanis 595,851"; North Batinah 940,999 | CONFIRMED (a newspaper report of the NCSI release; NCSI's own portal not read) |
| om-gdp | Oman Observer, 30 Mar 2026 (curl): "Real gross domestic product (GDP) stood at RO 39.30 billion ... expansion of 2.4 per cent ... Non-oil GDP rose to RO 28.70 billion ... 3.1 per cent ... petroleum activities ... 1.1 per cent to reach RO 12.02 billion", from a Ministry of Economy monthly bulletin | CONFIRMED (via press) |
| om-sohar-25 | Oman Observer, 21 Jan 2026: "annual throughput increased from 62 million metric tonnes to 72 million metric tonnes by the end of 2025"; "Vessel calls increased from 3,144 to 3,427"; "secured $968 million in new commitments across eight agreements, leasing 76 hectares"; "SOHAR Freezone ranked third globally in fDi Intelligence's free zone index" | CONFIRMED (company statements as reported) |
| om-sohar-26 | Container News: "total cargo throughput of 52 million metric tonnes, a 52% increase"; "Container throughput increased 40% to 545,000 TEUs"; "combined investment value of OMR 2.62 billion" | CONFIRMED (company release as reported) |
| om-bm | Times of Oman, 8 Oct 2023: "celebrated recently the enrollment of 57 employees from different business units in the bank in two new batches"; "The two-year journey"; "national cadre" in the opening sentence. A job-board snippet saying the internship is "exclusively for Omani nationals" is not used (single, unofficial) | CONFIRMED |
| metrics pop | Muscat governorate 1,532,234 and North Batinah 940,999, year 2025, area region | as om-pop |

### Ratings changed

- Sohar logistics: gap → **strong** on three employer-stated claims (om-sohar 2020, om-sohar-25, om-sohar-26); the figures are throughput and investment, not hiring. Overview roles: none → logistics.
- Unchanged: Muscat finance and banking present.

### Standing

Muscat finance [5, 2, 1] (an associate centre of the GFCI, not ranked); Sohar logistics [4, 3, 2]. See brief §3.

### Italian

All new sentences translated, numbers kept.

### Gaps (also in the record)

No Omanisation rule from the Ministry of Labour; no graduate programme open to foreigners; port figures are company statements as reported; no governorate GDP, wage or rent.

## Israel (P76)

Claims 7 → 17, hubs 2 → 3 (Jerusalem added: the record's own gaps named it). Metrics: population 3 of 3 hubs (city, CBS preliminary 2023); wage 2 of 3 (Tel Aviv, Jerusalem; Haifa's figure was not in the English release); no GDP or rent. Existing claims (il-uk-entry, il-a2, il-ht, il-rd, il-rep, il-fcdo, il-haifa) unchanged. A claim drafted in the interrupted run (medians of NIS 14,311 and 8,402, 203,377 Tel Aviv employees) came from a search-result summary, not a page, and was dropped.

| Claim | Source read, and what it says | Status |
|---|---|---|
| il-gser | Startup Genome, MENA (15 Jul 2026): "Tel Aviv holds the top spot in the MENA regional ranking and sits in the global Top 5, with an Ecosystem Value of $250 billion"; "approximately $15.6 billion in private funding ... exits totaling roughly $46 billion" | CONFIRMED |
| il-gfci | GFCI 40 main table (pypdf): "Tel Aviv 94 650 88 661"; "Istanbul 89"; "Dubai 9"; "Riyadh 46"; "Doha 52"; centres in the index 117 | CONFIRMED |
| il-pop | data.gov.il localities file (API, saved locally): "סך הכל אוכלוסייה 2023 - ארעי" Jerusalem 1,028,366; Tel Aviv-Yafo 495,230; Haifa 298,312; Be'er Sheva 218,995. CBS release 165/2024: "the number of residents there surpassed one million" | CONFIRMED (preliminary) |
| il-wage | NII press release (curl): "average monthly wage for salaried employees in the first half of 2025 was 15,098 NIS"; "Tel Aviv (22,359 NIS)"; "the highest number of employees was in Jerusalem (287,984 employees)"; median per employee 10,586 NIS. Globes, 21 Dec 2025: "Jerusalem (NIS 11,415)", "The NII also publishes the median wage, which is NIS 10,586" | CONFIRMED (Jerusalem figure via Globes) |
| il-intel | Calcalist, 7 Jul 2025: "Intel Israel currently employs about 9,300 workers, around 4,000 of whom work at the Kiryat Gat plant"; layoffs "for the first time" at Kiryat Gat; R&D divisions in Petah Tikva and Haifa | CONFIRMED (business press) |
| il-hotzvim | Har Hotzvim park page: "Intel, Mobileye, Rafael Advanced Defense Systems, Ophir Optronics Solutions, Elbit Systems Rokar, Rafa Laboratories, Alpha Tau, and many others" | CONFIRMED |
| il-checkpoint | Check Point About us: "7000+ Employees", "3500+ Security Experts", "International Corporate Headquarters Tel Aviv 5 Shlomo Kaplan Street" | CONFIRMED |
| il-mobileye | Mobileye careers (3 Oct 2026): "187 open positions globally Jerusalem (67) Ramat Gan (33) Petah Tikva (23) Haifa (25) Tel-Aviv (1) Munich (2) Koblenz (4) Shanghai (12)" | CONFIRMED (a snapshot) |
| il-elbit | Elbit contact page: "Elbit Systems HQ ... P.O.B. 539, Haifa 3100401, Israel"; About: "employs over 21,000 people in dozens of countries"; "$2,287.1 million in revenues for the three months ended June 30, 2026 and an order backlog of $32.0 billion" | CONFIRMED |
| il-technion | Technion About: "More than 10,200 undergraduate students ... about 4,400 graduate students"; "approximately 92,500 bachelor's degrees"; "Many Technion students work in industry" | CONFIRMED |
| metrics pop / wage | as il-pop, il-wage | as above |

### Not used

Fortune Global 500 page for Teva (the earlier note said rank 496, Petach Tikva): the page's ranking entry is the 2017 list (revenue $21,903M, a 2016 figure), so it is stale and was not used. Elbit's career page (HTTP 403) and TASE (empty response) were not read.

### Ratings changed

- Jerusalem software: new hub, present → **strong** on il-hotzvim and il-mobileye (two employer-stated claims about named employers with a major site); it is not a headcount.
- Haifa computer science: present, now with three claims (il-intel, il-elbit, il-mobileye); not upgraded because Intel is shrinking and the Elbit and Mobileye claims do not say they hire computing graduates in Haifa.
- Unchanged: Tel Aviv software dominant, finance present; Haifa logistics present.

### Standing

Tel Aviv software [5, 5, 4] and finance [5, 2, 1]; Haifa cs [3, 2, 1], logistics [4, 2, 1]; Jerusalem software [3, 2, 1]. See brief §3.

### Italian

All new sentences translated, numbers kept.

### Gaps (also in the record)

No work-permit, Hebrew or entry-pay evidence; no Tel Aviv share of high-tech jobs; Bank of Israel supervised-banks list behind a bot check; no city GDP or rent; Haifa wage not in the English release.

## Turkey (P77)

Claims 9 → 18, hubs 4 → 4. Metrics: population 4 of 4 hubs (province, area region); GDP 3 of 4 (Istanbul, Ankara, Izmir; Bursa's total was not in any report read); no wage (none read) and no rent (Numbeo HTTP 429). The nine existing claims are unchanged. Earlier-session notes about Turkish Airlines and Koç rank were not used as they stood: the Koç figure was re-read (the note's "rank 53" was wrong).

| Claim | Source read, and what it says | Status |
|---|---|---|
| tr-gfci | GFCI 40 main table (pypdf): "Istanbul 89 658 101 648"; Dubai 9, Abu Dhabi 13, Riyadh 46, Doha 52, Kuwait City 60, Bahrain 74, Tel Aviv 94 | CONFIRMED |
| tr-gser | Startup Genome, Istanbul's Tech Ecosystem By the Numbers: "now ranked #3 among emerging ecosystems globally. Fueled by a 423% funding surge in 2024"; "#5 European Ecosystem in Affordable Talent"; "Top 10 European Ecosystem in Funding" (the latter two in the 2024 edition text on the same page) | CONFIRMED (the 2026 GSER entry for Istanbul was not read) |
| tr-koc | Fortune page parsed (script): HQ Istanbul, employees 120,219, revenues $69,742M, 2026 rank 203, page updated 16/09/2026 | CONFIRMED |
| tr-pop | BirGün: "Istanbul's population increased by 52,451 ... to 15,754,053 ... 18.3%"; "Ankara with 5,910,320, İzmir with 4,504,185, Bursa with 3,263,011"; total 86,092,168 (BTA, same release); TurkStat notice confirms publication on 9 Feb 2026 | CONFIRMED (via press) |
| tr-gdp | Capital (Turkish): "İstanbul 13 trilyon 10 milyar 693 milyon lira ... yüzde 29,2"; "Ankara 4 trilyon 672 milyar 844 milyon lira ... yüzde 10,5"; "İzmir 2 trilyon 562 milyar 758 milyon lira ... yüzde 5,7"; top five 53.0% (Türkiye Today, same release) | CONFIRMED (via press); values rounded to TRY 0.1 billion in the record |
| tr-gdppc | Habertürk table, per head in dollars: İstanbul 24 452, Kocaeli 24 031, Ankara 24 031, İzmir 16 949, Bursa 15 014 (13th) | CONFIRMED (via press) |
| tr-tusas | TUSAŞ contact page: "Fethiye District, Havacılık Avenue No:17 ... Kahramankazan Ankara"; "TUSAS AR-GE Binası ODTÜ Teknokent, ANKARA"; "İTÜ ARI TEKNOKENT" in Istanbul; university-industry programme names (LIFT UP, HANGAR) on the collaboration page | CONFIRMED |
| tr-esbas | Dünya: "2025 yılında ihracatını yüzde 12 artırarak 3,2 milyar dolar"; "ticaret hacmi ... 6 milyar 332 milyon dolar"; "bu yıl 23 bin 500 kişiyle çalıştı"; "İzmir ihracatının yüzde 24'üne imza" | CONFIRMED (undated text; chairman's statement) |
| tr-renault | Ekonomi Gazetesi, 15 Jan 2026: "387 bin 113 adet"; "336 bin 336"; exports "271 bin 994 adet" up "yaklaşık yüzde 14"; "yüzde 70'inden fazlasını ... ihraç" | CONFIRMED |

### Not used

- A 2012 Maritime Executive article on the Aegean Free Zone and Izmir port (stale); search-snippet figures for Alsancak port throughput, Tofaş headcount and ASELSAN headcount (no page read to confirm); Trading Economics and AA unemployment pages (conflicting, undated); ASELSAN's own site (empty to scripts); Turkish Airlines (no 2026 Global 500 rank on its Fortune page; the airline's site timed out).

### Ratings changed

- Istanbul software: gap → **strong** on Startup Genome's published ranking (a statistic, tag data); Istanbul finance now cites the GFCI as well. Roles overview unchanged (finance).
- Unchanged: Istanbul banking dominant; Ankara and Izmir finance strong; Bursa none (gap kept in the record).

### Standing

Istanbul finance [5, 2, 1] and software [5, 3, 2]; Ankara finance [4, 2, 1]; Izmir finance [3, 2, 1]; Bursa finance [2, 1, 1] (bank count only). See brief §3.

### Italian

All new sentences translated, numbers kept.

### Gaps (also in the record)

No dated labour-market, pay or rent figures; TurkStat tables read through the press; no Bursa GDP; no graduate programmes.

## Russia (P78)

Claims 8 → 13, hubs 2 → 2. Metrics: population 2 of 2 hubs (city), gdp 2 of 2 (city; different compilers, flagged in the record, brief and gaps); no wage (not used, periods differ) and no rent. The eight existing claims (advisories, sanctions, cards, entry, Moscow 2021, St Petersburg GRP) are unchanged; FCDO date re-checked through the content API (updated 2026-09-18, alert status "avoid all travel to the whole country"). No family rated; roles stay empty; the Atlas keeps the advisory prominent and recommends nothing.

| Claim | Source read, and what it says | Status |
|---|---|---|
| ru-gfci | GFCI 40 main table (pypdf): "Moscow 100 638 103 646"; "St Petersburg 104 628 110 632"; 117 centres | CONFIRMED |
| ru-g500 | Fortune pages parsed (script): Sberbank Moscow, 2026 rank 64, 291,795 employees; Rosneft Moscow, 109, 302,100; Lukoil Moscow, 239, 88,950; Gazprom "St. Petersburg", 89, 501,000; updated 16/09/2026 | CONFIRMED (Fortune's figures) |
| ru-msk-pop | Expert: "Численность населения города по состоянию на 1 января 2025-го составила 13,3 миллиона человек"; natural growth "увеличилось на 4,8 тысячи человек" in 2024 (mayor to the president) | CONFIRMED (a statement, rounded) |
| ru-msk-grp | Expert RA release 13 Nov 2024: "объём ВРП в 2023 году, по оценке города, составил 31,8 трлн рублей, что на 4,0% выше уровня 2022 года в сопоставимых ценах"; "порядка 20% ВРП всех российских регионов" | CONFIRMED (the city's own estimate) |
| ru-spb-pop | Centrum Balticum PDF (pypdf): "Population of St. Petersburg as on January 1, 2025 was 5 million 563 thousand people"; "Gazprom has moved its headquarters to the city from Moscow"; "since April 21, 2022, Federal Customs Service of Russia ... has temporarily stopped publishing the data related to external trade" | CONFIRMED |
| metrics | Moscow 13,300,000 and RUB 31,800 bn; St Petersburg 5,563,000 and RUB 10,908 bn (existing claim ru-spb, same PDF) | as above |

### Not used

- Rosstat (English and Russian pages returned nothing to scripts); Moscow pay (RUB 180.86 thousand, 2025, a Rosstat series on StatBase) and St Petersburg pay (RUB 117.2 thousand for 11 months of 2025, Petrostat via dp.ru): read, but not entered as metrics because the periods differ; Statista's 2022 GRP of RUB 28.5 trillion (older); world-population-review figures (aggregator); search-engine summaries.

### Ratings changed

None. Demand stays gap in both hubs by design.

### Standing

Moscow finance [5, 2, 1] and St Petersburg finance [4, 2, 1], from the GFCI and the size of the cities; explicitly not a recommendation (see brief).

### Italian

All new sentences translated, numbers kept.

### Gaps (also in the record)

Rosstat's own figures; pay and rent on one basis; study and work rules; Italian advice page; sanctions status of named employers.
