/* Visas and permits: France. From research/visas_immigration/france/
 * (guide, source register, open questions), council check of 5 Oct 2026. */
ATLAS.addVisas({
  id: 'FR',
  folder: 'france',
  checked: '2026-10-05',
  review: '2027-03-31',

  free: {
    p: 'eu',
    t: [
      ['EU, EEA and Swiss citizens need no visa, residence card or work permit to study or work in France.',
        'I cittadini UE, SEE e svizzeri non hanno bisogno di visto, carta di soggiorno o permesso di lavoro per studiare o lavorare in Francia.', 'FR-SRC-01'],
      ['After three months the right to stay rests on a reason: work, or a course with health cover and enough money, or enough money and health cover; keep proof of yours.',
        'Dopo tre mesi il diritto di soggiorno dipende da un motivo: un lavoro, oppure un corso con copertura sanitaria e risorse sufficienti, oppure risorse e copertura sanitaria; conserva le prove del tuo.', 'FR-SRC-01'],
      ['The European Health Insurance Card is enough only while you do not work: any job or paid internship in France means registering with the French health insurance (CPAM).',
        'La tessera sanitaria europea basta solo finché non lavori: qualsiasi impiego o stage retribuito in Francia richiede l’iscrizione all’assicurazione sanitaria francese (CPAM).', 'FR-SRC-02 FR-SRC-03']
    ]
  },

  routes: [
    { k: 'study', p: 'uk us other', v: 'open',
      name: ['Long-stay student visa (VLS-TS Étudiant)', 'Visto di lungo soggiorno per studio (VLS-TS Étudiant)'], law: 'CESEDA',
      t: [
        ['In more than 70 countries you first go through Campus France’s Études en France procedure, with an interview. The visa works as a residence permit for its first year once you validate it online within three months of arriving.',
          'In oltre 70 paesi si passa prima dalla procedura Études en France di Campus France, con colloquio. Il visto vale come permesso di soggiorno per il primo anno, una volta convalidato online entro tre mesi dall’arrivo.', 'FR-SRC-26 FR-SRC-04'],
        ['You may work 964 hours a year without authorisation; an internship your course requires and an apprenticeship contract do not count against it.',
          'Si può lavorare 964 ore all’anno senza autorizzazione; lo stage previsto dal corso e il contratto di apprendistato non rientrano nel conteggio.', 'FR-SRC-05 FR-SRC-13'],
        ['A non-EU student already holding a student permit from another EU country can study here up to 360 days without a French visa, once the French school notifies the prefecture.',
          'Uno studente extra-UE con permesso per studio di un altro paese UE può studiare qui fino a 360 giorni senza visto francese, dopo la notifica della scuola francese alla prefettura.', 'FR-SRC-18']
      ],
      f: [
        [['Proof of funds', 'Mezzi di sussistenza'], ['€877.50 a month (€8,775 for 10 months)', '877,50 € al mese (8.775 € per 10 mesi)'], 'FR-SRC-09'],
        [['Visa', 'Visto'], ['€50 through Études en France, €99 otherwise', '50 € con Études en France, 99 € altrimenti'], 'FR-SRC-10'],
        [['Online validation on arrival', 'Convalida online all’arrivo'], ['€100', '100 €'], 'FR-SRC-04'],
        [['Student life contribution (CVEC)', 'Contributo vita studentesca (CVEC)'], ['€105', '105 €'], 'FR-SRC-11']
      ],
      w: ['Apply to renew between four and two months before your card expires; outside that window a €180 late fee applies.',
        'Chiedi il rinnovo tra quattro e due mesi prima della scadenza della carta; fuori da questa finestra si paga una penale di 180 €.', 'FR-SRC-25'] },

    { k: 'intern', p: 'eu uk us other', v: 'open',
      name: ['Internship (stage) under an agreement', 'Stage con convenzione'], law: 'Code de l’éducation',
      t: [
        ['Every internship needs a three-way agreement with a school where you are enrolled; France has no internship for people who have already graduated, and one without an agreement counts as undeclared work.',
          'Ogni stage richiede una convenzione tripartita con un istituto in cui si è iscritti; in Francia non esiste lo stage per chi si è già laureato, e uno stage senza convenzione è lavoro nero.', 'FR-SRC-13'],
        ['At most six months (924 hours) a year with the same host; pay becomes compulsory beyond 308 hours, about two months.',
          'Al massimo sei mesi (924 ore) all’anno presso lo stesso ente; la gratifica diventa obbligatoria oltre le 308 ore, circa due mesi.', 'FR-SRC-13'],
        ['Non-EU interns living abroad need a VLS-TS Stagiaire visa, after the regional labour office (DREETS) has stamped the agreement.',
          'Gli stagisti extra-UE che vivono all’estero hanno bisogno del visto VLS-TS Stagiaire, dopo la vidimazione della convenzione da parte dell’ufficio regionale del lavoro (DREETS).', 'FR-SRC-13']
      ],
      f: [
        [['Minimum internship pay, 2026', 'Gratifica minima, 2026'], ['€4.50 an hour, about €682.52 a month', '4,50 € l’ora, circa 682,52 € al mese'], 'FR-SRC-13'],
        [['Non-EU: visa and validation', 'Extra-UE: visto e convalida'], ['€99 + €100', '99 € + 100 €'], 'FR-SRC-10 FR-SRC-04']
      ] },

    { k: 'search', p: 'uk us other', v: 'open',
      name: ['Job-search or business-creation card (RECE)', 'Carta ricerca lavoro o creazione d’impresa (RECE)'], law: 'CESEDA L. 422-10',
      t: [
        ['After a French master’s, an accredited Mastère Spécialisé or MSc, a professional licence or a doctorate you get 12 months, not renewable, during which you may work full time in any job.',
          'Dopo un master francese, un Mastère Spécialisé o MSc accreditato, una licence professionnelle o un dottorato si ottengono 12 mesi non rinnovabili, durante i quali si può lavorare a tempo pieno in qualsiasi impiego.', 'FR-SRC-06'],
        ['A job linked to your studies paying at least 1.5 times the minimum wage turns it into a work permit with no labour-market test; if you left France, you can still apply from abroad within four years of graduating.',
          'Un lavoro legato agli studi pagato almeno 1,5 volte il salario minimo la trasforma in permesso di lavoro senza test del mercato; chi ha lasciato la Francia può ancora chiederla dall’estero entro quattro anni dalla laurea.', 'FR-SRC-06 FR-SRC-12']
      ],
      f: [
        [['Length', 'Durata'], ['12 months', '12 mesi'], 'FR-SRC-06'],
        [['Pay to switch to a work permit', 'Stipendio per passare al permesso di lavoro'], ['€2,800.53 gross a month', '2.800,53 € lordi al mese'], 'FR-SRC-06 FR-SRC-12'],
        [['Fee', 'Costo'], ['€150', '150 €'], 'FR-SRC-04']
      ],
      w: ['Apply before your student card expires: the card is not given to someone whose student permit has already run out.',
        'Fai domanda prima che scada la carta da studente: la carta non viene concessa a chi ha già il permesso di studio scaduto.', 'FR-SRC-06'] },

    { k: 'work', p: 'uk us other', v: 'sponsor',
      name: ['Talent card: qualified employee or EU Blue Card', 'Carta Talent: dipendente qualificato o Carta Blu UE'], law: 'CESEDA L. 421',
      t: [
        ['A multi-year card of up to four years from the start, with no labour-market test and no employer tax; a spouse gets a card that allows any work.',
          'Una carta pluriennale fino a quattro anni fin dall’inizio, senza test del mercato e senza tassa per il datore; il coniuge ottiene una carta che consente qualsiasi lavoro.', 'FR-SRC-07 FR-SRC-20'],
        ['Qualified employee: a French master’s or equivalent and a contract of more than three months. Blue Card: a three-year degree or five years of experience and a contract of at least six months.',
          'Dipendente qualificato: un master francese o equivalente e un contratto di oltre tre mesi. Carta Blu: una laurea triennale o cinque anni di esperienza e un contratto di almeno sei mesi.', 'FR-SRC-07 FR-SRC-08']
      ],
      f: [
        [['Salary, qualified employee', 'Stipendio, dipendente qualificato'], ['€39,582 a year', '39.582 € l’anno'], 'FR-SRC-07'],
        [['Salary, EU Blue Card', 'Stipendio, Carta Blu UE'], ['€59,373 a year', '59.373 € l’anno'], 'FR-SRC-08'],
        [['Fees', 'Costi'], ['€99 visa, €350 card', '99 € il visto, 350 € la carta'], 'FR-SRC-10 FR-SRC-07']
      ] },

    { k: 'work', p: 'uk us other', v: 'sponsor',
      name: ['Ordinary employee permit (Salarié)', 'Permesso per lavoro dipendente (Salarié)'], law: 'Code du travail',
      t: [
        ['Below the Talent salary, the employer first advertises the job with France Travail for 21 days (unless it is a shortage occupation), then requests a work authorisation online; only then can you apply for the visa.',
          'Sotto lo stipendio Talent, il datore pubblica prima l’offerta su France Travail per 21 giorni (salvo professioni carenti), poi chiede online l’autorizzazione al lavoro; solo allora si può chiedere il visto.', 'FR-SRC-16'],
        ['The employer also pays a tax to the immigration office of 55% of one month’s gross salary for a permanent contract.',
          'Il datore paga anche una tassa all’ufficio immigrazione pari al 55% di un mese di stipendio lordo per un contratto a tempo indeterminato.', 'FR-SRC-12 FR-SRC-16']
      ],
      f: [
        [['Employer tax, maximum', 'Tassa datoriale, massimo'], ['€4,667.55', '4.667,55 €'], 'FR-SRC-12 FR-SRC-16'],
        [['Your fees', 'I tuoi costi'], ['€99 visa, €350 card', '99 € il visto, 350 € la carta'], 'FR-SRC-10 FR-SRC-16']
      ],
      w: ['Starting work before the date on the authorisation counts as undeclared work, for you and the employer.',
        'Iniziare a lavorare prima della data indicata sull’autorizzazione è lavoro nero, per te e per il datore.', 'FR-SRC-16'] },

    { k: 'research', p: 'uk us other', v: 'sponsor',
      name: ['Talent card: researcher, and paid PhDs', 'Carta Talent: ricercatore e dottorati retribuiti'], law: 'CESEDA L. 421-14',
      t: [
        ['A paid PhD or research post needs a hosting agreement with an accredited university or research body (CNRS, INRIA, INSERM…); no work authorisation is needed, and the card lasts as long as the contract, up to four years.',
          'Un dottorato retribuito o un posto di ricerca richiede una convenzione di accoglienza con un’università o un ente accreditato (CNRS, INRIA, INSERM…); non serve autorizzazione al lavoro, e la carta dura quanto il contratto, fino a quattro anni.', 'FR-SRC-17'],
        ['A visiting PhD student without a French contract comes on an ordinary student visa, with the student proof of funds.',
          'Un dottorando in visita senza contratto francese entra con un normale visto per studio, con i mezzi di sussistenza richiesti agli studenti.', 'FR-SRC-04 FR-SRC-09']
      ],
      f: [[['Minimum pay, from 1 January 2026', 'Retribuzione minima, dal 1° gennaio 2026'], ['€2,300 gross a month', '2.300 € lordi al mese'], 'FR-SRC-17']] },

    { k: 'whv', p: 'uk us', v: 'closed',
      name: ['Working holiday (PVT)', 'Vacanza-lavoro (PVT)'], law: 'bilateral agreements',
      t: [['France has no working-holiday agreement with the UK or the US.',
        'La Francia non ha accordi di vacanza-lavoro con il Regno Unito o gli Stati Uniti.', 'FR-SRC-19']] },

    { k: 'whv', p: 'other', v: 'limited',
      name: ['Working holiday (PVT)', 'Vacanza-lavoro (PVT)'], law: 'bilateral agreements',
      t: [
        ['Only for citizens of Argentina, Australia, Brazil, Canada, Chile, Colombia, South Korea, Ecuador, Japan, Hong Kong, Mexico, New Zealand, Peru, Taiwan and Uruguay, aged 18 to 30 (35 for Australia, Canada and Argentina); 12 months, any job, no work authorisation.',
          'Solo per cittadini di Argentina, Australia, Brasile, Canada, Cile, Colombia, Corea del Sud, Ecuador, Giappone, Hong Kong, Messico, Nuova Zelanda, Perù, Taiwan e Uruguay, dai 18 ai 30 anni (35 per Australia, Canada e Argentina); 12 mesi, qualsiasi lavoro, senza autorizzazione.', 'FR-SRC-19'],
        ['It cannot be converted into another permit inside France: you must go home when it ends.',
          'Non si può convertire in un altro permesso in Francia: alla scadenza si deve rientrare.', 'FR-SRC-19']
      ],
      f: [[['Visa', 'Visto'], ['free for Canada, Brazil, Argentina and Colombia; €99 otherwise', 'gratuito per Canada, Brasile, Argentina e Colombia; 99 € per gli altri'], 'FR-SRC-10 FR-SRC-19']] },

    { k: 'short', p: 'uk us other', v: 'open',
      name: ['Short stay', 'Soggiorno breve'], law: 'Schengen',
      t: [
        ['UK and US citizens visit without a visa for up to 90 days in any 180, registered at the border by the EES system; other nationalities may need a Schengen visa. No employment is allowed.',
          'I cittadini britannici e statunitensi entrano senza visto fino a 90 giorni ogni 180, registrati alla frontiera dal sistema EES; altre nazionalità possono aver bisogno di un visto Schengen. Nessun impiego è consentito.', 'FR-SRC-10'],
        ['A visa-free entry cannot be turned into a student or work card at the prefecture: the long-stay visa must be obtained abroad, before you arrive.',
          'Un ingresso senza visto non si può trasformare in carta per studio o lavoro in prefettura: il visto di lungo soggiorno va ottenuto all’estero, prima di arrivare.', 'FR-SRC-04 FR-SRC-26']
      ],
      f: [[['Schengen visa', 'Visto Schengen'], ['€90', '90 €'], 'FR-SRC-10']] }
  ],

  arrival: [
    { k: 'before', p: 'eu uk us other', t: [
      ['Pay nothing before you visit the flat and sign the lease: a deposit is capped at 1 month’s rent unfurnished and 2 months furnished. Under-31s with a long-stay visa, and students, can use the free state rent guarantee VISALE instead of a guarantor.',
        'Non pagare nulla prima di aver visitato l’alloggio e firmato il contratto: il deposito è al massimo di 1 mese di affitto per un non ammobiliato e 2 mesi per un ammobiliato. Chi ha meno di 31 anni con visto di lungo soggiorno, e gli studenti, possono usare la garanzia statale gratuita VISALE al posto di un garante.', 'FR-SRC-14 FR-SRC-15'],
      ['For social security, a birth certificate in Italian, English, German, Spanish and several other languages needs no translation; in other languages it needs a sworn translator.',
        'Per la sicurezza sociale, un atto di nascita in italiano, inglese, tedesco, spagnolo e diverse altre lingue non richiede traduzione; nelle altre lingue serve un traduttore giurato.', 'FR-SRC-03']
    ] },
    { k: 'before', p: 'uk us other', t: [
      ['Get the long-stay visa (VLS-TS, type D) in your country of residence before you travel, through Campus France and France-Visas for students: entering visa-free, you cannot apply for a student or work permit in France.',
        'Ottieni il visto di lungo soggiorno (VLS-TS, tipo D) nel paese di residenza prima di partire, tramite Campus France e France-Visas per gli studenti: entrando senza visto, non puoi chiedere in Francia un permesso per studio o lavoro.', 'FR-SRC-04 FR-SRC-26']
    ] },
    { k: 'address', p: 'eu uk us other', t: [
      ['What offices ask for is proof of address (justificatif de domicile): a lease or a utility bill in your name. High-street banks want it before opening an account.',
        'Gli uffici chiedono una prova dell’indirizzo (justificatif de domicile): un contratto d’affitto o una bolletta a tuo nome. Le banche tradizionali la vogliono prima di aprire un conto.', 'FR-SRC-21']
    ] },
    { k: 'card', p: 'eu', t: [
      ['No residence card is needed. After 3 months your right to stay rests on working, or studying with health insurance and enough money, or having enough money and insurance: keep proof of which applies.',
        'Non serve una carta di soggiorno. Dopo 3 mesi il diritto di restare si basa sul lavoro, o sullo studio con assicurazione sanitaria e mezzi sufficienti, o su mezzi sufficienti e assicurazione: conserva le prove del caso che ti riguarda.', 'FR-SRC-01']
    ] },
    { k: 'card', p: 'uk us other', t: [
      ['Validate your long-stay visa online within 3 months of arriving: the fee is €100, and the validated visa is your residence permit for its first year.',
        'Convalida online il visto di lungo soggiorno entro 3 mesi dall’arrivo: la tassa è di 100 €, e il visto convalidato è il tuo permesso di soggiorno per il primo anno.', 'FR-SRC-04']
    ] },
    { k: 'number', p: 'eu uk us other', t: [
      ['If you have never filed in France, ask your local public finance centre for a tax number with form Cerfa 2043, your passport and proof of address.',
        'Se non hai mai presentato una dichiarazione in Francia, chiedi il codice fiscale al centro delle finanze pubbliche competente con il modulo Cerfa 2043, il passaporto e la prova dell’indirizzo.', 'FR-SRC-22'],
      ['File a tax return every spring, even with no income: without the tax notice, the family benefits office (CAF) stops housing aid.',
        'Presenta la dichiarazione dei redditi ogni primavera, anche senza redditi: senza l’avviso d’imposta, la cassa per gli assegni familiari (CAF) sospende l’aiuto per l’alloggio.', 'FR-SRC-22']
    ] },
    { k: 'health', p: 'eu', t: [
      ['A student who does not work is covered by their European Health Insurance Card; any job or paid internship in France means registering with the health insurance fund (CPAM).',
        'Uno studente che non lavora è coperto dalla Tessera europea di assicurazione malattia; qualsiasi lavoro o tirocinio retribuito in Francia comporta l’iscrizione alla cassa malattia (CPAM).', 'FR-SRC-02 FR-SRC-03']
    ] },
    { k: 'health', p: 'uk us other', t: [
      ['Students register free at etudiant-etranger.ameli.fr: you get a provisional number at once, then the permanent social security number and the Carte Vitale, typically after 6 to 12 months. Until then, send the doctor’s paper claim form to the fund for refunds.',
        'Gli studenti si iscrivono gratis su etudiant-etranger.ameli.fr: ricevono subito un numero provvisorio, poi il numero di sicurezza sociale definitivo e la Carte Vitale, di solito dopo 6-12 mesi. Nel frattempo, per i rimborsi invia alla cassa il modulo cartaceo compilato dal medico.', 'FR-SRC-03']
    ] },
    { k: 'health', p: 'eu uk us other', t: [
      ['Public insurance refunds 70% of the standard €30 GP fee, less a €2 flat charge, and nothing above it: a top-up policy (mutuelle) is strongly advised.',
        'L’assicurazione pubblica rimborsa il 70% della tariffa base di 30 € per il medico di base, meno un contributo fisso di 2 €, e nulla oltre: una polizza integrativa (mutuelle) è fortemente consigliata.', 'FR-SRC-02']
    ] },
    { k: 'bank', p: 'eu uk us other', t: [
      ['An online bank with a French IBAN opens at once. If a high-street bank refuses you in writing, the Banque de France names a bank within 1 working day, which must open a free basic account within 3 working days.',
        'Una banca online con IBAN francese si apre subito. Se una banca tradizionale ti rifiuta per iscritto, la Banque de France designa entro 1 giorno lavorativo una banca, che deve aprire un conto di base gratuito entro 3 giorni lavorativi.', 'FR-SRC-21']
    ] },
    { k: 'keep', p: 'eu', t: [
      ['If the basis of your stay ends, for instance studies finish without a job, and you rely on welfare, the prefecture can order you to leave.',
        'Se viene meno la base del tuo soggiorno, per esempio finiscono gli studi senza un lavoro, e ricorri all’assistenza sociale, la prefettura può ordinarti di lasciare il paese.', 'FR-SRC-01']
    ] },
    { k: 'keep', p: 'uk us other', t: [
      ['Apply to renew between 4 and 2 months before your permit expires; outside that window there is a €180 penalty.',
        'Chiedi il rinnovo tra 4 e 2 mesi prima della scadenza del permesso; fuori da questa finestra c’è una penale di 180 €.', 'FR-SRC-25'],
      ['A first-application receipt does not let you leave and come back. A renewal receipt with your expired card lets you travel in Schengen, but avoid flights out of Schengen or with stopovers until you have the new card: airlines often refuse paper receipts.',
        'La ricevuta di prima domanda non permette di uscire e rientrare. La ricevuta di rinnovo con la carta scaduta permette di viaggiare in Schengen, ma evita voli fuori da Schengen o con scali finché non hai la nuova carta: le compagnie aeree rifiutano spesso le ricevute cartacee.', 'FR-SRC-04']
    ] }
  ],

  traps: [
    { p: 'uk us other', t: ['A receipt for a first application does not let you leave and re-enter France; even a renewal receipt, a plain PDF, is often refused by airlines on flights outside Schengen or with a stopover. Avoid such trips until you hold the plastic card.',
      'La ricevuta di una prima domanda non consente di uscire e rientrare in Francia; anche quella di rinnovo, un semplice PDF, è spesso rifiutata dalle compagnie aeree sui voli fuori Schengen o con scalo. Evita questi viaggi finché non hai la carta plastificata.', 'FR-SRC-04 FR-SRC-24'] },
    { p: 'eu', t: ['If the reason for your stay ends (studies over, no job) and you rely on social benefits, the prefecture can order you to leave France.',
      'Se il motivo del soggiorno viene meno (studi finiti, nessun lavoro) e si ricorre a prestazioni sociali, la prefettura può ordinare di lasciare la Francia.', 'FR-SRC-01'] },
    { p: 'eu uk us other', t: ['File a tax return every spring, even with no income: without the tax notice you lose your housing benefit from the CAF.',
      'Presenta la dichiarazione dei redditi ogni primavera, anche senza reddito: senza l’avviso d’imposta si perde il sussidio per l’alloggio della CAF.', 'FR-SRC-22'] },
    { p: 'uk us other', t: ['Prefecture appointments sold by bots and middlemen are risky and can be cancelled; if you cannot get one, a court can order the prefecture to give you one.',
      'Gli appuntamenti in prefettura venduti da bot e intermediari sono rischiosi e possono essere annullati; se non riesci a ottenerne uno, un giudice può ordinare alla prefettura di fissarlo.', 'FR-SRC-24'] },
    { p: 'eu uk us other', t: ['Pay nothing for a flat before visiting it and signing the lease; the free state guarantee VISALE covers tenants aged 18 to 30.',
      'Non pagare nulla per un alloggio prima di averlo visitato e firmato il contratto; la garanzia statale gratuita VISALE copre gli inquilini dai 18 ai 30 anni.', 'FR-SRC-15 FR-SRC-14'] }
  ],

  open: [
    { st: 'open', t: ['Airlines and foreign police often refuse the PDF renewal receipt at the gate, especially on flights with a stopover.',
      'Compagnie aeree e polizie estere rifiutano spesso al gate la ricevuta PDF di rinnovo, soprattutto sui voli con scalo.'] },
    { st: 'open', t: ['Busy prefectures (Paris area, Lyon, Marseille) take 6 to 10 months to renew a card, and some backdate the new card, shortening it.',
      'Le prefetture più cariche (area di Parigi, Lione, Marsiglia) impiegano da 6 a 10 mesi per un rinnovo, e alcune retrodatano la nuova carta, accorciandola.'] },
    { st: 'open', t: ['Most private landlords and agencies refuse the VISALE guarantee, although student residences accept it.',
      'La maggior parte dei proprietari e delle agenzie private rifiuta la garanzia VISALE, anche se le residenze universitarie la accettano.'] },
    { st: 'pending', t: ['The students’ proof of funds now follows the minimum wage: it will rise with the next increase, due on 1 January 2027.',
      'I mezzi di sussistenza richiesti agli studenti seguono ora il salario minimo: aumenteranno con il prossimo adeguamento, atteso il 1° gennaio 2027.'] },
    { st: 'watch', t: ['Some consulates want an irrevocable transfer certificate (AVI) and reject those from unlicensed online providers; no official list of accepted providers was found.',
      'Alcuni consolati vogliono un’attestazione di bonifico irrevocabile (AVI) e rifiutano quelle di operatori online non autorizzati; non è stato trovato un elenco ufficiale degli operatori accettati.'] }
  ]
});

