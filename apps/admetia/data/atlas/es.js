/* Atlas record: Spain. Read 2 October 2026; log P39
 * (research/verification/round-4b.md; round 5, 3 October 2026:
 * research/verification/round-5b.md). Permits, Beckham and pay are the
 * library's (places/iberia-and-nordics.md, verified 2 Oct 2026).
 * Round 5 added: Eurostat Labour Force Survey job counts by autonomous community,
 * hub metrics (Eurostat metropolitan population and GDP, INE regional pay),
 * standing, rankings (GFCI 40, GSER 2026, StartupBlink via ACCIÓ) and named
 * employers (Global LEI Index headquarters addresses). */

ATLAS.add({
  id: 'ES',
  checked: '2026-10-03',
  log: 'P39',
  summary: 'Madrid holds most corporate and bank headquarters and is where the large graduate programmes start; Barcelona has southern Europe’s largest start-up scene. Entry pay is low against big-city rents outside consulting, banking and tech, but non-EU graduates have one of Europe’s simplest switches from study to work.',
  sectors: [
    'Banking',
    'Telecoms and energy',
    'Corporate headquarters',
    'Start-ups and tech',
    'Tourism'
  ],
  roles: ['business', 'finance', 'software'],
  hubs: [
    {
      id: 'madrid', name: 'Madrid', lat: 40.42, lon: -3.70,
      knownFor: 'Corporate and bank headquarters',
      why: ['es-mad', 'es-mad-lfs', 'es-gfci', 'es-mad-gser'],
      sectors: ['Banking', 'Telecoms', 'Energy', 'Consulting', 'Public sector'],
      employers: [
        { name: 'Santander, BBVA, Bankinter', note: 'banks with operational centres in Madrid', c: 'es-mad' },
        { name: 'Santander Graduate Program', note: 'headquarters programme starts in Madrid', c: 'es-santander' },
        { name: 'Telefónica', note: 'telecoms group, headquarters on Gran Vía', c: 'es-e-telefonica' },
        { name: 'Repsol', note: 'energy group, headquarters on Calle Méndez Álvaro', c: 'es-e-repsol' },
        { name: 'Amadeus', note: 'travel-technology company, headquarters in Madrid', c: 'es-e-amadeus' },
        { name: 'Endesa', note: 'electricity company, headquarters on Calle Ribera del Loira', c: 'es-e-endesa' },
        { name: 'Banco de España', note: 'central bank, headquarters on Calle de Alcalá', c: 'es-e-bde' },
        { name: 'Bolsas y Mercados Españoles', note: 'stock-exchange operator, headquarters at Plaza de la Lealtad', c: 'es-e-bme' }
      ],
      demand: {
        business: ['dominant', 'es-mad', 'es-mad-lfs'],
        finance: ['dominant', 'es-mad', 'es-mad-lfs', 'es-santander'],
        it: ['dominant', 'es-mad-lfs', 'es-e-telefonica'],
        software: ['strong', 'es-mad-lfs', 'es-mad-gser', 'es-e-amadeus'],
        economics: 'gap', accounting: 'gap', management: 'gap', marketing: 'gap', logistics: 'gap', analytics: 'gap', datasci: 'gap', ai: 'gap', cs: 'gap', bigdata: 'gap'
      },
      finance: {
        banking: ['strong', 'es-mad', 'es-santander'],
        ib: 'gap', am: 'gap', pe: 'gap', vc: 'gap', corpfin: 'gap', risk: 'gap', finconsult: 'gap'
      },
      standing: [
        { f: 'finance', s: [5, 3, 2], c: ['es-mad-lfs', 'es-gfci', 'es-mad'] },
        { f: 'it', s: [5, 3, 2], c: ['es-mad-lfs', 'es-mad-gser', 'es-bcn-blink'] },
        { f: 'software', s: [5, 3, 2], c: ['es-mad-lfs', 'es-mad-gser', 'es-bcn-blink'] },
        { f: 'business', s: [5, 3, 2], c: ['es-mad', 'es-mad-lfs'] }
      ],
      metrics: {
        pop: { v: 6871903, year: 2023, area: 'metro', tag: 'data', src: 'https://ec.europa.eu/eurostat/databrowser/view/met_pjanaggr3/default/table?lang=en', by: 'Eurostat, metropolitan regions: population on 1 January (met_pjanaggr3), Madrid metropolitan region', seen: '2026-10-03' },
        gdp: { v: 237.5, cur: 'EUR', year: 2021, area: 'metro', tag: 'data', src: 'https://ec.europa.eu/eurostat/databrowser/view/met_10r_3gdp/default/table?lang=en', by: 'Eurostat, metropolitan regions: GDP at current market prices (met_10r_3gdp), Madrid, EUR million ÷ 1,000', seen: '2026-10-03' },
        wage: { v: 2868, cur: 'EUR', basis: 'mean', year: 2024, area: 'region', tag: 'data', src: 'https://www.ine.es/jaxiT3/Tabla.htm?t=28191', by: 'INE, Encuesta Anual de Estructura Salarial 2024, mean gross annual earnings per worker, Comunidad de Madrid (autonomous community), annual ÷ 12; covers all employees, including part-time', seen: '2026-10-03' }
      },
      programmes: [
        { calc: 'masters', track: 'mim', id: 'ie-mim', name: 'IE Business School — Master in Management' },
        { calc: 'masters', track: 'marketing', id: 'ie-mdm', name: 'IE Business School — Master in Digital Marketing' },
        { calc: 'mba', name: 'IE Business School (MBA)' }
      ]
    },
    {
      id: 'barcelona', name: 'Barcelona', lat: 41.39, lon: 2.17,
      knownFor: 'Start-ups, tech hubs and health ventures',
      why: ['es-bcn', 'es-cat-lfs', 'es-bcn-gser', 'es-bcn-blink'],
      sectors: ['Start-ups', 'Software', 'Health tech', 'Tourism'],
      employers: [
        { t: 'Catalonia’s start-ups', note: '2,403 companies, more than 30,500 jobs', c: 'es-bcn' },
        { name: 'Glovo', note: 'delivery platform, headquarters on Calle Llull', c: 'es-e-glovo' },
        { name: 'SEAT', note: 'carmaker, headquarters at Martorell', c: 'es-e-seat' },
        { name: 'Banco Sabadell', note: 'bank, headquarters at Sabadell', c: 'es-e-sabadell' }
      ],
      demand: {
        software: ['strong', 'es-bcn', 'es-cat-lfs', 'es-bcn-gser'],
        business: ['present', 'es-e-seat'],
        finance: ['present', 'es-e-sabadell'],
        it: ['strong', 'es-cat-lfs', 'es-bcn-gser'],
        economics: 'gap', accounting: 'gap', management: 'gap', marketing: 'gap', logistics: 'gap', analytics: 'gap', datasci: 'gap', ai: 'gap', cs: 'gap', bigdata: 'gap'
      },
      finance: {
        vc: ['present', 'es-bcn'],
        banking: 'gap', ib: 'gap', am: 'gap', pe: 'gap', corpfin: 'gap', risk: 'gap', finconsult: 'gap'
      },
      standing: [
        { f: 'software', s: [4, 3, 2], c: ['es-cat-lfs', 'es-bcn-gser', 'es-bcn-blink'] },
        { f: 'it', s: [4, 3, 2], c: ['es-cat-lfs', 'es-bcn-gser', 'es-bcn-blink'] }
      ],
      metrics: {
        pop: { v: 5797356, year: 2023, area: 'metro', tag: 'data', src: 'https://ec.europa.eu/eurostat/databrowser/view/met_pjanaggr3/default/table?lang=en', by: 'Eurostat, metropolitan regions: population on 1 January (met_pjanaggr3), Barcelona metropolitan region', seen: '2026-10-03' },
        gdp: { v: 173.7, cur: 'EUR', year: 2021, area: 'metro', tag: 'data', src: 'https://ec.europa.eu/eurostat/databrowser/view/met_10r_3gdp/default/table?lang=en', by: 'Eurostat, metropolitan regions: GDP at current market prices (met_10r_3gdp), Barcelona, EUR million ÷ 1,000', seen: '2026-10-03' },
        wage: { v: 2644, cur: 'EUR', basis: 'mean', year: 2024, area: 'region', tag: 'data', src: 'https://www.ine.es/jaxiT3/Tabla.htm?t=28191', by: 'INE, Encuesta Anual de Estructura Salarial 2024, mean gross annual earnings per worker, Cataluña (autonomous community), annual ÷ 12; covers all employees, including part-time', seen: '2026-10-03' }
      },
      programmes: [
        { calc: 'masters', track: 'mim', id: 'esade-mim', name: 'Esade — MSc International Management' },
        { calc: 'masters', track: 'mif', id: 'esade-fin', name: 'Esade — MSc Finance' },
        { calc: 'masters', track: 'marketing', id: 'esade-mkt', name: 'Esade — MSc Marketing Management' },
        { calc: 'masters', track: 'mim', id: 'iese-mim', name: 'IESE — MiM' },
        { calc: 'mba', name: 'IESE (MBA)' },
        { calc: 'mba', name: 'ESADE (MBA)' }
      ]
    },
    {
      id: 'valencia', name: 'Valencia', lat: 39.47, lon: -0.38,
      knownFor: 'Spain’s third metropolitan region, about a million jobs',
      why: ['es-valencia', 'es-val-lfs', 'es-val-gser'],
      sectors: ['Ports and logistics', 'Automotive', 'Tourism'],
      employers: [
        { t: 'Employers in the metropolitan region', note: '1,038,000 jobs (2021)', c: 'es-valencia' },
        { name: 'CaixaBank', note: 'bank, registered headquarters in Valencia', c: 'es-e-caixabank' },
        { name: 'Mercadona', note: 'supermarket chain, headquarters at Albalat dels Sorells', c: 'es-e-mercadona' },
        { name: 'Port of Valencia', note: 'port authority, headquarters in Valencia', c: 'es-e-valenciaport' }
      ],
      demand: {
        business: ['present', 'es-e-mercadona'],
        finance: ['present', 'es-e-caixabank'],
        logistics: ['present', 'es-e-valenciaport'],
        economics: 'gap', accounting: 'gap', management: 'gap', marketing: 'gap', analytics: 'gap', it: 'gap', software: 'gap', datasci: 'gap', ai: 'gap', cs: 'gap', bigdata: 'gap'
      },
      standing: [
        { f: 'logistics', s: [3, 2, 1], c: ['es-e-valenciaport', 'es-valencia'] }
      ],
      metrics: {
        pop: { v: 2656841, year: 2023, area: 'metro', tag: 'data', src: 'https://ec.europa.eu/eurostat/databrowser/view/met_pjanaggr3/default/table?lang=en', by: 'Eurostat, metropolitan regions: population on 1 January (met_pjanaggr3), Valencia metropolitan region', seen: '2026-10-03' },
        gdp: { v: 61.4, cur: 'EUR', year: 2021, area: 'metro', tag: 'data', src: 'https://ec.europa.eu/eurostat/databrowser/view/met_10r_3gdp/default/table?lang=en', by: 'Eurostat, metropolitan regions: GDP at current market prices (met_10r_3gdp), Valencia, EUR million ÷ 1,000', seen: '2026-10-03' },
        wage: { v: 2235, cur: 'EUR', basis: 'mean', year: 2024, area: 'region', tag: 'data', src: 'https://www.ine.es/jaxiT3/Tabla.htm?t=28191', by: 'INE, Encuesta Anual de Estructura Salarial 2024, mean gross annual earnings per worker, Comunitat Valenciana (autonomous community), annual ÷ 12; covers all employees, including part-time', seen: '2026-10-03' }
      },
      programmes: []
    },
    {
      id: 'seville', name: 'Seville', lat: 37.39, lon: -5.98,
      knownFor: 'Andalusia’s capital',
      why: ['es-seville', 'es-and-lfs'],
      sectors: ['Aerospace', 'Tourism', 'Public sector'],
      employers: [
        { t: 'Employers in the metropolitan region', note: '727,000 jobs (2021)', c: 'es-seville' },
        { name: 'Abengoa', note: 'engineering group, headquarters at Palmas Altas', c: 'es-e-abengoa' },
        { name: 'Heineken España', note: 'brewer, headquarters in Seville', c: 'es-e-heineken' }
      ],
      demand: {
        business: ['present', 'es-e-abengoa'],
        finance: 'gap', economics: 'gap', accounting: 'gap', management: 'gap', marketing: 'gap', logistics: 'gap', analytics: 'gap', it: 'gap', software: 'gap', datasci: 'gap', ai: 'gap', cs: 'gap', bigdata: 'gap'
      },
      standing: [
        { f: 'business', s: [3, 2, 1], c: ['es-seville', 'es-and-lfs', 'es-e-abengoa'] }
      ],
      metrics: {
        pop: { v: 1959394, year: 2023, area: 'metro', tag: 'data', src: 'https://ec.europa.eu/eurostat/databrowser/view/met_pjanaggr3/default/table?lang=en', by: 'Eurostat, metropolitan regions: population on 1 January (met_pjanaggr3), Sevilla metropolitan region', seen: '2026-10-03' },
        gdp: { v: 40.7, cur: 'EUR', year: 2021, area: 'metro', tag: 'data', src: 'https://ec.europa.eu/eurostat/databrowser/view/met_10r_3gdp/default/table?lang=en', by: 'Eurostat, metropolitan regions: GDP at current market prices (met_10r_3gdp), Sevilla, EUR million ÷ 1,000', seen: '2026-10-03' },
        wage: { v: 2174, cur: 'EUR', basis: 'mean', year: 2024, area: 'region', tag: 'data', src: 'https://www.ine.es/jaxiT3/Tabla.htm?t=28191', by: 'INE, Encuesta Anual de Estructura Salarial 2024, mean gross annual earnings per worker, Andalucía (autonomous community), annual ÷ 12; covers all employees, including part-time', seen: '2026-10-03' }
      },
      programmes: []
    },
    {
      id: 'malaga', name: 'Málaga', lat: 36.72, lon: -4.42,
      knownFor: 'A coastal metropolitan region growing a tech cluster',
      why: ['es-malaga', 'es-and-lfs'],
      sectors: ['Technology', 'Tourism', 'Retail'],
      employers: [
        { t: 'Employers in the metropolitan region', note: '616,000 jobs (2021)', c: 'es-malaga' },
        { name: 'Unicaja Banco', note: 'bank, headquarters on Avenida de Andalucía', c: 'es-e-unicaja' }
      ],
      demand: {
        finance: ['present', 'es-e-unicaja'],
        business: 'gap', economics: 'gap', accounting: 'gap', management: 'gap', marketing: 'gap', logistics: 'gap', analytics: 'gap', it: 'gap', software: 'gap', datasci: 'gap', ai: 'gap', cs: 'gap', bigdata: 'gap'
      },
      standing: [
        { f: 'finance', s: [3, 2, 1], c: ['es-e-unicaja', 'es-malaga'] }
      ],
      metrics: {
        pop: { v: 1752728, year: 2023, area: 'metro', tag: 'data', src: 'https://ec.europa.eu/eurostat/databrowser/view/met_pjanaggr3/default/table?lang=en', by: 'Eurostat, metropolitan regions: population on 1 January (met_pjanaggr3), Málaga - Marbella metropolitan region', seen: '2026-10-03' },
        gdp: { v: 30.8, cur: 'EUR', year: 2021, area: 'metro', tag: 'data', src: 'https://ec.europa.eu/eurostat/databrowser/view/met_10r_3gdp/default/table?lang=en', by: 'Eurostat, metropolitan regions: GDP at current market prices (met_10r_3gdp), Málaga - Marbella, EUR million ÷ 1,000', seen: '2026-10-03' },
        wage: { v: 2174, cur: 'EUR', basis: 'mean', year: 2024, area: 'region', tag: 'data', src: 'https://www.ine.es/jaxiT3/Tabla.htm?t=28191', by: 'INE, Encuesta Anual de Estructura Salarial 2024, mean gross annual earnings per worker, Andalucía (autonomous community), annual ÷ 12; covers all employees, including part-time', seen: '2026-10-03' }
      },
      programmes: []
    },
    {
      id: 'bilbao', name: 'Bilbao', lat: 43.26, lon: -2.93,
      knownFor: 'The Basque Country’s industrial and banking city',
      why: ['es-bilbao', 'es-pv-lfs', 'es-bil-gser'],
      sectors: ['Banking', 'Energy', 'Manufacturing'],
      employers: [
        { t: 'Employers in the metropolitan region', note: '512,000 jobs (2021)', c: 'es-bilbao' },
        { name: 'BBVA', note: 'bank, registered headquarters at Plaza de San Nicolás', c: 'es-e-bbva' },
        { name: 'Iberdrola', note: 'electricity group, headquarters in the Torre Iberdrola', c: 'es-e-iberdrola' },
        { name: 'Kutxabank', note: 'bank, headquarters on Gran Vía', c: 'es-e-kutxabank' }
      ],
      demand: {
        business: ['present', 'es-e-iberdrola'],
        finance: ['strong', 'es-e-bbva', 'es-e-kutxabank'],
        economics: 'gap', accounting: 'gap', management: 'gap', marketing: 'gap', logistics: 'gap', analytics: 'gap', it: 'gap', software: 'gap', datasci: 'gap', ai: 'gap', cs: 'gap', bigdata: 'gap'
      },
      standing: [
        { f: 'finance', s: [3, 2, 1], c: ['es-e-bbva', 'es-e-kutxabank', 'es-pv-lfs'] }
      ],
      metrics: {
        pop: { v: 1153282, year: 2023, area: 'metro', tag: 'data', src: 'https://ec.europa.eu/eurostat/databrowser/view/met_pjanaggr3/default/table?lang=en', by: 'Eurostat, metropolitan regions: population on 1 January (met_pjanaggr3), Bilbao metropolitan region', seen: '2026-10-03' },
        gdp: { v: 35.4, cur: 'EUR', year: 2021, area: 'metro', tag: 'data', src: 'https://ec.europa.eu/eurostat/databrowser/view/met_10r_3gdp/default/table?lang=en', by: 'Eurostat, metropolitan regions: GDP at current market prices (met_10r_3gdp), Bilbao, EUR million ÷ 1,000', seen: '2026-10-03' },
        wage: { v: 2931, cur: 'EUR', basis: 'mean', year: 2024, area: 'region', tag: 'data', src: 'https://www.ine.es/jaxiT3/Tabla.htm?t=28191', by: 'INE, Encuesta Anual de Estructura Salarial 2024, mean gross annual earnings per worker, País Vasco (autonomous community), annual ÷ 12; covers all employees, including part-time', seen: '2026-10-03' }
      },
      programmes: []
    },
    {
      id: 'zaragoza', name: 'Zaragoza', lat: 41.65, lon: -0.88,
      knownFor: 'Aragon’s capital, a logistics and car-making centre',
      why: ['es-zaragoza', 'es-ara-lfs'],
      sectors: ['Logistics', 'Automotive', 'Agriculture and food'],
      employers: [
        { t: 'Employers in the metropolitan region', note: '445,000 jobs (2021)', c: 'es-zaragoza' },
        { name: 'Pikolin', note: 'mattress maker, headquarters in the logistics platform', c: 'es-e-pikolin' },
        { name: 'Saica Pack', note: 'packaging maker, headquarters in Zaragoza', c: 'es-e-saica' }
      ],
      demand: {
        business: ['present', 'es-e-pikolin'],
        finance: 'gap', economics: 'gap', accounting: 'gap', management: 'gap', marketing: 'gap', logistics: 'gap', analytics: 'gap', it: 'gap', software: 'gap', datasci: 'gap', ai: 'gap', cs: 'gap', bigdata: 'gap'
      },
      standing: [
        { f: 'business', s: [3, 2, 1], c: ['es-zaragoza', 'es-e-pikolin', 'es-e-saica'] }
      ],
      metrics: {
        pop: { v: 979365, year: 2023, area: 'metro', tag: 'data', src: 'https://ec.europa.eu/eurostat/databrowser/view/met_pjanaggr3/default/table?lang=en', by: 'Eurostat, metropolitan regions: population on 1 January (met_pjanaggr3), Zaragoza metropolitan region', seen: '2026-10-03' },
        gdp: { v: 27.9, cur: 'EUR', year: 2021, area: 'metro', tag: 'data', src: 'https://ec.europa.eu/eurostat/databrowser/view/met_10r_3gdp/default/table?lang=en', by: 'Eurostat, metropolitan regions: GDP at current market prices (met_10r_3gdp), Zaragoza, EUR million ÷ 1,000', seen: '2026-10-03' },
        wage: { v: 2338, cur: 'EUR', basis: 'mean', year: 2024, area: 'region', tag: 'data', src: 'https://www.ine.es/jaxiT3/Tabla.htm?t=28191', by: 'INE, Encuesta Anual de Estructura Salarial 2024, mean gross annual earnings per worker, Aragón (autonomous community), annual ÷ 12; covers all employees, including part-time', seen: '2026-10-03' }
      },
      programmes: []
    }
  ],
  work: [
    { k: 'Language', c: ['es-lang'] },
    { k: 'Pay after rent', c: ['es-pay'] },
    { k: 'Where demand is now', c: ['es-mad-lfs', 'es-cat-lfs'] },
    { k: 'Graduate labour market', c: ['es-grad-emp', 'es-unemp'] },
    { k: 'Recruiting calendar', c: ['es-cal-santander', 'es-cal-kpmg', 'es-cal-fairs'] },
    { k: 'Tax and net pay', c: ['es-beckham'] }
  ],
  briefs: [
    ['countries/es-spain.md', 'Country brief: hubs, employers, pay and standing'],
    ['places/iberia-and-nordics.md', 'Spain: pay after rent, Beckham regime, permits, Santander and other programmes'],
    ['places/visas-and-work-rights.md', '§6 Spain'],
    ['money/salaries-and-roi.md', '§5 Madrid net pay']
  ],
  gaps: [
    'The Madrid headquarters share comes from a regional page last updated in 2019.',
    'Demand in data, AI and marketing is not rated.',
    'Sector job counts are Eurostat survey figures for whole autonomous communities (Madrid, Cataluña, Valencia, Andalucía, País Vasco, Aragón), not for the cities; Seville and Málaga share Andalucía’s, and no family is rated from them there.',
    'No rent is shown: Spain publishes no one-bedroom rent by city that could be read (no citable rent source was available). Pay is the INE regional mean, not a city figure.',
    'Employer entries rest on the Global LEI Index headquarters address, which for some groups is the registered rather than the operational headquarters (BBVA, CaixaBank); headcounts were not read.'
  ],
  claims: {
    'es-cal-santander': { t: 'Santander’s headquarters graduate programme in Madrid starts each September and opens for applications in March (the 2026 call closed on 26 April), its retail programme closed on 31 May, and its investment-banking and wealth-management programmes open in August and September.', tag: 'employer-stated', src: 'https://www.santander.com/en/press-room/press-releases/2026/04/santander-to-make-more-than-400-job-offers-to-young-people-in-10-countries', by: 'Santander press release (April 2026) and Graduate Program HQ page', seen: '2026-10-08' },
    'es-cal-kpmg': { t: 'KPMG Spain brings in its autumn intake of graduates and interns in September and October: more than 900 hires in 2024, 79% of them recent graduates or interns.', tag: 'employer-stated', src: 'https://kpmg.com/es/es/sala-prensa/notas-prensa/2024/09/kpmg-contratara-mas-900-profesionales-septiembre-octubre.html', by: 'KPMG Spain press release (September 2024)', seen: '2026-10-08' },
    'es-cal-fairs': { t: 'University job fairs run in autumn and spring: Carlos III on 6 and 7 October 2026, Cantabria on 14 October, the Politécnica de Madrid virtual fair on 21 to 23 October and Comillas on 28 and 29 October; Complutense held its forum on 10 to 12 March 2026, and fairs continue in February, March and April.', tag: 'practitioner consensus', src: 'https://www.mastermania.com/noticias_masters/ferias-de-empleo-2026-2027-en-las-universidades-espanolas-AMP-9281.html', by: 'Mastermania, employment fairs 2026-2027 at Spanish universities, and the Complutense forum page', seen: '2026-10-08' },
    'es-lang': { t: '5.8% of Spanish job postings waive Spanish; the exceptions are international hubs, investment banking, trading and international consulting.', tag: 'data', src: 'research/places/iberia-and-nordics.md', by: 'Indeed Hiring Lab (2024), via places/iberia-and-nordics.md §2', seen: '2026-10-02' },
    'es-pay': { t: 'The average Spanish master’s graduate earns about €26,600 in the first year, leaving about €410 a month after a central one-bed in Madrid; a consulting or tech job at €45,000 leaves about €1,385.', tag: 'practitioner consensus', src: 'research/places/iberia-and-nordics.md', by: 'BBVA-Ivie data and author calculation, via places/iberia-and-nordics.md §3', seen: '2026-10-02' },
    'es-beckham': { t: 'The Beckham regime (24% flat up to €600,000) is worse than normal taxation at €30,000–45,000 and only level at €60,000, and needs five years without Spanish residence, which a one-year master’s in Spain can break.', tag: 'practitioner consensus', src: 'research/places/iberia-and-nordics.md', by: 'LIRPF art. 93 and author calculation, via places/iberia-and-nordics.md §4', seen: '2026-10-02' },
    'es-mad': { t: '65% of Spanish multinationals have their headquarters in Madrid, which also hosts the Bank of Spain, the stock exchange and the operational centres of the main banks.', tag: 'data', src: 'https://www.comunidad.madrid/inversion/madrid/economia-abierta-negocios-0', by: 'Comunidad de Madrid (page last updated 2019)', seen: '2026-10-02' },
    'es-santander': { t: 'Santander’s headquarters graduate programme starts each September in Madrid; applications for 2027 open in March 2027.', tag: 'employer-stated', src: 'research/places/iberia-and-nordics.md', by: 'Santander careers, via places/iberia-and-nordics.md §6', seen: '2026-10-02' },
    'es-bcn': { t: 'Catalonia had a record 2,403 start-ups in 2025, employing more than 30,500 people and raising €1.13 billion.', tag: 'data', src: 'https://enviaments.accio.gencat.cat/ACC1O/cat/docs/enviaments/2026/catalonia/catalonia-issue-115.html', by: 'ACCIÓ (Government of Catalonia), 26 Feb 2026', seen: '2026-10-02' },
    'es-valencia': { t: 'Eurostat counts 1,038,000 people in work in the Valencia metropolitan region in 2021; the region’s GDP was €61.4 billion in 2021.', tag: 'data', src: 'https://ec.europa.eu/eurostat/databrowser/view/met_10r_3emp/default/table?lang=en', by: 'Eurostat, metropolitan regions: employment by activity (met_10r_3emp) and GDP (met_10r_3gdp)', seen: '2026-10-03' },
    'es-seville': { t: 'Eurostat counts 727,000 people in work in the Seville metropolitan region in 2021; the region’s GDP was €40.7 billion in 2021.', tag: 'data', src: 'https://ec.europa.eu/eurostat/databrowser/view/met_10r_3emp/default/table?lang=en', by: 'Eurostat, metropolitan regions: employment by activity (met_10r_3emp) and GDP (met_10r_3gdp)', seen: '2026-10-03' },
    'es-malaga': { t: 'Eurostat counts 616,000 people in work in the Málaga metropolitan region in 2021; the region’s GDP was €30.8 billion in 2021.', tag: 'data', src: 'https://ec.europa.eu/eurostat/databrowser/view/met_10r_3emp/default/table?lang=en', by: 'Eurostat, metropolitan regions: employment by activity (met_10r_3emp) and GDP (met_10r_3gdp)', seen: '2026-10-03' },
    'es-bilbao': { t: 'Eurostat counts 512,000 people in work in the Bilbao metropolitan region in 2021; the region’s GDP was €35.4 billion in 2021.', tag: 'data', src: 'https://ec.europa.eu/eurostat/databrowser/view/met_10r_3emp/default/table?lang=en', by: 'Eurostat, metropolitan regions: employment by activity (met_10r_3emp) and GDP (met_10r_3gdp)', seen: '2026-10-03' },
    'es-zaragoza': { t: 'Eurostat counts 445,000 people in work in the Zaragoza metropolitan region in 2021; the region’s GDP was €27.9 billion in 2021.', tag: 'data', src: 'https://ec.europa.eu/eurostat/databrowser/view/met_10r_3emp/default/table?lang=en', by: 'Eurostat, metropolitan regions: employment by activity (met_10r_3emp) and GDP (met_10r_3gdp)', seen: '2026-10-03' },
    'es-mad-lfs': { t: 'Eurostat’s Labour Force Survey counts 259,400 people in work in information and communication and 171,900 in finance and insurance in the Comunidad de Madrid in 2025, 31% and 37% of Spain’s totals and, after Île-de-France, the second-largest figures of the 257 and 255 European regions with data (the UK is not covered).', tag: 'data', src: 'https://ec.europa.eu/eurostat/databrowser/view/lfst_r_lfe2en2/default/table?lang=en', by: 'Eurostat, Labour Force Survey: employed persons by economic activity and NUTS 2 region (lfst_r_lfe2en2), 2025', seen: '2026-10-03' },
    'es-cat-lfs': { t: 'Eurostat’s Labour Force Survey counts 192,300 people in work in information and communication in Cataluña in 2025, 23% of Spain’s total and the third-largest figure of 257 European regions, and 75,300 in finance and insurance.', tag: 'data', src: 'https://ec.europa.eu/eurostat/databrowser/view/lfst_r_lfe2en2/default/table?lang=en', by: 'Eurostat, Labour Force Survey: employed persons by economic activity and NUTS 2 region (lfst_r_lfe2en2), 2025', seen: '2026-10-03' },
    'es-val-lfs': { t: 'Eurostat’s Labour Force Survey counts 68,500 people in work in information and communication and 35,600 in finance and insurance in the Comunitat Valenciana in 2025, out of 2.4 million jobs.', tag: 'data', src: 'https://ec.europa.eu/eurostat/databrowser/view/lfst_r_lfe2en2/default/table?lang=en', by: 'Eurostat, Labour Force Survey: employed persons by economic activity and NUTS 2 region (lfst_r_lfe2en2), 2025', seen: '2026-10-03' },
    'es-and-lfs': { t: 'Eurostat’s Labour Force Survey counts 95,800 people in work in information and communication and 56,800 in finance and insurance in Andalucía in 2025, out of 3.6 million jobs.', tag: 'data', src: 'https://ec.europa.eu/eurostat/databrowser/view/lfst_r_lfe2en2/default/table?lang=en', by: 'Eurostat, Labour Force Survey: employed persons by economic activity and NUTS 2 region (lfst_r_lfe2en2), 2025', seen: '2026-10-03' },
    'es-pv-lfs': { t: 'Eurostat’s Labour Force Survey counts 32,800 people in work in information and communication and 13,400 in finance and insurance in the País Vasco in 2025, out of 1.0 million jobs.', tag: 'data', src: 'https://ec.europa.eu/eurostat/databrowser/view/lfst_r_lfe2en2/default/table?lang=en', by: 'Eurostat, Labour Force Survey: employed persons by economic activity and NUTS 2 region (lfst_r_lfe2en2), 2025', seen: '2026-10-03' },
    'es-ara-lfs': { t: 'Eurostat’s Labour Force Survey counts 17,600 people in work in information and communication and 10,500 in finance and insurance in Aragón in 2025, out of 626,000 jobs.', tag: 'data', src: 'https://ec.europa.eu/eurostat/databrowser/view/lfst_r_lfe2en2/default/table?lang=en', by: 'Eurostat, Labour Force Survey: employed persons by economic activity and NUTS 2 region (lfst_r_lfe2en2), 2025', seen: '2026-10-03' },
    'es-gfci': { t: 'In the Global Financial Centres Index 40 (September 2026) Madrid ranks 43rd in the world and 13th among Western European centres; neither Barcelona nor Bilbao is ranked.', tag: 'practitioner consensus', src: 'https://www.longfinance.net/media/documents/GFCI_40_Report_2026.09.16_v1.2.pdf', by: 'Z/Yen and China Development Institute, Global Financial Centres Index 40 (16 Sep 2026)', seen: '2026-10-03' },
    'es-mad-gser': { t: 'Startup Genome’s GSER 2026 ranks Madrid third among the world’s emerging start-up ecosystems and ninth in Europe, in the top ten in Europe for performance and talent strength and in the top fifteen for its AI-native cluster.', tag: 'practitioner consensus', src: 'https://startupgenome.com/ecosystems/madrid', by: 'Startup Genome, Global Startup Ecosystem Report 2026, ecosystem page', seen: '2026-10-03' },
    'es-bcn-gser': { t: 'Startup Genome’s GSER 2026 puts Barcelona’s Ecosystem Value at $16 billion, above the European average of $14.3 billion, with $771 million of early-stage funding between the second half of 2023 and 2025 against a global average of $554 million.', tag: 'practitioner consensus', src: 'https://startupgenome.com/ecosystems/barcelona', by: 'Startup Genome, Global Startup Ecosystem Report 2026, ecosystem page', seen: '2026-10-03' },
    'es-bcn-blink': { t: 'ACCIÓ reports that StartupBlink ranks Barcelona 33rd among the world’s start-up cities in 2025, up five places and ahead of Madrid (51st), and fifth in the EU.', tag: 'practitioner consensus', src: 'https://www.accio.gencat.cat/web/.content/bancconeixement/documents/pindoles/ACCIO-analisi-ecosistema-startup-catalunya-2026-pindola-en.pdf', by: 'ACCIÓ (Government of Catalonia), Analysis of the startup ecosystem in Catalonia 2026 (February 2026), citing StartupBlink', seen: '2026-10-03' },
    'es-val-gser': { t: 'Startup Genome’s GSER 2026 ranks Valencia in the 61st–70th range of emerging start-up ecosystems, a climb of 22 places, and in the top 30 in Europe for affordable talent.', tag: 'practitioner consensus', src: 'https://startupgenome.com/ecosystems/valencia', by: 'Startup Genome, Global Startup Ecosystem Report 2026, ecosystem page', seen: '2026-10-03' },
    'es-bil-gser': { t: 'Startup Genome’s GSER 2026 puts Bilbao’s Ecosystem Value at $1 billion, with $107 million of early-stage funding between the second half of 2023 and 2025.', tag: 'practitioner consensus', src: 'https://startupgenome.com/ecosystems/bilbao', by: 'Startup Genome, Global Startup Ecosystem Report 2026, ecosystem page', seen: '2026-10-03' },
    'es-unemp': { t: 'Spain’s seasonally adjusted unemployment rate was 10.0% in August 2026, and 22.7% for under-25s, against 6.1% and 15.4% in the EU.', tag: 'data', src: 'https://ec.europa.eu/eurostat/databrowser/view/une_rt_m/default/table?lang=en', by: 'Eurostat, Unemployment by sex and age, monthly (une_rt_m), August 2026', seen: '2026-10-03' },
    'es-grad-emp': { t: 'In 2025, 84.9% of Spanish tertiary graduates aged 20 to 34 who left education up to three years earlier were in work, against 85.3% in the EU.', tag: 'data', src: 'https://ec.europa.eu/eurostat/databrowser/view/edat_lfse_24/default/table?lang=en', by: 'Eurostat, Employment rates of young people not in education and training (edat_lfse_24), 2025', seen: '2026-10-03' },
    'es-e-telefonica': { t: 'Telefónica, the telecoms group, has its headquarters at Gran Vía 28, Madrid.', tag: 'data', src: 'https://api.gleif.org/api/v1/lei-records/549300EEJH4FEPDBBR25', by: 'GLEIF, Global LEI Index record for TELEFONICA SA (LEI 549300EEJH4FEPDBBR25)', seen: '2026-10-03' },
    'es-e-repsol': { t: 'Repsol, the energy group, has its headquarters at Calle Méndez Álvaro 44, Madrid.', tag: 'data', src: 'https://api.gleif.org/api/v1/lei-records/BSYCX13Y0NOTV14V9N85', by: 'GLEIF, Global LEI Index record for REPSOL SA (LEI BSYCX13Y0NOTV14V9N85)', seen: '2026-10-03' },
    'es-e-amadeus': { t: 'Amadeus IT Group, the travel-technology company, has its headquarters at Salvador de Madariaga 1, Madrid.', tag: 'data', src: 'https://api.gleif.org/api/v1/lei-records/9598004A3FTY3TEHHN09', by: 'GLEIF, Global LEI Index record for AMADEUS IT GROUP SOCIEDAD ANONIMA (LEI 9598004A3FTY3TEHHN09)', seen: '2026-10-03' },
    'es-e-endesa': { t: 'Endesa, the electricity company, has its headquarters at Calle Ribera del Loira 60, Madrid.', tag: 'data', src: 'https://api.gleif.org/api/v1/lei-records/549300LHK07F2CHV4X31', by: 'GLEIF, Global LEI Index record for ENDESA SA (LEI 549300LHK07F2CHV4X31)', seen: '2026-10-03' },
    'es-e-bde': { t: 'The Banco de España, the central bank, has its headquarters at Calle de Alcalá 48, Madrid.', tag: 'data', src: 'https://api.gleif.org/api/v1/lei-records/95980020140006022422', by: 'GLEIF, Global LEI Index record for BANCO DE ESPAÑA (LEI 95980020140006022422)', seen: '2026-10-03' },
    'es-e-bme': { t: 'Bolsas y Mercados Españoles, the stock-exchange operator, has its headquarters at Plaza de la Lealtad 1, Madrid.', tag: 'data', src: 'https://api.gleif.org/api/v1/lei-records/9598003MSLCX8JT38V69', by: 'GLEIF, Global LEI Index record for BOLSAS Y MERCADOS ESPAÑOLES, SOCIEDAD HOLDING DE MERCADOS Y SISTEMAS FINANCIEROS, S.A. (LEI 9598003MSLCX8JT38V69)', seen: '2026-10-03' },
    'es-e-glovo': { t: 'Glovo, the delivery platform, has its headquarters at Calle Llull 108, Barcelona.', tag: 'data', src: 'https://api.gleif.org/api/v1/lei-records/254900104NN37XK6MA89', by: 'GLEIF, Global LEI Index record for GLOVOAPP23 S.A. (LEI 254900104NN37XK6MA89)', seen: '2026-10-03' },
    'es-e-seat': { t: 'SEAT, the carmaker, has its headquarters at Autovía A-2, km 585, Martorell, in the Barcelona area.', tag: 'data', src: 'https://api.gleif.org/api/v1/lei-records/529900C2P7V7P1UGVX95', by: 'GLEIF, Global LEI Index record for SEAT SA (LEI 529900C2P7V7P1UGVX95)', seen: '2026-10-03' },
    'es-e-sabadell': { t: 'Banco Sabadell has its headquarters at Plaça de Sant Roc 20, Sabadell, in the Barcelona area.', tag: 'data', src: 'https://api.gleif.org/api/v1/lei-records/SI5RG2M0WQQLZCXKRM20', by: 'GLEIF, Global LEI Index record for BANCO DE SABADELL S.A. (LEI SI5RG2M0WQQLZCXKRM20)', seen: '2026-10-03' },
    'es-e-caixabank': { t: 'CaixaBank has its registered headquarters at Calle Pintor Sorolla 2–4, Valencia.', tag: 'data', src: 'https://api.gleif.org/api/v1/lei-records/7CUNS533WID6K7DGFI87', by: 'GLEIF, Global LEI Index record for CAIXABANK SA (LEI 7CUNS533WID6K7DGFI87)', seen: '2026-10-03' },
    'es-e-mercadona': { t: 'Mercadona, the supermarket chain, has its headquarters at Calle Alfonso Roig, Albalat dels Sorells, in the Valencia area.', tag: 'data', src: 'https://api.gleif.org/api/v1/lei-records/959800G1STVUPYU6NU22', by: 'GLEIF, Global LEI Index record for MERCADONA SA (LEI 959800G1STVUPYU6NU22)', seen: '2026-10-03' },
    'es-e-valenciaport': { t: 'The Valencia Port Authority has its headquarters at Avenida del Muelle del Turia, Valencia.', tag: 'data', src: 'https://api.gleif.org/api/v1/lei-records/959800N0APRWEFBHS352', by: 'GLEIF, Global LEI Index record for AUTORIDAD PORTUARIA DE VALENCIA (LEI 959800N0APRWEFBHS352)', seen: '2026-10-03' },
    'es-e-abengoa': { t: 'Abengoa, the engineering group, has its headquarters at Campus Palmas Altas, Seville.', tag: 'data', src: 'https://api.gleif.org/api/v1/lei-records/8ZQH7RR6DBQZIX8PEQ84', by: 'GLEIF, Global LEI Index record for ABENGOA, S.A. (LEI 8ZQH7RR6DBQZIX8PEQ84)', seen: '2026-10-03' },
    'es-e-heineken': { t: 'Heineken España, the brewer, has its headquarters at Avenida de Andalucía 1, Seville.', tag: 'data', src: 'https://api.gleif.org/api/v1/lei-records/9598003983KNFL970116', by: 'GLEIF, Global LEI Index record for HEINEKEN ESPAÑA, SA (LEI 9598003983KNFL970116)', seen: '2026-10-03' },
    'es-e-unicaja': { t: 'Unicaja Banco has its headquarters at Avenida de Andalucía 10–12, Málaga.', tag: 'data', src: 'https://api.gleif.org/api/v1/lei-records/5493007SJLLCTM6J6M37', by: 'GLEIF, Global LEI Index record for UNICAJA BANCO SA (LEI 5493007SJLLCTM6J6M37)', seen: '2026-10-03' },
    'es-e-bbva': { t: 'BBVA has its registered headquarters at Plaza de San Nicolás 4, Bilbao.', tag: 'data', src: 'https://api.gleif.org/api/v1/lei-records/K8MS7FD7N5Z2WQ51AZ71', by: 'GLEIF, Global LEI Index record for BANCO BILBAO VIZCAYA ARGENTARIA SOCIEDAD ANONIMA (LEI K8MS7FD7N5Z2WQ51AZ71)', seen: '2026-10-03' },
    'es-e-iberdrola': { t: 'Iberdrola, the electricity group, has its headquarters in the Torre Iberdrola, Plaza Euskadi 5, Bilbao.', tag: 'data', src: 'https://api.gleif.org/api/v1/lei-records/5QK37QC7NWOJ8D7WVQ45', by: 'GLEIF, Global LEI Index record for IBERDROLA SA (LEI 5QK37QC7NWOJ8D7WVQ45)', seen: '2026-10-03' },
    'es-e-kutxabank': { t: 'Kutxabank, the Basque savings-bank group, has its headquarters at Gran Vía 30–32, Bilbao.', tag: 'data', src: 'https://api.gleif.org/api/v1/lei-records/549300U4LIZV0REEQQ46', by: 'GLEIF, Global LEI Index record for KUTXABANK SA (LEI 549300U4LIZV0REEQQ46)', seen: '2026-10-03' },
    'es-e-pikolin': { t: 'Pikolin, the mattress maker, has its headquarters in the Zaragoza logistics platform, Ronda del Ferrocarril 24.', tag: 'data', src: 'https://api.gleif.org/api/v1/lei-records/95980020140005833854', by: 'GLEIF, Global LEI Index record for PIKOLIN SL (LEI 95980020140005833854)', seen: '2026-10-03' },
    'es-e-saica': { t: 'Saica Pack, the packaging maker, has its headquarters at Avenida San Juan de la Peña 144, Zaragoza.', tag: 'data', src: 'https://api.gleif.org/api/v1/lei-records/9598007VYTBCGU20JD72', by: 'GLEIF, Global LEI Index record for SAICA PACK S.L. (LEI 9598007VYTBCGU20JD72)', seen: '2026-10-03' }
  }
});

