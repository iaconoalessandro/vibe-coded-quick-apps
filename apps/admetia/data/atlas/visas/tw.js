/* Visas and permits: Taiwan. From research/visas_immigration/taiwan/
 * (guide, source register, open questions), council check of 5 Oct 2026.
 * EU and UK passports only. */
ATLAS.addVisas({
  id: 'TW',
  folder: 'taiwan',
  checked: '2026-10-05',
  review: '2027-03-31',

  routes: [
    { k: 'study', p: 'eu uk', v: 'open',
      name: ['Resident visa for study and ARC', 'Visto di residenza per studio e ARC'], law: 'Immigration Act',
      t: [
        ['Apply for the resident visa at a Taipei office before travelling, then register for an Alien Resident Certificate within 30 days of arrival. Taiwan does not take apostilles: diplomas need consular legalisation by the Taipei office.',
          'Si chiede il visto di residenza a un ufficio di Taipei prima di partire, poi ci si registra per l’Alien Resident Certificate entro 30 giorni dall’arrivo. Taiwan non accetta l’apostille: i diplomi richiedono la legalizzazione consolare dell’ufficio di Taipei.', 'TW-SRC-07 TW-SRC-01 TW-SRC-08'],
        ['With a student work permit you may work 20 hours a week in term and without limit in official vacations. Public health insurance starts after six months.',
          'Con un permesso di lavoro per studenti si possono lavorare 20 ore a settimana durante i corsi e senza limiti nelle vacanze ufficiali. L’assicurazione sanitaria pubblica parte dopo sei mesi.', 'TW-SRC-02 TW-SRC-14']
      ],
      f: [
        [['Funds, usually asked', 'Mezzi, di solito richiesti'], ['$4,000 to $5,000', 'da 4.000 a 5.000 $'], 'TW-SRC-17'],
        [['Fees', 'Costi'], ['visa €63; ARC NT$1,000 a year', 'visto 63 €; ARC 1.000 NT$ l’anno'], 'TW-SRC-08 TW-SRC-11']
      ] },

    { k: 'intern', p: 'eu uk', v: 'sponsor',
      name: ['Internships for students of foreign universities', 'Tirocini per studenti di università estere'], law: 'MOEA guidelines of 8 Jan 2026',
      t: [['The company obtains economy-ministry approval; you need at least one completed semester, and the internship must pay at least the minimum wage, 40 hours a week at most, with accident cover. Up to 180 days on a visitor visa, longer on a resident visa.',
        'L’azienda ottiene l’approvazione del ministero dell’Economia; serve almeno un semestre completato, e il tirocinio deve pagare almeno il salario minimo, al massimo 40 ore a settimana, con copertura infortuni. Fino a 180 giorni con visto turistico, oltre con visto di residenza.', 'TW-SRC-16 TW-SRC-07']],
      f: [[['Minimum allowance', 'Indennità minima'], ['NT$29,500 a month', '29.500 NT$ al mese'], 'TW-SRC-15 TW-SRC-16']] },

    { k: 'search', p: 'eu uk', v: 'open',
      name: ['Two years after graduating', 'Due anni dopo la laurea'], law: 'Foreign Professionals Act art. 11',
      t: [['Graduates of Taiwanese universities can stay up to two years to look for work and may work freely meanwhile, with no work permit. Hired afterwards, a points system replaces the salary floor and the two years of experience.',
        'I laureati di università taiwanesi possono restare fino a due anni per cercare lavoro e intanto lavorare liberamente, senza permesso di lavoro. Assunti dopo, un sistema a punti sostituisce la soglia salariale e i due anni di esperienza.', 'TW-SRC-06 TW-SRC-03 TW-SRC-05']] },

    { k: 'work', p: 'eu uk', v: 'sponsor',
      name: ['Work permit for specialised work', 'Permesso di lavoro per lavoro specializzato'], law: 'Employment Service Act art. 46',
      t: [['The employer applies online; you need a master’s, or a bachelor’s plus two years of experience (waived for graduates of a top-1,500 university). The company needs NT$5 million of capital or NT$10 million of turnover, unless it is in a science park or a certified start-up.',
        'Il datore fa domanda online; serve un master, o una laurea triennale più due anni di esperienza (non richiesti a chi si è laureato in un’università tra le prime 1.500). L’azienda deve avere 5 milioni di NT$ di capitale o 10 milioni di fatturato, salvo che sia in un parco scientifico o una start-up certificata.', 'TW-SRC-04 TW-SRC-11']],
      f: [
        [['Salary', 'Stipendio'], ['NT$47,971 a month', '47.971 NT$ al mese'], 'TW-SRC-04'],
        [['Fees', 'Costi'], ['visa €63; ARC NT$1,000 a year', 'visto 63 €; ARC 1.000 NT$ l’anno'], 'TW-SRC-08 TW-SRC-11']
      ] },

    { k: 'work', p: 'eu uk', v: 'open',
      name: ['Employment Gold Card', 'Employment Gold Card'], law: 'Foreign Professionals Act art. 8',
      t: [['An open work permit, resident visa, ARC and re-entry permit in one, for one to three years, not tied to an employer. Eligible with a monthly income of NT$160,000 in the last three years or merit criteria in ten fields; permanent residence after three years.',
        'Permesso di lavoro aperto, visto di residenza, ARC e permesso di rientro in uno, da uno a tre anni, non legato a un datore. Si accede con un reddito mensile di 160.000 NT$ negli ultimi tre anni o criteri di merito in dieci settori; residenza permanente dopo tre anni.', 'TW-SRC-03 TW-SRC-12']],
      f: [[['Fee', 'Costo'], ['NT$3,700 to NT$5,700', 'da 3.700 a 5.700 NT$'], 'TW-SRC-12']] },

    { k: 'research', p: 'eu uk', v: 'sponsor',
      name: ['Researchers and PhDs', 'Ricercatori e dottorati'], law: 'Employment Service Act',
      t: [
        ['Unpaid research visits up to 180 days use a visitor visa; paid academic posts need ministry approval and a resident visa, with public health cover from day one.',
          'Le visite di ricerca non retribuite fino a 180 giorni usano un visto turistico; i posti accademici retribuiti richiedono l’approvazione ministeriale e un visto di residenza, con copertura sanitaria pubblica dal primo giorno.', 'TW-SRC-07 TW-SRC-01 TW-SRC-02 TW-SRC-14'],
        ['MOE Taiwan Scholarships and Academia Sinica’s TIGP fund PhDs; PhDs from Taiwan can be hired as post-docs without the experience rule and can apply straight for the Gold Card.',
          'Le MOE Taiwan Scholarship e il TIGP dell’Academia Sinica finanziano i dottorati; chi ha un dottorato taiwanese può essere assunto come post-doc senza la regola dell’esperienza e chiedere subito la Gold Card.', 'TW-SRC-17 TW-SRC-02 TW-SRC-03']
      ],
      f: [[['TIGP stipend', 'Borsa TIGP'], ['NT$40,000 a month', '40.000 NT$ al mese'], 'TW-SRC-17']] },

    { k: 'whv', p: 'eu', v: 'limited',
      name: ['Working holiday', 'Vacanza-lavoro'], law: 'bilateral agreements',
      t: [['Only for citizens of Germany, France, Ireland, Belgium, Poland, Czechia, the Netherlands, Slovakia, Austria, Hungary and Luxembourg, aged 18 to 30: 180 days, extendable once by 180. Italy has no agreement.',
        'Solo per cittadini di Germania, Francia, Irlanda, Belgio, Polonia, Cechia, Paesi Bassi, Slovacchia, Austria, Ungheria e Lussemburgo, dai 18 ai 30 anni: 180 giorni, prorogabili una volta di 180. L’Italia non ha accordi.', 'TW-SRC-10 TW-SRC-01']],
      f: [[['Funds', 'Mezzi'], ['NT$100,000', '100.000 NT$'], 'TW-SRC-10']] },

    { k: 'whv', p: 'uk', v: 'open',
      name: ['Youth Mobility Scheme', 'Youth Mobility Scheme'], law: 'bilateral agreement',
      t: [['British citizens aged 18 to 30 share 1,000 places a year: 180 days, extendable once by 180, with work allowed.',
        'I cittadini britannici dai 18 ai 30 anni si dividono 1.000 posti l’anno: 180 giorni, prorogabili una volta di 180, con lavoro consentito.', 'TW-SRC-10 TW-SRC-01']] },

    { k: 'short', p: 'eu uk', v: 'open',
      name: ['Visa-free visit', 'Visita senza visto'], law: 'Immigration Act',
      t: [['EU and UK citizens visit up to 90 days with no work; fill in the Taiwan Arrival Card within three days before arriving. EU citizens cannot extend; British citizens can, by 90 days.',
        'I cittadini UE e britannici visitano fino a 90 giorni senza lavorare; si compila la Taiwan Arrival Card nei tre giorni prima dell’arrivo. I cittadini UE non possono prorogare; i britannici sì, di 90 giorni.', 'TW-SRC-09 TW-SRC-23 TW-SRC-02']] }
  ],

  arrival: [
    { k: 'before', p: 'eu uk', t: [
      ['Workers need two documents: a work permit from the Ministry of Labor and a resident visa from the Bureau of Consular Affairs, which leads to the resident certificate (ARC).',
        'I lavoratori hanno bisogno di due documenti: il permesso di lavoro del Ministero del Lavoro e il visto di residenza dell’Ufficio affari consolari, che porta al certificato di residenza (ARC).', 'TW-SRC-02 TW-SRC-07'],
      ['A rent deposit is capped at 2 months’ rent by law; before signing, get the landlord’s explicit consent to register the address for your ARC.',
        'La caparra è per legge al massimo di 2 mesi di affitto; prima di firmare, ottieni il consenso esplicito del proprietario a registrare l’indirizzo per l’ARC.', 'TW-SRC-24']
    ] },
    { k: 'address', p: 'eu uk', t: [
      ['Tell the National Immigration Agency within 30 days of any change of address or employer, or face a fine of NT$2,000 to NT$10,000.',
        'Comunica all’Agenzia nazionale per l’immigrazione entro 30 giorni ogni cambio di indirizzo o di datore, o rischi una multa da 2.000 a 10.000 NT$.', 'TW-SRC-01']
    ] },
    { k: 'card', p: 'eu uk', t: [
      ['Apply to the National Immigration Agency for the ARC within 30 days of entering on a resident visa. On a single-entry visa, do not leave Taiwan before collecting the card: leaving cancels the visa. The card’s chip includes a multiple re-entry permit.',
        'Chiedi l’ARC all’Agenzia nazionale per l’immigrazione entro 30 giorni dall’ingresso con il visto di residenza. Con un visto a ingresso singolo, non lasciare Taiwan prima di aver ritirato la carta: partire annulla il visto. Il chip della carta include un permesso di rientro multiplo.', 'TW-SRC-01 TW-SRC-11']
    ] },
    { k: 'number', p: 'eu uk', t: [
      ['Your Uniform ID number (one letter and nine digits, the same format as Taiwanese citizens) is printed on the ARC and used for tax, bank, health care, leases and utilities; without an ARC you can ask the agency for a paper certificate (NT$100).',
        'Il numero d’identificazione unificato (una lettera e nove cifre, lo stesso formato dei cittadini taiwanesi) è stampato sull’ARC e serve per fisco, banca, sanità, affitti e utenze; senza ARC puoi chiedere all’agenzia un certificato cartaceo (100 NT$).', 'TW-SRC-11']
    ] },
    { k: 'health', p: 'eu uk', t: [
      ['Employees are covered by National Health Insurance and labour insurance from day one; students and people not working wait 6 months, during which they need private international cover of at least €100,000.',
        'I dipendenti sono coperti dall’Assicurazione sanitaria nazionale e dall’assicurazione del lavoro dal primo giorno; studenti e chi non lavora attendono 6 mesi, durante i quali serve una copertura privata internazionale di almeno 100.000 €.', 'TW-SRC-14']
    ] },
    { k: 'bank', p: 'eu uk', t: [
      ['Banks want your passport, the ARC (ideally valid 6 months or more), a personal seal (chop) and a Taiwanese SIM in your name; Chunghwa Post opens basic accounts even with a passport and the UI number certificate.',
        'Le banche vogliono passaporto, ARC (preferibilmente valido 6 mesi o più), un sigillo personale (chop) e una SIM taiwanese a tuo nome; Chunghwa Post apre conti di base anche con passaporto e certificato del numero UI.', 'TW-SRC-11']
    ] },
    { k: 'keep', p: 'eu uk', t: [
      ['You may renew the ARC from 3 months before it expires.',
        'Puoi rinnovare l’ARC a partire da 3 mesi prima della scadenza.', 'TW-SRC-01'],
      ['An Italian car licence converts without tests after 6 months with an ARC, but only for cars and mopeds up to 50cc, not 125–150cc scooters.',
        'La patente B italiana si converte senza esami dopo 6 mesi con l’ARC, ma solo per auto e ciclomotori fino a 50cc, non per scooter da 125-150cc.', 'TW-SRC-19']
    ] }
  ],

  traps: [
    { p: 'eu uk', t: ['Apply for the ARC within 30 days of arrival: late applications are fined up to NT$50,000 and can bring an entry ban.',
      'Chiedi l’ARC entro 30 giorni dall’arrivo: le domande tardive sono multate fino a 50.000 NT$ e possono portare a un divieto d’ingresso.', 'TW-SRC-01'] },
    { p: 'eu uk', t: ['On a single-entry resident visa, do not leave Taiwan before collecting the ARC card, or the visa is void.',
      'Con un visto di residenza a ingresso singolo, non lasciare Taiwan prima di ritirare la tessera ARC, o il visto decade.', 'TW-SRC-01'] },
    { p: 'eu uk', t: ['Report a change of address or employer within 30 days.',
      'Comunica un cambio di indirizzo o di datore entro 30 giorni.', 'TW-SRC-01'] },
    { p: 'eu uk', t: ['Working without a permit as a student means fines of NT$30,000 to 150,000 and expulsion.',
      'Lavorare senza permesso da studente comporta multe da 30.000 a 150.000 NT$ e l’espulsione.', 'TW-SRC-02'] },
    { p: 'eu', t: ['A converted Italian licence covers cars and 50cc mopeds only, not 125cc scooters.',
      'Una patente italiana convertita copre solo auto e ciclomotori 50cc, non gli scooter 125cc.', 'TW-SRC-19'] }
  ],

  open: [
    { st: 'watch', t: ['Whether Italy and Taiwan are negotiating a working-holiday agreement.',
      'Se Italia e Taiwan stiano negoziando un accordo di vacanza-lavoro.'] },
    { st: 'pending', t: ['Taiwan has announced a digital nomad visa of six months to two years; consulates do not yet take applications.',
      'Taiwan ha annunciato un visto per nomadi digitali da sei mesi a due anni; i consolati non accettano ancora domande.'] },
    { st: 'open', t: ['How self-employed income counts towards the Gold Card’s NT$160,000 threshold.',
      'Come conti il reddito da lavoro autonomo per la soglia di 160.000 NT$ della Gold Card.'] }
  ]
});

