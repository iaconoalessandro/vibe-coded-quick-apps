/* Atlas record: Poland. Read 2 October 2026; log P52
 * (research/verification/round-4e.md). Hubs and pay are the library's reading
 * of the ABSL 2025 report (places/gulf-and-central-eastern-europe.md §4); permits read on gov.pl,
 * Study in Poland (NAWA) and the EU Immigration Portal.
 * Hubs for further cities were added on 3 October 2026 from city-level statistics
 * (log: research/verification/round-4k.md). Deepened on 3 October 2026 (log:
 * research/verification/round-5c.md; brief: research/countries/pl-poland.md): Warsaw's IT, software and
 * finance are "dominant" on Eurostat's metropolitan employment (24% of Polish ICT jobs and 28% of finance
 * jobs, 2021, the largest by far); pay is Statistics Poland's, by city.
 * Official guide: visas_immigration/poland/poland_visas_immigration_guide.md. */

ATLAS.add({
  id: 'PL',
  checked: '2026-10-03',
  log: 'P52',
  summary: 'Europe’s largest market for business-service centres: about 489,000 people work in 2,081 centres run by foreign and Polish firms, mostly in Warsaw, Kraków and Wrocław, many in Western European languages. Entry pay is modest and automation is thinning the junior rung. Non-EU graduates of Polish universities get nine months to find work.',
  sectors: ['Business-service and shared-service centres', 'IT and software', 'Banking', 'Manufacturing', 'Logistics'],
  roles: ['business', 'it', 'finance', 'software'],
  hubs: [
    {
      id: 'warsaw', name: 'Warsaw', lat: 52.23, lon: 21.01,
      knownFor: 'The most service centres, banks’ technology bases and new tech offices',
      why: ['pl-absl', 'pl-emp-war', 'pl-gpw', 'pl-gfci', 'pl-genome', 'pl-bolt', 'pl-ict'],
      sectors: ['Business services', 'Banking technology', 'Software', 'Finance', 'Consulting'],
      employers: [
        { name: 'Goldman Sachs', note: 'technology and engineering base', c: 'pl-gs' },
        { name: 'Bending Spoons', note: 'Warsaw office opened September 2026', c: 'pl-bs' },
        { name: 'Bolt', note: 'one of its key hubs, with the Tallinn headquarters', c: 'pl-bolt' },
        { name: 'CD PROJEKT', note: 'games developer, registered in Warsaw', c: 'pl-cdp' },
        { name: 'Warsaw Stock Exchange', note: 'the largest exchange in Central and Eastern Europe', c: 'pl-gpw' }
      ],
      demand: {
        business: ['dominant', 'pl-absl'],
        finance: ['dominant', 'pl-emp-war', 'pl-gpw'],
        it: ['dominant', 'pl-emp-war', 'pl-ict'],
        software: ['dominant', 'pl-emp-war', 'pl-gs', 'pl-bs', 'pl-bolt'],
        economics: 'gap', accounting: 'gap', management: 'gap', marketing: 'gap', logistics: 'gap',
        analytics: 'gap', datasci: 'gap', ai: 'gap', cs: 'gap', bigdata: 'gap'
      },
      finance: { ib: 'gap', banking: 'gap', am: 'gap', pe: 'gap', vc: 'gap', corpfin: 'gap', risk: 'gap', finconsult: 'gap' },
      standing: [
        { f: 'business', s: [5, 3, 2], c: ['pl-absl', 'pl-gfci'] },
        { f: 'it', s: [5, 3, 2], c: ['pl-emp-war', 'pl-ict'] },
        { f: 'software', s: [5, 2, 1], c: ['pl-emp-war', 'pl-genome'] },
        { f: 'finance', s: [5, 3, 1], c: ['pl-emp-war', 'pl-gpw', 'pl-gfci'] }
      ],
      metrics: {
        pop:  { v: 3269510, year: 2023, area: 'metro', tag: 'data', src: 'https://ec.europa.eu/eurostat/api/dissemination/statistics/1.0/data/met_pjanaggr3?format=JSON&lang=EN&metroreg=PL001MC&sex=T&age=TOTAL&time=2023', by: 'Eurostat, met_pjanaggr3 population on 1 January by metropolitan region, Warsaw (PL001MC)', seen: '2026-10-03' },
        gdp:  { v: 99.75, cur: 'EUR', year: 2021, area: 'metro', tag: 'data', src: 'https://ec.europa.eu/eurostat/api/dissemination/statistics/1.0/data/met_10r_3gdp?format=JSON&lang=EN&metroreg=PL001MC&unit=MIO_EUR&time=2021', by: 'Eurostat, met_10r_3gdp GDP at current market prices by metropolitan region, Warsaw (EUR 99,748 million)', seen: '2026-10-03' },
        wage: { v: 11677.57, cur: 'PLN', basis: 'mean', year: 2025, area: 'city', tag: 'data', src: 'https://bdl.stat.gov.pl/api/v1/data/by-variable/64428?format=json&unit-level=5&year=2025', by: 'Statistics Poland, Local Data Bank, average monthly gross wages and salaries (variable 64428, grand total), Powiat m. st. Warszawa, 2025', seen: '2026-10-03' }
      },
      programmes: []
    },
    {
      id: 'krakow', name: 'Kraków', lat: 50.06, lon: 19.94,
      knownFor: 'Service centres in IT, risk and multilingual operations',
      why: ['pl-krk', 'pl-emp-krk', 'pl-genome'],
      sectors: ['Business services', 'IT', 'Risk and operations'],
      employers: [
        { name: 'HSBC Service Delivery', note: 'risk, business analysis and IT support in 11 languages', c: 'pl-hsbc' },
        { t: 'Business-service centres', note: 'nearly 108,000 people in Q1 2025', c: 'pl-krk' }
      ],
      demand: {
        business: ['dominant', 'pl-krk', 'pl-absl'],
        finance: ['strong', 'pl-emp-krk', 'pl-hsbc'],
        it: ['strong', 'pl-emp-krk', 'pl-krk', 'pl-hsbc'],
        economics: 'gap', accounting: 'gap', management: 'gap', marketing: 'gap', logistics: 'gap',
        analytics: 'gap', software: 'gap', datasci: 'gap', ai: 'gap', cs: 'gap',
        bigdata: 'gap'
      },
      finance: { risk: ['present', 'pl-hsbc'], ib: 'gap', banking: 'gap', am: 'gap', pe: 'gap', vc: 'gap', corpfin: 'gap', finconsult: 'gap' },
      standing: [
        { f: 'business', s: [5, 3, 2], c: ['pl-krk', 'pl-absl'] },
        { f: 'it', s: [4, 2, 1], c: ['pl-emp-krk', 'pl-krk'] },
        { f: 'finance', s: [4, 2, 1], c: ['pl-emp-krk', 'pl-hsbc'] }
      ],
      metrics: {
        pop:  { v: 1543724, year: 2023, area: 'metro', tag: 'data', src: 'https://ec.europa.eu/eurostat/api/dissemination/statistics/1.0/data/met_pjanaggr3?format=JSON&lang=EN&metroreg=PL003M&sex=T&age=TOTAL&time=2023', by: 'Eurostat, met_pjanaggr3 population on 1 January by metropolitan region, Kraków (PL003M)', seen: '2026-10-03' },
        gdp:  { v: 28.74, cur: 'EUR', year: 2021, area: 'metro', tag: 'data', src: 'https://ec.europa.eu/eurostat/api/dissemination/statistics/1.0/data/met_10r_3gdp?format=JSON&lang=EN&metroreg=PL003M&unit=MIO_EUR&time=2021', by: 'Eurostat, met_10r_3gdp GDP at current market prices by metropolitan region, Kraków (EUR 28,742 million)', seen: '2026-10-03' },
        wage: { v: 11404.02, cur: 'PLN', basis: 'mean', year: 2025, area: 'city', tag: 'data', src: 'https://bdl.stat.gov.pl/api/v1/data/by-variable/64428?format=json&unit-level=5&year=2025', by: 'Statistics Poland, Local Data Bank, average monthly gross wages and salaries (variable 64428, grand total), Powiat m. Kraków, 2025', seen: '2026-10-03' }
      },
      programmes: []
    },
    {
      id: 'wroclaw', name: 'Wrocław', lat: 51.11, lon: 17.04,
      knownFor: 'Service centres with lower rents',
      why: ['pl-absl', 'pl-rent', 'pl-emp-wro'],
      sectors: ['Business services', 'IT'],
      employers: [
        { t: 'Business-service centres', note: '258 in the city', c: 'pl-absl' },
        { t: 'Information and communication employers', note: '47,800 jobs (2021)', c: 'pl-emp-wro' }
      ],
      demand: {
        business: ['strong', 'pl-absl'],
        it: ['strong', 'pl-emp-wro'],
        finance: 'gap', economics: 'gap', accounting: 'gap', management: 'gap', marketing: 'gap',
        logistics: 'gap', analytics: 'gap', software: 'gap', datasci: 'gap', ai: 'gap',
        cs: 'gap', bigdata: 'gap'
      },
      finance: { ib: 'gap', banking: 'gap', am: 'gap', pe: 'gap', vc: 'gap', corpfin: 'gap', risk: 'gap', finconsult: 'gap' },
      standing: [
        { f: 'business', s: [4, 2, 1], c: ['pl-absl'] },
        { f: 'it', s: [4, 2, 1], c: ['pl-emp-wro'] }
      ],
      metrics: {
        pop:  { v: 671206, year: 2023, area: 'metro', tag: 'data', src: 'https://ec.europa.eu/eurostat/api/dissemination/statistics/1.0/data/met_pjanaggr3?format=JSON&lang=EN&metroreg=PL004M&sex=T&age=TOTAL&time=2023', by: 'Eurostat, met_pjanaggr3 population on 1 January by metropolitan region, Wrocław (PL004M)', seen: '2026-10-03' },
        gdp:  { v: 16.58, cur: 'EUR', year: 2021, area: 'metro', tag: 'data', src: 'https://ec.europa.eu/eurostat/api/dissemination/statistics/1.0/data/met_10r_3gdp?format=JSON&lang=EN&metroreg=PL004M&unit=MIO_EUR&time=2021', by: 'Eurostat, met_10r_3gdp GDP at current market prices by metropolitan region, Wrocław (EUR 16,579 million)', seen: '2026-10-03' },
        wage: { v: 10147.9, cur: 'PLN', basis: 'mean', year: 2025, area: 'city', tag: 'data', src: 'https://bdl.stat.gov.pl/api/v1/data/by-variable/64428?format=json&unit-level=5&year=2025', by: 'Statistics Poland, Local Data Bank, average monthly gross wages and salaries (variable 64428, grand total), Powiat m. Wrocław, 2025', seen: '2026-10-03' }
      },
      programmes: []
    },
    {
      id: 'katowice', name: 'Katowice (Upper Silesia)', lat: 50.26, lon: 19.02,
      knownFor: 'Poland’s second metropolitan region for finance jobs, third for information and communication',
      why: ['pl-katowice'],
      sectors: ['Business services centres', 'Manufacturing', 'Energy'],
      employers: [
        { t: 'Information and communication employers', note: '49,400 jobs (2021)', c: 'pl-katowice' },
        { t: 'Finance and insurance employers', note: '31,600 jobs (2021)', c: 'pl-katowice' }
      ],
      demand: {
        finance: ['strong', 'pl-katowice'],
        it: ['strong', 'pl-katowice'],
        business: 'gap', economics: 'gap', accounting: 'gap', management: 'gap', marketing: 'gap',
        logistics: 'gap', analytics: 'gap', software: 'gap', datasci: 'gap', ai: 'gap',
        cs: 'gap', bigdata: 'gap'
      },
      finance: { ib: 'gap', banking: 'gap', am: 'gap', pe: 'gap', vc: 'gap', corpfin: 'gap', risk: 'gap', finconsult: 'gap' },
      standing: [
        { f: 'it', s: [4, 2, 1], c: ['pl-katowice'] },
        { f: 'finance', s: [4, 2, 1], c: ['pl-katowice'] }
      ],
      metrics: {
        pop:  { v: 2535354, year: 2023, area: 'metro', tag: 'data', src: 'https://ec.europa.eu/eurostat/api/dissemination/statistics/1.0/data/met_pjanaggr3?format=JSON&lang=EN&metroreg=PL010M&sex=T&age=TOTAL&time=2023', by: 'Eurostat, met_pjanaggr3 population on 1 January by metropolitan region, Katowice (PL010M)', seen: '2026-10-03' },
        gdp:  { v: 44.57, cur: 'EUR', year: 2021, area: 'metro', tag: 'data', src: 'https://ec.europa.eu/eurostat/api/dissemination/statistics/1.0/data/met_10r_3gdp?format=JSON&lang=EN&metroreg=PL010M&unit=MIO_EUR&time=2021', by: 'Eurostat, met_10r_3gdp GDP at current market prices by metropolitan region, Katowice (EUR 44,570 million)', seen: '2026-10-03' },
        wage: { v: 10794.26, cur: 'PLN', basis: 'mean', year: 2025, area: 'city', tag: 'data', src: 'https://bdl.stat.gov.pl/api/v1/data/by-variable/64428?format=json&unit-level=5&year=2025', by: 'Statistics Poland, Local Data Bank, average monthly gross wages and salaries (variable 64428, grand total), Powiat m. Katowice, 2025', seen: '2026-10-03' }
      },
      programmes: []
    },
    {
      id: 'gdansk', name: 'Gdańsk (Tricity)', lat: 54.35, lon: 18.65,
      knownFor: 'The Baltic port metropolis of Gdańsk, Gdynia and Sopot',
      why: ['pl-gdansk'],
      sectors: ['Ports and logistics', 'Business services centres', 'Technology'],
      employers: [
        { t: 'Information and communication employers', note: '32,000 jobs (2021)', c: 'pl-gdansk' },
        { t: 'Finance and insurance employers', note: '20,000 jobs (2021)', c: 'pl-gdansk' }
      ],
      demand: {
        business: 'gap', finance: 'gap', economics: 'gap', accounting: 'gap', management: 'gap',
        marketing: 'gap', logistics: 'gap', analytics: 'gap', it: 'gap', software: 'gap',
        datasci: 'gap', ai: 'gap', cs: 'gap', bigdata: 'gap'
      },
      finance: { ib: 'gap', banking: 'gap', am: 'gap', pe: 'gap', vc: 'gap', corpfin: 'gap', risk: 'gap', finconsult: 'gap' },
      standing: [
        { f: 'it', s: [4, 1, 1], c: ['pl-gdansk'] }
      ],
      metrics: {
        pop:  { v: 1368405, year: 2023, area: 'metro', tag: 'data', src: 'https://ec.europa.eu/eurostat/api/dissemination/statistics/1.0/data/met_pjanaggr3?format=JSON&lang=EN&metroreg=PL006M&sex=T&age=TOTAL&time=2023', by: 'Eurostat, met_pjanaggr3 population on 1 January by metropolitan region, Gdańsk (PL006M)', seen: '2026-10-03' },
        gdp:  { v: 23.78, cur: 'EUR', year: 2021, area: 'metro', tag: 'data', src: 'https://ec.europa.eu/eurostat/api/dissemination/statistics/1.0/data/met_10r_3gdp?format=JSON&lang=EN&metroreg=PL006M&unit=MIO_EUR&time=2021', by: 'Eurostat, met_10r_3gdp GDP at current market prices by metropolitan region, Gdańsk (EUR 23,781 million)', seen: '2026-10-03' },
        wage: { v: 10955.78, cur: 'PLN', basis: 'mean', year: 2025, area: 'city', tag: 'data', src: 'https://bdl.stat.gov.pl/api/v1/data/by-variable/64428?format=json&unit-level=5&year=2025', by: 'Statistics Poland, Local Data Bank, average monthly gross wages and salaries (variable 64428, grand total), Powiat m. Gdańsk, 2025', seen: '2026-10-03' }
      },
      programmes: []
    },
    {
      id: 'poznan', name: 'Poznań', lat: 52.41, lon: 16.93,
      knownFor: 'A western business-services and trade city',
      why: ['pl-poznan'],
      sectors: ['Business services centres', 'Logistics', 'Manufacturing'],
      employers: [
        { t: 'Information and communication employers', note: '26,800 jobs (2021)', c: 'pl-poznan' },
        { t: 'Finance and insurance employers', note: '18,700 jobs (2021)', c: 'pl-poznan' }
      ],
      demand: {
        business: 'gap', finance: 'gap', economics: 'gap', accounting: 'gap', management: 'gap',
        marketing: 'gap', logistics: 'gap', analytics: 'gap', it: 'gap', software: 'gap',
        datasci: 'gap', ai: 'gap', cs: 'gap', bigdata: 'gap'
      },
      finance: { ib: 'gap', banking: 'gap', am: 'gap', pe: 'gap', vc: 'gap', corpfin: 'gap', risk: 'gap', finconsult: 'gap' },
      standing: [
        { f: 'it', s: [3, 1, 1], c: ['pl-poznan'] }
      ],
      metrics: {
        pop:  { v: 1249495, year: 2023, area: 'metro', tag: 'data', src: 'https://ec.europa.eu/eurostat/api/dissemination/statistics/1.0/data/met_pjanaggr3?format=JSON&lang=EN&metroreg=PL005M&sex=T&age=TOTAL&time=2023', by: 'Eurostat, met_pjanaggr3 population on 1 January by metropolitan region, Poznań (PL005M)', seen: '2026-10-03' },
        gdp:  { v: 28.6, cur: 'EUR', year: 2021, area: 'metro', tag: 'data', src: 'https://ec.europa.eu/eurostat/api/dissemination/statistics/1.0/data/met_10r_3gdp?format=JSON&lang=EN&metroreg=PL005M&unit=MIO_EUR&time=2021', by: 'Eurostat, met_10r_3gdp GDP at current market prices by metropolitan region, Poznań (EUR 28,603 million)', seen: '2026-10-03' },
        wage: { v: 10284.81, cur: 'PLN', basis: 'mean', year: 2025, area: 'city', tag: 'data', src: 'https://bdl.stat.gov.pl/api/v1/data/by-variable/64428?format=json&unit-level=5&year=2025', by: 'Statistics Poland, Local Data Bank, average monthly gross wages and salaries (variable 64428, grand total), Powiat m. Poznań, 2025', seen: '2026-10-03' }
      },
      programmes: []
    },
    {
      id: 'lodz', name: 'Łódź', lat: 51.76, lon: 19.46,
      knownFor: 'A central city of business-services centres and logistics',
      why: ['pl-lodz'],
      sectors: ['Business services centres', 'Logistics', 'Manufacturing'],
      employers: [
        { t: 'Information and communication employers', note: '23,200 jobs (2021)', c: 'pl-lodz' },
        { t: 'Finance and insurance employers', note: '15,000 jobs (2021)', c: 'pl-lodz' }
      ],
      demand: {
        business: 'gap', finance: 'gap', economics: 'gap', accounting: 'gap', management: 'gap',
        marketing: 'gap', logistics: 'gap', analytics: 'gap', it: 'gap', software: 'gap',
        datasci: 'gap', ai: 'gap', cs: 'gap', bigdata: 'gap'
      },
      finance: { ib: 'gap', banking: 'gap', am: 'gap', pe: 'gap', vc: 'gap', corpfin: 'gap', risk: 'gap', finconsult: 'gap' },
      standing: [
        { f: 'it', s: [3, 1, 1], c: ['pl-lodz'] }
      ],
      metrics: {
        pop:  { v: 1038261, year: 2023, area: 'metro', tag: 'data', src: 'https://ec.europa.eu/eurostat/api/dissemination/statistics/1.0/data/met_pjanaggr3?format=JSON&lang=EN&metroreg=PL002M&sex=T&age=TOTAL&time=2023', by: 'Eurostat, met_pjanaggr3 population on 1 January by metropolitan region, Łódź (PL002M)', seen: '2026-10-03' },
        gdp:  { v: 18.42, cur: 'EUR', year: 2021, area: 'metro', tag: 'data', src: 'https://ec.europa.eu/eurostat/api/dissemination/statistics/1.0/data/met_10r_3gdp?format=JSON&lang=EN&metroreg=PL002M&unit=MIO_EUR&time=2021', by: 'Eurostat, met_10r_3gdp GDP at current market prices by metropolitan region, Łódź (EUR 18,415 million)', seen: '2026-10-03' },
        wage: { v: 9367.0, cur: 'PLN', basis: 'mean', year: 2025, area: 'city', tag: 'data', src: 'https://bdl.stat.gov.pl/api/v1/data/by-variable/64428?format=json&unit-level=5&year=2025', by: 'Statistics Poland, Local Data Bank, average monthly gross wages and salaries (variable 64428, grand total), Powiat m. Łódź, 2025', seen: '2026-10-03' }
      },
      programmes: []
    }
  ],

  work: [
    { k: 'Recruiting calendar', c: ['pl-cal-pko', 'pl-cal-kpmg', 'pl-cal-pwc', 'pl-cal-uw'] },
    { k: 'Where demand is now', c: ['pl-absl', 'pl-auto', 'pl-emp-war', 'pl-gpw'] },
    { k: 'Pay by city', c: ['pl-wage'] },
    { k: 'Graduate labour market', c: ['pl-grad-lab'] },
    { k: 'Language', c: ['pl-langs'] },
    { k: 'Tax and net pay', c: ['pl-pay', 'pl-rent'] }
  ],

  briefs: [
    ['places/gulf-and-central-eastern-europe.md', '§4–6 Polish service centres: scale, Italians in the workforce, pay, language premiums, automation, rent'],
    ['places/origin-countries-eu.md', '§8 Poland as a home market'],
    ['countries/pl-poland.md', 'Country brief: hubs, employers, pay and standing']
  ],
  gaps: [
    'Warsaw, Kraków, Wrocław and Katowice are rated from Eurostat’s 2021 metropolitan employment counts and ABSL’s 2025 centre counts; ABSL’s functional split by city, and its 2026 report (Q1 2026), were not read, so finance, accounting and IT are not rated separately inside the centres.',
    'Named employers outside the service-centre sector (banks, PKO Bank Polski, Allegro, Comarch, InPost) could not be placed in a city from their own pages and are not listed; the Warsaw Stock Exchange’s own page gives no listing count.',
    'Gdańsk, Poznań and Łódź carry a standing for IT but no demand rating: the Eurostat counts put them fifth to seventh in the country.',
    'Client-facing banking and consulting entry in Warsaw is unresearched.',
    'No family is rated in Gdańsk, Poznań or Łódź: the Eurostat figures read do not put them second or third in the country for finance or information-and-communication jobs.',
    'Hubs added on 3 October 2026 are rated only from Eurostat’s 2021–22 metropolitan employment counts: strong means second or third in the country for jobs in finance and insurance, or in information and communication, with at least 5,000 such jobs.'
  ],

  claims: {
    'pl-cal-pko': { t: 'PKO Bank Polski opened recruitment for the second edition of its paid branch internship on 7 May 2026; the internship ran from 1 July to 30 September 2026 in branches in 20 cities.', tag: 'employer-stated', src: 'https://www.pkobp.pl/aktualnosci/kariera/postaw-na-staz-ktory-procentuje-0526', by: 'PKO Bank Polski, 7 May 2026', seen: '2026-10-08' },
    'pl-cal-kpmg': { t: 'KPMG Poland’s World of Audit held workshops on 8, 15 and 22 October and guarantees those who complete them a paid full-time audit internship starting in January; recruitment to the programme has ended for this year.', tag: 'employer-stated', src: 'https://kpmg.com/pl/pl/kariera/world-of-audit.html', by: 'KPMG Poland, World of Audit', seen: '2026-10-08' },
    'pl-cal-pwc': { t: 'PwC Poland’s three-month All-Techclusive internship runs from early July to the end of September; recruitment for summer 2026 has closed.', tag: 'employer-stated', src: 'https://kariera.pwc.pl/pl/pl/program-praktyk-letnich', by: 'PwC Poland, summer internship programme', seen: '2026-10-08' },
    'pl-cal-uw': { t: 'The University of Warsaw’s autumn 2026 fairs are Psychological Career Days on 13 to 15 October, the Faculty of Management career day on 20 and 21 October and an IT job fair on 28 October; past years also had spring fairs in March and a public-sector day in May.', tag: 'employer-stated', src: 'https://biurokarier.uw.edu.pl/en/job-fairs/', by: 'University of Warsaw Career Office, job fairs', seen: '2026-10-08' },
    'pl-absl': { t: 'At the end of Q1 2025, 488,700 people worked in 2,081 business-service centres in Poland; Warsaw has 429 centres, Kraków 324 and Wrocław 258, and Warsaw and Kraków each employ more than 100,000.', tag: 'data', src: 'research/places/gulf-and-central-eastern-europe.md', by: 'ABSL, Business Services Sector in Poland 2025, via places/gulf-and-central-eastern-europe.md §4', seen: '2026-10-02' },
    'pl-krk': { t: 'Kraków’s service centres employed nearly 108,000 people in Q1 2025, and new centres opened in Poland since 2024 were mostly in IT (42.6%) and R&D (26.2%).', tag: 'data', src: 'https://absl.pl/en/news/p/absl-report-polands-business-services-sector-grows-value-and-strategic-importance', by: 'ABSL (employers’ association), 24 Jun 2025', seen: '2026-10-02' },
    'pl-hsbc': { t: 'HSBC’s Kraków centre covers risk, business analysis and IT application support across 27 countries and works in 11 languages, including Italian, German and French.', tag: 'employer-stated', src: 'research/places/gulf-and-central-eastern-europe.md', by: 'HSBC Poland, Service Delivery, via places/gulf-and-central-eastern-europe.md §4', seen: '2026-10-02' },
    'pl-gs': { t: 'Goldman Sachs uses Warsaw as a technology and engineering base.', tag: 'practitioner consensus', src: 'research/places/gulf-and-central-eastern-europe.md', by: 'eFinancialCareers (28 Jan 2026), via places/gulf-and-central-eastern-europe.md §4', seen: '2026-10-02' },
    'pl-bs': { t: 'Bending Spoons opened a Warsaw office in September 2026 and received about 50,000 applications from Poland in the first nine months of 2026.', tag: 'employer-stated', src: 'research/careers/tech-business-and-startups.md', by: 'Bending Spoons investor newsroom (21 Sep 2026), via careers/tech-business-and-startups.md', seen: '2026-10-02' },
    'pl-langs': { t: 'Foreigners are 19.6% of centre staff, and Italians 8.3% of those; most centres pay a monthly language allowance of PLN 600 to 2,000.', tag: 'data', src: 'research/places/gulf-and-central-eastern-europe.md', by: 'ABSL 2025 report citing Mercer (Dec 2024), via places/gulf-and-central-eastern-europe.md §4', seen: '2026-10-02' },
    'pl-auto': { t: '74.1% of centres use intelligent process automation, and Big Four partners in Poland describe junior transactional roles shrinking.', tag: 'practitioner consensus', src: 'research/places/gulf-and-central-eastern-europe.md', by: 'ABSL 2025 and ACCA (May 2026), via places/gulf-and-central-eastern-europe.md §4', seen: '2026-10-02' },
    'pl-pay': { t: 'A junior specialist in a Polish centre earned a mean base of €1,744 a month in 2024; at the average wage a single worker keeps 71.7% of gross.', tag: 'data', src: 'research/places/gulf-and-central-eastern-europe.md', by: 'ABSL 2025 citing Mercer 2024; Eurostat 2025, via places/gulf-and-central-eastern-europe.md §4–5', seen: '2026-10-02' },
    'pl-rent': { t: 'On that pay, a central one-bed leaves about €190 a month in Warsaw and about €500 in Wrocław.', tag: 'data', src: 'research/places/gulf-and-central-eastern-europe.md', by: 'Author calculation on Numbeo rents, places/gulf-and-central-eastern-europe.md §5', seen: '2026-10-02' },
    'pl-katowice': { t: 'Eurostat counts 1,186,600 people in work in the Katowice metropolitan region in 2021: 49,400 in information and communication (third in Poland, after Warsaw and Kraków) and 31,600 in finance and insurance (second in Poland, after Warsaw). The region’s GDP was €44.6 billion in 2021.', tag: 'data', src: 'https://ec.europa.eu/eurostat/databrowser/view/met_10r_3emp/default/table?lang=en', by: 'Eurostat, metropolitan regions: employment by activity (met_10r_3emp) and GDP (met_10r_3gdp)', seen: '2026-10-03' },
    'pl-gdansk': { t: 'Eurostat counts 657,000 people in work in the Gdańsk metropolitan region in 2021: 32,000 in information and communication and 20,000 in finance and insurance. The region’s GDP was €23.8 billion in 2021.', tag: 'data', src: 'https://ec.europa.eu/eurostat/databrowser/view/met_10r_3emp/default/table?lang=en', by: 'Eurostat, metropolitan regions: employment by activity (met_10r_3emp) and GDP (met_10r_3gdp)', seen: '2026-10-03' },
    'pl-poznan': { t: 'Eurostat counts 701,400 people in work in the Poznań metropolitan region in 2021: 26,800 in information and communication and 18,700 in finance and insurance. The region’s GDP was €28.6 billion in 2021.', tag: 'data', src: 'https://ec.europa.eu/eurostat/databrowser/view/met_10r_3emp/default/table?lang=en', by: 'Eurostat, metropolitan regions: employment by activity (met_10r_3emp) and GDP (met_10r_3gdp)', seen: '2026-10-03' },
    'pl-lodz': { t: 'Eurostat counts 545,400 people in work in the Łódź metropolitan region in 2021: 23,200 in information and communication and 15,000 in finance and insurance. The region’s GDP was €18.4 billion in 2021.', tag: 'data', src: 'https://ec.europa.eu/eurostat/databrowser/view/met_10r_3emp/default/table?lang=en', by: 'Eurostat, metropolitan regions: employment by activity (met_10r_3emp) and GDP (met_10r_3gdp)', seen: '2026-10-03' },
    'pl-emp-war': { t: 'Eurostat counts 119,200 people employed in information and communication in the Warsaw metropolitan region in 2021, 24% of Poland’s 496,800 and fourth among the 25 European capital regions reported, and 113,800 in finance and insurance, 28% of 405,700 and second among them after Paris.', tag: 'data', src: 'https://ec.europa.eu/eurostat/api/dissemination/statistics/1.0/data/met_10r_3emp?format=JSON&lang=EN&metroreg=PL001MC&wstatus=EMP&nace_r2=J&nace_r2=K&time=2021', by: 'Eurostat, met_10r_3emp metropolitan regions: employment by activity, 2021 (ranking among capital metropolitan regions computed from the same table)', seen: '2026-10-03' },
    'pl-emp-krk': { t: 'Eurostat counts 65,800 people employed in information and communication in the Kraków metropolitan region in 2021 (13% of Poland’s, second after Warsaw) and 28,600 in finance and insurance, out of 844,400 in work.', tag: 'data', src: 'https://ec.europa.eu/eurostat/api/dissemination/statistics/1.0/data/met_10r_3emp?format=JSON&lang=EN&metroreg=PL003M&wstatus=EMP&nace_r2=J&nace_r2=K&time=2021', by: 'Eurostat, met_10r_3emp metropolitan regions: employment by activity, 2021', seen: '2026-10-03' },
    'pl-emp-wro': { t: 'Eurostat counts 47,800 people employed in information and communication in the Wrocław metropolitan region in 2021, fourth in Poland after Warsaw, Kraków and Katowice, and 24,200 in finance and insurance, out of 434,400 in work.', tag: 'data', src: 'https://ec.europa.eu/eurostat/api/dissemination/statistics/1.0/data/met_10r_3emp?format=JSON&lang=EN&metroreg=PL004M&wstatus=EMP&nace_r2=J&nace_r2=K&time=2021', by: 'Eurostat, met_10r_3emp metropolitan regions: employment by activity, 2021', seen: '2026-10-03' },
    'pl-ict': { t: 'In 2025 ICT specialists were 4.5% of employment in Poland (778,800 people), against 5.0% in the EU.', tag: 'data', src: 'https://ec.europa.eu/eurostat/api/dissemination/statistics/1.0/data/isoc_sks_itspt?format=JSON&lang=EN&geo=PL&time=2025', by: 'Eurostat, isoc_sks_itspt ICT specialists in employment, 2025 (updated 17 Apr 2026)', seen: '2026-10-03' },
    'pl-wage': { t: 'In 2025 the average monthly gross wage in Poland was PLN 9,371; in the city counties it was PLN 11,678 in Warsaw, 11,404 in Kraków, 10,956 in Gdańsk, 10,794 in Katowice, 10,285 in Poznań, 10,148 in Wrocław and 9,367 in Łódź.', tag: 'data', src: 'https://bdl.stat.gov.pl/api/v1/data/by-variable/64428?format=json&unit-level=5&year=2025', by: 'Statistics Poland, Local Data Bank, average monthly gross wages and salaries (variable 64428, grand total, powiat level), 2025', seen: '2026-10-03' },
    'pl-gpw': { t: 'The Warsaw Stock Exchange says it is the largest stock exchange of financial instruments in Central and Eastern Europe and has the biggest capitalisation of all exchanges in the region.', tag: 'employer-stated', src: 'https://www.gpw.pl/capital-group', by: 'GPW (Warsaw Stock Exchange), capital group page', seen: '2026-10-03' },
    'pl-gfci': { t: 'The Global Financial Centres Index 40 (September 2026) ranks Warsaw 78th of 117 centres and third in Eastern Europe and Central Asia, after Astana and Cyprus; for fintech it is 87th. Kraków is not listed.', tag: 'practitioner consensus', src: 'https://www.longfinance.net/media/documents/GFCI_40_Report_2026.09.16_v1.2.pdf', by: 'Z/Yen and Long Finance, Global Financial Centres Index 40 (September 2026), tables 1, 11 and 16', seen: '2026-10-03' },
    'pl-genome': { t: 'Startup Genome’s 2026 report puts the Warsaw ecosystem’s value at $3 billion and Kraków’s at $1 billion, against a European average of $14.3 billion.', tag: 'practitioner consensus', src: 'https://startupgenome.com/ecosystems/warsaw', by: 'Startup Genome, Global Startup Ecosystem Report 2026, Warsaw and Krakow pages', seen: '2026-10-03' },
    'pl-bolt': { t: 'Bolt names Warsaw among its four key hubs, with London, Bucharest and Berlin, around its Tallinn headquarters.', tag: 'employer-stated', src: 'https://bolt.eu/en/careers/', by: 'Bolt careers page', seen: '2026-10-03' },
    'pl-cdp': { t: 'CD PROJEKT RED S.A. gives its registered seat as ul. Jagiellońska 74, Warsaw.', tag: 'employer-stated', src: 'https://www.cdprojekt.com/en/', by: 'CD PROJEKT, investor and careers pages', seen: '2026-10-03' },
    'pl-grad-lab': { t: 'In 2025, 91.2% of Polish tertiary graduates aged 20–34 who finished within the last three years were in work (EU 85.3%), unemployment among 15-to-24-year-olds was 12.2% (EU 15.2%, Poland 11.4% in 2023) and 45.2% of 25-to-34-year-olds had a tertiary degree (EU 44.8%).', tag: 'data', src: 'https://ec.europa.eu/eurostat/api/dissemination/statistics/1.0/data/edat_lfse_24?format=JSON&lang=EN&duration=Y_LE3&isced11=ED5-8&age=Y20-34&sex=T&geo=PL&geo=EU27_2020', by: 'Eurostat, edat_lfse_24, une_rt_a and edat_lfse_03, 2025 (updated 10 Sep 2026)', seen: '2026-10-03' }
  }
});

