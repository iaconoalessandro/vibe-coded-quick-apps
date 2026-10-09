/* How hiring works: Italy. From research/getting-in/employer-pipelines.md §3,
 * recruiting-calendar.md §3.3, places/italy-playbook.md §6 and §9, with new
 * reads on 7-8 Oct 2026 (Bocconi and Politecnico career services, Excelsior,
 * Padua economics department, InPA; Lombardy stage rules, Padua apprenticeship
 * page, Intesa Sanpaolo SLAM, FPA/RGS public-employment data, D.Lgs. 96/2026,
 * decreto flussi, Università di Torino CV guide, Gi Group). */
ATLAS.addEntry({
  id: 'IT',
  checked: '2026-10-08',
  review: '2027-04-30',

  lead: [
    ['Italian firms fill most places through people and schools they already know. A graduate usually enters through a six-month stage, and in Milan a candidate from Bocconi or the Politecnico who is available tends to pass ahead of an equal candidate from elsewhere.',
      'Le aziende italiane coprono la maggior parte dei posti tramite persone e scuole che già conoscono. Un laureato di solito entra con uno stage di sei mesi, e a Milano un candidato della Bocconi o del Politecnico che è disponibile tende a passare davanti a un candidato equivalente di un’altra università.', 'it-excelsior it-playbook ours'],
    ['Applying from abroad without that network is the slowest way in.',
      'Candidarsi dall’estero senza quella rete è la strada più lenta.', 'ours']
  ],

  ways: [
    { name: ['The six-month stage', 'Lo stage di sei mesi'], r: 'intern', p: 'first intern', basis: 'data', t: [
      ['A curricular stage while enrolled, or an extracurricular one after graduating, is the normal first step; a third of public-university economics master’s graduates had done a company stage after graduating. Extracurricular stages run 2 to 12 months, and the allowance is set region by region.',
        'Uno stage curriculare durante gli studi, o uno extracurriculare dopo la laurea, è il primo passo normale; un terzo dei laureati magistrali in economia delle università pubbliche aveva fatto uno stage in azienda dopo la laurea. Gli stage extracurriculari durano da 2 a 12 mesi, e l’indennità è fissata regione per regione.', 'it-calendar it-playbook it-stagerules'],
      ['In Lombardy the minimum is €500 gross a month (€400 with meal vouchers, €350 for up to 4 hours a day), the maximum is 6 or 12 months depending on the skill level, and a host with more than 20 staff may take 10% of its headcount as interns.',
        'In Lombardia il minimo è di 500 € lordi al mese (400 € con buoni pasto, 350 € fino a 4 ore al giorno), la durata massima è di 6 o 12 mesi secondo il livello di competenze, e un ospitante con più di 20 dipendenti può avere tirocinanti pari al 10% dell’organico.', 'it-lomb'],
      ['Many stages end without an offer, and some firms rotate interns instead of hiring.',
        'Molti stage finiscono senza un’offerta, e alcune aziende fanno ruotare i tirocinanti invece di assumere.', 'ours']
    ] },
    { name: ['Direct knowledge and referrals', 'Conoscenza diretta e segnalazioni'], r: 'network', p: 'first exp', basis: 'data', t: [
      ['Firms say they hire first through people they know directly or who are recommended to them; in Unioncamere’s Excelsior survey about six firms in ten preferred direct knowledge to a CV, and among micro-firms 67.3% relied only on it or on referrals.',
        'Le aziende dichiarano di assumere prima tra persone che conoscono direttamente o che vengono loro segnalate; nell’indagine Excelsior di Unioncamere circa sei imprese su dieci preferivano la conoscenza diretta al curriculum, e tra le micro-imprese il 67,3% si affidava solo a quella o alle segnalazioni.', 'it-excelsior']
    ] },
    { name: ['University career services and fairs', 'Career service universitari e fiere'], r: 'campus', p: 'first intern', basis: 'data', t: [
      ['The schools act as brokers: Bocconi counted 16 career fairs with more than 700 companies in a year, and the Politecnico’s spring Career Day hosted 219 companies and public bodies in May 2026.',
        'Le università fanno da intermediarie: la Bocconi ha contato 16 career fair con oltre 700 aziende in un anno, e il Career Day di primavera del Politecnico ha ospitato 219 aziende ed enti pubblici a maggio 2026.', 'it-bocconi-fairs it-polimi'],
      ['AlmaLaurea, a consortium of 84 universities active since 1994, gives employers access to 4,356,000 graduate CVs and runs online and face-to-face recruiting events; companies downloaded 1,220,000 CVs in the last year.',
        'AlmaLaurea, consorzio di 84 università attivo dal 1994, dà ai datori di lavoro accesso a 4.356.000 CV di laureati e organizza eventi di recruiting online e in presenza; le aziende hanno scaricato 1.220.000 CV nell’ultimo anno.', 'it-almalaurea']
    ] },
    { name: ['Graduate programmes of large groups', 'Programmi per laureati dei grandi gruppi'], r: 'scheme', p: 'first', basis: 'consensus', t: [
      ['Banks, consultancies, energy and consumer groups run structured intakes: Intesa Sanpaolo’s SLAM took applications from 24 February to 17 March 2026 for graduates of any discipline with a degree from January 2024 or later, English at B2, a permanent contract from the start and a 24-month path with up to three rotations.',
        'Banche, società di consulenza, gruppi energetici e di beni di consumo hanno selezioni strutturate: lo SLAM di Intesa Sanpaolo ha raccolto candidature dal 24 febbraio al 17 marzo 2026 da laureati di qualsiasi disciplina con titolo da gennaio 2024 o dopo, inglese B2, contratto a tempo indeterminato fin dall’inizio e un percorso di 24 mesi con fino a tre rotazioni.', 'it-slam'],
      ['PwC Italia expects about 2,000 new entrants a year, over 70% of them recent graduates, often after a curricular stage.',
        'PwC Italia prevede circa 2.000 nuovi ingressi l’anno, oltre il 70% neolaureati, spesso dopo uno stage curriculare.', 'it-acc']
    ] },
    { name: ['Higher-education apprenticeship', 'Apprendistato di alta formazione'], r: 'apprentice', p: 'first', basis: 'consensus', t: [
      ['An open-ended contract for people aged 18 to 29 that lets them earn a bachelor’s, master’s or PhD, or carry out research, while employed; it lasts 6 months to 3 years, and the company and the university agree an individual training plan. Enel and the University of L’Aquila run one for electrical engineering.',
        'Un contratto a tempo indeterminato per chi ha dai 18 ai 29 anni che permette di conseguire una laurea triennale, magistrale o un dottorato, o di svolgere ricerca, mentre si è assunti; dura da 6 mesi a 3 anni, e l’azienda e l’università concordano un piano formativo individuale. Enel e l’Università dell’Aquila ne gestiscono uno per ingegneria elettrica.', 'it-appr it-enel-appr']
    ] },
    { name: ['Public competition (concorso pubblico)', 'Concorso pubblico'], r: 'public', p: 'first exp', basis: 'data', t: [
      ['Public bodies hire by published call, listed on the InPA portal: in 15 months to mid-2025 the administration published procedures for more than 406,000 positions on InPA, about 380,000 of them through competitions.',
        'Le amministrazioni pubbliche assumono con bandi pubblicati sul portale InPA: nei 15 mesi fino a metà 2025 la pubblica amministrazione ha pubblicato su InPA procedure per oltre 406.000 posti, circa 380.000 dei quali tramite concorsi.', 'it-inpa it-inpavol'],
      ['Public employment reached 3,388,794 people in 2024, up 1.8%, with about 214,000 entries against 117,000 exits over the year and under-30 staff up 33% to almost 210,000.',
        'L’impiego pubblico ha raggiunto 3.388.794 persone nel 2024, in crescita dell’1,8%, con circa 214.000 ingressi contro 117.000 uscite nell’anno e il personale under 30 in aumento del 33% a quasi 210.000.', 'it-pa']
    ] },
    { name: ['Direct application on the employer’s site', 'Candidatura diretta sul sito dell’azienda'], r: 'direct', p: 'first exp', basis: 'consensus', t: [
      ['Experienced hires and graduates apply through company portals and the Ministry of Labour’s Cliclavoro, which lists vacancies and internships; Enel’s “Lavora con noi” campaign offers permanent contracts from the first day for graduates without experience, with English among the requirements.',
        'Chi ha esperienza e i laureati si candidano tramite i portali aziendali e Cliclavoro del Ministero del Lavoro, che elenca posti vacanti e stage; la campagna “Lavora con noi” di Enel offre contratti a tempo indeterminato dal primo giorno a laureati senza esperienza, con l’inglese tra i requisiti.', 'it-cliclavoro it-enel']
    ] }
  ],

  cycle: [
    ['When firms cut costs, the stage is kept and the conversion is dropped: interns are cheaper than juniors.',
      'Quando le aziende tagliano i costi, lo stage resta e la conversione salta: i tirocinanti costano meno dei junior.', 'ours'],
    ['Italy’s seasonally adjusted unemployment rate was 6.2% in August 2026, and 20.3% for under-25s; AlmaLaurea found 80.8% of 2024 second-level graduates in work one year on.',
      'Il tasso di disoccupazione italiano destagionalizzato era del 6,2% ad agosto 2026, e del 20,3% per gli under 25; AlmaLaurea ha rilevato che l’80,8% dei laureati magistrali del 2024 lavorava a un anno dalla laurea.', 'it-unemp it-alma26'],
    ['The public sector acts as a counter-cycle: public employment grew 1.8% in 2024 and the administration published more than 406,000 positions on InPA in 15 months, so competitions keep opening when private hiring slows.',
      'Il settore pubblico agisce in controtendenza: l’impiego pubblico è cresciuto dell’1,8% nel 2024 e la pubblica amministrazione ha pubblicato oltre 406.000 posti su InPA in 15 mesi, quindi i concorsi continuano ad aprirsi quando le assunzioni private rallentano.', 'it-pa it-inpavol']
  ],

  fields: [
    { f: 'finance', t: [
      ['Milan investment banking hires through six-month stages, in rolling intakes around January–February and September–October. Bocconi’s finance recruiter list is the national and London banks; candidates from other universities usually need a first stage at a boutique or a second-tier bank.',
        'L’investment banking milanese assume tramite stage di sei mesi, con ingressi continui intorno a gennaio-febbraio e settembre-ottobre. L’elenco dei reclutatori del master in finanza Bocconi sono le banche nazionali e di Londra; i candidati di altre università di solito hanno bisogno di un primo stage in una boutique o in una banca di secondo livello.', 'it-calendar it-pipelines']
    ] },
    { f: 'accounting', t: [
      ['The Big Four are among Italy’s largest graduate recruiters: PwC Italia expects about 2,000 new entrants a year, over 70% of them recent graduates, often after a curricular stage; Bocconi’s accounting master’s lists the Big Four first among its recruiters.',
        'Le Big Four sono tra i maggiori reclutatori di laureati in Italia: PwC Italia prevede circa 2.000 nuovi ingressi l’anno, oltre il 70% neolaureati, spesso dopo uno stage curriculare; il master in accounting della Bocconi indica le Big Four per prime tra i suoi reclutatori.', 'it-acc it-pipelines']
    ] },
    { f: 'consulting', t: [
      ['Strategy consulting in Milan draws most heavily on Bocconi and the Politecnico’s management engineering; Rome’s public-affairs and advisory work leans on LUISS.',
        'La consulenza strategica a Milano attinge soprattutto dalla Bocconi e dall’ingegneria gestionale del Politecnico; il lavoro di affari pubblici e advisory a Roma si appoggia alla LUISS.', 'it-pipelines ours']
    ] },
    { f: 'marketing', t: [
      ['Consumer goods, luxury and mid-sized firms hire locally and in Italian: 61.6% of Bocconi’s employed marketing graduates work in Italy, and the recruiters are Italian groups such as Ferrero, Luxottica and Bolton.',
        'Beni di consumo, lusso e medie imprese assumono localmente e in italiano: il 61,6% dei laureati Bocconi in marketing che lavorano è in Italia, e i reclutatori sono gruppi italiani come Ferrero, Luxottica e Bolton.', 'it-pipelines'],
      ['Ferrero’s assistant-brand-manager internships are curricular, so they must be done while enrolled, and ask for Italian and English.',
        'Gli stage da assistant brand manager di Ferrero sono curriculari, quindi vanno fatti da iscritti, e chiedono italiano e inglese.', 'it-mkt']
    ] },
    { f: 'business', t: [
      ['The manufacturing firms of the North, many family-owned, recruit engineers and business graduates from the nearest university through stages and theses, and rarely advertise abroad.',
        'Le aziende manifatturiere del Nord, molte a conduzione familiare, reclutano ingegneri e laureati in economia dall’università più vicina tramite stage e tesi, e raramente pubblicano annunci all’estero.', 'ours']
    ] },
    { f: 'public', t: [
      ['Public employers hire by open competition (concorso pubblico), now advertised on the national InPA portal; a laurea magistrale or an equivalent foreign master’s is the usual entry requirement.',
        'I datori pubblici assumono per concorso pubblico, ora pubblicato sul portale nazionale InPA; il requisito d’ingresso abituale è una laurea magistrale o un master estero equivalente.', 'it-inpa it-playbook']
    ] },
    { f: 'tech', t: [
      ['Demand outruns supply: about 136,000 ICT job ads a year against about 73,000 new ICT professionals. Most graduates start at IT-services and consulting firms (NTT DATA, Accenture, Reply, Lutech), which recruit at university career days; Bending Spoons in Milan pays a junior engineer about €64,000 and hires students through online tests.',
        'La domanda supera l’offerta: circa 136.000 annunci ICT l’anno contro circa 73.000 nuovi professionisti ICT. La maggior parte dei laureati inizia in società di servizi IT e consulenza (NTT DATA, Accenture, Reply, Lutech), che reclutano ai career day delle università; Bending Spoons a Milano paga un ingegnere junior circa 64.000 € e assume studenti tramite test online.', 'it-ict it-uniba it-bs ours'],
      ['The Politecnici of Milan and Turin are the main feeders; 96% of Turin’s master’s graduates were in work a year after graduating.',
        'I Politecnici di Milano e Torino sono i principali canali; il 96% dei laureati magistrali di Torino lavorava a un anno dalla laurea.', 'it-polito ours']
    ] },
    { f: 'ai', t: [
      ['Data and AI roles are concentrated in Milan, in banks, consultancies and tech firms; they recruit from the Politecnico, Bocconi’s data-science and AI master’s and Turin’s Politecnico, often through a thesis or stage.',
        'I ruoli in dati e IA sono concentrati a Milano, in banche, società di consulenza e aziende tech; reclutano dal Politecnico, dal master in data science e IA della Bocconi e dal Politecnico di Torino, spesso tramite una tesi o uno stage.', 'ours']
    ] },
    { f: 'cyber', t: [
      ['The national cybersecurity agency ACN recruits by concorso, but its 2025 call for 90 specialists required a STEM master’s with at least 105/110 and two years of experience; graduates usually start in consulting firms or at Leonardo and other defence groups.',
        'L’agenzia nazionale per la cybersicurezza ACN recluta per concorso, ma il bando 2025 per 90 specialisti richiedeva una magistrale STEM con almeno 105/110 e due anni di esperienza; i laureati di solito iniziano in società di consulenza o in Leonardo e altri gruppi della difesa.', 'it-acn ours']
    ] }
  ],

  schools: [
    ['In Milan, Bocconi and the Politecnico are the default suppliers for banks, consultancies and large groups, and their alumni sit on the hiring side. Outside Milan, firms lean on the local university they know.',
      'A Milano, Bocconi e Politecnico sono i fornitori predefiniti per banche, consulenze e grandi gruppi, e i loro ex studenti siedono dalla parte di chi assume. Fuori Milano, le aziende si appoggiano all’università locale che conoscono.', 'ours it-pipelines'],
    ['The research library has not confirmed this from employer data: no firm publishes its hires by university.',
      'La biblioteca di ricerca non ha potuto confermarlo con dati delle aziende: nessuna azienda pubblica le assunzioni per università.', 'it-playbook']
  ],

  events: [
    ['Career days on campus (Bocconi&Jobs, the Politecnico’s Career Day and its day for smaller firms), company presentations and case competitions run with the schools.',
      'Le giornate della carriera nei campus (Bocconi&Jobs, il Career Day del Politecnico e quello per le PMI), le presentazioni aziendali e le competizioni di casi organizzate con le università.', 'it-bocconi-fairs it-polimi']
  ],

  customs: [
    { k: 'season', v: 'cyclical', t: [
      ['Stage hiring has two peaks: applications in October–December for a January start and May–July for a September start. Graduate programmes run on fixed windows, such as SLAM’s 24 February to 17 March 2026, and public competitions open throughout the year.',
        'Le assunzioni per stage hanno due picchi: candidature a ottobre-dicembre per un inizio a gennaio e a maggio-luglio per un inizio a settembre. I programmi per laureati seguono finestre fisse, come quella dello SLAM dal 24 febbraio al 17 marzo 2026, e i concorsi pubblici si aprono tutto l’anno.', 'it-calendar it-slam it-inpavol']
    ] },
    { k: 'masters', v: 'expected', t: [
      ['The structured entries ask for a master’s: Intesa Sanpaolo’s SLAM takes a laurea magistrale or a bachelor’s plus a postgraduate qualification, and the national cybersecurity agency’s 2025 call required a STEM master’s with at least 105/110. A laurea magistrale or an equivalent foreign master’s is the usual public-competition requirement.',
        'Gli ingressi strutturati chiedono una magistrale: lo SLAM di Intesa Sanpaolo accoglie una laurea magistrale o una triennale più un titolo post-laurea, e il bando 2025 dell’agenzia nazionale per la cybersicurezza richiedeva una magistrale STEM con almeno 105/110. Una laurea magistrale o un master estero equivalente è il requisito abituale dei concorsi pubblici.', 'it-slam it-acn it-playbook']
    ] },
    { k: 'degrees', v: 'eval', t: [
      ['A foreign degree is not valid automatically: the CIMEA statement of comparability (CIMEA is the Italian ENIC-NARIC centre) or an embassy Dichiarazione di Valore is the document usually asked. Recognition for public competitions and regulated professions goes to the competent administration, while for non-regulated jobs the employer judges the degree.',
        'Un titolo estero non è valido in automatico: la dichiarazione di comparabilità del CIMEA (il CIMEA è il centro ENIC-NARIC italiano) o una Dichiarazione di Valore dell’ambasciata è il documento di solito richiesto. Il riconoscimento per concorsi pubblici e professioni regolamentate spetta all’amministrazione competente, mentre per i lavori non regolamentati è il datore di lavoro a valutare il titolo.', 'it-recog it-unimore']
    ] },
    { k: 'brand', v: 'high', t: [
      ['In Milan a candidate from Bocconi or the Politecnico who is available tends to pass ahead of an equal candidate from elsewhere, and banks, consultancies and large groups recruit from them first. Outside Milan, firms lean on the local university.',
        'A Milano un candidato della Bocconi o del Politecnico che è disponibile tende a passare davanti a un candidato equivalente di un’altra università, e banche, consulenze e grandi gruppi reclutano prima da loro. Fuori Milano, le aziende si appoggiano all’università locale.', 'it-pipelines it-playbook']
    ] },
    { k: 'dual', v: 'some', t: [
      ['A higher-education apprenticeship exists (ages 18 to 29, 6 months to 3 years, open to all sectors), and Enel runs one with the University of L’Aquila, but the stage, not the apprenticeship, is the usual first contact.',
        'Esiste un apprendistato di alta formazione (18-29 anni, da 6 mesi a 3 anni, aperto a tutti i settori), ed Enel ne gestisce uno con l’Università dell’Aquila, ma il primo contatto abituale è lo stage, non l’apprendistato.', 'it-appr it-enel-appr it-playbook']
    ] },
    { k: 'publicw', v: 'high', t: [
      ['Public employment was 3,388,794 people in 2024, up 1.8%, and 59% of public staff are graduates; the administration published procedures for more than 406,000 positions on InPA in 15 months, about 380,000 of them through competitions.',
        'L’impiego pubblico contava 3.388.794 persone nel 2024, in crescita dell’1,8%, e il 59% del personale pubblico è laureato; la pubblica amministrazione ha pubblicato procedure per oltre 406.000 posti su InPA in 15 mesi, circa 380.000 dei quali tramite concorsi.', 'it-pa it-inpavol']
    ] },
    { k: 'sponsorr', v: 'rare', t: [
      ['The route for non-EU workers runs through annual quotas: 164,850 entries in 2026 for all work, of which 76,200 non-seasonal places including 13,600 for domestic care, and each private employer may file 3 requests a year. Few graduate programmes advertise sponsorship. See Visas for the rules.',
        'La via per i lavoratori extra-UE passa da quote annuali: 164.850 ingressi nel 2026 per tutto il lavoro, di cui 76.200 posti non stagionali inclusi 13.600 per l’assistenza familiare, e ogni datore privato può presentare 3 richieste l’anno. Pochi programmi per laureati dichiarano la sponsorizzazione. Per le regole vedi Visti.', 'it-flussi']
    ] },
    { k: 'photo', v: 'common', t: [
      ['Recruiters in Italy normally expect a CV with a photo, as the University of Padua’s economics department tells its students, unlike the UK or the US; the Turin management school advises a sober, formal one, while Gi Group stresses that it is not mandatory.',
        'Chi seleziona in Italia di norma si aspetta un CV con foto, come dice ai suoi studenti il dipartimento di economia dell’Università di Padova, a differenza del Regno Unito o degli Stati Uniti; la scuola di management di Torino ne consiglia una sobria e formale, mentre Gi Group sottolinea che non è obbligatoria.', 'it-photo it-unito it-gigroup']
    ] },
    { k: 'cv', v: 'two', t: [
      ['Two pages are enough, with studies and experience from the most recent backwards, sent as a PDF; the European (Europass) format is for when an employer asks for it.',
        'Due pagine bastano, con studi ed esperienze dalla più recente in poi, inviate in PDF; il formato europeo (Europass) serve quando il datore lo chiede.', 'it-unito it-gigroup']
    ] },
    { k: 'letter', v: 'expected', t: [
      ['A cover letter or presentation email accompanies the CV unless the ad says it is not needed; it can be the body of the email or a separate file, and should say who you are, what you look for and why this role.',
        'Una lettera o email di presentazione accompagna il CV a meno che l’annuncio non dica che non serve; può essere il corpo dell’email o un file separato, e deve dire chi sei, che cosa cerchi e perché questo ruolo.', 'it-gigroup it-unito']
    ] },
    { k: 'refs', v: 'later', t: [
      ['Neither the Turin management-school guide nor the Gi Group guide asks for references on the CV. How far employers check them is not stated on the pages read.',
        'Né la guida della scuola di management di Torino né quella di Gi Group chiedono le referenze nel CV. Fino a dove i datori le verifichino non è indicato nelle pagine lette.', 'it-unito it-gigroup']
    ] },
    { k: 'docs', v: 'certified', t: [
      ['Foreign degrees need a comparability or verification statement from CIMEA, or a Dichiarazione di Valore with translation and legalisation by the Italian embassy; where CIMEA gives only a comparability statement, the degree has to be legalised or apostilled.',
        'I titoli esteri richiedono una dichiarazione di comparabilità o di verifica del CIMEA, o una Dichiarazione di Valore con traduzione e legalizzazione dell’ambasciata italiana; dove il CIMEA rilascia solo la dichiarazione di comparabilità, il titolo va legalizzato o apostillato.', 'it-recog it-unimore']
    ] },
    { k: 'salary', v: 'later', t: [
      ['Since 7 June 2026 (D.Lgs. 96/2026) job ads must state the starting pay or its range and the collective agreement, and employers may not ask candidates what they earned before, so the expectation comes up at the interview.',
        'Dal 7 giugno 2026 (D.Lgs. 96/2026) gli annunci di lavoro devono indicare la retribuzione iniziale o la sua fascia e il contratto collettivo, e i datori non possono chiedere ai candidati quanto guadagnavano prima, quindi l’aspettativa emerge al colloquio.', 'it-paytransp']
    ] },
    { k: 'check', v: 'rare', t: [
      ['A private employer generally may not ask for a criminal-record certificate unless a law provides for it, as for work with minors, and Article 8 of the Workers’ Statute bars inquiries not relevant to the job; public bodies are the exception.',
        'Un datore di lavoro privato in genere non può chiedere il certificato del casellario giudiziale se non lo prevede una legge, come per il lavoro con minori, e l’articolo 8 dello Statuto dei lavoratori vieta indagini non pertinenti al lavoro; gli enti pubblici sono l’eccezione.', 'it-crim']
    ] },
    { k: 'contact', v: 'people', t: [
      ['Direct knowledge and referrals come first; an application through a career service or a contact beats a cold one.',
        'La conoscenza diretta e le segnalazioni vengono prima; una candidatura tramite un career service o un contatto batte una a freddo.', 'it-excelsior']
    ] },
    { k: 'abroad', v: 'there', t: [
      ['Stages need an agreement with a university or a regional scheme, and interviews are usually in person in Milan or Rome.',
        'Gli stage richiedono una convenzione con un’università o un percorso regionale, e i colloqui di solito si fanno di persona a Milano o a Roma.', 'it-calendar ours'],
      ['Some programmes begin remotely: SLAM runs several steps through digital channels, then ends with an in-person Contest Day in Milan.',
        'Alcuni programmi iniziano a distanza: lo SLAM prevede più fasi su canali digitali, poi si chiude con un Contest Day di persona a Milano.', 'it-slam']
    ] },
    { k: 'language', v: 'local', t: [
      ['Fluent Italian is expected for full-time roles, including in Milan banking; English alone works only in a few international teams.',
        'Un italiano fluente è richiesto per i ruoli a tempo pieno, anche nella banca milanese; l’inglese da solo basta solo in pochi team internazionali.', 'it-breaking'],
      ['Where the page states a level, it is English: SLAM asks for at least B2, and Enel lists English among its requirements.',
        'Dove la pagina indica un livello, è per l’inglese: lo SLAM chiede almeno B2, ed Enel elenca l’inglese tra i requisiti.', 'it-slam it-enel']
    ] }
  ],

  rows: {
    process: [
      ['Structured graduate processes run in several digital steps and end in person: Intesa Sanpaolo’s SLAM goes from the application window (24 February to 17 March 2026) through remote steps to a Contest Day in Milan on 18 May, with a start tentatively from July 2026.',
        'I processi strutturati per laureati si svolgono in più fasi digitali e si chiudono di persona: lo SLAM di Intesa Sanpaolo va dalla finestra di candidatura (24 febbraio-17 marzo 2026) attraverso fasi a distanza fino a un Contest Day a Milano il 18 maggio, con inizio previsto da luglio 2026.', 'it-slam'],
      ['A stage needs a three-party agreement with the university (curricular) or a regional promoter, and the host must file the compulsory communication before it starts; Enel mentions interviews and assessment tests.',
        'Uno stage richiede una convenzione a tre con l’università (curriculare) o un soggetto promotore regionale, e l’ospitante deve fare la comunicazione obbligatoria prima dell’inizio; Enel cita colloqui e test di valutazione.', 'it-bocconi-norm it-enel'],
      ['Public competitions follow the published call, with exams or exams plus qualifications and a published ranking; the call on InPA states the requirements.',
        'I concorsi pubblici seguono il bando pubblicato, con esami o esami più titoli e una graduatoria pubblicata; il bando su InPA indica i requisiti.', 'it-inpa it-inpavol']
    ],
    offer: [
      ['Probation (periodo di prova) is at most 6 months in general, with shorter terms in the collective agreement (CCNL): Commercio 60 days or 6 months, metalworkers 2 to 4 months; it must be agreed in writing, and either side may end it without notice.',
        'La prova (periodo di prova) dura al massimo 6 mesi in generale, con durate minori nel contratto collettivo (CCNL): Commercio 60 giorni o 6 mesi, metalmeccanici da 2 a 4 mesi; deve essere concordata per iscritto, e ciascuna parte può chiuderla senza preavviso.', 'it-prova'],
      ['During probation the worker has full pay, and the 13th and 14th monthly pay and the severance fund (TFR) accrue from the first day; Intesa Sanpaolo’s SLAM hires on a permanent contract from the start.',
        'Durante la prova il lavoratore ha la paga piena, e la 13ª e la 14ª mensilità e il TFR maturano dal primo giorno; lo SLAM di Intesa Sanpaolo assume con contratto a tempo indeterminato dall’inizio.', 'it-prova it-slam'],
      ['A fixed-term contract of up to 12 months needs no reason, longer than 12 months needs a legal reason, and past 24 months it becomes permanent; the CCNL sets probation and notice. An internship is a separate regime, not an employment contract.',
        'Un contratto a termine fino a 12 mesi non richiede motivazioni, oltre i 12 mesi serve una causale di legge, e oltre i 24 mesi diventa a tempo indeterminato; il CCNL fissa prova e preavviso. Il tirocinio è un regime a parte, non un contratto di lavoro.', 'it-contract'],
      ['Ads must now state the starting pay or range together with the applicable collective agreement, so the offer can be checked against both.',
        'Gli annunci devono ora indicare la retribuzione iniziale o la fascia insieme al contratto collettivo applicabile, quindi l’offerta si può confrontare con entrambi.', 'it-paytransp']
    ],
    sponsor: [
      ['Sponsoring a non-EU worker is an employer filing: the employer registers through the Ministry of Interior’s ALI portal with a pre-filled form, after a check at the job centre that no local candidate is available (8 working days), and applications are accepted within the quotas.',
        'Sponsorizzare un lavoratore extra-UE è una pratica del datore: il datore si registra sul portale ALI del Ministero dell’Interno con un modulo precompilato, dopo una verifica al centro per l’impiego che non vi siano candidati locali disponibili (8 giorni lavorativi), e le domande sono accolte entro le quote.', 'it-flussi'],
      ['The clearance (nulla osta) comes within 60 days of the application being counted against the quota; the employer must confirm within 7 days after the visa checks, and a private employer is limited to 3 requests a year, so a firm uses them on specific hires.',
        'Il nulla osta arriva entro 60 giorni da quando la domanda è imputata alla quota; il datore deve confermare entro 7 giorni dopo gli accertamenti sul visto, e un datore privato è limitato a 3 richieste l’anno, quindi un’azienda le usa per assunzioni specifiche.', 'it-flussi'],
      ['What an employer wants to hear is a recognised degree (a CIMEA statement) and a start date compatible with the 60-day clearance; for the EU Blue Card, the CIMEA statement of comparability can satisfy the education requirement.',
        'Ciò che un datore vuole sentire è un titolo riconosciuto (una dichiarazione CIMEA) e una data di inizio compatibile con il nulla osta di 60 giorni; per la Carta blu UE la dichiarazione di comparabilità del CIMEA può soddisfare il requisito di istruzione.', 'it-flussi it-recog']
    ],
    where: [
      ['Official portals: InPA for public competitions (inpa.gov.it) and Cliclavoro of the Ministry of Labour (cliclavoro.gov.it), which lists vacancies and internships. AlmaLaurea (almalaurea.it) holds 4,356,000 graduate CVs for employers.',
        'Portali ufficiali: InPA per i concorsi pubblici (inpa.gov.it) e Cliclavoro del Ministero del Lavoro (cliclavoro.gov.it), che elenca posti vacanti e stage. AlmaLaurea (almalaurea.it) conserva 4.356.000 CV di laureati per i datori di lavoro.', 'it-inpa it-cliclavoro it-almalaurea'],
      ['University career services run the fairs and CV checks: Bocconi Career Services, the Politecnico di Milano Career Day, and others; employer pages carry the programmes (Intesa Sanpaolo, Enel, PwC Italia).',
        'I career service universitari organizzano fiere e revisioni dei CV: Bocconi Career Services, il Career Day del Politecnico di Milano e altri; le pagine dei datori riportano i programmi (Intesa Sanpaolo, Enel, PwC Italia).', 'it-bocconi-fairs it-polimi it-slam it-enel it-acc'],
      ['Stage rules to know before you apply: Lombardy’s DGR 7763/2018 sets €500 gross as the minimum allowance; the Bocconi page lists the host’s obligations.',
        'Regole sugli stage da conoscere prima di candidarsi: la DGR 7763/2018 della Lombardia fissa 500 € lordi come indennità minima; la pagina della Bocconi elenca gli obblighi dell’ospitante.', 'it-lomb it-bocconi-norm']
    ],
    mistakes: [
      ['Looking for a stage after you stop being a student: a curricular stage must be done while enrolled, as Ferrero’s assistant-brand-manager internships are, and an extracurricular one runs through a regional promoter.',
        'Cercare uno stage quando non si è più studenti: uno stage curriculare va fatto da iscritti, come gli stage da assistant brand manager di Ferrero, e uno extracurriculare passa da un soggetto promotore regionale.', 'it-mkt it-bocconi-norm'],
      ['Sending a foreign degree without the paperwork: CIMEA or the embassy statement, with translation and legalisation or apostille, is what public competitions and many employers ask.',
        'Mandare un titolo estero senza le carte: la dichiarazione del CIMEA o dell’ambasciata, con traduzione e legalizzazione o apostille, è ciò che chiedono i concorsi pubblici e molti datori.', 'it-recog it-unimore'],
      ['Relying on a cold application: about six firms in ten prefer direct knowledge to a CV, so a career service or contact comes first.',
        'Affidarsi a una candidatura a freddo: circa sei imprese su dieci preferiscono la conoscenza diretta al curriculum, quindi un career service o un contatto viene prima.', 'it-excelsior'],
      ['Leaving out the privacy line: the Turin management school asks that the CV carry the data-processing authorisation, dated and signed.',
        'Omettere la riga sulla privacy: la scuola di management di Torino chiede che il CV riporti l’autorizzazione al trattamento dei dati, datata e firmata.', 'it-unito']
    ]
  },

  lang: [
    { f: 'finance', v: 'bilingual', t: [
      ['Intesa Sanpaolo’s SLAM asks for English at B2 at least; the Milan investment banks hire through stages, where fluent Italian is expected for full-time roles.',
        'Lo SLAM di Intesa Sanpaolo chiede almeno inglese B2; le banche d’investimento milanesi assumono tramite stage, dove un italiano fluente è richiesto per i ruoli a tempo pieno.', 'it-slam it-breaking']
    ] },
    { f: 'accounting', v: 'local', t: [
      ['PwC Italia’s intake is largely recent graduates, often after a curricular stage; the pages read give no language level.',
        'L’ingresso di PwC Italia è in gran parte di neolaureati, spesso dopo uno stage curriculare; le pagine lette non indicano un livello linguistico.', 'it-acc']
    ] },
    { f: 'marketing', v: 'bilingual', t: [
      ['Ferrero’s assistant-brand-manager internships ask for Italian and English.',
        'Gli stage da assistant brand manager di Ferrero chiedono italiano e inglese.', 'it-mkt']
    ] },
    { f: 'business', v: 'bilingual', t: [
      ['Enel lists English among its requirements for graduate hires, and its junior positions are based in Rome; the page states no Italian level.',
        'Enel elenca l’inglese tra i requisiti per i laureati assunti, e i suoi posti junior hanno sede a Roma; la pagina non indica un livello di italiano.', 'it-enel']
    ] },
    { f: 'public', v: 'local', t: [
      ['Public competitions are published on InPA; a laurea magistrale or an equivalent foreign master’s is the usual requirement, and the pages read give no language level.',
        'I concorsi pubblici sono pubblicati su InPA; una laurea magistrale o un master estero equivalente è il requisito abituale, e le pagine lette non indicano un livello linguistico.', 'it-inpa it-playbook']
    ] },
    { f: 'tech', v: 'bilingual', t: [
      ['IT-services and consulting groups recruit at university career days; the pages read state no level, and Bending Spoons hires through online tests.',
        'I gruppi di servizi IT e consulenza reclutano ai career day universitari; le pagine lette non indicano un livello, e Bending Spoons assume tramite test online.', 'it-uniba it-bs']
    ] },
    { f: 'cyber', v: 'local', t: [
      ['The national cybersecurity agency ACN recruits by competition, with a STEM master’s and experience as requirements; the article read gives no language level.',
        'L’agenzia nazionale per la cybersicurezza ACN recluta per concorso, con una magistrale STEM ed esperienza come requisiti; l’articolo letto non indica un livello linguistico.', 'it-acn']
    ] }
  ],

  programmes: [
    { n: 'SLAM International Graduate Program', o: 'Intesa Sanpaolo', f: 'finance', in: null, w: [2, 3], lang: 'IT EN', intl: 'unknown', ids: 'it-slam' },
    { n: 'Lavora con noi (direct hiring of graduates)', o: 'Enel', f: 'business', in: null, w: null, lang: 'IT EN', intl: 'unknown', ids: 'it-enel' },
    { n: 'Apprenticeship in electrical engineering with L’Aquila', o: 'Enel', f: 'business', in: null, w: null, lang: 'IT', intl: 'local', ids: 'it-enel-appr' },
    { n: 'Assistant brand manager internship', o: 'Ferrero', f: 'marketing', in: null, w: null, lang: 'IT EN', intl: 'local', ids: 'it-mkt' },
    { n: 'New entrants (about 2,000 a year)', o: 'PwC Italia', f: 'accounting', in: 2000, w: null, lang: 'IT', intl: 'unknown', ids: 'it-acc' },
    { n: 'Competition for 90 specialists (2025)', o: 'ACN (national cybersecurity agency)', f: 'cyber', in: 90, w: null, lang: 'IT', intl: 'unknown', ids: 'it-acn' }
  ],

  outcomes: [
    ['AlmaLaurea’s 2026 survey finds 80.8% of second-level graduates of 2024 in work one year on, at an average net pay of €1,495 a month, rising to €1,695 at three years.',
      'L’indagine AlmaLaurea 2026 rileva che l’80,8% dei laureati di secondo livello del 2024 lavorava a un anno dalla laurea, con una retribuzione media netta di 1.495 € al mese, che sale a 1.695 € a tre anni.', 'it-alma26'],
    ['A third of public-university economics master’s graduates had done a company stage after graduating.',
      'Un terzo dei laureati magistrali in economia delle università pubbliche aveva fatto uno stage in azienda dopo la laurea.', 'it-playbook'],
    ['No return-offer rate for Italian stages or graduate programmes was found on the pages read.',
      'Nelle pagine lette non è stato trovato un tasso di conferma per gli stage o i programmi per laureati italiani.', 'ours']
  ],

  sources: {
    'it-stagerules': ['practitioner consensus', 'Business Online: stage and tirocini, the 2026 rules (extracurricular 2 to 12 months; regional allowances)', 'https://www.businessonline.it/news/stage-e-tirocini-le-regole-2026-aggiornate-per-stagisti-e-aziende-in-base-a-normative-e-sentenze-tribunali_n83996.html', '2026-10-08'],
    'it-lomb': ['practitioner consensus', 'ecnews: the rules for tirocini in Regione Lombardia (DGR 7763/2018: allowance, duration, host limits)', 'https://www.ecnews.it/lavoro/speciale-della-settimana/la-disciplina-dei-tirocini-regione-lombardia/', '2026-10-08'],
    'it-bocconi-norm': ['employer-stated', 'Bocconi University: rules on curricular and extracurricular internships (Lombardy DGR 7763/2018)', 'https://www.unibocconi.it/it/employer-e-partner/employer/recruitment-online/normativa-di-riferimento', '2026-10-08'],
    'it-appr': ['employer-stated', 'University of Padua: apprenticeship for higher education and research (ages 18 to 29, 6 months to 3 years)', 'https://www.unipd.it/altoapprendistato', '2026-10-08'],
    'it-enel-appr': ['employer-stated', 'University of L’Aquila engineering: Enel dual apprenticeship, call for students 2026-27', 'https://www.ing.univaq.it/studenti/doc/2026/Bando%20studenti%20UNIVAQ%202026-27.pdf', '2026-10-09'],
    'it-slam': ['employer-stated', 'Università di Milano-Bicocca: SLAM, Intesa Sanpaolo International Graduate Program, third edition (requirements, 24 February to 17 March 2026, Contest Day)', 'https://www.unimib.it/node/37538', '2026-10-08'],
    'it-enel': ['practitioner consensus', 'QuiFinanza: Enel hires graduates without experience on permanent contracts (Lavora con noi)', 'https://quifinanza.it/lavoro/trova-lavoro/enel-assunzioni-laureati-senza-esperienza/974742/', '2026-10-08'],
    'it-almalaurea': ['employer-stated', 'AlmaLaurea: for employers (4,356,000 CVs, 84 universities, recruiting events)', 'https://www.almalaurea.it/en', '2026-10-08'],
    'it-cliclavoro': ['employer-stated', 'Cliclavoro, Ministry of Labour and Social Policies: vacancies, internships and services', 'https://www.cliclavoro.gov.it', '2026-10-08'],
    'it-pa': ['data', 'Teleborsa on FPA analysis of RGS Conto annuale data: public employment in 2024, entries, exits and under-30 staff, 7 July 2026', 'https://www.teleborsa.it/News/2026/07/07/pa-al-bivio-generazionale-in-un-anno-33percent-di-dipendenti-pubblici-under-30-209.html', '2026-10-08'],
    'it-inpavol': ['data', 'QuiFinanza on Forum PA 2025: procedures for more than 406,000 positions on inPA in 15 months', 'https://quifinanza.it/lavoro/forum-pa-assunzioni-2025/910268/', '2026-10-08'],
    'it-prova': ['practitioner consensus', 'Centro Fiscale: probation in 2026 (6-month cap, CCNL durations, written form, rights during the trial)', 'https://centrofiscale.com/periodo-di-prova-lavoro-2026/', '2026-10-08'],
    'it-contract': ['data', 'Admetia research library: getting-in/applications-and-interviews.md (fixed terms in Italy, Art. 19 D.Lgs. 81/2015)', 'research/getting-in/applications-and-interviews.md', '2026-10-01'],
    'it-flussi': ['data', 'ecnews: entry quotas 2026-2028 (decreto flussi), employer procedure, nulla osta timing', 'https://www.ecnews.it/lavoro/rapporto-di-lavoro/gestione-del-rapporto/programmazione-flussi-ingresso-triennio-2026-2028/', '2026-10-08'],
    'it-recog': ['data', 'University of Milan: recognition of foreign academic qualifications (CIMEA statement of comparability, Dichiarazione di Valore, other administrations)', 'https://unimi.it/en/international/coming-abroad/recognition-foreign-academic-qualifications-and-exams', '2026-10-08'],
    'it-unimore': ['employer-stated', 'University of Modena and Reggio Emilia: recognition of foreign degrees (academic, non-academic, regulated and non-regulated professions)', 'https://www.unimore.it/sites/default/files/2026-01/EquipollenzaTitoloStudioStraniero.pdf', '2026-10-08'],
    'it-paytransp': ['data', 'ecnews: pay transparency and access to work, D.Lgs. 96/2026 (in force 7 June 2026)', 'https://www.ecnews.it/lavoro/rapporto-di-lavoro/gestione-del-rapporto/trasparenza-retributiva-e-accesso-al-lavoro-i-nuovi-obblighi-introdotti-dal-d-lgs-n-96-2026/', '2026-10-08'],
    'it-unito': ['employer-stated', 'University of Turin, School of Management and Economics: memo for writing a CV and cover letter (October 2023)', 'https://www.sme.unito.it/sites/u005/files/2024-07/consigli_per_la_redazione_di_un_cv_-agg_ott23.pdf', '2026-10-08'],
    'it-gigroup': ['practitioner consensus', 'Gi Group: how to write a CV (photo, cover letter, PDF, privacy line)', 'https://www.gigroup.it/come-fare-un-curriculum', '2026-10-08'],
    'it-crim': ['practitioner consensus', 'Agenda Digitale: judicial data and the GDPR, when processing is allowed (private employers and criminal records)', 'https://www.agendadigitale.eu/sicurezza/dati-giudiziari-e-gdpr-quando-il-trattamento-e-ammesso/', '2026-10-08'],
    'it-unemp': ['data', 'Eurostat: unemployment by sex and age, monthly (une_rt_m), August 2026', 'https://ec.europa.eu/eurostat/databrowser/view/une_rt_m/default/table?lang=en', '2026-10-03'],
    'it-alma26': ['data', 'AlmaLaurea: Sintesi del Rapporto 2026 sugli esiti occupazionali della laurea (June 2026)', 'https://www.almalaurea.it/document-download/sintesi-rapporto-almalaurea-2026-sugli-esiti-occupazionali-della-laurea', '2026-10-08'],
    'it-pipelines': ['data', 'Admetia research library: getting-in/employer-pipelines.md §3 and §9 (Bocconi placement pages by programme)', 'research/getting-in/employer-pipelines.md', '2026-10-02'],
    'it-calendar': ['practitioner consensus', 'Admetia research library: getting-in/recruiting-calendar.md §3.3 (stage curriculare and extracurriculare)', 'research/getting-in/recruiting-calendar.md', '2026-10-02'],
    'it-playbook': ['data', 'Admetia research library: places/italy-playbook.md §6 and §9 (AlmaLaurea 2024 survey; claims still to verify)', 'research/places/italy-playbook.md', '2026-10-02'],
    'it-breaking': ['anecdotal', 'Admetia research library: getting-in/breaking-in.md §6 (Milan and Frankfurt language requirements)', 'research/getting-in/breaking-in.md', '2026-09-30'],
    'it-excelsior': ['data', 'Unioncamere Excelsior survey, reported by Universita.it: for six firms in ten, direct knowledge beats the CV', 'https://www.universita.it/curriculum-indagine-excelsior-unioncamere-2011/', '2026-10-07'],
    'it-bocconi-fairs': ['employer-stated', 'Bocconi University Career Services: meeting employers (career fairs, companies, participants)', 'https://www.unibocconi.it/it/studenti-iscritti/career-services/incontrare-gli-employer', '2026-10-07'],
    'it-polimi': ['employer-stated', 'Politecnico di Milano: Career Day and Career Day PMI', 'https://www.polimi.it/il-politecnico/eventi/dettaglio-evento/career-day-pmi-1', '2026-10-07'],
    'it-photo': ['practitioner consensus', 'University of Padua, Department of Economics: CV guidance for students', 'https://www.economia.unipd.it/locandina-52', '2026-10-07'],
    'it-inpa': ['employer-stated', 'InPA, the Italian public administration recruitment portal (Department of Public Administration)', 'https://www.inpa.gov.it/', '2026-10-07'],
    'it-acc': ['employer-stated', 'Admetia research library: careers/accounting-and-corporate.md §1 (PwC Italia via ItaliaOggi, 14 September 2026)', 'research/careers/accounting-and-corporate.md', '2026-09-30'],
    'it-ict': ['practitioner consensus', 'La Nazione: Italy lacks 236,000 digital professionals (Osservatorio Competenze Digitali 2025, sponsored article)', 'https://www.lanazione.it/pubbliredazionali/in-italia-mancano-236mila-professionisti-digitali-i-lavori-ict-piu-richiesti-e-le-nuove-competenze-da-sviluppare-fgf06asj', '2026-10-07'],
    'it-uniba': ['employer-stated', 'University of Bari, computer science job placement (recruiting firms listed)', 'https://www.uniba.it/it/ricerca/dipartimenti/informatica/job-placement', '2026-10-07'],
    'it-bs': ['employer-stated', 'Admetia research library: careers/tech-business-and-startups.md §8 (Bending Spoons pay and selection)', 'research/careers/tech-business-and-startups.md', '2026-10-01'],
    'it-polito': ['data', 'Politecnico di Torino: Career Days 2025 press release (AlmaLaurea employment at one year)', 'https://www.polito.it/sites/default/files/2025-05/CS%20Career%20Days%202025.pdf', '2026-10-07'],
    'it-acn': ['employer-stated', 'ItaliaOggi: new ACN competition, 90 posts for STEM graduates in national cybersecurity', 'https://www.italiaoggi.it/economia-e-politica/attualita/nuovo-concorso-acn-90-posti-per-laureati-stem-nella-cybersicurezza-nazionale-come-e-quando-candidarsi-c0xxoay4', '2026-10-07'],
    'it-mkt': ['employer-stated', 'Admetia research library: careers/marketing.md §1 (Ferrero marketing entry; career-page snippets)', 'research/careers/marketing.md', '2026-10-02']
  }
});
