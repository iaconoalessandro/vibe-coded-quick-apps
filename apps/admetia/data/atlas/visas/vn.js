/* Visas and permits: Vietnam. From research/visas_immigration/vietnam/
 * (guide, source register, open questions), council check of 5 Oct 2026.
 * EU and UK passports only. */
ATLAS.addVisas({
  id: 'VN',
  folder: 'vietnam',
  checked: '2026-10-05',
  review: '2027-03-31',

  routes: [
    { k: 'study', p: 'eu uk', v: 'open',
      name: ['DH student visa and residence card', 'Visto studentesco DH e carta di residenza'], law: 'Law 47/2014/QH13',
      t: [
        ['A university authorised to take foreign students requests a DH entry visa, then a temporary residence card for the length of the course.',
          'Un’università autorizzata ad accogliere studenti stranieri chiede un visto d’ingresso DH, poi una carta di residenza temporanea per la durata del corso.', 'VN-SRC-19 VN-SRC-01'],
        ['International students may not work at all, not even part time; private English lessons count, and lead to expulsion and a three-to-five-year ban.',
          'Gli studenti internazionali non possono lavorare affatto, nemmeno part-time; anche le lezioni private d’inglese contano, e portano all’espulsione e a un divieto da tre a cinque anni.', 'VN-SRC-02 VN-SRC-19 VN-SRC-10']
      ],
      f: [[['Residence card', 'Carta di residenza'], ['$145 up to 2 years, $155 up to 5', '145 $ fino a 2 anni, 155 $ fino a 5'], 'VN-SRC-06']] },

    { k: 'intern', p: 'eu uk', v: 'sponsor',
      name: ['Internship with a work-permit exemption', 'Tirocinio con esenzione dal permesso di lavoro'], law: 'Labour Code art. 154; Decree 219/2025',
      t: [['Enrolled students with a three-way internship agreement are exempt from the work permit, but the host must obtain the exemption certificate and you need a DH visa. Graduates cannot intern: anything they do counts as ordinary work.',
        'Gli studenti iscritti con una convenzione di tirocinio trilaterale sono esenti dal permesso di lavoro, ma l’ente deve ottenere il certificato di esenzione e serve un visto DH. I laureati non possono fare tirocini: qualsiasi attività conta come lavoro ordinario.', 'VN-SRC-02 VN-SRC-03 VN-SRC-01']] },

    { k: 'search', p: 'eu uk', v: 'closed',
      name: ['After graduating', 'Dopo la laurea'], law: 'Law 47/2014/QH13',
      t: [['There is no job-search visa: when the student card expires you must leave, unless a work permit or exemption is approved first, which a graduate without two years of experience rarely gets.',
        'Non esiste un visto per cercare lavoro: alla scadenza della carta da studente bisogna partire, salvo che prima non sia approvato un permesso di lavoro o un’esenzione, cosa rara per un laureato senza due anni di esperienza.', 'VN-SRC-01 VN-SRC-03']] },

    { k: 'work', p: 'eu uk', v: 'sponsor',
      name: ['Work permit and LĐ2 residence card', 'Permesso di lavoro e carta di residenza LĐ2'], law: 'Labour Code 2019; Decree 219/2025',
      t: [
        ['The employer advertises the job locally for five working days, then files the work permit with the provincial labour department; you enter on an LĐ2 visa, take a medical at an accredited Vietnamese hospital and get a two-year residence card. Contracts last two years at most.',
          'Il datore pubblica l’annuncio localmente per cinque giorni lavorativi, poi presenta il permesso di lavoro al dipartimento provinciale del Lavoro; entri con un visto LĐ2, fai una visita medica in un ospedale vietnamita accreditato e ottieni una carta di residenza di due anni. I contratti durano al massimo due anni.', 'VN-SRC-03 VN-SRC-01 VN-SRC-09 VN-SRC-02 VN-SRC-06'],
        ['Experts need a degree and two years of experience, one year in technology, digital, semiconductors, AI or finance.',
          'Gli esperti hanno bisogno di una laurea e due anni di esperienza, un anno in tecnologia, digitale, semiconduttori, IA o finanza.', 'VN-SRC-03']
      ],
      f: [[['Residence card', 'Carta di residenza'], ['$145 for 2 years', '145 $ per 2 anni'], 'VN-SRC-06']] },

    { k: 'research', p: 'eu uk', v: 'sponsor',
      name: ['Research visits and PhDs', 'Visite di ricerca e dottorati'], law: 'Law 47/2014/QH13',
      t: [
        ['Thesis research with a Vietnamese university uses a DH visa; researchers working with Vietnamese institutions without enrolling get an LV2 visa. Fieldwork, sampling or interviews need prior government clearance.',
          'La ricerca di tesi con un’università vietnamita usa un visto DH; i ricercatori che collaborano con istituzioni vietnamite senza iscriversi ottengono un visto LV2. Lavoro sul campo, campionamenti o interviste richiedono un’autorizzazione governativa preventiva.', 'VN-SRC-01 VN-SRC-19'],
        ['Scholarships are free of income tax, but universities cannot pay foreign PhD students a salary on a DH visa.',
          'Le borse sono esenti da imposta sul reddito, ma le università non possono pagare uno stipendio ai dottorandi stranieri con visto DH.', 'VN-SRC-17']
      ] },

    { k: 'whv', p: 'eu uk', v: 'closed',
      name: ['Working holiday', 'Vacanza-lavoro'], law: 'bilateral agreements',
      t: [['Vietnam has working-holiday agreements only with Australia and New Zealand; “teach and travel” offers on a tourist visa are illegal work.',
        'Il Vietnam ha accordi di vacanza-lavoro solo con Australia e Nuova Zelanda; le offerte di “insegnare e viaggiare” con visto turistico sono lavoro irregolare.', 'VN-SRC-18 VN-SRC-10']] },

    { k: 'short', p: 'eu uk', v: 'open',
      name: ['Visa-free visit or e-visa', 'Visita senza visto o e-visa'], law: 'Resolutions 44/NQ-CP and 229/NQ-CP',
      t: [
        ['British citizens and those of 18 EU countries, Italy, Germany, France and Spain among them, enter visa-free for 45 days, not extendable. Austria, Greece, Portugal, Ireland, the Baltic states, Malta and Cyprus need an e-visa of up to 90 days.',
          'I cittadini britannici e quelli di 18 paesi UE, tra cui Italia, Germania, Francia e Spagna, entrano senza visto per 45 giorni, non prorogabili. Austria, Grecia, Portogallo, Irlanda, paesi baltici, Malta e Cipro hanno bisogno di un e-visa fino a 90 giorni.', 'VN-SRC-04 VN-SRC-05 VN-SRC-01']
      ],
      f: [[['E-visa', 'E-visa'], ['$25 single entry, $50 multiple', '25 $ ingresso singolo, 50 $ multiplo'], 'VN-SRC-06']] }
  ],

  arrival: [
    { k: 'before', p: 'eu uk', t: [
      ['About two months ahead, have your degree, a foreign criminal record under 6 months old and work references legalised: since 11 September 2026 an apostille is enough for Italian documents, while some countries that objected still need consular legalisation.',
        'Circa due mesi prima, fai legalizzare laurea, casellario giudiziale estero di meno di 6 mesi e attestazioni di lavoro: dall’11 settembre 2026 per i documenti italiani basta l’apostille, mentre alcuni paesi che hanno fatto obiezione richiedono ancora la legalizzazione consolare.', 'VN-SRC-07 VN-SRC-08'],
      ['On the e-visa, the order of your names must match the machine-readable line of your passport exactly, or the airline may refuse to board you.',
        'Sull’e-visa, l’ordine dei nomi deve coincidere esattamente con la riga a lettura ottica del passaporto, o la compagnia aerea può rifiutare l’imbarco.', 'VN-SRC-05 VN-SRC-10']
    ] },
    { k: 'address', p: 'eu uk', t: [
      ['Whoever houses you must register your temporary residence within 24 hours of arrival; otherwise you face fines of VND 3 to 5 million, and without the registration slip you cannot get the residence card.',
        'Chi ti ospita deve registrare la tua dimora temporanea entro 24 ore dall’arrivo; altrimenti rischi multe da 3 a 5 milioni di VND, e senza la cedola di registrazione non puoi ottenere la carta di soggiorno.', 'VN-SRC-01 VN-SRC-11 VN-SRC-10']
    ] },
    { k: 'card', p: 'eu uk', t: [
      ['A two-year temporary residence card for work (LĐ2) costs USD 145.',
        'Una carta di soggiorno temporaneo di due anni per lavoro (LĐ2) costa 145 USD.', 'VN-SRC-06']
    ] },
    { k: 'number', p: 'eu uk', t: [
      ['Register your employee tax code within 10 working days and join compulsory social and health insurance: 9.5% from you, 20.5% from the company.',
        'Registra il codice fiscale da dipendente entro 10 giorni lavorativi e iscriviti alla previdenza e all’assicurazione sanitaria obbligatorie: il 9,5% a carico tuo, il 20,5% dell’azienda.', 'VN-SRC-17 VN-SRC-16']
    ] },
    { k: 'health', p: 'eu uk', t: [
      ['Workers need a health check at an accredited Vietnamese hospital, about VND 1,500,000, for a certificate stating that they are fit for work.',
        'I lavoratori devono fare una visita medica in un ospedale vietnamita accreditato, circa 1.500.000 VND, per un certificato di idoneità al lavoro.', 'VN-SRC-09']
    ] },
    { k: 'bank', p: 'eu uk', t: [
      ['Banks may not open accounts for tourist or e-visa holders. Professionals need a passport, a residence card valid at least 12 months, a work contract, a tax code and the residence slip, and must give biometrics in person; accounts freeze the day the card expires.',
        'Le banche non possono aprire conti a chi ha un visto turistico o un e-visa. I professionisti hanno bisogno di passaporto, carta di soggiorno valida almeno 12 mesi, contratto di lavoro, codice fiscale e cedola di residenza, e devono fornire i dati biometrici di persona; i conti si bloccano il giorno della scadenza della carta.', 'VN-SRC-15']
    ] },
    { k: 'keep', p: 'eu uk', none: true }
  ],

  traps: [
    { p: 'eu uk', t: ['Whoever houses you must register you with the police within 24 hours; without it you cannot get a residence card.',
      'Chi ti ospita deve registrarti alla polizia entro 24 ore; senza registrazione non si ottiene la carta di residenza.', 'VN-SRC-01 VN-SRC-11'] },
    { p: 'eu uk', t: ['Working before the work permit is issued means expulsion and a fine of up to 25 million VND.',
      'Lavorare prima del rilascio del permesso di lavoro comporta espulsione e una multa fino a 25 milioni di VND.', 'VN-SRC-13'] },
    { p: 'eu uk', t: ['Names on the e-visa must match the passport’s machine-readable line exactly, or airlines refuse boarding.',
      'I nomi sull’e-visa devono corrispondere esattamente alla riga a lettura ottica del passaporto, o le compagnie negano l’imbarco.', 'VN-SRC-05 VN-SRC-10'] },
    { p: 'eu uk', t: ['Banks cannot open accounts for tourists or e-visa holders, and need face biometrics in person.',
      'Le banche non possono aprire conti a turisti o titolari di e-visa, e richiedono la biometria facciale di persona.', 'VN-SRC-15'] },
    { p: 'eu uk', t: ['A spouse’s family residence card gives no right to work.',
      'La carta di residenza familiare del coniuge non dà diritto di lavorare.', 'VN-SRC-02 VN-SRC-23'] }
  ],

  open: [
    { st: 'watch', t: ['Vietnam joined the Apostille Convention on 11 September 2026; provincial offices accept Italian apostilles unevenly.',
      'Il Vietnam ha aderito alla Convenzione dell’Aja l’11 settembre 2026; gli uffici provinciali accettano le apostille italiane in modo disomogeneo.'] },
    { st: 'open', t: ['Medical certificates from Italy are in practice rejected for the work permit.',
      'I certificati medici italiani sono di fatto respinti per il permesso di lavoro.'] },
    { st: 'open', t: ['Whether a visa-free visitor can switch to a work visa inside Vietnam is handled inconsistently.',
      'Se un visitatore senza visto possa passare a un visto di lavoro in Vietnam è gestito in modo incoerente.'] }
  ]
});

