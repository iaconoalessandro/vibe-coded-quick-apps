/* Visas and permits: Portugal. From research/visas_immigration/portugal/
 * (guide, source register, open questions), council check of 5 Oct 2026. */
ATLAS.addVisas({
  id: 'PT',
  folder: 'portugal',
  checked: '2026-10-05',
  review: '2027-03-31',

  free: {
    p: 'eu',
    t: [
      ['EU, EEA and Swiss citizens need no visa or work authorisation, and enter with a passport or identity card.',
        'I cittadini UE, SEE e svizzeri non hanno bisogno di visto né di autorizzazione al lavoro, ed entrano con passaporto o carta d’identità.', 'PT-SRC-05'],
      ['After three months, register within the following 30 days at the town hall (Câmara Municipal) for the EU registration certificate (CRUE), valid five years.',
        'Dopo tre mesi, ci si registra entro i 30 giorni successivi al comune (Câmara Municipal) per il certificato di registrazione UE (CRUE), valido cinque anni.', 'PT-SRC-05 PT-SRC-12'],
      ['Get a tax number (NIF) first: you need it for a contract, a lease and a bank account. EU residents need no tax representative.',
        'Per prima cosa si chiede il codice fiscale (NIF): serve per il contratto, l’affitto e il conto in banca. I residenti UE non hanno bisogno di un rappresentante fiscale.', 'PT-SRC-19']
    ],
  },

  routes: [
    { k: 'study', p: 'uk us other', v: 'open',
      name: ['Higher-education student visa (D4) and residence permit', 'Visto per studio universitario (D4) e permesso di residenza'], law: 'Lei 23/2007 arts. 62, 91',
      t: [
        ['Get the D4 visa at a consulate before you travel; it carries your appointment with the migration agency AIMA, where you receive the residence permit.',
          'Si ottiene il visto D4 al consolato prima di partire; riporta l’appuntamento con l’agenzia per le migrazioni AIMA, dove si riceve il permesso di residenza.', 'PT-SRC-01 PT-SRC-06'],
        ['Students may work, employed or self-employed, with no fixed cap on hours as long as the work stays secondary to studying; no separate authorisation is needed.',
          'Gli studenti possono lavorare, da dipendenti o autonomi, senza un tetto fisso di ore purché il lavoro resti secondario rispetto allo studio; non serve un’autorizzazione separata.', 'PT-SRC-01'],
        ['A non-EU student with a student permit from another EU country can study here up to 360 days with no visa, once AIMA is notified.',
          'Uno studente extra-UE con permesso per studio di un altro paese UE può studiare qui fino a 360 giorni senza visto, dopo la notifica ad AIMA.', 'PT-SRC-01 PT-SRC-29']
      ],
      f: [
        [['Proof of funds', 'Mezzi di sussistenza'], ['€920 a month (€11,040 a year); €460 with housing secured', '920 € al mese (11.040 € l’anno); 460 € con alloggio garantito'], 'PT-SRC-08 PT-SRC-10'],
        [['Visa', 'Visto'], ['€110', '110 €'], 'PT-SRC-06'],
        [['AIMA permit fees', 'Costi del permesso AIMA'], ['€247.30 at the desk, €185.60 online', '247,30 € allo sportello, 185,60 € online'], 'PT-SRC-07']
      ] },

    { k: 'intern', p: 'eu uk us other', v: 'open',
      name: ['Professional internship (estágio profissional)', 'Tirocinio professionale (estágio profissional)'], law: 'DL 66/2011',
      t: [
        ['An internship outside a degree must pay a monthly grant set by your qualification, plus a meal allowance for each day worked and accident insurance; it lasts up to nine months.',
          'Un tirocinio fuori dal percorso di studi deve pagare una borsa mensile fissata secondo il titolo, più un buono pasto per ogni giorno di presenza e l’assicurazione contro gli infortuni; dura fino a nove mesi.', 'PT-SRC-16'],
        ['Non-EU interns need a temporary-stay or residence visa for internship; with a job offer at the end, the permit converts to work without leaving Portugal.',
          'Gli stagisti extra-UE hanno bisogno di un visto di soggiorno temporaneo o di residenza per tirocinio; con un’offerta di lavoro alla fine, il permesso si converte in lavoro senza lasciare il Portogallo.', 'PT-SRC-01 PT-SRC-06']
      ],
      f: [[['Minimum grant', 'Borsa minima'], ['€966.83 (bachelor’s), €1,127.97 (master’s), €1,289.11 (doctorate) a month', '966,83 € (laurea), 1.127,97 € (magistrale), 1.289,11 € (dottorato) al mese'], 'PT-SRC-16 PT-SRC-09']] },

    { k: 'search', p: 'uk us other', v: 'open',
      name: ['Job-search or business permit after a Portuguese degree', 'Permesso per ricerca lavoro o impresa dopo una laurea portoghese'], law: 'Lei 23/2007 art. 122 (1)(p)',
      t: [
        ['After a master’s or doctorate in Portugal you can get 12 months with no consular visa, free to work, registered with the job centre (IEFP); a stable job converts it to a work permit inside Portugal.',
          'Dopo un mestrado o un dottorato in Portogallo si ottengono 12 mesi senza visto consolare, con libertà di lavorare e iscrizione al centro per l’impiego (IEFP); un lavoro stabile lo converte in permesso di lavoro in Portogallo.', 'PT-SRC-01'],
        ['Graduates, bachelor’s included, with a job offer before their student permit ends can switch straight to a work permit.',
          'I laureati, anche triennali, con un’offerta prima della scadenza del permesso per studio possono passare direttamente al permesso di lavoro.', 'PT-SRC-01']
      ],
      f: [
        [['Funds', 'Mezzi'], ['€11,040 a year', '11.040 € l’anno'], 'PT-SRC-08 PT-SRC-10'],
        [['AIMA fees, applying without a visa', 'Costi AIMA, domanda senza visto'], ['€554.50 at the desk, €416 online', '554,50 € allo sportello, 416 € online'], 'PT-SRC-07']
      ] },

    { k: 'search', p: 'uk us other', v: 'closed',
      name: ['Qualified job-seeker visa, from abroad', 'Visto per ricerca di lavoro qualificato, dall’estero'], law: 'Lei 23/2007 art. 57-A',
      t: [['The old open job-seeker visa was abolished; its replacement for listed skills is not yet issued, because the implementing order has not been published.',
        'Il vecchio visto aperto per ricerca lavoro è stato abolito; quello nuovo per competenze elencate non viene ancora rilasciato, perché il decreto attuativo non è stato pubblicato.', 'PT-SRC-03 PT-SRC-01']] },

    { k: 'work', p: 'uk us other', v: 'sponsor',
      name: ['EU Blue Card', 'Carta Blu UE'], law: 'Lei 53/2023',
      t: [['A contract of at least six months; a three-year degree, or experience (three years in the last seven for IT, five otherwise). Your family can join at once, and after a year you can move to another EU country more easily.',
        'Un contratto di almeno sei mesi; una laurea triennale, o esperienza (tre anni negli ultimi sette per l’informatica, cinque altrimenti). La famiglia può raggiungerti subito, e dopo un anno ci si sposta più facilmente in un altro paese UE.', 'PT-SRC-24']],
      f: [
        [['Salary, standard', 'Stipendio, soglia ordinaria'], ['€35,574 a year', '35.574 € l’anno'], 'PT-SRC-24'],
        [['Salary, shortage jobs or recent graduates', 'Stipendio, professioni carenti o neolaureati'], ['€28,459.20 a year', '28.459,20 € l’anno'], 'PT-SRC-24'],
        [['AIMA fees', 'Costi AIMA'], ['€329.70 at the desk, plus the €110 visa', '329,70 € allo sportello, più 110 € di visto'], 'PT-SRC-07 PT-SRC-06']
      ] },

    { k: 'work', p: 'uk us other', v: 'sponsor',
      name: ['Highly qualified work visa (D3) and Tech Visa', 'Visto per lavoro altamente qualificato (D3) e Tech Visa'], law: 'Lei 23/2007 arts. 61-A, 90',
      t: [['A contract of at least a year in a specialist role, a degree or five years of experience, and pay of at least 1.5 times the national average or three times the social index. Companies certified by IAPMEI can use the Tech Visa, which gets the visa in about 15 to 20 days.',
        'Un contratto di almeno un anno per un ruolo specialistico, una laurea o cinque anni di esperienza, e una retribuzione di almeno 1,5 volte la media nazionale o tre volte l’indice sociale. Le aziende certificate IAPMEI possono usare il Tech Visa, che ottiene il visto in circa 15-20 giorni.', 'PT-SRC-01 PT-SRC-09 PT-SRC-25']],
      f: [[['Pay floor (three times the social index)', 'Retribuzione minima (tre volte l’indice sociale)'], ['€1,611.39 gross a month', '1.611,39 € lordi al mese'], 'PT-SRC-09']] },

    { k: 'work', p: 'uk us other', v: 'limited',
      name: ['Ordinary work visa (D1)', 'Visto per lavoro subordinato (D1)'], law: 'Lei 23/2007 arts. 59, 88',
      t: [['A contract of at least a year at no less than the minimum wage, with the job first offered through the employment institute (IEFP). The first permit lasts two years, then three; after five years, permanent residence or citizenship.',
        'Un contratto di almeno un anno non sotto il salario minimo, con l’offerta prima registrata presso l’istituto per l’impiego (IEFP). Il primo permesso dura due anni, poi tre; dopo cinque anni, residenza permanente o cittadinanza.', 'PT-SRC-01 PT-SRC-08 PT-SRC-15']],
      f: [[['Minimum wage, 2026', 'Salario minimo, 2026'], ['€920 a month (14 payments)', '920 € al mese (14 mensilità)'], 'PT-SRC-08']] },

    { k: 'research', p: 'uk us other', v: 'sponsor',
      name: ['Researcher permit, and PhDs', 'Permesso per ricercatori e dottorati'], law: 'Lei 23/2007 art. 91-B',
      t: [
        ['A hosting agreement with a research centre or university accredited by FCT or DGES; priority visa handling, family reunion at once and mobility within the EU.',
          'Una convenzione di accoglienza con un centro di ricerca o un’università accreditati da FCT o DGES; trattazione prioritaria del visto, ricongiungimento immediato e mobilità nell’UE.', 'PT-SRC-01'],
        ['FCT doctoral grants are free of income tax, and FCT pays your voluntary social-security contributions.',
          'Le borse di dottorato FCT sono esenti da IRS, e FCT versa i contributi della previdenza volontaria.', 'PT-SRC-17']
      ] },

    { k: 'whv', p: 'uk us', v: 'closed',
      name: ['Working holiday', 'Vacanza-lavoro'], law: 'Lei 23/2007 art. 61',
      t: [['Portugal has no working-holiday agreement with the UK or the US.',
        'Il Portogallo non ha accordi di vacanza-lavoro con il Regno Unito o gli Stati Uniti.', 'PT-SRC-01']] },

    { k: 'whv', p: 'other', v: 'limited',
      name: ['Working holiday', 'Vacanza-lavoro'], law: 'Lei 23/2007 art. 61',
      t: [['Only for citizens of Australia, New Zealand, Japan, South Korea, Canada, Argentina, Chile, Peru and Uruguay aged 18 to 30 (35 for Canada): 12 months, work for six at most, and no conversion inside Portugal.',
        'Solo per cittadini di Australia, Nuova Zelanda, Giappone, Corea del Sud, Canada, Argentina, Cile, Perù e Uruguay dai 18 ai 30 anni (35 per il Canada): 12 mesi, lavoro al massimo per sei, e nessuna conversione in Portogallo.', 'PT-SRC-01']],
      f: [[['Visa', 'Visto'], ['€110', '110 €'], 'PT-SRC-06']] },

    { k: 'short', p: 'uk us other', v: 'open',
      name: ['Short stay', 'Soggiorno breve'], law: 'Schengen; Lei 23/2007 art. 14',
      t: [
        ['Up to 90 days in any 180, with no work. Arriving through another Schengen country and not staying in a hotel, send an entry declaration to AIMA or the police within three working days; missing it costs €60 to €190.',
          'Fino a 90 giorni ogni 180, senza lavorare. Arrivando da un altro paese Schengen e senza alloggio in albergo, si invia la dichiarazione di ingresso ad AIMA o alla polizia entro tre giorni lavorativi; ometterla costa da 60 a 190 €.', 'PT-SRC-01'],
        ['Since June 2024 you can no longer arrive as a tourist and apply for residence on the spot: a consular visa first is the only way.',
          'Da giugno 2024 non si può più arrivare da turisti e chiedere la residenza sul posto: l’unica via è prima il visto consolare.', 'PT-SRC-02']
      ] },

    { k: 'stay', p: 'uk us other', v: 'open',
      name: ['Citizenship after five years', 'Cittadinanza dopo cinque anni'], law: 'Lei Orgânica 1/2024',
      t: [['The five years towards citizenship count from the day you applied for your first residence permit, so AIMA’s delays do not cost you time.',
        'I cinque anni per la cittadinanza si contano dal giorno della domanda del primo permesso di residenza, quindi i ritardi di AIMA non fanno perdere tempo.', 'PT-SRC-15']] },

    { k: 'tax', p: 'eu uk us other', v: 'open',
      name: ['IRS Jovem and IFICI', 'IRS Jovem e IFICI'], law: 'CIRS art. 12-B; EBF art. 58-A',
      t: [
        ['Workers up to 35 pay no income tax in their first year, then 75%, 50% and 25% of it is exempt over ten years, on up to €29,542.15 a year.',
          'I lavoratori fino a 35 anni non pagano IRS nel primo anno, poi ne è esente il 75%, il 50% e il 25% nell’arco di dieci anni, fino a 29.542,15 € l’anno.', 'PT-SRC-27 PT-SRC-09'],
        ['Researchers, university teachers and staff of certified R&D and tech projects who were not tax-resident in the previous five years pay a flat 20% for ten years.',
          'Ricercatori, docenti universitari e personale di progetti R&D e tech certificati non residenti fiscali nei cinque anni precedenti pagano un’aliquota fissa del 20% per dieci anni.', 'PT-SRC-26']
      ] }
  ],

  arrival: [
    { k: 'before', p: 'eu uk us other', t: [
      ['Insist on a lease the landlord registers at the Finance Portal, with electronic rent receipts: it is your proof of residence for every later step.',
        'Pretendi un contratto d’affitto registrato dal proprietario sul Portal das Finanças, con ricevute elettroniche dell’affitto: è la tua prova di residenza per tutti i passaggi successivi.', 'PT-SRC-22']
    ] },
    { k: 'before', p: 'uk us other', t: [
      ['Get the residence visa at a Portuguese consulate before you travel (€110 for work, valid 120 days, with your biometrics appointment at AIMA): since the expression-of-interest route closed in 2024, entering without one leaves no way to regularise and risks a 3 to 5-year Schengen entry ban.',
        'Ottieni il visto di residenza presso un consolato portoghese prima di partire (110 € per lavoro, valido 120 giorni, con l’appuntamento biometrico all’AIMA): dalla chiusura della manifestação de interesse nel 2024, entrare senza lascia nessuna via di regolarizzazione e rischia un divieto d’ingresso Schengen da 3 a 5 anni.', 'PT-SRC-01 PT-SRC-02 PT-SRC-06'],
      ['Foreign criminal records expire 90 days after issue, so do not request them too early.',
        'I casellari giudiziali esteri scadono 90 giorni dopo il rilascio, quindi non richiederli troppo presto.', 'PT-SRC-01']
    ] },
    { k: 'address', p: 'eu uk us other', t: [
      ['Get a certificate of residence (atestado de residência) from the parish council (junta de freguesia) with your registered lease; without one, two residents registered to vote in the same parish must sign in person that you live there.',
        'Ottieni il certificato di residenza (atestado de residência) dalla circoscrizione (junta de freguesia) con il contratto registrato; senza, due residenti iscritti alle liste elettorali della stessa circoscrizione devono firmare di persona che vivi lì.', 'PT-SRC-22']
    ] },
    { k: 'card', p: 'eu', t: [
      ['Staying over 3 months, register within the following 30 days at the town hall (câmara municipal) for the EU citizen registration certificate (CRUE): €15, valid 5 years, with ID, tax number and work contract or employer’s statement. Missing the window costs €400 to €1,500.',
        'Se resti oltre 3 mesi, registrati nei 30 giorni successivi al comune (câmara municipal) per il certificato di registrazione del cittadino UE (CRUE): 15 €, valido 5 anni, con documento d’identità, codice fiscale e contratto o dichiarazione del datore. Superare la finestra costa da 400 a 1.500 €.', 'PT-SRC-05 PT-SRC-11 PT-SRC-12']
    ] },
    { k: 'card', p: 'uk us other', t: [
      ['At your AIMA appointment you apply for the temporary residence permit: for work €247.30 at the desk or €185.60 online; the first permit lasts 2 years, then renews for 3.',
        'All’appuntamento AIMA chiedi il permesso di soggiorno temporaneo: per lavoro 247,30 € allo sportello o 185,60 € online; il primo permesso dura 2 anni, poi si rinnova per 3.', 'PT-SRC-07 PT-SRC-01']
    ] },
    { k: 'number', p: 'eu uk us other', t: [
      ['First get a 9-digit tax number (NIF) from the Tax Authority: you need it for work, leases, utilities, bank and university. EU residents need no tax representative; others can avoid one by accepting the tax office’s electronic notifications.',
        'Ottieni prima il codice fiscale a 9 cifre (NIF) dall’Autorità tributaria: serve per lavoro, affitti, utenze, banca e università. I residenti UE non hanno bisogno di un rappresentante fiscale; gli altri possono evitarlo accettando le notifiche elettroniche del fisco.', 'PT-SRC-19'],
      ['Then ask for a social security number online (“NISS na Hora”) with passport and NIF; it is issued in 24 to 72 working hours and needed for any job.',
        'Poi chiedi online il numero di previdenza sociale (“NISS na Hora”) con passaporto e NIF; viene rilasciato in 24-72 ore lavorative ed è necessario per qualsiasi lavoro.', 'PT-SRC-20']
    ] },
    { k: 'health', p: 'eu uk us other', t: [
      ['Register at your local health centre for a national health service user number (número de utente), with ID, NIF, the parish residence certificate and your residence document or receipt, to get a family doctor.',
        'Registrati al centro di salute locale per il numero di utente del servizio sanitario nazionale (número de utente), con documento d’identità, NIF, certificato di residenza della circoscrizione e documento o ricevuta di soggiorno, per avere un medico di famiglia.', 'PT-SRC-21']
    ] },
    { k: 'bank', p: 'eu uk us other', none: true },
    { k: 'keep', p: 'eu', t: [
      ['The registration certificate lasts 5 years.',
        'Il certificato di registrazione dura 5 anni.', 'PT-SRC-05']
    ] },
    { k: 'keep', p: 'uk us other', t: [
      ['The AIMA receipt with a QR code makes your stay legal and lets you work while you wait, but only in Portugal: until you hold the card, fly home only on direct flights with no Schengen stopover.',
        'La ricevuta AIMA con codice QR rende legale il soggiorno e ti permette di lavorare durante l’attesa, ma solo in Portogallo: finché non hai la carta, torna a casa solo con voli diretti senza scali Schengen.', 'PT-SRC-01 PT-SRC-23'],
      ['The 5 years for citizenship count from the day you applied for the permit, not the day it was granted.',
        'I 5 anni per la cittadinanza si contano dal giorno della domanda di permesso, non da quello del rilascio.', 'PT-SRC-15']
    ] }
  ],

  traps: [
    { p: 'uk us other', t: ['The AIMA receipt and Portugal’s extensions of expired visas are valid only in Portugal: fly home only on direct flights, never through another Schengen airport, until you hold the card.',
      'La ricevuta AIMA e le proroghe portoghesi dei visti scaduti valgono solo in Portogallo: fino alla carta, si rientra solo con voli diretti, mai attraverso un altro aeroporto Schengen.', 'PT-SRC-23'] },
    { p: 'uk us other', t: ['Criminal-record certificates expire 90 days after issue: request them too early and the application is rejected.',
      'I certificati del casellario scadono 90 giorni dopo il rilascio: chiesti troppo presto, la domanda viene respinta.', 'PT-SRC-01'] },
    { p: 'eu uk us other', t: ['Insist on a lease registered with the tax office and electronic rent receipts; without one, the parish residence certificate needs two local voters as witnesses.',
      'Pretendi un contratto d’affitto registrato all’Agenzia delle entrate e le ricevute elettroniche; senza, il certificato di residenza della freguesia richiede due testimoni elettori del quartiere.', 'PT-SRC-22'] },
    { p: 'eu', t: ['Registering for the CRUE after your 120th day can cost a fine of €400 to €1,500.',
      'Registrarsi per il CRUE dopo il 120° giorno può costare una multa da 400 a 1.500 €.', 'PT-SRC-05'] },
    { p: 'uk us other', t: ['AIMA appointments and “fast-track” services sold on social media are scams: the only channel is aima.gov.pt.',
      'Gli appuntamenti AIMA e i servizi “accelerati” venduti sui social sono truffe: l’unico canale è aima.gov.pt.', 'PT-SRC-13'] }
  ],

  open: [
    { st: 'pending', t: ['The qualified job-seeker visa waits for the order listing eligible skills; its funds requirement (€2,760 or €3,280) is also unconfirmed.',
      'Il visto per ricerca di lavoro qualificato attende il decreto con le competenze ammesse; anche i mezzi richiesti (2.760 € o 3.280 €) non sono confermati.'] },
    { st: 'open', t: ['AIMA appointments for new visas and family reunion often take 6 to 12 months, beyond the 120-day visa.',
      'Gli appuntamenti AIMA per nuovi visti e ricongiungimenti richiedono spesso da 6 a 12 mesi, oltre i 120 giorni del visto.'] },
    { st: 'open', t: ['Lisbon and Porto town halls may ask EU citizens for a work contract and parish certificate, beyond the sworn statement the law requires.',
      'I comuni di Lisbona e Porto possono chiedere ai cittadini UE un contratto e il certificato della freguesia, oltre la dichiarazione giurata prevista dalla legge.'] },
    { st: 'open', t: ['Getting the parish residence certificate is hard for people renting informally, a large part of the market.',
      'Ottenere il certificato di residenza della freguesia è difficile per chi affitta in modo informale, una parte ampia del mercato.'] },
    { st: 'watch', t: ['Whether tax offices apply the exemption from a tax representative to non-EU residents who accept electronic notices.',
      'Se gli uffici fiscali applichino l’esenzione dal rappresentante fiscale ai residenti extra-UE che accettano le notifiche elettroniche.'] }
  ]
});

