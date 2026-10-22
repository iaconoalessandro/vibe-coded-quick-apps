/* Atlas record: France. Read 2 and 3 October 2026; log P37
 * (research/verification/round-4b.md, round-4k.md, round-5a.md). Permit rules: service-public.fr and
 * the library (places/visas-and-work-rights.md §4, places/student-logistics.md).
 * Hubs for further cities were added on 3 October 2026 from city-level statistics
 * (log: research/verification/round-4k.md). Round 5a (3 October 2026) added standing,
 * metrics (Eurostat metropolitan regions for population and GDP, INSEE private-sector
 * gross pay by département, Numbeo for rent), jobs by département (Eurostat NUTS 3),
 * named employers and rankings; the country brief is research/countries/fr-france.md. */

ATLAS.add({
  id: 'FR',
  checked: '2026-10-03',
  log: 'P37',
  summary: 'Paris dominates: it holds the top two French départements for jobs in information and communication and in finance, Europe’s highest concentration of Fortune Global 500 headquarters, and the most attractive city for financial-services investment in Europe. Toulouse is Airbus’s home and a space and ICT centre, Lyon and Lille the main regional markets, Marseille a port city, Sophia Antipolis a technology park on the Riviera. French is expected in most jobs, and the final internship is the usual way into a first one.',
  sectors: ['Corporate headquarters', 'Banking and insurance', 'Luxury and fashion', 'Aerospace', 'Start-ups', 'Life sciences'],
  roles: ['business', 'management', 'finance', 'it'],
  hubs: [
    {
      id: 'paris', name: 'Paris', lat: 48.86, lon: 2.35,
      knownFor: 'Corporate headquarters, finance, luxury and start-ups',
      why: ['fr-pld', 'fr-ey', 'fr-pay-paris', 'fr-paris-emp', 'fr-paris-fortune', 'fr-gfci', 'fr-paris-sg', 'fr-paris-kearney'],
      sectors: ['Corporate headquarters', 'Banking and insurance', 'Luxury and fashion', 'Consulting', 'Start-ups'],
      employers: [
        { name: 'Paris La Défense', note: '200,000 employees, 2,800 companies', c: 'fr-pld' },
        { name: 'STATION F', note: 'start-up campus, 1,000+ start-ups', c: 'fr-stationf' },
        { name: 'TotalEnergies', note: 'Paris Region headquarters; 102,579 employees (Fortune Global 500)', c: 'fr-paris-fortune' },
        { name: 'BNP Paribas', note: 'Paris Region headquarters; 182,656 employees', c: 'fr-paris-fortune' },
        { name: 'Société Générale', note: 'Paris Region headquarters; 124,089 employees', c: 'fr-paris-fortune' },
        { name: 'Crédit Agricole', note: 'Paris Region headquarters; 75,125 employees', c: 'fr-paris-fortune' },
        {
          name: 'AXA',
          note: 'Paris Region headquarters; 94,705 employees (Fortune list); 156,000 employees and distributors on AXA’s own page',
          c: 'fr-paris-fortune'
        },
        { name: 'Christian Dior', note: 'Paris Region headquarters; 197,141 employees (as listed by Fortune)', c: 'fr-paris-fortune' },
        { name: 'Électricité de France and ENGIE', note: 'Paris Region headquarters; 171,863 and 97,297 employees', c: 'fr-paris-fortune' }
      ],
      demand: {
        business: ['dominant', 'fr-pld'],
        finance: ['dominant', 'fr-paris-emp', 'fr-gfci'],
        management: ['strong', 'fr-pld'],
        it: ['dominant', 'fr-paris-emp'],
        software: ['strong', 'fr-paris-sg', 'fr-paris-emp'],
        ai: ['strong', 'fr-paris-sg', 'fr-paris-ai'],
        economics: 'gap', accounting: 'gap', marketing: 'gap', logistics: 'gap', analytics: 'gap', datasci: 'gap', cs: 'gap', bigdata: 'gap'
      },
      finance: {
        banking: ['strong', 'fr-paris-fortune', 'fr-gfci'],
        vc: ['strong', 'fr-paris-sg', 'fr-stationf'],
        ib: 'gap', am: 'gap', pe: 'gap', corpfin: 'gap', risk: 'gap', finconsult: 'gap'
      },
      standing: [
        { f: 'business', s: [5, 5, 3], c: ['fr-pld', 'fr-paris-fortune', 'fr-paris-kearney'] },
        { f: 'management', s: [5, 5, 3], c: ['fr-pld', 'fr-paris-fortune'] },
        { f: 'finance', s: [5, 4, 2], c: ['fr-paris-emp', 'fr-gfci', 'fr-ey'] },
        { f: 'it', s: [5, 4, 2], c: ['fr-paris-emp'] },
        { f: 'software', s: [5, 4, 3], c: ['fr-paris-sg', 'fr-paris-emp', 'fr-stationf'] },
        { f: 'ai', s: [5, 4, 3], c: ['fr-paris-sg', 'fr-paris-ai'] }
      ],
      metrics: {
        pop: {
          v: 12388388,
          year: 2023,
          area: 'metro',
          tag: 'data',
          src: 'https://ec.europa.eu/eurostat/databrowser/view/met_pjanaggr3/default/table',
          by: 'Eurostat, population on 1 January by metropolitan region (met_pjanaggr3), Paris',
          seen: '2026-10-03'
        },
        gdp: {
          v: 757.6,
          cur: 'EUR',
          year: 2021,
          area: 'metro',
          tag: 'data',
          src: 'https://ec.europa.eu/eurostat/databrowser/view/met_10r_3gdp/default/table',
          by: 'Eurostat, GDP at current market prices by metropolitan region (met_10r_3gdp), Paris, million euro ÷ 1,000',
          seen: '2026-10-03'
        },
        wage: {
          tag: 'data',
          seen: '2026-10-03',
          v: 4903,
          cur: 'EUR',
          basis: 'mean',
          year: 2022,
          area: 'region',
          src: 'https://www.insee.fr/fr/statistiques/8219475',
          by: 'INSEE, Les salaires dans le secteur privé en 2022, table T401B (published 29 Aug 2024): mean annual gross pay per full-time equivalent in the private sector, département Paris, €58,830 ÷ 12'
        },
        rent: {
          v: 1380,
          cur: 'EUR',
          year: 2026,
          area: 'city',
          tag: 'anecdotal',
          src: 'https://www.numbeo.com/cost-of-living/in/Paris',
          by: 'Numbeo (crowd-sourced; 1578 entries by 245 contributors in the past 12 months), one-bedroom flat in the city centre, average, Paris',
          seen: '2026-10-03'
        }
      },
      programmes: [
        { calc: 'masters', track: 'mim', id: 'hec-mim', name: 'HEC Paris — MiM' },
        { calc: 'masters', track: 'mif', id: 'hec-mif', name: 'HEC Paris — MSc International Finance' },
        { calc: 'masters', track: 'marketing', id: 'hec-mkt', name: 'HEC Paris — Master in Marketing' },
        { calc: 'masters', track: 'mim', id: 'essec-mim', name: 'ESSEC — MiM' },
        { calc: 'masters', track: 'mif', id: 'essec-mif', name: 'ESSEC — Master in Finance' },
        { calc: 'masters', track: 'mim', id: 'escp-mim', name: 'ESCP — MiM' },
        { calc: 'masters', track: 'mim', id: 'insead-mim', name: 'INSEAD — MiM' },
        { calc: 'mba', name: 'HEC Paris (MBA)' },
        { calc: 'mba', name: 'INSEAD (MBA)' }
      ]
    },
    {
      id: 'toulouse', name: 'Toulouse', lat: 43.60, lon: 1.44,
      knownFor: 'Airbus’s headquarters and France’s aerospace industry',
      why: ['fr-airbus', 'fr-pay-toulouse', 'fr-tls-emp', 'fr-tls-space'],
      sectors: ['Aerospace', 'Space', 'Engineering'],
      employers: [
        { name: 'Airbus', note: 'headquarters; final assembly lines; France’s largest industrial site', c: 'fr-airbus' },
        { name: 'Thales Alenia Space', note: 'French headquarters in Toulouse; more than 2,800 people', c: 'fr-tls-tas' },
        { name: 'CNES', note: 'French space agency; 1,700 employees in Toulouse', c: 'fr-tls-space' },
        { t: 'Toulouse’s space sector', note: '16,000 jobs', c: 'fr-tls-space' },
        { t: 'Toulouse’s start-up ecosystem', note: 'ecosystem value $2 billion', c: 'fr-tls-sg' }
      ],
      demand: {
        management: ['present', 'fr-airbus'],
        it: ['strong', 'fr-tls-emp'],
        business: 'gap', finance: 'gap', economics: 'gap', accounting: 'gap', marketing: 'gap', logistics: 'gap', analytics: 'gap', software: 'gap', datasci: 'gap', ai: 'gap', cs: 'gap', bigdata: 'gap'
      },
      standing: [
        { f: 'it', s: [4, 2, 1], c: ['fr-tls-emp', 'fr-tls-sg'] },
        { f: 'management', s: [3, 2, 1], c: ['fr-airbus', 'fr-tls-tas'] }
      ],
      metrics: {
        pop: {
          v: 1470355,
          year: 2023,
          area: 'metro',
          tag: 'data',
          src: 'https://ec.europa.eu/eurostat/databrowser/view/met_pjanaggr3/default/table',
          by: 'Eurostat, population on 1 January by metropolitan region (met_pjanaggr3), Toulouse',
          seen: '2026-10-03'
        },
        gdp: {
          v: 59,
          cur: 'EUR',
          year: 2021,
          area: 'metro',
          tag: 'data',
          src: 'https://ec.europa.eu/eurostat/databrowser/view/met_10r_3gdp/default/table',
          by: 'Eurostat, GDP at current market prices by metropolitan region (met_10r_3gdp), Toulouse, million euro ÷ 1,000',
          seen: '2026-10-03'
        },
        wage: {
          tag: 'data',
          seen: '2026-10-03',
          v: 3549,
          cur: 'EUR',
          basis: 'mean',
          year: 2022,
          area: 'region',
          src: 'https://www.insee.fr/fr/statistiques/8219475',
          by: 'INSEE, Les salaires dans le secteur privé en 2022, table T401B (published 29 Aug 2024): mean annual gross pay per full-time equivalent in the private sector, département Haute-Garonne, €42,593 ÷ 12'
        },
        rent: {
          v: 788,
          cur: 'EUR',
          year: 2026,
          area: 'city',
          tag: 'anecdotal',
          src: 'https://www.numbeo.com/cost-of-living/in/Toulouse',
          by: 'Numbeo (crowd-sourced; 584 entries by 53 contributors in the past 12 months), one-bedroom flat in the city centre, average, Toulouse',
          seen: '2026-10-03'
        }
      },
      programmes: []
    },
    {
      id: 'sophia', name: 'Sophia Antipolis', lat: 43.62, lon: 7.05,
      knownFor: 'A technology park for AI, biotech and connected vehicles',
      why: ['fr-sophia', 'fr-pay-sophia', 'fr-sophia-emp'],
      sectors: ['Artificial intelligence', 'Biotechnology', 'Connected vehicles', 'Telecoms'],
      employers: [
        { name: 'Sophia Antipolis technopole', note: 'over 1,000 new jobs a year', c: 'fr-sophia' },
        { t: 'Alpes-Maritimes’ information and communication employers', note: '23,700 jobs (2023)', c: 'fr-sophia-emp' }
      ],
      demand: {
        software: ['present', 'fr-sophia'],
        ai: ['present', 'fr-sophia'],
        business: 'gap', finance: 'gap', economics: 'gap', accounting: 'gap', management: 'gap', marketing: 'gap', logistics: 'gap', analytics: 'gap', it: 'gap', datasci: 'gap', cs: 'gap', bigdata: 'gap'
      },
      standing: [
        { f: 'it', s: [3, 2, 1], c: ['fr-sophia-emp', 'fr-sophia'] }
      ],
      metrics: {
        pop: {
          v: 1114308,
          year: 2023,
          area: 'metro',
          tag: 'data',
          src: 'https://ec.europa.eu/eurostat/databrowser/view/met_pjanaggr3/default/table',
          by: 'Eurostat, population on 1 January by metropolitan region (met_pjanaggr3), Nice',
          seen: '2026-10-03'
        },
        gdp: {
          v: 39.6,
          cur: 'EUR',
          year: 2021,
          area: 'metro',
          tag: 'data',
          src: 'https://ec.europa.eu/eurostat/databrowser/view/met_10r_3gdp/default/table',
          by: 'Eurostat, GDP at current market prices by metropolitan region (met_10r_3gdp), Nice, million euro ÷ 1,000',
          seen: '2026-10-03'
        },
        wage: {
          tag: 'data',
          seen: '2026-10-03',
          v: 3348,
          cur: 'EUR',
          basis: 'mean',
          year: 2022,
          area: 'region',
          src: 'https://www.insee.fr/fr/statistiques/8219475',
          by: 'INSEE, Les salaires dans le secteur privé en 2022, table T401B (published 29 Aug 2024): mean annual gross pay per full-time equivalent in the private sector, département Alpes-Maritimes, €40,174 ÷ 12'
        },
        rent: {
          v: 994,
          cur: 'EUR',
          year: 2026,
          area: 'city',
          tag: 'anecdotal',
          src: 'https://www.numbeo.com/cost-of-living/in/Nice',
          by: 'Numbeo (crowd-sourced; 318 entries by 36 contributors in the past 12 months), one-bedroom flat in the city centre, average, Nice',
          seen: '2026-10-03'
        }
      },
      programmes: [
        { calc: 'masters', track: 'mim', id: 'skema-mim', name: 'SKEMA — Master in Management' },
        { calc: 'masters', track: 'mim', id: 'edhec-mim', name: 'EDHEC — Master in Management' },
        { calc: 'masters', track: 'marketing', id: 'edhec-mkt', name: 'EDHEC — MSc in Marketing Management' }
      ]
    },
    {
      id: 'lyon', name: 'Lyon', lat: 45.76, lon: 4.84,
      knownFor: 'France’s second metropolitan region for jobs in information and communication',
      why: ['fr-lyon', 'fr-pay-lyon', 'fr-lyon-emp', 'fr-lyon-sg'],
      sectors: ['Technology', 'Pharmaceuticals', 'Chemicals'],
      employers: [
        { t: 'Information and communication employers', note: '57,800 jobs (2022)', c: 'fr-lyon' },
        { t: 'Finance and insurance employers', note: '30,970 jobs (2022)', c: 'fr-lyon' },
        { t: 'Rhône’s manufacturing employers', note: '93,400 jobs (2023), second among French départements', c: 'fr-lyon-emp' },
        { t: 'Lyon’s start-up ecosystem', note: 'ecosystem value $9 billion', c: 'fr-lyon-sg' }
      ],
      demand: {
        finance: ['strong', 'fr-lyon-emp', 'fr-lyon'],
        it: ['strong', 'fr-lyon'],
        business: 'gap', economics: 'gap', accounting: 'gap', management: 'gap', marketing: 'gap', logistics: 'gap', analytics: 'gap', software: 'gap', datasci: 'gap', ai: 'gap', cs: 'gap', bigdata: 'gap'
      },
      standing: [
        { f: 'it', s: [4, 2, 1], c: ['fr-lyon-emp', 'fr-lyon', 'fr-lyon-sg'] },
        { f: 'finance', s: [4, 2, 1], c: ['fr-lyon-emp', 'fr-lyon'] }
      ],
      metrics: {
        pop: {
          v: 1916293,
          year: 2023,
          area: 'metro',
          tag: 'data',
          src: 'https://ec.europa.eu/eurostat/databrowser/view/met_pjanaggr3/default/table',
          by: 'Eurostat, population on 1 January by metropolitan region (met_pjanaggr3), Lyon',
          seen: '2026-10-03'
        },
        gdp: {
          v: 97.3,
          cur: 'EUR',
          year: 2021,
          area: 'metro',
          tag: 'data',
          src: 'https://ec.europa.eu/eurostat/databrowser/view/met_10r_3gdp/default/table',
          by: 'Eurostat, GDP at current market prices by metropolitan region (met_10r_3gdp), Lyon, million euro ÷ 1,000',
          seen: '2026-10-03'
        },
        wage: {
          tag: 'data',
          seen: '2026-10-03',
          v: 3661,
          cur: 'EUR',
          basis: 'mean',
          year: 2022,
          area: 'region',
          src: 'https://www.insee.fr/fr/statistiques/8219475',
          by: 'INSEE, Les salaires dans le secteur privé en 2022, table T401B (published 29 Aug 2024): mean annual gross pay per full-time equivalent in the private sector, département Rhône, €43,934 ÷ 12'
        },
        rent: {
          v: 777,
          cur: 'EUR',
          year: 2026,
          area: 'city',
          tag: 'anecdotal',
          src: 'https://www.numbeo.com/cost-of-living/in/Lyon',
          by: 'Numbeo (crowd-sourced; 694 entries by 67 contributors in the past 12 months), one-bedroom flat in the city centre, average, Lyon',
          seen: '2026-10-03'
        }
      },
      programmes: []
    },
    {
      id: 'marseille', name: 'Marseille', lat: 43.30, lon: 5.37,
      knownFor: 'France’s second metropolitan region for finance and insurance jobs, and its biggest port city',
      why: ['fr-marseille', 'fr-pay-marseille', 'fr-mrs-emp', 'fr-mrs-port'],
      sectors: ['Ports and logistics', 'Insurance', 'Tourism'],
      employers: [
        { t: 'Information and communication employers', note: '36,700 jobs (2022)', c: 'fr-marseille' },
        { t: 'Finance and insurance employers', note: '32,380 jobs (2022)', c: 'fr-marseille' },
        { t: 'Port of Marseille', note: '66.0 million tonnes in 2024, eighth among the EU’s 20 largest ports', c: 'fr-mrs-port' },
        { t: 'Marseille’s start-up ecosystem', note: 'ecosystem value $2 billion', c: 'fr-mrs-sg' }
      ],
      demand: {
        finance: ['strong', 'fr-marseille'],
        logistics: ['strong', 'fr-mrs-port'],
        business: 'gap', economics: 'gap', accounting: 'gap', management: 'gap', marketing: 'gap', analytics: 'gap', it: 'gap', software: 'gap', datasci: 'gap', ai: 'gap', cs: 'gap', bigdata: 'gap'
      },
      standing: [
        { f: 'finance', s: [4, 2, 1], c: ['fr-mrs-emp', 'fr-marseille'] },
        { f: 'logistics', s: [4, 3, 1], c: ['fr-mrs-port'] }
      ],
      metrics: {
        pop: {
          v: 3183476,
          year: 2023,
          area: 'metro',
          tag: 'data',
          src: 'https://ec.europa.eu/eurostat/databrowser/view/met_pjanaggr3/default/table',
          by: 'Eurostat, population on 1 January by metropolitan region (met_pjanaggr3), Marseille',
          seen: '2026-10-03'
        },
        gdp: {
          v: 125.4,
          cur: 'EUR',
          year: 2021,
          area: 'metro',
          tag: 'data',
          src: 'https://ec.europa.eu/eurostat/databrowser/view/met_10r_3gdp/default/table',
          by: 'Eurostat, GDP at current market prices by metropolitan region (met_10r_3gdp), Marseille, million euro ÷ 1,000',
          seen: '2026-10-03'
        },
        wage: {
          tag: 'data',
          seen: '2026-10-03',
          v: 3420,
          cur: 'EUR',
          basis: 'mean',
          year: 2022,
          area: 'region',
          src: 'https://www.insee.fr/fr/statistiques/8219475',
          by: 'INSEE, Les salaires dans le secteur privé en 2022, table T401B (published 29 Aug 2024): mean annual gross pay per full-time equivalent in the private sector, département Bouches-du-Rhône, €41,035 ÷ 12'
        },
        rent: {
          v: 803,
          cur: 'EUR',
          year: 2026,
          area: 'city',
          tag: 'anecdotal',
          src: 'https://www.numbeo.com/cost-of-living/in/Marseille',
          by: 'Numbeo (crowd-sourced; 311 entries by 28 contributors in the past 12 months), one-bedroom flat in the city centre, average, Marseille',
          seen: '2026-10-03'
        }
      },
      programmes: []
    },
    {
      id: 'lille', name: 'Lille', lat: 50.63, lon: 3.06,
      knownFor: 'A metropolitan region of over a million jobs on the Belgian border, third in France for finance jobs',
      why: ['fr-lille', 'fr-pay-lille', 'fr-lille-hq', 'fr-lille-emp'],
      sectors: ['Retail', 'Banking', 'Logistics'],
      employers: [
        { t: 'Information and communication employers', note: '35,140 jobs (2022)', c: 'fr-lille' },
        { t: 'Finance and insurance employers', note: '32,260 jobs (2022)', c: 'fr-lille' },
        { name: 'Auchan, Decathlon and Leroy Merlin', note: 'headquarters in the Lille metropolis', c: 'fr-lille-hq' },
        { t: 'Lille’s start-up ecosystem', note: 'ecosystem value $4 billion', c: 'fr-lille-sg' }
      ],
      demand: {
        business: ['strong', 'fr-lille-hq', 'fr-lille-emp'],
        finance: ['strong', 'fr-lille'],
        it: ['strong', 'fr-lille-emp', 'fr-lille'],
        economics: 'gap', accounting: 'gap', management: 'gap', marketing: 'gap', logistics: 'gap', analytics: 'gap', software: 'gap', datasci: 'gap', ai: 'gap', cs: 'gap', bigdata: 'gap'
      },
      standing: [
        { f: 'finance', s: [4, 2, 1], c: ['fr-lille-emp', 'fr-lille'] },
        { f: 'business', s: [4, 2, 1], c: ['fr-lille-hq', 'fr-lille-emp'] },
        { f: 'it', s: [4, 2, 1], c: ['fr-lille-emp', 'fr-lille'] }
      ],
      metrics: {
        pop: {
          v: 2612965,
          year: 2023,
          area: 'metro',
          tag: 'data',
          src: 'https://ec.europa.eu/eurostat/databrowser/view/met_pjanaggr3/default/table',
          by: 'Eurostat, population on 1 January by metropolitan region (met_pjanaggr3), Lille - Dunkerque - Valenciennes',
          seen: '2026-10-03'
        },
        gdp: {
          v: 85.9,
          cur: 'EUR',
          year: 2021,
          area: 'metro',
          tag: 'data',
          src: 'https://ec.europa.eu/eurostat/databrowser/view/met_10r_3gdp/default/table',
          by: 'Eurostat, GDP at current market prices by metropolitan region (met_10r_3gdp), Lille - Dunkerque - Valenciennes, million euro ÷ 1,000',
          seen: '2026-10-03'
        },
        wage: {
          tag: 'data',
          seen: '2026-10-03',
          v: 3218,
          cur: 'EUR',
          basis: 'mean',
          year: 2022,
          area: 'region',
          src: 'https://www.insee.fr/fr/statistiques/8219475',
          by: 'INSEE, Les salaires dans le secteur privé en 2022, table T401B (published 29 Aug 2024): mean annual gross pay per full-time equivalent in the private sector, département Nord, €38,619 ÷ 12'
        },
        rent: {
          v: 821,
          cur: 'EUR',
          year: 2026,
          area: 'city',
          tag: 'anecdotal',
          src: 'https://www.numbeo.com/cost-of-living/in/Lille',
          by: 'Numbeo (crowd-sourced; 173 entries by 34 contributors in the past 12 months), one-bedroom flat in the city centre, average, Lille',
          seen: '2026-10-03'
        }
      },
      programmes: []
    },
    {
      id: 'bordeaux', name: 'Bordeaux', lat: 44.84, lon: -0.58,
      knownFor: 'A metropolitan region of about 800,000 jobs in the south-west',
      why: ['fr-bordeaux', 'fr-pay-bordeaux', 'fr-bdx-emp'],
      sectors: ['Aerospace', 'Agriculture and food', 'Tourism'],
      employers: [
        { t: 'Information and communication employers', note: '31,470 jobs (2022)', c: 'fr-bordeaux' },
        { t: 'Finance and insurance employers', note: '25,090 jobs (2022)', c: 'fr-bordeaux' },
        { t: 'Gironde’s finance, real estate and business-services employers', note: '169,600 jobs (2023)', c: 'fr-bdx-emp' },
        { t: 'Bordeaux’s start-up ecosystem', note: 'ecosystem value $1 billion', c: 'fr-bdx-sg' }
      ],
      demand: {
        finance: ['strong', 'fr-bdx-emp', 'fr-bordeaux'],
        business: 'gap', economics: 'gap', accounting: 'gap', management: 'gap', marketing: 'gap', logistics: 'gap', analytics: 'gap', it: 'gap', software: 'gap', datasci: 'gap', ai: 'gap', cs: 'gap', bigdata: 'gap'
      },
      standing: [
        { f: 'finance', s: [4, 2, 1], c: ['fr-bdx-emp', 'fr-bordeaux'] }
      ],
      metrics: {
        pop: {
          v: 1690231,
          year: 2023,
          area: 'metro',
          tag: 'data',
          src: 'https://ec.europa.eu/eurostat/databrowser/view/met_pjanaggr3/default/table',
          by: 'Eurostat, population on 1 January by metropolitan region (met_pjanaggr3), Bordeaux',
          seen: '2026-10-03'
        },
        gdp: {
          v: 61.3,
          cur: 'EUR',
          year: 2021,
          area: 'metro',
          tag: 'data',
          src: 'https://ec.europa.eu/eurostat/databrowser/view/met_10r_3gdp/default/table',
          by: 'Eurostat, GDP at current market prices by metropolitan region (met_10r_3gdp), Bordeaux, million euro ÷ 1,000',
          seen: '2026-10-03'
        },
        wage: {
          tag: 'data',
          seen: '2026-10-03',
          v: 3251,
          cur: 'EUR',
          basis: 'mean',
          year: 2022,
          area: 'region',
          src: 'https://www.insee.fr/fr/statistiques/8219475',
          by: 'INSEE, Les salaires dans le secteur privé en 2022, table T401B (published 29 Aug 2024): mean annual gross pay per full-time equivalent in the private sector, département Gironde, €39,009 ÷ 12'
        },
        rent: {
          v: 828,
          cur: 'EUR',
          year: 2026,
          area: 'city',
          tag: 'anecdotal',
          src: 'https://www.numbeo.com/cost-of-living/in/Bordeaux',
          by: 'Numbeo (crowd-sourced; 258 entries by 34 contributors in the past 12 months), one-bedroom flat in the city centre, average, Bordeaux',
          seen: '2026-10-03'
        }
      },
      programmes: []
    },
    {
      id: 'nantes', name: 'Nantes', lat: 47.22, lon: -1.55,
      knownFor: 'A metropolitan region of about 700,000 jobs on the Atlantic side',
      why: ['fr-nantes', 'fr-pay-nantes', 'fr-nan-emp'],
      sectors: ['Aerospace', 'Technology', 'Agriculture and food'],
      employers: [
        { t: 'Information and communication employers', note: '37,570 jobs (2022)', c: 'fr-nantes' },
        { t: 'Finance and insurance employers', note: '22,230 jobs (2022)', c: 'fr-nantes' },
        {
          t: 'Loire-Atlantique’s information and communication employers',
          note: '42,900 jobs (2023), fifth among French départements',
          c: 'fr-nan-emp'
        }
      ],
      demand: {
        it: ['strong', 'fr-nan-emp', 'fr-nantes'],
        business: 'gap', finance: 'gap', economics: 'gap', accounting: 'gap', management: 'gap', marketing: 'gap', logistics: 'gap', analytics: 'gap', software: 'gap', datasci: 'gap', ai: 'gap', cs: 'gap', bigdata: 'gap'
      },
      standing: [
        { f: 'it', s: [4, 2, 1], c: ['fr-nan-emp', 'fr-nantes'] }
      ],
      metrics: {
        pop: {
          v: 1488876,
          year: 2023,
          area: 'metro',
          tag: 'data',
          src: 'https://ec.europa.eu/eurostat/databrowser/view/met_pjanaggr3/default/table',
          by: 'Eurostat, population on 1 January by metropolitan region (met_pjanaggr3), Nantes',
          seen: '2026-10-03'
        },
        gdp: {
          v: 54.8,
          cur: 'EUR',
          year: 2021,
          area: 'metro',
          tag: 'data',
          src: 'https://ec.europa.eu/eurostat/databrowser/view/met_10r_3gdp/default/table',
          by: 'Eurostat, GDP at current market prices by metropolitan region (met_10r_3gdp), Nantes, million euro ÷ 1,000',
          seen: '2026-10-03'
        },
        wage: {
          tag: 'data',
          seen: '2026-10-03',
          v: 3267,
          cur: 'EUR',
          basis: 'mean',
          year: 2022,
          area: 'region',
          src: 'https://www.insee.fr/fr/statistiques/8219475',
          by: 'INSEE, Les salaires dans le secteur privé en 2022, table T401B (published 29 Aug 2024): mean annual gross pay per full-time equivalent in the private sector, département Loire-Atlantique, €39,208 ÷ 12'
        },
        rent: {
          v: 724,
          cur: 'EUR',
          year: 2026,
          area: 'city',
          tag: 'anecdotal',
          src: 'https://www.numbeo.com/cost-of-living/in/Nantes',
          by: 'Numbeo (crowd-sourced), one-bedroom flat in the city centre, average, Nantes',
          seen: '2026-10-03'
        }
      },
      programmes: []
    },
    {
      id: 'strasbourg', name: 'Strasbourg', lat: 48.57, lon: 7.75,
      knownFor: 'A border city on the Rhine, seat of European institutions',
      why: ['fr-strasbourg', 'fr-pay-strasbourg', 'fr-str-emp'],
      sectors: ['Public sector', 'Banking', 'Pharmaceuticals'],
      employers: [
        { t: 'Information and communication employers', note: '14,110 jobs (2022)', c: 'fr-strasbourg' },
        { t: 'Finance and insurance employers', note: '14,740 jobs (2022)', c: 'fr-strasbourg' },
        { t: 'Bas-Rhin’s manufacturing employers', note: '68,500 jobs (2023), seventh among French départements', c: 'fr-str-emp' }
      ],
      demand: {
        business: 'gap', finance: 'gap', economics: 'gap', accounting: 'gap', management: 'gap', marketing: 'gap', logistics: 'gap', analytics: 'gap', it: 'gap', software: 'gap', datasci: 'gap', ai: 'gap', cs: 'gap', bigdata: 'gap'
      },
      standing: [
        { f: 'it', s: [3, 2, 1], c: ['fr-str-emp', 'fr-strasbourg'] },
        { f: 'finance', s: [3, 2, 1], c: ['fr-str-emp', 'fr-strasbourg'] }
      ],
      metrics: {
        pop: {
          v: 1164485,
          year: 2023,
          area: 'metro',
          tag: 'data',
          src: 'https://ec.europa.eu/eurostat/databrowser/view/met_pjanaggr3/default/table',
          by: 'Eurostat, population on 1 January by metropolitan region (met_pjanaggr3), Strasbourg',
          seen: '2026-10-03'
        },
        gdp: {
          v: 41.4,
          cur: 'EUR',
          year: 2021,
          area: 'metro',
          tag: 'data',
          src: 'https://ec.europa.eu/eurostat/databrowser/view/met_10r_3gdp/default/table',
          by: 'Eurostat, GDP at current market prices by metropolitan region (met_10r_3gdp), Strasbourg, million euro ÷ 1,000',
          seen: '2026-10-03'
        },
        wage: {
          tag: 'data',
          seen: '2026-10-03',
          v: 3327,
          cur: 'EUR',
          basis: 'mean',
          year: 2022,
          area: 'region',
          src: 'https://www.insee.fr/fr/statistiques/8219475',
          by: 'INSEE, Les salaires dans le secteur privé en 2022, table T401B (published 29 Aug 2024): mean annual gross pay per full-time equivalent in the private sector, département Bas-Rhin, €39,920 ÷ 12'
        },
        rent: {
          v: 888,
          cur: 'EUR',
          year: 2026,
          area: 'city',
          tag: 'anecdotal',
          src: 'https://www.numbeo.com/cost-of-living/in/Strasbourg',
          by: 'Numbeo (crowd-sourced; 429 entries by 38 contributors in the past 12 months), one-bedroom flat in the city centre, average, Strasbourg',
          seen: '2026-10-03'
        }
      },
      programmes: []
    },
    {
      id: 'grenoble', name: 'Grenoble', lat: 45.19, lon: 5.72,
      knownFor: 'An Alpine city of research labs and electronics',
      why: ['fr-grenoble', 'fr-pay-grenoble', 'fr-gre-emp', 'fr-gre-soitec'],
      sectors: ['Semiconductors', 'Higher education', 'Energy'],
      employers: [
        { t: 'Information and communication employers', note: '17,490 jobs (2022)', c: 'fr-grenoble' },
        { t: 'Finance and insurance employers', note: '9,420 jobs (2022)', c: 'fr-grenoble' },
        { name: 'Soitec', note: 'silicon-on-insulator wafers; more than 2,100 employees', c: 'fr-gre-soitec' },
        { t: 'Isère’s manufacturing employers', note: '74,500 jobs (2023), third among French départements', c: 'fr-gre-emp' }
      ],
      demand: {
        business: 'gap', finance: 'gap', economics: 'gap', accounting: 'gap', management: 'gap', marketing: 'gap', logistics: 'gap', analytics: 'gap', it: 'gap', software: 'gap', datasci: 'gap', ai: 'gap', cs: 'gap', bigdata: 'gap'
      },
      standing: [
        { f: 'it', s: [3, 2, 1], c: ['fr-gre-emp', 'fr-grenoble'] },
        { f: 'cs', s: [3, 2, 1], c: ['fr-gre-soitec', 'fr-gre-emp'] }
      ],
      metrics: {
        pop: {
          v: 1299578,
          year: 2023,
          area: 'metro',
          tag: 'data',
          src: 'https://ec.europa.eu/eurostat/databrowser/view/met_pjanaggr3/default/table',
          by: 'Eurostat, population on 1 January by metropolitan region (met_pjanaggr3), Grenoble',
          seen: '2026-10-03'
        },
        gdp: {
          v: 44.8,
          cur: 'EUR',
          year: 2021,
          area: 'metro',
          tag: 'data',
          src: 'https://ec.europa.eu/eurostat/databrowser/view/met_10r_3gdp/default/table',
          by: 'Eurostat, GDP at current market prices by metropolitan region (met_10r_3gdp), Grenoble, million euro ÷ 1,000',
          seen: '2026-10-03'
        },
        wage: {
          tag: 'data',
          seen: '2026-10-03',
          v: 3469,
          cur: 'EUR',
          basis: 'mean',
          year: 2022,
          area: 'region',
          src: 'https://www.insee.fr/fr/statistiques/8219475',
          by: 'INSEE, Les salaires dans le secteur privé en 2022, table T401B (published 29 Aug 2024): mean annual gross pay per full-time equivalent in the private sector, département Isère, €41,623 ÷ 12'
        },
        rent: {
          v: 735,
          cur: 'EUR',
          year: 2026,
          area: 'city',
          tag: 'anecdotal',
          src: 'https://www.numbeo.com/cost-of-living/in/Grenoble',
          by: 'Numbeo (crowd-sourced; 276 entries by 30 contributors in the past 12 months), one-bedroom flat in the city centre, average, Grenoble',
          seen: '2026-10-03'
        }
      },
      programmes: []
    }
  ],

  work: [
    { k: 'Language', c: ['fr-lang'] },
    { k: 'Recruiting calendar', c: ['fr-cal-stage', 'fr-cal-loreal', 'fr-cge'] },
    { k: 'Tax and net pay', c: ['fr-net'] },
    { k: 'Where demand is now', c: ['fr-apec-sector', 'fr-paris-emp'] },
    { k: 'Entry pay', c: ['fr-paris-emp'] },
    { k: 'Graduate labour market', c: ['fr-apec-young', 'fr-insee-unemp'] }
  ],

  briefs: [
    ['places/visas-and-work-rights.md', '§4 France: job-search card (RECE), Talent card'],
    ['places/student-logistics.md', 'work-hour limit, deposits, apprenticeships'],
    ['getting-in/recruiting-calendar.md', 'the final internship as the hiring channel'],
    ['places/countries-and-cities.md', '§3 finance after Brexit: Paris'],
    ['careers/luxury-and-fashion.md', 'Paris luxury houses'],
    ['money/salaries-and-roi.md', '§5 Paris net pay and rent'],
    ['countries/fr-france.md', 'Country brief: hubs, employers, pay and standing']
  ],
  gaps: [
    'Entry pay by hub and by field was not found: the pay metric is INSEE’s mean gross pay per full-time equivalent in the private sector in 2022 for the département (about €3,466 a month for France), which includes experienced staff, excludes the public sector and is gross; the net-pay figure is the library’s calculation for Paris.',
    'Employment by sector is Eurostat’s count by département for 2023; the départements are larger or smaller than the cities (Hauts-de-Seine, which borders Paris, is counted separately), so Paris and Lyon are compared with their département, not their built-up area.',
    'Lyon’s 66,200 life-science jobs (Métropole de Lyon data) are not tied to a role family by any source read.',
    'Data science and analytics demand by city is not rated: no source read measures it. Headcounts for large employers (BNP Paribas, Société Générale, LVMH, L’Oréal) come from the Fortune list quoted by the Paris Region agency, because no figure from the companies themselves was read.',
    'Sophia Antipolis has no city statistics: its population, output and rent are those of the Nice metropolitan region and city, and no named employer there was read in full.',
    'No family is rated in Strasbourg or Grenoble: their départements rank only eleventh to sixteenth in France for information-and-communication or finance jobs, and no named employer with a headquarters or major site there was read in full; no university or business-school ranking was sourced for any French hub.'
  ],

  claims: {
    'fr-cal-stage': {
      t: 'Paris stage applications run in two waves: September to November for starts in January or February, and February to April for starts in July or August.',
      tag: 'practitioner consensus',
      src: 'research/getting-in/recruiting-calendar.md',
      by: 'Admetia research library, getting-in/recruiting-calendar.md §3.1 (Paris: césure and stage de fin d’études)',
      seen: '2026-10-08'
    },
    'fr-cal-loreal': {
      t: 'In early October 2026 L’Oréal was already advertising six-month Paris internships starting in January 2027, and accepts at most three applications in any 30 days.',
      tag: 'employer-stated',
      src: 'https://careers.loreal.com/en/internship-apprenticeship',
      by: 'L’Oréal careers, internships and apprenticeships',
      seen: '2026-10-08'
    },
    'fr-apec-sector': {
      t: 'Apec counts hiring of managers at about 294,500 contracts in 2025, down 3%; hires in IT fell from about 71,920 in 2023 to 57,000 in 2025 and consulting fell 13% over the same two years, while health and social care stayed dynamic and construction rose 3%; Apec forecasts a return above 300,000 in 2026.',
      tag: 'data',
      src: 'https://www.letudiant.fr/jobsstages/les-recrutements-de-jeunes-cadres-encore-en-baisse-en-2025-selon-l-apec.html',
      by: 'Apec, as reported by L’Étudiant (2 April 2026)',
      seen: '2026-10-08'
    },
    'fr-apec-young': {
      t: 'Apec recorded a 5% fall in 2025 in hiring of managers with under six years of experience, after 9% in 2024, and expects only about 1% growth for them in 2026 against 5% overall.',
      tag: 'data',
      src: 'https://www.letudiant.fr/jobsstages/les-recrutements-de-jeunes-cadres-encore-en-baisse-en-2025-selon-l-apec.html',
      by: 'Apec, as reported by L’Étudiant (2 April 2026)',
      seen: '2026-10-08'
    },
    'fr-insee-unemp': {
      t: 'In 2023 unemployment was 14% among people one to four years out of initial education, 7% for those with Bac+5 or more and 42% for those with at most the lower-secondary certificate.',
      tag: 'data',
      src: 'https://www.insee.fr/fr/statistiques/fichier/8305516/BFE2025-F9.pdf',
      by: 'Insee, Formations et emploi, 2025 edition, sheet 2.3',
      seen: '2026-10-08'
    },
    'fr-lang': {
      t: 'About 4% of French job postings say French is not required; English-only entry is realistic mainly in investment banking, trading and tech.',
      tag: 'data',
      src: 'research/places/countries-and-cities.md',
      by: 'Indeed Hiring Lab (10 Oct 2024), via places/countries-and-cities.md §2',
      seen: '2026-09-30'
    },
    'fr-cge': {
      t: '42.3% of grande-école graduates in work were hired through their final internship or apprenticeship host.',
      tag: 'data',
      src: 'research/getting-in/recruiting-calendar.md',
      by: 'Conférence des grandes écoles, Enquête Insertion 2026, via getting-in/recruiting-calendar.md',
      seen: '2026-10-02'
    },
    'fr-net': {
      t: 'At €60,000 gross a single employee in Paris keeps about 71% after tax and social contributions.',
      tag: 'practitioner consensus',
      src: 'research/money/salaries-and-roi.md',
      by: 'Admetia research library, money/salaries-and-roi.md §5 (author calculation)',
      seen: '2026-10-02'
    },
    'fr-pld': {
      t: 'Paris La Défense has 200,000 employees and more than 2,800 companies, 41% of them foreign-owned and 75% of them headquarters; a 2025 EY–ULI ranking placed it first among Europe’s business districts.',
      tag: 'data',
      src: 'https://www.parisladefense.com/sites/default/files/04.PDF/GUIDES/Entreprise/2026-guide_entreprises_pld_fr.pdf',
      by: 'Paris La Défense (public body), Guide des entreprises, Mar 2026',
      seen: '2026-10-02'
    },
    'fr-ey': {
      t: 'Paris drew 30 foreign finance investment projects in 2025, up from 23, and investors ranked it the most attractive city for financial-services investment over the next three years.',
      tag: 'data',
      src: 'research/places/countries-and-cities.md',
      by: 'EY European Attractiveness Survey for Financial Services (Jun 2026), via places/countries-and-cities.md §3',
      seen: '2026-09-30'
    },
    'fr-stationf': {
      t: 'STATION F calls itself the world’s biggest start-up campus, with more than 1,000 start-ups on site and more than €1 billion raised a year.',
      tag: 'employer-stated',
      src: 'https://stationf.co/',
      by: 'STATION F',
      seen: '2026-10-02'
    },
    'fr-airbus': {
      t: 'Airbus has its headquarters and the final assembly lines for all its commercial aircraft in France, where it employs more than 56,000 people; Toulouse is the country’s largest industrial site.',
      tag: 'employer-stated',
      src: 'https://www.airbus.com/en/about-us/our-worldwide-presence/airbus-in-europe/airbus-in-france',
      by: 'Airbus in France',
      seen: '2026-10-02'
    },
    'fr-sophia': {
      t: 'Sophia Antipolis calls itself Europe’s leading technology park; it creates more than 1,000 jobs a year in AI, biotechnology and connected vehicles.',
      tag: 'employer-stated',
      src: 'https://www.sophia-antipolis.fr/en/the-technopole/',
      by: 'Sophia Antipolis technopole',
      seen: '2026-10-02'
    },
    'fr-lyon': {
      t: 'Eurostat counts 1,087,700 people in work in the Lyon metropolitan region in 2022: 57,800 in information and communication (second in France, after Paris) and 30,970 in finance and insurance. The region’s GDP was €97.3 billion in 2021.',
      tag: 'data',
      src: 'https://ec.europa.eu/eurostat/databrowser/view/met_10r_3emp/default/table?lang=en',
      by: 'Eurostat, metropolitan regions: employment by activity (met_10r_3emp) and GDP (met_10r_3gdp)',
      seen: '2026-10-03'
    },
    'fr-marseille': {
      t: 'Eurostat counts 1,407,900 people in work in the Marseille metropolitan region in 2022: 36,700 in information and communication and 32,380 in finance and insurance (second in France, after Paris). The region’s GDP was €125.4 billion in 2021.',
      tag: 'data',
      src: 'https://ec.europa.eu/eurostat/databrowser/view/met_10r_3emp/default/table?lang=en',
      by: 'Eurostat, metropolitan regions: employment by activity (met_10r_3emp) and GDP (met_10r_3gdp)',
      seen: '2026-10-03'
    },
    'fr-lille': {
      t: 'Eurostat counts 1,118,400 people in work in the Lille–Dunkirk–Valenciennes metropolitan region in 2022: 35,140 in information and communication and 32,260 in finance and insurance (third in France, after Paris and Marseille). The region’s GDP was €85.9 billion in 2021.',
      tag: 'data',
      src: 'https://ec.europa.eu/eurostat/databrowser/view/met_10r_3emp/default/table?lang=en',
      by: 'Eurostat, metropolitan regions: employment by activity (met_10r_3emp) and GDP (met_10r_3gdp)',
      seen: '2026-10-03'
    },
    'fr-bordeaux': {
      t: 'Eurostat counts 809,050 people in work in the Bordeaux metropolitan region in 2022: 31,470 in information and communication and 25,090 in finance and insurance. The region’s GDP was €61.3 billion in 2021.',
      tag: 'data',
      src: 'https://ec.europa.eu/eurostat/databrowser/view/met_10r_3emp/default/table?lang=en',
      by: 'Eurostat, metropolitan regions: employment by activity (met_10r_3emp) and GDP (met_10r_3gdp)',
      seen: '2026-10-03'
    },
    'fr-nantes': {
      t: 'Eurostat counts 716,700 people in work in the Nantes metropolitan region in 2022: 37,570 in information and communication and 22,230 in finance and insurance. The region’s GDP was €54.8 billion in 2021.',
      tag: 'data',
      src: 'https://ec.europa.eu/eurostat/databrowser/view/met_10r_3emp/default/table?lang=en',
      by: 'Eurostat, metropolitan regions: employment by activity (met_10r_3emp) and GDP (met_10r_3gdp)',
      seen: '2026-10-03'
    },
    'fr-strasbourg': {
      t: 'Eurostat counts 528,640 people in work in the Strasbourg metropolitan region in 2022: 14,110 in information and communication and 14,740 in finance and insurance. The region’s GDP was €41.4 billion in 2021.',
      tag: 'data',
      src: 'https://ec.europa.eu/eurostat/databrowser/view/met_10r_3emp/default/table?lang=en',
      by: 'Eurostat, metropolitan regions: employment by activity (met_10r_3emp) and GDP (met_10r_3gdp)',
      seen: '2026-10-03'
    },
    'fr-grenoble': {
      t: 'Eurostat counts 557,530 people in work in the Grenoble metropolitan region in 2022: 17,490 in information and communication and 9,420 in finance and insurance. The region’s GDP was €44.8 billion in 2021.',
      tag: 'data',
      src: 'https://ec.europa.eu/eurostat/databrowser/view/met_10r_3emp/default/table?lang=en',
      by: 'Eurostat, metropolitan regions: employment by activity (met_10r_3emp) and GDP (met_10r_3gdp)',
      seen: '2026-10-03'
    },
    'fr-pay-paris': {
      t: 'In Paris the mean gross pay per full-time equivalent in the private sector in 2022 was €68,381 a year in information and communication and €104,003 in finance and insurance, against €59,881 and €66,925 across France.',
      tag: 'data',
      src: 'https://www.insee.fr/fr/statistiques/8219475',
      by: 'INSEE, Les salaires dans le secteur privé en 2022, table T402 (published 29 Aug 2024): mean annual gross pay per full-time equivalent in the private sector by sector (JZ information and communication, KZ finance and insurance), département Paris',
      seen: '2026-10-03'
    },
    'fr-pay-toulouse': {
      t: 'In Haute-Garonne the mean gross pay per full-time equivalent in the private sector in 2022 was €50,562 a year in information and communication and €54,540 in finance and insurance, against €59,881 and €66,925 across France.',
      tag: 'data',
      src: 'https://www.insee.fr/fr/statistiques/8219475',
      by: 'INSEE, Les salaires dans le secteur privé en 2022, table T402 (published 29 Aug 2024): mean annual gross pay per full-time equivalent in the private sector by sector (JZ information and communication, KZ finance and insurance), département Haute-Garonne',
      seen: '2026-10-03'
    },
    'fr-pay-sophia': {
      t: 'In Alpes-Maritimes the mean gross pay per full-time equivalent in the private sector in 2022 was €64,742 a year in information and communication and €52,986 in finance and insurance, against €59,881 and €66,925 across France.',
      tag: 'data',
      src: 'https://www.insee.fr/fr/statistiques/8219475',
      by: 'INSEE, Les salaires dans le secteur privé en 2022, table T402 (published 29 Aug 2024): mean annual gross pay per full-time equivalent in the private sector by sector (JZ information and communication, KZ finance and insurance), département Alpes-Maritimes',
      seen: '2026-10-03'
    },
    'fr-pay-lyon': {
      t: 'In Rhône the mean gross pay per full-time equivalent in the private sector in 2022 was €53,320 a year in information and communication and €60,271 in finance and insurance, against €59,881 and €66,925 across France.',
      tag: 'data',
      src: 'https://www.insee.fr/fr/statistiques/8219475',
      by: 'INSEE, Les salaires dans le secteur privé en 2022, table T402 (published 29 Aug 2024): mean annual gross pay per full-time equivalent in the private sector by sector (JZ information and communication, KZ finance and insurance), département Rhône',
      seen: '2026-10-03'
    },
    'fr-pay-marseille': {
      t: 'In Bouches-du-Rhône the mean gross pay per full-time equivalent in the private sector in 2022 was €52,581 a year in information and communication and €57,786 in finance and insurance, against €59,881 and €66,925 across France.',
      tag: 'data',
      src: 'https://www.insee.fr/fr/statistiques/8219475',
      by: 'INSEE, Les salaires dans le secteur privé en 2022, table T402 (published 29 Aug 2024): mean annual gross pay per full-time equivalent in the private sector by sector (JZ information and communication, KZ finance and insurance), département Bouches-du-Rhône',
      seen: '2026-10-03'
    },
    'fr-pay-lille': {
      t: 'In Nord the mean gross pay per full-time equivalent in the private sector in 2022 was €47,387 a year in information and communication and €53,162 in finance and insurance, against €59,881 and €66,925 across France.',
      tag: 'data',
      src: 'https://www.insee.fr/fr/statistiques/8219475',
      by: 'INSEE, Les salaires dans le secteur privé en 2022, table T402 (published 29 Aug 2024): mean annual gross pay per full-time equivalent in the private sector by sector (JZ information and communication, KZ finance and insurance), département Nord',
      seen: '2026-10-03'
    },
    'fr-pay-bordeaux': {
      t: 'In Gironde the mean gross pay per full-time equivalent in the private sector in 2022 was €51,302 a year in information and communication and €53,603 in finance and insurance, against €59,881 and €66,925 across France.',
      tag: 'data',
      src: 'https://www.insee.fr/fr/statistiques/8219475',
      by: 'INSEE, Les salaires dans le secteur privé en 2022, table T402 (published 29 Aug 2024): mean annual gross pay per full-time equivalent in the private sector by sector (JZ information and communication, KZ finance and insurance), département Gironde',
      seen: '2026-10-03'
    },
    'fr-pay-nantes': {
      t: 'In Loire-Atlantique the mean gross pay per full-time equivalent in the private sector in 2022 was €49,150 a year in information and communication and €54,156 in finance and insurance, against €59,881 and €66,925 across France.',
      tag: 'data',
      src: 'https://www.insee.fr/fr/statistiques/8219475',
      by: 'INSEE, Les salaires dans le secteur privé en 2022, table T402 (published 29 Aug 2024): mean annual gross pay per full-time equivalent in the private sector by sector (JZ information and communication, KZ finance and insurance), département Loire-Atlantique',
      seen: '2026-10-03'
    },
    'fr-pay-strasbourg': {
      t: 'In Bas-Rhin the mean gross pay per full-time equivalent in the private sector in 2022 was €51,866 a year in information and communication and €57,773 in finance and insurance, against €59,881 and €66,925 across France.',
      tag: 'data',
      src: 'https://www.insee.fr/fr/statistiques/8219475',
      by: 'INSEE, Les salaires dans le secteur privé en 2022, table T402 (published 29 Aug 2024): mean annual gross pay per full-time equivalent in the private sector by sector (JZ information and communication, KZ finance and insurance), département Bas-Rhin',
      seen: '2026-10-03'
    },
    'fr-pay-grenoble': {
      t: 'In Isère the mean gross pay per full-time equivalent in the private sector in 2022 was €53,956 a year in information and communication and €54,551 in finance and insurance, against €59,881 and €66,925 across France.',
      tag: 'data',
      src: 'https://www.insee.fr/fr/statistiques/8219475',
      by: 'INSEE, Les salaires dans le secteur privé en 2022, table T402 (published 29 Aug 2024): mean annual gross pay per full-time equivalent in the private sector by sector (JZ information and communication, KZ finance and insurance), département Isère',
      seen: '2026-10-03'
    },
    'fr-gfci': {
      t: 'The Global Financial Centres Index 40 (September 2026) ranks Paris 23rd in the world (down 4 places) and sixth among Western European centres, behind London, Zurich, Geneva, Luxembourg and Lugano.',
      tag: 'practitioner consensus',
      src: 'https://www.longfinance.net/media/documents/GFCI_40_Report_2026.09.16_v1.2.pdf',
      by: 'Z/Yen and the China Development Institute, GFCI 40, 16 Sep 2026, Tables 1 and 8',
      seen: '2026-10-03'
    },
    'fr-paris-sg': {
      t: 'Startup Genome’s 2026 report ranks Paris 13th among the world’s start-up ecosystems and second in Europe (also second in Europe for talent, and in the world’s top ten for funding momentum and for its AI-native cluster), with an ecosystem value of $169 billion (Europe’s average $14.3 billion) and $47 billion of venture funding in 2021–2025.',
      tag: 'practitioner consensus',
      src: 'https://startupgenome.com/ecosystems/paris',
      by: 'Startup Genome, Global Startup Ecosystem Report 2026, Paris page',
      seen: '2026-10-03'
    },
    'fr-paris-emp': {
      t: 'Paris (the city département) has 2,237,200 jobs (2023), 245,500 of them in information and communication and 139,400 in finance and insurance; the neighbouring Hauts-de-Seine has 1,267,900 jobs, 204,200 in information and communication and 87,100 in finance and insurance. Together they hold 39% of France’s information-and-communication jobs and 28% of its finance and insurance jobs; they are also the first and second of 697 EU regions at this level (NUTS 3) for information-and-communication jobs, and the first and fourth for finance and insurance. The next départements are Rhône with 65,800 jobs in information and communication and Nord with 31,600 in finance and insurance.',
      tag: 'data',
      src: 'https://ec.europa.eu/eurostat/databrowser/view/nama_10r_3empers/default/table',
      by: 'Eurostat, employment (thousand persons) by NUTS 3 region and activity (nama_10r_3empers), 2023, NUTS 3 FR101, FR105 and FRK26; ranks computed over all 697 NUTS 3 regions with data',
      seen: '2026-10-03'
    },
    'fr-paris-fortune': {
      t: 'Choose Paris Region and the Paris Île-de-France Chamber of Commerce, citing Fortune’s Global 500 of July 2024, call the Paris Region Europe’s highest concentration of Fortune Global 500 headquarters; its ten largest are TotalEnergies (102,579 employees), Électricité de France (171,863), BNP Paribas (182,656), Société Générale (124,089), Crédit Agricole (75,125), Christian Dior (197,141), Carrefour (305,333), AXA (94,705), ENGIE (97,297) and Groupe BPCE (97,835).',
      tag: 'practitioner consensus',
      src: 'https://www.cci-paris-idf.fr/sites/default/files/2025-03/PRFF2025-Europe-Premier-Hub-for-Business-and-Innovation.pdf',
      by: 'CCI Paris Île-de-France and Choose Paris Region, Paris Region Facts & Figures 2025, page "Europe’s Premier Hub for Business and Innovation" (Fortune Global 500, July 2024)',
      seen: '2026-10-03'
    },
    'fr-paris-ai': {
      t: 'Startup Genome’s Paris page records that the May 2025 Choose France Summit secured 53 investment projects worth $46.9 billion, with AI infrastructure and data centres a substantial share (Prologis alone $7.4 billion for a Paris-region data centre), and that in January 2026 the World Economic Forum and VivaTech launched a European Centre for AI Excellence in Paris.',
      tag: 'practitioner consensus',
      src: 'https://startupgenome.com/ecosystems/paris',
      by: 'Startup Genome, Global Startup Ecosystem Report 2026, Paris page',
      seen: '2026-10-03'
    },
    'fr-paris-kearney': {
      t: 'Kearney’s 2025 Global Cities Index (released 5 November 2025) ranks Paris third in the world, after New York and London and ahead of Tokyo and Singapore; its forward-looking Outlook ranking put Munich first.',
      tag: 'practitioner consensus',
      src: 'https://www.prnewswire.com/news-releases/kearney-2025-global-cities-report-302604981.html',
      by: 'Kearney, 2025 Global Cities Report, press release',
      seen: '2026-10-03'
    },
    'fr-tls-emp': {
      t: 'Haute-Garonne, the département of Toulouse, has 751,800 jobs (2023), 74,300 of them in manufacturing, 47,400 in information and communication (fourth among France’s 101 départements) and 176,400 in finance, real estate and professional and business services.',
      tag: 'data',
      src: 'https://ec.europa.eu/eurostat/databrowser/view/nama_10r_3empers/default/table',
      by: 'Eurostat, employment (thousand persons) by NUTS 3 region and activity (nama_10r_3empers), 2023, NUTS 3 FRJ23',
      seen: '2026-10-03'
    },
    'fr-tls-tas': {
      t: 'Thales Alenia Space’s French headquarters is in Toulouse, the largest of its nine industrial facilities in Europe, with more than 2,800 people working there.',
      tag: 'employer-stated',
      src: 'https://www.thalesaleniaspace.com/en/news/thales-alenia-spaces-toulouse-plant-40',
      by: 'Thales Alenia Space, news item on its Toulouse plant (25 Sep 2023)',
      seen: '2026-10-03'
    },
    'fr-tls-space': {
      t: 'Toulouse’s economic development agency counts 16,000 jobs in the Toulouse space sector, which it describes as France’s first region for space jobs and a quarter of European space jobs, and says CNES, the French space agency, has 1,700 employees there.',
      tag: 'data',
      src: 'https://www.invest-in-toulouse.fr/en/?p=20066',
      by: 'Invest in Toulouse, space sector page (figures undated; CNES budget cited for 2024)',
      seen: '2026-10-03'
    },
    'fr-tls-sg': {
      t: 'Startup Genome’s 2026 report puts the value of Toulouse’s start-up ecosystem at $2 billion (Europe’s average $14.3 billion), with $245 million of seed and Series A funding in H2 2023–2025.',
      tag: 'practitioner consensus',
      src: 'https://startupgenome.com/ecosystems/toulouse',
      by: 'Startup Genome, Global Startup Ecosystem Report 2026, Toulouse page',
      seen: '2026-10-03'
    },
    'fr-sophia-emp': {
      t: 'Alpes-Maritimes, the département of Sophia Antipolis and Nice, has 515,100 jobs (2023), 23,700 of them in information and communication (twelfth among France’s 101 départements) and only 27,100 in manufacturing.',
      tag: 'data',
      src: 'https://ec.europa.eu/eurostat/databrowser/view/nama_10r_3empers/default/table',
      by: 'Eurostat, employment (thousand persons) by NUTS 3 region and activity (nama_10r_3empers), 2023, NUTS 3 FRL03',
      seen: '2026-10-03'
    },
    'fr-lyon-emp': {
      t: 'Rhône, the département of Lyon, has 1,100,000 jobs (2023), fourth in France, with 65,800 in information and communication (third), 31,000 in finance and insurance (fourth) and 93,400 in manufacturing (second).',
      tag: 'data',
      src: 'https://ec.europa.eu/eurostat/databrowser/view/nama_10r_3empers/default/table',
      by: 'Eurostat, employment (thousand persons) by NUTS 3 region and activity (nama_10r_3empers), 2023, NUTS 3 FRK26; ranks over the 101 French départements',
      seen: '2026-10-03'
    },
    'fr-lyon-sg': {
      t: 'Startup Genome’s 2026 report puts the value of Lyon’s start-up ecosystem at $9 billion (Europe’s average $14.3 billion), with $539 million of seed and Series A funding in H2 2023–2025.',
      tag: 'practitioner consensus',
      src: 'https://startupgenome.com/ecosystems/lyon',
      by: 'Startup Genome, Global Startup Ecosystem Report 2026, Lyon page',
      seen: '2026-10-03'
    },
    'fr-mrs-emp': {
      t: 'Bouches-du-Rhône, the département of Marseille, has 996,400 jobs (2023), fifth in France, with 34,800 in information and communication, 23,800 in finance and insurance (sixth) and 222,400 in finance, real estate and professional and business services (fifth).',
      tag: 'data',
      src: 'https://ec.europa.eu/eurostat/databrowser/view/nama_10r_3empers/default/table',
      by: 'Eurostat, employment (thousand persons) by NUTS 3 region and activity (nama_10r_3empers), 2023, NUTS 3 FRL04; ranks over the 101 French départements',
      seen: '2026-10-03'
    },
    'fr-mrs-port': {
      t: 'In 2024 the port of Marseille handled 66.0 million tonnes of goods, the eighth-busiest of the EU’s 20 largest ports and the second in France after HAROPA (Le Havre and Rouen, 76.7 million); Dunkerque handled 36.9 million and Nantes Saint-Nazaire 25.4 million.',
      tag: 'data',
      src: 'https://ec.europa.eu/eurostat/databrowser/view/mar_mg_aa_pwhd/default/table',
      by: 'Eurostat, gross weight of goods handled in the top 20 EU ports (mar_mg_aa_pwhd), 2024',
      seen: '2026-10-03'
    },
    'fr-mrs-sg': {
      t: 'Startup Genome’s 2026 report puts the value of Marseille’s start-up ecosystem at $2 billion (Europe’s average $14.3 billion), with $217 million of seed and Series A funding in H2 2023–2025.',
      tag: 'practitioner consensus',
      src: 'https://startupgenome.com/ecosystems/marseille',
      by: 'Startup Genome, Global Startup Ecosystem Report 2026, Marseille page',
      seen: '2026-10-03'
    },
    'fr-lille-hq': {
      t: 'Hello Lille, the metropolis’s attractiveness agency, says the Lille metropolitan area has 558,000 employees and 136,000 students, more than 80 headquarters of retail brands and 40 distributors (including Auchan, Decathlon and Leroy Merlin), and the first concentration of international headquarters in France outside Paris (an EY and JLL study of 2021).',
      tag: 'data',
      src: 'https://hellolille.eu/app/uploads/lille-attractivite/2026/01/Hello-Les-Chiffres-2026-EN-1.pdf',
      by: 'Hello Lille, Les Chiffres 2026 (January 2026), pages 4–5 and 14–15',
      seen: '2026-10-03'
    },
    'fr-lille-emp': {
      t: 'Nord, the département of Lille, has 1,123,400 jobs (2023), third in France, with 106,900 in manufacturing (first), 38,600 in information and communication (sixth) and 31,600 in finance and insurance (third).',
      tag: 'data',
      src: 'https://ec.europa.eu/eurostat/databrowser/view/nama_10r_3empers/default/table',
      by: 'Eurostat, employment (thousand persons) by NUTS 3 region and activity (nama_10r_3empers), 2023, NUTS 3 FRE11; ranks over the 101 French départements',
      seen: '2026-10-03'
    },
    'fr-lille-sg': {
      t: 'Startup Genome’s 2026 report puts the value of Lille’s start-up ecosystem at $4 billion (Europe’s average $14.3 billion), with $143 million of seed and Series A funding in H2 2023–2025.',
      tag: 'practitioner consensus',
      src: 'https://startupgenome.com/ecosystems/lille',
      by: 'Startup Genome, Global Startup Ecosystem Report 2026, Lille page',
      seen: '2026-10-03'
    },
    'fr-bdx-emp': {
      t: 'Gironde, the département of Bordeaux, has 812,700 jobs (2023), sixth in France, with 35,500 in information and communication (seventh), 24,900 in finance and insurance (fifth) and 169,600 in finance, real estate and professional and business services (seventh).',
      tag: 'data',
      src: 'https://ec.europa.eu/eurostat/databrowser/view/nama_10r_3empers/default/table',
      by: 'Eurostat, employment (thousand persons) by NUTS 3 region and activity (nama_10r_3empers), 2023, NUTS 3 FRI12; ranks over the 101 French départements',
      seen: '2026-10-03'
    },
    'fr-bdx-sg': {
      t: 'Startup Genome’s 2026 report puts the value of Bordeaux’s start-up ecosystem at $1 billion (Europe’s average $14.3 billion), with $116 million of seed and Series A funding in H2 2023–2025.',
      tag: 'practitioner consensus',
      src: 'https://startupgenome.com/ecosystems/bordeaux',
      by: 'Startup Genome, Global Startup Ecosystem Report 2026, Bordeaux page',
      seen: '2026-10-03'
    },
    'fr-nan-emp': {
      t: 'Loire-Atlantique, the département of Nantes, has 728,400 jobs (2023), 74,300 of them in manufacturing (fifth in France), 42,900 in information and communication (fifth) and 21,900 in finance and insurance (eighth).',
      tag: 'data',
      src: 'https://ec.europa.eu/eurostat/databrowser/view/nama_10r_3empers/default/table',
      by: 'Eurostat, employment (thousand persons) by NUTS 3 region and activity (nama_10r_3empers), 2023, NUTS 3 FRG01; ranks over the 101 French départements',
      seen: '2026-10-03'
    },
    'fr-str-emp': {
      t: 'Bas-Rhin, the département of Strasbourg, has 532,900 jobs (2023), 68,500 of them in manufacturing (seventh in France), 16,100 in information and communication (sixteenth) and 14,600 in finance and insurance (eleventh).',
      tag: 'data',
      src: 'https://ec.europa.eu/eurostat/databrowser/view/nama_10r_3empers/default/table',
      by: 'Eurostat, employment (thousand persons) by NUTS 3 region and activity (nama_10r_3empers), 2023, NUTS 3 FRF11; ranks over the 101 French départements',
      seen: '2026-10-03'
    },
    'fr-gre-emp': {
      t: 'Isère, the département of Grenoble, has 561,400 jobs (2023), 74,500 of them in manufacturing (third in France) and 19,600 in information and communication (fifteenth).',
      tag: 'data',
      src: 'https://ec.europa.eu/eurostat/databrowser/view/nama_10r_3empers/default/table',
      by: 'Eurostat, employment (thousand persons) by NUTS 3 region and activity (nama_10r_3empers), 2023, NUTS 3 FRK24; ranks over the 101 French départements',
      seen: '2026-10-03'
    },
    'fr-gre-soitec': {
      t: 'Soitec, the maker of silicon-on-insulator wafers, reports more than 2,100 employees and about €600 million of turnover, and says its Smart Cut process was developed in Grenoble’s innovation hub.',
      tag: 'employer-stated',
      src: 'https://www.soitec.com/en/company',
      by: 'Soitec, company page, "Soitec at a glance"',
      seen: '2026-10-03'
    }
  }
});

