/* Visas and permits: Belgium. From research/visas_immigration/belgium/
 * (guide, source register, open questions), council check of 5 Oct 2026. */
ATLAS.addVisas({
  id: 'BE',
  folder: 'belgium',
  checked: '2026-10-05',
  review: '2027-03-31',

  free: {
    p: 'eu',
    t: [
      ['EU, EEA and Swiss citizens need no visa, work permit or quota.',
        'I cittadini UE, SEE e svizzeri non hanno bisogno di visto, permesso di lavoro o quote.', 'BE-SRC-01'],
      ['Within three months, register at your commune (Annexe 19). Since 1 September 2025 the file must be complete on day one, with the employer’s form or your contract, or for students the enrolment, health cover and proof of means; an incomplete file is refused at once.',
        'Entro tre mesi ci si registra al comune (Annexe 19). Dal 1° settembre 2025 il fascicolo deve essere completo dal primo giorno, con il modulo del datore o il contratto, o per gli studenti l’iscrizione, la copertura sanitaria e la prova dei mezzi; un fascicolo incompleto viene respinto subito.', 'BE-SRC-01 BE-SRC-02'],
      ['A local police officer checks you live at the address; then you receive the EU card, valid five years, for €25 to €35.',
        'Un agente di quartiere verifica che abiti all’indirizzo; poi si riceve la carta EU, valida cinque anni, per 25-35 €.', 'BE-SRC-30 BE-SRC-31']
    ]
  },

  routes: [
    { k: 'study', p: 'uk us other', v: 'open',
      name: ['Student visa (D) and A card', 'Visto D per studio e carta A'], law: 'Law of 15/12/1980 arts. 58-60',
      t: [
        ['Pay the federal fee to the immigration office, apply for the D visa at the embassy, then register at your commune within eight working days of arriving; after the police address check you receive an A card for the academic year.',
          'Si paga la tassa federale all’Ufficio stranieri, si chiede il visto D all’ambasciata, poi ci si registra al comune entro otto giorni lavorativi dall’arrivo; dopo il controllo di polizia si riceve una carta A per l’anno accademico.', 'BE-SRC-26 BE-SRC-13 BE-SRC-15 BE-SRC-27'],
        ['Prove funds through a blocked account at the university, a sponsor’s guarantee (Annexe 32) or a scholarship. You may work 20 hours a week in term and without limit in holidays.',
          'I mezzi si dimostrano con un conto bloccato presso l’università, la garanzia di uno sponsor (Annexe 32) o una borsa. Si può lavorare 20 ore a settimana durante le lezioni e senza limiti nelle vacanze.', 'BE-SRC-15 BE-SRC-16 BE-SRC-17'],
        ['A non-EU student with a permit from another EU country in an EU mobility programme needs no Belgian visa: the university notifies the immigration office, and you can stay up to 360 days.',
          'Uno studente extra-UE con permesso di un altro paese UE in un programma di mobilità europeo non ha bisogno di visto belga: l’università avvisa l’Ufficio stranieri, e si può restare fino a 360 giorni.', 'BE-SRC-15']
      ],
      f: [
        [['Proof of funds, 2026/27', 'Mezzi di sussistenza, 2026/27'], ['€1,062 net a month (€12,744 a year)', '1.062 € netti al mese (12.744 € l’anno)'], 'BE-SRC-15'],
        [['Sponsor’s income, from 1 September 2026', 'Reddito del garante, dal 1° settembre 2026'], ['€3,279.47 net a month', '3.279,47 € netti al mese'], 'BE-SRC-16'],
        [['Fees', 'Costi'], ['€251 federal fee, €250 visa, about €30 card', '251 € tassa federale, 250 € visto, circa 30 € la carta'], 'BE-SRC-26 BE-SRC-13 BE-SRC-31']
      ] },

    { k: 'intern', p: 'eu uk us other', v: 'open',
      name: ['Internship within a degree', 'Tirocinio nel corso di studi'], law: 'RD 09/06/1999 art. 2',
      t: [['An internship that is part of a recognised degree programme, Belgian or from the EEA, needs no work authorisation and no single permit.',
        'Un tirocinio che fa parte di un corso di studi riconosciuto, belga o dello SEE, non richiede autorizzazione al lavoro né permesso unico.', 'BE-SRC-21']] },

    { k: 'intern', p: 'uk us other', v: 'sponsor',
      name: ['Professional immersion agreement (CIP/BIO)', 'Convenzione di immersione professionale (CIP/BIO)'], law: 'Law of 2 August 2002',
      t: [['For people aged 18 to 30: the company applies for a single permit for trainees with a training plan approved by the region; at most 12 months, and the trainee must be paid.',
        'Per chi ha dai 18 ai 30 anni: l’azienda chiede un permesso unico per tirocinanti con un piano formativo approvato dalla Regione; al massimo 12 mesi, e il tirocinante va pagato.', 'BE-SRC-21 BE-SRC-03']],
      f: [[['Fees', 'Costi'], ['€152 federal fee, €250 visa', '152 € tassa federale, 250 € visto'], 'BE-SRC-26 BE-SRC-13']] },

    { k: 'search', p: 'uk us other', v: 'open',
      name: ['Job-search year after a Belgian degree', 'Anno di ricerca lavoro dopo una laurea belga'], law: 'Law of 15/12/1980 arts. 61/32-61/35',
      t: [
        ['After a bachelor’s, master’s or doctorate in Belgium, or at the end of a research stay: 12 months, not renewable, in which you may take any job full time.',
          'Dopo una laurea, un master o un dottorato in Belgio, o alla fine di un soggiorno di ricerca: 12 mesi, non rinnovabili, durante i quali si può svolgere qualsiasi lavoro a tempo pieno.', 'BE-SRC-18'],
        ['A qualified job then converts it inside Belgium, at the lower under-30 salary in Flanders and Wallonia.',
          'Un lavoro qualificato lo converte poi senza lasciare il Belgio, con lo stipendio ridotto per chi ha meno di 30 anni nelle Fiandre e in Vallonia.', 'BE-SRC-03 BE-SRC-18']
      ],
      f: [[['Funds', 'Mezzi'], ['€12,744 for the year', '12.744 € per l’anno'], 'BE-SRC-15 BE-SRC-16']],
      w: ['Apply at your commune at least 15 days before your student card expires: later, the application is inadmissible and you are ordered to leave.',
        'Fai domanda al comune almeno 15 giorni prima della scadenza della carta da studente: più tardi la domanda è irricevibile e si riceve l’ordine di lasciare il paese.', 'BE-SRC-18'] },

    { k: 'work', p: 'uk us other', v: 'sponsor',
      name: ['Single permit for highly qualified work', 'Permesso unico per lavoro altamente qualificato'], law: 'Cooperation agreement of 2 February 2018',
      t: [['Only the Belgian employer can apply, through Working in Belgium. A three-year degree and a salary above the region’s threshold exempt the job from the labour-market test.',
        'Solo il datore belga può fare domanda, tramite Working in Belgium. Una laurea triennale e uno stipendio sopra la soglia della Regione esentano il posto dal test del mercato del lavoro.', 'BE-SRC-03 BE-SRC-05 BE-SRC-08 BE-SRC-10']],
      f: [
        [['Salary, Flanders', 'Stipendio, Fiandre'], ['€48,912 a year; €39,129.60 under 30', '48.912 € l’anno; 39.129,60 € sotto i 30 anni'], 'BE-SRC-07'],
        [['Salary, Brussels', 'Stipendio, Bruxelles'], ['€3,703.44 a month', '3.703,44 € al mese'], 'BE-SRC-09'],
        [['Salary, Wallonia', 'Stipendio, Vallonia'], ['€53,220 a year; €42,576 under 30', '53.220 € l’anno; 42.576 € sotto i 30 anni'], 'BE-SRC-11'],
        [['Fees', 'Costi'], ['€152 federal, €250 visa, plus €180 in Flanders', '152 € federale, 250 € visto, più 180 € nelle Fiandre'], 'BE-SRC-26 BE-SRC-13 BE-SRC-06']
      ],
      w: ['No one can apply for a single permit for you for a fee: offers to do so are scams.',
        'Nessuno può chiedere un permesso unico per te a pagamento: chi lo offre è un truffatore.', 'BE-SRC-03'] },

    { k: 'work', p: 'uk us other', v: 'sponsor',
      name: ['EU Blue Card (H card)', 'Carta Blu UE (carta H)'], law: 'Directive 2021/1883',
      t: [['A contract of at least six months and a three-year degree, or three (IT) to five years of experience in the last seven; the H card lasts up to three years, and a spouse joins at once with the right to work.',
        'Un contratto di almeno sei mesi e una laurea triennale, o da tre (informatica) a cinque anni di esperienza negli ultimi sette; la carta H dura fino a tre anni, e il coniuge arriva subito con diritto al lavoro.', 'BE-SRC-12 BE-SRC-27']],
      f: [
        [['Salary, Flanders', 'Stipendio, Fiandre'], ['€63,586 a year', '63.586 € l’anno'], 'BE-SRC-07'],
        [['Salary, Brussels', 'Stipendio, Bruxelles'], ['€4,748 a month', '4.748 € al mese'], 'BE-SRC-09'],
        [['Salary, Wallonia', 'Stipendio, Vallonia'], ['€68,815 a year; €55,052 for recent graduates', '68.815 € l’anno; 55.052 € per i neolaureati'], 'BE-SRC-11']
      ] },

    { k: 'work', p: 'uk us other', v: 'limited',
      name: ['Ordinary single permit', 'Permesso unico ordinario'], law: 'Law of 15/12/1980 arts. 61/25',
      t: [['Below the thresholds, the employer must first advertise the job with the regional agency (VDAB, Actiris, Le Forem) and show no local or EU candidate could be found; the legal time limit is four months.',
        'Sotto le soglie, il datore deve prima pubblicare il posto presso l’agenzia regionale (VDAB, Actiris, Le Forem) e dimostrare che non si è trovato un candidato locale o UE; il termine legale è di quattro mesi.', 'BE-SRC-04 BE-SRC-34']] },

    { k: 'research', p: 'uk us other', v: 'sponsor',
      name: ['Researcher with a hosting agreement', 'Ricercatore con convenzione di accoglienza'], law: 'Law of 15/12/1980 arts. 61/10-61/13',
      t: [
        ['A master’s degree and a hosting agreement with a research institution approved by BELSPO; the agreement is your work authorisation, with no regional step. Family can join at once.',
          'Un master e una convenzione di accoglienza con un ente di ricerca approvato da BELSPO; la convenzione vale come autorizzazione al lavoro, senza passaggio regionale. La famiglia può arrivare subito.', 'BE-SRC-19 BE-SRC-20'],
        ['A PhD can be an employment contract, a tax-free grant (FWO, F.R.S.-FNRS, BOF) or plain student status; the grant earns no ordinary pension rights.',
          'Un dottorato può essere un contratto di lavoro, una borsa esente da imposte (FWO, F.R.S.-FNRS, BOF) o il semplice status di studente; la borsa non matura diritti pensionistici ordinari.', 'BE-SRC-19 BE-SRC-15']
      ],
      f: [[['Fees', 'Costi'], ['€152 federal fee, €250 visa', '152 € tassa federale, 250 € visto'], 'BE-SRC-26 BE-SRC-13']] },

    { k: 'whv', p: 'uk us', v: 'closed',
      name: ['Working holiday', 'Vacanza-lavoro'], law: 'bilateral agreements',
      t: [['Belgium has working-holiday agreements only with Australia, New Zealand, Canada, Taiwan and South Korea.',
        'Il Belgio ha accordi di vacanza-lavoro solo con Australia, Nuova Zelanda, Canada, Taiwan e Corea del Sud.', 'BE-SRC-22']] },

    { k: 'whv', p: 'other', v: 'limited',
      name: ['Working holiday', 'Vacanza-lavoro'], law: 'bilateral agreements',
      t: [['Only for citizens of Australia, New Zealand, Canada, Taiwan and South Korea aged 18 to 30, with about €2,500: 12 months, at most six with one employer, and no conversion inside Belgium.',
        'Solo per cittadini di Australia, Nuova Zelanda, Canada, Taiwan e Corea del Sud dai 18 ai 30 anni, con circa 2.500 €: 12 mesi, al massimo sei con lo stesso datore, e nessuna conversione in Belgio.', 'BE-SRC-22']] },

    { k: 'short', p: 'uk us other', v: 'open',
      name: ['Short stay', 'Soggiorno breve'], law: 'Law of 15/12/1980 arts. 9, 9bis',
      t: [
        ['Up to 90 days with no work. Staying with friends or in an unregistered rental, declare your arrival at the commune within three working days (Annexe 3).',
          'Fino a 90 giorni senza lavorare. Se si alloggia da amici o in un affitto non registrato, si dichiara l’arrivo al comune entro tre giorni lavorativi (Annexe 3).', 'BE-SRC-23'],
        ['A long stay must be requested from the Belgian consulate abroad, visa-free nationals included; applying from inside Belgium is possible only in exceptional circumstances.',
          'Un soggiorno lungo va chiesto al consolato belga all’estero, anche da chi è esente da visto; la domanda dal Belgio è possibile solo in circostanze eccezionali.', 'BE-SRC-36']
      ] }
  ],

  arrival: [
    { k: 'before', p: 'eu uk us other', t: [
      ['Do not sign a lease marked “no domiciliation” (pas de domiciliation): you could not register at that address. Put your full name on the doorbell and letterbox the day you move in, ready for the police check.',
        'Non firmare un contratto con la dicitura “niente domiciliazione” (pas de domiciliation): non potresti registrarti a quell’indirizzo. Metti nome e cognome su citofono e cassetta delle lettere il giorno dell’ingresso, in vista del controllo di polizia.', 'BE-SRC-30']
    ] },
    { k: 'before', p: 'uk us other', t: [
      ['Get the long-stay (D) visa at a Belgian embassy before you travel: €250 since 1 July 2026, plus about €30 for the visa centre.',
        'Prendi il visto per lungo soggiorno (D) presso un’ambasciata belga prima di partire: 250 € dal 1° luglio 2026, più circa 30 € per il centro visti.', 'BE-SRC-13']
    ] },
    { k: 'address', p: 'eu', t: [
      ['Register at the commune within 3 months, with a complete file on the first visit: since 1 September 2025 an incomplete one is refused. Bring ID, proof of address and your work contract, or as a student your enrolment, health card and a statement of means; you get an Annexe 19 receipt at once.',
        'Registrati al comune entro 3 mesi, con un fascicolo completo alla prima visita: dal 1° settembre 2025 uno incompleto viene respinto. Porta documento d’identità, prova dell’alloggio e contratto di lavoro, o da studente iscrizione, tessera sanitaria e dichiarazione sui mezzi; ricevi subito la ricevuta Annexe 19.', 'BE-SRC-01 BE-SRC-02']
    ] },
    { k: 'address', p: 'uk us other', t: [
      ['Register at the commune within 8 working days of arriving; a neighbourhood police officer then visits to check that you live there.',
        'Registrati al comune entro 8 giorni lavorativi dall’arrivo; un agente di quartiere passa poi a verificare che tu viva lì.', 'BE-SRC-04 BE-SRC-15 BE-SRC-27']
    ] },
    { k: 'card', p: 'eu', t: [
      ['Once registered, the commune issues the registration certificate (Annexe 8) and the electronic EU card, valid 5 years.',
        'Completata la registrazione, il comune rilascia l’attestato di registrazione (Annexe 8) e la carta elettronica EU, valida 5 anni.', 'BE-SRC-01 BE-SRC-30']
    ] },
    { k: 'card', p: 'uk us other', t: [
      ['After the police check you collect the electronic residence card (A card): about €30 in Brussels, or about €150 for urgent production in 24 to 48 hours. A student’s card lasts one academic year, to 31 October of the next year.',
        'Dopo il controllo di polizia ritiri la carta di soggiorno elettronica (Carta A): circa 30 € a Bruxelles, o circa 150 € per la produzione urgente in 24-48 ore. La carta di uno studente dura un anno accademico, fino al 31 ottobre dell’anno successivo.', 'BE-SRC-27 BE-SRC-31']
    ] },
    { k: 'number', p: 'eu uk us other', t: [
      ['Registration puts you in the National Register, which gives your national number (NISS), or a provisional BIS number while it is processed; your employer and health fund need it.',
        'La registrazione ti iscrive al Registro nazionale, che assegna il numero nazionale (NISS), o un numero BIS provvisorio durante la pratica; servono al datore di lavoro e alla cassa malattia.', 'BE-SRC-27 BE-SRC-28']
    ] },
    { k: 'health', p: 'eu uk us other', t: [
      ['Join a health fund (mutualité, ziekenfonds), or the public fund CAAMI, which charges no extra contribution. Bring the S1 or E104 form from your previous insurer to skip the 6-month waiting period.',
        'Iscriviti a una cassa malattia (mutualité, ziekenfonds), o alla cassa pubblica CAAMI, che non chiede contributi aggiuntivi. Porta il modulo S1 o E104 del precedente assicuratore per evitare il periodo di carenza di 6 mesi.', 'BE-SRC-28 BE-SRC-29']
    ] },
    { k: 'health', p: 'eu', t: [
      ['EU students can register with their European Health Insurance Card instead.',
        'Gli studenti UE possono invece registrarsi con la Tessera europea di assicurazione malattia.', 'BE-SRC-01']
    ] },
    { k: 'bank', p: 'eu', none: true },
    { k: 'bank', p: 'uk us other', t: [
      ['Students with a blocked account at their university or an approved provider receive €1,062 a month from it after arriving.',
        'Gli studenti con un conto bloccato presso l’università o un intermediario autorizzato ricevono da esso 1.062 € al mese dopo l’arrivo.', 'BE-SRC-15 BE-SRC-32']
    ] },
    { k: 'keep', p: 'eu', none: true },
    { k: 'keep', p: 'uk us other', t: [
      ['While a renewal or your card is pending, the commune gives you an Annexe 49: it keeps you legal in Belgium but is not a travel document. Leaving Schengen with it can mean being refused boarding home, so ask for urgent card production if you must travel.',
        'Mentre il rinnovo o la carta sono in attesa, il comune rilascia un Annexe 49: ti mantiene in regola in Belgio ma non è un documento di viaggio. Uscire dallo spazio Schengen con esso può significare il rifiuto all’imbarco per il ritorno, quindi chiedi la produzione urgente della carta se devi viaggiare.', 'BE-SRC-04 BE-SRC-18 BE-SRC-31']
    ] }
  ],

  traps: [
    { p: 'uk us other', t: ['While you wait, the Annexe 49 is valid only in Belgium: travelling through another Schengen country or flying back with it can end in refusal. If you must travel, ask the commune for the urgent card (about €130 to €150).',
      'Durante l’attesa l’Annexe 49 vale solo in Belgio: attraversare un altro paese Schengen o rientrare in aereo con essa può finire con un rifiuto. Se devi viaggiare, chiedi al comune la carta urgente (circa 130-150 €).', 'BE-SRC-31'] },
    { p: 'eu uk us other', t: ['Refuse a lease marked “no domiciliation”, and put your name on the bell and letterbox: the police address check decides your registration.',
      'Rifiuta un contratto con la dicitura “niente domiciliazione”, e metti il tuo nome su citofono e cassetta: il controllo di polizia all’indirizzo decide la registrazione.', 'BE-SRC-30'] },
    { p: 'eu uk us other', t: ['Choosing the public fund CAAMI avoids the membership fee of a private health fund (mutualité).',
      'Scegliere la cassa pubblica CAAMI evita la quota associativa di una mutualità privata.', 'BE-SRC-29'] }
  ],

  open: [
    { st: 'watch', t: ['Single permits take 3 to 6 weeks at the regional stage in Flanders and up to 8 to 12 weeks in Brussels and Wallonia, plus two to three months at federal level.',
      'Il permesso unico richiede 3-6 settimane nella fase regionale nelle Fiandre e fino a 8-12 settimane a Bruxelles e in Vallonia, più due o tre mesi nella fase federale.'] },
    { st: 'open', t: ['Brussels communes (Brussels City, Ixelles, Schaerbeek) give foreigners’ desk appointments in 6 to 16 weeks; a missed one costs months.',
      'I comuni di Bruxelles (Bruxelles-Città, Ixelles, Schaerbeek) danno appuntamenti allo sportello stranieri in 6-16 settimane; perderne uno costa mesi.'] },
    { st: 'open', t: ['Not every local police zone accepts the online arrival declaration (Mijn adres in België) launched in April 2026.',
      'Non tutte le zone di polizia accettano la dichiarazione di arrivo online (Mijn adres in België) attivata ad aprile 2026.'] },
    { st: 'open', t: ['Most banks will not open an account online without a Belgian eID; expat desks or the basic banking service are the way in.',
      'La maggior parte delle banche non apre un conto online senza eID belga; si passa dai desk per expat o dal servizio bancario di base.'] },
    { st: 'pending', t: ['Family reunion is moving from 120% of the integration income (€2,217.47 net) to 110% of the minimum wage (€2,456.97 net) during 2025 to 2027.',
      'Il ricongiungimento passa dal 120% del reddito di integrazione (2.217,47 € netti) al 110% del salario minimo (2.456,97 € netti) nel periodo 2025-2027.'] }
  ]
});

