# Audit 1: Atlas geography and labour market, Western Europe

Scope: GB, FR, DE, IT, ES, NL, CH, BE, LU, IE, AT, PT. Files: `data/atlas/{cc}.js`, `research/countries/{cc}-*.md`, `research/places/{countries-and-cities,iberia-and-nordics,italy-playbook}.md`. Repo was read-only; I loaded every record with a Node script and dumped hubs, ratings, metrics, employers and gaps.

## Executive summary

1. **A visible data bug in `nl.js`.** Every Dutch hub shows its employers three times (Adyen ×3, ASML ×4, ICC ×3…), `why` lists are tripled, and the country "Work" block shows "Entry pay" and "Graduate labour market" twice (nl.js:20-31, 36-44, 98, 102-107, 157-163, 210-220, 267-289, 342-345). `tests/atlas-test.js` does not catch it.
2. **Two "Entry pay" rows point at the wrong evidence.** France's points at a jobs-count claim (fr.js:711 → `fr-paris-emp`). Germany's points at the "top-10 districts by median pay" claim (de.js:1100 → `de-ba-top`). Neither is entry pay.
3. **The demand rule is applied inconsistently, and the inconsistency drives most of the white map.** Researchers held back employers they had named (Shell, ING, Philips, Rabobank, UBS, Swiss Re, the Big Four in Luxembourg, Amazon Luxembourg, Erste, OMV) because "no headcount was read". The rule in `index.js`/ATLAS-PROGRESS needs no headcount. It also gives contradictory results:
   - Oxford gets nothing despite Oxford Nanopore, while Newcastle is rated on Sage alone.
   - Grenoble gets nothing despite Soitec.
   - Linz gets nothing despite voestalpine, while Salzburg is rated on Porsche Holding.
   - Several hubs are rated "present" where the rule says "strong" (Dublin accounting with three Big Four; Milan marketing with Prada, Moncler and Luxottica; Edinburgh banking with NatWest and Lloyds; Lisbon banking).
4. **No hub in the 12 countries names McKinsey, BCG, Bain, Accenture, Capgemini, PwC, Goldman Sachs, J.P. Morgan or Morgan Stanley.** For an MBA/MiM site this is the single most embarrassing omission.
5. **Flagship hubs are missing their defining employers:**
   - Dublin, whose knownFor is "European HQs of US tech", names no tech firm at all (no Google, Meta, Microsoft, Stripe, TikTok, Intel).
   - Zurich does not name UBS.
   - Geneva/Lausanne names no employer at all: no Vitol, Gunvor, Mercuria, MSC, Pictet, Lombard Odier or Nestlé.
   - Paris has no Amundi, LVMH, L'Oréal, Publicis, OECD, Mistral AI or Lazard.
   - Bologna's "Motor Valley" omits Ferrari, and Spain omits Inditex.
6. **Finance sub-roles: PE is unrated in every hub, including London.** IB is unrated in Paris, Milan, Madrid, Zurich, Geneva, Luxembourg, Amsterdam and Dublin. AM is unrated in Paris (Amundi), Frankfurt (DWS) and Zurich. Geneva, Lugano, Zug, Basel, Brussels, Edinburgh-IB and all other hubs have no sub-role block or only "gap".
7. **Analytics and big data are rated nowhere, and economics only in Frankfurt, Brussels and Luxembourg.** Paris is blank despite the OECD, Banque de France and IEA. London is blank despite the Bank of England. Rome is blank despite the Banca d'Italia and FAO; Madrid and Lisbon are blank although their central banks are already listed.
8. **Seventeen hubs are rated 0/14 or 1/14.** Of those, Oxford, Strasbourg, Grenoble, The Hague, Bern, St. Gallen, Lucerne and Linz can all reach present or strong from one afternoon of reading employer pages.
9. **Missing cities a student will ask about:**
   - UK: Belfast, Reading/Thames Valley, Coventry/Warwick, Aberdeen.
   - Spain: A Coruña (Inditex).
   - Italy: Trieste (Generali), Parma, Bergamo/Brescia.
   - Ireland: Galway and Limerick.
   - Portugal: Braga.
   - Austria: Innsbruck.
   - France: Rennes, Montpellier and Clermont-Ferrand (lower priority).
   - Germany: Ingolstadt (Audi; the record's own data say it has Germany's highest median pay), Darmstadt (Merck) and Gütersloh (Bertelsmann).
10. **Metrics are uneven.** Crowd-sourced Numbeo is the only rent source in FR, DE, NL, CH, BE, AT and LU (tagged anecdotal). Some hubs have no rent at all: all of Italy, Spain and Portugal, plus Geneva, The Hague, Liège and Wolfsburg. The Netherlands has no wage metric. Wages are outdated or the wrong area: France uses INSEE 2022 by département although 2023 data by commune have been out since 2 Sep 2025; Germany uses state medians although the Federal Employment Agency (BA) publishes medians by district, with Dec-2025 data. GDP is 2021 for most metros while Portugal uses 2022 from the same Eurostat table.
11. **Eighteen calculator programmes are never linked from a hub.** They include all of emlyon, St. Gallen and Warwick, both Oxford programmes, ESCP MiF/marketing, ESSEC marketing, Bristol, Glasgow and Southampton. Lyon, St. Gallen and Oxford show zero programmes.
12. **ATLAS-PROGRESS.md is stale.** It says Leuven, Zug and Lugano are not mapped, and gives Germany 14 hubs (it has 16) and Switzerland 6 (it has 8).

Bottom line: the method is rigorous and the metrics are well sourced, but the content is thin exactly where students look first: the big employers in the big hubs. Roughly 3–4 days of employer-page reading (registered office / careers pages) would turn most of the white and "present" cells into defensible ratings.

---

## 1. CRITICAL: wrong or dangerously misleading

### 1.1 Netherlands record duplicates content on screen
- **Where:** `data/atlas/nl.js`.
  - Amsterdam: `why` (lines 20-31) and employers (36-44) repeat Adyen, University of Amsterdam and the start-up ecosystem three times.
  - Rotterdam: why line 98 and employers 102-107.
  - Eindhoven: why line 157; ASML appears 4 times at lines 160-163.
  - Utrecht: lines 210 and 214-220.
  - The Hague: lines 267 and 272-289.
  - Work block: lines 342-345 show "Entry pay" and "Graduate labour market" twice.
- **Why it matters:** a student sees the same employer three times, which reads as a broken, auto-generated page.
- **Fix:** de-duplicate. Add to `tests/atlas-test.js` a check that employers (name+note), `why` ids and `work[].k` are unique per hub or record. My script found no other duplicates in the 46 records, apart from two semantic ones:
  - `de.js:459/462`: Henkel is listed twice in Düsseldorf. Acceptable but should be merged.
  - `it.js:85-86`: "Eni, Enel" and then "Eni" again in Rome. Merge.

