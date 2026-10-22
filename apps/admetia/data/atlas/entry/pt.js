/* How hiring works: Portugal. From research/places/iberia-and-nordics.md §2 and
 * §6, with reads on 7 and 8 Oct 2026 (IEFP, DGES, Lei 23/2007, Talent Portugal pages for
 * Novobanco and BPI, Técnico, Nova SBE and Católica fairs, Net-Empregos, Expatica,
 * E-Konomista, Cofidis and Garrigues on the Labour Code, a municipal public-sector notice). */
ATLAS.addEntry({
  id: 'PT',
  checked: '2026-10-08',
  review: '2027-04-08',

  lead: [
    ['In Portugal many graduates start through a professional internship (estágio profissional), often part-funded by the state employment service, before a firm offers a contract. Large groups and the shared-service and tech centres in Lisbon and Porto also hire graduates directly, some in English.',
      'In Portogallo molti laureati iniziano con un tirocinio professionale (estágio profissional), spesso cofinanziato dal servizio pubblico per l’impiego, prima che un’azienda offra un contratto. I grandi gruppi e i centri di servizi e tecnologici di Lisbona e Porto assumono anche laureati direttamente, alcuni in inglese.', 'pt-iefp pt-iberia']
  ],

  ways: [
    { name: ['State-supported professional internship (Estágios +Talento)', 'Tirocinio professionale con sostegno pubblico (Estágios +Talento)'], r: 'intern', p: 'first intern', basis: 'data', t: [
      ['IEFP’s Estágios +Talento is open to people up to 35 registered with IEFP who hold a bachelor’s, master’s or doctorate. The gross monthly grant is €1,181.69 at bachelor’s level and €1,289.11 at master’s level; IEFP pays 65% of it, or 80% in some cases, such as when the host hires the intern full-time on a permanent contract within 20 working days.',
        'Gli Estágios +Talento dell’IEFP sono aperti a chi ha fino a 35 anni, iscritto all’IEFP, con una laurea triennale, magistrale o un dottorato. La borsa mensile lorda è di 1.181,69 € per la laurea triennale e di 1.289,11 € per la magistrale; l’IEFP ne paga il 65%, oppure l’80% in alcuni casi, ad esempio se l’ospitante assume il tirocinante a tempo pieno e indeterminato entro 20 giorni lavorativi.', 'pt-iefp-est'],
      ['In an evaluation from 2016, 38% of IEFP interns found a job within 12 months, and only 16% at the firm where they trained. The next application window runs from 12 October to 7 December 2026, or until the budget runs out.',
        'In una valutazione del 2016, il 38% dei tirocinanti dell’IEFP ha trovato un lavoro entro 12 mesi, e solo il 16% nell’azienda in cui si era formato. La prossima finestra di candidatura va dal 12 ottobre al 7 dicembre 2026, o fino a esaurimento del bilancio.', 'pt-iefp pt-iefp-est']
    ] },
    { name: ['Graduate programmes of banks, energy and retail groups', 'Programmi per laureati di banche, gruppi energetici e della distribuzione'], r: 'scheme', p: 'first', basis: 'consensus', t: [
      ['BPI (12 months), Novobanco (9 months), EDP (18 months), Galp (one year), Jerónimo Martins (two years) and Sonae (Contacto, more than 80 places in 2026) all run annual programmes, mostly with applications between February and June and a September start.',
        'BPI (12 mesi), Novobanco (9 mesi), EDP (18 mesi), Galp (un anno), Jerónimo Martins (due anni) e Sonae (Contacto, più di 80 posti nel 2026) hanno tutti programmi annuali, per lo più con candidature tra febbraio e giugno e inizio a settembre.', 'pt-bpi pt-nb pt-edp pt-galp-gen pt-jm-trainee pt-sonae-contacto'],
      ['Places are scarce: Jerónimo Martins took 11 people from more than 1,400 applications in 2025. The Big Four also run graduate programmes; KPMG Portugal added 223 recent graduates in 2024.',
        'I posti sono pochi: Jerónimo Martins ha preso 11 persone da oltre 1.400 candidature nel 2025. Anche le Big Four hanno programmi per laureati; KPMG Portogallo ha inserito 223 neolaureati nel 2024.', 'pt-jm-trainee pt-kpmg']
    ] },
    { name: ['University job fairs and career days', 'Fiere del lavoro e giornate carriera nelle università'], r: 'campus', p: 'first intern', basis: 'consensus', t: [
      ['Técnico’s Jobshop (28 to 30 April 2026) calls itself the largest university job fair in Portugal; Nova SBE’s career fair on 17 September 2026 brought 43 organisations, including Bain, Accenture, KPMG, the ECB and the OECD; Católica’s RUMO in Porto in November 2025 had 67 companies.',
        'Il Jobshop del Técnico (dal 28 al 30 aprile 2026) si definisce la più grande fiera del lavoro universitaria del Portogallo; la fiera del lavoro della Nova SBE del 17 settembre 2026 ha riunito 43 organizzazioni, tra cui Bain, Accenture, KPMG, la BCE e l’OCSE; il RUMO della Católica a Porto nel novembre 2025 ha avuto 67 aziende.', 'pt-jobshop pt-novasbe-fair pt-rumo']
    ] },
    { name: ['Posted vacancies, including shared-service and tech centres', 'Annunci pubblicati, compresi centri di servizi condivisi e tecnologici'], r: 'direct', p: 'first exp', basis: 'consensus', t: [
      ['Net-Empregos, which calls itself Portugal’s largest job portal, showed 61,690 active offers on 8 October 2026, with a filter for internships (estágio).',
        'Net-Empregos, che si definisce il maggior portale di lavoro del Portogallo, mostrava 61.690 offerte attive l’8 ottobre 2026, con un filtro per i tirocini (estágio).', 'pt-ne'],
      ['Tech employers in Lisbon are mostly foreign engineering hubs, and recent lay-offs hit junior developers first; Landing.jobs, a tech job platform with an office in Lisbon, also offers visa and relocation help. This is also the usual route for the experienced hire.',
        'I datori di lavoro tecnologici di Lisbona sono per lo più centri di ingegneria stranieri, e i recenti licenziamenti hanno colpito prima gli sviluppatori junior; Landing.jobs, una piattaforma di lavoro tecnologico con sede a Lisbona, offre anche aiuto per visti e trasferimento. È anche la strada abituale per chi ha esperienza.', 'pt-lisbon pt-landing']
    ] },
    { name: ['Public-sector competitions (procedimento concursal)', 'Concorsi nel settore pubblico (procedimento concursal)'], r: 'public', p: 'first exp', basis: 'consensus', t: [
      ['Public bodies open competitions under the general public-employment law (LTFP) and publish the notice in the Diário da República and in full on the Bolsa de Emprego Público (BEP). A municipality’s notice of August 2026 for one civil-engineering post gave 10 working days to apply.',
        'Gli enti pubblici aprono concorsi in base alla legge generale sul lavoro pubblico (LTFP) e pubblicano l’avviso nel Diário da República e per intero nella Bolsa de Emprego Público (BEP). L’avviso di un comune dell’agosto 2026 per un posto di ingegneria civile dava 10 giorni lavorativi per candidarsi.', 'pt-bep']
    ] },
    { name: ['Personal recommendation (a cunha)', 'Raccomandazione personale (la cunha)'], r: 'network', p: 'first exp', basis: 'anecdotal', t: [
      ['A personal recommendation still opens doors in smaller firms; international centres and the large groups rely on ads, fairs and structured programmes. No survey read measures how many hires come this way.',
        'Una raccomandazione personale apre ancora porte nelle aziende più piccole; i centri internazionali e i grandi gruppi si affidano ad annunci, fiere e programmi strutturati. Nessuna indagine letta misura quante assunzioni avvengano così.', 'ours']
    ] }
  ],

  cycle: [
    ['Expats rank Portugal last of 31 countries for career prospects, and unemployment among under-25s was 19.8% in August 2026 against 15.4% in the EU; in a slowdown the subsidised internship becomes the main door.',
      'Gli expat mettono il Portogallo ultimo di 31 paesi per prospettive di carriera, e la disoccupazione degli under 25 era del 19,8% nell’agosto 2026 contro il 15,4% nell’UE; in un rallentamento il tirocinio sovvenzionato diventa la porta principale.', 'pt-iberia pt-eurostat-u ours'],
    ['The programme calendar runs from February to June: BPI opened in February and March, Sonae’s Contacto closed on 6 April, and Novobanco took applications from 20 April to 14 June 2026. Most programmes start in September.',
      'Il calendario dei programmi va da febbraio a giugno: BPI ha aperto a febbraio e marzo, il Contacto di Sonae si è chiuso il 6 aprile e Novobanco ha raccolto candidature dal 20 aprile al 14 giugno 2026. La maggior parte dei programmi inizia a settembre.', 'pt-bpi pt-sonae-contacto pt-nb'],
    ['The state internship has its own window, from 12 October to 7 December 2026; outside programmes and internships, vacancies are posted all year.',
      'Il tirocinio statale ha la sua finestra, dal 12 ottobre al 7 dicembre 2026; fuori da programmi e tirocini, gli annunci sono pubblicati tutto l’anno.', 'pt-iefp-est pt-ne']
  ],

  schools: [
    ['Nova SBE’s master’s in management is 2nd in the FT 2026 table, with 93% international students, and Católica Lisbon is 25th (97% employed at three months); many Nova graduates work outside Portugal, so its pay figure is not Portuguese pay.',
      'Il master in management della Nova SBE è 2° nella classifica FT 2026, con il 93% di studenti internazionali, e la Católica di Lisbona è 25ª (97% occupati a tre mesi); molti laureati della Nova lavorano fuori dal Portogallo, quindi il dato retributivo non è un salario portoghese.', 'pt-iberia'],
    ['Employers recruit visibly at Técnico (Lisbon), Nova SBE and Católica (Porto), where Banco de Portugal, BPI, CGD, KPMG, Deloitte and PwC were among the 67 companies at RUMO.',
      'I datori di lavoro reclutano in modo visibile al Técnico (Lisbona), alla Nova SBE e alla Católica (Porto), dove Banco de Portugal, BPI, CGD, KPMG, Deloitte e PwC erano tra le 67 aziende al RUMO.', 'pt-jobshop pt-novasbe-fair pt-rumo'],
    ['Foreign degrees need no recognition for most private-sector jobs; the DGES offers automatic recognition for €32.20 if you want a certificate of the Portuguese equivalent.',
      'I titoli esteri non richiedono riconoscimento per la maggior parte dei lavori nel settore privato; la DGES offre il riconoscimento automatico per 32,20 € se vuoi un certificato dell’equivalente portoghese.', 'pt-dges']
  ],

  events: [
    ['Técnico Lisboa’s Jobshop, run by the students’ union AEIST, took place from 28 to 30 April 2026 on the Alameda campus, with workshops, roundtables and a finalist check-in.',
      'Il Jobshop del Técnico Lisboa, organizzato dall’associazione studentesca AEIST, si è tenuto dal 28 al 30 aprile 2026 nel campus di Alameda, con workshop, tavole rotonde e un check-in per i laureandi.', 'pt-jobshop'],
    ['The Nova SBE Career Fair of 17 September 2026 had 43 organisations from 50 markets, about 2,500 students expected and, for the first time, Citi, the ECB, the OECD and TikTok.',
      'La Nova SBE Career Fair del 17 settembre 2026 ha avuto 43 organizzazioni da 50 mercati, circa 2.500 studenti attesi e, per la prima volta, Citi, la BCE, l’OCSE e TikTok.', 'pt-novasbe-fair'],
    ['Católica’s RUMO in Porto was held on 12 and 13 November 2025 with 67 companies from banking, pharmaceuticals, IT and human resources, with CV sessions for students.',
      'Il RUMO della Católica a Porto si è tenuto il 12 e 13 novembre 2025 con 67 aziende di banche, farmaceutica, informatica e risorse umane, con sessioni sul CV per gli studenti.', 'pt-rumo']
  ],

  fields: [
    { f: 'finance', t: [
      ['BPI’s 12-month Trainee Program (applications in February and March, start in September, open-ended contract) takes bachelor’s and master’s graduates in economics, management, engineering, mathematics or IT; Novobanco’s 9-month Young Talent Program accepts any field for corporate profiles.',
        'Il Trainee Program di 12 mesi di BPI (candidature a febbraio e marzo, inizio a settembre, contratto a tempo indeterminato) accoglie laureati triennali e magistrali in economia, gestione, ingegneria, matematica o informatica; il Young Talent Program di 9 mesi di Novobanco accetta qualsiasi area per i profili aziendali.', 'pt-bpi pt-nb'],
      ['Caixa Geral de Depósitos, Banco de Portugal and BPI were among the 67 companies at Católica’s RUMO in Porto in 2025.',
        'Caixa Geral de Depósitos, Banco de Portugal e BPI erano tra le 67 aziende al RUMO della Católica a Porto nel 2025.', 'pt-rumo']
    ] },
    { f: 'accounting', t: [
      ['The Big Four run graduate programmes for economics, management, law, engineering and technology graduates; KPMG Portugal added 223 people through its programme in 2024. KPMG, Deloitte and PwC were all at Católica’s RUMO in Porto.',
        'Le Big Four hanno programmi per laureati in economia, gestione, giurisprudenza, ingegneria e tecnologia; KPMG Portogallo ha inserito 223 persone tramite il suo programma nel 2024. KPMG, Deloitte e PwC erano tutte al RUMO della Católica a Porto.', 'pt-kpmg pt-rumo']
    ] },
    { f: 'consulting', t: [
      ['Accenture, Arthur D. Little, Bain & Company, KPMG and Simon-Kucher took part in the Nova SBE Career Fair of September 2026, which also held Talent Breakfasts for students of the school’s international master’s in management and finance.',
        'Accenture, Arthur D. Little, Bain & Company, KPMG e Simon-Kucher hanno partecipato alla Nova SBE Career Fair di settembre 2026, che ha tenuto anche colazioni di talento per gli studenti dei master internazionali della scuola in management e finanza.', 'pt-novasbe-fair']
    ] },
    { f: 'business', t: [
      ['EDP’s 18-month Global Graduate Program has three rotations from September; Generation Galp is a one-year traineeship; Jerónimo Martins’ two-year Trainee Programme takes master’s graduates preferably in management, economics or finance.',
        'Il Global Graduate Program di EDP dura 18 mesi con tre rotazioni da settembre; Generation Galp è un tirocinio di un anno; il Trainee Programme biennale di Jerónimo Martins accoglie laureati magistrali preferibilmente in management, economia o finanza.', 'pt-edp pt-galp-gen pt-jm-trainee'],
      ['Sonae’s Contacto, created in 1986, aimed to recruit more than 80 people in 2026 from economics, management, information technology, data analysis and artificial intelligence.',
        'Il Contacto di Sonae, nato nel 1986, nel 2026 puntava a reclutare più di 80 persone tra economia, management, tecnologie dell’informazione, analisi dei dati e intelligenza artificiale.', 'pt-sonae-contacto']
    ] },
    { f: 'public', t: [
      ['Central and local government hire through competitions under the LTFP, published on the BEP; the post in the notice read was permanent, required a degree in the field and professional-body membership, and was open for 10 working days.',
        'Amministrazione centrale e locale assumono con concorsi in base alla LTFP, pubblicati sulla BEP; il posto dell’avviso letto era a tempo indeterminato, richiedeva una laurea nel settore e l’iscrizione all’albo professionale, ed era aperto per 10 giorni lavorativi.', 'pt-bep']
    ] },
    { f: 'tech', t: [
      ['Lisbon’s tech employers are mostly foreign engineering hubs, the largest being Mercedes-Benz.io with about 1,100 people, but recent lay-offs hit junior developers first and hiring now centres on senior engineers. Consultancies such as Capgemini run trainee academies for computer-engineering graduates.',
        'I datori tech di Lisbona sono per lo più centri d’ingegneria stranieri, il maggiore è Mercedes-Benz.io con circa 1.100 persone, ma i recenti licenziamenti hanno colpito prima gli sviluppatori junior e le assunzioni ora si concentrano sugli ingegneri senior. Società di consulenza come Capgemini hanno accademie per trainee laureati in ingegneria informatica.', 'pt-lisbon pt-capgemini'],
      ['Novobanco’s programme has a technology profile that requires a STEM background, and BPI asks for advanced digital literacy in its IT department.',
        'Il programma di Novobanco ha un profilo tecnologico che richiede una formazione STEM, e BPI chiede un’avanzata alfabetizzazione digitale nel proprio reparto IT.', 'pt-nb pt-bpi']
    ] },
    { f: 'ai', t: [
      ['Sonae’s Contacto lists data analysis and artificial intelligence among its target fields in 2026.',
        'Il Contacto di Sonae indica nel 2026 l’analisi dei dati e l’intelligenza artificiale tra i suoi ambiti di destinazione.', 'pt-sonae-contacto']
    ] }
  ],

  customs: [
    { k: 'season', v: 'cyclical', t: [
      ['The big programmes recruit once a year: BPI in February and March, Sonae until early April, Novobanco from 20 April to 14 June, the state internship from 12 October to 7 December; ordinary vacancies are posted all year.',
        'I grandi programmi reclutano una volta l’anno: BPI a febbraio e marzo, Sonae fino a inizio aprile, Novobanco dal 20 aprile al 14 giugno, il tirocinio statale dal 12 ottobre al 7 dicembre; gli annunci ordinari sono pubblicati tutto l’anno.', 'pt-bpi pt-sonae-contacto pt-nb pt-iefp-est']
    ] },
    { k: 'masters', v: 'helpful', t: [
      ['Galp and Jerónimo Martins ask for a master’s, while BPI and Novobanco accept a bachelor’s or a master’s degree.',
        'Galp e Jerónimo Martins chiedono un master, mentre BPI e Novobanco accettano una laurea triennale o magistrale.', 'pt-galp-gen pt-jm-trainee pt-bpi pt-nb']
    ] },
    { k: 'degrees', v: 'regulated', t: [
      ['Access to most non-regulated professions is free and depends on each employer; the DGES recognises foreign degrees as a Portuguese bachelor’s, master’s or doctorate (automatic recognition €32.20, within 30 days of a complete file; level and specific recognition at public universities, within 90 days). Regulated professions need the competent professional body.',
        'L’accesso alla maggior parte delle professioni non regolamentate è libero e dipende da ogni datore di lavoro; la DGES riconosce i titoli esteri come laurea triennale, magistrale o dottorato portoghesi (riconoscimento automatico 32,20 €, entro 30 giorni da un fascicolo completo; riconoscimento di livello e specifico presso le università pubbliche, entro 90 giorni). Le professioni regolamentate richiedono l’ordine professionale competente.', 'pt-dges']
    ] },
    { k: 'brand', v: 'some', t: [
      ['Programmes and the Big Four visibly recruit at Técnico, Nova SBE and Católica fairs, but the programmes read ask for a degree and tests and name no list of schools.',
        'I programmi e le Big Four reclutano in modo visibile alle fiere del Técnico, della Nova SBE e della Católica, ma i programmi letti chiedono un titolo e dei test e non indicano un elenco di università.', 'pt-jobshop pt-novasbe-fair pt-rumo pt-nb pt-bpi']
    ] },
    { k: 'dual', v: 'little', t: [
      ['The entry at graduate level is the professional internship (estágio) of about six months, not a dual-study degree; IEFP’s scheme is for graduates registered with the service.',
        'L’ingresso a livello di laurea è il tirocinio professionale (estágio) di circa sei mesi, non un corso di studi duale; lo schema dell’IEFP è per laureati iscritti al servizio.', 'pt-iefp-est ours']
    ] },
    { k: 'publicw', v: 'mid', t: [
      ['Public bodies hire through competitions under the LTFP published on the BEP, but the graduate programmes read are all at banks, energy and retail groups and the Big Four.',
        'Gli enti pubblici assumono con concorsi in base alla LTFP pubblicati sulla BEP, ma i programmi per laureati letti sono tutti di banche, gruppi energetici e della distribuzione e delle Big Four.', 'pt-bep ours']
    ] },
    { k: 'sponsorr', v: 'some', t: [
      ['The residence visa for subordinate work needs a work contract or a promise of one (Lei 23/2007, art. 59), so the employer has to commit before you move; EDP says Portuguese is not required, but Novobanco and BPI make it mandatory. See Visas for the rules.',
        'Il visto di residenza per lavoro subordinato richiede un contratto di lavoro o una promessa di contratto (Lei 23/2007, art. 59), quindi il datore di lavoro deve impegnarsi prima del tuo trasferimento; EDP afferma che il portoghese non è richiesto, ma Novobanco e BPI lo rendono obbligatorio. Per le regole vedi Visti.', 'pt-lei23 pt-edp pt-nb pt-bpi']
    ] },
    { k: 'photo', v: 'common', t: [
      ['A headshot is common but not mandatory, usually in the right-hand corner; E-Konomista calls a photo customary in Portugal, unlike in Brazil.',
        'Una foto è comune ma non obbligatoria, di solito nell’angolo destro; E-Konomista la definisce consueta in Portogallo, a differenza del Brasile.', 'pt-expatica pt-ekon-cv']
    ] },
    { k: 'cv', v: 'two', t: [
      ['E-Konomista advises one page, two at most, with a 3 to 4 line summary; Expatica says no longer than three sides of A4. Europass is widely recognised, though its templates look dated.',
        'E-Konomista consiglia una pagina, due al massimo, con un riassunto di 3-4 righe; Expatica dice non più di tre facciate A4. Europass è ampiamente riconosciuto, anche se i suoi modelli appaiono datati.', 'pt-ekon-cv pt-expatica']
    ] },
    { k: 'letter', v: 'optional', t: [
      ['A cover letter (carta de motivação) is not always required but may help you stand out; if sent, it is typed, one page, and addressed to a named HR person where possible.',
        'Una lettera di motivazione (carta de motivação) non è sempre richiesta ma può aiutarti a distinguerti; se inviata, è scritta al computer, di una pagina, e indirizzata a un responsabile HR indicato per nome se possibile.', 'pt-expatica']
    ] },
    { k: 'refs', v: 'later', t: [
      ['References are not required in the application; Expatica suggests writing that they are available on request.',
        'Le referenze non sono richieste nella candidatura; Expatica suggerisce di scrivere che sono disponibili su richiesta.', 'pt-expatica']
    ] },
    { k: 'docs', v: 'copies', t: [
      ['Programmes ask for an online application with a CV and academic information; no source read asks for certified or apostilled copies at this stage.',
        'I programmi chiedono una candidatura online con CV e informazioni accademiche; nessuna fonte letta chiede copie certificate o apostillate in questa fase.', 'pt-nb ours']
    ] },
    { k: 'salary', v: 'later', t: [
      ['Salaries are often not advertised; they are usually discussed in the first interview, where the interviewer typically asks about your salary expectations (gross, salário bruto).',
        'Gli stipendi spesso non sono pubblicati; di solito se ne parla al primo colloquio, in cui l’intervistatore di solito chiede le tue aspettative retributive (lorde, salário bruto).', 'pt-expatica']
    ] },
    { k: 'check', v: 'rare', t: [
      ['Labour Code art. 17 bars an employer from asking about a candidate’s private life, health or pregnancy unless strictly necessary and justified in writing; no programme page read mentions a background check.',
        'L’art. 17 del Codice del lavoro vieta al datore di lavoro di chiedere della vita privata, della salute o della gravidanza di un candidato salvo che sia strettamente necessario e motivato per iscritto; nessuna pagina di programma letta menziona un controllo dei precedenti.', 'pt-art17']
    ] },
    { k: 'contact', v: 'mixed', t: [
      ['Large groups and international centres hire through portals, fairs and programmes, while a personal recommendation (a cunha) still opens doors in smaller firms.',
        'I grandi gruppi e i centri internazionali assumono tramite portali, fiere e programmi, mentre una raccomandazione personale (la cunha) apre ancora porte nelle aziende più piccole.', 'pt-ne pt-novasbe-fair ours']
    ] },
    { k: 'abroad', v: 'workable', t: [
      ['The programmes are applied for online, with online tests, a group exercise and interviews; Expatica notes that online or phone screening is increasingly common, though a first interview is usually face to face.',
        'I programmi si candidano online, con test online, un esercizio di gruppo e colloqui; Expatica osserva che la selezione online o telefonica è sempre più comune, anche se il primo colloquio è di solito di persona.', 'pt-nb pt-bpi pt-expatica']
    ] },
    { k: 'language', v: 'mostly', t: [
      ['Portuguese is mandatory in Novobanco’s and BPI’s programmes and fluent Portuguese and English are asked by Jerónimo Martins; English is enough at EDP’s graduate programme and in many service and tech centres.',
        'Il portoghese è obbligatorio nei programmi di Novobanco e BPI e Jerónimo Martins chiede portoghese e inglese fluenti; l’inglese basta nel programma per laureati di EDP e in molti centri di servizi e tecnologici.', 'pt-nb pt-bpi pt-jm-trainee pt-edp']
    ] }
  ],

  rows: {
    process: [
      ['Novobanco’s programme has four stages: an online application, online tests of logical reasoning, behavioural profile and language, a group exercise on business challenges, and individual interviews. BPI adds presentation videos, an assessment centre and final interviews with business managers.',
        'Il programma di Novobanco ha quattro fasi: candidatura online, test online di ragionamento logico, profilo comportamentale e lingua, un esercizio di gruppo su sfide aziendali e colloqui individuali. BPI aggiunge video di presentazione, un assessment centre e colloqui finali con i responsabili di business.', 'pt-nb pt-bpi'],
      ['Galp’s selection runs through screening, an online assessment, group dynamics and a pitch, a business case and a final interview.',
        'La selezione di Galp prevede screening, un test online, dinamiche di gruppo e un pitch, un business case e un colloquio finale.', 'pt-galp-gen'],
      ['An ordinary job interview lasts 30 minutes to one hour, usually face to face, with HR or the department manager; some firms add several rounds or a skills test. Use the formal você unless invited otherwise.',
        'Un normale colloquio dura da 30 minuti a un’ora, di solito di persona, con le risorse umane o il responsabile del reparto; alcune aziende aggiungono più colloqui o un test di competenze. Usa il formale você salvo invito diverso.', 'pt-expatica'],
      ['Dress follows the job: a suit for senior finance, casual for a start-up. Punctuality is “a must” at work even if relaxed in private life. Candidates may face aptitude, language, personality and technical tests.',
        'L’abbigliamento segue il lavoro: abito per la finanza senior, informale per una start-up. La puntualità è “un obbligo” sul lavoro anche se meno rigida nella vita privata. I candidati possono incontrare test attitudinali, di lingua, di personalità e tecnici.', 'pt-expatica']
    ],
    offer: [
      ['Probation (período experimental) on a permanent contract is 90 days for most workers, 180 days for technically complex or highly responsible roles and 240 days for management; on fixed-term contracts it is 30 days from six months’ duration and 15 days below.',
        'Il periodo di prova (período experimental) in un contratto a tempo indeterminato è di 90 giorni per la maggior parte dei lavoratori, 180 giorni per ruoli tecnicamente complessi o di grande responsabilità e 240 giorni per i dirigenti; nei contratti a termine è di 30 giorni da sei mesi di durata e di 15 giorni sotto.', 'pt-cofidis'],
      ['The 2019 reform’s 180 days for first-job seekers was declared unconstitutional by the Constitutional Court, but only for those previously on fixed-term contracts with other employers of 90 days or more.',
        'I 180 giorni della riforma del 2019 per chi cerca il primo lavoro sono stati dichiarati incostituzionali dalla Corte costituzionale, ma solo per chi aveva avuto contratti a termine con altri datori di lavoro di 90 giorni o più.', 'pt-garrigues'],
      ['Portuguese pay is 14 salaries: a holiday subsidy and a Christmas subsidy, the latter due by 15 December, are paid on top of the 12 months, and both can be paid in monthly instalments. Holiday is at least 22 working days a year.',
        'In Portogallo lo stipendio è di 14 mensilità: un sussidio ferie e un sussidio di Natale, quest’ultimo dovuto entro il 15 dicembre, si aggiungono ai 12 mesi, ed entrambi possono essere pagati in rate mensili. Le ferie sono di almeno 22 giorni lavorativi l’anno.', 'pt-cofidis'],
      ['A permanent employee resigns with 30 days’ notice up to two years of seniority and 60 days above; BPI’s trainee programme starts on an open-ended contract, while Novobanco’s is a 9-month paid project. Pay is usually raised in the first interview, not after the offer.',
        'Un dipendente a tempo indeterminato si dimette con 30 giorni di preavviso fino a due anni di anzianità e 60 giorni oltre; il programma trainee di BPI parte con un contratto a tempo indeterminato, mentre quello di Novobanco è un progetto retribuito di 9 mesi. La retribuzione si discute di solito al primo colloquio, non dopo l’offerta.', 'pt-cofidis pt-bpi pt-nb pt-expatica']
    ],
    sponsor: [
      ['The residence visa for subordinate work requires a work contract or a promise of one, or recognised qualifications and an individual expression of interest from the employer (Lei 23/2007, art. 59 n.º 5); the article does not set a quota or labour-market test, so ask for the contract or promise early.',
        'Il visto di residenza per lavoro subordinato richiede un contratto di lavoro o una promessa di contratto, oppure qualifiche riconosciute e una manifestazione individuale di interesse del datore di lavoro (Lei 23/2007, art. 59 n.º 5); l’articolo non fissa quote né un test del mercato del lavoro, quindi chiedi presto il contratto o la promessa.', 'pt-lei23'],
      ['Highly qualified work needs a contract of at least six months at a minimum pay set in the law (art. 61-A), so raise the permit at the offer stage.',
        'Il lavoro altamente qualificato richiede un contratto di almeno sei mesi con una retribuzione minima fissata dalla legge (art. 61-A), quindi affronta il permesso al momento dell’offerta.', 'pt-lei23'],
      ['Most graduate programmes read do not state a nationality rule; Novobanco and BPI make Portuguese mandatory, Jerónimo Martins asks for fluent Portuguese and English, and EDP says Portuguese is not required.',
        'La maggior parte dei programmi per laureati letti non indica una regola di nazionalità; Novobanco e BPI rendono obbligatorio il portoghese, Jerónimo Martins chiede portoghese e inglese fluenti, ed EDP afferma che il portoghese non è richiesto.', 'pt-nb pt-bpi pt-jm-trainee pt-edp'],
      ['Nova SBE’s career fair, with 43 organisations from 50 markets and an international focus, and Landing.jobs, which offers visa and relocation help, are where employers used to hiring across borders are easiest to find.',
        'La career fair della Nova SBE, con 43 organizzazioni da 50 mercati e un taglio internazionale, e Landing.jobs, che offre aiuto per visti e trasferimento, sono i luoghi in cui è più facile trovare datori di lavoro abituati ad assumere oltre confine.', 'pt-novasbe-fair pt-landing']
    ],
    where: [
      ['Posted vacancies: Net-Empregos (61,690 active offers on 8 October 2026), the IEFP portal for job offers and registration, and Landing.jobs for tech.',
        'Annunci: Net-Empregos (61.690 offerte attive l’8 ottobre 2026), il portale dell’IEFP per le offerte di lavoro e la registrazione, e Landing.jobs per la tecnologia.', 'pt-ne pt-iefp-est pt-landing'],
      ['Graduate programmes and fairs: Talent Portugal lists trainee programmes (BPI, Novobanco) and a fair calendar; the employers’ own pages carry EDP, Galp, Jerónimo Martins and Sonae.',
        'Programmi per laureati e fiere: Talent Portugal elenca i programmi trainee (BPI, Novobanco) e un calendario delle fiere; le pagine dei datori di lavoro riportano EDP, Galp, Jerónimo Martins e Sonae.', 'pt-bpi pt-nb pt-edp pt-galp-gen pt-jm-trainee pt-sonae-contacto'],
      ['University fairs: Técnico’s Jobshop (April), the Nova SBE Career Fair (September 2026) and Católica’s RUMO in Porto (November).',
        'Fiere universitarie: il Jobshop del Técnico (aprile), la Nova SBE Career Fair (settembre 2026) e il RUMO della Católica a Porto (novembre).', 'pt-jobshop pt-novasbe-fair pt-rumo'],
      ['Public sector: competition notices appear in full on the Bolsa de Emprego Público (BEP) and as an extract in the Diário da República.',
        'Settore pubblico: gli avvisi di concorso compaiono per intero sulla Bolsa de Emprego Público (BEP) e in estratto nel Diário da República.', 'pt-bep']
    ],
    mistakes: [
      ['Missing the window: BPI opened in February and March, Sonae closed on 6 April, Novobanco ran 20 April to 14 June, and the state internship runs only 12 October to 7 December 2026.',
        'Perdere la finestra: BPI ha aperto a febbraio e marzo, Sonae si è chiusa il 6 aprile, Novobanco è durata dal 20 aprile al 14 giugno e il tirocinio statale è aperto solo dal 12 ottobre al 7 dicembre 2026.', 'pt-bpi pt-sonae-contacto pt-nb pt-iefp-est'],
      ['Applying to a programme where Portuguese is mandatory without it, or assuming English is enough: only EDP says so, and Jerónimo Martins asks for fluent Portuguese and English.',
        'Candidarsi a un programma dove il portoghese è obbligatorio senza conoscerlo, o ritenere che basti l’inglese: solo EDP lo afferma, e Jerónimo Martins chiede portoghese e inglese fluenti.', 'pt-nb pt-bpi pt-jm-trainee pt-edp'],
      ['Sending one generic CV: E-Konomista lists generic CVs, unexplained gaps, keyword stuffing and an objective statement as errors, and recommends a summary of 3 to 4 lines tailored to each application.',
        'Mandare un CV generico: E-Konomista elenca come errori i CV generici, i vuoti non spiegati, l’accumulo di parole chiave e la dichiarazione d’obiettivo, e raccomanda un riassunto di 3-4 righe adattato a ogni candidatura.', 'pt-ekon-cv'],
      ['Treating the odds of a big programme as normal: Jerónimo Martins took 11 people from more than 1,400 applications in 2025, so apply to several programmes and keep the internship route open.',
        'Considerare normali le probabilità di un grande programma: Jerónimo Martins ha preso 11 persone da oltre 1.400 candidature nel 2025, quindi candidati a più programmi e tieni aperta la strada del tirocinio.', 'pt-jm-trainee'],
      ['Arriving late: punctuality is a must at work in Portugal even if time is relaxed in personal life.',
        'Arrivare in ritardo: la puntualità è un obbligo sul lavoro in Portogallo anche se il tempo è più rilassato nella vita privata.', 'pt-expatica']
    ]
  },

  lang: [
    { f: 'finance', v: 'bilingual', lv: 'C1', t: [
      ['BPI asks for a proficient command of English and makes Portuguese mandatory; Novobanco’s online tests include language proficiency and Portuguese is mandatory.',
        'BPI chiede una padronanza avanzata dell’inglese e rende obbligatorio il portoghese; i test online di Novobanco comprendono la conoscenza della lingua e il portoghese è obbligatorio.', 'pt-bpi pt-nb']
    ] },
    { f: 'business', v: 'bilingual', lv: 'C1', t: [
      ['Jerónimo Martins asks for fluent Portuguese and English; EDP’s Global Graduate Program is the exception, saying Portuguese is not required.',
        'Jerónimo Martins chiede portoghese e inglese fluenti; il Global Graduate Program di EDP è l’eccezione, e afferma che il portoghese non è richiesto.', 'pt-jm-trainee pt-edp']
    ] },
    { f: 'tech', v: 'bilingual', lv: 'B2', t: [
      ['The foreign engineering hubs in Lisbon and the Landing.jobs platform advertise across Europe, so English is often enough there; Novobanco’s technology profile still lists Portuguese as mandatory.',
        'I centri d’ingegneria stranieri a Lisbona e la piattaforma Landing.jobs pubblicano annunci in tutta Europa, quindi lì l’inglese spesso basta; il profilo tecnologico di Novobanco indica comunque il portoghese come obbligatorio.', 'pt-lisbon pt-landing pt-nb ours']
    ] },
    { f: 'public', v: 'local', lv: 'C1', t: [
      ['Public competitions are published in Portuguese in the Diário da República and on the BEP, and the selection runs in Portuguese; expect to need it.',
        'I concorsi pubblici sono pubblicati in portoghese nel Diário da República e sulla BEP, e la selezione si svolge in portoghese; aspettati di averne bisogno.', 'pt-bep ours']
    ] }
  ],

  programmes: [
    { n: 'EDP Global Graduate Program', o: 'EDP', f: 'business', in: null, w: null, lang: 'EN', intl: 'unknown', ids: 'pt-edp' },
    { n: 'Generation Galp', o: 'Galp', f: 'business', in: null, w: null, lang: 'n/s', intl: 'unknown', ids: 'pt-galp-gen' },
    { n: 'Jerónimo Martins Trainee Programme', o: 'Jerónimo Martins', f: 'business', in: 11, w: null, lang: 'PT EN', intl: 'unknown', ids: 'pt-jm-trainee' },
    { n: 'Programa Contacto', o: 'Sonae', f: 'business', in: 80, w: [3, 4], lang: 'n/s', intl: 'unknown', ids: 'pt-sonae-contacto' },
    { n: 'BPI Trainee Program', o: 'Banco BPI', f: 'finance', in: null, w: [2, 3], lang: 'PT EN', intl: 'unknown', ids: 'pt-bpi' },
    { n: 'Novobanco Young Talent Program', o: 'Novobanco', f: 'finance', in: null, w: [4, 6], lang: 'PT', intl: 'unknown', ids: 'pt-nb' },
    { n: 'KPMG Graduates Program', o: 'KPMG Portugal', f: 'accounting', in: 223, w: null, lang: 'n/s', intl: 'unknown', ids: 'pt-kpmg' }
  ],

  outcomes: [
    ['The 38% of IEFP interns in work within 12 months (16% at the same firm) is from a 2016 evaluation, before the current +Talento scheme, and is the only conversion figure found.',
      'Il 38% dei tirocinanti dell’IEFP occupati entro 12 mesi (il 16% nella stessa azienda) proviene da una valutazione del 2016, prima dell’attuale schema +Talento, ed è l’unico dato di conversione trovato.', 'pt-iefp'],
    ['In 2025, 83.9% of Portuguese tertiary graduates aged 20 to 34 who left education up to three years earlier were in work, against 85.3% in the EU, while unemployment among under-25s was 19.8% in August 2026.',
      'Nel 2025 l’83,9% dei laureati portoghesi di 20-34 anni usciti dal sistema educativo da non più di tre anni era occupato, contro l’85,3% nell’UE, mentre la disoccupazione degli under 25 era del 19,8% nell’agosto 2026.', 'pt-eurostat-g pt-eurostat-u'],
    ['Nova SBE’s 100% employment at three months comes with 93% international students and a high mobility rank, so it does not measure staying in Portugal; no source read gives the share of programme graduates who stay.',
      'Il 100% di occupazione a tre mesi della Nova SBE si accompagna al 93% di studenti internazionali e a un alto indice di mobilità, quindi non misura la permanenza in Portogallo; nessuna fonte letta indica la quota di laureati dei programmi che restano.', 'pt-iberia ours']
  ],

  sources: {
    'pt-iberia': ['employer-stated', 'Admetia research library: places/iberia-and-nordics.md §2 and §6 (EDP and Galp careers pages, InterNations 2026, FT master’s in management 2026)', 'research/places/iberia-and-nordics.md', '2026-10-02'],
    'pt-iefp': ['data', 'E-Konomista: employability after IEFP internships (Ministry of Labour figures, 2016)', 'https://www.e-konomista.pt/empregabilidade-estagios-do-iefp/', '2026-10-08'],
    'pt-iefp-est': ['data', 'IEFP: Estágios +Talento (eligibility, grant levels, funding share, next window 12 Oct to 7 Dec 2026)', 'https://www.iefp.pt/estagios', '2026-10-08'],
    'pt-kpmg': ['employer-stated', 'KPMG Portugal: 223 hires through the graduate programme, October 2024', 'https://kpmg.com/pt/pt/home/media/press-releases/2024/10/kpmg-200-contratacoes-novos-socios.html', '2026-10-08'],
    'pt-lisbon': ['practitioner consensus', 'Kitalent: Lisbon’s tech ecosystem and its senior talent ceiling', 'https://kitalent.com/articles/article-lisbon-tech-senior-talent-gap/', '2026-10-07'],
    'pt-capgemini': ['employer-stated', 'Capgemini Portugal: Lisbon trainee academy (OutSystems), August 2024', 'https://jobs.capgemini.com/pt-en/job/Lisbon-Trainee-Academy-OutSystems-ABL/890660101', '2026-10-07'],
    'pt-edp': ['employer-stated', 'EDP: Global Graduate Program', 'https://www.edp.com/en/careers/job-opportunities/start-your-career/edp-global-graduate-program', '2026-10-02'],
    'pt-galp-gen': ['employer-stated', 'Galp: Generation Galp trainee programme', 'https://galp.com/corp/en/people/young-talent/generation-galp', '2026-10-03'],
    'pt-jm-trainee': ['employer-stated', 'Jerónimo Martins: press release on the new Trainee Programme edition (16 Sep 2025)', 'https://www.jeronimomartins.com/en/press_releases/pr_20250916_1_en/', '2026-10-03'],
    'pt-sonae-contacto': ['employer-stated', 'Sonae: press release on the Contacto programme 2026 (10 Mar 2026)', 'https://www.sonae.pt/fotos/press_releases/20250310_pr_programa_contacto_2026_vf_98343912669aef6218e8c7.pdf', '2026-10-03'],
    'pt-bpi': ['practitioner consensus', 'Talent Portugal: BPI Trainee Program 2026', 'https://talentportugal.com/en/trainee-program/bpi-trainee-program/', '2026-10-08'],
    'pt-nb': ['practitioner consensus', 'Talent Portugal: Novobanco Young Talent Program 2026 (applications 20 April to 14 June)', 'https://talentportugal.com/en/trainee-program/novobanco-young-talent-program/', '2026-10-08'],
    'pt-dges': ['data', 'DGES: recognition of foreign higher-education degrees (Decreto-Lei 66/2018)', 'https://www.dges.gov.pt/pt/pagina/reconhecimento', '2026-10-08'],
    'pt-lei23': ['data', 'Lei 23/2007 (foreigners’ law), consolidated text: arts. 59 and 61-A', 'https://www.pgdlisboa.pt/leis/lei_mostra_articulado.php?nid=920&tabela=leis', '2026-10-08'],
    'pt-cofidis': ['practitioner consensus', 'Cofidis: Código do Trabalho, guide to the main rules (probation, notice, holiday and Christmas subsidies)', 'https://contasconnosco.cofidis.pt/trabalho-e-carreira/ja-sabe-o-que-mudou-no-codigo-do-trabalho', '2026-10-08'],
    'pt-garrigues': ['practitioner consensus', 'Garrigues: limits to the 180-day probation period imposed by the Constitutional Court', 'https://www.garrigues.com/pt/pt-PT/news/limites-ao-periodo-experimental-180-dias-impostos-pelo-tribunal-constitucional', '2026-10-08'],
    'pt-art17': ['data', 'Código do Trabalho, art. 17 (protection of personal data of candidates)', 'https://sabiasque.pt/codigo-trabalho/1098-artigo-17-proteccao-de-dados-pessoais.html', '2026-10-08'],
    'pt-ne': ['employer-stated', 'Net-Empregos home page (61,690 active offers on 8 Oct 2026; internship filter)', 'https://www.net-empregos.com', '2026-10-08'],
    'pt-landing': ['employer-stated', 'Landing.jobs: tech jobs in Europe, with visa and relocation help', 'https://landing.jobs', '2026-10-08'],
    'pt-expatica': ['practitioner consensus', 'Expatica: writing a Portuguese CV and preparing for an interview', 'https://www.expatica.com/pt/employment/finding-a-job/writing-a-portuguese-cv-and-preparing-for-an-interview-in-portuguese-1106436/', '2026-10-08'],
    'pt-ekon-cv': ['practitioner consensus', 'E-Konomista: how to make a CV that wins employers', 'https://www.e-konomista.pt/como-fazer-um-cv-que-conquista-empregadores/', '2026-10-08'],
    'pt-jobshop': ['employer-stated', 'Técnico Lisboa: 38th edition of Jobshop (28 to 30 April 2026)', 'https://tecnico.ulisboa.pt/en/events/38th-edition-of-jobshop', '2026-10-08'],
    'pt-novasbe-fair': ['employer-stated', 'Portugal Global (AICEP): Nova SBE Career Fair connects talent with global employers (17 Sep 2026)', 'https://portugalglobal.pt/en/news/2026/setembro/nova-sbe-career-fair-connects-talent-with-global-employers/', '2026-10-08'],
    'pt-rumo': ['employer-stated', 'ECO: Católica in Porto links 67 companies and students (RUMO, 12 and 13 Nov 2025)', 'https://eco.sapo.pt/2025/11/07/catolica-no-porto-faz-ponte-entre-67-empresas-e-alunos/', '2026-10-08'],
    'pt-bep': ['data', 'Aviso n.º 20364/2026/2, Município da Batalha: competition for one civil-engineering post (Diário da República, 17 Aug 2026)', 'https://www.cm-batalha.pt/cmbatalha/uploads/document/file/1158/aviso.pdf', '2026-10-08'],
    'pt-eurostat-u': ['data', 'Eurostat: unemployment by sex and age, monthly (une_rt_m), August 2026', 'https://ec.europa.eu/eurostat/databrowser/view/une_rt_m/default/table?lang=en', '2026-10-03'],
    'pt-eurostat-g': ['data', 'Eurostat: employment rates of young people not in education and training (edat_lfse_24), 2025', 'https://ec.europa.eu/eurostat/databrowser/view/edat_lfse_24/default/table?lang=en', '2026-10-03']
  }
});
