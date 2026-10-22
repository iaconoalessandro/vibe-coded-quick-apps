/* Atlas record: Switzerland. Read 2 and 3 October 2026; log P42
 * (research/verification/round-4c.md, round-4k.md, round-5a.md). Quotas and pay are the library's
 * (places/visas-and-work-rights.md §2, money/salaries-and-roi.md, verified 30 Sep – 2 Oct).
 * Hubs for further cities were added on 3 October 2026 from city-level statistics
 * (log: research/verification/round-4k.md).
 * Round 5a (3 October 2026) added standing, metrics (Eurostat metropolitan regions for population and
 * output, the Federal Statistical Office's 2024 earnings survey for pay, Numbeo for rent), more claims
 * per hub, and two hubs, Zug and Lugano; the country brief is research/countries/ch-switzerland.md. */

ATLAS.add({
  id: 'CH',
  checked: '2026-10-03',
  log: 'P42',
  summary: 'The highest graduate pay in Europe, in a small number of places: Zurich for banking, insurance and Google’s largest engineering site outside the US; Basel for pharma and Switzerland’s trade logistics; Geneva and Lausanne for commodity trading, EPFL and IMD. Free movement makes it easy for EU citizens; for everyone else, national quotas and an economic-interest test make it hard.',
  sectors: ['Banking and wealth management', 'Insurance and reinsurance', 'Pharmaceuticals', 'Commodity trading', 'Technology'],
  roles: ['finance', 'logistics'],
  hubs: [
    {
      id: 'zurich', name: 'Zurich', lat: 47.37, lon: 8.54,
      knownFor: 'Banking, insurance and big-tech engineering',
      why: ['ch-zh-fin', 'ch-gfci', 'ch-zh-gser', 'ch-bfs-reg', 'ch-metro'],
      sectors: ['Banking', 'Insurance and reinsurance', 'Technology'],
      employers: [
        { t: 'Zurich’s financial sector', note: '103,400 jobs, one worker in ten', c: 'ch-zh-fin' },
        { name: 'Google', note: 'largest development centre outside the US', c: 'ch-google' },
        { t: 'Zurich’s start-up ecosystem', note: 'ecosystem value $44 billion', c: 'ch-zh-gser' }
      ],
      demand: {
        finance: ['dominant', 'ch-zh-fin'],
        software: ['present', 'ch-google'],
        business: 'gap', economics: 'gap', accounting: 'gap', management: 'gap', marketing: 'gap', logistics: 'gap', analytics: 'gap', it: 'gap', datasci: 'gap', ai: 'gap', cs: 'gap', bigdata: 'gap'
      },
      finance: {
        banking: ['strong', 'ch-zh-fin'],
        ib: 'gap', am: 'gap', pe: 'gap', vc: 'gap', corpfin: 'gap', risk: 'gap', finconsult: 'gap'
      },
      standing: [
        { f: 'finance', s: [5, 4, 3], c: ['ch-zh-fin', 'ch-gfci'] },
        { f: 'software', s: [5, 3, 2], c: ['ch-google', 'ch-zh-gser'] }
      ],
      metrics: {
        pop: {
          v: 1579967,
          year: 2023,
          area: 'metro',
          tag: 'data',
          src: 'https://ec.europa.eu/eurostat/databrowser/view/met_pjanaggr3/default/table',
          by: 'Eurostat, population on 1 January by metropolitan region (met_pjanaggr3), Zürich',
          seen: '2026-10-03'
        },
        gdp: {
          v: 140.8,
          cur: 'EUR',
          year: 2021,
          area: 'metro',
          tag: 'data',
          src: 'https://ec.europa.eu/eurostat/databrowser/view/met_10r_3gdp/default/table',
          by: 'Eurostat, GDP at current market prices by metropolitan region (met_10r_3gdp), Zürich, million euro ÷ 1,000',
          seen: '2026-10-03'
        },
        wage: {
          tag: 'data',
          seen: '2026-10-03',
          v: 7502,
          cur: 'CHF',
          basis: 'median',
          year: 2024,
          area: 'region',
          src: 'https://www.bfs.admin.ch/bfs/de/home/statistiken/arbeit-erwerb/loehne-erwerbseinkommen-arbeitskosten.assetdetail.36195847.html',
          by: 'Federal Statistical Office, Swiss Earnings Structure Survey 2024 (first results, 25 Nov 2025): median gross monthly wage of a full-time post, Zürich region (canton of Zürich)'
        },
        rent: {
          v: 2467,
          cur: 'CHF',
          year: 2026,
          area: 'city',
          tag: 'anecdotal',
          src: 'https://web.archive.org/web/20261002141259/https://www.numbeo.com/cost-of-living/in/Zurich',
          by: 'Numbeo (crowd-sourced; 1153 entries by 164 contributors in the past 12 months), one-bedroom flat in the city centre, average, Zurich (page read as archived by the Internet Archive, Numbeo update of 2 October 2026)',
          seen: '2026-10-03'
        }
      },
      programmes: [
        { calc: 'computing', track: 'cs', id: 'eth-cs', name: 'ETH Zürich — MSc Computer Science' }
      ]
    },
    {
      id: 'basel', name: 'Basel', lat: 47.56, lon: 7.59,
      knownFor: 'Pharma headquarters and Switzerland’s export logistics',
      why: ['ch-bs', 'ch-roche', 'ch-metro', 'ch-bfs-reg2'],
      sectors: ['Pharmaceuticals and life sciences', 'Logistics', 'Banking and insurance'],
      employers: [
        { name: 'Roche, Novartis', note: 'global headquarters', c: 'ch-bs' },
        { name: 'Bank for International Settlements', note: 'central bankers’ bank', c: 'ch-bs' },
        { name: 'Roche', note: 'founded in Basel in 1896', c: 'ch-roche' }
      ],
      demand: {
        finance: ['present', 'ch-bs'],
        logistics: ['strong', 'ch-bs'],
        business: 'gap', economics: 'gap', accounting: 'gap', management: 'gap', marketing: 'gap', analytics: 'gap', it: 'gap', software: 'gap', datasci: 'gap', ai: 'gap', cs: 'gap', bigdata: 'gap'
      },
      standing: [
        { f: 'logistics', s: [4, 2, 1], c: ['ch-bs'] }
      ],
      metrics: {
        pop: {
          v: 724230,
          year: 2023,
          area: 'metro',
          tag: 'data',
          src: 'https://ec.europa.eu/eurostat/databrowser/view/met_pjanaggr3/default/table',
          by: 'Eurostat, population on 1 January by metropolitan region (met_pjanaggr3), Basel',
          seen: '2026-10-03'
        },
        gdp: {
          v: 64.9,
          cur: 'EUR',
          year: 2021,
          area: 'metro',
          tag: 'data',
          src: 'https://ec.europa.eu/eurostat/databrowser/view/met_10r_3gdp/default/table',
          by: 'Eurostat, GDP at current market prices by metropolitan region (met_10r_3gdp), Basel, million euro ÷ 1,000',
          seen: '2026-10-03'
        },
        wage: {
          tag: 'data',
          seen: '2026-10-03',
          v: 7156,
          cur: 'CHF',
          basis: 'median',
          year: 2024,
          area: 'region',
          src: 'https://www.bilanz.ch/unternehmen/der-neue-medianlohn-betraegt-7024-franken/pe1rht0',
          by: 'Federal Statistical Office, Swiss Earnings Structure Survey 2024, as reported by Bilanz (25 Nov 2025; the Office’s own release names only Zürich and Ticino): median gross monthly wage of a full-time post, north-western Switzerland (Basel-Stadt, Basel-Landschaft, Aargau)'
        },
        rent: {
          v: 1643,
          cur: 'CHF',
          year: 2026,
          area: 'city',
          tag: 'anecdotal',
          src: 'https://web.archive.org/web/20261002141259/https://www.numbeo.com/cost-of-living/in/Basel',
          by: 'Numbeo (crowd-sourced; 697 entries by 78 contributors in the past 12 months), one-bedroom flat in the city centre, average, Basel (page read as archived by the Internet Archive, Numbeo update of 2 October 2026)',
          seen: '2026-10-03'
        }
      },
      programmes: []
    },
    {
      id: 'lake-geneva', name: 'Geneva and Lausanne', lat: 46.20, lon: 6.15,
      knownFor: 'Commodity trading, international organisations and EPFL',
      why: ['ch-trading', 'ch-gfci', 'ch-lau-gser', 'ch-metro', 'ch-bfs-reg2'],
      sectors: ['Commodity trading and trade finance', 'International organisations', 'Private banking', 'Higher education'],
      employers: [
        { t: 'Commodity traders around Lake Geneva', note: '215+ member companies of the trade body', c: 'ch-trading' },
        { t: 'Greater Lausanne’s start-up ecosystem', note: 'ecosystem value $18.7 billion', c: 'ch-lau-gser' }
      ],
      demand: {
        finance: ['present', 'ch-trading'],
        business: 'gap', economics: 'gap', accounting: 'gap', management: 'gap', marketing: 'gap', logistics: 'gap', analytics: 'gap', it: 'gap', software: 'gap', datasci: 'gap', ai: 'gap', cs: 'gap', bigdata: 'gap'
      },
      standing: [
        { f: 'finance', s: [4, 4, 3], c: ['ch-gfci', 'ch-trading'] }
      ],
      metrics: {
        pop: {
          v: 1344545,
          year: 2023,
          area: 'metro',
          tag: 'data',
          src: 'https://ec.europa.eu/eurostat/databrowser/view/met_pjanaggr3/default/table',
          by: 'Eurostat, population on 1 January by metropolitan region (met_pjanaggr3), Genève + Lausanne',
          seen: '2026-10-03'
        },
        gdp: {
          v: 110.5,
          cur: 'EUR',
          year: 2021,
          area: 'metro',
          tag: 'data',
          src: 'https://ec.europa.eu/eurostat/databrowser/view/met_10r_3gdp/default/table',
          by: 'Eurostat, GDP at current market prices by metropolitan region (met_10r_3gdp), Genève + Lausanne, million euro ÷ 1,000',
          seen: '2026-10-03'
        },
        wage: {
          tag: 'data',
          seen: '2026-10-03',
          v: 6998,
          cur: 'CHF',
          basis: 'median',
          year: 2024,
          area: 'region',
          src: 'https://www.bilanz.ch/unternehmen/der-neue-medianlohn-betraegt-7024-franken/pe1rht0',
          by: 'Federal Statistical Office, Swiss Earnings Structure Survey 2024, as reported by Bilanz (25 Nov 2025; the Office’s own release names only Zürich and Ticino): median gross monthly wage of a full-time post, the Lake Geneva region (Vaud, Valais, Geneva)'
        }
      },
      programmes: [
        { calc: 'computing', track: 'cs', id: 'epfl-cs', name: 'EPFL — MSc Computer Science' },
        { calc: 'mba', name: 'IMD (MBA)' }
      ]
    },
    {
      id: 'bern', name: 'Bern', lat: 46.95, lon: 7.45,
      knownFor: 'The federal capital',
      why: ['ch-bern', 'ch-metro', 'ch-bfs-reg2'],
      sectors: ['Government', 'Insurance', 'Technology'],
      employers: [
        { t: 'Businesses in the metropolitan region', note: 'GDP of €78.6 billion (2021)', c: 'ch-bern' }
      ],
      demand: {
        business: 'gap', finance: 'gap', economics: 'gap', accounting: 'gap', management: 'gap', marketing: 'gap', logistics: 'gap', analytics: 'gap', it: 'gap', software: 'gap', datasci: 'gap', ai: 'gap', cs: 'gap', bigdata: 'gap'
      },
      standing: [
        { f: 'business', s: [3, 2, 1], c: ['ch-metro', 'ch-bern'] }
      ],
      metrics: {
        pop: {
          v: 1051437,
          year: 2023,
          area: 'metro',
          tag: 'data',
          src: 'https://ec.europa.eu/eurostat/databrowser/view/met_pjanaggr3/default/table',
          by: 'Eurostat, population on 1 January by metropolitan region (met_pjanaggr3), Bern',
          seen: '2026-10-03'
        },
        gdp: {
          v: 78.6,
          cur: 'EUR',
          year: 2021,
          area: 'metro',
          tag: 'data',
          src: 'https://ec.europa.eu/eurostat/databrowser/view/met_10r_3gdp/default/table',
          by: 'Eurostat, GDP at current market prices by metropolitan region (met_10r_3gdp), Bern, million euro ÷ 1,000',
          seen: '2026-10-03'
        },
        wage: {
          tag: 'data',
          seen: '2026-10-03',
          v: 6964,
          cur: 'CHF',
          basis: 'median',
          year: 2024,
          area: 'region',
          src: 'https://www.bilanz.ch/unternehmen/der-neue-medianlohn-betraegt-7024-franken/pe1rht0',
          by: 'Federal Statistical Office, Swiss Earnings Structure Survey 2024, as reported by Bilanz (25 Nov 2025; the Office’s own release names only Zürich and Ticino): median gross monthly wage of a full-time post, Espace Mittelland (Bern, Fribourg, Solothurn, Neuchâtel, Jura)'
        },
        rent: {
          v: 1551,
          cur: 'CHF',
          year: 2026,
          area: 'city',
          tag: 'anecdotal',
          src: 'https://web.archive.org/web/20261002141300/https://www.numbeo.com/cost-of-living/in/Bern',
          by: 'Numbeo (crowd-sourced; 647 entries by 53 contributors in the past 12 months), one-bedroom flat in the city centre, average, Bern (page read as archived by the Internet Archive, Numbeo update of 2 October 2026)',
          seen: '2026-10-03'
        }
      },
      programmes: []
    },
    {
      id: 'st-gallen', name: 'St. Gallen', lat: 47.42, lon: 9.37,
      knownFor: 'Eastern Switzerland’s centre and home of the University of St. Gallen',
      why: ['ch-st-gallen', 'ch-metro', 'ch-bfs-reg2'],
      sectors: ['Banking', 'Manufacturing', 'Higher education'],
      employers: [
        { t: 'Businesses in the metropolitan region', note: 'GDP of €42.2 billion (2021)', c: 'ch-st-gallen' }
      ],
      demand: {
        business: 'gap', finance: 'gap', economics: 'gap', accounting: 'gap', management: 'gap', marketing: 'gap', logistics: 'gap', analytics: 'gap', it: 'gap', software: 'gap', datasci: 'gap', ai: 'gap', cs: 'gap', bigdata: 'gap'
      },
      standing: [
        { f: 'business', s: [2, 1, 1], c: ['ch-metro', 'ch-st-gallen'] }
      ],
      metrics: {
        pop: {
          v: 581726,
          year: 2023,
          area: 'metro',
          tag: 'data',
          src: 'https://ec.europa.eu/eurostat/databrowser/view/met_pjanaggr3/default/table',
          by: 'Eurostat, population on 1 January by metropolitan region (met_pjanaggr3), St. Gallen',
          seen: '2026-10-03'
        },
        gdp: {
          v: 42.2,
          cur: 'EUR',
          year: 2021,
          area: 'metro',
          tag: 'data',
          src: 'https://ec.europa.eu/eurostat/databrowser/view/met_10r_3gdp/default/table',
          by: 'Eurostat, GDP at current market prices by metropolitan region (met_10r_3gdp), St. Gallen, million euro ÷ 1,000',
          seen: '2026-10-03'
        },
        wage: {
          tag: 'data',
          seen: '2026-10-03',
          v: 6623,
          cur: 'CHF',
          basis: 'median',
          year: 2024,
          area: 'region',
          src: 'https://www.bilanz.ch/unternehmen/der-neue-medianlohn-betraegt-7024-franken/pe1rht0',
          by: 'Federal Statistical Office, Swiss Earnings Structure Survey 2024, as reported by Bilanz (25 Nov 2025; the Office’s own release names only Zürich and Ticino): median gross monthly wage of a full-time post, eastern Switzerland (Glarus, Schaffhausen, the Appenzells, St. Gallen, Graubünden, Thurgau)'
        },
        rent: {
          v: 1463,
          cur: 'CHF',
          year: 2026,
          area: 'city',
          tag: 'anecdotal',
          src: 'https://web.archive.org/web/20260926090623/https://www.numbeo.com/cost-of-living/in/St-Gallen',
          by: 'Numbeo (crowd-sourced; 224 entries by 19 contributors in the past 12 months), one-bedroom flat in the city centre, average, St Gallen (page read as archived by the Internet Archive, Numbeo update of 12 September 2026)',
          seen: '2026-10-03'
        }
      },
      programmes: []
    },
    {
      id: 'lucerne', name: 'Lucerne', lat: 47.05, lon: 8.31,
      knownFor: 'Central Switzerland’s largest city, near Zug',
      why: ['ch-lucerne', 'ch-metro', 'ch-bfs-reg2'],
      sectors: ['Tourism', 'Banking', 'Manufacturing'],
      employers: [
        { t: 'Businesses in the metropolitan region', note: 'GDP of €30.7 billion (2021)', c: 'ch-lucerne' }
      ],
      demand: {
        business: 'gap', finance: 'gap', economics: 'gap', accounting: 'gap', management: 'gap', marketing: 'gap', logistics: 'gap', analytics: 'gap', it: 'gap', software: 'gap', datasci: 'gap', ai: 'gap', cs: 'gap', bigdata: 'gap'
      },
      standing: [
        { f: 'business', s: [2, 1, 1], c: ['ch-metro', 'ch-lucerne'] }
      ],
      metrics: {
        pop: {
          v: 469271,
          year: 2023,
          area: 'metro',
          tag: 'data',
          src: 'https://ec.europa.eu/eurostat/databrowser/view/met_pjanaggr3/default/table',
          by: 'Eurostat, population on 1 January by metropolitan region (met_pjanaggr3), Lucerne',
          seen: '2026-10-03'
        },
        gdp: {
          v: 30.7,
          cur: 'EUR',
          year: 2021,
          area: 'metro',
          tag: 'data',
          src: 'https://ec.europa.eu/eurostat/databrowser/view/met_10r_3gdp/default/table',
          by: 'Eurostat, GDP at current market prices by metropolitan region (met_10r_3gdp), Lucerne, million euro ÷ 1,000',
          seen: '2026-10-03'
        },
        wage: {
          tag: 'data',
          seen: '2026-10-03',
          v: 7092,
          cur: 'CHF',
          basis: 'median',
          year: 2024,
          area: 'region',
          src: 'https://www.bilanz.ch/unternehmen/der-neue-medianlohn-betraegt-7024-franken/pe1rht0',
          by: 'Federal Statistical Office, Swiss Earnings Structure Survey 2024, as reported by Bilanz (25 Nov 2025; the Office’s own release names only Zürich and Ticino): median gross monthly wage of a full-time post, central Switzerland (Lucerne, Uri, Schwyz, Obwalden, Nidwalden, Zug)'
        },
        rent: {
          v: 1748,
          cur: 'CHF',
          year: 2026,
          area: 'city',
          tag: 'anecdotal',
          src: 'https://web.archive.org/web/20261002141249/https://www.numbeo.com/cost-of-living/in/Lucerne',
          by: 'Numbeo (crowd-sourced; 278 entries by 20 contributors in the past 12 months), one-bedroom flat in the city centre, average, Lucerne (page read as archived by the Internet Archive, Numbeo update of 2 October 2026)',
          seen: '2026-10-03'
        }
      },
      programmes: []
    },
    {
      id: 'zug', name: 'Zug', lat: 47.17, lon: 8.52,
      knownFor: 'Commodity trading, head offices and a very high output per head',
      why: ['ch-zug-emp', 'ch-zug-top', 'ch-zug-gdp', 'ch-trading'],
      sectors: ['Commodity trading and wholesale', 'Finance and head offices', 'Medical technology and biotechnology'],
      employers: [
        { name: 'Roche Diagnostics International', note: '2,833 employees in the canton (2024)', c: 'ch-zug-top' },
        { name: 'Glencore', note: '1,175 employees in the canton (2024)', c: 'ch-zug-top' },
        { name: 'Partners Group', note: '569 employees in the canton (2024)', c: 'ch-zug-top' },
        { name: 'Zuger Kantonalbank', note: '560 employees in the canton (2024)', c: 'ch-zug-top' }
      ],
      demand: {
        finance: ['present', 'ch-zug-top', 'ch-zug-emp'],
        business: 'gap', economics: 'gap', accounting: 'gap', management: 'gap', marketing: 'gap', logistics: 'gap', analytics: 'gap', it: 'gap', software: 'gap', datasci: 'gap', ai: 'gap', cs: 'gap', bigdata: 'gap'
      },
      standing: [
        { f: 'finance', s: [3, 2, 1], c: ['ch-zug-top', 'ch-zug-emp'] }
      ],
      metrics: {
        wage: {
          tag: 'data',
          seen: '2026-10-03',
          v: 7092,
          cur: 'CHF',
          basis: 'median',
          year: 2024,
          area: 'region',
          src: 'https://www.bilanz.ch/unternehmen/der-neue-medianlohn-betraegt-7024-franken/pe1rht0',
          by: 'Federal Statistical Office, Swiss Earnings Structure Survey 2024, as reported by Bilanz (25 Nov 2025; the Office’s own release names only Zürich and Ticino): median gross monthly wage of a full-time post, central Switzerland (Lucerne, Uri, Schwyz, Obwalden, Nidwalden, Zug)'
        },
        rent: {
          v: 3180,
          cur: 'CHF',
          year: 2026,
          area: 'city',
          tag: 'anecdotal',
          src: 'https://web.archive.org/web/20261002141256/https://www.numbeo.com/cost-of-living/in/Zug',
          by: 'Numbeo (crowd-sourced; 305 entries by 22 contributors in the past 12 months), one-bedroom flat in the city centre, average, Zug (page read as archived by the Internet Archive, Numbeo update of 2 October 2026)',
          seen: '2026-10-03'
        },
        pop: {
          v: 133723,
          year: 2024,
          area: 'region',
          tag: 'data',
          src: 'https://zg.ch/de/news/2025/April/das-zuger-bevoelkerungswachstum-hat-sich-verlangsamt',
          by: 'Canton of Zug, press release of 3 Apr 2025 (provisional Federal Statistical Office figures): permanent resident population of the canton at the end of 2024; a canton, not a metropolitan region',
          seen: '2026-10-03'
        }
      },
      programmes: []
    },
    {
      id: 'lugano', name: 'Lugano', lat: 46.00, lon: 8.95,
      knownFor: 'A fifth-ranked Western European financial centre in the Italian-speaking south',
      why: ['ch-gfci', 'ch-lug-reg', 'ch-trading', 'ch-bfs-reg'],
      sectors: ['Banking and finance', 'Commodity trading', 'Wholesale and retail trade'],
      employers: [
        { t: 'Registered finance businesses', note: '3,459 of 17,579 registered businesses (2024)', c: 'ch-lug-reg' }
      ],
      demand: {
        finance: ['strong', 'ch-lug-reg', 'ch-gfci'],
        business: 'gap', economics: 'gap', accounting: 'gap', management: 'gap', marketing: 'gap', logistics: 'gap', analytics: 'gap', it: 'gap', software: 'gap', datasci: 'gap', ai: 'gap', cs: 'gap', bigdata: 'gap'
      },
      standing: [
        { f: 'finance', s: [4, 4, 2], c: ['ch-gfci', 'ch-lug-reg'] }
      ],
      metrics: {
        wage: {
          tag: 'data',
          seen: '2026-10-03',
          v: 5708,
          cur: 'CHF',
          basis: 'median',
          year: 2024,
          area: 'region',
          src: 'https://www.bfs.admin.ch/bfs/de/home/statistiken/arbeit-erwerb/loehne-erwerbseinkommen-arbeitskosten.assetdetail.36195847.html',
          by: 'Federal Statistical Office, Swiss Earnings Structure Survey 2024 (first results, 25 Nov 2025): median gross monthly wage of a full-time post, Ticino'
        },
        rent: {
          v: 1409,
          cur: 'CHF',
          year: 2026,
          area: 'city',
          tag: 'anecdotal',
          src: 'https://web.archive.org/web/20261002141259/https://www.numbeo.com/cost-of-living/in/Lugano',
          by: 'Numbeo (crowd-sourced; 366 entries by 32 contributors in the past 12 months), one-bedroom flat in the city centre, average, Lugano (page read as archived by the Internet Archive, Numbeo update of 2 October 2026)',
          seen: '2026-10-03'
        },
        pop: {
          v: 68507,
          year: 2024,
          area: 'city',
          tag: 'data',
          src: 'https://lugano.ch/dam/jcr:ecdeeae1-c265-4126-a549-4027b26bd1b4/20250116-cs-statistiche-lugano-2024-presentazione.pdf',
          by: 'City of Lugano, Statistics Office, statistics at 31 December 2024: total population (64,430 permanent residents, 2,774 in secondary residences, 1,303 short-stay and cross-border residents); the city, not a metropolitan region',
          seen: '2026-10-03'
        }
      },
      programmes: []
    }
  ],

  work: [
    { k: 'Pay', c: ['ch-bfs'] },
    { k: 'Language', c: ['ch-lang'] },
    { k: 'Recruiting calendar', c: ['ch-cal-intern', 'ch-cal-roche'] },
    { k: 'Tax and net pay', c: ['ch-net', 'ch-premium'] },
    { k: 'Where demand is now', c: ['ch-demand'] },
    { k: 'Entry pay', c: ['ch-pay', 'ch-bfs-uni'] },
    { k: 'Graduate labour market', c: ['ch-grads', 'ch-fso-claim'] }
  ],

  briefs: [
    ['places/visas-and-work-rights.md', '§2 Switzerland: job search, quotas, the economic-interest test'],
    ['money/salaries-and-roi.md', 'H1 Swiss versus London pay; §5 Zurich net pay, Quellensteuer and health premiums'],
    ['places/student-logistics.md', 'Swiss quotas and work limits'],
    ['careers/commodities-and-energy.md', 'Geneva, Zug and Lugano commodity trading'],
    ['countries/ch-switzerland.md', 'Country brief: hubs, employers, pay and standing']
  ],
  gaps: [
    'The St. Gallen programmes are not linked from a hub.',
    'Software and AI demand in Zurich rests on one employer statement; no statistic by family was read.',
    'The 2027 quotas are decided each November; the 2026 figures are shown.',
    'No family is rated in Bern, St. Gallen or Lucerne: Eurostat’s metropolitan table gives no split by sector for them.',
    'Swiss regions are not in Eurostat’s jobs-by-sector tables and no Swiss source with jobs by sector for the cities was read, so Zurich’s and Basel’s sector sizes rest on the cantons’ own statements and Zug’s on its cantonal statistics; Zug and Lugano show a canton and a city for population, not a metropolitan region, and have no GDP figure.',
    'Pay by region is the Federal Statistical Office’s 2024 median for a large region, not a city; the Office’s release names only Zürich and Ticino, the other regions come from a Bilanz report of the same survey. Headcounts for UBS, Zurich Insurance, Swiss Re, ETH Zurich and the Swiss universities were not read, and the language of work was not researched.'
  ],

  claims: {
    'ch-lang': {
      t: 'In nine years of Swiss job ads to early 2023, 87% mentioned German, 32% English, 23% French and 4% Italian, and more than a third named two or more languages.',
      tag: 'data',
      src: 'https://www.adeccogroup.com/-/media/project/adeccogroup/press-releases/medienmitteilung_job-index-q1-2023.pdf',
      by: 'Adecco Group Switzerland, Job Index Q1 2023, with the University of Zurich job-market monitor (an ad counts as naming German if it is written in German or asks for it)',
      seen: '2026-10-08'
    },
    'ch-cal-intern': {
      t: 'Swiss banks recruit six-month interns continuously, with starts in January, April, July and October and applications 3 to 5 months before the start.',
      tag: 'practitioner consensus',
      src: 'research/getting-in/recruiting-calendar.md',
      by: 'Admetia research library, getting-in/recruiting-calendar.md §3.4 and §3.5',
      seen: '2026-10-02'
    },
    'ch-cal-roche': {
      t: 'Roche’s 2-year Operations Rotational Development Program in Basel gave 1 March 2026 as the start of its next application period.',
      tag: 'employer-stated',
      src: 'https://careers.roche.com/global/en/operations-rotational-development-program',
      by: 'Roche careers, Operations Rotational Development Program',
      seen: '2026-10-08'
    },
    'ch-demand': {
      t: 'In the year to the second quarter of 2026 Swiss job postings for graduate IT profiles rose 6%, while commercial profiles fell 13%, economic profiles 10% and graduate science profiles 18%; total postings were 2.4% below the previous quarter.',
      tag: 'data',
      src: 'https://www.adeccogroup.com/en-ch/future-of-work/job-index/job-index-q2-2026',
      by: 'Adecco Job Index Switzerland, Q2 2026',
      seen: '2026-10-08'
    },
    'ch-fso-claim': {
      t: 'A year after graduating, unemployment was 6.4% for university master’s graduates in the 2025 federal survey, up from 3.9% in 2023, and 4.9% for bachelor’s graduates of universities of applied sciences, up from 3.4%.',
      tag: 'data',
      src: 'https://lenews.ch/2026/08/27/graduate-unemployment-rises-dramatically-in-switzerland/',
      by: 'Federal Statistical Office graduate survey (published 27 August 2026), reported by Le News',
      seen: '2026-10-08'
    },
    'ch-bfs': {
      t: 'Swiss university economics master’s graduates earn a median of CHF 87,100 one year after graduating.',
      tag: 'data',
      src: 'research/money/salaries-and-roi.md',
      by: 'Federal Statistical Office (2024), via money/salaries-and-roi.md',
      seen: '2026-10-02'
    },
    'ch-net': {
      t: 'At €60,000 gross a single employee in Zurich keeps about 84% after tax and contributions, the highest share among the library’s compared European cities.',
      tag: 'practitioner consensus',
      src: 'research/money/salaries-and-roi.md',
      by: 'Admetia research library, money/salaries-and-roi.md §5 (author calculation)',
      seen: '2026-10-02'
    },
    'ch-premium': {
      t: 'Health insurance is paid separately: a basic premium in Zurich city is about CHF 459 a month for 19-to-25-year-olds and CHF 640 for adults.',
      tag: 'data',
      src: 'research/verification/round-3c.md',
      by: 'Federal premium data, via verification round 3c (P9)',
      seen: '2026-10-02'
    },
    'ch-zh-fin': {
      t: 'In 2023 one worker in ten in the Zurich region — more than 103,400 people — worked in finance, generating CHF 32.8 billion; Zurich is by far Switzerland’s largest financial centre, with banks 43% and insurers 37% of the sector’s value added.',
      tag: 'data',
      src: 'https://www.zh.ch/de/wirtschaft-arbeit/wirtschaftsstandort/finanzdienstleistungen.html',
      by: 'Canton of Zurich, Finanzdienstleistungen',
      seen: '2026-10-02'
    },
    'ch-google': {
      t: 'Switzerland is home to Google’s largest development centre outside the US, in Zurich.',
      tag: 'practitioner consensus',
      src: 'https://www.greaterzuricharea.com/en/news/google-expands-presence-zurich-new-site',
      by: 'Greater Zurich Area (investment agency)',
      seen: '2026-10-02'
    },
    'ch-bs': {
      t: 'Basel hosts the headquarters of Roche and Novartis in a life-sciences cluster of over 800 companies, the Bank for International Settlements, and about 30% of Swiss exports pass through it by river, air and rail.',
      tag: 'data',
      src: 'https://www.bs.ch/en/schwerpunkte/portrait/economie-et-travail/important-industries-and-companies',
      by: 'Canton of Basel-Stadt, important industries and companies',
      seen: '2026-10-02'
    },
    'ch-trading': {
      t: 'The commodity trade body counts 215+ member companies, mainly around Lake Geneva, in Zug and in Ticino; the sector is about 2.3% of Swiss GDP.',
      tag: 'employer-stated',
      src: 'research/places/countries-and-cities.md',
      by: 'SuisseNégoce, via places/countries-and-cities.md §3',
      seen: '2026-09-30'
    },
    'ch-bern': {
      t: 'Eurostat puts the GDP of the Bern metropolitan region at €78.6 billion in 2021.',
      tag: 'data',
      src: 'https://ec.europa.eu/eurostat/databrowser/view/met_10r_3emp/default/table?lang=en',
      by: 'Eurostat, metropolitan regions: employment by activity (met_10r_3emp) and GDP (met_10r_3gdp)',
      seen: '2026-10-03'
    },
    'ch-st-gallen': {
      t: 'Eurostat puts the GDP of the St. Gallen metropolitan region at €42.2 billion in 2021.',
      tag: 'data',
      src: 'https://ec.europa.eu/eurostat/databrowser/view/met_10r_3emp/default/table?lang=en',
      by: 'Eurostat, metropolitan regions: employment by activity (met_10r_3emp) and GDP (met_10r_3gdp)',
      seen: '2026-10-03'
    },
    'ch-lucerne': {
      t: 'Eurostat puts the GDP of the Lucerne metropolitan region at €30.7 billion in 2021.',
      tag: 'data',
      src: 'https://ec.europa.eu/eurostat/databrowser/view/met_10r_3emp/default/table?lang=en',
      by: 'Eurostat, metropolitan regions: employment by activity (met_10r_3emp) and GDP (met_10r_3gdp)',
      seen: '2026-10-03'
    },
    'ch-gfci': {
      t: 'The Global Financial Centres Index 40 (September 2026) ranks Zurich 10th in the world (up 1 place) and second in Western Europe after London, Geneva 12th (up 6) and third, and Lugano 21st (up 4) and fifth; in the sector tables Zurich is 6th for banking and for investment management and 4th for professional services, Lugano 8th for banking and Geneva 11th.',
      tag: 'practitioner consensus',
      src: 'https://www.longfinance.net/media/documents/GFCI_40_Report_2026.09.16_v1.2.pdf',
      by: 'Z/Yen and the China Development Institute, GFCI 40, 16 Sep 2026, Tables 1, 5 and 8',
      seen: '2026-10-03'
    },
    'ch-zh-gser': {
      t: 'Startup Genome’s 2026 report puts the value of Zurich’s start-up ecosystem at $44 billion (Europe’s average $14.3 billion), with $2.4 billion of seed and Series A funding in H2 2023–2025 and $7 billion of exits in 2021–2025.',
      tag: 'practitioner consensus',
      src: 'https://startupgenome.com/ecosystems/zurich',
      by: 'Startup Genome, Global Startup Ecosystem Report 2026, Zurich page',
      seen: '2026-10-03'
    },
    'ch-lau-gser': {
      t: 'Startup Genome’s 2026 report puts the value of the Greater Lausanne start-up ecosystem at $18.7 billion (Europe’s average $14.3 billion) and says its institutions, including EPFL, the University of Lausanne and IMD, matriculate 35,000 students; it describes EPFL as among the top 15 engineering and technology institutions worldwide and IMD as #2 among MBAs in Europe.',
      tag: 'practitioner consensus',
      src: 'https://startupgenome.com/ecosystems/greater-lausanne-region',
      by: 'Startup Genome, Global Startup Ecosystem Report 2026, Greater Lausanne Region page (the ranking statements are Startup Genome’s own)',
      seen: '2026-10-03'
    },
    'ch-bfs-reg': {
      t: 'In 2024 the median gross monthly wage of a full-time post in Switzerland was CHF 7,024: CHF 7,502 in the Zurich region and CHF 5,708 in Ticino.',
      tag: 'data',
      src: 'https://www.bfs.admin.ch/bfs/de/home/statistiken/arbeit-erwerb/loehne-erwerbseinkommen-arbeitskosten.assetdetail.36195847.html',
      by: 'Federal Statistical Office, Swiss Earnings Structure Survey 2024, first results (25 Nov 2025)',
      seen: '2026-10-03'
    },
    'ch-bfs-reg2': {
      t: 'In 2024 the median gross monthly wage of a full-time post was CHF 7,156 in north-western Switzerland, CHF 7,092 in central Switzerland, CHF 6,998 in the Lake Geneva region, CHF 6,964 in Espace Mittelland and CHF 6,623 in eastern Switzerland, against CHF 7,024 nationally.',
      tag: 'data',
      src: 'https://www.bilanz.ch/unternehmen/der-neue-medianlohn-betraegt-7024-franken/pe1rht0',
      by: 'Federal Statistical Office, Swiss Earnings Structure Survey 2024, as reported by Bilanz (25 Nov 2025); the Office’s own release names only Zürich and Ticino',
      seen: '2026-10-03'
    },
    'ch-bfs-uni': {
      t: 'In 2024 employees with a university degree in a full-time post earned a gross monthly wage of CHF 10,533 in Switzerland, those with a university of applied sciences degree CHF 9,288 and those with a federal vocational certificate CHF 6,390.',
      tag: 'data',
      src: 'https://www.bfs.admin.ch/bfs/de/home/statistiken/arbeit-erwerb/loehne-erwerbseinkommen-arbeitskosten.assetdetail.36195847.html',
      by: 'Federal Statistical Office, Swiss Earnings Structure Survey 2024, first results (25 Nov 2025)',
      seen: '2026-10-03'
    },
    'ch-metro': {
      t: 'Of Switzerland’s seven metropolitan regions in Eurostat’s tables, Zurich has the largest GDP (€140.8 billion in 2021) and population (1,579,967 in 2023), followed on GDP by Bern (€78.6 billion), Basel (€64.9 billion), Lausanne (€58.3 billion), Geneva (€52.2 billion), St. Gallen (€42.2 billion) and Lucerne (€30.7 billion).',
      tag: 'data',
      src: 'https://ec.europa.eu/eurostat/databrowser/view/met_10r_3gdp/default/table',
      by: 'Eurostat, GDP at current market prices (met_10r_3gdp) and population (met_pjanaggr3) by metropolitan region; ranking by Admetia, 2026-10-03',
      seen: '2026-10-03'
    },
    'ch-pay': {
      t: 'In 2022 employees under 30 in Swiss firms with 10 or more staff (public administration excluded) earned a mean of €70,488 gross a year (converted to euro by Eurostat), and those under 30 working as professionals €83,890, against €95,698 for all ages.',
      tag: 'data',
      src: 'https://ec.europa.eu/eurostat/databrowser/view/earn_ses22_28/default/table',
      by: 'Eurostat, Structure of earnings survey 2022: mean annual earnings by age and occupation (earn_ses22_28), Switzerland, firms with 10+ employees, sections B–S excluding O',
      seen: '2026-10-03'
    },
    'ch-grads': {
      t: 'In 2025 the employment rate of Swiss residents aged 20 to 34 with a tertiary degree was 90.2% (90.1% for those who finished within the last five years); unemployment was 4.9% overall and 8.8% for the 15-to-24s, and GDP was €925.9 billion.',
      tag: 'data',
      src: 'https://ec.europa.eu/eurostat/databrowser/view/edat_lfse_24/default/table',
      by: 'Eurostat, employment rate of 20-34-year-olds by educational attainment and years since leaving education (edat_lfse_24), unemployment (une_rt_a) and GDP (nama_10_gdp), 2025',
      seen: '2026-10-03'
    },
    'ch-roche': {
      t: 'Roche says it was founded in Basel in 1896 and is today a leading provider of medicines and diagnostics in over 100 countries.',
      tag: 'employer-stated',
      src: 'https://www.roche.com/about',
      by: 'Roche, About',
      seen: '2026-10-03'
    },
    'ch-zug-emp': {
      t: 'The canton of Zug had 131,705 jobs in 20,321 businesses in 2023, 47,525 of them in the city of Zug: 14,693 in wholesale trade, 7,781 in head-office management and consultancy, 7,093 in IT services, 4,946 in financial services and 4,710 in activities auxiliary to finance and insurance.',
      tag: 'data',
      src: 'https://www.zg.ch/behoerden/gesundheitsdirektion/statistikfachstelle/themen/zug-in-zahlen/downloads/zug_in_zahlen_2025.pdf',
      by: 'Canton of Zug, Statistikfachstelle, Zug in Zahlen 2025 (Federal Statistical Office STATENT 2023)',
      seen: '2026-10-03'
    },
    'ch-zug-top': {
      t: 'The canton of Zug’s largest private employers in 2024 included Roche Diagnostics International (2,833 employees in the canton), Siemens (2,121), AMAG (1,447), Glencore (1,175), Partners Group (569) and the Zuger Kantonalbank (560).',
      tag: 'data',
      src: 'https://www.zg.ch/behoerden/gesundheitsdirektion/statistikfachstelle/themen/zug-in-zahlen/downloads/zug_in_zahlen_2025.pdf',
      by: 'Canton of Zug, Statistikfachstelle, Zug in Zahlen 2025: the 20 largest employers in the canton (2024, public administrations excluded)',
      seen: '2026-10-03'
    },
    'ch-zug-gdp': {
      t: 'The Federal Statistical Office’s provisional figures for 2022 give the canton of Zug a GDP of CHF 25,176 million, or CHF 192,958 per inhabitant against CHF 90,131 for Switzerland and CHF 104,620 for the canton of Zürich.',
      tag: 'data',
      src: 'https://www.zg.ch/behoerden/gesundheitsdirektion/statistikfachstelle/themen/zug-in-zahlen/downloads/zug_in_zahlen_2025.pdf',
      by: 'Canton of Zug, Zug in Zahlen 2025, quoting the Federal Statistical Office national accounts (2022, provisional, selected cantons)',
      seen: '2026-10-03'
    },
    'ch-lug-reg': {
      t: 'At 31 December 2024 the City of Lugano counted 68,507 inhabitants and 17,579 registered businesses, of which 3,459 in finance, 2,321 in insurance, administrative and legal services, 1,627 in wholesale trade and 873 in information technology and telecommunications.',
      tag: 'data',
      src: 'https://lugano.ch/dam/jcr:ecdeeae1-c265-4126-a549-4027b26bd1b4/20250116-cs-statistiche-lugano-2024-presentazione.pdf',
      by: 'City of Lugano, Statistics Office, press conference of 16 Jan 2025: statistics at 31 December 2024 (registered businesses, not jobs)',
      seen: '2026-10-03'
    }
  }
});

