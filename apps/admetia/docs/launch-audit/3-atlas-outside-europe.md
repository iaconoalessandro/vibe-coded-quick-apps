# Audit 3: Atlas geography and labour markets outside Europe

Scope: US, CA, JP, KR, CN, HK, TW, SG, MY, TH, VN, AU, NZ, AE, SA, QA, KW, OM, IL, TR, RU.
Files read: `data/atlas/<cc>.js` for these 21 countries (every hub, rating, employer and claim, through a
dump script), the matching `research/countries/*.md` briefs (Japan in full, the others by section),
`research/places/beyond-europe.md` and `research/places/gulf-and-central-eastern-europe.md`.
Read-only audit, 5 October 2026.

## Executive summary

1. **The rating rule is applied backwards.** The rule says strong or present can rest on named employers
   with an HQ or major site. Many records instead leave a family as `gap` because "no city statistic" was
   found, even where the record already names qualifying employers. Austin names Tesla, Oracle and Dell HQs
   (all from SEC filings) and is still 0/14. Hsinchu names TSMC (SEC 20-F) plus 160,000 science-park
   staff and is still 0/14. Kyoto names Nintendo and is still 0/14.
2. **29 hubs show a standing (for example "Osaka finance 4/3/2") for a family the same hub marks "not
   rated".** This contradicts itself on screen, and the standing claims would already justify at least
   "present".
3. **Embarrassing omissions in the flagship finance hubs.** New York investment banking is only
   "present". New York has no PE or AM rating. Singapore and Hong Kong rate only banking (no IB, AM or PE),
   although MAS reports S$6.07 trillion AUM. Boston has no AM rating (Fidelity, State Street, Wellington).
   Toronto has no AM or PE rating (Brookfield, CPP Investments, OTPP).
4. **No tech rating in Tokyo, Seoul, Taipei, Hsinchu, Osaka or Kyoto, and no AI rating in Hangzhou
   (DeepSeek, Alibaba).** The same goes for Microsoft (Seattle), Samsung (Suwon is not mapped), MediaTek
   and Alibaba: the "could not confirm HQ" excuses are disproved by SEC filings (MUFG, SMFG, KB, Shinhan,
   Woori, Alibaba, NetEase, UMC, ASE, Microsoft, OpenText, BHP, Woodside).
5. **Working-holiday visas are absent from the whole repository.** They are the most common way a young
   European actually works in AU, NZ, CA, JP, KR, TW and HK (UK: the Youth Mobility partners). So are the
   US J-1 intern/trainee, L-1 transfer and E-2 treaty-employee routes. All are basics.
6. **Legal and safety context is incomplete.** No file in scope mentions that same-sex relations are
   criminalised in the UAE, Saudi Arabia, Qatar, Kuwait, Oman and Malaysia, or that Russia designated the
   "LGBT movement" extremist in 2023. The Gulf file says no official source exists for alcohol and conduct
   rules, but the FCDO "local laws and customs" pages are exactly that.
7. **The Russia record misses the one sanction that hits a business or IT graduate directly.** EU
   Reg. 833/2014 Art. 5n bans EU persons from providing accounting, audit, business consulting, PR, IT
   consultancy, legal and engineering services to entities in Russia. Art. 5aa bans transactions with
   Rosneft and other Annex XIX firms, yet the record lists Rosneft as an employer.
8. **Citizenship-gated public-sector hubs are presented as opportunities.** Canberra is shown as
   management 5/2/1 (APS jobs need Australian citizenship under PS Act s22(8)). Washington DC's federal
   jobs need US citizenship. Ottawa and Adelaide defence have the same problem.
9. **Missing cities a European student will look for:** Waterloo, Suwon, Tainan and Kaohsiung,
   Minneapolis (already counted in a claim), Raleigh-Durham, Pittsburgh, San Diego, Denver, Salalah,
   Be'er Sheva, Thuwal (KAUST) and Ningbo. Also missing: Laem Chabang as a logistics rating for Chonburi.
10. **Language demand is unresearched for JP, KR, CN, TW, HK, TR, IL, TH and VN.** That is the first thing
    a non-tech student needs to know.
11. **Rent is missing for 35 of 75 hubs in scope**, including every Australian hub (and the AU gap note
    wrongly says a crowd-sourced rent is shown) and Hong Kong, where an official RVD series exists.
12. **14 hubs link no programmes.** MBA schools that the calculators already contain (Harvard, MIT Sloan,
    Wharton, Booth, Kellogg, Haas, UCLA, McCombs, Goizueta, Georgetown, CEIBS, Fudan, Guanghua) are not
    linked to their hubs, and neither is MIT MFin or Berkeley MFE.

Report path: this file.

---

## 1. CRITICAL: wrong or dangerously misleading

### 1.1 The evidence rule is inverted: hubs left white despite qualifying named employers already in the record
The rule in `data/atlas/index.js` and `docs/ATLAS-PROGRESS.md`: present needs one named employer with an HQ
or major site, and strong needs a statistic or two or more such employers. Records violate it in the
"too strict" direction:

| Hub | File:line | What the record already contains | What the rule allows now |
|---|---|---|---|
| Austin | `us.js:1074-1083`, claims `us-austin-tesla/-oracle/-dell` | Three HQs read from SEC 10-K filings (Tesla, Oracle, Dell). Metrics are empty. | business strong, software strong (Oracle and Dell are software and IT HQs), it strong |
| Hsinchu | `tw.js:49-57`, claims `tw-tsmc`, `tw-hsinchu` | TSMC HQ (SEC 20-F) plus an official figure of more than 600 companies and 160,000 staff | it **strong** on the statistic, cs present. TSMC is the world's largest chipmaker and leaving its home town white is the single most visible error on the Asia map. |
| Taichung | `tw.js:70-77` | Official CTSP figures: 219 firms, 51,827 staff | it present |
| Kyoto | `jp.js:153-163` | Nintendo HQ (employer-stated) | software present at minimum. Nintendo is a software company. |
| Yokohama | `jp.js:107-116` | Nissan global HQ | business present, management present |
| Osaka | `jp.js:59-69` | Sumitomo Corp head office, GFCI 20th | business present, finance present (GFCI ranking plus HQ) |
| Perth | `au.js:111-120` | Woodside HQ plus the WA mining statistic of 136,000 jobs | business strong (the statistic) |
| Canberra | `au.js:157-165` | APS statistic: 70,221 staff, 35.4% | management strong on the statistic, but see 1.4 on citizenship |
| Incheon (Songdo) | `kr.js:100-108` | Samsung Biologics HQ (employer-stated), Celltrion | business present |
| Seattle | `us.js:639-652` | Amazon at 49,000 staff in the city, but it, ai and cs are `gap` | it and ai strong (Amazon, plus Microsoft, see 1.2) |
| Tokyo | `jp.js:36-41` | it, software, ai, datasci all `gap`; the brief (`research/countries/jp-japan.md` §3) says "no source gives Tokyo's share of national software jobs" | Named HQs alone give strong (see §2.1 list). The Tokyo Metropolitan Government's "Industry and Employment in Tokyo" overview, already cited as `jp-tokyo`, has an information-and-communications chapter from the Economic Census; check it for the ICT share. |

Action: re-run every `gap` against the record's own `employers` and `claims` before adding anything new.
This is mechanical and should take one afternoon.

### 1.2 "Could not confirm the head office" excuses that a public SEC filing (or the company's own site) disproves
These self-declared gaps are shown to students as if the facts were unknowable. The records already use
SEC EDGAR as a source (Mizuho, Nomura, Sony, TSMC, Tesla, Oracle, Dell), so the same route works for:

- **`jp.js:207`**: "Mitsubishi UFJ, SMBC… not named because no head-office address could be confirmed".
  MUFG and Sumitomo Mitsui Financial Group both file Form 20-F with the SEC (Chiyoda-ku, Tokyo). Kyocera
  (Fushimi-ku, Kyoto), Omron (Shimogyo-ku, Kyoto) and Denso (Kariya, Aichi) state their head offices on
  their corporate profile pages. Takeda (20-F filer) has its registered head office in Chuo-ku, Osaka, and
  its global HQ in Tokyo.
- **`tw.js:121`**: "MediaTek's head office could not be confirmed". MediaTek's own site gives Hsinchu
  Science Park. UMC (20-F, Hsinchu Science Park), ASE Technology (20-F, Kaohsiung), Himax (20-F, Tainan)
  and Chunghwa Telecom (20-F, Taipei) are all SEC filers.
- **`cn.js:307`**: "Alibaba's own page does not give its headquarters". Alibaba Group's 20-F gives
  969 West Wen Yi Road, Yu Hang District, Hangzhou. NetEase (20-F, Hangzhou), Baidu, JD.com
  (20-F, Beijing), Trip.com and Bilibili (20-F, Shanghai) are all usable.
- **`kr.js` gaps**: "KB, Hana… did not load". KB Financial, Shinhan and Woori file 20-F (Seoul). KT
  (Seongnam), POSCO Holdings and LG Display file 20-F. Coupang files a 10-K (Songpa-gu, Seoul).
- **`sg.js:94`**: "Temasek, GIC, OCBC and UOB are not listed because no head-office… source". All four
  publish annual reports with Singapore addresses. Grab (20-F) is Singapore-headquartered.
- **`au.js:209`**: "BHP, Rio Tinto, ANZ, Atlassian, Canva… not listed". BHP's 20-F and annual report give
  171 Collins Street, Melbourne. ANZ's annual report gives 833 Collins Street, Melbourne. Woodside is a 20-F
  filer. Canva's HQ is Surry Hills, Sydney.
- **`us.js:1132`**: "Microsoft's filings" could not be read. Microsoft's 10-K is on EDGAR (One Microsoft
  Way, Redmond). State Street (10-K, Boston) and Fidelity (Boston) are the AM backbone of Boston.
- **`th.js:93`**: Bangkok Bank, SCB and PTT "not named". All are SET-listed with English annual reports
  giving Bangkok head offices. KBank's own site gives 400/22 Phahon Yothin Road.

### 1.3 Russia: the sanction that directly affects a graduate's job is missing, and Rosneft is listed as an employer
`ru.js` (summary, route `ru-eu-sanctions`, employers at Moscow) only says sanctions "bind all individuals
and organisations under EU jurisdiction" and "check before any dealings".

What the record leaves out:
- **Reg. (EU) 833/2014 Art. 5n** bans EU persons from providing the following to the Russian government or
  to legal persons established in Russia: accounting, auditing, bookkeeping and tax consulting; business
  and management consulting; PR; architecture and engineering; legal advisory; IT consultancy; advertising
  and market research; and (later packages) enterprise-management software.
- The Commission FAQ says these prohibitions "have general application, including on individuals".
- Art. 13 extends the regulation to every EU national anywhere in the world.

These are exactly the business, finance-consulting and IT families the Atlas rates. Source:
https://finance.ec.europa.eu/eu-and-world/sanctions-restrictive-measures/sanctions-adopted-following-russias-military-aggression-against-ukraine/frequently-asked-questions-sanctions-against-russia_en

The Moscow employer list names **Rosneft**. Rosneft is in Annex XIX of Reg. 833/2014 (the Art. 5aa
transaction ban on state-owned entities), so an employment contract with it is very likely a prohibited
transaction for an EU national. Remove it, or label it explicitly.

Also missing:
- On 30 Nov 2023 Russia's Supreme Court designated the "international LGBT movement" extremist.
- The FCDO Russia page covers this risk and the detention risk.
- Banking: beyond the card point, EU and Russian banks are largely cut off (SWIFT removals), so salary
  repatriation and receiving money from home are practical problems.

