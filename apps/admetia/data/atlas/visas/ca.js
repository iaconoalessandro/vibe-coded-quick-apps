/* Visas and permits: Canada. From research/visas_immigration/canada/
 * (guide, source register, open questions), council check of 5 Oct 2026.
 * EU and UK passports only; the research takes an Italian citizen as reference. */
ATLAS.addVisas({
  id: 'CA',
  folder: 'canada',
  checked: '2026-10-05',
  review: '2027-03-31',

  routes: [
    { k: 'study', p: 'eu uk', v: 'open',
      name: ['Study permit', 'Study permit'], law: 'IRPR Part 12',
      t: [
        ['Canada caps study permits at 408,000 in 2026. Bachelor’s and college students need a provincial attestation letter first; master’s and PhD students at public institutions have been exempt since 1 January 2026. In Québec you also need a CAQ.',
          'Il Canada limita gli study permit a 408.000 nel 2026. Gli studenti di bachelor e college hanno prima bisogno della lettera di attestazione provinciale; gli studenti di master e dottorato in istituzioni pubbliche ne sono esenti dal 1° gennaio 2026. In Québec serve anche il CAQ.', 'CA-SRC-03 CA-SRC-05'],
        ['Off campus you may work 24 hours a week in term and full time in scheduled breaks; going over can cost you your status.',
          'Fuori dal campus si può lavorare 24 ore a settimana durante i corsi e a tempo pieno nelle pause previste; superarle può costare lo status.', 'CA-SRC-06 CA-SRC-01']
      ],
      f: [
        [['Funds outside Québec', 'Mezzi fuori dal Québec'], ['CAD 23,448 a year, plus first-year tuition and CAD 2,000 for travel', '23.448 CAD l’anno, più la retta del primo anno e 2.000 CAD per il viaggio'], 'CA-SRC-04'],
        [['Funds in Québec', 'Mezzi in Québec'], ['CAD 24,617 a year, plus tuition', '24.617 CAD l’anno, più la retta'], 'CA-SRC-05'],
        [['Fees', 'Costi'], ['CAD 150 + CAD 85 biometrics; CAQ CAD 135', '150 CAD + 85 CAD di biometria; CAQ 135 CAD'], 'CA-SRC-10 CA-SRC-05']
      ] },

    { k: 'intern', p: 'eu uk', v: 'sponsor',
      name: ['Co-op placements and IEC International Co-op', 'Co-op e IEC International Co-op'], law: 'IRPR 205; IEC',
      t: [
        ['Since 1 April 2026 a required co-op placement in a Canadian programme is covered by the study permit, up to half the programme, with no separate permit.',
          'Dal 1° aprile 2026 un tirocinio co-op obbligatorio in un programma canadese è coperto dallo study permit, fino a metà del programma, senza permesso separato.', 'CA-SRC-07'],
        ['Students enrolled abroad can use the IEC International Co-op stream where their country’s youth agreement includes it (Italians up to 35), with a placement agreement and a Canadian offer.',
          'Chi studia all’estero può usare l’IEC International Co-op se l’accordo giovanile del proprio paese lo prevede (italiani fino a 35 anni), con una convenzione di tirocinio e un’offerta canadese.', 'CA-SRC-11']
      ],
      f: [[['Fees', 'Costi'], ['IEC CAD 184.75; employer CAD 230', 'IEC 184,75 CAD; datore 230 CAD'], 'CA-SRC-10 CA-SRC-14']] },

    { k: 'search', p: 'eu uk', v: 'open',
      name: ['Post-Graduation Work Permit', 'Post-Graduation Work Permit'], law: 'IRPR 205',
      t: [
        ['An open permit after a Canadian degree: three years after any master’s of at least eight months, in any field. You need CLB 7 in English or French and must apply within 180 days of the official completion letter.',
          'Un permesso aperto dopo una laurea canadese: tre anni dopo qualsiasi master di almeno otto mesi, in qualsiasi campo. Serve il livello CLB 7 in inglese o francese e la domanda va fatta entro 180 giorni dalla lettera ufficiale di fine studi.', 'CA-SRC-08'],
        ['Apply before the study permit expires and you may work full time while waiting.',
          'Facendo domanda prima che scada lo study permit si può lavorare a tempo pieno durante l’attesa.', 'CA-SRC-09']
      ],
      f: [[['Fees', 'Costi'], ['CAD 155 + CAD 100 open-permit fee = CAD 255', '155 CAD + 100 CAD per il permesso aperto = 255 CAD'], 'CA-SRC-10']],
      w: ['Leave Canada while the application is pending and you lose the right to work until the permit is issued.',
        'Se lasci il Canada mentre la domanda è in corso perdi il diritto di lavorare fino al rilascio del permesso.', 'CA-SRC-09'] },

    { k: 'work', p: 'eu', v: 'sponsor',
      name: ['CETA work permits', 'Permessi di lavoro CETA'], law: 'IRPR 204(a); CETA ch. 10',
      t: [['EU citizens skip the labour-market test as contractual service suppliers (degree and three years of experience), independent professionals, intra-company transferees, investors or technologists. The employer files the offer on the IRCC portal.',
        'I cittadini UE saltano il test del mercato come fornitori di servizi a contratto (laurea e tre anni di esperienza), professionisti indipendenti, trasferimenti intra-societari, investitori o tecnici. Il datore presenta l’offerta sul portale IRCC.', 'CA-SRC-14 CA-SRC-10']],
      f: [[['Fees', 'Costi'], ['CAD 155 + CAD 85 biometrics; employer CAD 230', '155 CAD + 85 CAD di biometria; datore 230 CAD'], 'CA-SRC-10 CA-SRC-14']] },

    { k: 'work', p: 'eu uk', v: 'sponsor',
      name: ['LMIA work permit and Global Talent Stream', 'Permesso con LMIA e Global Talent Stream'], law: 'IRPR Part 11',
      t: [['The employer must show no Canadian can fill the job; the Global Talent Stream decides in 10 business days for in-demand tech roles. Low-wage hires are capped at 10% of staff in cities with unemployment of 6% or more.',
        'Il datore deve dimostrare che nessun canadese può coprire il posto; il Global Talent Stream decide in 10 giorni lavorativi per i ruoli tecnologici richiesti. Le assunzioni a basso salario sono limitate al 10% del personale nelle città con disoccupazione dal 6% in su.', 'CA-SRC-13']],
      f: [[['Fees', 'Costi'], ['CAD 155 + CAD 85 biometrics; employer CAD 1,000', '155 CAD + 85 CAD di biometria; datore 1.000 CAD'], 'CA-SRC-10 CA-SRC-13']],
      w: ['The employer must pay the CAD 1,000 itself; paying it back is illegal.',
        'Il datore deve pagare i 1.000 CAD di tasca propria; rimborsarli è illegale.', 'CA-SRC-13'] },

    { k: 'research', p: 'eu uk', v: 'sponsor',
      name: ['Visiting researchers and PhDs', 'Ricercatori in visita e dottorati'], law: 'IRPR 186(x), 205',
      t: [
        ['Unpaid research at a Canadian university up to 120 days needs no work permit. A master’s or PhD student enrolled abroad can come 4 to 12 months as a visiting student researcher, with the host filing the offer.',
          'La ricerca non retribuita in un’università canadese fino a 120 giorni non richiede permesso di lavoro. Uno studente di master o dottorato iscritto all’estero può venire da 4 a 12 mesi come visiting student researcher, con l’ente ospitante che presenta l’offerta.', 'CA-SRC-15'],
        ['PhD students may work on campus as teaching or research assistants without limit; graduate scholarships are free of federal income tax, and the spouse gets an open work permit.',
          'I dottorandi possono lavorare nel campus come assistenti alla didattica o alla ricerca senza limiti; le borse post-laurea sono esenti dall’imposta federale, e il coniuge ottiene un permesso di lavoro aperto.', 'CA-SRC-01 CA-SRC-26 CA-SRC-16']
      ],
      f: [[['Fees, visiting researcher', 'Costi, ricercatore in visita'], ['CAD 155; host CAD 230', '155 CAD; ente 230 CAD'], 'CA-SRC-10 CA-SRC-15']] },

    { k: 'whv', p: 'eu', v: 'limited',
      name: ['International Experience Canada', 'International Experience Canada'], law: 'bilateral youth agreements',
      t: [
        ['Terms depend on your country: Italians aged 18 to 35 get 12 months, twice at most; Germany, France, Ireland and Spain allow up to 24 months. Places are drawn from a pool.',
          'Le condizioni dipendono dal paese: gli italiani dai 18 ai 35 anni ottengono 12 mesi, al massimo due volte; Germania, Francia, Irlanda e Spagna arrivano a 24 mesi. I posti si assegnano per estrazione.', 'CA-SRC-11'],
        ['Bulgaria, Cyprus, Hungary, Malta and Romania have no agreement: their citizens can only go through a paid recognised organisation.',
          'Bulgaria, Cipro, Ungheria, Malta e Romania non hanno accordi: i loro cittadini possono passare solo da un’organizzazione riconosciuta a pagamento.', 'CA-SRC-11']
      ],
      f: [
        [['Fees', 'Costi'], ['CAD 184.75 + CAD 100 + CAD 85 = CAD 369.75', '184,75 CAD + 100 CAD + 85 CAD = 369,75 CAD'], 'CA-SRC-10'],
        [['Money at the border', 'Soldi alla frontiera'], ['CAD 2,500', '2.500 CAD'], 'CA-SRC-11']
      ],
      w: ['Health insurance must cover the whole stay: the border officer cuts the permit to the policy’s length, for good.',
        'L’assicurazione sanitaria deve coprire tutto il soggiorno: l’agente di frontiera riduce il permesso alla durata della polizza, definitivamente.', 'CA-SRC-12'] },

    { k: 'whv', p: 'uk', v: 'limited',
      name: ['International Experience Canada', 'International Experience Canada'], law: 'bilateral youth agreements',
      t: [['The UK has its own youth agreement with Canada. The research covers the Italian terms only, so check the British age limit and length on the IEC page.',
        'Il Regno Unito ha un proprio accordo giovanile con il Canada. La ricerca copre solo le condizioni italiane, quindi verifica l’età massima e la durata britanniche sulla pagina IEC.', 'CA-SRC-11']] },

    { k: 'short', p: 'eu uk', v: 'open',
      name: ['Visitor with an eTA', 'Visitatore con eTA'], law: 'IRPR 188',
      t: [
        ['EU and UK citizens fly in with an eTA, valid five years, for stays of up to six months with no work.',
          'I cittadini UE e britannici arrivano in aereo con l’eTA, valida cinque anni, per soggiorni fino a sei mesi senza lavorare.', 'CA-SRC-10 CA-SRC-01'],
        ['An exchange semester of up to six months needs no study permit, but it never leads to a post-graduation work permit.',
          'Un semestre di scambio fino a sei mesi non richiede lo study permit, ma non porta mai al permesso di lavoro post-laurea.', 'CA-SRC-01 CA-SRC-08']
      ],
      f: [[['eTA', 'eTA'], ['CAD 7', '7 CAD'], 'CA-SRC-10']] },

    { k: 'stay', p: 'eu uk', v: 'limited',
      name: ['Permanent residence', 'Residenza permanente'], law: 'Express Entry',
      t: [['After the work permit, permanent residence now runs almost only through Express Entry’s Canadian Experience Class, whose cut-offs were 518 to 523 points in August and September 2026. Ontario’s master’s graduate stream closed on 30 May 2026, British Columbia’s on 7 January 2025 and Québec’s PEQ for graduates on 19 November 2025.',
        'Dopo il permesso di lavoro, la residenza permanente passa ormai quasi solo dalla Canadian Experience Class di Express Entry, con soglie tra 518 e 523 punti ad agosto e settembre 2026. Il canale per laureati magistrali dell’Ontario ha chiuso il 30 maggio 2026, quello della British Columbia il 7 gennaio 2025 e il PEQ per laureati del Québec il 19 novembre 2025.', 'CA-SRC-20 CA-SRC-17 CA-SRC-18 CA-SRC-19']] }
  ],

  arrival: [
    { k: 'before', p: 'eu uk', t: [
      ['Renew your passport first if it expires soon: no Canadian permit can be issued beyond your passport’s expiry date, and the lost months are not given back.',
        'Rinnova prima il passaporto se scade presto: nessun permesso canadese può essere rilasciato oltre la scadenza del passaporto, e i mesi persi non vengono restituiti.', 'CA-SRC-01 CA-SRC-12'],
      ['Bring ready cash: without a Canadian credit history, landlords in Toronto and Vancouver often ask for 3 to 6 months’ rent up front (CAD 5,000 to 11,000).',
        'Porta liquidità pronta: senza una storia creditizia canadese, i proprietari a Toronto e Vancouver chiedono spesso da 3 a 6 mesi di affitto anticipati (5.000-11.000 CAD).', 'CA-SRC-29']
    ] },
    { k: 'before', p: 'eu', t: [
      ['Working holiday participants (IEC) must show insurance covering repatriation, hospital and medical care for the whole stay at the port of entry.',
        'I partecipanti alla vacanza-lavoro (IEC) devono mostrare al punto d’ingresso un’assicurazione che copra rimpatrio, ricovero e cure per tutto il soggiorno.', 'CA-SRC-12']
    ] },
    { k: 'address', p: 'eu uk', none: true },
    { k: 'card', p: 'eu uk', t: [
      ['Your study or work permit is issued at the port of entry; keep the original paper permit, which you need for every later step.',
        'Il permesso di studio o di lavoro viene rilasciato al punto d’ingresso; conserva il permesso cartaceo originale, che ti serve per tutti i passaggi successivi.', 'CA-SRC-22 CA-SRC-02']
    ] },
    { k: 'number', p: 'eu uk', t: [
      ['Apply at once, in person at a Service Canada office, for your 9-digit Social Insurance Number with the original permit and passport: it is free and issued in 15 to 20 minutes, while the postal route takes up to a month.',
        'Chiedi subito, di persona in un ufficio Service Canada, il Social Insurance Number a 9 cifre con il permesso originale e il passaporto: è gratuito e viene rilasciato in 15-20 minuti, mentre per posta serve fino a un mese.', 'CA-SRC-22'],
      ['Staying over 183 days with home ties, you are treated as a tax resident and file a T1 return on worldwide income.',
        'Se resti oltre 183 giorni con legami residenziali, sei considerato residente fiscale e presenti la dichiarazione T1 sui redditi ovunque prodotti.', 'CA-SRC-26']
    ] },
    { k: 'health', p: 'eu uk', t: [
      ['Health cover depends on the province: in Ontario students are enrolled in the university plan UHIP (CAD 948 a year); in British Columbia students pay into MSP (CAD 75 a month) after a 3-month wait; in Quebec Italian students need the university’s private policy (CAD 900 to 1,200 a year).',
        'La copertura sanitaria dipende dalla provincia: in Ontario gli studenti sono iscritti al piano universitario UHIP (948 CAD l’anno); in British Columbia gli studenti pagano l’MSP (75 CAD al mese) dopo 3 mesi di attesa; in Québec gli studenti italiani hanno bisogno della polizza privata dell’università (900-1.200 CAD l’anno).', 'CA-SRC-23 CA-SRC-24 CA-SRC-25']
    ] },
    { k: 'bank', p: 'eu uk', none: true },
    { k: 'keep', p: 'eu uk', t: [
      ['Apply for a new permit before yours expires and do not leave Canada: you then keep working on maintained status while you wait, for instance between your studies and the post-graduation work permit. Going to a US land border to get a permit issued (flagpoling) is no longer allowed.',
        'Chiedi il nuovo permesso prima della scadenza e non lasciare il Canada: continui così a lavorare in regime di status mantenuto durante l’attesa, per esempio tra gli studi e il permesso di lavoro post-laurea. Andare a un confine terrestre con gli Stati Uniti per farsi rilasciare un permesso (flagpoling) non è più consentito.', 'CA-SRC-09 CA-SRC-21']
    ] }
  ],

  traps: [
    { p: 'eu uk', t: ['“Flagpoling”, stepping into the US and back to get a permit at the land border, is no longer allowed: apply online.',
      'Il “flagpoling”, uscire negli Stati Uniti e rientrare per farsi rilasciare un permesso alla frontiera terrestre, non è più ammesso: si fa domanda online.', 'CA-SRC-21'] },
    { p: 'eu uk', t: ['No permit is issued beyond your passport’s expiry: renew the passport before applying.',
      'Nessun permesso viene rilasciato oltre la scadenza del passaporto: rinnovalo prima di fare domanda.', 'CA-SRC-01'] },
    { p: 'eu uk', t: ['With no Canadian credit history, landlords in Toronto and Vancouver ask for three to six months up front.',
      'Senza storia creditizia canadese, i proprietari a Toronto e Vancouver chiedono da tre a sei mensilità anticipate.', 'CA-SRC-29'] },
    { p: 'eu', t: ['Italian students in Québec have no public health cover (RAMQ), unlike French or Belgian students, and must buy the university plan.',
      'Gli studenti italiani in Québec non hanno copertura sanitaria pubblica (RAMQ), a differenza di francesi o belgi, e devono acquistare il piano dell’università.', 'CA-SRC-25'] }
  ],

  open: [
    { st: 'watch', t: ['Express Entry cut-offs for the Canadian Experience Class sit above what a typical European master’s graduate with a year of experience scores.',
      'Le soglie di Express Entry per la Canadian Experience Class sono sopra il punteggio di un tipico laureato magistrale europeo con un anno di esperienza.'] },
    { st: 'open', t: ['It is not clear what happens once the 49,000 study permits reserved for master’s and PhD students run out.',
      'Non è chiaro cosa succeda quando si esauriscono i 49.000 study permit riservati a master e dottorati.'] },
    { st: 'open', t: ['Universities treat unpaid thesis stays between 120 days and six months differently.',
      'Le università trattano in modo diverso i soggiorni di tesi non retribuiti tra 120 giorni e sei mesi.'] }
  ]
});

