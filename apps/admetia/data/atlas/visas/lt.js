/* Visas and permits: Lithuania. From research/visas_immigration/lithuania/
 * (guide, source register, open questions), council check of 6 Oct 2026. */
ATLAS.addVisas({
  id: 'LT',
  folder: 'lithuania',
  checked: '2026-10-06',
  review: '2027-03-31',

  free: {
    p: 'eu',
    t: [
      ['EU, EEA and Swiss citizens need no visa or work permit. Staying more than three months, apply through MIGRIS for the EU residence certificate: €10, issued within a month, valid up to five years.',
        'I cittadini UE, SEE e svizzeri non hanno bisogno di visto né di permesso di lavoro. Restando più di tre mesi si chiede su MIGRIS il certificato di soggiorno UE: 10 €, rilasciato entro un mese, valido fino a cinque anni.', 'LT-SRC-11 LT-SRC-03']
    ]
  },

  routes: [
    { k: 'study', p: 'uk us other', v: 'open',
      name: ['Temporary residence permit for study', 'Permesso di soggiorno temporaneo per studio'], law: 'Art. 46 UTPĮ',
      t: [
        ['The university files the invitation in MIGRIS free of charge; you then apply for the permit, which already includes the right to work.',
          'L’università invia gratuitamente la lettera di invito su MIGRIS; poi si chiede il permesso, che include già il diritto di lavorare.', 'LT-SRC-26 LT-SRC-01'],
        ['Since 22 May 2026, bachelor’s students in years 1 and 2 may work 20 hours a week in term; from year 3, and on master’s and PhD courses, up to 40.',
          'Dal 22 maggio 2026 gli studenti triennali del 1° e 2° anno possono lavorare 20 ore a settimana durante i corsi; dal 3° anno, e nei master e dottorati, fino a 40.', 'LT-SRC-02'],
        ['A non-EU student with a permit from another EU country in an EU programme can study here up to 360 days on a free university notification.',
          'Uno studente extra-UE con permesso di un altro paese UE in un programma europeo può studiare qui fino a 360 giorni con una notifica gratuita dell’università.', 'LT-SRC-24']
      ],
      f: [
        [['Funds', 'Mezzi'], ['€576.50 a month plus €1,153 for the return: €8,071 for a year', '576,50 € al mese più 1.153 € per il rientro: 8.071 € per un anno'], 'LT-SRC-04 LT-SRC-08'],
        [['Fees', 'Costi'], ['€80, or €320 for a decision in a month', '80 €, o 320 € per una decisione in un mese'], 'LT-SRC-03'],
        [['Abroad, VFS service fee', 'All’estero, commissione VFS'], ['€110', '110 €'], 'LT-SRC-14']
      ] },

    { k: 'intern', p: 'uk us other', v: 'limited',
      name: ['Internships', 'Tirocini'], law: 'Art. 10 Užimtumo įstatymas',
      t: [
        ['A curricular internship under a three-way agreement is covered by a Lithuanian study permit; students of foreign universities need a D visa or an internship permit.',
          'Un tirocinio curricolare con convenzione trilaterale è coperto dal permesso per studio lituano; chi studia in un’università estera ha bisogno di un visto D o di un permesso per tirocinio.', 'LT-SRC-01 LT-SRC-26'],
        ['A voluntary internship is unpaid, for under-29s, two months at most with one host, and is no basis for a visa from abroad.',
          'Un tirocinio volontario è non retribuito, per under 29, al massimo due mesi presso lo stesso ente, e non dà titolo a un visto dall’estero.', 'LT-SRC-17 LT-SRC-01']
      ] },

    { k: 'search', p: 'uk us other', v: 'open',
      name: ['Permit to look for work or start a business after graduating', 'Permesso per cercare lavoro o avviare un’impresa dopo la laurea'], law: 'Art. 40 UTPĮ',
      t: [['After a degree from a Lithuanian university: 12 months, not renewable, with the state fee waived once. A Lithuanian graduate hired within ten years skips the labour-market test.',
        'Dopo una laurea in un’università lituana: 12 mesi, non rinnovabili, con la tassa statale esentata una volta. Un laureato in Lituania assunto entro dieci anni salta il test del mercato del lavoro.', 'LT-SRC-12 LT-SRC-03']],
      f: [[['Funds', 'Mezzi'], ['€1,153 a month plus €1,153 for the return: €14,989', '1.153 € al mese più 1.153 € per il rientro: 14.989 €'], 'LT-SRC-04 LT-SRC-08']] },

    { k: 'work', p: 'uk us other', v: 'sponsor',
      name: ['EU Blue Card', 'Carta Blu UE'], law: 'Art. 44¹ UTPĮ',
      t: [
        ['A three-year degree, or five years of experience (three in the last seven for ICT managers and specialists), and a contract of at least six months.',
          'Una laurea triennale, o cinque anni di esperienza (tre negli ultimi sette per manager e specialisti ICT), e un contratto di almeno sei mesi.', 'LT-SRC-01 LT-SRC-10'],
        ['No quota and no labour-market test; you may start work once the application is accepted in MIGRIS, and family joins at once.',
          'Nessuna quota e nessun test del mercato; si può iniziare a lavorare appena la domanda è accettata su MIGRIS, e la famiglia arriva subito.', 'LT-SRC-10 LT-SRC-01']
      ],
      f: [
        [['Salary', 'Stipendio'], ['€3,617.10 a month gross', '3.617,10 € lordi al mese'], 'LT-SRC-09 LT-SRC-10'],
        [['Salary, shortage professions', 'Stipendio, professioni carenti'], ['€2,893.68 a month gross', '2.893,68 € lordi al mese'], 'LT-SRC-09 LT-SRC-10'],
        [['Fees', 'Costi'], ['€160, or €320 for 15 days; employer €50', '160 €, o 320 € per 15 giorni; datore 50 €'], 'LT-SRC-03']
      ] },

    { k: 'work', p: 'uk us other', v: 'limited',
      name: ['Temporary residence permit for work', 'Permesso di soggiorno temporaneo per lavoro'], law: 'Art. 44 UTPĮ',
      t: [['A full-time contract plus a matching qualification, a year of experience in the last three, or the national average wage. The yearly quota of 24,706 ran out on 7 September 2026; after that only higher salaries qualify.',
        'Un contratto a tempo pieno più una qualifica coerente, un anno di esperienza negli ultimi tre, o il salario medio nazionale. La quota annuale di 24.706 si è esaurita il 7 settembre 2026; da allora passano solo stipendi più alti.', 'LT-SRC-02 LT-SRC-13']],
      f: [
        [['Salary once the quota is used', 'Stipendio a quota esaurita'], ['€2,893.68 a month gross; €2,411.40 for listed professions', '2.893,68 € lordi al mese; 2.411,40 € per le professioni in elenco'], 'LT-SRC-13 LT-SRC-09'],
        [['Fees', 'Costi'], ['€160, or €320 for a month; employer €50', '160 €, o 320 € per un mese; datore 50 €'], 'LT-SRC-03']
      ],
      w: ['No change of employer in the first six months, and the permit is revoked if the job ends before a new employer is approved.',
        'Nessun cambio di datore nei primi sei mesi, e il permesso viene revocato se il lavoro finisce prima che un nuovo datore sia approvato.', 'LT-SRC-01'] },

    { k: 'research', p: 'uk us other', v: 'sponsor',
      name: ['Researcher permit, and PhDs', 'Permesso per ricercatori e dottorati'], law: 'Art. 45 UTPĮ',
      t: [
        ['A hosting agreement with an accredited university or institute: no labour-market test, no quota, family at once; afterwards a 12-month permit to look for work.',
          'Una convenzione di accoglienza con un’università o un istituto accreditato: nessun test del mercato, nessuna quota, famiglia subito; dopo, un permesso di 12 mesi per cercare lavoro.', 'LT-SRC-01 LT-SRC-12'],
        ['A PhD stipend is free of income tax and social contributions, and full-time doctoral students get public health cover from the state.',
          'La borsa di dottorato è esente da imposta sul reddito e contributi, e i dottorandi a tempo pieno hanno la copertura sanitaria pubblica a carico dello Stato.', 'LT-SRC-18 LT-SRC-15']
      ] },

    { k: 'whv', p: 'uk us', v: 'closed',
      name: ['Working holiday', 'Vacanza-lavoro'], law: 'bilateral agreements',
      t: [['Lithuania’s working-holiday agreements are only with Japan, Canada and New Zealand.',
        'Gli accordi di vacanza-lavoro della Lituania sono solo con Giappone, Canada e Nuova Zelanda.', 'LT-SRC-23']] },

    { k: 'whv', p: 'other', v: 'limited',
      name: ['Working holiday', 'Vacanza-lavoro'], law: 'bilateral agreements',
      t: [['For Japanese and New Zealanders aged 18 to 30 and Canadians aged 18 to 35: a D visa for up to 12 months that can be converted in Lithuania into a work permit or Blue Card.',
        'Per giapponesi e neozelandesi dai 18 ai 30 anni e canadesi dai 18 ai 35: un visto D fino a 12 mesi convertibile in Lituania in permesso di lavoro o Carta Blu.', 'LT-SRC-23 LT-SRC-01']],
      f: [[['Visa', 'Visto'], ['€140', '140 €'], 'LT-SRC-06']] },

    { k: 'short', p: 'uk us other', v: 'open',
      name: ['Short stay', 'Soggiorno breve'], law: 'Schengen',
      t: [['Up to 90 days in any 180, with no ordinary work.',
        'Fino a 90 giorni ogni 180, senza lavoro ordinario.', 'LT-SRC-01']],
      f: [[['Schengen visa', 'Visto Schengen'], ['€90', '90 €'], 'LT-SRC-07']] }
  ],

  arrival: [
    { k: 'before', p: 'eu', t: [
      ['Nothing to arrange in advance; if you will stay more than 3 months in six, you will apply for an EU residence certificate through the MIGRIS portal.',
        'Niente da preparare in anticipo; se resterai più di 3 mesi su sei, chiederai il certificato di soggiorno UE tramite il portale MIGRIS.', 'LT-SRC-11']
    ] },
    { k: 'before', p: 'uk us other', t: [
      ['Applications filed abroad through the external provider VFS Global carry a €110 service fee on top of the state fee.',
        'Le domande presentate all’estero tramite il fornitore esterno VFS Global prevedono una commissione di servizio di 110 € oltre alla tassa statale.', 'LT-SRC-14']
    ] },
    { k: 'address', p: 'eu uk us other', t: [
      ['Declare your place of residence within 1 month of getting your residence document: online through Registrų centras with the owner’s electronic consent, or in person at the ward office (seniūnija) with a lease entered in the property register. The flat must have at least 7 m² per adult registered there (4 m² for students).',
        'Dichiara il luogo di residenza entro 1 mese dal rilascio del documento di soggiorno: online tramite Registrų centras con il consenso elettronico del proprietario, o di persona presso la circoscrizione (seniūnija) con un contratto iscritto nel registro immobiliare. L’alloggio deve avere almeno 7 m² per ogni adulto registrato (4 m² per gli studenti).', 'LT-SRC-16 LT-SRC-27']
    ] },
    { k: 'card', p: 'eu', t: [
      ['Apply in MIGRIS for the certificate of the EU citizen’s right of temporary residence, and collect it at the Migration Department.',
        'Chiedi su MIGRIS il certificato del diritto di soggiorno temporaneo del cittadino UE, e ritiralo presso il Dipartimento migrazione.', 'LT-SRC-11 LT-SRC-01']
    ] },
    { k: 'card', p: 'uk us other', t: [
      ['Collect the plastic residence permit card at the Migration Department office you chose, where fingerprints are taken, or through VFS Global abroad.',
        'Ritira la tessera plastificata del permesso presso la sede del Dipartimento migrazione scelta, dove vengono rilevate le impronte, o tramite VFS Global all’estero.', 'LT-SRC-01 LT-SRC-14']
    ] },
    { k: 'number', p: 'eu uk us other', t: [
      ['Your residence document carries your 11-digit personal code (asmens kodas), yours for life and needed for health care, tax, work and utilities.',
        'Il documento di soggiorno riporta il codice personale a 11 cifre (asmens kodas), tuo a vita e necessario per sanità, fisco, lavoro e utenze.', 'LT-SRC-01']
    ] },
    { k: 'health', p: 'eu uk us other', t: [
      ['Employees are covered by compulsory public health insurance once the employer registers them with Sodra, which it must do before the first day of work.',
        'I dipendenti sono coperti dall’assicurazione sanitaria pubblica obbligatoria quando il datore li registra presso Sodra, cosa che deve fare prima del primo giorno di lavoro.', 'LT-SRC-20 LT-SRC-15']
    ] },
    { k: 'health', p: 'uk us other', t: [
      ['If you are not employed, paying Sodra yourself does not give public cover and can cost you the permit: take private insurance of at least €30,000 for the whole stay.',
        'Se non sei dipendente, pagare tu stesso Sodra non dà la copertura pubblica e può costarti il permesso: stipula un’assicurazione privata di almeno 30.000 € per tutto il soggiorno.', 'LT-SRC-15 LT-SRC-01']
    ] },
    { k: 'bank', p: 'eu uk us other', t: [
      ['Many newcomers start with Revolut Bank UAB, licensed in Lithuania with a Lithuanian IBAN, avoiding the €200 to €250 non-refundable onboarding fees of traditional banks.',
        'Molti nuovi arrivati iniziano con Revolut Bank UAB, con licenza lituana e IBAN lituano, evitando le commissioni d’ingresso non rimborsabili da 200 a 250 € delle banche tradizionali.', 'LT-SRC-25'],
      ['With your personal code, activate Smart-ID or Mobile-ID, the standard digital ID for signing contracts and using MIGRIS, the tax office and Sodra.',
        'Con il codice personale, attiva Smart-ID o Mobile-ID, l’identità digitale standard per firmare contratti e usare MIGRIS, il fisco e Sodra.', 'LT-SRC-27']
    ] },
    { k: 'keep', p: 'eu', none: true },
    { k: 'keep', p: 'uk us other', t: [
      ['A permit holder without valid health insurance can lose the permit, so keep cover in place between jobs.',
        'Chi ha un permesso senza un’assicurazione sanitaria valida può perderlo, quindi mantieni la copertura tra un lavoro e l’altro.', 'LT-SRC-01 LT-SRC-15']
    ] }
  ],

  traps: [
    { p: 'uk us other', t: ['There is no bridging status: apply while visa-free and still be waiting on day 91, and the application must be refused, with a removal order and a Schengen entry ban. Apply early or leave before day 90.',
      'Non esiste uno status ponte: se si fa domanda in esenzione visto e al 91° giorno si sta ancora aspettando, la domanda va respinta, con ordine di rimpatrio e divieto d’ingresso Schengen. Fare domanda presto o uscire prima del 90° giorno.', 'LT-SRC-01'] },
    { p: 'uk us other', t: ['You must declare your address within a month, with at least 7 m² per adult. Many landlords refuse consent; write it into the lease. Bought fake addresses lead to revocation.',
      'Bisogna dichiarare l’indirizzo entro un mese, con almeno 7 m² per adulto. Molti proprietari negano il consenso: va scritto nel contratto. Gli indirizzi fittizi comprati portano alla revoca.', 'LT-SRC-16 LT-SRC-27'] },
    { p: 'uk us other', t: ['If you do not work, you cannot buy into public health insurance through Sodra: you need private cover of at least €30,000.',
      'Se non si lavora non si può pagare l’assicurazione sanitaria pubblica a Sodra: serve una polizza privata di almeno 30.000 €.', 'LT-SRC-15'] },
    { p: 'uk us other', t: ['Criminal-record certificates are needed from every country you lived in for over six months in the last two years, apostilled and in sworn Lithuanian translation.',
      'Servono i certificati penali di ogni paese in cui si è vissuto più di sei mesi negli ultimi due anni, apostillati e con traduzione giurata in lituano.', 'LT-SRC-01'] },
    { p: 'other', t: ['Since December 2024 VFS centres outside your own country turn ordinary applicants away; Blue Card applicants, researchers and students are exempt.',
      'Da dicembre 2024 i centri VFS fuori dal proprio paese respingono i richiedenti ordinari; sono esclusi Carta Blu, ricercatori e studenti.', 'LT-SRC-14 LT-SRC-10'] }
  ],

  open: [
    { st: 'open', t: ['MIGRIS appointments for fingerprints are scarce in Vilnius; regional offices are often faster.',
      'Gli appuntamenti MIGRIS per le impronte scarseggiano a Vilnius; gli uffici regionali sono spesso più rapidi.'] },
    { st: 'watch', t: ['Since January 2026 foreign workers dealing with customers must speak basic Lithuanian; how checks are enforced is still unclear.',
      'Da gennaio 2026 i lavoratori stranieri a contatto con i clienti devono parlare un lituano di base; non è ancora chiaro come vengano fatti i controlli.'] },
    { st: 'pending', t: ['How long the extra restrictions on Russian and Belarusian citizens will last.',
      'Quanto dureranno le restrizioni aggiuntive per i cittadini russi e bielorussi.'] },
    { st: 'open', t: ['Banks charge new residents account-opening fees despite the right to a basic account.',
      'Le banche applicano ai nuovi residenti commissioni di apertura nonostante il diritto al conto di base.'] }
  ]
});

