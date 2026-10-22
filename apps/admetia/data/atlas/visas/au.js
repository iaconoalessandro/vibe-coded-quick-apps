/* Visas and permits: Australia. From research/visas_immigration/australia/
 * (guide, source register, open questions), council check of 5 Oct 2026.
 * EU and UK passports only. */
ATLAS.addVisas({
  id: 'AU',
  folder: 'australia',
  checked: '2026-10-05',
  review: '2027-03-31',

  routes: [
    { k: 'study', p: 'eu uk', v: 'open',
      name: ['Student visa (subclass 500)', 'Visto studentesco (subclass 500)'], law: 'Migration Regulations 1994',
      t: [
        ['A CRICOS course issues a Confirmation of Enrolment; you must pass the Genuine Student test and hold student health cover (OSHC) for the whole visa. The European health card does not replace OSHC.',
          'Un corso CRICOS rilascia la Confirmation of Enrolment; si deve superare il Genuine Student test e avere l’assicurazione sanitaria per studenti (OSHC) per tutto il visto. La tessera sanitaria europea non sostituisce l’OSHC.', 'AU-SRC-01 AU-SRC-12 AU-SRC-14 AU-SRC-15'],
        ['Up to 48 hours per fortnight in term, unlimited in breaks; research degrees have no limit. Since July 2024 you cannot apply onshore from a visitor or graduate visa.',
          'Fino a 48 ore ogni due settimane durante i corsi, senza limiti nelle pause; i corsi di ricerca non hanno limiti. Da luglio 2024 non si può fare domanda dall’Australia con un visto turistico o da laureato.', 'AU-SRC-03 AU-SRC-02 AU-SRC-36']
      ],
      f: [
        [['Funds', 'Mezzi'], ['AUD 29,710 a year, plus tuition and travel', '29.710 AUD l’anno, più retta e viaggio'], 'AU-SRC-13'],
        [['Fee', 'Costo'], ['AUD 2,500', '2.500 AUD'], 'AU-SRC-01 AU-SRC-02']
      ] },

    { k: 'intern', p: 'eu uk', v: 'sponsor',
      name: ['Training visa (subclass 407)', 'Visto per formazione (subclass 407)'], law: 'Migration Regulations 1994; Fair Work Act s. 12',
      t: [['An unpaid placement is legal only if your course requires it for credit; any other internship makes you an employee owed the minimum wage. A sponsor can bring you on a 407 training visa, up to two years with a structured plan.',
        'Un tirocinio non retribuito è legale solo se il tuo corso lo richiede per i crediti; qualsiasi altro tirocinio ti rende un dipendente con diritto al salario minimo. Uno sponsor può farti venire con un visto per formazione 407, fino a due anni con un piano strutturato.', 'AU-SRC-23 AU-SRC-24 AU-SRC-22']],
      f: [
        [['Minimum wage', 'Salario minimo'], ['AUD 26.44 an hour', '26,44 AUD l’ora'], 'AU-SRC-24'],
        [['Fees', 'Costi'], ['AUD 535 + employer AUD 420 and 170', '535 AUD + datore 420 e 170 AUD'], 'AU-SRC-22']
      ] },

    { k: 'search', p: 'eu uk', v: 'open',
      name: ['Temporary Graduate visa (subclass 485)', 'Temporary Graduate visa (subclass 485)'], law: 'Migration Regulations 1994',
      t: [['After at least two academic years of study in Australia: two years for a bachelor’s or coursework master’s, three for research degrees. Apply in Australia within six months of completing, aged 35 or under (50 for research degrees), with IELTS 6.5.',
        'Dopo almeno due anni accademici di studio in Australia: due anni per una laurea o un master coursework, tre per i corsi di ricerca. Si fa domanda in Australia entro sei mesi dalla fine, entro i 35 anni (50 per i corsi di ricerca), con IELTS 6.5.', 'AU-SRC-04']],
      f: [[['Fee', 'Costo'], ['AUD 5,750', '5.750 AUD'], 'AU-SRC-04']] },

    { k: 'work', p: 'eu uk', v: 'sponsor',
      name: ['Skills in Demand visa (subclass 482)', 'Visto Skills in Demand (subclass 482)'], law: 'Migration Regulations 1994',
      t: [
        ['An approved sponsor nominates the role: the Specialist stream for high salaries in any skilled job, the Core stream for jobs on the Core Skills Occupation List. A year of experience and IELTS 5.0; after two years with the sponsor, permanent residence through the 186.',
          'Uno sponsor approvato nomina il ruolo: lo Specialist stream per stipendi alti in qualsiasi lavoro qualificato, il Core stream per i lavori della Core Skills Occupation List. Un anno di esperienza e IELTS 5.0; dopo due anni con lo sponsor, residenza permanente tramite il 186.', 'AU-SRC-16 AU-SRC-17 AU-SRC-18'],
        ['British citizens skip labour-market testing under the UK–Australia trade agreement; EU citizens do not.',
          'I cittadini britannici saltano il test del mercato del lavoro grazie all’accordo commerciale Regno Unito–Australia; i cittadini UE no.', 'AU-SRC-11 AU-SRC-16']
      ],
      f: [
        [['Salary, Core stream', 'Stipendio, Core stream'], ['AUD 79,423 a year', '79.423 AUD l’anno'], 'AU-SRC-17'],
        [['Salary, Specialist stream', 'Stipendio, Specialist stream'], ['AUD 146,500 a year', '146.500 AUD l’anno'], 'AU-SRC-17'],
        [['Fee', 'Costo'], ['AUD 4,015', '4.015 AUD'], 'AU-SRC-16']
      ],
      w: ['If the job ends you have 180 days to find a new sponsor, and may work meanwhile.',
        'Se il lavoro finisce hai 180 giorni per trovare un nuovo sponsor, e nel frattempo puoi lavorare.', 'AU-SRC-16'] },

    { k: 'stay', p: 'eu uk', v: 'limited',
      name: ['Points-tested permanent residence', 'Residenza permanente a punti'], law: 'Migration Regulations 1994, Schedule 6D',
      t: [['Subclasses 189, 190 and 491 need a skills assessment, competent English and an invitation through SkillSelect. The legal minimum is 65 points, but invitations in 2026 went to 85 to 95 or more. EU citizens must sit an English test; British citizens are deemed competent.',
        'I subclass 189, 190 e 491 richiedono una valutazione delle competenze, inglese di livello competent e un invito tramite SkillSelect. Il minimo di legge è 65 punti, ma nel 2026 gli inviti sono andati da 85 a 95 o più. I cittadini UE devono sostenere un test d’inglese; i britannici sono considerati competent.', 'AU-SRC-20 AU-SRC-21']],
      f: [[['Fee', 'Costo'], ['about AUD 6,140', 'circa 6.140 AUD'], 'AU-SRC-20']] },

    { k: 'research', p: 'eu uk', v: 'sponsor',
      name: ['Research visits and PhDs', 'Visite di ricerca e dottorati'], law: 'Migration Regulations 1994',
      t: [
        ['Students of foreign universities invited to a research project can come on a 408 visa, up to 12 months, with no enrolment or tuition.',
          'Gli studenti di università estere invitati a un progetto di ricerca possono venire con un visto 408, fino a 12 mesi, senza iscrizione né retta.', 'AU-SRC-25'],
        ['PhD students may work without limit, and so may their partners; Research Training Program scholarships cover fees with a tax-free stipend.',
          'I dottorandi possono lavorare senza limiti, come i loro partner; le borse Research Training Program coprono le tasse con un assegno esentasse.', 'AU-SRC-03 AU-SRC-26']
      ],
      f: [[['RTP stipend', 'Assegno RTP'], ['AUD 32,000 to 38,000 a year', 'da 32.000 a 38.000 AUD l’anno'], 'AU-SRC-26']] },

    { k: 'whv', p: 'eu uk', v: 'open',
      name: ['Working Holiday visa (417 or 462)', 'Visto Working Holiday (417 o 462)'], law: 'Migration Regulations 1994',
      t: [
        ['Italy, France, Germany, Ireland, Denmark, Finland, Sweden, Cyprus and the UK have the 417 up to age 35; Belgium, Estonia, Malta and the Netherlands up to 30. Spain, Portugal, Poland, Czechia, Slovakia, Greece and Austria use the 462, which needs two years of university and basic English.',
          'Italia, Francia, Germania, Irlanda, Danimarca, Finlandia, Svezia, Cipro e Regno Unito hanno il 417 fino a 35 anni; Belgio, Estonia, Malta e Paesi Bassi fino a 30. Spagna, Portogallo, Polonia, Cechia, Slovacchia, Grecia e Austria usano il 462, che richiede due anni di università e un inglese di base.', 'AU-SRC-08 AU-SRC-09'],
        ['A second and third year need 88 days and then six months of regional work, except for British citizens, exempt since July 2024.',
          'Il secondo e terzo anno richiedono 88 giorni e poi sei mesi di lavoro regionale, tranne per i britannici, esenti da luglio 2024.', 'AU-SRC-08 AU-SRC-10 AU-SRC-11']
      ],
      f: [
        [['Fee', 'Costo'], ['AUD 840, then AUD 1,000', '840 AUD, poi 1.000 AUD'], 'AU-SRC-08'],
        [['Funds', 'Mezzi'], ['AUD 5,000', '5.000 AUD'], 'AU-SRC-08']
      ],
      w: ['Pay slips are cross-checked with the tax office: unpaid or false regional work leads to refusal and a ban.',
        'Le buste paga sono incrociate con il fisco: lavoro regionale in nero o falso porta al rifiuto e a un divieto.', 'AU-SRC-10 AU-SRC-08'] },

    { k: 'short', p: 'eu uk', v: 'open',
      name: ['eVisitor (subclass 651)', 'eVisitor (subclass 651)'], law: 'Migration Regulations 1994',
      t: [['EU and UK citizens get a free eVisitor, valid 12 months, for visits of up to three months each, with no work.',
        'I cittadini UE e britannici ottengono un eVisitor gratuito, valido 12 mesi, per visite fino a tre mesi ciascuna, senza lavorare.', 'AU-SRC-05']] }
  ],

  arrival: [
    { k: 'before', p: 'eu uk', t: [
      ['Apply online through ImmiAccount. Documents not in English need a translation by a NAATI-accredited translator.',
        'Fai domanda online tramite ImmiAccount. I documenti non in inglese richiedono una traduzione di un traduttore accreditato NAATI.', 'AU-SRC-01 AU-SRC-08'],
      ['If Home Affairs gives you a health examination ID (HAP ID), book the medical with an approved panel physician: in Italy only in Rome and Milan, typically €180 to €300.',
        'Se Home Affairs ti assegna un codice per gli accertamenti sanitari (HAP ID), prenota la visita da un medico accreditato: in Italia solo a Roma e Milano, di solito 180-300 €.', 'AU-SRC-01'],
      ['Students on a 500 visa must hold Overseas Student Health Cover (OSHC) for the whole visa; holders of temporary work or visitor visas without Medicare need Overseas Visitor Health Cover (OVHC).',
        'Gli studenti con visto 500 devono avere l’Overseas Student Health Cover (OSHC) per tutta la durata del visto; chi ha visti temporanei di lavoro o turistici senza Medicare ha bisogno dell’Overseas Visitor Health Cover (OVHC).', 'AU-SRC-14 AU-SRC-04 AU-SRC-16']
    ] },
    { k: 'address', p: 'eu uk', none: true },
    { k: 'card', p: 'eu uk', t: [
      ['Australian visas are digital and linked to your passport; there is no residence card to collect. Students then create their Unique Student Identifier (USI) online after landing: without it the university cannot issue results or degrees.',
        'I visti australiani sono digitali e collegati al passaporto; non c’è una carta di soggiorno da ritirare. Gli studenti creano poi online, dopo l’atterraggio, lo Unique Student Identifier (USI): senza, l’università non può rilasciare esami o titoli.', 'AU-SRC-01 AU-SRC-33']
    ] },
    { k: 'number', p: 'eu uk', t: [
      ['Apply online for a Tax File Number from the ATO, free, but only once you are in Australia: if your employer does not have it within 28 days of hiring, it must withhold 45% of your pay.',
        'Chiedi online il Tax File Number all’ATO, gratis, ma solo una volta in Australia: se il datore non lo ha entro 28 giorni dall’assunzione, deve trattenere il 45% dello stipendio.', 'AU-SRC-28 AU-SRC-29'],
      ['Your employer pays 12% of ordinary pay into a superannuation fund, which follows you from job to job.',
        'Il datore versa il 12% della retribuzione ordinaria in un fondo pensione (superannuation), che ti segue da un lavoro all’altro.', 'AU-SRC-30']
    ] },
    { k: 'health', p: 'eu', t: [
      ['Italian citizens can enrol in Medicare in person at Services Australia under the reciprocal health care agreement, with passport, visa and Italian health card, on form MS015: the card lasts up to 6 months and covers urgent public care and GP visits. It does not exempt students on a 500 visa from OSHC.',
        'I cittadini italiani possono iscriversi a Medicare di persona presso Services Australia grazie all’accordo sanitario reciproco, con passaporto, visto e tessera sanitaria italiana, con il modulo MS015: la tessera dura fino a 6 mesi e copre le cure pubbliche urgenti e le visite dal medico di base. Non esonera gli studenti con visto 500 dall’OSHC.', 'AU-SRC-15 AU-SRC-14']
    ] },
    { k: 'health', p: 'uk', t: [
      ['Students must keep OSHC for the whole visa; check with Services Australia what other cover applies to you.',
        'Gli studenti devono mantenere l’OSHC per tutta la durata del visto; verifica con Services Australia quale altra copertura ti spetta.', 'AU-SRC-14']
    ] },
    { k: 'bank', p: 'eu uk', none: true },
    { k: 'keep', p: 'eu uk', t: [
      ['A valid application made in Australia gives you a Bridging Visa A, which keeps you lawful after your visa expires but has no travel rights: leaving cancels it. To travel and return, first get a Bridging Visa B (AUD 575).',
        'Una domanda valida presentata in Australia ti dà un Bridging Visa A, che ti mantiene in regola dopo la scadenza del visto ma non consente di viaggiare: partire lo annulla. Per viaggiare e rientrare, ottieni prima un Bridging Visa B (575 AUD).', 'AU-SRC-34'],
      ['If an application is refused while you are on a bridging visa, you can apply for almost no other visa from inside Australia (section 48 bar).',
        'Se una domanda viene respinta mentre hai un bridging visa, non puoi chiedere quasi nessun altro visto dall’interno dell’Australia (divieto della sezione 48).', 'AU-SRC-34']
    ] }
  ],

  traps: [
    { p: 'eu uk', t: ['A Bridging Visa A has no travel right: leave Australia while waiting and it ends at the border. To travel you need a Bridging Visa B first.',
      'Un Bridging Visa A non consente viaggi: se lasci l’Australia durante l’attesa decade alla frontiera. Per viaggiare serve prima un Bridging Visa B.', 'AU-SRC-34'] },
    { p: 'eu uk', t: ['A refusal while on a bridging visa triggers the Section 48 bar: you can apply for almost nothing more from inside Australia.',
      'Un rifiuto mentre si è con un bridging visa fa scattare il Section 48 bar: dall’interno dell’Australia non si può più chiedere quasi nulla.', 'AU-SRC-34'] },
    { p: 'eu uk', t: ['Give your employer a tax file number within 28 days, or 45% is withheld.',
      'Dai al datore il tax file number entro 28 giorni, o viene trattenuto il 45%.', 'AU-SRC-28 AU-SRC-29'] },
    { p: 'eu uk', t: ['Working holidaymakers pay 15% from the first dollar, and 65% on the pension savings they take home when they leave.',
      'Chi ha un working holiday paga il 15% dal primo dollaro, e il 65% sui risparmi pensionistici ritirati alla partenza.', 'AU-SRC-29 AU-SRC-31'] }
  ],

  open: [
    { st: 'pending', t: ['The Essential Skills stream for lower-paid care work is not yet fully running.',
      'L’Essential Skills stream per i lavori di cura meno pagati non è ancora pienamente operativo.'] },
    { st: 'watch', t: ['Enrolment caps per provider hit private colleges harder than the Group of Eight universities.',
      'I tetti di iscrizione per ente colpiscono più i college privati che le università del Group of Eight.'] },
    { st: 'watch', t: ['Applying for a student visa offshore right after a visitor or graduate visa ends draws strict scrutiny.',
      'Chiedere un visto studentesco dall’estero subito dopo la scadenza di un visto turistico o da laureato attira controlli severi.'] }
  ]
});

