/* Atlas record: New Zealand. Read 3 October 2026; log P63
 * (research/verification/round-4g.md). Outside Europe: routes for EU/EEA/Swiss
 * and UK passports only. New Zealand had no coverage in the research library;
 * everything here was read in this round. The Auckland figures are from the
 * Auckland Economic Monitor (July 2025, PDF extracted locally) and its web
 * edition.
 * Hubs for further cities were added on 3 October 2026 from city-level statistics
 * (log: research/verification/round-4k.md).
 * Deepened on 3 October 2026 (research/verification/round-5f.md; brief research/countries/nz-new-zealand.md): standing and metrics on every hub, more employers and claims. Rent is left out: Numbeo refused access (HTTP 429). */

ATLAS.add({
  id: 'NZ',
  checked: '2026-10-03',
  log: 'P63',
  summary: 'A small market with a generous permit: a degree studied full-time in New Zealand for at least 30 weeks can lead to a post-study work visa of up to three years. Auckland is the commercial centre, producing 37% of the country’s output in finance and insurance from its city centre alone.',
  sectors: ['Banking and insurance', 'Technology', 'Tourism', 'Agriculture and food', 'Public sector'],
  roles: ['finance', 'it'],
  hubs: [
    {
      id: 'auckland', name: 'Auckland', lat: -36.85, lon: 174.76,
      knownFor: 'New Zealand’s commercial hub: finance, insurance and tech',
      why: ['nz-akl', 'nz-akljobs', 'nz-gser-akl', 'nz-anz'],
      sectors: ['Banking and insurance', 'Technology', 'Media and telecoms', 'Professional services'],
      employers: [
        { t: 'Financial and insurance-services employers', note: '42,200 jobs in Auckland (2024)', c: 'nz-akljobs' },
        { t: 'Tech firms in and around the city centre', note: 'nearly 40 of the country’s top 200', c: 'nz-akl' },
        { name: 'ANZ New Zealand', note: 'principal place of business on Albert Street', c: 'nz-anz' },
        { name: 'Fisher & Paykel Healthcare', note: 'over 7,500 staff worldwide, with an Auckland address', c: 'nz-fph' }
      ],
      demand: {
        finance: ['dominant', 'nz-akl', 'nz-akljobs', 'nz-anz'],
        it: ['strong', 'nz-akl'],
        business: 'gap', economics: 'gap', accounting: 'gap', management: 'gap', marketing: 'gap', logistics: 'gap', analytics: 'gap', software: 'gap', datasci: 'gap', ai: 'gap', cs: 'gap', bigdata: 'gap'
      },
      finance: {
        banking: ['present', 'nz-anz'],
        ib: 'gap', am: 'gap', pe: 'gap', vc: 'gap', corpfin: 'gap', risk: 'gap', finconsult: 'gap'
      },
      standing: [
        { f: 'finance', s: [5, 2, 1], c: ['nz-akl', 'nz-akljobs'] },
        { f: 'it', s: [5, 2, 1], c: ['nz-akl', 'nz-gser-akl'] }
      ],
      metrics: {
        pop: { v: 1816000, year: 2025, area: 'city', tag: 'data', src: 'https://www.stats.govt.nz/information-releases/subnational-population-estimates-at-30-june-2025/', by: 'Stats NZ, Subnational population estimates at 30 June 2025 (provisional; Auckland, Wellington city and Christchurch city territorial authorities)', seen: '2026-10-03' },
        gdp: { v: 161.8, cur: 'NZD', year: 2025, area: 'region', tag: 'data', src: 'https://www.stats.govt.nz/information-releases/regional-gross-domestic-product-year-ended-march-2025/', by: 'Stats NZ, Regional gross domestic product, year ended March 2025 (provisional, current prices; the region: Auckland, Wellington, Canterbury)', seen: '2026-10-03' }
      },
      programmes: []
    },
    {
      id: 'wellington', name: 'Wellington', lat: -41.29, lon: 174.78,
      knownFor: 'The capital, for government, professional services and finance',
      why: ['nz-wellington', 'nz-psc', 'nz-xero', 'nz-gser-wel'],
      sectors: ['Government', 'Professional services', 'Banking'],
      employers: [
        { t: 'Government and professional-services employers', note: '42.6% of the Public Service workforce (2025)', c: 'nz-psc' },
        { name: 'Xero', note: 'registered address on Taranaki Street', c: 'nz-xero' }
      ],
      demand: {
        it: ['present', 'nz-xero'],
        software: ['present', 'nz-xero'],
        business: 'gap', finance: 'gap', economics: 'gap', accounting: 'gap', management: 'gap', marketing: 'gap', logistics: 'gap', analytics: 'gap', datasci: 'gap', ai: 'gap', cs: 'gap', bigdata: 'gap'
      },
      standing: [
        { f: 'management', s: [5, 2, 1], c: ['nz-psc'] },
        { f: 'software', s: [4, 2, 1], c: ['nz-xero', 'nz-gser-wel'] },
        { f: 'finance', s: [3, 2, 1], c: ['nz-wellington'] }
      ],
      metrics: {
        pop: { v: 210800, year: 2025, area: 'city', tag: 'data', src: 'https://www.stats.govt.nz/information-releases/subnational-population-estimates-at-30-june-2025/', by: 'Stats NZ, Subnational population estimates at 30 June 2025 (provisional; Auckland, Wellington city and Christchurch city territorial authorities)', seen: '2026-10-03' },
        gdp: { v: 51.3, cur: 'NZD', year: 2025, area: 'region', tag: 'data', src: 'https://www.stats.govt.nz/information-releases/regional-gross-domestic-product-year-ended-march-2025/', by: 'Stats NZ, Regional gross domestic product, year ended March 2025 (provisional, current prices; the region: Auckland, Wellington, Canterbury)', seen: '2026-10-03' }
      },
      programmes: []
    },
    {
      id: 'christchurch', name: 'Christchurch', lat: -43.53, lon: 172.64,
      knownFor: 'The South Island’s main city and Canterbury’s centre',
      why: ['nz-christchurch', 'nz-chch-tech'],
      sectors: ['Manufacturing', 'Agriculture and food', 'Technology'],
      employers: [
        { t: 'Manufacturers in Canterbury', note: '40,000 jobs', c: 'nz-christchurch' },
        { t: 'Tech employers, among them Tait Communications and Seequent', note: 'over 15,000 tech jobs', c: 'nz-chch-tech' }
      ],
      demand: {
        it: ['present', 'nz-chch-tech'],
        business: 'gap', finance: 'gap', economics: 'gap', accounting: 'gap', management: 'gap', marketing: 'gap', logistics: 'gap', analytics: 'gap', software: 'gap', datasci: 'gap', ai: 'gap', cs: 'gap', bigdata: 'gap'
      },
      standing: [
        { f: 'it', s: [4, 2, 1], c: ['nz-chch-tech'] }
      ],
      metrics: {
        pop: { v: 419200, year: 2025, area: 'city', tag: 'data', src: 'https://www.stats.govt.nz/information-releases/subnational-population-estimates-at-30-june-2025/', by: 'Stats NZ, Subnational population estimates at 30 June 2025 (provisional; Auckland, Wellington city and Christchurch city territorial authorities)', seen: '2026-10-03' },
        gdp: { v: 55.5, cur: 'NZD', year: 2025, area: 'region', tag: 'data', src: 'https://www.stats.govt.nz/information-releases/regional-gross-domestic-product-year-ended-march-2025/', by: 'Stats NZ, Regional gross domestic product, year ended March 2025 (provisional, current prices; the region: Auckland, Wellington, Canterbury)', seen: '2026-10-03' }
      },
      programmes: []
    }
  ],

  work: [
    { k: 'Tax and net pay', c: ['nz-tax'] },
    { k: 'Where demand is now', c: ['nz-akljobs'] },
    { k: 'Language', c: ['nz-lang'] },
    { k: 'Recruiting calendar', c: ['nz-cal'] },
    { k: 'Graduate labour market', c: ['nz-glm'] }
  ],

  briefs: [
    ['countries/nz-new-zealand.md', 'Country brief: hubs, employers, pay and standing']
  ],
  gaps: [
    'New Zealand was not covered by the research library before this record.',
    'No source read gives graduate outcomes or entry pay for international master’s graduates in New Zealand.',
    'How long the post-study work visa lasts for each kind of master’s is not set out on the page read.',
    'Wellington’s finance and Christchurch’s business roles are not rated: the sources read rank industries by output, not graduate jobs by role, and the Wellington report dates from 2020; Kiwibank, the Reserve Bank and Air New Zealand were not read.',
    'No regional pay was found: Stats NZ publishes earnings by region only through its data explorer, which could not be read, so the pay metric is left out; rent is left out because no citable rent source was available and the official rental-bond data are by area unit, not one-bedroom flats by city.',
    'The Public Service share of Wellington (42.6%) is a share of the workforce, not a headcount; its standing as management is a judgement (public administration read as management).'
  ],

  claims: {
    'nz-tax': { t: 'Income tax runs from 10.5% on the first NZ$15,600 through 17.5%, 30% and 33% to 39% on income over NZ$180,000 (rates from 1 April 2025).', tag: 'data', src: 'https://www.ird.govt.nz/income-tax/income-tax-for-individuals/tax-codes-and-tax-rates-for-individuals/tax-rates-for-individuals', by: 'Inland Revenue, tax rates for individuals (updated 3 Jun 2025)', seen: '2026-10-03' },
    'nz-akl': { t: 'Auckland’s city centre, the country’s commercial hub, produces 37% of New Zealand’s GDP in financial and insurance services and 28% in information media and telecommunications; nearly 40 of the country’s top 200 tech firms are in or around it.', tag: 'data', src: 'https://knowledgeauckland.org.nz/media/qz3kpdbq/auckland-economic-monitor-pwc-economic-dev-office-july-2025.pdf', by: 'Auckland Economic Monitor, July 2025 (Auckland Council economic development office with PwC)', seen: '2026-10-03' },
    'nz-akljobs': { t: 'Auckland employs 34% of New Zealand’s workers (early 2025); financial and insurance services employed 42,200 people there in 2024, up from 40,900.', tag: 'data', src: 'https://www.aucklandeconomicmonitor.com/the-labour-market', by: 'Auckland Economic Monitor, the labour market', seen: '2026-10-03' },
    'nz-wellington': { t: 'A Wellington regional-council report lists the region’s five largest industries by GDP as professional, scientific and technical services, public administration and safety, financial and insurance services, health care, and information media and telecommunications.', tag: 'data', src: 'https://wrlc.org.nz/assets/Documents/Documents/2025/09/WRGF-Employment-Analysis-Report-0.6-1.pdf', by: 'Wellington Regional Growth Framework, Employment Analysis (October 2020)', seen: '2026-10-03' },
    'nz-christchurch': { t: 'Canterbury is New Zealand’s second-largest manufacturing region, with 14% of the country’s manufacturing GDP; manufacturing employs 40,000 people there, about 10% of the region’s jobs.', tag: 'data', src: 'https://www.christchurchnz.com/about/news/canterbury-s-twin-engines-of-resilience', by: 'ChristchurchNZ (the city’s economic development agency), 16 Apr 2025', seen: '2026-10-03' },
    'nz-gser-akl': { t: 'Startup Genome’s 2026 report puts Auckland in the 31–40 range of its emerging ecosystems, the biggest climb in that top 40 (more than 75 places).', tag: 'practitioner consensus', src: 'https://startupgenome.com/report/the-global-startup-ecosystem-report-2026/emerging-ecosystems-ranking-2026-top-100', by: 'Startup Genome, Global Startup Ecosystem Report 2026, Emerging Ecosystems Ranking (top 100)', seen: '2026-10-03' },
    'nz-gser-wel': { t: 'Startup Genome’s 2026 page for Wellington gives no rank; it puts the ecosystem’s value at $2 billion, against a regional average of $5.6 billion, and total early-stage funding at $87 million, against a regional average of $202 million.', tag: 'practitioner consensus', src: 'https://startupgenome.com/ecosystems/wellington', by: 'Startup Genome, Global Startup Ecosystem Report 2026, Wellington page', seen: '2026-10-03' },
    'nz-anz': { t: 'ANZ’s New Zealand holding company has its registered office and principal place of business at ANZ Centre, 23–29 Albert Street, Auckland.', tag: 'employer-stated', src: 'https://www.anz.com/content/dam/anzcom/debtinvestors/anzh-group-fs-sep25.pdf', by: 'ANZ Holdings (New Zealand) Limited, financial statements for the year ended 30 September 2025', seen: '2026-10-03' },
    'nz-fph': { t: 'Fisher & Paykel Healthcare, founded in New Zealand in 1969, gives an Auckland address and says it employs over 7,500 people around the world, more than 950 of them in research and development.', tag: 'employer-stated', src: 'https://resources.fphcare.com/content/fph-investor-fact-sheet-2026.pdf', by: 'Fisher & Paykel Healthcare, investor fact sheet 2026', seen: '2026-10-03' },
    'nz-xero': { t: 'Xero’s registered address is 19–23 Taranaki Street, Te Aro, Wellington.', tag: 'employer-stated', src: 'https://announcements.asx.com.au/asxpdf/20260514/pdf/06zkqxbympw940.pdf', by: 'Xero Limited, Appendix 4E and annual report 2026 (ASX, 14 May 2026)', seen: '2026-10-03' },
    'nz-psc': { t: 'At 30 June 2025, 42.6% of the Public Service workforce was in the Wellington region, 21.3% in Auckland and 10.3% in Canterbury.', tag: 'data', src: 'https://www.publicservice.govt.nz/data/workforce-data/public-sector-composition/regional-workforce', by: 'Public Service Commission Te Kawa Mataaho, workforce data: regional workforce', seen: '2026-10-03' },
    'nz-lang': { t: 'Graduate recruitment in New Zealand runs in English: Deloitte’s stages are a cover letter, a one-way video interview and a face-to-face interview, and an accredited employer work visa for skill levels 3 to 5 requires proof of English.', tag: 'employer-stated', src: 'https://www.deloitte.com/nz/en/careers/students/frequently-asked-questions.html', by: 'Deloitte New Zealand, early careers FAQ; Immigration New Zealand, accredited employer work visa', seen: '2026-10-08' },
    'nz-cal': { t: 'The main graduate cohort starts in February: Deloitte’s graduate roles start on 22 February 2027 and its summer internship ran from 16 November 2026 to 12 February 2027; NZ Government Procurement took applications from 17 July to 17 August 2026, and the University of Auckland’s Internship and Graduate expo was on 29 July 2026.', tag: 'employer-stated', src: 'https://www.deloitte.com/nz/en/careers/students/frequently-asked-questions.html', by: 'Deloitte New Zealand, early careers FAQ; Procurement and Supply, 29 June 2026; University of Auckland career expos', seen: '2026-10-08' },
    'nz-glm': { t: 'New Zealand’s unemployment rate was 5.6% in the June 2026 quarter, up from 5.4% in March, and the underutilisation rate of 15 to 24-year-olds rose from 33.6% to 37.0% over the year; 77% of graduate employers filled some or all graduate roles from people who had already worked for them.', tag: 'data', src: 'https://www.miragenews.com/unemployment-rate-at-5-6-percent-in-june-2026-1721808/', by: 'Stats NZ labour market statistics, June 2026 quarter (reprinted by Mirage News); New Zealand Association of Graduate Employers, Key Insights 2026', seen: '2026-10-08' },
    'nz-chch-tech': { t: 'ChristchurchNZ says the city’s tech sector contributes $2.4 billion of GDP and over 15,000 jobs, and names Tait Communications and Seequent as pioneering global businesses based there.', tag: 'data', src: 'https://www.christchurchnz.com/business/growth-sectors/tech-services/', by: 'ChristchurchNZ, high-tech services (the city’s economic development agency)', seen: '2026-10-03' }
  }
});

