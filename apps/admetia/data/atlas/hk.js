/* Atlas record: Hong Kong. Read 3 October 2026, deepened the same day; log P66
 * (research/verification/round-4g.md, round-5e.md). A territory with one hub. Outside Europe: routes for EU/EEA/Swiss
 * and UK passports only. The permit rules (IANG, Top Talent Pass) and the
 * HKUST survey are from research/places/beyond-europe.md §5; the
 * industry figures are from the Census and Statistics Department (PDF,
 * extracted locally). */

ATLAS.add({
  id: 'HK',
  checked: '2026-10-03',
  log: 'P66',
  summary: 'The easiest permit in Asia: a Hong Kong master’s gives 24 months to work with no job offer and no quota, and a recent top-100 graduate can get the same without studying there, while the quota lasts. Finance produces 26.2% of the economy. The catch is outcomes: most of HKUST’s master’s graduates leave, and the median pay of those employed is HK$25,000 a month.',
  sectors: ['Banking and financial services', 'Trading and logistics', 'Professional services', 'Tourism'],
  roles: ['finance', 'logistics'],
  hubs: [
    {
      id: 'hong-kong', name: 'Hong Kong', lat: 22.28, lon: 114.16,
      knownFor: 'Asia’s banking and capital-markets city, and a trading and logistics port',
      why: ['hk-fin', 'hk-log', 'hk-gfci', 'hk-hkex', 'hk-gser'],
      sectors: ['Banking', 'Insurance', 'Asset management', 'Trading and logistics'],
      employers: [
        { t: 'Financial-services employers', note: '265,000 jobs, 7.2% of employment (2024)', c: 'hk-fin' },
        { t: 'Banks', note: '96,100 jobs', c: 'hk-fin' },
        { name: 'Hong Kong Exchanges and Clearing', note: '2,686 listed companies and HK$285.8 billion raised in IPOs in 2025', c: 'hk-hkex' },
        { name: 'AIA', note: 'pan-Asian life insurer listed in Hong Kong, in 18 markets', c: 'hk-aia' },
        { name: 'Cathay Group', note: '36-month cargo and a digital and IT graduate trainee programme', c: 'hk-cx' },
        { t: 'Trading and logistics firms', note: '555,200 jobs', c: 'hk-log' }
      ],
      demand: {
        finance: ['dominant', 'hk-fin', 'hk-gfci'],
        logistics: ['strong', 'hk-log'],
        it: ['present', 'hk-cx'],
        business: 'gap', economics: 'gap', accounting: 'gap', management: 'gap', marketing: 'gap', analytics: 'gap', software: 'gap', datasci: 'gap', ai: 'gap', cs: 'gap', bigdata: 'gap'
      },
      finance: {
        banking: ['strong', 'hk-fin'],
        ib: 'gap', am: 'gap', pe: 'gap', vc: 'gap', corpfin: 'gap', risk: 'gap', finconsult: 'gap'
      },
      standing: [
        { f: 'finance', s: [5, 5, 4], c: ['hk-gfci', 'hk-fin', 'hk-hkex'] },
        { f: 'logistics', s: [5, 3, 2], c: ['hk-log'] }
      ],
      metrics: {
        pop: { v: 7527500, year: 2025, area: 'city', tag: 'data', src: 'https://www.info.gov.hk/gia/general/202508/14/P2025081400404.htm', by: 'Census and Statistics Department, mid-year population for 2025 (provisional estimate, mid-2025)', seen: '2026-10-03' },
        gdp: { v: 3112.2, cur: 'HKD', year: 2024, area: 'city', tag: 'data', src: 'https://www.censtatd.gov.hk/en/data/stat_report/product/FA100099/att/B72512FA2025XXXXB0100.pdf', by: 'Census and Statistics Department, Hong Kong Monthly Digest of Statistics, Dec 2025 (GDP 2024, HK$3,112,200 million)', seen: '2026-10-03' },
        wage: { v: 21200, cur: 'HKD', basis: 'median', year: 2025, area: 'city', tag: 'data', src: 'https://www.info.gov.hk/gia/general/202603/23/P2026032300370.htm', by: 'Census and Statistics Department, 2025 Annual Earnings and Hours Survey (median monthly wage of employees, May–June 2025)', seen: '2026-10-03' }
      },
      programmes: []
    }
  ],

  work: [
    { k: 'Language', c: ['hk-lang'] },
    { k: 'Recruiting calendar', c: ['hk-calendar'] },
    { k: 'Where demand is now', c: ['hk-fin', 'hk-cx', 'hk-jijis-vac'] },
    { k: 'Graduate labour market', c: ['hk-hkust', 'hk-hku'] },
    { k: 'Pay across the economy', c: ['hk-wage'] }
  ],

  briefs: [
    ['places/beyond-europe.md', '§5 Hong Kong: IANG, the Top Talent Pass, HKUST outcomes and fees'],
    ['countries/hk-hong-kong.md', 'Country brief: hub, employers, pay and standing']
  ],
  gaps: [
    'Whether front-office finance jobs require Mandarin or Cantonese was not verified from a primary source.',
    'The annual quota for the Top Talent Pass graduate category is not stated on the page read.',
    'Demand in technology (beyond Cathay’s trainee track), data and AI roles is not rated; tax was not researched.',
    'No Hong Kong rent figure could be read: no citable rent source was available, and no official rent series was found for a one-bedroom flat.',
    'The number of licensed financial staff (SFC) was seen only in a trade-press summary and is not used; HSBC, Standard Chartered, Hang Seng Bank and BOCHK pages were not readable.',
    'The part-time work exemption for students is a temporary measure: check that it still applies before relying on it.'
  ],

  claims: {
    'hk-hkust': { t: 'Of 2,452 HKUST MSc and MA respondents in 2025, 65.5% had left Hong Kong or returned home; 93.3% of those employed with a known base were in Hong Kong, at a median HK$25,000 a month (HK$30,000 in banking and finance).', tag: 'data', src: 'research/places/beyond-europe.md', by: 'HKUST Graduate Employment Survey 2025, taught postgraduates, via places/beyond-europe.md §5.2', seen: '2026-10-01' },
    'hk-lang': { t: 'Appointment to the Hong Kong civil-service administrative and executive grades needs Level 2 in both the Use of Chinese and the Use of English papers of the Common Recruitment Examination, or an accepted equivalent.', tag: 'data', src: 'https://www.info.gov.hk/gia/general/202609/10/P2026090900437.htm', by: 'Hong Kong Government press release, 10 September 2026, on the 2026-27 joint recruitment exercise', seen: '2026-10-08' },
    'hk-calendar': { t: 'JPMorgan’s 2027 summer analyst deadlines in Hong Kong were 31 August 2026 (asset and wealth management, commercial and investment bank) and 30 September 2026 (corporate functions); HSBC’s 2027 summer internship and graduate programmes close on 31 October 2026; the civil-service joint recruitment ran from 12 September to 2 October 2026.', tag: 'employer-stated', src: 'https://www.cb.cityu.edu.hk/careerdevelopment/news/events/eventDetails/?id=40125', by: 'City University of Hong Kong career notice on JPMorgan; Hang Seng University career notice on HSBC; Hong Kong Government press release of 10 September 2026', seen: '2026-10-08' },
    'hk-jijis-vac': { t: 'The eight public universities’ job system (JIJIS) listed 30,798 graduate vacancies in 2025, down 55% from 68,728 in 2024 and the lowest in five years; management-trainee posts fell 25% and average new-hire pay was HK$20,961 a month, up 0.5%.', tag: 'data', src: 'https://www.youngpostclub.com/yp/news/hong-kong/education/article/3342452/hong-kong-graduates-face-gloomiest-job-outlook-5-years-new-hires-plunge-55', by: 'South China Morning Post, 5 February 2026, via Young Post', seen: '2026-10-08' },
    'hk-hku': { t: 'HKU’s 2025 survey of its UGC-funded bachelor’s graduates found 69.3% employed, 27.8% in further studies and 0.8% unemployed, at a median monthly salary of HK$26,000; the employment rate among those employed or unemployed was 98.9%.', tag: 'data', src: 'https://www.cedars.hku.hk/careers/graduate-employment-survey', by: 'HKU Careers and Placement Section, Graduate Employment Survey 2025', seen: '2026-10-08' },
    'hk-fin': { t: 'Financial services produced 26.2% of Hong Kong’s GDP in 2024 and employed 265,000 people, 7.2% of all employment; banking alone produced 18.9% of GDP with 96,100 staff.', tag: 'data', src: 'https://www.censtatd.gov.hk/en/data/stat_report/product/FA100099/att/B72512FA2025XXXXB0100.pdf', by: 'Census and Statistics Department, The Four Key Industries in the Hong Kong Economy (Monthly Digest, Dec 2025)', seen: '2026-10-03' },
    'hk-log': { t: 'Trading and logistics employed 555,200 people in 2024, 15.0% of all employment, of whom 170,700 worked in logistics.', tag: 'data', src: 'https://www.censtatd.gov.hk/en/data/stat_report/product/FA100099/att/B72512FA2025XXXXB0100.pdf', by: 'Census and Statistics Department, The Four Key Industries in the Hong Kong Economy (Monthly Digest, Dec 2025)', seen: '2026-10-03' },
    'hk-gfci': { t: 'The Global Financial Centres Index 40 (September 2026) ranks Hong Kong third in the world (rating 756, one point behind London) and first in Asia/Pacific, and first in the world for fintech.', tag: 'practitioner consensus', src: 'https://www.longfinance.net/media/documents/GFCI_40_Report_2026.09.16_v1.2.pdf', by: 'Z/Yen and Long Finance, Global Financial Centres Index 40 (September 2026), tables 1 and 9, fintech summary', seen: '2026-10-03' },
    'hk-hkex': { t: 'The Hong Kong stock exchange had 2,686 listed companies and an equity market capitalisation of HK$47,392.5 billion at the end of 2025; 119 companies listed in the year and IPO funds raised were HK$285.8 billion.', tag: 'data', src: 'https://www.hkex.com.hk/-/media/HKEX-Market/Market-Data/Statistics/Consolidated-Reports/Annual-Market-Statistics/2025FY-Annual-Market-Stat_Eng.pdf', by: 'Hong Kong Exchanges and Clearing, Market Statistics 2025', seen: '2026-10-03' },
    'hk-gser': { t: 'Startup Genome ranked Hong Kong 27th among global start-up ecosystems in 2025, the biggest rise in the top 40 that year; it is not named in the 2026 key findings.', tag: 'practitioner consensus', src: 'https://startupgenome.com/report/the-global-startup-ecosystem-report-2025/global-startup-ecosystem-ranking-2025-top-40', by: 'Startup Genome, Global Startup Ecosystem Report 2025, Top 40 key findings', seen: '2026-10-03' },
    'hk-aia': { t: 'AIA describes itself as the largest independent publicly listed pan-Asian life insurance group, present in 18 markets with total assets of US$345 billion at the end of 2025; its shares are listed on the Hong Kong stock exchange (code 1299).', tag: 'employer-stated', src: 'https://www.aia.com/content/dam/group-wise/en/docs/investor-relations/2025/AIA%202025%20annual%20report_EN.pdf', by: 'AIA Group, Annual Report 2025', seen: '2026-10-03' },
    'hk-cx': { t: 'Cathay Pacific’s graduate trainee schemes include a 36-month Cathay Cargo programme (a fleet of 20 freighters serving 46 destinations) and a Digital and IT track in Hong Kong and the Greater Bay Area, with engineering and legal tracks also listed.', tag: 'employer-stated', src: 'https://careers.cathaypacific.com/en/careers/our-teams/early-careers-students-and-graduates/graduate-trainee', by: 'Cathay Pacific careers, Graduate Trainee pages', seen: '2026-10-03' },
    'hk-wage': { t: 'The median monthly wage of Hong Kong employees was HK$21,200 in May–June 2025, 3.5% above 2024; the 25th and 75th percentiles were HK$15,300 and HK$33,000 and the 90th HK$51,300.', tag: 'data', src: 'https://www.info.gov.hk/gia/general/202603/23/P2026032300370.htm', by: 'Census and Statistics Department, 2025 Annual Earnings and Hours Survey, released 23 Mar 2026', seen: '2026-10-03' }
  }
});

