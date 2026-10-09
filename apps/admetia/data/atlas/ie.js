/* Atlas record: Ireland. Read 2 October 2026; log P44
 * (research/verification/round-4c.md; round 5, 3 October 2026:
 * research/verification/round-5b.md). First hub, Dublin. UK citizens move
 * freely under the Common Travel Area, so their route is short.
 * Hubs for further cities were added on 3 October 2026 from city-level statistics
 * (log: research/verification/round-4k.md). Round 5 added Eurostat metropolitan
 * counts (Dublin dominant in IT and finance), standing, CSO pay, rent and graduate
 * earnings, and graduate-programme pages of named employers. Brief: research/countries/ie-ireland.md. */

ATLAS.add({
  id: 'IE',
  checked: '2026-10-03',
  log: 'P44',
  summary: 'An English-speaking EU market built on multinationals: IDA-backed foreign companies employ about 312,000 people, around one job in nine, and Dublin holds two thirds of Ireland’s jobs in information and communication and in finance, with fund administration and aircraft leasing on top. Cork is the second centre for both. Non-EU master’s graduates can search for work for up to two years.',
  sectors: [
    'Technology (EMEA headquarters)',
    'Fund administration',
    'Aircraft leasing',
    'Pharmaceuticals and medtech',
    'Banking'
  ],
  roles: ['business', 'it', 'finance'],
  hubs: [
    {
      id: 'dublin', name: 'Dublin', lat: 53.35, lon: -6.26,
      knownFor: 'European headquarters of US tech firms, fund administration and aircraft leasing',
      why: ['ie-ida', 'ie-dub', 'ie-dub-emp', 'ie-dub-rank', 'ie-gfci', 'ie-funds'],
      sectors: ['Technology', 'Fund administration', 'Aircraft leasing', 'Professional services'],
      employers: [
        { name: 'KPMG Ireland', note: 'graduate programmes; new Dublin headquarters at Harcourt Square', c: 'ie-kpmg' },
        { name: 'Deloitte Ireland', note: 'graduate programme (Future Leaders Academy)', c: 'ie-deloitte' },
        { name: 'EY Ireland', note: '2026 graduate programme, with Tax and Law and Technology routes', c: 'ie-ey' },
        { name: 'Bank of Ireland', note: 'annual graduate programme; the 2028 intake is open for registration of interest', c: 'ie-boi' },
        { t: 'Funds and asset-management industry', note: '19,519 people employed directly (2023)', c: 'ie-funds' },
        { t: 'Aircraft-leasing industry', note: '3,005 people employed nationally (2024)', c: 'ie-alia' }
      ],
      demand: {
        business: ['strong', 'ie-ida'],
        finance: ['dominant', 'ie-dub-emp', 'ie-gfci', 'ie-funds'],
        accounting: ['present', 'ie-kpmg', 'ie-deloitte'],
        it: ['dominant', 'ie-dub-emp', 'ie-dub-rank', 'ie-ida-region'],
        economics: 'gap', management: 'gap', marketing: 'gap', logistics: 'gap', analytics: 'gap', software: 'gap', datasci: 'gap', ai: 'gap', cs: 'gap', bigdata: 'gap'
      },
      finance: {
        am: ['strong', 'ie-funds', 'ie-dub-emp'],
        banking: 'gap', ib: 'gap', pe: 'gap', vc: 'gap', corpfin: 'gap', risk: 'gap', finconsult: 'gap'
      },
      standing: [
        { f: 'it', s: [5, 3, 2], c: ['ie-dub-emp', 'ie-dub-rank'] },
        { f: 'finance', s: [5, 3, 2], c: ['ie-dub-emp', 'ie-gfci', 'ie-funds'] },
        { f: 'business', s: [5, 2, 1], c: ['ie-ida', 'ie-ida-region'] }
      ],
      metrics: {
        pop: { v: 2275381, year: 2023, area: 'metro', tag: 'data', src: 'https://ec.europa.eu/eurostat/databrowser/view/met_pjanaggr3/default/table?lang=en', by: 'Eurostat, metropolitan regions: population on 1 January (met_pjanaggr3), Dublin metropolitan region', seen: '2026-10-03' },
        gdp: { v: 230.4, cur: 'EUR', year: 2021, area: 'metro', tag: 'data', src: 'https://ec.europa.eu/eurostat/databrowser/view/met_10r_3gdp/default/table?lang=en', by: 'Eurostat, metropolitan regions: GDP at current market prices (met_10r_3gdp), Dublin, EUR 230,366 million (inflated by multinationals’ profits)', seen: '2026-10-03' },
        wage: { v: 4102, cur: 'EUR', basis: 'median', year: 2024, area: 'region', tag: 'data', src: 'https://data.cso.ie/table/DEA08', by: 'CSO, DEA08 median annual earnings of employees in work 50+ weeks, County Dublin, EUR 49,224, annual ÷ 12', seen: '2026-10-03' },
        rent: { v: 1741, cur: 'EUR', year: 2025, area: 'region', tag: 'data', src: 'https://data.cso.ie/table/RIQ02', by: 'CSO / Residential Tenancies Board, RIQ02 average monthly rent, one bed, all property types, Q4 2025, County Dublin', seen: '2026-10-03' }
      },
      programmes: []
    },
    {
      id: 'cork', name: 'Cork', lat: 51.90, lon: -8.47,
      knownFor: 'Ireland’s second city for finance and for information-and-communication jobs',
      why: ['ie-cork', 'ie-ida-region', 'ie-apple'],
      sectors: ['Pharmaceuticals', 'Technology', 'Ports and logistics'],
      employers: [
        { name: 'Apple', note: 'Irish facility and European telephone-support team based in Cork', c: 'ie-apple' }
      ],
      demand: {
        finance: ['strong', 'ie-cork'],
        it: ['strong', 'ie-cork'],
        business: 'gap', economics: 'gap', accounting: 'gap', management: 'gap', marketing: 'gap', logistics: 'gap', analytics: 'gap', software: 'gap', datasci: 'gap', ai: 'gap', cs: 'gap', bigdata: 'gap'
      },
      standing: [
        { f: 'it', s: [4, 2, 1], c: ['ie-cork', 'ie-dub-emp'] },
        { f: 'finance', s: [4, 2, 1], c: ['ie-cork', 'ie-dub-emp'] }
      ],
      metrics: {
        pop: { v: 756254, year: 2023, area: 'metro', tag: 'data', src: 'https://ec.europa.eu/eurostat/databrowser/view/met_pjanaggr3/default/table?lang=en', by: 'Eurostat, metropolitan regions: population on 1 January (met_pjanaggr3), Cork metropolitan region', seen: '2026-10-03' },
        gdp: { v: 115.7, cur: 'EUR', year: 2021, area: 'metro', tag: 'data', src: 'https://ec.europa.eu/eurostat/databrowser/view/met_10r_3gdp/default/table?lang=en', by: 'Eurostat, metropolitan regions: GDP at current market prices (met_10r_3gdp), Cork, EUR 115,681 million (inflated by multinationals’ profits)', seen: '2026-10-03' },
        wage: { v: 3868, cur: 'EUR', basis: 'median', year: 2024, area: 'region', tag: 'data', src: 'https://data.cso.ie/table/DEA08', by: 'CSO, DEA08 median annual earnings of employees in work 50+ weeks, County Cork, EUR 46,416, annual ÷ 12', seen: '2026-10-03' },
        rent: { v: 1153, cur: 'EUR', year: 2025, area: 'region', tag: 'data', src: 'https://data.cso.ie/table/RIQ02', by: 'CSO / Residential Tenancies Board, RIQ02 average monthly rent, one bed, all property types, Q4 2025, County Cork', seen: '2026-10-03' }
      },
      programmes: []
    }
  ],
  work: [
    { k: 'Where demand is now', c: ['ie-ida', 'ie-ida-region', 'ie-dub-emp'] },
    { k: 'Entry pay', c: ['ie-grad-pay'] },
    { k: 'Graduate labour market', c: ['ie-unemp', 'ie-w-edat'] },
    { k: 'Recruiting calendar', c: ['ie-boi', 'ie-kpmg', 'ie-w-cal-deloitte', 'ie-w-cal-fairs'] },
    { k: 'Language', c: ['ie-lang'] }
  ],
  briefs: [
    ['countries/ie-ireland.md', 'Country brief: hubs, employers, pay and standing'],
    ['places/visas-and-work-rights.md', '§6 Ireland: Stamp 1G'],
    ['places/countries-and-cities.md', '§3 Dublin; country comparison table']
  ],
  gaps: [
    'Galway and Limerick are not mapped as hubs: IDA Ireland’s annual report gives only regional jobs (West 32,562, Mid-West 28,125), and no city-level employer or sector source could be read; the regional pages of IDA Ireland could not be read.',
    'All Irish immigration, visa, residence permit and salary rules are consolidated from primary sources in visas_immigration/ireland/ireland_visas_immigration_guide.md.',
    'Dublin’s ratings rest on Eurostat’s 2021 metropolitan employment counts and the funds-industry figures, not on a Dublin figure for each role family; software, data and AI are not rated.',
    'Dublin GDP is Eurostat’s 2021 figure and is inflated by multinationals’ profits booked in Ireland; pay and rent are county figures (County Dublin, County Cork), which reach beyond the cities.',
    'Employers are named from their own graduate-programme pages; no headcount for any of them in Dublin was read, and the CRO company register could not be queried.',
    'Cork’s rating rests on Eurostat’s 2021 count (second in Ireland for both families); no named Cork employer in finance or IT was read.'
  ],
  claims: {
    'ie-ida': { t: 'IDA-backed multinationals employed 312,468 people in 2025, about 11% of national employment, across more than 1,800 operations; 54% of these jobs are outside Dublin.', tag: 'data', src: 'https://www.idaireland.com/getmedia/e556d4b5-604c-4502-aa18-820d74604d68/IDA-Annual-Report-2025_3.pdf', by: 'IDA Ireland, Annual Report 2025', seen: '2026-10-02' },
    'ie-dub': { t: 'Dublin hosts the European headquarters of US tech firms, fund administration and aircraft leasing.', tag: 'practitioner consensus', src: 'research/places/countries-and-cities.md', by: 'Admetia research library, places/countries-and-cities.md §3', seen: '2026-09-30' },
    'ie-w-edat': { t: 'In 2025 the employment rate of Irish people aged 20 to 34 with a tertiary degree was 91.6% (92.0% for those who left education within the last three years); the job vacancy rate was 1.3% in the last quarter of 2025.', tag: 'data', src: 'https://ec.europa.eu/eurostat/databrowser/view/edat_lfse_24/default/table', by: 'Eurostat, employment rate of 20-34-year-olds by educational attainment (edat_lfse_24) and job vacancy statistics (jvs_q_nace2), Ireland', seen: '2026-10-08' },
    'ie-w-cal-deloitte': { t: 'Deloitte Ireland’s 2027 Future Leaders Academy (audit and assurance) closes at 17:00 on 21 October 2026, and PwC Ireland’s summer internship applications open on 2 December 2026 and close on 29 January 2027.', tag: 'employer-stated', src: 'https://gradireland.com/jobs/2027-future-leaders-academy-roi-audit-assurance-controls-assurance-graduate-opportunities-238767', by: 'Deloitte Ireland listing on gradireland; PwC Ireland student careers page', seen: '2026-10-08' },
    'ie-w-cal-fairs': { t: 'Most Irish graduate employers set no specific deadline and take applications for most of the year; the Gradireland Graduate Careers Fair is held in October (6 October 2026, RDS Dublin) and university fairs run from October to February.', tag: 'practitioner consensus', src: 'https://gradireland.com/careers-advice/cvs-applications-and-tests/recruitment-processes-irish-employers', by: 'gradireland, recruitment processes for Irish employers; DCU Careers; AHECS', seen: '2026-10-08' },
    'ie-lang': { t: 'English is the working language: only 2.4–2.8% of Irish job postings say English is not required.', tag: 'data', src: 'research/places/countries-and-cities.md', by: 'Indeed Hiring Lab (10 Oct 2024), via places/countries-and-cities.md §2', seen: '2026-09-30' },
    'ie-cork': { t: 'Eurostat counts 339,530 people in work in the Cork metropolitan region in 2021: 16,660 in information and communication (second in Ireland, after Dublin) and 8,150 in finance and insurance (second in Ireland, after Dublin). The region’s GDP was €115.7 billion in 2021.', tag: 'data', src: 'https://ec.europa.eu/eurostat/databrowser/view/met_10r_3emp/default/table?lang=en', by: 'Eurostat, metropolitan regions: employment by activity (met_10r_3emp) and GDP (met_10r_3gdp)', seen: '2026-10-03' },
    'ie-dub-emp': { t: 'Eurostat counts 1,073,000 people in work in the Dublin metropolitan region in 2021: 97,700 in information and communication, 65% of Ireland’s 149,400 and the most of any Irish region, and 80,700 in finance and insurance, 68% of the national 118,800.', tag: 'data', src: 'https://ec.europa.eu/eurostat/databrowser/view/met_10r_3emp/default/table?lang=en', by: 'Eurostat, metropolitan regions: employment by activity (met_10r_3emp), 2021', seen: '2026-10-03' },
    'ie-dub-rank': { t: 'Among the 152 European metropolitan regions with 2021 figures, Dublin ranks tenth by jobs in information and communication (97,700) and fourth by jobs in finance and insurance (80,700), behind only Paris, Warsaw and Milan; London, Berlin, Frankfurt and Madrid report no figure for that year.', tag: 'data', src: 'https://ec.europa.eu/eurostat/databrowser/view/met_10r_3emp/default/table?lang=en', by: 'Eurostat, metropolitan regions: employment by activity (met_10r_3emp), 2021', seen: '2026-10-03' },
    'ie-gfci': { t: 'Dublin is 30th in the world in the Global Financial Centres Index 40 (September 2026) and 10th among Western European centres; Cork is not ranked among the ones listed.', tag: 'practitioner consensus', src: 'https://www.longfinance.net/media/documents/GFCI_40_Report_2026.09.16_v1.2.pdf', by: 'Z/Yen and China Development Institute, Global Financial Centres Index 40 (16 Sep 2026)', seen: '2026-10-03' },
    'ie-funds': { t: 'Irish Funds says the funds and asset-management industry directly employed 19,519 people in Ireland in 2023, according to an Indecon report it commissioned, with over 37,500 jobs in total once indirect effects are counted.', tag: 'data', src: 'https://www.irishfunds.ie/about-us/', by: 'Irish Funds, About us (Indecon impact assessment, 2024)', seen: '2026-10-03' },
    'ie-alia': { t: 'The CSO counts 3,005 people employed in aircraft leasing in Ireland in 2024, at average earnings of €206,324 a year.', tag: 'data', src: 'https://data.cso.ie/table/ALIA01', by: 'CSO, Employment and earnings of persons employed in aircraft leasing (ALIA01)', seen: '2026-10-03' },
    'ie-ida-region': { t: 'IDA-supported companies employed 142,501 people in the Dublin region in 2025 and 53,535 in the South-West (Cork and Kerry), 32,562 in the West, 28,125 in the Mid-West and 169,967 outside Dublin in all; information and communication accounted for 112,300 of the 312,468 jobs and business, financial and other services for 61,155.', tag: 'data', src: 'https://www.idaireland.com/getmedia/e556d4b5-604c-4502-aa18-820d74604d68/IDA-Annual-Report-2025_3.pdf', by: 'IDA Ireland, Annual Report 2025 (DETE Annual Employment Survey 2025)', seen: '2026-10-03' },
    'ie-grad-pay': { t: 'One year after graduating, the median weekly earnings of the 2022 cohort were €650 for master’s graduates in business, administration and law and €855 for those in information and communication technologies (€570 and €770 for bachelor’s graduates); 84% of the cohort were in substantial employment and the all-graduate median was €625 a week.', tag: 'data', src: 'https://data.cso.ie/table/HEO12', by: 'CSO, Higher Education Outcomes: Graduate Earnings (HEO12), graduation years 2013–2022', seen: '2026-10-03' },
    'ie-unemp': { t: 'Ireland’s seasonally adjusted unemployment rate was 5.0% in September 2026, and 12.5% for 15-to-24-year-olds.', tag: 'data', src: 'https://data.cso.ie/table/MUM01', by: 'CSO, Monthly Unemployment (MUM01), September 2026', seen: '2026-10-03' },
    'ie-kpmg': { t: 'KPMG Ireland runs graduate programmes and says its new Dublin headquarters, Harcourt Square, opens in 2026.', tag: 'employer-stated', src: 'https://www.kpmg.com/ie/en/home/careers/graduate.html', by: 'KPMG Ireland, Graduate programmes', seen: '2026-10-03' },
    'ie-deloitte': { t: 'Deloitte Ireland runs a graduate programme, its Future Leaders Academy, with intakes it says are always 50/50 by gender.', tag: 'employer-stated', src: 'https://www.deloitte.com/ie/en/careers/students.html', by: 'Deloitte Ireland, Students and graduates', seen: '2026-10-03' },
    'ie-ey': { t: 'EY Ireland lists a 2026 Graduate Programme, with routes including Tax and Law and Technology.', tag: 'employer-stated', src: 'https://www.ey.com/en_ie/careers/students', by: 'EY Ireland, Students', seen: '2026-10-03' },
    'ie-boi': { t: 'Bank of Ireland says its 2027 Graduate Programme is closed for applications and invites candidates to register interest in the 2028 programme.', tag: 'employer-stated', src: 'https://www.bankofireland.com/about-bank-of-ireland/careers/', by: 'Bank of Ireland, Careers', seen: '2026-10-03' },
    'ie-apple': { t: 'Apple’s job-creation page shows Cork as the base of its Irish facility, which it says builds iMac for Europe, the Middle East and Africa, and of a team giving telephone support to customers across Europe.', tag: 'employer-stated', src: 'https://www.apple.com/ie/job-creation/', by: 'Apple, Job creation in Europe', seen: '2026-10-03' }
  }
});

