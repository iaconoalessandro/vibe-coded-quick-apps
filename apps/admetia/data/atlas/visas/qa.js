/* Visas and permits: Qatar. From research/visas_immigration/qatar/
 * (guide, source register, open questions), council check of 5 Oct 2026; the
 * work-permit fees were consistent in the review of 6 Oct 2026. EU and UK only. */
ATLAS.addVisas({
  id: 'QA',
  folder: 'qatar',
  checked: '2026-10-05',
  review: '2027-03-31',

  routes: [
    { k: 'study', p: 'eu uk', v: 'open',
      name: ['Student visa and student QID', 'Visto e QID per studenti'], law: 'Law 21 of 2015',
      t: [
        ['Qatar University, HBKU or an Education City campus sponsors the visa, converted on arrival into a student residence permit after the medical and fingerprints. You need proof of funds or a full scholarship.',
          'Qatar University, HBKU o un campus di Education City sponsorizza il visto, convertito all’arrivo in permesso di soggiorno per studenti dopo visita medica e impronte. Servono prova dei mezzi o una borsa completa.', 'QA-SRC-21 QA-SRC-22'],
        ['Qatar is not in the Apostille Convention: previous degrees need the full consular legalisation chain. Students may work only on campus, up to 20 hours a week, or in internships registered on Sahem.',
          'Il Qatar non aderisce alla Convenzione dell’Aja: i titoli precedenti richiedono la catena completa di legalizzazione consolare. Gli studenti possono lavorare solo nel campus, fino a 20 ore a settimana, o in tirocini registrati su Sahem.', 'QA-SRC-16 QA-SRC-17 QA-SRC-20 QA-SRC-21']
      ],
      f: [[['Fees', 'Costi'], ['visa QAR 200 + medical QAR 100 + QID QAR 500', 'visto 200 QAR + visita 100 QAR + QID 500 QAR'], 'QA-SRC-21']] },

    { k: 'intern', p: 'eu uk', v: 'limited',
      name: ['Internships', 'Tirocini'], law: 'Law 21 of 2015',
      t: [['There is no internship visa. Internships through Sahem are only for students already resident in Qatar; an internship on a visa waiver is illegal work, and companies almost never sponsor a temporary work visa for one.',
        'Non esiste un visto per tirocinio. I tirocini tramite Sahem sono solo per studenti già residenti in Qatar; un tirocinio in esenzione visto è lavoro irregolare, e le aziende quasi mai sponsorizzano un visto di lavoro temporaneo per un tirocinio.', 'QA-SRC-01 QA-SRC-20']] },

    { k: 'search', p: 'eu uk', v: 'limited',
      name: ['Graduating student extension', 'Proroga per neolaureati'], law: 'Jusour',
      t: [['Graduates of a Qatari university aged 18 to 28 can extend residence one year to look for work, and move to an employer without leaving. Others get a 30-day grace period.',
        'I laureati di un’università del Qatar dai 18 ai 28 anni possono prorogare il soggiorno di un anno per cercare lavoro, e passare a un datore senza partire. Gli altri hanno 30 giorni di grazia.', 'QA-SRC-20 QA-SRC-04 QA-SRC-01']] },

    { k: 'work', p: 'eu uk', v: 'sponsor',
      name: ['Work visa and QID', 'Visto di lavoro e QID'], law: 'Law 21 of 2015; Labour Law 14 of 2004',
      t: [
        ['The employer obtains a quota and registers your contract with the labour ministry, then issues the work entry visa; in Doha you complete the medical, fingerprints and Qatar ID within 30 days. The employer must pay every visa and recruitment cost.',
          'Il datore ottiene una quota e registra il contratto presso il ministero del Lavoro, poi rilascia il visto d’ingresso per lavoro; a Doha si completano visita medica, impronte e Qatar ID entro 30 giorni. Il datore deve pagare ogni costo di visto e reclutamento.', 'QA-SRC-14 QA-SRC-12 QA-SRC-13 QA-SRC-08'],
        ['Since 2020 you may change employer without a no-objection certificate, giving one or two months’ notice. The QFC and free zones process skilled hires faster.',
          'Dal 2020 si può cambiare datore senza nulla osta, con un preavviso di uno o due mesi. Il QFC e le zone franche gestiscono più in fretta le assunzioni qualificate.', 'QA-SRC-03 QA-SRC-04 QA-SRC-18 QA-SRC-19']
      ],
      f: [[['Employer fees', 'Costi del datore'], ['visa QAR 300 + medical QAR 100 + QID QAR 1,000 a year', 'visto 300 QAR + visita 100 QAR + QID 1.000 QAR l’anno'], 'QA-SRC-12 QA-SRC-15 QA-SRC-13']] },

    { k: 'research', p: 'eu uk', v: 'sponsor',
      name: ['Visiting researchers and PhDs', 'Ricercatori in visita e dottorati'], law: 'QRDI Council',
      t: [
        ['Short unpaid visits need a visit visa sponsored by the university or Qatar Foundation; longer or paid ones a research residence permit. Labs are closed to tourists.',
          'Le brevi visite non retribuite richiedono un visto di visita sponsorizzato dall’università o da Qatar Foundation; quelle più lunghe o retribuite un permesso di soggiorno per ricerca. I laboratori sono chiusi ai turisti.', 'QA-SRC-12 QA-SRC-01'],
        ['PhD students funded by the QRDI Council’s GSRA receive a tax-free stipend with housing and tuition covered.',
          'I dottorandi finanziati dal GSRA del QRDI Council ricevono una borsa esentasse con alloggio e tasse coperti.', 'QA-SRC-23']
      ],
      f: [[['GSRA stipend', 'Borsa GSRA'], ['QAR 8,000 to 15,000 a month', 'da 8.000 a 15.000 QAR al mese'], 'QA-SRC-23']] },

    { k: 'whv', p: 'eu uk', v: 'closed',
      name: ['Working holiday', 'Vacanza-lavoro'], law: '—',
      t: [['Qatar has no working-holiday agreements; unauthorised work means up to three years in prison, a QAR 50,000 fine and a Gulf-wide ban.',
        'Il Qatar non ha accordi di vacanza-lavoro; il lavoro non autorizzato comporta fino a tre anni di carcere, una multa di 50.000 QAR e il divieto in tutto il Golfo.', 'QA-SRC-01']] },

    { k: 'short', p: 'eu', v: 'open',
      name: ['Visa waiver', 'Esenzione dal visto'], law: 'Law 21 of 2015',
      t: [['EU citizens get a free waiver on arrival, valid 180 days, for up to 90 days in Qatar, not extendable; health insurance is compulsory.',
        'I cittadini UE ottengono un’esenzione gratuita all’arrivo, valida 180 giorni, per un massimo di 90 giorni in Qatar, non prorogabile; l’assicurazione sanitaria è obbligatoria.', 'QA-SRC-24 QA-SRC-06']],
      f: [[['Health insurance', 'Assicurazione sanitaria'], ['QAR 50 per 30 days', '50 QAR per 30 giorni'], 'QA-SRC-06']] },

    { k: 'short', p: 'uk', v: 'open',
      name: ['Visa waiver', 'Esenzione dal visto'], law: 'Law 21 of 2015',
      t: [['British citizens get a free 30-day waiver, extendable once for 30 days through Metrash.',
        'I cittadini britannici ottengono un’esenzione gratuita di 30 giorni, prorogabile una volta di 30 giorni tramite Metrash.', 'QA-SRC-24 QA-SRC-13']],
      f: [[['Extension', 'Proroga'], ['QAR 200 a month', '200 QAR al mese'], 'QA-SRC-13']] }
  ],

  arrival: [
    { k: 'before', p: 'eu uk', t: [
      ['Qatar is not in the apostille convention: Italian and EU documents and degrees go through a five-step consular legalisation chain, ending at the Foreign Ministry in Doha.',
        'Il Qatar non aderisce alla convenzione sull’apostille: documenti e titoli italiani e UE seguono una catena di legalizzazione consolare in cinque passaggi, che termina al Ministero degli Esteri a Doha.', 'QA-SRC-16 QA-SRC-17'],
      ['The 90-day visa waiver is for tourism only: for work, study or an internship your employer or institution sponsors you, starting with a work entry visa issued through Metrash (QAR 300, paid by the company).',
        'L’esenzione dal visto di 90 giorni vale solo per il turismo: per lavoro, studio o tirocinio ti sponsorizza il datore o l’istituto, a partire dal visto d’ingresso per lavoro rilasciato tramite Metrash (300 QAR, a carico dell’azienda).', 'QA-SRC-24 QA-SRC-12']
    ] },
    { k: 'address', p: 'eu uk', t: [
      ['Register your National Address on Metrash within 60 days. Residential leases are registered with the Municipality, which you need for family sponsorship.',
        'Registra l’Indirizzo nazionale su Metrash entro 60 giorni. I contratti d’affitto residenziali si registrano presso la Municipalità, cosa necessaria per il ricongiungimento familiare.', 'QA-SRC-12 QA-SRC-11']
    ] },
    { k: 'card', p: 'eu uk', t: [
      ['After the infectious-disease screening at the Medical Commission, the Qatar ID (QID) is printed, valid 1 year (QAR 1,000, paid by the company), and sent by Q-Post. Do not leave Qatar before it is printed: the entry visa lapses and the process starts again from abroad.',
        'Dopo lo screening per malattie infettive alla Medical Commission, viene stampato il Qatar ID (QID), valido 1 anno (1.000 QAR, a carico dell’azienda), e spedito tramite Q-Post. Non lasciare il Qatar prima della stampa: il visto d’ingresso decade e la procedura ricomincia dall’estero.', 'QA-SRC-15 QA-SRC-13 QA-SRC-01'],
      ['A positive result for HIV, hepatitis B or C, or lung scars from tuberculosis, even healed, means the permit is refused and you are deported.',
        'Un risultato positivo per HIV, epatite B o C, o cicatrici polmonari da tubercolosi, anche guarita, comporta il rifiuto del permesso e l’espulsione.', 'QA-SRC-15']
    ] },
    { k: 'number', p: 'eu uk', t: [
      ['The QID number is your identifier for government services through Metrash.',
        'Il numero del QID è il tuo identificativo per i servizi pubblici tramite Metrash.', 'QA-SRC-12 QA-SRC-13']
    ] },
    { k: 'health', p: 'eu uk', t: [
      ['Health insurance is compulsory for all non-Qataris; for residents, your employer pays it in full.',
        'L’assicurazione sanitaria è obbligatoria per tutti i non qatarioti; per i residenti la paga interamente il datore.', 'QA-SRC-06']
    ] },
    { k: 'bank', p: 'eu uk', t: [
      ['Open an account with your employer’s salary certificate; it is linked to the Wages Protection System. Landlords usually ask for 12 post-dated cheques: a bounced cheque is a crime that brings a travel ban, and the bank freezes the account when the final settlement arrives at the end of a job.',
        'Apri un conto con il certificato di stipendio del datore; viene collegato al Wages Protection System. I proprietari chiedono di solito 12 assegni post-datati: un assegno scoperto è un reato che comporta un divieto di viaggio, e la banca congela il conto quando arriva la liquidazione finale a fine rapporto.', 'QA-SRC-29 QA-SRC-09']
    ] },
    { k: 'keep', p: 'eu uk', t: [
      ['Neither the entry stamp nor the application receipt lets you work: working before the work visa is issued is a crime punished with arrest, fines up to QAR 50,000 and deportation.',
        'Né il timbro d’ingresso né la ricevuta della domanda ti permettono di lavorare: lavorare prima del rilascio del visto di lavoro è un reato punito con l’arresto, multe fino a 50.000 QAR e l’espulsione.', 'QA-SRC-01']
    ] }
  ],

  traps: [
    { p: 'eu uk', t: ['Leave Qatar before the Qatar ID is printed and the entry visa lapses: the process restarts from abroad.',
      'Se lasci il Qatar prima che il Qatar ID sia stampato il visto d’ingresso decade: la procedura riparte dall’estero.', 'QA-SRC-01'] },
    { p: 'eu uk', t: ['A positive test for HIV, hepatitis B or C, or TB scarring, even healed, means unfitness and deportation.',
      'Un test positivo per HIV, epatite B o C, o cicatrici da TBC, anche guarite, comporta l’inidoneità e l’espulsione.', 'QA-SRC-15'] },
    { p: 'eu uk', t: ['Landlords want 12 post-dated cheques; banks freeze your account at the final settlement, and a bounced cheque is a crime with a travel ban.',
      'I proprietari vogliono 12 assegni postdatati; le banche congelano il conto alla liquidazione finale, e un assegno scoperto è un reato con divieto di espatrio.', 'QA-SRC-09 QA-SRC-29'] },
    { p: 'eu uk', t: ['Some employers answer a resignation with a false “absconding” report that freezes your ID.',
      'Alcuni datori rispondono alle dimissioni con una falsa denuncia di “fuga” che congela il documento.', 'QA-SRC-12'] },
    { p: 'eu uk', t: ['Overstaying a visit costs QAR 200 a day from the first day.',
      'L’overstay su un visto di visita costa 200 QAR al giorno dal primo giorno.', 'QA-SRC-01 QA-SRC-12'] }
  ],

  open: [
    { st: 'open', t: ['Converting a tourist visa to a work visa inside Qatar is listed at QAR 500 but granted at the ministry’s discretion.',
      'La conversione di un visto turistico in visto di lavoro in Qatar costa 500 QAR ma è concessa a discrezione del ministero.'] },
    { st: 'open', t: ['Family visas formally need QAR 10,000 a month (6,000 with company housing); salaries in between are decided case by case.',
      'I visti familiari richiedono formalmente 10.000 QAR al mese (6.000 con alloggio aziendale); gli stipendi intermedi si decidono caso per caso.'] },
    { st: 'watch', t: ['Sector quotas for hiring Qataris are set by changing ministerial decrees.',
      'Le quote settoriali di assunzione di qatarini sono fissate da decreti ministeriali che cambiano.'] }
  ]
});

