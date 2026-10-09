/* Atlas record: Luxembourg. Read 2 and 3 October 2026; log P45
 * (research/verification/round-4c.md, round-5a.md). One hub. Residence rules read in the
 * consolidated immigration law on Legilux (version applicable 12 Jun 2026);
 * guichet.lu had moved its pages.
 * Round 5a (3 October 2026) added standing, metrics (Eurostat for population, output and entry pay,
 * Numbeo for rent), more claims for the hub and a country brief (research/countries/lu-luxembourg.md). */

ATLAS.add({
  id: 'LU',
  checked: '2026-10-03',
  log: 'P45',
  summary: 'Europe’s largest investment-fund centre, with about €9 trillion in fund assets, so the graduate market is fund administration, asset management, banking and the professional services around them, plus several EU institutions. Work is multilingual; English is common in finance.',
  sectors: ['Investment funds', 'Banking', 'EU institutions', 'Professional services', 'Steel and logistics'],
  roles: ['finance'],
  hubs: [
    {
      id: 'luxembourg', name: 'Luxembourg City', lat: 49.61, lon: 6.13,
      knownFor: 'Fund administration, asset management and private-markets back offices',
      why: ['lu-alfi', 'lu-gfci', 'lu-emp', 'lu-rank', 'lu-gser'],
      sectors: ['Investment funds', 'Private markets', 'Banking', 'EU institutions'],
      employers: [
        { t: 'Luxembourg-domiciled funds', note: '€6.69 trillion in UCITS and €9.07 trillion including AIFs', c: 'lu-alfi' },
        { name: 'European Investment Bank', note: 'more than 4,000 employees in Luxembourg and in offices around the world', c: 'lu-eib' },
        { name: 'CSSF (financial regulator)', note: 'over 950 employees', c: 'lu-cssf' },
        { t: 'Luxembourg’s start-up ecosystem', note: 'ecosystem value $4 billion', c: 'lu-gser' }
      ],
      demand: {
        finance: ['dominant', 'lu-alfi'],
        economics: ['present', 'lu-eib'],
        business: 'gap', accounting: 'gap', management: 'gap', marketing: 'gap', logistics: 'gap', analytics: 'gap', it: 'gap', software: 'gap', datasci: 'gap', ai: 'gap', cs: 'gap', bigdata: 'gap'
      },
      finance: {
        am: ['dominant', 'lu-alfi'],
        ib: 'gap', banking: 'gap', pe: 'gap', vc: 'gap', corpfin: 'gap', risk: 'gap', finconsult: 'gap'
      },
      standing: [
        { f: 'finance', s: [5, 4, 3], c: ['lu-alfi', 'lu-gfci', 'lu-rank'] }
      ],
      metrics: {
        pop: {
          v: 681973,
          year: 2025,
          area: 'region',
          tag: 'data',
          src: 'https://ec.europa.eu/eurostat/databrowser/view/demo_r_pjangrp3/default/table',
          by: 'Eurostat, population on 1 January by NUTS 3 region (demo_r_pjangrp3), Luxembourg (LU000)',
          seen: '2026-10-03'
        },
        gdp: {
          v: 82.1,
          cur: 'EUR',
          year: 2023,
          area: 'region',
          tag: 'data',
          src: 'https://ec.europa.eu/eurostat/databrowser/view/nama_10r_3gdp/default/table',
          by: 'Eurostat, GDP at current market prices by NUTS 3 region (nama_10r_3gdp), Luxembourg (LU000), million euro ÷ 1,000',
          seen: '2026-10-03'
        },
        wage: {
          tag: 'data',
          seen: '2026-10-03',
          v: 6212,
          cur: 'EUR',
          basis: 'mean',
          year: 2022,
          area: 'region',
          src: 'https://ec.europa.eu/eurostat/databrowser/view/earn_ses22_28/default/table',
          by: 'Eurostat, Structure of earnings survey 2022 (earn_ses22_28): mean annual earnings of €74,542 for all employees of firms with 10 or more staff (public administration excluded), whole of Luxembourg, annual ÷ 12'
        },
        rent: {
          v: 2000,
          cur: 'EUR',
          year: 2026,
          area: 'city',
          tag: 'anecdotal',
          src: 'https://web.archive.org/web/20260808071419/https://www.numbeo.com/cost-of-living/in/Luxembourg',
          by: 'Numbeo (crowd-sourced; 794 entries by 116 contributors in the past 12 months), one-bedroom flat in the city centre, average, Luxembourg (page read as archived by the Internet Archive, Numbeo update of 25 July 2026)',
          seen: '2026-10-03'
        }
      },
      programmes: []
    }
  ],

  work: [
    { k: 'Language', c: ['lu-lang-claim'] },
    { k: 'Recruiting calendar', c: ['lu-cal-big4', 'lu-cal-eib'] },
    { k: 'Where demand is now', c: ['lu-emp', 'lu-alfi', 'lu-adem-claim'] },
    { k: 'Entry pay', c: ['lu-pay'] },
    { k: 'Graduate labour market', c: ['lu-grads', 'lu-adem-ur', 'lu-expat'] }
  ],

  briefs: [
    ['places/countries-and-cities.md', '§3 Luxembourg: fund domicile and administration'],
    ['careers/finance.md', 'asset management and fund services'],
    ['countries/lu-luxembourg.md', 'Country brief: hub, employers, pay and standing']
  ],
  gaps: [
    'Employment in the fund industry itself and entry pay by employer were not read: Eurostat counts finance and insurance jobs as a whole, and ALFI publishes assets, not jobs, on the page used.',
    'All immigration, visa and registration rules are consolidated from primary sources in visas_immigration/luxembourg/luxembourg_visas_immigration_guide.md.',
    'Tax and net pay were not researched for this record.',
    'Cross-border commuters, who fill a large share of Luxembourg’s jobs, and the University of Luxembourg’s size and ranking were not read on a primary page (its site could not be read).',
    'The pay metric is the national mean from the 2022 structure-of-earnings survey (all employees of firms with 10 or more staff), not a figure for graduates or for the city alone.'
  ],

  claims: {
    'lu-lang-claim': {
      t: 'One Luxembourg recruiter estimated in April 2026 that 50% of positions require French, German or Luxembourgish and that English accounts for the other 50% of requirements; the Big Four call English and French essential.',
      tag: 'practitioner consensus',
      src: 'https://media.alleyesonme.jobs/en/article-titles/myth-or-reality-is-it-impossible-to-work-in-luxembourg-without-french',
      by: 'All Eyes On Me Jobs, citing a recruiter quoted by Silicon Luxembourg (April 2026); Luxtoday on the Big Four',
      seen: '2026-10-08'
    },
    'lu-cal-big4': {
      t: 'The Big Four’s hiring in Luxembourg peaks in September and January and covers both graduates and experienced people.',
      tag: 'data',
      src: 'https://luxtoday.lu/en/knowledge/big-four-in-luxembourg',
      by: 'Luxtoday, the Big Four in Luxembourg',
      seen: '2026-10-08'
    },
    'lu-cal-eib': {
      t: 'The European Investment Bank takes trainees in two intakes a year, in March-April and September-October, announced about 4 months ahead.',
      tag: 'employer-stated',
      src: 'https://www.eib.org/en/about/careers/categories/traineeships/index',
      by: 'European Investment Bank, traineeships',
      seen: '2026-10-08'
    },
    'lu-adem-claim': {
      t: 'Employment in Luxembourg passed 530,000 in March 2026 and about 143,000 new contracts were signed in 2025, though vacancies remain well below their post-pandemic highs.',
      tag: 'data',
      src: 'https://paperjam.lu/article/le-chomage-verse-par-ladem-grimpe-a-455-millions-deuros-en-2025',
      by: 'Paperjam, ADEM annual review 2025',
      seen: '2026-10-08'
    },
    'lu-adem-ur': {
      t: 'ADEM reports unemployment of 6.2% at the end of 2025 and 6.3% at the end of March 2026, with more than 21,000 resident job seekers registered.',
      tag: 'data',
      src: 'https://paperjam.lu/article/le-chomage-verse-par-ladem-grimpe-a-455-millions-deuros-en-2025',
      by: 'Paperjam, ADEM annual review 2025',
      seen: '2026-10-08'
    },
    'lu-alfi': {
      t: 'Luxembourg-domiciled UCITS funds held €6.69 trillion of net assets in June 2026, €9.07 trillion including alternative funds, up about 20% in twelve months.',
      tag: 'data',
      src: 'research/places/countries-and-cities.md',
      by: 'ALFI industry statistics, via places/countries-and-cities.md §3',
      seen: '2026-09-30'
    },
    'lu-expat': {
      t: 'Expats rank Luxembourg 4th in the 2026 Working Abroad Index and 1st for job security.',
      tag: 'data',
      src: 'research/places/countries-and-cities.md',
      by: 'InterNations Expat Insider 2026 (survey), via places/countries-and-cities.md §3',
      seen: '2026-09-30'
    },
    'lu-pay': {
      t: 'In 2022 employees under 30 in Luxembourg firms with 10 or more staff (public administration excluded) earned a mean of €48,369 gross a year, and those under 30 working as professionals €60,726, against €74,542 for all ages.',
      tag: 'data',
      src: 'https://ec.europa.eu/eurostat/databrowser/view/earn_ses22_28/default/table',
      by: 'Eurostat, Structure of earnings survey 2022: mean annual earnings by age and occupation (earn_ses22_28), Luxembourg, firms with 10+ employees, sections B–S excluding O',
      seen: '2026-10-03'
    },
    'lu-grads': {
      t: 'In 2025 the employment rate of Luxembourg residents aged 20 to 34 with a tertiary degree was 90.5% (88.2% for those who finished within the last five years); unemployment was 6.5% overall, 21.6% for the 15-to-24s in 2024, and GDP was €89.5 billion.',
      tag: 'data',
      src: 'https://ec.europa.eu/eurostat/databrowser/view/edat_lfse_24/default/table',
      by: 'Eurostat, employment rate of 20-34-year-olds by educational attainment and years since leaving education (edat_lfse_24), unemployment (une_rt_a; 2025 youth figure not published in the extract read) and GDP (nama_10_gdp)',
      seen: '2026-10-03'
    },
    'lu-gfci': {
      t: 'The Global Financial Centres Index 40 (September 2026) ranks Luxembourg 17th in the world (down 1 place) and fourth in Western Europe after London, Zurich and Geneva; in the investment-management sector table it is second in the world, behind Hong Kong, and it is 12th for banking.',
      tag: 'practitioner consensus',
      src: 'https://www.longfinance.net/media/documents/GFCI_40_Report_2026.09.16_v1.2.pdf',
      by: 'Z/Yen and the China Development Institute, GFCI 40, 16 Sep 2026, Tables 1, 5 and 8',
      seen: '2026-10-03'
    },
    'lu-emp': {
      t: 'Luxembourg has 510,990 jobs (2023): 115,420 of them in public administration, defence, education and health, 90,490 in professional, scientific, technical and administrative services, 54,220 in finance and insurance and 22,730 in information and communication.',
      tag: 'data',
      src: 'https://ec.europa.eu/eurostat/databrowser/view/nama_10r_3empers/default/table',
      by: 'Eurostat, employment (thousand persons) by NUTS 3 region and activity (nama_10r_3empers), 2023, NUTS 3 LU000 (the whole country)',
      seen: '2026-10-03'
    },
    'lu-rank': {
      t: 'Of the 152 metropolitan regions for which Eurostat publishes jobs by sector (latest year, 2021 or 2022; German, British and Swiss regions are not in the table), Luxembourg has the 11th-most jobs in finance and insurance (53,040, just behind Brussels with 63,000) and the 45th-most in information and communication (21,830).',
      tag: 'data',
      src: 'https://ec.europa.eu/eurostat/databrowser/view/met_10r_3emp/default/table',
      by: 'Eurostat, employment by NACE Rev. 2 activity by metropolitan region (met_10r_3emp); ranking calculated by Admetia from the full table, 2026-10-03',
      seen: '2026-10-03'
    },
    'lu-eib': {
      t: 'The European Investment Bank says it has more than 4,000 employees in Luxembourg and in offices around the world.',
      tag: 'employer-stated',
      src: 'https://www.eib.org/en/about/jobs/index.htm',
      by: 'European Investment Bank, Jobs and careers',
      seen: '2026-10-03'
    },
    'lu-cssf': {
      t: 'The CSSF, Luxembourg’s financial-sector supervisor, says it has over 950 employees working in many specialised departments.',
      tag: 'employer-stated',
      src: 'https://careers.cssf.lu/en/about-the-cssf/',
      by: 'CSSF, About the CSSF (careers site)',
      seen: '2026-10-03'
    },
    'lu-gser': {
      t: 'Startup Genome’s 2026 report puts the value of Luxembourg’s start-up ecosystem at $4 billion (Europe’s average $14.3 billion), with $271 million of seed and Series A funding in H2 2023–2025 and $1 billion of exits in 2021–2025.',
      tag: 'practitioner consensus',
      src: 'https://startupgenome.com/ecosystems/luxembourg',
      by: 'Startup Genome, Global Startup Ecosystem Report 2026, Luxembourg page',
      seen: '2026-10-03'
    }
  }
});

