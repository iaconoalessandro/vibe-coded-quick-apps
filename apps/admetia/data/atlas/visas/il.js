/* Visas and permits: Israel. From research/visas_immigration/israel/
 * (guide, source register, open questions), council check of 5 Oct 2026 and the
 * B/1 fee note of 6 Oct 2026 (2026 fees from a secondary source). EU and UK only. */
ATLAS.addVisas({
  id: 'IL',
  folder: 'israel',
  checked: '2026-10-06',
  review: '2027-03-31',

  routes: [
    { k: 'study', p: 'eu uk', v: 'open',
      name: ['A/2 student visa', 'Visto studentesco A/2'], law: 'PIBA procedure 5.8.0002',
      t: [
        ['For a programme at an institution accredited by the Council for Higher Education, applied for at a consulate before travelling, also for an exchange semester. Valid a year at a time, renewed in Israel.',
          'Per un programma in un’istituzione accreditata dal Consiglio per l’istruzione superiore, si chiede in consolato prima di partire, anche per un semestre di scambio. Vale un anno alla volta, rinnovato in Israele.', 'IL-SRC-06 IL-SRC-16 IL-SRC-14'],
        ['The visa bans all outside work; master’s and PhD students may only be hired by their university as teaching assistants.',
          'Il visto vieta ogni lavoro esterno; gli studenti di master e dottorato possono essere assunti solo dalla propria università come assistenti alla didattica.', 'IL-SRC-06']
      ],
      f: [
        [['Funds, recommended', 'Mezzi, consigliati'], ['$1,500 to $2,000 a month', 'da 1.500 a 2.000 $ al mese'], 'IL-SRC-06'],
        [['Fees', 'Costi'], ['€52 at the consulate; 205 NIS to renew', '52 € in consolato; 205 NIS per il rinnovo'], 'IL-SRC-14 IL-SRC-10']
      ] },

    { k: 'intern', p: 'eu uk', v: 'limited',
      name: ['Internships', 'Tirocini'], law: 'Entry into Israel Law',
      t: [['There is no internship visa, and an internship on an ETA-IL is illegal work. Students enrolled in Israel may do a required placement; otherwise a company must hire you on a B/1, or you join an accredited Masa Israel programme (ages 18 to 35) on an A/2.',
        'Non esiste un visto per tirocinio, e un tirocinio con l’ETA-IL è lavoro irregolare. Gli iscritti in Israele possono fare un tirocinio obbligatorio; altrimenti un’azienda deve assumerti con un B/1, o partecipi a un programma Masa Israel accreditato (dai 18 ai 35 anni) con un A/2.', 'IL-SRC-01 IL-SRC-02 IL-SRC-06 IL-SRC-18']] },

    { k: 'search', p: 'eu uk', v: 'limited',
      name: ['Hi-tech route for Israeli STEM graduates', 'Percorso hi-tech per laureati STEM in Israele'], law: 'PIBA procedure 5.3.0043',
      t: [['There is no post-study visa. The one exception: companies certified by the Innovation Authority can hire graduates of Israeli universities in tech fields without the double-average-wage rule, for three years after graduating, within 500 permits a year. A European degree does not qualify.',
        'Non esiste un visto post-studio. L’unica eccezione: le aziende certificate dall’Innovation Authority possono assumere laureati di università israeliane in materie tecnologiche senza la regola del doppio salario medio, per tre anni dalla laurea, entro 500 permessi l’anno. Una laurea europea non vale.', 'IL-SRC-01 IL-SRC-04 IL-SRC-03']] },

    { k: 'work', p: 'eu uk', v: 'sponsor',
      name: ['B/1 foreign expert', 'B/1 esperto straniero'], law: 'PIBA procedures 5.3.0041, 5.3.0043',
      t: [
        ['The employer must pay a base salary of at least twice the national average, with no bonuses or allowances counted; one year at a time, up to 63 months. Ordinary jobs below that level are closed to foreigners.',
          'Il datore deve pagare uno stipendio base di almeno il doppio della media nazionale, senza contare bonus o indennità; un anno alla volta, fino a 63 mesi. I lavori ordinari sotto quel livello sono chiusi agli stranieri.', 'IL-SRC-03 IL-SRC-09 IL-SRC-02'],
        ['Tech companies certified by the Innovation Authority get a decision in 6 to 10 working days, and the spouse gets an open work permit.',
          'Le aziende tecnologiche certificate dall’Innovation Authority ottengono una decisione in 6-10 giorni lavorativi, e il coniuge riceve un permesso di lavoro aperto.', 'IL-SRC-04 IL-SRC-11'],
        ['For tasks of up to 90 days a year, the STEP route skips the salary rule for visa-exempt nationals.',
          'Per incarichi fino a 90 giorni l’anno, il percorso STEP salta la regola salariale per chi è esente da visto.', 'IL-SRC-05']
      ],
      f: [
        [['Salary', 'Stipendio'], ['27,132 NIS a month gross', '27.132 NIS lordi al mese'], 'IL-SRC-09'],
        [['Employer fees, 2026 (secondary source)', 'Costi del datore, 2026 (fonte secondaria)'], ['1,420 NIS application + 11,525 NIS a year', '1.420 NIS di domanda + 11.525 NIS l’anno'], 'IL-SRC-10']
      ],
      w: ['The employer may not pass these fees on to you; spouses of ordinary experts may not work.',
        'Il datore non può addebitarti queste tasse; i coniugi degli esperti ordinari non possono lavorare.', 'IL-SRC-02 IL-SRC-03'] },

    { k: 'research', p: 'eu uk', v: 'sponsor',
      name: ['Researchers and PhDs', 'Ricercatori e dottorati'], law: 'Income Tax Ordinance 9(29)',
      t: [
        ['Visiting researchers, post-docs and PhD students on a fellowship hold an A/2, and fellowships from recognised institutions are free of income tax. Researchers on an employment contract hold a B/1.',
          'Ricercatori in visita, post-doc e dottorandi con borsa hanno un A/2, e le borse di istituzioni riconosciute sono esenti da imposta sul reddito. I ricercatori con contratto di lavoro hanno un B/1.', 'IL-SRC-06 IL-SRC-13 IL-SRC-03'],
        ['Weizmann, Technion, Tel Aviv and Hebrew University offer international PhD students full packages with a stipend and no tuition.',
          'Weizmann, Technion, Tel Aviv e Hebrew University offrono ai dottorandi internazionali pacchetti completi con borsa e senza tasse.', 'IL-SRC-16']
      ] },

    { k: 'whv', p: 'eu', v: 'limited',
      name: ['Working holiday', 'Vacanza-lavoro'], law: 'bilateral agreements',
      t: [['Only for Germans, Austrians and Czechs among EU citizens (plus Australians, New Zealanders and South Koreans): aged 18 to 30, up to 12 months, at most three months per employer. Italy and other EU countries have no agreement.',
        'Tra i cittadini UE solo per tedeschi, austriaci e cechi (più australiani, neozelandesi e sudcoreani): dai 18 ai 30 anni, fino a 12 mesi, al massimo tre mesi per datore. L’Italia e gli altri paesi UE non hanno accordi.', 'IL-SRC-15']] },

    { k: 'whv', p: 'uk', v: 'closed',
      name: ['Working holiday', 'Vacanza-lavoro'], law: 'bilateral agreements',
      t: [['Israel has no working-holiday agreement with the UK.',
        'Israele non ha un accordo di vacanza-lavoro con il Regno Unito.', 'IL-SRC-15']] },

    { k: 'short', p: 'eu uk', v: 'open',
      name: ['ETA-IL', 'ETA-IL'], law: 'Entry into Israel Law',
      t: [['Since 1 January 2025 visa-exempt visitors need an ETA-IL before boarding: valid two years, up to 90 days a visit, with no work, internship or formal study.',
        'Dal 1° gennaio 2025 i visitatori esenti da visto hanno bisogno dell’ETA-IL prima dell’imbarco: valida due anni, fino a 90 giorni per visita, senza lavoro, tirocinio o studio formale.', 'IL-SRC-08 IL-SRC-01']],
      f: [[['ETA-IL', 'ETA-IL'], ['25 NIS', '25 NIS'], 'IL-SRC-08']] }
  ],

  arrival: [
    { k: 'before', p: 'eu uk', t: [
      ['Visitors need the electronic travel authorisation ETA-IL before flying. At Ben Gurion, security officers may ask to see your phone, chats and social media, and past travel to Iran, Lebanon, Syria, Iraq or Yemen triggers long extra checks.',
        'I visitatori hanno bisogno dell’autorizzazione elettronica ETA-IL prima del volo. A Ben Gurion, gli addetti alla sicurezza possono chiedere di vedere telefono, chat e social network, e viaggi passati in Iran, Libano, Siria, Iraq o Yemen fanno scattare lunghi controlli supplementari.', 'IL-SRC-08 IL-SRC-01 IL-SRC-19']
    ] },
    { k: 'address', p: 'eu uk', none: true },
    { k: 'card', p: 'eu uk', t: [
      ['Israel does not stamp passports: at the border you get a light-blue slip (Form 294) with your visa category, the only proof that your stay is legal. Keep it in your passport until you leave and photograph it straight away.',
        'Israele non timbra i passaporti: alla frontiera ricevi un tagliando azzurro (Form 294) con la categoria del visto, l’unica prova che il soggiorno è regolare. Conservalo nel passaporto fino alla partenza e fotografalo subito.', 'IL-SRC-01']
    ] },
    { k: 'number', p: 'eu uk', none: true },
    { k: 'health', p: 'eu uk', none: true },
    { k: 'bank', p: 'eu uk', t: [
      ['Israeli banks (Hapoalim, Leumi, Discount) are built around the 9-digit citizen ID number, which B/1 and A/2 visa holders do not have: there is no online onboarding, so go to a branch with an international desk.',
        'Le banche israeliane (Hapoalim, Leumi, Discount) sono costruite attorno al numero d’identità a 9 cifre dei cittadini, che i titolari di visti B/1 e A/2 non hanno: non c’è apertura online, quindi vai in una filiale con sportello internazionale.', 'IL-SRC-17']
    ] },
    { k: 'keep', p: 'eu uk', t: [
      ['Work (B/1) and student (A/2) visas are single-entry: before any trip abroad, apply through the MyVisit app 21 to 30 days ahead for a re-entry visa (inter-visa, 205 NIS), or the visa lapses as you leave. Emergency extensions in wartime do not count as one.',
        'I visti di lavoro (B/1) e per studenti (A/2) sono a ingresso singolo: prima di ogni viaggio all’estero, chiedi tramite l’app MyVisit con 21-30 giorni di anticipo il visto di rientro (inter-visa, 205 NIS), o il visto decade all’uscita. Le proroghe d’emergenza in tempo di guerra non valgono come tale.', 'IL-SRC-07 IL-SRC-10']
    ] }
  ],

  traps: [
    { p: 'eu uk', t: ['B/1 and A/2 visas are single-entry: leave without a re-entry permit, requested 21 to 30 days ahead, and the visa is cancelled at the border. Automatic wartime extensions do not count as one.',
      'I visti B/1 e A/2 sono a ingresso singolo: se parti senza un permesso di rientro, chiesto 21-30 giorni prima, il visto viene cancellato alla frontiera. Le proroghe automatiche in tempo di guerra non valgono come tale.', 'IL-SRC-07'] },
    { p: 'eu uk', t: ['Passports are not stamped: the blue entry slip is your only proof of legal stay. Keep it until you leave.',
      'I passaporti non vengono timbrati: il tagliando blu d’ingresso è l’unica prova del soggiorno regolare. Conservalo fino alla partenza.', 'IL-SRC-01'] },
    { p: 'eu uk', t: ['Security staff at Ben Gurion may ask to see phones and social media; past travel to Iran, Lebanon, Syria, Iraq, Yemen or the West Bank means long questioning.',
      'Il personale di sicurezza al Ben Gurion può chiedere di vedere telefoni e social; viaggi passati in Iran, Libano, Siria, Iraq, Yemen o Cisgiordania comportano lunghi interrogatori.', 'IL-SRC-01 IL-SRC-19'] },
    { p: 'eu uk', t: ['Without an Israeli ID number you cannot open a bank account online: it takes a branch with an international desk.',
      'Senza un numero d’identità israeliano non si apre un conto online: serve una filiale con sportello internazionale.', 'IL-SRC-17'] }
  ],

  open: [
    { st: 'open', t: ['The 2026 B/1 fees come from a secondary source; the official table could not be read.',
      'Le tariffe B/1 del 2026 vengono da una fonte secondaria; la tabella ufficiale non era leggibile.'] },
    { st: 'watch', t: ['Whether the 500 permits for Israeli STEM graduates run out during the year.',
      'Se i 500 permessi per i laureati STEM in Israele si esauriscono nel corso dell’anno.'] },
    { st: 'open', t: ['Consular appointments in Rome for B/1 and A/2 visas take 2 to 8 weeks.',
      'Gli appuntamenti consolari a Roma per i visti B/1 e A/2 richiedono da 2 a 8 settimane.'] }
  ]
});