/* Sources: generated by tools/visas-sources.js from research/visas_immigration/belgium/belgium_sources.md.
 * Do not edit by hand: change the register, then run the tool. */
ATLAS.visaSources('BE', {
  "BE-SRC-01": ["Office des Étrangers (SPF Intérieur): Séjour de plus de 3 mois pour citoyen de l'Union (Annexe 19 / Carte EU)","https://dofi.ibz.be/fr/themes/citoyens-de-lunion/droit-dentree-et-de-sejour/sejour-de-plus-de-3-mois","2026-10-05"],
  "BE-SRC-02": ["Office des Étrangers (SPF Intérieur): Demande d'attestation d'enregistrement (Riforma 01/09/2025 - dossier complet)","https://dofi.ibz.be/fr/themes/citoyens-de-lunion/droit-dentree-et-de-sejour/sejour-de-plus-de-3-mois/la-demande-dattestation-denregistrement-annexe-19","2026-10-05"],
  "BE-SRC-30": ["Ville de Bruxelles (Brucity): Enregistrement citoyen UE et délivrance titre de séjour","https://www.brussels.be/registration-student-eu-citizen","2026-10-05"],
  "BE-SRC-31": ["Ville de Bruxelles (Brucity): Tarifs et délais des cartes de séjour électroniques (Standard 30 € / Urgence 150 €)","https://www.brussels.be/residence-cards-foreigners","2026-10-05"],
  "BE-SRC-26": ["Office des Étrangers (SPF Intérieur): Redevance administrative fédérale 2026 (Montants légaux indexés au 01/01/2026)","https://dofi.ibz.be/fr/themes/ressortissants-dun-pays-tiers/redevance","2026-10-05"],
  "BE-SRC-13": ["SPF Affaires étrangères: Droits de visa D (Long séjour) – Frais de traitement portés à 250 € (01/07/2026)","https://diplomatie.belgium.be/fr/services/venir-en-belgique/visa-pour-la-belgique","2026-10-05"],
  "BE-SRC-15": ["Office des Étrangers (SPF Intérieur): Moyens de subsistance suffisants pour étudiants 2026/2027 (1.062 €/mois)","https://dofi.ibz.be/fr/themes/ressortissants-dun-pays-tiers/etudes/moyens-de-subsistance-suffisants","2026-10-05"],
  "BE-SRC-27": ["SPF Intérieur – Registre National: Circulaire relative au tarif des cartes d'identité et de séjour électroniques (2026)","https://rrn.fgov.be/fr/documents-didentite/cartes-pour-etrangers/","2026-10-05"],
  "BE-SRC-16": ["Office des Étrangers (SPF Intérieur): Engagement de prise en charge (Annexe 32) – Seuil garant 3.279,47 €/mois (01/09/2026)","https://dofi.ibz.be/fr/themes/ressortissants-dun-pays-tiers/etudes/engagement-de-prise-en-charge-annexe-32","2026-10-05"],
  "BE-SRC-17": ["Office des Étrangers (SPF Intérieur): Travailler pendant les études (Max 20h/semaine hors vacances scolaires)","https://dofi.ibz.be/fr/themes/ressortissants-dun-pays-tiers/etudes/travailler-pendant-les-etudes","2026-10-05"],
  "BE-SRC-21": ["Office des Étrangers (SPF Intérieur): Stagiaires – Conditions de stage curriculaire vs extracurriculaire","https://dofi.ibz.be/fr/themes/ressortissants-dun-pays-tiers/travail/stagiaire","2026-10-05"],
  "BE-SRC-03": ["SPF Intérieur / Portail Fédéral: Working in Belgium – Guichet unique pour permis unique","https://www.workinginbelgium.be","2026-10-05"],
  "BE-SRC-18": ["Office des Étrangers (SPF Intérieur): Autorisation de séjour après les études (Zoekjaar / Année de recherche - Art. 61/32)","https://dofi.ibz.be/fr/themes/ressortissants-dun-pays-tiers/etudes/autorisation-de-sejour-apres-les-etudes-annee-de-recherche","2026-10-05"],
  "BE-SRC-05": ["Vlaamse Overheid (WSE): Gecombineerde vergunning voor buitenlandse werknemers (Vlaanderen)","https://www.vlaanderen.be/gecombineerde-vergunning-voor-buitenlandse-werknemers","2026-10-05"],
  "BE-SRC-08": ["Bruxelles Économie et Emploi: Permis unique et Carte bleue européenne – Région de Bruxelles-Capitale","https://economie-emploi.brussels/permis-unique","2026-10-05"],
  "BE-SRC-10": ["SPW Emploi (Wallonie): Permis de travail et permis unique – Région Wallonne","https://emploi.wallonie.be/home/travailleurs-etrangers/permis-de-travail.html","2026-10-05"],
  "BE-SRC-07": ["Vlaamse Overheid (WSE): Salarisvoorwaarden 2026: Hooggeschoold (€48.912 / €39.129,60) & Blauwe Kaart (€63.586)","https://www.vlaanderen.be/een-buitenlander-in-vlaanderen-tewerkstellen/europese-blauwe-kaart","2026-10-05"],
  "BE-SRC-09": ["Bruxelles Économie et Emploi: Seuils de rémunération 2026 Bruxelles: Hautement qualifié (€3.703,44/m), Carte bleue (€4.748,00/m)","https://economie-emploi.brussels/carte-bleue-europeenne","2026-10-05"],
  "BE-SRC-11": ["SPW Emploi (Wallonie): Seuils de rémunération 2026 Wallonie: Hautement qualifié (€53.220 / €42.576), Carte bleue (€68.815 / €55.052)","https://emploi.wallonie.be/home/travailleurs-etrangers/permis-de-travail/la-carte-bleue-europeenne.html","2026-10-05"],
  "BE-SRC-06": ["Vlaamse Overheid (WSE): Vlaamse retributie van 180 € per aanvraag gecombineerde vergunning (01/09/2026)","https://www.vlaanderen.be/een-buitenlander-in-vlaanderen-tewerkstellen/procedure-gecombineerde-vergunning","2026-10-05"],
  "BE-SRC-12": ["Office des Étrangers (SPF Intérieur): Carte bleue européenne – Conditions fédérales (Directive 2021/1883)","https://dofi.ibz.be/fr/themes/ressortissants-dun-pays-tiers/travail/carte-bleue-europeenne","2026-10-05"],
  "BE-SRC-04": ["Office des Étrangers (SPF Intérieur): Permis unique (Single Permit) – Cadre légal et Annexe 46","https://dofi.ibz.be/fr/themes/ressortissants-dun-pays-tiers/travail/permis-unique","2026-10-05"],
  "BE-SRC-34": ["Moniteur Belge / Belgisch Staatsblad: Accord de coopération du 2 février 2018 relatif au permis unique","https://www.ejustice.just.fgov.be/eli/accord/2018/02/02/2018011244/justel","2026-10-05"],
  "BE-SRC-19": ["Office des Étrangers (SPF Intérieur): Chercheur scientifique sous convention d'accueil (Art. 61/10 à 61/13)","https://dofi.ibz.be/fr/themes/ressortissants-dun-pays-tiers/chercheur","2026-10-05"],
  "BE-SRC-20": ["BELSPO (Politique scientifique fédérale): Organismes de recherche agréés pour la convention d'accueil","https://www.belspo.be/belspo/ostc/act/foreignres_fr.stm","2026-10-05"],
  "BE-SRC-22": ["Office des Étrangers (SPF Intérieur): Working Holiday Programme (Australie, Nouvelle-Zélande, Canada, Taïwan, Corée)","https://dofi.ibz.be/en/themes/third-country-nationals/work/working-holiday-programme","2026-10-05"],
  "BE-SRC-23": ["Office des Étrangers (SPF Intérieur): Court séjour / Déclaration d'arrivée au commune (Annexe 3 / Annexe 3ter)","https://dofi.ibz.be/fr/themes/ressortissants-dun-pays-tiers/court-sejour/declaration-darrivee-annexe-3","2026-10-05"],
  "BE-SRC-36": ["Moniteur Belge / Belgisch Staatsblad: Loi du 15 décembre 1980 sur l'accès au territoire, le séjour, l'établissement et l'éloignement des étrangers, art. 9 e…","https://www.ejustice.just.fgov.be/eli/loi/1980/12/15/1980121550/justel","2026-10-06"],
  "BE-SRC-28": ["INAMI / RIZIV: Inscription obligatoire à l'assurance soins de santé et cotisations (2026)","https://www.inami.fgov.be/fr/themes/soins-de-sante-cout-et-remboursement/assurance-soins-de-sante-comment-etre-assure","2026-10-05"],
  "BE-SRC-29": ["CAAMI / HZIV: Caisse auxiliaire publique d'assurance maladie-invalidité (Régime gratuit sans cotisation complémentaire)","https://www.caami-hziv.fgov.be/fr","2026-10-05"],
  "BE-SRC-32": ["KU Leuven – Admissions & Immigration: Search Year & Blocked Account procedures","https://www.kuleuven.be/english/life-at-ku-leuven/immigration-residence/search-year","2026-10-05"]
});
