/* Atlas record: Malta. Read 3 October 2026; log P58
 * (research/verification/round-4f.md; round 5, 3 October 2026:
 * research/verification/round-5b.md). One hub. The gaming figures were read in the
 * Malta Gaming Authority's interim report (January–June 2025) and, in round 5,
 * in its 2025 annual report (published 7 July 2026). Round 5 added the financial
 * regulator's annual report, Eurostat employment, pay and regional statistics,
 * GFCI 40, named employers (Global LEI Index) and standing and metrics. The
 * National Statistics Office site blocks automated access. */

ATLAS.add({
  id: 'MT',
  checked: '2026-10-03',
  log: 'P58',
  summary: 'An English-speaking EU island of about 575,000 people whose distinctive employers are online gaming (302 licensed companies, 15,039 full-time jobs) and financial services (6.2% of the workforce, pay about 36% above the average). Information and communication and finance together employ about one job in ten, a larger share than in the EU. Non-EU master’s students may work 20 hours a week with a licence, and graduates get at least nine months to find a job.',
  sectors: [
    'Online gaming',
    'Financial services',
    'Tourism',
    'Shipping and aviation services',
    'Public sector'
  ],
  roles: ['finance', 'it'],
  hubs: [
    {
      id: 'valletta', name: 'Valletta and the harbour towns', lat: 35.90, lon: 14.51,
      knownFor: 'Online gaming companies and financial services',
      why: ['mt-mga', 'mt-mga25', 'mt-nuts', 'mt-emp-sector', 'mt-mfsa', 'mt-gfci', 'mt-kindred', 'mt-kpmg'],
      sectors: ['Online gaming', 'Financial services', 'Tourism'],
      employers: [
        { t: 'Companies licensed by the Malta Gaming Authority', note: '302 companies, 15,039 full-time equivalents in Malta (end of 2025)', c: 'mt-mga25' },
        { name: 'Kindred Group', note: 'online betting and gaming group, headquarters at Tigné Point, Sliema', c: 'mt-e-kindred' },
        { name: 'Bank of Valletta', note: 'bank, headquarters at Santa Venera', c: 'mt-e-bov' },
        { name: 'HSBC Bank Malta', note: 'bank, headquarters on Archbishop Street, Valletta', c: 'mt-e-hsbc' },
        { name: 'APS Bank', note: 'bank, headquarters at Birkirkara', c: 'mt-e-aps' },
        { name: 'Lombard Bank Malta', note: 'bank, headquarters on Republic Street, Valletta', c: 'mt-e-lombard' },
        { name: 'Central Bank of Malta', note: 'central bank, headquarters at Castille Place, Valletta', c: 'mt-e-cbm' },
        { name: 'Malta Stock Exchange', note: 'exchange, headquarters at Castille Place, Valletta', c: 'mt-e-mse' },
        { name: 'Malta Financial Services Authority', note: 'regulator of 2,413 authorised entities; 575 staff and a pre-graduate programme', c: 'mt-mfsa' },
        { name: 'KPMG Malta', note: 'over 600 professionals in Pietà, with a graduate recruitment programme', c: 'mt-kpmg' },
        { name: 'Deloitte Malta International Graduate Programme', note: 'audit and assurance, for accounting graduates; relocation allowance', c: 'mt-deloitte' }
      ],
      demand: {
        finance: ['dominant', 'mt-mfsa', 'mt-emp-sector', 'mt-gfci'],
        accounting: ['present', 'mt-kpmg', 'mt-deloitte'],
        it: ['strong', 'mt-emp-sector'],
        business: 'gap', economics: 'gap', management: 'gap', marketing: 'gap', logistics: 'gap', analytics: 'gap', software: 'gap', datasci: 'gap', ai: 'gap', cs: 'gap', bigdata: 'gap'
      },
      finance: {
        banking: ['strong', 'mt-e-bov', 'mt-e-hsbc', 'mt-e-aps', 'mt-e-lombard', 'mt-e-cbm']
      },
      standing: [
        { f: 'finance', s: [5, 2, 2], c: ['mt-mfsa', 'mt-emp-sector', 'mt-gfci'] },
        { f: 'it', s: [5, 2, 1], c: ['mt-emp-sector'] }
      ],
      metrics: {
        pop: { v: 532997, year: 2025, area: 'region', tag: 'data', src: 'https://ec.europa.eu/eurostat/databrowser/view/demo_r_pjangrp3/default/table?lang=en', by: 'Eurostat, population on 1 January by NUTS 3 region (demo_r_pjangrp3), Malta island (MT001)', seen: '2026-10-03' },
        gdp: { v: 22.1, cur: 'EUR', year: 2024, area: 'region', tag: 'data', src: 'https://ec.europa.eu/eurostat/databrowser/view/nama_10r_3gdp/default/table?lang=en', by: 'Eurostat, GDP at current market prices by NUTS 3 region (nama_10r_3gdp), Malta island (MT001), EUR million ÷ 1,000 (22,102)', seen: '2026-10-03' },
        wage: { v: 2080, cur: 'EUR', basis: 'mean', year: 2022, area: 'region', tag: 'data', src: 'https://ec.europa.eu/eurostat/databrowser/view/earn_ses22_19/default/table?lang=en', by: 'Eurostat, structure of earnings survey 2022 (earn_ses22_19), mean monthly gross earnings, all employees of firms with 10+ staff, national figure (no regional split published)', seen: '2026-10-03' }
      },
      programmes: []
    }
  ],
  work: [
    { k: 'Where demand is now', c: ['mt-mga25', 'mt-emp-sector', 'mt-mfsa', 'mt-deloitte', 'mt-kpmg'] },
    { k: 'Entry pay', c: ['mt-ses'] },
    { k: 'Graduate labour market', c: ['mt-grad-emp', 'mt-unemp'] },
    { k: 'Recruiting calendar', c: ['mt-cal-deloitte', 'mt-cal-bet365', 'mt-cal-betsson'] },
    { k: 'Language', c: ['mt-lang'] },
    { k: 'Tax and net pay', c: ['mt-tax'] }
  ],
  briefs: [
    ['countries/mt-malta.md', 'Country brief: hubs, employers, pay and standing']
  ],
  gaps: [
    'The hub is the island’s built-up core around Valletta’s two harbours: employer addresses run from Valletta and Sliema to Birkirkara and Santa Venera, and statistics are for the island of Malta or the country, since none is published for the harbour towns alone.',
    'The gaming regulator and Eurostat count jobs, not role families: finance is rated from the sector’s share of jobs and output and from named bank headquarters, information technology from Eurostat’s share of jobs in information and communication; gaming itself is not a role family and the report does not say how many gaming jobs are technical or commercial.',
    'Pay is Eurostat’s 2022 survey for the whole country (older than 2023, no split for graduates or by region); there is no rent, because no citable rent source (the Housing Authority’s rent tools included) was available, and no official one-bedroom rent was found.',
    'Graduate programmes were read for Deloitte and KPMG only, without intake sizes or dates; no page was read for the banks, PwC, EY or the gaming operators, and the National Statistics Office figures were not available to cite.',
    'Startup Genome has no Malta ecosystem page and no start-up ranking of Malta was read; no university ranking was read.',
    'All Maltese immigration, visa, residence permit and salary rules are consolidated from primary sources in visas_immigration/malta/malta_visas_immigration_guide.md.'
  ],
  claims: {
    'mt-mga': { t: 'At the end of June 2025, 304 companies held 312 gaming licences from the Malta Gaming Authority and employed 14,797 full-time equivalents working in Malta.', tag: 'data', src: 'https://www.mga.org.mt/app/uploads/MGA-Interim-Report-2025.pdf', by: 'Malta Gaming Authority, Interim Performance Report January–June 2025', seen: '2026-10-03' },
    'mt-mga25': { t: 'At the end of 2025, 302 companies held 311 gaming licences from the Malta Gaming Authority and employed 15,039 full-time equivalents working in Malta (14,357 a year earlier); the authority estimates 19,150 jobs directly or indirectly tied to gaming, about 6.5% of the national workforce, and the sector’s gross value added at €1,422 million, about 6.3% of Malta’s output.', tag: 'data', src: 'https://www.mga.org.mt/app/uploads/MGA_Annual_Report_2025.pdf', by: 'Malta Gaming Authority, Annual Report 2025 (published 7 July 2026), overview of the Maltese gaming industry', seen: '2026-10-03' },
    'mt-nuts': { t: 'Eurostat counts 532,997 residents on 1 January 2025 in the island of Malta (NUTS 3 region MT001, 93% of the country’s 574,250) and a GDP of €22.1 billion in 2024 (96% of Malta’s €23.1 billion).', tag: 'data', src: 'https://ec.europa.eu/eurostat/databrowser/view/demo_r_pjangrp3/default/table?lang=en', by: 'Eurostat, population on 1 January by NUTS 3 region (demo_r_pjangrp3) and GDP by NUTS 3 region (nama_10r_3gdp)', seen: '2026-10-03' },
    'mt-emp-sector': { t: 'In 2025 Malta had 338,190 people in employment: 16,250 in information and communication (4.8%, against 3.5% in the EU) and 17,100 in finance and insurance (5.1%, against 2.3% in the EU).', tag: 'data', src: 'https://ec.europa.eu/eurostat/databrowser/view/nama_10_a10_e/default/table?lang=en', by: 'Eurostat, employment by 10 branches (nama_10_a10_e), domestic concept, 2025', seen: '2026-10-03' },
    'mt-unemp': { t: 'Malta’s seasonally adjusted unemployment rate was 3.4% in August 2026, and 9.7% for under-25s, against 6.1% and 15.4% in the EU.', tag: 'data', src: 'https://ec.europa.eu/eurostat/databrowser/view/une_rt_m/default/table?lang=en', by: 'Eurostat, Unemployment by sex and age, monthly (une_rt_m), August 2026', seen: '2026-10-03' },
    'mt-grad-emp': { t: 'In 2025, 92.8% of Maltese tertiary graduates aged 20 to 34 who left education up to three years earlier were in work, against 85.3% in the EU.', tag: 'data', src: 'https://ec.europa.eu/eurostat/databrowser/view/edat_lfse_24/default/table?lang=en', by: 'Eurostat, Employment rates of young people not in education and training (edat_lfse_24), 2025', seen: '2026-10-03' },
    'mt-ses': { t: 'In the 2022 structure of earnings survey, mean monthly gross earnings of Maltese employees in firms with ten or more staff were €2,080; €1,832 for those under 30, €2,749 in information and communication and €2,781 in finance and insurance, against annual mean earnings of €30,960 for all sectors and €39,711 and €39,899 in those two sectors.', tag: 'data', src: 'https://ec.europa.eu/eurostat/databrowser/view/earn_ses22_19/default/table?lang=en', by: 'Eurostat, Structure of earnings survey 2022: earnings by NACE and age (earn_ses22_19, earn_ses22_20, earn_ses22_26)', seen: '2026-10-03' },
    'mt-gfci': { t: 'In the Global Financial Centres Index 40 (September 2026) Malta ranks 63rd in the world, down five places, is profiled among the “international specialists” and is outside the Western European top 15; for fintech it is 89th, up 12 places.', tag: 'practitioner consensus', src: 'https://www.longfinance.net/media/documents/GFCI_40_Report_2026.09.16_v1.2.pdf', by: 'Z/Yen and China Development Institute, Global Financial Centres Index 40 (16 Sep 2026)', seen: '2026-10-03' },
    'mt-mfsa': { t: 'In 2025 financial and insurance activities generated about €1.3 billion of gross value added, 7.3% of Malta’s total (about 4% in the euro area), and employed about 6.2% of the national workforce at pay about 36% above the national average; the MFSA supervised 2,413 authorised entities with 575 staff, 45 of them students in its Pre-Graduate Programme, and partnered with the University of Malta on a postgraduate programme in financial regulation and compliance.', tag: 'data', src: 'https://www.mfsa.mt/wp-content/uploads/2026/06/MFSA-Annual-Report-2025.pdf', by: 'Malta Financial Services Authority, Annual Report 2025 (June 2026)', seen: '2026-10-03' },
    'mt-tax': { t: 'For 2026 a single resident pays no tax on the first €12,000 of taxable income, 15% from €12,001 to €16,000, 25% from €16,001 to €60,000 and 35% above that; employee and employer each pay social security of 10% of salary, at a fixed €55.93 a week for annual salaries above €29,084.', tag: 'practitioner consensus', src: 'https://taxsummaries.pwc.com/malta/individual/taxes-on-personal-income', by: 'PwC Worldwide Tax Summaries, Malta individual taxes on personal income and other taxes (last reviewed 30 September 2026)', seen: '2026-10-03' },
    'mt-deloitte': { t: 'Deloitte Malta’s International Graduate Programme is for people who have recently graduated or are about to graduate in accounting, with work in its Audit & Assurance business in Malta, a salary package, a relocation allowance and a permanent contract; the page gives no pay figure or dates.', tag: 'employer-stated', src: 'https://www.deloitte.com/mt/en/careers/explore-your-fit/students/mt-programme-international-graduate.html', by: 'Deloitte Malta, International Graduate Programme page', seen: '2026-10-03' },
    'mt-kpmg': { t: 'KPMG in Malta says it houses over 600 professionals in its offices in Pietà, including students enrolled in its Graduate Recruitment Programme.', tag: 'employer-stated', src: 'https://kpmg.com/mt/en/careers/our-premises.html', by: 'KPMG Malta, careers: our premises', seen: '2026-10-03' },
    'mt-kindred': { t: 'FDJ UNITED says its sites in London (Kindred London Limited), Stockholm (Kindred People AB) and Malta (Kindred Group) support the group’s online betting and gaming operations and have ISO 14001 environmental certification.', tag: 'employer-stated', src: 'https://www.kindredgroup.com/en/careers/', by: 'FDJ UNITED corporate site (served at kindredgroup.com), news item of 18 September 2026', seen: '2026-10-03' },
    'mt-cal-deloitte': { t: 'Deloitte Malta’s Graduate Programme is for people who finished their studies within the last year or finish within the next 12 months, and its team said it would be at the University of Malta students’ union Freshers’ Week stand on 5–7 October 2026.', tag: 'employer-stated', src: 'https://www.deloitte.com/mt/en/careers/explore-your-fit/students.html', by: 'Deloitte Malta, students hub', seen: '2026-10-08' },
    'mt-cal-bet365': { t: 'A bet365 listing for an 18-month Graduate Trainee scheme in Malta, open to people with an upper second class degree or higher gained within the last three years, ran only from 4 to 19 November 2025.', tag: 'employer-stated', src: 'https://jobsinmalta.com/job/customer-service/graduate-trainee-84480', by: 'Jobs in Malta, bet365 Graduate Trainee (Customer Service) listing', seen: '2026-10-08' },
    'mt-cal-betsson': { t: 'Betsson Group’s paid one-year infosec internship, posted by the MCAST ICT Institute, is full time from July to September and part time, 10 to 20 hours a month, from October to May.', tag: 'employer-stated', src: 'https://iict.mcast.edu.mt/betsson-group-infosec-intern/', by: 'MCAST ICT Institute, Betsson Group InfoSec Intern posting', seen: '2026-10-08' },
    'mt-lang': { t: 'Malta’s official EU languages are Maltese and English.', tag: 'data', src: 'https://european-union.europa.eu/principles-countries-history/eu-countries/malta_en', by: 'European Union, Malta country profile', seen: '2026-10-03' },
    'mt-e-bov': { t: 'Bank of Valletta has its headquarters at Cannon Road, Zone 4, Central Business District, Santa Venera.', tag: 'data', src: 'https://api.gleif.org/api/v1/lei-records/529900RWC8ZYB066JF16', by: 'GLEIF, Global LEI Index record for BANK OF VALLETTA P.L.C. (LEI 529900RWC8ZYB066JF16)', seen: '2026-10-03' },
    'mt-e-hsbc': { t: 'HSBC Bank Malta has its headquarters at 116 Archbishop Street, Valletta.', tag: 'data', src: 'https://api.gleif.org/api/v1/lei-records/549300X34UUBDEUL1Z91', by: 'GLEIF, Global LEI Index record for HSBC BANK MALTA P.L.C. (LEI 549300X34UUBDEUL1Z91)', seen: '2026-10-03' },
    'mt-e-aps': { t: 'APS Bank has its headquarters at APS Centre, Tower Street, Birkirkara.', tag: 'data', src: 'https://api.gleif.org/api/v1/lei-records/213800A1O379I6DMCU10', by: 'GLEIF, Global LEI Index record for APS BANK P.L.C. (LEI 213800A1O379I6DMCU10)', seen: '2026-10-03' },
    'mt-e-lombard': { t: 'Lombard Bank Malta has its headquarters at 67 Republic Street, Valletta.', tag: 'data', src: 'https://api.gleif.org/api/v1/lei-records/529900UIRB65OY6U4B21', by: 'GLEIF, Global LEI Index record for LOMBARD BANK MALTA P.L.C. (LEI 529900UIRB65OY6U4B21)', seen: '2026-10-03' },
    'mt-e-cbm': { t: 'The Central Bank of Malta has its headquarters at Castille Place, Valletta.', tag: 'data', src: 'https://api.gleif.org/api/v1/lei-records/5493002F1U5CO1UMKD70', by: 'GLEIF, Global LEI Index record for Central Bank of Malta (LEI 5493002F1U5CO1UMKD70)', seen: '2026-10-03' },
    'mt-e-mse': { t: 'The Malta Stock Exchange has its headquarters at the Garrison Chapel, Castille Place, Valletta.', tag: 'data', src: 'https://api.gleif.org/api/v1/lei-records/5299009CKES2S5E3YG94', by: 'GLEIF, Global LEI Index record for Malta Stock Exchange plc (LEI 5299009CKES2S5E3YG94)', seen: '2026-10-03' },
    'mt-e-kindred': { t: 'Kindred Group plc has its headquarters at The Centre, Tigné Point, Sliema.', tag: 'data', src: 'https://api.gleif.org/api/v1/lei-records/213800D1MJVOT6SNBX11', by: 'GLEIF, Global LEI Index record for KINDRED GROUP PLC (LEI 213800D1MJVOT6SNBX11)', seen: '2026-10-03' }
  }
});

