/* Atlas record: Sweden. Read 2 October 2026, deepened 3 October 2026; log P49
 * (research/verification/round-4d.md, round-4k.md, round-5c.md). Permits, tax and employer windows
 * are the library's (places/iberia-and-nordics.md, verified 2 Oct 2026); the June 2026 student
 * work limit was read on Migrationsverket. Stockholm's IT, software and
 * finance ratings are "dominant" on Eurostat's metropolitan employment (53% of Swedish ICT jobs
 * and 64% of finance jobs, 2021); its standing rests on GFCI 40, Startup Genome's 2026 Top 40
 * and Eurostat's ICT-specialist share. Pay is regional, from Statistics Sweden.
 * Brief: research/countries/se-sweden.md. */

ATLAS.add({
  id: 'SE',
  checked: '2026-10-03',
  log: 'P49',
  summary: 'Strong graduate employment and the Nordic start-up leader: Stockholm holds about half of Sweden’s information-and-communication jobs and nearly two-thirds of its finance jobs, with Spotify, Klarna, SEB and Handelsbanken; Gothenburg is Volvo’s city. Corporate graduate programmes recruit in English but many roles need Swedish, youth unemployment is high at 24.3%, and since June 2026 non-EU students may work only 15 hours a week in term.',
  sectors: [
    'Banking and finance',
    'Consulting',
    'Technology and fintech',
    'Automotive and engineering',
    'Retail'
  ],
  roles: ['it', 'software', 'finance', 'management'],
  hubs: [
    {
      id: 'stockholm',
      name: 'Stockholm',
      lat: 59.33,
      lon: 18.07,
      knownFor: 'Consulting, banking and tech headquarters',
      why: ['se-sse', 'se-emp-sto', 'se-spotify', 'se-klarna', 'se-gfci', 'se-genome', 'se-qs'],
      sectors: ['Consulting', 'Banking', 'Fintech', 'Technology', 'Retail'],
      employers: [
        { name: 'SEB, Handelsbanken, Swedbank, Klarna', note: 'among first employers of SSE graduates', c: 'se-sse' },
        { name: 'SEB International Trainee Programme', note: 'English, with Swedish for some roles', c: 'se-seb' },
        { name: 'Spotify', note: 'headquarters of the music-streaming company', c: 'se-spotify' },
        { name: 'Klarna', note: 'headquarters of the payments company, supporting 26 countries', c: 'se-klarna' },
        { name: 'Handelsbanken', note: 'head office; more than 12,000 employees', c: 'se-handels' }
      ],
      demand: { management: ['strong', 'se-sse'], finance: ['dominant', 'se-emp-sto', 'se-handels', 'se-sse'], software: ['dominant', 'se-emp-sto', 'se-spotify', 'se-klarna', 'se-genome'], business: 'gap', economics: 'gap', accounting: 'gap', marketing: 'gap', logistics: 'gap', analytics: 'gap', it: ['dominant', 'se-emp-sto', 'se-spotify', 'se-klarna'], datasci: 'gap', ai: 'gap', cs: 'gap', bigdata: 'gap' },
      finance: { banking: ['strong', 'se-emp-sto', 'se-handels', 'se-seb'], ib: 'gap', am: 'gap', pe: 'gap', vc: 'gap', corpfin: 'gap', risk: 'gap', finconsult: 'gap' },
      standing: [
        { f: 'software', s: [5, 4, 2], c: ['se-emp-sto', 'se-genome', 'se-ict'] },
        { f: 'it', s: [5, 4, 2], c: ['se-emp-sto', 'se-genome', 'se-ict'] },
        { f: 'finance', s: [5, 3, 2], c: ['se-emp-sto', 'se-gfci'] },
        { f: 'management', s: [5, 2, 1], c: ['se-sse', 'se-emp-sto'] }
      ],
      metrics: {
        pop: { v: 2440027, year: 2023, area: 'metro', tag: 'data', src: 'https://ec.europa.eu/eurostat/api/dissemination/statistics/1.0/data/met_pjanaggr3?format=JSON&lang=EN&metroreg=SE001MC&sex=T&age=TOTAL&time=2023', by: 'Eurostat, met_pjanaggr3 population on 1 January, metropolitan region', seen: '2026-10-03' },
        gdp: { v: 171.27, cur: 'EUR', year: 2021, area: 'metro', tag: 'data', src: 'https://ec.europa.eu/eurostat/api/dissemination/statistics/1.0/data/met_10r_3gdp?format=JSON&lang=EN&metroreg=SE001MC&unit=MIO_EUR&time=2021', by: 'Eurostat, met_10r_3gdp GDP at current market prices, metropolitan region', seen: '2026-10-03' },
        wage: { v: 48300, cur: 'SEK', basis: 'mean', year: 2025, area: 'region', tag: 'data', src: 'https://www.statistikdatabasen.scb.se/pxweb/en/ssd/START__AM__AM0110__AM0110A/LonYrkeRegion4AN/', by: 'Statistics Sweden, AM0110 average monthly salary, all sectors and occupations, Stockholm region (SE11)', seen: '2026-10-03' }
      },
      programmes: [
        { calc: 'masters', track: 'mif', id: 'sse-fin', name: 'Stockholm School of Economics — MSc Finance' },
        { calc: 'computing', track: 'dsai', id: 'kth-ml', name: 'KTH — MSc Machine Learning' }
      ]
    },
    {
      id: 'gothenburg',
      name: 'Gothenburg',
      lat: 57.71,
      lon: 11.97,
      knownFor: 'Volvo and automotive engineering',
      why: ['se-volvo', 'se-volvo-size', 'se-emp-got', 'se-genome-got'],
      sectors: ['Automotive', 'Trucks and buses', 'Engineering'],
      employers: [
        { name: 'AB Volvo', note: 'headquarters; 99,000 employees worldwide', c: 'se-volvo-size' },
        { name: 'Volvo Car Group', note: 'headquarters at Gunnar Engellaus väg', c: 'se-volvo-size' },
        { t: 'Information and communication employers', note: '33,000 jobs (2021), second in Sweden', c: 'se-emp-got' }
      ],
      demand: { management: ['strong', 'se-volvo', 'se-volvo-size'], business: 'gap', finance: ['strong', 'se-emp-got'], economics: 'gap', accounting: 'gap', marketing: 'gap', logistics: 'gap', analytics: 'gap', it: ['strong', 'se-emp-got'], software: 'gap', datasci: 'gap', ai: 'gap', cs: 'gap', bigdata: 'gap' },
      standing: [
        { f: 'management', s: [4, 2, 1], c: ['se-volvo', 'se-volvo-size', 'se-emp-got'] },
        { f: 'it', s: [4, 2, 1], c: ['se-emp-got', 'se-genome-got', 'se-ict'] },
        { f: 'finance', s: [4, 1, 1], c: ['se-emp-got', 'se-gfci'] }
      ],
      metrics: {
        pop: { v: 1758656, year: 2023, area: 'metro', tag: 'data', src: 'https://ec.europa.eu/eurostat/api/dissemination/statistics/1.0/data/met_pjanaggr3?format=JSON&lang=EN&metroreg=SE002M&sex=T&age=TOTAL&time=2023', by: 'Eurostat, met_pjanaggr3 population on 1 January, metropolitan region', seen: '2026-10-03' },
        gdp: { v: 88.58, cur: 'EUR', year: 2021, area: 'metro', tag: 'data', src: 'https://ec.europa.eu/eurostat/api/dissemination/statistics/1.0/data/met_10r_3gdp?format=JSON&lang=EN&metroreg=SE002M&unit=MIO_EUR&time=2021', by: 'Eurostat, met_10r_3gdp GDP at current market prices, metropolitan region', seen: '2026-10-03' },
        wage: { v: 42300, cur: 'SEK', basis: 'mean', year: 2025, area: 'region', tag: 'data', src: 'https://www.statistikdatabasen.scb.se/pxweb/en/ssd/START__AM__AM0110__AM0110A/LonYrkeRegion4AN/', by: 'Statistics Sweden, AM0110 average monthly salary, all sectors and occupations, West Sweden (SE23)', seen: '2026-10-03' }
      },
      programmes: []
    },
    {
      id: 'malmo',
      name: 'Malmö',
      lat: 55.6,
      lon: 13,
      knownFor: 'Sweden’s third metropolitan region, linked to Copenhagen by the Öresund bridge',
      why: ['se-malmo', 'se-axis', 'se-qs'],
      sectors: ['Technology', 'Life sciences', 'Logistics'],
      employers: [
        { t: 'Information and communication employers', note: '25,000 jobs (2021)', c: 'se-malmo' },
        { t: 'Finance and insurance employers', note: '8,000 jobs (2021)', c: 'se-malmo' },
        { name: 'Axis Communications', note: 'headquarters in Lund; around 5,000 employees', c: 'se-axis' },
        { name: 'Lund University', note: '71st in the QS World University Rankings 2027', c: 'se-qs' }
      ],
      demand: { it: ['strong', 'se-malmo'], finance: ['strong', 'se-malmo'], business: 'gap', economics: 'gap', accounting: 'gap', management: 'gap', marketing: 'gap', logistics: 'gap', analytics: 'gap', software: 'gap', datasci: 'gap', ai: 'gap', cs: 'gap', bigdata: 'gap' },
      standing: [
        { f: 'it', s: [3, 1, 1], c: ['se-malmo', 'se-emp-sto'] },
        { f: 'finance', s: [3, 1, 1], c: ['se-malmo', 'se-emp-sto'] }
      ],
      metrics: {
        pop: { v: 1414324, year: 2023, area: 'metro', tag: 'data', src: 'https://ec.europa.eu/eurostat/api/dissemination/statistics/1.0/data/met_pjanaggr3?format=JSON&lang=EN&metroreg=SE003M&sex=T&age=TOTAL&time=2023', by: 'Eurostat, met_pjanaggr3 population on 1 January, metropolitan region', seen: '2026-10-03' },
        gdp: { v: 62.35, cur: 'EUR', year: 2021, area: 'metro', tag: 'data', src: 'https://ec.europa.eu/eurostat/api/dissemination/statistics/1.0/data/met_10r_3gdp?format=JSON&lang=EN&metroreg=SE003M&unit=MIO_EUR&time=2021', by: 'Eurostat, met_10r_3gdp GDP at current market prices, metropolitan region', seen: '2026-10-03' },
        wage: { v: 41700, cur: 'SEK', basis: 'mean', year: 2025, area: 'region', tag: 'data', src: 'https://www.statistikdatabasen.scb.se/pxweb/en/ssd/START__AM__AM0110__AM0110A/LonYrkeRegion4AN/', by: 'Statistics Sweden, AM0110 average monthly salary, all sectors and occupations, South Sweden (SE22)', seen: '2026-10-03' }
      },
      programmes: []
    },
    {
      id: 'uppsala',
      name: 'Uppsala',
      lat: 59.86,
      lon: 17.64,
      knownFor: 'A university city north of Stockholm',
      why: ['se-uppsala', 'se-uu', 'se-qs', 'se-wage-region'],
      sectors: ['Higher education', 'Life sciences', 'Public sector'],
      employers: [
        { t: 'Information and communication employers', note: '5,000 jobs (2021)', c: 'se-uppsala' },
        { t: 'Finance and insurance employers', note: '1,000 jobs (2021)', c: 'se-uppsala' },
        { name: 'Uppsala University', note: '50,000 students, 7,539 staff; 87th in QS 2027', c: 'se-uu' }
      ],
      demand: { business: 'gap', finance: 'gap', economics: 'gap', accounting: 'gap', management: 'gap', marketing: 'gap', logistics: 'gap', analytics: 'gap', it: 'gap', software: 'gap', datasci: 'gap', ai: 'gap', cs: 'gap', bigdata: 'gap' },
      standing: [
        { f: 'it', s: [2, 1, 1], c: ['se-uppsala', 'se-emp-sto'] }
      ],
      metrics: {
        pop: { v: 400682, year: 2023, area: 'metro', tag: 'data', src: 'https://ec.europa.eu/eurostat/api/dissemination/statistics/1.0/data/met_pjanaggr3?format=JSON&lang=EN&metroreg=SE006M&sex=T&age=TOTAL&time=2023', by: 'Eurostat, met_pjanaggr3 population on 1 January, metropolitan region', seen: '2026-10-03' },
        gdp: { v: 19.08, cur: 'EUR', year: 2021, area: 'metro', tag: 'data', src: 'https://ec.europa.eu/eurostat/api/dissemination/statistics/1.0/data/met_10r_3gdp?format=JSON&lang=EN&metroreg=SE006M&unit=MIO_EUR&time=2021', by: 'Eurostat, met_10r_3gdp GDP at current market prices, metropolitan region', seen: '2026-10-03' },
        wage: { v: 40500, cur: 'SEK', basis: 'mean', year: 2025, area: 'region', tag: 'data', src: 'https://www.statistikdatabasen.scb.se/pxweb/en/ssd/START__AM__AM0110__AM0110A/LonYrkeRegion4AN/', by: 'Statistics Sweden, AM0110 average monthly salary, all sectors and occupations, East-Central Sweden (SE12)', seen: '2026-10-03' }
      },
      programmes: []
    }
  ],
  work: [
    { k: 'Where demand is now', c: ['se-emp-sto', 'se-ict', 'se-sse'] },
    { k: 'Recruiting calendar', c: ['se-seb', 'se-cal-swed', 'se-cal-fin'] },
    { k: 'Language', c: ['se-lang', 'se-seb'] },
    { k: 'Tax and net pay', c: ['se-expert'] },
    { k: 'Graduate labour market', c: ['se-grad', 'se-ict'] },
    { k: 'Entry pay', c: ['se-wage-region'] }
  ],
  briefs: [
    ['places/iberia-and-nordics.md', 'Sweden: graduate market, pay after rent, expert tax relief, permits, SEB and Nordea programmes'],
    ['places/visas-and-work-rights.md', '§6 Sweden: job search and the 90%-of-median floor'],
    ['countries/se-sweden.md', 'Country brief: hubs, employers, pay and standing']
  ],
  gaps: [
    'Eurostat’s employment counts are for metropolitan regions and for 2021; Statistics Sweden’s city-level employment by industry was not read.',
    'No source gives graduate entry pay by field or city; the pay figures are all-employee regional averages from Statistics Sweden.',
    'Swedbank, Ericsson, H&M and AstraZeneca are not listed as employers because no source we can cite was read.',
    'Graduate programme calendars were read only for SEB and Nordea; none was found for Spotify, Klarna, Handelsbanken or Volvo.',
    'AI, data science, analytics, marketing, accounting and logistics are not rated: no source read measures them by city.',
    'No family is rated in Uppsala: Eurostat does not put it second or third in the country for ICT or finance jobs, and its strength is the university, which is not a graduate-employer family.',
    'Hubs added on 3 October 2026 are rated only from Eurostat’s 2021–22 metropolitan employment counts: strong means second or third in the country for jobs in finance and insurance, or in information and communication, with at least 5,000 such jobs.'
  ],
  claims: {
    'se-expert': { t: 'Sweden’s expert tax relief (25% of pay exempt for seven years) excludes anyone resident in Sweden in the previous five years, so it does not help someone who studied there.', tag: 'data', src: 'https://forskarskattenamnden.se', by: 'Forskarskattenämnden (SFS 2023:765)', seen: '2026-10-05' },
    'se-sse': { t: 'Of SSE’s 2025 master’s class, 40% went into consulting, 29% into finance and 9% into technology, with first employers including McKinsey, BCG, SEB, Handelsbanken, Swedbank, Klarna and H&M; over 60% started their careers in Sweden and 38% of international graduates stayed.', tag: 'data', src: 'research/places/iberia-and-nordics.md', by: 'SSE MSc Employment Report 2026, via places/iberia-and-nordics.md §1 and §7', seen: '2026-10-02' },
    'se-seb': { t: 'SEB’s International Trainee Programme runs every other year from September; the 2026–27 intake closed on 11 January 2026, and some roles require Swedish.', tag: 'employer-stated', src: 'research/places/iberia-and-nordics.md', by: 'SEB careers, via places/iberia-and-nordics.md §6', seen: '2026-10-02' },
    'se-cal-swed': { t: 'Swedbank’s Analyst Development Trainee Program, for recent graduates in industrial economics, mathematics, economics, statistics or computer science, lasts over 10 months; applications are closed and open again in January 2027.', tag: 'employer-stated', src: 'https://www.swedbank.com/work-with-us/students-and-graduates/swedbank-analyst-development-trainee-program', by: 'Swedbank, Analyst Development Trainee Program page', seen: '2026-10-08' },
    'se-cal-fin': { t: 'The Ministry of Finance’s nine-month trainee programme for recent graduates has its next recruitment round in spring 2027, and Volvo Group’s 12-month Finance Graduate Program recruits next in autumn 2027.', tag: 'employer-stated', src: 'https://regeringen.se/sveriges-regering/finansdepartementet/trainee-pa-finansdepartementet/', by: 'Regeringen, trainee at the Ministry of Finance; Volvo Group, students and graduates (https://www.volvogroup.com/en/careers/students-and-graduates.html)', seen: '2026-10-08' },
    'se-lang': { t: 'English is widely used in international workplaces in Sweden, but Swedish is an advantage and in many roles a requirement; CVs should be in the language of the job posting.', tag: 'practitioner consensus', src: 'https://www.expat.com/en/guide/europe/sweden/14123-work-in-stockholm.html', by: 'Expat.com, working in Stockholm', seen: '2026-10-08' },
    'se-volvo': { t: 'AB Volvo has its headquarters in Gothenburg.', tag: 'employer-stated', src: 'https://www.volvogroup.com/en/contact-us.html', by: 'Volvo Group, Contact us', seen: '2026-10-02' },
    'se-malmo': { t: 'Eurostat counts 629,000 people in work in the Malmö metropolitan region in 2021: 25,000 in information and communication (third in Sweden, after Stockholm and Gothenburg) and 8,000 in finance and insurance (third in Sweden, after Stockholm and Gothenburg). The region’s GDP was €62.3 billion in 2021.', tag: 'data', src: 'https://ec.europa.eu/eurostat/databrowser/view/met_10r_3emp/default/table?lang=en', by: 'Eurostat, metropolitan regions: employment by activity (met_10r_3emp) and GDP (met_10r_3gdp)', seen: '2026-10-03' },
    'se-uppsala': { t: 'Eurostat counts 178,000 people in work in the Uppsala metropolitan region in 2021: 5,000 in information and communication and 1,000 in finance and insurance. The region’s GDP was €19.1 billion in 2021.', tag: 'data', src: 'https://ec.europa.eu/eurostat/databrowser/view/met_10r_3emp/default/table?lang=en', by: 'Eurostat, metropolitan regions: employment by activity (met_10r_3emp) and GDP (met_10r_3gdp)', seen: '2026-10-03' },
    'se-emp-sto': { t: 'Eurostat counts 1,316,000 people in work in the Stockholm metropolitan region in 2021, 117,000 of them in information and communication (53% of Sweden’s 221,000) and 68,000 in finance and insurance (64% of 107,000).', tag: 'data', src: 'https://ec.europa.eu/eurostat/api/dissemination/statistics/1.0/data/met_10r_3emp?format=JSON&lang=EN&metroreg=SE001MC&wstatus=EMP&nace_r2=TOTAL&nace_r2=J&nace_r2=K&time=2021', by: 'Eurostat, met_10r_3emp metropolitan regions: employment by activity, 2021 (Stockholm SE001MC)', seen: '2026-10-03' },
    'se-emp-got': { t: 'Eurostat counts 870,000 people in work in the Gothenburg metropolitan region in 2021, 33,000 of them in information and communication (15% of Sweden’s 221,000) and 10,000 in finance and insurance (9% of 107,000).', tag: 'data', src: 'https://ec.europa.eu/eurostat/api/dissemination/statistics/1.0/data/met_10r_3emp?format=JSON&lang=EN&metroreg=SE002M&wstatus=EMP&nace_r2=TOTAL&nace_r2=J&nace_r2=K&time=2021', by: 'Eurostat, met_10r_3emp metropolitan regions: employment by activity, 2021 (Gothenburg SE002M)', seen: '2026-10-03' },
    'se-spotify': { t: 'Spotify gives its address as Regeringsgatan 19, Stockholm, as its headquarters, with entities in 16 countries.', tag: 'employer-stated', src: 'https://www.spotify.com/us/about-us/contact/', by: 'Spotify, contact page', seen: '2026-10-03' },
    'se-klarna': { t: 'Klarna gives its address as Sveavägen 46, Stockholm, and says it supports 26 countries.', tag: 'employer-stated', src: 'https://www.klarna.com/international/about-us/', by: 'Klarna, about us', seen: '2026-10-03' },
    'se-handels': { t: 'Handelsbanken gives its head office as Kungsträdgårdsgatan 2, Stockholm, and says it has more than 12,000 employees.', tag: 'employer-stated', src: 'https://www.handelsbanken.com/en', by: 'Handelsbanken, group home and contact page', seen: '2026-10-03' },
    'se-volvo-size': { t: 'Volvo Group says it has 99,000 employees, production in 17 countries and sales in 180 markets, with its headquarters in Gothenburg; Volvo Car Group gives Gunnar Engellaus väg 8, Gothenburg.', tag: 'employer-stated', src: 'https://www.volvogroup.com/en/about-us.html', by: 'Volvo Group about us; Volvo Cars investor relations (https://investors.volvocars.com/en)', seen: '2026-10-03' },
    'se-axis': { t: 'Axis Communications gives Lund as its headquarters and says it has around 5,000 employees in over 50 countries.', tag: 'employer-stated', src: 'https://www.axis.com/about-axis', by: 'Axis Communications, about Axis', seen: '2026-10-03' },
    'se-uu': { t: 'Uppsala University says it has 50,000 students and 7,539 staff (year average, 6,648 full-time equivalents).', tag: 'employer-stated', src: 'https://www.uu.se/en/about-uu/facts-and-figures', by: 'Uppsala University, facts and figures', seen: '2026-10-03' },
    'se-qs': { t: 'In the QS World University Rankings 2027 (18 June 2026) Lund University is 71st, KTH 82nd, Uppsala University 87th and Stockholm University 167th, the first four in Sweden.', tag: 'employer-stated', src: 'https://www.uu.se/en/news/2026/2026-06-18-uppsala-university-climbs-international-rankings', by: 'Uppsala University news (18 Jun 2026) and Stockholm University news (https://www.su.se/english/news/articles/2026-06-22-stockholm-university-ranks-167-in-the-qs-ranking)', seen: '2026-10-03' },
    'se-gfci': { t: 'The Global Financial Centres Index 40 (September 2026) ranks Stockholm 35th of 117 centres, the twelfth European centre after London, Zurich, Geneva, Luxembourg, Lugano, Paris, Copenhagen, Amsterdam, Frankfurt, Dublin and Edinburgh, and 17th for fintech; Gothenburg is an associate centre with too few assessments to be ranked.', tag: 'practitioner consensus', src: 'https://www.longfinance.net/media/documents/GFCI_40_Report_2026.09.16_v1.2.pdf', by: 'Z/Yen and Long Finance, Global Financial Centres Index 40 (September 2026), tables 1 and 16', seen: '2026-10-03' },
    'se-genome': { t: 'Startup Genome’s 2026 Top 40 ranks Stockholm 23rd in the world, level with Amsterdam-Delta and up eight places, the standout European performer; its Europe chapter names Amsterdam, Munich and Stockholm as the top tier after London, Paris and Berlin and puts Stockholm fourth in Europe for AI-native value ($5.8 billion, after London, Paris and Munich); the Stockholm page shows an ecosystem value of $56 billion against a global average of $25 billion.', tag: 'practitioner consensus', src: 'https://startupgenome.com/report/the-global-startup-ecosystem-report-2026/global-startup-ecosystem-ranking-2026-top-40', by: 'Startup Genome, GSER 2026 Top 40 and Europe chapter; https://startupgenome.com/ecosystems/stockholm', seen: '2026-10-03' },
    'se-genome-got': { t: 'Startup Genome’s Gothenburg ecosystem page shows an ecosystem value of $2 billion, $120 million of seed and Series A funding in 2023–2025 and $1 billion of exits, against global averages of $25 billion and $554 million.', tag: 'practitioner consensus', src: 'https://startupgenome.com/ecosystems/gothenburg', by: 'Startup Genome, Gothenburg ecosystem page (GSER 2026 data)', seen: '2026-10-03' },
    'se-ict': { t: 'In 2025 ICT specialists were 8.9% of employment in Sweden, the highest of the 33 European countries Eurostat lists (EU 5.0%, Luxembourg 8.7%, Finland 7.8%).', tag: 'data', src: 'https://ec.europa.eu/eurostat/api/dissemination/statistics/1.0/data/isoc_sks_itspt?format=JSON&lang=EN&geo=SE&time=2025', by: 'Eurostat, isoc_sks_itspt ICT specialists in employment, 2025 (updated 17 Apr 2026)', seen: '2026-10-03' },
    'se-grad': { t: 'In 2025, 91.1% of Swedish tertiary graduates aged 20–34 who finished within the last three years were in work (EU 85.3%), but unemployment among 15-to-24-year-olds was 24.3% (EU 15.2%), the highest of the Nordic countries.', tag: 'data', src: 'https://ec.europa.eu/eurostat/api/dissemination/statistics/1.0/data/edat_lfse_24?format=JSON&lang=EN&duration=Y_LE3&isced11=ED5-8&age=Y20-34&sex=T&geo=SE&geo=EU27_2020', by: 'Eurostat, edat_lfse_24 and une_rt_a, 2025 (updated 10 Sep 2026)', seen: '2026-10-03' },
    'se-wage-region': { t: 'In 2025 the average monthly salary of all employees was SEK 42,900 in Sweden, SEK 48,300 in the Stockholm region, SEK 42,300 in West Sweden (Gothenburg), SEK 41,700 in South Sweden (Malmö) and SEK 40,500 in East-Central Sweden (Uppsala).', tag: 'data', src: 'https://www.statistikdatabasen.scb.se/pxweb/en/ssd/START__AM__AM0110__AM0110A/LonYrkeRegion4AN/', by: 'Statistics Sweden, AM0110 LonYrkeRegion4AN: average monthly salary by region, all sectors and occupations, 2025', seen: '2026-10-03' }
  }
});

