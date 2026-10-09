/* Visas and permits: Austria. From research/visas_immigration/austria/
 * (guide, source register, open questions), council check of 5 Oct 2026. */
ATLAS.addVisas({
  id: 'AT',
  folder: 'austria',
  checked: '2026-10-05',
  review: '2027-03-31',

  free: {
    p: 'eu',
    t: [
      ['EU, EEA and Swiss citizens work with no labour-market authorisation.',
        'I cittadini UE, SEE e svizzeri lavorano senza autorizzazione del servizio per l’impiego.', 'AT-SRC-01'],
      ['Register your address (Meldezettel, signed by your landlord) within three working days of moving in; it is free.',
        'Si registra l’indirizzo (Meldezettel, firmato dal locatore) entro tre giorni lavorativi dall’ingresso nell’alloggio; è gratuito.', 'AT-SRC-03 AT-SRC-04'],
      ['Staying over three months, apply for the registration certificate (Anmeldebescheinigung, €44) within four months, with your work contract or, for students, enrolment, means and full health cover.',
        'Per un soggiorno oltre tre mesi si chiede l’attestato di registrazione (Anmeldebescheinigung, 44 €) entro quattro mesi, con il contratto o, per gli studenti, iscrizione, mezzi e copertura sanitaria completa.', 'AT-SRC-01 AT-SRC-20 AT-SRC-04']
    ]
  },

  routes: [
    { k: 'study', p: 'uk us other', v: 'open',
      name: ['Residence permit – Student', 'Permesso di soggiorno – Studente'], law: 'NAG § 64',
      t: [
        ['Apply at an Austrian embassy; immigration (MA 35 in Vienna) decides and the consulate issues a D visa to collect the card. Work up to 20 hours a week with an employment-service permit, given without a labour-market test.',
          'Si fa domanda a un’ambasciata austriaca; decide l’ufficio immigrazione (MA 35 a Vienna) e il consolato rilascia un visto D per ritirare la carta. Si lavora fino a 20 ore a settimana con un permesso del servizio per l’impiego, concesso senza test del mercato.', 'AT-SRC-01 AT-SRC-28 AT-SRC-02'],
        ['To renew each year, show at least 16 ECTS credits from the previous year. A non-EU student with a permit from another EU country can study here up to 360 days on the university’s notification.',
          'Per il rinnovo annuale bisogna dimostrare almeno 16 crediti ECTS dell’anno precedente. Uno studente extra-UE con permesso di un altro paese UE può studiare qui fino a 360 giorni con la notifica dell’università.', 'AT-SRC-01 AT-SRC-17']
      ],
      f: [
        [['Funds, under 24', 'Mezzi, sotto i 24 anni'], ['€722.58 a month', '722,58 € al mese'], 'AT-SRC-05 AT-SRC-16'],
        [['Funds, 24 and over', 'Mezzi, dai 24 anni'], ['€1,308.39 a month', '1.308,39 € al mese'], 'AT-SRC-05 AT-SRC-16'],
        [['Tuition for non-EU students', 'Tasse universitarie per studenti extra-UE'], ['€726.72 a semester, plus €26.20 student union', '726,72 € a semestre, più 26,20 € di quota studentesca'], 'AT-SRC-06 AT-SRC-32'],
        [['Fees', 'Costi'], ['€218 permit, plus €195 for the D visa', '218 € il permesso, più 195 € per il visto D'], 'AT-SRC-04'],
        [['Student health insurance (ÖGK)', 'Assicurazione sanitaria studenti (ÖGK)'], ['€78.84 a month', '78,84 € al mese'], 'AT-SRC-23']
      ],
      w: ['If your rent exceeds €386.43 a month, the difference must be covered by extra funds on top of the monthly amount.',
        'Se l’affitto supera 386,43 € al mese, la differenza va coperta con fondi aggiuntivi oltre all’importo mensile.', 'AT-SRC-05'] },

    { k: 'intern', p: 'eu uk us other', v: 'open',
      name: ['Compulsory internship', 'Tirocinio obbligatorio'], law: 'AuslBG',
      t: [['An internship your study plan requires needs no work permit, but non-EU interns must be notified by the employer to the employment service (AMS) at least two weeks before they start; pay follows the collective agreement.',
        'Un tirocinio richiesto dal piano di studi non richiede permesso di lavoro, ma per gli stagisti extra-UE il datore deve notificarlo al servizio per l’impiego (AMS) almeno due settimane prima dell’inizio; il compenso segue il contratto collettivo.', 'AT-SRC-02 AT-SRC-18']],
      w: ['An unpaid “Volontariat” may last at most three months a year: calling a working intern a volunteer is illegal employment, with fines of €1,000 to €10,000.',
        'Un “Volontariat” non retribuito può durare al massimo tre mesi l’anno: chiamare volontario uno stagista che lavora è impiego illegale, con multe da 1.000 a 10.000 €.', 'AT-SRC-02 AT-SRC-18'] },

    { k: 'search', p: 'uk us other', v: 'open',
      name: ['Twelve months to look for work after an Austrian degree', 'Dodici mesi per cercare lavoro dopo una laurea austriaca'], law: 'NAG § 64 (4)',
      t: [
        ['After a bachelor’s, master’s or PhD in Austria, extend your student permit by 12 months, once, applying before it expires.',
          'Dopo una laurea, un master o un dottorato in Austria si proroga il permesso per studio di 12 mesi, una sola volta, facendo domanda prima della scadenza.', 'AT-SRC-01 AT-SRC-12'],
        ['A job suited to your degree then gets a Red-White-Red Card for graduates, applied for inside Austria, with no points and no labour-market test, at the collective-agreement pay.',
          'Un lavoro adeguato alla laurea dà poi la Rot-Weiß-Rot-Karte per laureati, chiesta in Austria, senza punti né test del mercato, alla retribuzione del contratto collettivo.', 'AT-SRC-12 AT-SRC-01']
      ],
      f: [[['Funds', 'Mezzi'], ['€1,308.39 a month, plus housing above €386.43', '1.308,39 € al mese, più l’alloggio oltre 386,43 €'], 'AT-SRC-05']] },

    { k: 'search', p: 'uk us other', v: 'limited',
      name: ['Job-seeker visa for very highly qualified people', 'Visto per la ricerca di lavoro per altamente qualificati'], law: 'FPG § 24a',
      t: [['With at least 70 of 100 points for degree, experience, languages and age, you can get a six-month D visa to look for work, then apply for the card in Austria once you have an offer.',
        'Con almeno 70 punti su 100 per titolo, esperienza, lingue ed età si ottiene un visto D di sei mesi per cercare lavoro, poi si chiede la carta in Austria una volta ricevuta un’offerta.', 'AT-SRC-07 AT-SRC-02 AT-SRC-11']] },

    { k: 'work', p: 'uk us other', v: 'sponsor',
      name: ['Red-White-Red Card', 'Rot-Weiß-Rot-Karte'], law: 'NAG § 41; AuslBG §§ 12-12d',
      t: [
        ['A 24-month card tied to one employer, with five routes: very highly qualified (70 points, no labour test), shortage occupations (55 points, no labour test), other key workers (55 points and a salary floor, with a labour test), graduates of Austrian universities (no points, no test) and start-up founders.',
          'Una carta di 24 mesi legata a un datore, con cinque vie: altamente qualificati (70 punti, senza test), professioni carenti (55 punti, senza test), altre figure chiave (55 punti e una soglia di stipendio, con test), laureati in Austria (niente punti né test) e fondatori di start-up.', 'AT-SRC-02 AT-SRC-11 AT-SRC-19'],
        ['After 21 months of qualified work in 24 you move to the Red-White-Red Card Plus, which opens the whole labour market.',
          'Dopo 21 mesi di lavoro qualificato su 24 si passa alla Rot-Weiß-Rot-Karte Plus, che apre l’intero mercato del lavoro.', 'AT-SRC-01 AT-SRC-11']
      ],
      f: [
        [['Salary, other key workers', 'Stipendio, altre figure chiave'], ['€3,465 a month (€48,510 a year with 13th and 14th)', '3.465 € al mese (48.510 € l’anno con 13ª e 14ª)'], 'AT-SRC-02 AT-SRC-05 AT-SRC-13'],
        [['Fee', 'Costo'], ['€218, or €413 with the D visa', '218 €, o 413 € con il visto D'], 'AT-SRC-04']
      ],
      w: ['Language certificates count only from ÖSD, Goethe, telc or ÖIF (German) or Cambridge, IELTS, TOEFL or TOEIC (English), and only within 12 months of the application.',
        'I certificati di lingua valgono solo se rilasciati da ÖSD, Goethe, telc o ÖIF (tedesco) o Cambridge, IELTS, TOEFL o TOEIC (inglese), e solo entro 12 mesi dalla domanda.', 'AT-SRC-01 AT-SRC-02'] },

    { k: 'work', p: 'uk us other', v: 'sponsor',
      name: ['EU Blue Card', 'Carta Blu UE'], law: 'NAG § 42; AuslBG § 12c',
      t: [['A contract of at least six months and a three-year degree, or for IT three years of experience in the last seven; no points.',
        'Un contratto di almeno sei mesi e una laurea triennale, o per l’informatica tre anni di esperienza negli ultimi sette; niente punti.', 'AT-SRC-01 AT-SRC-14 AT-SRC-02']],
      f: [[['Salary', 'Stipendio'], ['€55,678 a year (€3,977 a month over 14 payments)', '55.678 € l’anno (3.977 € al mese su 14 mensilità)'], 'AT-SRC-04 AT-SRC-14 AT-SRC-30']] },

    { k: 'research', p: 'uk us other', v: 'sponsor',
      name: ['Researcher permit, and PhDs', 'Permesso per ricercatori e dottorati'], law: 'NAG § 43c',
      t: [
        ['A hosting agreement with an accredited research body; no employment-service permit, no visa fee, and 12 more months after the research to find work or start a company.',
          'Una convenzione di accoglienza con un ente di ricerca accreditato; nessun permesso del servizio per l’impiego, nessun costo del visto, e altri 12 mesi dopo la ricerca per trovare lavoro o avviare un’impresa.', 'AT-SRC-01 AT-SRC-17 AT-SRC-02'],
        ['A PhD on a university contract comes as a researcher with full social security; one on a scholarship comes as a student, and the scholarship is free of income tax.',
          'Un dottorando con contratto universitario entra come ricercatore con piena previdenza; uno con borsa entra come studente, e la borsa è esente da imposte.', 'AT-SRC-01 AT-SRC-09 AT-SRC-29']
      ],
      f: [[['Fee', 'Costo'], ['€218', '218 €'], 'AT-SRC-04']] },

    { k: 'whv', p: 'us', v: 'limited',
      name: ['Working holiday', 'Vacanza-lavoro'], law: 'bilateral agreements',
      t: [['US citizens aged 18 to 30 can get a working-holiday D visa for 6 or 12 months from the embassy; work is secondary, and the visa cannot be renewed or converted in Austria.',
        'I cittadini statunitensi dai 18 ai 30 anni possono ottenere dall’ambasciata un visto D vacanza-lavoro di 6 o 12 mesi; il lavoro è secondario, e il visto non si rinnova né si converte in Austria.', 'AT-SRC-22 AT-SRC-07']] },

    { k: 'whv', p: 'uk', v: 'closed',
      name: ['Working holiday', 'Vacanza-lavoro'], law: 'bilateral agreements',
      t: [['Austria has no working-holiday agreement with the UK.',
        'L’Austria non ha accordi di vacanza-lavoro con il Regno Unito.', 'AT-SRC-22']] },

    { k: 'whv', p: 'other', v: 'limited',
      name: ['Working holiday', 'Vacanza-lavoro'], law: 'bilateral agreements',
      t: [['Only for citizens of Argentina, Australia, Canada, Chile, South Korea, Japan, Hong Kong, Israel, New Zealand and Taiwan aged 18 to 30 (35 for Canada).',
        'Solo per cittadini di Argentina, Australia, Canada, Cile, Corea del Sud, Giappone, Hong Kong, Israele, Nuova Zelanda e Taiwan dai 18 ai 30 anni (35 per il Canada).', 'AT-SRC-22']] },

    { k: 'short', p: 'uk us other', v: 'open',
      name: ['Short stay', 'Soggiorno breve'], law: 'Schengen; NAG § 21',
      t: [['Up to 90 days in any 180, with no work. Visa-free nationals may file a first application inside Austria, but filing does not extend the 90 days.',
        'Fino a 90 giorni ogni 180, senza lavorare. Chi è esente da visto può presentare la prima domanda in Austria, ma la domanda non proroga i 90 giorni.', 'AT-SRC-10 AT-SRC-01']],
      f: [[['Schengen visa', 'Visto Schengen'], ['€90', '90 €'], 'AT-SRC-10']] }
  ],

  arrival: [
    { k: 'before', p: 'eu uk us other', t: [
      ['Choose housing whose landlord or manager will countersign the registration form (Meldezettel): without registration you cannot open a bank account or collect a residence card. Student residences sign it at once.',
        'Scegli un alloggio il cui proprietario o gestore controfirmi il modulo di registrazione (Meldezettel): senza registrazione non puoi aprire un conto né ritirare la tessera di soggiorno. Le residenze per studenti lo firmano subito.', 'AT-SRC-03 AT-SRC-16']
    ] },
    { k: 'before', p: 'uk us other', t: [
      ['Documents issued outside the EU need an apostille or full legalisation, and German translations by a court-registered translator (Gerichtsdolmetscher).',
        'I documenti emessi fuori dall’UE richiedono l’apostille o la legalizzazione completa, e traduzioni in tedesco di un traduttore iscritto all’albo dei tribunali (Gerichtsdolmetscher).', 'AT-SRC-31']
    ] },
    { k: 'before', p: 'other', t: [
      ['Apply at the Austrian embassy or consulate for where you live; once the immigration office approves, it issues a D visa, valid up to 90 days, to travel and collect the permit.',
        'Fai domanda all’ambasciata o consolato austriaco competente per il luogo in cui vivi; dopo l’approvazione dell’ufficio immigrazione rilascia un visto D, valido fino a 90 giorni, per viaggiare e ritirare il permesso.', 'AT-SRC-01 AT-SRC-28']
    ] },
    { k: 'address', p: 'eu uk us other', t: [
      ['Register at the registration office (Meldeamt) within 3 working days of moving in, with the form countersigned by your landlord. It is free, and you get the confirmation of registration on the spot.',
        'Registrati all’ufficio anagrafe (Meldeamt) entro 3 giorni lavorativi dall’ingresso nell’alloggio, con il modulo controfirmato dal proprietario. È gratuito, e ricevi subito la conferma di registrazione.', 'AT-SRC-03 AT-SRC-21']
    ] },
    { k: 'card', p: 'eu', t: [
      ['Staying more than 3 months, apply for a registration certificate (Anmeldebescheinigung) within 4 months of arriving: €44, with proof of work, or for students enrolment, funds and full health cover. Missing the deadline can be fined up to €250.',
        'Se resti più di 3 mesi, chiedi l’attestato di registrazione (Anmeldebescheinigung) entro 4 mesi dall’arrivo: 44 €, con prova di lavoro, o per gli studenti iscrizione, mezzi e copertura sanitaria completa. Superare il termine può costare fino a 250 €.', 'AT-SRC-20 AT-SRC-01']
    ] },
    { k: 'card', p: 'uk us other', t: [
      ['Collect the residence permit card in person at the immigration office (in Vienna, MA 35), where your fingerprints are taken and the flat fee is paid. In Vienna, waits of 4 to 12 months are common; outside it, 4 to 8 weeks.',
        'Ritira di persona la tessera del permesso all’ufficio immigrazione (a Vienna, MA 35), dove vengono rilevate le impronte e si paga la tassa forfettaria. A Vienna sono comuni attese da 4 a 12 mesi; fuori, da 4 a 8 settimane.', 'AT-SRC-04 AT-SRC-26 AT-SRC-27']
    ] },
    { k: 'number', p: 'eu uk us other', t: [
      ['Your 10-digit social security number (SVNR) is assigned when your employer or the health fund ÖGK registers you. A tax number comes from the tax office (Finanzamt).',
        'Il numero di previdenza sociale a 10 cifre (SVNR) viene assegnato quando il datore di lavoro o la cassa sanitaria ÖGK ti iscrive. Il codice fiscale lo assegna l’ufficio delle imposte (Finanzamt).', 'AT-SRC-05 AT-SRC-25']
    ] },
    { k: 'health', p: 'eu uk us other', t: [
      ['Without an Austrian biometric document, your health card (e-card) is not printed until you register a photo in person at a police office or ÖGK centre; until then, ask for a paper treatment certificate (Behandlungsbeleg).',
        'Senza un documento biometrico austriaco, la tessera sanitaria (e-card) non viene stampata finché non registri di persona una foto presso la polizia o un centro ÖGK; nel frattempo, chiedi un certificato cartaceo di cura (Behandlungsbeleg).', 'AT-SRC-24'],
      ['Students not covered by work or family can insure themselves with ÖGK for €78.84 a month in 2026.',
        'Gli studenti non coperti da lavoro o famiglia possono assicurarsi presso l’ÖGK per 78,84 € al mese nel 2026.', 'AT-SRC-23']
    ] },
    { k: 'health', p: 'eu', t: [
      ['EU students show their European Health Insurance Card, or private cover, for the registration certificate.',
        'Gli studenti UE presentano la Tessera europea di assicurazione malattia, o una copertura privata, per l’attestato di registrazione.', 'AT-SRC-20']
    ] },
    { k: 'bank', p: 'eu uk us other', t: [
      ['High-street banks (Erste Bank, Bank Austria, Raiffeisen) usually want the registration confirmation and proof of local income; a European online bank with a SEPA IBAN covers the first deposits.',
        'Le banche tradizionali (Erste Bank, Bank Austria, Raiffeisen) chiedono di solito la conferma di registrazione e una prova di reddito locale; una banca online europea con IBAN SEPA copre i primi depositi.', 'AT-SRC-16'],
      ['Government portals (FinanzOnline, MeineSV) need the ID Austria digital identity: foreigners activate it in person at a police office or tax office, and it lasts three years.',
        'I portali pubblici (FinanzOnline, MeineSV) richiedono l’identità digitale ID Austria: gli stranieri la attivano di persona presso la polizia o l’ufficio delle imposte, e dura tre anni.', 'AT-SRC-25']
    ] },
    { k: 'keep', p: 'eu', t: [
      ['The registration certificate does not expire with your job; keep your address registration up to date when you move.',
        'L’attestato di registrazione non scade con il lavoro; aggiorna la registrazione dell’indirizzo quando cambi casa.', 'AT-SRC-20 AT-SRC-03']
    ] },
    { k: 'keep', p: 'uk us other', t: [
      ['Apply to renew no earlier than 3 months before, and strictly before, your permit expires: you then keep the right to stay and work on the same terms until the decision.',
        'Chiedi il rinnovo non prima di 3 mesi e comunque prima della scadenza del permesso: mantieni così il diritto di restare e lavorare alle stesse condizioni fino alla decisione.', 'AT-SRC-01'],
      ['The filing receipt is not a travel document: if your old card has expired and you must travel, ask for an emergency visa sticker (Notvignette), €50, to return.',
        'La ricevuta di deposito non è un documento di viaggio: se la vecchia tessera è scaduta e devi viaggiare, chiedi un visto d’emergenza (Notvignette), 50 €, per rientrare.', 'AT-SRC-01 AT-SRC-04']
    ] },
    { k: 'keep', p: 'uk us', t: [
      ['Applying in Austria during a visa-free stay gives no right to stay beyond the 90 days and no right to work before the card is issued.',
        'Fare domanda in Austria durante un soggiorno senza visto non dà diritto a restare oltre i 90 giorni né a lavorare prima del rilascio della tessera.', 'AT-SRC-01 AT-SRC-07']
    ] }
  ],

  traps: [
    { p: 'uk us other', t: ['If no decision has come by about day 75 to 80 of your visa-free stay, leave the Schengen area before day 90 and wait outside: overstaying brings removal and a ban of up to five years.',
      'Se entro il 75°-80° giorno del soggiorno senza visto non è arrivata una decisione, lascia l’area Schengen prima del 90° giorno e aspetta fuori: superarlo comporta espulsione e divieto fino a cinque anni.', 'AT-SRC-01 AT-SRC-07'] },
    { p: 'uk us other', t: ['Vienna’s immigration office (MA 35) can take 4 to 9 months; six months and a day after a complete application you can file a complaint for inaction, which forces a decision within three months.',
      'L’ufficio immigrazione di Vienna (MA 35) può impiegare da 4 a 9 mesi; sei mesi e un giorno dopo una domanda completa si può presentare ricorso per inerzia, che impone una decisione entro tre mesi.', 'AT-SRC-08 AT-SRC-27'] },
    { p: 'uk us other', t: ['Cheap travel insurance with caps or exclusions is refused: cover must be complete. Students can take the ÖGK self-insurance.',
      'Le assicurazioni di viaggio economiche con massimali o esclusioni vengono rifiutate: la copertura deve essere completa. Gli studenti possono usare l’autoassicurazione ÖGK.', 'AT-SRC-01 AT-SRC-23'] },
    { p: 'uk us other', t: ['A foreign criminal record must be no older than three months when you apply; documents need an apostille and translations by a sworn court translator.',
      'Il certificato penale estero non deve avere più di tre mesi al momento della domanda; i documenti richiedono l’apostille e traduzioni di un traduttore giurato del tribunale.', 'AT-SRC-01 AT-SRC-31'] },
    { p: 'eu uk us other', t: ['Never pay a deposit without written certainty that the landlord will sign your Meldezettel; buying a false signature is a crime that costs the permit.',
      'Non pagare caparre senza la certezza scritta che il locatore firmi il Meldezettel; comprare una firma falsa è reato e fa perdere il permesso.', 'AT-SRC-03 AT-SRC-01'] },
    { p: 'eu', t: ['Missing the four-month deadline for the registration certificate can be fined up to €250.',
      'Mancare la scadenza dei quattro mesi per l’attestato di registrazione può costare una multa fino a 250 €.', 'AT-SRC-01'] }
  ],

  open: [
    { st: 'watch', t: ['Some consulates run by outside providers still charge the old €120 application fee on top of the new flat €218.',
      'Alcuni consolati gestiti da fornitori esterni riscuotono ancora la vecchia quota di 120 € oltre alla nuova tariffa unica di 218 €.'] },
    { st: 'open', t: ['Student renewals in Vienna still take three to five months, leaving many with only the filing receipt.',
      'I rinnovi degli studenti a Vienna richiedono ancora da tre a cinque mesi, lasciando molti con la sola ricevuta di deposito.'] },
    { st: 'pending', t: ['The 2027 shortage-occupation list is due at the end of 2026.',
      'La lista delle professioni carenti per il 2027 è attesa a fine 2026.'] },
    { st: 'watch', t: ['The health card (e-card) is not sent until you register a photo at a police station; in Vienna that appointment takes 4 to 8 weeks.',
      'La tessera sanitaria (e-card) non viene spedita finché non si registra una foto in un commissariato; a Vienna l’appuntamento richiede da 4 a 8 settimane.'] },
    { st: 'open', t: ['Some regional employment offices allow students to work full time in holidays; the law sets 20 hours.',
      'Alcuni uffici regionali per l’impiego consentono agli studenti di lavorare a tempo pieno nelle vacanze; la legge fissa 20 ore.'] }
  ]
});