if (window.I18N) I18N.add('it', {
  'Paris stage applications run in two waves: September to November for starts in January or February, and February to April for starts in July or August.':
    'Le candidature agli stage a Parigi seguono due ondate: da settembre a novembre per partenze a gennaio o febbraio, e da febbraio ad aprile per partenze a luglio o agosto.',
  'In early October 2026 L’Oréal was already advertising six-month Paris internships starting in January 2027, and accepts at most three applications in any 30 days.':
    'A inizio ottobre 2026 L’Oréal pubblicizzava già tirocini di sei mesi a Parigi con inizio a gennaio 2027, e accetta al massimo tre candidature in qualsiasi periodo di 30 giorni.',
  'Apec counts hiring of managers at about 294,500 contracts in 2025, down 3%; hires in IT fell from about 71,920 in 2023 to 57,000 in 2025 and consulting fell 13% over the same two years, while health and social care stayed dynamic and construction rose 3%; Apec forecasts a return above 300,000 in 2026.':
    'L’Apec conta le assunzioni di quadri in circa 294.500 contratti nel 2025, in calo del 3%; le assunzioni in IT sono scese da circa 71.920 nel 2023 a 57.000 nel 2025 e la consulenza è calata del 13% negli stessi due anni, mentre sanità e sociale sono rimasti dinamici e le costruzioni sono salite del 3%; l’Apec prevede un ritorno sopra 300.000 nel 2026.',
  'Apec recorded a 5% fall in 2025 in hiring of managers with under six years of experience, after 9% in 2024, and expects only about 1% growth for them in 2026 against 5% overall.':
    'L’Apec ha registrato nel 2025 un calo del 5% delle assunzioni di quadri con meno di sei anni di esperienza, dopo il 9% del 2024, e prevede per loro solo circa l’1% di crescita nel 2026 contro il 5% complessivo.',
  'In 2023 unemployment was 14% among people one to four years out of initial education, 7% for those with Bac+5 or more and 42% for those with at most the lower-secondary certificate.':
    'Nel 2023 la disoccupazione era del 14% tra chi aveva finito la formazione iniziale da uno a quattro anni, del 7% per chi ha il Bac+5 o più e del 42% per chi ha al più il brevetto della scuola media.',
  'Paris dominates: it holds the top two French départements for jobs in information and communication and in finance, Europe’s highest concentration of Fortune Global 500 headquarters, and the most attractive city for financial-services investment in Europe. Toulouse is Airbus’s home and a space and ICT centre, Lyon and Lille the main regional markets, Marseille a port city, Sophia Antipolis a technology park on the Riviera. French is expected in most jobs, and the final internship is the usual way into a first one.':
    'Parigi domina: ha i primi due dipartimenti francesi per posti nell’informazione e comunicazione e nella finanza, la maggiore concentrazione europea di sedi di aziende Fortune Global 500 e la città più attraente d’Europa per gli investimenti nei servizi finanziari. Tolosa è la casa di Airbus e un polo spaziale e ICT, Lione e Lilla i principali mercati regionali, Marsiglia una città portuale, Sophia Antipolis un parco tecnologico sulla Riviera. Nella maggior parte dei lavori ci si aspetta il francese, e lo stage finale è la via consueta verso il primo impiego.',
  'Corporate headquarters':
    'Sedi centrali',
  'Banking and insurance':
    'Banche e assicurazioni',
  'Luxury and fashion':
    'Lusso e moda',
  'Aerospace':
    'Aerospazio',
  'Start-ups':
    'Start-up',
  'Life sciences':
    'Scienze della vita',
  'Entry pay by hub and by field was not found: the pay metric is INSEE’s mean gross pay per full-time equivalent in the private sector in 2022 for the département (about €3,466 a month for France), which includes experienced staff, excludes the public sector and is gross; the net-pay figure is the library’s calculation for Paris.':
    'Lo stipendio d’ingresso per polo e per ambito non è stato trovato: la metrica salariale è la retribuzione lorda media per equivalente a tempo pieno nel settore privato nel 2022 dell’INSEE per il dipartimento (circa 3.466 € al mese per la Francia), che comprende personale con esperienza, esclude il settore pubblico ed è lorda; il dato netto è il calcolo della biblioteca per Parigi.',
  'Employment by sector is Eurostat’s count by département for 2023; the départements are larger or smaller than the cities (Hauts-de-Seine, which borders Paris, is counted separately), so Paris and Lyon are compared with their département, not their built-up area.':
    'L’occupazione per settore è il conteggio Eurostat per dipartimento del 2023; i dipartimenti sono più grandi o più piccoli delle città (Hauts-de-Seine, confinante con Parigi, è contato a parte), perciò Parigi e Lione sono confrontate con il loro dipartimento, non con l’area urbana.',
  'Lyon’s 66,200 life-science jobs (Métropole de Lyon data) are not tied to a role family by any source read.':
    'I 66.200 posti nelle scienze della vita di Lione (dati della Métropole de Lyon) non sono collegati a una famiglia professionale da nessuna fonte letta.',
  'Data science and analytics demand by city is not rated: no source read measures it. Headcounts for large employers (BNP Paribas, Société Générale, LVMH, L’Oréal) come from the Fortune list quoted by the Paris Region agency, because no figure from the companies themselves was read.':
    'La domanda di data science e analytics per città non è valutata: nessuna fonte letta la misura. Gli organici dei grandi datori di lavoro (BNP Paribas, Société Générale, LVMH, L’Oréal) provengono dalla classifica Fortune citata dall’agenzia della regione parigina, perché non è stato letto alcun dato delle aziende stesse.',
  'Sophia Antipolis has no city statistics: its population, output and rent are those of the Nice metropolitan region and city, and no named employer there was read in full.':
    'Sophia Antipolis non ha statistiche proprie: popolazione, prodotto e affitto sono quelli dell’area metropolitana e della città di Nizza, e nessun datore di lavoro citato è stato letto per intero.',
  'No family is rated in Strasbourg or Grenoble: their départements rank only eleventh to sixteenth in France for information-and-communication or finance jobs, and no named employer with a headquarters or major site there was read in full; no university or business-school ranking was sourced for any French hub.':
    'Nessuna famiglia è valutata a Strasburgo o a Grenoble: i loro dipartimenti sono solo dall’undicesimo al sedicesimo posto in Francia per posti nell’informazione e comunicazione o nella finanza, e nessun datore di lavoro citato con sede o grande stabilimento è stato letto per intero; per nessun polo francese è stata cercata una classifica di università o scuole di business.',
  '§4 France: job-search card (RECE), Talent card':
    '§4 Francia: carta per la ricerca di lavoro (RECE), carta Talent',
  'work-hour limit, deposits, apprenticeships':
    'limite di ore di lavoro, cauzioni, apprendistato',
  'the final internship as the hiring channel':
    'lo stage finale come canale di assunzione',
  '§3 finance after Brexit: Paris':
    '§3 la finanza dopo la Brexit: Parigi',
  'Paris luxury houses':
    'Le maison del lusso di Parigi',
  '§5 Paris net pay and rent':
    '§5 stipendio netto e affitto a Parigi',
  'Country brief: hubs, employers, pay and standing':
    'Dossier paese: poli, datori di lavoro, stipendi e posizionamento',
  'Corporate headquarters, finance, luxury and start-ups':
    'Sedi centrali, finanza, lusso e start-up',
  'Consulting':
    'Consulenza',
  '200,000 employees, 2,800 companies':
    '200.000 addetti, 2.800 aziende',
  'start-up campus, 1,000+ start-ups':
    'campus per start-up, oltre 1.000 start-up',
  'Paris Region headquarters; 102,579 employees (Fortune Global 500)':
    'sede nella regione parigina; 102.579 dipendenti (Fortune Global 500)',
  'Paris Region headquarters; 182,656 employees':
    'sede nella regione parigina; 182.656 dipendenti',
  'Paris Region headquarters; 124,089 employees':
    'sede nella regione parigina; 124.089 dipendenti',
  'Paris Region headquarters; 75,125 employees':
    'sede nella regione parigina; 75.125 dipendenti',
  'Paris Region headquarters; 94,705 employees (Fortune list); 156,000 employees and distributors on AXA’s own page':
    'sede nella regione parigina; 94.705 dipendenti (classifica Fortune); 156.000 dipendenti e distributori secondo il sito di AXA',
  'Paris Region headquarters; 197,141 employees (as listed by Fortune)':
    'sede nella regione parigina; 197.141 dipendenti (come indicato da Fortune)',
  'Paris Region headquarters; 171,863 and 97,297 employees':
    'sede nella regione parigina; 171.863 e 97.297 dipendenti',
  'Airbus’s headquarters and France’s aerospace industry':
    'La sede di Airbus e l’industria aerospaziale francese',
  'Space':
    'Spazio',
  'Engineering':
    'Ingegneria',
  'headquarters; final assembly lines; France’s largest industrial site':
    'sede centrale; linee di assemblaggio finale; il maggiore sito industriale francese',
  'French headquarters in Toulouse; more than 2,800 people':
    'sede francese a Tolosa; oltre 2.800 persone',
  'French space agency; 1,700 employees in Toulouse':
    'agenzia spaziale francese; 1.700 dipendenti a Tolosa',
  '16,000 jobs':
    '16.000 posti di lavoro',
  'Toulouse’s space sector':
    'Il settore spaziale di Tolosa',
  'ecosystem value $2 billion':
    'valore dell’ecosistema 2 miliardi di dollari',
  'Toulouse’s start-up ecosystem':
    'L’ecosistema start-up di Tolosa',
  'A technology park for AI, biotech and connected vehicles':
    'Un parco tecnologico per IA, biotecnologie e veicoli connessi',
  'Artificial intelligence':
    'Intelligenza artificiale',
  'Biotechnology':
    'Biotecnologie',
  'Connected vehicles':
    'Veicoli connessi',
  'Telecoms':
    'Telecomunicazioni',
  'over 1,000 new jobs a year':
    'oltre 1.000 nuovi posti all’anno',
  '23,700 jobs (2023)':
    '23.700 posti di lavoro (2023)',
  'Alpes-Maritimes’ information and communication employers':
    'I datori di lavoro dell’informazione e comunicazione delle Alpes-Maritimes',
  'France’s second metropolitan region for jobs in information and communication':
    'La seconda regione metropolitana francese per posti in informazione e comunicazione',
  '57,800 jobs (2022)':
    '57.800 posti (2022)',
  'Information and communication employers':
    'I datori di lavoro dell’informazione e comunicazione',
  '30,970 jobs (2022)':
    '30.970 posti (2022)',
  'Finance and insurance employers':
    'I datori di lavoro di finanza e assicurazioni',
  '93,400 jobs (2023), second among French départements':
    '93.400 posti di lavoro (2023), secondo tra i dipartimenti francesi',
  'Rhône’s manufacturing employers':
    'I datori di lavoro manifatturieri del Rodano',
  'ecosystem value $9 billion':
    'valore dell’ecosistema 9 miliardi di dollari',
  'Lyon’s start-up ecosystem':
    'L’ecosistema start-up di Lione',
  'France’s second metropolitan region for finance and insurance jobs, and its biggest port city':
    'La seconda regione metropolitana francese per posti in finanza e assicurazioni, e la sua maggiore città portuale',
  'Ports and logistics':
    'Porti e logistica',
  '36,700 jobs (2022)':
    '36.700 posti (2022)',
  '32,380 jobs (2022)':
    '32.380 posti (2022)',
  '66.0 million tonnes in 2024, eighth among the EU’s 20 largest ports':
    '66,0 milioni di tonnellate nel 2024, ottavo tra i 20 maggiori porti dell’UE',
  'Port of Marseille':
    'Porto di Marsiglia',
  'Marseille’s start-up ecosystem':
    'L’ecosistema start-up di Marsiglia',
  'A metropolitan region of over a million jobs on the Belgian border, third in France for finance jobs':
    'Una regione metropolitana di oltre un milione di posti al confine belga, terza in Francia per posti in finanza',
  '35,140 jobs (2022)':
    '35.140 posti (2022)',
  '32,260 jobs (2022)':
    '32.260 posti (2022)',
  'headquarters in the Lille metropolis':
    'sedi nell’area metropolitana di Lille',
  'ecosystem value $4 billion':
    'valore dell’ecosistema 4 miliardi di dollari',
  'Lille’s start-up ecosystem':
    'L’ecosistema start-up di Lilla',
  'A metropolitan region of about 800,000 jobs in the south-west':
    'Una regione metropolitana di circa 800.000 posti nel sud-ovest',
  '31,470 jobs (2022)':
    '31.470 posti (2022)',
  '25,090 jobs (2022)':
    '25.090 posti (2022)',
  '169,600 jobs (2023)':
    '169.600 posti di lavoro (2023)',
  'Gironde’s finance, real estate and business-services employers':
    'I datori di lavoro della Gironda in finanza, immobiliare e servizi alle imprese',
  'ecosystem value $1 billion':
    'valore dell’ecosistema 1 miliardo di dollari',
  'Bordeaux’s start-up ecosystem':
    'L’ecosistema start-up di Bordeaux',
  'A metropolitan region of about 700,000 jobs on the Atlantic side':
    'Una regione metropolitana di circa 700.000 posti sul versante atlantico',
  '37,570 jobs (2022)':
    '37.570 posti (2022)',
  '22,230 jobs (2022)':
    '22.230 posti (2022)',
  '42,900 jobs (2023), fifth among French départements':
    '42.900 posti di lavoro (2023), quinto tra i dipartimenti francesi',
  'Loire-Atlantique’s information and communication employers':
    'I datori di lavoro dell’informazione e comunicazione della Loira Atlantica',
  'A border city on the Rhine, seat of European institutions':
    'Una città di confine sul Reno, sede di istituzioni europee',
  '14,110 jobs (2022)':
    '14.110 posti (2022)',
  '14,740 jobs (2022)':
    '14.740 posti (2022)',
  '68,500 jobs (2023), seventh among French départements':
    '68.500 posti di lavoro (2023), settimo tra i dipartimenti francesi',
  'Bas-Rhin’s manufacturing employers':
    'I datori di lavoro manifatturieri del Basso Reno',
  'An Alpine city of research labs and electronics':
    'Una città alpina di laboratori di ricerca e di elettronica',
  '17,490 jobs (2022)':
    '17.490 posti (2022)',
  '9,420 jobs (2022)':
    '9.420 posti (2022)',
  'silicon-on-insulator wafers; more than 2,100 employees':
    'wafer di silicio su isolante; oltre 2.100 dipendenti',
  '74,500 jobs (2023), third among French départements':
    '74.500 posti di lavoro (2023), terzo tra i dipartimenti francesi',
  'Isère’s manufacturing employers':
    'I datori di lavoro manifatturieri dell’Isère',
  'Entry pay':
    'Stipendio d’ingresso',
  'About 4% of French job postings say French is not required; English-only entry is realistic mainly in investment banking, trading and tech.':
    'Circa il 4% degli annunci di lavoro francesi dice che il francese non è richiesto; entrare con il solo inglese è realistico soprattutto in investment banking, trading e tecnologia.',
  '42.3% of grande-école graduates in work were hired through their final internship or apprenticeship host.':
    'Il 42,3% dei laureati delle grandes écoles occupati è stato assunto dall’ente del proprio stage finale o apprendistato.',
  'At €60,000 gross a single employee in Paris keeps about 71% after tax and social contributions.':
    'Con 60.000 € lordi un dipendente single a Parigi tiene circa il 71% dopo imposte e contributi.',
  'Paris La Défense has 200,000 employees and more than 2,800 companies, 41% of them foreign-owned and 75% of them headquarters; a 2025 EY–ULI ranking placed it first among Europe’s business districts.':
    'Paris La Défense conta 200.000 addetti e oltre 2.800 aziende, il 41% di proprietà estera e il 75% sedi centrali; una classifica EY–ULI del 2025 l’ha posta al primo posto tra i quartieri d’affari europei.',
  'Paris drew 30 foreign finance investment projects in 2025, up from 23, and investors ranked it the most attractive city for financial-services investment over the next three years.':
    'Nel 2025 Parigi ha attirato 30 progetti di investimento estero nella finanza, contro 23, e gli investitori l’hanno indicata come la città più attraente per investire nei servizi finanziari nei prossimi tre anni.',
  'STATION F calls itself the world’s biggest start-up campus, with more than 1,000 start-ups on site and more than €1 billion raised a year.':
    'STATION F si definisce il maggiore campus per start-up del mondo, con oltre 1.000 start-up e oltre 1 miliardo di euro raccolto ogni anno.',
  'Airbus has its headquarters and the final assembly lines for all its commercial aircraft in France, where it employs more than 56,000 people; Toulouse is the country’s largest industrial site.':
    'Airbus ha in Francia la sede centrale e le linee di assemblaggio finale di tutti i suoi aerei commerciali, e vi impiega oltre 56.000 persone; Tolosa è il maggiore sito industriale del paese.',
  'Sophia Antipolis calls itself Europe’s leading technology park; it creates more than 1,000 jobs a year in AI, biotechnology and connected vehicles.':
    'Sophia Antipolis si definisce il principale parco tecnologico d’Europa; vi nascono oltre 1.000 posti all’anno in IA, biotecnologie e veicoli connessi.',
  'Eurostat counts 1,087,700 people in work in the Lyon metropolitan region in 2022: 57,800 in information and communication (second in France, after Paris) and 30,970 in finance and insurance. The region’s GDP was €97.3 billion in 2021.':
    'Eurostat conta 1.087.700 occupati nella regione metropolitana di Lione nel 2022: 57.800 nell’informazione e comunicazione (seconda in Francia, dopo Parigi) e 30.970 in finanza e assicurazioni. Il PIL della regione era di 97,3 miliardi di € nel 2021.',
  'Eurostat counts 1,407,900 people in work in the Marseille metropolitan region in 2022: 36,700 in information and communication and 32,380 in finance and insurance (second in France, after Paris). The region’s GDP was €125.4 billion in 2021.':
    'Eurostat conta 1.407.900 occupati nella regione metropolitana di Marsiglia nel 2022: 36.700 nell’informazione e comunicazione e 32.380 in finanza e assicurazioni (seconda in Francia, dopo Parigi). Il PIL della regione era di 125,4 miliardi di € nel 2021.',
  'Eurostat counts 1,118,400 people in work in the Lille–Dunkirk–Valenciennes metropolitan region in 2022: 35,140 in information and communication and 32,260 in finance and insurance (third in France, after Paris and Marseille). The region’s GDP was €85.9 billion in 2021.':
    'Eurostat conta 1.118.400 occupati nella regione metropolitana di Lilla–Dunkerque–Valenciennes nel 2022: 35.140 nell’informazione e comunicazione e 32.260 in finanza e assicurazioni (terza in Francia, dopo Parigi e Marsiglia). Il PIL della regione era di 85,9 miliardi di € nel 2021.',
  'Eurostat counts 809,050 people in work in the Bordeaux metropolitan region in 2022: 31,470 in information and communication and 25,090 in finance and insurance. The region’s GDP was €61.3 billion in 2021.':
    'Eurostat conta 809.050 occupati nella regione metropolitana di Bordeaux nel 2022: 31.470 nell’informazione e comunicazione e 25.090 in finanza e assicurazioni. Il PIL della regione era di 61,3 miliardi di € nel 2021.',
  'Eurostat counts 716,700 people in work in the Nantes metropolitan region in 2022: 37,570 in information and communication and 22,230 in finance and insurance. The region’s GDP was €54.8 billion in 2021.':
    'Eurostat conta 716.700 occupati nella regione metropolitana di Nantes nel 2022: 37.570 nell’informazione e comunicazione e 22.230 in finanza e assicurazioni. Il PIL della regione era di 54,8 miliardi di € nel 2021.',
  'Eurostat counts 528,640 people in work in the Strasbourg metropolitan region in 2022: 14,110 in information and communication and 14,740 in finance and insurance. The region’s GDP was €41.4 billion in 2021.':
    'Eurostat conta 528.640 occupati nella regione metropolitana di Strasburgo nel 2022: 14.110 nell’informazione e comunicazione e 14.740 in finanza e assicurazioni. Il PIL della regione era di 41,4 miliardi di € nel 2021.',
  'Eurostat counts 557,530 people in work in the Grenoble metropolitan region in 2022: 17,490 in information and communication and 9,420 in finance and insurance. The region’s GDP was €44.8 billion in 2021.':
    'Eurostat conta 557.530 occupati nella regione metropolitana di Grenoble nel 2022: 17.490 nell’informazione e comunicazione e 9.420 in finanza e assicurazioni. Il PIL della regione era di 44,8 miliardi di € nel 2021.',
  'In Paris the mean gross pay per full-time equivalent in the private sector in 2022 was €68,381 a year in information and communication and €104,003 in finance and insurance, against €59,881 and €66,925 across France.':
    'Nel dipartimento di Parigi (Paris) la retribuzione lorda media per equivalente a tempo pieno nel settore privato nel 2022 è stata di 68.381 € l’anno nell’informazione e comunicazione e di 104.003 € in finanza e assicurazioni, contro 59.881 € e 66.925 € in tutta la Francia.',
  'In Haute-Garonne the mean gross pay per full-time equivalent in the private sector in 2022 was €50,562 a year in information and communication and €54,540 in finance and insurance, against €59,881 and €66,925 across France.':
    'Nel dipartimento dell’Alta Garonna la retribuzione lorda media per equivalente a tempo pieno nel settore privato nel 2022 è stata di 50.562 € l’anno nell’informazione e comunicazione e di 54.540 € in finanza e assicurazioni, contro 59.881 € e 66.925 € in tutta la Francia.',
  'In Alpes-Maritimes the mean gross pay per full-time equivalent in the private sector in 2022 was €64,742 a year in information and communication and €52,986 in finance and insurance, against €59,881 and €66,925 across France.':
    'Nel dipartimento delle Alpes-Maritimes la retribuzione lorda media per equivalente a tempo pieno nel settore privato nel 2022 è stata di 64.742 € l’anno nell’informazione e comunicazione e di 52.986 € in finanza e assicurazioni, contro 59.881 € e 66.925 € in tutta la Francia.',
  'In Rhône the mean gross pay per full-time equivalent in the private sector in 2022 was €53,320 a year in information and communication and €60,271 in finance and insurance, against €59,881 and €66,925 across France.':
    'Nel dipartimento del Rodano la retribuzione lorda media per equivalente a tempo pieno nel settore privato nel 2022 è stata di 53.320 € l’anno nell’informazione e comunicazione e di 60.271 € in finanza e assicurazioni, contro 59.881 € e 66.925 € in tutta la Francia.',
  'In Bouches-du-Rhône the mean gross pay per full-time equivalent in the private sector in 2022 was €52,581 a year in information and communication and €57,786 in finance and insurance, against €59,881 and €66,925 across France.':
    'Nel dipartimento delle Bouches-du-Rhône la retribuzione lorda media per equivalente a tempo pieno nel settore privato nel 2022 è stata di 52.581 € l’anno nell’informazione e comunicazione e di 57.786 € in finanza e assicurazioni, contro 59.881 € e 66.925 € in tutta la Francia.',
  'In Nord the mean gross pay per full-time equivalent in the private sector in 2022 was €47,387 a year in information and communication and €53,162 in finance and insurance, against €59,881 and €66,925 across France.':
    'Nel dipartimento del Nord la retribuzione lorda media per equivalente a tempo pieno nel settore privato nel 2022 è stata di 47.387 € l’anno nell’informazione e comunicazione e di 53.162 € in finanza e assicurazioni, contro 59.881 € e 66.925 € in tutta la Francia.',
  'In Gironde the mean gross pay per full-time equivalent in the private sector in 2022 was €51,302 a year in information and communication and €53,603 in finance and insurance, against €59,881 and €66,925 across France.':
    'Nel dipartimento della Gironda la retribuzione lorda media per equivalente a tempo pieno nel settore privato nel 2022 è stata di 51.302 € l’anno nell’informazione e comunicazione e di 53.603 € in finanza e assicurazioni, contro 59.881 € e 66.925 € in tutta la Francia.',
  'In Loire-Atlantique the mean gross pay per full-time equivalent in the private sector in 2022 was €49,150 a year in information and communication and €54,156 in finance and insurance, against €59,881 and €66,925 across France.':
    'Nel dipartimento della Loira Atlantica la retribuzione lorda media per equivalente a tempo pieno nel settore privato nel 2022 è stata di 49.150 € l’anno nell’informazione e comunicazione e di 54.156 € in finanza e assicurazioni, contro 59.881 € e 66.925 € in tutta la Francia.',
  'In Bas-Rhin the mean gross pay per full-time equivalent in the private sector in 2022 was €51,866 a year in information and communication and €57,773 in finance and insurance, against €59,881 and €66,925 across France.':
    'Nel dipartimento del Basso Reno la retribuzione lorda media per equivalente a tempo pieno nel settore privato nel 2022 è stata di 51.866 € l’anno nell’informazione e comunicazione e di 57.773 € in finanza e assicurazioni, contro 59.881 € e 66.925 € in tutta la Francia.',
  'In Isère the mean gross pay per full-time equivalent in the private sector in 2022 was €53,956 a year in information and communication and €54,551 in finance and insurance, against €59,881 and €66,925 across France.':
    'Nel dipartimento dell’Isère la retribuzione lorda media per equivalente a tempo pieno nel settore privato nel 2022 è stata di 53.956 € l’anno nell’informazione e comunicazione e di 54.551 € in finanza e assicurazioni, contro 59.881 € e 66.925 € in tutta la Francia.',
  'The Global Financial Centres Index 40 (September 2026) ranks Paris 23rd in the world (down 4 places) and sixth among Western European centres, behind London, Zurich, Geneva, Luxembourg and Lugano.':
    'L’indice Global Financial Centres 40 (settembre 2026) colloca Parigi al 23º posto nel mondo (in calo di 4 posizioni) e al sesto tra i centri dell’Europa occidentale, dopo Londra, Zurigo, Ginevra, Lussemburgo e Lugano.',
  'Startup Genome’s 2026 report ranks Paris 13th among the world’s start-up ecosystems and second in Europe (also second in Europe for talent, and in the world’s top ten for funding momentum and for its AI-native cluster), with an ecosystem value of $169 billion (Europe’s average $14.3 billion) and $47 billion of venture funding in 2021–2025.':
    'Il rapporto 2026 di Startup Genome colloca Parigi al 13º posto tra gli ecosistemi start-up del mondo e al secondo in Europa (seconda in Europa anche per talento, e nella top ten mondiale per dinamica dei finanziamenti e per il cluster nativo dell’IA), con un valore dell’ecosistema di 169 miliardi di dollari (media europea 14,3 miliardi) e 47 miliardi di venture funding nel 2021–2025.',
  'Paris (the city département) has 2,237,200 jobs (2023), 245,500 of them in information and communication and 139,400 in finance and insurance; the neighbouring Hauts-de-Seine has 1,267,900 jobs, 204,200 in information and communication and 87,100 in finance and insurance. Together they hold 39% of France’s information-and-communication jobs and 28% of its finance and insurance jobs; they are also the first and second of 697 EU regions at this level (NUTS 3) for information-and-communication jobs, and the first and fourth for finance and insurance. The next départements are Rhône with 65,800 jobs in information and communication and Nord with 31,600 in finance and insurance.':
    'Parigi (il dipartimento della città) conta 2.237.200 posti di lavoro (2023), 245.500 dei quali nell’informazione e comunicazione e 139.400 in finanza e assicurazioni; l’adiacente Hauts-de-Seine ha 1.267.900 posti, 204.200 nell’informazione e comunicazione e 87.100 in finanza e assicurazioni. Insieme detengono il 39% dei posti francesi nell’informazione e comunicazione e il 28% di quelli in finanza e assicurazioni; sono inoltre la prima e la seconda delle 697 regioni dell’UE a questo livello (NUTS 3) per posti nell’informazione e comunicazione, e la prima e la quarta per finanza e assicurazioni. I dipartimenti successivi sono il Rodano con 65.800 posti nell’informazione e comunicazione e il Nord con 31.600 in finanza e assicurazioni.',
  'Choose Paris Region and the Paris Île-de-France Chamber of Commerce, citing Fortune’s Global 500 of July 2024, call the Paris Region Europe’s highest concentration of Fortune Global 500 headquarters; its ten largest are TotalEnergies (102,579 employees), Électricité de France (171,863), BNP Paribas (182,656), Société Générale (124,089), Crédit Agricole (75,125), Christian Dior (197,141), Carrefour (305,333), AXA (94,705), ENGIE (97,297) and Groupe BPCE (97,835).':
    'Choose Paris Region e la Camera di commercio di Parigi Île-de-France, citando la Global 500 di Fortune di luglio 2024, definiscono la regione parigina la maggiore concentrazione europea di sedi di aziende Fortune Global 500; le dieci maggiori sono TotalEnergies (102.579 dipendenti), Électricité de France (171.863), BNP Paribas (182.656), Société Générale (124.089), Crédit Agricole (75.125), Christian Dior (197.141), Carrefour (305.333), AXA (94.705), ENGIE (97.297) e Groupe BPCE (97.835).',
  'Startup Genome’s Paris page records that the May 2025 Choose France Summit secured 53 investment projects worth $46.9 billion, with AI infrastructure and data centres a substantial share (Prologis alone $7.4 billion for a Paris-region data centre), and that in January 2026 the World Economic Forum and VivaTech launched a European Centre for AI Excellence in Paris.':
    'La pagina di Startup Genome su Parigi riporta che il Choose France Summit di maggio 2025 ha raccolto 53 progetti di investimento per 46,9 miliardi di dollari, con una quota rilevante di infrastrutture di IA e data center (solo Prologis 7,4 miliardi per un data center nella regione parigina), e che a gennaio 2026 il World Economic Forum e VivaTech hanno lanciato a Parigi un centro europeo per l’eccellenza nell’IA.',
  'Kearney’s 2025 Global Cities Index (released 5 November 2025) ranks Paris third in the world, after New York and London and ahead of Tokyo and Singapore; its forward-looking Outlook ranking put Munich first.':
    'Il Global Cities Index 2025 di Kearney (pubblicato il 5 novembre 2025) colloca Parigi al terzo posto nel mondo, dopo New York e Londra e davanti a Tokyo e Singapore; la sua classifica prospettica Outlook ha messo Monaco al primo posto.',
  'Haute-Garonne, the département of Toulouse, has 751,800 jobs (2023), 74,300 of them in manufacturing, 47,400 in information and communication (fourth among France’s 101 départements) and 176,400 in finance, real estate and professional and business services.':
    'L’Alta Garonna, il dipartimento di Tolosa, conta 751.800 posti di lavoro (2023), 74.300 dei quali nella manifattura, 47.400 nell’informazione e comunicazione (quarto tra i 101 dipartimenti francesi) e 176.400 in finanza, immobiliare e servizi professionali e alle imprese.',
  'Thales Alenia Space’s French headquarters is in Toulouse, the largest of its nine industrial facilities in Europe, with more than 2,800 people working there.':
    'La sede francese di Thales Alenia Space è a Tolosa, il maggiore dei suoi nove stabilimenti industriali in Europa, con oltre 2.800 persone che vi lavorano.',
  'Toulouse’s economic development agency counts 16,000 jobs in the Toulouse space sector, which it describes as France’s first region for space jobs and a quarter of European space jobs, and says CNES, the French space agency, has 1,700 employees there.':
    'L’agenzia di sviluppo economico di Tolosa conta 16.000 posti di lavoro nel settore spaziale di Tolosa, che descrive come la prima regione francese per l’occupazione spaziale e un quarto dei posti spaziali europei, e afferma che il CNES, l’agenzia spaziale francese, vi ha 1.700 dipendenti.',
  'Startup Genome’s 2026 report puts the value of Toulouse’s start-up ecosystem at $2 billion (Europe’s average $14.3 billion), with $245 million of seed and Series A funding in H2 2023–2025.':
    'Il rapporto 2026 di Startup Genome stima il valore dell’ecosistema start-up di Tolosa in 2 miliardi di dollari (media europea 14,3 miliardi), con 245 milioni di finanziamenti seed e Serie A nel H2 2023–2025.',
  'Alpes-Maritimes, the département of Sophia Antipolis and Nice, has 515,100 jobs (2023), 23,700 of them in information and communication (twelfth among France’s 101 départements) and only 27,100 in manufacturing.':
    'Le Alpes-Maritimes, il dipartimento di Sophia Antipolis e Nizza, contano 515.100 posti di lavoro (2023), 23.700 dei quali nell’informazione e comunicazione (dodicesimo tra i 101 dipartimenti francesi) e solo 27.100 nella manifattura.',
  'Rhône, the département of Lyon, has 1,100,000 jobs (2023), fourth in France, with 65,800 in information and communication (third), 31,000 in finance and insurance (fourth) and 93,400 in manufacturing (second).':
    'Il Rodano, il dipartimento di Lione, conta 1.100.000 posti di lavoro (2023), quarto in Francia, con 65.800 nell’informazione e comunicazione (terzo), 31.000 in finanza e assicurazioni (quarto) e 93.400 nella manifattura (secondo).',
  'Startup Genome’s 2026 report puts the value of Lyon’s start-up ecosystem at $9 billion (Europe’s average $14.3 billion), with $539 million of seed and Series A funding in H2 2023–2025.':
    'Il rapporto 2026 di Startup Genome stima il valore dell’ecosistema start-up di Lione in 9 miliardi di dollari (media europea 14,3 miliardi), con 539 milioni di finanziamenti seed e Serie A nel H2 2023–2025.',
  'Bouches-du-Rhône, the département of Marseille, has 996,400 jobs (2023), fifth in France, with 34,800 in information and communication, 23,800 in finance and insurance (sixth) and 222,400 in finance, real estate and professional and business services (fifth).':
    'Le Bouches-du-Rhône, il dipartimento di Marsiglia, contano 996.400 posti di lavoro (2023), quinto in Francia, con 34.800 nell’informazione e comunicazione, 23.800 in finanza e assicurazioni (sesto) e 222.400 in finanza, immobiliare e servizi professionali e alle imprese (quinto).',
  'In 2024 the port of Marseille handled 66.0 million tonnes of goods, the eighth-busiest of the EU’s 20 largest ports and the second in France after HAROPA (Le Havre and Rouen, 76.7 million); Dunkerque handled 36.9 million and Nantes Saint-Nazaire 25.4 million.':
    'Nel 2024 il porto di Marsiglia ha movimentato 66,0 milioni di tonnellate di merci, l’ottavo tra i 20 maggiori porti dell’UE e il secondo in Francia dopo HAROPA (Le Havre e Rouen, 76,7 milioni); Dunkerque ne ha movimentati 36,9 milioni e Nantes Saint-Nazaire 25,4 milioni.',
  'Startup Genome’s 2026 report puts the value of Marseille’s start-up ecosystem at $2 billion (Europe’s average $14.3 billion), with $217 million of seed and Series A funding in H2 2023–2025.':
    'Il rapporto 2026 di Startup Genome stima il valore dell’ecosistema start-up di Marsiglia in 2 miliardi di dollari (media europea 14,3 miliardi), con 217 milioni di finanziamenti seed e Serie A nel H2 2023–2025.',
  'Hello Lille, the metropolis’s attractiveness agency, says the Lille metropolitan area has 558,000 employees and 136,000 students, more than 80 headquarters of retail brands and 40 distributors (including Auchan, Decathlon and Leroy Merlin), and the first concentration of international headquarters in France outside Paris (an EY and JLL study of 2021).':
    'Hello Lille, l’agenzia per l’attrattività della metropoli, afferma che l’area metropolitana di Lilla ha 558.000 occupati e 136.000 studenti, più di 80 sedi di marchi del commercio e 40 distributori (tra cui Auchan, Decathlon e Leroy Merlin), e la prima concentrazione di sedi internazionali in Francia fuori da Parigi (uno studio EY e JLL del 2021).',
  'Nord, the département of Lille, has 1,123,400 jobs (2023), third in France, with 106,900 in manufacturing (first), 38,600 in information and communication (sixth) and 31,600 in finance and insurance (third).':
    'Il Nord, il dipartimento di Lilla, conta 1.123.400 posti di lavoro (2023), terzo in Francia, con 106.900 nella manifattura (primo), 38.600 nell’informazione e comunicazione (sesto) e 31.600 in finanza e assicurazioni (terzo).',
  'Startup Genome’s 2026 report puts the value of Lille’s start-up ecosystem at $4 billion (Europe’s average $14.3 billion), with $143 million of seed and Series A funding in H2 2023–2025.':
    'Il rapporto 2026 di Startup Genome stima il valore dell’ecosistema start-up di Lilla in 4 miliardi di dollari (media europea 14,3 miliardi), con 143 milioni di finanziamenti seed e Serie A nel H2 2023–2025.',
  'Gironde, the département of Bordeaux, has 812,700 jobs (2023), sixth in France, with 35,500 in information and communication (seventh), 24,900 in finance and insurance (fifth) and 169,600 in finance, real estate and professional and business services (seventh).':
    'La Gironda, il dipartimento di Bordeaux, conta 812.700 posti di lavoro (2023), sesto in Francia, con 35.500 nell’informazione e comunicazione (settimo), 24.900 in finanza e assicurazioni (quinto) e 169.600 in finanza, immobiliare e servizi professionali e alle imprese (settimo).',
  'Startup Genome’s 2026 report puts the value of Bordeaux’s start-up ecosystem at $1 billion (Europe’s average $14.3 billion), with $116 million of seed and Series A funding in H2 2023–2025.':
    'Il rapporto 2026 di Startup Genome stima il valore dell’ecosistema start-up di Bordeaux in 1 miliardo di dollari (media europea 14,3 miliardi), con 116 milioni di finanziamenti seed e Serie A nel H2 2023–2025.',
  'Loire-Atlantique, the département of Nantes, has 728,400 jobs (2023), 74,300 of them in manufacturing (fifth in France), 42,900 in information and communication (fifth) and 21,900 in finance and insurance (eighth).':
    'La Loira Atlantica, il dipartimento di Nantes, conta 728.400 posti di lavoro (2023), 74.300 dei quali nella manifattura (quinto in Francia), 42.900 nell’informazione e comunicazione (quinto) e 21.900 in finanza e assicurazioni (ottavo).',
  'Bas-Rhin, the département of Strasbourg, has 532,900 jobs (2023), 68,500 of them in manufacturing (seventh in France), 16,100 in information and communication (sixteenth) and 14,600 in finance and insurance (eleventh).':
    'Il Basso Reno, il dipartimento di Strasburgo, conta 532.900 posti di lavoro (2023), 68.500 dei quali nella manifattura (settimo in Francia), 16.100 nell’informazione e comunicazione (sedicesimo) e 14.600 in finanza e assicurazioni (undicesimo).',
  'Isère, the département of Grenoble, has 561,400 jobs (2023), 74,500 of them in manufacturing (third in France) and 19,600 in information and communication (fifteenth).':
    'L’Isère, il dipartimento di Grenoble, conta 561.400 posti di lavoro (2023), 74.500 dei quali nella manifattura (terzo in Francia) e 19.600 nell’informazione e comunicazione (quindicesimo).',
  'Soitec, the maker of silicon-on-insulator wafers, reports more than 2,100 employees and about €600 million of turnover, and says its Smart Cut process was developed in Grenoble’s innovation hub.':
    'Soitec, produttore di wafer di silicio su isolante, dichiara oltre 2.100 dipendenti e circa 600 milioni di euro di fatturato, e afferma che il suo processo Smart Cut è stato sviluppato nel polo di innovazione di Grenoble.'
});