/* Sources: generated by tools/visas-sources.js from research/visas_immigration/lithuania/lithuania_sources.md.
 * Do not edit by hand: change the register, then run the tool. */
ATLAS.visaSources('LT', {
  "LT-SRC-11": ["Migracijos departamentas prie VRM: Certificato di soggiorno temporaneo per cittadini UE (Europos Sąjungos valstybės narės piliečio pažyma","https://migracija.lrv.lt/lt/paslaugos/es-pilieciams-ir-ju-seimos-nariams/","2026-10-05"],
  "LT-SRC-03": ["LR Vyriausybė / TAR: Lietuvos Respublikos Vyriausybės nutarimas Nr. 1458 (Dėl konkrečių valstybės rinkliavos dydžių sąrašo)","https://www.e-tar.lt/portal/lt/legalAct/TAR.B6DBB179E458","2026-10-05"],
  "LT-SRC-26": ["Švietimo mainų paramos fondas (SMPF): Study in Lithuania – Portale ufficiale per gli studenti internazionali: requisiti di ammissione, borse di studio e…","https://studyin.lt/about-lithuania/work-in-lithuania/","2026-10-05"],
  "LT-SRC-01": ["Teisės aktų registras (TAR) / Seimas: Lietuvos Respublikos įstatymas „Dėl užsieniečių teisinės padėties“ (UTPĮ, Nr. IX-2206 del 29/04/2004 con succ. mod. e…","https://www.e-tar.lt/portal/lt/legalAct/TAR.42837E5A79DD","2026-10-05"],
  "LT-SRC-02": ["Teisės aktų registras (TAR) / Seimas: Lietuvos Respublikos įstatymo „Dėl užsieniečių teisinės padėties“ pakeitimo įstatymas Nr. XV-945 (del 14/05/2026, TAR…","https://e-seimas.lrs.lt/portal/legalAct/lt/TAD/TAIS.232378","2026-10-05"],
  "LT-SRC-24": ["Direttiva (UE) 2016/801 e art. 46 UTPĮ: Notifica telematica di mobilità studenti e ricercatori intra-UE fino a 360…","https://eur-lex.europa.eu/eli/dir/2016/801/oj","2026-10-05"],
  "LT-SRC-04": ["LR Vyriausybė / TAR: Lietuvos Respublikos Vyriausybės nutarimas Nr. 700 (del 16/10/2025, TAR Nr. 2025-17211)","https://www.e-tar.lt/portal/lt/legalAct/TAR.700D20251721","2026-10-05"],
  "LT-SRC-08": ["LR Socialinės apsaugos ir darbo ministerija: Socialinės apsaugos ir darbo ministro įsakymas Nr. A1-22","https://www.e-tar.lt/portal/lt/legalAct/TAR.23469A3816B1","2026-10-05"],
  "LT-SRC-14": ["Migracijos departamentas prie VRM / VRM: Regolamento dei fornitori esterni di servizi (VFS Global): commissione di servizio 110,00 € e restrizione di…","https://migracija.lrv.lt/lt/naudinga-informacija/prasymu-teikimas-per-isorės-paslaugu-teikeja/","2026-10-05"],
  "LT-SRC-17": ["Teisės aktų registras (TAR) / Seimas: Lietuvos Respublikos užimtumo įstatymas (art. 10): Convenzione di tirocinio professionale volontario (Savanoriškos…","https://www.e-tar.lt/portal/lt/legalAct/TAR.147C873BD6E2","2026-10-05"],
  "LT-SRC-12": ["Migracijos departamentas prie VRM: Permesso di soggiorno temporaneo per ricerca lavoro o avvio impresa per laureati in Lituania (art. 40 c. 1 n. 4 UTPĮ):…","https://migracija.lrv.lt/lt/paslaugos/leidimai-gyventi/darbo-paieska-baigus-studijas/","2026-10-05"],
  "LT-SRC-10": ["Migracijos departamentas prie VRM: Scheda ufficiale Carta Blu UE (ES Mėlynoji kortelė","https://migracija.lrv.lt/lt/naudinga-informacija/es-melynoji-kortele/","2026-10-05"],
  "LT-SRC-09": ["Valstybės duomenų agentūra (OSP): Oficialiosios statistikos portalas (OSP)","https://osp.stat.gov.lt/statistiniu-rodikliu-analize?hash=4f69de73-10d6-4444-a90f","2026-10-05"],
  "LT-SRC-13": ["Migracijos departamentas prie VRM: Sistema delle quote per lavoratori stranieri (Kvota užsieniečiams","https://migracija.lrv.lt/lt/naujienos/isnaudota-2026-m-kvota-uzsienieciams/","2026-10-05"],
  "LT-SRC-18": ["Teisės aktų registras (TAR) / Seimas: Lietuvos Respublikos mokslo ir studijų įstatymas (art. 58 e succ.): Status del dottorando (doktorantas), borse di…","https://www.e-tar.lt/portal/lt/legalAct/TAR.0076BC2AEBC9","2026-10-05"],
  "LT-SRC-15": ["Valstybinė ligonių kasa (VLK) / Sodra: Lietuvos Respublikos sveikatos draudimo įstatymas (art. 6): Assicurazione sanitaria pubblica obbligatoria (PSD, 6,98%…","https://sodra.lt/lt/situacijos/imokos-ir-ismokos/privalomasis-sveikatos-draudimas","2026-10-05"],
  "LT-SRC-23": ["Lietuvos Respublikos užsienio reikalų ministerija: Programmi di mobilità giovanile e Working Holiday: Accordi bilaterali attivi con Giappone, Canada e Nuova Zelanda…","https://keliauk.urm.lt/lt/darbo-atostogu-programos","2026-10-05"],
  "LT-SRC-06": ["Teisės aktų registras (TAR) / Seimas: Lietuvos Respublikos konsulinio mokesčio įstatymas (Nr. I-509)","https://www.e-tar.lt/portal/lt/legalAct/TAR.9A00A3EC481B","2026-10-05"],
  "LT-SRC-07": ["Regolamento Delegato (UE) 2024/1415 della Commissione che modifica il Reg. (CE) n. 810/2009 (Codice Visti)","https://eur-lex.europa.eu/eli/reg_del/2024/1415/oj","2026-10-05"],
  "LT-SRC-16": ["Teisės aktų registras (TAR) / Seimas: Lietuvos Respublikos gyvenamosios vietos deklaravimo įstatymas e art. 26 UTPĮ: Requisito minimo di superficie utile…","https://www.e-tar.lt/portal/lt/legalAct/TAR.52A06E5D7D18","2026-10-05"],
  "LT-SRC-27": ["VĮ Registrų centras: Portale Registrų centras: Iscrizione contratti di locazione (Nekilnojamojo turto registras) e rilascio del consenso…","https://www.registrucentras.lt/gyvenamosios_vietos_deklaravimas/","2026-10-05"],
  "LT-SRC-20": ["Valstybinio socialinio draudimo fondas (Sodra): Valstybinio socialinio draudimo įstatymas: Aliquote contributive per lavoro subordinato (19,5% dipendente di cui 6,98%…","https://sodra.lt/lt/draudejai/imokos/tarifai","2026-10-05"],
  "LT-SRC-25": ["VšĮ „Investuok Lietuvoje“ & Lietuvos bankas: Fintech Overview 2025–2026 e Lithuania Business Services Report 2025: Statistiche su 248 società fintech (231 a…","https://investlithuania.com/fintech-overview-2026/","2026-10-05"]
});
