/* Visas and permits: Romania. From research/visas_immigration/romania/
 * (guide, source register, open questions), council check of 5-6 Oct 2026. */
ATLAS.addVisas({
  id: 'RO',
  folder: 'romania',
  checked: '2026-10-06',
  review: '2027-03-31',

  free: {
    p: 'eu',
    t: [
      ['EU, EEA and Swiss citizens work with no authorisation or visa.',
        'I cittadini UE, SEE e svizzeri lavorano senza autorizzazione né visto.', 'RO-SRC-04'],
      ['Staying over three months, register at the immigration office (IGI) of your county for the free registration certificate, issued the same day with your personal number (CNP); missing the 90 days can be fined.',
        'Per un soggiorno oltre i tre mesi ci si registra all’ufficio immigrazione (IGI) della provincia per il certificato di registrazione, gratuito e rilasciato in giornata con il codice personale (CNP); superare i 90 giorni può costare una multa.', 'RO-SRC-04 RO-SRC-13'],
      ['Students up to 26 with no earnings get free public health cover.',
        'Gli studenti fino a 26 anni senza redditi hanno la copertura sanitaria pubblica gratuita.', 'RO-SRC-23']
    ]
  },

  routes: [
    { k: 'study', p: 'uk us other', v: 'open',
      name: ['Student visa (D/SD) and residence permit', 'Visto per studio (D/SD) e permesso di soggiorno'], law: 'OUG 194/2002',
      t: [
        ['The Ministry of Education issues the letter of acceptance through Study in Romania; pay the first year’s tuition, then apply for the D/SD visa on evisa.mae.ro. Within 90 days of arriving, and at least 30 days before the visa ends, apply for the permit on the IGI portal.',
          'Il ministero dell’Istruzione rilascia la lettera di accettazione tramite Study in Romania; si paga la retta del primo anno, poi si chiede il visto D/SD su evisa.mae.ro. Entro 90 giorni dall’arrivo, e almeno 30 giorni prima della scadenza del visto, si chiede il permesso sul portale IGI.', 'RO-SRC-22 RO-SRC-10 RO-SRC-19'],
        ['Students may work up to six hours a day (30 a week) without a work authorisation.',
          'Gli studenti possono lavorare fino a sei ore al giorno (30 a settimana) senza autorizzazione al lavoro.', 'RO-SRC-02 RO-SRC-03'],
        ['A non-EU student with a permit from another EU country in an exchange needs no visa, after the university notifies IGI, for up to 360 days.',
          'Uno studente extra-UE con permesso di un altro paese UE in scambio non ha bisogno di visto, dopo la notifica dell’università all’IGI, fino a 360 giorni.', 'RO-SRC-01 RO-SRC-16']
      ],
      f: [
        [['Funds', 'Mezzi'], ['RON 4,325 a month (at least RON 25,950 for six months)', 'RON 4.325 al mese (almeno RON 25.950 per sei mesi)'], 'RO-SRC-01 RO-SRC-06'],
        [['Fees', 'Costi'], ['€300 visa; €120 + RON 265 permit (free for Romanian-state scholars)', '300 € visto; 120 € + RON 265 il permesso (gratis per i borsisti dello Stato romeno)'], 'RO-SRC-07 RO-SRC-11 RO-SRC-14 RO-SRC-16']
      ] },

    { k: 'intern', p: 'uk us other', v: 'sponsor',
      name: ['Trainee stay', 'Soggiorno per tirocinanti'], law: 'OUG 194/2002; Directive 2016/801',
      t: [
        ['For graduates of the last two years or students abroad, with a training agreement with an authorised host; the permit lasts up to six months.',
          'Per chi si è laureato negli ultimi due anni o studia all’estero, con una convenzione di formazione con un ente autorizzato; il permesso dura fino a sei mesi.', 'RO-SRC-01'],
        ['Students already living in Romania do the internship of their degree with no work authorisation.',
          'Gli studenti già in Romania svolgono il tirocinio del corso senza autorizzazione al lavoro.', 'RO-SRC-02']
      ],
      f: [[['Minimum internship allowance, 2026', 'Indennità minima di tirocinio, 2026'], ['RON 2,162.50 a month (half the minimum wage)', 'RON 2.162,50 al mese (metà del salario minimo)'], 'RO-SRC-27']] },

    { k: 'search', p: 'uk us other', v: 'open',
      name: ['Nine months to look for work or start a business', 'Nove mesi per cercare lavoro o avviare un’impresa'], law: 'OUG 194/2002 art. 58 (4)',
      t: [['After a bachelor’s, master’s or doctorate in Romania, apply on the IGI portal before your student permit expires: nine months, not renewable. A job then needs no labour-market test and converts inside Romania, with no new visa.',
        'Dopo una laurea, un master o un dottorato in Romania si fa domanda sul portale IGI prima che scada il permesso per studio: nove mesi, non rinnovabili. Un lavoro non richiede poi test del mercato e si converte in Romania, senza nuovo visto.', 'RO-SRC-01 RO-SRC-19 RO-SRC-02']],
      f: [
        [['Funds', 'Mezzi'], ['RON 38,925 for the nine months', 'RON 38.925 per i nove mesi'], 'RO-SRC-01 RO-SRC-06'],
        [['Employer’s authorisation for a graduate', 'Autorizzazione del datore per un neolaureato'], ['€25 instead of €100', '25 € invece di 100 €'], 'RO-SRC-14']
      ] },

    { k: 'work', p: 'uk us other', v: 'sponsor',
      name: ['EU Blue Card', 'Carta Blu UE'], law: 'Legea 28/2024',
      t: [['A contract of at least six months in a highly qualified job and a three-year degree, or for IT three years of experience in the last seven; no labour-market test or quota, and family can apply at the same time. The card lasts up to three years.',
        'Un contratto di almeno sei mesi in un lavoro altamente qualificato e una laurea triennale, o per l’informatica tre anni di esperienza negli ultimi sette; nessun test del mercato né quota, e la famiglia può fare domanda insieme. La carta dura fino a tre anni.', 'RO-SRC-03 RO-SRC-02']],
      f: [
        [['Salary, 2026', 'Stipendio, 2026'], ['RON 9,192 gross a month', 'RON 9.192 lordi al mese'], 'RO-SRC-05'],
        [['Fees', 'Costi'], ['€100 authorisation, €300 visa, €120 + RON 265 card', '100 € autorizzazione, 300 € visto, 120 € + RON 265 la carta'], 'RO-SRC-14 RO-SRC-07 RO-SRC-16']
      ] },

    { k: 'work', p: 'uk us other', v: 'limited',
      name: ['Ordinary work permit', 'Permesso di lavoro ordinario'], law: 'OG 25/2014; OUG 32/2026',
      t: [
        ['The employer gets a work authorisation from IGI after a labour-market test, within the annual quota and for an occupation on the shortage list; you then have 180 days to apply for the D visa.',
          'Il datore ottiene l’autorizzazione al lavoro dall’IGI dopo un test del mercato, entro la quota annuale e per un mestiere della lista delle carenze; si hanno poi 180 giorni per chiedere il visto D.', 'RO-SRC-02 RO-SRC-08 RO-SRC-07 RO-SRC-01'],
        ['For the first 12 months you cannot change employer without the first employer’s written consent.',
          'Nei primi 12 mesi non si può cambiare datore senza il consenso scritto del primo.', 'RO-SRC-02 RO-SRC-03']
      ],
      f: [
        [['Minimum wage, from 1 July 2026', 'Salario minimo, dal 1° luglio 2026'], ['RON 4,325 a month', 'RON 4.325 al mese'], 'RO-SRC-06'],
        [['Quota, 2026', 'Quota, 2026'], ['90,000 new workers', '90.000 nuovi lavoratori'], 'RO-SRC-08']
      ] },

    { k: 'research', p: 'uk us other', v: 'sponsor',
      name: ['Researcher permit, and PhDs', 'Permesso per ricercatori e dottorati'], law: 'OUG 194/2002 arts. 48, 67',
      t: [
        ['A hosting agreement with an accredited university or research centre; no work authorisation, and nine months after the project to find work.',
          'Una convenzione di accoglienza con un’università o un centro di ricerca accreditato; nessuna autorizzazione al lavoro, e nove mesi dopo il progetto per trovare lavoro.', 'RO-SRC-17 RO-SRC-02 RO-SRC-01'],
        ['Doctoral scholarships are free of income tax and social contributions.',
          'Le borse di dottorato sono esenti da imposte e contributi.', 'RO-SRC-24']
      ] },

    { k: 'whv', p: 'uk us other', v: 'closed',
      name: ['Working holiday', 'Vacanza-lavoro'], law: '—',
      t: [['Romania has no working-holiday scheme in force; an agreement with South Korea is still being ratified.',
        'La Romania non ha schemi di vacanza-lavoro in vigore; un accordo con la Corea del Sud è ancora in ratifica.', 'RO-SRC-01']] },

    { k: 'short', p: 'uk us other', v: 'open',
      name: ['Short stay', 'Soggiorno breve'], law: 'Schengen',
      t: [['Romania is fully in Schengen since 1 January 2025: days here count in the same 90 days in any 180. A visa-free or tourist stay cannot be converted inside Romania.',
        'La Romania è pienamente in Schengen dal 1° gennaio 2025: i giorni qui contano negli stessi 90 giorni ogni 180. Un soggiorno turistico o senza visto non si converte in Romania.', 'RO-SRC-09 RO-SRC-01']],
      f: [[['Schengen visa', 'Visto Schengen'], ['€90', '90 €'], 'RO-SRC-12']] },

    { k: 'work', p: 'uk us other', v: 'limited',
      name: ['Digital nomad visa', 'Visto per nomadi digitali'], law: 'Legea 22/2022',
      t: [['For remote workers of a company abroad at least three years old, earning three times the Romanian average wage: six months, renewable to a year, tax-free for the first 183 days.',
        'Per chi lavora da remoto per un’azienda estera attiva da almeno tre anni, con tre volte il salario medio romeno: sei mesi, rinnovabili fino a un anno, esenti da imposte per i primi 183 giorni.', 'RO-SRC-26 RO-SRC-24']],
      f: [[['Income needed', 'Reddito richiesto'], ['RON 27,576 a month', 'RON 27.576 al mese'], 'RO-SRC-26 RO-SRC-05']] }
  ],

  arrival: [
    { k: 'before', p: 'eu uk us other', t: [
      ['Make sure your landlord registers the lease with the tax agency (ANAF) within 30 days, on form 168: immigration wants the lease with ANAF’s electronic receipt. If you stay free with someone, you need a notarised loan-for-use contract and a recent land-register extract.',
        'Assicurati che il proprietario registri il contratto all’agenzia delle entrate (ANAF) entro 30 giorni, con il formulario 168: l’immigrazione vuole il contratto con la ricevuta elettronica dell’ANAF. Se sei ospite gratuito, servono un contratto di comodato notarile e un estratto catastale recente.', 'RO-SRC-24 RO-SRC-01']
    ] },
    { k: 'before', p: 'uk us other', t: [
      ['Apply for the long-stay D visa through the Foreign Ministry’s eVisa portal; for work, your employer first obtains the work authorisation from the immigration inspectorate (IGI).',
        'Chiedi il visto per lungo soggiorno D tramite il portale eVisa del Ministero degli Esteri; per lavoro, il datore ottiene prima l’autorizzazione al lavoro dall’ispettorato per l’immigrazione (IGI).', 'RO-SRC-10 RO-SRC-11 RO-SRC-14']
    ] },
    { k: 'address', p: 'eu uk us other', t: [
      ['Your registered lease is your proof of housing for the immigration office and the bank.',
        'Il contratto d’affitto registrato è la tua prova di alloggio per l’ufficio immigrazione e la banca.', 'RO-SRC-24 RO-SRC-01']
    ] },
    { k: 'card', p: 'eu', t: [
      ['Staying over 3 months, register at the IGI office of your county for the registration certificate (certificat de înregistrare): it is free, and students bring enrolment, housing and the European Health Insurance Card or insurance.',
        'Se resti oltre 3 mesi, registrati all’ufficio IGI della tua provincia per il certificato di registrazione (certificat de înregistrare): è gratuito, e gli studenti portano iscrizione, alloggio e Tessera europea di assicurazione malattia o un’assicurazione.', 'RO-SRC-04 RO-SRC-13']
    ] },
    { k: 'card', p: 'uk us other', t: [
      ['Apply on portaligi.mai.gov.ro for the residence permit at least 30 days before your 90-day D visa expires; the permit lasts 1 year and is renewed every year.',
        'Chiedi il permesso di soggiorno su portaligi.mai.gov.ro almeno 30 giorni prima della scadenza del visto D di 90 giorni; il permesso dura 1 anno e si rinnova ogni anno.', 'RO-SRC-01 RO-SRC-19']
    ] },
    { k: 'number', p: 'eu uk us other', t: [
      ['Your 13-digit personal numeric code (CNP), used for work, health and tax, is printed on the EU registration certificate or the residence permit; the D visa does not carry one.',
        'Il codice numerico personale a 13 cifre (CNP), usato per lavoro, sanità e fisco, è stampato sul certificato di registrazione UE o sul permesso di soggiorno; il visto D non lo riporta.', 'RO-SRC-04 RO-SRC-01'],
      ['Before you have it, ask ANAF for a tax identification number (NIF) with form 030.',
        'Prima di averlo, chiedi all’ANAF un numero di identificazione fiscale (NIF) con il formulario 030.', 'RO-SRC-25']
    ] },
    { k: 'health', p: 'eu uk us other', t: [
      ['Employees are enrolled in public health insurance (CNAS) automatically, with 10% of gross pay withheld; students up to 26 are covered free with a notarised statement of no income. Register with a family doctor contracted with the district fund to get referrals and prescriptions.',
        'I dipendenti sono iscritti automaticamente all’assicurazione sanitaria pubblica (CNAS), con il 10% dello stipendio lordo trattenuto; gli studenti fino a 26 anni sono coperti gratis con una dichiarazione notarile di assenza di redditi. Iscriviti presso un medico di famiglia convenzionato con la cassa distrettuale per avere impegnative e ricette.', 'RO-SRC-23']
    ] },
    { k: 'bank', p: 'eu uk us other', t: [
      ['Banks (Banca Transilvania, BCR, BRD, Raiffeisen, ING) want the document with your CNP, your home-country tax number and proof of housing, and often refuse an account on the D visa alone.',
        'Le banche (Banca Transilvania, BCR, BRD, Raiffeisen, ING) vogliono il documento con il CNP, il codice fiscale del paese d’origine e la prova dell’alloggio, e spesso rifiutano un conto con il solo visto D.', 'RO-SRC-01']
    ] },
    { k: 'keep', p: 'eu', none: true },
    { k: 'keep', p: 'uk us other', t: [
      ['The IGI filing receipt keeps you legal and lets you work, register with a doctor or study, but only inside Romania: do not leave until you hold the plastic permit, or you may be refused boarding on the way back.',
        'La ricevuta di deposito IGI ti mantiene in regola e ti permette di lavorare, iscriverti dal medico o studiare, ma solo in Romania: non partire finché non hai il permesso plastificato, o potresti non essere imbarcato al ritorno.', 'RO-SRC-01 RO-SRC-28']
    ] }
  ],

  traps: [
    { p: 'uk us other', t: ['The IGI receipt is valid only inside Romania: do not travel abroad until you hold the plastic permit.',
      'La ricevuta IGI vale solo in Romania: non viaggiare all’estero finché non hai il permesso plastificato.', 'RO-SRC-28 RO-SRC-01'] },
    { p: 'uk us other', t: ['File the residence permit at least 30 days before your 90-day D visa ends, and sign and register the work contract within 15 working days of arriving.',
      'Presenta il permesso almeno 30 giorni prima della scadenza del visto D di 90 giorni, e firma e registra il contratto entro 15 giorni lavorativi dall’arrivo.', 'RO-SRC-01 RO-SRC-02'] },
    { p: 'uk us other', t: ['Medical certificates must carry the exact legal wording on contagious diseases, and foreign criminal records need an apostille and a notarised sworn translation.',
      'I certificati medici devono riportare la formula di legge sulle malattie contagiose, e i casellari esteri richiedono apostille e traduzione giurata legalizzata dal notaio.', 'RO-SRC-01'] },
    { p: 'eu uk us other', t: ['IGI makes surprise checks at the declared address; a false address can cancel the permit and lead to prosecution.',
      'L’IGI fa controlli a sorpresa all’indirizzo dichiarato; un indirizzo falso può annullare il permesso e portare a una denuncia penale.', 'RO-SRC-29'] },
    { p: 'eu uk us other', t: ['IGI wants the lease registered by the landlord with the tax office, or a notarised loan-for-use contract if you are hosted.',
      'L’IGI vuole il contratto d’affitto registrato dal locatore all’Agenzia delle entrate, o un comodato notarile se si è ospitati.', 'RO-SRC-24 RO-SRC-01'] }
  ],

  open: [
    { st: 'pending', t: ['The working-holiday agreement with South Korea is not yet in force.',
      'L’accordo di vacanza-lavoro con la Corea del Sud non è ancora in vigore.'] },
    { st: 'watch', t: ['Land borders are in Schengen, but mobile police checks continue at major crossings.',
      'Le frontiere terrestri sono in Schengen, ma continuano controlli mobili di polizia ai principali valichi.'] },
    { st: 'watch', t: ['The single online application on WorkinRomania.gov.ro, live since August 2026, is still in transition.',
      'La domanda unica online su WorkinRomania.gov.ro, attiva da agosto 2026, è ancora in fase di transizione.'] },
    { st: 'pending', t: ['The minimum wage, the average wage behind the Blue Card salary, and the yearly quota are all reset for 2027.',
      'Salario minimo, salario medio alla base della soglia Carta Blu e quota annuale vengono tutti aggiornati per il 2027.'] }
  ]
});

