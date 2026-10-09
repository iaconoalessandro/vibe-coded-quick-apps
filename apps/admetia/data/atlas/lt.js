/* Atlas record: Lithuania. Read 2 October 2026; log P57
 * (research/verification/round-4f.md). First hub, Vilnius. The Migration
 * Department's sites (migracija.lrv.lt, migracija.lt) refused automated reads
 * (HTTP 403 or empty pages), which was not bypassed; student rules come from
 * Study in Lithuania and a law-firm note on the 22 May 2026 amendments.
 * Hubs for further cities were added on 3 October 2026 from city-level statistics
 * (log: research/verification/round-4k.md). Deepened on 3 October 2026 (log:
 * research/verification/round-5c.md; brief: research/countries/lt-lithuania.md): Vilnius finance, IT and
 * software are "dominant" on Eurostat's metropolitan employment (67% of Lithuanian ICT jobs and 73% of
 * finance jobs, 2021); pay is Statistics Lithuania's, by municipality and county. */

ATLAS.add({
  id: 'LT',
  checked: '2026-10-03',
  log: 'P57',
  summary: 'A small market centred on Vilnius, which has about two-thirds of the country’s ICT jobs and nearly three-quarters of its finance jobs: fintech, where Lithuania issues more licences than any other EU country, and business-service centres for Nordic banks and US firms. Non-EU graduates can stay 12 months to look for work, but rules for students were tightened in May 2026.',
  sectors: ['Fintech and payments', 'Business-service centres', 'IT', 'Logistics', 'Manufacturing'],
  roles: ['finance', 'it', 'software'],
  hubs: [
    {
      id: 'vilnius', name: 'Vilnius', lat: 54.69, lon: 25.28,
      knownFor: 'Fintech licences and bank service centres',
      why: ['lt-fintech', 'lt-gbs', 'lt-emp-vil', 'lt-vinted', 'lt-nord', 'lt-genome', 'lt-ict', 'lt-qs'],
      sectors: ['Fintech', 'Payments', 'Banking', 'Business services', 'IT'],
      employers: [
        { t: 'Licensed fintech companies', note: '231 of Lithuania’s 248 are in Vilnius', c: 'lt-fintech' },
        { name: 'Danske Bank, Nasdaq, Western Union, SEB, Moody’s', note: 'business-service centres in Lithuania', c: 'lt-gbs' },
        { name: 'Swedbank', note: 'Lithuanian bank, registered in Vilnius', c: 'lt-swed' },
        { name: 'Vinted', note: 'second-hand marketplace, more than 2,000 staff, headquarters in Lithuania', c: 'lt-vinted' },
        { name: 'Nord Security', note: 'cybersecurity and privacy products, headquarters in Vilnius', c: 'lt-nord' }
      ],
      demand: {
        finance: ['dominant', 'lt-emp-vil', 'lt-fintech'],
        software: ['dominant', 'lt-emp-vil', 'lt-vinted', 'lt-nord'],
        it: ['dominant', 'lt-emp-vil', 'lt-ict', 'lt-gbs'],
        business: ['present', 'lt-gbs'],
        economics: 'gap', accounting: 'gap', management: 'gap', marketing: 'gap', logistics: 'gap', analytics: 'gap',
        datasci: 'gap', ai: 'gap', cs: 'gap', bigdata: 'gap'
      },
      finance: { banking: ['strong', 'lt-emp-vil', 'lt-swed', 'lt-gbs'], ib: 'gap', am: 'gap', pe: 'gap', vc: 'gap', corpfin: 'gap', risk: 'gap', finconsult: 'gap' },
      standing: [
        { f: 'finance', s: [5, 3, 1], c: ['lt-emp-vil', 'lt-fintech', 'lt-gfci'] },
        { f: 'software', s: [5, 2, 1], c: ['lt-emp-vil', 'lt-genome', 'lt-ict'] },
        { f: 'it', s: [5, 2, 1], c: ['lt-emp-vil', 'lt-genome', 'lt-ict'] }
      ],
      metrics: {
        pop:  { v: 848724, year: 2023, area: 'metro', tag: 'data', src: 'https://ec.europa.eu/eurostat/api/dissemination/statistics/1.0/data/met_pjanaggr3?format=JSON&lang=EN&metroreg=LT001MC&sex=T&age=TOTAL&time=2023', by: 'Eurostat, met_pjanaggr3 population on 1 January by metropolitan region, Vilnius (LT001MC)', seen: '2026-10-03' },
        gdp:  { v: 24.36, cur: 'EUR', year: 2021, area: 'metro', tag: 'data', src: 'https://ec.europa.eu/eurostat/api/dissemination/statistics/1.0/data/met_10r_3gdp?format=JSON&lang=EN&metroreg=LT001MC&unit=MIO_EUR&time=2021', by: 'Eurostat, met_10r_3gdp GDP at current market prices by metropolitan region, Vilnius (EUR 24,362 million)', seen: '2026-10-03' },
        wage: { v: 2963, cur: 'EUR', basis: 'mean', year: 2026, area: 'city', tag: 'data', src: 'https://osp-rs.stat.gov.lt/rest_json/data/S3R0050_M3060322/?startPeriod=2026&endPeriod=2026', by: 'Statistics Lithuania, S3R0050 average gross monthly earnings by municipality, Vilnius city municipality, second quarter 2026 (EUR 2,963.4)', seen: '2026-10-03' }
      },
      programmes: []
    },
    {
      id: 'kaunas', name: 'Kaunas', lat: 54.90, lon: 23.90,
      knownFor: 'Lithuania’s second city for information-and-communication jobs',
      why: ['lt-kaunas', 'lt-kaunas-inv', 'lt-nord', 'lt-gfci'],
      sectors: ['Technology', 'Manufacturing', 'Higher education'],
      employers: [
        { t: 'Information and communication employers', note: '9,890 jobs (2021)', c: 'lt-kaunas' },
        { t: 'Finance and insurance employers', note: '2,560 jobs (2021)', c: 'lt-kaunas' },
        { name: 'Nord Security', note: 'office in Kaunas as well as the Vilnius headquarters', c: 'lt-nord' },
        { name: 'Kaunas University of Technology', note: 'the country’s largest provider of engineers', c: 'lt-kaunas-inv' }
      ],
      demand: {
        it: ['strong', 'lt-kaunas'],
        business: 'gap', finance: 'gap', economics: 'gap', accounting: 'gap', management: 'gap', marketing: 'gap', logistics: 'gap', analytics: 'gap', software: 'gap', datasci: 'gap', ai: 'gap', cs: 'gap', bigdata: 'gap'
      },
      standing: [
        { f: 'it', s: [3, 1, 1], c: ['lt-kaunas', 'lt-kaunas-inv'] }
      ],
      metrics: {
        pop:  { v: 579903, year: 2023, area: 'metro', tag: 'data', src: 'https://ec.europa.eu/eurostat/api/dissemination/statistics/1.0/data/met_pjanaggr3?format=JSON&lang=EN&metroreg=LT002M&sex=T&age=TOTAL&time=2023', by: 'Eurostat, met_pjanaggr3 population on 1 January by metropolitan region, Kaunas (LT002M)', seen: '2026-10-03' },
        gdp:  { v: 11.69, cur: 'EUR', year: 2021, area: 'metro', tag: 'data', src: 'https://ec.europa.eu/eurostat/api/dissemination/statistics/1.0/data/met_10r_3gdp?format=JSON&lang=EN&metroreg=LT002M&unit=MIO_EUR&time=2021', by: 'Eurostat, met_10r_3gdp GDP at current market prices by metropolitan region, Kaunas (EUR 11,690 million)', seen: '2026-10-03' },
        wage: { v: 2734, cur: 'EUR', basis: 'mean', year: 2026, area: 'city', tag: 'data', src: 'https://osp-rs.stat.gov.lt/rest_json/data/S3R0050_M3060322/?startPeriod=2026&endPeriod=2026', by: 'Statistics Lithuania, S3R0050 average gross monthly earnings by municipality, Kaunas city municipality, second quarter 2026 (EUR 2,733.9)', seen: '2026-10-03' }
      },
      programmes: []
    }
  ],

  work: [
    { k: 'Recruiting calendar', c: ['lt-cal-swed', 'lt-cal-vu', 'lt-cal-vtech'] },
    { k: 'Language', c: ['lt-lang-fintech', 'lt-lang-postings'] },
    { k: 'Where demand is now', c: ['lt-fintech', 'lt-gbs', 'lt-emp-vil'] },
    { k: 'Entry pay', c: ['lt-wage'] },
    { k: 'Graduate labour market', c: ['lt-grad-lab'] }
  ],

  briefs: [
    ['countries/lt-lithuania.md', 'Country brief: hubs, employers, pay and standing']
  ],
  gaps: [
    'All Lithuanian immigration, visa, residence permit and salary rules are consolidated from primary sources in visas_immigration/lithuania/lithuania_visas_immigration_guide.md.',
    'Tax, recruiting calendars, graduate programmes and language requirements were not researched; pay is Statistics Lithuania’s averages by sector and place, not entry pay.',
    'Non-Lithuanian-speaking graduates’ prospects outside the business-service and fintech sectors were not measured; the Startup Genome and GFCI results for Kaunas and Vilnius are bands or associate-centre listings, not ranks.',
    'Hubs added on 3 October 2026 are rated only from Eurostat’s 2021–22 metropolitan employment counts: strong means second or third in the country for jobs in finance and insurance, or in information and communication, with at least 5,000 such jobs.'
  ],

  claims: {
    'lt-lang-fintech': { t: 'Invest Lithuania reports that 58% of Lithuanian fintechs employ international staff in their Lithuanian offices, so fintech and service-centre work is possible in English.', tag: 'data', src: 'https://investlithuania.com/fintech-overview-2026/', by: 'Invest Lithuania, Fintech Overview 2025–2026', seen: '2026-10-08' },
    'lt-lang-postings': { t: 'The bank and Big Four postings read for Vilnius ask for Lithuanian as well as English: a Luminor graduate programme (fluent English and Lithuanian), an EY audit internship (English and Lithuanian) and a KPMG Baltics internship (fluent Lithuanian and effective English).', tag: 'employer-stated', src: 'https://cvonline.lt/en/vacancy/1298621/ey/audit-intern', by: 'CV-Online and CVbankas postings by Luminor, EY and KPMG Baltics (2023 to 2024)', seen: '2026-10-08' },
    'lt-cal-swed': { t: 'Swedbank’s Kick Start traineeships in the Baltic countries are open all year, and the bank is actively hiring trainees and junior specialists from February to May.', tag: 'employer-stated', src: 'https://www.swedbank.com/work-with-us/kick-start-your-career.html', by: 'Swedbank, Kick Start your career', seen: '2026-10-08' },
    'lt-cal-vu': { t: 'Vilnius University’s student-run VU Career Days ran from 23 to 27 March 2026, with the career fair and quick job interviews on 24 and 25 March and more than 70 companies.', tag: 'employer-stated', src: 'https://www.vu.lt/en/events/vu-career-days-26-get-on-step-closer', by: 'Vilnius University, VU Career Days 2026', seen: '2026-10-08' },
    'lt-cal-vtech': { t: 'The Vilnius Tech Career Day, now in its 23rd year, promotes registration for the 2027 edition; its page gives no date.', tag: 'employer-stated', src: 'https://karjerosdienos.vilniustech.lt/en/home-page/', by: 'Vilnius Tech, Career Day', seen: '2026-10-08' },
    'lt-fintech': { t: 'At the end of 2025, 248 fintech companies operated in Lithuania with about 7,800 employees; 231 of them were in Vilnius, and Lithuania ranks first in the EU by fintech licences issued.', tag: 'data', src: 'https://investlithuania.com/fintech-overview-2026/', by: 'Invest Lithuania (state agency), Fintech Overview 2025–2026', seen: '2026-10-02' },
    'lt-gbs': { t: 'Lithuania’s business-service centres employ more than 27,000 people in 100 companies, 37% of them for US-headquartered organisations and 36% in tech roles; brands include Danske Bank, Nasdaq, Western Union, SEB and Moody’s.', tag: 'data', src: 'https://investlithuania.com/report/gbs-report/', by: 'Invest Lithuania, Business Services Report 2025 (72 companies)', seen: '2026-10-02' },
    'lt-kaunas': { t: 'Eurostat counts 278,880 people in work in the Kaunas metropolitan region in 2021: 9,890 in information and communication (second in Lithuania, after Vilnius) and 2,560 in finance and insurance. The region’s GDP was €11.7 billion in 2021.', tag: 'data', src: 'https://ec.europa.eu/eurostat/databrowser/view/met_10r_3emp/default/table?lang=en', by: 'Eurostat, metropolitan regions: employment by activity (met_10r_3emp) and GDP (met_10r_3gdp)', seen: '2026-10-03' },
    'lt-emp-vil': { t: 'Eurostat counts 33,980 people employed in information and communication in the Vilnius metropolitan region in 2021, 67% of Lithuania’s 50,860, and 22,380 in finance and insurance, 73% of 30,530.', tag: 'data', src: 'https://ec.europa.eu/eurostat/api/dissemination/statistics/1.0/data/met_10r_3emp?format=JSON&lang=EN&metroreg=LT001MC&wstatus=EMP&nace_r2=J&nace_r2=K&time=2021', by: 'Eurostat, met_10r_3emp metropolitan regions: employment by activity, 2021', seen: '2026-10-03' },
    'lt-ict': { t: 'In 2025 ICT specialists were 5.7% of employment in Lithuania (83,100 people), against 5.0% in the EU.', tag: 'data', src: 'https://ec.europa.eu/eurostat/api/dissemination/statistics/1.0/data/isoc_sks_itspt?format=JSON&lang=EN&geo=LT&time=2025', by: 'Eurostat, isoc_sks_itspt ICT specialists in employment, 2025 (updated 17 Apr 2026)', seen: '2026-10-03' },
    'lt-wage': { t: 'In 2025 the average gross monthly wage in Lithuania was €2,411, €4,168 in information and communication and €3,848 in finance and insurance; in Vilnius County the three figures were €2,656, €4,359 and €3,997, and in Kaunas County €2,416, €3,715 and €3,362.', tag: 'data', src: 'https://osp-rs.stat.gov.lt/rest_json/data/S3R0050_M3060837_1/?startPeriod=2025&endPeriod=2025', by: 'Statistics Lithuania, S3R0050 average gross monthly earnings by county and economic activity, 2025 (updated 19 May 2026)', seen: '2026-10-03' },
    'lt-swed': { t: 'Swedbank AB gives its address as Konstitucijos pr. 20A, Vilnius.', tag: 'employer-stated', src: 'https://www.swedbank.lt/private/home/about/contact', by: 'Swedbank Lithuania, contacts page', seen: '2026-10-03' },
    'lt-vinted': { t: 'Vinted says more than 2,000 people work from its headquarters in Lithuania and offices across Europe; its careers page lists roles in Vilnius and other Lithuanian locations.', tag: 'employer-stated', src: 'https://www.vinted.com/about', by: 'Vinted, about us; careers page https://careers.vinted.com/', seen: '2026-10-03' },
    'lt-nord': { t: 'Nord Security’s careers page speaks of its Vilnius headquarters and lists offices in Vilnius, Kaunas and Madrid.', tag: 'employer-stated', src: 'https://nordsecurity.com/careers', by: 'Nord Security careers', seen: '2026-10-03' },
    'lt-genome': { t: 'Startup Genome’s 2026 report puts the Vilnius ecosystem’s value at $8 billion, against a European average of $14.3 billion.', tag: 'practitioner consensus', src: 'https://startupgenome.com/ecosystems/vilnius', by: 'Startup Genome, Global Startup Ecosystem Report 2026, Vilnius page', seen: '2026-10-03' },
    'lt-gfci': { t: 'The Global Financial Centres Index 40 (September 2026) lists Vilnius (34 assessments) and Kaunas (15) only as associate centres, too few assessments for a rank.', tag: 'practitioner consensus', src: 'https://www.longfinance.net/media/documents/GFCI_40_Report_2026.09.16_v1.2.pdf', by: 'Z/Yen and Long Finance, Global Financial Centres Index 40 (September 2026), table 2', seen: '2026-10-03' },
    'lt-qs': { t: 'Vilnius University ranks 465th in the QS World University Rankings 2027, the highest of any Lithuanian university.', tag: 'employer-stated', src: 'https://www.vu.lt/en/all-news/vilnius-university-qs-world-university-rankings-2027', by: 'Vilnius University news, 18 Jun 2026', seen: '2026-10-03' },
    'lt-kaunas-inv': { t: 'Invest Lithuania describes Kaunas University of Technology as the largest provider of qualified engineers in the country and Kaunas’ free economic zone as a hub of logistics and advanced manufacturing; 36% of Kaunas’ 50,000 students study engineering, manufacturing and construction.', tag: 'employer-stated', src: 'https://investlithuania.com/regions/kaunas/', by: 'Invest Lithuania (state agency), Kaunas region', seen: '2026-10-03' },
    'lt-grad-lab': { t: 'In 2025, 92.7% of Lithuanian tertiary graduates aged 20–34 who finished within the last three years were in work (EU 85.3%), unemployment among 15-to-24-year-olds was 14.1% (EU 15.2%), and 60.8% of 25-to-34-year-olds had a tertiary degree (EU 44.8%).', tag: 'data', src: 'https://ec.europa.eu/eurostat/api/dissemination/statistics/1.0/data/edat_lfse_24?format=JSON&lang=EN&duration=Y_LE3&isced11=ED5-8&age=Y20-34&sex=T&geo=LT&geo=EU27_2020', by: 'Eurostat, edat_lfse_24, une_rt_a and edat_lfse_03, 2025 (updated 10 Sep 2026)', seen: '2026-10-03' }
  }
});

