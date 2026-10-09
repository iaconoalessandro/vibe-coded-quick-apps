/* How hiring works: Austria. Reads on 7-8 Oct 2026 (Work in Austria, karriere.at,
 * WU ZBP Career Center, REWE Group; then WKO apprenticeship statistics, AMS
 * graduate special topic, ENIC NARIC Austria, migration.gv.at, Erste Group,
 * voestalpine, BCG Germany and Austria, Deloitte Austria, the Federal Public
 * Service portal, RIS § 19 AngG, karriere.at application guides). */
ATLAS.addEntry({
  id: 'AT',
  checked: '2026-10-08',
  review: '2027-04-08',

  lead: [
    ['Austria hires much like Germany: internships during the degree, many of them required by the study plan, part-time student jobs, and trainee programmes at banks, retailers and industrial groups. Vienna’s business university runs its own careers centre that is a fixture of the junior market.',
      'L’Austria assume in modo molto simile alla Germania: tirocini durante gli studi, molti dei quali previsti dal piano di studi, lavori part-time da studente e programmi trainee in banche, catene della distribuzione e gruppi industriali. L’università di economia di Vienna ha un proprio centro carriere che è un punto fisso del mercato junior.', 'ours at-wu'],
    ['There is no national season: large employers advertise trainee programmes when they need them and take unsolicited applications, while the fixed dates are the university fairs in October and November and in spring.',
      'Non esiste una stagione nazionale: i grandi datori di lavoro pubblicano i programmi trainee quando ne hanno bisogno e accettano candidature spontanee, mentre le date fisse sono le fiere universitarie in ottobre e novembre e in primavera.', 'at-voest at-fairs']
  ],

  ways: [
    { name: ['Internship and student job (Praktikum, Ferialjob)', 'Tirocinio e lavoro da studente (Praktikum, Ferialjob)'], r: 'intern', p: 'first intern', basis: 'consensus', t: [
      ['WU’s careers centre says its job portal for business, economics and law students carries about 3,000 openings a year and that 250 to 300 companies present themselves at WU each year (2023); firms use such postings to try out students before hiring.',
        'Il centro carriere della WU dice che il suo portale di offerte per studenti di economia e di diritto ne ha circa 3.000 l’anno e che ogni anno da 250 a 300 aziende si presentano alla WU (2023); le aziende usano questi annunci per mettere alla prova gli studenti prima di assumerli.', 'at-wu ours'],
      ['voestalpine alone takes about 2,000 young people a year for holiday jobs, usually 4 weeks, with applications by the end of January; it also offers internships and thesis places, mainly in research and development, often tied to a bachelor’s, master’s or doctoral thesis.',
        'Solo voestalpine prende circa 2.000 giovani l’anno per lavori estivi, di solito di 4 settimane, con candidature entro fine gennaio; offre anche tirocini e posti di tesi, soprattutto in ricerca e sviluppo, spesso legati a una tesi di laurea triennale, magistrale o di dottorato.', 'at-voest']
    ] },
    { name: ['Direct application through a job portal or unsolicited', 'Candidatura diretta tramite portale o spontanea'], r: 'direct', p: 'first exp', basis: 'consensus', t: [
      ['Applying through the employer’s portal is the standard route for graduates and experienced hires alike: Deloitte Austria takes a CV, a motivation statement and certificates through its online portal, and voestalpine takes graduates for advertised posts or after an unsolicited application.',
        'Candidarsi dal portale del datore è la via standard sia per i neolaureati sia per chi ha esperienza: Deloitte Austria riceve CV, lettera motivazionale e certificati dal proprio portale online, e voestalpine assume neolaureati per posti pubblicati o dopo una candidatura spontanea.', 'at-deloitte at-voest'],
      ['The public employment service AMS runs the job-search engine "alle jobs" and the MeinAMS portal, and the state talent portal Work in Austria lets employers find foreign professionals who register a profile.',
        'Il servizio pubblico per l’impiego AMS gestisce il motore di ricerca "alle jobs" e il portale MeinAMS, e il portale statale Work in Austria permette ai datori di trovare professionisti stranieri che registrano un profilo.', 'at-amsportal at-wia']
    ] },
    { name: ['Trainee programmes', 'Programmi trainee'], r: 'scheme', p: 'first', basis: 'consensus', t: [
      ['Banks, insurers and retail groups run international trainee programmes; REWE Group partnered with WU in 2026 for its management trainees. Erste Group’s Group Trainee Programme combines 8 training modules with 6 job-rotation modules.',
        'Banche, assicurazioni e gruppi della distribuzione hanno programmi trainee internazionali; REWE Group ha avviato nel 2026 una collaborazione con la WU per i suoi management trainee. Il Group Trainee Programme di Erste Group combina 8 moduli di formazione con 6 moduli di rotazione sul lavoro.', 'at-rewe at-erste'],
      ['In industry the programmes are opened as needed: voestalpine says its trainee programmes are offered "whenever required" and advertised on its job portal, and its High Performance Metals programme lasts 2 years with a start at any time.',
        'Nell’industria i programmi si aprono quando servono: voestalpine afferma che i suoi programmi trainee sono offerti "quando necessario" e pubblicati sul suo portale di lavoro, e il programma High Performance Metals dura 2 anni con inizio in qualsiasi momento.', 'at-voest at-voest-hpm']
    ] },
    { name: ['Career fairs at the universities', 'Fiere del lavoro nelle università'], r: 'campus', p: 'first intern', basis: 'consensus', t: [
      ['Career Calling in Vienna, on 14 October 2026, hosts about 100 employers with entry-level jobs, internships and traineeships; about 3,600 students, graduates and young professionals came in 2025. Technical days follow: TECONOMY Vienna on 21 October 2026 and TUday26 on 7 May 2026, which draws about 6,000 visitors.',
        'Career Calling a Vienna, il 14 ottobre 2026, ospita circa 100 datori di lavoro con posizioni di ingresso, tirocini e programmi trainee; nel 2025 sono venuti circa 3.600 studenti, laureati e giovani professionisti. Seguono giornate tecniche: TECONOMY Vienna il 21 ottobre 2026 e TUday26 il 7 maggio 2026, che attira circa 6.000 visitatori.', 'at-cc at-fairs']
    ] },
    { name: ['Consulting internship (Visiting Associate)', 'Stage in consulenza (Visiting Associate)'], r: 'intern', p: 'first intern', basis: 'consensus', t: [
      ['BCG Germany and Austria runs an 8- or 10-week Visiting Associate internship (up to 12 weeks where the study plan requires it), open to bachelor’s students from the 3rd semester, master’s and doctoral students and gap-year students; applications run all year, no earlier than 6 months before the start.',
        'BCG Germania e Austria organizza uno stage da Visiting Associate di 8 o 10 settimane (fino a 12 dove il piano di studi lo richiede), aperto a studenti della triennale dal 3° semestre, della magistrale, del dottorato e a chi è in anno sabbatico; le candidature sono aperte tutto l’anno, non prima di 6 mesi dall’inizio.', 'at-bcg-va'],
      ['The interview process is the same for the internship and full-time entry, and the second round includes one case in German and one in English.',
        'Il processo di selezione è lo stesso per lo stage e per l’ingresso a tempo pieno, e il secondo turno comprende un caso in tedesco e uno in inglese.', 'at-bcg-proc']
    ] },
    { name: ['Apprenticeship (Lehre) and dual study', 'Apprendistato (Lehre) e studio duale'], r: 'apprentice', p: 'first', basis: 'data', t: [
      ['At the end of 2025 there were 102,878 apprentices in Austria, 3.4% fewer than a year earlier, mostly in trades and crafts (43,965) and industry (16,169); only 1,456 were in banking and insurance and 2,420 in information and consulting. It is a school-leaver route, not a way in for a graduate.',
        'Alla fine del 2025 in Austria c’erano 102.878 apprendisti, il 3,4% in meno rispetto a un anno prima, soprattutto in artigianato e mestieri (43.965) e industria (16.169); solo 1.456 erano in banca e assicurazioni e 2.420 in informazione e consulenza. È un percorso per chi esce dalla scuola, non un ingresso per un laureato.', 'at-lehre'],
      ['Dual degrees exist at a few employers: voestalpine offers one in Intelligent Production Technology with FH Upper Austria at its Linz site.',
        'Esistono lauree duali presso pochi datori di lavoro: voestalpine ne offre una in Intelligent Production Technology con la FH Upper Austria nella sede di Linz.', 'at-voest']
    ] }
  ],

  cycle: [
    ['Graduate unemployment is low and steady but moves with the economy: the AMS rate for people with a degree peaked at 3.9% in 2020 and fell to 2.6% in 2023; in December 2024 it was 3.4%, against 8.2% for all education levels.',
      'La disoccupazione dei laureati è bassa e stabile ma segue l’economia: il tasso AMS per chi ha una laurea ha toccato il 3,9% nel 2020 ed è sceso al 2,6% nel 2023; a dicembre 2024 era del 3,4%, contro l’8,2% di tutti i livelli di istruzione.', 'at-ams'],
    ['The number of registered unemployed graduates reached 31,674 at the end of January 2025, 18% more than a year before; the AMS reads this mainly as the result of more people holding degrees.',
      'Il numero di laureati disoccupati registrati ha raggiunto 31.674 a fine gennaio 2025, il 18% in più rispetto a un anno prima; l’AMS lo legge soprattutto come effetto del maggior numero di persone con una laurea.', 'at-ams']
  ],

  fields: [
    { f: 'finance', t: [
      ['Erste Group runs a group trainee programme for recent graduates with on-the-job training across its Central European banks, and a separate rotation programme in capital markets law for young professionals with a master’s degree in law; the Raiffeisen banks recruit trainees regionally.',
        'Erste Group ha un programma trainee di gruppo per neolaureati con formazione sul lavoro nelle sue banche dell’Europa centrale, e un programma di rotazione separato in diritto dei mercati dei capitali per giovani professionisti con un master in giurisprudenza; le banche Raiffeisen reclutano trainee a livello regionale.', 'at-erste ours']
    ] },
    { f: 'accounting', t: [
      ['Deloitte Austria, one of the Big Four, recruits through its online portal, asking for a CV, a motivation statement and certificates, and then a 10-minute call and one or two interviews.',
        'Deloitte Austria, una delle Big Four, recluta tramite il portale online, chiedendo CV, lettera motivazionale e certificati, poi una telefonata di 10 minuti e uno o due colloqui.', 'at-deloitte']
    ] },
    { f: 'consulting', t: [
      ['BCG hires through an 8- or 10-week Visiting Associate internship and the same interview process for full-time entry; McKinsey’s recruiters say fluent German is mandatory for its Germany and Austria offices.',
        'BCG assume tramite uno stage da Visiting Associate di 8 o 10 settimane e lo stesso processo di selezione per l’ingresso a tempo pieno; i selezionatori di McKinsey affermano che il tedesco fluente è obbligatorio per le sedi di Germania e Austria.', 'at-bcg-va at-mck']
    ] },
    { f: 'business', t: [
      ['voestalpine, headquartered in Linz, takes graduates by direct entry, trainee programmes, thesis places and a dual degree; its High Performance Metals programme places trainees in finance and controlling, supply chain, domestic sales or export sales, mainly in Vienna.',
        'voestalpine, con sede a Linz, assume neolaureati tramite ingresso diretto, programmi trainee, posti di tesi e una laurea duale; il suo programma High Performance Metals inserisce i trainee in finanza e controllo, supply chain, vendite nazionali o export, soprattutto a Vienna.', 'at-voest at-voest-hpm']
    ] },
    { f: 'public', t: [
      ['The federal public service had 137,687 employees at the end of 2024, 4,477 of them in training; federal jobs are advertised on the Jobbörse portal.',
        'Il servizio pubblico federale contava 137.687 dipendenti a fine 2024, 4.477 dei quali in formazione; gli impieghi federali sono pubblicati sul portale Jobbörse.', 'at-oed']
    ] },
    { f: 'tech', t: [
      ['Vienna has a steady flow of junior IT roles, but German is often required even where English is the working language; TU Wien and TU Graz are the main feeders.',
        'Vienna ha un flusso costante di ruoli IT junior, ma spesso serve il tedesco anche dove l’inglese è la lingua di lavoro; la TU di Vienna e la TU di Graz sono i principali canali.', 'at-devjobs ours'],
      ['Graduates are a large share of the sector’s staff: 47.7% of employees in information and communication held a degree in 2023.',
        'I laureati sono una quota ampia del personale del settore: il 47,7% dei dipendenti nell’informazione e comunicazione aveva una laurea nel 2023.', 'at-ams']
    ] }
  ],

  schools: [
    ['WU Vienna for business, TU Wien and TU Graz for engineering and computing; Austrian employers know these schools and their grading.',
      'La WU di Vienna per l’economia, la TU di Vienna e la TU di Graz per ingegneria e informatica; i datori austriaci conoscono queste scuole e i loro voti.', 'ours'],
    ['Some employers say they are school-blind in their recruiting: BCG welcomes all disciplines and universities for its internship.',
      'Alcuni datori dichiarano di non guardare alla scuola: BCG accoglie tutte le discipline e le università per il suo stage.', 'at-bcg-va']
  ],

  events: [
    ['Career Calling, held in Vienna on 14 October 2026 (09:00 to 17:00), is the main graduate fair: about 100 employers and about 3,600 visitors in 2025.',
      'Career Calling, che si tiene a Vienna il 14 ottobre 2026 (dalle 09:00 alle 17:00), è la principale fiera per laureati: circa 100 datori di lavoro e circa 3.600 visitatori nel 2025.', 'at-cc'],
    ['Other dates in 2026: TECONOMY in Graz on 23 April, TUday26 at TU Wien on 7 May, TECONOMY Vienna on 21 October, the FH Wien career day on 21 October and the JKU career day in Linz on 25 November.',
      'Altre date nel 2026: TECONOMY a Graz il 23 aprile, TUday26 alla TU Wien il 7 maggio, TECONOMY Vienna il 21 ottobre, il career day della FH Wien il 21 ottobre e il career day della JKU a Linz il 25 novembre.', 'at-fairs']
  ],

  customs: [
    { k: 'season', v: 'rolling', t: [
      ['No single national season: BCG takes applications year-round, voestalpine offers trainee programmes "whenever required" and its High Performance Metals programme starts at any time. Fixed dates are for student jobs: voestalpine holiday-job applications close at the end of January, with notice of openings by the end of May.',
        'Nessuna stagione nazionale unica: BCG accetta candidature tutto l’anno, voestalpine offre programmi trainee "quando necessario" e il suo programma High Performance Metals parte in qualsiasi momento. Le date fisse riguardano i lavori da studente: le candidature per i lavori estivi di voestalpine chiudono a fine gennaio, con comunicazione dei posti entro fine maggio.', 'at-voest at-voest-hpm at-bcg-va']
    ] },
    { k: 'masters', v: 'helpful', t: [
      ['Programmes vary: Erste’s capital-markets-law traineeship asks for a master’s degree in law, and voestalpine’s High Performance Metals programme takes a bachelor’s or master’s. BCG’s internship is open from the 3rd bachelor’s semester.',
        'I programmi variano: il programma di Erste in diritto dei mercati dei capitali chiede un master in giurisprudenza, e il programma High Performance Metals di voestalpine accetta una laurea triennale o magistrale. Lo stage di BCG è aperto dal 3° semestre della triennale.', 'at-erste at-voest-hpm at-bcg-va']
    ] },
    { k: 'degrees', v: 'eval', t: [
      ['For a job that is not regulated, no formal recognition is needed; ENIC NARIC AUSTRIA (at the OeAD, applications at aais.at) issues an assessment of a foreign degree that can be added to the application. It costs €150 for up to two qualifications, plus €50 for each additional one, and a master’s assessment also needs the bachelor’s.',
        'Per un lavoro non regolamentato non serve alcun riconoscimento formale; ENIC NARIC AUSTRIA (presso l’OeAD, richieste su aais.at) rilascia una valutazione del titolo estero che si può allegare alla candidatura. Costa 150 € per un massimo di due titoli, più 50 € per ogni titolo aggiuntivo, e la valutazione di un master richiede anche la laurea triennale.', 'at-naric'],
      ['Regulated professions need a formal process instead: nostrification for civil engineers and architects is run by the university (TU Wien charges €150), and doctors, nurses and teachers go through the recognition authorities listed on berufsanerkennung.at.',
        'Le professioni regolamentate richiedono invece un procedimento formale: la nostrificazione per ingegneri civili e architetti è gestita dall’università (la TU Wien chiede 150 €), e medici, infermieri e insegnanti passano dalle autorità di riconoscimento elencate su berufsanerkennung.at.', 'at-tuw at-naric']
    ] },
    { k: 'brand', v: 'some', t: [
      ['Austrian employers know WU, TU Wien and TU Graz and their grading, and the WU careers centre is a fixture of the junior market. Some employers state they are open to all universities, as BCG does for its internship.',
        'I datori austriaci conoscono WU, TU Wien e TU Graz e i loro voti, e il centro carriere della WU è un punto fisso del mercato junior. Alcuni datori dichiarano di essere aperti a tutte le università, come fa BCG per il suo stage.', 'ours at-wu at-bcg-va']
    ] },
    { k: 'dual', v: 'some', t: [
      ['The apprenticeship system is large (102,878 apprentices at the end of 2025) but sits in trades and industry; dual degrees for graduates are few, such as voestalpine’s with FH Upper Austria.',
        'Il sistema di apprendistato è ampio (102.878 apprendisti a fine 2025) ma si concentra in artigianato e industria; le lauree duali per i laureati sono poche, come quella di voestalpine con la FH Upper Austria.', 'at-lehre at-voest']
    ] },
    { k: 'publicw', v: 'mid', t: [
      ['The federal public service alone had 137,687 employees at the end of 2024, with 4,477 in training; its jobs are advertised on the Jobbörse portal. Provinces and municipalities employ more on top of that.',
        'Il solo servizio pubblico federale contava 137.687 dipendenti a fine 2024, con 4.477 in formazione; i suoi impieghi sono pubblicati sul portale Jobbörse. Province e comuni ne impiegano altri oltre a questi.', 'at-oed ours']
    ] },
    { k: 'sponsorr', v: 'some', t: [
      ['A graduate of an Austrian university applies for the Red-White-Red Card without a labour market test; the employer supplies the work contract and an employer’s declaration, and the pay must match what comparable Austrian junior graduates earn. See Visas for the rules.',
        'Un laureato di un’università austriaca richiede la Red-White-Red Card senza test del mercato del lavoro; il datore fornisce il contratto di lavoro e una dichiarazione del datore, e la retribuzione deve essere pari a quella di laureati junior austriaci comparabili. Per le regole vedi Visti.', 'at-migr'],
      ['The state portal Work in Austria says it can help with residence and work questions after a job offer, which suggests employers are used to hiring from abroad.',
        'Il portale statale Work in Austria afferma di poter aiutare con le questioni di soggiorno e lavoro dopo un’offerta, il che suggerisce che i datori siano abituati ad assumere dall’estero.', 'at-wia ours']
    ] },
    { k: 'photo', v: 'common', t: [
      ['Not required by law, and equal-treatment law forbids judging applicants by appearance, but a photo is still usual, above all in banking, insurance, public administration and marketing; less so in IT and engineering.',
        'Non è obbligatoria per legge, e la legge sulla parità di trattamento vieta di giudicare i candidati dall’aspetto, ma la foto è ancora abituale, soprattutto in banca, assicurazioni, pubblica amministrazione e marketing; meno nell’IT e nell’ingegneria.', 'at-karriere'],
      ['In a karriere.at poll of 1,004 votes, 65% said a photo on the CV makes sense and 14% were against.',
        'In un sondaggio di karriere.at con 1.004 voti, il 65% ha detto che una foto nel CV ha senso e il 14% era contrario.', 'at-karriere']
    ] },
    { k: 'cv', v: 'two', t: [
      ['A CV of two pages at most; applicants with extensive relevant experience may go up to three pages.',
        'Un CV di al massimo due pagine; chi ha molta esperienza pertinente può arrivare a tre pagine.', 'at-docs']
    ] },
    { k: 'letter', v: 'expected', t: [
      ['The cover letter (Anschreiben) is a fixed part of every application and doubles as the email text; a separate motivation letter is optional unless the ad asks for one, and BCG calls its cover letter optional and says to keep it to 1 page.',
        'La lettera di presentazione (Anschreiben) è parte fissa di ogni candidatura e fa da testo dell’email; una lettera motivazionale separata è facoltativa salvo richiesta dell’annuncio, e BCG definisce facoltativa la propria lettera e consiglia di limitarla a 1 pagina.', 'at-docs at-bcg-proc'],
      ['HR managers are split on a separate motivation letter: one says a good cover letter already conveys motivation.',
        'I responsabili HR sono divisi su una lettera motivazionale separata: uno sostiene che una buona lettera di presentazione trasmetta già la motivazione.', 'at-motiv']
    ] },
    { k: 'refs', v: 'none', t: [
      ['The application guides read list work, training and internship certificates as attachments and name no section for referees; whether a firm calls referees later is not stated.',
        'Le guide alla candidatura lette elencano come allegati i certificati di lavoro, formazione e tirocinio e non prevedono una sezione per i referenti; non è indicato se un’azienda contatti i referenti in seguito.', 'at-docs']
    ] },
    { k: 'docs', v: 'copies', t: [
      ['Employers ask for copies, uploaded with the application: Deloitte Austria wants the CV, a motivation statement and the relevant certificates (Zeugnisse); the usual attachments are training, work and internship certificates. An ENIC NARIC assessment can be added for a foreign degree.',
        'I datori chiedono copie, caricate con la candidatura: Deloitte Austria vuole CV, lettera motivazionale e i certificati pertinenti (Zeugnisse); gli allegati abituali sono certificati di formazione, di lavoro e di tirocinio. Per un titolo estero si può aggiungere una valutazione ENIC NARIC.', 'at-deloitte at-docs at-naric']
    ] },
    { k: 'salary', v: 'asked', t: [
      ['If the ad asks, give a gross annual range with "14x" to show 14 payments, at the end of the cover letter; if it does not ask, a neutral line offering to discuss salary in person is enough. Ads must state the collective-agreement minimum pay, which shows the grading.',
        'Se l’annuncio lo chiede, indica un intervallo lordo annuo con "14x" per indicare 14 mensilità, in fondo alla lettera; se non lo chiede, basta una riga neutra che offra di parlarne di persona. Gli annunci devono indicare la retribuzione minima del contratto collettivo, che mostra l’inquadramento.', 'at-sal at-finanzinfo']
    ] },
    { k: 'check', v: 'some', t: [
      ['Interview questions must relate to the job: pregnancy or family planning, religion, sexual orientation, union membership and unrelated health or financial matters are not allowed. The certificates in the file are the written check; the pages read do not describe routine background checks.',
        'Le domande al colloquio devono riguardare il lavoro: gravidanza o pianificazione familiare, religione, orientamento sessuale, iscrizione a sindacati e questioni di salute o finanziarie non pertinenti non sono ammesse. I certificati nel dossier sono il controllo scritto; le pagine lette non descrivono controlli sui precedenti di routine.', 'at-finanzinfo ours']
    ] },
    { k: 'contact', v: 'mixed', t: [
      ['Formal applications with a full file work; the careers centres and their fairs are where most students find the first internship.',
        'Le candidature formali con un dossier completo funzionano; i centri carriere e le loro fiere sono dove la maggior parte degli studenti trova il primo tirocinio.', 'at-wu ours'],
      ['Portals take the file (Deloitte’s starts with a 10-minute call from the recruiting team), and unsolicited applications are accepted, for example at voestalpine.',
        'I portali ricevono il dossier (quello di Deloitte parte con una telefonata di 10 minuti del team di selezione), e le candidature spontanee sono accettate, per esempio da voestalpine.', 'at-deloitte at-voest']
    ] },
    { k: 'abroad', v: 'workable', t: [
      ['Applying from abroad is workable: BCG takes documents in German or English, and Work in Austria lets employers find foreign professionals who register a profile. Most roles still need German and, for non-EU citizens, a permit.',
        'Candidarsi dall’estero è praticabile: BCG accetta documenti in tedesco o in inglese, e Work in Austria permette ai datori di trovare professionisti stranieri che registrano un profilo. La maggior parte dei ruoli richiede comunque il tedesco e, per i cittadini extra-UE, un permesso.', 'at-bcg-va at-wia ours']
    ] },
    { k: 'language', v: 'mostly', t: [
      ['German for most roles; English carries international headquarters and some start-ups. McKinsey’s recruiters say fluent German is mandatory for its Germany and Austria offices, and BCG tests one case in German and one in English.',
        'Il tedesco per la maggior parte dei ruoli; l’inglese regge le sedi internazionali e alcune start-up. I selezionatori di McKinsey affermano che il tedesco fluente è obbligatorio per le sedi di Germania e Austria, e BCG verifica un caso in tedesco e uno in inglese.', 'at-mck at-bcg-proc ours']
    ] }
  ],

  rows: {
    process: [
      ['Deloitte Austria: online application with CV, motivation statement and certificates; screening by recruiters; a 10-minute call; a 60-minute first interview with the hiring team (virtual or on site); an optional second interview of 60 to 90 minutes, preferably on site, that may include a job-related case study; then the offer.',
        'Deloitte Austria: candidatura online con CV, lettera motivazionale e certificati; screening dei selezionatori; una telefonata di 10 minuti; un primo colloquio di 60 minuti con il team di assunzione (virtuale o in sede); un secondo colloquio facoltativo di 60-90 minuti, preferibilmente in sede, che può includere un caso di studio legato al lavoro; poi l’offerta.', 'at-deloitte'],
      ['BCG Germany and Austria: a virtual first-round day with a 30-minute multiple-choice cognitive test and a case interview, then a second round on another day (in person for full-time entry, virtual for internships) with two cases, one in German and one in English, and two 15-minute "BCG Real Life" conversations. First-round candidates get personal feedback whether or not they advance.',
        'BCG Germania e Austria: un primo turno virtuale con un test cognitivo a scelta multipla di 30 minuti e un colloquio su caso, poi un secondo turno in un altro giorno (di persona per l’ingresso a tempo pieno, virtuale per gli stage) con due casi, uno in tedesco e uno in inglese, e due conversazioni di 15 minuti "BCG Real Life". Chi sostiene il primo turno riceve un feedback personale, che superi o no la selezione.', 'at-bcg-proc'],
      ['voestalpine’s High Performance Metals programme is an online application, a short online get-to-know-you conversation, then face-to-face interviews with the head of the division and the management team. The pages read give no overall time from application to offer.',
        'Il programma High Performance Metals di voestalpine prevede una candidatura online, una breve conversazione online di conoscenza, poi colloqui di persona con il responsabile della divisione e il management. Le pagine lette non indicano il tempo complessivo dalla candidatura all’offerta.', 'at-voest-hpm']
    ],
    offer: [
      ['Probation lasts at most 1 month and either side can end the job during it without notice or reasons (§ 19 AngG). After it, the employer’s notice is 6 weeks, rising to 2 months after the 2nd year of service, 3 months after the 5th, 4 after the 15th and 5 after the 25th; the employee’s statutory notice is 1 month to the end of a month.',
        'La prova dura al massimo 1 mese e ciascuna parte può porre fine al rapporto in quel periodo senza preavviso né motivi (§ 19 AngG). Dopo, il preavviso del datore è di 6 settimane, e sale a 2 mesi dopo il 2° anno di servizio, 3 mesi dopo il 5°, 4 dopo il 15° e 5 dopo il 25°; il preavviso legale del dipendente è di 1 mese per la fine di un mese.', 'at-angg at-notice'],
      ['Pay is quoted as a gross annual figure with 14 payments. Ads must state the collective-agreement minimum, which gives you the floor; read the contract or Dienstzettel before signing and check the grading, the hours, what an all-in clause covers and any fixed term.',
        'La retribuzione si indica come cifra lorda annua con 14 mensilità. Gli annunci devono indicare il minimo del contratto collettivo, che dà il pavimento; leggi il contratto o il Dienstzettel prima di firmare e controlla l’inquadramento, l’orario, che cosa copre una clausola all-in ed eventuali termini.', 'at-sal at-finanzinfo'],
      ['Negotiation is expected: karriere.at gives a typical raise of 10 to 20% on a job change and 5 to 10% at entry level, and advises asking for a range and justifying it by qualifications, not by personal costs.',
        'La trattativa è attesa: karriere.at indica un aumento tipico del 10-20% al cambio di lavoro e del 5-10% a inizio carriera, e consiglia di chiedere un intervallo e di giustificarlo con le qualifiche, non con spese personali.', 'at-sal']
    ],
    sponsor: [
      ['The graduate files the Red-White-Red Card application, not the employer: no labour market test for graduates of Austrian universities, a work contract and an employer’s declaration from the firm, and pay at the level of comparable Austrian junior graduates. A 12-month extension of the student permit covers the job search.',
        'È il laureato a presentare la richiesta di Red-White-Red Card, non il datore: nessun test del mercato del lavoro per i laureati di università austriache, un contratto di lavoro e una dichiarazione del datore da parte dell’azienda, e una retribuzione al livello di laureati junior austriaci comparabili. Una proroga di 12 mesi del permesso di studio copre la ricerca di lavoro.', 'at-migr'],
      ['Employers that hire foreign graduates are the large ones with international pools; the state talent portal Work in Austria offers help with residence and work questions after a job offer.',
        'I datori che assumono laureati stranieri sono i grandi con bacini internazionali; il portale statale Work in Austria offre aiuto sulle questioni di soggiorno e lavoro dopo un’offerta.', 'at-wia ours'],
      ['What an employer wants to hear is your permit status and the date it ends, early, before the contract is drafted: say whether you hold a student permit or the job-search extension and when you could start.',
        'Ciò che un datore vuole sentire è il tuo stato di permesso e la data di scadenza, presto, prima che il contratto sia redatto: di’ se hai un permesso di studio o la proroga per la ricerca di lavoro e quando potresti iniziare.', 'ours']
    ],
    where: [
      ['Official: the AMS (ams.at) with MeinAMS and the "alle jobs" search engine; the Work in Austria Talent Hub for foreign professionals; federal jobs on jobboerse.gv.at, reached from oeffentlicherdienst.gv.at.',
        'Ufficiali: l’AMS (ams.at) con MeinAMS e il motore di ricerca "alle jobs"; il Talent Hub di Work in Austria per professionisti stranieri; gli impieghi federali su jobboerse.gv.at, raggiungibile da oeffentlicherdienst.gv.at.', 'at-amsportal at-wia at-oed'],
      ['Boards and fairs: karriere.at for job ads and application guides; Career Calling in Vienna, the TECONOMY series and university career days (see Events); the WU ZBP Career Center for internships and first jobs.',
        'Portali e fiere: karriere.at per annunci e guide alla candidatura; Career Calling a Vienna, la serie TECONOMY e i career day universitari (vedi Eventi); il WU ZBP Career Center per tirocini e primi impieghi.', 'at-karriere at-fairs at-cc at-wu'],
      ['Employer pages: erstegroup.com/en/career/graduates, the voestalpine job portal, Deloitte Austria’s portal and BCG’s Visiting Associate page.',
        'Pagine dei datori: erstegroup.com/en/career/graduates, il portale di lavoro di voestalpine, il portale di Deloitte Austria e la pagina Visiting Associate di BCG.', 'at-erste at-voest at-deloitte at-bcg-va']
    ],
    mistakes: [
      ['Waiting for a trainee advert: voestalpine says its trainee programmes are offered "whenever required" and it also takes unsolicited applications after graduation, so send an Initiativbewerbung as well.',
        'Aspettare l’annuncio di un programma trainee: voestalpine afferma che i suoi programmi trainee sono offerti "quando necessario" e accetta anche candidature spontanee dopo la laurea, quindi invia anche una Initiativbewerbung.', 'at-voest'],
      ['Missing the student-job window: voestalpine’s holiday-job applications close at the end of January, with notice of openings by the end of May, so autumn is too late.',
        'Perdere la finestra dei lavori da studente: le candidature per i lavori estivi di voestalpine chiudono a fine gennaio, con comunicazione dei posti entro fine maggio, quindi l’autunno è troppo tardi.', 'at-voest'],
      ['Quoting net pay, one figure or 12 payments: give a gross annual range with 14 payments.',
        'Indicare la paga netta, una sola cifra o 12 mensilità: dai un intervallo lordo annuo con 14 mensilità.', 'at-sal'],
      ['Thinking a foreign degree must be nostrified for every job: it is for regulated professions; for other jobs an ENIC NARIC assessment is an optional addition, and for regulated ones an assessment is not enough.',
        'Pensare che un titolo estero vada sempre nostrificato: lo è per le professioni regolamentate; per gli altri lavori la valutazione ENIC NARIC è un’aggiunta facoltativa, e per quelle regolamentate una valutazione non basta.', 'at-naric at-tuw']
    ]
  },

  lang: [
    { f: 'consulting', v: 'bilingual', lv: 'fluent German', t: [
      ['McKinsey’s recruiters say fluent German is mandatory for its Germany and Austria offices; BCG’s second round has one case in German and one in English, and documents may be in either language.',
        'I selezionatori di McKinsey affermano che il tedesco fluente è obbligatorio per le sedi di Germania e Austria; il secondo turno di BCG ha un caso in tedesco e uno in inglese, e i documenti possono essere in una delle due lingue.', 'at-mck at-bcg-proc at-bcg-va']
    ] },
    { f: 'tech', v: 'bilingual', t: [
      ['German is often required even where English is the working language; juniors in Vienna should expect it to be asked.',
        'Spesso il tedesco è richiesto anche dove l’inglese è la lingua di lavoro; i junior a Vienna devono aspettarsi che venga chiesto.', 'at-devjobs']
    ] },
    { f: 'business', v: 'bilingual', lv: 'very good', t: [
      ['voestalpine’s High Performance Metals programme asks for very good German and English; its automotive-components trainee programme asks for excellent English.',
        'Il programma High Performance Metals di voestalpine chiede un ottimo tedesco e inglese; il suo programma trainee per i componenti automobilistici chiede un ottimo inglese.', 'at-voest-hpm at-voest-auto']
    ] },
    { f: 'accounting', v: 'local', t: [
      ['Deloitte Austria’s application pages are in German and name no language level or interview language; the pages read give no evidence of English-only audit hiring.',
        'Le pagine di candidatura di Deloitte Austria sono in tedesco e non indicano un livello linguistico né la lingua del colloquio; le pagine lette non mostrano assunzioni in sola lingua inglese nella revisione.', 'at-deloitte ours']
    ] }
  ],

  programmes: [
    { n: 'Group Trainee Programme', o: 'Erste Group', f: 'finance', in: null, w: null, lang: 'not stated', intl: 'unknown', ids: 'at-erste' },
    { n: 'Capital Markets Law and Primary Markets Trainee Programme', o: 'Erste Group', f: 'finance', in: null, w: null, lang: 'not stated', intl: 'unknown', ids: 'at-erste' },
    { n: 'Specialist Trainee Program (2 years, Vienna)', o: 'voestalpine High Performance Metals', f: 'business', in: null, w: null, lang: 'DE EN', intl: 'unknown', ids: 'at-voest-hpm' },
    { n: 'Holiday jobs (Ferialjob)', o: 'voestalpine', f: 'business', in: 2000, w: [1, 1], lang: 'not stated', intl: 'unknown', ids: 'at-voest' },
    { n: 'Dual degree in Intelligent Production Technology', o: 'voestalpine with FH Upper Austria', f: 'business', in: null, w: null, lang: 'not stated', intl: 'unknown', ids: 'at-voest' },
    { n: 'Visiting Associate internship', o: 'BCG Germany and Austria', f: 'consulting', in: null, w: null, lang: 'DE EN', intl: 'unknown', ids: 'at-bcg-va' }
  ],

  outcomes: [
    ['In December 2024 the AMS unemployment rate was 3.4% for people with a university, college or teacher-training degree and 8.2% across all education levels; at the end of January 2025, 31,674 graduates were registered unemployed, 18% more than a year before.',
      'A dicembre 2024 il tasso di disoccupazione AMS era del 3,4% per chi ha una laurea universitaria, di FH o di alta scuola pedagogica e dell’8,2% su tutti i livelli di istruzione; a fine gennaio 2025 erano registrati come disoccupati 31.674 laureati, il 18% in più rispetto a un anno prima.', 'at-ams'],
    ['The AMS says vacancies asking for a degree rose from about 400 to over 5,500 on average between 1993 and 2024, but still make up only 6.1% of the vacancies reported to it.',
      'L’AMS afferma che le offerte che richiedono una laurea sono salite da circa 400 a oltre 5.500 in media tra il 1993 e il 2024, ma sono ancora solo il 6,1% di quelle segnalate.', 'at-ams']
  ],

  sources: {
    'at-wu': ['employer-stated', 'WU Vienna press release, 3 May 2023: the ZBP Career Center turns 40 (about 3,000 openings a year, 250 to 300 companies)', 'https://www.wu.ac.at/en/press/press-releases/press-releases-details/detail/oesterreichs-groesstes-universitaeres-career-center-feiert-40-jaehriges-bestehen', '2026-10-09'],
    'at-rewe': ['employer-stated', 'REWE Group Austria: WU Vienna and REWE Group launch partnership, February 2026 (archived copy, page no longer online)', 'https://web.archive.org/web/20260306144647/https://rewe-group.at/en/newsroom/2026/02/promoting-talent-together-wu-vienna-and-rewe-group-launch-partnership', '2026-10-07'],
    'at-karriere': ['practitioner consensus', 'karriere.at: a photo on the CV (poll of 1,004 votes)', 'https://www.karriere.at/c/a/foto-im-lebenslauf', '2026-10-08'],
    'at-erste': ['employer-stated', 'Erste Group: careers for graduates (Group Trainee Programme; Capital Markets Law and Primary Markets Trainee Programme)', 'https://erstegroup.com/en/career/graduates', '2026-10-08'],
    'at-devjobs': ['practitioner consensus', 'devjobs.at: junior IT jobs for foreigners in Austria', 'https://en.devjobs.at/artikel/junior-it-jobs-fuer-auslaender', '2026-10-07'],
    'at-voest': ['employer-stated', 'voestalpine: jobs for students and pupils (holiday jobs, thesis places, trainee programmes, direct entry, dual study)', 'https://www.voestalpine.com/group/en/jobs/students-pupils/', '2026-10-08'],
    'at-voest-hpm': ['employer-stated', 'voestalpine High Performance Metals: Specialist Trainee Program (2 years, Vienna)', 'https://www.voestalpine.com/highperformancemetals/international/en/trainee-program/', '2026-10-08'],
    'at-voest-auto': ['employer-stated', 'voestalpine Automotive Components: international trainee programme (18 months)', 'https://www.voestalpine.com/automotivecomponents/en/Working-environment-locations/Traineeprogramm', '2026-10-08'],
    'at-bcg-va': ['employer-stated', 'BCG Germany and Austria: Visiting Associate programme (duration, eligibility, year-round applications)', 'https://careers.bcg.com/global/en/visiting-associate-germany-austria', '2026-10-08'],
    'at-bcg-proc': ['employer-stated', 'BCG Germany and Austria: application process (cognitive test, two cases in German and English)', 'https://careers.bcg.com/global/en/bewerbungsprozess-germany-austria', '2026-10-08'],
    'at-deloitte': ['employer-stated', 'Deloitte Austria: the application process (steps, interviews, documents)', 'https://www.deloitte.com/at/de/careers/deloitte-life/bewerbung-deloitte.html', '2026-10-08'],
    'at-mck': ['employer-stated', 'McKinsey recruiting lead via e-fellows (1 Aug 2025), as cited in the Admetia research library: careers/consulting.md', 'research/careers/consulting.md', '2026-09-30'],
    'at-lehre': ['data', 'WKO Statistik: Lehrlinge in Österreich 2025 (reference date 31 December 2025)', 'https://wko.at/statistik/jahrbuch/lehrlinge25.pdf', '2026-10-08'],
    'at-ams': ['data', 'AMS Spezialthema AkademikerInnen 2025 (unemployment rate by education, graduate vacancies, graduate share by sector)', 'https://forschungsnetzwerk.ams.at/dam/jcr:6602749d-ce13-4970-9a33-745ce4b2fca6/AMS-Spezialthema_AkademikerInnen_2025.pdf', '2026-10-08'],
    'at-amsportal': ['data', 'AMS Austria: for job seekers (MeinAMS, eJob-Room, "alle jobs")', 'https://www.ams.at/arbeitsuchende', '2026-10-08'],
    'at-wia': ['data', 'WORK in AUSTRIA: Talent Hub for foreign professionals', 'https://www.workinaustria.com/en/', '2026-10-08'],
    'at-oed': ['data', 'Öffentlicher Dienst (Federal Chancellery): federal employees at 31 December 2024 and the Jobbörse', 'https://www.oeffentlicherdienst.gv.at', '2026-10-08'],
    'at-fairs': ['practitioner consensus', 'karriere.at: career fairs in Austria 2026 (dates and cities)', 'https://www.karriere.at/c/a/jobmessen-termine', '2026-10-08'],
    'at-cc': ['employer-stated', 'CMS Austria: Career Calling 2026 (14 October 2026, Vienna; 100 employers; 3,600 visitors in 2025)', 'https://cms.law/de/aut/events/career-calling-2026', '2026-10-08'],
    'at-naric': ['data', 'OeAD: recognition and certifications, ENIC NARIC Austria (assessment, fees, regulated professions)', 'https://oead.at/en/study-research-teaching/coming-to-austria-information-and-services/recognition-and-certifications-enic-naric-austria', '2026-10-08'],
    'at-tuw': ['employer-stated', 'TU Wien: nostrification and appraisal (regulated professions; fee)', 'https://www.tuwien.at/en/studies/admission/nostrification-and-appraisal', '2026-10-08'],
    'at-migr': ['data', 'migration.gv.at: Red-White-Red Card for graduates of Austrian universities (no labour market test; 12-month job-search permit)', 'https://www.migration.gv.at/en/types-of-immigration/permanent-immigration/graduates/', '2026-10-08'],
    'at-docs': ['practitioner consensus', 'karriere.at: application documents (cover letter, CV, attachments, length)', 'https://www.karriere.at/c/a/bewerbungsunterlagen', '2026-10-08'],
    'at-motiv': ['practitioner consensus', 'karriere.at: is a motivation letter needed? Two HR managers’ views', 'https://www.karriere.at/c/a/brauch-ich-ein-motivationsschreiben', '2026-10-08'],
    'at-sal': ['practitioner consensus', 'karriere.at: stating a salary expectation in the application (gross annual, 14x, range)', 'https://www.karriere.at/blog/gehaltsvorstellung-bewerbung.html', '2026-10-08'],
    'at-finanzinfo': ['practitioner consensus', 'finanzinfo.at: application in Austria (photo, interview questions, probation, Dienstzettel, minimum pay in ads)', 'https://finanzinfo.at/arbeitnehmer/bewerbung/', '2026-10-08'],
    'at-angg': ['data', 'Angestelltengesetz § 19 (RIS): probation of at most one month', 'https://www.ris.bka.gv.at/GeltendeFassung.wxe?Abfrage=Bundesnormen&Gesetzesnummer=10008069&Paragraf=19', '2026-10-08'],
    'at-notice': ['practitioner consensus', 'finfo.at: notice periods and dates in Austria since October 2021', 'https://www.finfo.at/ratgeber/kuendigungsfristen/', '2026-10-08']
  }
});
