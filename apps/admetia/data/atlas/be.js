/* Atlas record: Belgium. Read 2 and 3 October 2026; log P46
 * (research/verification/round-4c.md, round-4k.md, round-5a.md). The federal Immigration Office site
 * showed a CAPTCHA, which was not bypassed; the City of Brussels and Study
 * in Flanders pages are cited instead.
 * Round 5a (3 October 2026) added standing, metrics (Eurostat NUTS 3 arrondissements for population and
 * GDP, SD Worx pay reported by VRT, Numbeo for rent), more claims per hub, Leuven as a hub, and re-rated
 * Brussels finance and IT on Eurostat jobs; the country brief is research/countries/be-belgium.md. */

ATLAS.add({
  id: 'BE',
  checked: '2026-10-03',
  log: 'P46',
  summary: 'Brussels is the EU’s capital: the European Commission alone has about 33,000 staff, and lobbies, consultancies and law firms cluster around the institutions. Antwerp is one of Europe’s great ports and a chemicals hub. Graduates from outside the EU get a full year to look for work.',
  sectors: ['EU institutions and public affairs', 'Ports and logistics', 'Chemicals and pharmaceuticals', 'Banking and insurance'],
  roles: ['logistics', 'it', 'finance'],
  hubs: [
    {
      id: 'brussels', name: 'Brussels', lat: 50.85, lon: 4.35,
      knownFor: 'EU institutions, public affairs and the firms around them',
      why: ['be-ec', 'be-epso', 'be-bru-emp', 'be-rank', 'be-gfci'],
      sectors: ['EU institutions', 'Public affairs and lobbying', 'Consulting and law', 'Banking'],
      employers: [
        { name: 'European Commission', note: 'about 33,000 permanent and contract staff', c: 'be-ec' },
        { t: 'EU graduate competition (EPSO)', note: '174,727 applicants for 1,490 places', c: 'be-epso' },
        { name: 'Proximus', note: 'telecoms group, head office on Boulevard du Roi Albert II', c: 'be-proximus' },
        { t: 'Brussels’ start-up ecosystem', note: 'ecosystem value $20 billion', c: 'be-bru-gser' }
      ],
      demand: {
        finance: ['strong', 'be-bru-emp', 'be-rank'],
        economics: ['present', 'be-ec'],
        management: ['present', 'be-ec'],
        it: ['strong', 'be-bru-emp', 'be-rank'],
        business: 'gap', accounting: 'gap', marketing: 'gap', logistics: 'gap', analytics: 'gap', software: 'gap', datasci: 'gap', ai: 'gap', cs: 'gap', bigdata: 'gap'
      },
      standing: [
        { f: 'finance', s: [5, 2, 1], c: ['be-bru-emp', 'be-rank', 'be-gfci'] },
        { f: 'it', s: [5, 2, 1], c: ['be-bru-emp', 'be-rank', 'be-bru-gser'] }
      ],
      metrics: {
        pop: {
          v: 1271709,
          year: 2025,
          area: 'region',
          tag: 'data',
          src: 'https://ec.europa.eu/eurostat/databrowser/view/demo_r_pjangrp3/default/table',
          by: 'Eurostat, population on 1 January by NUTS 3 region (demo_r_pjangrp3), Arr. de Bruxelles-Capitale/Arr. Brussel-Hoofdstad (BE100)',
          seen: '2026-10-03'
        },
        gdp: {
          v: 103.6,
          cur: 'EUR',
          year: 2023,
          area: 'region',
          tag: 'data',
          src: 'https://ec.europa.eu/eurostat/databrowser/view/nama_10r_3gdp/default/table',
          by: 'Eurostat, GDP at current market prices by NUTS 3 region (nama_10r_3gdp), Arr. de Bruxelles-Capitale/Arr. Brussel-Hoofdstad (BE100), million euro ÷ 1,000',
          seen: '2026-10-03'
        },
        wage: {
          tag: 'anecdotal',
          seen: '2026-10-03',
          v: 4200,
          cur: 'EUR',
          basis: 'median',
          year: 2026,
          area: 'region',
          src: 'https://www.vrt.be/vrtnws/en/2026/03/13/3-585-euro-per-month-gross-is-the-median-salary-earned-by-people/',
          by: 'SD Worx payroll data of 400,000 full-time employees, reported by VRT NWS (13 Mar 2026): median gross monthly salary, Brussels-Capital Region; a single private payroll provider, not an official statistic'
        },
        rent: {
          v: 1209,
          cur: 'EUR',
          year: 2026,
          area: 'city',
          tag: 'anecdotal',
          src: 'https://web.archive.org/web/20260926084929/https://www.numbeo.com/cost-of-living/in/Brussels',
          by: 'Numbeo (crowd-sourced; 1127 entries by 131 contributors in the past 12 months), one-bedroom flat in the city centre, average, Brussels (page read as archived by the Internet Archive, Numbeo update of 22 September 2026)',
          seen: '2026-10-03'
        }
      },
      programmes: []
    },
    {
      id: 'antwerp', name: 'Antwerp', lat: 51.22, lon: 4.40,
      knownFor: 'Port logistics and chemicals',
      why: ['be-port', 'be-ports', 'be-ant-jobs', 'be-ant-emp'],
      sectors: ['Port and logistics', 'Chemicals', 'Trade'],
      employers: [
        { name: 'Port of Antwerp-Bruges', note: '266.5 million tonnes in 2025', c: 'be-port' },
        { t: 'The port and its companies', note: 'about 164,000 direct and indirect jobs; over 1,400 companies', c: 'be-ant-jobs' },
        { name: 'BASF Antwerp', note: 'largest chemical production site in Belgium and BASF’s second largest in the world', c: 'be-basf' }
      ],
      demand: {
        logistics: ['strong', 'be-port'],
        business: 'gap', finance: 'gap', economics: 'gap', accounting: 'gap', management: 'gap', marketing: 'gap', analytics: 'gap', it: 'gap', software: 'gap', datasci: 'gap', ai: 'gap', cs: 'gap', bigdata: 'gap'
      },
      standing: [
        { f: 'logistics', s: [5, 4, 2], c: ['be-port', 'be-ports', 'be-ant-jobs'] }
      ],
      metrics: {
        pop: {
          v: 1101687,
          year: 2025,
          area: 'region',
          tag: 'data',
          src: 'https://ec.europa.eu/eurostat/databrowser/view/demo_r_pjangrp3/default/table',
          by: 'Eurostat, population on 1 January by NUTS 3 region (demo_r_pjangrp3), Arr. Antwerpen (BE211)',
          seen: '2026-10-03'
        },
        gdp: {
          v: 66.8,
          cur: 'EUR',
          year: 2023,
          area: 'region',
          tag: 'data',
          src: 'https://ec.europa.eu/eurostat/databrowser/view/nama_10r_3gdp/default/table',
          by: 'Eurostat, GDP at current market prices by NUTS 3 region (nama_10r_3gdp), Arr. Antwerpen (BE211), million euro ÷ 1,000',
          seen: '2026-10-03'
        },
        wage: {
          tag: 'anecdotal',
          seen: '2026-10-03',
          v: 3605,
          cur: 'EUR',
          basis: 'median',
          year: 2026,
          area: 'region',
          src: 'https://www.vrt.be/vrtnws/en/2026/03/13/3-585-euro-per-month-gross-is-the-median-salary-earned-by-people/',
          by: 'SD Worx payroll data of 400,000 full-time employees, reported by VRT NWS (13 Mar 2026): median gross monthly salary, Antwerp province; a single private payroll provider, not an official statistic'
        },
        rent: {
          v: 910,
          cur: 'EUR',
          year: 2026,
          area: 'city',
          tag: 'anecdotal',
          src: 'https://web.archive.org/web/20260616202207/https://www.numbeo.com/cost-of-living/in/Antwerp',
          by: 'Numbeo (crowd-sourced; 644 entries by 51 contributors in the past 12 months), one-bedroom flat in the city centre, average, Antwerp (page read as archived by the Internet Archive, Numbeo update of 7 June 2026)',
          seen: '2026-10-03'
        }
      },
      programmes: []
    },
    {
      id: 'ghent', name: 'Ghent', lat: 51.05, lon: 3.72,
      knownFor: 'Belgium’s third metropolitan region for finance and for information-and-communication jobs',
      why: ['be-ghent', 'be-gnt-emp', 'be-gnt-nsp', 'be-gnt-ugent'],
      sectors: ['Ports and logistics', 'Life sciences', 'Manufacturing'],
      employers: [
        { t: 'Information and communication employers', note: '12,000 jobs (2022)', c: 'be-ghent' },
        { t: 'Finance and insurance employers', note: '6,000 jobs (2022)', c: 'be-ghent' },
        { name: 'Ghent University', note: 'about 15,000 staff and 50,000 students (2022-23)', c: 'be-gnt-ugent' },
        { name: 'North Sea Port', note: 'cross-border port with 105,912 direct and indirect jobs at the start of 2024', c: 'be-gnt-nsp' }
      ],
      demand: {
        finance: ['strong', 'be-ghent'],
        it: ['strong', 'be-ghent'],
        business: 'gap', economics: 'gap', accounting: 'gap', management: 'gap', marketing: 'gap', logistics: 'gap', analytics: 'gap', software: 'gap', datasci: 'gap', ai: 'gap', cs: 'gap', bigdata: 'gap'
      },
      standing: [
        { f: 'it', s: [3, 2, 1], c: ['be-ghent', 'be-gnt-emp'] },
        { f: 'finance', s: [3, 2, 1], c: ['be-ghent', 'be-gnt-emp'] }
      ],
      metrics: {
        pop: {
          v: 583606,
          year: 2025,
          area: 'region',
          tag: 'data',
          src: 'https://ec.europa.eu/eurostat/databrowser/view/demo_r_pjangrp3/default/table',
          by: 'Eurostat, population on 1 January by NUTS 3 region (demo_r_pjangrp3), Arr. Gent (BE234)',
          seen: '2026-10-03'
        },
        gdp: {
          v: 36.9,
          cur: 'EUR',
          year: 2023,
          area: 'region',
          tag: 'data',
          src: 'https://ec.europa.eu/eurostat/databrowser/view/nama_10r_3gdp/default/table',
          by: 'Eurostat, GDP at current market prices by NUTS 3 region (nama_10r_3gdp), Arr. Gent (BE234), million euro ÷ 1,000',
          seen: '2026-10-03'
        },
        wage: {
          tag: 'anecdotal',
          seen: '2026-10-03',
          v: 3595,
          cur: 'EUR',
          basis: 'median',
          year: 2026,
          area: 'region',
          src: 'https://www.vrt.be/vrtnws/en/2026/03/13/3-585-euro-per-month-gross-is-the-median-salary-earned-by-people/',
          by: 'SD Worx payroll data of 400,000 full-time employees, reported by VRT NWS (13 Mar 2026): median gross monthly salary, East Flanders province; a single private payroll provider, not an official statistic'
        },
        rent: {
          v: 1020,
          cur: 'EUR',
          year: 2026,
          area: 'city',
          tag: 'anecdotal',
          src: 'https://web.archive.org/web/20260616202208/https://www.numbeo.com/cost-of-living/in/Gent',
          by: 'Numbeo (crowd-sourced; 318 entries by 43 contributors in the past 12 months), one-bedroom flat in the city centre, average, Gent (page read as archived by the Internet Archive, Numbeo update of 14 May 2026)',
          seen: '2026-10-03'
        }
      },
      programmes: []
    },
    {
      id: 'liege', name: 'Liège', lat: 50.63, lon: 5.57,
      knownFor: 'Wallonia’s largest metropolitan region, with a cargo airport',
      why: ['be-liege', 'be-lgg-airport', 'be-lg-emp'],
      sectors: ['Logistics', 'Steel and metals', 'Life sciences'],
      employers: [
        { t: 'Information and communication employers', note: '6,000 jobs (2022)', c: 'be-liege' },
        { t: 'Finance and insurance employers', note: '5,000 jobs (2022)', c: 'be-liege' },
        { name: 'Liège Airport', note: '1,325,000 tons of cargo in 2025', c: 'be-lgg-airport' }
      ],
      demand: {
        logistics: ['present', 'be-lgg-airport'],
        business: 'gap', finance: 'gap', economics: 'gap', accounting: 'gap', management: 'gap', marketing: 'gap', analytics: 'gap', it: 'gap', software: 'gap', datasci: 'gap', ai: 'gap', cs: 'gap', bigdata: 'gap'
      },
      standing: [
        { f: 'logistics', s: [3, 2, 1], c: ['be-lgg-airport', 'be-lg-emp'] }
      ],
      metrics: {
        pop: {
          v: 637220,
          year: 2025,
          area: 'region',
          tag: 'data',
          src: 'https://ec.europa.eu/eurostat/databrowser/view/demo_r_pjangrp3/default/table',
          by: 'Eurostat, population on 1 January by NUTS 3 region (demo_r_pjangrp3), Arr. Liège (BE332)',
          seen: '2026-10-03'
        },
        gdp: {
          v: 25.5,
          cur: 'EUR',
          year: 2023,
          area: 'region',
          tag: 'data',
          src: 'https://ec.europa.eu/eurostat/databrowser/view/nama_10r_3gdp/default/table',
          by: 'Eurostat, GDP at current market prices by NUTS 3 region (nama_10r_3gdp), Arr. Liège (BE332), million euro ÷ 1,000',
          seen: '2026-10-03'
        }
      },
      programmes: []
    },
    {
      id: 'leuven', name: 'Leuven', lat: 50.88, lon: 4.70,
      knownFor: 'A research university and Europe’s leading chip-research centre',
      why: ['be-leu-kul', 'be-leu-rank', 'be-leu-imec', 'be-leu-emp'],
      sectors: ['Higher education and research', 'Semiconductors', 'Life sciences'],
      employers: [
        { name: 'KU Leuven', note: '66,306 students; 22,799 staff including the university hospital', c: 'be-leu-kul' },
        { name: 'imec', note: 'headquarters and biggest campus in Leuven', c: 'be-leu-imec' }
      ],
      demand: {
        cs: ['present', 'be-leu-imec', 'be-leu-kul'],
        business: 'gap', finance: 'gap', economics: 'gap', accounting: 'gap', management: 'gap', marketing: 'gap', logistics: 'gap', analytics: 'gap', it: 'gap', software: 'gap', datasci: 'gap', ai: 'gap', bigdata: 'gap'
      },
      standing: [
        { f: 'cs', s: [3, 2, 1], c: ['be-leu-imec', 'be-leu-kul', 'be-leu-rank'] }
      ],
      metrics: {
        pop: {
          v: 530971,
          year: 2025,
          area: 'region',
          tag: 'data',
          src: 'https://ec.europa.eu/eurostat/databrowser/view/demo_r_pjangrp3/default/table',
          by: 'Eurostat, population on 1 January by NUTS 3 region (demo_r_pjangrp3), Arr. Leuven (BE242)',
          seen: '2026-10-03'
        },
        gdp: {
          v: 25.7,
          cur: 'EUR',
          year: 2023,
          area: 'region',
          tag: 'data',
          src: 'https://ec.europa.eu/eurostat/databrowser/view/nama_10r_3gdp/default/table',
          by: 'Eurostat, GDP at current market prices by NUTS 3 region (nama_10r_3gdp), Arr. Leuven (BE242), million euro ÷ 1,000',
          seen: '2026-10-03'
        },
        wage: {
          tag: 'anecdotal',
          seen: '2026-10-03',
          v: 3580,
          cur: 'EUR',
          basis: 'median',
          year: 2026,
          area: 'region',
          src: 'https://www.vrt.be/vrtnws/en/2026/03/13/3-585-euro-per-month-gross-is-the-median-salary-earned-by-people/',
          by: 'SD Worx payroll data of 400,000 full-time employees, reported by VRT NWS (13 Mar 2026): median gross monthly salary, Flemish Brabant province; a single private payroll provider, not an official statistic'
        },
        rent: {
          v: 969,
          cur: 'EUR',
          year: 2026,
          area: 'city',
          tag: 'anecdotal',
          src: 'https://web.archive.org/web/20260920020418/https://www.numbeo.com/cost-of-living/in/Leuven',
          by: 'Numbeo (crowd-sourced; 332 entries by 53 contributors in the past 12 months), one-bedroom flat in the city centre, average, Leuven (page read as archived by the Internet Archive, Numbeo update of 15 September 2026)',
          seen: '2026-10-03'
        }
      },
      programmes: []
    }
  ],

  work: [
    { k: 'Language', c: ['be-w-lang', 'be-w-lang-eu'] },
    { k: 'Recruiting calendar', c: ['be-w-cal', 'be-w-cal-bb'] },
    { k: 'Where demand is now', c: ['be-w-vac'] },
    { k: 'Entry pay', c: ['be-pay'] },
    { k: 'Graduate labour market', c: ['be-grads', 'be-epso'] }
  ],

  briefs: [
    ['careers/public-policy-and-academia.md', '§1 EU institutions: EPSO, traineeships, contract agents, pay'],
    ['countries/be-belgium.md', 'Country brief: hubs, employers, pay and standing']
  ],
  gaps: [
    'Belgian income tax, social contributions and the language of work (Dutch, French, German) were not researched.',
    'Demand in consulting, law and public affairs in Brussels is not rated: the sources read count finance and information-and-communication jobs, not lobbying or consulting.',
    'The pay metrics are SD Worx payroll medians reported by VRT NWS (a single private provider, by province or region, none for Liège); Statbel’s own wage series was not available to cite.',
    'Headcounts for KBC, AB InBev, UCB, Volvo Cars Ghent and Ghent University were not read on pages that state them; Liège has no rent figure (no usable Numbeo page).',
    'No family is rated in Liège except logistics: the Eurostat figures read do not put it second or third in the country for finance or information-and-communication jobs.',
    'Hubs added on 3 October 2026 are rated only from Eurostat’s 2021–22 metropolitan employment counts: strong means second or third in the country for jobs in finance and insurance, or in information and communication, with at least 5,000 such jobs.'
  ],

  claims: {
    'be-ec': {
      t: 'The European Commission employs around 33,000 permanent and contract staff, including policy officers, researchers, lawyers and translators.',
      tag: 'employer-stated',
      src: 'https://commission.europa.eu/about/organisation/commission-staff_en',
      by: 'European Commission, Commission staff',
      seen: '2026-10-02'
    },
    'be-epso': {
      t: 'The 2026 EU graduate competition (AD5) drew 174,727 applicants for 1,490 places, about 117 per place; traineeships and contract-agent posts are the realistic first doors.',
      tag: 'data',
      src: 'research/careers/public-policy-and-academia.md',
      by: 'EPSO, 8 May 2026, via careers/public-policy-and-academia.md §1',
      seen: '2026-10-02'
    },
    'be-port': {
      t: 'Port of Antwerp-Bruges handled 266.5 million tonnes in 2025, 4.1% less than in 2024, with container traffic stable.',
      tag: 'data',
      src: 'https://newsroom.portofantwerpbruges.com/en/press-releases/port-of-antwerp-bruges-ends-2025-with-resilience-in-a-turbulent-trading-climate',
      by: 'Port of Antwerp-Bruges, 27 Jan 2026',
      seen: '2026-10-02'
    },
    'be-ghent': {
      t: 'Eurostat counts 355,000 people in work in the Ghent metropolitan region in 2022: 12,000 in information and communication (third in Belgium, after Brussels and Antwerp) and 6,000 in finance and insurance (third in Belgium, after Brussels and Antwerp). The region’s GDP was €36.9 billion in 2022.',
      tag: 'data',
      src: 'https://ec.europa.eu/eurostat/databrowser/view/met_10r_3emp/default/table?lang=en',
      by: 'Eurostat, metropolitan regions: employment by activity (met_10r_3emp) and GDP (met_10r_3gdp)',
      seen: '2026-10-03'
    },
    'be-liege': {
      t: 'Eurostat counts 314,000 people in work in the Liège metropolitan region in 2022: 6,000 in information and communication and 5,000 in finance and insurance. The region’s GDP was €28.9 billion in 2022.',
      tag: 'data',
      src: 'https://ec.europa.eu/eurostat/databrowser/view/met_10r_3emp/default/table?lang=en',
      by: 'Eurostat, metropolitan regions: employment by activity (met_10r_3emp) and GDP (met_10r_3gdp)',
      seen: '2026-10-03'
    },
    'be-pay': {
      t: 'In 2022 employees under 30 in Belgian firms with 10 or more staff (public administration excluded) earned a mean of €38,114 gross a year, and those under 30 working as professionals €52,290, against €53,642 for all ages.',
      tag: 'data',
      src: 'https://ec.europa.eu/eurostat/databrowser/view/earn_ses22_28/default/table',
      by: 'Eurostat, Structure of earnings survey 2022: mean annual earnings by age and occupation (earn_ses22_28), Belgium, firms with 10+ employees, sections B–S excluding O',
      seen: '2026-10-03'
    },
    'be-grads': {
      t: 'In 2025 the employment rate of Belgians aged 20 to 34 with a tertiary degree was 90.2% (88.5% for those who finished within the last five years); unemployment was 6.2% overall and 17.4% for the 15-to-24s, and GDP was €642.0 billion.',
      tag: 'data',
      src: 'https://ec.europa.eu/eurostat/databrowser/view/edat_lfse_24/default/table',
      by: 'Eurostat, employment rate of 20-34-year-olds by educational attainment and years since leaving education (edat_lfse_24), unemployment (une_rt_a) and GDP (nama_10_gdp), 2025',
      seen: '2026-10-03'
    },
    'be-w-lang': {
      t: 'Of 1,000 Actiris job offers seen in Brussels between 22 April and 14 July 2023, 915 were written in French, 58 in English and 18 in Dutch; of the 582 that named a language, French appeared in just over 80%, Dutch in 73% and English in 48%.',
      tag: 'anecdotal',
      src: 'https://dial-mem.test.bib.ucl.ac.be/bitstreams/894785ae-fd20-4197-98ca-72893259fd81/download',
      by: 'UCLouvain master’s thesis analysing 1,000 Actiris job offers (a single student study, 2023)',
      seen: '2026-10-08'
    },
    'be-w-lang-eu': {
      t: 'EURES says French is key in Wallonia and Brussels, Dutch in Flanders and Brussels and German in the German-speaking Community, and asks for language skills in a separate CV section using CEFR levels.',
      tag: 'data',
      src: 'https://eures.europa.eu/living-and-working/living-and-working-conditions-europe/living-and-working-conditions-belgium_en',
      by: 'EURES, living and working conditions in Belgium',
      seen: '2026-10-08'
    },
    'be-w-cal': {
      t: 'Student.be lists 19 job fairs for new graduates in Flanders and Brussels between 5 February and 26 March 2026, and Deloitte holds invitation events in four cities from 5 to 15 October 2026; programmes such as Proximus’s start in September.',
      tag: 'practitioner consensus',
      src: 'https://www.student.be/nl/student-life/jobfairs-en-bedrijfsevents-in-vlaanderen-en-brussel-voor-net-afgestudeerden-in-2026/',
      by: 'Student.be, job fairs and company events for new graduates in 2026 (page of 1 October 2026); Student.be on the Proximus Graduate Program 2026',
      seen: '2026-10-08'
    },
    'be-w-cal-bb': {
      t: 'Registration for the European Commission’s Blue Book traineeship session of October 2027 opens on 15 February 2027 and closes on 12 March 2027.',
      tag: 'employer-stated',
      src: 'https://traineeships.ec.europa.eu/index_en',
      by: 'European Commission, Blue Book traineeship programme',
      seen: '2026-10-08'
    },
    'be-w-vac': {
      t: 'Belgium’s job vacancy rate was 3.5% in the last quarter of 2025, down from 4.1% a year earlier: 5.4% in professional, scientific and technical activities, 4.2% in information and communication and 2.9% in finance and insurance.',
      tag: 'data',
      src: 'https://ec.europa.eu/eurostat/databrowser/view/jvs_q_nace2/default/table',
      by: 'Eurostat, job vacancy statistics by NACE Rev. 2 activity, quarterly (jvs_q_nace2), not seasonally adjusted, Belgium',
      seen: '2026-10-08'
    },
    'be-gfci': {
      t: 'The Global Financial Centres Index 40 (September 2026) ranks Brussels 82nd in the world (down 1 place); it is not among the top 15 Western European centres, which London leads and Zurich, Geneva and Luxembourg follow.',
      tag: 'practitioner consensus',
      src: 'https://www.longfinance.net/media/documents/GFCI_40_Report_2026.09.16_v1.2.pdf',
      by: 'Z/Yen and the China Development Institute, GFCI 40, 16 Sep 2026, Tables 1 and 8',
      seen: '2026-10-03'
    },
    'be-rank': {
      t: 'Of the 152 metropolitan regions for which Eurostat publishes jobs by sector (latest year, 2021 or 2022; German, British and Swiss regions are not in the table), Brussels has the ninth-most jobs in finance and insurance (63,000) and the 16th-most in information and communication (68,000); Antwerp is 46th (13,000) and 51st (18,000); Ghent has 6,000 and 12,000 (65th in information and communication; in finance it shares a tie around 90th).',
      tag: 'data',
      src: 'https://ec.europa.eu/eurostat/databrowser/view/met_10r_3emp/default/table',
      by: 'Eurostat, employment by NACE Rev. 2 activity by metropolitan region (met_10r_3emp); ranking calculated by Admetia from the full table, 2026-10-03',
      seen: '2026-10-03'
    },
    'be-bru-emp': {
      t: 'The Brussels-Capital arrondissement has 725,600 jobs (2023): 266,500 of them (37%) in public administration, defence, education and health, 158,000 in professional, scientific, technical and administrative services, 48,900 in finance and insurance and 33,800 in information and communication.',
      tag: 'data',
      src: 'https://ec.europa.eu/eurostat/databrowser/view/nama_10r_3empers/default/table',
      by: 'Eurostat, employment (thousand persons) by NUTS 3 region and activity (nama_10r_3empers), 2023, NUTS 3 BE100',
      seen: '2026-10-03'
    },
    'be-bru-gser': {
      t: 'Startup Genome’s 2026 report puts the value of Brussels’ start-up ecosystem at $20 billion (Europe’s average $14.3 billion), with $800 million of seed and Series A funding in H2 2023–2025 and $4 billion of exits in 2021–2025.',
      tag: 'practitioner consensus',
      src: 'https://startupgenome.com/ecosystems/brussels',
      by: 'Startup Genome, Global Startup Ecosystem Report 2026, Brussels page',
      seen: '2026-10-03'
    },
    'be-proximus': {
      t: 'Proximus gives its address as Boulevard du Roi Albert II 27, Brussels.',
      tag: 'employer-stated',
      src: 'https://www.proximus.com/en/investors',
      by: 'Proximus, investor page footer: Boulevard du Roi Albert 2, 27, B-1030 Brussels',
      seen: '2026-10-03'
    },
    'be-ports': {
      t: 'In 2024 Antwerp-Bruges handled 244.2 million tonnes of goods, the second-busiest port in the EU after Rotterdam (397.3 million) and well ahead of Hamburg (97.0 million).',
      tag: 'data',
      src: 'https://ec.europa.eu/eurostat/databrowser/view/mar_mg_aa_pwhd/default/table',
      by: 'Eurostat, gross weight of goods handled in main ports (mar_mg_aa_pwhd), 2024',
      seen: '2026-10-03'
    },
    'be-ant-jobs': {
      t: 'Port of Antwerp-Bruges describes itself as home to over 1,400 companies and accounting for around 164,000 direct and indirect jobs and 21 billion euros in added value, Belgium’s most important economic engine.',
      tag: 'employer-stated',
      src: 'https://newsroom.portofantwerpbruges.com/en/press-releases/port-of-antwerp-bruges-ends-2025-with-resilience-in-a-turbulent-trading-climate',
      by: 'Port of Antwerp-Bruges, press release (27 Jan 2026)',
      seen: '2026-10-03'
    },
    'be-basf': {
      t: 'BASF’s Antwerp site, in the northernmost part of the port, is the largest chemical production site in Belgium and the second largest BASF group site in the world.',
      tag: 'employer-stated',
      src: 'https://www.basf.com/be/en/who-we-are/Group-Companies/BASF-Antwerpen',
      by: 'BASF, BASF Antwerpen',
      seen: '2026-10-03'
    },
    'be-ant-emp': {
      t: 'The Antwerp arrondissement has 514,700 jobs (2023): 142,300 in professional, scientific, technical and administrative services, 127,600 in trade, transport, hospitality and information and communication, and 46,000 in manufacturing.',
      tag: 'data',
      src: 'https://ec.europa.eu/eurostat/databrowser/view/nama_10r_3empers/default/table',
      by: 'Eurostat, employment (thousand persons) by NUTS 3 region and activity (nama_10r_3empers), 2023, NUTS 3 BE211',
      seen: '2026-10-03'
    },
    'be-gnt-emp': {
      t: 'The Ghent arrondissement has 327,700 jobs (2023): 95,300 in public administration, defence, education and health, 39,000 in manufacturing, 11,700 in information and communication and 5,500 in finance and insurance.',
      tag: 'data',
      src: 'https://ec.europa.eu/eurostat/databrowser/view/nama_10r_3empers/default/table',
      by: 'Eurostat, employment (thousand persons) by NUTS 3 region and activity (nama_10r_3empers), 2023, NUTS 3 BE234',
      seen: '2026-10-03'
    },
    'be-gnt-nsp': {
      t: 'The Dutch-Flemish North Sea Port, which includes the port of Ghent, accounted for 105,912 direct and indirect jobs at the start of 2024, against 96,750 when the merger began on 1 January 2018.',
      tag: 'practitioner consensus',
      src: 'https://www.ibj-online.com/north-sea-port-secures-106-000-jobs/3413',
      by: 'International Bulk Journal (trade press), 25 Jan 2024, reporting North Sea Port figures',
      seen: '2026-10-03'
    },
    'be-gnt-ugent': {
      t: 'Ghent University’s own fact sheet for 2024-2025 gives about 15,000 staff and 50,000 students (2022-2023), 11 faculties including Economics and Business Administration, and rankings of 84 in the Shanghai ranking (ARWU) and 115 in the Times Higher Education World University Rankings.',
      tag: 'employer-stated',
      src: 'https://ing.uniroma2.it/wp-content/uploads/2024/12/Ghent-University-Fact-Sheet-2024-2025.pdf',
      by: 'Ghent University, International Relations Office, Fact Sheet 2024-2025 (a copy hosted by the University of Rome Tor Vergata; the ranking years are not stated in it)',
      seen: '2026-10-03'
    },
    'be-lgg-airport': {
      t: 'Liège Airport says it handled 1,325,000 tons of cargo in 2025 and more than 1.35 billion e-commerce packages passed through it, flying seven days a week with about 60 flights a night.',
      tag: 'employer-stated',
      src: 'https://www.liegeairport.com/en',
      by: 'Liège Airport, home page',
      seen: '2026-10-03'
    },
    'be-lg-emp': {
      t: 'The Liège arrondissement has 252,500 jobs (2023): 91,200 of them (36%) in public administration, defence, education and health, 21,600 in manufacturing, 5,200 in information and communication and 3,800 in finance and insurance.',
      tag: 'data',
      src: 'https://ec.europa.eu/eurostat/databrowser/view/nama_10r_3empers/default/table',
      by: 'Eurostat, employment (thousand persons) by NUTS 3 region and activity (nama_10r_3empers), 2023, NUTS 3 BE332',
      seen: '2026-10-03'
    },
    'be-leu-kul': {
      t: 'KU Leuven reports 66,306 students (17,738 international), 22,799 staff in total (13,685 at the university and 9,511 at the university hospital) and 345,945 alumni.',
      tag: 'employer-stated',
      src: 'https://www.kuleuven.be/english/about-kuleuven/facts-and-figures',
      by: 'KU Leuven, Facts and figures',
      seen: '2026-10-03'
    },
    'be-leu-rank': {
      t: 'KU Leuven is ranked 46th in the Times Higher Education World University Ranking (2026), 59th in the QS World University Ranking (2027) and 76th in the ARWU Shanghai Ranking (2025).',
      tag: 'employer-stated',
      src: 'https://www.kuleuven.be/english/about-kuleuven/facts-and-figures',
      by: 'KU Leuven, Facts and figures (the university’s own statement of the rankings)',
      seen: '2026-10-03'
    },
    'be-leu-imec': {
      t: 'The imec headquarters are in Leuven, where the research centre started in 1984; it is imec’s biggest campus, with five buildings.',
      tag: 'employer-stated',
      src: 'https://www.imec-int.com/en/connect-with-us/imec-belgium',
      by: 'imec, Connect with us: imec Leuven (Headquarters)',
      seen: '2026-10-03'
    },
    'be-leu-emp': {
      t: 'The Leuven arrondissement has 206,100 jobs (2023): 75,200 of them (36%) in public administration, defence, education and health, 52,800 in professional, scientific, technical and administrative services, 14,000 in manufacturing and 7,000 in information and communication.',
      tag: 'data',
      src: 'https://ec.europa.eu/eurostat/databrowser/view/nama_10r_3empers/default/table',
      by: 'Eurostat, employment (thousand persons) by NUTS 3 region and activity (nama_10r_3empers), 2023, NUTS 3 BE242',
      seen: '2026-10-03'
    }
  }
});

