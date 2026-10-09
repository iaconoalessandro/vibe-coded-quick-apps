/* Atlas record: Thailand. Read 3 October 2026; log P70
 * (research/verification/round-4h.md). Outside Europe: routes for EU/EEA/Swiss
 * and UK passports. Student and graduate routes verified under the Non-ED Plus
 * visa scheme, corporate Non-B and BOI permits (visas_immigration/thailand/thailand_visas_immigration_guide.md).
 * Bangkok's provincial accounts (NESDC) give output, not jobs by sector, so no
 * family is rated above present.
 * Hubs for further cities were added on 3 October 2026 from city-level statistics
 * (log: research/verification/round-4k.md).
 * Deepened on 3 October 2026 (research/verification/round-5f.md; brief research/countries/th-thailand.md): standing and metrics on every hub, more employers and claims. Rent is left out: Numbeo refused access (HTTP 429). */

ATLAS.add({
  id: 'TH',
  checked: '2026-10-03',
  log: 'P70',
  summary: 'A university study and graduate work destination: the Non-ED Plus visa offers 1-year post-study job search and in-country work transition, alongside Non-B corporate permits and BOI schemes. Bangkok, the capital, is home to the stock exchange.',
  sectors: ['Tourism', 'Automotive', 'Agriculture and food', 'Banking and financial services', 'Electronics manufacturing'],
  roles: [],
  hubs: [
    {
      id: 'bangkok', name: 'Bangkok', lat: 13.76, lon: 100.50,
      knownFor: 'The capital and home of the stock exchange',
      why: ['th-set', 'th-set-cap', 'th-gfci', 'th-bkk-gpp'],
      sectors: ['Banking and financial services', 'Tourism', 'Retail', 'Real estate'],
      employers: [
        { name: 'Stock Exchange of Thailand', note: 'Ratchadaphisek Road, Bangkok; market capitalisation THB 19.8 trillion', c: 'th-set-cap' },
        { name: 'Kasikornbank', note: '17,194 employees and 732 domestic branches (2025)', c: 'th-kbank' }
      ],
      demand: {
        finance: ['present', 'th-set', 'th-set-cap', 'th-kbank'],
        business: 'gap', economics: 'gap', accounting: 'gap', management: 'gap', marketing: 'gap', logistics: 'gap', analytics: 'gap', it: 'gap', software: 'gap', datasci: 'gap', ai: 'gap', cs: 'gap', bigdata: 'gap'
      },
      finance: { banking: 'gap', ib: 'gap', am: 'gap', pe: 'gap', vc: 'gap', corpfin: 'gap', risk: 'gap', finconsult: 'gap' },
      standing: [
        { f: 'finance', s: [5, 2, 1], c: ['th-gfci', 'th-set-cap'] }
      ],
      metrics: {
        pop: { v: 9106000, year: 2024, area: 'region', tag: 'data', src: 'https://www.nesdc.go.th/en/info/gross-regional-and-provincial-product-gpp/', by: 'Office of the National Economic and Social Development Council, Gross Regional and Provincial Product 2024 (provisional; Bangkok Metropolis province population estimate, 1,000 persons × 1,000)', seen: '2026-10-03' },
        gdp: { v: 6351.8, cur: 'THB', year: 2024, area: 'region', tag: 'data', src: 'https://www.nesdc.go.th/en/info/gross-regional-and-provincial-product-gpp/', by: 'Office of the National Economic and Social Development Council, Gross Regional and Provincial Product 2024 (provisional; gross provincial product at current market prices, Bangkok Metropolis province)', seen: '2026-10-03' }
      },
      programmes: []
    },
    {
      id: 'eec', name: 'Chonburi and the Eastern Economic Corridor', lat: 13.36, lon: 100.98,
      knownFor: 'The industrial corridor east of Bangkok, now attracting data centres',
      why: ['th-eec', 'th-chon-gpp'],
      sectors: ['Automotive', 'Technology', 'Ports and logistics'],
      employers: [
        { name: 'Bridge Data Centres', note: 'Chonburi, 24.6 billion baht', c: 'th-eec' },
        { name: 'Skyline Data Center and Cloud Services', note: 'Chachoengsao, 46 billion baht', c: 'th-eec' },
        { t: 'Employers in Chon Buri province', note: 'output THB 1.23 trillion (2024)', c: 'th-chon-gpp' }
      ],
      demand: {
        business: 'gap', finance: 'gap', economics: 'gap', accounting: 'gap', management: 'gap', marketing: 'gap', logistics: 'gap', analytics: 'gap', it: 'gap', software: 'gap', datasci: 'gap', ai: 'gap', cs: 'gap', bigdata: 'gap'
      },
      standing: [
        { f: 'it', s: [3, 2, 1], c: ['th-eec'] }
      ],
      metrics: {
        pop: { v: 2050000, year: 2024, area: 'region', tag: 'data', src: 'https://www.nesdc.go.th/en/info/gross-regional-and-provincial-product-gpp/', by: 'Office of the National Economic and Social Development Council, Gross Regional and Provincial Product 2024 (provisional; Chon Buri province population estimate, 1,000 persons × 1,000)', seen: '2026-10-03' },
        gdp: { v: 1234.3, cur: 'THB', year: 2024, area: 'region', tag: 'data', src: 'https://www.nesdc.go.th/en/info/gross-regional-and-provincial-product-gpp/', by: 'Office of the National Economic and Social Development Council, Gross Regional and Provincial Product 2024 (provisional; gross provincial product at current market prices, Chon Buri province)', seen: '2026-10-03' }
      },
      programmes: []
    }
  ],

  work: [
    { k: 'Where demand is now', c: ['th-set'] },
    { k: 'Language', c: ['th-lang'] },
    { k: 'Recruiting calendar', c: ['th-cal'] },
    { k: 'Graduate labour market', c: ['th-glm'] }
  ],

  advisory: ['th-fcdo'],

  briefs: [
    ['countries/th-thailand.md', 'Country brief: hubs, employers, pay and standing']
  ],
  gaps: [
    'Thailand was not covered by the research library before this record.',
    'Thailand visas, student work prohibitions, Non-ED Plus 1-year graduate routes, Non-B work permits (50,000 THB minimum salary) and DTV are fully verified in visas_immigration/thailand/thailand_visas_immigration_guide.md.',
    'No source read gives Bangkok’s jobs by sector: the national planning office’s provincial accounts give output, not jobs, so no family is rated above present.',
    'Pay and tax series by province were not researched: the labour-force survey’s averages are by region, not by province.',
    'No pay figure is given: the labour-force survey’s averages are by region, not by province, so Bangkok and Chonburi could not be compared like with like. Bangkok Bank, Siam Commercial Bank and PTT are not named because no source we can cite was read, and Kasikornbank’s head office is not stated in the summary read.',
    'No family is rated in the Eastern Economic Corridor: the source read lists investment approvals, not hiring.'
  ],

  claims: {
    'th-set': { t: 'The Stock Exchange of Thailand is based in its own building at 93 Ratchadaphisek Road, Din Daeng, Bangkok.', tag: 'employer-stated', src: 'https://www.set.or.th/en/home', by: 'Stock Exchange of Thailand, website contact details', seen: '2026-10-03' },
    'th-lang': { t: 'In the 2026 TOEIC survey of Thai HR executives, 97% called English important and 80% used English assessments in recruitment and screening.', tag: 'data', src: 'https://www.nationthailand.com/business/economy/40067906', by: 'The Nation, TOEIC Global English Skills Report 2026 (ETS)', seen: '2026-10-08' },
    'th-cal': { t: 'There is no single national graduate season: Deloitte’s Amplify internships for May to August 2025 closed on 30 March 2025, KBank’s 2024 Young Scholarship closed on 15 January 2024, and the civil service general-knowledge exam for 2026 took registrations from 14 January to 3 February 2026.', tag: 'employer-stated', src: 'https://www.deloitte.com/southeast-asia/en/about/press-room/th-deloitte-southeast-asia-unveils-graduate-internship-programme-for-1000-aspiring-talents-across-the-region.html', by: 'Deloitte Southeast Asia press release, 3 March 2025; KBank press release, 16 November 2023; The Bangkok Insight on the OCSC exam, 14 January 2026', seen: '2026-10-08' },
    'th-glm': { t: 'Among company hires recorded by the Board of Investment, the share of university graduates fell from 30.1% in 2018 to 17.2% in 2022 while secondary-school graduates rose from 41.1% to 57.3%; the NESDC report warns that new graduates may struggle to find jobs as demand falls.', tag: 'data', src: 'https://asianews.network/?p=111800', by: 'Asia News Network, report on the NESDC analysis of graduate employment', seen: '2026-10-08' },
    'th-fcdo': { t: 'The UK Foreign Office advises against all but essential travel to Pattani, Yala and Narathiwat provinces and four districts of southern Songkhla, near the Malaysian border, because of regular attacks, and to areas within 20 km of the border with Cambodia after fighting in 2025.', tag: 'data', src: 'https://www.gov.uk/foreign-travel-advice/thailand', by: 'FCDO travel advice, Thailand (updated 28 Sep 2026)', seen: '2026-10-03' },
    'th-eec': { t: 'On 6 May 2026 the Board of Investment approved data-centre projects in the Eastern Economic Corridor, among them Skyline Data Center and Cloud Services in Chachoengsao (46 billion baht, 200 MW of IT load) and Bridge Data Centres in Chonburi (24.6 billion baht, 134 MW).', tag: 'data', src: 'https://www.boi.go.th/upload/content/PR67_2569EN.pdf', by: 'Thailand Board of Investment, press release 67/2569 (6 May 2026)', seen: '2026-10-03' },
    'th-set-cap': { t: 'On 2 October 2026 the Stock Exchange of Thailand showed a market capitalisation of THB 19,831,438.51 million for the SET board and THB 215,537.25 million for the mai board.', tag: 'data', src: 'https://www.set.or.th/en/market/product/stock/overview', by: 'Stock Exchange of Thailand, market overview (as of 2 Oct 2026)', seen: '2026-10-03' },
    'th-gfci': { t: 'The Global Financial Centres Index 40 (September 2026) ranks Bangkok 88th in the world, up 12 places.', tag: 'practitioner consensus', src: 'https://www.longfinance.net/media/documents/GFCI_40_Report_2026.09.16_v1.2.pdf', by: 'Z/Yen and Long Finance, Global Financial Centres Index 40 (September 2026), table 1', seen: '2026-10-03' },
    'th-kbank': { t: 'Kasikornbank reports 17,194 employees and 732 domestic branches at the end of 2025.', tag: 'employer-stated', src: 'https://www.kasikornbank.com/en/IR/ShareholderServices/MeetingsReports/y2025-financial_en.pdf', by: 'Kasikornbank, Annex 1 to the 2025 annual registration statement (summary of financial information)', seen: '2026-10-03' },
    'th-bkk-gpp': { t: 'The national planning office puts Bangkok’s gross provincial product at THB 6,351,792 million in 2024 (provisional), THB 697,529 per person, for a population estimate of 9.1 million.', tag: 'data', src: 'https://www.nesdc.go.th/en/info/gross-regional-and-provincial-product-gpp/', by: 'Office of the National Economic and Social Development Council, Gross Regional and Provincial Product 2024 (published 31 Mar 2026), table of GPP, population and per capita', seen: '2026-10-03' },
    'th-chon-gpp': { t: 'The national planning office puts Chon Buri’s gross provincial product at THB 1,234,303 million in 2024 (provisional), THB 601,977 per person, for a population estimate of 2.05 million.', tag: 'data', src: 'https://www.nesdc.go.th/en/info/gross-regional-and-provincial-product-gpp/', by: 'Office of the National Economic and Social Development Council, Gross Regional and Provincial Product 2024 (published 31 Mar 2026), table of GPP, population and per capita', seen: '2026-10-03' }
  }
});

