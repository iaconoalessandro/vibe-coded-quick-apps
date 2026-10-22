/* Atlas record: Denmark. Read 2 October 2026, deepened 3 October 2026; log P48
 * (research/verification/round-4d.md, round-4k.md, round-5c.md). Work hours read on
 * nyidanmark.dk (updated 1 Oct 2026); job-seeking permit and pay limit are the
 * library's reading of SIRI (places/iberia-and-nordics.md §5). Copenhagen's IT and finance
 * ratings are "dominant" on Eurostat's metropolitan employment (63% and 64% of national
 * jobs); Aarhus, Aalborg and Odense rest on the same table and on regional pay from
 * Statistics Denmark. Brief: research/countries/dk-denmark.md. */

ATLAS.add({
  id: 'DK',
  checked: '2026-10-03',
  log: 'P48',
  summary: 'Copenhagen holds about two-thirds of Denmark’s information-and-communication and finance jobs and the headquarters of Danske Bank, Maersk, Carlsberg and the Medicon Valley life-science firms; Aarhus is a clear second, with Vestas and Arla. More international graduates now stay and work, but the first year is slow, tax is the heaviest in the Nordics, and from 1 October 2026 new non-EU students get one year, not three, to find a job.',
  sectors: [
    'Pharmaceuticals and life sciences',
    'Shipping and logistics',
    'Energy and green technology',
    'Banking',
    'Consumer goods'
  ],
  roles: ['it', 'software', 'finance', 'business'],
  hubs: [
    {
      id: 'copenhagen',
      name: 'Copenhagen',
      lat: 55.68,
      lon: 12.57,
      knownFor: 'Life sciences, shipping and the country’s banks',
      why: ['dk-medicon', 'dk-stay', 'dk-emp-cph', 'dk-danske', 'dk-maersk', 'dk-gfci', 'dk-lundbeck', 'dk-gdp'],
      sectors: ['Pharmaceuticals and life sciences', 'Banking', 'Shipping', 'Consulting'],
      employers: [
        { name: 'Novo Nordisk Graduate Programme', note: 'Danish not required', c: 'dk-novo' },
        { name: 'Novo Nordisk, Lundbeck, Ferring', note: 'Medicon Valley life-science companies', c: 'dk-medicon' },
        { name: 'Nordea Graduate Programme', note: 'Denmark, Finland, Norway and Sweden', c: 'dk-nordea' },
        { name: 'Danske Bank', note: 'headquarters of the largest Danish bank, with more than 20,000 staff', c: 'dk-danske' },
        { name: 'A.P. Moller - Maersk', note: 'headquarters; an 18-month management trainee programme starting in July', c: 'dk-maersk-mt' },
        { name: 'Carlsberg', note: 'headquarters in Copenhagen V; a 24-month graduate programme', c: 'dk-carlsberg' },
        { name: 'Netcompany', note: 'IT consultancy founded in Copenhagen, more than 9,500 staff', c: 'dk-netcompany' },
        { name: 'PFA and Copenhagen Municipality IT', note: 'graduate programmes of 24 and 18 months', c: 'dk-jobbank' }
      ],
      demand: { business: ['strong', 'dk-maersk', 'dk-carlsberg', 'dk-novo'], finance: ['dominant', 'dk-emp-cph', 'dk-danske', 'dk-nordea'], economics: 'gap', accounting: 'gap', management: 'gap', marketing: 'gap', logistics: ['present', 'dk-maersk'], analytics: 'gap', it: ['dominant', 'dk-emp-cph', 'dk-netcompany'], software: ['dominant', 'dk-emp-cph', 'dk-netcompany'], datasci: 'gap', ai: 'gap', cs: 'gap', bigdata: 'gap' },
      finance: { banking: ['strong', 'dk-emp-cph', 'dk-danske', 'dk-nordea'], ib: 'gap', am: 'gap', pe: 'gap', vc: 'gap', corpfin: 'gap', risk: 'gap', finconsult: 'gap' },
      standing: [
        { f: 'software', s: [5, 3, 2], c: ['dk-emp-cph', 'dk-genome', 'dk-ict'] },
        { f: 'it', s: [5, 3, 2], c: ['dk-emp-cph', 'dk-genome', 'dk-ict'] },
        { f: 'finance', s: [5, 3, 2], c: ['dk-emp-cph', 'dk-gfci'] },
        { f: 'business', s: [5, 2, 1], c: ['dk-gdp', 'dk-maersk', 'dk-carlsberg', 'dk-novo'] }
      ],
      metrics: {
        pop: { v: 2109733, year: 2023, area: 'metro', tag: 'data', src: 'https://ec.europa.eu/eurostat/api/dissemination/statistics/1.0/data/met_pjanaggr3?format=JSON&lang=EN&metroreg=DK001MC&sex=T&age=TOTAL&time=2023', by: 'Eurostat, met_pjanaggr3 population on 1 January, metropolitan region', seen: '2026-10-03' },
        gdp: { v: 178.83, cur: 'EUR', year: 2022, area: 'metro', tag: 'data', src: 'https://ec.europa.eu/eurostat/api/dissemination/statistics/1.0/data/met_10r_3gdp?format=JSON&lang=EN&metroreg=DK001MC&unit=MIO_EUR&time=2022', by: 'Eurostat, met_10r_3gdp GDP at current market prices, metropolitan region', seen: '2026-10-03' },
        wage: { v: 57773, cur: 'DKK', basis: 'mean', year: 2025, area: 'region', tag: 'data', src: 'https://www.statbank.dk/LONS30', by: 'Statistics Denmark, LONS30 standardised monthly earnings, all employees, Region Hovedstaden', seen: '2026-10-03' }
      },
      programmes: [
        { calc: 'masters', track: 'mim', id: 'cbs-mgmt', name: 'Copenhagen CBS — cand.merc. / MSc EBA' },
        { calc: 'masters', track: 'mif', id: 'cbs-fin', name: 'Copenhagen CBS — MSc Finance & Investments' },
        { calc: 'masters', track: 'marketing', id: 'cbs-sam', name: 'Copenhagen CBS — MSc EBA Sales Management' }
      ]
    },
    {
      id: 'aarhus',
      name: 'Aarhus',
      lat: 56.16,
      lon: 10.2,
      knownFor: 'Denmark’s second city for finance and information-and-communication jobs',
      why: ['dk-aarhus', 'dk-vestas', 'dk-arla', 'dk-danske-early'],
      sectors: ['Energy', 'Technology', 'Higher education'],
      employers: [
        { name: 'Vestas Wind Systems', note: 'headquarters, with a graduate programme', c: 'dk-vestas' },
        { name: 'Arla Foods', note: 'dairy cooperative, head office in Viby J', c: 'dk-arla' },
        { name: 'Danske Bank', note: 'student jobs in Aarhus as well as Copenhagen', c: 'dk-danske-early' },
        { t: 'Information and communication employers', note: '19,000 jobs (2022)', c: 'dk-aarhus' },
        { t: 'Finance and insurance employers', note: '9,000 jobs (2022)', c: 'dk-aarhus' }
      ],
      demand: { it: ['strong', 'dk-aarhus'], finance: ['strong', 'dk-aarhus'], business: ['present', 'dk-vestas', 'dk-arla'], economics: 'gap', accounting: 'gap', management: 'gap', marketing: 'gap', logistics: 'gap', analytics: 'gap', software: 'gap', datasci: 'gap', ai: 'gap', cs: 'gap', bigdata: 'gap' },
      standing: [
        { f: 'it', s: [4, 2, 1], c: ['dk-aarhus', 'dk-emp-cph'] },
        { f: 'finance', s: [4, 2, 1], c: ['dk-aarhus', 'dk-emp-cph'] }
      ],
      metrics: {
        pop: { v: 928096, year: 2023, area: 'metro', tag: 'data', src: 'https://ec.europa.eu/eurostat/api/dissemination/statistics/1.0/data/met_pjanaggr3?format=JSON&lang=EN&metroreg=DK002M&sex=T&age=TOTAL&time=2023', by: 'Eurostat, met_pjanaggr3 population on 1 January, metropolitan region', seen: '2026-10-03' },
        gdp: { v: 50.69, cur: 'EUR', year: 2022, area: 'metro', tag: 'data', src: 'https://ec.europa.eu/eurostat/api/dissemination/statistics/1.0/data/met_10r_3gdp?format=JSON&lang=EN&metroreg=DK002M&unit=MIO_EUR&time=2022', by: 'Eurostat, met_10r_3gdp GDP at current market prices, metropolitan region', seen: '2026-10-03' },
        wage: { v: 50316, cur: 'DKK', basis: 'mean', year: 2025, area: 'region', tag: 'data', src: 'https://www.statbank.dk/LONS30', by: 'Statistics Denmark, LONS30 standardised monthly earnings, all employees, Region Midtjylland', seen: '2026-10-03' }
      },
      programmes: []
    },
    {
      id: 'aalborg',
      name: 'Aalborg',
      lat: 57.05,
      lon: 9.92,
      knownFor: 'North Jutland’s centre, third in Denmark for information-and-communication jobs',
      why: ['dk-aalborg', 'dk-aau'],
      sectors: ['Technology', 'Energy', 'Higher education'],
      employers: [
        { t: 'Information and communication employers', note: '8,000 jobs (2022)', c: 'dk-aalborg' },
        { t: 'Finance and insurance employers', note: '4,000 jobs (2022)', c: 'dk-aalborg' },
        { name: 'Aalborg University', note: '17,700 students and more than 3,700 staff', c: 'dk-aau' }
      ],
      demand: { it: ['strong', 'dk-aalborg'], business: 'gap', finance: 'gap', economics: 'gap', accounting: 'gap', management: 'gap', marketing: 'gap', logistics: 'gap', analytics: 'gap', software: 'gap', datasci: 'gap', ai: 'gap', cs: 'gap', bigdata: 'gap' },
      standing: [
        { f: 'it', s: [3, 1, 1], c: ['dk-aalborg', 'dk-emp-cph'] }
      ],
      metrics: {
        pop: { v: 594634, year: 2023, area: 'metro', tag: 'data', src: 'https://ec.europa.eu/eurostat/api/dissemination/statistics/1.0/data/met_pjanaggr3?format=JSON&lang=EN&metroreg=DK004M&sex=T&age=TOTAL&time=2023', by: 'Eurostat, met_pjanaggr3 population on 1 January, metropolitan region', seen: '2026-10-03' },
        gdp: { v: 28.93, cur: 'EUR', year: 2022, area: 'metro', tag: 'data', src: 'https://ec.europa.eu/eurostat/api/dissemination/statistics/1.0/data/met_10r_3gdp?format=JSON&lang=EN&metroreg=DK004M&unit=MIO_EUR&time=2022', by: 'Eurostat, met_10r_3gdp GDP at current market prices, metropolitan region', seen: '2026-10-03' },
        wage: { v: 48209, cur: 'DKK', basis: 'mean', year: 2025, area: 'region', tag: 'data', src: 'https://www.statbank.dk/LONS30', by: 'Statistics Denmark, LONS30 standardised monthly earnings, all employees, Region Nordjylland', seen: '2026-10-03' }
      },
      programmes: []
    },
    {
      id: 'odense',
      name: 'Odense',
      lat: 55.4,
      lon: 10.39,
      knownFor: 'Funen’s centre, known for robotics',
      why: ['dk-odense', 'dk-robotics', 'dk-dtu'],
      sectors: ['Technology', 'Manufacturing', 'Public sector'],
      employers: [
        { t: 'Information and communication employers', note: '6,000 jobs (2022)', c: 'dk-odense' },
        { t: 'Finance and insurance employers', note: '3,000 jobs (2022)', c: 'dk-odense' },
        { name: 'Odense Robotics cluster', note: 'more than 160 robotics, automation and drone companies, 3,600 staff', c: 'dk-robotics' },
        { name: 'University of Southern Denmark (SDU)', note: '283rd in the QS World University Rankings 2027', c: 'dk-dtu' }
      ],
      demand: { business: 'gap', finance: 'gap', economics: 'gap', accounting: 'gap', management: 'gap', marketing: 'gap', logistics: 'gap', analytics: 'gap', it: 'gap', software: 'gap', datasci: 'gap', ai: 'gap', cs: 'gap', bigdata: 'gap' },
      standing: [
        { f: 'it', s: [3, 1, 1], c: ['dk-odense', 'dk-emp-cph'] }
      ],
      metrics: {
        pop: { v: 505026, year: 2023, area: 'metro', tag: 'data', src: 'https://ec.europa.eu/eurostat/api/dissemination/statistics/1.0/data/met_pjanaggr3?format=JSON&lang=EN&metroreg=DK003M&sex=T&age=TOTAL&time=2023', by: 'Eurostat, met_pjanaggr3 population on 1 January, metropolitan region', seen: '2026-10-03' },
        gdp: { v: 22.93, cur: 'EUR', year: 2022, area: 'metro', tag: 'data', src: 'https://ec.europa.eu/eurostat/api/dissemination/statistics/1.0/data/met_10r_3gdp?format=JSON&lang=EN&metroreg=DK003M&unit=MIO_EUR&time=2022', by: 'Eurostat, met_10r_3gdp GDP at current market prices, metropolitan region', seen: '2026-10-03' },
        wage: { v: 49835, cur: 'DKK', basis: 'mean', year: 2025, area: 'region', tag: 'data', src: 'https://www.statbank.dk/LONS30', by: 'Statistics Denmark, LONS30 standardised monthly earnings, all employees, Region Syddanmark', seen: '2026-10-03' }
      },
      programmes: []
    }
  ],
  work: [
    { k: 'Language', c: ['dk-lang', 'dk-lang-en'] },
    { k: 'Recruiting calendar', c: ['dk-novo', 'dk-nordea', 'dk-maersk-mt', 'dk-jobbank'] },
    { k: 'Tax and net pay', c: ['dk-tax'] },
    { k: 'Where demand is now', c: ['dk-cuts', 'dk-sectors'] },
    { k: 'Graduate labour market', c: ['dk-stay', 'dk-slow', 'dk-grad', 'dk-ict'] },
    { k: 'Entry pay', c: ['dk-wage-region'] }
  ],
  briefs: [
    ['places/iberia-and-nordics.md', 'Denmark: stay rates, the slow first year, tax, the 1 October 2026 permit change, Novo Nordisk'],
    ['careers/healthcare-and-pharma.md', 'Novo Nordisk’s graduate programme and its 2025 job cuts'],
    ['countries/dk-denmark.md', 'Country brief: hubs, employers, pay and standing']
  ],
  gaps: [
    'Enterprise counts by city were not read: Eurostat’s employment counts are for metropolitan regions, rounded to thousands, and for 2022, so shares such as 63% are approximate.',
    'Danish business-graduate starting pay has no primary source; the earnings figures are for all employees by region, not for graduates.',
    'The Positive List for graduates is verified and mapped in visas_immigration/denmark/denmark_visas_immigration_guide.md.',
    'Graduate programme terms come from employers’ pages or from the Jobbank.dk listing; Danske Bank’s page names no formal programme, and Netcompany’s careers page names none.',
    'Maersk’s headquarters address comes from its Jobbank.dk listing, because maersk.com pages gave none.',
    'AI, data science, analytics, marketing, accounting and management are not rated in any hub: no source read measures them by city.',
    'No family is rated in Odense: Eurostat puts it fourth in the country for ICT jobs, and the robotics cluster is described only by its own organisation.',
    'Hubs added on 3 October 2026 are rated only from Eurostat’s 2021–22 metropolitan employment counts: strong means second or third in the country for jobs in finance and insurance, or in information and communication, with at least 5,000 such jobs.'
  ],
  claims: {
    'dk-stay': { t: '53% of international master’s graduates were working in Denmark two years after graduating, up from about 40% before 2019; at CBS the figure was 46%, and Italians were 9% of those employed.', tag: 'data', src: 'research/places/iberia-and-nordics.md', by: 'DI from Statistics Denmark (March 2026), via places/iberia-and-nordics.md §2', seen: '2026-10-02' },
    'dk-slow': { t: 'Danish graduates with a long higher education who finished in 2024 spent on average 23.3% of their first twelve months unemployed.', tag: 'data', src: 'research/places/iberia-and-nordics.md', by: 'DI from Statistics Denmark DREAM data (April 2026), via places/iberia-and-nordics.md §1', seen: '2026-10-02' },
    'dk-tax': { t: 'Of the Nordic and Iberian countries compared, Denmark’s tax is the heaviest: a graduate keeps about 65% of €60,000, and the 27% scheme for key employees needs DKK 65,400 a month.', tag: 'data', src: 'research/places/iberia-and-nordics.md', by: 'skat.dk and PwC Denmark, author calculation in places/iberia-and-nordics.md §4', seen: '2026-10-02' },
    'dk-novo': { t: 'Novo Nordisk’s graduate programme does not require Danish; applications for a September 2027 start open on 6 December 2026.', tag: 'employer-stated', src: 'research/places/iberia-and-nordics.md', by: 'Novo Nordisk careers, via places/iberia-and-nordics.md §6', seen: '2026-10-02' },
    'dk-nordea': { t: 'Nordea’s 1.5-year Graduate Programme starts in September in Denmark, Finland, Norway and Sweden; the 2026 applications ran from 9 to 28 February.', tag: 'employer-stated', src: 'https://www.nordea.com/en/careers/nordea-graduate-programme', by: 'Nordea careers', seen: '2026-10-02' },
    'dk-medicon': { t: 'Medicon Valley, across Greater Copenhagen and southern Sweden, counts more than 580 life-science companies, 9 universities and 32 hospitals, among them Novo Nordisk, Lundbeck and Ferring.', tag: 'data', src: 'https://www.copcap.com/medicon-valley', by: 'Copenhagen Capacity (regional investment agency)', seen: '2026-10-02' },
    'dk-cuts': { t: 'Novo Nordisk announced 9,000 job cuts in September 2025, about 5,000 of them in Denmark, with a hiring freeze on non-critical roles.', tag: 'practitioner consensus', src: 'research/careers/healthcare-and-pharma.md', by: 'Pharmaceutical Executive (10 Sep 2025), via careers/healthcare-and-pharma.md', seen: '2026-10-01' },
    'dk-aarhus': { t: 'Eurostat counts 487,000 people in work in the Aarhus metropolitan region in 2022: 19,000 in information and communication (second in Denmark, after Copenhagen) and 9,000 in finance and insurance (second in Denmark, after Copenhagen). The region’s GDP was €50.7 billion in 2022.', tag: 'data', src: 'https://ec.europa.eu/eurostat/databrowser/view/met_10r_3emp/default/table?lang=en', by: 'Eurostat, metropolitan regions: employment by activity (met_10r_3emp) and GDP (met_10r_3gdp)', seen: '2026-10-03' },
    'dk-aalborg': { t: 'Eurostat counts 299,000 people in work in the Aalborg metropolitan region in 2022: 8,000 in information and communication (third in Denmark, after Copenhagen and Aarhus) and 4,000 in finance and insurance. The region’s GDP was €28.9 billion in 2022.', tag: 'data', src: 'https://ec.europa.eu/eurostat/databrowser/view/met_10r_3emp/default/table?lang=en', by: 'Eurostat, metropolitan regions: employment by activity (met_10r_3emp) and GDP (met_10r_3gdp)', seen: '2026-10-03' },
    'dk-odense': { t: 'Eurostat counts 243,000 people in work in the Odense metropolitan region in 2022: 6,000 in information and communication and 3,000 in finance and insurance. The region’s GDP was €22.9 billion in 2022.', tag: 'data', src: 'https://ec.europa.eu/eurostat/databrowser/view/met_10r_3emp/default/table?lang=en', by: 'Eurostat, metropolitan regions: employment by activity (met_10r_3emp) and GDP (met_10r_3gdp)', seen: '2026-10-03' },
    'dk-emp-cph': { t: 'Eurostat counts 77,000 people employed in information and communication in the Copenhagen metropolitan region in 2022, about 63% of Denmark’s 123,000, and 48,000 in finance and insurance, about 64% of 75,000 (counts rounded to thousands).', tag: 'data', src: 'https://ec.europa.eu/eurostat/api/dissemination/statistics/1.0/data/met_10r_3emp?format=JSON&lang=EN&metroreg=DK001MC&wstatus=EMP&nace_r2=TOTAL&nace_r2=J&nace_r2=K&time=2022', by: 'Eurostat, met_10r_3emp metropolitan regions: employment by activity, 2022 (Copenhagen DK001MC)', seen: '2026-10-03' },
    'dk-danske': { t: 'Danske Bank gives its address as Bernstorffsgade 40, Copenhagen, and says it has more than 20,000 employees across Denmark, Finland, Norway and Sweden.', tag: 'employer-stated', src: 'https://danskebank.com/about-us', by: 'Danske Bank, about us and contact pages', seen: '2026-10-03' },
    'dk-danske-early': { t: 'Danske Bank’s early-careers page offers full-time roles after graduation, student jobs mainly in Copenhagen, Aarhus and Linköping, and internships.', tag: 'employer-stated', src: 'https://danskebank.com/careers/students-and-graduates', by: 'Danske Bank careers, students and graduates', seen: '2026-10-03' },
    'dk-maersk': { t: 'A.P. Moller - Maersk gives its address as Esplanaden 50, Copenhagen, and says it has more than 100,000 employees in 130 countries.', tag: 'employer-stated', src: 'https://www.maersk.com/about', by: 'Maersk, about us (headcount); address from its graduate-programme listing on Jobbank.dk', seen: '2026-10-03' },
    'dk-maersk-mt': { t: 'Maersk’s Regional Management Trainee Program lasts 18 months, takes applications in January and February and starts in July.', tag: 'employer-stated', src: 'https://jobbank.dk/en/graduateprogrammer/32529/maersk-group-ap-moller-maersk', by: 'Jobbank.dk, Maersk graduate-programme listing', seen: '2026-10-03' },
    'dk-carlsberg': { t: 'Carlsberg gives its address as J.C. Jacobsens Gade 1, Copenhagen V, and says it has 37,000 employees; its Danish graduate programme runs 24 months in Copenhagen and Fredericia, with applications in December and January and a September start.', tag: 'employer-stated', src: 'https://www.carlsberggroup.com/who-we-are/', by: 'Carlsberg Group, who we are (address, staff); programme terms from the Jobbank.dk graduate listing', seen: '2026-10-03' },
    'dk-lundbeck': { t: 'Lundbeck gives its headquarters as Ottiliavej 9, Valby, and Novo Nordisk gives Novo Allé 1, Bagsværd, both in Greater Copenhagen.', tag: 'employer-stated', src: 'https://www.lundbeck.com/global/about-us', by: 'Lundbeck about us; Novo Nordisk contact page (https://www.novonordisk.com/about/contact.html)', seen: '2026-10-03' },
    'dk-netcompany': { t: 'Netcompany says it was founded in Copenhagen in 2000 and has grown to more than 9,500 professionals in more than 10 countries.', tag: 'employer-stated', src: 'https://www.netcompany.com/about-us', by: 'Netcompany, about us', seen: '2026-10-03' },
    'dk-jobbank': { t: 'The Danish graduate-job portal Jobbank.dk lists graduate programmes in Copenhagen from PFA (24 months, applications December and January, September start), Copenhagen Municipality’s IT department (18 months, March and April) and Banedanmark (18 months), and many more employers, among them Nordea, Jyske Bank, Nykredit, Novo Nordisk, Pandora, Deloitte, PwC, EY and KPMG.', tag: 'employer-stated', src: 'https://jobbank.dk/en/graduateprogrammer', by: 'Jobbank.dk, graduate programmes (listings posted by employers)', seen: '2026-10-03' },
    'dk-gfci': { t: 'The Global Financial Centres Index 40 (September 2026) ranks Copenhagen 25th of 117 centres, up 19 places, and the seventh European centre after London, Zurich, Geneva, Luxembourg, Lugano and Paris; for fintech it is 65th.', tag: 'practitioner consensus', src: 'https://www.longfinance.net/media/documents/GFCI_40_Report_2026.09.16_v1.2.pdf', by: 'Z/Yen and Long Finance, Global Financial Centres Index 40 (September 2026), tables 1 and 16', seen: '2026-10-03' },
    'dk-genome': { t: 'Startup Genome’s ecosystem page for Copenhagen shows $1.6 billion of seed and Series A funding in 2023–2025 and $8 billion of exits in 2021–2025, against regional averages of $531 million and $4.3 billion; Stockholm, shown beside it, is $1.6 billion and $34 billion.', tag: 'practitioner consensus', src: 'https://startupgenome.com/ecosystems/copenhagen', by: 'Startup Genome, Copenhagen and Stockholm ecosystem pages (GSER 2026 data)', seen: '2026-10-03' },
    'dk-dtu': { t: 'The Technical University of Denmark (DTU) is 105th in the QS World University Rankings 2027, second in Denmark and 40th in Europe, and the University of Southern Denmark (SDU) is 283rd.', tag: 'employer-stated', src: 'https://www.miragenews.com/dtu-holds-firm-in-global-university-rankings-1694998/', by: 'DTU news (18 Jun 2026) and SDU news (19 Jun 2026, https://www.sdu.dk/da/nyheder/sdu-rykker-igen-frem-paa-anerkendt-qs-rankingliste?sc_lang=en)', seen: '2026-10-03' },
    'dk-vestas': { t: 'Vestas Wind Systems gives its address as Hedeager 42, Aarhus N, and its careers site lists a Vestas Graduate Programme among its early-careers routes.', tag: 'employer-stated', src: 'https://www.vestas.com/en/about/contact', by: 'Vestas, contact page and early-careers pages', seen: '2026-10-03' },
    'dk-arla': { t: 'Arla Foods gives its head office as Sønderhøj 14, Viby J, in the Aarhus area, and Arla appears in the Jobbank.dk graduate listing.', tag: 'employer-stated', src: 'https://www.arla.com/contact/', by: 'Arla Foods, contact page; Jobbank.dk graduate listing', seen: '2026-10-03' },
    'dk-aau': { t: 'Aalborg University says it has 17,700 students and more than 3,700 employees.', tag: 'employer-stated', src: 'https://www.en.aau.dk/about-aau', by: 'Aalborg University, about AAU', seen: '2026-10-03' },
    'dk-robotics': { t: 'Odense Robotics, the cluster organisation, says there are more than 160 robotics, automation and drone companies with 3,600 employees on Funen and that over €1 billion has been invested in the city’s robotics companies.', tag: 'employer-stated', src: 'https://www.odenserobotics.dk/odense-wins-leading-robotics-conference-in-2027/', by: 'Odense Robotics, facts on the cluster', seen: '2026-10-03' },
    'dk-ict': { t: 'In 2025 ICT specialists were 5.7% of employment in Denmark, against 5.0% in the EU, the tenth highest of the 33 European countries Eurostat lists (joint with Lithuania); Sweden led with 8.9%.', tag: 'data', src: 'https://ec.europa.eu/eurostat/api/dissemination/statistics/1.0/data/isoc_sks_itspt?format=JSON&lang=EN&geo=DK&time=2025', by: 'Eurostat, isoc_sks_itspt ICT specialists in employment, 2025 (updated 17 Apr 2026)', seen: '2026-10-03' },
    'dk-grad': { t: 'In 2025, 83.8% of Danish tertiary graduates aged 20–34 who finished within the last three years were in work (EU 85.3%), and unemployment among 15-to-24-year-olds was 13.8% (EU 15.2%).', tag: 'data', src: 'https://ec.europa.eu/eurostat/api/dissemination/statistics/1.0/data/edat_lfse_24?format=JSON&lang=EN&duration=Y_LE3&isced11=ED5-8&age=Y20-34&sex=T&geo=DK&geo=EU27_2020', by: 'Eurostat, edat_lfse_24 and une_rt_a, 2025 (updated 10 Sep 2026)', seen: '2026-10-03' },
    'dk-wage-region': { t: 'In 2025 standardised monthly earnings for all employees averaged DKK 52,846 in Denmark, DKK 57,773 in Region Hovedstaden (Copenhagen), DKK 50,316 in Region Midtjylland (Aarhus), DKK 49,835 in Region Syddanmark (Odense) and DKK 48,209 in Region Nordjylland (Aalborg).', tag: 'data', src: 'https://www.statbank.dk/LONS30', by: 'Statistics Denmark, LONS30 earnings by region, sector, salary and sex, 2025 (all sectors, standardised monthly earnings)', seen: '2026-10-03' },
    'dk-lang': { t: 'Novo Nordisk’s corporate language is English and Danish is not required for its graduate programme, although some International Operations tracks have local-language requirements.', tag: 'employer-stated', src: 'https://www.novonordisk.com/careers/early-career-programmes/graduate/application-process.html', by: 'Novo Nordisk careers, graduate programme application process', seen: '2026-10-08' },
    'dk-lang-en': { t: 'In 2024 DTU, Grundfos, MAN Energy Solutions, Terma and Topsoe advertised the most English-only jobs in Denmark (244, 112, 92, 60 and 55), and Workindenmark says most positions do not require Danish but some do.', tag: 'practitioner consensus', src: 'https://www.thelocal.dk/20250326/which-employers-in-denmark-offer-the-most-jobs-in-english', by: 'The Local Denmark on jobsinenglish.dk data (2024); Workindenmark, sectors with high demand (21 Sep 2026)', seen: '2026-10-08' },
    'dk-sectors': { t: 'In September 2026 Workindenmark lists engineering, ICT and robotics, life science, business and finance, healthcare and green energy among the sectors with high demand and many skills shortages.', tag: 'practitioner consensus', src: 'https://workindenmark.dk/working-in-denmark/sectors-with-high-demand', by: 'Workindenmark, sectors with high demand (updated 21 Sep 2026)', seen: '2026-10-08' },
    'dk-gdp': { t: 'Eurostat puts the Copenhagen metropolitan region’s GDP at €178.8 billion in 2022, 47% of Denmark’s €380.6 billion, with 36% of its residents (2,110,000 of 5,933,000 in 2023).', tag: 'data', src: 'https://ec.europa.eu/eurostat/api/dissemination/statistics/1.0/data/met_10r_3gdp?format=JSON&lang=EN&metroreg=DK001MC&unit=MIO_EUR&time=2022', by: 'Eurostat, met_10r_3gdp and met_pjanaggr3, metropolitan regions (Copenhagen DK001MC and Denmark)', seen: '2026-10-03' }
  }
});

