/* Visas and permits: Sweden. From research/visas_immigration/sweden/
 * (guide, source register, open questions), council check of 5 Oct 2026. */
ATLAS.addVisas({
  id: 'SE',
  folder: 'sweden',
  checked: '2026-10-05',
  review: '2027-03-31',

  free: {
    p: 'eu',
    t: [
      ['EU, EEA and Swiss citizens work from day one with no permit, and since 2014 do not register with the Migration Agency.',
        'I cittadini UE, SEE e svizzeri lavorano dal primo giorno senza permesso, e dal 2014 non si registrano presso l’Agenzia per la migrazione.', 'SE-SRC-15'],
      ['With a contract or programme of at least a year, register at a Skatteverket service office to get a personal identity number (personnummer); shorter stays get only a coordination number.',
        'Con un contratto o un corso di almeno un anno ci si iscrive all’anagrafe presso uno sportello Skatteverket e si riceve il numero personale (personnummer); per soggiorni più brevi si ottiene solo un numero di coordinamento.', 'SE-SRC-15'],
      ['A one-year master’s lasts about ten months, so it usually does not qualify for a personal number; a two-year master’s does.',
        'Un master di un anno dura circa dieci mesi, quindi di solito non dà diritto al numero personale; un master biennale sì.', 'SE-SRC-15']
    ]
  },

  routes: [
    { k: 'study', p: 'uk us other', v: 'open',
      name: ['Residence permit for higher education', 'Permesso di soggiorno per istruzione superiore'], law: 'Utlänningslagen',
      t: [
        ['Pay the first tuition instalment before applying. Funds must sit in an account in your name only: parents’ sponsorship letters are refused.',
          'Si paga la prima rata delle tasse prima della domanda. I fondi devono stare su un conto intestato solo a te: le lettere di garanzia dei genitori vengono rifiutate.', 'SE-SRC-05'],
        ['Since 11 June 2026 you may work 15 hours a week in term and full time in June, July and August; a credited internship of your degree is exempt from the cap.',
          'Dall’11 giugno 2026 si lavora 15 ore a settimana durante i semestri e a tempo pieno a giugno, luglio e agosto; il tirocinio accreditato del corso è escluso dal limite.', 'SE-SRC-04'],
        ['To renew, have 37.5 ECTS after the first year and 45 in each later year. With 30 Swedish credits you can switch to a work permit from inside Sweden.',
          'Per rinnovare servono 37,5 ECTS dopo il primo anno e 45 in ciascuno dei successivi. Con 30 crediti svedesi si può passare al permesso di lavoro dalla Svezia.', 'SE-SRC-04 SE-SRC-06'],
        ['Non-EU students already holding a student permit in another EU country can come for up to 360 days within an EU mobility programme, on the university’s notification.',
          'Gli studenti extra-UE con permesso per studio in un altro paese UE possono venire fino a 360 giorni in un programma di mobilità UE, con la notifica dell’università.', 'SE-SRC-09']
      ],
      f: [
        [['Proof of funds, 2026', 'Mezzi di sussistenza, 2026'], ['SEK 10,656 a month (SEK 106,560 for ten months)', 'SEK 10.656 al mese (SEK 106.560 per dieci mesi)'], 'SE-SRC-05'],
        [['Fee', 'Costo'], ['SEK 1,500', 'SEK 1.500'], 'SE-SRC-11']
      ],
      w: ['Report your address to the Migration Agency within 30 days of arriving.',
        'Comunica il tuo indirizzo all’Agenzia per la migrazione entro 30 giorni dall’arrivo.', 'SE-SRC-04'] },

    { k: 'intern', p: 'uk us other', v: 'sponsor',
      name: ['Internship linked to higher education', 'Tirocinio collegato all’istruzione superiore'], law: 'Directive 2016/801',
      t: [['For people completing a degree abroad or who graduated in the last two years: an internship agreement with a training plan, full health insurance and funds, for up to 18 months. Other internships count as ordinary employment, with its salary and union rules.',
        'Per chi sta completando una laurea all’estero o si è laureato negli ultimi due anni: una convenzione con piano formativo, assicurazione sanitaria completa e mezzi, fino a 18 mesi. Gli altri tirocini valgono come lavoro ordinario, con le sue regole su stipendio e sindacato.', 'SE-SRC-08 SE-SRC-01']],
      f: [
        [['Funds', 'Mezzi'], ['SEK 10,656 a month', 'SEK 10.656 al mese'], 'SE-SRC-05 SE-SRC-08'],
        [['Fee', 'Costo'], ['SEK 1,500', 'SEK 1.500'], 'SE-SRC-11']
      ] },

    { k: 'search', p: 'uk us other', v: 'open',
      name: ['Permit to look for work or start a business after studies', 'Permesso per cercare lavoro o avviare un’impresa dopo gli studi'], law: 'Utlänningsförordningen 5 kap. 1 b §',
      t: [
        ['After at least two semesters (60 ECTS) of higher education in Sweden, or a research project: 12 months (12 to 18 after a PhD), not renewable, with no limit on work.',
          'Dopo almeno due semestri (60 ECTS) di istruzione superiore in Svezia, o un progetto di ricerca: 12 mesi (da 12 a 18 dopo un dottorato), non rinnovabili, senza limiti di lavoro.', 'SE-SRC-06'],
        ['A qualifying job offer converts it from inside Sweden, and you can start as soon as the application is filed.',
          'Un’offerta di lavoro conforme lo converte dalla Svezia, e si può iniziare appena presentata la domanda.', 'SE-SRC-01 SE-SRC-06']
      ],
      f: [[['Funds in your account', 'Fondi sul tuo conto'], ['SEK 127,872 (SEK 10,656 a month for 12 months)', 'SEK 127.872 (SEK 10.656 al mese per 12 mesi)'], 'SE-SRC-05 SE-SRC-06']],
      w: ['Apply before your study permit expires: one day late and you are unlawfully present and lose the switch.',
        'Fai domanda prima che scada il permesso per studio: un giorno di ritardo e il soggiorno diventa irregolare e si perde il passaggio.', 'SE-SRC-06'] },

    { k: 'work', p: 'uk us other', v: 'sponsor',
      name: ['Work permit', 'Permesso di lavoro'], law: 'Utlänningslagen 6 kap.',
      t: [
        ['The job must be advertised for 10 days on Platsbanken/EURES before the offer, the union consulted and Swedish collective terms met, with four insurances (health, life, work injury, occupational pension) from day one.',
          'Il posto va pubblicato per 10 giorni su Platsbanken/EURES prima dell’offerta, il sindacato consultato e rispettate le condizioni dei contratti collettivi svedesi, con quattro assicurazioni (malattia, vita, infortuni, pensione integrativa) dal primo giorno.', 'SE-SRC-12 SE-SRC-13 SE-SRC-06'],
        ['The first permit is for up to two years and tied to employer and occupation; after four years of work permits in seven, permanent residence with a contract running at least 18 more months.',
          'Il primo permesso dura al massimo due anni ed è legato a datore e professione; dopo quattro anni di permessi di lavoro su sette, residenza permanente con un contratto di almeno altri 18 mesi.', 'SE-SRC-12 SE-SRC-07']
      ],
      f: [
        [['Salary, from 16 June 2026 (90% of the median)', 'Stipendio, dal 16 giugno 2026 (90% della mediana)'], ['SEK 34,470 a month', 'SEK 34.470 al mese'], 'SE-SRC-01'],
        [['Salary, shortage jobs and recent Swedish graduates (75%)', 'Stipendio, professioni carenti e neolaureati in Svezia (75%)'], ['SEK 28,725 a month', 'SEK 28.725 al mese'], 'SE-SRC-01 SE-SRC-02'],
        [['Fee', 'Costo'], ['SEK 2,200', 'SEK 2.200'], 'SE-SRC-11']
      ],
      w: ['A job not advertised for the 10 days cannot be fixed later: the application is refused.',
        'Un posto non pubblicato per i 10 giorni non si può sanare dopo: la domanda viene respinta.', 'SE-SRC-12 SE-SRC-13'] },

    { k: 'work', p: 'uk us other', v: 'sponsor',
      name: ['EU Blue Card', 'Carta Blu UE'], law: 'Utlänningslagen 6a kap.',
      t: [['A contract of at least six months for highly qualified work and a three-year degree (180 ECTS) or five years of experience; the card lasts up to four years, and permanent residence comes after three.',
        'Un contratto di almeno sei mesi per lavoro altamente qualificato e una laurea triennale (180 ECTS) o cinque anni di esperienza; la carta dura fino a quattro anni, e la residenza permanente arriva dopo tre.', 'SE-SRC-03']],
      f: [
        [['Salary', 'Stipendio'], ['SEK 53,625 a month', 'SEK 53.625 al mese'], 'SE-SRC-03'],
        [['Fee', 'Costo'], ['SEK 2,200', 'SEK 2.200'], 'SE-SRC-11']
      ] },

    { k: 'research', p: 'uk us other', v: 'sponsor',
      name: ['Researcher permit, and PhDs', 'Permesso per ricercatori e dottorati'], law: 'Directive 2016/801',
      t: [
        ['A hosting agreement with a research body approved by the Swedish Research Council; no work permit needed, up to four years, and short research stays from another EU country need no Swedish permit.',
          'Una convenzione di accoglienza con un ente di ricerca approvato dal Consiglio svedese per la ricerca; nessun permesso di lavoro, fino a quattro anni, e brevi soggiorni di ricerca da un altro paese UE non richiedono permesso svedese.', 'SE-SRC-09'],
        ['Swedish PhD students are salaried employees with no tuition; four years of doctoral studies give permanent residence only with a job contract running at least 18 more months.',
          'I dottorandi svedesi sono dipendenti stipendiati senza tasse; quattro anni di dottorato danno la residenza permanente solo con un contratto di lavoro di almeno altri 18 mesi.', 'SE-SRC-07']
      ],
      f: [
        [['Typical PhD salary', 'Stipendio tipico da dottorando'], ['SEK 32,000 to 38,000 a month', 'SEK 32.000-38.000 al mese'], 'SE-SRC-07'],
        [['Fee', 'Costo'], ['SEK 1,500 (free for EU, Sida or Swedish Institute grants)', 'SEK 1.500 (gratuito per borse UE, Sida o Swedish Institute)'], 'SE-SRC-11']
      ] },

    { k: 'whv', p: 'uk us', v: 'closed',
      name: ['Working holiday', 'Vacanza-lavoro'], law: 'bilateral agreements',
      t: [['Sweden has working-holiday agreements only with Australia, New Zealand, Canada, South Korea, Japan, Hong Kong, Argentina, Chile and Uruguay.',
        'La Svezia ha accordi di vacanza-lavoro solo con Australia, Nuova Zelanda, Canada, Corea del Sud, Giappone, Hong Kong, Argentina, Cile e Uruguay.', 'SE-SRC-10']] },

    { k: 'whv', p: 'other', v: 'limited',
      name: ['Working holiday', 'Vacanza-lavoro'], law: 'bilateral agreements',
      t: [['For citizens of the partner countries aged 18 to 30 (35 for Canada, New Zealand and Australia), with SEK 15,000 and a return ticket: 12 months, and no switch to a work permit inside Sweden.',
        'Per cittadini dei paesi partner dai 18 ai 30 anni (35 per Canada, Nuova Zelanda e Australia), con SEK 15.000 e il biglietto di ritorno: 12 mesi, e nessun passaggio al permesso di lavoro in Svezia.', 'SE-SRC-10']] },

    { k: 'short', p: 'uk us other', v: 'open',
      name: ['Short stay', 'Soggiorno breve'], law: 'Schengen; Utlänningslagen',
      t: [['Up to 90 days in any 180, with no employment; a permit cannot be applied for from inside Sweden after a visa-free or Schengen entry.',
        'Fino a 90 giorni ogni 180, senza impiego; dopo un ingresso senza visto o con visto Schengen non si può chiedere un permesso dalla Svezia.', 'SE-SRC-12']] },

    { k: 'tax', p: 'eu uk us other', v: 'limited',
      name: ['Expert tax relief (expertskatt)', 'Agevolazione per esperti (expertskatt)'], law: 'Inkomstskattelagen 11 kap. 22 §',
      t: [['25% of pay is tax-free for seven years if you earn above the threshold and were not tax-resident in Sweden in the previous five years (study included); apply within three months of starting.',
        'Il 25% della retribuzione è esente per sette anni se si guadagna sopra la soglia e non si è stati residenti fiscali in Svezia nei cinque anni precedenti (studio compreso); la domanda va fatta entro tre mesi dall’inizio.', 'SE-SRC-14']],
      f: [[['Salary threshold, 2026', 'Soglia di stipendio, 2026'], ['SEK 88,801 a month', 'SEK 88.801 al mese'], 'SE-SRC-14 SE-SRC-21']] }
  ],

  arrival: [
    { k: 'before', p: 'eu', t: [
      ['Nothing to arrange in advance: you have a right of residence and may start work on your first day with no permit.',
        'Niente da preparare in anticipo: hai il diritto di soggiorno e puoi iniziare a lavorare dal primo giorno senza permesso.', 'SE-SRC-15']
    ] },
    { k: 'before', p: 'uk us other', t: [
      ['After the Migration Agency’s decision, visa-required nationals collect the residence card at a Swedish embassy before travelling; visa-free nationals with a biometric passport (US, UK, Canada, Australia) can verify their identity in the Freja eID app and travel with the approval letter.',
        'Dopo la decisione dell’Agenzia per la migrazione, chi ha bisogno del visto ritira la carta di soggiorno presso un’ambasciata svedese prima di partire; chi è esente da visto con passaporto biometrico (Stati Uniti, Regno Unito, Canada, Australia) può verificare l’identità nell’app Freja eID e viaggiare con la lettera di approvazione.', 'SE-SRC-24']
    ] },
    { k: 'address', p: 'eu uk us other', t: [
      ['In your first days, go in person to a government service centre (Statens servicecenter) with passport, a work or study contract of at least 12 months and your lease to register in the population register (folkbokföring). In practice it takes 8 to 16 weeks.',
        'Nei primi giorni, presentati di persona a un centro servizi statale (Statens servicecenter) con passaporto, contratto di lavoro o studio di almeno 12 mesi e contratto d’affitto per iscriverti all’anagrafe (folkbokföring). Nella pratica servono da 8 a 16 settimane.', 'SE-SRC-15 SE-SRC-20'],
      ['One-year master’s programmes usually fall short of the 12 months, so students on them are often refused registration.',
        'I master annuali di solito non raggiungono i 12 mesi, quindi chi li frequenta si vede spesso rifiutare l’iscrizione anagrafica.', 'SE-SRC-15']
    ] },
    { k: 'card', p: 'eu', t: [
      ['None: you need no permit from the Migration Agency. Once registered and with a personal number, you can get a Swedish ID card (400 SEK).',
        'Nessuno: non serve alcun permesso dall’Agenzia per la migrazione. Una volta iscritto e con il numero personale, puoi ottenere una carta d’identità svedese (400 SEK).', 'SE-SRC-15 SE-SRC-16']
    ] },
    { k: 'card', p: 'uk us other', t: [
      ['If you travelled with the approval letter, give your photo and fingerprints in Sweden to get the residence card (UT-kort).',
        'Se hai viaggiato con la lettera di approvazione, fornisci foto e impronte in Svezia per ricevere la carta di soggiorno (UT-kort).', 'SE-SRC-24']
    ] },
    { k: 'number', p: 'eu uk us other', t: [
      ['Staying 12 months or more you get a personal identity number (personnummer); for shorter stays, a coordination number (samordningsnummer) for tax.',
        'Se resti 12 mesi o più ricevi il numero d’identità personale (personnummer); per soggiorni più brevi, un numero di coordinamento (samordningsnummer) a fini fiscali.', 'SE-SRC-15'],
      ['Ask the Tax Agency for a preliminary tax decision (A-skattsedel) at once, or your employer may withhold tax at the emergency rate.',
        'Chiedi subito all’Agenzia delle entrate la decisione fiscale preliminare (A-skattsedel), o il datore potrebbe trattenere l’imposta con l’aliquota d’emergenza.', 'SE-SRC-19']
    ] },
    { k: 'health', p: 'eu uk us other', t: [
      ['Register with the Social Insurance Agency (Försäkringskassan) to know which benefits you are covered for: work-based benefits such as sick pay apply from day one of a job.',
        'Registrati presso la Cassa di previdenza sociale (Försäkringskassan) per sapere a quali prestazioni hai diritto: quelle legate al lavoro, come l’indennità di malattia, valgono dal primo giorno di impiego.', 'SE-SRC-18']
    ] },
    { k: 'health', p: 'eu', t: [
      ['Without a personal number, for instance on an internship under a year, use your European Health Insurance Card or an S1 form.',
        'Senza numero personale, per esempio durante un tirocinio di meno di un anno, usa la Tessera europea di assicurazione malattia o il modulo S1.', 'SE-SRC-15']
    ] },
    { k: 'health', p: 'uk us other', t: [
      ['Students who pay tuition are covered by the state insurance FAS or FAS+ that their university takes out with Kammarkollegiet.',
        'Gli studenti che pagano le rette sono coperti dall’assicurazione statale FAS o FAS+ che l’università stipula con Kammarkollegiet.', 'SE-SRC-23']
    ] },
    { k: 'bank', p: 'eu uk us other', t: [
      ['Anyone lawfully resident in the EU has the right to a basic payment account (enkelt betalkonto) on a passport alone, even before the personal number: ask at SEB, Swedbank, Handelsbanken or Nordea with your employment letter.',
        'Chiunque risieda legalmente nell’UE ha diritto a un conto di pagamento di base (enkelt betalkonto) con il solo passaporto, anche prima del numero personale: chiedilo a SEB, Swedbank, Handelsbanken o Nordea con la lettera di assunzione.', 'SE-SRC-17'],
      ['Until you have BankID, which needs the personal number and a Swedish ID card, use the Freja eID+ app, verified with your passport at a partner shop, for government portals.',
        'Finché non hai BankID, che richiede il numero personale e la carta d’identità svedese, usa per i portali pubblici l’app Freja eID+, verificata con il passaporto in un negozio convenzionato.', 'SE-SRC-24 SE-SRC-16']
    ] },
    { k: 'keep', p: 'eu', t: [
      ['Keep your registered address true: a false registration of residence is a crime in Sweden.',
        'Mantieni veritiero l’indirizzo registrato: una falsa registrazione di residenza è un reato in Svezia.', 'SE-SRC-22']
    ] },
    { k: 'keep', p: 'uk us other', t: [
      ['Apply to extend before your permit expires: you may then stay and keep working or studying on the same terms until the decision.',
        'Chiedi la proroga prima che il permesso scada: puoi così restare e continuare a lavorare o studiare alle stesse condizioni fino alla decisione.', 'SE-SRC-12'],
      ['If your card expires while you wait, do not leave Sweden: the receipt is valid only inside the country, and the Migration Agency issues no re-entry visa or temporary permit.',
        'Se la carta scade durante l’attesa, non lasciare la Svezia: la ricevuta vale solo nel paese, e l’Agenzia per la migrazione non rilascia visti di rientro né permessi provvisori.', 'SE-SRC-12']
    ] }
  ],

  traps: [
    { p: 'uk us other', t: ['If your card expires while a renewal is pending, do not leave Sweden: the receipt is valid only inside Sweden and the agency issues no re-entry papers.',
      'Se la carta scade con un rinnovo in corso, non lasciare la Svezia: la ricevuta vale solo in Svezia e l’Agenzia non rilascia documenti di rientro.', 'SE-SRC-12'] },
    { p: 'eu uk us other', t: ['Registering at an address where you do not live is a crime that can lead to removal and a Schengen ban; sublets need the landlord’s written consent.',
      'Registrarsi a un indirizzo dove non si vive è reato e può portare all’espulsione e a un divieto Schengen; i subaffitti richiedono il consenso scritto del proprietario.', 'SE-SRC-22'] },
    { p: 'eu uk us other', t: ['Ask Skatteverket for a preliminary tax certificate (A-skattsedel) at once, or your employer withholds at the maximum rate.',
      'Chiedi subito a Skatteverket il certificato fiscale preliminare (A-skattsedel), altrimenti il datore trattiene l’aliquota massima.', 'SE-SRC-19'] },
    { p: 'eu uk us other', t: ['Banks must open a basic payment account with just your passport, before you have a personal number.',
      'Le banche devono aprire un conto di pagamento di base con il solo passaporto, prima ancora del numero personale.', 'SE-SRC-17'] }
  ],

  open: [
    { st: 'pending', t: ['The government plans to raise the work-permit salary to 100% of the median; no date has been set.',
      'Il governo intende portare lo stipendio per il permesso di lavoro al 100% della mediana; non c’è ancora una data.'] },
    { st: 'pending', t: ['A citizenship reform would require eight years of residence, B1 Swedish and a civics test.',
      'Una riforma della cittadinanza richiederebbe otto anni di residenza, svedese B1 e un test di educazione civica.'] },
    { st: 'watch', t: ['Most Skatteverket offices accept a permanent contract with a probation period for the personal number, but not all.',
      'La maggior parte degli uffici Skatteverket accetta per il numero personale un contratto a tempo indeterminato con periodo di prova, ma non tutti.'] },
    { st: 'watch', t: ['Only visa-exempt nationals can verify their passport remotely with the Freja eID app.',
      'Solo i cittadini esenti da visto possono verificare il passaporto a distanza con l’app Freja eID.'] }
  ]
});

