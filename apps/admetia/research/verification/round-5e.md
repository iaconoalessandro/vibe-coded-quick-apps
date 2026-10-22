---
title: "Verification round 5e: Atlas deepening — Singapore, Hong Kong, China, Japan, South Korea, Taiwan, Australia, New Zealand, Malaysia, Thailand, Vietnam"
last_researched: 2026-10-03
scope: Log of every claim and metric added or changed on 3 October 2026 in data/atlas/sg.js, hk.js, cn.js, jp.js, kr.js, tw.js, au.js, nz.js, my.js, th.js and vn.js, with the source read and what it says, plus every rating changed. One section per country under its P number (P35, P66, P67, P64, P65, P68, P62, P63, P69, P70, P71). Information only.
confidence: high for statistics read on official pages or PDFs; medium for standing steps, which are judgements from published indices (GFCI 40, Startup Genome GSER 2026); lower where a claim rests on a company's own statement.
review_by: 2027-03-31
---

# Verification round 5e (3 October 2026)

Method: `curl` with a browser user agent plus `pypdf` and HTML stripping for official pages and PDFs (so the figure was read in the page text, not in a search summary); WebFetch where it worked. Pages that refused automated access are named in each country's gaps. Rankings: **GFCI 40** (Z/Yen and Long Finance, 16 Sep 2026, PDF read, tables 1 and 9) and **Startup Genome GSER 2026** (ecosystem pages, read as text). Metrics follow the brief: one source and one kind of area per metric per country; `rent` is Numbeo (crowd-sourced, tag anecdotal) unless an official series is named.

Status vocabulary as in earlier rounds: CONFIRMED (read on the page), PARTLY CONFIRMED, LIBRARY, STILL UNVERIFIED.

## P35 Singapore (data/atlas/sg.js): 16 → 23 claims, 1 hub

**Rating changes.** None re-rated. New claims added to the finance rating (sg-gfci), software (sg-gser), logistics (sg-imc) and banking (sg-dbs); levels unchanged (finance, IT, logistics dominant; software, banking strong).

| Claim or metric | Source read, and what it says | Status |
|---|---|---|
| sg-gfci | GFCI 40 (16 Sep 2026) table 1: Singapore rank 4, rating 755 (Hong Kong 3, 756); table 9 Asia/Pacific: Hong Kong, Singapore first two; fintech: "Hong Kong is in top position followed by New York, Shenzhen, Singapore, Shanghai, and London" | CONFIRMED |
| sg-gser | startupgenome.com/ecosystems/singapore: "Singapore #8 Global Startup Ecosystem #2 Asia" | CONFIRMED |
| sg-dbs | DBS Annual Report 2025: "a presence in 19 markets. Headquartered and listed in Singapore"; "Total assets SGD 897 billion" | CONFIRMED |
| sg-sea | Sea Q4 2025 results release: "global technology company founded in Singapore in 2009"; Shopee "the largest pan-regional e-commerce platform in Southeast Asia, Taiwan, and Brazil" | CONFIRMED (company statement) |
| sg-imc | MPA release 13 Jan 2026: 35 maritime companies opened or expanded, "more than 200 international shipping groups"; "retained its top ranking in the Xinhua-Baltic International Shipping Centre Development Index"; DNV-Menon "world’s leading container port" | CONFIRMED |
| sg-ges | SMU 2025 GES annex: gross monthly median S$4,600 (Business Management), S$4,500 (Economics), S$4,350 (Accountancy), S$5,400 (Information Systems); salaries "pertain only to full-time permanently employed graduates" | CONFIRMED |
| sg-degree | MOM Labour Force 2025: degree holders median S$9,038 vs S$5,775 all; PMET resident unemployment 2.8% | CONFIRMED |
| metric pop | population.gov.sg: "6.11 million as at June 2025" (total population) | CONFIRMED |
| metric gdp | MTI Economic Survey 2025 p.4: GDP at current market price S$789.5 billion | CONFIRMED |
| metric wage | MOM Labour Force 2025 §5.1: nominal median gross monthly income of full-time employed residents S$5,775 (employer CPF included, per Chart 16 title) | CONFIRMED |
| metric rent | Numbeo, 1-bed city centre S$3,804.35, page dated 2 Oct 2026 | crowd-sourced (anecdotal) |

Not read: Temasek (403 access denied), GIC, OCBC, UOB, Grab headcount.

## P66 Hong Kong (data/atlas/hk.js): 7 → 13 claims, 1 hub

