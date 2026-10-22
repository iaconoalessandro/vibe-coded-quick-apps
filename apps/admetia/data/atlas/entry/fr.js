/* How hiring works: France. From research/getting-in/employer-pipelines.md §2
 * (CGE Enquête Insertion 2026) and recruiting-calendar.md §3.1, with reads on
 * 7 and 8 Oct 2026 (Apec, Insee, Eurostat, L'Étudiant, L'Oréal, Société Générale,
 * Kering, TotalEnergies, BCG, Euroguidance, Service-public). */
ATLAS.addEntry({
  id: 'FR',
  checked: '2026-10-08',
  review: '2027-04-30',

  lead: [
    ['In France the first job comes out of the last internship or the work-study contract. Of grande école graduates in work, 42.3% were hired by the firm that hosted their final internship or apprenticeship; LinkedIn-type networks produced 14.1% and spontaneous applications 5.5%.',
      'In Francia il primo lavoro nasce dall’ultimo tirocinio o dal contratto di alternanza. Dei laureati delle grandes écoles che lavorano, il 42,3% è stato assunto dall’azienda che li aveva ospitati per il tirocinio finale o l’apprendistato; le reti tipo LinkedIn hanno prodotto il 14,1% e le candidature spontanee il 5,5%.', 'fr-cge'],
    ['The school decides which firms will take you as an intern; the conversion happens inside the firm.',
      'La scuola decide quali aziende ti prenderanno come tirocinante; la conversione avviene dentro l’azienda.', 'fr-pipelines'],
    ['L’Oréal says 70% of its full-time junior hires come from its pool of interns and apprentices, and calls internships and apprenticeships the number one route to a job there.',
      'L’Oréal dichiara che il 70% delle sue assunzioni junior a tempo pieno viene dal bacino dei suoi tirocinanti e apprendisti, e definisce tirocini e apprendistato la via numero uno per un posto da loro.', 'fr-loreal-int']
  ],

  ways: [
    { name: ['Final-year internship (stage de fin d’études)', 'Tirocinio di fine studi (stage de fin d’études)'], r: 'intern', p: 'first intern', basis: 'data', t: [
      ['A six-month stage at the end of the master’s, under a three-party agreement with the school, which only enrolled students can sign. It produced 25.0% of grande école hires, and 35.7% for those who were not apprentices; more than 80% of those in work found the job within two months of finishing.',
        'Uno stage di sei mesi alla fine del master, con una convenzione tripartita con la scuola, che possono firmare solo gli studenti iscritti. Ha prodotto il 25,0% delle assunzioni dalle grandes écoles, e il 35,7% per chi non era apprendista; più dell’80% di chi lavora ha trovato il posto entro due mesi dalla fine degli studi.', 'fr-cge fr-calendar'],
      ['A year out between the two master’s years (césure), spent in one or two six-month stages, lets students try two firms before the final one.',
        'Un anno di pausa tra i due anni di master (césure), passato in uno o due stage di sei mesi, permette di provare due aziende prima di quella finale.', 'fr-calendar']
    ] },
    { name: ['Work-study (alternance, apprentissage)', 'Alternanza scuola-lavoro (alternance, apprentissage)'], r: 'apprentice', p: 'first intern', basis: 'data', t: [
      ['Half the time at school, half at a firm that pays a wage and often the fees. 51.6% of management-school respondents were apprentices; 43.4% of apprentices in work were hired by their host, but only 37.9% in management schools.',
        'Metà del tempo a scuola, metà in un’azienda che paga uno stipendio e spesso la retta. Il 51,6% dei rispondenti delle scuole di management era apprendista; il 43,4% degli apprendisti occupati è stato assunto dall’azienda ospitante, ma solo il 37,9% nelle scuole di management.', 'fr-cge'],
      ['L’Oréal counts more than 1,200 apprentices worldwide, on contracts of 12 to 36 months; TotalEnergies and Société Générale list work-study contracts beside internships.',
        'L’Oréal conta più di 1.200 apprendisti nel mondo, con contratti da 12 a 36 mesi; TotalEnergies e Société Générale elencano i contratti di alternanza accanto ai tirocini.', 'fr-loreal-int fr-total fr-sg-intern']
    ] },
    { name: ['Networks, personal relations and job boards', 'Reti, relazioni personali e siti di annunci'], r: 'network', p: 'first exp', basis: 'data', t: [
      ['Professional networks such as LinkedIn produced 14.1% of grande école jobs and personal relations 8.1%; specialist job sites and company websites 6.8% each. School forums and alumni actions produced only 4.9%, but they lead to the internships that convert.',
        'Le reti professionali come LinkedIn hanno prodotto il 14,1% dei posti dalle grandes écoles e le relazioni personali l’8,1%; i siti di annunci specializzati e i siti aziendali il 6,8% ciascuno. I forum delle scuole e le azioni degli ex studenti hanno prodotto solo il 4,9%, ma portano ai tirocini che si trasformano in assunzioni.', 'fr-pipelines fr-cge'],
      ['Apec, JobTeaser and Welcome to the Jungle carry the listings; the specialist boards are listed in the Where to apply row.',
        'Apec, JobTeaser e Welcome to the Jungle ospitano gli annunci; le bacheche specializzate sono elencate nella riga Dove candidarsi.', 'fr-lse fr-jobteaser fr-wttj']
    ] },
    { name: ['Graduate and management-trainee programmes', 'Programmi per laureati e management trainee'], r: 'scheme', p: 'first', basis: 'consensus', t: [
      ['A minority route, run by a few big groups: Société Générale’s graduate programmes last about two years, L’Oréal’s SeedZ had about 1,200 trainees worldwide in 2026, and Kering Keys Management and Retail are open to graduates from Bac+2. Luxury and bank programmes are small beside the groups’ total hiring.',
        'Una via minoritaria, gestita da pochi grandi gruppi: i graduate programme di Société Générale durano circa due anni, SeedZ di L’Oréal aveva circa 1.200 trainee nel mondo nel 2026, e Kering Keys Management e Retail sono aperti ai laureati dal Bac+2. I programmi del lusso e delle banche sono piccoli rispetto alle assunzioni totali dei gruppi.', 'fr-sg-grad fr-loreal-seedz fr-kering fr-lux']
    ] },
    { name: ['Public-sector competition (concours)', 'Concorso nel settore pubblico (concours)'], r: 'public', p: 'first exp', basis: 'consensus', t: [
      ['The state, local authorities and hospitals fill posts by competitive examination; more than 50 state concours were open on the civil-service portal on 8 October 2026, and the rules, including who may sit them, vary by post.',
        'Lo Stato, gli enti locali e gli ospedali coprono i posti per concorso; più di 50 concorsi statali erano aperti sul portale della funzione pubblica l’8 ottobre 2026, e le regole, comprese quelle su chi può partecipare, variano da posto a posto.', 'fr-fp fr-degrees']
    ] },
    { name: ['Experienced hire (Apec, LinkedIn, recruiters)', 'Assunzione di profili esperti (Apec, LinkedIn, selezionatori)'], r: 'direct', p: 'exp', basis: 'data', t: [
      ['Hiring of managers with six to ten years of experience rose 3% in 2025 while hiring of those with under six years fell 5%; 40% of managers plan to change firm within 12 months, and 61% of those under 35.',
        'Le assunzioni di quadri con sei-dieci anni di esperienza sono salite del 3% nel 2025 mentre quelle di chi ha meno di sei anni sono scese del 5%; il 40% dei quadri prevede di cambiare azienda entro 12 mesi, e il 61% tra gli under 35.', 'fr-letudiant fr-apec-baro']
    ] }
  ],

  cycle: [
    ['In autumn 2025 Apec expected hiring of beginner managers (cadres débutants) to fall 16% in 2025 after 19% in 2024, led by IT, engineering, legal, accounting and consulting services. Its April 2026 count (a different measure, managers with under six years of experience) shows 5% down in 2025 after 9% in 2024, with only 1% growth forecast for 2026.',
      'In autunno 2025 l’Apec prevedeva un calo del 16% nel 2025 delle assunzioni di quadri principianti (cadres débutants), dopo il 19% del 2024, guidato da informatica, ingegneria, servizi legali, contabili e di consulenza. Il suo conteggio di aprile 2026 (una misura diversa, i quadri con meno di sei anni di esperienza) mostra un calo del 5% nel 2025 dopo il 9% del 2024, con una crescita prevista di solo l’1% per il 2026.', 'fr-apec fr-letudiant'],
    ['Apec’s research director says firms hesitate to hire the youngest and prefer managers with a more solid track record, and that young people are also the first to benefit when hiring recovers.',
      'La direttrice degli studi dell’Apec dice che le aziende esitano ad assumere i più giovani e preferiscono quadri con un percorso più solido, e che i giovani sono anche i primi a beneficiare quando le assunzioni riprendono.', 'fr-letudiant'],
    ['In a slowdown firms keep interns and apprentices but convert fewer of them.',
      'In un rallentamento le aziende tengono tirocinanti e apprendisti ma ne assumono meno.', 'ours']
  ],

  fields: [
    { f: 'finance', t: [
      ['Paris M&A and corporate banking hire from HEC, ESSEC, ESCP, Polytechnique, CentraleSupélec, Dauphine and Sciences Po, through six-month stages in two cohorts: applications from September to November for January starts, February to April for July.',
        'L’M&A e il corporate banking di Parigi assumono da HEC, ESSEC, ESCP, Polytechnique, CentraleSupélec, Dauphine e Sciences Po, tramite stage di sei mesi in due tornate: candidature da settembre a novembre per partire a gennaio, da febbraio ad aprile per luglio.', 'fr-pipelines fr-calendar'],
      ['Société Générale’s Global Banking and Advisory programme starts new graduates on a permanent contract in a target role in Paris, with two eight-month rotations over 24 months.',
        'Il programma Global Banking and Advisory di Société Générale inserisce i neolaureati con un contratto a tempo indeterminato in un ruolo mirato a Parigi, con due rotazioni di otto mesi nell’arco di 24 mesi.', 'fr-sg-grad']
    ] },
    { f: 'accounting', t: [
      ['Audit is one of the largest graduate employers: KPMG and EY each hire 1,000 to 1,200 young graduates a year in France, most from business schools and many as former apprentices or interns; a junior starts on €38,000 to €48,000 gross. Consulting and audit together took 25% of young engineers and 20.6% of young managers of the 2023 cohorts.',
        'La revisione è uno dei maggiori datori di laureati: KPMG ed EY assumono ciascuna da 1.000 a 1.200 giovani laureati l’anno in Francia, per lo più dalle business school e molti ex apprendisti o tirocinanti; un junior parte da 38.000-48.000 € lordi. Consulenza e revisione insieme hanno assorbito il 25% dei giovani ingegneri e il 20,6% dei giovani manager delle promozioni 2023.', 'fr-audit']
    ] },
    { f: 'consulting', t: [
      ['Strategy firms recruit through césure and final-year stages that turn into offers; BCG’s selection runs in four steps: application, skills interview, case interview and team interview.',
        'Le società di consulenza strategica reclutano tramite stage di césure e di fine studi che diventano offerte; la selezione di BCG si svolge in quattro fasi: candidatura, colloquio sulle competenze, colloquio con caso e colloquio con il team.', 'fr-calendar fr-bcg']
    ] },
    { f: 'marketing', t: [
      ['Luxury and beauty groups hire through internships and rotational programmes: LVMH’s three-year SPRING programme gives a permanent contract from day one and asks for a master’s, fluent English and, ideally, French.',
        'I gruppi del lusso e della cosmetica assumono tramite tirocini e programmi a rotazione: il programma SPRING di LVMH, di tre anni, dà un contratto a tempo indeterminato dal primo giorno e chiede una magistrale, un inglese fluente e, possibilmente, il francese.', 'fr-mkt'],
      ['L’Oréal posts six-month Paris internships starting in January 2027 at €1,700 a month for master’s students, and runs SeedZ as a permanent-contract trainee programme with at least three rotations.',
        'L’Oréal pubblica tirocini di sei mesi a Parigi con inizio a gennaio 2027 a 1.700 € al mese per studenti di master, e gestisce SeedZ come programma trainee a tempo indeterminato con almeno tre rotazioni.', 'fr-loreal-int fr-loreal-seedz']
    ] },
    { f: 'business', t: [
      ['CAC 40 and mid-sized groups fill junior posts from their own apprentices and interns; ESSEC alone had 1,358 apprentices under contract, with BNP Paribas, L’Oréal, Sanofi and LVMH among regular hosts.',
        'I gruppi del CAC 40 e le medie imprese coprono i posti junior con i propri apprendisti e tirocinanti; la sola ESSEC aveva 1.358 apprendisti sotto contratto, con BNP Paribas, L’Oréal, Sanofi e LVMH tra le aziende ospitanti abituali.', 'fr-pipelines'],
      ['TotalEnergies recruited 12,015 people on permanent contracts in 2025 worldwide and publishes its fixed-term, work-study and internship offers on one site.',
        'TotalEnergies ha assunto 12.015 persone con contratti a tempo indeterminato nel 2025 nel mondo e pubblica su un unico sito le offerte a tempo determinato, di alternanza e di tirocinio.', 'fr-total']
    ] },
    { f: 'public', t: [
      ['The state and the Banque de France recruit by competitive examination (concours), in French; the senior civil service trains its intake at the Institut national du service public.',
        'Lo Stato e la Banque de France reclutano per concorso, in francese; l’alta funzione pubblica forma i suoi ingressi all’Institut national du service public.', 'fr-finlib ours']
    ] },
    { f: 'tech', t: [
      ['Junior tech hiring fell hard: management hires in IT dropped 21% between 2023 and 2025, and employment of under-30s in digital firms, apprentices aside, fell 7.4% in a year. Graduates of the engineering and computing schools (EPITA, Epitech) are often hired before finishing, through apprenticeships and final internships.',
        'Le assunzioni tech junior sono calate molto: le assunzioni di quadri nell’informatica sono scese del 21% tra il 2023 e il 2025, e l’occupazione degli under 30 nelle aziende digitali, apprendisti esclusi, è calata del 7,4% in un anno. I laureati delle scuole di ingegneria e informatica (EPITA, Epitech) vengono spesso assunti prima della fine, tramite apprendistato e stage finale.', 'fr-tech fr-epitech']
    ] },
    { f: 'ai', t: [
      ['In AI and quantitative roles the engineering schools and their maths masters (Polytechnique, ENS, CentraleSupélec, Mines) are the gate, and research labs place students in Paris start-ups and global labs through supervised internships.',
        'Nell’IA e nei ruoli quantitativi la porta sono le scuole d’ingegneria e i loro master di matematica (Polytechnique, ENS, CentraleSupélec, Mines), e i laboratori di ricerca collocano gli studenti nelle start-up parigine e nei laboratori globali tramite tirocini seguiti da un tutor.', 'fr-pipelines ours']
    ] },
    { f: 'cyber', t: [
      ['France counts about 15,000 unfilled cybersecurity posts; the national agency ANSSI and the Campus Cyber at La Défense anchor the field, and ANSSI’s training centre runs a long course with classes of about ten trainees.',
        'La Francia conta circa 15.000 posti vacanti in cybersicurezza; l’agenzia nazionale ANSSI e il Campus Cyber alla Défense sono i punti di riferimento, e il centro di formazione dell’ANSSI tiene un corso lungo con classi di circa dieci partecipanti.', 'fr-cyber fr-cfssi']
    ] }
  ],

  schools: [
    ['The grande école system is the filter: each school has a corporate-relations office, alumni in the firms, and companies it sends interns to year after year. University graduates reach the same firms more often through apprenticeships.',
      'Il sistema delle grandes écoles è il filtro: ogni scuola ha un ufficio relazioni con le aziende, ex studenti dentro le imprese e aziende a cui manda tirocinanti anno dopo anno. I laureati delle università arrivano alle stesse aziende più spesso tramite l’apprendistato.', 'fr-pipelines ours'],
    ['JobTeaser is the career space of more than 800 European schools and universities, and offers each student the listings of their own institution.',
      'JobTeaser è lo spazio carriere di più di 800 scuole e università europee, e offre a ogni studente gli annunci del proprio istituto.', 'fr-jobteaser']
  ],

  events: [
    ['School forums with companies, held on each campus every autumn, are where internships are found; alumni networks run their own events.',
      'I forum delle scuole con le aziende, che si tengono in ogni campus ogni autunno, sono dove si trovano i tirocini; le reti di ex studenti organizzano eventi propri.', 'fr-cge fr-lse ours'],
    ['JobTeaser runs physical and virtual events with employers for the students of its partner schools.',
      'JobTeaser organizza eventi fisici e virtuali con i datori di lavoro per gli studenti delle scuole partner.', 'fr-jobteaser']
  ],

  customs: [
    { k: 'season', v: 'cyclical', t: [
      ['Stage applications run in two waves: September to November for starts in January or February, and February to April for starts in July or August. L’Oréal was already advertising Paris internships for January 2027 in early October 2026.',
        'Le candidature agli stage seguono due ondate: da settembre a novembre per partenze a gennaio o febbraio, e da febbraio ad aprile per partenze a luglio o agosto. L’Oréal pubblicizzava già a inizio ottobre 2026 tirocini a Parigi per gennaio 2027.', 'fr-calendar fr-loreal-int']
    ] },
    { k: 'masters', v: 'expected', t: [
      ['Bac+5 is the standard entry level for managers: a grande école diploma or a master’s. Insee finds 7% unemployment among Bac+5 leavers one to four years out in 2023, against 42% for those with at most the lower-secondary certificate.',
        'Il Bac+5 è il livello standard d’ingresso per i quadri: un diploma di grande école o una magistrale. L’Insee rileva il 7% di disoccupazione tra chi ha il Bac+5 e ha finito gli studi da uno a quattro anni nel 2023, contro il 42% di chi ha al più il brevetto della scuola media.', 'fr-insee fr-pipelines']
    ] },
    { k: 'degrees', v: 'regulated', t: [
      ['France has no legal equivalence for foreign diplomas. For an unregulated job the employer judges your diploma and may ask for the comparability attestation of ENIC-NARIC France (France Éducation international); regulated professions need an authorisation from the competent authority.',
        'La Francia non ha equivalenza legale per i diplomi stranieri. Per un lavoro non regolamentato è il datore a valutare il diploma e può chiedere l’attestazione di comparabilità dell’ENIC-NARIC France (France Éducation international); le professioni regolamentate richiedono un’autorizzazione dell’autorità competente.', 'fr-degrees']
    ] },
    { k: 'brand', v: 'high', t: [
      ['The school decides which firms take you as an intern, and the conversion happens inside the firm; consultancies and banks name HEC, ESSEC, ESCP, Polytechnique and CentraleSupélec as their main sources.',
        'La scuola decide quali aziende ti prendono come tirocinante, e la conversione avviene dentro l’azienda; società di consulenza e banche indicano HEC, ESSEC, ESCP, Polytechnique e CentraleSupélec come fonti principali.', 'fr-pipelines fr-calendar']
    ] },
    { k: 'dual', v: 'strong', t: [
      ['32.5% of CGE respondents were apprentices, 51.6% in management schools; apprenticeship hosts produced 17.3% of all jobs.',
        'Il 32,5% dei rispondenti CGE era apprendista, il 51,6% nelle scuole di management; le aziende ospitanti degli apprendisti hanno prodotto il 17,3% di tutti i posti.', 'fr-pipelines']
    ] },
    { k: 'publicw', v: 'mid', t: [
      ['Public administration and defence employed 2.27 million people in 2025, 7.9% of all employed persons (Eurostat); the state recruits mainly by concours, and more than 50 were open in October 2026.',
        'L’amministrazione pubblica e la difesa impiegavano 2,27 milioni di persone nel 2025, il 7,9% di tutti gli occupati (Eurostat); lo Stato recluta soprattutto per concorso, e più di 50 erano aperti a ottobre 2026.', 'fr-eurostat-pa fr-fp']
    ] },
    { k: 'sponsorr', v: 'some', t: [
      ['Grandes écoles do place non-EU graduates: 14% of CGE 2025 respondents were foreign nationals, 86% of them from outside the EU. Some programmes are limited to EEA citizens (Société Générale’s V.I.E), and an apprenticeship contract needs no separate work authorisation. See the Visas section for the rules.',
        'Le grandes écoles collocano davvero i laureati extra-UE: il 14% dei rispondenti CGE 2025 era di nazionalità straniera, l’86% di loro da fuori UE. Alcuni programmi sono limitati ai cittadini SEE (il V.I.E di Société Générale), e un contratto di apprendistato non richiede un’autorizzazione al lavoro separata. Per le regole si veda la sezione Visti.', 'fr-pipelines fr-sg-vie fr-student']
    ] },
    { k: 'photo', v: 'common', t: [
      ['Still quite usual, at the top right; a French CV runs one page for a new graduate, two at most.',
        'Ancora piuttosto abituale, in alto a destra; un CV francese è di una pagina per un neolaureato, due al massimo.', 'fr-lse']
    ] },
    { k: 'cv', v: 'one', t: [
      ['One page is usually enough for a new graduate and two is the ceiling; L’Oréal asks for one page, in English unless the job says otherwise, with results and numbers rather than a list of tasks.',
        'Una pagina di solito basta a un neolaureato e due sono il massimo; L’Oréal chiede una pagina, in inglese salvo diversa indicazione dell’annuncio, con risultati e numeri anziché un elenco di compiti.', 'fr-lse fr-loreal-apply']
    ] },
    { k: 'letter', v: 'expected', t: [
      ['The lettre de motivation is the normal companion of the CV (why you, why the role, why the firm), and speculative applications (candidatures spontanées) are a recognised way in.',
        'La lettre de motivation è la normale compagna del CV (perché tu, perché il ruolo, perché l’azienda), e le candidature spontanee sono una via d’ingresso riconosciuta.', 'fr-lse']
    ] },
    { k: 'refs', v: 'later', t: [
      ['References are not part of a French application; they are taken, if at all, after an offer is in view.',
        'Le referenze non fanno parte di una candidatura francese; se si chiedono, è quando un’offerta è in vista.', 'ours']
    ] },
    { k: 'docs', v: 'copies', t: [
      ['Plain copies of diplomas and transcripts are the norm; for a foreign diploma the employer may ask for the comparability attestation instead of a translation, and it is the employer who decides.',
        'Le copie semplici di diplomi e transcript sono la norma; per un diploma straniero il datore può chiedere l’attestazione di comparabilità al posto di una traduzione, ed è lui a decidere.', 'fr-degrees']
    ] },
    { k: 'salary', v: 'asked', t: [
      ['Application forms and recruiters commonly ask for a salary expectation (prétentions salariales), and Apec finds graduates giving ground on it after a long search.',
        'I moduli di candidatura e i selezionatori chiedono spesso la retribuzione attesa (prétentions salariales), e l’Apec rileva che i laureati cedono su questo punto dopo una lunga ricerca.', 'fr-apec ours']
    ] },
    { k: 'check', v: 'some', t: [
      ['Banks and regulated firms check identity, diplomas and past employers; most other employers do not run formal background checks on graduates.',
        'Banche e aziende regolamentate verificano identità, diplomi e datori precedenti; la maggior parte degli altri datori non fa verifiche formali sui laureati.', 'ours']
    ] },
    { k: 'contact', v: 'mixed', t: [
      ['Applications through schools and job boards work for internships; the job then comes through the internship. Networks and personal relations still produced 22.2% of grande école jobs.',
        'Le candidature tramite le scuole e i siti di annunci funzionano per i tirocini; il lavoro poi arriva dal tirocinio. Reti e relazioni personali hanno comunque prodotto il 22,2% dei posti dalle grandes écoles.', 'fr-cge fr-pipelines']
    ] },
    { k: 'abroad', v: 'there', t: [
      ['An internship of more than two months needs an agreement signed by a school, so the route opens to enrolled students; a graduate abroad with no school behind them cannot take a stage.',
        'Un tirocinio di più di due mesi richiede una convenzione firmata da una scuola, quindi la via è aperta agli studenti iscritti; un laureato all’estero senza una scuola alle spalle non può fare uno stage.', 'fr-calendar fr-lse']
    ] },
    { k: 'language', v: 'local', t: [
      ['Recruiters expect a working grasp of French, and the apprenticeship needs a French contract. About 4% of French postings say French is not required.',
        'I selezionatori si aspettano un francese di lavoro, e l’apprendistato richiede un contratto francese. Circa il 4% degli annunci francesi dice che il francese non è richiesto.', 'fr-lse fr-pipelines fr-indeed']
    ] }
  ],

  rows: {
    process: [
      ['Large employers run two to four stages: an online application, a first interview with a recruiter, then one with the hiring manager. L’Oréal says interviews last 45 to 60 minutes and that a junior process takes about a month from CV to final interview.',
        'I grandi datori hanno da due a quattro fasi: una candidatura online, un primo colloquio con un selezionatore, poi uno con il responsabile di linea. L’Oréal dichiara che i colloqui durano da 45 a 60 minuti e che un processo per junior richiede circa un mese dal CV al colloquio finale.', 'fr-loreal-intv fr-loreal-apply'],
      ['Consulting adds cases: BCG’s process has four steps (application, skills interview, case interview, team interview). Bank and luxury programmes with a rotation, such as SeedZ, can take longer to answer.',
        'La consulenza aggiunge i case: il processo di BCG ha quattro fasi (candidatura, colloquio sulle competenze, colloquio con caso, colloquio con il team). I programmi di banche e lusso con rotazione, come SeedZ, possono impiegare più tempo a rispondere.', 'fr-bcg fr-loreal-intv'],
      ['The hiring market is slower than the interviews suggest: of Bac+5 graduates of 2024, 84% called their job search difficult, 38% needed six months or more, and 57% sent more than 30 applications.',
        'Il mercato è più lento di quanto suggeriscano i colloqui: tra i laureati Bac+5 del 2024, l’84% ha definito difficile la ricerca, il 38% ha impiegato sei mesi o più e il 57% ha inviato più di 30 candidature.', 'fr-apec'],
      ['Interviews are in French unless the role is international; ask which language before the interview. Business dress is expected in banking, audit and consulting.',
        'I colloqui sono in francese salvo che il ruolo sia internazionale; chiedi in che lingua prima del colloquio. In banca, revisione e consulenza ci si aspetta un abbigliamento formale.', 'ours']
    ],
    offer: [
      ['A permanent contract (CDI) usually starts with a probation period of up to four months for managers (cadres), renewable once to eight months only if the sector agreement allows it, the contract says so and you agree in writing. A CDD (fixed-term) is lawful only for listed reasons.',
        'Un contratto a tempo indeterminato (CDI) inizia di solito con un periodo di prova fino a quattro mesi per i quadri (cadres), rinnovabile una sola volta fino a otto mesi solo se il contratto di settore lo permette, il contratto lo prevede e tu acconsenti per iscritto. Un CDD (a tempo determinato) è lecito solo per motivi elencati.', 'fr-prob fr-contract'],
      ['Notice to end probation runs from 24 hours to one month, depending on how long you have been there; a CDD ending pays at least 10% of total gross pay unless you are kept on.',
        'Il preavviso per interrompere la prova va da 24 ore a un mese, secondo la permanenza; la fine di un CDD dà diritto ad almeno il 10% della retribuzione lorda totale salvo assunzione a tempo indeterminato.', 'fr-contract'],
      ['The grande école 2026 survey puts the average first gross salary at €39,679 excluding bonus, with more than 80% on a CDI; a stage over two months must pay at least €4.50 an hour in 2026, and L’Oréal’s Paris internships pay €1,700 a month.',
        'L’indagine 2026 delle grandes écoles indica uno stipendio lordo medio di primo impiego di 39.679 € esclusi i bonus, con più dell’80% a tempo indeterminato; uno stage di oltre due mesi deve pagare almeno 4,50 € l’ora nel 2026, e i tirocini di L’Oréal a Parigi pagano 1.700 € al mese.', 'fr-lux fr-gratif fr-loreal-int'],
      ['Cohort programmes publish one pay level; for other roles an offer is discussed once, at the offer.',
        'I programmi a coorte pubblicano un solo livello retributivo; per gli altri ruoli l’offerta si discute una volta, al momento dell’offerta.', 'ours']
    ],
    sponsor: [
      ['Employers that sponsor are the large groups and the grandes écoles’ partners: 14% of the 2025 CGE respondents were foreign nationals, 86% of them non-EU, so a non-EU graduate of a grande école is a known profile to a recruiter.',
        'I datori che sponsorizzano sono i grandi gruppi e i partner delle grandes écoles: il 14% dei rispondenti CGE 2025 era di nazionalità straniera, l’86% di loro extra-UE, quindi un laureato extra-UE di una grande école è un profilo noto a un selezionatore.', 'fr-pipelines'],
      ['A master’s graduate from France who holds the job-search permit can move to a salaried permit without a labour-market test if the contract pays at least 1.5 times the minimum wage (€33,606 gross a year in the library’s 2026 figures), so tell the employer the salary clears that line.',
        'Un laureato magistrale in Francia con il permesso per cercare lavoro può passare a un permesso da dipendente senza test del mercato del lavoro se il contratto paga almeno 1,5 volte il salario minimo (33.606 € lordi l’anno nelle cifre 2026 della biblioteca), quindi di’ al datore che lo stipendio supera quella soglia.', 'fr-visa'],
      ['An apprenticeship contract validated by the OPCO or the Dreets needs no separate work authorisation, and the employer must notify the préfecture two working days before hiring; the real barrier is usually French-language interviews.',
        'Un contratto di apprendistato convalidato dall’OPCO o dalla Dreets non richiede una separata autorizzazione al lavoro, e il datore deve avvisare la prefettura due giorni lavorativi prima dell’assunzione; l’ostacolo reale sono di solito i colloqui in francese.', 'fr-student'],
      ['Ask at the first interview, not at the offer, and state the permit and its end date. Some programmes exclude non-EEA candidates outright: Société Generale’s V.I.E is limited to EEA citizens who are French tax residents.',
        'Chiedi al primo colloquio, non all’offerta, e indica il permesso e la sua scadenza. Alcuni programmi escludono del tutto i candidati extra-SEE: il V.I.E di Société Generale è limitato ai cittadini SEE residenti fiscali in Francia.', 'fr-sg-vie ours']
    ],
    where: [
      ['Apec is the main French board for graduates, managers and executives and offers free one-to-one appointments; JobTeaser lists more than 30,000 offers from internships to first jobs; Welcome to the Jungle and HelloWork are the other general boards.',
        'Apec è la principale bacheca francese per laureati, quadri e dirigenti e offre appuntamenti individuali gratuiti; JobTeaser elenca più di 30.000 offerte dai tirocini al primo impiego; Welcome to the Jungle e HelloWork sono le altre bacheche generaliste.', 'fr-lse fr-jobteaser fr-wttj fr-hellowork'],
      ['Specialist boards: EFinancialCareers and JobFinance for finance, Les Jeudis for IT, Fashionjobs for fashion and luxury, BIEP for the state civil service, La Gazette des Communes for local government.',
        'Bacheche specializzate: EFinancialCareers e JobFinance per la finanza, Les Jeudis per l’IT, Fashionjobs per moda e lusso, BIEP per la funzione pubblica statale, La Gazette des Communes per gli enti locali.', 'fr-lse'],
      ['Employer sites carry the programmes: L’Oréal (up to three applications every 30 days), Société Générale (internships, work-study, graduate programmes and V.I.E), TotalEnergies, Kering Keys.',
        'I siti dei datori ospitano i programmi: L’Oréal (fino a tre candidature ogni 30 giorni), Société Générale (tirocini, alternanza, graduate programme e V.I.E), TotalEnergies, Kering Keys.', 'fr-loreal-apply fr-sg-intern fr-total fr-kering'],
      ['For public jobs, the civil-service portal lists the state concours calendar and Choisir le service public lists open competitions.',
        'Per i posti pubblici, il portale della funzione pubblica elenca il calendario dei concorsi statali e Choisir le service public elenca i concorsi aperti.', 'fr-fp fr-csp'],
      ['Business France’s V.I.E (an international mission of 6 to 24 months for EEA citizens aged 18 to 28) is an entry route into French groups for those who can leave France for the first post.',
        'Il V.I.E di Business France (una missione internazionale da 6 a 24 mesi per cittadini SEE tra 18 e 28 anni) è una via d’ingresso nei gruppi francesi per chi può lasciare la Francia per il primo incarico.', 'fr-vie']
    ],
    mistakes: [
      ['Waiting for a graduate scheme: in France the stage is the channel, so choose the stage host as the employer you want to join.',
        'Aspettare un graduate scheme: in Francia il canale è lo stage, quindi scegli come ospitante l’azienda in cui vuoi entrare.', 'fr-pipelines fr-calendar'],
      ['Missing the windows: stage applications for January starts open in September and fill by November.',
        'Perdere le finestre: le candidature agli stage con inizio a gennaio aprono a settembre e si riempiono entro novembre.', 'fr-calendar'],
      ['Graduating before finding the stage: a stage of more than two months needs an agreement from an enrolled school, so a graduate with no school cannot sign one.',
        'Laurearsi prima di trovare lo stage: uno stage di oltre due mesi richiede una convenzione di una scuola a cui si è iscritti, quindi un laureato senza scuola non può firmarlo.', 'fr-calendar fr-gratif'],
      ['Assuming English is enough: only about 4% of French postings say French is not required, mostly in investment banking, trading and tech.',
        'Pensare che basti l’inglese: solo circa il 4% degli annunci francesi dice che il francese non è richiesto, soprattutto in investment banking, trading e tech.', 'fr-indeed fr-cities'],
      ['Mass-applying to one employer: L’Oréal accepts three applications every 30 days, so choose the three roles.',
        'Candidarsi a tappeto presso un solo datore: L’Oréal accetta tre candidature ogni 30 giorni, quindi scegli i tre ruoli.', 'fr-loreal-apply'],
      ['Treating a slow search as personal failure: 57% of Bac+5 graduates of 2024 sent more than 30 applications.',
        'Vivere una ricerca lenta come un fallimento personale: il 57% dei laureati Bac+5 del 2024 ha inviato più di 30 candidature.', 'fr-apec']
    ]
  },

  lang: [
    { f: 'finance', v: 'bilingual', lv: 'B2', t: [
      ['Paris banks work in both languages: Société Générale asks for fluent English at minimum B2 for its V.I.E, and about 4% of French postings overall drop the French requirement, concentrated in investment banking, trading and tech.',
        'Le banche di Parigi lavorano in entrambe le lingue: Société Générale chiede un inglese fluente, almeno B2, per il suo V.I.E, e circa il 4% degli annunci francesi in generale rinuncia al requisito del francese, soprattutto in investment banking, trading e tech.', 'fr-sg-vie fr-indeed fr-cities']
    ] },
    { f: 'accounting', v: 'local', lv: 'C1', t: [
      ['Statutory audit is signed under French titles (expert-comptable, commissaire aux comptes), so a full career needs French; the Big Four hire their juniors in French, mostly from business schools.',
        'La revisione legale si firma con titoli francesi (expert-comptable, commissaire aux comptes), quindi una carriera completa richiede il francese; le Big Four assumono i loro junior in francese, per lo più dalle business school.', 'fr-acct fr-audit']
    ] },
    { f: 'marketing', v: 'bilingual', lv: 'B2', t: [
      ['L’Oréal says English is its main working language and asks for a CV in English; LVMH’s SPRING asks for fluent English and, ideally, French. Retail and brand roles in Paris still sit in French-speaking teams.',
        'L’Oréal dice che l’inglese è la sua principale lingua di lavoro e chiede un CV in inglese; SPRING di LVMH chiede un inglese fluente e, possibilmente, il francese. I ruoli retail e di marca a Parigi restano comunque in team francofoni.', 'fr-loreal-apply fr-mkt ours']
    ] },
    { f: 'public', v: 'local', lv: 'C1', t: [
      ['The state and local government recruit by concours in French, and the rules on who may sit them vary by post, so read each notice.',
        'Lo Stato e gli enti locali reclutano per concorso in francese, e le regole su chi può partecipare variano da posto a posto, quindi leggi ogni bando.', 'fr-degrees ours']
    ] },
    { f: 'tech', v: 'bilingual', lv: 'B2', t: [
      ['Tech is one of the few places where English-only entry is realistic; Epitech Nantes says 75% of its students are hired on permanent contracts before they finish.',
        'La tecnologia è uno dei pochi settori in cui l’ingresso solo in inglese è realistico; Epitech Nantes dichiara che il 75% dei suoi studenti è assunto a tempo indeterminato prima di finire.', 'fr-cities fr-epitech']
    ] }
  ],

  programmes: [
    { n: 'Global Banking and Advisory Graduate Programme', o: 'Société Générale', f: 'finance', in: null, w: null, lang: 'FR EN', intl: 'unknown', ids: 'fr-sg-grad' },
    { n: 'General Inspection Graduate Programme', o: 'Société Générale', f: 'finance', in: null, w: null, lang: 'FR EN', intl: 'unknown', ids: 'fr-sg-grad' },
    { n: 'V.I.E international corporate volunteer programme', o: 'Société Générale', f: 'finance', in: 259, w: null, lang: 'EN', intl: 'eu', ids: 'fr-sg-vie' },
    { n: 'SeedZ Management Trainee Programme', o: 'L’Oréal', f: 'marketing', in: null, w: null, lang: 'EN FR', intl: 'unknown', ids: 'fr-loreal-seedz' },
    { n: 'Internships and apprenticeships, Paris', o: 'L’Oréal', f: 'marketing', in: null, w: null, lang: 'EN FR', intl: 'unknown', ids: 'fr-loreal-int' },
    { n: 'Kering Keys Management and Retail', o: 'Kering', f: 'marketing', in: null, w: null, lang: 'FR EN', intl: 'unknown', ids: 'fr-kering' },
    { n: 'SPRING', o: 'LVMH', f: 'marketing', in: null, w: null, lang: 'EN FR', intl: 'unknown', ids: 'fr-mkt' },
    { n: 'Work-study and internship offers', o: 'TotalEnergies', f: 'business', in: null, w: null, lang: 'FR EN', intl: 'unknown', ids: 'fr-total' },
    { n: 'Student and graduate programmes', o: 'EY France', f: 'accounting', in: 1000, w: null, lang: 'FR', intl: 'unknown', ids: 'fr-audit' },
    { n: 'CFSSI training centre', o: 'ANSSI', f: 'cyber', in: null, w: null, lang: 'FR', intl: 'unknown', ids: 'fr-cfssi' }
  ],

  outcomes: [
    ['The grandes écoles’ net employment rate six months after graduating was 76% in the 2026 survey against 90.5% in 2023, but the response rate fell to 36.6%, so compare with care; the average first gross salary was €39,679 excluding bonus.',
      'Il tasso netto di occupazione delle grandes écoles a sei mesi dalla laurea era del 76% nell’indagine 2026 contro il 90,5% del 2023, ma il tasso di risposta è sceso al 36,6%, quindi i confronti vanno fatti con cautela; lo stipendio lordo medio di primo impiego era di 39.679 € esclusi i bonus.', 'fr-brief fr-lux'],
    ['Apec finds that 70% of the Bac+5 class of 2024 held a salaried job in France twelve months after graduating, two points fewer than the class before, in every type of degree.',
      'L’Apec rileva che il 70% della promozione Bac+5 del 2024 aveva un lavoro dipendente in Francia dodici mesi dopo la laurea, due punti in meno della promozione precedente, in ogni tipo di diploma.', 'fr-apec-baro']
  ],

  sources: {
    'fr-cge': ['data', 'Conférence des grandes écoles, Enquête Insertion 2026 (class of 2025), June 2026', 'https://www.cge.asso.fr/wp-content/uploads/2026/06/CGE-Enquete-Insertion-2026-Rapport-VF.pdf', '2026-10-02'],
    'fr-pipelines': ['data', 'Admetia research library: getting-in/employer-pipelines.md §2 and §9 (CGE 2026, ESSEC 2026)', 'research/getting-in/employer-pipelines.md', '2026-10-02'],
    'fr-calendar': ['practitioner consensus', 'Admetia research library: getting-in/recruiting-calendar.md §3.1 and §4 (stage, césure, convention de stage)', 'research/getting-in/recruiting-calendar.md', '2026-10-08'],
    'fr-apec': ['data', 'Apec hiring forecasts for young managers, reported by Banque des Territoires, 4 November 2025', 'https://www.banquedesterritoires.fr/les-previsions-demploi-des-cadres-en-berne-affectent-les-jeunes-diplomes', '2026-10-08'],
    'fr-apec-baro': ['data', 'Apec, Baromètre du 1er trimestre 2026 (February 2026)', 'https://corporate.apec.fr/files/live/sites/corporate/files/Nos%20etudes/PDF/Barometre%20Apec%20T1%202026.pdf', '2026-10-08'],
    'fr-letudiant': ['data', 'L’Étudiant: young managers’ recruitment still falling in 2025, according to Apec (2 April 2026)', 'https://www.letudiant.fr/jobsstages/les-recrutements-de-jeunes-cadres-encore-en-baisse-en-2025-selon-l-apec.html', '2026-10-08'],
    'fr-insee': ['data', 'Insee, Formations et emploi, 2025 edition: unemployment during entry into working life (sheet 2.3)', 'https://www.insee.fr/fr/statistiques/fichier/8305516/BFE2025-F9.pdf', '2026-10-08'],
    'fr-eurostat-pa': ['data', 'Eurostat: employed persons by detailed activity (lfsa_egan22d), public administration and defence (O84)', 'https://ec.europa.eu/eurostat/databrowser/view/lfsa_egan22d/default/table', '2026-10-08'],
    'fr-lse': ['practitioner consensus', 'LSE Careers: country profile, France', 'https://info.lse.ac.uk/current-students/careers/information-and-resources/country-profiles/france', '2026-10-08'],
    'fr-audit': ['practitioner consensus', 'L’Essentiel de l’Éco: audit, the Big Four’s career deal tested by new generations', 'https://lessentieldeleco.fr/7031-audit-deal-de-carriere-des-big-four-a-lepreuve-des-nouvelles-generations/', '2026-10-08'],
    'fr-mkt': ['employer-stated', 'Admetia research library: careers/marketing.md §1 (LVMH SPRING programmes)', 'research/careers/marketing.md', '2026-10-02'],
    'fr-finlib': ['employer-stated', 'Admetia research library: careers/finance.md §1.5 (central banks recruit by competitive examination)', 'research/careers/finance.md', '2026-10-02'],
    'fr-tech': ['data', 'L’Essentiel de l’Éco: IT job offers collapse (Apec and INSEE figures)', 'https://lessentieldeleco.fr/6641-informatique-effondrement-des-offres-demploi/', '2026-10-07'],
    'fr-epitech': ['employer-stated', 'Le Journal des Entreprises: Epitech Nantes, 75% of our students are hired on permanent contracts before finishing', 'https://www.lejournaldesentreprises.com/article/epitech-nantes-75-de-nos-etudiants-sont-embauches-en-cdi-avant-la-fin-de-leurs-etudes-133655', '2026-10-07'],
    'fr-cyber': ['data', 'IT-Connect: ANSSI and the Education ministry launch DemainSpécialisteCyber (15,000 vacant posts)', 'https://www.it-connect.fr/pour-recruter-dans-la-cyber-lanssi-et-leducation-nationale-lance-demain-specialiste-cyber/', '2026-10-07'],
    'fr-cfssi': ['employer-stated', 'ANSSI: the ESSI long course at the CFSSI training centre (class size about ten)', 'https://cyber.gouv.fr/formation-essi-expert-en-securite-des-systemes-dinformation', '2026-10-09'],
    'fr-loreal-int': ['employer-stated', 'L’Oréal careers: internships and apprenticeships', 'https://careers.loreal.com/en/internship-apprenticeship', '2026-10-08'],
    'fr-loreal-seedz': ['employer-stated', 'L’Oréal careers: SeedZ Management Trainee Programme', 'https://careers.loreal.com/en/loreal-seedz-management-trainee-programme', '2026-10-08'],
    'fr-loreal-apply': ['employer-stated', 'L’Oréal careers: get ready to apply', 'https://careers.loreal.com/en/get-ready-to-apply', '2026-10-08'],
    'fr-loreal-intv': ['employer-stated', 'L’Oréal careers: get ready to interview', 'https://careers.loreal.com/en/get-ready-to-interview', '2026-10-08'],
    'fr-sg-grad': ['employer-stated', 'Société Générale careers: graduate programmes', 'https://careers.societegenerale.com/en/students-graduates/graduate-programmes', '2026-10-08'],
    'fr-sg-vie': ['employer-stated', 'Société Générale careers: International Internship Program (V.I.E)', 'https://careers.societegenerale.com/en/vie', '2026-10-08'],
    'fr-sg-intern': ['employer-stated', 'Société Générale careers: internships and trainee programmes', 'https://careers.societegenerale.com/en/internships-trainee-programs', '2026-10-08'],
    'fr-kering': ['employer-stated', 'Kering: Kering Keys programmes', 'https://www.kering.com/en/talent/empowering-talent/kering-keys-programs/', '2026-10-08'],
    'fr-total': ['employer-stated', 'TotalEnergies careers', 'https://www.totalenergies.com/careers', '2026-10-08'],
    'fr-bcg': ['employer-stated', 'BCG careers: consulting interview process', 'https://careers.bcg.com/global/en/interview-process', '2026-10-08'],
    'fr-jobteaser': ['employer-stated', 'JobTeaser France: home page', 'https://www.jobteaser.com/fr', '2026-10-08'],
    'fr-wttj': ['employer-stated', 'Welcome to the Jungle France: home page', 'https://www.welcometothejungle.com/fr', '2026-10-08'],
    'fr-hellowork': ['employer-stated', 'HelloWork: job board home page', 'https://www.hellowork.com', '2026-10-08'],
    'fr-fp': ['data', 'Fonction publique (DGAFP): state civil service portal, concours calendar', 'https://www.fonction-publique.gouv.fr', '2026-10-08'],
    'fr-csp': ['data', 'Choisir le service public: public-sector jobs and concours', 'https://www.choisirleservicepublic.gouv.fr', '2026-10-08'],
    'fr-degrees': ['data', 'Euroguidance France: holders of a foreign diploma (comparability attestation, regulated professions, concours)', 'https://www.euroguidance-france.org/reconnaissance-des-diplomes/titulaire-diplome-etranger/', '2026-10-08'],
    'fr-vie': ['data', 'Euroguidance France: Volontariat international en entreprise (V.I.E)', 'https://www.euroguidance-france.org/financer-sa-mobilite/volontariat-international-entreprise-vie/', '2026-10-08'],
    'fr-gratif': ['data', 'Service-public.gouv.fr: minimum gratification of a student intern', 'https://www.service-public.gouv.fr/particuliers/vosdroits/F32131', '2026-10-08'],
    'fr-prob': ['data', 'Force Ouvrière: length and renewal of the probation period in a CDI (Code du travail)', 'https://www.force-ouvriere.fr/je-suis-en-cdi-quelle-est-la-duree-de-ma-periode-d-essai-et-peut', '2026-10-08'],
    'fr-contract': ['data', 'Admetia research library: getting-in/applications-and-interviews.md §7 (probation, CDD, notice; service-public F1643, F36)', 'research/getting-in/applications-and-interviews.md', '2026-10-08'],
    'fr-visa': ['data', 'Admetia research library: visas_immigration/france guide (RECE card, 1.5 x SMIC, Talent card)', 'research/visas_immigration/france/france_visas_immigration_guide.md', '2026-10-08'],
    'fr-student': ['data', 'Admetia research library: places/student-logistics.md (apprenticeship exemption; service-public F2728)', 'research/places/student-logistics.md', '2026-10-08'],
    'fr-lux': ['data', 'Admetia research library: careers/luxury-and-fashion.md (CGE 2026 first-job pay and CDI share)', 'research/careers/luxury-and-fashion.md', '2026-10-08'],
    'fr-brief': ['data', 'Admetia research library: countries/fr-france.md §2 (CGE 2026 net employment; Eurostat)', 'research/countries/fr-france.md', '2026-10-08'],
    'fr-cities': ['data', 'Admetia research library: countries/fr-france.md §2 and places/countries-and-cities.md §2 (Indeed Hiring Lab, October 2024)', 'research/countries/fr-france.md', '2026-10-08'],
    'fr-indeed': ['data', 'Indeed Hiring Lab: how language flexibility shapes job opportunities for migrants, 10 October 2024', 'https://hiringlab.indeed.com/uk/blog/2024/10/10/how-language-flexibility-shapes-job-opportunities-for-migrants/', '2026-10-08'],
    'fr-acct': ['practitioner consensus', 'Admetia research library: careers/accounting-and-corporate.md (national titles are the licence to sign)', 'research/careers/accounting-and-corporate.md', '2026-10-08']
  }
});
