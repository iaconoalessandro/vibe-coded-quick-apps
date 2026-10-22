/* Atlas record: Malaysia. Read 3 October 2026; log P69
 * (research/verification/round-4h.md). Outside Europe: routes for EU/EEA/Swiss
 * and UK passports only. Malaysia had no coverage in the research library.
 * Student work rules are read on EMGS, the government's student-visa agency;
 * the Employment Pass floors on a KPMG alert summarising the Home Ministry's
 * announcement (the Immigration Department's own page was not read). Kuala
 * Lumpur rests on the statistics office and two Bank Negara directory entries;
 * no city figure by sector was read, so finance is only present.
 * Hubs for further cities were added on 3 October 2026 from city-level statistics
 * (log: research/verification/round-4k.md).
 * Deepened on 3 October 2026 (research/verification/round-5f.md; brief research/countries/my-malaysia.md): standing and metrics on every hub, more employers and claims. Rent is left out: Numbeo refused access (HTTP 429). */

ATLAS.add({
  id: 'MY',
  checked: '2026-10-03',
  log: 'P69',
  summary: 'A study destination with a hard step to work: students may only work in term breaks, in a short list of jobs, and a graduate needs an Employment Pass whose minimum basic salary rose to RM5,000 a month on 1 June 2026. Kuala Lumpur, the capital, is the second-largest contributor to the economy after Selangor.',
  sectors: ['Banking and financial services', 'Electronics manufacturing', 'Oil, gas and petrochemicals', 'Trade and logistics', 'Tourism'],
  roles: ['finance', 'it'],
  hubs: [
    {
      id: 'kuala-lumpur', name: 'Kuala Lumpur', lat: 3.15, lon: 101.69,
      knownFor: 'The capital and services economy, where foreign banks have their Malaysian head offices',
      why: ['my-kl', 'my-gfci', 'my-cimb', 'my-gser-kl'],
      sectors: ['Banking and financial services', 'Business services', 'Retail', 'Tourism'],
      employers: [
        { name: 'CIMB', note: 'headquartered in Kuala Lumpur; around 33,000 employees', c: 'my-cimb' },
        { name: 'Deutsche Bank (Malaysia) Berhad', note: 'licensed commercial bank, head office in Kuala Lumpur', c: 'my-db' },
        { name: 'Bank of America Malaysia Berhad', note: 'licensed commercial bank, head office in Kuala Lumpur', c: 'my-boa' }
      ],
      demand: {
        finance: ['strong', 'my-cimb', 'my-db', 'my-boa', 'my-gfci'],
        business: 'gap', economics: 'gap', accounting: 'gap', management: 'gap', marketing: 'gap', logistics: 'gap', analytics: 'gap', it: 'gap', software: 'gap', datasci: 'gap', ai: 'gap', cs: 'gap', bigdata: 'gap'
      },
      finance: {
        banking: ['strong', 'my-cimb', 'my-db', 'my-boa'],
        ib: 'gap', am: 'gap', pe: 'gap', vc: 'gap', corpfin: 'gap', risk: 'gap', finconsult: 'gap'
      },
      standing: [
        { f: 'finance', s: [5, 2, 1], c: ['my-gfci', 'my-cimb', 'my-kl'] },
        { f: 'it', s: [5, 2, 1], c: ['my-gser-kl'] }
      ],
      metrics: {
        pop: { v: 2100000, year: 2025, area: 'region', tag: 'data', src: 'https://www.dosm.gov.my/uploads/release-content/file_20250821151339.pdf', by: 'Department of Statistics Malaysia, Current Population Estimates, Malaysia, 2025 (the state or federal territory, published to the nearest 0.1 million)', seen: '2026-10-03' },
        gdp: { v: 265.1, cur: 'MYR', year: 2025, area: 'region', tag: 'data', src: 'https://www.dosm.gov.my/uploads/release-content/file_20260701120804.pdf', by: 'Department of Statistics Malaysia, GDP by State 2025 (1 Jul 2026; the state or federal territory)', seen: '2026-10-03' },
        wage: { v: 4391, cur: 'MYR', basis: 'median', year: 2025, area: 'region', tag: 'data', src: 'https://www.dosm.gov.my/portal-main/release-content/employee-wages-statistics-formal-sector-q42025', by: 'Department of Statistics Malaysia, Employee Wages Statistics (Formal Sector), Q4 2025: median monthly wage of formal employees, December 2025 (the state or federal territory)', seen: '2026-10-03' }
      },
      programmes: []
    },
    {
      id: 'penang', name: 'Penang (George Town)', lat: 5.41, lon: 100.33,
      knownFor: 'Malaysia’s electrical and electronics manufacturing hub',
      why: ['my-penang', 'my-intel', 'my-infineon', 'my-micron'],
      sectors: ['Semiconductors', 'Manufacturing', 'Tourism'],
      employers: [
        { t: 'Electrical and electronics manufacturers', note: 'output up 12.7% (2025)', c: 'my-penang' },
        { name: 'Intel Malaysia', note: 'founded in Penang in 1972; manufacturing, design and shared services', c: 'my-intel' },
        { name: 'Infineon', note: 'Phase 2, Bayan Lepas Free Industrial Zone', c: 'my-infineon' },
        { name: 'Micron', note: 'Penang is a manufacturing location', c: 'my-micron' }
      ],
      demand: {
        it: ['present', 'my-intel'],
        business: 'gap', finance: 'gap', economics: 'gap', accounting: 'gap', management: 'gap', marketing: 'gap', logistics: 'gap', analytics: 'gap', software: 'gap', datasci: 'gap', ai: 'gap', cs: 'gap', bigdata: 'gap'
      },
      standing: [
        { f: 'it', s: [4, 2, 1], c: ['my-penang', 'my-intel'] }
      ],
      metrics: {
        pop: { v: 1800000, year: 2025, area: 'region', tag: 'data', src: 'https://www.dosm.gov.my/uploads/release-content/file_20250821151339.pdf', by: 'Department of Statistics Malaysia, Current Population Estimates, Malaysia, 2025 (the state or federal territory, published to the nearest 0.1 million)', seen: '2026-10-03' },
        gdp: { v: 130.3, cur: 'MYR', year: 2025, area: 'region', tag: 'data', src: 'https://www.dosm.gov.my/uploads/release-content/file_20260701120804.pdf', by: 'Department of Statistics Malaysia, GDP by State 2025 (1 Jul 2026; the state or federal territory)', seen: '2026-10-03' },
        wage: { v: 3500, cur: 'MYR', basis: 'median', year: 2025, area: 'region', tag: 'data', src: 'https://www.dosm.gov.my/portal-main/release-content/employee-wages-statistics-formal-sector-q42025', by: 'Department of Statistics Malaysia, Employee Wages Statistics (Formal Sector), Q4 2025: median monthly wage of formal employees, December 2025 (the state or federal territory)', seen: '2026-10-03' }
      },
      programmes: []
    },
    {
      id: 'johor-bahru', name: 'Johor Bahru', lat: 1.49, lon: 103.74,
      knownFor: 'The state across from Singapore, Malaysia’s data-centre and digital-economy hub',
      why: ['my-johor', 'my-mida'],
      sectors: ['Technology', 'Manufacturing', 'Logistics'],
      employers: [
        { t: 'Data-centre operators', c: 'my-johor' },
        { t: 'Global cloud and data-centre operators', note: 'AWS, Microsoft, Google and Bridge Data Centres among those named', c: 'my-mida' }
      ],
      demand: {
        it: ['strong', 'my-johor', 'my-mida'],
        business: 'gap', finance: 'gap', economics: 'gap', accounting: 'gap', management: 'gap', marketing: 'gap', logistics: 'gap', analytics: 'gap', software: 'gap', datasci: 'gap', ai: 'gap', cs: 'gap', bigdata: 'gap'
      },
      standing: [
        { f: 'it', s: [4, 2, 1], c: ['my-johor', 'my-mida'] }
      ],
      metrics: {
        pop: { v: 4200000, year: 2025, area: 'region', tag: 'data', src: 'https://www.dosm.gov.my/uploads/release-content/file_20250821151339.pdf', by: 'Department of Statistics Malaysia, Current Population Estimates, Malaysia, 2025 (the state or federal territory, published to the nearest 0.1 million)', seen: '2026-10-03' },
        gdp: { v: 171.0, cur: 'MYR', year: 2025, area: 'region', tag: 'data', src: 'https://www.dosm.gov.my/uploads/release-content/file_20260701120804.pdf', by: 'Department of Statistics Malaysia, GDP by State 2025 (1 Jul 2026; the state or federal territory)', seen: '2026-10-03' },
        wage: { v: 2982, cur: 'MYR', basis: 'median', year: 2025, area: 'region', tag: 'data', src: 'https://www.dosm.gov.my/portal-main/release-content/employee-wages-statistics-formal-sector-q42025', by: 'Department of Statistics Malaysia, Employee Wages Statistics (Formal Sector), Q4 2025: median monthly wage of formal employees, December 2025 (the state or federal territory)', seen: '2026-10-03' }
      },
      programmes: []
    }
  ],

  work: [
    { k: 'Employment Pass salary floor', c: ['my-ep'] },
    { k: 'Language', c: ['my-lang'] },
    { k: 'Recruiting calendar', c: ['my-cal'] },
    { k: 'Graduate labour market', c: ['my-glm'] },
    { k: 'Pay', c: ['my-wage'] },
    { k: 'Where demand is now', c: ['my-kl'] }
  ],

  advisory: ['my-fcdo'],

  briefs: [
    ['countries/my-malaysia.md', 'Country brief: hubs, employers, pay and standing']
  ],
  gaps: [
    'Malaysia was not covered by the research library before this record.',
    'Malaysia visas, Employment Pass salary tiers, EMGS student routes and entry rules are fully verified in visas_immigration/malaysia/malaysia_visas_immigration_guide.md.',
    'No source read gives Kuala Lumpur’s jobs by sector, so its finance rating rests on named banks’ head offices, not a statistic.',
    'Entry for EU passports, graduate pay, tax and language expectations were not researched.',
    'Penang’s IT rating rests on one employer’s design and shared-services functions: the statistics office describes its electronics manufacturing, not graduate hiring by role. Johor’s IT rating rests on data-centre growth, which creates more construction and operations jobs than graduate IT roles.'
  ],

  claims: {
    'my-ep': { t: 'From 1 June 2026 the lowest Employment Pass category needs a basic salary of at least RM5,000 a month (up from RM3,000) and lasts up to 5 years, with a succession plan; the higher categories start at RM10,000 and RM20,000.', tag: 'data', src: 'https://esd.imi.gov.my/portal/latest-news/announcement/announcement-266-ep-salary-policy-2026/', by: 'Expatriate Services Division (ESD) Announcement 266 (15 Jan 2026), on the Ministry of Home Affairs policy', seen: '2026-10-05' },
    'my-kl': { t: 'Kuala Lumpur’s economy grew 5.2% in 2025 to RM265.1 billion; as the capital it remained the second-largest contributor to Malaysia’s economy after Selangor, and services made up more than 90% of it, with finance, insurance, real estate and business services growing 5.3%.', tag: 'data', src: 'https://www.dosm.gov.my/uploads/release-content/file_20260701120804.pdf', by: 'Department of Statistics Malaysia, GDP by State 2025 (1 Jul 2026)', seen: '2026-10-03' },
    'my-lang': { t: 'English is the default language of private-sector and multinational recruiting in Malaysia, while Bahasa Malaysia is sometimes required for government, government-linked and some local or front-line roles.', tag: 'practitioner consensus', src: 'https://resumly.ai/ai-resume-builder-malaysia', by: 'Resumly, Malaysian resume norms (a resume-builder vendor page)', seen: '2026-10-08' },
    'my-cal': { t: 'Graduate windows are mixed rather than one national season: CIMB’s Complete Banker has intakes in April and October, its Protégé takes applications all year round, and the 2026 fairs ran on 25 and 26 July (myStarjob, Johor Bahru) and 1 August (TalentBank, Penang); industrial training placements usually last 3 to 6 months.', tag: 'employer-stated', src: 'https://gecc.um.edu.my/news/the-complete-banker-cimb-graduate-development-programme', by: 'University of Malaya career centre on CIMB Complete Banker; CIMB Protégé page; Invest Penang; The Star events; Malaysia.gov.my industrial training', seen: '2026-10-08' },
    'my-glm': { t: 'In 2024 graduate unemployment was 3.2% (165,900 people), down from 3.4%, with 5.14 million graduates in the labour force; about 67.8% of employed graduates were in skilled occupations, skill-related underemployment was 32.2%, and the median monthly salary was RM4,521.', tag: 'data', src: 'https://www.humanresourcesonline.net/number-of-graduates-in-malaysia-increases-to-5-98mn-in-2024-dosm', by: 'Department of Statistics Malaysia, Graduates Statistics 2024 (31 Oct 2025), as reported by Human Resources Online', seen: '2026-10-08' },
    'my-db': { t: 'Deutsche Bank (Malaysia) Berhad is a licensed commercial bank with its office on Jalan Sultan Ismail, Kuala Lumpur.', tag: 'data', src: 'https://www.bnm.gov.my/-/deutsche-bank-malaysia-berhad', by: 'Bank Negara Malaysia, Financial Sector Participants directory', seen: '2026-10-03' },
    'my-boa': { t: 'Bank of America Malaysia Berhad is a licensed commercial bank and principal dealer with its office in Menara Merdeka 118, Kuala Lumpur.', tag: 'data', src: 'https://www.bnm.gov.my/-/bank-of-america-malaysia-berhad', by: 'Bank Negara Malaysia, Financial Sector Participants directory', seen: '2026-10-03' },
    'my-fcdo': { t: 'The UK Foreign Office advises against all but essential travel to the islands and dive sites off eastern Sabah, from Sandakan to Tawau, because of the threat of kidnapping; this does not apply to mainland Sabah.', tag: 'data', src: 'https://www.gov.uk/foreign-travel-advice/malaysia', by: 'FCDO travel advice, Malaysia (updated 19 Mar 2026)', seen: '2026-10-03' },
    'my-penang': { t: 'Pulau Pinang’s economy grew 7.3% in 2025 to RM130.3 billion, led by electrical, electronic and optical products, up 12.7%; the statistics office calls it Malaysia’s leading electrical and electronics hub.', tag: 'data', src: 'https://www.dosm.gov.my/uploads/release-content/file_20260701120804.pdf', by: 'Department of Statistics Malaysia, GDP by State 2025 (1 Jul 2026)', seen: '2026-10-03' },
    'my-johor': { t: 'Johor grew fastest of all states in 2025, by 8.0% to RM171 billion, nearly 10% of Malaysia’s economy, driven by data centres; the statistics office calls it the nation’s digital economy hub.', tag: 'data', src: 'https://www.dosm.gov.my/uploads/release-content/file_20260701120804.pdf', by: 'Department of Statistics Malaysia, GDP by State 2025 (1 Jul 2026)', seen: '2026-10-03' },
    'my-gfci': { t: 'The Global Financial Centres Index 40 (September 2026) ranks Kuala Lumpur 39th in the world, up three places, and Labuan 44th.', tag: 'practitioner consensus', src: 'https://www.longfinance.net/media/documents/GFCI_40_Report_2026.09.16_v1.2.pdf', by: 'Z/Yen and Long Finance, Global Financial Centres Index 40 (September 2026), table 1', seen: '2026-10-03' },
    'my-gser-kl': { t: 'Startup Genome’s 2026 report puts Kuala Lumpur in the 31–40 range of its emerging ecosystems and 19th in Asia, after it slipped more than 15 places.', tag: 'practitioner consensus', src: 'https://startupgenome.com/ecosystems/kuala-lumpur', by: 'Startup Genome, Global Startup Ecosystem Report 2026, Kuala Lumpur page and emerging-ecosystems ranking', seen: '2026-10-03' },
    'my-cimb': { t: 'CIMB says it has grown from its headquarters in Kuala Lumpur to around 33,000 employees serving over 30 million customers across ASEAN and beyond.', tag: 'employer-stated', src: 'https://www.cimb.com/content/dam/cimb/group/documents/investor-relations/annual-reports/2025/cimb-iar2025.pdf', by: 'CIMB Group Holdings, Integrated Annual Report 2025', seen: '2026-10-03' },
    'my-wage': { t: 'In December 2025 the median monthly wage of formal-sector employees was RM3,167 across Malaysia: RM4,391 in Kuala Lumpur, RM3,500 in Pulau Pinang and RM2,982 in Johor.', tag: 'data', src: 'https://www.dosm.gov.my/portal-main/release-content/employee-wages-statistics-formal-sector-q42025', by: 'Department of Statistics Malaysia, Employee Wages Statistics (Formal Sector) Report, fourth quarter 2025', seen: '2026-10-03' },
    'my-intel': { t: 'Intel Malaysia was established in Penang in 1972 and, in the investment agency’s words, is Intel’s largest and most diverse site outside the United States, covering manufacturing, product design and development and global shared services.', tag: 'employer-stated', src: 'https://www.mida.gov.my/success-stories/intel-microelectronics/', by: 'Malaysian Investment Development Authority, success story: Intel Microelectronics (Malaysia)', seen: '2026-10-03' },
    'my-infineon': { t: 'Infineon says its Penang team is in the Phase 2 Bayan Lepas Free Industrial Zone and invites applications to its jobs there.', tag: 'employer-stated', src: 'https://www.infineon.com/careers/our-locations/penang', by: 'Infineon Technologies, careers: Infineon in Penang', seen: '2026-10-03' },
    'my-micron': { t: 'Micron lists Penang and Muar in Malaysia among its manufacturing locations.', tag: 'employer-stated', src: 'https://sg.micron.com/about/company/corporate-profile', by: 'Micron Technology, corporate profile', seen: '2026-10-03' },
    'my-mida': { t: 'Malaysia recorded RM385.7 billion of data-centre investment from 2021 to the first half of 2026; the investment authority names AWS, Microsoft, Google, Bridge Data Centres, DayOne, AirTrunk and Vantage Data Centres as operators present, particularly in Greater Kuala Lumpur and Johor.', tag: 'data', src: 'https://www.mida.gov.my/media-release/mida-charts-next-phase-for-malaysias-data-centre-sector-from-attracting-investment-to-building-value-for-smes-and-malaysians/', by: 'Malaysian Investment Development Authority, media release on the data-centre sector (2026)', seen: '2026-10-03' }
  }
});

