/* How hiring works: Israel. Extended on 8 Oct 2026 to the full schema. Earlier reads (7 Oct 2026): Globes on junior tech
 * jobs and the tech workforce, Salesforce Engineering, the Hebrew University business school, Hatzava's profile. Pages
 * opened on 8 Oct 2026: Nefesh B'Nefesh guides (CV, interviews, after the army, banking, accounting, civil service, degree
 * recognition, notice), the CTech article on Viola Group's 2019 survey, Calcalist (14 Sep 2026) on graduates among job
 * seekers, the Jerusalem Post on the May 2026 labour-force survey and on the plan to lengthen service, Wikipedia on
 * conscription, Herzog Fox Neeman on termination, Rivermate's Israel guides (updated 28 Jul 2026), the IAI jobs and
 * students pages, Check Point's programmes page, Tel Aviv University's fair pages, Mobileye's careers page, the AllJobs and
 * JobMaster front pages, trade.gov on professional licensing, JobMob (2015), and the library's visa guide. Corrections to
 * the 7 Oct text: the 11-month junior search is from Globes of January 2025 (not the June 2025 article that gives 5,641 and
 * 88); the January 2025 article gives the fall in junior openings from an average of 300 to a single digit without
 * dating the 300; the Salesforce profile says nothing about unit scouting at school age, so that claim is gone; the
 * Hebrew University page does not state the CPA exam and internship rules, so they are taken from Nefesh B'Nefesh, which
 * is itself inconsistent on the internship length; Hatzava's "about 14,000" members could not be confirmed and is gone.
 * Not established: Hebrew levels or certificates by employer, any graduate programme at a bank with its own page, the
 * citizenship and security-clearance rules for graduates at IAI, Rafael and Elbit (IAI's page only lists the
 * suitability questionnaire; Rafael's page returned nothing), entry pay outside accounting, how often employers ask for
 * salary expectations in the first application, and whether a photo is expected. */
