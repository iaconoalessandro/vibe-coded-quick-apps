/* Atlas record: Greece. Read 2 October 2026; log P56
 * (research/verification/round-4e.md; round 5, 3 October 2026:
 * research/verification/round-5b.md). First hub, Athens and Piraeus. The EU
 * registration step is read on the national registry of public services
 * (mitos.gov.gr); student rules on the EU Immigration Portal.
 * Hubs for further cities were added on 3 October 2026 from city-level statistics
 * (log: research/verification/round-4k.md). Round 5 added Eurostat metropolitan job
 * counts for Athens, hub metrics (Eurostat population and GDP), standing, GFCI and
 * start-up rankings, the shipowners' own economic figures and named employers
 * (Global LEI Index, graduate programmes). */

ATLAS.add({
  id: 'GR',
  checked: '2026-10-03',
  log: 'P56',
  summary: 'The weakest graduate job market in the EU: 64% of graduates who left education up to three years ago are in work, against 85% across the EU, although youth unemployment (15.6%) now matches the EU’s. Athens holds 70% of the country’s information and communication jobs and 59% of its finance jobs, and the global industry is shipping: Greek owners control about a fifth of the world’s fleet capacity. A 50% income-tax cut for seven years rewards people who move their tax residence to Greece, and non-EU graduates have no job-search permit.',
  sectors: [
    'Shipping',
    'Tourism',
    'Energy',
    'Banking',
    'Public sector'
  ],
  roles: ['finance', 'it', 'business', 'logistics'],
  hubs: [
    {
      id: 'athens', name: 'Athens and Piraeus', lat: 37.98, lon: 23.73,
      knownFor: 'Shipowners and the country’s head offices',
      why: ['gr-ugs', 'gr-ugs-econ', 'gr-athens-emp', 'gr-metro', 'gr-gfci', 'gr-gser', 'gr-helleniq-efl', 'gr-metlen', 'gr-deloitte'],
      sectors: ['Shipping', 'Banking', 'Tourism', 'Public sector'],
      employers: [
        { t: 'Greek-owned shipping companies', note: '5,691 ships, about 20% of world capacity', c: 'gr-ugs' },
        { name: 'Piraeus Port Authority', note: 'port operator, headquarters at Akti Miaouli, Piraeus', c: 'gr-e-ppa' },
        { name: 'National Bank of Greece', note: 'bank, headquarters on Eolou Street, Athens', c: 'gr-e-nbg' },
        { name: 'Piraeus Bank', note: 'bank, headquarters on Amerikis Street, Athens', c: 'gr-e-piraeus' },
        { name: 'Alpha Bank', note: 'bank, headquarters on Stadiou Street, Athens', c: 'gr-e-alpha' },
        { name: 'OTE', note: 'telecoms group, headquarters at Kifissias Avenue, Marousi', c: 'gr-e-ote' },
        { name: 'HELLENiQ ENERGY Empowering Future Leaders', note: 'two-year graduate programme with commercial and corporate routes; Greek and English at C2', c: 'gr-helleniq-efl' },
        { name: 'HELLENiQ ENERGY', note: 'energy group, headquarters at Cheimarras Street, Marousi', c: 'gr-e-helleniq' },
        { name: 'Motor Oil Hellas', note: 'refining company, headquarters at Irodou Attikou Street, Marousi', c: 'gr-e-motoroil' },
        { name: 'METLEN Energy & Metals', note: 'energy and metals group, headquarters at Artemidos Street, Marousi', c: 'gr-e-metlen' },
        { name: 'METLEN Engineers in Action', note: 'one-year paid internship for engineering graduates; Greek and English required', c: 'gr-metlen' },
        { name: 'Titan Cement Company', note: 'cement producer, headquarters at Chalkidos Street, Athens', c: 'gr-e-titan' },
        { name: 'Aegean Airlines', note: 'airline, headquarters at Athens International Airport', c: 'gr-e-aegean' },
        { name: 'Deloitte Greece', note: 'registered offices at Marousi, Attica', c: 'gr-deloitte' }
      ],
      demand: {
        logistics: ['strong', 'gr-ugs', 'gr-ugs-econ', 'gr-e-ppa'],
        business: ['strong', 'gr-helleniq-efl', 'gr-e-helleniq', 'gr-e-ote', 'gr-e-motoroil'],
        finance: ['dominant', 'gr-athens-emp', 'gr-e-nbg', 'gr-e-piraeus', 'gr-e-alpha'],
        accounting: ['present', 'gr-deloitte'],
        it: ['dominant', 'gr-athens-emp', 'gr-gser'],
        economics: 'gap', management: 'gap', marketing: 'gap', analytics: 'gap', software: 'gap', datasci: 'gap', ai: 'gap', cs: 'gap', bigdata: 'gap'
      },
      finance: {
        banking: ['strong', 'gr-e-nbg', 'gr-e-piraeus', 'gr-e-alpha']
      },
      standing: [
        { f: 'it', s: [5, 3, 1], c: ['gr-athens-emp', 'gr-gser'] },
        { f: 'finance', s: [5, 2, 1], c: ['gr-athens-emp', 'gr-gfci'] },
        { f: 'business', s: [5, 2, 1], c: ['gr-athens-emp', 'gr-e-helleniq', 'gr-e-ote', 'gr-e-motoroil'] },
        { f: 'logistics', s: [5, 4, 3], c: ['gr-ugs', 'gr-ugs-econ'] }
      ],
      metrics: {
        pop: { v: 3626216, year: 2023, area: 'metro', tag: 'data', src: 'https://ec.europa.eu/eurostat/databrowser/view/met_pjanaggr3/default/table?lang=en', by: 'Eurostat, metropolitan regions: population on 1 January (met_pjanaggr3), Athina metropolitan region', seen: '2026-10-03' },
        gdp: { v: 82.62, cur: 'EUR', year: 2021, area: 'metro', tag: 'data', src: 'https://ec.europa.eu/eurostat/databrowser/view/met_10r_3gdp/default/table?lang=en', by: 'Eurostat, metropolitan regions: GDP at current market prices (met_10r_3gdp), Athina (EUR million ÷ 1,000); latest year published for Greek metropolitan regions', seen: '2026-10-03' }
      },
      programmes: []
    },
    {
      id: 'thessaloniki', name: 'Thessaloniki', lat: 40.64, lon: 22.94,
      knownFor: 'Greece’s second city and northern port',
      why: ['gr-thessaloniki', 'gr-thess-rank', 'gr-metro', 'gr-pfizer-cdi', 'gr-e-thpa', 'gr-deloitte', 'gr-metlen'],
      sectors: ['Ports and logistics', 'Trade', 'Tourism'],
      employers: [
        { name: 'Pfizer Center for Digital Innovation', note: 'about 500 employees; software and cloud bootcamp hires', c: 'gr-pfizer-cdi' },
        { name: 'Thessaloniki Port Authority', note: 'port operator, headquarters inside the port', c: 'gr-e-thpa' },
        { name: 'Deloitte Alexander Competence Center', note: 'Deloitte company registered in the port zone', c: 'gr-deloitte' },
        { name: 'METLEN Engineers in Action', note: 'one-year paid internship; Thessaloniki is one of the sites', c: 'gr-metlen' },
        { t: 'Information and communication employers', note: '10,160 jobs (2021)', c: 'gr-thessaloniki' },
        { t: 'Finance and insurance employers', note: '7,400 jobs (2021)', c: 'gr-thess-rank' }
      ],
      demand: {
        it: ['strong', 'gr-thessaloniki', 'gr-thess-rank'],
        finance: ['strong', 'gr-thessaloniki', 'gr-thess-rank'],
        logistics: ['present', 'gr-e-thpa'],
        software: ['present', 'gr-pfizer-cdi'],
        business: 'gap', economics: 'gap', accounting: 'gap', management: 'gap', marketing: 'gap', analytics: 'gap', datasci: 'gap', ai: 'gap', cs: 'gap', bigdata: 'gap'
      },
      standing: [
        { f: 'it', s: [4, 2, 1], c: ['gr-thessaloniki', 'gr-thess-rank'] },
        { f: 'finance', s: [4, 2, 1], c: ['gr-thessaloniki', 'gr-thess-rank'] }
      ],
      metrics: {
        pop: { v: 1089819, year: 2023, area: 'metro', tag: 'data', src: 'https://ec.europa.eu/eurostat/databrowser/view/met_pjanaggr3/default/table?lang=en', by: 'Eurostat, metropolitan regions: population on 1 January (met_pjanaggr3), Thessaloniki metropolitan region', seen: '2026-10-03' },
        gdp: { v: 16, cur: 'EUR', year: 2021, area: 'metro', tag: 'data', src: 'https://ec.europa.eu/eurostat/databrowser/view/met_10r_3gdp/default/table?lang=en', by: 'Eurostat, metropolitan regions: GDP at current market prices (met_10r_3gdp), Thessaloniki (EUR million ÷ 1,000); latest year published for Greek metropolitan regions', seen: '2026-10-03' }
      },
      programmes: []
    }
  ],
  work: [
    { k: 'Where demand is now', c: ['gr-athens-emp', 'gr-emp-sector', 'gr-ugs-econ'] },
    { k: 'Entry pay', c: ['gr-ses'] },
    { k: 'Graduate labour market', c: ['gr-grad-emp', 'gr-grads', 'gr-unemp', 'gr-grad-labour-note'] },
    { k: 'Recruiting calendar', c: ['gr-cal', 'gr-metlen'] },
    { k: 'Language', c: ['gr-lang', 'gr-helleniq-efl', 'gr-metlen'] },
    { k: 'Tax and net pay', c: ['gr-5c'] }
  ],
  briefs: [
    ['countries/gr-greece.md', 'Country brief: hubs, employers, pay and standing'],
    ['places/origin-countries-eu.md', '§7 Greece: home market, emigration, the art. 5C tax relief']
  ],
  gaps: [
    'All Greek immigration, visa, residence permit, post-study work and salary rules are consolidated from primary sources in visas_immigration/greece/greece_visas_immigration_guide.md.',
    'Demand is rated from Eurostat’s 2021 metropolitan counts of jobs in information and communication and in finance and insurance and from named headquarters; no source gives demand by role family, and no pay or rent by city could be read (no regional earnings table from the Hellenic Statistical Authority was found and no citable rent source was available).',
    'Graduate programmes were read for HELLENiQ ENERGY and METLEN (and Pfizer’s bootcamp); the Eurobank, National Bank of Greece and Alpha Bank career pages could not be read, and the Piraeus Bank programme found dates from 2018 to 2020, so the banks’ graduate intakes are not described.',
    'Headquarters come from the Global LEI Index under the companies’ Greek legal names; Eurobank’s current record was not found (its holding company record is marked inactive), so it is not listed; Marousi and Spata are in the Athens metropolitan area but outside the city.',
    'Athens’s standing in logistics rests on the shipowners’ own figures (fleet share, jobs, pay), which are an industry body’s estimates, and on no ranking of maritime cities, which was not read; university rankings were not read either.',
    'The part-time working limit for non-EU students (20 hours/week) and the one-year post-study job-search permit (type H.11) are codified in Law 5038/2023 (Migration Code arts 118 and 119) and verified in the official visas guide.'
  ],
  claims: {
    "gr-cal": { t: "Greek graduate recruiting clusters in the autumn: Career.Days Athens is on 12–13 September 2026, METLEN’s Engineers in Action takes applications until 20 October for a January 2027 start, and the DYPA graduate scheme was open from 27 July to 18 August 2026; Deloitte Greece’s internships have no fixed dates and HELLENiQ ENERGY’s programme page gives none.", tag: "employer-stated", src: "https://employers.kariera.gr/en/events/physical-events/athens-career-days", by: "kariera.gr Career.Days Athens 2026; METLEN Engineers in Action page; WhereWeWork.gr on the DYPA scheme; Deloitte Greece students page; HELLENiQ ENERGY programme page (all read 8 Oct 2026)", seen: "2026-10-08" },
    "gr-lang": { t: "HELLENiQ ENERGY’s graduate programme requires excellent Greek and English at C2 level and runs its application platform in Greek only, and METLEN’s Greek positions ask for excellent Greek and English; the ASEP public-competition portal is in Greek, and the Pfizer and Accenture technology pages read state no language requirement.", tag: "employer-stated", src: "https://www.helleniqenergy.com/en/career/empowering-future-leaders", by: "HELLENiQ ENERGY programme page; METLEN Engineers in Action requirements; ASEP home page; Pfizer CDI and Accenture Greece listing (all read 8 Oct 2026)", seen: "2026-10-08" },
    'gr-grads': { t: '66.9% of recent tertiary graduates in Greece were in work, against 86.9% across the EU, and tertiary unemployment at ages 25–29 was 14.8%.', tag: 'data', src: 'research/places/origin-countries-eu.md', by: 'Eurostat 2025, via places/origin-countries-eu.md §2 and §7', seen: '2026-10-02' },
    'gr-5c': { t: 'Art. 5C of the Income Tax Code halves income tax on Greek employment income for up to seven years for people who move their tax residence to Greece after not being resident for 5 of the previous 6 years; no nationality bar appears in the texts read.', tag: 'data', src: 'research/places/origin-countries-eu.md', by: 'Law 4172/2013 art. 5C and AADE FAQ (2 Oct 2025), via places/origin-countries-eu.md §10', seen: '2026-10-02' },
    'gr-ugs': { t: 'The Greek-owned fleet numbers 5,691 ships with about 20% of world capacity in deadweight tonnes, the largest of any country.', tag: 'data', src: 'https://ugs.gr/en/greek-shipping-and-economy/greek-shipping-and-economy-2025/', by: 'Union of Greek Shipowners (Piraeus), 2025', seen: '2026-10-02' },
    'gr-thessaloniki': { t: 'Eurostat counts 489,300 people in work in the Thessaloniki metropolitan region in 2021: 10,160 in information and communication (second in Greece, after Athens) and 7,400 in finance and insurance (second in Greece, after Athens). The region’s GDP was €16.0 billion in 2021.', tag: 'data', src: 'https://ec.europa.eu/eurostat/databrowser/view/met_10r_3emp/default/table?lang=en', by: 'Eurostat, metropolitan regions: employment by activity (met_10r_3emp) and GDP (met_10r_3gdp)', seen: '2026-10-03' },
    'gr-athens-emp': { t: 'Eurostat counts 1,733,940 people in work in the Athens metropolitan region in 2021: 76,220 in information and communication (70% of Greece’s 108,580 and 13th of 152 European metropolitan regions) and 46,230 in finance and insurance (59% of 78,460 and 16th). The region’s GDP was €82.6 billion in 2021, 46% of Greece’s €181.5 billion.', tag: 'data', src: 'https://ec.europa.eu/eurostat/databrowser/view/met_10r_3emp/default/table?lang=en', by: 'Eurostat, metropolitan regions: employment by activity (met_10r_3emp), 2021', seen: '2026-10-03' },
    'gr-thess-rank': { t: 'Among the 152 European metropolitan regions with 2021 figures, Thessaloniki ranks 68th for jobs in information and communication (10,160, 9% of Greece’s) and 74th for jobs in finance and insurance (7,400, 9%), about a seventh of Athens’s count in the first.', tag: 'data', src: 'https://ec.europa.eu/eurostat/databrowser/view/met_10r_3emp/default/table?lang=en', by: 'Eurostat, metropolitan regions: employment by activity (met_10r_3emp), 2021', seen: '2026-10-03' },
    'gr-metro': { t: 'Eurostat counts 3,626,216 residents in the Athens metropolitan region and 1,089,819 in Thessaloniki on 1 January 2023 (35% and 10% of Greece’s 10,413,982); the latest GDP published for them is for 2021: €82.6 billion and €16.0 billion.', tag: 'data', src: 'https://ec.europa.eu/eurostat/databrowser/view/met_pjanaggr3/default/table?lang=en', by: 'Eurostat, metropolitan regions: population on 1 January (met_pjanaggr3) and GDP (met_10r_3gdp)', seen: '2026-10-03' },
    'gr-emp-sector': { t: 'In 2025 Greece had 5,226,000 people in employment: 131,070 in information and communication (2.5%, against 3.5% in the EU) and 91,010 in finance and insurance (1.7%, against 2.3% in the EU).', tag: 'data', src: 'https://ec.europa.eu/eurostat/databrowser/view/nama_10_a10_e/default/table?lang=en', by: 'Eurostat, employment by 10 branches (nama_10_a10_e), domestic concept, 2025', seen: '2026-10-03' },
    'gr-unemp': { t: 'Greece’s seasonally adjusted unemployment rate was 7.4% in August 2026, and 15.6% for under-25s, against 6.1% and 15.4% in the EU.', tag: 'data', src: 'https://ec.europa.eu/eurostat/databrowser/view/une_rt_m/default/table?lang=en', by: 'Eurostat, Unemployment by sex and age, monthly (une_rt_m), August 2026', seen: '2026-10-03' },
    'gr-grad-emp': { t: 'In 2025, 64.0% of Greek tertiary graduates aged 20 to 34 who left education up to three years earlier were in work, the lowest of the 36 countries Eurostat lists and against 85.3% in the EU; among all graduates aged 20 to 34 the rate was 80.3% (EU 88.4%).', tag: 'data', src: 'https://ec.europa.eu/eurostat/databrowser/view/edat_lfse_24/default/table?lang=en', by: 'Eurostat, Employment rates of young people not in education and training (edat_lfse_24), 2025', seen: '2026-10-03' },
    'gr-ses': { t: 'In the 2022 structure of earnings survey, mean monthly gross earnings of Greek employees in firms with ten or more staff were €2,011 in information and communication and €2,719 in finance and insurance, against €4,026 and €4,234 in the EU; annual means were €27,043 and €37,468.', tag: 'data', src: 'https://ec.europa.eu/eurostat/databrowser/view/earn_ses22_19/default/table?lang=en', by: 'Eurostat, Structure of earnings survey 2022: earnings by NACE (earn_ses22_19, earn_ses22_26)', seen: '2026-10-03' },
    'gr-gfci': { t: 'In the Global Financial Centres Index 40 (September 2026) Athens ranks 114th of 117 centres in the world, down five places, and 113th for fintech; it is listed among the Eastern European and Central Asian centres.', tag: 'practitioner consensus', src: 'https://www.longfinance.net/media/documents/GFCI_40_Report_2026.09.16_v1.2.pdf', by: 'Z/Yen and China Development Institute, Global Financial Centres Index 40 (16 Sep 2026)', seen: '2026-10-03' },
    'gr-gser': { t: 'Startup Genome’s GSER 2026 puts Athens’s Ecosystem Value at $4 billion, against a global average of $25 billion and a European average of $14.3 billion, with $124 million of early-stage funding between the second half of 2023 and 2025 against a global average of $554 million.', tag: 'practitioner consensus', src: 'https://startupgenome.com/ecosystems/athens', by: 'Startup Genome, Global Startup Ecosystem Report 2026, Athens ecosystem page', seen: '2026-10-03' },
    'gr-ugs-econ': { t: 'The Union of Greek Shipowners says shipping’s total economic impact is 7% to 8% of Greece’s GDP, that around 10% of the total private payroll relates to shipping with about 160,000 jobs directly and indirectly, and that the average wage in shipping companies is about three times the private-sector average.', tag: 'employer-stated', src: 'https://ugs.gr/en/greek-shipping-and-economy/greek-shipping-and-economy-2025/shipping-in-greece/', by: 'Union of Greek Shipowners, Greek shipping and the economy 2025: Shipping in Greece', seen: '2026-10-03' },
    'gr-helleniq-efl': { t: 'HELLENiQ ENERGY’s Empowering Future Leaders is a two-year employment programme with technical, commercial, digital and corporate (human resources, finance, procurement) routes, open to graduates in engineering or economic sciences with up to two years’ experience, who need Greek and English at C2 level and flexibility to relocate; applications go through a Greek-language platform.', tag: 'employer-stated', src: 'https://www.helleniqenergy.gr/en/career/empowering-future-leaders', by: 'HELLENiQ ENERGY, Empowering Future Leaders Graduate Employment Program', seen: '2026-10-03' },
    'gr-metlen': { t: 'METLEN’s Engineers in Action is a one-year paid internship for recent engineering graduates with up to two years’ experience; in Greece it asks for excellent Greek and English and willingness to relocate to Athens, Thessaloniki, Viotia, Corinth or Volos; applications ran from 15 September to 20 October 2025, and more than 260 young engineers have taken part in Greece, 125 of them still with the company.', tag: 'employer-stated', src: 'https://www.metlengroup.com/our-people/engineers-in-action/requirements-selection-process', by: 'METLEN Energy & Metals, Engineers in Action: requirements and press release of 15 September 2025', seen: '2026-10-03' },
    'gr-pfizer-cdi': { t: 'Pfizer’s Center for Digital Innovation in Thessaloniki says it has about 500 employees, more than 200 global digital projects and more than 500 positions filled since 2020, and in 2023 it hired 15 young professionals, mainly software engineers, from its software and cloud engineering bootcamp.', tag: 'employer-stated', src: 'https://centerfordigitalinnovation.pfizer.com/', by: 'Pfizer, Center for Digital Innovation (CDI), Thessaloniki, home and press pages', seen: '2026-10-03' },
    'gr-deloitte': { t: 'Deloitte’s Greek companies are registered at Marousi, Attica (Deloitte Business Solutions and Deloitte Certified Public Accountants) and, for the Deloitte Alexander Competence Center, in the port zone of Thessaloniki.', tag: 'employer-stated', src: 'https://www.deloitte.com/gr/en/careers.html', by: 'Deloitte Greece, careers page (legal notice)', seen: '2026-10-03' },
    'gr-grad-labour-note': { t: 'Greek youth unemployment under 25 (15.6%) is now close to the EU’s (15.4%) although graduate employment is the EU’s lowest.', tag: 'data', src: 'https://ec.europa.eu/eurostat/databrowser/view/edat_lfse_24/default/table?lang=en', by: 'Eurostat, edat_lfse_24 (see gr-grad-emp)', seen: '2026-10-03' },
    'gr-e-nbg': { t: 'National Bank of Greece has its headquarters at 86 Eolou Street, Athens.', tag: 'data', src: 'https://api.gleif.org/api/v1/lei-records/5UMCZOEYKCVFAW8ZLO05', by: 'GLEIF, Global LEI Index record for ΕΘΝΙΚΗ ΤΡΑΠΕΖΑ ΤΗΣ ΕΛΛΑΔΟΣ Α.Ε. (National Bank of Greece) (LEI 5UMCZOEYKCVFAW8ZLO05)', seen: '2026-10-03' },
    'gr-e-piraeus': { t: 'Piraeus Bank has its headquarters at Amerikis 4, Athens.', tag: 'data', src: 'https://api.gleif.org/api/v1/lei-records/213800OYHR1MPQ5VJL60', by: 'GLEIF, Global LEI Index record for ΤΡΑΠΕΖΑ ΠΕΙΡΑΙΩΣ ΑΝΩΝΥΜΟΣ ΕΤΑΙΡΕΙΑ (Piraeus Bank) (LEI 213800OYHR1MPQ5VJL60)', seen: '2026-10-03' },
    'gr-e-alpha': { t: 'Alpha Bank has its headquarters at 40 Stadiou Street, Athens.', tag: 'data', src: 'https://api.gleif.org/api/v1/lei-records/213800DBQIB6VBNU5C64', by: 'GLEIF, Global LEI Index record for ΑΛΦΑ ΤΡΑΠΕΖΑ Α.Ε. (Alpha Bank) (LEI 213800DBQIB6VBNU5C64)', seen: '2026-10-03' },
    'gr-e-ote': { t: 'OTE, the Hellenic Telecommunications Organisation, has its headquarters at 99 Kifissias Avenue, Marousi.', tag: 'data', src: 'https://api.gleif.org/api/v1/lei-records/ELPUFM0XZRZO4LFXW404', by: 'GLEIF, Global LEI Index record for ΟΡΓΑΝΙΣΜΟΣ ΤΗΛΕΠΙΚΟΙΝΩΝΙΩΝ ΤΗΣ ΕΛΛΑΔΟΣ ΑΝΩΝΥΜΗ ΕΤΑΙΡΕΙΑ (OTE) (LEI ELPUFM0XZRZO4LFXW404)', seen: '2026-10-03' },
    'gr-e-helleniq': { t: 'HELLENiQ ENERGY Holdings has its headquarters at Cheimarras 8A, Marousi.', tag: 'data', src: 'https://api.gleif.org/api/v1/lei-records/213800YUBJMZYR1SNG35', by: 'GLEIF, Global LEI Index record for HELLENIQ ENERGY ΑΝΩΝΥΜΗ ΕΤΑΙΡΕΙΑ ΣΥΜΜΕΤΟΧΩΝ (LEI 213800YUBJMZYR1SNG35)', seen: '2026-10-03' },
    'gr-e-motoroil': { t: 'Motor Oil (Hellas) Corinth Refineries has its headquarters at 12A Irodou Attikou Street, Marousi.', tag: 'data', src: 'https://api.gleif.org/api/v1/lei-records/213800U3Y9UL7Y4QVM11', by: 'GLEIF, Global LEI Index record for ΜΟΤΟΡ ΟΙΛ (ΕΛΛΑΣ) ΔΙΥΛΙΣΤΗΡΙΑ ΚΟΡΙΝΘΟΥ Α.Ε. (Motor Oil Hellas Corinth Refineries) (LEI 213800U3Y9UL7Y4QVM11)', seen: '2026-10-03' },
    'gr-e-metlen': { t: 'METLEN Energy & Metals S.A. has its headquarters at 8 Artemidos, Marousi.', tag: 'data', src: 'https://api.gleif.org/api/v1/lei-records/213800KT8MEUJEJ2KW41', by: 'GLEIF, Global LEI Index record for METLEN ENERGY & METALS ΜΟΝΟΠΡΟΣΩΠΗ Α.Ε. (LEI 213800KT8MEUJEJ2KW41)', seen: '2026-10-03' },
    'gr-e-titan': { t: 'Titan Cement Company has its headquarters at Chalkidos 22A, Athens.', tag: 'data', src: 'https://api.gleif.org/api/v1/lei-records/213800OREKC9BL58G144', by: 'GLEIF, Global LEI Index record for Ανώνυμη Εταιρία Τσιμέντων ΤΙΤΑΝ (Titan Cement Company) (LEI 213800OREKC9BL58G144)', seen: '2026-10-03' },
    'gr-e-ppa': { t: 'The Piraeus Port Authority has its headquarters at 10 Akti Miaouli, Piraeus.', tag: 'data', src: 'https://api.gleif.org/api/v1/lei-records/549300UNB6JCR0XZT864', by: 'GLEIF, Global LEI Index record for ΟΡΓΑΝΙΣΜΟΣ ΛΙΜΕΝΟΣ ΠΕΙΡΑΙΩΣ ΑΕ (Piraeus Port Authority) (LEI 549300UNB6JCR0XZT864)', seen: '2026-10-03' },
    'gr-e-aegean': { t: 'Aegean Airlines has its headquarters in Building 57 at Athens International Airport, Spata.', tag: 'data', src: 'https://api.gleif.org/api/v1/lei-records/213800VI8OH5EJM18L21', by: 'GLEIF, Global LEI Index record for ΑΕΡΟΠΟΡΙΑ ΑΙΓΑΙΟΥ ΑΝΩΝΥΜΗ ΑΕΡΟΠΟΡΙΚΗ ΕΤΑΙΡΕΙΑ (Aegean Airlines) (LEI 213800VI8OH5EJM18L21)', seen: '2026-10-03' },
    'gr-e-thpa': { t: 'The Thessaloniki Port Authority has its headquarters at Pier A, inside the port of Thessaloniki.', tag: 'data', src: 'https://api.gleif.org/api/v1/lei-records/213800ETW48B6KOWZA42', by: 'GLEIF, Global LEI Index record for ΟΡΓΑΝΙΣΜΟΣ ΛΙΜΕΝΟΣ ΘΕΣΣΑΛΟΝΙΚΗΣ Α.Ε. (Thessaloniki Port Authority) (LEI 213800ETW48B6KOWZA42)', seen: '2026-10-03' }
  }
});

