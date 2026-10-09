/* How hiring works: Bulgaria. Extended on 8 Oct 2026 to the full schema. Pages opened that day: EURES
 * Bulgaria, Rivermate, SoftUni, Telerik Academy, AIBEST, Career Show Bulgaria, the Employment Agency,
 * NACID; the work-permit rules come from the library's visa guide. Second pass on 8 Oct 2026 opened Progress's
 * internship page and its event page, TechnoLogica's 2026 internship and the Technical University of Sofia's
 * Career Days. Several employer pages (Coca-Cola HBC, CCEP, SAP) returned errors or no Bulgarian detail; the
 * service centres' selection stages and the public sector remain stated in general terms and marked as our
 * reading. */
ATLAS.addEntry({
  id: 'BG',
  checked: '2026-10-08',
  review: '2027-04-08',

  lead: [
    ['In Sofia, and to a lesser degree Plovdiv and Varna, the open door for graduates is the IT, outsourcing and shared-service sector of international firms, which recruits in English; the sector counted 833 companies and 105,436 full-time employees in 2024.',
      'A Sofia, e in misura minore a Plovdiv e Varna, la porta aperta per i laureati è il settore IT, outsourcing e servizi condivisi delle aziende internazionali, che recluta in inglese; nel 2024 il settore contava 833 aziende e 105.436 dipendenti a tempo pieno.', 'bg-aibest ours'],
    ['Outside it, hiring runs largely through personal contacts and in Bulgarian.',
      'Fuori da questo settore, le assunzioni passano in gran parte per contatti personali e in bulgaro.', 'ours']
  ],

  ways: [
    { name: ['Service and IT centres: direct application', 'Centri di servizi e IT: candidatura diretta'], r: 'direct', p: 'first exp', basis: 'data', t: [
      ['Ranked first on size: the outsourcing and technology-services sector had 833 companies (412 in IT, 388 in business processes) and 105,436 full-time employees in 2024. Junior specialists earned a mean of about €1,517 a month gross in 2024, the lowest of the region’s surveyed countries.',
        'Al primo posto per dimensione: il settore dell’outsourcing e dei servizi tecnologici contava 833 aziende (412 IT, 388 processi aziendali) e 105.436 dipendenti a tempo pieno nel 2024. Gli specialisti junior guadagnavano in media circa 1.517 € lordi al mese nel 2024, il valore più basso tra i paesi della regione rilevati.', 'bg-aibest bg-cee'],
      ['For experienced hires, Rivermate says skilled technology and business-process professionals are quickly snapped up by foreign employers.',
        'Per i profili con esperienza, Rivermate dice che i professionisti qualificati di tecnologia e processi aziendali vengono rapidamente assunti da datori di lavoro esteri.', 'bg-rivermate']
    ] },
    { name: ['Summer internships at technology firms', 'Tirocini estivi nelle aziende tecnologiche'], r: 'intern', p: 'first intern', basis: 'consensus', t: [
      ['Progress (Telerik’s owner) runs a paid internship in Sofia, July to September: a CV, a 90-minute HackerRank test, then an onsite interview of 75–90 minutes; it states that more than 75% of its technical interns have received job offers. An event page lists 13 internship places and says applications open on 20 April (year not stated).',
        'Progress (proprietaria di Telerik) organizza a Sofia un tirocinio retribuito da luglio a settembre: un CV, un test HackerRank di 90 minuti, poi un colloquio in presenza di 75–90 minuti; dichiara che oltre il 75% dei suoi stagisti tecnici ha ricevuto offerte di lavoro. Una pagina di evento indica 13 posti di tirocinio e dice che le candidature si aprono il 20 aprile (anno non indicato).', 'bg-progress bg-progress-evt'],
      ['TechnoLogica’s 2026 internship ran from 20 July to 30 September, with applications closing on 22 June, in software development and databases; strong performers may receive a permanent offer in Sofia, Burgas or Varna.',
        'Il tirocinio 2026 di TechnoLogica si è svolto dal 20 luglio al 30 settembre, con candidature chiuse il 22 giugno, in sviluppo software e database; chi si distingue può ricevere un’offerta a tempo indeterminato a Sofia, Burgas o Varna.', 'bg-technologica']
    ] },
    { name: ['Industry academies: Telerik Academy and SoftUni', 'Accademie dell’industria: Telerik Academy e SoftUni'], r: 'scheme', p: 'first', basis: 'consensus', t: [
      ['Telerik Academy says it partners with over 60 top technology companies in Bulgaria and that 68% of its graduates were employed within two months of finishing; its Upskill programmes last three months.',
        'Telerik Academy dice di collaborare con oltre 60 grandi aziende tecnologiche in Bulgaria e che il 68% dei suoi diplomati era occupato entro due mesi dalla fine; i suoi programmi Upskill durano tre mesi.', 'bg-telerik bg-telerik-home'],
      ['SoftUni says it has trained 17,000+ developers, that 97% of its programming alumni started a tech job, and that it runs train-to-hire bootcamps and can hire junior developers from its alumni pool. These are the schools’ own figures.',
        'SoftUni dice di aver formato oltre 17.000 sviluppatori, che il 97% dei suoi diplomati in programmazione ha iniziato un lavoro tech, e che organizza bootcamp train-to-hire e può assumere sviluppatori junior dal proprio gruppo di ex allievi. Sono cifre delle scuole stesse.', 'bg-softuni']
    ] },
    { name: ['Career Show fairs', 'Fiere Career Show'], r: 'campus', p: 'first exp', basis: 'anecdotal', t: [
      ['Career Show Bulgaria, an expo for qualified staff, runs in three cities in October 2026: Sofia on 5 October, Plovdiv on 8 October and Varna on 15 October; it advertises 200+ employers, 100+ of them in Sofia, and free registration.',
        'Career Show Bulgaria, una fiera per personale qualificato, si tiene in tre città a ottobre 2026: Sofia il 5 ottobre, Plovdiv l’8 ottobre e Varna il 15 ottobre; indica oltre 200 datori di lavoro, oltre 100 a Sofia, e iscrizione gratuita.', 'bg-careershow']
    ] },
    { name: ['Employment Agency and job portals', 'Agenzia per l’impiego e portali di lavoro'], r: 'agency', p: 'first exp', basis: 'consensus', t: [
      ['EURES says private portals (jobs.bg, karieri.bg, zaplata.bg, jobtiger.bg, rabota.bg) are a widespread way to look for work, alongside the Employment Agency’s 106 local job centres and company websites, especially in IT and business-process outsourcing.',
        'EURES dice che i portali privati (jobs.bg, karieri.bg, zaplata.bg, jobtiger.bg, rabota.bg) sono un modo diffuso di cercare lavoro, accanto ai 106 centri per l’impiego dell’Agenzia per l’impiego e ai siti delle aziende, soprattutto in IT e outsourcing dei processi aziendali.', 'bg-eures'],
      ['The Employment Agency runs the e-Job Exchange, a monthly schedule of job exchanges and the Youth Guarantee scheme, and showed 9,659 vacancies in August 2026.',
        'L’Agenzia per l’impiego gestisce la Borsa del lavoro elettronica, un calendario mensile di borse del lavoro e il programma Garanzia per i giovani, e a agosto 2026 mostrava 9.659 posti vacanti.', 'bg-az']
    ] },
    { name: ['Personal contacts', 'Contatti personali'], r: 'network', p: 'first exp', basis: 'anecdotal', t: [
      ['Outside the international centres, introductions through people already inside the employer count for more than portals. This is our reading; no survey was found.',
        'Fuori dai centri internazionali, le presentazioni di persone già presenti nell’azienda contano più dei portali. È una nostra lettura; non è stata trovata alcuna indagine.', 'ours']
    ] }
  ],

  cycle: [
    ['No graduate intake calendar was found for Bulgaria: the centres and portals hire throughout the year, and the fairs fall in October (Career Show 2026: Sofia 5, Plovdiv 8, Varna 15 October).',
      'Non è stato trovato alcun calendario di selezione per neolaureati in Bulgaria: i centri e i portali assumono durante tutto l’anno, e le fiere cadono in ottobre (Career Show 2026: Sofia 5, Plovdiv 8, Varna 15 ottobre).', 'bg-careershow ours'],
    ['The Employment Agency publishes a monthly schedule of job exchanges; the October 2026 one was listed.',
      'L’Agenzia per l’impiego pubblica un calendario mensile delle borse del lavoro; quello di ottobre 2026 era elencato.', 'bg-az'],
    ['Summer internships have a spring window: Progress’s event page says applications open on 20 April and its internship runs July to September; TechnoLogica’s 2026 deadline was 22 June for a 20 July start.',
      'I tirocini estivi hanno una finestra primaverile: la pagina di evento di Progress dice che le candidature si aprono il 20 aprile e il tirocinio va da luglio a settembre; la scadenza 2026 di TechnoLogica era il 22 giugno per un inizio il 20 luglio.', 'bg-progress bg-progress-evt bg-technologica'],
    ['Academy cohorts are short: Telerik Academy’s Upskill programmes run three months and its Sprint courses two weeks.',
      'Le edizioni delle accademie sono brevi: i programmi Upskill di Telerik Academy durano tre mesi e i corsi Sprint due settimane.', 'bg-telerik-home']
  ],

  schools: [
    ['The Technical University of Sofia is the engineering school employers visit: its 20th Career Days, reported on 6 October 2026, drew more than 70 companies, including Melexis Bulgaria, and continued in Plovdiv and Sliven.',
      'L’Università tecnica di Sofia è la scuola di ingegneria visitata dai datori di lavoro: le sue 20ª Giornate della Carriera, riportate il 6 ottobre 2026, hanno attirato oltre 70 aziende, tra cui Melexis Bulgaria, e sono proseguite a Plovdiv e Sliven.', 'bg-tusofia'],
    ['We read no employer page that names target universities in Bulgaria. The tech academies (Telerik Academy, SoftUni) recruit from the general public aged 18–66 and from students, and Telerik’s partners include Accenture, SAP, Experian, KPMG, Paysafe and Progress.',
      'Non abbiamo letto alcuna pagina di datori di lavoro che indichi università bersaglio in Bulgaria. Le accademie tech (Telerik Academy, SoftUni) si rivolgono al pubblico generale di 18–66 anni e agli studenti, e tra i partner di Telerik ci sono Accenture, SAP, Experian, KPMG, Paysafe e Progress.', 'bg-telerik-home bg-telerik2']
  ],

  events: [
    ['Technical University of Sofia Career Days, 20th edition: reported on 6 October 2026 with more than 70 companies and hundreds of students, then Plovdiv and Sliven on the following days.',
      'Giornate della Carriera dell’Università tecnica di Sofia, 20ª edizione: riportate il 6 ottobre 2026 con oltre 70 aziende e centinaia di studenti, poi Plovdiv e Sliven nei giorni seguenti.', 'bg-tusofia'],
    ['Career Show Bulgaria: Sofia (Arena 8888) 5 October 2026, Plovdiv (International Fair Plovdiv) 8 October, Varna (Gallery Graphite) 15 October; free, with lectures, employer panels and a CV photo studio in Sofia.',
      'Career Show Bulgaria: Sofia (Arena 8888) 5 ottobre 2026, Plovdiv (Fiera internazionale di Plovdiv) 8 ottobre, Varna (Galleria Graphite) 15 ottobre; gratuita, con conferenze, tavole rotonde con i datori di lavoro e uno studio per foto da CV a Sofia.', 'bg-careershow'],
    ['The Employment Agency’s monthly job exchanges (трудови борси) and AIBEST’s industry events, such as the SEE Forward summit.',
      'Le borse del lavoro mensili dell’Agenzia per l’impiego e gli eventi del settore di AIBEST, come il vertice SEE Forward.', 'bg-az bg-aibest-home']
  ],

  fields: [
    { f: 'business', t: [
      ['Business graduates enter mainly through the finance, accounting and HR service centres in Sofia, which recruit juniors in English. This is our reading of the sector’s make-up; the 388 business-process companies in 2024 are the evidence of its size.',
        'I laureati in economia entrano soprattutto tramite i centri di servizi di finanza, contabilità e risorse umane di Sofia, che reclutano junior in inglese. È la nostra lettura della composizione del settore; le 388 aziende di processi aziendali nel 2024 sono la prova della sua dimensione.', 'bg-aibest ours']
    ] },
    { f: 'tech', t: [
      ['A distinctive route: many junior developers enter through industry academies, above all Telerik Academy (over 60 partner companies) and SoftUni (train-to-hire bootcamps). One Telerik alumnus, an IT student who added practical skills there, now works as a software developer.',
        'Una via tipica: molti sviluppatori junior entrano tramite le accademie dell’industria, soprattutto Telerik Academy (oltre 60 aziende partner) e SoftUni (bootcamp train-to-hire). Un ex allievo di Telerik, studente di informatica che vi ha aggiunto competenze pratiche, oggi lavora come sviluppatore software.', 'bg-telerik bg-softuni bg-telerik2']
    ] }
  ],

  customs: [
    { k: 'season', v: 'rolling', t: [
      ['No national graduate season was found; hiring runs all year, with fairs and monthly job exchanges as peaks. This is our reading.',
        'Non è stata trovata alcuna stagione nazionale per i neolaureati; si assume tutto l’anno, con fiere e borse del lavoro mensili come picchi. È una nostra lettura.', 'bg-az ours']
    ] },
    { k: 'masters', v: 'irrelevant', t: [
      ['The routes found, centres, portals and academies, ask for skills and languages rather than a master’s. This is our reading; no employer page states a degree level.',
        'Le vie trovate, centri, portali e accademie, chiedono competenze e lingue più che una laurea magistrale. È una nostra lettura; nessuna pagina di datori di lavoro indica un livello di titolo.', 'ours']
    ] },
    { k: 'degrees', v: 'eval', t: [
      ['After the first review employers often ask for translated and authenticated education certificates; the Employment Agency also wants education documents authenticated by the issuing country, and Bulgarian programmes need a legal Bulgarian translation.',
        'Dopo la prima selezione i datori di lavoro chiedono spesso certificati di studio tradotti e autenticati; anche l’Agenzia per l’impiego vuole documenti di studio autenticati dal paese emittente, e i programmi bulgari richiedono una traduzione legale in bulgaro.', 'bg-eures'],
      ['NACID, the national academic recognition centre, handles foreign diplomas and publishes a list of regulated professions, which need recognition.',
        'Il NACID, il centro nazionale per il riconoscimento accademico, tratta i diplomi stranieri e pubblica un elenco delle professioni regolamentate, che richiedono il riconoscimento.', 'bg-nacid']
    ] },
    { k: 'brand', v: 'low', t: [
      ['The routes that employ most juniors, the academies and the centres, are skills-based, and no page read ranks universities. This is our reading.',
        'Le vie che impiegano più junior, le accademie e i centri, sono basate sulle competenze, e nessuna pagina letta classifica le università. È una nostra lettura.', 'bg-telerik ours']
    ] },
    { k: 'dual', v: 'little', t: [
      ['We found no apprenticeship or dual-study route to graduate jobs; the structured routes are academies and the Youth Guarantee. This is our reading.',
        'Non abbiamo trovato alcuna via di apprendistato o studio duale verso i lavori per laureati; le vie strutturate sono le accademie e la Garanzia per i giovani. È una nostra lettura.', 'ours']
    ] },
    { k: 'publicw', v: 'mid', t: [
      ['We found no figure for the public sector’s share of graduate hiring in Bulgaria; the Employment Agency lists vacancies centrally but does not break them down. “Medium” is a placeholder reading.',
        'Non abbiamo trovato alcuna cifra sulla quota del settore pubblico nelle assunzioni di laureati in Bulgaria; l’Agenzia per l’impiego elenca i posti vacanti a livello centrale ma non li scompone. «Medio» è una lettura provvisoria.', 'bg-az ours']
    ] },
    { k: 'sponsorr', v: 'some', t: [
      ['A non-EU hire needs the employer to advertise the vacancy at the Employment Agency for at least 15 days, and non-EU staff may not exceed 20% of the workforce (35% in small and medium firms); EU Blue Card hires are exempt from the test and the cap. See Visas for the rules.',
        'Per un’assunzione extra-UE il datore di lavoro deve pubblicare il posto presso l’Agenzia per l’impiego per almeno 15 giorni, e il personale extra-UE non può superare il 20% della forza lavoro (il 35% nelle piccole e medie imprese); le assunzioni con Carta blu UE sono esenti da test e tetto. Vedi Visti per le regole.', 'bg-visa']
    ] },
    { k: 'photo', v: 'common', t: [
      ['A photo is usual on Bulgarian CVs; no page read states the norm, and Career Show runs a CV photo studio at its Sofia fair. This is our reading.',
        'La foto è abituale nei CV bulgari; nessuna pagina letta indica la norma, e Career Show ha uno studio per foto da CV alla fiera di Sofia. È una nostra lettura.', 'bg-careershow ours']
    ] },
    { k: 'cv', v: 'two', t: [
      ['EURES recommends the Europass CV format; it states no page limit, so two pages is our reading of what is usual.',
        'EURES raccomanda il formato Europass per il CV; non indica un limite di pagine, quindi due pagine è la nostra lettura di ciò che è abituale.', 'bg-eures ours']
    ] },
    { k: 'letter', v: 'expected', t: [
      ['Employers usually expect a brief cover letter with the CV.',
        'I datori di lavoro si aspettano di solito una breve lettera di presentazione insieme al CV.', 'bg-eures']
    ] },
    { k: 'refs', v: 'later', t: [
      ['After the first review employers often ask for more documents, including references from former employers.',
        'Dopo la prima selezione i datori di lavoro chiedono spesso altri documenti, comprese le referenze di ex datori di lavoro.', 'bg-eures']
    ] },
    { k: 'docs', v: 'certified', t: [
      ['Prepare translated and authenticated education certificates and proof of work experience; employers ask for them after the first review.',
        'Preparare certificati di studio tradotti e autenticati e la prova dell’esperienza lavorativa; i datori di lavoro li chiedono dopo la prima selezione.', 'bg-eures']
    ] },
    { k: 'salary', v: 'later', t: [
      ['No page read says whether a salary expectation is asked in the application; Rivermate says offers should be market-related and mix base pay with benefits. Our reading is that pay is raised later.',
        'Nessuna pagina letta dice se nella candidatura si chiede la pretesa salariale; Rivermate dice che le offerte devono essere in linea con il mercato e unire stipendio base e benefit. La nostra lettura è che la retribuzione si discuta più avanti.', 'bg-rivermate ours']
    ] },
    { k: 'check', v: 'some', t: [
      ['Employers asking for references from former employers is the only check found; we found nothing on background checks. This is our reading.',
        'La richiesta di referenze a ex datori di lavoro è l’unico controllo trovato; non abbiamo trovato nulla sui controlli sui precedenti. È una nostra lettura.', 'bg-eures ours']
    ] },
    { k: 'contact', v: 'mixed', t: [
      ['Portals, fairs and academies take open applications, while outside the international centres introductions count. This is our reading.',
        'Portali, fiere e accademie accettano candidature aperte, mentre fuori dai centri internazionali contano le presentazioni. È una nostra lettura.', 'bg-eures ours']
    ] },
    { k: 'abroad', v: 'workable', t: [
      ['Centres recruit in English and applications are online; Rivermate says onboarding takes one to two weeks, and up to four months when immigration is involved.',
        'I centri reclutano in inglese e le candidature sono online; Rivermate dice che l’inserimento richiede da una a due settimane, e fino a quattro mesi quando c’è di mezzo l’immigrazione.', 'bg-rivermate ours']
    ] },
    { k: 'language', v: 'english', t: [
      ['English in international centres; Bulgarian elsewhere, and employment contracts must be written in Bulgarian.',
        'L’inglese nei centri internazionali; il bulgaro altrove, e i contratti di lavoro devono essere scritti in bulgaro.', 'bg-rivermate ours']
    ] }
  ],

  rows: {
    process: [
      ['Progress’s internship in Sofia has three steps: a CV (a portfolio or repository link is highly recommended), a HackerRank assignment of about 90 minutes to be finished within five days of the invitation, and an onsite interview of 75–90 minutes with several Progress professionals, covering technical and behavioural questions.',
        'Il tirocinio di Progress a Sofia ha tre passaggi: un CV (un link a portfolio o repository è fortemente consigliato), una prova HackerRank di circa 90 minuti da completare entro cinque giorni dall’invito, e un colloquio in presenza di 75–90 minuti con diversi professionisti di Progress, con domande tecniche e comportamentali.', 'bg-progress'],
      ['We found no page describing the selection stages of the finance and business-process centres, nor the usual time from application to offer or dress norms; general practice there is an interview with a language check. This is our reading.',
        'Non abbiamo trovato alcuna pagina che descriva le fasi di selezione dei centri di finanza e processi aziendali, né i tempi abituali tra candidatura e offerta o le norme sull’abbigliamento; la pratica generale è un colloquio con una verifica della lingua. È una nostra lettura.', 'ours'],
      ['After the first review, employers often ask for more documents: translated and authenticated education certificates, proof of experience and references from former employers.',
        'Dopo la prima selezione, i datori di lavoro chiedono spesso altri documenti: certificati di studio tradotti e autenticati, prove dell’esperienza e referenze di ex datori di lavoro.', 'bg-eures']
    ],
    offer: [
      ['A written employment contract is mandatory and must be concluded before you start; it must be in Bulgarian. The employer notifies the National Revenue Agency within three days and gives you a copy, and you can start only after registration.',
        'Il contratto di lavoro scritto è obbligatorio e deve essere concluso prima dell’inizio; deve essere in bulgaro. Il datore di lavoro lo comunica all’Agenzia nazionale delle entrate entro tre giorni e ve ne dà una copia, e si può iniziare solo dopo la registrazione.', 'bg-eures bg-rivermate'],
      ['Probation can last up to six months, and during it a worker may be dismissed without prior notice; for fixed-term contracts under one year it cannot exceed one month. After probation the notice is one month for an indefinite contract and three months for a fixed-term one.',
        'La prova può durare fino a sei mesi e durante di essa il lavoratore può essere licenziato senza preavviso; per i contratti a termine inferiori a un anno non può superare un mese. Dopo la prova il preavviso è di un mese per un contratto a tempo indeterminato e di tre mesi per uno a termine.', 'bg-eures bg-rivermate'],
      ['The standard week is five days and at most 40 hours. Rivermate says two-thirds of companies pay bonuses, though they are not mandatory. We did not establish whether graduates negotiate or how long employers give to decide.',
        'La settimana standard è di cinque giorni e al massimo 40 ore. Rivermate dice che due terzi delle aziende pagano bonus, anche se non sono obbligatori. Non abbiamo stabilito se i neolaureati negoziano né quanto tempo concedono i datori di lavoro per decidere.', 'bg-eures bg-rivermate']
    ],
    sponsor: [
      ['The employer must run a labour-market test by advertising the vacancy at the Employment Agency for at least 15 days, unless the job is on the shortage-occupations list, and the Agency gives an opinion (fee €51.13) before the single permit is issued.',
        'Il datore di lavoro deve fare un test del mercato del lavoro pubblicando il posto presso l’Agenzia per l’impiego per almeno 15 giorni, salvo che il lavoro sia nell’elenco delle professioni carenti, e l’Agenzia dà un parere (tassa 51,13 €) prima del rilascio del permesso unico.', 'bg-visa'],
      ['Non-EU staff may not exceed 20% of a firm’s average annual workforce (35% for small and medium firms). EU Blue Card hires are exempt from the test and the cap but need a contract of at least six months at 1.5 times the average gross wage, which the library puts at €2,166 gross a month in 2026.',
        'Il personale extra-UE non può superare il 20% della forza lavoro media annua di un’azienda (il 35% per le piccole e medie imprese). Le assunzioni con Carta blu UE sono esenti da test e tetto ma richiedono un contratto di almeno sei mesi a 1,5 volte il salario medio lordo, che la libreria indica in 2.166 € lordi al mese nel 2026.', 'bg-visa'],
      ['Ask early: Rivermate says onboarding takes up to four months when immigration is involved. Which employers actually sponsor, and what they want to hear, was not established; the international centres are the likely ones. This is our reading.',
        'Chiedete presto: Rivermate dice che l’inserimento richiede fino a quattro mesi quando c’è di mezzo l’immigrazione. Non è stato stabilito quali datori di lavoro sponsorizzino davvero né che cosa vogliano sentirsi dire; i centri internazionali sono i più probabili. È una nostra lettura.', 'bg-rivermate ours']
    ],
    where: [
      ['Portals named by EURES: jobs.bg, karieri.bg, zaplata.bg, jobtiger.bg, rabota.bg; the Employment Agency’s site (az.government.bg) and the EURES job-mobility portal; company websites, especially in IT and business-process outsourcing.',
        'Portali indicati da EURES: jobs.bg, karieri.bg, zaplata.bg, jobtiger.bg, rabota.bg; il sito dell’Agenzia per l’impiego (az.government.bg) e il portale EURES per la mobilità; i siti delle aziende, soprattutto in IT e outsourcing dei processi aziendali.', 'bg-eures'],
      ['Bulgarian EURES advisers give information in English, German, Spanish and French; registration at the Employment Agency’s local job centres is free.',
        'I consulenti EURES bulgari danno informazioni in inglese, tedesco, spagnolo e francese; l’iscrizione ai centri per l’impiego locali dell’Agenzia è gratuita.', 'bg-eures'],
      ['Career Show Bulgaria (careershow.bg) for fairs, Telerik Academy and SoftUni for developer training, and AIBEST (aibest.org), the outsourcing industry association, for member companies and events.',
        'Career Show Bulgaria (careershow.bg) per le fiere, Telerik Academy e SoftUni per la formazione degli sviluppatori, e AIBEST (aibest.org), l’associazione del settore outsourcing, per le aziende associate e gli eventi.', 'bg-careershow bg-telerik-home bg-softuni bg-aibest-home']
    ],
    mistakes: [
      ['Arriving without translated and authenticated education certificates: employers ask for them right after the first review, and Bulgarian programmes need a legal Bulgarian translation of foreign diplomas.',
        'Presentarsi senza certificati di studio tradotti e autenticati: i datori di lavoro li chiedono subito dopo la prima selezione, e i programmi bulgari richiedono una traduzione legale in bulgaro dei diplomi stranieri.', 'bg-eures'],
      ['Starting work before the contract is written and registered: the contract must be concluded in writing before the first day, and the employee can start only after registration.',
        'Iniziare a lavorare prima che il contratto sia scritto e registrato: il contratto deve essere concluso per iscritto prima del primo giorno, e il dipendente può iniziare solo dopo la registrazione.', 'bg-eures bg-rivermate'],
      ['Assuming English is enough everywhere: the centres recruit in English, but contracts must be in Bulgarian and elsewhere the working language is Bulgarian.',
        'Dare per scontato che l’inglese basti ovunque: i centri reclutano in inglese, ma i contratti devono essere in bulgaro e altrove la lingua di lavoro è il bulgaro.', 'bg-rivermate ours'],
      ['Waiting for the autumn to look for a summer internship: Progress’s applications open on 20 April and TechnoLogica’s 2026 deadline was 22 June.',
        'Aspettare l’autunno per cercare un tirocinio estivo: le candidature di Progress si aprono il 20 aprile e la scadenza 2026 di TechnoLogica era il 22 giugno.', 'bg-progress-evt bg-technologica'],
      ['Skipping the cover letter: employers usually expect a brief one.',
        'Saltare la lettera di presentazione: i datori di lavoro se ne aspettano di solito una breve.', 'bg-eures']
    ]
  },

  lang: [
    { f: 'business', v: 'bilingual', lv: 'English plus Bulgarian; level not stated', t: [
      ['Finance, accounting and HR centres recruit in English, while contracts must be in Bulgarian and local employers work in Bulgarian. Rivermate notes that Bulgarian workers often speak German, French and Nordic languages, which the centres value. The level and the evidence asked for (certificate, interview) were not established.',
        'I centri di finanza, contabilità e risorse umane reclutano in inglese, mentre i contratti devono essere in bulgaro e i datori locali lavorano in bulgaro. Rivermate osserva che i lavoratori bulgari parlano spesso tedesco, francese e lingue nordiche, cosa che i centri apprezzano. Il livello e la prova richiesta (certificato, colloquio) non sono stati stabiliti.', 'bg-rivermate ours']
    ] },
    { f: 'finance', v: 'bilingual', lv: 'English plus Bulgarian; level not stated', t: [
      ['Bank jobs, such as UniCredit Bulbank or First Investment Bank in Sofia, work in Bulgarian; English is the language of the international finance centres. We read no listing stating a level.',
        'I lavori in banca, come UniCredit Bulbank o First Investment Bank a Sofia, si svolgono in bulgaro; l’inglese è la lingua dei centri finanziari internazionali. Non abbiamo letto alcun annuncio che indichi un livello.', 'ours']
    ] },
    { f: 'tech', v: 'english', lv: 'Very good written and spoken English', t: [
      ['Progress’s internship asks for very good written and spoken English and tests it in the interview; no certificate or CEFR level is named. Telerik Academy and SoftUni train in programming and say their graduates are hired by technology companies.',
        'Il tirocinio di Progress chiede un ottimo inglese scritto e parlato e lo verifica al colloquio; non è indicato alcun certificato o livello CEFR. Telerik Academy e SoftUni formano alla programmazione e dicono che i loro diplomati vengono assunti da aziende tecnologiche.', 'bg-progress bg-telerik bg-softuni']
    ] }
  ],

  programmes: [
    { n: 'Alpha programmes', o: 'Telerik Academy', f: 'tech', in: null, w: null, lang: 'EN BG', intl: 'unknown', ids: 'bg-telerik-home bg-telerik' },
    { n: 'Progress internship (Sofia)', o: 'Progress', f: 'tech', in: 13, w: null, lang: 'EN', intl: 'unknown', ids: 'bg-progress bg-progress-evt' },
    { n: 'TechnoLogica internship 2026', o: 'TechnoLogica', f: 'tech', in: null, w: null, lang: 'EN', intl: 'unknown', ids: 'bg-technologica' },
    { n: 'Upskill programmes (three months)', o: 'Telerik Academy', f: 'tech', in: null, w: null, lang: 'EN BG', intl: 'unknown', ids: 'bg-telerik-home' },
    { n: 'Train-to-hire bootcamps', o: 'SoftUni', f: 'tech', in: null, w: null, lang: 'EN BG', intl: 'unknown', ids: 'bg-softuni' },
    { n: 'Youth Guarantee (Гаранция за младежта)', o: 'Employment Agency of Bulgaria', f: 'public', in: null, w: null, lang: 'BG', intl: 'unknown', ids: 'bg-az' }
  ],

  outcomes: [
    ['Eurostat counted 90.0% of Bulgarian tertiary graduates aged 20–34 who finished within three years as in work in 2025 (EU 85.3%), with youth unemployment of 13.1%: graduates are in demand, but this is a national figure that says nothing about the quality of the first job.',
      'Eurostat contava il 90,0% dei laureati bulgari di 20–34 anni che avevano finito gli studi da meno di tre anni come occupati nel 2025 (UE 85,3%), con una disoccupazione giovanile del 13,1%: i laureati sono richiesti, ma è un dato nazionale che non dice nulla sulla qualità del primo lavoro.', 'bg-eurostat'],
    ['Progress states that more than 75% of its technical interns have received job offers after the internship, depending on performance and business needs; it is the employer’s own figure for all its offices, not for Sofia alone.',
      'Progress dichiara che oltre il 75% dei suoi stagisti tecnici ha ricevuto offerte di lavoro dopo il tirocinio, in base alle prestazioni e alle esigenze aziendali; è una cifra dello stesso datore di lavoro per tutte le sedi, non solo per Sofia.', 'bg-progress'],
    ['Telerik Academy says 68% of its graduates were employed within two months of finishing, and SoftUni says 97% of its programming alumni started a tech job; both are the schools’ own figures with no stated method.',
      'Telerik Academy dice che il 68% dei suoi diplomati era occupato entro due mesi dalla fine, e SoftUni dice che il 97% dei suoi diplomati in programmazione ha iniziato un lavoro tech; entrambe sono cifre delle scuole stesse, senza metodo dichiarato.', 'bg-telerik bg-softuni']
  ],

  sources: {
    'bg-cee': ['data', 'Admetia research library: places/gulf-and-central-eastern-europe.md §4 (Mercer 2024 SSC surveys via ABSL)', 'research/places/gulf-and-central-eastern-europe.md', '2026-10-01'],
    'bg-rivermate': ['practitioner consensus', 'Rivermate: recruitment in Bulgaria', 'https://rivermate.com/guides/bulgaria/recruitment', '2026-10-08'],
    'bg-eures': ['data', 'EURES (European Commission): Living and working conditions, Bulgaria', 'https://eures.europa.eu/living-and-working/living-and-working-conditions/living-and-working-conditions-bulgaria_en', '2026-10-08'],
    'bg-aibest': ['data', 'AIBEST: Annual Industry Report 2025', 'https://aibest.org/annualreport2025', '2026-10-02'],
    'bg-progress': ['employer-stated', 'Progress: Internship programme (selection steps, locations, eligibility, offers)', 'https://www.progress.com/company/careers/internship', '2026-10-08'],
    'bg-progress-evt': ['employer-stated', 'Luma: Mark Your Progress, internship stories from the inside (Sofia event page)', 'https://luma.com/avn6uve7', '2026-10-08'],
    'bg-technologica': ['employer-stated', 'TechnoLogica: Internship Program 2026 is open', 'https://technologica.com/en/technologica-internship-program-2026-is-open/', '2026-10-08'],
    'bg-tusofia': ['employer-stated', 'Technical University of Sofia: 20th Career Days (reported 6 October 2026)', 'https://www.tu-sofia.bg/bg/articles/20-ti-iubileini-dni-na-karierata-v-texniceskiia-universitet-sofiia', '2026-10-08'],
    'bg-aibest-home': ['employer-stated', 'AIBEST (Bulgarian outsourcing association): home page', 'https://www.aibest.org/', '2026-10-08'],
    'bg-telerik': ['employer-stated', 'Telerik Academy: why your company needs “master junior” talent (2019)', 'https://www.telerikacademy.com/blog/why-your-company-needs-junior-master-talent', '2026-10-08'],
    'bg-telerik-home': ['employer-stated', 'Telerik Academy: home page (programmes and partners)', 'https://www.telerikacademy.com/', '2026-10-08'],
    'bg-telerik2': ['anecdotal', 'Telerik Academy: alumni success story', 'https://www.telerikacademy.com/about/success/details/11', '2026-10-08'],
    'bg-softuni': ['employer-stated', 'SoftUni Global: home page', 'https://softuni.org/', '2026-10-08'],
    'bg-careershow': ['employer-stated', 'Career Show Bulgaria: home page (2026 dates and venues)', 'https://careershow.bg/', '2026-10-08'],
    'bg-az': ['data', 'Employment Agency of Bulgaria (Агенция по заетостта): official site', 'https://www.az.government.bg/', '2026-10-08'],
    'bg-nacid': ['data', 'NACID (National Academic Recognition Information Centre): home page', 'https://www.nacid.bg/en/', '2026-10-08'],
    'bg-visa': ['practitioner consensus', 'Admetia research library: visas_immigration/bulgaria, Bulgarian visa guide (market test, 20%/35% cap, Blue Card, fees)', 'research/visas_immigration/bulgaria/bulgaria_visas_immigration_guide.md', '2026-10-05'],
    'bg-eurostat': ['data', 'Eurostat edat_lfse_24, une_rt_a: graduates in work and youth unemployment, Bulgaria 2025', 'https://ec.europa.eu/eurostat/api/dissemination/statistics/1.0/data/edat_lfse_24?format=JSON&lang=EN&duration=Y_LE3&isced11=ED5-8&age=Y20-34&sex=T&geo=BG&geo=EU27_2020', '2026-10-03']
  }
});
