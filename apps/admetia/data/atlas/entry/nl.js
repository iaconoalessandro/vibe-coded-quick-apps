/* How hiring works: Netherlands. From research/getting-in/employer-pipelines.md
 * §5 (RSM) and places/countries-and-cities.md §2 (Nuffic, Indeed), with reads
 * on 7 and 8 Oct 2026 (Heineken, FrieslandCampina, ING, ABN AMRO and Unilever
 * programmes, Expatica, Inburgering.org, IND, Nuffic, Werken voor Nederland,
 * Nationale Carrièrebeurs, RSM, Eurostat). */
ATLAS.addEntry({
  id: 'NL',
  checked: '2026-10-08',
  review: '2027-04-30',

  lead: [
    ['Dutch graduates usually move into work through a graduation internship (afstudeerstage) or a company traineeship, and half of Rotterdam School of Management’s master’s graduates had a job before they graduated. The largest employers of business graduates are the Big Four and the banks.',
      'I laureati olandesi di solito entrano nel lavoro tramite un tirocinio di laurea (afstudeerstage) o un traineeship aziendale, e metà dei laureati magistrali della Rotterdam School of Management aveva un lavoro prima della laurea. I maggiori datori dei laureati in economia sono le Big Four e le banche.', 'nl-pipelines ours'],
    ['English opens more doors than anywhere else on the continent, but the first year is still hard for internationals.',
      'L’inglese apre più porte che in qualsiasi altro paese del continente, ma il primo anno resta difficile per gli internazionali.', 'nl-lang nl-nuffic'],
    ['The big programmes run to short fixed windows and ask for existing work rights: Heineken’s 2026 window ran from 31 August to 20 September, and Unilever fills on a first-come, first-served basis.',
      'I grandi programmi seguono finestre brevi e fisse e chiedono di avere già il diritto di lavorare: la finestra 2026 di Heineken andava dal 31 agosto al 20 settembre, e Unilever riempie i posti in ordine di arrivo.', 'nl-heineken-j nl-unilever']
  ],

  ways: [
    { name: ['Graduation internship and thesis in a firm', 'Tirocinio di laurea e tesi in azienda'], r: 'intern', p: 'first intern', basis: 'data', t: [
      ['Many master’s theses are written inside a company over several months; it is the usual way a firm tries out a graduate before offering a contract.',
        'Molte tesi magistrali si scrivono dentro un’azienda per diversi mesi; è il modo abituale in cui un’azienda mette alla prova un laureato prima di offrire un contratto.', 'ours'],
      ['Of the 381 RSM master’s graduates who gave timing, 197 (52%) had a job before they graduated, and 95.8% of respondents were employed within six months of graduating.',
        'Dei 381 laureati magistrali della RSM che hanno indicato i tempi, 197 (il 52%) avevano un lavoro prima di laurearsi, e il 95,8% dei rispondenti lavorava entro sei mesi dalla laurea.', 'nl-pipelines nl-rsm']
    ] },
    { name: ['Traineeships', 'Traineeship'], r: 'scheme', p: 'first', basis: 'consensus', t: [
      ['Large firms run multi-year traineeships with rotations: FrieslandCampina’s lasts two years with two one-year assignments, starting in March and September; Heineken’s three-year programme starts with two six-month rotations in the Netherlands.',
        'Le grandi aziende hanno traineeship pluriennali a rotazione: quello di FrieslandCampina dura due anni con due incarichi di un anno, con partenze a marzo e settembre; il programma triennale di Heineken inizia con due rotazioni di sei mesi nei Paesi Bassi.', 'nl-fc nl-heineken'],
      ['ING runs two-year traineeships in Amsterdam in retail banking, wholesale banking, tech and HR, ABN AMRO’s last 18 months to two years, and Unilever’s Future Leaders Programme has three rotations and a permanent contract.',
        'ING ha traineeship biennali ad Amsterdam in retail banking, wholesale banking, tech e risorse umane, quelli di ABN AMRO durano da 18 mesi a due anni, e il Future Leaders Programme di Unilever ha tre rotazioni e un contratto a tempo indeterminato.', 'nl-ing nl-abn nl-unilever']
    ] },
    { name: ['Direct entry and open applications', 'Ingresso diretto e candidature spontanee'], r: 'direct', p: 'first exp', basis: 'consensus', t: [
      ['A motivation letter carries real weight, and open applications to a named person are normal.',
        'La lettera di motivazione ha un peso reale, e le candidature spontanee rivolte a una persona precisa sono normali.', 'nl-expatica'],
      ['Recruitment agencies are a channel too and may ask for an assessment; for experienced hires the usual path is a posted vacancy, with salary discussed only in the second or third round.',
        'Anche le agenzie di selezione sono un canale e possono richiedere una valutazione; per chi ha esperienza la strada abituale è un annuncio pubblicato, con lo stipendio discusso solo al secondo o terzo colloquio.', 'nl-expatica']
    ] },
    { name: ['Career fairs and in-house days', 'Fiere del lavoro e giornate in sede'], r: 'campus', p: 'first', basis: 'consensus', t: [
      ['De Nationale Carrièrebeurs at RAI Amsterdam (24 and 25 April 2026) had 250 employers; Career Expo Eindhoven ran on 3 and 4 March 2026 at TU/e, and ABN AMRO and Heineken hold in-house days for graduates.',
        'De Nationale Carrièrebeurs al RAI di Amsterdam (24 e 25 aprile 2026) aveva 250 datori di lavoro; il Career Expo Eindhoven si è svolto il 3 e 4 marzo 2026 al TU/e, e ABN AMRO e Heineken organizzano giornate in sede per i laureati.', 'nl-cb nl-cexpo nl-abn nl-heineken-j']
    ] },
    { name: ['Central government and public bodies', 'Governo centrale ed enti pubblici'], r: 'public', p: 'first exp', basis: 'consensus', t: [
      ['Werken voor Nederland, the central government’s job portal, filters vacancies by field and education level and promotes traineeships, internships and starter positions; there is no national civil-service exam.',
        'Werken voor Nederland, il portale del lavoro del governo centrale, filtra gli annunci per settore e livello di studio e promuove traineeship, stage e posizioni per neolaureati; non esiste un concorso pubblico nazionale.', 'nl-wvn ours']
    ] },
    { name: ['Referrals and open networking', 'Segnalazioni e rete di contatti'], r: 'network', p: 'first exp', basis: 'consensus', t: [
      ['Dutch directness extends to networking: say plainly what you want and why. Magnet.me lists employer events for early-career candidates, such as McKinsey’s Future Talent Program, aimed at people with up to one or two years of experience.',
        'La franchezza olandese vale anche per il networking: dì chiaramente cosa vuoi e perché. Magnet.me elenca eventi dei datori di lavoro per chi è all’inizio della carriera, come il Future Talent Program di McKinsey, rivolto a persone con fino a uno o due anni di esperienza.', 'nl-expatica nl-magnet']
    ] }
  ],

  cycle: [
    ['A year after graduating, 41.8% of international graduates who stayed had a paid job, against 64.9% of Dutch graduates; the gap narrows to 79.6% against 89.6% by year five. Dutch-language requirements are one likely reason.',
      'A un anno dalla laurea, il 41,8% dei laureati internazionali rimasti aveva un lavoro retribuito, contro il 64,9% dei laureati olandesi; il divario si riduce al 79,6% contro l’89,6% al quinto anno. I requisiti di lingua olandese sono una probabile ragione.', 'nl-nuffic'],
    ['Programme windows are short. Heineken’s Netherlands tracks took applications from 31 August to 20 September 2026, with an online assessment on 21 to 27 September and calls from 28 September; ING’s October 2026 class held interviews in May and June 2026.',
      'Le finestre dei programmi sono brevi. I percorsi olandesi di Heineken hanno raccolto candidature dal 31 agosto al 20 settembre 2026, con una valutazione online dal 21 al 27 settembre e colloqui telefonici dal 28 settembre; la classe di ottobre 2026 di ING ha tenuto i colloqui a maggio e giugno 2026.', 'nl-heineken-j nl-ing'],
    ['Fairs fall in spring: Career Expo Eindhoven in early March and De Nationale Carrièrebeurs in late April; Delft’s orientation days ran from 16 to 18 February 2026.',
      'Le fiere cadono in primavera: il Career Expo Eindhoven a inizio marzo e De Nationale Carrièrebeurs a fine aprile; le giornate di orientamento di Delft si sono svolte dal 16 al 18 febbraio 2026.', 'nl-cb nl-cexpo nl-cern']
  ],

  fields: [
    { f: 'finance', t: [
      ['The banks hire through traineeships of 18 months to two years: ABN AMRO holds in-house days for graduates with at most two years of experience, and ING’s two-year traineeships in Amsterdam take a CV, motivational questions and grade lists in English.',
        'Le banche assumono tramite traineeship da 18 mesi a due anni: ABN AMRO organizza giornate in sede per laureati con al massimo due anni di esperienza, e i traineeship biennali di ING ad Amsterdam richiedono un CV, domande motivazionali ed elenchi dei voti in inglese.', 'nl-abn nl-ing'],
      ['Amsterdam’s trading firms (Optiver, IMC, Flow Traders) hire graduate traders and engineers from mathematics, physics, econometrics and computer science, and decide on tests.',
        'Le società di trading di Amsterdam (Optiver, IMC, Flow Traders) assumono trader e ingegneri neolaureati da matematica, fisica, econometria e informatica, e decidono con i test.', 'nl-data'],
      ['The vacancy rate in finance and insurance was 3.4% in the last quarter of 2025, against 3.9% for the whole economy.',
        'Il tasso di posti vacanti in finanza e assicurazioni era del 3,4% nell’ultimo trimestre 2025, contro il 3,9% dell’intera economia.', 'nl-vac']
    ] },
    { f: 'accounting', t: [
      ['The Big Four are the largest employers of Rotterdam School of Management graduates and take trainees through graduation internships and traineeships.',
        'Le Big Four sono i maggiori datori dei laureati della Rotterdam School of Management e prendono trainee tramite tirocini di laurea e traineeship.', 'nl-pipelines']
    ] },
    { f: 'marketing', t: [
      ['Unilever’s Dutch Future Leaders Programme fills first come, first served and ends with an in-person day in Rotterdam where the offer is decided; it requires the right to work in the Netherlands.',
        'Il Future Leaders Programme olandese di Unilever si riempie in ordine di arrivo e termina con una giornata in presenza a Rotterdam in cui si decide l’offerta; richiede il diritto di lavorare nei Paesi Bassi.', 'nl-calendar nl-unilever']
    ] },
    { f: 'business', t: [
      ['Heineken’s Global Graduate Program (commerce and finance tracks) took graduates from January 2026 to March 2027 who speak Dutch and English and already hold work rights, and FrieslandCampina’s corporate traineeship starts in March and September.',
        'Il Global Graduate Program di Heineken (percorsi commerciale e finanziario) accettava laureati da gennaio 2026 a marzo 2027 che parlano olandese e inglese e hanno già il diritto di lavorare, e il traineeship aziendale di FrieslandCampina inizia a marzo e settembre.', 'nl-heineken-j nl-fc']
    ] },
    { f: 'public', t: [
      ['Central government recruits through Werken voor Nederland, with traineeships that rotate across several state organisations; The Hague is the seat of government, so most of the work is there.',
        'Il governo centrale recluta tramite Werken voor Nederland, con traineeship che ruotano tra più organizzazioni statali; L’Aia è la sede del governo, quindi la maggior parte del lavoro è lì.', 'nl-wvn ours']
    ] },
    { f: 'tech', t: [
      ['Booking.com’s graduate software and data programmes in Amsterdam are open only to graduates of Dutch universities, which makes a Dutch degree a direct key. ASML in Veldhoven is a major employer of Eindhoven University of Technology graduates.',
        'I programmi per laureati in software e dati di Booking.com ad Amsterdam sono aperti solo a laureati di università olandesi, il che rende una laurea olandese una chiave diretta. ASML a Veldhoven è un grande datore dei laureati dell’Università tecnologica di Eindhoven.', 'nl-tbs nl-asml'],
      ['Information and communication had a vacancy rate of 4.8% in the last quarter of 2025, higher than finance (3.4%) and the whole economy (3.9%).',
        'Informazione e comunicazione aveva un tasso di posti vacanti del 4,8% nell’ultimo trimestre 2025, più alto di quello della finanza (3,4%) e dell’intera economia (3,9%).', 'nl-vac']
    ] },
    { f: 'ai', t: [
      ['Data and AI roles cluster in Amsterdam (Booking.com, Adyen, ING, the trading firms) and around ASML and Philips in Eindhoven; the University of Amsterdam, TU Delft and Eindhoven are the usual sources, often through a thesis in the company.',
        'I ruoli in dati e IA si concentrano ad Amsterdam (Booking.com, Adyen, ING, le società di trading) e intorno ad ASML e Philips a Eindhoven; l’Università di Amsterdam, TU Delft ed Eindhoven sono le fonti abituali, spesso tramite una tesi in azienda.', 'ours']
    ] }
  ],

  schools: [
    ['Employers lean on the universities near them: Erasmus/RSM for Rotterdam, the University of Amsterdam and VU for Amsterdam, TU Delft and Eindhoven for engineering. Master’s graduates who also did their bachelor’s in the Netherlands stay more often.',
      'I datori si appoggiano alle università vicine: Erasmus/RSM per Rotterdam, l’Università di Amsterdam e la VU per Amsterdam, TU Delft ed Eindhoven per l’ingegneria. I laureati magistrali che hanno fatto anche la triennale nei Paesi Bassi restano più spesso.', 'ours nl-nuffic'],
    ['RSM’s top five employers are Deloitte, PwC, EY, KPMG and Rabobank, a local list of Dutch Big Four offices and a cooperative bank.',
      'I primi cinque datori di lavoro della RSM sono Deloitte, PwC, EY, KPMG e Rabobank, un elenco locale di sedi olandesi delle Big Four e di una banca cooperativa.', 'nl-pipelines'],
    ['A foreign diploma is checked by Nuffic or SBB through the IDW portal, but the evaluation is advisory and Dutch employers decide who they hire.',
      'Un diploma estero viene valutato da Nuffic o SBB tramite il portale IDW, ma la valutazione è consultiva e sono i datori di lavoro olandesi a decidere chi assumere.', 'nl-idw']
  ],

  events: [
    ['De Nationale Carrièrebeurs, RAI Amsterdam, 24 and 25 April 2026, with 250 employers and a free ticket; the Match&Meet tool shows beforehand which companies fit you.',
      'De Nationale Carrièrebeurs, RAI Amsterdam, 24 e 25 aprile 2026, con 250 datori di lavoro e un biglietto gratuito; lo strumento Match&Meet mostra in anticipo quali aziende fanno per te.', 'nl-cb'],
    ['Career Expo Eindhoven at TU/e on 3 and 4 March 2026, and Delft Career Days’ orientation days on 16 to 18 February 2026, described by CERN as the largest technical career fair in the Benelux with over 150 companies.',
      'Il Career Expo Eindhoven al TU/e il 3 e 4 marzo 2026, e le giornate di orientamento di Delft Career Days dal 16 al 18 febbraio 2026, descritte dal CERN come la più grande fiera tecnica del Benelux con oltre 150 aziende.', 'nl-cexpo nl-cern'],
    ['Company in-house days: ABN AMRO’s In-house Day for traineeships, and Heineken’s Global Graduate Program in-house days, one of them on 20 August 2026.',
      'Giornate in sede delle aziende: l’In-house Day di ABN AMRO per i traineeship e le giornate in sede del Global Graduate Program di Heineken, una delle quali il 20 agosto 2026.', 'nl-abn nl-hein-ih']
  ],

  customs: [
    { k: 'season', v: 'cyclical', t: [
      ['Programmes open once a year for a few weeks and fill early (Heineken 31 August to 20 September 2026, Unilever first come, first served, ING interviews in May and June), while ordinary vacancies are posted all year.',
        'I programmi si aprono una volta l’anno per poche settimane e si riempiono presto (Heineken dal 31 agosto al 20 settembre 2026, Unilever in ordine di arrivo, colloqui ING a maggio e giugno), mentre gli annunci ordinari sono pubblicati tutto l’anno.', 'nl-heineken-j nl-unilever nl-ing ours']
    ] },
    { k: 'masters', v: 'helpful', t: [
      ['ING asks for grade lists of both the bachelor’s and the master’s, Heineken takes graduates within a year of their degree, and RSM’s employer list is made of master’s graduates; none of the pages read says a master’s is compulsory.',
        'ING chiede gli elenchi dei voti sia della triennale sia della magistrale, Heineken accetta laureati a meno di un anno dal titolo, e l’elenco dei datori della RSM riguarda laureati magistrali; nessuna delle pagine lette dice che un master sia obbligatorio.', 'nl-ing nl-heineken-j nl-pipelines']
    ] },
    { k: 'degrees', v: 'regulated', t: [
      ['Only regulated professions need recognition: teaching through DUO, healthcare through the BIG register. For other jobs, Nuffic and SBB offer a credential evaluation through IDW (at least 10 working weeks), which is advisory and which the employer decides whether to ask for.',
        'Solo le professioni regolamentate richiedono un riconoscimento: l’insegnamento tramite DUO, la sanità tramite il registro BIG. Per gli altri lavori, Nuffic e SBB offrono una valutazione dei titoli tramite IDW (almeno 10 settimane lavorative), che è consultiva e che è il datore di lavoro a decidere se richiedere.', 'nl-idw']
    ] },
    { k: 'brand', v: 'some', t: [
      ['The employers recruiting most visibly are tied to nearby universities (RSM and the Big Four, TU/e and ASML), but Heineken, ING and Unilever select on tests and interviews, not on a school list.',
        'I datori di lavoro che reclutano in modo più visibile sono legati alle università vicine (RSM e le Big Four, TU/e e ASML), ma Heineken, ING e Unilever selezionano con test e colloqui, non con un elenco di scuole.', 'nl-pipelines nl-asml nl-heineken-j nl-unilever']
    ] },
    { k: 'dual', v: 'some', t: [
      ['For university graduates the Dutch counterpart of dual study is the graduation internship and the thesis written inside a firm; formal dual degrees were not researched here.',
        'Per i laureati universitari l’equivalente olandese del percorso duale è il tirocinio di laurea e la tesi scritta dentro un’azienda; i corsi duali formali non sono stati ricercati qui.', 'nl-pipelines ours']
    ] },
    { k: 'publicw', v: 'mid', t: [
      ['Central government hires through Werken voor Nederland, with traineeships across state organisations and a starters section, but the largest graduate programmes read are in banks and industry.',
        'Il governo centrale assume tramite Werken voor Nederland, con traineeship in più organizzazioni statali e una sezione per neolaureati, ma i più grandi programmi per laureati letti sono nelle banche e nell’industria.', 'nl-wvn nl-ing nl-heineken']
    ] },
    { k: 'sponsorr', v: 'some', t: [
      ['A highly skilled migrant permit needs an employer recognised by the IND, which appears in a public register; Heineken’s Netherlands programme postings ask for existing work rights. See Visas for the rules.',
        'Un permesso per lavoratore altamente qualificato richiede un datore di lavoro riconosciuto dall’IND, presente in un registro pubblico; gli annunci del programma olandese di Heineken chiedono di avere già il diritto di lavorare. Per le regole vedi Visti.', 'nl-ind-hsm nl-ind-reg nl-heineken-j']
    ] },
    { k: 'photo', v: 'optional', t: [
      ['A photo is not required, and employers may not select on age or origin; most Dutch CVs fit on one page.',
        'La foto non è richiesta, e i datori non possono selezionare in base a età o origine; la maggior parte dei CV olandesi sta in una pagina.', 'nl-inburgering'],
      ['Expatica says photos are not usually expected and should be included only when the employer asks.',
        'Expatica dice che di solito le foto non sono attese e vanno inserite solo se il datore di lavoro le chiede.', 'nl-expatica']
    ] },
    { k: 'cv', v: 'one', t: [
      ['Expatica puts the CV at one A4 page for entry-level roles and no more than two for senior ones; Inburgering.org says one or two pages is usually enough and to follow the vacancy’s instructions.',
        'Expatica indica il CV in una pagina A4 per i ruoli d’ingresso e non più di due per quelli senior; Inburgering.org dice che di solito bastano una o due pagine e di seguire le istruzioni dell’annuncio.', 'nl-expatica nl-inburgering']
    ] },
    { k: 'letter', v: 'expected', t: [
      ['The motivation letter should be no longer than one A4 page and explain your motivation; Heineken’s programme asks for a CV and a cover letter, and ING for motivational questions.',
        'La lettera di motivazione non deve superare una pagina A4 e spiegare la tua motivazione; il programma di Heineken richiede un CV e una lettera di presentazione, e ING domande motivazionali.', 'nl-expatica nl-heineken-j nl-ing']
    ] },
    { k: 'refs', v: 'later', t: [
      ['References are given when asked or noted as available on request; ask the person’s permission first, and expect employers to call them.',
        'Le referenze si forniscono quando richieste o si indica che sono disponibili su richiesta; chiedi prima il permesso alla persona, e aspettati che i datori di lavoro la chiamino.', 'nl-inburgering nl-expatica']
    ] },
    { k: 'docs', v: 'copies', t: [
      ['ING asks for grade lists with the application; for interviews bring copies of your CV, certificates and references.',
        'ING chiede gli elenchi dei voti con la candidatura; per i colloqui porta copie del CV, dei certificati e delle referenze.', 'nl-ing nl-expatica']
    ] },
    { k: 'salary', v: 'later', t: [
      ['Do not raise salary in the first interview: it usually comes up in the second or third round, and pay scales set by collective agreements cannot be negotiated.',
        'Non toccare lo stipendio al primo colloquio: di solito emerge al secondo o terzo giro, e le scale salariali fissate dai contratti collettivi non si negoziano.', 'nl-expatica']
    ] },
    { k: 'check', v: 'some', t: [
      ['Employers may search for you online only with a strong job-related reason and must tell you beforehand; a medical exam is allowed only for special medical requirements, after selection, and some employers ask to see the original ID.',
        'I datori di lavoro possono cercarti online solo con un forte motivo legato al lavoro e devono avvisarti prima; una visita medica è ammessa solo per requisiti medici particolari, dopo la selezione, e alcuni datori chiedono di vedere il documento d’identità originale.', 'nl-inburgering']
    ] },
    { k: 'contact', v: 'mixed', t: [
      ['Applications work, and Dutch directness extends to them: say plainly what you want and why.',
        'Le candidature funzionano, e la franchezza olandese vale anche per loro: dì chiaramente cosa vuoi e perché.', 'nl-expatica'],
      ['Open applications to a named person are normal, and employer events on Magnet.me and at fairs are a second door.',
        'Le candidature spontanee rivolte a una persona precisa sono normali, e gli eventi dei datori di lavoro su Magnet.me e alle fiere sono una seconda porta.', 'nl-expatica nl-magnet nl-cb']
    ] },
    { k: 'abroad', v: 'workable', t: [
      ['International employers recruit from abroad in English; for most others, a Dutch degree and a local network come first.',
        'I datori internazionali reclutano dall’estero in inglese; per la maggior parte degli altri vengono prima una laurea olandese e una rete locale.', 'nl-nuffic ours'],
      ['Some programmes close the door to those without existing work rights or a Dutch degree: Heineken’s asks for work rights and Booking.com’s graduate programmes are open only to graduates of Dutch universities.',
        'Alcuni programmi chiudono la porta a chi non ha già il diritto di lavorare o una laurea olandese: quello di Heineken chiede il diritto di lavorare e i programmi per laureati di Booking.com sono aperti solo a laureati di università olandesi.', 'nl-heineken-j nl-tbs']
    ] },
    { k: 'language', v: 'mostly', t: [
      ['7.8% of ads say Dutch is not needed, the highest share Indeed found, but graduate roles in client-facing work still ask for Dutch.',
        'Il 7,8% degli annunci dice che l’olandese non serve, la quota più alta trovata da Indeed, ma i ruoli da laureato a contatto con i clienti chiedono ancora l’olandese.', 'nl-lang'],
      ['ING asks for the application in English and fluent English, while Heineken’s programme asks for both Dutch and English.',
        'ING chiede la candidatura in inglese e un inglese fluente, mentre il programma di Heineken chiede sia l’olandese sia l’inglese.', 'nl-ing nl-heineken-j']
    ] }
  ],

  rows: {
    process: [
      ['Programmes run in steps: ING takes a CV, motivational questions and grade lists, then HR interviews and business panels at its Amsterdam headquarters (18 to 22 May and 1 to 5 June 2026 for the October class), with a second round only if places remain; a failed assessment or interview cannot be retried.',
        'I programmi procedono per fasi: ING raccoglie CV, domande motivazionali ed elenchi dei voti, poi colloqui con le risorse umane e panel aziendali nella sede di Amsterdam (dal 18 al 22 maggio e dal 1 al 5 giugno 2026 per la classe di ottobre), con un secondo giro solo se restano posti; un assessment o un colloquio non superato non si può ripetere.', 'nl-ing'],
      ['Heineken asks for a CV and cover letter, then an online assessment of situational scenarios and a cognitive test, then an introductory call; Unilever runs an online application, a digital assessment of motivation, personality and cognitive ability, a digital interview, and an in-person Discovery Centre in Rotterdam where you learn the outcome the same day.',
        'Heineken chiede un CV e una lettera di presentazione, poi una valutazione online con scenari situazionali e un test cognitivo, poi un colloquio introduttivo; Unilever prevede una candidatura online, una valutazione digitale di motivazione, personalità e capacità cognitive, un’intervista digitale e un Discovery Centre in presenza a Rotterdam in cui si conosce l’esito lo stesso giorno.', 'nl-heineken-j nl-unilever'],
      ['Ordinary interviews are conversational, last 30 to 90 minutes, and second and even third rounds are common; you may get a job-related test or tasks. Dress smartly, arrive early, expect direct questions and value modesty over bragging.',
        'I colloqui ordinari sono conversazionali, durano da 30 a 90 minuti, e sono comuni un secondo e anche un terzo giro; puoi ricevere un test o dei compiti legati al lavoro. Vestiti in modo curato, arriva in anticipo, aspettati domande dirette e preferisci la modestia al vanto.', 'nl-expatica'],
      ['Interviews are normally in English for international employers and in Dutch for Dutch-speaking ones; no source read gives a typical time from application to offer outside the programme calendars.',
        'I colloqui sono normalmente in inglese per i datori internazionali e in olandese per quelli di lingua olandese; nessuna fonte letta indica un tempo tipico tra candidatura e offerta al di fuori dei calendari dei programmi.', 'ours']
    ],
    offer: [
      ['A probation period must be agreed in writing and be equal for both sides: none in a contract of six months or less, at most one month in a contract of more than six months and under two years, and at most two months otherwise.',
        'Un periodo di prova deve essere concordato per iscritto ed essere uguale per entrambe le parti: nessuno in un contratto di sei mesi o meno, al massimo un mese in un contratto di più di sei mesi e meno di due anni, e al massimo due mesi negli altri casi.', 'nl-law'],
      ['Holiday allowance is at least 8% of gross annual salary, normally paid in May or June; the default notice period for the employee is one month. Pay scales set by collective agreements cannot be negotiated.',
        'L’indennità di ferie è almeno l’8% dello stipendio annuo lordo, di norma pagata a maggio o giugno; il preavviso legale per il dipendente è di un mese. Le scale salariali fissate dai contratti collettivi non si negoziano.', 'nl-law nl-expatica'],
      ['Successive fixed-term contracts become permanent after three contracts or 36 months, whichever comes first, and a gap of more than six months breaks the chain; a law adopted in July 2026 extends that gap to three years from 1 January 2028.',
        'I contratti a termine successivi diventano a tempo indeterminato dopo tre contratti o 36 mesi, a seconda di quale arrivi prima, e un’interruzione di più di sei mesi spezza la catena; una legge adottata a luglio 2026 estende tale interruzione a tre anni dal 1 gennaio 2028.', 'nl-law'],
      ['After you accept an offer there is a short conversation about employment terms; before accepting, check the contract for trial period, hours, salary, holiday pay and the collective agreement. The pages read do not say how long you have to decide.',
        'Dopo aver accettato un’offerta c’è una breve conversazione sulle condizioni di lavoro; prima di accettare, controlla nel contratto periodo di prova, orario, stipendio, indennità di ferie e contratto collettivo. Le pagine lette non dicono di quanto tempo si dispone per decidere.', 'nl-inburgering ours']
    ],
    sponsor: [
      ['The employer must be a sponsor recognised by the IND, listed in a public register updated once a month, and the IND must decide within 90 days; the employer applies and pays the €423 fee. Ask early whether a prospective employer is on the register.',
        'Il datore di lavoro deve essere uno sponsor riconosciuto dall’IND, presente in un registro pubblico aggiornato una volta al mese, e l’IND deve decidere entro 90 giorni; il datore presenta la domanda e paga la tassa di 423 €. Chiedi presto se un potenziale datore di lavoro è nel registro.', 'nl-ind-hsm nl-ind-reg'],
      ['For 2026 the gross monthly salary floors are €4,357 for under-30s, €5,942 for 30 and over and €3,122 for those within three years of graduating or on the orientation-year permit; fixed allowances count, holiday allowance does not.',
        'Per il 2026 le soglie dello stipendio lordo mensile sono 4.357 € per gli under 30, 5.942 € dai 30 anni in su e 3.122 € per chi è a meno di tre anni dalla laurea o ha il permesso dell’anno di orientamento; le indennità fisse contano, l’indennità di ferie no.', 'nl-ind'],
      ['Some graduate programmes ask for existing work rights and offer no visa support: Heineken’s Netherlands programme asks for Dutch, English and the right to work, and Booking.com’s graduate programmes are for Dutch-university graduates.',
        'Alcuni programmi per laureati chiedono di avere già il diritto di lavorare e non offrono supporto per il visto: il programma olandese di Heineken chiede olandese, inglese e diritto di lavorare, e i programmi per laureati di Booking.com sono per laureati di università olandesi.', 'nl-heineken-j nl-tbs']
    ],
    where: [
      ['Central government: Werken voor Nederland, filterable by field and education level, with traineeships, internships and starter positions.',
        'Governo centrale: Werken voor Nederland, filtrabile per settore e livello di studio, con traineeship, stage e posizioni per neolaureati.', 'nl-wvn'],
      ['Graduate programmes and events: employers’ own pages (ING, ABN AMRO, Heineken, Unilever, FrieslandCampina) and Magnet.me, which lists employer events such as McKinsey’s Future Talent Program and Strategy&’s Own Your Impact.',
        'Programmi per laureati ed eventi: le pagine dei datori di lavoro (ING, ABN AMRO, Heineken, Unilever, FrieslandCampina) e Magnet.me, che elenca eventi dei datori come il Future Talent Program di McKinsey e Own Your Impact di Strategy&.', 'nl-ing nl-abn nl-heineken-j nl-unilever nl-fc nl-magnet'],
      ['Fairs: De Nationale Carrièrebeurs (RAI Amsterdam), Career Expo Eindhoven at TU/e and Delft Career Days; Career Compass Netherlands, on 28 May 2026 at Eindhoven, was aimed at international students and graduates.',
        'Fiere: De Nationale Carrièrebeurs (RAI Amsterdam), il Career Expo Eindhoven al TU/e e Delft Career Days; Career Compass Netherlands, il 28 maggio 2026 a Eindhoven, era rivolto a studenti e laureati internazionali.', 'nl-cb nl-cexpo nl-cern nl-compass'],
      ['Permits: the IND’s register of recognised sponsors shows which employers can hire from abroad; the UWV (via werk.nl) supports jobseekers on benefit.',
        'Permessi: il registro degli sponsor riconosciuti dell’IND mostra quali datori possono assumere dall’estero; l’UWV (tramite werk.nl) assiste chi cerca lavoro e percepisce un sussidio.', 'nl-ind-reg nl-inburgering']
    ],
    mistakes: [
      ['Missing the window: Heineken’s Netherlands tracks were open for about three weeks, and Unilever fills first come, first served and requires you to finish the digital interview before the period ends.',
        'Perdere la finestra: i percorsi olandesi di Heineken erano aperti per circa tre settimane, e Unilever riempie in ordine di arrivo e richiede di completare l’intervista digitale prima della fine del periodo.', 'nl-heineken-j nl-unilever'],
      ['Assuming English is enough: the 7.8% of ads that say Dutch is not needed is the highest in Europe, but still means about nine in ten want Dutch in some measure.',
        'Credere che l’inglese basti: il 7,8% di annunci che dicono che l’olandese non serve è il più alto in Europa, ma significa comunque che circa nove su dieci vogliono un po’ di olandese.', 'nl-lang ours'],
      ['Raising salary in the first interview, bragging, or taking direct questions personally: Dutch interviewers value honesty and modesty.',
        'Parlare di stipendio al primo colloquio, vantarsi o prendere sul personale le domande dirette: gli intervistatori olandesi apprezzano onestà e modestia.', 'nl-expatica'],
      ['Putting a photo, date of birth or marital status on the CV out of habit, or sending a letter longer than one page.',
        'Mettere per abitudine foto, data di nascita o stato civile nel CV, o inviare una lettera più lunga di una pagina.', 'nl-inburgering nl-expatica'],
      ['Applying twice to ING after failing its assessment or interview: the posting says you cannot apply again.',
        'Candidarsi due volte a ING dopo aver fallito l’assessment o il colloquio: l’annuncio dice che non si può ripresentare la candidatura.', 'nl-ing']
    ]
  },

  lang: [
    { f: 'finance', v: 'english', lv: 'C1', t: [
      ['ING asks for its application in English and fluent English; no Dutch requirement is named for the traineeships read, and no certificate: the motivational questions and interviews are the evidence.',
        'ING chiede la candidatura in inglese e un inglese fluente; per i traineeship letti non è indicato alcun requisito di olandese, né un certificato: la prova sono le domande motivazionali e i colloqui.', 'nl-ing']
    ] },
    { f: 'business', v: 'bilingual', lv: 'C1', t: [
      ['Heineken’s Netherlands Global Graduate Program asks for Dutch and English; no certificate is named, and the level is judged in the interviews.',
        'Il Global Graduate Program olandese di Heineken chiede olandese e inglese; non è indicato alcun certificato, e il livello si giudica nei colloqui.', 'nl-heineken-j']
    ] },
    { f: 'tech', v: 'english', lv: 'B2', t: [
      ['Only 7.8% of Dutch ads say Dutch is not needed, so English-only technology roles are the exception outside the large employers; Booking.com’s programmes require a Dutch-university degree.',
        'Solo il 7,8% degli annunci olandesi dice che l’olandese non serve, quindi i ruoli tecnologici solo in inglese sono l’eccezione al di fuori dei grandi datori di lavoro; i programmi di Booking.com richiedono una laurea di un’università olandese.', 'nl-lang nl-tbs']
    ] }
  ],

  programmes: [
    { n: 'Global Graduate Program (commerce and finance)', o: 'Heineken', f: 'business', in: null, w: [8, 9], lang: 'NL EN', intl: 'local', ids: 'nl-heineken-j nl-heineken' },
    { n: 'Traineeships (retail, wholesale, tech, HR)', o: 'ING', f: 'finance', in: null, w: null, lang: 'EN', intl: 'unknown', ids: 'nl-ing' },
    { n: 'Traineeships', o: 'ABN AMRO', f: 'finance', in: null, w: null, lang: 'n/s', intl: 'unknown', ids: 'nl-abn' },
    { n: 'Unilever Future Leaders Programme', o: 'Unilever', f: 'marketing', in: null, w: null, lang: 'n/s', intl: 'local', ids: 'nl-unilever nl-calendar' },
    { n: 'Corporate traineeship', o: 'FrieslandCampina', f: 'business', in: null, w: null, lang: 'n/s', intl: 'unknown', ids: 'nl-fc' },
    { n: 'Graduate software and data programmes', o: 'Booking.com', f: 'tech', in: null, w: null, lang: 'EN', intl: 'local', ids: 'nl-tbs' }
  ],

  outcomes: [
    ['RSM reports that 95.8% of its master’s graduates were employed within six months (512 responses from 2,055 graduates, surveyed in April 2026), and of the 381 who gave timing, 52% had a job before they graduated; this is a school-reported figure with a 25% response rate.',
      'La RSM riferisce che il 95,8% dei suoi laureati magistrali lavorava entro sei mesi (512 risposte su 2.055 laureati, indagine di aprile 2026), e dei 381 che hanno indicato i tempi, il 52% aveva un lavoro prima di laurearsi; è un dato riferito dalla scuola con un tasso di risposta del 25%.', 'nl-rsm nl-pipelines'],
    ['For internationals the picture is slower: 25% are still in the Netherlands five years after graduating, and of those who stay, 80% are employed at year five.',
      'Per gli internazionali il quadro è più lento: il 25% è ancora nei Paesi Bassi cinque anni dopo la laurea, e tra chi resta l’80% lavora al quinto anno.', 'nl-nuffic'],
    ['The vacancy rate fell from 4.1% in the last quarter of 2024 to 3.9% in the last quarter of 2025, with 5.0% in professional, scientific and technical activities.',
      'Il tasso di posti vacanti è sceso dal 4,1% dell’ultimo trimestre 2024 al 3,9% dell’ultimo trimestre 2025, con il 5,0% nelle attività professionali, scientifiche e tecniche.', 'nl-vac'],
    ['No source read gives a return-offer rate for Dutch graduation internships or a time to first job for internationals.',
      'Nessuna fonte letta indica un tasso di conferma per i tirocini di laurea olandesi o il tempo al primo lavoro per gli internazionali.', 'ours']
  ],

  sources: {
    'nl-pipelines': ['data', 'Admetia research library: getting-in/employer-pipelines.md §5 (RSM MSc Employment Report 2026)', 'research/getting-in/employer-pipelines.md', '2026-10-02'],
    'nl-rsm': ['data', 'Rotterdam School of Management: MSc Employment Report 2026', 'https://www.rsm.nl/msc-employment-report/', '2026-10-08'],
    'nl-nuffic': ['data', 'Nuffic: stay rate and labour-market position of international graduates 2013–2022, 15 May 2025', 'https://www.nuffic.nl/en/research-facts-and-figures/research/stay-rate-and-labour-market-position-of-international-graduates', '2026-10-08'],
    'nl-lang': ['data', 'Indeed Hiring Lab: how language flexibility shapes job opportunities for migrants, 10 October 2024', 'https://hiringlab.indeed.com/uk/blog/2024/10/10/how-language-flexibility-shapes-job-opportunities-for-migrants/', '2026-10-02'],
    'nl-fc': ['employer-stated', 'FrieslandCampina: corporate traineeship in the Netherlands (archived copy, page no longer online)', 'https://web.archive.org/web/20250328020528/https://careers.frieslandcampina.com/deu/de/node/116', '2026-10-07'],
    'nl-heineken': ['employer-stated', 'HEINEKEN: traineeships, the Netherlands (Global Graduate Program)', 'https://theheinekencompany-rmk.jobs.hr.cloud.sap/TheNetherlands/go/Traineeships-The-Netherlands/9195101/', '2026-10-07'],
    'nl-heineken-j': ['employer-stated', 'HEINEKEN: Global Graduate Program Finance and Commerce, Leiden (postings of 31 August 2026, application period, eligibility and selection steps as summarised by search)', 'https://theheinekencompany-rmk.jobs.hr.cloud.sap/TheNetherlands/job/Leiden-Global-Graduate-Program-Finance-2312-AT/1431782033/', '2026-10-08'],
    'nl-expatica': ['practitioner consensus', 'Expatica: Dutch CV and job interview tips', 'https://expatica.com/nl/working/finding-a-job/dutch-cv-interview-tips-102340', '2026-10-08'],
    'nl-inburgering': ['practitioner consensus', 'Inburgering.org: Dutch CV and application guide (based on werk.nl, UWV)', 'https://inburgering.org/es/guides/dutch-cv-application-guide', '2026-10-08'],
    'nl-abn': ['employer-stated', 'ABN AMRO: traineeships (In-house Day, 2026)', 'https://www.werkenbijabnamro.nl/en/traineeships?_locale=en', '2026-10-08'],
    'nl-ing': ['employer-stated', 'ING careers: Traineeship Retail Banking, October 2026 (selection steps, documents, language; two-year traineeships in Amsterdam) (page no longer online; read 7 October 2026)', 'https://careers.ing.com/es/trabajo/amsterdam/traineeship-retail-banking-october-2026/3121/36855774528', '2026-10-08'],
    'nl-data': ['employer-stated', 'Admetia research library: careers/tech-data-and-ai.md §6 (IMC and Flow Traders graduate postings)', 'research/careers/tech-data-and-ai.md', '2026-10-01'],
    'nl-calendar': ['employer-stated', 'Admetia research library: getting-in/recruiting-calendar.md §5 (Unilever Netherlands UFLP 2026)', 'research/getting-in/recruiting-calendar.md', '2026-10-02'],
    'nl-unilever': ['employer-stated', 'Unilever: Future Leaders Programme, Netherlands (stages, locations, first come first served)', 'https://careers.unilever.com/en/netherlands-early-careers-unilever-future-leaders-programme', '2026-10-08'],
    'nl-tbs': ['employer-stated', 'Admetia research library: careers/tech-business-and-startups.md §1 (Booking.com Compass programmes)', 'research/careers/tech-business-and-startups.md', '2026-10-01'],
    'nl-asml': ['data', 'Innovation Origins: how important is ASML as an employer of TU/e graduates?', 'https://innovationorigins.com/how-important-is-asml-as-an-employer-of-tu-e-graduates-an-example-from-one-research-group', '2026-10-07'],
    'nl-ind': ['data', 'IND: required amounts, income requirements (2026 highly skilled migrant and EU Blue Card salary criteria)', 'https://ind.nl/en/required-amounts-income-requirements', '2026-10-08'],
    'nl-ind-hsm': ['data', 'IND: highly skilled migrant (recognised sponsor, 90-day decision, fee)', 'https://ind.nl/en/residence-permits/work/highly-skilled-migrant', '2026-10-08'],
    'nl-ind-reg': ['data', 'IND: public register of recognised sponsors', 'https://ind.nl/en/public-register-recognised-sponsors', '2026-10-08'],
    'nl-law': ['practitioner consensus', 'Law & More: Dutch employment law in 2026 (probation, holiday allowance, notice, chain rule)', 'https://lawandmore.eu/blog/dutch-employment-law-in-2026-what-employers-and-employees-need-to-know/', '2026-10-08'],
    'nl-idw': ['data', 'Nuffic: applying for a credential evaluation (IDW), advisory status, regulated professions', 'https://nuffic.nl/en/subjects/diploma/credential-evaluation', '2026-10-08'],
    'nl-wvn': ['employer-stated', 'Werken voor Nederland: central government vacancies, traineeships and starter positions', 'https://www.werkenvoornederland.nl', '2026-10-08'],
    'nl-cb': ['employer-stated', 'RAI Amsterdam: De Nationale Carrièrebeurs 2026', 'https://www.rai.nl/en/calendar/carrierebeurs-2026', '2026-10-08'],
    'nl-cexpo': ['practitioner consensus', 'Career Expo 2026 at TU/e Eindhoven: 3 and 4 March, Auditorium and Atlas (event page, thor.edu)', 'https://thor.edu/activities/career-expo-2026', '2026-10-09'],
    'nl-cern': ['employer-stated', 'CERN careers: career events (Delft Career Days orientation days, 16 to 18 February 2026)', 'https://careers.cern/events', '2026-10-08'],
    'nl-compass': ['employer-stated', 'Holland Expat Center: Career Compass Netherlands for international students and graduates (28 May 2026)', 'https://www.hollandexpatcenter.com/events/career-compass-netherlands-for-international-students-and-graduates', '2026-10-08'],
    'nl-magnet': ['practitioner consensus', 'Magnet.me: employer events in the Netherlands (McKinsey Future Talent Program, Strategy& Own Your Impact)', 'https://magnet.me/nl-NL/evenementen/nederland', '2026-10-08'],
    'nl-hein-ih': ['employer-stated', 'Magnet.me: Heineken in-house day, Global Graduate Program, 20 August 2026 (page no longer online; read 7 October 2026)', 'https://magnet.me/nl-NL/vacature/1060824/inhousedag-global-graduate-program---20-augustus-2026', '2026-10-08'],
    'nl-vac': ['data', 'Eurostat: job vacancy rate by NACE activity, quarterly (jvs_q_nace2), Netherlands 2024 Q4 to 2025 Q4', 'https://ec.europa.eu/eurostat/databrowser/view/jvs_q_nace2/default/table', '2026-10-08']
  }
});