if (window.I18N) I18N.add('it', {
  'One Luxembourg recruiter estimated in April 2026 that 50% of positions require French, German or Luxembourgish and that English accounts for the other 50% of requirements; the Big Four call English and French essential.':
    'Un selezionatore lussemburghese ha stimato nell’aprile 2026 che il 50% delle posizioni richieda francese, tedesco o lussemburghese e che l’inglese rappresenti l’altro 50% dei requisiti; le Big Four definiscono essenziali inglese e francese.',
  'The Big Four’s hiring in Luxembourg peaks in September and January and covers both graduates and experienced people.':
    'Le assunzioni delle Big Four in Lussemburgo hanno i picchi a settembre e gennaio e riguardano sia laureati sia persone con esperienza.',
  'The European Investment Bank takes trainees in two intakes a year, in March-April and September-October, announced about 4 months ahead.':
    'La Banca europea per gli investimenti prende tirocinanti in due ingressi l’anno, a marzo-aprile e a settembre-ottobre, annunciati circa 4 mesi prima.',
  'Employment in Luxembourg passed 530,000 in March 2026 and about 143,000 new contracts were signed in 2025, though vacancies remain well below their post-pandemic highs.':
    'L’occupazione in Lussemburgo ha superato 530.000 posti a marzo 2026 e nel 2025 sono stati firmati circa 143.000 nuovi contratti, anche se le offerte restano molto al di sotto dei massimi post-pandemici.',
  'ADEM reports unemployment of 6.2% at the end of 2025 and 6.3% at the end of March 2026, with more than 21,000 resident job seekers registered.':
    'L’ADEM riporta una disoccupazione del 6,2% a fine 2025 e del 6,3% a fine marzo 2026, con oltre 21.000 persone in cerca di lavoro residenti iscritte.',
  'Europe’s largest investment-fund centre, with about €9 trillion in fund assets, so the graduate market is fund administration, asset management, banking and the professional services around them, plus several EU institutions. Work is multilingual; English is common in finance.':
    'Il maggiore centro europeo dei fondi d’investimento, con circa 9 mila miliardi di euro di patrimoni, quindi il mercato per i laureati è amministrazione di fondi, asset management, banche e i servizi professionali attorno a loro, più diverse istituzioni UE. Il lavoro è multilingue; nella finanza l’inglese è diffuso.',
  'Investment funds':
    'Fondi d’investimento',
  'Banking':
    'Banca',
  'EU institutions':
    'Istituzioni UE',
  'Steel and logistics':
    'Acciaio e logistica',
  'Employment in the fund industry itself and entry pay by employer were not read: Eurostat counts finance and insurance jobs as a whole, and ALFI publishes assets, not jobs, on the page used.':
    'L’occupazione nell’industria dei fondi in sé e gli stipendi d’ingresso per datore di lavoro non sono stati letti: Eurostat conta i posti in finanza e assicurazioni nel complesso, e ALFI pubblica patrimoni, non posti di lavoro, sulla pagina usata.',
  'All immigration, visa and registration rules are consolidated from primary sources in visas_immigration/luxembourg/luxembourg_visas_immigration_guide.md.':
    'Tutte le norme su immigrazione, visti e registrazione sono consolidate da fonti primarie in visas_immigration/luxembourg/luxembourg_visas_immigration_guide.md.',
  'Tax and net pay were not researched for this record.':
    'Tasse e stipendio netto non sono stati ricercati per questa scheda.',
  'Cross-border commuters, who fill a large share of Luxembourg’s jobs, and the University of Luxembourg’s size and ranking were not read on a primary page (its site could not be read).':
    'I pendolari frontalieri, che occupano una larga quota dei posti di lavoro del Lussemburgo, e le dimensioni e la posizione in classifica dell’Università del Lussemburgo non sono stati letti su una pagina primaria (il suo sito ha bloccato la richiesta).',
  'The pay metric is the national mean from the 2022 structure-of-earnings survey (all employees of firms with 10 or more staff), not a figure for graduates or for the city alone.':
    'La metrica salariale è la media nazionale dell’indagine sulla struttura delle retribuzioni 2022 (tutti i dipendenti delle imprese con almeno 10 addetti), non una cifra per i laureati o per la sola città.',
  '§3 Luxembourg: fund domicile and administration':
    '§3 Lussemburgo: domiciliazione e amministrazione dei fondi',
  'asset management and fund services':
    'asset management e servizi ai fondi',
  'Country brief: hub, employers, pay and standing':
    'Dossier paese: polo, datori di lavoro, stipendi e posizionamento',
  'Fund administration, asset management and private-markets back offices':
    'Amministrazione di fondi, asset management e back office dei mercati privati',
  'Private markets':
    'Mercati privati',
  '€6.69 trillion in UCITS and €9.07 trillion including AIFs':
    '6,69 mila miliardi di euro in OICVM e 9,07 mila miliardi includendo i FIA',
  'Luxembourg-domiciled funds':
    'I fondi domiciliati in Lussemburgo',
  'more than 4,000 employees in Luxembourg and in offices around the world':
    'oltre 4.000 dipendenti in Lussemburgo e negli uffici nel mondo',
  'over 950 employees':
    'oltre 950 dipendenti',
  'ecosystem value $4 billion':
    'valore dell’ecosistema 4 miliardi di dollari',
  'Luxembourg’s start-up ecosystem':
    'L’ecosistema start-up del Lussemburgo',
  'Entry pay':
    'Stipendio d’ingresso',
  'Graduate labour market':
    'Mercato del lavoro dei laureati',
  'Luxembourg-domiciled UCITS funds held €6.69 trillion of net assets in June 2026, €9.07 trillion including alternative funds, up about 20% in twelve months.':
    'A giugno 2026 i fondi OICVM domiciliati in Lussemburgo avevano 6,69 mila miliardi di euro di patrimonio netto, 9,07 mila miliardi includendo i fondi alternativi, circa il 20% in più in dodici mesi.',
  'Expats rank Luxembourg 4th in the 2026 Working Abroad Index and 1st for job security.':
    'Gli espatriati collocano il Lussemburgo al 4° posto nel Working Abroad Index 2026 e al 1° per sicurezza del posto di lavoro.',
  'In 2022 employees under 30 in Luxembourg firms with 10 or more staff (public administration excluded) earned a mean of €48,369 gross a year, and those under 30 working as professionals €60,726, against €74,542 for all ages.':
    'Nel 2022 i dipendenti sotto i 30 anni delle imprese lussemburghesi con almeno 10 addetti (esclusa la pubblica amministrazione) guadagnavano in media 48.369 € lordi all’anno, e quelli sotto i 30 anni che lavorano come professionisti 60.726 €, contro 74.542 € per tutte le età.',
  'In 2025 the employment rate of Luxembourg residents aged 20 to 34 with a tertiary degree was 90.5% (88.2% for those who finished within the last five years); unemployment was 6.5% overall, 21.6% for the 15-to-24s in 2024, and GDP was €89.5 billion.':
    'Nel 2025 il tasso di occupazione dei residenti in Lussemburgo di 20-34 anni con un titolo terziario era del 90,5% (l’88,2% per chi ha finito da non oltre cinque anni); la disoccupazione era del 6,5% in complesso, del 21,6% tra i 15-24enni nel 2024, e il PIL di 89,5 miliardi di euro.',
  'The Global Financial Centres Index 40 (September 2026) ranks Luxembourg 17th in the world (down 1 place) and fourth in Western Europe after London, Zurich and Geneva; in the investment-management sector table it is second in the world, behind Hong Kong, and it is 12th for banking.':
    'L’indice Global Financial Centres 40 (settembre 2026) colloca il Lussemburgo al 17º posto nel mondo (in calo di 1 posizione) e al quarto nell’Europa occidentale dopo Londra, Zurigo e Ginevra; nella tabella del settore gestione degli investimenti è secondo al mondo, dietro Hong Kong, ed è 12º per le banche.',
  'Luxembourg has 510,990 jobs (2023): 115,420 of them in public administration, defence, education and health, 90,490 in professional, scientific, technical and administrative services, 54,220 in finance and insurance and 22,730 in information and communication.':
    'Il Lussemburgo conta 510.990 posti di lavoro (2023): 115.420 dei quali in amministrazione pubblica, difesa, istruzione e sanità, 90.490 in servizi professionali, scientifici, tecnici e amministrativi, 54.220 in finanza e assicurazioni e 22.730 in informazione e comunicazione.',
  'Of the 152 metropolitan regions for which Eurostat publishes jobs by sector (latest year, 2021 or 2022; German, British and Swiss regions are not in the table), Luxembourg has the 11th-most jobs in finance and insurance (53,040, just behind Brussels with 63,000) and the 45th-most in information and communication (21,830).':
    'Tra le 152 regioni metropolitane per cui Eurostat pubblica i posti di lavoro per settore (ultimo anno, 2021 o 2022; le regioni tedesche, britanniche e svizzere non sono nella tabella), il Lussemburgo ha l’11º maggior numero di posti in finanza e assicurazioni (53.040, subito dietro Bruxelles con 63.000) e il 45º in informazione e comunicazione (21.830).',
  'The European Investment Bank says it has more than 4,000 employees in Luxembourg and in offices around the world.':
    'La Banca europea per gli investimenti dice di avere più di 4.000 dipendenti in Lussemburgo e negli uffici nel mondo.',
  'The CSSF, Luxembourg’s financial-sector supervisor, says it has over 950 employees working in many specialised departments.':
    'La CSSF, l’autorità di vigilanza del settore finanziario lussemburghese, dice di avere oltre 950 dipendenti in numerosi dipartimenti specializzati.',
  'Startup Genome’s 2026 report puts the value of Luxembourg’s start-up ecosystem at $4 billion (Europe’s average $14.3 billion), with $271 million of seed and Series A funding in H2 2023–2025 and $1 billion of exits in 2021–2025.':
    'Il rapporto 2026 di Startup Genome stima il valore dell’ecosistema start-up del Lussemburgo in 4 miliardi di dollari (media europea 14,3 miliardi), con 271 milioni di dollari di finanziamenti seed e Series A nel H2 2023–2025 e 1 miliardo di dollari di exit nel 2021–2025.'
});
