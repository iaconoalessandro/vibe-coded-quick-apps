/* How hiring works: United Arab Emirates. Library: research/places/gulf-and-central-eastern-europe.md
 * §1 and §2 (employer pages read 2 Oct 2026; WAM on Emiratisation). Pages opened on 8 Oct 2026: u.ae
 * (job offer, contracts, preparing to work, skill levels), MoFA, HCCH status table, Emirates NBD, KPMG,
 * ADNOC, PwC Middle East, Dubai Business Associates, World Bank API. */
ATLAS.addEntry({
  id: 'AE',
  checked: '2026-10-08',
  review: '2027-04-08',

  lead: [
    ['The UAE runs a two-tier market. The prestigious graduate programmes, at the sovereign funds, ADNOC and the large banks, are reserved for Emirati nationals; foreigners are mostly hired as experienced staff, as transfers within a firm, or through a smaller number of open programmes, chiefly at the Big Four.',
      'Gli Emirati hanno un mercato a due livelli. I programmi per laureati più prestigiosi, nei fondi sovrani, in ADNOC e nelle grandi banche, sono riservati ai cittadini emiratini; gli stranieri vengono assunti soprattutto come personale esperto, con trasferimenti interni a un’azienda, o tramite un numero minore di programmi aperti, soprattutto nelle Big Four.', 'ae-gulf'],
    ['Hiring from abroad is routine: the employer sends a signed offer to the worker, applies for the work permit, and the worker enters on its approval.',
      'Assumere dall’estero è prassi: il datore invia un’offerta firmata al lavoratore, richiede il permesso di lavoro e il lavoratore entra al suo rilascio.', 'ae-offer']
  ],

  ways: [
    { name: ['Experienced-hire openings through recruiters and job portals', 'Posizioni per personale esperto tramite selezionatori e portali di lavoro'], r: 'agency', p: 'exp first', basis: 'consensus', t: [
      ['Non-nationals are mostly hired into the same firms as experienced staff, so most open expatriate roles ask for prior experience; a recruiter or portal posting is the usual first contact.',
        'I non cittadini vengono assunti per lo più nelle stesse aziende come personale esperto, quindi la maggior parte dei ruoli aperti agli espatriati chiede esperienza; il primo contatto è di solito un selezionatore o un annuncio su un portale.', 'ae-gulf'],
      ['The employer can send the offer to a candidate abroad directly, through a recruitment agency or through a designated entity.',
        'Il datore può inviare l’offerta a un candidato all’estero direttamente, tramite un’agenzia di selezione o un ente designato.', 'ae-offer']
    ] },
    { name: ['Transfer within an international firm', 'Trasferimento interno a un’azienda internazionale'], r: 'transfer', p: 'exp first', basis: 'consensus', t: [
      ['A first job at a firm’s European office followed by a move to Dubai or Abu Dhabi is the most common way a European graduate ends up in the Gulf.',
        'Un primo lavoro nell’ufficio europeo di un’azienda seguito da un trasferimento a Dubai o Abu Dhabi è il modo più comune in cui un laureato europeo arriva nel Golfo.', 'ours'],
      ['The library’s review of employers’ pages finds intra-firm transfers one of the three channels open to non-nationals, with experienced hires and the few open programmes.',
        'La rassegna delle pagine dei datori di lavoro nella biblioteca di ricerca indica i trasferimenti interni come uno dei tre canali aperti ai non cittadini, insieme alle assunzioni di personale esperto e ai pochi programmi aperti.', 'ae-gulf']
    ] },
    { name: ['Open graduate programmes', 'Programmi per laureati aperti'], r: 'scheme', p: 'first', basis: 'consensus', t: [
      ['Some Big Four graduate programmes in Dubai are open to non-nationals, with sponsorship possible; the national programmes at ADIA, Mubadala, Emirates NBD and ADNOC are not.',
        'Alcuni programmi per laureati delle Big Four a Dubai sono aperti ai non cittadini, con sponsorizzazione possibile; quelli nazionali di ADIA, Mubadala, Emirates NBD e ADNOC no.', 'ae-gulf'],
      ['PwC Middle East runs graduate programmes in assurance, consulting, deals and tax across 12 countries of the region, for a September start, asking for a GPA of 3.0 and a major in accounting, finance or business.',
        'PwC Middle East gestisce programmi per laureati in revisione, consulenza, deals e fiscalità in 12 paesi della regione, con inizio a settembre, e chiede una media di 3,0 e una laurea in contabilità, finanza o economia aziendale.', 'ae-pwc'],
      ['Dubai Business Associates, funded by the Dubai government, is the clearest programme open worldwide: 35 places from over 6,600 applicants in the last edition.',
        'Dubai Business Associates, finanziato dal governo di Dubai, è il programma più chiaramente aperto al mondo: 35 posti su oltre 6.600 candidati nell’ultima edizione.', 'ae-dba']
    ] },
    { name: ['Internship (summer placement)', 'Tirocinio (stage estivo)'], r: 'intern', p: 'intern first', basis: 'consensus', t: [
      ['PwC Middle East’s summer internship ran for two months, June to August 2026, for students majoring in accounting, finance or business with a GPA of 3.0 or above.',
        'Lo stage estivo di PwC Middle East è durato due mesi, da giugno ad agosto 2026, per studenti di contabilità, finanza o economia aziendale con una media di 3,0 o superiore.', 'ae-pwc'],
      ['Emirates NBD’s internships are for UAE national undergraduates, so a bank internship is not open to a foreign student.',
        'Gli stage di Emirates NBD sono per studenti universitari emiratini, quindi uno stage in banca non è aperto a uno studente straniero.', 'ae-gulf']
    ] },
    { name: ['Introductions and professional networks', 'Presentazioni e reti professionali'], r: 'network', p: 'exp first', basis: 'anecdotal', t: [
      ['Recruiters’ own advice is that a wide network leads to openings, introductions and referrals; no source read measures how many Gulf jobs are filled this way.',
        'Il consiglio degli stessi selezionatori è che una rete ampia porta a posizioni aperte, presentazioni e segnalazioni; nessuna fonte letta misura quanti posti nel Golfo si coprano così.', 'ae-mp-net']
    ] },
    { name: ['National schemes at sovereign funds, banks and ADNOC', 'Programmi nazionali di fondi sovrani, banche e ADNOC'], r: 'public', p: 'first', basis: 'data', t: [
      ['Emirates NBD’s Ruwad (up to 20 graduates a year), KPMG’s graduate programme, ADNOC’s fresh-graduate Accelerator and PwC’s Watani are described as for Emiratis; they are the best-known routes and are closed to foreign graduates.',
        'Ruwad di Emirates NBD (fino a 20 laureati l’anno), il programma per laureati di KPMG, l’Accelerator per neolaureati di ADNOC e Watani di PwC sono descritti come riservati agli emiratini; sono i percorsi più noti e sono chiusi ai laureati stranieri.', 'ae-enbd ae-kpmg ae-adnoc ae-pwc-w']
    ] }
  ],

  cycle: [
    ['Emiratisation pushes the other way for juniors: private firms with 50 or more staff must add Emiratis in skilled jobs each year, and from July 2026 pay AED 10,000 a month for each unfilled position.',
      'L’emiratizzazione spinge nella direzione opposta per i junior: le aziende private con 50 o più dipendenti devono aggiungere ogni anno emiratini in ruoli qualificati, e da luglio 2026 pagano 10.000 AED al mese per ogni posto non coperto.', 'ae-gulf'],
    ['Open graduate programmes start in September: PwC Middle East’s assurance programme for 2026, and Dubai Business Associates, which closed applications on 1 March 2026.',
      'I programmi aperti per laureati iniziano a settembre: il programma di revisione di PwC Middle East per il 2026 e Dubai Business Associates, che ha chiuso le candidature il 1° marzo 2026.', 'ae-pwc ae-dba'],
    ['Emirates NBD’s Ruwad has one intake a year, while its Bedaya programme has several intakes a year, so there is no single national season.',
      'Ruwad di Emirates NBD ha una selezione all’anno, mentre il programma Bedaya ne ha diverse, quindi non esiste un’unica stagione nazionale.', 'ae-enbd'],
    ['ADIA runs two graduate cycles a year for UAE nationals, with applications due before 1 February and before 6 July.',
      'ADIA gestisce due cicli all’anno per laureati emiratini, con candidature entro il 1° febbraio ed entro il 6 luglio.', 'ae-gulf']
  ],

  schools: [
    ['MBZUAI, the Abu Dhabi AI university, reports that 64 of its 101 graduates in the 2024 cohort went into industry, often at G42, ADNOC and DP World.',
      'MBZUAI, l’università dell’IA di Abu Dhabi, riferisce che 64 dei suoi 101 laureati della coorte 2024 sono entrati nell’industria, spesso in G42, ADNOC e DP World.', 'ae-mbzuai'],
    ['The jobseeker visit visa is aimed at skilled professionals and at fresh graduates of the world’s top 500 universities, so a university’s world ranking is written into the entry rules.',
      'Il visto di visita per cercare lavoro è rivolto a professionisti qualificati e a neolaureati delle prime 500 università del mondo, quindi la posizione in classifica di un ateneo è scritta nelle regole d’ingresso.', 'ae-kt']
  ],

  events: [
    ['The Emirates Group lists recruitment events on its careers site for cabin crew, pilots and engineering; it does not list graduate fairs.',
      'Il Gruppo Emirates elenca sul proprio sito carriere eventi di selezione per assistenti di volo, piloti e ingegneria; non elenca fiere per laureati.', 'ae-emg']
  ],

  fields: [
    { f: 'finance', t: [
      ['The bank and fund programmes are for nationals: Emirates NBD’s Ruwad (24 months, up to 20 graduates a year) sits under its programmes for Emiratis, and ADIA’s graduate cycles ask for UAE national candidates.',
        'I programmi di banche e fondi sono per i cittadini: Ruwad di Emirates NBD (24 mesi, fino a 20 laureati l’anno) rientra nei suoi programmi per emiratini, e i cicli per laureati di ADIA richiedono candidati emiratini.', 'ae-enbd ae-gulf']
    ] },
    { f: 'accounting', t: [
      ['Big Four graduate schemes in the UAE are split: national schemes such as EY’s Watani assurance programme are for UAE nationals only, while other graduate roles may come with sponsorship.',
        'I programmi per laureati delle Big Four negli Emirati sono divisi: quelli nazionali come il programma di revisione Watani di EY sono solo per cittadini emiratini, mentre altri ruoli per laureati possono prevedere la sponsorizzazione.', 'ae-gulf'],
      ['KPMG’s graduate page in the UAE presents its programme for fresh Emirati graduates, with a pre-audit qualification training run with the ADGM Academy.',
        'La pagina di KPMG per laureati negli Emirati presenta il suo programma per neolaureati emiratini, con una formazione pre-revisione svolta con l’ADGM Academy.', 'ae-kpmg']
    ] },
    { f: 'consulting', t: [
      ['Dubai Business Associates, a fully funded nine-month consulting programme open to graduates worldwide, chose 35 from over 6,600 applicants from more than 140 countries.',
        'Dubai Business Associates, un programma di consulenza di nove mesi interamente finanziato e aperto a laureati di tutto il mondo, ne ha scelti 35 tra oltre 6.600 candidati da più di 140 paesi.', 'ae-dba']
    ] },
    { f: 'public', t: [
      ['ADNOC’s early-careers programmes (Accelerator fresh graduates, scholars, internships) are described as committed to UAE national talent, and its page names no route for international applicants.',
        'I programmi di ADNOC per i giovani (Accelerator per neolaureati, borsisti, stage) sono descritti come rivolti ai talenti emiratini, e la pagina non indica alcun percorso per candidati internazionali.', 'ae-adnoc']
    ] },
    { f: 'ai', t: [
      ['Abu Dhabi builds its AI workforce around MBZUAI, its AI university: 64 of 101 graduates of the 2024 cohort went into industry, often at G42, its subsidiaries, ADNOC and DP World, as AI engineers, research associates and data scientists.',
        'Abu Dhabi costruisce la sua forza lavoro in IA intorno al MBZUAI, la sua università dell’IA: 64 dei 101 laureati della coorte 2024 sono andati nell’industria, spesso in G42, nelle sue controllate, in ADNOC e DP World, come ingegneri IA, ricercatori associati e data scientist.', 'ae-mbzuai']
    ] }
  ],

  customs: [
    { k: 'season', v: 'rolling', t: [
      ['Experienced and transfer hiring is open all year, while the open graduate programmes start in September and Emirates NBD’s Bedaya takes graduates at several points in the year.',
        'Le assunzioni di personale esperto e per trasferimento sono aperte tutto l’anno, mentre i programmi aperti per laureati iniziano a settembre e Bedaya di Emirates NBD accoglie laureati in più momenti dell’anno.', 'ae-enbd ae-pwc ae-gulf']
    ] },
    { k: 'masters', v: 'irrelevant', t: [
      ['The open programmes read ask for a recent bachelor’s degree (Dubai Business Associates) or a GPA of 3.0 in the right major (PwC), not for a master’s; the immigration rules ask for a degree above secondary level, attested.',
        'I programmi aperti letti chiedono una laurea triennale recente (Dubai Business Associates) o una media di 3,0 nell’indirizzo giusto (PwC), non un master; le norme sull’immigrazione chiedono un titolo superiore alla secondaria, attestato.', 'ae-dba ae-pwc ae-skill']
    ] },
    { k: 'degrees', v: 'eval', t: [
      ['A foreign degree is attested before use: authenticated in the country of origin by its foreign ministry, then by the UAE embassy or consulate, and for some professions by the UAE education ministry; the UAE foreign ministry says courier attestation abroad may take up to 15 business days.',
        'Un titolo estero viene attestato prima dell’uso: autenticato nel paese d’origine dal suo ministero degli Esteri, poi dall’ambasciata o dal consolato degli Emirati e, per alcune professioni, dal ministero dell’Istruzione degli Emirati; il ministero degli Esteri emiratino indica che l’attestazione per corriere all’estero può richiedere fino a 15 giorni lavorativi.', 'ae-prep ae-mofa'],
      ['An apostille alone is not enough: the Hague status table does not list the UAE as a party to the Apostille Convention.',
        'L’apostille da sola non basta: la tabella di stato dell’Aia non elenca gli Emirati tra le parti della Convenzione sull’Apostille.', 'ae-hcch']
    ] },
    { k: 'brand', v: 'some', t: [
      ['University ranking is written into the entry rules (top-500 graduates for the jobseeker visit visa), and employers’ programmes name majors and GPA; no source read shows how much an employer’s own screening weighs the school.',
        'La classifica dell’università è scritta nelle regole d’ingresso (laureati delle prime 500 per il visto di visita per cercare lavoro) e i programmi dei datori indicano indirizzi e media; nessuna fonte letta mostra quanto la selezione di un datore pesi la scuola.', 'ae-kt ae-pwc']
    ] },
    { k: 'dual', v: 'little', t: [
      ['I found no apprenticeship or dual-study scheme for graduates; training happens inside employer graduate programmes such as Bedaya (12 months) and Ruwad (24 months) at Emirates NBD, which are for nationals.',
        'Non ho trovato alcun apprendistato o percorso di studio duale per laureati; la formazione avviene dentro i programmi dei datori come Bedaya (12 mesi) e Ruwad (24 mesi) di Emirates NBD, che sono per i cittadini.', 'ours ae-enbd']
    ] },
    { k: 'publicw', v: 'low', t: [
      ['For a foreign graduate the state and sovereign employers are largely closed: ADIA, Mubadala, ADNOC and the national banks run their graduate schemes for Emiratis.',
        'Per un laureato straniero i datori statali e sovrani sono in gran parte chiusi: ADIA, Mubadala, ADNOC e le banche nazionali gestiscono i loro programmi per laureati per gli emiratini.', 'ae-gulf ae-adnoc']
    ] },
    { k: 'sponsorr', v: 'some', t: [
      ['Every expatriate job runs on an employer-applied work permit, and the Big Four say sponsorship may be available in Dubai; the national schemes do not sponsor foreigners.',
        'Ogni lavoro per espatriati si regge su un permesso di lavoro richiesto dal datore, e le Big Four dicono che a Dubai la sponsorizzazione può essere disponibile; i programmi nazionali non sponsorizzano stranieri.', 'ae-offer ae-gulf']
    ] },
    { k: 'photo', v: 'common', t: [
      ['A photo, nationality and visa status are common on Gulf CVs; recruiters add that the CV should state where you are and that you can move.',
        'Foto, nazionalità e stato del visto sono comuni nei CV del Golfo; i selezionatori aggiungono che il CV deve dire dove ti trovi e che puoi trasferirti.', 'ours ae-mp-cv']
    ] },
    { k: 'cv', v: 'two', t: [
      ['A two-page CV is the usual limit in this market; Michael Page UAE advises against crowded layouts and tailoring it to each role.',
        'Un CV di due pagine è il limite abituale in questo mercato; Michael Page UAE sconsiglia impaginazioni affollate e consiglia di adattarlo a ogni ruolo.', 'ours ae-mp-cv']
    ] },
    { k: 'letter', v: 'optional', t: [
      ['I found no employer in the UAE that publishes a cover-letter rule; a short letter is read as a plus, not a requirement.',
        'Non ho trovato alcun datore negli Emirati che pubblichi una regola sulla lettera di presentazione; una lettera breve è letta come un plus, non come un requisito.', 'ours']
    ] },
    { k: 'refs', v: 'later', t: [
      ['References are asked for at offer stage rather than in the first application.',
        'Le referenze vengono chieste alla fase di offerta più che nella prima candidatura.', 'ours']
    ] },
    { k: 'docs', v: 'certified', t: [
      ['The degree must be attested to complete residency and employment procedures for jobs that require it, and a job counts as skilled only if the certificate above secondary level is attested.',
        'Il titolo deve essere attestato per completare le pratiche di residenza e di lavoro nei lavori che lo richiedono, e un lavoro conta come qualificato solo se il certificato superiore alla secondaria è attestato.', 'ae-prep ae-skill']
    ] },
    { k: 'salary', v: 'asked', t: [
      ['Application forms and recruiters commonly ask for current and expected salary and notice period.',
        'I moduli di candidatura e i selezionatori chiedono di norma la retribuzione attuale e attesa e il preavviso.', 'ours']
    ] },
    { k: 'check', v: 'routine', t: [
      ['Medical tests are compulsory for every expatriate before residency is granted (HIV, hepatitis B, syphilis, leprosy, tuberculosis); background checks are routine at the banks and the Big Four.',
        'Le visite mediche sono obbligatorie per ogni espatriato prima del rilascio della residenza (HIV, epatite B, sifilide, lebbra, tubercolosi); i controlli sui precedenti sono di routine presso le banche e le Big Four.', 'ae-prep ours']
    ] },
    { k: 'contact', v: 'mixed', t: [
      ['Open roles reach foreigners through recruiters and portals, and recruiters say introductions help; no source read measures how many jobs are filled by personal recommendation.',
        'I ruoli aperti raggiungono gli stranieri tramite selezionatori e portali, e i selezionatori dicono che le presentazioni aiutano; nessuna fonte letta misura quanti posti siano coperti per raccomandazione personale.', 'ae-gulf ae-mp-net']
    ] },
    { k: 'abroad', v: 'workable', t: [
      ['A candidate abroad can be hired: the employer sends the signed offer, MoHRE approval of the initial work permit lets the worker enter, and the entry permit is valid for two months.',
        'Un candidato all’estero può essere assunto: il datore invia l’offerta firmata, l’approvazione del permesso di lavoro iniziale da parte del MoHRE consente l’ingresso, e il permesso d’ingresso vale due mesi.', 'ae-offer ae-prep'],
      ['A jobseeker visit visa of 60, 90 or 120 days needs no sponsor, for skilled professionals and top-500 graduates; firms still prefer people already in the country.',
        'Un visto di visita per cercare lavoro di 60, 90 o 120 giorni non richiede garante, per professionisti qualificati e laureati delle prime 500; le aziende preferiscono comunque chi è già nel paese.', 'ae-kt ours']
    ] },
    { k: 'language', v: 'english', t: [
      ['English is the business language, and Dubai Business Associates asks for fluent English, spoken and written; the statutory job offer is issued in Arabic and English plus a third language the worker understands.',
        'L’inglese è la lingua degli affari, e Dubai Business Associates chiede un inglese fluente, parlato e scritto; l’offerta di lavoro prevista dalla legge è emessa in arabo e inglese più una terza lingua che il lavoratore comprende.', 'ae-dba ae-offer']
    ] }
  ],

  rows: {
    process: [
      ['Expect an online application, one or more interviews and, at the large firms and banks, tests or an assessment day; I found no employer page that publishes the stages.',
        'Aspettati una candidatura online, uno o più colloqui e, presso grandi aziende e banche, test o una giornata di valutazione; non ho trovato alcuna pagina di datori che pubblichi le fasi.', 'ours'],
      ['Dubai Business Associates calls itself highly competitive, with 35 places for over 6,600 applicants, so the first cut is made on the written application.',
        'Dubai Business Associates si definisce molto competitivo, con 35 posti per oltre 6.600 candidati, quindi il primo taglio avviene sulla candidatura scritta.', 'ae-dba'],
      ['Once chosen, the employer signs the offer electronically and sends it to you; it must be in Arabic and English plus a third language you understand, and you must have read and understood it before signing.',
        'Una volta scelto, il datore firma l’offerta in formato elettronico e te la invia; deve essere in arabo e inglese più una terza lingua che comprendi, e devi averla letta e capita prima di firmare.', 'ae-offer']
    ],
    offer: [
      ['The signed offer is registered as a binding employment contract on arrival; the contract goes to MoHRE within 14 days of your arrival, states start date, work, workplace, duration and salary, and a fixed term cannot exceed three years but can be renewed.',
        'L’offerta firmata è registrata come contratto di lavoro vincolante all’arrivo; il contratto va al MoHRE entro 14 giorni dall’arrivo, indica data di inizio, mansione, luogo, durata e retribuzione, e un termine fisso non può superare i tre anni ma può essere rinnovato.', 'ae-offer'],
      ['Probation cannot exceed six months; the employer must give 14 days’ written notice to end it, and if you leave for another UAE employer you give at least one month’s written notice (14 days if you leave the UAE).',
        'La prova non può superare i sei mesi; il datore deve dare 14 giorni di preavviso scritto per terminarla, e se te ne vai verso un altro datore negli Emirati dai almeno un mese di preavviso scritto (14 giorni se lasci gli Emirati).', 'ae-contract'],
      ['After one year of service the private-sector end-of-service gratuity is 21 days’ basic salary per year for years 1 to 5 and 30 days per year thereafter, capped at two years’ pay.',
        'Dopo un anno di servizio la gratifica di fine rapporto nel settore privato è di 21 giorni di retribuzione base per anno per gli anni da 1 a 5 e di 30 giorni per anno in seguito, con tetto di due anni di retribuzione.', 'ae-gulf']
    ],
    sponsor: [
      ['The employer, not you, applies for the work permit with the signed offer attached; MoHRE checks the file and approval lets you enter the UAE. The library’s visa guide records that recruitment and visa costs fall on the employer under the labour law.',
        'È il datore, non tu, a richiedere il permesso di lavoro con l’offerta firmata allegata; il MoHRE controlla il fascicolo e l’approvazione ti consente di entrare negli Emirati. La guida ai visti della biblioteca registra che i costi di assunzione e di visto sono a carico del datore ai sensi della legge sul lavoro.', 'ae-offer ae-guide'],
      ['The work counts as skilled if it is in professional levels 1 to 5, you hold an attested certificate above secondary level and the monthly salary excluding commission is at least AED 4,000; that is what the employer has to be able to show.',
        'Il lavoro conta come qualificato se rientra nei livelli professionali da 1 a 5, hai un certificato attestato superiore alla secondaria e la retribuzione mensile, escluse le commissioni, è di almeno 4.000 AED; è ciò che il datore deve poter dimostrare.', 'ae-skill'],
      ['Big Four programmes in Dubai may sponsor non-nationals; the national programmes do not. Firms with 50 or more staff must also add Emiratis each year, so a foreign junior hire competes with that duty.',
        'I programmi delle Big Four a Dubai possono sponsorizzare i non cittadini; i programmi nazionali no. Le aziende con 50 o più dipendenti devono inoltre aggiungere ogni anno emiratini, quindi un’assunzione junior straniera compete con quell’obbligo.', 'ae-gulf'],
      ['Ask in the first interview whether the employer will sponsor you and from which date the permit can be filed; do not wait for the offer stage.',
        'Chiedi al primo colloquio se il datore ti sponsorizzerà e da quando si può presentare la pratica; non aspettare la fase dell’offerta.', 'ours']
    ],
    where: [
      ['PwC Middle East posts its graduate and internship programmes on careers.pwc.com, and the Emirates Group lists recruitment events and its UAE-nationals graduate pages on emiratesgroupcareers.com.',
        'PwC Middle East pubblica i suoi programmi per laureati e gli stage su careers.pwc.com, e il Gruppo Emirates elenca eventi di selezione e le pagine per laureati emiratini su emiratesgroupcareers.com.', 'ae-pwc ae-emg'],
      ['Dubai Business Associates (consultancy-me.com carried the 2026 call) is the open government-funded programme; applications for the 2026 edition closed on 1 March.',
        'Dubai Business Associates (consultancy-me.com ha pubblicato il bando 2026) è il programma aperto finanziato dal governo; le candidature per l’edizione 2026 sono chiuse il 1° marzo.', 'ae-dba'],
      ['ADNOC’s early-careers page, ADIA’s careers page and Emirates NBD’s graduate page are worth reading only to confirm they are for nationals before you spend time on them.',
        'La pagina ADNOC sui giovani, la pagina carriere di ADIA e la pagina per laureati di Emirates NBD vale la pena leggerle solo per confermare che sono per i cittadini prima di dedicarci tempo.', 'ae-adnoc ae-enbd ae-gulf']
    ],
    mistakes: [
      ['Applying to national schemes (ADIA, Mubadala, Emirates NBD Ruwad, ADNOC, KPMG, Watani) without checking nationality first; they are described as for Emiratis.',
        'Candidarsi ai programmi nazionali (ADIA, Mubadala, Ruwad di Emirates NBD, ADNOC, KPMG, Watani) senza verificare prima la nazionalità; sono descritti come per gli emiratini.', 'ae-enbd ae-kpmg ae-adnoc ae-gulf'],
      ['Starting the degree attestation late: it passes through the issuing country’s foreign ministry and the UAE embassy before use, and an apostille alone is not accepted.',
        'Avviare tardi l’attestazione del titolo: passa dal ministero degli Esteri del paese di rilascio e dall’ambasciata degli Emirati prima dell’uso, e l’apostille da sola non è accettata.', 'ae-prep ae-hcch'],
      ['Relying on the degree alone: employers quoted by Khaleej Times in June 2026 say internships, live project portfolios and certifications are now the minimum for entry-level roles.',
        'Affidarsi alla sola laurea: i datori di lavoro citati da Khaleej Times a giugno 2026 dicono che stage, portfolio di progetti reali e certificazioni sono ormai il minimo per i ruoli di primo livello.', 'ae-kt-entry'],
      ['Leaving the country during the residency procedure: the library’s visa guide records that exiting between entry and the Emirates ID cancels the process and the fees paid.',
        'Lasciare il paese durante la procedura di residenza: la guida ai visti della biblioteca registra che l’uscita tra l’ingresso e l’Emirates ID annulla la procedura e le tasse versate.', 'ae-guide']
    ]
  },

  lang: [
    { f: 'consulting', v: 'english', lv: 'C1', t: [
      ['Dubai Business Associates asks for fluent English, verbal and written, from a recent bachelor’s graduate; the selection stages are not published.',
        'Dubai Business Associates chiede un inglese fluente, parlato e scritto, a un laureato triennale recente; le fasi di selezione non sono pubblicate.', 'ae-dba']
    ] },
    { f: 'accounting', v: 'english', lv: 'B2', t: [
      ['PwC Middle East’s graduate programmes are described in English; no language certificate is asked on the pages read.',
        'I programmi per laureati di PwC Middle East sono descritti in inglese; nelle pagine lette non è richiesto alcun certificato linguistico.', 'ae-pwc']
    ] },
    { f: 'finance', v: 'english', lv: 'B2', t: [
      ['English is the language of the banks and funds at the financial centres; Arabic matters for the national schemes and government-facing roles, which are for Emiratis in any case.',
        'L’inglese è la lingua di banche e fondi nei centri finanziari; l’arabo conta per i programmi nazionali e per i ruoli a contatto con il governo, che comunque sono per gli emiratini.', 'ours']
    ] },
    { f: 'business', v: 'english', lv: 'B2', t: [
      ['Employment contracts and offers are issued in Arabic and English, and English is the working language of the multinationals.',
        'I contratti e le offerte di lavoro sono emessi in arabo e inglese, e l’inglese è la lingua di lavoro delle multinazionali.', 'ae-offer ours'],
      ['In SkillDrift’s analysis of 7,025 UAE postings, English was named in 21.3% and Arabic in 7.4%, against 13.2% for Arabic in Saudi Arabia; the sample leans to operations, engineering, sales and hospitality, so read the shares as a minimum.',
        'Nell’analisi SkillDrift di 7.025 annunci negli Emirati, l’inglese era indicato nel 21,3% e l’arabo nel 7,4%, contro il 13,2% per l’arabo in Arabia Saudita; il campione è orientato a operations, ingegneria, vendite e ospitalità, quindi le quote vanno lette come un minimo.', 'ae-skilldrift']
    ] },
    { f: 'tech', v: 'english', lv: 'B2', t: [
      ['Technology firms in the free zones work in English; no certificate is normally requested and the level is judged at interview.',
        'Le aziende tecnologiche delle zone franche lavorano in inglese; di norma non si chiede alcun certificato e il livello è valutato al colloquio.', 'ours']
    ] },
    { f: 'ai', v: 'english', lv: 'C1', t: [
      ['MBZUAI’s graduates move into AI engineer, research-associate and data-scientist roles at G42, ADNOC and DP World; the language of work is English.',
        'I laureati di MBZUAI passano a ruoli di ingegnere IA, ricercatore associato e data scientist presso G42, ADNOC e DP World; la lingua di lavoro è l’inglese.', 'ae-mbzuai ours']
    ] }
  ],

  programmes: [
    { n: 'Dubai Business Associates', o: 'Government of Dubai', f: 'consulting', in: 35, w: null, lang: 'EN', intl: 'yes', ids: 'ae-dba' },
    { n: 'Assurance Graduate Programme (Middle East)', o: 'PwC Middle East', f: 'accounting', in: null, w: null, lang: 'EN', intl: 'unknown', ids: 'ae-pwc' },
    { n: 'Watani Graduate Programme', o: 'PwC Middle East', f: 'accounting', in: null, w: null, lang: 'EN AR', intl: 'local', ids: 'ae-pwc-w' },
    { n: 'Graduate programme for Emiratis', o: 'KPMG Lower Gulf', f: 'accounting', in: null, w: null, lang: 'EN', intl: 'local', ids: 'ae-kpmg' },
    { n: 'Ruwad', o: 'Emirates NBD', f: 'finance', in: 20, w: null, lang: 'EN AR', intl: 'local', ids: 'ae-enbd' },
    { n: 'Accelerator Program Fresh Graduates', o: 'ADNOC', f: 'public', in: null, w: null, lang: 'EN AR', intl: 'local', ids: 'ae-adnoc' }
  ],

  outcomes: [
    ['The World Bank’s modelled ILO estimate puts unemployment at 2.2% of the labour force in 2025, and 6.5% for ages 15 to 24; it does not split nationals from expatriates.',
      'La stima ILO modellata della Banca mondiale indica una disoccupazione del 2,2% della forza lavoro nel 2025, e del 6,5% tra i 15 e i 24 anni; non distingue tra cittadini ed espatriati.', 'ae-wb'],
    ['The Federal Competitiveness and Statistics Centre reports unemployment of 1.9% in 2024 and youth unemployment, ages 15 to 24, of 5.2%; Khaleej Times (22 June 2026) quotes employers saying a degree alone no longer secures a first role and that internships, portfolios and certifications are the new minimum, without giving a UAE hiring figure.',
      'Il Federal Competitiveness and Statistics Centre riporta una disoccupazione dell’1,9% nel 2024 e una disoccupazione giovanile, tra i 15 e i 24 anni, del 5,2%; Khaleej Times (22 giugno 2026) raccoglie la voce di datori di lavoro secondo cui la sola laurea non basta più per un primo lavoro e stage, portfolio e certificazioni sono il nuovo minimo, senza fornire un dato sulle assunzioni negli Emirati.', 'ae-fcsc ae-kt-entry'],
    ['No source read gives a return-offer or conversion rate for the open programmes, or a time to first job for foreign graduates.',
      'Nessuna fonte letta fornisce un tasso di conferma o di conversione per i programmi aperti, né un tempo per il primo lavoro dei laureati stranieri.', 'ours']
  ],

  sources: {
    'ae-gulf': ['employer-stated', 'Admetia research library: places/gulf-and-central-eastern-europe.md §1 and §2 (ADIA, Mubadala, Emirates NBD, ADNOC and PwC pages; WAM, 22 June 2026)', 'research/places/gulf-and-central-eastern-europe.md', '2026-10-02'],
    'ae-guide': ['practitioner consensus', 'Admetia research library: visas_immigration/uae/uae_visas_immigration_guide.md (labour law Art. 6, residency procedure)', 'research/visas_immigration/uae/uae_visas_immigration_guide.md', '2026-10-05'],
    'ae-dba': ['employer-stated', 'Consultancy-me.com: Dubai’s fully funded graduate training programme kicks off 2026 applications', 'https://www.consultancy-me.com/news/12280/dubais-fully-funded-graduate-training-programme-kicks-off-2026-applications-process', '2026-10-08'],
    'ae-mbzuai': ['data', 'MBZUAI: annual employment report, cohort 3', 'https://staticcdn.mbzuai.ac.ae/mbzuaiwpprd01/2026/03/Annual-Report-Cohort-3.pdf', '2026-10-07'],
    'ae-offer': ['data', 'UAE Government portal (u.ae): Job offers and the employment process', 'https://u.ae/en/information-and-services/jobs/Sector-of-employment/employment-in-the-private-sector/expatriates-employment-in-private-sector', '2026-10-08'],
    'ae-contract': ['data', 'UAE Government portal (u.ae): Employment contracts, duration and models in the private sector', 'https://u.ae/en/information-and-services/jobs/Sector-of-employment/employment-in-the-private-sector/employment-contracts-duration-and-models-in-the-private-sector', '2026-10-08'],
    'ae-prep': ['data', 'UAE Government portal (u.ae): Preparing to work (attested certificates, medical tests, entry permit, residency)', 'https://u.ae/en/information-and-services/jobs/Sector-of-employment/employment-in-the-private-sector/preparing-to-work', '2026-10-08'],
    'ae-skill': ['data', 'UAE Government portal (u.ae): Professional levels of jobs in the UAE', 'https://u.ae/en/information-and-services/jobs/Sector-of-employment/employment-in-the-private-sector/skill-levels-of-jobs-in-the-uae', '2026-10-08'],
    'ae-mofa': ['data', 'UAE Ministry of Foreign Affairs: attestation service', 'https://www.mofa.gov.ae/en/services/attestation', '2026-10-08'],
    'ae-hcch': ['data', 'Hague Conference (HCCH): Apostille Convention status table', 'https://www.hcch.net/en/instruments/conventions/status-table/?cid=41', '2026-10-08'],
    'ae-kt': ['practitioner consensus', 'Khaleej Times: UAE’s new job exploration visa now available (3 Oct 2022)', 'https://www.khaleejtimes.com/life-and-living/visa-and-immigration-in-uae/uaes-new-job-exploration-visa-now-available-how-to-apply-validity-eligibility-explained', '2026-10-08'],
    'ae-enbd': ['employer-stated', 'Emirates NBD: graduate programmes (Ruwad and Bedaya)', 'https://www.emiratesnbd.com/en/careers/join-emirates-nbd/graduates', '2026-10-08'],
    'ae-kpmg': ['employer-stated', 'KPMG Lower Gulf: graduate programs for Emiratis', 'https://kpmg.com/ae/en/about/emiratization/graduate-programs.html', '2026-10-08'],
    'ae-adnoc': ['employer-stated', 'ADNOC: early careers programmes', 'https://jobs.adnoc.ae/us/en/early-careers', '2026-10-08'],
    'ae-pwc': ['employer-stated', 'University of Aberdeen, relaying PwC Middle East: Assurance Graduate and Summer Internship Programmes 2026', 'https://www.abdn.ac.uk/students/events-news/news/24960/', '2026-10-08'],
    'ae-pwc-w': ['employer-stated', 'PwC Middle East careers: Watani, Graduate Programme 2026, UAE Nationals', 'https://careers.pwc.com/job-invite/10173/', '2026-10-08'],
    'ae-emg': ['employer-stated', 'Emirates Group careers', 'https://www.emiratesgroupcareers.com/', '2026-10-08'],
    'ae-mp-cv': ['practitioner consensus', 'Michael Page UAE: what do employers and recruiters look for in a CV', 'https://www.michaelpage.ae/advice/career-advice/cover-letter-and-cv-advice/what-do-employers-and-recruiters-look-cv', '2026-10-08'],
    'ae-mp-net': ['practitioner consensus', 'Michael Page UAE: how to make networking work for you', 'https://www.michaelpage.ae/advice/career-advice/growing-your-career/how-make-networking-work-you', '2026-10-08'],
    'ae-skilldrift': ['practitioner consensus', 'Khaleej Times: communication tops UAE employers’ wish list as human skills lead hiring (5 Oct 2026, reporting SkillDrift)', 'https://www.khaleejtimes.com/business/uae-jobs-communication-tops-uae-employers-wish-list-as-human-skills-lead-hiring', '2026-10-08'],
    'ae-fcsc': ['data', 'Gulf News: UAE among world’s lowest in unemployment as labour force hits record 9.4 million (reporting the FCSC, updated 16 Oct 2025)', 'https://gulfnews.com/uae/government/uae-among-worlds-lowest-in-unemployment-as-labour-force-hits-record-94-million-1.500309490', '2026-10-08'],
    'ae-kt-entry': ['practitioner consensus', 'Khaleej Times: fresh graduates face shrinking opportunities as entry-level jobs decline (22 Jun 2026)', 'https://www.khaleejtimes.com/uae-fresh-graduates-few-opportunities-entry-level-roles-decline', '2026-10-08'],
    'ae-wb': ['data', 'World Bank API: unemployment, total and ages 15-24, modelled ILO estimate, United Arab Emirates', 'https://api.worldbank.org/v2/country/ARE/indicator/SL.UEM.TOTL.ZS?format=json', '2026-10-08']
  }
});