if (window.I18N) I18N.add('it', {
  'Novo Nordisk’s corporate language is English and Danish is not required for its graduate programme, although some International Operations tracks have local-language requirements.':
    'La lingua aziendale di Novo Nordisk è l’inglese e il danese non è richiesto per il suo programma per laureati, anche se alcuni percorsi International Operations hanno requisiti di lingua locale.',
  'In 2024 DTU, Grundfos, MAN Energy Solutions, Terma and Topsoe advertised the most English-only jobs in Denmark (244, 112, 92, 60 and 55), and Workindenmark says most positions do not require Danish but some do.':
    'Nel 2024 DTU, Grundfos, MAN Energy Solutions, Terma e Topsoe hanno pubblicato più annunci solo in inglese in Danimarca (244, 112, 92, 60 e 55), e Workindenmark afferma che la maggior parte delle posizioni non richiede il danese ma alcune sì.',
  'In September 2026 Workindenmark lists engineering, ICT and robotics, life science, business and finance, healthcare and green energy among the sectors with high demand and many skills shortages.':
    'A settembre 2026 Workindenmark indica ingegneria, ICT e robotica, scienze della vita, economia e finanza, sanità ed energia verde tra i settori con alta domanda e molte carenze di competenze.',
  'Copenhagen holds about two-thirds of Denmark’s information-and-communication and finance jobs and the headquarters of Danske Bank, Maersk, Carlsberg and the Medicon Valley life-science firms; Aarhus is a clear second, with Vestas and Arla. More international graduates now stay and work, but the first year is slow, tax is the heaviest in the Nordics, and from 1 October 2026 new non-EU students get one year, not three, to find a job.':
    'Copenaghen ha circa due terzi dei posti di lavoro danesi nell’informazione e comunicazione e nella finanza e le sedi centrali di Danske Bank, Maersk, Carlsberg e delle aziende life science della Medicon Valley; Aarhus è una chiara seconda, con Vestas e Arla. Più laureati internazionali ora restano e lavorano, ma il primo anno è lento, le tasse sono le più pesanti dei paesi nordici e dal 1º ottobre 2026 i nuovi studenti extra-UE hanno un anno, non tre, per trovare lavoro.',
  'Pharmaceuticals and life sciences':
    'Farmaceutica e scienze della vita',
  'Shipping and logistics':
    'Trasporto marittimo e logistica',
  'Energy and green technology':
    'Energia e tecnologie verdi',
  'Banking':
    'Banca',
  'Enterprise counts by city were not read: Eurostat’s employment counts are for metropolitan regions, rounded to thousands, and for 2022, so shares such as 63% are approximate.':
    'Non sono stati letti conteggi delle imprese per città: i dati di Eurostat sull’occupazione riguardano le regioni metropolitane, arrotondati alle migliaia, e il 2022, quindi quote come il 63% sono approssimative.',
  'Danish business-graduate starting pay has no primary source; the earnings figures are for all employees by region, not for graduates.':
    'Per la retribuzione iniziale dei laureati in business in Danimarca non c’è una fonte primaria; i dati sui guadagni riguardano tutti i dipendenti per regione, non i laureati.',
  'The Positive List for graduates is verified and mapped in visas_immigration/denmark/denmark_visas_immigration_guide.md.':
    'La Positive List per i laureati è verificata e consolidata in visas_immigration/denmark/denmark_visas_immigration_guide.md.',
  'Graduate programme terms come from employers’ pages or from the Jobbank.dk listing; Danske Bank’s page names no formal programme, and Netcompany’s careers page names none.':
    'I termini dei programmi per laureati provengono dalle pagine dei datori di lavoro o dall’elenco di Jobbank.dk; la pagina di Danske Bank non indica alcun programma formale, e quella di Netcompany nemmeno.',
  'Maersk’s headquarters address comes from its Jobbank.dk listing, because maersk.com pages gave none.':
    'L’indirizzo della sede centrale di Maersk proviene dall’elenco su Jobbank.dk, perché le pagine di maersk.com non ne riportavano uno.',
  'AI, data science, analytics, marketing, accounting and management are not rated in any hub: no source read measures them by city.':
    'IA, data science, analytics, marketing, contabilità e management non sono valutati in nessun polo: nessuna fonte letta li misura per città.',
  'No family is rated in Odense: Eurostat puts it fourth in the country for ICT jobs, and the robotics cluster is described only by its own organisation.':
    'Nessuna famiglia è valutata a Odense: Eurostat la colloca quarta nel paese per i posti ICT, e il cluster della robotica è descritto solo dalla sua stessa organizzazione.',
  'Hubs added on 3 October 2026 are rated only from Eurostat’s 2021–22 metropolitan employment counts: strong means second or third in the country for jobs in finance and insurance, or in information and communication, with at least 5,000 such jobs.':
    'I poli aggiunti il 3 ottobre 2026 sono valutati solo in base ai conteggi Eurostat 2021–22 dell’occupazione metropolitana: forte significa secondo o terzo nel paese per posti di lavoro in finanza e assicurazioni, o nell’informazione e comunicazione, con almeno 5.000 posti.',
  'Denmark: stay rates, the slow first year, tax, the 1 October 2026 permit change, Novo Nordisk':
    'Danimarca: tassi di permanenza, il primo anno lento, tasse, il cambio dei permessi del 1° ottobre 2026, Novo Nordisk',
  'Novo Nordisk’s graduate programme and its 2025 job cuts':
    'Il programma per neolaureati di Novo Nordisk e i tagli di posti del 2025',
  'Country brief: hubs, employers, pay and standing':
    'Dossier paese: poli, datori di lavoro, stipendi e posizionamento',
  'Life sciences, shipping and the country’s banks':
    'Scienze della vita, trasporto marittimo e le banche del paese',
  'Consulting':
    'Consulenza',
  'Danish not required':
    'Non è richiesto il danese',
  'Medicon Valley life-science companies':
    'Aziende life science della Medicon Valley',
  'Denmark, Finland, Norway and Sweden':
    'Danimarca, Finlandia, Norvegia e Svezia',
  'headquarters of the largest Danish bank, with more than 20,000 staff':
    'sede centrale della maggiore banca danese, con più di 20.000 dipendenti',
  'headquarters; an 18-month management trainee programme starting in July':
    'sede centrale; un programma trainee di management di 18 mesi con inizio a luglio',
  'headquarters in Copenhagen V; a 24-month graduate programme':
    'sede centrale a Copenaghen V; un programma per laureati di 24 mesi',
  'IT consultancy founded in Copenhagen, more than 9,500 staff':
    'società di consulenza IT fondata a Copenaghen, più di 9.500 dipendenti',
  'graduate programmes of 24 and 18 months':
    'programmi per laureati di 24 e 18 mesi',
  'Denmark’s second city for finance and information-and-communication jobs':
    'La seconda città danese per posti in finanza e in informazione e comunicazione',
  'headquarters, with a graduate programme':
    'sede centrale, con un programma per laureati',
  'dairy cooperative, head office in Viby J':
    'cooperativa casearia, sede centrale a Viby J',
  'student jobs in Aarhus as well as Copenhagen':
    'lavori per studenti ad Aarhus oltre che a Copenaghen',
  '19,000 jobs (2022)':
    '19.000 posti (2022)',
  'Information and communication employers':
    'I datori di lavoro dell’informazione e comunicazione',
  '9,000 jobs (2022)':
    '9.000 posti (2022)',
  'Finance and insurance employers':
    'I datori di lavoro di finanza e assicurazioni',
  'North Jutland’s centre, third in Denmark for information-and-communication jobs':
    'Il centro dello Jutland settentrionale, terza in Danimarca per posti in informazione e comunicazione',
  '8,000 jobs (2022)':
    '8.000 posti (2022)',
  '4,000 jobs (2022)':
    '4.000 posti (2022)',
  '17,700 students and more than 3,700 staff':
    '17.700 studenti e più di 3.700 dipendenti',
  'Funen’s centre, known for robotics':
    'Il centro di Fionia, noto per la robotica',
  '6,000 jobs (2022)':
    '6.000 posti (2022)',
  '3,000 jobs (2022)':
    '3.000 posti (2022)',
  'more than 160 robotics, automation and drone companies, 3,600 staff':
    'più di 160 aziende di robotica, automazione e droni, 3.600 dipendenti',
  '283rd in the QS World University Rankings 2027':
    '283ª nel QS World University Rankings 2027',
  'Recruiting calendar':
    'Calendario delle selezioni',
  'Graduate labour market':
    'Mercato del lavoro per i laureati',
  'Entry pay':
    'Stipendio d’ingresso',
  '53% of international master’s graduates were working in Denmark two years after graduating, up from about 40% before 2019; at CBS the figure was 46%, and Italians were 9% of those employed.':
    'Il 53% dei laureati magistrali internazionali lavorava in Danimarca due anni dopo la laurea, contro circa il 40% prima del 2019; alla CBS la quota era il 46%, e gli italiani erano il 9% degli occupati.',
  'Danish graduates with a long higher education who finished in 2024 spent on average 23.3% of their first twelve months unemployed.':
    'I laureati danesi con un percorso universitario lungo che hanno finito nel 2024 hanno trascorso in media il 23,3% dei primi dodici mesi da disoccupati.',
  'Of the Nordic and Iberian countries compared, Denmark’s tax is the heaviest: a graduate keeps about 65% of €60,000, and the 27% scheme for key employees needs DKK 65,400 a month.':
    'Tra i paesi nordici e iberici confrontati, il fisco danese è il più pesante: un laureato tiene circa il 65% di 60.000 €, e lo schema al 27% per i dipendenti chiave richiede 65.400 DKK al mese.',
  'Novo Nordisk’s graduate programme does not require Danish; applications for a September 2027 start open on 6 December 2026.':
    'Il programma per neolaureati di Novo Nordisk non richiede il danese; le candidature per l’inizio a settembre 2027 aprono il 6 dicembre 2026.',
  'Nordea’s 1.5-year Graduate Programme starts in September in Denmark, Finland, Norway and Sweden; the 2026 applications ran from 9 to 28 February.':
    'Il Graduate Programme di Nordea, di 1,5 anni, parte a settembre in Danimarca, Finlandia, Norvegia e Svezia; le candidature 2026 sono state aperte dal 9 al 28 febbraio.',
  'Medicon Valley, across Greater Copenhagen and southern Sweden, counts more than 580 life-science companies, 9 universities and 32 hospitals, among them Novo Nordisk, Lundbeck and Ferring.':
    'La Medicon Valley, tra la Grande Copenaghen e la Svezia meridionale, conta oltre 580 aziende delle scienze della vita, 9 università e 32 ospedali, tra cui Novo Nordisk, Lundbeck e Ferring.',
  'Novo Nordisk announced 9,000 job cuts in September 2025, about 5,000 of them in Denmark, with a hiring freeze on non-critical roles.':
    'Novo Nordisk ha annunciato 9.000 tagli di posti a settembre 2025, circa 5.000 in Danimarca, con un blocco delle assunzioni per i ruoli non essenziali.',
  'Eurostat counts 487,000 people in work in the Aarhus metropolitan region in 2022: 19,000 in information and communication (second in Denmark, after Copenhagen) and 9,000 in finance and insurance (second in Denmark, after Copenhagen). The region’s GDP was €50.7 billion in 2022.':
    'Eurostat conta 487.000 occupati nella regione metropolitana di Aarhus nel 2022: 19.000 nell’informazione e comunicazione (seconda in Danimarca, dopo Copenaghen) e 9.000 in finanza e assicurazioni (seconda in Danimarca, dopo Copenaghen). Il PIL della regione era di 50,7 miliardi di € nel 2022.',
  'Eurostat counts 299,000 people in work in the Aalborg metropolitan region in 2022: 8,000 in information and communication (third in Denmark, after Copenhagen and Aarhus) and 4,000 in finance and insurance. The region’s GDP was €28.9 billion in 2022.':
    'Eurostat conta 299.000 occupati nella regione metropolitana di Aalborg nel 2022: 8.000 nell’informazione e comunicazione (terza in Danimarca, dopo Copenaghen e Aarhus) e 4.000 in finanza e assicurazioni. Il PIL della regione era di 28,9 miliardi di € nel 2022.',
  'Eurostat counts 243,000 people in work in the Odense metropolitan region in 2022: 6,000 in information and communication and 3,000 in finance and insurance. The region’s GDP was €22.9 billion in 2022.':
    'Eurostat conta 243.000 occupati nella regione metropolitana di Odense nel 2022: 6.000 nell’informazione e comunicazione e 3.000 in finanza e assicurazioni. Il PIL della regione era di 22,9 miliardi di € nel 2022.',
  'Eurostat counts 77,000 people employed in information and communication in the Copenhagen metropolitan region in 2022, about 63% of Denmark’s 123,000, and 48,000 in finance and insurance, about 64% of 75,000 (counts rounded to thousands).':
    'Eurostat conta 77.000 occupati nell’informazione e comunicazione nella regione metropolitana di Copenaghen nel 2022, circa il 63% dei 123.000 della Danimarca, e 48.000 in finanza e assicurazioni, circa il 64% di 75.000 (conteggi arrotondati alle migliaia).',
  'Danske Bank gives its address as Bernstorffsgade 40, Copenhagen, and says it has more than 20,000 employees across Denmark, Finland, Norway and Sweden.':
    'Danske Bank indica come indirizzo Bernstorffsgade 40, Copenaghen, e dichiara più di 20.000 dipendenti tra Danimarca, Finlandia, Norvegia e Svezia.',
  'Danske Bank’s early-careers page offers full-time roles after graduation, student jobs mainly in Copenhagen, Aarhus and Linköping, and internships.':
    'La pagina carriere iniziali di Danske Bank offre posizioni a tempo pieno dopo la laurea, lavori per studenti soprattutto a Copenaghen, Aarhus e Linköping, e stage.',
  'A.P. Moller - Maersk gives its address as Esplanaden 50, Copenhagen, and says it has more than 100,000 employees in 130 countries.':
    'A.P. Moller - Maersk indica come indirizzo Esplanaden 50, Copenaghen, e dichiara più di 100.000 dipendenti in 130 paesi.',
  'Maersk’s Regional Management Trainee Program lasts 18 months, takes applications in January and February and starts in July.':
    'Il Regional Management Trainee Program di Maersk dura 18 mesi, raccoglie le candidature a gennaio e febbraio e inizia a luglio.',
  'Carlsberg gives its address as J.C. Jacobsens Gade 1, Copenhagen V, and says it has 37,000 employees; its Danish graduate programme runs 24 months in Copenhagen and Fredericia, with applications in December and January and a September start.':
    'Carlsberg indica come indirizzo J.C. Jacobsens Gade 1, Copenaghen V, e dichiara 37.000 dipendenti; il suo programma per laureati in Danimarca dura 24 mesi a Copenaghen e Fredericia, con candidature a dicembre e gennaio e inizio a settembre.',
  'Lundbeck gives its headquarters as Ottiliavej 9, Valby, and Novo Nordisk gives Novo Allé 1, Bagsværd, both in Greater Copenhagen.':
    'Lundbeck indica come sede centrale Ottiliavej 9, Valby, e Novo Nordisk Novo Allé 1, Bagsværd, entrambe nell’area della Grande Copenaghen.',
  'Netcompany says it was founded in Copenhagen in 2000 and has grown to more than 9,500 professionals in more than 10 countries.':
    'Netcompany dichiara di essere stata fondata a Copenaghen nel 2000 e di contare ora più di 9.500 professionisti in più di 10 paesi.',
  'The Danish graduate-job portal Jobbank.dk lists graduate programmes in Copenhagen from PFA (24 months, applications December and January, September start), Copenhagen Municipality’s IT department (18 months, March and April) and Banedanmark (18 months), and many more employers, among them Nordea, Jyske Bank, Nykredit, Novo Nordisk, Pandora, Deloitte, PwC, EY and KPMG.':
    'Il portale danese per laureati Jobbank.dk elenca programmi per laureati a Copenaghen di PFA (24 mesi, candidature a dicembre e gennaio, inizio a settembre), del reparto IT del Comune di Copenaghen (18 mesi, marzo e aprile) e di Banedanmark (18 mesi), e molti altri datori di lavoro, tra cui Nordea, Jyske Bank, Nykredit, Novo Nordisk, Pandora, Deloitte, PwC, EY e KPMG.',
  'The Global Financial Centres Index 40 (September 2026) ranks Copenhagen 25th of 117 centres, up 19 places, and the seventh European centre after London, Zurich, Geneva, Luxembourg, Lugano and Paris; for fintech it is 65th.':
    'Il Global Financial Centres Index 40 (settembre 2026) colloca Copenaghen al 25º posto su 117 centri, in salita di 19 posizioni, e come settimo centro europeo dopo Londra, Zurigo, Ginevra, Lussemburgo, Lugano e Parigi; per il fintech è al 65º posto.',
  'Startup Genome’s ecosystem page for Copenhagen shows $1.6 billion of seed and Series A funding in 2023–2025 and $8 billion of exits in 2021–2025, against regional averages of $531 million and $4.3 billion; Stockholm, shown beside it, is $1.6 billion and $34 billion.':
    'La pagina di Startup Genome su Copenaghen riporta 1,6 miliardi di dollari di finanziamenti seed e Serie A nel 2023–2025 e 8 miliardi di dollari di exit nel 2021–2025, contro medie regionali di 531 milioni e 4,3 miliardi; Stoccolma, accanto, è a 1,6 miliardi e 34 miliardi.',
  'The Technical University of Denmark (DTU) is 105th in the QS World University Rankings 2027, second in Denmark and 40th in Europe, and the University of Southern Denmark (SDU) is 283rd.':
    'L’Università Tecnica di Danimarca (DTU) è 105ª nel QS World University Rankings 2027, seconda in Danimarca e 40ª in Europa, e l’Università della Danimarca meridionale (SDU) è 283ª.',
  'Vestas Wind Systems gives its address as Hedeager 42, Aarhus N, and its careers site lists a Vestas Graduate Programme among its early-careers routes.':
    'Vestas Wind Systems indica come indirizzo Hedeager 42, Aarhus N, e il suo sito carriere elenca un Vestas Graduate Programme tra i percorsi per chi inizia.',
  'Arla Foods gives its head office as Sønderhøj 14, Viby J, in the Aarhus area, and Arla appears in the Jobbank.dk graduate listing.':
    'Arla Foods indica come sede centrale Sønderhøj 14, Viby J, nell’area di Aarhus, e Arla compare nell’elenco dei programmi per laureati di Jobbank.dk.',
  'Aalborg University says it has 17,700 students and more than 3,700 employees.':
    'L’Università di Aalborg dichiara 17.700 studenti e più di 3.700 dipendenti.',
  'Odense Robotics, the cluster organisation, says there are more than 160 robotics, automation and drone companies with 3,600 employees on Funen and that over €1 billion has been invested in the city’s robotics companies.':
    'Odense Robotics, l’organizzazione del cluster, dichiara più di 160 aziende di robotica, automazione e droni con 3.600 dipendenti sulla Fionia e oltre 1 miliardo di euro investiti nelle aziende robotiche della città.',
  'In 2025 ICT specialists were 5.7% of employment in Denmark, against 5.0% in the EU, the tenth highest of the 33 European countries Eurostat lists (joint with Lithuania); Sweden led with 8.9%.':
    'Nel 2025 gli specialisti ICT erano il 5,7% dell’occupazione in Danimarca, contro il 5,0% nell’UE, il decimo valore più alto dei 33 paesi europei elencati da Eurostat (a pari merito con la Lituania); in testa c’era la Svezia con l’8,9%.',
  'In 2025, 83.8% of Danish tertiary graduates aged 20–34 who finished within the last three years were in work (EU 85.3%), and unemployment among 15-to-24-year-olds was 13.8% (EU 15.2%).':
    'Nel 2025 il 83,8% dei laureati danesi di 20–34 anni che avevano finito gli studi da meno di tre anni lavorava (UE 85,3%), e la disoccupazione tra i 15-24enni era del 13,8% (UE 15,2%).',
  'In 2025 standardised monthly earnings for all employees averaged DKK 52,846 in Denmark, DKK 57,773 in Region Hovedstaden (Copenhagen), DKK 50,316 in Region Midtjylland (Aarhus), DKK 49,835 in Region Syddanmark (Odense) and DKK 48,209 in Region Nordjylland (Aalborg).':
    'Nel 2025 la retribuzione mensile standardizzata di tutti i dipendenti era in media di 52.846 DKK in Danimarca, 57.773 DKK nella Regione Hovedstaden (Copenaghen), 50.316 DKK nella Regione Midtjylland (Aarhus), 49.835 DKK nella Regione Syddanmark (Odense) e 48.209 DKK nella Regione Nordjylland (Aalborg).',
  'Eurostat puts the Copenhagen metropolitan region’s GDP at €178.8 billion in 2022, 47% of Denmark’s €380.6 billion, with 36% of its residents (2,110,000 of 5,933,000 in 2023).':
    'Eurostat stima il PIL della regione metropolitana di Copenaghen a 178,8 miliardi di euro nel 2022, il 47% dei 380,6 miliardi della Danimarca, con il 36% dei residenti (2.110.000 su 5.933.000 nel 2023).'
});