ATLAS.addEntry({
  id: 'IL',
  checked: '2026-10-08',
  review: '2027-04-08',

  lead: [
    ['Israeli tech hires largely through networks formed in service and at university: in a 2019 survey of Viola Group portfolio companies 90% ran a friend-referral programme and 47% named it their most effective source, and a Salesforce Engineering profile says unit experience convinced a team to interview one candidate. Juniors face a thin market, with 88 of 5,641 tech vacancies in June 2025 aimed at people without experience; outside tech Hebrew is the working language, and a foreign graduate needs an employer ready to sponsor a B/1 work permit, so the market is built for Israeli graduates.',
      'L’high-tech israeliano assume in gran parte tramite reti nate nel servizio militare e all’università: in un’indagine del 2019 sulle aziende in portafoglio a Viola Group il 90% aveva un programma di segnalazione tra conoscenti e il 47% lo indicava come la fonte più efficace, e un profilo di Salesforce Engineering racconta che l’esperienza in un’unità militare ha convinto un team a intervistare una candidata. I junior trovano un mercato ristretto, con 88 posti su 5.641 vacancy tech di giugno 2025 rivolti a persone senza esperienza; fuori dal tech la lingua di lavoro è l’ebraico, e un laureato straniero ha bisogno di un datore di lavoro disposto a sponsorizzare un permesso di lavoro B/1, quindi il mercato è costruito sui laureati israeliani.', 'il-viola il-salesforce il-globes il-vis']
  ],

  ways: [
    { name: ['Referral through army, university and employee networks', 'Segnalazione tramite le reti dell’esercito, dell’università e dei dipendenti'], r: 'network', p: 'first exp', basis: 'data', t: [
      ['In a 2019 survey by Viola Group of its portfolio companies’ HR heads, 90% of the Israeli companies ran a friend-referral recruitment programme and 47% named it their most effective source; the survey is old and covers one investor’s companies.',
        'In un’indagine del 2019 di Viola Group tra i responsabili HR delle sue aziende in portafoglio, il 90% delle aziende israeliane aveva un programma di segnalazione tra conoscenti e il 47% lo indicava come la fonte più efficace; l’indagine è datata e riguarda le aziende di un solo investitore.', 'il-viola'],
      ['Globes reported in June 2025 that candidates with industry connections are favoured and often have them before landing a first job; a Salesforce Engineering profile has one engineer reaching the firm through a classmate from the degree programme.',
        'Globes ha riportato a giugno 2025 che i candidati con conoscenze nel settore sono favoriti e spesso le hanno prima ancora di ottenere un primo lavoro; un profilo di Salesforce Engineering racconta di un ingegnere arrivato in azienda tramite un compagno del corso di laurea.', 'il-globes il-salesforce']
    ] },
    { name: ['University job fairs and student-union recruitment days', 'Fiere del lavoro universitarie e giornate di reclutamento delle associazioni studentesche'], r: 'campus', p: 'first intern', basis: 'consensus', t: [
      ['Tel Aviv University holds a technology career fair each winter for engineering and exact-sciences students and alumni (7 January 2026, dozens of technology companies, CVs handed in on the spot) and a larger general job fair each spring; the Hebrew University business school’s student union organises recruitment days where firms visit the campus.',
        'La Tel Aviv University tiene ogni inverno una fiera della carriera tecnologica per studenti ed ex studenti di ingegneria e scienze esatte (7 gennaio 2026, decine di aziende tecnologiche, CV consegnati sul posto) e ogni primavera una fiera del lavoro generale più grande; l’associazione studentesca della scuola di business dell’Università Ebraica organizza giornate di reclutamento in cui le aziende visitano il campus.', 'il-tau il-tau-cdc il-huji'],
      ['Employers also go to students directly: IAI lists university recruitment fairs, open days, site tours, hackathons and meetups among its student activities.',
        'I datori di lavoro vanno anche direttamente dagli studenti: IAI elenca tra le sue attività per studenti fiere di reclutamento nelle università, giornate aperte, visite ai siti, hackathon e incontri.', 'il-iai-stu']
    ] },
    { name: ['Student jobs and final-year projects that turn into offers', 'Lavori da studente e progetti di tesi finale che diventano offerte'], r: 'intern', p: 'intern first', basis: 'consensus', t: [
      ['Check Point lists a Student Program for R&D Israel and says some students move into full-time roles after graduating; IAI lets students do their final-year project inside company projects under engineers’ supervision and says it supports combining work and study.',
        'Check Point elenca uno Student Program for R&D Israel e dice che alcuni studenti passano a ruoli a tempo pieno dopo la laurea; IAI consente agli studenti di svolgere il progetto finale all’interno di progetti aziendali sotto la supervisione di ingegneri e dice di sostenere la combinazione di lavoro e studio.', 'il-cp il-iai-stu'],
      ['The route is for students already enrolled in Israel: the library’s visa guide finds no stand-alone internship visa, A/2 students may not work outside the university except as teaching assistants, and an internship on a tourist or ETA-IL status is illegal work.',
        'La via è per chi è già iscritto in Israele: la guida ai visti della libreria non trova alcun visto di tirocinio autonomo, gli studenti A/2 non possono lavorare fuori dall’università se non come assistenti didattici, e un tirocinio con status turistico o ETA-IL è lavoro illegale.', 'il-vis']
    ] },
    { name: ['Direct application through employer sites and Hebrew job boards', 'Candidatura diretta tramite i siti dei datori di lavoro e le bacheche di lavoro in ebraico'], r: 'direct', p: 'first exp', basis: 'anecdotal', t: [
      ['AllJobs, which calls itself Israel’s largest job site, showed 33,500 jobs when we read it, with student-job and no-experience categories; JobMaster has categories for students, no experience, discharged soldiers, government jobs and internships. Both front pages we read are in Hebrew.',
        'AllJobs, che si definisce il più grande sito di lavoro di Israele, mostrava 33.500 offerte quando l’abbiamo letto, con categorie per lavori da studente e senza esperienza; JobMaster ha categorie per studenti, senza esperienza, soldati congedati, lavori pubblici e tirocini. Entrambe le pagine iniziali che abbiamo letto sono in ebraico.', 'il-alljobs il-jobmaster'],
      ['The market for juniors is thin: Globes counted 88 of 5,641 tech vacancies (1.5%) aimed at candidates without experience in June 2025, and told of a student who sent about 300 CVs in six months and received one response.',
        'Il mercato per i junior è sottile: Globes ha contato 88 posti su 5.641 vacancy tech (l’1,5%) rivolti a candidati senza esperienza a giugno 2025, e ha raccontato di uno studente che ha inviato circa 300 CV in sei mesi ricevendo una sola risposta.', 'il-globes il-globes2']
    ] },
    { name: ['Bank training programmes and defence-industry student schemes', 'Programmi di formazione delle banche e percorsi per studenti nell’industria della difesa'], r: 'scheme', p: 'first', basis: 'anecdotal', t: [
      ['Nefesh B’Nefesh says the big banks (Leumi, Hapoalim, Mizrahi-Tefahot, Discount) run training programmes that are often not advertised, and advises sending a CV with a cover letter to each bank’s HR department.',
        'Nefesh B’Nefesh dice che le grandi banche (Leumi, Hapoalim, Mizrahi-Tefahot, Discount) gestiscono programmi di formazione spesso non pubblicizzati, e consiglia di inviare un CV con una lettera di presentazione all’ufficio HR di ciascuna banca.', 'il-nbn-bank'],
      ['IAI’s student programmes include Engineers for Industry, a funded track for women students at Ben-Gurion University, the Hebrew University, Tel Aviv University and the Technion, with placement during the degree and a job offer after graduation, and Atidim for Industry for students from development towns and lower socio-economic backgrounds, linked to the IDF academic reserve.',
        'I programmi per studenti di IAI comprendono Engineers for Industry, un percorso finanziato per studentesse della Ben-Gurion University, dell’Università Ebraica, della Tel Aviv University e del Technion, con inserimento durante gli studi e un’offerta di lavoro dopo la laurea, e Atidim for Industry per studenti delle città di sviluppo e di contesti socioeconomici più modesti, legato alla riserva accademica dell’IDF.', 'il-iai-stu']
    ] },
    { name: ['Employer-sponsored foreign-expert hire (B/1)', 'Assunzione di un esperto straniero sponsorizzata dal datore (B/1)'], r: 'direct', p: 'exp', basis: 'consensus', t: [
      ['The library’s visa guide records that the employer applies and pays: a base salary of at least NIS 27,132 a month in 2026 (twice the national average), NIS 1,420 for the application, NIS 11,525 a year for the permit and 60 to 90 working days; firms certified by the Israel Innovation Authority can use a fast track of 6 to 10 working days.',
        'La guida ai visti della libreria registra che è il datore di lavoro a presentare la domanda e a pagare: una retribuzione base di almeno 27.132 NIS al mese nel 2026 (il doppio della media nazionale), 1.420 NIS per la domanda, 11.525 NIS all’anno per il permesso e da 60 a 90 giorni lavorativi; le aziende certificate dall’Israel Innovation Authority possono usare una corsia veloce di 6-10 giorni lavorativi.', 'il-vis'],
      ['Graduates of Israeli universities in STEM fields are exempt from the double-average wage threshold for up to 3 years after graduating, within 500 permits a year; a degree from Italy or elsewhere in Europe gets no such exemption.',
        'I laureati di università israeliane in discipline STEM sono esentati dalla soglia del doppio della retribuzione media fino a 3 anni dopo la laurea, entro 500 permessi all’anno; un titolo conseguito in Italia o altrove in Europa non gode di tale esenzione.', 'il-vis']
    ] }
  ],

  cycle: [
    ['Junior tech openings are scarce: 88 of 5,641 open tech vacancies in June 2025 were aimed at candidates without experience, and Globes reported in January 2025 that the average junior job search had risen to 11 months and that new junior openings per month had fallen from an average of 300 to a single digit.',
      'I posti tech per i junior sono scarsi: 88 su 5.641 vacancy tech aperte a giugno 2025 erano rivolte a candidati senza esperienza, e Globes ha riportato a gennaio 2025 che la ricerca media di un junior era salita a 11 mesi e che le nuove offerte mensili per junior erano scese da una media di 300 a una sola cifra.', 'il-globes il-globes2'],
    ['There is no single graduate season: Tel Aviv University’s technology fair falls each winter (7 January 2026) and its general job fair each spring, while vacancies are posted all year (AllJobs showed 33,500 jobs).',
      'Non c’è un’unica stagione per i laureati: la fiera tecnologica della Tel Aviv University cade ogni inverno (7 gennaio 2026) e la sua fiera generale ogni primavera, mentre le offerte sono pubblicate tutto l’anno (AllJobs mostrava 33.500 offerte).', 'il-tau il-tau-cdc il-alljobs'],
    ['Military service shapes the calendar: Wikipedia gives the minimum for men as 2 years and 8 months as of 2022, and a December 2025 plan would lift it to 36 months but was not yet law when reported; “reserved jobs” for newly discharged soldiers are time-limited and pay around the minimum wage.',
      'Il servizio militare condiziona il calendario: Wikipedia indica per gli uomini un minimo di 2 anni e 8 mesi al 2022, e un piano del dicembre 2025 lo porterebbe a 36 mesi ma non era ancora legge quando è stato riportato; i «lavori riservati» ai soldati appena congedati sono a termine e pagano circa il salario minimo.', 'il-wiki il-jpost-svc il-nbn-army'],
    ['Hiring takes weeks: the 2019 Viola survey put the average at 6 weeks for general and administrative roles, 7.5 for marketing and 8 for R&D, and a foreign hire adds 60 to 90 working days for the work permit (6 to 10 on the fast track).',
      'Assumere richiede settimane: l’indagine Viola del 2019 indicava una media di 6 settimane per i ruoli generali e amministrativi, 7,5 per il marketing e 8 per la R&S, e un assunto straniero aggiunge da 60 a 90 giorni lavorativi per il permesso di lavoro (6-10 con la corsia veloce).', 'il-viola il-vis']
  ],

  schools: [
    ['Tel Aviv University’s Career Development Center offers one-to-one counselling, workshops, company presentations and the two fairs; Ben-Gurion University, the Hebrew University, Tel Aviv University and the Technion are the four universities IAI names for its women’s engineering programme.',
      'Il Career Development Center della Tel Aviv University offre colloqui individuali di orientamento, workshop, presentazioni di aziende e le due fiere; la Ben-Gurion University, l’Università Ebraica, la Tel Aviv University e il Technion sono le quattro università che IAI cita per il suo programma di ingegneria al femminile.', 'il-tau-cdc il-iai-stu'],
    ['The Hebrew University’s business school says many of its accounting graduates land internships with the Big Four in Israel and that it revamped the degree with the Israel Accountancy Council.',
      'La scuola di business dell’Università Ebraica dice che molti dei suoi laureati in contabilità ottengono tirocini presso le Big Four in Israele e che ha rivisto il corso di laurea insieme all’Israel Accountancy Council.', 'il-huji'],
    ['Foreign universities do not recruit here, and we found no ranking of schools by Israeli employers. This is our reading.',
      'Le università estere non reclutano qui, e non abbiamo trovato alcuna classifica delle scuole da parte dei datori di lavoro israeliani. È una nostra lettura.', 'ours']
  ],

  events: [
    ['Tel Aviv University Technology Career Fair: 7 January 2026 at 10:00, for students and alumni of the Faculties of Engineering and Exact Sciences, dozens of technology and high-tech companies, CVs handed in on the spot; the page calls it an annual event.',
      'Fiera della Carriera Tecnologica della Tel Aviv University: 7 gennaio 2026 alle 10:00, per studenti ed ex studenti delle Facoltà di Ingegneria e Scienze Esatte, decine di aziende tecnologiche e high-tech, CV consegnati sul posto; la pagina la definisce un evento annuale.', 'il-tau'],
    ['Tel Aviv University general Job Fair: held each spring for students of all fields; the page gives no date or number of employers.',
      'Fiera del lavoro generale della Tel Aviv University: si tiene ogni primavera per studenti di tutti i campi; la pagina non indica una data né il numero di aziende.', 'il-tau-cdc'],
    ['Hebrew University business school recruitment days, organised by the student union with visiting firms; the page gives no dates.',
      'Giornate di reclutamento della scuola di business dell’Università Ebraica, organizzate dall’associazione studentesca con aziende in visita; la pagina non indica date.', 'il-huji']
  ],

  fields: [
    { f: 'finance', t: [
      ['A Nefesh B’Nefesh interview rates Hebrew 8 out of 10 in essentiality for financial jobs, with niche players such as private banks, hedge funds, private equity and fintech not always requiring the best Hebrew; the training programmes at the big banks are often not advertised.',
        'Un’intervista di Nefesh B’Nefesh valuta l’ebraico 8 su 10 per essenzialità nei lavori finanziari, con attori di nicchia come private bank, hedge fund, private equity e fintech che non sempre richiedono un ebraico perfetto; i programmi di formazione delle grandi banche spesso non sono pubblicizzati.', 'il-nbn-bank'],
      ['Bank Leumi’s careers page invites applicants who are residents of Israel and hold a recognised academic degree, in fields such as economics, business, accounting and computer science.',
        'La pagina carriere di Bank Leumi invita candidati residenti in Israele e in possesso di un titolo accademico riconosciuto, in campi come economia, gestione aziendale, contabilità e informatica.', 'il-leumi']
    ] },
    { f: 'accounting', t: [
      ['The Israeli affiliates of the Big Four (Deloitte’s Brightman Almagor Zohar, EY’s Kost Forer Gabbay & Kasierer, KPMG’s Somekh Chaikin, PwC’s Kesselman & Kesselman) hire CPAs and non-CPAs for tax, audit and advisory; one interviewee in the Nefesh B’Nefesh guide says a newly qualified accountant can expect NIS 7,000 to 8,000 gross a month, and another puts junior to senior auditors at NIS 6,500 to 8,500.',
        'Le affiliate israeliane delle Big Four (Brightman Almagor Zohar per Deloitte, Kost Forer Gabbay & Kasierer per EY, Somekh Chaikin per KPMG, Kesselman & Kesselman per PwC) assumono CPA e non CPA per fiscalità, revisione e consulenza; un intervistato nella guida di Nefesh B’Nefesh dice che un contabile abilitato da poco può aspettarsi 7.000-8.000 NIS lordi al mese, e un altro indica per i revisori da junior a senior 6.500-8.500 NIS.', 'il-nbn-acc'],
      ['The same guide says Israel requires 15 exams for the CPA licence, held twice a year, and gives the mandatory internship (staj) as 6 months in one place and two years in another, so confirm with the Israel Auditors Council; Hebrew is called crucial for dealing with the tax offices.',
        'La stessa guida dice che Israele richiede 15 esami per l’abilitazione CPA, tenuti due volte l’anno, e indica il tirocinio obbligatorio (staj) di 6 mesi in un punto e di due anni in un altro, quindi va verificato con l’Israel Auditors Council; l’ebraico è definito cruciale per trattare con gli uffici delle imposte.', 'il-nbn-acc']
    ] },
    { f: 'public', t: [
      ['Nefesh B’Nefesh says civil-service posts are often filled before they are announced publicly, that all communication is in Hebrew and that selection includes intelligence and psychological (psychotechnic) exams; it names the Civil Service Commission, Jobiz and GovJob as places where government jobs are posted.',
        'Nefesh B’Nefesh dice che i posti nella pubblica amministrazione sono spesso coperti prima di essere annunciati pubblicamente, che tutta la comunicazione avviene in ebraico e che la selezione comprende esami di intelligenza e psicologici (psicotecnici); indica la Civil Service Commission, Jobiz e GovJob come luoghi in cui sono pubblicati i lavori pubblici.', 'il-nbn-gov']
    ] },
    { f: 'tech', t: [
      ['Israel’s tech workforce fell to about 409,000 at the end of 2025 from about 417,000, which Ethosia called the first contraction in more than a decade; the Central Bureau of Statistics counted 401,800 salaried tech jobs in September 2025.',
        'La forza lavoro tech israeliana è scesa a circa 409.000 persone a fine 2025 dalle circa 417.000, e Ethosia ha parlato della prima contrazione in più di un decennio; l’Ufficio centrale di statistica contava 401.800 posti tech dipendenti a settembre 2025.', 'il-globes3'],
      ['Check Point’s programmes page lists a Student Program for R&D Israel; Mobileye’s careers page lists posts in Jerusalem, Ramat Gan, Petah Tikva, Haifa and Tel Aviv and sends applicants to its jobs page, and states no programme for graduates.',
        'La pagina dei programmi di Check Point elenca uno Student Program for R&D Israel; la pagina carriere di Mobileye elenca sedi a Gerusalemme, Ramat Gan, Petah Tikva, Haifa e Tel Aviv e rimanda i candidati alla pagina delle offerte, senza indicare alcun programma per laureati.', 'il-cp il-mobileye']
    ] },
    { f: 'cyber', t: [
      ['Hatzava describes itself as a community of alumni of the IDF’s technology units that helps members with job search, career advice and relocation; the description comes from a start-up directory profile and we found no membership figure.',
        'Hatzava si descrive come una comunità di ex membri delle unità tecnologiche dell’IDF che aiuta gli iscritti con la ricerca di lavoro, la consulenza di carriera e il trasferimento; la descrizione viene dal profilo di un elenco di start-up e non abbiamo trovato alcun dato sugli iscritti.', 'il-hatzava'],
      ['Check Point’s Global Associates Program is an 18-month programme for aspiring cybersecurity professionals with up to 3 rotations through sales, sales engineering, marketing, sales operations and customer success; its page does not state locations or eligibility.',
        'Il Global Associates Program di Check Point è un programma di 18 mesi per aspiranti professionisti della cybersicurezza con fino a 3 rotazioni tra vendite, sales engineering, marketing, operations di vendita e customer success; la sua pagina non indica sedi né requisiti.', 'il-cp']
    ] }
  ],

  customs: [
    { k: 'season', v: 'rolling', t: [
      ['There is no national graduate season: Tel Aviv University’s technology fair is in winter (7 January 2026) and its general fair in spring, and job boards post openings all year, AllJobs showing 33,500.',
        'Non c’è una stagione nazionale per i laureati: la fiera tecnologica della Tel Aviv University è d’inverno (7 gennaio 2026) e quella generale in primavera, e le bacheche di lavoro pubblicano offerte tutto l’anno, con AllJobs che ne mostrava 33.500.', 'il-tau il-tau-cdc il-alljobs']
    ] },
    { k: 'masters', v: 'irrelevant', t: [
      ['A Nefesh B’Nefesh banking interview says it matters less what you studied and more what job you pursued, and the student schemes read (IAI, Check Point) take students before they finish a bachelor’s; no posting read asks for a master’s. This is our reading.',
        'Un’intervista di Nefesh B’Nefesh sul settore bancario dice che conta meno ciò che si è studiato e più il lavoro che si è fatto, e i percorsi per studenti letti (IAI, Check Point) prendono gli studenti prima che finiscano la laurea triennale; nessun annuncio letto chiede una laurea magistrale. È una nostra lettura.', 'il-nbn-bank il-iai-stu il-cp ours']
    ] },
    { k: 'degrees', v: 'regulated', t: [
      ['Only licensed professions strictly need recognition: medicine, law, engineering and psychology need a licence from the relevant government office, and the CPA licence runs through the Israel Auditors Council. For new immigrants the Ministry of Aliyah and Integration issues an evaluation (45 working days) that Nefesh B’Nefesh says both private and public employers should accept; trade.gov advises overseas accountants who are not CPAs to have the degree evaluated.',
        'Solo le professioni regolamentate richiedono davvero il riconoscimento: medicina, giurisprudenza, ingegneria e psicologia richiedono una licenza dall’ufficio governativo competente, e l’abilitazione CPA passa dall’Israel Auditors Council. Per i nuovi immigrati il Ministero dell’Alyah e dell’Integrazione rilascia una valutazione (45 giorni lavorativi) che secondo Nefesh B’Nefesh dovrebbe essere accettata dai datori di lavoro privati e pubblici; trade.gov consiglia ai contabili esteri che non sono CPA di far valutare il titolo.', 'il-nbn-deg il-nbn-acc il-trade']
    ] },
    { k: 'brand', v: 'some', t: [
      ['Employers build on named universities: IAI’s women’s programme works with four (Ben-Gurion, the Hebrew University, Tel Aviv and the Technion), and the Hebrew University business school says many graduates land Big Four internships; we found no ranking of schools by employers. This is our reading.',
        'I datori di lavoro puntano su università precise: il programma al femminile di IAI lavora con quattro atenei (Ben-Gurion, Università Ebraica, Tel Aviv e Technion), e la scuola di business dell’Università Ebraica dice che molti laureati ottengono tirocini nelle Big Four; non abbiamo trovato alcuna classifica delle scuole da parte dei datori di lavoro. È una nostra lettura.', 'il-iai-stu il-huji ours']
    ] },
    { k: 'dual', v: 'some', t: [
      ['Working during the degree is normal in tech and defence: Check Point has a student programme for R&D, and IAI places students in final-year projects and says it supports combining work with study.',
        'Lavorare durante gli studi è normale nel tech e nella difesa: Check Point ha un programma per studenti in R&S, e IAI inserisce gli studenti in progetti finali e dice di sostenere la combinazione di lavoro e studio.', 'il-cp il-iai-stu']
    ] },
    { k: 'publicw', v: 'mid', t: [
      ['State bodies and state-owned defence firms hire graduates, but the civil service works in Hebrew, fills posts through tenders and often before announcing them; we found no figure for the public sector’s share of graduate hires. The weight is our reading.',
        'Gli enti statali e le aziende della difesa a controllo statale assumono laureati, ma la pubblica amministrazione lavora in ebraico, copre i posti con bandi e spesso prima di annunciarli; non abbiamo trovato alcuna cifra sulla quota del settore pubblico nelle assunzioni di laureati. Il peso è una nostra lettura.', 'il-nbn-gov il-iai ours']
    ] },
    { k: 'sponsorr', v: 'rare', t: [
      ['A sponsor must pay a base salary of at least NIS 27,132 a month in 2026 plus government fees, and with 88 of 5,641 tech vacancies aimed at people without experience a foreign junior competes with Israeli graduates; the only wage exemption is for STEM graduates of Israeli universities. See Visas for the rules.',
        'Uno sponsor deve pagare una retribuzione base di almeno 27.132 NIS al mese nel 2026 più le tasse governative, e con 88 su 5.641 vacancy tech rivolte a persone senza esperienza un junior straniero compete con i laureati israeliani; l’unica esenzione salariale è per i laureati STEM di università israeliane. Vedi Visti per le regole.', 'il-vis il-globes']
    ] },
    { k: 'photo', v: 'optional', t: [
      ['The Nefesh B’Nefesh CV guide says to leave out address, marital status and children to avoid discrimination and does not mention a photo; JobMob adds that Israeli CVs usually carry a national ID number. No page read requires a photo. This is our reading.',
        'La guida ai CV di Nefesh B’Nefesh dice di omettere indirizzo, stato civile e figli per evitare discriminazioni e non menziona la fotografia; JobMob aggiunge che i CV israeliani di solito riportano il numero della carta d’identità. Nessuna pagina letta richiede una foto. È una nostra lettura.', 'il-nbn-cv il-jobmob ours']
    ] },
    { k: 'cv', v: 'one', t: [
      ['Nefesh B’Nefesh recommends a one-page CV; Israeli CVs usually have a section on army service.',
        'Nefesh B’Nefesh raccomanda un CV di una pagina; i CV israeliani di solito hanno una sezione sul servizio militare.', 'il-nbn-cv il-jobmob']
    ] },
    { k: 'letter', v: 'optional', t: [
      ['Nefesh B’Nefesh recommends a short cover letter in the body of the email, 3 to 5 sentences, and says olim who sent it in Hebrew got more follow-up calls; the large employers’ processes read (IAI) start from a CV and do not mention a letter.',
        'Nefesh B’Nefesh raccomanda una breve lettera di presentazione nel corpo dell’email, da 3 a 5 frasi, e dice che gli olim che l’hanno inviata in ebraico hanno ricevuto più telefonate di risposta; i processi dei grandi datori di lavoro letti (IAI) partono da un CV e non menzionano una lettera.', 'il-nbn-cv il-iai']
    ] },
    { k: 'refs', v: 'later', t: [
      ['No page read asks for references with the first application; IAI’s five stages go from CV to phone interview, professional interview, suitability tests and contract. This is our reading.',
        'Nessuna pagina letta chiede referenze con la prima candidatura; le cinque fasi di IAI vanno dal CV al colloquio telefonico, al colloquio professionale, ai test di idoneità e al contratto. È una nostra lettura.', 'il-iai ours']
    ] },
    { k: 'docs', v: 'certified', t: [
      ['For a foreign hire the work-permit file needs the degree with a Hague Apostille and a notarised translation, plus a police certificate issued within 90 days with a double Apostille; an Israeli employer asking for copies at offer stage is our reading.',
        'Per un assunto straniero il fascicolo del permesso di lavoro richiede il titolo con Apostille dell’Aia e traduzione notarile, più un certificato penale emesso da non più di 90 giorni con doppia Apostille; che un datore israeliano chieda copie alla fase di offerta è una nostra lettura.', 'il-vis ours']
    ] },
    { k: 'salary', v: 'later', t: [
      ['Nefesh B’Nefesh advises not raising salary in a first interview and, if asked, saying you want your market value; JobMob says salaries are rarely published up front and employers may ask what you want to earn. We found no page on whether application forms ask.',
        'Nefesh B’Nefesh consiglia di non sollevare la questione dello stipendio al primo colloquio e, se richiesto, di dire che si vuole il proprio valore di mercato; JobMob dice che gli stipendi sono raramente pubblicati in anticipo e che i datori possono chiedere quanto si vuole guadagnare. Non abbiamo trovato alcuna pagina che dica se i moduli di candidatura lo chiedano.', 'il-nbn-int il-jobmob ours']
    ] },
    { k: 'check', v: 'some', t: [
      ['IAI’s jobs page links a personal questionnaire for security suitability, one for spouses of staff in classified positions and a form listing foreign contacts; for a work permit the library’s guide requires a police certificate. We found no page on routine reference checks at private employers.',
        'La pagina delle offerte di IAI rimanda a un questionario personale per l’idoneità di sicurezza, a uno per i coniugi del personale in posizioni classificate e a un modulo che elenca i contatti all’estero; per un permesso di lavoro la guida della libreria richiede un certificato penale. Non abbiamo trovato alcuna pagina sui controlli di referenze di routine presso i datori privati.', 'il-iai il-iai-stu il-vis ours']
    ] },
    { k: 'contact', v: 'people', t: [
      ['Referrals dominate tech hiring: 90% of the Viola portfolio companies surveyed in 2019 ran a friend-referral programme, 47% called it their best source, and army service creates wide contact networks, says JobMob.',
        'Le segnalazioni dominano le assunzioni nel tech: il 90% delle aziende del portafoglio Viola intervistate nel 2019 aveva un programma di segnalazione tra conoscenti, il 47% lo definiva la fonte migliore, e il servizio militare crea ampie reti di contatti, dice JobMob.', 'il-viola il-jobmob']
    ] },
    { k: 'abroad', v: 'hard', t: [
      ['A hire from abroad needs the employer to file a B/1 permit first, taking 60 to 90 working days (6 to 10 on the fast track), and entry to work on a visit status is illegal; Rivermate says the authorities prefer the company where the person will physically work to be the sponsor.',
        'Un’assunzione dall’estero richiede che il datore presenti prima una domanda di permesso B/1, che richiede da 60 a 90 giorni lavorativi (6-10 con la corsia veloce), e lavorare con uno status di visita è illegale; Rivermate dice che le autorità preferiscono che sia lo sponsor l’azienda presso cui la persona lavorerà fisicamente.', 'il-vis il-riv']
    ] },
    { k: 'language', v: 'mostly', t: [
      ['Hebrew is the working language for most employers: Israeli employment contracts should be in Hebrew, Nefesh B’Nefesh says a Hebrew CV is the general rule and critical in some fields but less important in hi-tech, and IAI’s hiring pages are in Hebrew; Check Point’s programme pages are in English.',
        'L’ebraico è la lingua di lavoro per la maggior parte dei datori di lavoro: i contratti di lavoro israeliani dovrebbero essere in ebraico, Nefesh B’Nefesh dice che un CV in ebraico è la regola generale e fondamentale in alcuni campi ma meno importante nell’hi-tech, e le pagine di assunzione di IAI sono in ebraico; le pagine dei programmi di Check Point sono in inglese.', 'il-riv il-nbn-cv il-iai il-cp']
    ] }
  ],

  rows: {
    process: [
      ['IAI lists five stages: choosing a post and submitting a CV on its site, a phone interview, a professional interview with the hiring manager, suitability tests that vary by post, and contract signing; the security questionnaire is a separate form.',
        'IAI elenca cinque fasi: scelta di un posto e invio del CV sul suo sito, un colloquio telefonico, un colloquio professionale con il responsabile di selezione, test di idoneità che variano a seconda del posto e firma del contratto; il questionario di sicurezza è un modulo a parte.', 'il-iai'],
      ['In Viola Group’s 2019 survey, 55% of portfolio companies used a four-step process (a preliminary interview, a second interview with more senior people, an HR interview and a test), 25% used five to eight steps and 5% used no more than two; Check Point candidates report take-home assignments, but those accounts are self-reported and we did not open them.',
        'Nell’indagine di Viola Group del 2019, il 55% delle aziende del portafoglio usava un processo in quattro fasi (un colloquio preliminare, un secondo colloquio con persone più senior, un colloquio con le risorse umane e un test), il 25% usava da cinque a otto fasi e il 5% non più di due; i candidati di Check Point riferiscono compiti da svolgere a casa, ma sono resoconti personali che non abbiamo aperto.', 'il-viola ours'],
      ['Nefesh B’Nefesh advises arriving 10 minutes early, dressing business casual and sending a thank-you email, and warns that interviewers may be late, take calls or ask personal questions; Israeli law bars rejecting candidates for marital status or army profile. JobMob (2015) adds that some interviews take place in cafes. We found no source on assessment-centre norms.',
        'Nefesh B’Nefesh consiglia di arrivare 10 minuti prima, di vestirsi in modo business casual e di inviare un’email di ringraziamento, e avverte che gli intervistatori possono essere in ritardo, rispondere al telefono o fare domande personali; la legge israeliana vieta di scartare candidati per stato civile o profilo militare. JobMob (2015) aggiunge che alcuni colloqui si svolgono nei caffè. Non abbiamo trovato alcuna fonte sulle norme degli assessment center.', 'il-nbn-int il-jobmob ours']
    ],
    offer: [
      ['Rivermate (28 July 2026): contracts should be drafted in Hebrew; probation typically runs three to six months, probation staff keep all statutory rights, and a formal hearing is still required before ending employment.',
        'Rivermate (28 luglio 2026): i contratti dovrebbero essere redatti in ebraico; la prova dura di solito da tre a sei mesi, il personale in prova mantiene tutti i diritti previsti dalla legge e prima di interrompere il rapporto serve comunque un’audizione formale.', 'il-riv'],
      ['Statutory notice for monthly-paid staff is 1 day per month in the first 6 months, 6 days plus 2.5 days for each month after the sixth, and 1 month after a year; severance after a full year is one month’s salary per year of service, often held in the severance component of the mandatory pension. The pre-dismissal hearing was created by court rulings, not legislation.',
        'Il preavviso previsto dalla legge per il personale pagato a mese è di 1 giorno per mese nei primi 6 mesi, 6 giorni più 2,5 giorni per ogni mese dopo il sesto, e 1 mese dopo un anno; l’indennità di fine rapporto dopo un anno intero è di una mensilità per anno di servizio, spesso accantonata nella componente di fine rapporto della pensione obbligatoria. L’audizione prima del licenziamento è nata da sentenze dei tribunali, non dalla legge.', 'il-nbn-notice il-riv il-herzog'],
      ['Rivermate gives the legal minimum wage as NIS 6,443.85 a month from April 2026, an employer pension contribution of 6.5% and an employee one of 6.0%, an employer severance set-aside of 8.33%, and total employer cost of 20.8% to 24.33% of salary. We did not establish whether graduates negotiate or how long employers give to decide.',
        'Rivermate indica il salario minimo legale in 6.443,85 NIS al mese da aprile 2026, un contributo pensionistico del datore di lavoro del 6,5% e del dipendente del 6,0%, un accantonamento del datore per il fine rapporto dell’8,33% e un costo totale per il datore del 20,8%-24,33% della retribuzione. Non abbiamo stabilito se i neolaureati negoziano né quanto tempo i datori di lavoro concedono per decidere.', 'il-riv ours']
    ],
    sponsor: [
      ['The employer applies for and pays the B/1 permit: base salary of at least NIS 27,132 a month in 2026, NIS 1,420 for the application and NIS 11,525 a year for the permit, with 60 to 90 working days for a general expert and 6 to 10 on the Hi-Tech fast track for firms certified by the Israel Innovation Authority, whose spouses also get an open work permit. Rivermate adds that the authorities prefer the company where the employee works to be the sponsor.',
        'Il datore di lavoro presenta e paga la domanda di permesso B/1: retribuzione base di almeno 27.132 NIS al mese nel 2026, 1.420 NIS per la domanda e 11.525 NIS all’anno per il permesso, con da 60 a 90 giorni lavorativi per un esperto generico e 6-10 con la corsia veloce Hi-Tech per le aziende certificate dall’Israel Innovation Authority, i cui coniugi ottengono anche un permesso di lavoro aperto. Rivermate aggiunge che le autorità preferiscono che lo sponsor sia l’azienda presso cui il dipendente lavora.', 'il-vis il-riv'],
      ['Graduates of Israeli universities in STEM fields can be hired by certified tech firms without the double-average wage, for up to 3 years after graduating and within 500 permits a year; a graduate of an Italian or other European university does not qualify and must be paid the standard threshold.',
        'I laureati di università israeliane in discipline STEM possono essere assunti dalle aziende tech certificate senza il doppio della retribuzione media, fino a 3 anni dopo la laurea ed entro 500 permessi all’anno; un laureato di un’università italiana o europea non rientra e deve essere pagato secondo la soglia standard.', 'il-vis'],
      ['With 88 of 5,641 tech vacancies aimed at people without experience, a foreign junior competes with Israeli graduates, so sponsorship is realistic mainly for specialists. Ask in the first interview whether the firm has sponsored foreign staff before and which entity would be the sponsor. This is our reading.',
        'Con 88 su 5.641 vacancy tech rivolte a persone senza esperienza, un junior straniero compete con i laureati israeliani, quindi la sponsorizzazione è realistica soprattutto per gli specialisti. Chiedi al primo colloquio se l’azienda ha già sponsorizzato personale straniero e quale entità sarebbe lo sponsor. È una nostra lettura.', 'il-globes ours']
    ],
    where: [
      ['Job boards: AllJobs (Israel’s largest by its own description, 33,500 jobs, student and no-experience categories) and JobMaster (categories for students, no experience, discharged soldiers, government jobs and internships); both front pages we read are in Hebrew. Public-sector jobs are posted on the Civil Service Commission site, Jobiz and GovJob, according to Nefesh B’Nefesh.',
        'Bacheche di lavoro: AllJobs (la più grande di Israele secondo la propria descrizione, 33.500 offerte, categorie per studenti e senza esperienza) e JobMaster (categorie per studenti, senza esperienza, soldati congedati, lavori pubblici e tirocini); entrambe le pagine iniziali che abbiamo letto sono in ebraico. I lavori pubblici sono pubblicati sul sito della Civil Service Commission, su Jobiz e su GovJob, secondo Nefesh B’Nefesh.', 'il-alljobs il-jobmaster il-nbn-gov'],
      ['Employer pages: IAI’s jobs and students pages (jobs.iai.co.il, in Hebrew), Check Point’s programmes page and Mobileye’s careers page, which sends applicants to its jobs listing; we could not open Rafael’s careers page.',
        'Pagine dei datori di lavoro: le pagine di IAI per offerte e studenti (jobs.iai.co.il, in ebraico), la pagina dei programmi di Check Point e la pagina carriere di Mobileye, che rimanda i candidati al proprio elenco di offerte; non siamo riusciti ad aprire la pagina carriere di Rafael.', 'il-iai il-iai-stu il-cp il-mobileye ours'],
      ['Fairs and communities: Tel Aviv University’s Career Development Center and its winter and spring fairs, the Hebrew University business school’s recruitment days, and Hatzava, a community of alumni of the IDF’s technology units.',
        'Fiere e comunità: il Career Development Center della Tel Aviv University e le sue fiere invernale e primaverile, le giornate di reclutamento della scuola di business dell’Università Ebraica e Hatzava, una comunità di ex membri delle unità tecnologiche dell’IDF.', 'il-tau il-tau-cdc il-huji il-hatzava']
    ],
    mistakes: [
      ['Planning to work or intern on a tourist, ETA-IL or student status: the library’s visa guide records arrest by the immigration authority’s enforcement unit and expulsion with a re-entry ban of 5 to 10 years, and A/2 students may not work except as university teaching assistants.',
        'Pianificare di lavorare o fare tirocinio con status turistico, ETA-IL o di studente: la guida ai visti della libreria registra l’arresto da parte dell’unità di controllo dell’autorità per l’immigrazione e l’espulsione con divieto di rientro da 5 a 10 anni, e gli studenti A/2 non possono lavorare se non come assistenti didattici dell’università.', 'il-vis'],
      ['Counting on a junior tech job: only 88 of 5,641 vacancies in June 2025 were aimed at people without experience, and an average junior search had reached 11 months by January 2025.',
        'Contare su un posto tech da junior: solo 88 su 5.641 vacancy di giugno 2025 erano rivolte a persone senza esperienza, e una ricerca media da junior era arrivata a 11 mesi a gennaio 2025.', 'il-globes il-globes2'],
      ['Sending only an English CV and cover letter: Nefesh B’Nefesh says the general rule is a Hebrew CV, critical in some fields, and that a Hebrew cover letter drew more follow-up calls; tech is the exception.',
        'Inviare solo un CV e una lettera di presentazione in inglese: Nefesh B’Nefesh dice che la regola generale è un CV in ebraico, fondamentale in alcuni campi, e che una lettera in ebraico ha ottenuto più telefonate di risposta; il tech è l’eccezione.', 'il-nbn-cv'],
      ['Putting address, marital status, children or a senior-sounding past job title on the CV: the guide says the first invites discrimination and the second implies high salary and managerial expectations.',
        'Mettere sul CV indirizzo, stato civile, figli o un titolo professionale passato che suona senior: la guida dice che i primi invitano alla discriminazione e il secondo implica aspettative di stipendio alto e di ruolo dirigenziale.', 'il-nbn-cv'],
      ['Raising salary in the first interview: Nefesh B’Nefesh advises waiting and, if asked, answering that you want your market value.',
        'Sollevare il tema dello stipendio al primo colloquio: Nefesh B’Nefesh consiglia di aspettare e, se richiesto, di rispondere che si vuole il proprio valore di mercato.', 'il-nbn-int']
    ]
  },

  lang: [
    { f: 'finance', v: 'local', lv: 'Hebrew, working level (8 of 10 in essentiality)', t: [
      ['A Nefesh B’Nefesh interview rates Hebrew 8 out of 10 in essentiality for financial jobs and calls English a plus for certain projects; niche players such as private banks, hedge funds and fintech do not always need the best Hebrew.',
        'Un’intervista di Nefesh B’Nefesh valuta l’ebraico 8 su 10 per essenzialità nei lavori finanziari e definisce l’inglese un plus per certi progetti; attori di nicchia come private bank, hedge fund e fintech non sempre hanno bisogno di un ebraico perfetto.', 'il-nbn-bank']
    ] },
    { f: 'accounting', v: 'local', lv: 'Hebrew, including tax and financial vocabulary', t: [
      ['The Nefesh B’Nefesh accounting guide quotes interviewees calling financial Hebrew the most important skill, crucial for dealing with the tax offices, and essential at a high level; no certificate is named.',
        'La guida alla contabilità di Nefesh B’Nefesh cita intervistati che definiscono l’ebraico finanziario la competenza più importante, cruciale per trattare con gli uffici delle imposte, e indispensabile a un livello alto; non è indicato alcun certificato.', 'il-nbn-acc']
    ] },
    { f: 'public', v: 'local', lv: 'Hebrew, fluent', t: [
      ['Nefesh B’Nefesh says Hebrew fluency is essential for government work because all communication is in Hebrew.',
        'Nefesh B’Nefesh dice che la padronanza dell’ebraico è essenziale per il lavoro nella pubblica amministrazione perché tutta la comunicazione avviene in ebraico.', 'il-nbn-gov']
    ] },
    { f: 'business', v: 'local', lv: 'Hebrew, working level', t: [
      ['Rivermate says Israeli employment contracts should be drafted in Hebrew, and Nefesh B’Nefesh says a CV sent to an Israeli employer should usually be in Hebrew; no level or certificate is named.',
        'Rivermate dice che i contratti di lavoro israeliani dovrebbero essere redatti in ebraico, e Nefesh B’Nefesh dice che un CV inviato a un datore israeliano dovrebbe di solito essere in ebraico; non sono indicati livelli né certificati.', 'il-riv il-nbn-cv']
    ] },
    { f: 'tech', v: 'bilingual', lv: 'English and Hebrew (level not stated)', t: [
      ['Nefesh B’Nefesh says a Hebrew CV is less important in hi-tech, and Check Point’s programme pages are in English; IAI’s hiring pages are in Hebrew. No source tested English or Hebrew levels for graduates.',
        'Nefesh B’Nefesh dice che un CV in ebraico è meno importante nell’hi-tech, e le pagine dei programmi di Check Point sono in inglese; le pagine di assunzione di IAI sono in ebraico. Nessuna fonte ha verificato i livelli di inglese o di ebraico dei laureati.', 'il-nbn-cv il-cp il-iai']
    ] },
    { f: 'cyber', v: 'bilingual', lv: 'English and Hebrew (level not stated)', t: [
      ['Check Point’s cybersecurity programmes are posted in English, while defence-sector hiring such as IAI’s runs in Hebrew with a security-suitability questionnaire; we found no stated language level for cybersecurity graduates.',
        'I programmi di cybersicurezza di Check Point sono pubblicati in inglese, mentre le assunzioni nel settore difesa come quelle di IAI si svolgono in ebraico con un questionario di idoneità di sicurezza; non abbiamo trovato alcun livello linguistico dichiarato per i laureati in cybersicurezza.', 'il-cp il-iai ours']
    ] }
  ],

  programmes: [
    { n: 'Engineers for Industry (women students)', o: 'Israel Aerospace Industries', f: 'tech', in: null, w: null, lang: 'HE', intl: 'local', ids: 'il-iai-stu' },
    { n: 'Final-year projects in company projects', o: 'Israel Aerospace Industries', f: 'tech', in: null, w: null, lang: 'HE', intl: 'local', ids: 'il-iai-stu' },
    { n: 'Student Program for R&D Israel', o: 'Check Point', f: 'cyber', in: null, w: null, lang: 'EN', intl: 'unknown', ids: 'il-cp' },
    { n: 'Global Associates Program (18 months)', o: 'Check Point', f: 'cyber', in: null, w: null, lang: 'EN', intl: 'unknown', ids: 'il-cp' },
    { n: 'Bank training programmes (often not advertised)', o: 'Leumi, Hapoalim, Mizrahi-Tefahot, Discount', f: 'finance', in: null, w: null, lang: 'HE', intl: 'unknown', ids: 'il-nbn-bank' }
  ],

  outcomes: [
    ['The Central Bureau of Statistics put unemployment at 2.8% in May 2026 (126,500 of 4,469,000 in the labour force), with the Jerusalem district highest at 4.1% and Tel Aviv and the centre lowest at 2.4%.',
      'L’Ufficio centrale di statistica ha indicato una disoccupazione del 2,8% a maggio 2026 (126.500 su 4.469.000 persone nella forza lavoro), con il distretto di Gerusalemme più alto al 4,1% e Tel Aviv e il centro più bassi al 2,4%.', 'il-jpost-lfs'],
    ['University graduates’ share of Israel’s job seekers rose from 14% in August 2022 to 20.5% in August 2026 (16.7% in 2023, 19% in 2024, 19.6% in 2025), per the Employment Service via Calcalist, with software and application-analysis job seekers up 6.4% between June and August 2026; this is a share of job seekers, not a graduate unemployment rate.',
      'La quota di laureati universitari tra le persone in cerca di lavoro in Israele è salita dal 14% di agosto 2022 al 20,5% di agosto 2026 (16,7% nel 2023, 19% nel 2024, 19,6% nel 2025), secondo il Servizio per l’impiego riportato da Calcalist, con le persone in cerca di lavoro nello sviluppo software e nell’analisi applicativa in aumento del 6,4% tra giugno e agosto 2026; è una quota dei disoccupati, non un tasso di disoccupazione dei laureati.', 'il-cal'],
    ['In June 2025 Globes counted 88 tech vacancies (1.5%) aimed at candidates without experience and about 500 for candidates with one to three years of experience, against about 1,400 job seekers at that level; we found no return-offer rate or time to first job for graduates.',
      'A giugno 2025 Globes ha contato 88 vacancy tech (l’1,5%) rivolte a candidati senza esperienza e circa 500 per candidati con uno-tre anni di esperienza, a fronte di circa 1.400 persone in cerca di lavoro a quel livello; non abbiamo trovato alcun tasso di conferma o tempo per il primo lavoro dei laureati.', 'il-globes ours']
  ],

  sources: {
    'il-globes': ['data', 'Globes: jobs scarce for juniors in Israel’s tech industry (Ethosia data, 11 June 2025)', 'https://en.globes.co.il/en/article-jobs-scarce-for-juniors-in-israels-tech-industry-1001512559', '2026-10-08'],
    'il-salesforce': ['anecdotal', 'Salesforce Engineering: from 8200 to Salesforce, career journeys in Israel high-tech', 'https://engineering.salesforce.com/from-8200-to-salesforce-career-journeys-in-israel-high-tech-6aa169a2aa05/', '2026-10-08'],
    'il-hatzava': ['anecdotal', 'Hatzava, a community of 8200 alumni: company profile in a start-up directory (profile updated November 2020)', 'https://slimpages.startupim.com/neo_company_page/hatzava', '2026-10-07'],
    'il-huji': ['employer-stated', 'Hebrew University School of Business: BA in accounting (Big Four internships, recruitment days)', 'https://bschool-en.huji.ac.il/node/3066295', '2026-10-08'],
    'il-leumi': ['employer-stated', 'Bank Leumi: careers (archived copy, page no longer online)', 'https://web.archive.org/web/20241209202451/https://english.leumi.co.il/LEFullArt/Careers/6241/', '2026-10-07'],
    'il-globes3': ['data', 'Globes: Israel’s tech workforce shrinking (Ethosia, 23 December 2025)', 'https://en.globes.co.il/en/article-1001529923', '2026-10-08'],
    'il-globes2': ['data', 'Globes: juniors struggling to find tech jobs in Israel (Ethosia, 21 January 2025)', 'https://en.globes.co.il/en/article-juniors-struggling-to-find-tech-jobs-in-israel-1001499933', '2026-10-08'],
    'il-viola': ['data', 'CTech (Calcalist): Viola’s tips for attracting top tech talent (22 September 2019, survey of portfolio companies)', 'https://www.calcalistech.com/ctech/articles/0,7340,L-3770804,00.html', '2026-10-08'],
    'il-nbn-cv': ['practitioner consensus', 'Nefesh B’Nefesh: adjusting your resume for the Israeli market (updated 12 May 2024)', 'https://www.nbn.org.il/aliyahpedia/employment-israel/managing-the-job-search/adjusting-resume-israeli-market/', '2026-10-08'],
    'il-nbn-int': ['practitioner consensus', 'Nefesh B’Nefesh: tips for successful interviewing in Israel', 'https://www.nbn.org.il/life-in-israel/employment/managing-the-job-search/tips-for-successful-interviewing-in-israel/', '2026-10-08'],
    'il-nbn-army': ['practitioner consensus', 'Nefesh B’Nefesh: finding a job after the army', 'https://www.nbn.org.il/life-in-israel/employment/career-guidance-for-students-managing-the-job-search-employment/finding-a-job-after-the-army/', '2026-10-08'],
    'il-nbn-bank': ['practitioner consensus', 'Nefesh B’Nefesh: banking and finance (employment guide with a sector interview)', 'https://www.nbn.org.il/life-in-israel/employment/professions-index/accounting-finance/banking-and-finance/', '2026-10-08'],
    'il-nbn-acc': ['practitioner consensus', 'Nefesh B’Nefesh: accounting (employment guide with practitioner interviews)', 'https://www.nbn.org.il/life-in-israel/employment/professions-index/accounting-finance/accounting/', '2026-10-08'],
    'il-nbn-gov': ['practitioner consensus', 'Nefesh B’Nefesh: career in government', 'https://www.nbn.org.il/life-in-israel/employment/professions-index/social-services-mental-health/career-in-government/', '2026-10-08'],
    'il-nbn-deg': ['practitioner consensus', 'Nefesh B’Nefesh: evaluation and recognition of academic degrees from abroad (updated 2 February 2026)', 'https://www.nbn.org.il/life-in-israel/employment/degrees-and-licensing/degree-recognition/', '2026-10-08'],
    'il-nbn-notice': ['practitioner consensus', 'Nefesh B’Nefesh: notice of resignation and dismissal (updated 21 November 2024)', 'https://www.nbn.org.il/life-in-israel/employment/employee-rights-and-benefits/notice-of-resignation-dismissal/', '2026-10-08'],
    'il-herzog': ['practitioner consensus', 'Herzog Fox & Neeman: termination of employment under Israeli law (3 July 2023)', 'https://herzoglaw.co.il/en/news-and-insights/what-do-you-know-about-israeli-employment-law-termination-of-employment-under-israeli-law/', '2026-10-08'],
    'il-jobmob': ['anecdotal', 'JobMob: jobs in Israel are different (Jacob Share, 12 August 2015)', 'https://jobmob.co.il/blog/jobs-in-israel-is-different/', '2026-10-08'],
    'il-wiki': ['practitioner consensus', 'Wikipedia: Conscription in Israel (length of service as of 2022)', 'https://en.wikipedia.org/wiki/Conscription_in_Israel', '2026-10-08'],
    'il-jpost-svc': ['practitioner consensus', 'Jerusalem Post: plan to extend compulsory service to 36 months (5 December 2025)', 'https://www.jpost.com/israel-news/defense-news/article-879347', '2026-10-08'],
    'il-iai': ['employer-stated', 'Israel Aerospace Industries: jobs site, hiring process (in Hebrew)', 'https://jobs.iai.co.il/', '2026-10-08'],
    'il-iai-stu': ['employer-stated', 'Israel Aerospace Industries: students (Engineers for Industry, final-year projects, Atidim; in Hebrew)', 'https://jobs.iai.co.il/students/', '2026-10-08'],
    'il-cp': ['employer-stated', 'Check Point: careers programmes (Global Associates, student and internship programmes)', 'https://www.checkpoint.com/fr/careers/programs/', '2026-10-08'],
    'il-mobileye': ['employer-stated', 'Mobileye: careers page', 'https://careers.mobileye.com/', '2026-10-08'],
    'il-tau': ['employer-stated', 'Tel Aviv University alumni: Technology Career Fair, 7 January 2026', 'https://en-alumni.tau.ac.il/Technology_Career_Fair_Jan26', '2026-10-08'],
    'il-tau-cdc': ['employer-stated', 'Tel Aviv University: Career Development Center and job fairs', 'https://english.tau.ac.il/node/2440', '2026-10-08'],
    'il-cal': ['data', 'CTech (Calcalist): unemployment near a record low but more university graduates are looking for work (14 September 2026, Employment Service data)', 'https://www.calcalistech.com/ctechnews/article/vpax9md4l', '2026-10-08'],
    'il-jpost-lfs': ['data', 'Jerusalem Post: employment rate falls in May (Central Bureau of Statistics labour-force survey, 6 July 2026)', 'https://jpost.com/israel-news/article-901569', '2026-10-08'],
    'il-riv': ['practitioner consensus', 'Rivermate: Israel employment agreements and recruitment guides (updated 28 July 2026)', 'https://www.rivermate.com/guides/israel/agreements', '2026-10-08'],
    'il-trade': ['practitioner consensus', 'US International Trade Administration: Israel country commercial guide, licensing requirements for professional services', 'https://www.trade.gov/country-commercial-guides/israel-licensing-requirements-professional-services', '2026-10-08'],
    'il-alljobs': ['practitioner consensus', 'AllJobs: front page (33,500 jobs, student and no-experience categories)', 'https://www.alljobs.co.il', '2026-10-08'],
    'il-jobmaster': ['practitioner consensus', 'JobMaster: front page (suitability categories, government jobs, internships)', 'https://www.jobmaster.co.il', '2026-10-08'],
    'il-vis': ['practitioner consensus', 'Admetia research library: visas_immigration/israel, Israel visa guide (B/1 expert, Hi-Tech fast track, STEM graduates, A/2 students, internships)', 'research/visas_immigration/israel/israel_visas_immigration_guide.md', '2026-10-05']
  }
});