if (window.I18N) I18N.add('it', {
  'A university study and graduate work destination: the Non-ED Plus visa offers 1-year post-study job search and in-country work transition, alongside Non-B corporate permits and BOI schemes. Bangkok, the capital, is home to the stock exchange.':
    'Una destinazione per studio universitario e lavoro per laureati: il visto Non-ED Plus offre 1 anno post-laurea per cercare lavoro e transizione in loco a lavoro, insieme ai permessi aziendali Non-B e ai canali BOI. Bangkok, la capitale, è la sede della borsa.',
  'Agriculture and food': 'Agricoltura e alimentare', 'Banking and financial services': 'Banche e servizi finanziari', 'Electronics manufacturing': 'Produzione elettronica',
  'The capital and home of the stock exchange': 'La capitale e sede della borsa',
  'Thailand was not covered by the research library before this record.': 'La Thailandia non era coperta dalla biblioteca di ricerca prima di questa scheda.',
  'Thailand visas, student work prohibitions, Non-ED Plus 1-year graduate routes, Non-B work permits (50,000 THB minimum salary) and DTV are fully verified in visas_immigration/thailand/thailand_visas_immigration_guide.md.':
    'I visti per la Thailandia, i divieti di lavoro per studenti, i percorsi post-laurea di 1 anno Non-ED Plus, i permessi Non-B (stipendio minimo 50.000 THB) e il DTV sono pienamente verificati in visas_immigration/thailand/thailand_visas_immigration_guide.md.',
  'No source read gives Bangkok’s jobs by sector: the national planning office’s provincial accounts give output, not jobs, so no family is rated above present.':
    'Nessuna fonte letta riporta i posti di lavoro di Bangkok per settore: i conti provinciali dell’ufficio nazionale di pianificazione riportano la produzione, non i posti, quindi nessuna famiglia è valutata oltre presente.',
  'Pay and tax series by province were not researched: the labour-force survey’s averages are by region, not by province.':
    'Le serie su stipendi e tasse per provincia non sono state ricercate: le medie dell’indagine sulle forze di lavoro sono per regione, non per provincia.',

  'The Stock Exchange of Thailand is based in its own building at 93 Ratchadaphisek Road, Din Daeng, Bangkok.':
    'La Borsa thailandese ha sede nel proprio edificio al 93 di Ratchadaphisek Road, Din Daeng, Bangkok.',
  'The UK Foreign Office advises against all but essential travel to Pattani, Yala and Narathiwat provinces and four districts of southern Songkhla, near the Malaysian border, because of regular attacks, and to areas within 20 km of the border with Cambodia after fighting in 2025.':
    'Il Foreign Office britannico sconsiglia i viaggi non essenziali verso le province di Pattani, Yala e Narathiwat e quattro distretti del Songkhla meridionale, vicino al confine con la Malaysia, per gli attacchi frequenti, e verso le zone entro 20 km dal confine con la Cambogia dopo i combattimenti del 2025.',
  'The industrial corridor east of Bangkok, now attracting data centres':
    'Il corridoio industriale a est di Bangkok, che ora attira data center',
  'Ports and logistics':
    'Porti e logistica',
  'Chonburi, 24.6 billion baht':
    'Chonburi, 24,6 miliardi di baht',
  'Chachoengsao, 46 billion baht':
    'Chachoengsao, 46 miliardi di baht',
  'On 6 May 2026 the Board of Investment approved data-centre projects in the Eastern Economic Corridor, among them Skyline Data Center and Cloud Services in Chachoengsao (46 billion baht, 200 MW of IT load) and Bridge Data Centres in Chonburi (24.6 billion baht, 134 MW).':
    'Il 6 maggio 2026 il Board of Investment ha approvato progetti di data center nell’Eastern Economic Corridor, tra cui Skyline Data Center and Cloud Services a Chachoengsao (46 miliardi di baht, 200 MW di carico IT) e Bridge Data Centres a Chonburi (24,6 miliardi di baht, 134 MW).',
  'No family is rated in the Eastern Economic Corridor: the source read lists investment approvals, not hiring.':
    'Nessuna famiglia è valutata nell’Eastern Economic Corridor: la fonte letta elenca le approvazioni di investimenti, non le assunzioni.',

  'On 2 October 2026 the Stock Exchange of Thailand showed a market capitalisation of THB 19,831,438.51 million for the SET board and THB 215,537.25 million for the mai board.':
    'Il 2 ottobre 2026 la Borsa di Thailandia indicava una capitalizzazione di mercato di 19.831.438,51 milioni di THB per il listino SET e di 215.537,25 milioni di THB per il listino mai.',
  'The Global Financial Centres Index 40 (September 2026) ranks Bangkok 88th in the world, up 12 places.':
    'Il Global Financial Centres Index 40 (settembre 2026) colloca Bangkok all’88º posto nel mondo, in salita di 12 posizioni.',
  'Kasikornbank reports 17,194 employees and 732 domestic branches at the end of 2025.':
    'Kasikornbank dichiara 17.194 dipendenti e 732 filiali in Thailandia alla fine del 2025.',
  'The national planning office puts Bangkok’s gross provincial product at THB 6,351,792 million in 2024 (provisional), THB 697,529 per person, for a population estimate of 9.1 million.':
    'L’ufficio nazionale di pianificazione stima il prodotto provinciale lordo di Bangkok in 6.351.792 milioni di THB nel 2024 (provvisorio), 697.529 THB a persona, per una popolazione stimata di 9,1 milioni.',
  'The national planning office puts Chon Buri’s gross provincial product at THB 1,234,303 million in 2024 (provisional), THB 601,977 per person, for a population estimate of 2.05 million.':
    'L’ufficio nazionale di pianificazione stima il prodotto provinciale lordo di Chon Buri in 1.234.303 milioni di THB nel 2024 (provvisorio), 601.977 THB a persona, per una popolazione stimata di 2,05 milioni.',
  'No pay figure is given: the labour-force survey’s averages are by region, not by province, so Bangkok and Chonburi could not be compared like with like. Bangkok Bank, Siam Commercial Bank and PTT are not named because no source we can cite was read, and Kasikornbank’s head office is not stated in the summary read.':
    'Non è indicato alcun dato sugli stipendi: le medie dell’indagine sulle forze di lavoro sono per regione, non per provincia, quindi Bangkok e Chonburi non si sono potute confrontare in modo omogeneo. Bangkok Bank, Siam Commercial Bank e PTT non sono citate perché non è stata letta alcuna fonte citabile, e la sede di Kasikornbank non è indicata nel riepilogo letto.',
  'Country brief: hubs, employers, pay and standing': 'Dossier paese: poli, datori di lavoro, stipendi e posizionamento',
  'Ratchadaphisek Road, Bangkok; market capitalisation THB 19.8 trillion':
    'Ratchadaphisek Road, Bangkok; capitalizzazione di mercato di 19,8 mila miliardi di THB',
  '17,194 employees and 732 domestic branches (2025)': '17.194 dipendenti e 732 filiali in Thailandia (2025)',
  'Employers in Chon Buri province': 'Datori di lavoro nella provincia di Chon Buri',
  'output THB 1.23 trillion (2024)': 'produzione di 1,23 mila miliardi di THB (2024)',
  'In the 2026 TOEIC survey of Thai HR executives, 97% called English important and 80% used English assessments in recruitment and screening.':
    'Nell’indagine TOEIC 2026 tra i responsabili HR thailandesi, il 97% ha definito l’inglese importante e l’80% usava test d’inglese nella selezione e nello screening.',
  'There is no single national graduate season: Deloitte’s Amplify internships for May to August 2025 closed on 30 March 2025, KBank’s 2024 Young Scholarship closed on 15 January 2024, and the civil service general-knowledge exam for 2026 took registrations from 14 January to 3 February 2026.':
    'Non esiste una stagione nazionale unica per i laureati: i tirocini Amplify di Deloitte da maggio ad agosto 2025 si sono chiusi il 30 marzo 2025, la Young Scholarship 2024 di KBank si è chiusa il 15 gennaio 2024, e l’esame di cultura generale del servizio civile per il 2026 ha raccolto le iscrizioni dal 14 gennaio al 3 febbraio 2026.',
  'Among company hires recorded by the Board of Investment, the share of university graduates fell from 30.1% in 2018 to 17.2% in 2022 while secondary-school graduates rose from 41.1% to 57.3%; the NESDC report warns that new graduates may struggle to find jobs as demand falls.':
    'Tra le assunzioni delle aziende registrate dal Board of Investment, la quota di laureati è scesa dal 30,1% del 2018 al 17,2% del 2022 mentre quella dei diplomati delle superiori è salita dal 41,1% al 57,3%; il rapporto del NESDC avverte che i nuovi laureati potrebbero faticare a trovare lavoro con il calo della domanda.'
});