/* Sources: generated by tools/visas-sources.js from research/visas_immigration/canada/canada_sources.md.
 * Do not edit by hand: change the register, then run the tool. */
ATLAS.visaSources('CA', {
  "CA-SRC-03": ["Immigration, Refugees and Citizenship Canada (IRCC): Provincial Attestation Letter (PAL): Exemptions and 2026 Allocation Notice","https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada/study-permit/get-documents/provincial-attestation-letter.html","2026-10-05"],
  "CA-SRC-05": ["Ministère de l'Immigration, de la Francisation et de…: Conditions requises pour séjourner au Québec à titre d'étudiant étranger","https://www.quebec.ca/education/etudier-au-quebec/conditions-requises","2026-10-05"],
  "CA-SRC-06": ["Immigration, Refugees and Citizenship Canada (IRCC): Work off campus as an international student","https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada/work/work-off-campus.html","2026-10-05"],
  "CA-SRC-01": ["Department of Justice Canada / Parl. of Canada: Immigration and Refugee Protection Act (SC 2001, c. 27","https://laws-lois.justice.gc.ca/eng/acts/i-2.5/","2026-10-05"],
  "CA-SRC-04": ["Immigration, Refugees and Citizenship Canada (IRCC): Study permit: Financial capacity requirements (Proof of Funds)","https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada/study-permit/get-documents.html#doc-needed","2026-10-05"],
  "CA-SRC-10": ["Treasury Board of Canada / Canada Gazette: Service Fees Act: IRCC Indexed Fee List 2026","https://www.gazette.gc.ca/rp-pr/p1/2026/index-eng.html","2026-10-05"],
  "CA-SRC-07": ["Immigration, Refugees and Citizenship Canada (IRCC): Work as a co-op student or intern - Program Delivery Update","https://www.canada.ca/en/immigration-refugees-citizenship/corporate/publications-manuals/operational-bulletins-manuals/temporary-residents/study-permits/co-op.html","2026-10-05"],
  "CA-SRC-11": ["Immigration, Refugees and Citizenship Canada (IRCC): International Experience Canada (IEC): Bilateral Agreements & Pools","https://www.canada.ca/en/immigration-refugees-citizenship/services/work-canada/iec/eligibility.html","2026-10-05"],
  "CA-SRC-14": ["IRCC / Global Affairs Canada: CETA (Comprehensive Economic and Trade Agreement) Work Permit Exemption - IRPR R204(a)","https://www.canada.ca/en/immigration-refugees-citizenship/corporate/publications-manuals/operational-bulletins-manuals/temporary-residents/foreign-workers/international-free-trade-agreements/ceta.html","2026-10-05"],
  "CA-SRC-08": ["Immigration, Refugees and Citizenship Canada (IRCC): Post-Graduation Work Permit (PGWP) eligibility criteria","https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada/work/after-graduation/eligibility.html","2026-10-05"],
  "CA-SRC-09": ["Immigration, Refugees and Citizenship Canada (IRCC): Maintained status and work authorization under IRPR R186(w)","https://www.canada.ca/en/immigration-refugees-citizenship/corporate/publications-manuals/operational-bulletins-manuals/temporary-residents/visitors/implied-status-extending-stay.html","2026-10-05"],
  "CA-SRC-13": ["Employment and Social Development Canada (ESDC): Temporary Foreign Worker Program: Labour Market Impact Assessment (LMIA)","https://www.canada.ca/en/employment-social-development/services/foreign-workers/median-hourly-wages.html","2026-10-05"],
  "CA-SRC-15": ["Immigration, Refugees and Citizenship Canada (IRCC): Visiting Academics and Researchers (LMIA Exemption C22 / C52 / R186(x))","https://www.canada.ca/en/immigration-refugees-citizenship/corporate/publications-manuals/operational-bulletins-manuals/temporary-residents/foreign-workers/exemption-codes/canadian-interests-significant-benefit-researchers-c22.html","2026-10-05"],
  "CA-SRC-26": ["Canada Revenue Agency (CRA): Determining Your Tax Residency Status (Income Tax Folio S5-F1-C1)","https://www.canada.ca/en/revenue-agency/services/tax/technical-information/income-tax/income-tax-folios-index/series-5-international-residency/folio-1-residency/income-tax-folio-s5-f1-c1-determining-an-individual-s-residence-status.html","2026-10-05"],
  "CA-SRC-16": ["Immigration, Refugees and Citizenship Canada (IRCC): Open Work Permit for Spouses of International Students (SOWP)","https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada/work/help-your-spouse-partner-work.html","2026-10-05"],
  "CA-SRC-12": ["Canada Border Services Agency (CBSA) / IRCC: IEC Mandatory Insurance Requirements at Port of Entry","https://www.canada.ca/en/immigration-refugees-citizenship/services/work-canada/iec/apply-work-permit.html#insurance","2026-10-05"],
  "CA-SRC-20": ["Immigration, Refugees and Citizenship Canada (IRCC): Express Entry Rounds of Invitations: Canadian Experience Class (CEC)","https://www.canada.ca/en/immigration-refugees-citizenship/corporate/mandate/policies-operational-instructions-agreements/express-entry-rounds.html","2026-10-05"],
  "CA-SRC-17": ["Government of Ontario / MLITSD: Ontario Immigrant Nominee Program: OINP Masters Graduate Stream Closure","https://www.ontario.ca/page/oinp-masters-graduate-stream","2026-10-05"],
  "CA-SRC-18": ["WelcomeBC / Province of British Columbia: BC Provincial Nominee Program (BC PNP): Post-Graduate Streams","https://www.welcomebc.ca/immigrate-to-b-c/bc-pnp-skills-immigration","2026-10-05"],
  "CA-SRC-19": ["Ministère de l'Immigration, de la Francisation et de…: Programme de l'expérience québécoise (PEQ) Diplômés - Réforme législativa","https://www.quebec.ca/immigration/permanente/travailleurs-qualifies/programme-experience-quebecoise","2026-10-05"],
  "CA-SRC-29": ["Canada Mortgage and Housing Corporation (CMHC): Rental Market Report & Purpose-Built Rental Survey","https://www.cmhc-schl.gc.ca/professionals/housing-markets-data-and-research/market-reports/rental-market-reports-major-centres","2026-10-05"],
  "CA-SRC-22": ["Service Canada / Employment and Social Development Canada: Social Insurance Number (SIN): Application Process for Temporary Residents","https://www.canada.ca/en/employment-social-development/services/sin.html","2026-10-05"],
  "CA-SRC-02": ["Immigration, Refugees and Citizenship Canada (IRCC): Study permit: Get a study permit","https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada/study-permit.html","2026-10-05"],
  "CA-SRC-23": ["Ontario Ministry of Health / UHIP Administration: Ontario Health Insurance Coverage & University Health Insurance Plan (UHIP)","https://uhip.ca","2026-10-05"],
  "CA-SRC-24": ["Government of British Columbia / Health Insurance BC: Medical Services Plan (MSP) for International Students","https://www2.gov.bc.ca/gov/content/health/health-drug-coverage/msp/bc-residents/eligibility-and-enrolment/are-you-eligible/international-students","2026-10-05"],
  "CA-SRC-25": ["Régie de l'assurance maladie du Québec (RAMQ): Ententes de sécurité sociale avec d'autres pays: Étudiants","https://www.ramq.gouv.qc.ca/fr/citoyens/assurance-maladie/ententes-securite-sociale-autres-pays","2026-10-05"],
  "CA-SRC-21": ["Canada Border Services Agency (CBSA): Border Enforcement and Restriction on Flagpoling at Land POEs","https://www.cbsa-asfc.gc.ca/travel-voyage/settle-etablir-eng.html","2026-10-05"]
});
