/* How hiring works: South Korea. New reads on 7 Oct 2026 (Korea JoongAng Daily, Asia Economy,
 * Korea Pro); extended to the full schema on 8 Oct 2026 (Korea Times and Korea JoongAng Daily on
 * the second-half 2026 drives and on the KOTRA and Seoul job fairs, Asia Economy on the 2026 survey
 * and Shinhan Bank, Financial News, Samsung and Kakao notices, Saramin, JobKorea, Wanted, the
 * Ministry of Personnel Management and the KEDI graduate-employment release). The earlier lines
 * on the Incruit survey of 707 companies and on a 28.1% share of experienced new hires were not
 * found on the pages cited and have been replaced by the figures those pages do give. */
ATLAS.addEntry({
  id: 'KR',
  checked: '2026-10-08',
  review: '2027-04-30',

  lead: [
    ['Korea’s large groups used to hire new graduates in twice-yearly open recruitment (gongchae) with written aptitude tests; Hyundai Motor dropped mass hiring in 2019, LG followed and SK moved to hiring by need, so Samsung is the only one of the four major groups still holding it regularly, as it has since 1957.',
      'I grandi gruppi coreani assumevano i neolaureati con selezioni aperte due volte l’anno (gongchae) e test attitudinali scritti; Hyundai Motor ha abbandonato le assunzioni di massa nel 2019, LG l’ha seguita e SK è passata ad assunzioni secondo il bisogno, così Samsung è l’unico dei quattro grandi gruppi che le tiene ancora regolarmente, come fa dal 1957.', 'kr-sk kr-kt26'],
    ['Employers that hire as needed prefer people who already have experience: in a Saramin survey reported in October 2022, 85.9% of 560 companies preferred experienced candidates for entry-level posts, and a degree from a top university, test scores and internships (the “spec”) still filter applicants.',
      'I datori di lavoro che assumono secondo il bisogno preferiscono chi ha già esperienza: in un’indagine di Saramin riportata a ottobre 2022, l’85,9% di 560 aziende preferiva candidati con esperienza per posizioni d’ingresso, e una laurea di un’università di vertice, i punteggi dei test e i tirocini (lo “spec”) filtrano ancora i candidati.', 'kr-asiae ours'],
    ['The market is thawing in 2026: 51.2% of the 121 large companies in a Korea Economic Association survey had new-graduate hiring plans for the second half, up from 37.2% a year earlier.',
      'Nel 2026 il mercato si sta scongelando: il 51,2% delle 121 grandi aziende di un’indagine della Korea Economic Association aveva piani di assunzione di neolaureati per il secondo semestre, contro il 37,2% di un anno prima.', 'kr-kea']
  ],

  ways: [
    { name: ['Twice-yearly group open recruitment (Samsung)', 'Selezione aperta di gruppo due volte l’anno (Samsung)'], r: 'bulk', p: 'first', basis: 'data', t: [
      ['Samsung’s second-half 2026 round covered 19 affiliates, took applications on Samsung Careers until 15 September, held the GSAT aptitude test in October and interviews and medical checks in November. It plans to recruit about 12,000 people across 2026, new and experienced hires together.',
        'La tornata del secondo semestre 2026 di Samsung riguardava 19 affiliate, ha raccolto le candidature su Samsung Careers fino al 15 settembre, ha tenuto il test attitudinale GSAT a ottobre e colloqui e visite mediche a novembre. Prevede di assumere circa 12.000 persone nel 2026, tra nuovi laureati e profili con esperienza.', 'kr-kt26'],
      ['Across the top 500 firms, 54.9% of those with plans use both open and rolling recruitment, and open recruitment accounts for 62.7% of their new hires.',
        'Tra le prime 500 aziende, il 54,9% di quelle con piani usa sia la selezione aperta sia quella continua, e la selezione aperta rappresenta il 62,7% delle loro nuove assunzioni.', 'kr-kea']
    ] },
    { name: ['Rolling recruitment by business unit', 'Assunzioni continue per unità di business'], r: 'direct', p: 'first', basis: 'data', t: [
      ['Hyundai Motor dropped mass hiring in 2019, LG followed, and SK moved to hiring by each subsidiary when it needs staff, from 2022; SK hires about 8,500 people a year. Under its old system every subsidiary held its own interviews after a group written test.',
        'Hyundai Motor ha abbandonato le assunzioni di massa nel 2019, LG l’ha seguita, e SK è passata dal 2022 ad assunzioni da parte di ogni controllata quando ha bisogno di personale; SK assume circa 8.500 persone l’anno. Con il vecchio sistema ogni controllata teneva i propri colloqui dopo una prova scritta di gruppo.', 'kr-sk'],
      ['Banks mix both: Shinhan Bank planned about 150 hires in the first half of 2026 through open recruitment for retail and corporate finance, rolling recruitment for digital and ICT roles, and special tracks including candidates who passed the second round of the CPA exam.',
        'Le banche mescolano i due metodi: Shinhan Bank prevedeva circa 150 assunzioni nel primo semestre 2026 con selezione aperta per retail e finanza aziendale, selezione continua per i ruoli digitali e ICT, e percorsi speciali tra cui i candidati che hanno superato il secondo turno dell’esame da CPA.', 'kr-shb1'],
      ['Kakao has hired developers through blind public recruitment since 2017, asking for no education, major, age or gender; its 2021 round had two online coding tests, two interviews and a final selection in November.',
        'Kakao assume sviluppatori con selezioni pubbliche anonime dal 2017, senza chiedere titolo di studio, corso, età o genere; la tornata 2021 prevedeva due test di programmazione online, due colloqui e una selezione finale a novembre.', 'kr-kakao']
    ] },
    { name: ['Experience first, internship as the way to get it', 'Prima l’esperienza, il tirocinio per ottenerla'], r: 'intern', p: 'first intern', basis: 'data', t: [
      ['In the Saramin survey of October 2022, 85.9% of 560 companies preferred experienced candidates for entry-level posts, mainly so they could start work at once (80.5%); the applicants averaged 2.3 years of experience, and mid-career hires made up 34.7% of new hires, up from 26.1% in 2020.',
        'Nell’indagine di Saramin di ottobre 2022, l’85,9% di 560 aziende preferiva candidati con esperienza per posizioni d’ingresso, soprattutto per poter iniziare subito (80,5%); i candidati avevano in media 2,3 anni di esperienza, e le assunzioni a metà carriera erano il 34,7% delle nuove assunzioni, contro il 26,1% del 2020.', 'kr-asiae'],
      ['The new job-seeker visa (D-10) lets a graduate of a Korean university do an internship of up to one year at the same company from 29 October 2025, which is one way a newcomer can build the experience employers ask for.',
        'Il nuovo visto per la ricerca di lavoro (D-10) permette a un laureato di un’università coreana di fare un tirocinio fino a un anno presso la stessa azienda dal 29 ottobre 2025, una via per costruire l’esperienza richiesta dai datori di lavoro.', 'kr-visa']
    ] },
    { name: ['Job fairs for international students', 'Fiere del lavoro per studenti internazionali'], r: 'campus', p: 'first', basis: 'consensus', t: [
      ['KOTRA’s Job Fair for International Students was held at Coex in Seoul on 1 and 2 June 2026, with about 100 companies and about 2,500 job seekers expected; registration was free and interviews were arranged with companies that chose candidates.',
        'La Job Fair for International Students di KOTRA si è tenuta al Coex di Seul l’1 e il 2 giugno 2026, con circa 100 aziende e circa 2.500 candidati attesi; la registrazione era gratuita e i colloqui erano fissati con le aziende che sceglievano i candidati.', 'kr-kotra'],
      ['Seoul Job Connect 2026 follows on 18 November at SETEC in Gangnam, with a target of 100 firms and more than 3,000 applicants, on-site consulting on visa processing and labour rules, and employers looking for bilingual talent.',
        'Seoul Job Connect 2026 segue il 18 novembre al SETEC di Gangnam, con un obiettivo di 100 aziende e più di 3.000 candidati, consulenza in loco su pratiche di visto e regole del lavoro, e datori di lavoro in cerca di talenti bilingui.', 'kr-sjc']
    ] },
    { name: ['Job platforms and headhunters', 'Piattaforme di lavoro e cacciatori di teste'], r: 'agency', p: 'first exp', basis: 'consensus', t: [
      ['Saramin, JobKorea and Wanted carry open-recruitment calendars, entry-level and intern postings, company reviews and salary data; Saramin also lists headhunting postings and Wanted shows offers and interview proposals sent by employers. The front pages of all three are in Korean, and none shows an English version.',
        'Saramin, JobKorea e Wanted offrono calendari delle selezioni aperte, annunci per neolaureati e tirocinanti, recensioni delle aziende e dati sugli stipendi; Saramin elenca anche annunci di cacciatori di teste e Wanted mostra offerte e proposte di colloquio inviate dai datori di lavoro. Le pagine iniziali di tutte e tre sono in coreano, e nessuna mostra una versione inglese.', 'kr-saramin kr-jobkorea kr-wanted']
    ] },
    { name: ['Civil-service competitive exams', 'Concorsi pubblici'], r: 'public', p: 'first', basis: 'consensus', t: [
      ['The Ministry of Personnel Management runs open competitive examinations for grades 5, 7 and 9 under the State Public Officials Act, each with an exam notice, applications, the exam and a pass announcement. The page we read does not set out who may apply, and has a separate page on hiring foreign civil servants, so a foreign graduate should not plan on it.',
        'Il Ministero della Gestione del Personale organizza concorsi aperti per i gradi 5, 7 e 9 ai sensi della legge sui funzionari pubblici dello Stato, ciascuno con un bando, le domande, la prova e la pubblicazione degli idonei. La pagina letta non indica chi può candidarsi, e ha una pagina separata sull’assunzione di funzionari stranieri, quindi un laureato straniero non dovrebbe contarci.', 'kr-mpm ours']
    ] }
  ],

  cycle: [
    ['Fewer fresh graduates are being hired at the top groups: staff under 30 fell by nearly 5% over two years while those over 50 rose by almost 10% (Leaders Index, August 2024), and only 37.2% of large firms had second-half new-graduate plans in 2025 before the share rose to 51.2% in 2026.',
      'Nei grandi gruppi si assumono meno neolaureati: il personale sotto i 30 anni è calato di quasi il 5% in due anni mentre quello sopra i 50 è cresciuto di quasi il 10% (Leaders Index, agosto 2024), e solo il 37,2% delle grandi aziende aveva piani per neolaureati nel secondo semestre nel 2025 prima che la quota salisse al 51,2% nel 2026.', 'kr-pro kr-kea'],
    ['Among the 2026 firms with hiring plans, half expect to keep headcount where it was, 25.8% plan to cut it (down from 37.8%) and 24.2% plan to raise it.',
      'Tra le aziende con piani di assunzione nel 2026, la metà prevede di mantenere gli organici invariati, il 25,8% prevede di ridurli (contro il 37,8%) e il 24,2% di aumentarli.', 'kr-fki kr-kea']
  ],

  fields: [
    { f: 'finance', t: [
      ['Shinhan Bank planned about 150 hires in the first half of 2026 and about 130 in the second half, according to Financial News, which also reports that it dropped personal-statement questions and moved to video interviews and a single integrated interview stage.',
        'Shinhan Bank prevedeva circa 150 assunzioni nel primo semestre 2026 e circa 130 nel secondo, secondo Financial News, che riferisce anche che ha eliminato le domande del tema personale e passato ai colloqui video e a una fase di colloquio unica e integrata.', 'kr-shb1 kr-shb2']
    ] },
    { f: 'accounting', t: [
      ['The Big Four (Samil PwC, Samjong KPMG, Deloitte Anjin, EY Hanyoung) planned about 800 hires for 2023 against 1,275 in 2022, which would put them below the estimated minimum of 1,100 CPA exam passers for the first time since 2020.',
        'Le Big Four (Samil PwC, Samjong KPMG, Deloitte Anjin, EY Hanyoung) prevedevano circa 800 assunzioni per il 2023 contro 1.275 nel 2022, il che le avrebbe portate sotto il minimo stimato di 1.100 candidati che superano l’esame da CPA per la prima volta dal 2020.', 'kr-ked']
    ] },
    { f: 'business', t: [
      ['Samsung still holds group-wide open recruitment across its affiliates, with the GSAT aptitude test; its first-half 2024 round covered 19 affiliates and about 10,000 people, and its second-half 2026 round covered 19 again.',
        'Samsung tiene ancora selezioni aperte di gruppo in tutte le sue affiliate, con il test attitudinale GSAT; la tornata del primo semestre 2024 riguardava 19 affiliate e circa 10.000 persone, e quella del secondo semestre 2026 ancora 19.', 'kr-samsung kr-kt26']
    ] },
    { f: 'public', t: [
      ['The Ministry of Personnel Management recruits through open competitive exams for grades 5, 7 and 9; the page we read does not state a nationality rule but points to a separate page on hiring foreign civil servants.',
        'Il Ministero della Gestione del Personale recluta con concorsi aperti per i gradi 5, 7 e 9; la pagina letta non indica una regola di cittadinanza ma rimanda a una pagina separata sull’assunzione di funzionari stranieri.', 'kr-mpm']
    ] },
    { f: 'tech', t: [
      ['Kakao decides developer hiring on online coding tests, and its first test is blind, without asking for school, major or age. Samsung tests software applicants with a software competency test instead of the GSAT, and design applicants through portfolio reviews.',
        'Kakao decide le assunzioni di sviluppatori con test di programmazione online, e il primo test è anonimo, senza chiedere università, corso o età. Samsung mette alla prova i candidati software con un test di competenza software invece del GSAT, e i candidati di design con la valutazione del portfolio.', 'kr-kakao kr-kt26']
    ] },
    { f: 'ai', t: [
      ['Samsung’s plan to hire 60,000 people over five years, announced in September 2025, focuses on semiconductors, core components, biotechnology and AI; SK Group said it would hire 8,000 that year in AI, semiconductors and digital technologies.',
        'Il piano di Samsung di assumere 60.000 persone in cinque anni, annunciato a settembre 2025, si concentra su semiconduttori, componenti chiave, biotecnologie e IA; SK Group ha detto che quell’anno avrebbe assunto 8.000 persone in IA, semiconduttori e tecnologie digitali.', 'kr-kh25']
    ] }
  ],

  schools: [
    ['Kakao has not asked for education, major, age or gender in its developer applications since 2017 and judges candidates on skill tests and job fit, which makes it an exception: elsewhere a degree from a top university, test scores and internships (the “spec”) still filter applicants, in our reading.',
      'Kakao non chiede dal 2017 titolo di studio, corso, età o genere nelle candidature degli sviluppatori e giudica i candidati su test di competenza e adeguatezza al ruolo, il che ne fa un’eccezione: altrove una laurea di un’università di vertice, i punteggi dei test e i tirocini (lo “spec”) filtrano ancora i candidati, secondo la nostra lettura.', 'kr-kakao ours'],
    ['Hiring is run by the company, not through the campus: the open-recruitment drives take applications on the company’s own site (Samsung Careers, Shinhan Bank’s recruitment site) rather than through universities.',
      'La selezione è gestita dall’azienda, non attraverso il campus: le selezioni aperte raccolgono le candidature sul sito dell’azienda (Samsung Careers, il sito di selezione di Shinhan Bank) e non tramite le università.', 'kr-kt26 kr-shb2']
  ],

  events: [
    ['KOTRA’s Job Fair for International Students (1 and 2 June 2026, Coex, Seoul) offered lectures, career consultations and visa support sessions alongside company interviews; last year 102 companies attended.',
      'La Job Fair for International Students di KOTRA (l’1 e il 2 giugno 2026, Coex, Seul) offriva lezioni, consulenze di carriera e sessioni di supporto sui visti insieme ai colloqui con le aziende; l’anno scorso hanno partecipato 102 aziende.', 'kr-kotra'],
    ['Seoul Job Connect on 18 November 2026 (SETEC, Gangnam) adds career workshops, employment briefings and headshot photos for job seekers; the city aims for 100 firms and more than 3,000 applicants, up from about 80 firms and 2,000 job seekers last year.',
      'Seoul Job Connect del 18 novembre 2026 (SETEC, Gangnam) aggiunge workshop di carriera, incontri informativi sul lavoro e foto per i candidati; la città punta a 100 aziende e più di 3.000 candidati, contro circa 80 aziende e 2.000 candidati l’anno scorso.', 'kr-sjc'],
    ['In the 2023 second-half season, Hyundai Motor took applications from 1 to 14 September for 26 positions in six categories and held a job fair and an online information session, while LG held recruitment fairs at major universities.',
      'Nella stagione del secondo semestre 2023, Hyundai Motor ha raccolto candidature dal 1º al 14 settembre per 26 posizioni in sei categorie e ha tenuto una fiera del lavoro e un incontro informativo online, mentre LG ha tenuto fiere di selezione nelle principali università.', 'kr-kt23']
  ],

  customs: [
    { k: 'season', v: 'cyclical', t: [
      ['Two peaks a year: a first-half round starting in March (Samsung’s opened on 11 March in 2024) and a second-half round in September (applications until 15 September in 2026), with GSAT in October and interviews in November. Rolling hiring fills the rest of the year.',
        'Due picchi l’anno: una tornata del primo semestre che parte a marzo (quella di Samsung si è aperta l’11 marzo nel 2024) e una del secondo semestre a settembre (candidature fino al 15 settembre nel 2026), con GSAT a ottobre e colloqui a novembre. Le assunzioni continue coprono il resto dell’anno.', 'kr-samsung kr-kt26']
    ] },
    { k: 'masters', v: 'helpful', t: [
      ['Graduate-school graduates in the class of 2024 were counted as employed at 82.1%, against 62.8% for university graduates (Ministry of Education and KEDI).',
        'I laureati magistrali della classe 2024 risultavano occupati all’82,1%, contro il 62,8% dei laureati delle università (Ministero dell’Istruzione e KEDI).', 'kr-kedi']
    ] },
    { k: 'degrees', v: 'eval', t: [
      ['No recognition centre screens degrees for ordinary jobs. For the work visa the Korean employer files with the immigration office a contract, company registration and the candidate’s apostilled degree.',
        'Nessun centro di riconoscimento esamina i titoli per i lavori ordinari. Per il visto di lavoro il datore di lavoro coreano presenta all’ufficio immigrazione un contratto, la visura aziendale e la laurea del candidato con apostille.', 'kr-visa ours']
    ] },
    { k: 'brand', v: 'high', t: [
      ['The “spec” (university, test scores, internships) still filters applicants at large employers, in our reading; Kakao’s blind developer recruitment, which ignores school, is the exception we found.',
        'Lo “spec” (università, punteggi dei test, tirocini) filtra ancora i candidati presso i grandi datori di lavoro, secondo la nostra lettura; la selezione anonima degli sviluppatori di Kakao, che ignora l’università, è l’eccezione che abbiamo trovato.', 'kr-kakao ours']
    ] },
    { k: 'dual', v: 'little', t: [
      ['University graduates reach employers through open recruitment, rolling hiring and internships; apprenticeship or dual-study contracts are not a route we found in any source for university graduates.',
        'I laureati arrivano ai datori di lavoro tramite selezione aperta, assunzioni continue e tirocini; apprendistato e studio duale non sono una via che abbiamo trovato in alcuna fonte per i laureati universitari.', 'ours']
    ] },
    { k: 'publicw', v: 'mid', t: [
      ['The Ministry of Personnel Management runs open competitive exams for civil servants at grades 5, 7 and 9, but the page we read gives no count of posts and no rule on foreign applicants, so we rate the weight as medium on the existence of the system alone.',
        'Il Ministero della Gestione del Personale organizza concorsi aperti per funzionari ai gradi 5, 7 e 9, ma la pagina letta non dà il numero di posti né una regola per i candidati stranieri, quindi valutiamo il peso come medio sulla sola esistenza del sistema.', 'kr-mpm ours']
    ] },
    { k: 'sponsorr', v: 'some', t: [
      ['For the E-7 work visa the sponsoring company must employ at least 5 Korean insured staff, foreign E-7 holders may not exceed 20% of its permanent Korean staff, and the 2026 minimum pay for the general professional category is ₩31,120,000 a year; so start-ups below 5 Korean staff cannot sponsor. The rules themselves are under Visas.',
        'Per il visto di lavoro E-7 l’azienda sponsor deve avere almeno 5 dipendenti coreani assicurati, i titolari stranieri di E-7 non possono superare il 20% del personale coreano a tempo indeterminato, e la retribuzione minima 2026 per la categoria professionale generale è di 31.120.000 ₩ l’anno; quindi le start-up con meno di 5 dipendenti coreani non possono fare da sponsor. Le regole sono nella sezione Visti.', 'kr-visa']
    ] },
    { k: 'photo', v: 'common', t: [
      ['Traditionally expected, although the fair-hiring law, amended in 2019, bars employers with 30 or more staff from asking about appearance, birthplace or family. Seoul Job Connect offers headshot photos to job seekers.',
        'Tradizionalmente attesa, anche se la legge sulle assunzioni eque, modificata nel 2019, vieta ai datori con 30 o più dipendenti di chiedere aspetto, luogo di nascita o famiglia. Seoul Job Connect offre foto professionali ai candidati.', 'ours kr-sjc']
    ] },
    { k: 'cv', v: 'two', t: [
      ['Applicants fill in a résumé on the employer’s site or on a platform such as Saramin, which offers résumé templates and a cover-letter diagnosis tool. We found no page that sets a length, so treat two pages as our reading.',
        'I candidati compilano un curriculum sul sito del datore di lavoro o su una piattaforma come Saramin, che offre modelli di curriculum e uno strumento di diagnosi della lettera di presentazione. Non abbiamo trovato alcuna pagina che fissi una lunghezza, quindi considera due pagine come una nostra lettura.', 'kr-saramin ours']
    ] },
    { k: 'letter', v: 'expected', t: [
      ['A personal statement (jasoseo) is the usual part of an application: Saramin has a cover-letter diagnosis tool, and Shinhan Bank’s 2026 change was news precisely because it removed the personal-statement questions.',
        'Il tema personale (jasoseo) è la parte abituale di una candidatura: Saramin ha uno strumento di diagnosi della lettera di presentazione, e il cambiamento di Shinhan Bank nel 2026 ha fatto notizia proprio perché ha eliminato le domande del tema personale.', 'kr-saramin kr-shb2']
    ] },
    { k: 'refs', v: 'none', t: [
      ['References are not among the steps of the processes we read (applications, aptitude or coding tests, interviews, a medical check). Treat this as our reading.',
        'Le referenze non sono tra le fasi dei processi che abbiamo letto (candidature, test attitudinali o di programmazione, colloqui, visita medica). Consideralo una nostra lettura.', 'kr-kt26 ours']
    ] },
    { k: 'docs', v: 'certified', t: [
      ['For a work visa the company files with immigration the candidate’s degree with an apostille, so have the diploma apostilled before an offer; the file takes two to four weeks.',
        'Per un visto di lavoro l’azienda presenta all’immigrazione la laurea del candidato con apostille, quindi fai apostillare il diploma prima di un’offerta; la pratica richiede da due a quattro settimane.', 'kr-visa']
    ] },
    { k: 'salary', v: 'later', t: [
      ['Pay is set by the employer’s scale and raised at offer; Saramin and Wanted publish salary data by company and job group for reference. No page we read asks for an expectation in the application.',
        'La retribuzione è fissata dalla scala del datore di lavoro e comunicata all’offerta; Saramin e Wanted pubblicano dati sugli stipendi per azienda e gruppo professionale come riferimento. Nessuna pagina letta chiede un’aspettativa nella candidatura.', 'kr-saramin kr-wanted ours']
    ] },
    { k: 'check', v: 'some', t: [
      ['No page we read says how routine background or reference checks are. The processes end in a medical check at Samsung, and the offer is conditional on it.',
        'Nessuna pagina letta dice quanto siano di routine le verifiche dei precedenti o delle referenze. I processi si chiudono con una visita medica da Samsung, e l’offerta ne è condizionata.', 'kr-kt26 ours']
    ] },
    { k: 'contact', v: 'open', t: [
      ['Open recruitment takes applications on the company’s site and platform postings, and tests decide who goes through; Kakao’s first test needs only a name, e-mail and phone number.',
        'La selezione aperta raccoglie le candidature sul sito dell’azienda e negli annunci delle piattaforme, e i test decidono chi passa; il primo test di Kakao richiede solo nome, e-mail e numero di telefono.', 'kr-kt26 kr-kakao']
    ] },
    { k: 'abroad', v: 'hard', t: [
      ['A foreigner needs an employer that files for the E-7 visa before arrival, and an Italian on a working-holiday visa cannot switch to E-7 inside Korea but must leave and apply from a consulate. Fairs such as KOTRA’s and Seoul Job Connect are aimed at foreigners already studying in Korea.',
        'Uno straniero ha bisogno di un datore di lavoro che presenti la domanda per il visto E-7 prima dell’arrivo, e un italiano con visto vacanza-lavoro non può passare a E-7 in Corea ma deve lasciare il paese e fare domanda da un consolato. Fiere come quelle di KOTRA e Seoul Job Connect sono rivolte agli stranieri che già studiano in Corea.', 'kr-visa kr-kotra kr-sjc']
    ] },
    { k: 'language', v: 'local', t: [
      ['Korean for nearly all roles at Korean firms: the front pages of the main job platforms are in Korean and the processes we read are in Korean. Foreign firms and events such as Seoul Job Connect look for bilingual talent.',
        'Il coreano per quasi tutti i ruoli nelle aziende coreane: le pagine iniziali delle principali piattaforme di lavoro sono in coreano e i processi che abbiamo letto sono in coreano. Le aziende straniere e eventi come Seoul Job Connect cercano talenti bilingui.', 'kr-saramin kr-jobkorea kr-wanted kr-sjc ours']
    ] }
  ],

  rows: {
    process: [
      ['Samsung’s sequence is online application, screening, the GSAT aptitude test, interviews and a medical check; software applicants take a software competency test instead of the GSAT and design applicants a portfolio review. In 2026 that ran from early September to November.',
        'La sequenza di Samsung è candidatura online, screening, test attitudinale GSAT, colloqui e visita medica; i candidati software sostengono un test di competenza software al posto del GSAT e quelli di design una valutazione del portfolio. Nel 2026 è andata da inizio settembre a novembre.', 'kr-kt26'],
      ['SK’s old system was a written test, the SK Competency Test (reasoning and basic calculation), followed by each subsidiary’s own face-to-face interviews, held twice a year. Kakao’s developer round was two online coding tests, two interviews and a final selection about three months after applications opened.',
        'Il vecchio sistema di SK era una prova scritta, la SK Competency Test (ragionamento e calcolo di base), seguita dai colloqui di persona di ogni controllata, tenuti due volte l’anno. La selezione degli sviluppatori di Kakao prevedeva due test di programmazione online, due colloqui e una selezione finale circa tre mesi dopo l’apertura delle candidature.', 'kr-sk kr-kakao'],
      ['Shinhan Bank in 2026 removed the personal-statement questions, introduced video interviews and folded its two interview rounds into one integrated process of in-depth interviews, group interviews and AI collaboration interviews.',
        'Nel 2026 Shinhan Bank ha eliminato le domande del tema personale, introdotto i colloqui video e unito i due turni di colloquio in un unico processo integrato di colloqui approfonditi, colloqui di gruppo e colloqui di collaborazione con l’IA.', 'kr-shb2'],
      ['Interviews are in Korean at Korean firms. No page we read describes dress or punctuality norms, so ask the recruiter.',
        'I colloqui sono in coreano presso le aziende coreane. Nessuna pagina letta descrive le norme su abbigliamento e puntualità, quindi chiedi al selezionatore.', 'ours']
    ],
    offer: [
      ['Samsung’s 2026 round ended with interviews and medical checks in November, so offers come after them. Employment starts on a written contract; probation terms must be written into the contract or the work rules to be enforceable.',
        'La tornata 2026 di Samsung si è chiusa con colloqui e visite mediche a novembre, quindi le offerte arrivano dopo. Il lavoro inizia con un contratto scritto; i termini della prova devono essere scritti nel contratto o nel regolamento aziendale per essere validi.', 'kr-kt26 kr-prob'],
      ['Probation is typically three months, with up to six months for senior posts and no statutory cap in the Labor Standards Act. Probationers must receive at least the statutory minimum wage, and from three months of service the employer must give 30 days’ written notice of dismissal or pay in lieu.',
        'La prova dura di solito tre mesi, fino a sei per i ruoli senior e senza un tetto previsto dalla legge sugli standard del lavoro. I lavoratori in prova devono ricevere almeno il salario minimo di legge, e dopo tre mesi di servizio il datore di lavoro deve dare 30 giorni di preavviso scritto di licenziamento o l’indennità sostitutiva.', 'kr-prob kr-lsa'],
      ['Severance pay of 30 days of average wage per year of service is due once an employee has completed one year, on any termination including resignation.',
        'Il trattamento di fine rapporto di 30 giorni di retribuzione media per anno di servizio è dovuto dopo il compimento di un anno, in qualsiasi cessazione, dimissioni comprese.', 'kr-lsa'],
      ['Large employers set graduate pay on their own scale and we found no page showing candidates negotiating it, so treat negotiation as a matter for experienced hires (our reading).',
        'I grandi datori di lavoro fissano la retribuzione dei neolaureati su una scala propria e non abbiamo trovato pagine che mostrino candidati che la negoziano, quindi considera la negoziazione una questione per i profili con esperienza (nostra lettura).', 'ours']
    ],
    sponsor: [
      ['Few ordinary employers are set up to sponsor: the E-7 sponsor needs at least 5 Korean insured staff, foreign E-7 staff are capped at 20% of the permanent Korean headcount, and the pay floor for the general professional category is ₩31,120,000 a year in 2026.',
        'Pochi datori di lavoro ordinari sono attrezzati per sponsorizzare: lo sponsor E-7 deve avere almeno 5 dipendenti coreani assicurati, il personale straniero E-7 è limitato al 20% dell’organico coreano a tempo indeterminato, e la soglia retributiva per la categoria professionale generale è di 31.120.000 ₩ l’anno nel 2026.', 'kr-visa'],
      ['The employer files first, online with the immigration office, and the candidate receives a confirmation number and applies at the consulate; the filing takes two to four weeks. Employers want to hear that you can start within weeks of the confirmation and that the degree fits the job.',
        'Il datore di lavoro presenta la domanda per primo, online all’ufficio immigrazione, e il candidato riceve un numero di conferma e fa domanda al consolato; la pratica richiede da due a quattro settimane. I datori di lavoro vogliono sentire che puoi iniziare entro poche settimane dalla conferma e che il titolo è adatto al lavoro.', 'kr-visa ours'],
      ['Graduates of Korean universities can use the D-10 job-seeker visa for up to three years and do internships of up to one year at the same company, which lets an employer try a candidate before sponsoring. Graduates of a top-200 foreign university aged 29 or under skip the points test.',
        'I laureati di università coreane possono usare il visto D-10 per la ricerca di lavoro fino a tre anni e fare tirocini fino a un anno presso la stessa azienda, il che permette a un datore di lavoro di mettere alla prova un candidato prima di sponsorizzarlo. I laureati di un’università straniera tra le prime 200 con 29 anni o meno saltano il test a punti.', 'kr-visa'],
      ['Events such as KOTRA’s job fair and Seoul Job Connect put employers that expect foreign candidates in one place, with on-site consulting on visa processing.',
        'Eventi come la fiera del lavoro di KOTRA e Seoul Job Connect riuniscono in un unico luogo i datori di lavoro che si aspettano candidati stranieri, con consulenza in loco sulle pratiche di visto.', 'kr-kotra kr-sjc']
    ],
    where: [
      ['Saramin (entry-level and intern postings, recruitment calendar, company reviews, interview reviews), JobKorea (a section for new graduates and interns and one for open recruitment) and Wanted (recruitment calendar, employer offers) are the three large platforms; their front pages are in Korean.',
        'Saramin (annunci per neolaureati e tirocinanti, calendario delle selezioni, recensioni delle aziende, recensioni dei colloqui), JobKorea (una sezione per neolaureati e tirocinanti e una per le selezioni aperte) e Wanted (calendario delle selezioni, offerte dei datori di lavoro) sono le tre grandi piattaforme; le loro pagine iniziali sono in coreano.', 'kr-saramin kr-jobkorea kr-wanted'],
      ['Big employers recruit on their own sites: Samsung Careers for the group’s open recruitment, and Shinhan Bank’s recruitment site for its drives. Saramin links to KoMate, a service for recruiting foreign workers.',
        'I grandi datori di lavoro reclutano sui propri siti: Samsung Careers per la selezione aperta del gruppo, e il sito di selezione di Shinhan Bank per le sue tornate. Saramin rimanda a KoMate, un servizio per reclutare lavoratori stranieri.', 'kr-kt26 kr-shb2 kr-saramin'],
      ['For international students: the KOTRA job fair (registration through jffis.kotra.or.kr), Seoul Job Connect (18 November 2026) and your university’s career office.',
        'Per gli studenti internazionali: la fiera del lavoro di KOTRA (registrazione tramite jffis.kotra.or.kr), Seoul Job Connect (18 novembre 2026) e l’ufficio carriera della tua università.', 'kr-kotra kr-sjc ours'],
      ['The Ministry of Personnel Management (mpm.go.kr) publishes the civil-service exams and has a page on hiring foreign civil servants.',
        'Il Ministero della Gestione del Personale (mpm.go.kr) pubblica i concorsi per la funzione pubblica e ha una pagina sull’assunzione di funzionari stranieri.', 'kr-mpm']
    ],
    mistakes: [
      ['Missing the two windows. Samsung’s second-half 2026 applications closed on 15 September; the first-half round opens in March, and rolling postings elsewhere follow the company’s needs.',
        'Perdere le due finestre. Le candidature del secondo semestre 2026 di Samsung si sono chiuse il 15 settembre; la tornata del primo semestre si apre a marzo, e gli annunci continui altrove seguono le esigenze dell’azienda.', 'kr-kt26 kr-samsung'],
      ['Assuming open recruitment is still universal. Samsung is the only one of the four major groups that still holds it regularly; Hyundai Motor, LG and SK hire by need.',
        'Dare per scontato che la selezione aperta sia ancora universale. Samsung è l’unico dei quattro grandi gruppi che la tiene ancora regolarmente; Hyundai Motor, LG e SK assumono secondo il bisogno.', 'kr-kt26 kr-sk'],
      ['Applying as a no-experience graduate to teams that want a ready worker: 85.9% of companies in the Saramin survey preferred experienced candidates for entry-level posts, so internships and a first year of experience count.',
        'Candidarsi come neolaureato senza esperienza a gruppi che vogliono una persona già operativa: l’85,9% delle aziende dell’indagine di Saramin preferiva candidati con esperienza per posizioni d’ingresso, quindi contano tirocini e un primo anno di esperienza.', 'kr-asiae'],
      ['Leaving the visa switch late. After graduating, the student visa lasts at most 30 days, so the D-10 application has to be ready before it lapses.',
        'Rimandare il cambio di visto. Dopo la laurea il visto di studio dura al massimo 30 giorni, quindi la domanda per il D-10 deve essere pronta prima della scadenza.', 'kr-visa'],
      ['Counting on a small start-up to sponsor: a company with fewer than 5 Korean insured staff cannot file for an E-7 visa.',
        'Contare su una piccola start-up per la sponsorizzazione: un’azienda con meno di 5 dipendenti coreani assicurati non può presentare domanda per un visto E-7.', 'kr-visa']
    ]
  },

  lang: [
    { f: 'finance', v: 'local', lv: 'Korean, advanced', t: [
      ['Banks recruit through Korean-language drives on their own sites, with Korean-language platforms for postings; no page we read states a TOPIK level, so treat advanced Korean as the working assumption.',
        'Le banche reclutano con tornate in lingua coreana sui propri siti, con piattaforme in coreano per gli annunci; nessuna pagina letta indica un livello TOPIK, quindi considera come ipotesi di lavoro un coreano avanzato.', 'kr-shb2 kr-saramin ours']
    ] },
    { f: 'business', v: 'bilingual', lv: 'Korean and English', t: [
      ['Seoul Job Connect 2026 brings together local companies seeking bilingual talent, market analysts and trade specialists with foreign job seekers; roles outside such programmes ask for Korean.',
        'Seoul Job Connect 2026 mette in contatto aziende locali in cerca di talenti bilingui, analisti di mercato e specialisti del commercio con candidati stranieri; i ruoli fuori da tali programmi richiedono il coreano.', 'kr-sjc ours']
    ] },
    { f: 'tech', v: 'local', lv: 'Korean, advanced', t: [
      ['Kakao’s developer recruitment runs through its Korean-language talent site and coding tests; no page we read states a language level for developers.',
        'La selezione degli sviluppatori di Kakao passa dal suo sito per i talenti in coreano e da test di programmazione; nessuna pagina letta indica un livello linguistico per gli sviluppatori.', 'kr-kakao ours']
    ] },
    { f: 'ai', v: 'local', lv: 'Korean, advanced', t: [
      ['Samsung’s AI and semiconductor hiring goes through the same Samsung Careers site and open-recruitment tests as other roles; no page we read states a language level.',
        'Le assunzioni di Samsung in IA e semiconduttori passano dallo stesso sito Samsung Careers e dagli stessi test di selezione aperta degli altri ruoli; nessuna pagina letta indica un livello linguistico.', 'kr-kh25 kr-kt26 ours']
    ] }
  ],

  programmes: [
    { n: 'Second-half 2026 open recruitment (19 affiliates)', o: 'Samsung Group', f: 'business', in: null, w: [9, 9], lang: 'KO', intl: 'unknown', ids: 'kr-kt26' },
    { n: 'First-half 2024 open recruitment (19 affiliates, about 10,000 people)', o: 'Samsung Group', f: 'business', in: 10000, w: [3, 3], lang: 'KO', intl: 'unknown', ids: 'kr-samsung' },
    { n: 'First-half 2026 new-employee recruitment', o: 'Shinhan Bank', f: 'finance', in: 150, w: [3, 3], lang: 'KO', intl: 'unknown', ids: 'kr-shb1' },
    { n: 'Second-half 2026 new-employee recruitment', o: 'Shinhan Bank', f: 'finance', in: 130, w: [9, 9], lang: 'KO', intl: 'unknown', ids: 'kr-shb2' },
    { n: '2021 new developer open recruitment (eight affiliates, blind screening)', o: 'Kakao', f: 'tech', in: null, w: [8, 9], lang: 'KO', intl: 'unknown', ids: 'kr-kakao' },
    { n: 'Job Fair for International Students (about 100 companies)', o: 'KOTRA', f: 'business', in: null, w: [6, 6], lang: 'KO EN', intl: 'yes', ids: 'kr-kotra' }
  ],

  outcomes: [
    ['Of the 2024 graduating class of Korean higher education, 69.5% were counted as employed (70.3% a year earlier): 62.8% of university graduates and 82.1% of graduate-school graduates. The count is mostly people on a health-insurance payroll (87.0%) plus freelancers (7.4%).',
      'Della classe 2024 dell’istruzione superiore coreana il 69,5% risultava occupato (70,3% un anno prima): il 62,8% dei laureati delle università e l’82,1% dei laureati magistrali. Il conteggio riguarda soprattutto chi è iscritto all’assicurazione sanitaria aziendale (87,0%) più i lavoratori autonomi (7,4%).', 'kr-kedi'],
    ['By field the 2024 rate was 79.4% in medicine and health, 70.4% in engineering, 69.0% in social sciences and 61.1% in humanities.',
      'Per ambito il tasso 2024 era del 79,4% in medicina e sanità, del 70,4% in ingegneria, del 69,0% nelle scienze sociali e del 61,1% nelle materie umanistiche.', 'kr-kedi']
  ],

  sources: {
    'kr-sk': ['data', 'Korea JoongAng Daily, 26 January 2021: SK Group to scrap mass recruitment', 'https://www.koreajoongangdaily.com/business/sk-group-to-scrap-mass-recruitment/10247501', '2026-10-08'],
    'kr-asiae': ['data', 'Asia Economy, 26 October 2022: job seekers upset over companies preferring experienced “new” hires (Saramin survey of 560 companies)', 'https://view.asiae.co.kr/en/article/2022102514390701926', '2026-10-08'],
    'kr-pro': ['data', 'Korea Pro: chaebol increasingly lean on older workers instead of recruiting new talent, August 2024', 'https://koreapro.org/2024/08/aging-workforce-threatens-to-dull-south-korean-conglomerates-competitive-edge', '2026-10-08'],
    'kr-ked': ['data', 'KED Global: Korea’s Big Four accounting firms cut new hires (31 July 2023)', 'http://www.kedglobal.com/newsView/ked202307310003', '2026-10-08'],
    'kr-samsung': ['employer-stated', 'Samsung Group begins open hiring to secure new talent, March 2024 (Daum)', 'https://v.daum.net/v/20240311105704182', '2026-10-08'],
    'kr-kakao': ['employer-stated', 'Asia Economy, August 2020: Kakao opens public recruitment for entry-level developers with blind screening', 'https://view.asiae.co.kr/en/article/2020082411163002535', '2026-10-08'],
    'kr-kt26': ['employer-stated', 'The Korea Times, 7 September 2026: Samsung Group to begin second-half 2026 open recruitment', 'https://www.koreatimes.co.kr/business/companies/20260907/samsung-group-to-begin-2nd-half-2026-open-recruitment-1', '2026-10-08'],
    'kr-kh25': ['data', 'The Korea Herald, 18 September 2025: Samsung launches Korea’s biggest recruitment plan with 60,000 new hires', 'https://www.koreaherald.com/article/10578567', '2026-10-08'],
    'kr-fki': ['data', 'Korea JoongAng Daily, September 2026: half of companies plan to hire new grads this year, but remain cautious on numbers', 'https://www.koreajoongangdaily.com/business/half-of-companies-plan-to-hire-new-grads-this-year-but-remain-cautious-on-numbers/12896086', '2026-10-08'],
    'kr-kea': ['data', 'Asia Economy, 29 September 2026: Large corporations resume second-half hiring (Korea Economic Association survey of the top 500 firms)', 'https://view.asiae.co.kr/en/article/2026092814392609833', '2026-10-08'],
    'kr-kt23': ['practitioner consensus', 'The Korea Times, 30 August 2023: jobseekers face tougher path to Samsung, SK, Hyundai Motor, LG', 'https://www.koreatimes.co.kr/amp/business/companies/20230830/jobseekers-face-tougher-path-to-samsung-sk-hyundai-motor-lg', '2026-10-08'],
    'kr-shb1': ['employer-stated', 'Asia Economy, 23 March 2026: Shinhan Bank to recruit around 150 new employees in the first half of the year', 'https://view.asiae.co.kr/en/article/2026032314521266384', '2026-10-08'],
    'kr-shb2': ['practitioner consensus', 'Financial News, 9 September 2026: Shinhan Bank second-half 2026 recruitment (about 130 hires, video and integrated interviews)', 'https://en.fnnews.com/news/202609091444281081', '2026-10-08'],
    'kr-kotra': ['employer-stated', 'Korea JoongAng Daily, 6 April 2026: Kotra to host annual Job Fair for International Students in June', 'https://www.koreajoongangdaily.com/korea/kotra-to-host-annual-job-fair-for-international-students-in-june/12564989', '2026-10-08'],
    'kr-sjc': ['employer-stated', 'The Korea Times, 28 September 2026: Seoul job fair aims to connect foreign job seekers with local firms', 'https://www.koreatimes.co.kr/southkorea/20260928/seoul-job-fair-aims-to-connect-foreign-job-seekers-with-local-firms', '2026-10-08'],
    'kr-saramin': ['employer-stated', 'Saramin: job search and career-matching platform', 'https://www.saramin.co.kr', '2026-10-08'],
    'kr-jobkorea': ['employer-stated', 'JobKorea: job search and recruitment platform', 'https://www.jobkorea.co.kr', '2026-10-08'],
    'kr-wanted': ['employer-stated', 'Wanted: job platform (recruitment calendar, offers, salary by job group)', 'https://www.wanted.co.kr', '2026-10-08'],
    'kr-mpm': ['data', 'Ministry of Personnel Management: recruitment of civil servants (open competitive examinations)', 'https://www.mpm.go.kr/english/system/infoJobs/recruitSys02', '2026-10-08'],
    'kr-kedi': ['data', 'Ministry of Education and KEDI: employment of the 2024 graduating class', 'https://www.kedi.re.kr/khome/mobile2/announce/selectAnnounceForm.do?selectTp=0&board_sq_no=3&article_sq_no=36242&currentPage=1', '2026-10-08'],
    'kr-visa': ['data', 'Admetia research library: visas_immigration/south_korea (E-7 sponsor rules, D-10 reform of 29 October 2025, apostille, 30-day switch)', 'research/visas_immigration/south_korea/south_korea_visas_immigration_guide.md', '2026-10-05'],
    'kr-prob': ['practitioner consensus', 'Asanify: probation period in South Korea (length, notice, written terms)', 'https://asanify.com/global-employer-of-record/south-korea/probation-period/', '2026-10-08'],
    'kr-lsa': ['practitioner consensus', 'Teamed: South Korea termination and severance (30 days’ notice, severance after one year)', 'https://www.teamed.global/country-hiring-guides/south-korea/termination-and-severance', '2026-10-08']
  }
});
