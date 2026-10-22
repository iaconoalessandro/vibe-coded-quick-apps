/* Atlas record: Iceland. Read 3 October 2026, deepened 3 October 2026; log P59
 * (research/verification/round-4f.md, round-5c.md). One hub, Reykjavík. Iceland is in the
 * EEA, not the EU. Student and graduate rules changed on 8 July 2026 (read on
 * island.is). Statistics Iceland publishes no sector or pay figures by city or region, so
 * the hub's finance rating rests on the banks' registered offices and national employment;
 * Brief: research/countries/is-iceland.md. */

ATLAS.add({
  id: 'IS',
  checked: '2026-10-03',
  log: 'P59',
  summary: 'A small, highly educated labour market of about 226,000 people, where tourism is close to a tenth of the economy. EU and EEA citizens move freely. Since July 2026 non-EU students may work up to 60% of full time without a permit, and graduates get 18 months, down from three years, to find a job.',
  sectors: ['Tourism', 'Fisheries and seafood', 'Energy and aluminium', 'Technology and data centres', 'Public sector'],
  roles: ['finance'],
  hubs: [
    {
      id: 'reykjavik', name: 'Reykjavík', lat: 64.15, lon: -21.94,
      knownFor: 'The capital and its region',
      why: ['is-lfs', 'is-pop', 'is-fin-emp', 'is-banks', 'is-ccp', 'is-genome', 'is-gfci'],
      sectors: ['Tourism', 'Banking', 'Public sector', 'Technology', 'Energy'],
      employers: [
        { name: 'Landsbankinn', note: 'bank; head office at Reykjastræti 6, Reykjavík', c: 'is-banks' },
        { name: 'Arion Bank', note: 'bank; head office at Borgartún 19, Reykjavík', c: 'is-banks' },
        { name: 'Íslandsbanki', note: 'bank; head office in Kópavogur, in the capital region', c: 'is-banks' },
        { name: 'CCP Games', note: 'games studio with an office in Reykjavík', c: 'is-ccp' },
        { name: 'Landsvirkjun', note: 'national power company; head office in Reykjavík', c: 'is-lv' },
        { t: 'Tourism businesses', note: 'about 9.5% of all hours worked in Iceland', c: 'is-tour' }
      ],
      demand: {
        finance: ['strong', 'is-fin-emp', 'is-banks'],
        software: ['present', 'is-ccp'],
        it: ['present', 'is-ccp', 'is-fin-emp'],
        business: 'gap', economics: 'gap', accounting: 'gap', management: 'gap', marketing: 'gap', logistics: 'gap',
        analytics: 'gap', datasci: 'gap', ai: 'gap', cs: 'gap', bigdata: 'gap'
      },
      finance: { banking: ['strong', 'is-fin-emp', 'is-banks'], ib: 'gap', am: 'gap', pe: 'gap', vc: 'gap', corpfin: 'gap', risk: 'gap', finconsult: 'gap' },
      standing: [
        { f: 'finance', s: [5, 1, 1], c: ['is-fin-emp', 'is-gfci'] },
        { f: 'software', s: [5, 2, 1], c: ['is-genome', 'is-pay'] },
        { f: 'it', s: [5, 2, 1], c: ['is-genome', 'is-pay'] }
      ],
      metrics: {
        pop: { v: 139804, year: 2026, area: 'city', tag: 'data', src: 'https://px.hagstofa.is/pxen/pxweb/en/Ibuar/Ibuar__mannfjoldi__2_byggdir__sveitarfelog/MAN02005.px', by: 'Statistics Iceland, MAN02005 population by municipality, Reykjavíkurborg, 1 January 2026', seen: '2026-10-03' }
      },
      programmes: []
    }
  ],

  work: [
    { k: 'Recruiting calendar', c: ['is-cal-ru', 'is-cal-arion', 'is-cal-sif'] },
    { k: 'Language', c: ['is-lang-work', 'is-lang-ccp'] },
    { k: 'Where demand is now', c: ['is-lfs', 'is-tour', 'is-fin-emp'] },
    { k: 'Entry pay', c: ['is-pay'] },
    { k: 'Graduate labour market', c: ['is-grad'] }
  ],

  briefs: [
    ['countries/is-iceland.md', 'Country brief: Reykjavík, employers, pay and standing']
  ],
  gaps: [
    'Iceland was not covered by the research library before this record.',
    'Statistics Iceland publishes no jobs or pay by sector for the capital region alone, so the hub is rated from national totals and named employers; AI, data, analytics, business and management are not rated.',
    'Tax, recruiting calendars, graduate programmes and whether employers expect Icelandic were not researched; Íslandsbanki’s head office is in Kópavogur, next to Reykjavík, not in the city.',
    'The Global Financial Centres Index lists Reykjavík only as an associate centre (too few assessments for a rank), so the hub’s European and world finance standing is a judgement from that absence.'
  ],

  claims: {
    'is-lang-work': { t: 'Work in Iceland, the Directorate of Labour’s guide, says jobs that suit someone who does not speak Icelandic will likely be advertised in English or in both languages and that searching without Icelandic is tricky; Störf and Tvinna list jobs in both languages, while Starfatorg and most other portals are mostly or entirely Icelandic.', tag: 'practitioner consensus', src: 'https://work.iceland.is/working/job-hunting/', by: 'Work in Iceland (Directorate of Labour), job hunting', seen: '2026-10-08' },
    'is-lang-ccp': { t: 'Fenris Creations (CCP Games) says English is the common language across its studios, applications are made in English and candidates are interviewed in English at least once.', tag: 'employer-stated', src: 'https://fenris.com/careers', by: 'Fenris Creations, careers and hiring process', seen: '2026-10-08' },
    'is-cal-ru': { t: 'Reykjavík University’s Career Days ran on 20 to 22 January 2026, with 61 companies and organisations on the main day, for summer jobs, future employment and project-based work.', tag: 'employer-stated', src: 'https://www.ru.is/en/news/take-a-step-towards-your-future-at-career-days-in-ru', by: 'Reykjavík University, Career Days 2026', seen: '2026-10-08' },
    'is-cal-arion': { t: 'Arion Bank’s 15-month graduate programme will next open for applications in January 2027.', tag: 'employer-stated', src: 'https://www.arionbanki.is/en/bank/hr/graduation-program', by: 'Arion Bank, graduate programme', seen: '2026-10-08' },
    'is-cal-sif': { t: 'The Student Innovation Fund’s summer grants (up to three months at ISK 340,000 a month) took applications from 19 December 2025 to 17 February 2026.', tag: 'data', src: 'https://island.is/styrkjatorg/styrkur/1-11', by: 'island.is, Summer Work for University Students in Innovation', seen: '2026-10-08' },
    'is-lfs': { t: 'In 2025, 225,700 people aged 16–74 were employed in Iceland; unemployment was 4.3%, higher in the capital region (4.9%) than elsewhere (3.2%), and 49.0% of employed 25–64-year-olds had a tertiary education.', tag: 'data', src: 'https://statice.is/publications/news-archive/labour-market/labour-market-2025/', by: 'Statistics Iceland (19 Feb 2026)', seen: '2026-10-03' },
    'is-tour': { t: 'Tourism accounted for 8.8% of Iceland’s GDP in 2025 and about 9.5% of all hours worked.', tag: 'data', src: 'https://statice.is/publications/news-archive/economy/tourism-satellite-accounts-2025', by: 'Statistics Iceland, tourism satellite accounts (26 May 2026)', seen: '2026-10-03' },
    'is-pop': { t: 'On 1 January 2026 Reykjavík city had 139,804 residents, 35% of Iceland’s 394,324; with the six neighbouring municipalities that make up the capital region (Kópavogur, Seltjarnarnes, Garðabær, Hafnarfjörður, Mosfellsbær and Kjósarhreppur) the total was 251,912, 64%.', tag: 'data', src: 'https://px.hagstofa.is/pxen/pxweb/en/Ibuar/Ibuar__mannfjoldi__2_byggdir__sveitarfelog/MAN02005.px', by: 'Statistics Iceland, MAN02005 population by municipality, 1 January 2026', seen: '2026-10-03' },
    'is-fin-emp': { t: 'Statistics Iceland’s register counts 9,104 people working in information and communication and 6,610 in finance and insurance in June 2026, of 235,518 in employment.', tag: 'data', src: 'https://px.hagstofa.is/pxen/pxweb/en/Samfelag/Samfelag__vinnumarkadur__vinnuaflskraargogn/VIN10032.px', by: 'Statistics Iceland, VIN10032 register-based employment by economic activity, June 2026 (national; not published by city)', seen: '2026-10-03' },
    'is-pay': { t: 'In 2025 full-time employees in Iceland earned a mean total of ISK 1,058 thousand a month (median 948); in information and communication the mean was ISK 1,098 thousand (median 961) and in finance and insurance ISK 1,372 thousand (median 1,176).', tag: 'data', src: 'https://px.hagstofa.is/pxen/pxweb/en/Samfelag/Samfelag__launogtekjur__1_laun__1_laun/VIN02003.px', by: 'Statistics Iceland, VIN02003 earnings by economic activity, total earnings of full-time employees, 2025', seen: '2026-10-03' },
    'is-banks': { t: 'Landsbankinn gives its address as Reykjastræti 6 and Arion Bank as Borgartún 19, both in Reykjavík; Íslandsbanki gives Hagasmári 3 in Kópavogur, in the capital region.', tag: 'employer-stated', src: 'https://www.landsbankinn.com/about-us', by: 'Landsbankinn, Arion Bank (https://www.arionbanki.is/english) and Íslandsbanki (https://www.islandsbanki.is/en/page/contact) websites', seen: '2026-10-03' },
    'is-ccp': { t: 'CCP Games says its teams work across studios in Reykjavik, London and Shanghai.', tag: 'employer-stated', src: 'https://www.ccpgames.com/careers', by: 'CCP Games careers', seen: '2026-10-03' },
    'is-lv': { t: 'Landsvirkjun, the national power company, gives its address as Katrínartún 2, Reykjavík.', tag: 'employer-stated', src: 'https://www.landsvirkjun.com/contact', by: 'Landsvirkjun contact page', seen: '2026-10-03' },
    'is-genome': { t: 'Startup Genome’s 2026 report puts the Reykjavik ecosystem’s value at $3 billion, against a European average of $14.3 billion, with $94 million of early-stage funding from H2 2023 to 2025.', tag: 'practitioner consensus', src: 'https://startupgenome.com/ecosystems/reykjavik', by: 'Startup Genome, Global Startup Ecosystem Report 2026, Reykjavik page', seen: '2026-10-03' },
    'is-gfci': { t: 'The Global Financial Centres Index 40 (September 2026) lists Reykjavik only as an associate centre, with 38 assessments in 24 months, too few for a rank; it is the only Icelandic centre assessed.', tag: 'practitioner consensus', src: 'https://www.longfinance.net/media/documents/GFCI_40_Report_2026.09.16_v1.2.pdf', by: 'Z/Yen and Long Finance, Global Financial Centres Index 40 (September 2026), table 2', seen: '2026-10-03' },
    'is-grad': { t: 'In 2025, 92.0% of Icelandic tertiary graduates aged 20–34 who finished within the last three years were in work (EU 85.3%), and unemployment among 15-to-24-year-olds was 9.5% (EU 15.2%).', tag: 'data', src: 'https://ec.europa.eu/eurostat/api/dissemination/statistics/1.0/data/edat_lfse_24?format=JSON&lang=EN&duration=Y_LE3&isced11=ED5-8&age=Y20-34&sex=T&geo=IS&geo=EU27_2020', by: 'Eurostat, edat_lfse_24 and une_rt_a, 2025 (updated 10 Sep 2026)', seen: '2026-10-03' }
  }
});