/* Sources: generated by tools/visas-sources.js from research/visas_immigration/australia/australia_sources.md.
 * Do not edit by hand: change the register, then run the tool. */
ATLAS.visaSources('AU', {
  "AU-SRC-01": ["Department of Home Affairs (Commonwealth of Australia): Student visa (subclass 500)","https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/student-500","2026-10-05"],
  "AU-SRC-12": ["Department of Home Affairs: Genuine Student (GS) requirement & Ministerial Direction No. 106","https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/student-500/genuine-student-requirement","2026-10-05"],
  "AU-SRC-14": ["Department of Home Affairs: Overseas Student Health Cover (OSHC)","https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/student-500/overseas-student-health-cover","2026-10-05"],
  "AU-SRC-15": ["Services Australia: Reciprocal Health Care Agreement (RHCA) - Visiting from Italy","https://www.servicesaustralia.gov.au/reciprocal-health-care-agreements-visiting-from-italy","2026-10-05"],
  "AU-SRC-03": ["Department of Home Affairs: Visa conditions: Condition 8105 (Work limitation)","https://immi.homeaffairs.gov.au/visas/already-have-a-visa/check-visa-details-and-conditions/conditions-list/8105","2026-10-05"],
  "AU-SRC-02": ["Federal Register of Legislation (Commonwealth of Australia): Migration Regulations 1994 (Cth), Schedule 1 Item 1222 e Home Affairs Legislation Amendment (2026 Measures No. 1)…","https://www.legislation.gov.au/Details/F2026L00874","2026-10-05"],
  "AU-SRC-36": ["Department of Home Affairs: Ending Visa Hopping: Onshore Student Visa Application Restrictions","https://immi.homeaffairs.gov.au/news-subsite/Pages/ending-visa-hopping-in-the-migration-system.aspx","2026-10-05"],
  "AU-SRC-13": ["Department of Home Affairs: Student visa financial capacity requirements","https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/student-500","2026-10-05"],
  "AU-SRC-23": ["Fair Work Ombudsman: Unpaid work, internships and vocational placements (Fair Work Act 2009 s12)","https://www.fairwork.gov.au/pay-and-wages/unpaid-work/work-experience-and-internships","2026-10-05"],
  "AU-SRC-24": ["Fair Work Ombudsman: National Minimum Wage Order 2026","https://www.fairwork.gov.au/pay-and-wages/minimum-wages","2026-10-05"],
  "AU-SRC-22": ["Department of Home Affairs: Training visa (subclass 407)","https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/training-407","2026-10-05"],
  "AU-SRC-04": ["Department of Home Affairs: Temporary Graduate visa (subclass 485) - Post-Higher Education Work stream","https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/temporary-graduate-485/post-higher-education-work","2026-10-05"],
  "AU-SRC-16": ["Department of Home Affairs: Skills in Demand (SID) visa (subclass 482)","https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/skills-in-demand-482","2026-10-05"],
  "AU-SRC-17": ["Department of Home Affairs: Salary requirements for nominated positions (CSIT / SSIT / TSMIT)","https://immi.homeaffairs.gov.au/visas/employing-and-sponsoring-someone/sponsoring-workers/nominating-a-position/salary-requirements","2026-10-05"],
  "AU-SRC-18": ["Department of Home Affairs: Employer Nomination Scheme (subclass 186)","https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/employer-nomination-scheme-186","2026-10-05"],
  "AU-SRC-11": ["Department of Home Affairs & DFAT: Arrangements for UK passport holders (A-UKFTA)","https://immi.homeaffairs.gov.au/what-we-do/whm-program/latest-news/arrangements-uk-passport-holders","2026-10-05"],
  "AU-SRC-20": ["Department of Home Affairs: General Skilled Migration (GSM): Subclasses 189, 190, 491","https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/skilled-independent-189","2026-10-05"],
  "AU-SRC-21": ["Federal Register of Legislation: Migration Regulations 1994 (Cth), Schedule 6D","https://www.legislation.gov.au/Details/F2026C00412","2026-10-05"],
  "AU-SRC-25": ["Department of Home Affairs: Temporary Activity visa (subclass 408) - Research activities stream","https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/temporary-activity-408/research-activities","2026-10-05"],
  "AU-SRC-26": ["Department of Education: Research Training Program (RTP)","https://www.education.gov.au/research-block-grants/research-training-program","2026-10-05"],
  "AU-SRC-08": ["Department of Home Affairs: Working Holiday visa (subclass 417)","https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/working-holiday-417","2026-10-05"],
  "AU-SRC-09": ["Department of Home Affairs: Work and Holiday visa (subclass 462)","https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/work-holiday-462","2026-10-05"],
  "AU-SRC-10": ["Department of Home Affairs: Working Holiday Maker program: 6-month work limitation (Condition 8547)","https://immi.homeaffairs.gov.au/what-we-do/whm-program/specified-work-conditions/6-month-work-limitation","2026-10-05"],
  "AU-SRC-05": ["Department of Home Affairs: eVisitor (subclass 651)","https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/evisitor-651","2026-10-05"],
  "AU-SRC-33": ["Student Identifiers Registrar (Commonwealth of Australia): Unique Student Identifier (USI)","https://www.usi.gov.au","2026-10-05"],
  "AU-SRC-28": ["Australian Taxation Office (ATO): Apply for a Tax File Number (TFN) - Foreign passport holders","https://www.ato.gov.au/individuals-and-families/tax-file-number/apply-for-a-tfn/foreign-passport-holders-permanent-migrants-and-temporary-visitors-tfn-application","2026-10-05"],
  "AU-SRC-29": ["Australian Taxation Office (ATO): Working holiday makers & Individual income tax rates 2026-27","https://www.ato.gov.au/tax-rates-and-codes/tax-rates-working-holiday-makers","2026-10-05"],
  "AU-SRC-30": ["Australian Taxation Office (ATO): Superannuation Guarantee & Super Stapling","https://www.ato.gov.au/businesses-and-organisations/super-for-employers/paying-super-contributions","2026-10-05"],
  "AU-SRC-34": ["Department of Home Affairs: Section 48 Bar & Bridging Visas (BVA 010 & BVB 020)","https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/bridging-visa-b-020","2026-10-05"],
  "AU-SRC-31": ["Australian Taxation Office (ATO): Departing Australia Superannuation Payment (DASP)","https://www.ato.gov.au/individuals-and-families/super-for-individuals-and-families/super/temporary-residents-and-superannuation/departing-australia-superannuation-payment-dasp","2026-10-05"]
});
