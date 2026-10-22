/* Visas and permits: Türkiye. From research/visas_immigration/turkey/
 * (guide, source register, open questions), council check of 5 Oct 2026.
 * EU and UK passports only; fee amounts (harç) were not re-read in the review. */
ATLAS.addVisas({
  id: 'TR',
  folder: 'turkey',
  checked: '2026-10-05',
  review: '2027-03-31',

  routes: [
    { k: 'study', p: 'eu uk', v: 'open',
      name: ['Student residence permit', 'Permesso di soggiorno per studenti'], law: 'Law 6458, arts 38–41',
      t: [
        ['Visa-exempt EU citizens, such as Italians, enrol and apply inside Turkey; the research says others apply for a student visa at a consulate first. Apply on e-İkamet and hand the file to the university’s international office, not the migration office.',
          'I cittadini UE esenti da visto, come gli italiani, si iscrivono e fanno domanda in Turchia; secondo la ricerca gli altri chiedono prima un visto per studio in consolato. Si fa domanda su e-İkamet e si consegna il fascicolo all’ufficio internazionale dell’università, non all’ufficio immigrazione.', 'TR-SRC-12 TR-SRC-13 TR-SRC-15'],
        ['Bachelor’s students may not work in year 1, then up to 24 hours a week with a permit the employer requests; master’s and PhD students may work from year 1.',
          'Gli studenti triennali non possono lavorare al 1° anno, poi fino a 24 ore a settimana con un permesso chiesto dal datore; gli studenti di master e dottorato possono lavorare dal 1° anno.', 'TR-SRC-01 TR-SRC-02']
      ],
      f: [
        [['Fees', 'Costi'], ['permit free; card 964 TRY', 'permesso gratuito; tessera 964 TRY'], 'TR-SRC-07'],
        [['Public health insurance', 'Assicurazione sanitaria pubblica'], ['1,321.20 TRY a month', '1.321,20 TRY al mese'], 'TR-SRC-16']
      ],
      w: ['Join public health insurance within three months of first enrolling, or lose the right for the whole degree.',
        'Iscriviti all’assicurazione sanitaria pubblica entro tre mesi dalla prima immatricolazione, o perdi il diritto per tutto il corso.', 'TR-SRC-16'] },

    { k: 'intern', p: 'eu uk', v: 'sponsor',
      name: ['Internship exemption certificate', 'Certificato di esenzione per tirocinio'], law: 'Law 6735 art. 13',
      t: [
        ['Compulsory curricular internships and Erasmus+, IAESTE or AIESEC traineeships are exempt from a work permit for up to 12 months, but only with an exemption certificate requested on calismaizni.csgb.gov.tr. Beyond 90 days you also need a short-term residence permit.',
          'I tirocini curricolari obbligatori e quelli Erasmus+, IAESTE o AIESEC sono esenti dal permesso di lavoro fino a 12 mesi, ma solo con un certificato di esenzione chiesto su calismaizni.csgb.gov.tr. Oltre 90 giorni serve anche un permesso di soggiorno breve.', 'TR-SRC-03 TR-SRC-18 TR-SRC-01'],
        ['A voluntary internship has no exemption: without a full work permit it is illegal work.',
          'Un tirocinio volontario non ha esenzioni: senza un permesso di lavoro completo è lavoro irregolare.', 'TR-SRC-02 TR-SRC-03']
      ],
      f: [[['Fees', 'Costi'], ['up to 3 months: none; 3 to 12 months: 13,538.90 TRY', 'fino a 3 mesi: nessuno; da 3 a 12 mesi: 13.538,90 TRY'], 'TR-SRC-07']] },

    { k: 'search', p: 'eu uk', v: 'open',
      name: ['Permit for graduates', 'Permesso per neolaureati'], law: 'Law 6458 art. 31(1)(ı)',
      t: [['After a degree from a Turkish university, apply within six months of graduating for a one-year permit, once in a lifetime. It does not allow work, but an employer can then request your work permit from inside Turkey.',
        'Dopo una laurea in un’università turca si chiede entro sei mesi dalla laurea un permesso di un anno, una sola volta nella vita. Non consente di lavorare, ma un datore può poi chiedere il permesso di lavoro dall’interno della Turchia.', 'TR-SRC-01 TR-SRC-05 TR-SRC-02 TR-SRC-04']],
      f: [[['Fees', 'Costi'], ['27,915.20 TRY + card 964 TRY', '27.915,20 TRY + tessera 964 TRY'], 'TR-SRC-07']] },

    { k: 'work', p: 'eu uk', v: 'sponsor',
      name: ['Work permit and Turquoise Card', 'Permesso di lavoro e Turkuaz Kart'], law: 'Law 6735',
      t: [
        ['You apply at a consulate and the employer completes the file online within 10 working days. The employer needs five Turkish staff per foreigner and 500,000 TL of paid-in capital, or large turnover or exports.',
          'Si fa domanda in consolato e il datore completa la pratica online entro 10 giorni lavorativi. Il datore deve avere cinque dipendenti turchi per ogni straniero e 500.000 TL di capitale versato, o un fatturato o un export elevati.', 'TR-SRC-04 TR-SRC-21'],
        ['The Turquoise Card is points-based for highly qualified people: three transitional years, then indefinite, with a card for the family.',
          'La Turkuaz Kart è a punti per persone altamente qualificate: tre anni transitori, poi a tempo indeterminato, con una carta per la famiglia.', 'TR-SRC-02 TR-SRC-03']
      ],
      f: [
        [['Salary, specialists', 'Stipendio, specialisti'], ['66,060 TRY a month gross (2× minimum wage)', '66.060 TRY lordi al mese (2× il salario minimo)'], 'TR-SRC-04 TR-SRC-10'],
        [['Salary, engineers and architects', 'Stipendio, ingegneri e architetti'], ['132,120 TRY a month gross (4×)', '132.120 TRY lordi al mese (4×)'], 'TR-SRC-04 TR-SRC-10'],
        [['Fees, one year', 'Costi, un anno'], ['12,574.90 TRY + card 964 TRY', '12.574,90 TRY + tessera 964 TRY'], 'TR-SRC-07']
      ],
      w: ['You cannot switch from a tourist stay to a work permit inside Turkey unless you already hold a residence permit of at least six months.',
        'Non si può passare da un soggiorno turistico a un permesso di lavoro in Turchia senza avere già un permesso di soggiorno di almeno sei mesi.', 'TR-SRC-02'] },

    { k: 'research', p: 'eu uk', v: 'sponsor',
      name: ['Visiting researchers and PhDs', 'Ricercatori ospiti e dottorati'], law: 'Regulation of 2 Feb 2022, art. 48',
      t: [
        ['Researchers invited by universities or public institutes are exempt from a work permit for up to two years, with an exemption certificate. Archaeology and other heritage research also needs a ministry permit.',
          'I ricercatori invitati da università o istituti pubblici sono esenti dal permesso di lavoro fino a due anni, con un certificato di esenzione. L’archeologia e altre ricerche sul patrimonio richiedono anche un permesso ministeriale.', 'TR-SRC-03 TR-SRC-01'],
        ['Master’s and PhD scholarships, TÜBİTAK and Türkiye Bursları included, are free of income tax.',
          'Le borse di master e dottorato, comprese TÜBİTAK e Türkiye Bursları, sono esenti da imposta sul reddito.', 'TR-SRC-17']
      ] },

    { k: 'whv', p: 'eu uk', v: 'closed',
      name: ['Working holiday', 'Vacanza-lavoro'], law: 'bilateral agreements',
      t: [['Turkey has working-holiday agreements only with Australia and New Zealand.',
        'La Turchia ha accordi di vacanza-lavoro solo con Australia e Nuova Zelanda.', 'TR-SRC-03']] },

    { k: 'short', p: 'eu uk', v: 'open',
      name: ['Visa-free visit', 'Visita senza visto'], law: 'Law 6458',
      t: [
        ['Most EU citizens and British citizens visit up to 90 days in any 180 without a visa, and may not work. The passport must be valid 60 days beyond the stay, so 150 days on entry.',
          'La maggior parte dei cittadini UE e i britannici visitano fino a 90 giorni ogni 180 senza visto, e non possono lavorare. Il passaporto deve valere 60 giorni oltre il soggiorno, quindi 150 giorni all’ingresso.', 'TR-SRC-13 TR-SRC-11 TR-SRC-01'],
        ['Italians can enter with the electronic ID card; keep the stamped entry slip until you leave.',
          'Gli italiani possono entrare con la carta d’identità elettronica; conserva il tagliando timbrato fino all’uscita.', 'TR-SRC-12 TR-SRC-21']
      ] }
  ],

  arrival: [
    { k: 'before', p: 'eu uk', t: [
      ['Your passport must be valid for 60 days beyond the stay allowed: on a 90-day visa-free entry, at least 150 days from arrival, or you are refused boarding.',
        'Il passaporto deve essere valido 60 giorni oltre il soggiorno consentito: con un ingresso senza visto di 90 giorni, almeno 150 giorni dall’arrivo, o non vieni imbarcato.', 'TR-SRC-01 TR-SRC-11'],
      ['To work, start the work permit through a Turkish consulate abroad: on visa-free entry you may not work or apply for a work permit inside Turkey unless you already hold a residence permit of at least 6 months. Students may enter visa-free and apply inside the country.',
        'Per lavorare, avvia il permesso di lavoro tramite un consolato turco all’estero: con l’ingresso senza visto non puoi lavorare né chiedere un permesso di lavoro in Turchia, a meno che tu non abbia già un permesso di soggiorno di almeno 6 mesi. Gli studenti possono entrare senza visto e fare domanda nel paese.', 'TR-SRC-02 TR-SRC-12']
    ] },
    { k: 'address', p: 'eu uk', t: [
      ['More than 1,169 neighbourhoods, including 10 whole districts of Istanbul, are closed to new foreign residents: a lease there means the residence permit is refused.',
        'Oltre 1.169 quartieri, tra cui 10 interi distretti di Istanbul, sono chiusi ai nuovi residenti stranieri: un contratto d’affitto lì comporta il rifiuto del permesso di soggiorno.', 'TR-SRC-14'],
      ['The lease must be signed before a Turkish notary with the owner present, showing the title deed, earthquake insurance (DASK) and the municipal address certificate.',
        'Il contratto d’affitto deve essere firmato davanti a un notaio turco con il proprietario presente, che mostra l’atto di proprietà, l’assicurazione antisismica (DASK) e il certificato comunale dell’indirizzo.', 'TR-SRC-20']
    ] },
    { k: 'card', p: 'eu uk', t: [
      ['Apply online at e-ikamet.goc.gov.tr for the residence permit; you need a certified state e-delivery address (UETS) from the post office. Students hand the paper file to their university’s international office, not to the migration office, and go there only for fingerprints; the card costs 964 TRY.',
        'Chiedi online il permesso di soggiorno su e-ikamet.goc.gov.tr; serve un indirizzo di notifica digitale certificato (UETS) dalle poste. Gli studenti consegnano il fascicolo cartaceo all’ufficio internazionale dell’università, non all’ufficio migrazione, e vi vanno solo per le impronte; la tessera costa 964 TRY.', 'TR-SRC-05 TR-SRC-15 TR-SRC-07']
    ] },
    { k: 'number', p: 'eu uk', none: true },
    { k: 'health', p: 'eu uk', t: [
      ['Students can join public health insurance (GSS) for 1,321.20 TRY a month, but must apply at the social security office within 3 months of first enrolling: after that the right is lost for the whole degree.',
        'Gli studenti possono aderire all’assicurazione sanitaria pubblica (GSS) per 1.321,20 TRY al mese, ma devono fare domanda all’ufficio di previdenza entro 3 mesi dalla prima immatricolazione: dopo, il diritto è perso per tutto il corso di studi.', 'TR-SRC-16']
    ] },
    { k: 'bank', p: 'eu uk', none: true },
    { k: 'keep', p: 'eu uk', t: [
      ['The application document keeps your stay legal until the decision but does not let you work. To travel while you wait, the fees must be paid and the document validated, and you may not stay abroad more than 15 days per trip, or the application is cancelled.',
        'Il documento di domanda mantiene legale il soggiorno fino alla decisione ma non permette di lavorare. Per viaggiare durante l’attesa, le tasse devono essere pagate e il documento convalidato, e non puoi restare all’estero più di 15 giorni per viaggio, o la domanda viene cancellata.', 'TR-SRC-05 TR-SRC-01'],
      ['Overstaying the 90 days without a permit and without paying the fine at the airport brings an automatic 5-year entry ban.',
        'Superare i 90 giorni senza permesso e senza pagare la multa in aeroporto comporta un divieto d’ingresso automatico di 5 anni.', 'TR-SRC-01']
    ] }
  ],

  traps: [
    { p: 'eu uk', t: ['More than 1,169 neighbourhoods, and 10 whole districts of Istanbul, are closed to new foreign residents: a lease there gets the permit refused.',
      'Oltre 1.169 quartieri, e 10 interi distretti di Istanbul, sono chiusi ai nuovi residenti stranieri: un affitto lì fa respingere il permesso.', 'TR-SRC-14'] },
    { p: 'eu uk', t: ['The lease must be signed before a Turkish notary with the owner present.',
      'Il contratto d’affitto va firmato davanti a un notaio turco con il proprietario presente.', 'TR-SRC-20'] },
    { p: 'eu uk', t: ['While a residence application is pending, each trip abroad may last at most 15 days; longer and the application is cancelled.',
      'Mentre una domanda di soggiorno è in corso, ogni viaggio all’estero può durare al massimo 15 giorni; oltre, la domanda viene cancellata.', 'TR-SRC-01 TR-SRC-05'] },
    { p: 'eu uk', t: ['A residence permit never allows work: only a work permit, which the employer requests, does.',
      'Un permesso di soggiorno non consente mai di lavorare: lo consente solo il permesso di lavoro, chiesto dal datore.', 'TR-SRC-02'] },
    { p: 'eu uk', t: ['Overstay the 90 days and leave without paying the fine and you get a five-year entry ban.',
      'Se superi i 90 giorni e parti senza pagare la multa, ricevi un divieto d’ingresso di cinque anni.', 'TR-SRC-01'] },
    { p: 'eu uk', t: ['Use only .gov.tr portals: agencies uploading false documents or addresses get you a five-year ban for fraud.',
      'Usa solo i portali .gov.tr: le agenzie che caricano documenti o indirizzi falsi ti procurano un divieto di cinque anni per frode.', 'TR-SRC-05 TR-SRC-13'] }
  ],

  open: [
    { st: 'open', t: ['Whether visa-exempt Italians converting to a first residence permit must also pay the one-off entry visa fee of 9,376.40 TRY.',
      'Se gli italiani esenti da visto che passano a un primo permesso di soggiorno debbano pagare anche la tassa una tantum di ingresso di 9.376,40 TRY.'] },
    { st: 'pending', t: ['The digital nomad certificate has no matching residence permit or tax rules yet.',
      'Il certificato per nomadi digitali non ha ancora un permesso di soggiorno né regole fiscali corrispondenti.'] },
    { st: 'open', t: ['Many bank branches refuse accounts until the residence card is issued.',
      'Molte filiali bancarie rifiutano di aprire conti finché non viene rilasciata la tessera di soggiorno.'] }
  ]
});

