---
title: "Verification round 5c: Atlas deepening, Estonia, Nordics, Baltics and Central-Eastern Europe"
last_researched: 2026-10-03
scope: Log of every claim and metric added or changed in the Atlas records data/atlas/ee.js, dk.js, se.js, no.js, fi.js, is.js, lt.js, pl.js, cz.js, ro.js and bg.js in round 5c (3 October 2026): the source, what the page says, the rating changes. One section per country under its existing P number. Information only; not legal, tax or immigration advice.
confidence: high for statistics read through national statistics APIs and Eurostat on the day; medium for hub standing, which is a judgement from the claims listed under each hub; low-medium for crowd-sourced rent (Numbeo).
review_by: 2027-01-31
---

# Verification round 5c (3 October 2026)

Status vocabulary as in round 4a: **CONFIRMED** (source read and matches), **PARTLY CONFIRMED**
(core holds, a detail is thin or single-source), **STILL UNVERIFIED** (could not be read; kept out of
the record or listed under its gaps). Method: national statistics APIs (PxWeb) and the Eurostat
dissemination API, queried with `curl`/Python and read as tables; WebFetch and `curl -A 'Mozilla/5.0'`
for pages; `pypdf` for PDFs. Several sites refused automated access (StartupBlink, thebanks.eu,
SEB and Luminor Estonia pages): where so, the claim says whose summary it is.

Shared sources used across countries, so each log can point to them:

- **GFCI 40** (Z/Yen and Long Finance, September 2026), https://www.longfinance.net/media/documents/GFCI_40_Report_2026.09.16_v1.2.pdf, read in full with `pypdf`. Table 1 ranks: Copenhagen 25, Stockholm 35, Oslo 48, Warsaw 78, Helsinki 85, Tallinn 87, Prague 102, Riga 110, Sofia 115 (of 117); Reykjavik, Vilnius, Kaunas and Gothenburg are "associate centres" (too few assessments); Bucharest, Krakow and Brno are not listed. Table 16 (fintech ranks): Stockholm 17, Oslo 33, Tallinn 41, Copenhagen 65, Helsinki 77, Warsaw 87, Sofia 93, Prague 95.
- **Eurostat** `isoc_sks_itspt` (ICT specialists as % of employment, 2025, updated 17 Apr 2026): Sweden 8.9, Luxembourg 8.7, Finland 7.8, Netherlands 7.2, Estonia 6.8, Ireland 6.2, Norway 5.9, Lithuania 5.7, Denmark 5.7, EU 5.0, Bulgaria 4.8, Czechia 4.7, Poland 4.5, Romania 2.7 (Iceland not listed).
- **Eurostat** `met_10r_3emp` (employed persons by NACE activity, metropolitan regions, 2021 or 2022; J = information and communication, K = finance and insurance), the best city-level employment source found; API with `metroreg`, `wstatus=EMP` and `nace_r2` filters.
- **Eurostat** `met_pjanaggr3` (population, metropolitan regions, latest year 2023) and `met_10r_3gdp` (GDP, metropolitan regions, EUR million, latest year 2021 or 2022), API with `metroreg` filter.
- **Eurostat** `edat_lfse_24`, `une_rt_a`, `edat_lfse_03` for graduate employment, youth unemployment and tertiary attainment (2025, updated 10 Sep 2026).
- **Startup Genome GSER 2026**, https://startupgenome.com/report/the-global-startup-ecosystem-report-2026/ (Top 40 key findings and Europe chapter read as text; the ranked list itself is graphical and was not read).

## P36 Estonia (data/atlas/ee.js)

**Rating notes.** Tallinn software and IT *strong* → *dominant* on Eurostat met_10r_3emp (79% of Estonian ICT employment in the Tallinn metropolitan region, 2022) and Statistics Estonia ER0308: Tallinn
holds 8,997 of 12,085 ICT enterprises (74%); Tartu city 591, the next largest. Tallinn finance
*present* → *strong* on the same table (2,712 of 3,824 financial enterprises, 71%), the finance wage
statistic and the registered addresses of LHV and Swedbank in Tallinn; Tallinn banking *gap* → *strong* on the same
claims plus the state agency's list of the five largest banks. Business stays *strong*. Tartu software
*gap* → *present* (ER0308 puts Tartu second in ICT firms; a count of firms, not a named employer, so
the rating is the lowest that statistic can carry). AI, data science, analytics, management,
marketing and accounting stay *gap*. Country `roles` gains *finance*. Claims removed: none. `checked`
now 2026-10-03.

**Standing.** Tallinn software 5 / 3 / 2, IT 5 / 3 / 2, finance 5 / 2 / 1, business 5 / 2 / 1; Tartu software 3 / 1 / 1.
Regional 3 for software is borderline with 2: StartupBlink 2026 has Tallinn 53rd of the world's cities
and Startup Genome has it among emerging (not Top 40) ecosystems, but Eurostat puts Estonia fifth
in Europe by ICT-specialist share; I chose 3 and say so in the brief.

