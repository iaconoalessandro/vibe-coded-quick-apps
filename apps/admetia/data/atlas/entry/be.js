/* How hiring works: Belgium. Earlier reads on 7 Oct 2026 (European Commission
 * traineeships, Studely, UCLouvain thesis on Actiris job offers); extended on
 * 8 Oct 2026 with EURES, Student.be, VDAB, Le Forem, Actiris, Duo for a JOB,
 * Expatica, Brussels Times, BNP Paribas Fortis, KBC, Proximus, UCB, Eurostat
 * (job vacancy rates), vlaanderen.be (diploma recognition). */
ATLAS.addEntry({
  id: 'BE',
  checked: '2026-10-08',
  review: '2027-04-30',

  lead: [
    ['Belgium has two job markets in one city. Belgian firms hire juniors through internships and graduate intakes, and expect two of French, Dutch and English; the EU institutions and the organisations around them hire through traineeships and competitions open to all EU citizens.',
      'Il Belgio ha due mercati del lavoro in una sola città. Le aziende belghe assumono junior tramite tirocini e selezioni per laureati, e si aspettano due tra francese, olandese e inglese; le istituzioni UE e le organizzazioni che ruotano intorno a loro assumono tramite tirocini e concorsi aperti a tutti i cittadini UE.', 'be-lang be-bluebook ours'],
    ['The graduate programmes are small: Proximus takes 10 people a year and KBC’s Antwerp commercial track five, so most juniors come in through ordinary posted vacancies, internships and contacts.',
      'I programmi per laureati sono piccoli: Proximus prende 10 persone l’anno e il percorso commerciale di KBC ad Anversa cinque, quindi la maggior parte dei junior entra tramite annunci ordinari, tirocini e contatti.', 'be-prox be-kbc-jd ours']
  ],

  ways: [
    { name: ['Posted vacancies and agencies', 'Annunci pubblicati e agenzie'], r: 'direct', p: 'first exp', basis: 'data', t: [
      ['Most openings are posted: VDAB alone advertised 100,000 jobs on the day it was read, and each region has its own public service (VDAB in Flanders, Actiris in Brussels, Le Forem in Wallonia, ADG in the German-speaking Community). EURES also lists Selor for public jobs, temporary and recruitment agencies, company sites, job boards and LinkedIn.',
        'La maggior parte dei posti è pubblicata: il solo VDAB pubblicizzava 100.000 posti il giorno della lettura, e ogni regione ha il proprio servizio pubblico (VDAB nelle Fiandre, Actiris a Bruxelles, Le Forem in Vallonia, ADG nella Comunità germanofona). EURES elenca inoltre Selor per i lavori pubblici, le agenzie interinali e di selezione, i siti aziendali, i portali di annunci e LinkedIn.', 'be-vdab be-eures'],
      ['The same channels serve experienced hires, who are asked for the language of the ad and a tailored CV; EURES says many jobs are hidden, so an unsolicited application is an option.',
        'Gli stessi canali servono chi ha esperienza, a cui si chiedono la lingua dell’annuncio e un CV su misura; EURES afferma che molti posti sono nascosti, quindi una candidatura spontanea è un’opzione.', 'be-eures']
    ] },
    { name: ['Internship (stage) and graduate intake', 'Tirocinio (stage) e selezione per laureati'], r: 'intern', p: 'first intern', basis: 'consensus', t: [
      ['The Big Four, the banks and consultancies take interns from Belgian universities and recruit the best; several work in English in their advisory teams.',
        'Le Big Four, le banche e le società di consulenza prendono tirocinanti dalle università belghe e assumono i migliori; molte lavorano in inglese nei team di consulenza.', 'be-studely ours'],
      ['Deloitte invites students to events in Antwerp (5 October), Brussels (8 October), Ghent (13 October) and Leuven (15 October 2026), and lists graduate roles starting in September 2027. No source read gives a conversion rate from internship to offer.',
        'Deloitte invita gli studenti a eventi ad Anversa (5 ottobre), Bruxelles (8 ottobre), Gand (13 ottobre) e Lovanio (15 ottobre 2026), e pubblica posti per laureati con inizio a settembre 2027. Nessuna fonte letta indica un tasso di conversione dal tirocinio all’offerta.', 'be-fairs be-deloitte ours']
    ] },
    { name: ['Graduate programmes and traineeships', 'Programmi per laureati e traineeship'], r: 'scheme', p: 'first', basis: 'data', t: [
      ['BNP Paribas Fortis runs 12 to 24-month programmes with 2 to 4 assignments and a permanent full-time contract; Proximus runs a two-year programme with three 8-month assignments and 10 places for master’s graduates of any background; UCB’s Graduate Development Programme lasts 24 months with rotations.',
        'BNP Paribas Fortis ha programmi di 12-24 mesi con 2-4 assegnazioni e un contratto a tempo indeterminato a tempo pieno; Proximus ha un programma biennale con tre assegnazioni di 8 mesi e 10 posti per laureati magistrali di qualsiasi formazione; il Graduate Development Programme di UCB dura 24 mesi con rotazioni.', 'be-bnp be-prox be-ucb'],
      ['KBC’s Young Graduates commercial track in the Antwerp region takes five people with a bachelor’s or master’s in an economic field, in Dutch, on a permanent contract.',
        'Il percorso commerciale Young Graduates di KBC nella regione di Anversa prende cinque persone con una laurea triennale o magistrale in un ambito economico, in olandese, con contratto a tempo indeterminato.', 'be-kbc-jd']
    ] },
    { name: ['Job fairs and campus events', 'Fiere del lavoro ed eventi in università'], r: 'campus', p: 'first', basis: 'consensus', t: [
      ['Student.be lists 19 job fairs for new graduates in Flanders and Brussels between 5 February and 26 March 2026, run by faculty and student circles and university colleges in Leuven, Ghent, Antwerp, Brussels, Kortrijk and other towns, plus VDAB and Actiris job days at other dates.',
        'Student.be elenca 19 fiere del lavoro per neolaureati nelle Fiandre e a Bruxelles tra il 5 febbraio e il 26 marzo 2026, organizzate da circoli di facoltà e di studenti e da hogeschool a Lovanio, Gand, Anversa, Bruxelles, Kortrijk e altre città, oltre alle giornate del lavoro di VDAB e Actiris in altre date.', 'be-fairs'],
      ['Jobat.be and Références ran Job Fair Brussels at Tour & Taxis on 17 September 2026, aimed at people who want to work in Brussels or for a large national or international company.',
        'Jobat.be e Références hanno organizzato Job Fair Brussels a Tour & Taxis il 17 settembre 2026, rivolta a chi vuole lavorare a Bruxelles o per una grande azienda nazionale o internazionale.', 'be-jobfair']
    ] },
    { name: ['Referrals and networking', 'Segnalazioni e rete di contatti'], r: 'network', p: 'first exp', basis: 'consensus', t: [
      ['Duo for a JOB says referrals and word of mouth matter a lot in Belgium; it advises events, LinkedIn and asking former teachers and contacts. The Brussels Times adds that you may hear of roles before they are advertised and suggests preparing about 20 anecdotes from study or internships.',
        'Duo for a JOB afferma che in Belgio segnalazioni e passaparola contano molto; consiglia eventi, LinkedIn e di chiedere a ex insegnanti e contatti. Il Brussels Times aggiunge che si può sentir parlare di ruoli prima della pubblicazione e suggerisce di preparare circa 20 aneddoti dagli studi o dai tirocini.', 'be-duo be-bxt']
    ] },
    { name: ['The EU traineeship (Blue Book) and EU institutions', 'Il tirocinio UE (Blue Book) e le istituzioni UE'], r: 'public', p: 'first', basis: 'data', t: [
      ['Five months at the Commission, starting 1 March or 1 October, for graduates with at most six weeks of earlier EU work; no age limit. EU nationals need C1 in English, French or German and B2 in a second EU language; non-EU nationals are eligible only for a limited number of places, with C1 in one of the three. Registration for the October 2027 session runs from 15 February to 12 March 2027.',
        'Cinque mesi alla Commissione, con inizio il 1º marzo o il 1º ottobre, per laureati con al massimo sei settimane di lavoro UE precedente; nessun limite d’età. I cittadini UE devono avere C1 in inglese, francese o tedesco e B2 in una seconda lingua UE; i cittadini extra-UE sono ammessi solo per un numero limitato di posti, con C1 in una delle tre. Le iscrizioni per la sessione di ottobre 2027 vanno dal 15 febbraio al 12 marzo 2027.', 'be-bluebook be-bb-cal'],
      ['It rarely leads straight to a permanent post, which needs an EPSO competition (174,727 applicants for 1,490 places in 2026), but it opens the Brussels network of think tanks, associations and consultancies.',
        'Porta raramente a un posto fisso, che richiede un concorso EPSO (174.727 candidati per 1.490 posti nel 2026), ma apre la rete di Bruxelles di think tank, associazioni e società di consulenza.', 'be-epso ours']
    ] }
  ],

  cycle: [
    ['Hiring has two rhythms. Fairs for graduates cluster in February and March, programmes start in September (Proximus and UCB in 2026), and the Blue Book takes registrations in February and March for an October start.',
      'Le assunzioni hanno due ritmi. Le fiere per laureati si concentrano a febbraio e marzo, i programmi iniziano a settembre (Proximus e UCB nel 2026) e il Blue Book raccoglie le iscrizioni a febbraio e marzo per un inizio a ottobre.', 'be-fairs be-prox be-ucb-gdp be-bb-cal'],
    ['Outside the programmes there is no national season: vacancies are posted all year, and a standard contract has had no probation period since 1 January 2014.',
      'Fuori dai programmi non c’è una stagione nazionale: gli annunci sono pubblicati tutto l’anno, e dal 1º gennaio 2014 un contratto standard non prevede un periodo di prova.', 'be-vdab be-eures'],
    ['The job market is cooling: vacancies fell 9.1% in the first half of 2025 according to Statbel, and the Eurostat job vacancy rate fell from 4.1% to 3.5% between the last quarter of 2024 and the last quarter of 2025.',
      'Il mercato del lavoro si raffredda: i posti vacanti sono calati del 9,1% nel primo semestre 2025 secondo Statbel, e il tasso di posti vacanti di Eurostat è sceso dal 4,1% al 3,5% tra l’ultimo trimestre 2024 e l’ultimo trimestre 2025.', 'be-bxt be-vac']
  ],

  schools: [
    ['Fairs are organised by particular schools and student circles: Vlerick, Group T and Ekonomika in Leuven, KU Leuven in Brussels and Bruges, VTK and VEK in Ghent, HoGent, UCLL, PXL and Thomas More.',
      'Le fiere sono organizzate da singole scuole e circoli studenteschi: Vlerick, Group T ed Ekonomika a Lovanio, la KU Leuven a Bruxelles e Bruges, VTK e VEK a Gand, HoGent, UCLL, PXL e Thomas More.', 'be-fairs'],
    ['The programmes read do not name preferred schools: Proximus takes master’s graduates of any background and KBC lists fields of study, not universities.',
      'I programmi letti non indicano scuole preferite: Proximus prende laureati magistrali di qualsiasi formazione e KBC elenca i campi di studio, non le università.', 'be-prox be-kbc-jd'],
    ['A foreign degree needs recognition for regulated professions only; for other jobs the page sends you to NARIC-Vlaanderen but does not say employers require it.',
      'Un titolo estero richiede il riconoscimento solo per le professioni regolamentate; per gli altri lavori la pagina rimanda a NARIC-Vlaanderen ma non dice che i datori di lavoro lo richiedano.', 'be-naric']
  ],

  events: [
    ['Student.be’s list for new graduates names 19 job fairs in Flanders and Brussels from 5 February to 26 March 2026, among them the Finance & Tech Fair in Leuven (17 March), HoGent Job Fair IT in Ghent (24 March) and Moving Forward in Antwerp (4 March).',
      'L’elenco di Student.be per i neolaureati indica 19 fiere del lavoro nelle Fiandre e a Bruxelles dal 5 febbraio al 26 marzo 2026, tra cui il Finance & Tech Fair a Lovanio (17 marzo), l’HoGent Job Fair IT a Gand (24 marzo) e Moving Forward ad Anversa (4 marzo).', 'be-fairs'],
    ['Company events in autumn 2026: Deloitte Invites in four cities on 5, 8, 13 and 15 October, Deloitte’s Innovation Summit in Zaventem on 19 October, and the railway’s Job-Centraal at Antwerp-Centraal from 19 to 24 October.',
      'Eventi aziendali in autunno 2026: Deloitte Invites in quattro città il 5, 8, 13 e 15 ottobre, l’Innovation Summit di Deloitte a Zaventem il 19 ottobre, e Job-Centraal delle ferrovie ad Anversa Centrale dal 19 al 24 ottobre.', 'be-fairs'],
    ['VDAB holds job days in Flanders and Actiris in Brussels on varying dates, and Le Forem lists jobdays in Wallonia.',
      'VDAB organizza giornate del lavoro nelle Fiandre e Actiris a Bruxelles in date diverse, e Le Forem elenca le giornate del lavoro in Vallonia.', 'be-fairs be-forem']
  ],

  fields: [
    { f: 'finance', t: [
      ['Banks hire graduates on permanent contracts with structured training: BNP Paribas Fortis traineeships last 12 to 24 months across corporate banking, private banking, global markets and compliance; KBC runs a commercial track for young graduates in each region, in Dutch.',
        'Le banche assumono laureati con contratti a tempo indeterminato e formazione strutturata: i traineeship di BNP Paribas Fortis durano da 12 a 24 mesi tra corporate banking, private banking, mercati globali e compliance; KBC ha un percorso commerciale per giovani laureati in ogni regione, in olandese.', 'be-bnp be-kbc'],
      ['Finance is slower than most: the Eurostat vacancy rate in finance and insurance was 2.9% in the last quarter of 2025, against 3.5% for the whole economy.',
        'La finanza è più lenta della media: il tasso di posti vacanti di Eurostat in finanza e assicurazioni era del 2,9% nell’ultimo trimestre 2025, contro il 3,5% dell’intera economia.', 'be-vac']
    ] },
    { f: 'accounting', t: [
      ['The Big Four recruit graduates each September across Brussels, Leuven, Ghent and Antwerp; at their post-Covid peak their Belgian offices sought 3,000 staff, with a quarter of Deloitte’s junior hires tech-focused.',
        'Le Big Four reclutano laureati ogni settembre tra Bruxelles, Lovanio, Gand e Anversa; al picco post-Covid i loro uffici belgi cercavano 3.000 persone, con un quarto delle assunzioni junior di Deloitte in ambito tecnologico.', 'be-deloitte be-consultor']
    ] },
    { f: 'consulting', t: [
      ['Consulting graduates come mostly through the Big Four advisory teams, several of which work in English; Deloitte Belgium’s autumn 2026 invitation events and Innovation Summit are the entry points it publishes.',
        'I laureati in consulenza arrivano soprattutto dai team di consulenza delle Big Four, molti dei quali lavorano in inglese; gli eventi a invito e l’Innovation Summit di autunno 2026 di Deloitte Belgio sono i punti d’ingresso che pubblica.', 'be-studely be-fairs']
    ] },
    { f: 'business', t: [
      ['Industry programmes are small and rotational: UCB’s 24-month Graduate Development Programme and Proximus’s two-year programme with 10 places, which takes business, technology and engineering graduates.',
        'I programmi dell’industria sono piccoli e a rotazione: il Graduate Development Programme di 24 mesi di UCB e il programma biennale di Proximus con 10 posti, che prende laureati in economia, tecnologia e ingegneria.', 'be-ucb be-prox']
    ] },
    { f: 'public', t: [
      ['Brussels public-affairs, EU and NGO jobs are networked: traineeships, events and former trainees decide much of who hears about a vacancy first.',
        'I lavori di affari pubblici, UE e ONG a Bruxelles passano per le reti: tirocini, eventi ed ex tirocinanti decidono buona parte di chi sente per primo di un posto libero.', 'ours'],
      ['In Brussels 37% of the 725,600 jobs are in public administration, defence, education and health, and the European Commission alone has about 33,000 staff.',
        'A Bruxelles il 37% dei 725.600 posti di lavoro è nell’amministrazione pubblica, nella difesa, nell’istruzione e nella sanità, e la sola Commissione europea ha circa 33.000 dipendenti.', 'be-bru be-ec']
    ] },
    { f: 'tech', t: [
      ['Belgium’s ICT sector employs about 130,000 people but grew only 1.9% in 2024; around Leuven, the research centre imec, voted the country’s most attractive employer in 2026, and KU Leuven anchor semiconductor and deep-tech hiring, mostly at PhD and experienced level.',
        'Il settore ICT belga impiega circa 130.000 persone ma è cresciuto solo dell’1,9% nel 2024; intorno a Lovanio, il centro di ricerca imec, votato nel 2026 il datore più attraente del paese, e la KU Leuven guidano le assunzioni nei semiconduttori e nel deep tech, per lo più a livello di dottorato e di esperienza.', 'be-agoria be-imec'],
      ['Information and communication had a vacancy rate of 4.2% in the last quarter of 2025, and Proximus recruits technology graduates into its two-year programme.',
        'Informazione e comunicazione aveva un tasso di posti vacanti del 4,2% nell’ultimo trimestre 2025, e Proximus recluta laureati in tecnologia nel suo programma biennale.', 'be-vac be-prox']
    ] }
  ],

  customs: [
    { k: 'season', v: 'cyclical', t: [
      ['Programmes start in September, graduate fairs cluster in February and March and the Blue Book registers in February and March, while vacancies posted by VDAB, Actiris and Le Forem run all year.',
        'I programmi iniziano a settembre, le fiere per laureati si concentrano a febbraio e marzo e il Blue Book raccoglie le iscrizioni a febbraio e marzo, mentre gli annunci pubblicati da VDAB, Actiris e Le Forem sono disponibili tutto l’anno.', 'be-fairs be-prox be-bb-cal be-vdab']
    ] },
    { k: 'masters', v: 'helpful', t: [
      ['Proximus asks for recent master’s graduates, while KBC’s commercial track accepts a bachelor’s or a master’s degree; the programmes read do not set a grade or a school.',
        'Proximus chiede laureati magistrali recenti, mentre il percorso commerciale di KBC accetta una laurea triennale o magistrale; i programmi letti non fissano un voto né una scuola.', 'be-prox be-kbc-jd']
    ] },
    { k: 'degrees', v: 'regulated', t: [
      ['A foreign diploma has to be recognised only to practise a regulated profession such as doctor, nurse, teacher, architect or lawyer; for diplomas from outside the EEA you apply to NARIC-Vlaanderen. Some Dutch, Luxembourgish and Baltic diplomas are recognised automatically.',
        'Un diploma estero va riconosciuto solo per esercitare una professione regolamentata come medico, infermiere, insegnante, architetto o avvocato; per i diplomi extra-SEE ci si rivolge a NARIC-Vlaanderen. Alcuni diplomi olandesi, lussemburghesi e baltici sono riconosciuti automaticamente.', 'be-naric']
    ] },
    { k: 'brand', v: 'some', t: [
      ['Fairs and invitation events are organised by particular schools such as Vlerick, Group T, KU Leuven and Ghent’s student circles, but the programmes read name no preferred university.',
        'Le fiere e gli eventi a invito sono organizzati da singole scuole come Vlerick, Group T, KU Leuven e i circoli studenteschi di Gand, ma i programmi letti non indicano un’università preferita.', 'be-fairs be-prox be-kbc-jd']
    ] },
    { k: 'dual', v: 'little', t: [
      ['The business and computing entry routes read are paid programmes and internships after or during the degree, not dual-study degrees; apprenticeship-style learning in Belgium is a feature of vocational education.',
        'Le vie d’ingresso in economia e informatica lette sono programmi retribuiti e tirocini dopo o durante gli studi, non corsi di studio duali; l’apprendistato in Belgio è tipico dell’istruzione professionale.', 'be-bnp be-prox ours']
    ] },
    { k: 'publicw', v: 'high', t: [
      ['37% of Brussels jobs are in public administration, defence, education and health, and the EU institutions employ about 33,000 staff in the Commission alone, but entry is by competition: 174,727 people applied for 1,490 places in the 2026 EU graduate competition.',
        'Il 37% dei posti di lavoro a Bruxelles è nell’amministrazione pubblica, nella difesa, nell’istruzione e nella sanità, e le istituzioni UE impiegano circa 33.000 persone nella sola Commissione, ma l’accesso avviene per concorso: 174.727 persone hanno presentato domanda per 1.490 posti nel concorso UE per laureati del 2026.', 'be-bru be-ec be-epso']
    ] },
    { k: 'sponsorr', v: 'some', t: [
      ['Single permits are regional and carry salary floors for highly qualified workers in 2026: €53,220 a year in Wallonia (€42,576 under 30), €3,703.44 a month in Brussels and €48,912 a year in Flanders (€39,129.60 under 30). In practice sponsors are large and international employers; see Visas for the rules.',
        'I permessi unici sono regionali e nel 2026 prevedono soglie salariali per i lavoratori altamente qualificati: 53.220 € l’anno in Vallonia (42.576 € sotto i 30 anni), 3.703,44 € al mese a Bruxelles e 48.912 € l’anno nelle Fiandre (39.129,60 € sotto i 30 anni). Nella pratica chi sponsorizza sono datori di lavoro grandi e internazionali; per le regole vedi Visti.', 'be-thresh ours']
    ] },
    { k: 'photo', v: 'optional', t: [
      ['EURES says to leave the photo off unless the job requires one or the employer asks; Expatica agrees it is optional, and the Brussels Times says a photo should be professional if you add one.',
        'EURES dice di non mettere la foto a meno che il lavoro la richieda o il datore di lavoro la chieda; Expatica concorda che è facoltativa, e il Brussels Times dice che, se la si mette, deve essere professionale.', 'be-eures be-expatica be-bxt']
    ] },
    { k: 'cv', v: 'two', t: [
      ['A CV is typically one or two A4 pages for large companies, in reverse chronological order; the Brussels Times says keep it to two pages at most and open with a short role-specific summary.',
        'Un CV è di solito di una o due pagine A4 per le grandi aziende, in ordine cronologico inverso; il Brussels Times dice di non superare le due pagine e di aprire con un breve riepilogo mirato al ruolo.', 'be-expatica be-bxt']
    ] },
    { k: 'letter', v: 'optional', t: [
      ['EURES says to write a separate letter for each application, but employers read the CV first and Brussels recruiters often skip the cover letter; keep it short and state your work status, such as EU citizenship or a visa need.',
        'EURES dice di scrivere una lettera diversa per ogni candidatura, ma i datori di lavoro leggono prima il CV e i selezionatori di Bruxelles spesso saltano la lettera; tienila breve e indica la tua situazione lavorativa, come la cittadinanza UE o la necessità di un visto.', 'be-eures be-bxt']
    ] },
    { k: 'refs', v: 'later', t: [
      ['Referees appear as a last CV section only for people who have agreed to act, and Duo for a JOB suggests asking former teachers and internship supervisors; the pages read do not ask for references up front.',
        'I referenti compaiono come ultima sezione del CV solo per le persone che hanno accettato di fare da garanti, e Duo for a JOB suggerisce di chiedere a ex insegnanti e responsabili di tirocinio; le pagine lette non chiedono referenze fin dall’inizio.', 'be-expatica be-duo']
    ] },
    { k: 'docs', v: 'copies', t: [
      ['Do not attach diplomas or certificates to the CV; bring them to the interview.',
        'Non allegare diplomi o certificati al CV; portali al colloquio.', 'be-expatica be-eures']
    ] },
    { k: 'salary', v: 'later', t: [
      ['The pages read do not ask for a salary figure in the application and advise asking questions at the interview that are not only about salary; many pay floors come from sector collective agreements.',
        'Le pagine lette non chiedono una cifra di stipendio nella candidatura e consigliano di fare al colloquio domande che non riguardino solo lo stipendio; molti minimi salariali derivano da contratti collettivi di settore.', 'be-expatica be-eures ours']
    ] },
    { k: 'check', v: 'some', t: [
      ['No page read describes routine background or reference checks. Keep LinkedIn consistent with the CV, since recruiters screen it, and expect psychometric or aptitude tests for some roles.',
        'Nessuna pagina letta descrive controlli sui precedenti o sulle referenze di routine. Mantieni LinkedIn coerente con il CV, perché i selezionatori lo consultano, e aspettati test psicometrici o attitudinali per alcuni ruoli.', 'be-duo be-expatica ours']
    ] },
    { k: 'contact', v: 'mixed', t: [
      ['Applications work at large firms; in the EU bubble, contacts made as a trainee count most.',
        'Le candidature funzionano nelle grandi aziende; nella bolla UE contano soprattutto i contatti fatti da tirocinante.', 'ours'],
      ['Duo for a JOB says referrals and word of mouth matter a lot, while EURES notes that many jobs are hidden.',
        'Duo for a JOB afferma che segnalazioni e passaparola contano molto, mentre EURES osserva che molti posti sono nascosti.', 'be-duo be-eures']
    ] },
    { k: 'abroad', v: 'workable', t: [
      ['EURES covers the regional services and Actiris explains its services in 22 languages; for non-EU applicants the salary floors for a single permit apply to any offer.',
        'EURES copre i servizi regionali e Actiris spiega i propri servizi in 22 lingue; per i candidati extra-UE le soglie salariali del permesso unico si applicano a qualsiasi offerta.', 'be-eures be-actiris be-thresh']
    ] },
    { k: 'language', v: 'mostly', t: [
      ['Brussels ads often ask for English plus French or Dutch; a study of 1,000 job offers found that command of all three opens the most doors.',
        'Gli annunci di Bruxelles chiedono spesso inglese più francese o olandese; uno studio su 1.000 offerte di lavoro ha rilevato che padroneggiarle tutte e tre apre più porte.', 'be-lang'],
      ['In that sample 915 offers were written in French, 58 in English and 18 in Dutch; of the 582 that named a language, French appeared in just over 80%, Dutch in 73% and English in 48%.',
        'In quel campione 915 offerte erano scritte in francese, 58 in inglese e 18 in olandese; delle 582 che indicavano una lingua, il francese compariva in poco più dell’80%, l’olandese nel 73% e l’inglese nel 48%.', 'be-lang']
    ] }
  ],

  rows: {
    process: [
      ['BNP Paribas Fortis always holds at least two interviews and adds tests for some roles; Expatica says some jobs include psychometric, intelligence or aptitude tests, and the Brussels Times describes screening that is often AI-assisted, then a recruiter’s brief look at the CV.',
        'BNP Paribas Fortis tiene sempre almeno due colloqui e aggiunge test per alcuni ruoli; Expatica dice che alcuni lavori comprendono test psicometrici, di intelligenza o attitudinali, e il Brussels Times descrive uno screening spesso assistito dall’IA, poi una rapida occhiata del selezionatore al CV.', 'be-bnp be-expatica be-bxt'],
      ['The interview starts with small talk and becomes fairly formal: dress smartly, arrive on time, shake hands, use the interviewer’s title, use “vous” until invited otherwise and bring a few questions; a short thank-you email afterwards is advised.',
        'Il colloquio inizia con qualche chiacchiera e diventa piuttosto formale: vestiti in modo curato, arriva in orario, stringi la mano, usa il titolo dell’intervistatore, usa il “vous” finché non ti viene proposto altro e porta alcune domande; si consiglia una breve email di ringraziamento dopo.', 'be-expatica be-duo'],
      ['In Brussels many companies accept applications in English or French, and the language of the ad sets the language of the application; the pages read give no typical time from application to offer.',
        'A Bruxelles molte aziende accettano candidature in inglese o in francese, e la lingua dell’annuncio stabilisce la lingua della candidatura; le pagine lette non indicano un tempo tipico tra candidatura e offerta.', 'be-expatica be-eures ours']
    ],
    offer: [
      ['Probation periods were abolished on 1 January 2014, except in student and temporary-work contracts. Fixed-term, part-time, student and temporary contracts must be in writing; the contract states the gross salary, and employees pay about 13.07% in social security contributions.',
        'I periodi di prova sono stati aboliti il 1º gennaio 2014, tranne nei contratti di studente e di lavoro interinale. I contratti a termine, a tempo parziale, di studente e interinali devono essere scritti; il contratto indica lo stipendio lordo, e i dipendenti versano circa il 13,07% di contributi sociali.', 'be-eures'],
      ['Collective agreements may add benefits such as a year-end bonus, so ask which joint committee covers the employer and compare offers on the yearly package, not the monthly figure alone.',
        'I contratti collettivi possono aggiungere benefici come una gratifica di fine anno, quindi chiedi quale commissione paritetica copre il datore di lavoro e confronta le offerte sul pacchetto annuale, non solo sulla cifra mensile.', 'be-eures ours'],
      ['Notice for a resignation is proportional to seniority and can never exceed 13 weeks, for notices served since 28 October 2023.',
        'Il preavviso per le dimissioni è proporzionale all’anzianità e non può mai superare 13 settimane, per i preavvisi dati dal 28 ottobre 2023.', 'be-notice'],
      ['Graduate programmes are permanent full-time contracts at BNP Paribas Fortis and KBC; the pages read do not say how long you have to accept an offer.',
        'I programmi per laureati sono contratti a tempo indeterminato a tempo pieno presso BNP Paribas Fortis e KBC; le pagine lette non dicono di quanto tempo si dispone per accettare un’offerta.', 'be-bnp be-kbc-jd ours']
    ],
    sponsor: [
      ['Each region sets its own salary floor for highly qualified single-permit workers in 2026: Wallonia €53,220 a year (€42,576 under 30), Brussels €3,703.44 a month and Flanders €48,912 a year (€39,129.60 under 30). The floor counts only fixed base salary.',
        'Ogni regione fissa la propria soglia salariale per i lavoratori altamente qualificati con permesso unico nel 2026: Vallonia 53.220 € l’anno (42.576 € sotto i 30 anni), Bruxelles 3.703,44 € al mese e Fiandre 48.912 € l’anno (39.129,60 € sotto i 30 anni). La soglia conta solo lo stipendio base fisso.', 'be-thresh'],
      ['Some professional-card applications in Brussels have taken up to five months, so raise the permit at the offer stage; an employer that has filed one before is a safer bet than a small firm that has not.',
        'Alcune domande di carta professionale a Bruxelles hanno richiesto fino a cinque mesi, quindi affronta il permesso al momento dell’offerta; un datore di lavoro che ne ha già presentata una è una scommessa più sicura di una piccola azienda che non l’ha mai fatto.', 'be-thresh ours'],
      ['Programmes ask for the right to work: UCB’s Graduate Development Programme lists legal right to work in Belgium as a condition, so non-EU graduates should check that before applying. The Blue Book admits non-EU nationals to only a limited number of places.',
        'I programmi chiedono il diritto di lavorare: il Graduate Development Programme di UCB indica il diritto legale di lavorare in Belgio come condizione, quindi i laureati extra-UE devono verificarlo prima di candidarsi. Il Blue Book ammette cittadini extra-UE solo per un numero limitato di posti.', 'be-ucb-gdp be-bluebook']
    ],
    where: [
      ['Public services: VDAB for Flanders (100,000 jobs on the day read), Actiris for Brussels and Le Forem for Wallonia, with EURES covering all of them and the German-speaking Community’s ADG.',
        'Servizi pubblici: VDAB per le Fiandre (100.000 posti il giorno della lettura), Actiris per Bruxelles e Le Forem per la Vallonia, con EURES che li copre tutti insieme all’ADG della Comunità germanofona.', 'be-vdab be-actiris be-forem be-eures'],
      ['Graduate content: Student.be lists fairs, company events and first jobs for new graduates; Jobat.be and Références run Job Fair Brussels; Deloitte, BNP Paribas Fortis, KBC, Proximus and UCB post their programmes on their own careers pages.',
        'Contenuti per laureati: Student.be elenca fiere, eventi aziendali e primi lavori per neolaureati; Jobat.be e Références organizzano Job Fair Brussels; Deloitte, BNP Paribas Fortis, KBC, Proximus e UCB pubblicano i propri programmi sulle pagine carriere.', 'be-fairs be-jobfair'],
      ['Public jobs and EU: EURES lists Selor for public-sector posts, and the Commission’s Blue Book site takes traineeship registrations.',
        'Lavori pubblici e UE: EURES indica Selor per i posti nel settore pubblico, e il sito Blue Book della Commissione raccoglie le iscrizioni ai tirocini.', 'be-eures be-bb-cal'],
      ['Other channels: EURES names company websites, job boards, recruitment and temporary agencies and LinkedIn, and some newspapers still publish vacancies at weekends.',
        'Altri canali: EURES indica i siti aziendali, i portali di annunci, le agenzie di selezione e interinali e LinkedIn, e alcuni giornali pubblicano ancora annunci nel fine settimana.', 'be-eures']
    ],
    mistakes: [
      ['Writing in the wrong language: match the language of the ad, French in Wallonia and Brussels, Dutch in Flanders and Brussels, and have a native speaker check anything in a second language.',
        'Scrivere nella lingua sbagliata: usa la lingua dell’annuncio, francese in Vallonia e a Bruxelles, olandese nelle Fiandre e a Bruxelles, e fai controllare a un madrelingua tutto ciò che è in una seconda lingua.', 'be-eures be-expatica'],
      ['Assuming English is enough: even in Brussels, French was named in over 80% of the offers that named a language, and Dutch in 73%.',
        'Credere che basti l’inglese: anche a Bruxelles il francese era indicato in oltre l’80% delle offerte che indicavano una lingua, e l’olandese nel 73%.', 'be-lang'],
      ['Putting age, nationality, marital status or gender on the CV, or attaching diplomas to it: EURES advises leaving the first four off, and diplomas go to the interview.',
        'Mettere età, nazionalità, stato civile o sesso nel CV, o allegarvi i diplomi: EURES consiglia di omettere i primi quattro, e i diplomi si portano al colloquio.', 'be-eures be-expatica'],
      ['Sending a cover letter with another company’s name left in it, or one that repeats the CV instead of showing motivation.',
        'Inviare una lettera di presentazione con il nome di un’altra azienda rimasto, o che ripete il CV invece di mostrare la motivazione.', 'be-bxt be-duo'],
      ['Treating the EU competition as an entry route: 174,727 people applied for 1,490 places in 2026, so a Blue Book traineeship or contract-agent post is the realistic first door, and its registration window is under four weeks.',
        'Trattare il concorso UE come via d’ingresso: 174.727 persone hanno presentato domanda per 1.490 posti nel 2026, quindi un tirocinio Blue Book o un posto da agente contrattuale è la porta d’ingresso realistica, e la sua finestra di iscrizione dura meno di quattro settimane.', 'be-epso be-bb-cal ours']
    ]
  },

  lang: [
    { f: 'finance', v: 'bilingual', lv: 'C1', t: [
      ['KBC’s commercial track asks for very good spoken and written Dutch; in the Actiris sample, 78.43% of offers in real estate, insurance, finance and law named a language requirement. No certificate is named: the interview is the test.',
        'Il percorso commerciale di KBC chiede un ottimo olandese parlato e scritto; nel campione di Actiris, il 78,43% delle offerte in immobiliare, assicurazioni, finanza e diritto indicava un requisito linguistico. Nessun certificato è indicato: la prova è il colloquio.', 'be-kbc-jd be-lang']
    ] },
    { f: 'accounting', v: 'bilingual', lv: 'B2', t: [
      ['In the Actiris sample 63.64% of administration and accounting offers named a language, and several Big Four advisory teams work in English.',
        'Nel campione di Actiris il 63,64% delle offerte di amministrazione e contabilità indicava una lingua, e diversi team di consulenza delle Big Four lavorano in inglese.', 'be-lang be-studely']
    ] },
    { f: 'consulting', v: 'bilingual', lv: 'B2', t: [
      ['Business management and services offers named a language in 74.51% of the Actiris sample; Big Four advisory teams often work in English, and a trilingual profile (French, Dutch, English) opens the most doors.',
        'Le offerte di gestione e servizi alle imprese indicavano una lingua nel 74,51% del campione di Actiris; i team di consulenza delle Big Four lavorano spesso in inglese, e un profilo trilingue (francese, olandese, inglese) apre più porte.', 'be-lang be-studely']
    ] },
    { f: 'business', v: 'english', lv: 'C1', t: [
      ['UCB’s Graduate Development Programme lists fluent English as mandatory and does not mention French or Dutch; the evidence is a short application questionnaire, not a certificate.',
        'Il Graduate Development Programme di UCB indica l’inglese fluente come obbligatorio e non cita francese o olandese; la prova è un breve questionario di candidatura, non un certificato.', 'be-ucb-gdp']
    ] },
    { f: 'public', v: 'bilingual', lv: 'C1', t: [
      ['The Blue Book asks EU nationals for C1 or C2 in English, French or German and B2 in a second EU language; non-EU applicants need C1 in one of the three.',
        'Il Blue Book chiede ai cittadini UE il livello C1 o C2 in inglese, francese o tedesco e B2 in una seconda lingua UE; i candidati extra-UE devono avere C1 in una delle tre.', 'be-bluebook']
    ] },
    { f: 'tech', v: 'bilingual', lv: 'B2', t: [
      ['In the Actiris sample 80% of IT offers named a language; Proximus describes its workplace as multilingual and lists no required language for its programme.',
        'Nel campione di Actiris l’80% delle offerte IT indicava una lingua; Proximus descrive il proprio ambiente di lavoro come multilingue e non indica una lingua obbligatoria per il suo programma.', 'be-lang be-prox']
    ] }
  ],

  programmes: [
    { n: 'Talent programmes (traineeships)', o: 'BNP Paribas Fortis', f: 'finance', in: null, w: null, lang: 'n/s', intl: 'unknown', ids: 'be-bnp' },
    { n: 'Young Graduates Commercial Track (Antwerp region)', o: 'KBC', f: 'finance', in: 5, w: null, lang: 'NL', intl: 'unknown', ids: 'be-kbc-jd' },
    { n: 'Proximus Graduate Program', o: 'Proximus', f: 'tech', in: 10, w: null, lang: 'n/s', intl: 'unknown', ids: 'be-prox' },
    { n: 'Graduate Development Programme', o: 'UCB', f: 'business', in: null, w: null, lang: 'EN', intl: 'local', ids: 'be-ucb be-ucb-gdp' },
    { n: 'Graduates starting in September 2027', o: 'Deloitte Belgium', f: 'accounting', in: null, w: null, lang: 'n/s', intl: 'unknown', ids: 'be-deloitte' },
    { n: 'Blue Book traineeship', o: 'European Commission', f: 'public', in: null, w: [2, 3], lang: 'EN FR DE', intl: 'eu', ids: 'be-bluebook be-bb-cal' }
  ],

  outcomes: [
    ['In 2025, 90.2% of Belgians aged 20 to 34 with a tertiary degree were in work, and 88.5% of those who left education within the last five years, against unemployment of 17.4% among all 15-to-24-year-olds.',
      'Nel 2025 il 90,2% dei belgi tra 20 e 34 anni con un titolo terziario lavorava, e l’88,5% di quelli usciti dall’istruzione negli ultimi cinque anni, contro una disoccupazione del 17,4% tra tutti i 15-24enni.', 'be-edat'],
    ['The job vacancy rate fell from 4.1% in the last quarter of 2024 to 3.5% in the last quarter of 2025, with 5.4% in professional, scientific and technical activities and 2.9% in finance and insurance, so the entry market is cooling.',
      'Il tasso di posti vacanti è sceso dal 4,1% dell’ultimo trimestre 2024 al 3,5% dell’ultimo trimestre 2025, con il 5,4% nelle attività professionali, scientifiche e tecniche e il 2,9% in finanza e assicurazioni, quindi il mercato d’ingresso si raffredda.', 'be-vac'],
    ['No source read gives a return-offer or conversion rate for Belgian internships or graduate programmes, nor a time to first job for internationals.',
      'Nessuna fonte letta indica un tasso di conferma o di conversione per i tirocini o i programmi per laureati belgi, né il tempo al primo lavoro per gli internazionali.', 'ours']
  ],

  sources: {
    'be-bluebook': ['employer-stated', 'European Commission traineeships: eligibility criteria', 'https://traineeships.ec.europa.eu/who-can-apply/eligibiliy-criteria_en', '2026-10-08'],
    'be-bb-cal': ['employer-stated', 'European Commission traineeships (Blue Book): application period for the October 2027 session', 'https://traineeships.ec.europa.eu/index_en', '2026-10-08'],
    'be-lang': ['anecdotal', 'UCLouvain master’s thesis analysing 1,000 Actiris job offers by language (22 April to 14 July 2023)', 'https://dial-mem.test.bib.ucl.ac.be/bitstreams/894785ae-fd20-4197-98ca-72893259fd81/download', '2026-10-08'],
    'be-studely': ['anecdotal', 'Studely: top companies hiring in Belgium for international graduates', 'https://www.studely.com/blog/france/vie-etudiante/top-companies-hiring-in-belgium-for-international-graduates', '2026-10-07'],
    'be-bnp': ['employer-stated', 'BNP Paribas Fortis: our talent programmes', 'https://www.bnpparibasfortis.com/our-vacancies/our-talent-programmes', '2026-10-08'],
    'be-kbc': ['employer-stated', 'Student.be: KBC Bank & Verzekering, Young Graduates Commercial Track', 'https://www.student.be/en/first-jobs/kbc-bank-verzekering-young-graduates-commercial-track-regio-antwerpen/', '2026-10-07'],
    'be-kbc-jd': ['employer-stated', 'Student.be: KBC Young Graduates Commercial Track, Antwerp region (requirements, language, contract, five places)', 'https://www.student.be/en/first-jobs/kbc-bank-verzekering-young-graduates-commercial-track-regio-antwerpen/', '2026-10-08'],
    'be-deloitte': ['employer-stated', 'Deloitte Belgium: Tax, starting in September 2027 (graduate starters’ job in Zaventem, Student.be listing)', 'https://www.student.be/nl/eerste-jobs/deloitte-belgium-tax-starting-in-september-2026-2f3ecdb3-2b88-486d-aecb-0d8dfdf9fee7', '2026-10-09'],
    'be-consultor': ['practitioner consensus', 'Consultor, citing L’Echo: in Belgium, recruitment at full speed (Big Four, undated)', 'https://www.consultor.fr/articles/en-belgique-des-recrutements-au-taquet', '2026-10-07'],
    'be-agoria': ['data', 'Kitalent: Hasselt’s ICT cluster and the talent gap (Agoria 2024 sector figures)', 'https://kitalent.com/articles/hasselt-ict-talent-gap', '2026-10-07'],
    'be-imec': ['data', 'La Libre: Belgium’s most attractive employer, Randstad Employer Brand Research, 22 April 2026', 'https://www.lalibre.be/economie/entreprises-startup/2026/04/22/voici-lemployeur-le-plus-attractif-de-belgique-selon-une-etude-de-randstad-DUC5QCXM7ZDS7B64AN7GUIDVFA/', '2026-10-07'],
    'be-eures': ['data', 'EURES: living and working conditions in Belgium (finding a job, CV, contracts)', 'https://eures.europa.eu/living-and-working/living-and-working-conditions-europe/living-and-working-conditions-belgium_en', '2026-10-08'],
    'be-duo': ['practitioner consensus', 'Duo for a JOB: the informal rules of job searching in Belgium', 'https://www.duoforajob.be/en/actualite/les-regles-informelles-de-la-recherche-demploi-en-belgique-ce-quil-faut-savoir', '2026-10-08'],
    'be-expatica': ['practitioner consensus', 'Expatica: Belgian CV and job interview tips', 'https://www.expatica.com/be/employment/finding-a-job/belgian-job-applications-writing-a-belgian-cv-and-interview-tips-102376', '2026-10-08'],
    'be-bxt': ['practitioner consensus', 'Brussels Times: how to stand out on the Brussels job market', 'https://www.brusselstimes.com/2085689/how-to-stand-out-on-the-brussels-job-market', '2026-10-08'],
    'be-prox': ['employer-stated', 'Student.be: launch your career with the Proximus Graduate Program 2026', 'https://www.student.be/en/student-life/from-kot-to-job-launch-your-career-with-the-proximus-graduate-program-2026/', '2026-10-08'],
    'be-ucb': ['employer-stated', 'UCB careers: early careers global programs', 'https://careers.ucb.com/global/en/early-careers-global-programs', '2026-10-08'],
    'be-ucb-gdp': ['employer-stated', 'StudentJob.be: UCB Graduate Development Program, Global Quality (posting closed)', 'https://www.studentjob.be/vacatures/8194676-graduate-development-program-global-quality', '2026-10-08'],
    'be-fairs': ['practitioner consensus', 'Student.be: job fairs and company events in Flanders and Brussels for new graduates in 2026 (page of 1 October 2026)', 'https://www.student.be/nl/student-life/jobfairs-en-bedrijfsevents-in-vlaanderen-en-brussel-voor-net-afgestudeerden-in-2026/', '2026-10-08'],
    'be-jobfair': ['employer-stated', 'Job Fair Brussels by Jobat.be and Références (17 September 2026)', 'https://www.brussels.be/job-fair-brussels', '2026-10-08'],
    'be-vdab': ['employer-stated', 'VDAB: the Flemish public employment service', 'https://www.vdab.be/', '2026-10-08'],
    'be-forem': ['employer-stated', 'Le Forem: the Walloon employment and training service', 'https://www.leforem.be/', '2026-10-08'],
    'be-actiris': ['employer-stated', 'Actiris: help for jobseekers who do not speak French or Dutch', 'https://www.actiris.brussels/en/citizens/', '2026-10-08'],
    'be-thresh': ['practitioner consensus', 'Brussels Times, citing KPMG: salary thresholds for foreign workers in 2026', 'https://www.brusselstimes.com/1929259/foreign-workers-in-belgium-face-steep-hike-in-minimum-salary-requirements', '2026-10-08'],
    'be-naric': ['data', 'vlaanderen.be: working in Flanders with a foreign diploma', 'https://www.vlaanderen.be/en/working-in-flanders-with-a-foreign-diploma', '2026-10-08'],
    'be-notice': ['practitioner consensus', 'LE Global: 13 weeks confirmed as the maximum notice period for leaving employees', 'https://leglobal.law/?p=28170', '2026-10-08'],
    'be-vac': ['data', 'Eurostat: job vacancy rate by NACE activity, quarterly (jvs_q_nace2), Belgium 2024 Q4 to 2025 Q4', 'https://ec.europa.eu/eurostat/databrowser/view/jvs_q_nace2/default/table', '2026-10-08'],
    'be-edat': ['data', 'Eurostat: employment rate of 20-34-year-olds by educational attainment (edat_lfse_24), 2025', 'https://ec.europa.eu/eurostat/databrowser/view/edat_lfse_24/default/table', '2026-10-08'],
    'be-bru': ['data', 'Eurostat: employment by NUTS 3 region and activity (nama_10r_3empers), Brussels 2023', 'https://ec.europa.eu/eurostat/databrowser/view/nama_10r_3empers/default/table', '2026-10-08'],
    'be-ec': ['employer-stated', 'European Commission: Commission staff', 'https://commission.europa.eu/about/organisation/commission-staff_en', '2026-10-08'],
    'be-epso': ['data', 'EPSO 2026 graduate competition (AD5), via the research library’s public-policy brief', 'research/careers/public-policy-and-academia.md', '2026-10-08']
  }
});
