/* How hiring works: Hong Kong. From research/places/beyond-europe.md §5 and
 * getting-in/employer-pipelines.md; extended to the full schema on 8 Oct 2026 (HSBC and JPMorgan
 * graduate and summer-programme notices, Young Post's copy of the SCMP report on the JIJIS
 * vacancy data, PolyU's list of job portals, HKU's graduate employment survey, the Civil Service
 * Bureau's 2026-27 joint recruitment, Cathay's early-careers page, the Labour Department's guide
 * to the Employment Ordinance). The HSBC line was corrected: the 2026 listing asks for a GPA of
 * 3.2/4.0 or 4.0/5.0 and does not mention a 2:1. */
ATLAS.addEntry({
  id: 'HK',
  checked: '2026-10-08',
  review: '2027-04-30',

  lead: [
    ['Hong Kong’s banks hire graduates the London way: summer internships that turn into offers, on a fixed calendar with applications a year ahead. JPMorgan’s 2027 Asia Pacific summer analyst round closed on 31 August 2026 for its Hong Kong investment bank and asset management programmes, and HSBC’s 2027 summer internship and graduate programmes close on 31 October 2026. Outside finance, most local hiring is through contacts and in Cantonese, in our reading.',
      'Banche e gestori patrimoniali di Hong Kong assumono laureati alla maniera di Londra: stage estivi che diventano offerte, con un calendario fisso e candidature un anno prima. Il ciclo 2027 di JPMorgan per analisti estivi nell’Asia-Pacifico si è chiuso il 31 agosto 2026 per i programmi di investment bank e gestione patrimoniale di Hong Kong, e gli stage estivi e i programmi per laureati 2027 di HSBC chiudono il 31 ottobre 2026. Fuori dalla finanza, la maggior parte delle assunzioni locali passa per contatti e in cantonese, secondo la nostra lettura.', 'hk-jpm hk-hsbc27 ours'],
    ['The graduate market is weak: the eight public universities’ job system listed 30,798 graduate vacancies in 2025, down 55% from 68,728 in 2024 and the lowest in five years, and unemployment among 20- to 24-year-olds reached 12.3% late in 2025.',
      'Il mercato dei laureati è debole: il sistema di lavoro delle otto università pubbliche ha elencato 30.798 posti per laureati nel 2025, il 55% in meno dei 68.728 del 2024 e il dato più basso in cinque anni, e la disoccupazione tra i 20-24enni ha raggiunto il 12,3% a fine 2025.', 'hk-scmp']
  ],

  ways: [
    { name: ['Summer internship in finance', 'Stage estivo in finanza'], r: 'intern', p: 'first intern', basis: 'consensus', t: [
      ['A business master’s from a Hong Kong university mostly leads to median pay near HK$25,000 to HK$30,000 a month; the higher-paid analyst seats go through summer internships in banking and markets.',
        'Un master in economia di un’università di Hong Kong porta per lo più a una retribuzione mediana vicina a 25.000-30.000 HK$ al mese; i posti da analista meglio pagati passano per gli stage estivi in banca e sui mercati.', 'hk-beyond'],
      ['HSBC’s summer internship is for students in their penultimate year, full-time for 10 weeks from June 2027; JPMorgan’s 2027 summer analyst programmes in Hong Kong had deadlines of 31 August 2026 (asset and wealth management, commercial and investment bank) and 30 September 2026 (corporate functions), and both banks review applications on a rolling basis, so early applications have the edge.',
        'Lo stage estivo di HSBC è per studenti del penultimo anno, a tempo pieno per 10 settimane da giugno 2027; i programmi estivi 2027 per analisti di JPMorgan a Hong Kong avevano scadenze al 31 agosto 2026 (gestione patrimoniale, commercial e investment bank) e al 30 settembre 2026 (funzioni aziendali), ed entrambe le banche valutano le candidature in modo progressivo, quindi chi si candida presto ha il vantaggio.', 'hk-hsbc27 hk-jpm'],
      ['Cathay Pacific says interns with outstanding performance may be offered a fast track into its graduate programmes.',
        'Cathay Pacific dice che gli stagisti con prestazioni eccellenti possono ricevere un percorso accelerato verso i suoi programmi per laureati.', 'hk-cathay']
    ] },
    { name: ['Bank and airline graduate programmes', 'Programmi per laureati di banche e compagnie aeree'], r: 'scheme', p: 'first', basis: 'consensus', t: [
      ['HSBC’s 2026 Hong Kong global graduate programmes covered engineering (technology), global investment research, investment banking, markets (sales and trading) and relationship management in private, commercial and retail banking, starting from July 2026. The bar was a GPA of at least 3.2 out of 4.0 (or 4.0 out of 5.0), under two years of full-time experience or graduating by July 2026.',
        'I programmi globali per laureati 2026 di HSBC a Hong Kong coprivano ingegneria (tecnologia), ricerca globale sugli investimenti, investment banking, mercati (vendite e trading) e relationship management nel private, commercial e retail banking, con inizio da luglio 2026. La soglia era una media di almeno 3,2 su 4,0 (o 4,0 su 5,0), meno di due anni di esperienza a tempo pieno o laurea entro luglio 2026.', 'hk-hsbc'],
      ['Cathay Pacific lists four graduate trainee programmes: cargo, digital and IT, engineering, and a group legal and compliance trainee-solicitor programme, with rotations, mentoring and structured training.',
        'Cathay Pacific elenca quattro programmi per laureati: cargo, digitale e IT, ingegneria, e un programma di praticantato legale in compliance di gruppo, con rotazioni, mentoring e formazione strutturata.', 'hk-cathay']
    ] },
    { name: ['University job systems and campus career offices', 'Sistemi di lavoro delle università e uffici carriera'], r: 'campus', p: 'first', basis: 'data', t: [
      ['The Joint Institution Job Information System (JIJIS), run jointly by the UGC-funded universities, gives all full-time UGC-funded students access to its vacancies; it recorded 30,798 graduate vacancies in 2025, with management-trainee posts down 25% and average new-hire pay at HK$20,961 a month, up only 0.5%.',
        'Il Joint Institution Job Information System (JIJIS), gestito congiuntamente dalle università finanziate dall’UGC, dà a tutti gli studenti a tempo pieno di queste università l’accesso ai suoi annunci; ha registrato 30.798 posti per laureati nel 2025, con i posti da management trainee in calo del 25% e una retribuzione media dei neoassunti di 20.961 HK$ al mese, in aumento solo dello 0,5%.', 'hk-jijis hk-scmp']
    ] },
    { name: ['Job portals and direct applications', 'Portali di lavoro e candidature dirette'], r: 'direct', p: 'first exp', basis: 'consensus', t: [
      ['PolyU’s career office lists the portals students use: JobsDB, CTgoodjobs, eFinancialCareers, foundit Hong Kong, Jump, Recruit, Government Jobs, the Hong Kong Institute of Certified Public Accountants and the Labour Department’s Interactive Employment Service (iES), besides JIJIS.',
        'L’ufficio carriera del PolyU elenca i portali usati dagli studenti: JobsDB, CTgoodjobs, eFinancialCareers, foundit Hong Kong, Jump, Recruit, Government Jobs, l’Hong Kong Institute of Certified Public Accountants e l’Interactive Employment Service (iES) del Dipartimento del lavoro, oltre a JIJIS.', 'hk-jijis']
    ] },
    { name: ['Civil-service joint recruitment (permanent residents)', 'Selezione congiunta per il servizio civile (residenti permanenti)'], r: 'public', p: 'first', basis: 'data', t: [
      ['The 2026-27 joint recruitment exercise opened on 12 September and closed on 2 October 2026, with 40 Administrative Officer, 100 Executive Officer II and 39 other posts; it is open to permanent residents, and the joint exam is on 5 December in Hong Kong or in seven cities abroad.',
        'La selezione congiunta 2026-27 si è aperta il 12 settembre e chiusa il 2 ottobre 2026, con 40 posti di Administrative Officer, 100 di Executive Officer II e 39 altri; è aperta ai residenti permanenti, e l’esame congiunto è il 5 dicembre a Hong Kong o in sette città all’estero.', 'hk-csb']
    ] },
    { name: ['Work first on the post-study stay (Hong Kong-degree graduates)', 'Lavorare subito con il soggiorno post-studio (laureati di Hong Kong)'], r: 'freelance', p: 'first', basis: 'data', t: [
      ['A graduate of a Hong Kong degree can apply for the Immigration Arrangements for Non-local Graduates (IANG) with just the graduation letter and stay 24 months with no job offer and no quota, free to look for work or start a business; the Top Talent Pass offers the same 24 months to recent graduates of listed universities, with a quota of 10,000 a year for those with under three years of experience.',
        'Un laureato con un titolo di Hong Kong può chiedere le Immigration Arrangements for Non-local Graduates (IANG) con la sola lettera di laurea e restare 24 mesi senza offerta di lavoro e senza quote, libero di cercare lavoro o avviare un’attività; il Top Talent Pass offre gli stessi 24 mesi ai neolaureati delle università elencate, con una quota di 10.000 posti l’anno per chi ha meno di tre anni di esperienza.', 'hk-visa']
    ] }
  ],

  cycle: [
    ['Entry-level hiring is shrinking: vacancies in the universities’ job system fell 55% in 2025, management-trainee posts fell 25%, and an HR consultant blamed a weak economy and fast AI adoption.',
      'Le assunzioni d’ingresso si stanno riducendo: i posti nel sistema di lavoro delle università sono calati del 55% nel 2025, i posti da management trainee del 25%, e una consulente delle risorse umane ha attribuito il calo a un’economia debole e a una rapida adozione dell’IA.', 'hk-scmp'],
    ['Graduates still mostly find work: in HKU’s 2025 survey 69.3% of graduates were employed, 27.8% in further study and 0.8% unemployed, at a median of HK$26,000 a month.',
      'I laureati per lo più trovano ancora lavoro: nell’indagine 2025 dell’HKU il 69,3% dei laureati era occupato, il 27,8% proseguiva gli studi e lo 0,8% era disoccupato, con una retribuzione mediana di 26.000 HK$ al mese.', 'hk-hku']
  ],

  schools: [
    ['Recruitment runs through the universities: JIJIS is open only to students of the UGC-funded universities, and JPMorgan’s Hong Kong summer analyst notice was circulated by CityU’s business-school career office, among others.',
      'La selezione passa dalle università: il JIJIS è aperto solo agli studenti delle università finanziate dall’UGC, e il bando di JPMorgan per analisti estivi a Hong Kong è stato diffuso, tra gli altri, dall’ufficio carriera della scuola di economia della CityU.', 'hk-jijis hk-jpm'],
    ['HSBC filters on grades, not on a named school: a GPA of at least 3.2 of 4.0 (or 4.0 of 5.0) on an official transcript or degree certificate, with an overseas equivalent accepted. How far the university name counts beyond that was not stated on any page we read.',
      'HSBC filtra sui voti, non su una scuola precisa: una media di almeno 3,2 su 4,0 (o 4,0 su 5,0) su un certificato ufficiale o sul diploma di laurea, con equivalente estero accettato. Quanto conti il nome dell’università oltre a questo non è indicato in alcuna pagina letta.', 'hk-hsbc ours']
  ],

  events: [
    ['The Joint Recruitment Examination for the civil service is held on 5 December 2026 in Hong Kong and in Beijing, Shanghai, London, New York, Toronto, Vancouver and Sydney.',
      'L’esame congiunto per il servizio civile si tiene il 5 dicembre 2026 a Hong Kong e a Pechino, Shanghai, Londra, New York, Toronto, Vancouver e Sydney.', 'hk-csb'],
    ['Cathay Pacific asks applicants for its next intake to join its Talent Community, with the 2026 summer internships already closed and the next intake opening later in the year.',
      'Cathay Pacific chiede ai candidati per la prossima selezione di iscriversi alla sua Talent Community, con gli stage estivi 2026 già chiusi e la prossima selezione che si apre più avanti nell’anno.', 'hk-cathay']
  ],

  fields: [
    { f: 'finance', t: [
      ['HSBC runs Hong Kong graduate programmes across banking, markets, research and technology, starting from July; applications for the 2026 programmes closed on 31 October 2025 and those for 2027 close on 31 October 2026, though HSBC recruits on a rolling basis and may close earlier once vacancies are filled.',
        'HSBC ha programmi per laureati a Hong Kong in banca, mercati, ricerca e tecnologia, che iniziano da luglio; le candidature per i programmi 2026 si sono chiuse il 31 ottobre 2025 e quelle per il 2027 chiudono il 31 ottobre 2026, anche se HSBC recluta in modo progressivo e può chiudere prima quando i posti sono coperti.', 'hk-hsbc hk-hsbc27'],
      ['JPMorgan’s Hong Kong 2027 summer analyst programmes were asset and wealth management and the commercial and investment bank (deadline 31 August 2026) and corporate functions (30 September 2026); its technology, data and product programme was listed only for Singapore.',
        'I programmi estivi 2027 per analisti di JPMorgan a Hong Kong erano gestione patrimoniale e commercial e investment bank (scadenza 31 agosto 2026) e funzioni aziendali (30 settembre 2026); il suo programma di tecnologia, dati e prodotto era elencato solo per Singapore.', 'hk-jpm']
    ] },
    { f: 'business', t: [
      ['Graduate vacancies at the eight public universities’ job system fell 55% in 2025, to 30,798, and management-trainee posts fell 25%, at an average graduate pay of HK$20,961 a month.',
        'I posti per laureati nel sistema di lavoro delle otto università pubbliche sono calati del 55% nel 2025, a 30.798, e i posti da management trainee del 25%, con una retribuzione media da laureato di 20.961 HK$ al mese.', 'hk-scmp']
    ] },
    { f: 'public', t: [
      ['The 2026-27 civil-service joint exercise had 179 posts: 40 Administrative Officer, 100 Executive Officer II, 10 Assistant Information Officer, 4 Assistant Trade Officer II, 14 Management Services Officer II and 11 Transport Officer II. Appointment needs Level 2 in the Chinese and English papers of the Common Recruitment Examination, its aptitude test, and the Basic Law and National Security Law test.',
        'La selezione congiunta del servizio civile 2026-27 aveva 179 posti: 40 Administrative Officer, 100 Executive Officer II, 10 Assistant Information Officer, 4 Assistant Trade Officer II, 14 Management Services Officer II e 11 Transport Officer II. La nomina richiede il livello 2 nelle prove di cinese e inglese del Common Recruitment Examination, il suo test attitudinale, e il test sulla Basic Law e sulla legge sulla sicurezza nazionale.', 'hk-csb']
    ] },
    { f: 'tech', t: [
      ['Tech roles for graduates sit mostly in the banks’ technology programmes and in corporate IT: HSBC’s 2026 list includes an engineering (technology) programme, and Cathay Pacific has digital and IT and engineering graduate trainee programmes. Local universities (HKU, HKUST, CUHK) are the usual source.',
        'I ruoli tech per laureati sono soprattutto nei programmi tecnologici delle banche e nell’IT aziendale: l’elenco 2026 di HSBC include un programma di ingegneria (tecnologia), e Cathay Pacific ha programmi per laureati in digitale e IT e in ingegneria. Le università locali (HKU, HKUST, CUHK) sono la fonte abituale.', 'hk-hsbc hk-cathay ours']
    ] }
  ],

  customs: [
    { k: 'season', v: 'cyclical', t: [
      ['The finance calendar runs a year ahead: JPMorgan’s 2027 summer deadlines were 31 August and 30 September 2026 and HSBC’s is 31 October 2026, while the civil-service round ran from 12 September to 2 October 2026. Portal hiring continues through the year.',
        'Il calendario della finanza va un anno avanti: le scadenze estive 2027 di JPMorgan erano il 31 agosto e il 30 settembre 2026 e quella di HSBC è il 31 ottobre 2026, mentre la selezione per il servizio civile è andata dal 12 settembre al 2 ottobre 2026. Le assunzioni tramite portali continuano tutto l’anno.', 'hk-jpm hk-hsbc27 hk-csb']
    ] },
    { k: 'masters', v: 'irrelevant', t: [
      ['The programmes we read set a bachelor-level bar: HSBC asks for a GPA threshold and under two years of experience, and asks for no master’s. A master’s from a Hong Kong university is still the route to the 24-month post-study stay for many foreign students.',
        'I programmi che abbiamo letto fissano una soglia da triennale: HSBC chiede una soglia di media e meno di due anni di esperienza, e non chiede una magistrale. Una magistrale di un’università di Hong Kong resta comunque la via al soggiorno post-studio di 24 mesi per molti studenti stranieri.', 'hk-hsbc hk-visa ours']
    ] },
    { k: 'degrees', v: 'free', t: [
      ['No recognition centre screens degrees for ordinary jobs: HSBC reads the GPA on the official transcript or degree certificate and accepts an overseas equivalent. The IANG visa needs only the graduation letter or certificate.',
        'Nessun centro di riconoscimento esamina i titoli per i lavori ordinari: HSBC legge la media sul certificato ufficiale o sul diploma di laurea e accetta un equivalente estero. Il visto IANG richiede solo la lettera di laurea o il diploma.', 'hk-hsbc hk-visa']
    ] },
    { k: 'brand', v: 'some', t: [
      ['Banks fix a GPA threshold and recruit through university career offices; no page we read says how far the school name counts. Listed universities matter for the Top Talent Pass, which uses a list of 200 institutions.',
        'Le banche fissano una soglia di media e reclutano tramite gli uffici carriera delle università; nessuna pagina letta dice quanto conti il nome della scuola. Le università elencate contano per il Top Talent Pass, che usa un elenco di 200 istituzioni.', 'hk-hsbc hk-visa ours']
    ] },
    { k: 'dual', v: 'little', t: [
      ['University graduates reach employers through summer internships, graduate programmes and portals; apprenticeship or dual-study contracts are not a route we found in any source for university graduates.',
        'I laureati arrivano ai datori di lavoro tramite stage estivi, programmi per laureati e portali; apprendistato e studio duale non sono una via che abbiamo trovato in alcuna fonte per i laureati universitari.', 'ours']
    ] },
    { k: 'publicw', v: 'low', t: [
      ['The 2026-27 civil-service joint exercise offered 179 posts against 30,798 graduate vacancies in the universities’ job system in 2025, and is open to permanent residents only, so the public sector is a small door for a foreign graduate.',
        'La selezione congiunta del servizio civile 2026-27 offriva 179 posti a fronte di 30.798 posti per laureati nel sistema di lavoro delle università nel 2025, ed è aperta solo ai residenti permanenti, quindi il settore pubblico è una porta stretta per un laureato straniero.', 'hk-csb hk-scmp']
    ] },
    { k: 'sponsorr', v: 'some', t: [
      ['Graduates of a Hong Kong degree need no sponsor for the first 24 months (IANG); otherwise the General Employment Policy needs a Hong Kong-registered employer and a genuine full-time job at market-level pay, and the visa is tied to the employer. The rules themselves are under Visas.',
        'I laureati con un titolo di Hong Kong non hanno bisogno di sponsor per i primi 24 mesi (IANG); altrimenti la General Employment Policy richiede un datore di lavoro registrato a Hong Kong e un lavoro a tempo pieno genuino a una retribuzione di livello di mercato, e il visto è legato al datore di lavoro. Le regole sono nella sezione Visti.', 'hk-visa']
    ] },
    { k: 'photo', v: 'optional', t: [
      ['None of the Hong Kong application pages we read asks for a photo. Treat it as optional, in our reading.',
        'Nessuna delle pagine di candidatura di Hong Kong che abbiamo letto chiede una foto. Consideralo facoltativo, secondo la nostra lettura.', 'hk-hsbc ours']
    ] },
    { k: 'cv', v: 'two', t: [
      ['The banks’ programmes use an online form with CV and transcript; we found no page that sets a CV length, so treat one to two pages as our reading.',
        'I programmi delle banche usano un modulo online con CV e trascrizione dei voti; non abbiamo trovato alcuna pagina che fissi la lunghezza del CV, quindi considera da una a due pagine come una nostra lettura.', 'hk-hsbc ours']
    ] },
    { k: 'letter', v: 'optional', t: [
      ['No page we read asks for a cover letter for the bank programmes; it is a matter for the individual employer, in our reading.',
        'Nessuna pagina letta chiede una lettera di presentazione per i programmi delle banche; dipende dal singolo datore di lavoro, secondo la nostra lettura.', 'hk-hsbc ours']
    ] },
    { k: 'refs', v: 'later', t: [
      ['References are not part of the first application in the bank programmes we read; they are checked at offer stage, in our reading.',
        'Le referenze non fanno parte della prima candidatura nei programmi delle banche che abbiamo letto; si verificano alla fase di offerta, secondo la nostra lettura.', 'hk-hsbc ours']
    ] },
    { k: 'docs', v: 'copies', t: [
      ['HSBC asks for a GPA shown on an official transcript or degree certificate; no page we read asks for certified or translated copies at application.',
        'HSBC chiede una media indicata su un certificato ufficiale o sul diploma di laurea; nessuna pagina letta chiede copie certificate o tradotte in fase di candidatura.', 'hk-hsbc']
    ] },
    { k: 'salary', v: 'later', t: [
      ['Pay is raised at offer; HKUST’s taught-postgraduate survey puts the median at HK$25,000 a month and HK$30,000 in banking and finance, and HKU’s 2025 survey at HK$26,000. No page we read asks for a salary expectation in the application.',
        'La retribuzione si discute all’offerta; l’indagine sui post-laurea dell’HKUST indica una mediana di 25.000 HK$ al mese e di 30.000 HK$ in banca e finanza, e l’indagine 2025 dell’HKU di 26.000 HK$. Nessuna pagina letta chiede un’aspettativa retributiva nella candidatura.', 'hk-beyond hk-hku ours']
    ] },
    { k: 'check', v: 'some', t: [
      ['No page we read says how routine background or reference checks are in Hong Kong hiring; for financial-services employers they are common, in our reading.',
        'Nessuna pagina letta dice quanto siano di routine le verifiche dei precedenti o delle referenze nelle assunzioni a Hong Kong; per i datori di lavoro dei servizi finanziari sono comuni, secondo la nostra lettura.', 'ours']
    ] },
    { k: 'contact', v: 'mixed', t: [
      ['The banks take applications online on fixed calendars, but outside finance most local hiring runs through contacts, in our reading.',
        'Le banche accettano candidature online con calendari fissi, ma fuori dalla finanza la maggior parte delle assunzioni locali passa per i contatti, secondo la nostra lettura.', 'hk-jpm ours']
    ] },
    { k: 'abroad', v: 'workable', t: [
      ['A degree from Hong Kong gives 24 months to look for work without a sponsor, and graduates of listed top universities may come under the Top Talent Pass.',
        'Una laurea di Hong Kong dà 24 mesi per cercare lavoro senza sponsor, e i laureati delle migliori università elencate possono arrivare con il Top Talent Pass.', 'hk-beyond']
    ] },
    { k: 'language', v: 'mostly', t: [
      ['English in international finance; Cantonese and often Mandarin for local firms and client-facing roles serving mainland clients. The civil service requires Level 2 in both the Chinese and English papers of its exam.',
        'L’inglese nella finanza internazionale; il cantonese e spesso il mandarino per le aziende locali e i ruoli a contatto con clienti della Cina continentale. Il servizio civile richiede il livello 2 in entrambe le prove di cinese e inglese del suo esame.', 'ours hk-csb']
    ] }
  ],

  rows: {
    process: [
      ['The banks’ route is an online application, then assessments and interviews; HSBC says it recruits on a rolling basis and may close earlier once vacancies are filled, and JPMorgan reviews on a rolling basis too, so apply well before the deadline. Neither page we read describes the assessment stages.',
        'Il percorso delle banche è una candidatura online, poi valutazioni e colloqui; HSBC dice di reclutare in modo progressivo e di poter chiudere prima quando i posti sono coperti, e anche JPMorgan valuta in modo progressivo, quindi candidati molto prima della scadenza. Nessuna delle due pagine lette descrive le fasi di valutazione.', 'hk-hsbc27 hk-jpm'],
      ['The civil-service route is a joint exam: Level 2 in the Chinese and English papers of the Common Recruitment Examination, its aptitude test, the Basic Law and National Security Law test, and then the Joint Recruitment Examination on 5 December 2026.',
        'La via del servizio civile è un esame congiunto: livello 2 nelle prove di cinese e inglese del Common Recruitment Examination, il suo test attitudinale, il test sulla Basic Law e sulla legge sulla sicurezza nazionale, e poi il Joint Recruitment Examination il 5 dicembre 2026.', 'hk-csb'],
      ['Interviews and dress follow the London pattern in international banks and are in English; no page we read states norms for assessment centres.',
        'Colloqui e abbigliamento seguono il modello londinese nelle banche internazionali e sono in inglese; nessuna pagina letta indica le norme per gli assessment centre.', 'ours']
    ],
    offer: [
      ['Under the Employment Ordinance a contract on probation can be ended with no notice in the first month; after that the notice is as agreed in the contract but not less than 7 days. Outside probation, a continuous contract with no notice clause needs not less than one month.',
        'Secondo l’Employment Ordinance un contratto in prova può essere concluso senza preavviso nel primo mese; dopo il preavviso è quello concordato nel contratto ma non inferiore a 7 giorni. Fuori dalla prova, un contratto continuativo senza clausola di preavviso richiede non meno di un mese.', 'hk-eo'],
      ['An end-of-year payment (the “13th month” or a bonus) is due only if it is contractual; for contracts made after 27 June 1997 an annual payment is presumed not to be gratuitous. A probation period of up to three months is excluded from the qualifying service for a pro rata payment.',
        'Un pagamento di fine anno (la “13ª mensilità” o un bonus) è dovuto solo se è contrattuale; per i contratti stipulati dopo il 27 giugno 1997 si presume che un pagamento annuale non sia gratuito. Un periodo di prova fino a tre mesi è escluso dal servizio utile per un pagamento proporzionale.', 'hk-eo'],
      ['New graduates averaged HK$20,961 a month in the universities’ job system in 2025, up 0.5%; median pay was HK$26,000 for HKU graduates and HK$25,000 for HKUST taught-postgraduate respondents.',
        'I neolaureati guadagnavano in media 20.961 HK$ al mese nel sistema di lavoro delle università nel 2025, con un aumento dello 0,5%; la retribuzione mediana era di 26.000 HK$ per i laureati dell’HKU e di 25.000 HK$ per i rispondenti post-laurea dell’HKUST.', 'hk-scmp hk-hku hk-hkust'],
      ['Graduate programmes set pay on the bank’s own scale; negotiation is for experienced hires, in our reading.',
        'I programmi per laureati fissano la retribuzione su una scala propria della banca; la negoziazione riguarda i profili con esperienza, secondo la nostra lettura.', 'ours']
    ],
    sponsor: [
      ['The decisive fact for an employer is whether you need a sponsor: a graduate of a Hong Kong degree can apply for IANG on the graduation letter alone and work for 24 months with no job offer and no quota, so the employer files nothing.',
        'Il fatto decisivo per un datore di lavoro è se hai bisogno di uno sponsor: un laureato con un titolo di Hong Kong può chiedere l’IANG con la sola lettera di laurea e lavorare per 24 mesi senza offerta e senza quote, quindi il datore di lavoro non presenta nulla.', 'hk-visa'],
      ['Otherwise an employer files under the General Employment Policy: a Hong Kong-registered company, a genuine full-time job at market-level pay, and the graduate’s degree; the visa lasts 36 months but is tied to the employer, and a change of employer needs the Immigration Department’s written approval.',
        'Altrimenti il datore di lavoro presenta la domanda ai sensi della General Employment Policy: un’azienda registrata a Hong Kong, un lavoro a tempo pieno genuino a una retribuzione di livello di mercato, e il titolo del laureato; il visto dura 36 mesi ma è legato al datore di lavoro, e un cambio di datore richiede l’approvazione scritta dell’Ufficio immigrazione.', 'hk-visa'],
      ['Ask early whether the employer has filed for a foreign graduate before, and never start a trial or internship on visitor status: working on a visitor visa is a criminal offence for the worker and the employer.',
        'Chiedi presto se il datore di lavoro ha già presentato domanda per un laureato straniero, e non iniziare mai una prova o uno stage con lo status di visitatore: lavorare con un visto da visitatore è un reato per il lavoratore e per il datore di lavoro.', 'hk-visa ours']
    ],
    where: [
      ['JIJIS for students of the UGC-funded universities; JobsDB, CTgoodjobs, eFinancialCareers, foundit Hong Kong, Jump, Recruit, Government Jobs, the HKICPA job board and the Labour Department’s iES for everyone else.',
        'JIJIS per gli studenti delle università finanziate dall’UGC; JobsDB, CTgoodjobs, eFinancialCareers, foundit Hong Kong, Jump, Recruit, Government Jobs, la bacheca dell’HKICPA e l’iES del Dipartimento del lavoro per tutti gli altri.', 'hk-jijis'],
      ['The banks’ own graduate pages: HSBC’s Hong Kong graduate and internship programmes (listed on GradConnection and university career pages) and JPMorgan’s summer analyst programme, applied for through its careers site; Cathay Pacific’s early-careers page and Talent Community.',
        'Le pagine per laureati delle banche: i programmi per laureati e gli stage di HSBC a Hong Kong (elencati su GradConnection e sulle pagine carriera delle università) e il programma estivo per analisti di JPMorgan, a cui ci si candida dal suo sito carriere; la pagina early careers di Cathay Pacific e la sua Talent Community.', 'hk-hsbc hk-hsbc27 hk-jpm hk-cathay'],
      ['For the civil service, the Civil Service Bureau (csb.gov.hk) and the Administrative Officer recruitment site (ao-recruitment.gov.hk).',
        'Per il servizio civile, il Civil Service Bureau (csb.gov.hk) e il sito di selezione degli Administrative Officer (ao-recruitment.gov.hk).', 'hk-csb']
    ],
    mistakes: [
      ['Applying in the new year. JPMorgan’s Hong Kong 2027 summer deadlines were 31 August and 30 September 2026 and HSBC’s is 31 October 2026, with positions filling before the deadline.',
        'Candidarsi a inizio anno. Le scadenze estive 2027 di JPMorgan a Hong Kong erano il 31 agosto e il 30 settembre 2026 e quella di HSBC è il 31 ottobre 2026, con posti che si riempiono prima della scadenza.', 'hk-jpm hk-hsbc27'],
      ['Assuming the market is as it was. Graduate vacancies in the universities’ job system fell 55% in 2025, so a fallback plan outside investment banking is needed.',
        'Dare per scontato che il mercato sia quello di prima. I posti per laureati nel sistema di lavoro delle università sono calati del 55% nel 2025, quindi serve un piano di ripiego fuori dall’investment banking.', 'hk-scmp'],
      ['Working or interning on visitor status. Italian and EU citizens can visit for 90 days, but working on visitor status is an offence for both worker and employer.',
        'Lavorare o fare uno stage con lo status di visitatore. I cittadini italiani e dell’UE possono visitare per 90 giorni, ma lavorare con lo status di visitatore è un reato sia per il lavoratore sia per il datore di lavoro.', 'hk-visa'],
      ['Planning on the civil service as a foreigner. The 2026-27 exercise is for permanent residents, and appointment needs Level 2 in the Chinese and English papers and a Basic Law test.',
        'Contare sul servizio civile da straniero. La selezione 2026-27 è per i residenti permanenti, e la nomina richiede il livello 2 nelle prove di cinese e inglese e un test sulla Basic Law.', 'hk-csb'],
      ['Missing the 24-month cliff. The IANG and Top Talent Pass stays end at 24 months, so a regular contribution record or a sponsored employment visa has to be in place before the renewal.',
        'Non considerare il limite dei 24 mesi. I soggiorni IANG e Top Talent Pass terminano a 24 mesi, quindi un contratto regolare con versamenti previdenziali o un visto di lavoro con sponsor deve essere pronto prima del rinnovo.', 'hk-visa']
    ]
  },

  lang: [
    { f: 'finance', v: 'english', lv: 'English, advanced', t: [
      ['International banks recruit in English: HSBC’s and JPMorgan’s Hong Kong programme notices are in English and state no Chinese requirement. Cantonese or Mandarin helps for client-facing roles with mainland clients, in our reading.',
        'Le banche internazionali reclutano in inglese: gli avvisi dei programmi di HSBC e JPMorgan a Hong Kong sono in inglese e non indicano alcun requisito di cinese. Cantonese o mandarino aiutano nei ruoli a contatto con clienti della Cina continentale, secondo la nostra lettura.', 'hk-hsbc hk-jpm ours']
    ] },
    { f: 'business', v: 'bilingual', lv: 'English and Chinese', t: [
      ['Local firms hire in Cantonese and Mandarin as well as English; no page we read states a level for business roles.',
        'Le aziende locali assumono in cantonese e mandarino oltre che in inglese; nessuna pagina letta indica un livello per i ruoli di economia.', 'ours']
    ] },
    { f: 'public', v: 'bilingual', lv: 'Chinese and English, Level 2', t: [
      ['Appointment to the civil-service grades needs Level 2 in both the Use of Chinese and the Use of English papers of the Common Recruitment Examination, or an accepted equivalent.',
        'La nomina nei gradi del servizio civile richiede il livello 2 in entrambe le prove di uso del cinese e di uso dell’inglese del Common Recruitment Examination, o un equivalente accettato.', 'hk-csb']
    ] },
    { f: 'tech', v: 'bilingual', lv: 'English and Chinese', t: [
      ['Cathay Pacific’s early-careers page is in English with Traditional and Simplified Chinese versions and states no language requirement; HSBC’s technology programme notice is in English.',
        'La pagina early careers di Cathay Pacific è in inglese con versioni in cinese tradizionale e semplificato e non indica alcun requisito linguistico; l’avviso del programma tecnologico di HSBC è in inglese.', 'hk-cathay hk-hsbc']
    ] }
  ],

  programmes: [
    { n: 'Hong Kong global graduate programmes (investment banking, markets, research, technology, relationship management)', o: 'HSBC', f: 'finance', in: null, w: null, lang: 'EN', intl: 'unknown', ids: 'hk-hsbc hk-hsbc27' },
    { n: 'Hong Kong summer internship (10 weeks from June 2027)', o: 'HSBC', f: 'finance', in: null, w: null, lang: 'EN', intl: 'unknown', ids: 'hk-hsbc27' },
    { n: 'Asia Pacific summer analyst programme 2027 (asset and wealth management; commercial and investment bank)', o: 'JPMorgan', f: 'finance', in: null, w: null, lang: 'EN', intl: 'unknown', ids: 'hk-jpm' },
    { n: 'Graduate trainee programmes (cargo, digital and IT, engineering, trainee solicitor)', o: 'Cathay Pacific', f: 'tech', in: null, w: null, lang: 'EN', intl: 'unknown', ids: 'hk-cathay' },
    { n: '2026-27 joint recruitment (Administrative Officer, Executive Officer II and four other grades)', o: 'Hong Kong Government (Civil Service Bureau)', f: 'public', in: 179, w: [9, 10], lang: 'EN ZH', intl: 'local', ids: 'hk-csb' }
  ],

  outcomes: [
    ['HKU’s 2025 survey of its UGC-funded bachelor’s graduates found 69.3% employed, 27.8% in further studies, 0.8% unemployed and 2.2% other, with a median monthly salary of HK$26,000 (average HK$33,338); the employment rate, counting only those employed or unemployed, was 98.9%.',
      'L’indagine 2025 dell’HKU sui suoi laureati di primo livello finanziati dall’UGC ha trovato il 69,3% occupato, il 27,8% in studi ulteriori, lo 0,8% disoccupato e il 2,2% altro, con uno stipendio mensile mediano di 26.000 HK$ (media 33.338 HK$); il tasso di occupazione, contando solo gli occupati o i disoccupati, era del 98,9%.', 'hk-hku'],
    ['For master’s students from abroad the picture is different: of 2,452 HKUST MSc and MA respondents in 2025, 65.5% had left Hong Kong or returned home.',
      'Per gli studenti magistrali dall’estero il quadro è diverso: dei 2.452 rispondenti MSc e MA dell’HKUST nel 2025, il 65,5% aveva lasciato Hong Kong o era tornato a casa.', 'hk-hkust']
  ],

  sources: {
    'hk-beyond': ['data', 'Admetia research library: places/beyond-europe.md §5 (Immigration Department; HKUST Graduate Employment Survey 2025)', 'research/places/beyond-europe.md', '2026-10-01'],
    'hk-hkust': ['data', 'Admetia research library: places/beyond-europe.md §5.2 (HKUST Graduate Employment Survey 2025, taught postgraduates)', 'research/places/beyond-europe.md', '2026-10-01'],
    'hk-hsbc': ['employer-stated', 'HSBC: 2026 Hong Kong Global Graduate Programmes (GradConnection listing)', 'https://hk.gradconnection.com/employers/hsbc/jobs/hsbc-2026-hsbc-hong-kong-global-graduate-programmes/', '2026-10-08'],
    'hk-hsbc27': ['employer-stated', 'HSBC: 2027 Hong Kong Summer Internship and Graduate Programmes (Hang Seng University of Hong Kong career notice)', 'https://osa-career.hksyu.edu/?p=40370', '2026-10-08'],
    'hk-jpm': ['employer-stated', 'JPMorgan: 2027 APAC Summer Analyst Programme, Hong Kong (City University of Hong Kong career notice)', 'https://www.cb.cityu.edu.hk/careerdevelopment/news/events/eventDetails/?id=40125', '2026-10-08'],
    'hk-cathay': ['employer-stated', 'Cathay Pacific: early careers, students and graduates', 'https://careers.cathaypacific.com/en/careers/our-teams/early-careers-students-and-graduates', '2026-10-08'],
    'hk-scmp': ['data', 'South China Morning Post, 5 February 2026, via Young Post: Hong Kong graduates face gloomiest job outlook in five years (JIJIS vacancies fell 55%)', 'https://www.youngpostclub.com/yp/news/hong-kong/education/article/3342452/hong-kong-graduates-face-gloomiest-job-outlook-5-years-new-hires-plunge-55', '2026-10-08'],
    'hk-jijis': ['practitioner consensus', 'PolyU Careers and Placement Section: external job portals (JIJIS and others)', 'https://www.polyu.edu.hk/sao/careers-and-placement-section/job-opportunities/external-job-portals/', '2026-10-08'],
    'hk-hku': ['data', 'HKU Careers and Placement Section: Graduate Employment Survey 2025', 'https://www.cedars.hku.hk/careers/graduate-employment-survey', '2026-10-08'],
    'hk-csb': ['data', 'Hong Kong Government press release, 10 September 2026: 2026-27 joint recruitment exercise for Administrative Officer and Executive Officer II', 'https://www.info.gov.hk/gia/general/202609/10/P2026090900437.htm', '2026-10-08'],
    'hk-eo': ['data', 'Labour Department: A Concise Guide to the Employment Ordinance (chapters 8 and 9: end of year payment, termination)', 'https://www.labour.gov.hk/eng/public/wcp/ConciseGuide/EO_guide_full.pdf', '2026-10-08'],
    'hk-visa': ['data', 'Admetia research library: visas_immigration/hong_kong (IANG, Top Talent Pass, General Employment Policy)', 'research/visas_immigration/hong_kong/hong_kong_visas_immigration_guide.md', '2026-10-05']
  }
});
