/* Visas and permits: Finland. From research/visas_immigration/finland/
 * (guide, source register, open questions), council check of 5 Oct 2026. */
ATLAS.addVisas({
  id: 'FI',
  folder: 'finland',
  checked: '2026-10-05',
  review: '2027-04-05',

  free: {
    p: 'eu',
    t: [
      ['EU, EEA and Swiss citizens have unlimited access to work, with no labour-market test.',
        'I cittadini UE, SEE e svizzeri hanno accesso illimitato al lavoro, senza test del mercato.', 'FI-SRC-02'],
      ['Within three months, register your right of residence with the immigration service (Migri) through Enter Finland and in person.',
        'Entro tre mesi si registra il diritto di soggiorno presso il servizio immigrazione (Migri) tramite Enter Finland e di persona.', 'FI-SRC-02 FI-SRC-01'],
      ['Then register with the population agency (DVV) for a personal identity code; a municipality of residence (kotikunta), which opens public health care, needs a contract or lease of at least 12 months.',
        'Poi ci si registra all’agenzia per i dati demografici (DVV) per il codice personale; il comune di residenza (kotikunta), che apre la sanità pubblica, richiede un contratto o un affitto di almeno 12 mesi.', 'FI-SRC-22']
    ]
  },

  routes: [
    { k: 'study', p: 'uk us other', v: 'open',
      name: ['Student residence permit', 'Permesso di soggiorno per studenti'], law: 'Ulkomaalaislaki',
      t: [
        ['A continuous permit for the whole programme. English-taught degrees charge non-EU students tuition, paid or covered by a grant before the permit.',
          'Un permesso continuo per l’intero corso. I corsi in inglese fanno pagare le tasse agli studenti extra-UE, saldate o coperte da borsa prima del permesso.', 'FI-SRC-08'],
        ['Funds must be in an account in your own name; parents’ guarantees are refused. Private health insurance is compulsory.',
          'I fondi devono stare su un conto a tuo nome; le garanzie dei genitori vengono rifiutate. L’assicurazione sanitaria privata è obbligatoria.', 'FI-SRC-08 FI-SRC-10'],
        ['Work an average of 30 hours a week over the year, full time in holidays; a credited internship is outside the limit. Non-EU students with a permit from another EU country can come for up to 360 days on notification.',
          'Si lavora in media 30 ore a settimana sull’anno, a tempo pieno nelle vacanze; il tirocinio accreditato è fuori dal limite. Gli studenti extra-UE con permesso di un altro paese UE possono venire fino a 360 giorni con una notifica.', 'FI-SRC-09 FI-SRC-12']
      ],
      f: [
        [['Funds', 'Mezzi'], ['€800 a month (€9,600 a year)', '800 € al mese (9.600 € l’anno)'], 'FI-SRC-08'],
        [['Health insurance cover', 'Copertura sanitaria'], ['€120,000 for courses under two years, €40,000 for two years or more', '120.000 € per corsi sotto i due anni, 40.000 € per due anni o più'], 'FI-SRC-10'],
        [['Fee', 'Costo'], ['€600 online, €750 on paper', '600 € online, 750 € cartacea'], 'FI-SRC-01'],
        [['Student health fee (YTHS)', 'Tassa sanitaria studentesca (YTHS)'], ['€36.80 a semester', '36,80 € a semestre'], 'FI-SRC-24']
      ] },

    { k: 'intern', p: 'uk us other', v: 'sponsor',
      name: ['Trainee permit', 'Permesso per tirocinanti'], law: 'Directive 2016/801',
      t: [['For an internship linked to studies abroad or starting within two years of graduating, with a signed agreement and training plan, for up to 18 months; unpaid internships are refused.',
        'Per un tirocinio legato a studi all’estero o che inizia entro due anni dalla laurea, con convenzione firmata e piano formativo, fino a 18 mesi; i tirocini non retribuiti vengono rifiutati.', 'FI-SRC-13']],
      f: [
        [['Minimum pay', 'Compenso minimo'], ['€1,463 net a month', '1.463 € netti al mese'], 'FI-SRC-13'],
        [['Fee', 'Costo'], ['€530 online', '530 € online'], 'FI-SRC-01']
      ] },

    { k: 'search', p: 'uk us other', v: 'open',
      name: ['Permit to look for work or start a business', 'Permesso per cercare lavoro o avviare un’impresa'], law: 'Ulkomaalaislaki',
      t: [
        ['After a Finnish degree or research project: up to two years in total, usable in up to three periods of at least six months, and applicable up to five years after graduating, from Finland or abroad. Any full-time work is allowed.',
          'Dopo una laurea o un progetto di ricerca in Finlandia: fino a due anni in totale, utilizzabili in massimo tre periodi di almeno sei mesi, e richiedibili fino a cinque anni dopo la laurea, dalla Finlandia o dall’estero. È consentito qualsiasi lavoro a tempo pieno.', 'FI-SRC-11'],
        ['A job then gives the permit for holders of a Finnish degree, with no labour-market test.',
          'Un lavoro dà poi il permesso per chi ha una laurea finlandese, senza test del mercato del lavoro.', 'FI-SRC-03 FI-SRC-11']
      ],
      f: [
        [['Funds', 'Mezzi'], ['€800 a month', '800 € al mese'], 'FI-SRC-11'],
        [['Fee', 'Costo'], ['€230 online in Finland; €750 online from abroad', '230 € online dalla Finlandia; 750 € online dall’estero'], 'FI-SRC-01']
      ] },

    { k: 'work', p: 'uk us other', v: 'sponsor',
      name: ['Specialist permit or EU Blue Card', 'Permesso per specialisti o Carta Blu UE'], law: 'Ulkomaalaislaki §§ 77, 81',
      t: [
        ['A degree or equivalent expertise and a highly qualified job; no labour-market test. Through the fast track the decision takes about 14 days, with biometrics within five working days, and a D visa lets you fly before the card.',
          'Una laurea o competenze equivalenti e un lavoro altamente qualificato; nessun test del mercato. Con la corsia rapida la decisione arriva in circa 14 giorni, con i dati biometrici entro cinque giorni lavorativi, e un visto D consente di partire prima della carta.', 'FI-SRC-05 FI-SRC-07'],
        ['The Blue Card needs a contract of at least six months and brings easier moves within the EU after a year.',
          'La Carta Blu richiede un contratto di almeno sei mesi e facilita gli spostamenti nell’UE dopo un anno.', 'FI-SRC-06']
      ],
      f: [
        [['Salary, 2026 (base pay only)', 'Stipendio, 2026 (solo paga base)'], ['€3,937 gross a month', '3.937 € lordi al mese'], 'FI-SRC-05 FI-SRC-06'],
        [['Fee', 'Costo'], ['€530 online, €630 on paper, plus €95 visa', '530 € online, 630 € cartacea, più 95 € di visto'], 'FI-SRC-01']
      ],
      w: ['Meals, housing, car or travel allowances do not count towards the specialist salary.',
        'Pasti, alloggio, auto o indennità di trasferta non contano per lo stipendio da specialista.', 'FI-SRC-05'] },

    { k: 'work', p: 'uk us other', v: 'sponsor',
      name: ['Employed person’s permit', 'Permesso per lavoratore dipendente'], law: 'Ulkomaalaislaki §§ 70-76',
      t: [['Migri now handles the whole application. The pay must meet the collective agreement, and the job is advertised for 14 days on Työmarkkinatori unless it is a regional shortage occupation. The permit is tied to one occupational field.',
        'Migri gestisce ora l’intera domanda. La paga deve rispettare il contratto collettivo, e il posto va pubblicato per 14 giorni su Työmarkkinatori salvo professioni carenti della regione. Il permesso è legato a un settore professionale.', 'FI-SRC-04 FI-SRC-03']],
      f: [
        [['Minimum salary, 2026', 'Stipendio minimo, 2026'], ['€1,600 gross a month', '1.600 € lordi al mese'], 'FI-SRC-03'],
        [['Fee', 'Costo'], ['€750 online, €950 on paper', '750 € online, 950 € cartacea'], 'FI-SRC-01']
      ],
      w: ['Lose your job and you have three months (six after two years) to find another before the permit is withdrawn.',
        'Se perdi il lavoro hai tre mesi (sei dopo due anni) per trovarne un altro prima della revoca del permesso.', 'FI-SRC-17'] },

    { k: 'research', p: 'uk us other', v: 'sponsor',
      name: ['Researcher permit, and PhDs', 'Permesso per ricercatori e dottorati'], law: 'Ulkomaalaislaki § 77',
      t: [
        ['A hosting agreement with a Finnish university or research institute; no labour-market test and the fast track.',
          'Una convenzione di accoglienza con un’università o un istituto di ricerca finlandese; nessun test del mercato e accesso alla corsia rapida.', 'FI-SRC-14 FI-SRC-07'],
        ['A PhD can be a salaried contract or a grant; research grants are tax-free up to €26,200 a year, and a grant of four months or more above €4,712 a year must be insured with Mela within three months.',
          'Un dottorato può essere un contratto stipendiato o una borsa; le borse di ricerca sono esenti fino a 26.200 € l’anno, e una borsa di quattro mesi o più sopra i 4.712 € annui va assicurata presso Mela entro tre mesi.', 'FI-SRC-14 FI-SRC-20 FI-SRC-27']
      ],
      f: [[['Fee', 'Costo'], ['€530 online', '530 € online'], 'FI-SRC-01']] },

    { k: 'whv', p: 'uk us', v: 'closed',
      name: ['Working holiday', 'Vacanza-lavoro'], law: 'bilateral agreements',
      t: [['Finland has working-holiday agreements only with Australia, New Zealand, Japan and Canada.',
        'La Finlandia ha accordi di vacanza-lavoro solo con Australia, Nuova Zelanda, Giappone e Canada.', 'FI-SRC-15']] },

    { k: 'whv', p: 'other', v: 'limited',
      name: ['Working holiday', 'Vacanza-lavoro'], law: 'bilateral agreements',
      t: [['For Australians and Japanese aged 18 to 30 and New Zealanders and Canadians aged 18 to 35: 12 months once in a lifetime, with €2,450 of funds.',
        'Per australiani e giapponesi dai 18 ai 30 anni e neozelandesi e canadesi dai 18 ai 35: 12 mesi una volta nella vita, con 2.450 € di mezzi.', 'FI-SRC-15']],
      f: [[['Fee', 'Costo'], ['€530 online; free for New Zealanders', '530 € online; gratuito per i neozelandesi'], 'FI-SRC-01 FI-SRC-15']] },

    { k: 'tax', p: 'eu uk us other', v: 'limited',
      name: ['Key employee tax regime', 'Regime fiscale per figure chiave'], law: 'Avainhenkilölaki',
      t: [['A flat 25% tax for up to seven years for foreign experts earning at least €5,800 a month in cash pay who were not tax-resident in Finland in the previous five years; teachers and researchers qualify regardless of salary.',
        'Un’imposta fissa del 25% fino a sette anni per esperti esteri con almeno 5.800 € al mese di retribuzione monetaria non residenti fiscali in Finlandia nei cinque anni precedenti; docenti e ricercatori vi rientrano a prescindere dallo stipendio.', 'FI-SRC-20']] }
  ],

  arrival: [
    { k: 'before', p: 'eu', t: [
      ['Nothing to arrange in advance: no visa or work permit is needed, and stays under 90 days need no formalities.',
        'Niente da preparare in anticipo: non servono visto né permesso di lavoro, e i soggiorni sotto i 90 giorni non richiedono formalità.', 'FI-SRC-02']
    ] },
    { k: 'before', p: 'uk us other', t: [
      ['Apply online in Enter Finland, then prove your identity with biometrics at a Finnish embassy or visa centre; on the fast track this must be done within 5 working days of applying.',
        'Fai domanda online su Enter Finland, poi conferma l’identità con i dati biometrici presso un’ambasciata finlandese o un centro visti; con la procedura rapida va fatto entro 5 giorni lavorativi dalla domanda.', 'FI-SRC-07']
    ] },
    { k: 'address', p: 'eu uk us other', t: [
      ['Register in person with the Digital and Population Data Services Agency (DVV): you get your personal identity code, and a home municipality (kotikunta) if your lease runs 12 months or more.',
        'Registrati di persona presso l’Agenzia per i dati demografici (DVV): ricevi il codice personale, e un comune di residenza (kotikunta) se il contratto d’affitto dura 12 mesi o più.', 'FI-SRC-22']
    ] },
    { k: 'card', p: 'eu', t: [
      ['Within 3 months of arriving, apply in Enter Finland to register your right of residence, then visit a Migri service point in person: €53, handled in 1 to 3 weeks with a signed contract.',
        'Entro 3 mesi dall’arrivo, chiedi su Enter Finland la registrazione del diritto di soggiorno, poi presentati di persona a uno sportello Migri: 53 €, trattata in 1-3 settimane con un contratto firmato.', 'FI-SRC-02 FI-SRC-01']
    ] },
    { k: 'card', p: 'eu uk us other', t: [
      ['Then apply to the police for a foreigner’s identity card (ulkomaalaisen henkilökortti): without it, banks will not issue online banking codes.',
        'Poi chiedi alla polizia la carta d’identità per stranieri (ulkomaalaisen henkilökortti): senza, le banche non rilasciano i codici per l’home banking.', 'FI-SRC-23']
    ] },
    { k: 'number', p: 'eu uk us other', t: [
      ['The DVV registration gives your personal identity code (henkilötunnus). Get a tax card from the Tax Administration (Vero) and give it to your employer before your first payslip: without one, 60% of your gross pay is withheld.',
        'La registrazione al DVV ti dà il codice personale (henkilötunnus). Ottieni la carta fiscale dall’Agenzia delle entrate (Vero) e consegnala al datore prima della prima busta paga: senza, viene trattenuto il 60% dello stipendio lordo.', 'FI-SRC-22 FI-SRC-21']
    ] },
    { k: 'health', p: 'eu uk us other', t: [
      ['Apply to Kela for social security and the Kela card. Public care has fees: €28.20 for a GP visit and €66.70 for an outpatient specialist visit, with a yearly cap of €762 for residents; without a home municipality or European Health Insurance Card you are billed the full cost.',
        'Chiedi a Kela l’iscrizione alla sicurezza sociale e la tessera Kela. Le cure pubbliche hanno ticket: 28,20 € per il medico di base e 66,70 € per una visita specialistica ambulatoriale, con un tetto annuo di 762 € per i residenti; senza comune di residenza o Tessera europea di assicurazione malattia paghi il costo pieno.', 'FI-SRC-24 FI-SRC-26']
    ] },
    { k: 'health', p: 'eu', t: [
      ['University students are covered by their European Health Insurance Card and pay the student health fee (YTHS), €36.80 a semester, through Kela.',
        'Gli studenti universitari sono coperti dalla Tessera europea di assicurazione malattia e pagano tramite Kela la tassa sanitaria studentesca (YTHS), 36,80 € a semestre.', 'FI-SRC-24']
    ] },
    { k: 'health', p: 'uk us other', t: [
      ['Students need private health insurance for the permit: at least €120,000 of cover for studies under 2 years, or €40,000 for 2 years or more.',
        'Gli studenti devono avere un’assicurazione sanitaria privata per il permesso: almeno 120.000 € di copertura per studi sotto i 2 anni, o 40.000 € per 2 anni o più.', 'FI-SRC-10']
    ] },
    { k: 'bank', p: 'eu uk us other', t: [
      ['Finnish banks (Nordea, OP, Danske Bank) open a basic account on a foreign passport, but give online banking codes, which double as your digital ID for Suomi.fi, OmaVero and OmaKanta, only once you show the police’s foreigner’s identity card.',
        'Le banche finlandesi (Nordea, OP, Danske Bank) aprono un conto base con un passaporto estero, ma rilasciano i codici dell’home banking, che fanno anche da identità digitale per Suomi.fi, OmaVero e OmaKanta, solo dopo che mostri la carta d’identità per stranieri della polizia.', 'FI-SRC-23']
    ] },
    { k: 'keep', p: 'eu', none: true },
    { k: 'keep', p: 'uk us other', t: [
      ['Apply to extend before your permit expires: you may then stay and keep working or studying on the same terms until the decision, with a certificate of pending application from Enter Finland.',
        'Chiedi la proroga prima che il permesso scada: puoi così restare e continuare a lavorare o studiare alle stesse condizioni fino alla decisione, con il certificato di domanda pendente da Enter Finland.', 'FI-SRC-25'],
      ['That certificate is not a travel document, and embassies issue no return visa: do not leave Finland if you would come back after the date on your card.',
        'Quel certificato non è un documento di viaggio, e le ambasciate non rilasciano visti di rientro: non lasciare la Finlandia se rientreresti dopo la data sulla tua carta.', 'FI-SRC-25']
    ] }
  ],

  traps: [
    { p: 'uk us other', t: ['If your card would expire while you are abroad with a renewal pending, do not travel: the pending certificate is not a travel document and embassies issue no return visas.',
      'Se la carta scadrebbe mentre sei all’estero con un rinnovo in corso, non viaggiare: il certificato di pendenza non è un documento di viaggio e le ambasciate non rilasciano visti di ritorno.', 'FI-SRC-25'] },
    { p: 'eu uk us other', t: ['Without a tax card in time, your employer withholds 60% of your salary.',
      'Senza scheda fiscale in tempo, il datore trattiene il 60% dello stipendio.', 'FI-SRC-21'] },
    { p: 'eu uk us other', t: ['Banks often refuse online banking codes on a foreign passport: the police identity card for foreigners (about €55 to €60) usually unlocks them.',
      'Le banche spesso rifiutano i codici di home banking con un passaporto estero: la carta d’identità della polizia per stranieri (circa 55-60 €) di solito li sblocca.', 'FI-SRC-23'] },
    { p: 'eu uk us other', t: ['Without a municipality of residence or a European card, the health region bills the full cost of care.',
      'Senza comune di residenza o tessera europea, la regione sanitaria fattura il costo pieno delle cure.', 'FI-SRC-26'] }
  ],

  open: [
    { st: 'open', t: ['Banks differ on issuing online banking credentials to EU citizens.',
      'Le banche non concordano sul rilascio delle credenziali bancarie online ai cittadini UE.'] },
    { st: 'pending', t: ['A compulsory citizenship test is planned for 2027, after residence was raised to eight years in 2024.',
      'È previsto per il 2027 un test di cittadinanza obbligatorio, dopo che nel 2024 la residenza richiesta è salita a otto anni.'] },
    { st: 'watch', t: ['Contracts of 6 to 11 months often get only a temporary address, without a municipality of residence.',
      'I contratti da 6 a 11 mesi ottengono spesso solo un domicilio temporaneo, senza comune di residenza.'] },
    { st: 'watch', t: ['Processing times since Migri took over the labour-market test in 2025 are still being watched.',
      'I tempi da quando Migri ha assorbito il test del mercato del lavoro nel 2025 sono ancora sotto osservazione.'] }
  ]
});