if (window.I18N) I18N.add('it', {
  'In 2025 the employment rate of Irish people aged 20 to 34 with a tertiary degree was 91.6% (92.0% for those who left education within the last three years); the job vacancy rate was 1.3% in the last quarter of 2025.':
    'Nel 2025 il tasso di occupazione degli irlandesi tra 20 e 34 anni con un titolo terziario era del 91,6% (92,0% per chi ha lasciato gli studi negli ultimi tre anni); il tasso di posti vacanti era dell’1,3% nell’ultimo trimestre 2025.',
  'Deloitte Ireland’s 2027 Future Leaders Academy (audit and assurance) closes at 17:00 on 21 October 2026, and PwC Ireland’s summer internship applications open on 2 December 2026 and close on 29 January 2027.':
    'Il Future Leaders Academy 2027 di Deloitte Irlanda (revisione e assurance) chiude alle 17:00 del 21 ottobre 2026, e le candidature per lo stage estivo di PwC Irlanda si aprono il 2 dicembre 2026 e chiudono il 29 gennaio 2027.',
  'Most Irish graduate employers set no specific deadline and take applications for most of the year; the Gradireland Graduate Careers Fair is held in October (6 October 2026, RDS Dublin) and university fairs run from October to February.':
    'La maggior parte dei datori di lavoro irlandesi per laureati non fissa una scadenza specifica e accetta candidature per gran parte dell’anno; la Gradireland Graduate Careers Fair si tiene a ottobre (6 ottobre 2026, RDS di Dublino) e le fiere universitarie vanno da ottobre a febbraio.',
  'An English-speaking EU market built on multinationals: IDA-backed foreign companies employ about 312,000 people, around one job in nine, and Dublin holds two thirds of Ireland’s jobs in information and communication and in finance, with fund administration and aircraft leasing on top. Cork is the second centre for both. Non-EU master’s graduates can search for work for up to two years.':
    'Un mercato UE di lingua inglese costruito sulle multinazionali: le aziende estere sostenute dall’IDA impiegano circa 312.000 persone, circa un posto su nove, e Dublino concentra due terzi dei posti irlandesi nell’informazione e comunicazione e nella finanza, con in più l’amministrazione di fondi e il leasing aeronautico. Cork è il secondo polo per entrambe. I laureati magistrali extra-UE possono cercare lavoro fino a due anni.',
  'Technology (EMEA headquarters)':
    'Tecnologia (sedi EMEA)',
  'Fund administration':
    'Amministrazione di fondi',
  'Aircraft leasing':
    'Leasing aeronautico',
  'Pharmaceuticals and medtech':
    'Farmaceutica e tecnologie mediche',
  'Banking':
    'Banca',
  'Galway and Limerick are not mapped as hubs: IDA Ireland’s annual report gives only regional jobs (West 32,562, Mid-West 28,125), and no city-level employer or sector source could be read; the regional pages of IDA Ireland could not be read.':
    'Galway e Limerick non sono segnate come poli: la relazione annuale dell’IDA Ireland dà solo i posti regionali (Ovest 32.562, Mid-West 28.125) e non è stata letta alcuna fonte per città su datori di lavoro o settori; le pagine regionali dell’IDA Ireland non si sono potute leggere.',
  'All Irish immigration, visa, residence permit and salary rules are consolidated from primary sources in visas_immigration/ireland/ireland_visas_immigration_guide.md.':
    'Tutte le norme su immigrazione, visti, permessi di soggiorno e soglie salariali per l’Irlanda sono consolidate da fonti primarie in visas_immigration/ireland/ireland_visas_immigration_guide.md.',
  'Dublin’s ratings rest on Eurostat’s 2021 metropolitan employment counts and the funds-industry figures, not on a Dublin figure for each role family; software, data and AI are not rated.':
    'I giudizi su Dublino si basano sui conteggi Eurostat 2021 dell’occupazione metropolitana e sui dati dell’industria dei fondi, non su un dato di Dublino per ogni famiglia di ruoli; software, dati e IA non sono valutati.',
  'Dublin GDP is Eurostat’s 2021 figure and is inflated by multinationals’ profits booked in Ireland; pay and rent are county figures (County Dublin, County Cork), which reach beyond the cities.':
    'Il PIL di Dublino è il dato Eurostat 2021 ed è gonfiato dai profitti delle multinazionali contabilizzati in Irlanda; retribuzioni e affitti sono dati di contea (contea di Dublino, contea di Cork), che vanno oltre le città.',
  'Employers are named from their own graduate-programme pages; no headcount for any of them in Dublin was read, and the CRO company register could not be queried.':
    'I datori di lavoro sono citati dalle loro pagine sui programmi per neolaureati; non è stato letto alcun organico a Dublino e il registro delle imprese CRO non ha potuto essere consultato.',
  'Cork’s rating rests on Eurostat’s 2021 count (second in Ireland for both families); no named Cork employer in finance or IT was read.':
    'Il giudizio su Cork si basa sul conteggio Eurostat 2021 (seconda in Irlanda per entrambe le famiglie); non è stato letto alcun datore di lavoro di Cork nella finanza o nell’IT.',
  'Country brief: hubs, employers, pay and standing':
    'Scheda paese: poli, datori di lavoro, retribuzioni e posizionamento',
  '§6 Ireland: Stamp 1G':
    '§6 Irlanda: Stamp 1G',
  '§3 Dublin; country comparison table':
    '§3 Dublino; tabella di confronto tra paesi',
  'European headquarters of US tech firms, fund administration and aircraft leasing':
    'Sedi europee delle aziende tecnologiche statunitensi, amministrazione di fondi e leasing aeronautico',
  'Professional services':
    'Servizi professionali',
  'graduate programmes; new Dublin headquarters at Harcourt Square':
    'programmi per neolaureati; nuova sede di Dublino a Harcourt Square',
  'graduate programme (Future Leaders Academy)':
    'programma per neolaureati (Future Leaders Academy)',
  '2026 graduate programme, with Tax and Law and Technology routes':
    'programma per neolaureati 2026, con percorsi Tax and Law e Tecnologia',
  'annual graduate programme; the 2028 intake is open for registration of interest':
    'programma annuale per neolaureati; per l’ingresso 2028 si può registrare l’interesse',
  '19,519 people employed directly (2023)':
    '19.519 persone impiegate direttamente (2023)',
  'Funds and asset-management industry':
    'Industria dei fondi e dell’asset management',
  '3,005 people employed nationally (2024)':
    '3.005 persone impiegate a livello nazionale (2024)',
  'Aircraft-leasing industry':
    'Industria del leasing aeronautico',
  'Ireland’s second city for finance and for information-and-communication jobs':
    'La seconda città irlandese per posti in finanza e in informazione e comunicazione',
  'Ports and logistics':
    'Porti e logistica',
  'Irish facility and European telephone-support team based in Cork':
    'stabilimento irlandese e team europeo di assistenza telefonica con sede a Cork',
  'Where demand is now':
    'Dove si concentra la domanda oggi',
  'Entry pay':
    'Stipendi d’ingresso',
  'Graduate labour market':
    'Mercato del lavoro dei laureati',
  'Recruiting calendar':
    'Calendario delle selezioni',
  'Language':
    'Lingua',
  'IDA-backed multinationals employed 312,468 people in 2025, about 11% of national employment, across more than 1,800 operations; 54% of these jobs are outside Dublin.':
    'Nel 2025 le multinazionali sostenute dall’IDA impiegavano 312.468 persone, circa l’11% dell’occupazione nazionale, in oltre 1.800 sedi; il 54% di questi posti è fuori Dublino.',
  'Dublin hosts the European headquarters of US tech firms, fund administration and aircraft leasing.':
    'Dublino ospita le sedi europee delle aziende tecnologiche statunitensi, l’amministrazione dei fondi e il leasing aeronautico.',
  'English is the working language: only 2.4–2.8% of Irish job postings say English is not required.':
    'L’inglese è la lingua di lavoro: solo il 2,4–2,8% degli annunci di lavoro irlandesi dice che l’inglese non è richiesto.',
  'Eurostat counts 339,530 people in work in the Cork metropolitan region in 2021: 16,660 in information and communication (second in Ireland, after Dublin) and 8,150 in finance and insurance (second in Ireland, after Dublin). The region’s GDP was €115.7 billion in 2021.':
    'Eurostat conta 339.530 occupati nella regione metropolitana di Cork nel 2021: 16.660 nell’informazione e comunicazione (seconda in Irlanda, dopo Dublino) e 8.150 in finanza e assicurazioni (seconda in Irlanda, dopo Dublino). Il PIL della regione era di 115,7 miliardi di € nel 2021.',
  'Eurostat counts 1,073,000 people in work in the Dublin metropolitan region in 2021: 97,700 in information and communication, 65% of Ireland’s 149,400 and the most of any Irish region, and 80,700 in finance and insurance, 68% of the national 118,800.':
    'Dublin metropolitan region ha nel 2021 1.073.000 occupati secondo Eurostat: 97.700 nell’informazione e comunicazione, il 65% dei 149.400 irlandesi e il valore più alto di qualsiasi regione irlandese, e 80.700 nella finanza e assicurazioni, il 68% dei 118.800 nazionali.',
  'Among the 152 European metropolitan regions with 2021 figures, Dublin ranks tenth by jobs in information and communication (97,700) and fourth by jobs in finance and insurance (80,700), behind only Paris, Warsaw and Milan; London, Berlin, Frankfurt and Madrid report no figure for that year.':
    'Tra le 152 regioni metropolitane europee con dati 2021, Dublino è decima per posti nell’informazione e comunicazione (97.700) e quarta per posti nella finanza e assicurazioni (80.700), dopo la sola Parigi, Varsavia e Milano; Londra, Berlino, Francoforte e Madrid non hanno un dato per quell’anno.',
  'Dublin is 30th in the world in the Global Financial Centres Index 40 (September 2026) and 10th among Western European centres; Cork is not ranked among the ones listed.':
    'Dublino è 30ª al mondo nel Global Financial Centres Index 40 (settembre 2026) e 10ª tra i centri dell’Europa occidentale; Cork non compare tra quelli elencati.',
  'Irish Funds says the funds and asset-management industry directly employed 19,519 people in Ireland in 2023, according to an Indecon report it commissioned, with over 37,500 jobs in total once indirect effects are counted.':
    'Irish Funds afferma che nel 2023 l’industria dei fondi e dell’asset management impiegava direttamente 19.519 persone in Irlanda, secondo un rapporto Indecon da essa commissionato, con oltre 37.500 posti in totale contando gli effetti indiretti.',
  'The CSO counts 3,005 people employed in aircraft leasing in Ireland in 2024, at average earnings of €206,324 a year.':
    'Il CSO conta 3.005 persone occupate nel leasing aeronautico in Irlanda nel 2024, con una retribuzione media di 206.324 € all’anno.',
  'IDA-supported companies employed 142,501 people in the Dublin region in 2025 and 53,535 in the South-West (Cork and Kerry), 32,562 in the West, 28,125 in the Mid-West and 169,967 outside Dublin in all; information and communication accounted for 112,300 of the 312,468 jobs and business, financial and other services for 61,155.':
    'Nel 2025 le aziende sostenute dall’IDA impiegavano 142.501 persone nella regione di Dublino e 53.535 nel Sud-Ovest (Cork e Kerry), 32.562 all’Ovest, 28.125 nel Mid-West e 169.967 fuori Dublino in tutto; l’informazione e comunicazione contava 112.300 dei 312.468 posti e i servizi finanziari, alle imprese e altri servizi 61.155.',
  'One year after graduating, the median weekly earnings of the 2022 cohort were €650 for master’s graduates in business, administration and law and €855 for those in information and communication technologies (€570 and €770 for bachelor’s graduates); 84% of the cohort were in substantial employment and the all-graduate median was €625 a week.':
    'A un anno dalla laurea, la retribuzione settimanale mediana della coorte 2022 era di 650 € per i laureati magistrali in economia, amministrazione e diritto e di 855 € per quelli in tecnologie dell’informazione e comunicazione (570 € e 770 € per i laureati triennali); l’84% della coorte era in occupazione sostanziale e la mediana di tutti i laureati era di 625 € a settimana.',
  'Ireland’s seasonally adjusted unemployment rate was 5.0% in September 2026, and 12.5% for 15-to-24-year-olds.':
    'Il tasso di disoccupazione destagionalizzato dell’Irlanda era del 5,0% a settembre 2026 e del 12,5% tra i 15-24enni.',
  'KPMG Ireland runs graduate programmes and says its new Dublin headquarters, Harcourt Square, opens in 2026.':
    'KPMG Ireland gestisce programmi per neolaureati e afferma che la nuova sede di Dublino, Harcourt Square, apre nel 2026.',
  'Deloitte Ireland runs a graduate programme, its Future Leaders Academy, with intakes it says are always 50/50 by gender.':
    'Deloitte Ireland gestisce un programma per neolaureati, la Future Leaders Academy, con ingressi che dice essere sempre al 50/50 per genere.',
  'EY Ireland lists a 2026 Graduate Programme, with routes including Tax and Law and Technology.':
    'EY Irlanda indica un programma per neolaureati 2026, con percorsi tra cui Tax and Law e Tecnologia.',
  'Bank of Ireland says its 2027 Graduate Programme is closed for applications and invites candidates to register interest in the 2028 programme.':
    'Bank of Ireland afferma che il suo programma per neolaureati 2027 è chiuso alle candidature e invita a registrare l’interesse per quello del 2028.',
  'Apple’s job-creation page shows Cork as the base of its Irish facility, which it says builds iMac for Europe, the Middle East and Africa, and of a team giving telephone support to customers across Europe.':
    'La pagina di Apple sulla creazione di posti di lavoro indica Cork come sede del suo stabilimento irlandese, che dice produrre iMac per Europa, Medio Oriente e Africa, e di un team di assistenza telefonica ai clienti di tutta Europa.'
});