if (window.I18N) I18N.add('it', {
  'Madrid holds most corporate and bank headquarters and is where the large graduate programmes start; Barcelona has southern Europe’s largest start-up scene. Entry pay is low against big-city rents outside consulting, banking and tech, but non-EU graduates have one of Europe’s simplest switches from study to work.':
    'Madrid concentra la maggior parte delle sedi centrali di aziende e banche ed è dove partono i grandi programmi per neolaureati; Barcellona ha la maggiore scena di start-up dell’Europa meridionale. Gli stipendi d’ingresso sono bassi rispetto agli affitti delle grandi città, salvo consulenza, banche e tecnologia, ma i laureati extra-UE hanno uno dei passaggi da studio a lavoro più semplici d’Europa.',
  'Banking':
    'Banca',
  'Telecoms and energy':
    'Telecomunicazioni ed energia',
  'Corporate headquarters':
    'Sedi centrali',
  'Start-ups and tech':
    'Start-up e tecnologia',
  'Tourism':
    'Turismo',
  'The Madrid headquarters share comes from a regional page last updated in 2019.':
    'La quota di sedi centrali a Madrid viene da una pagina regionale aggiornata l’ultima volta nel 2019.',
  'Demand in data, AI and marketing is not rated.':
    'La domanda in dati, IA e marketing non è valutata.',
  'Sector job counts are Eurostat survey figures for whole autonomous communities (Madrid, Cataluña, Valencia, Andalucía, País Vasco, Aragón), not for the cities; Seville and Málaga share Andalucía’s, and no family is rated from them there.':
    'I conteggi dei posti per settore sono dati dell’indagine Eurostat per intere comunità autonome (Madrid, Catalogna, Valencia, Andalusia, Paesi Baschi, Aragona), non per le città; Siviglia e Málaga condividono quelli dell’Andalusia, e da essi nessuna famiglia è valutata.',
  'No rent is shown: Spain publishes no one-bedroom rent by city that could be read (no citable rent source was available). Pay is the INE regional mean, not a city figure.':
    'Non è indicato alcun affitto: la Spagna non pubblica un affitto per bilocale per città che si sia potuto leggere (non era disponibile una fonte citabile per gli affitti). La retribuzione è la media regionale dell’INE, non un dato cittadino.',
  'Employer entries rest on the Global LEI Index headquarters address, which for some groups is the registered rather than the operational headquarters (BBVA, CaixaBank); headcounts were not read.':
    'Le voci sui datori di lavoro si basano sull’indirizzo della sede nel Global LEI Index, che per alcuni gruppi è la sede legale e non quella operativa (BBVA, CaixaBank); il numero di dipendenti non è stato letto.',
  'Country brief: hubs, employers, pay and standing':
    'Scheda paese: poli, datori di lavoro, retribuzioni e posizionamento',
  'Spain: pay after rent, Beckham regime, permits, Santander and other programmes':
    'Spagna: stipendio dopo l’affitto, regime Beckham, permessi, Santander e altri programmi',
  '§6 Spain':
    '§6 Spagna',
  '§5 Madrid net pay':
    '§5 stipendio netto a Madrid',
  'Corporate and bank headquarters':
    'Sedi centrali di aziende e banche',
  'Consulting':
    'Consulenza',
  'banks with operational centres in Madrid':
    'banche con centri operativi a Madrid',
  'headquarters programme starts in Madrid':
    'il programma della sede centrale parte da Madrid',
  'telecoms group, headquarters on Gran Vía':
    'gruppo di telecomunicazioni, sede centrale in Gran Vía',
  'energy group, headquarters on Calle Méndez Álvaro':
    'gruppo energetico, sede centrale in Calle Méndez Álvaro',
  'travel-technology company, headquarters in Madrid':
    'azienda di tecnologia per i viaggi, sede centrale a Madrid',
  'electricity company, headquarters on Calle Ribera del Loira':
    'società elettrica, sede centrale in Calle Ribera del Loira',
  'central bank, headquarters on Calle de Alcalá':
    'banca centrale, sede centrale in Calle de Alcalá',
  'stock-exchange operator, headquarters at Plaza de la Lealtad':
    'operatore delle borse, sede centrale in Plaza de la Lealtad',
  'Start-ups, tech hubs and health ventures':
    'Start-up, poli tecnologici e imprese della salute',
  'Health tech':
    'Tecnologie per la salute',
  '2,403 companies, more than 30,500 jobs':
    '2.403 aziende, oltre 30.500 posti',
  'Catalonia’s start-ups':
    'Le start-up della Catalogna',
  'delivery platform, headquarters on Calle Llull':
    'piattaforma di consegne, sede centrale in Calle Llull',
  'carmaker, headquarters at Martorell':
    'casa automobilistica, sede centrale a Martorell',
  'bank, headquarters at Sabadell':
    'banca, sede centrale a Sabadell',
  'Spain’s third metropolitan region, about a million jobs':
    'La terza regione metropolitana spagnola, circa un milione di posti',
  'Ports and logistics':
    'Porti e logistica',
  '1,038,000 jobs (2021)':
    '1.038.000 posti (2021)',
  'Employers in the metropolitan region':
    'Datori di lavoro della regione metropolitana',
  'bank, registered headquarters in Valencia':
    'banca, sede legale a Valencia',
  'supermarket chain, headquarters at Albalat dels Sorells':
    'catena di supermercati, sede centrale ad Albalat dels Sorells',
  'port authority, headquarters in Valencia':
    'autorità portuale, sede a Valencia',
  'Andalusia’s capital':
    'Il capoluogo dell’Andalusia',
  'Aerospace':
    'Aerospazio',
  '727,000 jobs (2021)':
    '727.000 posti (2021)',
  'engineering group, headquarters at Palmas Altas':
    'gruppo di ingegneria, sede centrale a Palmas Altas',
  'brewer, headquarters in Seville':
    'produttore di birra, sede centrale a Siviglia',
  'A coastal metropolitan region growing a tech cluster':
    'Una regione metropolitana costiera con un distretto tecnologico in crescita',
  '616,000 jobs (2021)':
    '616.000 posti (2021)',
  'bank, headquarters on Avenida de Andalucía':
    'banca, sede centrale in Avenida de Andalucía',
  'The Basque Country’s industrial and banking city':
    'La città industriale e bancaria dei Paesi Baschi',
  '512,000 jobs (2021)':
    '512.000 posti (2021)',
  'bank, registered headquarters at Plaza de San Nicolás':
    'banca, sede legale in Plaza de San Nicolás',
  'electricity group, headquarters in the Torre Iberdrola':
    'gruppo elettrico, sede centrale nella Torre Iberdrola',
  'bank, headquarters on Gran Vía':
    'banca, sede centrale in Gran Vía',
  'Aragon’s capital, a logistics and car-making centre':
    'Il capoluogo dell’Aragona, centro di logistica e auto',
  '445,000 jobs (2021)':
    '445.000 posti (2021)',
  'mattress maker, headquarters in the logistics platform':
    'produttore di materassi, sede centrale nella piattaforma logistica',
  'packaging maker, headquarters in Zaragoza':
    'produttore di imballaggi, sede centrale a Saragozza',
  'Language':
    'Lingua',
  'Pay after rent':
    'Stipendio dopo l’affitto',
  'Where demand is now':
    'Dove si concentra la domanda oggi',
  'Tax and net pay':
    'Tasse e stipendio netto',
  '5.8% of Spanish job postings waive Spanish; the exceptions are international hubs, investment banking, trading and international consulting.':
    'Il 5,8% degli annunci di lavoro spagnoli non richiede lo spagnolo; le eccezioni sono i poli internazionali, l’investment banking, il trading e la consulenza internazionale.',
  'The average Spanish master’s graduate earns about €26,600 in the first year, leaving about €410 a month after a central one-bed in Madrid; a consulting or tech job at €45,000 leaves about €1,385.':
    'Il laureato magistrale spagnolo medio guadagna circa 26.600 € il primo anno, e gli restano circa 410 € al mese dopo un bilocale in centro a Madrid; un lavoro in consulenza o tecnologia da 45.000 € ne lascia circa 1.385.',
  'The Beckham regime (24% flat up to €600,000) is worse than normal taxation at €30,000–45,000 and only level at €60,000, and needs five years without Spanish residence, which a one-year master’s in Spain can break.':
    'Il regime Beckham (24% fisso fino a 600.000 €) è peggiore della tassazione ordinaria tra 30.000 e 45.000 € e solo pari a 60.000 €, e richiede cinque anni senza residenza in Spagna, che un master di un anno in Spagna può interrompere.',
  '65% of Spanish multinationals have their headquarters in Madrid, which also hosts the Bank of Spain, the stock exchange and the operational centres of the main banks.':
    'Il 65% delle multinazionali spagnole ha sede a Madrid, che ospita anche la Banca di Spagna, la borsa e i centri operativi delle principali banche.',
  'Santander’s headquarters graduate programme starts each September in Madrid; applications for 2027 open in March 2027.':
    'Il programma per neolaureati della sede centrale di Santander parte ogni settembre a Madrid; le candidature per il 2027 si aprono a marzo 2027.',
  'Catalonia had a record 2,403 start-ups in 2025, employing more than 30,500 people and raising €1.13 billion.':
    'Nel 2025 la Catalogna ha contato il record di 2.403 start-up, con oltre 30.500 addetti e 1,13 miliardi di euro raccolti.',
  'Eurostat counts 1,038,000 people in work in the Valencia metropolitan region in 2021; the region’s GDP was €61.4 billion in 2021.':
    'Eurostat conta 1.038.000 occupati nella regione metropolitana di Valencia nel 2021; il PIL della regione era di 61,4 miliardi di € nel 2021.',
  'Eurostat counts 727,000 people in work in the Seville metropolitan region in 2021; the region’s GDP was €40.7 billion in 2021.':
    'Eurostat conta 727.000 occupati nella regione metropolitana di Siviglia nel 2021; il PIL della regione era di 40,7 miliardi di € nel 2021.',
  'Eurostat counts 616,000 people in work in the Málaga metropolitan region in 2021; the region’s GDP was €30.8 billion in 2021.':
    'Eurostat conta 616.000 occupati nella regione metropolitana di Malaga nel 2021; il PIL della regione era di 30,8 miliardi di € nel 2021.',
  'Eurostat counts 512,000 people in work in the Bilbao metropolitan region in 2021; the region’s GDP was €35.4 billion in 2021.':
    'Eurostat conta 512.000 occupati nella regione metropolitana di Bilbao nel 2021; il PIL della regione era di 35,4 miliardi di € nel 2021.',
  'Eurostat counts 445,000 people in work in the Zaragoza metropolitan region in 2021; the region’s GDP was €27.9 billion in 2021.':
    'Eurostat conta 445.000 occupati nella regione metropolitana di Saragozza nel 2021; il PIL della regione era di 27,9 miliardi di € nel 2021.',
  'Eurostat’s Labour Force Survey counts 259,400 people in work in information and communication and 171,900 in finance and insurance in the Comunidad de Madrid in 2025, 31% and 37% of Spain’s totals and, after Île-de-France, the second-largest figures of the 257 and 255 European regions with data (the UK is not covered).':
    'La rilevazione sulle forze di lavoro di Eurostat conta nel 2025 nella Comunidad de Madrid 259.400 occupati nell’informazione e comunicazione e 171.900 nella finanza e nelle assicurazioni, il 31% e il 37% dei totali spagnoli e, dopo l’Île-de-France, i secondi valori più alti tra le 257 e le 255 regioni europee con dati (il Regno Unito non è coperto).',
  'Eurostat’s Labour Force Survey counts 192,300 people in work in information and communication in Cataluña in 2025, 23% of Spain’s total and the third-largest figure of 257 European regions, and 75,300 in finance and insurance.':
    'La rilevazione sulle forze di lavoro di Eurostat conta nel 2025 in Cataluña 192.300 occupati nell’informazione e comunicazione, il 23% del totale spagnolo e il terzo valore più alto di 257 regioni europee, e 75.300 nella finanza e nelle assicurazioni.',
  'Eurostat’s Labour Force Survey counts 68,500 people in work in information and communication and 35,600 in finance and insurance in the Comunitat Valenciana in 2025, out of 2.4 million jobs.':
    'La rilevazione sulle forze di lavoro di Eurostat conta nel 2025 nella Comunitat Valenciana 68.500 occupati nell’informazione e comunicazione e 35.600 nella finanza e nelle assicurazioni, su 2,4 milioni di occupati.',
  'Eurostat’s Labour Force Survey counts 95,800 people in work in information and communication and 56,800 in finance and insurance in Andalucía in 2025, out of 3.6 million jobs.':
    'La rilevazione sulle forze di lavoro di Eurostat conta nel 2025 in Andalucía 95.800 occupati nell’informazione e comunicazione e 56.800 nella finanza e nelle assicurazioni, su 3,6 milioni di occupati.',
  'Eurostat’s Labour Force Survey counts 32,800 people in work in information and communication and 13,400 in finance and insurance in the País Vasco in 2025, out of 1.0 million jobs.':
    'La rilevazione sulle forze di lavoro di Eurostat conta nel 2025 nel País Vasco 32.800 occupati nell’informazione e comunicazione e 13.400 nella finanza e nelle assicurazioni, su 1,0 milioni di occupati.',
  'Eurostat’s Labour Force Survey counts 17,600 people in work in information and communication and 10,500 in finance and insurance in Aragón in 2025, out of 626,000 jobs.':
    'La rilevazione sulle forze di lavoro di Eurostat conta nel 2025 in Aragón 17.600 occupati nell’informazione e comunicazione e 10.500 nella finanza e nelle assicurazioni, su 626.000 occupati.',
  'In the Global Financial Centres Index 40 (September 2026) Madrid ranks 43rd in the world and 13th among Western European centres; neither Barcelona nor Bilbao is ranked.':
    'Nel Global Financial Centres Index 40 (settembre 2026) Madrid è 43ª nel mondo e 13ª tra i centri dell’Europa occidentale; né Barcellona né Bilbao sono in classifica.',
  'Startup Genome’s GSER 2026 ranks Madrid third among the world’s emerging start-up ecosystems and ninth in Europe, in the top ten in Europe for performance and talent strength and in the top fifteen for its AI-native cluster.':
    'Il GSER 2026 di Startup Genome colloca Madrid al terzo posto tra gli ecosistemi di start-up emergenti del mondo e al nono in Europa, tra i primi dieci in Europa per risultati e per forza dei talenti e tra i primi quindici per il cluster AI-native.',
  'Startup Genome’s GSER 2026 puts Barcelona’s Ecosystem Value at $16 billion, above the European average of $14.3 billion, with $771 million of early-stage funding between the second half of 2023 and 2025 against a global average of $554 million.':
    'Il GSER 2026 di Startup Genome stima l’Ecosystem Value di Barcellona in 16 miliardi di dollari, sopra la media europea di 14,3 miliardi, con 771 milioni di dollari di finanziamenti early stage tra il secondo semestre del 2023 e il 2025 contro una media mondiale di 554 milioni.',
  'ACCIÓ reports that StartupBlink ranks Barcelona 33rd among the world’s start-up cities in 2025, up five places and ahead of Madrid (51st), and fifth in the EU.':
    'L’ACCIÓ riferisce che StartupBlink colloca Barcellona al 33º posto tra le città di start-up del mondo nel 2025, in salita di cinque posizioni e davanti a Madrid (51ª), e al quinto posto nell’UE.',
  'Startup Genome’s GSER 2026 ranks Valencia in the 61st–70th range of emerging start-up ecosystems, a climb of 22 places, and in the top 30 in Europe for affordable talent.':
    'Il GSER 2026 di Startup Genome colloca Valencia tra il 61º e il 70º posto degli ecosistemi di start-up emergenti, con un salto di 22 posizioni, e nella top 30 europea per talenti a costi accessibili.',
  'Startup Genome’s GSER 2026 puts Bilbao’s Ecosystem Value at $1 billion, with $107 million of early-stage funding between the second half of 2023 and 2025.':
    'Il GSER 2026 di Startup Genome stima l’Ecosystem Value di Bilbao in 1 miliardo di dollari, con 107 milioni di dollari di finanziamenti early stage tra il secondo semestre del 2023 e il 2025.',
  'Spain’s seasonally adjusted unemployment rate was 10.0% in August 2026, and 22.7% for under-25s, against 6.1% and 15.4% in the EU.':
    'Il tasso di disoccupazione destagionalizzato della Spagna era del 10,0% nell’agosto 2026, e del 22,7% per gli under 25, contro il 6,1% e il 15,4% nell’UE.',
  'In 2025, 84.9% of Spanish tertiary graduates aged 20 to 34 who left education up to three years earlier were in work, against 85.3% in the EU.':
    'Nel 2025 l’84,9% dei laureati spagnoli di 20-34 anni usciti dal sistema educativo da non più di tre anni era occupato, contro l’85,3% nell’UE.',
  'Telefónica, the telecoms group, has its headquarters at Gran Vía 28, Madrid.':
    'Telefónica, il gruppo di telecomunicazioni, ha la sede centrale a Gran Vía 28, a Madrid.',
  'Repsol, the energy group, has its headquarters at Calle Méndez Álvaro 44, Madrid.':
    'Repsol, il gruppo energetico, ha la sede centrale a Calle Méndez Álvaro 44, a Madrid.',
  'Amadeus IT Group, the travel-technology company, has its headquarters at Salvador de Madariaga 1, Madrid.':
    'Amadeus IT Group, l’azienda di tecnologia per i viaggi, ha la sede centrale a Salvador de Madariaga 1, a Madrid.',
  'Endesa, the electricity company, has its headquarters at Calle Ribera del Loira 60, Madrid.':
    'Endesa, la società elettrica, ha la sede centrale a Calle Ribera del Loira 60, a Madrid.',
  'The Banco de España, the central bank, has its headquarters at Calle de Alcalá 48, Madrid.':
    'La Banca di Spagna, la banca centrale, ha la sede centrale a Calle de Alcalá 48, a Madrid.',
  'Bolsas y Mercados Españoles, the stock-exchange operator, has its headquarters at Plaza de la Lealtad 1, Madrid.':
    'Bolsas y Mercados Españoles, l’operatore delle borse, ha la sede centrale a Plaza de la Lealtad 1, a Madrid.',
  'Glovo, the delivery platform, has its headquarters at Calle Llull 108, Barcelona.':
    'Glovo, la piattaforma di consegne, ha la sede centrale a Calle Llull 108, a Barcellona.',
  'SEAT, the carmaker, has its headquarters at Autovía A-2, km 585, Martorell, in the Barcelona area.':
    'SEAT, la casa automobilistica, ha la sede centrale sull’Autovía A-2, km 585, a Martorell, nell’area di Barcellona.',
  'Banco Sabadell has its headquarters at Plaça de Sant Roc 20, Sabadell, in the Barcelona area.':
    'Banco Sabadell ha la sede centrale a Plaça de Sant Roc 20, a Sabadell, nell’area di Barcellona.',
  'CaixaBank has its registered headquarters at Calle Pintor Sorolla 2–4, Valencia.':
    'CaixaBank ha la sede legale a Calle Pintor Sorolla 2–4, a Valencia.',
  'Mercadona, the supermarket chain, has its headquarters at Calle Alfonso Roig, Albalat dels Sorells, in the Valencia area.':
    'Mercadona, la catena di supermercati, ha la sede centrale a Calle Alfonso Roig, ad Albalat dels Sorells, nell’area di Valencia.',
  'The Valencia Port Authority has its headquarters at Avenida del Muelle del Turia, Valencia.':
    'L’Autorità portuale di Valencia ha la sede in Avenida del Muelle del Turia, a Valencia.',
  'Abengoa, the engineering group, has its headquarters at Campus Palmas Altas, Seville.':
    'Abengoa, il gruppo di ingegneria, ha la sede centrale al Campus Palmas Altas, a Siviglia.',
  'Heineken España, the brewer, has its headquarters at Avenida de Andalucía 1, Seville.':
    'Heineken España, il produttore di birra, ha la sede centrale in Avenida de Andalucía 1, a Siviglia.',
  'Unicaja Banco has its headquarters at Avenida de Andalucía 10–12, Málaga.':
    'Unicaja Banco ha la sede centrale in Avenida de Andalucía 10–12, a Málaga.',
  'BBVA has its registered headquarters at Plaza de San Nicolás 4, Bilbao.':
    'BBVA ha la sede legale in Plaza de San Nicolás 4, a Bilbao.',
  'Iberdrola, the electricity group, has its headquarters in the Torre Iberdrola, Plaza Euskadi 5, Bilbao.':
    'Iberdrola, il gruppo elettrico, ha la sede centrale nella Torre Iberdrola, in Plaza Euskadi 5, a Bilbao.',
  'Kutxabank, the Basque savings-bank group, has its headquarters at Gran Vía 30–32, Bilbao.':
    'Kutxabank, il gruppo basco delle casse di risparmio, ha la sede centrale in Gran Vía 30–32, a Bilbao.',
  'Pikolin, the mattress maker, has its headquarters in the Zaragoza logistics platform, Ronda del Ferrocarril 24.':
    'Pikolin, il produttore di materassi, ha la sede centrale nella piattaforma logistica di Saragozza, Ronda del Ferrocarril 24.',
  'Saica Pack, the packaging maker, has its headquarters at Avenida San Juan de la Peña 144, Zaragoza.':
    'Saica Pack, il produttore di imballaggi, ha la sede centrale in Avenida San Juan de la Peña 144, a Saragozza.',
  'Santander’s headquarters graduate programme in Madrid starts each September and opens for applications in March (the 2026 call closed on 26 April), its retail programme closed on 31 May, and its investment-banking and wealth-management programmes open in August and September.':
    'Il programma per laureati della sede centrale di Santander a Madrid inizia ogni settembre e apre le candidature a marzo (il bando 2026 si è chiuso il 26 aprile), il programma retail si è chiuso il 31 maggio, e i programmi di investment banking e wealth management aprono ad agosto e settembre.',
  'KPMG Spain brings in its autumn intake of graduates and interns in September and October: more than 900 hires in 2024, 79% of them recent graduates or interns.':
    'KPMG Spagna inserisce il suo gruppo autunnale di laureati e stagisti a settembre e ottobre: più di 900 assunzioni nel 2024, il 79% neolaureati o stagisti.',
  'University job fairs run in autumn and spring: Carlos III on 6 and 7 October 2026, Cantabria on 14 October, the Politécnica de Madrid virtual fair on 21 to 23 October and Comillas on 28 and 29 October; Complutense held its forum on 10 to 12 March 2026, and fairs continue in February, March and April.':
    'Le fiere del lavoro universitarie si svolgono in autunno e in primavera: Carlos III il 6 e 7 ottobre 2026, Cantabria il 14 ottobre, la fiera virtuale della Politécnica de Madrid dal 21 al 23 ottobre e Comillas il 28 e 29 ottobre; la Complutense ha tenuto il suo forum dal 10 al 12 marzo 2026, e le fiere proseguono a febbraio, marzo e aprile.'
});