### 1.2 "Entry pay" rows that are not entry pay
- **France, `fr.js:711`:** `{ k: 'Entry pay', c: ['fr-paris-emp'] }`. The claim is "Paris has 2,237,200 jobs (2023)…", a Eurostat employment count. A student clicking "Entry pay" gets a jobs table.
  - What exists: the Conférence des Grandes Écoles *Enquête Insertion* (2025 edition, business-school graduates' gross starting salary; it is already cited as `fr-cge` for the calendar) and APEC *Les jeunes diplômés bac+5* (https://corporate.apec.fr/home/nos-etudes.html).
- **Germany, `de.js:1100`:** `{ k: 'Entry pay', c: ['de-ba-top'] }`. The claim lists the ten districts with the highest median pay of *all* full-time employees (Ingolstadt €5,855). That is not entry pay.
  - The BA *Entgeltstatistik* tables give medians by district **and by qualification level ("akademischer Berufsabschluss") and age group**, with 31 Dec 2025 data already published (https://statistik.arbeitsagentur.de/DE/Navigation/Statistiken/Fachstatistiken/Beschaeftigung/Entgelt/Entgelt-Nav.html). Use the under-25 or 25-34 academic median.

### 1.3 Flagship hubs whose employer list contradicts their own "knownFor"

**Dublin (`ie.js:25`).** knownFor is "European headquarters of US tech firms". The employers are KPMG, Deloitte, EY, Bank of Ireland and two industry counts, and no tech company is named anywhere in `ie.js` or `research/countries/ie-ireland.md`. Software, AI and data science are "gap". Claims a student expects:
- Google (EMEA HQ, Barrow St)
- Meta (international HQ)
- Microsoft (Leopardstown)
- Stripe (co-HQ)
- TikTok (EMEA trust & safety)
- LinkedIn (international HQ)
- Salesforce
- Workday (EMEA HQ)
- Intel (Leixlip fab, Co. Kildare, Dublin metro)

All of these have Irish registered entities on the CRO; the record says the CRO "could not be queried", but the companies' own Ireland pages are citable as employer-stated.

**Zurich (`ch.js:19`).**
- The employers are "Zurich's financial sector", Google and the start-up ecosystem.
- **UBS (group HQ, Bahnhofstrasse 45), Zurich Insurance (HQ Mythenquai), Swiss Re (HQ Mythenquai), Julius Baer, Swiss Life and SIX** are absent from the hub. UBS appears in `ch.js` only inside a gap note.
- The library itself (`research/places/countries-and-cities.md` §3, "Specialist hubs") says "Zurich: Global banking (UBS), insurance and reinsurance (Zurich, Swiss Re)". The record contradicts the library.

**Geneva and Lausanne (`ch.js:150`).**
- The employer list is "215+ member companies of the trade body" plus the Lausanne start-up value: **no single named employer**. Finance is only "present"; logistics and marketing are "gap".
- Named HQs or major sites that should be listed:
  - Commodity traders: Vitol, Gunvor, Mercuria, Trafigura (main trading office), Louis Dreyfus Company, Cargill International.
  - Logistics: MSC, the world's largest container line, with its HQ in Geneva. This is a logistics rating in itself.
  - Private banking: Pictet, Lombard Odier, UBP, Mirabaud.
  - Consumer goods and marketing: Nestlé (Vevey HQ), Philip Morris International operations centre (Lausanne), JTI (Geneva HQ), P&G European HQ (Geneva).
  - Luxury: Richemont, Rolex, Patek Philippe.
  - International organisations: UN Geneva, WHO, WTO, ILO, WEF.
  - Universities: EPFL, IMD and the University of Lausanne (HEC Lausanne).
- **Geneva also has no rent metric**, although it is one of Europe's most expensive rental markets.

**Paris (`fr.js:19`).** The sectors list "Luxury and fashion" and "Consulting", yet marketing, accounting and economics are "gap", and IB, AM, PE, corporate finance, risk and financial consulting are all "gap". Missing, though all HQ'd in Paris or Île-de-France:
- Amundi: Europe's largest asset manager. Its absence makes `am: gap` look wrong.
- IB advisers: Lazard Frères, Rothschild & Co.
- PE: Ardian, Eurazeo, PAI Partners, Tikehau.
- Marketing and luxury: LVMH (only "Christian Dior SE" appears, via Fortune), L'Oréal (Clichy), Kering, Hermès, Chanel, Publicis Groupe, Havas.
- Accounting: Forvis Mazars (La Défense).
- Economics: OECD, Banque de France, IEA, INSEE, Direction générale du Trésor.
- AI and data: Mistral AI, Hugging Face (Paris office), Meta FAIR Paris, Google DeepMind Paris.
- Software: Dassault Systèmes (Vélizy), Criteo, Dataiku, Doctolib.
- Consulting and IT services: Capgemini (HQ Paris).

**Bologna "and the Motor Valley" (`it.js:139`).** The hub lists Lamborghini, Maserati, Dallara and Ducati but **not Ferrari** (Maranello, Modena province), which is the reason students know the Motor Valley. Bologna's big-data and computing assets are also absent:
- Cineca and the Leonardo supercomputer
- The ECMWF data centre at the Tecnopolo
- Prometeia (risk and analytics consulting, HQ Bologna)

**Spain.** **Inditex (Arteixo, A Coruña)**, the world's largest fashion retailer and a major graduate employer, appears nowhere in `es.js` or `es-spain.md` (the "Zara" grep hits are all "Zaragoza").

### 1.4 Rule violations: ratings lower than the documented rule allows
The rule (`index.js` header, `docs/ATLAS-PROGRESS.md`): strong = a statistic *or* two or more claims about named employers with an HQ or major site; present = at least one such employer. The records break it in both directions.

| Hub / line | Current | Already in the record | Rule says |
|---|---|---|---|
| Oxford `gb.js:403` | 0/14 | Oxford Nanopore HQ (Companies House) | cs (or it) present |
| Grenoble `fr.js:627` | 0/14 | Soitec, 2,100+ staff | cs / it present |
| Linz `at.js:87` | 0/14 | voestalpine group HQ | business / management present (Salzburg business=present on Porsche Holding, `at.js:206`; Wolfsburg management=present on VW) |
| Dublin `ie.js:25` | accounting present | KPMG, Deloitte, EY graduate programmes | accounting strong |
| Dublin finance sub-roles | banking gap | Bank of Ireland HQ named | banking present (strong with AIB) |
| Milan `it.js:28` | marketing present | Prada, Moncler, Luxottica HQs | marketing strong |
| Milan finance sub-roles | only am=present; ib, banking gap | Mediobanca, UniCredit, Banco BPM, Fineco HQs | banking strong, ib present |
| Edinburgh `gb.js:93` | banking present | NatWest + Lloyds registered offices | banking strong |
| Lisbon `pt.js:27` | banking present | CGD + Banco de Portugal (+ Novo Banco, BCP ops) | banking strong |
| Madrid `es.js:25` | economics gap | Banco de España listed | economics present (Luxembourg gets economics present from the EIB) |
| Lisbon | economics gap | Banco de Portugal listed | economics present |
| Basel `ch.js:88` | economics gap | BIS listed | economics present |
| Barcelona `es.js:68` | banking gap | Banco Sabadell HQ (back in Sabadell since 2025, matching GLEIF) | banking present (strong with CaixaBank's Barcelona operational HQ) |
| Bern / St. Gallen / Lucerne | 0/14, "no Eurostat split" | — | Statistics are not required; see §4.1 |

The research briefs make the same mistake explicitly. `research/countries/gb-united-kingdom.md` §8.1 says "No Oxford family is rated: no source of entry-level hiring was read". `at.js` gaps say "no source read says how many entry posts [voestalpine] offers". The rule does not ask for entry-post counts.

### 1.5 Misleading labels a student will misread
- **Wolfsburg (`de.js:518`)** shows population 1,014,477. The source text is the Braunschweig-Salzgitter-Wolfsburg metro region; the town has about 125,000 people. Bonn (944,800) and Karlsruhe (763,320) are also metro regions. The `area` tag is correct, but the hub card should say "metro region: Braunschweig-Salzgitter-Wolfsburg", or Wolfsburg's town figure should be used.
- **France wages are tagged `area: 'region'`** but are département figures. Paris is the city (département 75), so Paris is mislabelled as "region".
- **The Hague:** the brief's example employers need care. Aegon announced in Dec 2025 that it will move its HQ and legal seat to the US and rename itself Transamerica, completion targeted by Jan 2028 (https://www.dutchnews.nl/2025/12/aegon-to-go-american-with-move-to-us-and-change-of-name). Shell plc's HQ has been London since 2022 (The Hague is still a major Shell site). Use NN Group (HQ The Hague) instead of Aegon as the anchor.

### 1.6 Immigration items seen in passing (for the immigration agent)
- `pt.js` gaps: "Whether a non-EU graduate can switch from study to work in Portugal was not confirmed." A student reading the Portugal page will ask exactly this. Check Lei 23/2007 as amended (job-seeking stay after graduation) on AIMA.
- `lu.js` gaps: the declaration-of-arrival rule and the job-search permit length were not re-read. Luxembourg's 9-month (renewable to a total of 12?) post-study stay should be verified on guichet.lu.

---

## 2. MISSING basics a student will ask about

### 2.1 Consulting, Big Four and bulge-bracket banks: nowhere
A grep across the 12 records: McKinsey 0 hubs (AT text only), BCG 0 (calendar claims only), Bain 0, Accenture 0, Capgemini 0, PwC 0, Goldman Sachs 0, J.P. Morgan 0, Morgan Stanley 0. Deloitte and KPMG appear only in London and Dublin.
- **What to add:** an employer entry (office address from the firm's own office page = employer-stated) in at least:
  - London, Paris, Frankfurt, Munich, Düsseldorf, Berlin, Milan, Rome, Madrid, Barcelona, Amsterdam, Zurich, Geneva, Brussels, Luxembourg, Dublin, Vienna and Lisbon (MBB plus Big Four).
  - London, Paris, Frankfurt and Milan (bulge-bracket banks).
- **Why:** these are the employers MBA/MiM students compare schools on (the placement reports in `data/mba-companies.js` already list them). The `management` family in particular has no consulting anchor anywhere.
- **Where:** each hub's `employers` and `demand.management`/`finconsult`.

### 2.2 Analytics and big data: rated in 0 hubs
Every hub below can be rated present or strong from named HQs or major sites (employer-stated):

| Country | Hub | Analytics / big-data / data-science anchors |
|---|---|---|
| GB | London | dunnhumby (HQ), Kantar (HQ), Experian (UK ops; Nottingham), Google DeepMind (HQ, King's Cross), Wayve, Synthesia |
| GB | Edinburgh | Skyscanner (HQ), University of Edinburgh informatics / EPCC (ARCHER2 national supercomputer) |
| GB | Cambridge | Microsoft Research Cambridge, Amazon (Alexa) Cambridge, Arm |
| FR | Paris | Ipsos (HQ), Criteo (HQ), Dataiku, Contentsquare, Mistral AI |
| FR | Toulouse | ANITI AI institute, Airbus digital / Airbus Defence and Space, CNES data |
| DE | Munich | Celonis (HQ, process mining), Helsing (defence AI), Google, Microsoft Germany HQ (Munich-Schwabing), Apple chip design |
| DE | Nuremberg | GfK / NIQ (HQ, market research = analytics), DATEV (already listed) |
| DE | Berlin | Delivery Hero (HQ), Zalando data science, N26, Trade Republic |
| DE | Hamburg | Statista, OTTO data, About You |
| NL | Amsterdam | Booking.com (HQ: large data-science org), Adyen, ING, Picnic, Elastic |
| ES | Madrid | BBVA AI Factory, Telefónica Tech, Amadeus HQ |
| ES | Barcelona | King, Glovo data, Barcelona Supercomputing Center (MareNostrum 5) |
| IT | Bologna | Cineca / Leonardo supercomputer, ECMWF data centre, Prometeia |
| IT | Milan | Bending Spoons (listed), iGenius, Generali data (Trieste/Milan) |
| CH | Zurich | Google, Microsoft, Meta, IBM Research Zurich (Rüschlikon), Disney Research; ETH AI Center |
| CH | Lugano | IDSIA (AI institute), CSCS (Swiss National Supercomputing Centre) |
| IE | Dublin | Google, Meta, Stripe, Workday |
| BE | Brussels / Leuven | Collibra (HQ Brussels), imec and KU Leuven (Leuven) |
| LU | Luxembourg | Amazon EU HQ, PayPal Europe (bank HQ), LuxProvide / MeluXina supercomputer |
| AT | Linz / Vienna | Dynatrace (main R&D, Linz), Bitpanda (Vienna HQ), Frequentis |
| PT | Lisbon / Porto / Coimbra | Feedzai (AI fraud detection), Sword Health (Porto), OutSystems (listed), Farfetch (Porto) |

### 2.3 Economics: rated in 3 hubs out of 200
Anchors that already exist and would give "present":
- **Paris:** OECD, Banque de France, IEA, INSEE, AFD.
- **London:** Bank of England, HM Treasury, IFS, NIESR, Frontier Economics, Oxera, Compass Lexecon.
- **Rome:** Banca d'Italia, ISTAT, FAO, IFAD, WFP.
- **Madrid:** Banco de España (already listed).
- **Lisbon:** Banco de Portugal (already listed).
- **Vienna:** OeNB, WIFO, IHS, IIASA (Laxenburg), OPEC, UNIDO.
- **Zurich / Bern:** SNB (seats in both cities), SECO in Bern.
- **Basel:** BIS (already listed).
- **Amsterdam:** De Nederlandsche Bank.
- **The Hague:** CPB.
- **Dublin:** Central Bank of Ireland, ESRI.
- **Brussels:** EU institutions (already rated).

### 2.4 Private equity: unrated in every hub in scope
- **London:** CVC, Permira, Apax, Cinven, BC Partners, EQT/KKR/Blackstone European HQs; BVCA data.
- **Paris:** Ardian, Eurazeo, PAI, Tikehau.
- **Munich / Frankfurt:** Triton (Frankfurt), EQT Germany.
- **Zug / Baar:** Partners Group. It is already listed in Zug with 569 staff in the canton, yet `pe` is not rated in Zug because Zug has no finance block at all.
- **Luxembourg:** the private-markets fund administration that the hub's own knownFor names.
- **Milan:** Clessidra, Investindustrial's Milan office.
- **Madrid:** Nazca, MCH, Portobello.

### 2.5 Graduate starting salary by hub
The hub `wage` metric is the all-employee average or median everywhere. Only Italy (AlmaLaurea), Ireland (CSO HEO12), the UK (ISE £33,000) and Spain (€26,600) give anything graduate-specific, and only at country level. Feasible city-level sources:
- **DE:** BA *Entgeltstatistik*, median by district × academic qualification × age (2025 data).
- **FR:** INSEE salaries by commune and category, "cadres" mean (2023 data, published 2 Sep 2025: https://www.insee.fr/fr/statistiques/2021266), plus the CGE starting-salary survey.
- **CH:** BFS *Lohnstrukturerhebung* by region × education (2024).
- **NL:** CBS by age band.
- **IT:** AlmaLaurea by region of work.
- **ES:** INE *Encuesta de inserción laboral de titulados* by region.
- **IE:** CSO HEO by region.

### 2.6 Missing hubs that are embarrassing to omit
| Country | Missing hub | Why a student expects it | Anchors |
|---|---|---|---|
| GB | Belfast | Large graduate fintech, cyber and Big Four market; dual UK/EU-goods market access | Kainos (HQ), Citi Belfast, Allstate NI, PwC Belfast (one of PwC UK's largest offices), Rapid7. Use NISRA BRES (NI equivalent of ONS BRES) instead of excluding it "because the survey covers GB only" |
| GB | Reading / Thames Valley | UK's corporate tech corridor | Microsoft UK HQ (Thames Valley Park), Oracle UK (Reading), Vodafone HQ (Newbury), Thames Water, PepsiCo UK |
| GB | Coventry / Warwick | Warwick is a calculator school with 4 unlinked programmes | Jaguar Land Rover (Whitley/Gaydon; Coventry is the obvious anchor, Birmingham has no automotive at all), Cadent, Severn Trent |
| GB | Aberdeen | Energy finance and transition roles | Shell UK/BP North Sea ops, Harbour Energy, Wood Group |
| ES | A Coruña | Inditex HQ (Arteixo) | Inditex: the largest Spanish employer of business/retail graduates |
| IT | Trieste | Generali group HQ (Italy's largest insurer); Fincantieri HQ | Assicurazioni Generali, Fincantieri, Illycaffè |
| IT | Parma / Emilia food valley | Barilla, Chiesi, Parmalat (Lactalis) HQs | Food/CPG marketing, pharma |
| IT | Bergamo / Brescia | Brembo (HQ Curno), A2A (HQ Brescia), UBI legacy | Manufacturing and utilities |
| IE | Galway, Limerick | 54% of IDA jobs are outside Dublin (the record says so) | Galway: Medtronic, Boston Scientific, SAP. Limerick: Analog Devices (European HQ), Dell, Regeneron, Northern Trust. Shannon: aircraft leasing |
| PT | Braga | Bosch Car Multimedia (one of Bosch's largest R&D sites in Europe), Primavera BSS, University of Minho | IT/software |
| AT | Innsbruck | Swarovski (Wattens), MCI Management Center Innsbruck | Marketing, tourism |
| DE | Ingolstadt | Audi HQ; the record's own `de-ba-top` claim says Ingolstadt has Germany's highest median pay (€5,855) | Automotive management |
| DE | Darmstadt / Rhine-Main south | Merck KGaA HQ; ESA ESOC; Software AG legacy | Pharma, space IT |
| DE | Gütersloh / Bielefeld | Bertelsmann (HQ), Miele, Dr. Oetker | Media/CPG marketing |
| FR | Rennes | Cyber (DGA Maîtrise de l'information, Orange, Thales), Ubisoft studio | Cyber, telecoms |
| FR | Montpellier | Ubisoft Montpellier, Dell, Sanofi, MBS | Gaming, health |
| FR | Clermont-Ferrand | Michelin HQ | Industry/management |

ES Málaga is mapped but under-rated: its knownFor is "growing a tech cluster", yet only finance is rated. It has the Google Safety Engineering Center (opened 2023), Vodafone's R&D centre, Oracle, TDK and Ericsson, enough for it/software present.

---

## 3. SUPERFICIAL / too generic

### 3.1 Employer lists made of statistics, not employers
Hubs whose "employers" are mostly "Information and communication employers [N jobs]" rows with at most one company:
- GB: Birmingham, Leeds, Glasgow, Cardiff, Liverpool, Newcastle, Oxford.
- FR: Lyon, Marseille, Bordeaux, Nantes, Strasbourg, Grenoble.
- IT: Turin, Naples.
- BE: Ghent, Liège.
- AT: Linz, Graz, Salzburg.
- CH: Bern, St. Gallen, Lucerne. Their only "employer" is "Businesses in the metropolitan region [GDP of €X billion]": `ch.js:203, 261, 319`.

A student reads these as "nobody works here". What "deep" looks like, with the named employers each hub needs:

**UK**
- **Birmingham:** HSBC UK (listed), Goldman Sachs Birmingham, Deutsche Bank Birmingham, PwC/Deloitte/KPMG/EY major offices, JLR (Solihull).
- **Leeds:** Channel 4 (national HQ), Sky, NHS England, First Direct, Lloyds, Big Four (accounting is gap here though Big Four are present).
- **Glasgow:** Barclays Campus (Tradeston, several thousand staff), J.P. Morgan and Morgan Stanley tech centres, BNY, SSE/ScottishPower (listed). This would give software and IT strong; they are currently gap.
- **Newcastle:** Virgin Money/Nationwide, Accenture Advanced Technology Centre, HMRC, Ubisoft Reflections.

**France**
- **Lyon:** bioMérieux (HQ Marcy-l'Étoile), Sanofi vaccines, Boehringer Ingelheim Animal Health, Groupe SEB (HQ Écully), Interpol, emlyon.
- **Marseille:** CMA CGM (world's 3rd-largest container line, HQ Marseille), CEVA Logistics (HQ), Airbus Helicopters (Marignane).
- **Lille:** OVHcloud (HQ Roubaix; software/cloud strong), Decathlon, Auchan, Leroy Merlin (listed), Kiabi, La Redoute. Marketing and logistics are gap here despite retail HQs.
- **Bordeaux:** Cdiscount (HQ), Dassault Aviation Mérignac, Thales, ArianeGroup.
- **Nantes:** Airbus Nantes/Saint-Nazaire, Chantiers de l'Atlantique, Capgemini/Sopra Steria hubs.
- **Strasbourg:** Crédit Mutuel Alliance Fédérale / BFCM (group HQ, finance strong on its own), Euro-Information (its IT arm), Council of Europe, European Parliament seat, ECHR, Lilly France (Fegersheim), Hager (Obernai).
- **Grenoble:** STMicroelectronics (Crolles, about 6,000 staff), Soitec (listed), Schneider Electric R&D, CEA-Leti, HPE, Capgemini, Grenoble École de Management.

**Italy**
- **Turin:** Reply (HQ; IT consulting, software strong), Lavazza (HQ), Iveco Group and CNH (HQs), Leonardo Aircraft division, Reale Mutua.
- **Naples:** Apple Developer Academy and Cisco academy (San Giovanni a Teduccio), Leonardo, Ferrovie/Hitachi Rail.

**Belgium**
- **Ghent:** Volvo Car Gent, ArcelorMittal Gent, Showpad, In The Pocket, Deliverect.
- **Liège:** Alibaba/Cainiao hub at Liège Airport, FN Herstal (defence).

**Switzerland**
- **Bern:** Swisscom (HQ Ittigen), SBB (HQ), Swiss Post (HQ), Die Mobiliar (HQ), SNB, CSL Behring, the federal administration.
- **St. Gallen:** Raiffeisen Switzerland (HQ; third-largest banking group), Helvetia (HQ), St. Galler Kantonalbank, Abacus Research, Bühler (Uzwil), HSG.
- **Lucerne:** Schindler (HQ Ebikon), CSS (HQ; largest health insurer), SUVA (HQ), Luzerner Kantonalbank.

**Austria**
- **Linz:** voestalpine (listed), Raiffeisenlandesbank OÖ and Oberbank (HQs), Dynatrace R&D, Borealis, KTM/Pierer (Upper Austria), JKU.
- **Salzburg:** Red Bull (HQ Fuschl am See: the marketing employer students know), SPAR Austria (HQ), Porsche Holding (listed).

### 3.2 Hub demand profiles that ignore obvious families
- **London:**
  - Marketing gap: Unilever HQ, WPP HQ, Diageo, GSK, Reckitt (Slough).
  - Economics gap: see §2.3.
  - CS and datasci gap: DeepMind, UCL/Imperial.
  - PE, corporate finance and risk gap.
  - Insurance: Lloyd's of London is not named.
  - Banks: Goldman, J.P. Morgan and Morgan Stanley International (all London-headquartered EU/UK subsidiaries) are absent.
- **Frankfurt (`de.js:29`):**
  - AM gap: DWS (HQ), Union Investment (HQ), Deka (HQ), Allianz Global Investors (HQ Frankfurt).
  - Accounting/management gap: PwC Germany HQ (Frankfurt), EY/KPMG/Deloitte major offices, Commerzbank HQ (not named!), DZ Bank HQ.
  - IT gap: DE-CIX, the largest data-centre cluster in Germany.
- **Munich (`de.js:103`):**
  - Banking gap: UniCredit Bank GmbH (HypoVereinsbank) HQ, BayernLB HQ.
  - Consulting: Roland Berger HQ.
  - AI/datasci gap: Celonis, Helsing, Google, Microsoft, Apple.
- **Berlin (`de.js:184`):** names only Zalando.
  - Fintech, so finance is gap: Delivery Hero (HQ), HelloFresh (HQ), N26, Trade Republic, Solaris.
  - Deutsche Bahn (HQ), KPMG Germany HQ (Berlin), Siemens Energy (Berlin site).
- **Hamburg (`de.js:254`):**
  - Marketing gap: Beiersdorf (Nivea HQ), Unilever DACH, Google Germany (Hamburg).
  - Finance gap: Berenberg (Germany's oldest bank, IB), Hamburg Commercial Bank.
  - Hapag-Lloyd HQ is missing from the logistics hub.
- **Düsseldorf (`de.js:454`):**
  - Finance gap: HSBC Continental Europe Germany (ex-Trinkaus) HQ, Stadtsparkasse.
  - Corporate HQs: Vodafone Germany, METRO AG, Uniper, Ceconomy.
  - L'Oréal Germany; advertising agency cluster.
- **Stuttgart:** IT and finance gap. Bosch's IT and software arm (ETAS) and LBBW (HQ), Wüstenrot & Württembergische and Allianz Leben (Stuttgart) are all present.
- **Madrid:**
  - Management, accounting, marketing and economics gap; IB, AM and PE gap.
  - Banking: Santander HQ (Boadilla) and BBVA's operational HQ (La Vela, Las Tablas) are described only as "operational centres".
  - Consulting and defence: Indra (HQ, defence/IT), the Big Four, MBB.
- **Barcelona:**
  - CaixaBank's operational HQ (Torre CaixaBank, Diagonal) is not named.
  - Pharma: Grifols, Almirall, Esteve.
  - Gaming and tech: King, Amazon and Microsoft tech hubs, Wallapop.
  - Logistics gap despite the Port of Barcelona.
- **Amsterdam (`nl.js:18`):** the finance sub-role block exists but is all "gap". Gap families although employers exist:
  - IB, banking, AM: ING HQ (named only in a gap note), ABN AMRO HQ, Euronext.
  - Software / datasci: Booking.com (HQ), Adyen (listed), Uber EMEA HQ.
  - Marketing: Heineken HQ, Unilever's Rotterdam legacy, Philips HQ (Amsterdam).
  - Logistics: Schiphol (KLM HQ, Amstelveen).
- **Utrecht:** Rabobank HQ (named only in a gap note) and a.s.r. HQ are missing.
- **Eindhoven:** Philips (Eindhoven High Tech Campus) and NXP (HQ Eindhoven) are missing; it lists ASML only.
- **Brussels:** the record admits consulting, law and public affairs are unrated.
  - Missing employers: Euroclear (HQ), SWIFT (La Hulpe), BNP Paribas Fortis (HQ), KBC (HQ), Belfius (HQ), Ageas, Solvay (HQ), UCB (HQ, named in a gap note), the Big Four Belgian HQs, NATO HQ.
  - Finance sub-roles are absent for Brussels entirely.
- **Leuven:** AB InBev global HQ (marketing/management) is named only in a gap note.
- **Luxembourg:**
  - Accounting gap: PwC Luxembourg (one of the country's largest private employers), Deloitte, EY, KPMG; fund audit is the No. 1 graduate entry route here.
  - IT and software gap: Amazon EU HQ, PayPal Europe, Ferrero International (HQ Findel), SES, ArcelorMittal HQ (named only in a gap note).
  - Banking gap: BGL BNP Paribas, Spuerkeess, BIL, Clearstream.
- **Vienna (`at.js:20`):** finance "present" on RBI alone, IT and software gap. Missing:
  - Banks and insurers: Erste Group (HQ Erste Campus), Bank Austria/UniCredit, UNIQA, Vienna Insurance Group (all named only in a gap note), Wiener Börse.
  - Corporate: OMV (HQ), A1 Telekom (HQ).
  - Tech: Bitpanda, GoStudent.
  - International organisations: IAEA, OPEC, UNIDO, OSCE.
- **Dublin / Cork:** see §1.3. Cork names only Apple. Others to add:
  - Pharma: Pfizer (Ringaskiddy), Eli Lilly (Kinsale).
  - Tech: Dell/EMC (Ovens), Qualcomm, Johnson Controls, VMware/Broadcom.
- **Lisbon / Porto:** accounting gap with all Big Four present; no shared-services employers named.
  - Lisbon: Mercedes-Benz.io, Siemens Healthineers.
  - Porto: Natixis (Porto tech centre), Euronext Technology Centre, BNP Paribas Portugal (Lisbon and Porto).
  - Tech: Google (Oeiras), Cloudflare (Lisbon).

### 3.3 Metrics
| Issue | Where | What "right" looks like |
|---|---|---|
| Numbeo (crowd-sourced, tagged anecdotal) is the only rent source | FR (all 10 hubs, live URLs not archived), DE (all), NL, CH, BE, AT, LU | Official alternatives: DE city *Mietspiegel*; FR *Observatoires locaux des loyers* (Paris OLAP, Lyon, Lille etc., by flat size); CH BFS *Mietpreis* by canton/town; NL Pararius quarterly (private but transparent); LU Observatoire de l'Habitat advertised rents by commune; AT Statistik Austria *Mikrozensus Wohnkosten* by state; BE Statbel / Brussels *grille indicative des loyers* |
| No rent at all | IT (all 8), ES (all 7), PT (both), Geneva, The Hague, Liège, Wolfsburg | IT: Agenzia delle Entrate OMI rents (€/m²/month by zone, every comune). ES: the record's claim that "Spain publishes no rent by city" is wrong. The Ministerio de Vivienda's *Sistema Estatal de Índices de Referencia del Precio del Alquiler* (SERPAVI, BOE 15 Mar 2024) publishes monthly rent per dwelling and per m² by municipality (https://serpavi.mivau.gob.es/). That is the same "all dwellings" basis the UK record already uses for ONS. PT: INE median €/m² of new leases × 50 m², labelled as such |
| No wage metric | NL (all 5) | CBS StatLine publishes income by municipality/region (verify the table); fall back to Eurostat SES 2022 by NUTS-2 as the NL entry-pay claim already does nationally |
| Wage is the wrong area | DE (state median for every city), CH (large region), IE (county), ES (autonomous community) | DE: BA district medians (each *kreisfreie Stadt*) |
| Wage is the wrong year | FR INSEE 2022 (2023 by commune out since 2 Sep 2025); LU Eurostat SES 2022 mean; DE BA 31 Dec 2024 (31 Dec 2025 tables exist) | Update |
| Wage basis | AT uses the all-employee median incl. part-time (Vienna €3,002 looks lower than Linz) | Rechnungshof *Einkommensbericht* gives full-time, full-year medians by state |
| GDP year | Eurostat `met_10r_3gdp` 2021 for FR, DE, IT, ES, NL, CH, IE; PT uses 2022 from the same table | Refresh all to the latest year so cross-country comparison is like-for-like |
| Mixed population basis | Zug (canton 2024) and Lugano (city 2024) next to metro-2023 hubs | Accept, but say so on the card |

### 3.4 Programmes not linked from any hub
Calculator ids that exist in `data/masters-model.js` / `data/computing-model.js` but are not linked from any Atlas hub (my diff of all `programmes[].id`):
- `emlyon-mim` and `emlyon-mkt` → Lyon (it shows 0 programmes).
- `escp-mif` and `escp-mkt` → Paris (Berlin, Madrid and Turin campuses too).
- `essec-mkt` → Paris.
- `stgallen-mbf`, `stgallen-mimm`, `stgallen-sim` → St. Gallen (the record admits this).
- `oxford-mfe` and `oxford-acs` → Oxford (0 programmes).
- `warwick-fin`, `warwick-mgmt`, `warwick-mkt`, `warwick-cs` → Birmingham, or a Coventry hub.
- `bristol-cs-conv` → Bristol.
- `glasgow-it` → Glasgow.
- `southampton-ai` and `standrews-cs-conv` have no hub; add them or say why not.

---

## 4. UNDERREPRESENTED

### 4.1 Hubs rated 0/14 or 1/14, and what fixes each (all from employer-stated claims)
| Hub | Now | Can reach | With |
|---|---|---|---|
| Oxford | 0 | cs, software, management present | Oxford Nanopore (listed), Sophos (HQ Abingdon), Oxford Instruments (HQ Abingdon), Oxford Ionics (IonQ), BMW Plant Oxford (MINI), Oxford University Press, Culham/UKAEA. AstraZeneca is Cambridge, not Oxford |
| Strasbourg | 0 | finance strong, it present, economics/public present | Crédit Mutuel Alliance Fédérale/BFCM (HQ), Euro-Information, Council of Europe, European Parliament, ECHR |
| Grenoble | 0 | cs strong, it/software present | STMicroelectronics Crolles, Soitec, Schneider Electric, CEA-Leti, HPE |
| The Hague | 0 | finance present (NN Group HQ); it/cyber present | NN Group, Shell (major site), Europol, NATO NCIA, Eurojust, ICC. Not Aegon (leaving, see §1.5) |
| Bern | 0 | business, it, finance present | Swisscom, SBB, Swiss Post, Mobiliar, SNB |
| St. Gallen | 0 | finance strong | Raiffeisen Switzerland, Helvetia, SGKB |
| Lucerne | 0 | finance (insurance) strong, business present | CSS, SUVA, Schindler, LUKB |
| Linz | 0 | business, management, finance present; software present | voestalpine, RLB OÖ, Oberbank, Dynatrace |
| Edinburgh | 1 | it/software strong | Skyscanner (HQ), FanDuel, Rockstar North |
| Cambridge | 1 | software, ai present/strong | Arm, Microsoft Research, Amazon, Darktrace (all listed or easy) |
| Glasgow | 1 | it, software strong | Barclays Campus, J.P. Morgan, Morgan Stanley |
| Cardiff / Liverpool / Newcastle | 1 | 2–3 each | Principality BS, IQE (Cardiff); Investec, Rathbones (Liverpool); Virgin Money/Nationwide (Newcastle) |
| Antwerp / Liège / Leuven | 1 | 2–3 each | Antwerp World Diamond Centre, Agfa, BASF (listed); FN Herstal, Cainiao; AB InBev, imec |
| Geneva/Lausanne, Zug, Lugano | 1 | 3–5 each | §1.3; Glencore, Partners Group, Siemens Smart Infrastructure (Zug) |
| Wolfsburg, Cologne, Ruhr, Leipzig | 1 | 2–3 each | VW IT (Wolfsburg); RTL, Ford Germany (Cologne); E.ON (Essen HQ, missing!), Evonik, Aldi Süd/Nord, Deutsche Post DHL is Bonn (missing from Bonn!); DHL Hub Leipzig (logistics gap in Leipzig despite Europe's DHL air hub) |
| Seville, Málaga, Zaragoza | 1 | 2 each | Airbus San Pablo (Seville); Google Safety Engineering Center (Málaga); Inditex/Plataforma Europa logistics (Zaragoza; logistics gap despite "logistics centre") |
| Naples, Genoa | 1 | 2 each | Apple Academy (Naples); Leonardo, Fincantieri, Costa (Genoa logistics gap despite port) |
| Bordeaux, Nantes | 1 | 2–3 each | §3.1 |
| Graz, Salzburg | 1 | 2–3 each | AVL, Magna Steyr (Graz automotive: Magna missing!), Red Bull, SPAR |

### 4.2 Sectors underweighted or missing
- **Consulting and Big Four:** see §2.1.
- **Luxury:**
  - Paris: LVMH, Kering, Hermès, Chanel, L'Oréal are not named.
  - Milan: Armani, Dolce & Gabbana, Versace/Capri, Zegna and Valentino are missing (Prada, Moncler and Luxottica are present).
  - Florence: Gucci (Kering's main design and manufacturing hub, Scandicci) is missing; only Ferragamo is listed.
  - Switzerland: Richemont, Rolex, Swatch Group (Biel).
- **Commodities trading:** Geneva, Zug and Lugano are treated only as an aggregate trade-body count; no trader is named (Vitol, Gunvor, Mercuria, Glencore is in Zug, Trafigura).
- **Pharma, Basel:** Roche and Novartis are named, but business, marketing and datasci are gap. Syngenta (HQ Basel) and Lonza (HQ Basel) are missing. Pharma is the largest MBA/MiM recruiter in Basel.
- **EU institutions:**
  - Brussels is fine.
  - Luxembourg names the EIB but not the European Court of Justice, the European Court of Auditors or Eurostat (all Luxembourg).
  - Strasbourg's European Parliament seat is not used for any rating.
  - Frankfurt names AMLA; there is no mention of EIOPA (Frankfurt).
  - Paris: ESMA (Paris) and EBA (Paris, since 2019) are missing, although both are graduate-trainee employers.
- **Fintech:**
  - Berlin: N26, Trade Republic.
  - Amsterdam: Adyen (listed), Mollie, bunq.
  - Lisbon/Porto: Revolut, Feedzai.
  - Milan: Satispay.
  - Madrid: Revolut Spain.
  - Dublin: Stripe.
  - Revolut London is the only fintech named in London.
- **Defence** (hiring surge 2025-26):
  - Already named: Rheinmetall (Düsseldorf), Leonardo (Rome), Airbus.
  - Missing: Helsing and Hensoldt (Munich area), Airbus Defence and Space (Taufkirchen), BAE Systems (London HQ, Warton, Barrow), Thales, Safran, Dassault Aviation, MBDA (Paris area), Indra (Madrid), Fincantieri (Trieste), FN Herstal (Liège), KNDS.
  - No hub lists "Defence" as a sector except Düsseldorf and Genoa.
- **Automotive:**
  - JLR (UK) missing.
  - Audi (Ingolstadt) missing.
  - Ferrari missing.
  - Stellantis: Turin listed; Poissy/Vélizy (Paris) missing.
  - Renault (Boulogne-Billancourt) missing.
  - Magna Steyr (Graz) missing.
- **Energy:**
  - E.ON (Essen HQ) and Uniper (Düsseldorf) are not named.
  - Shell and BP (London) are not named.
  - Equinor and Ørsted are outside scope.
- **Gaming:**
  - Ubisoft (Paris HQ, Montpellier, Bordeaux, Annecy).
  - King (Barcelona, London).
  - Rockstar North (Edinburgh).
  - Sports Interactive (London).
  - Crytek (Frankfurt).
  - InnoGames and Goodgame (Hamburg).
  - Supercell is outside scope.
  - "Gaming" is in the sector vocabulary (`index.js`) but is used for no hub in scope.
- **Logistics:**
  - CMA CGM and CEVA (Marseille), MSC (Geneva), Kuehne+Nagel (Schindellegi, Schwyz), Hapag-Lloyd (Hamburg) and DHL Group (Bonn HQ) are all missing.
  - Bonn is rated for telecoms and the UN, yet Deutsche Post DHL Group's global HQ (Post Tower) is not named.

### 4.3 Country-level `roles` headlines are too narrow
- CH `roles: ['finance','logistics']`: no software, despite Google Zurich being in the summary.
- AT `['business']`.
- LU `['finance']`: no accounting, although Luxembourg is the Big Four's fund-audit centre.
- IT `['finance','it']`: no marketing, although the summary says Milan "is the centre for … consumer-brand marketing".

---

## 5. Quick wins (under 1 hour each)
1. **De-duplicate `nl.js`** (employers, `why`, `work`) and the Henkel/Eni semantic duplicates, then add uniqueness checks to `tests/atlas-test.js`.
2. **Relabel or remove the two false "Entry pay" rows** (fr.js:711, de.js:1100). Rename them "Where demand is now" / "Highest-paid districts", or replace them with the CGE/APEC (FR) and BA academic-median (DE) claims.
3. **Apply the rule to employers already in the records** (§1.4 table): Oxford, Grenoble, Linz, Dublin accounting/banking, Milan marketing/banking/IB, Edinburgh banking, Lisbon banking/economics, Madrid economics, Basel economics, Barcelona banking. This is purely mechanical: no new reading.
4. **Link the 18 orphan calculator programmes** (§3.4).
5. **Add Ferrari to the Bologna/Motor Valley hub** (Ferrari's own corporate page: HQ Via Abetone Inferiore 4, Maranello).
6. **Name UBS, Zurich Insurance and Swiss Re in Zurich**, using their registered addresses (GLEIF, already used for IT/ES/PT).
7. **Name Vitol, Gunvor, Mercuria, MSC, Pictet, Lombard Odier and Nestlé in Geneva/Lausanne** (GLEIF or the firms' pages), then rate logistics strong (MSC + port-less but HQ), finance strong and marketing present.
8. **Name Google, Meta, Microsoft, Stripe and Intel in Dublin** (the companies' Ireland pages), then rate software strong and AI present.
9. **Paris:** add Amundi (AM strong with AXA IM / Natixis IM), Lazard and Rothschild & Co (IB strong), L'Oréal, LVMH and Publicis (marketing strong), and the OECD and Banque de France (economics present).
10. **Promote the gap-note employers into real entries:** Shell, ING, Philips, Rabobank (NL); Erste, OMV, UNIQA (AT); KBC, UCB, AB InBev (BE); the Big Four, Amazon and ArcelorMittal (LU). Use GLEIF addresses as for IT/ES/PT.
11. **Spain rent:** add SERPAVI/MIVAU municipal rent for Madrid, Barcelona, Valencia, Seville, Málaga, Bilbao and Zaragoza, and delete the incorrect gap sentence.
12. **Update ATLAS-PROGRESS.md hub counts and notes** (DE 16, CH 8, BE 5; Leuven, Zug and Lugano are now mapped).
13. **Wolfsburg card:** state that the population is the Braunschweig-Salzgitter-Wolfsburg metro region, or use the city figure.

## 6. Top 10 priorities for the next 4 weeks (ranked)
1. **Fix the visible defects:** the NL duplicates, the two false "Entry pay" rows, and the uniqueness test (§1.1–1.2).
2. **Re-run the demand rule consistently across all 12 countries** using the employers already present, and drop the unwritten "headcount" or "entry-post count" requirement that researchers have been applying (§1.4). Write the rule into each research brief so the next round does not repeat it.
3. **Add MBB, the Big Four, Accenture/Capgemini and the US bulge-bracket banks** to the 18 hubs listed in §2.1, then rate `management` and `finconsult`.
4. **Fix the four flagship hubs:** Dublin (US tech), Zurich (UBS, Swiss Re, Zurich Insurance), Geneva/Lausanne (traders, MSC, private banks, Nestlé) and Paris (Amundi, luxury, Publicis, OECD, Mistral, Lazard).
5. **Finance sub-roles for the 10 finance hubs:** London, Frankfurt, Paris, Zurich, Geneva, Luxembourg, Milan, Madrid, Amsterdam, Dublin. Fill IB, AM, PE, risk, corporate finance and financial consulting from named firms; PE above all.
6. **First ratings for analytics, data science, AI, big data and economics** in the hubs listed in §2.2–2.3; about 25 hubs in total.
7. **Add the missing hubs, in this order:** A Coruña (Inditex), Trieste (Generali), Belfast, Reading/Thames Valley, Galway and Limerick, Coventry/Warwick, Ingolstadt, Braga.
8. **Rent:** replace Numbeo-only rent with official sources where they exist (SERPAVI, OMI, Mietspiegel, the French OLAP observatories, Observatoire de l'Habitat), and add rent for Geneva, The Hague, Liège and Wolfsburg.
9. **Wage:** update to the latest year and city level (INSEE 2023 by commune; BA district medians Dec 2025 with the academic split; NL wage). Add a per-hub graduate pay figure where one exists (BA academic median by age, INSEE cadres, BFS by education).
10. **Fill the thin hubs with 3–6 named employers each** (§3.1), especially Lyon, Marseille, Lille, Turin, Berlin, Hamburg, Düsseldorf, Glasgow, Vienna and Brussels, and tag sectors (defence, gaming, luxury, commodities, fintech) so the sector filters return Western European hubs.

### Sources consulted for this audit (beyond the repo)
- Banco Sabadell's return of its registered office to Sabadell (2025): https://es.ara.cat/economia/banca/banc-sabadell-devolvera-sede-social-cataluna-siete-anos-despues_1_5262253.html (the record is consistent).
- Aegon HQ move to the US and rename to Transamerica (Dec 2025): https://www.dutchnews.nl/2025/12/aegon-to-go-american-with-move-to-us-and-change-of-name
- Spain municipal rent reference system (SERPAVI, MIVAU): https://serpavi.mivau.gob.es/ (BOE-A-2024-5213).
- INE Spain IPVA 2024 (growth rates only, no levels): https://ine.es/dyngs/Prensa/IPVA2024.htm
- INSEE private-sector salaries 2023 by commune and département (published 2 Sep 2025): https://www.insee.fr/fr/statistiques/2021266
- BA Entgeltstatistik (district medians, qualification split, Dec 2025 tables): https://statistik.arbeitsagentur.de/DE/Navigation/Statistiken/Fachstatistiken/Beschaeftigung/Entgelt/Entgelt-Nav.html
- GFCI 40 (Zurich 10th, Geneva 12th) is consistent with the record: https://www.businesstoday.in/markets/story/gift-city-climbs-nine-places-to-37th-in-global-financial-centres-index-556209-2026-09-17
