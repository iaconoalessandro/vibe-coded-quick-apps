/* Visas and permits: Bulgaria. From research/visas_immigration/bulgaria/
 * (guide, source register, open questions), council check of 5-6 Oct 2026.
 * Fees in lev converted to euro are left out: the 6 Oct review found the EU
 * certificate fee had been re-set after the euro, and the others are unread. */
ATLAS.addVisas({
  id: 'BG',
  folder: 'bulgaria',
  checked: '2026-10-06',
  review: '2027-03-31',

  free: {
    p: 'eu',
    t: [
      ['EU, EEA and Swiss citizens work on equal terms with Bulgarians, with no permit or visa.',
        'I cittadini UE, SEE e svizzeri lavorano alla pari dei bulgari, senza permesso né visto.', 'BG-SRC-05'],
      ['Staying over three months, register with the Migration Directorate of your area within three months, with your registered contract or enrolment and proof of housing; the certificate is issued the same day.',
        'Per un soggiorno oltre i tre mesi ci si registra entro tre mesi presso la Direzione migrazione della zona, con il contratto registrato o l’iscrizione e una prova d’alloggio; l’attestato si rilascia in giornata.', 'BG-SRC-05'],
      ['Bulgaria uses the euro since 1 January 2026.',
        'La Bulgaria usa l’euro dal 1° gennaio 2026.', 'BG-SRC-08']
    ]
  },

  routes: [
    { k: 'study', p: 'uk us other', v: 'open',
      name: ['Student visa (D) and residence permit', 'Visto D per studio e permesso di soggiorno'], law: 'ZChRB art. 24v',
      t: [
        ['The university sends your file to the Ministry of Education, which issues the certificate of admission; then the D visa, and a one-year permit renewed each year of the course.',
          'L’università invia la pratica al ministero dell’Istruzione, che rilascia il certificato di ammissione; poi il visto D, e un permesso di un anno rinnovato ogni anno del corso.', 'BG-SRC-16 BG-SRC-01'],
        ['Work 20 hours a week in term and full time in holidays, with no separate permit: the employer registers the job with the employment agency within seven working days.',
          'Si lavora 20 ore a settimana durante le lezioni e a tempo pieno nelle vacanze, senza permesso separato: il datore registra l’impiego presso l’agenzia per l’impiego entro sette giorni lavorativi.', 'BG-SRC-03'],
        ['A non-EU student with a permit from another EU country can study here up to 360 days with no Bulgarian visa or permit, on the university’s notification.',
          'Uno studente extra-UE con permesso di un altro paese UE può studiare qui fino a 360 giorni senza visto né permesso bulgaro, con la notifica dell’università.', 'BG-SRC-01 BG-SRC-29']
      ],
      f: [
        [['Funds', 'Mezzi'], ['€7,442.40 a year (12 times the minimum wage)', '7.442,40 € l’anno (12 volte il salario minimo)'], 'BG-SRC-09'],
        [['D visa', 'Visto D'], ['€100', '100 €'], 'BG-SRC-07'],
        [['Private health insurance', 'Assicurazione sanitaria privata'], ['cover of at least €30,000', 'copertura di almeno 30.000 €'], 'BG-SRC-01']
      ] },

    { k: 'intern', p: 'uk us other', v: 'sponsor',
      name: ['International trainee', 'Tirocinante internazionale'], law: 'ZTMTM; Labour Code art. 233b',
      t: [
        ['For graduates of the last two years or students abroad: an employment contract with a traineeship clause, a mentor with three years’ experience and a training programme, for 6 to 12 months, paid at least the minimum wage.',
          'Per chi si è laureato negli ultimi due anni o studia all’estero: un contratto di lavoro con clausola di tirocinio, un tutor con tre anni di esperienza e un programma formativo, da 6 a 12 mesi, pagato almeno il salario minimo.', 'BG-SRC-03 BG-SRC-15 BG-SRC-04'],
        ['Students enrolled in Bulgaria do the internship of their degree with no work authorisation.',
          'Gli studenti iscritti in Bulgaria svolgono il tirocinio del corso senza autorizzazione al lavoro.', 'BG-SRC-01']
      ],
      f: [[['Minimum wage', 'Salario minimo'], ['€620.20 a month', '620,20 € al mese'], 'BG-SRC-09']] },

    { k: 'search', p: 'uk us other', v: 'open',
      name: ['Nine months to look for work or start a business', 'Nove mesi per cercare lavoro o avviare un’impresa'], law: 'ZChRB art. 24v (8-10)',
      t: [
        ['After a Bulgarian degree or research project: nine months, not extendable. A job or company then converts it inside Bulgaria, with no new visa and no labour-market test.',
          'Dopo una laurea o un progetto di ricerca in Bulgaria: nove mesi, non prorogabili. Un lavoro o un’impresa lo convertono poi in Bulgaria, senza nuovo visto né test del mercato.', 'BG-SRC-01 BG-SRC-03']
      ],
      f: [[['Funds', 'Mezzi'], ['€5,581.80 (nine months of minimum wage)', '5.581,80 € (nove mesi di salario minimo)'], 'BG-SRC-09']],
      w: ['Register as a job-seeker at the employment agency within seven working days of graduating, and apply to the Migration Directorate at least 30 days before your student permit ends.',
        'Iscriviti come persona in cerca di lavoro all’agenzia per l’impiego entro sette giorni lavorativi dalla laurea, e fai domanda alla Direzione migrazione almeno 30 giorni prima della scadenza del permesso per studio.', 'BG-SRC-01'] },

    { k: 'work', p: 'uk us other', v: 'sponsor',
      name: ['EU Blue Card', 'Carta Blu UE'], law: 'ZChRB art. 33k',
      t: [['A contract of at least six months and a three-year degree, or for IT three years of experience in the last seven; no labour-market test. The card lasts two to five years; after 12 months you can change employer by notice, and family can join at once with the right to work.',
        'Un contratto di almeno sei mesi e una laurea triennale, o per l’informatica tre anni di esperienza negli ultimi sette; nessun test del mercato. La carta dura da due a cinque anni; dopo 12 mesi si cambia datore con una semplice notifica, e la famiglia arriva subito con diritto al lavoro.', 'BG-SRC-03 BG-SRC-01']],
      f: [
        [['Salary', 'Stipendio'], ['€2,166 gross a month', '2.166 € lordi al mese'], 'BG-SRC-10'],
        [['D visa', 'Visto D'], ['€100', '100 €'], 'BG-SRC-07']
      ] },

    { k: 'work', p: 'uk us other', v: 'limited',
      name: ['Single permit', 'Permesso unico'], law: 'ZChRB art. 24i',
      t: [['The employer applies while you are abroad, after advertising the job for 15 days with the employment agency, and non-EU staff may be at most 20% of the workforce (35% in small firms). The permit is tied to that employer and job.',
        'Fa domanda il datore mentre sei all’estero, dopo aver pubblicato il posto per 15 giorni presso l’agenzia per l’impiego, e il personale extra-UE non può superare il 20% dell’organico (35% nelle PMI). Il permesso è legato a quel datore e a quella mansione.', 'BG-SRC-01 BG-SRC-03']],
      f: [[['Minimum wage', 'Salario minimo'], ['€620.20 a month', '620,20 € al mese'], 'BG-SRC-09']] },

    { k: 'research', p: 'uk us other', v: 'sponsor',
      name: ['Researcher permit, and PhDs', 'Permesso per ricercatori e dottorati'], law: 'ZChRB art. 24b',
      t: [
        ['A hosting agreement with a research body registered with NACID; research and teaching with no work permit, and family reunion at once.',
          'Una convenzione di accoglienza con un ente di ricerca registrato presso NACID; ricerca e insegnamento senza permesso di lavoro, e ricongiungimento immediato.', 'BG-SRC-18 BG-SRC-03 BG-SRC-01'],
        ['Doctoral scholarships are free of income tax and social contributions.',
          'Le borse di dottorato sono esenti da imposte e contributi.', 'BG-SRC-22']
      ] },

    { k: 'whv', p: 'uk us other', v: 'closed',
      name: ['Working holiday', 'Vacanza-lavoro'], law: '—',
      t: [['Bulgaria has no working-holiday or youth-mobility agreement with any country; the only seasonal route is a permit for farm and tourism work of 90 days to 9 months.',
        'La Bulgaria non ha accordi di vacanza-lavoro o mobilità giovanile con nessun paese; l’unica via stagionale è un permesso per lavoro agricolo e turistico da 90 giorni a 9 mesi.', 'BG-SRC-13 BG-SRC-01']] },

    { k: 'short', p: 'uk us other', v: 'open',
      name: ['Short stay', 'Soggiorno breve'], law: 'Schengen; ZChRB art. 24',
      t: [['Bulgaria is fully in Schengen since 1 January 2025: days here count in the same 90 in any 180, with no work. A tourist or visa-free stay cannot be converted inside Bulgaria.',
        'La Bulgaria è pienamente in Schengen dal 1° gennaio 2025: i giorni qui contano negli stessi 90 ogni 180, senza lavoro. Un soggiorno turistico o senza visto non si converte in Bulgaria.', 'BG-SRC-26 BG-SRC-27 BG-SRC-01']],
      f: [[['Schengen visa', 'Visto Schengen'], ['€90', '90 €'], 'BG-SRC-25']] }
  ],

  arrival: [
    { k: 'before', p: 'eu', t: [
      ['Nothing to arrange in advance: you may stay up to 3 months freely, with no visa or work authorisation.',
        'Niente da preparare in anticipo: puoi restare fino a 3 mesi liberamente, senza visto né autorizzazione al lavoro.', 'BG-SRC-05']
    ] },
    { k: 'before', p: 'uk us other', t: [
      ['Apply for the D visa at the Bulgarian consulate where you live: €100.',
        'Chiedi il visto D al consolato bulgaro del luogo in cui vivi: 100 €.', 'BG-SRC-01 BG-SRC-07']
    ] },
    { k: 'address', p: 'eu', t: [
      ['Staying over 3 months, register within 3 months at the regional Migration Directorate, with ID, a work contract registered with the revenue agency (or your employer’s statement) and proof of housing. Students bring their enrolment certificate, European Health Insurance Card and a statement that they support themselves.',
        'Se resti oltre 3 mesi, registrati entro 3 mesi alla Direzione Migrazione territoriale, con documento d’identità, contratto di lavoro registrato all’agenzia delle entrate (o dichiarazione del datore) e prova dell’alloggio. Gli studenti portano il certificato d’iscrizione, la Tessera europea di assicurazione malattia e una dichiarazione di autosufficienza.', 'BG-SRC-05 BG-SRC-15']
    ] },
    { k: 'address', p: 'uk us other', t: [
      ['Register your address within 3 calendar days of entering. In private rented housing this needs the owner’s notarised declaration of accommodation and a copy of the title deed.',
        'Registra l’indirizzo entro 3 giorni di calendario dall’ingresso. In un alloggio privato in affitto servono la dichiarazione notarile del proprietario sull’alloggio e la copia dell’atto di proprietà.', 'BG-SRC-01 BG-SRC-02']
    ] },
    { k: 'card', p: 'eu', t: [
      ['The paper long-stay certificate is issued the same day, for €3.58 (7 BGN).',
        'L’attestato cartaceo di soggiorno prolungato viene rilasciato in giornata, per 3,58 € (7 BGN).', 'BG-SRC-05 BG-SRC-06']
    ] },
    { k: 'card', p: 'uk us other', t: [
      ['The biometric residence card costs €20.45 (40 BGN), on top of the fee for the permit itself.',
        'La carta di soggiorno biometrica costa 20,45 € (40 BGN), oltre alla tassa per il permesso stesso.', 'BG-SRC-06']
    ] },
    { k: 'number', p: 'eu uk us other', t: [
      ['The Interior Ministry assigns a 10-digit personal number for foreigners (LNCh) with your first long-stay residence document; the personal number EGN is only for Bulgarians and permanent or long-term residents.',
        'Il Ministero dell’Interno assegna un numero personale per stranieri a 10 cifre (LNCh) con il primo documento di soggiorno prolungato; il numero personale EGN è solo per i bulgari e i residenti permanenti o di lungo periodo.', 'BG-SRC-01 BG-SRC-21'],
      ['Before you have it, the National Revenue Agency can issue a service number for tax, banking or company paperwork.',
        'Prima di averlo, l’Agenzia nazionale delle entrate può rilasciare un numero di servizio per pratiche fiscali, bancarie o societarie.', 'BG-SRC-19']
    ] },
    { k: 'health', p: 'eu uk us other', t: [
      ['Employees are enrolled in the public health fund (NHIF) through their pay: 8% of gross, 4.8% paid by the employer and 3.2% by you.',
        'I lavoratori dipendenti sono iscritti alla cassa sanitaria pubblica (NHIF) tramite lo stipendio: l’8% del lordo, il 4,8% a carico del datore e il 3,2% tuo.', 'BG-SRC-20']
    ] },
    { k: 'health', p: 'eu', t: [
      ['Students and others not working are covered by their European Health Insurance Card, which they show when registering.',
        'Studenti e chi non lavora sono coperti dalla Tessera europea di assicurazione malattia, da presentare alla registrazione.', 'BG-SRC-05']
    ] },
    { k: 'health', p: 'uk us other', t: [
      ['Students, interns, funded researchers and family members need private health insurance from an authorised insurer, covering at least €30,000 (60,000 BGN) for emergency care and repatriation.',
        'Studenti, tirocinanti, ricercatori con borsa e familiari devono avere un’assicurazione sanitaria privata con una compagnia autorizzata, con copertura di almeno 30.000 € (60.000 BGN) per cure d’urgenza e rimpatrio.', 'BG-SRC-01']
    ] },
    { k: 'bank', p: 'eu uk us other', t: [
      ['Legal residents have a right to a basic account, but banks (UniCredit Bulbank, DSK, UBB, Fibank) in practice want you in person with your personal number card, and may charge non-residents for identity checks.',
        'I residenti legali hanno diritto a un conto di base, ma le banche (UniCredit Bulbank, DSK, UBB, Fibank) nella pratica ti vogliono di persona con la tessera del numero personale, e possono far pagare ai non residenti le verifiche d’identità.', 'BG-SRC-23 BG-SRC-11']
    ] },
    { k: 'keep', p: 'eu', none: true },
    { k: 'keep', p: 'uk us other', t: [
      ['Applying for or renewing a permit gets you a receipt with a filing number: it keeps you legal in Bulgaria and, on a renewal, lets you keep working for the same employer, but it is valid only inside Bulgaria.',
        'La domanda o il rinnovo del permesso ti danno una ricevuta con numero di protocollo: ti mantiene in regola in Bulgaria e, in caso di rinnovo, ti consente di continuare a lavorare per lo stesso datore, ma vale solo in Bulgaria.', 'BG-SRC-02 BG-SRC-03'],
      ['If your D visa has expired and the card is not ready, do not travel to or through other Schengen countries; only a direct flight home is safe.',
        'Se il visto D è scaduto e la carta non è pronta, non viaggiare verso o attraverso altri paesi Schengen; è sicuro solo un volo diretto verso casa.', 'BG-SRC-24']
    ] }
  ],

  traps: [
    { p: 'uk us other', t: ['Apply for the permit at least 14 days before your D visa expires; later, the application is rejected and you are unlawfully present.',
      'Chiedi il permesso almeno 14 giorni prima della scadenza del visto D; dopo, la domanda viene respinta e il soggiorno diventa irregolare.', 'BG-SRC-02'] },
    { p: 'uk us other', t: ['Register your address within three days of arriving; in a private rental you need the owner’s notarised declaration and title deed.',
      'Registra l’indirizzo entro tre giorni dall’arrivo; in un affitto privato servono la dichiarazione notarile del proprietario e l’atto di proprietà.', 'BG-SRC-01 BG-SRC-02'] },
    { p: 'uk us other', t: ['Foreign criminal records expire six months after issue and must be translated by translators authorised by the Bulgarian foreign ministry.',
      'I casellari esteri scadono sei mesi dopo il rilascio e devono essere tradotti da traduttori autorizzati dal ministero degli Esteri bulgaro.', 'BG-SRC-13'] },
    { p: 'uk us other', t: ['The application receipt is valid only inside Bulgaria: with an expired D visa, only a direct flight home is possible.',
      'La ricevuta della domanda vale solo in Bulgaria: con il visto D scaduto è possibile solo un volo diretto verso casa.', 'BG-SRC-24'] }
  ],

  open: [
    { st: 'open', t: ['Since the euro, state fees are being re-set: the EU registration certificate is reported at €7 (paper) or €18 (card), and other fees still need re-reading.',
      'Con l’euro le tasse statali vengono riviste: l’attestato di registrazione UE risulta a 7 € (cartaceo) o 18 € (card), e le altre tasse vanno ancora rilette.'] },
    { st: 'pending', t: ['A draft would raise the D visa fee from €100 to €120.',
      'Una bozza porterebbe il visto D da 100 a 120 €.'] },
    { st: 'watch', t: ['Whether the 20% foreign-staff cap applies to Blue Card hires in start-ups is not settled.',
      'Non è chiaro se il tetto del 20% di personale straniero si applichi alle assunzioni con Carta Blu nelle start-up.'] },
    { st: 'open', t: ['Banks still make it hard for non-residents to open an account.',
      'Le banche rendono ancora difficile ai non residenti aprire un conto.'] }
  ]
});