Make clear that Moscow and St Petersburg are deliberately not rated, not "not yet rated". Today they render
white like a data gap (the owner's gap list counts them as embarrassing), yet `ru.js:48` and `ru.js:88`
still carry finance standings of 5/2/1 and 4/2/1, which contradicts "this guide does not rate demand".

### 1.4 Citizenship-restricted public employers presented as graduate hubs
- **Canberra** (`au.js:157`) has management standing 5/2/1 on APS headcount. Public Service Act 1999
  s22(8): "An Agency Head must not engage… a person who is not an Australian citizen, unless the Agency
  Head considers it appropriate". Defence and intelligence roles also need a security clearance.
  https://www.apsc.gov.au/working-aps/information-aps-employment/guidance-and-information-recruitment/citizenship-aps
- **Adelaide** (`au.js:134`) is rated on 14,000 defence jobs (AUKUS at Osborne). These largely need
  Australian citizenship and clearances.
- **Washington DC** (`us.js:492`) is management strong partly on the federal workforce. The federal
  competitive service is restricted to US citizens (Executive Order 11935).
- **Ottawa** (`ca.js`) cites 194,000 public-administration jobs. The federal public service gives
  statutory preference to Canadian citizens (Public Service Employment Act s39).
- **Ankara** names Turkish Aerospace (TUSAŞ) and **Haifa/Jerusalem** name Elbit and Rafael. These defence
  primes require nationality or security clearance.

Each needs one line: "public-sector and defence jobs here are largely closed to non-citizens".

### 1.5 Same-sex relations and other criminal-law basics are never mentioned
Searching for `LGBT|same-sex|homosexual` across every in-scope atlas file, brief and places file returns
nothing. `research/places/gulf-and-central-eastern-europe.md:93` says: "I found no official source… I can
cite for dress, alcohol or social-conduct rules, so I leave them out." That is wrong. The FCDO "Local laws
and customs" section of each country page is an official source and states these rules, for example
https://www.gov.uk/foreign-travel-advice/united-arab-emirates/local-laws-and-customs.

The FCDO pages for the UAE, Saudi Arabia, Qatar, Kuwait, Oman and Malaysia state that same-sex relations
are illegal. Russia: the extremist designation in 1.3. They also cover:
- alcohol licensing and bans (Saudi Arabia, Kuwait);
- drug zero-tolerance with long sentences (UAE, Singapore, Malaysia, Japan);
- the UAE's prescription-medicine import rules, which catch students on ADHD medication.

These are practical, not editorial, and a student needs them before choosing a city.

### 1.6 Self-contradiction on screen: standing shown for a family marked "not rated" (29 hubs)
Each of these hubs has a `standing` entry for a family whose `demand` is `gap`:

- Melbourne software; Brisbane software; Perth business; Adelaide management; Canberra management.
- Hangzhou finance; Suzhou logistics; Wuhan finance; Chongqing it; Chengdu finance and it.
- Osaka finance and business; Yokohama business; Fukuoka finance and business; Kyoto business.
- Busan finance; Incheon business; Kuala Lumpur it; Wellington management and finance; Doha software.
- Moscow finance; St Petersburg finance; Riyadh software; Chonburi/EEC it; Bursa finance.
- Hsinchu it; Taichung it; Philadelphia software; Austin software; Ho Chi Minh City finance.

A student sees "Osaka, finance: Major (4) nationally" next to "Finance: not rated". Either derive at least
`present` from the same claims (they qualify), or suppress the standing. A unit test in
`tests/atlas-test.js` should forbid standing on a `gap` family.

### 1.7 Smaller factual and framing errors
- **`il.js:25`**: Tel Aviv's `knownFor` is "Where most foreign banks' representative offices in Israel
  are". This is the world top-five start-up ecosystem (the record's own `il-gser`). It reads absurdly.
  Suggested: "Israel's tech and start-up capital and its financial centre (TASE, Leumi, Hapoalim)".
- **`au.js:210`** says "rent is a crowd-sourced figure for the city centre", but no Australian hub has a
  `rent` metric at all.
- **New York IB rated only `present`** (`us.js:55`, on `us-cal`, a recruiting-calendar claim). New York
  is the world's IB centre, and the record's own `us-sifma` (197,300 securities jobs) and `us-gfci-ny`
  (GFCI #1) support dominant. Showing "present" next to Frankfurt or Madrid "dominant" is indefensible.
- **US Fortune 500 counts for New York differ in one record**: 62 (`us-fortune-ghp`, shown as the
  employer note at `us.js:41`) against 49 (`us-fortune-rp`). The `by` field explains this, but the
  on-screen employer note uses the higher, older count. Use one.
- **`th.js`** summary: "no official page read here offers students work rights". Thai law in fact bars
  student work. Also, the Royal Decree on Prohibited Occupations for Foreigners (B.E. 2563/2020) reserves
  accounting (except occasional internal audit) and other professions to Thais. This matters to accounting
  graduates and should be stated, not left as unknown.

---

## 2. MISSING basics a student will ask about

### 2.1 Named employers that justify ratings, hub by hub (the owner's main complaint)
Each name below is an HQ or major site, verifiable on the company's own site or SEC/ASX/SGX filings. With
two or more per family the rule gives strong; with one, present.

**Japan**
- **Tokyo, it/software/ai/datasci (strong):** Rakuten Group (Setagaya), LY Corporation (LINE Yahoo,
  Chiyoda), Mercari (Minato), SoftBank Corp (Minato), NTT Data (Koto), NEC (Minato), Fujitsu (Kawasaki,
  next door), Sony, Preferred Networks and Sakana AI (both AI, Tokyo). Google, Amazon and Microsoft have
  their Japan HQs in Tokyo. Startup Genome #12 is already a claim.
- **Tokyo finance sub-roles:**
  - ib: Nomura, Mizuho Securities, SMBC Nikko, MUFG Morgan Stanley, plus Goldman, JPMorgan and Morgan
    Stanley Tokyo offices.
  - am: GPIF (the world's largest pension fund, Minato), Nomura AM, Asset Management One.
  - pe: Japan Industrial Partners, Advantage Partners, Bain/KKR/Carlyle Tokyo.
  - consulting: the MBB and Big Four have Tokyo offices.
- **Osaka:** Panasonic (Kadoma), Keyence, Daikin, Takeda (registered office), Shionogi, Itochu (dual HQ),
  Resona Holdings, Osaka Exchange (JPX's derivatives market). This supports finance present and business
  strong.
- **Kyoto:** Kyocera, Murata (Nagaokakyo), Omron, Nidec, Shimadzu, Horiba, Rohm, SCREEN and Nintendo
  justify business strong, software present and cs present (Kyoto University).
- **Fukuoka:** Fukuoka Financial Group, Kyushu Electric, LY Corp's Fukuoka site (ex-LINE Fukuoka), the
  city's Startup Visa and Fukuoka Growth Next.
- **Nagoya:** Denso (Kariya), Aisin, Toyota Industries, Mitsubishi Heavy Industries' aerospace works,
  Chubu Electric. Add business and management.

**Korea**
- **Seoul (no finance object at all):**
  - finance: KB, Shinhan, Woori and Hana HQs; KRX (Busan HQ, Seoul market); Korea Investment Corporation
    (sovereign fund); MBK Partners (PE).
  - it: Coupang, Samsung SDS, LG CNS.
  - Note that the National Pension Service (the world's third-largest pension fund) is in Jeonju.
- **Missing hub, Suwon:** Samsung Electronics' HQ (Digital City), plus Giheung/Hwaseong/Pyeongtaek fabs.
  SK hynix is in Icheon.
- **Pangyo:** add Naver (Seongnam), Krafton and KT (Seongnam, 20-F).

**Taiwan**
- **Taipei it:** ASUS (Beitou), Pegatron, Chunghwa Telecom, Nvidia's planned Taiwan HQ (Beitou-Shilin),
  Microsoft and Google R&D (Google's largest hardware engineering site outside the US is in New Taipei),
  Acer and Foxconn HQs in New Taipei.
- **Taipei finance:** Cathay Financial, Fubon, CTBC, plus TWSE.
- **Hsinchu:** TSMC, MediaTek, UMC, Realtek, Novatek, and ITRI (research).
- **Taichung:** Micron's Taiwan DRAM fabs, TSMC Fab 15, Giant, Hiwin.
- **Missing hubs, Tainan and Kaohsiung:** the Southern Taiwan Science Park (TSMC Fab 18, 3 nm) and TSMC's
  Kaohsiung 2 nm fabs; Kaohsiung is Taiwan's main port; ASE HQ.

**China**
- **Hangzhou:** Alibaba, Ant Group, NetEase, Hikvision, Geely, and DeepSeek and Unitree (AI and robotics).
  Hangzhou AI should not be `gap`.
- **Beijing:** ByteDance, Baidu, JD.com, Meituan, Kuaishou, Xiaomi, Lenovo, Zhipu AI, Moonshot AI.
  - finance: ICBC, CCB, ABC and Bank of China HQs, CICC (IB), CIC (sovereign fund), PBoC, CSRC.
  - Add a finance object with banking dominant and ib strong.
- **Shanghai:** Bilibili, Trip.com, MiniMax, Tesla Gigafactory, SAIC.
- **Shenzhen:** Ping An, China Merchants Bank, Shenzhen Stock Exchange, BYD, DJI, ZTE. Shenzhen has no
  finance object.
- **Wuhan:** Dongfeng Motor (HQ), YMTC.
- **Chongqing:** Changan Automobile (HQ), Seres.
- **Chengdu:** Intel assembly/test, BOE, Texas Instruments.
- **Suzhou:** Suzhou Industrial Park (Bosch, Siemens, Samsung, Johnson & Johnson sites).

**Singapore and Hong Kong (finance sub-roles)**
- **Singapore:**
  - am: MAS Asset Management Survey 2024, S$6.07 trillion AUM, 1,298 licensed fund managers, S$1.39
    trillion alternatives.
  - pe: GIC and Temasek, plus the PE/VC part of alternatives.
  - ib: regional HQs of JPMorgan, Goldman, Citi and UBS.
  - This supports am dominant and pe strong.
  - Source: https://www.mas.gov.sg (Singapore Asset Management Survey 2024, July 2025).
- **Hong Kong:** HKEX (already a claim: HK$285.8bn of IPOs in 2025) justifies ib strong.
  - The SFC's Asset and Wealth Management Activities Survey gives AUM; use it for am.
  - The territory is Asia's second PE hub.
  - Hong Kong it: HKSTP and Cyberport.

**Gulf**
- **Dubai:** ib present (DIFC's 290 banks and capital-markets firms is already a claim); Careem; Emirates
  NBD; Majid Al Futtaim; Noon.
- **Abu Dhabi:**
  - ai: G42, Technology Innovation Institute (the Falcon models), MBZUAI.
  - pe: Mubadala, ADQ and ADIA. All are already named in the employers list but pe is `gap` (`ae.js:111`).
  - logistics: AD Ports, Etihad.
- **Riyadh (no finance object):**
  - finance: Saudi Exchange (Tadawul), Saudi National Bank, Al Rajhi.
  - finconsult: McKinsey, BCG, Bain, Oliver Wyman, Kearney and Strategy& offices, which drive the
    consulting boom the record mentions.
  - it: stc, Elm.
  - add pe/am from PIF.
- **Doha:** QNB (largest bank in the Middle East and Africa), Qatar Airways (logistics), Ooredoo (it).
- **Kuwait City:** Zain (telecom), Agility (logistics), KFH.
- **Muscat:** OQ, Omantel.

**Israel**
- **Tel Aviv:**
  - finance: TASE, Bank Leumi, Bank Hapoalim.
  - software: Wix, monday.com, Fiverr (all 20-F, Tel Aviv).
  - it: Google, Microsoft and Meta R&D in Tel Aviv and Herzliya.
- **Missing:** Herzliya Pituach, Petah Tikva (CyberArk) and Be'er Sheva (Gav-Yam cyber park).

**Turkey**
- **Istanbul it/software:** Trendyol, Getir, Insider, Dream Games, Turkcell (20-F).
- **Bursa:** Oyak Renault (already named) and Tofaş (Stellantis JV) support management and logistics
  present. The record's only standing there is finance 2/1/1 on 4,714 bank staff, which is the wrong
  family for a car city.

**Australia**
- **Melbourne:**
  - finance: NAB and ANZ HQs, AustralianSuper (largest super fund), the Future Fund (sovereign fund),
    UniSuper.
  - business: BHP HQ, Telstra.
  - software: REA Group, SEEK, Carsales.
  - This supports finance strong and am strong, not "present".
- **Sydney:** Atlassian and Canva for software.
- **Perth:** Wesfarmers, Fortescue, BHP and Rio Tinto iron-ore HQs.
- **Adelaide:** Santos HQ, BAE Systems Australia, Lot Fourteen (Australian Space Agency).

**United States**
- **Seattle:** Microsoft (Redmond). Expedia and Zillow add to software.
- **Boston:** Fidelity, State Street, Wellington, MFS, Bain Capital (am, pe); Boston Dynamics; MIT/CSAIL
  for ai and cs.
- **Chicago:** CME Group, Northern Trust, Morningstar; trading firms DRW, Optiver, IMC, Jump (no finance
  object today).
- **New York:**
  - ai: OpenAI, Anthropic and Google DeepMind offices, Meta.
  - pe: Blackstone, KKR, Apollo HQs.
  - am: BlackRock.
  - ib: Goldman Sachs, JPMorgan, Morgan Stanley, Citi HQs.
- **Austin:** add Apple (second-largest campus) and Samsung Austin Semiconductor.

**Canada**
- **Toronto:**
  - am and pe: Brookfield (40-F), CPP Investments, OTPP, OMERS.
  - ai: the Vector Institute and Cohere HQ.
- **Montreal:** CDPQ (am), Ubisoft Montreal (software).
- **Missing hub, Waterloo:** OpenText HQ (10-K), University of Waterloo co-op, and Google's
  Kitchener-Waterloo office. Startup Genome already counts "Toronto-Waterloo".

**Other**
- **Bangkok:** Agoda (its largest tech hub), KBTG (Kasikorn's tech arm), SCB 10X, LINE MAN Wongnai (it,
  software).
- **Chonburi/EEC:** Laem Chabang (Thailand's largest port, about 9 million TEU a year; verify with the
  Port Authority of Thailand) supports logistics strong. BYD Rayong, BMW Rayong and MG Chonburi support
  business.
- **Ho Chi Minh City:**
  - it: VNG, MoMo.
  - finance: Sacombank, ACB, HDBank.
- **Hanoi:** Viettel, VinGroup, and Samsung's Hanoi R&D centre (it).
- **Kuala Lumpur:**
  - finance: Maybank HQ (missing!), Public Bank, Bursa Malaysia, Khazanah (am).
  - it: Petronas Digital.
  - Cyberjaya shared-service centres (DHL IT Services, Shell's KL business service centre) are the
    realistic graduate entry for Europeans.

### 2.2 Working-holiday and youth-mobility routes: the whole repo is silent
Searching for `working holiday|Youth Mobility|International Experience Canada` returns zero hits anywhere
in `research/`, `data/` or `js/`. For a European aged 18 to 30 (35 for some nationalities) these are the
easiest way to work in the country, with no sponsor and no degree from there:

- **Australia, subclass 417 / 462**: most EU states plus the UK (UK nationals now up to 35).
  https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/work-holiday-417
- **New Zealand Working Holiday**: most EU states. Italy is 18 to 30 for 12 months; the UK is 18 to 35
  for 23 months.
- **Canada IEC (Working Holiday, Young Professionals, International Co-op)**: about 36 partner
  countries, most of the EU. 61,189 places in the 2026 season.
  https://www.canada.ca/en/immigration-refugees-citizenship/services/work-canada/iec.html
  The Young Professionals stream is a graduate-job route.
- **Japan, Korea, Taiwan, Hong Kong**: bilateral working-holiday schemes with many EU states.
- **UK passports**: the reciprocal Youth Mobility schemes with Australia, Canada, Japan, Korea, Taiwan,
  Hong Kong and New Zealand.

Where: a route step "Without studying here: working holiday" in `au.js`, `nz.js`, `ca.js`, `jp.js`,
`kr.js`, `tw.js` and `hk.js`, with an eligibility table by EU nationality in `beyond-europe.md`.

### 2.3 US routes for Europeans that are not OPT or H-1B
`research/countries/us-united-states.md:154` admits that intra-company transfers are "not covered".
Missing routes:
- **J-1 Intern** (within 12 months of graduation, up to 12 months) and **J-1 Trainee** (up to 18
  months): the standard route for a European graduate with a European degree. State Department:
  https://j1visa.state.gov/programs/intern and /trainee.
- **L-1**: join a bank or consultancy in London or Milan, then transfer to New York after one year with
  that employer. This is the common route for European finance and consulting graduates.
- **E-2 treaty employees**: Italian, French, German and other treaty nationals can work for an E-2
  company of their own nationality in the US.
- **O-1**: not for new graduates. Say so.

Without these, `us.js` "With a European degree only: a European master's does not open the US" is
misleading by omission.

### 2.4 Language realism (no primary claim in most records)
`jp.js:205`, `kr.js` gaps, `cn.js` gaps, `tw.js` gaps, `hk.js` gaps, `tr.js` gaps and `il.js` gaps all say
the language demanded by employers was "not researched". It is the first question for a non-tech student.

Minimum content, one claim each:
- **Japan:** most shinsotsu hiring in Japanese companies runs in Japanese (JLPT N2 or N1 expected).
  English-only routes are in foreign firms and tech (Rakuten's English policy, Mercari, the Tokyo offices
  of global firms). The bilingual job fair route (the Career Forum events in Boston, Tokyo and Osaka) is a
  well-known pipeline. Source: JASSO's employment guide for international students, or a JETRO survey of
  foreign-hiring firms.
- **Korea:** TOPIK level is part of the D-10 points and of most chaebol hiring. Name the TOPIK levels.
- **China:** HSK appears in the work-permit points (Category B).
- **Taiwan:** Chinese is already scored in the points test (`tw-points`); add employer reality.
- **Hong Kong:** Cantonese and Mandarin are expected in front-office roles serving mainland clients.
- **Thailand, Vietnam, Turkey:** local language is needed outside multinationals.
- **Israel:** Hebrew is needed outside R&D.

### 2.5 Graduate pay and rent where a student cannot compare
- **Entry pay missing:** KR, CN, MY, TH, VN, AE, SA, QA, KW, OM, IL, TR, NZ. Official sources exist:
  - Korea: MOEL / Korea Employers Federation starting-salary survey.
  - Malaysia: DOSM Graduates Statistics (median graduate wage by qualification).
  - New Zealand: Ministry of Education "Moving Places / Post-study outcomes" (median earnings by
    qualification).
  - Israel: CBS.
- **Rent missing for 35 of 75 in-scope hubs.** Quick official sources:
  - Hong Kong: Rating and Valuation Department, "Private Domestic: Average Rents by Class" (Class A,
    under 40 m², by region, monthly).
  - Australia: NSW Fair Trading Rent and Sales Report (median weekly rent, 1-bedroom flats, by LGA);
    Victoria DFFH Rental Report; equivalents in QLD, WA, SA and ACT.
  - Dubai: Dubai Land Department's rental index.
  - New Zealand: Tenancy Services market rent (it is by area and bedrooms, contrary to `nz.js` gaps).
  - Turkey: Endeksa / TCMB residential rent index.
- **Seoul:** pay (MOEL) is present; jeonse vs monthly-rent key money (a deposit of ₩5–10 million is
  normal) is unmentioned and is a real shock for students.

### 2.6 Daily-life basics missing for China and the Gulf
- **China (`cn.js` arrival):** the Great Firewall (a VPN is needed for Google, WhatsApp and LinkedIn
  alternatives); Alipay and WeChat Pay (foreign cards can now be linked; cash and foreign cards are rarely
  usable); residence registration with the local police within 24 hours (hotels do it).
- **Gulf:** the end-of-service gratuity is in the Gulf brief but not in `ae.js`. Also missing: the Ramadan
  working-hours reduction and the weekend (UAE: Saturday and Sunday since 2022; Saudi Arabia and Qatar:
  Friday and Saturday).

### 2.7 Studying there: notable campuses and programmes a European will look for (no programme links)
- **UAE:** MBZUAI (Abu Dhabi; fully funded MSc in AI, highly relevant to the computing calculator); NYU
  Abu Dhabi; Sorbonne Abu Dhabi; INSEAD Abu Dhabi campus; Khalifa University.
- **Saudi Arabia:** KAUST (Thuwal near Jeddah; fully funded MS in CS and AI).
- **Qatar:** Education City (Georgetown SFS-Q, Carnegie Mellon Qatar, Northwestern Qatar, HEC Paris in
  Qatar, HBKU).
- **Malaysia:** UK and Australian branch campuses (Nottingham Malaysia, Monash Malaysia, Heriot-Watt
  Malaysia, Southampton Malaysia in Johor).
- **China:** Sino-European joint universities (XJTLU in Suzhou with Liverpool; University of Nottingham
  Ningbo; Duke Kunshan).
- **Vietnam:** RMIT Vietnam (Ho Chi Minh City and Hanoi), the Vietnamese-German University, USTH (French).

---

## 3. SUPERFICIAL or too generic

- **Thailand (`th.js`)**: two hubs, `roles: []`, one claim of substance per hub. Bangkok finance is only
  "present" on the stock exchange address and KBank's headcount.
  - Deep would mean Bangkok it, finance and logistics rated from the named employers in §2.1.
  - Add a Laem Chabang logistics rating.
  - Add the Royal Decree's list of occupations reserved for Thais.
  - Add the work-permit salary floor applied to Western nationals.
  - Add the BOI SMART visa, the LTR visa and the Destination Thailand Visa (DTV), which are relevant
    for remote work.
- **Kuwait (`kw.js`) and Oman (`om.js`)**: one or two hubs, `roles: []` for Kuwait, no pay, no rent.
  - Kuwait: Kuwaitisation is not researched.
  - Oman: Salalah is not mapped, though the Port of Salalah is Oman's largest container port (a Maersk
    transhipment hub).
  - Acceptable for small markets only if the page says plainly "not a graduate destination", with one
    sentence why.
- **Russia (`ru.js`)**: see 1.3. Today it is a list of travel warnings plus two cities with GDP. If the
  policy is "not rated", make the record a clear "Do not plan a career here: here is why" page with the
  legal basis (Art. 5n, 5aa, Art. 13).
- **Vietnam (`vn.js`)**: the decree is read via Vietnam Law Magazine, not the text. Ho Chi Minh City has
  only Vinamilk. The pre-July 2025 province boundaries make the metrics incoherent with the growth claims.
- **Israel (`il.js`)**: the route has only "Student visa", with "no graduate route found".
  - Add the B/1 work permit for experts and the HIT high-tech expert fast track (Israel Innovation
    Authority / Population and Immigration Authority).
  - State the reserve-duty context for colleagues and the impact of the war on hiring.
  - Today the record only notes the 2024 dip.
- **Saudi Arabia (`sa.js`)**: `ARRIVAL: []`.
  - Missing: Premium Residency (the 2024 tracks, including "Special Talent"); the EU tourist e-visa
    (eligible); NEOM/Tabuk (scaled back in 2025, which students should know); Jeddah business (Saudia,
    Savola).
- **Hong Kong (`hk.js`)**: a single hub with no rent, no tech rating beyond Cathay, and IANG sourced to an
  internal md file (`<research/places/beyond-europe.md>`) while tagged `data`. Point the claim at the
  Immigration Department page instead.
- **Malaysia (`my.js`)**: the Employment Pass rules come from a KPMG flash alert, not ESD/MDEC. Maybank
  (the country's largest bank, Kuala Lumpur HQ) is absent; see §2.1 for the other KL names. Labuan IBFC (GFCI 44th, already a claim) is not
  a hub.
- **Korea (`kr.js`)**: four hubs, no graduate calendar (gongchae open recruitment in March and
  September), no starting pay, no TOPIK.
  - `kr-30h` relies on a Yonsei page. The immigration service's own guide to D-2 part-time work
    (20/25/30 hours by TOPIK level since 2023) is the primary source, and the gap says the TOPIK link
    is "not confirmed".
- **US analytics, IT, cs, ai coverage**: BLS OEWS is already the method. The same table gives:
  - 15-1211 Computer Systems Analysts and 15-1244 Network and Computer Systems Administrators → `it`
  - 15-1221 Computer and Information Research Scientists → `cs` and `ai`
  - 13-1111 is already used; 15-2031 Operations Research Analysts → `analytics`
  - 13-2011 is already used; 19-3011 Economists → `economics`

  That would light up IT, cs, analytics and economics in all 14 US hubs with the same evidence standard
  (4% / 2% of the US total).
- **Canada**: "Economics, accounting, management, marketing, analytics, data science and big data are
  not rated in any city: Statistics Canada's occupation groups read do not separate them." Statistics
  Canada table 98-10-0593 (2021 Census, occupation by NOC 2021 five-digit codes, by CMA) separates
  financial auditors and accountants (11100), data scientists (21211), economists (41401), and
  advertising, marketing and PR professionals (11202).

---

## 4. UNDERREPRESENTED

**Cities missing that a European student would expect**

| Country | City | Why it matters |
|---|---|---|
| US | Minneapolis–St Paul | 15 Fortune 500 HQs, already cited in `us-fortune-rp` |
| US | Raleigh–Durham | Research Triangle; Duke MMS is in the calculator |
| US | Pittsburgh | CMU; Tepper is in the MBA model |
| US | San Diego | Already named in the gap note |
| US | Denver | |
| US | Phoenix | TSMC Arizona, Intel Chandler |
| US | Salt Lake City | Goldman Sachs' second-largest office |
| US | Stamford/Greenwich | Hedge funds |
| US | Detroit | Automotive |
| Canada | Waterloo | |
| Canada | Edmonton | Amii AI institute |
| Canada | Québec City | |
| Japan | Kawasaki | Fujitsu, Toshiba |
| Japan | Sapporo | |
| Korea | Suwon | Samsung |
| Korea | Daejeon | Daedeok research town |
| Korea | Ulsan | Hyundai; listed in the gaps |
| China | Ningbo | Port and Nottingham Ningbo |
| China | Xi'an | |
| China | Nanjing | |
| Taiwan | Tainan | |
| Taiwan | Kaohsiung | |
| Australia | Gold Coast | Low priority |
| Israel | Herzliya | |
| Israel | Be'er Sheva | |
| Saudi Arabia | Thuwal / KAUST | |
| Saudi Arabia | NEOM | With a caveat |
| Oman | Salalah | |
| Oman | Duqm | |
| Turkey | Kocaeli/Gebze | Ford Otosan, Hyundai, TÜBİTAK |
| Malaysia | Cyberjaya | Or rename the KL hub "Greater KL" |
| Malaysia | Labuan | |
| Thailand | Phuket | Not needed; Chiang Mai is optional (digital-nomad hub) |

**Families never rated anywhere in scope:** analytics and bigdata (0 hubs). Economics (US BLS 19-3011
exists), marketing outside the US and accounting outside the US and London are nearly unrated. Big Four
and MBB offices exist in every capital in scope, and a firm's own office-locator page is an
employer-stated claim that would give accounting and finconsult present in about 40 hubs.

**Finance sub-roles:**
- Within scope, only NY, SF/Bay, Dubai, Abu Dhabi, Sydney and the banking-only hubs have any sub-role.
- `ib`, `am`, `pe` and `finconsult` are blank in Singapore, Hong Kong, Tokyo, Seoul, Shanghai, Beijing,
  Toronto, Boston, Chicago and Riyadh.
- The sub-roles view of Asia is almost empty.

**Sectors:** semiconductors are named only as a sector and are not rated anywhere (TSMC, Samsung, Micron
Penang/Taichung, Intel Penang/Chengdu). Energy (Houston, Calgary, Perth, Dhahran) has no family because
none fits. Consider rating `management`, `corpfin` and `logistics` for energy hubs instead of leaving
them white.

**Programmes:** 14 hubs link programmes for the whole outside-Europe map, and only 6 hubs actually do.
The MBA model holds 23 US and 4 Canadian schools plus CEIBS, Fudan, Guanghua and NTU. The masters model
holds MIT MFin, Berkeley MFE, Duke MMS, Princeton, Yale, Vanderbilt, WashU and Ross MM. Unlinked:
- Boston: Harvard, MIT Sloan, Babson, MIT MFin
- Philadelphia: Wharton
- Chicago: Booth, Kellogg
- San Francisco: Berkeley Haas, Berkeley MFE
- Los Angeles: UCLA Anderson, USC Marshall
- Austin: McCombs
- Atlanta: Goizueta
- Washington: Georgetown
- Shanghai: CEIBS, Fudan
- Beijing: Guanghua

---

## 5. Quick wins (each under an hour)

1. **Rate from the record's own claims**:
   - Austin: business, software and it strong.
   - Hsinchu: it strong, cs present.
   - Taichung: it present.
   - Kyoto: software present.
   - Yokohama: business present.
   - Osaka: business and finance present.
   - Perth: business strong.
   - Incheon: business present.
   - Seattle: it present.
   - New York: ib dominant.
   - Abu Dhabi: pe present.

   No new research needed.
2. **Fix the 29 standing-on-gap contradictions**: rate the family or drop the standing. Add a test
   (`tests/atlas-test.js`) that fails when `standing[].f` has `demand[f] === 'gap'`.
3. **Replace the "could not confirm HQ" gaps** with SEC EDGAR 20-F/10-K claims, the method the records
   already use: MUFG, SMFG, Takeda, UMC, ASE, Himax, Alibaba, NetEase, Baidu, JD, KB, Shinhan, Woori, KT,
   Coupang, Microsoft, State Street, OpenText, BHP, Woodside, Grab, Wix, monday.com.
4. **Tel Aviv `knownFor`** (`il.js:25`): rewrite.
5. **Remove the false rent sentence** in `au.js:210`, or add NSW and Victoria official rents.
6. **Russia**: add one claim on Art. 5n / Art. 13 with the Commission FAQ URL; drop Rosneft or flag it as
   an Annex XIX entity; delete the two finance standings; make the white state say "deliberately not
   rated".
7. **One citizenship line** on Canberra, Adelaide, Washington, Ottawa and the defence employers (Ankara,
   Haifa, Jerusalem).
8. **An FCDO "local laws and customs" claim** for AE, SA, QA, KW, OM, MY and RU (same-sex law, alcohol,
   medicines). Correct `gulf-and-central-eastern-europe.md:93`.
9. **Link the MBA and master's programmes** already in the calculators to their hubs (list in §4).
10. **Hong Kong rent** from the RVD Class A series; **Singapore am** from the MAS Asset Management Survey
    (S$6.07 trillion, 2024).
11. **US OEWS**: add 15-1211/15-1244 (it), 15-1221 (cs), 15-2031 (analytics) and 19-3011 (economics) to
    the existing per-metro claims, using the same thresholds.

---

## 6. Top 10 priorities for the next 4 weeks (ranked)

1. **Systematic "employer pass" across all 75 in-scope hubs** using §2.1. Target: no hub larger than
   1 million people with 0/14, and it/software rated in Tokyo, Seoul, Taipei, Hsinchu, Osaka, Kyoto,
   Beijing, Hangzhou, Seattle, Boston, Austin and Bangkok. This answers the owner's complaint directly.
2. **Fill finance sub-roles in the in-scope global finance hubs**: New York, Singapore, Hong Kong, Tokyo,
   Toronto, Boston, Chicago, Shanghai, Beijing, Dubai, Abu Dhabi, Riyadh and Sydney. Use
   IB/AM/PE/consulting named firms plus MAS, SFC and SIFMA statistics.
3. **Russia legal page**: Art. 5n, 5aa, Art. 13 and the LGBT extremist designation, rendered as
   "deliberately not rated".
4. **Working-holiday and youth-mobility step** in AU, NZ, CA, JP, KR, TW and HK, plus the US
   J-1/L-1/E-2 step.
5. **Legal-context claims** (FCDO local laws) for the Gulf, Malaysia and Russia. Add citizenship caveats
   for public-sector and defence hubs.
6. **Add the missing hubs, in this order**: Waterloo, Suwon, Tainan/Kaohsiung, Minneapolis,
   Raleigh-Durham, Pittsburgh, Thuwal/KAUST, Be'er Sheva, Salalah, Ningbo.
7. **A language claim per non-English market** (JP, KR, CN, TW, HK, TR, IL, TH, VN) from an official or
   survey source, shown in `work` as "Language".
8. **Entry pay and official rent** for the 13 countries lacking pay and the 35 hubs lacking rent,
   preferring official series (HK RVD, NSW/VIC bond data, Dubai DLD, NZ Tenancy Services, DOSM graduate
   statistics, MOEL Korea).
9. **US and Canada occupation-table extension** (OEWS and StatCan 98-10-0593) to rate IT, cs, analytics,
   economics, accounting and marketing in every North American hub with one consistent method.
10. **Programme linking and campus coverage**: link the calculator schools to hubs; add MBZUAI, KAUST,
    Education City, XJTLU, Nottingham Ningbo/Malaysia and RMIT Vietnam as notes in the hubs where
    European students actually study.

---

Sources checked during this audit:
- EU Commission sanctions FAQ (Art. 5n applies to individuals):
  https://finance.ec.europa.eu/eu-and-world/sanctions-restrictive-measures/sanctions-adopted-following-russias-military-aggression-against-ukraine/frequently-asked-questions-sanctions-against-russia_en
- APSC, Citizenship in the APS (PS Act s22(8)):
  https://www.apsc.gov.au/working-aps/information-aps-employment/guidance-and-information-recruitment/citizenship-aps
- MAS Singapore Asset Management Survey 2024 (S$6.07 trillion AUM, 1,298 licensed fund managers), as
  reported in the MAS release of 15 July 2025: https://www.mas.gov.sg
- IEC 2026 season (61,189 places; partner countries include France, Germany and Italy):
  https://www.canada.ca/en/immigration-refugees-citizenship/services/work-canada/iec.html
- Australia Working Holiday 417 partner list: https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/work-holiday-417

Other facts are standard and verifiable but were not re-fetched here. Confirm them on the cited official
pages before publishing:
- SEC filer addresses
- FCDO local-laws pages
- the Laem Chabang volume
- the Russian Supreme Court ruling of 30 Nov 2023
