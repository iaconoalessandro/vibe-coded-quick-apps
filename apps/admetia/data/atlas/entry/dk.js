/* How hiring works: Denmark. From research/places/iberia-and-nordics.md §1 and §6,
 * with reads on 7 and 8 Oct 2026 (Workindenmark, Akademikernes A-kasse, Jobbank.dk,
 * Nordea, Novo Nordisk, SIRI/nyidanmark.dk, Øresund Direkt, The Local). */
ATLAS.addEntry({
  id: 'DK',
  checked: '2026-10-08',
  review: '2027-04-08',

  lead: [
    ['Many Danish jobs are never advertised, though Workindenmark says most positions are published. Students build their network through a part-time student job in their field during the master’s, which often turns into the first contract.',
      'Molti lavori danesi non vengono mai pubblicati, anche se Workindenmark afferma che la maggior parte delle posizioni è pubblicata. Gli studenti costruiscono la loro rete con un lavoro da studente part-time nel proprio settore durante il master, che spesso diventa il primo contratto.', 'dk-wid dk-wid-unsol dk-aka ours']
  ],

  ways: [
    { name: ['Graduate programmes (trainee programmes)', 'Programmi per laureati (trainee)'], r: 'scheme', p: 'first', basis: 'data', t: [
      ['Jobbank.dk listed 107 graduate programmes in October 2026, from Nordea, Novo Nordisk, Maersk, Carlsberg and Vestas to the Big Four and municipal and state bodies. Most last 12 to 24 months and recruit once or twice a year, with windows between November and April.',
        'Jobbank.dk elencava a ottobre 2026 107 programmi per laureati, da Nordea, Novo Nordisk, Maersk, Carlsberg e Vestas alle Big Four e a enti comunali e statali. La maggior parte dura da 12 a 24 mesi e recluta una o due volte l’anno, con finestre tra novembre e aprile.', 'dk-jb-list dk-wid-grad'],
      ['You normally need a master’s degree or equivalent; recruiters look for potential, personality and adaptability. Novo Nordisk and Nordea both ask for a master’s completed before the start and little or no work experience after it.',
        'Di solito serve un master o titolo equivalente; i selezionatori cercano potenziale, personalità e capacità di adattamento. Novo Nordisk e Nordea chiedono entrambe un master concluso prima dell’inizio e poca o nessuna esperienza lavorativa dopo.', 'dk-wid-grad dk-novo-app dk-nordea-p']
    ] },
    { name: ['Student job (studiejob) in your field', 'Lavoro da studente (studiejob) nel tuo settore'], r: 'dual', p: 'first intern', basis: 'consensus', t: [
      ['A paid part-time job of 10 to 20 hours a week alongside the degree, in a firm or a ministry; it is how most Danish students get relevant experience before graduating. Danske Bank, for one, offers student jobs mainly in Copenhagen, Aarhus and Linköping.',
        'Un lavoro part-time retribuito di 10-20 ore settimanali accanto agli studi, in un’azienda o in un ministero; è il modo in cui la maggior parte degli studenti danesi fa esperienza pertinente prima della laurea. Danske Bank, per esempio, offre lavori da studente soprattutto a Copenaghen, Aarhus e Linköping.', 'dk-danske ours'],
      ['The Big Four recruit mainly from student jobs and CBS events, so the student job is the entry for audit as well.',
        'Le Big Four reclutano soprattutto da lavori da studente ed eventi della CBS, quindi il lavoro da studente è la porta d’ingresso anche per la revisione.', 'dk-kpmg dk-cbs']
    ] },
    { name: ['Unsolicited applications and networking', 'Candidature spontanee e networking'], r: 'network', p: 'first exp', basis: 'consensus', t: [
      ['Workindenmark says many openings are never advertised and that calling the employer before sending an unsolicited application is common. In Ballisager’s review of 2020 channels, posted positions, networking and LinkedIn were the most used.',
        'Workindenmark afferma che molte posizioni non vengono mai pubblicate e che telefonare al datore di lavoro prima di inviare una candidatura spontanea è comune. Nella rassegna di Ballisager sui canali del 2020, annunci, networking e LinkedIn erano i più usati.', 'dk-wid-unsol dk-wid'],
      ['The job centres run workshops for international graduates on networking in a foreign culture and the unsolicited application; the advice from the unemployment fund is to ask for advice, not for a job, when you first write to a stranger.',
        'I centri per l’impiego organizzano workshop per laureati internazionali su come fare rete in una cultura straniera e sulla candidatura spontanea; il consiglio della cassa di disoccupazione è chiedere un parere, non un lavoro, quando si scrive per la prima volta a uno sconosciuto.', 'dk-aarhus dk-aka']
    ] },
    { name: ['Applying to posted vacancies', 'Candidarsi agli annunci pubblicati'], r: 'direct', p: 'first exp', basis: 'consensus', t: [
      ['Workindenmark says the majority of Danish positions are published, on Jobnet, Jobindex and the employers’ own sites. Jobindex alone showed about 36,500 jobs on the day it was read, 903 of them in IT.',
        'Workindenmark afferma che la maggior parte delle posizioni danesi è pubblicata, su Jobnet, Jobindex e sui siti dei datori di lavoro. Jobindex da solo mostrava circa 36.500 annunci il giorno della lettura, 903 dei quali in IT.', 'dk-wid dk-jobindex'],
      ['This is also the usual route for experienced hires: employers want candidates who can stay a minimum of 2-3 years in a job.',
        'È anche la strada abituale per chi ha esperienza: i datori di lavoro cercano candidati che restino in un posto almeno 2-3 anni.', 'dk-wid-vac']
    ] },
    { name: ['Campus events and career fairs', 'Eventi in università e fiere del lavoro'], r: 'campus', p: 'first', basis: 'consensus', t: [
      ['Danske Bank, the Big Four and McKinsey recruit at Copenhagen Business School’s graduate event for master’s students and recent graduates; Danske Bank also invites students to career events.',
        'Danske Bank, le Big Four e McKinsey reclutano all’evento per laureati della Copenhagen Business School, rivolto a studenti di master e neolaureati; Danske Bank invita inoltre gli studenti a eventi di carriera.', 'dk-cbs dk-danske']
    ] },
    { name: ['Public-sector graduate programmes', 'Programmi per laureati nel settore pubblico'], r: 'public', p: 'first', basis: 'data', t: [
      ['There is no civil-service exam. Public bodies recruit through programmes such as Copenhagen Municipality’s IT department (18 months, March and April), Banedanmark (18 months), Statens IT (24 months, June and July) and ATP (12 months).',
        'Non esiste un concorso pubblico. Gli enti pubblici reclutano con programmi come quello del dipartimento IT del Comune di Copenaghen (18 mesi, marzo e aprile), Banedanmark (18 mesi), Statens IT (24 mesi, giugno e luglio) e ATP (12 mesi).', 'dk-jb-list ours']
    ] }
  ],

  cycle: [
    ['The first year after graduating is slow, and slower for internationals: 53% of international graduates were in work in Denmark two years after their degree.',
      'Il primo anno dopo la laurea è lento, e più lento per gli internazionali: il 53% dei laureati internazionali lavorava in Danimarca due anni dopo il titolo.', 'dk-iberia'],
    ['Programmes recruit in a calendar: Novo Nordisk in November and December, Carlsberg, PFA and Vestas in December and January, Maersk in January and February, Nordea in February, municipal and state programmes in March to July. Most start in September; Maersk starts in July.',
      'I programmi reclutano secondo un calendario: Novo Nordisk a novembre e dicembre, Carlsberg, PFA e Vestas a dicembre e gennaio, Maersk a gennaio e febbraio, Nordea a febbraio, i programmi comunali e statali da marzo a luglio. La maggior parte inizia a settembre; Maersk inizia a luglio.', 'dk-jb-list'],
    ['Outside the programmes there is no fixed season: posted vacancies run all year, and the employer’s horizon is people who can stay two to three years.',
      'Fuori dai programmi non c’è una stagione fissa: gli annunci sono pubblicati tutto l’anno, e l’orizzonte del datore di lavoro è chi può restare due o tre anni.', 'dk-wid-vac dk-wid']
  ],

  schools: [
    ['Stay rates differ by school: of international master’s graduates, 69% of DTU’s, 63% of the IT University’s, 46% of CBS’s and 45% of SDU Odense’s were employed in Denmark two years after graduating, against 53% on average.',
      'I tassi di permanenza variano per università: tra i laureati magistrali internazionali, il 69% di quelli della DTU, il 63% dell’IT University, il 46% della CBS e il 45% della SDU Odense lavorava in Danimarca due anni dopo la laurea, contro il 53% di media.', 'dk-iberia'],
    ['Employers recruit visibly from CBS, DTU and Aarhus, but the unemployment fund warns that employers may not know a foreign university, so describe what you can do and which tools you have used rather than rely on the name.',
      'I datori di lavoro reclutano in modo visibile da CBS, DTU e Aarhus, ma la cassa di disoccupazione avverte che i datori di lavoro possono non conoscere un’università straniera, quindi descrivi cosa sai fare e quali strumenti hai usato invece di affidarti al nome.', 'dk-cbs dk-aka'],
    ['If your grading scale or university is unfamiliar in Denmark, add a short explanation to the CV.',
      'Se la tua scala di voti o la tua università non sono note in Danimarca, aggiungi una breve spiegazione al CV.', 'dk-jb-cv']
  ],

  events: [
    ['Copenhagen Business School runs a graduate event for master’s students and recent graduates, with Danske Bank, the Big Four and McKinsey among the participants.',
      'La Copenhagen Business School organizza un evento per laureati rivolto a studenti di master e neolaureati, con Danske Bank, le Big Four e McKinsey tra i partecipanti.', 'dk-cbs'],
    ['Danske Bank sends invitations to career events to students who sign up on its careers page.',
      'Danske Bank invia inviti a eventi di carriera agli studenti che si iscrivono dalla sua pagina carriere.', 'dk-danske'],
    ['Workindenmark keeps a job-fair calendar; its own online event Live & Work on Lolland is on 11 November 2026, and fairs abroad such as Megarekry (Vantaa, 29 October 2026) are listed.',
      'Workindenmark tiene un calendario delle fiere del lavoro; il suo evento online Live & Work on Lolland si tiene l’11 novembre 2026, e sono elencate anche fiere all’estero come Megarekry (Vantaa, 29 ottobre 2026).', 'dk-wid-fairs']
  ],

  fields: [
    { f: 'finance', t: [
      ['Danske Bank and Nordea run graduate programmes in Copenhagen; Nordea’s 1.5-year programme takes applications in February. Danske Bank, the Big Four and McKinsey recruit at Copenhagen Business School’s graduate events.',
        'Danske Bank e Nordea hanno programmi per laureati a Copenaghen; quello di 1,5 anni di Nordea raccoglie candidature a febbraio. Danske Bank, le Big Four e McKinsey reclutano agli eventi per laureati della Copenhagen Business School.', 'dk-iberia dk-cbs'],
      ['Jyske Bank, Nykredit, PFA and ATP are among the other financial employers with graduate programmes on Jobbank.dk.',
        'Jyske Bank, Nykredit, PFA e ATP sono tra gli altri datori di lavoro finanziari con programmi per laureati su Jobbank.dk.', 'dk-jb-list']
    ] },
    { f: 'accounting', t: [
      ['The Big Four recruit mainly from student jobs and CBS events; KPMG Denmark, with over 1,000 staff, runs a “Challenger Academy” instead of a classic graduate scheme.',
        'Le Big Four reclutano soprattutto da lavori da studente ed eventi della CBS; KPMG Danimarca, con oltre 1.000 dipendenti, ha una “Challenger Academy” invece di un classico programma per laureati.', 'dk-kpmg dk-cbs'],
      ['Audit trainee programmes of 24 months run at PwC, RSM, Grant Thornton, Martinsen and Beierholm, mostly with rolling applications and a September start.',
        'Programmi di trainee in revisione di 24 mesi sono offerti da PwC, RSM, Grant Thornton, Martinsen e Beierholm, per lo più con candidature continue e inizio a settembre.', 'dk-jb-list']
    ] },
    { f: 'consulting', t: [
      ['Bain recruits Associate Consultants in Copenhagen on a rolling basis, and Accenture’s 24-month talent programme takes applications in February and March for a September start.',
        'Bain recluta Associate Consultant a Copenaghen in modo continuo, e il programma per talenti di Accenture, di 24 mesi, raccoglie candidature a febbraio e marzo per un inizio a settembre.', 'dk-jb-list']
    ] },
    { f: 'business', t: [
      ['Maersk tops business students’ preferences and Novo Nordisk engineering and science students’; both, with Ørsted, Vestas and Danfoss, run graduate programmes and recruit heavily from CBS and DTU.',
        'Maersk è in cima alle preferenze degli studenti di economia e Novo Nordisk di quelli di ingegneria e scienze; entrambe, con Ørsted, Vestas e Danfoss, hanno programmi per laureati e reclutano molto da CBS e DTU.', 'dk-universum dk-cbs']
    ] },
    { f: 'public', t: [
      ['The public sector recruits graduates into programmes of 12 to 24 months at Copenhagen Municipality, Banedanmark, Statens IT and ATP; the 2026 Ørsted listing, by contrast, shows no intake.',
        'Il settore pubblico recluta i laureati in programmi di 12-24 mesi presso il Comune di Copenaghen, Banedanmark, Statens IT e ATP; l’elenco di Ørsted per il 2026, al contrario, non mostra alcun ingresso.', 'dk-jb-list']
    ] },
    { f: 'tech', t: [
      ['IT graduates of DTU, the IT University and Aarhus move into Netcompany and other Danish IT consultancies, Novo Nordisk, Lego and the banks, usually after a student job in the same firm.',
        'I laureati IT di DTU, IT University e Aarhus finiscono in Netcompany e in altre società di consulenza IT danesi, in Novo Nordisk, Lego e nelle banche, di solito dopo un lavoro da studente nella stessa azienda.', 'dk-universum ours'],
      ['Graduate programmes in IT include Capgemini IGNITE, NTT DATA, KMD, CGI, Atea and Statens IT.',
        'Tra i programmi per laureati in IT ci sono Capgemini IGNITE, NTT DATA, KMD, CGI, Atea e Statens IT.', 'dk-jb-list']
    ] }
  ],

  customs: [
    { k: 'season', v: 'cyclical', t: [
      ['Graduate programmes run on a calendar, mostly closing between December and April for a September start, while vacancies outside them are posted all year.',
        'I programmi per laureati seguono un calendario, per lo più chiudono tra dicembre e aprile per un inizio a settembre, mentre gli annunci fuori da essi sono pubblicati tutto l’anno.', 'dk-jb-list dk-wid-grad']
    ] },
    { k: 'masters', v: 'expected', t: [
      ['Graduate programmes normally require a master’s degree or equivalent, and Novo Nordisk and Nordea ask for it to be completed before the start.',
        'I programmi per laureati richiedono di norma un master o un titolo equivalente, e Novo Nordisk e Nordea chiedono che sia concluso prima dell’inizio.', 'dk-wid-grad dk-novo-app dk-nordea-p']
    ] },
    { k: 'degrees', v: 'regulated', t: [
      ['Only regulated professions need recognition: the Danish Agency for Higher Education and Science assesses foreign education, mostly free and in about two weeks to two months, but the assessment only “may be helpful” for a job. Professions such as medical doctor need a Danish authorisation first.',
        'Solo le professioni regolamentate richiedono un riconoscimento: l’Agenzia danese per l’istruzione superiore e la scienza valuta i titoli esteri, per lo più gratuitamente e in circa due settimane-due mesi, ma la valutazione può solo essere utile per un lavoro. Professioni come quella di medico richiedono prima un’autorizzazione danese.', 'dk-wid-assess dk-siri-ft']
    ] },
    { k: 'brand', v: 'some', t: [
      ['The big programmes recruit visibly at CBS and DTU, but the unemployment fund tells graduates to explain their skills because employers may not know a university.',
        'I grandi programmi reclutano in modo visibile alla CBS e alla DTU, ma la cassa di disoccupazione consiglia ai laureati di spiegare le proprie competenze perché i datori di lavoro possono non conoscere un’università.', 'dk-cbs dk-aka']
    ] },
    { k: 'dual', v: 'some', t: [
      ['The student job is the Danish version of working while studying, held in a firm alongside the master’s; formal dual-study degrees are not how business or computing graduates enter.',
        'Il lavoro da studente è la versione danese del lavorare mentre si studia, svolto in un’azienda accanto al master; i corsi duali formali non sono la via d’ingresso dei laureati in economia o informatica.', 'dk-danske ours']
    ] },
    { k: 'publicw', v: 'mid', t: [
      ['Municipalities, rail, pension and state IT bodies run graduate programmes of 12 to 24 months, but the big business-graduate programmes are in banks and industrial groups.',
        'Comuni, ferrovie, enti pensionistici e organismi statali di IT hanno programmi per laureati di 12-24 mesi, ma i grandi programmi per laureati in economia sono nelle banche e nei gruppi industriali.', 'dk-jb-list ours']
    ] },
    { k: 'sponsorr', v: 'some', t: [
      ['The Fast-track scheme works only for employers certified by SIRI, while the Pay Limit route needs no certification but a salary of at least DKK 552,000 a year. Novo Nordisk hires internationals into tracks employed in a named country. See Visas for the rules.',
        'Lo schema Fast-track funziona solo per datori di lavoro certificati dal SIRI, mentre la via Pay Limit non richiede certificazione ma uno stipendio di almeno 552.000 DKK l’anno. Novo Nordisk assume internazionali in percorsi con contratto in un paese indicato. Per le regole vedi Visti.', 'dk-siri-ft dk-siri-pay dk-novo-app']
    ] },
    { k: 'photo', v: 'common', t: [
      ['Workindenmark recommends a professional picture and a short targeted profile; a tailored cover letter is read closely. Jobbank.dk says Danish CVs often include a photo, but it is optional.',
        'Workindenmark consiglia una foto professionale e un breve profilo mirato; una lettera di presentazione su misura viene letta con attenzione. Jobbank.dk afferma che i CV danesi spesso includono una foto, ma è facoltativa.', 'dk-wid dk-jb-cv']
    ] },
    { k: 'cv', v: 'two', t: [
      ['A Danish CV is usually no longer than two A4 pages, in reverse chronological order, with a profile text of 5-8 lines on how you match the job.',
        'Un CV danese non supera di solito due pagine A4, in ordine cronologico inverso, con un testo di profilo di 5-8 righe su come ti adatti al lavoro.', 'dk-ab dk-wid']
    ] },
    { k: 'letter', v: 'expected', t: [
      ['The application is a CV and a cover letter of no more than one A4 page, written for each position; Workindenmark says the letter remains important even though the CV is read first.',
        'La candidatura è un CV e una lettera di presentazione di non più di una pagina A4, scritta per ogni posizione; Workindenmark afferma che la lettera resta importante anche se il CV viene letto per primo.', 'dk-wid-cover dk-wid']
    ] },
    { k: 'refs', v: 'later', t: [
      ['Employers expect references on request; do not put full referee contact details in the CV unless asked.',
        'I datori di lavoro si aspettano referenze su richiesta; non inserire i contatti completi dei referenti nel CV se non richiesti.', 'dk-jb-cv']
    ] },
    { k: 'docs', v: 'copies', t: [
      ['Recent graduates enclose copies of their diplomas; Novo Nordisk asks for the latest academic records in the application. Experienced candidates send them only if the ad asks.',
        'I neolaureati allegano copie dei diplomi; Novo Nordisk chiede nella candidatura gli ultimi risultati accademici. Chi ha esperienza li invia solo se l’annuncio lo chiede.', 'dk-wid-grad2 dk-novo-app']
    ] },
    { k: 'salary', v: 'later', t: [
      ['The Workindenmark pages on the CV and cover letter do not ask for a salary figure. Where no collective agreement applies, terms are negotiated directly with the employer, so the number comes up in the offer talk.',
        'Le pagine di Workindenmark su CV e lettera di presentazione non chiedono una cifra di stipendio. Dove non si applica un contratto collettivo, le condizioni si negoziano direttamente con il datore di lavoro, quindi la cifra emerge nella trattativa sull’offerta.', 'dk-wid-terms ours']
    ] },
    { k: 'check', v: 'some', t: [
      ['Danish recruiters often check LinkedIn, so keep it consistent with the CV; referees are called on request, and some employers use AI-supported screening of applications.',
        'I selezionatori danesi controllano spesso LinkedIn, quindi mantienilo coerente con il CV; i referenti vengono contattati su richiesta, e alcuni datori di lavoro usano uno screening delle candidature assistito dall’IA.', 'dk-jb-cv']
    ] },
    { k: 'contact', v: 'mixed', t: [
      ['Workindenmark says many openings are never advertised but the majority are published, so both a posted application and a call to a contact work. Ask people for advice before asking for a job: classmates, alumni and people already in the field.',
        'Workindenmark afferma che molte posizioni non vengono pubblicate ma la maggior parte lo è, quindi funzionano sia una candidatura a un annuncio sia una telefonata a un contatto. Chiedi consigli alle persone prima di chiedere un lavoro: compagni di corso, ex studenti e chi lavora già nel settore.', 'dk-wid dk-wid-unsol dk-aka']
    ] },
    { k: 'abroad', v: 'workable', t: [
      ['Workindenmark helps jobseekers abroad through EURES, a Europass CV exported to the EURES portal and online or European job fairs; Novo Nordisk’s programme asks only for English and for the ability to relocate internationally.',
        'Workindenmark aiuta chi cerca lavoro all’estero tramite EURES, un CV Europass esportato nel portale EURES e fiere del lavoro online o europee; il programma di Novo Nordisk chiede solo l’inglese e la capacità di trasferirsi a livello internazionale.', 'dk-wid-vis dk-wid-fairs dk-novo-app']
    ] },
    { k: 'language', v: 'mostly', t: [
      ['Danish for most local firms and the public sector; English in global companies such as Novo Nordisk, whose corporate language is English. Workindenmark says most positions do not require Danish, but some do.',
        'Il danese per la maggior parte delle aziende locali e il settore pubblico; l’inglese nelle aziende globali come Novo Nordisk, la cui lingua aziendale è l’inglese. Workindenmark afferma che la maggior parte delle posizioni non richiede il danese, ma alcune sì.', 'dk-iberia dk-novo-app dk-wid-sectors ours']
    ] }
  ],

  rows: {
    process: [
      ['Programmes run in stages: Nordea asks for an online assessment test and then interviews in March and April; Novo Nordisk asks for a CV, academic records and a cover letter, then a first interview, a virtual Graduate Recruitment Centre built on a business case, and a final interview.',
        'I programmi procedono per fasi: Nordea chiede un test di valutazione online e poi colloqui a marzo e aprile; Novo Nordisk chiede un CV, i risultati accademici e una lettera di presentazione, poi un primo colloquio, un Graduate Recruitment Centre virtuale basato su un business case e un colloquio finale.', 'dk-nordea-p dk-novo-app'],
      ['Ordinary vacancies mean several rounds, from a recruiter to a final interview with the manager, and practical and personal tests are widely used. Online interviews have increased since the pandemic.',
        'Per gli annunci ordinari ci sono più colloqui, da un selezionatore a un colloquio finale con il responsabile, e i test pratici e personali sono molto usati. I colloqui online sono aumentati dopo la pandemia.', 'dk-wid-int dk-wid'],
      ['Interviews are informal and a two-way conversation between equals; dress is smart/casual, with business attire mainly for finance and management roles. Be ready at the scheduled time and not too early, and prepare questions to ask.',
        'I colloqui sono informali e una conversazione alla pari; l’abbigliamento è smart/casual, con abito formale soprattutto per ruoli finanziari e dirigenziali. Sii pronto all’ora fissata e non troppo in anticipo, e prepara domande da fare.', 'dk-wid-int'],
      ['The language of the ad sets the language of the application, and with an ad in English you can write in English if you are not fluent in Danish; Novo Nordisk’s programme runs in English.',
        'La lingua dell’annuncio stabilisce la lingua della candidatura, e con un annuncio in inglese puoi scrivere in inglese se non parli bene il danese; il programma di Novo Nordisk si svolge in inglese.', 'dk-ab dk-novo-app']
    ],
    offer: [
      ['An employee working at least one month and more than eight hours a week is entitled to a written employment contract, which refers to the collective agreement where one applies.',
        'Un dipendente che lavora almeno un mese e più di otto ore a settimana ha diritto a un contratto di lavoro scritto, che rinvia al contratto collettivo dove ne esiste uno.', 'dk-wid-contract'],
      ['There is no statutory minimum wage: collective agreements between unions and employers set the general terms and minimum pay, and where none applies you negotiate your terms directly.',
        'Non esiste un salario minimo legale: i contratti collettivi tra sindacati e datori di lavoro fissano le condizioni generali e il minimo salariale, e dove non ne vale nessuno si negoziano direttamente le condizioni.', 'dk-wid-terms dk-wid-labour'],
      ['Graduate programmes are salaried, full-time, fixed-term jobs of typically 18 to 24 months with rotation between departments; a standard working week is 37 hours.',
        'I programmi per laureati sono lavori retribuiti, a tempo pieno e a termine di solito di 18-24 mesi, con rotazione tra i reparti; la settimana lavorativa standard è di 37 ore.', 'dk-wid-grad dk-wid-culture'],
      ['Probation, notice periods and any extra month of pay are set by the contract and the collective agreement; read them before signing.',
        'Periodo di prova, preavviso ed eventuali mensilità aggiuntive sono fissati dal contratto e dal contratto collettivo; leggili prima di firmare.', 'ours']
    ],
    sponsor: [
      ['Under the Fast-track scheme the employer must be certified by SIRI, the job must pay at least DKK 552,000 a year on the Pay Limit track or DKK 446,000 on the Supplementary track, and the employer applies online with your power of attorney. Ask a prospective employer whether it is certified.',
        'Nello schema Fast-track il datore di lavoro deve essere certificato dal SIRI, il lavoro deve pagare almeno 552.000 DKK l’anno nella via Pay Limit o 446.000 DKK nella via Supplementary, e il datore presenta la domanda online con la tua procura. Chiedi a un potenziale datore di lavoro se è certificato.', 'dk-siri-ft'],
      ['The Pay Limit scheme needs no specific education or field, only an offer of at least DKK 552,000 a year; processing normally takes about a month and up to three if more information is needed, so raise the permit at the offer stage.',
        'Lo schema Pay Limit non richiede uno specifico titolo o settore, solo un’offerta di almeno 552.000 DKK l’anno; l’elaborazione richiede normalmente circa un mese e fino a tre se servono più informazioni, quindi affronta il permesso al momento dell’offerta.', 'dk-siri-pay ours'],
      ['The Supplementary Pay Limit track needs the job posted on Jobnet and EURES for at least two weeks, so the employer runs a short advertisement before it can hire you on that track.',
        'La via Supplementary Pay Limit richiede che il posto sia pubblicato su Jobnet ed EURES per almeno due settimane, quindi il datore di lavoro fa un breve annuncio prima di poterti assumere con quella via.', 'dk-siri-ft'],
      ['Novo Nordisk’s International Operations tracks employ you in a named hiring country and its global tracks are employed by the headquarters, and it asks for full international mobility; the page does not mention permits.',
        'I percorsi International Operations di Novo Nordisk ti assumono in un paese indicato e i percorsi globali sono assunti dalla sede centrale, e viene richiesta piena mobilità internazionale; la pagina non parla di permessi.', 'dk-novo-app']
    ],
    where: [
      ['Posted vacancies: Workindenmark’s Jobnet portal, Jobindex (with an English version) and the employers’ own career pages. Jobindex showed about 36,500 jobs when read.',
        'Annunci: il portale Jobnet di Workindenmark, Jobindex (con una versione in inglese) e le pagine carriere dei datori di lavoro. Jobindex mostrava circa 36.500 annunci quando è stato letto.', 'dk-wid-vac dk-jobindex'],
      ['Graduate programmes: Jobbank.dk lists 107 with duration, application months and start, and Workindenmark’s graduate page explains the format. Danske Bank directs applicants to its own careers site.',
        'Programmi per laureati: Jobbank.dk ne elenca 107 con durata, mesi di candidatura e inizio, e la pagina di Workindenmark spiega il formato. Danske Bank rimanda i candidati al proprio sito carriere.', 'dk-jb-list dk-wid-grad dk-danske'],
      ['English-language jobs: jobsinenglish.dk scans Danish employers’ ads; in 2024 DTU (244), Grundfos (112), MAN Energy Solutions (92), Terma (60) and Topsoe (55) advertised the most English-only jobs, though it misses Novo Nordisk, Maersk and Lego.',
        'Lavori in inglese: jobsinenglish.dk scansiona gli annunci dei datori di lavoro danesi; nel 2024 DTU (244), Grundfos (112), MAN Energy Solutions (92), Terma (60) e Topsoe (55) hanno pubblicato più annunci solo in inglese, ma non rileva Novo Nordisk, Maersk e Lego.', 'dk-local'],
      ['University and fairs: Copenhagen Business School’s graduate event, Danske Bank’s career events and Workindenmark’s job-fair calendar; to be found by recruiters abroad, export a Europass CV to the EURES portal.',
        'Università e fiere: l’evento per laureati della Copenhagen Business School, gli eventi di carriera di Danske Bank e il calendario delle fiere di Workindenmark; per essere trovati dai selezionatori all’estero, esporta un CV Europass nel portale EURES.', 'dk-cbs dk-danske dk-wid-fairs dk-wid-vis']
    ],
    mistakes: [
      ['Missing the programme window: the main intakes close between December and April, and Novo Nordisk’s postings were visible only from 14 November to 5 December 2025.',
        'Perdere la finestra dei programmi: le principali selezioni chiudono tra dicembre e aprile, e gli annunci di Novo Nordisk erano visibili solo dal 14 novembre al 5 dicembre 2025.', 'dk-jb-list dk-novo-app'],
      ['Sending a generic or long cover letter: it should be a single A4 page, written for the position, and say why this job and this company.',
        'Mandare una lettera di presentazione generica o lunga: deve essere di una sola pagina A4, scritta per la posizione, e dire perché questo lavoro e questa azienda.', 'dk-wid-cover'],
      ['Asking a stranger for a job in the first message: the advice is to ask for advice first, and to phone before an unsolicited application.',
        'Chiedere un lavoro a uno sconosciuto già nel primo messaggio: il consiglio è chiedere prima un parere, e telefonare prima di una candidatura spontanea.', 'dk-aka dk-wid-unsol'],
      ['Putting sensitive personal data on the CV, such as the CPR or passport number, or treating Danske Bank as having a classic graduate programme; its careers page names none.',
        'Inserire dati personali sensibili nel CV, come il numero CPR o del passaporto, o ritenere che Danske Bank abbia un classico programma per laureati; la sua pagina carriere non ne indica alcuno.', 'dk-jb-cv dk-danske'],
      ['Arriving at an interview too early, or with technical problems for an online one: both count against you.',
        'Arrivare troppo in anticipo a un colloquio, o con problemi tecnici a uno online: entrambi giocano contro di te.', 'dk-wid-int dk-wid']
    ]
  },

  lang: [
    { f: 'finance', v: 'english', lv: 'C1', t: [
      ['Nordea’s graduate programme asks for excellent English and names no Danish requirement; no certificate is named, the online test and interviews are the evidence.',
        'Il programma per laureati di Nordea chiede un ottimo inglese e non indica alcun requisito di danese; non è indicato alcun certificato, la prova sono il test online e i colloqui.', 'dk-nordea-p']
    ] },
    { f: 'business', v: 'bilingual', lv: 'C1', t: [
      ['Novo Nordisk’s corporate language is English and it asks for fluent written and spoken English; some International Operations tracks add local-language requirements, and mid-sized Danish firms often want Danish at junior and middle levels.',
        'La lingua aziendale di Novo Nordisk è l’inglese e richiede un inglese scritto e parlato fluente; alcuni percorsi International Operations aggiungono requisiti di lingua locale, e le aziende danesi di medie dimensioni spesso vogliono il danese ai livelli junior e intermedi.', 'dk-novo-app dk-iberia']
    ] },
    { f: 'tech', v: 'bilingual', lv: 'B2', t: [
      ['Many engineering and technology employers advertise English-only jobs (DTU, Grundfos, MAN Energy Solutions, Terma, Topsoe), and the retail groups Salling, Bestseller and JYSK also appear among the top 20, probably for IT.',
        'Molti datori di lavoro di ingegneria e tecnologia pubblicano annunci solo in inglese (DTU, Grundfos, MAN Energy Solutions, Terma, Topsoe), e anche i gruppi della distribuzione Salling, Bestseller e JYSK compaiono tra i primi 20, probabilmente per l’IT.', 'dk-local']
    ] },
    { f: 'public', v: 'local', lv: 'C1', t: [
      ['The public programmes on Jobbank.dk do not state a language requirement; Workindenmark says some jobs need Danish, and public bodies work in Danish, so expect to need it.',
        'I programmi pubblici su Jobbank.dk non indicano un requisito linguistico; Workindenmark afferma che alcuni lavori richiedono il danese, e gli enti pubblici lavorano in danese, quindi aspettati di averne bisogno.', 'dk-jb-list dk-wid-sectors ours']
    ] }
  ],

  programmes: [
    { n: 'Nordea Graduate Programme', o: 'Nordea', f: 'finance', in: null, w: [2, 2], lang: 'EN', intl: 'unknown', ids: 'dk-nordea-p' },
    { n: 'Novo Nordisk Graduate Programme', o: 'Novo Nordisk', f: 'business', in: null, w: [11, 12], lang: 'EN', intl: 'yes', ids: 'dk-novo-app dk-jb-list' },
    { n: 'Regional Management Trainee Program', o: 'Maersk', f: 'business', in: null, w: [1, 2], lang: 'n/s', intl: 'unknown', ids: 'dk-maersk-jb' },
    { n: 'Carlsberg Danmark Graduate Program', o: 'Carlsberg', f: 'business', in: null, w: [12, 1], lang: 'n/s', intl: 'unknown', ids: 'dk-jb-list' },
    { n: 'Vestas Global Graduate Programme', o: 'Vestas', f: 'business', in: null, w: [12, 1], lang: 'n/s', intl: 'unknown', ids: 'dk-jb-list' },
    { n: 'PFA Graduate Program', o: 'PFA', f: 'finance', in: null, w: [12, 1], lang: 'n/s', intl: 'unknown', ids: 'dk-jb-list' },
    { n: 'Nykredit Graduate Program', o: 'Nykredit', f: 'finance', in: null, w: [1, 2], lang: 'n/s', intl: 'unknown', ids: 'dk-jb-list' },
    { n: 'KPMG Challenger Academy Graduate Program', o: 'KPMG Denmark', f: 'accounting', in: null, w: null, lang: 'n/s', intl: 'unknown', ids: 'dk-jb-list dk-kpmg' },
    { n: 'Accenture Talent Programs', o: 'Accenture', f: 'consulting', in: null, w: [2, 3], lang: 'n/s', intl: 'unknown', ids: 'dk-jb-list' },
    { n: 'NTT DATA Business Solutions Graduate Program', o: 'NTT DATA', f: 'tech', in: null, w: [12, 1], lang: 'n/s', intl: 'unknown', ids: 'dk-jb-list' },
    { n: 'Københavns Kommune, Koncern IT', o: 'Copenhagen Municipality', f: 'public', in: null, w: [3, 4], lang: 'n/s', intl: 'unknown', ids: 'dk-jb-list' },
    { n: 'Statens IT Graduate Program', o: 'Statens IT', f: 'tech', in: null, w: [6, 7], lang: 'n/s', intl: 'unknown', ids: 'dk-jb-list' }
  ],

  outcomes: [
    ['The 53% of international master’s graduates working in Denmark two years out is an average dominated by technical and health fields; business graduates are below it (CBS 46%), and the Danish graduates themselves spent on average 23.3% of their first twelve months unemployed.',
      'Il 53% dei laureati magistrali internazionali che lavora in Danimarca due anni dopo è una media dominata da settori tecnici e sanitari; i laureati in economia sono sotto (CBS 46%), e gli stessi laureati danesi hanno trascorso in media il 23,3% dei primi dodici mesi in disoccupazione.', 'dk-iberia'],
    ['No source read gives a return-offer or conversion rate for Danish student jobs or programmes, and none gives time to first job for internationals.',
      'Nessuna fonte letta indica un tasso di conferma dopo il tirocinio o la conversione per i lavori da studente o i programmi danesi, e nessuna indica il tempo al primo lavoro per gli internazionali.', 'ours']
  ],

  sources: {
    'dk-iberia': ['data', 'Admetia research library: places/iberia-and-nordics.md §1 and §6 (DI Analyse 2026; Novo Nordisk careers page)', 'research/places/iberia-and-nordics.md', '2026-10-02'],
    'dk-aka': ['practitioner consensus', 'Akademikernes A-kasse: you’ve just graduated, now what? Tips for applying for jobs in Denmark', 'https://www.aka.dk/en/working-in-denmark/youve-just-graduated-now-what-top-tips-for-applying-for-jobs-in-denmark/', '2026-10-07'],
    'dk-aarhus': ['employer-stated', 'Jobcenter Aarhus: workshop in English on networking and unsolicited job search for international graduates', 'https://aarhus.dk/media/oogpbumr/workshop-in-english-networking-and-unsolicited-job-search-for-international-graduates.pdf', '2026-10-07'],
    'dk-wid': ['practitioner consensus', 'Workindenmark: how do Danish companies recruit for their vacant positions', 'https://workindenmark.dk/job-search-in-denmark/our-best-job-search-tips/how-do-danish-companies-recruit-for-their-vacant-positions', '2026-10-08'],
    'dk-wid-unsol': ['practitioner consensus', 'Workindenmark: unsolicited application', 'https://workindenmark.dk/job-search-in-denmark/unsolicited-application', '2026-10-08'],
    'dk-wid-cover': ['practitioner consensus', 'Workindenmark: your cover letter', 'https://workindenmark.dk/job-search-in-denmark/your-cover-letter', '2026-10-08'],
    'dk-wid-grad': ['practitioner consensus', 'Workindenmark: graduate programmes', 'https://workindenmark.dk/job-search-in-denmark/graduate-programmes', '2026-10-08'],
    'dk-wid-grad2': ['practitioner consensus', 'Workindenmark: job search in Denmark (diplomas, applications sent electronically)', 'https://workindenmark.dk/job-search-in-denmark', '2026-10-08'],
    'dk-wid-int': ['practitioner consensus', 'Workindenmark: norms and rules for the job interview', 'https://workindenmark.dk/job-search-in-denmark/preparing-for-the-interview/norms-and-rules', '2026-10-08'],
    'dk-wid-vac': ['practitioner consensus', 'Workindenmark: finding vacancies in Denmark', 'https://workindenmark.dk/getting-started/finding-vacancies-in-denmark', '2026-10-08'],
    'dk-wid-vis': ['practitioner consensus', 'Workindenmark: become visible to recruiters (Europass CV and EURES)', 'https://workindenmark.dk/getting-started/become-visible-to-recruiters', '2026-10-08'],
    'dk-wid-assess': ['data', 'Workindenmark: assessment of your education (Danish Agency for Higher Education and Science)', 'https://workindenmark.dk/getting-started/work-permit-authorisation-assessment/assessment-of-your-education', '2026-10-08'],
    'dk-wid-terms': ['practitioner consensus', 'Workindenmark: terms of employment', 'https://workindenmark.dk/working-in-denmark/terms-of-employment', '2026-10-08'],
    'dk-wid-contract': ['practitioner consensus', 'Workindenmark: employment contract', 'https://workindenmark.dk/working-in-denmark/terms-of-employment/employment-contract', '2026-10-08'],
    'dk-wid-labour': ['practitioner consensus', 'Workindenmark: the Danish labour market', 'https://workindenmark.dk/working-in-denmark/the-danish-labour-market', '2026-10-08'],
    'dk-wid-culture': ['practitioner consensus', 'Workindenmark: workplace culture in Denmark', 'https://workindenmark.dk/working-in-denmark/workplace-culture-in-denmark', '2026-10-08'],
    'dk-wid-sectors': ['practitioner consensus', 'Workindenmark: sectors with high demand (updated 21 Sep 2026)', 'https://workindenmark.dk/working-in-denmark/sectors-with-high-demand', '2026-10-08'],
    'dk-wid-fairs': ['practitioner consensus', 'Workindenmark: job fair calendar', 'https://www.workindenmark.dk/for-employers/job-fair-calendar', '2026-10-08'],
    'dk-jb-cv': ['practitioner consensus', 'Jobbank.dk: Mastering the CV, an example', 'https://jobbank.dk/en/artikler/201341/mastering-the-cv-an-example/', '2026-10-08'],
    'dk-jb-list': ['employer-stated', 'Jobbank.dk: graduate programmes (107 listings posted by employers, read 8 Oct 2026)', 'https://jobbank.dk/en/graduateprogrammer', '2026-10-08'],
    'dk-maersk-jb': ['employer-stated', 'Jobbank.dk: Maersk Regional Management Trainee Program listing', 'https://jobbank.dk/en/graduateprogrammer/32529/maersk-group-ap-moller-maersk', '2026-10-08'],
    'dk-ab': ['practitioner consensus', 'Øresund Direkt: how to write a job application in Denmark', 'https://oresunddirekt.se/en/find-a-job-in-denmark/start-working-in-denmark/how-to-write-a-job-application-in-denmark/', '2026-10-08'],
    'dk-nordea-p': ['employer-stated', 'Nordea: Graduate Programme (2026 round: 9–28 February, online test, interviews March–April)', 'https://www.nordea.com/en/careers/nordea-graduate-programme', '2026-10-08'],
    'dk-novo-app': ['employer-stated', 'Novo Nordisk: graduate programme application process', 'https://www.novonordisk.com/careers/early-career-programmes/graduate/application-process.html', '2026-10-08'],
    'dk-danske': ['employer-stated', 'Danske Bank: students and graduates', 'https://www.danskebank.com/careers/students-and-graduates', '2026-10-08'],
    'dk-siri-ft': ['data', 'SIRI / nyidanmark.dk: Fast-track scheme', 'https://www.nyidanmark.dk/en-GB/You-want-to-apply/Work/Fast-track', '2026-10-08'],
    'dk-siri-pay': ['data', 'SIRI / nyidanmark.dk: Pay Limit scheme', 'https://www.nyidanmark.dk/en-GB/You-want-to-apply/Work/Pay-limit-scheme', '2026-10-08'],
    'dk-jobindex': ['employer-stated', 'Jobindex.dk home page (about 36,500 jobs on 8 Oct 2026)', 'https://www.jobindex.dk/', '2026-10-08'],
    'dk-local': ['practitioner consensus', 'The Local Denmark: which employers in Denmark offer the most jobs in English (jobsinenglish.dk, 2024)', 'https://www.thelocal.dk/20250326/which-employers-in-denmark-offer-the-most-jobs-in-english', '2026-10-08'],
    'dk-cbs': ['employer-stated', 'Copenhagen Business School careers: graduate event for master’s students and recent graduates (participating companies) (archived copy, page no longer online)', 'https://web.archive.org/web/20250906170453/https://cbscareers.nemtilmeld.dk/392/', '2026-10-07'],
    'dk-kpmg': ['employer-stated', 'JobTeaser: KPMG Denmark company page', 'https://jobteaser.com/en/companies/kpmg-denmark', '2026-10-07'],
    'dk-universum': ['data', 'The Copenhagen Post: Maersk and Novo Nordisk rated among most attractive companies for students (Universum 2022)', 'https://cphpost.dk/?p=134580', '2026-10-07']
  }
});