if (window.I18N) I18N.add('it', {
  'A small, highly educated labour market of about 226,000 people, where tourism is close to a tenth of the economy. EU and EEA citizens move freely. Since July 2026 non-EU students may work up to 60% of full time without a permit, and graduates get 18 months, down from three years, to find a job.':
    'Un mercato del lavoro piccolo e molto istruito di circa 226.000 persone, dove il turismo vale quasi un decimo dell’economia. I cittadini UE e SEE circolano liberamente. Da luglio 2026 gli studenti extra-UE possono lavorare fino al 60% del tempo pieno senza permesso, e i laureati hanno 18 mesi, non più tre anni, per trovare lavoro.',
  'Tourism': 'Turismo', 'Fisheries and seafood': 'Pesca e prodotti ittici', 'Energy and aluminium': 'Energia e alluminio',
  'Technology and data centres': 'Tecnologia e data center', 'Public sector': 'Settore pubblico', 'Technology': 'Tecnologia', 'Banking': 'Banca', 'Energy': 'Energia',
  'The capital and its region': 'La capitale e la sua regione',
  'bank; head office at Reykjastræti 6, Reykjavík': 'banca; sede centrale in Reykjastræti 6, Reykjavík',
  'bank; head office at Borgartún 19, Reykjavík': 'banca; sede centrale in Borgartún 19, Reykjavík',
  'bank; head office in Kópavogur, in the capital region': 'banca; sede centrale a Kópavogur, nella regione della capitale',
  'games studio with an office in Reykjavík': 'studio di videogiochi con un ufficio a Reykjavík',
  'national power company; head office in Reykjavík': 'compagnia elettrica nazionale; sede centrale a Reykjavík',
  'Tourism businesses': 'Le imprese turistiche', 'about 9.5% of all hours worked in Iceland': 'circa il 9,5% di tutte le ore lavorate in Islanda',
  'Entry pay': 'Stipendio d’ingresso', 'Graduate labour market': 'Mercato del lavoro per i laureati',
  'Country brief: Reykjavík, employers, pay and standing': 'Dossier paese: Reykjavík, datori di lavoro, stipendi e posizionamento',
  'Iceland was not covered by the research library before this record.': 'L’Islanda non era coperta dalla biblioteca di ricerca prima di questa scheda.',
  'Statistics Iceland publishes no jobs or pay by sector for the capital region alone, so the hub is rated from national totals and named employers; AI, data, analytics, business and management are not rated.':
    'L’istituto di statistica islandese non pubblica posti di lavoro o stipendi per settore per la sola regione della capitale, quindi il polo è valutato dai totali nazionali e dai datori di lavoro citati; IA, dati, analytics, business e management non sono valutati.',
  'Tax, recruiting calendars, graduate programmes and whether employers expect Icelandic were not researched; Íslandsbanki’s head office is in Kópavogur, next to Reykjavík, not in the city.':
    'Tasse, calendari delle selezioni, programmi per laureati e se i datori di lavoro si aspettano l’islandese non sono stati ricercati; la sede centrale di Íslandsbanki è a Kópavogur, accanto a Reykjavík, non in città.',
  'The Global Financial Centres Index lists Reykjavík only as an associate centre (too few assessments for a rank), so the hub’s European and world finance standing is a judgement from that absence.':
    'Il Global Financial Centres Index elenca Reykjavík solo come centro associato (troppe poche valutazioni per un posto in classifica), quindi il posizionamento europeo e mondiale del polo nella finanza è un giudizio basato su questa assenza.',
  'In 2025, 225,700 people aged 16–74 were employed in Iceland; unemployment was 4.3%, higher in the capital region (4.9%) than elsewhere (3.2%), and 49.0% of employed 25–64-year-olds had a tertiary education.':
    'Nel 2025 in Islanda lavoravano 225.700 persone tra 16 e 74 anni; la disoccupazione era al 4,3%, più alta nella regione della capitale (4,9%) che altrove (3,2%), e il 49,0% degli occupati tra 25 e 64 anni aveva un titolo terziario.',
  'Tourism accounted for 8.8% of Iceland’s GDP in 2025 and about 9.5% of all hours worked.':
    'Nel 2025 il turismo valeva l’8,8% del PIL islandese e circa il 9,5% di tutte le ore lavorate.',
  'On 1 January 2026 Reykjavík city had 139,804 residents, 35% of Iceland’s 394,324; with the six neighbouring municipalities that make up the capital region (Kópavogur, Seltjarnarnes, Garðabær, Hafnarfjörður, Mosfellsbær and Kjósarhreppur) the total was 251,912, 64%.':
    'Il 1° gennaio 2026 la città di Reykjavík contava 139.804 residenti, il 35% dei 394.324 dell’Islanda; con i sei comuni vicini che formano la regione della capitale (Kópavogur, Seltjarnarnes, Garðabær, Hafnarfjörður, Mosfellsbær e Kjósarhreppur) il totale era di 251.912, il 64%.',
  'Statistics Iceland’s register counts 9,104 people working in information and communication and 6,610 in finance and insurance in June 2026, of 235,518 in employment.':
    'Il registro dell’istituto di statistica islandese conta a giugno 2026 9.104 persone che lavorano nell’informazione e comunicazione e 6.610 in finanza e assicurazioni, su 235.518 occupati.',
  'In 2025 full-time employees in Iceland earned a mean total of ISK 1,058 thousand a month (median 948); in information and communication the mean was ISK 1,098 thousand (median 961) and in finance and insurance ISK 1,372 thousand (median 1,176).':
    'Nel 2025 i dipendenti a tempo pieno in Islanda guadagnavano in media 1.058 mila ISK al mese in totale (mediana 948); nell’informazione e comunicazione la media era di 1.098 mila ISK (mediana 961) e in finanza e assicurazioni di 1.372 mila ISK (mediana 1.176).',
  'Landsbankinn gives its address as Reykjastræti 6 and Arion Bank as Borgartún 19, both in Reykjavík; Íslandsbanki gives Hagasmári 3 in Kópavogur, in the capital region.':
    'Landsbankinn indica come indirizzo Reykjastræti 6 e Arion Bank Borgartún 19, entrambi a Reykjavík; Íslandsbanki indica Hagasmári 3 a Kópavogur, nella regione della capitale.',
  'CCP Games says its teams work across studios in Reykjavik, London and Shanghai.':
    'CCP Games dichiara che i suoi team lavorano negli studi di Reykjavik, Londra e Shanghai.',
  'Landsvirkjun, the national power company, gives its address as Katrínartún 2, Reykjavík.':
    'Landsvirkjun, la compagnia elettrica nazionale, indica come indirizzo Katrínartún 2, Reykjavík.',
  'Startup Genome’s 2026 report puts the Reykjavik ecosystem’s value at $3 billion, against a European average of $14.3 billion, with $94 million of early-stage funding from H2 2023 to 2025.':
    'Il rapporto 2026 di Startup Genome stima il valore dell’ecosistema di Reykjavik in 3 miliardi di dollari, contro una media europea di 14,3 miliardi, con 94 milioni di dollari di finanziamenti nelle fasi iniziali da H2 2023 al 2025.',
  'The Global Financial Centres Index 40 (September 2026) lists Reykjavik only as an associate centre, with 38 assessments in 24 months, too few for a rank; it is the only Icelandic centre assessed.':
    'Il Global Financial Centres Index 40 (settembre 2026) elenca Reykjavik solo come centro associato, con 38 valutazioni in 24 mesi, troppo poche per un posto in classifica; è l’unico centro islandese valutato.',
  'In 2025, 92.0% of Icelandic tertiary graduates aged 20–34 who finished within the last three years were in work (EU 85.3%), and unemployment among 15-to-24-year-olds was 9.5% (EU 15.2%).':
    'Nel 2025 il 92,0% dei laureati islandesi di 20–34 anni che avevano finito gli studi da meno di tre anni lavorava (UE 85,3%), e la disoccupazione tra i 15-24enni era del 9,5% (UE 15,2%).',
  'Work in Iceland, the Directorate of Labour’s guide, says jobs that suit someone who does not speak Icelandic will likely be advertised in English or in both languages and that searching without Icelandic is tricky; Störf and Tvinna list jobs in both languages, while Starfatorg and most other portals are mostly or entirely Icelandic.':
    'Work in Iceland, la guida della Direzione del lavoro, osserva che i lavori adatti a chi non parla islandese saranno probabilmente pubblicati in inglese o in entrambe le lingue e che cercare lavoro senza l’islandese è complicato; Störf e Tvinna pubblicano offerte in entrambe le lingue, mentre Starfatorg e la maggior parte degli altri portali sono in gran parte o del tutto in islandese.',
  'Fenris Creations (CCP Games) says English is the common language across its studios, applications are made in English and candidates are interviewed in English at least once.':
    'Fenris Creations (CCP Games) dice che l’inglese è la lingua comune nei suoi studi, che le candidature si fanno in inglese e che i candidati hanno almeno un colloquio in inglese.',
  'Reykjavík University’s Career Days ran on 20 to 22 January 2026, with 61 companies and organisations on the main day, for summer jobs, future employment and project-based work.':
    'Le Career Days della Reykjavík University si sono svolte dal 20 al 22 gennaio 2026, con 61 aziende e organizzazioni nella giornata principale, per lavori estivi, impieghi futuri e lavori su progetto.',
  'Arion Bank’s 15-month graduate programme will next open for applications in January 2027.':
    'Il programma di 15 mesi di Arion Bank per laureati aprirà le candidature la prossima volta a gennaio 2027.',
  'The Student Innovation Fund’s summer grants (up to three months at ISK 340,000 a month) took applications from 19 December 2025 to 17 February 2026.':
    'Le borse estive del Fondo per l’innovazione degli studenti (fino a tre mesi a 340.000 ISK al mese) hanno accettato domande dal 19 dicembre 2025 al 17 febbraio 2026.'
});
