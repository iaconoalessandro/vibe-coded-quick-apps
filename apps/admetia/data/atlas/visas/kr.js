/* Visas and permits: South Korea. From research/visas_immigration/south_korea/
 * (guide, source register, open questions), council check of 5 Oct 2026.
 * EU and UK passports only; the research takes an Italian citizen as reference. */
ATLAS.addVisas({
  id: 'KR',
  folder: 'south_korea',
  checked: '2026-10-05',
  review: '2027-03-31',

  routes: [
    { k: 'study', p: 'eu uk', v: 'open',
      name: ['D-2 student visa', 'Visto studentesco D-2'], law: 'Immigration Act',
      t: [
        ['Apply at the consulate with the university’s certificate of admission and apostilled diplomas; register for a residence card within 90 days of arrival. Public health insurance is automatic, at half price for students.',
          'Si fa domanda in consolato con il certificato di ammissione dell’università e i diplomi apostillati; ci si registra per la carta di residenza entro 90 giorni dall’arrivo. L’assicurazione sanitaria pubblica è automatica, a metà prezzo per gli studenti.', 'KR-SRC-13 KR-SRC-23 KR-SRC-01 KR-SRC-14'],
        ['Part-time work needs prior permission. Without the required TOPIK level you may work only 10 hours a week (15 for master’s students); with it, 20 to 35. Private tutoring and language schools are banned.',
          'Il lavoro part-time richiede un’autorizzazione preventiva. Senza il livello TOPIK richiesto si possono lavorare solo 10 ore a settimana (15 per i master); con il livello, da 20 a 35. Ripetizioni private e scuole di lingue sono vietate.', 'KR-SRC-10']
      ],
      f: [
        [['Funds, Seoul area', 'Mezzi, area di Seul'], ['₩20,000,000', '20.000.000 ₩'], 'KR-SRC-13'],
        [['Fees', 'Costi'], ['visa €54; residence card ₩35,000', 'visto 54 €; carta di residenza 35.000 ₩'], 'KR-SRC-07 KR-SRC-11'],
        [['Health insurance, students', 'Assicurazione sanitaria, studenti'], ['₩79,320 a month', '79.320 ₩ al mese'], 'KR-SRC-14']
      ] },

    { k: 'intern', p: 'eu uk', v: 'sponsor',
      name: ['Internships', 'Tirocini'], law: 'Immigration Act',
      t: [['Credit-bearing placements for students in Korea need no work permit but must pay at least the minimum wage. Students and graduates of foreign universities can train in companies on a D-4-2 visa with a training plan; graduates on the D-10 job-seeker visa can intern up to a year per company.',
        'I tirocini con crediti per gli studenti in Corea non richiedono permesso di lavoro ma devono pagare almeno il salario minimo. Studenti e laureati di università estere possono fare formazione in azienda con un visto D-4-2 e un piano di formazione; i laureati con visto D-10 possono fare tirocini fino a un anno per azienda.', 'KR-SRC-10 KR-SRC-01 KR-SRC-03']],
      f: [[['Minimum wage, 2026', 'Salario minimo, 2026'], ['₩10,320 an hour', '10.320 ₩ l’ora'], 'KR-SRC-06']] },

    { k: 'search', p: 'eu uk', v: 'open',
      name: ['D-10-1 job-seeker visa', 'Visto D-10-1 per cercare lavoro'], law: 'Ministry of Justice reform of 27 Oct 2025',
      t: [['Points-based (60 of 190); graduates of Korean universities can stay up to three years, renewed yearly. Graduates aged 29 or under from a world top-200 university skip the points test and the proof of funds.',
        'A punti (60 su 190); i laureati di università coreane possono restare fino a tre anni, con rinnovi annuali. I laureati di 29 anni o meno di un’università tra le prime 200 al mondo saltano il test a punti e la prova dei mezzi.', 'KR-SRC-02 KR-SRC-03 KR-SRC-04']],
      f: [[['Change of status', 'Cambio di status'], ['₩135,000, ₩115,000 online', '135.000 ₩, 115.000 ₩ online'], 'KR-SRC-11']],
      w: ['Student status ends on graduation day: switch to D-10 or leave within 30 days, whatever your card says.',
        'Lo status di studente finisce il giorno della laurea: passa al D-10 o parti entro 30 giorni, qualunque cosa dica la carta.', 'KR-SRC-01 KR-SRC-02'] },

    { k: 'work', p: 'eu uk', v: 'sponsor',
      name: ['E-7 professional visa', 'Visto professionale E-7'], law: 'Ministry of Justice sojourn guidelines 2026',
      t: [
        ['The employer obtains a visa issuance confirmation online; you need a master’s, or a bachelor’s with a year of experience. Foreign staff may be at most 20% of Korean staff, and the firm needs at least five insured Korean employees.',
          'Il datore ottiene online una conferma di emissione del visto; serve un master, o una laurea con un anno di esperienza. Il personale straniero può essere al massimo il 20% di quello coreano, e l’azienda deve avere almeno cinque dipendenti coreani assicurati.', 'KR-SRC-02 KR-SRC-05'],
        ['Foreign employees may choose a flat 19% income tax for up to 20 years. The points-based F-2-7 visa gives an open work permit.',
          'I dipendenti stranieri possono scegliere un’imposta fissa del 19% per un massimo di 20 anni. Il visto a punti F-2-7 dà un permesso di lavoro aperto.', 'KR-SRC-15 KR-SRC-02']
      ],
      f: [
        [['Salary, E-7-1', 'Stipendio, E-7-1'], ['₩31,120,000 a year', '31.120.000 ₩ l’anno'], 'KR-SRC-05'],
        [['Visa', 'Visto'], ['€54', '54 €'], 'KR-SRC-07']
      ] },

    { k: 'research', p: 'eu uk', v: 'sponsor',
      name: ['Research visits, researchers and PhDs', 'Visite di ricerca, ricercatori e dottorati'], law: 'Immigration Act',
      t: [
        ['Master’s and PhD students from abroad can do 3 to 12 months of thesis research on a D-2-5 visa; paid researchers at institutes such as KIST, KAIST or IBS hold an E-3 visa.',
          'Studenti di master e dottorato dall’estero possono fare da 3 a 12 mesi di ricerca di tesi con un visto D-2-5; i ricercatori retribuiti in istituti come KIST, KAIST o IBS hanno un visto E-3.', 'KR-SRC-01 KR-SRC-07'],
        ['Global Korea Scholarships cover tuition, flights and a tax-free allowance; STEM graduates of 32 research universities can get residence on the rector’s recommendation, without a job offer.',
          'Le Global Korea Scholarship coprono tasse, voli e un assegno esentasse; i laureati STEM di 32 università di ricerca possono ottenere la residenza su raccomandazione del rettore, senza offerta di lavoro.', 'KR-SRC-18 KR-SRC-17']
      ],
      f: [[['GKS allowance', 'Assegno GKS'], ['₩1,000,000 to 1,500,000 a month', 'da 1.000.000 a 1.500.000 ₩ al mese'], 'KR-SRC-18']] },

    { k: 'whv', p: 'eu', v: 'limited',
      name: ['H-1 working holiday', 'Vacanza-lavoro H-1'], law: 'bilateral agreements',
      t: [
        ['Terms depend on your country. For Italians: aged 18 to 30, 500 visas a year, 12 months, free; up to 25 hours a week and six months with one employer.',
          'Le condizioni dipendono dal paese. Per gli italiani: dai 18 ai 30 anni, 500 visti l’anno, 12 mesi, gratuito; fino a 25 ore a settimana e sei mesi con lo stesso datore.', 'KR-SRC-08 KR-SRC-07'],
        ['No language teaching, nightlife or regulated professions. Italians cannot switch to a work visa inside Korea, unlike Germans, Austrians or Spaniards.',
          'Niente insegnamento delle lingue, locali notturni o professioni regolamentate. Gli italiani non possono passare a un visto di lavoro in Corea, a differenza di tedeschi, austriaci o spagnoli.', 'KR-SRC-08 KR-SRC-21']
      ],
      f: [[['Funds', 'Mezzi'], ['₩3,000,000', '3.000.000 ₩'], 'KR-SRC-08']] },

    { k: 'whv', p: 'uk', v: 'limited',
      name: ['Youth mobility', 'Mobilità giovanile'], law: 'bilateral agreement',
      t: [['The UK has its own youth scheme with Korea; the research covers the Italian agreement only, so check the British terms.',
        'Il Regno Unito ha un proprio programma giovanile con la Corea; la ricerca copre solo l’accordo italiano, quindi verifica le condizioni britanniche.', 'KR-SRC-08']] },

    { k: 'short', p: 'eu uk', v: 'open',
      name: ['Visa-free visit', 'Visita senza visto'], law: 'Immigration Act',
      t: [['Up to 90 days visa-free with no work; Italy, the UK and some other countries are exempt from the K-ETA until 31 December 2026. A visit cannot be converted into a long stay inside Korea.',
        'Fino a 90 giorni senza visto e senza lavorare; Italia, Regno Unito e alcuni altri paesi sono esenti dalla K-ETA fino al 31 dicembre 2026. Una visita non si può convertire in un soggiorno lungo dall’interno della Corea.', 'KR-SRC-01 KR-SRC-09']] }
  ],

  arrival: [
    { k: 'before', p: 'eu uk', t: [
      ['For work, your employer applies online at visa.go.kr for a visa issuance confirmation; with its number you get the visa at a Korean consulate in 3 to 5 days. Students take the university’s certificate of admission, proof of funds and apostilled degrees to the consulate.',
        'Per lavoro, il datore chiede online su visa.go.kr la conferma di rilascio del visto; con il suo numero ottieni il visto presso un consolato coreano in 3-5 giorni. Gli studenti portano al consolato il certificato di ammissione dell’università, la prova dei fondi e i titoli apostillati.', 'KR-SRC-07 KR-SRC-13'],
      ['Book your registration appointment on HiKorea before you leave: in Seoul slots are full for 4 to 8 weeks, and booking does not stop the legal deadline.',
        'Prenota l’appuntamento per la registrazione su HiKorea prima di partire: a Seul i posti sono esauriti per 4-8 settimane, e la prenotazione non ferma il termine di legge.', 'KR-SRC-01']
    ] },
    { k: 'address', p: 'eu uk', t: [
      ['Report every change of address within 14 days of the lease start, at the local community centre or on HiKorea; from day 15 fines run up to ₩1,000,000.',
        'Comunica ogni cambio di indirizzo entro 14 giorni dall’inizio del contratto, al centro civico del quartiere o su HiKorea; dal 15° giorno le multe arrivano a 1.000.000 ₩.', 'KR-SRC-01']
    ] },
    { k: 'card', p: 'eu uk', t: [
      ['Staying over 90 days, register as a foreign resident within 90 days of entering, at the immigration office for your district, with fingerprints; the residence card (ARC) costs ₩35,000 and takes 3 to 4 weeks.',
        'Se resti oltre 90 giorni, registrati come residente straniero entro 90 giorni dall’ingresso presso l’ufficio immigrazione del tuo distretto, con le impronte; la carta di soggiorno (ARC) costa 35.000 ₩ e richiede 3-4 settimane.', 'KR-SRC-01 KR-SRC-11']
    ] },
    { k: 'number', p: 'eu uk', t: [
      ['Registration gives your 13-digit registration number, which is at once your tax number, social security number and national identifier.',
        'La registrazione ti assegna il numero di registrazione a 13 cifre, che è insieme codice fiscale, numero di previdenza e identificativo nazionale.', 'KR-SRC-25']
    ] },
    { k: 'health', p: 'eu uk', t: [
      ['You are enrolled in the National Health Insurance by law: students on a D-2 visa pay a reduced ₩79,320 a month in 2026, employees 4.0674% of gross pay.',
        'Sei iscritto per legge all’Assicurazione sanitaria nazionale: gli studenti con visto D-2 pagano una quota ridotta di 79.320 ₩ al mese nel 2026, i dipendenti il 4,0674% dello stipendio lordo.', 'KR-SRC-14']
    ] },
    { k: 'bank', p: 'eu uk', t: [
      ['With only a passport you get tourist prepaid SIMs and limited accounts capped at ₩1,000,000 a day (₩300,000 without a residence card); full accounts, a post-paid SIM and phone identity checks used by most apps come after registration.',
        'Con il solo passaporto ottieni SIM turistiche prepagate e conti limitati a 1.000.000 ₩ al giorno (300.000 ₩ senza carta di soggiorno); conti completi, SIM in abbonamento e le verifiche d’identità via telefono usate dalla maggior parte delle app arrivano dopo la registrazione.', 'KR-SRC-25']
    ] },
    { k: 'keep', p: 'eu uk', t: [
      ['Unpaid health insurance of over 3 months, or debts over ₩500,000, suspends cover and blocks your visa renewal.',
        'Il mancato pagamento dell’assicurazione sanitaria per oltre 3 mesi, o debiti oltre 500.000 ₩, sospende la copertura e blocca il rinnovo del visto.', 'KR-SRC-14']
    ] }
  ],

  traps: [
    { p: 'eu uk', t: ['On a single-entry visa, do not leave Korea before the residence card is issued, or the visa is cancelled at the border.',
      'Con un visto a ingresso singolo, non lasciare la Corea prima del rilascio della carta di residenza, o il visto viene annullato alla frontiera.', 'KR-SRC-12'] },
    { p: 'eu uk', t: ['Immigration appointments in Seoul are booked out four to eight weeks: book before you fly, as the 90-day deadline still runs.',
      'Gli appuntamenti all’immigrazione a Seul sono esauriti per quattro-otto settimane: prenota prima di partire, perché il termine dei 90 giorni corre comunque.', 'KR-SRC-01'] },
    { p: 'eu uk', t: ['Report a move within 14 days, and get a fixed-date stamp on your lease the same day to protect a deposit that often runs to ₩5,000,000 or more.',
      'Comunica un trasloco entro 14 giorni, e fai apporre lo stesso giorno la data certa sul contratto per proteggere un deposito che spesso arriva a 5.000.000 ₩ o più.', 'KR-SRC-01 KR-SRC-19'] },
    { p: 'eu uk', t: ['Unpaid health insurance blocks your visa renewal.',
      'L’assicurazione sanitaria non pagata blocca il rinnovo del visto.', 'KR-SRC-14'] }
  ],

  open: [
    { st: 'pending', t: ['Whether the K-ETA exemption for Europeans continues after 31 December 2026.',
      'Se l’esenzione dalla K-ETA per gli europei continuerà dopo il 31 dicembre 2026.'] },
    { st: 'watch', t: ['Whether Italians on a working holiday will be allowed to switch to a work visa in Korea.',
      'Se gli italiani in vacanza-lavoro potranno passare a un visto di lavoro in Corea.'] },
    { st: 'open', t: ['How self-employed income counts for the digital nomad visa’s threshold.',
      'Come conti il reddito da lavoro autonomo per la soglia del visto per nomadi digitali.'] }
  ]
});

