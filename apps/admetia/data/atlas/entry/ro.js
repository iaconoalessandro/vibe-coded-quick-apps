/* How hiring works: Romania. Extended on 8 Oct 2026 to the full schema: pages opened that day
 * (EURES, IGI, Hipo, Vodafone, KPMG, UiPath, Stagii pe Bune, ANFP, posturi.gov.ro, UB, UPT, ABSL)
 * plus earlier reads (Insight Global, Jobseeker). No statistic ranks the routes; they are ranked
 * by the programmes and portals found. Process timings and offer norms beyond the statutory ones
 * were not established. */
ATLAS.addEntry({
  id: 'RO',
  checked: '2026-10-08',
  review: '2027-04-08',

  lead: [
    ['Graduates in Romania most often enter through the software, engineering and shared-service centres of international firms in Bucharest, Cluj, Iași and Timișoara, which recruit students through internships and hire in English. Local firms lean more on contacts.',
      'In Romania i laureati entrano più spesso tramite i centri di software, ingegneria e servizi condivisi delle aziende internazionali a Bucarest, Cluj, Iași e Timișoara, che reclutano studenti con tirocini e assumono in inglese. Le aziende locali si affidano di più ai contatti.', 'ro-ig ours']
  ],

  ways: [
    { name: ['Internships at international and tech firms', 'Tirocini nelle aziende internazionali e tecnologiche'], r: 'intern', p: 'first intern', basis: 'consensus', t: [
      ['No survey ranks the routes in Romania; this is first because the programmes found are mostly internships. Junior specialists in the service centres earned a mean of about €1,625 a month gross in 2024.',
        'Nessuna indagine classifica le vie d’accesso in Romania; questa è prima perché i programmi trovati sono per lo più tirocini. Gli specialisti junior nei centri di servizi guadagnavano in media circa 1.625 € lordi al mese nel 2024.', 'ours ro-cee'],
      ['UiPath’s Bucharest software internship is a three-month, full-time, paid summer placement, and its listing says successful interns have the possibility to become full-time employees.',
        'Il tirocinio software di UiPath a Bucarest è un’esperienza estiva retribuita a tempo pieno di tre mesi, e l’annuncio dice che chi riesce ha la possibilità di diventare dipendente a tempo pieno.', 'ro-uipath ro-uipath26'],
      ['Stagii pe Bune, a summer internship scheme for IT students in Bucharest and Iași, says it has offered over 8,000 internship positions in 18 years and had more than 16,000 student applicants.',
        'Stagii pe Bune, un programma di tirocini estivi per studenti di informatica a Bucarest e Iași, dichiara di aver offerto oltre 8.000 posti di tirocinio in 18 anni e di aver ricevuto più di 16.000 candidature di studenti.', 'ro-spb']
    ] },
    { name: ['Graduate and trainee programmes', 'Programmi per neolaureati e trainee'], r: 'scheme', p: 'first', basis: 'consensus', t: [
      ['Vodafone Romania’s Discover Graduate Programme runs for two years, rotates participants through three business areas and can end in a destination role; applications are in English, and the 2027 intake closes on 6 November 2026 for a start on 11 January 2027.',
        'Il Discover Graduate Programme di Vodafone Romania dura due anni, fa ruotare i partecipanti in tre aree del business e può concludersi con un ruolo di destinazione; le candidature sono in inglese e la selezione 2027 chiude il 6 novembre 2026 per un inizio l’11 gennaio 2027.', 'ro-vf ro-vf-prog'],
      ['KPMG’s Business School audit internship has asked for top students in economics, polytechnic or mathematics studies and runs for two years in Bucharest or eight months in Timișoara and Cluj; the listing read was for the 2024 campaign and is closed.',
        'Lo stage di revisione della KPMG Business School ha richiesto studenti brillanti di economia, politecnico o matematica e dura due anni a Bucarest oppure otto mesi a Timișoara e Cluj; l’annuncio letto riguardava la campagna 2024 ed è chiuso.', 'ro-kpmg']
    ] },
    { name: ['Career days and job fairs', 'Giornate della carriera e fiere del lavoro'], r: 'campus', p: 'first intern', basis: 'anecdotal', t: [
      ['The University of Bucharest’s career department held Career Days on 13–14 November 2024 with 11 employers in person and five online; Politehnica Timișoara’s twice-yearly fair reached its 24th edition in 2024 with 55 firms.',
        'Il dipartimento carriera dell’Università di Bucarest ha tenuto le Giornate della Carriera il 13–14 novembre 2024 con 11 datori di lavoro in presenza e cinque online; la fiera semestrale del Politecnico di Timișoara è arrivata nel 2024 alla 24ª edizione con 55 aziende.', 'ro-ub ro-upt'],
      ['Hipo.ro lists its Angajatori de TOP fairs in Timișoara on 16–17 October 2026 and in Bucharest on 30–31 October 2026.',
        'Hipo.ro indica le sue fiere Angajatori de TOP a Timișoara il 16–17 ottobre 2026 e a Bucarest il 30–31 ottobre 2026.', 'ro-hipo']
    ] },
    { name: ['Direct application through job portals', 'Candidatura diretta tramite i portali'], r: 'direct', p: 'first exp', basis: 'consensus', t: [
      ['EURES names BestJobs, eJobs, Hipo and Lugera&Makler as the main private portals, and says employers must declare all vacancies to the national employment agency ANOFM, whose listings are in Romanian only.',
        'EURES indica BestJobs, eJobs, Hipo e Lugera&Makler come principali portali privati, e dice che i datori di lavoro devono dichiarare tutti i posti vacanti all’agenzia nazionale per l’impiego ANOFM, i cui annunci sono solo in rumeno.', 'ro-eures'],
      ['For experienced hires, ABSL’s 2025 report says business-services recruitment has become more cautious, with employment growth slowed to an average of 5%, and that companies want experienced professionals with specialised expertise.',
        'Per i profili con esperienza, il rapporto ABSL 2025 dice che il reclutamento nei servizi alle imprese è diventato più cauto, con la crescita dell’occupazione rallentata a una media del 5%, e che le aziende cercano professionisti esperti con competenze specializzate.', 'ro-absl']
    ] },
    { name: ['Public-sector competitions', 'Concorsi nel settore pubblico'], r: 'public', p: 'first exp', basis: 'consensus', t: [
      ['Civil-service posts are filled by competitions run on the ANFP’s national portal (concurs-national.anfp.gov.ro), by post or in an extended national competition.',
        'I posti nella funzione pubblica si coprono con concorsi gestiti dal portale nazionale dell’ANFP (concurs-national.anfp.gov.ro), per singolo posto o in un concorso nazionale esteso.', 'ro-anfp'],
      ['The government portal posturi.gov.ro pools vacant contractual posts of public bodies and showed about 2,585 active posts across 3,230 institutions on the day it was read.',
        'Il portale del governo posturi.gov.ro raccoglie i posti vacanti a contratto degli enti pubblici e mostrava circa 2.585 posti attivi in 3.230 istituzioni il giorno della lettura.', 'ro-posturi']
    ] },
    { name: ['Referrals and contacts', 'Segnalazioni e contatti'], r: 'network', p: 'first exp', basis: 'anecdotal', t: [
      ['At local, family-run and smaller firms, being introduced by someone who works there counts for more than a portal application. This is our reading; no survey was found.',
        'Presso le aziende locali, familiari e più piccole, essere presentati da qualcuno che ci lavora conta più di una candidatura sul portale. È una nostra lettura; non è stata trovata alcuna indagine.', 'ours']
    ] }
  ],

  cycle: [
    ['Vodafone’s graduate programme closed on 15 November 2025 for a start on 12 January 2026, and on 6 November 2026 for a start on 11 January 2027: apply in the autumn for January.',
      'Il programma per neolaureati di Vodafone è stato chiuso il 15 novembre 2025 per un inizio il 12 gennaio 2026, e il 6 novembre 2026 per un inizio l’11 gennaio 2027: si candida in autunno per gennaio.', 'ro-vf ro-vf-prog'],
    ['Internships are mostly summer ones: UiPath’s lasts three months and Stagii pe Bune describes its placements as summer practice, so the applications that matter are in the spring and earlier. We did not read their opening dates.',
      'I tirocini sono per lo più estivi: quello di UiPath dura tre mesi e Stagii pe Bune descrive i suoi come pratica estiva, quindi le candidature che contano sono in primavera o prima. Non abbiamo letto le date di apertura.', 'ro-uipath26 ro-spb'],
    ['University fairs fall twice a year: Politehnica Timișoara’s was in April 2024, the University of Bucharest’s in November 2024, and Hipo’s Angajatori de TOP are in October 2026.',
      'Le fiere universitarie sono due all’anno: quella del Politecnico di Timișoara era in aprile 2024, quella dell’Università di Bucarest in novembre 2024, e gli Angajatori de TOP di Hipo sono in ottobre 2026.', 'ro-upt ro-ub ro-hipo']
  ],

  schools: [
    ['Politehnica Bucharest is the engineering school the software firms recruit from: Bitdefender opened a computer lab with it, and Stagii pe Bune places its IT students in summer internships.',
      'Il Politecnico di Bucarest è la scuola di ingegneria da cui reclutano le aziende software: Bitdefender ha aperto con esso un laboratorio informatico, e Stagii pe Bune colloca i suoi studenti di informatica in tirocini estivi.', 'ro-bitdefender ro-spb'],
    ['The employers at the University of Bucharest’s 2024 Career Days included Microsoft, Société Générale’s global solution centre, Procter & Gamble and UniCredit Bank; Politehnica Timișoara’s fair draws firms from across the west of the country.',
      'Tra i datori di lavoro alle Giornate della Carriera 2024 dell’Università di Bucarest c’erano Microsoft, il centro di soluzioni globali di Société Générale, Procter & Gamble e UniCredit Bank; la fiera del Politecnico di Timișoara richiama aziende da tutto l’ovest del paese.', 'ro-ub ro-upt'],
    ['KPMG’s audit programme names economics, polytechnic and mathematics students as its target; no ranking of schools by employers was found.',
      'Il programma di revisione di KPMG indica come bersaglio gli studenti di economia, politecnico e matematica; non è stata trovata alcuna classifica delle scuole da parte dei datori di lavoro.', 'ro-kpmg']
  ],

  events: [
    ['Angajatori de TOP (Hipo): Timișoara 16–17 October 2026, Bucharest 30–31 October 2026; Top Talents on 13–14 November 2026.',
      'Angajatori de TOP (Hipo): Timișoara 16–17 ottobre 2026, Bucarest 30–31 ottobre 2026; Top Talents il 13–14 novembre 2026.', 'ro-hipo'],
    ['The University of Bucharest’s Career Days (department of counselling and career guidance) ran on 13–14 November 2024, one day in person and one online, free for students.',
      'Le Giornate della Carriera dell’Università di Bucarest (dipartimento di consulenza e orientamento) si sono tenute il 13–14 novembre 2024, un giorno in presenza e uno online, gratuite per gli studenti.', 'ro-ub'],
    ['Hipo.ro also runs a virtual fair for graduates (Târgul Virtual Hipo.ro pentru Absolvenți).',
      'Hipo.ro organizza anche una fiera virtuale per i neolaureati (Târgul Virtual Hipo.ro pentru Absolvenți).', 'ro-hipo']
  ],

  fields: [
    { f: 'business', t: [
      ['Business graduates mostly start in the shared-service centres of international firms, in finance, accounting and customer operations, or in the Big Four and banks in Bucharest.',
        'I laureati in economia iniziano per lo più nei centri di servizi condivisi delle aziende internazionali, in finanza, contabilità e operazioni con i clienti, o nelle Big Four e nelle banche a Bucarest.', 'ro-ig ours']
    ] },
    { f: 'accounting', t: [
      ['KPMG’s audit internship (KPMG Business School) takes top students and offers ACCA training alongside real projects with KPMG professionals.',
        'Lo stage di revisione di KPMG (KPMG Business School) accoglie studenti brillanti e offre la formazione ACCA insieme a progetti reali con i professionisti di KPMG.', 'ro-kpmg']
    ] },
    { f: 'tech', t: [
      ['Software firms recruit through summer internships: Stagii pe Bune lists Bitdefender as a longtime partner, and UiPath’s three-month paid internship in Bucharest says successful interns can become full-time employees.',
        'Le aziende software reclutano con tirocini estivi: Stagii pe Bune indica Bitdefender come partner di lunga data, e il tirocinio retribuito di tre mesi di UiPath a Bucarest dice che chi riesce può diventare dipendente a tempo pieno.', 'ro-spb ro-uipath26']
    ] },
    { f: 'cyber', t: [
      ['Bitdefender, a security-software firm, is based in Bucharest and has partnered with Politehnica Bucharest to open a computer lab.',
        'Bitdefender, un’azienda di software di sicurezza, ha sede a Bucarest e ha collaborato con il Politecnico di Bucarest per aprire un laboratorio informatico.', 'ro-bitdefender']
    ] }
  ],

  customs: [
    { k: 'season', v: 'cyclical', t: [
      ['Graduate schemes close in the autumn for a January start, internships run in the summer, and fairs fall in spring and autumn; there is no single national season.',
        'I programmi per neolaureati chiudono in autunno per un inizio a gennaio, i tirocini si svolgono in estate e le fiere cadono in primavera e in autunno; non c’è un’unica stagione nazionale.', 'ro-vf ro-uipath26 ro-hipo']
    ] },
    { k: 'masters', v: 'irrelevant', t: [
      ['The programmes read take bachelor’s graduates and master’s students alike (Vodafone: recent graduates or master’s students; UiPath: bachelor’s, master’s or PhD), so a master’s is not what decides.',
        'I programmi letti accolgono laureati triennali e studenti di laurea magistrale (Vodafone: neolaureati o studenti magistrali; UiPath: laurea triennale, magistrale o dottorato), quindi la laurea magistrale non è decisiva.', 'ro-vf ro-uipath26']
    ] },
    { k: 'degrees', v: 'regulated', t: [
      ['CNRED, in the education ministry, is Romania’s ENIC-NARIC centre and coordinates recognition of professional qualifications under EU Directive 2005/36/EC; only regulated professions need recognition, and the pages read do not say employers in other fields ask for it.',
        'Il CNRED, presso il ministero dell’istruzione, è il centro ENIC-NARIC della Romania e coordina il riconoscimento delle qualifiche professionali ai sensi della direttiva UE 2005/36/CE; solo le professioni regolamentate richiedono il riconoscimento, e le pagine lette non dicono che i datori di lavoro di altri settori lo chiedano.', 'ro-cnred ours']
    ] },
    { k: 'brand', v: 'some', t: [
      ['KPMG’s audit programme asks for top students from economics, polytechnic or mathematics studies, so results and faculty count there; the IT firms read ask for skills and projects rather than a named school.',
        'Il programma di revisione di KPMG chiede studenti brillanti di economia, politecnico o matematica, quindi lì contano i risultati e la facoltà; le aziende IT lette chiedono competenze e progetti più che una scuola precisa.', 'ro-kpmg ro-uipath']
    ] },
    { k: 'dual', v: 'little', t: [
      ['We found no dual-study or apprenticeship route into graduate jobs; the structured routes are summer internships and graduate programmes. This is our reading.',
        'Non abbiamo trovato vie di studio duale o apprendistato verso i lavori per laureati; le vie strutturate sono i tirocini estivi e i programmi per neolaureati. È una nostra lettura.', 'ours']
    ] },
    { k: 'publicw', v: 'mid', t: [
      ['Public bodies fill posts through the ANFP’s competitions and the posturi.gov.ro portal, which showed about 2,585 active contractual posts; we did not find a figure for the public sector’s share of graduate hires.',
        'Gli enti pubblici coprono i posti con i concorsi dell’ANFP e il portale posturi.gov.ro, che mostrava circa 2.585 posti a contratto attivi; non abbiamo trovato una cifra sulla quota del settore pubblico nelle assunzioni di laureati.', 'ro-anfp ro-posturi']
    ] },
    { k: 'sponsorr', v: 'some', t: [
      ['A non-EU hire needs the employer to pass a labour-market test and fit within the annual quota; the large international centres are the employers with the HR teams to file it. See Visas for the rules.',
        'Per assumere una persona extra-UE il datore di lavoro deve superare un test del mercato del lavoro e rientrare nella quota annuale; i grandi centri internazionali sono i datori con gli uffici del personale in grado di presentare la pratica. Vedi Visti per le regole.', 'ro-igi ours']
    ] },
    { k: 'photo', v: 'common', t: [
      ['Common and often expected, though not compulsory; in technical and IT roles skills matter more and a photo is not necessary.',
        'Diffusa e spesso attesa, anche se non obbligatoria; nei ruoli tecnici e IT contano di più le competenze e la foto non è necessaria.', 'ro-js ro-eures']
    ] },
    { k: 'cv', v: 'two', t: [
      ['A Romanian CV runs to two pages at most, in reverse chronological order, and the Europass format is widely recognised; EURES recommends it.',
        'Un CV rumeno è lungo al massimo due pagine, in ordine cronologico inverso, e il formato Europass è ampiamente riconosciuto; EURES lo raccomanda.', 'ro-jobera ro-eures']
    ] },
    { k: 'letter', v: 'optional', t: [
      ['EURES says a CV may be accompanied by a cover letter of no more than one page; the graduate programmes read ask for a CV (Vodafone: in English) and do not mention a letter.',
        'EURES dice che il CV può essere accompagnato da una lettera di presentazione di non più di una pagina; i programmi per neolaureati letti chiedono un CV (Vodafone: in inglese) e non menzionano una lettera.', 'ro-eures ro-vf']
    ] },
    { k: 'refs', v: 'later', t: [
      ['EURES advises bringing diplomas, certificates and references from previous jobs to the interview, so references come later, not with the first application.',
        'EURES consiglia di portare al colloquio diplomi, certificati e referenze di precedenti lavori, quindi le referenze vengono dopo, non con la prima candidatura.', 'ro-eures']
    ] },
    { k: 'docs', v: 'copies', t: [
      ['Supporting documents such as diplomas and training certificates are brought to the interview; certified copies are not mentioned.',
        'I documenti di supporto come diplomi e certificati di formazione si portano al colloquio; le copie certificate non sono menzionate.', 'ro-eures']
    ] },
    { k: 'salary', v: 'later', t: [
      ['None of the programme listings read states a salary or asks for an expectation; pay is discussed later. This is our reading.',
        'Nessuno degli annunci dei programmi letti indica uno stipendio o chiede una pretesa; la retribuzione si discute più avanti. È una nostra lettura.', 'ours']
    ] },
    { k: 'check', v: 'some', t: [
      ['A medical certificate of fitness for work is required before starting, and a psychological test is compulsory for some occupations such as security guards and care staff; we found nothing on routine reference checks.',
        'Prima di iniziare è richiesto un certificato medico di idoneità al lavoro, e un test psicologico è obbligatorio per alcune occupazioni come guardie giurate e personale assistenziale; non abbiamo trovato nulla sui controlli di routine delle referenze.', 'ro-eures']
    ] },
    { k: 'contact', v: 'mixed', t: [
      ['Portals and programmes take open applications, while smaller local firms lean on introductions. This is our reading.',
        'I portali e i programmi accettano candidature aperte, mentre le piccole aziende locali si affidano alle presentazioni. È una nostra lettura.', 'ro-eures ours']
    ] },
    { k: 'abroad', v: 'workable', t: [
      ['Application is online and in English at the multinationals, but Vodafone’s final stage is an in-person focus group at its Bucharest headquarters, so plan to travel for the last step.',
        'La candidatura è online e in inglese presso le multinazionali, ma la fase finale di Vodafone è un focus group in presenza nella sede di Bucarest, quindi bisogna prevedere di viaggiare per l’ultimo passaggio.', 'ro-vf']
    ] },
    { k: 'language', v: 'english', t: [
      ['English is widely accepted by multinationals; Romanian is a plus at local employers, and EURES says the CV should be in Romanian, with a version in the required foreign language if the job needs one.',
        'L’inglese è ampiamente accettato dalle multinazionali; il rumeno è un vantaggio presso i datori locali, ed EURES dice che il CV dovrebbe essere in rumeno, con una versione nella lingua straniera richiesta se il lavoro la prevede.', 'ro-ig ro-eures']
    ] }
  ],

  rows: {
    process: [
      ['Vodafone’s graduate programme has three steps: a CV in English, online challenges including a personality and cognitive assessment, and an in-person focus group of a couple of hours at its Bucharest headquarters, with group and individual exercises. Each candidate’s single application is the only one reviewed.',
        'Il programma per neolaureati di Vodafone ha tre passaggi: un CV in inglese, prove online che includono una valutazione della personalità e cognitiva, e un focus group in presenza di un paio d’ore nella sede di Bucarest, con esercizi di gruppo e individuali. Si può presentare una sola candidatura, ed è l’unica esaminata.', 'ro-vf'],
      ['UiPath tells internship applicants to allow up to two weeks for review before they are contacted.',
        'UiPath dice ai candidati al tirocinio di mettere in conto fino a due settimane per la valutazione prima di essere contattati.', 'ro-uipath'],
      ['EURES advises bringing diplomas, certificates and references to the interview. We did not establish the usual time from application to offer, the interview language outside the programmes, or dress norms.',
        'EURES consiglia di portare al colloquio diplomi, certificati e referenze. Non abbiamo stabilito i tempi abituali tra candidatura e offerta, la lingua del colloquio fuori dai programmi né le norme sull’abbigliamento.', 'ro-eures']
    ],
    offer: [
      ['The employment contract must be written, in Romanian, and signed before you start; a medical certificate of fitness is needed, and the employer must notify the labour inspectorate, so allow time between signing and the first day.',
        'Il contratto di lavoro deve essere scritto, in rumeno, e firmato prima dell’inizio; serve un certificato medico di idoneità e il datore di lavoro deve avvisare l’ispettorato del lavoro, quindi bisogna prevedere un po’ di tempo tra la firma e il primo giorno.', 'ro-eures'],
      ['Probation is at most 90 calendar days for operational posts, 120 for management and 30 for people with disabilities; EURES says a graduate’s first six months are treated as a traineeship.',
        'La prova dura al massimo 90 giorni di calendario per i posti operativi, 120 per la dirigenza e 30 per le persone con disabilità; EURES dice che i primi sei mesi di un neolaureato sono trattati come tirocinio.', 'ro-eures'],
      ['A resignation notice cannot exceed 20 calendar days for operational posts or 45 for management. Full-time is 40 hours a week; the minimum gross wage from 1 July 2026 is RON 4,325 a month. Fixed-term contracts can run up to 36 months.',
        'Il preavviso di dimissioni non può superare 20 giorni di calendario per i posti operativi o 45 per la dirigenza. Il tempo pieno è di 40 ore a settimana; il salario minimo lordo dal 1° luglio 2026 è di 4.325 RON al mese. I contratti a termine possono durare fino a 36 mesi.', 'ro-eures'],
      ['We did not establish whether graduates negotiate pay, whether a thirteenth-month bonus is usual, or how long employers give to decide.',
        'Non abbiamo stabilito se i neolaureati negoziano lo stipendio, se le tredicesime sono diffuse o quanto tempo i datori di lavoro concedono per decidere.', 'ours']
    ],
    sponsor: [
      ['For a non-EU hire the employer files for a work authorisation (aviz de angajare) with the immigration inspectorate: vacancies must not be fillable by Romanians, EU/EEA citizens or permanent residents, and hiring must fit the annual quota set by government decision.',
        'Per un’assunzione extra-UE il datore di lavoro chiede all’ispettorato per l’immigrazione un’autorizzazione al lavoro (aviz de angajare): il posto non deve poter essere coperto da cittadini romeni, UE/SEE o residenti permanenti, e l’assunzione deve rientrare nella quota annuale fissata dal governo.', 'ro-igi'],
      ['The fee is €100, or €25 for a foreign student hired after graduation; the inspectorate decides within 30 days, extendable by up to 15, and the employer must have operated for at least one year in the field and owe nothing to the state budget.',
        'La tassa è di 100 €, o 25 € per uno studente straniero assunto dopo la laurea; l’ispettorato decide entro 30 giorni, prorogabili di altri 15 al massimo, e il datore di lavoro deve operare da almeno un anno nel settore e non avere debiti verso il bilancio dello Stato.', 'ro-igi'],
      ['The library’s visa guide records the 2026 quota as 90,000 newly admitted foreign workers (Government Decision 1,169/2025), and EU Blue Card hires as exempt from the quota and the labour-market test.',
        'La guida ai visti della libreria riporta la quota 2026 in 90.000 lavoratori stranieri di nuovo ingresso (Decisione del Governo 1.169/2025), e le assunzioni con Carta blu UE come esenti da quota e test del mercato del lavoro.', 'ro-visa'],
      ['Ask early, at the first interview or in the application, and ask whether the employer has filed the procedure before. This is our reading; no page states what employers want to hear.',
        'Chiedete presto, al primo colloquio o nella candidatura, e domandate se il datore di lavoro ha già presentato la procedura. È una nostra lettura; nessuna pagina dice che cosa vogliono sentirsi dire i datori di lavoro.', 'ours']
    ],
    where: [
      ['Portals: BestJobs (bestjobs.eu), eJobs (ejobs.ro), Hipo (hipo.ro), Lugera&Makler (lugera.ro) and the national employment agency ANOFM, whose listings are in Romanian; Hipo has an internship category and a graduate level filter.',
        'Portali: BestJobs (bestjobs.eu), eJobs (ejobs.ro), Hipo (hipo.ro), Lugera&Makler (lugera.ro) e l’agenzia nazionale per l’impiego ANOFM, i cui annunci sono in rumeno; Hipo ha una categoria di tirocini e un filtro per neolaureati.', 'ro-eures ro-hipo'],
      ['Programmes: Vodafone Discover (opportunities.vodafone.com), UiPath internships, Stagii pe Bune (stagiipebune.ro) for IT students, KPMG Business School for audit.',
        'Programmi: Vodafone Discover (opportunities.vodafone.com), i tirocini di UiPath, Stagii pe Bune (stagiipebune.ro) per gli studenti di informatica, KPMG Business School per la revisione.', 'ro-vf ro-uipath26 ro-spb ro-kpmg'],
      ['Public sector: concurs-national.anfp.gov.ro for civil-service competitions and posturi.gov.ro for contractual posts.',
        'Settore pubblico: concurs-national.anfp.gov.ro per i concorsi della funzione pubblica e posturi.gov.ro per i posti a contratto.', 'ro-anfp ro-posturi'],
      ['University career services: the University of Bucharest’s department of counselling and career guidance (DCOC) and Politehnica Timișoara’s career centre (CCOC) organise the fairs.',
        'Servizi carriera universitari: il dipartimento di consulenza e orientamento dell’Università di Bucarest (DCOC) e il centro carriera del Politecnico di Timișoara (CCOC) organizzano le fiere.', 'ro-ub ro-upt']
    ],
    mistakes: [
      ['Applying to Vodafone’s graduate programme after the November close, or sending several applications: only one is reviewed.',
        'Candidarsi al programma per neolaureati di Vodafone dopo la chiusura di novembre, o inviare più candidature: ne viene esaminata una sola.', 'ro-vf'],
      ['Treating the summer internship as optional in technology: the structured entry routes found there (UiPath, Stagii pe Bune) are summer placements, so the window is the spring before.',
        'Trattare il tirocinio estivo come facoltativo nella tecnologia: le vie d’accesso strutturate trovate (UiPath, Stagii pe Bune) sono tirocini estivi, quindi la finestra è la primavera precedente.', 'ro-uipath26 ro-spb'],
      ['Sending an English-only CV to a local employer: EURES says the CV should be in Romanian, with a foreign-language version only where the job requires it.',
        'Inviare un CV solo in inglese a un datore di lavoro locale: EURES dice che il CV dovrebbe essere in rumeno, con una versione in lingua straniera solo se il lavoro la richiede.', 'ro-eures'],
      ['Assuming a non-EU hire is a formality: the employer must prove no local candidate fits and fit within a quota, so start the conversation early.',
        'Dare per scontata un’assunzione extra-UE: il datore di lavoro deve dimostrare che nessun candidato locale è adatto e rientrare in una quota, quindi bisogna aprire la conversazione presto.', 'ro-igi']
    ]
  },

  lang: [
    { f: 'business', v: 'bilingual', lv: 'Excellent English plus Romanian', t: [
      ['ABSL’s 2025 report lists proficiency in several foreign languages among the skills service centres look for; Vodafone’s graduate programme asks for excellent written and spoken English, tested by a CV in English and an in-person focus group.',
        'Il rapporto ABSL 2025 elenca la padronanza di più lingue straniere tra le competenze cercate dai centri di servizi; il programma per neolaureati di Vodafone chiede un ottimo inglese scritto e parlato, verificato con un CV in inglese e un focus group in presenza.', 'ro-absl ro-vf'],
      ['Insight Global notes that German, French, Italian and Spanish are common alongside English in certain industries and regions.',
        'Insight Global osserva che tedesco, francese, italiano e spagnolo sono diffusi accanto all’inglese in certi settori e regioni.', 'ro-ig']
    ] },
    { f: 'accounting', v: 'bilingual', lv: 'Advanced English, French or German', t: [
      ['KPMG’s audit internship listing asks for advanced English, French or German, and treats other foreign languages as an asset. No certificate is named.',
        'L’annuncio dello stage di revisione di KPMG chiede inglese, francese o tedesco avanzato, e considera un vantaggio altre lingue straniere. Non è indicato alcun certificato.', 'ro-kpmg']
    ] },
    { f: 'tech', v: 'english', lv: 'Excellent English', t: [
      ['Vodafone’s IT-AI engineering track requires excellent written and spoken English and takes the CV in English; UiPath’s internship listing states no English requirement and asks for programming skills.',
        'Il percorso di ingegneria IT-AI di Vodafone richiede un ottimo inglese scritto e parlato e accetta il CV in inglese; l’annuncio del tirocinio di UiPath non indica un requisito d’inglese e chiede competenze di programmazione.', 'ro-vf ro-uipath']
    ] },
    { f: 'cyber', v: 'english', lv: 'English at work', t: [
      ['Vodafone’s IT-AI engineering track, open to information-security graduates among others, recruits in English; we found no Bitdefender listing stating its language.',
        'Il percorso di ingegneria IT-AI di Vodafone, aperto tra gli altri ai laureati in sicurezza informatica, recluta in inglese; non abbiamo trovato alcun annuncio di Bitdefender che indichi la lingua.', 'ro-vf']
    ] }
  ],

  programmes: [
    { n: 'Discover Graduate Programme', o: 'Vodafone Romania', f: 'business', in: null, w: null, lang: 'EN', intl: 'unknown', ids: 'ro-vf ro-vf-prog' },
    { n: 'Discover Graduate IT-AI Engineering Programme', o: 'Vodafone Romania', f: 'ai', in: null, w: null, lang: 'EN', intl: 'unknown', ids: 'ro-vf' },
    { n: 'Software Engineering Intern (summer)', o: 'UiPath', f: 'tech', in: null, w: null, lang: 'EN', intl: 'unknown', ids: 'ro-uipath ro-uipath26' },
    { n: 'KPMG Business School audit internship', o: 'KPMG Romania', f: 'accounting', in: null, w: null, lang: 'EN FR DE', intl: 'unknown', ids: 'ro-kpmg' },
    { n: 'Stagii pe Bune', o: 'Junio (with partner companies such as Bitdefender)', f: 'tech', in: null, w: null, lang: 'RO', intl: 'local', ids: 'ro-spb' }
  ],

  outcomes: [
    ['Eurostat’s figures show high youth unemployment (26.1% among 15-to-24-year-olds in 2025), while employers in business services report cautious hiring and a preference for experienced professionals (ABSL 2025). We found no return-offer or conversion rate for Romania.',
      'I dati Eurostat mostrano una disoccupazione giovanile elevata (26,1% tra i 15-24enni nel 2025), mentre i datori di lavoro dei servizi alle imprese riferiscono assunzioni caute e una preferenza per i professionisti esperti (ABSL 2025). Non abbiamo trovato alcun tasso di conferma o conversione per la Romania.', 'ro-eurostat ro-absl']
  ],

  sources: {
    'ro-eurostat': ['data', 'Eurostat une_rt_a: unemployment by age, Romania 2025 (read 3 Oct 2026, see the country record)', 'https://ec.europa.eu/eurostat/api/dissemination/statistics/1.0/data/edat_lfse_24?format=JSON&lang=EN&duration=Y_LE3&isced11=ED5-8&age=Y20-34&sex=T&geo=RO&geo=EU27_2020', '2026-10-03'],
    'ro-cee': ['data', 'Admetia research library: places/gulf-and-central-eastern-europe.md §4 (Mercer 2024 SSC surveys via ABSL)', 'research/places/gulf-and-central-eastern-europe.md', '2026-10-01'],
    'ro-ig': ['practitioner consensus', 'Insight Global: Romania talent market analysis', 'https://insightglobal.com/blog/romania-talent-market-analysis/', '2026-10-08'],
    'ro-js': ['practitioner consensus', 'Jobseeker Romania: how to make a CV with a photo', 'https://www.jobseeker.com/ro/cv/articole/cv-cu-poza', '2026-10-08'],
    'ro-jobera': ['practitioner consensus', 'Jobera: Romania CV guide', 'https://jobera.com/resources/?p=9473', '2026-10-08'],
    'ro-eures': ['data', 'EURES (European Commission): Living and working conditions, Romania', 'https://eures.europa.eu/living-and-working/living-and-working-conditions/living-and-working-conditions-romania_en', '2026-10-08'],
    'ro-igi': ['data', 'Inspectoratul General pentru Imigrări: Obținerea avizului de angajare și taxe', 'https://igi.mai.gov.ro/obtinerea-avizului/', '2026-10-08'],
    'ro-visa': ['practitioner consensus', 'Admetia research library: visas_immigration/romania, Romanian visa guide (quota under HG 1.169/2025; Blue Card exemption)', 'research/visas_immigration/romania/romania_visas_immigration_guide.md', '2026-10-05'],
    'ro-cnred': ['data', 'CNRED (Romanian education ministry): About CNRED', 'https://cnred.edu.ro/en/about-cnred/', '2026-10-08'],
    'ro-absl': ['data', 'ABSL Romania with PwC: 2025 industry report', 'https://www.absl.ro/absl-annual-report-human-capital-innovation-and-digital-transformation/', '2026-10-08'],
    'ro-vf': ['employer-stated', 'Hipo.ro: Vodafone Romania Discover Graduate IT-AI Engineering Programme, 2027', 'https://www.hipo.ro/locuri-de-munca/locuri_de_munca/272410/Vodafone-Romania/Vodafone-Romania-Discover-Graduate-IT-AI-Engineering-Programme,-2027', '2026-10-08'],
    'ro-vf-prog': ['employer-stated', 'Hipo.ro: Discover Vodafone Discover Programme', 'https://www.hipo.ro/locuri-de-munca/vizualizareArticol/3971/Discover-Vodafone-Discover-Programme', '2026-10-08'],
    'ro-kpmg': ['employer-stated', 'Hipo.ro: KPMG Romania, Audit Internship (KPMG Business School)', 'https://www.hipo.ro/locuri-de-munca/locuri_de_munca/23855/KPMG-Romania/Audit-Internship-KPMG-Business-School-', '2026-10-08'],
    'ro-spb': ['employer-stated', 'Stagii pe Bune: about us', 'https://stagiipebune.ro/about-us/', '2026-10-08'],
    'ro-hipo': ['employer-stated', 'Hipo.ro: home page (job board, graduate fair, Angajatori de TOP dates)', 'https://www.hipo.ro/', '2026-10-08'],
    'ro-posturi': ['data', 'Romanian Government: posturi.gov.ro, vacant contractual posts in public entities', 'https://posturi.gov.ro/', '2026-10-08'],
    'ro-anfp': ['data', 'ANFP (National Agency of Civil Servants): home page', 'https://www.anfp.gov.ro/', '2026-10-08'],
    'ro-ub': ['employer-stated', 'University of Bucharest: Career Days, 13–14 November 2024', 'https://unibuc.ro/esti-student-ub-universitatea-din-bucuresti-organizeaza-prin-departamentul-de-consiliere-si-orientare-pentru-cariera-dcoc-o-noua-editie-a-zilelor-carierei/?lang=en', '2026-10-08'],
    'ro-upt': ['employer-stated', 'Politehnica Timișoara career centre (CCOC): Career Fair', 'https://ccoc.fih.upt.ro/?p=1498', '2026-10-08'],
    'ro-bitdefender': ['employer-stated', 'Bitdefender: Bitdefender and the Polytechnic University of Bucharest inaugurate a computer lab', 'https://community.bitdefender.com/en/discussion/91324/bitdefender-and-the-polytechnica-university-of-bucharest-inaugurated-a-state-of-the-art-computer-lab', '2026-10-08'],
    'ro-uipath': ['employer-stated', 'Hipo.ro: UiPath software engineering intern (summer 2025)', 'https://hipo.ro/locuri-de-munca/locuri_de_munca/245869/Entry-Level-Jobs-in-TOP-Companies---Hipo.ro/Software-Engineering-Intern---Uipath', '2026-10-08'],
    'ro-uipath26': ['employer-stated', 'Accel jobs board: UiPath applied science intern, Bucharest (summer 2026)', 'https://jobs.accel.com/companies/uipath/jobs/61078809-applied-science-intern', '2026-10-08']
  }
});