if (window.I18N) I18N.add('it', {
  'Strong graduate employment and the Nordic start-up leader: Stockholm holds about half of Sweden’s information-and-communication jobs and nearly two-thirds of its finance jobs, with Spotify, Klarna, SEB and Handelsbanken; Gothenburg is Volvo’s city. Corporate graduate programmes recruit in English but many roles need Swedish, youth unemployment is high at 24.3%, and since June 2026 non-EU students may work only 15 hours a week in term.':
    'Occupazione forte per i laureati e leader nordico delle start-up: Stoccolma ha circa metà dei posti di lavoro svedesi nell’informazione e comunicazione e quasi due terzi di quelli nella finanza, con Spotify, Klarna, SEB e Handelsbanken; Göteborg è la città di Volvo. I programmi aziendali per laureati selezionano in inglese ma molti ruoli richiedono lo svedese, la disoccupazione giovanile è alta (24,3%) e da giugno 2026 gli studenti extra-UE possono lavorare solo 15 ore a settimana durante il semestre.',
  'Banking and finance':
    'Banche e finanza',
  'Consulting':
    'Consulenza',
  'Technology and fintech':
    'Tecnologia e fintech',
  'Automotive and engineering':
    'Automotive e ingegneria',
  'Retail':
    'Commercio al dettaglio',
  'Eurostat’s employment counts are for metropolitan regions and for 2021; Statistics Sweden’s city-level employment by industry was not read.':
    'I dati Eurostat sull’occupazione riguardano le regioni metropolitane e il 2021; i dati dell’istituto di statistica svedese sull’occupazione per settore a livello di città non sono stati letti.',
  'No source gives graduate entry pay by field or city; the pay figures are all-employee regional averages from Statistics Sweden.':
    'Nessuna fonte indica la retribuzione iniziale dei laureati per settore o città; i dati sulle retribuzioni sono medie regionali di tutti i dipendenti dell’istituto di statistica svedese.',
  'Swedbank, Ericsson, H&M and AstraZeneca are not listed as employers because no source we can cite was read.':
    'Swedbank, Ericsson, H&M e AstraZeneca non sono elencate come datori di lavoro perché non è stata letta alcuna fonte citabile.',
  'Graduate programme calendars were read only for SEB and Nordea; none was found for Spotify, Klarna, Handelsbanken or Volvo.':
    'I calendari dei programmi per laureati sono stati letti solo per SEB e Nordea; nessuno è stato trovato per Spotify, Klarna, Handelsbanken o Volvo.',
  'AI, data science, analytics, marketing, accounting and logistics are not rated: no source read measures them by city.':
    'IA, data science, analytics, marketing, contabilità e logistica non sono valutati: nessuna fonte letta li misura per città.',
  'No family is rated in Uppsala: Eurostat does not put it second or third in the country for ICT or finance jobs, and its strength is the university, which is not a graduate-employer family.':
    'Nessuna famiglia è valutata a Uppsala: Eurostat non la colloca seconda o terza nel paese per posti ICT o finanza, e il suo punto di forza è l’università, che non è una famiglia di datori di lavoro per laureati.',
  'Hubs added on 3 October 2026 are rated only from Eurostat’s 2021–22 metropolitan employment counts: strong means second or third in the country for jobs in finance and insurance, or in information and communication, with at least 5,000 such jobs.':
    'I poli aggiunti il 3 ottobre 2026 sono valutati solo in base ai conteggi Eurostat 2021–22 dell’occupazione metropolitana: forte significa secondo o terzo nel paese per posti di lavoro in finanza e assicurazioni, o nell’informazione e comunicazione, con almeno 5.000 posti.',
  'Sweden: graduate market, pay after rent, expert tax relief, permits, SEB and Nordea programmes':
    'Svezia: mercato dei laureati, stipendio dopo l’affitto, agevolazione fiscale per esperti, permessi, programmi SEB e Nordea',
  '§6 Sweden: job search and the 90%-of-median floor':
    '§6 Svezia: ricerca di lavoro e la soglia del 90% della mediana',
  'Country brief: hubs, employers, pay and standing':
    'Dossier paese: poli, datori di lavoro, stipendi e posizionamento',
  'Consulting, banking and tech headquarters':
    'Sedi della consulenza, delle banche e della tecnologia',
  'Banking':
    'Banca',
  'Fintech':
    'Fintech',
  'among first employers of SSE graduates':
    'tra i primi datori di lavoro dei laureati SSE',
  'English, with Swedish for some roles':
    'in inglese, con lo svedese per alcuni ruoli',
  'headquarters of the music-streaming company':
    'sede centrale dell’azienda di streaming musicale',
  'headquarters of the payments company, supporting 26 countries':
    'sede centrale dell’azienda di pagamenti, attiva in 26 paesi',
  'head office; more than 12,000 employees':
    'sede centrale; più di 12.000 dipendenti',
  'Volvo and automotive engineering':
    'Volvo e l’ingegneria automobilistica',
  'Trucks and buses':
    'Camion e autobus',
  'Engineering':
    'Ingegneria',
  'headquarters; 99,000 employees worldwide':
    'sede centrale; 99.000 dipendenti nel mondo',
  'headquarters at Gunnar Engellaus väg':
    'sede centrale a Gunnar Engellaus väg',
  '33,000 jobs (2021), second in Sweden':
    '33.000 posti (2021), secondi in Svezia',
  'Information and communication employers':
    'I datori di lavoro dell’informazione e comunicazione',
  'Sweden’s third metropolitan region, linked to Copenhagen by the Öresund bridge':
    'La terza regione metropolitana svedese, collegata a Copenaghen dal ponte di Öresund',
  'Life sciences':
    'Scienze della vita',
  '25,000 jobs (2021)':
    '25.000 posti (2021)',
  '8,000 jobs (2021)':
    '8.000 posti (2021)',
  'Finance and insurance employers':
    'I datori di lavoro di finanza e assicurazioni',
  'headquarters in Lund; around 5,000 employees':
    'sede centrale a Lund; circa 5.000 dipendenti',
  '71st in the QS World University Rankings 2027':
    '71ª nel QS World University Rankings 2027',
  'A university city north of Stockholm':
    'Una città universitaria a nord di Stoccolma',
  '5,000 jobs (2021)':
    '5.000 posti (2021)',
  '1,000 jobs (2021)':
    '1.000 posti (2021)',
  '50,000 students, 7,539 staff; 87th in QS 2027':
    '50.000 studenti, 7.539 dipendenti; 87ª nel QS 2027',
  'The Ministry of Finance’s nine-month trainee programme for recent graduates has its next recruitment round in spring 2027, and Volvo Group’s 12-month Finance Graduate Program recruits next in autumn 2027.':
    'Il programma trainee di nove mesi del Ministero delle Finanze per neolaureati ha il prossimo ciclo di selezione nella primavera 2027, e il Finance Graduate Program di 12 mesi del Gruppo Volvo recluta di nuovo nell’autunno 2027.',
  'Swedbank’s Analyst Development Trainee Program, for recent graduates in industrial economics, mathematics, economics, statistics or computer science, lasts over 10 months; applications are closed and open again in January 2027.':
    'L’Analyst Development Trainee Program di Swedbank, per neolaureati in economia industriale, matematica, economia, statistica o informatica, dura oltre 10 mesi; le candidature sono chiuse e riaprono a gennaio 2027.',
  'English is widely used in international workplaces in Sweden, but Swedish is an advantage and in many roles a requirement; CVs should be in the language of the job posting.':
    'L’inglese è molto usato nei luoghi di lavoro internazionali in Svezia, ma lo svedese è un vantaggio e in molti ruoli un requisito; i CV vanno redatti nella lingua dell’annuncio.',
  'Graduate labour market':
    'Mercato del lavoro per i laureati',
  'Entry pay':
    'Stipendio d’ingresso',
  'Sweden’s expert tax relief (25% of pay exempt for seven years) excludes anyone resident in Sweden in the previous five years, so it does not help someone who studied there.':
    'L’agevolazione fiscale svedese per esperti (25% dello stipendio esente per sette anni) esclude chi è stato residente in Svezia nei cinque anni precedenti, quindi non aiuta chi vi ha studiato.',
  'Of SSE’s 2025 master’s class, 40% went into consulting, 29% into finance and 9% into technology, with first employers including McKinsey, BCG, SEB, Handelsbanken, Swedbank, Klarna and H&M; over 60% started their careers in Sweden and 38% of international graduates stayed.':
    'Della classe magistrale SSE del 2025, il 40% è andato in consulenza, il 29% in finanza e il 9% nella tecnologia, con primi datori di lavoro tra cui McKinsey, BCG, SEB, Handelsbanken, Swedbank, Klarna e H&M; oltre il 60% ha iniziato la carriera in Svezia e il 38% dei laureati internazionali è rimasto.',
  'SEB’s International Trainee Programme runs every other year from September; the 2026–27 intake closed on 11 January 2026, and some roles require Swedish.':
    'L’International Trainee Programme di SEB si svolge ogni due anni da settembre; le candidature per il 2026–27 si sono chiuse l’11 gennaio 2026, e alcuni ruoli richiedono lo svedese.',
  'AB Volvo has its headquarters in Gothenburg.':
    'AB Volvo ha la sede centrale a Göteborg.',
  'Eurostat counts 629,000 people in work in the Malmö metropolitan region in 2021: 25,000 in information and communication (third in Sweden, after Stockholm and Gothenburg) and 8,000 in finance and insurance (third in Sweden, after Stockholm and Gothenburg). The region’s GDP was €62.3 billion in 2021.':
    'Eurostat conta 629.000 occupati nella regione metropolitana di Malmö nel 2021: 25.000 nell’informazione e comunicazione (terza in Svezia, dopo Stoccolma e Göteborg) e 8.000 in finanza e assicurazioni (terza in Svezia, dopo Stoccolma e Göteborg). Il PIL della regione era di 62,3 miliardi di € nel 2021.',
  'Eurostat counts 178,000 people in work in the Uppsala metropolitan region in 2021: 5,000 in information and communication and 1,000 in finance and insurance. The region’s GDP was €19.1 billion in 2021.':
    'Eurostat conta 178.000 occupati nella regione metropolitana di Uppsala nel 2021: 5.000 nell’informazione e comunicazione e 1.000 in finanza e assicurazioni. Il PIL della regione era di 19,1 miliardi di € nel 2021.',
  'Eurostat counts 1,316,000 people in work in the Stockholm metropolitan region in 2021, 117,000 of them in information and communication (53% of Sweden’s 221,000) and 68,000 in finance and insurance (64% of 107,000).':
    'Eurostat conta 1.316.000 occupati nella regione metropolitana di Stoccolma nel 2021, di cui 117.000 nell’informazione e comunicazione (53% dei 221.000 della Svezia) e 68.000 in finanza e assicurazioni (64% dei 107.000).',
  'Eurostat counts 870,000 people in work in the Gothenburg metropolitan region in 2021, 33,000 of them in information and communication (15% of Sweden’s 221,000) and 10,000 in finance and insurance (9% of 107,000).':
    'Eurostat conta 870.000 occupati nella regione metropolitana di Göteborg nel 2021, di cui 33.000 nell’informazione e comunicazione (15% dei 221.000 della Svezia) e 10.000 in finanza e assicurazioni (9% dei 107.000).',
  'Spotify gives its address as Regeringsgatan 19, Stockholm, as its headquarters, with entities in 16 countries.':
    'Spotify indica come sede centrale Regeringsgatan 19, Stoccolma, con società in 16 paesi.',
  'Klarna gives its address as Sveavägen 46, Stockholm, and says it supports 26 countries.':
    'Klarna indica come indirizzo Sveavägen 46, Stoccolma, e dichiara di operare in 26 paesi.',
  'Handelsbanken gives its head office as Kungsträdgårdsgatan 2, Stockholm, and says it has more than 12,000 employees.':
    'Handelsbanken indica come sede centrale Kungsträdgårdsgatan 2, Stoccolma, e dichiara più di 12.000 dipendenti.',
  'Volvo Group says it has 99,000 employees, production in 17 countries and sales in 180 markets, with its headquarters in Gothenburg; Volvo Car Group gives Gunnar Engellaus väg 8, Gothenburg.':
    'Volvo Group dichiara 99.000 dipendenti, produzione in 17 paesi e vendite in 180 mercati, con sede centrale a Göteborg; Volvo Car Group indica Gunnar Engellaus väg 8, Göteborg.',
  'Axis Communications gives Lund as its headquarters and says it has around 5,000 employees in over 50 countries.':
    'Axis Communications indica Lund come sede centrale e dichiara circa 5.000 dipendenti in oltre 50 paesi.',
  'Uppsala University says it has 50,000 students and 7,539 staff (year average, 6,648 full-time equivalents).':
    'L’Università di Uppsala dichiara 50.000 studenti e 7.539 dipendenti (media annua, 6.648 equivalenti a tempo pieno).',
  'In the QS World University Rankings 2027 (18 June 2026) Lund University is 71st, KTH 82nd, Uppsala University 87th and Stockholm University 167th, the first four in Sweden.':
    'Nel QS World University Rankings 2027 (18 giugno 2026) l’Università di Lund è 71ª, il KTH 82º, l’Università di Uppsala 87ª e l’Università di Stoccolma 167ª, le prime quattro in Svezia.',
  'The Global Financial Centres Index 40 (September 2026) ranks Stockholm 35th of 117 centres, the twelfth European centre after London, Zurich, Geneva, Luxembourg, Lugano, Paris, Copenhagen, Amsterdam, Frankfurt, Dublin and Edinburgh, and 17th for fintech; Gothenburg is an associate centre with too few assessments to be ranked.':
    'Il Global Financial Centres Index 40 (settembre 2026) colloca Stoccolma al 35º posto su 117 centri, dodicesimo centro europeo dopo Londra, Zurigo, Ginevra, Lussemburgo, Lugano, Parigi, Copenaghen, Amsterdam, Francoforte, Dublino ed Edimburgo, e al 17º per il fintech; Göteborg è un centro associato con troppe poche valutazioni per essere classificato.',
  'Startup Genome’s 2026 Top 40 ranks Stockholm 23rd in the world, level with Amsterdam-Delta and up eight places, the standout European performer; its Europe chapter names Amsterdam, Munich and Stockholm as the top tier after London, Paris and Berlin and puts Stockholm fourth in Europe for AI-native value ($5.8 billion, after London, Paris and Munich); the Stockholm page shows an ecosystem value of $56 billion against a global average of $25 billion.':
    'La Top 40 2026 di Startup Genome colloca Stoccolma al 23º posto nel mondo, alla pari con Amsterdam-Delta e in salita di otto posizioni, la migliore performance europea; il capitolo sull’Europa indica Amsterdam, Monaco e Stoccolma come fascia alta dopo Londra, Parigi e Berlino e mette Stoccolma al quarto posto in Europa per valore AI-native (5,8 miliardi di dollari, dopo Londra, Parigi e Monaco); la pagina di Stoccolma mostra un valore dell’ecosistema di 56 miliardi di dollari contro una media globale di 25 miliardi.',
  'Startup Genome’s Gothenburg ecosystem page shows an ecosystem value of $2 billion, $120 million of seed and Series A funding in 2023–2025 and $1 billion of exits, against global averages of $25 billion and $554 million.':
    'La pagina di Startup Genome su Göteborg mostra un valore dell’ecosistema di 2 miliardi di dollari, 120 milioni di dollari di finanziamenti seed e Serie A nel 2023–2025 e 1 miliardo di exit, contro medie globali di 25 miliardi e 554 milioni.',
  'In 2025 ICT specialists were 8.9% of employment in Sweden, the highest of the 33 European countries Eurostat lists (EU 5.0%, Luxembourg 8.7%, Finland 7.8%).':
    'Nel 2025 gli specialisti ICT erano l’8,9% dell’occupazione in Svezia, il valore più alto dei 33 paesi europei elencati da Eurostat (UE 5,0%, Lussemburgo 8,7%, Finlandia 7,8%).',
  'In 2025, 91.1% of Swedish tertiary graduates aged 20–34 who finished within the last three years were in work (EU 85.3%), but unemployment among 15-to-24-year-olds was 24.3% (EU 15.2%), the highest of the Nordic countries.':
    'Nel 2025 il 91,1% dei laureati svedesi di 20–34 anni che avevano finito gli studi da meno di tre anni lavorava (UE 85,3%), ma la disoccupazione tra i 15-24enni era del 24,3% (UE 15,2%), la più alta dei paesi nordici.',
  'In 2025 the average monthly salary of all employees was SEK 42,900 in Sweden, SEK 48,300 in the Stockholm region, SEK 42,300 in West Sweden (Gothenburg), SEK 41,700 in South Sweden (Malmö) and SEK 40,500 in East-Central Sweden (Uppsala).':
    'Nel 2025 lo stipendio mensile medio di tutti i dipendenti era di 42.900 SEK in Svezia, 48.300 SEK nella regione di Stoccolma, 42.300 SEK nella Svezia occidentale (Göteborg), 41.700 SEK nella Svezia meridionale (Malmö) e 40.500 SEK nella Svezia centro-orientale (Uppsala).'
});
