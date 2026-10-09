/* How hiring works: Czech Republic. Extended on 8 Oct 2026 to the full schema: pages opened that
 * day (EURES, Komerční banka trainee and careers pages, Red Hat Brno and JetBrains internship pages,
 * Škoda Auto talent-programme article, VŠE ŠANCE, CTU Career Days, Charles University career centre,
 * Jobs.cz and KB CV advice, Chamber of Commerce bonus survey, Ministry of the Interior civil-service
 * page) plus earlier reads (Expats.cz, ABSL via Expats.cz, library visa guide). No statistic ranks the
 * routes; they are ranked by the programmes and portals found. Stage counts, time to offer and
 * graduate-scheme calendars of the Big Four and the other banks could not be read (their pages
 * were not served). */
ATLAS.addEntry({
  id: 'CZ',
  checked: '2026-10-08',
  review: '2027-04-08',

  lead: [
    ['In Prague and Brno many graduates start in the service and technology centres of multinationals, which hire in English and pay a premium for German and other languages. Czech firms and the public sector hire through internships and contacts, in Czech.',
      'A Praga e Brno molti laureati iniziano nei centri di servizi e tecnologici delle multinazionali, che assumono in inglese e pagano un sovrappiù per il tedesco e altre lingue. Le aziende ceche e il settore pubblico assumono tramite tirocini e contatti, in ceco.', 'cz-cee ours']
  ],

  ways: [
    { name: ['Service and technology centres', 'Centri di servizi e tecnologici'], r: 'direct', p: 'first exp', basis: 'consensus', t: [
      ['No survey ranks the routes in the Czech Republic; this is first because of the scale of the sector. ABSL counts over 400 business-service companies employing nearly 200,000 people, about 43% of them from outside the country, with English the common language of business.',
        'Nessuna indagine classifica le vie d’accesso nella Repubblica Ceca; questa è prima per le dimensioni del settore. L’ABSL conta oltre 400 aziende di servizi alle imprese con quasi 200.000 addetti, circa il 43% dei quali dall’estero, con l’inglese come lingua comune degli affari.', 'cz-absl ours'],
      ['Junior specialists in these centres earned a mean of about €2,133 a month gross in 2024, the highest of the region’s surveyed countries.',
        'Gli specialisti junior in questi centri guadagnavano in media circa 2.133 € lordi al mese nel 2024, il valore più alto tra i paesi della regione rilevati.', 'cz-cee']
    ] },
    { name: ['Student internships in tech firms and banks', 'Tirocini studenteschi nelle aziende tecnologiche e nelle banche'], r: 'intern', p: 'first intern', basis: 'consensus', t: [
      ['Red Hat’s Brno internships are paid, run for 12 months and can be extended to 24, at about 20 hours a week; the listing read asks for enrolment at a Czech university and an expected start of 1 July. This is also a working-student route, since it runs alongside study.',
        'I tirocini di Red Hat a Brno sono retribuiti, durano 12 mesi e possono essere prolungati a 24, per circa 20 ore a settimana; l’annuncio letto chiede l’iscrizione a un’università ceca e prevede un inizio il 1° luglio. È anche una via da studente-lavoratore, perché si svolge insieme allo studio.', 'cz-rh'],
      ['JetBrains pays all its internships, which last 3–4 months full-time or 5–6 months part-time, opens applications twice a year and takes students and recent graduates, mainly from the EU, the UK, Serbia and Armenia.',
        'JetBrains retribuisce tutti i suoi tirocini, che durano 3–4 mesi a tempo pieno o 5–6 mesi a tempo parziale, apre le candidature due volte all’anno e accoglie studenti e neolaureati, soprattutto da UE, Regno Unito, Serbia e Armenia.', 'cz-jb'],
      ['Komerční banka says one can be mentored there through an internship or a part-time job while studying.',
        'Komerční banka dice che si può essere seguiti da un tutor in banca con un tirocinio o un lavoro part-time durante gli studi.', 'cz-kb-kariera']
    ] },
    { name: ['Trainee programmes', 'Programmi trainee'], r: 'scheme', p: 'first', basis: 'consensus', t: [
      ['Komerční banka’s Trainee program is for university students in the 4th or 5th year, recruits every spring, and lets participants start at the bank straight afterwards; the 2026 intake was full.',
        'Il Trainee program di Komerční banka è per studenti universitari del 4° o 5° anno, recluta ogni primavera e permette di entrare in banca subito dopo; la selezione 2026 era al completo.', 'cz-kb-trainee'],
      ['Škoda Auto runs a one-year Trainee Program for university graduates with Business, Tech and IT tracks that rotate through departments of the carmaker.',
        'Škoda Auto ha un Trainee Program di un anno per laureati con percorsi Business, Tech e IT che ruotano tra i reparti della casa automobilistica.', 'cz-skoda']
    ] },
    { name: ['University job fairs and career days', 'Fiere del lavoro e giornate della carriera universitarie'], r: 'campus', p: 'first intern', basis: 'anecdotal', t: [
      ['VŠE’s ŠANCE fair is held twice a year, usually in April and October, with more than 100 companies including banks, consultancies and IT firms; the next one is on 20–22 October 2026.',
        'La fiera ŠANCE della VŠE si tiene due volte all’anno, di solito in aprile e ottobre, con più di 100 aziende tra cui banche, società di consulenza e aziende IT; la prossima è il 20–22 ottobre 2026.', 'cz-sance'],
      ['The Career Days of CTU’s electrical and mechanical engineering faculties on 31 March and 1 April 2026 brought nearly 90 employers, among them Škoda Auto, ČEZ, Siemens and Valeo, to about 6,000 students.',
        'Le Giornate della Carriera delle facoltà di ingegneria elettrica e meccanica del CTU, il 31 marzo e il 1° aprile 2026, hanno portato quasi 90 datori di lavoro, tra cui Škoda Auto, ČEZ, Siemens e Valeo, davanti a circa 6.000 studenti.', 'cz-cvut']
    ] },
    { name: ['Direct application through job portals', 'Candidatura diretta tramite i portali'], r: 'direct', p: 'first exp', basis: 'consensus', t: [
      ['EURES names jobs.cz and profesia.cz among the private portals, alongside the Labour Office database, and says the overwhelming majority of employers require Czech.',
        'EURES indica jobs.cz e profesia.cz tra i portali privati, accanto alla banca dati dell’Ufficio del lavoro, e dice che la stragrande maggioranza dei datori di lavoro richiede il ceco.', 'cz-eures']
    ] },
    { name: ['Recruitment agencies', 'Agenzie di reclutamento'], r: 'agency', p: 'exp', basis: 'anecdotal', t: [
      ['EURES says agencies must hold a licence listed on the Ministry of Labour and Social Affairs portal and may not charge job-seekers; Randstad is the general partner of Charles University’s Career Day.',
        'EURES dice che le agenzie devono avere una licenza elencata sul portale del Ministero del lavoro e degli affari sociali e non possono far pagare chi cerca lavoro; Randstad è il partner generale del Career Day della Charles University.', 'cz-eures cz-cuni']
    ] },
    { name: ['Public-sector selection procedures', 'Procedure di selezione nel settore pubblico'], r: 'public', p: 'first exp', basis: 'consensus', t: [
      ['Civil-service posts are filled through a selection procedure (výběrové řízení) that must be published in the civil-service information system ISoSS (portal.isoss.cz).',
        'I posti nella funzione pubblica si coprono con una procedura di selezione (výběrové řízení) che deve essere pubblicata nel sistema informativo della funzione pubblica ISoSS (portal.isoss.cz).', 'cz-isoss']
    ] }
  ],

  cycle: [
    ['Komerční banka launches its trainee recruitment every spring; the 2026 programme was already full and the page pointed to May 2026 for the next round.',
      'Komerční banka avvia il reclutamento dei trainee ogni primavera; il programma 2026 era già al completo e la pagina indicava maggio 2026 per il turno successivo.', 'cz-kb-trainee'],
    ['Internships follow the academic year: Red Hat’s Brno listings give expected starts of 1 February or 1 July, and JetBrains opens applications twice a year.',
      'I tirocini seguono l’anno accademico: gli annunci di Red Hat a Brno indicano inizi previsti il 1° febbraio o il 1° luglio, e JetBrains apre le candidature due volte all’anno.', 'cz-rh cz-jb'],
    ['Fairs fall in spring and autumn: Charles University’s Career Day and CTU’s Career Days ran in March and April 2026, and VŠE’s ŠANCE is held in April and October.',
      'Le fiere cadono in primavera e in autunno: il Career Day della Charles University e le Giornate della Carriera del CTU si sono tenuti a marzo e aprile 2026, e la ŠANCE della VŠE si tiene in aprile e ottobre.', 'cz-cuni cz-cvut cz-sance']
  ],

  schools: [
    ['Czech Technical University (CTU) is where the engineering employers meet students: its electrical and mechanical faculties’ Career Days drew nearly 90 firms, including Škoda Auto, ČEZ, Siemens, Valeo and Rohde & Schwarz.',
      'L’Università tecnica ceca (CTU) è il luogo in cui i datori di lavoro dell’ingegneria incontrano gli studenti: le Giornate della Carriera delle sue facoltà di ingegneria elettrica e meccanica hanno richiamato quasi 90 aziende, tra cui Škoda Auto, ČEZ, Siemens, Valeo e Rohde & Schwarz.', 'cz-cvut'],
    ['The Prague University of Economics and Business (VŠE) runs ŠANCE, where more than 100 employers including banks, consultancies and IT firms meet its students and graduates.',
      'L’Università di economia e business di Praga (VŠE) organizza la ŠANCE, dove più di 100 datori di lavoro tra cui banche, società di consulenza e aziende IT incontrano i suoi studenti e laureati.', 'cz-sance'],
    ['Charles University’s Career Centre offers counselling, job and internship listings and an annual Career Day; we found no ranking of schools by employers.',
      'Il Career Centre della Charles University offre orientamento, annunci di lavoro e tirocinio e un Career Day annuale; non abbiamo trovato alcuna classifica delle scuole da parte dei datori di lavoro.', 'cz-cuni']
  ],

  events: [
    ['Job Fair ŠANCE at the Prague University of Economics and Business, 20–22 October 2026 (10:00 to 16:30, Tuesday to Thursday).',
      'Fiera del lavoro ŠANCE all’Università di economia e business di Praga, 20–22 ottobre 2026 (dalle 10:00 alle 16:30, da martedì a giovedì).', 'cz-sance'],
    ['Career Day at Charles University: in person in Prague 1 and online on 19 March 2026, free for its students and graduates.',
      'Career Day alla Charles University: in presenza a Praga 1 e online il 19 marzo 2026, gratuito per i suoi studenti e laureati.', 'cz-cuni'],
    ['Career Days of the Faculties of Electrical and Mechanical Engineering at CTU: 31 March and 1 April 2026, 10:00 to 16:00.',
      'Giornate della Carriera delle facoltà di ingegneria elettrica e meccanica del CTU: 31 marzo e 1° aprile 2026, dalle 10:00 alle 16:00.', 'cz-cvut']
  ],

  fields: [
    { f: 'business', t: [
      ['Prague and Brno’s service centres hire business graduates into finance and accounting operations, with German-language finance teams paying a premium; the Big Four and Czech banks recruit students through internships.',
        'I centri di servizi di Praga e Brno assumono laureati in economia nelle operazioni di finanza e contabilità, con un sovrappiù per i team finanziari in tedesco; le Big Four e le banche ceche reclutano studenti tramite tirocini.', 'cz-cee ours'],
      ['Škoda Auto’s Business Trainee track is for graduates of economics or business-focused universities.',
        'Il percorso Business Trainee di Škoda Auto è per laureati di università economiche o a indirizzo business.', 'cz-skoda']
    ] },
    { f: 'finance', t: [
      ['Komerční banka’s Trainee program takes students in the 4th or 5th year and recruits every spring; the bank lists internships and part-time roles for students and graduates.',
        'Il Trainee program di Komerční banka accoglie studenti del 4° o 5° anno e recluta ogni primavera; la banca elenca tirocini e posti part-time per studenti e laureati.', 'cz-kb-trainee cz-kb-kariera']
    ] },
    { f: 'tech', t: [
      ['Prague is the main development and research centre of Gen Digital, the company formed from Avast and Norton, and Czech Technical University supplies most of its engineers; the merger also brought lay-offs in overlapping roles.',
        'Praga è il principale centro di sviluppo e ricerca di Gen Digital, l’azienda nata da Avast e Norton, e l’Università tecnica ceca fornisce la maggior parte dei suoi ingegneri; la fusione ha portato anche licenziamenti nei ruoli sovrapposti.', 'cz-gen ours'],
      ['Red Hat’s Brno office takes paid student interns in software work (the listing read asks for Python or Go) for 12 to 24 months; JetBrains hires paid interns for 3–6 months.',
        'L’ufficio Red Hat di Brno accoglie tirocinanti retribuiti in lavori software (l’annuncio letto chiede Python o Go) per 12–24 mesi; JetBrains assume tirocinanti retribuiti per 3–6 mesi.', 'cz-rh cz-jb']
    ] },
    { f: 'public', t: [
      ['Civil-service posts are announced as selection procedures in the ISoSS information system; the Ministry of Interior page read dates from 2015, so check current rules on the portal.',
        'I posti della funzione pubblica sono annunciati come procedure di selezione nel sistema informativo ISoSS; la pagina del Ministero dell’Interno letta risale al 2015, quindi bisogna controllare le regole attuali sul portale.', 'cz-isoss']
    ] }
  ],

  customs: [
    { k: 'season', v: 'cyclical', t: [
      ['Trainee recruitment is in spring at Komerční banka, internships start in February or July, and fairs fall in spring and autumn; there is no single national season.',
        'Il reclutamento dei trainee è in primavera a Komerční banka, i tirocini iniziano a febbraio o a luglio e le fiere cadono in primavera e in autunno; non c’è un’unica stagione nazionale.', 'cz-kb-trainee cz-rh cz-sance']
    ] },
    { k: 'masters', v: 'helpful', t: [
      ['Komerční banka’s trainee programme is aimed at students in the 4th or 5th year (the master’s years), and Red Hat takes bachelor’s students from the 3rd year. This is our reading of a mixed picture.',
        'Il programma trainee di Komerční banka è rivolto a studenti del 4° o 5° anno (gli anni della magistrale), e Red Hat accoglie studenti triennali dal 3° anno. È una nostra lettura di un quadro eterogeneo.', 'cz-kb-trainee cz-rh ours']
    ] },
    { k: 'degrees', v: 'regulated', t: [
      ['EURES says only regulated professions need official recognition (nostrification) of a foreign qualification; the recognition itself is done by a Czech public university, or by the Ministry of Education when no comparable programme exists, and the pages read do not say employers in other fields ask for it.',
        'EURES dice che solo le professioni regolamentate richiedono il riconoscimento ufficiale (nostrifikace) di un titolo estero; il riconoscimento è svolto da un’università pubblica ceca, o dal Ministero dell’Istruzione quando non esiste un corso comparabile, e le pagine lette non dicono che i datori di lavoro di altri settori lo chiedano.', 'cz-eures ours']
    ] },
    { k: 'brand', v: 'some', t: [
      ['Škoda Auto splits its trainee tracks by type of university (economics for Business, technical for Tech), and the employers at CTU’s and VŠE’s fairs go to those schools; the tech firms read ask for skills and a GitHub link rather than a named school.',
        'Škoda Auto divide i percorsi trainee per tipo di università (economia per Business, tecnica per Tech), e i datori di lavoro alle fiere del CTU e della VŠE vanno in quelle scuole; le aziende tecnologiche lette chiedono competenze e un link a GitHub più che una scuola precisa.', 'cz-skoda cz-cvut cz-sance cz-rh']
    ] },
    { k: 'dual', v: 'some', t: [
      ['We found no formal dual-study degrees, but part-time student internships are routine: Red Hat’s run alongside study for up to 24 months, and Komerční banka offers part-time roles for students.',
        'Non abbiamo trovato lauree in studio duale formali, ma i tirocini studenteschi part-time sono normali: quelli di Red Hat si svolgono insieme allo studio fino a 24 mesi, e Komerční banka offre posti part-time per gli studenti.', 'cz-rh cz-kb-kariera']
    ] },
    { k: 'publicw', v: 'mid', t: [
      ['Civil-service posts are filled through selection procedures published in ISoSS; we did not find a figure for the public sector’s share of graduate hires, so this is our reading.',
        'I posti della funzione pubblica si coprono con procedure di selezione pubblicate in ISoSS; non abbiamo trovato una cifra sulla quota del settore pubblico nelle assunzioni di laureati, quindi è una nostra lettura.', 'cz-isoss ours']
    ] },
    { k: 'sponsorr', v: 'some', t: [
      ['A non-EU hire needs an Employee Card or an EU Blue Card; since 1 July 2024 the employer no longer runs a waiting-period vacancy test but must enter the post in the Labour Office’s central register. The large international centres and tech firms are the employers equipped to file it. See Visas for the rules.',
        'Per un’assunzione extra-UE servono una Employee Card o una Carta blu UE; dal 1° luglio 2024 il datore di lavoro non svolge più un test del posto vacante con periodo di attesa ma deve inserire il posto nel registro centrale dell’Ufficio del lavoro. I grandi centri internazionali e le aziende tecnologiche sono i datori attrezzati per presentare la pratica. Vedi Visti per le regole.', 'cz-visa ours']
    ] },
    { k: 'photo', v: 'common', t: [
      ['A photo is the norm on Czech CVs; choose it with care, and do not overstate language levels, which recruiters check.',
        'La foto è la norma nei CV cechi; sceglila con cura, e non gonfiare i livelli di lingua, che i selezionatori controllano.', 'cz-expats'],
      ['Komerční banka recommends a photo but says it is not required, in a plain setting and dressed as for an interview.',
        'Komerční banka consiglia una foto ma dice che non è obbligatoria, con sfondo semplice e vestiti come per un colloquio.', 'cz-kb-cv']
    ] },
    { k: 'cv', v: 'two', t: [
      ['Jobs.cz says a CV should fit on two A4 pages at most and that graduates with little experience can usually manage with one; Komerční banka calls one A4 the ideal. Send it as a PDF.',
        'Jobs.cz dice che un CV deve stare in due pagine A4 al massimo e che i laureati con poca esperienza di solito bastano con una; Komerční banka indica una pagina A4 come ideale. Va inviato in PDF.', 'cz-jobs-cv cz-kb-cv']
    ] },
    { k: 'letter', v: 'optional', t: [
      ['EURES says a cover letter should be brief and focused on the job, and that larger companies may use their own questionnaire instead; the programmes read do not ask for one.',
        'EURES dice che la lettera di presentazione deve essere breve e centrata sul lavoro, e che le grandi aziende possono usare un proprio questionario; i programmi letti non la richiedono.', 'cz-eures']
    ] },
    { k: 'refs', v: 'later', t: [
      ['EURES lists references among the parts of a CV, but none of the programme pages read asks for them with the application; they come up later. This is our reading.',
        'EURES elenca le referenze tra le parti di un CV, ma nessuna delle pagine dei programmi lette le chiede con la candidatura; emergono più avanti. È una nostra lettura.', 'cz-eures ours']
    ] },
    { k: 'docs', v: 'copies', t: [
      ['EURES advises bringing the CV and copies of certificates to the interview in a portfolio; certified copies are not mentioned.',
        'EURES consiglia di portare al colloquio il CV e le copie dei certificati in una cartella; le copie certificate non sono menzionate.', 'cz-eures']
    ] },
    { k: 'salary', v: 'later', t: [
      ['Komerční banka’s CV advice says not to state salary expectations on the CV and to discuss pay at the interview.',
        'Il consiglio di Komerční banka sul CV dice di non indicare le pretese salariali nel CV e di parlare della retribuzione al colloquio.', 'cz-kb-cv']
    ] },
    { k: 'check', v: 'some', t: [
      ['EURES says some employers use a psychological test; we found nothing on routine background or reference checks for graduates.',
        'EURES dice che alcuni datori di lavoro usano un test psicologico; non abbiamo trovato nulla sui controlli di routine su precedenti o referenze per i laureati.', 'cz-eures']
    ] },
    { k: 'contact', v: 'mixed', t: [
      ['Portals and programmes take open applications (Komerční banka also takes a CV when its programme is closed), while the surveys and pages read say nothing about the weight of introductions. This is our reading.',
        'I portali e i programmi accettano candidature aperte (Komerční banka riceve un CV anche quando il suo programma è chiuso), mentre le indagini e le pagine lette non dicono nulla sul peso delle presentazioni. È una nostra lettura.', 'cz-kb-trainee ours']
    ] },
    { k: 'abroad', v: 'hard', t: [
      ['Red Hat’s Brno internship asks for enrolment at a Czech university, Komerční banka’s programme is for students in their 4th or 5th year, and EURES says nearly all employers require Czech; the English-speaking centres are the workable exception. This is our reading.',
        'Il tirocinio Red Hat a Brno chiede l’iscrizione a un’università ceca, il programma di Komerční banka è per studenti del 4° o 5° anno, ed EURES dice che quasi tutti i datori di lavoro richiedono il ceco; i centri anglofoni sono l’eccezione praticabile. È una nostra lettura.', 'cz-rh cz-kb-trainee cz-eures ours']
    ] },
    { k: 'language', v: 'mostly', t: [
      ['English in multinationals’ centres; EURES says the overwhelming majority of employers require Czech.',
        'L’inglese nei centri delle multinazionali; EURES dice che la stragrande maggioranza dei datori di lavoro richiede il ceco.', 'cz-absl cz-eures']
    ] }
  ],

  rows: {
    process: [
      ['EURES says interviews are fairly formal, so dress appropriately, bring your CV and copies of certificates in a portfolio, and expect that some employers use a psychological test.',
        'EURES dice che i colloqui sono piuttosto formali, quindi bisogna vestirsi in modo adeguato, portare il CV e le copie dei certificati in una cartella e mettere in conto che alcuni datori di lavoro usano un test psicologico.', 'cz-eures'],
      ['Red Hat asks applicants to apply to no more than three internship roles and to include education, projects with a GitHub link and extracurricular activities in the CV; incomplete applications may be left out of screening.',
        'Red Hat chiede ai candidati di candidarsi al massimo a tre posizioni di tirocinio e di includere nel CV formazione, progetti con un link a GitHub e attività extracurricolari; le candidature incomplete possono essere escluse dalla selezione.', 'cz-rh'],
      ['We did not establish the number of stages, the time from application to offer, the interview language outside the multinationals or assessment-centre norms: the Big Four and the other banks’ graduate pages were not served.',
        'Non abbiamo stabilito il numero di fasi, i tempi tra candidatura e offerta, la lingua del colloquio fuori dalle multinazionali né le norme dei centri di valutazione: le pagine per neolaureati delle Big Four e delle altre banche non erano accessibili.', 'ours']
    ],
    offer: [
      ['The employment contract must be in writing and you must receive a copy before starting; bilingual contracts are common, but the Czech version prevails legally.',
        'Il contratto di lavoro deve essere scritto e bisogna riceverne una copia prima di iniziare; i contratti bilingui sono comuni, ma la versione ceca prevale sul piano legale.', 'cz-eures'],
      ['EURES gives probation as up to four months (eight for managers), usually three, and the standard notice period as two months, starting on the first day of the month after notice is delivered. Full-time is 40 hours a week.',
        'EURES indica la prova in massimo quattro mesi (otto per i dirigenti), di solito tre, e il preavviso standard in due mesi, che decorre dal primo giorno del mese successivo alla consegna della disdetta. Il tempo pieno è di 40 ore a settimana.', 'cz-eures'],
      ['A year-end bonus or thirteenth salary is not universal: a Chamber of Commerce survey found 4 in every 10 private-sector firms planned one for 2023, almost 70% of large firms against 43% of medium-sized ones, most often between CZK 22,000 and CZK 46,000.',
        'Una gratifica di fine anno o tredicesima non è universale: un’indagine della Camera di commercio ha rilevato che 4 aziende private su 10 ne prevedevano una per il 2023, quasi il 70% delle grandi contro il 43% delle medie, più spesso tra 22.000 e 46.000 CZK.', 'cz-bonus'],
      ['We did not establish whether graduates negotiate pay or how long employers give to decide.',
        'Non abbiamo stabilito se i neolaureati negoziano lo stipendio né quanto tempo i datori di lavoro concedono per decidere.', 'ours']
    ],
    sponsor: [
      ['For a non-EU hire the employer must enter the post in the Labour Office’s central register of vacancies; the 10–30 day waiting-period vacancy test was abolished on 1 July 2024, and the hire then goes on an Employee Card or, if paid at least CZK 73,823 gross a month, an EU Blue Card.',
        'Per un’assunzione extra-UE il datore di lavoro deve inserire il posto nel registro centrale dei posti vacanti dell’Ufficio del lavoro; il test del posto vacante con attesa di 10–30 giorni è stato abolito il 1° luglio 2024, e l’assunzione avviene poi con una Employee Card o, se la retribuzione è di almeno 73.823 CZK lordi al mese, con una Carta blu UE.', 'cz-visa'],
      ['Graduates of Czech universities have free access to the labour market and a nine-month permit to look for work, so an employer can hire them without any filing of its own.',
        'I laureati delle università ceche hanno libero accesso al mercato del lavoro e un permesso di nove mesi per cercare lavoro, quindi un datore di lavoro può assumerli senza alcuna pratica propria.', 'cz-visa'],
      ['The employers with the HR capacity for this are the international service and technology centres, where about 43% of staff come from outside the country (ABSL). Ask early and ask whether the employer has filed an Employee Card before. This is our reading.',
        'I datori di lavoro con la capacità amministrativa necessaria sono i centri internazionali di servizi e tecnologia, dove circa il 43% del personale viene dall’estero (ABSL). Chiedete presto e domandate se il datore di lavoro ha già presentato una Employee Card. È una nostra lettura.', 'cz-absl ours']
    ],
    where: [
      ['Portals: jobs.cz and profesia.cz, the Labour Office database via EURES, and LinkedIn; check that any agency holds a licence from the Ministry of Labour and Social Affairs.',
        'Portali: jobs.cz e profesia.cz, la banca dati dell’Ufficio del lavoro tramite EURES, e LinkedIn; bisogna verificare che ogni agenzia abbia una licenza del Ministero del lavoro e degli affari sociali.', 'cz-eures'],
      ['Employer pages: Komerční banka (kariera.kb.cz and traineeprogram.kb.cz), JetBrains internships, Red Hat university internships, and Škoda Auto’s Business, Tech and IT trainee tracks.',
        'Pagine dei datori di lavoro: Komerční banka (kariera.kb.cz e traineeprogram.kb.cz), i tirocini di JetBrains, i tirocini universitari di Red Hat e i percorsi trainee Business, Tech e IT di Škoda Auto.', 'cz-kb-kariera cz-kb-trainee cz-jb cz-rh cz-skoda'],
      ['University services and fairs: Charles University’s Career Centre (careercentre.cuni.cz), VŠE’s ŠANCE (sance.vse.cz) and CTU’s Career Days.',
        'Servizi e fiere universitari: il Career Centre della Charles University (careercentre.cuni.cz), la ŠANCE della VŠE (sance.vse.cz) e le Giornate della Carriera del CTU.', 'cz-cuni cz-sance cz-cvut'],
      ['Public sector: portal.isoss.cz for civil-service selection procedures.',
        'Settore pubblico: portal.isoss.cz per le procedure di selezione della funzione pubblica.', 'cz-isoss']
    ],
    mistakes: [
      ['Missing the spring window at Komerční banka: the page said the 2026 trainee programme was full and recruitment launches every spring.',
        'Perdere la finestra primaverile di Komerční banka: la pagina diceva che il programma trainee 2026 era al completo e che il reclutamento parte ogni primavera.', 'cz-kb-trainee'],
      ['Assuming English is enough: EURES says the overwhelming majority of employers require Czech, and the English-only roles are mostly in the international centres.',
        'Dare per scontato che basti l’inglese: EURES dice che la stragrande maggioranza dei datori di lavoro richiede il ceco, e i ruoli solo in inglese sono per lo più nei centri internazionali.', 'cz-eures cz-absl'],
      ['Overstating language levels or sending a long CV: recruiters check language levels, and Jobs.cz says two A4 pages at most.',
        'Gonfiare i livelli di lingua o inviare un CV lungo: i selezionatori controllano i livelli di lingua, e Jobs.cz indica due pagine A4 al massimo.', 'cz-expats cz-jobs-cv'],
      ['Signing a bilingual contract without reading the Czech text: the Czech version prevails legally.',
        'Firmare un contratto bilingue senza leggere il testo ceco: la versione ceca prevale sul piano legale.', 'cz-eures']
    ]
  },

  lang: [
    { f: 'business', v: 'bilingual', lv: 'English plus Czech, German or another language', t: [
      ['ABSL’s 2025 report says English is the common language of business in the service centres, which use many languages; EURES says nearly all other employers require Czech.',
        'Il rapporto ABSL 2025 dice che l’inglese è la lingua comune degli affari nei centri di servizi, che usano molte lingue; EURES dice che quasi tutti gli altri datori di lavoro richiedono il ceco.', 'cz-absl cz-eures']
    ] },
    { f: 'finance', v: 'local', lv: 'Czech (level not stated)', t: [
      ['Komerční banka’s trainee and careers pages are in Czech and state no English or other language requirement.',
        'Le pagine trainee e carriere di Komerční banka sono in ceco e non indicano requisiti di inglese o di altre lingue.', 'cz-kb-trainee cz-kb-kariera']
    ] },
    { f: 'tech', v: 'english', lv: 'Working English', t: [
      ['Red Hat’s Brno internship asks for working knowledge of written and spoken English, and JetBrains’ internship page states no language requirement; Czech is not mentioned in either.',
        'Il tirocinio di Red Hat a Brno chiede una conoscenza operativa dell’inglese scritto e parlato, e la pagina dei tirocini di JetBrains non indica alcun requisito linguistico; il ceco non è citato in nessuno dei due.', 'cz-rh cz-jb']
    ] },
    { f: 'public', v: 'local', lv: 'Czech', t: [
      ['The civil-service selection procedures are published in Czech on ISoSS; we did not read a stated language level.',
        'Le procedure di selezione della funzione pubblica sono pubblicate in ceco su ISoSS; non abbiamo letto un livello di lingua dichiarato.', 'cz-isoss ours']
    ] }
  ],

  programmes: [
    { n: 'Trainee program', o: 'Komerční banka', f: 'finance', in: null, w: null, lang: 'n/s', intl: 'unknown', ids: 'cz-kb-trainee' },
    { n: 'Trainee Program (Business, Tech and IT tracks)', o: 'Škoda Auto', f: 'business', in: null, w: null, lang: 'n/s', intl: 'unknown', ids: 'cz-skoda' },
    { n: 'Software and engineering internships (Brno)', o: 'Red Hat', f: 'tech', in: null, w: null, lang: 'EN', intl: 'local', ids: 'cz-rh' },
    { n: 'Internships', o: 'JetBrains', f: 'tech', in: null, w: null, lang: 'n/s', intl: 'unknown', ids: 'cz-jb' }
  ],

  outcomes: [
    ['Eurostat’s figures show 86.1% of recent tertiary graduates aged 20–34 in work in 2025 (EU 85.3%) and youth unemployment of 10.4%. We found no return-offer or conversion rate for the Czech Republic.',
      'I dati Eurostat mostrano che nel 2025 era occupato l’86,1% dei laureati recenti di 20–34 anni (UE 85,3%) e una disoccupazione giovanile del 10,4%. Non abbiamo trovato alcun tasso di conferma o conversione per la Repubblica Ceca.', 'cz-grad']
  ],

  sources: {
    'cz-cee': ['data', 'Admetia research library: places/gulf-and-central-eastern-europe.md §4 (Mercer 2024 SSC surveys via ABSL)', 'research/places/gulf-and-central-eastern-europe.md', '2026-10-01'],
    'cz-expats': ['practitioner consensus', 'Expats.cz: the 10 strangest CV mistakes we’ve seen', 'https://expats.cz/czech-news/article/10-common-cv-mistakes-to-avoid', '2026-10-07'],
    'cz-gen': ['practitioner consensus', 'Forbes Česko: new name, new direction, Avast becomes Gen Digital after the Norton merger', 'https://forbes.cz/nove-jmeno-novy-smer-avast-se-po-spojeni-s-nortonem-meni-v-gen-digital/', '2026-10-07'],
    'cz-absl': ['practitioner consensus', 'Expats.cz with ABSL Czech Republic: ABSL report on business, tech and IT (29 April 2025)', 'https://expats.cz/czech-news/article/why-digital-skills-are-now-crucial-in-getting-ahead-in-czechia-s-job-market-recent-absl-report-on-business-tech-and-it', '2026-10-03'],
    'cz-eures': ['data', 'EURES (European Commission): Living and working conditions, Czechia', 'https://eures.europa.eu/living-and-working/living-and-working-conditions/living-and-working-conditions-czechia_en', '2026-10-08'],
    'cz-visa': ['practitioner consensus', 'Admetia research library: visas_immigration/czech_republic, visa guide (Act 163/2024; Employee Card and Blue Card; graduate access)', 'research/visas_immigration/czech_republic/czech_republic_visas_immigration_guide.md', '2026-10-05'],
    'cz-kb-trainee': ['employer-stated', 'Komerční banka: Trainee program', 'https://traineeprogram.kb.cz/', '2026-10-08'],
    'cz-kb-kariera': ['employer-stated', 'Komerční banka: careers, students and graduates', 'https://kariera.kb.cz/studenti-a-absolventi/a-123/', '2026-10-08'],
    'cz-kb-cv': ['employer-stated', 'Komerční banka: Jak napsat životopis (how to write a CV)', 'https://www.kb.cz/cs/obcane/kb-radce/zivotni-situace/jak-napsat-zivotopis', '2026-10-08'],
    'cz-jobs-cv': ['practitioner consensus', 'Jobs.cz poradna: 5 tipů pro hezký životopis', 'https://www.jobs.cz/poradna/5-tipu-pro-hezci-zivotopis/', '2026-10-08'],
    'cz-rh': ['employer-stated', 'Red Hat via Anitab jobs board: Software Engineering Intern, Konflux (Brno office, Czech Republic)', 'https://jobs.anitab.org/companies/red-hat/jobs/73594998-software-engineering-intern-konflux-brno-office-czech-republic', '2026-10-08'],
    'cz-jb': ['employer-stated', 'JetBrains: internships', 'https://www.jetbrains.com/careers/internships/', '2026-10-08'],
    'cz-skoda': ['employer-stated', 'CzechCrunch brand story with Škoda Auto: talent programmes (27 December 2024)', 'https://cc.cz/brandstory/pavlina-zahradnickova-v-skoda-auto-vede-talentovane-programy-jak-rozvijim-mlade-talenty/', '2026-10-08'],
    'cz-sance': ['employer-stated', 'Prague University of Economics and Business: Job Fair ŠANCE', 'https://sance.vse.cz/english/', '2026-10-08'],
    'cz-cvut': ['employer-stated', 'CTU Faculty of Electrical Engineering: Career Days 2026, nearly ninety employers', 'https://fel.cvut.cz/en/what-s-on/news/83773-career-days-2026-six-thousand-students-from-the-faculty-of-electrical-engineering-and-the-faculty-of-mechanical-engineering-at-ctu-will-meet-with-ninety-employers', '2026-10-08'],
    'cz-cuni': ['employer-stated', 'Charles University Career Centre: Career Day 2026', 'https://careercentre.cuni.cz/KCEN-23.html', '2026-10-08'],
    'cz-bonus': ['practitioner consensus', 'Expats.cz: nearly half of all companies in Czechia to gift employees end-of-year bonuses (11 December 2023, Chamber of Commerce survey)', 'https://expats.cz/czech-news/article/nearly-half-of-all-companies-in-czechia-to-gift-employees-end-of-year-bonuses', '2026-10-08'],
    'cz-isoss': ['data', 'Ministry of the Interior (archive, 2015): announcing selection procedures and recording civil-service posts in ISoSS', 'https://archiv.mv.gov.cz/sluzba/clanek/informace-k-vyhlasovani-vyberovych-rizeni-na-obsazeni-volnych-sluzebnich-mist-a-k-evidenci-obsazovanych-sluzebnich-mist.aspx', '2026-10-08'],
    'cz-grad': ['data', 'Eurostat edat_lfse_24 and une_rt_a: Czech graduates and youth unemployment, 2025', 'https://ec.europa.eu/eurostat/api/dissemination/statistics/1.0/data/edat_lfse_24?format=JSON&lang=EN&duration=Y_LE3&isced11=ED5-8&age=Y20-34&sex=T&geo=CZ&geo=EU27_2020', '2026-10-03']
  }
});