if (window.I18N) I18N.add('it', {
  'Of 1,000 Actiris job offers seen in Brussels between 22 April and 14 July 2023, 915 were written in French, 58 in English and 18 in Dutch; of the 582 that named a language, French appeared in just over 80%, Dutch in 73% and English in 48%.':
    'Su 1.000 offerte di lavoro di Actiris viste a Bruxelles tra il 22 aprile e il 14 luglio 2023, 915 erano scritte in francese, 58 in inglese e 18 in olandese; delle 582 che indicavano una lingua, il francese compariva in poco più dell’80%, l’olandese nel 73% e l’inglese nel 48%.',
  'EURES says French is key in Wallonia and Brussels, Dutch in Flanders and Brussels and German in the German-speaking Community, and asks for language skills in a separate CV section using CEFR levels.':
    'EURES afferma che il francese è fondamentale in Vallonia e a Bruxelles, l’olandese nelle Fiandre e a Bruxelles e il tedesco nella Comunità germanofona, e chiede di indicare le competenze linguistiche in una sezione separata del CV con i livelli del QCER.',
  'Student.be lists 19 job fairs for new graduates in Flanders and Brussels between 5 February and 26 March 2026, and Deloitte holds invitation events in four cities from 5 to 15 October 2026; programmes such as Proximus’s start in September.':
    'Student.be elenca 19 fiere del lavoro per neolaureati nelle Fiandre e a Bruxelles tra il 5 febbraio e il 26 marzo 2026, e Deloitte organizza eventi a invito in quattro città dal 5 al 15 ottobre 2026; programmi come quello di Proximus iniziano a settembre.',
  'Registration for the European Commission’s Blue Book traineeship session of October 2027 opens on 15 February 2027 and closes on 12 March 2027.':
    'Le iscrizioni al tirocinio Blue Book della Commissione europea per la sessione di ottobre 2027 si aprono il 15 febbraio 2027 e si chiudono il 12 marzo 2027.',
  'Belgium’s job vacancy rate was 3.5% in the last quarter of 2025, down from 4.1% a year earlier: 5.4% in professional, scientific and technical activities, 4.2% in information and communication and 2.9% in finance and insurance.':
    'Il tasso di posti vacanti del Belgio era del 3,5% nell’ultimo trimestre 2025, in calo rispetto al 4,1% di un anno prima: 5,4% nelle attività professionali, scientifiche e tecniche, 4,2% in informazione e comunicazione e 2,9% in finanza e assicurazioni.',
  'Brussels is the EU’s capital: the European Commission alone has about 33,000 staff, and lobbies, consultancies and law firms cluster around the institutions. Antwerp is one of Europe’s great ports and a chemicals hub. Graduates from outside the EU get a full year to look for work.':
    'Bruxelles è la capitale dell’UE: la sola Commissione europea conta circa 33.000 dipendenti, e lobby, società di consulenza e studi legali si concentrano attorno alle istituzioni. Anversa è uno dei grandi porti d’Europa e un polo della chimica. I laureati extra-UE hanno un anno intero per cercare lavoro.',
  'EU institutions and public affairs':
    'Istituzioni UE e affari pubblici',
  'Ports and logistics':
    'Porti e logistica',
  'Chemicals and pharmaceuticals':
    'Chimica e farmaceutica',
  'Banking and insurance':
    'Banche e assicurazioni',
  'Belgian income tax, social contributions and the language of work (Dutch, French, German) were not researched.':
    'Imposte sul reddito belghe, contributi sociali e lingua di lavoro (olandese, francese, tedesco) non sono stati ricercati.',
  'Demand in consulting, law and public affairs in Brussels is not rated: the sources read count finance and information-and-communication jobs, not lobbying or consulting.':
    'La domanda in consulenza, diritto e affari pubblici a Bruxelles non è valutata: le fonti lette contano i posti in finanza e in informazione e comunicazione, non lobbying o consulenza.',
  'The pay metrics are SD Worx payroll medians reported by VRT NWS (a single private provider, by province or region, none for Liège); Statbel’s own wage series was not available to cite.':
    'Le metriche salariali sono mediane delle buste paga SD Worx riportate da VRT NWS (un solo fornitore privato, per provincia o regione, nessuna per Liegi); la serie salariale di Statbel non era disponibile da citare.',
  'Headcounts for KBC, AB InBev, UCB, Volvo Cars Ghent and Ghent University were not read on pages that state them; Liège has no rent figure (no usable Numbeo page).':
    'Gli organici di KBC, AB InBev, UCB, Volvo Cars Gand e dell’Università di Gand non sono stati letti su pagine che li riportano; Liegi non ha un dato sull’affitto (nessuna pagina Numbeo utilizzabile).',
  'No family is rated in Liège except logistics: the Eurostat figures read do not put it second or third in the country for finance or information-and-communication jobs.':
    'A Liegi non è valutata nessuna famiglia tranne la logistica: i dati Eurostat letti non la collocano al secondo o terzo posto del paese per posti in finanza o in informazione e comunicazione.',
  'Hubs added on 3 October 2026 are rated only from Eurostat’s 2021–22 metropolitan employment counts: strong means second or third in the country for jobs in finance and insurance, or in information and communication, with at least 5,000 such jobs.':
    'I poli aggiunti il 3 ottobre 2026 sono stati valutati solo sui dati Eurostat 2021–22 sull’occupazione metropolitana: forte significa secondo o terzo del paese per posti in finanza e assicurazioni, o in informazione e comunicazione, con almeno 5.000 posti.',
  '§1 EU institutions: EPSO, traineeships, contract agents, pay':
    '§1 Istituzioni UE: EPSO, tirocini, agenti contrattuali, stipendi',
  'Country brief: hubs, employers, pay and standing':
    'Dossier paese: poli, datori di lavoro, stipendi e posizionamento',
  'EU institutions, public affairs and the firms around them':
    'Istituzioni UE, affari pubblici e le aziende attorno a loro',
  'EU institutions':
    'Istituzioni UE',
  'Public affairs and lobbying':
    'Affari pubblici e lobbying',
  'Consulting and law':
    'Consulenza e studi legali',
  'Banking':
    'Banca',
  'about 33,000 permanent and contract staff':
    'circa 33.000 dipendenti di ruolo e a contratto',
  '174,727 applicants for 1,490 places':
    '174.727 candidati per 1.490 posti',
  'EU graduate competition (EPSO)':
    'Il concorso UE per laureati (EPSO)',
  'telecoms group, head office on Boulevard du Roi Albert II':
    'gruppo di telecomunicazioni, sede centrale in Boulevard du Roi Albert II',
  'ecosystem value $20 billion':
    'valore dell’ecosistema 20 miliardi di dollari',
  'Brussels’ start-up ecosystem':
    'L’ecosistema start-up di Bruxelles',
  'Port logistics and chemicals':
    'Logistica portuale e chimica',
  'Port and logistics':
    'Porto e logistica',
  'Trade':
    'Commercio',
  '266.5 million tonnes in 2025':
    '266,5 milioni di tonnellate nel 2025',
  'about 164,000 direct and indirect jobs; over 1,400 companies':
    'circa 164.000 posti di lavoro diretti e indiretti; oltre 1.400 aziende',
  'The port and its companies':
    'Il porto e le sue aziende',
  'largest chemical production site in Belgium and BASF’s second largest in the world':
    'il maggiore sito chimico del Belgio e il secondo del gruppo BASF al mondo',
  'Belgium’s third metropolitan region for finance and for information-and-communication jobs':
    'La terza regione metropolitana belga per posti in finanza e in informazione e comunicazione',
  'Life sciences':
    'Scienze della vita',
  '12,000 jobs (2022)':
    '12.000 posti (2022)',
  'Information and communication employers':
    'I datori di lavoro dell’informazione e comunicazione',
  '6,000 jobs (2022)':
    '6.000 posti (2022)',
  'Finance and insurance employers':
    'I datori di lavoro di finanza e assicurazioni',
  'about 15,000 staff and 50,000 students (2022-23)':
    'circa 15.000 dipendenti e 50.000 studenti (2022-23)',
  'cross-border port with 105,912 direct and indirect jobs at the start of 2024':
    'porto transfrontaliero con 105.912 posti di lavoro diretti e indiretti a inizio 2024',
  'Wallonia’s largest metropolitan region, with a cargo airport':
    'La maggiore regione metropolitana della Vallonia, con un aeroporto cargo',
  'Steel and metals':
    'Siderurgia e metalli',
  '5,000 jobs (2022)':
    '5.000 posti (2022)',
  '1,325,000 tons of cargo in 2025':
    '1.325.000 tonnellate di merci nel 2025',
  'A research university and Europe’s leading chip-research centre':
    'Un’università di ricerca e un importante centro europeo di ricerca sui chip',
  'Higher education and research':
    'Università e ricerca',
  'Semiconductors':
    'Semiconduttori',
  '66,306 students; 22,799 staff including the university hospital':
    '66.306 studenti; 22.799 dipendenti, compreso l’ospedale universitario',
  'headquarters and biggest campus in Leuven':
    'sede centrale e campus più grande a Leuven',
  'Entry pay':
    'Stipendio d’ingresso',
  'Graduate labour market':
    'Mercato del lavoro dei laureati',
  'The European Commission employs around 33,000 permanent and contract staff, including policy officers, researchers, lawyers and translators.':
    'La Commissione europea impiega circa 33.000 dipendenti di ruolo e a contratto, tra cui funzionari, ricercatori, giuristi e traduttori.',
  'The 2026 EU graduate competition (AD5) drew 174,727 applicants for 1,490 places, about 117 per place; traineeships and contract-agent posts are the realistic first doors.':
    'Il concorso UE per laureati del 2026 (AD5) ha attirato 174.727 candidati per 1.490 posti, circa 117 per posto; tirocini e posti da agente contrattuale sono le prime porte realistiche.',
  'Port of Antwerp-Bruges handled 266.5 million tonnes in 2025, 4.1% less than in 2024, with container traffic stable.':
    'Nel 2025 il porto di Anversa-Bruges ha movimentato 266,5 milioni di tonnellate, il 4,1% in meno del 2024, con traffico container stabile.',
  'Eurostat counts 355,000 people in work in the Ghent metropolitan region in 2022: 12,000 in information and communication (third in Belgium, after Brussels and Antwerp) and 6,000 in finance and insurance (third in Belgium, after Brussels and Antwerp). The region’s GDP was €36.9 billion in 2022.':
    'Eurostat conta 355.000 occupati nella regione metropolitana di Gand nel 2022: 12.000 nell’informazione e comunicazione (terza in Belgio, dopo Bruxelles e Anversa) e 6.000 in finanza e assicurazioni (terza in Belgio, dopo Bruxelles e Anversa). Il PIL della regione era di 36,9 miliardi di € nel 2022.',
  'Eurostat counts 314,000 people in work in the Liège metropolitan region in 2022: 6,000 in information and communication and 5,000 in finance and insurance. The region’s GDP was €28.9 billion in 2022.':
    'Eurostat conta 314.000 occupati nella regione metropolitana di Liegi nel 2022: 6.000 nell’informazione e comunicazione e 5.000 in finanza e assicurazioni. Il PIL della regione era di 28,9 miliardi di € nel 2022.',
  'In 2022 employees under 30 in Belgian firms with 10 or more staff (public administration excluded) earned a mean of €38,114 gross a year, and those under 30 working as professionals €52,290, against €53,642 for all ages.':
    'Nel 2022 i dipendenti sotto i 30 anni delle imprese belghe con almeno 10 addetti (esclusa la pubblica amministrazione) guadagnavano in media 38.114 € lordi all’anno, e quelli sotto i 30 anni che lavorano come professionisti 52.290 €, contro 53.642 € per tutte le età.',
  'In 2025 the employment rate of Belgians aged 20 to 34 with a tertiary degree was 90.2% (88.5% for those who finished within the last five years); unemployment was 6.2% overall and 17.4% for the 15-to-24s, and GDP was €642.0 billion.':
    'Nel 2025 il tasso di occupazione dei belgi di 20-34 anni con un titolo terziario era del 90,2% (l’88,5% per chi ha finito da non oltre cinque anni); la disoccupazione era del 6,2% in complesso e del 17,4% tra i 15-24enni, e il PIL di 642,0 miliardi di euro.',
  'The Global Financial Centres Index 40 (September 2026) ranks Brussels 82nd in the world (down 1 place); it is not among the top 15 Western European centres, which London leads and Zurich, Geneva and Luxembourg follow.':
    'L’indice Global Financial Centres 40 (settembre 2026) colloca Bruxelles all’82º posto nel mondo (in calo di 1 posizione); non è tra i primi 15 centri dell’Europa occidentale, guidati da Londra e seguiti da Zurigo, Ginevra e Lussemburgo.',
  'Of the 152 metropolitan regions for which Eurostat publishes jobs by sector (latest year, 2021 or 2022; German, British and Swiss regions are not in the table), Brussels has the ninth-most jobs in finance and insurance (63,000) and the 16th-most in information and communication (68,000); Antwerp is 46th (13,000) and 51st (18,000); Ghent has 6,000 and 12,000 (65th in information and communication; in finance it shares a tie around 90th).':
    'Tra le 152 regioni metropolitane per cui Eurostat pubblica i posti di lavoro per settore (ultimo anno, 2021 o 2022; le regioni tedesche, britanniche e svizzere non sono nella tabella), Bruxelles ha il nono maggior numero di posti in finanza e assicurazioni (63.000) e il 16º in informazione e comunicazione (68.000); Anversa è 46ª (13.000) e 51ª (18.000); Gand ne ha 6.000 e 12.000 (65ª in informazione e comunicazione; in finanza è a pari merito intorno alla 90ª posizione).',
  'The Brussels-Capital arrondissement has 725,600 jobs (2023): 266,500 of them (37%) in public administration, defence, education and health, 158,000 in professional, scientific, technical and administrative services, 48,900 in finance and insurance and 33,800 in information and communication.':
    'L’arrondissement di Bruxelles-Capitale conta 725.600 posti di lavoro (2023): 266.500 dei quali (37%) in amministrazione pubblica, difesa, istruzione e sanità, 158.000 in servizi professionali, scientifici, tecnici e amministrativi, 48.900 in finanza e assicurazioni e 33.800 in informazione e comunicazione.',
  'Startup Genome’s 2026 report puts the value of Brussels’ start-up ecosystem at $20 billion (Europe’s average $14.3 billion), with $800 million of seed and Series A funding in H2 2023–2025 and $4 billion of exits in 2021–2025.':
    'Il rapporto 2026 di Startup Genome stima il valore dell’ecosistema start-up di Bruxelles in 20 miliardi di dollari (media europea 14,3 miliardi), con 800 milioni di finanziamenti seed e Serie A nel periodo H2 2023–2025 e 4 miliardi di exit nel 2021–2025.',
  'Proximus gives its address as Boulevard du Roi Albert II 27, Brussels.':
    'Proximus indica come indirizzo Boulevard du Roi Albert II 27, Bruxelles.',
  'In 2024 Antwerp-Bruges handled 244.2 million tonnes of goods, the second-busiest port in the EU after Rotterdam (397.3 million) and well ahead of Hamburg (97.0 million).':
    'Nel 2024 Anversa-Bruges ha movimentato 244,2 milioni di tonnellate di merci, il secondo porto dell’UE dopo Rotterdam (397,3 milioni) e molto davanti ad Amburgo (97,0 milioni).',
  'Port of Antwerp-Bruges describes itself as home to over 1,400 companies and accounting for around 164,000 direct and indirect jobs and 21 billion euros in added value, Belgium’s most important economic engine.':
    'Il porto di Anversa-Bruges si descrive come sede di oltre 1.400 aziende e responsabile di circa 164.000 posti di lavoro diretti e indiretti e di 21 miliardi di euro di valore aggiunto, il principale motore economico del Belgio.',
  'BASF’s Antwerp site, in the northernmost part of the port, is the largest chemical production site in Belgium and the second largest BASF group site in the world.':
    'Il sito BASF di Anversa, nella parte più settentrionale del porto, è il maggiore sito di produzione chimica del Belgio e il secondo sito del gruppo BASF al mondo.',
  'The Antwerp arrondissement has 514,700 jobs (2023): 142,300 in professional, scientific, technical and administrative services, 127,600 in trade, transport, hospitality and information and communication, and 46,000 in manufacturing.':
    'L’arrondissement di Anversa conta 514.700 posti di lavoro (2023): 142.300 in servizi professionali, scientifici, tecnici e amministrativi, 127.600 in commercio, trasporti, ricettività e informazione e comunicazione, e 46.000 nella manifattura.',
  'The Ghent arrondissement has 327,700 jobs (2023): 95,300 in public administration, defence, education and health, 39,000 in manufacturing, 11,700 in information and communication and 5,500 in finance and insurance.':
    'L’arrondissement di Gand conta 327.700 posti di lavoro (2023): 95.300 in amministrazione pubblica, difesa, istruzione e sanità, 39.000 nella manifattura, 11.700 in informazione e comunicazione e 5.500 in finanza e assicurazioni.',
  'The Dutch-Flemish North Sea Port, which includes the port of Ghent, accounted for 105,912 direct and indirect jobs at the start of 2024, against 96,750 when the merger began on 1 January 2018.':
    'Il North Sea Port olandese-fiammingo, che comprende il porto di Gand, contava 105.912 posti di lavoro diretti e indiretti a inizio 2024, contro 96.750 all’avvio della fusione il 1º gennaio 2018.',
  'Ghent University’s own fact sheet for 2024-2025 gives about 15,000 staff and 50,000 students (2022-2023), 11 faculties including Economics and Business Administration, and rankings of 84 in the Shanghai ranking (ARWU) and 115 in the Times Higher Education World University Rankings.':
    'La scheda informativa 2024-2025 dell’Università di Gand indica circa 15.000 dipendenti e 50.000 studenti (2022-2023), 11 facoltà tra cui Economia e Gestione aziendale, e posizioni 84 nella classifica di Shanghai (ARWU) e 115 nel Times Higher Education World University Rankings.',
  'Liège Airport says it handled 1,325,000 tons of cargo in 2025 and more than 1.35 billion e-commerce packages passed through it, flying seven days a week with about 60 flights a night.':
    'Liège Airport dichiara di aver movimentato 1.325.000 tonnellate di merci nel 2025 e che nel suo scalo sono transitati oltre 1,35 miliardi di pacchi e-commerce, con voli sette giorni su sette e circa 60 voli a notte.',
  'The Liège arrondissement has 252,500 jobs (2023): 91,200 of them (36%) in public administration, defence, education and health, 21,600 in manufacturing, 5,200 in information and communication and 3,800 in finance and insurance.':
    'L’arrondissement di Liegi conta 252.500 posti di lavoro (2023): 91.200 dei quali (36%) in amministrazione pubblica, difesa, istruzione e sanità, 21.600 nella manifattura, 5.200 in informazione e comunicazione e 3.800 in finanza e assicurazioni.',
  'KU Leuven reports 66,306 students (17,738 international), 22,799 staff in total (13,685 at the university and 9,511 at the university hospital) and 345,945 alumni.':
    'KU Leuven dichiara 66.306 studenti (17.738 internazionali), 22.799 dipendenti in totale (13.685 all’università e 9.511 all’ospedale universitario) e 345.945 ex studenti.',
  'KU Leuven is ranked 46th in the Times Higher Education World University Ranking (2026), 59th in the QS World University Ranking (2027) and 76th in the ARWU Shanghai Ranking (2025).':
    'KU Leuven è al 46º posto nel Times Higher Education World University Ranking (2026), al 59º nel QS World University Ranking (2027) e al 76º nell’ARWU Shanghai Ranking (2025).',
  'The imec headquarters are in Leuven, where the research centre started in 1984; it is imec’s biggest campus, with five buildings.':
    'La sede di imec è a Leuven, dove il centro di ricerca è nato nel 1984; è il campus più grande di imec, con cinque edifici.',
  'The Leuven arrondissement has 206,100 jobs (2023): 75,200 of them (36%) in public administration, defence, education and health, 52,800 in professional, scientific, technical and administrative services, 14,000 in manufacturing and 7,000 in information and communication.':
    'L’arrondissement di Lovanio conta 206.100 posti di lavoro (2023): 75.200 dei quali (36%) in amministrazione pubblica, difesa, istruzione e sanità, 52.800 in servizi professionali, scientifici, tecnici e amministrativi, 14.000 nella manifattura e 7.000 in informazione e comunicazione.'
});