/* Sources: generated by tools/visas-sources.js from research/visas_immigration/qatar/qatar_sources.md.
 * Do not edit by hand: change the register, then run the tool. */
ATLAS.visaSources('QA', {
  "QA-SRC-21": ["Qatar University (QU): International Students Section: Student Visa Requirements & Policies","https://www.qu.edu.qa/students/international-students","2026-10-05"],
  "QA-SRC-22": ["Hamad Bin Khalifa University (HBKU) & QF: Graduate Admissions & Student Sponsorship","https://www.hbku.edu.qa","2026-10-05"],
  "QA-SRC-16": ["Dipartimento Affari Consolari: Regolamento Attestazioni e Legalizzazioni","https://www.mofa.gov.qa","2026-10-05"],
  "QA-SRC-17": ["Sezione Consolare: Istruzioni per la Legalizzazione dei Documenti in Italia","https://rome.embassy.qa","2026-10-05"],
  "QA-SRC-20": ["Jusour & Piattaforma Sahem: Programmi Sahem: Tirocini per Studenti Residenti e Graduating Student Extension","https://jusour.qa","2026-10-05"],
  "QA-SRC-01": ["Legge n. 21 del 2015: Regolazione dell'ingresso, uscita e soggiorno degli espatriati","https://almeezan.qa/LawPage.aspx?id=6809&language=ar","2026-10-05"],
  "QA-SRC-04": ["Decreto-Legge n. 19 del 2020: Modifica Legge 21/2015 (Mobilità lavorativa e cambio sponsor)","https://almeezan.qa/LawPage.aspx?id=8274&language=ar","2026-10-05"],
  "QA-SRC-14": ["Sistema Contratti Elettronici, Piattaforma Tawteen e Wages Protection System (WPS)","https://www.mol.gov.qa","2026-10-05"],
  "QA-SRC-12": ["Portale Servizi Immigrazione, Visti ed E-Services (Metrash)","https://portal.moi.gov.qa","2026-10-05"],
  "QA-SRC-13": ["Portale Hukoomi: Schede Ufficiali: Rilascio e Rinnovo QID, Estensione Visti e Reclutamento","https://hukoomi.gov.qa","2026-10-05"],
  "QA-SRC-08": ["Legge sul Lavoro n. 14 del 2004 (Artt. 33, 39, 43, 54)","https://almeezan.qa/LawPage.aspx?id=2611&language=ar","2026-10-05"],
  "QA-SRC-03": ["Decreto-Legge n. 18 del 2020: Modifica Legge sul Lavoro n. 14/2004 (Abolizione del No Objection Certificate - NOC)","https://almeezan.qa/LawPage.aspx?id=8273&language=ar","2026-10-05"],
  "QA-SRC-18": ["Qatar Financial Centre (QFC): QFC Employment Regulations 2020 & Immigration Client Services","https://www.qfc.qa","2026-10-05"],
  "QA-SRC-19": ["Qatar Free Zones Authority (QFZA): Regolamento Lavoro e Sportello Unico Free Zone (Ras Bufontas / Umm Alhoul)","https://qfz.gov.qa","2026-10-05"],
  "QA-SRC-15": ["Medical Commission e Sistema Assicurativo Sanitario Obbligatorio","https://www.moph.gov.qa","2026-10-05"],
  "QA-SRC-23": ["QRDI Council (ex-QNRF): Graduate Sponsorship Research Award (GSRA) & Fellowships","https://qrdi.org.qa","2026-10-05"],
  "QA-SRC-24": ["Visit Qatar (Qatar Tourism): Regolamento Ingressi Turistici e Lista Paesi Esenti da Visto","https://visitqatar.com/intl-en/practical-info/visas","2026-10-05"],
  "QA-SRC-06": ["Legge n. 22 del 2021: Regolazione dei Servizi Sanitari (Assicurazione Sanitaria Obbligatoria)","https://almeezan.qa/LawPage.aspx?id=8761&language=ar","2026-10-05"],
  "QA-SRC-11": ["Legge n. 4 del 2008 & Legge n. 6 del 2024: Registrazione Contratti di Locazione Immobiliare","https://almeezan.qa/LawPage.aspx?id=2601&language=ar","2026-10-05"],
  "QA-SRC-29": ["Qatar Central Bank (QCB): Normativa Antiriciclaggio (AML) e Wages Protection System","https://www.qcb.gov.qa","2026-10-05"],
  "QA-SRC-09": ["Codice Penale n. 11 del 2004 (Art. 357: Assegni a vuoto e Travel Ban)","https://almeezan.qa/LawPage.aspx?id=26&language=ar","2026-10-05"]
});
