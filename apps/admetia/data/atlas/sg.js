/* Atlas record: Singapore. Read 2 October 2026, deepened 3 October 2026; log P35
 * (research/verification/round-4a.md, round-5e.md). A city-state, so one hub. Outside Europe: routes for EU/EEA/Swiss
 * and UK passports only. COMPASS detail is from
 * research/places/beyond-europe.md §4. */

ATLAS.add({
  id: 'SG',
  checked: '2026-10-03',
  log: 'P35',
  summary: 'One city, three big employers of graduates: finance, with about 200,000 jobs; tech, with more than 220,000 professionals, most of them outside tech firms; and the world’s leading container port. The work pass is the filter: the Employment Pass salary floor is above what most fresh graduates earn outside finance and tech.',
  sectors: ['Banking and asset management', 'Technology', 'Port and maritime services', 'Regional headquarters', 'Biomedical and manufacturing'],
  roles: ['finance', 'it', 'logistics'],
  hubs: [
    {
      id: 'singapore', name: 'Singapore', lat: 1.29, lon: 103.85,
      knownFor: 'Asia’s finance and tech headquarters city, and its busiest port',
      why: ['sg-mas', 'sg-imda', 'sg-mpa', 'sg-gfci', 'sg-gser'],
      sectors: ['Banking', 'Asset and wealth management', 'Insurance', 'Technology', 'Maritime and logistics'],
      employers: [
        { t: 'Over 2,500 licensed financial institutions', note: 'about 200,000 finance jobs, over 80% held by locals', c: 'sg-mas' },
        { name: 'DBS', note: 'headquartered and listed in Singapore, in 19 markets', c: 'sg-dbs' },
        { t: 'Tech employers across the economy', note: '58.7% of tech professionals work outside tech firms', c: 'sg-imda' },
        { name: 'Sea', note: 'owner of Garena, Shopee and Monee, founded in Singapore', c: 'sg-sea' },
        { name: 'Port of Singapore', note: 'the world’s leading container port', c: 'sg-mpa' },
        { t: 'International shipping groups', note: 'more than 200 have operations here', c: 'sg-imc' }
      ],
      demand: {
        finance: ['dominant', 'sg-mas', 'sg-gfci'],
        it: ['dominant', 'sg-imda'],
        software: ['strong', 'sg-imda', 'sg-gser'],
        logistics: ['dominant', 'sg-mpa', 'sg-imc'],
        business: 'gap', economics: 'gap', accounting: 'gap', management: 'gap', marketing: 'gap',
        analytics: 'gap', datasci: 'gap', ai: 'gap', cs: 'gap', bigdata: 'gap'
      },
      finance: {
        banking: ['strong', 'sg-mas', 'sg-dbs'],
        ib: 'gap', am: 'gap', pe: 'gap', vc: 'gap', corpfin: 'gap', risk: 'gap', finconsult: 'gap'
      },
      standing: [
        { f: 'finance', s: [5, 4, 4], c: ['sg-gfci', 'sg-mas'] },
        { f: 'it', s: [5, 3, 2], c: ['sg-imda', 'sg-gser'] },
        { f: 'software', s: [5, 4, 3], c: ['sg-gser', 'sg-imda'] },
        { f: 'logistics', s: [5, 5, 5], c: ['sg-mpa', 'sg-imc'] }
      ],
      metrics: {
        pop:  { v: 6110000, year: 2025, area: 'city', tag: 'data', src: 'https://www.population.gov.sg/population-in-brief-2025-key-trends/', by: 'National Population and Talent Division, Population in Brief 2025 (total population, June 2025)', seen: '2026-10-03' },
        gdp:  { v: 789.5, cur: 'SGD', year: 2025, area: 'city', tag: 'data', src: 'https://isomer-user-content.by.gov.sg/166/16f78938-9d69-4df0-87a2-c6e6b0376da6/FullReport_AES2025.pdf', by: 'Ministry of Trade and Industry, Economic Survey of Singapore 2025 (GDP at current market prices; a city-state, so the country figure)', seen: '2026-10-03' },
        wage: { v: 5775, cur: 'SGD', basis: 'median', year: 2025, area: 'city', tag: 'data', src: 'https://stats.mom.gov.sg/iMAS_PdfLibrary/mrsd_2025Labourforce.pdf', by: 'Ministry of Manpower, Labour Force in Singapore 2025 (median gross monthly income of full-time employed residents, employer CPF included)', seen: '2026-10-03' },
        rent: { v: 3804, cur: 'SGD', year: 2026, area: 'city', tag: 'anecdotal', src: 'https://www.numbeo.com/cost-of-living/in/Singapore', by: 'Numbeo (crowd-sourced), one-bedroom flat in the city centre', seen: '2026-10-03' }
      },
      programmes: [
        { calc: 'masters', track: 'marketing', id: 'essec-mmd', name: 'ESSEC — MSc Marketing Management & Digital' },
        { calc: 'masters', track: 'mim', id: 'insead-mim', name: 'INSEAD — MiM' },
        { calc: 'mba', name: 'Nanyang (NTU) (MBA)' },
        { calc: 'mba', name: 'INSEAD (MBA)' }
      ]
    }
  ],

  work: [
    { k: 'Language', c: ['sg-lang'] },
    { k: 'Graduate labour market', c: ['sg-glm'] },
    { k: 'Work pass salary floor', c: ['sg-floor'] },
    { k: 'Where demand is now', c: ['sg-mas', 'sg-imda'] },
    { k: 'Recruiting calendar', c: ['sg-cal'] },
    { k: 'Entry pay', c: ['sg-ges', 'sg-degree'] },
    { k: 'Tax and net pay', c: ['sg-tax', 'sg-cpf'] }
  ],

  briefs: [
    ['places/beyond-europe.md', '§4 Singapore: COMPASS arithmetic, graduate pay, tuition grants'],
    ['places/visas-and-work-rights.md', '§8 Singapore Employment Pass'],
    ['careers/tech-data-and-ai.md', '§7 visas and mobility for tech graduates'],
    ['countries/sg-singapore.md', 'Country brief: hub, employers, pay and standing']
  ],
  gaps: [
    'How long the graduate Long-Term Visit Pass lasts is not stated on the ICA page read.',
    'Demand in AI, data science, business and management roles is not rated: no source read measures them separately.',
    'The all-university graduate median (S$4,500 in 2025) was read only in a trade-press report of the joint survey, not on the universities’ own page; the pay claim here uses SMU’s annex.',
    'Temasek, GIC, OCBC and UOB are not listed as employers because no head-office or headcount source we can cite was read.',
    'No published outcomes for coursework master’s graduates in Singapore were found; graduate surveys report bachelor’s degrees only.'
  ],

  claims: {
    'sg-floor': { t: 'For a European with a top-tier degree, the salary floor, not the points, is the real barrier: it sits above median bachelor’s graduate pay, so it is realistic mainly in finance, tech and consulting.', tag: 'practitioner consensus', src: 'research/places/beyond-europe.md', by: 'Admetia research library, places/beyond-europe.md §4.4 (from MOM and graduate surveys)', seen: '2026-10-01' },
    'sg-lang': { t: 'English is the language most often spoken at home by 48.3% of residents aged five and over (2020), up from 32.3% in 2010, and is the common language of work.', tag: 'data', src: 'https://www.singstat.gov.sg/files/5c62343f-d2e2-448b-b75f-0a7f865ac6e8.pdf', by: 'Singapore Department of Statistics, Census 2020', seen: '2026-10-02' },
    'sg-glm': { t: 'In the 2025 survey of the six autonomous universities, 88.9% of graduates had secured employment within six months (91.2% in 2024), 74.4% were in full-time permanent jobs and the median gross monthly salary was S$4,500; business graduates had 91.2% secured employment and a median of S$4,400.', tag: 'data', src: 'https://www.humanresourcesonline.net/median-starting-salaries-of-fresh-graduates-from-nus-ntu-smu-sit-suss-sutd-in-2025', by: 'Human Resources Online, report of the Joint Autonomous Universities Graduate Employment Survey 2025', seen: '2026-10-08' },
    'sg-cal': { t: 'Bank graduate cohorts start in July: DBS’s Management Associate Programme commences on 5 July 2027 and HSBC’s Singapore corporate and institutional banking programmes start in July 2027, with assessment centres from September to November 2026; NTU’s main career fair runs each September and February, and the Employment Pass salary floor rises on 1 January 2027.', tag: 'employer-stated', src: 'https://dbs.com/careers/management-associate-programme/singapore', by: 'DBS Management Associate Programme FAQ; HSBC 2027 Singapore listing (SEEK Grad); NTU Career & Attachment Office; Ministry of Manpower', seen: '2026-10-08' },
    'sg-tax': { t: 'Resident tax rates run from 0% on the first S$20,000 to 24%; a foreigner becomes resident after 183 days, and a non-resident’s employment income is taxed at 15% or the resident rates, whichever is higher.', tag: 'data', src: 'https://www.iras.gov.sg/taxes/individual-income-tax/basics-of-individual-income-tax/tax-residency-and-tax-rates/individual-income-tax-rates', by: 'IRAS, individual income tax rates', seen: '2026-10-02' },
    'sg-cpf': { t: 'Foreign employees, Employment Pass holders included, do not pay into the state pension fund (CPF); the government points them to the voluntary Supplementary Retirement Scheme instead.', tag: 'data', src: 'https://www.cpf.gov.sg/service/article/if-my-foreign-employees-request-to-contribute-to-cpf-can-i-make-cpf-contributions-for-them', by: 'CPF Board', seen: '2026-10-02' },
    'sg-mas': { t: 'Singapore has over 2,500 licensed financial institutions employing close to 200,000 people; over 80% of the workforce is local, and nine in ten net new jobs between 2018 and 2023 went to locals.', tag: 'data', src: 'https://www.mas.gov.sg/news/parliamentary-replies/2025/oral-reply-to-parliamentary-question-on-talent-shortage-in-the-financial-sector', by: 'Monetary Authority of Singapore, parliamentary reply, 10 Mar 2025', seen: '2026-10-02' },
    'sg-imda': { t: 'Singapore employed 222,170 tech professionals in 2025, up from 181,050 in 2020; 58.7% of tech and media staff work outside the infocomm sector.', tag: 'data', src: 'https://www.imda.gov.sg/about-imda/research-and-statistics/tech-and-media-talent', by: 'IMDA, tech and media talent tables (updated 25 May 2026)', seen: '2026-10-02' },
    'sg-mpa': { t: 'The port handled a record 44.66 million TEU in 2025, up 8.6%, and was named the world’s leading container port.', tag: 'data', src: 'https://www.mpa.gov.sg/media-centre/details/singapore-posts-record-port-performance-in-2025-and-develops-future-readiness-through-industry-collaborations-for-2026', by: 'Maritime and Port Authority, 13 Jan 2026', seen: '2026-10-02' },
    'sg-gfci': { t: 'The Global Financial Centres Index 40 (September 2026) ranks Singapore fourth in the world, one rating point behind Hong Kong in third and second in Asia/Pacific; for fintech it ranks Singapore fourth, after Hong Kong, New York and Shenzhen.', tag: 'practitioner consensus', src: 'https://www.longfinance.net/media/documents/GFCI_40_Report_2026.09.16_v1.2.pdf', by: 'Z/Yen and Long Finance, Global Financial Centres Index 40 (September 2026), tables 1 and 9', seen: '2026-10-03' },
    'sg-gser': { t: 'Startup Genome’s 2026 report ranks Singapore eighth among the world’s start-up ecosystems and second in Asia.', tag: 'practitioner consensus', src: 'https://startupgenome.com/ecosystems/singapore', by: 'Startup Genome, Global Startup Ecosystem Report 2026, Singapore page', seen: '2026-10-03' },
    'sg-dbs': { t: 'DBS says it is a leading financial services group in Asia with a presence in 19 markets, headquartered and listed in Singapore, and reports total assets of SGD 897 billion.', tag: 'employer-stated', src: 'https://www.dbs.com/iwov-resources/images/investors/annual-report/dbs-annual-report-2025.pdf', by: 'DBS Group Holdings, Annual Report 2025', seen: '2026-10-03' },
    'sg-sea': { t: 'Sea Limited, founded in Singapore in 2009, runs Garena (games), Shopee (e-commerce) and Monee (digital payments and financial services); it describes Shopee as the largest pan-regional e-commerce platform in Southeast Asia, Taiwan and Brazil.', tag: 'employer-stated', src: 'https://cdn.sea.com/investor/4Q2025/JcKns4LaJC8bxcQdJwXz/2026.03.03%20Sea%20Fourth%20Quarter%20and%20Full%20Year%202025%20Results.pdf', by: 'Sea Limited, fourth-quarter and full-year 2025 results, 3 Mar 2026', seen: '2026-10-03' },
    'sg-imc': { t: 'In 2025 another 35 maritime companies opened or expanded in Singapore, taking the total to more than 200 international shipping groups; Singapore kept its top ranking in the Xinhua-Baltic International Shipping Centre Development Index and was named the world’s leading container port by DNV-Menon.', tag: 'data', src: 'https://www.mpa.gov.sg/media-centre/details/singapore-posts-record-port-performance-in-2025-and-develops-future-readiness-through-industry-collaborations-for-2026', by: 'Maritime and Port Authority, 13 Jan 2026', seen: '2026-10-03' },
    'sg-ges': { t: 'In Singapore Management University’s 2025 graduate employment survey, graduates in full-time permanent jobs had a median gross monthly pay of S$4,600 in business management, S$4,500 in economics, S$4,350 in accountancy and S$5,400 in information systems, about six months after finishing.', tag: 'data', src: 'https://mma.prnewswire.com/media/2929153/Annex_B_Web_Publication_SMU_GES_2025.pdf', by: 'Graduate Employment Survey 2025, SMU annex (survey run jointly by the six autonomous universities)', seen: '2026-10-03' },
    'sg-degree': { t: 'Full-time employed residents with a degree had a median gross monthly income of S$9,038 in 2025, against S$5,775 for all full-time employed residents; the resident unemployment rate for professionals, managers, executives and technicians was 2.8%.', tag: 'data', src: 'https://stats.mom.gov.sg/iMAS_PdfLibrary/mrsd_2025Labourforce.pdf', by: 'Ministry of Manpower, Labour Force in Singapore 2025', seen: '2026-10-03' }
  }
});