/* Sources: generated by tools/visas-sources.js from research/visas_immigration/france/france_sources.md.
 * Do not edit by hand: change the register, then run the tool. */
ATLAS.visaSources('FR', {
  "FR-SRC-01": ["Premier Ministre / DILA: CESEDA art. L. 233-1 (3°), R. 233-1; Dir. 2004/38/CE; Service-Public F2651","https://www.service-public.fr/particuliers/vosdroits/F2651","2026-10-05"],
  "FR-SRC-02": ["Assurance Maladie (CNAM): Regolamento (CE) n. 883/2004; Portale Ameli.fr","https://www.ameli.fr/assure/droits-demarches/europe-international/protection-sociale-france/vous-venez-etudier-en-france","2026-10-05"],
  "FR-SRC-03": ["Code de la sécurité sociale art. L. 160-1 (PUMA); Loi n° 2018-166; etudiant-etranger.ameli.fr","https://etudiant-etranger.ameli.fr","2026-10-05"],
  "FR-SRC-26": ["Campus France: Guide Études en France / Procédure préconsulaire","https://www.campusfrance.org","2026-10-05"],
  "FR-SRC-04": ["Premier Ministre / DILA / Min. Intérieur: CESEDA art. L. 436-1, L. 436-4 (mod. Loi de finances 2026 al 01/05/2026); Service-Public F2231","https://www.service-public.fr/particuliers/vosdroits/F2231","2026-10-05"],
  "FR-SRC-05": ["Premier Ministre / DILA / Min. Travail: CESEDA art. L. 422-1; Code du travail art. R. 5221-26, R. 5221-11; Service-Public F2728","https://www.service-public.fr/particuliers/vosdroits/F2728","2026-10-05"],
  "FR-SRC-13": ["Ministère de l'Éducation / URSSAF: Code de l'éducation art. L. 124-1 a L. 124-20, D. 124-8; Service-Public F32131","https://www.service-public.fr/particuliers/vosdroits/F32131","2026-10-05"],
  "FR-SRC-18": ["Direttiva (UE) 2016/801 artt. 27-31; CESEDA art. L. 422-5","https://eur-lex.europa.eu/eli/dir/2016/801/oj","2026-10-05"],
  "FR-SRC-09": ["Premier Ministre / Légifrance: Décret n° 2026-526 du 22 juin 2026 (in vigore 01/08/2026); CESEDA art. R. 422-1, R. 422-2","https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000054301706/","2026-10-05"],
  "FR-SRC-10": ["MEAE / France-Visas: Décret n° 2016-1463 du 28 octobre 2016; Tarifs officiels France-Visas","https://france-visas.gouv.fr/web/france-visas/tarifs-de-base-des-frais-de-dossiers","2026-10-05"],
  "FR-SRC-11": ["Ministère de l'Enseignement supérieur: Code de l'éducation art. L. 841-5; Décret/Arrêté CVEC A.A. 2026/2027; Service-Public F34758","https://cvec.etudiant.gouv.fr","2026-10-05"],
  "FR-SRC-25": ["Premier Ministre / DILA: CESEDA art. R. 431-5, L. 436-5; Service-Public F2231","https://www.service-public.fr/particuliers/vosdroits/F2231","2026-10-05"],
  "FR-SRC-06": ["Premier Ministre / DILA / Min. Intérieur: CESEDA art. L. 422-10 a L. 422-14, R. 422-11; Service-Public F17319","https://www.service-public.fr/particuliers/vosdroits/F17319","2026-10-05"],
  "FR-SRC-12": ["Premier Ministre / DILA / Min. Travail: Code du travail art. L. 3231-1 s.; Service-Public F2300","https://www.service-public.fr/particuliers/vosdroits/F2300","2026-10-05"],
  "FR-SRC-07": ["Premier Ministre / DILA / Min. Économie: Arrêté du 21 août 2025; CESEDA art. L. 421-9, R. 421-17, L. 436-1; Service-Public F16922","https://www.service-public.fr/particuliers/vosdroits/F16922","2026-10-05"],
  "FR-SRC-20": ["Premier Ministre / DILA: CESEDA art. L. 434-1 s. (ordinario) vs L. 421-22 (Talent); Service-Public F11166","https://www.service-public.fr/particuliers/vosdroits/F11166","2026-10-05"],
  "FR-SRC-08": ["Premier Ministre / DILA / Min. Intérieur: Arrêté du 21 août 2025; CESEDA art. L. 421-11, R. 421-23; Service-Public F16922","https://www.service-public.fr/particuliers/vosdroits/F16922","2026-10-05"],
  "FR-SRC-16": ["Premier Ministre / DILA / Min. Intérieur: CESEDA art. L. 421-1, L. 421-3, L. 436-1, L. 436-10; Code du travail R. 5221-1 s.; Service-Public F15898","https://www.service-public.fr/particuliers/vosdroits/F15898","2026-10-05"],
  "FR-SRC-17": ["Ministère Recherche / Min. Intérieur: CESEDA art. L. 421-14, R. 421-25; Service-Public F16922","https://www.service-public.fr/particuliers/vosdroits/F16922","2026-10-05"],
  "FR-SRC-19": ["MEAE / Min. Intérieur: CESEDA art. L. 421-23; Accordi bilaterali Francia (16 Paesi)","https://france-visas.gouv.fr","2026-10-05"],
  "FR-SRC-14": ["Premier Ministre / DILA: Loi n° 89-462 du 6 juillet 1989 art. 22 e 25-6; Service-Public F31269","https://www.service-public.fr/particuliers/vosdroits/F31269","2026-10-05"],
  "FR-SRC-15": ["Action Logement / Min. Logement: Dispositif VISALE; Service-Public F34555","https://www.visale.fr","2026-10-05"],
  "FR-SRC-21": ["Code monétaire et financier art. L. 312-1","https://www.banque-france.fr/fr/particuliers/droit-au-compte","2026-10-05"],
  "FR-SRC-22": ["Direction Générale des Finances Publiques: Code général des impôts art. 4 B, art. 81 (36°), art. 81 bis; impots.gouv.fr","https://www.impots.gouv.fr","2026-10-05"],
  "FR-SRC-24": ["Conseil d'État / Défenseur des droits: Décision CE n° 452798 du 03/06/2022; Rapport Défenseur des droits Décembre 2024","https://www.conseil-etat.fr","2026-10-05"]
});
