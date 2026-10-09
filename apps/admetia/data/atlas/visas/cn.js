/* Visas and permits: China (mainland). From research/visas_immigration/china/
 * (guide, source register, open questions), council check of 5 Oct 2026.
 * EU and UK passports only; the research takes an Italian citizen as reference. */
ATLAS.addVisas({
  id: 'CN',
  folder: 'china',
  checked: '2026-10-05',
  review: '2027-01-15',

  routes: [
    { k: 'study', p: 'eu uk', v: 'open',
      name: ['X1 study visa and residence permit', 'Visto di studio X1 e permesso di soggiorno'], law: 'Exit and Entry Administration Law 2012',
      t: [
        ['For courses over 180 days: with the admission notice and the JW201 or JW202 form, an X1 visa valid 30 days from arrival; within 30 days, the health check and a residence permit for study. Up to 180 days, an X2 visa with no residence permit.',
          'Per corsi oltre 180 giorni: con la lettera di ammissione e il modulo JW201 o JW202, un visto X1 valido 30 giorni dall’arrivo; entro 30 giorni, il controllo sanitario e un permesso di soggiorno per studio. Fino a 180 giorni, un visto X2 senza permesso di soggiorno.', 'CHN-SRC-01 CHN-SRC-02 CHN-SRC-10 CHN-SRC-08'],
        ['From the second year, students may intern up to 8 hours a week in term, only after the police add an “internship” note to the residence permit.',
          'Dal secondo anno gli studenti possono fare tirocini fino a 8 ore a settimana durante i corsi, solo dopo che la polizia aggiunge l’annotazione “tirocinio” al permesso di soggiorno.', 'CHN-SRC-10 CHN-SRC-01']
      ],
      f: [
        [['Funds', 'Mezzi'], ['at least $2,500 a year', 'almeno 2.500 $ l’anno'], 'CHN-SRC-07 CHN-SRC-16'],
        [['Fees, first year', 'Costi, primo anno'], ['visa €45 + €67.10 centre; insurance 800 RMB; permit 800 RMB', 'visto 45 € + 67,10 € centro; assicurazione 800 RMB; permesso 800 RMB'], 'CHN-SRC-07 CHN-SRC-10 CHN-SRC-08']
      ] },

    { k: 'intern', p: 'eu uk', v: 'limited',
      name: ['Internships', 'Tirocini'], law: 'Exit and Entry Administration Law 2012',
      t: [['There is no general internship visa. Students of foreign universities can intern only through government agreements or pilot schemes in free-trade zones, on an S2 visa noted “internship”. Graduates cannot: a “post-graduate internship” on a tourist or business visa is illegal work.',
        'Non esiste un visto generale per tirocinio. Gli studenti di università estere possono fare tirocini solo tramite accordi governativi o progetti pilota nelle zone di libero scambio, con un visto S2 annotato “tirocinio”. I laureati no: uno “stage post-laurea” con visto turistico o d’affari è lavoro irregolare.', 'CHN-SRC-02 CHN-SRC-01']] },

    { k: 'search', p: 'eu uk', v: 'limited',
      name: ['Hiring of recent master’s graduates', 'Assunzione di neolaureati magistrali'], law: 'Circular 3/2017',
      t: [['There is no job-search visa. A master’s or PhD from a Chinese university or a world top-500 university, with grades of at least 80/100, waives the two years of experience if you apply within a year of graduating, for a job paying at least the local average wage.',
        'Non esiste un visto per cercare lavoro. Un master o dottorato in un’università cinese o tra le prime 500 al mondo, con voti di almeno 80/100, esonera dai due anni di esperienza se si fa domanda entro un anno dalla laurea, per un lavoro pagato almeno il salario medio locale.', 'CHN-SRC-03 CHN-SRC-04 CHN-SRC-12']],
      f: [[['Salary, Shanghai', 'Stipendio, Shanghai'], ['12,577 RMB a month', '12.577 RMB al mese'], 'CHN-SRC-12']] },

    { k: 'work', p: 'eu uk', v: 'sponsor',
      name: ['Z work visa and residence permit', 'Visto di lavoro Z e permesso di soggiorno'], law: 'SAFEA classification 2017',
      t: [
        ['The employer obtains a work-permit notification online; you need a degree and two years of experience, or 60 points. The Z visa is valid 30 days: register your address within 24 hours, then convert to a residence permit within 30 days.',
          'Il datore ottiene online la notifica del permesso di lavoro; serve una laurea e due anni di esperienza, o 60 punti. Il visto Z vale 30 giorni: registra l’indirizzo entro 24 ore, poi converti in permesso di soggiorno entro 30 giorni.', 'CHN-SRC-04 CHN-SRC-01 CHN-SRC-08'],
        ['High-end talent (85 points, or six times the local average wage) gets a free R visa of 5 or 10 years; a new K visa lets young STEM graduates enter without an employer.',
          'I talenti di alto livello (85 punti, o sei volte il salario medio locale) ottengono un visto R gratuito di 5 o 10 anni; un nuovo visto K permette ai giovani laureati STEM di entrare senza datore.', 'CHN-SRC-04 CHN-SRC-02 CHN-SRC-07']
      ],
      f: [[['Fees', 'Costi'], ['visa €45 + €67.10 centre; permit 800 RMB', 'visto 45 € + 67,10 € centro; permesso 800 RMB'], 'CHN-SRC-07 CHN-SRC-08']],
      w: ['Miss the 30-day deadline and you are staying illegally: 500 RMB a day, detention and expulsion.',
        'Se manchi il termine dei 30 giorni sei in soggiorno illegale: 500 RMB al giorno, detenzione ed espulsione.', 'CHN-SRC-01'] },

    { k: 'research', p: 'eu uk', v: 'sponsor',
      name: ['Visiting scholars and CSC scholarships', 'Ricercatori in visita e borse CSC'], law: 'Exit and Entry Administration Law 2012',
      t: [
        ['Unpaid research or thesis stays up to 180 days use an F visa on an invitation from a university or the Chinese Academy of Sciences; paid researchers and post-docs need a work permit and a Z or R visa.',
          'I soggiorni di ricerca o tesi non retribuiti fino a 180 giorni usano un visto F su invito di un’università o dell’Accademia cinese delle scienze; ricercatori e post-doc retribuiti hanno bisogno di permesso di lavoro e visto Z o R.', 'CHN-SRC-02 CHN-SRC-01 CHN-SRC-04'],
        ['Chinese Government Scholarships cover tuition, housing and insurance with a tax-free allowance.',
          'Le borse del governo cinese coprono tasse, alloggio e assicurazione con un assegno esentasse.', 'CHN-SRC-14 CHN-SRC-17']
      ],
      f: [[['CSC allowance', 'Assegno CSC'], ['3,000 RMB a month (master’s), 3,500 (PhD)', '3.000 RMB al mese (master), 3.500 (dottorato)'], 'CHN-SRC-14']] },

    { k: 'whv', p: 'eu uk', v: 'closed',
      name: ['Working holiday', 'Vacanza-lavoro'], law: '—',
      t: [['Mainland China has no working-holiday agreements with European countries; casual work while visiting means fines, detention and an entry ban.',
        'La Cina continentale non ha accordi di vacanza-lavoro con paesi europei; lavorare saltuariamente durante una visita comporta multe, detenzione e divieto d’ingresso.', 'CHN-SRC-01 CHN-SRC-05']] },

    { k: 'short', p: 'eu uk', v: 'open',
      name: ['Visa-free visit', 'Visita senza visto'], law: 'Unilateral visa-free policy',
      t: [
        ['Until 31 December 2026, Italians and citizens of most EU countries enter visa-free for up to 30 days for tourism, business or visits; the research does not cover British passports, so check. You cannot switch to a work permit inside China.',
          'Fino al 31 dicembre 2026 gli italiani e i cittadini della maggior parte dei paesi UE entrano senza visto fino a 30 giorni per turismo, affari o visite; la ricerca non copre i passaporti britannici, quindi verifica. Non si può passare a un permesso di lavoro dall’interno della Cina.', 'CHN-SRC-05 CHN-SRC-06 CHN-SRC-01'],
        ['Visa-free transit of 144 hours to a third country confines you to the approved region.',
          'Il transito senza visto di 144 ore verso un paese terzo ti limita alla regione autorizzata.', 'CHN-SRC-18']
      ] }
  ],

  arrival: [
    { k: 'before', p: 'eu uk', t: [
      ['China joined the apostille convention on 7 November 2023: public documents need an apostille rather than consular legalisation.',
        'La Cina ha aderito alla convenzione sull’apostille il 7 novembre 2023: i documenti pubblici richiedono l’apostille anziché la legalizzazione consolare.', 'CHN-SRC-09'],
      ['If you will rent privately, check that the landlord can show the property ownership certificate (fangchanzheng): without it the police refuse to register you, and no residence permit follows.',
        'Se affitterai privatamente, verifica che il proprietario possa mostrare il certificato di proprietà dell’immobile (fangchanzheng): senza, la polizia rifiuta la registrazione, e il permesso di soggiorno non arriva.', 'CHN-SRC-01']
    ] },
    { k: 'address', p: 'eu uk', t: [
      ['Register your address within 24 hours of arriving: hotels do it at check-in; in a private flat go to the local police station (paichusuo), or use the city’s app where there is one, with the lease, the landlord’s ID and the ownership certificate.',
        'Registra l’indirizzo entro 24 ore dall’arrivo: gli alberghi lo fanno al check-in; in un appartamento privato vai al commissariato di zona (paichusuo), o usa l’app della città dove esiste, con contratto, documento del proprietario e certificato di proprietà.', 'CHN-SRC-01']
    ] },
    { k: 'card', p: 'eu uk', t: [
      ['Workers collect the biometric work permit card from the city’s science and technology department, then apply to the exit-entry administration for the residence permit before day 30 after entering.',
        'I lavoratori ritirano la carta biometrica del permesso di lavoro dal dipartimento municipale di scienza e tecnologia, poi chiedono il permesso di soggiorno all’amministrazione per l’ingresso e l’uscita prima del 30° giorno dall’ingresso.', 'CHN-SRC-04 CHN-SRC-01 CHN-SRC-08'],
      ['The police keep your passport for 7 to 15 working days; the receipt with your photo replaces it inside China, but you cannot leave the mainland, even for Hong Kong or Macau, until you have it back.',
        'La polizia trattiene il passaporto per 7-15 giorni lavorativi; la ricevuta con la tua foto lo sostituisce in Cina, ma non puoi lasciare la Cina continentale, nemmeno per Hong Kong o Macao, finché non lo riavrai.', 'CHN-SRC-01 CHN-SRC-08']
    ] },
    { k: 'number', p: 'eu uk', t: [
      ['Register your tax identity with the State Taxation Administration and use the official IIT app for deductions and the yearly settlement, from 1 March to 30 June.',
        'Registra la tua identità fiscale presso l’Amministrazione fiscale statale e usa l’app ufficiale IIT per le detrazioni e il conguaglio annuale, dal 1° marzo al 30 giugno.', 'CHN-SRC-17']
    ] },
    { k: 'health', p: 'eu uk', t: [
      ['Have the medical check, or the validation of your foreign results, at the city’s International Travel Healthcare Center to get the health certificate needed for the permit.',
        'Fai la visita medica, o la convalida dei referti esteri, presso l’International Travel Healthcare Center della città per ottenere il certificato sanitario necessario al permesso.', 'CHN-SRC-11'],
      ['Local employees pay into the five social insurances, including health; Italians temporarily posted by an Italian employer are exempt from the basic pension contribution for up to 5 years with the INPS form IT/CN 1.',
        'I dipendenti locali versano le cinque assicurazioni sociali, sanità compresa; gli italiani distaccati temporaneamente da un datore italiano sono esenti dal contributo pensionistico di base fino a 5 anni con il modulo INPS IT/CN 1.', 'CHN-SRC-15']
    ] },
    { k: 'bank', p: 'eu uk', t: [
      ['Get a +86 SIM at a China Mobile or China Unicom flagship store, with passport scan and face check. Banks (BOC, ICBC, CMB) then want your passport with the residence permit, the stamped work contract, the verified SIM and your home tax number; link the card to WeChat Pay and Alipay (no fee up to 200 RMB, 3% above).',
        'Prendi una SIM +86 in un negozio ufficiale China Mobile o China Unicom, con scansione del passaporto e riconoscimento facciale. Le banche (BOC, ICBC, CMB) vogliono poi passaporto con permesso di soggiorno, contratto timbrato, SIM verificata e codice fiscale del tuo paese; collega la carta a WeChat Pay e Alipay (nessuna commissione fino a 200 RMB, 3% oltre).', 'CHN-SRC-17']
    ] },
    { k: 'keep', p: 'eu uk', none: true }
  ],

  traps: [
    { p: 'eu uk', t: ['While the police hold your passport for the residence permit, 7 to 15 working days, the receipt works only inside China: you cannot leave, not even for Hong Kong.',
      'Mentre la polizia trattiene il passaporto per il permesso di soggiorno, da 7 a 15 giorni lavorativi, la ricevuta vale solo in Cina: non puoi uscire, nemmeno per Hong Kong.', 'CHN-SRC-01 CHN-SRC-08'] },
    { p: 'eu uk', t: ['In a private flat, register with the police within 24 hours, with the owner’s property certificate; without it there is no residence permit.',
      'In un appartamento privato, registrati alla polizia entro 24 ore, con il certificato di proprietà del locatore; senza non c’è permesso di soggiorno.', 'CHN-SRC-01'] },
    { p: 'eu uk', t: ['Working before the residence permit is issued is illegal work, with fines and a ban.',
      'Lavorare prima del rilascio del permesso di soggiorno è lavoro irregolare, con multe e divieto.', 'CHN-SRC-01'] }
  ],

  open: [
    { st: 'pending', t: ['Whether the visa-free policy for Europeans will be extended beyond 31 December 2026.',
      'Se l’esenzione dal visto per gli europei sarà prorogata oltre il 31 dicembre 2026.'] },
    { st: 'open', t: ['Which universities qualify for the K visa, and how it works in practice.',
      'Quali università diano accesso al visto K, e come funzioni in pratica.'] },
    { st: 'open', t: ['Some provincial offices still want translations stamped by a Chinese agency despite the apostille.',
      'Alcuni uffici provinciali vogliono ancora traduzioni timbrate da un’agenzia cinese nonostante l’apostille.'] },
    { st: 'open', t: ['Banks put low transaction limits on new foreign accounts.',
      'Le banche impongono limiti bassi alle transazioni sui nuovi conti di stranieri.'] }
  ]
});