/* Sources: generated by tools/visas-sources.js from research/visas_immigration/bulgaria/bulgaria_sources.md.
 * Do not edit by hand: change the register, then run the tool. */
ATLAS.visaSources('BG', {
  "BG-SRC-05": ["Народно събрание / Lex.bg: Закон за влизането, пребиваването и напускането на Република България на гражданите на ЕС и членовете на техните…","https://lex.bg/laws/ldoc/2135532585","2026-10-05"],
  "BG-SRC-08": ["Народно събрание / Държавен вестник бр. 70/2024 e бр.…: Закон за въвеждане на еврото в Република България (ЗВЕРБ)","https://dv.parliament.bg","2026-10-05"],
  "BG-SRC-16": ["Народно събрание / Lex.bg: Закон за висшето образование (ЗВО)","https://lex.bg/laws/ldoc/2133644289","2026-10-05"],
  "BG-SRC-01": ["Народно събрание / Държавен вестник / Lex.bg: Закон за чужденците в Република България (ЗЧРБ)","https://lex.bg/laws/ldoc/2134455296","2026-10-05"],
  "BG-SRC-03": ["Народно събрание / Lex.bg: Закон за трудовата миграция и трудовата мобилност (ЗТМТМ)","https://lex.bg/laws/ldoc/2136802842","2026-10-05"],
  "BG-SRC-29": ["Директива (ЕС) 2016/801 на Европейския парламент и на Съвета","https://eur-lex.europa.eu/legal-content/IT/TXT/?uri=CELEX:32016L0801","2026-10-05"],
  "BG-SRC-09": ["Министерски съвет / Държавен вестник: Постановление № 243 на Министерския съвет от 13 ноември 2025 г. за определяне размера на минималната работна заплата…","https://dv.parliament.bg","2026-10-05"],
  "BG-SRC-07": ["Министерски съвет / Lex.bg: Тарифа № 3 за таксите, които се събират за консулско обслужване в системата на МВнР по Закона за държавните такси","https://lex.bg/laws/ldoc/2135489816","2026-10-05"],
  "BG-SRC-15": ["Народно събрание / Lex.bg: Кодекс на труда (КТ)","https://lex.bg/laws/ldoc/1594373121","2026-10-05"],
  "BG-SRC-04": ["Министерски съвет / Lex.bg: Правилник за прилагане на ЗТМТМ (ППЗТМТМ)","https://lex.bg/laws/ldoc/2136916568","2026-10-05"],
  "BG-SRC-10": ["НСИ (NSI): Национален статистически институт (НСИ) — Средна брутна работна заплата","https://www.nsi.bg","2026-10-05"],
  "BG-SRC-18": ["НАЦИД (NACID): Национален център за информация и документация (НАЦИД - NACID)","https://nacid.bg","2026-10-05"],
  "BG-SRC-22": ["Народно събрание / Lex.bg: Закон за данъците върху доходите на физическите лица (ЗДДФЛ)","https://lex.bg/laws/ldoc/2135538631","2026-10-05"],
  "BG-SRC-13": ["МВнР (Ministry of Foreign Affairs): Министерство на външните работи (МВнР) — Визи за България","https://www.mfa.bg/bg/uslugi-patuvane/konsulski-uslugi/viza-za-balgariya","2026-10-05"],
  "BG-SRC-26": ["Решение (ЕС) 2024/210 на Съвета от 30 декември 2023 г.","https://eur-lex.europa.eu/legal-content/IT/TXT/?uri=CELEX:32024D0210","2026-10-05"],
  "BG-SRC-27": ["Решение (ЕС) 2024/3212 на Съвета от 12 декември 2024 г.","https://eur-lex.europa.eu","2026-10-05"],
  "BG-SRC-25": ["Commissione Europea / GUUE L 2024/1415: Регламент (ЕС) 2024/1415 на Комисията от 14 март 2024 г.","https://eur-lex.europa.eu/legal-content/IT/TXT/?uri=OJ:L_202401415","2026-10-05"],
  "BG-SRC-02": ["Министерски съвет / Lex.bg: Правилник за прилагане на Закона за чужденците в Република България (ППЗЧРБ)","https://lex.bg/laws/ldoc/2135738870","2026-10-05"],
  "BG-SRC-06": ["Министерски съвет / Lex.bg: Тарифа № 4 за таксите, които се събират в системата на МВР по Закона за държавните такси","https://lex.bg/laws/ldoc/-549527551","2026-10-05"],
  "BG-SRC-21": ["Народно събрание / Lex.bg: Закон за гражданската регистрация (ЗГР)","https://lex.bg/laws/ldoc/2134673409","2026-10-05"],
  "BG-SRC-19": ["НАП (National Revenue Agency): Национална агенция за приходите (НАП - NRA)","https://nra.bg","2026-10-05"],
  "BG-SRC-20": ["Национална здравноосигурителна каса (НЗОК - NHIF)","https://www.nhif.bg","2026-10-05"],
  "BG-SRC-23": ["Народно събрание / Lex.bg: Закон за платежните услуги и платежните системи (ЗПУПС)","https://lex.bg/laws/ldoc/2137181635","2026-10-05"],
  "BG-SRC-11": ["Българска народна банка (БНБ) — Парична политика, валутен курс и еврозона","https://www.bnb.bg","2026-10-05"],
  "BG-SRC-24": ["Регламент (ЕС) 2016/399 (Кодекс на шенгенските граници)","https://eur-lex.europa.eu/legal-content/IT/TXT/?uri=CELEX:32016R0399","2026-10-05"]
});
