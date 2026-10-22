/* Atlas record: Austria. Read 2 and 3 October 2026; log P43
 * (research/verification/round-4c.md, round-4k.md, round-5a.md). First hub: Vienna.
 * Graduate permits are the library's (places/visas-and-work-rights.md §6).
 * Hubs for further cities were added on 3 October 2026 from city-level statistics
 * (log: research/verification/round-4k.md).
 * Round 5a (3 October 2026) added standing, metrics (Eurostat NUTS 3 regions for population and
 * output, Statistik Austria payroll-tax data for pay, Numbeo for rent), more claims per hub and
 * employers, and re-rated Graz and Salzburg and Vienna finance; the country brief is
 * research/countries/at-austria.md. */

ATLAS.add({
  id: 'AT',
  checked: '2026-10-03',
  log: 'P43',
  summary: 'A strong graduate labour market run mostly in German, with Vienna as the country’s business centre and a base for regional headquarters covering central and eastern Europe. Non-EU graduates of Austrian universities have one of the easier routes to a work permit; consulting and most corporate roles expect fluent German.',
  sectors: ['Regional headquarters', 'Banking', 'Pharmaceuticals', 'Engineering and manufacturing', 'International organisations'],
  roles: ['business'],
  hubs: [
    {
      id: 'vienna', name: 'Vienna', lat: 48.21, lon: 16.37,
      knownFor: 'Regional headquarters for central and eastern Europe',
      why: ['at-hq', 'at-vie-emp', 'at-gfci', 'at-vie-gser', 'at-rbi', 'at-wage'],
      sectors: ['Regional headquarters', 'Banking', 'Pharmaceuticals', 'Consulting', 'International organisations'],
      employers: [
        { name: 'Boehringer Ingelheim, Siemens, Henkel, Takeda, BMW Group', note: 'international headquarters in Austria', c: 'at-hq' },
        { name: 'Raiffeisen Bank International', note: 'headquarters in Vienna', c: 'at-rbi' },
        { t: 'Vienna’s start-up ecosystem', note: 'ecosystem value $13 billion', c: 'at-vie-gser' }
      ],
      demand: {
        business: ['strong', 'at-hq'],
        finance: ['present', 'at-rbi'],
        management: ['present', 'at-mck'],
        economics: 'gap', accounting: 'gap', marketing: 'gap', logistics: 'gap', analytics: 'gap', it: 'gap', software: 'gap', datasci: 'gap', ai: 'gap', cs: 'gap', bigdata: 'gap'
      },
      standing: [
        { f: 'business', s: [5, 3, 2], c: ['at-hq', 'at-vie-emp'] },
        { f: 'finance', s: [5, 2, 1], c: ['at-gfci', 'at-rbi', 'at-vie-emp'] }
      ],
      metrics: {
        pop: {
          v: 2028289,
          year: 2025,
          area: 'region',
          tag: 'data',
          src: 'https://ec.europa.eu/eurostat/databrowser/view/demo_r_pjangrp3/default/table',
          by: 'Eurostat, population on 1 January by NUTS 3 region (demo_r_pjangrp3), Wien (AT130)',
          seen: '2026-10-03'
        },
        gdp: {
          v: 120,
          cur: 'EUR',
          year: 2023,
          area: 'region',
          tag: 'data',
          src: 'https://ec.europa.eu/eurostat/databrowser/view/nama_10r_3gdp/default/table',
          by: 'Eurostat, GDP at current market prices by NUTS 3 region (nama_10r_3gdp), Wien (AT130), million euro ÷ 1,000',
          seen: '2026-10-03'
        },
        wage: {
          tag: 'data',
          seen: '2026-10-03',
          v: 3002,
          cur: 'EUR',
          basis: 'median',
          year: 2024,
          area: 'region',
          src: 'https://www.statistik.at/fileadmin/pages/333/11_brutto-_und_nettojahreseinkommen_der_unselbstaendig_bundeslaender_2024_019352.ods',
          by: 'Statistik Austria, gross and net annual income of employees by federal state 2024 (from payroll-tax data, 12 Dec 2025): median gross annual income of €36,022 for 982,641 employees in Vienna (apprentices excluded, part-time and part-year work included), annual ÷ 12'
        },
        rent: {
          v: 1168,
          cur: 'EUR',
          year: 2026,
          area: 'city',
          tag: 'anecdotal',
          src: 'https://web.archive.org/web/20260926084808/https://www.numbeo.com/cost-of-living/in/Vienna',
          by: 'Numbeo (crowd-sourced; 1554 entries by 245 contributors in the past 12 months), one-bedroom flat in the city centre, average, Vienna (page read as archived by the Internet Archive, Numbeo update of 22 September 2026)',
          seen: '2026-10-03'
        }
      },
      programmes: [
        { calc: 'masters', track: 'mim', id: 'wu-simc', name: 'WU Vienna — Strategy, Innovation & Management Control' },
        { calc: 'masters', track: 'mif', id: 'wu-qfin', name: 'WU Vienna — MSc Quantitative Finance' }
      ]
    },
    {
      id: 'linz', name: 'Linz', lat: 48.31, lon: 14.29,
      knownFor: 'Upper Austria’s industrial capital',
      why: ['at-linz', 'at-linz-emp', 'at-voest', 'at-wage'],
      sectors: ['Steel and metals', 'Manufacturing', 'Chemicals'],
      employers: [
        { t: 'Employers in the metropolitan region', note: '461,300 jobs (2021)', c: 'at-linz' },
        { name: 'voestalpine', note: 'group headquarters in Linz; 48,800 employees worldwide', c: 'at-voest' }
      ],
      demand: {
        business: 'gap', finance: 'gap', economics: 'gap', accounting: 'gap', management: 'gap', marketing: 'gap', logistics: 'gap', analytics: 'gap', it: 'gap', software: 'gap', datasci: 'gap', ai: 'gap', cs: 'gap', bigdata: 'gap'
      },
      standing: [
        { f: 'business', s: [3, 2, 1], c: ['at-linz-emp', 'at-voest'] }
      ],
      metrics: {
        pop: {
          v: 617181,
          year: 2025,
          area: 'region',
          tag: 'data',
          src: 'https://ec.europa.eu/eurostat/databrowser/view/demo_r_pjangrp3/default/table',
          by: 'Eurostat, population on 1 January by NUTS 3 region (demo_r_pjangrp3), Linz-Wels (AT312)',
          seen: '2026-10-03'
        },
        gdp: {
          v: 40.7,
          cur: 'EUR',
          year: 2023,
          area: 'region',
          tag: 'data',
          src: 'https://ec.europa.eu/eurostat/databrowser/view/nama_10r_3gdp/default/table',
          by: 'Eurostat, GDP at current market prices by NUTS 3 region (nama_10r_3gdp), Linz-Wels (AT312), million euro ÷ 1,000',
          seen: '2026-10-03'
        },
        wage: {
          tag: 'data',
          seen: '2026-10-03',
          v: 3404,
          cur: 'EUR',
          basis: 'median',
          year: 2024,
          area: 'region',
          src: 'https://www.statistik.at/fileadmin/pages/333/11_brutto-_und_nettojahreseinkommen_der_unselbstaendig_bundeslaender_2024_019352.ods',
          by: 'Statistik Austria, gross and net annual income of employees by federal state 2024 (from payroll-tax data, 12 Dec 2025): median gross annual income of €40,845 for 756,028 employees in Upper Austria (apprentices excluded, part-time and part-year work included), annual ÷ 12'
        },
        rent: {
          v: 729,
          cur: 'EUR',
          year: 2026,
          area: 'city',
          tag: 'anecdotal',
          src: 'https://web.archive.org/web/20260904074027/https://www.numbeo.com/cost-of-living/in/Linz',
          by: 'Numbeo (crowd-sourced; 312 entries by 24 contributors in the past 12 months), one-bedroom flat in the city centre, average, Linz (page read as archived by the Internet Archive, Numbeo update of 21 August 2026)',
          seen: '2026-10-03'
        }
      },
      programmes: []
    },
    {
      id: 'graz', name: 'Graz', lat: 47.07, lon: 15.44,
      knownFor: 'Styria’s capital and car-engineering centre',
      why: ['at-graz', 'at-graz-emp', 'at-avl', 'at-wage'],
      sectors: ['Automotive', 'Higher education', 'Technology'],
      employers: [
        { t: 'Employers in the metropolitan region', note: '367,900 jobs (2021)', c: 'at-graz' },
        { name: 'AVL List', note: 'headquartered in Graz; 12,000 employees at 90 locations', c: 'at-avl' }
      ],
      demand: {
        software: ['present', 'at-avl'],
        business: 'gap', finance: 'gap', economics: 'gap', accounting: 'gap', management: 'gap', marketing: 'gap', logistics: 'gap', analytics: 'gap', it: 'gap', datasci: 'gap', ai: 'gap', cs: 'gap', bigdata: 'gap'
      },
      standing: [
        { f: 'software', s: [3, 2, 1], c: ['at-avl', 'at-graz-emp'] }
      ],
      metrics: {
        pop: {
          v: 469968,
          year: 2025,
          area: 'region',
          tag: 'data',
          src: 'https://ec.europa.eu/eurostat/databrowser/view/demo_r_pjangrp3/default/table',
          by: 'Eurostat, population on 1 January by NUTS 3 region (demo_r_pjangrp3), Graz (AT221)',
          seen: '2026-10-03'
        },
        gdp: {
          v: 27.7,
          cur: 'EUR',
          year: 2023,
          area: 'region',
          tag: 'data',
          src: 'https://ec.europa.eu/eurostat/databrowser/view/nama_10r_3gdp/default/table',
          by: 'Eurostat, GDP at current market prices by NUTS 3 region (nama_10r_3gdp), Graz (AT221), million euro ÷ 1,000',
          seen: '2026-10-03'
        },
        wage: {
          tag: 'data',
          seen: '2026-10-03',
          v: 3296,
          cur: 'EUR',
          basis: 'median',
          year: 2024,
          area: 'region',
          src: 'https://www.statistik.at/fileadmin/pages/333/11_brutto-_und_nettojahreseinkommen_der_unselbstaendig_bundeslaender_2024_019352.ods',
          by: 'Statistik Austria, gross and net annual income of employees by federal state 2024 (from payroll-tax data, 12 Dec 2025): median gross annual income of €39,557 for 614,352 employees in Styria (apprentices excluded, part-time and part-year work included), annual ÷ 12'
        },
        rent: {
          v: 701,
          cur: 'EUR',
          year: 2026,
          area: 'city',
          tag: 'anecdotal',
          src: 'https://web.archive.org/web/20260808071419/https://www.numbeo.com/cost-of-living/in/Graz',
          by: 'Numbeo (crowd-sourced; 740 entries by 49 contributors in the past 12 months), one-bedroom flat in the city centre, average, Graz (page read as archived by the Internet Archive, Numbeo update of 20 July 2026)',
          seen: '2026-10-03'
        }
      },
      programmes: []
    },
    {
      id: 'salzburg', name: 'Salzburg', lat: 47.80, lon: 13.04,
      knownFor: 'A smaller metropolitan region of trade and tourism',
      why: ['at-salzburg', 'at-sbg-emp', 'at-porsche', 'at-wage'],
      sectors: ['Tourism', 'Trade', 'Agriculture and food'],
      employers: [
        { t: 'Employers in the metropolitan region', note: '218,200 jobs (2021)', c: 'at-salzburg' },
        {
          name: 'Porsche Holding Salzburg',
          note: 'Europe’s largest automotive distributor, headquartered in Salzburg; more than 36,900 employees worldwide',
          c: 'at-porsche'
        }
      ],
      demand: {
        business: ['present', 'at-porsche'],
        finance: 'gap', economics: 'gap', accounting: 'gap', management: 'gap', marketing: 'gap', logistics: 'gap', analytics: 'gap', it: 'gap', software: 'gap', datasci: 'gap', ai: 'gap', cs: 'gap', bigdata: 'gap'
      },
      standing: [
        { f: 'business', s: [2, 1, 1], c: ['at-sbg-emp', 'at-porsche'] }
      ],
      metrics: {
        pop: {
          v: 378982,
          year: 2025,
          area: 'region',
          tag: 'data',
          src: 'https://ec.europa.eu/eurostat/databrowser/view/demo_r_pjangrp3/default/table',
          by: 'Eurostat, population on 1 January by NUTS 3 region (demo_r_pjangrp3), Salzburg und Umgebung (AT323)',
          seen: '2026-10-03'
        },
        gdp: {
          v: 25.5,
          cur: 'EUR',
          year: 2023,
          area: 'region',
          tag: 'data',
          src: 'https://ec.europa.eu/eurostat/databrowser/view/nama_10r_3gdp/default/table',
          by: 'Eurostat, GDP at current market prices by NUTS 3 region (nama_10r_3gdp), Salzburg und Umgebung (AT323), million euro ÷ 1,000',
          seen: '2026-10-03'
        },
        wage: {
          tag: 'data',
          seen: '2026-10-03',
          v: 3113,
          cur: 'EUR',
          basis: 'median',
          year: 2024,
          area: 'region',
          src: 'https://www.statistik.at/fileadmin/pages/333/11_brutto-_und_nettojahreseinkommen_der_unselbstaendig_bundeslaender_2024_019352.ods',
          by: 'Statistik Austria, gross and net annual income of employees by federal state 2024 (from payroll-tax data, 12 Dec 2025): median gross annual income of €37,351 for 297,637 employees in Salzburg (apprentices excluded, part-time and part-year work included), annual ÷ 12'
        },
        rent: {
          v: 1275,
          cur: 'EUR',
          year: 2026,
          area: 'city',
          tag: 'anecdotal',
          src: 'https://web.archive.org/web/20260808071423/https://www.numbeo.com/cost-of-living/in/Salzburg',
          by: 'Numbeo (crowd-sourced; 139 entries by 25 contributors in the past 12 months), one-bedroom flat in the city centre, average, Salzburg (page read as archived by the Internet Archive, Numbeo update of 8 July 2026)',
          seen: '2026-10-03'
        }
      },
      programmes: []
    }
  ],

  work: [
    { k: 'Language', c: ['at-mck'] },
    { k: 'Recruiting calendar', c: ['at-calendar', 'at-fairs-claim'] },
    { k: 'Where demand is now', c: ['at-eurostat', 'at-ams-ict'] },
    { k: 'Entry pay', c: ['at-pay', 'at-wage'] },
    { k: 'Graduate labour market', c: ['at-grads', 'at-ams-alq'] }
  ],

  briefs: [
    ['places/visas-and-work-rights.md', '§6 Austria: job search and the Red-White-Red Card for graduates'],
    ['careers/consulting.md', 'DACH language rules and Vienna consulting pay'],
    ['places/countries-and-cities.md', '§1 graduate employment by country'],
    ['countries/at-austria.md', 'Country brief: hubs, employers, pay and standing']
  ],
  gaps: [
    'Tech and data demand in Vienna is not rated, and finance is rated present on one named bank: Eurostat’s tables give no finance or information-and-communication split for Austrian regions, and the headcounts of Erste Group, OMV, UNIQA, Vienna Insurance Group and the Vienna universities were not read on pages that state them.',
    'All immigration, visa, permit and 14-salary tax rules are consolidated from primary sources in visas_immigration/austria/austria_visas_immigration_guide.md.',
    'No family is rated in Linz: voestalpine is a named employer, but no source read says how many entry posts it offers to business graduates.',
    'Pay by state is Statistik Austria’s median annual income of all employees from payroll-tax data, part-time work included, so it is lower than full-time pay; the city of Vienna’s low median reflects that mix.',
    'Graz is rated for software on one employer’s statement of its focus (AVL), and Salzburg for business on one company headquarters (Porsche Holding Salzburg); neither has a statistic by family.'
  ],

  claims: {
    'at-calendar': {
      t: 'Austria has no single graduate recruiting season: voestalpine advertises trainee programmes whenever they are needed, takes holiday-job applications until the end of January and gives notice of openings by the end of May.',
      tag: 'employer-stated',
      src: 'https://www.voestalpine.com/group/en/jobs/students-pupils/',
      by: 'voestalpine, jobs for students and pupils',
      seen: '2026-10-08'
    },
    'at-fairs-claim': {
      t: 'Vienna’s main graduate fair, Career Calling, takes place on 14 October 2026, TECONOMY Vienna on 21 October 2026 and the TU Wien day TUday26 was on 7 May 2026.',
      tag: 'practitioner consensus',
      src: 'https://www.karriere.at/c/a/jobmessen-termine',
      by: 'karriere.at, career fairs in Austria 2026',
      seen: '2026-10-08'
    },
    'at-ams-ict': {
      t: 'In 2023 graduates made up 47.7% of employees in information and communication, and the average stock of vacancies asking for a degree reported to the AMS rose to over 5,500 in 2024.',
      tag: 'data',
      src: 'https://forschungsnetzwerk.ams.at/dam/jcr:6602749d-ce13-4970-9a33-745ce4b2fca6/AMS-Spezialthema_AkademikerInnen_2025.pdf',
      by: 'AMS, Spezialthema AkademikerInnen 2025 (Statistik Austria labour force survey and AMS vacancy data)',
      seen: '2026-10-08'
    },
    'at-ams-alq': {
      t: 'In December 2024 the AMS unemployment rate was 3.4% for people with a university, college or teacher-training degree, against 8.2% across all education levels.',
      tag: 'data',
      src: 'https://forschungsnetzwerk.ams.at/dam/jcr:6602749d-ce13-4970-9a33-745ce4b2fca6/AMS-Spezialthema_AkademikerInnen_2025.pdf',
      by: 'AMS, Spezialthema AkademikerInnen 2025',
      seen: '2026-10-08'
    },
    'at-mck': {
      t: 'McKinsey’s recruiters say fluent German is mandatory for its Germany and Austria offices.',
      tag: 'employer-stated',
      src: 'research/careers/consulting.md',
      by: 'McKinsey via e-fellows (1 Aug 2025), via careers/consulting.md',
      seen: '2026-09-30'
    },
    'at-eurostat': {
      t: '90.8% of recent tertiary graduates in Austria were in work in 2025, among the highest rates in the EU.',
      tag: 'data',
      src: 'research/places/countries-and-cities.md',
      by: 'Eurostat, via places/countries-and-cities.md §1',
      seen: '2026-09-30'
    },
    'at-hq': {
      t: 'More than 412 international companies run international headquarters from Austria, 45% of them in Vienna, among them Boehringer Ingelheim, Henkel, Takeda, BMW Group and Siemens.',
      tag: 'data',
      src: 'https://investinaustria.at/en/industries-functions/function/headquarters/',
      by: 'Austrian Business Agency (state agency), headquarters',
      seen: '2026-10-02'
    },
    'at-linz': {
      t: 'Eurostat counts 461,300 people in work in the Linz metropolitan region in 2021; the region’s GDP was €41.4 billion in 2021.',
      tag: 'data',
      src: 'https://ec.europa.eu/eurostat/databrowser/view/met_10r_3emp/default/table?lang=en',
      by: 'Eurostat, metropolitan regions: employment by activity (met_10r_3emp) and GDP (met_10r_3gdp)',
      seen: '2026-10-03'
    },
    'at-graz': {
      t: 'Eurostat counts 367,900 people in work in the Graz metropolitan region in 2021; the region’s GDP was €30.3 billion in 2021.',
      tag: 'data',
      src: 'https://ec.europa.eu/eurostat/databrowser/view/met_10r_3emp/default/table?lang=en',
      by: 'Eurostat, metropolitan regions: employment by activity (met_10r_3emp) and GDP (met_10r_3gdp)',
      seen: '2026-10-03'
    },
    'at-salzburg': {
      t: 'Eurostat counts 218,200 people in work in the Salzburg metropolitan region in 2021; the region’s GDP was €22.1 billion in 2021.',
      tag: 'data',
      src: 'https://ec.europa.eu/eurostat/databrowser/view/met_10r_3emp/default/table?lang=en',
      by: 'Eurostat, metropolitan regions: employment by activity (met_10r_3emp) and GDP (met_10r_3gdp)',
      seen: '2026-10-03'
    },
    'at-pay': {
      t: 'In 2022 employees under 30 in Austrian firms with 10 or more staff (public administration excluded) earned a mean of €37,371 gross a year, and those under 30 working as professionals €47,987, against €52,526 for all ages.',
      tag: 'data',
      src: 'https://ec.europa.eu/eurostat/databrowser/view/earn_ses22_28/default/table',
      by: 'Eurostat, Structure of earnings survey 2022: mean annual earnings by age and occupation (earn_ses22_28), Austria, firms with 10+ employees, sections B–S excluding O',
      seen: '2026-10-03'
    },
    'at-wage': {
      t: 'In 2024 the median gross annual income of employees (apprentices excluded) was €39,121 in Austria, €36,022 in Vienna, €40,845 in Upper Austria, €39,557 in Styria and €37,351 in Salzburg; the figures cover all employees, part-time and part-year work included, not only full-time full-year posts.',
      tag: 'data',
      src: 'https://www.statistik.at/fileadmin/pages/333/11_brutto-_und_nettojahreseinkommen_der_unselbstaendig_bundeslaender_2024_019352.ods',
      by: 'Statistik Austria, gross and net annual income of employees by federal state 2024 (from payroll-tax data, 12 Dec 2025)',
      seen: '2026-10-03'
    },
    'at-grads': {
      t: 'In 2025 the employment rate of Austrians aged 20 to 34 with a tertiary degree was 89.2% (88.8% for those who finished within the last five years); unemployment was 5.7% overall and 11.5% for the 15-to-24s, and GDP was €518.2 billion.',
      tag: 'data',
      src: 'https://ec.europa.eu/eurostat/databrowser/view/edat_lfse_24/default/table',
      by: 'Eurostat, employment rate of 20-34-year-olds by educational attainment and years since leaving education (edat_lfse_24), unemployment (une_rt_a) and GDP (nama_10_gdp), 2025',
      seen: '2026-10-03'
    },
    'at-gfci': {
      t: 'The Global Financial Centres Index 40 (September 2026) ranks Vienna 81st in the world (down 4 places), against Zurich 10th, Paris 23rd, Frankfurt 29th, Munich 58th and Milan 62nd; it is not among the top 15 Western European centres.',
      tag: 'practitioner consensus',
      src: 'https://www.longfinance.net/media/documents/GFCI_40_Report_2026.09.16_v1.2.pdf',
      by: 'Z/Yen and the China Development Institute, GFCI 40, 16 Sep 2026, Tables 1 and 8',
      seen: '2026-10-03'
    },
    'at-vie-gser': {
      t: 'Startup Genome’s 2026 report puts the value of Vienna’s start-up ecosystem at $13 billion (Europe’s average $14.3 billion), with $516 million of seed and Series A funding in H2 2023–2025 and $2 billion of exits in 2021–2025.',
      tag: 'practitioner consensus',
      src: 'https://startupgenome.com/ecosystems/vienna',
      by: 'Startup Genome, Global Startup Ecosystem Report 2026, Vienna page',
      seen: '2026-10-03'
    },
    'at-rbi': {
      t: 'Raiffeisen Bank International says its headquarters are in Vienna, at the gateway to Central and Eastern Europe.',
      tag: 'employer-stated',
      src: 'https://www.rbinternational.com/en/raiffeisen.html',
      by: 'Raiffeisen Bank International, home page',
      seen: '2026-10-03'
    },
    'at-vie-emp': {
      t: 'Vienna (NUTS 3 region AT130) has 1,127,400 jobs (2023): 368,100 in public administration, defence, education, health and other services, 342,900 in trade, transport, hospitality and information and communication, 286,100 in finance, real estate, professional and administrative services and 59,200 in manufacturing.',
      tag: 'data',
      src: 'https://ec.europa.eu/eurostat/databrowser/view/nama_10r_3empers/default/table',
      by: 'Eurostat, employment (thousand persons) by NUTS 3 region and activity (nama_10r_3empers), 2023, NUTS 3 AT130',
      seen: '2026-10-03'
    },
    'at-linz-emp': {
      t: 'The Linz-Wels region (NUTS 3 AT312) has 388,100 jobs (2023), second in Austria after Vienna: 75,700 of them (20%) in manufacturing, 106,700 in trade, transport, hospitality and information and communication and 69,800 in finance, real estate, professional and administrative services.',
      tag: 'data',
      src: 'https://ec.europa.eu/eurostat/databrowser/view/nama_10r_3empers/default/table',
      by: 'Eurostat, employment (thousand persons) by NUTS 3 region and activity (nama_10r_3empers), 2023, NUTS 3 AT312; ranking among Austrian NUTS 3 regions by Admetia',
      seen: '2026-10-03'
    },
    'at-voest': {
      t: 'voestalpine describes itself as a steel and technology group headquartered in Linz, with 48,800 employees worldwide in its 2025/26 business year and revenue of €15.1 billion.',
      tag: 'employer-stated',
      src: 'https://www.voestalpine.com/group/en/group/overview/',
      by: 'voestalpine, Group overview',
      seen: '2026-10-03'
    },
    'at-graz-emp': {
      t: 'The Graz region (NUTS 3 AT221) has 295,900 jobs (2023), third in Austria after Vienna and Linz-Wels: 98,300 in public administration, defence, education, health and other services, 74,100 in trade, transport, hospitality and information and communication and 45,200 in manufacturing.',
      tag: 'data',
      src: 'https://ec.europa.eu/eurostat/databrowser/view/nama_10r_3empers/default/table',
      by: 'Eurostat, employment (thousand persons) by NUTS 3 region and activity (nama_10r_3empers), 2023, NUTS 3 AT221; ranking among Austrian NUTS 3 regions by Admetia',
      seen: '2026-10-03'
    },
    'at-avl': {
      t: 'AVL, headquartered in Graz, says it is a mobility-technology company with 12,000 employees at more than 90 locations, focused on electrification, software, artificial intelligence and automation, and revenue of €1.83 billion in 2025.',
      tag: 'employer-stated',
      src: 'https://www.avl.com/en/about-avl',
      by: 'AVL List GmbH, About AVL',
      seen: '2026-10-03'
    },
    'at-sbg-emp': {
      t: 'The Salzburg region (NUTS 3 AT323, Salzburg and surroundings) has 226,400 jobs (2023): 74,800 in trade, transport, hospitality and information and communication, 62,300 in public administration, defence, education, health and other services, 42,700 in finance, real estate, professional and administrative services and 27,000 in manufacturing.',
      tag: 'data',
      src: 'https://ec.europa.eu/eurostat/databrowser/view/nama_10r_3empers/default/table',
      by: 'Eurostat, employment (thousand persons) by NUTS 3 region and activity (nama_10r_3empers), 2023, NUTS 3 AT323',
      seen: '2026-10-03'
    },
    'at-porsche': {
      t: 'Porsche Holding Salzburg says it is Europe’s largest automotive distributor, with its roots in Salzburg, operations in 29 countries and more than 36,900 employees worldwide, and that in 2025 it regained the position of the company with the highest revenue in Austria.',
      tag: 'employer-stated',
      src: 'https://www.porsche-holding.com/en/news/sustainable-growth-spurt-porsche-holding-salzburg-achieves-record-figures-for-revenue-and-deliveries-in-2025',
      by: 'Porsche Holding Salzburg, press release on the 2025 results, and Company profile',
      seen: '2026-10-03'
    }
  }
});

