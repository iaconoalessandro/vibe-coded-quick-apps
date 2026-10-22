/* How hiring works: Iceland. Reads on 7 and 8 Oct 2026: Work in Iceland
 * (Directorate of Labour: job hunting, work permit, hiring a specialist), VR
 * (job seekers), EURES (living and working in Iceland), ASÍ labour-law pages,
 * Alfreð, Reykjavík University career days, University of Iceland Tengslatorg,
 * Arion Bank graduate programme, Fenris Creations (CCP) careers, island.is
 * (Student Innovation Fund), ENIC-NARIC.net, Statistics Iceland (VIN10032). */
ATLAS.addEntry({
  id: 'IS',
  checked: '2026-10-08',
  review: '2027-04-08',

  lead: [
    ['Iceland is so small that the official advice is to identify the firms that match your skills and contact them directly, through LinkedIn or their HR people; speculative applications are common and interviews are often informal.',
      'L’Islanda è così piccola che il consiglio ufficiale è individuare le aziende adatte alle proprie competenze e contattarle direttamente, tramite LinkedIn o le loro risorse umane; le candidature spontanee sono comuni e i colloqui spesso informali.', 'is-work'],
    ['Most vacancies are written in Icelandic, so the roles open to someone who does not speak it are the ones advertised in English, and the main channels for graduates are the two big universities in January.',
      'La maggior parte degli annunci è in islandese, quindi i ruoli aperti a chi non lo parla sono quelli pubblicati in inglese, e i canali principali per i laureati sono le due grandi università a gennaio.', 'is-work is-ru-days']
  ],

  ways: [
    { name: ['Direct approach and unadvertised roles', 'Contatto diretto e posti non pubblicati'], r: 'direct', p: 'first exp', basis: 'consensus', t: [
      ['Write to the firm, follow up, and ask to meet; Icelandic job portals such as Alfreð and Starf carry the advertised posts. Work in Iceland says recruitment agencies often fill roles that are never advertised, and Alfreð has a talent pool that shows jobs that are not advertised and match your skills.',
        'Scrivi all’azienda, insisti, e chiedi di incontrarvi; i portali islandesi come Alfreð e Starf riportano i posti pubblicati. Work in Iceland osserva che le agenzie di selezione coprono spesso ruoli che non vengono mai pubblicati, e Alfreð ha un bacino di talenti che mostra i lavori non pubblicati adatti alle tue competenze.', 'is-work is-alfred']
    ] },
    { name: ['Graduate programmes and company traineeships', 'Programmi per laureati e tirocini aziendali'], r: 'scheme', p: 'first intern', basis: 'consensus', t: [
      ['Arion Bank runs a 15-month graduate programme with a rotation between positions every few months, a mentor for the whole period and three tracks (legal services, retail banking, open); its next applications open in January 2027.',
        'Arion Bank gestisce un programma per laureati di 15 mesi con una rotazione tra posizioni ogni pochi mesi, un mentore per tutto il periodo e tre percorsi (servizi legali, banca retail, aperto); le prossime candidature si aprono a gennaio 2027.', 'is-arion-grad'],
      ['Few firms publish a scheme like this: it is the one we could read, and the page does not state the number of places, the degree or the language it asks for.',
        'Poche aziende pubblicano un programma di questo tipo: è l’unico che abbiamo potuto leggere, e la pagina non indica il numero di posti, il titolo né la lingua richiesti.', 'is-arion-grad']
    ] },
    { name: ['University career days and job boards', 'Giornate della carriera e bacheche universitarie'], r: 'campus', p: 'first intern', basis: 'consensus', t: [
      ['Reykjavík University’s Career Days (Framadagar) ran on 20–22 January 2026 and brought 61 companies and organisations to the campus for summer jobs, permanent roles and project work; 22 of them held short micro interviews with no registration, and the events were in Icelandic.',
        'Le Career Days (Framadagar) della Reykjavík University si sono svolte il 20–22 gennaio 2026 e hanno portato nel campus 61 aziende e organizzazioni per lavori estivi, posti stabili e progetti; 22 di esse hanno tenuto brevi micro-colloqui senza registrazione, e gli eventi erano in islandese.', 'is-ru-days'],
      ['The University of Iceland’s Tengslatorg lets employers post summer jobs, part-time jobs during studies, graduate roles and internships, and reaches about 14,000 students.',
        'Il Tengslatorg dell’Università d’Islanda permette ai datori di pubblicare lavori estivi, lavori part-time durante gli studi, ruoli per laureati e tirocini, e raggiunge circa 14.000 studenti.', 'is-tengslatorg']
    ] },
    { name: ['Summer research jobs for students', 'Lavori estivi di ricerca per studenti'], r: 'intern', p: 'intern first', basis: 'data', t: [
      ['The Student Innovation Fund (run by Rannís) pays up to 3 months of summer work on research and development projects at 340,000 ISK a month for bachelor’s and master’s students; the student needs a named supervisor, and applications in 2026 ran from 19 December 2025 to 17 February 2026.',
        'Il Fondo per l’innovazione degli studenti (gestito da Rannís) finanzia fino a 3 mesi di lavoro estivo su progetti di ricerca e sviluppo a 340.000 ISK al mese per studenti di laurea triennale e magistrale; lo studente deve indicare un supervisore, e le domande del 2026 sono state accettate dal 19 dicembre 2025 al 17 febbraio 2026.', 'is-sif']
    ] },
    { name: ['Recruitment agencies', 'Agenzie di selezione'], r: 'agency', p: 'exp', basis: 'consensus', t: [
      ['Work in Iceland lists Brú Talent, Hagvangur, HH ráðgjöf, Intellecta and Ráðum, and advises contacting them, since they often fill roles that are not advertised; HH ráðgjöf lists mostly non-degree jobs in Icelandic.',
        'Work in Iceland elenca Brú Talent, Hagvangur, HH ráðgjöf, Intellecta e Ráðum, e consiglia di contattarle, perché spesso coprono ruoli che non sono pubblicati; HH ráðgjöf elenca per lo più lavori senza laurea in islandese.', 'is-work']
    ] },
    { name: ['State and municipal jobs (Starfatorg)', 'Posti statali e comunali (Starfatorg)'], r: 'public', p: 'first exp', basis: 'data', t: [
      ['Public administration, education, health and social work employed 77,246 of 234,604 people (32.9%) in June 2026, though the section includes some private providers; state vacancies are advertised on Starfatorg and Reykjavík city’s jobs page, mostly in Icelandic. The central bank takes general applications on its website, which it keeps for six months.',
        'Amministrazione pubblica, istruzione, sanità e assistenza sociale impiegavano 77.246 persone su 234.604 (32,9%) a giugno 2026, anche se la sezione comprende alcuni fornitori privati; i posti statali sono pubblicati su Starfatorg e sulla pagina dei lavori della città di Reykjavík, per lo più in islandese. La banca centrale accetta candidature generiche sul suo sito e le conserva per sei mesi.', 'is-stat-vin is-work']
    ] }
  ],

  cycle: [
    ['Applications for summer jobs and graduate programmes cluster at the start of the year: Career Days in January, the Student Innovation Fund from 19 December to 17 February, and Arion’s next graduate round in January 2027.',
      'Le candidature per i lavori estivi e i programmi per laureati si concentrano all’inizio dell’anno: le Career Days a gennaio, il Fondo per l’innovazione degli studenti dal 19 dicembre al 17 febbraio e il prossimo ciclo di Arion per laureati a gennaio 2027.', 'is-ru-days is-sif is-arion-grad'],
    ['Recent graduates fare well in a small market: in 2025, 92.0% of tertiary graduates aged 20–34 who finished within the last three years were in work (EU 85.3%), and unemployment among 15-to-24-year-olds was 9.5% (EU 15.2%).',
      'I neolaureati se la cavano bene in un mercato piccolo: nel 2025 il 92,0% dei laureati di 20–34 anni che avevano finito gli studi da meno di tre anni lavorava (UE 85,3%), e la disoccupazione tra i 15-24enni era del 9,5% (UE 15,2%).', 'is-grad-eurostat']
  ],

  fields: [
    { f: 'finance', t: [
      ['Three banks dominate (Landsbankinn, Íslandsbanki, Arion) and hire graduates of the University of Iceland and Reykjavík University, in Icelandic.',
        'Tre banche dominano (Landsbankinn, Íslandsbanki, Arion) e assumono laureati dell’Università d’Islanda e dell’Università di Reykjavík, in islandese.', 'ours'],
      ['Arion is the one with a published entry scheme: a 15-month graduate programme with legal-services, retail-banking and open tracks.',
        'Arion è l’unica con un programma d’ingresso pubblicato: un programma per laureati di 15 mesi con percorsi in servizi legali, banca retail e aperto.', 'is-arion-grad']
    ] },
    { f: 'tech', t: [
      ['A small software sector, games (CCP) and health and fishing technology, recruits largely through Reykjavík University and personal contact; some roles work in English.',
        'Un piccolo settore software, i videogiochi (CCP) e le tecnologie per la salute e la pesca, recluta in gran parte tramite l’Università di Reykjavík e il contatto personale; alcuni ruoli lavorano in inglese.', 'ours is-work'],
      ['CCP’s careers page (now under the Fenris Creations name) says English is the common language and applications are made in English; the steps are a phone call, a video interview with a possible skills test, a third interview and sometimes an onsite day, aimed at about six weeks.',
        'La pagina carriere di CCP (ora sotto il nome Fenris Creations) dice che l’inglese è la lingua comune e che le candidature si fanno in inglese; i passi sono una telefonata, un colloquio in video con un possibile test di competenze, un terzo colloquio e a volte una giornata in sede, con l’obiettivo di circa sei settimane.', 'is-fenris']
    ] },
    { f: 'public', t: [
      ['The state advertises on Starfatorg, mostly in Icelandic, and the University of Iceland hosted EFTA, the EFTA Surveillance Authority and the Financial Mechanism Office on 21 January 2026 to present an 11-month paid Junior Professional Programme in Brussels, Luxembourg or Geneva.',
        'Lo Stato pubblica gli annunci su Starfatorg, per lo più in islandese, e l’Università d’Islanda ha ospitato il 21 gennaio 2026 l’EFTA, l’Autorità di vigilanza EFTA e il Financial Mechanism Office per presentare un Junior Professional Programme retribuito di 11 mesi a Bruxelles, Lussemburgo o Ginevra.', 'is-work is-hi-jpp']
    ] }
  ],

  schools: [
    ['The University of Iceland and Reykjavík University are the two campuses where employers recruit: Career Days at Reykjavík University drew 61 organisations in January 2026, and the University of Iceland’s Tengslatorg reaches about 14,000 students.',
      'L’Università d’Islanda e la Reykjavík University sono i due campus dove reclutano i datori di lavoro: le Career Days della Reykjavík University hanno attirato 61 organizzazioni a gennaio 2026, e il Tengslatorg dell’Università d’Islanda raggiunge circa 14.000 studenti.', 'is-ru-days is-tengslatorg']
  ],

  events: [
    ['Career Days (Framadagar) at Reykjavík University, 20–22 January 2026: a main day on 22 January with 61 organisations, micro interviews, and CV, cover-letter, interview and LinkedIn workshops, all in Icelandic.',
      'Career Days (Framadagar) alla Reykjavík University, 20–22 gennaio 2026: una giornata principale il 22 gennaio con 61 organizzazioni, micro-colloqui e laboratori su CV, lettera di presentazione, colloquio e LinkedIn, tutti in islandese.', 'is-ru-days'],
    ['At the University of Iceland, Tengslatorg ran a session on 21 January 2026 on the EFTA, ESA and FMO Junior Professional Programme for bachelor’s and master’s students, in English.',
      'All’Università d’Islanda il Tengslatorg ha tenuto il 21 gennaio 2026 una sessione sul Junior Professional Programme di EFTA, ESA e FMO per studenti di laurea triennale e magistrale, in inglese.', 'is-hi-jpp']
  ],

  customs: [
    { k: 'season', v: 'cyclical', t: [
      ['Applications cluster in the first months of the year: Career Days at Reykjavík University ran on 20–22 January 2026 for summer jobs, permanent roles and project work, the next Arion graduate round opens in January 2027, and the Student Innovation Fund’s summer grants took applications from 19 December 2025 to 17 February 2026. Outside those windows, jobs are advertised as they come.',
        'Le candidature si concentrano nei primi mesi dell’anno: le Career Days della Reykjavík University si sono svolte il 20–22 gennaio 2026 per lavori estivi, posti stabili e progetti, il prossimo ciclo Arion per laureati si apre a gennaio 2027, e le borse estive del Fondo per l’innovazione degli studenti hanno accettato domande dal 19 dicembre 2025 al 17 febbraio 2026. Fuori da queste finestre, i lavori sono pubblicati man mano che si liberano.', 'is-ru-days is-arion-grad is-sif is-alfred']
    ] },
    { k: 'masters', v: 'irrelevant', t: [
      ['In 2025, 49.0% of employed 25–64-year-olds had a tertiary education, so a degree is the norm; we found no Icelandic employer page that asks for a master’s, and the Student Innovation Fund funds bachelor’s and master’s students alike.',
        'Nel 2025 il 49,0% degli occupati tra 25 e 64 anni aveva un titolo terziario, quindi una laurea è la norma; non abbiamo trovato alcuna pagina di un datore islandese che chieda una magistrale, e il Fondo per l’innovazione degli studenti finanzia allo stesso modo studenti di triennale e di magistrale.', 'is-lfs is-sif']
    ] },
    { k: 'degrees', v: 'regulated', t: [
      ['ENIC/NARIC Iceland sits at the University of Iceland; for regulated jobs the profession’s own authority decides, such as the Directorate of Health for medical staff and the Ministry of Industries and Innovation for technical services and design. For other jobs Work in Iceland and EURES advise bringing diplomas, translated into English or Icelandic. We did not find fees or timelines.',
        'L’ENIC/NARIC Islanda ha sede presso l’Università d’Islanda; per i lavori regolamentati decide l’autorità della professione, come la Direzione della Salute per il personale medico e il Ministero delle Industrie e dell’Innovazione per i servizi tecnici e il design. Per gli altri lavori Work in Iceland e EURES consigliano di portare i diplomi, tradotti in inglese o in islandese. Non abbiamo trovato costi né tempi.', 'is-enic is-wi-permit is-eures']
    ] },
    { k: 'brand', v: 'some', t: [
      ['The University of Iceland and Reykjavík University are where employers go to recruit (61 organisations at Reykjavík University’s Career Days in 2026, Tengslatorg at the University of Iceland); we found no ranking of schools in hiring beyond those two.',
        'L’Università d’Islanda e la Reykjavík University sono i luoghi dove i datori vanno a reclutare (61 organizzazioni alle Career Days della Reykjavík University nel 2026, il Tengslatorg all’Università d’Islanda); oltre a queste due non abbiamo trovato alcuna gerarchia di atenei nelle assunzioni.', 'is-ru-days is-tengslatorg ours']
    ] },
    { k: 'dual', v: 'little', t: [
      ['We found no dual-study track for graduate jobs; the nearest things are internships posted through Tengslatorg, summer research jobs, and Arion’s 15-month graduate programme. The IÐAN educational centre handles vocational education and recognition, a separate trades route.',
        'Non abbiamo trovato alcun percorso di studio duale per i lavori da laureati; le cose più vicine sono i tirocini pubblicati tramite il Tengslatorg, i lavori estivi di ricerca e il programma Arion per laureati di 15 mesi. Il centro formativo IÐAN gestisce l’istruzione professionale e il riconoscimento, un percorso separato per i mestieri.', 'is-tengslatorg is-sif is-arion-grad is-eures']
    ] },
    { k: 'publicw', v: 'high', t: [
      ['Public administration, education, health and social work employed 77,246 of 234,604 people (32.9%) in June 2026; the section includes some private providers, and state jobs on Starfatorg are mostly in Icelandic.',
        'Amministrazione pubblica, istruzione, sanità e assistenza sociale impiegavano 77.246 persone su 234.604 (32,9%) a giugno 2026; la sezione comprende alcuni fornitori privati, e i posti statali su Starfatorg sono per lo più in islandese.', 'is-stat-vin is-work']
    ] },
    { k: 'sponsorr', v: 'some', t: [
      ['A non-EEA hire needs an expert permit: the employer must show it tried to hire an Icelander or an EEA, EFTA or Faroese national first, and a trade union must confirm the terms follow the collective agreement. CCP’s careers page says it has experience relocating people from around the world; we found no count of employers who sponsor. The rules are on the Visas page.',
        'Un assunto extra-SEE ha bisogno di un permesso per esperti: il datore deve dimostrare di aver prima cercato un islandese o un cittadino SEE, EFTA o delle Fær Øer, e un sindacato deve confermare che le condizioni rispettano il contratto collettivo. La pagina carriere di CCP dice di avere esperienza nel trasferire persone da tutto il mondo; non abbiamo trovato alcun conteggio dei datori che sponsorizzano. Le regole sono nella pagina Visti.', 'is-wi-permit is-fenris']
    ] },
    { k: 'photo', v: 'common', t: [
      ['VR, the trade union, says a photo is customary in Iceland though generally not done overseas: place it in the upper left or right corner beside your name and keep it conventional.',
        'VR, il sindacato, dice che una foto è consueta in Islanda anche se in genere non si usa all’estero: mettila nell’angolo in alto a sinistra o a destra accanto al nome e mantienila convenzionale.', 'is-vr']
    ] },
    { k: 'cv', v: 'two', t: [
      ['VR advises a CV of about 1–2 A4 pages, in reverse chronological order for the last 10–15 years, education first if you have just graduated; personal details such as marital status or number of children are left out.',
        'VR consiglia un CV di circa 1–2 pagine A4, in ordine cronologico inverso per gli ultimi 10–15 anni, con la formazione per prima se ti sei appena laureato; i dati personali come lo stato civile o il numero di figli si omettono.', 'is-vr']
    ] },
    { k: 'letter', v: 'optional', t: [
      ['VR calls the cover letter especially useful for jobs that need specialised knowledge and asks for half a page to one page; EURES says a concise CV and cover letter matter most, and many companies use electronic forms that let you attach both.',
        'VR definisce la lettera di presentazione particolarmente utile per i lavori che richiedono conoscenze specialistiche e chiede da mezza pagina a una pagina; EURES dice che un CV e una lettera concisi contano di più, e molte aziende usano moduli elettronici in cui allegare entrambi.', 'is-vr is-eures']
    ] },
    { k: 'refs', v: 'later', t: [
      ['VR advises giving 2–3 referees (former employers, teachers, co-workers) with name, workplace, title and phone number, asking their permission first; written references are rarely used. We did not find when employers call them.',
        'VR consiglia di indicare 2–3 referenti (ex datori, insegnanti, colleghi) con nome, luogo di lavoro, qualifica e telefono, chiedendo prima il loro permesso; le referenze scritte si usano di rado. Non abbiamo trovato quando i datori li chiamino.', 'is-vr']
    ] },
    { k: 'docs', v: 'copies', t: [
      ['EURES recommends bringing your diplomas and certificates, translated into English or Icelandic; certified copies of diplomas are asked for in an expert work-permit application, not in ordinary applications.',
        'EURES consiglia di portare diplomi e certificati, tradotti in inglese o in islandese; le copie certificate dei diplomi si chiedono nella domanda di permesso di lavoro per esperti, non nelle candidature ordinarie.', 'is-eures is-wi-permit']
    ] },
    { k: 'salary', v: 'later', t: [
      ['VR lists “wage expectations” among the questions to expect at the interview, not in the CV or letter; Icelandic contracts state the salary before tax, which Work in Iceland says can leave a foreign hire unsure of take-home pay.',
        'VR elenca le “aspettative salariali” tra le domande da aspettarsi al colloquio, non nel CV o nella lettera; i contratti islandesi indicano lo stipendio al lordo delle imposte, il che secondo Work in Iceland può lasciare un assunto straniero incerto sul netto.', 'is-vr is-wi-hiring']
    ] },
    { k: 'check', v: 'some', t: [
      ['We found no page on background checks in Icelandic graduate hiring; referees are phoned (VR), and a foreign hire’s former employer’s reference is recommended with a permit application.',
        'Non abbiamo trovato alcuna pagina sui controlli dei precedenti nelle assunzioni di laureati in Islanda; i referenti vengono chiamati (VR), e per un assunto straniero si raccomanda la referenza di un ex datore con la domanda di permesso.', 'is-vr is-wi-hiring']
    ] },
    { k: 'contact', v: 'people', t: [
      ['In a country of about 400,000 people, personal contact is the main channel.',
        'In un paese di circa 400.000 abitanti, il contatto personale è il canale principale.', 'is-work ours'],
      ['EURES tells jobseekers to let their contacts know they are looking, and Work in Iceland says to contact firms and recruiters directly.',
        'EURES dice a chi cerca lavoro di far sapere ai propri contatti che è in cerca, e Work in Iceland dice di contattare direttamente aziende e recruiter.', 'is-eures is-work']
    ] },
    { k: 'abroad', v: 'workable', t: [
      ['English-language roles can be applied for from abroad: CCP’s process is a phone call and video interviews, and EURES jobs must have an English version. EEA citizens need no permit; others cannot start work before the residence and work permits are granted.',
        'Per i ruoli in inglese si può candidarsi dall’estero: il processo di CCP è una telefonata e colloqui in video, e gli annunci EURES devono avere una versione in inglese. I cittadini SEE non hanno bisogno di permesso; gli altri non possono iniziare a lavorare prima del rilascio dei permessi di soggiorno e di lavoro.', 'is-fenris is-eures is-wi-hiring is-wi-permit']
    ] },
    { k: 'language', v: 'mostly', t: [
      ['Most vacancies are in Icelandic; roles suited to non-speakers are advertised in English or in both languages, and Alfreð can filter listings by language requirement. Icelandic is an important advantage.',
        'La maggior parte degli annunci è in islandese; i ruoli adatti a chi non lo parla sono pubblicati in inglese o in entrambe le lingue, e Alfreð permette di filtrare gli annunci per requisito linguistico. L’islandese è un vantaggio importante.', 'is-work is-alfred is-eures']
    ] }
  ],

  rows: {
    process: [
      ['CCP’s process, the one tech process we could read, is a human-reviewed application, a short phone call, a video interview that may include a skills test or an SHL psychometric assessment, a third interview on results or technical points, and sometimes an onsite day, aimed at six weeks.',
        'Il processo di CCP, l’unico del settore tech che abbiamo potuto leggere, prevede una candidatura valutata da una persona, una breve telefonata, un colloquio in video che può includere un test di competenze o una valutazione psicometrica SHL, un terzo colloquio sui risultati o su punti tecnici, e a volte una giornata in sede, con l’obiettivo di sei settimane.', 'is-fenris'],
      ['VR lists the questions to prepare: why you applied, why you left your last job, a time you worked with colleagues, how you handle time pressure and your wage expectations; Career Days in January include micro interviews, with no registration, at 22 companies.',
        'VR elenca le domande da preparare: perché ti sei candidato, perché hai lasciato l’ultimo lavoro, un episodio di lavoro con i colleghi, come gestisci la pressione del tempo e le tue aspettative salariali; le Career Days di gennaio includono micro-colloqui, senza registrazione, presso 22 aziende.', 'is-vr is-ru-days'],
      ['We found no page on assessment centres, dress or the time from application to offer for Icelandic graduate jobs.',
        'Non abbiamo trovato alcuna pagina sui centri di valutazione, sull’abbigliamento o sul tempo che passa dalla candidatura all’offerta per i lavori da laureati in Islanda.', 'ours']
    ],
    offer: [
      ['A written contract is required if you are hired for more than one month and work more than 8 hours a week, signed within 2 months of starting; it must follow the collective agreement, and terms that fall below it are invalid.',
        'Un contratto scritto è obbligatorio se sei assunto per più di un mese e lavori più di 8 ore a settimana, firmato entro 2 mesi dall’inizio; deve rispettare il contratto collettivo, e le condizioni inferiori sono nulle.', 'is-eures'],
      ['Trial periods and notice depend on the union agreement: the LIV (retail and office) agreement gives a 3-month trial with 1 week’s notice, then 1 month from 3 to 6 months and 3 months after 6 months; SGS gives 12 days after 2 weeks, 1 month after 3 months and 3 months after 3 years.',
        'I periodi di prova e il preavviso dipendono dal contratto del sindacato: quello LIV (commercio e uffici) prevede 3 mesi di prova con 1 settimana di preavviso, poi 1 mese da 3 a 6 mesi e 3 mesi dopo 6 mesi; quello SGS prevede 12 giorni dopo 2 settimane, 1 mese dopo 3 mesi e 3 mesi dopo 3 anni.', 'is-asi-notice'],
      ['Paid holiday is at least 24 working days a year and holiday pay is at least 10.17% of wages; contracts quote salary before tax. We did not read a page on December or holiday bonuses, on whether graduates negotiate, or on how long employers give you to decide.',
        'Le ferie retribuite sono almeno 24 giorni lavorativi all’anno e l’indennità di ferie è almeno il 10,17% del salario; i contratti indicano lo stipendio al lordo. Non abbiamo letto alcuna pagina sulle gratifiche di dicembre o delle ferie, sulla negoziazione dei neolaureati né su quanto tempo i datori concedano per decidere.', 'is-eures is-wi-hiring']
    ],
    sponsor: [
      ['For a non-EEA hire the employer applies with a signed contract, a union confirmation that terms match the collective agreements, and proof it tried to hire an Icelandic, EEA, EFTA or Faroese national first; certified diplomas are needed, and work experience of about seven years generally counts as equal to a university degree.',
        'Per un assunto extra-SEE il datore presenta la domanda con un contratto firmato, la conferma di un sindacato che le condizioni corrispondono ai contratti collettivi e la prova di aver prima cercato un islandese o un cittadino SEE, EFTA o delle Fær Øer; servono i diplomi certificati, e circa sette anni di esperienza lavorativa valgono in genere come una laurea.', 'is-wi-permit'],
      ['The worker cannot start before the residence and work permits are granted. A tax discount taxes 75% of income for the first three years if you apply within three months of starting work.',
        'Il lavoratore non può iniziare prima del rilascio dei permessi di soggiorno e di lavoro. Uno sconto fiscale tassa il 75% del reddito per i primi tre anni se si fa domanda entro tre mesi dall’inizio del lavoro.', 'is-wi-hiring is-wi-permit'],
      ['Raise it early and in English-language roles, where employers are used to it: CCP says it has relocated people from around the world, while an employer who advertises only in Icelandic is unlikely to be set up for it.',
        'Sollevalo presto e nei ruoli in inglese, dove i datori sono abituati: CCP dice di aver trasferito persone da tutto il mondo, mentre un datore che pubblica solo in islandese è poco probabile che sia attrezzato.', 'is-fenris ours']
    ],
    where: [
      ['Portals named by Work in Iceland: Alfreð (mostly Icelandic, some English), Job.is, Störf (Icelandic and English), Tvinna (design, computing and data roles, Icelandic and English), Northstack (start-up news with occasional job posts, English), Starfatorg (public sector), Reykjavík city’s jobs page, Vinnumálastofnun and EURES.',
        'Portali indicati da Work in Iceland: Alfreð (per lo più in islandese, in parte in inglese), Job.is, Störf (islandese e inglese), Tvinna (ruoli di design, informatica e dati, islandese e inglese), Northstack (notizie sulle start-up con rare offerte di lavoro, in inglese), Starfatorg (settore pubblico), la pagina dei lavori della città di Reykjavík, Vinnumálastofnun ed EURES.', 'is-work'],
      ['Agencies: Brú Talent, Hagvangur, HH ráðgjöf, Intellecta and Ráðum. For students, Tengslatorg at the University of Iceland and Reykjavík University’s Career Days in January; the Arion graduate programme page and CCP’s careers page for named employers.',
        'Agenzie: Brú Talent, Hagvangur, HH ráðgjöf, Intellecta e Ráðum. Per gli studenti, il Tengslatorg all’Università d’Islanda e le Career Days della Reykjavík University a gennaio; la pagina del programma Arion per laureati e la pagina carriere di CCP per datori specifici.', 'is-work is-tengslatorg is-ru-days is-arion-grad is-fenris'],
      ['Alfreð’s filters cover job type (full-time, summer, internship, temporary and others) and language requirement, and its talent pool surfaces unadvertised jobs.',
        'I filtri di Alfreð riguardano il tipo di lavoro (tempo pieno, estivo, tirocinio, temporaneo e altri) e il requisito linguistico, e il suo bacino di talenti fa emergere lavori non pubblicati.', 'is-alfred']
    ],
    mistakes: [
      ['Waiting for an advertisement: Work in Iceland’s advice is to find the firms that match your skills and contact them directly, since agencies fill unadvertised roles.',
        'Aspettare un annuncio: il consiglio di Work in Iceland è trovare le aziende adatte alle proprie competenze e contattarle direttamente, perché le agenzie coprono ruoli non pubblicati.', 'is-work'],
      ['Missing the January window: Career Days, the Student Innovation Fund (to 17 February) and Arion’s graduate round all fall in the first weeks of the year.',
        'Perdere la finestra di gennaio: le Career Days, il Fondo per l’innovazione degli studenti (fino al 17 febbraio) e il ciclo Arion per laureati cadono tutti nelle prime settimane dell’anno.', 'is-ru-days is-sif is-arion-grad'],
      ['Searching only English listings and concluding there is nothing: most local vacancies are in Icelandic, so use the portals’ language filters, and read EURES for English versions.',
        'Cercare solo annunci in inglese e concludere che non c’è nulla: la maggior parte dei posti locali è in islandese, quindi usa i filtri linguistici dei portali e consulta EURES per le versioni in inglese.', 'is-work is-alfred is-eures'],
      ['Promising a start date before the permit: a non-EEA hire cannot begin work until the residence and work permits are granted.',
        'Promettere una data di inizio prima del permesso: un assunto extra-SEE non può iniziare a lavorare finché non sono stati rilasciati i permessi di soggiorno e di lavoro.', 'is-wi-hiring']
    ]
  },

  lang: [
    { f: 'finance', v: 'local', t: [
      ['Banks advertise and hire in Icelandic; Arion’s graduate programme page is in English but does not say what language level it asks for.',
        'Le banche pubblicano annunci e assumono in islandese; la pagina del programma Arion per laureati è in inglese ma non indica quale livello linguistico richieda.', 'is-arion-grad ours']
    ] },
    { f: 'tech', v: 'english', t: [
      ['CCP says English is the common language across its studios, applications are made in English and at least one interview is in English; Tvinna and Störf carry computing roles in Icelandic and English.',
        'CCP dice che l’inglese è la lingua comune nei suoi studi, che le candidature si fanno in inglese e che almeno un colloquio è in inglese; Tvinna e Störf pubblicano ruoli informatici in islandese e in inglese.', 'is-fenris is-work']
    ] },
    { f: 'public', v: 'local', t: [
      ['Starfatorg, the state job site, is mostly in Icelandic; the exception we read is the EFTA, ESA and FMO Junior Professional Programme, presented in English.',
        'Starfatorg, il sito dei lavori statali, è per lo più in islandese; l’eccezione che abbiamo letto è il Junior Professional Programme di EFTA, ESA e FMO, presentato in inglese.', 'is-work is-hi-jpp']
    ] }
  ],

  programmes: [
    { n: 'Graduate programme (15 months, rotations and mentor)', o: 'Arion Bank', f: 'finance', in: null, w: null, lang: 'IS EN', intl: 'unknown', ids: 'is-arion-grad' },
    { n: 'Summer Work for University Students in Innovation (up to 3 months, 340,000 ISK a month)', o: 'Student Innovation Fund (Rannís)', f: 'tech', in: null, w: [12, 2], lang: 'IS EN', intl: 'unknown', ids: 'is-sif' },
    { n: 'Junior Professional Programme (11 months, Brussels, Luxembourg or Geneva)', o: 'EFTA, EFTA Surveillance Authority and Financial Mechanism Office', f: 'public', in: null, w: null, lang: 'EN', intl: 'unknown', ids: 'is-hi-jpp' }
  ],

  outcomes: [
    ['In 2025, 92.0% of Icelandic tertiary graduates aged 20–34 who finished within the last three years were in work (EU 85.3%), and unemployment among 15-to-24-year-olds was 9.5% (EU 15.2%).',
      'Nel 2025 il 92,0% dei laureati islandesi di 20–34 anni che avevano finito gli studi da meno di tre anni lavorava (UE 85,3%), e la disoccupazione tra i 15-24enni era del 9,5% (UE 15,2%).', 'is-grad-eurostat'],
    ['No national figure for how many interns or trainees are kept; Arion publishes no placement rate for its graduate programme.',
      'Non esiste una cifra nazionale su quanti tirocinanti o trainee vengono confermati; Arion non pubblica alcun tasso di inserimento per il suo programma per laureati.', 'is-arion-grad']
  ],

  sources: {
    'is-work': ['practitioner consensus', 'Work in Iceland (Directorate of Labour): job hunting', 'https://work.iceland.is/working/job-hunting/', '2026-10-08'],
    'is-wi-permit': ['data', 'Work in Iceland: work permit for experts (conditions, documents, tax discount)', 'https://work.iceland.is/working/work-permit/', '2026-10-08'],
    'is-wi-hiring': ['practitioner consensus', 'Work in Iceland: ten things to keep in mind when hiring a foreign specialist', 'https://work.iceland.is/hiring/10-things-to-keep-in-mind/', '2026-10-08'],
    'is-vr': ['practitioner consensus', 'VR (trade union): for job seekers (CV, references, cover letter, interview)', 'https://www.vr.is/en/employment-terms/in-the-work-market/for-job-seekers/', '2026-10-08'],
    'is-eures': ['practitioner consensus', 'EURES: living and working conditions in Iceland', 'https://eures.europa.eu/living-and-working/living-and-working-conditions-europe/living-and-working-conditions-iceland_en', '2026-10-08'],
    'is-asi-notice': ['data', 'ASÍ labour-law pages: notice periods under collective agreements', 'https://vinnurettur.asi.is/vinnurettarvefur/vinnurettur/icelandic-labour-law/termination-of-employment/notice-periods/rights-under-collective-agreements/', '2026-10-08'],
    'is-alfred': ['practitioner consensus', 'Alfreð: Icelandic job board (filters, talent pool)', 'https://alfred.is/', '2026-10-08'],
    'is-ru-days': ['employer-stated', 'Reykjavík University: Career Days 2026 (Framadagar), 20–22 January', 'https://www.ru.is/en/news/take-a-step-towards-your-future-at-career-days-in-ru', '2026-10-08'],
    'is-hi-jpp': ['employer-stated', 'University of Iceland: Junior Professional Programme session (EFTA, ESA, FMO), 21 January 2026', 'https://english.hi.is/events/junior-professional-programme-towards-international-career', '2026-10-08'],
    'is-tengslatorg': ['employer-stated', 'University of Iceland Tengslatorg (Careers Connection): job board and internships', 'https://tengslatorg.hi.is/en/', '2026-10-08'],
    'is-arion-grad': ['employer-stated', 'Arion Bank: graduate programme (15 months)', 'https://www.arionbanki.is/en/bank/hr/graduation-program', '2026-10-08'],
    'is-fenris': ['employer-stated', 'Fenris Creations (CCP Games): careers and hiring process', 'https://fenris.com/careers', '2026-10-08'],
    'is-sif': ['data', 'island.is: Summer Work for University Students in Innovation (Student Innovation Fund, Rannís)', 'https://island.is/styrkjatorg/styrkur/1-11', '2026-10-08'],
    'is-enic': ['data', 'ENIC-NARIC.net: Iceland national centre (University of Iceland)', 'https://www.enic-naric.net/iceland.aspx', '2026-10-08'],
    'is-stat-vin': ['data', 'Statistics Iceland: VIN10032 register-based employment by economic activity, June 2026 (sections O–Q)', 'https://px.hagstofa.is/pxen/pxweb/en/Samfelag/Samfelag__vinnumarkadur__vinnuaflskraargogn/VIN10032.px', '2026-10-08'],
    'is-lfs': ['data', 'Statistics Iceland: labour market 2025 (tertiary education of the employed)', 'https://statice.is/publications/news-archive/labour-market/labour-market-2025/', '2026-10-08'],
    'is-grad-eurostat': ['data', 'Eurostat: edat_lfse_24 recent graduates in work, 2025', 'https://ec.europa.eu/eurostat/api/dissemination/statistics/1.0/data/edat_lfse_24?format=JSON&lang=EN&duration=Y_LE3&isced11=ED5-8&age=Y20-34&sex=T&geo=IS&geo=EU27_2020', '2026-10-08']
  }
});