if (window.I18N) I18N.add('it', {
  'Appointment to the Hong Kong civil-service administrative and executive grades needs Level 2 in both the Use of Chinese and the Use of English papers of the Common Recruitment Examination, or an accepted equivalent.':
    'La nomina nei gradi amministrativi ed esecutivi del servizio civile di Hong Kong richiede il livello 2 in entrambe le prove di uso del cinese e di uso dell’inglese del Common Recruitment Examination, o un equivalente accettato.',
  'JPMorgan’s 2027 summer analyst deadlines in Hong Kong were 31 August 2026 (asset and wealth management, commercial and investment bank) and 30 September 2026 (corporate functions); HSBC’s 2027 summer internship and graduate programmes close on 31 October 2026; the civil-service joint recruitment ran from 12 September to 2 October 2026.':
    'Le scadenze 2027 di JPMorgan per analisti estivi a Hong Kong erano il 31 agosto 2026 (gestione patrimoniale, commercial e investment bank) e il 30 settembre 2026 (funzioni aziendali); gli stage estivi e i programmi per laureati 2027 di HSBC chiudono il 31 ottobre 2026; la selezione congiunta per il servizio civile è andata dal 12 settembre al 2 ottobre 2026.',
  'The eight public universities’ job system (JIJIS) listed 30,798 graduate vacancies in 2025, down 55% from 68,728 in 2024 and the lowest in five years; management-trainee posts fell 25% and average new-hire pay was HK$20,961 a month, up 0.5%.':
    'Il sistema di lavoro delle otto università pubbliche (JIJIS) ha elencato 30.798 posti per laureati nel 2025, il 55% in meno dei 68.728 del 2024 e il dato più basso in cinque anni; i posti da management trainee sono calati del 25% e la retribuzione media dei neoassunti era di 20.961 HK$ al mese, in aumento dello 0,5%.',
  'HKU’s 2025 survey of its UGC-funded bachelor’s graduates found 69.3% employed, 27.8% in further studies and 0.8% unemployed, at a median monthly salary of HK$26,000; the employment rate among those employed or unemployed was 98.9%.':
    'L’indagine 2025 dell’HKU sui suoi laureati di primo livello finanziati dall’UGC ha trovato il 69,3% occupato, il 27,8% in studi ulteriori e lo 0,8% disoccupato, con uno stipendio mensile mediano di 26.000 HK$; il tasso di occupazione tra gli occupati o i disoccupati era del 98,9%.',
  'The easiest permit in Asia: a Hong Kong master’s gives 24 months to work with no job offer and no quota, and a recent top-100 graduate can get the same without studying there, while the quota lasts. Finance produces 26.2% of the economy. The catch is outcomes: most of HKUST’s master’s graduates leave, and the median pay of those employed is HK$25,000 a month.':
    'Il permesso più facile dell’Asia: un master a Hong Kong dà 24 mesi per lavorare senza offerta di lavoro e senza quote, e un neolaureato di un’università tra le prime 100 può ottenere lo stesso senza studiarci, finché la quota lo consente. La finanza produce il 26,2% dell’economia. Il problema sono gli esiti: la maggior parte dei laureati magistrali di HKUST se ne va, e lo stipendio mediano di chi lavora è di 25.000 HK$ al mese.',
  'Banking and financial services': 'Banche e servizi finanziari', 'Trading and logistics': 'Commercio e logistica',
  'Asia’s banking and capital-markets city, and a trading and logistics port': 'La città asiatica delle banche e dei mercati dei capitali, e un porto del commercio e della logistica',
  'Banking': 'Banca', 'Asset management': 'Asset management',
  'Financial-services employers': 'I datori di lavoro dei servizi finanziari', '265,000 jobs, 7.2% of employment (2024)': '265.000 posti, il 7,2% dell’occupazione (2024)',
  'Banks': 'Le banche', '96,100 jobs': '96.100 posti',
  'Trading and logistics firms': 'Le aziende del commercio e della logistica', '555,200 jobs': '555.200 posti',
  '§5 Hong Kong: IANG, the Top Talent Pass, HKUST outcomes and fees': '§5 Hong Kong: IANG, il Top Talent Pass, gli esiti di HKUST e le tasse universitarie',
  'Whether front-office finance jobs require Mandarin or Cantonese was not verified from a primary source.':
    'Non è stato verificato su una fonte primaria se i ruoli di front office in finanza richiedano il mandarino o il cantonese.',
  'The annual quota for the Top Talent Pass graduate category is not stated on the page read.':
    'La quota annuale della categoria per neolaureati del Top Talent Pass non è indicata nella pagina letta.',
  'The part-time work exemption for students is a temporary measure: check that it still applies before relying on it.':
    'L’esenzione per il lavoro part-time degli studenti è una misura temporanea: verifica che sia ancora in vigore prima di farci affidamento.',

  'Of 2,452 HKUST MSc and MA respondents in 2025, 65.5% had left Hong Kong or returned home; 93.3% of those employed with a known base were in Hong Kong, at a median HK$25,000 a month (HK$30,000 in banking and finance).':
    'Dei 2.452 rispondenti MSc e MA di HKUST nel 2025, il 65,5% aveva lasciato Hong Kong o era tornato a casa; il 93,3% degli occupati con sede nota lavorava a Hong Kong, con una mediana di 25.000 HK$ al mese (30.000 HK$ in banca e finanza).',
  'Financial services produced 26.2% of Hong Kong’s GDP in 2024 and employed 265,000 people, 7.2% of all employment; banking alone produced 18.9% of GDP with 96,100 staff.':
    'Nel 2024 i servizi finanziari hanno prodotto il 26,2% del PIL di Hong Kong e impiegato 265.000 persone, il 7,2% dell’occupazione totale; le sole banche hanno prodotto il 18,9% del PIL con 96.100 addetti.',
  'Trading and logistics employed 555,200 people in 2024, 15.0% of all employment, of whom 170,700 worked in logistics.':
    'Nel 2024 commercio e logistica impiegavano 555.200 persone, il 15,0% dell’occupazione totale, di cui 170.700 nella logistica.',

  'Pay across the economy': 'Retribuzioni nell’economia',
  '2,686 listed companies and HK$285.8 billion raised in IPOs in 2025':
    '2.686 società quotate e 285,8 miliardi di HK$ raccolti con le IPO nel 2025',
  'pan-Asian life insurer listed in Hong Kong, in 18 markets': 'assicuratore vita panasiatico quotato a Hong Kong, presente in 18 mercati',
  '36-month cargo and a digital and IT graduate trainee programme':
    'programma per neolaureati di 36 mesi nel cargo e percorso digitale e IT',
  'Country brief: hub, employers, pay and standing': 'Dossier paese: polo, datori di lavoro, stipendi e posizionamento',
  'Demand in technology (beyond Cathay’s trainee track), data and AI roles is not rated; tax was not researched.':
    'La domanda nei ruoli di tecnologia (oltre al percorso per neolaureati di Cathay), dati e IA non è valutata; le tasse non sono state ricercate.',
  'No Hong Kong rent figure could be read: no citable rent source was available, and no official rent series was found for a one-bedroom flat.':
    'Non è stato possibile leggere alcun dato sugli affitti di Hong Kong: Numbeo ha rifiutato richieste ripetute e non è stata trovata una serie ufficiale sugli affitti dei bilocali.',
  'The number of licensed financial staff (SFC) was seen only in a trade-press summary and is not used; HSBC, Standard Chartered, Hang Seng Bank and BOCHK pages were not readable.':
    'Il numero di addetti finanziari autorizzati (SFC) è stato visto solo in un riepilogo della stampa di settore e non è usato; le pagine di HSBC, Standard Chartered, Hang Seng Bank e BOCHK non erano leggibili.',
  'The Global Financial Centres Index 40 (September 2026) ranks Hong Kong third in the world (rating 756, one point behind London) and first in Asia/Pacific, and first in the world for fintech.':
    'Il Global Financial Centres Index 40 (settembre 2026) colloca Hong Kong al terzo posto nel mondo (valutazione 756, un punto dietro Londra) e al primo in Asia/Pacifico, e al primo nel mondo per il fintech.',
  'The Hong Kong stock exchange had 2,686 listed companies and an equity market capitalisation of HK$47,392.5 billion at the end of 2025; 119 companies listed in the year and IPO funds raised were HK$285.8 billion.':
    'La borsa di Hong Kong contava 2.686 società quotate e una capitalizzazione azionaria di 47.392,5 miliardi di HK$ a fine 2025; nell’anno si sono quotate 119 società e le IPO hanno raccolto 285,8 miliardi di HK$.',
  'Startup Genome ranked Hong Kong 27th among global start-up ecosystems in 2025, the biggest rise in the top 40 that year; it is not named in the 2026 key findings.':
    'Startup Genome ha collocato Hong Kong al 27° posto tra gli ecosistemi di start-up del mondo nel 2025, il maggior balzo della top 40 di quell’anno; non è citata nei risultati principali del 2026.',
  'AIA describes itself as the largest independent publicly listed pan-Asian life insurance group, present in 18 markets with total assets of US$345 billion at the end of 2025; its shares are listed on the Hong Kong stock exchange (code 1299).':
    'AIA si definisce il maggiore gruppo assicurativo vita panasiatico indipendente quotato, presente in 18 mercati con attivi totali per 345 miliardi di US$ a fine 2025; le sue azioni sono quotate alla borsa di Hong Kong (codice 1299).',
  'Cathay Pacific’s graduate trainee schemes include a 36-month Cathay Cargo programme (a fleet of 20 freighters serving 46 destinations) and a Digital and IT track in Hong Kong and the Greater Bay Area, with engineering and legal tracks also listed.':
    'I programmi per neolaureati di Cathay Pacific comprendono un percorso di 36 mesi nel cargo (una flotta di 20 cargo verso 46 destinazioni) e un percorso digitale e IT a Hong Kong e nella Greater Bay Area; sono elencati anche percorsi di ingegneria e legale.',
  'The median monthly wage of Hong Kong employees was HK$21,200 in May–June 2025, 3.5% above 2024; the 25th and 75th percentiles were HK$15,300 and HK$33,000 and the 90th HK$51,300.':
    'Lo stipendio mensile mediano dei dipendenti di Hong Kong era di 21.200 HK$ in maggio-giugno 2025, il 3,5% in più rispetto al 2024; il 25° e il 75° percentile erano 15.300 e 33.000 HK$ e il 90° 51.300 HK$.'
});
