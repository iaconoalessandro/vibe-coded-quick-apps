/* Visas and permits: New Zealand. From research/visas_immigration/new_zealand/
 * (guide, source register, open questions), council check of 5 Oct 2026.
 * EU and UK passports only; the research takes an Italian citizen as reference. */
ATLAS.addVisas({
  id: 'NZ',
  folder: 'new_zealand',
  checked: '2026-10-05',
  review: '2027-03-31',

  routes: [
    { k: 'study', p: 'eu uk', v: 'open',
      name: ['Fee Paying Student Visa', 'Fee Paying Student Visa'], law: 'Immigration Act 2009',
      t: [
        ['With an offer from an NZQA-accredited provider, the first year’s fees paid, a return ticket and approved insurance. Courses of up to three months need only the NZeTA.',
          'Con un’offerta di un ente accreditato NZQA, la retta del primo anno pagata, un biglietto di ritorno e un’assicurazione approvata. I corsi fino a tre mesi richiedono solo la NZeTA.', 'NZ-SRC-07 NZ-SRC-24 NZ-SRC-12'],
        ['Up to 25 hours a week in term for visas granted since 3 November 2025, full time in breaks; no self-employment.',
          'Fino a 25 ore a settimana durante i corsi per i visti concessi dal 3 novembre 2025, a tempo pieno nelle pause; niente lavoro autonomo.', 'NZ-SRC-08']
      ],
      f: [
        [['Funds', 'Mezzi'], ['NZ$20,000 a year', '20.000 NZ$ l’anno'], 'NZ-SRC-07'],
        [['Fees', 'Costi'], ['NZ$750 + NZ$100 visitor levy', '750 NZ$ + 100 NZ$ di tassa turistica'], 'NZ-SRC-07 NZ-SRC-11']
      ],
      w: ['Money parked in the account just before applying is refused: funds need a three-to-six-month history.',
        'Il denaro depositato sul conto appena prima della domanda viene rifiutato: i fondi devono avere una storia di tre-sei mesi.', 'NZ-SRC-07'] },

    { k: 'intern', p: 'eu uk', v: 'sponsor',
      name: ['Student and Trainee Work Visa', 'Student and Trainee Work Visa'], law: 'INZ Operational Manual',
      t: [['A placement required by your foreign university needs a Student and Trainee Work Visa, with the agreement between university and host. Others use the working holiday or a Specific Purpose Work Visa.',
        'Un tirocinio richiesto dalla tua università estera richiede uno Student and Trainee Work Visa, con la convenzione tra università ed ente. Gli altri usano la vacanza-lavoro o uno Specific Purpose Work Visa.', 'NZ-SRC-15 NZ-SRC-10']],
      f: [[['Fee', 'Costo'], ['NZ$750 to NZ$850', 'da 750 a 850 NZ$'], 'NZ-SRC-15']] },

    { k: 'search', p: 'eu uk', v: 'open',
      name: ['Post-Study Work Visa', 'Post-Study Work Visa'], law: 'INZ Operational Manual WD3',
      t: [['An open work visa, once in a lifetime: three years after a New Zealand master’s (30 weeks of study) or PhD, up to three after a bachelor’s. Apply within three months of the student visa expiring.',
        'Un visto di lavoro aperto, una sola volta nella vita: tre anni dopo un master neozelandese (30 settimane di studio) o un dottorato, fino a tre dopo una laurea triennale. Si fa domanda entro tre mesi dalla scadenza del visto studentesco.', 'NZ-SRC-09']],
      f: [
        [['Funds', 'Mezzi'], ['NZ$5,000', '5.000 NZ$'], 'NZ-SRC-09'],
        [['Fee', 'Costo'], ['NZ$1,670', '1.670 NZ$'], 'NZ-SRC-09']
      ],
      w: ['While the application is pending you hold an interim visa with visitor conditions: you may not work.',
        'Mentre la domanda è in corso hai un interim visa con condizioni da visitatore: non puoi lavorare.', 'NZ-SRC-16'] },

    { k: 'work', p: 'eu uk', v: 'sponsor',
      name: ['Accredited Employer Work Visa', 'Accredited Employer Work Visa'], law: 'INZ Operational Manual WA',
      t: [
        ['Three steps: the employer is accredited, passes a job check showing no local candidate, then you apply with its token. You need three years of relevant experience or a level-4 qualification, a full-time contract and no 90-day trial clause.',
          'Tre passaggi: il datore è accreditato, supera un job check che dimostra l’assenza di candidati locali, poi fai domanda con il suo token. Servono tre anni di esperienza pertinente o una qualifica di livello 4, un contratto a tempo pieno e nessuna clausola di prova di 90 giorni.', 'NZ-SRC-02 NZ-SRC-03'],
        ['Skilled roles get up to five years; lower-skilled ones three, then twelve months abroad.',
          'I ruoli qualificati ottengono fino a cinque anni; quelli meno qualificati tre, poi dodici mesi all’estero.', 'NZ-SRC-02']
      ],
      f: [
        [['Pay', 'Paga'], ['at least the market rate, and NZ$23.95 an hour', 'almeno la tariffa di mercato, e 23,95 NZ$ l’ora'], 'NZ-SRC-19'],
        [['Fee', 'Costo'], ['NZ$1,540', '1.540 NZ$'], 'NZ-SRC-03']
      ] },

    { k: 'stay', p: 'eu uk', v: 'limited',
      name: ['Skilled Migrant Category and Green List', 'Skilled Migrant Category e Green List'], law: 'INZ Operational Manual SM',
      t: [['Residence needs six points from a recognised degree, a New Zealand professional registration or high pay, plus years of skilled work in New Zealand, always with a skilled job offer. Green List Tier 1 roles, such as software or civil engineers and doctors, go straight to residence.',
        'La residenza richiede sei punti da un titolo riconosciuto, un’abilitazione professionale neozelandese o una paga alta, più anni di lavoro qualificato in Nuova Zelanda, sempre con un’offerta di lavoro qualificato. I ruoli Green List Tier 1, come ingegneri del software o civili e medici, vanno direttamente alla residenza.', 'NZ-SRC-04 NZ-SRC-05 NZ-SRC-06']],
      f: [[['Fee', 'Costo'], ['NZ$6,450', '6.450 NZ$'], 'NZ-SRC-05']] },

    { k: 'research', p: 'eu uk', v: 'sponsor',
      name: ['Researchers and PhDs', 'Ricercatori e dottorati'], law: 'INZ Operational Manual',
      t: [
        ['Visiting academics and researchers come on a Specific Purpose Work Visa with the host’s form; thesis research for a foreign university on a Student and Trainee Work Visa.',
          'Accademici e ricercatori in visita vengono con uno Specific Purpose Work Visa con il modulo dell’ente; la ricerca di tesi per un’università estera con uno Student and Trainee Work Visa.', 'NZ-SRC-15'],
        ['International PhD students pay domestic fees, may work full time, their partners get open work visas and their children attend state school free. A PhD gives all six residence points.',
          'I dottorandi internazionali pagano le tasse dei residenti, possono lavorare a tempo pieno, i partner ottengono visti di lavoro aperti e i figli frequentano gratis la scuola statale. Un dottorato dà tutti e sei i punti per la residenza.', 'NZ-SRC-07 NZ-SRC-08 NZ-SRC-14 NZ-SRC-04']
      ],
      f: [[['PhD fees', 'Tasse di dottorato'], ['NZ$7,000 to 9,500 a year', 'da 7.000 a 9.500 NZ$ l’anno'], 'NZ-SRC-07']] },

    { k: 'whv', p: 'eu', v: 'open',
      name: ['Working Holiday Visa', 'Working Holiday Visa'], law: 'bilateral agreements',
      t: [['Terms depend on your country. For Italians, aged 18 to 30: 12 months, no cap, at most three months with one employer, no permanent jobs, up to six months of study.',
        'Le condizioni dipendono dal paese. Per gli italiani, dai 18 ai 30 anni: 12 mesi, senza tetto, al massimo tre mesi con lo stesso datore, niente lavori a tempo indeterminato, fino a sei mesi di studio.', 'NZ-SRC-10']],
      f: [
        [['Fees', 'Costi'], ['NZ$670 + NZ$100 levy', '670 NZ$ + 100 NZ$ di tassa'], 'NZ-SRC-10 NZ-SRC-11'],
        [['Funds', 'Mezzi'], ['NZ$4,200', '4.200 NZ$'], 'NZ-SRC-10']
      ] },

    { k: 'whv', p: 'uk', v: 'open',
      name: ['Working Holiday Visa', 'Working Holiday Visa'], law: 'bilateral agreement',
      t: [['British citizens can apply up to age 35 and stay up to three years.',
        'I cittadini britannici possono fare domanda fino a 35 anni e restare fino a tre anni.', 'NZ-SRC-10']] },

    { k: 'short', p: 'eu uk', v: 'open',
      name: ['NZeTA', 'NZeTA'], law: 'Immigration Act 2009',
      t: [['Visa-free with an NZeTA, valid two years: up to three months for EU citizens, six for British citizens, with no work.',
        'Senza visto con la NZeTA, valida due anni: fino a tre mesi per i cittadini UE, sei per i britannici, senza lavorare.', 'NZ-SRC-12']],
      f: [[['NZeTA', 'NZeTA'], ['NZ$17 in the app + NZ$100 levy', '17 NZ$ nell’app + 100 NZ$ di tassa'], 'NZ-SRC-12 NZ-SRC-11']] }
  ],

  arrival: [
    { k: 'before', p: 'eu uk', t: [
      ['Long-stay visas ask for an acceptable standard of health and police certificates; get documents apostilled, and use only a licensed immigration adviser if you hire one.',
        'I visti per lunghi soggiorni richiedono uno standard di salute accettabile e certificati penali; fai apostillare i documenti, e rivolgiti solo a un consulente per l’immigrazione abilitato se ne usi uno.', 'NZ-SRC-17 NZ-SRC-18 NZ-SRC-29 NZ-SRC-27'],
      ['Students, visitors and working holiday makers get no public health care: arrange comprehensive private insurance for the whole stay before you fly.',
        'Studenti, visitatori e chi fa la vacanza-lavoro non hanno accesso alla sanità pubblica: prepara un’assicurazione privata completa per tutto il soggiorno prima di partire.', 'NZ-SRC-22 NZ-SRC-24']
    ] },
    { k: 'address', p: 'eu uk', t: [
      ['Banks must verify a physical address in New Zealand: if you are in a hostel or short-term rental, ask the manager for a stamped address letter or use your bank’s host-letter form.',
        'Le banche devono verificare un indirizzo fisico in Nuova Zelanda: se sei in ostello o in un affitto breve, chiedi al gestore una lettera timbrata sull’indirizzo o usa il modulo di ospitalità della banca.', 'NZ-SRC-28']
    ] },
    { k: 'card', p: 'eu uk', none: true },
    { k: 'number', p: 'eu uk', t: [
      ['Apply online at ird.govt.nz for an IRD number before you start work, with passport, visa, home tax number and an active New Zealand bank account; give your employer the tax code declaration (IR330), or 45% is withheld.',
        'Chiedi online su ird.govt.nz il numero IRD prima di iniziare a lavorare, con passaporto, visto, codice fiscale del tuo paese e un conto bancario neozelandese attivo; consegna al datore la dichiarazione del codice fiscale (IR330), o viene trattenuto il 45%.', 'NZ-SRC-28 NZ-SRC-21']
    ] },
    { k: 'health', p: 'eu uk', t: [
      ['Public health care is only for residents, citizens and workers on visas of 2 years or more. The accident scheme ACC covers everyone in the country for injuries from accidents, but not illness.',
        'La sanità pubblica è solo per residenti, cittadini e lavoratori con visti di 2 anni o più. Lo schema per gli infortuni ACC copre chiunque si trovi nel paese per gli infortuni da incidente, ma non le malattie.', 'NZ-SRC-22 NZ-SRC-23']
    ] },
    { k: 'bank', p: 'eu uk', t: [
      ['Open an account at ANZ, ASB, BNZ or Westpac with your passport and proof of address; you need it to get your IRD number.',
        'Apri un conto presso ANZ, ASB, BNZ o Westpac con passaporto e prova dell’indirizzo; ti serve per ottenere il numero IRD.', 'NZ-SRC-28']
    ] },
    { k: 'keep', p: 'eu uk', t: [
      ['Apply for your next visa before yours expires to get an interim visa, but do not leave New Zealand: it ends the moment you depart. Moving from a student to a post-study work visa, the interim visa usually has visitor conditions, so you may not work while you wait.',
        'Chiedi il visto successivo prima della scadenza per ottenere un visto provvisorio, ma non lasciare la Nuova Zelanda: decade nel momento in cui parti. Passando da un visto per studio a uno post-studio, il visto provvisorio ha di solito condizioni da visitatore, quindi non puoi lavorare durante l’attesa.', 'NZ-SRC-16 NZ-SRC-01']
    ] }
  ],

  traps: [
    { p: 'eu uk', t: ['An interim visa ends the moment you leave New Zealand, and your pending application with it.',
      'Un interim visa decade nel momento in cui lasci la Nuova Zelanda, e con esso la domanda in corso.', 'NZ-SRC-01 NZ-SRC-16'] },
    { p: 'eu uk', t: ['Without an IRD number your pay is taxed at 45%.',
      'Senza IRD number la paga è tassata al 45%.', 'NZ-SRC-21 NZ-SRC-28'] },
    { p: 'eu uk', t: ['Public healthcare is only for residents and those on work visas of two years or more; students and working holidaymakers need insurance. ACC covers accidents, not illness.',
      'La sanità pubblica è solo per residenti e titolari di visti di lavoro di due anni o più; studenti e working holiday hanno bisogno di un’assicurazione. L’ACC copre gli infortuni, non le malattie.', 'NZ-SRC-22 NZ-SRC-23'] },
    { p: 'eu uk', t: ['Use only licensed immigration advisers.',
      'Rivolgiti solo a consulenti d’immigrazione abilitati.', 'NZ-SRC-27'] }
  ],

  open: [
    { st: 'open', t: ['How students on visas granted before November 2025 move to the 25-hour limit.',
      'Come gli studenti con visti concessi prima di novembre 2025 passino al limite di 25 ore.'] },
    { st: 'watch', t: ['Whether the three-year experience rule for the AEWV will be relaxed to two years for some roles.',
      'Se la regola dei tre anni di esperienza per l’AEWV verrà ridotta a due per alcuni ruoli.'] },
    { st: 'open', t: ['Whether Italian master’s degrees are on the list of qualifications exempt from NZQA assessment.',
      'Se le lauree magistrali italiane siano nell’elenco dei titoli esenti dalla valutazione NZQA.'] }
  ]
});

