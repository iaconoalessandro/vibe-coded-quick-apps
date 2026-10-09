/* How hiring works: United States. From research/getting-in/employer-pipelines.md
 * §6, §9 and §11, breaking-in.md §1 and §3, recruiting-calendar.md §2, and
 * places/beyond-europe.md §1, with reads on 7 and 8 Oct 2026 (NACE, OPM Pathways,
 * FTC, Interstride, NFAP, Bain, JPMorgan, Deloitte US, Simplify, pay-transparency
 * and CPA-licensure trackers, US Department of Labor). */
ATLAS.addEntry({
  id: 'US',
  checked: '2026-10-08',
  review: '2027-04-30',

  lead: [
    ['American graduate hiring runs through the summer internship. Firms recruit interns on campus a year or more ahead, then offer full-time jobs to the ones they liked: employers made full-time offers to about 62% of their 2024 interns.',
      'Le assunzioni dei laureati americani passano per lo stage estivo. Le aziende reclutano gli stagisti nei campus con un anno o più di anticipo, poi offrono il posto fisso a quelli che sono piaciuti: i datori hanno fatto offerte a tempo pieno a circa il 62% dei loro stagisti del 2024.', 'us-nace'],
    ['Referrals carry the screen: in one large firm, referred applicants were 6% of applicants but 29% of hires.',
      'Le segnalazioni fanno superare il primo filtro: in una grande azienda i candidati segnalati erano il 6% dei candidati ma il 29% degli assunti.', 'us-breaking'],
    ['For a European without US work rights the door is narrow: international students’ post-graduation employment is 44.6% against 62.1% for domestic peers, and many campus employers have policies against visa sponsorship.',
      'Per un europeo senza diritto di lavorare negli USA la porta è stretta: l’occupazione post-laurea degli studenti internazionali è del 44,6% contro il 62,1% dei coetanei americani, e molti datori che reclutano nei campus hanno politiche contro la sponsorizzazione del visto.', 'us-interstride us-nace-sponsor']
  ],

  ways: [
    { name: ['Summer internship to return offer', 'Dallo stage estivo all’offerta di ritorno'], r: 'intern', p: 'first intern', basis: 'data', t: [
      ['In-person internships convert far better than hybrid ones: an average offer rate of 72% against about 56%.',
        'Gli stage in presenza si trasformano in assunzioni molto più di quelli ibridi: un tasso medio di offerta del 72% contro circa il 56%.', 'us-nace'],
      ['The offer rate for the 2024 intern class was 62% across 247 responding organisations, the lowest in five years; international students are 30% less likely to get an offer from their internship employer and only 25% of them complete off-campus internships, against 42% of domestic students.',
        'Il tasso di offerta per la classe di stagisti del 2024 è stato del 62% su 247 organizzazioni rispondenti, il più basso in cinque anni; gli studenti internazionali hanno il 30% di probabilità in meno di ricevere un’offerta dal datore del loro stage e solo il 25% di loro svolge stage fuori dal campus, contro il 42% degli studenti americani.', 'us-nace us-interstride']
    ] },
    { name: ['On-campus recruiting', 'Selezioni nei campus (on-campus recruiting)'], r: 'campus', p: 'first', basis: 'data', t: [
      ['Banks, consultancies and large firms send recruiting teams to a list of target schools, collect CV books, hold presentations and run first-round interviews on campus; students elsewhere compete in the online pool.',
        'Banche, consulenze e grandi aziende mandano squadre di selezione in un elenco di università target, raccolgono i libri dei CV, tengono presentazioni e fanno i primi colloqui nel campus; gli studenti di altre università competono nel bacino online.', 'us-pipelines'],
      ['The timing is early: tech postings open from July, the Big Four from August to October, consulting from March to August the year before, and investment banking from December to March for the following summer.',
        'I tempi sono anticipati: gli annunci tech si aprono da luglio, le Big Four da agosto a ottobre, la consulenza da marzo ad agosto dell’anno prima, e le banche d’investimento da dicembre a marzo per l’estate successiva.', 'us-simplify']
    ] },
    { name: ['Networking and referrals', 'Networking e segnalazioni'], r: 'network', p: 'first exp', basis: 'data', t: [
      ['Informational calls with alumni, then a request to pass the CV on, are the standard way to reach firms that do not visit your school.',
        'Chiamate informative con ex studenti, poi la richiesta di girare il CV, sono il modo standard per arrivare alle aziende che non visitano la tua università.', 'us-breaking'],
      ['The advantage is concentrated at the interview stage: referred applicants were 6% of applicants, 21% of interviewees and 29% of hires, so a referral gets you read but does not decide the offer.',
        'Il vantaggio è concentrato nella fase dei colloqui: i candidati segnalati erano il 6% dei candidati, il 21% di chi veniva intervistato e il 29% degli assunti, quindi una segnalazione ti fa leggere ma non decide l’offerta.', 'us-breaking']
    ] },
    { name: ['Posted openings, rotational programmes and start-ups', 'Annunci pubblicati, programmi a rotazione e start-up'], r: 'direct', p: 'first exp', basis: 'consensus', t: [
      ['Most large employers take applications on their own career sites and judge them as they arrive: Deloitte lists internships, full-time roles and a two-year Corporate Finance programme, and JPMorganChase runs four stages (explore, apply, interview, decision) with several people over multiple rounds.',
        'La maggior parte dei grandi datori accetta candidature sui propri siti carriere e le valuta man mano che arrivano: Deloitte elenca stage, posti a tempo pieno e un programma biennale di Corporate Finance, e JPMorganChase prevede quattro fasi (esplora, candidati, colloquia, decisione) con più persone in più giri.', 'us-deloitte us-jpm'],
      ['Start-ups recruit later, from December 2026 to March 2027 for summer 2027, and are a fallback if the fall cycle failed; most big employers stop reading once their pipeline is full.',
        'Le start-up reclutano più tardi, da dicembre 2026 a marzo 2027 per l’estate 2027, e sono un ripiego se il ciclo autunnale è andato male; la maggior parte dei grandi datori smette di leggere quando la propria rosa è piena.', 'us-simplify']
    ] },
    { name: ['Federal government (Pathways)', 'Governo federale (Pathways)'], r: 'public', p: 'first', basis: 'data', t: [
      ['The federal Pathways Program has an Internship Program (480 hours, conversion within 180 days after the degree) and a Recent Graduates Program for degrees completed within two years, applied for on USAJOBS; non-citizens can be appointed only if lawful permanent residents or otherwise authorised to work, and noncompetitive conversion needs US citizenship.',
        'Il Pathways Program federale ha un Internship Program (480 ore, conversione entro 180 giorni dopo la laurea) e un Recent Graduates Program per titoli conseguiti da non più di due anni, a cui ci si candida su USAJOBS; i non cittadini possono essere assunti solo se residenti permanenti o comunque autorizzati a lavorare, e la conversione non competitiva richiede la cittadinanza americana.', 'us-opm']
    ] },
    { name: ['Company transfer', 'Trasferimento infragruppo'], r: 'transfer', p: 'exp', basis: 'consensus', t: [
      ['Routes that need no US degree exist, among them the intracompany L-1 visa, so an employee of a multinational can move to its US office after working for it abroad; see Visas for the rules.',
        'Esistono vie che non richiedono una laurea americana, tra cui il visto infragruppo L-1, quindi un dipendente di una multinazionale può trasferirsi nella sua sede americana dopo aver lavorato per essa all’estero; per le regole vedi Visti.', 'us-beyond']
    ] }
  ],

  cycle: [
    ['Employers’ plans for the class of 2026 swung from flat in the autumn to a 5.6% rise in the spring update, led by large firms (employers with over 5,000 staff plan 8.7% more); the intern offer rate for 2024 interns was the lowest in five years.',
      'I piani dei datori per la classe del 2026 sono passati da stabili in autunno a un aumento del 5,6% nell’aggiornamento di primavera, guidato dalle grandi aziende (i datori con oltre 5.000 dipendenti prevedono l’8,7% di assunzioni in più); il tasso di offerta agli stagisti del 2024 è stato il più basso in cinque anni.', 'us-nace-outlook us-nace'],
    ['Summer 2027 applications opened in waves: finance from December 2025 to March 2026, consulting from March to August 2026, tech from July 2026 and the Big Four from August to October 2026.',
      'Le candidature per l’estate 2027 si sono aperte a ondate: la finanza da dicembre 2025 a marzo 2026, la consulenza da marzo ad agosto 2026, il tech da luglio 2026 e le Big Four da agosto a ottobre 2026.', 'us-simplify us-cal'],
    ['The graduate market is soft: recent graduates had an unemployment rate of about 5.6% in the second quarter of 2026 against 4.3% for all workers, and 42% were underemployed.',
      'Il mercato dei laureati è debole: i neolaureati avevano un tasso di disoccupazione di circa il 5,6% nel secondo trimestre 2026 contro il 4,3% di tutti i lavoratori, e il 42% era sottoccupato.', 'us-nyfed']
  ],

  fields: [
    { f: 'finance', t: [
      ['Wall Street recruits summer analysts six to twelve months earlier than London; non-target applicants are under a tenth of junior classes and rely on cold emails and alumni referrals.',
        'Wall Street recluta gli analisti estivi da sei a dodici mesi prima di Londra; i candidati di università non target sono meno di un decimo delle classi junior e contano su email a freddo e segnalazioni di ex studenti.', 'us-calendar us-pipelines'],
      ['Goldman Sachs’s 2027 Summer Analyst Program is a nine-to-ten-week internship for undergraduates in the third or penultimate year, and the one-year finance master’s at MIT reported 97.1% of job seekers with an offer within six months.',
        'Il Summer Analyst Program 2027 di Goldman Sachs è uno stage di nove-dieci settimane per studenti del terzo o penultimo anno, e il master in finanza di un anno del MIT ha riportato il 97,1% dei candidati con un’offerta entro sei mesi.', 'us-gs us-mit']
    ] },
    { f: 'accounting', t: [
      ['The Big Four recruit accounting graduates through campus internships, but PwC US planned to cut entry-level hiring by almost a third over three years as AI and offshoring take on junior audit work.',
        'Le Big Four reclutano laureati in contabilità tramite stage nei campus, ma PwC US prevedeva di tagliare di quasi un terzo le assunzioni d’ingresso in tre anni, mentre IA e delocalizzazione assorbono il lavoro di revisione junior.', 'us-acc'],
      ['CPA licensing is set by each state, and the 150-hour rule is being replaced: 39 jurisdictions had signed changes by October 2026, so check your state board’s route before planning a fifth year.',
        'L’abilitazione CPA è fissata da ogni stato, e la regola delle 150 ore viene sostituita: 39 giurisdizioni avevano firmato modifiche entro ottobre 2026, quindi controlla il percorso del consiglio del tuo stato prima di pianificare un quinto anno.', 'us-cpa']
    ] },
    { f: 'consulting', t: [
      ['Strategy firms recruit on the same target campuses as the banks (the Ivy-Plus colleges, Berkeley, Michigan, Virginia), mostly from summer internships, and hire MBAs from the top business schools a level above.',
        'Le società di consulenza strategica reclutano negli stessi campus target delle banche (i college Ivy-Plus, Berkeley, Michigan, Virginia), soprattutto da stage estivi, e assumono gli MBA delle migliori business school un livello sopra.', 'us-pipelines'],
      ['Bain starts with a digital assessment and then case interviews, adds behavioural questions, and for technical roles a coding challenge; its summer windows run into late August.',
        'Bain inizia con una valutazione digitale e poi colloqui con caso, aggiunge domande comportamentali e, per i ruoli tecnici, una prova di programmazione; le sue finestre estive arrivano fino a fine agosto.', 'us-bain us-simplify']
    ] },
    { f: 'marketing', t: [
      ['Brand management at consumer-goods firms is filled mostly from MBA summer internships; pre-MBA graduates enter through sales and analyst roles. Marketing hiring at big tech fell 36% against 2019.',
        'Il brand management nelle aziende di beni di consumo si copre soprattutto con gli stage estivi degli MBA; i laureati pre-MBA entrano da ruoli di vendita e analisi. Le assunzioni nel marketing delle big tech sono calate del 36% rispetto al 2019.', 'ours us-data']
    ] },
    { f: 'business', t: [
      ['Corporate programmes are tied to the internship: Deloitte lists a two-year Corporate Finance programme that gives investment-banking experience before business school or private equity.',
        'I programmi aziendali sono legati allo stage: Deloitte elenca un programma biennale di Corporate Finance che dà esperienza di investment banking prima della business school o del private equity.', 'us-deloitte']
    ] },
    { f: 'public', t: [
      ['Federal hiring of graduates goes through USAJOBS and Pathways; federal employment in the Washington region fell from about 375,800 to 312,500 between January 2025 and May 2026.',
        'L’assunzione federale di laureati passa per USAJOBS e Pathways; l’occupazione federale nella regione di Washington è scesa da circa 375.800 a 312.500 tra gennaio 2025 e maggio 2026.', 'us-opm us-dc-fed']
    ] },
    { f: 'tech', t: [
      ['New-graduate hiring at big tech is about 65% below 2019, and graduates of the top 20 computer-science programmes are 45% less likely to land a job at a major tech firm than earlier cohorts. Software postings are recovering, but 71% of the rebound is senior roles.',
        'Le assunzioni di neolaureati nelle big tech sono circa il 65% sotto il 2019, e i laureati dei 20 migliori corsi di informatica hanno il 45% di probabilità in meno di entrare in una grande azienda tech rispetto alle coorti precedenti. Gli annunci software si riprendono, ma il 71% della ripresa riguarda ruoli senior.', 'us-data'],
      ['Big tech recruits through internships, hackathons and coding contests, heavily from Stanford, MIT, Carnegie Mellon, Berkeley and other top computer-science departments.',
        'Le big tech reclutano tramite stage, hackathon e gare di programmazione, in gran parte da Stanford, MIT, Carnegie Mellon, Berkeley e altri dipartimenti di informatica di vertice.', 'ours'],
      ['Amazon had the most new H-1B approvals in fiscal 2025 (4,644), followed by Meta (1,555), Microsoft (1,394) and Google (1,050): large tech firms are where a sponsored software job is most likely.',
        'Amazon ha avuto il maggior numero di nuove approvazioni H-1B nell’anno fiscale 2025 (4.644), seguita da Meta (1.555), Microsoft (1.394) e Google (1.050): le grandi aziende tech sono il luogo più probabile per un lavoro software con sponsorizzazione.', 'us-nfap']
    ] },
    { f: 'ai', t: [
      ['Quant and AI research teams hire from a short list of mathematics and computer-science departments, and decide on coding tests and technical interviews more than on the school.',
        'I team quantitativi e di ricerca in IA assumono da un elenco ristretto di dipartimenti di matematica e informatica, e decidono su test di programmazione e colloqui tecnici più che sull’università.', 'us-pipelines']
    ] },
    { f: 'cyber', t: [
      ['Federal security agencies and defence contractors hire many entry-level cyber staff, but most posts need US citizenship and a security clearance.',
        'Le agenzie federali di sicurezza e i fornitori della difesa assumono molto personale cyber d’ingresso, ma la maggior parte dei posti richiede la cittadinanza americana e un nulla osta di sicurezza.', 'ours']
    ] }
  ],

  schools: [
    ['The target effect is causal: attending an Ivy-Plus college instead of a strong public flagship triples the chance of working at a prestigious firm.',
      'L’effetto delle università target è causale: frequentare un college Ivy-Plus invece di una buona università pubblica triplica la probabilità di lavorare in un’azienda prestigiosa.', 'us-pipelines'],
    ['Non-target applicants are under a tenth of junior classes at the banks; a one-year US finance master’s such as MIT’s or Duke’s is a way into the recruiting machine, though Duke’s international graduates needing a visa had a 71% offer rate at six months against 85% for those with work rights.',
      'I candidati di università non target sono meno di un decimo delle classi junior nelle banche; un master di un anno in finanza negli USA come quello del MIT o di Duke è un modo per entrare nella macchina del reclutamento, anche se i laureati internazionali di Duke che avevano bisogno di un visto avevano un tasso di offerta del 71% a sei mesi contro l’85% di chi aveva i diritti di lavoro.', 'us-calendar us-duke us-mit']
  ],

  events: [
    ['Autumn career fairs, firm presentations and invitation-only dinners on target campuses; hackathons and coding competitions for tech.',
      'Fiere della carriera in autunno, presentazioni delle aziende e cene su invito nei campus target; hackathon e competizioni di programmazione per il tech.', 'us-pipelines ours'],
    ['Deloitte runs case competitions for students: a Consulting National Undergraduate Case Competition with local on-campus rounds leading to a national final, a tax case (FanTaxTic) and a competition for advanced-degree students.',
      'Deloitte organizza competizioni di casi per gli studenti: una Consulting National Undergraduate Case Competition con turni locali nel campus che portano a una finale nazionale, un caso fiscale (FanTaxTic) e una competizione per studenti di master e dottorato.', 'us-deloitte'],
    ['Peak posting months for big tech and the Big Four are September and October, when fall career fairs also happen.',
      'I mesi di punta delle pubblicazioni per big tech e Big Four sono settembre e ottobre, quando si tengono anche le fiere della carriera autunnali.', 'us-simplify']
  ],

  customs: [
    { k: 'season', v: 'cyclical', t: [
      ['Each industry has its own window the year before the job starts: investment banking December to March, consulting March to August, tech July to February, the Big Four August to October; most big employers read applications as they arrive and stop when the pipeline is full.',
        'Ogni settore ha la propria finestra l’anno prima dell’inizio del lavoro: investment banking da dicembre a marzo, consulenza da marzo ad agosto, tech da luglio a febbraio, Big Four da agosto a ottobre; la maggior parte dei grandi datori legge le candidature man mano che arrivano e smette quando la rosa è piena.', 'us-simplify']
    ] },
    { k: 'masters', v: 'helpful', t: [
      ['An MBA fills brand management and the consulting level above the undergraduate class, and one-year specialist master’s (MIT MFin, Duke MMS) feed recruiting machines, but most entry roles are open to bachelor’s graduates.',
        'Un MBA copre il brand management e il livello di consulenza sopra la classe dei laureati triennali, e i master specialistici di un anno (MFin del MIT, MMS di Duke) alimentano macchine di reclutamento, ma la maggior parte dei ruoli d’ingresso è aperta ai laureati triennali.', 'us-pipelines us-duke us-mit ours']
    ] },
    { k: 'degrees', v: 'regulated', t: [
      ['Only licensed professions need recognition, each through a state board: a CPA licence is set by the state board of accountancy, and 39 jurisdictions have signed changes to the 150-hour rule. For other jobs, employers can verify education through background checks.',
        'Solo le professioni abilitate richiedono un riconoscimento, ciascuna tramite un consiglio statale: l’abilitazione CPA è fissata dal consiglio statale di contabilità, e 39 giurisdizioni hanno firmato modifiche alla regola delle 150 ore. Per gli altri lavori, i datori possono verificare gli studi tramite controlli sui precedenti.', 'us-cpa us-ftc']
    ] },
    { k: 'brand', v: 'high', t: [
      ['The target effect is causal: attending an Ivy-Plus college triples the chance of working at a prestigious firm, and elite firms concentrate hiring on a few schools.',
        'L’effetto delle università target è causale: frequentare un college Ivy-Plus triplica la probabilità di lavorare in un’azienda prestigiosa, e le aziende d’élite concentrano le assunzioni su poche università.', 'us-pipelines']
    ] },
    { k: 'dual', v: 'some', t: [
      ['The American counterpart of dual study is the internship and co-op, with JPMorganChase also listing apprenticeships among its entry routes; the federal Pathways Internship hires students for up to a year initially, or longer to finish their studies.',
        'L’equivalente americano del percorso duale è lo stage e il co-op, con JPMorganChase che elenca anche apprendistati tra le vie d’ingresso; il Pathways Internship federale assume gli studenti per fino a un anno inizialmente, o più a lungo per concludere gli studi.', 'us-jpm us-opm']
    ] },
    { k: 'publicw', v: 'mid', t: [
      ['The federal government hires graduates through Pathways on USAJOBS, but federal employment in the Washington region fell from about 375,800 to 312,500 between January 2025 and May 2026, and the largest graduate classes are in banks, consultancies and tech.',
        'Il governo federale assume laureati tramite Pathways su USAJOBS, ma l’occupazione federale nella regione di Washington è scesa da circa 375.800 a 312.500 tra gennaio 2025 e maggio 2026, e le classi più grandi di laureati sono in banche, società di consulenza e tech.', 'us-opm us-dc-fed us-pipelines']
    ] },
    { k: 'sponsorr', v: 'some', t: [
      ['NACE’s legal guidance says many employers, especially on campus, have policies against visa sponsorship while thousands of others have no concern about it; employers may ask only whether you are authorised to work and whether you will need sponsorship now or in future. See Visas for the rules.',
        'La guida legale di NACE dice che molti datori, soprattutto nei campus, hanno politiche contro la sponsorizzazione del visto mentre migliaia di altri non hanno alcun problema; i datori possono chiedere solo se sei autorizzato a lavorare e se avrai bisogno di sponsorizzazione ora o in futuro. Per le regole vedi Visti.', 'us-nace-sponsor']
    ] },
    { k: 'photo', v: 'avoid', t: [
      ['Never add a photo or date of birth; a one-page résumé with grades (GPA) shown.',
        'Mai la foto né la data di nascita; un curriculum di una pagina con i voti (GPA) in vista.', 'us-breaking']
    ] },
    { k: 'cv', v: 'one', t: [
      ['A one-page résumé for students in finance and consulting, with GPA always shown; omitting it signals a bad grade.',
        'Un curriculum di una pagina per gli studenti in finanza e consulenza, con il GPA sempre indicato; ometterlo segnala un brutto voto.', 'us-breaking']
    ] },
    { k: 'letter', v: 'optional', t: [
      ['The pages read (Goldman, JPMorgan, Deloitte, Bain) describe an online application and interviews, not a compulsory cover letter; the résumé is the document that gets read.',
        'Le pagine lette (Goldman, JPMorgan, Deloitte, Bain) descrivono una candidatura online e colloqui, non una lettera di presentazione obbligatoria; il curriculum è il documento che viene letto.', 'us-jpm us-deloitte us-bain ours']
    ] },
    { k: 'refs', v: 'later', t: [
      ['References are not part of the first application at the employers read; they are asked for late in the process, alongside the background check.',
        'Le referenze non fanno parte della prima candidatura presso i datori letti; vengono richieste a fine processo, insieme al controllo dei precedenti.', 'us-ftc ours']
    ] },
    { k: 'docs', v: 'none', t: [
      ['Transcripts are rarely required with the first application; education is verified later through the background check.',
        'Gli estratti dei voti sono raramente richiesti con la prima candidatura; gli studi vengono verificati dopo tramite il controllo dei precedenti.', 'us-ftc ours']
    ] },
    { k: 'salary', v: 'later', t: [
      ['At least 13 states plus DC require pay ranges in job postings (California, Colorado, New York and Washington among them), and states such as California, Maryland and Oregon bar employers from asking about pay history, so the number comes up in the offer stage and the posted range is your anchor.',
        'Almeno 13 stati più il DC richiedono fasce retributive negli annunci (tra cui California, Colorado, New York e Washington), e stati come California, Maryland e Oregon vietano ai datori di chiedere la retribuzione precedente, quindi la cifra emerge nella fase dell’offerta e la fascia pubblicata è il tuo punto di riferimento.', 'us-paytrans']
    ] },
    { k: 'check', v: 'routine', t: [
      ['Employers must give a stand-alone written notice and get written permission before ordering a background report, and may look into work history, education, criminal record and more; they must send a notice before rejecting someone on its basis.',
        'I datori di lavoro devono dare un avviso scritto separato e ottenere il permesso scritto prima di ordinare un rapporto sui precedenti, e possono verificare storia lavorativa, studi, casellario e altro; devono inviare un avviso prima di respingere qualcuno in base a esso.', 'us-ftc']
    ] },
    { k: 'contact', v: 'people', t: [
      ['Applications are online, but referrals decide who gets read; alumni are the most useful contacts.',
        'Le candidature sono online, ma le segnalazioni decidono chi viene letto; gli ex studenti sono i contatti più utili.', 'us-breaking']
    ] },
    { k: 'abroad', v: 'hard', t: [
      ['Without a US degree and its work permission after study, a European graduate needs an employer to sponsor a visa, which most entry-level programmes do not do.',
        'Senza una laurea americana e il relativo permesso di lavoro dopo gli studi, un laureato europeo ha bisogno di un datore che sponsorizzi il visto, cosa che la maggior parte dei programmi d’ingresso non fa.', 'us-beyond'],
      ['International students apply to about twice as many jobs and receive 30% fewer offers.',
        'Gli studenti internazionali si candidano a circa il doppio dei posti e ricevono il 30% di offerte in meno.', 'us-interstride']
    ] },
    { k: 'language', v: 'english', t: [
      ['English.', 'Inglese.', 'ours']
    ] }
  ],

  rows: {
    process: [
      ['Finance and corporate programmes run in stages: Goldman Sachs uses an application, a video interview of about 30 minutes, then two to five interviews of 30 to 60 minutes (a search summary of its student pages); JPMorganChase says to expect several people in multiple rounds and may add a recorded on-demand video interview.',
        'I programmi di finanza e aziendali procedono per fasi: Goldman Sachs usa una candidatura, un’intervista video di circa 30 minuti, poi da due a cinque colloqui di 30-60 minuti (sintesi di una ricerca sulle sue pagine per studenti); JPMorganChase dice di aspettarsi più persone in più giri e può aggiungere un video registrato su richiesta.', 'us-apps us-jpm'],
      ['Consulting: Bain runs a digital assessment, then case interviews and at least one behavioural interview, and sometimes a take-home assignment with about three days to complete it; technical roles can have a coding challenge.',
        'Consulenza: Bain svolge una valutazione digitale, poi colloqui con caso e almeno un colloquio comportamentale, e talvolta un compito da svolgere a casa con circa tre giorni di tempo; i ruoli tecnici possono avere una prova di programmazione.', 'us-bain'],
      ['Interviews are in English, and the pages read give no typical time from application to offer; many employers judge applications as they come in.',
        'I colloqui si svolgono in inglese, e le pagine lette non indicano un tempo tipico tra candidatura e offerta; molti datori valutano le candidature man mano che arrivano.', 'us-nace us-simplify ours']
    ],
    offer: [
      ['Termination is generally governed by private or labour contracts unless it involves discrimination or whistleblowing, and federal law does not require paid vacation, sick leave or holidays: these are matters of agreement, with state laws on top. Read the offer letter for leave, health insurance and any probation or notice terms.',
        'La cessazione è in genere regolata da contratti privati o collettivi, salvo discriminazione o segnalazione di illeciti, e la legge federale non impone ferie, malattia o festività retribuite: sono materia di accordo, con le leggi statali in più. Leggi la lettera d’offerta per ferie, assicurazione sanitaria ed eventuali periodo di prova o preavviso.', 'us-dol-term us-dol-vac ours'],
      ['Medical questions generally cannot be asked before a conditional job offer, and the offer is typically conditional on a background check and proof of work authorisation.',
        'Le domande mediche in genere non possono essere poste prima di un’offerta di lavoro condizionata, e l’offerta è di solito condizionata a un controllo dei precedenti e alla prova dell’autorizzazione al lavoro.', 'us-ftc ours'],
      ['Conversion of interns averaged 63.1% in NACE’s 2026 report; the pages read do not say how long you have to decide on a full-time offer or how far pay can be negotiated.',
        'La conversione degli stagisti ha avuto una media del 63,1% nel rapporto NACE 2026; le pagine lette non dicono di quanto tempo si dispone per decidere su un’offerta a tempo pieno né quanto si possa negoziare lo stipendio.', 'us-nace ours']
    ],
    sponsor: [
      ['Employers may ask two questions: whether you are legally authorised to work in the US for any employer, and whether you will now or in future require visa sponsorship. NACE’s guidance advises answering the second honestly, usually yes, because most international graduates will need H-1B sponsorship after OPT.',
        'I datori di lavoro possono porre due domande: se sei legalmente autorizzato a lavorare negli USA per qualsiasi datore, e se ora o in futuro avrai bisogno di sponsorizzazione del visto. La guida di NACE consiglia di rispondere onestamente alla seconda, di solito sì, perché la maggior parte dei laureati internazionali avrà bisogno della sponsorizzazione H-1B dopo l’OPT.', 'us-nace-sponsor'],
      ['Many on-campus employers have policies against sponsorship, while thousands of others have no concern; students may need to look beyond employers that recruit on campus. The biggest new H-1B sponsors in fiscal 2025 were Amazon (4,644), Meta (1,555), Microsoft (1,394) and Google (1,050).',
        'Molti datori che reclutano nei campus hanno politiche contro la sponsorizzazione, mentre migliaia di altri non hanno problemi; gli studenti possono dover guardare oltre i datori che reclutano nei campus. I maggiori nuovi sponsor H-1B nell’anno fiscale 2025 sono stati Amazon (4.644), Meta (1.555), Microsoft (1.394) e Google (1.050).', 'us-nace-sponsor us-nfap'],
      ['Universities and non-profit research bodies can sponsor outside the H-1B cap, and the cap lottery is weighted by wage level from fiscal 2027; so an employer’s willingness depends on pay level and organisation type. See Visas for the rules.',
        'Le università e gli enti di ricerca non profit possono sponsorizzare fuori dal limite H-1B, e la lotteria del limite è ponderata per livello salariale dall’anno fiscale 2027; quindi la disponibilità di un datore dipende dal livello retributivo e dal tipo di organizzazione. Per le regole vedi Visti.', 'us-beyond']
    ],
    where: [
      ['Employers’ own career sites are the main route: apply.deloitte.com for Deloitte’s internships and full-time roles, the JPMorganChase and Goldman Sachs student pages, and Bain’s hiring pages; most take applications as they arrive.',
        'I siti carriere dei datori di lavoro sono la via principale: apply.deloitte.com per stage e posti a tempo pieno di Deloitte, le pagine per studenti di JPMorganChase e Goldman Sachs, e le pagine di assunzione di Bain; la maggior parte accetta candidature man mano che arrivano.', 'us-deloitte us-jpm us-bain us-simplify'],
      ['Federal jobs: USAJOBS, with the Federal Internship Portal (intern.usajobs.gov) and the Recent Graduate Portal (recentgrad.usajobs.gov) for Pathways.',
        'Lavori federali: USAJOBS, con il Federal Internship Portal (intern.usajobs.gov) e il Recent Graduate Portal (recentgrad.usajobs.gov) per Pathways.', 'us-opm'],
      ['Campus: career-services fairs and firm presentations on target campuses each autumn, and the university’s alumni network for informational calls.',
        'Campus: fiere dei servizi di orientamento e presentazioni delle aziende nei campus target ogni autunno, e la rete degli ex studenti dell’università per le chiamate informative.', 'us-pipelines us-breaking'],
      ['Data on who sponsors: the USCIS H-1B Employer Data Hub shows which employers get approvals, as in the fiscal 2025 analysis by the National Foundation for American Policy.',
        'Dati su chi sponsorizza: lo USCIS H-1B Employer Data Hub mostra quali datori ottengono approvazioni, come nell’analisi dell’anno fiscale 2025 della National Foundation for American Policy.', 'us-nfap']
    ],
    mistakes: [
      ['Applying late: finance postings open from December, consulting from March, tech from July and the Big Four from August, and most employers stop reading once their pipeline is full.',
        'Candidarsi tardi: gli annunci di finanza si aprono da dicembre, quelli di consulenza da marzo, il tech da luglio e le Big Four da agosto, e la maggior parte dei datori smette di leggere quando la rosa è piena.', 'us-simplify'],
      ['Sending a European CV: a photo, date of birth or a two-page Europass; the American résumé is one page with GPA shown.',
        'Inviare un CV europeo: foto, data di nascita o un Europass di due pagine; il curriculum americano è di una pagina con il GPA in vista.', 'us-breaking'],
      ['Treating a referral as the whole job: it raises the chance of an interview (6% of applicants, 21% of interviewees), but offers still depend on performance.',
        'Considerare una segnalazione come tutto il lavoro: aumenta la probabilità di un colloquio (6% dei candidati, 21% di chi viene intervistato), ma le offerte dipendono comunque dalla prestazione.', 'us-breaking'],
      ['Hiding the sponsorship question: NACE warns that saying no to hide the need could make an employer question your honesty, and recommends being up front.',
        'Nascondere la questione della sponsorizzazione: NACE avverte che rispondere no per nascondere la necessità può far dubitare il datore della tua onestà, e raccomanda di essere trasparenti.', 'us-nace-sponsor'],
      ['Skipping the internship: employers made full-time offers to 62% of their 2024 interns, so an internship is the main entrance, and an in-person one converts best (72%).',
        'Saltare lo stage: i datori hanno fatto offerte a tempo pieno al 62% dei loro stagisti del 2024, quindi lo stage è l’ingresso principale, e quello in presenza è il più efficace (72%).', 'us-nace']
    ]
  },

  lang: [
    { f: 'finance', v: 'english', lv: 'C1', t: [
      ['American finance recruiting is in English, from the video interview to the final rounds; no certificate is asked, the interviews are the test.',
        'Il reclutamento finanziario americano è in inglese, dal video colloquio ai giri finali; non è richiesto alcun certificato, la prova sono i colloqui.', 'us-apps us-jpm']
    ] },
    { f: 'consulting', v: 'english', lv: 'C1', t: [
      ['Bain’s case and behavioural interviews are conducted in English, and the cases test structured thinking and communication; no language certificate is named.',
        'I colloqui con caso e comportamentali di Bain si svolgono in inglese, e i casi verificano pensiero strutturato e comunicazione; non è indicato alcun certificato linguistico.', 'us-bain']
    ] },
    { f: 'business', v: 'english', lv: 'C1', t: [
      ['Corporate programmes such as Deloitte’s are in English; another language is an asset in roles serving other markets but is not asked for in the pages read.',
        'I programmi aziendali come quello di Deloitte si svolgono in inglese; un’altra lingua è un vantaggio nei ruoli che servono altri mercati ma non è richiesta nelle pagine lette.', 'us-deloitte ours']
    ] },
    { f: 'tech', v: 'english', lv: 'C1', t: [
      ['Technical screens are in English and test coding: Bain’s technical roles use a coding challenge, and Goldman’s engineering interviews add HackerRank or CoderPad.',
        'Le selezioni tecniche si svolgono in inglese e verificano la programmazione: i ruoli tecnici di Bain usano una prova di programmazione, e i colloqui di ingegneria di Goldman aggiungono HackerRank o CoderPad.', 'us-bain us-apps']
    ] }
  ],

  programmes: [
    { n: '2027 Summer Analyst Program (Americas)', o: 'Goldman Sachs', f: 'finance', in: null, w: null, lang: 'EN', intl: 'unknown', ids: 'us-gs' },
    { n: 'Corporate Finance programme (two years)', o: 'Deloitte', f: 'business', in: null, w: null, lang: 'EN', intl: 'unknown', ids: 'us-deloitte' },
    { n: 'Summer analyst roles 2027 (New York, Houston, San Francisco)', o: 'RBC', f: 'finance', in: null, w: [12, 12], lang: 'EN', intl: 'unknown', ids: 'us-cal' },
    { n: 'Global Advisory summer analyst 2027', o: 'Rothschild', f: 'finance', in: null, w: [12, 1], lang: 'EN', intl: 'unknown', ids: 'us-cal' },
    { n: 'Pathways Recent Graduates Program', o: 'US federal government', f: 'public', in: null, w: null, lang: 'EN', intl: 'local', ids: 'us-opm' },
    { n: 'Consulting and technical-role hiring', o: 'Bain', f: 'consulting', in: null, w: null, lang: 'EN', intl: 'unknown', ids: 'us-bain us-simplify' }
  ],

  outcomes: [
    ['Employers made full-time offers to 62% of their 2024 interns, down from two-thirds in 2023 and the lowest in five years; the 2026 report shows an average conversion rate of 63.1%.',
      'I datori hanno fatto offerte a tempo pieno al 62% dei loro stagisti del 2024, in calo rispetto ai due terzi del 2023 e il livello più basso in cinque anni; il rapporto 2026 mostra un tasso medio di conversione del 63,1%.', 'us-nace'],
    ['US recent graduates had an unemployment rate of about 5.6% in the second quarter of 2026 against 4.3% for all workers, and 42% were underemployed.',
      'I neolaureati americani avevano un tasso di disoccupazione di circa il 5,6% nel secondo trimestre 2026 contro il 4,3% di tutti i lavoratori, e il 42% era sottoccupato.', 'us-nyfed'],
    ['For internationals the outcomes are worse: post-graduation employment is 44.6% against 62.1% for domestic students, at an average starting salary of $80,785 driven by STEM fields; Duke’s master’s graduates needing a visa had a 71% offer rate at six months against 85% with work rights.',
      'Per gli internazionali i risultati sono peggiori: l’occupazione post-laurea è del 44,6% contro il 62,1% degli studenti americani, con uno stipendio iniziale medio di 80.785 $ trainato dai campi STEM; i laureati magistrali di Duke che avevano bisogno di un visto avevano un tasso di offerta del 71% a sei mesi contro l’85% di chi aveva diritto di lavorare.', 'us-interstride us-duke']
  ],

  sources: {
    'us-nace': ['data', 'NACE: intern offer and conversion rates fall, acceptances rise (2025 Internship & Co-op Report)', 'https://naceweb.org/talent-acquisition/internships/intern-offer-and-conversion-rates-fall-acceptances-rise', '2026-10-08'],
    'us-nace-outlook': ['data', 'NACE: outlook brightens for college class of 2026 entry-level hiring (Job Outlook 2026 spring update)', 'https://naceweb.org/about-us/press/2026/outlook-brightens-for-college-class-of-2026-entry-level-hiring', '2026-10-08'],
    'us-nace-sponsor': ['practitioner consensus', 'NACE: international student employment, answering questions about the need for employment visa sponsorship (January 2021)', 'https://naceweb.org/public-policy-and-legal/legal-issues/international-student-employment-answering-questions-about-the-need-for-employment-visa-sponsorship/', '2026-10-08'],
    'us-interstride': ['practitioner consensus', 'Interstride: international student employment trends 2025 (drawing on NACE and NAFSA research)', 'https://www.interstride.com/research/International-student-employment-trends-2025/', '2026-10-08'],
    'us-pipelines': ['data', 'Admetia research library: getting-in/employer-pipelines.md §6, §9–§11 (Chetty, Deming and Friedman 2026; Rivera 2015)', 'research/getting-in/employer-pipelines.md', '2026-10-02'],
    'us-breaking': ['data', 'Admetia research library: getting-in/breaking-in.md §1–§3 (Brown, Setren and Topa 2016; resume norms)', 'research/getting-in/breaking-in.md', '2026-09-30'],
    'us-calendar': ['practitioner consensus', 'Admetia research library: getting-in/recruiting-calendar.md §1–§2', 'research/getting-in/recruiting-calendar.md', '2026-10-02'],
    'us-cal': ['employer-stated', 'Admetia research library: getting-in/recruiting-calendar.md §2 (RBC and Rothschild US 2027 summer roles, December 2025)', 'research/getting-in/recruiting-calendar.md', '2026-10-02'],
    'us-apps': ['employer-stated', 'Admetia research library: getting-in/applications-and-interviews.md (Goldman Sachs video interview and two to five interviews; HackerRank/CoderPad for engineering; search summary)', 'research/getting-in/applications-and-interviews.md', '2026-10-08'],
    'us-beyond': ['data', 'Admetia research library: places/beyond-europe.md §1 (OPT, H-1B)', 'research/places/beyond-europe.md', '2026-10-01'],
    'us-acc': ['employer-stated', 'Admetia research library: careers/accounting-and-corporate.md §1 (PwC US via Fortune, 8 September 2025)', 'research/careers/accounting-and-corporate.md', '2026-09-30'],
    'us-data': ['data', 'Admetia research library: careers/tech-data-and-ai.md §1a (SignalFire State of Tech Talent 2026; Indeed Hiring Lab, July 2026)', 'research/careers/tech-data-and-ai.md', '2026-10-01'],
    'us-gs': ['employer-stated', 'Goldman Sachs: 2027 Summer Analyst Program (Americas)', 'https://www.goldmansachs.com/careers/students/programs-and-internships/americas/2027-summer-analyst-program', '2026-10-03'],
    'us-mit': ['data', 'Admetia research library: places/beyond-europe.md §1.4 (MIT MFin employment report 2025)', 'research/places/beyond-europe.md', '2026-10-01'],
    'us-duke': ['data', 'Admetia research library: places/beyond-europe.md §1.4 (Duke MMS employment report 2025)', 'research/places/beyond-europe.md', '2026-10-01'],
    'us-nyfed': ['data', 'Admetia research library: evidence/trends.md (Federal Reserve Bank of New York, College Labor Market)', 'research/evidence/trends.md', '2026-09-30'],
    'us-dc-fed': ['data', 'Admetia research library: countries/us-united-states.md §1 (AP reporting BLS: federal employment in the Washington region)', 'research/countries/us-united-states.md', '2026-10-03'],
    'us-simplify': ['practitioner consensus', 'Simplify: when do Summer 2027 internships open (tech, finance, consulting, Big Four windows)', 'https://simplify.jobs/blog/summer-2027-internship-timeline', '2026-10-08'],
    'us-bain': ['employer-stated', 'Bain & Company: interviewing', 'https://www.bain.com/careers/hiring-process/interviewing/', '2026-10-08'],
    'us-jpm': ['employer-stated', 'JPMorganChase: how we hire', 'https://www.jpmorganchase.com/careers/how-we-hire', '2026-10-08'],
    'us-deloitte': ['employer-stated', 'Deloitte US: student recruiting (internships, full-time roles, programmes, case competitions)', 'https://www.deloitte.com/us/en/careers/students.html', '2026-10-08'],
    'us-opm': ['data', 'OPM: Pathways Programs for students and recent graduates', 'https://www.opm.gov/policy-data-oversight/hiring-information/students-recent-graduates/', '2026-10-08'],
    'us-ftc': ['data', 'FTC: background checks, what employers need to know (Fair Credit Reporting Act) (archived copy, page no longer online)', 'https://web.archive.org/web/20260925084422/https://www.ftc.gov/business-guidance/resources/background-checks-what-employers-need-know', '2026-10-08'],
    'us-dol-term': ['data', 'US Department of Labor: termination (private contracts, discrimination and whistleblowing exceptions)', 'https://www.dol.gov/general/topic/termination', '2026-10-08'],
    'us-dol-vac': ['data', 'US Department of Labor: vacation leave (no federal requirement; matter of agreement, state law applies)', 'https://www.dol.gov/general/topic/workhours/vacation_leave', '2026-10-08'],
    'us-paytrans': ['practitioner consensus', 'Clockspot: pay transparency laws by state (13 states plus DC in effect; salary-history bans)', 'https://www.clockspot.com/research/pay-transparency-laws-by-state', '2026-10-08'],
    'us-cpa': ['practitioner consensus', 'Accounting Today: states overhaul the 150-hour rule (39 jurisdictions with signed changes)', 'https://www.accountingtoday.com/list/states-overhaul-150-hour-rule', '2026-10-08'],
    'us-nfap': ['data', 'NFAP: H-1B petitions and denial rates for fiscal year 2025 (USCIS Employer Data Hub; Amazon, Meta, Microsoft, Google as search summary)', 'https://nfap.com/wp-content/uploads/2025/11/H-1B-Petitions-and-Denial-Rates-For-FY-2025.NFAP-Policy-Brief.2025.pdf', '2026-10-08']
  }
});