if (window.I18N) I18N.add('it', {
  'A small market with a generous permit: a degree studied full-time in New Zealand for at least 30 weeks can lead to a post-study work visa of up to three years. Auckland is the commercial centre, producing 37% of the country’s output in finance and insurance from its city centre alone.':
    'Un mercato piccolo con un permesso generoso: una laurea seguita a tempo pieno in Nuova Zelanda per almeno 30 settimane può dare un visto di lavoro post-studio fino a tre anni. Auckland è il centro commerciale: dal solo centro città viene il 37% della produzione nazionale in finanza e assicurazioni.',
  'Banking and insurance': 'Banche e assicurazioni', 'Agriculture and food': 'Agricoltura e alimentare',
  'New Zealand’s commercial hub: finance, insurance and tech': 'Il centro commerciale della Nuova Zelanda: finanza, assicurazioni e tecnologia',
  'Media and telecoms': 'Media e telecomunicazioni',
  'Financial and insurance-services employers': 'I datori di lavoro dei servizi finanziari e assicurativi', '42,200 jobs in Auckland (2024)': '42.200 posti ad Auckland (2024)',
  'Tech firms in and around the city centre': 'Le aziende tecnologiche nel centro città e intorno', 'nearly 40 of the country’s top 200': 'quasi 40 delle 200 principali del paese',
  'New Zealand was not covered by the research library before this record.': 'La Nuova Zelanda non era coperta dalla biblioteca di ricerca prima di questa scheda.',
  'No source read gives graduate outcomes or entry pay for international master’s graduates in New Zealand.':
    'Nessuna fonte letta riporta esiti o stipendi d’ingresso dei laureati magistrali internazionali in Nuova Zelanda.',
  'How long the post-study work visa lasts for each kind of master’s is not set out on the page read.':
    'La durata del visto di lavoro post-studio per ciascun tipo di master non è indicata nella pagina letta.',

  'Income tax runs from 10.5% on the first NZ$15,600 through 17.5%, 30% and 33% to 39% on income over NZ$180,000 (rates from 1 April 2025).':
    'L’imposta sul reddito va dal 10,5% sui primi 15.600 NZ$, passando per il 17,5%, il 30% e il 33%, fino al 39% sul reddito oltre i 180.000 NZ$ (aliquote dal 1° aprile 2025).',
  'Auckland’s city centre, the country’s commercial hub, produces 37% of New Zealand’s GDP in financial and insurance services and 28% in information media and telecommunications; nearly 40 of the country’s top 200 tech firms are in or around it.':
    'Il centro di Auckland, polo commerciale del paese, produce il 37% del PIL neozelandese nei servizi finanziari e assicurativi e il 28% in media e telecomunicazioni; quasi 40 delle 200 principali aziende tecnologiche del paese si trovano lì o nei dintorni.',
  'Auckland employs 34% of New Zealand’s workers (early 2025); financial and insurance services employed 42,200 people there in 2024, up from 40,900.':
    'Auckland impiega il 34% dei lavoratori neozelandesi (inizio 2025); nel 2024 i servizi finanziari e assicurativi vi impiegavano 42.200 persone, contro 40.900.',
  'The capital, for government, professional services and finance':
    'La capitale, per pubblica amministrazione, servizi professionali e finanza',
  'Government and professional-services employers':
    'I datori di lavoro della pubblica amministrazione e dei servizi professionali',
  'The South Island’s main city and Canterbury’s centre':
    'La città principale dell’Isola del Sud e centro del Canterbury',
  'Manufacturers in Canterbury':
    'Le imprese manifatturiere del Canterbury',
  '40,000 jobs':
    '40.000 posti',
  'A Wellington regional-council report lists the region’s five largest industries by GDP as professional, scientific and technical services, public administration and safety, financial and insurance services, health care, and information media and telecommunications.':
    'Un rapporto dei consigli regionali di Wellington indica come cinque maggiori settori della regione per PIL i servizi professionali, scientifici e tecnici, la pubblica amministrazione e sicurezza, i servizi finanziari e assicurativi, la sanità, e media e telecomunicazioni.',
  'Canterbury is New Zealand’s second-largest manufacturing region, with 14% of the country’s manufacturing GDP; manufacturing employs 40,000 people there, about 10% of the region’s jobs.':
    'Il Canterbury è la seconda regione manifatturiera della Nuova Zelanda, con il 14% del PIL manifatturiero del paese; la manifattura vi impiega 40.000 persone, circa il 10% dei posti della regione.',
  'Wellington’s finance and Christchurch’s business roles are not rated: the sources read rank industries by output, not graduate jobs by role, and the Wellington report dates from 2020; Kiwibank, the Reserve Bank and Air New Zealand were not read.':
    'La finanza di Wellington e i ruoli di business di Christchurch non sono valutati: le fonti lette classificano i settori per produzione, non i posti per laureati per ruolo, e il rapporto su Wellington risale al 2020; Kiwibank, la banca centrale e Air New Zealand non sono state lette.',

  'Startup Genome’s 2026 report puts Auckland in the 31–40 range of its emerging ecosystems, the biggest climb in that top 40 (more than 75 places).':
    'Il rapporto 2026 di Startup Genome colloca Auckland nella fascia 31–40 degli ecosistemi emergenti, la maggiore risalita di quella top 40 (più di 75 posizioni).',
  'Startup Genome’s 2026 page for Wellington gives no rank; it puts the ecosystem’s value at $2 billion, against a regional average of $5.6 billion, and total early-stage funding at $87 million, against a regional average of $202 million.':
    'La pagina 2026 di Startup Genome su Wellington non indica una posizione; stima il valore dell’ecosistema in 2 miliardi di dollari, contro una media regionale di 5,6 miliardi, e i finanziamenti totali alle fasi iniziali in 87 milioni, contro una media regionale di 202 milioni.',
  'ANZ’s New Zealand holding company has its registered office and principal place of business at ANZ Centre, 23–29 Albert Street, Auckland.':
    'La società capogruppo di ANZ in Nuova Zelanda ha sede legale e sede principale all’ANZ Centre, 23–29 Albert Street, ad Auckland.',
  'Fisher & Paykel Healthcare, founded in New Zealand in 1969, gives an Auckland address and says it employs over 7,500 people around the world, more than 950 of them in research and development.':
    'Fisher & Paykel Healthcare, fondata in Nuova Zelanda nel 1969, indica un indirizzo ad Auckland e dichiara di impiegare oltre 7.500 persone nel mondo, di cui più di 950 nella ricerca e sviluppo.',
  'Xero’s registered address is 19–23 Taranaki Street, Te Aro, Wellington.':
    'L’indirizzo della sede legale di Xero è 19–23 Taranaki Street, Te Aro, Wellington.',
  'At 30 June 2025, 42.6% of the Public Service workforce was in the Wellington region, 21.3% in Auckland and 10.3% in Canterbury.':
    'Al 30 giugno 2025 il 42,6% del personale del Public Service lavorava nella regione di Wellington, il 21,3% ad Auckland e il 10,3% nel Canterbury.',
  'ChristchurchNZ says the city’s tech sector contributes $2.4 billion of GDP and over 15,000 jobs, and names Tait Communications and Seequent as pioneering global businesses based there.':
    'ChristchurchNZ afferma che il settore tecnologico della città contribuisce con 2,4 miliardi di dollari al PIL e oltre 15.000 posti, e cita Tait Communications e Seequent come aziende globali pionieristiche con sede lì.',
  'No regional pay was found: Stats NZ publishes earnings by region only through its data explorer, which could not be read, so the pay metric is left out; rent is left out because no citable rent source was available and the official rental-bond data are by area unit, not one-bedroom flats by city.':
    'Non sono stati trovati stipendi regionali: Stats NZ pubblica i redditi per regione solo tramite il suo esploratore di dati, che non si è potuto leggere, quindi la retribuzione è omessa; l’affitto è omesso perché Numbeo ha rifiutato l’accesso e i dati ufficiali sui depositi cauzionali sono per area statistica, non per bilocali in città.',
  'The Public Service share of Wellington (42.6%) is a share of the workforce, not a headcount; its standing as management is a judgement (public administration read as management).':
    'La quota del Public Service a Wellington (42,6%) è una quota del personale, non un numero di addetti; il suo posizionamento come management è un giudizio (la pubblica amministrazione letta come management).',
  'Graduate recruitment in New Zealand runs in English: Deloitte’s stages are a cover letter, a one-way video interview and a face-to-face interview, and an accredited employer work visa for skill levels 3 to 5 requires proof of English.':
    'Il reclutamento dei laureati in Nuova Zelanda si svolge in inglese: le fasi di Deloitte sono una lettera di presentazione, un colloquio video unidirezionale e un colloquio di persona, e un visto di lavoro con datore accreditato per i livelli di competenza da 3 a 5 richiede la prova dell’inglese.',
  'The main graduate cohort starts in February: Deloitte’s graduate roles start on 22 February 2027 and its summer internship ran from 16 November 2026 to 12 February 2027; NZ Government Procurement took applications from 17 July to 17 August 2026, and the University of Auckland’s Internship and Graduate expo was on 29 July 2026.':
    'Il gruppo principale di laureati inizia a febbraio: i ruoli per laureati di Deloitte iniziano il 22 febbraio 2027 e il suo stage estivo è andato dal 16 novembre 2026 al 12 febbraio 2027; NZ Government Procurement ha raccolto candidature dal 17 luglio al 17 agosto 2026, e la fiera di stage e laureati dell’Università di Auckland si è tenuta il 29 luglio 2026.',
  'New Zealand’s unemployment rate was 5.6% in the June 2026 quarter, up from 5.4% in March, and the underutilisation rate of 15 to 24-year-olds rose from 33.6% to 37.0% over the year; 77% of graduate employers filled some or all graduate roles from people who had already worked for them.':
    'Il tasso di disoccupazione della Nuova Zelanda era del 5,6% nel trimestre di giugno 2026, in aumento dal 5,4% di marzo, e il tasso di sottoutilizzo dei 15-24enni è salito dal 33,6% al 37,0% nell’arco dell’anno; il 77% dei datori di laureati ha coperto alcuni o tutti i posti con persone che avevano già lavorato per loro.',
  'Country brief: hubs, employers, pay and standing': 'Dossier paese: poli, datori di lavoro, stipendi e posizionamento',
  'principal place of business on Albert Street': 'sede principale in Albert Street',
  'over 7,500 staff worldwide, with an Auckland address': 'oltre 7.500 dipendenti nel mondo, con un indirizzo ad Auckland',
  '42.6% of the Public Service workforce (2025)': '42,6% del personale del Public Service (2025)',
  'registered address on Taranaki Street': 'sede legale in Taranaki Street',
  'Tech employers, among them Tait Communications and Seequent': 'Datori di lavoro tecnologici, tra cui Tait Communications e Seequent',
  'over 15,000 tech jobs': 'oltre 15.000 posti nella tecnologia'
});
