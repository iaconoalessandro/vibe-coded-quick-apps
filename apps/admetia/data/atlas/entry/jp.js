/* How hiring works: Japan. New reads on 7 Oct 2026 (Cabinet Secretariat request on
 * the 2027 recruiting schedule; Gakujo offer-rate surveys; Sakigake Shimpo); extended to the
 * full schema on 8 Oct 2026 (JASSO Job Hunting Guide for International Students 2027, Study in
 * Japan, the Tokyo Employment Service Center for Foreigners, MHLW, Hedgeweek, Mercari, UNIQLO,
 * Rakuten, Career Forum Network, Daijob.com, the National Personnel Authority 2024 outline). */
ATLAS.addEntry({
  id: 'JP',
  checked: '2026-10-08',
  review: '2027-04-30',

  lead: [
    ['Japan hires its graduates all at once (shinsotsu ikkatsu saiyō): students job-hunt as a cohort in their final years, are hired for their potential rather than a specific job, and start together on 1 April. The government asks firms to begin information sessions on 1 March, selection on 1 June and formal offers from 1 October of the year before starting.',
      'Il Giappone assume i laureati tutti insieme (shinsotsu ikkatsu saiyō): gli studenti cercano lavoro come coorte negli ultimi anni, vengono assunti per il loro potenziale più che per un ruolo preciso, e iniziano insieme il 1º aprile. Il governo chiede alle aziende di iniziare le presentazioni il 1º marzo, la selezione il 1º giugno e le offerte formali dal 1º ottobre dell’anno prima dell’inizio.', 'jp-cas jp-jasso'],
    ['In practice internships pull hiring earlier: by 1 May 2026, 67% of the class of 2027 already had an informal offer (Indeed Recruit Partners survey), against 38% on 1 March.',
      'In pratica i tirocini anticipano le assunzioni: al 1º maggio 2026 il 67% della classe del 2027 aveva già un’offerta informale (indagine di Indeed Recruit Partners), contro il 38% del 1º marzo.', 'jp-sakigake'],
    ['The cohort is built for Japanese students. JASSO warns that international students tend to start job hunting later than Japanese ones, and that someone who misses the new-graduate window competes as a past graduate, with fewer companies and fewer places.',
      'La coorte è pensata per gli studenti giapponesi. Il JASSO avverte che gli studenti stranieri tendono a iniziare la ricerca più tardi dei giapponesi, e che chi perde la finestra dei neolaureati compete come ex laureato, con meno aziende e meno posti.', 'jp-jasso']
  ],

  ways: [
    { name: ['The new-graduate cohort', 'La coorte dei neolaureati'], r: 'bulk', p: 'first', basis: 'data', t: [
      ['Large firms take a fixed intake of new graduates each April and train them in-house; mid-career entry is a separate, smaller market. At the end of July 2026, 84.8% of the class of 2027 held an informal offer, and 40.5% of those offers came from firms with 5,000 or more employees.',
        'Le grandi aziende prendono ogni aprile un contingente fisso di neolaureati e li formano internamente; l’ingresso a metà carriera è un mercato separato e più piccolo. A fine luglio 2026 l’84,8% della classe del 2027 aveva un’offerta informale, e il 40,5% di queste offerte proveniva da aziende con 5.000 o più dipendenti.', 'ours jp-gakujo'],
      ['Companies hire for general work: the offer names a type of job but not a post or a place, and recruits are rotated at the company’s discretion. JASSO describes this as potential-based recruitment, where mid-career hiring asks for work-ready skills.',
        'Le aziende assumono per un lavoro generico: l’offerta indica un tipo di mansione ma non un posto né una sede, e i neoassunti vengono ruotati a discrezione dell’azienda. Il JASSO la descrive come assunzione basata sul potenziale, mentre l’assunzione a metà carriera chiede competenze già operative.', 'jp-jasso'],
      ['Many companies also recruit all year round, and small and mid-sized firms often begin selection after the peak to avoid the big companies; students without an offer by October can keep applying until March.',
        'Molte aziende reclutano anche tutto l’anno, e le piccole e medie imprese spesso iniziano la selezione dopo il picco per non sovrapporsi alle grandi; chi non ha un’offerta a ottobre può continuare a candidarsi fino a marzo.', 'jp-jasso']
    ] },
    { name: ['Internship to early offer', 'Dal tirocinio all’offerta anticipata'], r: 'intern', p: 'first intern', basis: 'data', t: [
      ['Students apply for internships in the spring of the third year, attend in summer, and receive an informal offer (naitei) after final interviews; specialised internships of 2 weeks or more may lead straight into selection before June.',
        'Gli studenti si candidano ai tirocini nella primavera del terzo anno, li svolgono d’estate e ricevono un’offerta informale (naitei) dopo i colloqui finali; i tirocini specialistici di 2 settimane o più possono portare direttamente alla selezione prima di giugno.', 'jp-cas jp-gakujo'],
      ['In the Gakujo survey of July 2026, students had joined 6.22 internships or open-company days on average, 40.4% of them 10 or more, and only 8.8% none. Internship and open-company days count as part of job hunting.',
        'Nell’indagine di Gakujo di luglio 2026 gli studenti avevano partecipato in media a 6,22 tirocini o giornate aziendali aperte, il 40,4% di loro a 10 o più, e solo l’8,8% a nessuno. Tirocini e giornate aziendali aperte contano come parte della ricerca di lavoro.', 'jp-gakujo']
    ] },
    { name: ['Campus career centres, alumni visits and job portals', 'Centri carriera, visite agli ex studenti e portali di lavoro'], r: 'campus', p: 'first', basis: 'consensus', t: [
      ['The entry (pre-registration) goes through the employment information sites or the company’s own recruitment page, followed by a company briefing session, alone or joint with other companies in a hall. JASSO lists Mynavi, Rikunabi, Career-tasu, Gakujo, Diamond Shushoku Navi and others.',
        'L’entry (preiscrizione) passa dai siti di informazione sul lavoro o dalla pagina di selezione dell’azienda, seguita da una presentazione aziendale, singola o congiunta con altre aziende in una sala. Il JASSO elenca Mynavi, Rikunabi, Career-tasu, Gakujo, Diamond Shushoku Navi e altri.', 'jp-jasso'],
      ['University career centres keep reports written by past students about each company’s tests, and visits to alumni (OB/OG hōmon) are how students learn what the work is like; JASSO tells students to use both.',
        'I centri carriera delle università conservano le relazioni scritte dagli studenti precedenti sui test di ciascuna azienda, e le visite agli ex studenti (OB/OG hōmon) servono a capire com’è il lavoro; il JASSO consiglia di usare entrambi.', 'jp-jasso']
    ] },
    { name: ['Global and English-track graduate programmes', 'Programmi per neolaureati globali e in inglese'], r: 'scheme', p: 'first', basis: 'consensus', t: [
      ['A few employers run tracks that do not need the domestic calendar: Mercari recruits all year with joining dates every April and October, UNIQLO’s Global Management Program selects undergraduates worldwide who are fluent in English, and foreign banks such as Bank of America and Citigroup run campus programmes.',
        'Alcuni datori di lavoro offrono percorsi che non seguono il calendario nazionale: Mercari recluta tutto l’anno con ingressi ogni aprile e ottobre, il Global Management Program di UNIQLO seleziona studenti universitari di tutto il mondo che parlano bene l’inglese, e banche straniere come Bank of America e Citigroup organizzano programmi nei campus.', 'jp-mercari-ng jp-gmp jp-hedgeweek'],
      ['The Career Forum Network describes its fairs, among them the Boston Career Forum, as job fairs for Japanese-English bilinguals with several interviews on site and the possibility of an offer by the end of the event.',
        'La Career Forum Network descrive le sue fiere, tra cui il Boston Career Forum, come fiere del lavoro per bilingui giapponese-inglese con più colloqui in loco e la possibilità di un’offerta entro la fine dell’evento.', 'jp-cfn']
    ] },
    { name: ['Public service (Japanese nationals only at national level)', 'Pubblico impiego (a livello nazionale solo per cittadini giapponesi)'], r: 'public', p: 'first', basis: 'data', t: [
      ['The National Personnel Authority’s university-level exams (comprehensive and general service) run on a separate calendar, with a first test between June and September, but its 2024 outline excludes anyone without Japanese nationality. Local governments set their own rules.',
        'Gli esami di livello universitario dell’Autorità nazionale del personale (servizio generale e servizio ordinario) seguono un calendario separato, con una prima prova tra giugno e settembre, ma il suo prospetto del 2024 esclude chi non ha la cittadinanza giapponese. Le amministrazioni locali fissano regole proprie.', 'jp-npa ours']
    ] },
    { name: ['Bilingual job boards, recruiters and experienced hires', 'Portali per bilingui, agenzie e assunzioni di profili con esperienza'], r: 'agency', p: 'exp', basis: 'consensus', t: [
      ['Daijob.com has served bilingual job seekers since 1998 and lists more than 10,000 jobs; it lets employers approach a candidate through a scout mail and has filters for visa support and English as the company language.',
        'Daijob.com serve i candidati bilingui dal 1998 e pubblica più di 10.000 offerte; permette ai datori di lavoro di contattare un candidato con la scout mail e ha filtri per il supporto al visto e per l’inglese come lingua aziendale.', 'jp-daijob'],
      ['Robert Walters Japan says private equity, private credit and real estate are increasingly driving recruitment in asset management. Experienced hires are a separate market from the April cohort.',
        'Robert Walters Japan afferma che private equity, credito privato e immobiliare guidano sempre più le assunzioni nella gestione patrimoniale. Le assunzioni di profili con esperienza sono un mercato separato dalla coorte di aprile.', 'jp-hedgeweek ours']
    ] }
  ],

  cycle: [
    ['The cohort system amplifies the year you graduate: a weak year means fewer places for the whole class, and missing it means competing as a non-new graduate. In a Gakujo survey, 84.8% of the class of 2027 had an informal offer at the end of July 2026, against 87.8% a year earlier, the fifth monthly fall in a row.',
      'Il sistema per coorti amplifica l’anno in cui ti laurei: un anno debole significa meno posti per tutta la classe, e perderlo significa competere come non neolaureato. In un’indagine di Gakujo, a fine luglio 2026 l’84,8% della classe del 2027 aveva un’offerta informale, contro l’87,8% di un anno prima, il quinto calo mensile consecutivo.', 'ours jp-gakujo'],
    ['Gakujo reads the year as a split between students who got early offers from internships and those who began after spring. Finance moves the other way: openings for March 2027 graduates are expected to rise by more than 10%, to roughly 10,400, and finance starting pay rose 7.4% this fiscal year.',
      'Gakujo legge l’anno come una divisione tra gli studenti che hanno ottenuto offerte anticipate dai tirocini e quelli che hanno iniziato dopo la primavera. La finanza va nella direzione opposta: i posti per i laureati di marzo 2027 dovrebbero crescere di oltre il 10%, fino a circa 10.400, e le retribuzioni iniziali nella finanza sono salite del 7,4% in questo anno fiscale.', 'jp-gakujo jp-hedgeweek']
  ],

  fields: [
    { f: 'finance', t: [
      ['The megabanks recruit hundreds of new graduates a year through the April cohort; finance is among the most contested sectors, with about five applicants per place. Sumitomo Mitsui Banking Corporation has 11 recruitment tracks, among them global banking and retail.',
        'Le megabanche reclutano centinaia di neolaureati l’anno con la coorte di aprile; la finanza è tra i settori più contesi, con circa cinque candidati per posto. Sumitomo Mitsui Banking Corporation ha 11 percorsi di selezione, tra cui global banking e retail.', 'jp-hedgeweek'],
      ['Citigroup has hired 20 to 30 new graduates a year in Japan since 2020, Bank of America runs one of the most active campus programmes among foreign banks and requires its graduate hires to be bilingual, and Point72 chose 20 candidates from about 300 for a one-week Tokyo programme.',
        'Citigroup assume in Giappone da 20 a 30 neolaureati l’anno dal 2020, Bank of America organizza uno dei programmi nei campus più attivi tra le banche straniere e chiede ai neoassunti di essere bilingui, e Point72 ha scelto 20 candidati su circa 300 per un programma di una settimana a Tokyo.', 'jp-hedgeweek']
    ] },
    { f: 'accounting', t: [
      ['The four big audit firms (Tohmatsu, EY ShinNihon, Azusa, PwC Japan) hire mainly people who have passed the CPA exam, with recruitment starting around the exam results; audit work itself requires the licence, but the firms also recruit for many other roles and say people without it can join.',
        'Le quattro grandi società di revisione (Tohmatsu, EY ShinNihon, Azusa, PwC Japan) assumono soprattutto chi ha superato l’esame da CPA, con selezioni che partono in corrispondenza dei risultati dell’esame; il lavoro di revisione richiede l’abilitazione, ma le società assumono anche per molti altri ruoli e dicono che chi non ce l’ha può entrare.', 'jp-big4']
    ] },
    { f: 'business', t: [
      ['Among the international students who took jobs in Japan in 2023, JASSO’s tables show translation and interpretation as the largest job type at 12.7%, then information processing at 10.2%, overseas transactions at 4.8%, corporate sales at 4.4% and accounting at 2.8%; retail and information and communications were the largest industries, at 9.8% each.',
        'Tra gli studenti stranieri che hanno trovato lavoro in Giappone nel 2023, le tabelle del JASSO mostrano traduzione e interpretariato come il tipo di mansione più frequente con il 12,7%, poi elaborazione di informazioni con il 10,2%, operazioni con l’estero con il 4,8%, vendite alle aziende con il 4,4% e contabilità con il 2,8%; commercio al dettaglio e informazione e comunicazione erano i settori più grandi, con il 9,8% ciascuno.', 'jp-jasso'],
      ['In the Gakujo survey the most common industry among informal offers was IT, software and internet at 18.9%, ahead of information, research and consulting at 11.3%.',
        'Nell’indagine di Gakujo il settore più frequente tra le offerte informali era IT, software e internet con il 18,9%, davanti a informazione, ricerca e consulenza con l’11,3%.', 'jp-gakujo']
    ] },
    { f: 'public', t: [
      ['The national civil-service examinations are closed to people without Japanese nationality in the National Personnel Authority’s 2024 outline, so the public sector is not a first-job route for a foreign graduate at national level.',
        'Gli esami nazionali per la funzione pubblica sono chiusi a chi non ha la cittadinanza giapponese nel prospetto 2024 dell’Autorità nazionale del personale, quindi il settore pubblico non è una via d’ingresso per un laureato straniero a livello nazionale.', 'jp-npa']
    ] },
    { f: 'tech', t: [
      ['IT, software and internet topped the industries of informal offers for the third year in a row in the Gakujo survey, at 18.9% in July 2026, on continuing demand for IT staff to run digitalisation and AI.',
        'IT, software e internet hanno guidato per il terzo anno consecutivo i settori delle offerte informali nell’indagine di Gakujo, con il 18,9% a luglio 2026, per la domanda costante di personale IT che guidi digitalizzazione e IA.', 'jp-gakujo'],
      ['A few tech firms recruit new graduates internationally in English: Mercari once hired about 50 new graduates of whom 44 were foreign, and some of its engineering roles do not require Japanese and come with visa support. Engineering candidates take an online coding test.',
        'Alcune aziende tech reclutano neolaureati a livello internazionale in inglese: Mercari ha assunto una volta circa 50 neolaureati di cui 44 stranieri, e alcuni suoi ruoli d’ingegneria non richiedono il giapponese e offrono supporto per il visto. I candidati ingegneri sostengono un test di programmazione online.', 'jp-mercari jp-mercarijob jp-mercari-ng']
    ] },
    { f: 'ai', t: [
      ['Daiwa Securities’ expert course, for graduates with advanced data, programming, maths or science skills, starts at a minimum of ¥500,000 a month, against a university-graduate average of ¥262,300.',
        'Il percorso per esperti di Daiwa Securities, per laureati con competenze avanzate di dati, programmazione, matematica o scienze, parte da un minimo di 500.000 ¥ al mese, contro una media dei laureati di 262.300 ¥.', 'jp-hedgeweek jp-mhlw-pay']
    ] }
  ],

  schools: [
    ['No page we read states how far the name of the university decides who is invited to an interview. What the sources do show is that recruiting runs through the university: career centres hold past students’ reports and alumni lists, and companies run briefing sessions in joint halls.',
      'Nessuna pagina letta dice quanto il nome dell’università decida chi viene invitato a un colloquio. Quello che le fonti mostrano è che la selezione passa dall’università: i centri carriera conservano le relazioni degli studenti precedenti e gli elenchi degli ex studenti, e le aziende organizzano presentazioni in sale congiunte.', 'jp-jasso ours'],
    ['Size matters more than a ranking in the data: 40.5% of the informal offers in the Gakujo survey of July 2026 came from firms with 5,000 or more employees, while about 80% of international students who took jobs in Japan joined firms with fewer than 1,000.',
      'Nei dati conta più la dimensione che una classifica: il 40,5% delle offerte informali nell’indagine di Gakujo di luglio 2026 veniva da aziende con 5.000 o più dipendenti, mentre circa l’80% degli studenti stranieri che hanno trovato lavoro in Giappone è entrato in aziende con meno di 1.000.', 'jp-gakujo jp-jasso']
  ],

  events: [
    ['JASSO runs the TIEC Career Forum for international students in Tokyo; its 2026 kickoff seminar and networking event was held on 27 September 2026, free of charge and in person. The Employment Service Centers for Foreigners also hold job interview events.',
      'Il JASSO organizza a Tokyo il TIEC Career Forum per gli studenti stranieri; il seminario di apertura con incontri di networking del 2026 si è tenuto il 27 settembre 2026, gratuito e in presenza. Anche i Centri di servizio all’impiego per stranieri organizzano eventi con colloqui di lavoro.', 'jp-tiec jp-mhlw-for'],
    ['The Career Forum Network holds fairs for Japanese-English bilinguals, among them the Boston Career Forum, with interviews on site. Joint company briefing sessions, held in hotels and event halls from March, let students compare many firms in a day.',
      'La Career Forum Network organizza fiere per bilingui giapponese-inglese, tra cui il Boston Career Forum, con colloqui in loco. Le presentazioni aziendali congiunte, tenute in alberghi e sale per eventi da marzo, permettono di confrontare molte aziende in un giorno.', 'jp-cfn jp-jasso']
  ],

  customs: [
    { k: 'season', v: 'fixed', t: [
      ['One national calendar: publicity from 1 March, selection from 1 June, formal offers from 1 October, start on 1 April. Many companies also recruit year-round, and the specialised-internship exception lets selection begin before June.',
        'Un solo calendario nazionale: comunicazione dal 1º marzo, selezione dal 1º giugno, offerte formali dal 1º ottobre, inizio il 1º aprile. Molte aziende reclutano anche tutto l’anno, e l’eccezione dei tirocini specialistici permette di iniziare la selezione prima di giugno.', 'jp-cas jp-jasso']
    ] },
    { k: 'masters', v: 'helpful', t: [
      ['In 2025 new graduates with a graduate degree started on ¥299,000 a month against ¥262,300 for university graduates. In the Gakujo survey, science students held offers more often than humanities students (92.7% against 80.9%).',
        'Nel 2025 i neolaureati con un titolo post-laurea iniziavano con 299.000 ¥ al mese contro 262.300 ¥ dei laureati universitari. Nell’indagine di Gakujo gli studenti di materie scientifiche avevano offerte più spesso di quelli di materie umanistiche (92,7% contro 80,9%).', 'jp-mhlw-pay jp-gakujo']
    ] },
    { k: 'degrees', v: 'eval', t: [
      ['No recognition centre screens foreign degrees for ordinary jobs. The step that does look at a degree is the work status: Engineer/Specialist in Humanities/International Services asks for a university degree in a subject relevant to the work (or 10 years of relevant experience), checked by the Immigration Services Agency.',
        'Nessun centro di riconoscimento esamina le lauree straniere per i lavori ordinari. Il passaggio che guarda il titolo è lo status di lavoro: Engineer/Specialist in Humanities/International Services chiede una laurea in una materia pertinente al lavoro (o 10 anni di esperienza pertinente), verificata dall’Agenzia dei servizi di immigrazione.', 'jp-sij-status ours']
    ] },
    { k: 'brand', v: 'some', t: [
      ['No page we read says how much the university name counts. JASSO shows that recruiting runs through campuses, with career centres and alumni, so the school matters mainly as the channel to employers.',
        'Nessuna pagina letta dice quanto conti il nome dell’università. Il JASSO mostra che la selezione passa dai campus, con centri carriera ed ex studenti, quindi la scuola conta soprattutto come canale verso i datori di lavoro.', 'jp-jasso ours']
    ] },
    { k: 'dual', v: 'little', t: [
      ['University graduates reach employers through the new-graduate cohort and internships; apprenticeship or dual-study contracts are not a route we found in any source for university graduates.',
        'I laureati universitari arrivano ai datori di lavoro tramite la coorte dei neolaureati e i tirocini; apprendistato e studio duale non sono una via che abbiamo trovato in alcuna fonte per i laureati universitari.', 'ours']
    ] },
    { k: 'publicw', v: 'mid', t: [
      ['Government-affiliated and other bodies made up 8.9% of the informal offers in the Gakujo survey of July 2026. The national civil-service exams are open to Japanese nationals only, so the weight is lower for a foreign graduate.',
        'Enti governativi e altre organizzazioni rappresentavano l’8,9% delle offerte informali nell’indagine di Gakujo di luglio 2026. Gli esami nazionali per la funzione pubblica sono aperti solo a cittadini giapponesi, quindi il peso è minore per un laureato straniero.', 'jp-gakujo jp-npa']
    ] },
    { k: 'sponsorr', v: 'some', t: [
      ['In 2023, 22,688 of the 43,968 international students who graduated, excluding those going on to further study, took jobs in Japan: 51.6%. About 80% joined firms with fewer than 1,000 employees. Mercari sponsors Japanese visas for engineers when the government requirements are met; the rules themselves are under Visas.',
        'Nel 2023, 22.688 dei 43.968 studenti stranieri laureati, esclusi quelli che proseguono gli studi, hanno trovato lavoro in Giappone: il 51,6%. Circa l’80% è entrato in aziende con meno di 1.000 dipendenti. Mercari sponsorizza i visti giapponesi per gli ingegneri quando i requisiti del governo sono soddisfatti; le regole sono nella sezione Visti.', 'jp-jasso jp-mercarijob']
    ] },
    { k: 'photo', v: 'expected', t: [
      ['The standard Japanese CV form (rirekisho) has a box for a photo, which is expected: JASSO says to attach a photo in a suit taken at a photo studio, with school, department and name on the back, and to keep a digital copy because many companies now ask for online applications.',
        'Il modulo di CV standard giapponese (rirekisho) ha uno spazio per la foto, che è attesa: il JASSO dice di allegare una foto in completo scattata in uno studio fotografico, con scuola, dipartimento e nome sul retro, e di tenerne una copia digitale perché molte aziende ormai chiedono candidature online.', 'jp-jasso']
    ] },
    { k: 'cv', v: 'two', t: [
      ['Two documents are normal: the resume (rirekisho) with basic details, and the entry sheet (ES) with the reasons for applying and self-promotion. Entry-sheet answers are written in Japanese within a set length, around 200 to 400 characters per question.',
        'Due documenti sono la norma: il curriculum (rirekisho) con i dati di base e l’entry sheet (ES) con le motivazioni della candidatura e l’autopromozione. Le risposte dell’entry sheet si scrivono in giapponese entro una lunghezza fissa, circa 200-400 caratteri per domanda.', 'jp-jasso jp-sij-tests']
    ] },
    { k: 'letter', v: 'skip', t: [
      ['There is no cover letter in the Western sense: the entry sheet’s essays on “reasons for applying” and “self-PR” do that job, and interviewers read from them.',
        'Non c’è una lettera di presentazione in senso occidentale: i temi dell’entry sheet su “motivazioni della candidatura” e “autopromozione” svolgono quel ruolo, e gli intervistatori li leggono durante il colloquio.', 'jp-jasso']
    ] },
    { k: 'refs', v: 'none', t: [
      ['References are not among the documents JASSO lists for an application, which are the resume, the entry sheet and a photo; the selection looks at tests, group discussion and interviews. Treat this as our reading.',
        'Le referenze non sono tra i documenti che il JASSO elenca per una candidatura, cioè curriculum, entry sheet e foto; la selezione guarda test, discussione di gruppo e colloqui. Consideralo una nostra lettura.', 'jp-jasso ours']
    ] },
    { k: 'docs', v: 'copies', t: [
      ['Applications are online or on paper forms with a photo; JASSO suggests bringing a personal seal (inkan), a spare resume and a copy of the application form to briefing sessions. No page we read asks for certified or translated diplomas at this stage.',
        'Le candidature sono online o su moduli cartacei con foto; il JASSO consiglia di portare alle presentazioni un sigillo personale (inkan), un curriculum di riserva e una copia del modulo di candidatura. Nessuna pagina letta chiede diplomi certificati o tradotti in questa fase.', 'jp-jasso ours']
    ] },
    { k: 'salary', v: 'never', t: [
      ['The employer states the salary, probation period, allowances and bonus in its application guidelines, so you do not name a figure in the application. New graduates are paid on a company scale that rises with years of service.',
        'Il datore di lavoro indica stipendio, periodo di prova, indennità e bonus nelle linee guida di candidatura, quindi non indichi una cifra nella candidatura. I neolaureati sono pagati secondo una scala aziendale che cresce con gli anni di servizio.', 'jp-jasso']
    ] },
    { k: 'check', v: 'some', t: [
      ['No page we read says how routine background or reference checks are in new-graduate hiring. The document stage is a resume and entry sheet checked against what you say in interviews: interviewers read from them and expect consistent answers.',
        'Nessuna pagina letta dice quanto siano di routine le verifiche dei precedenti o delle referenze nelle assunzioni di neolaureati. La fase documentale è un curriculum e un entry sheet confrontati con ciò che dici ai colloqui: gli intervistatori li leggono e si aspettano risposte coerenti.', 'jp-jasso ours']
    ] },
    { k: 'contact', v: 'open', t: [
      ['Applications go through job portals and company entry sheets in a fixed calendar; visits to alumni (OB/OG hōmon) help you learn about the work but are not a condition of being hired.',
        'Le candidature passano per portali di lavoro e moduli d’ingresso aziendali (entry sheet) secondo un calendario fisso; le visite agli ex studenti (OB/OG hōmon) aiutano a capire il lavoro ma non sono una condizione per essere assunti.', 'jp-jasso ours']
    ] },
    { k: 'abroad', v: 'hard', t: [
      ['Foreign graduates can join the cohort, but almost always in Japanese and on Japan’s calendar; English-only roles are mostly in foreign firms and tech. The Boston Career Forum and Daijob.com (with an “overseas applications welcome” filter) are the routes from abroad.',
        'I laureati stranieri possono entrare nella coorte, ma quasi sempre in giapponese e secondo il calendario giapponese; i ruoli solo in inglese sono per lo più in aziende straniere e nel tech. Il Boston Career Forum e Daijob.com (con un filtro “candidature dall’estero benvenute”) sono le vie dall’estero.', 'jp-jasso jp-cfn jp-daijob']
    ] },
    { k: 'language', v: 'local', t: [
      ['Business-level Japanese for nearly all graduate intakes. In a Career-tasu survey quoted by JASSO, about 70% of companies seek business-intermediate Japanese or higher at the time of the offer, and about 90% after joining; written tests are in Japanese.',
        'Un giapponese di livello professionale per quasi tutte le selezioni di laureati. In un’indagine di Career-tasu citata dal JASSO, circa il 70% delle aziende cerca un giapponese di livello professionale intermedio o superiore al momento dell’offerta, e circa il 90% dopo l’ingresso; i test scritti sono in giapponese.', 'jp-jasso']
    ] }
  ],

  rows: {
    process: [
      ['The sequence is: entry (pre-registration), company briefing session, entry sheet and resume, written test, group discussion, interviews, then a provisional offer. Study in Japan says it is common to have three rounds of interviews, and JASSO describes the process as drawn out.',
        'La sequenza è: entry (preiscrizione), presentazione aziendale, entry sheet e curriculum, test scritto, discussione di gruppo, colloqui, poi un’offerta provvisoria. Study in Japan dice che sono comuni tre turni di colloquio, e il JASSO descrive il processo come lungo.', 'jp-jasso jp-sij-tests'],
      ['The most common aptitude test is SPI3, from Recruit Management Solutions: a verbal part of 30 minutes and a non-verbal part of 40 minutes on paper, 35 minutes on the web, plus a personality test. Web tests at home start from 1 March and paper tests at the company from 1 June; the questions are in Japanese.',
        'Il test attitudinale più comune è l’SPI3, di Recruit Management Solutions: una parte verbale di 30 minuti e una non verbale di 40 minuti su carta, 35 minuti sul web, più un test di personalità. I test web da casa partono dal 1º marzo e quelli su carta in azienda dal 1º giugno; le domande sono in giapponese.', 'jp-jasso'],
      ['A group discussion has four to six applicants discussing a theme set by the employer, usually at the first interview; the aim is consensus, not debate, and roles such as coordinator, secretary, timekeeper and presenter are shared out. Some companies ask first for a recorded video of one to two minutes.',
        'Una discussione di gruppo vede da quattro a sei candidati discutere un tema scelto dal datore di lavoro, di solito al primo colloquio; l’obiettivo è il consenso, non il dibattito, e si distribuiscono ruoli come coordinatore, segretario, cronometrista e relatore. Alcune aziende chiedono prima un video registrato di uno o due minuti.', 'jp-jasso jp-sij-tests'],
      ['Interviews are in Japanese and formal: a suit, a bow, arrival at least 10 minutes early for a briefing session, and a login five minutes early for an online interview. The interviewer reads your entry sheet and expects consistent answers.',
        'I colloqui sono in giapponese e formali: un completo, un inchino, arrivo con almeno 10 minuti di anticipo a una presentazione e accesso cinque minuti prima per un colloquio online. L’intervistatore legge il tuo entry sheet e si aspetta risposte coerenti.', 'jp-jasso'],
      ['The timeline runs from entry in March to selection from June and informal offers soon after, with official offers from 1 October: about seven months in all, and earlier for students who go through internships.',
        'La tempistica va dall’entry a marzo alla selezione da giugno e alle offerte informali subito dopo, con le offerte ufficiali dal 1º ottobre: circa sette mesi in tutto, e meno per gli studenti che passano dai tirocini.', 'jp-sij-sched jp-cas']
    ],
    offer: [
      ['The first notice of an offer is usually a phone call, followed by a formal offer letter. You are then asked for a pledge or acknowledgement; until you submit it the offer is provisional, and some companies ask you to sign at a gathering so that it becomes official on the spot.',
        'La prima comunicazione di un’offerta è di solito una telefonata, seguita da una lettera formale. Poi ti viene chiesto un impegno scritto o una conferma di ricezione; finché non lo presenti l’offerta è provvisoria, e alcune aziende chiedono di firmare a un incontro in modo che diventi ufficiale subito.', 'jp-jasso'],
      ['The pledge is not legally binding, so you can keep job hunting after signing it. Students held 2.73 informal offers on average and kept 1.29 at the end of July 2026, so declining is part of the process. JASSO says to decline by telephone, not e-mail, and that you need not say which company you chose.',
        'L’impegno scritto non è legalmente vincolante, quindi puoi continuare a cercare dopo averlo firmato. Gli studenti avevano ottenuto in media 2,73 offerte informali e ne tenevano 1,29 a fine luglio 2026, quindi rifiutare fa parte del processo. Il JASSO dice di rifiutare per telefono e non per e-mail, e che non sei obbligato a dire quale azienda hai scelto.', 'jp-jasso jp-gakujo'],
      ['The application guidelines set out the employment type, probation period, allowances, bonus and holidays. Pay rises are usually based on years of service, and many companies hire for general work in which the post and the place can change.',
        'Le linee guida di candidatura indicano il tipo di contratto, il periodo di prova, le indennità, il bonus e le ferie. Gli aumenti di stipendio di solito dipendono dagli anni di servizio, e molte aziende assumono per un lavoro generico in cui mansione e sede possono cambiare.', 'jp-jasso'],
      ['A university graduate starts on ¥262,300 a month on average (2025), and a graduate-school entrant on ¥299,000. A foreign graduate must also change from a student status to a work status before 1 April; the Immigration Services Agency asked for filings from 1 December 2025 to late January 2026.',
        'Un laureato universitario inizia con 262.300 ¥ al mese in media (2025), e chi entra con un titolo post-laurea con 299.000 ¥. Un laureato straniero deve anche passare da uno status di studente a uno status di lavoro prima del 1º aprile; l’Agenzia dei servizi di immigrazione ha chiesto le domande dal 1º dicembre 2025 a fine gennaio 2026.', 'jp-mhlw-pay jp-isa-early jp-jasso']
    ],
    sponsor: [
      ['Sponsoring a graduate is an ordinary event for many employers: in 2023, 22,688 of the 43,968 international students who graduated took jobs in Japan, and about 80% of them at firms with fewer than 1,000 employees, almost half at firms with fewer than 100.',
        'Sponsorizzare un laureato è un evento ordinario per molti datori di lavoro: nel 2023, 22.688 dei 43.968 studenti stranieri laureati hanno trovato lavoro in Giappone, e circa l’80% in aziende con meno di 1.000 dipendenti, quasi la metà in aziende con meno di 100.', 'jp-jasso'],
      ['What an employer wants to hear is business-level Japanese (70% ask for it at the offer stage) and a degree whose subject matches the job, because the Engineer/Specialist status is tied to the major. Ask early whether the company has already taken a student through a status change: from December 2025 the Agency reduced the documents for employers that do.',
        'Ciò che un datore di lavoro vuole sentirsi dire è un giapponese di livello professionale (il 70% lo chiede al momento dell’offerta) e un titolo la cui materia corrisponde al lavoro, perché lo status Engineer/Specialist è legato alla materia di studio. Chiedi presto se l’azienda ha già portato uno studente a cambiare status: da dicembre 2025 l’Agenzia ha ridotto i documenti per i datori di lavoro che lo hanno fatto.', 'jp-jasso jp-sij-status jp-isa-early'],
      ['Get the offer before January: JASSO says all status-change procedures must be finished by the end of January to join on 1 April. The Immigration Services Agency does not answer individual case inquiries during the spring hiring period.',
        'Ottieni l’offerta prima di gennaio: il JASSO dice che tutte le pratiche di cambio di status devono essere concluse entro fine gennaio per entrare il 1º aprile. L’Agenzia dei servizi di immigrazione non risponde a richieste su singole pratiche durante il periodo delle assunzioni primaverili.', 'jp-jasso jp-isa-early'],
      ['Employers that name visa support are easy to find: Mercari lists relocation and sponsorship for engineers, UNIQLO’s programme offers visa support to participants, and Daijob.com has a “visa support available” filter.',
        'I datori di lavoro che indicano il supporto al visto sono facili da trovare: Mercari elenca trasferimento e sponsorizzazione per gli ingegneri, il programma di UNIQLO offre ai partecipanti il supporto al visto, e Daijob.com ha un filtro “supporto al visto disponibile”.', 'jp-mercarijob jp-gmp jp-daijob']
    ],
    where: [
      ['JASSO’s guide lists the employment information sites run by Association of Job Information of Japan members: Mynavi, Rikunabi, Career-tasu (Career+), Gakujo’s Re Job Hunting Campus, Diamond Shushoku Navi, Bun Nabi!, S-WaveNet and ACCESS Humanext. Companies also take entries on their own recruitment pages.',
        'La guida del JASSO elenca i siti di informazione sul lavoro dei soci dell’Association of Job Information of Japan: Mynavi, Rikunabi, Career-tasu (Career+), Re Job Hunting Campus di Gakujo, Diamond Shushoku Navi, Bun Nabi!, S-WaveNet e ACCESS Humanext. Le aziende accettano anche entry sulle proprie pagine di selezione.', 'jp-jasso'],
      ['The Employment Service Centers for Foreigners (Tokyo, Nagoya, Osaka, and a student centre in Fukuoka) give job-search information and run internship programmes and interview events. The Tokyo centre is at Yotsuya Tower and serves students looking for full-time work, not part-time.',
        'I Centri di servizio all’impiego per stranieri (Tokyo, Nagoya, Osaka, e un centro per studenti a Fukuoka) danno informazioni sulla ricerca di lavoro e organizzano programmi di tirocinio ed eventi di colloquio. Il centro di Tokyo si trova alla Yotsuya Tower e serve gli studenti in cerca di lavoro a tempo pieno, non part-time.', 'jp-mhlw-for jp-tesc jp-sij-emp'],
      ['For bilinguals: Daijob.com, the Career Forum Network (Boston Career Forum and others), and the careers pages of Mercari, Rakuten and UNIQLO. JASSO’s TIEC Career Forum in Tokyo is aimed at international students starting their job hunt.',
        'Per i bilingui: Daijob.com, la Career Forum Network (Boston Career Forum e altri), e le pagine di selezione di Mercari, Rakuten e UNIQLO. Il TIEC Career Forum del JASSO a Tokyo è rivolto agli studenti stranieri che iniziano la ricerca.', 'jp-daijob jp-cfn jp-mercari-ng jp-rakuten jp-gmp jp-tiec'],
      ['Your university’s career centre keeps reports from past students on each company’s tests and interviews; Hello Work, the public employment service, lists jobs and events, but its main site is in Japanese only.',
        'Il centro carriera della tua università conserva le relazioni degli studenti precedenti sui test e sui colloqui di ciascuna azienda; Hello Work, il servizio pubblico per l’impiego, elenca offerte ed eventi, ma il suo sito principale è solo in giapponese.', 'jp-jasso jp-hw']
    ],
    mistakes: [
      ['Starting late. International students tend to begin later than Japanese ones, but by 1 May 67% of the class of 2027 already had an informal offer and many had come through internships; the preparation (self-analysis, industry research, alumni visits) belongs to the third year.',
        'Iniziare tardi. Gli studenti stranieri tendono a cominciare più tardi dei giapponesi, ma al 1º maggio il 67% della classe del 2027 aveva già un’offerta informale e molti l’avevano ottenuta dai tirocini; la preparazione (autoanalisi, studio dei settori, visite agli ex studenti) appartiene al terzo anno.', 'jp-jasso jp-sakigake'],
      ['Skipping the internships and open-company days. Students in the Gakujo survey had joined 6.22 on average, and 40.4% had joined 10 or more.',
        'Saltare tirocini e giornate aziendali aperte. Gli studenti dell’indagine di Gakujo ne avevano fatti in media 6,22, e il 40,4% ne aveva fatti 10 o più.', 'jp-gakujo'],
      ['Treating the Japanese tests as optional. Written tests such as SPI3 are in Japanese in principle, speed matters more than difficulty, and JASSO suggests that a student who cannot cope can look for companies that do not set aptitude tests.',
        'Trattare i test in giapponese come facoltativi. I test scritti come l’SPI3 sono in giapponese in linea di principio, conta più la velocità che la difficoltà, e il JASSO suggerisce a chi non ce la fa di cercare aziende che non prevedono test attitudinali.', 'jp-jasso'],
      ['Declining an offer by e-mail, or signing a letter of acceptance under pressure. JASSO says to decline by telephone, and that a signed pledge is not legally binding; if you are held for hours, contact the university career centre.',
        'Rifiutare un’offerta per e-mail, o firmare una lettera di accettazione sotto pressione. Il JASSO dice di rifiutare per telefono e che un impegno firmato non è legalmente vincolante; se ti trattengono per ore, rivolgiti al centro carriera dell’università.', 'jp-jasso'],
      ['Counting on the national civil service as a fallback: the National Personnel Authority’s 2024 outline excludes people without Japanese nationality.',
        'Contare sul pubblico impiego nazionale come ripiego: il prospetto 2024 dell’Autorità nazionale del personale esclude chi non ha la cittadinanza giapponese.', 'jp-npa']
    ]
  },

  lang: [
    { f: 'finance', v: 'bilingual', lv: 'Business Japanese', t: [
      ['Domestic banks and brokers recruit in Japanese, and the written tests are in Japanese. Foreign banks differ: Bank of America requires its graduate hires to be bilingual.',
        'Banche e società di intermediazione nazionali reclutano in giapponese, e i test scritti sono in giapponese. Le banche straniere sono diverse: Bank of America chiede ai neoassunti di essere bilingui.', 'jp-jasso jp-hedgeweek']
    ] },
    { f: 'accounting', v: 'local', lv: 'Business Japanese', t: [
      ['The audit firms’ new-graduate and CPA-track selection runs in Japanese; the CPA exam itself is a Japanese-language qualification. No page we read states a level.',
        'La selezione dei neolaureati e dei candidati CPA delle società di revisione si svolge in giapponese; l’esame da CPA è una qualifica in lingua giapponese. Nessuna pagina letta indica un livello.', 'ours']
    ] },
    { f: 'business', v: 'local', lv: 'Business Japanese', t: [
      ['About 70% of companies seek business-intermediate Japanese or higher at the offer stage and about 90% after joining. They judge writing from the entry sheet, and listening and speaking in interviews; a JLPT or BJT score is the usual proof.',
        'Circa il 70% delle aziende cerca un giapponese di livello professionale intermedio o superiore al momento dell’offerta e circa il 90% dopo l’ingresso. Valutano la scrittura dall’entry sheet, e comprensione e conversazione nei colloqui; un punteggio JLPT o BJT è la prova abituale.', 'jp-jasso']
    ] },
    { f: 'public', v: 'local', lv: 'Native Japanese', t: [
      ['The National Personnel Authority’s exams exclude non-nationals, and are written and run in Japanese.',
        'Gli esami dell’Autorità nazionale del personale escludono i non cittadini, e si svolgono e si scrivono in giapponese.', 'jp-npa ours']
    ] },
    { f: 'tech', v: 'bilingual', lv: 'English B2 or Japanese B2', t: [
      ['Mercari uses both Japanese and English at work, with the level depending on the position, and runs online English lessons for offer holders. An engineering internship listing from 2024 gave “Japanese: not required” and English or Japanese at CEFR B2, with the machine learning track needing fluent Japanese.',
        'Mercari usa sia il giapponese sia l’inglese al lavoro, con un livello che dipende dal ruolo, e offre lezioni di inglese online a chi ha accettato l’offerta. Un annuncio di tirocinio di ingegneria del 2024 indicava “giapponese: non richiesto” e inglese o giapponese a livello CEFR B2, con il percorso di machine learning che richiede un giapponese fluente.', 'jp-mercari-ng jp-mercarijob']
    ] },
    { f: 'ai', v: 'bilingual', lv: 'English B2 or Japanese B2', t: [
      ['Mercari’s 2024 internship listing asked for fluent Japanese on the machine learning track, while other engineering tracks accepted English or Japanese at B2.',
        'L’annuncio di tirocinio di Mercari del 2024 chiedeva un giapponese fluente per il percorso di machine learning, mentre altri percorsi di ingegneria accettavano inglese o giapponese a livello B2.', 'jp-mercarijob']
    ] }
  ],

  programmes: [
    { n: 'New-graduate recruitment (year-round, April and October joining)', o: 'Mercari', f: 'tech', in: null, w: null, lang: 'JA EN', intl: 'yes', ids: 'jp-mercari-ng jp-mercari' },
    { n: 'UNIQLO Global Management Program (six days in Tokyo)', o: 'Fast Retailing (UNIQLO)', f: 'business', in: null, w: null, lang: 'EN', intl: 'yes', ids: 'jp-gmp' },
    { n: 'New-graduate Business and Engineer positions', o: 'Rakuten Group', f: 'tech', in: null, w: null, lang: 'JA', intl: 'unknown', ids: 'jp-rakuten' },
    { n: 'New-graduate recruitment (11 tracks including global banking)', o: 'Sumitomo Mitsui Banking Corporation', f: 'finance', in: null, w: null, lang: 'JA', intl: 'unknown', ids: 'jp-hedgeweek' },
    { n: 'New-graduate recruitment in Japan (20 to 30 a year)', o: 'Citigroup', f: 'finance', in: null, w: null, lang: 'EN JA', intl: 'unknown', ids: 'jp-hedgeweek' },
    { n: 'Expert course for graduates with data, programming, maths or science skills', o: 'Daiwa Securities Group', f: 'ai', in: null, w: null, lang: 'JA', intl: 'unknown', ids: 'jp-hedgeweek' }
  ],

  outcomes: [
    ['International students: in 2023, 22,688 of the 43,968 who graduated (excluding those going on to further study in Japan) took jobs in Japan, a domestic employment rate of 51.6%, according to JASSO.',
      'Studenti stranieri: nel 2023, 22.688 dei 43.968 laureati (esclusi quelli che proseguono gli studi in Giappone) hanno trovato lavoro in Giappone, un tasso di occupazione interna del 51,6%, secondo il JASSO.', 'jp-jasso'],
    ['The headline graduate employment rate of 98.0% counts students who sought work in the domestic calendar. Japanese undergraduates held about 2.4 offers each before graduating (Career-tasu), and the Gakujo survey puts the average offers obtained at 2.73 by the end of July 2026.',
      'Il tasso di occupazione dei laureati del 98,0% conta gli studenti che hanno cercato lavoro nel calendario nazionale. Gli studenti universitari giapponesi avevano circa 2,4 offerte ciascuno prima di laurearsi (Career-tasu), e l’indagine di Gakujo indica una media di 2,73 offerte ottenute a fine luglio 2026.', 'jp-hedgeweek jp-gakujo']
  ],

  sources: {
    'jp-cas': ['employer-stated', 'Cabinet Secretariat: request to business associations on the recruiting schedule for 2027 graduates', 'https://www.cas.go.jp/jp/seisaku/shushoku_katsudou_yousei/2027nendosotu/index.html', '2026-10-08'],
    'jp-gakujo': ['data', 'Gakujo: offer-rate survey of the class of 2027, August 2026', 'https://service.gakujo.ne.jp/wp-content/uploads/2026/08/27naiteiritsu0804.pdf', '2026-10-08'],
    'jp-sakigake': ['data', 'Sakigake Shimpo (Kyodo), 1 June 2026: university offer rate 67% as of 1 May (Indeed Recruit Partners survey)', 'https://www.sakigake.jp/news/article/20260601CO0045/', '2026-10-08'],
    'jp-hedgeweek': ['practitioner consensus', 'Hedgeweek, 25 September 2026: Japan’s hedge funds and banks step up the graduate hiring battle', 'https://hedgeweek.com/news/japans-hedge-funds-and-banks-step-up-graduate-hiring-battle', '2026-10-08'],
    'jp-big4': ['practitioner consensus', 'MyVision: the Big Four audit firms explained (hiring of CPA exam passers, other roles, entry without the licence)', 'https://my-vision.co.jp/big4-explanation', '2026-10-09'],
    'jp-mercari': ['employer-stated', 'S&T Office Tokyo: Mercari hires a large number of non-Japanese graduates', 'https://stofficetokyo.ch/news/startups/japan-online-flea-market-operator-mercari-hires-large-number-of-non-japanese-grads', '2026-10-07'],
    'jp-mercarijob': ['employer-stated', 'Japan Dev: Mercari/Merpay software engineer internship (language and visa terms; 2024 listing)', 'https://japan-dev.com/jobs/mercari/mercari-software-engineer---mercarimerpay-internship-fxfh2p', '2026-10-08'],
    'jp-mercari-ng': ['employer-stated', 'Mercari Careers: new graduates (pre-entry, internships, year-round recruiting, language support)', 'https://careers.mercari.com/en/new-graduates/', '2026-10-08'],
    'jp-jasso': ['practitioner consensus', 'JASSO: Job Hunting Guide for International Students 2027 (schedule, tests, interviews, offers, employers’ Japanese-level survey)', 'https://www.jasso.go.jp/en/ryugaku/after_study_j/job/guide.html', '2026-10-08'],
    'jp-sij-tests': ['practitioner consensus', 'Study in Japan (JASSO): Chapter 4, Employment examinations', 'https://www.studyinjapan.go.jp/en/work-in-japan/employment/recruitment-tests.html', '2026-10-08'],
    'jp-sij-sched': ['practitioner consensus', 'Study in Japan (JASSO): Chapter 3, Job hunting schedule', 'https://www.studyinjapan.go.jp/en/work-in-japan/employment/schedule.html', '2026-10-08'],
    'jp-sij-status': ['data', 'Study in Japan (JASSO): Chapter 5, Status of residence', 'https://www.studyinjapan.go.jp/en/work-in-japan/employment/status.html', '2026-10-08'],
    'jp-sij-emp': ['data', 'Study in Japan (JASSO): Employment in Japan, sources of information and job-seeking after graduation', 'https://www.studyinjapan.go.jp/en/work-in-japan/employment/', '2026-10-08'],
    'jp-tesc': ['data', 'Tokyo Employment Service Center for Foreigners (MHLW)', 'https://jsite.mhlw.go.jp/tokyo-foreigner/english.html', '2026-10-08'],
    'jp-mhlw-for': ['data', 'MHLW: employment services for foreign nationals and international students', 'https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/koyou_roudou/koyou/gaikokujin/index.html', '2026-10-08'],
    'jp-hw': ['data', 'Hello Work Internet Service (MHLW)', 'https://www.hellowork.mhlw.go.jp/', '2026-10-08'],
    'jp-gmp': ['employer-stated', 'Fast Retailing: UNIQLO Global Management Program 2026', 'https://www.fastretailing.com/employment/en/uniqlo/graduate/gmp/', '2026-10-08'],
    'jp-rakuten': ['employer-stated', 'Rakuten Group: new-graduate recruiting (Business and Engineer positions)', 'https://global.rakuten.com/corp/careers/graduates/', '2026-10-08'],
    'jp-cfn': ['employer-stated', 'Career Forum Network (Career-tasu): job fairs for Japanese-English bilinguals', 'https://www.careerforum.net/en/', '2026-10-08'],
    'jp-tiec': ['data', 'Study in Japan (JASSO): TIEC Career Forum 2026, kickoff of 27 September', 'https://www.studyinjapan.go.jp/en/events/spo2608241400.html', '2026-10-08'],
    'jp-daijob': ['employer-stated', 'Daijob.com: job search for bilingual and multilingual professionals', 'https://www.daijob.com/en/', '2026-10-08'],
    'jp-npa': ['data', 'National Personnel Authority, outline of the 2024 national civil-service examinations (copy hosted by Tokyo University of Marine Science and Technology)', 'https://www.kaiyodai.ac.jp/campus-cms/syusyokushien/information/img/44a9a6ed3f0a2071b4b9dfcd9f65be03.pdf', '2026-10-08'],
    'jp-isa-early': ['practitioner consensus', 'Envoy Global: Japan early application window for student status changes (Immigration Services Agency notice)', 'https://www.envoyglobal.com/news-alert/japan-early-application-window-for-student-status-changes/', '2026-10-08'],
    'jp-mhlw-pay': ['data', 'MHLW: Basic Survey on Wage Structure 2025, table 10, wages of new graduates by education', 'https://www.mhlw.go.jp/toukei/itiran/roudou/chingin/kouzou/z2025/dl/10.pdf', '2026-10-08']
  }
});