/* Sources: generated by tools/visas-sources.js from research/visas_immigration/romania/romania_sources.md.
 * Do not edit by hand: change the register, then run the tool. */
ATLAS.visaSources('RO', {
  "RO-SRC-04": ["Guvernul României / Ministerul Justiției: Ordonanța de urgență a Guvernului nr. 102/2005 privind libera circulație a cetățenilor UE/SEE/CH","https://legislatie.just.ro/Public/DetaliiDocument/64010","2026-10-05"],
  "RO-SRC-13": ["Inspectoratul General pentru Imigrări (IGI): Înregistrarea rezidenței cetățenilor UE/SEE/CH","https://igi.mai.gov.ro/en/residence-registration/","2026-10-05"],
  "RO-SRC-23": ["Parlamentul României / Casa Națională de Asigurări de…: Legea nr. 95/2006 privind reforma în domeniul sănătății (republicată)","https://legislatie.just.ro/Public/DetaliiDocument/71120","2026-10-05"],
  "RO-SRC-22": ["Ministerul Educației & UEFISCDI: Study in Romania Portal","https://studyinromania.gov.ro","2026-10-05"],
  "RO-SRC-10": ["Ministerul Afacerilor Externe (MAE): Portale Ufficiale Visti della Romania (eVisa)","https://evisa.mae.ro/","2026-10-05"],
  "RO-SRC-19": ["Inspectoratul General pentru Imigrări (IGI): Portale telematico delle richieste di soggiorno (Portal IGI)","https://portaligi.mai.gov.ro","2026-10-05"],
  "RO-SRC-02": ["Guvernul României / Ministerul Justiției: Ordonanța Guvernului nr. 25/2014 privind încadrarea în muncă și detașarea străinilor pe teritoriul României","https://legislatie.just.ro/Public/DetaliiDocument/161184","2026-10-05"],
  "RO-SRC-03": ["Parlamentul României / Monitorul Oficial nr. 176: Legea nr. 28 din 29 februarie 2024 pentru modificarea și completarea unor acte normative în domeniul străinilor","https://legislatie.just.ro/Public/DetaliiDocument/279587","2026-10-05"],
  "RO-SRC-01": ["Guvernul României / Ministerul Justiției: Ordonanța de urgență a Guvernului nr. 194/2002 privind regimul străinilor în România (republicată)","https://legislatie.just.ro/Public/DetaliiDocument/40987","2026-10-05"],
  "RO-SRC-16": ["Inspectoratul General pentru Imigrări (IGI): Dreptul de ședere temporară pentru studii și absolvenți","https://igi.mai.gov.ro/studii/","2026-10-05"],
  "RO-SRC-06": ["Guvernul României / Monitorul Oficial: Hotărârea Guvernului nr. 146/2026 pentru stabilirea salariului de bază minim brut pe țară garantat în plată","https://legislatie.just.ro/Public/DetaliiDocument/292850","2026-10-05"],
  "RO-SRC-07": ["Guvernul României / Monitorul Oficial nr. 335/2026: Ordonanța de urgență a Guvernului nr. 32 din 23 aprilie 2026 privind accesul cetățenilor străini pe piața muncii din…","https://legislatie.just.ro/Public/DetaliiDocument/293410","2026-10-05"],
  "RO-SRC-11": ["Ministerul Afacerilor Externe (MAE): Condiții și taxe pentru viza de lungă ședere (Tip D)","https://www.mae.ro/node/30301","2026-10-05"],
  "RO-SRC-14": ["Inspectoratul General pentru Imigrări (IGI): Obținerea avizului de angajare și taxe de eliberare","https://igi.mai.gov.ro/obtinerea-avizului/","2026-10-05"],
  "RO-SRC-27": ["Parlamentul României / Monitorul Oficial: Legea nr. 176/2018 privind internshipul & Legea nr. 247/2018 privind stagiul absolvenților","https://legislatie.just.ro/Public/DetaliiDocument/202951","2026-10-05"],
  "RO-SRC-05": ["Parlamentul României / Monitorul Oficial nr. 243/2026: Legea nr. 44/2026 a bugetului asigurărilor sociale de stat pe anul 2026","https://legislatie.just.ro/Public/DetaliiDocument/280912","2026-10-05"],
  "RO-SRC-08": ["Guvernul României / Monitorul Oficial: Hotărârea Guvernului nr. 1.169/2025 privind stabilirea contingentului de lucrători străini nou-admiși pe piața muncii…","https://legislatie.just.ro/Public/DetaliiDocument/291120","2026-10-05"],
  "RO-SRC-17": ["Inspectoratul General pentru Imigrări (IGI): Cercetare științifică și mobilitate cercetători","https://igi.mai.gov.ro/cercetare-stiintifica/","2026-10-05"],
  "RO-SRC-24": ["Parlamentul României / Agenția Națională de Administrare…: Legea nr. 227/2015 privind Codul Fiscal (cu modif. ult.)","https://legislatie.just.ro/Public/DetaliiDocument/171282","2026-10-05"],
  "RO-SRC-09": ["Decizia (UE) 2024/210 a Consiliului din 30 decembrie 2023 & Decizia JAI din 12 decembrie 2024","https://eur-lex.europa.eu/legal-content/IT/TXT/?uri=CELEX:32024D0210","2026-10-05"],
  "RO-SRC-12": ["Ministerul Afacerilor Externe (MAE): Viza uniformă Schengen de scurtă ședere (Tip C)","https://www.mae.ro/node/1482","2026-10-05"],
  "RO-SRC-26": ["Parlamentul României / Monitorul Oficial nr. 534/2022: Legea nr. 22/2022 privind statutul nomazilor digitali","https://legislatie.just.ro/Public/DetaliiDocument/250780","2026-10-05"],
  "RO-SRC-25": ["Agenția Națională de Administrare Fiscală (ANAF): Formularul 030 — Declarație de înregistrare fiscală pentru persoane fizice fără CNP (NIF)","https://static.anaf.ro/static/10/Anaf/Formulare_persoane_fizice/030.pdf","2026-10-05"],
  "RO-SRC-28": ["Poliția de Frontieră Română: Regimul de călătorie în spațiul Schengen și verificările e-DAC","https://www.politiadefrontiera.ro/ro/main/pg-schengen-conditii-de-calatorie-403.html","2026-10-05"],
  "RO-SRC-29": ["Parlamentul României / Ministerul Justiției: Codul Penal al României (Legea nr. 286/2009)","https://legislatie.just.ro/Public/DetaliiDocument/109855","2026-10-05"]
});
