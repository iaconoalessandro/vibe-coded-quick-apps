/* How hiring works: Germany. From research/getting-in/employer-pipelines.md
 * and breaking-in.md, with new reads on 7-8 Oct 2026 (Indeed via ZDF, the
 * Federal Employment Agency via Forschung & Lehre, EURES, BIBB, Destatis via
 * Haufe, e-fellows, employer career pages of Allianz, BASF, RWE, Commerzbank,
 * BCG; laws on gesetze-im-internet.de). */
ATLAS.addEntry({
  id: 'DE',
  checked: '2026-10-08',
  review: '2027-04-30',

  lead: [
    ['Germany hires its graduates from people it already knows. When a firm approves budget for juniors, the first places go to its own working students (Werkstudenten), then to its interns and thesis students, and only then to outside applicants.',
      'La Germania assume i laureati tra persone che conosce già. Quando un’azienda approva il budget per i junior, i primi posti vanno ai suoi studenti lavoratori (Werkstudenten), poi ai tirocinanti e a chi ha scritto la tesi in azienda, e solo dopo ai candidati esterni.', 'de-pipelines de-hr'],
    ['A cold application from abroad competes for what is left.',
      'Una candidatura a freddo dall’estero si contende ciò che resta.', 'ours']
  ],

  ways: [
    { name: ['Working student (Werkstudent)', 'Studente lavoratore (Werkstudent)'], r: 'dual', p: 'first intern', basis: 'consensus', t: [
      ['A paid part-time job of up to 20 hours a week during term, held while enrolled at a German university, often for a year or more in the same team. It is the main bridge into a first contract in software, consulting, finance functions and industry.',
        'Un lavoro retribuito part-time fino a 20 ore settimanali durante il semestre, mentre si è iscritti a un’università tedesca, spesso per un anno o più nello stesso team. È il ponte principale verso un primo contratto nel software, nella consulenza, nelle funzioni finanziarie e nell’industria.', 'de-pipelines'],
      ['Not every working student is kept: in StepStone’s data for 2017 about a third were taken on permanently, against half of interns.',
        'Non tutti gli studenti lavoratori vengono tenuti: nei dati StepStone del 2017 circa un terzo fu assunto a tempo indeterminato, contro la metà dei tirocinanti.', 'de-stepstone']
    ] },
    { name: ['Internship (Praktikum) and the thesis in a company', 'Tirocinio (Praktikum) e tesi in azienda'], r: 'intern', p: 'first intern', basis: 'data', t: [
      ['A three-to-six-month internship, or a master’s thesis written inside a company (Abschlussarbeit im Unternehmen), works as a long trial. In a 2022 survey of more than 500 HR managers, personality, practical experience and the thesis topic and grade ranked above the name of the school.',
        'Un tirocinio di tre-sei mesi, o una tesi magistrale scritta dentro un’azienda (Abschlussarbeit im Unternehmen), funziona come una lunga prova. In un sondaggio del 2022 su oltre 500 responsabili HR, personalità, esperienza pratica e tema e voto della tesi contavano più del nome della scuola.', 'de-hr de-pipelines'],
      ['Strategy consulting is the clearest case: BCG takes outstanding interns into its FAST FORWARD programme on their last internship day, with a full-time offer and no further interviews.',
        'La consulenza strategica è il caso più chiaro: BCG ammette gli stagisti migliori al programma FAST FORWARD nell’ultimo giorno di stage, con un’offerta a tempo pieno e senza altri colloqui.', 'de-bcg']
    ] },
    { name: ['Graduate programme or direct entry (Trainee, Direkteinstieg)', 'Programma per laureati o ingresso diretto (Trainee, Direkteinstieg)'], r: 'scheme', p: 'first', basis: 'data', t: [
      ['Large groups run trainee programmes and post junior jobs openly; this is where outside applicants compete, and it is the part of the market that shrank most after 2022.',
        'I grandi gruppi hanno programmi trainee e pubblicano posizioni junior aperte; è qui che competono i candidati esterni, ed è la parte del mercato che si è ridotta di più dopo il 2022.', 'de-indeed'],
      ['Programmes are for recent graduates: BASF takes people with at most 2 years of work experience and Deutsche Bank’s graduate programme at most 12 months, and BASF’s two named programmes require a master’s; Commerzbank takes graduates whose last degree is no more than 18 months old.',
        'I programmi sono per neolaureati: BASF accoglie chi ha al massimo 2 anni di esperienza e il programma per laureati di Deutsche Bank al massimo 12 mesi, e i due programmi di BASF citati richiedono un master; Commerzbank accoglie laureati il cui ultimo titolo non ha più di 18 mesi.', 'de-basf de-commerz de-db']
    ] },
    { name: ['Dual study (duales Studium)', 'Studio duale (duales Studium)'], r: 'dual', p: 'first', basis: 'data', t: [
      ['For school-leavers: you apply to the company, which then sends you to a partner university and pays you through the degree. About 70% of DHBW graduates stay with their company. Someone arriving with a foreign degree cannot join this pipeline later.',
        'Per chi finisce le superiori: ci si candida all’azienda, che poi ti iscrive a un’università partner e ti paga durante gli studi. Circa il 70% dei laureati DHBW resta nella propria azienda. Chi arriva con una laurea straniera non può entrare in questo canale più tardi.', 'de-dhbw'],
      ['In February 2024 BIBB counted 1,824 dual-study programmes with 113,526 students, mostly in engineering (869 programmes) and business (782).',
        'A febbraio 2024 il BIBB ha contato 1.824 corsi di studio duale con 113.526 studenti, soprattutto in ingegneria (869 corsi) e economia aziendale (782).', 'de-bibb']
    ] },
    { name: ['Direct and unsolicited application', 'Candidatura diretta e spontanea'], r: 'direct', p: 'first exp', basis: 'consensus', t: [
      ['Applying to a posting through the company’s own career site is the standard route for experienced hires and for graduates without an inside track; Germany’s official guidance also describes unsolicited applications (Initiativbewerbungen) as common.',
        'Candidarsi a un annuncio dal sito carriere dell’azienda è la via standard per chi ha esperienza e per i laureati senza canali interni; le indicazioni ufficiali tedesche descrivono come comuni anche le candidature spontanee (Initiativbewerbungen).', 'de-eures'],
      ['The file is a full dossier: CV, cover letter and certificates uploaded together; Allianz, for example, asks for exactly those three and then holds two or three interviews.',
        'Il dossier è completo: CV, lettera di presentazione e certificati caricati insieme; Allianz, per esempio, chiede proprio questi tre documenti e poi fa due o tre colloqui.', 'de-allianz']
    ] },
    { name: ['Experienced hire through a recruiter or the employer’s site', 'Assunzione di profili con esperienza tramite recruiter o sito aziendale'], r: 'agency', p: 'exp', basis: 'consensus', t: [
      ['Employers keep a separate path for people with experience: at Commerzbank it is an application, a phone call and an interview with individual feedback, with no assessment centre.',
        'I datori di lavoro tengono un percorso separato per chi ha esperienza: da Commerzbank è una candidatura, una telefonata e un colloquio con feedback individuale, senza assessment centre.', 'de-commerz'],
      ['The official portals list the Federal Employment Agency job portal, Make it in Germany and EURES, and advise checking in advance whether a private placement agency charges fees.',
        'Le indicazioni ufficiali citano il portale di lavoro dell’Agenzia federale per il lavoro, Make it in Germany ed EURES, e consigliano di verificare prima se un’agenzia di collocamento privata chiede commissioni.', 'de-eures']
    ] }
  ],

  cycle: [
    ['When the economy turns, firms cut junior hiring first. Job ads for beginners fell by about two-thirds from their 2022 peak to 2026, against 39% for all ads; IT applications fell 77% and marketing 75%.',
      'Quando l’economia gira, le aziende tagliano prima le assunzioni junior. Gli annunci per principianti sono calati di circa due terzi dal picco del 2022 al 2026, contro il 39% di tutti gli annunci; le applicazioni IT sono scese del 77% e il marketing del 75%.', 'de-indeed'],
    ['Unemployment among people with a degree rose from about 243,000 in 2023 to 290,000 in 2024. Restructuring deals with works councils usually protect apprentices and dual students already inside, so outside graduates bear the freeze.',
      'La disoccupazione tra chi ha una laurea è salita da circa 243.000 nel 2023 a 290.000 nel 2024. Gli accordi di ristrutturazione con i consigli di fabbrica di solito proteggono apprendisti e studenti duali già dentro, così il blocco ricade sui laureati esterni.', 'de-ba de-pipelines'],
    ['In a freeze, being the best intern does not create a job that has no budget: plan on the market of the year you graduate, not the year you enrol.',
      'In un blocco, essere il miglior tirocinante non crea un posto che non ha budget: fai i conti con il mercato dell’anno in cui ti laurei, non di quello in cui ti iscrivi.', 'ours']
  ],

  fields: [
    { f: 'finance', t: [
      ['Frankfurt front-office banking recruits mostly from Mannheim, WHU, Frankfurt School, Goethe University and St. Gallen; regional universities of applied sciences rarely reach it. Full-time roles in local teams expect fluent German.',
        'Il front office bancario di Francoforte recluta soprattutto da Mannheim, WHU, Frankfurt School, Università Goethe e San Gallo; le università di scienze applicate regionali ci arrivano di rado. I ruoli a tempo pieno nei team locali richiedono un tedesco fluente.', 'de-pipelines de-breaking']
    ] },
    { f: 'accounting', t: [
      ['The Big Four recruit audit staff early, through dual-study places with partner universities (DHBW, HSBA Hamburg, Hochschule RheinMain), internships and working-student jobs; they also run a part-time auditing master’s with Leuphana for their own staff.',
        'Le Big Four reclutano il personale di revisione presto, tramite posti di studio duale con università partner (DHBW, HSBA Amburgo, Hochschule RheinMain), tirocini e lavori da studente; hanno anche un master part-time in revisione con la Leuphana per i propri dipendenti.', 'de-big4 de-leuphana']
    ] },
    { f: 'consulting', t: [
      ['Strategy firms in Germany and Austria hire mainly through an 8-to-12-week Visiting Associate internship, open from the third bachelor’s semester; top interns get a binding offer for after graduation (BCG’s FAST FORWARD). Interviews include one case in German and one in English.',
        'Le società di consulenza strategica in Germania e Austria assumono soprattutto tramite uno stage da Visiting Associate di 8-12 settimane, aperto dal terzo semestre della triennale; i migliori ricevono un’offerta vincolante per dopo la laurea (FAST FORWARD di BCG). I colloqui includono un caso in tedesco e uno in inglese.', 'de-calendar']
    ] },
    { f: 'marketing', t: [
      ['Consumer-goods firms hire brand managers straight from university: P&G’s graduate brand-manager role in Schwalbach pays €67,500 and asks for solid German.',
        'Le aziende di beni di consumo assumono brand manager direttamente dall’università: il ruolo di brand manager per neolaureati di P&G a Schwalbach paga 67.500 € e chiede un buon tedesco.', 'de-mkt']
    ] },
    { f: 'business', t: [
      ['Industrial groups and the Mittelstand hire through dual study, working students and theses near their sites; the regional Hochschule they work with matters more than an international ranking.',
        'I gruppi industriali e il Mittelstand assumono tramite studio duale, studenti lavoratori e tesi vicino ai loro stabilimenti; la Hochschule regionale con cui collaborano conta più di una classifica internazionale.', 'de-pipelines']
    ] },
    { f: 'public', t: [
      ['The ECB’s graduate programme in Frankfurt takes about 19 people a year and only EU nationals; the Bundesbank recruits through its own competitions in German.',
        'Il programma per laureati della BCE a Francoforte prende circa 19 persone l’anno e solo cittadini UE; la Bundesbank recluta tramite propri concorsi in tedesco.', 'de-fin']
    ] },
    { f: 'tech', t: [
      ['In software, English carries more weight than elsewhere: Deutsche Bank’s technology graduate programme asks for fluent English and only basic German. Working-student roles are the usual door, and it is also where junior ads fell hardest after 2022 (IT applications down 77%).',
        'Nel software l’inglese pesa più che altrove: il programma per laureati tecnologici di Deutsche Bank chiede un inglese fluente e solo un tedesco di base. I ruoli da studente lavoratore sono la porta abituale, ed è anche il settore in cui gli annunci junior sono calati di più dopo il 2022 (applicazioni IT in calo del 77%).', 'de-db de-pipelines de-indeed']
    ] },
    { f: 'ai', t: [
      ['AI hiring runs close to university labs: students work as research assistants (HiWi) at a chair, and professors place them in spin-offs and partner companies. Around Stuttgart and Tübingen, Cyber Valley ties the Max Planck Institute and the two universities to Bosch, Amazon, BMW, Mercedes, Porsche and ZF.',
        'Le assunzioni in IA passano vicino ai laboratori universitari: gli studenti lavorano come assistenti di ricerca (HiWi) presso una cattedra, e i professori li collocano in spin-off e aziende partner. Intorno a Stoccarda e Tubinga, Cyber Valley lega l’Istituto Max Planck e le due università a Bosch, Amazon, BMW, Mercedes, Porsche e ZF.', 'ours de-cyber']
    ] },
    { f: 'cyber', t: [
      ['CISPA in Saarbrücken, a federal cybersecurity research centre, works in English and builds spin-offs with industry; the federal security agency BSI trains and hires its own staff through a study programme with the federal university of applied sciences. EY runs a dual-study track in cybersecurity.',
        'Il CISPA di Saarbrücken, centro federale di ricerca sulla cybersicurezza, lavora in inglese e crea spin-off con l’industria; l’agenzia federale per la sicurezza BSI forma e assume il proprio personale tramite un corso con l’università federale di scienze applicate. EY ha un percorso di studio duale in cybersicurezza.', 'de-cispa de-bsi de-big4']
    ] }
  ],

  schools: [
    ['Outside Frankfurt finance, the school name matters less than having worked inside the firm. Firms recruit where they already have ties: DHBW for Bosch, Mercedes and Porsche, the Munich universities for BMW.',
      'Fuori dalla finanza di Francoforte, il nome della scuola conta meno dell’aver già lavorato in azienda. Le aziende reclutano dove hanno già legami: la DHBW per Bosch, Mercedes e Porsche, le università di Monaco per BMW.', 'de-pipelines']
  ],

  events: [
    ['Company-contact fairs (Firmenkontaktmessen) on campus are how most students find their working-student job or internship. The student-run bonding fairs at technical universities draw hundreds of exhibitors; Aachen’s had over 350.',
      'Le fiere di contatto con le aziende (Firmenkontaktmessen) nei campus sono il modo in cui molti studenti trovano il lavoro da studente o il tirocinio. Le fiere bonding, organizzate dagli studenti nelle università tecniche, attirano centinaia di espositori; quella di Aquisgrana ne ha avuti oltre 350.', 'de-bonding']
  ],

  customs: [
    { k: 'season', v: 'rolling', t: [
      ['Companies with fixed trainee entry dates mostly start in October (about 40%), some in January and April, while Volkswagen, ThyssenKrupp and Deutsche Telekom take people at any time of year. BASF accepts applications at any time for advertised trainee posts and sets start dates individually.',
        'Le aziende con date di ingresso fisse per i trainee partono per lo più a ottobre (circa il 40%), alcune a gennaio e ad aprile, mentre Volkswagen, ThyssenKrupp e Deutsche Telekom accolgono persone in qualsiasi momento dell’anno. BASF accetta candidature in qualsiasi momento per i posti trainee pubblicati e fissa le date di inizio caso per caso.', 'de-efellows de-basf'],
      ['Plan for about three months from application to decision.',
        'Metti in conto circa tre mesi dalla candidatura alla decisione.', 'de-efellows']
    ] },
    { k: 'masters', v: 'helpful', t: [
      ['A master’s is common for graduate programmes: BASF’s Umwelt & Sicherheit programme asks for a master’s in engineering or a related field and TOP START for a master’s, PhD or MBA. Working-student jobs and many junior posts are open to bachelor’s students, and HR managers rank practical experience and the thesis above the degree level.',
        'Il master è comune per i programmi per laureati: il programma Umwelt & Sicherheit di BASF chiede un master in ingegneria o in un campo affine e TOP START un master, un dottorato o un MBA. I lavori da studente e molte posizioni junior sono aperti a chi ha la triennale, e i responsabili HR mettono esperienza pratica e tesi sopra il livello del titolo.', 'de-basf de-hr']
    ] },
    { k: 'degrees', v: 'regulated', t: [
      ['Formal recognition is for regulated professions and is generally handled at state level. Degrees for non-regulated jobs are assessed by the Central Office for Foreign Education (ZAB), which issues a statement of comparability, and its anabin database lists foreign institutions and degree types; recognition is often a prerequisite for work visas.',
        'Il riconoscimento formale riguarda le professioni regolamentate ed è in genere gestito a livello di Land. I titoli per i lavori non regolamentati sono valutati dall’Ufficio centrale per l’istruzione estera (ZAB), che rilascia una dichiarazione di comparabilità, e la sua banca dati anabin elenca istituzioni e titoli esteri; il riconoscimento è spesso un presupposto per i visti di lavoro.', 'de-recog'],
      ['Employers asking for a degree certificate usually want a copy; German translations can be requested, especially by smaller firms.',
        'I datori che chiedono un certificato di laurea di solito ne vogliono una copia; possono chiedere traduzioni in tedesco, soprattutto le aziende più piccole.', 'de-eures']
    ] },
    { k: 'brand', v: 'some', t: [
      ['The same 2022 HR survey names personality, practical experience and thesis topic and grade as the key criteria; the choice of university is described as increasingly important. Frankfurt front-office finance is the clear exception, recruiting from a short list of schools.',
        'La stessa indagine HR del 2022 indica come criteri chiave personalità, esperienza pratica e tema e voto della tesi; la scelta dell’università è descritta come sempre più importante. Il front office della finanza di Francoforte è l’eccezione evidente, con reclutamento da un elenco ristretto di scuole.', 'de-hr de-breaking']
    ] },
    { k: 'dual', v: 'strong', t: [
      ['In February 2024 BIBB counted 1,824 dual-study programmes and 113,526 dual students, with companies offering about 52,000 cooperation places. About 70% of DHBW graduates stay with their company.',
        'A febbraio 2024 il BIBB ha contato 1.824 corsi di studio duale e 113.526 studenti duali, con aziende che offrivano circa 52.000 posti in collaborazione. Circa il 70% dei laureati DHBW resta nella propria azienda.', 'de-bibb de-dhbw']
    ] },
    { k: 'publicw', v: 'mid', t: [
      ['About 5.4 million people worked in the public service on 30 June 2024, roughly 12% of all employed people (preliminary Destatis figure). The Bundesbank recruits through its own competitions in German, and the ECB graduate programme is open to EU nationals only.',
        'Circa 5,4 milioni di persone lavoravano nel settore pubblico al 30 giugno 2024, circa il 12% di tutti gli occupati (dato preliminare Destatis). La Bundesbank recluta tramite propri concorsi in tedesco, e il programma per laureati della BCE è aperto solo ai cittadini UE.', 'de-pubsvc de-fin']
    ] },
    { k: 'sponsorr', v: 'some', t: [
      ['Large employers do sponsor: Deutsche Bank’s technology graduate programme lists the nationalities it accepts and makes the July start subject to visa rules, and BCG says it considers all qualified applicants regardless of national origin. The ECB programme is for EU nationals only. See Visas for the rules.',
        'I grandi datori sponsorizzano davvero: il programma tecnologico per laureati di Deutsche Bank elenca le nazionalità accettate e subordina l’inizio di luglio alle norme sui visti, e BCG dichiara di valutare tutti i candidati qualificati a prescindere dall’origine. Il programma della BCE è riservato ai cittadini UE. Per le regole vedi Visti.', 'de-db de-bcg de-fin']
    ] },
    { k: 'photo', v: 'common', t: [
      ['No longer compulsory since the 2006 anti-discrimination law, so it is left to the applicant; a university career service advises a recent, professional photo if you add one. The EU’s EURES guide still calls a professional, friendly photo on a neutral background expected.',
        'Non più obbligatoria dalla legge antidiscriminazione del 2006, quindi è lasciata a chi si candida; un servizio carriera universitario consiglia una foto recente e professionale se la si aggiunge. La guida EURES dell’UE definisce ancora atteso un ritratto professionale e cordiale su sfondo neutro.', 'de-photo de-eures'],
      ['A photo is not neutral: in a field experiment it changed callbacks sharply for women wearing a headscarf.',
        'La foto non è neutra: in un esperimento sul campo ha cambiato nettamente le risposte per le donne con il velo.', 'de-breaking']
    ] },
    { k: 'cv', v: 'two', t: [
      ['The CV is limited to one to two pages, tabular, in reverse chronological order; EURES adds that it should be signed and dated. Send the whole application as one PDF under 2 MB by email (Frankfurt UAS allows up to 5 MB).',
        'Il CV è limitato a una-due pagine, tabellare, in ordine cronologico inverso; EURES aggiunge che va firmato e datato. Invia l’intera candidatura come un unico PDF sotto 2 MB per email (la Frankfurt UAS ne ammette fino a 5 MB).', 'de-frankfurt de-eures']
    ] },
    { k: 'letter', v: 'expected', t: [
      ['The cover letter (Anschreiben) is part of the full file; Allianz asks to upload CV, cover letter and certificates together. It should not exceed one A4 page and should say why this role and what you know of the firm.',
        'La lettera di presentazione (Anschreiben) fa parte del dossier completo; Allianz chiede di caricare insieme CV, lettera e certificati. Non dovrebbe superare una pagina A4 e dire perché questo ruolo e che cosa sai dell’azienda.', 'de-allianz de-eures de-frankfurt']
    ] },
    { k: 'refs', v: 'required', t: [
      ['References are written, not people: employers expect the work and internship certificates (Zeugnisse) in the file, and by law an employee may demand a written reference at the end of a job, simple or qualified (§ 109 GewO). There is no separate section for named referees; if you lack a reference, a professor’s letter can replace it.',
        'Le referenze sono scritte, non persone: i datori si aspettano nel dossier i certificati di lavoro e di tirocinio (Zeugnisse), e per legge un dipendente può chiedere a fine rapporto un attestato scritto, semplice o qualificato (§ 109 GewO). Non c’è una sezione per referenti nominativi; se manca un attestato, può sostituirlo la lettera di un professore.', 'de-gewo de-frankfurt']
    ] },
    { k: 'docs', v: 'copies', t: [
      ['Send copies, never originals: degree certificates, internship and work references, language certificates, only the ones relevant to the job. School certificates are often requested even from experienced candidates, and German translations may be required.',
        'Invia copie, mai originali: diplomi di laurea, certificati di tirocinio e di lavoro, certificati linguistici, solo quelli pertinenti al lavoro. I diplomi scolastici vengono spesso richiesti anche a chi ha esperienza, e possono essere richieste traduzioni in tedesco.', 'de-frankfurt de-eures']
    ] },
    { k: 'salary', v: 'asked', t: [
      ['If the ad explicitly asks for salary expectations, state them: a gross annual figure or range, in the last paragraph. If the ad does not ask, you need not, and the guide advises raising it in the interview.',
        'Se l’annuncio chiede esplicitamente le aspettative salariali, indicale: una cifra lorda annua o un intervallo, nell’ultimo paragrafo. Se l’annuncio non le chiede, non è obbligatorio, e la guida consiglia di parlarne al colloquio.', 'de-karrierebibel']
    ] },
    { k: 'check', v: 'some', t: [
      ['RWE adds an occupational health examination for some trainee programmes, and Allianz involves the works council in the hiring decision before the contract is sent. Beyond those named steps, how far employers check references and records is not stated on the pages read.',
        'RWE aggiunge una visita di medicina del lavoro per alcuni programmi trainee, e Allianz coinvolge il consiglio di fabbrica nella decisione di assunzione prima dell’invio del contratto. Oltre a queste fasi citate, le pagine lette non dicono fino a dove i datori controllino referenze e precedenti.', 'de-rwe de-allianz']
    ] },
    { k: 'contact', v: 'mixed', t: [
      ['Formal applications through company portals work, with a full file: cover letter, tabular CV, and certificates and reference letters (Zeugnisse), which carry weight. Reference letters also cancelled the penalty for a foreign name in one study.',
        'Le candidature formali tramite i portali aziendali funzionano, con un dossier completo: lettera, CV tabellare, certificati e lettere di referenza (Zeugnisse), che hanno peso. In uno studio le lettere di referenza hanno anche annullato la penalità per un nome straniero.', 'de-breaking'],
      ['Most graduate places go first to the firm’s own working students, interns and thesis students, so a contact made at a campus fair or in a placement often decides who is invited.',
        'La maggior parte dei posti per laureati va prima agli studenti lavoratori, ai tirocinanti e ai tesisti dell’azienda, quindi un contatto avuto a una fiera o durante un tirocinio decide spesso chi viene invitato.', 'de-pipelines']
    ] },
    { k: 'abroad', v: 'hard', t: [
      ['The working-student route needs enrolment at a German university, so the usual door opens only once you are a student there.',
        'La via dello studente lavoratore richiede l’iscrizione a un’università tedesca, quindi la porta abituale si apre solo quando sei studente lì.', 'ours'],
      ['Applying from abroad does happen for graduate programmes with an international pool (Deutsche Bank lists eligible nationalities), usually with interviews by phone or video.',
        'Candidarsi dall’estero è possibile per i programmi per laureati con un bacino internazionale (Deutsche Bank elenca le nazionalità ammesse), di solito con colloqui per telefono o video.', 'de-db de-basf']
    ] },
    { k: 'language', v: 'mostly', t: [
      ['Working German is needed for most roles outside software and international teams, and for full-time jobs in local finance.',
        'Serve un tedesco di lavoro per la maggior parte dei ruoli fuori dal software e dai team internazionali, e per i lavori a tempo pieno nella finanza locale.', 'de-pipelines de-breaking'],
      ['Indeed finds that only 2.4–2.8% of postings in Germany, the UK and Ireland say the local language is not required.',
        'Indeed rileva che solo il 2,4–2,8% degli annunci in Germania, Regno Unito e Irlanda dichiara che la lingua locale non è richiesta.', 'de-indeed-lang']
    ] }
  ],

  rows: {
    process: [
      ['A typical corporate trainee process has 4 to 7 steps: online application, document review, an online test (BASF: 90 minutes), a phone or recorded video interview, an interview with the programme manager and an interview day. RWE quotes up to 12 weeks, with first feedback after about 2 weeks.',
        'Un processo trainee aziendale tipico ha da 4 a 7 fasi: candidatura online, esame dei documenti, un test online (BASF: 90 minuti), un colloquio telefonico o video registrato, un colloquio con il responsabile del programma e una giornata di colloqui. RWE indica fino a 12 settimane, con primo riscontro dopo circa 2 settimane.', 'de-basf de-rwe'],
      ['In a Haniel/Kienbaum study cited by e-fellows, about half of companies used a telephone interview and about two-thirds an assessment centre, run as a selection day (or two) where several staff observe a group of candidates; cognitive tests were rare in Germany (9%). Commerzbank’s trainee route is phone interview, assessment centre, individual feedback.',
        'In uno studio Haniel/Kienbaum citato da e-fellows, circa la metà delle aziende usava un colloquio telefonico e circa due terzi un assessment centre, svolto in una giornata (o due) in cui più dipendenti osservano un gruppo di candidati; i test cognitivi erano rari in Germania (9%). Il percorso trainee di Commerzbank è colloquio telefonico, assessment centre e feedback individuale.', 'de-efellows de-commerz'],
      ['Allianz runs 2 or 3 interviews with the department and HR, virtual and/or in person. Strategy consulting adds cases, one in German and one in English; RWE says it does not use AI to assess applications.',
        'Allianz fa 2 o 3 colloqui con il reparto e le risorse umane, virtuali e/o di persona. La consulenza strategica aggiunge casi, uno in tedesco e uno in inglese; RWE dichiara di non usare l’IA per valutare le candidature.', 'de-allianz de-calendar de-rwe']
    ],
    offer: [
      ['After the interviews come an offer conversation, then the contract documents (Allianz sends them digitally and by post) after a hearing of the works council. Trainee contracts are often open-ended from the start: Commerzbank states so for its 18-month programme.',
        'Dopo i colloqui arriva una conversazione sull’offerta, poi i documenti contrattuali (Allianz li invia in digitale e per posta) dopo l’audizione del consiglio di fabbrica. I contratti trainee sono spesso a tempo indeterminato fin dall’inizio: Commerzbank lo dichiara per il suo programma di 18 mesi.', 'de-allianz de-commerz'],
      ['Probation lasts at most 6 months with 2 weeks’ notice for both sides; after it, the basic notice is 4 weeks to the 15th or the end of a month and rises with years of service (1 month after 2 years, 2 months after 5, 4 after 10).',
        'La prova dura al massimo 6 mesi con preavviso di 2 settimane per entrambe le parti; dopo, il preavviso base è di 4 settimane per il 15 o per fine mese e cresce con l’anzianità (1 mese dopo 2 anni, 2 mesi dopo 5, 4 dopo 10).', 'de-bgb622 de-eures'],
      ['The employer must put the essential terms in writing (pay, hours, leave, probation, notice) under the Nachweisgesetz: the basics by the first day of work, pay and hours within 7 days, the rest within a month. A no-reason fixed term cannot follow earlier employment with the same firm.',
        'Il datore deve mettere per iscritto le condizioni essenziali (retribuzione, orario, ferie, prova, preavviso) secondo il Nachweisgesetz: le basi entro il primo giorno di lavoro, retribuzione e orario entro 7 giorni, il resto entro un mese. Un termine senza motivo non può seguire un precedente impiego presso la stessa azienda.', 'de-nachwg de-contract'],
      ['Negotiation starts in the interview, not the application. Quote gross annual pay (without any 13th salary), and keep 5–10% of room above your minimum.',
        'La trattativa inizia al colloquio, non nella candidatura. Indica la retribuzione lorda annua (senza l’eventuale 13ª mensilità) e tieni un margine del 5–10% sopra il tuo minimo.', 'de-karrierebibel']
    ],
    sponsor: [
      ['The employers that sponsor are large groups with a graduate pool from abroad and HR teams used to the paperwork: Deutsche Bank’s graduate programme lists eligible nationalities and a start date subject to visa rules. Programmes limited to EU citizens (ECB) do not.',
        'I datori che sponsorizzano sono grandi gruppi con un bacino di laureati dall’estero e uffici HR abituati alle pratiche: il programma per laureati di Deutsche Bank elenca le nazionalità ammesse e una data di inizio subordinata alle norme sui visti. I programmi riservati ai cittadini UE (BCE) non lo fanno.', 'de-db de-fin'],
      ['The employer has a fast lane of its own: the accelerated skilled-workers procedure (§ 81a), which the employer starts for a flat fee of €411 and which sets deadlines for approval and consulate appointments. Recognition of the degree is often needed first, so ask early.',
        'Il datore ha una corsia veloce propria: la procedura accelerata per lavoratori qualificati (§ 81a), che il datore avvia con una tariffa forfettaria di 411 € e che fissa termini per l’approvazione e per gli appuntamenti consolari. Spesso serve prima il riconoscimento del titolo, quindi chiedi presto.', 'de-visa de-recog'],
      ['What an employer wants to hear is a plain account of your status: whether the degree is recognised, when you could start and which permit you will need. Raise it early, because selection takes up to 12 weeks at RWE and about three months in the e-fellows account.',
        'Ciò che un datore vuole sentire è un quadro chiaro della tua situazione: se il titolo è riconosciuto, quando potresti iniziare e quale permesso ti servirà. Sollevalo presto, perché la selezione richiede fino a 12 settimane da RWE e circa tre mesi nel resoconto di e-fellows.', 'de-rwe de-efellows']
    ],
    where: [
      ['Official portals named by EURES: the Federal Employment Agency job portal (arbeitsagentur.de/jobsuche), Make it in Germany and EURES. Company career sites are where graduate programmes are posted (careers.allianz.com, karriere.basf.com, RWE’s job board).',
        'Portali ufficiali indicati da EURES: il portale di lavoro dell’Agenzia federale per il lavoro (arbeitsagentur.de/jobsuche), Make it in Germany ed EURES. I siti carriera delle aziende sono dove si pubblicano i programmi per laureati (careers.allianz.com, karriere.basf.com, la job board di RWE).', 'de-eures de-arbeitsagentur de-allianz de-basf de-rwe'],
      ['University career services (for example the Frankfurt UAS career service) help with the application file, and student-run company-contact fairs such as bonding in Aachen link students to employers.',
        'I servizi carriera universitari (per esempio quello della Frankfurt UAS) aiutano con il dossier di candidatura, e le fiere di contatto con le aziende organizzate dagli studenti, come bonding ad Aquisgrana, collegano studenti e datori.', 'de-frankfurt de-bonding'],
      ['Programmes to look up: the ECB graduate programme, Deutsche Bank graduate programmes, BASF TOP START, Commerzbank trainee, RWE trainee programmes and BCG’s internships.',
        'Programmi da consultare: il programma per laureati della BCE, i graduate programmes di Deutsche Bank, BASF TOP START, il trainee di Commerzbank, i programmi trainee di RWE e gli stage di BCG.', 'de-fin de-db de-basf de-commerz de-rwe de-bcg']
    ],
    mistakes: [
      ['Sending an English-only or one-page UK CV to a local employer: the file is expected to be a tabular CV, a letter and the certificates in one PDF, with a photo common.',
        'Mandare un CV solo in inglese o di una pagina in stile britannico a un datore locale: ci si aspetta un file con CV tabellare, lettera e certificati in un unico PDF, con foto comune.', 'de-eures de-frankfurt'],
      ['Skipping the Werkstudent job, internship or company thesis: firms fill graduate places from their own pool first, and a cold application competes for what is left.',
        'Saltare il lavoro da studente, il tirocinio o la tesi in azienda: le aziende riempiono prima i posti per laureati dal proprio bacino, e una candidatura a freddo si contende ciò che resta.', 'de-pipelines'],
      ['Leaving out the Zeugnisse, or giving a salary figure in the wrong form: quote gross annual pay when the ad asks, and nothing when it does not.',
        'Omettere gli Zeugnisse, o indicare lo stipendio nella forma sbagliata: indica la retribuzione lorda annua quando l’annuncio lo chiede, e niente quando non lo chiede.', 'de-breaking de-karrierebibel'],
      ['Applying to more than one RWE trainee programme in a round: the employer accepts one per round, and popular programmes can close applications early.',
        'Candidarsi a più di un programma trainee di RWE in un turno: il datore ne ammette uno per turno, e i programmi più richiesti possono chiudere presto le candidature.', 'de-rwe de-indeed']
    ]
  },

  lang: [
    { f: 'finance', v: 'bilingual', t: [
      ['Full-time roles in local Frankfurt teams expect fluent German; Deutsche Bank’s technology graduate programme asks for fluent English and basic German.',
        'I ruoli a tempo pieno nei team locali di Francoforte richiedono un tedesco fluente; il programma tecnologico per laureati di Deutsche Bank chiede inglese fluente e tedesco di base.', 'de-breaking de-db']
    ] },
    { f: 'accounting', v: 'local', t: [
      ['The Big Four’s German entry routes are dual-study places with partner universities (DHBW, HSBA Hamburg, Hochschule RheinMain), internships and working-student jobs; the pages read state no language level, and the routes sit inside German institutions.',
        'I canali di ingresso delle Big Four in Germania sono posti di studio duale con università partner (DHBW, HSBA Amburgo, Hochschule RheinMain), tirocini e lavori da studente; le pagine lette non indicano un livello linguistico, e i canali si svolgono dentro istituzioni tedesche.', 'de-big4']
    ] },
    { f: 'consulting', v: 'bilingual', t: [
      ['Strategy firms in Germany and Austria test both: one case interview in German and one in English.',
        'Le società di strategia in Germania e Austria verificano entrambe: un colloquio su caso in tedesco e uno in inglese.', 'de-calendar']
    ] },
    { f: 'marketing', v: 'local', t: [
      ['P&G’s graduate brand-manager role in Schwalbach asks for solid German.',
        'Il ruolo di brand manager per neolaureati di P&G a Schwalbach chiede un buon tedesco.', 'de-mkt']
    ] },
    { f: 'business', v: 'local', t: [
      ['Industrial groups and the Mittelstand hire through dual study, working students and theses near their sites, in German.',
        'I gruppi industriali e il Mittelstand assumono tramite studio duale, studenti lavoratori e tesi vicino ai loro stabilimenti, in tedesco.', 'de-pipelines']
    ] },
    { f: 'tech', v: 'english', t: [
      ['Deutsche Bank’s technology graduate programme asks for fluent English and basic German; the posting also asks for practical programming experience.',
        'Il programma tecnologico per laureati di Deutsche Bank chiede inglese fluente e tedesco di base; l’annuncio chiede anche esperienza pratica di programmazione.', 'de-db']
    ] },
    { f: 'ai', v: 'english', t: [
      ['CISPA, the federal cybersecurity research centre in Saarbrücken, works in English; AI hiring around Cyber Valley runs through university labs and partner companies.',
        'Il CISPA, centro federale di ricerca sulla cybersicurezza a Saarbrücken, lavora in inglese; le assunzioni in IA intorno a Cyber Valley passano da laboratori universitari e aziende partner.', 'de-cispa de-cyber']
    ] }
  ],

  programmes: [
    { n: 'ECB Graduate Programme', o: 'European Central Bank', f: 'public', in: 19, w: null, lang: 'not stated', intl: 'eu', ids: 'de-fin' },
    { n: 'TOP START International Business Leader', o: 'BASF', f: 'business', in: null, w: null, lang: 'not stated', intl: 'unknown', ids: 'de-basf' },
    { n: 'Trainee programmes', o: 'RWE', f: 'business', in: null, w: null, lang: 'not stated', intl: 'unknown', ids: 'de-rwe' },
    { n: 'Trainee programme (18 months)', o: 'Commerzbank', f: 'finance', in: null, w: null, lang: 'not stated', intl: 'unknown', ids: 'de-commerz' },
    { n: 'Graduate Programme Technology, Data & Innovation', o: 'Deutsche Bank', f: 'tech', in: null, w: null, lang: 'EN DE', intl: 'yes', ids: 'de-db' },
    { n: 'Internship and FAST FORWARD', o: 'BCG', f: 'consulting', in: null, w: null, lang: 'DE EN', intl: 'yes', ids: 'de-bcg de-calendar' },
    { n: 'Graduate brand manager', o: 'Procter & Gamble', f: 'marketing', in: null, w: null, lang: 'DE', intl: 'unknown', ids: 'de-mkt' },
    { n: 'Dual study (audit, cybersecurity)', o: 'EY', f: 'accounting', in: null, w: null, lang: 'DE', intl: 'unknown', ids: 'de-big4' }
  ],

  outcomes: [
    ['The unemployment rate of people with a degree was around 3% in 2024, up from about 2.5% in 2023; the number of unemployed graduates averaged 290,000 in 2024 against 243,000 in 2023.',
      'Il tasso di disoccupazione di chi ha una laurea era intorno al 3% nel 2024, in aumento dal 2,5% circa del 2023; il numero di laureati disoccupati è stato in media di 290.000 nel 2024 contro 243.000 nel 2023.', 'de-ba'],
    ['New job postings requiring highly complex skills fell to 206,000 in 2024, down 12% on the year, against 8% for all occupations.',
      'Le nuove offerte che richiedono competenze molto complesse sono scese a 206.000 nel 2024, in calo del 12% sull’anno, contro l’8% di tutte le professioni.', 'de-ba'],
    ['Conversion is partial: in StepStone’s data for 2017 about half of interns and a third of working students were taken on permanently.',
      'La conversione è parziale: nei dati StepStone del 2017 circa la metà dei tirocinanti e un terzo degli studenti lavoratori fu assunta a tempo indeterminato.', 'de-stepstone']
  ],

  sources: {
    'de-bcg': ['employer-stated', 'BCG Germany and Austria: Bindungsprogramme (FAST FORWARD, EMERALDS)', 'https://careers.bcg.com/global/en/germany-austria-bindungsprogramme', '2026-10-08'],
    'de-eures': ['data', 'EURES: living and working conditions in Germany (application, documents, probation, notice)', 'https://eures.europa.eu/living-and-working/living-and-working-conditions-europe/living-and-working-conditions-germany_de', '2026-10-08'],
    'de-frankfurt': ['practitioner consensus', 'Frankfurt University of Applied Sciences, Career Service: application documents', 'https://www.frankfurt-university.de/de/hochschule/career-service/bewerbungsunterlagen/', '2026-10-08'],
    'de-bibb': ['data', 'BIBB press release 25/2025: AusbildungPlus, dual study in numbers 2024 (reference date 28 February 2024)', 'https://www.bibb.de/de/pressemitteilung_211676.php', '2026-10-08'],
    'de-pubsvc': ['data', 'Haufe: more than 5.4 million people work in the public service (Destatis, 30 June 2024)', 'https://www.haufe.de/oeffentlicher-dienst/personal-tarifrecht/ueber-54-millionen-personen-arbeiten-fuer-den-oeffentlichen-dienst_144_654418.html', '2026-10-08'],
    'de-efellows': ['practitioner consensus', 'e-fellows.net: applying to trainee programmes (stages, duration, entry dates)', 'https://www.e-fellows.net/karriere/trainee/bewerbung-fuer-trainee-programme', '2026-10-08'],
    'de-basf': ['employer-stated', 'BASF careers: trainee programmes (Umwelt & Sicherheit, TOP START)', 'https://karriere.basf.com/de/de/einstieg/traineeprogramme', '2026-10-08'],
    'de-rwe': ['employer-stated', 'RWE careers: trainee programmes and graduate entry', 'https://rwe.com/karriere-bei-rwe/berufseinsteiger/traineeprogramme', '2026-10-08'],
    'de-commerz': ['employer-stated', 'Commerzbank careers: the application process (trainee, dual study, experienced)', 'https://www.commerzbank.de/konzern/karriere/bewerbung/', '2026-10-08'],
    'de-allianz': ['employer-stated', 'Allianz: application process in Germany (slide deck, March 2026)', 'https://www.allianz.com/content/dam/onemarketing/azcom/Allianz_com/allianz-careers/bewerbungsprozess-allianz-deutschland.pdf', '2026-10-08'],
    'de-db': ['employer-stated', 'Deutsche Bank Graduate Programme Technology, Data & Innovation 2027, as listed on HeySuccess', 'https://www.heysuccess.com/opportunity/Deutsche-Bank-Graduate-Programme-Technology-Data-Innovation-2027-53561', '2026-10-08'],
    'de-bgb622': ['data', 'Bürgerliches Gesetzbuch § 622: notice periods and probation', 'https://www.gesetze-im-internet.de/bgb/__622.html', '2026-10-08'],
    'de-gewo': ['data', 'Gewerbeordnung § 109: the employee’s right to a Zeugnis', 'https://www.gesetze-im-internet.de/gewo/__109.html', '2026-10-08'],
    'de-nachwg': ['data', 'Nachweisgesetz § 2: terms the employer must put in writing', 'https://www.gesetze-im-internet.de/nachwg/__2.html', '2026-10-08'],
    'de-karrierebibel': ['practitioner consensus', 'Karrierebibel: salary expectation in the application (Gehaltsvorstellung)', 'https://karrierebibel.de/gehaltsvorstellung/', '2026-10-08'],
    'de-recog': ['data', 'EURAXESS Germany: recognition of qualifications (regulated professions, anabin, ZAB)', 'https://euraxess.de/germany/information-assistance/recognition-qualifications', '2026-10-08'],
    'de-arbeitsagentur': ['data', 'Bundesagentur für Arbeit: Jobsuche, the federal job portal', 'https://www.arbeitsagentur.de/jobsuche/', '2026-10-08'],
    'de-indeed-lang': ['data', 'Indeed Hiring Lab: how language flexibility shapes job opportunities for migrants, 10 October 2024', 'https://hiringlab.indeed.com/uk/blog/2024/10/10/how-language-flexibility-shapes-job-opportunities-for-migrants/', '2026-10-08'],
    'de-visa': ['practitioner consensus', 'Admetia research library: visas_immigration/germany guide (skilled-worker procedure § 81a, Blue Card)', 'research/visas_immigration/germany/germany_visas_immigration_guide.md', '2026-10-02'],
    'de-contract': ['practitioner consensus', 'Admetia research library: getting-in/applications-and-interviews.md (fixed terms and probation in Germany)', 'research/getting-in/applications-and-interviews.md', '2026-10-01'],
    'de-pipelines': ['practitioner consensus', 'Admetia research library: getting-in/employer-pipelines.md §1 and §9 (DHBW panel, Bosch, Mercedes, BMW and Porsche pages, IG Metall)', 'research/getting-in/employer-pipelines.md', '2026-10-02'],
    'de-breaking': ['practitioner consensus', 'Admetia research library: getting-in/breaking-in.md §3 and §6 (Kaas and Manger 2010; Weichselbaumer 2016)', 'research/getting-in/breaking-in.md', '2026-09-30'],
    'de-dhbw': ['data', 'DHBW graduate panel, second wave, December 2022', 'https://www.dhbw.de/fileadmin/user_upload/Dokumente/Schrifterzeugnisse/Bericht_AbsolventinnenPanel_Kohorte2_Endversion.pdf', '2026-10-02'],
    'de-hr': ['data', 'Universum survey of more than 500 HR managers for WirtschaftsWoche, 2022, summarised by HWR Berlin', 'https://www.hwr-berlin.de/aktuelles/neuigkeit/detail/2721-absolvent-innen-bei-personalverantwortlichen-gefragt', '2026-10-02'],
    'de-stepstone': ['data', 'StepStone graduate-entry study, reported by OnlineMarketing.de, 22 June 2018 (hires of 2017)', 'https://onlinemarketing.de/karriere/human-resources/stepstone-studie-arbeitgeber', '2026-10-07'],
    'de-indeed': ['data', 'Indeed Hiring Lab analysis of job ads to July 2026, reported by ZDFheute, 23 September 2026', 'https://www.zdfheute.de/wissen/berufseinsteiger-stelle-job-angebote-rueckgang-100.html', '2026-10-07'],
    'de-ba': ['data', 'Federal Employment Agency figures on unemployed graduates, reported by Forschung & Lehre, 21 August 2025', 'https://www.forschung-und-lehre.de/karriere/arbeitslosenquote-bei-menschen-mit-hochschulabschluss-erreicht-allzeithoch-7245', '2026-10-07'],
    'de-cyber': ['employer-stated', 'Max Planck Society: Amazon wants to join Cyber Valley (founding partners listed)', 'https://www.mpg.de/11667483/amazon-wants-to-join-cyber-valley', '2026-10-07'],
    'de-bonding': ['employer-stated', 'bonding-studenteninitiative e.V., Firmenkontaktmesse Aachen', 'https://aachen.firmenkontaktmesse.de/', '2026-10-07'],
    'de-photo': ['practitioner consensus', 'Leuphana University Lüneburg, Career Service: cover sheet and application photo (no obligation since the 2006 AGG)', 'https://www.leuphana.de/services/career-service/bewerben/die-schriftliche-bewerbung/deckblatt-und-foto.html', '2026-10-09'],
    'de-big4': ['employer-stated', 'Gehaltsvergleich.com: EY, careers, internships and dual study (partner universities, cybersecurity track)', 'https://www.gehaltsvergleich.com/news/ey-gehalt-karriere-praktikum-und-jobs-bei-ernst-and-young', '2026-10-07'],
    'de-leuphana': ['employer-stated', 'Leuphana Professional School: part-time master’s in auditing with the Big Four (audit xcellence)', 'https://www.leuphana.de/professional-school/berufsbegleitende-master-mba/studium-auditing-wirtschaftspruefung/audit-xcellence.html', '2026-10-07'],
    'de-calendar': ['employer-stated', 'Admetia research library: getting-in/recruiting-calendar.md §3.2 and §4 (Visiting Associate, FAST FORWARD, BCG interviews)', 'research/getting-in/recruiting-calendar.md', '2026-10-02'],
    'de-mkt': ['employer-stated', 'Admetia research library: careers/marketing.md §1 (P&G Brand Manager graduate entry, Schwalbach, June 2026)', 'research/careers/marketing.md', '2026-10-02'],
    'de-fin': ['employer-stated', 'Admetia research library: careers/finance.md §1.5 and §9.3 (ECB Graduate Programme; Bundesbank)', 'research/careers/finance.md', '2026-10-02'],
    'de-cispa': ['employer-stated', 'CISPA Helmholtz Center for Information Security: careers, doctoral positions', 'https://career.cispa.de/phd/', '2026-10-07'],
    'de-bsi': ['practitioner consensus', 'Computerwoche: an agency under the sign of security (BSI study programme with the HS Bund)', 'https://www.computerwoche.de/article/2604622/ein-amt-im-zeichen-der-sicherheit.html', '2026-10-07']
  }
});
