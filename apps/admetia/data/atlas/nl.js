/* Atlas record: Netherlands. Read 2 and 3 October 2026; log P40
 * (research/verification/round-4b.md, round-4k.md, round-5a.md). Orientation year, salary thresholds and
 * the 30% facility are the library's (places/visas-and-work-rights.md §5,
 * verification/freshness-register.md #13 and #17).
 * Round 5a (3 October 2026) added standing, metrics (Eurostat metropolitan regions for population and
 * GDP, Numbeo for rent; no pay series by city was found), more claims per hub and re-rated Amsterdam IT
 * on Eurostat jobs; the country brief is research/countries/nl-netherlands.md. */

ATLAS.add({
  id: 'NL',
  checked: '2026-10-03',
  log: 'P40',
  summary: 'The most English-friendly large job market on the continent. Amsterdam takes about 40% of the international graduates who stay and work, with trading firms, fintech and European headquarters; Rotterdam is Europe’s logistics gateway; Eindhoven is built around ASML’s chip machines. Only a quarter of international graduates are still in the country five years on.',
  sectors: ['Trading and fintech', 'European headquarters', 'Ports and logistics', 'Semiconductor equipment', 'Agrifood'],
  roles: ['business', 'finance', 'logistics', 'it'],
  hubs: [
    {
      id: 'amsterdam', name: 'Amsterdam', lat: 52.37, lon: 4.90,
      knownFor: 'Trading firms, fintech and European headquarters',
      why: [
        'nl-ams-grads',
        'nl-ams-trading',
        'nl-ams-emp',
        'nl-ams-rank',
        'nl-gfci',
        'nl-ams-emp',
        'nl-ams-rank',
        'nl-gfci',
        'nl-ams-emp',
        'nl-ams-rank',
        'nl-gfci'
      ],
      sectors: ['Proprietary trading', 'Fintech and payments', 'European headquarters', 'Technology'],
      employers: [
        { name: 'Optiver, IMC, Flow Traders', note: 'trading firms with headquarters in Amsterdam', c: 'nl-ams-trading' },
        { name: 'Adyen', note: 'payments company founded in Amsterdam in 2006; says 4,000+ employees', c: 'nl-ams-adyen' },
        { name: 'University of Amsterdam', note: 'over 44,000 students and 6,200 employees', c: 'nl-ams-uva' },
        { t: 'Amsterdam’s start-up ecosystem', note: 'ecosystem value $83 billion; joint 23rd in the world', c: 'nl-ams-gser' },
        { name: 'Adyen', note: 'payments company founded in Amsterdam in 2006; says 4,000+ employees', c: 'nl-ams-adyen' },
        { name: 'University of Amsterdam', note: 'over 44,000 students and 6,200 employees', c: 'nl-ams-uva' },
        { t: 'Amsterdam’s start-up ecosystem', note: 'ecosystem value $83 billion; joint 23rd in the world', c: 'nl-ams-gser' },
        { name: 'Adyen', note: 'payments company founded in Amsterdam in 2006; says 4,000+ employees', c: 'nl-ams-adyen' },
        { name: 'University of Amsterdam', note: 'over 44,000 students and 6,200 employees', c: 'nl-ams-uva' },
        { t: 'Amsterdam’s start-up ecosystem', note: 'ecosystem value $83 billion; joint 23rd in the world', c: 'nl-ams-gser' }
      ],
      demand: {
        business: ['strong', 'nl-ams-grads'],
        finance: ['strong', 'nl-ams-trading', 'nl-ams-grads'],
        it: ['strong', 'nl-ams-emp', 'nl-ams-rank'],
        economics: 'gap', accounting: 'gap', management: 'gap', marketing: 'gap', logistics: 'gap', analytics: 'gap', software: 'gap', datasci: 'gap', ai: 'gap', cs: 'gap', bigdata: 'gap'
      },
      finance: {
        ib: 'gap', banking: 'gap', am: 'gap', pe: 'gap', vc: 'gap', corpfin: 'gap', risk: 'gap', finconsult: 'gap'
      },
      standing: [
        { f: 'finance', s: [5, 3, 2], c: ['nl-ams-trading', 'nl-gfci', 'nl-ams-rank'] },
        { f: 'it', s: [5, 3, 2], c: ['nl-ams-emp', 'nl-ams-rank', 'nl-ams-gser'] },
        { f: 'business', s: [5, 3, 2], c: ['nl-ams-grads', 'nl-ams-emp'] }
      ],
      metrics: {
        pop: {
          v: 3397323,
          year: 2023,
          area: 'metro',
          tag: 'data',
          src: 'https://ec.europa.eu/eurostat/databrowser/view/met_pjanaggr3/default/table',
          by: 'Eurostat, population on 1 January by metropolitan region (met_pjanaggr3), Amsterdam',
          seen: '2026-10-03'
        },
        gdp: {
          v: 201.1,
          cur: 'EUR',
          year: 2021,
          area: 'metro',
          tag: 'data',
          src: 'https://ec.europa.eu/eurostat/databrowser/view/met_10r_3gdp/default/table',
          by: 'Eurostat, GDP at current market prices by metropolitan region (met_10r_3gdp), Amsterdam, million euro ÷ 1,000',
          seen: '2026-10-03'
        },
        rent: {
          v: 2266,
          cur: 'EUR',
          year: 2026,
          area: 'city',
          tag: 'anecdotal',
          src: 'https://web.archive.org/web/20260802111055/https://www.numbeo.com/cost-of-living/in/Amsterdam',
          by: 'Numbeo (crowd-sourced; 1499 entries by 233 contributors in the past 12 months), one-bedroom flat in the city centre, average, Amsterdam (page read as archived by the Internet Archive, Numbeo update of 1 August 2026)',
          seen: '2026-10-03'
        }
      },
      programmes: [
        { calc: 'computing', track: 'dsai', id: 'uva-ai', name: 'University of Amsterdam — MSc Artificial Intelligence' }
      ]
    },
    {
      id: 'rotterdam', name: 'Rotterdam and Delft', lat: 51.92, lon: 4.48,
      knownFor: 'Europe’s logistics gateway, plus a business school and a technical university',
      why: ['nl-rtm-port', 'nl-ports', 'nl-rtm-jobs', 'nl-ports', 'nl-rtm-jobs', 'nl-ports', 'nl-rtm-jobs', 'nl-rtm-metro'],
      sectors: ['Port and logistics', 'Energy and chemicals', 'Higher education'],
      employers: [
        { name: 'Port of Rotterdam', note: '428.4 million tonnes in 2025', c: 'nl-rtm-port' },
        { t: 'The port and its industry', note: 'about 182,000 jobs in the Rotterdam-Rijnmond area, directly and indirectly', c: 'nl-rtm-jobs' },
        { t: 'Groot-Rijnmond employers', note: '831,500 jobs (2023), 46,200 in manufacturing', c: 'nl-rtm-emp' },
        { t: 'The port and its industry', note: 'about 182,000 jobs in the Rotterdam-Rijnmond area, directly and indirectly', c: 'nl-rtm-jobs' },
        { t: 'Groot-Rijnmond employers', note: '831,500 jobs (2023), 46,200 in manufacturing', c: 'nl-rtm-emp' },
        { t: 'The port and its industry', note: 'about 182,000 jobs in the Rotterdam-Rijnmond area, directly and indirectly', c: 'nl-rtm-jobs' },
        { t: 'Groot-Rijnmond employers', note: '831,500 jobs (2023), 46,200 in manufacturing', c: 'nl-rtm-emp' }
      ],
      demand: {
        logistics: ['dominant', 'nl-rtm-port'],
        business: 'gap', finance: 'gap', economics: 'gap', accounting: 'gap', management: 'gap', marketing: 'gap', analytics: 'gap', it: 'gap', software: 'gap', datasci: 'gap', ai: 'gap', cs: 'gap', bigdata: 'gap'
      },
      standing: [
        { f: 'logistics', s: [5, 5, 2], c: ['nl-rtm-port', 'nl-ports', 'nl-rtm-jobs'] }
      ],
      metrics: {
        pop: {
          v: 1868227,
          year: 2023,
          area: 'metro',
          tag: 'data',
          src: 'https://ec.europa.eu/eurostat/databrowser/view/met_pjanaggr3/default/table',
          by: 'Eurostat, population on 1 January by metropolitan region (met_pjanaggr3), Rotterdam',
          seen: '2026-10-03'
        },
        gdp: {
          v: 95.2,
          cur: 'EUR',
          year: 2021,
          area: 'metro',
          tag: 'data',
          src: 'https://ec.europa.eu/eurostat/databrowser/view/met_10r_3gdp/default/table',
          by: 'Eurostat, GDP at current market prices by metropolitan region (met_10r_3gdp), Rotterdam, million euro ÷ 1,000',
          seen: '2026-10-03'
        },
        rent: {
          v: 1627,
          cur: 'EUR',
          year: 2026,
          area: 'city',
          tag: 'anecdotal',
          src: 'https://web.archive.org/web/20260808071426/https://www.numbeo.com/cost-of-living/in/Rotterdam',
          by: 'Numbeo (crowd-sourced; 676 entries by 77 contributors in the past 12 months), one-bedroom flat in the city centre, average, Rotterdam (page read as archived by the Internet Archive, Numbeo update of 6 August 2026)',
          seen: '2026-10-03'
        }
      },
      programmes: [
        { calc: 'masters', track: 'mim', id: 'rsm-mim', name: 'RSM Rotterdam — MScBA Management' },
        { calc: 'masters', track: 'mif', id: 'rsm-fi', name: 'RSM Rotterdam — MSc Finance & Investments' },
        { calc: 'masters', track: 'marketing', id: 'rsm-mkt', name: 'RSM Rotterdam — MSc Marketing Management' },
        { calc: 'computing', track: 'cs', id: 'tudelft-cs', name: 'TU Delft — MSc Computer Science' }
      ]
    },
    {
      id: 'eindhoven', name: 'Eindhoven (Brainport)', lat: 51.44, lon: 5.48,
      knownFor: 'Chip-making machines and high-tech engineering',
      why: ['nl-asml', 'nl-asml-ar', 'nl-ein-emp', 'nl-asml-ar', 'nl-ein-emp', 'nl-asml-ar', 'nl-ein-emp', 'nl-ein-brainport'],
      sectors: ['Semiconductor equipment', 'High-tech engineering', 'Software'],
      employers: [
        { name: 'ASML', note: 'headquarters in Veldhoven; a campus for 20,000 more staff planned', c: 'nl-asml' },
        { name: 'ASML', note: 'more than 44,000 employees (FTEs) worldwide in 2025; headquarters at De Run, Veldhoven', c: 'nl-asml-ar' },
        { name: 'ASML', note: 'more than 44,000 employees (FTEs) worldwide in 2025; headquarters at De Run, Veldhoven', c: 'nl-asml-ar' },
        { name: 'ASML', note: 'more than 44,000 employees (FTEs) worldwide in 2025; headquarters at De Run, Veldhoven', c: 'nl-asml-ar' }
      ],
      demand: {
        software: ['present', 'nl-asml'],
        cs: ['present', 'nl-asml'],
        business: 'gap', finance: 'gap', economics: 'gap', accounting: 'gap', management: 'gap', marketing: 'gap', logistics: 'gap', analytics: 'gap', it: 'gap', datasci: 'gap', ai: 'gap', bigdata: 'gap'
      },
      standing: [
        { f: 'software', s: [3, 2, 1], c: ['nl-asml', 'nl-asml-ar', 'nl-ein-emp'] },
        { f: 'cs', s: [3, 2, 1], c: ['nl-asml', 'nl-asml-ar'] }
      ],
      metrics: {
        pop: {
          v: 803180,
          year: 2023,
          area: 'metro',
          tag: 'data',
          src: 'https://ec.europa.eu/eurostat/databrowser/view/met_pjanaggr3/default/table',
          by: 'Eurostat, population on 1 January by metropolitan region (met_pjanaggr3), Eindhoven',
          seen: '2026-10-03'
        },
        gdp: {
          v: 46.4,
          cur: 'EUR',
          year: 2021,
          area: 'metro',
          tag: 'data',
          src: 'https://ec.europa.eu/eurostat/databrowser/view/met_10r_3gdp/default/table',
          by: 'Eurostat, GDP at current market prices by metropolitan region (met_10r_3gdp), Eindhoven, million euro ÷ 1,000',
          seen: '2026-10-03'
        },
        rent: {
          v: 1506,
          cur: 'EUR',
          year: 2026,
          area: 'city',
          tag: 'anecdotal',
          src: 'https://web.archive.org/web/20260808071424/https://www.numbeo.com/cost-of-living/in/Eindhoven',
          by: 'Numbeo (crowd-sourced; 707 entries by 89 contributors in the past 12 months), one-bedroom flat in the city centre, average, Eindhoven (page read as archived by the Internet Archive, Numbeo update of 8 August 2026)',
          seen: '2026-10-03'
        }
      },
      programmes: []
    },
    {
      id: 'utrecht', name: 'Utrecht', lat: 52.09, lon: 5.12,
      knownFor: 'Second in the Netherlands for both finance and information-and-communication jobs',
      why: ['nl-utrecht', 'nl-utr-emp', 'nl-ams-rank', 'nl-utr-emp', 'nl-ams-rank', 'nl-utr-emp', 'nl-ams-rank'],
      sectors: ['Banking', 'Technology', 'Public sector'],
      employers: [
        { t: 'Information and communication employers', note: '55,000 jobs (2021)', c: 'nl-utrecht' },
        { t: 'Finance and insurance employers', note: '34,000 jobs (2021)', c: 'nl-utrecht' },
        { name: 'NS (Dutch Railways)', note: 'head office at Laan van Puntenburg, Utrecht', c: 'nl-utr-ns' },
        { name: 'Utrecht University', note: 'over 38,000 students and 8,800 staff', c: 'nl-utr-uu' },
        { name: 'NS (Dutch Railways)', note: 'head office at Laan van Puntenburg, Utrecht', c: 'nl-utr-ns' },
        { name: 'Utrecht University', note: 'over 38,000 students and 8,800 staff', c: 'nl-utr-uu' },
        { name: 'NS (Dutch Railways)', note: 'head office at Laan van Puntenburg, Utrecht', c: 'nl-utr-ns' },
        { name: 'Utrecht University', note: 'over 38,000 students and 8,800 staff', c: 'nl-utr-uu' }
      ],
      demand: {
        finance: ['strong', 'nl-utrecht'],
        it: ['strong', 'nl-utrecht'],
        business: 'gap', economics: 'gap', accounting: 'gap', management: 'gap', marketing: 'gap', logistics: 'gap', analytics: 'gap', software: 'gap', datasci: 'gap', ai: 'gap', cs: 'gap', bigdata: 'gap'
      },
      standing: [
        { f: 'it', s: [4, 2, 1], c: ['nl-utrecht', 'nl-utr-emp', 'nl-ams-rank'] },
        { f: 'finance', s: [4, 2, 1], c: ['nl-utrecht', 'nl-utr-emp', 'nl-ams-rank'] }
      ],
      metrics: {
        pop: {
          v: 1387643,
          year: 2023,
          area: 'metro',
          tag: 'data',
          src: 'https://ec.europa.eu/eurostat/databrowser/view/met_pjanaggr3/default/table',
          by: 'Eurostat, population on 1 January by metropolitan region (met_pjanaggr3), Utrecht',
          seen: '2026-10-03'
        },
        gdp: {
          v: 83.3,
          cur: 'EUR',
          year: 2021,
          area: 'metro',
          tag: 'data',
          src: 'https://ec.europa.eu/eurostat/databrowser/view/met_10r_3gdp/default/table',
          by: 'Eurostat, GDP at current market prices by metropolitan region (met_10r_3gdp), Utrecht, million euro ÷ 1,000',
          seen: '2026-10-03'
        },
        rent: {
          v: 1678,
          cur: 'EUR',
          year: 2026,
          area: 'city',
          tag: 'anecdotal',
          src: 'https://web.archive.org/web/20260808071427/https://www.numbeo.com/cost-of-living/in/Utrecht',
          by: 'Numbeo (crowd-sourced; 712 entries by 70 contributors in the past 12 months), one-bedroom flat in the city centre, average, Utrecht (page read as archived by the Internet Archive, Numbeo update of 7 August 2026)',
          seen: '2026-10-03'
        }
      },
      programmes: []
    },
    {
      id: 'the-hague', name: 'The Hague', lat: 52.08, lon: 4.30,
      knownFor: 'The seat of government and of international courts',
      why: ['nl-the-hague', 'nl-hague-emp', 'nl-hague-intl', 'nl-hague-emp', 'nl-hague-intl', 'nl-hague-emp', 'nl-hague-intl'],
      sectors: ['Government', 'Energy', 'Technology'],
      employers: [
        { t: 'Information and communication employers', note: '27,000 jobs (2021)', c: 'nl-the-hague' },
        { t: 'Finance and insurance employers', note: '14,000 jobs (2021)', c: 'nl-the-hague' },
        {
          t: 'International organisations',
          note: 'some 200, including the International Court of Justice, Europol and the International Criminal Court',
          c: 'nl-hague-intl'
        },
        { name: 'International Criminal Court', note: 'permanent premises in The Hague', c: 'nl-hague-icc' },
        {
          t: 'International organisations',
          note: 'some 200, including the International Court of Justice, Europol and the International Criminal Court',
          c: 'nl-hague-intl'
        },
        { name: 'International Criminal Court', note: 'permanent premises in The Hague', c: 'nl-hague-icc' },
        {
          t: 'International organisations',
          note: 'some 200, including the International Court of Justice, Europol and the International Criminal Court',
          c: 'nl-hague-intl'
        },
        { name: 'International Criminal Court', note: 'permanent premises in The Hague', c: 'nl-hague-icc' }
      ],
      demand: {
        business: 'gap', finance: 'gap', economics: 'gap', accounting: 'gap', management: 'gap', marketing: 'gap', logistics: 'gap', analytics: 'gap', it: 'gap', software: 'gap', datasci: 'gap', ai: 'gap', cs: 'gap', bigdata: 'gap'
      },
      standing: [
        { f: 'it', s: [3, 2, 1], c: ['nl-hague-emp', 'nl-the-hague'] }
      ],
      metrics: {
        pop: {
          v: 1150797,
          year: 2023,
          area: 'metro',
          tag: 'data',
          src: 'https://ec.europa.eu/eurostat/databrowser/view/met_pjanaggr3/default/table',
          by: 'Eurostat, population on 1 January by metropolitan region (met_pjanaggr3), s\' Gravenhage',
          seen: '2026-10-03'
        },
        gdp: {
          v: 56,
          cur: 'EUR',
          year: 2021,
          area: 'metro',
          tag: 'data',
          src: 'https://ec.europa.eu/eurostat/databrowser/view/met_10r_3gdp/default/table',
          by: 'Eurostat, GDP at current market prices by metropolitan region (met_10r_3gdp), s\' Gravenhage, million euro ÷ 1,000',
          seen: '2026-10-03'
        }
      },
      programmes: []
    }
  ],

  work: [
    { k: 'Language', c: ['nl-lang', 'nl-w-lang-ing'] },
    { k: 'Recruiting calendar', c: ['nl-w-cal-heineken', 'nl-w-cal-ing', 'nl-w-cal-fairs'] },
    { k: 'Where demand is now', c: ['nl-w-vac'] },
    { k: 'Tax and net pay', c: ['nl-30'] },
    { k: 'Entry pay', c: ['nl-pay'] },
    { k: 'Graduate labour market', c: ['nl-grads', 'nl-stay', 'nl-w-rsm'] }
  ],

  briefs: [
    ['places/visas-and-work-rights.md', '§5 Netherlands: orientation year, highly skilled migrant thresholds'],
    ['places/countries-and-cities.md', '§2 language and Nuffic stay rates; §3 Amsterdam trading firms'],
    ['money/salaries-and-roi.md', '§5 Amsterdam net pay with and without the 30% facility'],
    ['careers/finance.md', 'proprietary trading and market-making'],
    ['countries/nl-netherlands.md', 'Country brief: hubs, employers, pay and standing']
  ],
  gaps: [
    'No family is rated in The Hague: the Eurostat figures read do not put them second or third in the country for finance or information-and-communication jobs.',
    'Tech, data and AI demand in Amsterdam and Eindhoven is rated only for IT in Amsterdam (Eurostat jobs); no city-level source was read for data, AI or software.',
    'Compulsory Dutch health insurance for students who work was not read on an official page.',
    'The IND’s student residence permit conditions were not re-read; only the work rule was.',
    'No pay series by city or region could be read (Statistics Netherlands publishes wages by sector, not by city), so the hubs have no pay metric; entry pay by field was not found.',
    'Rabobank, ING, Shell and Philips are not weighted in Utrecht, Amsterdam and The Hague because no headcount we can cite was read.',
    'Hubs added on 3 October 2026 were rated only from Eurostat’s 2021–22 metropolitan employment counts: strong means second or third in the country for jobs in finance and insurance, or in information and communication, with at least 5,000 such jobs.'
  ],

  claims: {
    'nl-lang': {
      t: '7.8% of Dutch job postings say Dutch is not required — the highest share of the large European markets — and about 5% are written in English.',
      tag: 'data',
      src: 'research/places/countries-and-cities.md',
      by: 'Indeed Hiring Lab (10 Oct 2024), via places/countries-and-cities.md §2',
      seen: '2026-09-30'
    },
    'nl-stay': {
      t: '25% of international graduates still live in the Netherlands five years after graduating; EEA graduates stay at about half the non-EEA rate (20.3% against 38.5%).',
      tag: 'data',
      src: 'research/places/countries-and-cities.md',
      by: 'Nuffic, 15 May 2025, via places/countries-and-cities.md §2',
      seen: '2026-09-30'
    },
    'nl-30': {
      t: 'The 30% facility can exempt part of a recruit’s pay from tax if they lived more than 150 km from the Dutch border for 16 of the last 24 months; under 30 with a master’s it needs €36,497 a year (2026).',
      tag: 'data',
      src: 'research/verification/freshness-register.md',
      by: 'Belastingdienst, via verification/freshness-register.md #17',
      seen: '2026-10-02'
    },
    'nl-ams-grads': {
      t: 'Greater Amsterdam hosts about 40% of the international graduates who are working in the Netherlands five years after graduating.',
      tag: 'data',
      src: 'research/places/countries-and-cities.md',
      by: 'Nuffic 2025, via places/countries-and-cities.md §3',
      seen: '2026-09-30'
    },
    'nl-ams-trading': {
      t: 'The proprietary trading and market-making firms Optiver, IMC and Flow Traders have their headquarters in Amsterdam.',
      tag: 'practitioner consensus',
      src: 'research/places/countries-and-cities.md',
      by: 'Admetia research library, places/countries-and-cities.md §3',
      seen: '2026-09-30'
    },
    'nl-rtm-port': {
      t: 'The Port of Rotterdam handled 428.4 million tonnes and 14.2 million TEU of containers in 2025 and describes itself as Europe’s logistics hub.',
      tag: 'data',
      src: 'https://www.portofrotterdam.com/en/news-and-press-releases/throughput-port-rotterdam-shows-slight-decline',
      by: 'Port of Rotterdam Authority, 26 Feb 2026',
      seen: '2026-10-02'
    },
    'nl-asml': {
      t: 'ASML, headquartered in Veldhoven, plans a campus at Brainport Industries Campus for 20,000 more employees.',
      tag: 'employer-stated',
      src: 'https://brainporteindhoven.com/int/news/asml-wants-to-create-20000-jobs-at-new-part-brainport-industries-campus',
      by: 'Brainport Eindhoven, 21 May 2024',
      seen: '2026-10-02'
    },
    'nl-utrecht': {
      t: 'Eurostat counts 850,000 people in work in the Utrecht metropolitan region in 2021: 55,000 in information and communication (second in the Netherlands, after Amsterdam) and 34,000 in finance and insurance (second in the Netherlands, after Amsterdam). The region’s GDP was €83.3 billion in 2021.',
      tag: 'data',
      src: 'https://ec.europa.eu/eurostat/databrowser/view/met_10r_3emp/default/table?lang=en',
      by: 'Eurostat, metropolitan regions: employment by activity (met_10r_3emp) and GDP (met_10r_3gdp)',
      seen: '2026-10-03'
    },
    'nl-the-hague': {
      t: 'Eurostat counts 645,000 people in work in the The Hague metropolitan region in 2021: 27,000 in information and communication and 14,000 in finance and insurance. The region’s GDP was €56.0 billion in 2021.',
      tag: 'data',
      src: 'https://ec.europa.eu/eurostat/databrowser/view/met_10r_3emp/default/table?lang=en',
      by: 'Eurostat, metropolitan regions: employment by activity (met_10r_3emp) and GDP (met_10r_3gdp)',
      seen: '2026-10-03'
    },
    'nl-gfci': {
      t: 'The Global Financial Centres Index 40 (September 2026) ranks Amsterdam 26th in the world (down 6 places) and eighth among Western European centres, behind London, Zurich, Geneva, Luxembourg, Lugano, Paris and Copenhagen.',
      tag: 'practitioner consensus',
      src: 'https://www.longfinance.net/media/documents/GFCI_40_Report_2026.09.16_v1.2.pdf',
      by: 'Z/Yen and the China Development Institute, GFCI 40, 16 Sep 2026, Tables 1 and 8',
      seen: '2026-10-03'
    },
    'nl-ams-rank': {
      t: 'Of the 152 metropolitan regions for which Eurostat publishes jobs by sector (latest year, 2021 or 2022; German, British and Swiss regions are not in the table), Amsterdam has the seventh-most jobs in information and communication (114,000) and in finance and insurance (67,000), and Utrecht the 19th (55,000) and 18th (34,000).',
      tag: 'data',
      src: 'https://ec.europa.eu/eurostat/databrowser/view/met_10r_3emp/default/table',
      by: 'Eurostat, employment by NACE Rev. 2 activity by metropolitan region (met_10r_3emp); ranking calculated by Admetia from the full table, 2026-10-03',
      seen: '2026-10-03'
    },
    'nl-ams-emp': {
      t: 'Greater Amsterdam (Groot-Amsterdam) has 1,144,700 jobs (2023): 91,300 in information and communication, 60,100 in finance and insurance and 297,600 in professional, scientific, technical and administrative services.',
      tag: 'data',
      src: 'https://ec.europa.eu/eurostat/databrowser/view/nama_10r_3empers/default/table',
      by: 'Eurostat, employment (thousand persons) by NUTS 3 region and activity (nama_10r_3empers), 2023, NUTS 3 NL32B',
      seen: '2026-10-03'
    },
    'nl-ams-gser': {
      t: 'Startup Genome’s 2026 report ranks Amsterdam-Delta joint 23rd in the world with Stockholm, with an ecosystem value of $83 billion, $2.5 billion of seed and Series A funding in H2 2023–2025 and $21 billion of exits in 2021–2025.',
      tag: 'practitioner consensus',
      src: 'https://startupgenome.com/ecosystems/amsterdam-delta',
      by: 'Startup Genome, Global Startup Ecosystem Report 2026, Amsterdam-Delta page and Top 40 ranking page (https://startupgenome.com/report/the-global-startup-ecosystem-report-2026/global-startup-ecosystem-ranking-2026-top-40)',
      seen: '2026-10-03'
    },
    'nl-ams-adyen': {
      t: 'Adyen says it was founded in 2006 in Amsterdam and has 4,000+ employees of 115+ nationalities in 28 offices (page undated; its processed-volume figure is for 2023).',
      tag: 'employer-stated',
      src: 'https://www.adyen.com/about',
      by: 'Adyen, About',
      seen: '2026-10-03'
    },
    'nl-ams-uva': {
      t: 'The University of Amsterdam has over 44,000 students, 6,200 employees, 3,000 PhD researchers and an annual budget of €850 million.',
      tag: 'employer-stated',
      src: 'https://www.uva.nl/en/about-the-uva/about-the-university/facts-and-figures/facts-and-figures.html',
      by: 'University of Amsterdam, Facts and figures',
      seen: '2026-10-03'
    },
    'nl-ports': {
      t: 'In 2024 Rotterdam handled 397.3 million tonnes of goods, the most of any port in the EU, followed by Antwerp-Bruges (244.2 million) and Hamburg (97.0 million).',
      tag: 'data',
      src: 'https://ec.europa.eu/eurostat/databrowser/view/mar_mg_aa_pwhd/default/table',
      by: 'Eurostat, gross weight of goods handled in main ports (mar_mg_aa_pwhd), 2024',
      seen: '2026-10-03'
    },
    'nl-rtm-jobs': {
      t: 'The Port of Rotterdam Authority puts the port’s employment at about 182,000 jobs, directly and indirectly, in the Rotterdam-Rijnmond area and its added value at €23.3 billion, 2.2% of Dutch GDP; the Authority itself has about 1,440 employees.',
      tag: 'employer-stated',
      src: 'https://www.portofrotterdam.com/en/experience-online/facts-and-figures',
      by: 'Port of Rotterdam Authority, Facts and figures',
      seen: '2026-10-03'
    },
    'nl-rtm-emp': {
      t: 'Groot-Rijnmond (the Rotterdam region) has 831,500 jobs (2023): 46,200 in manufacturing, 249,000 in trade, transport, hospitality and information and communication, and 204,600 in finance, real estate and professional and business services.',
      tag: 'data',
      src: 'https://ec.europa.eu/eurostat/databrowser/view/nama_10r_3empers/default/table',
      by: 'Eurostat, employment (thousand persons) by NUTS 3 region and activity (nama_10r_3empers), 2023, NUTS 3 NL366',
      seen: '2026-10-03'
    },
    'nl-asml-ar': {
      t: 'ASML’s 2025 annual report counts more than 44,000 total employees (FTEs) of 143 nationalities; its global headquarters is ASML Veldhoven, De Run 6501, and it operates in more than 60 locations worldwide.',
      tag: 'employer-stated',
      src: 'https://ourbrand.asml.com/m/8ab959d4926657b/original/asml-2025-annual-report-strategic-report-section.pdf',
      by: 'ASML, Annual Report 2025 (strategic report); locations from ASML (https://www.asml.com/en/company/about-asml/locations)',
      seen: '2026-10-03'
    },
    'nl-ein-emp': {
      t: 'The Eindhoven region (Zuidoost-Noord-Brabant) has 502,100 jobs (2023), 80,400 of them (16%) in manufacturing, 16,300 in information and communication and 106,400 in professional, scientific, technical and administrative services.',
      tag: 'data',
      src: 'https://ec.europa.eu/eurostat/databrowser/view/nama_10r_3empers/default/table',
      by: 'Eurostat, employment (thousand persons) by NUTS 3 region and activity (nama_10r_3empers), 2023, NUTS 3 NL414',
      seen: '2026-10-03'
    },
    'nl-utr-emp': {
      t: 'The Utrecht region has 891,800 jobs (2023): 60,800 in information and communication, 37,000 in finance and insurance and 177,800 in professional, scientific, technical and administrative services.',
      tag: 'data',
      src: 'https://ec.europa.eu/eurostat/databrowser/view/nama_10r_3empers/default/table',
      by: 'Eurostat, employment (thousand persons) by NUTS 3 region and activity (nama_10r_3empers), 2023, NUTS 3 NL350',
      seen: '2026-10-03'
    },
    'nl-utr-ns': {
      t: 'NS, the Dutch railway company, gives its head-office address as Laan van Puntenburg 100, Utrecht.',
      tag: 'employer-stated',
      src: 'https://www.werkenbijns.nl/over-ns/contact',
      by: 'NS, Werken bij NS: contact',
      seen: '2026-10-03'
    },
    'nl-utr-uu': {
      t: 'Utrecht University reports over 38,000 students, over 8,800 staff members, over 650 professors and an income of about €1.3 billion.',
      tag: 'employer-stated',
      src: 'https://www.uu.nl/en/organisation/about-us/facts-and-figures',
      by: 'Utrecht University, Facts and figures',
      seen: '2026-10-03'
    },
    'nl-hague-emp': {
      t: 'The Hague agglomeration has 514,200 jobs (2023): 191,400 of them (37%) in public administration, defence, education and health, 20,000 in information and communication and 12,300 in finance and insurance.',
      tag: 'data',
      src: 'https://ec.europa.eu/eurostat/databrowser/view/nama_10r_3empers/default/table',
      by: 'Eurostat, employment (thousand persons) by NUTS 3 region and activity (nama_10r_3empers), 2023, NUTS 3 NL361',
      seen: '2026-10-03'
    },
    'nl-hague-intl': {
      t: 'The Hague is home to some 200 international organisations, including the International Court of Justice in the Peace Palace, Europol and the International Criminal Court.',
      tag: 'employer-stated',
      src: 'https://www.thehagueinternationalcentre.nl/relocating/why-the-hague-region/work-in-the-netherlands/work-in-the-hague-region/peace-and-justice',
      by: 'The Hague International Centre, Peace and Justice',
      seen: '2026-10-03'
    },
    'nl-hague-icc': {
      t: 'The International Criminal Court’s permanent premises are at Oude Waalsdorperweg 10 in The Hague.',
      tag: 'employer-stated',
      src: 'https://www.icc-cpi.int/about/how-the-court-works',
      by: 'International Criminal Court, How the Court works',
      seen: '2026-10-03'
    },
    'nl-pay': {
      t: 'In 2022 employees under 30 in Dutch firms with 10 or more staff (public administration excluded) earned a mean of €34,109 gross a year, and those under 30 working as professionals €45,349, against €50,942 for all ages.',
      tag: 'data',
      src: 'https://ec.europa.eu/eurostat/databrowser/view/earn_ses22_28/default/table',
      by: 'Eurostat, Structure of earnings survey 2022: mean annual earnings by age and occupation (earn_ses22_28), Netherlands, firms with 10+ employees, sections B–S excluding O',
      seen: '2026-10-03'
    },
    'nl-w-lang-ing': {
      t: 'ING’s Amsterdam traineeships take the application in English (CV, motivational questions, grade lists) and expect fluent English; Heineken’s Netherlands graduate programme asks for both Dutch and English.',
      tag: 'employer-stated',
      src: 'https://careers.ing.com/es/trabajo/amsterdam/traineeship-retail-banking-october-2026/3121/36855774528',
      by: 'ING careers, Traineeship Retail Banking October 2026; Heineken Netherlands Global Graduate Program postings of 31 August 2026',
      seen: '2026-10-08'
    },
    'nl-w-cal-heineken': {
      t: 'Heineken’s Netherlands Global Graduate Program took applications from 31 August to 20 September 2026, with an online assessment from 21 to 27 September and introductory calls from 28 September to 2 October.',
      tag: 'employer-stated',
      src: 'https://theheinekencompany-rmk.jobs.hr.cloud.sap/TheNetherlands/job/Leiden-Global-Graduate-Program-Finance-2312-AT/1431782033/',
      by: 'HEINEKEN, Global Graduate Program postings, Leiden, 31 August 2026 (position now filled; dates as summarised by search)',
      seen: '2026-10-08'
    },
    'nl-w-cal-ing': {
      t: 'ING’s October 2026 traineeship class held HR interviews on 18 to 22 May and business panels on 1 to 5 June 2026, with a second round in June only if places remained; the programme closes when the places are filled.',
      tag: 'employer-stated',
      src: 'https://careers.ing.com/es/trabajo/amsterdam/traineeship-retail-banking-october-2026/3121/36855774528',
      by: 'ING careers, Traineeship Retail Banking October 2026',
      seen: '2026-10-08'
    },
    'nl-w-cal-fairs': {
      t: 'De Nationale Carrièrebeurs ran on 24 and 25 April 2026 at RAI Amsterdam with 250 employers, and Career Expo Eindhoven on 3 and 4 March 2026 at TU/e.',
      tag: 'employer-stated',
      src: 'https://www.rai.nl/en/calendar/carrierebeurs-2026',
      by: 'RAI Amsterdam, De Nationale Carrièrebeurs 2026; Allseas, Career Expo Eindhoven 2026',
      seen: '2026-10-08'
    },
    'nl-w-vac': {
      t: 'The Dutch job vacancy rate was 3.9% in the last quarter of 2025, down from 4.1% a year earlier: 5.0% in professional, scientific and technical activities, 4.8% in information and communication and 3.4% in finance and insurance.',
      tag: 'data',
      src: 'https://ec.europa.eu/eurostat/databrowser/view/jvs_q_nace2/default/table',
      by: 'Eurostat, job vacancy statistics by NACE Rev. 2 activity, quarterly (jvs_q_nace2), not seasonally adjusted, Netherlands',
      seen: '2026-10-08'
    },
    'nl-w-rsm': {
      t: 'RSM reports that 95.8% of its master’s graduates were employed within six months of graduating (512 responses from 2,055 graduates who finished between 1 September 2024 and 31 August 2025; school-reported, surveyed in April 2026).',
      tag: 'data',
      src: 'https://www.rsm.nl/msc-employment-report/',
      by: 'Rotterdam School of Management, MSc Employment Report 2026',
      seen: '2026-10-08'
    },
    'nl-grads': {
      t: 'In 2025 the employment rate of Dutch people aged 20 to 34 with a tertiary degree was 92.7% (91.8% for those who finished within the last five years); unemployment was 3.9% overall and 8.8% for the 15-to-24s, and GDP was €1,170.6 billion.',
      tag: 'data',
      src: 'https://ec.europa.eu/eurostat/databrowser/view/edat_lfse_24/default/table',
      by: 'Eurostat, employment rate of 20-34-year-olds by educational attainment and years since leaving education (edat_lfse_24), unemployment (une_rt_a) and GDP (nama_10_gdp), 2025',
      seen: '2026-10-03'
    },
    'nl-rtm-metro': {
      t: 'Eurostat counts 998,000 people in work in the Rotterdam metropolitan region in 2021: 72,000 in manufacturing, 29,000 in information and communication and 19,000 in finance and insurance, third in the Netherlands for both of the last two.',
      tag: 'data',
      src: 'https://ec.europa.eu/eurostat/databrowser/view/met_10r_3emp/default/table',
      by: 'Eurostat, employment by NACE Rev. 2 activity by metropolitan region (met_10r_3emp), 2021',
      seen: '2026-10-03'
    },
    'nl-ein-brainport': {
      t: 'Brainport Eindhoven describes itself as a high-tech region with Eindhoven at its centre, where companies, knowledge institutes and governments develop technology together; it lists Eindhoven University of Technology, Fontys, Avans and Tilburg University as its universities.',
      tag: 'employer-stated',
      src: 'https://brainporteindhoven.com/int/work/why-work-in-brainport',
      by: 'Brainport Eindhoven (regional development agency), Why work in Brainport',
      seen: '2026-10-03'
    }
  }
});