/* Sources: generated by tools/visas-sources.js from research/visas_immigration/taiwan/taiwan_sources.md.
 * Do not edit by hand: change the register, then run the tool. */
ATLAS.visaSources('TW', {
  "TW-SRC-07": ["Bureau of Consular Affairs (BOCA), MOFA: Standard Visa Fee Schedule & Regulations for Foreign Passports","https://www.boca.gov.tw","2026-10-05"],
  "TW-SRC-01": ["National Immigration Agency (NIA) / Ministry of the Interior: Immigration Act (入出國及移民法) e decreti attuativi (Artt. 21, 22, 25, 74-1, 85)","https://law.moj.gov.tw/ENG/LawClass/LawAll.aspx?pcode=Q0030018","2026-10-05"],
  "TW-SRC-08": ["Tariffario Consolare Ufficiale in Eurozona (Sedi di Roma e Milano)","https://www.roc-taiwan.org/it_it","2026-10-05"],
  "TW-SRC-02": ["Ministry of Labor (MOL) / Legislative Yuan: Employment Service Act (就業服務法) (Artt. 43, 46, 50, 63, 68)","https://law.moj.gov.tw/ENG/LawClass/LawAll.aspx?pcode=N0090001","2026-10-05"],
  "TW-SRC-14": ["National Health Insurance Administration (NHIA), MOHW: National Health Insurance Act (全民健康保險法, Artt. 8, 9) & Premium Schedule","https://www.nhi.gov.tw","2026-10-05"],
  "TW-SRC-17": ["Ministry of Education (MOE) / Study in Taiwan: Regulations Regarding International Students Undertaking Studies in Taiwan & Scholarships","https://www.studyintaiwan.org","2026-10-05"],
  "TW-SRC-11": ["National Immigration Agency (NIA): Alien Resident Certificate (ARC) Application Directions, Processing Times & Fees","https://www.immigration.gov.tw","2026-10-05"],
  "TW-SRC-16": ["Ministry of Economic Affairs (MOEA): Guidelines Governing Foreign Student Internships in Enterprises (Decreto 8 Gennaio 2026)","https://www.moea.gov.tw","2026-10-05"],
  "TW-SRC-15": ["Ministry of Labor (MOL): Statutory Minimum Wage Decrees (2025/2026) & Deliberations for 2027","https://www.mol.gov.tw","2026-10-05"],
  "TW-SRC-06": ["Workforce Development Agency (WDA): Circolare Ufficiale Esenzione Work Permit Neolaureati in Proroga ARC (Circolare 4 Febbraio 2026)","https://ezworktaiwan.wda.gov.tw/en/cp.aspx?n=8CE17C2739F9AB35&s=9BEFF2CF37C2786B","2026-10-05"],
  "TW-SRC-03": ["National Development Council (NDC) / Legislative Yuan: Act for the Recruitment and Employment of Foreign Professionals (外國專業人才延攬及僱用法) (Artt. 8, 9, 11, 14, 16, 20)","https://foreigntalentact.ndc.gov.tw","2026-10-05"],
  "TW-SRC-05": ["Workforce Development Agency (WDA) / MOL: Graduating Foreign and Overseas Chinese Students Points-Based System (僑外生留臺工作評點制)","https://ezworktaiwan.wda.gov.tw/en/cp.aspx?n=8E87472D9CB255FF&s=BCA6B6757A58F5B3","2026-10-05"],
  "TW-SRC-04": ["Workforce Development Agency (WDA) / MOL: Qualifications and Criteria Standards for Foreigners Undertaking Jobs ex Art. 46.1.1 to 46.1.6 ESA","https://ezworktaiwan.wda.gov.tw","2026-10-05"],
  "TW-SRC-12": ["Taiwan Employment Gold Card Office / NDC: Gold Card Official Guidelines, Evaluation Criteria & Fee Schedule","https://goldcard.nat.gov.tw","2026-10-05"],
  "TW-SRC-10": ["Bureau of Consular Affairs (BOCA), MOFA: Working Holidays Scheme Partner Countries (17 Nazioni Aderenti)","https://www.boca.gov.tw/np-144-2.html","2026-10-05"],
  "TW-SRC-09": ["Bureau of Consular Affairs (BOCA), MOFA: Visa-Exempt Entry Regulations & Notice for British and Canadian Passport Holders","https://www.boca.gov.tw/cp-149-4486-7785a-2.html","2026-10-05"],
  "TW-SRC-23": ["National Immigration Agency (NIA): Online Arrival Card Portal (TWAC - 網路填寫入國登記表)","https://twac.immigration.gov.tw","2026-10-05"],
  "TW-SRC-24": ["Ministry of the Interior (MOI): Rental Housing Market Development and Regulation Act (租賃住宅市場發展及條例)","https://law.moj.gov.tw/ENG/LawClass/LawAll.aspx?pcode=D0060125","2026-10-05"],
  "TW-SRC-19": ["Directorate General of Highways (MOTC) & MIT Italia: Accordo Bilaterale di Reciprocità Conversione Patenti di Guida (In vigore dal 01/01/2016)","https://www.thb.gov.tw","2026-10-05"]
});
