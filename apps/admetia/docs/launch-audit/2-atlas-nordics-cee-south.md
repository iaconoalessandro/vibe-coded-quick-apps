# Audit 2: Atlas geography and labour markets (Nordics, CEE, Southern Europe)

Scope: DK, SE, NO, FI, IS, PL, CZ, RO, BG, GR, MT, EE, LT. Files: `data/atlas/{dk,se,no,fi,is,pl,cz,ro,bg,gr,mt,ee,lt}.js`, `research/countries/*` for these, `research/places/gulf-and-central-eastern-europe.md` §4–6, `research/places/iberia-and-nordics.md` §2. Read-only audit, 5 Oct 2026. Line numbers refer to the repo files.

## Executive summary

1. **The map looks wrong for second-tier CEE and Nordic cities.** Seven hubs in scope are completely white (0/14): Gdańsk, Poznań, Łódź, Odense, Trondheim, Uppsala and Varna. The cause is a "2nd or 3rd in the country" rule. Gdańsk has **32,000 ICT jobs and Intel's largest EU R&D site (~4,000 staff)** and is blank. Aalborg (8,000 ICT jobs) and Plovdiv (5,350) show "strong". A student will read that as "nothing here", which is false.
2. **The records break their own rules.** Stavanger IT is `gap` while Bergen IT is `strong`, and both have the same 8,000 "joint second" ICT jobs. Economics is `gap` in Prague, Bucharest, Valletta and Oslo, even though each record lists the central bank as an employer. Accounting is `gap` in Copenhagen although a claim already names Deloitte, PwC, EY and KPMG. Marketing is `gap` in Stockholm although H&M is named.
3. **One false statement is shown to users.** pl.js:246 says Comarch, Allegro, InPost and PKO "could not be placed in a city". In fact Comarch and InPost are headquartered in Kraków, Allegro in Poznań and PKO in Warsaw.
4. **Bulgaria adopted the euro on 1 Jan 2026.** bg.js still gives every wage in BGN and never mentions the euro.
5. **The most famous employers are missing:** UiPath, Bitdefender and Oracle (Bucharest); Revolut Bank UAB (Vilnius); Nokia (Espoo, Wrocław ~5,000, Tampere, Timișoara); Ericsson, H&M, King, EQT and AstraZeneca (Sweden); DSV, Ørsted, Pandora and LEGO (Denmark); Telenor and Aker BP (Norway); Intel Gdańsk; Comarch; Allegro; Universal Robots Odense; Nordic Semiconductor Trondheim.
6. **Several sectors are invisible.** Gaming (Stockholm, Malmö, Helsinki, Warsaw, Kraków, Bucharest) is never rated. Logistics is unrated at the biggest Baltic and Nordic ports (Gdańsk, Gothenburg, Klaipėda) and in Copenhagen, home of DSV and Maersk, where it is only "present". Norwegian shipping and energy, iGaming software in Malta, Lithuanian logistics (Girteka) and AI in Stockholm, Warsaw, Sofia and Tallinn are also missing.
7. **Analytics, data, AI, CS, economics, marketing and accounting are rated almost nowhere** in these 13 countries. Analytics, big data and data science: 0 hubs. AI and CS: only Tartu. Economics: 0. Marketing: 0. Accounting: only Bucharest, Athens and Valletta. Named-employer claims alone would justify "present" in about 20 hubs (list in §4).
8. **The local-language barrier is barely covered.** DK, SE, NO, FI, IS, LT, RO and BG have no "Language" work block. Nothing tells a student that Danish, Swedish, Norwegian, Finnish, Polish or Czech is needed for most non-tech, non-SSC jobs.
9. **Metrics are weak.** No hub in scope has a graduate starting salary. Only the two Estonian hubs have rent, and it comes from Numbeo, tagged anecdotal. Romania, Greece and Iceland have no wage metric; Malta's wage is a 2022 national figure. GDP years are mixed (2021 for PL/SE/NO/FI/RO/BG/GR/LT, 2022 for DK/CZ) and population is from 2023. Official rent sources exist for NO, FI, SE, PL and IS.
10. **Missing cities students expect:** Espoo (folded into Helsinki with no Nokia), Oulu, Linköping, Lund (only as an employer under Malmö), Billund, Klaipėda, Brașov, Lublin and Szczecin. Already present: Kraków, Wrocław, Cluj, Gothenburg, Malmö and Thessaloniki.

---

## 1. CRITICAL: wrong or dangerously misleading