| Claim | Source read, and what it says | Status |
|---|---|---|
| ee-metro-emp | Eurostat met_10r_3emp, employed persons, Tallinn metropolitan region (EE001MC), 2022: J 28.93 thousand, K 13.98 thousand; Estonia J 36.54, K 16.8 | CONFIRMED (metropolitan region = Harju County; 2022) |
| ee-enterprises | Statistics Estonia ER0308 (EMTAK 2025, year 2025), by municipality: ICT enterprises (EMTAK 12) Estonia 12,085, Harju 10,065, Tallinn 8,997, Tartu city 591; financial (13) Estonia 3,824, Harju 3,157, Tallinn 2,712, Tartu city 149 | CONFIRMED (counts of enterprises, not jobs) |
| ee-pa101 | Statistics Estonia PA101, 2025: J average €3,651, median €3,115, 1st decile €1,246, 28,658 employees; K average €3,338, median €2,832, 1st decile €1,656, 14,124 employees; total average €2,092 | CONFIRMED |
| ee-tartu-econ | Statistics Estonia RAA0050, 2024: Estonia €39,847.74m (€29,036 a head); Tallinn €20,668.93m, 51.9%, €45,223 a head; Tartu city €3,510.17m, 8.8%, €34,803 a head | CONFIRMED |
| ee-q2-employers | Superangel 500, Q2 2026 (data from the Tax and Customs Board, EMTA): 17,084 employees (+1%); Bolt 878, Pipedrive 373, Wise 2,419, Veriff 301, Coolbet 331, Playtech 662, Microsoft Estonia (Skype) 393, Milrem 286, Cybernetica 241; method page says "excludes board members" and revenue is VAT-declared turnover | CONFIRMED (a third party's compilation of EMTA data; the counts are of the register, not of group staff) |
| ee-wise-office | wise.jobs/our-locations: "Tallinn is one of Europe's most exciting tech hubs and is home to our largest office based in Krulli." | CONFIRMED |
| ee-wise-grad | wise.jobs/wisestart-programs: graduate = final year or graduated a year ago; "global start date for all of them in September"; Engineering Bootcamp then 9-month Engineering Academy; interns 10 paid weeks in summer, penultimate-year students | CONFIRMED |
| ee-wise-pay | Built In copy of the Wise advert "Product Academy 2026", Tallinn, hybrid: "Salary of gross 3916 EUR/month with an RSU package"; page says the job was removed 3 Nov 2025 | PARTLY CONFIRMED (a removed advert on a job board, one data point) |
| ee-bolt-hq | bolt.eu/en/careers: "a team of over 4,000"; "our HQ in Tallinn, and our key hubs—London, Warsaw, Bucharest, and Berlin" | CONFIRMED |
| ee-genome | Startup Genome GSER 2026, emerging ecosystems: Tallinn in the 31-40 band, "climbing more than 10 positions"; Europe chapter: London $438bn, 72 unicorns; Paris $169bn, 37; Berlin $89bn, 20 | CONFIRMED (a band, not a rank) |
| ee-blink | Invest in Estonia, May 2026: Estonia 12th, 5th in the EU, fintech 10th; "Tallinn dropped four places to 53rd globally"; Tartu "fell nine places to 421st" | PARTLY CONFIRMED (a state agency's summary of the StartupBlink index; the index site blocked automated access) |
| ee-gfci | GFCI 40 tables 1, 11, 16: Tallinn 87 (rating 663), fourth in Eastern Europe & Central Asia after Astana 57, Cyprus 72, Warsaw 78; fintech 41 (up 27) | CONFIRMED |
| ee-eurostat-ict | Eurostat isoc_sks_itspt 2025: Estonia 6.8% of employment, 47.5 thousand; EU 5.0%; ranking computed from the full 2025 table | CONFIRMED |
| ee-lhv | LHV Group annual report 2025 (PDF, pypdf): "our 1,150+ employees"; legal address and registered office Tartu mnt 2, Tallinn (report page 2) | CONFIRMED (the 1,150+ figure is the CEO letter's; a search snippet gave 1,239, not found in the pages read) |
| ee-swed | swedbank.ee contacts page: "SWEDBANK AS Liivalaia 34, 15040 Tallinn" | CONFIRMED (an address, not a staff count) |
| ee-banks | investinestonia.com banks page: largest banks by market share Swedbank, SEB, Luminor, LHV, Coop Pank; "99% of banking transactions are done online" | CONFIRMED |
| ee-ccdcoe | ccdcoe.org: contact "Filtri tee 5, Tallinn 10132, Estonia"; Steering Committee "Chairman ... is from the host nation, Estonia" | CONFIRMED |
| ee-cyber | cyber.ee: "CYBERNETICA AS, Mäealuse 2/1, 12618 Tallinn" | CONFIRMED |
| ee-qs | studyinestonia.ee: QS World University Rankings 2027: Tartu 367th, TalTech 600th, Tallinn University 901-950, University of Life Sciences 1201-1400 | CONFIRMED (a state agency's report of the QS table) |
| ee-grad-labour | Eurostat edat_lfse_24 (ED5-8, 20-34, completed ≤3 years): Estonia 91.0 (2025), EU 85.3; une_rt_a 15-24: Estonia 20.7 (2025), 17.3 (2023), EU 15.2 | CONFIRMED |
| metrics Tallinn, Tartu | pop: Statistics Estonia RV0291U, 1 Jan 2026, Tallinn 452,563, Tartu city 99,900. gdp: RAA0050 2024, 20.67 and 3.51 bn EUR (city). wage: PA107 2025 mean, Tallinn 2,451, Tartu city 2,229 (EUR). rent: Numbeo Tallinn city-centre 1-bed 721.79 (range 600-850), Tartu 556.71 (500-603), updated 2 Oct 2026 | CONFIRMED / rent crowd-sourced (`anecdotal`) |
| ee-startups, ee-ict, ee-harju and the legal claims | unchanged from round 4a (P36) | as in round 4a |

**Still unverified for Estonia:** Tallinn-only employment in ICT or finance; the numeric rank of Tallinn in Startup Genome; SEB and Luminor addresses and staff; graduate programmes of Bolt, banks and Big Four.

## P48 Denmark (data/atlas/dk.js)

**Rating notes.** Copenhagen IT *gap* → *dominant* and software *gap* → *dominant* on Eurostat met_10r_3emp (63% of Danish ICT employment in the Copenhagen metropolitan region, 2022, counts rounded to thousands) plus Netcompany's Copenhagen foundation and size. Finance *present* → *dominant* on the same table (64% of finance and insurance jobs), Danske Bank's headquarters and the Nordea programme; banking *present* → *strong* on the same claims. Business *present* → *strong* on three named employers with headquarters or major sites (Maersk, Carlsberg, Novo Nordisk). Logistics *gap* → *present* (Maersk only). Aarhus business *gap* → *present* (Vestas, Arla headquarters). Aarhus IT and finance stay *strong*; Aalborg IT stays *strong*; Odense stays *gap*. Country `roles` is now it, software, finance, business. Claims removed: none. `checked` 2026-10-03.

**Standing.** Copenhagen software 5 / 3 / 2, IT 5 / 3 / 2, finance 5 / 3 / 2, business 5 / 2 / 1; Aarhus IT 4 / 2 / 1, finance 4 / 2 / 1; Aalborg IT 3 / 1 / 1; Odense IT 3 / 1 / 1. Regional 3 for Copenhagen software is a judgement: Startup Genome's Top 40 calls Stockholm the European standout (23rd) and does not name Copenhagen; the Copenhagen page shows early-stage funding level with Stockholm's ($1.6 billion). Finance regional 3 and world 2 follow GFCI 40 (25th of 117, seventh European centre after London, Zurich, Geneva, Luxembourg, Lugano and Paris).

| Claim | Source read, and what it says | Status |
|---|---|---|
| dk-emp-cph | Eurostat met_10r_3emp, employed persons, København (DK001MC), 2022: total 1,249k, J 77k, K 48k; Denmark J 123k, K 75k (national J and K from the DK row, rounded) | CONFIRMED (metropolitan region; counts rounded to thousands, so 63% and 64% are approximate) |
| dk-gdp | Eurostat met_10r_3gdp 2022: København €178,834m, Denmark €380,618m; met_pjanaggr3 2023: København 2,109,733, Denmark 5,932,654 | CONFIRMED |
| dk-danske | danskebank.com/about-us: "More than 20,000 employees", core markets Denmark, Finland, Norway, Sweden; /contact: "Danske Bank A/S, Bernstorffsgade 40, 1577 København V" | CONFIRMED |
| dk-danske-early | danskebank.com/careers/students-and-graduates: student jobs "mainly in Copenhagen, Aarhus and Linköping"; internships; after graduation, a full-time position. WebFetch found no formal programme name | CONFIRMED (no named programme) |
| dk-maersk | maersk.com/about: "100,000+ employees", "130 countries covered"; address Esplanaden 50, 1098 København K from Jobbank.dk's Maersk listing | PARTLY CONFIRMED (address from a third-party listing) |
| dk-maersk-mt | jobbank.dk/en/graduateprogrammer/32529: Regional Management Trainee Program, 18 months, applications January and February, start July | CONFIRMED (employer listing on a job board) |
| dk-carlsberg | carlsberggroup.com/who-we-are: "37K Employees", "Carlsberg Breweries A/S J.C. Jacobsens Gade 1, 1799 Copenhagen V"; Jobbank.dk list: Carlsberg Danmarks Graduate Program, 24 months, December and January, Copenhagen and Fredericia, September | CONFIRMED (programme terms from the listing) |
| dk-lundbeck | lundbeck.com/global/about-us: "H. Lundbeck A/S Ottiliavej 9, 2500 Valby, Headquarters"; novonordisk.com contact: "Novo Nordisk A/S, Novo Allé 1, 2880 Bagsværd" | CONFIRMED |
| dk-netcompany | netcompany.com/about-us: "Founded in Copenhagen in 2000 ... more than 9,500 professionals across more than 10 countries" | CONFIRMED |
| dk-jobbank | jobbank.dk/en/graduateprogrammer: PFA 24 months, December-January, Copenhagen, September; Copenhagen Municipality IT 18 months, March-April; Banedanmark 18 months, Copenhagen; the long list of employers includes Nordea, Jyske Bank, Nykredit, Novo Nordisk, Pandora, Deloitte, PwC, EY, KPMG | CONFIRMED |
| dk-gfci | GFCI 40 table 1: Copenhagen 25 (rating 734, up 19 places); Europe order counted from the same table; table 16 fintech: Copenhagen 65 | CONFIRMED |
| dk-genome | startupgenome.com/ecosystems/copenhagen: early-stage funding $1.6 BN, regional average $531 M; exit amount (2021-2025) $8 BN, regional average $4.3 BN; /stockholm: $1.6 BN and $34 BN. The Copenhagen page labels its first figure "ecosystem value growth" ($32 BN beside growth percentages) so no ecosystem value is quoted | CONFIRMED (the page layout makes the headline figure ambiguous; only the funding and exit figures are used) |
| dk-dtu | DTU news 18 Jun 2026 (via Mirage News): QS 2027, 105th of more than 1,500, second in Denmark, fifth in the Nordic region, 40th in Europe; SDU news 19 Jun 2026: 283rd, best-ever, up 20 places. A search snippet claiming 69th for Copenhagen was an article from 2015 and is not used | CONFIRMED (universities' own announcements) |
| dk-vestas | vestas.com/en/about/contact: "Vestas Wind Systems A/S, Hedeager 42, 8200 Aarhus N"; early-careers menu lists "Vestas Graduate Programme" | PARTLY CONFIRMED (programme terms not read) |
| dk-arla | arla.com/contact: "Sønderhøj 14, 8260 Viby J"; Jobbank.dk list includes "Arla Futures" | CONFIRMED |
| dk-aau | en.aau.dk/about-aau: "17.700 students", "+3.700 employees" | CONFIRMED |
| dk-robotics | odenserobotics.dk (ISARC 2027 news page): "Over €1 billion invested", "160+ robotics, automation and drone companies with 3,600 employees on Funen" | CONFIRMED (the cluster body's own figures) |
| dk-ict | Eurostat isoc_sks_itspt 2025: Denmark 5.7, Lithuania 5.7, EU 5.0, Sweden 8.9; Denmark is tenth of 33 European countries | CONFIRMED |
| dk-grad | Eurostat edat_lfse_24 2025: Denmark 83.8, EU 85.3; une_rt_a 15-24: Denmark 13.8, EU 15.2 | CONFIRMED |
| dk-wage-region | Statistics Denmark LONS30, 2025, all sectors, all forms of pay, employee group total, standardised monthly earnings: Denmark 52,846.17; Hovedstaden 57,773.37; Midtjylland 50,316.34; Syddanmark 49,834.53; Nordjylland 48,208.77 | CONFIRMED (all employees, not graduates) |

**Metrics.** Population and GDP: Eurostat metropolitan regions (area *metro*), population 2023, GDP 2022 (billions of EUR): Copenhagen 2,109,733 and 178.83; Aarhus 928,096 and 50.69; Aalborg 594,634 and 28.93; Odense 505,026 and 22.93. Wage: Statistics Denmark LONS30, region of the hub (area *region*), DKK per standardised month, mean: 57,773, 50,316, 48,209, 49,835. Rent: see the end of this log (Numbeo).

## P49 Sweden (data/atlas/se.js)

**Rating notes.** Stockholm IT *gap* → *dominant*; software *present* → *dominant*; finance *strong* → *dominant*, on Eurostat met_10r_3emp (53% of Swedish ICT employment and 64% of finance and insurance employment in the Stockholm metropolitan region, 2021) plus the Spotify and Klarna headquarters and the Handelsbanken head office. Banking stays *strong* (adds Handelsbanken). Management stays *strong*. Gothenburg management *present* → *strong* (two named employers with headquarters, AB Volvo and Volvo Car Group); Gothenburg IT *gap* → *strong* on Eurostat (33,000 ICT jobs, second in Sweden). Gothenburg finance *gap* → *strong* on the same Eurostat table (10,000 finance jobs, second in Sweden, above the 5,000-job floor in the record's rule). Malmö IT and finance stay *strong*. Uppsala stays unrated. Country `roles` now it, software, finance, management. Claims removed: none. `checked` 2026-10-03.

**Standing.** Stockholm software 5 / 4 / 2, IT 5 / 4 / 2, finance 5 / 3 / 2, management 5 / 2 / 1; Gothenburg management 4 / 2 / 1, IT 4 / 2 / 1, finance 4 / 1 / 1; Malmö IT 3 / 1 / 1, finance 3 / 1 / 1; Uppsala IT 2 / 1 / 1. Stockholm's regional 4 rests on Startup Genome (Top 40 rank 23; "top tier" with Amsterdam and Munich after London, Paris and Berlin; fourth in Europe for AI-native value); world 2 is a judgement because rank 23 is outside the rubric's "roughly top fifteen" for a 3. Finance regional 3 follows GFCI 40 (35th of 117; twelfth European centre).

| Claim | Source read, and what it says | Status |
|---|---|---|
| se-emp-sto | Eurostat met_10r_3emp 2021: Stockholm SE001MC total 1,316k, J 117k, K 68k; Sweden J 221k, K 107k | CONFIRMED (metropolitan region, 2021, rounded to thousands) |
| se-emp-got | Eurostat met_10r_3emp 2021: Göteborg SE002M total 870k, J 33k, K 10k | CONFIRMED |
| se-spotify | spotify.com/us/about-us/contact: "Regeringsgatan 19, SE-111 53 Stockholm" as Sweden (HQ); entities in 16 countries counted from the list | CONFIRMED |
| se-klarna | klarna.com/international/about-us: "Sveavägen 46, 111 34 Stockholm"; "26 countries supported" | CONFIRMED |
| se-handels | handelsbanken.com/en: "more than 12,000 employees"; "Head office Kungsträdgårdsgatan 2, SE-106 70 Stockholm" | CONFIRMED |
| se-volvo-size | volvogroup.com/en/about-us: "99K" employees, "17 Countries we have production in", "180 Markets", Gothenburg; investors.volvocars.com: "Volvo Car Group, Gunnar Engellaus väg 8, SE-418 78 Gothenburg" | CONFIRMED |
| se-axis | axis.com/about-axis: headquarters Lund, "around 5,000 employees in over 50 countries" | CONFIRMED |
| se-uu | uu.se/en/about-uu/facts-and-figures: "50,000 students", "7,539 (year average)", 6,648 full-time equivalents | CONFIRMED |
| se-qs | uu.se news 18 Jun 2026: Uppsala 87th (up from 93rd), 3rd in Sweden, Lund 71st, KTH 82nd; su.se news: Stockholm University 167th, fourth in Sweden | CONFIRMED |
| se-gfci | GFCI 40 table 1: Stockholm 35; Europe order counted from the table; table 16 fintech 17; Gothenburg listed as an associate centre | CONFIRMED |
| se-genome | startupgenome.com Top 40 page: "Stockholm emerged as the standout performer among European ecosystems, jumping eight positions to #23 and tying with Amsterdam-Delta"; Europe chapter: "Amsterdam, Munich, and Stockholm round out the top tier"; AI-native: London 26.3, Paris 20.2, Munich 6.2, Stockholm 5.8, Berlin 4.8 ($ billions); Stockholm page: ecosystem value $56 BN vs global average $25 BN, funding $1.6 BN, exits $34 BN | CONFIRMED |
| se-genome-got | startupgenome.com/ecosystems/gothenburg: ecosystem value $2 BN, funding $120 M, exits $1 BN | CONFIRMED |
| se-ict | Eurostat isoc_sks_itspt 2025: Sweden 8.9, Luxembourg 8.7, Finland 7.8, EU 5.0; first of 33 | CONFIRMED |
| se-grad | Eurostat edat_lfse_24 2025: Sweden 91.1, EU 85.3; une_rt_a 15-24: Sweden 24.3, EU 15.2; highest of DK 13.8, FI 21.8, NO 14.0, IS 9.5 | CONFIRMED |
| se-wage-region | Statistics Sweden AM0110 LonYrkeRegion4AN, 2025, all sectors, all occupations, total: Sweden 42,900; Stockholm 48,300; East-Central 40,500; South 41,700; West 42,300 (SEK, monthly salary) | CONFIRMED (all employees; NUTS 2 regions) |

**Metrics.** Population (2023) and GDP (2021, billions of EUR), Eurostat metropolitan regions (area *metro*): Stockholm 2,440,027 and 171.27; Gothenburg 1,758,656 and 88.58; Malmö 1,414,324 and 62.35; Uppsala 400,682 and 19.08. Wage: Statistics Sweden, mean monthly salary, NUTS 2 region (area *region*): 48,300; 42,300; 41,700; 40,500 SEK. Rent: see the end of this log.

## P50 Norway (data/atlas/no.js)

**Rating notes.** Oslo finance *strong* → *dominant* on Eurostat met_10r_3emp (46% of Norwegian finance and insurance employment in the Oslo metropolitan region, 2021), the Statistics Norway output share, DNB and NBIM. Oslo IT *gap* → *dominant* and software *gap* → *dominant* on the same table (45% of ICT employment; no other Norwegian hub has more than 8,000 of the 105,000 jobs). Banking stays *strong*. Stavanger business stays *present*. Bergen IT and finance stay *strong*; Trondheim stays unrated. Country `roles` now finance, it, software. Claims removed: none. `checked` 2026-10-03.

**Standing.** Oslo finance 5 / 2 / 1, IT 5 / 2 / 1, software 5 / 2 / 1; Stavanger business 3 / 1 / 1, IT 3 / 1 / 1; Bergen IT 4 / 1 / 1, finance 4 / 1 / 1; Trondheim IT 3 / 1 / 1. Oslo's regional 2 for finance: sixteenth of the European centres in GFCI 40, one place outside a top-fifteen reading of a 3. Software and IT regional 2: Startup Genome shows Oslo's ecosystem value ($12 billion) below the regional average ($14.3 billion).

| Claim | Source read, and what it says | Status |
|---|---|---|
| no-emp-osl | Eurostat met_10r_3emp 2021: Oslo NO001MC total 496k, J 47k, K 22k; Norway J 105k, K 48k | CONFIRMED (metropolitan region, rounded to thousands) |
| no-emp-sta | Eurostat met_10r_3emp 2021: Stavanger NO004M total 265k, J 8k, K 2k | CONFIRMED |
| no-nbim | nbim.no/en/about-us: "Bankplassen 2, P.O. Box 1179 Sentrum, NO-0107 Oslo"; "676 people from 37 countries"; Oslo, London, New York and Singapore | CONFIRMED |
| no-gfci | GFCI 40 table 1: Oslo 48 (rating 711, up 16); sixteenth among European centres counting the table; table 16 fintech 33; Bergen, Stavanger and Trondheim absent | CONFIRMED |
| no-genome | startupgenome.com/ecosystems/oslo: ecosystem value $12 BN (global average $25 BN, regional $14.3 BN); funding $418 M; exits $2 BN | CONFIRMED |
| no-ict | Eurostat isoc_sks_itspt 2025: Norway 5.9, ninth of 33 | CONFIRMED |
| no-youth | Eurostat une_rt_a, 15-24, 2025: Norway 14.0; 2023 11.0; EU 15.2 | CONFIRMED |
| no-wage-city | Statistics Norway table 12852, 2025, average monthly earnings (NOK), works in the region, all employees, both sexes: Total 62,070; Oslo 70,690; Stavanger 69,670; Bergen 64,170; Trondheim 62,760 (full-time employees: 64,650; 73,730; 72,760; 66,850; 65,070) | CONFIRMED |
| no-nhh-facts | nhh.no facts and figures: "Approximately 3,700 students", "Around 470 employees", Triple Crown (AACSB, EQUIS, AMBA), "On the Financial Times ranking since 2005" | CONFIRMED |
| no-ntnu | ntnu.edu/about: "43,500 Students", 3,815 (9 per cent) international, "8560 Employees", Trondheim headquarters | CONFIRMED |

**Search results not used.** QS 2027 ranks for Norwegian universities (snippets conflicted between 2026 and 2027 editions); DNB's employee count (three aggregators gave 8,436, 10,800 and 11,416); Equinor's 2026 graduate window (7 to 27 August, from a snippet; the university page returned 403).

**Metrics.** Population (2023) and GDP (2021, billions of EUR), Eurostat metropolitan regions (area *metro*): Oslo 709,037 and 70.97; Stavanger 492,350 and 31.58; Bergen 646,205 and 36.52; Trondheim 478,470 and 26.14. Wage: Statistics Norway table 12852, mean monthly earnings, all employees by municipality of work (area *city*): Oslo 70,690; Stavanger 69,670; Bergen 64,170; Trondheim 62,760 NOK. Rent: see the end of this log.

## P51 Finland (data/atlas/fi.js)

**Rating notes.** Helsinki IT *gap* → *dominant*, software *present* → *dominant*, finance *present* → *dominant*, on Eurostat met_10r_3emp (61% of Finnish ICT employment and 59% of finance and insurance employment in the Helsinki metropolitan region, 2021) with the Nordea group headquarters, Supercell and Startup Genome. Banking *present* → *strong* (same table, Nordea). Management stays *present*. Tampere and Turku IT stay *strong*. Country `roles` now it, software, finance. Claims removed: none. `checked` 2026-10-03.

**Standing.** Helsinki software 5 / 3 / 2, IT 5 / 3 / 2, finance 5 / 2 / 1; Tampere IT 4 / 1 / 1; Turku IT 3 / 1 / 1. Regional 3 for software and IT: Eurostat's ICT share puts Finland third of 33 European countries and Startup Genome's ecosystem value ($23 billion) is above the regional average ($14.3 billion), but there is no top-five claim; finance regional 2 and world 1 follow GFCI 40 (85th of 117).

| Claim | Source read, and what it says | Status |
|---|---|---|
| fi-emp-hel | Eurostat met_10r_3emp 2021: Helsinki FI001MC total 946.91k, J 72.97k, K 25.78k; Finland J 119.2k, K 43.7k | CONFIRMED |
| fi-emp-tam | Eurostat met_10r_3emp 2021: Tampere FI002M total 240.02k, J 12.81k, K 2.97k | CONFIRMED |
| fi-nordea-hq | nordea.com/en/about-nordea (WebFetch): group headquarters Helsinki; Denmark, Finland, Norway, Sweden, Poland, Estonia; London, New York, Shanghai | CONFIRMED (employee count not on the page) |
| fi-kone | kone.com/en/company: Espoo; "over 60,000 employees, in close to 70 countries" at the end of 2025 | CONFIRMED |
| fi-genome | startupgenome.com/ecosystems/helsinki: ecosystem value $23 BN, funding $997 M, exits $10 BN | CONFIRMED |
| fi-gfci | GFCI 40 table 1: Helsinki 85; Tampere and Turku absent | CONFIRMED |
| fi-ict | Eurostat isoc_sks_itspt 2025: Finland 7.8, third of 33 | CONFIRMED |
| fi-grad | Eurostat edat_lfse_24 2025: Finland 86.6, EU 85.3; une_rt_a 15-24: Finland 21.8 (2023: 16.2), EU 15.2 | CONFIRMED |
| fi-qs | studyinfinland.fi, 22 Jun 2026: Helsinki 123, Aalto 126, Oulu 360, LUT 390, Turku 398, Tampere 436, Jyväskylä 521 | CONFIRMED (a state agency's list; search snippets gave other numbers and were not used) |
| fi-wage-region | Statistics Finland 15b2, 2024, S0 total, both sexes: whole country 4,075; Uusimaa 4,513; Southwest Finland 3,806; Pirkanmaa 3,951 (EUR per month, average total earnings of full-time wage and salary earners; medians 3,615; 3,967; 3,435; 3,558) | CONFIRMED |

**Metrics.** Population (2023) and GDP (2021, billions of EUR), Eurostat metropolitan regions (area *metro*): Helsinki 1,733,033 and 98.66; Tampere 530,552 and 22.10; Turku 485,567 and 20.01. Wage: Statistics Finland 15b2, 2024, mean monthly earnings of full-time earners, region (area *region*): Uusimaa 4,513; Pirkanmaa 3,951; Southwest Finland 3,806 EUR. Rent: see the end of this log.

## P59 Iceland (data/atlas/is.js)

**Rating notes.** Reykjavík finance and banking *gap* → *strong*: Landsbankinn (Reykjastræti 6) and Arion Bank (Borgartún 19) give Reykjavík addresses on their own sites, and national finance employment is 6,610 (June 2026); Íslandsbanki's address is Kópavogur and is labelled so. Software and IT *gap* → *present* on CCP Games' own statement of a Reykjavik studio (the only named employer read). Other families *gap*; Statistics Iceland has no sector series below national level. Country `roles` gains *finance*. Claims removed: none.

**Standing.** Finance 5 / 1 / 1, software 5 / 2 / 1, IT 5 / 2 / 1. National 5 is the only-hub default backed by a data claim (national employment) and a ranking claim (GFCI lists Reykjavik as the only Icelandic centre, as an associate); Europe and world 1 follow the GFCI associate status; software Europe 2 follows Startup Genome's $3 billion against $14.3 billion.

| Claim | Source read, and what it says | Status |
|---|---|---|
| is-pop | Statistics Iceland MAN02005, 1 Jan 2026: Total 394,324; Reykjavikurborg 139,804; Kopavogsbaer 40,286; Seltjarnarnesbaer 4,609; Gardabaer 20,724; Hafnarfjardarkaupstadur 32,398; Mosfellsbaer 13,772; Kjosarhreppur 319; sum of the seven 251,912 | CONFIRMED (the grouping of the seven as the capital region is conventional and was summed by me, not read as a published total) |
| is-fin-emp | Statistics Iceland VIN10032, June 2026, total age, sex, origin, residence: total in employment 235,518; J 9,104; K 6,610 | CONFIRMED (national) |
| is-pay | Statistics Iceland VIN02003, 2025, total occupations, "Total earnings - full-time", mean/median: all 1,058/948; J 1,098/961; K 1,372/1,176 (thousand ISK a month; unit read from the table's scale, not stated in the API response) | PARTLY CONFIRMED (unit inferred) |
| is-banks | landsbankinn.com: "Landsbankinn hf. Reykjastræti 6, 101 Reykjavík"; arionbanki.is: "Arion Bank, Borgartún 19, 105 Reykjavík"; islandsbanki.is: "Íslandsbanki, Hagasmári 3, 201 Kópavogur" | CONFIRMED (addresses) |
| is-ccp | ccpgames.com/careers: "Our teams work across studios in Reykjavik, London, and Shanghai" | CONFIRMED |
| is-lv | landsvirkjun.com: "Katrínartún 2, 105 Reykjavík" | CONFIRMED |
| is-genome | startupgenome.com/ecosystems/reykjavik: ecosystem value $3 BN, global avg $25 BN, regional avg $14.3 BN; early-stage funding $94 M | CONFIRMED |
| is-gfci | GFCI 40 table 2: Reykjavik, 38 assessments, mean 684 | CONFIRMED |
| is-grad | Eurostat edat_lfse_24 2025 Iceland 92.0 (EU 85.3); une_rt_a 15-24: 9.5 (2023 8.8; EU 15.2) | CONFIRMED |
| is-eea, is-60, is-18m, is-lfs, is-tour | unchanged from round 4f (P59) | as in round 4f |

**Metrics.** Population: Reykjavík city 139,804 (area *city*, 1 Jan 2026). GDP and wage: not published by city or region, so left out. Rent: see the end of this log.

**Still unverified for Iceland:** a Reykjavík-only jobs or pay series; graduate programmes of the banks and CCP; QS rank of the University of Iceland (conflicting snippets, not used).

## P57 Lithuania (data/atlas/lt.js)

**Rating notes.** Vilnius finance *strong* → *dominant* on Eurostat met_10r_3emp (73% of Lithuanian finance and insurance employment in the Vilnius metropolitan region, 2021) plus the Invest Lithuania fintech count (231 of 248 licensed firms in Vilnius). IT *present* → *dominant* and software *gap* → *dominant* on the ICT share (67%, same table), the ICT-specialist share, and Vinted's and Nord Security's Vilnius headquarters. Banking *present* → *strong* (Eurostat K share, Swedbank's Vilnius address, the Nordic bank service centres). Business stays *present*. Kaunas IT stays *strong* (second in ICT jobs, 9,890). Country `roles` gains *software*. Claims removed: none.

**Standing.** Vilnius finance 5 / 3 / 1, software 5 / 2 / 1, IT 5 / 2 / 1; Kaunas IT 3 / 1 / 1. Finance regional 3 rests on a cross-country statistic (first in the EU by fintech licences issued, Invest Lithuania) against GFCI 40, which lists Vilnius only as an associate centre: a tension I settled at 3 and flagged in the brief. Software and IT regional 2: Startup Genome ecosystem value $8 billion against the $14.3 billion European average.

| Claim | Source read, and what it says | Status |
|---|---|---|
| lt-emp-vil | Eurostat met_10r_3emp 2021: Vilnius LT001MC total 475.42k, J 33.98k, K 22.38k; Lithuania J 50.86k, K 30.53k | CONFIRMED |
| lt-ict | Eurostat isoc_sks_itspt 2025: Lithuania 5.7% (83.1 thousand); EU 5.0 | CONFIRMED |
| lt-wage | Statistics Lithuania S3R0050_M3060837_1 (county × activity, gross, 2025): Lietuvos Respublika total 2,411.4, J 4,168.4, K 3,847.7; Vilniaus apskritis 2,655.8, 4,358.9, 3,996.5; Kauno apskritis 2,416.4, 3,714.8, 3,361.7 (EUR a month) | CONFIRMED |
| metrics wage | Statistics Lithuania S3R0050_M3060322, gross, "Šalies ūkis su individualiosiomis įmonėmis", men and women, 2026K2: Vilniaus m. sav. 2,963.4; Kauno m. sav. 2,733.9; Lietuvos Respublika 2,616.0 | CONFIRMED |
| lt-swed | swedbank.lt contacts: "„Swedbank“, AB Konstitucijos pr. 20A, 09321 Vilnius" | CONFIRMED (address) |
| lt-vinted | vinted.com/about: "more than 2,000 people work from our HQ in Lithuania and offices across Europe"; careers.vinted.com lists roles in Vilnius | CONFIRMED |
| lt-nord | nordsecurity.com/careers: "our Vilnius HQ"; location list Kaunas, Vilnius, Madrid | CONFIRMED |
| lt-genome | startupgenome.com/ecosystems/vilnius: ecosystem value $8 BN (global avg $25 BN, regional $14.3 BN) | CONFIRMED |
| lt-gfci | GFCI 40 table 2 (associate centres): Vilnius 34 assessments, mean 635; Kaunas 15, mean 553 | CONFIRMED |
| lt-qs | vu.lt news 18 Jun 2026: "ranks 465th globally, maintaining its position as the highest-ranked higher education institution in Lithuania" | CONFIRMED |
| lt-kaunas-inv | investlithuania.com/regions/kaunas: KTU "the largest provider of qualified engineers in the country"; "Kaunas FEZ, a hub of logistics and advanced manufacturing"; "36% of Kaunas' 50k student pool studies in the engineering, manufacturing and construction fields" | CONFIRMED (agency wording) |
| lt-grad-lab | Eurostat edat_lfse_24 2025: Lithuania 92.7 (EU 85.3); une_rt_a 15-24: 14.1 (2023 13.8; EU 15.2); edat_lfse_03 25-34 tertiary: 60.8 (EU 44.8) | CONFIRMED |
| lt-eu, lt-20h, lt-grad, lt-fintech, lt-gbs, lt-kaunas | unchanged from rounds 4f and 4k (P57) | as before |

**Metrics.** Population (2023) and GDP (2021, billions of EUR), Eurostat metropolitan regions (area *metro*): Vilnius 848,724 and 24.36; Kaunas 579,903 and 11.69. Wage: Statistics Lithuania S3R0050, gross, city municipality, second quarter 2026 (area *city*): 2,963 and 2,734 EUR. Rent: see the end of this log.

**Not used.** QS rank of Kaunas University of Technology (the university page did not load; a search summary said =696); Kaunas free-economic-zone jobs figures from secondary pages.

## P52 Poland (data/atlas/pl.js)

**Rating notes.** Warsaw software *present* → *dominant*, IT *gap* → *dominant* and finance *gap* → *dominant* on Eurostat met_10r_3emp (Warsaw metropolitan region holds 24% of Polish information-and-communication jobs and 28% of finance-and-insurance jobs, 2021, the largest by far; fourth and second of the 25 European capital regions reported), plus the ICT-specialist share, the Warsaw Stock Exchange's own statement, and named employers (Goldman Sachs, Bending Spoons, Bolt). Warsaw business *strong* → *dominant* on ABSL (429 of 2,081 centres; more than 100,000 jobs). Kraków business *strong* → *dominant* (ABSL: 324 centres, nearly 108,000 jobs) and IT *present* → *strong* and finance *present* → *strong* on Eurostat (65,800 ICT and 28,600 finance jobs; second in Poland for ICT). Wrocław IT *gap* → *strong* on Eurostat (47,800 ICT jobs, fourth in Poland; the 258 centres from ABSL keep business *strong*). Katowice (IT, finance *strong*) and Gdańsk, Poznań and Łódź (not rated) unchanged from round 4k. Country `roles` gains *software*. Claims removed: none. `checked` 2026-10-03.

**Standing.** Warsaw business 5 / 3 / 2, IT 5 / 3 / 2, software 5 / 2 / 1, finance 5 / 3 / 1; Kraków business 5 / 3 / 2, IT 4 / 2 / 1, finance 4 / 2 / 1; Wrocław business 4 / 2 / 1, IT 4 / 2 / 1; Katowice IT 4 / 2 / 1, finance 4 / 2 / 1; Gdańsk IT 4 / 1 / 1; Poznań and Łódź IT 3 / 1 / 1. Warsaw regional 3 for IT and finance rests on the Eurostat capital-region ranking (fourth for ICT, second for finance, computed from the table) and on GFCI 40 (78th of 117, third in Eastern Europe and Central Asia after Astana and Cyprus), which is why it is not 4: London, Paris and others are clearly larger. World 2 for business and IT is the Warsaw/Kraków scale of centres, not a ranking; software is held at world 1 and regional 2 because Startup Genome values Warsaw at $3 billion and Kraków at $1 billion against the $14.3 billion European average. Kraków business regional 3 rests on ABSL's counts alone (no European city-by-city comparison was read); this is the weakest regional step in the record. Mid-sized cities are 4 nationally only where Eurostat puts them second to fourth.

| Claim | Source read, and what it says | Status |
|---|---|---|
| pl-emp-war | Eurostat met_10r_3emp 2021 (API, PL001MC): J 119.2k, K 113.8k, total 1,768.7k; Poland J 496.8k, K 405.7k. 119.2/496.8 = 24.0%; 113.8/405.7 = 28.1%. Ranking among the 25 capital ("MC") metropolitan regions in the same table, re-computed: ICT Paris 506.5, Budapest 143.9, Rome 121.8, Warsaw 119.2; finance Paris 313.9, Warsaw 113.8, Dublin 80.7 | CONFIRMED (shares and rankings re-computed from the table) |
| pl-emp-krk | Same table, PL003M: J 65.8k, K 28.6k, total 844.4k | CONFIRMED |
| pl-emp-wro | Same table, PL004M: J 47.8k, K 24.2k, total 434.4k | CONFIRMED |
| pl-katowice, pl-gdansk, pl-poznan, pl-lodz | Same table (PL010M 49.4k/31.6k/1,186.6k; PL006M 32.0k/20.0k/657.0k; PL005M 26.8k/18.7k/701.4k; PL002M 23.2k/15.0k/545.4k) and met_10r_3gdp | CONFIRMED (round 4k; figures re-checked here against the table) |
| pl-ict | Eurostat isoc_sks_itspt 2025: Poland 4.5% (778.8 thousand); EU 5.0 | CONFIRMED |
| pl-wage | Statistics Poland, Local Data Bank (BDL) variable 64428, average monthly gross wages and salaries, grand total, powiat level, 2025: Poland 9,371; Warszawa 11,677.57; Kraków 11,404.02; Gdańsk 10,955.78; Katowice 10,794.26; Poznań 10,284.81; Wrocław 10,147.90; Łódź 9,367.00 (PLN) | CONFIRMED (the variable's coverage by enterprise size was not checked) |
| pl-gpw | gpw.pl/capital-group: "Warsaw Stock Exchange is the largest stock exchange of financial instruments in the region of Central and Eastern Europe"; "The Warsaw Stock Exchange has the biggest capitalisation of all exchanges in Central and Eastern Europe" | CONFIRMED (self-description; the listing count on a search summary, 402 companies, was not on the page read and is not used) |
| pl-gfci | GFCI 40 table 1: Warsaw 78 (mean 678); table 16: Warsaw fintech 87 (615); regional text: "Astana leads the region, with Cyprus and Warsaw in second and third place regionally" (Eastern Europe and Central Asia). Kraków does not appear | CONFIRMED |
| pl-genome | startupgenome.com/ecosystems/warsaw (re-fetched 3 Oct 2026): ecosystem value $3 BN (global avg $25 BN, regional $14.3 BN), early-stage funding $327 M; /krakow: $1 BN, $56 M | CONFIRMED |
| pl-bolt | bolt.eu/en/careers: "Our global talent is based in our HQ in Tallinn, and our key hubs—London, Warsaw, Bucharest, and Berlin" | CONFIRMED |
| pl-cdp | cdprojekt.com careers privacy notice: "CD PROJEKT RED S.A. with its registered seat in Warsaw, Poland, ul. Jagiellońska 74, 03-301 Warszawa" | CONFIRMED (registered seat, not headcount) |
| pl-grad-lab | Eurostat edat_lfse_24 2025 (ED5-8, 20-34, within three years of leaving): Poland 91.2, EU 85.3; une_rt_a 15-24: 12.2 (2023 11.4; EU 15.2); edat_lfse_03 25-34 tertiary: 45.2 (EU 44.8) | CONFIRMED |
| pl-absl, pl-krk, pl-hsbc, pl-gs, pl-bs, pl-langs, pl-auto, pl-pay, pl-rent, pl-eu, pl-work, pl-grad | unchanged from round 4e (P52) and the library | as in round 4e (several are library-sourced) |

**Metrics.** Population (2023) and GDP (2021, billions of EUR), Eurostat metropolitan regions (area *metro*): Warsaw 3,269,510 and 99.75; Kraków 1,543,724 and 28.74; Wrocław 671,206 and 16.58; Katowice 2,535,354 and 44.57; Gdańsk 1,368,405 and 23.78; Poznań 1,249,495 and 28.60; Łódź 1,038,261 and 18.42. Wage: Statistics Poland BDL variable 64428, 2025, mean monthly gross, city county (area *city*): 11,677.57; 11,404.02; 10,147.90; 10,794.26; 10,955.78; 10,284.81; 9,367.00 PLN. Rent: not added (Numbeo refused automated access on 3 October 2026; see the end of this log).

**Not used.** ABSL's 2026 report (a search summary gave 500,500 people in 2,179 centres; not read on the page); PKO Bank Polski's 2023 directors' report figure (over 25,600 FTEs) because the bank's seat could not be read there; Allegro, Comarch, InPost and bank headquarters.

## P53 Czech Republic (data/atlas/cz.js)

**Rating notes.** Prague IT *strong* → *dominant*, finance *strong* → *dominant* and software *gap* → *dominant* on Eurostat met_10r_3emp (Prague metropolitan region holds 50% of Czech information-and-communication jobs and 51% of finance-and-insurance jobs, 2022), the Labour Force Survey shares already in the record, Gen Digital's stated Prague headquarters and the JetBrains Prague entity. Prague banking *gap* → *strong* on four bank headquarters (Komerční banka, Česká spořitelna, Raiffeisenbank, MONETA) read on their own pages plus the Eurostat finance count. Prague business stays *present*. Brno IT and finance stay *strong* (second in the country); Brno software *gap* → *strong* (Eurostat data claim plus Kiwi.com's stated Brno headquarters and Red Hat's two Brno offices). Ostrava IT and finance stay *strong* (third); Ostrava software *gap* → *present* on a single named employer (a Tietoevry vacancy listed in Ostrava, the lowest rating one employer can carry). Country `roles` gains *software*. Claims removed: none. `checked` 2026-10-03.

**Standing.** Prague finance 5 / 2 / 1, IT 5 / 2 / 1, software 5 / 2 / 1; Brno IT 4 / 2 / 1, software 4 / 2 / 1, finance 4 / 1 / 1; Ostrava IT 3 / 1 / 1, finance 3 / 1 / 1. Prague's regional 2 is deliberate: Eurostat's capital-region table puts Prague tenth of 25 for ICT and fourteenth for finance (re-computed from the table), GFCI 40 has it 102nd of 117 and eighth of 14 in Eastern Europe and Central Asia, and Startup Genome values Prague at $8 billion against a European average of $14.3 billion. Brno regional 2 for IT and software is a judgement from 38,390 ICT jobs beside Warsaw's 119,200 and Kraków's 65,800 (the Eurostat Polish metropolitan counts read for P52) and Startup Genome's $1 billion; it is the weakest regional step in this record.

| Claim | Source read, and what it says | Status |
|---|---|---|
| cz-emp-pra | Eurostat met_10r_3emp 2022 (API, CZ001MC): total 1,591.24k, J 91.61k, K 42.05k; Czechia total 5,437.66k, J 181.93k, K 82.78k. 91.61/181.93 = 50.4%; 42.05/82.78 = 50.8%. Ranking among the 25 capital ("MC") metropolitan regions in the same table, re-computed: ICT Praha 10th (Paris 506.5, Budapest 143.9, Rome 121.8, Warsaw 119.2, Stockholm 117.0, Amsterdam 114.0, Bucharest 108.8, Sofia 104.6, Dublin 97.7, Prague 91.6); finance Praha 14th (Prague 42.05) | CONFIRMED (shares and ranks re-computed from the table) |
| cz-brno, cz-ostrava | Same table: Brno CZ002M total 618.66k, J 38.39k, K 8.78k; Ostrava CZ003M 563.22k, J 15.24k, K 6.06k; met_10r_3gdp 2022 Brno 30,334 and Ostrava 24,329 million EUR | CONFIRMED (round 4k; re-checked against the table) |
| cz-ict | Eurostat isoc_sks_itspt 2025: Czechia 4.7% (248.2 thousand); EU 5.0 | CONFIRMED |
| cz-wage-reg | Czech Statistical Office, csu.gov.cz/pha/prumerna-mzda-v-praze-4-ctvrtleti-2025: "Průměrná hrubá mzda v Praze v roce 2025 byla 62 723 Kč, čímž převýšila republikový průměr (49 215 Kč)"; csu.gov.cz/jhm/…-ve-4-ctvrtleti-2025-a-v-1-az-4-ctvrtleti-2025: the four-quarter 2025 average "48 467 Kč"; csu.gov.cz/msk/…-ve-4-ctvrtleti-2025: "V roce 2025 dosáhla průměrná mzda v Moravskoslezském kraji 44 241 Kč". The Prague page marks 2025 figures as preliminary | CONFIRMED (preliminary) |
| cz-kb | kb.cz/en/about-bank/contacts: "Headquarters Komerční banka, a.s. Praha 1, Na Příkopě 33 čp. 969, 114 07" | CONFIRMED (address) |
| cz-cs | csas.cz/en/contact: "Headquarters Česká spořitelna, a.s. Olbrachtova 1929/62 140 00 Praha 4" | CONFIRMED (address) |
| cz-moneta | moneta.cz/kontakty: "Sídlo společnosti MONETA Money Bank, a.s. BB Centrum, Vyskočilova 1442/1b 140 28 Praha 4 - Michle"; "Korespondenční adresa … Na Rovince 871 720 00 Ostrava-Hrabová" | CONFIRMED (addresses; the Ostrava address is a correspondence address, which says nothing about staff numbers) |
| cz-rb | rb.cz/o-nas/kontakty: "Centrála Raiffeisenbank a.s. Hvězdova 1716/2b 140 78 Praha 4" | CONFIRMED (address) |
| cz-cnb | cnb.cz/en/about-cnb/contacts: "Ústředí ČNB Na Příkopě 864/28 115 03 Praha 1" | CONFIRMED (address) |
| cz-gen | gendigital.com/us/en/careers: "Our global workforce has dual headquarters in Prague, Czech Republic and Tempe, Arizona, USA" | CONFIRMED |
| cz-jb | jetbrains.com/company/contacts: "Headquarters The Netherlands JetBrains N.V. Terrace Tower, Gelrestraat 16 1079 MZ Amsterdam"; "Sales EMEA and APAC JetBrains s.r.o., JetBrains Distributions s.r.o. Kavčí Hory Office Park, Na Hřebenech II 1718/8 Praha 4 - Nusle" | CONFIRMED (the page gives Prague as the sales contact, not as the headquarters) |
| cz-redhat | redhat.com/en/about/offices, Czech Republic: "Brno Purkyňova 647/111 612 00 Brno"; "Brno Purkyňova 665/115 612 00 Brno"; "Prague c/o WeWork Národní 135/14 110 00 Prague" | CONFIRMED (addresses; no headcount) |
| cz-kiwi | jobs.kiwi.com/locations: "Brno, CZ Headquarters Lazaretní 925/9 615 00 Brno–Zábrdovice"; "Prague, CZ Core office location River Garden office II/III Rohanské nábřeží 678/25 186 00 Prague 8"; jobs.kiwi.com/about-us: "400+ employees 5 core office locations 51 nationalities" | CONFIRMED |
| cz-tieto | tietoevry.com/cz/kariera: one open vacancy "Product Owner Data, Analytics & AI - Tieto Indtech … Location Ostrava, Czech Republic"; "zaměstnáváme 13 000 odborníků po celém světě" | PARTLY CONFIRMED (one vacancy shows a presence, not its size) |
| cz-absl | expats.cz partner article with ABSL Czech Republic, 29 Apr 2025: "over 400 companies employing nearly 200,000 people"; "Approximately 43 percent of employees come from outside Czechia"; "72 percent of business service centers nationwide are now using Robotic Process Automation, while 59 percent have implemented generative AI" | PARTLY CONFIRMED (a media piece published in partnership with ABSL, not the report itself) |
| cz-genome, cz-genome-brno | startupgenome.com/ecosystems/prague (re-fetched 3 Oct 2026): ecosystem value $8 BN, early-stage funding $391 M, regional avg $14.3 BN; /brno: $1 BN, $57 M | CONFIRMED |
| cz-gfci | GFCI 40 table 1: Prague 102 (mean 632); table 11 (Eastern Europe and Central Asia): Prague eighth of 14 (Astana, Cyprus, Warsaw, Tallinn, Istanbul, Almaty, Moscow, Prague); table 16 fintech Prague 95; Brno and Ostrava absent | CONFIRMED |
| cz-grad-lab | Eurostat edat_lfse_24 2025 (ED5-8, 20-34, within three years): Czechia 86.1, EU 85.3; une_rt_a 15-24: 10.4 (2023 8.3; EU 15.2); edat_lfse_03 25-34 tertiary: 36.0 (EU 44.8) | CONFIRMED |
| cz-eu, cz-work, cz-grad, cz-lfs, cz-wage, cz-gdp, cz-pay | unchanged from round 4e (P53) | as in round 4e (cz-pay is library-sourced) |

**Metrics.** Population (2023) and GDP (2022, billions of EUR), Eurostat metropolitan regions (area *metro*): Prague 2,796,717 and 109.99; Brno 1,217,200 and 30.33; Ostrava 1,189,674 and 24.33. Wage: Czech Statistical Office, 2025 annual average, gross monthly, region (area *region*): Prague 62,723; South Moravian 48,467; Moravian-Silesian 44,241 CZK. Rent: not added (Numbeo refused access).

**Not used.** QS ranks of Charles University, Czech Technical University and Masaryk University (search summaries only, and possibly from the 2026 edition rather than the 2027 one published in June 2026); Brno employer headcounts from secondary pages (Red Hat Czech 1,900, IBM 3,500, Honeywell): not on any page read; Tietoevry's Czech headcount (search summary only); ABSL's Czech centre count by city.

## P54 Romania (data/atlas/ro.js)

**Rating notes.** Bucharest IT *present* → *dominant*, finance *gap* → *dominant* and software *gap* → *dominant* on Eurostat met_10r_3emp (Bucharest metropolitan region holds 56% of Romanian information-and-communication jobs and 35% of finance-and-insurance jobs, 2021; no other region exceeds 17,390 and 8,120), the ICT-specialist share, and named employers (Ubisoft Bucharest, Bolt, the BCR and BRD head offices). Bucharest banking *gap* → *strong* on three bank seats (BCR, BRD, the National Bank of Romania) plus the Eurostat finance count. Bucharest accounting stays *present* (ABSL). Cluj-Napoca IT and finance stay *strong* (second in the country); Cluj-Napoca software *gap* → *strong* (Eurostat data claim, Bosch's research centre in Cluj, Evozon located in Cluj-Napoca) and banking *gap* → *strong* (Banca Transilvania's registered address in Cluj-Napoca, 10,180 bank employees, plus the Eurostat finance count). Iași IT stays *strong* (third); Iași software *gap* → *present* on Endava. Timișoara IT *gap* → *present* (Bosch's business and technology solutions centre) and software *gap* → *present* (Endava's office); the former gap "no family is rated in Timișoara" is removed. Country `roles` gains *software*. Claims removed: none. `checked` 2026-10-03.

**Standing.** Bucharest finance 5 / 2 / 1, IT 5 / 3 / 1, software 5 / 2 / 1; Cluj-Napoca IT, software and finance 4 / 1 / 1; Iași IT 3 / 1 / 1; Timișoara IT 3 / 1 / 1. Bucharest regional 3 for IT is the Eurostat capital-region ranking (seventh of 25 for ICT jobs, re-computed from the table) and 2 for finance (fifteenth of 25; GFCI 40 does not list Bucharest) and for software (Startup Genome $2 billion against the $14.3 billion European average). The regional steps for Bucharest, Prague, Warsaw and Sofia use one rule: 3 for IT where the capital region is in the top eight of the 25 by ICT jobs, 2 otherwise; 3 is a judgement because the table omits London and non-capital centres.

| Claim | Source read, and what it says | Status |
|---|---|---|
| ro-emp-buc | Eurostat met_10r_3emp 2021 (API, RO001MC): total 1,257.14k, J 108.84k, K 36.08k; Romania J 194.7k, K 102.6k. 108.84/194.7 = 55.9%; 36.08/102.6 = 35.2%. Capital-region ranks re-computed from the table: ICT Bucuresti 7th (after Paris, Budapest, Rome, Warsaw, Stockholm, Amsterdam), finance 15th | CONFIRMED |
| ro-cluj-napoca, ro-iasi, ro-timisoara | Same table: Cluj-Napoca RO002M total 359.06k, J 17.39k, K 8.12k; Iași RO502M 382.64k, 16.81k, 3.27k; Timișoara RO003M 321.02k, 8.46k, 3.34k; met_10r_3gdp 2021 12,471, 8,394 and 11,147 million EUR | CONFIRMED (round 4k; re-checked) |
| ro-ict | Eurostat isoc_sks_itspt 2025: Romania 2.7% (207.8 thousand); EU 5.0; only Greece (2.5) lower among EU members | CONFIRMED |
| ro-bcr | BCR annual administrators' report 2025 (bvb.ro, issued 27 Mar 2026): "Its registered office is at 15D Orhideelor avenue, The Bridge 1 Building 2nd Floor, 6th District, Bucharest"; "The number of own employees of the Bank at 31 December 2025 was 4,809 employees … of the Group … 5,117" (the 2022 report read first gave Calea Plevnei 159 and 5,018, now superseded) | CONFIRMED |
| ro-brd | BRD annual report 2025 (Romanian; bvb.ro, 18 Mar 2026): "Banca are sediul central si sediul social in Bucuresti, Blvd Ion Mihalache nr. 1-7"; "numarul total de angajati activi ai Bancii la sfarsitul anului a fost de 4,965"; Group 5,124 | CONFIRMED |
| ro-bt | Banca Transilvania annual report 2025 (English; bvb.ro, 27 Mar 2026): "The registered address of the Bank is 30-36 Calea Dorobantilor, Cluj-Napoca"; "The Bank's number of active employees as at December 31, 2025 was 10,180"; Group 13,361; "the largest bank in Romania in terms of total assets". The report also lists "1 Head Office located in Bucharest" beside the Cluj-Napoca head office, so which is the operating head office is not settled by the page | CONFIRMED (address, headcount); PARTLY (which head office) |
| ro-bnr | bnr.ro/Contact: "Sediul central BNR Strada Lipscani nr. 25, sector 3, Bucureşti" | CONFIRMED |
| ro-bosch | bosch.ro/en/our-company/bosch-in-romania: "employs around 9,900 associates"; "The company’s headquarters is based in Bucharest"; "Bosch runs a research and development center located in Cluj. In Cluj, Bosch operates a production unit for automotive technology"; "In Timisoara, Bosch has a center for business and technology solutions"; "headquarters has been located in Bucharest since 1994" | CONFIRMED |
| ro-ubisoft | ubisoft.com careers, Bucharest: "Ubisoft Bucharest Jiului 8 street"; "an important pillar for our local gaming industry since 1992"; "Today, Ubisoft Bucharest is the 2nd largest Ubisoft studio worldwide" | CONFIRMED (self-description) |
| ro-bolt | bolt.eu/en/careers (re-read 3 Oct 2026): "key hubs—London, Warsaw, Bucharest, and Berlin" | CONFIRMED |
| ro-endava | The Diplomat Bucharest, 1 Sep 2025: "Present in the Palas Iași complex … since 2010, Endava has started as a small office of 25 employees initially and has grown over the years to a team of over 700 specialists"; landlord: "offices throughout the United Business Center network in Iași, Cluj-Napoca and Timișoara" | PARTLY CONFIRMED (trade press quoting the company and its landlord) |
| ro-vois | The Diplomat Bucharest, 13 Nov 2025: "VOIS Romania … announces the opening of a new office in Iași" (headline: "plans to hire 150 new employees by the end of 2026") | PARTLY CONFIRMED (trade press) |
| ro-evozon | evozon.com/about-us: "a software development and software consulting agency located in the heart of Transylvania, Cluj-Napoca" | CONFIRMED (no headcount stated) |
| ro-genome | startupgenome.com/ecosystems/bucharest (re-fetched 3 Oct 2026): ecosystem value $2 BN (global avg $25 BN, regional $14.3 BN); early-stage funding $123 M | CONFIRMED |
| ro-gfci | GFCI 40 tables 1 and 2: no Bucharest, Cluj-Napoca, Iași or Timișoara among the centres | CONFIRMED (absence) |
| ro-grad-lab | Eurostat edat_lfse_24 2025 (ED5-8, 20-34, within three years): Romania 81.1, EU 85.3; une_rt_a 15-24: 26.1 (2023 21.8; EU 15.2); edat_lfse_03 25-34 tertiary: 23.0 (EU 44.8) | CONFIRMED |
| ro-eu, ro-6h, ro-grad, ro-absl, ro-net | unchanged from round 4e (P54) | as in round 4e (ro-net is library-sourced) |

**Metrics.** Population (2023) and GDP (2021, billions of EUR), Eurostat metropolitan regions (area *metro*): Bucharest 2,290,125 and 67.62; Cluj-Napoca 688,930 and 12.47; Iași 774,025 and 8.39; Timișoara 658,607 and 11.15. Wage: not added; the National Institute of Statistics site (insse.ro) answered automated requests with a JavaScript browser check, which was not bypassed, and no other county wage series was found. Rent: not added (Numbeo refused access).

**Not used.** County wage figures quoted in press search summaries (Cluj 12,276 lei in December 2025; Bucharest above 12,000 lei in April 2025): secondary and not from one consistent source; Banca Transilvania's headcount from Wikipedia and data aggregators; Continental/Aumovio Timișoara headcounts (search summaries only, with layoffs reported); Capgemini, Amazon, Oracle and Accenture in Iași (search summary, not read on a page).

## P55 Bulgaria (data/atlas/bg.js)

**Rating notes.** Sofia IT *present* → *dominant*, finance *gap* → *dominant* and software *gap* → *dominant* on Eurostat met_10r_3emp (Sofia metropolitan region holds 84% of Bulgarian information-and-communication jobs and 77% of finance-and-insurance jobs, 2021), the ICT-specialist share, the AIBEST sector totals and named employers (SAP Labs Bulgaria; UniCredit Bulbank and First Investment Bank for finance). Sofia banking *gap* → *strong* on the two bank head offices plus the Eurostat finance count. Plovdiv IT stays *strong* (second in the country); Varna stays unrated for demand (4,840 and 2,830 jobs, below the record's 5,000-job threshold). Business is not rated anywhere: AIBEST's split by city was not read. Country `roles` gains *finance* and *software*. Claims removed: none. `checked` 2026-10-03.

**Standing.** Sofia IT 5 / 3 / 1, software 5 / 2 / 1, finance 5 / 2 / 1; Plovdiv IT 4 / 1 / 1, finance 3 / 1 / 1; Varna IT 3 / 1 / 1, finance 4 / 1 / 1 (second in the country for finance jobs). Sofia's regional 3 for IT is the rule used for Bucharest and Warsaw: the capital region is in the top eight of 25 by ICT jobs (Sofia eighth, re-computed from the table); finance 2 because Sofia is tenth of 25 for finance jobs and GFCI 40 ranks it 115th of 117 and last of 14 in Eastern Europe and Central Asia; software 2 because Startup Genome values Sofia at $3 billion against $14.3 billion. The Plovdiv and Varna steps rest on the Eurostat counts alone and are the weakest in this record.

| Claim | Source read, and what it says | Status |
|---|---|---|
| bg-emp-sof | Eurostat met_10r_3emp 2021 (API, BG001MC): total 1,148.51k, J 104.55k, K 52.08k; Bulgaria J 123.93k, K 67.55k. 104.55/123.93 = 84.4%; 52.08/67.55 = 77.1%. Capital-region ranks re-computed from the table: ICT Sofia 8th (after Paris, Budapest, Rome, Warsaw, Stockholm, Amsterdam, Bucharest), finance 10th | CONFIRMED |
| bg-plovdiv, bg-varna | Same table: Plovdiv BG002M total 326.91k, J 5.35k, K 2.32k; Varna BG003M 211.17k, 4.84k, 2.83k; met_10r_3gdp 2021 5,298 and 4,309 million EUR | CONFIRMED (round 4k; re-checked) |
| bg-ict | Eurostat isoc_sks_itspt 2025: Bulgaria 4.8% (141.5 thousand); EU 5.0 | CONFIRMED |
| bg-wage | National Statistical Institute, Statistical Yearbook 2025 (nsi.bg/en/file/35971/God2025.pdf), labour market table 2, "Average annual wages and salaries of the employees under labour contract … by district in 2024" (BGN): country total 27,898; Sofia (stolitsa) 38,728; Plovdiv 23,473; Varna 26,007; information and communication: country 64,537, Sofia (stolitsa) 68,972, Plovdiv 54,227, Varna 48,085; finance and insurance: country 41,620, Sofia (stolitsa) 46,423 | CONFIRMED (2024, BGN a year) |
| bg-ubb | UniCredit Bulbank annual report 2025 (English): "registered address city of Sofia, 7 “Sveta Nedelya” sq."; "Resources (number) – (eop) Employees 3 038 3 134" | CONFIRMED (the highlights table's scope, bank or group, is not labelled in the extracted text) |
| bg-fibank | fibank.bg/en/contacts: "Head office First Investment Bank … 111 P Tsarigradsko shose Blvd., 1784 Sofia" | CONFIRMED (address) |
| bg-sap | Trending Topics, 19 Oct 2020 (read through WebFetch): "SAP Labs Bulgaria started back in 2000 when SAP acquired the Bulgarian branch of ProSyst"; "today employs over 1000 people"; "In its 20 year history, it has grown almost 20 times" | PARTLY CONFIRMED (six years old; the article does not give the SAP Labs page itself, which returned 403) |
| bg-genome | startupgenome.com/ecosystems/sofia (re-fetched 3 Oct 2026): ecosystem value $3 BN (global avg $25 BN, regional $14.3 BN); early-stage funding $63 M | CONFIRMED |
| bg-gfci | GFCI 40 table 1: Sofia 115 (mean 593); table 11: Sofia 14th of 14; table 16 fintech: Sofia 93; Plovdiv and Varna absent | CONFIRMED |
| bg-grad-lab | Eurostat edat_lfse_24 2025 (ED5-8, 20-34, within three years): Bulgaria 90.0, EU 85.3; une_rt_a 15-24: 13.1 (2023 12.1; EU 15.2); edat_lfse_03 25-34 tertiary: 41.2 (EU 44.8) | CONFIRMED |
| bg-eu, bg-20h, bg-grad, bg-aibest, bg-pay | unchanged from round 4e (P55); the AIBEST summary page (aibest.org/annualreport2025) was re-read: "833 Bulgarian companies", "105,436 full-time employees (FTEs)", "increasing by just 0.2%", "operating revenue continued to grow by 7.6%" | as in round 4e (bg-pay is library-sourced) |

**Metrics.** Population (2023) and GDP (2021, billions of EUR), Eurostat metropolitan regions (area *metro*): Sofia 1,619,690 and 33.26; Plovdiv 631,516 and 5.30; Varna 430,847 and 4.31. Wage: National Statistical Institute, 2024 average annual wage by district ÷ 12 (area *region*, BGN, mean): Sofia (capital) 3,227.33; Plovdiv 1,956.08; Varna 2,167.25. Rent: not added (Numbeo refused access).

**Not used.** Search-summary figures: SAP Labs Bulgaria 2,133 employees in March 2026, VMware Bulgaria 1,700+, Progress Telerik about 75 (no page read); a December 2024 press report of Sofia's EUR 1,732 average monthly wage (secondary, and without Plovdiv); the Bulgarian National Bank and DSK Bank pages (no readable address); the full AIBEST report (behind a registration form).

## Rent (Numbeo) across round 5c

Numbeo answered every automated request on 2 and 3 October 2026 with HTTP 429 (too many requests), including a second attempt through a different fetch tool, so no rent metric was added for any hub in Poland, the Czech Republic, Romania or Bulgaria (nor, as the earlier sections say, in the Nordic countries or Lithuania); Estonia's rents (Tallinn, Tartu) were read earlier and are the only Numbeo rents in this round's records. No fallback or workaround was used.