if (window.I18N) I18N.add('it', {
  'One city, three big employers of graduates: finance, with about 200,000 jobs; tech, with more than 220,000 professionals, most of them outside tech firms; and the world’s leading container port. The work pass is the filter: the Employment Pass salary floor is above what most fresh graduates earn outside finance and tech.':
    'Una città, tre grandi datori di lavoro per i laureati: la finanza, con circa 200.000 posti; la tecnologia, con oltre 220.000 professionisti, per lo più fuori dalle aziende tecnologiche; e il principale porto container del mondo. Il filtro è il permesso di lavoro: la soglia salariale dell’Employment Pass supera ciò che guadagnano quasi tutti i neolaureati fuori da finanza e tecnologia.',
  'Banking and asset management': 'Banche e asset management', 'Port and maritime services': 'Porto e servizi marittimi',
  'Regional headquarters': 'Sedi regionali', 'Biomedical and manufacturing': 'Biomedicale e manifattura',
  'Asia’s finance and tech headquarters city, and its busiest port': 'La città delle sedi asiatiche della finanza e della tecnologia, e il suo porto più trafficato',
  'Asset and wealth management': 'Asset management e gestione patrimoniale', 'Maritime and logistics': 'Marittimo e logistica',
  'about 200,000 finance jobs, over 80% held by locals': 'circa 200.000 posti nella finanza, oltre l’80% occupati da residenti',
  '58.7% of tech professionals work outside tech firms': 'il 58,7% dei professionisti della tecnologia lavora fuori dalle aziende tecnologiche',
  'the world’s leading container port': 'il principale porto container del mondo',
  'Over 2,500 licensed financial institutions': 'Oltre 2.500 istituzioni finanziarie autorizzate', 'Tech employers across the economy': 'Datori di lavoro tecnologici in tutta l’economia',
  '§4 Singapore: COMPASS arithmetic, graduate pay, tuition grants': '§4 Singapore: il calcolo COMPASS, gli stipendi dei laureati, i contributi sulle tasse universitarie',
  '§8 Singapore Employment Pass': '§8 Employment Pass di Singapore', '§7 visas and mobility for tech graduates': '§7 visti e mobilità per i laureati in tecnologia',
  'How long the graduate Long-Term Visit Pass lasts is not stated on the ICA page read.':
    'La durata del Long-Term Visit Pass per neolaureati non è indicata nella pagina dell’ICA letta.',
  'Demand in AI, data science, business and management roles is not rated: no source read measures them separately.':
    'La domanda nei ruoli di IA, data science, business e management non è valutata: nessuna fonte letta li misura separatamente.',
  'No published outcomes for coursework master’s graduates in Singapore were found; graduate surveys report bachelor’s degrees only.':
    'Non sono stati trovati esiti pubblicati per i laureati dei master taught a Singapore; le indagini sui laureati riguardano solo le lauree triennali.',

  'For a European with a top-tier degree, the salary floor, not the points, is the real barrier: it sits above median bachelor’s graduate pay, so it is realistic mainly in finance, tech and consulting.':
    'Per un europeo con una laurea di eccellenza il vero ostacolo è la soglia salariale, non i punti: supera lo stipendio mediano dei laureati triennali, quindi è realistica soprattutto in finanza, tecnologia e consulenza.',
  'English is the language most often spoken at home by 48.3% of residents aged five and over (2020), up from 32.3% in 2010, and is the common language of work.':
    'L’inglese è la lingua parlata più spesso in casa dal 48,3% dei residenti dai cinque anni in su (2020), contro il 32,3% del 2010, ed è la lingua comune del lavoro.',
  'Resident tax rates run from 0% on the first S$20,000 to 24%; a foreigner becomes resident after 183 days, and a non-resident’s employment income is taxed at 15% or the resident rates, whichever is higher.':
    'Le aliquote per i residenti vanno dallo 0% sui primi 20.000 S$ al 24%; uno straniero diventa residente dopo 183 giorni, e il reddito da lavoro di un non residente è tassato al 15% o con le aliquote dei residenti, se più alte.',
  'Foreign employees, Employment Pass holders included, do not pay into the state pension fund (CPF); the government points them to the voluntary Supplementary Retirement Scheme instead.':
    'I dipendenti stranieri, compresi i titolari di Employment Pass, non versano al fondo pensionistico pubblico (CPF); il governo li indirizza invece al Supplementary Retirement Scheme, volontario.',
  'Singapore has over 2,500 licensed financial institutions employing close to 200,000 people; over 80% of the workforce is local, and nine in ten net new jobs between 2018 and 2023 went to locals.':
    'Singapore conta oltre 2.500 istituzioni finanziarie autorizzate con quasi 200.000 addetti; oltre l’80% del personale è locale, e nove nuovi posti netti su dieci tra il 2018 e il 2023 sono andati a residenti.',
  'Singapore employed 222,170 tech professionals in 2025, up from 181,050 in 2020; 58.7% of tech and media staff work outside the infocomm sector.':
    'Nel 2025 Singapore impiegava 222.170 professionisti della tecnologia, contro i 181.050 del 2020; il 58,7% degli addetti a tecnologia e media lavora fuori dal settore infocomm.',
  'The port handled a record 44.66 million TEU in 2025, up 8.6%, and was named the world’s leading container port.':
    'Nel 2025 il porto ha movimentato il record di 44,66 milioni di TEU, l’8,6% in più, ed è stato nominato principale porto container del mondo.',

  'Entry pay': 'Stipendio d’ingresso',
  'Work pass salary floor': 'Soglia salariale del permesso di lavoro',
  'headquartered and listed in Singapore, in 19 markets': 'con sede e quotata a Singapore, presente in 19 mercati',
  'owner of Garena, Shopee and Monee, founded in Singapore': 'proprietaria di Garena, Shopee e Monee, fondata a Singapore',
  'International shipping groups': 'Gruppi armatoriali internazionali',
  'more than 200 have operations here': 'più di 200 hanno attività qui',
  'Country brief: hub, employers, pay and standing': 'Dossier paese: polo, datori di lavoro, stipendi e posizionamento',
  'The all-university graduate median (S$4,500 in 2025) was read only in a trade-press report of the joint survey, not on the universities’ own page; the pay claim here uses SMU’s annex.':
    'La mediana complessiva dei laureati di tutte le università (4.500 S$ nel 2025) è stata letta solo in un articolo della stampa di settore sull’indagine congiunta, non sulla pagina delle università; l’affermazione sugli stipendi qui usa l’allegato della SMU.',
  'Temasek, GIC, OCBC and UOB are not listed as employers because no head-office or headcount source we can cite was read.':
    'Temasek, GIC, OCBC e UOB non sono elencate come datori di lavoro perché non è stata letta alcuna fonte citabile su sede o organici.',
  'The Global Financial Centres Index 40 (September 2026) ranks Singapore fourth in the world, one rating point behind Hong Kong in third and second in Asia/Pacific; for fintech it ranks Singapore fourth, after Hong Kong, New York and Shenzhen.':
    'Il Global Financial Centres Index 40 (settembre 2026) colloca Singapore al quarto posto nel mondo, a un punto di valutazione da Hong Kong, terza, e al secondo in Asia/Pacifico; per il fintech la colloca quarta, dopo Hong Kong, New York e Shenzhen.',
  'Startup Genome’s 2026 report ranks Singapore eighth among the world’s start-up ecosystems and second in Asia.':
    'Il rapporto 2026 di Startup Genome colloca Singapore all’ottavo posto tra gli ecosistemi di start-up del mondo e al secondo in Asia.',
  'DBS says it is a leading financial services group in Asia with a presence in 19 markets, headquartered and listed in Singapore, and reports total assets of SGD 897 billion.':
    'DBS si definisce un importante gruppo di servizi finanziari in Asia, presente in 19 mercati, con sede e quotazione a Singapore, e dichiara attivi totali per 897 miliardi di dollari di Singapore.',
  'Sea Limited, founded in Singapore in 2009, runs Garena (games), Shopee (e-commerce) and Monee (digital payments and financial services); it describes Shopee as the largest pan-regional e-commerce platform in Southeast Asia, Taiwan and Brazil.':
    'Sea Limited, fondata a Singapore nel 2009, gestisce Garena (giochi), Shopee (e-commerce) e Monee (pagamenti digitali e servizi finanziari); descrive Shopee come la maggiore piattaforma di e-commerce panregionale nel Sud-est asiatico, a Taiwan e in Brasile.',
  'In 2025 another 35 maritime companies opened or expanded in Singapore, taking the total to more than 200 international shipping groups; Singapore kept its top ranking in the Xinhua-Baltic International Shipping Centre Development Index and was named the world’s leading container port by DNV-Menon.':
    'Nel 2025 altre 35 aziende marittime hanno aperto o ampliato le attività a Singapore, portando il totale a più di 200 gruppi armatoriali internazionali; Singapore ha mantenuto il primo posto nello Xinhua-Baltic International Shipping Centre Development Index ed è stata nominata principale porto container del mondo da DNV-Menon.',
  'In Singapore Management University’s 2025 graduate employment survey, graduates in full-time permanent jobs had a median gross monthly pay of S$4,600 in business management, S$4,500 in economics, S$4,350 in accountancy and S$5,400 in information systems, about six months after finishing.':
    'Nell’indagine 2025 sui laureati della Singapore Management University, chi aveva un lavoro permanente a tempo pieno guadagnava una mediana lorda mensile di 4.600 S$ in business management, 4.500 S$ in economia, 4.350 S$ in contabilità e 5.400 S$ in sistemi informativi, circa sei mesi dopo la fine degli studi.',
  'Full-time employed residents with a degree had a median gross monthly income of S$9,038 in 2025, against S$5,775 for all full-time employed residents; the resident unemployment rate for professionals, managers, executives and technicians was 2.8%.':
    'Nel 2025 i residenti occupati a tempo pieno con una laurea avevano un reddito lordo mensile mediano di 9.038 S$, contro i 5.775 S$ di tutti gli occupati residenti a tempo pieno; il tasso di disoccupazione dei residenti tra professionisti, dirigenti, quadri e tecnici era del 2,8%.',
  'In the 2025 survey of the six autonomous universities, 88.9% of graduates had secured employment within six months (91.2% in 2024), 74.4% were in full-time permanent jobs and the median gross monthly salary was S$4,500; business graduates had 91.2% secured employment and a median of S$4,400.':
    'Nell’indagine 2025 sulle sei università autonome, l’88,9% dei laureati aveva trovato un lavoro entro sei mesi (91,2% nel 2024), il 74,4% aveva un lavoro fisso a tempo pieno e la retribuzione mensile lorda mediana era di 4.500 S$; i laureati in economia aziendale avevano il 91,2% di occupazione assicurata e una mediana di 4.400 S$.',
  'Bank graduate cohorts start in July: DBS’s Management Associate Programme commences on 5 July 2027 and HSBC’s Singapore corporate and institutional banking programmes start in July 2027, with assessment centres from September to November 2026; NTU’s main career fair runs each September and February, and the Employment Pass salary floor rises on 1 January 2027.':
    'Le coorti di laureati delle banche iniziano a luglio: il Management Associate Programme di DBS inizia il 5 luglio 2027 e i programmi di HSBC per la banca corporate e istituzionale a Singapore iniziano a luglio 2027, con assessment centre da settembre a novembre 2026; la fiera di carriera principale della NTU si tiene ogni settembre e febbraio, e la soglia salariale dell’Employment Pass sale il 1° gennaio 2027.'
});
