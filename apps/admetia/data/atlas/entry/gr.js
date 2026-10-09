/* How hiring works: Greece. Extended on 8 Oct 2026 to the full schema: pages opened that day (EURES,
 * HELLENiQ ENERGY and METLEN programme pages, Deloitte Greece students page, Pfizer CDI, Career Days
 * Athens, ASEP, a DYPA graduate-jobs report, To Vima on graduate job-hunting, Rivermate, the library
 * visa guide) plus earlier reads (AUEB graduate survey, To Vima on the GSEE youth survey, PwC Greece,
 * AUTH careers office). No survey ranks the routes beyond AUEB's two main channels. The banks' own
 * graduate pages (Eurobank, National Bank, Alpha, Piraeus) could not be read, so no bank programme is
 * described; stage counts, time to offer and CV photo norms are not established outside the
 * programmes read. */
ATLAS.addEntry({
  id: 'GR',
  checked: '2026-10-08',
  review: '2027-04-08',

  lead: [
    ['Greek graduates find work mainly through online ads and personal connections; Athens University of Economics found these two channels far ahead of the careers office or agencies. Family and professional networks (the mésson) still decide much of who hears about a job.',
      'I laureati greci trovano lavoro soprattutto tramite annunci online e conoscenze personali; l’Università di Economia di Atene ha trovato questi due canali molto più avanti dell’ufficio placement o delle agenzie. Le reti familiari e professionali (il mésson) decidono ancora buona parte di chi viene a sapere di un posto.', 'gr-aueb ours']
  ],

  ways: [
    { name: ['Online ads and job portals', 'Annunci online e portali del lavoro'], r: 'direct', p: 'first exp', basis: 'data', t: [
      ['Athens University of Economics and Business’s graduate survey puts online job ads first among the channels graduates used to find work, far ahead of the careers office or agencies.',
        'L’indagine sui laureati dell’Università di Economia e Business di Atene mette gli annunci online al primo posto tra i canali usati dai laureati per trovare lavoro, molto prima dell’ufficio placement o delle agenzie.', 'gr-aueb'],
      ['kariera.gr, which searches by city and category, says it completes over 7000 applications a month; DYPA, the public employment service, runs 115 employment promotion centres, an online CV register and EURES advisers.',
        'kariera.gr, che permette di cercare per città e categoria, dichiara oltre 7000 candidature completate al mese; il DYPA, il servizio pubblico per l’impiego, gestisce 115 centri di promozione dell’occupazione, un registro online dei CV e consulenti EURES.', 'gr-kariera gr-eures']
    ] },
    { name: ['Personal connections', 'Conoscenze personali'], r: 'network', p: 'first exp', basis: 'data', t: [
      ['The same survey puts personal connections second among the channels graduates used. A recommendation from family, professors or former employers is the usual way into smaller firms and shipping offices in Piraeus.',
        'La stessa indagine mette le conoscenze personali al secondo posto tra i canali usati dai laureati. Una raccomandazione di familiari, professori o ex datori è la via abituale nelle aziende più piccole e negli uffici armatoriali del Pireo.', 'gr-aueb ours'],
      ['EURES recommends asking acquaintances and sending CVs directly to companies as part of the search.',
        'EURES raccomanda di chiedere ai conoscenti e di inviare direttamente i CV alle aziende come parte della ricerca.', 'gr-eures']
    ] },
    { name: ['Internships at the Big Four and multinationals', 'Tirocini nelle Big Four e nelle multinazionali'], r: 'intern', p: 'first intern', basis: 'consensus', t: [
      ['No survey ranks the routes beyond those two channels; the programmes found are ordered by what the pages show. Deloitte Greece offers internships in audit, risk advisory, consulting, tax, financial advisory and shared services in Maroussi and Thessaloniki, says there are no fixed application dates and takes an online CV.',
        'Nessuna indagine classifica le vie oltre quei due canali; i programmi trovati sono ordinati secondo ciò che mostrano le pagine. Deloitte Grecia offre tirocini in revisione, risk advisory, consulenza, fiscale, financial advisory e servizi condivisi a Maroussi e Salonicco, dice che non ci sono date fisse di candidatura e accetta un CV online.', 'gr-deloitte-p ours'],
      ['PwC Greece, with over 1,000 staff, recruits audit and accounting-outsourcing graduates through university career offices.',
        'PwC Grecia, con oltre 1.000 dipendenti, recluta laureati in revisione e contabilità in outsourcing tramite gli uffici placement universitari.', 'gr-pwc gr-auth']
    ] },
    { name: ['Graduate programmes of large Greek groups', 'Programmi per neolaureati dei grandi gruppi greci'], r: 'scheme', p: 'first', basis: 'consensus', t: [
      ['HELLENiQ ENERGY’s Empowering Future Leaders runs two years in three stages for graduates with up to two years’ experience; selection is a form and CV, an online assessment, an assessment centre and an HR interview, and Greek and English at C2 are required.',
        'L’Empowering Future Leaders di HELLENiQ ENERGY dura due anni in tre fasi per laureati con al massimo due anni di esperienza; la selezione prevede modulo e CV, una valutazione online, un assessment center e un colloquio con le risorse umane, e si richiedono greco e inglese a livello C2.', 'gr-hq'],
      ['METLEN’s Engineers in Action is a paid one-year placement for young engineers: application, online assessments, virtual speed discussions, an onsite assessment centre and an offer, with applications closing on 20 October for a January 2027 start.',
        'L’Engineers in Action di METLEN è un inserimento retribuito di un anno per giovani ingegneri: candidatura, valutazioni online, colloqui virtuali veloci, un assessment center in sede e un’offerta, con candidature che chiudono il 20 ottobre per un inizio a gennaio 2027.', 'gr-metlen-p'],
      ['Pfizer’s Center for Digital Innovation in Thessaloniki hired 15 young professionals, mainly software engineers, from its six-week software and cloud bootcamp in 2023.',
        'Il Center for Digital Innovation di Pfizer a Salonicco ha assunto 15 giovani professionisti, soprattutto ingegneri software, dal suo bootcamp di sei settimane in software e cloud nel 2023.', 'gr-cdi-bc']
    ] },
    { name: ['Career Days and university career offices', 'Career Days e uffici placement universitari'], r: 'campus', p: 'first intern', basis: 'anecdotal', t: [
      ['Career.Days Athens is held on 12–13 September 2026 at the Athens Metropolitan Expo, with on-site interviews; the previous edition had over 145 companies and over 6,500 candidates.',
        'Career.Days Athens si tiene il 12–13 settembre 2026 all’Athens Metropolitan Expo, con colloqui in sede; l’edizione precedente ha avuto oltre 145 aziende e oltre 6.500 candidati.', 'gr-cd'],
      ['The careers office of the University of Macedonia in Thessaloniki posts graduate openings such as PwC Greece’s accounting outsourcing roles.',
        'L’ufficio placement dell’Università della Macedonia a Salonicco pubblica offerte per neolaureati come i ruoli di PwC Grecia in contabilità in outsourcing.', 'gr-auth']
    ] },
    { name: ['Public-sector competitions and DYPA graduate jobs', 'Concorsi pubblici e posti per laureati del DYPA'], r: 'public', p: 'first exp', basis: 'consensus', t: [
      ['The Supreme Council for Personnel Selection (ASEP) runs the public-sector competitions: its portal carries announcements, vacancies, competitions and a points calculator, and applications are made through a candidate registry; the site is in Greek.',
        'Il Consiglio supremo per la selezione del personale (ASEP) gestisce i concorsi del settore pubblico: il suo portale contiene avvisi, posti vacanti, concorsi e un calcolatore dei punti, e le candidature si presentano tramite un registro dei candidati; il sito è in greco.', 'gr-asep'],
      ['DYPA opened 1,000 twelve-month posts for unemployed graduates aged 25 to 54 in 2026, at €1,250 gross a month for university graduates and €1,200 for technological-education graduates; applications ran from 27 July to 18 August 2026.',
        'Il DYPA ha aperto nel 2026 1.000 posti di dodici mesi per laureati disoccupati tra i 25 e i 54 anni, con 1.250 € lordi al mese per i laureati universitari e 1.200 € per quelli dell’istruzione tecnologica; le candidature sono state dal 27 luglio al 18 agosto 2026.', 'gr-dypa']
    ] }
  ],

  cycle: [
    ['The autumn is the window for the big programmes: Career.Days Athens falls on 12–13 September 2026, and METLEN’s Engineers in Action took applications from 15 September to 20 October 2025 and closes on 20 October again for a January 2027 start.',
      'L’autunno è la finestra dei grandi programmi: Career.Days Athens cade il 12–13 settembre 2026, e l’Engineers in Action di METLEN ha raccolto candidature dal 15 settembre al 20 ottobre 2025 e chiude di nuovo il 20 ottobre per un inizio a gennaio 2027.', 'gr-cd gr-metlen-p gr-metlen'],
    ['Other routes have no season: Deloitte Greece says there are no fixed dates for its internships, HELLENiQ ENERGY’s page says only “Stay tuned” and Pfizer’s bootcamp is run early in the year (the eighth, reported in June 2023, was held at the start of that year).',
      'Altre vie non hanno una stagione: Deloitte Grecia dice che non ci sono date fisse per i suoi tirocini, la pagina di HELLENiQ ENERGY dice solo «restate sintonizzati» e il bootcamp di Pfizer si tiene all’inizio dell’anno (l’ottavo, riportato nel giugno 2023, si è tenuto all’inizio di quell’anno).', 'gr-deloitte-p gr-hq gr-cdi-bc'],
    ['Public posts follow their own calendars: DYPA’s 1,000 graduate posts were open from 27 July to 18 August 2026.',
      'I posti pubblici seguono calendari propri: i 1.000 posti per laureati del DYPA erano aperti dal 27 luglio al 18 agosto 2026.', 'gr-dypa']
  ],

  schools: [
    ['Athens University of Economics and Business (AUEB) is the school whose graduates were surveyed: they found work mainly through online ads and personal connections.',
      'L’Università di Economia e Business di Atene (AUEB) è la scuola i cui laureati sono stati intervistati: hanno trovato lavoro soprattutto tramite annunci online e conoscenze personali.', 'gr-aueb'],
    ['The University of Macedonia’s careers office in Thessaloniki advertises PwC Greece’s graduate roles in accounting outsourcing.',
      'L’ufficio placement dell’Università della Macedonia a Salonicco pubblicizza i ruoli per neolaureati di PwC Grecia in contabilità in outsourcing.', 'gr-auth'],
    ['The programmes read name degree fields (engineering, economic sciences, finance, accounting, IT), not particular schools, and HELLENiQ ENERGY accepts a degree from a Greek or foreign institution; no ranking of schools by employers was found.',
      'I programmi letti indicano campi di studio (ingegneria, scienze economiche, finanza, contabilità, informatica), non scuole precise, e HELLENiQ ENERGY accetta un titolo di un istituto greco o estero; non è stata trovata alcuna classifica delle scuole da parte dei datori di lavoro.', 'gr-hq gr-deloitte-p']
  ],

  events: [
    ['Career.Days Athens, 12–13 September 2026, Athens Metropolitan Expo, Hall 1: recruitment, employer branding, networking and on-site interviews.',
      'Career.Days Athens, 12–13 settembre 2026, Athens Metropolitan Expo, padiglione 1: reclutamento, employer branding, networking e colloqui in sede.', 'gr-cd'],
    ['METLEN’s Engineers in Action: applications close on 20 October, with virtual speed discussions and an onsite assessment centre to follow.',
      'L’Engineers in Action di METLEN: le candidature chiudono il 20 ottobre, seguiranno colloqui virtuali veloci e un assessment center in sede.', 'gr-metlen-p'],
    ['The Ministry of Labour’s Rebrain Greece initiative holds events in New York, London and Amsterdam to reconnect Greeks abroad with the domestic job market.',
      'L’iniziativa Rebrain Greece del Ministero del lavoro organizza eventi a New York, Londra e Amsterdam per riavvicinare i greci all’estero al mercato del lavoro interno.', 'gr-vima2']
  ],

  fields: [
    { f: 'business', t: [
      ['HELLENiQ ENERGY’s programme has commercial, digital and corporate routes (human resources, finance, procurement) for graduates in engineering or economic sciences; Deloitte Greece takes finance, accounting, economics and business administration graduates into shared services.',
        'Il programma di HELLENiQ ENERGY ha percorsi commerciali, digitali e corporate (risorse umane, finanza, acquisti) per laureati in ingegneria o scienze economiche; Deloitte Grecia inserisce nei servizi condivisi laureati in finanza, contabilità, economia e business administration.', 'gr-hq gr-deloitte-p']
    ] },
    { f: 'accounting', t: [
      ['The Big Four in Athens and Thessaloniki are among the most open graduate employers: PwC Greece, with over 1,000 staff, recruits audit and accounting-outsourcing graduates with training towards a chartered accountancy qualification, advertising through university career offices.',
        'Le Big Four ad Atene e Salonicco sono tra i datori più aperti ai laureati: PwC Grecia, con oltre 1.000 dipendenti, recluta laureati in revisione e contabilità in outsourcing con formazione verso il titolo di dottore commercialista, pubblicando tramite gli uffici placement universitari.', 'gr-pwc gr-auth']
    ] },
    { f: 'public', t: [
      ['Public posts are filled through ASEP competitions, and DYPA ran a 2026 scheme of 1,000 twelve-month posts for unemployed graduates; the DYPA contract is not a permanent civil-service post.',
        'I posti pubblici si coprono con i concorsi dell’ASEP, e il DYPA ha gestito nel 2026 un programma di 1.000 posti di dodici mesi per laureati disoccupati; il contratto del DYPA non è un posto fisso nella funzione pubblica.', 'gr-asep gr-dypa']
    ] },
    { f: 'tech', t: [
      ['Pfizer’s digital hub in Thessaloniki, working in software, machine learning and data science, drew over 3,500 applications for 200 posts; consultancies such as Deloitte and Accenture hire junior developers in Athens and Thessaloniki.',
        'Il centro digitale di Pfizer a Salonicco, che lavora in software, machine learning e data science, ha ricevuto oltre 3.500 candidature per 200 posti; società di consulenza come Deloitte e Accenture assumono sviluppatori junior ad Atene e Salonicco.', 'gr-pfizer gr-workable'],
      ['Pfizer’s bootcamp is aimed at graduates of technology schools, engineering faculties and IT schools and lasts six weeks (110 hours); participants who stood out were offered jobs.',
        'Il bootcamp di Pfizer è rivolto a laureati di scuole tecnologiche, facoltà di ingegneria e scuole di informatica e dura sei settimane (110 ore); chi si è distinto ha ricevuto un’offerta di lavoro.', 'gr-cdi-bc']
    ] }
  ],

  customs: [
    { k: 'season', v: 'cyclical', t: [
      ['The large programmes recruit in the autumn (Career.Days in September, METLEN to 20 October), public schemes run in short summer windows and some firms take internships all year; there is no single national season.',
        'I grandi programmi reclutano in autunno (Career.Days a settembre, METLEN fino al 20 ottobre), i programmi pubblici hanno brevi finestre estive e alcune aziende accettano tirocini tutto l’anno; non c’è un’unica stagione nazionale.', 'gr-cd gr-metlen-p gr-dypa gr-deloitte-p']
    ] },
    { k: 'masters', v: 'helpful', t: [
      ['HELLENiQ ENERGY asks for a bachelor’s degree and calls a master’s an advantage; Deloitte Greece takes bachelor’s or master’s graduates.',
        'HELLENiQ ENERGY chiede una laurea triennale e considera un vantaggio la magistrale; Deloitte Grecia accoglie laureati triennali o magistrali.', 'gr-hq gr-deloitte-p']
    ] },
    { k: 'degrees', v: 'regulated', t: [
      ['DOATAP is the body that recognises degrees from foreign universities and technological institutes; HELLENiQ ENERGY accepts a bachelor’s from a Greek or foreign institution but asks engineers to be registered with the Technical Chamber of Greece. The pages read do not say employers in other fields ask for recognition.',
        'Il DOATAP è l’ente che riconosce i titoli di università e istituti tecnologici stranieri; HELLENiQ ENERGY accetta una laurea triennale di un istituto greco o estero ma chiede agli ingegneri l’iscrizione alla Camera tecnica della Grecia. Le pagine lette non dicono che i datori di lavoro di altri settori chiedano il riconoscimento.', 'gr-eures gr-hq ours']
    ] },
    { k: 'brand', v: 'low', t: [
      ['The programme pages read ask for degree fields and language levels and name no schools; HELLENiQ ENERGY accepts degrees from Greek or foreign institutions. This is our reading; no ranking of schools by employers was found.',
        'Le pagine dei programmi lette chiedono campi di studio e livelli di lingua e non nominano scuole; HELLENiQ ENERGY accetta titoli di istituti greci o esteri. È una nostra lettura; non è stata trovata alcuna classifica delle scuole da parte dei datori di lavoro.', 'gr-hq gr-deloitte-p ours']
    ] },
    { k: 'dual', v: 'little', t: [
      ['We found no dual-study or apprenticeship route into graduate jobs in Greece; the structured routes are internships, employer programmes and public schemes. This is our reading.',
        'Non abbiamo trovato vie di studio duale o apprendistato verso i lavori per laureati in Grecia; le vie strutturate sono i tirocini, i programmi dei datori di lavoro e i programmi pubblici. È una nostra lettura.', 'ours']
    ] },
    { k: 'publicw', v: 'mid', t: [
      ['ASEP runs the civil-service competitions and DYPA offered 1,000 graduate posts in 2026; we did not find a figure for the public sector’s share of graduate hires, so the weight is our reading.',
        'L’ASEP gestisce i concorsi della funzione pubblica e il DYPA ha offerto 1.000 posti per laureati nel 2026; non abbiamo trovato una cifra sulla quota del settore pubblico nelle assunzioni di laureati, quindi il peso è una nostra lettura.', 'gr-asep gr-dypa ours']
    ] },
    { k: 'sponsorr', v: 'rare', t: [
      ['A non-EU hire goes through the quota-bound Metaklisi procedure or an EU Blue Card; employers accredited as sponsors get a 30-day decision instead of 90. The graduate programmes read require Greek and, for men, completed military service. See Visas for the rules.',
        'Un’assunzione extra-UE passa dalla procedura Metaklisi legata alle quote o da una Carta blu UE; i datori di lavoro accreditati come sponsor ottengono una decisione in 30 giorni invece di 90. I programmi per neolaureati letti richiedono il greco e, per gli uomini, il servizio militare assolto. Vedi Visti per le regole.', 'gr-visa gr-hq gr-metlen-p']
    ] },
    { k: 'photo', v: 'optional', t: [
      ['EURES lists the contents of a Greek CV (personal details, education, training, experience, languages, computer skills) and does not mention a photo; the DYPA online template and Europass are the most common formats.',
        'EURES elenca il contenuto di un CV greco (dati personali, formazione, esperienza, lingue, competenze informatiche) e non menziona la foto; il modello online del DYPA e l’Europass sono i formati più comuni.', 'gr-eures']
    ] },
    { k: 'cv', v: 'two', t: [
      ['EURES says a CV should be short, one to two pages; many Greek companies use application forms instead.',
        'EURES dice che il CV deve essere breve, di una o due pagine; molte aziende greche usano invece moduli di candidatura.', 'gr-eures']
    ] },
    { k: 'letter', v: 'optional', t: [
      ['EURES says a cover letter must be typed, no more than one page, and linked to the specific job; HELLENiQ ENERGY’s first step is a form and CV, and Deloitte Greece asks for an online CV.',
        'EURES dice che la lettera di presentazione deve essere dattiloscritta, di non più di una pagina e legata al lavoro specifico; il primo passo di HELLENiQ ENERGY è un modulo con CV, e Deloitte Grecia chiede un CV online.', 'gr-eures gr-hq gr-deloitte-p']
    ] },
    { k: 'refs', v: 'later', t: [
      ['EURES says two or three recommendations may be included; none of the programme pages read asks for references with the application. This is our reading.',
        'EURES dice che si possono includere due o tre lettere di raccomandazione; nessuna delle pagine dei programmi lette chiede referenze con la candidatura. È una nostra lettura.', 'gr-eures ours']
    ] },
    { k: 'docs', v: 'copies', t: [
      ['The programme pages read ask for a CV and form, not certified copies; foreign degrees go to DOATAP for recognition where it is needed. This is our reading.',
        'Le pagine dei programmi lette chiedono un CV e un modulo, non copie certificate; i titoli esteri vanno al DOATAP per il riconoscimento quando serve. È una nostra lettura.', 'gr-hq gr-eures ours']
    ] },
    { k: 'salary', v: 'later', t: [
      ['HELLENiQ ENERGY promises competitive compensation without a figure and METLEN offers a competitive package; neither asks for an expectation in the application. This is our reading.',
        'HELLENiQ ENERGY promette una retribuzione competitiva senza cifre e METLEN offre un pacchetto competitivo; nessuno dei due chiede una pretesa salariale nella candidatura. È una nostra lettura.', 'gr-hq gr-metlen-p ours']
    ] },
    { k: 'check', v: 'some', t: [
      ['HELLENiQ ENERGY and METLEN require men to have completed military service or hold a legal exemption, as an eligibility condition; we found nothing on routine reference checks.',
        'HELLENiQ ENERGY e METLEN richiedono agli uomini di aver assolto il servizio militare o di avere un’esenzione legale, come condizione di ammissibilità; non abbiamo trovato nulla sui controlli di routine delle referenze.', 'gr-hq gr-metlen-p']
    ] },
    { k: 'contact', v: 'people', t: [
      ['Connections open most doors outside the multinationals.',
        'Le conoscenze aprono la maggior parte delle porte fuori dalle multinazionali.', 'gr-aueb ours']
    ] },
    { k: 'abroad', v: 'hard', t: [
      ['HELLENiQ ENERGY’s application platform is in Greek and its programme asks for Greek at C2 and willingness to relocate; METLEN’s last step is an onsite assessment centre. Greek graduates abroad are courted through Rebrain Greece events, not through a remote process. This is our reading.',
        'La piattaforma di candidatura di HELLENiQ ENERGY è in greco e il suo programma chiede il greco a livello C2 e disponibilità al trasferimento; l’ultimo passaggio di METLEN è un assessment center in sede. I greci all’estero sono corteggiati con gli eventi di Rebrain Greece, non con un processo a distanza. È una nostra lettura.', 'gr-hq gr-metlen-p gr-vima2 ours']
    ] },
    { k: 'language', v: 'local', t: [
      ['Greek for nearly all roles outside shipping, tourism and international firms; HELLENiQ ENERGY asks for Greek and English at C2 and METLEN for excellent Greek and English.',
        'Il greco per quasi tutti i ruoli fuori da trasporto marittimo, turismo e aziende internazionali; HELLENiQ ENERGY chiede greco e inglese a livello C2 e METLEN un ottimo greco e inglese.', 'gr-hq gr-metlen-p ours']
    ] }
  ],

  rows: {
    process: [
      ['HELLENiQ ENERGY has four stages: an expression of interest with CV on a Greek-only platform, an online assessment, an assessment centre with activities, presentations and simulated business scenarios, and an HR interview.',
        'HELLENiQ ENERGY ha quattro fasi: una manifestazione di interesse con CV su una piattaforma solo in greco, una valutazione online, un assessment center con attività, presentazioni e scenari aziendali simulati, e un colloquio con le risorse umane.', 'gr-hq'],
      ['METLEN has five: application, online assessments, virtual speed discussions with recruiters, an onsite assessment centre testing teamwork, problem-solving and technical skills, and an offer; applications close on 20 October for a January 2027 start. Deloitte Greece reviews an online CV and may then invite you into its recruitment process.',
        'METLEN ne ha cinque: candidatura, valutazioni online, colloqui virtuali veloci con i selezionatori, un assessment center in sede che verifica lavoro di squadra, problem solving e competenze tecniche, e un’offerta; le candidature chiudono il 20 ottobre per un inizio a gennaio 2027. Deloitte Grecia esamina un CV online e può poi invitare al processo di selezione.', 'gr-metlen-p gr-deloitte-p'],
      ['Silence is common: To Vima’s February 2026 report quotes graduates who sent more than 50 and more than 100 CVs with only automatic replies, and one whose employer disappeared after saying she was hired. We did not establish typical time to offer or dress norms.',
        'Il silenzio è frequente: il reportage di To Vima del febbraio 2026 riporta laureati che hanno inviato più di 50 e più di 100 CV ricevendo solo risposte automatiche, e una il cui datore di lavoro è sparito dopo averle detto che era assunta. Non abbiamo stabilito i tempi abituali fino all’offerta né le norme sull’abbigliamento.', 'gr-vima2 ours']
    ],
    offer: [
      ['The most common contract is full-time and indefinite; the employer must give the material terms in writing no later than two months after you start. Contractual hours are 40 a week, with statutory limits of 45 hours for a five-day week.',
        'Il contratto più comune è a tempo pieno e indeterminato; il datore di lavoro deve comunicare per iscritto le condizioni essenziali entro due mesi dall’inizio. L’orario contrattuale è di 40 ore a settimana, con limiti di legge di 45 ore per una settimana di cinque giorni.', 'gr-eures'],
      ['Private employers pay a 13th monthly salary at Christmas plus Easter and summer-leave allowances; the minimum monthly salary was €920 from 1 April 2026.',
        'I datori di lavoro privati pagano una 13ª mensilità a Natale più indennità per Pasqua e per le ferie estive; il salario mensile minimo era di 920 € dal 1° aprile 2026.', 'gr-eures'],
      ['An employer guide says probation is at most six months for indefinite contracts and that in the first 12 months a contract can be ended without notice or severance. We did not establish whether graduates negotiate or how long employers give to decide.',
        'Una guida per datori di lavoro dice che la prova dura al massimo sei mesi per i contratti a tempo indeterminato e che nei primi 12 mesi un contratto può essere interrotto senza preavviso né indennità. Non abbiamo stabilito se i neolaureati negoziano né quanto tempo i datori di lavoro concedono per decidere.', 'gr-riv ours']
    ],
    sponsor: [
      ['For a non-EU hire the employer files an electronic request with the regional migration authority for the quota-bound Metaklisi procedure: a contract of at least six months, housing guarantee and pay at least the legal minimum, then a national visa and an E.4 permit. The quota is set by a biennial joint ministerial decision by region and profession.',
        'Per un’assunzione extra-UE il datore di lavoro presenta una richiesta elettronica all’autorità migratoria regionale per la procedura Metaklisi legata alle quote: un contratto di almeno sei mesi, garanzia di alloggio e retribuzione non inferiore al minimo legale, poi un visto nazionale e un permesso E.4. La quota è fissata da una decisione ministeriale congiunta biennale per regione e profilo.', 'gr-visa'],
      ['An EU Blue Card hire is decided within 90 days, or 30 days if the employer is registered as an accredited sponsor. Few graduate programmes are open to non-Greek speakers: the two read require Greek and English at C2 or excellent Greek and English.',
        'Un’assunzione con Carta blu UE è decisa entro 90 giorni, o 30 se il datore di lavoro è registrato come sponsor accreditato. Pochi programmi per neolaureati sono aperti a chi non parla greco: i due letti richiedono greco e inglese a livello C2 o un ottimo greco e inglese.', 'gr-visa gr-hq gr-metlen-p'],
      ['Ask early and say whether you speak Greek. This is our reading; no page states what employers want to hear.',
        'Chiedete presto e dite se parlate greco. È una nostra lettura; nessuna pagina dice che cosa vogliono sentirsi dire i datori di lavoro.', 'ours']
    ],
    where: [
      ['Portals and public services: kariera.gr; DYPA (dypa.gov.gr) and its EURES advisers; ASEP (asep.gr) for public competitions; EURES for jobs across the EU.',
        'Portali e servizi pubblici: kariera.gr; il DYPA (dypa.gov.gr) e i suoi consulenti EURES; l’ASEP (asep.gr) per i concorsi pubblici; EURES per i lavori in tutta l’UE.', 'gr-kariera gr-eures gr-asep'],
      ['Employer pages: HELLENiQ ENERGY’s Empowering Future Leaders, METLEN’s Engineers in Action, Deloitte Greece’s student internships, Pfizer’s Center for Digital Innovation in Thessaloniki.',
        'Pagine dei datori di lavoro: Empowering Future Leaders di HELLENiQ ENERGY, Engineers in Action di METLEN, i tirocini per studenti di Deloitte Grecia, il Center for Digital Innovation di Pfizer a Salonicco.', 'gr-hq gr-metlen-p gr-deloitte-p gr-cdi'],
      ['Fairs and university offices: Career.Days Athens each September and university career offices such as that of the University of Macedonia in Thessaloniki.',
        'Fiere e uffici universitari: Career.Days Athens ogni settembre e uffici placement universitari come quello dell’Università della Macedonia a Salonicco.', 'gr-cd gr-auth']
    ],
    mistakes: [
      ['Applying to the big programmes without Greek: HELLENiQ ENERGY asks for Greek and English at C2 and METLEN for excellent Greek and English.',
        'Candidarsi ai grandi programmi senza il greco: HELLENiQ ENERGY chiede greco e inglese a livello C2 e METLEN un ottimo greco e inglese.', 'gr-hq gr-metlen-p'],
      ['Missing the autumn window: METLEN’s applications close on 20 October, and DYPA’s graduate posts were open for only three weeks in July and August.',
        'Perdere la finestra autunnale: le candidature di METLEN chiudono il 20 ottobre, e i posti per laureati del DYPA erano aperti solo per tre settimane tra luglio e agosto.', 'gr-metlen-p gr-dypa'],
      ['Ignoring the men’s requirement: both programmes ask for completed military service or a legal exemption.',
        'Ignorare il requisito per gli uomini: entrambi i programmi chiedono il servizio militare assolto o un’esenzione legale.', 'gr-hq gr-metlen-p'],
      ['Sending a long CV or letter: EURES says one to two pages for the CV and no more than one typed page for the letter.',
        'Inviare un CV o una lettera lunghi: EURES indica una o due pagine per il CV e non più di una pagina dattiloscritta per la lettera.', 'gr-eures'],
      ['Taking entry-level ads at face value: To Vima reports that ads for junior roles routinely demand two or three years of experience, so apply anyway and use connections.',
        'Prendere alla lettera gli annunci per profili junior: To Vima riferisce che gli annunci per ruoli junior chiedono di solito due o tre anni di esperienza, quindi bisogna candidarsi comunque e usare le conoscenze.', 'gr-vima2 gr-aueb']
    ]
  },

  lang: [
    { f: 'business', v: 'bilingual', lv: 'Greek and English at C2', t: [
      ['HELLENiQ ENERGY requires excellent Greek and English at C2 level and runs its application platform in Greek only; METLEN asks for excellent Greek and English for its Greek positions.',
        'HELLENiQ ENERGY richiede un ottimo greco e inglese a livello C2 e gestisce la piattaforma di candidatura solo in greco; METLEN chiede un ottimo greco e inglese per le sue posizioni in Grecia.', 'gr-hq gr-metlen-p']
    ] },
    { f: 'accounting', v: 'bilingual', lv: 'Greek and English', t: [
      ['A PwC Greece accounting-outsourcing graduate posting for Thessaloniki, advertised through a university career office (deadline 11 July 2025), asks for proficient spoken and written Greek and English.',
        'Un annuncio di PwC Grecia per laureati in contabilità in outsourcing a Salonicco, pubblicizzato tramite un ufficio placement universitario (scadenza 11 luglio 2025), chiede buona comunicazione scritta e orale in greco e in inglese.', 'gr-auth']
    ] },
    { f: 'tech', v: 'english', lv: 'Not stated; likely English', t: [
      ['Pfizer’s Thessaloniki hub works on more than 200 global digital projects, and Accenture’s junior .NET listing states no language requirement; neither page says Greek is needed. English is our reading, not a stated requirement.',
        'Il centro di Pfizer a Salonicco lavora a più di 200 progetti digitali globali, e l’annuncio di Accenture per sviluppatori .NET junior non indica alcun requisito linguistico; nessuna delle due pagine dice che serva il greco. L’inglese è una nostra lettura, non un requisito dichiarato.', 'gr-cdi gr-workable ours']
    ] },
    { f: 'public', v: 'local', lv: 'Greek', t: [
      ['The ASEP portal for public competitions and the DYPA registry are in Greek; no English version of the ASEP site was found.',
        'Il portale dell’ASEP per i concorsi pubblici e il registro del DYPA sono in greco; non è stata trovata alcuna versione inglese del sito dell’ASEP.', 'gr-asep gr-dypa']
    ] }
  ],

  programmes: [
    { n: 'Empowering Future Leaders', o: 'HELLENiQ ENERGY', f: 'business', in: null, w: null, lang: 'EL EN', intl: 'unknown', ids: 'gr-hq' },
    { n: 'Engineers in Action', o: 'METLEN Energy & Metals', f: 'business', in: null, w: [9, 10], lang: 'EL EN', intl: 'unknown', ids: 'gr-metlen-p' },
    { n: 'Internships (audit, risk, consulting, tax, financial advisory, shared services)', o: 'Deloitte Greece', f: 'accounting', in: null, w: null, lang: 'n/s', intl: 'unknown', ids: 'gr-deloitte-p' },
    { n: 'Software and Cloud Engineering Bootcamp', o: 'Pfizer Center for Digital Innovation (Thessaloniki)', f: 'tech', in: null, w: null, lang: 'n/s', intl: 'unknown', ids: 'gr-cdi-bc' },
    { n: 'Employment programme for unemployed graduates (1,000 posts)', o: 'DYPA (public employment service)', f: 'public', in: 1000, w: [7, 8], lang: 'n/s', intl: 'local', ids: 'gr-dypa' }
  ],

  outcomes: [
    ['Eurostat’s figures show 64.0% of Greek tertiary graduates aged 20 to 34 who left education up to three years earlier in work in 2025, the lowest of the 36 countries listed (EU 85.3%), against 80.3% for all graduates of that age. We found no return-offer or conversion rate for Greece.',
      'I dati Eurostat mostrano che nel 2025 era occupato il 64,0% dei laureati greci di 20–34 anni usciti dagli studi da non più di tre anni, il valore più basso dei 36 paesi elencati (UE 85,3%), contro l’80,3% di tutti i laureati di quell’età. Non abbiamo trovato alcun tasso di conferma o conversione per la Grecia.', 'gr-grad'],
    ['After the crisis, graduate unemployment more than doubled, from 7% in 2009 to 17.1% in 2017, and many graduates left; in a 2025 survey 38% of workers under 30 said their job was unrelated to their studies.',
      'Dopo la crisi la disoccupazione dei laureati è più che raddoppiata, dal 7% del 2009 al 17,1% del 2017, e molti laureati sono partiti; in un’indagine del 2025 il 38% dei lavoratori sotto i 30 anni ha detto che il proprio lavoro non c’entra con gli studi.', 'gr-iobe gr-vima'],
    ['To Vima reports (24 February 2026) that youth unemployment fell from 29.7% in 2021 to 13% in 2025 but that entry-level ads routinely demand two or three years of experience, and many graduates end up in seasonal work.',
      'To Vima riferisce (24 febbraio 2026) che la disoccupazione giovanile è scesa dal 29,7% del 2021 al 13% del 2025 ma che gli annunci per profili junior chiedono di solito due o tre anni di esperienza, e molti laureati finiscono in lavori stagionali.', 'gr-vima2']
  ],

  sources: {
    'gr-aueb': ['data', 'Athens University of Economics and Business: survey of graduates (main job-search channels)', 'https://aueb.gr/sites/default/files/modip/%CE%95%CE%A1%CE%95%CE%A5%CE%9D%CE%91%20%CE%91%CE%A0%CE%9F%CE%A6%CE%9F%CE%99%CE%A4%CE%9F%CE%99%20%CE%A0%CE%A0%CE%A3%20%CE%91%CE%A0%CE%9F%CE%A4%CE%95%CE%9B%CE%95%CE%A3%CE%9C%CE%91%CE%A4%CE%91%202%20-%20ENG.pdf', '2026-10-07'],
    'gr-iobe': ['data', 'IOBE research on unemployed graduates, reported by CNN Greece', 'https://www.cnn.gr/news/ellada/story/138071/ereyna-iove-ayxanontai-oi-anergoi-ptyxioyxoi', '2026-10-07'],
    'gr-vima': ['data', 'To Vima: Greek Gen Z faces job insecurity despite high education (GSEE/ALCO, Youth and Work 2025)', 'https://www.tovima.com/society/greek-gen-z-faces-job-insecurity-despite-high-education/amp/', '2026-10-07'],
    'gr-pwc': ['employer-stated', 'PwC Greece: assurance jobs brochure', 'https://www.pwc.com/gr/en/careers/Pwc-Assurance-Jobs.pdf', '2026-10-07'],
    'gr-auth': ['employer-stated', 'University of Macedonia careers office (Thessaloniki): PwC Greece graduate opportunities in accounting outsourcing, Thessaloniki (posting closed 11 July 2025)', 'https://careerservices.uom.gr/35321-graduate-opportunities-in-accounting-outsourcing-thessaloniki-pwc-greece', '2026-10-09'],
    'gr-pfizer': ['data', 'SKAI: Pfizer’s Thessaloniki digital hub, over 3,500 applications for 200 posts', 'https://www.skai.gr/news/greece/psifiako-kentro-tis-pfizer-i-thessaloniki-ano-ton-3500-aitiseon-gia-200-theseis-poies-eidikotites-zita', '2026-10-07'],
    'gr-workable': ['employer-stated', 'Workable listing: junior .NET developer in Athens or Thessaloniki (Accenture Greece)', 'https://jobs.workable.com/jobs/72c12115-62ea-4fa1-ac10-e12f489a4b46.md', '2026-10-08'],
    'gr-eures': ['data', 'EURES (European Commission): Living and working conditions, Greece', 'https://eures.europa.eu/living-and-working/living-and-working-conditions/living-and-working-conditions-greece_en', '2026-10-08'],
    'gr-kariera': ['employer-stated', 'kariera.gr: home page (job search, CV upload, events)', 'https://www.kariera.gr/en', '2026-10-08'],
    'gr-cd': ['employer-stated', 'kariera.gr: Career.Days Athens 2026', 'https://employers.kariera.gr/en/events/physical-events/athens-career-days', '2026-10-08'],
    'gr-hq': ['employer-stated', 'HELLENiQ ENERGY: Empowering Future Leaders Graduate Employment Program', 'https://www.helleniqenergy.com/en/career/empowering-future-leaders', '2026-10-08'],
    'gr-metlen-p': ['employer-stated', 'METLEN: Engineers in Action, requirements and selection process', 'https://www.metlen.com/our-people/engineers-in-action/requirements-selection-process', '2026-10-08'],
    'gr-metlen': ['employer-stated', 'METLEN Energy & Metals: Engineers in Action 2025 applications (15 September to 20 October 2025), press release of 15 September 2025', 'https://www.metlengroup.com/our-people/engineers-in-action/requirements-selection-process', '2026-10-03'],
    'gr-deloitte-p': ['employer-stated', 'Deloitte Greece: students, internship programmes', 'https://www.deloitte.com/gr/en/careers/explore-your-fit/students/every-story-has-a-beginning-deloitte-greece.html', '2026-10-08'],
    'gr-cdi': ['employer-stated', 'Pfizer Center for Digital Innovation, Thessaloniki: home and careers pages', 'https://centerfordigitalinnovation.pfizer.com/', '2026-10-08'],
    'gr-cdi-bc': ['employer-stated', 'Pfizer CDI: the successful 8th bootcamp brings 15 young employees (1 June 2023)', 'https://centerfordigitalinnovation.pfizer.com/news/pfizers-successful-8th-bootcamp-brings-15-young-employees-cdi', '2026-10-08'],
    'gr-asep': ['data', 'ASEP (Supreme Council for Personnel Selection): home page', 'https://www.asep.gr/', '2026-10-08'],
    'gr-dypa': ['practitioner consensus', 'WhereWeWork.gr: DYPA opens 1,000 graduate jobs at €1,200 to €1,250 (applications 27 July to 18 August 2026)', 'https://www.wherewework.gr/en/news-and-articles/greeces-dypa-opens-1000-graduate-jobs-at-eur1200-to-eur1250-472', '2026-10-08'],
    'gr-vima2': ['practitioner consensus', 'To Vima: Degree in hand, silence on screen, Greece’s job-hunt trap (24 February 2026)', 'https://www.tovima.com/society/degree-in-hand-silence-on-screen-greeces-job-hunt-trap/amp/', '2026-10-08'],
    'gr-riv': ['practitioner consensus', 'Rivermate: Greece employer of record hiring guide for 2026 (updated 19 March 2026)', 'https://www.rivermate.com/guides/greece/recruitment', '2026-10-08'],
    'gr-visa': ['practitioner consensus', 'Admetia research library: visas_immigration/greece, Greek visa guide (Metaklisi quotas; EU Blue Card; accredited sponsors)', 'research/visas_immigration/greece/greece_visas_immigration_guide.md', '2026-10-05'],
    'gr-grad': ['data', 'Eurostat edat_lfse_24: employment rates of recent graduates, Greece 2025', 'https://ec.europa.eu/eurostat/databrowser/view/edat_lfse_24/default/table?lang=en', '2026-10-03']
  }
});