if (window.I18N) I18N.add('it', {
  "Greek graduate recruiting clusters in the autumn: Career.Days Athens is on 12–13 September 2026, METLEN’s Engineers in Action takes applications until 20 October for a January 2027 start, and the DYPA graduate scheme was open from 27 July to 18 August 2026; Deloitte Greece’s internships have no fixed dates and HELLENiQ ENERGY’s programme page gives none.":
    "Il reclutamento dei neolaureati in Grecia si concentra in autunno: Career.Days Athens è il 12–13 settembre 2026, l’Engineers in Action di METLEN raccoglie candidature fino al 20 ottobre per un inizio a gennaio 2027, e il programma del DYPA per i laureati era aperto dal 27 luglio al 18 agosto 2026; i tirocini di Deloitte Grecia non hanno date fisse e la pagina del programma di HELLENiQ ENERGY non ne indica.",
  "HELLENiQ ENERGY’s graduate programme requires excellent Greek and English at C2 level and runs its application platform in Greek only, and METLEN’s Greek positions ask for excellent Greek and English; the ASEP public-competition portal is in Greek, and the Pfizer and Accenture technology pages read state no language requirement.":
    "Il programma per neolaureati di HELLENiQ ENERGY richiede un ottimo greco e inglese a livello C2 e gestisce la piattaforma di candidatura solo in greco, e le posizioni METLEN in Grecia chiedono un ottimo greco e inglese; il portale dell’ASEP per i concorsi pubblici è in greco, e le pagine tecnologiche di Pfizer e Accenture lette non indicano alcun requisito linguistico.",
  'The weakest graduate job market in the EU: 64% of graduates who left education up to three years ago are in work, against 85% across the EU, although youth unemployment (15.6%) now matches the EU’s. Athens holds 70% of the country’s information and communication jobs and 59% of its finance jobs, and the global industry is shipping: Greek owners control about a fifth of the world’s fleet capacity. A 50% income-tax cut for seven years rewards people who move their tax residence to Greece, and non-EU graduates have no job-search permit.':
    'Il mercato del lavoro per laureati più debole dell’UE: lavora il 64% dei laureati usciti dal sistema educativo da non più di tre anni, contro l’85% nell’UE, anche se la disoccupazione giovanile (15,6%) ora è pari a quella UE. Atene concentra il 70% dei posti di lavoro greci nell’informazione e comunicazione e il 59% in finanza, e l’industria globale è il trasporto marittimo: gli armatori greci controllano circa un quinto della capacità della flotta mondiale. Un taglio del 50% dell’imposta sul reddito per sette anni premia chi trasferisce la residenza fiscale in Grecia, e i laureati extra-UE non hanno un permesso per cercare lavoro.',
  'Shipping':
    'Trasporto marittimo',
  'Tourism':
    'Turismo',
  'Energy':
    'Energia',
  'Banking':
    'Banca',
  'Public sector':
    'Settore pubblico',
  'Demand is rated from Eurostat’s 2021 metropolitan counts of jobs in information and communication and in finance and insurance and from named headquarters; no source gives demand by role family, and no pay or rent by city could be read (no regional earnings table from the Hellenic Statistical Authority was found and no citable rent source was available).':
    'La domanda è valutata sui conteggi metropolitani Eurostat 2021 dei posti nell’informazione e comunicazione e in finanza e assicurazioni e sulle sedi centrali citate; nessuna fonte dà la domanda per famiglia di ruoli e non è stato possibile leggere stipendi o affitti per città (non è stata trovata una tabella regionale delle retribuzioni dell’istituto di statistica ellenico e non era disponibile una fonte citabile per gli affitti).',
  'Graduate programmes were read for HELLENiQ ENERGY and METLEN (and Pfizer’s bootcamp); the Eurobank, National Bank of Greece and Alpha Bank career pages could not be read, and the Piraeus Bank programme found dates from 2018 to 2020, so the banks’ graduate intakes are not described.':
    'I programmi per laureati sono stati letti per HELLENiQ ENERGY e METLEN (e per il bootcamp di Pfizer); le pagine carriera di Eurobank, National Bank of Greece e Alpha Bank non si sono potute leggere, e il programma di Piraeus Bank trovato risale al 2018-2020, quindi le assunzioni di laureati delle banche non sono descritte.',
  'Headquarters come from the Global LEI Index under the companies’ Greek legal names; Eurobank’s current record was not found (its holding company record is marked inactive), so it is not listed; Marousi and Spata are in the Athens metropolitan area but outside the city.':
    'Le sedi centrali vengono dal Global LEI Index sotto la ragione sociale greca delle aziende; il record attuale di Eurobank non è stato trovato (quello della holding è segnato come inattivo), quindi non è elencata; Marousi e Spata sono nell’area metropolitana di Atene ma fuori dalla città.',
  'Athens’s standing in logistics rests on the shipowners’ own figures (fleet share, jobs, pay), which are an industry body’s estimates, and on no ranking of maritime cities, which was not read; university rankings were not read either.':
    'La posizione di Atene nella logistica si basa sulle cifre degli stessi armatori (quota di flotta, posti, retribuzioni), stime di un’associazione di categoria, e non su una classifica delle città marittime, che non è stata letta; non sono state lette neppure classifiche universitarie.',
  'All Greek immigration, visa, residence permit, post-study work and salary rules are consolidated from primary sources in visas_immigration/greece/greece_visas_immigration_guide.md.':
    'Tutte le norme su immigrazione, visti, permessi di soggiorno, ricerca lavoro post-studio e stipendi per la Grecia sono consolidate da fonti primarie in visas_immigration/greece/greece_visas_immigration_guide.md.',
  'The part-time working limit for non-EU students (20 hours/week) and the one-year post-study job-search permit (type H.11) are codified in Law 5038/2023 (Migration Code arts 118 and 119) and verified in the official visas guide.':
    'Il limite per il lavoro part-time degli studenti extra-UE (20 ore/settimana) e il permesso di un anno per cercare lavoro post-studio (tipo H.11) sono codificati nella Legge 5038/2023 (articoli 118 e 119 del Codice dell’Immigrazione) e verificati nella guida ufficiale visti.',
  'Country brief: hubs, employers, pay and standing':
    'Scheda paese: poli, datori di lavoro, retribuzioni e posizionamento',
  '§7 Greece: home market, emigration, the art. 5C tax relief':
    '§7 Grecia: mercato interno, emigrazione, l’agevolazione fiscale dell’art. 5C',
  'Shipowners and the country’s head offices':
    'Armatori e le sedi centrali del paese',
  '5,691 ships, about 20% of world capacity':
    '5.691 navi, circa il 20% della capacità mondiale',
  'Greek-owned shipping companies':
    'Le compagnie di navigazione di proprietà greca',
  'port operator, headquarters at Akti Miaouli, Piraeus':
    'gestore del porto, sede centrale ad Akti Miaouli, al Pireo',
  'bank, headquarters on Eolou Street, Athens':
    'banca, sede centrale in Eolou Street, ad Atene',
  'bank, headquarters on Amerikis Street, Athens':
    'banca, sede centrale in Amerikis, ad Atene',
  'bank, headquarters on Stadiou Street, Athens':
    'banca, sede centrale in Stadiou Street, ad Atene',
  'telecoms group, headquarters at Kifissias Avenue, Marousi':
    'gruppo di telecomunicazioni, sede centrale in Kifissias Avenue, a Marousi',
  'two-year graduate programme with commercial and corporate routes; Greek and English at C2':
    'programma biennale per laureati con percorsi commerciale e corporate; greco e inglese a livello C2',
  'energy group, headquarters at Cheimarras Street, Marousi':
    'gruppo energetico, sede centrale in Cheimarras, a Marousi',
  'refining company, headquarters at Irodou Attikou Street, Marousi':
    'società di raffinazione, sede centrale in Irodou Attikou, a Marousi',
  'energy and metals group, headquarters at Artemidos Street, Marousi':
    'gruppo energetico e dei metalli, sede centrale in Artemidos, a Marousi',
  'one-year paid internship for engineering graduates; Greek and English required':
    'tirocinio retribuito di un anno per laureati in ingegneria; richiesti greco e inglese',
  'cement producer, headquarters at Chalkidos Street, Athens':
    'produttore di cemento, sede centrale in Chalkidos, ad Atene',
  'airline, headquarters at Athens International Airport':
    'compagnia aerea, sede centrale all’aeroporto internazionale di Atene',
  'registered offices at Marousi, Attica':
    'sedi legali a Marousi, in Attica',
  'Greece’s second city and northern port':
    'La seconda città greca e il suo porto settentrionale',
  'Ports and logistics':
    'Porti e logistica',
  'Trade':
    'Commercio',
  'about 500 employees; software and cloud bootcamp hires':
    'circa 500 dipendenti; assunzioni dal bootcamp di software e cloud',
  'port operator, headquarters inside the port':
    'gestore del porto, sede centrale all’interno del porto',
  'Deloitte company registered in the port zone':
    'società di Deloitte con sede legale nella zona portuale',
  'one-year paid internship; Thessaloniki is one of the sites':
    'tirocinio retribuito di un anno; Salonicco è una delle sedi',
  '10,160 jobs (2021)':
    '10.160 posti (2021)',
  'Information and communication employers':
    'I datori di lavoro dell’informazione e comunicazione',
  '7,400 jobs (2021)':
    '7.400 posti (2021)',
  'Finance and insurance employers':
    'I datori di lavoro di finanza e assicurazioni',
  'Where demand is now':
    'Dove si concentra la domanda oggi',
  'Entry pay':
    'Retribuzioni d’ingresso',
  'Language':
    'Lingua',
  'Tax and net pay':
    'Tasse e stipendio netto',
  '66.9% of recent tertiary graduates in Greece were in work, against 86.9% across the EU, and tertiary unemployment at ages 25–29 was 14.8%.':
    'Il 66,9% dei laureati recenti in Grecia lavorava, contro l’86,9% nell’UE, e la disoccupazione dei laureati tra 25 e 29 anni era del 14,8%.',
  'Art. 5C of the Income Tax Code halves income tax on Greek employment income for up to seven years for people who move their tax residence to Greece after not being resident for 5 of the previous 6 years; no nationality bar appears in the texts read.':
    'L’art. 5C del Codice delle imposte sul reddito dimezza l’imposta sui redditi di lavoro greci fino a sette anni per chi trasferisce la residenza fiscale in Grecia dopo non esservi stato residente per 5 dei 6 anni precedenti; nei testi letti non c’è alcun vincolo di nazionalità.',
  'The Greek-owned fleet numbers 5,691 ships with about 20% of world capacity in deadweight tonnes, the largest of any country.':
    'La flotta di proprietà greca conta 5.691 navi con circa il 20% della capacità mondiale in tonnellate di portata lorda, la più grande di qualsiasi paese.',
  'Eurostat counts 489,300 people in work in the Thessaloniki metropolitan region in 2021: 10,160 in information and communication (second in Greece, after Athens) and 7,400 in finance and insurance (second in Greece, after Athens). The region’s GDP was €16.0 billion in 2021.':
    'Eurostat conta 489.300 occupati nella regione metropolitana di Salonicco nel 2021: 10.160 nell’informazione e comunicazione (seconda in Grecia, dopo Atene) e 7.400 in finanza e assicurazioni (seconda in Grecia, dopo Atene). Il PIL della regione era di 16,0 miliardi di € nel 2021.',
  'Eurostat counts 1,733,940 people in work in the Athens metropolitan region in 2021: 76,220 in information and communication (70% of Greece’s 108,580 and 13th of 152 European metropolitan regions) and 46,230 in finance and insurance (59% of 78,460 and 16th). The region’s GDP was €82.6 billion in 2021, 46% of Greece’s €181.5 billion.':
    'Eurostat conta 1.733.940 occupati nella regione metropolitana di Atene nel 2021: 76.220 nell’informazione e comunicazione (il 70% dei 108.580 della Grecia e 13ª tra 152 regioni metropolitane europee) e 46.230 in finanza e assicurazioni (il 59% dei 78.460 e 16ª). Il PIL della regione era di 82,6 miliardi di € nel 2021, il 46% dei 181,5 miliardi della Grecia.',
  'Among the 152 European metropolitan regions with 2021 figures, Thessaloniki ranks 68th for jobs in information and communication (10,160, 9% of Greece’s) and 74th for jobs in finance and insurance (7,400, 9%), about a seventh of Athens’s count in the first.':
    'Tra le 152 regioni metropolitane europee con dati 2021, Salonicco è 68ª per posti nell’informazione e comunicazione (10.160, il 9% di quelli della Grecia) e 74ª per posti in finanza e assicurazioni (7.400, il 9%), un settimo di Atene nel primo caso.',
  'Eurostat counts 3,626,216 residents in the Athens metropolitan region and 1,089,819 in Thessaloniki on 1 January 2023 (35% and 10% of Greece’s 10,413,982); the latest GDP published for them is for 2021: €82.6 billion and €16.0 billion.':
    'Eurostat conta 3.626.216 residenti nella regione metropolitana di Atene e 1.089.819 a Salonicco al 1° gennaio 2023 (il 35% e il 10% dei 10.413.982 della Grecia); l’ultimo PIL pubblicato per esse è del 2021: 82,6 e 16,0 miliardi di €.',
  'In 2025 Greece had 5,226,000 people in employment: 131,070 in information and communication (2.5%, against 3.5% in the EU) and 91,010 in finance and insurance (1.7%, against 2.3% in the EU).':
    'Nel 2025 la Grecia contava 5.226.000 occupati: 131.070 nell’informazione e comunicazione (2,5%, contro il 3,5% nell’UE) e 91.010 in finanza e assicurazioni (1,7%, contro il 2,3% nell’UE).',
  'Greece’s seasonally adjusted unemployment rate was 7.4% in August 2026, and 15.6% for under-25s, against 6.1% and 15.4% in the EU.':
    'Il tasso di disoccupazione destagionalizzato della Grecia era del 7,4% nell’agosto 2026, e del 15,6% per gli under 25, contro il 6,1% e il 15,4% nell’UE.',
  'In 2025, 64.0% of Greek tertiary graduates aged 20 to 34 who left education up to three years earlier were in work, the lowest of the 36 countries Eurostat lists and against 85.3% in the EU; among all graduates aged 20 to 34 the rate was 80.3% (EU 88.4%).':
    'Nel 2025 il 64,0% dei laureati greci di 20-34 anni usciti dal sistema educativo da non più di tre anni era occupato, il valore più basso dei 36 paesi elencati da Eurostat e contro l’85,3% nell’UE; tra tutti i laureati di 20-34 anni il tasso era dell’80,3% (UE 88,4%).',
  'In the 2022 structure of earnings survey, mean monthly gross earnings of Greek employees in firms with ten or more staff were €2,011 in information and communication and €2,719 in finance and insurance, against €4,026 and €4,234 in the EU; annual means were €27,043 and €37,468.':
    'Nell’indagine sulla struttura delle retribuzioni 2022 la retribuzione lorda mensile media dei dipendenti greci nelle imprese con almeno dieci addetti era di 2.011 € nell’informazione e comunicazione e di 2.719 € in finanza e assicurazioni, contro 4.026 € e 4.234 € nell’UE; le medie annue erano 27.043 € e 37.468 €.',
  'In the Global Financial Centres Index 40 (September 2026) Athens ranks 114th of 117 centres in the world, down five places, and 113th for fintech; it is listed among the Eastern European and Central Asian centres.':
    'Nel Global Financial Centres Index 40 (settembre 2026) Atene è 114ª su 117 centri al mondo, in calo di cinque posizioni, e 113ª per il fintech; è elencata tra i centri dell’Europa orientale e dell’Asia centrale.',
  'Startup Genome’s GSER 2026 puts Athens’s Ecosystem Value at $4 billion, against a global average of $25 billion and a European average of $14.3 billion, with $124 million of early-stage funding between the second half of 2023 and 2025 against a global average of $554 million.':
    'Il GSER 2026 di Startup Genome stima l’Ecosystem Value di Atene in 4 miliardi di dollari, contro una media mondiale di 25 miliardi e una media europea di 14,3 miliardi, con 124 milioni di dollari di finanziamenti early stage tra il secondo semestre del 2023 e il 2025 contro una media mondiale di 554 milioni.',
  'The Union of Greek Shipowners says shipping’s total economic impact is 7% to 8% of Greece’s GDP, that around 10% of the total private payroll relates to shipping with about 160,000 jobs directly and indirectly, and that the average wage in shipping companies is about three times the private-sector average.':
    'L’Unione degli armatori greci afferma che l’impatto economico complessivo del trasporto marittimo è il 7-8% del PIL della Grecia, che circa il 10% del monte salari privato è legato al settore con circa 160.000 posti diretti e indiretti, e che la retribuzione media nelle compagnie di navigazione è circa tre volte la media del settore privato.',
  'HELLENiQ ENERGY’s Empowering Future Leaders is a two-year employment programme with technical, commercial, digital and corporate (human resources, finance, procurement) routes, open to graduates in engineering or economic sciences with up to two years’ experience, who need Greek and English at C2 level and flexibility to relocate; applications go through a Greek-language platform.':
    'L’Empowering Future Leaders di HELLENiQ ENERGY è un programma di assunzione biennale con percorsi tecnico, commerciale, digitale e corporate (risorse umane, finanza, acquisti), aperto a laureati in ingegneria o scienze economiche con al massimo due anni di esperienza, che devono conoscere greco e inglese a livello C2 ed essere disposti a trasferirsi; le candidature passano da una piattaforma in greco.',
  'METLEN’s Engineers in Action is a one-year paid internship for recent engineering graduates with up to two years’ experience; in Greece it asks for excellent Greek and English and willingness to relocate to Athens, Thessaloniki, Viotia, Corinth or Volos; applications ran from 15 September to 20 October 2025, and more than 260 young engineers have taken part in Greece, 125 of them still with the company.':
    'Engineers in Action di METLEN è un tirocinio retribuito di un anno per neolaureati in ingegneria con al massimo due anni di esperienza; in Grecia richiede ottimo greco e inglese e disponibilità a trasferirsi ad Atene, Salonicco, in Beozia, a Corinto o a Volos; le candidature erano aperte dal 15 settembre al 20 ottobre 2025, e più di 260 giovani ingegneri vi hanno partecipato in Grecia, 125 dei quali sono ancora in azienda.',
  'Pfizer’s Center for Digital Innovation in Thessaloniki says it has about 500 employees, more than 200 global digital projects and more than 500 positions filled since 2020, and in 2023 it hired 15 young professionals, mainly software engineers, from its software and cloud engineering bootcamp.':
    'Il Center for Digital Innovation di Pfizer a Salonicco dichiara circa 500 dipendenti, più di 200 progetti digitali globali e più di 500 posizioni coperte dal 2020, e nel 2023 ha assunto 15 giovani professionisti, per lo più ingegneri del software, dal suo bootcamp di software e cloud engineering.',
  'Deloitte’s Greek companies are registered at Marousi, Attica (Deloitte Business Solutions and Deloitte Certified Public Accountants) and, for the Deloitte Alexander Competence Center, in the port zone of Thessaloniki.':
    'Le società greche di Deloitte hanno sede legale a Marousi, in Attica (Deloitte Business Solutions e Deloitte Certified Public Accountants) e, per il Deloitte Alexander Competence Center, nella zona portuale di Salonicco.',
  'Greek youth unemployment under 25 (15.6%) is now close to the EU’s (15.4%) although graduate employment is the EU’s lowest.':
    'La disoccupazione giovanile under 25 in Grecia (15,6%) è ora vicina a quella UE (15,4%) anche se l’occupazione dei laureati è la più bassa dell’UE.',
  'National Bank of Greece has its headquarters at 86 Eolou Street, Athens.':
    'La National Bank of Greece ha la sede centrale in 86 Eolou Street, ad Atene.',
  'Piraeus Bank has its headquarters at Amerikis 4, Athens.':
    'Piraeus Bank ha la sede centrale in Amerikis 4, ad Atene.',
  'Alpha Bank has its headquarters at 40 Stadiou Street, Athens.':
    'Alpha Bank ha la sede centrale in 40 Stadiou Street, ad Atene.',
  'OTE, the Hellenic Telecommunications Organisation, has its headquarters at 99 Kifissias Avenue, Marousi.':
    'OTE, l’Organismo ellenico delle telecomunicazioni, ha la sede centrale in 99 Kifissias Avenue, a Marousi.',
  'HELLENiQ ENERGY Holdings has its headquarters at Cheimarras 8A, Marousi.':
    'HELLENiQ ENERGY Holdings ha la sede centrale in Cheimarras 8A, a Marousi.',
  'Motor Oil (Hellas) Corinth Refineries has its headquarters at 12A Irodou Attikou Street, Marousi.':
    'Motor Oil (Hellas) Corinth Refineries ha la sede centrale in 12A Irodou Attikou Street, a Marousi.',
  'METLEN Energy & Metals S.A. has its headquarters at 8 Artemidos, Marousi.':
    'METLEN Energy & Metals S.A. ha la sede centrale in 8 Artemidos, a Marousi.',
  'Titan Cement Company has its headquarters at Chalkidos 22A, Athens.':
    'La Titan Cement Company ha la sede centrale in Chalkidos 22A, ad Atene.',
  'The Piraeus Port Authority has its headquarters at 10 Akti Miaouli, Piraeus.':
    'L’Autorità portuale del Pireo ha la sede centrale in 10 Akti Miaouli, al Pireo.',
  'Aegean Airlines has its headquarters in Building 57 at Athens International Airport, Spata.':
    'Aegean Airlines ha la sede centrale nell’edificio 57 dell’aeroporto internazionale di Atene, a Spata.',
  'The Thessaloniki Port Authority has its headquarters at Pier A, inside the port of Thessaloniki.':
    'L’Autorità portuale di Salonicco ha la sede centrale al Molo A, all’interno del porto di Salonicco.'
});
