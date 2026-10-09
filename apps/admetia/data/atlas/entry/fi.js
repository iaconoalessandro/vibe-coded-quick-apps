/* How hiring works: Finland. From research/places/iberia-and-nordics.md §1 and §6,
 * with reads on 7 and 8 Oct 2026 (TEK, Alma Media Kesätyö.fi, Aalto, Valmet, EK, Nordea,
 * Wärtsilä, Työmarkkinatori, InfoFinland, Työsuojelu, EDUFI, Migri, Valtiolle.fi). */
ATLAS.addEntry({
  id: 'FI',
  checked: '2026-10-08',
  review: '2027-04-08',

  lead: [
    ['Finnish working life starts with summer jobs. Firms recruit summer trainees from December to February, and a summer job in your own field, repeated over several years, is what turns into a thesis, a part-time job and then a permanent contract.',
      'La vita lavorativa finlandese comincia con i lavori estivi. Le aziende reclutano tirocinanti estivi da dicembre a febbraio, e un lavoro estivo nel proprio settore, ripetuto per più anni, è ciò che diventa una tesi, un part-time e poi un contratto stabile.', 'fi-tek fi-valmet fi-wartsila']
  ],

  ways: [
    { name: ['Summer trainee (kesätyö, kesäharjoittelija) and thesis in a company', 'Tirocinante estivo (kesätyö, kesäharjoittelija) e tesi in azienda'], r: 'intern', p: 'first intern', basis: 'data', t: [
      ['Large employers take hundreds at a time: Valmet hired nearly 400 summer trainees in 2019 and calls them a recruitment channel; Wärtsilä’s Summer Power takes around 600 degree students in Vaasa, Turku and Helsinki, with 2026 applications from 29 December 2025 to 15 February 2026. 30% of Finnish engineering graduates finished with more than two years of work in their field.',
        'I grandi datori ne prendono centinaia alla volta: Valmet ha assunto quasi 400 tirocinanti estivi nel 2019 e li definisce un canale di reclutamento; il Summer Power di Wärtsilä prende circa 600 studenti universitari a Vaasa, Turku e Helsinki, con candidature 2026 dal 29 dicembre 2025 al 15 febbraio 2026. Il 30% dei laureati finlandesi in ingegneria ha finito con più di due anni di lavoro nel proprio settore.', 'fi-valmet fi-wartsila fi-tek'],
      ['A master’s thesis commissioned by the summer employer is the usual next step, and often leads to the first contract. The national Kesätyö.fi service launched on 15 January 2026 with 10,000 summer jobs open regardless of experience or networks.',
        'Una tesi magistrale commissionata dal datore estivo è il passo successivo abituale, e spesso porta al primo contratto. Il servizio nazionale Kesätyö.fi è stato lanciato il 15 gennaio 2026 con 10.000 lavori estivi aperti a prescindere da esperienza o rete di contatti.', 'fi-valmet fi-kesatyo']
    ] },
    { name: ['Graduate programmes', 'Programmi per laureati'], r: 'scheme', p: 'first', basis: 'consensus', t: [
      ['Nordea’s 1.5-year programme from September takes applications in February (9 to 28 February 2026), with an online test and interviews in March and April; it asks for a completed master’s, excellent English and less than two years of work experience.',
        'Il programma di 1,5 anni di Nordea da settembre raccoglie candidature a febbraio (dal 9 al 28 febbraio 2026), con un test online e colloqui a marzo e aprile; richiede un master concluso, un ottimo inglese e meno di due anni di esperienza lavorativa.', 'fi-nordea-p'],
      ['KONE’s International Trainee Program is the other programme named in the sources, aimed at students and recent graduates; its page gives no duration or application window.',
        'L’International Trainee Program di KONE è l’altro programma indicato nelle fonti, rivolto a studenti e neolaureati; la sua pagina non indica né durata né finestra di candidatura.', 'fi-kone-s']
    ] },
    { name: ['Open applications and hidden jobs', 'Candidature aperte e lavori nascosti'], r: 'network', p: 'first exp', basis: 'consensus', t: [
      ['Job Market Finland cites Sitra for the claim that up to 75% of jobs in Finland are not publicly advertised and recommends open applications, LinkedIn contacts and industry events; InfoFinland says you can ask an employer to keep your application on file.',
        'Job Market Finland cita Sitra per l’affermazione che fino al 75% dei posti di lavoro in Finlandia non è pubblicato e raccomanda candidature aperte, contatti LinkedIn ed eventi di settore; InfoFinland dice che puoi chiedere a un datore di lavoro di tenere la tua candidatura in archivio.', 'fi-tm-tips5 fi-infofinland']
    ] },
    { name: ['Posted vacancies', 'Annunci pubblicati'], r: 'direct', p: 'first exp', basis: 'consensus', t: [
      ['Työmarkkinatori (Job Market Finland), run by the KEHA Centre, is the public service for vacancies and applicant profiles; Valtiolle.fi gathers state-government jobs and internships, with a “Jobs in English” link.',
        'Työmarkkinatori (Job Market Finland), gestito dal KEHA Centre, è il servizio pubblico per offerte di lavoro e profili dei candidati; Valtiolle.fi raccoglie i posti di lavoro e i tirocini dello Stato, con un link “Jobs in English”.', 'fi-tm fi-valtiolle'],
      ['Applications are usually written in the language of the ad, and some employers accept only their own online system; this is also the route for the experienced hire.',
        'Le candidature sono di solito scritte nella lingua dell’annuncio, e alcuni datori di lavoro accettano solo il proprio sistema online; è anche la strada per chi ha esperienza.', 'fi-infofinland']
    ] },
    { name: ['Campus recruiting fairs', 'Fiere di reclutamento nei campus'], r: 'campus', p: 'first intern', basis: 'consensus', t: [
      ['Aalto’s Talent Expo on 14 November 2024 had 89 exhibitors and was open to students of all Aalto schools; ARENA, in 2014 at the business school, was called the largest recruiting event for business students in Finland, with 65 companies and over 3,000 students.',
        'Il Talent Expo di Aalto del 14 novembre 2024 ha avuto 89 espositori ed era aperto agli studenti di tutte le scuole di Aalto; ARENA, nel 2014 alla business school, era definita il maggiore evento di reclutamento per studenti di economia in Finlandia, con 65 aziende e oltre 3.000 studenti.', 'fi-expo fi-aalto']
    ] },
    { name: ['Temporary agency work', 'Lavoro tramite agenzia interinale'], r: 'agency', p: 'first exp', basis: 'anecdotal', t: [
      ['Job Market Finland says temporary agency work is common in Finland and follows the same labour legislation; job-arranging services are free for employees and you should never pay anyone to arrange a job.',
        'Job Market Finland afferma che il lavoro interinale è comune in Finlandia e segue la stessa legislazione sul lavoro; i servizi di intermediazione sono gratuiti per i lavoratori e non devi mai pagare nessuno per trovare un lavoro.', 'fi-tm-tips5']
    ] }
  ],

  cycle: [
    ['Summer jobs are scarcer when the economy is weak; a national portal launched in January 2026 opened with 10,000 summer jobs at a time when fewer were on offer and competition was rising.',
      'I lavori estivi scarseggiano quando l’economia è debole; un portale nazionale lanciato a gennaio 2026 è partito con 10.000 lavori estivi in un momento in cui ce n’erano meno e la concorrenza cresceva.', 'fi-kesatyo'],
    ['The calendar is winter-led: Wärtsilä took summer applications from 29 December to 15 February, Nordea’s graduate programme from 9 to 28 February with interviews in March and April and a September start, and Aalto’s Talent Expo falls in November.',
      'Il calendario è guidato dall’inverno: Wärtsilä ha raccolto le candidature estive dal 29 dicembre al 15 febbraio, il programma per laureati di Nordea dal 9 al 28 febbraio con colloqui a marzo e aprile e inizio a settembre, e il Talent Expo di Aalto cade a novembre.', 'fi-wartsila fi-nordea-p fi-expo'],
    ['Graduates’ employment at graduation slipped in 2024, 86.6% of recent graduates were in work in 2025, and unemployment among 15-to-24-year-olds was 21.8%, up from 16.2% in 2023.',
      'L’occupazione dei laureati alla laurea è calata nel 2024, l’86,6% dei laureati recenti lavorava nel 2025, e la disoccupazione tra i 15 e i 24 anni era del 21,8%, in aumento dal 16,2% del 2023.', 'fi-tekres fi-eurostat-g']
  ],

  schools: [
    ['Aalto’s business graduates of 2024 went into consultancy (21%), finance (13%) and the public sector (9%); 90% were employed or entrepreneurs a year out and 92% of those employed worked in Finland.',
      'I laureati in economia di Aalto del 2024 sono andati nella consulenza (21%), nella finanza (13%) e nel settore pubblico (9%); il 90% era occupato o imprenditore a un anno dalla laurea e il 92% degli occupati lavorava in Finlandia.', 'fi-aaltobiz'],
    ['Recognition of a foreign degree is not needed for most jobs: the employer assesses the qualification itself, and EDUFI or another authority decides only for regulated professions and posts that require a Finnish degree of a certain level.',
      'Il riconoscimento di un titolo estero non serve per la maggior parte dei lavori: il datore di lavoro valuta da sé il titolo, e l’EDUFI o un’altra autorità decide solo per le professioni regolamentate e i posti che richiedono un titolo finlandese di un certo livello.', 'fi-edufi'],
    ['Job Market Finland advises briefly describing the content of a foreign degree, because titles alone may not convey your training.',
      'Job Market Finland consiglia di descrivere brevemente il contenuto di un titolo estero, perché i soli nomi potrebbero non comunicare la tua formazione.', 'fi-tm-tips5']
  ],

  events: [
    ['Aalto’s Talent Expo: 14 November 2024 at Dipoli, Otaniemi, with 89 exhibitors, free for Aalto students, registration through JobTeaser.',
      'Il Talent Expo di Aalto: 14 novembre 2024 al Dipoli, a Otaniemi, con 89 espositori, gratuito per gli studenti Aalto, iscrizione tramite JobTeaser.', 'fi-expo'],
    ['Employer campaigns to recruit international students for summer jobs and theses, backed by the Confederation of Finnish Industries.',
      'Campagne dei datori per reclutare studenti internazionali per lavori estivi e tesi, sostenute dalla Confederazione delle industrie finlandesi.', 'fi-ek'],
    ['TE services, municipal employment services and International Houses offer free career guidance and job-search coaching, including International House Helsinki’s employment coaching.',
      'I servizi TE, i servizi comunali per l’occupazione e le International House offrono gratuitamente orientamento professionale e coaching per la ricerca di lavoro, incluso il coaching all’occupazione dell’International House Helsinki.', 'fi-tm-tips5']
  ],

  fields: [
    { f: 'finance', t: [
      ['Nordea’s 1.5-year programme takes applications in February with an online test; it runs in several countries and pays local terms, and a Helsinki graduate in Personal Banking features on its page.',
        'Il programma di 1,5 anni di Nordea raccoglie candidature a febbraio con un test online; si svolge in più paesi e paga secondo le condizioni locali, e sulla sua pagina compare una laureata di Helsinki in Personal Banking.', 'fi-nordea-p'],
      ['Nordea and OP recruit through summer trainee jobs and graduate programmes.',
        'Nordea e OP reclutano tramite lavori estivi da tirocinante e programmi per laureati.', 'fi-iberia ours']
    ] },
    { f: 'consulting', t: [
      ['Consultancy took 21% of Aalto’s 2024 business graduates, the largest destination.',
        'La consulenza ha preso il 21% dei laureati in economia di Aalto del 2024, la destinazione principale.', 'fi-aaltobiz']
    ] },
    { f: 'business', t: [
      ['Aalto’s business graduates go mostly to large companies (61%), into consultancy, finance and the public sector, usually from a summer job.',
        'I laureati in economia di Aalto vanno soprattutto in grandi aziende (61%), nella consulenza, nella finanza e nel settore pubblico, di solito da un lavoro estivo.', 'fi-aaltobiz'],
      ['Wärtsilä’s Summer Power (around 600 trainees; English is the official working language), Valmet’s summer trainees and KONE’s International Trainee Program are the industrial entries named.',
        'Il Summer Power di Wärtsilä (circa 600 tirocinanti; l’inglese è la lingua di lavoro ufficiale), i tirocinanti estivi di Valmet e l’International Trainee Program di KONE sono gli ingressi industriali indicati.', 'fi-wartsila fi-valmet fi-kone-s']
    ] },
    { f: 'public', t: [
      ['Valtiolle.fi lists hundreds of state positions at a time, in Finland and abroad, with internships and a section for students and recent graduates; 9% of Aalto’s 2024 business graduates went into the public sector.',
        'Valtiolle.fi elenca centinaia di posti dello Stato alla volta, in Finlandia e all’estero, con tirocini e una sezione per studenti e neolaureati; il 9% dei laureati in economia di Aalto del 2024 è andato nel settore pubblico.', 'fi-valtiolle fi-aaltobiz']
    ] },
    { f: 'tech', t: [
      ['Software firms such as Wolt, Nokia, Kone and the games studios take summer trainees and juniors, but graduates’ employment at graduation slipped in 2024, and international graduates find it particularly hard to enter.',
        'Aziende software come Wolt, Nokia, Kone e gli studi di videogiochi prendono tirocinanti estivi e junior, ma l’occupazione dei laureati alla laurea è calata nel 2024, e i laureati internazionali faticano particolarmente a entrare.', 'fi-tekres ours']
    ] }
  ],

  customs: [
    { k: 'season', v: 'cyclical', t: [
      ['Summer jobs and graduate programmes open in winter (Wärtsilä from 29 December to 15 February, Nordea in February) for a summer or September start; other vacancies are posted all year.',
        'I lavori estivi e i programmi per laureati aprono in inverno (Wärtsilä dal 29 dicembre al 15 febbraio, Nordea a febbraio) per un inizio in estate o a settembre; gli altri annunci sono pubblicati tutto l’anno.', 'fi-wartsila fi-nordea-p fi-tm']
    ] },
    { k: 'masters', v: 'expected', t: [
      ['Nordea requires a master’s completed before joining; Wärtsilä’s summer programme asks only for full-time degree students.',
        'Nordea richiede un master concluso prima dell’ingresso; il programma estivo di Wärtsilä chiede solo studenti universitari a tempo pieno.', 'fi-nordea-p fi-wartsila']
    ] },
    { k: 'degrees', v: 'regulated', t: [
      ['A recognition decision from EDUFI or another competent authority is needed only for a regulated profession or a post requiring a Finnish higher education degree of a certain level; otherwise the employer assesses the qualification, and the decision is subject to a charge.',
        'Una decisione di riconoscimento dell’EDUFI o di un’altra autorità competente serve solo per una professione regolamentata o per un posto che richiede un titolo di istruzione superiore finlandese di un certo livello; altrimenti il datore di lavoro valuta il titolo, e la decisione è soggetta a una tariffa.', 'fi-edufi']
    ] },
    { k: 'brand', v: 'some', t: [
      ['Employers recruit visibly at Aalto’s fairs, but the programmes read name no list of schools, and Job Market Finland advises describing a foreign degree because titles may not convey your training.',
        'I datori di lavoro reclutano in modo visibile alle fiere di Aalto, ma i programmi letti non indicano un elenco di università, e Job Market Finland consiglia di descrivere un titolo estero perché i nomi potrebbero non comunicare la tua formazione.', 'fi-expo fi-tm-tips5']
    ] },
    { k: 'dual', v: 'some', t: [
      ['Students work in summer jobs, write the thesis for the employer and often take a part-time job; there is no formal dual-study degree for business or computing graduates in the sources read.',
        'Gli studenti fanno lavori estivi, scrivono la tesi per il datore di lavoro e spesso prendono un part-time; nelle fonti lette non esiste un corso duale formale per i laureati in economia o informatica.', 'fi-tek fi-valmet ours']
    ] },
    { k: 'publicw', v: 'mid', t: [
      ['The state posts hundreds of jobs and internships on Valtiolle.fi, and 9% of Aalto’s 2024 business graduates went into the public sector, but the programmes read are at banks and industrial groups.',
        'Lo Stato pubblica centinaia di posti e tirocini su Valtiolle.fi, e il 9% dei laureati in economia di Aalto del 2024 è andato nel settore pubblico, ma i programmi letti sono in banche e gruppi industriali.', 'fi-valtiolle fi-aaltobiz ours']
    ] },
    { k: 'sponsorr', v: 'some', t: [
      ['An employed-person permit needs a gross salary of at least €1,600 a month in 2026 and may be subject to a labour market test; a specialist permit needs at least €3,937 and, as a rule, a higher education degree. Wärtsilä offers no relocation or immigration support. See Visas for the rules.',
        'Un permesso per lavoratore dipendente richiede una retribuzione lorda di almeno 1.600 € al mese nel 2026 e può essere soggetto a un test del mercato del lavoro; un permesso per specialista richiede almeno 3.937 € e, di regola, un titolo di istruzione superiore. Wärtsilä non offre supporto per trasferimento o immigrazione. Per le regole vedi Visti.', 'fi-migri fi-migri-spec fi-wartsila']
    ] },
    { k: 'photo', v: 'optional', t: [
      ['Including a photo is optional; check the ad, because some employers run anonymous recruitment and want no picture.',
        'Includere una foto è facoltativo; controlla l’annuncio, perché alcuni datori di lavoro fanno selezioni anonime e non vogliono la foto.', 'fi-infofinland']
    ] },
    { k: 'cv', v: 'two', t: [
      ['A Finnish CV is usually one to two pages, tailored for each application, in reverse chronological order; attach it as a PDF.',
        'Un CV finlandese è di solito di una o due pagine, adattato a ogni candidatura, in ordine cronologico inverso; allegalo in PDF.', 'fi-infofinland fi-tm-tips']
    ] },
    { k: 'letter', v: 'expected', t: [
      ['An application letter of about one page accompanies the CV; it should look to the future and explain how you meet the selection criteria.',
        'Una lettera di candidatura di circa una pagina accompagna il CV; deve guardare al futuro e spiegare come soddisfi i criteri di selezione.', 'fi-infofinland fi-tm-tips']
    ] },
    { k: 'refs', v: 'later', t: [
      ['List people who have agreed to recommend you; the interviewer cannot contact them without your consent, and Job Market Finland recommends a reference list in the CV.',
        'Indica persone che hanno accettato di raccomandarti; l’intervistatore non può contattarle senza il tuo consenso, e Job Market Finland raccomanda un elenco di referenze nel CV.', 'fi-infofinland fi-tm-tips']
    ] },
    { k: 'docs', v: 'copies', t: [
      ['For the interview bring your application letter, CV, certificates of employment, diplomas and any portfolio; no source read asks for certified copies.',
        'Per il colloquio porta la lettera di candidatura, il CV, i certificati di lavoro, i diplomi ed eventuali portfolio; nessuna fonte letta chiede copie certificate.', 'fi-infofinland ours']
    ] },
    { k: 'salary', v: 'later', t: [
      ['Salary is covered at the end of the interview; “How much salary do you want?” is a commonly asked question, so prepare an answer that is realistic, and employers cannot pay less than the applicable collective agreement.',
        'Lo stipendio si affronta alla fine del colloquio; “Quanto stipendio vuoi?” è una domanda comune, quindi prepara una risposta realistica, e i datori di lavoro non possono pagare meno di quanto prevede il contratto collettivo applicabile.', 'fi-tm-tips fi-infofinland']
    ] },
    { k: 'check', v: 'some', t: [
      ['Employers may use aptitude tests, personality assessments or psychological evaluations and must use reliable methods and qualified testers; you are entitled to a copy of the test report or oral feedback.',
        'I datori di lavoro possono usare test attitudinali, valutazioni della personalità o valutazioni psicologiche e devono usare metodi affidabili e valutatori qualificati; hai diritto a una copia del rapporto del test o a un feedback orale.', 'fi-tm-tips']
    ] },
    { k: 'contact', v: 'mixed', t: [
      ['Open applications through job portals work for summer jobs; contacts made there carry the rest, and up to 75% of jobs are said not to be advertised.',
        'Le candidature aperte tramite i portali funzionano per i lavori estivi; i contatti fatti lì portano il resto, e si dice che fino al 75% dei lavori non sia pubblicato.', 'fi-tek fi-tm-tips5']
    ] },
    { k: 'abroad', v: 'workable', t: [
      ['Nordea and Wärtsilä select through online applications and assessments, and Wärtsilä says most positions need neither Finnish nor Swedish; recognition and permits are the practical hurdles.',
        'Nordea e Wärtsilä selezionano con candidature e test online, e Wärtsilä afferma che la maggior parte dei posti non richiede né finlandese né svedese; riconoscimento dei titoli e permessi sono gli ostacoli pratici.', 'fi-nordea-p fi-wartsila fi-edufi']
    ] },
    { k: 'language', v: 'mostly', t: [
      ['Finnish (or Swedish) for most roles outside tech and international firms; Finnish or Swedish remain the main working languages and many employers require at least basic Finnish or Swedish, while Wärtsilä’s official working language is English.',
        'Il finlandese (o lo svedese) per la maggior parte dei ruoli fuori dal tech e dalle aziende internazionali; finlandese o svedese restano le principali lingue di lavoro e molti datori di lavoro richiedono almeno un finlandese o uno svedese di base, mentre la lingua di lavoro ufficiale di Wärtsilä è l’inglese.', 'fi-tm-tips5 fi-wartsila']
    ] }
  ],

  rows: {
    process: [
      ['Nordea’s programme has an application, an online assessment test before the interviews, then interviews in March and April; candidates invited to the first interview receive feedback on their application.',
        'Il programma di Nordea prevede una candidatura, un test di valutazione online prima dei colloqui, poi colloqui a marzo e aprile; i candidati invitati al primo colloquio ricevono un feedback sulla candidatura.', 'fi-nordea-p'],
      ['Interviews assess fit; salary, working time and start date come at the end. Employers may add aptitude or personality tests, a work-like demo, group work or a short presentation.',
        'I colloqui valutano l’adattamento; stipendio, orario e data di inizio vengono alla fine. I datori di lavoro possono aggiungere test attitudinali o di personalità, una prova simile al lavoro, un lavoro di gruppo o una breve presentazione.', 'fi-tm-tips'],
      ['Arrive on time and bring your documents; employers may not ask about your family, religion or political activity.',
        'Arriva puntuale e porta i tuoi documenti; i datori di lavoro non possono chiedere della tua famiglia, religione o attività politica.', 'fi-infofinland'],
      ['Some employers accept applications only through their online system, so complete every field; Wärtsilä’s summer applications go through Recright and ones sent through its careers page “Apply Now” button are not taken into account.',
        'Alcuni datori di lavoro accettano candidature solo tramite il proprio sistema online, quindi compila ogni campo; le candidature estive di Wärtsilä passano da Recright e quelle inviate con il pulsante “Apply Now” della sua pagina carriere non vengono considerate.', 'fi-infofinland fi-wartsila']
    ],
    offer: [
      ['The maximum trial period is six months; either side may end the contract during it, but not on discriminatory grounds or grounds that defeat the purpose of the trial period.',
        'Il periodo di prova massimo è di sei mesi; ciascuna parte può terminare il contratto durante di esso, ma non per motivi discriminatori o che vanifichino lo scopo del periodo di prova.', 'fi-trial'],
      ['Statutory notice when the employer dismisses is 14 days under a year of service, one month at one to four years, two months at four to eight, four months at eight to twelve and six months at twelve or more; an employee resigns with 14 days up to five years and one month after. Collective agreements may set different periods.',
        'Il preavviso di legge in caso di licenziamento da parte del datore di lavoro è di 14 giorni sotto un anno di servizio, un mese da uno a quattro anni, due mesi da quattro a otto, quattro mesi da otto a dodici e sei mesi da dodici in su; il dipendente si dimette con 14 giorni fino a cinque anni e un mese dopo. I contratti collettivi possono fissare periodi diversi.', 'fi-notice'],
      ['Pay is set by sector collective agreements, and employers cannot pay less than the applicable one. Nordea’s graduates are paid in full-time positions under the terms of the country where they are hired.',
        'Le retribuzioni sono fissate dai contratti collettivi di settore, e i datori di lavoro non possono pagare meno di quello applicabile. I laureati di Nordea sono pagati in posizioni a tempo pieno secondo le condizioni del paese in cui sono assunti.', 'fi-infofinland fi-nordea-p']
    ],
    sponsor: [
      ['The employed-person residence permit needs a gross salary of at least €1,600 a month in 2026, with up to 50% of it as fringe benefits, and may be subject to labour market testing, where the employer must establish whether labour is available in Finland or the EU/EEA.',
        'Il permesso di soggiorno per lavoratore dipendente richiede una retribuzione lorda di almeno 1.600 € al mese nel 2026, con fino al 50% in benefit accessori, e può essere soggetto a un test del mercato del lavoro, in cui il datore di lavoro deve stabilire se la manodopera è disponibile in Finlandia o nell’UE/SEE.', 'fi-migri'],
      ['The specialist permit needs a gross salary of at least €3,937 a month in 2026, without fringe benefits, and as a rule a higher education degree; ask the employer early which permit it would use.',
        'Il permesso per specialista richiede una retribuzione lorda di almeno 3.937 € al mese nel 2026, senza benefit accessori, e di regola un titolo di istruzione superiore; chiedi presto al datore di lavoro quale permesso userebbe.', 'fi-migri-spec ours'],
      ['Wärtsilä says English is its official working language and most positions require neither Finnish nor Swedish, but it offers no relocation cost or immigration support for the summer programme.',
        'Wärtsilä afferma che l’inglese è la sua lingua di lavoro ufficiale e che la maggior parte dei posti non richiede né finlandese né svedese, ma non offre rimborso di trasferimento né supporto per l’immigrazione per il programma estivo.', 'fi-wartsila']
    ],
    where: [
      ['Posted vacancies: Työmarkkinatori (Job Market Finland), which also holds applicant profiles and registers job seekers, and Valtiolle.fi for the state, with a “Jobs in English” link; Kesätyö.fi for summer jobs.',
        'Annunci: Työmarkkinatori (Job Market Finland), che contiene anche i profili dei candidati e registra chi cerca lavoro, e Valtiolle.fi per lo Stato, con un link “Jobs in English”; Kesätyö.fi per i lavori estivi.', 'fi-tm fi-valtiolle fi-kesatyo'],
      ['Graduate programmes and fairs: Nordea’s graduate programme page, Wärtsilä’s Summer Power, KONE’s student page and Aalto’s Talent Expo, with registration through JobTeaser.',
        'Programmi per laureati e fiere: la pagina del programma per laureati di Nordea, il Summer Power di Wärtsilä, la pagina studenti di KONE e il Talent Expo di Aalto, con iscrizione tramite JobTeaser.', 'fi-nordea-p fi-wartsila fi-kone-s fi-expo'],
      ['Help: TE services, municipal employment services and International Houses offer free guidance; Job Market Finland names LinkedIn for reaching employers.',
        'Aiuto: i servizi TE, i servizi comunali per l’occupazione e le International House offrono orientamento gratuito; Job Market Finland indica LinkedIn per raggiungere i datori di lavoro.', 'fi-tm-tips5']
    ],
    mistakes: [
      ['Missing the winter window: summer-job and programme applications close between mid-February and early spring (Wärtsilä on 15 February, Nordea on 28 February).',
        'Perdere la finestra invernale: le candidature per i lavori estivi e i programmi si chiudono tra metà febbraio e inizio primavera (Wärtsilä il 15 febbraio, Nordea il 28 febbraio).', 'fi-wartsila fi-nordea-p'],
      ['Applying in the wrong language or by the wrong channel: write in the language of the ad, and use the online system a firm demands rather than email.',
        'Candidarsi nella lingua sbagliata o dal canale sbagliato: scrivi nella lingua dell’annuncio e usa il sistema online richiesto dall’azienda anziché l’email.', 'fi-infofinland'],
      ['Leaving a foreign degree unexplained: describe its content briefly, because the title alone may not convey your training.',
        'Lasciare senza spiegazione un titolo estero: descrivine brevemente il contenuto, perché il solo nome potrebbe non comunicare la tua formazione.', 'fi-tm-tips5'],
      ['Writing a long letter or a vague salary figure: keep the letter to a page and the CV to two, and name a realistic salary.',
        'Scrivere una lettera lunga o una cifra di stipendio vaga: tieni la lettera a una pagina e il CV a due, e indica uno stipendio realistico.', 'fi-tm-tips fi-infofinland'],
      ['Relying only on posted jobs: up to 75% of jobs are said not to be advertised, so send open applications and use LinkedIn.',
        'Affidarsi solo agli annunci: si dice che fino al 75% dei lavori non sia pubblicato, quindi invia candidature aperte e usa LinkedIn.', 'fi-tm-tips5']
    ]
  },

  lang: [
    { f: 'finance', v: 'english', lv: 'C1', t: [
      ['Nordea’s graduate programme requires excellent English and names no Finnish requirement; the online assessment and interviews are the evidence, with no certificate named.',
        'Il programma per laureati di Nordea richiede un ottimo inglese e non indica alcun requisito di finlandese; la prova sono il test online e i colloqui, senza un certificato indicato.', 'fi-nordea-p']
    ] },
    { f: 'business', v: 'bilingual', lv: 'B2', t: [
      ['Wärtsilä’s official working language is English and most positions require neither Finnish nor Swedish, though some roles have wider language requirements; Finnish or Swedish remain the main working languages in the labour market.',
        'La lingua di lavoro ufficiale di Wärtsilä è l’inglese e la maggior parte dei posti non richiede né finlandese né svedese, anche se alcuni ruoli hanno requisiti linguistici più ampi; finlandese o svedese restano le principali lingue di lavoro nel mercato del lavoro.', 'fi-wartsila fi-tm-tips5']
    ] },
    { f: 'tech', v: 'bilingual', lv: 'B2', t: [
      ['International graduates find it particularly hard to enter tech, and around nine in ten Finns can communicate in English; many employers still require at least basic Finnish or Swedish.',
        'I laureati internazionali faticano particolarmente a entrare nel tech, e circa nove finlandesi su dieci sanno comunicare in inglese; molti datori di lavoro richiedono comunque almeno un finlandese o uno svedese di base.', 'fi-tekres fi-tm-tips5']
    ] },
    { f: 'public', v: 'local', lv: 'C1', t: [
      ['Valtiolle.fi has a “Jobs in English” link but state work runs in Finnish and Swedish, the two national languages; expect to need one of them.',
        'Valtiolle.fi ha un link “Jobs in English” ma il lavoro dello Stato si svolge in finlandese e svedese, le due lingue nazionali; aspettati di averne bisogno di una.', 'fi-valtiolle fi-tm-tips5 ours']
    ] }
  ],

  programmes: [
    { n: 'Nordea Graduate Programme', o: 'Nordea', f: 'finance', in: null, w: [2, 2], lang: 'EN', intl: 'unknown', ids: 'fi-nordea-p' },
    { n: 'Summer Power', o: 'Wärtsilä', f: 'business', in: 600, w: [12, 2], lang: 'EN', intl: 'unknown', ids: 'fi-wartsila' },
    { n: 'International Trainee Program', o: 'KONE', f: 'business', in: null, w: null, lang: 'n/s', intl: 'unknown', ids: 'fi-kone-s' },
    { n: 'Summer trainees', o: 'Valmet', f: 'business', in: 400, w: null, lang: 'n/s', intl: 'unknown', ids: 'fi-valmet' }
  ],

  outcomes: [
    ['90% of Aalto’s 2024 business graduates were employed or entrepreneurs a year out and 92% of those employed worked in Finland; for all foreign citizens with a Finnish degree, 53% were employed in Finland three years after (2023), against 87–88% of Finns.',
      'Il 90% dei laureati in economia di Aalto del 2024 era occupato o imprenditore a un anno dalla laurea e il 92% degli occupati lavorava in Finlandia; per tutti i cittadini stranieri con un titolo finlandese, il 53% era occupato in Finlandia tre anni dopo (2023), contro l’87-88% dei finlandesi.', 'fi-aaltobiz fi-oph-s'],
    ['No source read gives a return-offer or conversion rate for Finnish summer jobs; the only figure is that 30% of engineering graduates finished with more than two years of work in their field.',
      'Nessuna fonte letta indica un tasso di conferma o conversione per i lavori estivi finlandesi; l’unico dato è che il 30% dei laureati in ingegneria ha finito con più di due anni di lavoro nel proprio settore.', 'fi-tek ours']
  ],

  sources: {
    'fi-iberia': ['employer-stated', 'Admetia research library: places/iberia-and-nordics.md §6 (Nordea careers page, 2026)', 'research/places/iberia-and-nordics.md', '2026-10-02'],
    'fi-oph-s': ['data', 'Admetia research library: places/iberia-and-nordics.md (Finnish National Agency for Education statistics on foreign graduates, 2023)', 'research/places/iberia-and-nordics.md', '2026-10-02'],
    'fi-tek': ['practitioner consensus', 'TEK: five reasons why a summer job is your gateway to Finnish working life', 'https://www.tek.fi/en/news-blogs/five-reasons-why-a-summer-job-is-your-gateway-to-finnish-working-life', '2026-10-07'],
    'fi-valmet': ['employer-stated', 'Valmet: Valmet hires nearly 400 young people as summer trainees in Finland, 2019', 'https://www.valmet.com/news/other-news/2019/valmet-hires-nearly-400-young-people-as-summer-trainees-in-finland/', '2026-10-07'],
    'fi-kesatyo': ['employer-stated', 'Alma Media: new Kesätyö.fi service launches with the first 10,000 summer jobs, January 2026', 'https://news.cision.com/alma-media/r/new-kesatyo-fi-service-launches---first-10-000-summer-jobs-for-young-people,c4292756', '2026-10-08'],
    'fi-aalto': ['employer-stated', 'Aalto University: business talents wanted (ARENA career fair, 2014)', 'https://www.aalto.fi/en/news/business-talents-wanted', '2026-10-08'],
    'fi-expo': ['employer-stated', 'Aalto University: Talent Expo 2024 (14 November 2024, 89 exhibitors)', 'https://www.aalto.fi/en/events/talent-expo-2024', '2026-10-08'],
    'fi-ek': ['employer-stated', 'Confederation of Finnish Industries (EK): let’s recruit foreign students', 'https://ek.fi/en/current/news/international-business-leaders-message-to-finnish-companies-lets-recruit-foreign-students/', '2026-10-07'],
    'fi-aaltobiz': ['data', 'Aalto University: School of Business graduates in working life (placement survey)', 'https://aalto.fi/en/school-of-business/school-of-business-graduates-in-working-life', '2026-10-07'],
    'fi-tekres': ['data', 'TEK: research on graduates of technology (graduate survey)', 'https://www.tek.fi/en/term/keyword/TEK%27s%20research', '2026-10-07'],
    'fi-nordea-p': ['employer-stated', 'Nordea: Graduate Programme (2026 round: 9–28 February, online assessment, interviews March–April)', 'https://www.nordea.com/en/careers/nordea-graduate-programme', '2026-10-08'],
    'fi-wartsila': ['employer-stated', 'Wärtsilä: Summer Power (around 600 trainees; applications 29 Dec 2025 to 15 Feb 2026)', 'https://www.wartsila.com/summerpower', '2026-10-08'],
    'fi-kone-s': ['employer-stated', 'KONE: students and graduates (International Trainee Program)', 'https://www.kone.com/en/careers/students-and-graduates/', '2026-10-08'],
    'fi-tm': ['data', 'Työmarkkinatori (Job Market Finland): the public job service (KEHA Centre)', 'https://tyomarkkinatori.fi/en', '2026-10-08'],
    'fi-tm-tips': ['data', 'Job Market Finland: tips for finding a job (CV, letter, interview, tests, references)', 'https://tyomarkkinatori.fi/en/personal-customers/information-about-working-life/search-for-work/tips-for-finding-a-job', '2026-10-08'],
    'fi-tm-tips5': ['data', 'Job Market Finland: job search in Finland, five essential tips for an international jobseeker', 'https://tyomarkkinatori.fi/en/news/tyonhaku-suomessa-viisi-vinkkia-kansainvaliselle-tyonhakijalle', '2026-10-08'],
    'fi-infofinland': ['data', 'InfoFinland: job application and CV', 'https://infofinland.fi/en/work-and-enterprise/find-a-job-in-finland/job-application-and-cv', '2026-10-08'],
    'fi-valtiolle': ['data', 'Valtiolle.fi: state government job search (jobs and internships)', 'https://www.valtiolle.fi/en-US/', '2026-10-08'],
    'fi-edufi': ['data', 'Finnish National Agency for Education (EDUFI): recognition of foreign qualifications', 'https://www.oph.fi/en/services/recognition-and-international-comparability-qualifications/recognition-foreign', '2026-10-08'],
    'fi-trial': ['data', 'Occupational Safety and Health Administration (Työsuojelu): trial period', 'https://tyosuojelu.fi/en/employment-relationship/employment-contract/trial-period', '2026-10-08'],
    'fi-notice': ['data', 'Occupational Safety and Health Administration (Työsuojelu): periods of notice', 'https://tyosuojelu.fi/en/employment-relationship/termination/terminating-the-employment-contract/periods-of-notice', '2026-10-08'],
    'fi-migri': ['data', 'Finnish Immigration Service: residence permit for an employed person', 'https://migri.fi/en/residence-permit-for-an-employed-person', '2026-10-08'],
    'fi-migri-spec': ['data', 'Finnish Immigration Service: residence permit for a specialist', 'https://migri.fi/en/specialist', '2026-10-08'],
    'fi-eurostat-g': ['data', 'Eurostat: employment rates of young people not in education and training (edat_lfse_24) and unemployment by age (une_rt_a), 2025', 'https://ec.europa.eu/eurostat/databrowser/view/edat_lfse_24/default/table?lang=en', '2026-10-03']
  }
});