/* Sources: generated by tools/visas-sources.js from research/visas_immigration/austria/austria_sources.md.
 * Do not edit by hand: change the register, then run the tool. */
ATLAS.visaSources('AT', {
  "AT-SRC-01": ["Bundesgesetz über die Niederlassung und den Aufenthalt in Österreich (Niederlassungs- und Aufenthaltsgesetz – NAG)","https://www.ris.bka.gv.at/GeltendeFassung.wxe?Abfrage=Bundesnormen&Gesetzesnummer=20004242","2026-10-05"],
  "AT-SRC-03": ["Bundesgesetz über das Meldewesen (Meldegesetz 1991 – MeldeG)","https://www.ris.bka.gv.at/GeltendeFassung.wxe?Abfrage=Bundesnormen&Gesetzesnummer=10005799","2026-10-05"],
  "AT-SRC-04": ["Gebührengesetz 1957 (GebG), modificato da BGBl. I Nr. 20/2025 e BGBl. I Nr. 97/2025 (AbgÄG 2025)","https://www.ris.bka.gv.at/GeltendeFassung.wxe?Abfrage=Bundesnormen&Gesetzesnummer=10003882","2026-10-05"],
  "AT-SRC-20": ["oesterreich.gv.at: Anmeldebescheinigung für EWR-Bürgerinnen und EWR-Bürger","https://www.oesterreich.gv.at/themen/bauen_und_wohnen/umzug/2/2/Seite.180612.html","2026-10-05"],
  "AT-SRC-28": ["BMEIA: Visabestimmungen und Antragsverfahren an österreichischen Vertretungsbehörden","https://www.bmeia.gv.at","2026-10-05"],
  "AT-SRC-02": ["Bundesgesetz vom 20. März 1975 über die Beschäftigung von Ausländern (Ausländerbeschäftigungsgesetz – AuslBG)","https://www.ris.bka.gv.at/GeltendeFassung.wxe?Abfrage=Bundesnormen&Gesetzesnummer=10008365","2026-10-05"],
  "AT-SRC-17": ["OeAD (Agenzia Austriaca per l'Istruzione e…: Researchers and Mobility under Directive (EU) 2016/801","https://oead.at/en/to-austria/entry-and-residence/researchers","2026-10-05"],
  "AT-SRC-05": ["Allgemeines Sozialversicherungsgesetz (ASVG)","https://www.ris.bka.gv.at/GeltendeFassung.wxe?Abfrage=Bundesnormen&Gesetzesnummer=10008147","2026-10-05"],
  "AT-SRC-16": ["OeAD (Agenzia Austriaca per l'Istruzione e…: Residence Permit Student: Conditions and Proof of Funds 2026","https://oead.at/en/to-austria/entry-and-residence/residence-permit-student","2026-10-05"],
  "AT-SRC-06": ["Bundesgesetz über die Organisation der Universitäten und ihre Studien (Universitätsgesetz 2002 – UG 2002)","https://www.ris.bka.gv.at/GeltendeFassung.wxe?Abfrage=Bundesnormen&Gesetzesnummer=20002128","2026-10-05"],
  "AT-SRC-32": ["ÖH (Österreichische Hochschüler_innenschaft): ÖH-Beitrag und Studierendenversicherung","https://www.oeh.ac.at","2026-10-05"],
  "AT-SRC-23": ["ÖGK (Österreichische Gesundheitskasse): Selbstversicherung für Studierende (§ 76 ASVG)","https://www.gesundheitskasse.at","2026-10-05"],
  "AT-SRC-18": ["AMS (Arbeitsmarktservice Österreich): Praktikum und Volontariat: Richtlinien für Arbeitgeber","https://www.ams.at/unternehmen/service-zur-personalsuche/beschaeftigung-auslaendischer-arbeitskraefte/praktikanten-und-volontaere","2026-10-05"],
  "AT-SRC-12": ["BMAW / BMI: migration.gv.at: Graduates of Austrian Universities","https://www.migration.gv.at/en/types-of-immigration/permanent-immigration/graduates/","2026-10-05"],
  "AT-SRC-07": ["Bundesgesetz über die Ausübung der Fremdenpolizei (Fremdenpolizeigesetz 2005 – FPG)","https://www.ris.bka.gv.at/GeltendeFassung.wxe?Abfrage=Bundesnormen&Gesetzesnummer=20004241","2026-10-05"],
  "AT-SRC-11": ["BMAW / BMI: Portale Ufficiale Immigrazione Permanente: migration.gv.at","https://www.migration.gv.at/en/types-of-immigration/permanent-immigration/","2026-10-05"],
  "AT-SRC-19": ["AMS (Arbeitsmarktservice Österreich): Bundesweite Mangelberufsliste (Elenco Federale Professioni Carenti)","https://www.ams.at/unternehmen/service-zur-personalsuche/beschaeftigung-auslaendischer-arbeitskraefte/fachkraefte-in-mangelberufen","2026-10-05"],
  "AT-SRC-13": ["BMAW / BMI: migration.gv.at: Other Key Workers (Sonstige Schlüsselkräfte)","https://www.migration.gv.at/en/types-of-immigration/permanent-immigration/other-key-workers/","2026-10-05"],
  "AT-SRC-14": ["BMAW / BMI: migration.gv.at: EU Blue Card (Blaue Karte EU)","https://www.migration.gv.at/en/types-of-immigration/permanent-immigration/eu-blue-card/","2026-10-05"],
  "AT-SRC-30": ["Statistik Austria: Brutto- und Nettojahreseinkommen der unselbständig Erwerbstätigen","https://www.statistik.at","2026-10-05"],
  "AT-SRC-09": ["Einkommensteuergesetz 1988 (EStG)","https://www.ris.bka.gv.at/GeltendeFassung.wxe?Abfrage=Bundesnormen&Gesetzesnummer=10004570","2026-10-05"],
  "AT-SRC-29": ["WKO (Wirtschaftskammer Österreich): Kollektivverträge und Arbeitsrecht in Österreich","https://www.wko.at","2026-10-05"],
  "AT-SRC-22": ["oesterreich.gv.at: Working Holiday Programme: Bilaterale Abkommen","https://www.oesterreich.gv.at/themen/arbeit_und_pension/arbeitsmarkt/working_holiday.html","2026-10-05"],
  "AT-SRC-10": ["Regolamento (UE) 2024/1415 della Commissione del 14 marzo 2024","https://eur-lex.europa.eu/eli/reg_del/2024/1415/oj","2026-10-05"],
  "AT-SRC-31": ["BMJ (Bundesministerium für Justiz): Gerichtsdolmetscherliste (SDG-Liste)","https://sdgliste.justiz.gv.at","2026-10-05"],
  "AT-SRC-21": ["oesterreich.gv.at: Meldewesen: Wohnsitzanmeldung (Meldezettel)","https://www.oesterreich.gv.at/themen/bauen_und_wohnen/an__abmeldung_des_wohnsitzes/Seite.180100.html","2026-10-05"],
  "AT-SRC-26": ["Stadt Wien (MA 35): Einwanderung und Staatsbürgerschaft: Verfahren und Standorte","https://www.wien.gv.at/kontakte/ma35/","2026-10-05"],
  "AT-SRC-27": ["Volksanwaltschaft Österreich: Berichte der Volksanwaltschaft an den Nationalrat (Prassi MA 35)","https://www.volksanwaltschaft.gv.at","2026-10-05"],
  "AT-SRC-25": ["BMF / Finanzamt Österreich: Steuernummer und ID Austria für internationale Fachkräfte","https://www.bmf.gv.at","2026-10-05"],
  "AT-SRC-24": ["Hauptverband / Dachverband der Sozialversicherungsträger: e-card mit Foto: Gesetzliche Fotopflicht ab 14 Jahren","https://www.chipkarte.at","2026-10-05"],
  "AT-SRC-08": ["Allgemeines Verwaltungsverfahrensgesetz 1991 (AVG) & VwGVG","https://www.ris.bka.gv.at/GeltendeFassung.wxe?Abfrage=Bundesnormen&Gesetzesnummer=10005780","2026-10-05"]
});