if (window.I18N) I18N.add('it', {
  'A study destination with a hard step to work: students may only work in term breaks, in a short list of jobs, and a graduate needs an Employment Pass whose minimum basic salary rose to RM5,000 a month on 1 June 2026. Kuala Lumpur, the capital, is the second-largest contributor to the economy after Selangor.':
    'Una meta di studio con un passo difficile verso il lavoro: gli studenti possono lavorare solo nelle pause tra i semestri, in pochi tipi di impiego, e un laureato ha bisogno di un Employment Pass il cui stipendio base minimo è salito a 5.000 RM al mese il 1° giugno 2026. Kuala Lumpur, la capitale, è il secondo contributore all’economia dopo il Selangor.',
  'Banking and financial services': 'Banche e servizi finanziari', 'Electronics manufacturing': 'Produzione elettronica',
  'Oil, gas and petrochemicals': 'Petrolio, gas e petrolchimica', 'Trade and logistics': 'Commercio e logistica',
  'The capital and services economy, where foreign banks have their Malaysian head offices': 'La capitale e l’economia dei servizi, dove le banche estere hanno la sede malese',
  'Business services': 'Servizi alle imprese',
  'licensed commercial bank, head office in Kuala Lumpur': 'banca commerciale autorizzata, sede a Kuala Lumpur',
  'Employment Pass salary floor': 'Soglia salariale dell’Employment Pass',
  'Malaysia was not covered by the research library before this record.': 'La Malaysia non era coperta dalla biblioteca di ricerca prima di questa scheda.',
  'Malaysia visas, Employment Pass salary tiers, EMGS student routes and entry rules are fully verified in visas_immigration/malaysia/malaysia_visas_immigration_guide.md.':
    'I visti per la Malaysia, le categorie salariali dell’Employment Pass, le procedure per studenti EMGS e le regole d’ingresso sono interamente verificati in visas_immigration/malaysia/malaysia_visas_immigration_guide.md.',
  'No source read gives Kuala Lumpur’s jobs by sector, so its finance rating rests on named banks’ head offices, not a statistic.':
    'Nessuna fonte letta riporta i posti di lavoro di Kuala Lumpur per settore, quindi la valutazione della finanza si basa sulle sedi delle banche citate, non su una statistica.',
  'Entry for EU passports, graduate pay, tax and language expectations were not researched.':
    'L’ingresso con passaporto UE, gli stipendi dei neolaureati, le tasse e le aspettative linguistiche non sono stati ricercati.',

  'From 1 June 2026 the lowest Employment Pass category needs a basic salary of at least RM5,000 a month (up from RM3,000) and lasts up to 5 years, with a succession plan; the higher categories start at RM10,000 and RM20,000.':
    'Dal 1° giugno 2026 la categoria più bassa dell’Employment Pass richiede uno stipendio base di almeno 5.000 RM al mese (prima 3.000 RM) e dura fino a 5 anni, con un piano di successione; le categorie superiori partono da 10.000 RM e 20.000 RM.',
  'Kuala Lumpur’s economy grew 5.2% in 2025 to RM265.1 billion; as the capital it remained the second-largest contributor to Malaysia’s economy after Selangor, and services made up more than 90% of it, with finance, insurance, real estate and business services growing 5.3%.':
    'Nel 2025 l’economia di Kuala Lumpur è cresciuta del 5,2% a 265,1 miliardi di RM; come capitale è rimasta il secondo contributore all’economia malese dopo il Selangor, e i servizi ne costituivano oltre il 90%, con finanza, assicurazioni, immobiliare e servizi alle imprese in crescita del 5,3%.',
  'Deutsche Bank (Malaysia) Berhad is a licensed commercial bank with its office on Jalan Sultan Ismail, Kuala Lumpur.':
    'Deutsche Bank (Malaysia) Berhad è una banca commerciale autorizzata con sede in Jalan Sultan Ismail, a Kuala Lumpur.',
  'Bank of America Malaysia Berhad is a licensed commercial bank and principal dealer with its office in Menara Merdeka 118, Kuala Lumpur.':
    'Bank of America Malaysia Berhad è una banca commerciale autorizzata e principal dealer con sede nella Menara Merdeka 118, a Kuala Lumpur.',
  'The UK Foreign Office advises against all but essential travel to the islands and dive sites off eastern Sabah, from Sandakan to Tawau, because of the threat of kidnapping; this does not apply to mainland Sabah.':
    'Il Foreign Office britannico sconsiglia i viaggi non essenziali verso le isole e i siti di immersione al largo del Sabah orientale, da Sandakan a Tawau, per il rischio di rapimenti; ciò non vale per la terraferma del Sabah.',
  'Malaysia’s electrical and electronics manufacturing hub':
    'Il polo malese della produzione elettrica ed elettronica',
  'Electrical and electronics manufacturers':
    'I produttori elettrici ed elettronici',
  'output up 12.7% (2025)':
    'produzione +12,7% (2025)',
  'The state across from Singapore, Malaysia’s data-centre and digital-economy hub':
    'Lo stato di fronte a Singapore, polo malese dei data center e dell’economia digitale',
  'Data-centre operators':
    'Gli operatori di data center',
  'Pulau Pinang’s economy grew 7.3% in 2025 to RM130.3 billion, led by electrical, electronic and optical products, up 12.7%; the statistics office calls it Malaysia’s leading electrical and electronics hub.':
    'Nel 2025 l’economia di Pulau Pinang è cresciuta del 7,3% a 130,3 miliardi di RM, trainata da prodotti elettrici, elettronici e ottici, in crescita del 12,7%; l’istituto di statistica la definisce il principale polo elettrico ed elettronico della Malaysia.',
  'Johor grew fastest of all states in 2025, by 8.0% to RM171 billion, nearly 10% of Malaysia’s economy, driven by data centres; the statistics office calls it the nation’s digital economy hub.':
    'Nel 2025 il Johor è cresciuto più di tutti gli stati, dell’8,0% a 171 miliardi di RM, quasi il 10% dell’economia malese, trainato dai data center; l’istituto di statistica lo definisce il polo nazionale dell’economia digitale.',
  'Penang’s IT rating rests on one employer’s design and shared-services functions: the statistics office describes its electronics manufacturing, not graduate hiring by role. Johor’s IT rating rests on data-centre growth, which creates more construction and operations jobs than graduate IT roles.':
    'La valutazione IT di Penang si basa sulle funzioni di progettazione e servizi condivisi di un solo datore di lavoro: l’istituto di statistica ne descrive la manifattura elettronica, non le assunzioni di laureati per ruolo. La valutazione IT del Johor si basa sulla crescita dei data center, che crea più posti nelle costruzioni e nelle operazioni che ruoli IT per laureati.',

  'The Global Financial Centres Index 40 (September 2026) ranks Kuala Lumpur 39th in the world, up three places, and Labuan 44th.':
    'Il Global Financial Centres Index 40 (settembre 2026) colloca Kuala Lumpur al 39º posto nel mondo, in salita di tre posizioni, e Labuan al 44º.',
  'Startup Genome’s 2026 report puts Kuala Lumpur in the 31–40 range of its emerging ecosystems and 19th in Asia, after it slipped more than 15 places.':
    'Il rapporto 2026 di Startup Genome colloca Kuala Lumpur nella fascia 31–40 degli ecosistemi emergenti e al 19º posto in Asia, dopo un calo di oltre 15 posizioni.',
  'CIMB says it has grown from its headquarters in Kuala Lumpur to around 33,000 employees serving over 30 million customers across ASEAN and beyond.':
    'CIMB dichiara di essere cresciuta dalla sede di Kuala Lumpur fino a circa 33.000 dipendenti che servono oltre 30 milioni di clienti in tutta l’ASEAN e oltre.',
  'In December 2025 the median monthly wage of formal-sector employees was RM3,167 across Malaysia: RM4,391 in Kuala Lumpur, RM3,500 in Pulau Pinang and RM2,982 in Johor.':
    'A dicembre 2025 il salario mensile mediano dei dipendenti del settore formale era di 3.167 RM in tutta la Malaysia: 4.391 RM a Kuala Lumpur, 3.500 RM a Pulau Pinang e 2.982 RM a Johor.',
  'Intel Malaysia was established in Penang in 1972 and, in the investment agency’s words, is Intel’s largest and most diverse site outside the United States, covering manufacturing, product design and development and global shared services.':
    'Intel Malaysia è stata fondata a Penang nel 1972 e, secondo l’agenzia per gli investimenti, è il sito più grande e più vario di Intel fuori dagli Stati Uniti, con produzione, progettazione e sviluppo dei prodotti e servizi condivisi globali.',
  'Infineon says its Penang team is in the Phase 2 Bayan Lepas Free Industrial Zone and invites applications to its jobs there.':
    'Infineon indica che il suo team di Penang si trova nella Phase 2 della Bayan Lepas Free Industrial Zone e invita a candidarsi per i suoi posti lì.',
  'Micron lists Penang and Muar in Malaysia among its manufacturing locations.':
    'Micron elenca Penang e Muar, in Malaysia, tra le sue sedi di produzione.',
  'Malaysia recorded RM385.7 billion of data-centre investment from 2021 to the first half of 2026; the investment authority names AWS, Microsoft, Google, Bridge Data Centres, DayOne, AirTrunk and Vantage Data Centres as operators present, particularly in Greater Kuala Lumpur and Johor.':
    'La Malaysia ha registrato 385,7 miliardi di RM di investimenti in data center dal 2021 al primo semestre del 2026; l’autorità per gli investimenti cita AWS, Microsoft, Google, Bridge Data Centres, DayOne, AirTrunk e Vantage Data Centres come operatori presenti, in particolare nella Grande Kuala Lumpur e a Johor.',
  'Country brief: hubs, employers, pay and standing': 'Dossier paese: poli, datori di lavoro, stipendi e posizionamento',
  'Pay': 'Retribuzioni',
  'headquartered in Kuala Lumpur; around 33,000 employees': 'con sede a Kuala Lumpur; circa 33.000 dipendenti',
  'founded in Penang in 1972; manufacturing, design and shared services':
    'fondata a Penang nel 1972; produzione, progettazione e servizi condivisi',
  'Phase 2, Bayan Lepas Free Industrial Zone': 'Phase 2, Bayan Lepas Free Industrial Zone',
  'Penang is a manufacturing location': 'Penang è una sede di produzione',
  'Global cloud and data-centre operators': 'Operatori globali di cloud e data center',
  'AWS, Microsoft, Google and Bridge Data Centres among those named': 'tra quelli citati AWS, Microsoft, Google e Bridge Data Centres',
  'English is the default language of private-sector and multinational recruiting in Malaysia, while Bahasa Malaysia is sometimes required for government, government-linked and some local or front-line roles.':
    'L’inglese è la lingua abituale della selezione nel settore privato e nelle multinazionali in Malesia, mentre il bahasa malese è a volte richiesto per i ruoli governativi, legati allo Stato e in alcuni locali o a contatto con il pubblico.',
  'Graduate windows are mixed rather than one national season: CIMB’s Complete Banker has intakes in April and October, its Protégé takes applications all year round, and the 2026 fairs ran on 25 and 26 July (myStarjob, Johor Bahru) and 1 August (TalentBank, Penang); industrial training placements usually last 3 to 6 months.':
    'Le finestre per i laureati sono miste anziché una stagione nazionale unica: il Complete Banker di CIMB ha ingressi ad aprile e a ottobre, il suo Protégé accetta candidature tutto l’anno, e le fiere del 2026 si sono tenute il 25 e 26 luglio (myStarjob, Johor Bahru) e il 1° agosto (TalentBank, Penang); i tirocini di formazione industriale durano di solito da 3 a 6 mesi.',
  'In 2024 graduate unemployment was 3.2% (165,900 people), down from 3.4%, with 5.14 million graduates in the labour force; about 67.8% of employed graduates were in skilled occupations, skill-related underemployment was 32.2%, and the median monthly salary was RM4,521.':
    'Nel 2024 la disoccupazione dei laureati era del 3,2% (165.900 persone), in calo dal 3,4%, con 5,14 milioni di laureati nella forza lavoro; circa il 67,8% dei laureati occupati lavorava in professioni qualificate, il sottoimpiego legato alle competenze era del 32,2% e la retribuzione mensile mediana era di 4.521 RM.'
});