/* Sources: generated by tools/visas-sources.js from research/visas_immigration/south_korea/south_korea_sources.md.
 * Do not edit by hand: change the register, then run the tool. */
ATLAS.visaSources('KR', {
  "KR-SRC-13": ["Ministry of Education & Korea Immigration Service: Standard di Solvibilità Finanziaria per Studenti Internazionali (D-2 / D-4)","https://www.studyinkorea.go.kr","2026-10-05"],
  "KR-SRC-23": ["Korea Immigration Service (출입국·외국인정책본부): Direttive per la Legalizzazione Documentale: Applicazione Esclusiva dell'Apostille dell'Aia per Documenti Italiani","https://www.immigration.go.kr","2026-10-05"],
  "KR-SRC-01": ["Ministry of Justice (법무부) / Korea Immigration Service: Immigration Act (출입국관리법) e decreti attuativi (Enforcement Decree Artt. 7-3, 10, 17, 18, 19, 24, 31, 36, 94, 98)","https://www.law.go.kr/LSW/lsInfoP.do?lsiSeq=253805","2026-10-05"],
  "KR-SRC-14": ["National Health Insurance Service (국민건강보험공단 - NHIS): National Health Insurance Act (국민건강보험법 Art. 109) & Tariffario Premi 2026","https://www.nhis.or.kr","2026-10-05"],
  "KR-SRC-10": ["Korea Immigration Service / HiKorea: Linee Guida sul Lavoro Part-Time per Studenti Stranieri (시간제취업 허가 기본계획 - S-3 Permit)","https://www.hikorea.go.kr","2026-10-05"],
  "KR-SRC-07": ["Ministry of Foreign Affairs (외교부) / Korea Visa Portal: Tariffario Consolare Ufficiale per i Visti d'Ingresso (Visa Fee Schedule)","https://www.visa.go.kr","2026-10-05"],
  "KR-SRC-11": ["Ministry of Justice (법무부): Tariffario delle Pratiche Amministrative di Soggiorno (Enforcement Rule of the Immigration Act Art. 72","https://www.law.go.kr","2026-10-05"],
  "KR-SRC-03": ["Ministry of Justice (법무부): Comunicato Ufficiale Riforma Visto Ricerca Lavoro D-10 e Tirocini (27 Ottobre 2025, in vigore dal 29/10/2025)","https://www.immigration.go.kr/bbs/immigration/214/486421/download.do","2026-10-05"],
  "KR-SRC-06": ["Ministry of Employment and Labor (고용노동부): Decreti di Fissazione del Salario Minimo Legale Nazionale (2025, 2026 e delibera 2027)","https://www.moel.go.kr","2026-10-05"],
  "KR-SRC-02": ["Korea Immigration Service (출입국·외국인정책본부) / MOJ: Manuale Generale di Gestione del Soggiorno per Stranieri (체류자격별 체류관리 길라잡이 2026)","https://www.hikorea.go.kr","2026-10-05"],
  "KR-SRC-04": ["Ministry of Justice / Korea Immigration Service: Linee Guida per il Riconoscimento delle Università Top 200 Mondiali (QS e THE World University Rankings)","https://www.hikorea.go.kr","2026-10-05"],
  "KR-SRC-05": ["Ministry of Justice / HiKorea: Tabella Salariale Minima per Visti Lavorativi Qualificati E-7 (Circolare MOJ 2026.2.1)","https://www.hikorea.go.kr","2026-10-05"],
  "KR-SRC-15": ["Ministry of Economy and Finance (기획재정부): Restriction of Special Taxation Act (조세특례제한법 제18조의2) - Regime Flat Tax 19% per Lavoratori Esteri","https://www.law.go.kr","2026-10-05"],
  "KR-SRC-18": ["National Institute for International Education (NIIED: Linee Guida Ufficiali Borsa di Studio Governativa Global Korea Scholarship (GKS)","https://www.studyinkorea.go.kr","2026-10-05"],
  "KR-SRC-17": ["Ministry of Justice & Ministry of Science and ICT: K-STAR Visa Track: Corsia Preferenziale per Talenti Scientifici e Tecnologici (Febbraio 2026)","https://www.moj.go.kr","2026-10-05"],
  "KR-SRC-08": ["Accordo Bilaterale sul Programma Vacanze-Lavoro (Working Holiday H-1) Italia - Corea del Sud (in vigore dal 2019)","https://overseas.mofa.go.kr/it-it/index.do","2026-10-05"],
  "KR-SRC-21": ["Ministry of Justice (법무부): Specifiche Tecniche sul Visto di Insegnamento Linguistico E-2 (Foreign Language Instructor)","https://www.hikorea.go.kr","2026-10-05"],
  "KR-SRC-09": ["K-ETA Official Portal / Ministry of Justice: Provvedimento di Estensione dell'Esenzione Temporanea K-ETA per 22 Paesi (valido fino al 31/12/2026)","https://www.k-eta.go.kr","2026-10-05"],
  "KR-SRC-25": ["Ministry of the Interior and Safety (행정안전부) & Financial…: Regolamento del Foreigner Registration Number (외국인등록번호) & Conti a Limite Ridotto (한도제한계좌)","https://www.fsc.go.kr","2026-10-05"],
  "KR-SRC-12": ["Korea Immigration Service (KIS) / HiKorea: Regolamento del Permesso di Re-ingresso (Re-entry Permit Exemption Decree)","https://www.hikorea.go.kr","2026-10-05"],
  "KR-SRC-19": ["Ministry of Land, Infrastructure and Transport (국토교통부): Housing Lease Protection Act (주택임대차보호법) & Tutela del Deposito Cauzionale (Bojunggeum)","https://www.law.go.kr","2026-10-05"]
});
