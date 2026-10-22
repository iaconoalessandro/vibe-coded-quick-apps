/* Atlas record: Bulgaria. Read 2 October 2026; log P55
 * (research/verification/round-4e.md). First hub, Sofia, with thin evidence. The
 * EU-citizens act is read in its English translation on GLOBALCIT; the Point
 * of Single Contact site failed its certificate check.
 * Hubs for further cities were added on 3 October 2026 from city-level statistics
 * (log: research/verification/round-4k.md). Deepened on 3 October 2026 (log:
 * research/verification/round-5c.md; brief: research/countries/bg-bulgaria.md): Sofia's IT, software and
 * finance are "dominant" on Eurostat's metropolitan employment (84% of Bulgarian ICT jobs and 77% of
 * finance jobs, 2021); pay is the National Statistical Institute's, by district. */

ATLAS.add({
  id: 'BG',
  checked: '2026-10-03',
  log: 'P55',
  summary: 'A smaller outsourcing and IT-services market of about 105,000 employees whose growth stalled in 2024 while revenue kept rising, and one city: Sofia holds more than four-fifths of Bulgaria’s information-and-communication jobs and three-quarters of its finance jobs. Service-centre pay is the lowest in the region compared. Non-EU students may work 20 hours a week and have nine months after graduating to find a job.',
  sectors: ['IT outsourcing and software', 'Business-process outsourcing', 'Research and development', 'Tourism', 'Energy'],
  roles: ['it', 'finance', 'software'],
  hubs: [
    {
      id: 'sofia', name: 'Sofia', lat: 42.7, lon: 23.32,
      knownFor: 'IT outsourcing and business-process centres',
      why: ['bg-aibest', 'bg-emp-sof', 'bg-ict', 'bg-genome', 'bg-gfci', 'bg-wage', 'bg-sap'],
      sectors: ['IT outsourcing', 'Business-process outsourcing', 'Software', 'Banking'],
      employers: [
        { t: 'Outsourcing and IT-services companies', note: '833 companies, 105,436 employees nationally', c: 'bg-aibest' },
        { name: 'UniCredit Bulbank', note: 'registered address in Sofia; 3,038 employees (2025)', c: 'bg-ubb' },
        { name: 'First Investment Bank', note: 'head office in Sofia', c: 'bg-fibank' },
        { name: 'SAP Labs Bulgaria', note: 'development centre in Sofia; over 1,000 staff in 2020', c: 'bg-sap' }
      ],
      demand: {
        finance: ['dominant', 'bg-emp-sof', 'bg-ubb', 'bg-fibank'],
        it: ['dominant', 'bg-emp-sof', 'bg-ict', 'bg-aibest'],
        software: ['dominant', 'bg-emp-sof', 'bg-sap'],
        business: 'gap', economics: 'gap', accounting: 'gap', management: 'gap', marketing: 'gap',
        logistics: 'gap', analytics: 'gap', datasci: 'gap', ai: 'gap', cs: 'gap',
        bigdata: 'gap'
      },
      finance: { banking: ['strong', 'bg-emp-sof', 'bg-ubb', 'bg-fibank'], ib: 'gap', am: 'gap', pe: 'gap', vc: 'gap', corpfin: 'gap', risk: 'gap', finconsult: 'gap' },
      standing: [
        { f: 'it', s: [5, 3, 1], c: ['bg-emp-sof', 'bg-ict', 'bg-genome'] },
        { f: 'software', s: [5, 2, 1], c: ['bg-emp-sof', 'bg-genome', 'bg-sap'] },
        { f: 'finance', s: [5, 2, 1], c: ['bg-emp-sof', 'bg-gfci'] }
      ],
      metrics: {
        pop:  { v: 1619690, year: 2023, area: 'metro', tag: 'data', src: 'https://ec.europa.eu/eurostat/api/dissemination/statistics/1.0/data/met_pjanaggr3?format=JSON&lang=EN&metroreg=BG001MC&sex=T&age=TOTAL&time=2023', by: 'Eurostat, met_pjanaggr3 population on 1 January by metropolitan region, Sofia (BG001MC)', seen: '2026-10-03' },
        gdp:  { v: 33.26, cur: 'EUR', year: 2021, area: 'metro', tag: 'data', src: 'https://ec.europa.eu/eurostat/api/dissemination/statistics/1.0/data/met_10r_3gdp?format=JSON&lang=EN&metroreg=BG001MC&unit=MIO_EUR&time=2021', by: 'Eurostat, met_10r_3gdp GDP at current market prices by metropolitan region, Sofia (EUR 33,259 million)', seen: '2026-10-03' },
        wage: { v: 3227.33, cur: 'BGN', basis: 'mean', year: 2024, area: 'region', tag: 'data', src: 'https://www.nsi.bg/en/file/35971/God2025.pdf', by: 'National Statistical Institute, Statistical Yearbook 2025, labour market table 2: average annual wages and salaries of employees under labour contract by district, 2024, Sofia (stolitsa) (annual ÷ 12)', seen: '2026-10-03' }
      },
      programmes: []
    },
    {
      id: 'plovdiv', name: 'Plovdiv', lat: 42.14, lon: 24.75,
      knownFor: 'Bulgaria’s second city for information-and-communication jobs',
      why: ['bg-plovdiv', 'bg-wage'],
      sectors: ['Manufacturing', 'Technology', 'Agriculture and food'],
      employers: [
        { t: 'Information and communication employers', note: '5,350 jobs (2021)', c: 'bg-plovdiv' },
        { t: 'Finance and insurance employers', note: '2,320 jobs (2021)', c: 'bg-plovdiv' }
      ],
      demand: {
        it: ['strong', 'bg-plovdiv'],
        business: 'gap', finance: 'gap', economics: 'gap', accounting: 'gap', management: 'gap',
        marketing: 'gap', logistics: 'gap', analytics: 'gap', software: 'gap', datasci: 'gap',
        ai: 'gap', cs: 'gap', bigdata: 'gap'
      },
      finance: { ib: 'gap', banking: 'gap', am: 'gap', pe: 'gap', vc: 'gap', corpfin: 'gap', risk: 'gap', finconsult: 'gap' },
      standing: [
        { f: 'it', s: [4, 1, 1], c: ['bg-plovdiv'] },
        { f: 'finance', s: [3, 1, 1], c: ['bg-plovdiv'] }
      ],
      metrics: {
        pop:  { v: 631516, year: 2023, area: 'metro', tag: 'data', src: 'https://ec.europa.eu/eurostat/api/dissemination/statistics/1.0/data/met_pjanaggr3?format=JSON&lang=EN&metroreg=BG002M&sex=T&age=TOTAL&time=2023', by: 'Eurostat, met_pjanaggr3 population on 1 January by metropolitan region, Plovdiv (BG002M)', seen: '2026-10-03' },
        gdp:  { v: 5.3, cur: 'EUR', year: 2021, area: 'metro', tag: 'data', src: 'https://ec.europa.eu/eurostat/api/dissemination/statistics/1.0/data/met_10r_3gdp?format=JSON&lang=EN&metroreg=BG002M&unit=MIO_EUR&time=2021', by: 'Eurostat, met_10r_3gdp GDP at current market prices by metropolitan region, Plovdiv (EUR 5,298 million)', seen: '2026-10-03' },
        wage: { v: 1956.08, cur: 'BGN', basis: 'mean', year: 2024, area: 'region', tag: 'data', src: 'https://www.nsi.bg/en/file/35971/God2025.pdf', by: 'National Statistical Institute, Statistical Yearbook 2025, labour market table 2: average annual wages and salaries of employees under labour contract by district, 2024, Plovdiv (annual ÷ 12)', seen: '2026-10-03' }
      },
      programmes: []
    },
    {
      id: 'varna', name: 'Varna', lat: 43.21, lon: 27.91,
      knownFor: 'The Black Sea port city',
      why: ['bg-varna', 'bg-wage'],
      sectors: ['Ports and logistics', 'Tourism', 'Shipping'],
      employers: [
        { t: 'Information and communication employers', note: '4,840 jobs (2021)', c: 'bg-varna' },
        { t: 'Finance and insurance employers', note: '2,830 jobs (2021)', c: 'bg-varna' }
      ],
      demand: {
        business: 'gap', finance: 'gap', economics: 'gap', accounting: 'gap', management: 'gap',
        marketing: 'gap', logistics: 'gap', analytics: 'gap', it: 'gap', software: 'gap',
        datasci: 'gap', ai: 'gap', cs: 'gap', bigdata: 'gap'
      },
      finance: { ib: 'gap', banking: 'gap', am: 'gap', pe: 'gap', vc: 'gap', corpfin: 'gap', risk: 'gap', finconsult: 'gap' },
      standing: [
        { f: 'it', s: [3, 1, 1], c: ['bg-varna'] },
        { f: 'finance', s: [4, 1, 1], c: ['bg-varna'] }
      ],
      metrics: {
        pop:  { v: 430847, year: 2023, area: 'metro', tag: 'data', src: 'https://ec.europa.eu/eurostat/api/dissemination/statistics/1.0/data/met_pjanaggr3?format=JSON&lang=EN&metroreg=BG003M&sex=T&age=TOTAL&time=2023', by: 'Eurostat, met_pjanaggr3 population on 1 January by metropolitan region, Varna (BG003M)', seen: '2026-10-03' },
        gdp:  { v: 4.31, cur: 'EUR', year: 2021, area: 'metro', tag: 'data', src: 'https://ec.europa.eu/eurostat/api/dissemination/statistics/1.0/data/met_10r_3gdp?format=JSON&lang=EN&metroreg=BG003M&unit=MIO_EUR&time=2021', by: 'Eurostat, met_10r_3gdp GDP at current market prices by metropolitan region, Varna (EUR 4,309 million)', seen: '2026-10-03' },
        wage: { v: 2167.25, cur: 'BGN', basis: 'mean', year: 2024, area: 'region', tag: 'data', src: 'https://www.nsi.bg/en/file/35971/God2025.pdf', by: 'National Statistical Institute, Statistical Yearbook 2025, labour market table 2: average annual wages and salaries of employees under labour contract by district, 2024, Varna (annual ÷ 12)', seen: '2026-10-03' }
      },
      programmes: []
    }
  ],

  work: [
    { k: 'Language', c: ['bg-lang'] },
    { k: 'Recruiting calendar', c: ['bg-cal'] },
    { k: 'Where demand is now', c: ['bg-aibest', 'bg-emp-sof', 'bg-ict'] },
    { k: 'Pay by district', c: ['bg-wage'] },
    { k: 'Graduate labour market', c: ['bg-grad-lab'] },
    { k: 'Tax and net pay', c: ['bg-pay'] }
  ],

  briefs: [
    ['places/gulf-and-central-eastern-europe.md', '§4 Bulgarian junior service-centre pay in the Mercer comparison'],
    ['countries/bg-bulgaria.md', 'Country brief: hubs, employers, pay and standing']
  ],
  gaps: [
    'Bulgaria is thinly researched: only Sofia has named employers, and no source read names graduate programmes or splits service-centre jobs by city.',
    'Tax, net pay and rents were not researched.',
    'No family is rated in Varna: the Eurostat figures read do not put them second or third in the country for finance or information-and-communication jobs.',
    'All Bulgarian immigration, visa, residence permit and salary rules are consolidated from primary sources in visas_immigration/bulgaria/bulgaria_visas_immigration_guide.md.',
    'Hubs added on 3 October 2026 are rated only from Eurostat’s 2021–22 metropolitan employment counts: strong means second or third in the country for jobs in finance and insurance, or in information and communication, with at least 5,000 such jobs.'
  ],

  claims: {
    'bg-aibest': { t: 'Bulgaria’s outsourcing and technology-services sector had 833 companies (412 in IT, 388 in business processes, 33 in R&D) and 105,436 full-time employees in 2024; employment grew 0.2% while revenue grew 7.6%.', tag: 'data', src: 'https://aibest.org/annualreport2025', by: 'AIBEST (industry association), Annual Industry Report 2025', seen: '2026-10-02' },
    'bg-pay': { t: 'A junior specialist in a Bulgarian service centre earned a mean base of €1,517 a month in 2024, the lowest of the five countries in the comparison.', tag: 'data', src: 'research/places/gulf-and-central-eastern-europe.md', by: 'ABSL 2025 citing Mercer 2024, via places/gulf-and-central-eastern-europe.md §4', seen: '2026-10-02' },
    'bg-plovdiv': { t: 'Eurostat counts 326,910 people in work in the Plovdiv metropolitan region in 2021: 5,350 in information and communication (second in Bulgaria, after Sofia) and 2,320 in finance and insurance. The region’s GDP was €5.3 billion in 2021.', tag: 'data', src: 'https://ec.europa.eu/eurostat/databrowser/view/met_10r_3emp/default/table?lang=en', by: 'Eurostat, metropolitan regions: employment by activity (met_10r_3emp) and GDP (met_10r_3gdp)', seen: '2026-10-03' },
    'bg-varna': { t: 'Eurostat counts 211,170 people in work in the Varna metropolitan region in 2021: 4,840 in information and communication and 2,830 in finance and insurance. The region’s GDP was €4.3 billion in 2021.', tag: 'data', src: 'https://ec.europa.eu/eurostat/databrowser/view/met_10r_3emp/default/table?lang=en', by: 'Eurostat, metropolitan regions: employment by activity (met_10r_3emp) and GDP (met_10r_3gdp)', seen: '2026-10-03' },
    'bg-emp-sof': { t: 'Eurostat counts 104,550 people employed in information and communication in the Sofia metropolitan region in 2021, 84% of Bulgaria’s 123,930 and eighth among the 25 European capital regions reported, and 52,080 in finance and insurance, 77% of 67,550 and tenth among them, out of 1,148,510 in work.', tag: 'data', src: 'https://ec.europa.eu/eurostat/api/dissemination/statistics/1.0/data/met_10r_3emp?format=JSON&lang=EN&metroreg=BG001MC&wstatus=EMP&nace_r2=J&nace_r2=K&time=2021', by: 'Eurostat, met_10r_3emp metropolitan regions: employment by activity, 2021 (ranking among capital metropolitan regions computed from the same table)', seen: '2026-10-03' },
    'bg-ict': { t: 'In 2025 ICT specialists were 4.8% of employment in Bulgaria (141,500 people), against 5.0% in the EU.', tag: 'data', src: 'https://ec.europa.eu/eurostat/api/dissemination/statistics/1.0/data/isoc_sks_itspt?format=JSON&lang=EN&geo=BG&time=2025', by: 'Eurostat, isoc_sks_itspt ICT specialists in employment, 2025 (updated 17 Apr 2026)', seen: '2026-10-03' },
    'bg-wage': { t: 'In 2024 the average annual wage of employees under labour contract was BGN 38,728 in Sofia (the capital district), BGN 26,007 in Varna and BGN 23,473 in Plovdiv, against BGN 27,898 for the country; in information and communication it was BGN 68,972 in Sofia against BGN 64,537 nationally, and in finance and insurance BGN 46,423 against BGN 41,620.', tag: 'data', src: 'https://www.nsi.bg/en/file/35971/God2025.pdf', by: 'National Statistical Institute, Statistical Yearbook 2025, labour market table 2 (average annual wages and salaries by district, 2024)', seen: '2026-10-03' },
    'bg-ubb': { t: 'UniCredit Bulbank gives its registered address as 7 Sveta Nedelya Square, Sofia, and reports 3,038 employees at the end of 2025 (3,134 a year earlier).', tag: 'employer-stated', src: 'https://www.unicreditbulbank.bg/media/filer_public/88/e8/88e8f968-1ff8-4475-ba80-de21d89d453e/ucb-annual-report-2025-en.pdf', by: 'UniCredit Bulbank, annual report 2025 (English)', seen: '2026-10-03' },
    'bg-fibank': { t: 'First Investment Bank gives its head office as 111 P Tsarigradsko shose Blvd, 1784 Sofia.', tag: 'employer-stated', src: 'https://www.fibank.bg/en/contacts', by: 'First Investment Bank (Fibank), contacts page', seen: '2026-10-03' },
    'bg-sap': { t: 'A trade article of 19 October 2020 says SAP Labs Bulgaria, in Sofia, started in 2000, “today employs over 1000 people” and has grown almost twentyfold since.', tag: 'practitioner consensus', src: 'https://www.trendingtopics.eu/sap-labs-bulgaria-turns-20-whats-behind-the-growth-of-the-rd-location-in-sofia/', by: 'Trending Topics, “SAP Labs Bulgaria turns 20”, 19 Oct 2020', seen: '2026-10-03' },
    'bg-genome': { t: 'Startup Genome’s 2026 report puts the Sofia ecosystem’s value at $3 billion, against a European average of $14.3 billion; early-stage funding in H2 2023–2025 was $63 million.', tag: 'practitioner consensus', src: 'https://startupgenome.com/ecosystems/sofia', by: 'Startup Genome, Global Startup Ecosystem Report 2026, Sofia page', seen: '2026-10-03' },
    'bg-gfci': { t: 'The Global Financial Centres Index 40 (September 2026) ranks Sofia 115th of 117 centres and last of the 14 in Eastern Europe and Central Asia; for fintech it is 93rd. Plovdiv and Varna are not listed.', tag: 'practitioner consensus', src: 'https://www.longfinance.net/media/documents/GFCI_40_Report_2026.09.16_v1.2.pdf', by: 'Z/Yen and Long Finance, Global Financial Centres Index 40 (September 2026), tables 1, 11 and 16', seen: '2026-10-03' },
    'bg-lang': { t: 'Employment contracts in Bulgaria must be written in Bulgarian, while Progress’s Sofia internship asks for very good written and spoken English; the outsourcing sector recruits in English, and Rivermate notes that Bulgarian workers often add German, French or Nordic languages.', tag: 'employer-stated', src: 'https://www.progress.com/company/careers/internship', by: 'Progress, internship programme page; Rivermate, recruitment in Bulgaria; EURES, Bulgaria living and working conditions', seen: '2026-10-08' },
    'bg-cal': { t: 'Summer internships have a spring window: Progress’s event page says applications open on 20 April for an internship running July to September, and TechnoLogica’s 2026 internship (20 July to 30 September) closed applications on 22 June. Career fairs fall in October: Career Show Bulgaria in Sofia, Plovdiv and Varna on 5, 8 and 15 October 2026, and the Technical University of Sofia’s Career Days in the same week. Other hiring runs all year.', tag: 'employer-stated', src: 'https://technologica.com/en/technologica-internship-program-2026-is-open/', by: 'TechnoLogica, Internship Program 2026; Luma, Progress internship event page; Progress, internship page; Career Show Bulgaria; Technical University of Sofia', seen: '2026-10-08' },
    'bg-grad-lab': { t: 'In 2025, 90.0% of Bulgarian tertiary graduates aged 20–34 who finished within the last three years were in work (EU 85.3%), unemployment among 15-to-24-year-olds was 13.1% (EU 15.2%, Bulgaria 12.1% in 2023) and 41.2% of 25-to-34-year-olds had a tertiary degree (EU 44.8%).', tag: 'data', src: 'https://ec.europa.eu/eurostat/api/dissemination/statistics/1.0/data/edat_lfse_24?format=JSON&lang=EN&duration=Y_LE3&isced11=ED5-8&age=Y20-34&sex=T&geo=BG&geo=EU27_2020', by: 'Eurostat, edat_lfse_24, une_rt_a and edat_lfse_03, 2025 (updated 10 Sep 2026)', seen: '2026-10-03' }
  }
});

