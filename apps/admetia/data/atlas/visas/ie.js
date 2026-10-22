/* Visas and permits: Ireland. From research/visas_immigration/ireland/
 * (guide, source register, open questions), council check of 5 Oct 2026. */
ATLAS.addVisas({
  id: 'IE',
  folder: 'ireland',
  checked: '2026-10-05',
  review: '2027-03-31',

  free: {
    p: 'eu uk',
    t: [
      ['EU, EEA and Swiss citizens, and British citizens under the Common Travel Area, need no visa, work permit or immigration registration to live, study or work in Ireland.',
        'I cittadini UE, SEE e svizzeri, e i cittadini britannici grazie alla Common Travel Area, non hanno bisogno di visto, permesso di lavoro o registrazione per vivere, studiare o lavorare in Irlanda.', 'IE-SRC-21 IE-SRC-20 IE-SRC-11'],
      ['Apply for a PPS number (tax and social security) on MyWelfare, then add your job in Revenue myAccount before the first payday.',
        'Si chiede il numero PPS (fisco e previdenza) su MyWelfare, poi si aggiunge il lavoro su Revenue myAccount prima del primo stipendio.', 'IE-SRC-18 IE-SRC-17'],
      ['Without that, the first salary is taxed at the emergency rate, about 52% with USC; it is refunded once Revenue issues your payroll notice.',
        'Altrimenti il primo stipendio è tassato con l’aliquota d’emergenza, circa il 52% con l’USC; viene rimborsato quando Revenue emette la notifica per la busta paga.', 'IE-SRC-17']
    ]
  },

  routes: [
    { k: 'study', p: 'us other', v: 'open',
      name: ['Student permission (Stamp 2)', 'Permesso per studio (Stamp 2)'], law: 'ILEP',
      t: [
        ['The course must be on the official list of eligible programmes (ILEP). Visa-required nationals apply for a study visa; others, US citizens included, show their documents at the border and register within 90 days.',
          'Il corso deve essere nell’elenco ufficiale dei programmi ammessi (ILEP). Chi ha bisogno del visto chiede il visto per studio; gli altri, cittadini statunitensi compresi, mostrano i documenti alla frontiera e si registrano entro 90 giorni.', 'IE-SRC-07 IE-SRC-06'],
        ['Since 13 January 2025 every first registration is in person at Burgh Quay in Dublin, for €300 a year.',
          'Dal 13 gennaio 2025 ogni prima registrazione si fa di persona a Burgh Quay, a Dublino, per 300 € l’anno.', 'IE-SRC-11'],
        ['Work 20 hours a week in term and 40 only from 1 June to 30 September and from 15 December to 15 January; no self-employment, delivery riding included.',
          'Si lavora 20 ore a settimana durante le lezioni e 40 solo dal 1° giugno al 30 settembre e dal 15 dicembre al 15 gennaio; nessun lavoro autonomo, rider compresi.', 'IE-SRC-07'],
        ['Ireland did not adopt the EU student-mobility rules: a student permit from another EU country gives no right to study here.',
          'L’Irlanda non ha recepito le regole UE sulla mobilità degli studenti: un permesso per studio di un altro paese UE non dà diritto di studiare qui.', 'IE-SRC-22 IE-SRC-23']
      ],
      f: [
        [['Funds, courses of 8 months or more', 'Mezzi, corsi di 8 mesi o più'], ['€10,000, held for six months', '10.000 €, detenuti da sei mesi'], 'IE-SRC-09'],
        [['Fees paid in advance', 'Retta pagata in anticipo'], ['at least €6,000', 'almeno 6.000 €'], 'IE-SRC-09'],
        [['Health insurance', 'Assicurazione sanitaria'], ['€25,000 accident and €25,000 illness, hospital included', '25.000 € infortuni e 25.000 € malattia, ricovero incluso'], 'IE-SRC-10']
      ],
      w: ['Money paid into the account just before applying is treated as not genuine and leads to refusal.',
        'Il denaro versato sul conto poco prima della domanda è considerato non genuino e porta al rifiuto.', 'IE-SRC-09'] },

    { k: 'intern', p: 'us other', v: 'sponsor',
      name: ['Internships', 'Tirocini'], law: 'Employment Permits Act 2024',
      t: [
        ['An internship that is an accredited part of your Irish course, up to half its length, can be full time with no work permit.',
          'Un tirocinio che è parte accreditata del corso irlandese, fino a metà della sua durata, può essere a tempo pieno senza permesso di lavoro.', 'IE-SRC-07'],
        ['Students of foreign universities in a critical-skills field need an Internship Employment Permit, for up to 12 months, paid at least the minimum wage, and must return to finish their degree.',
          'Gli studenti di università estere in un settore critico hanno bisogno di un Internship Employment Permit, fino a 12 mesi, pagato almeno il salario minimo, e devono rientrare per finire gli studi.', 'IE-SRC-01 IE-SRC-24']
      ],
      f: [[['Minimum wage, 2026', 'Salario minimo, 2026'], ['€14.15 an hour', '14,15 € l’ora'], 'IE-SRC-24']] },

    { k: 'search', p: 'us other', v: 'open',
      name: ['Third Level Graduate Programme (Stamp 1G)', 'Third Level Graduate Programme (Stamp 1G)'], law: 'ISD guidelines',
      t: [
        ['Apply within six months of your final results, while your Stamp 2 is still valid: 12 months after an honours bachelor’s, 12 plus 12 after a master’s or PhD.',
          'Si fa domanda entro sei mesi dai risultati finali, con lo Stamp 2 ancora valido: 12 mesi dopo un honours bachelor, 12 più 12 dopo un master o un dottorato.', 'IE-SRC-08'],
        ['Full-time employed work with no work permit, but no self-employment; this time counts towards citizenship, unlike student years. Before it ends you need an employment permit from an employer.',
          'Lavoro dipendente a tempo pieno senza permesso di lavoro, ma niente lavoro autonomo; questo periodo conta per la cittadinanza, a differenza degli anni da studente. Prima della scadenza serve un permesso di lavoro tramite un datore.', 'IE-SRC-08']
      ],
      f: [[['Registration', 'Registrazione'], ['€300 a year', '300 € l’anno'], 'IE-SRC-11']] },

    { k: 'work', p: 'us other', v: 'sponsor',
      name: ['Critical Skills Employment Permit', 'Critical Skills Employment Permit'], law: 'Employment Permits Act 2024',
      t: [
        ['A job on the critical skills list with a relevant degree, or any eligible job at the higher salary; a contract of at least two years and no labour-market test. At least half the employer’s staff must be from the EEA or UK.',
          'Un lavoro della lista delle competenze critiche con una laurea pertinente, o qualsiasi lavoro ammesso allo stipendio più alto; un contratto di almeno due anni e nessun test del mercato. Almeno metà del personale dell’azienda deve essere SEE o britannico.', 'IE-SRC-02 IE-SRC-01'],
        ['Your spouse joins at once and may work; after 21 months you move to Stamp 4 and no longer need a permit. You may change employer after nine months.',
          'Il coniuge arriva subito e può lavorare; dopo 21 mesi si passa allo Stamp 4 e non serve più un permesso. Dopo nove mesi si può cambiare datore.', 'IE-SRC-07 IE-SRC-13 IE-SRC-01']
      ],
      f: [
        [['Salary, critical skills list', 'Stipendio, lista delle competenze critiche'], ['€40,904 a year; €36,848 within 12 months of graduating', '40.904 € l’anno; 36.848 € entro 12 mesi dalla laurea'], 'IE-SRC-02'],
        [['Salary, other eligible jobs', 'Stipendio, altri lavori ammessi'], ['€68,911 a year', '68.911 € l’anno'], 'IE-SRC-02'],
        [['Permit fee (employer cannot pass it on)', 'Costo del permesso (non addebitabile al lavoratore)'], ['€1,000', '1.000 €'], 'IE-SRC-01']
      ],
      w: ['A contract of 12 or 18 months is refused: it must be at least 24 months or permanent.',
        'Un contratto di 12 o 18 mesi viene rifiutato: deve essere di almeno 24 mesi o a tempo indeterminato.', 'IE-SRC-02'] },

    { k: 'work', p: 'us other', v: 'sponsor',
      name: ['General Employment Permit', 'General Employment Permit'], law: 'Employment Permits Act 2024',
      t: [['The employer first advertises for 28 days on JobsIreland/EURES and on one more site; the 50:50 staff rule applies. A spouse can join after 12 months and, since May 2024, works without a permit of their own.',
        'Il datore pubblica prima l’annuncio per 28 giorni su JobsIreland/EURES e su un altro sito; vale la regola 50:50 sul personale. Il coniuge può arrivare dopo 12 mesi e, da maggio 2024, lavora senza un proprio permesso.', 'IE-SRC-05 IE-SRC-01 IE-SRC-13 IE-SRC-26']],
      f: [
        [['Salary', 'Stipendio'], ['€36,605 a year; €34,009 for Irish graduates of the last 12 months', '36.605 € l’anno; 34.009 € per chi si è laureato in Irlanda negli ultimi 12 mesi'], 'IE-SRC-03'],
        [['Permit fee', 'Costo del permesso'], ['€500 up to six months, €1,000 up to 24', '500 € fino a sei mesi, 1.000 € fino a 24'], 'IE-SRC-01']
      ] },

    { k: 'research', p: 'us other', v: 'sponsor',
      name: ['Hosting agreement for researchers', 'Convenzione di accoglienza per ricercatori'], law: 'S.I. No. 257/2007',
      t: [
        ['The research institution signs the agreement; no work permit is needed, the visa is free, the spouse joins at once with the right to work, and Stamp 4 follows after 21 months.',
          'L’ente di ricerca firma la convenzione; non serve permesso di lavoro, il visto è gratuito, il coniuge arriva subito con diritto al lavoro, e dopo 21 mesi arriva lo Stamp 4.', 'IE-SRC-14 IE-SRC-15 IE-SRC-07'],
        ['A PhD on a stipend is a student on Stamp 2, and the stipend is free of income tax, USC and PRSI.',
          'Un dottorato con borsa è da studente con Stamp 2, e la borsa è esente da imposta sul reddito, USC e PRSI.', 'IE-SRC-07 IE-SRC-16']
      ],
      f: [[['Minimum salary', 'Stipendio minimo'], ['€23,181 a year; €30,000 with family', '23.181 € l’anno; 30.000 € con famiglia'], 'IE-SRC-15']] },

    { k: 'whv', p: 'us', v: 'limited',
      name: ['Working Holiday Authorisation', 'Working Holiday Authorisation'], law: 'bilateral agreements',
      t: [['US citizens have an intern working-holiday scheme with Ireland, aged 18 to 30, for 12 months: temporary work only, at most six months with one employer, and no conversion to a work permit inside Ireland.',
        'I cittadini statunitensi hanno con l’Irlanda uno schema di vacanza-lavoro per stagisti, dai 18 ai 30 anni, per 12 mesi: solo lavoro temporaneo, al massimo sei mesi con lo stesso datore, e nessuna conversione in permesso di lavoro in Irlanda.', 'IE-SRC-19 IE-SRC-07']],
      f: [[['Funds', 'Mezzi'], ['€1,500 to €3,000, plus a return ticket', 'da 1.500 a 3.000 €, più il biglietto di ritorno'], 'IE-SRC-19']] },

    { k: 'whv', p: 'other', v: 'limited',
      name: ['Working Holiday Authorisation', 'Working Holiday Authorisation'], law: 'bilateral agreements',
      t: [['Only for citizens of Argentina, Australia, Canada, Chile, Hong Kong, Japan, New Zealand, South Korea and Taiwan aged 18 to 30 (35 for Canada, Australia and New Zealand), within yearly quotas: 12 months (24 for Canadians).',
        'Solo per cittadini di Argentina, Australia, Canada, Cile, Hong Kong, Giappone, Nuova Zelanda, Corea del Sud e Taiwan dai 18 ai 30 anni (35 per Canada, Australia e Nuova Zelanda), entro quote annuali: 12 mesi (24 per i canadesi).', 'IE-SRC-19']] },

    { k: 'short', p: 'us other', v: 'open',
      name: ['Short stay', 'Soggiorno breve'], law: 'Immigration Act 2004',
      t: [['Ireland is outside Schengen: the border officer stamps up to 90 days. US and other visa-free nationals enter with a passport; others need an Irish short-stay visa, except Chinese and Indian citizens holding a British-Irish visa (BIVS). No work is allowed.',
        'L’Irlanda è fuori da Schengen: l’agente di frontiera timbra fino a 90 giorni. I cittadini statunitensi e di altri paesi esenti entrano con il passaporto; gli altri hanno bisogno di un visto irlandese di breve durata, tranne i cittadini cinesi e indiani con visto britannico-irlandese (BIVS). Non si può lavorare.', 'IE-SRC-06']],
      f: [[['Visa', 'Visto'], ['€60 single, €100 multiple', '60 € singolo, 100 € multiplo'], 'IE-SRC-06']] }
  ],

  arrival: [
    { k: 'before', p: 'eu uk', t: [
      ['Nothing to arrange in advance: EU, EEA and Swiss citizens, and British citizens under the Common Travel Area, need no visa, work permit or immigration registration.',
        'Niente da preparare in anticipo: i cittadini UE, SEE e svizzeri, e i britannici grazie alla Common Travel Area, non hanno bisogno di visto, permesso di lavoro o registrazione per l’immigrazione.', 'IE-SRC-21 IE-SRC-20']
    ] },
    { k: 'before', p: 'us other', t: [
      ['Ireland is outside Schengen: a residence permit from another EU country gives no right to enter or study here. Visa-required nationals apply online through AVATS (€60 single entry, €100 multiple); others travel with the full file and register on arrival.',
        'L’Irlanda è fuori da Schengen: un permesso di soggiorno di un altro paese UE non dà diritto a entrare o studiare qui. Chi ha bisogno del visto fa domanda online tramite AVATS (60 € ingresso singolo, 100 € multiplo); gli altri viaggiano con il dossier completo e si registrano all’arrivo.', 'IE-SRC-22 IE-SRC-06'],
      ['Keep the file in your hand luggage for the border officer: passport, employment permit or admission letter with fees receipt, proof of housing and funds (€10,000 for students), and private health insurance.',
        'Tieni il dossier nel bagaglio a mano per l’agente di frontiera: passaporto, permesso di lavoro o lettera di ammissione con ricevuta delle tasse, prova di alloggio e mezzi (10.000 € per gli studenti), e assicurazione sanitaria privata.', 'IE-SRC-06 IE-SRC-09 IE-SRC-10']
    ] },
    { k: 'address', p: 'eu uk us other', t: [
      ['Keep a valid proof of address for your PPS number and bank: a utility bill in your name, the Residential Tenancies Board registration letter, or an employer verification letter if you are newly hired.',
        'Conserva una prova dell’indirizzo valida per il PPS number e la banca: una bolletta a tuo nome, la lettera di registrazione del Residential Tenancies Board, o una lettera di conferma del datore se sei appena assunto.', 'IE-SRC-18 IE-SRC-25']
    ] },
    { k: 'card', p: 'eu uk', t: [
      ['None: there is no immigration registration for EU, EEA, Swiss or British citizens.',
        'Nessuno: non c’è registrazione per l’immigrazione per i cittadini UE, SEE, svizzeri o britannici.', 'IE-SRC-21 IE-SRC-20']
    ] },
    { k: 'card', p: 'us other', t: [
      ['The border officer stamps permission for up to 90 days. Before it runs out, book an appointment at Burgh Quay in Dublin, now the one office for the whole country, for the Irish Residence Permit: €300, with fingerprints and photo, and the card arrives by registered post in 10 to 15 working days.',
        'L’agente di frontiera timbra un’autorizzazione fino a 90 giorni. Prima che scada, prenota un appuntamento a Burgh Quay a Dublino, ora l’unico ufficio per tutto il paese, per l’Irish Residence Permit: 300 €, con impronte e foto, e la carta arriva per raccomandata in 10-15 giorni lavorativi.', 'IE-SRC-06 IE-SRC-11']
    ] },
    { k: 'number', p: 'eu uk us other', t: [
      ['Apply for a PPS number on MyWelfare.ie with ID, a reason such as a work contract, and proof of address; an in-person identity check at an Intreo centre issues the Public Services Card, and the number arrives by post in 4 to 10 working days.',
        'Chiedi il PPS number su MyWelfare.ie con documento d’identità, una motivazione come il contratto di lavoro e la prova dell’indirizzo; una verifica d’identità di persona presso un centro Intreo rilascia la Public Services Card, e il numero arriva per posta in 4-10 giorni lavorativi.', 'IE-SRC-18'],
      ['Then register on Revenue’s myAccount and add your job: otherwise you pay emergency tax of 40% plus 8% USC instead of the standard 20% with tax credits.',
        'Poi registrati su myAccount di Revenue e aggiungi il tuo impiego: altrimenti paghi l’imposta d’emergenza del 40% più l’8% di USC invece dell’aliquota standard del 20% con le detrazioni.', 'IE-SRC-17']
    ] },
    { k: 'health', p: 'eu', t: [
      ['Your European Health Insurance Card covers you.',
        'Ti copre la Tessera europea di assicurazione malattia.', 'IE-SRC-21']
    ] },
    { k: 'health', p: 'uk', t: [
      ['British citizens have the same access to public health care as Irish citizens under the Common Travel Area.',
        'I cittadini britannici hanno lo stesso accesso alla sanità pubblica dei cittadini irlandesi grazie alla Common Travel Area.', 'IE-SRC-20']
    ] },
    { k: 'health', p: 'us other', t: [
      ['Students need private medical insurance covering at least €25,000 for accidents and €25,000 for illness, including hospital stays.',
        'Gli studenti devono avere un’assicurazione medica privata con almeno 25.000 € per infortuni e 25.000 € per malattia, ricoveri inclusi.', 'IE-SRC-10']
    ] },
    { k: 'bank', p: 'eu uk us other', none: true },
    { k: 'keep', p: 'eu uk', none: true },
    { k: 'keep', p: 'us other', t: [
      ['Renew the permit online before it expires (€300): the acknowledgement extends your previous rights, including work and health care, for up to 12 weeks.',
        'Rinnova il permesso online prima della scadenza (300 €): la conferma di presentazione proroga i diritti precedenti, compresi lavoro e sanità, fino a 12 settimane.', 'IE-SRC-12'],
      ['Do not leave Ireland before you hold the plastic card: neither the appointment confirmation nor the renewal receipt is a travel document, and airlines refuse boarding on the way back.',
        'Non lasciare l’Irlanda prima di avere la carta plastificata: né la conferma dell’appuntamento né la ricevuta del rinnovo sono documenti di viaggio, e le compagnie aeree rifiutano l’imbarco al ritorno.', 'IE-SRC-06 IE-SRC-11']
    ] }
  ],

  traps: [
    { p: 'us other', t: ['Do not leave Ireland before collecting the IRP card: the appointment or renewal receipt is not a travel document, and airlines refuse boarding on the way back.',
      'Non lasciare l’Irlanda prima di ritirare la carta IRP: la ricevuta dell’appuntamento o del rinnovo non è un documento di viaggio, e le compagnie aeree rifiutano l’imbarco al ritorno.', 'IE-SRC-06 IE-SRC-11'] },
    { p: 'us other', t: ['Renew online before your permission expires: the acknowledgement keeps your rights, work included, for up to 12 weeks.',
      'Rinnova online prima della scadenza: la conferma di ricezione mantiene i tuoi diritti, lavoro compreso, fino a 12 settimane.', 'IE-SRC-12'] },
    { p: 'us other', t: ['Filing the general permit on day 27 of the advert means automatic refusal: wait the full 28 days.',
      'Presentare il permesso generale al 27° giorno dell’annuncio significa rifiuto automatico: aspetta tutti i 28 giorni.', 'IE-SRC-05'] },
    { p: 'eu uk us other', t: ['Airlines and ferries ask for a passport even on direct UK–Ireland routes, although immigration law does not.',
      'Compagnie aeree e traghetti chiedono il passaporto anche sulle tratte dirette Regno Unito–Irlanda, sebbene la legge sull’immigrazione non lo imponga.', 'IE-SRC-20'] }
  ],

  open: [
    { st: 'open', t: ['First registrations are only in Dublin and appointments are scarce, so some people pass the 90 days stamped at the border before getting one.',
      'Le prime registrazioni si fanno solo a Dublino e gli appuntamenti sono scarsi, quindi alcuni superano i 90 giorni timbrati alla frontiera prima di ottenerne uno.'] },
    { st: 'watch', t: ['Social-welfare offices differ on accepting an employer’s letter as proof of address for the PPS number.',
      'Gli uffici della previdenza non concordano sull’accettare la lettera del datore come prova d’indirizzo per il numero PPS.'] },
    { st: 'open', t: ['Many employers hire graduates on Stamp 1G but will not sponsor a permit at €40,904 when junior salaries are lower.',
      'Molti datori assumono laureati con Stamp 1G ma non sponsorizzano un permesso a 40.904 € quando gli stipendi junior sono più bassi.'] },
    { st: 'watch', t: ['How fast start-ups backed by Enterprise Ireland or IDA get the two-year exemption from the 50:50 rule is not set.',
      'Non sono fissati i tempi con cui le start-up sostenute da Enterprise Ireland o IDA ottengono la deroga di due anni alla regola 50:50.'] },
    { st: 'pending', t: ['The seasonal employment permit created in 2024 still waits for its regulations.',
      'Il permesso per lavoro stagionale creato nel 2024 attende ancora i regolamenti attuativi.'] }
  ]
});