**1.1 Seven fully white hubs that are real job markets (the rating rule produces false negatives)**
- `pl.js:148-152` Gdańsk: all 14 families `gap`, with 32,000 ICT and 20,000 finance jobs in its own claim (`pl-gdansk`, line 267). `pl.js:173-177` Poznań (26,800 ICT) and `pl.js:198-202` Łódź (23,200 ICT) are also blank. `pl.js:249` explains why: they are not "second or third in the country".
- Compare `dk.js:100`: Aalborg `it: strong` on 8,000 ICT jobs. `bg.js:61`: Plovdiv `it: strong` on 5,350. `fi.js:88`: Turku `strong` on 6,260. Gdańsk has four times Aalborg's ICT employment and shows nothing.
- Same failure in `no.js:114` (Trondheim), `se.js:122` (Uppsala), `dk.js:125` (Odense) and `bg.js:88-91` (Varna).
- Named employers that meet the documented "present" rule (one employer with HQ or major site; "strong" = two or more):
  - **Gdańsk/Tricity.** Intel Technology Poland is Intel's largest EU R&D centre with ~3,000–4,000 staff (PAP, https://www.pap.pl/en/news/news%2C419133%2Cgdansk-based-intel-to-increase-employment-by-over-400.html; Intel Poland, https://www.intel.com/content/www/us/en/corporate-responsibility/intel-in-poland.html). Others: Amazon development centre, thyssenkrupp Group Services, Thomson Reuters (Gdynia), Kainos, LPP (fashion HQ, Gdańsk), Port of Gdańsk/Baltic Hub (largest container terminal on the Baltic).
    - Suggested ratings: it/software **strong**, ai **present** (Intel AI accelerators), logistics **strong**, business **present**.
  - **Poznań.** Allegro is headquartered and was founded there (https://poznan.pl/mim/inwestycje/en/-,p,45407,45410.html). Others: Volkswagen Poznań, Franklin Templeton (SSC), GSK.
    - Suggested ratings: software **present/strong**, business **present**, marketing **present** (Allegro).
  - **Łódź.** Fujitsu, Infosys BPM, Ericsson R&D, BSH. Suggested: business (SSC) **present**, it **present**. Verify each on the employer's own page.
  - **Trondheim.** Nordic Semiconductor ASA is headquartered there (~1,450 staff) (https://www.nordicsemi.com/About-us). Others: SINTEF (one of Europe's largest independent research institutes), Equinor research centre (Rotvoll). Suggested: it/software **present**, cs **present**.
  - **Odense.** Universal Robots and MiR opened a joint HQ in Odense for ~600 staff (https://www.therobotreport.com/teradyne-universal-robots-mobile-industrial-robots-open-joint-headquarters/). `dk.js:173` dismisses the cluster as "described only by its own organisation"; the employer's own page now settles it. Suggested: software **present**, ai/cs **present** (robotics).
  - **Uppsala.** Cytiva and Thermo Fisher (Phadia) life sciences, IAR Systems (embedded-software HQ), Uppsala Monitoring Centre (WHO). Suggested: it/software **present**. Biotech is not a family, so say so in `knownFor`.
  - **Varna.** Port of Varna and Navibulgar (shipping HQ). Suggested: logistics **present**. 4,840 ICT jobs is below the 5,000 threshold, but the hub also shows a national standing of 4 for finance (`bg.js:95`) with no demand rating. That contradiction confuses readers.
- **Fix the rule, not only the hubs.** Add an absolute threshold, e.g. ≥20,000 ICT jobs = strong and ≥5,000 = present, whatever the city's national rank. Otherwise small-country cities always outrank big-country second cities.

**1.2 Internal inconsistencies that break the stated rule**
- **Norway.** `no.js:63`: Stavanger `it: 'gap'`, while its own claim `no-emp-sta` (line 177) and the employer card (line 61) say 8,000 ICT jobs, "joint second in Norway". `no.js:89`: Bergen with the same 8,000 is `it: strong`. One of the two is wrong. By the rule in `pl.js:250`/`no.js:161`, Stavanger IT should be **strong**.
- **Economics `gap` where a central bank is a listed employer** (it qualifies as "present" under the documented rule):
  - Prague: `cz.js:39`, with Czech National Bank at `cz.js:30`.
  - Bucharest: `ro.js:39`, with National Bank of Romania at `ro.js:29`.
  - Valletta: `mt.js:46`, with Central Bank of Malta at `mt.js:36`.
  - Oslo: `no.js:37`, with NBIM/Norges Bank at `no.js:34`.
  - Not listed at all: Danmarks Nationalbank, Sveriges Riksbank, Bank of Finland, Narodowy Bank Polski, Bank of Greece, Bank of Lithuania, Eesti Pank, Central Bank of Iceland and the Bulgarian National Bank.
- **Accounting `gap` in Copenhagen** (`dk.js:41`), although claim `dk-jobbank` (`dk.js:199`) names Deloitte, PwC, EY and KPMG graduate programmes in Copenhagen.
- **Marketing `gap` in Stockholm** (`se.js:39`), although `se-sse` (`se.js:178`) names H&M as a first employer of SSE graduates.
- **Kraków software `gap`** (`pl.js:67`), although Kraków is second in Poland for ICT jobs (65,800, `pl-emp-krk`) and is Comarch's HQ (al. Jana Pawła II 39a, Kraków, ~6,500 staff).

**1.3 A false self-declared gap, shown to users**
- `pl.js:246` says PKO Bank Polski, Allegro, Comarch and InPost "could not be placed in a city from their own pages". All four HQs are public:
  - PKO BP: ul. Puławska 15, Warsaw.
  - Allegro: Poznań, ul. Wierzbięcice.
  - Comarch: Kraków.
  - InPost: Kraków, Ocean Office Park.
- Every page states this. Delete the sentence and add the four employers.

**1.4 Bulgaria: the euro is missing**
- Bulgaria adopted the euro on 1 Jan 2026 at EUR 1 = BGN 1.95583 (European Commission, https://trade.ec.europa.eu/access-to-markets/en/news/bulgaria-adopts-euro-1-january-2026).
- `bg.js:47, 74, 100` give wages in `cur: 'BGN'`, claim `bg-wage` (line 149) quotes BGN, and the summary (line 15) never mentions the euro.
- A student comparing pay will see a currency that no longer exists. Convert to EUR (or show both), and add one claim on euro adoption.

**1.5 Outdated or weak employer evidence**
- `ee.js:33`: "Pipedrive, Veriff and Microsoft Estonia (Skype)". Microsoft retired Skype on 5 May 2025. Relabel as "Microsoft Estonia" and drop "Skype" from the i18n string.
- `cz.js:95, 101`: Ostrava `software: present` rests on "an open vacancy on its Czech careers page" (`cz-tieto`, line 177), and `cz.js:96` lists MONETA by its *correspondence address*. That is not an HQ or major site, so it falls short of the rule. Tietoevry does run a large Ostrava centre, so cite its site or headcount instead.
- `pl.js:260`: Goldman Sachs Warsaw is tagged practitioner consensus from eFinancialCareers. GS calls Warsaw its largest continental-European office, so the GS careers locations page would support an employer-stated tag.

**1.6 Malta: software `gap` in an iGaming economy**
- `mt.js:46` rates `software: 'gap'` while `mt-mga25` (line 101) records 15,039 FTEs in 302 licensed gaming companies. Those are online platform businesses: Betsson, Evolution, LeoVegas, Tipico, Kindred/FDJ United and Gaming Innovation Group.
- `it: strong` rests only on a national Eurostat share (`mt.js:45`). Software should be at least **present** (Kindred is already cited as HQ in Sliema, `mt-e-kindred`).
- Marketing should be **present** for iGaming affiliate marketing (Catena Media, Gentoo Media). Add STMicroelectronics (Kirkop) and Lufthansa Technik Malta for engineering.

**1.7 Iceland population understated**
- `is.js:43`: `pop` 139,804, `area: 'city'`, while the hub is "the capital and its region" (line 18).
- The same record's claim `is-pop` gives 251,912 for the capital region. Use the region figure; the city figure makes Reykjavík look half its real market.

---

## 2. MISSING basics a student will ask about

**2.1 Language barrier (no claim at all in DK, SE, NO, FI, IS, LT, RO, BG)**
- Students ask first "can I get a job without Danish/Swedish/Polish?". Today the answer exists only as one summary phrase (`se.js:14`, "many roles need Swedish") and as employer exceptions (`dk-novo`, `se-seb`).
- `iberia-and-nordics.md` §2 has "No source found" for Norway on both sides.
- Add a "Language" block to every record, with an official source:
  - Denmark: Work in Denmark (state service), https://www.workindenmark.dk. It covers English-speaking workplaces versus Danish for most jobs, plus free Danish classes.
  - Norway: Work in Norway (NAV/EURES), https://www.workinnorway.no. It says Norwegian is needed in most jobs.
  - Sweden: Arbetsförmedlingen and Sweden.se "Working in Sweden"; also note SFI, the free Swedish course.
  - Finland: Work in Finland (Business Finland/TE), https://www.workinfinland.com. Add `fi-oph` (63% vs 77% expert jobs) as data.
  - Iceland: the Directorate of Labour (Vinnumálastofnun). Icelandic is expected outside tech, tourism and international finance.
  - Poland, Czechia, Romania and Bulgaria: state plainly that outside SSC/IT/international firms, Polish, Czech, Romanian or Bulgarian is expected in banking, audit and FMCG. ABSL and AIBEST can source the "English is the SSC working language" side. `cz.js:151` admits this was not researched.
  - Lithuania: the line 108 gap ("language requirements were not researched") should be closed.

**2.2 Graduate starting salary (no hub has one)**
- Every `wage` metric is an all-employee average. That overstates entry pay in the Nordics and Prague by 30–60%.
- Official or quasi-official graduate pay sources:
  - Sweden: Akavia/Civilekonomerna starting salaries; SCB "Lönestrukturstatistik" by occupation and age.
  - Denmark: Djøf salary statistics for new graduates; CBS candidate survey.
  - Norway: NHH (already have NOK 580,000, `no-nhh`); Tekna for engineers.
  - Finland: TEK starting-salary survey; Ekonomit (economists' union) recommendations.
  - Czechia: ISPV, the Ministry of Labour's average-earnings system by occupation and region (official), https://www.ispv.cz.
  - Poland: GUS earnings by occupation (Struktura wynagrodzeń według zawodów) plus ABSL/Mercer junior pay, already in text.
  - Estonia: PA101 deciles (already have); Wise €3,916 is one advert.
  - Lithuania: Statistics Lithuania earnings by occupation and age.
  - Malta: `mt-ses` has under-30 €1,832 (2022). Promote it to a metric.
- Add a fifth metric, `entry`, with a `basis` of graduate survey, junior SSC or under-30.

**2.3 Rent (only Tallinn and Tartu, both Numbeo/anecdotal)**
- Official rent sources exist:
  - Norway: SSB Rental Market Survey (Leiemarkedsundersøkelsen), rents by flat size for Oslo, Bergen, Trondheim and Stavanger, https://www.ssb.no/priser-og-prisindekser/boligpriser-og-boligprisindekser/statistikk/leiemarkedsundersokelsen.
  - Finland: Statistics Finland, "Rents of dwellings", € per m² for non-subsidised one-room flats in Helsinki, Espoo, Tampere and Turku.
  - Sweden: SCB rent statistics (Hyror i bostadslägenheter) by region. This covers regulated first-hand rent, so add a warning about first-hand queues and sublet prices.
  - Poland: NBP quarterly report on housing prices, with rent per m² in 16 cities (official central-bank data).
  - Iceland: HMS rent index (Housing and Construction Authority).
  - Denmark: no official market-rent series; use the Boligportal rent index tagged practitioner consensus, and say so.
- Greece, Romania, Bulgaria, Malta and Lithuania have no official series. Keep Numbeo there, but tag it and show the date.
- The Copenhagen and Stockholm housing queue (first-hand contracts take years) is a basic fact students hit. It is absent.

**2.4 Big-employer graduate programmes students search for**
Only SEB, Nordea, Novo, Maersk, Carlsberg, DNB, Wise, HELLENiQ, METLEN, Deloitte MT and KPMG MT are covered. Missing:
- Sweden: Ericsson Graduate Program, Volvo Group Graduate Program, H&M, IKEA, Scania, AstraZeneca Gothenburg graduate programmes.
- Denmark: LEGO, Ørsted, DSV, Danske Bank (the `dk.js:170` gap).
- Norway: Equinor graduate programme (`no.js:157` skipped it for lack of a primary page; the page is equinor.com/careers/graduates); Telenor, Aker BP, DNV.
- Finland: Nokia, KONE, Wärtsilä, UPM, OP.
- Poland: PKO BP, mBank, Big Four SSC programmes; Google Warsaw internships.
- Czechia: Česká spořitelna, Komerční banka, ČEZ, Škoda Auto (Mladá Boleslav: a missing hub).
- Romania: UiPath, Bitdefender and BCR graduate schemes.

**2.5 Euro and currency facts**
- Bulgaria (2026) is covered in 1.4.
- State that DK, SE, NO, PL, CZ, RO and IS are not in the euro, and give a conversion date. Wages appear in DKK, SEK, NOK, PLN, CZK and ISK with no conversion shown in the claims.

---

## 3. SUPERFICIAL / too generic

| File:line | What is thin | What "deep" looks like |
|---|---|---|
| `pl.js:84-110` Wrocław | Zero named employers; only "258 centres" and an Eurostat count. `knownFor` is "Service centres with lower rents". | Nokia Technology Center (~5,000, largest ICT R&D site in Poland: https://www.nokia.com/about-us/careers/our-locations/poland/), UBS (ex-Credit Suisse), Capgemini, IBM, 3M SSC, Techland (games), LG Energy Solution (Biskupice). Rate software **strong**, finance **present** (UBS). |
| `pl.js:54-82` Kraków | Only HSBC, from an undated page. | Comarch HQ, InPost HQ, Motorola Solutions, Shell Business Operations, State Street, UBS, Aptiv, Capgemini, Sabre, Cisco, Bloober Team (games). Rate software **strong**, logistics **present** (InPost), accounting **present**. |
| `pl.js:112-138` Katowice | No named employer at all. | Capgemini, PwC Service Delivery Center, IBM, Rockwell Automation, ING Hubs Poland (with Warsaw and Łódź). Business **present**. |
| `pl.js:20-52` Warsaw | Only 5 employers; economics, accounting, marketing and AI all `gap`. | NBP (economics), PKO BP, Pekao, mBank, Big Four, McKinsey/BCG offices; Google Warsaw (Cloud), Microsoft, Samsung R&D Poland, Allegro Warsaw, 11 bit studios and People Can Fly (games), IDEAS NCBR (AI research). |
| `se.js:24-56` Stockholm | No Ericsson (gap at line 166 says "no source"; ericsson.com gives Torshamnsgatan 21, Kista), no H&M HQ, no gaming, no PE. | Ericsson, H&M, Electrolux, Atlas Copco, Investor AB, **EQT** (pe **present**), Nasdaq Stockholm, Riksbank; King (Candy Crush), Mojang (Minecraft), Paradox, DICE (EA), Embark; Evolution, Trustly, Epidemic Sound, **Lovable** (AI). Rate ai **present**: the record's own `se-genome` puts Stockholm 4th in Europe for AI-native value. Marketing **present** (H&M, already in a claim). |
| `se.js:57-82` Gothenburg | Volvo only. Logistics `gap` at the largest port in Scandinavia. | Port of Gothenburg (logistics **strong**), AstraZeneca R&D Mölndal, SKF HQ, Polestar HQ, Zenseact, Stena Line (shipping), Ericsson Lindholmen, Chalmers. |
| `se.js:83-108` Malmö | Labelled Malmö, but its only firm employer, Axis, is in Lund; Lund itself is not a hub. | Rename to "Malmö–Lund". Add Tetra Pak (Lund HQ), Sony and Ericsson Lund, Massive Entertainment (Ubisoft) and King in Malmö, Oatly HQ, E.ON Sweden, ESS/MAX IV (research). |
| `dk.js:23-59` Copenhagen | Logistics only `present`, with Maersk as the only support. | DSV (HQ Hedehusene; world's largest freight forwarder after its 2025 DB Schenker purchase), DFDS, Copenhagen airport cargo: logistics **strong**. Ørsted (Gentofte), Pandora, Novonesis, Coloplast, Genmab, ISS, Saxo Bank (trading/fintech), Nykredit, ATP and PFA (am **present**), Danmarks Nationalbank; Unity, Trustpilot, Pleo, Zendesk, Microsoft Development Center (Lyngby), IO Interactive (games). |
| `dk.js:60-86` Aarhus | 3 named firms. | Systematic (software HQ), Terma (Lystrup), Netcompany Aarhus, Grundfos (Bjerringbro, regional), Danske Bank Aarhus (already a claim): software **present**. |
| `no.js:23-50` Oslo | 4 employers. Business `gap` in the HQ capital of Norway. | Equinor (Fornebu), Telenor (Fornebu), Aker BP (Lysaker), Orkla, Yara, Norsk Hydro, Statkraft, DNV (Høvik, maritime classification), Wilh. Wilhelmsen; Schibsted/Finn.no, Vipps MobilePay, Kahoot!, Cognite (industrial AI), Visma (software HQ); Storebrand, Gjensidige, Euronext Oslo Børs, Pareto and Clarksons Securities (ship finance and IB). Business **strong**, logistics **present** (shipping), am **strong** (NBIM). |
| `no.js:51-74` Stavanger | Equinor only. | SpareBank 1 SR-Bank HQ (finance **present**), Vår Energi HQ (Forus/Sandnes), Aker BP Stavanger, ConocoPhillips Norge (Tananger), TotalEnergies EP Norge, Norwegian Offshore Directorate, HitecVision (PE). IT **strong** (see 1.2). |
| `no.js:75-100` Bergen | Shipping and seafood named only as sectors. | Mowi HQ (largest salmon farmer), Lerøy, Grieg, Odfjell; Sparebanken Vest/Norge, TV 2. Business **present**, logistics **present**. |
| `fi.js:23-50` Helsinki | Nokia excluded (`fi.js:131`, "no source we can cite"), yet nokia.com gives Karakaari 7, Espoo. OP is excluded, yet op.fi gives Gebhardinaukio 1, Helsinki. | Nokia, Fortum, Neste, Wärtsilä, UPM, Stora Enso, Sampo, OP, Elisa, Bank of Finland; Wolt (DoorDash), Silo AI (AMD), Rovio and Remedy (Espoo, games), Reaktor, Futurice, IQM Quantum (Espoo). Ai **present**, business **strong**. |
| `fi.js:51-74` Tampere / `fi.js:75-98` Turku | Only Eurostat plus a university. | Tampere: Nokia's big R&D site, Sandvik Mining, Tietoevry, Solita, Vincit. Turku: Meyer Turku (cruise shipyard), Bayer pharma, Orion. |
| `cz.js:55-86` Brno | Kiwi and Red Hat only; no SSC named. | IBM (Client Innovation Center), AT&T, Honeywell, Thermo Fisher Scientific (electron microscopes), Gen/Avast Brno, Kyndryl. Business **present**. |
| `cz.js:19-54` Prague | No SSC named; business only `present`. | DHL IT Services, Accenture, Amazon, Microsoft; Rossum (AI), Productboard, Apify (data), JetBrains (dev office). Ai/datasci **present**. |
| `ro.js:20-53` Bucharest | **No UiPath, Bitdefender or Oracle.** No metrics: wage is missing because "INS site could not be read" (`ro.js:172`). | UiPath (founded in Bucharest, RPA/AI), Bitdefender HQ, Oracle Romania, eMAG HQ (e-commerce), Accenture, Genpact, IBM, Amazon Development Center. Wage from INS TEMPO table FOM106E (Eurostat `earn_ses22` as fallback). Ai **present**, business **strong**. |
| `ro.js:87-114` Iași / `ro.js:115-142` Timișoara | Endava, VOIS, Bosch only. | Iași: Amazon Development Center Romania, Continental, Conduent. Timișoara: Nokia R&D, Continental, Flex, Hella. IT **strong** for Timișoara. |
| `bg.js:19-50` Sofia | 4 employers, one from a 2020 trade article. | VMware/Broadcom Sofia, Progress (Telerik), Chaos (V-Ray), Payhawk (fintech unicorn), Paysafe and Playtech (iGaming), Coca-Cola HBC Business Services, HP, IBM, Experian, TELUS, Sutherland; **INSAIT** (AI institute). Ai **present**, business **strong** (AIBEST: 388 BPO firms). |
| `gr.js:26-69` Athens | Software `gap` in the city holding 70% of Greek ICT jobs. No wage or rent metric. | Workable, Viva Wallet (J.P. Morgan), Blueground, Kaizen Gaming (Betano), Netcompany-Intrasoft, Persado (AI), Skroutz; Bank of Greece (economics). Wage from ELSTAT/ERGANI or Eurostat SES. |
| `ee.js:21-55` Tallinn | Good, but ai/datasci `gap`. | Starship Technologies (robotics engineering), Veriff (AI identity), Bolt and Wise data teams, Nortal: ai **present**. |
| `ee.js:56-79` Tartu | Only the university and an incubator. | Playtech Tartu, Perforce (ZeroTurnaround/JRebel), Nortal Tartu, Fortumo: IT **present**. |
| `lt.js:20-52` Vilnius | No Revolut, no logistics. | Revolut Bank UAB (Konstitucijos pr. 21B, Vilnius; EU banking licence from the Bank of Lithuania/ECB), Western Union, Barclays Technology Centre, Danske GS, SEB GS (named only as "in Lithuania" today), Euromonitor (research analytics), Oxylabs (web data; bigdata **present**), Kilo Health, Girteka (HQ Vilnius, one of Europe's largest road hauliers: logistics **present**), Bank of Lithuania (economics). |
| `is.js:16-46` Reykjavík | 5 employers; analytics/data `gap` beside deCODE. | Marel (JBT Marel, Garðabær), Össur/Embla Medical, Icelandair, Alvotech, deCODE genetics (Amgen; datasci **present**), Kvika, Central Bank of Iceland. Data-centre operators (Verne, atNorth) appear only as a sector name. |

**Recurring shallow pattern.** About 25 hubs rest on a single Eurostat 2021 `met_10r_3emp` count, labelled "Information and communication employers", plus a university. Those are statistics, not employers. Students want named firms with careers pages.

**SSC/BPO coverage.** Poland is deep (ABSL). Czechia rests on an Expats.cz partner article (`cz-absl`, practitioner consensus). Romania has 280,000 jobs but no named SSC employer. Bulgaria has AIBEST but no named BPO employer. Wrocław, Katowice, Łódź, Brno and Cluj have no named SSC employers. This is the largest real entry-level market for business grads in the region, so name 3–5 centres per city.

---

## 4. UNDERREPRESENTED

**4.1 Families: hubs that obviously deserve a rating, with evidence**

| Family | Hubs and evidence (employer HQ or major site) |
|---|---|
| ai | Stockholm (Lovable; `se-genome` AI-native value $5.8bn), Helsinki (Silo AI/AMD), Warsaw (IDEAS NCBR, Samsung R&D, Google), Gdańsk (Intel AI accelerators), Bucharest (UiPath), Sofia (INSAIT), Tallinn (Veriff, Starship), Prague (Rossum), Oslo (Cognite), Copenhagen (Novo Nordisk Foundation AI/Gefion), Athens (Persado) |
| datasci / analytics | Stockholm (Spotify, Klarna), Copenhagen (Novo Nordisk, Maersk), Vilnius (Euromonitor, Moody's), Kraków (State Street, HSBC risk analytics), Reykjavík (deCODE), Tallinn (Wise), Warsaw (Allegro) |
| bigdata | Vilnius (Oxylabs), Prague (Apify), Stockholm (Spotify), Iceland data centres |
| cs | Trondheim (NTNU, SINTEF), Lund (ESS/MAX IV), Odense (robotics), Gdańsk (Intel), Brno (Red Hat, Masaryk/VUT) |
| economics | Every capital with a central bank (see 1.2), plus Warsaw NBP and Frontex/ODIHR, and Helsinki Bank of Finland |
| accounting | All capitals (Big Four). Copenhagen already has a claim (`dk-jobbank`). Kraków, Wrocław, Bucharest, Sofia and Cluj SSCs run R2R/P2P finance operations. |
| marketing | Stockholm (H&M, Spotify), Copenhagen (Carlsberg, Pandora, LEGO), Poznań (Allegro), Gdańsk (LPP), Bucharest (eMAG), Malta (iGaming affiliates) |
| management | Copenhagen (Maersk/Carlsberg trainee programmes), Oslo (Equinor, Telenor), Helsinki (KONE, Nokia) |
| logistics | Gdańsk, Gothenburg, Copenhagen (DSV), Klaipėda, Vilnius (Girteka), Kraków (InPost), Oslo/Bergen (shipping), Varna, Piraeus (already rated) |
| finance sub-roles | pe: Stockholm (EQT, Nordic Capital), Oslo (HitecVision in Stavanger). am: Oslo (NBIM), Copenhagen (ATP, PFA), Stockholm (AP funds). vc: Stockholm, Helsinki. Only Tallinn vc is rated now. |

**4.2 Missing sectors**
- **Gaming:**
  - Sweden: King, Mojang, Paradox, DICE, Massive.
  - Finland: Supercell is listed; Rovio and Remedy are not.
  - Poland: CD Projekt is listed; Techland, 11 bit, People Can Fly and Bloober are not.
  - Romania: Ubisoft is listed; Gameloft and Amber are not.
  - Iceland: CCP is listed.
  - No hub has gaming in `knownFor` except Helsinki.
- **iGaming:** Malta (software unrated); Sofia (Paysafe, Playtech); Tallinn (Playtech, Coolbet named but no family); Athens (Kaizen Gaming, Novibet).
- **Fintech:** Vilnius has no Revolut. Stockholm's Klarna is listed, but Trustly and Tink are not.
- **Shipping:** Greece has it. Norway (Oslo ship finance, DNV, Wilhelmsen; Bergen shipowners) and Denmark (DSV, DFDS) do not. Gothenburg has no Stena.
- **Energy:** Stavanger rates only "business present". No Ørsted or Vestas energy-trading roles. No Fortum/Neste in Finland.
- **Pharma and life sciences:** Copenhagen (Novo, Lundbeck) is fine. AstraZeneca Gothenburg/Södertälje, Uppsala biotech, Turku Bayer and Iceland's Alvotech are missing.
- **Defence and cyber:** Tallinn has CCDCOE. Saab (Linköping) and Kongsberg are missing.

**4.3 Missing cities a student would expect**
- **Espoo:** Nokia, KONE, Fortum, Neste, Aalto campus. At minimum rename the hub "Helsinki–Espoo" and add Nokia.
- **Oulu:** Nokia 5G/6G R&D, Oura, Polar, University of Oulu 6G Flagship.
- **Linköping:** Saab, Ericsson. Danske Bank's own claim `dk-danske-early` already names it for student jobs.
- **Lund:** split from Malmö or rename the hub.
- **Billund:** LEGO Group HQ.
- **Klaipėda:** the Baltic states' top cargo port, with 39 Mt and a 41.4% share in 2025 (Hellenic Shipping News, https://www.hellenicshippingnews.com/2025-a-record-breaking-year-for-the-port-of-klaipeda/; confirm on the port authority's site, https://www.portofklaipeda.lt).
- **Brașov:** Siemens, IBM, Stellantis-supplier R&D.
- **Lublin, Szczecin, Bydgoszcz:** SSC cities in the ABSL top 10.
- **Mladá Boleslav:** Škoda Auto HQ.

Already present and fine: Kraków, Wrocław, Katowice, Cluj, Iași, Timișoara, Gothenburg, Malmö, Aarhus, Bergen, Thessaloniki, Tartu, Kaunas.

**4.4 Programmes linked to hubs**
- Only Stockholm (SSE, KTH) and Copenhagen (CBS ×3) carry `programmes`. Every other hub in scope has `programmes: []`.
- NHH (Bergen), Aalto (Espoo/Helsinki), BI (Oslo), Lund, Gothenburg (Handels), Kozminski and SGH (Warsaw), Prague VŠE and CERGE-EI, Tartu, TalTech, Vilnius and ISM, and Athens AUEB appear neither on the map nor, it seems, in the calculators.

---

## 5. Quick wins (each under 1 hour)

1. Delete the false `pl.js:246` sentence. Add Comarch (Kraków), InPost (Kraków), Allegro (Poznań) and PKO BP (Warsaw), each from its own contact page. That gives Kraków software and Poznań software/marketing at least "present".
2. Set Stavanger `it` to `['strong','no-emp-sta']` (`no.js:63`), the same rule as Bergen.
3. Set economics `['present', <central-bank claim>]` in Prague, Bucharest, Valletta and Oslo (claims already exist).
4. Copenhagen accounting `present` from `dk-jobbank` (existing). Stockholm marketing `present` from `se-sse` (existing).
5. Bulgaria: convert the three wage metrics to EUR (÷1.95583), add a euro-adoption claim and edit the summary.
6. `ee.js:33`: drop "(Skype)".
7. `is.js:43`: switch pop to the capital region (251,912, `area: 'region'`). The source is already in `is-pop`.
8. Add Intel Gdańsk (Intel Poland page) and rate Gdańsk it/software. Add Nokia Wrocław (nokia.com Poland locations page, ~5,000 staff) and rate software strong.
9. Add Nordic Semiconductor (Trondheim) and Universal Robots/MiR (Odense) and remove two blank hubs. Remove the `dk.js:173` and `no.js:160` "no family rated" gap lines.
10. Add Nokia (Espoo) and OP (Helsinki) from their own pages, and remove `fi.js:131`. Add Ericsson (Kista) and H&M (Stockholm), and remove part of `se.js:166`.
11. Add Revolut Bank UAB to Vilnius (revolut.com legal footer: Konstitucijos pr. 21B).
12. Add UiPath and Bitdefender to Bucharest from their own pages.
13. Malta software `present` from `mt-e-kindred` plus Betsson Malta's careers page.
14. Rename "Malmö" to "Malmö–Lund", matching its own Axis/Lund evidence.

---

## 6. Top 10 priorities for the next 4 weeks (ranked)

1. **Change the rating rule.** Add absolute thresholds alongside national rank (≥20k ICT jobs = strong, ≥5k = present). Re-run it so Gdańsk, Poznań, Łódź, Trondheim, Uppsala and Odense stop rendering white. Today a white Gdańsk beside a "strong" Aalborg is the first thing a CEE-minded student will notice.
2. **Fix internal contradictions in one pass:** Stavanger IT; central banks → economics; Big Four → accounting where already cited; H&M → marketing; the false PL gap text; Ostrava's "open vacancy" evidence. Add a test in `tests/atlas-test.js` that flags any `gap` family where a cited employer of that family is already in `employers`.
3. **Name the flagship employers:** 3–5 per hub, from the tables in §3. Must-haves before launch: UiPath, Bitdefender, Revolut, Nokia (Espoo, Wrocław, Tampere, Timișoara), Ericsson, H&M, King, EQT, DSV, Ørsted, LEGO, Telenor, Aker BP, Intel Gdańsk, Comarch, Allegro, Universal Robots, Nordic Semiconductor, INSAIT, Workable/Viva Wallet, Betsson.
4. **Language block for all 13 countries,** from Work in Denmark, Work in Norway, Work in Finland, Arbetsförmedlingen and the Directorate of Labour (IS), plus the ABSL/AIBEST "English in SSCs" side for PL/CZ/RO/BG. It should say plainly that outside SSC/IT, local language is the norm.
5. **Bulgaria euro update,** and a currency note for non-euro countries.
6. **Rate the new families where employer claims suffice:** ai, datasci, analytics and bigdata in Stockholm, Copenhagen, Helsinki, Warsaw, Prague, Bucharest, Sofia, Tallinn and Vilnius (§4.1). Today these are 0 hubs in scope.
7. **Add a graduate entry-pay metric** (ISPV in CZ, Akavia in SE, Djøf in DK, TEK in FI, NHH already in NO, ABSL/Mercer junior SSC for PL/CZ/RO/BG). Use official rent where it exists (SSB, Statistics Finland, NBP, SCB, HMS). Add the Copenhagen and Stockholm housing-queue warning.
8. **Add missing hubs:** Espoo (or rename Helsinki), Klaipėda, Oulu, Linköping, Billund, Brașov. Also add logistics ratings for Gdańsk, Gothenburg, Copenhagen and Varna.
9. **Refresh metrics to one vintage:** Eurostat `met_pjanaggr3` 2025 and `met_10r_3gdp` latest year (2023), instead of mixed 2021/2022 GDP and 2023 population. Add missing wages for RO (INS TEMPO), GR (ELSTAT or Eurostat SES 2022 by NUTS2) and IS (national, labelled).
10. **Graduate programmes and sector depth:** Equinor, Ericsson, Volvo, LEGO, Ørsted, Nokia, PKO, Škoda; shipping in Oslo and Bergen; gaming in Stockholm, Warsaw and Bucharest; iGaming in Malta and Sofia. Link the existing business schools (NHH, Aalto, BI, Lund, Handels, SGH/Kozminski, VŠE, AUEB) as `programmes` on their hubs.

### Sources checked during this audit
- Migrationsverket, new student rules from 11 Jun 2026 (15 h/week in term confirmed; `se-15h` is correct): https://www.migrationsverket.se/nyheter/news-archive/2026-05-25-new-rules-for-residence-permits-for-studies-in-higher-education.html
- European Commission, Bulgaria adopts the euro on 1 Jan 2026: https://trade.ec.europa.eu/access-to-markets/en/news/bulgaria-adopts-euro-1-january-2026
- Intel Gdańsk (largest EU R&D site, ~3,000–4,000 staff): https://www.pap.pl/en/news/news%2C419133%2Cgdansk-based-intel-to-increase-employment-by-over-400.html and https://www.intel.com/content/www/us/en/corporate-responsibility/intel-in-poland.html
- Nokia Wrocław (~5,000): https://www.nokia.com/about-us/careers/our-locations/poland/
- Nordic Semiconductor HQ Trondheim: https://www.nordicsemi.com/About-us
- Universal Robots/MiR HQ Odense: https://www.therobotreport.com/teradyne-universal-robots-mobile-industrial-robots-open-joint-headquarters/
- Revolut Bank UAB, Konstitucijos pr. 21B, Vilnius: https://www.finextra.com/newsarticle/35753/revolut-launches-licenced-bank-in-lithuania (confirm on the revolut.com legal footer)
- Comarch (Kraków), InPost (Kraków, Ocean Office Park), Allegro (Poznań): https://wbj.pl/inposts-new-headquarters-in-krakow/post/134485, https://poznan.pl/mim/inwestycje/en/-,p,45407,45410.html
- Klaipėda port 2025 (39 Mt, 41.4% Baltic-states share) and Girteka HQ Vilnius: https://www.hellenicshippingnews.com/2025-a-record-breaking-year-for-the-port-of-klaipeda/, https://en.wikipedia.org/wiki/Girteka (use girteka.eu for the claim)

Employers named in §3–4 without a URL above come from my own knowledge and are not checked against employer pages. Verify each one before adding it as a claim (tag employer-stated).
