/* Visas and permits: Germany. From research/visas_immigration/germany/
 * (guide, source register, open questions), council check of 5 Oct 2026. */
ATLAS.addVisas({
  id: 'DE',
  folder: 'germany',
  checked: '2026-10-05',
  review: '2027-03-31',

  free: {
    p: 'eu',
    t: [
      ['EU, EEA and Swiss citizens need no visa, residence permit or work permit to study, work or look for work in Germany.',
        'I cittadini UE, SEE e svizzeri non hanno bisogno di visto, permesso di soggiorno o permesso di lavoro per studiare, lavorare o cercare lavoro in Germania.', 'DE-SRC-09'],
      ['The one formality is registering your address (Anmeldung) at the local registration office within 14 days of moving in; it is free, and your tax ID follows by post.',
        'L’unico adempimento è registrare l’indirizzo (Anmeldung) all’ufficio anagrafe entro 14 giorni dal trasloco; è gratuito, e il codice fiscale arriva poi per posta.', 'DE-SRC-04 DE-SRC-30'],
      ['A student who works up to 20 hours a week keeps student status for health insurance (Werkstudent).',
        'Uno studente che lavora fino a 20 ore a settimana mantiene lo status di studente per l’assicurazione sanitaria (Werkstudent).', 'DE-SRC-11']
    ]
  },

  routes: [
    { k: 'study', p: 'uk us other', v: 'open',
      name: ['Student residence permit', 'Permesso di soggiorno per studio'], law: '§ 16b AufenthG',
      t: [
        ['Apply for a national (D) visa at a German mission before you travel, then turn it into a residence permit at the local foreigners’ office. UK and US citizens may instead enter without a visa and apply in Germany within 90 days.',
          'Si chiede un visto nazionale (D) a una rappresentanza tedesca prima di partire, poi lo si converte in permesso di soggiorno all’ufficio stranieri locale. I cittadini britannici e statunitensi possono invece entrare senza visto e fare domanda in Germania entro 90 giorni.', 'DE-SRC-01 DE-SRC-02'],
        ['The permit is issued for at least one year, normally two. You may work 140 full or 280 half days a year; jobs as a student or research assistant at the university do not count. Freelance or self-employed work is not allowed.',
          'Il permesso dura almeno un anno, di regola due. Si può lavorare 140 giorni interi o 280 mezze giornate all’anno; i lavori da assistente studentesco o di ricerca all’università non contano. Il lavoro autonomo o freelance non è consentito.', 'DE-SRC-01'],
        ['Degrees from China, India or Vietnam need an APS certificate before the visa. A non-EU student already holding a student permit from another EU country can study here up to 360 days without a German visa, once the university notifies the migration office (BAMF).',
          'I titoli di Cina, India o Vietnam richiedono il certificato APS prima del visto. Uno studente extra-UE con permesso per studio di un altro paese UE può studiare qui fino a 360 giorni senza visto tedesco, dopo la notifica dell’università all’ufficio migrazione (BAMF).', 'DE-SRC-28 DE-SRC-19']
      ],
      f: [
        [['Proof of funds (blocked account)', 'Mezzi di sussistenza (conto bloccato)'], ['€992 a month, €11,904 a year', '992 € al mese, 11.904 € l’anno'], 'DE-SRC-13 DE-SRC-24'],
        [['Fees', 'Costi'], ['€75 visa, €100 permit', '75 € il visto, 100 € il permesso'], 'DE-SRC-02'],
        [['Public student health insurance, 2026', 'Assicurazione sanitaria pubblica per studenti, 2026'], ['€141.16 to €146.29 a month', 'da 141,16 € a 146,29 € al mese'], 'DE-SRC-29']
      ],
      w: ['Do not sign the exemption from public health insurance to buy a cheap private policy: it cannot be undone for the whole degree, and foreigners’ offices often refuse those policies at renewal.',
        'Non firmare l’esonero dall’assicurazione pubblica per una polizza privata economica: è irrevocabile per tutto il corso di studi, e gli uffici stranieri spesso rifiutano quelle polizze al rinnovo.', 'DE-SRC-11 DE-SRC-12'] },

    { k: 'intern', p: 'eu', v: 'free',
      name: ['Internships: the pay rules', 'Tirocini: le regole sulla paga'], law: '§ 22 MiLoG',
      t: [
        ['An internship your degree requires need not pay the minimum wage; a voluntary one during your studies need not either, if it lasts three months or less.',
          'Un tirocinio richiesto dal corso di laurea non deve pagare il salario minimo; nemmeno uno volontario durante gli studi, se dura al massimo tre mesi.', 'DE-SRC-05'],
        ['After graduating, every internship must pay at least the minimum wage from the first day.',
          'Dopo la laurea, ogni tirocinio deve pagare almeno il salario minimo dal primo giorno.', 'DE-SRC-05 DE-SRC-06']
      ],
      f: [[['Minimum wage', 'Salario minimo'], ['€13.90 an hour in 2026; €14.60 from 2027', '13,90 € l’ora nel 2026; 14,60 € dal 2027'], 'DE-SRC-06']],
      w: ['A voluntary internship that runs even one day past three months owes the minimum wage for the whole period, back to day one.',
        'Un tirocinio volontario che supera i tre mesi anche di un solo giorno deve il salario minimo per tutto il periodo, dal primo giorno.', 'DE-SRC-05'] },

    { k: 'intern', p: 'uk us other', v: 'sponsor',
      name: ['Internship with approval', 'Tirocinio con autorizzazione'], law: '§ 15 BeschV',
      t: [
        ['Students enrolled in Germany may do an internship their degree requires without approval from the Federal Employment Agency; a voluntary one counts against the 140-day allowance.',
          'Gli studenti iscritti in Germania possono svolgere un tirocinio richiesto dal corso senza autorizzazione dell’Agenzia federale per il lavoro; uno volontario si conta nel monte di 140 giorni.', 'DE-SRC-03 DE-SRC-01'],
        ['Any other internship needs the agency’s approval, requested with the host company, and the pay rules above apply as they do to everyone.',
          'Ogni altro tirocinio richiede l’autorizzazione dell’Agenzia, chiesta insieme all’azienda ospitante, e valgono le stesse regole sulla paga di chiunque.', 'DE-SRC-03 DE-SRC-05']
      ],
      f: [[['Minimum wage after graduating', 'Salario minimo dopo la laurea'], ['€13.90 an hour in 2026', '13,90 € l’ora nel 2026'], 'DE-SRC-06']] },

    { k: 'search', p: 'uk us other', v: 'open',
      name: ['Job-search permit for German graduates', 'Permesso di ricerca lavoro per laureati in Germania'], law: '§ 20 AufenthG',
      t: [
        ['After a degree from a German university you get up to 18 months, counted from your final result, to find a job; it cannot be extended.',
          'Dopo una laurea in un’università tedesca hai fino a 18 mesi, dal risultato finale, per trovare lavoro; non è prorogabile.', 'DE-SRC-01'],
        ['During the search you may take any work, employed or self-employed. You need the university’s completion certificate, funds and continuous health insurance.',
          'Durante la ricerca puoi svolgere qualsiasi lavoro, dipendente o autonomo. Servono il certificato di fine studi dell’ateneo, i mezzi di sussistenza e una copertura sanitaria continua.', 'DE-SRC-01 DE-SRC-24'],
        ['Once in skilled work, a German graduate can settle after 24 months of work and pension contributions with B1 German, instead of 36.',
          'Una volta in un lavoro qualificato, chi si è laureato in Germania può ottenere il soggiorno permanente dopo 24 mesi di lavoro e contributi con tedesco B1, invece di 36.', 'DE-SRC-01']
      ],
      f: [
        [['Length', 'Durata'], ['up to 18 months', 'fino a 18 mesi'], 'DE-SRC-01'],
        [['Funds', 'Mezzi'], ['€992 to €1,091 a month', 'da 992 € a 1.091 € al mese'], 'DE-SRC-24']
      ] },

    { k: 'search', p: 'uk us other', v: 'limited',
      name: ['Opportunity Card, with a foreign degree', 'Carta delle opportunità, con un titolo estero'], law: '§ 20a AufenthG (Chancenkarte)',
      t: [
        ['Up to a year to look for skilled work. A recognised skilled worker gets it directly; anyone else needs a degree or two-year vocational qualification recognised in their own country, basic German (A1) or B2 English, and at least 6 points for qualifications, experience, age, languages and earlier stays.',
          'Fino a un anno per cercare un lavoro qualificato. Chi è già riconosciuto come lavoratore qualificato la ottiene direttamente; gli altri devono avere una laurea o una qualifica professionale biennale riconosciuta nel proprio paese, tedesco di base (A1) o inglese B2, e almeno 6 punti per titoli, esperienza, età, lingue e soggiorni precedenti.', 'DE-SRC-01 DE-SRC-21'],
        ['You may work up to 20 hours a week and do trial work of up to two weeks per employer.',
          'Si può lavorare fino a 20 ore a settimana e fare prove di lavoro fino a due settimane per datore di lavoro.', 'DE-SRC-01 DE-SRC-21']
      ],
      f: [
        [['Proof of funds', 'Mezzi di sussistenza'], ['€1,091 a month, €13,092 a year', '1.091 € al mese, 13.092 € l’anno'], 'DE-SRC-21 DE-SRC-24'],
        [['Points needed', 'Punti richiesti'], ['6', '6'], 'DE-SRC-21']
      ],
      w: ['A university listed as H+ in the anabin database is not enough: your specific degree must be listed as equivalent too; if not, a ZAB statement costs €208 and takes two to three months.',
        'Un’università con status H+ nel database anabin non basta: anche il tuo corso deve risultare equivalente; altrimenti la valutazione ZAB costa 208 € e richiede da due a tre mesi.', 'DE-SRC-26 DE-SRC-27'] },

    { k: 'work', p: 'uk us other', v: 'sponsor',
      name: ['EU Blue Card', 'Carta Blu UE'], law: '§ 18g AufenthG',
      t: [
        ['Needs a job offer or contract of at least six months, a recognised degree (or three years of IT experience in the last seven) and a salary above the threshold. At the standard threshold the Federal Employment Agency does not check the job.',
          'Servono un’offerta o un contratto di almeno sei mesi, una laurea riconosciuta (o tre anni di esperienza informatica negli ultimi sette) e uno stipendio sopra la soglia. Alla soglia ordinaria l’Agenzia federale per il lavoro non controlla il posto.', 'DE-SRC-01 DE-SRC-18'],
        ['The lower threshold applies to shortage occupations (engineers, IT specialists, scientists, doctors and others), to graduates of the last three years and to IT specialists without a degree.',
          'La soglia ridotta vale per le professioni carenti (ingegneri, informatici, scienziati, medici e altre), per chi si è laureato negli ultimi tre anni e per gli informatici senza laurea.', 'DE-SRC-01 DE-SRC-22'],
        ['Permanent residence after 27 months, or 21 with B1 German; a spouse joins without having to show German first.',
          'Soggiorno permanente dopo 27 mesi, o 21 con tedesco B1; il coniuge può raggiungerti senza dover prima dimostrare il tedesco.', 'DE-SRC-01']
      ],
      f: [
        [['Salary, standard', 'Stipendio, soglia ordinaria'], ['€50,700 a year (€4,225 a month)', '50.700 € l’anno (4.225 € al mese)'], 'DE-SRC-18 DE-SRC-22'],
        [['Salary, lower threshold', 'Stipendio, soglia ridotta'], ['€45,934.20 a year', '45.934,20 € l’anno'], 'DE-SRC-18 DE-SRC-22'],
        [['Fees', 'Costi'], ['€75 visa, €100 permit', '75 € il visto, 100 € il permesso'], 'DE-SRC-02']
      ] },

    { k: 'work', p: 'uk us other', v: 'sponsor',
      name: ['Skilled worker permit', 'Permesso per lavoratori qualificati'], law: '§§ 18a, 18b AufenthG',
      t: [
        ['For a job that needs your qualification, below the Blue Card salary: a recognised degree or vocational qualification, and approval of the working conditions by the Federal Employment Agency.',
          'Per un lavoro che richiede la tua qualifica, sotto lo stipendio della Carta Blu: laurea o qualifica professionale riconosciuta e approvazione delle condizioni di lavoro da parte dell’Agenzia federale per il lavoro.', 'DE-SRC-01 DE-SRC-03'],
        ['An employer can buy the fast-track procedure: the consulate must then give an appointment within three weeks and decide within three weeks of the application.',
          'Il datore di lavoro può attivare la procedura accelerata: il consolato deve allora fissare l’appuntamento entro tre settimane e decidere entro tre settimane dalla domanda.', 'DE-SRC-02 DE-SRC-03']
      ],
      f: [
        [['Fast-track fee (employer)', 'Costo procedura accelerata (datore)'], ['€411', '411 €'], 'DE-SRC-02'],
        [['Permanent residence', 'Soggiorno permanente'], ['after 3 years, with B1 German', 'dopo 3 anni, con tedesco B1'], 'DE-SRC-01']
      ],
      w: ['With a job offer in hand, apply for the work visa from home rather than entering visa-free: a visa-free entry gives no right to work while you wait months for an appointment, and staying past 90 days without a receipt is a crime.',
        'Con un’offerta di lavoro in mano, chiedi il visto di lavoro dal tuo paese invece di entrare senza visto: l’ingresso senza visto non dà diritto a lavorare mentre aspetti mesi per un appuntamento, e restare oltre 90 giorni senza ricevuta è reato.', 'DE-SRC-01 DE-SRC-02'] },

    { k: 'research', p: 'uk us other', v: 'sponsor',
      name: ['Researcher permit and PhD', 'Permesso per ricercatori e dottorato'], law: '§ 18d AufenthG',
      t: [
        ['Needs a hosting agreement with a research institution or university approved by the migration office (BAMF); no labour-market check applies, and the host covers living costs.',
          'Serve una convenzione di accoglienza con un ente di ricerca o un’università accreditati presso l’ufficio migrazione (BAMF); non c’è verifica del mercato del lavoro, e l’ente copre i costi di sussistenza.', 'DE-SRC-01 DE-SRC-19'],
        ['A PhD on an employment contract (TV-L E13) pays tax and pension contributions, which count towards permanent residence; full time above the threshold, it can be a Blue Card.',
          'Un dottorato con contratto di lavoro (TV-L E13) paga imposte e contributi, che contano per il soggiorno permanente; a tempo pieno sopra la soglia può essere una Carta Blu.', 'DE-SRC-01 DE-SRC-18'],
        ['A PhD on a scholarship is free of income tax but pays no pension contributions, so those months do not count towards early permanent residence.',
          'Un dottorato con borsa è esente da imposte ma non versa contributi, quindi quei mesi non contano per il soggiorno permanente anticipato.', 'DE-SRC-01']
      ] },

    { k: 'whv', p: 'uk us', v: 'closed',
      name: ['Working holiday', 'Vacanza-lavoro'], law: 'BeschV',
      t: [['Germany has no working-holiday agreement with the UK or the US.',
        'La Germania non ha accordi di vacanza-lavoro con il Regno Unito o gli Stati Uniti.', 'DE-SRC-03']] },

    { k: 'whv', p: 'other', v: 'limited',
      name: ['Working holiday', 'Vacanza-lavoro'], law: 'BeschV',
      t: [['Only for citizens of Australia, New Zealand, Japan, South Korea, Taiwan, Hong Kong, Israel, Chile, Uruguay, Argentina and Canada, aged 18 to 30 (35 for Canadians); once in a lifetime, for up to 12 months, with work only to fund the stay.',
        'Solo per cittadini di Australia, Nuova Zelanda, Giappone, Corea del Sud, Taiwan, Hong Kong, Israele, Cile, Uruguay, Argentina e Canada, dai 18 ai 30 anni (35 per i canadesi); una volta nella vita, fino a 12 mesi, con lavoro solo per finanziare il soggiorno.', 'DE-SRC-03']],
      f: [[['Visa fee', 'Costo del visto'], ['€75', '75 €'], 'DE-SRC-02']] },

    { k: 'short', p: 'uk us other', v: 'open',
      name: ['Short stay', 'Soggiorno breve'], law: 'Schengen; § 41 AufenthV',
      t: [
        ['UK and US citizens visit without a visa for up to 90 days in any 180; other nationalities may need a Schengen visa. Business meetings and trade fairs are allowed, taking up a job is not.',
          'I cittadini britannici e statunitensi entrano senza visto fino a 90 giorni ogni 180; altre nazionalità possono aver bisogno di un visto Schengen. Riunioni d’affari e fiere sono consentite, un impiego no.', 'DE-SRC-03 DE-SRC-17'],
        ['Only some nationalities (UK, US, Canada, Australia, Israel, Japan, South Korea, New Zealand) may apply for a long stay from inside Germany within those 90 days; everyone else must apply from abroad.',
          'Solo alcune nazionalità (Regno Unito, USA, Canada, Australia, Israele, Giappone, Corea del Sud, Nuova Zelanda) possono chiedere un soggiorno lungo dall’interno della Germania entro quei 90 giorni; tutti gli altri devono farlo dall’estero.', 'DE-SRC-02']
      ],
      f: [[['Schengen visa', 'Visto Schengen'], ['€90', '90 €'], 'DE-SRC-17']] },

    { k: 'stay', p: 'uk us other', v: 'open',
      name: ['Settlement and citizenship', 'Soggiorno permanente e cittadinanza'], law: '§ 18c AufenthG; § 10 StAG',
      t: [
        ['Permanent residence comes after 21 to 36 months of skilled work, depending on the permit and your German; citizenship after five years of residence with B1 German, keeping your other nationality.',
          'Il soggiorno permanente arriva dopo 21-36 mesi di lavoro qualificato, a seconda del permesso e del tedesco; la cittadinanza dopo cinque anni di residenza con tedesco B1, mantenendo l’altra nazionalità.', 'DE-SRC-01 DE-SRC-16']
      ],
      f: [[['Settlement permit fee', 'Costo del permesso permanente'], ['€113', '113 €'], 'DE-SRC-02']] }
  ],

  arrival: [
    { k: 'before', p: 'eu uk us other', t: [
      ['Line up a flat or temporary housing whose landlord will sign the landlord’s confirmation (Wohnungsgeberbestätigung): without it you cannot register, and registering at an address where you do not live can be fined up to €50,000.',
        'Trova un appartamento o un alloggio temporaneo il cui proprietario firmi la conferma del locatore (Wohnungsgeberbestätigung): senza non puoi registrarti, e registrarti a un indirizzo dove non vivi può costare multe fino a 50.000 €.', 'DE-SRC-04']
    ] },
    { k: 'before', p: 'uk us other', t: [
      ['Have certificates translated by a sworn translator registered in Germany (justiz-dolmetscher.de): German offices often refuse translations made abroad.',
        'Fai tradurre i certificati da un traduttore giurato registrato in Germania (justiz-dolmetscher.de): gli uffici tedeschi rifiutano spesso le traduzioni fatte all’estero.', 'DE-SRC-31']
    ] },
    { k: 'before', p: 'uk us', t: [
      ['With a job offer in hand, get the national (D) visa at a German mission before you fly (€75): it lets you work from the day you arrive, while a visa-free entry does not.',
        'Con un’offerta di lavoro in mano, prendi il visto nazionale (D) presso una rappresentanza tedesca prima di partire (75 €): ti permette di lavorare dal giorno dell’arrivo, l’ingresso senza visto no.', 'DE-SRC-01 DE-SRC-02']
    ] },
    { k: 'before', p: 'other', t: [
      ['Apply for the national (D) visa at a German mission before you travel; it costs €75.',
        'Chiedi il visto nazionale (D) presso una rappresentanza tedesca prima di partire; costa 75 €.', 'DE-SRC-02']
    ] },
    { k: 'address', p: 'eu uk us other', t: [
      ['Register at the local registration office (Anmeldung) within 14 days of moving in, with the landlord’s confirmation. It is free, and you leave with the registration certificate (Meldebescheinigung).',
        'Registrati all’ufficio anagrafe locale (Anmeldung) entro 14 giorni dal trasloco, con la conferma del locatore. È gratuito, ed esci con il certificato di registrazione (Meldebescheinigung).', 'DE-SRC-04']
    ] },
    { k: 'card', p: 'eu', t: [
      ['None: EU, EEA and Swiss citizens get no residence permit or card, and the registration certificate is your proof of address.',
        'Nessuno: i cittadini UE, SEE e svizzeri non ricevono permesso né tessera di soggiorno, e il certificato di registrazione è la prova dell’indirizzo.', 'DE-SRC-09 DE-SRC-04']
    ] },
    { k: 'card', p: 'uk us other', t: [
      ['Book the foreigners’ office (Ausländerbehörde) to turn your visa into a residence permit card (eAT): €100, plus €35 if you want it produced fast.',
        'Prenota l’ufficio stranieri (Ausländerbehörde) per convertire il visto nella tessera del permesso di soggiorno (eAT): 100 €, più 35 € se la vuoi in tempi rapidi.', 'DE-SRC-02']
    ] },
    { k: 'card', p: 'uk us', t: [
      ['If you entered without a visa, apply within 90 days of arriving; appointments can take three to six months, and you may not work until the permit is granted.',
        'Se sei entrato senza visto, fai domanda entro 90 giorni dall’arrivo; gli appuntamenti possono richiedere da tre a sei mesi, e non puoi lavorare finché il permesso non è rilasciato.', 'DE-SRC-01 DE-SRC-02']
    ] },
    { k: 'number', p: 'eu uk us other', t: [
      ['The Federal Central Tax Office posts your tax ID (Steuer-ID) 2 to 4 weeks after you register; your surname must be on the letterbox.',
        'L’Ufficio federale centrale delle imposte spedisce per posta il tuo codice fiscale (Steuer-ID) da 2 a 4 settimane dopo la registrazione; il tuo cognome deve essere sulla cassetta delle lettere.', 'DE-SRC-30'],
      ['If it has not come by your first payslip, ask the local tax office (Finanzamt) for a payroll certificate (Bescheinigung für den Lohnsteuerabzug), or your employer must withhold tax at the punitive class VI.',
        'Se non è arrivato entro la prima busta paga, chiedi all’ufficio delle imposte locale (Finanzamt) un certificato per la ritenuta (Bescheinigung für den Lohnsteuerabzug), altrimenti il datore deve applicare la classe fiscale punitiva VI.', 'DE-SRC-30 DE-SRC-04']
    ] },
    { k: 'health', p: 'eu uk us other', t: [
      ['Join a public health insurer (Krankenkasse) such as TK; for students it reports your cover to the university electronically, and in 2026 student cover costs €141.16 to €146.29 a month.',
        'Iscriviti a una cassa malattia pubblica (Krankenkasse) come TK; per gli studenti comunica la copertura all’università per via telematica, e nel 2026 la copertura per studenti costa da 141,16 € a 146,29 € al mese.', 'DE-SRC-29'],
      ['Students should not sign the exemption from public insurance for a cheap private policy: it cannot be undone for the whole degree.',
        'Gli studenti non dovrebbero firmare l’esonero dall’assicurazione pubblica per una polizza privata economica: è irrevocabile per tutto il corso di studi.', 'DE-SRC-11']
    ] },
    { k: 'bank', p: 'eu uk us other', t: [
      ['Anyone lawfully resident in the EU has a right to a basic account (Basiskonto), which a bank must open within 10 business days; high-street banks usually want the registration certificate, so many people start with an online bank that issues a German IBAN at once.',
        'Chiunque risieda legalmente nell’UE ha diritto a un conto di base (Basiskonto), che la banca deve aprire entro 10 giorni lavorativi; le banche tradizionali chiedono di solito il certificato di registrazione, quindi molti iniziano con una banca online che rilascia subito un IBAN tedesco.', 'DE-SRC-10']
    ] },
    { k: 'bank', p: 'uk us other', t: [
      ['Students: to release the monthly payments from a blocked account (Sperrkonto), upload your visa or entry stamp, your registration certificate and the IBAN of a current account in your name to the provider.',
        'Studenti: per sbloccare le rate mensili del conto bloccato (Sperrkonto), carica sul portale del fornitore il visto o il timbro d’ingresso, il certificato di registrazione e l’IBAN di un conto corrente a tuo nome.', 'DE-SRC-24']
    ] },
    { k: 'keep', p: 'eu', t: [
      ['Nothing to renew: free movement needs no residence title. Register again at the registration office each time you move.',
        'Niente da rinnovare: la libera circolazione non richiede titoli di soggiorno. Registrati di nuovo all’anagrafe ogni volta che cambi casa.', 'DE-SRC-09 DE-SRC-04']
    ] },
    { k: 'keep', p: 'uk us other', t: [
      ['Apply to extend before your permit expires: the old permit then stays valid while you wait, with your right to work and to travel. A paper certificate of this (Fiktionsbescheinigung) costs €13.',
        'Chiedi il rinnovo prima che il permesso scada: il vecchio permesso resta valido durante l’attesa, con il diritto di lavorare e viaggiare. Il certificato cartaceo che lo attesta (Fiktionsbescheinigung) costa 13 €.', 'DE-SRC-01 DE-SRC-02']
    ] }
  ],

  traps: [
    { p: 'uk us', t: ['Entering visa-free gives 90 days to apply, but no right to work while you wait, and appointments can take three to six months.',
      'Entrare senza visto dà 90 giorni per fare domanda, ma nessun diritto di lavorare nell’attesa, e gli appuntamenti possono richiedere da tre a sei mesi.', 'DE-SRC-01 DE-SRC-02'] },
    { p: 'uk us other', t: ['Check which box is ticked on a provisional certificate (Fiktionsbescheinigung): after a first application from a visa-free entry it does not let you work or leave Germany; leaving ends your right to stay.',
      'Controlla quale casella è barrata sul certificato provvisorio (Fiktionsbescheinigung): dopo una prima domanda da ingresso senza visto non consente di lavorare né di lasciare la Germania; uscire fa perdere il diritto di soggiorno.', 'DE-SRC-01'] },
    { p: 'eu uk us other', t: ['Without an address registration there is no tax ID and your employer withholds tax at the punitive class VI; a registration at an address where you do not live can be fined up to €50,000.',
      'Senza registrazione dell’indirizzo non c’è codice fiscale e il datore applica la classe fiscale punitiva VI; registrarsi a un indirizzo dove non si vive può costare multe fino a 50.000 €.', 'DE-SRC-04 DE-SRC-30'] },
    { p: 'uk us other', t: ['In several states (Bavaria, North Rhine-Westphalia, Lower Saxony) there is no administrative objection against a refusal: you must go to court within one month, with an urgent application to stop removal.',
      'In diversi Länder (Baviera, Renania Settentrionale-Vestfalia, Bassa Sassonia) non c’è ricorso amministrativo contro un diniego: bisogna andare in tribunale entro un mese, con un’istanza urgente per fermare l’espulsione.', 'DE-SRC-15'] },
    { p: 'uk us other', t: ['German authorities want translations by a sworn translator registered in Germany, and for some countries they do not accept the apostille.',
      'Le autorità tedesche vogliono traduzioni di un traduttore giurato registrato in Germania, e per alcuni paesi non accettano l’apostille.', 'DE-SRC-31'] }
  ],

  open: [
    { st: 'open', t: ['Airlines and non-Schengen border posts often refuse the online PDF receipt from Berlin’s immigration office; the paper certificate (€13) is safer if you must travel.',
      'Compagnie aeree e frontiere extra-Schengen rifiutano spesso la ricevuta PDF online dell’ufficio immigrazione di Berlino; il certificato cartaceo (13 €) è più sicuro se devi viaggiare.'] },
    { st: 'watch', t: ['ZAB degree statements take 8 to 16 weeks in practice since the Opportunity Card began, against an official three months.',
      'Le valutazioni ZAB richiedono in pratica da 8 a 16 settimane dall’arrivo della Carta delle opportunità, contro i tre mesi ufficiali.'] },
    { st: 'open', t: ['Visa appointments wait two to four months in India and six to twelve in Turkey for study and job-search visas.',
      'Gli appuntamenti per visti di studio e ricerca lavoro richiedono da due a quattro mesi in India e da sei a dodici in Turchia.'] },
    { st: 'watch', t: ['Working full time in semester breaks keeps student status for social insurance, but the 140-day immigration limit still counts.',
      'Lavorare a tempo pieno nelle pause semestrali mantiene lo status di studente per la previdenza, ma il limite di 140 giorni resta valido.'] },
    { st: 'watch', t: ['Citizenship applications take 18 to 24 months to be decided in many cities.',
      'In molte città le domande di cittadinanza richiedono da 18 a 24 mesi per una decisione.'] }
  ]
});