/* Sources: generated by tools/visas-sources.js from research/visas_immigration/ireland/ireland_sources.md.
 * Do not edit by hand: change the register, then run the tool. */
ATLAS.visaSources('IE', {
  "IE-SRC-21": ["Citizens Information Board: Residence Rights of EU/EEA and Swiss Citizens in Ireland","https://www.citizensinformation.ie/en/moving-country/moving-to-ireland/rights-of-residence-in-ireland/residence-rights-eu-national/","2026-10-05"],
  "IE-SRC-20": ["Common Travel Area (CTA) Concordat","https://www.dfa.ie/brexit/getting-ireland-brexit-ready/brexit-and-you/common-travel-area/","2026-10-05"],
  "IE-SRC-11": ["ISD: First Time Registration Requirements and Fees","https://www.irishimmigration.ie/registering-your-immigration-permission/how-to-register-your-immigration-permission-for-the-first-time/requirements-and-fees/","2026-10-05"],
  "IE-SRC-18": ["Department of Social Protection (DSP): Personal Public Service (PPS) Number Allocation Guidelines","https://services.mywelfare.ie/en/topics/identity-services/personal-public-service-pps-number/","2026-10-05"],
  "IE-SRC-17": ["Revenue Commissioners: Emergency Basis of Tax & Emergency USC","https://revenue.ie/en/jobs-and-pensions/emergency-tax/index.aspx","2026-10-05"],
  "IE-SRC-07": ["ISD (Immigration Service Delivery - Dept. of Justice): Immigration Permission Stamps","https://www.irishimmigration.ie/registering-your-immigration-permission/information-on-registering/immigration-permission-stamps/","2026-10-05"],
  "IE-SRC-06": ["Oireachtas: Immigration Act 2004 (Act No. 1 of 2004)","https://www.irishstatutebook.ie/eli/2004/act/1/enacted/en/html","2026-10-05"],
  "IE-SRC-22": ["Trattato sul Funzionamento dell'Unione Europea (TFUE), Protocollo n. 21","https://eur-lex.europa.eu/legal-content/IT/TXT/?uri=CELEX:12016E/PRO/21","2026-10-05"],
  "IE-SRC-23": ["Direttiva (UE) 2016/801 del Parlamento Europeo e del Consiglio","https://eur-lex.europa.eu/eli/dir/2016/801/oj","2026-10-05"],
  "IE-SRC-09": ["ISD: Student Visa and Registration Financial Requirements","https://www.irishimmigration.ie/coming-to-study-in-ireland/what-are-my-study-options/a-fee-paying-private-primary-or-secondary-school/information-on-student-finances/","2026-10-05"],
  "IE-SRC-10": ["ISD: Private Medical Insurance Requirements for Stamp 2 / Non-EEA Students","https://www.irishimmigration.ie/coming-to-study-in-ireland/","2026-10-05"],
  "IE-SRC-01": ["Oireachtas: Employment Permits Act 2024 (Act No. 34 of 2024)","https://www.irishstatutebook.ie/eli/2024/act/34/enacted/en/html","2026-10-05"],
  "IE-SRC-24": ["Workplace Relations Commission / Low Pay Commission: National Minimum Wage Rates 2026","https://www.workplacerelations.ie/en/what_you_should_know/hours-and-wages/national-minimum-wage/","2026-10-05"],
  "IE-SRC-08": ["ISD: Third Level Graduate Programme (Stamp 1G) Policy","https://www.irishimmigration.ie/my-situation-has-changed-since-i-arrived-in-ireland/third-level-graduate-programme/","2026-10-05"],
  "IE-SRC-02": ["DETE (Department of Enterprise, Trade and Employment): Critical Skills Employment Permit (CSEP) Guidelines 2026","https://enterprise.gov.ie/en/what-we-do/workplace-and-skills/employment-permits/permit-types/critical-skills-employment-permit/","2026-10-05"],
  "IE-SRC-13": ["ISD: Policy Document on Non-EEA Family Reunification","https://www.irishimmigration.ie/coming-to-join-family-in-ireland/","2026-10-05"],
  "IE-SRC-05": ["DETE: Labour Market Needs Test (LMNT) Operational Rules","https://enterprise.gov.ie/en/what-we-do/workplace-and-skills/employment-permits/employment-permit-eligibility/labour-market-needs-test/","2026-10-05"],
  "IE-SRC-26": ["ISD: Notice: changes to right-to-work for spouses and partners of General Employment Permit and Intra-Company Transfer…","https://www.irishimmigration.ie/?p=19872","2026-10-06"],
  "IE-SRC-03": ["DETE: General Employment Permit (GEP) Guidelines 2026","https://enterprise.gov.ie/en/what-we-do/workplace-and-skills/employment-permits/permit-types/general-employment-permit/","2026-10-05"],
  "IE-SRC-14": ["European Communities (Eligibility for Inclusion in a Hosting Agreement) Regulations 2007 (S.I. No. 257/2007)","https://www.irishstatutebook.ie/eli/2007/si/257/made/en/print","2026-10-05"],
  "IE-SRC-15": ["EURAXESS Ireland / Irish Universities Association (IUA): Hosting Agreement Scheme for Researchers & Salary Scales","https://www.euraxess.ie/ireland/fast-track-work-permit-hosting-agreement","2026-10-05"],
  "IE-SRC-16": ["Oireachtas: Taxes Consolidation Act 1997, Section 192","https://www.irishstatutebook.ie/eli/1997/act/39/section/192/enacted/en/html","2026-10-05"],
  "IE-SRC-19": ["Department of Foreign Affairs (DFA): Working Holiday Authorisation (WHA) Programme","https://www.dfa.ie/travel/visas/working-holiday-programmes/","2026-10-05"],
  "IE-SRC-25": ["Residential Tenancies Board (RTB): Residential Tenancies Act 2004 (as amended) & Rent Index","https://www.rtb.ie/register-a-tenancy","2026-10-05"],
  "IE-SRC-12": ["ISD: Online Renewal of Immigration Registration","https://www.irishimmigration.ie/registering-your-immigration-permission/how-to-renew-your-current-permission/","2026-10-05"]
});