**Rating changes.** IT: not rated → *present* (hk-cx: Cathay Pacific lists a Digital and IT graduate trainee track; one named employer with its HQ in Hong Kong). Finance dominant and logistics strong unchanged, with hk-gfci added to the finance rating.

| Claim or metric | Source read, and what it says | Status |
|---|---|---|
| hk-gfci | GFCI 40 table 1: Hong Kong rank 3, rating 756 (London 757); table 9 Asia/Pacific, Hong Kong first; fintech "Hong Kong is in top position" | CONFIRMED |
| hk-hkex | HKEX Market Statistics 2025: "Number of listed companies 2,686"; market capitalisation HK$47,392.5 bil; IPO funds raised HK$285,842.7 mil (2024: 87,974.8); 119 newly listed | CONFIRMED |
| hk-gser | Startup Genome GSER 2025 Top 40 key findings: "Hong Kong made the most significant improvement … moving up from the Emerging Ecosystems ranking in 2024 to #27 globally this year"; the 2026 top-40 page does not name Hong Kong | CONFIRMED (2025 edition) |
| hk-aia | AIA Annual Report 2025: "largest independent publicly listed pan-Asian life insurance group … presence in 18 markets"; "total assets of US$345 billion as of 31 December 2025"; "stock codes 1299 (HKD counter)" | CONFIRMED (company statement; headquarters not stated in the text read, so not claimed) |
| hk-cx | Cathay careers: "36-month Cathay Cargo Graduate Trainee Programme"; "dedicated fleet of 20 freighter aircraft serving 46 destinations"; tracks Cargo, Digital & IT (HK & GBA), Engineering, Legal | CONFIRMED |
| hk-wage / metric wage | C&SD release 23 Mar 2026: median monthly wage of employees May–June 2025 $21,200 (+3.5%); percentiles $11,000, $15,300, $33,000, $51,300 | CONFIRMED |
| metric pop | C&SD release 14 Aug 2025: "provisional estimate of the Hong Kong population was 7 527 500 at mid-2025" | CONFIRMED |
| metric gdp | C&SD Four Key Industries PDF (Dec 2025): GDP 2024 3,112,200 (HK$ million) | CONFIRMED |
| metric rent | Not read: Numbeo returned HTTP 429 | OMITTED |

Not used: SFC licensed-person count (50,924, seen only in a trade-press summary); Cathay headcount (search summary only); HSBC, Standard Chartered, Hang Seng, BOCHK pages (script-rendered or no data).

## P67 China (data/atlas/cn.js): 14 → 33 claims, 9 hubs

Metrics are for the whole municipality (`area: 'region'`); wage is the average annual wage of urban non-private units ÷ 12 (basis: mean) where the city's own release was read. Brief: research/countries/cn-china.md.

**Rating changes.** Shanghai: finance strong (unchanged, now with cn-shgdp and cn-gfci); logistics not rated → *strong* (cn-sh-port: 55.06 million TEU in 2025); IT not rated → *strong* (cn-shgdp: software and IT services 713.99 billion yuan, up 15.3%). Beijing: finance, IT and software not rated → *strong* (cn-bj-fin, cn-bj-ai, cn-gser); AI not rated → *dominant* (cn-bj-ai, data: 209 large models, nearly a third of the national total). Shenzhen: IT, software and AI strong (unchanged); finance and logistics not rated → *strong* (cn-sz-econ: financial industry 526.16 billion yuan, port 35.41 million TEU). Guangzhou: logistics strong (unchanged); finance not rated → *strong* (cn-gz-econ, cn-gfci). Hangzhou: IT and software not rated → *strong* (cn-hz-econ, cn-gser). Suzhou, Wuhan, Chongqing, Chengdu: still not rated (the bulletins give output, not graduate hiring); Standing only.