if (window.I18N) I18N.add('it', {
  'Deloitte Malta’s Graduate Programme is for people who finished their studies within the last year or finish within the next 12 months, and its team said it would be at the University of Malta students’ union Freshers’ Week stand on 5–7 October 2026.':
    'Il Graduate Programme di Deloitte Malta è per chi ha finito gli studi nell’ultimo anno o li finisce entro i prossimi 12 mesi, e il suo team ha detto che sarebbe stato allo stand della Freshers’ Week del sindacato studentesco dell’Università di Malta il 5–7 ottobre 2026.',
  'A bet365 listing for an 18-month Graduate Trainee scheme in Malta, open to people with an upper second class degree or higher gained within the last three years, ran only from 4 to 19 November 2025.':
    'Un annuncio di bet365 per un programma Graduate Trainee di 18 mesi a Malta, aperto a chi ha una laurea con voto upper second class o superiore conseguita negli ultimi tre anni, è rimasto aperto solo dal 4 al 19 novembre 2025.',
  'Betsson Group’s paid one-year infosec internship, posted by the MCAST ICT Institute, is full time from July to September and part time, 10 to 20 hours a month, from October to May.':
    'Il tirocinio retribuito di un anno in sicurezza informatica di Betsson Group, pubblicato dall’ICT Institute del MCAST, è a tempo pieno da luglio a settembre e part time, da 10 a 20 ore al mese, da ottobre a maggio.',
  'An English-speaking EU island of about 575,000 people whose distinctive employers are online gaming (302 licensed companies, 15,039 full-time jobs) and financial services (6.2% of the workforce, pay about 36% above the average). Information and communication and finance together employ about one job in ten, a larger share than in the EU. Non-EU master’s students may work 20 hours a week with a licence, and graduates get at least nine months to find a job.':
    'Un’isola UE di lingua inglese di circa 575.000 abitanti, i cui datori di lavoro caratteristici sono il gioco online (302 aziende autorizzate, 15.039 posti a tempo pieno) e i servizi finanziari (6,2% della forza lavoro, retribuzioni circa il 36% sopra la media). Informazione e comunicazione e finanza insieme impiegano circa un lavoratore su dieci, una quota maggiore che nell’UE. Gli studenti magistrali extra-UE possono lavorare 20 ore settimanali con una licenza, e i laureati hanno almeno nove mesi per trovare lavoro.',
  'Online gaming':
    'Gioco online',
  'Financial services':
    'Servizi finanziari',
  'Tourism':
    'Turismo',
  'Shipping and aviation services':
    'Servizi marittimi e aeronautici',
  'Public sector':
    'Settore pubblico',
  'The hub is the island’s built-up core around Valletta’s two harbours: employer addresses run from Valletta and Sliema to Birkirkara and Santa Venera, and statistics are for the island of Malta or the country, since none is published for the harbour towns alone.':
    'L’hub è il nucleo urbanizzato dell’isola attorno ai due porti della Valletta: gli indirizzi dei datori di lavoro vanno da La Valletta e Sliema a Birkirkara e Santa Venera, e le statistiche riguardano l’isola di Malta o il paese, perché non ne esistono per le sole città dei porti.',
  'The gaming regulator and Eurostat count jobs, not role families: finance is rated from the sector’s share of jobs and output and from named bank headquarters, information technology from Eurostat’s share of jobs in information and communication; gaming itself is not a role family and the report does not say how many gaming jobs are technical or commercial.':
    'L’autorità del gioco ed Eurostat contano i posti, non le famiglie di ruoli: la finanza è valutata sulla quota di posti e di produzione del settore e sulle sedi centrali delle banche citate, l’informatica sulla quota Eurostat di posti nell’informazione e comunicazione; il gioco non è una famiglia di ruoli e il rapporto non dice quanti posti nel gioco siano tecnici o commerciali.',
  'Pay is Eurostat’s 2022 survey for the whole country (older than 2023, no split for graduates or by region); there is no rent, because no citable rent source (the Housing Authority’s rent tools included) was available, and no official one-bedroom rent was found.':
    'Le retribuzioni vengono dall’indagine Eurostat 2022 per tutto il paese (precedente al 2023, senza distinzione per laureati o per regione); non c’è un affitto, perché non era disponibile una fonte citabile per gli affitti (compresi gli strumenti dell’Autorità per la casa) e non è stato trovato un affitto ufficiale per bilocale.',
  'Graduate programmes were read for Deloitte and KPMG only, without intake sizes or dates; no page was read for the banks, PwC, EY or the gaming operators, and the National Statistics Office figures were not available to cite.':
    'I programmi per laureati sono stati letti solo per Deloitte e KPMG, senza numero di posti né date; non è stata letta alcuna pagina delle banche, di PwC, di EY o degli operatori del gioco, e i dati dell’Ufficio nazionale di statistica non erano disponibili da citare.',
  'Startup Genome has no Malta ecosystem page and no start-up ranking of Malta was read; no university ranking was read.':
    'Startup Genome non ha una pagina sull’ecosistema di Malta e non è stata letta alcuna classifica delle start-up di Malta; non è stata letta alcuna classifica universitaria.',
  'All Maltese immigration, visa, residence permit and salary rules are consolidated from primary sources in visas_immigration/malta/malta_visas_immigration_guide.md.':
    'Tutte le regole su immigrazione, visti, permessi di soggiorno e salari per Malta sono consolidate da fonti primarie in visas_immigration/malta/malta_visas_immigration_guide.md.',
  'Country brief: hubs, employers, pay and standing':
    'Scheda paese: poli, datori di lavoro, retribuzioni e posizionamento',
  'Online gaming companies and financial services':
    'Aziende del gioco online e servizi finanziari',
  '302 companies, 15,039 full-time equivalents in Malta (end of 2025)':
    '302 aziende, 15.039 equivalenti a tempo pieno a Malta (fine 2025)',
  'Companies licensed by the Malta Gaming Authority':
    'Le aziende autorizzate dalla Malta Gaming Authority',
  'online betting and gaming group, headquarters at Tigné Point, Sliema':
    'gruppo di scommesse e gioco online, sede centrale a Tigné Point, a Sliema',
  'bank, headquarters at Santa Venera':
    'banca, sede centrale a Santa Venera',
  'bank, headquarters on Archbishop Street, Valletta':
    'banca, sede centrale in Archbishop Street, a La Valletta',
  'bank, headquarters at Birkirkara':
    'banca, sede centrale a Birkirkara',
  'bank, headquarters on Republic Street, Valletta':
    'banca, sede centrale in Republic Street, a La Valletta',
  'central bank, headquarters at Castille Place, Valletta':
    'banca centrale, sede centrale in Castille Place, a La Valletta',
  'exchange, headquarters at Castille Place, Valletta':
    'borsa valori, sede centrale in Castille Place, a La Valletta',
  'regulator of 2,413 authorised entities; 575 staff and a pre-graduate programme':
    'autorità di vigilanza su 2.413 soggetti autorizzati; 575 dipendenti e un programma pre-laurea',
  'over 600 professionals in Pietà, with a graduate recruitment programme':
    'oltre 600 professionisti a Pietà, con un programma di assunzione di laureati',
  'audit and assurance, for accounting graduates; relocation allowance':
    'audit e assurance, per laureati in contabilità; indennità di trasferimento',
  'Where demand is now':
    'Dove si concentra la domanda oggi',
  'Entry pay':
    'Retribuzioni d’ingresso',
  'Graduate labour market':
    'Mercato del lavoro dei laureati',
  'Recruiting calendar':
    'Calendario delle selezioni',
  'Language':
    'Lingua',
  'Tax and net pay':
    'Tasse e stipendio netto',
  'At the end of June 2025, 304 companies held 312 gaming licences from the Malta Gaming Authority and employed 14,797 full-time equivalents working in Malta.':
    'A fine giugno 2025, 304 aziende avevano 312 licenze di gioco della Malta Gaming Authority e impiegavano 14.797 equivalenti a tempo pieno a Malta.',
  'At the end of 2025, 302 companies held 311 gaming licences from the Malta Gaming Authority and employed 15,039 full-time equivalents working in Malta (14,357 a year earlier); the authority estimates 19,150 jobs directly or indirectly tied to gaming, about 6.5% of the national workforce, and the sector’s gross value added at €1,422 million, about 6.3% of Malta’s output.':
    'A fine 2025, 302 aziende avevano 311 licenze di gioco della Malta Gaming Authority e impiegavano 15.039 equivalenti a tempo pieno a Malta (14.357 un anno prima); l’autorità stima 19.150 posti legati direttamente o indirettamente al gioco, circa il 6,5% della forza lavoro nazionale, e il valore aggiunto del settore in 1.422 milioni di €, circa il 6,3% della produzione di Malta.',
  'Eurostat counts 532,997 residents on 1 January 2025 in the island of Malta (NUTS 3 region MT001, 93% of the country’s 574,250) and a GDP of €22.1 billion in 2024 (96% of Malta’s €23.1 billion).':
    'Eurostat conta 532.997 residenti al 1° gennaio 2025 nell’isola di Malta (regione NUTS 3 MT001, il 93% dei 574.250 del paese) e un PIL di 22,1 miliardi di € nel 2024 (il 96% dei 23,1 miliardi di Malta).',
  'In 2025 Malta had 338,190 people in employment: 16,250 in information and communication (4.8%, against 3.5% in the EU) and 17,100 in finance and insurance (5.1%, against 2.3% in the EU).':
    'Nel 2025 Malta contava 338.190 occupati: 16.250 nell’informazione e comunicazione (4,8%, contro il 3,5% nell’UE) e 17.100 in finanza e assicurazioni (5,1%, contro il 2,3% nell’UE).',
  'Malta’s seasonally adjusted unemployment rate was 3.4% in August 2026, and 9.7% for under-25s, against 6.1% and 15.4% in the EU.':
    'Il tasso di disoccupazione destagionalizzato di Malta era del 3,4% nell’agosto 2026, e del 9,7% per gli under 25, contro il 6,1% e il 15,4% nell’UE.',
  'In 2025, 92.8% of Maltese tertiary graduates aged 20 to 34 who left education up to three years earlier were in work, against 85.3% in the EU.':
    'Nel 2025 il 92,8% dei laureati maltesi di 20-34 anni usciti dal sistema educativo da non più di tre anni era occupato, contro l’85,3% nell’UE.',
  'In the 2022 structure of earnings survey, mean monthly gross earnings of Maltese employees in firms with ten or more staff were €2,080; €1,832 for those under 30, €2,749 in information and communication and €2,781 in finance and insurance, against annual mean earnings of €30,960 for all sectors and €39,711 and €39,899 in those two sectors.':
    'Nell’indagine sulla struttura delle retribuzioni 2022 la retribuzione lorda mensile media dei dipendenti maltesi nelle imprese con almeno dieci addetti era di 2.080 €; 1.832 € per gli under 30, 2.749 € nell’informazione e comunicazione e 2.781 € in finanza e assicurazioni, contro una retribuzione annua media di 30.960 € per tutti i settori e 39.711 € e 39.899 € in quei due settori.',
  'In the Global Financial Centres Index 40 (September 2026) Malta ranks 63rd in the world, down five places, is profiled among the “international specialists” and is outside the Western European top 15; for fintech it is 89th, up 12 places.':
    'Nel Global Financial Centres Index 40 (settembre 2026) Malta è 63ª al mondo, in calo di cinque posizioni, è classificata tra gli “international specialists” ed è fuori dalle prime 15 dell’Europa occidentale; per il fintech è 89ª, in salita di 12 posizioni.',
  'In 2025 financial and insurance activities generated about €1.3 billion of gross value added, 7.3% of Malta’s total (about 4% in the euro area), and employed about 6.2% of the national workforce at pay about 36% above the national average; the MFSA supervised 2,413 authorised entities with 575 staff, 45 of them students in its Pre-Graduate Programme, and partnered with the University of Malta on a postgraduate programme in financial regulation and compliance.':
    'Nel 2025 le attività finanziarie e assicurative hanno generato circa 1,3 miliardi di € di valore aggiunto, il 7,3% del totale di Malta (circa il 4% nell’area euro), e occupavano circa il 6,2% della forza lavoro nazionale con retribuzioni circa il 36% sopra la media nazionale; la MFSA vigilava su 2.413 soggetti autorizzati con 575 dipendenti, di cui 45 studenti nel suo Pre-Graduate Programme, e ha avviato con l’Università di Malta un programma post-laurea in regolamentazione finanziaria e compliance.',
  'For 2026 a single resident pays no tax on the first €12,000 of taxable income, 15% from €12,001 to €16,000, 25% from €16,001 to €60,000 and 35% above that; employee and employer each pay social security of 10% of salary, at a fixed €55.93 a week for annual salaries above €29,084.':
    'Per il 2026 un residente single non paga imposte sui primi 12.000 € di reddito imponibile, paga il 15% da 12.001 a 16.000 €, il 25% da 16.001 a 60.000 € e il 35% oltre; dipendente e datore di lavoro versano ciascuno contributi sociali pari al 10% dello stipendio, con un importo fisso di 55,93 € a settimana per stipendi annui superiori a 29.084 €.',
  'Deloitte Malta’s International Graduate Programme is for people who have recently graduated or are about to graduate in accounting, with work in its Audit & Assurance business in Malta, a salary package, a relocation allowance and a permanent contract; the page gives no pay figure or dates.':
    'L’International Graduate Programme di Deloitte Malta è per chi si è laureato da poco o sta per laurearsi in contabilità, con lavoro nell’area Audit & Assurance a Malta, un pacchetto retributivo, un’indennità di trasferimento e un contratto a tempo indeterminato; la pagina non indica cifre né date.',
  'KPMG in Malta says it houses over 600 professionals in its offices in Pietà, including students enrolled in its Graduate Recruitment Programme.':
    'KPMG a Malta dichiara di ospitare oltre 600 professionisti nei suoi uffici a Pietà, compresi gli studenti iscritti al suo Graduate Recruitment Programme.',
  'FDJ UNITED says its sites in London (Kindred London Limited), Stockholm (Kindred People AB) and Malta (Kindred Group) support the group’s online betting and gaming operations and have ISO 14001 environmental certification.':
    'FDJ UNITED afferma che le sue sedi di Londra (Kindred London Limited), Stoccolma (Kindred People AB) e Malta (Kindred Group) sostengono le attività di scommesse e gioco online del gruppo e hanno la certificazione ambientale ISO 14001.',
  'Malta’s official EU languages are Maltese and English.':
    'Le lingue ufficiali di Malta nell’UE sono il maltese e l’inglese.',
  'Bank of Valletta has its headquarters at Cannon Road, Zone 4, Central Business District, Santa Venera.':
    'Bank of Valletta ha la sede centrale in Cannon Road, Zone 4, Central Business District, a Santa Venera.',
  'HSBC Bank Malta has its headquarters at 116 Archbishop Street, Valletta.':
    'HSBC Bank Malta ha la sede centrale in 116 Archbishop Street, a La Valletta.',
  'APS Bank has its headquarters at APS Centre, Tower Street, Birkirkara.':
    'APS Bank ha la sede centrale in APS Centre, Tower Street, a Birkirkara.',
  'Lombard Bank Malta has its headquarters at 67 Republic Street, Valletta.':
    'Lombard Bank Malta ha la sede centrale in 67 Republic Street, a La Valletta.',
  'The Central Bank of Malta has its headquarters at Castille Place, Valletta.':
    'La Banca Centrale di Malta ha la sede centrale in Castille Place, a La Valletta.',
  'The Malta Stock Exchange has its headquarters at the Garrison Chapel, Castille Place, Valletta.':
    'La Borsa di Malta ha la sede centrale nella Garrison Chapel, Castille Place, a La Valletta.',
  'Kindred Group plc has its headquarters at The Centre, Tigné Point, Sliema.':
    'Kindred Group plc ha la sede centrale in The Centre, Tigné Point, a Sliema.'
});
