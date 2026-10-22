/* Visas and permits: Singapore. From research/visas_immigration/singapore/
 * (guide, source register, open questions), council check of 5 Oct 2026.
 * EU and UK passports only. */
ATLAS.addVisas({
  id: 'SG',
  folder: 'singapore',
  checked: '2026-10-05',
  review: '2027-03-31',

  routes: [
    { k: 'study', p: 'eu uk', v: 'open',
      name: ['Student’s Pass', 'Student’s Pass'], law: 'Immigration Act 1959',
      t: [
        ['The university registers you on SOLAR, you file the eForm 16 two to three months before term and receive an in-principle approval to travel; stays of six months or more need a medical.',
          'L’università ti registra su SOLAR, invii l’eForm 16 da due a tre mesi prima dei corsi e ricevi un’approvazione di principio per viaggiare; i soggiorni di sei mesi o più richiedono una visita medica.', 'SG-SRC-10'],
        ['Students at public universities (NUS, NTU, SMU and others, INSEAD and ESSEC included) may work 16 hours a week in term; students at private schools may not work at all.',
          'Gli studenti delle università pubbliche (NUS, NTU, SMU e altre, INSEAD ed ESSEC comprese) possono lavorare 16 ore a settimana durante i corsi; gli studenti delle scuole private non possono lavorare affatto.', 'SG-SRC-09 SG-SRC-10']
      ],
      f: [[['Fees', 'Costi'], ['S$45 + S$60', '45 S$ + 60 S$'], 'SG-SRC-10']] },

    { k: 'intern', p: 'eu uk', v: 'sponsor',
      name: ['Training Employment Pass', 'Training Employment Pass'], law: 'Employment of Foreign Manpower Act',
      t: [['Students of foreign universities doing a curricular internship need a Training Employment Pass: at least S$3,000 a month, three months at most, not renewable, outside quotas. A Training Work Permit allows up to six months but counts against the quota. Students at Singapore universities need no pass.',
        'Gli studenti di università estere che fanno un tirocinio curricolare hanno bisogno di un Training Employment Pass: almeno 3.000 S$ al mese, al massimo tre mesi, non rinnovabile, fuori quota. Un Training Work Permit consente fino a sei mesi ma rientra nella quota. Gli studenti delle università di Singapore non hanno bisogno di pass.', 'SG-SRC-08 SG-SRC-09']],
      f: [[['Fees', 'Costi'], ['S$105 + S$225', '105 S$ + 225 S$'], 'SG-SRC-08']] },

    { k: 'search', p: 'eu uk', v: 'open',
      name: ['Long-Term Visit Pass for graduates', 'Long-Term Visit Pass per laureati'], law: 'ICA',
      t: [['After a full-time degree from a Singapore public university, a one-year pass, once only, to stay and look for work. It does not allow work; with an offer you switch to an Employment or S Pass without leaving.',
        'Dopo una laurea a tempo pieno in un’università pubblica di Singapore, un pass di un anno, una sola volta, per restare e cercare lavoro. Non consente di lavorare; con un’offerta si passa a un Employment o S Pass senza partire.', 'SG-SRC-11 SG-SRC-03']],
      f: [[['Fees', 'Costi'], ['S$45 + S$60', '45 S$ + 60 S$'], 'SG-SRC-11']] },

    { k: 'work', p: 'eu uk', v: 'sponsor',
      name: ['Employment Pass', 'Employment Pass'], law: 'Employment of Foreign Manpower Act',
      t: [
        ['The salary must reach an age-based floor, then score at least 40 points under COMPASS on salary, qualifications, nationality diversity and local hiring. Degree claims need a verification report.',
          'Lo stipendio deve raggiungere una soglia legata all’età, poi ottenere almeno 40 punti con COMPASS su stipendio, titoli, diversità di nazionalità e assunzioni locali. I titoli richiedono un rapporto di verifica.', 'SG-SRC-03 SG-SRC-04 SG-SRC-05'],
        ['Mid-level roles use the S Pass, with quotas and a levy the employer pays; EU citizens cannot get ordinary work permits.',
          'I ruoli intermedi usano l’S Pass, con quote e una tassa a carico del datore; i cittadini UE non possono ottenere i permessi di lavoro ordinari.', 'SG-SRC-06']
      ],
      f: [
        [['Salary floor', 'Soglia salariale'], ['S$5,600 a month at 23, up to S$10,700 at 45', '5.600 S$ al mese a 23 anni, fino a 10.700 S$ a 45'], 'SG-SRC-03'],
        [['Salary floor, financial services', 'Soglia salariale, servizi finanziari'], ['S$6,200, up to S$11,800', '6.200 S$, fino a 11.800 S$'], 'SG-SRC-03'],
        [['Fees', 'Costi'], ['S$105 + S$225', '105 S$ + 225 S$'], 'SG-SRC-03']
      ],
      w: ['The floors rise on 1 January 2027, to S$6,000 and S$6,600.',
        'Le soglie salgono il 1° gennaio 2027, a 6.000 S$ e 6.600 S$.', 'SG-SRC-03'] },

    { k: 'research', p: 'eu uk', v: 'sponsor',
      name: ['Research students and PhDs', 'Studenti di ricerca e dottorati'], law: 'Immigration Act 1959',
      t: [
        ['Unpaid thesis research at NUS, NTU or SMU uses a non-graduating Student’s Pass; a paid research internship at a company a Training Employment Pass.',
          'La ricerca di tesi non retribuita a NUS, NTU o SMU usa un Student’s Pass non di laurea; un tirocinio di ricerca retribuito in azienda un Training Employment Pass.', 'SG-SRC-10 SG-SRC-08'],
        ['PhD students often hold a SINGA award covering tuition with a monthly stipend; PhD stipends are free of income tax.',
          'I dottorandi hanno spesso una borsa SINGA che copre le tasse con un assegno mensile; le borse di dottorato sono esenti da imposta sul reddito.', 'SG-SRC-10 SG-SRC-17']
      ],
      f: [[['SINGA stipend', 'Assegno SINGA'], ['S$2,700 to S$3,200 a month', 'da 2.700 a 3.200 S$ al mese'], 'SG-SRC-10']] },

    { k: 'whv', p: 'eu uk', v: 'limited',
      name: ['Work Holiday Programme', 'Work Holiday Programme'], law: 'MOM',
      t: [['Six months, aged 18 to 25, for students and recent graduates of universities in Australia, France, Germany, Hong Kong, Japan, the Netherlands, New Zealand, Switzerland, the UK or the US. What counts is where the university is, not your passport: an Italian degree does not qualify.',
        'Sei mesi, dai 18 ai 25 anni, per studenti e neolaureati di università in Australia, Francia, Germania, Hong Kong, Giappone, Paesi Bassi, Nuova Zelanda, Svizzera, Regno Unito o Stati Uniti. Conta dove ha sede l’università, non il passaporto: una laurea italiana non vale.', 'SG-SRC-07']],
      f: [[['Fee', 'Costo'], ['S$175', '175 S$'], 'SG-SRC-07']] },

    { k: 'short', p: 'eu uk', v: 'open',
      name: ['Visa-free visit', 'Visita senza visto'], law: 'Immigration Act 1959',
      t: [['Visa-free for 30 to 90 days, at the officer’s discretion, with no work. Submit the SG Arrival Card within three days before arriving.',
        'Senza visto da 30 a 90 giorni, a discrezione dell’agente, senza lavorare. Si invia la SG Arrival Card nei tre giorni prima dell’arrivo.', 'SG-SRC-12 SG-SRC-13 SG-SRC-02']] }
  ],

  arrival: [
    { k: 'before', p: 'eu uk', t: [
      ['Fill in the SG Arrival Card, with its health declaration, within 3 days before your flight. Students apply in the SOLAR portal (eForm 16, S$45) 2 to 3 months before classes start and travel on the in-principle approval letter.',
        'Compila la SG Arrival Card, con la dichiarazione sanitaria, nei 3 giorni prima del volo. Gli studenti fanno domanda nel portale SOLAR (eForm 16, 45 S$) 2-3 mesi prima dell’inizio delle lezioni e viaggiano con la lettera di approvazione di principio.', 'SG-SRC-13 SG-SRC-10'],
      ['Italian documents need an apostille and a sworn English translation, but no legalisation at the embassy. Check the rules before bringing controlled medicines.',
        'I documenti italiani richiedono l’apostille e una traduzione giurata in inglese, ma nessuna legalizzazione presso l’ambasciata. Verifica le regole prima di portare farmaci soggetti a controllo.', 'SG-SRC-19 SG-SRC-20']
    ] },
    { k: 'address', p: 'eu uk', t: [
      ['A residential lease carries stamp duty of 0.4% of the total rent of the contract.',
        'Un contratto d’affitto residenziale sconta un’imposta di bollo dello 0,4% dell’affitto totale del contratto.', 'SG-SRC-17']
    ] },
    { k: 'card', p: 'eu uk', t: [
      ['Do not start work on the in-principle approval alone: your employer must request the pass on myMOM and get the notification letter, which lets you work and travel for a month until you register biometrics for the card at the MOM Services Centre.',
        'Non iniziare a lavorare con la sola approvazione di principio: il datore deve chiedere il pass su myMOM e ottenere la lettera di notifica, che ti permette di lavorare e viaggiare per un mese fino alla registrazione biometrica per la carta presso il MOM Services Centre.', 'SG-SRC-02 SG-SRC-03'],
      ['Students pay S$60 (plus S$30 visa fee if applicable) and receive a digital Student’s Pass through FileSG and Singpass.',
        'Gli studenti pagano 60 S$ (più 30 S$ di visto se dovuto) e ricevono un Student’s Pass digitale tramite FileSG e Singpass.', 'SG-SRC-10']
    ] },
    { k: 'number', p: 'eu uk', t: [
      ['The in-principle approval letter carries your temporary foreign identification number (FIN).',
        'La lettera di approvazione di principio riporta il tuo numero d’identificazione per stranieri (FIN) provvisorio.', 'SG-SRC-10'],
      ['Foreigners who are not permanent residents pay nothing into the CPF pension fund; tax residents (183 days or more) pay progressive rates from 0% to 24%, with the first S$20,000 tax-free.',
        'Gli stranieri non residenti permanenti non versano nulla al fondo pensione CPF; i residenti fiscali (183 giorni o più) pagano aliquote progressive dallo 0% al 24%, con i primi 20.000 S$ esenti.', 'SG-SRC-16 SG-SRC-17']
    ] },
    { k: 'health', p: 'eu uk', t: [
      ['Students staying 6 months or more have a medical check (chest X-ray for tuberculosis and an HIV test), about S$55 to S$120 at approved clinics.',
        'Gli studenti che restano 6 mesi o più fanno una visita medica (radiografia del torace per la tubercolosi e test HIV), circa 55-120 S$ in cliniche approvate.', 'SG-SRC-10']
    ] },
    { k: 'bank', p: 'eu uk', none: true },
    { k: 'keep', p: 'eu uk', t: [
      ['If your pass is cancelled you get a 30-day short-term visit pass that cannot be extended: without a new sponsor in that time you must leave, and overstaying over 90 days is punished with prison and caning.',
        'Se il pass viene cancellato ricevi un pass di visita breve di 30 giorni non prorogabile: senza un nuovo sponsor entro quel termine devi partire, e restare oltre i 90 giorni è punito con il carcere e la fustigazione.', 'SG-SRC-01'],
      ['When you stop working, your employer withholds your final pay and bonus until your taxes are cleared (form IR21).',
        'Quando smetti di lavorare, il datore trattiene l’ultimo stipendio e i bonus finché le imposte non sono saldate (modulo IR21).', 'SG-SRC-17']
    ] }
  ],

  traps: [
    { p: 'eu uk', t: ['Do not start work on the in-principle approval alone: wait for the notification letter.',
      'Non iniziare a lavorare con la sola approvazione di principio: aspetta la lettera di notifica.', 'SG-SRC-02 SG-SRC-03'] },
    { p: 'eu uk', t: ['When a pass is cancelled you get 30 days to leave or find a new sponsor; overstaying over 90 days means prison and caning.',
      'Quando un pass viene cancellato hai 30 giorni per partire o trovare un nuovo sponsor; un overstay oltre 90 giorni comporta carcere e fustigazione.', 'SG-SRC-01'] },
    { p: 'eu uk', t: ['Spouses on a Dependant’s Pass can no longer work on a letter of consent: they need their own pass.',
      'I coniugi con Dependant’s Pass non possono più lavorare con una lettera di consenso: serve un pass proprio.', 'SG-SRC-14'] },
    { p: 'eu uk', t: ['When you stop working, the employer holds your last salary until the tax is cleared.',
      'Quando smetti di lavorare, il datore trattiene l’ultimo stipendio finché le imposte non sono liquidate.', 'SG-SRC-17'] }
  ],

  open: [
    { st: 'open', t: ['How COMPASS scores degrees from Bocconi, Luiss and other specialist schools not on the top-tier list.',
      'Come COMPASS valuti i titoli di Bocconi, Luiss e altre scuole specializzate non nell’elenco di fascia alta.'] },
    { st: 'open', t: ['Degree checks with Italian universities can take four to six weeks, not the two the agencies state.',
      'Le verifiche dei titoli con le università italiane possono richiedere da quattro a sei settimane, non le due dichiarate dalle agenzie.'] },
    { st: 'watch', t: ['ADHD and other controlled medicines need approval 10 to 14 days before the flight.',
      'I farmaci per l’ADHD e altri farmaci controllati richiedono un’autorizzazione da 10 a 14 giorni prima del volo.'] }
  ]
});