/* Sources: generated by tools/visas-sources.js from research/visas_immigration/new_zealand/new_zealand_sources.md.
 * Do not edit by hand: change the register, then run the tool. */
ATLAS.visaSources('NZ', {
  "NZ-SRC-07": ["Immigration New Zealand (INZ): Scheda Ufficiale del Visto: Fee Paying Student Visa","https://www.immigration.govt.nz/new-zealand-visas/visas/visa/fee-paying-student-visa","2026-10-05"],
  "NZ-SRC-24": ["New Zealand Qualifications Authority (NZQA): The Education (Pastoral Care of Tertiary and International Learners) Code of Practice 2021","https://www.nzqa.govt.nz/providers-partners/tertiary-and-international-learners-code/","2026-10-05"],
  "NZ-SRC-12": ["Immigration New Zealand (INZ): Scheda Ufficiale: NZeTA (New Zealand Electronic Travel Authority)","https://www.immigration.govt.nz/new-zealand-visas/visas/visa/nzeta","2026-10-05"],
  "NZ-SRC-08": ["Immigration New Zealand (INZ) / MBIE: INZ Operational Manual: Temporary Entry - Students (Instructions U3.20, U13: Work Rights)","https://www.opsmanual.immigration.govt.nz/#34394.htm","2026-10-05"],
  "NZ-SRC-11": ["New Zealand Parliamentary Counsel Office: Immigration (Visa, Entry Permission, and Related Matters) Regulations 2010 (SR 2010/241, Reg 26AA - IVL)","https://www.legislation.govt.nz/regulation/public/2010/0241/latest/LMS223596.html","2026-10-05"],
  "NZ-SRC-15": ["Immigration New Zealand (INZ): Visti per Tirocini, Ricerca e Scambi: Student and Trainee Work Visa, Specific Purpose Work Visa, Exchange Student Visa","https://www.immigration.govt.nz/new-zealand-visas/visas/visa/student-and-trainee-work-visa","2026-10-05"],
  "NZ-SRC-10": ["Immigration New Zealand (INZ): Scheda Ufficiale del Visto: Italy Working Holiday Visa (Accordo Bilaterale Italia - NZ)","https://www.immigration.govt.nz/new-zealand-visas/visas/visa/italy-working-holiday-visa","2026-10-05"],
  "NZ-SRC-09": ["Immigration New Zealand (INZ) / MBIE: INZ Operational Manual: Temporary Entry - Post-Study Work (Instructions WD2 & WD3.5)","https://www.opsmanual.immigration.govt.nz/#34411.htm","2026-10-05"],
  "NZ-SRC-16": ["Immigration New Zealand (INZ) / MBIE: INZ Operational Manual: General Provisions - Interim Visas (Instructions E4.5 & E4.10)","https://www.opsmanual.immigration.govt.nz/#35012.htm","2026-10-05"],
  "NZ-SRC-02": ["Immigration New Zealand (INZ) / Ministry of Business,…: INZ Operational Manual: Temporary Entry - Work (Instructions WA: Accredited Employer Work Visa)","https://www.opsmanual.immigration.govt.nz/#76540.htm","2026-10-05"],
  "NZ-SRC-03": ["Immigration New Zealand (INZ): Scheda Ufficiale del Visto: Accredited Employer Work Visa (AEWV)","https://www.immigration.govt.nz/new-zealand-visas/visas/visa/accredited-employer-work-visa","2026-10-05"],
  "NZ-SRC-19": ["Employment New Zealand / MBIE: Minimum Wage Rates 2024–2026 (Order in Council)","https://www.employment.govt.nz/hours-and-wages/pay/minimum-wage/minimum-wage-rates","2026-10-05"],
  "NZ-SRC-04": ["Immigration New Zealand (INZ) / MBIE: INZ Operational Manual: Skilled Migrant Category (Instructions SM & SR: 6-Point System)","https://www.opsmanual.immigration.govt.nz/#71520.htm","2026-10-05"],
  "NZ-SRC-05": ["Immigration New Zealand (INZ): Scheda Ufficiale del Visto: Skilled Migrant Category Resident Visa","https://www.immigration.govt.nz/new-zealand-visas/visas/visa/skilled-migrant-category-resident-visa","2026-10-05"],
  "NZ-SRC-06": ["Immigration New Zealand (INZ): Green List Pathways: Straight to Residence Visa (Tier 1) & Work to Residence Visa (Tier 2)","https://www.immigration.govt.nz/new-zealand-visas/visas/visa/straight-to-residence-visa","2026-10-05"],
  "NZ-SRC-14": ["Immigration New Zealand (INZ): Schede Visti Familiari: Partner of a Worker Work Visa, Partner of a Student Work Visa, Dependent Child Student Visa","https://www.immigration.govt.nz/new-zealand-visas/visas/visa/partner-of-a-worker-work-visa","2026-10-05"],
  "NZ-SRC-17": ["Immigration New Zealand (INZ) / MBIE: INZ Operational Manual: Health Requirements - Acceptable Standard of Health (Instructions A4.10, A4.15, A4.25, A4.65)","https://www.opsmanual.immigration.govt.nz/#46161.htm","2026-10-05"],
  "NZ-SRC-18": ["Immigration New Zealand (INZ) / MBIE: INZ Operational Manual: Character Requirements - Police Certificates & Character Waivers (Instruction A5)","https://www.opsmanual.immigration.govt.nz/#35058.htm","2026-10-05"],
  "NZ-SRC-29": ["Convenzione dell'Aia del 1961 sull'Apostille & Accordo Bilaterale Working Holiday Italia-NZ (Note Diplomatiche)","https://ambwellington.esteri.it","2026-10-05"],
  "NZ-SRC-27": ["Immigration Advisers Authority (IAA): Immigration Advisers Licensing Act 2007 (Sections 6, 63–65)","https://www.iaa.govt.nz/","2026-10-05"],
  "NZ-SRC-22": ["Health New Zealand (Te Whatu Ora): Eligibility for Publicly Funded Health Services Regulations","https://www.tewhatuora.govt.nz/our-health-system/eligibility-for-publicly-funded-health-services","2026-10-05"],
  "NZ-SRC-28": ["Inland Revenue Department (IRD): Procedura Telematica di Rilascio IRD Number per Nuovi Arrivati (New Arrival IRD Number Application)","https://www.ird.govt.nz/managing-my-tax/ird-numbers/ird-numbers-for-individuals/living-in-nz-and-not-a-nz-citizen","2026-10-05"],
  "NZ-SRC-21": ["Inland Revenue Department (IRD / Te Tari Taake): Individual Income Tax Rates & Codes (in vigore dall'anno fiscale 2025/2026, dal 1° aprile 2025)","https://www.ird.govt.nz/income-tax/income-tax-for-individuals/tax-codes-and-tax-rates-for-individuals/tax-rates-for-individuals","2026-10-05"],
  "NZ-SRC-23": ["Accident Compensation Corporation (ACC): Accident Compensation Act 2001 (Universal No-Fault Injury Scheme)","https://www.acc.co.nz/im-injured/what-we-cover/","2026-10-05"],
  "NZ-SRC-01": ["New Zealand Parliament / Parliamentary Counsel Office: Immigration Act 2009 (Public Act 2009 No 51) e successive modifiche (Sections 15, 16, 61, 63, 154, 157, 179, 342, 343)","https://www.legislation.govt.nz/act/public/2009/0051/latest/DLM1440303.html","2026-10-05"]
});