/* Sources: generated by tools/visas-sources.js from research/visas_immigration/israel/israel_sources.md.
 * Do not edit by hand: change the register, then run the tool. */
ATLAS.visaSources('IL', {
  "IL-SRC-06": ["Procedura PIBA 5.8.0002 (נוהל מתן / הארכת רישיון שהייה מסוג א/2 לתלמידים ולסטודנטים זרים במוסדות להשכלה גבוהה)","https://www.gov.il/he/departments/policies/students_procedure_5_8_0002","2026-10-05"],
  "IL-SRC-16": ["Regolamento Studenti Internazionali e Borse Post-doc","https://che.org.il/en/","2026-10-05"],
  "IL-SRC-14": ["Tariffario Consolare e Istruzioni Operative Visti (Roma)","https://embassies.gov.il/roma","2026-10-05"],
  "IL-SRC-10": ["PIBA: Tabella Ufficiale Tariffe e Diritti 2026 (לוח אגרות רשות האוכלוסין וההגירה לשנת 2026)","https://www.gov.il/he/departments/general/fees_and_tariffs_piba","2026-10-05"],
  "IL-SRC-01": ["Entry into Israel Law, 5712-1952 (חוק הכניסה לישראל, תשי\"ב-1952)","https://www.gov.il/he/departments/policies/entry_to_israel_law","2026-10-05"],
  "IL-SRC-02": ["Foreign Workers Law, 5751-1991 (חוק עובדים זרים, תשנ\"א-1991)","https://www.gov.il/he/departments/policies/foreign_workers_law_1991","2026-10-05"],
  "IL-SRC-18": ["Masa Israel Journey: Regolamento Programmi di Tirocinio e Mobilità Accademica","https://www.masaisrael.org/","2026-10-05"],
  "IL-SRC-04": ["PIBA / Israel Innovation Authority: Procedura PIBA 5.3.0043 (נוהל לטיפול בבקשות חברות הייטק וסייבר להעסקה והסדרת מעמדם של מומחים זרים)","https://www.gov.il/he/departments/policies/high_tech_procedure_5_3_0043","2026-10-05"],
  "IL-SRC-03": ["Population and Immigration Authority (PIBA): Procedura PIBA 5.3.0041 (נוהל הטיפול בבקשות למתן היתר העסקה ורישיון שהייה ועבודה למומחים זרים)","https://www.gov.il/he/departments/policies/foreign_workers_procedure_5_3_0041","2026-10-05"],
  "IL-SRC-09": ["National Insurance Institute (Bituach Leumi / המוסד לביטוח…: Circolare Salari e Parametro Stipendio Medio 2026 (שכר ממוצע לפי חוק הביטוח הלאומי)","https://www.btl.gov.il/English%20Homepage/Pages/default.aspx","2026-10-05"],
  "IL-SRC-11": ["Israel Innovation Authority (רשות החדשנות): Linee Guida Imprese ad Alta Densità Tecnologica (תאגיד עתיר ידע טכנולוגי)","https://innovationisrael.org.il/en/","2026-10-05"],
  "IL-SRC-05": ["Procedura PIBA 5.3.0040 (נוהל טיפול מזורז להעסקת מומחה זר המוזמן לישראל לתקופה של עד 90 יום)","https://www.gov.il/he/departments/policies/foreign_workers_procedure_5_3_0040","2026-10-05"],
  "IL-SRC-13": ["Israel Tax Authority (רשות המסים בישראל): Income Tax Ordinance (Pekudat Mas Hachnasa), Art. 9(29)","https://www.gov.il/he/departments/israel-tax-authority","2026-10-05"],
  "IL-SRC-15": ["Accordi Bilaterali Working Holiday Vigenti (הסכמי חופשה-עבודה)","https://www.gov.il/en/departments/ministry_of_foreign_affairs","2026-10-05"],
  "IL-SRC-08": ["Portale Ufficiale ETA-IL (Electronic Travel Authorization)","https://israel-entry.piba.gov.il/","2026-10-05"],
  "IL-SRC-19": ["MAECI / Farnesina (Viaggiare Sicuri): Scheda Paese Israele: Condizioni di Ingresso e Sicurezza","https://www.viaggiaresicuri.it/find-country/country/ISR","2026-10-05"],
  "IL-SRC-17": ["Bank of Israel (בנק ישראל): Direttiva di Vigilanza Bancaria n. 411 (Proper Conduct of Banking Business Directive 411)","https://boi.org.il/","2026-10-05"],
  "IL-SRC-07": ["Procedura PIBA 5.2.0023 / 5.3.0024 (נוהל מתן אשרת כניסה חוזרת - אינטר-ויזה)","https://www.gov.il/he/departments/policies/inter_visa_procedure","2026-10-05"]
});