if (window.I18N) I18N.add('it', {
  'Fintech and payments': 'Fintech e pagamenti', 'Business-service centres': 'Centri di servizi alle imprese', 'IT': 'IT', 'Logistics': 'Logistica',
  'Fintech licences and bank service centres': 'Licenze fintech e centri servizi delle banche',
  'Fintech': 'Fintech', 'Payments': 'Pagamenti', 'Business services': 'Servizi alle imprese',
  'Licensed fintech companies': 'Le aziende fintech autorizzate', '231 of Lithuania’s 248 are in Vilnius': '231 delle 248 lituane sono a Vilnius',
  'business-service centres in Lithuania': 'centri di servizi alle imprese in Lituania',
  'All Lithuanian immigration, visa, residence permit and salary rules are consolidated from primary sources in visas_immigration/lithuania/lithuania_visas_immigration_guide.md.':
    'Tutte le regole su immigrazione, visti, permessi e retribuzioni in Lituania sono consolidate da fonti primarie in visas_immigration/lithuania/lithuania_visas_immigration_guide.md.',
  'At the end of 2025, 248 fintech companies operated in Lithuania with about 7,800 employees; 231 of them were in Vilnius, and Lithuania ranks first in the EU by fintech licences issued.':
    'Alla fine del 2025 in Lituania operavano 248 aziende fintech con circa 7.800 dipendenti; 231 erano a Vilnius, e la Lituania è prima nell’UE per licenze fintech rilasciate.',
  'Lithuania’s business-service centres employ more than 27,000 people in 100 companies, 37% of them for US-headquartered organisations and 36% in tech roles; brands include Danske Bank, Nasdaq, Western Union, SEB and Moody’s.':
    'I centri di servizi alle imprese lituani impiegano oltre 27.000 persone in 100 aziende, il 37% per organizzazioni con sede negli Stati Uniti e il 36% in ruoli tecnologici; tra i marchi figurano Danske Bank, Nasdaq, Western Union, SEB e Moody’s.',
  'Lithuania’s second city for information-and-communication jobs':
    'La seconda città lituana per posti in informazione e comunicazione',
  'Information and communication employers':
    'I datori di lavoro dell’informazione e comunicazione',
  '9,890 jobs (2021)':
    '9.890 posti (2021)',
  'Finance and insurance employers':
    'I datori di lavoro di finanza e assicurazioni',
  '2,560 jobs (2021)':
    '2.560 posti (2021)',
  'Eurostat counts 278,880 people in work in the Kaunas metropolitan region in 2021: 9,890 in information and communication (second in Lithuania, after Vilnius) and 2,560 in finance and insurance. The region’s GDP was €11.7 billion in 2021.':
    'Eurostat conta 278.880 occupati nella regione metropolitana di Kaunas nel 2021: 9.890 nell’informazione e comunicazione (seconda in Lituania, dopo Vilnius) e 2.560 in finanza e assicurazioni. Il PIL della regione era di 11,7 miliardi di € nel 2021.',
  'Hubs added on 3 October 2026 are rated only from Eurostat’s 2021–22 metropolitan employment counts: strong means second or third in the country for jobs in finance and insurance, or in information and communication, with at least 5,000 such jobs.':
    'I poli aggiunti il 3 ottobre 2026 sono valutati solo dai conteggi Eurostat 2021–22 sull’occupazione metropolitana: forte significa seconda o terza regione del paese per posti in finanza e assicurazioni, o in informazione e comunicazione, con almeno 5.000 posti di quel tipo.',
  'A small market centred on Vilnius, which has about two-thirds of the country’s ICT jobs and nearly three-quarters of its finance jobs: fintech, where Lithuania issues more licences than any other EU country, and business-service centres for Nordic banks and US firms. Non-EU graduates can stay 12 months to look for work, but rules for students were tightened in May 2026.':
    'Un mercato piccolo centrato su Vilnius, che ha circa due terzi dei posti ICT del paese e quasi tre quarti di quelli nella finanza: il fintech, dove la Lituania rilascia più licenze di qualsiasi altro paese UE, e i centri di servizi per banche nordiche e aziende statunitensi. I laureati extra-UE possono restare 12 mesi per cercare lavoro, ma a maggio 2026 le regole per gli studenti sono state inasprite.',
  'Tax, recruiting calendars, graduate programmes and language requirements were not researched; pay is Statistics Lithuania’s averages by sector and place, not entry pay.':
    'Tasse, calendari delle selezioni, programmi per laureati e requisiti linguistici non sono stati ricercati; gli stipendi sono le medie dell’istituto di statistica lituano per settore e luogo, non gli stipendi d’ingresso.',
  'Non-Lithuanian-speaking graduates’ prospects outside the business-service and fintech sectors were not measured; the Startup Genome and GFCI results for Kaunas and Vilnius are bands or associate-centre listings, not ranks.':
    'Le prospettive dei laureati che non parlano lituano fuori dai servizi alle imprese e dal fintech non sono state misurate; i risultati di Startup Genome e GFCI per Kaunas e Vilnius sono fasce o elenchi di centri associati, non posizioni.',
  'Lithuanian bank, registered in Vilnius':
    'banca lituana, con sede legale a Vilnius',
  'second-hand marketplace, more than 2,000 staff, headquarters in Lithuania':
    'mercato dell’usato, più di 2.000 dipendenti, sede centrale in Lituania',
  'cybersecurity and privacy products, headquarters in Vilnius':
    'prodotti di cybersicurezza e privacy, sede centrale a Vilnius',
  'office in Kaunas as well as the Vilnius headquarters':
    'ufficio a Kaunas oltre alla sede centrale di Vilnius',
  'the country’s largest provider of engineers':
    'il maggiore fornitore di ingegneri del paese',
  'Entry pay':
    'Stipendio d’ingresso',
  'Graduate labour market':
    'Mercato del lavoro per i laureati',
  'Country brief: hubs, employers, pay and standing':
    'Dossier paese: poli, datori di lavoro, stipendi e posizionamento',
  'Eurostat counts 33,980 people employed in information and communication in the Vilnius metropolitan region in 2021, 67% of Lithuania’s 50,860, and 22,380 in finance and insurance, 73% of 30,530.':
    'Eurostat conta 33.980 occupati nell’informazione e comunicazione nella regione metropolitana di Vilnius nel 2021, il 67% dei 50.860 della Lituania, e 22.380 in finanza e assicurazioni, il 73% di 30.530.',
  'In 2025 ICT specialists were 5.7% of employment in Lithuania (83,100 people), against 5.0% in the EU.':
    'Nel 2025 gli specialisti ICT erano il 5,7% dell’occupazione in Lituania (83.100 persone), contro il 5,0% nell’UE.',
  'In 2025 the average gross monthly wage in Lithuania was €2,411, €4,168 in information and communication and €3,848 in finance and insurance; in Vilnius County the three figures were €2,656, €4,359 and €3,997, and in Kaunas County €2,416, €3,715 and €3,362.':
    'Nel 2025 la retribuzione lorda mensile media in Lituania era di 2.411 €, di 4.168 € nell’informazione e comunicazione e di 3.848 € in finanza e assicurazioni; nella contea di Vilnius le tre cifre erano 2.656 €, 4.359 € e 3.997 €, e nella contea di Kaunas 2.416 €, 3.715 € e 3.362 €.',
  'Swedbank AB gives its address as Konstitucijos pr. 20A, Vilnius.':
    'Swedbank AB indica come indirizzo Konstitucijos pr. 20A, Vilnius.',
  'Vinted says more than 2,000 people work from its headquarters in Lithuania and offices across Europe; its careers page lists roles in Vilnius and other Lithuanian locations.':
    'Vinted dichiara che più di 2.000 persone lavorano dalla sede centrale in Lituania e dagli uffici in Europa; la sua pagina carriere elenca ruoli a Vilnius e in altre sedi lituane.',
  'Nord Security’s careers page speaks of its Vilnius headquarters and lists offices in Vilnius, Kaunas and Madrid.':
    'La pagina carriere di Nord Security parla della sede centrale di Vilnius ed elenca uffici a Vilnius, Kaunas e Madrid.',
  'Startup Genome’s 2026 report puts the Vilnius ecosystem’s value at $8 billion, against a European average of $14.3 billion.':
    'Il rapporto 2026 di Startup Genome stima il valore dell’ecosistema di Vilnius in 8 miliardi di dollari, contro una media europea di 14,3 miliardi.',
  'The Global Financial Centres Index 40 (September 2026) lists Vilnius (34 assessments) and Kaunas (15) only as associate centres, too few assessments for a rank.':
    'Il Global Financial Centres Index 40 (settembre 2026) elenca Vilnius (34 valutazioni) e Kaunas (15) solo come centri associati, con troppe poche valutazioni per un posto in classifica.',
  'Vilnius University ranks 465th in the QS World University Rankings 2027, the highest of any Lithuanian university.':
    'L’Università di Vilnius è al 465º posto nel QS World University Rankings 2027, la più alta tra le università lituane.',
  'Invest Lithuania describes Kaunas University of Technology as the largest provider of qualified engineers in the country and Kaunas’ free economic zone as a hub of logistics and advanced manufacturing; 36% of Kaunas’ 50,000 students study engineering, manufacturing and construction.':
    'Invest Lithuania descrive l’Università tecnologica di Kaunas come il maggiore fornitore di ingegneri qualificati del paese e la zona economica libera di Kaunas come polo di logistica e manifattura avanzata; il 36% dei 50.000 studenti di Kaunas studia ingegneria, manifattura e costruzioni.',
  'In 2025, 92.7% of Lithuanian tertiary graduates aged 20–34 who finished within the last three years were in work (EU 85.3%), unemployment among 15-to-24-year-olds was 14.1% (EU 15.2%), and 60.8% of 25-to-34-year-olds had a tertiary degree (EU 44.8%).':
    'Nel 2025 il 92,7% dei laureati lituani di 20–34 anni che avevano finito gli studi da meno di tre anni lavorava (UE 85,3%), la disoccupazione tra i 15-24enni era del 14,1% (UE 15,2%) e il 60,8% dei 25-34enni aveva una laurea (UE 44,8%).',
  'Invest Lithuania reports that 58% of Lithuanian fintechs employ international staff in their Lithuanian offices, so fintech and service-centre work is possible in English.':
    'Invest Lithuania riferisce che il 58% delle fintech lituane impiega personale internazionale nei suoi uffici in Lituania, quindi il lavoro nelle fintech e nei centri di servizi è possibile in inglese.',
  'The bank and Big Four postings read for Vilnius ask for Lithuanian as well as English: a Luminor graduate programme (fluent English and Lithuanian), an EY audit internship (English and Lithuanian) and a KPMG Baltics internship (fluent Lithuanian and effective English).':
    'Gli annunci di banche e Big Four letti per Vilnius chiedono il lituano oltre all’inglese: un programma per laureati di Luminor (inglese e lituano fluenti), un tirocinio in revisione di EY (inglese e lituano) e un tirocinio di KPMG Baltics (lituano fluente e inglese efficace).',
  'Swedbank’s Kick Start traineeships in the Baltic countries are open all year, and the bank is actively hiring trainees and junior specialists from February to May.':
    'I tirocini Kick Start di Swedbank nei paesi baltici sono aperti tutto l’anno, e la banca assume attivamente trainee e specialisti junior da febbraio a maggio.',
  'Vilnius University’s student-run VU Career Days ran from 23 to 27 March 2026, with the career fair and quick job interviews on 24 and 25 March and more than 70 companies.':
    'Le VU Career Days, organizzate dagli studenti dell’Università di Vilnius, si sono svolte dal 23 al 27 marzo 2026, con la fiera del lavoro e i colloqui rapidi il 24 e 25 marzo e più di 70 aziende.',
  'The Vilnius Tech Career Day, now in its 23rd year, promotes registration for the 2027 edition; its page gives no date.':
    'La Career Day del Vilnius Tech, giunta alla 23ª edizione, promuove le iscrizioni per l’edizione 2027; la sua pagina non indica alcuna data.'
});