/* Sources: generated by tools/visas-sources.js from research/visas_immigration/sweden/sweden_sources.md.
 * Do not edit by hand: change the register, then run the tool. */
ATLAS.visaSources('SE', {
  "SE-SRC-15": ["Skatteverket: Folkbokföring: regola 12 mesi per Personnummer ex Folkbokföringslagen (1991:481) 3 §","https://www.skatteverket.se/servicelankar/otherlanguages/englishengelska/individualsandemployees/movingtosweden.4.5a85666214dbad743ffff2f.html","2026-10-05"],
  "SE-SRC-05": ["Migrationsverket: Studenti universitari (Högre utbildning): sussistenza 2026 (10.656 SEK/mese studente, 4.440 SEK partner, 2.664 SEK…","https://www.migrationsverket.se/en/you-want-to-apply/study/higher-education.html","2026-10-05"],
  "SE-SRC-04": ["Migrationsverket: Riforma studenti 11/06/2026: limite lavoro 15 ore/settimana nei semestri, illimitato in estate","https://www.migrationsverket.se/English/About-the-Migration-Agency/News-archive/2026-05-25-new-rules-for-residence-permits-for-studies-in-higher-education.html","2026-10-05"],
  "SE-SRC-06": ["Migrationsverket: Ricerca lavoro post-studio (Söka arbete efter studier): fino a 12 mesi (18 per PhD), min. 60 CFU, sussistenza 127.872…","https://www.migrationsverket.se/en/you-want-to-apply/work/look-for-work/look-for-work-after-completing-your-studies-in-sweden.html","2026-10-05"],
  "SE-SRC-09": ["Migrationsverket: Ricercatori (Forskare): convenzione mottagningsavtal (Vetenskapsrådet), esenzione permesso lavoro, mobilità intra-UE…","https://www.migrationsverket.se/en/you-want-to-apply/work/researchers.html","2026-10-05"],
  "SE-SRC-11": ["Migrationsverket: Tariffe 2026 (Avgifter): lavoro prima domanda 2.200 SEK / rinnovo 1.500 SEK","https://www.migrationsverket.se/en/you-want-to-apply/fees.html","2026-10-05"],
  "SE-SRC-08": ["Migrationsverket: Tirocini (Praktik): curriculare esente da limite 15h","https://www.migrationsverket.se/en/you-want-to-apply/work/internship.html","2026-10-05"],
  "SE-SRC-01": ["Migrationsverket: Salario mediano nazionale SCB (38.300 SEK) e soglia försörjningskrav 90% (34.470 SEK/mese) dal 16/06/2026","https://www.migrationsverket.se/nyheter/news-archive/2026-06-16-new-median-salary-affects-the-salary-requirement-for-work-permits.html","2026-10-05"],
  "SE-SRC-12": ["Riksdagen / Lagen.nu: Utlänningslagen (2005:716) e Utlänningsförordningen (2006:97): pubblicazione 10 gg EURES (6:2), parere sindacale,…","https://lagen.nu/2005:716","2026-10-05"],
  "SE-SRC-13": ["Migrationsöverdomstolen: Sentenza MIG 2015:11 (insanabilità omessa pubblicazione 10 gg EURES) e MIG 2017:24 / Prop. 2021/22:134 sulle 4…","https://lagen.nu/dom/mig/2015:11","2026-10-05"],
  "SE-SRC-07": ["Migrationsverket: Dottorandi (Doktorandstudier): stipendio doktorandanställning, esenzione rette, PUT dopo 4 anni ex Utl.lagen 5:5 con…","https://www.migrationsverket.se/en/you-want-to-apply/study/doctoral-studies.html","2026-10-05"],
  "SE-SRC-02": ["Riksdagen / Regeringen: Proposition 2025/26:87 (Nya regler för arbetskraftsinvandring), Betänkande 2025/26:SfU12, in vigore dal 01/06/2026","https://www.riksdagen.se","2026-10-05"],
  "SE-SRC-03": ["Migrationsverket: EU Blue Card (EU-blåkort): 1,25x salario medio Medlingsinstitutet (53.625 SEK/mese), contratto min. 6 mesi, validità…","https://www.migrationsverket.se/en/you-want-to-apply/work/eu-blue-card.html","2026-10-05"],
  "SE-SRC-10": ["Migrationsverket: Working Holiday (Feriearbete): accordi con 9 paesi partner (18-30/35 anni), durata max 12 mesi, fondi 15.000 SEK,…","https://www.migrationsverket.se/en/you-want-to-apply/work/working-holiday.html","2026-10-05"],
  "SE-SRC-14": ["Forskarskattenämnden: Regime fiscale impatriati (expertskatt): Inkomstskattelagen 11 kap. 22-23 a §§ (SFS 2023:765), esenzione 25% per 7…","https://forskarskattenamnden.se","2026-10-05"],
  "SE-SRC-21": ["SCB (Statistiska centralbyrån): Salario mediano nazionale SCB (38.300 SEK/mese, tabell AM0110 al 16/06/2026) e Prisbasbelopp 2026 fissato a 59.200 SEK","https://www.scb.se","2026-10-05"],
  "SE-SRC-24": ["Sweden Abroad / Utrikesdepartementet: Rete consolare svedese, controllo fisico passaporto originale (visa-required) vs app Freja eID (visa-exempt), e centri…","https://www.swedenabroad.se","2026-10-05"],
  "SE-SRC-20": ["Justitieombudsmannen (JO): Censura formale (skarp kritik) contro Skatteverket per tempi reali di 8-16+ settimane nel rilascio del Personnummer in…","https://www.jo.se","2026-10-05"],
  "SE-SRC-16": ["Skatteverket: ID-kort för folkbokförda: tariffa 400 SEK, pagamento anticipato, rilascio previa identificazione de visu presso…","https://www.skatteverket.se/privat/folkbokforing/idkort.4.76a43be41220633853880001004.html","2026-10-05"],
  "SE-SRC-19": ["Skatteverket: Ritenute fiscali: A-skatt comunale ordinaria (skattetabell 30-33, media 32%) vs imposta SINK per non residenti (25%…","https://www.skatteverket.se/privat/skatter/arbeteochinkomst/skattetabeller.4.18e1b10334ebe8bc80005221.html","2026-10-05"],
  "SE-SRC-18": ["Försäkringskassan: Sicurezza sociale (Modulo 5456): prestazioni sul lavoro (arbetsskade, sjukpenning dal giorno 1) vs prestazioni sulla…","https://www.forsakringskassan.se/privatperson/flytta-till-arbeta-eller-studera-i-sverige","2026-10-05"],
  "SE-SRC-23": ["Kammarkollegiet: Assicurazioni statali studentesche e visiting: polizze FAS / FAS+ e Student IN per atenei svedesi, copertura medica e…","https://www.kammarkollegiet.se/vara-tjanster/forsakring-och-riskhantering/forsakringar-for-studenter-och-doktorander","2026-10-05"],
  "SE-SRC-17": ["Finansinspektionen / Konsumenternas: Conto di base (enkelt betalkonto) ex Betaltjänstlagen 4a kap. (Direttiva UE 2014/92/UE PAD)","https://www.konsumenternas.se/lan--betalningar/betalningar/bankkonton/ratt-till-konto/","2026-10-05"],
  "SE-SRC-22": ["Polisen / Sveriges Domstolar: Folkbokföringsbrott (art. 42 Folkbokföringslagen): reato penale per false registrazioni di residenza o indirizzi…","https://polisen.se","2026-10-05"]
});