/* Sources: generated by tools/visas-sources.js from research/visas_immigration/vietnam/vietnam_sources.md.
 * Do not edit by hand: change the register, then run the tool. */
ATLAS.visaSources('VN', {
  "VN-SRC-19": ["Bộ Giáo dục và Đào tạo (MOET): Regolamento sulla gestione degli studenti stranieri nelle università vietnamite (Thông tư 30/2018/TT-BGDĐT)","https://moet.gov.vn","2026-10-05"],
  "VN-SRC-01": ["Quốc hội Việt Nam: Luật Nhập cảnh, xuất cảnh, quá cảnh, cư trú của người nước ngoài tại Việt Nam (Legge n. 47/2014/QH13), emendata da…","https://vbpl.vn","2026-10-05"],
  "VN-SRC-02": ["Quốc hội Việt Nam: Bộ luật Lao động 2019 (Codice del Lavoro n. 45/2019/QH14), Capitolo XI (Lavoratori stranieri, artt. 151-157)","https://vbpl.vn","2026-10-05"],
  "VN-SRC-10": ["Chính phủ Việt Nam: Nghị định số 282/2025/NĐ-CP (in vigore dal 15/12/2025, sostituisce Decreto 144/2021/NĐ-CP)","https://thuvienphapluat.vn","2026-10-05"],
  "VN-SRC-06": ["Bộ Tài chính: Thông tư số 28/2026/TT-BTC (del 27/03/2026, in vigore dal 01/04/2026, confermata da TT 81/2026/TT-BTC)","https://thuvienphapluat.vn","2026-10-05"],
  "VN-SRC-03": ["Chính phủ Việt Nam: Nghị định số 219/2025/NĐ-CP (Promulgato il 07/08/2025, in vigore dal 07/08/2025) su lavoratori stranieri","https://vanban.chinhphu.vn","2026-10-05"],
  "VN-SRC-09": ["Bộ Y tế: Thông tư số 32/2023/TT-BYT (in vigore dal 01/01/2024, attuativa della Legge sulle Cure Mediche 2023, sostituisce TT…","https://thuvienphapluat.vn","2026-10-05"],
  "VN-SRC-17": ["Tổng cục Thuế / Bộ Tài chính: Luật Quản lý thuế số 38/2019/QH14 e Thông tư số 111/2013/TT-BTC (Thuế TNCN - PIT)","https://gdt.gov.vn","2026-10-05"],
  "VN-SRC-18": ["Bộ Ngoại giao Việt Nam (MOFA): Accordi Bilaterali di Vacanza-Lavoro (Working Holiday Agreements)","https://mofa.gov.vn","2026-10-05"],
  "VN-SRC-04": ["Chính phủ Việt Nam: Nghị quyết số 44/NQ-CP (07/03/2025) e Nghị quyết số 229/NQ-CP (08/08/2025) sull'esenzione unilaterale da visto","https://chinhphu.vn","2026-10-05"],
  "VN-SRC-05": ["Bộ Công an / Cục Quản lý xuất nhập cảnh: Portale Ufficiale Governativo E-Visa Vietnam (Hệ thống cấp thị thực điện tử)","https://evisa.xuatnhapcanh.gov.vn","2026-10-05"],
  "VN-SRC-07": ["Chính phủ Việt Nam / HCCH: Convenzione dell'Aia del 1961 sull'Apostille (Adesione Vietnam in vigore dall'11/09/2026) e Nghị định 293/2026/NĐ-CP…","https://www.hcch.net","2026-10-05"],
  "VN-SRC-08": ["Chính phủ Việt Nam / Bộ Ngoại giao: Nghị định số 111/2011/NĐ-CP e Thông tư số 01/2012/TT-BNG (Chứng nhận lãnh sự, hợp pháp hóa lãnh sự)","https://vanban.chinhphu.vn","2026-10-05"],
  "VN-SRC-11": ["Bộ Công an: Thông tư số 53/2016/TT-BCA e Legge 47/2014, art. 33 (Khai báo tạm trú)","https://bocongan.gov.vn","2026-10-05"],
  "VN-SRC-16": ["Quốc hội Việt Nam / BHXH: Luật Bảo hiểm xã hội số 41/2024/QH15 e Nghị định số 143/2018/NĐ-CP","https://baohiemxahoi.gov.vn","2026-10-05"],
  "VN-SRC-15": ["Ngân hàng Nhà nước Việt Nam (SBV): Thông tư 17/2024/TT-NHNN, Thông tư 18/2024/TT-NHNN e Quyết định 2345/QĐ-NHNN","https://sbv.gov.vn","2026-10-05"],
  "VN-SRC-13": ["Chính phủ Việt Nam: Nghị định số 12/2022/NĐ-CP (Sanzioni nel settore del lavoro e previdenza, art. 32)","https://vanban.chinhphu.vn","2026-10-05"],
  "VN-SRC-23": ["Bộ Công an: Circolare congiunta procedure ricongiungimento familiare (Visto TT / TRC TT)","https://bocongan.gov.vn","2026-10-05"]
});
