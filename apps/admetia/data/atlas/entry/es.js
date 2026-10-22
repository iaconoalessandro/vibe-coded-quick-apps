/* How hiring works: Spain. From research/places/iberia-and-nordics.md §2 and §6,
 * getting-in/employer-pipelines.md §5 (Esade), with reads on 7 and 8 Oct 2026:
 * Fundación Universidad-Empresa via Qué!, The Local Spain, Expatica, the Estatuto de los
 * Trabajadores and the Estatuto Básico del Empleado Público (BOE), the 2026 public employment
 * offer (BOE), Deloitte Spain, KPMG Spain, Santander, BBVA, Tecnoempleo, SEPE, UCM, UPM,
 * Mastermania and the University of Alicante (foreign-degree recognition). */
ATLAS.addEntry({
  id: 'ES',
  checked: '2026-10-08',
  review: '2027-04-08',

  lead: [
    ['In Spain the first job usually starts as a paid internship (prácticas) that the firm then converts, and personal contacts carry unusual weight: in a 2020 national study, 40% of Spaniards said they had got a job thanks to a close contact, family first.',
      'In Spagna il primo lavoro di solito parte da un tirocinio retribuito (prácticas) che l’azienda poi trasforma in contratto, e i contatti personali hanno un peso insolito: in uno studio nazionale del 2020, il 40% degli spagnoli ha detto di aver trovato lavoro grazie a un contatto stretto, prima di tutto la famiglia.', 'es-local'],
    ['Big banks and consultancies in Madrid and Barcelona also run structured graduate intakes that are open to outsiders, and the public sector hires through state exams (oposiciones) that bypass all of this.',
      'Le grandi banche e le società di consulenza di Madrid e Barcellona hanno anche selezioni strutturate per laureati aperte a chi viene da fuori, e il settore pubblico assume con concorsi di Stato (oposiciones) che aggirano tutto questo.', 'es-iberia es-oep']
  ],

  ways: [
    { name: ['Internship (prácticas) to contract', 'Dal tirocinio (prácticas) al contratto'], r: 'intern', p: 'first intern', basis: 'data', t: [
      ['Internships under an agreement with the university are the standard first step; the Fundación Universidad-Empresa says that 52% of graduates who did one at some of its partner companies received a job offer, which also means that about half did not.',
        'I tirocini con convenzione universitaria sono il primo passo standard; la Fundación Universidad-Empresa afferma che il 52% dei laureati che ne ha svolto uno presso alcune delle sue aziende partner ha ricevuto un’offerta di lavoro, il che significa anche che circa la metà non l’ha ricevuta.', 'es-fue'],
      ['After graduation the law offers a work-experience contract (contrato de obtención de práctica profesional): it lasts six months to one year, must be signed within three years of finishing the studies, and may carry a probation of up to one month.',
        'Dopo la laurea la legge prevede un contratto di formazione per ottenere esperienza professionale (contrato de obtención de práctica profesional): dura da sei mesi a un anno, va firmato entro tre anni dalla fine degli studi e può avere una prova fino a un mese.', 'es-estatuto'],
      ['Many firms run a chain of interns instead of hiring, so an internship is a trial, not a promise.',
        'Molte aziende fanno girare una catena di tirocinanti invece di assumere, quindi un tirocinio è una prova, non una promessa.', 'ours']
    ] },
    { name: ['Contacts and word of mouth', 'Contatti e passaparola'], r: 'network', p: 'first exp', basis: 'data', t: [
      ['Asking people you know, and contacting companies directly, are among the most used ways to look for work: in the national statistics institute’s work survey, 57.8% of respondents asked family or friends and 41% contacted companies directly.',
        'Chiedere a chi conosci, e contattare direttamente le aziende, sono tra i modi più usati per cercare lavoro: nell’indagine sul lavoro dell’istituto nazionale di statistica, il 57,8% degli intervistati ha chiesto a familiari o amici e il 41% ha contattato direttamente le aziende.', 'es-local']
    ] },
    { name: ['Graduate programmes of large groups', 'Programmi per laureati dei grandi gruppi'], r: 'scheme', p: 'first', basis: 'consensus', t: [
      ['Santander’s headquarters programme starts each September in Madrid, takes graduates of the last three years and opens for applications in March; the bank announced more than 400 places in 2026 across ten countries. BBVA’s Be Talent programme hired 23 young data scientists in 2025 out of more than 700 registrations.',
        'Il programma della sede centrale di Santander inizia ogni settembre a Madrid, prende laureati degli ultimi tre anni e apre le candidature a marzo; la banca ha annunciato più di 400 posti nel 2026 in dieci paesi. Il programma Be Talent di BBVA ha assunto nel 2025 23 giovani data scientist su più di 700 iscrizioni.', 'es-santander-hq es-santander-pr es-bbva-bt'],
      ['The Big Four recruit in volume: KPMG planned to hire more than 900 people in September and October 2024, 79% of them recent graduates or interns, but the press reported Big Four cuts of 700 to 1,400 places for under-30s.',
        'Le Big Four assumono in grandi numeri: KPMG prevedeva di assumere più di 900 persone a settembre e ottobre 2024, il 79% neolaureati o stagisti, ma la stampa ha riferito di tagli delle Big Four tra 700 e 1.400 posti per gli under 30.', 'es-kpmg es-big4']
    ] },
    { name: ['University job fairs and campus recruiting', 'Fiere del lavoro e reclutamento nelle università'], r: 'campus', p: 'first intern', basis: 'consensus', t: [
      ['Spanish universities hold employment forums in the autumn and the spring: Complutense’s UCMpleo26 gathered more than 90 organisations on 10 to 12 March 2026, Cantabria’s fair on 14 October 2026 has more than 120 companies with about 500 job offers and 400 internships, and Comillas expects 139 on 28 and 29 October.',
        'Le università spagnole organizzano forum del lavoro in autunno e in primavera: l’UCMpleo26 della Complutense ha riunito più di 90 organizzazioni dal 10 al 12 marzo 2026, la fiera di Cantabria del 14 ottobre 2026 ha più di 120 aziende con circa 500 offerte di lavoro e 400 di tirocinio, e Comillas ne prevede 139 il 28 e 29 ottobre.', 'es-mastermania es-ucm-fair'],
      ['Esade runs a financial-services recruitment fair in September and October because finance firms recruit early.',
        'Esade organizza una fiera di reclutamento per i servizi finanziari a settembre e ottobre perché le aziende finanziarie reclutano presto.', 'es-pipelines']
    ] },
    { name: ['Vocational dual training and training contracts', 'Formazione professionale duale e contratti formativi'], r: 'apprentice', p: 'first', basis: 'consensus', t: [
      ['The training-in-alternation contract (contrato formativo en alternancia) lasts three months to two years, pays at least 60% of the agreed wage in the first year and 75% in the second, and allows no probation. Deloitte Spain has an FP Dual alliance with 28 internship places in three higher vocational programmes (administration and finance, systems administration, executive assistance).',
        'Il contratto formativo in alternanza (contrato formativo en alternancia) dura da tre mesi a due anni, paga almeno il 60% della retribuzione concordata nel primo anno e il 75% nel secondo e non ammette periodo di prova. Deloitte Spagna ha un’alleanza FP Dual con 28 posti di tirocinio in tre cicli professionali superiori (amministrazione e finanza, amministrazione di sistemi, assistenza alla direzione).', 'es-estatuto es-deloitte-dual']
    ] },
    { name: ['Public-sector exams (oposiciones)', 'Concorsi pubblici (oposiciones)'], r: 'public', p: 'first exp', basis: 'data', t: [
      ['The 2026 public employment offer authorises 16,988 free-entry places in the state administration and its public bodies, including 1,700 free-entry places in the information-technology bodies (the senior ICT body now examines artificial intelligence, cybersecurity and data science separately). Selection is by oposición or concurso-oposición, and the calls must be published within 2026.',
        'L’offerta di impiego pubblico del 2026 autorizza 16.988 posti ad accesso libero nell’amministrazione statale e nei suoi enti, tra cui 1.700 posti ad accesso libero nei corpi informatici (il corpo superiore ICT ora esamina separatamente intelligenza artificiale, cybersicurezza e scienza dei dati). La selezione avviene per oposición o concurso-oposición, e i bandi vanno pubblicati entro il 2026.', 'es-oep es-ebep'],
      ['Civil-service posts require Spanish nationality, with an exception for EU nationals outside posts that exercise public authority; residents with a legal permit can compete for non-civil-servant (laboral) posts.',
        'Gli impieghi pubblici di ruolo richiedono la cittadinanza spagnola, con un’eccezione per i cittadini UE fuori dai posti che esercitano pubblici poteri; i residenti legali possono concorrere ai posti di personale contrattuale (laboral).', 'es-ebep']
    ] },
    { name: ['Open ads, portals and direct applications (the experienced hire)', 'Annunci aperti, portali e candidature dirette (chi ha esperienza)'], r: 'direct', p: 'exp first', basis: 'consensus', t: [
      ['Experienced candidates apply to open ads: Tecnoempleo, the tech board, listed 2,909 IT offers on 8 October 2026 with a separate first-job section for computing graduates; Deloitte takes applications at any time and reviews them as they arrive.',
        'Chi ha esperienza si candida agli annunci aperti: Tecnoempleo, la bacheca del settore tech, elencava 2.909 offerte IT l’8 ottobre 2026, con una sezione separata per il primo impiego dei laureati in informatica; Deloitte accetta candidature in qualsiasi momento e le esamina man mano che arrivano.', 'es-tecnoempleo es-deloitte-faq']
    ] }
  ],

  cycle: [
    ['Spain’s youth labour market swings harder than most in Europe: in a downturn firms stop converting interns first, and graduates fall back on further study or a second internship.',
      'Il mercato del lavoro giovanile spagnolo oscilla più della maggior parte di quelli europei: in una crisi le aziende smettono prima di tutto di assumere i tirocinanti, e i laureati ripiegano su altri studi o su un secondo tirocinio.', 'ours'],
    ['In August 2026 unemployment was 22.7% among under-25s in Spain, against 15.4% in the EU.',
      'Nell’agosto 2026 la disoccupazione era del 22,7% tra gli under 25 in Spagna, contro il 15,4% nell’UE.', 'es-unemp-eurostat']
  ],

  fields: [
    { f: 'finance', t: [
      ['Investment banks and large banks recruit early through school fairs: Esade runs a financial-services recruitment fair in September–October for that reason. Santander’s investment-banking and wealth-management programmes open for applications in August and September.',
        'Le banche d’investimento e le grandi banche reclutano presto tramite le fiere delle scuole: per questo l’Esade organizza una fiera di reclutamento per i servizi finanziari a settembre-ottobre. I programmi di Santander in investment banking e wealth management aprono le candidature ad agosto e settembre.', 'es-pipelines es-santander-pr']
    ] },
    { f: 'accounting', t: [
      ['The Big Four are the largest recruiters of new graduates in Spain, but were reported to be cutting their intake of under-30s by 10% to 20%, between 700 and 1,400 places, while hiring more experienced staff. KPMG’s autumn 2024 intake was more than 400 in advisory and almost 350 in audit.',
        'Le Big Four sono i maggiori reclutatori di neolaureati in Spagna, ma secondo la stampa stavano tagliando del 10-20% gli ingressi di under 30, tra 700 e 1.400 posti, mentre assumevano più personale esperto. L’ingresso di KPMG nell’autunno 2024 era di più di 400 in consulenza e quasi 350 in revisione.', 'es-big4 es-kpmg']
    ] },
    { f: 'consulting', t: [
      ['Strategy and technology consultancies in Madrid recruit through internships from Esade, IE, ICADE and the Madrid and Barcelona engineering schools. Deloitte Spain runs a six-week July risk-advisory experience (DRisk) in Madrid and Barcelona for STEM students in their penultimate year, with six scholarships.',
        'Le società di consulenza strategica e tecnologica a Madrid reclutano tramite stage da Esade, IE, ICADE e dalle scuole d’ingegneria di Madrid e Barcellona. Deloitte Spagna organizza a luglio un’esperienza di sei settimane in risk advisory (DRisk) a Madrid e Barcellona per studenti STEM del penultimo anno, con sei borse.', 'es-pipelines ours es-deloitte-drisk']
    ] },
    { f: 'tech', t: [
      ['Tech employment still grows, but junior entry is shrinking: offers for junior programmers fell 33% while senior ones rose 13%, and about half of Spanish firms expect to cut junior openings because of AI. Barcelona and Madrid start-ups and international hubs hire in English.',
        'L’occupazione tech cresce ancora, ma l’ingresso dei junior si restringe: le offerte per programmatori junior sono calate del 33% mentre quelle senior sono salite del 13%, e circa metà delle aziende spagnole prevede di tagliare posizioni junior a causa dell’IA. Le start-up e i centri internazionali di Barcellona e Madrid assumono in inglese.', 'es-junior es-lang']
    ] },
    { f: 'ai', t: [
      ['Data and AI roles sit mostly in the big banks (BBVA, Santander), telecoms and consultancies in Madrid and Barcelona, which recruit from the polytechnic universities (UPM, UPC) and Carlos III. BBVA’s Be Talent selection ends in an in-person datathon.',
        'I ruoli in dati e IA sono soprattutto nelle grandi banche (BBVA, Santander), nelle telecomunicazioni e nelle consulenze di Madrid e Barcellona, che reclutano dalle università politecniche (UPM, UPC) e dalla Carlos III. La selezione Be Talent di BBVA si conclude con un datathon in presenza.', 'ours es-bbva-bt']
    ] }
  ],

  schools: [
    ['Esade and IE are the business schools with the strongest employer links in Barcelona and Madrid; public universities feed regional firms and run their own employment forums (Complutense, Carlos III, Politécnica de Madrid).',
      'Esade e IE sono le business school con i legami più forti con le aziende a Barcellona e Madrid; le università pubbliche alimentano le aziende regionali e organizzano propri forum del lavoro (Complutense, Carlos III, Politécnica de Madrid).', 'es-pipelines es-ucm-fair es-mastermania ours']
  ],

  events: [
    ['The autumn forums: Universidad Carlos III on 6 and 7 October 2026, Cantabria on 14 October, the Politécnica de Madrid virtual fair on 21 to 23 October (plus school-level fairs such as Campus Sur on 14 and 15 October), and Comillas on 28 and 29 October. Complutense’s forum is in March, and fairs continue in February, March and April.',
      'I forum dell’autunno: l’Universidad Carlos III il 6 e 7 ottobre 2026, Cantabria il 14 ottobre, la fiera virtuale della Politécnica de Madrid dal 21 al 23 ottobre (più fiere delle singole scuole come Campus Sur il 14 e 15 ottobre) e Comillas il 28 e 29 ottobre. Il forum della Complutense è a marzo, e le fiere proseguono a febbraio, marzo e aprile.', 'es-mastermania es-upm-fair'],
    ['At the forums students register, browse job and internship offers and are interviewed on the spot; Complutense’s adds AI-based mock interviews, and Carlos III’s includes selection processes and group exercises.',
      'Ai forum gli studenti si iscrivono, consultano le offerte di lavoro e tirocinio e sono intervistati sul posto; quello della Complutense aggiunge colloqui simulati con l’IA, e quello della Carlos III include processi di selezione ed esercizi di gruppo.', 'es-ucm-fair es-mastermania']
  ],

  customs: [
    { k: 'season', v: 'cyclical', t: [
      ['No single national season; the big programmes keep their own calendars. Santander’s headquarters programme opens in March and closed on 26 April in 2026, its retail programme on 31 May, and its investment-banking and wealth-management places open in August and September; KPMG brought in its intake in September and October; Deloitte takes applications all year.',
        'Non c’è una stagione nazionale unica; i grandi programmi hanno i propri calendari. Il programma della sede centrale di Santander apre a marzo e nel 2026 si è chiuso il 26 aprile, quello retail il 31 maggio, e i posti in investment banking e wealth management aprono ad agosto e settembre; KPMG ha inserito il suo gruppo a settembre e ottobre; Deloitte accetta candidature tutto l’anno.', 'es-santander-pr es-santander-hq es-kpmg es-deloitte-faq']
    ] },
    { k: 'masters', v: 'helpful', t: [
      ['A bachelor’s is enough to enter: Santander’s programme takes an official degree, vocational diploma or master’s from the last three years, and Deloitte asks for no experience. A master’s pays: Spanish master’s graduates had a contribution base of €26,613 in the first year against €22,134 for bachelor’s graduates.',
        'Basta una triennale per entrare: il programma di Santander prende una laurea ufficiale, un diploma professionale o una magistrale degli ultimi tre anni, e Deloitte non chiede esperienza. Una magistrale paga: i laureati magistrali spagnoli avevano una base contributiva di 26.613 € nel primo anno contro 22.134 € dei laureati triennali.', 'es-santander-hq es-deloitte-faq es-lib-pay']
    ] },
    { k: 'degrees', v: 'regulated', t: [
      ['Degrees that give access to a regulated profession must be homologated by the Ministry of Science, Innovation and Universities; other foreign degrees can obtain an equivalence certificate (a MECES level) but employers rarely require it. Documents not in Spanish need a sworn translator registered in Spain, under Royal Decree 889/2022.',
        'I titoli che danno accesso a una professione regolamentata devono essere omologati dal Ministero della Scienza, dell’Innovazione e delle Università; gli altri titoli stranieri possono ottenere un certificato di equivalenza (un livello MECES) ma i datori raramente lo richiedono. I documenti non in spagnolo richiedono un traduttore giurato registrato in Spagna, ai sensi del Real Decreto 889/2022.', 'es-ua-homolog ours']
    ] },
    { k: 'brand', v: 'some', t: [
      ['Esade and IE carry weight in finance and consulting, and the Big Four and banks recruit through university agreements and forums, but the programmes we read (Santander, Deloitte, BBVA) name no target schools.',
        'Esade e IE pesano in finanza e consulenza, e le Big Four e le banche reclutano tramite convenzioni e forum universitari, ma i programmi che abbiamo letto (Santander, Deloitte, BBVA) non indicano alcuna università privilegiata.', 'es-pipelines es-santander-hq es-deloitte-faq ours']
    ] },
    { k: 'dual', v: 'some', t: [
      ['Dual training exists and is growing in vocational education (Deloitte’s alliance has 28 places) and training contracts are in the labour code, but for university graduates the equivalent is the internship, not an apprenticeship.',
        'La formazione duale esiste e cresce nell’istruzione professionale (l’alleanza di Deloitte ha 28 posti) e i contratti formativi sono nello statuto dei lavoratori, ma per i laureati l’equivalente è il tirocinio, non l’apprendistato.', 'es-deloitte-dual es-estatuto ours']
    ] },
    { k: 'publicw', v: 'mid', t: [
      ['Public exams are a large channel: the 2026 offer for the state administration authorises 16,988 free-entry places and more than 37,000 with police and armed forces according to a preparation site. We found no figure for the public sector’s share of graduate hires.',
        'I concorsi pubblici sono un canale ampio: l’offerta 2026 per l’amministrazione statale autorizza 16.988 posti ad accesso libero e più di 37.000 con polizia e forze armate secondo un sito di preparazione. Non abbiamo trovato alcuna cifra sulla quota di assunzioni di laureati nel settore pubblico.', 'es-oep es-oep-prep']
    ] },
    { k: 'sponsorr', v: 'some', t: [
      ['Ordinary non-EU hiring is tied to the national employment situation (a hard-to-fill occupation or a negative certificate from the public employment service), and the fast route for qualified staff runs through the large-companies unit UGE-CE. Large groups and international hubs use it; small firms rarely do. The rules are on the Visas page.',
        'L’assunzione ordinaria di cittadini extra-UE è legata alla situazione nazionale dell’occupazione (una professione di difficile copertura o un certificato negativo del servizio pubblico per l’impiego), e la via rapida per il personale qualificato passa per l’unità per le grandi imprese UGE-CE. La usano i grandi gruppi e i centri internazionali; le piccole aziende raramente. Le regole sono nella pagina Visti.', 'es-visas ours']
    ] },
    { k: 'photo', v: 'common', t: [
      ['Not mandatory, but common: Expatica says recruiters expect to see a professional passport-style photo in a top corner; it is less usual in tech.',
        'Non obbligatoria, ma comune: Expatica osserva che i selezionatori si aspettano una foto professionale in stile tessera in un angolo in alto; è meno usuale nel tech.', 'es-expatica ours']
    ] },
    { k: 'cv', v: 'two', t: [
      ['A typed CV of no more than two A4 pages, in Spanish unless the ad is in English, with personal details, a short profile, experience, education, languages at CEFR levels and extra information.',
        'Un CV scritto al computer di non più di due pagine A4, in spagnolo a meno che l’annuncio sia in inglese, con dati personali, un breve profilo, esperienza, formazione, lingue con livelli QCER e informazioni aggiuntive.', 'es-expatica']
    ] },
    { k: 'letter', v: 'expected', t: [
      ['Expatica advises sending a cover letter of no more than one page with the CV, in English or Spanish according to the ad.',
        'Expatica consiglia di inviare insieme al CV una lettera di presentazione di non più di una pagina, in inglese o in spagnolo a seconda dell’annuncio.', 'es-expatica']
    ] },
    { k: 'refs', v: 'later', t: [
      ['We found no page that asks for references with the application; they come, if at all, at the offer stage.',
        'Non abbiamo trovato alcuna pagina che chieda le referenze insieme alla candidatura; arrivano, se arrivano, alla fase dell’offerta.', 'ours']
    ] },
    { k: 'docs', v: 'copies', t: [
      ['Employers ask for the CV and, for graduates, a copy of the degree and transcript; certified copies and sworn translations are needed for degree recognition, not for ordinary applications.',
        'I datori chiedono il CV e, per i laureati, una copia del titolo e della trascrizione degli esami; copie certificate e traduzioni giurate servono per il riconoscimento del titolo, non per le candidature ordinarie.', 'es-ua-homolog ours']
    ] },
    { k: 'salary', v: 'later', t: [
      ['Expatica advises not raising pay in the interview and waiting until the offer or until the employer asks.',
        'Expatica consiglia di non parlare della retribuzione al colloquio e di aspettare l’offerta o la domanda del datore.', 'es-expatica']
    ] },
    { k: 'check', v: 'some', t: [
      ['We found no page on background checks in Spanish graduate hiring; banks and the public sector can be expected to check more than start-ups.',
        'Non abbiamo trovato alcuna pagina sui controlli dei precedenti nelle assunzioni di laureati in Spagna; ci si può aspettare più controlli da banche e settore pubblico che dalle start-up.', 'ours']
    ] },
    { k: 'contact', v: 'people', t: [
      ['Contacts open many doors: 40% of Spaniards said a close contact got them a job (2020), and 57.8% of people searching asked family or friends.',
        'I contatti aprono molte porte: il 40% degli spagnoli ha detto che un contatto stretto gli ha procurato un lavoro (2020), e il 57,8% di chi cerca ha chiesto a familiari o amici.', 'es-local']
    ] },
    { k: 'abroad', v: 'hard', t: [
      ['Internships need a university agreement, and Expatica says interviews are usually in person, though virtual ones exist and the Politécnica de Madrid fair is online. A non-EU hire from abroad needs a permit first.',
        'I tirocini richiedono una convenzione universitaria, e Expatica osserva che i colloqui sono di solito di persona, anche se esistono quelli virtuali e la fiera della Politécnica de Madrid è online. Un assunto extra-UE dall’estero ha prima bisogno di un permesso.', 'es-expatica es-upm-fair es-visas']
    ] },
    { k: 'language', v: 'local', t: [
      ['Only 5.8% of Spanish job ads say Spanish is not needed, mostly in low-paid work; outside banking, consulting and tech, Spanish is required.',
        'Solo il 5,8% degli annunci spagnoli dice che lo spagnolo non serve, per lo più in lavori poco pagati; fuori da banca, consulenza e tech, lo spagnolo è necessario.', 'es-lang']
    ] }
  ],

  rows: {
    process: [
      ['Deloitte Spain has no fixed application period: you apply to an opening on its jobs site and HR reviews applications as they arrive; it asks for a high level of English, no experience, and calls the competency-based interview the key to standing out. Santander’s selection is run by its people and culture team with Universia.',
        'Deloitte Spagna non ha un periodo di candidatura fisso: ci si candida a un’offerta sul suo sito e le risorse umane esaminano le candidature man mano che arrivano; chiede un livello alto di inglese, nessuna esperienza, e indica il colloquio per competenze come la chiave per distinguersi. La selezione di Santander è gestita dalla sua direzione persone e cultura con Universia.', 'es-deloitte-faq es-santander-pr'],
      ['BBVA’s Be Talent data programme shows a heavy filter: more than 700 registered, 53 reached the final in-person datathon, where managers watch teamwork, innovation, critical thinking and adaptability, and 23 were hired.',
        'Il programma dati Be Talent di BBVA mostra un filtro severo: più di 700 iscritti, 53 sono arrivati al datathon finale in presenza, dove i responsabili osservano lavoro di squadra, innovazione, pensiero critico e adattabilità, e 23 sono stati assunti.', 'es-bbva-bt'],
      ['For ordinary jobs Expatica describes an in-person, one-to-one interview (sometimes a panel or video call), with one interview for entry-level roles and two or three for senior ones; dress formally, arrive a few minutes early and use usted. We found no source for the time from application to offer.',
        'Per i lavori ordinari Expatica descrive un colloquio di persona, individuale (a volte con una commissione o in videochiamata), con un colloquio per i ruoli d’ingresso e due o tre per quelli senior; vestirsi in modo formale, arrivare con qualche minuto di anticipo e dare del usted. Non abbiamo trovato alcuna fonte sul tempo che passa dalla candidatura all’offerta.', 'es-expatica ours']
    ],
    offer: [
      ['The Workers’ Statute (Estatuto de los Trabajadores) sets probation of up to six months for graduate technicians (técnicos titulados) and two months for other workers (three in firms under 25 staff), unless the collective agreement says otherwise; a clause is void if you already did the same job at the firm.',
        'Lo Statuto dei lavoratori (Estatuto de los Trabajadores) fissa una prova fino a sei mesi per i tecnici laureati (técnicos titulados) e due mesi per gli altri lavoratori (tre nelle aziende con meno di 25 dipendenti), salvo diversa previsione del contratto collettivo; la clausola è nulla se hai già svolto lo stesso lavoro nell’azienda.', 'es-estatuto'],
      ['Workers are entitled to two extra payments a year, one at Christmas and one in a month set by agreement, and a collective agreement may spread them over the twelve monthly salaries, so ask whether a quoted salary is for 12 or 14 payments.',
        'I lavoratori hanno diritto a due mensilità aggiuntive all’anno, una a Natale e una in un mese stabilito da accordo, e un contratto collettivo può distribuirle sulle dodici mensilità, quindi chiedi se uno stipendio indicato è su 12 o su 14 mensilità.', 'es-estatuto'],
      ['Training contracts have their own terms: no probation in the alternation contract and up to one month in the work-experience contract. Expatica says to leave pay out of the interview and wait for the offer; we found no page on the time employers give you to decide.',
        'I contratti formativi hanno condizioni proprie: nessuna prova nel contratto in alternanza e fino a un mese in quello per esperienza professionale. Expatica dice di non parlare di retribuzione al colloquio e di aspettare l’offerta; non abbiamo trovato alcuna pagina sul tempo che i datori danno per decidere.', 'es-estatuto es-expatica ours']
    ],
    sponsor: [
      ['An ordinary non-EU employment permit depends on the national employment situation: the occupation must be on the public employment service’s hard-to-fill list or the service must issue a negative certificate; the job must be full time for at least a year and pay at least the minimum wage of €17,094 a year, and the employer pays a fee of €203.84 (€407.71 above twice the minimum wage).',
        'Un permesso di lavoro ordinario per cittadini extra-UE dipende dalla situazione nazionale dell’occupazione: la professione deve essere nell’elenco di difficile copertura del servizio pubblico per l’impiego oppure il servizio deve rilasciare un certificato negativo; il lavoro deve essere a tempo pieno per almeno un anno e pagare almeno il salario minimo di 17.094 € l’anno, e il datore paga una tassa di 203,84 € (407,71 € oltre il doppio del salario minimo).', 'es-visas'],
      ['The qualified-staff route (EU Blue Card or the highly qualified professional authorisation, handled by UGE-CE) needs a salary of €41,356.36 a year, reduced to €33,085.09 for the Blue Card of a graduate of the last three years; this is above typical entry pay, so juniors rely on the study-to-work switch with a job offer or on the one-year job-search stay after a Spanish degree, after which an ordinary contract is exempt from the labour-market test.',
        'La via per il personale qualificato (Carta blu UE o autorizzazione per professionisti altamente qualificati, gestita dalla UGE-CE) richiede uno stipendio di 41.356,36 € l’anno, ridotto a 33.085,09 € per la Carta blu di un laureato degli ultimi tre anni; è sopra la retribuzione tipica d’ingresso, perciò i junior si affidano al passaggio da studio a lavoro con un’offerta o al soggiorno di un anno per cercare lavoro dopo una laurea spagnola, dopo il quale un contratto ordinario è esente dal test del mercato del lavoro.', 'es-visas'],
      ['Raise it at the first interview: a firm with an international-mobility team will know the UGE-CE route; a small one will think of the labour-market test and the wait, which the guide puts at four to eight months. EU and EEA citizens need no permit.',
        'Sollevalo al primo colloquio: un’azienda con un team di mobilità internazionale conoscerà la via UGE-CE; una piccola penserà al test del mercato del lavoro e all’attesa, che la guida stima in quattro-otto mesi. I cittadini UE e SEE non hanno bisogno di alcun permesso.', 'es-visas ours']
    ],
    where: [
      ['Portals: Tecnoempleo for tech (with a first-job section), the public employment service SEPE (job offers and the Youth Guarantee), Deloitte’s jobs site for its 22 office locations, Santander Future Talents and BBVA’s global jobs portal; the Politécnica de Madrid runs a JobTeaser portal for its students.',
        'Portali: Tecnoempleo per il tech (con una sezione per il primo impiego), il servizio pubblico per l’impiego SEPE (offerte di lavoro e Garanzia Giovani), il sito di lavoro di Deloitte per le sue 22 sedi, Santander Future Talents e il portale globale di BBVA; la Politécnica de Madrid gestisce un portale JobTeaser per i suoi studenti.', 'es-tecnoempleo es-sepe es-deloitte-faq es-santander-hq es-upm-fair es-bbva-gtp'],
      ['Fairs: university forums such as UCMpleo (Madrid, March), Carlos III (October), the Politécnica virtual fair (October), Cantabria and Comillas; the Mastermania guide lists the season’s fairs.',
        'Fiere: forum universitari come UCMpleo (Madrid, marzo), Carlos III (ottobre), la fiera virtuale della Politécnica (ottobre), Cantabria e Comillas; la guida di Mastermania elenca le fiere della stagione.', 'es-ucm-fair es-upm-fair es-mastermania'],
      ['Public posts: the state’s oposiciones are announced in the Boletín Oficial del Estado after the annual public employment offer; Universia, which runs part of Santander’s selection, is a graduate-jobs network.',
        'Posti pubblici: le oposiciones dello Stato sono annunciate nel Boletín Oficial del Estado dopo l’offerta annuale di impiego pubblico; Universia, che gestisce parte della selezione di Santander, è una rete di lavoro per laureati.', 'es-oep es-santander-pr']
    ],
    mistakes: [
      ['Treating a prácticas as a promise: half of the graduates in one internship programme received no offer (52% did).',
        'Trattare le prácticas come una promessa: la metà dei laureati in un programma di tirocini non ha ricevuto offerte (il 52% sì).', 'es-fue'],
      ['Missing the programme window: Santander’s headquarters programme closed on 26 April in 2026 and reopens in March 2027, and its retail programme closed on 31 May.',
        'Perdere la finestra del programma: il programma della sede centrale di Santander si è chiuso il 26 aprile nel 2026 e riapre a marzo 2027, e quello retail si è chiuso il 31 maggio.', 'es-santander-pr es-santander-hq'],
      ['Sending an English CV by default, or one longer than two pages: Expatica advises Spanish unless the ad is in English, and no more than two A4 pages.',
        'Mandare per default un CV in inglese, o più lungo di due pagine: Expatica consiglia lo spagnolo a meno che l’annuncio sia in inglese, e non più di due pagine A4.', 'es-expatica'],
      ['Raising pay in the first interview, which Expatica says to avoid.',
        'Parlare di retribuzione al primo colloquio, cosa che Expatica consiglia di evitare.', 'es-expatica'],
      ['Assuming a degree is recognised: regulated professions need homologation by the Ministry, with sworn translations.',
        'Dare per scontato che un titolo sia riconosciuto: le professioni regolamentate richiedono l’omologazione da parte del Ministero, con traduzioni giurate.', 'es-ua-homolog']
    ]
  },

  lang: [
    { f: 'finance', v: 'bilingual', t: [
      ['Investment banking and trading are the usual niches where English can be enough; retail banking works in Spanish. Deloitte and Santander both operate in international environments, and no source we read states a language certificate.',
        'Investment banking e trading sono le nicchie abituali dove l’inglese può bastare; la banca al dettaglio lavora in spagnolo. Deloitte e Santander operano entrambe in ambienti internazionali, e nessuna fonte letta indica un certificato linguistico.', 'es-lib-lang es-santander-hq es-deloitte-faq ours']
    ] },
    { f: 'accounting', v: 'bilingual', t: [
      ['Audit and tax need Spanish for client work; Deloitte also asks for a high level of English from interns, with no certificate mentioned on the page we read.',
        'Revisione e fiscale richiedono lo spagnolo per il lavoro con i clienti; Deloitte chiede anche un livello alto di inglese ai tirocinanti, senza menzionare alcun certificato nella pagina letta.', 'es-lib-lang es-deloitte-faq']
    ] },
    { f: 'consulting', v: 'bilingual', t: [
      ['International consulting is one of the niches where Spanish can be waived; Deloitte’s Spanish student programmes ask for high English and some set a level (the risk-advisory experience for STEM students lists C1).',
        'La consulenza internazionale è una delle nicchie in cui lo spagnolo può non servire; i programmi per studenti di Deloitte Spagna chiedono un inglese alto e alcuni fissano un livello (un’esperienza in risk advisory per studenti STEM indica C1).', 'es-lib-lang es-deloitte-faq es-deloitte-drisk']
    ] },
    { f: 'marketing', v: 'local', t: [
      ['Marketing and FMCG sales work in Spanish, with clients and consumers as the audience.',
        'Marketing e vendite FMCG lavorano in spagnolo, con clienti e consumatori come pubblico.', 'es-lib-lang']
    ] },
    { f: 'tech', v: 'bilingual', t: [
      ['International hubs hire developers in English: the Indeed study’s example is an English-speaking developer in Barcelona. Beyond them, Spanish is expected, and BBVA and Santander run their data programmes in Spain.',
        'I centri internazionali assumono sviluppatori in inglese: l’esempio dello studio Indeed è uno sviluppatore anglofono a Barcellona. Oltre a questi lo spagnolo è atteso, e BBVA e Santander svolgono i loro programmi dati in Spagna.', 'es-lang es-bbva-bt ours']
    ] },
    { f: 'public', v: 'local', t: [
      ['Public exams are in Spanish and the civil service requires Spanish or EU nationality; we found no source on the exam language in regions with their own co-official language.',
        'I concorsi pubblici sono in spagnolo e l’impiego pubblico di ruolo richiede la cittadinanza spagnola o dell’UE; non abbiamo trovato alcuna fonte sulla lingua dell’esame nelle regioni con una lingua co-ufficiale propria.', 'es-ebep ours']
    ] }
  ],

  programmes: [
    { n: 'Graduate Program HQ (12 months, Madrid)', o: 'Santander', f: 'finance', in: null, w: [3, 4], lang: 'ES EN', intl: 'unknown', ids: 'es-santander-hq es-santander-pr' },
    { n: 'Summer Internship and Graduate Programs in SCIB and Wealth Management & Insurance', o: 'Santander', f: 'finance', in: 260, w: [8, 9], lang: 'EN ES', intl: 'unknown', ids: 'es-santander-pr' },
    { n: 'Be Talent (data scientists)', o: 'BBVA', f: 'ai', in: 23, w: null, lang: 'ES EN', intl: 'unknown', ids: 'es-bbva-bt' },
    { n: 'Autumn intake of graduates and interns', o: 'KPMG Spain', f: 'accounting', in: null, w: null, lang: 'ES EN', intl: 'unknown', ids: 'es-kpmg' },
    { n: 'DRisk Experience (six weeks in July)', o: 'Deloitte Spain', f: 'consulting', in: 6, w: null, lang: 'EN ES', intl: 'unknown', ids: 'es-deloitte-drisk' },
    { n: 'Student and graduate internships', o: 'Deloitte Spain', f: 'consulting', in: null, w: null, lang: 'ES EN', intl: 'unknown', ids: 'es-deloitte-faq' },
    { n: 'FP Dual alliance (higher vocational programmes)', o: 'Deloitte Spain', f: 'business', in: 28, w: null, lang: 'ES', intl: 'local', ids: 'es-deloitte-dual' }
  ],

  outcomes: [
    ['In 2025, 84.9% of Spanish tertiary graduates aged 20 to 34 who left education up to three years earlier were in work, against 85.3% in the EU; unemployment among under-25s was 22.7% in August 2026.',
      'Nel 2025 l’84,9% dei laureati spagnoli di 20-34 anni usciti dagli studi da non più di tre anni lavorava, contro l’85,3% nell’UE; la disoccupazione degli under 25 era del 22,7% nell’agosto 2026.', 'es-grad-eurostat es-unemp-eurostat'],
    ['No national conversion rate exists for internships: the Fundación Universidad-Empresa reports 52% of graduates at some partner companies received an offer, and 85% of young people on its internships say they have a contract matching their degree within a year.',
      'Non esiste un tasso nazionale di conversione dei tirocini: la Fundación Universidad-Empresa riporta che il 52% dei laureati presso alcune aziende partner ha ricevuto un’offerta, e l’85% dei giovani nei suoi tirocini dice di avere entro un anno un contratto coerente con il proprio titolo.', 'es-fue']
  ],

  sources: {
    'es-iberia': ['employer-stated', 'Admetia research library: places/iberia-and-nordics.md §6 (Santander careers page and press release, 21 April 2026)', 'research/places/iberia-and-nordics.md', '2026-10-02'],
    'es-pipelines': ['employer-stated', 'Admetia research library: getting-in/employer-pipelines.md §5 (Esade Careers)', 'research/getting-in/employer-pipelines.md', '2026-10-02'],
    'es-lang': ['data', 'Indeed Hiring Lab: how language flexibility shapes job opportunities for migrants, 10 October 2024', 'https://hiringlab.indeed.com/uk/blog/2024/10/10/how-language-flexibility-shapes-job-opportunities-for-migrants/', '2026-10-02'],
    'es-lib-lang': ['practitioner consensus', 'Admetia research library: places/iberia-and-nordics.md §2 (language: where English-only works, where Spanish is needed)', 'research/places/iberia-and-nordics.md', '2026-10-08'],
    'es-lib-pay': ['data', 'Admetia research library: places/iberia-and-nordics.md §3 (Fundación BBVA-Ivie contribution base of master’s and bachelor’s graduates)', 'research/places/iberia-and-nordics.md', '2026-10-08'],
    'es-local': ['data', 'The Local Spain: six out of ten Spaniards rely on word of mouth to find a job (CSIC study 2020, INE survey), 14 November 2022', 'https://www.thelocal.es/20221114/six-out-of-ten-spaniards-rely-on-word-of-mouth-to-find-a-job-study', '2026-10-08'],
    'es-fue': ['data', 'Fundación Universidad-Empresa figures, reported by Qué!, 26 July 2021', 'https://www.que.es/2021/07/26/mitad-becarios-contratados-empresas-practicas/', '2026-10-08'],
    'es-expatica': ['practitioner consensus', 'Expatica: Spanish CV and job interview tips', 'https://expatica.com/es/working/finding-a-job/spanish-resume-102381', '2026-10-08'],
    'es-big4': ['practitioner consensus', 'iProfesional, citing El Confidencial: Big Four cut junior hiring, 700 to 1,400 places in Spain', 'https://www.iprofesional.com/tecnologia/436685-la-ia-reemplaza-perfiles-juniors-consultoras-big-four-eliminan-1400-puestos-de-trabajo', '2026-10-07'],
    'es-junior': ['practitioner consensus', 'Ecosistema Startup: Spain, 52% of companies will cut junior offers because of AI (DigitalES and Barómetro del Talento Digital 2026)', 'https://ecosistemastartup.com/espana-el-52-de-empresas-recortara-ofertas-junior-por-ia/', '2026-10-07'],
    'es-estatuto': ['data', 'BOE: Estatuto de los Trabajadores (consolidated text), articles 11, 14 and 31', 'https://www.boe.es/buscar/act.php?id=BOE-A-2015-11430', '2026-10-08'],
    'es-ebep': ['data', 'BOE: Estatuto Básico del Empleado Público, articles 55 to 57 and 61', 'https://www.boe.es/buscar/act.php?id=BOE-A-2015-11719', '2026-10-08'],
    'es-oep': ['data', 'BOE: Real Decreto 387/2026 approving the 2026 public employment offer (annexes of free-entry places)', 'https://www.boe.es/buscar/doc.php?id=BOE-A-2026-9946', '2026-10-08'],
    'es-oep-prep': ['practitioner consensus', 'Prepara Oposiciones: OEP 2026 for the State, 27,232 places and more than 37,000 with police and armed forces (AI-assisted summary; the BOE text prevails)', 'https://preparaoposiciones.com/blog/noticias/oep-2026-estado-aprobada/', '2026-10-08'],
    'es-deloitte-faq': ['employer-stated', 'Deloitte Spain: frequently asked questions for students (English level, no experience, application at any time, 22 offices)', 'https://www.deloitte.com/es/es/careers/explore-your-fit/students/preguntas-frecuentes.html', '2026-10-08'],
    'es-deloitte-drisk': ['employer-stated', 'Deloitte Spain: DRisk Experience (six weeks in July, Madrid and Barcelona, STEM students, English C1, six scholarships)', 'https://www.deloitte.com/es/es/careers/explore-your-fit/students/drisk-experience.html', '2026-10-08'],
    'es-deloitte-dual': ['employer-stated', 'Deloitte Spain: alliance for dual vocational training (FP Dual), 28 places', 'https://www.deloitte.com/es/es/careers/explore-your-fit/students/deloitte-fp-dual.html', '2026-10-08'],
    'es-kpmg': ['employer-stated', 'KPMG Spain press release: more than 900 hires in September and October 2024, 79% recent graduates or interns', 'https://kpmg.com/es/es/sala-prensa/notas-prensa/2024/09/kpmg-contratara-mas-900-profesionales-septiembre-octubre.html', '2026-10-08'],
    'es-santander-hq': ['employer-stated', 'Santander: Graduate Program HQ (Madrid, 12 months, applications open March 2027)', 'https://www.santander.com/en/careers/where-you-want-to-create-an-impact/santander-future-talent/graduate-program-hq', '2026-10-08'],
    'es-santander-pr': ['employer-stated', 'Santander press release, April 2026: more than 400 job offers in 10 countries (deadlines, selection by People, Culture and Organization with Universia)', 'https://www.santander.com/en/press-room/press-releases/2026/04/santander-to-make-more-than-400-job-offers-to-young-people-in-10-countries', '2026-10-08'],
    'es-bbva-bt': ['employer-stated', 'BBVA: hires 23 young data scientists through its Be Talent programme (28 July 2025)', 'https://www.bbva.com/en/innovation/bbva-hires-23-young-data-scientists-through-its-be-talent-program/', '2026-10-08'],
    'es-bbva-gtp': ['employer-stated', 'BBVA: searching for young talent for its digital transformation, Graduate Training Programme (13 March 2017; applications usually open in September, global jobs portal)', 'https://www.bbva.com/en/bbva-searching-young-talent-for-digital-transformation/', '2026-10-08'],
    'es-tecnoempleo': ['employer-stated', 'Tecnoempleo: Spanish IT and telecoms job board (2,909 IT offers on 8 October 2026, first-job section)', 'https://www.tecnoempleo.com', '2026-10-08'],
    'es-sepe': ['data', 'SEPE (public employment service): job offers, Youth Guarantee, training', 'https://www.sepe.es/HomeSepe/', '2026-10-08'],
    'es-ucm-fair': ['employer-stated', 'Universidad Complutense: UCMpleo26 employment forum, 10 to 12 March 2026, more than 90 organisations', 'https://www.ucm.es/foro-empleo-complutense-2026-ucmpleo26', '2026-10-08'],
    'es-upm-fair': ['employer-stated', 'Universidad Politécnica de Madrid: virtual employment fair 21 to 23 October 2026, JobTeaser portal', 'https://www.upm.es/Estudiantes/Empleo/TalentUPM', '2026-10-08'],
    'es-mastermania': ['practitioner consensus', 'Mastermania: employment fairs 2026-2027 at Spanish universities (dates, companies, activities)', 'https://www.mastermania.com/noticias_masters/ferias-de-empleo-2026-2027-en-las-universidades-espanolas-AMP-9281.html', '2026-10-08'],
    'es-ua-homolog': ['data', 'Universidad de Alicante: homologation of foreign degrees (homologación vs equivalencia, Real Decreto 889/2022, sworn translation)', 'https://web.ua.es/en/secretaria-eps/homologacion-de-titulos-extranjeros.html', '2026-10-08'],
    'es-visas': ['practitioner consensus', 'Admetia library: Spain visas and immigration guide (employment authorisation, UGE-CE, Blue Card, art. 190 switch)', 'research/visas_immigration/spain/spain_visas_immigration_guide.md', '2026-10-08'],
    'es-unemp-eurostat': ['data', 'Eurostat: une_rt_m, unemployment by sex and age, August 2026', 'https://ec.europa.eu/eurostat/databrowser/view/une_rt_m/default/table?lang=en', '2026-10-03'],
    'es-grad-eurostat': ['data', 'Eurostat: edat_lfse_24 recent graduates in work, 2025', 'https://ec.europa.eu/eurostat/databrowser/view/edat_lfse_24/default/table?lang=en', '2026-10-03']
  }
});