| Claim or metric | Source read, and what it says | Status |
|---|---|---|
| cn-gfci | GFCI 40 (16 Sep 2026) table 1 and table 9: Shanghai 5, Shenzhen 8, Beijing 16, Guangzhou 28, Chengdu 34, Hangzhou 59, Wuhan 66; Asia/Pacific top three Hong Kong, Singapore, Shanghai; Suzhou and Chongqing not listed | CONFIRMED |
| cn-gser | startupgenome.com GSER 2026: Beijing #6 (#1 Asia), Shanghai #11 (#4 Asia), Shenzhen #19 (#7 Asia); Top 40 page: Hangzhou #28, Guangzhou #38 | CONFIRMED |
| cn-sh-port | Shanghai bulletin 2025: port 55.06 million TEU, up 6.9%; transhipment share 53.0%; Pudong and Hongqiao 135.1 million passengers | CONFIRMED |
| cn-bj-ai, cn-bj-fin | Beijing bulletin 2025: 209 large models filed; R&D of key enterprises 429.88 billion yuan; deposits 27.1 trillion, loans 12.3 trillion yuan | CONFIRMED |
| cn-bj-fortune | Beijing government, 7 Aug 2025: "47 companies listed—more than Tokyo (26) and New York (14) combined" | CONFIRMED (2025 list; the 2026 sentence rests on Fortune's release, not re-read here) |
| cn-xiaomi | mi.com/global/about: "Xiaomi Smart Factory｜Beijing", "Xiaomi Auto Factory｜Beijing" | CONFIRMED (company statement) |
| cn-tencent | tencent.com about: "Founded in 1998 with its headquarters in Shenzhen, China" | CONFIRMED |
| cn-huawei | huawei.com/en/contact-us: "Huawei HQ Huawei Base, Bantian, Longgang District, Shenzhen, China"; corporate-information: "approximately 213,000 employees … more than 170 countries and regions … 100% privately owned by employees" | CONFIRMED (company statement; two pages) |
| cn-sz-econ | Shenzhen gazette bulletin 2025: financial industry 526.16 billion yuan (+12.1%), software and IT 524.47 billion (+10.3%), port 35.41 million TEU | CONFIRMED |
| cn-gz-econ | Guangzhou bulletin 2025: finance 322.10 billion yuan (+7.0%), port 28.05 million TEU, Baiyun 83.59 million passengers, 46.3% of large-industry added value | CONFIRMED |
| cn-hz-econ | Hangzhou Daily text of the bulletin: digital-economy core 678 billion yuan, 29.5% of GDP; software and IT revenue 1,511.6 billion (+13.5%); finance 274.1 billion | CONFIRMED (republication of the bulletin) |
| cn-su-trade, cn-wh-econ, cn-cq-soft, cn-cd-econ | Suzhou, Wuhan bulletins; Chongqing statistics director's reading of the bulletin (12371.gov.cn); Chengdu bulletin text (Sina Finance) | CONFIRMED (Chongqing and Chengdu through republications) |
| cn-wage-nbs | NBS 15 May 2026: urban non-private units 129,441 yuan, +4.3%; city releases: Shenzhen 191,367 (24 Jul 2026), Guangzhou 166,790 (9 Jul 2026), Suzhou 146,353 (25 Jun 2026), Chengdu 131,874 (Chengdu Bendibao quoting the bureau, 8 Jul 2026) | CONFIRMED; Chengdu secondary |
| cn-wage-sector | NBS 15 May 2026, table 2: information, software and IT 248,752; finance 211,164; manufacturing 113,594; science and technical services 182,064 | CONFIRMED |
| cn-labour | NBS 16 Jul 2026: H1 2026 urban surveyed unemployment 5.2%; June 5.0%; 31 large cities 5.1%; ages 30–59 4.1% | CONFIRMED |
| metric pop | City bulletins 2025, year-end resident population: Shanghai 24,854,100; Beijing 21.8 million; Shenzhen 18,248,500; Guangzhou 19,101,000; Hangzhou 12.7 million; Suzhou 13,047,700; Wuhan 13,861,900; Chengdu 21,535,000 (Sina republication); Chongqing 31,872,600 (Chuanguan News quoting the Chongqing government site: "常住人口达3187.26万人", down 32,100) | CONFIRMED; Chongqing and Chengdu secondary (new: Chongqing) |
| metric gdp | The same bulletins, preliminary 2025 GDP (billion yuan): Shanghai 5,670.871; Beijing 5,207.34; Shenzhen 3,873.18; Guangzhou 3,203.946; Hangzhou 2,301.1; Suzhou 2,769.51; Wuhan 2,214.735; Chengdu 2,476.36; Chongqing 3,375.793 (Yicai: "实现地区生产总值33757.93亿元，增长5.3%"; changed from the rounded 3,370 of the portal) | CONFIRMED; Chongqing secondary |
| metric wage | Shenzhen 191,367 ÷ 12 = 15,947; Guangzhou 166,790 ÷ 12 = 13,899; Suzhou 146,353 ÷ 12 = 12,196; Chengdu 131,874 ÷ 12 = 10,990 (new). Not read: Shanghai, Beijing, Hangzhou, Wuhan, Chongqing | CONFIRMED for 4 hubs; Guangzhou source URL changed from http to https (it failed the schema check) |
| metric rent | Numbeo 1-bed city centre, Oct 2026 (via a text proxy; direct access blocked): Shanghai ¥7,047.62; Beijing ¥6,280.00; Shenzhen ¥5,095.38; Guangzhou ¥3,611.11; Hangzhou ¥4,156.36; Suzhou ¥3,035.00; Wuhan ¥2,325.00; Chongqing ¥2,806.67; Chengdu ¥3,143.64 | crowd-sourced (anecdotal) |

**Metrics coverage:** pop 9/9, gdp 9/9, wage 4/9, rent 9/9.

Not used: a Hangzhou 2025 non-private average wage of 168,604 yuan that appeared only in a search summary; the national youth (16–24) unemployment rate of 14.9% for June 2026 (search summary only). Pages that did not load or give the needed fact: Alibaba (no headquarters stated), BYD, Ping An, ICBC, China Merchants Bank, the Chongqing and Chengdu bureaus' own sites, the Sichuan statistics site.

## P64 Japan (data/atlas/jp.js): 12 → 25 claims, 6 hubs

Brief: research/countries/jp-japan.md. Metrics: pop is the city (MIC resident register, Tokyo = 23 special wards summed by Admetia); gdp and wage are the prefecture (`area: 'region'`); rent is Numbeo.

**Rating changes.** Nagoya logistics: not rated → *strong* (jp-nagoya-port, data: the port authority says it is Japan's largest by total cargo, 156.71 million tons in 2024). All others unchanged (Tokyo finance dominant, business strong; Tokyo banking strong). No other family could be supported: the employer pages for banks and electronics makers did not load.

| Claim or metric | Source read, and what it says | Status |
|---|---|---|
| jp-pref-gdp / metric gdp | Cabinet Office prefectural accounts, soukatu1.xlsx, fiscal 2023 (¥ million): Tokyo 125,018,533; Aichi 46,091,073; Osaka 44,992,432; Kanagawa 37,331,308; Fukuoka 21,238,732; Kyoto 11,510,399; Yokohama City 15,213,000; Nagoya City 15,021,657 | CONFIRMED |
| jp-wage-pref / metric wage | MHLW wage survey 2025, dl/11.pdf: national 340.6 thousand yen, "four prefectures above" (Tokyo, Kanagawa, Aichi, Osaka), Tokyo 418.3; the other values are the data series of figure 8 in zuhyo.xlsx (chart XML): Kanagawa 368.6, Aichi 341.6, Kyoto 337.4, Osaka 348.9, Fukuoka 314.3 | CONFIRMED (chart-read: figure 8 values taken from the chart's embedded data; national and Tokyo values cross-checked against the text) |
| jp-startpay | MHLW 2025, dl/10.pdf table 10: university 262.3, graduate school 299.0, men 264.9, women 259.7 (thousand yen), +5.6% | CONFIRMED |
| jp-grad-rate | MHLW press release (as of 1 Apr 2026): university 98.0% (no change), junior college 97.4% | CONFIRMED |
| jp-calendar | Cabinet Office press conference summary, 24 Mar 2026: publicity from 1 March, selection from 1 June, formal offers from 1 October, as usual for the 2027 cohort | CONFIRMED |
| jp-gfci | GFCI 40 table 1: Tokyo 6 (753), Osaka 20 (739); table 9 Asia/Pacific (Tokyo 4th, Osaka 8th); associate centres: Fukuoka 111 assessments, mean 690 | CONFIRMED |
| jp-gser | startupgenome.com/ecosystems/tokyo: "#12 Global Startup Ecosystem #5 Asia"; "#3 Asia Ecosystem in Funding Momentum"; "#5 Asia Ecosystem in AI-Native Cluster"; "Top 10 Global Ecosystem in Talent Strength" | CONFIRMED |
| jp-fortune | Beijing government page: Beijing 47, "more than Tokyo (26) and New York (14) combined" | CONFIRMED (2025 list; second place inferred from the 47 vs 26 vs 14 figures read; the 2026 ordering is not used) |
| jp-toyota | global.toyota profile: head office 1 Toyota-cho, Toyota City; Tokyo Head Office 1-4-18 Koraku, Bunkyo; employees 73,133 (consolidated 390,927) at 31 Mar 2026 | CONFIRMED |
| jp-nissan | nissan-global.com profile: registered head office Takara-cho, Kanagawa-ku; headquarters 1-1 Takashima, Nishi-ku, Yokohama | CONFIRMED |
| jp-nintendo | nintendo.co.jp profile (Japanese): 本社 京都市南区上鳥羽鉾立町11-1; consolidated 8,666, parent 3,084 (end March 2026) | CONFIRMED |
| jp-sumitomo | sumitomocorp.com: "dual head office structure with one in Tokyo and the other in Osaka" (1970) | CONFIRMED |
| jp-nagoya-port | port-of-nagoya.jp: "largest port in Japan in terms of total cargo throughput, which reached 156.71 million tons in 2024" | CONFIRMED |
| metric pop | MIC xlsx 1 Jan 2026 (total incl. foreign residents): Yokohama 3,753,315; Nagoya 2,310,721; Kyoto 1,369,750; Osaka 2,798,782; Fukuoka 1,620,853; Tokyo 23 wards 9,796,723 (sum of 23 rows; the Metropolis is 14,077,553) | CONFIRMED |
| metric rent | Numbeo 1-bed city centre, Oct 2026, via a text proxy: Tokyo ¥202,375; Osaka ¥110,666.67; Nagoya ¥83,650; Yokohama ¥185,000; Fukuoka ¥75,627.04; Kyoto ¥89,152.51 | crowd-sourced (anecdotal) |

**Metrics coverage:** pop 6/6, gdp 6/6, wage 6/6, rent 6/6.

Not read or not used: employer pages for MUFG, SMBC, Mizuho, Nomura, Sony, Panasonic, Kyocera, Omron, Denso, Hitachi, Daikin, Keyence (not found, access denied or no address); Startup Genome pages for Osaka, Fukuoka, Nagoya, Kyoto (no content); Yokohama port statistics; JPX listing counts.

## P65 South Korea (data/atlas/kr.js): 9 → 17 claims, 4 hubs

Brief: research/countries/kr-south-korea.md. Metrics: pop is the city (2025 register-based census, thousands); gdp and wage are the region (`area: 'region'`; Pangyo uses Gyeonggi Province); rent is Numbeo.

**Rating changes.** Seoul finance: not rated → *strong* (kr-gfci, kr-gfci40, kr-grdp: GFCI 7th; 7.0% of a ₩575.0 trillion GDP); Seoul business: not rated → *strong* (kr-grdp: 33.0% of national services output); Seoul banking stays not rated (Shinhan's address is the only named employer read, listed without a banking rating). Busan logistics dominant and Pangyo IT and software strong unchanged. Incheon: still not rated (stated in the gaps). `knownFor` and summary updated from "eighth" (GFCI 39, March 2026) to "seventh" (GFCI 40, September 2026); the older claim kr-gfci is kept, as it is true for its date.

| Claim or metric | Source read, and what it says | Status |
|---|---|---|
| kr-gfci40 | GFCI 40 table 1: Seoul 7 (752), Busan 22 (737); table 9 Asia/Pacific: Seoul 5th, Busan 9th; associate centre Incheon, 96 assessments | CONFIRMED |
| kr-gser | startupgenome.com/ecosystems/seoul: "Seoul #9 Global Startup Ecosystem #3 Asia"; "#4 Global Ecosystem in Funding Momentum"; "#4 Asia Ecosystem in AI-Native Cluster"; "Top 10 Global Ecosystem in Talent Strength"; Busan page: "#71-80 Emerging Startup Ecosystem #26-30 Asia" | CONFIRMED |
| kr-grdp / metric gdp | Statistics Korea 2024 regional income (provisional), press release PDF (82 pages, read in full text): GRDP (trillion won) national 2,560.8; Seoul 575.0 (22.5%); Busan 121.1; Incheon 125.6; Gyeonggi 651.4; Seoul services 92.4% of output, 33.0% of national services; finance and insurance 7.0% of Seoul's GRDP | CONFIRMED (Seoul's finance share: from the text "금융·보험업(7.3%→7.0%)" in the Seoul section) |
| kr-wage / metric wage | MOEL press release 30 Sep 2026 (PDF read): April 2026 total wage per regular worker: national 4,294; Seoul 4,852 (113.0); Busan 3,741 (87.1); Incheon 3,899 (90.8); Gyeonggi 4,309 (100.4) thousand won; Seoul finance and insurance 10,170 thousand | CONFIRMED |
| kr-pop / metric pop | Statistics Korea 2025 census release (register-based, 1 Nov 2025), table 5 and the city table: Seoul 9,315; Busan 3,235; Incheon 3,094; Seongnam city 894 (thousand) | CONFIRMED (the Seongnam row read in the city table of the full report) |
| kr-grad | MoE and KEDI release on 2024 graduates: 69.5% (70.3% before); universities 62.8%, junior colleges 72.1%, graduate schools 82.1%; social sciences 69.0%, engineering 70.4%; health-insurance payroll 87.0% of the employed | CONFIRMED |
| kr-shinhan | shinhangroup.com footer: "Shinhan Financial Group 20, Sejong-daero 9-gil, Jung-gu, Seoul" | CONFIRMED (address on the company's site) |
| kr-sbio | samsungbiologics.com footer: "300, Songdobio-daero, Yeonsu-gu, Incheon" | CONFIRMED (address on the company's site) |
| metric rent | Numbeo 1-bed city centre via a text proxy: Seoul ₩1,187,802.33 (page dated 4 Oct 2026); Busan ₩965,714.29; Incheon ₩804,679.21 (2 Oct 2026). Seongnam: no page | crowd-sourced (anecdotal); Pangyo omitted |

**Metrics coverage:** pop 4/4, gdp 4/4, wage 4/4, rent 3/4.

Not read or not used: KB, Hana, Hyundai, Samsung Electronics, Naver, NCSOFT, Celltrion, HMM pages (no content or no address); Korea Exchange listing data; a Korean graduate starting-pay statistic and recruiting calendar.

## P68 Taiwan (data/atlas/tw.js): 7 → 11 claims, 3 hubs

Brief: research/countries/tw-taiwan.md. Metrics: pop and wage are the city (`area: 'city'`); no GDP (none found); rent is Numbeo.

**Rating changes.** None. Taipei finance and banking stay dominant (tw-tpe, now with tw-gfci in its standing). Hsinchu and Taichung stay not rated: the science parks' own statistics give firms and staff, not hiring by role, and no employer page stating a Hsinchu or Taichung address could be read (TSMC's profile gives no address; MediaTek and the financial groups' pages did not load).

| Claim or metric | Source read, and what it says | Status |
|---|---|---|
| tw-gfci | GFCI 40 table 1: Taipei 42, rating 717 (previous 51, 698), up 9 | CONFIRMED |
| tw-wage-county / metric wage | DGBAS release 25 Nov 2025 (PDF read), annual total pay of full-time Taiwanese employees by workplace county (10,000 NT$), 2024 mean; median: total 77.6; 58.5; Taipei 94.7; 73.5; Taichung 67.3; 51.7; Hsinchu County 100.3; 73.6; Hsinchu City 129.8; 90.2. Monthly figures = annual ÷ 12: Taipei 78,917; Hsinchu City 108,167; Taichung 56,083 | CONFIRMED (by workplace location; excludes foreign and part-time workers) |
| tw-newgrad | Ministry of Labor, 2024 new-entrant pay: mean NT$37,000 (+6.4%), university NT$34,000, graduate school NT$52,000; median NT$33,000 (graduate school 49,000) | CONFIRMED (page in Chinese; rounded to NT$1,000 in the source) |
| tw-pop / metric pop | DGBAS release on usual residents at 1 January 2026 (PDF read): Taipei 2,441; Taichung 3,076; Hsinchu City 509; Hsinchu County 675; national 23,710 (thousand) | CONFIRMED |
| metric rent | Numbeo 1-bed city centre via a text proxy: Taipei NT$32,250 (page dated 4 Oct 2026); Taichung NT$12,700 (2 Oct 2026); Hsinchu: no Numbeo page | crowd-sourced (anecdotal); Hsinchu omitted |
| metric gdp | Not found: no GDP by city or county on a DGBAS page; search results said the office does not publish one (a Wikipedia-derived remark, not used as a claim) | OMITTED |

**Metrics coverage:** pop 3/3, gdp 0/3, wage 3/3, rent 2/3.

Not read or not used: TSMC (profile page has no address), MediaTek, Cathay, Fubon, CTBC, Foxconn, Taiwan Stock Exchange pages; Startup Genome Taiwan pages (none exist at the guessed addresses); any Taiwanese graduate recruiting calendar.