/* Sources: generated by tools/visas-sources.js from research/visas_immigration/germany/germany_sources.md.
 * Do not edit by hand: change the register, then run the tool. */
ATLAS.visaSources('DE', {
  "DE-SRC-09": ["Freizügigkeitsgesetz/EU (FreizügG/EU)","https://www.gesetze-im-internet.de/freiz_gg_eu_2004/","2026-10-05"],
  "DE-SRC-04": ["Bundesmeldegesetz (BMG)","https://www.gesetze-im-internet.de/bmg/","2026-10-05"],
  "DE-SRC-30": ["Bundeszentralamt für Steuern (BZSt): Steuerliche Identifikationsnummer (IdNr)","https://www.bzst.de/DE/Privatpersonen/SteuerlicheIdentifikationsnummer/FAQ/faq_node.html","2026-10-05"],
  "DE-SRC-11": ["Sozialgesetzbuch Fünftes Buch (SGB V)","https://www.gesetze-im-internet.de/sgb_5/","2026-10-05"],
  "DE-SRC-01": ["Aufenthaltsgesetz (AufenthG)","https://www.gesetze-im-internet.de/aufenthg_2004/","2026-10-05"],
  "DE-SRC-02": ["Aufenthaltsverordnung (AufenthV)","https://www.gesetze-im-internet.de/aufenthv/","2026-10-05"],
  "DE-SRC-28": ["Akademische Prüfstelle (APS)","https://aps-india.de","2026-10-05"],
  "DE-SRC-19": ["BAMF: REST-Richtlinie: Mobilität von Studierenden und Forschern","https://www.bamf.de/DE/Themen/MigrationAufenthalt/ZuwandererDrittstaaten/MobilitaetEU/MobilitaetStudenten/mobilitaet-studenten-node.html","2026-10-05"],
  "DE-SRC-13": ["29. BAföG-Änderungsgesetz (29. BAföGÄndG)","https://www.recht.bund.de/bgbl/1/2024/238/regelungstext.pdf","2026-10-05"],
  "DE-SRC-24": ["Auswärtiges Amt: Visabestimmungen und Eröffnung eines Sperrkontos","https://www.auswaertiges-amt.de/de/sperrkonto/375008","2026-10-05"],
  "DE-SRC-29": ["Techniker Krankenkasse (TK): Beitragssätze für Studierende 2026","https://www.tk.de/techniker/versicherung/gut-versichert-in-jeder-lebenslage/versichert-als-studierende/krankenversicherung-und-studium/beitrag-studierende-2131472","2026-10-05"],
  "DE-SRC-12": ["Versicherungsvertragsgesetz (VVG)","https://www.gesetze-im-internet.de/vvg_2008/__193.html","2026-10-05"],
  "DE-SRC-05": ["Mindestlohngesetz (MiLoG)","https://www.gesetze-im-internet.de/milog/","2026-10-05"],
  "DE-SRC-06": ["Fünfte Mindestlohnanpassungsverordnung (MiLoV5)","https://www.gesetze-im-internet.de/milov5/","2026-10-05"],
  "DE-SRC-03": ["Beschäftigungsverordnung (BeschV)","https://www.gesetze-im-internet.de/beschv_2013/","2026-10-05"],
  "DE-SRC-21": ["Make it in Germany: Chancenkarte (Opportunity Card)","https://www.make-it-in-germany.com/en/visa-residence/types-of-visa/chancenkarte-opportunity-card","2026-10-05"],
  "DE-SRC-26": ["KMK: Anabin Database (Informationssystem zur Anerkennung ausländischer Bildungsabschlüsse)","https://anabin.kmk.org","2026-10-05"],
  "DE-SRC-27": ["ZAB (Zentralstelle für ausländisches Bildungswesen): Statement of Comparability (Zeugnisbewertung)","https://zab.kmk.org","2026-10-05"],
  "DE-SRC-18": ["BAMF: Migrathek: Blaue Karte EU","https://www.bamf.de/EN/Themen/MigrationAufenthalt/ZuwandererDrittstaaten/Migrathek/BlaueKarteEU/blauekarteeu-node.html","2026-10-05"],
  "DE-SRC-22": ["Make it in Germany: EU Blue Card Requirements 2026","https://www.make-it-in-germany.com/en/visa-residence/types-of-visa/eu-blue-card","2026-10-05"],
  "DE-SRC-17": ["Regolamento (UE) 2024/1415 della Commissione","https://eur-lex.europa.eu/eli/reg_del/2024/1415/oj","2026-10-05"],
  "DE-SRC-16": ["Staatsangehörigkeitsgesetz (StAG)","https://www.gesetze-im-internet.de/stag/","2026-10-05"],
  "DE-SRC-31": ["Bundesministerium der Justiz (BMJ): Dolmetscher- und Übersetzerdatenbank der Landesjustizverwaltungen","https://www.justiz-dolmetscher.de","2026-10-05"],
  "DE-SRC-10": ["Zahlungskontengesetz (ZKG)","https://www.gesetze-im-internet.de/zkg/","2026-10-05"],
  "DE-SRC-15": ["Verwaltungsgerichtsordnung (VwGO)","https://www.gesetze-im-internet.de/vwgo/","2026-10-05"]
});
