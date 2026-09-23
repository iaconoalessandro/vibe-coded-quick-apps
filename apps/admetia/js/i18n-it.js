/* ---------------------------------------------------------------------------
 * Italian for the interface: the pages' own HTML, buttons, notes and the
 * sentences the results pages build. Keyed by the exact English — see
 * js/i18n.js for how lookups work, and data/i18n-it-models.js for the
 * questions and school facts.
 *
 * Keys with {braces} are templates: the braces are filled with numbers and
 * names after translation, so keep every {name} in the Italian too. Keys with
 * HTML are whole paragraphs from the pages; keep their tags.
 *
 * Informal "tu" throughout, as on most Italian student sites.
 * ------------------------------------------------------------------------- */

I18N.add('it', {

  /* ---------------------------------------------------------------- pages */

  'Admission Chances Calculator': 'Admission Chances — il calcolatore',
  'Business tracks — Admission Chances Calculator': 'Percorsi business — Admission Chances',
  'IT & Computing — Admission Chances Calculator': 'Informatica — Admission Chances',
  'MBA Chances — Admission Chances Calculator': 'Chance MBA — Admission Chances',
  'Master\'s Chances — Admission Chances Calculator': 'Chance per i master — Admission Chances',
  'Computing Chances — Admission Chances Calculator': 'Chance in informatica — Admission Chances',
  '{track} — Admission Chances Calculator': '{track} — Admission Chances',
  '{track} master’s — Admission Chances Calculator': 'Master in {track} — Admission Chances',

  'Free, private admissions calculators for MBA, business master\'s and computing master\'s programmes in the UK, Europe and the US. Your answers never leave your browser. In English and Italian.':
    'Calcolatori di ammissione gratuiti e privati per MBA, master in business e master in informatica nel Regno Unito, in Europa e negli Stati Uniti. Le tue risposte non lasciano mai il browser. In inglese e in italiano.',
  'Score your profile against MBA programmes and master\'s in Finance, Management and Marketing across the UK, Europe and the US. Free, private, in English and Italian.':
    'Valuta il tuo profilo rispetto ai programmi MBA e ai master in finanza, management e marketing nel Regno Unito, in Europa e negli Stati Uniti. Gratuito, privato, in inglese e in italiano.',
  'Do you clear the rules? Computer Science, Data Science & AI and conversion master\'s in the UK, Europe and the US, checked against each programme\'s published entry rules.':
    'Rispetti i requisiti? Master in informatica, data science e IA e di conversione nel Regno Unito, in Europa e negli Stati Uniti, confrontati con le regole d\'ingresso pubblicate da ogni programma.',
  'A points-based MBA calculator across 38 business schools: your score, your verdict at each school, and what would close the gap. Free and private.':
    'Un calcolatore MBA a punti su 38 business school: il tuo punteggio, il verdetto per ogni scuola e cosa colmerebbe la distanza. Gratuito e privato.',
  'Master\'s in Management, Finance and Marketing: hard entry rules first, then your score under each school\'s own weighting. Free and private.':
    'Master in management, finanza e marketing: prima i requisiti vincolanti, poi il tuo punteggio con i pesi di ogni scuola. Gratuito e privato.',
  'Computer Science, Data Science & AI and conversion master\'s: published entry rules first, then your score. Free and private.':
    'Master in informatica, data science e IA e di conversione: prima le regole d\'ingresso pubblicate, poi il tuo punteggio. Gratuito e privato.',

  /* Masthead, strip and navigation */
  'Admissions index': 'Indice delle ammissioni',
  'Edition': 'Edizione',
  'Language': 'Lingua',
  'Salmon financial paper': 'Carta salmone da quotidiano finanziario',
  'Wall Street — black and white, Times New Roman': 'Wall Street — bianco e nero, Times New Roman',
  'Black masthead, white page, full colour': 'Testata nera, pagina bianca, a colori',
  'An independent calculator for MBA, business and computing master’s degrees': 'Un calcolatore indipendente per MBA, master in business e master in informatica',
  'Calculators': 'Calcolatori',
  'Business': 'Business',
  'Finance': 'Finanza',
  'Management': 'Management',
  'Marketing': 'Marketing',
  'Computing': 'Informatica',
  'Computer Science': 'Informatica',
  'Data &amp; AI': 'Data e IA',
  'Data Science & AI': 'Data Science e IA',
  'Data Science &amp; AI': 'Data Science e IA',
  'Conversion': 'Conversione',
  'Conversion MSc': 'MSc di conversione',
  'Contents': 'Indice',
  'Running score': 'Punteggio in corso',
  'points': 'punti',

  /* Front page */
  'The calculator': 'Il calcolatore',
  'Work out where you <em>actually</em> stand.': 'Scopri dove ti trovi <em>davvero</em>.',
  'Three calculators. A reimplementation of a published, points-based MBA admissions model; a purpose-built model for pre-experience business master’s degrees; and a rule-first model for IT &amp; computing master’s in the UK, Europe and the US.':
    'Tre calcolatori. La ricostruzione di un modello di ammissione MBA a punti già pubblicato; un modello costruito apposta per i master in business per neolaureati; e un modello basato sulle regole per i master in informatica nel Regno Unito, in Europa e negli Stati Uniti.',
  'Two university students at desks, heads down, writing an exam paper.': 'Due studenti universitari ai banchi, a testa bassa, durante un esame scritto.',
  'Most published requirements at master’s level are pass/fail.': 'A livello di master, la maggior parte dei requisiti pubblicati è promosso/bocciato.',
  'Choose your field': 'Scegli il tuo ambito',
  'Graduating students throwing their caps in the air outside a business school.': 'Neolaureati che lanciano il tocco in aria davanti a una business school.',
  'MBA, Master in Finance, Master in Management and Master in Marketing. Scored against roughly 60 programmes in Europe and the US.':
    'MBA, Master in Finance, Master in Management e Master in Marketing. Valutati su circa 60 programmi in Europa e negli Stati Uniti.',
  'Begin the business calculator →': 'Inizia il calcolatore business →',
  'IT &amp; Computing': 'Informatica',
  'Computer Science, Data Science and AI, and conversion master’s for graduates of other subjects. Scored against the entry rules each programme publishes.':
    'Informatica, data science e IA, e master di conversione per laureati in altre materie. Valutati sulle regole d\'ingresso pubblicate da ogni programma.',
  'Begin the computing calculator →': 'Inizia il calcolatore di informatica →',
  'Highest bars': 'Le soglie più alte',
  'What this is': 'Cos\'è',
  'An independent, unofficial tool built for personal use. It is not affiliated with, endorsed by, or connected to any admissions consultancy or business school. It produces a rough estimate and cannot predict a decision.':
    'Uno strumento indipendente e non ufficiale, nato per uso personale. Non è affiliato, approvato o collegato ad alcuna società di consulenza per le ammissioni né ad alcuna business school. Dà una stima approssimativa e non può prevedere una decisione.',
  'How the scoring works': 'Come funziona il punteggio',
  'Three things this does that a generic calculator does not.': 'Tre cose che fa e che un calcolatore generico non fa.',
  'Hard rules first': 'Prima i requisiti vincolanti',
  'Most published requirements at master’s level are pass/fail: ECTS prerequisites, experience caps, test floors. A school you fail one of is reported ineligible rather than merely scored low — a 780 GMAT does not buy back a missing statistics module.':
    'A livello di master la maggior parte dei requisiti pubblicati è promosso/bocciato: prerequisiti in ECTS, tetti all\'esperienza, punteggi minimi ai test. Una scuola di cui non rispetti un requisito risulta non ammissibile, non semplicemente con un punteggio basso: un GMAT da 780 non compra un esame di statistica che manca.',
  'Weighed school by school': 'Pesato scuola per scuola',
  'Bocconi runs no interview, takes no reference letters and names GPA as a compulsory pillar — grades and the test are close to the whole ranking there. HEC and IE read essays and interview you instead. Each programme is scored under its own weighting, not one average.':
    'La Bocconi non fa colloqui, non prende lettere di referenza e indica il GPA come pilastro obbligatorio: lì voti e test sono quasi tutta la graduatoria. HEC e IE invece leggono gli essay e ti fanno un colloquio. Ogni programma viene valutato con i propri pesi, non con una media unica.',
  'Every number sourced': 'Ogni numero ha una fonte',
  'Facts are tagged by where they came from — the school’s own page, a school document, a third-party aggregator, an FOI disclosure — and the tool says plainly when a school publishes nothing at all, which is most of them.':
    'Ogni dato indica da dove viene — la pagina della scuola, un suo documento, un aggregatore di terzi, una richiesta FOI — e lo strumento dice chiaramente quando una scuola non pubblica nulla, cioè quasi sempre.',
  'A 780 GMAT does not buy back a missing statistics module.': 'Un GMAT da 780 non compra un esame di statistica che manca.',
  'On why eligibility is checked before anything is scored': 'Sul perché l\'ammissibilità si controlla prima di dare qualsiasi punteggio',
  '<b class="rubric-in">Colophon</b>Runs in your browser. No accounts, no cookies and no lead capture; visits are counted anonymously — which page, never what you type.':
    '<b class="rubric-in">Colophon</b>Funziona nel tuo browser. Niente account, niente cookie e nessuna raccolta di contatti; le visite sono contate in forma anonima — quale pagina, mai cosa scrivi.',
  '<b class="rubric-in">Your answers</b>Stored only in this browser, and only so a refresh does not lose them.':
    '<b class="rubric-in">Le tue risposte</b>Salvate solo in questo browser, e solo perché non si perdano ricaricando la pagina.',
  '<b class="rubric-in">Sources</b>Every figure is tagged by where it came from, or marked as an estimate when no school publishes it.':
    '<b class="rubric-in">Fonti</b>Ogni numero indica da dove viene, o è segnato come stima quando nessuna scuola lo pubblica.',
  '<b class="rubric-in">Colophon</b>Your answers never leave this browser. Visits are counted anonymously — which page, never what you type.':
    '<b class="rubric-in">Colophon</b>Le tue risposte non lasciano mai questo browser. Le visite sono contate in forma anonima — quale pagina, mai cosa scrivi.',

  /* Business track page */
  'Which programme are you <em>applying</em> to?': 'A quale programma <em>ti candidi</em>?',
  'The MBA and the pre-experience master’s degrees are judged on almost opposite criteria, so they use separate models. Full-time work experience helps an MBA application and can disqualify a master’s one.':
    'L\'MBA e i master per neolaureati si giudicano con criteri quasi opposti, quindi usano modelli separati. L\'esperienza di lavoro a tempo pieno aiuta una candidatura MBA e può escluderti da un master.',
  'Four students working through notes and laptops together at a campus table.': 'Quattro studenti che lavorano insieme su appunti e portatili a un tavolo del campus.',
  'Post-experience': 'Con esperienza',
  'A senior executive in a dark suit standing, arms folded, in front of a boardroom in session.': 'Un dirigente in abito scuro, in piedi a braccia conserte, davanti a una riunione del consiglio.',
  'Points-based model': 'Modello a punti',
  'Two or more years of work experience. Scored on a published points-based model, against 30 schools on a shared scale plus 8 modelled individually.':
    'Due o più anni di esperienza lavorativa. Valutato con un modello a punti già pubblicato, su 30 scuole con una scala comune più 8 modellate singolarmente.',
  'Begin the MBA calculator →': 'Inizia il calcolatore MBA →',
  'Pre-experience master’s': 'Master per neolaureati',
  'A trading desk of stacked monitors showing live candlestick charts.': 'Una postazione di trading con monitor impilati che mostrano grafici a candele in tempo reale.',
  'MiF, MSc Finance, MFin, MFE. Quantitative coursework is a hard prerequisite at most of these, not a preference.':
    'MiF, MSc Finance, MFin, MFE. Nella maggior parte di questi la preparazione quantitativa è un prerequisito vincolante, non una preferenza.',
  'Begin →': 'Inizia →',
  'Three consultants in a meeting, going through figures on a tablet together.': 'Tre consulenti in riunione che esaminano insieme dei numeri su un tablet.',
  'MiM, MSc Management, MMS. Targeted at recent graduates; several programmes cap the work experience they will accept.':
    'MiM, MSc Management, MMS. Pensati per neolaureati; diversi programmi fissano un tetto all\'esperienza lavorativa che accettano.',
  'A street wall of brand billboards — Gucci, adidas and the NBA stacked above a storefront.': 'Una parete di cartelloni pubblicitari in strada — Gucci, adidas e la NBA uno sopra l\'altro sopra una vetrina.',
  'MSc Marketing and Marketing Management. Fewer programmes, and the least published admissions data of any track here.':
    'MSc Marketing e Marketing Management. Meno programmi, e i dati di ammissione pubblicati più scarsi di tutti i percorsi.',
  '<strong>A caveat that matters for the master’s tracks.</strong> Most European programmes publish no admitted-student test average at all. The figures circulating on consultancy sites are largely estimates presented as fact. This tool labels the source of every number it uses, and says plainly when a school has published nothing.':
    '<strong>Un\'avvertenza che conta per i master.</strong> La maggior parte dei programmi europei non pubblica alcuna media dei test degli ammessi. I numeri che girano sui siti delle società di consulenza sono in gran parte stime presentate come fatti. Questo strumento indica la fonte di ogni numero che usa, e dice chiaramente quando una scuola non ha pubblicato nulla.',
  '<b class="rubric-in">Elsewhere</b><a href="index.html">Back to the front page</a> · <a href="it.html">IT &amp; Computing</a>':
    '<b class="rubric-in">Altrove</b><a href="index.html">Torna alla prima pagina</a> · <a href="it.html">Informatica</a>',

  /* Computing track page */
  'Pre-experience master’s · UK, Europe and the US': 'Master per neolaureati · Regno Unito, Europa e Stati Uniti',
  'Which computing <em>master’s</em>?': 'Quale <em>master</em> in informatica?',
  'Twenty-six programmes across the UK, Switzerland, the Netherlands, Germany, Sweden and the US, scored against the entry rules each one publishes.':
    'Ventisei programmi tra Regno Unito, Svizzera, Paesi Bassi, Germania, Svezia e Stati Uniti, valutati sulle regole d\'ingresso pubblicate da ognuno.',
  'Dense, syntax-highlighted source code filling a monitor.': 'Codice sorgente fitto, con la sintassi colorata, che riempie un monitor.',
  'Choose a track': 'Scegli un percorso',
  'Two people reading source code on a large wall-mounted display.': 'Due persone che leggono codice sorgente su un grande schermo a parete.',
  'MSc Computer Science, Advanced Computing, Informatics. The most prerequisite-driven track — most of these audit your transcript for named modules before anyone reads the rest of the file.':
    'MSc Computer Science, Advanced Computing, Informatics. Il percorso più guidato dai prerequisiti: la maggior parte controlla il tuo libretto esame per esame prima che qualcuno legga il resto.',
  'A laptop showing data dashboards, with printed charts on the desk beside it.': 'Un portatile con dashboard di dati, e grafici stampati sulla scrivania accanto.',
  'MSc Data Science, Artificial Intelligence, Machine Learning. Selects on mathematics far more than the CS track does — linear algebra and probability get checked by name.':
    'MSc Data Science, Artificial Intelligence, Machine Learning. Seleziona sulla matematica molto più del percorso di informatica: algebra lineare e probabilità vengono controllate per nome.',
  'Hands typing beginner HTML and JavaScript on a laptop, a notebook open alongside.': 'Mani che scrivono HTML e JavaScript da principiante su un portatile, con un quaderno aperto accanto.',
  'Computing master’s built for graduates of other subjects — and at several of them, already holding a computing degree is what disqualifies you. A category that barely exists outside the UK.':
    'Master in informatica pensati per laureati in altre materie — e in diversi di questi, avere già una laurea in informatica è proprio ciò che ti esclude. Una categoria che quasi non esiste fuori dal Regno Unito.',
  '<strong>Why this one is built differently.</strong> The business calculators lean on admitted class profiles. Computing programmes do not publish those — but they do publish hard entry rules, and in the UK their real acceptance rates are obtainable under Freedom of Information. So this track leads with the rules and says plainly where every number came from. Where five years of applicants have reported their own outcomes, that is shown too, labelled as what it is: a self-selected sample, never an acceptance rate.':
    '<strong>Perché questo è costruito in modo diverso.</strong> I calcolatori business si basano sui profili delle classi ammesse. I programmi di informatica non li pubblicano, ma pubblicano requisiti d\'ingresso vincolanti, e nel Regno Unito i loro veri tassi di ammissione si possono ottenere con richieste Freedom of Information. Così questo percorso parte dalle regole e dice chiaramente da dove viene ogni numero. Dove cinque anni di candidati hanno riportato i propri esiti, sono mostrati anche quelli, etichettati per quello che sono: un campione autoselezionato, mai un tasso di ammissione.',
  '<b class="rubric-in">Elsewhere</b><a href="index.html">Back to the front page</a> · <a href="business.html">Business</a>':
    '<b class="rubric-in">Altrove</b><a href="index.html">Torna alla prima pagina</a> · <a href="business.html">Business</a>',

  /* Calculator pages */
  'Post-experience · MBA': 'Con esperienza · MBA',
  'How strong is your <em>application</em>?': 'Quanto è forte la tua <em>candidatura</em>?',
  'Scored on a published points-based model, against 30 schools on a shared scale plus 8 modelled individually.':
    'Valutata con un modello a punti già pubblicato, su 30 scuole con una scala comune più 8 modellate singolarmente.',
  'The base score on the published model, before any school’s own adjustments.': 'Il punteggio di base del modello pubblicato, prima delle correzioni di ogni scuola.',
  '<b class="rubric-in">Independent and unofficial</b>This calculator reimplements a points-based scoring model published by a third-party MBA admissions consultancy and reproduces its results. It is not affiliated with or endorsed by that firm. It estimates; it does not predict.':
    '<b class="rubric-in">Indipendente e non ufficiale</b>Questo calcolatore ricostruisce un modello a punti pubblicato da una società di consulenza per le ammissioni MBA e ne riproduce i risultati. Non è affiliato a quella società né da essa approvato. Stima; non prevede.',
  'Your answers on the track weighting — evenly weighted, before any school’s own emphasis.': 'Le tue risposte con i pesi del percorso — pesi uguali, prima delle priorità di ogni scuola.',
  '<b class="rubric-in">An original model</b>No published calculator exists for these programmes. The weights here are mine; the school facts are sourced and tagged individually, and the score thresholds are calibration rather than anything a school has published.':
    '<b class="rubric-in">Un modello originale</b>Per questi programmi non esiste un calcolatore pubblicato. I pesi sono miei; i dati sulle scuole hanno ciascuno la propria fonte, e le soglie di punteggio sono una calibrazione, non qualcosa che una scuola abbia pubblicato.',
  'Your answers on the track weighting — evenly weighted, before any programme’s own emphasis.': 'Le tue risposte con i pesi del percorso — pesi uguali, prima delle priorità di ogni programma.',
  '<b class="rubric-in">An original model</b>The entry rules are quoted from each programme and tagged with where they came from. The weights and the score thresholds are mine — no computing programme publishes a points requirement, and unlike the business schools none publishes an admitted-student profile to anchor one against either.':
    '<b class="rubric-in">Un modello originale</b>Le regole d\'ingresso sono citate da ogni programma con la loro fonte. I pesi e le soglie di punteggio sono miei: nessun programma di informatica pubblica un requisito in punti, e a differenza delle business school nessuno pubblica nemmeno un profilo degli ammessi su cui basarne uno.',
  'Do you clear the ': 'Rispetti i ',
  'rules': 'requisiti',
  'How strong is your ': 'Quanto è forte il tuo ',
  'profile': 'profilo',
  '?': '?',

  /* Groups of programmes the models name in their "not modelled" lists */
  'Georgia Tech OMSCS and other online master\'s': 'Georgia Tech OMSCS e altri master online',
  'RWTH Aachen, Saarland, DTU and Aalto computing master\'s': 'Master in informatica di RWTH Aachen, Saarland, DTU e Aalto',
  'The rest of the US computing master\'s': 'Gli altri master in informatica americani',

  /* ------------------------------------------------------ the questionnaire */

  'Steps': 'Passaggi',
  'Main questions answered': 'Domande principali con risposta',
  '{n} unanswered': '{n} senza risposta',
  'Score so far: {value}': 'Punteggio finora: {value}',
  '1 question is still unanswered.': '1 domanda è ancora senza risposta.',
  '{n} questions are still unanswered.': '{n} domande sono ancora senza risposta.',
  'You can see results now, but they will be less accurate.': 'Puoi vedere i risultati già ora, ma saranno meno precisi.',
  'Go to {n}. {title}': 'Vai a {n}. {title}',
  'Search employers…': 'Cerca un datore di lavoro…',
  'No match. Employers outside the published list score 0 here.': 'Nessun risultato. I datori di lavoro fuori dall\'elenco pubblicato qui valgono 0.',
  'See some examples': 'Vedi qualche esempio',
  'optional': 'facoltativo',
  'Clear this answer': 'Cancella questa risposta',
  'Part {n} of {total}': 'Parte {n} di {total}',
  '← Back': '← Indietro',
  'Reset': 'Azzera',
  ' answers': ' risposte',
  'Clear every answer and start over?': 'Cancellare tutte le risposte e ricominciare?',
  'Score': 'Punteggio',
  'See results →': 'Vedi i risultati →',
  'Next →': 'Avanti →',
  'You have answered very little so far.': 'Finora hai risposto a pochissimo.',
  'Some main questions are still unanswered.': 'Alcune domande principali sono ancora senza risposta.',
  'You have answered {pct}% of the main questions. A missing answer usually scores nothing, and an entry rule that depends on it cannot be checked — so treat these results as a rough first look.':
    'Hai risposto al {pct}% delle domande principali. Una risposta mancante di solito vale zero, e un requisito che dipende da quella non si può verificare: considera questi risultati una prima occhiata approssimativa.',
  '← Answer the rest': '← Rispondi al resto',
  'ECTS-weighted average of your exam marks (18–30):': 'Media ponderata sui CFU dei tuoi esami (18–30):',
  'Enter a value between 18 and 30 to see the two figures side by side.': 'Inserisci un valore tra 18 e 30 per vedere i due numeri affiancati.',
  'Projected degree mark before committee points:': 'Voto di laurea previsto prima dei punti della commissione:',
  'With typical discretionary points, plausibly up to': 'Con i consueti punti a discrezione, plausibilmente fino a',
  'Transcript-average GPA equivalent:': 'GPA equivalente alla media del libretto:',
  'These are two different measurements and only the second is comparable to a US published average. The 110 mark is not a transcript average: it starts from your weighted exam average and the graduation committee then adds discretionary points, so two identical transcripts can graduate several points apart. Do not compare 110 e lode against a figure like Duke\'s published 3.48. Bocconi states outright that it may recalculate your GPA from the transcript itself.':
    'Sono due misure diverse e solo la seconda è confrontabile con una media americana pubblicata. Il voto su 110 non è una media del libretto: parte dalla media ponderata degli esami e poi la commissione di laurea aggiunge punti a discrezione, quindi due libretti identici possono laurearsi a diversi punti di distanza. Non confrontare un 110 e lode con un numero come il 3.48 pubblicato da Duke. La Bocconi dichiara apertamente che può ricalcolare il tuo GPA direttamente dal libretto.',

  /* ------------------------------------------------ saved answers, footer */

  'Nothing saved.': 'Niente di salvato.',
  'One calculator has saved answers.': 'Un calcolatore ha risposte salvate.',
  '{n} calculators have saved answers.': '{n} calcolatori hanno risposte salvate.',
  'Clear everything': 'Cancella tutto',
  'Delete every saved answer, across all calculators?': 'Eliminare tutte le risposte salvate, in tutti i calcolatori?',
  'This cannot be undone.': 'Non si può annullare.',
  'Forget everything when I close this tab': 'Dimentica tutto quando chiudo questa scheda',
  'Picking up where you left off — your previous answers are filled in.': 'Riprendi da dove eri rimasto: le risposte precedenti sono già inserite.',
  'Start fresh': 'Ricomincia da zero',
  'Clear every saved answer, across all calculators?': 'Cancellare tutte le risposte salvate, in tutti i calcolatori?',
  'Keep them': 'Tienile',
  'Count my visit anonymously — which page and which country, never your answers': 'Conta la mia visita in forma anonima — quale pagina e quale paese, mai le mie risposte',

  /* ---------------------------------------------------------- ticker */

  'Average bar': 'Soglia media',
  'Price: the Competitive bar. Change: your margin against it, from your saved answers.': 'Prezzo: la soglia Competitivo. Variazione: il tuo margine rispetto a quella, dalle risposte salvate.',
  'Price: the Competitive bar each programme is scored against. Answer a calculator to see your margin.': 'Prezzo: la soglia Competitivo su cui viene valutato ogni programma. Rispondi a un calcolatore per vedere il tuo margine.',
  '{track} · bar {bar}': '{track} · soglia {bar}',
  '{n} out of 100': '{n} su 100',

  /* ---------------------------------------------------- verdicts, tiers */

  'Strong': 'Forte',
  'Competitive': 'Competitivo',
  'Possible': 'Possibile',
  'Stretch': 'Difficile',
  'Ineligible': 'Non ammissibile',
  'Between Stretch and Competitive': 'Tra Difficile e Competitivo',
  'Safe': 'Sicura',
  'Target': 'Obiettivo',
  'Dream': 'Sogno',
  'Ruled out': 'Esclusa',
  'at or above the Strong line': 'pari o sopra la soglia Forte',
  'Competitive, short of Strong': 'Competitivo, sotto Forte',
  'eligible, below Competitive': 'ammissibile, sotto Competitivo',
  'All': 'Tutti',
  'UK': 'Regno Unito',
  'Europe': 'Europa',
  'US': 'USA',
  'Canada': 'Canada',

  /* Where a programme is */
  'France': 'Francia',
  'France / Singapore': 'Francia / Singapore',
  'Europe (multi-campus)': 'Europa (più sedi)',
  'Italy': 'Italia',
  'Netherlands': 'Paesi Bassi',
  'Austria': 'Austria',
  'Denmark': 'Danimarca',
  'Portugal': 'Portogallo',
  'Spain': 'Spagna',
  'Switzerland': 'Svizzera',
  'USA': 'USA',
  'Sweden': 'Svezia',
  'Germany': 'Germania',

  /* Test policy */
  'required': 'obbligatorio',
  'conditional': 'condizionato',
  'none': 'nessuno',

  /* Where a fact came from */
  'school': 'scuola',
  'school, via summary': 'scuola, tramite sintesi',
  'third-party list': 'elenco di terzi',
  'programme': 'programma',
  'programme doc': 'documento del programma',
  'school doc': 'documento della scuola',
  'third-party': 'fonte terza',
  'applicants': 'candidati',
  'not published': 'non pubblicato',
  'unverified': 'non verificato',
  'calibration': 'calibrazione',
  'estimate': 'stima',

  /* ------------------------------------------------------- deadlines */

  'closes today': 'chiude oggi',
  'closes tomorrow': 'chiude domani',
  'in {n} days': 'tra {n} giorni',
  'in {n} weeks': 'tra {n} settimane',
  'then {round}, {date}': 'poi {round}, {date}',
  'This cycle’s listed deadlines have passed': 'Le scadenze indicate per questo ciclo sono passate',
  'Rolling admission — earlier is better': 'Ammissione a scorrimento: prima è meglio',
  'Official admissions page': 'Pagina ufficiale delle ammissioni',
  'Checked {date}': 'Verificato il {date}',
  'Checked {date} · may be out of date': 'Verificato il {date} · potrebbe non essere aggiornato',
  'Dates read {date} — confirm on the school’s own page.': 'Date lette il {date}: conferma sulla pagina della scuola.',
  'These deadlines are getting old.': 'Queste scadenze stanno invecchiando.',
  'They were last checked on {date} — {months} months ago. The developer should move their ass and update the dates. Until then, trust each school’s official page over the countdowns below.':
    'L\'ultima verifica è del {date}, {months} mesi fa. Lo sviluppatore dovrebbe muovere il culo e aggiornare le date. Nel frattempo, fidati della pagina ufficiale di ogni scuola più che dei conti alla rovescia qui sotto.',

  /* Round names, from data/deadlines.js */
  'Round 1': 'Turno 1',
  'Round 1b': 'Turno 1b',
  'Round 2': 'Turno 2',
  'Round 3': 'Turno 3',
  'Round 4': 'Turno 4',
  'Round 5': 'Turno 5',
  'Round I': 'Turno I',
  'Round II': 'Turno II',
  'Round III': 'Turno III',
  'Round IV': 'Turno IV',
  'Stage 1': 'Fase 1',
  'Stage 2': 'Fase 2',
  'Stage 3': 'Fase 3',
  'Stage 4': 'Fase 4',
  'Early decision': 'Decisione anticipata',
  'Early action': 'Early action',
  'Final round': 'Turno finale',
  'Next deadline': 'Prossima scadenza',
  'Applications close': 'Chiusura candidature',
  'Early deadline': 'Scadenza anticipata',
  'Final deadline': 'Scadenza finale',
  'Deadline': 'Scadenza',
  'Funding deadline': 'Scadenza per i finanziamenti',
  'Application window closes': 'Chiusura della finestra di candidatura',
  'First deadline': 'Prima scadenza',
  'Second deadline': 'Seconda scadenza',
  'Non-EU/EFTA deadline': 'Scadenza extra-UE/AELS',

  /* ---------------------------------------------- filters and what-if */

  'Filter the programmes below': 'Filtra i programmi qui sotto',
  'Nothing in this table matches the filter.': 'Niente in questa tabella corrisponde al filtro.',
  'Showing {shown} of {total}': '{shown} su {total}',
  '{n} programmes': '{n} programmi',
  'What if': 'E se',
  'What if…': 'E se…',
  'Change your answers and watch every programme below re-score — then compare “me now” with “me after”. Nothing is saved unless you keep it.':
    'Cambia le tue risposte e guarda ogni programma qui sotto ricalcolarsi, poi confronta “io adesso” con “io dopo”. Non si salva niente finché non decidi di tenerlo.',
  'Change': 'Cambia',
  'Back to my answers': 'Torna alle mie risposte',
  'Keep these answers': 'Tieni queste risposte',
  '{answer} — your answer': '{answer} — la tua risposta',
  '{n} programme moves up a tier': '{n} programma sale di fascia',
  '{n} programmes move up a tier': '{n} programmi salgono di fascia',
  '{n} down': '{n} scendono',
  'no programme changes tier.': 'nessun programma cambia fascia.',
  'Me now': 'Io adesso',
  'Me after': 'Io dopo',
  'One programme changes verdict': 'Un programma cambia verdetto',
  '{n} programmes change verdict': '{n} programmi cambiano verdetto',
  'No verdict changes — the scores still move': 'Nessun verdetto cambia, ma i punteggi si muovono',
  'and {n} more': 'e altri {n}',
  'Not answered': 'Nessuna risposta',
  'No score yet': 'Ancora nessun punteggio',
  'No test submitted': 'Nessun test presentato',
  'GRE quant {n}': 'GRE quant {n}',
  'Test score': 'Punteggio del test',
  'Base score': 'Punteggio di base',
  'Profile score': 'Punteggio del profilo',

  /* ---------------------------------------------------- battle plan */

  'Battle plan · {date}': 'Piano di battaglia · {date}',
  '({shown} of {total})': '({shown} su {total})',
  'Programme': 'Programma',
  'Region': 'Area',
  'Verdict': 'Verdetto',
  'Rolling': 'A scorrimento',
  'Passed this cycle': 'Passata per questo ciclo',
  'See school’s page': 'Vedi la pagina della scuola',
  'Your file': 'Il tuo profilo',
  'Strengths': 'Punti di forza',
  'Gaps worth closing': 'Lacune da colmare',
  'Nothing stands out either way yet.': 'Per ora niente spicca, né in positivo né in negativo.',
  'Submit {name} by {date} — {round}, {when}': 'Invia {name} entro il {date} — {round}, {when}',
  'Checklist': 'Cose da fare',
  'Confirm every date on the school’s own admissions page — the deadlines here were read on {date} and schools do move them.':
    'Conferma ogni data sulla pagina ammissioni della scuola: le scadenze qui sono state lette il {date} e le scuole a volte le spostano.',
  'An estimate from a points model, not a prediction. Verdict thresholds are the model’s own calibration; admissions committees decide holistically. Made from answers stored only in your browser.':
    'Una stima da un modello a punti, non una previsione. Le soglie dei verdetti sono una calibrazione del modello; le commissioni decidono guardando al profilo nel suo insieme. Fatto con risposte salvate solo nel tuo browser.',
  'Battle plan (PDF)': 'Piano di battaglia (PDF)',
  'A two-page summary: your list by tier, your strengths and gaps, and a dated checklist. Opens the print dialog — choose “Save as PDF”.':
    'Un riepilogo di due pagine: la tua lista per fascia, punti di forza e lacune, e le cose da fare con le date. Apre la finestra di stampa: scegli "Salva come PDF".',
  'Answered': 'Risposte date',
  'Answer the questions you skipped — a missing answer scores nothing.': 'Rispondi alle domande che hai saltato: una risposta mancante vale zero.',
  '{pts} points': '{pts} punti',
  '{option} would add +{gain}': '{option} aggiungerebbe +{gain}',
  '{group} → {option} (+{gain} on the base score)': '{group} → {option} (+{gain} sul punteggio di base)',
  '{group} → {option} (+{gain} on the track weighting)': '{group} → {option} (+{gain} con i pesi del percorso)',
  '{pct}% of its {weight} points': '{pct}% dei suoi {weight} punti',
  '{missing} of {weight} points not yet earned': '{missing} punti su {weight} ancora da guadagnare',
  'Ruled out at {school}: {rule}.': 'Escluso da {school}: {rule}.',
  'Ruled out by a rule': 'Esclusi da una regola',
  'Decide on a test: it only helps above roughly the {pct} percentile — about {gmat} GMAT or {focus} Focus.':
    'Decidi sul test: aiuta solo sopra circa il {pct} percentile — circa {gmat} al GMAT o {focus} al Focus.',

  /* ---------------------------------------------------- results: shared */

  'Your results · MBA': 'I tuoi risultati · MBA',
  'Your results · {track}': 'I tuoi risultati · {track}',
  'Competitive or better': 'Competitivo o meglio',
  '← Edit answers': '← Modifica le risposte',
  'Print the page': 'Stampa la pagina',
  'Try another track': 'Prova un altro percorso',
  'Total': 'Totale',
  'Nothing answered yet.': 'Ancora nessuna risposta.',
  'These changes together would get you there:': 'Questi cambiamenti insieme ti porterebbero lì:',
  'Deliberately not modelled here': 'Volutamente non modellati qui',
  'Ruled out by a published requirement': 'Esclusi da un requisito pubblicato',
  'Weighting applied here': 'Pesi applicati qui',
  'Score threshold used here': 'Soglia di punteggio usata qui',
  '{c} competitive, {s} strong': '{c} competitivo, {s} forte',
  '{pct}% of a possible {weight}': '{pct}% di un massimo di {weight}',
  '({n} for your timing)': '({n} per i tuoi tempi)',
  'On score alone you would be {band} here — {score} against a threshold of {threshold}. The rule above is what blocks you, not your profile.':
    'Con il solo punteggio qui saresti {band}: {score} contro una soglia di {threshold}. A bloccarti è la regola qui sopra, non il tuo profilo.',
  'Worth {n} points to you against the track average — this school leans on the parts of your file that are strong.':
    'Ti vale {n} punti rispetto alla media del percorso: questa scuola punta sulle parti forti del tuo profilo.',
  'Worth {n} points to you against the track average — this programme leans on the parts of your file that are strong.':
    'Ti vale {n} punti rispetto alla media del percorso: questo programma punta sulle parti forti del tuo profilo.',
  'Costs you {n} points against the track average — it leans on the parts of your file that are thin.':
    'Ti costa {n} punti rispetto alla media del percorso: punta sulle parti deboli del tuo profilo.',
  'Every programme here is ruled out by a published rule.': 'Ogni programma qui ti esclude con una regola pubblicata.',
  'Not yet competitive at any of the {total} eligible.': 'Non ancora competitivo in nessuno dei {total} per cui sei ammissibile.',
  'Not yet competitive at any of the {total}.': 'Non ancora competitivo in nessuno dei {total}.',
  'Competitive or better at {n} of {total} eligible.': 'Competitivo o meglio in {n} dei {total} per cui sei ammissibile.',
  'Competitive or better at {n} of {total}.': 'Competitivo o meglio in {n} su {total}.',
  'Profile score {score} — Competitive or better at {n} of {total} eligible': 'Punteggio del profilo {score} — Competitivo o meglio in {n} su {total} ammissibili',
  'none so far — some answers missing': 'nessuno finora — mancano alcune risposte',

  /* ---------------------------------------------------- results: MBA */

  'model as published': 'modello così come pubblicato',
  'corrected model': 'modello corretto',
  'Competitive or better at {n} of {total} schools.': 'Competitivo o meglio in {n} scuole su {total}.',
  'Not yet competitive at any of the {total} schools.': 'Non ancora competitivo in nessuna delle {total} scuole.',
  'A base score of {score} on the {model}, against {total} schools on the shared scale.': 'Un punteggio di base di {score} sul {model}, rispetto a {total} scuole sulla scala comune.',
  '{N} is at or above the point requirement — the scholarship range.': '{N} è pari o sopra il requisito in punti: la fascia delle borse di studio.',
  '{N} are at or above the point requirement — the scholarship range.': '{N} sono pari o sopra il requisito in punti: la fascia delle borse di studio.',
  'None is yet in the scholarship range.': 'Nessuna è ancora nella fascia delle borse di studio.',
  'Your score': 'Il tuo punteggio',
  'published model': 'modello pubblicato',
  'of {total} on the shared scale': 'su {total} sulla scala comune',
  'Scholarship range': 'Fascia borse di studio',
  'schools at or above their threshold': 'scuole pari o sopra la loro soglia',
  'As published': 'Come pubblicato',
  'Corrected': 'Corretto',
  'The two models disagree on your profile — {a} vs {b} base, and the school-level scores differ too.':
    'I due modelli non sono d\'accordo sul tuo profilo: {a} contro {b} di base, e anche i punteggi per scuola sono diversi.',
  'Both models agree on your profile. The corrected model only changes results for scores the published model mishandles.':
    'I due modelli concordano sul tuo profilo. Il modello corretto cambia i risultati solo per i punteggi che il modello pubblicato gestisce male.',
  'You are seeing the model exactly as published, including two faulty score tests: the high-score bonus fires only at exactly 750 or 780, and the low-score penalty only at 550, 580, 600, 630, 650 or 680. A 760 gets no bonus and a 690 no penalty. Switch to Corrected to score those as ranges.':
    'Stai vedendo il modello esattamente come pubblicato, compresi due controlli sul punteggio sbagliati: il bonus per punteggio alto scatta solo con esattamente 750 o 780, e la penalità per punteggio basso solo con 550, 580, 600, 630, 650 o 680. Un 760 non prende il bonus e un 690 non prende la penalità. Passa a Corretto per valutarli come intervalli.',
  'Schools modelled individually': 'Scuole modellate singolarmente',
  'Each recalculates from your base score using its own adjustments and thresholds.': 'Ognuna ricalcola dal tuo punteggio di base con le proprie correzioni e soglie.',
  '{region} · Stretch {stretch} · Competitive {competitive} · Strong {strong}': '{region} · Difficile {stretch} · Competitivo {competitive} · Forte {strong}',
  'Schools on the shared scale': 'Scuole sulla scala comune',
  'Your base score against each school\'s point requirement. The gap decides the verdict.': 'Il tuo punteggio di base rispetto al requisito in punti di ogni scuola. La distanza decide il verdetto.',
  '{region} · needs {points} points': '{region} · servono {points} punti',
  'Where your {score} points came from': 'Da dove vengono i tuoi {score} punti',
  'The verdict bands come from the model: roughly 50% odds at "Competitive", roughly 10% at "Stretch", roughly 75–80% at "Strong". Those are the model\'s own stated figures, not measured outcomes.':
    'Le fasce dei verdetti vengono dal modello: circa il 50% di probabilità a "Competitivo", circa il 10% a "Difficile", circa il 75–80% a "Forte". Sono i numeri dichiarati dal modello, non esiti misurati.',
  'Base score {score} — Competitive or better at {n} of {total} schools on the shared scale': 'Punteggio di base {score} — Competitivo o meglio in {n} scuole su {total} sulla scala comune',
  '{gap} vs {points}': '{gap} contro {points}',
  'A base score of {score}.': 'Un punteggio di base di {score}.',
  '{n} school is at or above the point requirement.': '{n} scuola è pari o sopra il requisito in punti.',
  '{n} schools are at or above the point requirement.': '{n} scuole sono pari o sopra il requisito in punti.',
  'You are {needed} points below Competitive here, which starts at {target}.': 'Qui sei {needed} punti sotto Competitivo, che parte da {target}.',
  'Nothing left to change in the model — the remaining factors are all fixed history.': 'Nel modello non resta niente da cambiare: i fattori rimasti sono tutti storia già scritta.',
  'The biggest gains still available — not enough on their own:': 'I guadagni più grandi ancora possibili, da soli non bastano:',
  'Everything actionable adds up to +{total}, leaving you {short} short. The rest of this model is fixed history.':
    'Tutto ciò su cui puoi agire fa +{total}, e ti lascia a {short} punti di distanza. Il resto di questo modello è storia già scritta.',
  'retake and reach {target}': 'ripeti il test e arriva a {target}',

  /* ---------------------------------------------------- results: computing */

  'Degree class': 'Classe di laurea',
  'Undergraduate institution': 'Università della triennale',
  'Computing foundations': 'Basi di informatica',
  'Mathematics': 'Matematica',
  'What you have built': 'Cosa hai costruito',
  'Professional experience': 'Esperienza professionale',
  'Statement and motivation': 'Lettera e motivazione',
  'References': 'Referenze',
  'Your answers score {score} on the track weighting, and {lo}–{hi} once each programme reads the file its own way.':
    'Le tue risposte valgono {score} con i pesi del percorso, e {lo}–{hi} quando ogni programma legge il profilo a modo suo.',
  'Your answers score {score} on the track weighting.': 'Le tue risposte valgono {score} con i pesi del percorso.',
  'track weighting': 'pesi del percorso',
  'Under each programme’s own weighting': 'Con i pesi di ogni programma',
  'same answers, read differently': 'stesse risposte, lette in modo diverso',
  'of {total} modelled': 'su {total} modellati',
  'Ruled out by a published rule': 'Esclusi da una regola pubblicata',
  'a rule, not a judgement': 'una regola, non un giudizio',
  'nothing blocks you': 'niente ti blocca',
  'Read the gates before the score. Computing programmes publish hard entry rules — named modules, credit floors, degree classes — and enforce them. Being ruled out is not the same as scoring badly, and a strong profile does not buy a missing prerequisite. Where you are blocked, the score is still shown so you can see whether the prerequisite is worth going and getting.':
    'Leggi i requisiti prima del punteggio. I programmi di informatica pubblicano regole d\'ingresso vincolanti — esami precisi, minimi di crediti, classi di laurea — e le applicano. Essere esclusi non è come avere un punteggio basso, e un profilo forte non compra un prerequisito che manca. Dove sei bloccato il punteggio viene comunque mostrato, così puoi capire se vale la pena andarsi a prendere quel prerequisito.',
  'No published rule blocks you on the answers so far': 'Con le risposte date finora nessuna regola pubblicata ti blocca',
  'You meet the published requirements': 'Rispetti i requisiti pubblicati',
  'Every modelled programme on this track has a published rule you do not currently meet. The list below says which rule, for each one.':
    'Ogni programma modellato in questo percorso ha una regola pubblicata che al momento non rispetti. L\'elenco qui sotto dice quale, per ognuno.',
  'These are not "low chance" — they are rules the programme publishes and applies. Some are permanent, like a degree class. Others are a module you could go and take before the next cycle, which is worth knowing separately.':
    'Queste non sono "poche possibilità": sono regole che il programma pubblica e applica. Alcune sono definitive, come la classe di laurea. Altre sono un esame che potresti andare a fare prima del prossimo ciclo, ed è utile saperlo a parte.',
  'Not modelled': 'Non modellato',
  'The score is a ranking device, not a probability. No computing programme publishes a points requirement, and unlike the business calculators there is no admitted-student profile to anchor the thresholds against either — so every threshold here is calibration. What is not calibration is the rules: those are quoted, and each one says where it came from.':
    'Il punteggio serve a fare una classifica, non è una probabilità. Nessun programma di informatica pubblica un requisito in punti, e a differenza dei calcolatori business non c\'è nemmeno un profilo degli ammessi su cui ancorare le soglie: quindi ogni soglia qui è una calibrazione. Le regole invece no: sono citate, e ognuna dice da dove viene.',
  'A profile score of {score} on the track weighting, before any programme’s own emphasis.': 'Un punteggio del profilo di {score} con i pesi del percorso, prima delle priorità di ogni programma.',
  'The same answers are worth different amounts at different programmes. Each one below is read the way its published process suggests it is actually read.':
    'Le stesse risposte valgono in modo diverso in programmi diversi. Ognuno qui sotto è letto nel modo in cui la sua procedura pubblicata fa pensare che venga letto davvero.',
  'Which programme gets which reading is my judgement of its published process, not something any of them state in these terms.':
    'Quale lettura spetti a quale programma è un mio giudizio sulla sua procedura pubblicata, non qualcosa che uno di loro dichiari in questi termini.',
  'How this programme reads a file · {profile}': 'Come questo programma legge un profilo · {profile}',
  'You are {n} points short of the Competitive threshold used here, which is {threshold}.': 'Ti mancano {n} punti alla soglia Competitivo usata qui, che è {threshold}.',
  'On score you clear the threshold used here by {n} points.': 'Con il punteggio superi la soglia usata qui di {n} punti.',
  'The rule above is what blocks you. Closing the points gap will not change that — but if the rule is a module rather than a degree class, it is worth reading the two together.':
    'A bloccarti è la regola qui sopra. Colmare la distanza in punti non lo cambierà — ma se la regola riguarda un esame e non la classe di laurea, vale la pena leggere le due cose insieme.',
  'Applying earlier in the cycle would be worth {n} points here.': 'Candidarti prima nel ciclo qui varrebbe {n} punti.',
  'Even together these do not close the gap. This programme is a genuine stretch on the profile as it stands.': 'Nemmeno insieme questi colmano la distanza. Con il profilo così com\'è, questo programma è davvero difficile.',
  'Nothing in the answers you gave can be changed to close this gap — what is short here is fixed by your degree.': 'Niente nelle risposte che hai dato si può cambiare per colmare questa distanza: quello che manca qui dipende dalla tua laurea.',
  'What applicants reported': 'Cosa hanno riportato i candidati',
  'No applicant has posted a computing master’s result for {institution} since January 2021.': 'Dal gennaio 2021 nessun candidato ha pubblicato un esito di master in informatica per {institution}.',
  '{n} result posted for computing master’s at {institution}, {window}': '{n} esito pubblicato per master in informatica a {institution}, {window}',
  '{n} results posted for computing master’s at {institution}, {window}': '{n} esiti pubblicati per master in informatica a {institution}, {window}',
  '{acc} accepted, {rej} rejected': '{acc} ammessi, {rej} respinti',
  '{n} waitlisted': '{n} in lista d\'attesa',
  'These cover every computing master’s at this institution, not this course on its own — applicants file under free-text course names and there are too few reports to separate them.':
    'Riguardano tutti i master in informatica di questa università, non solo questo corso: i candidati scrivono il nome del corso a testo libero e i resoconti sono troppo pochi per separarli.',
  'Decisions reported between {earliest} and {latest}, with the middle of them around {median}.': 'Esiti riportati tra il {earliest} e il {latest}, con il valore centrale intorno al {median}.',
  'Reported grade average among those accepted: median {median} (middle half {p25}–{p75}, from {n} reports on a four-point scale)':
    'Media dei voti riportata dagli ammessi: mediana {median} (metà centrale {p25}–{p75}, da {n} resoconti su scala di quattro punti)',
  '; among those rejected, {median}': '; tra i respinti, {median}',
  'Too few reports to say anything about the grades of people admitted here, so nothing is claimed about them.': 'Troppo pochi resoconti per dire qualcosa sui voti degli ammessi qui, quindi non si afferma niente.',
  'Pooled across comparable programmes ({n} reports), applicants who were accepted reported a median of {acc} and those rejected {rej}. That is a group pattern, not this programme’s bar.':
    'Mettendo insieme programmi simili ({n} resoconti), gli ammessi hanno riportato una mediana di {acc} e i respinti di {rej}. È una tendenza di gruppo, non la soglia di questo programma.',
  'This is a self-selected sample of people who chose to post, not the applicant pool. It is not an acceptance rate and must not be read as one.':
    'È un campione autoselezionato di persone che hanno scelto di pubblicare, non l\'insieme dei candidati. Non è un tasso di ammissione e non va letto come tale.',
  '{n} published rule': '{n} regola pubblicata',
  '{n} published rules': '{n} regole pubblicate',
  'What this programme actually publishes': 'Cosa pubblica davvero questo programma',
  'How the headline score was built': 'Come è stato costruito il punteggio principale',
  '{N} programme is ruled out by a published rule.': '{N} programma ti esclude con una regola pubblicata.',
  '{N} programmes are ruled out by a published rule.': '{N} programmi ti escludono con una regola pubblicata.',
  'No published rule blocks you on the answers so far.': 'Con le risposte date finora nessuna regola pubblicata ti blocca.',
  'No published rule blocks you.': 'Nessuna regola pubblicata ti blocca.',
  'your degree is not computing, but your computing credit may satisfy it': 'la tua laurea non è in informatica, ma i tuoi crediti di informatica potrebbero bastare',
  'your degree is not computing, but this much computing credit may still exclude you': 'la tua laurea non è in informatica, ma così tanti crediti di informatica potrebbero comunque escluderti',
  'you have {n} of the {required} required': 'ne hai {n} dei {required} richiesti',

  /* ---------------------------------------------------- results: master's */

  'Academic record': 'Percorso accademico',
  'Quantitative preparation': 'Preparazione quantitativa',
  'Internships': 'Stage',
  'Leadership': 'Leadership',
  'International exposure': 'Esperienza internazionale',
  'Essays and motivation': 'Essay e motivazione',
  'Full-time experience': 'Esperienza a tempo pieno',
  'Languages': 'Lingue',
  'Requires a test score, and you are not submitting one': 'Richiede un punteggio al test, e tu non lo presenti',
  'May require a test score depending on your degree': 'Può richiedere un punteggio al test in base alla tua laurea',
  'your score converts to about {gmat}': 'il tuo punteggio equivale a circa {gmat}',
  'Your answers score {score} on the {track} weighting, and {lo}–{hi} once each school applies its own emphasis.':
    'Le tue risposte valgono {score} con i pesi del percorso {track}, e {lo}–{hi} quando ogni scuola applica le proprie priorità.',
  '{track} weighting, before any school’s own emphasis': 'pesi del percorso {track}, prima delle priorità di ogni scuola',
  'Under each school’s own weighting': 'Con i pesi di ogni scuola',
  'the same answers, reweighted': 'le stesse risposte, ripesate',
  'of {total} eligible programmes': 'su {total} programmi ammissibili',
  'Ruled out by a hard rule': 'Esclusi da un requisito vincolante',
  'see below': 'vedi sotto',
  'You are not submitting a test score, so the test weight has been removed and the other factors rescaled — this is neutral, not a penalty. Schools that require a test are listed as ineligible rather than scored low.':
    'Non presenti un punteggio al test, quindi il peso del test è stato tolto e gli altri fattori riscalati: è neutro, non una penalità. Le scuole che richiedono un test risultano non ammissibili invece che con un punteggio basso.',
  'Your score sits at roughly the {pct} percentile, which converts to about {gmat} on the GMAT 10th Edition scale. Cross-scale conversion is approximate — GMAT Focus and the GMAT 10th Edition are different instruments, and many published "averages" do not say which one they mean.':
    'Il tuo punteggio è circa al {pct} percentile, che equivale a circa {gmat} sulla scala GMAT 10th Edition. La conversione tra scale è approssimativa: GMAT Focus e GMAT 10th Edition sono strumenti diversi, e molte "medie" pubblicate non dicono a quale si riferiscono.',
  'Programmes you are eligible for': 'Programmi per cui sei ammissibile',
  '{n} of {total}': '{n} su {total}',
  'Every programme in this track is blocked by a hard rule. See below.': 'Ogni programma di questo percorso è bloccato da un requisito vincolante. Vedi sotto.',
  'These are not "low chance" — they are rules that a stronger profile cannot compensate for. An experience cap or a missing ECTS prerequisite disqualifies regardless of your test score. Each one still shows where your profile would land on score alone, so you can see whether the blocking requirement is worth going and satisfying.':
    'Queste non sono "poche possibilità": sono regole che un profilo più forte non può compensare. Un tetto all\'esperienza o un prerequisito in ECTS mancante ti esclude qualunque sia il tuo punteggio al test. Ognuna mostra comunque dove arriverebbe il tuo profilo con il solo punteggio, così puoi capire se vale la pena soddisfare il requisito che ti blocca.',
  'How your {score} was calculated': 'Come è stato calcolato il tuo {score}',
  'Read the score as a ranking device, not a probability. The thresholds are my calibration — no school publishes a points requirement, and only four programmes in this entire dataset publish a real acceptance rate (LSE Management, LSE Finance & Economics via FOI, Princeton, and WU Vienna). Everything else marketed as an "acceptance rate" for these programmes is an estimate.':
    'Leggi il punteggio come uno strumento di classifica, non come una probabilità. Le soglie sono una mia calibrazione: nessuna scuola pubblica un requisito in punti, e in tutto questo insieme di dati solo quattro programmi pubblicano un vero tasso di ammissione (LSE Management, LSE Finance & Economics tramite FOI, Princeton e WU Vienna). Tutto il resto spacciato per "tasso di ammissione" per questi programmi è una stima.',
  'A profile score of {score} on the {track} weighting, before any school’s own emphasis.': 'Un punteggio del profilo di {score} con i pesi del percorso {track}, prima delle priorità di ogni scuola.',
  'The same answers are worth different amounts at different schools': 'Le stesse risposte valgono in modo diverso in scuole diverse',
  'A track weighting says what a {track} applicant is generally judged on. It does not say what any one school does with the file, and that difference is large. Bocconi runs no interview and takes no reference letters on the standard route, names GPA as a compulsory pillar, may recalculate that GPA from your transcript itself, and applies a test floor to everyone — grades and the test are close to the whole ranking there. HEC and IE run essays, recorded answers and live interviews instead. So every programme below is scored under its own weighting.':
    'I pesi di un percorso dicono su cosa viene giudicato in generale un candidato in {track}. Non dicono cosa fa ogni singola scuola con il profilo, e la differenza è grande. Nella procedura standard la Bocconi non fa colloqui e non prende lettere di referenza, indica il GPA come pilastro obbligatorio, può ricalcolarlo dal tuo libretto e applica un minimo al test a tutti: lì voti e test sono quasi tutta la graduatoria. HEC e IE invece usano essay, risposte registrate e colloqui dal vivo. Per questo ogni programma qui sotto è valutato con i propri pesi.',
  'For your answers that is a {spread}-point swing. Your profile suits {best} — {bestProfile}, {bestScore} — and works against you at {worst} — {worstProfile}, {worstScore}. Choosing where to apply is doing more work here than any single thing you could change about the application.':
    'Per le tue risposte è un\'oscillazione di {spread} punti. Il tuo profilo si adatta a {best} — {bestProfile}, {bestScore} — e ti gioca contro a {worst} — {worstProfile}, {worstScore}. Qui scegliere dove candidarti conta più di qualsiasi singola cosa che potresti cambiare nella candidatura.',
  '{n} programme:': '{n} programma:',
  '{n} programmes:': '{n} programmi:',
  'In the bars above and on every programme below: a green bar with a + means this school weighs that factor more heavily than the track average, and a grey bar with a − means it weighs it less. The number is the weight out of 100.':
    'Nelle barre qui sopra e in ogni programma qui sotto: una barra verde con il + vuol dire che questa scuola pesa quel fattore più della media del percorso, una barra grigia con il − che lo pesa meno. Il numero è il peso su 100.',
  'Which profile a school belongs to is my reading of its published process, not something any school states as a formula. The multipliers rescale back to the same hundred points, so a profile moves emphasis around rather than handing anyone free marks — an evenly balanced applicant scores about the same everywhere, and only a lopsided one moves much.':
    'A quale profilo appartenga una scuola è una mia lettura della sua procedura pubblicata, non una formula che una scuola dichiari. I moltiplicatori vengono riscalati sugli stessi cento punti, quindi un profilo sposta le priorità invece di regalare punti: un candidato equilibrato prende più o meno lo stesso punteggio ovunque, e solo uno sbilanciato si sposta molto.',
  'What this school weighs · {profile}': 'Cosa pesa questa scuola · {profile}',
  'You are {n} points short of this programme’s Competitive threshold of {threshold}.': 'Ti mancano {n} punti alla soglia Competitivo di questo programma, che è {threshold}.',
  'You are {n} points clear of the Competitive threshold of {threshold}.': 'Sei {n} punti sopra la soglia Competitivo di {threshold}.',
  'Apply in the first round instead': 'Candidati invece al primo turno',
  'Timing does not matter here': 'Qui il momento non conta',
  'Sit a test scoring about {gmat} (GMAT) / {focus} (Focus)': 'Fai un test e prendi circa {gmat} (GMAT) / {focus} (Focus)',
  'reaches {n}': 'arriva a {n}',
  'Roughly the {pct} percentile. That alone would close the gap.': 'Circa il {pct} percentile. Basterebbe da solo a colmare la distanza.',
  'A test score alone will not close this gap': 'Un punteggio al test da solo non colmerà questa distanza',
  'Even a perfect score leaves you short here — the other factors have to move.': 'Anche un punteggio perfetto qui non basta: devono muoversi gli altri fattori.',
  'You need a test here, but only a modest one': 'Qui ti serve un test, ma basta un punteggio modesto',
  'about {n}': 'circa {n}',
  'Your profile is {n} points clear of the threshold without a score, so anything from roughly the {pct} percentile up — about {gmat} GMAT or {focus} Focus — keeps you at or above {threshold}. A weaker score than that would pull you back under it.':
    'Senza punteggio il tuo profilo è {n} punti sopra la soglia, quindi qualsiasi risultato da circa il {pct} percentile in su — circa {gmat} al GMAT o {focus} al Focus — ti tiene pari o sopra {threshold}. Un punteggio più basso ti riporterebbe sotto.',
  'You clear this without a test, and it does not require one': 'Qui passi senza test, e non è richiesto',
  'Submitting anyway only helps above roughly the {pct} percentile — about {gmat} GMAT or {focus} Focus. Below that it would lower your score for no reason.':
    'Presentarlo comunque aiuta solo sopra circa il {pct} percentile — circa {gmat} al GMAT o {focus} al Focus. Sotto, abbasserebbe il tuo punteggio senza motivo.',
  'The biggest available gains — not enough on their own, but they close most of it:': 'I guadagni più grandi disponibili: da soli non bastano, ma colmano gran parte della distanza:',
  '{region} · test: {policy} · rounds: {regime}': '{region} · test: {policy} · turni: {regime}',
  'What this school actually publishes': 'Cosa pubblica davvero questa scuola',
  'Track weighting, unchanged': 'Pesi del percorso, invariati',
  'Estimated admitted GMAT': 'GMAT stimato degli ammessi',
  'median ~{median}, about 68% between {lo} and {hi} (±1 SD {sd})': 'mediana ~{median}, circa il 68% tra {lo} e {hi} (±1 DS {sd})',
  'Estimated from {from}.': 'Stimato da {from}.',
  'The school publishes the anchor; the spread and any scale conversion are mine.': 'La scuola pubblica il punto di riferimento; la dispersione e l\'eventuale conversione di scala sono mie.',
  'The school publishes no admitted average — this whole figure is inferred.': 'La scuola non pubblica alcuna media degli ammessi: tutto questo dato è dedotto.',
  'above the estimated top third': 'sopra il terzo superiore stimato',
  'above the estimated median': 'sopra la mediana stimata',
  'around the estimated median': 'intorno alla mediana stimata',
  'below the estimated median but inside the estimated middle 68%': 'sotto la mediana stimata ma dentro il 68% centrale stimato',
  'below the estimated middle 68%': 'sotto il 68% centrale stimato',
  'Your ~{gmat} sits {where} ({z} SD).': 'Il tuo ~{gmat} è {where} ({z} DS).',
  '{N} programme is ruled out by a published requirement.': '{N} programma ti esclude con un requisito pubblicato.',
  '{N} programmes are ruled out by a published requirement.': '{N} programmi ti escludono con un requisito pubblicato.',
  'No hard rule rules you out on the answers so far.': 'Con le risposte date finora nessun requisito vincolante ti esclude.',
  'No hard rule rules you out.': 'Nessun requisito vincolante ti esclude.'
});