/* Sources: generated by tools/visas-sources.js from research/visas_immigration/china/china_sources.md.
 * Do not edit by hand: change the register, then run the tool. */
ATLAS.visaSources('CN', {
  "CHN-SRC-01": ["Exit and Entry Administration Law of the PRC (中华人民共和国出境入境管理法) (Adottata il 30/06/2012, in vigore dal 01/07/2013)","http://www.npc.gov.cn/zgrdw/npc/xinwen/2012-06/30/content_1729013.htm","2026-10-05"],
  "CHN-SRC-02": ["Regolamento sull'Amministrazione dell'Ingresso e Uscita degli Stranieri (中华人民共和国外国人入境出境管理条例) (Decreto n. 637 del 2013)…","http://www.gov.cn/zhengce/content/202508/content_6967843.htm","2026-10-05"],
  "CHN-SRC-10": ["Regolamento Istituti d'Istruzione Superiore per Studenti Stranieri (Decreto MOE/MFA/MPS n. 42) & Circolare…","http://www.moe.gov.cn","2026-10-05"],
  "CHN-SRC-08": ["Circolare Tariffaria Ufficiale sui Documenti di Soggiorno per Stranieri (发改价格〔2004〕2230号)","http://www.ndrc.gov.cn","2026-10-05"],
  "CHN-SRC-07": ["Chinese Visa Application Service Center (CVASC) Italia…: Tabella Tariffe Consolari e Spese di Servizio (Price List Ufficiale)","https://www.visaforchina.cn/ROM3_IT/upload/20250910/c12ce1e327054aefb76711d20f4f3f34.pdf","2026-10-05"],
  "CHN-SRC-16": ["Bank of China (BOC / 中国银行): Tassi di Cambio Ufficiali Interbancari BOC (05-06/10/2026)","https://www.boc.cn/sourcedb/whpj/","2026-10-05"],
  "CHN-SRC-03": ["Circolare Congiunta n. 3/2017: Notice on Matters Concerning Outstanding Foreign Graduates Working in China…","http://www.mohrss.gov.cn/xxgk2020/gwyxxgk/201701/t20170112_264161.html","2026-10-05"],
  "CHN-SRC-04": ["Amministrazione Statale degli Esperti Esteri (SAFEA / MOST): Criteri Unificati di Valutazione e Classificazione per i Lavoratori Stranieri in Cina (外国人来华工作分类标准","http://www.safea.gov.cn","2026-10-05"],
  "CHN-SRC-12": ["National Bureau of Statistics of the PRC (NBS / 国家统计局): Bollettino Statistico Ufficiale sui Salari Medi Urbani (2025/2026) (Rilasciato il 15/05/2026)","http://www.stats.gov.cn/sj/zxfb/202605/t20260515_1963707.html","2026-10-05"],
  "CHN-SRC-14": ["China Scholarship Council (CSC / 国家留学基金管理委员会): Regolamento Chinese Government Scholarship (CGS) e Moduli JW201/JW202/DQ","https://www.campuschina.org","2026-10-05"],
  "CHN-SRC-17": ["People's Bank of China (PBOC) & State Taxation…: Standard Antiriciclaggio per Apertura Conti Bancari e Guida Individual Income Tax (IIT / 个人所得税)","http://www.pbc.gov.cn","2026-10-05"],
  "CHN-SRC-05": ["Avviso di Estensione della Politica Unilaterale di Esenzione Visto fino al 31 Dicembre 2026 per 35 Paesi Europei","https://www.mfa.gov.cn/wjbzwfwpt/gjzlbqzj/","2026-10-05"],
  "CHN-SRC-06": ["Comunicato Ufficiale: Proroga Esenzione Visti per Cittadini Italiani e Riduzione Tariffe Consolari","http://it.china-embassy.gov.cn/ita/lsqw/","2026-10-05"],
  "CHN-SRC-18": ["National Immigration Administration (NIA / 国家移民管理局): Regolamento Ufficiale sui Transiti Senza Visto 144 Ore e 240 Ore (72/144-Hour TWOV Policy)","https://en.nia.gov.cn","2026-10-05"],
  "CHN-SRC-09": ["Convenzione dell'Aia del 5 ottobre 1961 sull'Apostille: Adesione della Cina in vigore dal 07/11/2023","https://www.hcch.net/en/instruments/conventions/status-table/?cid=41","2026-10-05"],
  "CHN-SRC-11": ["Amministrazione Generale delle Dogane (GACC) / Centri…: Disciplinare Sanitario di Frontiera e Foreigner Physical Examination Record (外国人体格检查记录)","http://www.customs.gov.cn","2026-10-05"],
  "CHN-SRC-15": ["Accordo di Sicurezza Sociale Italia-Cina (Roma, 10/05/2017, in vigore dal 01/01/2021) e Circolare INPS n. 147/2020","https://www.inps.it","2026-10-05"]
});