/* Sources: generated by tools/visas-sources.js from research/visas_immigration/finland/finland_sources.md.
 * Do not edit by hand: change the register, then run the tool. */
ATLAS.visaSources('FI', {
  "FI-SRC-02": ["Maahanmuuttovirasto (Migri): Registrazione del diritto di soggiorno per cittadini dell'Unione Europea (EU-rekisteröinti): requisiti, modulo Enter…","https://migri.fi/en/eu-citizen","2026-10-05"],
  "FI-SRC-01": ["Maahanmuuttovirasto (Migri): Tariffe ufficiali 2026 per domande di soggiorno, visti D, registrazioni UE, rinnovi e cittadinanza (Sisäministeriön…","https://migri.fi/en/processing-fees-and-payment-methods","2026-10-05"],
  "FI-SRC-22": ["Digi- ja väestötietovirasto (DVV): Registrazione anagrafica degli stranieri, attribuzione codice identificativo personale (henkilötunnus) e iscrizione…","https://dvv.fi/en/foreigner-registration","2026-10-05"],
  "FI-SRC-08": ["Maahanmuuttovirasto (Migri): Studenti universitari (Opiskelija): requisiti finanziari in vigore dal 01/11/2024 pari a 800 €/mese (9.600 €/anno) su…","https://migri.fi/en/income-requirement-for-students","2026-10-05"],
  "FI-SRC-10": ["Maahanmuuttovirasto (Migri): Assicurazione sanitaria obbligatoria per studenti: massimale 120.000 € (<2 anni) o 40.000 € (>=2 anni), franchigia max…","https://migri.fi/en/insurance","2026-10-05"],
  "FI-SRC-09": ["Maahanmuuttovirasto (Migri): Studenti: diritto di lavoro fino a 30 ore medie settimanali su base annua ex Legge 218/2022","https://migri.fi/en/working-and-internships-during-studies","2026-10-05"],
  "FI-SRC-12": ["Maahanmuuttovirasto (Migri): Mobilità intra-UE per studenti ex Direttiva (UE) 2016/801: notifica di mobilità per soggiorni fino a 360 giorni senza…","https://migri.fi/en/mobility-notification-to-finland","2026-10-05"],
  "FI-SRC-24": ["Kela (Istituto Previdenza Sociale): Copertura sanitaria, diritto a cure mediche per residenti e lavoratori, TEAM (EHIC) e assistenza per studenti (tassa…","https://www.kela.fi/moving-to-finland-social-security-and-health-care","2026-10-05"],
  "FI-SRC-13": ["Maahanmuuttovirasto (Migri): Tirocinio (Harjoittelu) per neolaureati o studenti esteri (modulo OLE_TY3): durata max 18 mesi, divieto stage non…","https://migri.fi/en/internship","2026-10-05"],
  "FI-SRC-11": ["Maahanmuuttovirasto (Migri): Permesso di soggiorno post-studio per ricerca lavoro o avvio impresa (Jatkolupa työnhakua varten): durata fino a 2…","https://migri.fi/en/extended-permit-to-look-for-work","2026-10-05"],
  "FI-SRC-03": ["Maahanmuuttovirasto (Migri): Permesso per lavoratore subordinato (TTOL): requisito di sussistenza minimo 1.600 € lordi/mese dal 1° gen 2025,…","https://migri.fi/en/residence-permit-for-an-employed-person","2026-10-05"],
  "FI-SRC-05": ["Maahanmuuttovirasto (Migri): Permesso per Specialista (Erityisasiantuntija): soglia salariale 2026 a 3.937 € lordi/mese monetari puri (esclusi…","https://migri.fi/en/specialist","2026-10-05"],
  "FI-SRC-07": ["Maahanmuuttovirasto (Migri): Fast-Track (Pikakaista) in 14 giorni per specialisti, possessori di Blue Card, startup e familiari","https://migri.fi/en/fast-track","2026-10-05"],
  "FI-SRC-06": ["Maahanmuuttovirasto (Migri): Carta Blu UE (EU:n sininen kortti): recepimento Direttiva UE 2021/1883, soglia 3.937 € lordi/mese, durata minima…","https://migri.fi/en/eu-blue-card","2026-10-05"],
  "FI-SRC-04": ["Työ- ja elinkeinoministeriö / Migri: Riforma TE2024 (in vigore 01/01/2025): soppressione della decisione parziale (osapäätös) dei TE-toimistot e…","https://migri.fi/en/-/changes-to-residence-permits-for-an-employed-person-from-1-january-2025-first-permits-and-extended-permits","2026-10-05"],
  "FI-SRC-17": ["Finlex / Valtioneuvosto: Legge sugli stranieri (Ulkomaalaislaki 301/2004 e novellazione L. 11/06/2025): regola dei 3 mesi / 6 mesi di…","https://www.finlex.fi/fi/laki/ajantasa/2004/20040301","2026-10-05"],
  "FI-SRC-14": ["Maahanmuuttovirasto (Migri): Ricercatori scientifici (Tutkija) e dottorandi: convenzione di accoglienza (Vastaanottosopimus), esenzione labor…","https://migri.fi/en/researcher","2026-10-05"],
  "FI-SRC-20": ["Verohallinto (Vero): Regime fiscale lavoratori chiave esteri (Avainhenkilölaki","https://www.vero.fi/en/individuals/tax-cards-and-tax-returns/arriving_in_finland/work_in_finland/key_employees/","2026-10-05"],
  "FI-SRC-27": ["Maatalousyrittäjien eläkelaitos (Mela): Assicurazione pensionistica e infortuni obbligatoria per dottorandi e ricercatori borsisti (apurahatutkijat ex…","https://www.mela.fi/en/grant-and-scholarship-recipients/","2026-10-05"],
  "FI-SRC-15": ["Maahanmuuttovirasto (Migri): Working Holiday (Nuoriso- tai lomalupa): accordi bilaterali esclusivi con Australia, Nuova Zelanda, Giappone e Canada","https://migri.fi/en/working-holiday/en","2026-10-05"],
  "FI-SRC-23": ["Poliisi (Polizia Finlandese): Rilascio della Carta d'Identità per Stranieri (Ulkomaalaisen henkilökortti): presupposto per sblocco credenziali…","https://poliisi.fi/en/identity-card-for-a-foreigner","2026-10-05"],
  "FI-SRC-21": ["Verohallinto (Vero): Ritenuta fiscale cautelare d'ufficio al 60% (ennakonpidätys) in caso di omessa consegna della carta fiscale…","https://www.vero.fi/en/individuals/tax-cards-and-tax-returns/tax_card/tax-card-for-a-foreign-employee/","2026-10-05"],
  "FI-SRC-26": ["Sosiaali- ja terveysministeriö: Decreto tariffe sociosanitarie (Asiakasmaksuasetus 2025): aumenti ticket Contee Benessere (Hyvinvointialueet) al 22,5%…","https://stm.fi/en/client-fees-in-healthcare-and-social-services","2026-10-05"],
  "FI-SRC-25": ["Rajavartiolaitos / Migri: Statuto del richiedente durante l'attesa di rinnovo (vireilläolotodistus): validità solo territoriale interna, divieto…","https://migri.fi/en/travelling-when-you-have-a-pending-application","2026-10-05"]
});
