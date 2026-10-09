/* How hiring works: Turkey. Extended on 8 Oct 2026 to the full schema: pages opened that day (TÜİK
 * graduate indicators via Cumhuriyet, Akbank, Koç and Turkcell programme pages, Bilkent career fair,
 * Kariyer.net Kariyer Günleri, ÖSYM KPSS calendar, Kariyer Kapısı, İŞKUR and its internship portal,
 * RehberPanda, Rivermate, Kariyer.net and Jobseeker CV advice, the Ministry of Education equivalence
 * page, the library visa guide) plus earlier reads (Hürriyet Daily News, Bianet, Kuveyt Türk, EY).
 * No survey ranks the routes; they are ranked by the programmes found. The Big Four, Garanti BBVA,
 * İş Bankası and Yapı Kredi programme pages could not be read for 2026, the EY listing read on 7 Oct is
 * no longer served, and the Kuveyt Türk and Trendyol pages date from 2018 and 2021. */
ATLAS.addEntry({
  id: 'TR',
  checked: '2026-10-08',
  review: '2027-04-08',

  lead: [
    ['In Turkey a degree no longer guarantees a job: 73.9% of bachelor’s graduates were in registered work in 2025, it took them 14.2 months on average to find a first job, and only 56.7% of those in paid work worked in their field. Large holding groups and banks run management-trainee programmes; elsewhere personal connections (tanıdık) open many doors.',
      'In Turchia una laurea non garantisce più un lavoro: il 73,9% dei laureati triennali aveva un lavoro registrato nel 2025, hanno impiegato in media 14,2 mesi per trovare il primo lavoro, e solo il 56,7% di chi aveva un lavoro retribuito lavorava nel proprio campo. I grandi gruppi holding e le banche hanno programmi per management trainee; altrove le conoscenze personali (tanıdık) aprono molte porte.', 'tr-hdn tr-cumh ours']
  ],

  ways: [
    { name: ['Management-trainee and young-talent programmes', 'Programmi per management trainee e giovani talenti'], r: 'scheme', p: 'first', basis: 'consensus', t: [
      ['No survey ranks the routes in Turkey; this is first because the large employers found recruit this way, and the competition shows it: Turkcell’s GNÇYTNK 2026 received 58,036 applications from all 208 universities and took 252 people.',
        'Nessuna indagine classifica le vie d’accesso in Turchia; questa è prima perché i grandi datori di lavoro trovati reclutano così, e la concorrenza lo mostra: il GNÇYTNK 2026 di Turkcell ha ricevuto 58.036 candidature da tutte e 208 le università e ha preso 252 persone.', 'tr-turkcell tr-turkcell2 ours'],
      ['Akbank’s management-trainee programme takes students in their 4th year, master’s students and graduates of the last year; selection is an online application, a general aptitude test, interviews with assessment-centre exercises and then training, for posts in Ankara, Istanbul and Kocaeli.',
        'Il programma per management trainee di Akbank accoglie studenti del 4° anno, studenti magistrali e laureati dell’ultimo anno; la selezione prevede candidatura online, un test di attitudine generale, colloqui con esercizi da assessment center e poi formazione, per posti ad Ankara, Istanbul e Kocaeli.', 'tr-akbank'],
      ['Koç Holding’s Genç Yetenek programme takes undergraduates from the 2nd year and graduate students, and gives priority for internships at Koç Group companies after a summit and a competency inventory.',
        'Il programma Genç Yetenek di Koç Holding accoglie studenti di laurea dal 2° anno e studenti post-laurea, e dà priorità per i tirocini nelle società del Gruppo Koç dopo un vertice e un inventario delle competenze.', 'tr-koc-gy']
    ] },
    { name: ['Personal connections (tanıdık)', 'Conoscenze personali (tanıdık)'], r: 'network', p: 'first exp', basis: 'anecdotal', t: [
      ['At smaller and family-run firms, an introduction from someone who works there opens doors that a portal application does not. This is our reading; no survey was found.',
        'Presso le aziende più piccole e familiari, la presentazione di qualcuno che ci lavora apre porte che una candidatura sul portale non apre. È una nostra lettura; non è stata trovata alcuna indagine.', 'ours']
    ] },
    { name: ['Job portals and the public employment service', 'Portali del lavoro e servizio pubblico per l’impiego'], r: 'direct', p: 'first exp', basis: 'anecdotal', t: [
      ['Graduates describe sending dozens of applications for little response: Bianet’s account quotes one who applied to more than 50 jobs and was mostly rejected because postings demanded three to five years of experience.',
        'I laureati raccontano di decine di candidature con poche risposte: il resoconto di Bianet cita una che si è candidata a più di 50 lavori ed è stata per lo più respinta perché gli annunci chiedevano da tre a cinque anni di esperienza.', 'tr-bianet'],
      ['İŞKUR, the public employment service, lets job seekers register, search open and part-time listings and get counselling; Kariyer.net runs online Career Days on 27 October 2026 for students and new graduates.',
        'L’İŞKUR, il servizio pubblico per l’impiego, permette di registrarsi, cercare annunci aperti e part-time e ricevere orientamento; Kariyer.net organizza Giornate della Carriera online il 27 ottobre 2026 per studenti e neolaureati.', 'tr-iskur tr-kn-days']
    ] },
    { name: ['Career fairs at universities', 'Fiere della carriera nelle università'], r: 'campus', p: 'first intern', basis: 'anecdotal', t: [
      ['Bilkent University’s 28th Career Fair on 17–18 February 2026 listed 71 employers, among them Akbank, Garanti BBVA, Kuveyt Türk, Turkcell, Yapı Kredi, Ziraat Bankası, Türkiye İş Bankası, TUSAŞ, Beko and Nestlé Türkiye.',
        'La 28ª Fiera della Carriera della Bilkent University, il 17–18 febbraio 2026, ha elencato 71 datori di lavoro, tra cui Akbank, Garanti BBVA, Kuveyt Türk, Turkcell, Yapı Kredi, Ziraat Bankası, Türkiye İş Bankası, TUSAŞ, Beko e Nestlé Türkiye.', 'tr-bilkent']
    ] },
    { name: ['Internships, including the National Internship Program', 'Tirocini, compreso il Programma nazionale di tirocinio'], r: 'intern', p: 'first intern', basis: 'consensus', t: [
      ['The National Internship Program, run by İŞKUR under the Presidency’s patronage, lets university students intern at public bodies and private companies across Turkey; the Presidency’s Kariyer Kapısı portal links to it.',
        'Il Programma nazionale di tirocinio, gestito dall’İŞKUR sotto il patrocinio della Presidenza, permette agli studenti universitari di fare tirocinio presso enti pubblici e aziende private in tutta la Turchia; il portale Kariyer Kapısı della Presidenza vi rimanda.', 'tr-staj tr-kk'],
      ['Koç’s programme routes participants into Koç Group internships and an Experience Programme that start in July.',
        'Il programma di Koç indirizza i partecipanti verso tirocini nel Gruppo Koç e un Programma Esperienza che iniziano a luglio.', 'tr-koc-gy']
    ] },
    { name: ['Public-sector exams and state-bank recruitment', 'Concorsi pubblici e reclutamento nelle banche statali'], r: 'public', p: 'first exp', basis: 'consensus', t: [
      ['The public personnel selection exam (KPSS) is run by ÖSYM in separate sessions for graduates, associate-degree holders and secondary-school leavers; the 2026 graduate session had exams on 6, 12 and 13 September and results on 7 October.',
        'L’esame di selezione del personale pubblico (KPSS) è gestito dall’ÖSYM in sessioni separate per laureati, titolari di diploma biennale e diplomati; la sessione 2026 per i laureati ha avuto gli esami il 6, 12 e 13 settembre e i risultati il 7 ottobre.', 'tr-kpss'],
      ['Ziraat, Halkbank and Vakıfbank are not in the KPSS preference guide: they hire through their own announcements, written exams and interviews, and Ziraat’s 2026 posts did not ask for KPSS or ALES. Its spring 2026 call had 20 inspector-assistant posts, with a written exam on 10 May.',
        'Ziraat, Halkbank e Vakıfbank non compaiono nella guida alle preferenze del KPSS: assumono con propri bandi, esami scritti e colloqui, e i posti 2026 di Ziraat non richiedevano KPSS né ALES. Il bando di primavera 2026 aveva 20 posti da assistente ispettore, con esame scritto il 10 maggio.', 'tr-panda']
    ] }
  ],

  cycle: [
    ['Spring is the main window: Akbank’s management-trainee applications closed on 30 March 2026, Koç’s Genç Yetenek ran from 26 March to 19 April 2026 with a summit on 5 May, results on 15 June and a start in July, and Turkcell’s GNÇYTNK evaluation began in January.',
      'La primavera è la finestra principale: le candidature al programma management trainee di Akbank sono chiuse il 30 marzo 2026, il Genç Yetenek di Koç si è svolto dal 26 marzo al 19 aprile 2026 con un vertice il 5 maggio, i risultati il 15 giugno e un inizio a luglio, e la valutazione del GNÇYTNK di Turkcell è iniziata a gennaio.', 'tr-akbank tr-koc-gy tr-turkcell2'],
    ['Fairs fall in winter and autumn: Bilkent’s was on 17–18 February 2026, and Kariyer.net’s online Career Days are on 27 October 2026.',
      'Le fiere cadono in inverno e in autunno: quella della Bilkent era il 17–18 febbraio 2026, e le Giornate della Carriera online di Kariyer.net sono il 27 ottobre 2026.', 'tr-bilkent tr-kn-days'],
    ['Public posts follow ÖSYM’s calendar: the 2026 graduate KPSS exams were in September with results on 7 October, and placement preferences for the second round run from 17 to 24 December 2026.',
      'I posti pubblici seguono il calendario dell’ÖSYM: gli esami KPSS 2026 per i laureati si sono tenuti a settembre con risultati il 7 ottobre, e le preferenze di assegnazione per il secondo turno vanno dal 17 al 24 dicembre 2026.', 'tr-kpss']
  ],

  schools: [
    ['Bilkent University’s fair draws banks, defence, industrial and tech employers to its main campus; Istanbul’s technical universities (ITU, Boğaziçi) and METU in Ankara are the usual sources for tech firms. This is our reading for the latter; we found no ranking of schools by employers.',
      'La fiera della Bilkent University porta nel suo campus principale banche, difesa, industria e aziende tecnologiche; le università tecniche di Istanbul (ITU, Boğaziçi) e la METU di Ankara sono le fonti abituali per le aziende tech. Per queste ultime è una nostra lettura; non abbiamo trovato alcuna classifica delle scuole da parte dei datori di lavoro.', 'tr-bilkent ours'],
    ['Turkcell took applications from all 208 universities for GNÇYTNK 2026, and Koç’s programme is open to undergraduates from the 2nd year; neither names a school.',
      'Turkcell ha ricevuto candidature da tutte e 208 le università per il GNÇYTNK 2026, e il programma di Koç è aperto agli studenti di laurea dal 2° anno; nessuno dei due indica una scuola.', 'tr-turkcell tr-koc-gy']
  ],

  events: [
    ['Kariyer.net Career Days: 27 October 2026, 11:00 to 17:00, fully online and free, for university students, new graduates and young talent; you must upload a CV and send the first message to a company.',
      'Giornate della Carriera di Kariyer.net: 27 ottobre 2026, dalle 11:00 alle 17:00, interamente online e gratuite, per studenti universitari, neolaureati e giovani talenti; bisogna caricare un CV e inviare per primi il messaggio a un’azienda.', 'tr-kn-days'],
    ['Bilkent University Career Fair: 17–18 February 2026, about 70 companies, run by its Career and Alumni Office.',
      'Fiera della Carriera della Bilkent University: 17–18 febbraio 2026, circa 70 aziende, organizzata dal suo Career and Alumni Office.', 'tr-bilkent'],
    ['Koç Kariyer Zirvesi: 5 May 2026 in Istanbul, a one-day summit for selected Genç Yetenek applicants, free of charge.',
      'Koç Kariyer Zirvesi: 5 maggio 2026 a Istanbul, un vertice di un giorno per i candidati selezionati del Genç Yetenek, gratuito.', 'tr-koc-gy']
  ],

  fields: [
    { f: 'business', t: [
      ['Koç Holding’s Genç Yetenek programme covers the Koç Group’s companies; Turkcell’s GNÇYTNK hired 252 young people in 2026 into full-time and part-time roles.',
        'Il programma Genç Yetenek di Koç Holding copre le società del Gruppo Koç; il GNÇYTNK di Turkcell ha assunto 252 giovani nel 2026 in ruoli a tempo pieno e part-time.', 'tr-koc-gy tr-turkcell']
    ] },
    { f: 'finance', t: [
      ['The private banks (Akbank, Garanti BBVA, İş Bankası, Yapı Kredi, QNB) and participation banks such as Kuveyt Türk recruit final-year students and new graduates into management-trainee programmes with exams and fluent English.',
        'Le banche private (Akbank, Garanti BBVA, İş Bankası, Yapı Kredi, QNB) e le banche partecipative come Kuveyt Türk reclutano studenti dell’ultimo anno e neolaureati in programmi da management trainee con esami e un inglese fluente.', 'tr-kuveyt tr-panda'],
      ['Kuveyt Türk’s programme page (from 2018) starts with an English exam, then an evaluation centre with a simulation, presentation, group work and technical exam, then a panel with senior management.',
        'La pagina del programma di Kuveyt Türk (del 2018) parte con un esame di inglese, poi un centro di valutazione con simulazione, presentazione, lavoro di gruppo ed esame tecnico, poi un panel con la direzione.', 'tr-kuveyt'],
      ['The state banks recruit separately: Ziraat’s written exam includes English, and its 2026 call for 20 inspector-assistants set a birth-year limit of 1 January 1996 or later.',
        'Le banche statali reclutano a parte: l’esame scritto di Ziraat comprende l’inglese, e il suo bando 2026 per 20 assistenti ispettori fissava un limite di nascita al 1° gennaio 1996 o dopo.', 'tr-panda']
    ] },
    { f: 'accounting', t: [
      ['EY Türkiye recruits final-year students graduating in June, and recent graduates with 0 to 2 years of experience, in audit, advisory, tax and corporate finance (TAS); the 2026 listings we read (no longer online) named Istanbul, Ankara and Adana and asked for Turkish and English. We read no page for the other Big Four firms.',
        'EY Türkiye recluta studenti dell’ultimo anno che si laureano a giugno, e neolaureati con da 0 a 2 anni di esperienza, in revisione, advisory, fisco e corporate finance (TAS); gli annunci 2026 che abbiamo letto (non più online) indicavano Istanbul, Ankara e Adana e chiedevano turco e inglese. Non abbiamo letto pagine delle altre Big Four.', 'tr-ey tr-ey-yt']
    ] },
    { f: 'tech', t: [
      ['Turkcell’s GNÇYTNK added a data-centre Talent Camp with Google Cloud in 2026, with about three months of technical training.',
        'Il GNÇYTNK di Turkcell ha aggiunto nel 2026 un Talent Camp sui data center con Google Cloud, con circa tre mesi di formazione tecnica.', 'tr-turkcell'],
      ['Tech firms such as Trendyol mostly hire developers with experience: its 2021 backend hiring day asked for at least three years, with a 90-minute Codility test and then technical and HR interviews; junior roles exist but are few, and Istanbul’s technical universities (ITU, Boğaziçi, METU in Ankara) are the usual sources.',
        'Aziende tech come Trendyol assumono soprattutto sviluppatori con esperienza: il suo hiring day per backend del 2021 chiedeva almeno tre anni, con un test Codility di 90 minuti e poi colloqui tecnici e con le risorse umane; i ruoli junior esistono ma sono pochi, e le università tecniche di Istanbul (ITU, Boğaziçi, METU ad Ankara) sono le fonti abituali.', 'tr-trendyol ours']
    ] },
    { f: 'public', t: [
      ['The Presidency’s Kariyer Kapısı portal carries public-sector job announcements and the National Internship Program; civil-service posts go through KPSS, state banks through their own exams.',
        'Il portale Kariyer Kapısı della Presidenza pubblica gli annunci di lavoro del settore pubblico e il Programma nazionale di tirocinio; i posti nella funzione pubblica passano dal KPSS, le banche statali da esami propri.', 'tr-kk tr-kpss tr-panda']
    ] }
  ],

  customs: [
    { k: 'season', v: 'cyclical', t: [
      ['The main programmes recruit in spring (Akbank to 30 March, Koç to 19 April), fairs fall in February and October and public exams follow ÖSYM’s calendar; there is no single national season.',
        'I principali programmi reclutano in primavera (Akbank fino al 30 marzo, Koç fino al 19 aprile), le fiere cadono a febbraio e a ottobre e gli esami pubblici seguono il calendario dell’ÖSYM; non c’è un’unica stagione nazionale.', 'tr-akbank tr-koc-gy tr-bilkent tr-kn-days tr-kpss']
    ] },
    { k: 'masters', v: 'irrelevant', t: [
      ['Akbank takes 4th-year students, master’s students and recent graduates alike, and Koç takes undergraduates from the 2nd year and graduate students, so a master’s is not what decides.',
        'Akbank accoglie studenti del 4° anno, studenti magistrali e neolaureati allo stesso modo, e Koç accoglie studenti di laurea dal 2° anno e studenti post-laurea, quindi la laurea magistrale non è decisiva.', 'tr-akbank tr-koc-gy']
    ] },
    { k: 'degrees', v: 'regulated', t: [
      ['YÖK, the Council of Higher Education, carries out recognition and equivalence of foreign degrees; the Ministry of Education says the equivalence certificate is compulsory for health-field graduates and for practising a profession on the basis of a foreign programme. The pages read do not say employers in other fields ask for it.',
        'Lo YÖK, il Consiglio dell’istruzione superiore, svolge il riconoscimento e l’equipollenza dei titoli esteri; il Ministero dell’Istruzione dice che il certificato di equipollenza è obbligatorio per i laureati dell’area sanitaria e per esercitare una professione sulla base di un programma estero. Le pagine lette non dicono che i datori di lavoro di altri settori lo chiedano.', 'tr-meb ours']
    ] },
    { k: 'brand', v: 'some', t: [
      ['Kuveyt Türk’s 2018 programme page targeted graduates of “the leading Turkish universities”, while Turkcell took applications from all 208 universities; no ranking of schools by employers was found. This is our reading.',
        'La pagina del programma di Kuveyt Türk del 2018 si rivolgeva ai laureati delle «principali università turche», mentre Turkcell ha ricevuto candidature da tutte e 208 le università; non è stata trovata alcuna classifica delle scuole da parte dei datori di lavoro. È una nostra lettura.', 'tr-kuveyt tr-turkcell ours']
    ] },
    { k: 'dual', v: 'little', t: [
      ['We found no dual-study or apprenticeship route into graduate jobs; the structured routes are management-trainee programmes and internships, including the National Internship Program. This is our reading.',
        'Non abbiamo trovato vie di studio duale o apprendistato verso i lavori per laureati; le vie strutturate sono i programmi per management trainee e i tirocini, compreso il Programma nazionale di tirocinio. È una nostra lettura.', 'tr-staj ours']
    ] },
    { k: 'publicw', v: 'high', t: [
      ['ÖSYM runs KPSS in three degree levels, the Presidency’s portal carries public job announcements, and the state banks hire through their own exams; we found no figure for the public sector’s share of graduate hires, so the weight is our reading.',
        'L’ÖSYM gestisce il KPSS su tre livelli di titolo, il portale della Presidenza pubblica annunci di lavoro pubblici e le banche statali assumono con esami propri; non abbiamo trovato una cifra sulla quota del settore pubblico nelle assunzioni di laureati, quindi il peso è una nostra lettura.', 'tr-kpss tr-kk ours']
    ] },
    { k: 'sponsorr', v: 'rare', t: [
      ['A foreign hire needs the employer to show five Turkish full-time insured staff per foreign worker, share capital of TRY 500,000 (or turnover or export thresholds) and pay at one to five times the minimum wage by role; micro-firms are rejected. Few graduate programmes look built for foreign hires. See Visas for the rules.',
        'Un’assunzione straniera richiede che il datore di lavoro dimostri cinque dipendenti turchi a tempo pieno assicurati per ogni lavoratore straniero, un capitale sociale di 500.000 TRY (oppure soglie di fatturato o di export) e una retribuzione da una a cinque volte il salario minimo secondo il ruolo; le microimprese vengono respinte. Pochi programmi per neolaureati sembrano costruiti per assunzioni straniere. Vedi Visti per le regole.', 'tr-visa ours']
    ] },
    { k: 'photo', v: 'common', t: [
      ['Kariyer.net says employers and HR specialists look at the photo on a CV and advises a clear, recent, plain-background portrait without selfies or filters; it does not call it compulsory.',
        'Kariyer.net dice che i datori di lavoro e gli specialisti delle risorse umane guardano la foto sul CV e consiglia un ritratto nitido, recente, con sfondo semplice, senza selfie né filtri; non la definisce obbligatoria.', 'tr-kn-photo']
    ] },
    { k: 'cv', v: 'one', t: [
      ['Jobseeker says one A4 page is quite natural for students, new graduates and people with little experience, with two pages the general maximum, and that recruiters see it as normal.',
        'Jobseeker dice che una pagina A4 è del tutto naturale per studenti, neolaureati e persone con poca esperienza, con due pagine come massimo generale, e che i selezionatori la considerano normale.', 'tr-js-cv']
    ] },
    { k: 'letter', v: 'optional', t: [
      ['The programme flows read (Akbank, Koç, Turkcell) run on an online form, tests and an inventory, with no cover letter mentioned. This is our reading.',
        'I percorsi dei programmi letti (Akbank, Koç, Turkcell) si basano su un modulo online, test e un inventario, senza alcuna lettera di presentazione menzionata. È una nostra lettura.', 'tr-akbank tr-koc-gy ours']
    ] },
    { k: 'refs', v: 'later', t: [
      ['None of the programme pages read asks for references with the application. This is our reading.',
        'Nessuna delle pagine dei programmi lette chiede referenze con la candidatura. È una nostra lettura.', 'ours']
    ] },
    { k: 'docs', v: 'copies', t: [
      ['The programme pages read do not ask for certified or translated copies with the application; a foreign degree goes to YÖK for equivalence where that is needed. This is our reading.',
        'Le pagine dei programmi lette non chiedono copie certificate o tradotte con la candidatura; un titolo estero va allo YÖK per l’equipollenza quando serve. È una nostra lettura.', 'tr-meb ours']
    ] },
    { k: 'salary', v: 'later', t: [
      ['None of the programme pages read states a salary or asks for an expectation; RehberPanda declines to give pay bands because unsourced ones mislead. This is our reading.',
        'Nessuna delle pagine dei programmi lette indica uno stipendio o chiede una pretesa; RehberPanda rinuncia a dare fasce retributive perché quelle senza fonte ingannano. È una nostra lettura.', 'tr-panda ours']
    ] },
    { k: 'check', v: 'some', t: [
      ['Some programmes screen by profile: Turkcell’s GNÇYTNK asks for third- and fourth-year students or graduates with at most two years of experience, and Ziraat’s inspector call set a birth-year limit; we found nothing on routine reference checks.',
        'Alcuni programmi selezionano per profilo: il GNÇYTNK di Turkcell chiede studenti del terzo e quarto anno o laureati con al massimo due anni di esperienza, e il bando da ispettore di Ziraat fissava un limite di anno di nascita; non abbiamo trovato nulla sui controlli di routine delle referenze.', 'tr-turkcell2 tr-panda']
    ] },
    { k: 'contact', v: 'mixed', t: [
      ['Portals and programmes take open applications, while smaller firms lean on introductions. This is our reading.',
        'I portali e i programmi accettano candidature aperte, mentre le piccole aziende si affidano alle presentazioni. È una nostra lettura.', 'tr-akbank ours']
    ] },
    { k: 'abroad', v: 'hard', t: [
      ['Akbank’s trainee post is fully on-site, Koç’s summit is a one-day event in Istanbul, and the public routes run through Turkish-language exams; a foreign hire cannot work on a tourist status and needs a work permit started through a Turkish consulate. This is our reading.',
        'Il posto da trainee di Akbank è interamente in sede, il vertice di Koç è un evento di un giorno a Istanbul, e le vie pubbliche passano da esami in turco; un assunto straniero non può lavorare con status turistico e ha bisogno di un permesso di lavoro avviato tramite un consolato turco. È una nostra lettura.', 'tr-akbank tr-koc-gy tr-visa ours']
    ] },
    { k: 'language', v: 'local', t: [
      ['Turkish for nearly all roles; English is an asset in multinationals and is tested in the banks (Kuveyt Türk’s English exam, English questions in Ziraat’s written exam, where 60% is the pass mark for that section).',
        'Il turco per quasi tutti i ruoli; l’inglese è un vantaggio nelle multinazionali ed è verificato nelle banche (l’esame di inglese di Kuveyt Türk, le domande di inglese nell’esame scritto di Ziraat, dove il 60% è la soglia per quella sezione).', 'tr-kuveyt tr-panda ours']
    ] }
  ],

  rows: {
    process: [
      ['Akbank’s trainee process is an online application, a general aptitude test, interviews with assessment-centre exercises, then training; Kuveyt Türk’s (2018 page) starts with an English exam, then an evaluation centre and a panel. RehberPanda describes private-bank programmes as an online application, numerical-verbal-logical tests, an English assessment and an interview, sometimes with a group exercise and presentation.',
        'Il processo da trainee di Akbank prevede candidatura online, un test di attitudine generale, colloqui con esercizi da assessment center, poi formazione; quello di Kuveyt Türk (pagina del 2018) parte con un esame di inglese, poi un centro di valutazione e un panel. RehberPanda descrive i programmi delle banche private come candidatura online, test numerico-verbali-logici, una valutazione dell’inglese e un colloquio, a volte con esercizio di gruppo e presentazione.', 'tr-akbank tr-kuveyt tr-panda'],
      ['Koç’s timeline in 2026: applications 26 March to 19 April, evaluation 19 to 27 April, summit on 5 May, a Korn Ferry competency inventory within two days, results on 15 June and a start in July.',
        'Le tappe di Koç nel 2026: candidature dal 26 marzo al 19 aprile, valutazione dal 19 al 27 aprile, vertice il 5 maggio, un inventario di competenze Korn Ferry entro due giorni, risultati il 15 giugno e inizio a luglio.', 'tr-koc-gy'],
      ['Trendyol’s 2021 hiring day ran a 90-minute online Codility test, then technical and HR interviews on one online day, with offers after. We did not establish typical time from application to offer for the banks, interview dress norms or how common video interviews are.',
        'L’hiring day di Trendyol del 2021 prevedeva un test Codility online di 90 minuti, poi colloqui tecnici e con le risorse umane in un’unica giornata online, con offerte dopo. Non abbiamo stabilito i tempi abituali tra candidatura e offerta per le banche, le norme sull’abbigliamento né quanto siano diffusi i colloqui in video.', 'tr-trendyol ours']
    ],
    offer: [
      ['Probation is at most two months (four by collective agreement) and either side can end the contract during it without notice or severance; written contracts are mandatory for terms of a year or more.',
        'La prova dura al massimo due mesi (quattro con contratto collettivo) e in questo periodo ciascuna parte può risolvere il contratto senza preavviso né indennità; i contratti scritti sono obbligatori per durate di un anno o più.', 'tr-riv'],
      ['Notice is 2 weeks under 6 months of service, 4 weeks to 1.5 years, 6 weeks to 3 years and 8 weeks beyond; severance of 30 days of gross pay per full year is owed after one year. The legal week is a maximum of 45 hours.',
        'Il preavviso è di 2 settimane sotto i 6 mesi di servizio, 4 settimane fino a 1,5 anni, 6 settimane fino a 3 anni e 8 settimane oltre; dopo un anno è dovuta un’indennità di 30 giorni di retribuzione lorda per ogni anno intero. La settimana legale è di 45 ore al massimo.', 'tr-riv'],
      ['The library’s visa guide records the 2026 gross minimum wage as TRY 33,030 a month. State-bank staff are not on the civil-servant pay scale: pay and benefits follow each bank’s own staff rules. We did not establish whether graduates negotiate, a thirteenth-month practice, or how long employers give to decide.',
        'La guida ai visti della libreria riporta il salario minimo lordo 2026 in 33.030 TRY al mese. Il personale delle banche statali non rientra nella scala retributiva dei dipendenti pubblici: stipendio e benefici seguono le regole interne di ciascuna banca. Non abbiamo stabilito se i neolaureati negoziano, se esista la prassi della tredicesima o quanto tempo i datori di lavoro concedono per decidere.', 'tr-visa tr-panda ours']
    ],
    sponsor: [
      ['A foreign hire starts at a Turkish consulate with a signed contract and legalised degree, which issues a reference code; within 10 working days the employer files on e-İzin. The statutory time is 30 days, in practice 6 to 10 weeks. EU citizens cannot work on a tourist status or apply from inside Turkey without a residence permit of at least 6 months.',
        'Un’assunzione straniera parte da un consolato turco con contratto firmato e titolo di studio legalizzato, che rilascia un codice di riferimento; entro 10 giorni lavorativi il datore di lavoro presenta la pratica su e-İzin. Il termine di legge è di 30 giorni, nella pratica da 6 a 10 settimane. I cittadini UE non possono lavorare con status turistico né presentare domanda dall’interno della Turchia senza un permesso di soggiorno di almeno 6 mesi.', 'tr-visa'],
      ['The employer must show five insured Turkish staff per foreign worker and capital of TRY 500,000 (or turnover of TRY 8,000,000 or exports of USD 150,000), and pay at least the minimum wage multiple for the role (1× for ordinary staff, 2× specialists, 4× engineers and architects). The Turquoise Card is a points-based route for the highly qualified.',
        'Il datore di lavoro deve dimostrare cinque dipendenti turchi assicurati per ogni lavoratore straniero e un capitale di 500.000 TRY (oppure un fatturato di 8.000.000 TRY o esportazioni di 150.000 USD), e pagare almeno il multiplo del salario minimo previsto per il ruolo (1× per il personale ordinario, 2× per gli specialisti, 4× per ingegneri e architetti). La Turquoise Card è una via a punti per i profili altamente qualificati.', 'tr-visa'],
      ['Ask early and ask whether the employer has filed for a foreigner before; large groups and banks have the staff to do it. This is our reading.',
        'Chiedete presto e domandate se il datore di lavoro ha già presentato una pratica per uno straniero; i grandi gruppi e le banche hanno il personale per farlo. È una nostra lettura.', 'ours']
    ],
    where: [
      ['Portals and public services: Kariyer.net (with online Career Days), İŞKUR (esube.iskur.gov.tr and the staj.iskur.gov.tr internship portal) and the Presidency’s Kariyer Kapısı (Kamu İş İlanları and the National Internship Program).',
        'Portali e servizi pubblici: Kariyer.net (con Giornate della Carriera online), l’İŞKUR (esube.iskur.gov.tr e il portale di tirocinio staj.iskur.gov.tr) e il Kariyer Kapısı della Presidenza (Kamu İş İlanları e il Programma nazionale di tirocinio).', 'tr-kn-days tr-iskur tr-staj tr-kk'],
      ['Employer programmes: Akbank’s management-trainee programme, Koç Holding’s Genç Yetenek, Turkcell’s GNÇYTNK and the Kuveyt Türk management-trainee page.',
        'Programmi dei datori di lavoro: il programma management trainee di Akbank, il Genç Yetenek di Koç Holding, il GNÇYTNK di Turkcell e la pagina management trainee di Kuveyt Türk.', 'tr-akbank tr-koc-gy tr-turkcell tr-kuveyt'],
      ['Public exams: ÖSYM (osym.gov.tr) for KPSS applications through its candidate system; the state banks’ own announcements.',
        'Esami pubblici: l’ÖSYM (osym.gov.tr) per le domande KPSS tramite il suo sistema per i candidati; i bandi propri delle banche statali.', 'tr-kpss tr-panda'],
      ['University career offices and fairs: Bilkent’s Career and Alumni Office runs the February fair.',
        'Uffici carriera e fiere universitarie: il Career and Alumni Office della Bilkent organizza la fiera di febbraio.', 'tr-bilkent']
    ],
    mistakes: [
      ['Waiting for the summer: the main trainee windows close in spring (Akbank 30 March, Koç 19 April), so the application comes the year before you graduate.',
        'Aspettare l’estate: le principali finestre per i trainee chiudono in primavera (Akbank il 30 marzo, Koç il 19 aprile), quindi la candidatura va fatta l’anno prima della laurea.', 'tr-akbank tr-koc-gy'],
      ['Treating English as a formality in banking: Kuveyt Türk starts with an English exam, and Ziraat’s written exam has 40 English questions out of 140.',
        'Trattare l’inglese come una formalità nelle banche: Kuveyt Türk parte con un esame di inglese, e l’esame scritto di Ziraat ha 40 domande di inglese su 140.', 'tr-kuveyt tr-panda'],
      ['Assuming the state banks use KPSS: Ziraat, Halkbank and Vakıfbank hire through their own announcements, and Ziraat’s 2026 posts did not ask for KPSS or ALES.',
        'Dare per scontato che le banche statali usino il KPSS: Ziraat, Halkbank e Vakıfbank assumono con propri bandi, e i posti 2026 di Ziraat non richiedevano KPSS né ALES.', 'tr-panda'],
      ['Sending a long CV: Jobseeker says one page is natural for new graduates and two the maximum.',
        'Inviare un CV lungo: Jobseeker dice che una pagina è naturale per i neolaureati e due il massimo.', 'tr-js-cv'],
      ['Expecting to start as a tourist: an EU citizen cannot work on a tourist status or convert it in Turkey, and the permit starts at a Turkish consulate.',
        'Aspettarsi di iniziare da turista: un cittadino UE non può lavorare con status turistico né convertirlo in Turchia, e il permesso parte da un consolato turco.', 'tr-visa']
    ]
  },

  lang: [
    { f: 'finance', v: 'bilingual', lv: 'Turkish plus tested English', t: [
      ['Kuveyt Türk’s trainee process starts with an English exam and only those who pass reach the evaluation centre (2018 page); Ziraat’s written exam has 40 English questions out of 140 with a 60% threshold for that section.',
        'Il processo da trainee di Kuveyt Türk parte con un esame di inglese e solo chi lo supera arriva al centro di valutazione (pagina del 2018); l’esame scritto di Ziraat ha 40 domande di inglese su 140 con una soglia del 60% per quella sezione.', 'tr-kuveyt tr-panda'],
      ['Akbank’s 2026 trainee page does not mention an English exam; its pages are in Turkish.',
        'La pagina trainee 2026 di Akbank non menziona un esame di inglese; le sue pagine sono in turco.', 'tr-akbank']
    ] },
    { f: 'accounting', v: 'bilingual', lv: 'Turkish and English', t: [
      ['EY Türkiye’s 2026 audit and consulting graduate listings (no longer online) asked for Turkish and English; we read no page for the other Big Four firms.',
        'Gli annunci 2026 di EY Türkiye per laureati in revisione e consulenza (non più online) chiedevano turco e inglese; non abbiamo letto pagine delle altre Big Four.', 'tr-ey']
    ] },
    { f: 'tech', v: 'local', lv: 'Turkish (level not stated)', t: [
      ['Turkcell’s GNÇYTNK and Trendyol’s hiring day state no English requirement; their pages and processes are in Turkish and, for Trendyol, an online test and interviews. This is our reading.',
        'Il GNÇYTNK di Turkcell e l’hiring day di Trendyol non indicano alcun requisito di inglese; le loro pagine e i loro processi sono in turco e, per Trendyol, un test online e colloqui. È una nostra lettura.', 'tr-turkcell2 tr-trendyol ours']
    ] }
  ],

  programmes: [
    { n: 'Yönetici Adayı Programı (management trainee)', o: 'Akbank', f: 'finance', in: null, w: null, lang: 'n/s', intl: 'unknown', ids: 'tr-akbank' },
    { n: 'Genç Yetenek Programı', o: 'Koç Holding', f: 'business', in: null, w: [3, 4], lang: 'n/s', intl: 'unknown', ids: 'tr-koc-gy' },
    { n: 'GNÇYTNK (young talent, full time and part time)', o: 'Turkcell', f: 'tech', in: 252, w: null, lang: 'n/s', intl: 'unknown', ids: 'tr-turkcell tr-turkcell2' },
    { n: 'Management Trainee', o: 'Kuveyt Türk', f: 'finance', in: null, w: null, lang: 'TR EN', intl: 'unknown', ids: 'tr-kuveyt' },
    { n: 'Inspector assistant', o: 'Ziraat Bankası', f: 'finance', in: 20, w: null, lang: 'TR EN', intl: 'unknown', ids: 'tr-panda' }
  ],

  outcomes: [
    ['TÜİK’s 2025 figures show 73.9% of bachelor’s graduates in registered employment (down from 2024), 14.2 months on average to a first job and 56.7% of paid-employed graduates working in a job matching their field. We found no return-offer or conversion rate for Turkey.',
      'I dati TÜİK del 2025 mostrano il 73,9% dei laureati triennali con un impiego registrato (in calo rispetto al 2024), in media 14,2 mesi per il primo lavoro e il 56,7% dei laureati con lavoro retribuito impiegato in un lavoro coerente con il proprio campo. Non abbiamo trovato alcun tasso di conferma o conversione per la Turchia.', 'tr-hdn tr-cumh'],
    ['Graduates are often turned down because postings demand years of experience, and young women face far higher unemployment than young men: Bianet reports 16.2% youth unemployment in June 2025, 12.3% for men and 23.7% for women.',
      'I laureati vengono spesso respinti perché gli annunci chiedono anni di esperienza, e le giovani donne affrontano una disoccupazione molto più alta dei giovani uomini: Bianet riporta una disoccupazione giovanile del 16,2% a giugno 2025, il 12,3% per gli uomini e il 23,7% per le donne.', 'tr-bianet']
  ],

  sources: {
    'tr-hdn': ['data', 'Hürriyet Daily News: graduate employment declines slightly in Türkiye (TÜİK higher-education indicators 2025, 23 July 2026)', 'https://www.hurriyetdailynews.com/graduate-employment-declines-slightly-in-turkiye-official-data-224710', '2026-10-08'],
    'tr-cumh': ['data', 'Cumhuriyet: TÜİK 2025 higher-education employment indicators (23 July 2026)', 'https://www.cumhuriyet.com.tr/ekonomi/tuik-2025-yuksekogretim-istihdam-gostergelerini-acikladi-en-cok-kazandiran-ve-en-hizli-is-bulan-bolumler-belli-oldu-2523191', '2026-10-08'],
    'tr-bianet': ['anecdotal', 'Bianet: university graduates face unemployment, low wages and work outside their field (12 August 2025)', 'https://bianet.org/haber/university-graduates-face-unemployment-low-wages-and-work-outside-their-field-310330', '2026-10-08'],
    'tr-kuveyt': ['employer-stated', 'Kuveyt Türk: looks for the executives of tomorrow (management trainee programme, page dated 2018)', 'https://www.kuveytturk.com.tr/en/about-us/about-kuveyt-turk/news/kuveyt-turk-looks-for-the-executives-of-tomorrow', '2026-10-08'],
    'tr-panda': ['practitioner consensus', 'RehberPanda: becoming a banker in 2026, complete career guide (bank MT programmes, state-bank exams)', 'https://rehberpanda.com/blog/2026-bankaci-olma-komple-kariyer-rehberi-turk-bankacilik-devlet-ozel-banka-mufettis-cfa-frm-fintech-yurt-disi-maas-bant/', '2026-10-08'],
    'tr-ey': ['employer-stated', 'EY Türkiye: graduate programme listings (iAgora; page no longer online; read 7 October 2026)', 'https://www.iagora.com/work/en/offer/graduate-programme-turkey-management/5851166', '2026-10-07'],
    'tr-ey-yt': ['practitioner consensus', 'Youthall: EY Türkiye New Graduate programme (service lines, eligibility, application period January to May)', 'https://www.youthall.com/tr/talent-programs/ey-turkiye-new-graduate', '2026-10-09'],
    'tr-trendyol': ['employer-stated', 'Coderspace: Trendyol backend developer hiring day (September 2021; at least three years of experience)', 'https://coderspace.io/en/events/trendyol-backend-developer-hiring-day/', '2026-10-08'],
    'tr-akbank': ['employer-stated', 'AnBean Kampüs: Akbank Yönetici Adayı Programı 2026 (closed 30 March 2026)', 'https://anbeankampus.co/akbank/akbank-yonetici-adayi-programi-2026/', '2026-10-08'],
    'tr-koc-gy': ['employer-stated', 'AnBean Kampüs: Koç Genç Yetenek Programı 2026 (applications 26 March to 19 April)', 'https://anbeankampus.co/koc-holding/koc-genc-yetenek-programi/', '2026-10-08'],
    'tr-turkcell': ['practitioner consensus', 'Dünya: Turkcell GNÇYTNK 2026, 58,036 applications and 252 hired (7 August 2026)', 'https://dunya.com/sirketler/turkcelle-rekor-ilgi-58-bin-basvuru-arasindan-secilen-252-genc-ise-basladi-haberi-835348', '2026-10-08'],
    'tr-turkcell2': ['practitioner consensus', 'Yeni Birlik: Turkcell’s GNÇYTNK 2026 programme completed', 'https://www.gazetebirlik.com/teknoloji/turkcellin-gncytnk-2026-programi-tamamlandi/1061263', '2026-10-08'],
    'tr-bilkent': ['employer-stated', 'Bilkent University: 28th Career Fair, 17–18 February 2026', 'https://w3.bilkent.edu.tr/bilkent/?p=26476', '2026-10-08'],
    'tr-kn-days': ['employer-stated', 'Kariyer.net: Kariyer Günleri, 27 October 2026', 'https://www.kariyer.net/etkinlik/kariyergunleri-20261027', '2026-10-08'],
    'tr-kpss': ['data', 'ÖSYM: KPSS 2026 calendar and application (home page)', 'https://www.osym.gov.tr', '2026-10-08'],
    'tr-kk': ['data', 'Presidency of Türkiye: Kariyer Kapısı, public job announcements and National Internship Program', 'https://kariyerkapisi.gov.tr', '2026-10-08'],
    'tr-iskur': ['data', 'İŞKUR (Turkish Employment Agency): home page', 'https://www.iskur.gov.tr', '2026-10-08'],
    'tr-staj': ['data', 'İŞKUR: National Internship Program (Ulusal Staj Programı)', 'https://staj.iskur.gov.tr/', '2026-10-08'],
    'tr-riv': ['practitioner consensus', 'Rivermate: Employer of Record in Turkey (updated 17 February 2026)', 'https://rivermate.com/guides/turkey/agreements', '2026-10-08'],
    'tr-visa': ['practitioner consensus', 'Admetia research library: visas_immigration/turkey, Turkish visa guide (work-permit criteria, Turquoise Card, minimum wage 2026)', 'research/visas_immigration/turkey/turkey_visas_immigration_guide.md', '2026-10-05'],
    'tr-meb': ['data', 'Turkish Ministry of National Education (Stockholm education office): recognition and equivalence', 'https://stokholm.meb.gov.tr/www/recognition-and-equivalence/icerik/81', '2026-10-08'],
    'tr-kn-photo': ['practitioner consensus', 'Kariyer.net career guide: choosing the photo for your CV', 'https://www.kariyer.net/kariyer-rehberi/?p=21995', '2026-10-08'],
    'tr-js-cv': ['practitioner consensus', 'Jobseeker Türkiye: how many pages should a CV be', 'https://www.jobseeker.com/tr/cv/ipuclari/cv-kac-sayfa-olmali', '2026-10-08']
  }
});
