/* How hiring works: Estonia. Reads on 7 and 8 Oct 2026: University of Tartu
 * Institute of Computer Science, TalTech, Cybernetica, Work in Estonia,
 * Statistics Estonia (also cited in data/atlas/ee.js), ERR News, Swedbank,
 * Wise, Bolt, Harno (Estonian ENIC/NARIC), Police and Border Guard Board. */
ATLAS.addEntry({
  id: 'EE',
  checked: '2026-10-08',
  review: '2027-04-08',

  lead: [
    ['Estonia is small enough that hiring runs through a few hundred people who know each other. For a junior specialist, a firm often asks the professor who teaches the subject at the University of Tartu or TalTech before it posts an ad, and students reach firms through internships built into their degree.',
      'L’Estonia è così piccola che le assunzioni passano per poche centinaia di persone che si conoscono. Per uno specialista junior, un’azienda spesso chiede al professore che insegna la materia all’Università di Tartu o al TalTech prima di pubblicare un annuncio, e gli studenti arrivano alle aziende tramite i tirocini previsti dal corso di laurea.', 'ours ee-ut-collab'],
    ['Someone who knows someone looking for a colleague is a real channel here, not a courtesy.',
      'Qualcuno che conosce qualcuno che cerca un collega è un canale vero qui, non una cortesia.', 'ee-wie']
  ],

  ways: [
    { name: ['The internship inside the degree', 'Il tirocinio dentro il corso di laurea'], r: 'intern', p: 'first intern', basis: 'consensus', t: [
      ['IT internships are compulsory in every bachelor’s and master’s at Tartu’s Institute of Computer Science, offered by its partner companies; TalTech’s cybersecurity master’s has a practical-training course with a coordinator who recommends where to go.',
        'I tirocini IT sono obbligatori in ogni laurea triennale e magistrale dell’Istituto di Informatica di Tartu, offerti dalle aziende partner; la magistrale in cybersicurezza del TalTech ha un corso di formazione pratica con un coordinatore che indica dove andare.', 'ee-ut-collab ee-taltech-cyber'],
      ['In many fields a summer placement is part of the degree, and demand is high: Telia had over 1,600 applicants this year and placed about 4%, Coop Pank had over 1,000 for 16 places and looks to its interns first when it has vacancies.',
        'In molti corsi un tirocinio estivo fa parte del percorso di studi, e la domanda è alta: Telia ha avuto quest’anno oltre 1.600 candidati e ne ha inseriti circa il 4%, Coop Pank ne ha avuti oltre 1.000 per 16 posti e guarda prima ai propri tirocinanti quando ha posizioni aperte.', 'ee-err-intern']
    ] },
    { name: ['Working while you study', 'Lavorare mentre studi'], r: 'dual', p: 'first intern', basis: 'data', t: [
      ['Many students hold a job in their field before they graduate (a study permit sets no hourly limit): TalTech found that 65% of its foreign IT students had work in their field in Estonia.',
        'Molti studenti hanno un lavoro nel loro settore prima della laurea (il permesso per studio non pone limiti di ore): il TalTech ha rilevato che il 65% dei suoi studenti IT stranieri aveva un lavoro nel proprio settore in Estonia.', 'ee-taltech-65'],
      ['Some of this is formal: Pipedrive and TalTech ran a joint 20-week internship for six Business Information Technology students, with no promise of a job at the end.',
        'Una parte è formalizzata: Pipedrive e TalTech hanno organizzato un tirocinio congiunto di 20 settimane per sei studenti di Business Information Technology, senza promessa di un posto alla fine.', 'ee-pipedrive-tt']
    ] },
    { name: ['A referral from a professor or a former colleague', 'Una segnalazione da un professore o da un ex collega'], r: 'network', p: 'first exp', basis: 'consensus', t: [
      ['The state agency Work in Estonia says that in a country of 1.3 million people it often happens that someone knows someone looking for exactly the colleague you are, and lists friends and acquaintances among the best routes. In AI, data and cybersecurity the pool of juniors is a few classrooms wide, so the lecturer or the supervisor of a project course is often the first person a firm calls.',
        'L’agenzia statale Work in Estonia osserva che in un paese di 1,3 milioni di abitanti capita spesso che qualcuno conosca qualcuno che cerca proprio il collega che sei tu, e indica amici e conoscenti tra le vie migliori. In IA, dati e cybersicurezza il bacino di junior è largo poche aule, quindi il docente o il supervisore di un corso progettuale è spesso la prima persona che un’azienda chiama.', 'ee-wie ours']
    ] },
    { name: ['Company graduate and traineeship programmes', 'Programmi aziendali per laureati e tirocini'], r: 'scheme', p: 'first intern', basis: 'consensus', t: [
      ['Larger firms run their own intake: Cybernetica tests applicants, gives each intern a mentor and may offer the best a full-time job; Swedbank’s Kick Start takes about 200 trainees a year across Estonia, Latvia and Lithuania, hires most actively from February to May and offers a fixed-term contract at €1,000–1,500 gross a month in Estonia.',
        'Le aziende più grandi hanno una loro selezione: Cybernetica mette alla prova i candidati, dà a ogni tirocinante un mentore e può offrire ai migliori un posto a tempo pieno; il programma Kick Start di Swedbank prende circa 200 trainee all’anno tra Estonia, Lettonia e Lituania, assume più attivamente da febbraio a maggio e offre un contratto a termine da 1.000–1.500 € lordi al mese in Estonia.', 'ee-cyber-interns ee-swed-kick'],
      ['Wise’s graduate roles start every year in September and its interns do ten paid weeks in the summer; Bolt’s process is an application, interviews with a home task, then a decision.',
        'I ruoli per laureati di Wise iniziano ogni anno a settembre e i suoi stagisti fanno dieci settimane retribuite in estate; il processo di Bolt prevede una candidatura, colloqui con un compito da svolgere a casa, poi la decisione.', 'ee-wise-prog ee-bolt-process']
    ] },
    { name: ['Start-ups and scale-ups hiring directly', 'Start-up e scale-up che assumono direttamente'], r: 'startup', p: 'first exp', basis: 'data', t: [
      ['The start-up sector employed 15,023 people in the third quarter of 2025, and Wise and Bolt alone added 178 and 80 staff in Estonia in the year to mid-2025; juniors apply to the open ads on the company career pages and Work in Estonia’s English-language board.',
        'Il settore delle start-up impiegava 15.023 persone nel terzo trimestre 2025, e solo Wise e Bolt hanno aggiunto 178 e 80 dipendenti in Estonia nell’anno fino a metà 2025; i junior si candidano agli annunci aperti sulle pagine carriera delle aziende e sulla bacheca in inglese di Work in Estonia.', 'ee-startups ee-wise-hires ee-wie-home']
    ] },
    { name: ['Open ads, portals and recruiters (the experienced hire)', 'Annunci aperti, portali e recruiter (chi ha esperienza)'], r: 'direct', p: 'exp first', basis: 'consensus', t: [
      ['Experienced candidates mostly apply to open ads on CV.ee, CV Keskus and LinkedIn, or through MeetFrank, which Work in Estonia says many Estonian tech firms use; EURES Estonia advises job seekers coming from other European countries.',
        'I candidati con esperienza si candidano soprattutto agli annunci aperti su CV.ee, CV Keskus e LinkedIn, o tramite MeetFrank, che secondo Work in Estonia molte aziende tech estoni usano; EURES Estonia assiste chi cerca lavoro arrivando da altri paesi europei.', 'ee-wie']
    ] }
  ],

  cycle: [
    ['A small market swings fast. The number of 20-to-29-year-olds working in information and communication fell from 6,130 to 5,070 between 2022 and 2024, while 600 programming jobs went in a year.',
      'Un mercato piccolo oscilla in fretta. Il numero di 20-29enni che lavorano in informazione e comunicazione è sceso da 6.130 a 5.070 tra il 2022 e il 2024, mentre in un anno sono spariti 600 posti di programmazione.', 'ee-stat'],
    ['When start-ups stop hiring, there are few other employers of the same kind to turn to.',
      'Quando le start-up smettono di assumere, ci sono pochi altri datori dello stesso tipo a cui rivolgersi.', 'ours']
  ],

  fields: [
    { f: 'finance', t: [
      ['Banks recruit students through paid Baltic summer internships: Luminor’s runs ten weeks from €950 a month in finance, credit and product teams, and SEB’s Youth LAB summer internship includes a hackathon; some teams need Estonian as well as English. Graduates of TalTech’s business school go on to LHV and the fintechs.',
        'Le banche reclutano studenti tramite stage estivi baltici retribuiti: quello di Luminor dura dieci settimane da 950 € al mese nei team di finanza, credito e prodotto, e lo stage estivo Youth LAB di SEB include un hackathon; alcuni team chiedono l’estone oltre all’inglese. I laureati della scuola di economia del TalTech finiscono in LHV e nelle fintech.', 'ee-luminor ee-seb ee-lhv'],
      ['Wise and the other fintechs hire finance, risk and compliance juniors in English.',
        'Wise e le altre fintech assumono junior in finanza, rischio e compliance in inglese.', 'ours']
    ] },
    { f: 'accounting', t: [
      ['The Big Four and Nordic groups’ finance centres in Tallinn take audit and accounting assistants, often while they are still studying; client work is largely in Estonian.',
        'Le Big Four e i centri finanziari dei gruppi nordici a Tallinn prendono assistenti di revisione e contabilità, spesso mentre studiano ancora; il lavoro con i clienti è in gran parte in estone.', 'ours']
    ] },
    { f: 'business', t: [
      ['Scale-ups such as Wise and Bolt hire business graduates into operations, strategy and growth roles in English; elsewhere, marketing and sales jobs are mostly in Estonian or Russian.',
        'Scale-up come Wise e Bolt assumono laureati in economia in ruoli di operazioni, strategia e crescita in inglese; altrove, i lavori di marketing e vendite sono per lo più in estone o in russo.', 'ours']
    ] },
    { f: 'tech', t: [
      ['Software start-ups and scale-ups (Wise, Bolt, Pipedrive, Veriff) hire in English and recruit much as international tech firms do, with take-home tests and several interviews.',
        'Le start-up e scale-up del software (Wise, Bolt, Pipedrive, Veriff) assumono in inglese e selezionano come le aziende tech internazionali, con test da svolgere a casa e più colloqui.', 'ours']
    ] },
    { f: 'ai', t: [
      ['Tartu’s computer scientists work with firms on joint projects, such as an autonomous-driving lab with Bolt and AI demonstrators through AI and Robotics Estonia, and an industrial master’s lets students take half the curriculum at a partner company.',
        'Gli informatici di Tartu lavorano con le aziende su progetti comuni, come un laboratorio di guida autonoma con Bolt e dimostratori di IA tramite AI and Robotics Estonia, e un master industriale permette agli studenti di seguire metà del programma presso un’azienda partner.', 'ee-ut-collab']
    ] },
    { f: 'cyber', t: [
      ['Cybersecurity is built around TalTech and the state: its cyber centre, competitions such as CyberSpike run with the defence ministry’s CR14 foundation, and firms like Cybernetica that take interns.',
        'La cybersicurezza ruota attorno al TalTech e allo Stato: il suo centro di cybersicurezza, competizioni come CyberSpike organizzate con la fondazione CR14 del ministero della Difesa, e aziende come Cybernetica che prendono tirocinanti.', 'ee-cr14 ee-cyber-interns']
    ] }
  ],

  schools: [
    ['Two universities supply most specialists: Tartu for computer science and AI, TalTech for engineering, software and cybersecurity. A firm hiring a junior in these fields usually knows the people teaching them.',
      'Due università forniscono la maggior parte degli specialisti: Tartu per informatica e IA, il TalTech per ingegneria, software e cybersicurezza. Un’azienda che assume un junior in questi campi di solito conosce chi li insegna.', 'ours ee-ut-collab']
  ],

  events: [
    ['Career days on campus (Tartu’s Delta Career Day), company seminars in the data-science series, project courses with real company briefs, and cyber competitions are where students are noticed.',
      'Le giornate della carriera nei campus (il Delta Career Day di Tartu), i seminari aziendali nella serie di data science, i corsi progettuali con casi reali delle aziende e le competizioni di cybersicurezza sono dove gli studenti si fanno notare.', 'ee-ut-collab ee-cr14'],
    ['TalTech’s career centre runs a job and internship portal for students and lists a career day on 21 October; the state-run Work in Estonia board collects English-language offers for people already in the country.',
      'Il centro carriera del TalTech gestisce un portale di lavoro e tirocini per gli studenti e indica una giornata della carriera il 21 ottobre; la bacheca statale Work in Estonia raccoglie offerte in inglese per chi è già nel paese.', 'ee-taltech-career ee-wie-home']
  ],

  customs: [
    { k: 'season', v: 'cyclical', t: [
      ['No national season; the peaks follow the student year. Summer placements are filled in the spring, Swedbank hires trainees most actively from February to May, and Wise’s and Bolt’s graduate cohorts start in September.',
        'Non c’è una stagione nazionale; i picchi seguono l’anno accademico. I tirocini estivi si coprono in primavera, Swedbank assume trainee soprattutto da febbraio a maggio e i gruppi di laureati di Wise e Bolt iniziano a settembre.', 'ee-swed-kick ee-wise-prog ee-err-intern']
    ] },
    { k: 'masters', v: 'helpful', t: [
      ['Tartu and TalTech both build internships into bachelor’s and master’s degrees, so a bachelor’s with a placement is enough to start; we found no employer page that asks for a master’s, though specialist roles in cybersecurity and AI come from master’s programmes.',
        'Tartu e il TalTech inseriscono tirocini sia nelle lauree triennali sia nelle magistrali, quindi una triennale con un tirocinio basta per iniziare; non abbiamo trovato alcuna pagina di un datore che chieda una magistrale, anche se i ruoli specialistici in cybersicurezza e IA vengono dai programmi magistrali.', 'ee-ut-collab ee-taltech-cyber ours']
    ] },
    { k: 'degrees', v: 'regulated', t: [
      ['The Estonian ENIC/NARIC at the Education and Youth Board (Harno) evaluates foreign degrees free of charge within 30 days of receiving the documents; academic recognition is in principle sought only for further study, and for unregulated professions the employer judges the degree, with a Harno statement as a help.',
        'L’ENIC/NARIC estone presso l’Education and Youth Board (Harno) valuta gratuitamente i titoli stranieri entro 30 giorni dal ricevimento dei documenti; il riconoscimento accademico si chiede in linea di principio solo per proseguire gli studi, e per le professioni non regolamentate è il datore a valutare il titolo, con una dichiarazione di Harno come aiuto.', 'ee-harno']
    ] },
    { k: 'brand', v: 'some', t: [
      ['Tartu and TalTech are the two schools firms know by name and recruit from through project courses and joint programmes; beyond the two there is no school ranking in hiring that we could find.',
        'Tartu e il TalTech sono le due università che le aziende conoscono per nome e da cui reclutano tramite corsi progettuali e programmi comuni; oltre a queste due non abbiamo trovato alcuna gerarchia di atenei nelle assunzioni.', 'ee-ut-collab ours']
    ] },
    { k: 'dual', v: 'some', t: [
      ['There is no dual-study track, but compulsory internships and a student job in the field are the norm: 65% of TalTech’s foreign IT students worked in their field, and many degrees require a summer placement.',
        'Non esiste un percorso di studio duale, ma tirocini obbligatori e un lavoro da studente nel settore sono la norma: il 65% degli studenti IT stranieri del TalTech lavorava nel proprio settore, e molti corsi richiedono un tirocinio estivo.', 'ee-taltech-65 ee-err-intern']
    ] },
    { k: 'publicw', v: 'mid', t: [
      ['In the first quarter of 2021 the public sector accounted for 36% of all job vacancies (schools, hospitals and the state), but its jobs are in Estonian and are not where the sector’s English-language graduate hiring happens.',
        'Nel primo trimestre del 2021 il settore pubblico rappresentava il 36% di tutti i posti vacanti (scuole, ospedali e Stato), ma i suoi posti sono in estone e non è lì che avviene l’assunzione di laureati in inglese.', 'ee-stat-vac ours']
    ] },
    { k: 'sponsorr', v: 'some', t: [
      ['Software and start-up employers are the ones that sponsor: highly skilled ICT workers and people working for start-ups sit outside the 1,292-place 2026 immigration quota. Banks and the public sector rarely do. The rules are on the Visas page.',
        'I datori che sponsorizzano sono quelli del software e delle start-up: i lavoratori ICT altamente qualificati e chi lavora per start-up sono fuori dalla quota di immigrazione 2026 di 1.292 posti. Banche e settore pubblico raramente lo fanno. Le regole sono nella pagina Visti.', 'ee-quota ours']
    ] },
    { k: 'photo', v: 'common', t: [
      ['Fairly common and welcomed, though not required; HR managers at large Estonian firms recommend a friendly, professional one.',
        'Abbastanza diffusa e gradita, anche se non obbligatoria; i responsabili HR di grandi aziende estoni ne consigliano una cordiale e professionale.', 'ee-cv-tips']
    ] },
    { k: 'cv', v: 'two', t: [
      ['We found no Estonian page that states a CV length; the portals CV.ee and CV Keskus take a CV or fill-in profile, and one to two pages is the safe format.',
        'Non abbiamo trovato alcuna pagina estone che indichi una lunghezza del CV; i portali CV.ee e CV Keskus accettano un CV o un profilo da compilare, e una o due pagine è il formato prudente.', 'ee-wie ours']
    ] },
    { k: 'letter', v: 'expected', t: [
      ['Work in Estonia’s advice is to include a cover letter that shows how your goals match the employer’s, and a student describes writing a separate letter for each internship application.',
        'Il consiglio di Work in Estonia è di includere una lettera di presentazione che mostri come i tuoi obiettivi coincidano con quelli del datore, e una studentessa racconta di aver scritto una lettera diversa per ogni candidatura a un tirocinio.', 'ee-cv-tips ee-err-intern']
    ] },
    { k: 'refs', v: 'later', t: [
      ['Keep a list of references ready: Work in Estonia advises it as proof that you left past employers on good terms, which suggests it is asked after the interview rather than with the CV.',
        'Tieni pronta una lista di referenze: Work in Estonia la consiglia come prova di aver lasciato bene i precedenti datori, il che fa pensare che venga chiesta dopo il colloquio più che insieme al CV.', 'ee-cv-tips ours']
    ] },
    { k: 'docs', v: 'copies', t: [
      ['Employers ask for the CV and, for graduates, a diploma and transcript copy; certified or apostilled copies are not routine. Harno takes documents electronically and accepts English, Finnish, Swedish, Italian and Russian without translation.',
        'I datori chiedono il CV e, per i laureati, una copia del diploma e della trascrizione degli esami; le copie certificate o apostillate non sono di routine. Harno accetta i documenti per via elettronica e accetta inglese, finlandese, svedese, italiano e russo senza traduzione.', 'ee-harno ours']
    ] },
    { k: 'salary', v: 'asked', t: [
      ['Pay is usually stated in the advert for the big employers (Swedbank’s Kick Start page gives a range, a Wise advert gave the monthly figure), and we could not confirm on a page we read whether application forms also ask for your expectation.',
        'La retribuzione di solito è indicata nell’annuncio dei grandi datori (la pagina Kick Start di Swedbank dà un intervallo, un annuncio di Wise indicava la cifra mensile), e non abbiamo potuto confermare su una pagina letta se i moduli di candidatura chiedano anche le tue aspettative.', 'ee-swed-kick ee-wise-pay ours']
    ] },
    { k: 'check', v: 'some', t: [
      ['We found no page on background checks in Estonian graduate hiring; references are checked at the offer stage (see refs) and banks and the state can be expected to check more.',
        'Non abbiamo trovato alcuna pagina sui controlli dei precedenti nelle assunzioni di laureati in Estonia; le referenze si verificano alla fase dell’offerta (vedi referenze) e ci si può aspettare più controlli da banche e Stato.', 'ours']
    ] },
    { k: 'contact', v: 'people', t: [
      ['In a market this size people are the shortcut: lecturers, supervisors, former teammates.',
        'In un mercato di queste dimensioni le persone sono la scorciatoia: docenti, supervisori, ex compagni di squadra.', 'ee-wie ours']
    ] },
    { k: 'abroad', v: 'workable', t: [
      ['Tech firms recruit internationally in English; elsewhere, being a student in Estonia is the usual way in. Bolt’s home-task and interview process and Work in Estonia’s English-language board work from abroad, but Töötukassa and quota rules apply to non-EU hires.',
        'Le aziende tech selezionano a livello internazionale in inglese; altrove, essere studente in Estonia è la via d’ingresso abituale. Il processo di Bolt con compito a casa e colloqui e la bacheca in inglese di Work in Estonia funzionano dall’estero, ma per le assunzioni di cittadini extra-UE valgono le regole di Töötukassa e della quota.', 'ee-bolt-process ee-wie-home ee-visa-guide']
    ] },
    { k: 'language', v: 'english', t: [
      ['English is enough in software and start-ups (Work in Estonia’s board lists offers from Bolt, Wise and Playtech in English); most other employers, and the public sector, work in Estonian.',
        'L’inglese basta nel software e nelle start-up (la bacheca di Work in Estonia elenca offerte in inglese di Bolt, Wise e Playtech); la maggior parte degli altri datori, e il settore pubblico, lavorano in estone.', 'ee-wie-home ours']
    ] }
  ],

  rows: {
    process: [
      ['Bolt’s process is an application, interviews with a home task, and a decision, and positions stay open until the right candidate is found; Wise lists apply, interview and offer with pair-programming and system-design formats for engineers.',
        'Il processo di Bolt è una candidatura, colloqui con un compito a casa e una decisione, e le posizioni restano aperte finché non si trova il candidato giusto; Wise indica candidatura, colloquio e offerta, con formati di pair programming e system design per gli ingegneri.', 'ee-bolt-process ee-wise-prog'],
      ['Swedbank’s steps are an application on its portal (some roles ask for video answers), calls with a recruiter or interviews with a manager, sometimes a test or task, then a fixed-term contract.',
        'I passi di Swedbank sono una candidatura sul suo portale (alcuni ruoli chiedono risposte in video), telefonate con un recruiter o colloqui con un responsabile, a volte un test o un compito, poi un contratto a termine.', 'ee-swed-kick'],
      ['Work in Estonia advises expecting a phone call to arrange the interview soon after the CV and dressing neatly; we found no page on assessment-centre norms or on the time from application to offer.',
        'Work in Estonia consiglia di aspettarsi una telefonata per fissare il colloquio subito dopo il CV e di vestirsi in modo curato; non abbiamo trovato alcuna pagina sulle norme dei centri di valutazione né sul tempo che passa dalla candidatura all’offerta.', 'ee-cv-tips ours']
    ],
    offer: [
      ['The Employment Contracts Act allows a probation period of up to four months, with 15 calendar days’ notice from either side during it; a longer clause is cut to four months.',
        'La legge sul contratto di lavoro consente un periodo di prova fino a quattro mesi, con 15 giorni di calendario di preavviso da parte di entrambe le parti durante la prova; una clausola più lunga viene ridotta a quattro mesi.', 'ee-probation'],
      ['First contracts for trainees are fixed-term (Swedbank Kick Start, €1,000–1,500 gross a month in Estonia; Telia full-time internships €800–1,200), while Wise has advertised a monthly salary plus a share package for its Tallinn academy role.',
        'I primi contratti dei trainee sono a termine (Kick Start di Swedbank, 1.000–1.500 € lordi al mese in Estonia; tirocini a tempo pieno di Telia 800–1.200 €), mentre Wise ha pubblicizzato per il suo ruolo in accademia a Tallinn uno stipendio mensile più un pacchetto di azioni.', 'ee-swed-kick ee-err-intern ee-wise-pay'],
      ['We did not find a page on negotiating, a thirteenth month or the time employers give you to decide, so treat these as unknown rather than as customs.',
        'Non abbiamo trovato una pagina sulla negoziazione, sulla tredicesima o sul tempo che i datori danno per decidere, quindi vanno considerati ignoti più che come usanze.', 'ours']
    ],
    sponsor: [
      ['Non-EU hires outside the exempt groups need a permit from Töötukassa after the job has been advertised for three weeks, and fall under the immigration quota of 1,292 for 2026 (0.1% of the population); in 2025 the quota was less than two-thirds used by 1 September.',
        'Le assunzioni di cittadini extra-UE fuori dai gruppi esenti richiedono un permesso di Töötukassa dopo tre settimane di pubblicazione dell’annuncio, e rientrano nella quota di immigrazione di 1.292 per il 2026 (lo 0,1% della popolazione); nel 2025 la quota era usata per meno di due terzi al 1° settembre.', 'ee-visa-guide ee-quota'],
      ['Outside the quota: highly skilled ICT workers, people working for start-ups, students and academics, and top specialists paid at least 1.5 times the average wage. Employers pay at least the average gross salary, €2,092 a month from 5 March 2026 (a 0.8 rate of €1,674 is listed).',
        'Fuori dalla quota: lavoratori ICT altamente qualificati, chi lavora per start-up, studenti e accademici, e specialisti di alto livello pagati almeno 1,5 volte lo stipendio medio. I datori pagano almeno lo stipendio lordo medio, 2.092 € al mese dal 5 marzo 2026 (è indicata anche un’aliquota 0,8 di 1.674 €).', 'ee-quota ee-ppa'],
      ['Raise it at the first interview: an employer who knows the exempt routes can move fast, one who does not will think of the three-week advert and the quota. EU and EEA citizens need no permit.',
        'Sollevalo al primo colloquio: un datore che conosce le vie esenti può muoversi in fretta, uno che non le conosce penserà all’annuncio di tre settimane e alla quota. I cittadini UE e SEE non hanno bisogno di alcun permesso.', 'ee-visa-guide ours']
    ],
    where: [
      ['Portals: Work in Estonia (English-language offers, state agency), CV.ee, CV Keskus and MeetFrank for tech; EURES Estonia for people coming from Europe; the TalTech career portal for students.',
        'Portali: Work in Estonia (offerte in inglese, agenzia statale), CV.ee, CV Keskus e MeetFrank per il tech; EURES Estonia per chi arriva dall’Europa; il portale carriera del TalTech per gli studenti.', 'ee-wie ee-taltech-career'],
      ['Employer pages: Wise (wise.jobs), Bolt (bolt.eu careers), Swedbank Kick Start, Cybernetica interns, Luminor and SEB Youth LAB summer internships, Coop Pank and Telia summer placements.',
        'Pagine dei datori: Wise (wise.jobs), Bolt (bolt.eu carriere), Kick Start di Swedbank, tirocinanti di Cybernetica, stage estivi di Luminor e Youth LAB di SEB, tirocini estivi di Coop Pank e Telia.', 'ee-wise-prog ee-bolt-process ee-swed-kick ee-cyber-interns ee-luminor ee-seb ee-err-intern'],
      ['Expat Facebook groups for jobs in Tallinn are listed by Work in Estonia; we found no graduate-fair listing beyond the university career days.',
        'Work in Estonia elenca gruppi Facebook di espatriati per il lavoro a Tallinn; non abbiamo trovato alcun elenco di fiere per laureati oltre alle giornate della carriera universitarie.', 'ee-wie']
    ],
    mistakes: [
      ['Treating the placement as optional: where the degree requires it, it is the entry, and the competition is real (about 4% of Telia’s applicants placed).',
        'Trattare il tirocinio come facoltativo: dove il corso lo richiede, è proprio l’ingresso, e la concorrenza è reale (circa il 4% dei candidati di Telia inserito).', 'ee-err-intern'],
      ['Sending one generic letter: students report writing a separate cover letter for each application.',
        'Mandare una lettera generica: gli studenti riferiscono di scrivere una lettera diversa per ogni candidatura.', 'ee-err-intern'],
      ['Assuming English is enough everywhere: it is in software and start-ups, but banks, audit teams and the public sector work in Estonian, and a permit extension after five years needs Estonian at A2.',
        'Dare per scontato che l’inglese basti ovunque: basta nel software e nelle start-up, ma banche, team di revisione e settore pubblico lavorano in estone, e il rinnovo del permesso dopo cinque anni richiede l’estone al livello A2.', 'ee-wie-home ee-a2-note ours'],
      ['Reading sector averages as entry pay: the lowest tenth of ICT employees earned under €1,246 a month in 2025.',
        'Leggere le medie di settore come stipendio d’ingresso: il decimo più basso dei dipendenti ICT guadagnava meno di 1.246 € al mese nel 2025.', 'ee-pa101']
    ]
  },

  lang: [
    { f: 'tech', v: 'english', t: [
      ['Software start-ups and scale-ups hire in English: Work in Estonia’s board lists Bolt (105), Wise (58) and Playtech (13) offers on 8 October 2026; the evidence is the interview and a home task, and no language certificate is mentioned.',
        'Le start-up e scale-up del software assumono in inglese: la bacheca di Work in Estonia elenca offerte di Bolt (105), Wise (58) e Playtech (13) l’8 ottobre 2026; la prova è il colloquio con un compito a casa, e non si cita alcun certificato linguistico.', 'ee-wie-home ee-bolt-process']
    ] },
    { f: 'ai', v: 'english', t: [
      ['Research and joint projects at Tartu run in English (the industrial master’s, the Bolt autonomous-driving lab); we found no employer page that asks for a language level.',
        'La ricerca e i progetti comuni a Tartu si svolgono in inglese (il master industriale, il laboratorio di guida autonoma con Bolt); non abbiamo trovato alcuna pagina di un datore che chieda un livello linguistico.', 'ee-ut-collab ours']
    ] },
    { f: 'cyber', v: 'bilingual', t: [
      ['Cybersecurity is tied to the state (CR14, NATO’s Tallinn centre, Cybernetica), where Estonian matters for state work; no page we read states a level.',
        'La cybersicurezza è legata allo Stato (CR14, il centro NATO di Tallinn, Cybernetica), dove l’estone conta per il lavoro per lo Stato; nessuna pagina letta indica un livello.', 'ee-cr14 ours']
    ] },
    { f: 'finance', v: 'bilingual', t: [
      ['Banks work in English and Estonian: some Luminor teams need Estonian as well as English, and the fintechs hire in English. Employers test through the interview; we found no certificate requirement.',
        'Le banche lavorano in inglese e in estone: alcuni team di Luminor richiedono l’estone oltre all’inglese, e le fintech assumono in inglese. I datori verificano con il colloquio; non abbiamo trovato alcun requisito di certificato.', 'ee-luminor ours']
    ] },
    { f: 'accounting', v: 'bilingual', t: [
      ['Audit and accounting assistants need Estonian for client work as well as English; a Big Four audit-intern advert listed English and Estonian as the languages.',
        'Gli assistenti di revisione e contabilità hanno bisogno dell’estone per il lavoro con i clienti oltre all’inglese; un annuncio di tirocinio in revisione di una Big Four indicava inglese ed estone come lingue.', 'ee-deloitte-intern ours']
    ] },
    { f: 'business', v: 'bilingual', t: [
      ['Scale-ups hire business graduates in English; marketing, sales and most other business jobs are in Estonian or Russian.',
        'Le scale-up assumono laureati in economia in inglese; marketing, vendite e la maggior parte degli altri lavori d’impresa sono in estone o in russo.', 'ee-wie-home ours']
    ] },
    { f: 'public', v: 'local', t: [
      ['The state works in Estonian; the one language rule we read is that a permit holder needs Estonian at level A2 to extend after five years.',
        'Lo Stato lavora in estone; l’unica regola linguistica che abbiamo letto è che chi ha un permesso deve avere l’estone al livello A2 per rinnovarlo dopo cinque anni.', 'ee-a2-note ours']
    ] }
  ],

  programmes: [
    { n: 'Kick Start (trainees and junior specialists)', o: 'Swedbank', f: 'finance', in: null, w: [2, 5], lang: 'ET EN', intl: 'unknown', ids: 'ee-swed-kick' },
    { n: 'Baltic summer internship in finance', o: 'Luminor', f: 'finance', in: null, w: null, lang: 'EN ET', intl: 'unknown', ids: 'ee-luminor' },
    { n: 'Summer internships', o: 'Coop Pank', f: 'finance', in: 16, w: null, lang: 'ET EN', intl: 'unknown', ids: 'ee-err-intern' },
    { n: 'Graduate roles and ten-week internships (WiseStart)', o: 'Wise', f: 'tech', in: null, w: null, lang: 'EN', intl: 'unknown', ids: 'ee-wise-prog' },
    { n: 'Joint internship with TalTech (20 weeks)', o: 'Pipedrive', f: 'tech', in: 6, w: null, lang: 'EN', intl: 'local', ids: 'ee-pipedrive-tt' },
    { n: 'Summer interns with mentor', o: 'Cybernetica', f: 'cyber', in: null, w: null, lang: 'EN ET', intl: 'unknown', ids: 'ee-cyber-interns' }
  ],

  outcomes: [
    ['In 2025, 91.0% of tertiary graduates aged 20–34 who finished within the last three years were in work (EU 85.3%), but youth unemployment (15–24) was 20.7%, up from 17.3% in 2023; the entry door is narrow rather than shut.',
      'Nel 2025 il 91,0% dei laureati di 20–34 anni che avevano finito gli studi da meno di tre anni lavorava (UE 85,3%), ma la disoccupazione giovanile (15–24) era del 20,7%, in aumento dal 17,3% del 2023; la porta d’ingresso è stretta più che chiusa.', 'ee-grad-eurostat'],
    ['No national figure for the share of interns who are kept: Telia placed about 4% of its applicants, Coop Pank looks to its interns first, and 65% of TalTech’s foreign IT students had work in their field.',
      'Non esiste una cifra nazionale sulla quota di tirocinanti confermati: Telia ha inserito circa il 4% dei candidati, Coop Pank guarda prima ai propri tirocinanti, e il 65% degli studenti IT stranieri del TalTech aveva un lavoro nel proprio settore.', 'ee-err-intern ee-taltech-65']
  ],

  sources: {
    'ee-err-intern': ['employer-stated', 'ERR News: Students face fierce competition for internships (Telia, Coop Pank)', 'https://news.err.ee/1610026666/students-face-fierce-competition-for-internships', '2026-10-08'],
    'ee-swed-kick': ['employer-stated', 'Swedbank: Kick Start your career (traineeships in Estonia, Latvia, Lithuania)', 'https://www.swedbank.com/work-with-us/kick-start-your-career.html', '2026-10-08'],
    'ee-bolt-process': ['employer-stated', 'Bolt careers: how we hire', 'https://bolt.eu/en/careers/', '2026-10-08'],
    'ee-wise-prog': ['employer-stated', 'Wise careers: early careers programmes', 'https://wise.jobs/wisestart-programs', '2026-10-08'],
    'ee-wise-pay': ['employer-stated', 'Wise Product Academy 2026 advert, republished by Built In', 'https://builtin.com/job/product-academy-2026/7318301', '2026-10-03'],
    'ee-wise-hires': ['data', 'Startup Estonia: first half of 2025 for the Estonian startup sector (Wise +178, Bolt +80)', 'https://startupestonia.ee/the-first-half-of-2025-for-the-estonian-startup-sector-maturing-through-efficiency-and-adaptation/', '2026-10-02'],
    'ee-startups': ['data', 'Startup Estonia: third quarter of 2025 for the Estonian startup sector', 'https://startupestonia.ee/the-third-quarter-of-2025-for-the-estonian-startup-sector-productivity-gains-tax-resilience-and-deeptech-momentum/', '2026-10-02'],
    'ee-pipedrive-tt': ['employer-stated', 'TalTech: TalTech and Pipedrive started a joint internship programme', 'https://taltech.ee/en/news/taltech-and-pipedrive-started-joint-internship-program', '2026-10-08'],
    'ee-taltech-career': ['employer-stated', 'TalTech career centre: internship and job portal, career day', 'https://career.taltech.ee/en/', '2026-10-08'],
    'ee-wie-home': ['practitioner consensus', 'Work in Estonia: English-language job board (offers by employer, 8 Oct 2026)', 'https://www.workinestonia.com/', '2026-10-08'],
    'ee-harno': ['data', 'Harno (Education and Youth Board): academic recognition by the Estonian ENIC/NARIC', 'https://harno.ee/en/academic-recognition', '2026-10-08'],
    'ee-ppa': ['data', 'Police and Border Guard Board: residence permit for employment (salary rates from 5 March 2026)', 'https://www.politsei.ee/en/instructions/residence-permit-for-employment', '2026-10-08'],
    'ee-quota': ['data', 'ERR News: immigration quota for 2026 set at 1,292 people', 'https://news.err.ee/1609853268/immigration-quota-for-2026-set-at-1-292-people', '2026-10-08'],
    'ee-visa-guide': ['practitioner consensus', 'Admetia library: Estonia visas and immigration guide (Töötukassa test, quota, exempt routes)', 'research/visas_immigration/estonia/estonia_visas_immigration_guide.md', '2026-10-08'],
    'ee-probation': ['practitioner consensus', 'Asanify: probation period in Estonia (Employment Contracts Act)', 'https://asanify.com/global-employer-of-record/estonia/probation-period/', '2026-10-08'],
    'ee-stat-vac': ['data', 'Statistics Estonia: job vacancies in the first quarter of 2021 (public sector 36%)', 'https://stat.ee/en/node/183279', '2026-10-08'],
    'ee-pa101': ['data', 'Statistics Estonia: PA101 average gross wages, median and deciles by economic activity, 2025', 'https://andmed.stat.ee/en/stat/majandus__palk-ja-toojeukulu__palk__aastastatistika/PA101', '2026-10-03'],
    'ee-grad-eurostat': ['data', 'Eurostat: edat_lfse_24 recent graduates in work, 2025', 'https://ec.europa.eu/eurostat/api/dissemination/statistics/1.0/data/edat_lfse_24?format=JSON&lang=EN&duration=Y_LE3&isced11=ED5-8&age=Y20-34&sex=T&geo=EE&geo=EU27_2020', '2026-10-03'],
    'ee-a2-note': ['data', 'Police and Border Guard Board: Estonian at level A2 for extending an employment permit after five years', 'https://www.politsei.ee/en/instructions/residence-permit-for-employment', '2026-10-02'],
    'ee-deloitte-intern': ['employer-stated', 'Deloitte Eesti: audit intern advert on CV.ee (English and Estonian; expired December 2021)', 'https://www.cv.ee/en/vacancy/686973/deloitte-eesti/audit-intern', '2026-10-08'],
    'ee-ut-collab': ['employer-stated', 'University of Tartu, Institute of Computer Science: industry collaboration (internships, industrial master’s, Bolt lab, AIRE, Delta Career Day)', 'https://cs.ut.ee/en/collaboration', '2026-10-07'],
    'ee-taltech-cyber': ['employer-stated', 'TalTech: Cybersecurity MSc, admissions and practical training', 'https://taltech.ee/en/centre-for-digital-forensics-cyber-security/admissions', '2026-10-07'],
    'ee-taltech-65': ['data', 'TalTech: almost two-thirds of TalTech’s foreign IT students have found professional work in Estonia', 'https://taltech.ee/en/news/almost-two-thirds-taltech-foreign-it-students-have-found-professional-work-estonia-0', '2026-10-07'],
    'ee-cyber-interns': ['employer-stated', 'Cybernetica: new summer interns have joined Cybernetica', 'https://cyber.ee/resources/stories/new-summer-interns-have-joined-cybernetica', '2026-10-07'],
    'ee-cr14': ['employer-stated', 'TalTech: CR14 and TalTech signed an agreement to promote Estonian youth (CyberSpike)', 'https://taltech.ee/en/news/CR14-and-TalTech-signed-an-agreement-to-promote-Estonian-youth', '2026-10-07'],
    'ee-wie': ['practitioner consensus', 'Work in Estonia (state agency): tips on where to look for a job in Estonia', 'https://www.workinestonia.com/tips-on-where-to-look-for-a-job-in-estonia', '2026-10-07'],
    'ee-cv-tips': ['practitioner consensus', 'Work in Estonia, with CV-Online: 10 tricks to gain an advantage applying for a job', 'https://workinestonia.com/10-tricks-to-gain-an-advantage-applying-for-a-job/', '2026-10-07'],
    'ee-stat': ['data', 'Statistics Estonia: young workers are turning away from the information and communication sector', 'https://www.stat.ee/en/news/young-workers-are-turning-away-information-and-communication-sector', '2026-10-02'],
    'ee-luminor': ['employer-stated', 'Luminor: summer internship in finance (CV.ee posting)', 'https://cv.ee/en/vacancy/1343892/luminor/summer-internship-in-finance', '2026-10-07'],
    'ee-seb': ['employer-stated', 'SEB Estonia: Youth LAB, the ten-week paid summer internship (includes a hackathon)', 'https://www.seb.ee/en/internship', '2026-10-09'],
    'ee-lhv': ['anecdotal', 'TalTech: how an international graduate earned a direct job offer at LHV', 'https://taltech.ee/en/news/taltech-lhv-how-international-graduate-earned-direct-job-offer', '2026-10-07']
  }
});