if (window.I18N) I18N.add('it', {
  'Austria has no single graduate recruiting season: voestalpine advertises trainee programmes whenever they are needed, takes holiday-job applications until the end of January and gives notice of openings by the end of May.':
    'L’Austria non ha un’unica stagione di reclutamento dei laureati: voestalpine pubblica i programmi trainee quando servono, accetta le candidature per i lavori estivi fino a fine gennaio e comunica i posti disponibili entro fine maggio.',
  'Vienna’s main graduate fair, Career Calling, takes place on 14 October 2026, TECONOMY Vienna on 21 October 2026 and the TU Wien day TUday26 was on 7 May 2026.':
    'La principale fiera per laureati di Vienna, Career Calling, si tiene il 14 ottobre 2026, TECONOMY Vienna il 21 ottobre 2026 e la giornata della TU Wien TUday26 si è tenuta il 7 maggio 2026.',
  'In 2023 graduates made up 47.7% of employees in information and communication, and the average stock of vacancies asking for a degree reported to the AMS rose to over 5,500 in 2024.':
    'Nel 2023 i laureati erano il 47,7% dei dipendenti nell’informazione e comunicazione, e lo stock medio di offerte che richiedono una laurea segnalate all’AMS è salito a oltre 5.500 nel 2024.',
  'In December 2024 the AMS unemployment rate was 3.4% for people with a university, college or teacher-training degree, against 8.2% across all education levels.':
    'A dicembre 2024 il tasso di disoccupazione AMS era del 3,4% per chi ha una laurea universitaria, di FH o di alta scuola pedagogica, contro l’8,2% su tutti i livelli di istruzione.',
  'A strong graduate labour market run mostly in German, with Vienna as the country’s business centre and a base for regional headquarters covering central and eastern Europe. Non-EU graduates of Austrian universities have one of the easier routes to a work permit; consulting and most corporate roles expect fluent German.':
    'Un mercato del lavoro per laureati solido e in gran parte in tedesco, con Vienna come centro degli affari del paese e base delle sedi regionali per l’Europa centrale e orientale. I laureati extra-UE delle università austriache hanno uno dei percorsi più semplici verso il permesso di lavoro; consulenza e quasi tutti i ruoli aziendali richiedono un tedesco fluente.',
  'Regional headquarters':
    'Sedi regionali',
  'Banking':
    'Banca',
  'Pharmaceuticals':
    'Farmaceutica',
  'Engineering and manufacturing':
    'Ingegneria e manifattura',
  'International organisations':
    'Organizzazioni internazionali',
  'Tech and data demand in Vienna is not rated, and finance is rated present on one named bank: Eurostat’s tables give no finance or information-and-communication split for Austrian regions, and the headcounts of Erste Group, OMV, UNIQA, Vienna Insurance Group and the Vienna universities were not read on pages that state them.':
    'La domanda di tecnologia e dati a Vienna non è valutata, e la finanza è valutata presente su una sola banca citata: le tabelle Eurostat non danno una ripartizione tra finanza e informazione e comunicazione per le regioni austriache, e gli organici di Erste Group, OMV, UNIQA, Vienna Insurance Group e delle università viennesi non sono stati letti su pagine che li riportano.',
  'All immigration, visa, permit and 14-salary tax rules are consolidated from primary sources in visas_immigration/austria/austria_visas_immigration_guide.md.':
    'Tutte le norme su immigrazione, visti, permessi e tassazione delle 14 mensilità sono consolidate da fonti primarie in visas_immigration/austria/austria_visas_immigration_guide.md.',
  'No family is rated in Linz: voestalpine is a named employer, but no source read says how many entry posts it offers to business graduates.':
    'A Linz non è valutata nessuna famiglia: voestalpine è un datore di lavoro citato, ma nessuna fonte letta dice quanti posti d’ingresso offre ai laureati in discipline economiche.',
  'Pay by state is Statistik Austria’s median annual income of all employees from payroll-tax data, part-time work included, so it is lower than full-time pay; the city of Vienna’s low median reflects that mix.':
    'Gli stipendi per Land sono il reddito annuo mediano di tutti i dipendenti di Statistik Austria da dati fiscali sulle retribuzioni, compreso il lavoro a tempo parziale, quindi sono inferiori alla paga a tempo pieno; la mediana bassa della città di Vienna riflette questa composizione.',
  'Graz is rated for software on one employer’s statement of its focus (AVL), and Salzburg for business on one company headquarters (Porsche Holding Salzburg); neither has a statistic by family.':
    'Graz è valutata per il software sulla dichiarazione di un solo datore di lavoro sul proprio orientamento (AVL), e Salisburgo per le discipline economiche sulla sede di una sola azienda (Porsche Holding Salzburg); nessuna ha una statistica per famiglia.',
  '§6 Austria: job search and the Red-White-Red Card for graduates':
    '§6 Austria: ricerca di lavoro e la Carta rosso-bianco-rossa per laureati',
  'DACH language rules and Vienna consulting pay':
    'Le regole linguistiche dell’area DACH e gli stipendi della consulenza a Vienna',
  '§1 graduate employment by country':
    '§1 occupazione dei laureati per paese',
  'Country brief: hubs, employers, pay and standing':
    'Dossier paese: poli, datori di lavoro, stipendi e posizionamento',
  'Regional headquarters for central and eastern Europe':
    'Sedi regionali per l’Europa centrale e orientale',
  'Consulting':
    'Consulenza',
  'international headquarters in Austria':
    'sedi internazionali in Austria',
  'headquarters in Vienna':
    'sede centrale a Vienna',
  'ecosystem value $13 billion':
    'valore dell’ecosistema 13 miliardi di dollari',
  'Vienna’s start-up ecosystem':
    'L’ecosistema start-up di Vienna',
  'Upper Austria’s industrial capital':
    'Il capoluogo industriale dell’Alta Austria',
  'Steel and metals':
    'Siderurgia e metalli',
  '461,300 jobs (2021)':
    '461.300 posti (2021)',
  'Employers in the metropolitan region':
    'I datori di lavoro della regione metropolitana',
  'group headquarters in Linz; 48,800 employees worldwide':
    'sede del gruppo a Linz; 48.800 dipendenti nel mondo',
  'Styria’s capital and car-engineering centre':
    'Il capoluogo della Stiria e centro dell’ingegneria automobilistica',
  '367,900 jobs (2021)':
    '367.900 posti (2021)',
  'headquartered in Graz; 12,000 employees at 90 locations':
    'con sede a Graz; 12.000 dipendenti in 90 sedi',
  'A smaller metropolitan region of trade and tourism':
    'Una regione metropolitana più piccola di commercio e turismo',
  'Trade':
    'Commercio',
  '218,200 jobs (2021)':
    '218.200 posti (2021)',
  'Europe’s largest automotive distributor, headquartered in Salzburg; more than 36,900 employees worldwide':
    'il maggiore distributore automobilistico d’Europa, con sede a Salisburgo; oltre 36.900 dipendenti nel mondo',
  'Entry pay':
    'Stipendio d’ingresso',
  'Graduate labour market':
    'Mercato del lavoro dei laureati',
  'McKinsey’s recruiters say fluent German is mandatory for its Germany and Austria offices.':
    'I selezionatori di McKinsey dichiarano obbligatorio un tedesco fluente per gli uffici di Germania e Austria.',
  '90.8% of recent tertiary graduates in Austria were in work in 2025, among the highest rates in the EU.':
    'Nel 2025 il 90,8% dei laureati recenti in Austria lavorava, tra i tassi più alti dell’UE.',
  'More than 412 international companies run international headquarters from Austria, 45% of them in Vienna, among them Boehringer Ingelheim, Henkel, Takeda, BMW Group and Siemens.':
    'Oltre 412 aziende internazionali gestiscono dall’Austria le loro sedi internazionali, il 45% delle quali a Vienna, tra cui Boehringer Ingelheim, Henkel, Takeda, BMW Group e Siemens.',
  'Eurostat counts 461,300 people in work in the Linz metropolitan region in 2021; the region’s GDP was €41.4 billion in 2021.':
    'Eurostat conta 461.300 occupati nella regione metropolitana di Linz nel 2021; il PIL della regione era di 41,4 miliardi di € nel 2021.',
  'Eurostat counts 367,900 people in work in the Graz metropolitan region in 2021; the region’s GDP was €30.3 billion in 2021.':
    'Eurostat conta 367.900 occupati nella regione metropolitana di Graz nel 2021; il PIL della regione era di 30,3 miliardi di € nel 2021.',
  'Eurostat counts 218,200 people in work in the Salzburg metropolitan region in 2021; the region’s GDP was €22.1 billion in 2021.':
    'Eurostat conta 218.200 occupati nella regione metropolitana di Salisburgo nel 2021; il PIL della regione era di 22,1 miliardi di € nel 2021.',
  'In 2022 employees under 30 in Austrian firms with 10 or more staff (public administration excluded) earned a mean of €37,371 gross a year, and those under 30 working as professionals €47,987, against €52,526 for all ages.':
    'Nel 2022 i dipendenti sotto i 30 anni delle imprese austriache con almeno 10 addetti (esclusa la pubblica amministrazione) guadagnavano in media 37.371 € lordi all’anno, e quelli sotto i 30 anni che lavorano come professionisti 47.987 €, contro 52.526 € per tutte le età.',
  'In 2024 the median gross annual income of employees (apprentices excluded) was €39,121 in Austria, €36,022 in Vienna, €40,845 in Upper Austria, €39,557 in Styria and €37,351 in Salzburg; the figures cover all employees, part-time and part-year work included, not only full-time full-year posts.':
    'Nel 2024 il reddito lordo annuo mediano dei dipendenti (apprendisti esclusi) era di 39.121 € in Austria, 36.022 € a Vienna, 40.845 € in Alta Austria, 39.557 € in Stiria e 37.351 € a Salisburgo; le cifre riguardano tutti i dipendenti, compreso il lavoro a tempo parziale e per parte dell’anno, non solo i posti a tempo pieno tutto l’anno.',
  'In 2025 the employment rate of Austrians aged 20 to 34 with a tertiary degree was 89.2% (88.8% for those who finished within the last five years); unemployment was 5.7% overall and 11.5% for the 15-to-24s, and GDP was €518.2 billion.':
    'Nel 2025 il tasso di occupazione degli austriaci di 20-34 anni con un titolo terziario era dell’89,2% (l’88,8% per chi ha finito da non oltre cinque anni); la disoccupazione era del 5,7% in complesso e dell’11,5% tra i 15-24enni, e il PIL di 518,2 miliardi di euro.',
  'The Global Financial Centres Index 40 (September 2026) ranks Vienna 81st in the world (down 4 places), against Zurich 10th, Paris 23rd, Frankfurt 29th, Munich 58th and Milan 62nd; it is not among the top 15 Western European centres.':
    'L’indice Global Financial Centres 40 (settembre 2026) colloca Vienna all’81º posto nel mondo (in calo di 4 posizioni), contro Zurigo 10ª, Parigi 23ª, Francoforte 29ª, Monaco 58ª e Milano 62ª; non è tra i primi 15 centri dell’Europa occidentale.',
  'Startup Genome’s 2026 report puts the value of Vienna’s start-up ecosystem at $13 billion (Europe’s average $14.3 billion), with $516 million of seed and Series A funding in H2 2023–2025 and $2 billion of exits in 2021–2025.':
    'Il rapporto 2026 di Startup Genome stima il valore dell’ecosistema start-up di Vienna in 13 miliardi di dollari (media europea 14,3 miliardi), con 516 milioni di dollari di finanziamenti seed e Series A nel H2 2023–2025 e 2 miliardi di dollari di exit nel 2021–2025.',
  'Raiffeisen Bank International says its headquarters are in Vienna, at the gateway to Central and Eastern Europe.':
    'Raiffeisen Bank International dice che la sua sede centrale è a Vienna, alla porta dell’Europa centrale e orientale.',
  'Vienna (NUTS 3 region AT130) has 1,127,400 jobs (2023): 368,100 in public administration, defence, education, health and other services, 342,900 in trade, transport, hospitality and information and communication, 286,100 in finance, real estate, professional and administrative services and 59,200 in manufacturing.':
    'Vienna (regione NUTS 3 AT130) conta 1.127.400 posti di lavoro (2023): 368.100 in amministrazione pubblica, difesa, istruzione, sanità e altri servizi, 342.900 in commercio, trasporti, ristorazione e informazione e comunicazione, 286.100 in finanza, immobiliare, servizi professionali e amministrativi e 59.200 nella manifattura.',
  'The Linz-Wels region (NUTS 3 AT312) has 388,100 jobs (2023), second in Austria after Vienna: 75,700 of them (20%) in manufacturing, 106,700 in trade, transport, hospitality and information and communication and 69,800 in finance, real estate, professional and administrative services.':
    'La regione di Linz-Wels (NUTS 3 AT312) conta 388.100 posti di lavoro (2023), seconda in Austria dopo Vienna: 75.700 dei quali (20%) nella manifattura, 106.700 in commercio, trasporti, ristorazione e informazione e comunicazione e 69.800 in finanza, immobiliare, servizi professionali e amministrativi.',
  'voestalpine describes itself as a steel and technology group headquartered in Linz, with 48,800 employees worldwide in its 2025/26 business year and revenue of €15.1 billion.':
    'voestalpine si descrive come un gruppo siderurgico e tecnologico con sede a Linz, con 48.800 dipendenti nel mondo nell’esercizio 2025/26 e ricavi di 15,1 miliardi di euro.',
  'The Graz region (NUTS 3 AT221) has 295,900 jobs (2023), third in Austria after Vienna and Linz-Wels: 98,300 in public administration, defence, education, health and other services, 74,100 in trade, transport, hospitality and information and communication and 45,200 in manufacturing.':
    'La regione di Graz (NUTS 3 AT221) conta 295.900 posti di lavoro (2023), terza in Austria dopo Vienna e Linz-Wels: 98.300 in amministrazione pubblica, difesa, istruzione, sanità e altri servizi, 74.100 in commercio, trasporti, ristorazione e informazione e comunicazione e 45.200 nella manifattura.',
  'AVL, headquartered in Graz, says it is a mobility-technology company with 12,000 employees at more than 90 locations, focused on electrification, software, artificial intelligence and automation, and revenue of €1.83 billion in 2025.':
    'AVL, con sede a Graz, dice di essere un’azienda di tecnologia per la mobilità con 12.000 dipendenti in oltre 90 sedi, concentrata su elettrificazione, software, intelligenza artificiale e automazione, e con ricavi di 1,83 miliardi di euro nel 2025.',
  'The Salzburg region (NUTS 3 AT323, Salzburg and surroundings) has 226,400 jobs (2023): 74,800 in trade, transport, hospitality and information and communication, 62,300 in public administration, defence, education, health and other services, 42,700 in finance, real estate, professional and administrative services and 27,000 in manufacturing.':
    'La regione di Salisburgo (NUTS 3 AT323, Salisburgo e dintorni) conta 226.400 posti di lavoro (2023): 74.800 in commercio, trasporti, ristorazione e informazione e comunicazione, 62.300 in amministrazione pubblica, difesa, istruzione, sanità e altri servizi, 42.700 in finanza, immobiliare, servizi professionali e amministrativi e 27.000 nella manifattura.',
  'Porsche Holding Salzburg says it is Europe’s largest automotive distributor, with its roots in Salzburg, operations in 29 countries and more than 36,900 employees worldwide, and that in 2025 it regained the position of the company with the highest revenue in Austria.':
    'Porsche Holding Salzburg dice di essere il maggiore distributore automobilistico d’Europa, con radici a Salisburgo, attività in 29 paesi e oltre 36.900 dipendenti nel mondo, e di aver ripreso nel 2025 la posizione di azienda con i maggiori ricavi in Austria.'
});