/* Sources: generated by tools/visas-sources.js from research/visas_immigration/portugal/portugal_sources.md.
 * Do not edit by hand: change the register, then run the tool. */
ATLAS.visaSources('PT', {
  "PT-SRC-05": ["Diário da República: Lei n.º 37/2006, de 9 de agosto (recepimento Direttiva 2004/38/CE)","https://diariodarepublica.pt/dr/detalhe/lei/37-2006-258071","2026-10-05"],
  "PT-SRC-12": ["Serviço: Pedir o Certificado de Registo para cidadão da UE/EEE/Suíça","https://eportugal.gov.pt/servicos/pedir-o-certificado-de-registo-para-cidadao-da-ue/eee/suica","2026-10-05"],
  "PT-SRC-19": ["Autoridade Tributária e Aduaneira (AT): Ofício-Circulado n.º 90057/2022 e DL n.º 44/2022 (Art. 19 LGT)","https://info.portaldasfinancas.gov.pt/pt/informacao_fiscal/legislacao/instrucoes_administrativas/Documents/Oficio_Circulado_90057_2022.pdf","2026-10-05"],
  "PT-SRC-01": ["Diário da República / PGDLisboa: Lei n.º 23/2007 consolidata (agg. Lei 61/2025 e Lei 62/2026)","https://www.pgdlisboa.pt/leis/lei_mostra_articulado.php?nid=920&tabela=leis","2026-10-05"],
  "PT-SRC-06": ["Diário da República: Portaria n.º 91/2025/1, de 10 de março (mod. Portaria 229/2021)","https://diariodarepublica.pt/dr/detalhe/portaria/91-2025-1-903829102","2026-10-05"],
  "PT-SRC-29": ["EUR-Lex: Direttiva (UE) 2016/801 del Parlamento Europeo e del Consiglio","https://eur-lex.europa.eu/eli/dir/2016/801/oj","2026-10-05"],
  "PT-SRC-08": ["Diário da República: Decreto-Lei n.º 139/2025, de 29 de dezembro","https://diariodarepublica.pt/dr/detalhe/decreto-lei/139-2025-903102451","2026-10-05"],
  "PT-SRC-10": ["Diário da República: Portaria n.º 1563/2007, de 11 de dezembro, Artigo 2.º","https://diariodarepublica.pt/dr/detalhe/portaria/1563-2007-447545","2026-10-05"],
  "PT-SRC-07": ["Diário da República: Portaria n.º 307/2023, de 13 de outubro (agg. 1° marzo 2026)","https://diariodarepublica.pt/dr/detalhe/portaria/307-2023-222839401","2026-10-05"],
  "PT-SRC-16": ["Diário da República: Decreto-Lei n.º 66/2011, de 1 de junho","https://diariodarepublica.pt/dr/detalhe/decreto-lei/66-2011-277395","2026-10-05"],
  "PT-SRC-09": ["Diário da República: Portaria n.º 480-A/2025/1, de 30 de dezembro","https://diariodarepublica.pt/dr/detalhe/portaria/480-a-2025-1-903204918","2026-10-05"],
  "PT-SRC-03": ["Diário da República: Lei n.º 61/2025, de 22 de outubro","https://diariodarepublica.pt/dr/detalhe/lei/61-2025-900595304","2026-10-05"],
  "PT-SRC-24": ["Diário da República: Lei n.º 53/2023, de 31 de agosto (Carta Blu UE)","https://diariodarepublica.pt/dr/detalhe/lei/53-2023-220049102","2026-10-05"],
  "PT-SRC-25": ["Diário da República: Portaria n.º 111/2019, de 12 de abril","https://diariodarepublica.pt/dr/detalhe/portaria/111-2019-119102941","2026-10-05"],
  "PT-SRC-15": ["Diário da República: Lei Orgânica n.º 1/2024, de 5 de março (Art. 15 n.º 4 Lei da Nacionalidade)","https://diariodarepublica.pt/dr/detalhe/lei-organica/1-2024-852109401","2026-10-05"],
  "PT-SRC-17": ["Diário da República: Lei n.º 40/2004 mod. Decreto-Lei n.º 123/2019","https://diariodarepublica.pt/dr/detalhe/decreto-lei/123-2019-124239841","2026-10-05"],
  "PT-SRC-02": ["Diário da República: Decreto-Lei n.º 37-A/2024, de 3 de junho","https://diariodarepublica.pt/dr/detalhe/decreto-lei/37-a-2024-857503554","2026-10-05"],
  "PT-SRC-27": ["Diário da República: Código do IRS (CIRS), Artigo 12.º-B (agg. OE 2025 e OE 2026)","https://diariodarepublica.pt/dr/detalhe/lei/82-2023-226019482","2026-10-05"],
  "PT-SRC-26": ["Diário da República: Portaria n.º 352/2024/1, de 23 de dezembro","https://diariodarepublica.pt/dr/detalhe/portaria/352-2024-1-898710294","2026-10-05"],
  "PT-SRC-22": ["Diário da República: Decreto-Lei n.º 135/99 mod. DL 73/2014, Artigo 34.º","https://diariodarepublica.pt/dr/detalhe/decreto-lei/135-1999-633010","2026-10-05"],
  "PT-SRC-11": ["Diário da República: Portaria n.º 1334-D/2010 mod. Portaria n.º 13/2024","https://diariodarepublica.pt/dr/detalhe/portaria/13-2024-836798031","2026-10-05"],
  "PT-SRC-20": ["Instituto da Segurança Social: Segurança Social Direta: Pedido de NISS na Hora","https://www.seg-social.pt/pedido-de-niss","2026-10-05"],
  "PT-SRC-21": ["Serviço Nacional de Saúde (SNS): Registo Nacional de Utentes (RNU) / ACSS Despacho 2536/2012","https://www.sns.gov.pt","2026-10-05"],
  "PT-SRC-23": ["Diário da República: Decreto-Lei n.º 41-A/2024 e Decreto-Lei n.º 85-B/2025","https://diariodarepublica.pt/dr/detalhe/decreto-lei/41-a-2024-870501209","2026-10-05"],
  "PT-SRC-13": ["AIMA, I.P.: Agência para a Integração, Migrações e Asilo (Portale Ufficiale)","https://aima.gov.pt/pt","2026-10-05"]
});
