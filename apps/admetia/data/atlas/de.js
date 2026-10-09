/* Atlas record: Germany. Read 2 and 3 October 2026; log P33 (research/verification/round-4a.md, round-4k.md, round-5a.md).
 * Hub coordinates are city centres, rounded. Ratings follow the method in
 * data/atlas/index.js: dominant needs an official or statistical source
 * naming the hub as the national centre; strong, two named employers or a
 * statistic; present, one named employer; otherwise not rated. Round 5a (3 October
 * 2026) added standing, metrics (Eurostat metropolitan regions for population and
 * GDP, Federal Employment Agency state medians for pay, Numbeo for rent), more
 * claims per hub and two hubs (Karlsruhe, Bonn); the country brief is
 * research/countries/de-germany.md. */

ATLAS.add({
  id: 'DE',
  checked: '2026-10-03',
  log: 'P33',
  summary: 'Europe’s largest economy hires across industry, but its hubs split cleanly: Frankfurt for banking and supervision, Munich for corporate headquarters and tech, Berlin for start-ups and AI, Stuttgart and Wolfsburg for cars, Hamburg for logistics. German is expected in most business jobs; tech and start-ups are the exception.',
  sectors: [
    'Automotive and suppliers',
    'Banking and insurance',
    'Software and ICT',
    'Semiconductors',
    'Logistics and ports',
    'Aerospace',
    'Chemicals',
    'Consumer goods'
  ],
  roles: ['software', 'it', 'finance', 'business', 'logistics'],
  hubs: [
    {
      id: 'frankfurt', name: 'Frankfurt am Main', lat: 50.11, lon: 8.68,
      knownFor: 'Banking, central banking and financial supervision',
      why: ['de-fra-banks', 'de-fra-sup', 'de-gfci', 'de-fra-emp'],
      sectors: ['Banking', 'Central banking', 'Financial supervision', 'Stock exchange', 'Development finance'],
      employers: [
        { name: 'European Central Bank', note: 'euro-area central bank', c: 'de-fra-sup' },
        { name: 'Deutsche Bundesbank', note: 'German central bank', c: 'de-fra-sup' },
        { name: 'BaFin', note: 'supervises banks, insurers and securities trading', c: 'de-fra-sup' },
        { name: 'AMLA', note: 'new EU anti-money-laundering authority', c: 'de-fra-amla' },
        { name: 'Deutsche Bank', note: 'headquarters', c: 'de-fra-db' },
        { name: 'KfW', note: 'development bank', c: 'de-fra-sup' },
        { name: 'Deutsche Börse', note: 'headquarters in Eschborn, just outside the city', c: 'de-fra-dbg' },
        { name: 'Frankfurt Airport (Fraport)', note: 'about 80,000 jobs at some 500 organisations on site', c: 'de-fra-airport' }
      ],
      demand: {
        finance: ['dominant', 'de-fra-banks'],
        economics: ['strong', 'de-fra-sup'],
        business: 'gap', accounting: 'gap', management: 'gap', marketing: 'gap', logistics: 'gap', analytics: 'gap', it: 'gap', software: 'gap', datasci: 'gap', ai: 'gap', cs: 'gap', bigdata: 'gap'
      },
      finance: {
        ib: ['present', 'de-fra-db'],
        banking: ['dominant', 'de-fra-banks'],
        risk: ['strong', 'de-fra-sup', 'de-fra-amla'],
        am: 'gap', pe: 'gap', vc: 'gap', corpfin: 'gap', finconsult: 'gap'
      },
      standing: [
        { f: 'finance', s: [5, 3, 2], c: ['de-fra-banks', 'de-fra-sup', 'de-gfci'] },
        { f: 'economics', s: [5, 3, 2], c: ['de-fra-sup', 'de-fra-emp'] }
      ],
      metrics: {
        pop: {
          v: 2779727,
          year: 2023,
          area: 'metro',
          tag: 'data',
          src: 'https://ec.europa.eu/eurostat/databrowser/view/met_pjanaggr3/default/table',
          by: 'Eurostat, population on 1 January by metropolitan region (met_pjanaggr3), Frankfurt am Main',
          seen: '2026-10-03'
        },
        gdp: {
          v: 160.8,
          cur: 'EUR',
          year: 2021,
          area: 'metro',
          tag: 'data',
          src: 'https://ec.europa.eu/eurostat/databrowser/view/met_10r_3gdp/default/table',
          by: 'Eurostat, GDP at current market prices by metropolitan region (met_10r_3gdp), Frankfurt am Main, million euro ÷ 1,000',
          seen: '2026-10-03'
        },
        wage: {
          tag: 'data',
          seen: '2026-10-03',
          v: 4325,
          cur: 'EUR',
          basis: 'median',
          year: 2024,
          area: 'region',
          src: 'https://statistik.arbeitsagentur.de/DE/Statischer-Content/Statistiken/Fachstatistiken/Beschaeftigung/Generische-Publikationen/Blickpunkt-Arbeitsmarkt-Analyse-zur-Entgeltstatistik.pdf',
          by: 'Federal Employment Agency, Analyse zur Entgeltstatistik 2024 (Oct 2025): median monthly gross pay of full-time employees subject to social insurance, Hessen, 31 Dec 2024 (value read off the report’s chart; the national median €4,013 and the state range are in its text)'
        },
        rent: {
          v: 1178,
          cur: 'EUR',
          year: 2026,
          area: 'city',
          tag: 'anecdotal',
          src: 'https://www.numbeo.com/cost-of-living/in/Frankfurt',
          by: 'Numbeo (crowd-sourced; 879 entries by 113 contributors in the past 12 months), one-bedroom flat in the city centre, average, Frankfurt',
          seen: '2026-10-03'
        }
      },
      programmes: []
    },
    {
      id: 'munich', name: 'Munich', lat: 48.14, lon: 11.58,
      knownFor: 'Corporate headquarters, insurance, software and engineering',
      why: ['de-mu-dax', 'de-mu-ict', 'de-mu-emp'],
      sectors: ['Automotive', 'Insurance and reinsurance', 'Software and ICT', 'Semiconductors', 'Aerospace engines', 'Electrical engineering'],
      employers: [
        { name: 'BMW Group', note: 'headquarters', c: 'de-mu-dax' },
        { name: 'Siemens', note: 'headquarters', c: 'de-mu-dax' },
        { name: 'Allianz', note: 'headquarters', c: 'de-mu-dax' },
        { name: 'Munich Re', note: 'headquarters', c: 'de-mu-dax' },
        { name: 'Infineon', note: 'headquarters in Neubiberg, next to Munich', c: 'de-mu-dax' },
        { name: 'Google', note: 'Arnulfpost site for up to 2,000 staff', c: 'de-mu-google' },
        { t: 'Munich’s start-up ecosystem', note: 'ecosystem value $71 billion, Europe’s average $14.3 billion', c: 'de-mu-gser' }
      ],
      demand: {
        business: ['dominant', 'de-mu-dax'],
        finance: ['strong', 'de-mu-dax'],
        management: ['strong', 'de-mu-dax'],
        it: ['strong', 'de-mu-ict', 'de-mu-google'],
        software: ['strong', 'de-mu-ict', 'de-mu-google'],
        economics: 'gap', accounting: 'gap', marketing: 'gap', logistics: 'gap', analytics: 'gap', datasci: 'gap', ai: 'gap', cs: 'gap', bigdata: 'gap'
      },
      finance: {
        risk: ['strong', 'de-mu-dax'],
        ib: 'gap', banking: 'gap', am: 'gap', pe: 'gap', vc: 'gap', corpfin: 'gap', finconsult: 'gap'
      },
      standing: [
        { f: 'business', s: [5, 3, 2], c: ['de-mu-dax', 'de-mu-emp', 'de-ba-top'] },
        { f: 'management', s: [5, 3, 2], c: ['de-mu-dax', 'de-ba-top'] },
        { f: 'finance', s: [4, 2, 1], c: ['de-mu-dax', 'de-gfci'] },
        { f: 'it', s: [4, 3, 2], c: ['de-mu-ict', 'de-mu-google', 'de-mu-gser'] },
        { f: 'software', s: [4, 3, 2], c: ['de-mu-ict', 'de-mu-google', 'de-mu-gser'] }
      ],
      metrics: {
        pop: {
          v: 2981735,
          year: 2023,
          area: 'metro',
          tag: 'data',
          src: 'https://ec.europa.eu/eurostat/databrowser/view/met_pjanaggr3/default/table',
          by: 'Eurostat, population on 1 January by metropolitan region (met_pjanaggr3), München',
          seen: '2026-10-03'
        },
        gdp: {
          v: 213.4,
          cur: 'EUR',
          year: 2021,
          area: 'metro',
          tag: 'data',
          src: 'https://ec.europa.eu/eurostat/databrowser/view/met_10r_3gdp/default/table',
          by: 'Eurostat, GDP at current market prices by metropolitan region (met_10r_3gdp), München, million euro ÷ 1,000',
          seen: '2026-10-03'
        },
        wage: {
          tag: 'data',
          seen: '2026-10-03',
          v: 4166,
          cur: 'EUR',
          basis: 'median',
          year: 2024,
          area: 'region',
          src: 'https://statistik.arbeitsagentur.de/DE/Statischer-Content/Statistiken/Fachstatistiken/Beschaeftigung/Generische-Publikationen/Blickpunkt-Arbeitsmarkt-Analyse-zur-Entgeltstatistik.pdf',
          by: 'Federal Employment Agency, Analyse zur Entgeltstatistik 2024 (Oct 2025): median monthly gross pay of full-time employees subject to social insurance, Bayern, 31 Dec 2024 (value read off the report’s chart; the national median €4,013 and the state range are in its text)'
        },
        rent: {
          v: 1500,
          cur: 'EUR',
          year: 2026,
          area: 'city',
          tag: 'anecdotal',
          src: 'https://www.numbeo.com/cost-of-living/in/Munich',
          by: 'Numbeo (crowd-sourced; 1920 entries by 253 contributors in the past 12 months), one-bedroom flat in the city centre, average, Munich',
          seen: '2026-10-03'
        }
      },
      programmes: [
        { calc: 'masters', track: 'mim', id: 'tum-mim', name: 'TUM — Master in Management' },
        { calc: 'masters', track: 'mif', id: 'tum-fim', name: 'TUM — Master in Finance and Information Management' },
        { calc: 'computing', track: 'cs', id: 'tum-informatics', name: 'TUM — MSc Informatics' }
      ]
    },
    {
      id: 'berlin', name: 'Berlin', lat: 52.52, lon: 13.40,
      knownFor: 'Start-ups, software and AI',
      why: ['de-ber-startups', 'de-ber-gser', 'de-ber-ict'],
      sectors: ['Start-ups and venture capital', 'E-commerce', 'Software', 'AI research', 'Climate tech', 'Government'],
      employers: [
        { name: 'Zalando', note: 'headquarters', c: 'de-ber-zalando' },
        { t: 'Berlin’s start-up ecosystem', note: 'over 1,600 venture-funded companies', c: 'de-ber-startups' },
        { t: 'Berlin’s information and communication employers', note: '170,560 jobs (2023)', c: 'de-ber-ict' }
      ],
      demand: {
        business: ['present', 'de-ber-zalando'],
        it: ['strong', 'de-ber-ict', 'de-ber-gser'],
        software: ['dominant', 'de-ber-startups'],
        ai: ['strong', 'de-ber-ai'],
        finance: 'gap', economics: 'gap', accounting: 'gap', management: 'gap', marketing: 'gap', logistics: 'gap', analytics: 'gap', datasci: 'gap', cs: 'gap', bigdata: 'gap'
      },
      finance: {
        vc: ['strong', 'de-ber-startups'],
        ib: 'gap', banking: 'gap', am: 'gap', pe: 'gap', corpfin: 'gap', risk: 'gap', finconsult: 'gap'
      },
      standing: [
        { f: 'software', s: [5, 4, 2], c: ['de-ber-startups', 'de-ber-gser', 'de-ber-ict'] },
        { f: 'ai', s: [5, 4, 2], c: ['de-ber-ai', 'de-ber-gser'] },
        { f: 'it', s: [4, 3, 2], c: ['de-ber-ict', 'de-ber-gser'] }
      ],
      metrics: {
        pop: {
          v: 5481613,
          year: 2023,
          area: 'metro',
          tag: 'data',
          src: 'https://ec.europa.eu/eurostat/databrowser/view/met_pjanaggr3/default/table',
          by: 'Eurostat, population on 1 January by metropolitan region (met_pjanaggr3), Berlin',
          seen: '2026-10-03'
        },
        gdp: {
          v: 217.9,
          cur: 'EUR',
          year: 2021,
          area: 'metro',
          tag: 'data',
          src: 'https://ec.europa.eu/eurostat/databrowser/view/met_10r_3gdp/default/table',
          by: 'Eurostat, GDP at current market prices by metropolitan region (met_10r_3gdp), Berlin, million euro ÷ 1,000',
          seen: '2026-10-03'
        },
        wage: {
          tag: 'data',
          seen: '2026-10-03',
          v: 4198,
          cur: 'EUR',
          basis: 'median',
          year: 2024,
          area: 'region',
          src: 'https://statistik.arbeitsagentur.de/DE/Statischer-Content/Statistiken/Fachstatistiken/Beschaeftigung/Generische-Publikationen/Blickpunkt-Arbeitsmarkt-Analyse-zur-Entgeltstatistik.pdf',
          by: 'Federal Employment Agency, Analyse zur Entgeltstatistik 2024 (Oct 2025): median monthly gross pay of full-time employees subject to social insurance, Berlin, 31 Dec 2024'
        },
        rent: {
          v: 1321,
          cur: 'EUR',
          year: 2026,
          area: 'city',
          tag: 'anecdotal',
          src: 'https://www.numbeo.com/cost-of-living/in/Berlin',
          by: 'Numbeo (crowd-sourced; 1960 entries by 313 contributors in the past 12 months), one-bedroom flat in the city centre, average, Berlin',
          seen: '2026-10-03'
        }
      },
      programmes: []
    },
    {
      id: 'hamburg', name: 'Hamburg', lat: 53.55, lon: 9.99,
      knownFor: 'Port logistics, aviation and e-commerce',
      why: ['de-ham-port', 'de-ham-air', 'de-ham-ports', 'de-ham-emp'],
      sectors: ['Port and shipping', 'Aviation', 'E-commerce and retail', 'Media'],
      employers: [
        { name: 'Port of Hamburg', note: 'Germany’s largest seaport', c: 'de-ham-port' },
        { name: 'Airbus', note: 'largest German site, about 18,000 staff', c: 'de-ham-air' },
        { name: 'Lufthansa Technik', note: 'nearly 10,000 staff', c: 'de-ham-air' },
        { name: 'Otto Group', note: 'headquarters', c: 'de-ham-otto' },
        { t: 'Hamburg’s information and communication employers', note: '87,670 jobs (2023)', c: 'de-ham-emp' }
      ],
      demand: {
        business: ['present', 'de-ham-otto'],
        logistics: ['dominant', 'de-ham-port'],
        it: ['strong', 'de-ham-emp'],
        finance: 'gap', economics: 'gap', accounting: 'gap', management: 'gap', marketing: 'gap', analytics: 'gap', software: 'gap', datasci: 'gap', ai: 'gap', cs: 'gap', bigdata: 'gap'
      },
      standing: [
        { f: 'logistics', s: [5, 4, 2], c: ['de-ham-port', 'de-ham-ports'] },
        { f: 'it', s: [3, 2, 1], c: ['de-ham-emp', 'de-gser-ham'] }
      ],
      metrics: {
        pop: {
          v: 3423121,
          year: 2023,
          area: 'metro',
          tag: 'data',
          src: 'https://ec.europa.eu/eurostat/databrowser/view/met_pjanaggr3/default/table',
          by: 'Eurostat, population on 1 January by metropolitan region (met_pjanaggr3), Hamburg',
          seen: '2026-10-03'
        },
        gdp: {
          v: 179.5,
          cur: 'EUR',
          year: 2021,
          area: 'metro',
          tag: 'data',
          src: 'https://ec.europa.eu/eurostat/databrowser/view/met_10r_3gdp/default/table',
          by: 'Eurostat, GDP at current market prices by metropolitan region (met_10r_3gdp), Hamburg, million euro ÷ 1,000',
          seen: '2026-10-03'
        },
        wage: {
          tag: 'data',
          seen: '2026-10-03',
          v: 4527,
          cur: 'EUR',
          basis: 'median',
          year: 2024,
          area: 'region',
          src: 'https://statistik.arbeitsagentur.de/DE/Statischer-Content/Statistiken/Fachstatistiken/Beschaeftigung/Generische-Publikationen/Blickpunkt-Arbeitsmarkt-Analyse-zur-Entgeltstatistik.pdf',
          by: 'Federal Employment Agency, Analyse zur Entgeltstatistik 2024 (Oct 2025): median monthly gross pay of full-time employees subject to social insurance, Hamburg, 31 Dec 2024'
        },
        rent: {
          v: 1146,
          cur: 'EUR',
          year: 2026,
          area: 'city',
          tag: 'anecdotal',
          src: 'https://www.numbeo.com/cost-of-living/in/Hamburg',
          by: 'Numbeo (crowd-sourced; 1026 entries by 124 contributors in the past 12 months), one-bedroom flat in the city centre, average, Hamburg',
          seen: '2026-10-03'
        }
      },
      programmes: []
    },
    {
      id: 'stuttgart', name: 'Stuttgart', lat: 48.78, lon: 9.18,
      knownFor: 'Car makers, suppliers and automotive software',
      why: ['de-stu-cluster', 'de-stu-emp'],
      sectors: ['Automotive', 'Automotive suppliers', 'Mechanical engineering', 'Automotive software'],
      employers: [
        { name: 'Mercedes-Benz', note: 'headquarters', c: 'de-stu-cluster' },
        { name: 'Porsche', note: 'headquarters', c: 'de-stu-cluster' },
        { name: 'Bosch', note: 'headquarters in Gerlingen', c: 'de-stu-bosch' },
        { name: 'Mahle, Mann+Hummel, Eberspächer', note: 'supplier headquarters', c: 'de-stu-cluster' },
        { name: 'Vector Informatik', note: 'automotive software, headquarters', c: 'de-stu-cluster' },
        { t: 'Stuttgart’s start-up ecosystem', note: 'ecosystem value $6 billion', c: 'de-gser-stu' }
      ],
      demand: {
        business: ['strong', 'de-stu-cluster'],
        management: ['strong', 'de-stu-cluster', 'de-stu-bosch'],
        software: ['present', 'de-stu-cluster'],
        finance: 'gap', economics: 'gap', accounting: 'gap', marketing: 'gap', logistics: 'gap', analytics: 'gap', it: 'gap', datasci: 'gap', ai: 'gap', cs: 'gap', bigdata: 'gap'
      },
      standing: [
        { f: 'management', s: [4, 3, 2], c: ['de-stu-cluster', 'de-stu-bosch', 'de-stu-emp', 'de-ba-top'] },
        { f: 'business', s: [4, 2, 1], c: ['de-stu-cluster', 'de-stu-emp', 'de-gfci'] }
      ],
      metrics: {
        pop: {
          v: 2816924,
          year: 2023,
          area: 'metro',
          tag: 'data',
          src: 'https://ec.europa.eu/eurostat/databrowser/view/met_pjanaggr3/default/table',
          by: 'Eurostat, population on 1 January by metropolitan region (met_pjanaggr3), Stuttgart',
          seen: '2026-10-03'
        },
        gdp: {
          v: 155.7,
          cur: 'EUR',
          year: 2021,
          area: 'metro',
          tag: 'data',
          src: 'https://ec.europa.eu/eurostat/databrowser/view/met_10r_3gdp/default/table',
          by: 'Eurostat, GDP at current market prices by metropolitan region (met_10r_3gdp), Stuttgart, million euro ÷ 1,000',
          seen: '2026-10-03'
        },
        wage: {
          tag: 'data',
          seen: '2026-10-03',
          v: 4356,
          cur: 'EUR',
          basis: 'median',
          year: 2024,
          area: 'region',
          src: 'https://statistik.arbeitsagentur.de/DE/Statischer-Content/Statistiken/Fachstatistiken/Beschaeftigung/Generische-Publikationen/Blickpunkt-Arbeitsmarkt-Analyse-zur-Entgeltstatistik.pdf',
          by: 'Federal Employment Agency, Analyse zur Entgeltstatistik 2024 (Oct 2025): median monthly gross pay of full-time employees subject to social insurance, Baden-Württemberg, 31 Dec 2024 (value read off the report’s chart; the national median €4,013 and the state range are in its text)'
        },
        rent: {
          v: 1118,
          cur: 'EUR',
          year: 2026,
          area: 'city',
          tag: 'anecdotal',
          src: 'https://www.numbeo.com/cost-of-living/in/Stuttgart',
          by: 'Numbeo (crowd-sourced; 724 entries by 87 contributors in the past 12 months), one-bedroom flat in the city centre, average, Stuttgart',
          seen: '2026-10-03'
        }
      },
      programmes: []
    },
    {
      id: 'rhine-neckar', name: 'Rhine-Neckar (Walldorf, Mannheim)', lat: 49.40, lon: 8.55,
      knownFor: 'Enterprise software and the Mannheim business school',
      why: ['de-rn-sap', 'de-rn-emp'],
      sectors: ['Enterprise software', 'Chemicals', 'Higher education'],
      employers: [
        { name: 'SAP', note: 'headquarters in Walldorf', c: 'de-rn-sap' },
        { name: 'BASF', note: 'Ludwigshafen site, about 33,000 employees', c: 'de-rn-basf' }
      ],
      demand: {
        business: ['present', 'de-rn-basf'],
        it: ['present', 'de-rn-sap'],
        software: ['present', 'de-rn-sap', 'de-rn-sapfacts'],
        finance: 'gap', economics: 'gap', accounting: 'gap', management: 'gap', marketing: 'gap', logistics: 'gap', analytics: 'gap', datasci: 'gap', ai: 'gap', cs: 'gap', bigdata: 'gap'
      },
      standing: [
        { f: 'software', s: [4, 3, 2], c: ['de-rn-sap', 'de-rn-sapfacts'] },
        { f: 'it', s: [3, 2, 1], c: ['de-rn-sap', 'de-rn-emp'] }
      ],
      metrics: {
        pop: {
          v: 1209891,
          year: 2023,
          area: 'metro',
          tag: 'data',
          src: 'https://ec.europa.eu/eurostat/databrowser/view/met_pjanaggr3/default/table',
          by: 'Eurostat, population on 1 January by metropolitan region (met_pjanaggr3), Mannheim-Ludwigshafen',
          seen: '2026-10-03'
        },
        gdp: {
          v: 56.1,
          cur: 'EUR',
          year: 2021,
          area: 'metro',
          tag: 'data',
          src: 'https://ec.europa.eu/eurostat/databrowser/view/met_10r_3gdp/default/table',
          by: 'Eurostat, GDP at current market prices by metropolitan region (met_10r_3gdp), Mannheim-Ludwigshafen, million euro ÷ 1,000',
          seen: '2026-10-03'
        },
        wage: {
          tag: 'data',
          seen: '2026-10-03',
          v: 4356,
          cur: 'EUR',
          basis: 'median',
          year: 2024,
          area: 'region',
          src: 'https://statistik.arbeitsagentur.de/DE/Statischer-Content/Statistiken/Fachstatistiken/Beschaeftigung/Generische-Publikationen/Blickpunkt-Arbeitsmarkt-Analyse-zur-Entgeltstatistik.pdf',
          by: 'Federal Employment Agency, Analyse zur Entgeltstatistik 2024 (Oct 2025): median monthly gross pay of full-time employees subject to social insurance, Baden-Württemberg, 31 Dec 2024 (value read off the report’s chart; the national median €4,013 and the state range are in its text)'
        },
        rent: {
          v: 843,
          cur: 'EUR',
          year: 2026,
          area: 'city',
          tag: 'anecdotal',
          src: 'https://www.numbeo.com/cost-of-living/in/Mannheim',
          by: 'Numbeo (crowd-sourced; 328 entries by 44 contributors in the past 12 months), one-bedroom flat in the city centre, average, Mannheim',
          seen: '2026-10-03'
        }
      },
      programmes: [
        { calc: 'masters', track: 'mim', id: 'mannheim-mmm', name: 'Mannheim — Mannheim Master in Management' },
        { calc: 'masters', track: 'mif', id: 'mannheim-mmfact', name: 'Mannheim — Master in Finance, Accounting and Taxation' },
        { calc: 'mba', name: 'Mannheim Business School (MBA)' }
      ]
    },
    {
      id: 'dusseldorf', name: 'Düsseldorf', lat: 51.23, lon: 6.78,
      knownFor: 'Corporate headquarters and consumer goods',
      why: ['de-mu-dax', 'de-dus-henkel', 'de-dus-emp'],
      sectors: ['Consumer goods', 'Defence and engineering', 'Telecoms', 'Professional services'],
      employers: [
        { name: 'Henkel', note: 'headquarters', c: 'de-dus-henkel' },
        { t: 'Four DAX headquarters', note: 'second only to Munich', c: 'de-mu-dax' },
        { name: 'Rheinmetall', note: 'head office, defence and automotive group', c: 'de-dus-rhein' },
        { name: 'Henkel', note: 'over 5,300 employees at the Düsseldorf headquarters site', c: 'de-dus-henkelsite' }
      ],
      demand: {
        business: ['strong', 'de-mu-dax'],
        marketing: ['present', 'de-dus-henkel'],
        finance: 'gap', economics: 'gap', accounting: 'gap', management: 'gap', logistics: 'gap', analytics: 'gap', it: 'gap', software: 'gap', datasci: 'gap', ai: 'gap', cs: 'gap', bigdata: 'gap'
      },
      standing: [
        { f: 'business', s: [4, 2, 1], c: ['de-mu-dax', 'de-dus-emp', 'de-dus-rhein'] },
        { f: 'marketing', s: [3, 2, 1], c: ['de-dus-henkel', 'de-dus-henkelsite'] }
      ],
      metrics: {
        pop: {
          v: 1576105,
          year: 2023,
          area: 'metro',
          tag: 'data',
          src: 'https://ec.europa.eu/eurostat/databrowser/view/met_pjanaggr3/default/table',
          by: 'Eurostat, population on 1 January by metropolitan region (met_pjanaggr3), Düsseldorf',
          seen: '2026-10-03'
        },
        gdp: {
          v: 95.6,
          cur: 'EUR',
          year: 2021,
          area: 'metro',
          tag: 'data',
          src: 'https://ec.europa.eu/eurostat/databrowser/view/met_10r_3gdp/default/table',
          by: 'Eurostat, GDP at current market prices by metropolitan region (met_10r_3gdp), Düsseldorf, million euro ÷ 1,000',
          seen: '2026-10-03'
        },
        wage: {
          tag: 'data',
          seen: '2026-10-03',
          v: 4038,
          cur: 'EUR',
          basis: 'median',
          year: 2024,
          area: 'region',
          src: 'https://statistik.arbeitsagentur.de/DE/Statischer-Content/Statistiken/Fachstatistiken/Beschaeftigung/Generische-Publikationen/Blickpunkt-Arbeitsmarkt-Analyse-zur-Entgeltstatistik.pdf',
          by: 'Federal Employment Agency, Analyse zur Entgeltstatistik 2024 (Oct 2025): median monthly gross pay of full-time employees subject to social insurance, Nordrhein-Westfalen, 31 Dec 2024 (value read off the report’s chart; the national median €4,013 and the state range are in its text)'
        },
        rent: {
          v: 960,
          cur: 'EUR',
          year: 2026,
          area: 'city',
          tag: 'anecdotal',
          src: 'https://www.numbeo.com/cost-of-living/in/Dusseldorf',
          by: 'Numbeo (crowd-sourced; 667 entries by 70 contributors in the past 12 months), one-bedroom flat in the city centre, average, Dusseldorf',
          seen: '2026-10-03'
        }
      },
      programmes: []
    },
    {
      id: 'wolfsburg', name: 'Wolfsburg', lat: 52.42, lon: 10.79,
      knownFor: 'Volkswagen’s home town',
      why: ['de-wob-vw', 'de-wob-emp'],
      sectors: ['Automotive'],
      employers: [
        { name: 'Volkswagen', note: 'group headquarters', c: 'de-wob-vw' },
        { name: 'Volkswagen Wolfsburg plant', note: 'about 70,000 employees; headquarters of Volkswagen Passenger Cars', c: 'de-wob-plant' }
      ],
      demand: {
        management: ['present', 'de-wob-vw'],
        business: 'gap', finance: 'gap', economics: 'gap', accounting: 'gap', marketing: 'gap', logistics: 'gap', analytics: 'gap', it: 'gap', software: 'gap', datasci: 'gap', ai: 'gap', cs: 'gap', bigdata: 'gap'
      },
      standing: [
        { f: 'management', s: [3, 2, 1], c: ['de-wob-vw', 'de-wob-plant', 'de-wob-emp'] }
      ],
      metrics: {
        pop: {
          v: 1014477,
          year: 2023,
          area: 'metro',
          tag: 'data',
          src: 'https://ec.europa.eu/eurostat/databrowser/view/met_pjanaggr3/default/table',
          by: 'Eurostat, population on 1 January by metropolitan region (met_pjanaggr3), Braunschweig-Salzgitter-Wolfsburg',
          seen: '2026-10-03'
        },
        gdp: {
          v: 57.5,
          cur: 'EUR',
          year: 2021,
          area: 'metro',
          tag: 'data',
          src: 'https://ec.europa.eu/eurostat/databrowser/view/met_10r_3gdp/default/table',
          by: 'Eurostat, GDP at current market prices by metropolitan region (met_10r_3gdp), Braunschweig-Salzgitter-Wolfsburg, million euro ÷ 1,000',
          seen: '2026-10-03'
        },
        wage: {
          tag: 'data',
          seen: '2026-10-03',
          v: 3832,
          cur: 'EUR',
          basis: 'median',
          year: 2024,
          area: 'region',
          src: 'https://statistik.arbeitsagentur.de/DE/Statischer-Content/Statistiken/Fachstatistiken/Beschaeftigung/Generische-Publikationen/Blickpunkt-Arbeitsmarkt-Analyse-zur-Entgeltstatistik.pdf',
          by: 'Federal Employment Agency, Analyse zur Entgeltstatistik 2024 (Oct 2025): median monthly gross pay of full-time employees subject to social insurance, Niedersachsen, 31 Dec 2024 (value read off the report’s chart; the national median €4,013 and the state range are in its text)'
        }
      },
      programmes: []
    },
    {
      id: 'nuremberg', name: 'Nuremberg–Herzogenaurach', lat: 49.45, lon: 11.08,
      knownFor: 'Sports brands and their marketing',
      why: ['de-nue-adidas', 'de-nue-brands', 'de-nue-emp'],
      sectors: ['Sporting goods', 'Medical technology', 'Software for tax and accounting'],
      employers: [
        { name: 'adidas', note: 'headquarters in Herzogenaurach', c: 'de-nue-adidas' },
        { name: 'PUMA', note: 'headquarters in Herzogenaurach', c: 'de-nue-brands' },
        { name: 'DATEV', note: 'software for tax advisers and accountants, headquarters; more than 9,000 staff', c: 'de-nue-datev' },
        { name: 'Federal Employment Agency', note: 'central office in Nuremberg', c: 'de-nue-ba' }
      ],
      demand: {
        business: ['strong', 'de-nue-adidas', 'de-nue-brands'],
        accounting: ['present', 'de-nue-datev'],
        marketing: ['strong', 'de-nue-adidas', 'de-nue-brands'],
        finance: 'gap', economics: 'gap', management: 'gap', logistics: 'gap', analytics: 'gap', it: 'gap', software: 'gap', datasci: 'gap', ai: 'gap', cs: 'gap', bigdata: 'gap'
      },
      standing: [
        { f: 'marketing', s: [4, 2, 1], c: ['de-nue-adidas', 'de-nue-brands', 'de-nue-emp'] },
        { f: 'business', s: [4, 2, 1], c: ['de-nue-adidas', 'de-nue-brands', 'de-nue-emp'] }
      ],
      metrics: {
        pop: {
          v: 1374524,
          year: 2023,
          area: 'metro',
          tag: 'data',
          src: 'https://ec.europa.eu/eurostat/databrowser/view/met_pjanaggr3/default/table',
          by: 'Eurostat, population on 1 January by metropolitan region (met_pjanaggr3), Nürnberg',
          seen: '2026-10-03'
        },
        gdp: {
          v: 69.6,
          cur: 'EUR',
          year: 2021,
          area: 'metro',
          tag: 'data',
          src: 'https://ec.europa.eu/eurostat/databrowser/view/met_10r_3gdp/default/table',
          by: 'Eurostat, GDP at current market prices by metropolitan region (met_10r_3gdp), Nürnberg, million euro ÷ 1,000',
          seen: '2026-10-03'
        },
        wage: {
          tag: 'data',
          seen: '2026-10-03',
          v: 4166,
          cur: 'EUR',
          basis: 'median',
          year: 2024,
          area: 'region',
          src: 'https://statistik.arbeitsagentur.de/DE/Statischer-Content/Statistiken/Fachstatistiken/Beschaeftigung/Generische-Publikationen/Blickpunkt-Arbeitsmarkt-Analyse-zur-Entgeltstatistik.pdf',
          by: 'Federal Employment Agency, Analyse zur Entgeltstatistik 2024 (Oct 2025): median monthly gross pay of full-time employees subject to social insurance, Bayern, 31 Dec 2024 (value read off the report’s chart; the national median €4,013 and the state range are in its text)'
        },
        rent: {
          v: 801,
          cur: 'EUR',
          year: 2026,
          area: 'city',
          tag: 'anecdotal',
          src: 'https://www.numbeo.com/cost-of-living/in/Nuremberg',
          by: 'Numbeo (crowd-sourced; 714 entries by 61 contributors in the past 12 months), one-bedroom flat in the city centre, average, Nuremberg',
          seen: '2026-10-03'
        }
      },
      programmes: []
    },
    {
      id: 'dresden', name: 'Dresden', lat: 51.05, lon: 13.74,
      knownFor: 'Chipmaking and the software around it',
      why: ['de-dd-chips', 'de-dd-emp', 'de-dd-infineon'],
      sectors: ['Semiconductors', 'Microelectronics', 'Software'],
      employers: [
        { name: 'Infineon', note: 'chip fab', c: 'de-dd-chips' },
        { name: 'GlobalFoundries', note: 'chip fab', c: 'de-dd-chips' },
        { name: 'Bosch', note: 'chip fab', c: 'de-dd-chips' },
        { name: 'TSMC (ESMC)', note: 'fab due from 2027', c: 'de-dd-chips' },
        { name: 'Infineon Smart Power Fab', note: 'opened July 2026: €5 billion, 1,000 new direct jobs', c: 'de-dd-infineon' },
        { t: 'Saxony’s ICT and microelectronics sector', note: '82,500 employees in about 3,650 companies', c: 'de-dd-chips' }
      ],
      demand: {
        it: ['strong', 'de-dd-chips'],
        software: ['strong', 'de-dd-chips'],
        cs: ['strong', 'de-dd-chips'],
        business: 'gap', finance: 'gap', economics: 'gap', accounting: 'gap', management: 'gap', marketing: 'gap', logistics: 'gap', analytics: 'gap', datasci: 'gap', ai: 'gap', bigdata: 'gap'
      },
      standing: [
        { f: 'it', s: [4, 4, 2], c: ['de-dd-chips', 'de-dd-emp', 'de-dd-infineon'] },
        { f: 'cs', s: [4, 3, 2], c: ['de-dd-chips', 'de-dd-emp'] },
        { f: 'software', s: [3, 2, 1], c: ['de-dd-chips'] }
      ],
      metrics: {
        pop: {
          v: 1348569,
          year: 2023,
          area: 'metro',
          tag: 'data',
          src: 'https://ec.europa.eu/eurostat/databrowser/view/met_pjanaggr3/default/table',
          by: 'Eurostat, population on 1 January by metropolitan region (met_pjanaggr3), Dresden',
          seen: '2026-10-03'
        },
        gdp: {
          v: 46.4,
          cur: 'EUR',
          year: 2021,
          area: 'metro',
          tag: 'data',
          src: 'https://ec.europa.eu/eurostat/databrowser/view/met_10r_3gdp/default/table',
          by: 'Eurostat, GDP at current market prices by metropolitan region (met_10r_3gdp), Dresden, million euro ÷ 1,000',
          seen: '2026-10-03'
        },
        wage: {
          tag: 'data',
          seen: '2026-10-03',
          v: 3388,
          cur: 'EUR',
          basis: 'median',
          year: 2024,
          area: 'region',
          src: 'https://statistik.arbeitsagentur.de/DE/Statischer-Content/Statistiken/Fachstatistiken/Beschaeftigung/Generische-Publikationen/Blickpunkt-Arbeitsmarkt-Analyse-zur-Entgeltstatistik.pdf',
          by: 'Federal Employment Agency, Analyse zur Entgeltstatistik 2024 (Oct 2025): median monthly gross pay of full-time employees subject to social insurance, Sachsen, 31 Dec 2024 (value read off the report’s chart; the national median €4,013 and the state range are in its text)'
        },
        rent: {
          v: 667,
          cur: 'EUR',
          year: 2026,
          area: 'city',
          tag: 'anecdotal',
          src: 'https://www.numbeo.com/cost-of-living/in/Dresden',
          by: 'Numbeo (crowd-sourced; 582 entries by 46 contributors in the past 12 months), one-bedroom flat in the city centre, average, Dresden',
          seen: '2026-10-03'
        }
      },
      programmes: []
    },
    {
      id: 'cologne', name: 'Cologne', lat: 50.94, lon: 6.96,
      knownFor: 'A Rhineland metropolitan region of over a million jobs',
      why: ['de-cologne', 'de-cgn-ins', 'de-cgn-emp'],
      sectors: ['Insurance', 'Media', 'Chemicals'],
      employers: [
        { t: 'Employers in the metropolitan region', note: '1,178,000 jobs (2021)', c: 'de-cologne' },
        {
          t: 'Insurers with headquarters in Cologne',
          note: 'more than 50, including DEVK, Gothaer and DKV; about 24,000 insurance jobs',
          c: 'de-cgn-ins'
        }
      ],
      demand: {
        finance: ['strong', 'de-cgn-ins'],
        business: 'gap', economics: 'gap', accounting: 'gap', management: 'gap', marketing: 'gap', logistics: 'gap', analytics: 'gap', it: 'gap', software: 'gap', datasci: 'gap', ai: 'gap', cs: 'gap', bigdata: 'gap'
      },
      standing: [
        { f: 'finance', s: [4, 2, 1], c: ['de-cgn-ins', 'de-cgn-emp', 'de-gfci'] }
      ],
      metrics: {
        pop: {
          v: 2014918,
          year: 2023,
          area: 'metro',
          tag: 'data',
          src: 'https://ec.europa.eu/eurostat/databrowser/view/met_pjanaggr3/default/table',
          by: 'Eurostat, population on 1 January by metropolitan region (met_pjanaggr3), Köln',
          seen: '2026-10-03'
        },
        gdp: {
          v: 102.3,
          cur: 'EUR',
          year: 2021,
          area: 'metro',
          tag: 'data',
          src: 'https://ec.europa.eu/eurostat/databrowser/view/met_10r_3gdp/default/table',
          by: 'Eurostat, GDP at current market prices by metropolitan region (met_10r_3gdp), Köln, million euro ÷ 1,000',
          seen: '2026-10-03'
        },
        wage: {
          tag: 'data',
          seen: '2026-10-03',
          v: 4038,
          cur: 'EUR',
          basis: 'median',
          year: 2024,
          area: 'region',
          src: 'https://statistik.arbeitsagentur.de/DE/Statischer-Content/Statistiken/Fachstatistiken/Beschaeftigung/Generische-Publikationen/Blickpunkt-Arbeitsmarkt-Analyse-zur-Entgeltstatistik.pdf',
          by: 'Federal Employment Agency, Analyse zur Entgeltstatistik 2024 (Oct 2025): median monthly gross pay of full-time employees subject to social insurance, Nordrhein-Westfalen, 31 Dec 2024 (value read off the report’s chart; the national median €4,013 and the state range are in its text)'
        },
        rent: {
          v: 1050,
          cur: 'EUR',
          year: 2026,
          area: 'city',
          tag: 'anecdotal',
          src: 'https://www.numbeo.com/cost-of-living/in/Cologne',
          by: 'Numbeo (crowd-sourced; 740 entries by 82 contributors in the past 12 months), one-bedroom flat in the city centre, average, Cologne',
          seen: '2026-10-03'
        }
      },
      programmes: []
    },
    {
      id: 'ruhr', name: 'Ruhr (Essen, Dortmund)', lat: 51.46, lon: 7.01,
      knownFor: 'Germany’s old industrial heartland, about 2.5 million jobs',
      why: ['de-ruhr', 'de-ruhr-emp'],
      sectors: ['Energy', 'Steel and metals', 'Logistics'],
      employers: [
        { t: 'Employers in the metropolitan region', note: '2,459,000 jobs (2021)', c: 'de-ruhr' },
        { name: 'RWE', note: 'head office in Essen', c: 'de-ruhr-rwe' },
        { name: 'thyssenkrupp', note: 'head office in Essen (registered in Duisburg and Essen)', c: 'de-ruhr-tk' },
        { name: 'Brenntag', note: 'chemicals distributor, head office in Essen', c: 'de-ruhr-brenntag' }
      ],
      demand: {
        business: ['strong', 'de-ruhr-rwe', 'de-ruhr-tk', 'de-ruhr-brenntag'],
        finance: 'gap', economics: 'gap', accounting: 'gap', management: 'gap', marketing: 'gap', logistics: 'gap', analytics: 'gap', it: 'gap', software: 'gap', datasci: 'gap', ai: 'gap', cs: 'gap', bigdata: 'gap'
      },
      standing: [
        { f: 'business', s: [4, 2, 1], c: ['de-ruhr-rwe', 'de-ruhr-tk', 'de-ruhr-brenntag', 'de-ruhr-emp'] }
      ],
      metrics: {
        pop: {
          v: 5147820,
          year: 2023,
          area: 'metro',
          tag: 'data',
          src: 'https://ec.europa.eu/eurostat/databrowser/view/met_pjanaggr3/default/table',
          by: 'Eurostat, population on 1 January by metropolitan region (met_pjanaggr3), Ruhrgebiet',
          seen: '2026-10-03'
        },
        gdp: {
          v: 180.5,
          cur: 'EUR',
          year: 2021,
          area: 'metro',
          tag: 'data',
          src: 'https://ec.europa.eu/eurostat/databrowser/view/met_10r_3gdp/default/table',
          by: 'Eurostat, GDP at current market prices by metropolitan region (met_10r_3gdp), Ruhrgebiet, million euro ÷ 1,000',
          seen: '2026-10-03'
        },
        wage: {
          tag: 'data',
          seen: '2026-10-03',
          v: 4038,
          cur: 'EUR',
          basis: 'median',
          year: 2024,
          area: 'region',
          src: 'https://statistik.arbeitsagentur.de/DE/Statischer-Content/Statistiken/Fachstatistiken/Beschaeftigung/Generische-Publikationen/Blickpunkt-Arbeitsmarkt-Analyse-zur-Entgeltstatistik.pdf',
          by: 'Federal Employment Agency, Analyse zur Entgeltstatistik 2024 (Oct 2025): median monthly gross pay of full-time employees subject to social insurance, Nordrhein-Westfalen, 31 Dec 2024 (value read off the report’s chart; the national median €4,013 and the state range are in its text)'
        },
        rent: {
          v: 569,
          cur: 'EUR',
          year: 2026,
          area: 'city',
          tag: 'anecdotal',
          src: 'https://www.numbeo.com/cost-of-living/in/Essen',
          by: 'Numbeo (crowd-sourced; 319 entries by 32 contributors in the past 12 months), one-bedroom flat in the city centre, average, Essen',
          seen: '2026-10-03'
        }
      },
      programmes: []
    },
    {
      id: 'hanover', name: 'Hanover', lat: 52.37, lon: 9.74,
      knownFor: 'Lower Saxony’s capital, for insurance and trade fairs',
      why: ['de-hanover', 'de-han-emp'],
      sectors: ['Insurance', 'Automotive', 'Public sector'],
      employers: [
        { t: 'Employers in the metropolitan region', note: '756,000 jobs (2021)', c: 'de-hanover' },
        { name: 'Continental', note: 'headquarters; campus opened in December 2023 for about 2,400 staff', c: 'de-han-conti' },
        { name: 'Talanx', note: 'insurance group, based in Hannover', c: 'de-han-talanx' }
      ],
      demand: {
        business: ['present', 'de-han-conti'],
        finance: ['present', 'de-han-talanx'],
        economics: 'gap', accounting: 'gap', management: 'gap', marketing: 'gap', logistics: 'gap', analytics: 'gap', it: 'gap', software: 'gap', datasci: 'gap', ai: 'gap', cs: 'gap', bigdata: 'gap'
      },
      standing: [
        { f: 'finance', s: [3, 2, 1], c: ['de-han-talanx', 'de-han-emp'] }
      ],
      metrics: {
        pop: {
          v: 1333851,
          year: 2023,
          area: 'metro',
          tag: 'data',
          src: 'https://ec.europa.eu/eurostat/databrowser/view/met_pjanaggr3/default/table',
          by: 'Eurostat, population on 1 January by metropolitan region (met_pjanaggr3), Hannover',
          seen: '2026-10-03'
        },
        gdp: {
          v: 60.3,
          cur: 'EUR',
          year: 2021,
          area: 'metro',
          tag: 'data',
          src: 'https://ec.europa.eu/eurostat/databrowser/view/met_10r_3gdp/default/table',
          by: 'Eurostat, GDP at current market prices by metropolitan region (met_10r_3gdp), Hannover, million euro ÷ 1,000',
          seen: '2026-10-03'
        },
        wage: {
          tag: 'data',
          seen: '2026-10-03',
          v: 3832,
          cur: 'EUR',
          basis: 'median',
          year: 2024,
          area: 'region',
          src: 'https://statistik.arbeitsagentur.de/DE/Statischer-Content/Statistiken/Fachstatistiken/Beschaeftigung/Generische-Publikationen/Blickpunkt-Arbeitsmarkt-Analyse-zur-Entgeltstatistik.pdf',
          by: 'Federal Employment Agency, Analyse zur Entgeltstatistik 2024 (Oct 2025): median monthly gross pay of full-time employees subject to social insurance, Niedersachsen, 31 Dec 2024 (value read off the report’s chart; the national median €4,013 and the state range are in its text)'
        },
        rent: {
          v: 858,
          cur: 'EUR',
          year: 2026,
          area: 'city',
          tag: 'anecdotal',
          src: 'https://www.numbeo.com/cost-of-living/in/Hanover',
          by: 'Numbeo (crowd-sourced; 433 entries by 35 contributors in the past 12 months), one-bedroom flat in the city centre, average, Hanover',
          seen: '2026-10-03'
        }
      },
      programmes: []
    },
    {
      id: 'leipzig', name: 'Leipzig', lat: 51.34, lon: 12.37,
      knownFor: 'Eastern Germany’s growing logistics and car-making city',
      why: ['de-leipzig', 'de-lej-emp'],
      sectors: ['Logistics', 'Automotive', 'Energy'],
      employers: [
        { t: 'Employers in the metropolitan region', note: '548,000 jobs (2021)', c: 'de-leipzig' },
        { name: 'BMW Group Plant Leipzig', note: 'about 6,800 employees; 259,430 cars in 2025', c: 'de-lej-bmw' },
        { name: 'Porsche Leipzig', note: 'more than 4,600 employees', c: 'de-lej-porsche' }
      ],
      demand: {
        management: ['present', 'de-lej-bmw', 'de-lej-porsche'],
        business: 'gap', finance: 'gap', economics: 'gap', accounting: 'gap', marketing: 'gap', logistics: 'gap', analytics: 'gap', it: 'gap', software: 'gap', datasci: 'gap', ai: 'gap', cs: 'gap', bigdata: 'gap'
      },
      standing: [
        { f: 'management', s: [3, 2, 1], c: ['de-lej-bmw', 'de-lej-porsche', 'de-lej-emp'] }
      ],
      metrics: {
        pop: {
          v: 1076346,
          year: 2023,
          area: 'metro',
          tag: 'data',
          src: 'https://ec.europa.eu/eurostat/databrowser/view/met_pjanaggr3/default/table',
          by: 'Eurostat, population on 1 January by metropolitan region (met_pjanaggr3), Leipzig',
          seen: '2026-10-03'
        },
        gdp: {
          v: 38,
          cur: 'EUR',
          year: 2021,
          area: 'metro',
          tag: 'data',
          src: 'https://ec.europa.eu/eurostat/databrowser/view/met_10r_3gdp/default/table',
          by: 'Eurostat, GDP at current market prices by metropolitan region (met_10r_3gdp), Leipzig, million euro ÷ 1,000',
          seen: '2026-10-03'
        },
        wage: {
          tag: 'data',
          seen: '2026-10-03',
          v: 3388,
          cur: 'EUR',
          basis: 'median',
          year: 2024,
          area: 'region',
          src: 'https://statistik.arbeitsagentur.de/DE/Statischer-Content/Statistiken/Fachstatistiken/Beschaeftigung/Generische-Publikationen/Blickpunkt-Arbeitsmarkt-Analyse-zur-Entgeltstatistik.pdf',
          by: 'Federal Employment Agency, Analyse zur Entgeltstatistik 2024 (Oct 2025): median monthly gross pay of full-time employees subject to social insurance, Sachsen, 31 Dec 2024 (value read off the report’s chart; the national median €4,013 and the state range are in its text)'
        },
        rent: {
          v: 687,
          cur: 'EUR',
          year: 2026,
          area: 'city',
          tag: 'anecdotal',
          src: 'https://www.numbeo.com/cost-of-living/in/Leipzig',
          by: 'Numbeo (crowd-sourced; 519 entries by 60 contributors in the past 12 months), one-bedroom flat in the city centre, average, Leipzig',
          seen: '2026-10-03'
        }
      },
      programmes: []
    },
    {
      id: 'karlsruhe', name: 'Karlsruhe', lat: 49.01, lon: 8.40,
      knownFor: 'A technology university and a software and IT cluster',
      why: ['de-ka-kit', 'de-ka-emp', 'de-ka-cyber'],
      sectors: ['Higher education and research', 'Software and ICT', 'Energy'],
      employers: [
        { name: 'Karlsruhe Institute of Technology', note: '23,083 students and 10,131 employees in 2025', c: 'de-ka-kit' },
        { name: 'CyberForum', note: 'IT cluster network with about 1,200 member companies', c: 'de-ka-cyber' },
        { name: 'IONOS Group', note: 'cloud and web hosting, registered in Karlsruhe', c: 'de-ka-ionos' }
      ],
      demand: {
        it: ['strong', 'de-ka-cyber', 'de-ka-ionos'],
        software: ['present', 'de-ka-cyber'],
        cs: ['present', 'de-ka-kit'],
        business: 'gap', finance: 'gap', economics: 'gap', accounting: 'gap', management: 'gap', marketing: 'gap', logistics: 'gap', analytics: 'gap', datasci: 'gap', ai: 'gap', bigdata: 'gap'
      },
      standing: [
        { f: 'it', s: [3, 2, 1], c: ['de-ka-cyber', 'de-ka-ionos', 'de-ka-emp'] }
      ],
      metrics: {
        pop: {
          v: 763320,
          year: 2023,
          area: 'metro',
          tag: 'data',
          src: 'https://ec.europa.eu/eurostat/databrowser/view/met_pjanaggr3/default/table',
          by: 'Eurostat, population on 1 January by metropolitan region (met_pjanaggr3), Karlsruhe',
          seen: '2026-10-03'
        },
        gdp: {
          v: 39.9,
          cur: 'EUR',
          year: 2021,
          area: 'metro',
          tag: 'data',
          src: 'https://ec.europa.eu/eurostat/databrowser/view/met_10r_3gdp/default/table',
          by: 'Eurostat, GDP at current market prices by metropolitan region (met_10r_3gdp), Karlsruhe, million euro ÷ 1,000',
          seen: '2026-10-03'
        },
        wage: {
          tag: 'data',
          seen: '2026-10-03',
          v: 4356,
          cur: 'EUR',
          basis: 'median',
          year: 2024,
          area: 'region',
          src: 'https://statistik.arbeitsagentur.de/DE/Statischer-Content/Statistiken/Fachstatistiken/Beschaeftigung/Generische-Publikationen/Blickpunkt-Arbeitsmarkt-Analyse-zur-Entgeltstatistik.pdf',
          by: 'Federal Employment Agency, Analyse zur Entgeltstatistik 2024 (Oct 2025): median monthly gross pay of full-time employees subject to social insurance, Baden-Württemberg, 31 Dec 2024 (value read off the report’s chart; the national median €4,013 and the state range are in its text)'
        },
        rent: {
          v: 863,
          cur: 'EUR',
          year: 2026,
          area: 'city',
          tag: 'anecdotal',
          src: 'https://www.numbeo.com/cost-of-living/in/Karlsruhe',
          by: 'Numbeo (crowd-sourced; 371 entries by 41 contributors in the past 12 months), one-bedroom flat in the city centre, average, Karlsruhe',
          seen: '2026-10-03'
        }
      },
      programmes: []
    },
    {
      id: 'bonn', name: 'Bonn', lat: 50.73, lon: 7.10,
      knownFor: 'Deutsche Telekom’s headquarters and the United Nations in Germany',
      why: ['de-bn-telekom', 'de-bn-emp', 'de-bn-un'],
      sectors: ['Telecoms', 'Public sector'],
      employers: [
        { name: 'Deutsche Telekom', note: 'group headquarters; more than 12,000 staff in Bonn and around', c: 'de-bn-telekom' },
        { name: 'United Nations campus', note: '27 UN institutions with almost 1,000 staff', c: 'de-bn-un' }
      ],
      demand: {
        business: ['present', 'de-bn-telekom'],
        it: ['present', 'de-bn-telekom'],
        finance: 'gap', economics: 'gap', accounting: 'gap', management: 'gap', marketing: 'gap', logistics: 'gap', analytics: 'gap', software: 'gap', datasci: 'gap', ai: 'gap', cs: 'gap', bigdata: 'gap'
      },
      standing: [
        { f: 'it', s: [3, 2, 1], c: ['de-bn-telekom', 'de-bn-emp'] }
      ],
      metrics: {
        pop: {
          v: 944800,
          year: 2023,
          area: 'metro',
          tag: 'data',
          src: 'https://ec.europa.eu/eurostat/databrowser/view/met_pjanaggr3/default/table',
          by: 'Eurostat, population on 1 January by metropolitan region (met_pjanaggr3), Bonn',
          seen: '2026-10-03'
        },
        gdp: {
          v: 45.3,
          cur: 'EUR',
          year: 2021,
          area: 'metro',
          tag: 'data',
          src: 'https://ec.europa.eu/eurostat/databrowser/view/met_10r_3gdp/default/table',
          by: 'Eurostat, GDP at current market prices by metropolitan region (met_10r_3gdp), Bonn, million euro ÷ 1,000',
          seen: '2026-10-03'
        },
        wage: {
          tag: 'data',
          seen: '2026-10-03',
          v: 4038,
          cur: 'EUR',
          basis: 'median',
          year: 2024,
          area: 'region',
          src: 'https://statistik.arbeitsagentur.de/DE/Statischer-Content/Statistiken/Fachstatistiken/Beschaeftigung/Generische-Publikationen/Blickpunkt-Arbeitsmarkt-Analyse-zur-Entgeltstatistik.pdf',
          by: 'Federal Employment Agency, Analyse zur Entgeltstatistik 2024 (Oct 2025): median monthly gross pay of full-time employees subject to social insurance, Nordrhein-Westfalen, 31 Dec 2024 (value read off the report’s chart; the national median €4,013 and the state range are in its text)'
        },
        rent: {
          v: 942,
          cur: 'EUR',
          year: 2026,
          area: 'city',
          tag: 'anecdotal',
          src: 'https://www.numbeo.com/cost-of-living/in/Bonn',
          by: 'Numbeo (crowd-sourced; 381 entries by 44 contributors in the past 12 months), one-bedroom flat in the city centre, average, Bonn',
          seen: '2026-10-03'
        }
      },
      programmes: []
    }
  ],

  work: [
    { k: 'Language', c: ['de-lang'] },
    { k: 'Recruiting calendar', c: ['de-cal', 'de-cal-bcg', 'de-cal-trainee'] },
    { k: 'Where demand is now', c: ['de-ba', 'de-demand-ads'] },
    { k: 'Graduate labour market', c: ['de-grad-unemp'] },
    { k: 'Tax and net pay', c: ['de-tax', 'de-net'] },
    { k: 'Entry pay', c: ['de-ba-top'] }
  ],

  briefs: [
    ['places/visas-and-work-rights.md', '§3 Germany: job search, Blue Card, settlement, Chancenkarte'],
    ['getting-in/recruiting-calendar.md', 'Germany and DACH: the Praktikum and binding-offer internships'],
    ['places/countries-and-cities.md', '§2 language as a hiring barrier; Germany (DAAD, Destatis, IW)'],
    ['money/salaries-and-roi.md', '§5 net pay and rent, Munich'],
    ['careers/industrial-automotive-defence.md', 'automotive job cuts and hiring'],
    ['places/student-logistics.md', 'deposits, work-hour limits, health cover'],
    ['countries/de-germany.md', 'Country brief: hubs, employers, pay and standing']
  ],
  gaps: [
    'All German immigration, visa, residence permit and salary rules are consolidated from primary sources in visas_immigration/germany/germany_visas_immigration_guide.md.',
    'Demand in AI, data science and analytics is not rated for any German hub except Berlin AI: no source read that measures it by city.',
    'UK citizens who lived in Germany before 2021 keep Withdrawal Agreement rights; not covered here.',
    'Entry pay was not found by hub or by field: pay figures are state medians for all full-time employees (some read off the Federal Employment Agency’s chart), not graduate starting salaries; the net-pay figure is the library’s author calculation for Munich.',
    'Sector employment by city (ICT, finance) is published only for Berlin and Hamburg; for Cologne, the Ruhr, Hanover and Leipzig the ratings rest on named employers and city statistics.',
    'Headcounts for several large employers (Allianz, Siemens, Munich Re, Mercedes-Benz, E.ON, Rewe, Lufthansa, DHL) are not in the record because no figure we can cite was read.',
    'Pay metrics are state medians: they hide the gap between a city and its state, and the Federal Employment Agency lists only its ten highest districts.'
  ],

  claims: {
    'de-lang': {
      t: 'Indeed finds that only 2.4–2.8% of job postings in Germany, the UK and Ireland say the local language is not required (3.4% for Germany with the UK’s occupation mix), among the lowest of the seven countries compared; the Netherlands is at 8.7%.',
      tag: 'data',
      src: 'https://hiringlab.indeed.com/uk/blog/2024/10/10/how-language-flexibility-shapes-job-opportunities-for-migrants/',
      by: 'Indeed Hiring Lab, 10 Oct 2024',
      seen: '2026-10-08'
    },
    'de-cal': {
      t: 'A voluntary internship of more than three months after graduation must pay the minimum wage, while a mandatory one during the degree need not, so German employers recruit through internships taken while enrolled.',
      tag: 'data',
      src: 'https://www.gesetze-im-internet.de/milog/__22.html',
      by: 'Mindestlohngesetz §22, via getting-in/recruiting-calendar.md',
      seen: '2026-09-30'
    },
    'de-cal-bcg': {
      t: 'Strategy consulting in Germany uses the internship as the job interview: top interns can receive a binding full-time offer without further interviews.',
      tag: 'employer-stated',
      src: 'https://careers.bcg.com/global/en/germany-austria-bindungsprogramme',
      by: 'BCG Germany/Austria, via getting-in/recruiting-calendar.md',
      seen: '2026-09-30'
    },
    'de-ba': {
      t: 'In the Federal Employment Agency’s 2025 shortage analysis, software development is no longer a shortage occupation; the 157 shortage occupations are led by care, health and skilled trades.',
      tag: 'data',
      src: 'https://statistik.arbeitsagentur.de/DE/Statischer-Content/Statistiken/Themen-im-Fokus/Fachkraeftebedarf/Fachkraefteengpassanalyse/Fachkraefteengpassanalyse.html',
      by: 'Bundesagentur für Arbeit, Fachkräfteengpassanalyse 2025',
      seen: '2026-10-02'
    },
    'de-cal-trainee': {
      t: 'Companies with fixed trainee entry dates mostly start in October (about 40%), with some in January and April, while others such as Volkswagen and Deutsche Telekom take people at any time; the application process often takes about three months.',
      tag: 'practitioner consensus',
      src: 'https://www.e-fellows.net/karriere/trainee/bewerbung-fuer-trainee-programme',
      by: 'e-fellows.net, applying to trainee programmes',
      seen: '2026-10-08'
    },
    'de-demand-ads': {
      t: 'Entry-level job ads in Germany fell by about two-thirds from the 2022 record to mid-2026, against almost 39% for all ads; 26 of 28 occupational groups had fewer, with IT applications down 77% and marketing down 75%.',
      tag: 'data',
      src: 'https://www.zdfheute.de/wissen/berufseinsteiger-stelle-job-angebote-rueckgang-100.html',
      by: 'Indeed Hiring Lab analysis, reported by ZDFheute, 23 Sep 2026',
      seen: '2026-10-08'
    },
    'de-grad-unemp': {
      t: 'The unemployment rate of people with a degree was around 3% in 2024, up from about 2.5% in 2023, and the number of unemployed graduates averaged 290,000 in 2024 against 243,000 in 2023.',
      tag: 'data',
      src: 'https://www.forschung-und-lehre.de/karriere/arbeitslosenquote-bei-menschen-mit-hochschulabschluss-erreicht-allzeithoch-7245',
      by: 'Federal Employment Agency figures, reported by Forschung & Lehre, 21 Aug 2025',
      seen: '2026-10-08'
    },
    'de-tax': {
      t: 'The tax-free basic allowance is €12,348 for 2026; the official wage-tax calculator gives net pay for any salary.',
      tag: 'data',
      src: 'https://www.bundesfinanzministerium.de/Monatsberichte/Ausgabe/2026/02/Inhalte/Kapitel-2-Analysen/2-5-wichtigste-steuerliche-aenderungen-2026.html',
      by: 'Bundesministerium der Finanzen, Monatsbericht Feb 2026',
      seen: '2026-10-02'
    },
    'de-net': {
      t: 'At €60,000 gross a single employee in Munich keeps about 62% after income tax and social contributions, the lowest share among the library’s compared cities except Milan.',
      tag: 'practitioner consensus',
      src: 'research/money/salaries-and-roi.md',
      by: 'Admetia research library, money/salaries-and-roi.md §5 (author calculation)',
      seen: '2026-10-02'
    },
    'de-fra-banks': {
      t: 'About 73,900 people worked in banks in Frankfurt in the first quarter of 2025, almost 12% of Germany’s 632,200 bank employees; a rise to about 75,500 is expected by the end of 2026.',
      tag: 'data',
      src: 'https://www.helaba.de/blueprint/servlet/resource/blob/docs/681800/aab65d01433dfe7445b5307ae4a8c5a5/finanzplatz-fokus-20251030-data.pdf',
      by: 'Helaba Finanzplatz study, 30 Oct 2025, from Federal Employment Agency data',
      seen: '2026-10-02'
    },
    'de-fra-sup': {
      t: 'Frankfurt is the seat of the European Central Bank, the Bundesbank, the federal financial supervisor BaFin, the EU insurance supervisor EIOPA and the development bank KfW.',
      tag: 'data',
      src: 'https://www.frankfurt-main.ihk.de/standortpolitik/finanzplatz-frankfurt/institutionen-am-finanzplatz-frankfurt/aufsichtsaemter-verbaende-initiativen-adressen-kontakte/aufsichtsaemter-verbaende-initiativen2-5327112',
      by: 'IHK Frankfurt am Main, institutions at the financial centre',
      seen: '2026-10-02'
    },
    'de-fra-amla': {
      t: 'The EU Anti-Money Laundering Authority has its seat in Frankfurt; it started work in summer 2025 and plans about 430 staff by the end of 2027.',
      tag: 'data',
      src: 'https://www.amla.europa.eu/about-amla_en',
      by: 'AMLA, About',
      seen: '2026-10-02'
    },
    'de-fra-db': {
      t: 'Deutsche Bank is headquartered in Frankfurt am Main and had 89,879 employees at the end of 2025.',
      tag: 'employer-stated',
      src: 'https://www.db.com/who-we-are',
      by: 'Deutsche Bank, Who we are',
      seen: '2026-10-02'
    },
    'de-mu-dax': {
      t: 'Eight DAX companies have their headquarters in Munich and its region (Allianz, BMW, Infineon, MTU Aero Engines, Munich Re, Scout24, Siemens, Siemens Energy), more than any other German city; Düsseldorf follows with four.',
      tag: 'data',
      src: 'https://www.munich-business.eu/en/business-location/dax-listed-companies.html',
      by: 'City of Munich economic development, April 2026',
      seen: '2026-10-02'
    },
    'de-mu-ict': {
      t: 'Employment in Munich’s ICT sector has nearly doubled since 2014, and the city counts itself among the leading ICT locations in Germany and Europe.',
      tag: 'data',
      src: 'https://ru.muenchen.de/2025/125/Jahreswirtschaftsbericht-Stabilitaet-in-herausfordernden-Zeiten-119121',
      by: 'City of Munich, annual economic report 2025 (4 Jul 2025)',
      seen: '2026-10-02'
    },
    'de-mu-google': {
      t: 'Google is renovating the Arnulfpost building in Munich for up to 2,000 staff and calls Munich a key hub for development, research and product innovation.',
      tag: 'employer-stated',
      src: 'https://www.googlecloudpresscorner.com/2025-11-11-Google-Announces-EUR5-5-Billion-Investment-in-Germany,-including-AI-Infrastructure,-through-2029',
      by: 'Google, 11 Nov 2025',
      seen: '2026-10-02'
    },
    'de-ber-startups': {
      t: 'Berlin holds 43% of the value of Germany’s start-up ecosystem, with more than 1,600 venture-funded companies.',
      tag: 'data',
      src: 'https://www.berlin.de/sen/web/presse/pressemitteilungen/2026/pressemitteilung.1644800.php',
      by: 'Berlin Senate for Economics, Startup Ecosystem Report, 19 Feb 2026',
      seen: '2026-10-02'
    },
    'de-ber-ai': {
      t: 'Berlin counts more than 9,000 AI experts and places itself among Europe’s top three locations for frontier AI research.',
      tag: 'data',
      src: 'https://www.berlin.de/sen/web/presse/pressemitteilungen/2026/pressemitteilung.1644800.php',
      by: 'Berlin Senate for Economics, 19 Feb 2026',
      seen: '2026-10-02'
    },
    'de-ber-zalando': {
      t: 'Zalando SE is registered in Berlin (Valeska-Gert-Straße 5).',
      tag: 'employer-stated',
      src: 'https://corporate.zalando.com/en/legal-notice',
      by: 'Zalando, legal notice',
      seen: '2026-10-02'
    },
    'de-ham-port': {
      t: 'The Port of Hamburg, Germany’s largest seaport, handled 8.3 million TEU of containers and 114.6 million tonnes in 2025.',
      tag: 'data',
      src: 'https://www.hafen-hamburg.de/en/press1/news/hamburger-hafen-umschlagszahlen-2025-auf-einen-blick/',
      by: 'Port of Hamburg Marketing, 19 Feb 2026',
      seen: '2026-10-02'
    },
    'de-ham-air': {
      t: 'About 48,700 people work in Hamburg’s aviation industry; Airbus has its largest German site there with about 18,000 staff and Lufthansa Technik nearly 10,000.',
      tag: 'data',
      src: 'https://www.hamburg.de/politik-und-verwaltung/behoerden/bwai/aktuelles/pressemeldungen/hamburgs-luftfahrtbranche-waechst-rund-50-000-arbeitsplaetze-und-knapp-7-milliarden-euro-wertschoepfung-1068962',
      by: 'Hamburg Ministry for Economic Affairs, 10 Jun 2025',
      seen: '2026-10-02'
    },
    'de-ham-otto': {
      t: 'The Otto Group is registered in Hamburg.',
      tag: 'employer-stated',
      src: 'https://www.otto.de/unternehmen/de/impressum',
      by: 'Otto, legal notice',
      seen: '2026-10-02'
    },
    'de-stu-cluster': {
      t: 'Mercedes-Benz, Porsche, Bosch, Mahle, Eberspächer, Mann+Hummel and Vector Informatik have their headquarters in the Stuttgart Region, the most important focus of Germany’s car industry; 118,000 people work directly in its automotive cluster.',
      tag: 'data',
      src: 'https://www.region-stuttgart.de/wirtschaftsstandort/branchen/fahrzeugbau/',
      by: 'Wirtschaftsförderung Region Stuttgart',
      seen: '2026-10-02'
    },
    'de-stu-bosch': {
      t: 'Robert Bosch GmbH is registered in Gerlingen-Schillerhöhe, outside Stuttgart.',
      tag: 'employer-stated',
      src: 'https://www.bosch.com/de/impressum/',
      by: 'Bosch, legal notice',
      seen: '2026-10-02'
    },
    'de-rn-sap': {
      t: 'SAP SE is registered in Walldorf.',
      tag: 'employer-stated',
      src: 'https://www.sap.com/germany/about/legal/impressum.html',
      by: 'SAP, legal notice',
      seen: '2026-10-02'
    },
    'de-dus-henkel': {
      t: 'Henkel AG & Co. KGaA is registered in Düsseldorf.',
      tag: 'employer-stated',
      src: 'https://www.henkel.com/imprint',
      by: 'Henkel, imprint',
      seen: '2026-10-02'
    },
    'de-wob-vw': {
      t: 'Volkswagen AG is registered in Wolfsburg.',
      tag: 'employer-stated',
      src: 'https://www.volkswagen-group.com/de/impressum-15766',
      by: 'Volkswagen Group, legal notice',
      seen: '2026-10-02'
    },
    'de-nue-brands': {
      t: 'PUMA SE is registered in Herzogenaurach, near Nuremberg.',
      tag: 'employer-stated',
      src: 'https://about.puma.com/de/imprint',
      by: 'PUMA, imprint',
      seen: '2026-10-02'
    },
    'de-nue-adidas': {
      t: 'adidas has its headquarters in Herzogenaurach, near Nuremberg.',
      tag: 'employer-stated',
      src: 'https://www.adidas-group.com/en/about/headquarters',
      by: 'adidas, Headquarters',
      seen: '2026-10-02'
    },
    'de-dd-chips': {
      t: 'Saxony is Europe’s largest microelectronics location: one in three chips made in Europe comes from there; its ICT and microelectronics sector has about 3,650 companies and 82,500 employees, 49.5% of them in software. Bosch, Infineon, GlobalFoundries and, from 2027, TSMC run fabs in Dresden.',
      tag: 'data',
      src: 'https://standort-sachsen.de/de/standort-sachsen/branchenvielfalt/silicon-saxony-mehr-als-nur-chips',
      by: 'Wirtschaftsförderung Sachsen',
      seen: '2026-10-02'
    },
    'de-cologne': {
      t: 'Eurostat counts 1,178,000 people in work in the Cologne metropolitan region in 2021; the region’s GDP was €102.3 billion in 2021.',
      tag: 'data',
      src: 'https://ec.europa.eu/eurostat/databrowser/view/met_10r_3emp/default/table?lang=en',
      by: 'Eurostat, metropolitan regions: employment by activity (met_10r_3emp) and GDP (met_10r_3gdp)',
      seen: '2026-10-03'
    },
    'de-ruhr': {
      t: 'Eurostat counts 2,459,000 people in work in the Ruhr metropolitan region in 2021; the region’s GDP was €180.5 billion in 2021.',
      tag: 'data',
      src: 'https://ec.europa.eu/eurostat/databrowser/view/met_10r_3emp/default/table?lang=en',
      by: 'Eurostat, metropolitan regions: employment by activity (met_10r_3emp) and GDP (met_10r_3gdp)',
      seen: '2026-10-03'
    },
    'de-hanover': {
      t: 'Eurostat counts 756,000 people in work in the Hanover metropolitan region in 2021; the region’s GDP was €60.3 billion in 2021.',
      tag: 'data',
      src: 'https://ec.europa.eu/eurostat/databrowser/view/met_10r_3emp/default/table?lang=en',
      by: 'Eurostat, metropolitan regions: employment by activity (met_10r_3emp) and GDP (met_10r_3gdp)',
      seen: '2026-10-03'
    },
    'de-leipzig': {
      t: 'Eurostat counts 548,000 people in work in the Leipzig metropolitan region in 2021; the region’s GDP was €38.0 billion in 2021.',
      tag: 'data',
      src: 'https://ec.europa.eu/eurostat/databrowser/view/met_10r_3emp/default/table?lang=en',
      by: 'Eurostat, metropolitan regions: employment by activity (met_10r_3emp) and GDP (met_10r_3gdp)',
      seen: '2026-10-03'
    },
    'de-gfci': {
      t: 'The Global Financial Centres Index 40 (September 2026) ranks Frankfurt 29th in the world (down 14 places) and ninth among Western European centres, behind London, Zurich, Geneva, Luxembourg, Lugano, Paris, Copenhagen and Amsterdam; Berlin is 45th, Munich 58th (up 15) and Hamburg 84th, and Stuttgart is an associate centre.',
      tag: 'practitioner consensus',
      src: 'https://www.longfinance.net/media/documents/GFCI_40_Report_2026.09.16_v1.2.pdf',
      by: 'Z/Yen and the China Development Institute, GFCI 40, 16 Sep 2026, Tables 1, 2 and 8',
      seen: '2026-10-03'
    },
    'de-ba-top': {
      t: 'Frankfurt, Stuttgart, Munich, Wolfsburg and Ludwigshafen are among the ten districts and cities with the highest median monthly pay of full-time employees in Germany on 31 December 2024; the top is Ingolstadt at €5,855, against a national median of €4,013.',
      tag: 'data',
      src: 'https://statistik.arbeitsagentur.de/DE/Statischer-Content/Statistiken/Fachstatistiken/Beschaeftigung/Generische-Publikationen/Blickpunkt-Arbeitsmarkt-Analyse-zur-Entgeltstatistik.pdf',
      by: 'Federal Employment Agency, Analyse zur Entgeltstatistik 2024 (Oct 2025), section 2.5 and figure 13',
      seen: '2026-10-03'
    },
    'de-fra-emp': {
      t: 'Frankfurt am Main has 761,090 jobs (2023), 259,390 of them (34%) in finance and insurance, real estate and professional and business services, and only 39,890 in manufacturing.',
      tag: 'data',
      src: 'https://ec.europa.eu/eurostat/databrowser/view/nama_10r_3empers/default/table',
      by: 'Eurostat, employment (thousand persons) by NUTS 3 region and activity (nama_10r_3empers), 2023, NUTS 3 DE712 (city)',
      seen: '2026-10-03'
    },
    'de-fra-dbg': {
      t: 'Deutsche Börse Group’s headquarters is in Eschborn, just outside Frankfurt’s city limits, with more than 3,100 employees; the Frankfurt Stock Exchange trading hall is in the Alte Börse in the city centre.',
      tag: 'employer-stated',
      src: 'https://www.deutsche-boerse.com/dbg-en/about-us/deutsche-boerse-group/location-frankfurt-eschborn',
      by: 'Deutsche Börse Group, Frankfurt/Eschborn location page',
      seen: '2026-10-03'
    },
    'de-fra-airport': {
      t: 'Frankfurt Airport City employs approximately 80,000 people at some 500 companies and organisations on site, one of Germany’s largest job complexes at a single location.',
      tag: 'employer-stated',
      src: 'https://www.fraport.com/en/our-group/about-us.html',
      by: 'Fraport, About us (2025 figures)',
      seen: '2026-10-03'
    },
    'de-mu-emp': {
      t: 'Munich city has 1,203,650 jobs (2023): 340,320 in finance and insurance, real estate and professional and business services, 327,110 in trade, transport, hospitality and information and communication, and 113,320 in manufacturing.',
      tag: 'data',
      src: 'https://ec.europa.eu/eurostat/databrowser/view/nama_10r_3empers/default/table',
      by: 'Eurostat, employment (thousand persons) by NUTS 3 region and activity (nama_10r_3empers), 2023, NUTS 3 DE212 (city)',
      seen: '2026-10-03'
    },
    'de-mu-gser': {
      t: 'Startup Genome’s 2026 report puts the value of Munich’s start-up ecosystem at $71 billion (Europe’s average $14.3 billion, the world’s $25 billion), with $2.3 billion of seed and Series A funding and $10 billion of exits in 2021–2025.',
      tag: 'practitioner consensus',
      src: 'https://startupgenome.com/ecosystems/munich',
      by: 'Startup Genome, Global Startup Ecosystem Report 2026, Munich page',
      seen: '2026-10-03'
    },
    'de-ber-gser': {
      t: 'Startup Genome’s 2026 report ranks Berlin 22nd among the world’s start-up ecosystems and third in Europe (also third in Europe for talent and for its AI-native cluster), with an ecosystem value of $89.5 billion.',
      tag: 'practitioner consensus',
      src: 'https://startupgenome.com/ecosystems/berlin',
      by: 'Startup Genome, Global Startup Ecosystem Report 2026, Berlin page',
      seen: '2026-10-03'
    },
    'de-ber-ict': {
      t: 'Berlin has 2,190,900 jobs (2023), 170,560 of them in information and communication, 43,450 in finance and insurance and 432,460 in professional, scientific, technical and administrative services.',
      tag: 'data',
      src: 'https://ec.europa.eu/eurostat/databrowser/view/nama_10r_3empers/default/table',
      by: 'Eurostat, employment (thousand persons) by NUTS 3 region and activity (nama_10r_3empers), 2023, NUTS 3 DE300',
      seen: '2026-10-03'
    },
    'de-ham-emp': {
      t: 'Hamburg has 1,348,210 jobs (2023), 87,670 of them in information and communication, 45,240 in finance and insurance and 109,100 in manufacturing.',
      tag: 'data',
      src: 'https://ec.europa.eu/eurostat/databrowser/view/nama_10r_3empers/default/table',
      by: 'Eurostat, employment (thousand persons) by NUTS 3 region and activity (nama_10r_3empers), 2023, NUTS 3 DE600',
      seen: '2026-10-03'
    },
    'de-ham-ports': {
      t: 'In 2024 Hamburg handled 97.0 million tonnes of goods, the third-busiest port in the EU after Rotterdam (397.3 million) and Antwerp-Bruges (244.2 million).',
      tag: 'data',
      src: 'https://ec.europa.eu/eurostat/databrowser/view/mar_mg_aa_pwhd/default/table',
      by: 'Eurostat, gross weight of goods handled in main ports (mar_mg_aa_pwhd), 2024',
      seen: '2026-10-03'
    },
    'de-gser-ham': {
      t: 'Startup Genome’s 2026 report puts the value of Hamburg’s start-up ecosystem at $6 billion, with $962 million of seed and Series A funding in H2 2023–2025.',
      tag: 'practitioner consensus',
      src: 'https://startupgenome.com/ecosystems/hamburg',
      by: 'Startup Genome, Global Startup Ecosystem Report 2026, Hamburg page',
      seen: '2026-10-03'
    },
    'de-stu-emp': {
      t: 'Stuttgart city has 548,450 jobs (2023), 77,320 of them (14%) in manufacturing and 140,560 in finance and insurance, real estate and professional and business services.',
      tag: 'data',
      src: 'https://ec.europa.eu/eurostat/databrowser/view/nama_10r_3empers/default/table',
      by: 'Eurostat, employment (thousand persons) by NUTS 3 region and activity (nama_10r_3empers), 2023, NUTS 3 DE111 (city)',
      seen: '2026-10-03'
    },
    'de-gser-stu': {
      t: 'Startup Genome’s 2026 report puts the value of Stuttgart’s start-up ecosystem at $6 billion, with $293 million of seed and Series A funding in H2 2023–2025.',
      tag: 'practitioner consensus',
      src: 'https://startupgenome.com/ecosystems/stuttgart',
      by: 'Startup Genome, Global Startup Ecosystem Report 2026, Stuttgart page',
      seen: '2026-10-03'
    },
    'de-rn-emp': {
      t: 'Mannheim city has 249,430 jobs (2023), 41,640 of them in manufacturing; Heidelberg has 129,740 and the Rhein-Neckar district 247,100.',
      tag: 'data',
      src: 'https://ec.europa.eu/eurostat/databrowser/view/nama_10r_3empers/default/table',
      by: 'Eurostat, employment (thousand persons) by NUTS 3 region and activity (nama_10r_3empers), 2023, NUTS 3 DE126, DE125 and DE128',
      seen: '2026-10-03'
    },
    'de-rn-basf': {
      t: 'BASF’s Ludwigshafen site, the origin of its Verbund system, has around 33,000 employees, 125 production plants and calls itself the largest integrated chemical complex in the world.',
      tag: 'employer-stated',
      src: 'https://www.basf.com/global/en/who-we-are/organization/locations/europe/german-sites/ludwigshafen/the-site',
      by: 'BASF, Ludwigshafen: the site',
      seen: '2026-10-03'
    },
    'de-rn-sapfacts': {
      t: 'SAP reports 110,000 employees from 157-plus countries, total revenue of €36.8 billion (non-IFRS) in 2025 and 100-plus development locations.',
      tag: 'employer-stated',
      src: 'https://www.sap.com/about/company.html',
      by: 'SAP, Company information',
      seen: '2026-10-03'
    },
    'de-dus-emp': {
      t: 'Düsseldorf city has 576,590 jobs (2023), 175,900 of them (31%) in finance and insurance, real estate and professional and business services and 167,350 in trade, transport, hospitality and information and communication.',
      tag: 'data',
      src: 'https://ec.europa.eu/eurostat/databrowser/view/nama_10r_3empers/default/table',
      by: 'Eurostat, employment (thousand persons) by NUTS 3 region and activity (nama_10r_3empers), 2023, NUTS 3 DEA11 (city)',
      seen: '2026-10-03'
    },
    'de-dus-rhein': {
      t: 'Rheinmetall AG has its head office in Düsseldorf (Rheinmetall Platz 1) and says it employs around 34,000 people at 161 offices and production sites in more than 30 countries (status July 2026, continuing operations).',
      tag: 'employer-stated',
      src: 'https://www.rheinmetall.com/en/company/locations-worldwide',
      by: 'Rheinmetall, Locations worldwide',
      seen: '2026-10-03'
    },
    'de-dus-henkelsite': {
      t: 'More than 5,300 people work at Henkel’s headquarters site in Düsseldorf-Holthausen, which covers more than 1.42 million square metres; Henkel as a whole has about 50,000 employees worldwide, more than 80% of them outside Germany.',
      tag: 'employer-stated',
      src: 'https://www.duesseldorf-wirtschaft.de/unternehmen-duesseldorf/henkel/',
      by: 'City of Düsseldorf economic development, Henkel profile; Henkel, company profile (https://www.henkel.com/press-and-media/facts-and-figures/company-profile)',
      seen: '2026-10-03'
    },
    'de-wob-emp': {
      t: 'Wolfsburg has 131,830 jobs (2023), 71,080 of them (54%) in manufacturing.',
      tag: 'data',
      src: 'https://ec.europa.eu/eurostat/databrowser/view/nama_10r_3empers/default/table',
      by: 'Eurostat, employment (thousand persons) by NUTS 3 region and activity (nama_10r_3empers), 2023, NUTS 3 DE913 (city)',
      seen: '2026-10-03'
    },
    'de-wob-plant': {
      t: 'The Wolfsburg plant has approximately 70,000 employees, built 490,000 vehicles in 2023 and is the headquarters of Volkswagen Passenger Cars.',
      tag: 'employer-stated',
      src: 'https://www.volkswagen-newsroom.com/en/wolfsburg-plant-the-heart-of-the-vw-brand-6811',
      by: 'Volkswagen newsroom, Wolfsburg plant (facts and figures, March 2024)',
      seen: '2026-10-03'
    },
    'de-nue-emp': {
      t: 'Nuremberg city has 406,850 jobs (2023); the neighbouring district of Erlangen-Höchstadt, where Herzogenaurach lies, has 68,010, of them 18,180 in manufacturing.',
      tag: 'data',
      src: 'https://ec.europa.eu/eurostat/databrowser/view/nama_10r_3empers/default/table',
      by: 'Eurostat, employment (thousand persons) by NUTS 3 region and activity (nama_10r_3empers), 2023, NUTS 3 DE254 and DE257',
      seen: '2026-10-03'
    },
    'de-nue-datev': {
      t: 'DATEV eG, the software and IT services cooperative for tax advisers, accountants and companies, has its seat at Paumgartnerstraße in Nuremberg and says more than 9,000 people work for it, with €1.51 billion of revenue in 2024.',
      tag: 'employer-stated',
      src: 'https://www.datev.de/web/de/ueber-datev/',
      by: 'DATEV, Über DATEV; seat from the Impressum (https://www.datev.de/web/de/berufsgruppenuebergreifend/ueber-datev/impressum)',
      seen: '2026-10-03'
    },
    'de-nue-ba': {
      t: 'The central office of the Federal Employment Agency is at Regensburger Straße 104 in Nuremberg, a 17-storey building where the divisions set the agency’s labour-market programmes, finances and personnel policy.',
      tag: 'data',
      src: 'https://www.arbeitsagentur.de/ueber-uns/zentrale',
      by: 'Federal Employment Agency, Zentrale',
      seen: '2026-10-03'
    },
    'de-dd-infineon': {
      t: 'Trade press reporting Infineon’s announcement says the company opened its Smart Power Fab in Dresden in July 2026, several months ahead of schedule: an investment of five billion euros, the largest in Infineon’s history, creating 1,000 new direct jobs and doubling its manufacturing capacity at the Dresden site.',
      tag: 'practitioner consensus',
      src: 'https://www.engineering.com/infineon-opens-dresden-semiconductor-fab-ahead-of-schedule/',
      by: 'engineering.com, Infineon opens Dresden semiconductor fab ahead of schedule (6 Jul 2026), reporting the Infineon press release',
      seen: '2026-10-03'
    },
    'de-dd-emp': {
      t: 'Dresden city has 350,030 jobs (2023), 41,710 of them in industry (mining, manufacturing, energy and water) including 36,920 in manufacturing.',
      tag: 'data',
      src: 'https://ec.europa.eu/eurostat/databrowser/view/nama_10r_3empers/default/table',
      by: 'Eurostat, employment (thousand persons) by NUTS 3 region and activity (nama_10r_3empers), 2023, NUTS 3 DED21 (city)',
      seen: '2026-10-03'
    },
    'de-cgn-ins': {
      t: 'More than 50 German insurers and reinsurers have their headquarters in Cologne, which Cologne’s economic development calls the second-largest German insurance location, with about 24,000 employees subject to social insurance.',
      tag: 'data',
      src: 'https://koeln.business/branchen/versicherungswirtschaft',
      by: 'Köln Business, Versicherungswirtschaft',
      seen: '2026-10-03'
    },
    'de-cgn-emp': {
      t: 'Cologne had 631,907 employees subject to social insurance at its workplaces in 2025, 553,626 of them in services and 78,281 in production.',
      tag: 'data',
      src: 'https://www.stadt-koeln.de/artikel/74098/index.html',
      by: 'City of Cologne, Wirtschaft und Arbeitsmarkt im Überblick',
      seen: '2026-10-03'
    },
    'de-ruhr-emp': {
      t: 'Essen has 350,160 jobs (2023) and Dortmund 346,380; in Essen 93,570 are in finance and insurance, real estate and professional and business services.',
      tag: 'data',
      src: 'https://ec.europa.eu/eurostat/databrowser/view/nama_10r_3empers/default/table',
      by: 'Eurostat, employment (thousand persons) by NUTS 3 region and activity (nama_10r_3empers), 2023, NUTS 3 DEA13 and DEA52 (cities)',
      seen: '2026-10-03'
    },
    'de-ruhr-rwe': {
      t: 'RWE AG gives its address as RWE Platz 1, Essen, where it is registered (district court Essen).',
      tag: 'employer-stated',
      src: 'https://www.rwe.com/en/imprint/',
      by: 'RWE, imprint',
      seen: '2026-10-03'
    },
    'de-ruhr-tk': {
      t: 'thyssenkrupp AG gives its address as thyssenkrupp Allee 1, Essen, with registered offices in Duisburg and Essen.',
      tag: 'employer-stated',
      src: 'https://www.thyssenkrupp.com/en/imprint',
      by: 'thyssenkrupp, imprint',
      seen: '2026-10-03'
    },
    'de-ruhr-brenntag': {
      t: 'Brenntag’s head office is at Messeallee 11 in Essen.',
      tag: 'employer-stated',
      src: 'https://www.brenntag.com/en-de/imprint/',
      by: 'Brenntag, imprint',
      seen: '2026-10-03'
    },
    'de-han-emp': {
      t: 'The Hanover region has 703,250 jobs (2023), 74,620 of them in manufacturing.',
      tag: 'data',
      src: 'https://ec.europa.eu/eurostat/databrowser/view/nama_10r_3empers/default/table',
      by: 'Eurostat, employment (thousand persons) by NUTS 3 region and activity (nama_10r_3empers), 2023, NUTS 3 DE929',
      seen: '2026-10-03'
    },
    'de-han-conti': {
      t: 'Continental’s headquarters is at Continental-Plaza 1 in Hanover; its new campus was inaugurated in December 2023 for about 2,400 employees from corporate functions and the Tires and ContiTech divisions.',
      tag: 'employer-stated',
      src: 'https://www.hannover.de/Service/Presse-Medien/Hannover.de/Aktuelles/Wirtschaft-Wissenschaft-2023/Continental-weiht-neue-Unter%C2%ADnehmens%C2%ADzentrale-ein',
      by: 'City of Hannover, press release on Continental’s new headquarters (2023); address from Continental (https://www.continental.com/en/press/media-library/continental-headquarter/)',
      seen: '2026-10-03'
    },
    'de-han-talanx': {
      t: 'Talanx describes itself as based in Hannover and reports insurance revenue of €48,994 million for 2025.',
      tag: 'employer-stated',
      src: 'https://www.talanx.com/en/talanx-group/group',
      by: 'Talanx, The Group',
      seen: '2026-10-03'
    },
    'de-lej-emp': {
      t: 'Leipzig city has 365,780 jobs (2023), 28,180 of them in manufacturing and 93,610 in finance and insurance, real estate and professional and business services.',
      tag: 'data',
      src: 'https://ec.europa.eu/eurostat/databrowser/view/nama_10r_3empers/default/table',
      by: 'Eurostat, employment (thousand persons) by NUTS 3 region and activity (nama_10r_3empers), 2023, NUTS 3 DED51 (city)',
      seen: '2026-10-03'
    },
    'de-lej-bmw': {
      t: 'BMW Group Plant Leipzig has about 6,800 employees and built 259,430 vehicles in 2025; more than 11,600 people work at the site in total, and the BMW Group has invested over €5.6 billion there.',
      tag: 'employer-stated',
      src: 'https://www.bmwgroup-werke.com/leipzig/en.html',
      by: 'BMW Group Plants, Leipzig; investment and site total from the BMW Group press release on 20 years of series production (https://www.press.bmwgroup.com/global/article/detail/T0453991EN/)',
      seen: '2026-10-03'
    },
    'de-lej-porsche': {
      t: 'More than 4,600 people work at Porsche Leipzig, which builds around 550 Macan and Panamera models a day and is the brand’s centre of excellence for electromobility.',
      tag: 'employer-stated',
      src: 'https://newsroom.porsche.com/en/company/leipzig/porsche-leipzig-factory.html',
      by: 'Porsche Newsroom, Porsche Leipzig',
      seen: '2026-10-03'
    },
    'de-ka-kit': {
      t: 'The Karlsruhe Institute of Technology reports 23,083 students, 10,131 employees, 424 professors and 68 new spin-offs and start-ups in 2025.',
      tag: 'employer-stated',
      src: 'https://www.kit.edu/downloads/flyer-daten-fakten-zahlen-en.pdf',
      by: 'KIT, Facts and Figures flyer (KIT in figures 2025)',
      seen: '2026-10-03'
    },
    'de-ka-emp': {
      t: 'Karlsruhe city has 240,790 jobs (2023), 71,910 of them in trade, transport, hospitality and information and communication and 52,850 in finance and insurance, real estate and professional and business services.',
      tag: 'data',
      src: 'https://ec.europa.eu/eurostat/databrowser/view/nama_10r_3empers/default/table',
      by: 'Eurostat, employment (thousand persons) by NUTS 3 region and activity (nama_10r_3empers), 2023, NUTS 3 DE122 (city)',
      seen: '2026-10-03'
    },
    'de-ka-cyber': {
      t: 'CyberForum, the network of Karlsruhe’s IT cluster, has about 1,200 member companies that together account for around 30,000 jobs, and runs a federally recognised digital hub for cybersecurity.',
      tag: 'practitioner consensus',
      src: 'https://clustercollaboration.eu/content/cyberforum-ev',
      by: 'European Cluster Collaboration Platform, CyberForum e.V. (figures as given in secondary reports; the cluster’s own site could not be accessed)',
      seen: '2026-10-03'
    },
    'de-ka-ionos': {
      t: 'IONOS Group, the cloud infrastructure and web hosting company, gives Karlsruhe as its address.',
      tag: 'employer-stated',
      src: 'https://www.ionos-group.com/imprint.html',
      by: 'IONOS Group, imprint',
      seen: '2026-10-03'
    },
    'de-bn-telekom': {
      t: 'Deutsche Telekom’s group headquarters is at Friedrich-Ebert-Allee 140 in Bonn; the group has around 200,000 employees worldwide (31 December 2025) and more than 12,000 people in Bonn and the surrounding region work for it, making it Bonn’s largest employer.',
      tag: 'employer-stated',
      src: 'https://www.telekom.com/en/about-us/company-profile',
      by: 'Deutsche Telekom, Company profile; Bonn workforce from Deutsche Telekom, Commitment to Bonn (https://www.telekom.com/en/newsroom/topic-hubs/sponsoring/our-commitment-to-bonn/deutsche-telekom-commitment-to-bonn)',
      seen: '2026-10-03'
    },
    'de-bn-un': {
      t: 'Bonn has 27 United Nations institutions on its UN Campus, with a staff of almost a thousand.',
      tag: 'data',
      src: 'https://www.auswaertiges-amt.de/en/aussenpolitik/internationale-organisationen/vereintenationen/231566-231566',
      by: 'Federal Foreign Office, The United Nations in Bonn (22 Jan 2026)',
      seen: '2026-10-03'
    },
    'de-bn-emp': {
      t: 'Bonn city has 269,690 jobs (2023), 135,860 of them (50%) in public administration, education, health, arts and other services, and only 8,510 in manufacturing.',
      tag: 'data',
      src: 'https://ec.europa.eu/eurostat/databrowser/view/nama_10r_3empers/default/table',
      by: 'Eurostat, employment (thousand persons) by NUTS 3 region and activity (nama_10r_3empers), 2023, NUTS 3 DEA22 (city)',
      seen: '2026-10-03'
    }
  }
});