if (window.I18N) I18N.add('it', {
  'ING’s Amsterdam traineeships take the application in English (CV, motivational questions, grade lists) and expect fluent English; Heineken’s Netherlands graduate programme asks for both Dutch and English.':
    'I traineeship di ING ad Amsterdam accettano la candidatura in inglese (CV, domande motivazionali, elenchi dei voti) e si aspettano un inglese fluente; il programma olandese per laureati di Heineken chiede sia l’olandese sia l’inglese.',
  'Heineken’s Netherlands Global Graduate Program took applications from 31 August to 20 September 2026, with an online assessment from 21 to 27 September and introductory calls from 28 September to 2 October.':
    'Il Global Graduate Program olandese di Heineken ha raccolto candidature dal 31 agosto al 20 settembre 2026, con una valutazione online dal 21 al 27 settembre e colloqui introduttivi dal 28 settembre al 2 ottobre.',
  'ING’s October 2026 traineeship class held HR interviews on 18 to 22 May and business panels on 1 to 5 June 2026, with a second round in June only if places remained; the programme closes when the places are filled.':
    'La classe di traineeship di ottobre 2026 di ING ha tenuto colloqui con le risorse umane dal 18 al 22 maggio e panel aziendali dal 1 al 5 giugno 2026, con un secondo giro a giugno solo se restavano posti; il programma si chiude quando i posti sono occupati.',
  'De Nationale Carrièrebeurs ran on 24 and 25 April 2026 at RAI Amsterdam with 250 employers, and Career Expo Eindhoven on 3 and 4 March 2026 at TU/e.':
    'De Nationale Carrièrebeurs si è svolta il 24 e 25 aprile 2026 al RAI di Amsterdam con 250 datori di lavoro, e il Career Expo Eindhoven il 3 e 4 marzo 2026 al TU/e.',
  'The Dutch job vacancy rate was 3.9% in the last quarter of 2025, down from 4.1% a year earlier: 5.0% in professional, scientific and technical activities, 4.8% in information and communication and 3.4% in finance and insurance.':
    'Il tasso di posti vacanti olandese era del 3,9% nell’ultimo trimestre 2025, in calo rispetto al 4,1% di un anno prima: 5,0% nelle attività professionali, scientifiche e tecniche, 4,8% in informazione e comunicazione e 3,4% in finanza e assicurazioni.',
  'RSM reports that 95.8% of its master’s graduates were employed within six months of graduating (512 responses from 2,055 graduates who finished between 1 September 2024 and 31 August 2025; school-reported, surveyed in April 2026).':
    'La RSM riferisce che il 95,8% dei suoi laureati magistrali lavorava entro sei mesi dalla laurea (512 risposte su 2.055 laureati che hanno concluso tra il 1 settembre 2024 e il 31 agosto 2025; dato riferito dalla scuola, indagine di aprile 2026).',
  'The most English-friendly large job market on the continent. Amsterdam takes about 40% of the international graduates who stay and work, with trading firms, fintech and European headquarters; Rotterdam is Europe’s logistics gateway; Eindhoven is built around ASML’s chip machines. Only a quarter of international graduates are still in the country five years on.':
    'Il grande mercato del lavoro più aperto all’inglese del continente. Amsterdam accoglie circa il 40% dei laureati internazionali che restano e lavorano, con società di trading, fintech e sedi europee; Rotterdam è la porta logistica d’Europa; Eindhoven è costruita attorno alle macchine per chip di ASML. Solo un quarto dei laureati internazionali è ancora nel paese dopo cinque anni.',
  'Trading and fintech':
    'Trading e fintech',
  'European headquarters':
    'Sedi europee',
  'Ports and logistics':
    'Porti e logistica',
  'Semiconductor equipment':
    'Macchinari per semiconduttori',
  'Agrifood':
    'Agroalimentare',
  'No family is rated in The Hague: the Eurostat figures read do not put them second or third in the country for finance or information-and-communication jobs.':
    'Nessuna famiglia è valutata all’Aia: i dati Eurostat letti non la collocano al secondo o terzo posto del paese per posti in finanza o in informazione e comunicazione.',
  'Tech, data and AI demand in Amsterdam and Eindhoven is rated only for IT in Amsterdam (Eurostat jobs); no city-level source was read for data, AI or software.':
    'La domanda in tecnologia, dati e IA ad Amsterdam ed Eindhoven è valutata solo per l’IT ad Amsterdam (posti Eurostat); per dati, IA e software non è stata letta alcuna fonte a livello di città.',
  'Compulsory Dutch health insurance for students who work was not read on an official page.':
    'L’assicurazione sanitaria olandese obbligatoria per gli studenti che lavorano non è stata letta su una pagina ufficiale.',
  'The IND’s student residence permit conditions were not re-read; only the work rule was.':
    'Le condizioni del permesso di soggiorno per studio dell’IND non sono state rilette; solo la regola sul lavoro.',
  'No pay series by city or region could be read (Statistics Netherlands publishes wages by sector, not by city), so the hubs have no pay metric; entry pay by field was not found.':
    'Non è stata trovata alcuna serie salariale per città o regione (l’istituto olandese di statistica pubblica i salari per settore, non per città), perciò i poli non hanno una metrica salariale; lo stipendio d’ingresso per ambito non è stato trovato.',
  'Rabobank, ING, Shell and Philips are not weighted in Utrecht, Amsterdam and The Hague because no headcount we can cite was read.':
    'Rabobank, ING, Shell e Philips non sono ponderate a Utrecht, Amsterdam e all’Aia perché non è stato letto alcun organico citabile.',
  'Hubs added on 3 October 2026 were rated only from Eurostat’s 2021–22 metropolitan employment counts: strong means second or third in the country for jobs in finance and insurance, or in information and communication, with at least 5,000 such jobs.':
    'I poli aggiunti il 3 ottobre 2026 sono stati valutati solo sui dati Eurostat 2021–22 sull’occupazione metropolitana: forte significa secondo o terzo del paese per posti in finanza e assicurazioni, o in informazione e comunicazione, con almeno 5.000 posti.',
  '§5 Netherlands: orientation year, highly skilled migrant thresholds':
    '§5 Paesi Bassi: anno di orientamento, soglie per migranti altamente qualificati',
  '§2 language and Nuffic stay rates; §3 Amsterdam trading firms':
    '§2 lingua e tassi di permanenza Nuffic; §3 le società di trading di Amsterdam',
  '§5 Amsterdam net pay with and without the 30% facility':
    '§5 stipendio netto ad Amsterdam con e senza l’agevolazione del 30%',
  'proprietary trading and market-making':
    'trading proprietario e market making',
  'Country brief: hubs, employers, pay and standing':
    'Dossier paese: poli, datori di lavoro, stipendi e posizionamento',
  'Trading firms, fintech and European headquarters':
    'Società di trading, fintech e sedi europee',
  'Proprietary trading':
    'Trading proprietario',
  'Fintech and payments':
    'Fintech e pagamenti',
  'trading firms with headquarters in Amsterdam':
    'società di trading con sede ad Amsterdam',
  'payments company founded in Amsterdam in 2006; says 4,000+ employees':
    'società di pagamenti fondata ad Amsterdam nel 2006; dichiara oltre 4.000 dipendenti',
  'over 44,000 students and 6,200 employees':
    'oltre 44.000 studenti e 6.200 dipendenti',
  'ecosystem value $83 billion; joint 23rd in the world':
    'valore dell’ecosistema 83 miliardi di dollari; 23º posto mondiale a pari merito',
  'Amsterdam’s start-up ecosystem':
    'L’ecosistema start-up di Amsterdam',
  'Europe’s logistics gateway, plus a business school and a technical university':
    'La porta logistica d’Europa, con una business school e un politecnico',
  'Port and logistics':
    'Porto e logistica',
  'Energy and chemicals':
    'Energia e chimica',
  '428.4 million tonnes in 2025':
    '428,4 milioni di tonnellate nel 2025',
  'about 182,000 jobs in the Rotterdam-Rijnmond area, directly and indirectly':
    'circa 182.000 posti di lavoro nell’area Rotterdam-Rijnmond, diretti e indiretti',
  'The port and its industry':
    'Il porto e la sua industria',
  '831,500 jobs (2023), 46,200 in manufacturing':
    '831.500 posti di lavoro (2023), 46.200 nella manifattura',
  'Groot-Rijnmond employers':
    'I datori di lavoro del Groot-Rijnmond',
  'Chip-making machines and high-tech engineering':
    'Macchine per produrre chip e ingegneria high-tech',
  'High-tech engineering':
    'Ingegneria high-tech',
  'headquarters in Veldhoven; a campus for 20,000 more staff planned':
    'sede a Veldhoven; previsto un campus per altri 20.000 dipendenti',
  'more than 44,000 employees (FTEs) worldwide in 2025; headquarters at De Run, Veldhoven':
    'oltre 44.000 dipendenti (FTE) nel mondo nel 2025; sede in De Run, Veldhoven',
  'Second in the Netherlands for both finance and information-and-communication jobs':
    'Seconda nei Paesi Bassi per posti sia in finanza sia in informazione e comunicazione',
  '55,000 jobs (2021)':
    '55.000 posti (2021)',
  'Information and communication employers':
    'I datori di lavoro dell’informazione e comunicazione',
  '34,000 jobs (2021)':
    '34.000 posti (2021)',
  'Finance and insurance employers':
    'I datori di lavoro di finanza e assicurazioni',
  'head office at Laan van Puntenburg, Utrecht':
    'sede centrale in Laan van Puntenburg, Utrecht',
  'over 38,000 students and 8,800 staff':
    'oltre 38.000 studenti e 8.800 dipendenti',
  'The seat of government and of international courts':
    'La sede del governo e delle corti internazionali',
  '27,000 jobs (2021)':
    '27.000 posti (2021)',
  '14,000 jobs (2021)':
    '14.000 posti (2021)',
  'some 200, including the International Court of Justice, Europol and the International Criminal Court':
    'circa 200, tra cui la Corte internazionale di giustizia, Europol e la Corte penale internazionale',
  'International organisations':
    'Organizzazioni internazionali',
  'permanent premises in The Hague':
    'sede permanente all’Aia',
  'Entry pay':
    'Stipendio d’ingresso',
  'Graduate labour market':
    'Mercato del lavoro dei laureati',
  '7.8% of Dutch job postings say Dutch is not required — the highest share of the large European markets — and about 5% are written in English.':
    'Il 7,8% degli annunci di lavoro olandesi dice che l’olandese non è richiesto — la quota più alta tra i grandi mercati europei — e circa il 5% è scritto in inglese.',
  '25% of international graduates still live in the Netherlands five years after graduating; EEA graduates stay at about half the non-EEA rate (20.3% against 38.5%).':
    'Il 25% dei laureati internazionali vive ancora nei Paesi Bassi cinque anni dopo la laurea; i laureati del SEE restano a circa la metà del tasso degli altri (20,3% contro 38,5%).',
  'The 30% facility can exempt part of a recruit’s pay from tax if they lived more than 150 km from the Dutch border for 16 of the last 24 months; under 30 with a master’s it needs €36,497 a year (2026).':
    'L’agevolazione del 30% può esentare dalle tasse una parte dello stipendio di chi ha vissuto a più di 150 km dal confine olandese per 16 degli ultimi 24 mesi; sotto i 30 anni con un master richiede 36.497 € all’anno (2026).',
  'Greater Amsterdam hosts about 40% of the international graduates who are working in the Netherlands five years after graduating.':
    'L’area di Amsterdam ospita circa il 40% dei laureati internazionali che lavorano nei Paesi Bassi cinque anni dopo la laurea.',
  'The proprietary trading and market-making firms Optiver, IMC and Flow Traders have their headquarters in Amsterdam.':
    'Le società di trading proprietario e market making Optiver, IMC e Flow Traders hanno sede ad Amsterdam.',
  'The Port of Rotterdam handled 428.4 million tonnes and 14.2 million TEU of containers in 2025 and describes itself as Europe’s logistics hub.':
    'Nel 2025 il porto di Rotterdam ha movimentato 428,4 milioni di tonnellate e 14,2 milioni di TEU di container, e si definisce il polo logistico d’Europa.',
  'ASML, headquartered in Veldhoven, plans a campus at Brainport Industries Campus for 20,000 more employees.':
    'ASML, con sede a Veldhoven, prevede un campus al Brainport Industries Campus per altri 20.000 dipendenti.',
  'Eurostat counts 850,000 people in work in the Utrecht metropolitan region in 2021: 55,000 in information and communication (second in the Netherlands, after Amsterdam) and 34,000 in finance and insurance (second in the Netherlands, after Amsterdam). The region’s GDP was €83.3 billion in 2021.':
    'Eurostat conta 850.000 occupati nella regione metropolitana di Utrecht nel 2021: 55.000 nell’informazione e comunicazione (seconda nei Paesi Bassi, dopo Amsterdam) e 34.000 in finanza e assicurazioni (seconda nei Paesi Bassi, dopo Amsterdam). Il PIL della regione era di 83,3 miliardi di € nel 2021.',
  'Eurostat counts 645,000 people in work in the The Hague metropolitan region in 2021: 27,000 in information and communication and 14,000 in finance and insurance. The region’s GDP was €56.0 billion in 2021.':
    'Eurostat conta 645.000 occupati nella regione metropolitana di L’Aia nel 2021: 27.000 nell’informazione e comunicazione e 14.000 in finanza e assicurazioni. Il PIL della regione era di 56,0 miliardi di € nel 2021.',
  'The Global Financial Centres Index 40 (September 2026) ranks Amsterdam 26th in the world (down 6 places) and eighth among Western European centres, behind London, Zurich, Geneva, Luxembourg, Lugano, Paris and Copenhagen.':
    'L’indice Global Financial Centres 40 (settembre 2026) colloca Amsterdam al 26º posto nel mondo (in calo di 6 posizioni) e all’ottavo tra i centri dell’Europa occidentale, dopo Londra, Zurigo, Ginevra, Lussemburgo, Lugano, Parigi e Copenaghen.',
  'Of the 152 metropolitan regions for which Eurostat publishes jobs by sector (latest year, 2021 or 2022; German, British and Swiss regions are not in the table), Amsterdam has the seventh-most jobs in information and communication (114,000) and in finance and insurance (67,000), and Utrecht the 19th (55,000) and 18th (34,000).':
    'Tra le 152 regioni metropolitane per cui Eurostat pubblica i posti di lavoro per settore (ultimo anno, 2021 o 2022; le regioni tedesche, britanniche e svizzere non sono nella tabella), Amsterdam ha il settimo maggior numero di posti in informazione e comunicazione (114.000) e in finanza e assicurazioni (67.000), e Utrecht il 19º (55.000) e il 18º (34.000).',
  'Greater Amsterdam (Groot-Amsterdam) has 1,144,700 jobs (2023): 91,300 in information and communication, 60,100 in finance and insurance and 297,600 in professional, scientific, technical and administrative services.':
    'La Grande Amsterdam (Groot-Amsterdam) conta 1.144.700 posti di lavoro (2023): 91.300 in informazione e comunicazione, 60.100 in finanza e assicurazioni e 297.600 in servizi professionali, scientifici, tecnici e amministrativi.',
  'Startup Genome’s 2026 report ranks Amsterdam-Delta joint 23rd in the world with Stockholm, with an ecosystem value of $83 billion, $2.5 billion of seed and Series A funding in H2 2023–2025 and $21 billion of exits in 2021–2025.':
    'Il rapporto 2026 di Startup Genome colloca Amsterdam-Delta al 23º posto mondiale a pari merito con Stoccolma, con un valore dell’ecosistema di 83 miliardi di dollari, 2,5 miliardi di finanziamenti seed e Serie A nel periodo H2 2023–2025 e 21 miliardi di exit nel 2021–2025.',
  'Adyen says it was founded in 2006 in Amsterdam and has 4,000+ employees of 115+ nationalities in 28 offices (page undated; its processed-volume figure is for 2023).':
    'Adyen dichiara di essere stata fondata nel 2006 ad Amsterdam e di avere oltre 4.000 dipendenti di oltre 115 nazionalità in 28 uffici (pagina senza data; il dato sul volume trattato è del 2023).',
  'The University of Amsterdam has over 44,000 students, 6,200 employees, 3,000 PhD researchers and an annual budget of €850 million.':
    'L’Università di Amsterdam ha oltre 44.000 studenti, 6.200 dipendenti, 3.000 dottorandi e un bilancio annuo di 850 milioni di euro.',
  'In 2024 Rotterdam handled 397.3 million tonnes of goods, the most of any port in the EU, followed by Antwerp-Bruges (244.2 million) and Hamburg (97.0 million).':
    'Nel 2024 Rotterdam ha movimentato 397,3 milioni di tonnellate di merci, più di qualsiasi altro porto dell’UE, seguito da Anversa-Bruges (244,2 milioni) e Amburgo (97,0 milioni).',
  'The Port of Rotterdam Authority puts the port’s employment at about 182,000 jobs, directly and indirectly, in the Rotterdam-Rijnmond area and its added value at €23.3 billion, 2.2% of Dutch GDP; the Authority itself has about 1,440 employees.':
    'L’Autorità portuale di Rotterdam stima l’occupazione del porto in circa 182.000 posti di lavoro, diretti e indiretti, nell’area Rotterdam-Rijnmond e il suo valore aggiunto in 23,3 miliardi di euro, il 2,2% del PIL olandese; l’Autorità stessa ha circa 1.440 dipendenti.',
  'Groot-Rijnmond (the Rotterdam region) has 831,500 jobs (2023): 46,200 in manufacturing, 249,000 in trade, transport, hospitality and information and communication, and 204,600 in finance, real estate and professional and business services.':
    'Il Groot-Rijnmond (la regione di Rotterdam) conta 831.500 posti di lavoro (2023): 46.200 nella manifattura, 249.000 in commercio, trasporti, ricettività e informazione e comunicazione, e 204.600 in finanza, immobiliare e servizi professionali e alle imprese.',
  'ASML’s 2025 annual report counts more than 44,000 total employees (FTEs) of 143 nationalities; its global headquarters is ASML Veldhoven, De Run 6501, and it operates in more than 60 locations worldwide.':
    'Il bilancio 2025 di ASML conta oltre 44.000 dipendenti totali (FTE) di 143 nazionalità; la sede mondiale è ASML Veldhoven, De Run 6501, e l’azienda opera in oltre 60 sedi nel mondo.',
  'The Eindhoven region (Zuidoost-Noord-Brabant) has 502,100 jobs (2023), 80,400 of them (16%) in manufacturing, 16,300 in information and communication and 106,400 in professional, scientific, technical and administrative services.':
    'La regione di Eindhoven (Zuidoost-Noord-Brabant) conta 502.100 posti di lavoro (2023), 80.400 dei quali (16%) nella manifattura, 16.300 in informazione e comunicazione e 106.400 in servizi professionali, scientifici, tecnici e amministrativi.',
  'The Utrecht region has 891,800 jobs (2023): 60,800 in information and communication, 37,000 in finance and insurance and 177,800 in professional, scientific, technical and administrative services.':
    'La regione di Utrecht conta 891.800 posti di lavoro (2023): 60.800 in informazione e comunicazione, 37.000 in finanza e assicurazioni e 177.800 in servizi professionali, scientifici, tecnici e amministrativi.',
  'NS, the Dutch railway company, gives its head-office address as Laan van Puntenburg 100, Utrecht.':
    'NS, la società ferroviaria olandese, indica come indirizzo della sede centrale Laan van Puntenburg 100, Utrecht.',
  'Utrecht University reports over 38,000 students, over 8,800 staff members, over 650 professors and an income of about €1.3 billion.':
    'L’Università di Utrecht dichiara oltre 38.000 studenti, oltre 8.800 dipendenti, oltre 650 professori e un reddito di circa 1,3 miliardi di euro.',
  'The Hague agglomeration has 514,200 jobs (2023): 191,400 of them (37%) in public administration, defence, education and health, 20,000 in information and communication and 12,300 in finance and insurance.':
    'L’agglomerato dell’Aia conta 514.200 posti di lavoro (2023): 191.400 dei quali (37%) in amministrazione pubblica, difesa, istruzione e sanità, 20.000 in informazione e comunicazione e 12.300 in finanza e assicurazioni.',
  'The Hague is home to some 200 international organisations, including the International Court of Justice in the Peace Palace, Europol and the International Criminal Court.':
    'L’Aia ospita circa 200 organizzazioni internazionali, tra cui la Corte internazionale di giustizia nel Palazzo della Pace, Europol e la Corte penale internazionale.',
  'The International Criminal Court’s permanent premises are at Oude Waalsdorperweg 10 in The Hague.':
    'La sede permanente della Corte penale internazionale è in Oude Waalsdorperweg 10 all’Aia.',
  'In 2022 employees under 30 in Dutch firms with 10 or more staff (public administration excluded) earned a mean of €34,109 gross a year, and those under 30 working as professionals €45,349, against €50,942 for all ages.':
    'Nel 2022 i dipendenti sotto i 30 anni delle imprese olandesi con almeno 10 addetti (esclusa la pubblica amministrazione) guadagnavano in media 34.109 € lordi all’anno, e quelli sotto i 30 anni che lavorano come professionisti 45.349 €, contro 50.942 € per tutte le età.',
  'In 2025 the employment rate of Dutch people aged 20 to 34 with a tertiary degree was 92.7% (91.8% for those who finished within the last five years); unemployment was 3.9% overall and 8.8% for the 15-to-24s, and GDP was €1,170.6 billion.':
    'Nel 2025 il tasso di occupazione degli olandesi di 20-34 anni con un titolo terziario era del 92,7% (il 91,8% per chi ha finito da non oltre cinque anni); la disoccupazione era del 3,9% in complesso e dell’8,8% tra i 15-24enni, e il PIL di 1.170,6 miliardi di euro.',
  'Eurostat counts 998,000 people in work in the Rotterdam metropolitan region in 2021: 72,000 in manufacturing, 29,000 in information and communication and 19,000 in finance and insurance, third in the Netherlands for both of the last two.':
    'Eurostat conta 998.000 occupati nella regione metropolitana di Rotterdam nel 2021: 72.000 nella manifattura, 29.000 in informazione e comunicazione e 19.000 in finanza e assicurazioni, terza nei Paesi Bassi per entrambe le ultime due.',
  'Brainport Eindhoven describes itself as a high-tech region with Eindhoven at its centre, where companies, knowledge institutes and governments develop technology together; it lists Eindhoven University of Technology, Fontys, Avans and Tilburg University as its universities.':
    'Brainport Eindhoven si descrive come una regione high-tech con Eindhoven al centro, dove aziende, istituti di ricerca e governi sviluppano insieme la tecnologia; indica come università della regione il Politecnico di Eindhoven, Fontys, Avans e l’Università di Tilburg.'
});