if (window.I18N) I18N.add('it', {
  'IT outsourcing and software': 'Outsourcing IT e software', 'Business-process outsourcing': 'Outsourcing dei processi aziendali',
  'Research and development': 'Ricerca e sviluppo', 'Tourism': 'Turismo', 'Energy': 'Energia',
  'IT outsourcing and business-process centres': 'Outsourcing IT e centri per i processi aziendali', 'IT outsourcing': 'Outsourcing IT', 'Software': 'Software',
  'Outsourcing and IT-services companies': 'Le aziende di outsourcing e servizi IT', '833 companies, 105,436 employees nationally': '833 aziende, 105.436 dipendenti a livello nazionale',
  '§4 Bulgarian junior service-centre pay in the Mercer comparison': '§4 Gli stipendi junior dei centri servizi bulgari nel confronto Mercer',
  'Tax, net pay and rents were not researched.': 'Tasse, stipendio netto e affitti non sono stati ricercati.',
  'Bulgaria’s outsourcing and technology-services sector had 833 companies (412 in IT, 388 in business processes, 33 in R&D) and 105,436 full-time employees in 2024; employment grew 0.2% while revenue grew 7.6%.':
    'Nel 2024 il settore bulgaro dell’outsourcing e dei servizi tecnologici contava 833 aziende (412 nell’IT, 388 nei processi aziendali, 33 in R&S) e 105.436 dipendenti a tempo pieno; l’occupazione è cresciuta dello 0,2% e i ricavi del 7,6%.',
  'A junior specialist in a Bulgarian service centre earned a mean base of €1,517 a month in 2024, the lowest of the five countries in the comparison.':
    'Nel 2024 uno specialista junior in un centro servizi bulgaro guadagnava una base media di 1.517 € al mese, la più bassa dei cinque paesi del confronto.',
  'Bulgaria’s second city for information-and-communication jobs':
    'La seconda città bulgara per posti in informazione e comunicazione',
  'Information and communication employers':
    'I datori di lavoro dell’informazione e comunicazione',
  '5,350 jobs (2021)':
    '5.350 posti (2021)',
  'Finance and insurance employers':
    'I datori di lavoro di finanza e assicurazioni',
  '2,320 jobs (2021)':
    '2.320 posti (2021)',
  'The Black Sea port city':
    'La città portuale sul Mar Nero',
  'Ports and logistics':
    'Porti e logistica',
  '4,840 jobs (2021)':
    '4.840 posti (2021)',
  '2,830 jobs (2021)':
    '2.830 posti (2021)',
  'Eurostat counts 326,910 people in work in the Plovdiv metropolitan region in 2021: 5,350 in information and communication (second in Bulgaria, after Sofia) and 2,320 in finance and insurance. The region’s GDP was €5.3 billion in 2021.':
    'Eurostat conta 326.910 occupati nella regione metropolitana di Plovdiv nel 2021: 5.350 nell’informazione e comunicazione (seconda in Bulgaria, dopo Sofia) e 2.320 in finanza e assicurazioni. Il PIL della regione era di 5,3 miliardi di € nel 2021.',
  'Eurostat counts 211,170 people in work in the Varna metropolitan region in 2021: 4,840 in information and communication and 2,830 in finance and insurance. The region’s GDP was €4.3 billion in 2021.':
    'Eurostat conta 211.170 occupati nella regione metropolitana di Varna nel 2021: 4.840 nell’informazione e comunicazione e 2.830 in finanza e assicurazioni. Il PIL della regione era di 4,3 miliardi di € nel 2021.',
  'No family is rated in Varna: the Eurostat figures read do not put them second or third in the country for finance or information-and-communication jobs.':
    'Nessuna famiglia è valutata a Varna: i dati Eurostat letti non le collocano al secondo o terzo posto nel paese per posti in finanza o in informazione e comunicazione.',
  'Hubs added on 3 October 2026 are rated only from Eurostat’s 2021–22 metropolitan employment counts: strong means second or third in the country for jobs in finance and insurance, or in information and communication, with at least 5,000 such jobs.':
    'I poli aggiunti il 3 ottobre 2026 sono valutati solo dai conteggi Eurostat 2021–22 sull’occupazione metropolitana: forte significa seconda o terza regione del paese per posti in finanza e assicurazioni, o in informazione e comunicazione, con almeno 5.000 posti di quel tipo.',
  'A smaller outsourcing and IT-services market of about 105,000 employees whose growth stalled in 2024 while revenue kept rising, and one city: Sofia holds more than four-fifths of Bulgaria’s information-and-communication jobs and three-quarters of its finance jobs. Service-centre pay is the lowest in the region compared. Non-EU students may work 20 hours a week and have nine months after graduating to find a job.':
    'Un mercato più piccolo dell’outsourcing e dei servizi IT, con circa 105.000 dipendenti, la cui crescita si è fermata nel 2024 mentre i ricavi continuavano a salire, e una sola città: Sofia concentra più dei quattro quinti dei posti bulgari nell’informazione e comunicazione e tre quarti di quelli nella finanza. Gli stipendi dei centri servizi sono i più bassi della regione confrontata. Gli studenti extra-UE possono lavorare 20 ore settimanali e hanno nove mesi dopo la laurea per trovare lavoro.',
  'Eurostat counts 104,550 people employed in information and communication in the Sofia metropolitan region in 2021, 84% of Bulgaria’s 123,930 and eighth among the 25 European capital regions reported, and 52,080 in finance and insurance, 77% of 67,550 and tenth among them, out of 1,148,510 in work.':
    'Eurostat conta 104.550 occupati nell’informazione e comunicazione nella regione metropolitana di Sofia nel 2021, l’84% dei 123.930 della Bulgaria e l’ottava tra le 25 regioni delle capitali europee rilevate, e 52.080 in finanza e assicurazioni, il 77% di 67.550 e la decima tra queste, su 1.148.510 occupati.',
  'In 2025 ICT specialists were 4.8% of employment in Bulgaria (141,500 people), against 5.0% in the EU.':
    'Nel 2025 gli specialisti ICT erano il 4,8% dell’occupazione in Bulgaria (141.500 persone), contro il 5,0% nell’UE.',
  'In 2024 the average annual wage of employees under labour contract was BGN 38,728 in Sofia (the capital district), BGN 26,007 in Varna and BGN 23,473 in Plovdiv, against BGN 27,898 for the country; in information and communication it was BGN 68,972 in Sofia against BGN 64,537 nationally, and in finance and insurance BGN 46,423 against BGN 41,620.':
    'Nel 2024 la retribuzione annua media dei lavoratori dipendenti era di 38.728 BGN a Sofia (la provincia della capitale), 26.007 BGN a Varna e 23.473 BGN a Plovdiv, contro 27.898 BGN per il paese; nell’informazione e comunicazione era di 68.972 BGN a Sofia contro 64.537 BGN a livello nazionale, e in finanza e assicurazioni di 46.423 BGN contro 41.620 BGN.',
  'UniCredit Bulbank gives its registered address as 7 Sveta Nedelya Square, Sofia, and reports 3,038 employees at the end of 2025 (3,134 a year earlier).':
    'UniCredit Bulbank indica come indirizzo legale 7 Sveta Nedelya Square, Sofia, e riporta 3.038 dipendenti alla fine del 2025 (3.134 un anno prima).',
  'First Investment Bank gives its head office as 111 P Tsarigradsko shose Blvd, 1784 Sofia.':
    'First Investment Bank indica come sede centrale 111 P Tsarigradsko shose Blvd, 1784 Sofia.',
  'A trade article of 19 October 2020 says SAP Labs Bulgaria, in Sofia, started in 2000, “today employs over 1000 people” and has grown almost twentyfold since.':
    'Un articolo di settore del 19 ottobre 2020 afferma che SAP Labs Bulgaria, a Sofia, è nata nel 2000, «today employs over 1000 people» e da allora è cresciuta quasi venti volte.',
  'Startup Genome’s 2026 report puts the Sofia ecosystem’s value at $3 billion, against a European average of $14.3 billion; early-stage funding in H2 2023–2025 was $63 million.':
    'Il rapporto 2026 di Startup Genome stima il valore dell’ecosistema di Sofia in 3 miliardi di dollari, contro una media europea di 14,3 miliardi; i finanziamenti early-stage nel periodo H2 2023–2025 sono stati di 63 milioni.',
  'The Global Financial Centres Index 40 (September 2026) ranks Sofia 115th of 117 centres and last of the 14 in Eastern Europe and Central Asia; for fintech it is 93rd. Plovdiv and Varna are not listed.':
    'Il Global Financial Centres Index 40 (settembre 2026) colloca Sofia al 115º posto su 117 centri e all’ultimo dei 14 dell’Europa orientale e dell’Asia centrale; per il fintech è al 93º posto. Plovdiv e Varna non sono elencate.',
  'In 2025, 90.0% of Bulgarian tertiary graduates aged 20–34 who finished within the last three years were in work (EU 85.3%), unemployment among 15-to-24-year-olds was 13.1% (EU 15.2%, Bulgaria 12.1% in 2023) and 41.2% of 25-to-34-year-olds had a tertiary degree (EU 44.8%).':
    'Nel 2025 il 90,0% dei laureati bulgari di 20–34 anni che avevano finito gli studi da meno di tre anni lavorava (UE 85,3%), la disoccupazione tra i 15-24enni era del 13,1% (UE 15,2%, Bulgaria 12,1% nel 2023) e il 41,2% dei 25-34enni aveva una laurea (UE 44,8%).',
  'Bulgaria is thinly researched: only Sofia has named employers, and no source read names graduate programmes or splits service-centre jobs by city.':
    'La Bulgaria è poco ricercata: solo Sofia ha datori di lavoro citati e nessuna fonte letta indica programmi per neolaureati o ripartisce per città i posti nei centri di servizi.',
  'registered address in Sofia; 3,038 employees (2025)':
    'indirizzo legale a Sofia; 3.038 dipendenti (2025)',
  'head office in Sofia':
    'sede centrale a Sofia',
  'development centre in Sofia; over 1,000 staff in 2020':
    'centro di sviluppo a Sofia; oltre 1.000 addetti nel 2020',
  'Banking':
    'Banca',
  'Pay by district':
    'Stipendi per provincia',
  'Graduate labour market':
    'Mercato del lavoro per i laureati',
  'Language': 'Lingua',
  'Recruiting calendar': 'Calendario delle selezioni',
  'Employment contracts in Bulgaria must be written in Bulgarian, while Progress’s Sofia internship asks for very good written and spoken English; the outsourcing sector recruits in English, and Rivermate notes that Bulgarian workers often add German, French or Nordic languages.':
    'In Bulgaria i contratti di lavoro devono essere scritti in bulgaro, mentre il tirocinio di Progress a Sofia chiede un ottimo inglese scritto e parlato; il settore dell’outsourcing recluta in inglese, e Rivermate osserva che i lavoratori bulgari spesso aggiungono tedesco, francese o lingue nordiche.',
  'Summer internships have a spring window: Progress’s event page says applications open on 20 April for an internship running July to September, and TechnoLogica’s 2026 internship (20 July to 30 September) closed applications on 22 June. Career fairs fall in October: Career Show Bulgaria in Sofia, Plovdiv and Varna on 5, 8 and 15 October 2026, and the Technical University of Sofia’s Career Days in the same week. Other hiring runs all year.':
    'I tirocini estivi hanno una finestra primaverile: la pagina di evento di Progress dice che le candidature si aprono il 20 aprile per un tirocinio da luglio a settembre, e il tirocinio 2026 di TechnoLogica (dal 20 luglio al 30 settembre) ha chiuso le candidature il 22 giugno. Le fiere del lavoro cadono in ottobre: Career Show Bulgaria a Sofia, Plovdiv e Varna il 5, 8 e 15 ottobre 2026, e le Giornate della Carriera dell’Università tecnica di Sofia nella stessa settimana. Le altre assunzioni si svolgono tutto l’anno.',
  'All Bulgarian immigration, visa, residence permit and salary rules are consolidated from primary sources in visas_immigration/bulgaria/bulgaria_visas_immigration_guide.md.':
    'Tutte le regole su immigrazione, visti, permessi di soggiorno e salari della Bulgaria sono consolidate da fonti primarie in visas_immigration/bulgaria/bulgaria_visas_immigration_guide.md.',
  'Country brief: hubs, employers, pay and standing':
    'Dossier paese: poli, datori di lavoro, stipendi e posizionamento'
});