if (window.I18N) I18N.add('it', {
  'Companies with fixed trainee entry dates mostly start in October (about 40%), with some in January and April, while others such as Volkswagen and Deutsche Telekom take people at any time; the application process often takes about three months.':
    'Le aziende con date di ingresso fisse per i trainee partono per lo più a ottobre (circa il 40%), alcune a gennaio e ad aprile, mentre altre come Volkswagen e Deutsche Telekom accolgono persone in qualsiasi momento; il processo di selezione richiede spesso circa tre mesi.',
  'Entry-level job ads in Germany fell by about two-thirds from the 2022 record to mid-2026, against almost 39% for all ads; 26 of 28 occupational groups had fewer, with IT applications down 77% and marketing down 75%.':
    'Gli annunci di lavoro per principianti in Germania sono calati di circa due terzi dal record del 2022 a metà 2026, contro quasi il 39% di tutti gli annunci; 26 gruppi professionali su 28 ne hanno avuti meno, con le applicazioni IT in calo del 77% e il marketing del 75%.',
  'The unemployment rate of people with a degree was around 3% in 2024, up from about 2.5% in 2023, and the number of unemployed graduates averaged 290,000 in 2024 against 243,000 in 2023.':
    'Il tasso di disoccupazione di chi ha una laurea era intorno al 3% nel 2024, in aumento dal 2,5% circa del 2023, e il numero di laureati disoccupati è stato in media di 290.000 nel 2024 contro 243.000 nel 2023.',
  'Europe’s largest economy hires across industry, but its hubs split cleanly: Frankfurt for banking and supervision, Munich for corporate headquarters and tech, Berlin for start-ups and AI, Stuttgart and Wolfsburg for cars, Hamburg for logistics. German is expected in most business jobs; tech and start-ups are the exception.':
    'La maggiore economia d’Europa assume in tutta l’industria, ma i suoi poli si dividono con nettezza: Francoforte per banche e vigilanza, Monaco per sedi centrali e tecnologia, Berlino per start-up e IA, Stoccarda e Wolfsburg per l’auto, Amburgo per la logistica. Nella maggior parte dei lavori aziendali ci si aspetta il tedesco; tecnologia e start-up sono l’eccezione.',
  'Automotive and suppliers':
    'Automotive e fornitori',
  'Banking and insurance':
    'Banche e assicurazioni',
  'Software and ICT':
    'Software e ICT',
  'Semiconductors':
    'Semiconduttori',
  'Logistics and ports':
    'Logistica e porti',
  'Aerospace':
    'Aerospazio',
  'Chemicals':
    'Chimica',
  'Consumer goods':
    'Beni di consumo',
  'All German immigration, visa, residence permit and salary rules are consolidated from primary sources in visas_immigration/germany/germany_visas_immigration_guide.md.':
    'Tutte le norme su immigrazione, visti, permessi di soggiorno e soglie salariali per la Germania sono consolidate da fonti primarie in visas_immigration/germany/germany_visas_immigration_guide.md.',
  'Demand in AI, data science and analytics is not rated for any German hub except Berlin AI: no source read that measures it by city.':
    'La domanda in IA, data science e analytics non è valutata per nessun polo tedesco tranne l’IA a Berlino: nessuna fonte letta la misura per città.',
  'UK citizens who lived in Germany before 2021 keep Withdrawal Agreement rights; not covered here.':
    'I cittadini britannici che vivevano in Germania prima del 2021 mantengono i diritti dell’Accordo di recesso; non trattati qui.',
  'Entry pay was not found by hub or by field: pay figures are state medians for all full-time employees (some read off the Federal Employment Agency’s chart), not graduate starting salaries; the net-pay figure is the library’s author calculation for Munich.':
    'Lo stipendio d’ingresso non è stato trovato per polo né per ambito: i dati sono mediane per Land di tutti i dipendenti a tempo pieno (alcune lette dal grafico dell’Agenzia federale per il lavoro), non stipendi iniziali dei laureati; il dato netto è il calcolo d’autore della biblioteca per Monaco.',
  'Sector employment by city (ICT, finance) is published only for Berlin and Hamburg; for Cologne, the Ruhr, Hanover and Leipzig the ratings rest on named employers and city statistics.':
    'L’occupazione per settore a livello di città (ICT, finanza) è pubblicata solo per Berlino e Amburgo; per Colonia, la Ruhr, Hannover e Lipsia le valutazioni poggiano su datori di lavoro citati e statistiche cittadine.',
  'Headcounts for several large employers (Allianz, Siemens, Munich Re, Mercedes-Benz, E.ON, Rewe, Lufthansa, DHL) are not in the record because no figure we can cite was read.':
    'Gli organici di diversi grandi datori di lavoro (Allianz, Siemens, Munich Re, Mercedes-Benz, E.ON, Rewe, Lufthansa, DHL) non sono nella scheda perché non è stato letto alcun dato citabile.',
  'Pay metrics are state medians: they hide the gap between a city and its state, and the Federal Employment Agency lists only its ten highest districts.':
    'Le metriche salariali sono mediane per Land: nascondono la differenza tra una città e il suo Land, e l’Agenzia federale per il lavoro elenca solo i dieci distretti più alti.',
  '§3 Germany: job search, Blue Card, settlement, Chancenkarte':
    '§3 Germania: ricerca di lavoro, Carta blu, residenza permanente, Chancenkarte',
  'Germany and DACH: the Praktikum and binding-offer internships':
    'Germania e area DACH: il Praktikum e gli stage con offerta vincolante',
  '§2 language as a hiring barrier; Germany (DAAD, Destatis, IW)':
    '§2 la lingua come barriera all’assunzione; Germania (DAAD, Destatis, IW)',
  '§5 net pay and rent, Munich':
    '§5 stipendio netto e affitto, Monaco',
  'automotive job cuts and hiring':
    'tagli e assunzioni nell’automotive',
  'deposits, work-hour limits, health cover':
    'cauzioni, limiti di ore di lavoro, copertura sanitaria',
  'Country brief: hubs, employers, pay and standing':
    'Dossier paese: poli, datori di lavoro, stipendi e posizionamento',
  'Banking, central banking and financial supervision':
    'Banche, banche centrali e vigilanza finanziaria',
  'Banking':
    'Banca',
  'Central banking':
    'Banche centrali',
  'Financial supervision':
    'Vigilanza finanziaria',
  'Stock exchange':
    'Borsa',
  'Development finance':
    'Finanza per lo sviluppo',
  'euro-area central bank':
    'banca centrale dell’area euro',
  'German central bank':
    'banca centrale tedesca',
  'supervises banks, insurers and securities trading':
    'vigila su banche, assicurazioni e negoziazione di titoli',
  'new EU anti-money-laundering authority':
    'nuova autorità UE antiriciclaggio',
  'headquarters':
    'sede centrale',
  'development bank':
    'banca di sviluppo',
  'headquarters in Eschborn, just outside the city':
    'sede centrale a Eschborn, subito fuori città',
  'about 80,000 jobs at some 500 organisations on site':
    'circa 80.000 posti di lavoro in circa 500 organizzazioni sul sito',
  'Corporate headquarters, insurance, software and engineering':
    'Sedi centrali, assicurazioni, software e ingegneria',
  'Automotive':
    'Automotive',
  'Insurance and reinsurance':
    'Assicurazioni e riassicurazioni',
  'Aerospace engines':
    'Motori aeronautici',
  'Electrical engineering':
    'Ingegneria elettrica',
  'headquarters in Neubiberg, next to Munich':
    'sede centrale a Neubiberg, alle porte di Monaco',
  'Arnulfpost site for up to 2,000 staff':
    'sede Arnulfpost per un massimo di 2.000 dipendenti',
  'ecosystem value $71 billion, Europe’s average $14.3 billion':
    'valore dell’ecosistema 71 miliardi di dollari, media europea 14,3 miliardi',
  'Munich’s start-up ecosystem':
    'L’ecosistema start-up di Monaco',
  'Start-ups, software and AI':
    'Start-up, software e IA',
  'Start-ups and venture capital':
    'Start-up e venture capital',
  'E-commerce':
    'E-commerce',
  'Software':
    'Software',
  'AI research':
    'Ricerca sull’IA',
  'Climate tech':
    'Climate tech',
  'Government':
    'Pubblica amministrazione',
  'over 1,600 venture-funded companies':
    'oltre 1.600 aziende finanziate da venture capital',
  'Berlin’s start-up ecosystem':
    'L’ecosistema delle start-up di Berlino',
  '170,560 jobs (2023)':
    '170.560 posti di lavoro (2023)',
  'Berlin’s information and communication employers':
    'I datori di lavoro berlinesi dell’informazione e comunicazione',
  'Port logistics, aviation and e-commerce':
    'Logistica portuale, aviazione ed e-commerce',
  'Port and shipping':
    'Porto e trasporto marittimo',
  'Aviation':
    'Aviazione',
  'E-commerce and retail':
    'E-commerce e commercio',
  'Media':
    'Media',
  'Germany’s largest seaport':
    'il maggiore porto marittimo della Germania',
  'largest German site, about 18,000 staff':
    'maggiore sede tedesca, circa 18.000 dipendenti',
  'nearly 10,000 staff':
    'quasi 10.000 dipendenti',
  '87,670 jobs (2023)':
    '87.670 posti di lavoro (2023)',
  'Hamburg’s information and communication employers':
    'I datori di lavoro amburghesi dell’informazione e comunicazione',
  'Car makers, suppliers and automotive software':
    'Case automobilistiche, fornitori e software per l’auto',
  'Automotive suppliers':
    'Fornitori automotive',
  'Mechanical engineering':
    'Meccanica',
  'Automotive software':
    'Software per l’auto',
  'headquarters in Gerlingen':
    'sede centrale a Gerlingen',
  'supplier headquarters':
    'sedi centrali di fornitori',
  'automotive software, headquarters':
    'software per l’auto, sede centrale',
  'ecosystem value $6 billion':
    'valore dell’ecosistema 6 miliardi di dollari',
  'Stuttgart’s start-up ecosystem':
    'L’ecosistema start-up di Stoccarda',
  'Enterprise software and the Mannheim business school':
    'Software aziendale e la business school di Mannheim',
  'Enterprise software':
    'Software aziendale',
  'Higher education':
    'Istruzione universitaria',
  'headquarters in Walldorf':
    'sede centrale a Walldorf',
  'Ludwigshafen site, about 33,000 employees':
    'sito di Ludwigshafen, circa 33.000 dipendenti',
  'Corporate headquarters and consumer goods':
    'Sedi centrali e beni di consumo',
  'Defence and engineering':
    'Difesa e ingegneria',
  'Telecoms':
    'Telecomunicazioni',
  'Professional services':
    'Servizi professionali',
  'second only to Munich':
    'seconda solo a Monaco',
  'Four DAX headquarters':
    'Quattro sedi centrali del DAX',
  'head office, defence and automotive group':
    'sede centrale, gruppo della difesa e dell’automotive',
  'over 5,300 employees at the Düsseldorf headquarters site':
    'oltre 5.300 dipendenti nella sede di Düsseldorf',
  'Volkswagen’s home town':
    'La città di Volkswagen',
  'group headquarters':
    'sede centrale del gruppo',
  'about 70,000 employees; headquarters of Volkswagen Passenger Cars':
    'circa 70.000 dipendenti; sede di Volkswagen Passenger Cars',
  'Sports brands and their marketing':
    'I marchi sportivi e il loro marketing',
  'Sporting goods':
    'Articoli sportivi',
  'Medical technology':
    'Tecnologie mediche',
  'Software for tax and accounting':
    'Software fiscale e contabile',
  'headquarters in Herzogenaurach':
    'sede centrale a Herzogenaurach',
  'software for tax advisers and accountants, headquarters; more than 9,000 staff':
    'software per commercialisti e consulenti fiscali, sede centrale; oltre 9.000 dipendenti',
  'central office in Nuremberg':
    'sede centrale a Norimberga',
  'Chipmaking and the software around it':
    'Produzione di chip e il software che la circonda',
  'Microelectronics':
    'Microelettronica',
  'chip fab':
    'stabilimento di chip',
  'fab due from 2027':
    'stabilimento previsto dal 2027',
  'opened July 2026: €5 billion, 1,000 new direct jobs':
    'inaugurata a luglio 2026: 5 miliardi di euro, 1.000 nuovi posti diretti',
  '82,500 employees in about 3,650 companies':
    '82.500 dipendenti in circa 3.650 aziende',
  'Saxony’s ICT and microelectronics sector':
    'Il settore ICT e microelettronico della Sassonia',
  'A Rhineland metropolitan region of over a million jobs':
    'Una regione metropolitana della Renania con oltre un milione di posti',
  '1,178,000 jobs (2021)':
    '1.178.000 posti (2021)',
  'Employers in the metropolitan region':
    'I datori di lavoro della regione metropolitana',
  'more than 50, including DEVK, Gothaer and DKV; about 24,000 insurance jobs':
    'più di 50, tra cui DEVK, Gothaer e DKV; circa 24.000 posti nel settore assicurativo',
  'Insurers with headquarters in Cologne':
    'Assicuratori con sede a Colonia',
  'Germany’s old industrial heartland, about 2.5 million jobs':
    'Il vecchio cuore industriale della Germania, circa 2,5 milioni di posti',
  'Energy':
    'Energia',
  'Steel and metals':
    'Siderurgia e metalli',
  '2,459,000 jobs (2021)':
    '2.459.000 posti (2021)',
  'head office in Essen':
    'sede centrale a Essen',
  'head office in Essen (registered in Duisburg and Essen)':
    'sede centrale a Essen (sede legale a Duisburg ed Essen)',
  'chemicals distributor, head office in Essen':
    'distributore di prodotti chimici, sede centrale a Essen',
  'Lower Saxony’s capital, for insurance and trade fairs':
    'Il capoluogo della Bassa Sassonia, per assicurazioni e fiere',
  '756,000 jobs (2021)':
    '756.000 posti (2021)',
  'headquarters; campus opened in December 2023 for about 2,400 staff':
    'sede centrale; campus inaugurato a dicembre 2023 per circa 2.400 dipendenti',
  'insurance group, based in Hannover':
    'gruppo assicurativo con sede a Hannover',
  'Eastern Germany’s growing logistics and car-making city':
    'La città in crescita della Germania orientale per logistica e auto',
  '548,000 jobs (2021)':
    '548.000 posti (2021)',
  'about 6,800 employees; 259,430 cars in 2025':
    'circa 6.800 dipendenti; 259.430 auto nel 2025',
  'more than 4,600 employees':
    'oltre 4.600 dipendenti',
  'A technology university and a software and IT cluster':
    'Un’università tecnologica e un cluster di software e IT',
  'Higher education and research':
    'Università e ricerca',
  '23,083 students and 10,131 employees in 2025':
    '23.083 studenti e 10.131 dipendenti nel 2025',
  'IT cluster network with about 1,200 member companies':
    'rete del cluster IT con circa 1.200 aziende associate',
  'cloud and web hosting, registered in Karlsruhe':
    'cloud e web hosting, con sede a Karlsruhe',
  'Deutsche Telekom’s headquarters and the United Nations in Germany':
    'La sede di Deutsche Telekom e le Nazioni Unite in Germania',
  'group headquarters; more than 12,000 staff in Bonn and around':
    'sede centrale del gruppo; oltre 12.000 dipendenti a Bonn e dintorni',
  '27 UN institutions with almost 1,000 staff':
    '27 istituzioni ONU con quasi 1.000 dipendenti',
  'Language':
    'Lingua',
  'Recruiting calendar':
    'Calendario delle selezioni',
  'Where demand is now':
    'Dove si concentra la domanda oggi',
  'Tax and net pay':
    'Tasse e stipendio netto',
  'Entry pay':
    'Stipendio d’ingresso',
  'Indeed finds that only 2.4–2.8% of job postings in Germany, the UK and Ireland say the local language is not required (3.4% for Germany with the UK’s occupation mix), among the lowest of the seven countries compared; the Netherlands is at 8.7%.':
    'Indeed rileva che solo il 2,4–2,8% degli annunci di lavoro in Germania, Regno Unito e Irlanda dice che la lingua locale non è richiesta (3,4% per la Germania con la composizione professionale del Regno Unito), tra le quote più basse dei sette paesi confrontati; i Paesi Bassi sono all’8,7%.',
  'A voluntary internship of more than three months after graduation must pay the minimum wage, while a mandatory one during the degree need not, so German employers recruit through internships taken while enrolled.':
    'Uno stage volontario di oltre tre mesi dopo la laurea deve pagare il salario minimo, mentre uno obbligatorio durante gli studi no: per questo i datori di lavoro tedeschi assumono attraverso stage svolti da iscritti.',
  'Strategy consulting in Germany uses the internship as the job interview: top interns can receive a binding full-time offer without further interviews.':
    'In Germania la consulenza strategica usa lo stage come colloquio di lavoro: i migliori stagisti possono ricevere un’offerta vincolante a tempo pieno senza altri colloqui.',
  'In the Federal Employment Agency’s 2025 shortage analysis, software development is no longer a shortage occupation; the 157 shortage occupations are led by care, health and skilled trades.':
    'Nell’analisi delle carenze 2025 dell’Agenzia federale per il lavoro, lo sviluppo software non è più una professione carente; le 157 professioni carenti sono guidate da assistenza, sanità e mestieri qualificati.',
  'The tax-free basic allowance is €12,348 for 2026; the official wage-tax calculator gives net pay for any salary.':
    'La quota esente di base è di 12.348 € per il 2026; il calcolatore ufficiale dell’imposta sui salari dà il netto per qualsiasi stipendio.',
  'At €60,000 gross a single employee in Munich keeps about 62% after income tax and social contributions, the lowest share among the library’s compared cities except Milan.':
    'Con 60.000 € lordi un dipendente single a Monaco tiene circa il 62% dopo imposte e contributi, la quota più bassa tra le città confrontate dalla biblioteca, Milano esclusa.',
  'About 73,900 people worked in banks in Frankfurt in the first quarter of 2025, almost 12% of Germany’s 632,200 bank employees; a rise to about 75,500 is expected by the end of 2026.':
    'Nel primo trimestre 2025 circa 73.900 persone lavoravano in banca a Francoforte, quasi il 12% dei 632.200 bancari tedeschi; si prevede un aumento a circa 75.500 entro la fine del 2026.',
  'Frankfurt is the seat of the European Central Bank, the Bundesbank, the federal financial supervisor BaFin, the EU insurance supervisor EIOPA and the development bank KfW.':
    'Francoforte è sede della Banca centrale europea, della Bundesbank, dell’autorità federale di vigilanza finanziaria BaFin, dell’autorità UE di vigilanza sulle assicurazioni EIOPA e della banca di sviluppo KfW.',
  'The EU Anti-Money Laundering Authority has its seat in Frankfurt; it started work in summer 2025 and plans about 430 staff by the end of 2027.':
    'L’Autorità UE antiriciclaggio ha sede a Francoforte; ha iniziato a operare nell’estate 2025 e prevede circa 430 dipendenti entro la fine del 2027.',
  'Deutsche Bank is headquartered in Frankfurt am Main and had 89,879 employees at the end of 2025.':
    'Deutsche Bank ha sede a Francoforte sul Meno e a fine 2025 aveva 89.879 dipendenti.',
  'Eight DAX companies have their headquarters in Munich and its region (Allianz, BMW, Infineon, MTU Aero Engines, Munich Re, Scout24, Siemens, Siemens Energy), more than any other German city; Düsseldorf follows with four.':
    'Otto società del DAX hanno sede a Monaco e dintorni (Allianz, BMW, Infineon, MTU Aero Engines, Munich Re, Scout24, Siemens, Siemens Energy), più di qualsiasi altra città tedesca; segue Düsseldorf con quattro.',
  'Employment in Munich’s ICT sector has nearly doubled since 2014, and the city counts itself among the leading ICT locations in Germany and Europe.':
    'L’occupazione nel settore ICT di Monaco è quasi raddoppiata dal 2014, e la città si colloca tra i principali poli ICT di Germania ed Europa.',
  'Google is renovating the Arnulfpost building in Munich for up to 2,000 staff and calls Munich a key hub for development, research and product innovation.':
    'Google sta ristrutturando l’edificio Arnulfpost a Monaco per un massimo di 2.000 dipendenti e definisce Monaco un polo chiave per sviluppo, ricerca e innovazione di prodotto.',
  'Berlin holds 43% of the value of Germany’s start-up ecosystem, with more than 1,600 venture-funded companies.':
    'Berlino concentra il 43% del valore dell’ecosistema tedesco delle start-up, con oltre 1.600 aziende finanziate da venture capital.',
  'Berlin counts more than 9,000 AI experts and places itself among Europe’s top three locations for frontier AI research.':
    'Berlino conta oltre 9.000 esperti di IA e si colloca tra i primi tre poli europei per la ricerca d’avanguardia sull’IA.',
  'Zalando SE is registered in Berlin (Valeska-Gert-Straße 5).':
    'Zalando SE ha sede legale a Berlino (Valeska-Gert-Straße 5).',
  'The Port of Hamburg, Germany’s largest seaport, handled 8.3 million TEU of containers and 114.6 million tonnes in 2025.':
    'Il porto di Amburgo, il maggiore porto marittimo tedesco, ha movimentato 8,3 milioni di TEU di container e 114,6 milioni di tonnellate nel 2025.',
  'About 48,700 people work in Hamburg’s aviation industry; Airbus has its largest German site there with about 18,000 staff and Lufthansa Technik nearly 10,000.':
    'Circa 48.700 persone lavorano nell’industria aeronautica di Amburgo; Airbus vi ha la sua maggiore sede tedesca con circa 18.000 dipendenti e Lufthansa Technik quasi 10.000.',
  'The Otto Group is registered in Hamburg.':
    'Il gruppo Otto ha sede legale ad Amburgo.',
  'Mercedes-Benz, Porsche, Bosch, Mahle, Eberspächer, Mann+Hummel and Vector Informatik have their headquarters in the Stuttgart Region, the most important focus of Germany’s car industry; 118,000 people work directly in its automotive cluster.':
    'Mercedes-Benz, Porsche, Bosch, Mahle, Eberspächer, Mann+Hummel e Vector Informatik hanno sede nella regione di Stoccarda, il principale polo dell’industria automobilistica tedesca; 118.000 persone lavorano direttamente nel suo distretto automotive.',
  'Robert Bosch GmbH is registered in Gerlingen-Schillerhöhe, outside Stuttgart.':
    'Robert Bosch GmbH ha sede legale a Gerlingen-Schillerhöhe, appena fuori Stoccarda.',
  'SAP SE is registered in Walldorf.':
    'SAP SE ha sede legale a Walldorf.',
  'Henkel AG & Co. KGaA is registered in Düsseldorf.':
    'Henkel AG & Co. KGaA ha sede legale a Düsseldorf.',
  'Volkswagen AG is registered in Wolfsburg.':
    'Volkswagen AG ha sede legale a Wolfsburg.',
  'PUMA SE is registered in Herzogenaurach, near Nuremberg.':
    'PUMA SE ha sede legale a Herzogenaurach, vicino a Norimberga.',
  'adidas has its headquarters in Herzogenaurach, near Nuremberg.':
    'adidas ha la sede centrale a Herzogenaurach, vicino a Norimberga.',
  'Saxony is Europe’s largest microelectronics location: one in three chips made in Europe comes from there; its ICT and microelectronics sector has about 3,650 companies and 82,500 employees, 49.5% of them in software. Bosch, Infineon, GlobalFoundries and, from 2027, TSMC run fabs in Dresden.':
    'La Sassonia è il maggiore polo europeo della microelettronica: da lì viene un chip su tre prodotto in Europa; il suo settore ICT e microelettronica conta circa 3.650 aziende e 82.500 addetti, il 49,5% nel software. Bosch, Infineon, GlobalFoundries e, dal 2027, TSMC gestiscono stabilimenti a Dresda.',
  'Eurostat counts 1,178,000 people in work in the Cologne metropolitan region in 2021; the region’s GDP was €102.3 billion in 2021.':
    'Eurostat conta 1.178.000 occupati nella regione metropolitana di Colonia nel 2021; il PIL della regione era di 102,3 miliardi di € nel 2021.',
  'Eurostat counts 2,459,000 people in work in the Ruhr metropolitan region in 2021; the region’s GDP was €180.5 billion in 2021.':
    'Eurostat conta 2.459.000 occupati nella regione metropolitana di Ruhr nel 2021; il PIL della regione era di 180,5 miliardi di € nel 2021.',
  'Eurostat counts 756,000 people in work in the Hanover metropolitan region in 2021; the region’s GDP was €60.3 billion in 2021.':
    'Eurostat conta 756.000 occupati nella regione metropolitana di Hannover nel 2021; il PIL della regione era di 60,3 miliardi di € nel 2021.',
  'Eurostat counts 548,000 people in work in the Leipzig metropolitan region in 2021; the region’s GDP was €38.0 billion in 2021.':
    'Eurostat conta 548.000 occupati nella regione metropolitana di Lipsia nel 2021; il PIL della regione era di 38,0 miliardi di € nel 2021.',
  'The Global Financial Centres Index 40 (September 2026) ranks Frankfurt 29th in the world (down 14 places) and ninth among Western European centres, behind London, Zurich, Geneva, Luxembourg, Lugano, Paris, Copenhagen and Amsterdam; Berlin is 45th, Munich 58th (up 15) and Hamburg 84th, and Stuttgart is an associate centre.':
    'L’indice Global Financial Centres 40 (settembre 2026) colloca Francoforte al 29º posto nel mondo (in calo di 14 posizioni) e al nono tra i centri dell’Europa occidentale, dopo Londra, Zurigo, Ginevra, Lussemburgo, Lugano, Parigi, Copenaghen e Amsterdam; Berlino è 45ª, Monaco 58ª (in salita di 15) e Amburgo 84ª, mentre Stoccarda è un centro associato.',
  'Frankfurt, Stuttgart, Munich, Wolfsburg and Ludwigshafen are among the ten districts and cities with the highest median monthly pay of full-time employees in Germany on 31 December 2024; the top is Ingolstadt at €5,855, against a national median of €4,013.':
    'Francoforte, Stoccarda, Monaco, Wolfsburg e Ludwigshafen sono tra i dieci distretti e città con la retribuzione mensile mediana più alta dei dipendenti a tempo pieno in Germania al 31 dicembre 2024; il primo è Ingolstadt con 5.855 €, contro una mediana nazionale di 4.013 €.',
  'Frankfurt am Main has 761,090 jobs (2023), 259,390 of them (34%) in finance and insurance, real estate and professional and business services, and only 39,890 in manufacturing.':
    'Francoforte sul Meno conta 761.090 posti di lavoro (2023), 259.390 dei quali (34%) in finanza e assicurazioni, immobiliare e servizi professionali e alle imprese, e solo 39.890 nella manifattura.',
  'Deutsche Börse Group’s headquarters is in Eschborn, just outside Frankfurt’s city limits, with more than 3,100 employees; the Frankfurt Stock Exchange trading hall is in the Alte Börse in the city centre.':
    'La sede centrale del gruppo Deutsche Börse è a Eschborn, appena fuori dai confini di Francoforte, con oltre 3.100 dipendenti; la sala contrattazioni della Borsa di Francoforte è nell’Alte Börse, in centro.',
  'Frankfurt Airport City employs approximately 80,000 people at some 500 companies and organisations on site, one of Germany’s largest job complexes at a single location.':
    'Frankfurt Airport City impiega circa 80.000 persone in circa 500 aziende e organizzazioni sul sito, uno dei maggiori complessi occupazionali della Germania in un unico luogo.',
  'Munich city has 1,203,650 jobs (2023): 340,320 in finance and insurance, real estate and professional and business services, 327,110 in trade, transport, hospitality and information and communication, and 113,320 in manufacturing.':
    'La città di Monaco conta 1.203.650 posti di lavoro (2023): 340.320 in finanza e assicurazioni, immobiliare e servizi professionali e alle imprese, 327.110 in commercio, trasporti, ricettività e informazione e comunicazione, e 113.320 nella manifattura.',
  'Startup Genome’s 2026 report puts the value of Munich’s start-up ecosystem at $71 billion (Europe’s average $14.3 billion, the world’s $25 billion), with $2.3 billion of seed and Series A funding and $10 billion of exits in 2021–2025.':
    'Il rapporto 2026 di Startup Genome stima il valore dell’ecosistema start-up di Monaco in 71 miliardi di dollari (media europea 14,3 miliardi, media mondiale 25 miliardi), con 2,3 miliardi di finanziamenti seed e Serie A e 10 miliardi di exit nel 2021–2025.',
  'Startup Genome’s 2026 report ranks Berlin 22nd among the world’s start-up ecosystems and third in Europe (also third in Europe for talent and for its AI-native cluster), with an ecosystem value of $89.5 billion.':
    'Il rapporto 2026 di Startup Genome colloca Berlino al 22º posto tra gli ecosistemi start-up del mondo e al terzo in Europa (terza in Europa anche per talento e per il cluster nativo dell’IA), con un valore dell’ecosistema di 89,5 miliardi di dollari.',
  'Berlin has 2,190,900 jobs (2023), 170,560 of them in information and communication, 43,450 in finance and insurance and 432,460 in professional, scientific, technical and administrative services.':
    'Berlino conta 2.190.900 posti di lavoro (2023), 170.560 dei quali in informazione e comunicazione, 43.450 in finanza e assicurazioni e 432.460 in servizi professionali, scientifici, tecnici e amministrativi.',
  'Hamburg has 1,348,210 jobs (2023), 87,670 of them in information and communication, 45,240 in finance and insurance and 109,100 in manufacturing.':
    'Amburgo conta 1.348.210 posti di lavoro (2023), 87.670 dei quali in informazione e comunicazione, 45.240 in finanza e assicurazioni e 109.100 nella manifattura.',
  'In 2024 Hamburg handled 97.0 million tonnes of goods, the third-busiest port in the EU after Rotterdam (397.3 million) and Antwerp-Bruges (244.2 million).':
    'Nel 2024 Amburgo ha movimentato 97,0 milioni di tonnellate di merci, il terzo porto dell’UE dopo Rotterdam (397,3 milioni) e Anversa-Bruges (244,2 milioni).',
  'Startup Genome’s 2026 report puts the value of Hamburg’s start-up ecosystem at $6 billion, with $962 million of seed and Series A funding in H2 2023–2025.':
    'Il rapporto 2026 di Startup Genome stima il valore dell’ecosistema start-up di Amburgo in 6 miliardi di dollari, con 962 milioni di finanziamenti seed e Serie A nel H2 2023–2025.',
  'Stuttgart city has 548,450 jobs (2023), 77,320 of them (14%) in manufacturing and 140,560 in finance and insurance, real estate and professional and business services.':
    'La città di Stoccarda conta 548.450 posti di lavoro (2023), 77.320 dei quali (14%) nella manifattura e 140.560 in finanza e assicurazioni, immobiliare e servizi professionali e alle imprese.',
  'Startup Genome’s 2026 report puts the value of Stuttgart’s start-up ecosystem at $6 billion, with $293 million of seed and Series A funding in H2 2023–2025.':
    'Il rapporto 2026 di Startup Genome stima il valore dell’ecosistema start-up di Stoccarda in 6 miliardi di dollari, con 293 milioni di finanziamenti seed e Serie A nel H2 2023–2025.',
  'Mannheim city has 249,430 jobs (2023), 41,640 of them in manufacturing; Heidelberg has 129,740 and the Rhein-Neckar district 247,100.':
    'La città di Mannheim conta 249.430 posti di lavoro (2023), 41.640 dei quali nella manifattura; Heidelberg ne ha 129.740 e il distretto Rhein-Neckar 247.100.',
  'BASF’s Ludwigshafen site, the origin of its Verbund system, has around 33,000 employees, 125 production plants and calls itself the largest integrated chemical complex in the world.':
    'Il sito BASF di Ludwigshafen, all’origine del suo sistema Verbund, ha circa 33.000 dipendenti, 125 impianti di produzione e si definisce il più grande complesso chimico integrato del mondo.',
  'SAP reports 110,000 employees from 157-plus countries, total revenue of €36.8 billion (non-IFRS) in 2025 and 100-plus development locations.':
    'SAP dichiara 110.000 dipendenti di oltre 157 paesi, un fatturato totale di 36,8 miliardi di euro (non-IFRS) nel 2025 e oltre 100 sedi di sviluppo.',
  'Düsseldorf city has 576,590 jobs (2023), 175,900 of them (31%) in finance and insurance, real estate and professional and business services and 167,350 in trade, transport, hospitality and information and communication.':
    'La città di Düsseldorf conta 576.590 posti di lavoro (2023), 175.900 dei quali (31%) in finanza e assicurazioni, immobiliare e servizi professionali e alle imprese e 167.350 in commercio, trasporti, ricettività e informazione e comunicazione.',
  'Rheinmetall AG has its head office in Düsseldorf (Rheinmetall Platz 1) and says it employs around 34,000 people at 161 offices and production sites in more than 30 countries (status July 2026, continuing operations).':
    'Rheinmetall AG ha la sede centrale a Düsseldorf (Rheinmetall Platz 1) e dichiara circa 34.000 dipendenti in 161 uffici e siti produttivi in oltre 30 paesi (situazione a luglio 2026, attività in continuità).',
  'More than 5,300 people work at Henkel’s headquarters site in Düsseldorf-Holthausen, which covers more than 1.42 million square metres; Henkel as a whole has about 50,000 employees worldwide, more than 80% of them outside Germany.':
    'Oltre 5.300 persone lavorano nella sede Henkel di Düsseldorf-Holthausen, che si estende su più di 1,42 milioni di metri quadrati; Henkel nel complesso ha circa 50.000 dipendenti nel mondo, più dell’80% dei quali fuori dalla Germania.',
  'Wolfsburg has 131,830 jobs (2023), 71,080 of them (54%) in manufacturing.':
    'Wolfsburg conta 131.830 posti di lavoro (2023), 71.080 dei quali (54%) nella manifattura.',
  'The Wolfsburg plant has approximately 70,000 employees, built 490,000 vehicles in 2023 and is the headquarters of Volkswagen Passenger Cars.':
    'Lo stabilimento di Wolfsburg ha circa 70.000 dipendenti, ha costruito 490.000 veicoli nel 2023 ed è la sede di Volkswagen Passenger Cars.',
  'Nuremberg city has 406,850 jobs (2023); the neighbouring district of Erlangen-Höchstadt, where Herzogenaurach lies, has 68,010, of them 18,180 in manufacturing.':
    'La città di Norimberga conta 406.850 posti di lavoro (2023); il vicino distretto di Erlangen-Höchstadt, dove si trova Herzogenaurach, ne ha 68.010, di cui 18.180 nella manifattura.',
  'DATEV eG, the software and IT services cooperative for tax advisers, accountants and companies, has its seat at Paumgartnerstraße in Nuremberg and says more than 9,000 people work for it, with €1.51 billion of revenue in 2024.':
    'DATEV eG, la cooperativa di software e servizi IT per commercialisti, consulenti fiscali e imprese, ha sede in Paumgartnerstraße a Norimberga e dichiara oltre 9.000 collaboratori e 1,51 miliardi di euro di ricavi nel 2024.',
  'The central office of the Federal Employment Agency is at Regensburger Straße 104 in Nuremberg, a 17-storey building where the divisions set the agency’s labour-market programmes, finances and personnel policy.':
    'La sede centrale dell’Agenzia federale per il lavoro è in Regensburger Straße 104 a Norimberga, un edificio di 17 piani dove le divisioni definiscono i programmi per il mercato del lavoro, le finanze e la politica del personale dell’agenzia.',
  'Trade press reporting Infineon’s announcement says the company opened its Smart Power Fab in Dresden in July 2026, several months ahead of schedule: an investment of five billion euros, the largest in Infineon’s history, creating 1,000 new direct jobs and doubling its manufacturing capacity at the Dresden site.':
    'La stampa di settore, riprendendo l’annuncio di Infineon, riferisce che l’azienda ha inaugurato a luglio 2026 la Smart Power Fab di Dresda, con diversi mesi di anticipo: un investimento di cinque miliardi di euro, il maggiore della storia di Infineon, che crea 1.000 nuovi posti diretti e raddoppia la capacità produttiva del sito di Dresda.',
  'Dresden city has 350,030 jobs (2023), 41,710 of them in industry (mining, manufacturing, energy and water) including 36,920 in manufacturing.':
    'La città di Dresda conta 350.030 posti di lavoro (2023), 41.710 dei quali nell’industria (estrazione, manifattura, energia e acqua), di cui 36.920 nella manifattura.',
  'More than 50 German insurers and reinsurers have their headquarters in Cologne, which Cologne’s economic development calls the second-largest German insurance location, with about 24,000 employees subject to social insurance.':
    'Più di 50 assicuratori e riassicuratori tedeschi hanno sede a Colonia, che l’ente cittadino per lo sviluppo economico definisce la seconda piazza assicurativa tedesca, con circa 24.000 dipendenti soggetti ad assicurazione sociale.',
  'Cologne had 631,907 employees subject to social insurance at its workplaces in 2025, 553,626 of them in services and 78,281 in production.':
    'Colonia contava nel 2025 sui suoi luoghi di lavoro 631.907 dipendenti soggetti ad assicurazione sociale, 553.626 dei quali nei servizi e 78.281 nella produzione.',
  'Essen has 350,160 jobs (2023) and Dortmund 346,380; in Essen 93,570 are in finance and insurance, real estate and professional and business services.':
    'Essen conta 350.160 posti di lavoro (2023) e Dortmund 346.380; a Essen 93.570 sono in finanza e assicurazioni, immobiliare e servizi professionali e alle imprese.',
  'RWE AG gives its address as RWE Platz 1, Essen, where it is registered (district court Essen).':
    'RWE AG indica come indirizzo RWE Platz 1, Essen, dove ha sede legale (tribunale distrettuale di Essen).',
  'thyssenkrupp AG gives its address as thyssenkrupp Allee 1, Essen, with registered offices in Duisburg and Essen.':
    'thyssenkrupp AG indica come indirizzo thyssenkrupp Allee 1, Essen, con sedi legali a Duisburg ed Essen.',
  'Brenntag’s head office is at Messeallee 11 in Essen.':
    'La sede centrale di Brenntag è in Messeallee 11 a Essen.',
  'The Hanover region has 703,250 jobs (2023), 74,620 of them in manufacturing.':
    'La regione di Hannover conta 703.250 posti di lavoro (2023), 74.620 dei quali nella manifattura.',
  'Continental’s headquarters is at Continental-Plaza 1 in Hanover; its new campus was inaugurated in December 2023 for about 2,400 employees from corporate functions and the Tires and ContiTech divisions.':
    'La sede di Continental è in Continental-Plaza 1 a Hannover; il nuovo campus è stato inaugurato a dicembre 2023 per circa 2.400 dipendenti delle funzioni di gruppo e delle divisioni Tires e ContiTech.',
  'Talanx describes itself as based in Hannover and reports insurance revenue of €48,994 million for 2025.':
    'Talanx si descrive come un gruppo con sede a Hannover e riporta ricavi assicurativi per 48.994 milioni di euro nel 2025.',
  'Leipzig city has 365,780 jobs (2023), 28,180 of them in manufacturing and 93,610 in finance and insurance, real estate and professional and business services.':
    'La città di Lipsia conta 365.780 posti di lavoro (2023), 28.180 dei quali nella manifattura e 93.610 in finanza e assicurazioni, immobiliare e servizi professionali e alle imprese.',
  'BMW Group Plant Leipzig has about 6,800 employees and built 259,430 vehicles in 2025; more than 11,600 people work at the site in total, and the BMW Group has invested over €5.6 billion there.':
    'Lo stabilimento BMW Group di Lipsia ha circa 6.800 dipendenti e ha costruito 259.430 veicoli nel 2025; in totale oltre 11.600 persone lavorano nel sito, dove il gruppo BMW ha investito oltre 5,6 miliardi di euro.',
  'More than 4,600 people work at Porsche Leipzig, which builds around 550 Macan and Panamera models a day and is the brand’s centre of excellence for electromobility.':
    'Oltre 4.600 persone lavorano da Porsche Leipzig, che costruisce circa 550 Macan e Panamera al giorno ed è il centro di eccellenza del marchio per l’elettromobilità.',
  'The Karlsruhe Institute of Technology reports 23,083 students, 10,131 employees, 424 professors and 68 new spin-offs and start-ups in 2025.':
    'Il Karlsruhe Institute of Technology riporta nel 2025 23.083 studenti, 10.131 dipendenti, 424 professori e 68 nuovi spin-off e start-up.',
  'Karlsruhe city has 240,790 jobs (2023), 71,910 of them in trade, transport, hospitality and information and communication and 52,850 in finance and insurance, real estate and professional and business services.':
    'La città di Karlsruhe conta 240.790 posti di lavoro (2023), 71.910 dei quali in commercio, trasporti, ricettività e informazione e comunicazione e 52.850 in finanza e assicurazioni, immobiliare e servizi professionali e alle imprese.',
  'CyberForum, the network of Karlsruhe’s IT cluster, has about 1,200 member companies that together account for around 30,000 jobs, and runs a federally recognised digital hub for cybersecurity.':
    'CyberForum, la rete del cluster IT di Karlsruhe, ha circa 1.200 aziende associate che insieme contano circa 30.000 posti di lavoro e gestisce un digital hub per la cybersicurezza riconosciuto a livello federale.',
  'IONOS Group, the cloud infrastructure and web hosting company, gives Karlsruhe as its address.':
    'IONOS Group, l’azienda di infrastrutture cloud e web hosting, indica Karlsruhe come proprio indirizzo.',
  'Deutsche Telekom’s group headquarters is at Friedrich-Ebert-Allee 140 in Bonn; the group has around 200,000 employees worldwide (31 December 2025) and more than 12,000 people in Bonn and the surrounding region work for it, making it Bonn’s largest employer.':
    'La sede del gruppo Deutsche Telekom è in Friedrich-Ebert-Allee 140 a Bonn; il gruppo ha circa 200.000 dipendenti nel mondo (31 dicembre 2025) e oltre 12.000 persone a Bonn e dintorni lavorano per Telekom, il maggiore datore di lavoro della città.',
  'Bonn has 27 United Nations institutions on its UN Campus, with a staff of almost a thousand.':
    'Bonn ospita 27 istituzioni delle Nazioni Unite nel suo UN Campus, con quasi mille dipendenti.',
  'Bonn city has 269,690 jobs (2023), 135,860 of them (50%) in public administration, education, health, arts and other services, and only 8,510 in manufacturing.':
    'La città di Bonn conta 269.690 posti di lavoro (2023), 135.860 dei quali (50%) in amministrazione pubblica, istruzione, sanità, arte e altri servizi, e solo 8.510 nella manifattura.'
});