if (window.I18N) I18N.add('it', {
  'Europe’s largest market for business-service centres: about 489,000 people work in 2,081 centres run by foreign and Polish firms, mostly in Warsaw, Kraków and Wrocław, many in Western European languages. Entry pay is modest and automation is thinning the junior rung. Non-EU graduates of Polish universities get nine months to find work.':
    'Il maggiore mercato europeo dei centri di servizi alle imprese: circa 489.000 persone lavorano in 2.081 centri gestiti da aziende estere e polacche, soprattutto a Varsavia, Cracovia e Breslavia, molti in lingue dell’Europa occidentale. Gli stipendi d’ingresso sono modesti e l’automazione assottiglia il gradino junior. I laureati extra-UE delle università polacche hanno nove mesi per trovare lavoro.',
  'Business-service and shared-service centres': 'Centri di servizi alle imprese e servizi condivisi', 'IT and software': 'IT e software',
  'Banking': 'Banca', 'Logistics': 'Logistica',
  'The most service centres, banks’ technology bases and new tech offices': 'Il maggior numero di centri servizi, le basi tecnologiche delle banche e nuovi uffici tech',
  'Business services': 'Servizi alle imprese', 'Banking technology': 'Tecnologia bancaria', 'Software': 'Software', 'Consulting': 'Consulenza',
  'technology and engineering base': 'base di tecnologia e ingegneria', 'Warsaw office opened September 2026': 'ufficio di Varsavia aperto a settembre 2026',
  'Service centres in IT, risk and multilingual operations': 'Centri servizi per IT, rischio e attività multilingue', 'IT': 'IT', 'Risk and operations': 'Rischio e operations',
  'risk, business analysis and IT support in 11 languages': 'rischio, analisi di business e supporto IT in 11 lingue',
  'Service centres with lower rents': 'Centri servizi con affitti più bassi', 'Business-service centres': 'Centri di servizi alle imprese', '258 in the city': '258 in città',
  '§4–6 Polish service centres: scale, Italians in the workforce, pay, language premiums, automation, rent':
    '§4–6 Centri servizi polacchi: dimensioni, italiani tra i dipendenti, stipendi, indennità linguistiche, automazione, affitti',
  '§8 Poland as a home market': '§8 La Polonia come mercato di origine',
  'Client-facing banking and consulting entry in Warsaw is unresearched.': 'L’ingresso nella banca e nella consulenza a contatto con i clienti a Varsavia non è stato ricercato.',
  'At the end of Q1 2025, 488,700 people worked in 2,081 business-service centres in Poland; Warsaw has 429 centres, Kraków 324 and Wrocław 258, and Warsaw and Kraków each employ more than 100,000.':
    'Alla fine del 1° trimestre 2025, 488.700 persone lavoravano in 2.081 centri di servizi alle imprese in Polonia; Varsavia ha 429 centri, Cracovia 324 e Breslavia 258, e Varsavia e Cracovia impiegano ciascuna oltre 100.000 persone.',
  'Kraków’s service centres employed nearly 108,000 people in Q1 2025, and new centres opened in Poland since 2024 were mostly in IT (42.6%) and R&D (26.2%).':
    'Nel 1° trimestre 2025 i centri servizi di Cracovia impiegavano quasi 108.000 persone, e i nuovi centri aperti in Polonia dal 2024 erano soprattutto nell’IT (42,6%) e in R&S (26,2%).',
  'HSBC’s Kraków centre covers risk, business analysis and IT application support across 27 countries and works in 11 languages, including Italian, German and French.':
    'Il centro HSBC di Cracovia si occupa di rischio, analisi di business e supporto alle applicazioni IT per 27 paesi e lavora in 11 lingue, tra cui italiano, tedesco e francese.',
  'Goldman Sachs uses Warsaw as a technology and engineering base.': 'Goldman Sachs usa Varsavia come base di tecnologia e ingegneria.',
  'Bending Spoons opened a Warsaw office in September 2026 and received about 50,000 applications from Poland in the first nine months of 2026.':
    'Bending Spoons ha aperto un ufficio a Varsavia a settembre 2026 e ha ricevuto circa 50.000 candidature dalla Polonia nei primi nove mesi del 2026.',
  'Foreigners are 19.6% of centre staff, and Italians 8.3% of those; most centres pay a monthly language allowance of PLN 600 to 2,000.':
    'Gli stranieri sono il 19,6% del personale dei centri, e gli italiani l’8,3% di questi; la maggior parte dei centri paga un’indennità linguistica mensile da 600 a 2.000 PLN.',
  '74.1% of centres use intelligent process automation, and Big Four partners in Poland describe junior transactional roles shrinking.':
    'Il 74,1% dei centri usa l’automazione intelligente dei processi, e i partner delle Big Four in Polonia descrivono una riduzione dei ruoli junior transazionali.',
  'A junior specialist in a Polish centre earned a mean base of €1,744 a month in 2024; at the average wage a single worker keeps 71.7% of gross.':
    'Nel 2024 uno specialista junior in un centro polacco guadagnava una base media di 1.744 € al mese; con il salario medio un lavoratore single tiene il 71,7% del lordo.',
  'On that pay, a central one-bed leaves about €190 a month in Warsaw and about €500 in Wrocław.':
    'Con quello stipendio, un bilocale in centro lascia circa 190 € al mese a Varsavia e circa 500 € a Breslavia.',
  'Poland’s second metropolitan region for finance jobs, third for information and communication':
    'La seconda regione metropolitana polacca per posti in finanza, terza per informazione e comunicazione',
  'Business services centres':
    'Centri di servizi alle imprese',
  'Information and communication employers':
    'I datori di lavoro dell’informazione e comunicazione',
  '49,400 jobs (2021)':
    '49.400 posti (2021)',
  'Finance and insurance employers':
    'I datori di lavoro di finanza e assicurazioni',
  '31,600 jobs (2021)':
    '31.600 posti (2021)',
  'The Baltic port metropolis of Gdańsk, Gdynia and Sopot':
    'La metropoli portuale baltica di Danzica, Gdynia e Sopot',
  'Ports and logistics':
    'Porti e logistica',
  '32,000 jobs (2021)':
    '32.000 posti (2021)',
  '20,000 jobs (2021)':
    '20.000 posti (2021)',
  'A western business-services and trade city':
    'Una città occidentale di servizi alle imprese e commercio',
  '26,800 jobs (2021)':
    '26.800 posti (2021)',
  '18,700 jobs (2021)':
    '18.700 posti (2021)',
  'A central city of business-services centres and logistics':
    'Una città centrale di centri di servizi alle imprese e logistica',
  '23,200 jobs (2021)':
    '23.200 posti (2021)',
  '15,000 jobs (2021)':
    '15.000 posti (2021)',
  'Eurostat counts 1,186,600 people in work in the Katowice metropolitan region in 2021: 49,400 in information and communication (third in Poland, after Warsaw and Kraków) and 31,600 in finance and insurance (second in Poland, after Warsaw). The region’s GDP was €44.6 billion in 2021.':
    'Eurostat conta 1.186.600 occupati nella regione metropolitana di Katowice nel 2021: 49.400 nell’informazione e comunicazione (terza in Polonia, dopo Varsavia e Cracovia) e 31.600 in finanza e assicurazioni (seconda in Polonia, dopo Varsavia). Il PIL della regione era di 44,6 miliardi di € nel 2021.',
  'Eurostat counts 657,000 people in work in the Gdańsk metropolitan region in 2021: 32,000 in information and communication and 20,000 in finance and insurance. The region’s GDP was €23.8 billion in 2021.':
    'Eurostat conta 657.000 occupati nella regione metropolitana di Danzica nel 2021: 32.000 nell’informazione e comunicazione e 20.000 in finanza e assicurazioni. Il PIL della regione era di 23,8 miliardi di € nel 2021.',
  'Eurostat counts 701,400 people in work in the Poznań metropolitan region in 2021: 26,800 in information and communication and 18,700 in finance and insurance. The region’s GDP was €28.6 billion in 2021.':
    'Eurostat conta 701.400 occupati nella regione metropolitana di Poznań nel 2021: 26.800 nell’informazione e comunicazione e 18.700 in finanza e assicurazioni. Il PIL della regione era di 28,6 miliardi di € nel 2021.',
  'Eurostat counts 545,400 people in work in the Łódź metropolitan region in 2021: 23,200 in information and communication and 15,000 in finance and insurance. The region’s GDP was €18.4 billion in 2021.':
    'Eurostat conta 545.400 occupati nella regione metropolitana di Łódź nel 2021: 23.200 nell’informazione e comunicazione e 15.000 in finanza e assicurazioni. Il PIL della regione era di 18,4 miliardi di € nel 2021.',
  'No family is rated in Gdańsk, Poznań or Łódź: the Eurostat figures read do not put them second or third in the country for finance or information-and-communication jobs.':
    'Nessuna famiglia è valutata a Danzica, Poznań o Łódź: i dati Eurostat letti non le collocano al secondo o terzo posto nel paese per posti in finanza o in informazione e comunicazione.',
  'Hubs added on 3 October 2026 are rated only from Eurostat’s 2021–22 metropolitan employment counts: strong means second or third in the country for jobs in finance and insurance, or in information and communication, with at least 5,000 such jobs.':
    'I poli aggiunti il 3 ottobre 2026 sono valutati solo dai conteggi Eurostat 2021–22 sull’occupazione metropolitana: forte significa seconda o terza regione del paese per posti in finanza e assicurazioni, o in informazione e comunicazione, con almeno 5.000 posti di quel tipo.',
  'Warsaw, Kraków, Wrocław and Katowice are rated from Eurostat’s 2021 metropolitan employment counts and ABSL’s 2025 centre counts; ABSL’s functional split by city, and its 2026 report (Q1 2026), were not read, so finance, accounting and IT are not rated separately inside the centres.':
    'Varsavia, Cracovia, Breslavia e Katowice sono valutate dai conteggi Eurostat 2021 sull’occupazione metropolitana e da quelli ABSL 2025 sui centri; la ripartizione per funzione e città dell’ABSL e il suo rapporto 2026 (1° trimestre 2026) non sono stati letti, quindi finanza, contabilità e IT non sono valutate a parte all’interno dei centri.',
  'Named employers outside the service-centre sector (banks, PKO Bank Polski, Allegro, Comarch, InPost) could not be placed in a city from their own pages and are not listed; the Warsaw Stock Exchange’s own page gives no listing count.':
    'I datori di lavoro citati fuori dai centri di servizi (banche, PKO Bank Polski, Allegro, Comarch, InPost) non si sono potuti collocare in una città dalle loro pagine e non sono elencati; la pagina della Borsa di Varsavia non indica il numero di società quotate.',
  'Gdańsk, Poznań and Łódź carry a standing for IT but no demand rating: the Eurostat counts put them fifth to seventh in the country.':
    'Danzica, Poznań e Łódź hanno un posizionamento per l’IT ma nessuna valutazione della domanda: i conteggi Eurostat le collocano dalla quinta alla settima posizione nel paese.',
  'one of its key hubs, with the Tallinn headquarters':
    'uno dei poli principali, insieme alla sede centrale di Tallinn',
  'games developer, registered in Warsaw':
    'sviluppatore di videogiochi, con sede legale a Varsavia',
  'the largest exchange in Central and Eastern Europe':
    'la maggiore borsa dell’Europa centrale e orientale',
  'nearly 108,000 people in Q1 2025':
    'quasi 108.000 persone nel 1° trimestre 2025',
  '47,800 jobs (2021)':
    '47.800 posti (2021)',
  'Finance':
    'Finanza',
  'Pay by city':
    'Stipendi per città',
  'Graduate labour market':
    'Mercato del lavoro per i laureati',
  'Country brief: hubs, employers, pay and standing':
    'Dossier paese: poli, datori di lavoro, stipendi e posizionamento',
  'Eurostat counts 119,200 people employed in information and communication in the Warsaw metropolitan region in 2021, 24% of Poland’s 496,800 and fourth among the 25 European capital regions reported, and 113,800 in finance and insurance, 28% of 405,700 and second among them after Paris.':
    'Eurostat conta 119.200 occupati nell’informazione e comunicazione nella regione metropolitana di Varsavia nel 2021, il 24% dei 496.800 della Polonia e la quarta tra le 25 regioni delle capitali europee rilevate, e 113.800 in finanza e assicurazioni, il 28% di 405.700 e la seconda tra queste dopo Parigi.',
  'Eurostat counts 65,800 people employed in information and communication in the Kraków metropolitan region in 2021 (13% of Poland’s, second after Warsaw) and 28,600 in finance and insurance, out of 844,400 in work.':
    'Eurostat conta 65.800 occupati nell’informazione e comunicazione nella regione metropolitana di Cracovia nel 2021 (il 13% della Polonia, seconda dopo Varsavia) e 28.600 in finanza e assicurazioni, su 844.400 occupati.',
  'Eurostat counts 47,800 people employed in information and communication in the Wrocław metropolitan region in 2021, fourth in Poland after Warsaw, Kraków and Katowice, and 24,200 in finance and insurance, out of 434,400 in work.':
    'Eurostat conta 47.800 occupati nell’informazione e comunicazione nella regione metropolitana di Breslavia nel 2021, quarta in Polonia dopo Varsavia, Cracovia e Katowice, e 24.200 in finanza e assicurazioni, su 434.400 occupati.',
  'In 2025 ICT specialists were 4.5% of employment in Poland (778,800 people), against 5.0% in the EU.':
    'Nel 2025 gli specialisti ICT erano il 4,5% dell’occupazione in Polonia (778.800 persone), contro il 5,0% nell’UE.',
  'In 2025 the average monthly gross wage in Poland was PLN 9,371; in the city counties it was PLN 11,678 in Warsaw, 11,404 in Kraków, 10,956 in Gdańsk, 10,794 in Katowice, 10,285 in Poznań, 10,148 in Wrocław and 9,367 in Łódź.':
    'Nel 2025 la retribuzione lorda mensile media in Polonia era di 9.371 PLN; nelle città-contea era di 11.678 PLN a Varsavia, 11.404 a Cracovia, 10.956 a Danzica, 10.794 a Katowice, 10.285 a Poznań, 10.148 a Breslavia e 9.367 a Łódź.',
  'The Warsaw Stock Exchange says it is the largest stock exchange of financial instruments in Central and Eastern Europe and has the biggest capitalisation of all exchanges in the region.':
    'La Borsa di Varsavia dichiara di essere la maggiore borsa di strumenti finanziari dell’Europa centrale e orientale e di avere la maggiore capitalizzazione tra tutte le borse della regione.',
  'The Global Financial Centres Index 40 (September 2026) ranks Warsaw 78th of 117 centres and third in Eastern Europe and Central Asia, after Astana and Cyprus; for fintech it is 87th. Kraków is not listed.':
    'Il Global Financial Centres Index 40 (settembre 2026) colloca Varsavia al 78º posto su 117 centri e al terzo in Europa orientale e Asia centrale, dopo Astana e Cipro; per il fintech è all’87º posto. Cracovia non è elencata.',
  'Startup Genome’s 2026 report puts the Warsaw ecosystem’s value at $3 billion and Kraków’s at $1 billion, against a European average of $14.3 billion.':
    'Il rapporto 2026 di Startup Genome stima il valore dell’ecosistema di Varsavia in 3 miliardi di dollari e quello di Cracovia in 1 miliardo, contro una media europea di 14,3 miliardi.',
  'Bolt names Warsaw among its four key hubs, with London, Bucharest and Berlin, around its Tallinn headquarters.':
    'Bolt cita Varsavia tra i suoi quattro poli principali, con Londra, Bucarest e Berlino, attorno alla sede centrale di Tallinn.',
  'CD PROJEKT RED S.A. gives its registered seat as ul. Jagiellońska 74, Warsaw.':
    'CD PROJEKT RED S.A. indica come sede legale ul. Jagiellońska 74, Varsavia.',
  'In 2025, 91.2% of Polish tertiary graduates aged 20–34 who finished within the last three years were in work (EU 85.3%), unemployment among 15-to-24-year-olds was 12.2% (EU 15.2%, Poland 11.4% in 2023) and 45.2% of 25-to-34-year-olds had a tertiary degree (EU 44.8%).':
    'Nel 2025 il 91,2% dei laureati polacchi di 20–34 anni che avevano finito gli studi da meno di tre anni lavorava (UE 85,3%), la disoccupazione tra i 15-24enni era del 12,2% (UE 15,2%, Polonia 11,4% nel 2023) e il 45,2% dei 25-34enni aveva una laurea (UE 44,8%).',
  'PKO Bank Polski opened recruitment for the second edition of its paid branch internship on 7 May 2026; the internship ran from 1 July to 30 September 2026 in branches in 20 cities.':
    'PKO Bank Polski ha aperto il 7 maggio 2026 la selezione per la seconda edizione del suo tirocinio retribuito in filiale; il tirocinio si è svolto dal 1° luglio al 30 settembre 2026 in filiali di 20 città.',
  'KPMG Poland’s World of Audit held workshops on 8, 15 and 22 October and guarantees those who complete them a paid full-time audit internship starting in January; recruitment to the programme has ended for this year.':
    'Il World of Audit di KPMG Polonia ha tenuto workshop l’8, il 15 e il 22 ottobre e garantisce a chi li completa un tirocinio retribuito a tempo pieno in revisione con inizio a gennaio; la selezione per il programma è finita per quest’anno.',
  'PwC Poland’s three-month All-Techclusive internship runs from early July to the end of September; recruitment for summer 2026 has closed.':
    'Il tirocinio di tre mesi All-Techclusive di PwC Polonia va da inizio luglio a fine settembre; la selezione per l’estate 2026 è chiusa.',
  'The University of Warsaw’s autumn 2026 fairs are Psychological Career Days on 13 to 15 October, the Faculty of Management career day on 20 and 21 October and an IT job fair on 28 October; past years also had spring fairs in March and a public-sector day in May.':
    'Le fiere d’autunno 2026 dell’Università di Varsavia sono i Giorni della carriera di psicologia dal 13 al 15 ottobre, la giornata della carriera della Facoltà di Management il 20 e 21 ottobre e una fiera del lavoro IT il 28 ottobre; negli anni scorsi si sono tenute anche fiere primaverili a marzo e una giornata del settore pubblico a maggio.'
});
