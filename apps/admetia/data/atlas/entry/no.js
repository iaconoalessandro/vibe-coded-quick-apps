/* How hiring works: Norway. From research/places/iberia-and-nordics.md §1 and §6,
 * with reads on 7 and 8 Oct 2026 (NHH, Azets, BCG and Equinor internship pages;
 * Arbeidstilsynet, HK-dir, NBIM, Equinor, Aker BP, Expat.com, BI, Arbeidsplassen, Jobbnorge). */
ATLAS.addEntry({
  id: 'NO',
  checked: '2026-10-08',
  review: '2027-04-08',

  lead: [
    ['In Norway the usual door for business and engineering students is a summer internship of six to eight weeks between the two years of the master’s, at a bank, consultancy or energy group, which leads to an offer for after graduation. Firms visit NHH, BI and NTNU each autumn to fill them.',
      'In Norvegia la porta abituale per gli studenti di economia e ingegneria è uno stage estivo di sei-otto settimane tra i due anni del master, in una banca, una società di consulenza o un gruppo energetico, che porta a un’offerta per dopo la laurea. Le aziende visitano NHH, BI e NTNU ogni autunno per coprirli.', 'no-azets no-bcg ours']
  ],

  ways: [
    { name: ['Summer internship (sommerinternship)', 'Stage estivo (sommerinternship)'], r: 'intern', p: 'first intern', basis: 'consensus', t: [
      ['Selective and short: DNB’s runs from mid-June to mid-August and drew close to 500 applications for a handful of places; Equinor’s lasts seven weeks; BCG’s six-week internship can lead to a full-time role.',
        'Selettivo e breve: quello di DNB va da metà giugno a metà agosto e ha attirato quasi 500 candidature per pochi posti; quello di Equinor dura sette settimane; lo stage di sei settimane di BCG può portare a un ruolo a tempo pieno.', 'no-dn no-equinor no-bcg'],
      ['The Big Four make offers to NHH students a year before they finish, after a summer internship.',
        'Le Big Four fanno offerte agli studenti NHH un anno prima della fine, dopo uno stage estivo.', 'no-nhh-old']
    ] },
    { name: ['Graduate and trainee programmes', 'Programmi per laureati e trainee'], r: 'scheme', p: 'first', basis: 'consensus', t: [
      ['DNB and other large employers recruit trainees in the autumn for the following year. NBIM’s 12-month graduate programme (the 2027 cohort) took applications from 1 to 15 August 2026, and Equinor’s two-year programme, with rotations, had closed for 2027 when read.',
        'DNB e altri grandi datori reclutano trainee in autunno per l’anno successivo. Il programma per laureati di 12 mesi di NBIM (coorte 2027) ha raccolto candidature dal 1º al 15 agosto 2026, e il programma biennale di Equinor, con rotazioni, era chiuso per il 2027 al momento della lettura.', 'no-iberia no-nbim no-equinor-g'],
      ['Aker BP’s graduate programme offers permanent positions with structured training, and offers relocation help to graduates of universities outside Norway.',
        'Il programma per laureati di Aker BP offre posizioni permanenti con formazione strutturata e aiuto al trasferimento per i laureati di università fuori dalla Norvegia.', 'no-akerbp']
    ] },
    { name: ['Campus career fairs', 'Fiere del lavoro nelle università'], r: 'campus', p: 'first intern', basis: 'consensus', t: [
      ['BI’s Karrieredagene, run by student volunteers each autumn on the Oslo campus, brings about 100 companies; NHH’s career fair in Bergen had close to 100 companies on its main company day in 2023 and included recruitment panels and company courses (EY, Accenture, Pareto Securities).',
        'Le Karrieredagene della BI, organizzate da studenti volontari ogni autunno nel campus di Oslo, portano circa 100 aziende; la fiera del lavoro dell’NHH a Bergen ha avuto quasi 100 aziende nel giorno principale del 2023 e comprendeva panel di selezione e corsi aziendali (EY, Accenture, Pareto Securities).', 'no-bi no-nhh-fair']
    ] },
    { name: ['Networks and referrals', 'Reti e segnalazioni'], r: 'network', p: 'first exp', basis: 'consensus', t: [
      ['Expat.com says many jobs in Norway are filled through referrals and personal connections rather than public ads; it recommends professional events, conferences, job fairs and industry associations.',
        'Expat.com afferma che molti lavori in Norvegia sono coperti tramite segnalazioni e conoscenze personali e non con annunci pubblici; raccomanda eventi professionali, conferenze, fiere del lavoro e associazioni di settore.', 'no-expat']
    ] },
    { name: ['Posted vacancies', 'Annunci pubblicati'], r: 'direct', p: 'first exp', basis: 'consensus', t: [
      ['Nav’s Arbeidsplassen is the public job service and links to EURES; FINN.no and Jobbnorge are the other big boards, and Aker BP accepts applications only for advertised positions, with a CV and a cover letter.',
        'L’Arbeidsplassen di Nav è il servizio pubblico per il lavoro e rimanda a EURES; FINN.no e Jobbnorge sono le altre grandi bacheche, e Aker BP accetta candidature solo per posizioni pubblicate, con un CV e una lettera di presentazione.', 'no-arbeidsplassen no-expat no-jobbnorge no-akerbp']
    ] },
    { name: ['Recruitment agencies', 'Agenzie di selezione'], r: 'agency', p: 'first exp', basis: 'anecdotal', t: [
      ['Expat.com names Manpower, Experis and Adecco as agencies focused on tech, engineering and finance; it presents them as an extra channel, not the main route.',
        'Expat.com cita Manpower, Experis e Adecco come agenzie focalizzate su tecnologia, ingegneria e finanza; le presenta come un canale in più, non come la strada principale.', 'no-expat']
    ] }
  ],

  cycle: [
    ['Recent-graduate employment is among Europe’s strongest at 91.8%; oil prices move hiring in Stavanger and the energy supply chain more than elsewhere.',
      'L’occupazione dei laureati recenti è tra le più forti d’Europa al 91,8%; il prezzo del petrolio muove le assunzioni a Stavanger e nella filiera energetica più che altrove.', 'no-iberia ours'],
    ['The autumn is the recruiting season: firms visit campuses and run career days in September, the DNB cybersecurity programme closed on 1 October, and NBIM and Equinor ran their 2027 rounds in August.',
      'L’autunno è la stagione delle selezioni: le aziende visitano i campus e organizzano giornate carriera a settembre, il programma di cybersicurezza di DNB si è chiuso il 1º ottobre, e NBIM ed Equinor hanno svolto i cicli 2027 ad agosto.', 'no-dnbit no-nbim no-equinor-g no-bi']
  ],

  schools: [
    ['NHH in Bergen is the main business feeder: the median gross salary of its master’s class in the 2025 survey was NOK 600,000 for those working in Norway, and 193 of 660 graduates answered. Most NHH graduates working in Norway are in Oslo and Bergen.',
      'L’NHH di Bergen è il principale canale per l’economia: lo stipendio lordo mediano della sua classe magistrale nell’indagine 2025 era di 600.000 NOK per chi lavora in Norvegia, e hanno risposto 193 laureati su 660. La maggior parte dei laureati NHH che lavorano in Norvegia è a Oslo e Bergen.', 'no-nhh'],
    ['BI in Oslo runs one of the largest student-run career fairs, and NTNU in Trondheim is the main source of tech graduates; NTNU’s career service offers online courses on CVs, job applications and interviews.',
      'La BI di Oslo organizza una delle maggiori fiere del lavoro gestite da studenti, e la NTNU di Trondheim è la principale fonte di laureati tecnologici; il servizio carriera della NTNU offre corsi online su CV, candidature e colloqui.', 'no-bi no-dnbit no-ntnu'],
    ['HK-dir, Norway’s ENIC-NARIC centre, handles recognition of foreign education; not all professions in Norway require recognition of a foreign qualification.',
      'L’HK-dir, il centro ENIC-NARIC norvegese, gestisce il riconoscimento dei titoli di studio esteri; non tutte le professioni in Norvegia richiedono il riconoscimento di un titolo estero.', 'no-hkdir']
  ],

  events: [
    ['Company presentations on campus in the autumn, with in-person case interviews in Bergen and Trondheim.',
      'Presentazioni aziendali nei campus in autunno, con colloqui su casi di persona a Bergen e Trondheim.', 'no-azets'],
    ['The NHH career fair of 4 to 7 September 2023 held its main company day on 7 September with close to 100 companies, and marked 25 years as a link between business and students.',
      'La fiera del lavoro dell’NHH dal 4 al 7 settembre 2023 ha tenuto la giornata principale delle aziende il 7 settembre con quasi 100 aziende, e ha celebrato 25 anni come collegamento tra imprese e studenti.', 'no-nhh-fair'],
    ['BI’s Karrieredagene takes place every autumn at the Oslo campus, with lectures, courses from BI Career Service, internship presentations and a closing banquet.',
      'Le Karrieredagene della BI si tengono ogni autunno nel campus di Oslo, con lezioni, corsi del BI Career Service, presentazioni sugli stage e un banchetto finale.', 'no-bi']
  ],

  fields: [
    { f: 'finance', t: [
      ['DNB recruits its trainees in the autumn; NHH is the main feeder, and its 2025 master’s class had a median gross salary of NOK 600,000 for those working in Norway.',
        'DNB recluta i suoi trainee in autunno; la NHH è il canale principale, e la sua classe magistrale 2025 aveva uno stipendio lordo mediano di 600.000 NOK per chi lavora in Norvegia.', 'no-iberia no-nhh'],
      ['NBIM’s 12-month graduate programme starts with nine months on the AI team and three in a business area, and asks for a completed bachelor’s, master’s, MBA or PhD and up to two years of work experience.',
        'Il programma per laureati di 12 mesi di NBIM inizia con nove mesi nel team AI e tre in un’area di business, e richiede un bachelor, un master, un MBA o un dottorato concluso e fino a due anni di esperienza lavorativa.', 'no-nbim']
    ] },
    { f: 'accounting', t: [
      ['Auditing and consulting have long been the largest destinations of NHH graduates, and the Big Four make offers to students a year before they finish, after a summer internship.',
        'Revisione e consulenza sono da tempo le principali destinazioni dei laureati NHH, e le Big Four fanno offerte agli studenti un anno prima della fine, dopo uno stage estivo.', 'no-nhh-old']
    ] },
    { f: 'consulting', t: [
      ['BCG takes visiting associates for a six-week internship that can lead to a full-time role; EY and Accenture ran company courses at the NHH career fair.',
        'BCG accoglie visiting associate per uno stage di sei settimane che può portare a un ruolo a tempo pieno; EY e Accenture hanno tenuto corsi aziendali alla fiera del lavoro dell’NHH.', 'no-bcg no-nhh-fair']
    ] },
    { f: 'business', t: [
      ['Equinor’s graduate programme lasts two years with rotations and gives full Equinor employment with the benefits of the country of work; Aker BP’s offers permanent positions and relocation help to graduates from outside Norway.',
        'Il programma per laureati di Equinor dura due anni con rotazioni e dà un impiego Equinor a tutti gli effetti con i benefici del paese di lavoro; quello di Aker BP offre posizioni permanenti e aiuto al trasferimento ai laureati di fuori della Norvegia.', 'no-equinor-g no-akerbp']
    ] },
    { f: 'ai', t: [
      ['NBIM’s 2027 graduate programme is built around its AI team and asks for enthusiasm for AI and a sincere interest in finance; selection includes an AI case-study exercise.',
        'Il programma per laureati 2027 di NBIM è costruito attorno al suo team AI e richiede entusiasmo per l’IA e un sincero interesse per la finanza; la selezione comprende un esercizio su un caso di studio sull’IA.', 'no-nbim']
    ] },
    { f: 'tech', t: [
      ['Recent tech graduates report a harder market as consultancies hire fewer juniors, but DNB still runs a graduate programme for developers, IT architects and cybersecurity, and Equinor recruits IT and cybernetics graduates; NTNU in Trondheim is the main source.',
        'I neolaureati tech riferiscono un mercato più difficile perché le società di consulenza assumono meno junior, ma DNB ha ancora un programma per laureati per sviluppatori, architetti IT e cybersicurezza, ed Equinor recluta laureati in IT e cibernetica; la NTNU di Trondheim è la fonte principale.', 'no-dnbit ours']
    ] },
    { f: 'cyber', t: [
      ['DNB’s graduate programme includes a cybersecurity track, with applications closing on 1 October.',
        'Il programma per laureati di DNB include un percorso in cybersicurezza, con candidature che chiudono il 1º ottobre.', 'no-dnbit']
    ] },
    { f: 'public', t: [
      ['Public employers advertise through Jobbnorge, a board run by Grade Jobbnorge AS that also sells recruitment tools to employers; Nav’s Arbeidsplassen lists public and private posts.',
        'I datori di lavoro pubblici pubblicano tramite Jobbnorge, una bacheca gestita da Grade Jobbnorge AS che vende anche strumenti di selezione ai datori di lavoro; l’Arbeidsplassen di Nav elenca posti pubblici e privati.', 'no-jobbnorge no-arbeidsplassen']
    ] }
  ],

  customs: [
    { k: 'season', v: 'cyclical', t: [
      ['The programmes recruit once a year in the autumn or late summer: NBIM took applications from 1 to 15 August 2026, DNB’s IT and cybersecurity programme closed on 1 October, and campus career days fall in September.',
        'I programmi reclutano una volta l’anno in autunno o a fine estate: NBIM ha raccolto candidature dal 1º al 15 agosto 2026, il programma IT e cybersicurezza di DNB si è chiuso il 1º ottobre, e le giornate carriera nei campus cadono a settembre.', 'no-nbim no-dnbit no-bi']
    ] },
    { k: 'masters', v: 'helpful', t: [
      ['NBIM accepts a bachelor’s, master’s, MBA or PhD, completed before the start, and the business-school pipeline is a master’s (NHH’s class is surveyed six months after the master’s).',
        'NBIM accetta un bachelor, un master, un MBA o un dottorato, concluso prima dell’inizio, e il canale delle business school è un master (la classe NHH è intervistata sei mesi dopo il master).', 'no-nbim no-nhh']
    ] },
    { k: 'degrees', v: 'regulated', t: [
      ['HK-dir, the Norwegian ENIC-NARIC centre, handles foreign-education recognition; not all professions require recognition, but regulated professions need authorisation or recognition of the professional qualifications.',
        'L’HK-dir, il centro ENIC-NARIC norvegese, gestisce il riconoscimento dei titoli esteri; non tutte le professioni richiedono il riconoscimento, ma le professioni regolamentate richiedono l’autorizzazione o il riconoscimento delle qualifiche professionali.', 'no-hkdir']
    ] },
    { k: 'brand', v: 'some', t: [
      ['Firms visit NHH, BI and NTNU, and NHH’s fair has close to 100 companies, but the programmes read name no list of schools and NBIM takes a bachelor’s to a PhD.',
        'Le aziende visitano NHH, BI e NTNU, e la fiera dell’NHH ha quasi 100 aziende, ma i programmi letti non indicano un elenco di università e NBIM prende da un bachelor a un dottorato.', 'no-nhh-fair no-bi no-nbim']
    ] },
    { k: 'dual', v: 'little', t: [
      ['The entry for business and engineering students is the summer internship and the programme after the master’s; the sources read show no apprenticeship or dual-study route for graduates.',
        'L’ingresso per gli studenti di economia e ingegneria è lo stage estivo e il programma dopo il master; le fonti lette non mostrano alcuna via di apprendistato o studio duale per i laureati.', 'no-azets ours']
    ] },
    { k: 'publicw', v: 'mid', t: [
      ['Public employers advertise on Jobbnorge and Nav’s Arbeidsplassen; the large graduate programmes read are at a sovereign-wealth manager, a bank and energy groups.',
        'I datori di lavoro pubblici pubblicano su Jobbnorge e sull’Arbeidsplassen di Nav, i grandi programmi per laureati letti sono in un gestore di fondi sovrani, in una banca e in gruppi energetici.', 'no-jobbnorge no-arbeidsplassen']
    ] },
    { k: 'sponsorr', v: 'some', t: [
      ['Aker BP offers graduates from universities outside Norway relocation help, immigration and work-permit support and language training; NBIM works in English and does not require Norwegian. See Visas for the rules.',
        'Aker BP offre ai laureati di università fuori dalla Norvegia aiuto al trasferimento, supporto per immigrazione e permesso di lavoro e corsi di lingua; NBIM lavora in inglese e non richiede il norvegese. Per le regole vedi Visti.', 'no-akerbp no-nbim']
    ] },
    { k: 'photo', v: 'optional', t: [
      ['A photo is optional on a Norwegian CV; the guide read advises one A4 page, two at most.',
        'Una foto è facoltativa in un CV norvegese; la guida letta consiglia una pagina A4, due al massimo.', 'no-expat']
    ] },
    { k: 'cv', v: 'one', t: [
      ['Aim for one A4 page, two at most, with a clear layout since paper CVs may be scanned; write in Norwegian for Norwegian postings and in English for English ones, and technology, oil and gas may prefer English.',
        'Punta a una pagina A4, due al massimo, con un’impaginazione chiara perché i CV cartacei possono essere scansionati; scrivi in norvegese per gli annunci in norvegese e in inglese per quelli in inglese, e tecnologia, petrolio e gas possono preferire l’inglese.', 'no-expat']
    ] },
    { k: 'letter', v: 'expected', t: [
      ['Most employers expect a cover letter tailored to the company and its industry; if you are not fluent in Norwegian, state your willingness to learn it.',
        'La maggior parte dei datori di lavoro si aspetta una lettera di presentazione su misura per l’azienda e il suo settore; se non parli bene il norvegese, dichiara la tua disponibilità a impararlo.', 'no-expat']
    ] },
    { k: 'refs', v: 'required', t: [
      ['Expat.com lists references among the items on the CV and calls them highly important in spontaneous applications; other guides differ on whether to list them or wait until asked.',
        'Expat.com elenca le referenze tra le voci del CV e le definisce molto importanti nelle candidature spontanee; altre guide differiscono sul fatto di elencarle o aspettare la richiesta.', 'no-expat']
    ] },
    { k: 'docs', v: 'copies', t: [
      ['A spontaneous application should include a complete CV and your diplomas; the online programme applications read ask for a CV and academic records rather than certified copies.',
        'Una candidatura spontanea dovrebbe includere un CV completo e i tuoi diplomi; le candidature online ai programmi lette chiedono un CV e i risultati accademici anziché copie certificate.', 'no-expat no-nbim ours']
    ] },
    { k: 'salary', v: 'later', t: [
      ['Norway has no national minimum wage and many industries set minimum pay through collective agreements; the application pages read ask for a CV and letter, not a salary figure.',
        'La Norvegia non ha un salario minimo nazionale e molti settori fissano le retribuzioni minime con contratti collettivi; le pagine di candidatura lette chiedono un CV e una lettera, non una cifra di stipendio.', 'no-expat no-akerbp ours']
    ] },
    { k: 'check', v: 'some', t: [
      ['Expat.com calls references highly important and Equinor’s selection includes an online assessment and video interview; no source read describes background or criminal-record checks for graduates.',
        'Expat.com definisce le referenze molto importanti e la selezione di Equinor comprende un test online e un colloquio video; nessuna fonte letta descrive controlli sui precedenti o sul casellario per i laureati.', 'no-expat no-equinor-g ours']
    ] },
    { k: 'contact', v: 'mixed', t: [
      ['Applications through structured programmes and advertised posts work; elsewhere, many jobs are filled through referrals, and contacts made during the internship decide.',
        'Le candidature tramite programmi strutturati e posti pubblicati funzionano; altrove molti lavori sono coperti tramite segnalazioni, e decidono i contatti fatti durante lo stage.', 'no-expat']
    ] },
    { k: 'abroad', v: 'workable', t: [
      ['Equinor’s selection runs through an online application, online assessment, video interview and a virtual recruitment day; NBIM’s adds online assessments and an AI case study, with online or in-person interviews, and takes documents in English or Norwegian.',
        'La selezione di Equinor passa per una candidatura online, un test online, un colloquio video e una giornata di selezione virtuale; quella di NBIM aggiunge test online e un caso di studio sull’IA, con colloqui online o di persona, e accetta documenti in inglese o in norvegese.', 'no-equinor-g no-nbim']
    ] },
    { k: 'language', v: 'mostly', t: [
      ['Norwegian for most roles outside global energy, tech and consulting teams; many Norwegians speak English, but Norwegian is often required for permanent roles and career advancement, while NBIM’s working language is English.',
        'Il norvegese per la maggior parte dei ruoli fuori dai team globali di energia, tecnologia e consulenza; molti norvegesi parlano inglese, ma il norvegese è spesso richiesto per i ruoli permanenti e per la carriera, mentre la lingua di lavoro di NBIM è l’inglese.', 'no-expat no-nbim']
    ] }
  ],

  rows: {
    process: [
      ['Equinor’s graduate selection has five steps: online application, online assessment, video interview, virtual recruitment day, then the offer. NBIM’s has five too: CV screening, online assessments (personality profile and psychometric tests), an AI case study, interviews online or in person, then the offer.',
        'La selezione per laureati di Equinor ha cinque fasi: candidatura online, test online, colloquio video, giornata di selezione virtuale, poi l’offerta. Anche quella di NBIM ne ha cinque: screening del CV, test online (profilo di personalità e test psicometrici), un caso di studio sull’IA, colloqui online o di persona, poi l’offerta.', 'no-equinor-g no-nbim'],
      ['Ordinary interviews are straightforward and professional, with questions on experience, technical skills, teamwork, motivation and long-term commitment; punctuality is important.',
        'I colloqui ordinari sono diretti e professionali, con domande su esperienza, competenze tecniche, lavoro di squadra, motivazione e impegno a lungo termine; la puntualità è importante.', 'no-expat'],
      ['Dress is professional but modest: creative and tech sectors are more casual, while finance and law expect business attire.',
        'L’abbigliamento è professionale ma sobrio: i settori creativi e tecnologici sono più informali, mentre finanza e legge richiedono abiti formali.', 'no-expat'],
      ['The first step can be very selective: DNB’s summer internship drew close to 500 applications for ten places.',
        'Il primo passo può essere molto selettivo: lo stage estivo di DNB ha attirato quasi 500 candidature per dieci posti.', 'no-dn']
    ],
    offer: [
      ['A written contract is mandatory: for employment over one month it must be ready no later than seven days after the start, and a contract cannot set a shorter notice period than the Working Environment Act requires.',
        'Un contratto scritto è obbligatorio: per un impiego di oltre un mese deve essere pronto entro sette giorni dall’inizio, e un contratto non può fissare un preavviso più breve di quello richiesto dalla legge sull’ambiente di lavoro.', 'no-contract'],
      ['A trial period normally lasts up to six months; during it either side gives 14 days’ notice unless otherwise agreed in writing, and afterwards the statutory notice is one month under five years of service, two months over five and three to six months over ten.',
        'Il periodo di prova dura normalmente fino a sei mesi; durante di esso ciascuna parte dà 14 giorni di preavviso salvo diverso accordo scritto, e poi il preavviso di legge è di un mese sotto i cinque anni di servizio, due mesi oltre i cinque e da tre a sei mesi oltre i dieci.', 'no-contract no-notice'],
      ['Holiday is at least 25 working days a year (Saturdays count, so four weeks and one day); some collective agreements add a fifth week, and the holiday pay rate then rises from 10.2% to 12%.',
        'Le ferie sono di almeno 25 giorni lavorativi l’anno (il sabato conta, quindi quattro settimane e un giorno); alcuni contratti collettivi aggiungono una quinta settimana, e la percentuale dell’indennità di ferie sale allora dal 10,2% al 12%.', 'no-holiday'],
      ['There is no national minimum wage; collective agreements set minimum pay in many industries. NHH’s 2025 master’s class had a median gross salary of NOK 600,000 for those working in Norway; Equinor’s graduates are full employees with the benefits of the country of work.',
        'Non esiste un salario minimo nazionale; i contratti collettivi fissano le retribuzioni minime in molti settori. La classe magistrale NHH 2025 aveva uno stipendio lordo mediano di 600.000 NOK per chi lavora in Norvegia; i laureati di Equinor sono dipendenti a tutti gli effetti con i benefici del paese di lavoro.', 'no-expat no-nhh no-equinor-g']
    ],
    sponsor: [
      ['Aker BP says graduates from universities outside Norway get relocation help, covering travel costs, housing search, a first-year housing allowance, immigration and work-permit support and language training.',
        'Aker BP afferma che i laureati di università fuori dalla Norvegia ricevono aiuto al trasferimento, che copre i costi di viaggio, la ricerca di un alloggio, un contributo per l’alloggio del primo anno, il supporto per immigrazione e permesso di lavoro e corsi di lingua.', 'no-akerbp'],
      ['NBIM says English is the working language across the organisation and Norwegian is not required, and application documents can be in English or Norwegian; its page does not mention permits.',
        'NBIM afferma che l’inglese è la lingua di lavoro in tutta l’organizzazione e che il norvegese non è richiesto, e i documenti di candidatura possono essere in inglese o in norvegese; la sua pagina non parla di permessi.', 'no-nbim'],
      ['Work-visa processing can take several weeks, so ask the employer about permits at the offer stage; the pay floors for a skilled-worker permit are in Visas. No source read describes a labour-market test or a quota.',
        'L’elaborazione del visto di lavoro può richiedere diverse settimane, quindi chiedi al datore di lavoro dei permessi al momento dell’offerta; le soglie salariali per un permesso da lavoratore qualificato sono in Visti. Nessuna fonte letta descrive un test del mercato del lavoro o una quota.', 'no-expat ours']
    ],
    where: [
      ['Posted vacancies: Nav’s Arbeidsplassen (a service from Nav that also links to EURES), FINN.no and Jobbnorge for public employers; Nav’s board can be filtered for English by searching “English”.',
        'Annunci: l’Arbeidsplassen di Nav (un servizio di Nav che rimanda anche a EURES), FINN.no e Jobbnorge per i datori di lavoro pubblici; la bacheca di Nav può essere filtrata per l’inglese cercando “English”.', 'no-arbeidsplassen no-expat no-jobbnorge'],
      ['Graduate programmes: NBIM, Equinor and Aker BP post theirs on their own career pages, DNB on jobb.dnb.no; Work in Norway offers an employer database and practical information.',
        'Programmi per laureati: NBIM, Equinor e Aker BP pubblicano i loro sulle proprie pagine carriera, DNB su jobb.dnb.no; Work in Norway offre una banca dati dei datori di lavoro e informazioni pratiche.', 'no-nbim no-equinor-g no-akerbp no-expat'],
      ['University fairs: BI’s Karrieredagene in Oslo every autumn (about 100 companies), NHH’s career fair in Bergen in September, and NTNU’s career service and career days in Trondheim.',
        'Fiere universitarie: le Karrieredagene della BI a Oslo ogni autunno (circa 100 aziende), la fiera del lavoro dell’NHH a Bergen a settembre, e il servizio carriera e le giornate carriera della NTNU a Trondheim.', 'no-bi no-nhh-fair no-ntnu'],
      ['Agencies: Manpower, Experis and Adecco focus on tech, engineering and finance.',
        'Agenzie: Manpower, Experis e Adecco si concentrano su tecnologia, ingegneria e finanza.', 'no-expat']
    ],
    mistakes: [
      ['Missing the late-summer and autumn windows: NBIM’s 2027 round ran from 1 to 15 August 2026, and DNB’s IT and cybersecurity programme closed on 1 October.',
        'Perdere le finestre di fine estate e autunno: il ciclo 2027 di NBIM è durato dal 1º al 15 agosto 2026, e il programma IT e cybersicurezza di DNB si è chiuso il 1º ottobre.', 'no-nbim no-dnbit'],
      ['Skipping the summer internship: Big Four offers to NHH students come a year before they finish, after a summer internship.',
        'Saltare lo stage estivo: le offerte delle Big Four agli studenti NHH arrivano un anno prima della fine, dopo uno stage estivo.', 'no-nhh-old'],
      ['Sending a long CV or leaving out references: aim for one A4 page, two at most, and expect to be asked for references.',
        'Mandare un CV lungo o omettere le referenze: punta a una pagina A4, due al massimo, e aspettati di dover fornire referenze.', 'no-expat'],
      ['Sending a Norwegian CV for an English-language posting, or the reverse: write in the language of the ad, and say you are willing to learn Norwegian if you are not fluent.',
        'Mandare un CV in norvegese per un annuncio in inglese, o il contrario: scrivi nella lingua dell’annuncio, e di’ che sei disposto a imparare il norvegese se non lo parli bene.', 'no-expat'],
      ['Applying to Aker BP without an advertised position: it accepts applications only for advertised positions.',
        'Candidarsi ad Aker BP senza una posizione pubblicata: accetta candidature solo per posizioni pubblicate.', 'no-akerbp']
    ]
  },

  lang: [
    { f: 'finance', v: 'english', lv: 'C1', t: [
      ['NBIM’s working language is English across the organisation, Norwegian is not required and documents can be in English or Norwegian; no certificate is named, the online assessments and interviews are the evidence.',
        'La lingua di lavoro di NBIM è l’inglese in tutta l’organizzazione, il norvegese non è richiesto e i documenti possono essere in inglese o in norvegese; non è indicato alcun certificato, la prova sono i test online e i colloqui.', 'no-nbim']
    ] },
    { f: 'business', v: 'bilingual', lv: 'B2', t: [
      ['Aker BP’s graduate page is in English and offers language training to graduates from outside Norway; Expat.com says Norwegian is often required for permanent roles and career advancement.',
        'La pagina per laureati di Aker BP è in inglese e offre corsi di lingua ai laureati di fuori della Norvegia; Expat.com afferma che il norvegese è spesso richiesto per i ruoli permanenti e per la carriera.', 'no-akerbp no-expat']
    ] },
    { f: 'tech', v: 'bilingual', lv: 'B2', t: [
      ['Technology, oil and gas may prefer an English CV because English is the main working language there; Nav’s board has English-language postings.',
        'Tecnologia, petrolio e gas possono preferire un CV in inglese perché l’inglese è la principale lingua di lavoro; la bacheca di Nav ha annunci in inglese.', 'no-expat']
    ] },
    { f: 'ai', v: 'english', lv: 'C1', t: [
      ['NBIM’s AI-team graduate programme works in English and asks for no Norwegian.',
        'Il programma per laureati nel team AI di NBIM lavora in inglese e non richiede il norvegese.', 'no-nbim']
    ] },
    { f: 'public', v: 'local', lv: 'C1', t: [
      ['Public employers advertise on Jobbnorge in Norwegian; the sources read name no English route, so expect to need Norwegian.',
        'I datori di lavoro pubblici pubblicano su Jobbnorge in norvegese; le fonti lette non indicano alcuna via in inglese, quindi aspettati di aver bisogno del norvegese.', 'no-jobbnorge ours']
    ] }
  ],

  programmes: [
    { n: 'NBIM Graduate Programme', o: 'Norges Bank Investment Management', f: 'finance', in: null, w: [8, 8], lang: 'EN', intl: 'unknown', ids: 'no-nbim' },
    { n: 'Equinor Graduate Programme', o: 'Equinor', f: 'business', in: null, w: null, lang: 'n/s', intl: 'unknown', ids: 'no-equinor-g' },
    { n: 'Aker BP Graduate Programme', o: 'Aker BP', f: 'business', in: null, w: null, lang: 'n/s', intl: 'yes', ids: 'no-akerbp' },
    { n: 'DNB Graduate Programme in IT architecture and cybersecurity', o: 'DNB', f: 'cyber', in: null, w: null, lang: 'n/s', intl: 'unknown', ids: 'no-dnbit' },
    { n: 'DNB Trainee Programme', o: 'DNB', f: 'finance', in: null, w: null, lang: 'n/s', intl: 'unknown', ids: 'no-iberia' }
  ],

  outcomes: [
    ['NHH’s survey is answered by 193 of 660 master’s graduates (36%), so its NOK 600,000 median is a self-selected figure for those working in Norway; the 2024 median was NOK 580,000.',
      'L’indagine dell’NHH è compilata da 193 laureati magistrali su 660 (36%), quindi la sua mediana di 600.000 NOK è un dato autoselezionato per chi lavora in Norvegia; la mediana del 2024 era di 580.000 NOK.', 'no-nhh'],
    ['91.8% of recent tertiary graduates were in work in 2025, among Europe’s strongest rates, while youth unemployment (15 to 24) was 14.0% and rising from 11.0% in 2023; no source read gives a return-offer rate for Norwegian summer internships.',
      'Il 91,8% dei laureati recenti lavorava nel 2025, tra i tassi più alti d’Europa, mentre la disoccupazione giovanile (15-24 anni) era del 14,0% e in aumento dall’11,0% del 2023; nessuna fonte letta indica un tasso di conferma per gli stage estivi norvegesi.', 'no-iberia ours']
  ],

  sources: {
    'no-iberia': ['data', 'Admetia research library: places/iberia-and-nordics.md §1 and §6 (Eurostat 2025; DNB careers page)', 'research/places/iberia-and-nordics.md', '2026-10-02'],
    'no-azets': ['employer-stated', 'Azets Norway: inside a summer internship at Azets Consulting', 'https://www.azets.com/no-no/ressurser/mot-vare-ansatte/innsikt-fra-innsiden-sommerinternship-hos-azets-consulting', '2026-10-07'],
    'no-dn': ['anecdotal', 'Dagens Næringsliv: 500 applicants for ten places (DNB summer internship; undated)', 'https://www.dn.no/studier/500-sokere-til-ti-stillinger/1-1-1680081', '2026-10-07'],
    'no-equinor': ['employer-stated', 'University of Stavanger job listing: Equinor summer internship 2025', 'https://uis.no/en/for-students/vacant-positions-for-students/equinor-summer-internship-2025', '2026-10-07'],
    'no-bcg': ['employer-stated', 'BCG Visiting Associate, Norway: six-week internship listing (iAgora job board copy)', 'https://www.iagora.com/work/en/internships/consulting/norway', '2026-10-07'],
    'no-nhh': ['data', 'NHH: Job Market Survey 2025 (193 of 660 master’s graduates answered; median gross NOK 600,000)', 'https://www.nhh.no/contentassets/eeb02348dbd0435c8317603efbf0feec/2025/amu-2025.pdf', '2026-10-08'],
    'no-nhh-old': ['data', 'NHH Bulletin: attractive in the labour market (sector shares of the 2017 class)', 'https://nhh.no/en/nhh-bulletin/article-archive/2018/april/attractive-in-the-labour-market/', '2026-10-07'],
    'no-nhh-fair': ['employer-stated', 'NHH: the NHH Career Fair, 4 to 7 September 2023', 'https://nhh.no/en/calendar/2023/september/the-nhh-career-fair/', '2026-10-08'],
    'no-dnbit': ['employer-stated', 'DNB: graduate programme in IT architecture and cybersecurity 2027', 'https://www.dnb.no/dnbnyheter/no/samfunn/graduateprogram-it-arkitektur-cybersikkerhet-2027', '2026-10-07'],
    'no-nbim': ['employer-stated', 'NBIM: graduate programme (2027 cohort, 1 to 15 August 2026)', 'https://nbim.no/en/about-us/career/graduate-programme', '2026-10-08'],
    'no-equinor-g': ['employer-stated', 'Equinor: graduate programme (two years, five selection steps; 2027 round closed)', 'https://www.equinor.com/careers/graduates', '2026-10-08'],
    'no-akerbp': ['employer-stated', 'Aker BP: career page (graduate programme, relocation support)', 'https://akerbp.com/en/career', '2026-10-08'],
    'no-bi': ['employer-stated', 'BI Norwegian Business School: Karrieredagene (about 100 companies each autumn)', 'https://www.bi.no/studere-ved-bi/stotte-og-studiemestring/veiledning/karrieredagene/', '2026-10-08'],
    'no-ntnu': ['employer-stated', 'NTNU: career courses and career days', 'https://www.ntnu.no/karriere/kurs', '2026-10-08'],
    'no-hkdir': ['data', 'HK-dir: foreign education (recognition, ENIC-NARIC)', 'https://www.hkdir.no/en/foreign-education', '2026-10-08'],
    'no-contract': ['data', 'Arbeidstilsynet: contract of employment', 'https://www.arbeidstilsynet.no/en/pay-and-engagement-of-employees/contract-of-employment/', '2026-10-08'],
    'no-notice': ['data', 'Arbeidstilsynet: dismissal with notice (statutory notice periods)', 'https://www.arbeidstilsynet.no/en/pay-and-engagement-of-employees/dismissal-with-notice/', '2026-10-08'],
    'no-holiday': ['data', 'Arbeidstilsynet: holiday', 'https://www.arbeidstilsynet.no/en/working-hours-and-organisation-of-work/holiday/', '2026-10-08'],
    'no-expat': ['practitioner consensus', 'Expat.com: finding a job in Norway', 'https://www.expat.com/en/guide/europe/norway/857-find-a-job-in-norway.html', '2026-10-08'],
    'no-arbeidsplassen': ['data', 'Nav Arbeidsplassen: the public job service', 'https://arbeidsplassen.nav.no/', '2026-10-08'],
    'no-jobbnorge': ['employer-stated', 'Jobbnorge: job board run by Grade Jobbnorge AS', 'https://www.jobbnorge.no', '2026-10-08']
  }
});