/* Sources: generated by tools/visas-sources.js from research/visas_immigration/turkey/turkey_sources.md.
 * Do not edit by hand: change the register, then run the tool. */
ATLAS.visaSources('TR', {
  "TR-SRC-12": ["T.C. Dışişleri Bakanlığı (MFA): Countries whose citizens are allowed to enter Türkiye with their national ID's","https://www.mfa.gov.tr/countries-whose-citizens-are-allowed-to-enter-turkey-with-their-national-id_s.en.mfa","2026-10-05"],
  "TR-SRC-13": ["T.C. Dışişleri Bakanlığı (MFA): General Visa Information for Foreigners","https://www.mfa.gov.tr/visa-information-for-foreigners.en.mfa","2026-10-05"],
  "TR-SRC-15": ["YÖK (Yükseköğretim Kurulu) & Göç İdaresi: Uluslararası Öğrencilerin İkamet İzni Başvurularına İlişkin İş Birliği Protokolü (15/11/2023)","https://www.yok.gov.tr","2026-10-05"],
  "TR-SRC-01": ["T.C. Cumhurbaşkanlığı / Resmî Gazete: 6458 sayılı Yabancılar ve Uluslararası Koruma Kanunu (YUKK) (R.G. 11/04/2013 n. 28615)","https://www.mevzuat.gov.tr/MevzuatMetin/1.5.6458.pdf","2026-10-05"],
  "TR-SRC-02": ["T.C. Cumhurbaşkanlığı / Resmî Gazete: 6735 sayılı Uluslararası İşgücü Kanunu (UİK) (R.G. 13/08/2016 n. 29800)","https://www.mevzuat.gov.tr/MevzuatMetin/1.5.6735.pdf","2026-10-05"],
  "TR-SRC-07": ["T.C. İçişleri Bakanlığı Göç İdaresi Başkanlığı: İkamet İzni Belge Bedeli ve Harç Miktarları (2026)","https://www.goc.gov.tr/belge-bedeli-ve-harc-miktari","2026-10-05"],
  "TR-SRC-16": ["Sosyal Güvenlik Kurumu (SGK): 5510 sayılı Kanun Madde 60/7 — Yabancı Uyruklu Öğrencilerin Genel Sağlık Sigortası (GSS)","https://www.sgk.gov.tr","2026-10-05"],
  "TR-SRC-03": ["T.C. Çalışma ve Sosyal Güvenlik Bakanlığı: Uluslararası İşgücü Kanunu Uygulama Yönetmeliği (R.G. 02/02/2022 n. 31738)","https://www.mevzuat.gov.tr/mevzuat?MevzuatNo=39294&MevzuatTur=7&MevzuatTertip=5","2026-10-05"],
  "TR-SRC-18": ["ÇSGB / Uluslararası İşgücü Genel Müdürlüğü: Çalışma İzni Muafiyeti Portalı (calismaizni.csgb.gov.tr) (Aggiornamento del 17/09/2026)","https://calismaizni.csgb.gov.tr/","2026-10-05"],
  "TR-SRC-05": ["T.C. İçişleri Bakanlığı Göç İdaresi Başkanlığı: Kısa Dönem İkamet İzni (YUKK Madde 31)","https://en.goc.gov.tr/short-term-residence-permit-31","2026-10-05"],
  "TR-SRC-04": ["ÇSGB / Uluslararası İşgücü Genel Müdürlüğü (UİGM): Yabancıların Çalışma İzni Başvuruları Değerlendirme Kriterleri (in vigore dal 01/10/2024, vigenti 2026)","https://www.csgb.gov.tr/uigm/calisma-izni/calisma-izni-degerlendirme-kriterleri/","2026-10-05"],
  "TR-SRC-21": ["Viaggiare Sicuri — Scheda Paese Turchia","https://www.viaggiaresicuri.it/country/TUR","2026-10-05"],
  "TR-SRC-10": ["T.C. Aile, Çalışma ve Sosyal Hizmetler / ÇSGB: Asgari Ücret Tespit Komisyonu Kararı n. 2025/1 (R.G. 26/12/2025 n. 33119)","https://www.resmigazete.gov.tr","2026-10-05"],
  "TR-SRC-17": ["T.C. Gelir İdaresi Başkanlığı: 193 sayılı Gelir Vergisi Kanunu (GVK), Madde 28","https://www.gib.gov.tr/mevzuat/kanunlar/gelir-vergisi-kanunu","2026-10-05"],
  "TR-SRC-11": ["T.C. Dışişleri Bakanlığı (MFA): Passport Validity Requirements While Entering Turkey","https://www.mfa.gov.tr/passport-validity-requirements-while-entering-turkey.en.mfa","2026-10-05"],
  "TR-SRC-14": ["T.C. İçişleri Bakanlığı Göç İdaresi Başkanlığı: 1.169 Mahallenin Yabancı İkametine Kapatılması Duyurusu","https://www.goc.gov.tr/mahalle-kapatilmasi-duyurusu","2026-10-05"],
  "TR-SRC-20": ["Türkiye Noterler Birliği (TNB): Yabancıların Kira Sözleşmelerinde Noter Onayı Genelgesi (15/02/2022)","https://portal.tnb.org.tr","2026-10-05"]
});