if (window.I18N) I18N.add('it', {
  'In nine years of Swiss job ads to early 2023, 87% mentioned German, 32% English, 23% French and 4% Italian, and more than a third named two or more languages.':
    'In nove anni di annunci di lavoro svizzeri fino all’inizio del 2023, l’87% menzionava il tedesco, il 32% l’inglese, il 23% il francese e il 4% l’italiano, e più di un terzo indicava due o più lingue.',
  'Swiss banks recruit six-month interns continuously, with starts in January, April, July and October and applications 3 to 5 months before the start.':
    'Le banche svizzere reclutano stagisti di sei mesi in modo continuo, con inizio a gennaio, aprile, luglio e ottobre e candidature da 3 a 5 mesi prima dell’inizio.',
  'Roche’s 2-year Operations Rotational Development Program in Basel gave 1 March 2026 as the start of its next application period.':
    'L’Operations Rotational Development Program di Roche a Basilea, di 2 anni, indicava il 1° marzo 2026 come inizio del prossimo periodo di candidature.',
  'In the year to the second quarter of 2026 Swiss job postings for graduate IT profiles rose 6%, while commercial profiles fell 13%, economic profiles 10% and graduate science profiles 18%; total postings were 2.4% below the previous quarter.':
    'Nell’anno fino al secondo trimestre del 2026 gli annunci svizzeri per profili IT di laureati sono saliti del 6%, mentre i profili commerciali sono calati del 13%, quelli economici del 10% e quelli scientifici di laureati del 18%; gli annunci totali erano inferiori del 2,4% al trimestre precedente.',
  'A year after graduating, unemployment was 6.4% for university master’s graduates in the 2025 federal survey, up from 3.9% in 2023, and 4.9% for bachelor’s graduates of universities of applied sciences, up from 3.4%.':
    'A un anno dalla laurea la disoccupazione era del 6,4% per i laureati magistrali delle università nell’indagine federale 2025, in aumento dal 3,9% del 2023, e del 4,9% per i laureati triennali delle scuole universitarie professionali, in aumento dal 3,4%.',
  'The highest graduate pay in Europe, in a small number of places: Zurich for banking, insurance and Google’s largest engineering site outside the US; Basel for pharma and Switzerland’s trade logistics; Geneva and Lausanne for commodity trading, EPFL and IMD. Free movement makes it easy for EU citizens; for everyone else, national quotas and an economic-interest test make it hard.':
    'Gli stipendi per neolaureati più alti d’Europa, in pochi luoghi: Zurigo per banche, assicurazioni e la maggiore sede di ingegneria di Google fuori dagli Stati Uniti; Basilea per la farmaceutica e la logistica dell’export svizzero; Ginevra e Losanna per il trading di materie prime, l’EPFL e l’IMD. La libera circolazione lo rende facile per i cittadini UE; per tutti gli altri, quote nazionali e un test di interesse economico lo rendono difficile.',
  'Banking and wealth management':
    'Banche e gestione patrimoniale',
  'Insurance and reinsurance':
    'Assicurazioni e riassicurazioni',
  'Pharmaceuticals':
    'Farmaceutica',
  'Commodity trading':
    'Trading di materie prime',
  'The St. Gallen programmes are not linked from a hub.':
    'I programmi di San Gallo non sono collegati a un polo.',
  'Software and AI demand in Zurich rests on one employer statement; no statistic by family was read.':
    'La domanda di software e IA a Zurigo si basa su una sola dichiarazione aziendale; non è stata letta alcuna statistica per famiglia.',
  'The 2027 quotas are decided each November; the 2026 figures are shown.':
    'Le quote per il 2027 si decidono ogni novembre; sono indicate quelle del 2026.',
  'No family is rated in Bern, St. Gallen or Lucerne: Eurostat’s metropolitan table gives no split by sector for them.':
    'Nessuna famiglia è valutata a Berna, San Gallo o Lucerna: la tabella metropolitana di Eurostat non dà per loro una ripartizione per settore.',
  'Swiss regions are not in Eurostat’s jobs-by-sector tables and no Swiss source with jobs by sector for the cities was read, so Zurich’s and Basel’s sector sizes rest on the cantons’ own statements and Zug’s on its cantonal statistics; Zug and Lugano show a canton and a city for population, not a metropolitan region, and have no GDP figure.':
    'Le regioni svizzere non sono nelle tabelle Eurostat dei posti di lavoro per settore e non è stata letta alcuna fonte svizzera con i posti di lavoro per settore delle città, quindi le dimensioni dei settori di Zurigo e Basilea si basano sulle dichiarazioni dei cantoni e quelle di Zugo sulle statistiche cantonali; Zugo e Lugano riportano un cantone e una città per la popolazione, non una regione metropolitana, e non hanno un dato sul PIL.',
  'Pay by region is the Federal Statistical Office’s 2024 median for a large region, not a city; the Office’s release names only Zürich and Ticino, the other regions come from a Bilanz report of the same survey. Headcounts for UBS, Zurich Insurance, Swiss Re, ETH Zurich and the Swiss universities were not read, and the language of work was not researched.':
    'Gli stipendi per regione sono la mediana 2024 dell’Ufficio federale di statistica per una grande regione, non per una città; il comunicato dell’Ufficio nomina solo Zurigo e il Ticino, le altre regioni vengono da un articolo di Bilanz sulla stessa indagine. Gli organici di UBS, Zurich Insurance, Swiss Re, ETH Zurigo e delle università svizzere non sono stati letti, e la lingua di lavoro non è stata ricercata.',
  '§2 Switzerland: job search, quotas, the economic-interest test':
    '§2 Svizzera: ricerca di lavoro, quote, il test di interesse economico',
  'H1 Swiss versus London pay; §5 Zurich net pay, Quellensteuer and health premiums':
    'H1 stipendi svizzeri e londinesi; §5 netto a Zurigo, imposta alla fonte e premi sanitari',
  'Swiss quotas and work limits':
    'Quote svizzere e limiti di lavoro',
  'Geneva, Zug and Lugano commodity trading':
    'Il trading di materie prime a Ginevra, Zugo e Lugano',
  'Country brief: hubs, employers, pay and standing':
    'Dossier paese: poli, datori di lavoro, stipendi e posizionamento',
  'Banking, insurance and big-tech engineering':
    'Banche, assicurazioni e ingegneria dei giganti tecnologici',
  'Banking':
    'Banca',
  '103,400 jobs, one worker in ten':
    '103.400 posti, un lavoratore su dieci',
  'Zurich’s financial sector':
    'Il settore finanziario di Zurigo',
  'largest development centre outside the US':
    'il maggiore centro di sviluppo fuori dagli Stati Uniti',
  'ecosystem value $44 billion':
    'valore dell’ecosistema 44 miliardi di dollari',
  'Zurich’s start-up ecosystem':
    'L’ecosistema start-up di Zurigo',
  'Pharma headquarters and Switzerland’s export logistics':
    'Le sedi della farmaceutica e la logistica dell’export svizzero',
  'Pharmaceuticals and life sciences':
    'Farmaceutica e scienze della vita',
  'Logistics':
    'Logistica',
  'Banking and insurance':
    'Banche e assicurazioni',
  'global headquarters':
    'sedi centrali mondiali',
  'central bankers’ bank':
    'la banca delle banche centrali',
  'founded in Basel in 1896':
    'fondata a Basilea nel 1896',
  'Commodity trading, international organisations and EPFL':
    'Trading di materie prime, organizzazioni internazionali ed EPFL',
  'Commodity trading and trade finance':
    'Trading di materie prime e finanza commerciale',
  'International organisations':
    'Organizzazioni internazionali',
  'Private banking':
    'Private banking',
  '215+ member companies of the trade body':
    'oltre 215 aziende associate all’organismo di categoria',
  'Commodity traders around Lake Geneva':
    'I trader di materie prime attorno al Lago di Ginevra',
  'ecosystem value $18.7 billion':
    'valore dell’ecosistema 18,7 miliardi di dollari',
  'Greater Lausanne’s start-up ecosystem':
    'L’ecosistema start-up della Grande Losanna',
  'The federal capital':
    'La capitale federale',
  'GDP of €78.6 billion (2021)':
    'PIL di 78,6 miliardi di € (2021)',
  'Businesses in the metropolitan region':
    'Le imprese della regione metropolitana',
  'Eastern Switzerland’s centre and home of the University of St. Gallen':
    'Il centro della Svizzera orientale e sede dell’Università di San Gallo',
  'GDP of €42.2 billion (2021)':
    'PIL di 42,2 miliardi di € (2021)',
  'Central Switzerland’s largest city, near Zug':
    'La maggiore città della Svizzera centrale, vicino a Zugo',
  'GDP of €30.7 billion (2021)':
    'PIL di 30,7 miliardi di € (2021)',
  'Commodity trading, head offices and a very high output per head':
    'Trading di materie prime, sedi centrali e una produzione per abitante molto alta',
  'Commodity trading and wholesale':
    'Trading di materie prime e commercio all’ingrosso',
  'Finance and head offices':
    'Finanza e sedi centrali',
  'Medical technology and biotechnology':
    'Tecnologia medica e biotecnologie',
  '2,833 employees in the canton (2024)':
    '2.833 dipendenti nel cantone (2024)',
  '1,175 employees in the canton (2024)':
    '1.175 dipendenti nel cantone (2024)',
  '569 employees in the canton (2024)':
    '569 dipendenti nel cantone (2024)',
  '560 employees in the canton (2024)':
    '560 dipendenti nel cantone (2024)',
  'A fifth-ranked Western European financial centre in the Italian-speaking south':
    'Un centro finanziario dell’Europa occidentale al quinto posto, nel sud di lingua italiana',
  'Banking and finance':
    'Banche e finanza',
  'Wholesale and retail trade':
    'Commercio all’ingrosso e al dettaglio',
  '3,459 of 17,579 registered businesses (2024)':
    '3.459 su 17.579 imprese registrate (2024)',
  'Registered finance businesses':
    'Imprese finanziarie registrate',
  'Pay':
    'Stipendi',
  'Entry pay':
    'Stipendio d’ingresso',
  'Graduate labour market':
    'Mercato del lavoro dei laureati',
  'Swiss university economics master’s graduates earn a median of CHF 87,100 one year after graduating.':
    'I laureati magistrali in economia delle università svizzere guadagnano una mediana di 87.100 CHF a un anno dalla laurea.',
  'At €60,000 gross a single employee in Zurich keeps about 84% after tax and contributions, the highest share among the library’s compared European cities.':
    'Con 60.000 € lordi un dipendente single a Zurigo tiene circa l’84% dopo imposte e contributi, la quota più alta tra le città europee confrontate dalla biblioteca.',
  'Health insurance is paid separately: a basic premium in Zurich city is about CHF 459 a month for 19-to-25-year-olds and CHF 640 for adults.':
    'L’assicurazione sanitaria si paga a parte: il premio di base a Zurigo città è di circa 459 CHF al mese per i 19-25enni e 640 CHF per gli adulti.',
  'In 2023 one worker in ten in the Zurich region — more than 103,400 people — worked in finance, generating CHF 32.8 billion; Zurich is by far Switzerland’s largest financial centre, with banks 43% and insurers 37% of the sector’s value added.':
    'Nel 2023 un lavoratore su dieci nella regione di Zurigo — oltre 103.400 persone — lavorava nella finanza, generando 32,8 miliardi di franchi; Zurigo è di gran lunga il maggiore centro finanziario svizzero, con le banche al 43% e le assicurazioni al 37% del valore aggiunto del settore.',
  'Switzerland is home to Google’s largest development centre outside the US, in Zurich.':
    'La Svizzera ospita a Zurigo il maggiore centro di sviluppo di Google fuori dagli Stati Uniti.',
  'Basel hosts the headquarters of Roche and Novartis in a life-sciences cluster of over 800 companies, the Bank for International Settlements, and about 30% of Swiss exports pass through it by river, air and rail.':
    'Basilea ospita le sedi centrali di Roche e Novartis in un distretto delle scienze della vita di oltre 800 aziende, la Banca dei regolamenti internazionali, e circa il 30% dell’export svizzero vi transita per fiume, aria e ferrovia.',
  'The commodity trade body counts 215+ member companies, mainly around Lake Geneva, in Zug and in Ticino; the sector is about 2.3% of Swiss GDP.':
    'L’organismo di categoria del trading di materie prime conta oltre 215 aziende associate, soprattutto attorno al Lago di Ginevra, a Zugo e in Ticino; il settore vale circa il 2,3% del PIL svizzero.',
  'Eurostat puts the GDP of the Bern metropolitan region at €78.6 billion in 2021.':
    'Eurostat stima il PIL della regione metropolitana di Berna in 78,6 miliardi di € nel 2021.',
  'Eurostat puts the GDP of the St. Gallen metropolitan region at €42.2 billion in 2021.':
    'Eurostat stima il PIL della regione metropolitana di San Gallo in 42,2 miliardi di € nel 2021.',
  'Eurostat puts the GDP of the Lucerne metropolitan region at €30.7 billion in 2021.':
    'Eurostat stima il PIL della regione metropolitana di Lucerna in 30,7 miliardi di € nel 2021.',
  'The Global Financial Centres Index 40 (September 2026) ranks Zurich 10th in the world (up 1 place) and second in Western Europe after London, Geneva 12th (up 6) and third, and Lugano 21st (up 4) and fifth; in the sector tables Zurich is 6th for banking and for investment management and 4th for professional services, Lugano 8th for banking and Geneva 11th.':
    'L’indice Global Financial Centres 40 (settembre 2026) colloca Zurigo al 10º posto nel mondo (in salita di 1 posizione) e seconda nell’Europa occidentale dopo Londra, Ginevra al 12º (in salita di 6) e terza, e Lugano al 21º (in salita di 4) e quinta; nelle tabelle di settore Zurigo è 6ª per le banche e per la gestione degli investimenti e 4ª per i servizi professionali, Lugano 8ª per le banche e Ginevra 11ª.',
  'Startup Genome’s 2026 report puts the value of Zurich’s start-up ecosystem at $44 billion (Europe’s average $14.3 billion), with $2.4 billion of seed and Series A funding in H2 2023–2025 and $7 billion of exits in 2021–2025.':
    'Il rapporto 2026 di Startup Genome stima il valore dell’ecosistema start-up di Zurigo in 44 miliardi di dollari (media europea 14,3 miliardi), con 2,4 miliardi di dollari di finanziamenti seed e Series A nel H2 2023–2025 e 7 miliardi di dollari di exit nel 2021–2025.',
  'Startup Genome’s 2026 report puts the value of the Greater Lausanne start-up ecosystem at $18.7 billion (Europe’s average $14.3 billion) and says its institutions, including EPFL, the University of Lausanne and IMD, matriculate 35,000 students; it describes EPFL as among the top 15 engineering and technology institutions worldwide and IMD as #2 among MBAs in Europe.':
    'Il rapporto 2026 di Startup Genome stima il valore dell’ecosistema start-up della Grande Losanna in 18,7 miliardi di dollari (media europea 14,3 miliardi) e dice che le sue istituzioni, tra cui EPFL, l’Università di Losanna e IMD, contano 35.000 studenti; descrive l’EPFL tra le prime 15 istituzioni di ingegneria e tecnologia al mondo e l’IMD al n. 2 tra gli MBA in Europa.',
  'In 2024 the median gross monthly wage of a full-time post in Switzerland was CHF 7,024: CHF 7,502 in the Zurich region and CHF 5,708 in Ticino.':
    'Nel 2024 il salario lordo mensile mediano di un posto a tempo pieno in Svizzera era di 7.024 franchi: 7.502 franchi nella regione di Zurigo e 5.708 franchi in Ticino.',
  'In 2024 the median gross monthly wage of a full-time post was CHF 7,156 in north-western Switzerland, CHF 7,092 in central Switzerland, CHF 6,998 in the Lake Geneva region, CHF 6,964 in Espace Mittelland and CHF 6,623 in eastern Switzerland, against CHF 7,024 nationally.':
    'Nel 2024 il salario lordo mensile mediano di un posto a tempo pieno era di 7.156 franchi nella Svizzera nordoccidentale, 7.092 nella Svizzera centrale, 6.998 nella regione del Lemano, 6.964 nell’Espace Mittelland e 6.623 nella Svizzera orientale, contro 7.024 a livello nazionale.',
  'In 2024 employees with a university degree in a full-time post earned a gross monthly wage of CHF 10,533 in Switzerland, those with a university of applied sciences degree CHF 9,288 and those with a federal vocational certificate CHF 6,390.':
    'Nel 2024 i dipendenti con una laurea universitaria in un posto a tempo pieno guadagnavano in Svizzera un salario lordo mensile di 10.533 franchi, quelli con una laurea di una scuola universitaria professionale 9.288 franchi e quelli con un attestato federale di capacità 6.390 franchi.',
  'Of Switzerland’s seven metropolitan regions in Eurostat’s tables, Zurich has the largest GDP (€140.8 billion in 2021) and population (1,579,967 in 2023), followed on GDP by Bern (€78.6 billion), Basel (€64.9 billion), Lausanne (€58.3 billion), Geneva (€52.2 billion), St. Gallen (€42.2 billion) and Lucerne (€30.7 billion).':
    'Delle sette regioni metropolitane svizzere nelle tabelle di Eurostat, Zurigo ha il PIL maggiore (140,8 miliardi di euro nel 2021) e la popolazione maggiore (1.579.967 nel 2023), seguita per PIL da Berna (78,6 miliardi), Basilea (64,9 miliardi), Losanna (58,3 miliardi), Ginevra (52,2 miliardi), San Gallo (42,2 miliardi) e Lucerna (30,7 miliardi).',
  'In 2022 employees under 30 in Swiss firms with 10 or more staff (public administration excluded) earned a mean of €70,488 gross a year (converted to euro by Eurostat), and those under 30 working as professionals €83,890, against €95,698 for all ages.':
    'Nel 2022 i dipendenti sotto i 30 anni delle imprese svizzere con almeno 10 addetti (esclusa la pubblica amministrazione) guadagnavano in media 70.488 € lordi all’anno (convertiti in euro da Eurostat), e quelli sotto i 30 anni che lavorano come professionisti 83.890 €, contro 95.698 € per tutte le età.',
  'In 2025 the employment rate of Swiss residents aged 20 to 34 with a tertiary degree was 90.2% (90.1% for those who finished within the last five years); unemployment was 4.9% overall and 8.8% for the 15-to-24s, and GDP was €925.9 billion.':
    'Nel 2025 il tasso di occupazione dei residenti svizzeri di 20-34 anni con un titolo terziario era del 90,2% (il 90,1% per chi ha finito da non oltre cinque anni); la disoccupazione era del 4,9% in complesso e dell’8,8% tra i 15-24enni, e il PIL di 925,9 miliardi di euro.',
  'Roche says it was founded in Basel in 1896 and is today a leading provider of medicines and diagnostics in over 100 countries.':
    'Roche dice di essere stata fondata a Basilea nel 1896 e di essere oggi un fornitore di primo piano di medicinali e diagnostica in oltre 100 paesi.',
  'The canton of Zug had 131,705 jobs in 20,321 businesses in 2023, 47,525 of them in the city of Zug: 14,693 in wholesale trade, 7,781 in head-office management and consultancy, 7,093 in IT services, 4,946 in financial services and 4,710 in activities auxiliary to finance and insurance.':
    'Nel 2023 il cantone di Zugo contava 131.705 posti di lavoro in 20.321 imprese, 47.525 dei quali nella città di Zugo: 14.693 nel commercio all’ingrosso, 7.781 in direzione aziendale e consulenza, 7.093 nei servizi informatici, 4.946 nei servizi finanziari e 4.710 nelle attività ausiliarie a finanza e assicurazioni.',
  'The canton of Zug’s largest private employers in 2024 included Roche Diagnostics International (2,833 employees in the canton), Siemens (2,121), AMAG (1,447), Glencore (1,175), Partners Group (569) and the Zuger Kantonalbank (560).':
    'Tra i maggiori datori di lavoro privati del cantone di Zugo nel 2024 figuravano Roche Diagnostics International (2.833 dipendenti nel cantone), Siemens (2.121), AMAG (1.447), Glencore (1.175), Partners Group (569) e la Zuger Kantonalbank (560).',
  'The Federal Statistical Office’s provisional figures for 2022 give the canton of Zug a GDP of CHF 25,176 million, or CHF 192,958 per inhabitant against CHF 90,131 for Switzerland and CHF 104,620 for the canton of Zürich.':
    'I dati provvisori 2022 dell’Ufficio federale di statistica attribuiscono al cantone di Zugo un PIL di 25.176 milioni di franchi, cioè 192.958 franchi per abitante contro 90.131 per la Svizzera e 104.620 per il cantone di Zurigo.',
  'At 31 December 2024 the City of Lugano counted 68,507 inhabitants and 17,579 registered businesses, of which 3,459 in finance, 2,321 in insurance, administrative and legal services, 1,627 in wholesale trade and 873 in information technology and telecommunications.':
    'Al 31 dicembre 2024 la Città di Lugano contava 68.507 abitanti e 17.579 attività economiche registrate, di cui 3.459 nella finanza, 2.321 nei servizi assicurativi, amministrativi e legali, 1.627 nel commercio all’ingrosso e 873 nell’informatica e nelle telecomunicazioni.'
});