/* Sources: generated by tools/visas-sources.js from research/visas_immigration/singapore/singapore_sources.md.
 * Do not edit by hand: change the register, then run the tool. */
ATLAS.visaSources('SG', {
  "SG-SRC-10": ["Immigration & Checkpoints Authority (ICA): Student’s Pass (STP) Application via SOLAR Portal (IHL Guidelines)","https://www.ica.gov.sg/reside/STP/apply/ihl","2026-10-05"],
  "SG-SRC-09": ["Ministry of Manpower (MOM): Work Pass Exemption for Foreign Students in Singapore","https://www.mom.gov.sg/passes-and-permits/work-pass-exemption-for-foreign-students","2026-10-05"],
  "SG-SRC-08": ["Ministry of Manpower (MOM): Training Employment Pass (TEP) and Training Work Permit (TWP)","https://www.mom.gov.sg/passes-and-permits/training-employment-pass","2026-10-05"],
  "SG-SRC-11": ["Immigration & Checkpoints Authority (ICA): Long-Term Visit Pass (LTVP) for IHL Graduates Seeking Employment","https://www.ica.gov.sg/reside/LTVP/apply/graduate-from-an-institute-of-higher-learning-seeking-employment-in-singapore","2026-10-05"],
  "SG-SRC-03": ["Ministry of Manpower (MOM): Employment Pass (EP) Eligibility, Salary Benchmarks & COMPASS","https://www.mom.gov.sg/passes-and-permits/employment-pass/eligibility","2026-10-05"],
  "SG-SRC-04": ["Ministry of Manpower (MOM): COMPASS C2 List of Top-Tier Institutions (Release Nov 2025)","https://www.mom.gov.sg/-/media/mom/documents/work-passes-and-permits/compass/compass-c2-list-of-top-tier-institutions-upcoming.pdf","2026-10-05"],
  "SG-SRC-05": ["Ministry of Manpower (MOM): Mandatory Background Screening for COMPASS C2 Qualifications","https://www.mom.gov.sg/passes-and-permits/employment-pass/upcoming-changes-to-employment-pass-eligibility/compass","2026-10-05"],
  "SG-SRC-06": ["Ministry of Manpower (MOM): S Pass Eligibility, Salary Criteria, DRC Quota and Levy","https://www.mom.gov.sg/passes-and-permits/s-pass/eligibility","2026-10-05"],
  "SG-SRC-17": ["Inland Revenue Authority of Singapore (IRAS): Individual Income Tax Rates and Tax Residency Rules","https://www.iras.gov.sg/taxes/individual-income-tax/basics-of-individual-income-tax/tax-residency-and-tax-rates/individual-income-tax-rates","2026-10-05"],
  "SG-SRC-07": ["Ministry of Manpower (MOM): Work Holiday Programme (WHP) Eligibility and Guidelines","https://www.mom.gov.sg/passes-and-permits/work-holiday-programme/eligibility","2026-10-05"],
  "SG-SRC-12": ["Immigration & Checkpoints Authority (ICA): Visa Requirements and Visa-Free Entry for Foreign Visitors","https://www.ica.gov.sg/enter-transit-depart/entering-singapore/visa-requirements","2026-10-05"],
  "SG-SRC-13": ["Immigration & Checkpoints Authority (ICA): SG Arrival Card (SGAC) with Electronic Health Declaration","https://eservices.ica.gov.sg/sgarrivalcard/","2026-10-05"],
  "SG-SRC-02": ["Singapore Statutes Online / AGC: Employment of Foreign Manpower Act 1990 (EFMA)","https://sso.agc.gov.sg/Act/EFMA1990","2026-10-05"],
  "SG-SRC-19": ["Singapore Academy of Law (SAL) / HCCH: Apostille Convention (Hague Convention of 5 October 1961)","https://legalisation.sal.sg/","2026-10-05"],
  "SG-SRC-20": ["Health Sciences Authority (HSA) & MOH: Personal Importation of Controlled Medications and Tobacco Control","https://www.hsa.gov.sg/personal-medication","2026-10-05"],
  "SG-SRC-16": ["Central Provident Fund Board (CPFB): Closure of CPF Accounts for Non-Singapore Citizens and Non-PRs","https://www.cpf.gov.sg/AccountClosure","2026-10-05"],
  "SG-SRC-01": ["Singapore Statutes Online / AGC: Immigration Act 1959 (2020 Rev. Ed.) & Regolamenti d'Attuazione","https://sso.agc.gov.sg/Act/IA1959","2026-10-05"],
  "SG-SRC-14": ["Ministry of Manpower (MOM): Dependant's Pass (DP) and Family LTVP Eligibility & Work Rights","https://www.mom.gov.sg/passes-and-permits/dependants-pass/eligibility","2026-10-05"]
});
