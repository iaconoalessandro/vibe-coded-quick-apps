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

  'Admetia — the way in to MBA and master’s admissions': 'Admetia — the way in: le tue chance per MBA e master',
  'Business tracks — Admetia': 'Percorsi business — Admetia',
  'IT & Computing — Admetia': 'Informatica — Admetia',
  'MBA Chances — Admetia': 'Chance MBA — Admetia',
  'Master\'s Chances — Admetia': 'Chance per i master — Admetia',
  'Computing Chances — Admetia': 'Chance in informatica — Admetia',
  '{track} — Admetia': '{track} — Admetia',
  '{track} master’s — Admetia': 'Master in {track} — Admetia',

  'Free, private admissions calculators for MBA, business master\'s and computing master\'s programmes in the UK, Europe, the US and Asia. Your answers never leave your browser. In English and Italian.':
    'Calcolatori di ammissione gratuiti e privati per MBA, master in business e master in informatica nel Regno Unito, in Europa, negli Stati Uniti e in Asia. Le tue risposte non lasciano mai il browser. In inglese e in italiano.',
  'Score your profile against MBA programmes and master\'s in Finance, Management and Marketing across the UK, Europe, the US and Asia. Free, private, in English and Italian.':
    'Valuta il tuo profilo rispetto ai programmi MBA e ai master in finanza, management e marketing nel Regno Unito, in Europa, negli Stati Uniti e in Asia. Gratuito, privato, in inglese e in italiano.',
  'Do you clear the rules? Computer Science, Data Science & AI and conversion master\'s in the UK, Europe and the US, checked against each programme\'s published entry rules.':
    'Rispetti i requisiti? Master in informatica, data science e IA e di conversione nel Regno Unito, in Europa e negli Stati Uniti, confrontati con le regole d\'ingresso pubblicate da ogni programma.',
  'A points-based MBA calculator across 43 business schools: your score, your verdict at each school, and what would close the gap. Free and private.':
    'Un calcolatore MBA a punti su 43 business school: il tuo punteggio, il verdetto per ogni scuola e cosa colmerebbe la distanza. Gratuito e privato.',
  'Master\'s in Management, Finance and Marketing: hard entry rules first, then your score under each school\'s own weighting. Free and private.':
    'Master in management, finanza e marketing: prima i requisiti vincolanti, poi il tuo punteggio con i pesi di ogni scuola. Gratuito e privato.',
  'Computer Science, Data Science & AI and conversion master\'s: published entry rules first, then your score. Free and private.':
    'Master in informatica, data science e IA e di conversione: prima le regole d\'ingresso pubblicate, poi il tuo punteggio. Gratuito e privato.',

  /* Masthead, strip and navigation */
  'Admissions index': 'Indice delle ammissioni',
  'Edition': 'Edizione',
  'Language': 'Lingua',
  'Salmon financial paper': 'Carta salmone da quotidiano finanziario',
  'Black and white, Times New Roman': 'Bianco e nero, Times New Roman',
  'Black masthead, white page, full colour': 'Testata nera, pagina bianca, a colori',
  'The way in — an independent calculator for MBA, business and computing master’s degrees': 'The way in — un calcolatore indipendente per MBA, master in business e master in informatica',
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
  'Three calculators. A points-based MBA admissions model; a purpose-built model for pre-experience business master’s degrees; and a rule-first model for IT &amp; computing master’s in the UK, Europe and the US.':
    'Tre calcolatori. Un modello di ammissione MBA a punti; un modello costruito apposta per i master in business per neolaureati; e un modello basato sulle regole per i master in informatica nel Regno Unito, in Europa e negli Stati Uniti.',
  'Two university students at desks, heads down, writing an exam paper.': 'Due studenti universitari ai banchi, a testa bassa, durante un esame scritto.',
  'Most published requirements at master’s level are pass/fail.': 'A livello di master, la maggior parte dei requisiti pubblicati è promosso/bocciato.',
  'Choose your field': 'Scegli il tuo ambito',
  'Graduating students throwing their caps in the air outside a business school.': 'Neolaureati che lanciano il tocco in aria davanti a una business school.',
  'MBA, Master in Finance, Master in Management and Master in Marketing. Scored against more than 110 programmes in Europe, the US and Asia.':
    'MBA, Master in Finance, Master in Management e Master in Marketing. Valutati su oltre 110 programmi in Europa, negli Stati Uniti e in Asia.',
  'Begin the business calculator →': 'Inizia il calcolatore business →',
  'IT &amp; Computing': 'Informatica',
  'Computer Science, Data Science and AI, and conversion master’s for graduates of other subjects. Scored against the entry rules each programme publishes.':
    'Informatica, data science e IA, e master di conversione per laureati in altre materie. Valutati sulle regole d\'ingresso pubblicate da ogni programma.',
  'Begin the computing calculator →': 'Inizia il calcolatore di informatica →',
  'Highest bars': 'Le soglie più alte',
  'What this is': 'Cos\'è',
  'An independent, unofficial tool built for personal use. It is not affiliated with, endorsed by, or connected to any university or business school. It produces a rough estimate and cannot predict a decision.':
    'Uno strumento indipendente e non ufficiale, nato per uso personale. Non è affiliato, approvato o collegato ad alcuna università né ad alcuna business school. Dà una stima approssimativa e non può prevedere una decisione.',
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
  'Two or more years of work experience. Scored on a points-based model, against 35 schools on a shared scale plus 8 modelled individually.':
    'Due o più anni di esperienza lavorativa. Valutato con un modello a punti, su 35 scuole con una scala comune più 8 modellate singolarmente.',
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
  'A caveat that matters for the master’s tracks': 'Un’avvertenza che conta per i master',
  'Most European programmes publish no admitted-student test average at all. The figures circulating on unofficial sites are largely estimates presented as fact. This tool labels the source of every number it uses, and says plainly when a school has published nothing.':
    'La maggior parte dei programmi europei non pubblica alcuna media dei test degli ammessi. I numeri che girano sui siti non ufficiali sono in gran parte stime presentate come fatti. Questo strumento indica la fonte di ogni numero che usa, e dice chiaramente quando una scuola non ha pubblicato nulla.',
  'Estimates presented as fact.': 'Stime presentate come fatti.',
  'On the numbers that circulate on unofficial sites': 'Sui numeri che girano sui siti non ufficiali',
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
  'Why this one is built differently': 'Perché questo è costruito in modo diverso',
  'The business calculators lean on admitted class profiles. Computing programmes do not publish those — but they do publish hard entry rules, and in the UK their real acceptance rates are obtainable under Freedom of Information. So this track leads with the rules and says plainly where every number came from. Where five years of applicants have reported their own outcomes, that is shown too, labelled as what it is: a self-selected sample, never an acceptance rate.':
    'I calcolatori business si basano sui profili delle classi ammesse. I programmi di informatica non li pubblicano, ma pubblicano requisiti d\'ingresso vincolanti, e nel Regno Unito i loro veri tassi di ammissione si possono ottenere con richieste Freedom of Information. Così questo percorso parte dalle regole e dice chiaramente da dove viene ogni numero. Dove cinque anni di candidati hanno riportato i propri esiti, sono mostrati anche quelli, etichettati per quello che sono: un campione autoselezionato, mai un tasso di ammissione.',
  'A self-selected sample, never an acceptance rate.': 'Un campione autoselezionato, mai un tasso di ammissione.',
  'On outcomes applicants report themselves': 'Sugli esiti riportati dai candidati stessi',
  '<b class="rubric-in">Elsewhere</b><a href="index.html">Back to the front page</a> · <a href="business.html">Business</a>':
    '<b class="rubric-in">Altrove</b><a href="index.html">Torna alla prima pagina</a> · <a href="business.html">Business</a>',

  /* Calculator pages */
  'Post-experience · MBA': 'Con esperienza · MBA',
  'How strong is your <em>application</em>?': 'Quanto è forte la tua <em>candidatura</em>?',
  'Scored on a points-based model, against 35 schools on a shared scale plus 8 modelled individually.':
    'Valutata con un modello a punti, su 35 scuole con una scala comune più 8 modellate singolarmente.',
  'The base score on the published model, before any school’s own adjustments.': 'Il punteggio di base del modello pubblicato, prima delle correzioni di ogni scuola.',
  '<b class="rubric-in">Independent and unofficial</b>This calculator uses a points-based scoring model across 43 business schools. It estimates; it does not predict.':
    '<b class="rubric-in">Indipendente e non ufficiale</b>Questo calcolatore utilizza un modello a punti su 43 business school. Stima; non prevede.',
  'Your answers on the track weighting — evenly weighted, before any school’s own emphasis.': 'Le tue risposte con i pesi del percorso — pesi uguali, prima delle priorità di ogni scuola.',
  '<b class="rubric-in">An original model</b>The weights here are designed specifically for pre-experience programmes; the school facts are sourced and tagged individually, and the score thresholds are calibration rather than anything a school has published.':
    '<b class="rubric-in">Un modello originale</b>I pesi qui sono studiati appositamente per i programmi pre-esperienza; i dati sulle scuole hanno ciascuno la propria fonte, e le soglie di punteggio sono una calibrazione, non qualcosa che una scuola abbia pubblicato.',
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
  'Not in this list. Find the closest peer under “See some examples” and type its value (0 to 4) in the box.': 'Non è in questo elenco. Trova il caso più simile in “Vedi qualche esempio” e scrivi il suo valore (da 0 a 4) nella casella.',
  'See some examples': 'Vedi qualche esempio',
  'optional': 'facoltativo',
  'Clear this answer': 'Cancella questa risposta',
  'or tap your answer again': 'oppure tocca di nuovo la risposta',
  'Click your answer again to clear it': 'Clicca di nuovo sulla risposta per toglierla',
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

  /* ------------------------------------------------ saved answers, footer */

  'Nothing saved.': 'Niente di salvato.',
  'One calculator has saved answers.': 'Un calcolatore ha risposte salvate.',
  '{n} calculators have saved answers.': '{n} calcolatori hanno risposte salvate.',
  'Clear everything': 'Cancella tutto',
  'Delete every saved answer, across all calculators?': 'Eliminare tutte le risposte salvate, in tutti i calcolatori?',
  'This cannot be undone.': 'Non si può annullare.',
  'Picking up where you left off — your previous answers are filled in.': 'Riprendi da dove eri rimasto: le risposte precedenti sono già inserite.',
  'Start fresh': 'Ricomincia da zero',
  'Clear your answers to this calculator and start over?': 'Cancellare le risposte a questo calcolatore e ricominciare?',
  'See my results →': 'Vedi i miei risultati →',
  'See your results →': 'Vedi i tuoi risultati →',
  'Your results': 'I tuoi risultati',
  'Data & AI': 'Data e IA',
  'Business →': 'Business →',
  'IT &amp; Computing →': 'Informatica →',
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
  'Below Competitive': 'Sotto Competitivo',
  'Ruled out': 'Esclusi',
  'at or above the Strong line': 'pari o sopra la soglia Forte',
  'at or above Competitive, short of Strong': 'pari o sopra Competitivo, sotto Forte',
  'On this page': 'In questa pagina',
  'Jump to': 'Vai a',
  'Hide the ruled-out programmes': 'Nascondi i programmi esclusi',
  'Show the programme and the rule that rules it out': 'Mostra il programma e la regola che lo esclude',
  'Show the {n} programmes and the rule that rules out each': 'Mostra i {n} programmi e la regola che esclude ciascuno',
  'Eligible': 'Ammissibili',
  'How your score was calculated': 'Come è calcolato il tuo punteggio',
  'Modelled individually': 'Modellate una per una',
  'Shared scale': 'Scala comune',
  'Where your points came from': 'Da dove vengono i tuoi punti',
  'eligible, below Competitive': 'ammissibile, sotto Competitivo',
  'All': 'Tutti',
  'UK': 'Regno Unito',
  'Europe': 'Europa',
  'US': 'USA',
  'Canada': 'Canada',
  'Asia': 'Asia',

  /* Where a programme is */
  'France': 'Francia',
  'France / Singapore': 'Francia / Singapore',
  'UK / France': 'Regno Unito / Francia',
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
  'Average out of 30:': 'Media su 30:',
  'Weighted exam average, out of 30': 'Media ponderata degli esami, su 30',
  'Enter a value between 18 and 30, for example 27.4.': 'Inserisci un valore tra 18 e 30, per esempio 27.4.',
  'US GPA equivalent, roughly:': 'Equivalente in GPA statunitense, all\'incirca:',
  'Place in a typical Italian cohort:': 'Posizione in un tipico corso italiano:',
  'the top ~5%': 'il ~5% migliore',
  'the top ~10%': 'il ~10% migliore',
  'the top ~25%': 'il ~25% migliore',
  'the top half': 'la metà superiore',
  'Both are indicative. The cohort estimate takes about 26/30 as the typical average, which is what AlmaLaurea\'s national figures imply; faculties differ, and engineering grades lower than economics. Some schools, Bocconi among them, recalculate your GPA from the transcript themselves.': 'Sono entrambi indicativi. La stima sul corso prende circa 26/30 come media tipica, come indicano i dati nazionali di AlmaLaurea; le facoltà sono diverse, e a ingegneria i voti sono più bassi che a economia. Alcune scuole, tra cui la Bocconi, ricalcolano da sé il GPA dal piano di studi.',
  'around the median': 'intorno alla mediana',
  'below the median': 'sotto la mediana',
  'Show all details': 'Mostra tutti i dettagli',
  'Hide all details': 'Nascondi tutti i dettagli',
  'How to close the gap, and what this school weighs': 'Come colmare la distanza, e cosa conta per questa scuola',
  'What this school weighs and publishes': 'Cosa conta per questa scuola e cosa pubblica',
  'Every programme below is scored under its own weighting, because schools judge the same file differently.': 'Ogni programma qui sotto è valutato con i suoi pesi, perché le scuole giudicano lo stesso profilo in modo diverso.',
  'How the schools weigh differently': 'Come pesano le scuole, una per una',
  'Closest: {name}, {n} points short of Competitive.': 'Il più vicino: {name}, a {n} punti da Competitivo.',
  'Closest: {name} and {k} others, {n} points short of Competitive.': 'I più vicini: {name} e altre {k}, a {n} punti da Competitivo.',
  'How to close the gap': 'Come colmare la distanza',
  'How to close the gap, and how this programme reads a file': 'Come colmare la distanza, e come questo programma legge un profilo',
  'How this programme reads a file, and what it publishes': 'Come questo programma legge un profilo, e cosa pubblica',
  'How the programmes read a file differently': 'Come ogni programma legge un profilo',
  '{q} questions · about {m} minutes · your answers stay in your browser': '{q} domande · circa {m} minuti · le risposte restano nel tuo browser',
  'Find a programme…': 'Cerca un programma…',
  'Find a programme by name': 'Cerca un programma per nome',
  'Order': 'Ordine',
  'Best chance first': 'Prima le più alla portata',
  'Next deadline first': 'Prima la scadenza più vicina',
  'Meets the requirements': 'Rispetti i requisiti',
  'Meets the requirements, if places remain': 'Rispetti i requisiti, se restano posti',
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
  'First window closes': 'Chiusura della prima finestra',
  'Second window closes': 'Chiusura della seconda finestra',
  '1st deadline': '1ª scadenza',
  '2nd deadline': '2ª scadenza',
  '3rd deadline': '3ª scadenza',
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
  'Test planned, no score yet': 'Test in programma, ancora senza punteggio',
  'No test submitted': 'Nessun test presentato',
  'GRE quant {n}': 'GRE quant {n}',
  'Test score': 'Punteggio del test',
  'Base score': 'Punteggio di base',
  'Profile score': 'Punteggio del profilo',

  /* ---------------------------------------------------- battle plan */

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
  'Battle plan': 'Piano di battaglia',
  'Page {n} of 2': 'Pagina {n} di 2',
  'Share my shortlist': 'Condividi la mia shortlist',
  'Makes an image of your shortlist in this browser — nothing is sent anywhere — to share or save.': 'Crea un’immagine della tua shortlist in questo browser — non viene inviato nulla — da condividere o salvare.',
  'My shortlist': 'La mia shortlist',
  'My shortlist on Admetia — the way in.': 'La mia shortlist su Admetia — the way in.',
  'An independent estimate from a points model — not an admission decision.': 'Una stima indipendente da un modello a punti — non una decisione di ammissione.',
  'Deadlines': 'Scadenze',
  'Filter': 'Filtra',
  'Tap to filter.': 'Tocca per filtrare.',
  'Pick a region or a verdict to narrow the lists; pick it again to undo. Every verdict next to a score, marked +, opens what it means in practice.': 'Scegli un’area o un verdetto per restringere le liste; sceglilo di nuovo per annullare. Ogni verdetto accanto a un punteggio, segnato con +, apre cosa significa in pratica.',
  'Show all': 'Mostra tutto',
  'What this verdict means': 'Cosa significa questo verdetto',
  'Read this before you rely on a number': 'Leggi questo prima di fidarti di un numero',
  'A reality check on admissions': 'Un bagno di realtà sulle ammissioni',
  'Admetia gives you an informal benchmark, not a guarantee. Every verdict here is an estimate, and every school can change its mind. This is how admissions actually work behind closed doors:': 'Admetia ti dà un riferimento informale, non una garanzia. Ogni verdetto qui è una stima, e ogni scuola può cambiare idea. Ecco come funzionano davvero le ammissioni a porte chiuse:',
  '<strong>The competition shifts every intake.</strong> You are not competing against an abstract points threshold; you are competing against the specific batch of applicants in your round. A profile that earned an admit last year can miss the cut this year simply because the pool was unusually strong.': '<strong>La concorrenza cambia a ogni sessione.</strong> Non competi contro una soglia astratta di punti: competi contro il gruppo preciso di candidati del tuo round. Un profilo che l’anno scorso è stato ammesso può restare fuori quest’anno solo perché il gruppo era particolarmente forte.',
  '<strong>Criteria change constantly.</strong> Schools update their internal weightings, priorities and quotas without announcing the mechanics, so the thresholds here can be out of date the day after they were checked.': '<strong>I criteri cambiano di continuo.</strong> Le scuole aggiornano pesi interni, priorità e quote senza annunciarne i meccanismi, quindi le soglie qui possono essere superate il giorno dopo il controllo.',
  '<strong>Human judgment beats pure math.</strong> On paper an application is data; in reality it is read by people. Personal biases, interview chemistry and even fatigue play a quiet role: the same file, read by two professors or by one on two different days, can leave noticeably different impressions.': '<strong>Il giudizio umano batte la matematica.</strong> Sulla carta una candidatura è un insieme di dati; nella realtà la leggono delle persone. Pregiudizi personali, intesa al colloquio e perfino la stanchezza contano in silenzio: lo stesso dossier, letto da due professori o dallo stesso in due giorni diversi, può lasciare impressioni molto diverse.',
  'Treat these numbers as an orientation point to spot the gaps in your application, not as a mathematical certainty. Always check each school’s own admissions page before you decide anything.': 'Considera questi numeri un punto di orientamento per scoprire le lacune della tua candidatura, non una certezza matematica. Controlla sempre la pagina ufficiale di ogni scuola prima di decidere qualsiasi cosa.',
  'What the verdicts mean': 'Cosa significano i verdetti',
  'How to read the verdicts': 'Come leggere i verdetti',
  'What each verdict means in practice': 'Cosa significa in pratica ogni verdetto',
  'Close': 'Chiudi',
  'In practice': 'In pratica',
  'The model’s own figure': 'La stima del modello',
  'The rule': 'La regola',
  'Roughly 75–80%': 'Circa 75–80%',
  'Roughly 50%': 'Circa 50%',
  'Roughly 10%': 'Circa 10%',
  'In between': 'Nel mezzo',
  'Your profile is above the school’s bar, possibly with a scholarship. Likely, not certain.': 'Il tuo profilo è sopra l’asticella della scuola, forse con una borsa di studio. Probabile, non certo.',
  'You look like the people they admit. A coin flip, decided by your essays, interview and application round.': 'Somigli alle persone che ammettono. Un testa o croce, deciso da saggi, colloquio e round di candidatura.',
  'The labels between the bands (“closer to…”, “between…”) are transition zones: read them as the nearer band.': 'Le etichette tra una fascia e l’altra («più vicino a…», «tra…») sono zone di passaggio: leggile come la fascia più vicina.',
  'Well below the bar. It happens, but rarely.': 'Molto sotto l’asticella. Succede, ma di rado.',
  'The percentages are the model author’s own stated figures, not measured outcomes. No verdict is a guarantee: committees read the whole file — essays, interview, and who else applies that year.': 'Le percentuali sono quelle dichiarate dall’autore del modello, non esiti misurati. Nessun verdetto è una garanzia: le commissioni leggono tutto il dossier — saggi, colloquio e chi altro si candida quell’anno.',
  'At or above the school’s Strong line': 'Pari o sopra la soglia Forte della scuola',
  'At or above its Competitive line': 'Pari o sopra la sua soglia Competitivo',
  'Up to 8 points below Competitive': 'Fino a 8 punti sotto Competitivo',
  'More than 8 points below Competitive': 'Più di 8 punti sotto Competitivo',
  'Programmes that admit everyone who meets their rules, until they are full': 'Programmi che ammettono chiunque rispetti i requisiti, finché non sono pieni',
  'Fails a published entry rule': 'Non rispetta un requisito d’ingresso pubblicato',
  'Comfortably above a typical admitted profile. A solid place on your list.': 'Comodamente sopra un profilo tipico degli ammessi. Un posto solido nella tua lista.',
  'In range: your essays and interview decide.': 'Nel range: decidono saggi e colloquio.',
  'Realistic with a strong application or an improvement — each programme shows what would close the gap.': 'Realistico con una candidatura forte o un miglioramento — ogni programma mostra cosa colmerebbe la distanza.',
  'Unlikely, unless something else in your file really stands out.': 'Improbabile, a meno che qualcos’altro nel tuo dossier spicchi davvero.',
  'Apply early: timing matters more than score.': 'Candidati presto: conta più il tempismo del punteggio.',
  'Not eligible as things stand, whatever the score. The row says which rule, and whether it can still be met.': 'Non ammissibile allo stato attuale, qualunque sia il punteggio. La riga dice quale requisito, e se si può ancora soddisfare.',
  'These are a ranking, not probabilities: the lines are the model’s own calibration, because no school publishes a points requirement. No verdict is a guarantee: committees read the whole file.': 'È una classifica, non una probabilità: le soglie sono una calibrazione del modello, perché nessuna scuola pubblica un requisito in punti. Nessun verdetto è una garanzia: le commissioni leggono tutto il dossier.',
  'Building your list': 'Come costruire la tua lista',
  'Possible or Stretch': 'Possibile o Difficile',
  'your safety net': 'la tua rete di sicurezza',
  'the core of your list': 'il cuore della tua lista',
  'the ones you would love': 'quelle che sogni',
  'Deadline calendar': 'Calendario delle scadenze',
  'The next closing date at every programme you can still apply to, soonest first.': 'La prossima chiusura di ogni programma a cui puoi ancora candidarti, dalla più vicina.',
  'Show all {n}': 'Mostra tutte e {n}',
  'today': 'oggi',
  'day': 'giorno',
  'days': 'giorni',
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
  '{n} for applying in a late round': '{n} per la candidatura in un turno tardivo',
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
  'Requires a test score — you plan to sit one, so it stays in the list': 'Richiede un punteggio al test: hai in programma di farlo, quindi resta nella lista',
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
  'You plan to sit a test but have not entered an expected score. Schools that require a test are kept in your list with a warning, and the test weight is removed from your score for now. For a truer picture, go back and enter the score you realistically expect — a recent practice test is the best guide.':
    'Hai in programma un test ma non hai inserito il punteggio che ti aspetti. Le scuole che richiedono un test restano nella lista con un avviso, e per ora il peso del test è tolto dal tuo punteggio. Per un quadro più fedele, torna indietro e inserisci il punteggio che realisticamente ti aspetti: un test di prova recente è la guida migliore.',
  'This uses the score you expect, not one you have sat. Treat these results as a forecast: if the real score comes in lower, come back and update it.':
    'Qui si usa il punteggio che ti aspetti, non uno già ottenuto. Considera questi risultati una previsione: se il punteggio vero arriva più basso, torna e aggiornalo.',
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
  '{region} · test: {policy}': '{region} · test: {policy}',
  'More on this school': 'Altro su questa scuola',
  'More on this programme': 'Altro su questo programma',
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
  '({n} for a test score below this school’s usual range)': '({n} per un punteggio al test sotto la fascia abituale di questa scuola)',
  'Scores this far below the range a school admits rarely get through, so {n} points come off your score here. Not submitting would avoid that at schools where the test is optional.':
    'Punteggi così sotto la fascia che una scuola ammette passano di rado, quindi qui ti vengono tolti {n} punti. Non presentarlo lo eviterebbe nelle scuole dove il test è facoltativo.',
  'Your ~{gmat} sits {where} ({z} SD).': 'Il tuo ~{gmat} è {where} ({z} DS).',
  '{N} programme is ruled out by a published requirement.': '{N} programma ti esclude con un requisito pubblicato.',
  '{N} programmes are ruled out by a published requirement.': '{N} programmi ti escludono con un requisito pubblicato.',
  'No hard rule rules you out on the answers so far.': 'Con le risposte date finora nessun requisito vincolante ti esclude.',
  'No hard rule rules you out.': 'Nessun requisito vincolante ti esclude.',

  /* ---------------------------------------------------------------- Atlas (map.html, js/page-map.js) --- */
  'Atlas': 'Atlante',
  'Atlas — Admetia': 'Atlante — Admetia',
  '{country} — Atlas — Admetia': '{country} — Atlante — Admetia',
  'Your passport': 'Il tuo passaporto',
  'Remembered in this browser only. “Clear everything” removes it.': 'Ricordato solo in questo browser. «Cancella tutto» lo rimuove.',
  'Not chosen yet: routes are shown for an EU passport until you pick one.': 'Non ancora scelto: finché non ne scegli uno, i percorsi sono mostrati per un passaporto UE.',
  'Map': 'Mappa',
  'World map of the countries the Atlas covers': 'Mappa del mondo con i paesi trattati dall’Atlante',
  'Covered: tap or press Enter for a summary': 'Trattato: tocca o premi Invio per una sintesi',
  'Not covered (hatched)': 'Non trattato (tratteggiato)',
  'Small country or city-state': 'Piccolo paese o città-stato',
  'Loading…': 'Caricamento…',
  'This country’s page could not be loaded. Check your connection and try again.': 'Non è stato possibile caricare la pagina di questo paese. Controlla la connessione e riprova.',
  'and {n} more on the country page': 'e altri {n} nella pagina del paese',
  'read {date}': 'letto il {date}',
  '← Back to the map': '← Torna alla mappa',
  'Outside Europe': 'Fuori dall’Europa',
  'Checked {date}': 'Verificato il {date}',
  'Showing: {p} passport': 'Passaporto mostrato: {p}',
  'This is your own country, so there is no route to describe. Pick another passport to see how others get here.':
    'Questo è il tuo paese, quindi non c’è un percorso da descrivere. Scegli un altro passaporto per vedere come ci arrivano gli altri.',
  'Outside Admetia’s scope': 'Fuori dall’ambito di Admetia',
  'Admetia covers routes into, out of and within Europe. A route from a non-European passport to a country outside Europe is not one of them, so there is no content for it here.':
    'Admetia tratta i percorsi verso, dall’Europa e al suo interno. Un percorso da un passaporto non europeo verso un paese fuori dall’Europa non rientra tra questi, quindi qui non ci sono contenuti.',
  'The hubs and the roles above still describe the job market.': 'I poli e i ruoli qui sopra descrivono comunque il mercato del lavoro.',
  'Working there': 'Lavorarci',
  'First weeks': 'Le prime settimane',
  'in the order most people do them': 'nell’ordine in cui li fa la maggior parte delle persone',
  'Official advice and restrictions': 'Avvisi ufficiali e restrizioni',
  'Hubs': 'Poli',
  'The hub': 'Il polo',
  '{n} hubs: tap one for what it hires for': '{n} poli: toccane uno per vedere per cosa assume',
  'Research behind this page': 'La ricerca dietro questa pagina',
  'Briefs in the research library': 'Dossier nella biblioteca di ricerca',
  'Not verified yet': 'Non ancora verificato',
  'Verification log: {p} in research/verification/claims-to-verify.md.': 'Registro di verifica: {p} in research/verification/claims-to-verify.md.',
  'Pick a hub': 'Scegli un polo',
  'Colour by': 'Colora per', 'Plain': 'Nessun colore',
  'GDP per head': 'PIL pro capite', 'GDP per head, PPP (international dollars)': 'PIL pro capite, a parità di potere d’acquisto (dollari internazionali)',
  'Economy size': 'Dimensione dell’economia', 'GDP, current prices (US dollars)': 'PIL a prezzi correnti (dollari USA)',
  'Unemployment': 'Disoccupazione', 'Unemployment rate (% of the labour force)': 'Tasso di disoccupazione (% della forza lavoro)',
  'Growth': 'Crescita', 'Real GDP growth (% a year)': 'Crescita del PIL reale (% annuo)',
  'no IMF figure': 'nessun dato FMI',
  '{source}, {year} figures, partly estimates. Five classes of about nine countries each.':
    '{source}, dati {year}, in parte stime. Cinque classi di circa nove paesi ciascuna.',
  '{n} of {total}, highest first': '{n}° su {total}, dal più alto',
  '{source}, {year} figures, partly estimates; ranks among the 46 Atlas countries.':
    '{source}, dati {year}, in parte stime; posizioni tra i 46 paesi dell’Atlante.',
  'Key figures': 'Dati chiave', 'where it sits among the 46': 'dove si colloca tra i 46',
  'Hubs compared': 'I poli a confronto', '{n} hubs side by side': '{n} poli fianco a fianco',
  'Mostly business and finance roles': 'Soprattutto ruoli di business e finanza',
  'Mostly computing and data roles': 'Soprattutto ruoli di informatica e dati',
  'Both, equally': 'Entrambi, in egual misura', 'No family rated yet': 'Nessuna famiglia ancora valutata',
  'Bigger square, more residents': 'Quadrato più grande, più abitanti',
  'What each hub hires for': 'Per cosa assume ogni polo',
  'Darker means more demand; a blank cell is not rated.': 'Più scuro significa più domanda; una cella vuota non è valutata.',
  'No family is rated in any hub yet.': 'Nessuna famiglia è ancora valutata in alcun polo.',
  'Hub': 'Polo', 'not rated': 'non valutato', 'Not rated': 'Non valutato',
  'Not rated in any hub: {list}': 'Non valutate in alcun polo: {list}',
  'How far each hub’s pull reaches': 'Fin dove arriva l’attrazione di ogni polo',
  'Standing out of 5: in the country, in the region and in the world.': 'Posizione su 5: nel paese, nella regione e nel mondo.',
  'Judgements from cited rankings and statistics, never measurements: 5 leading, 4 among the top five, 3 a recognised secondary centre, 2 minor, 1 negligible at that scale. The sources are in each hub’s detail.':
    'Giudizi basati su classifiche e statistiche citate, mai misurazioni: 5 al vertice, 4 tra i primi cinque, 3 un centro secondario riconosciuto, 2 minore, 1 trascurabile a quella scala. Le fonti sono nella scheda di ogni polo.',
  'Residents': 'Abitanti',
  'Output of the area in a year: the volume of business done there.': 'Il prodotto dell’area in un anno: il volume d’affari che vi si genera.',
  'Pay and rent': 'Stipendio e affitto',
  'Average gross monthly pay against the monthly rent of a one-bedroom flat, in the same currency.':
    'Retribuzione media mensile lorda a confronto con l’affitto mensile di un bilocale, nella stessa valuta.',
  'no figure': 'nessun dato', 'rent {p}% of pay': 'affitto {p}% dello stipendio',
  'The share is an author calculation on gross pay; on take-home pay it is higher.':
    'La quota è un calcolo dell’autore sullo stipendio lordo; sul netto è più alta.',
  'median': 'mediana', 'mean': 'media', 'Standing': 'Posizione',
  'Sources': 'Fonti', 'Figures': 'Dati',
  'Visas and permits': 'Visti e permessi',
  'Advice': 'Avvisi', 'Compare': 'Confronto', 'Visas': 'Visti', 'Research': 'Ricerca',
  'Section {n} of {total}': 'Sezione {n} di {total}',
  'Life there': 'Vivere lì',
  'each line says whether it is about the whole country or each city': 'ogni riga dice se riguarda tutto il paese o ciascuna città',
  'City figures are read at each hub’s city centre; country figures are national averages. Each topic comes from one source for all 46 countries, so pages compare; office culture is the exception, because no single source covers it, so each country cites its own pages.':
    'I dati per città sono letti al centro di ciascun polo; quelli per paese sono medie nazionali. Ogni tema viene da una sola fonte per tutti i 46 paesi, così le pagine si possono confrontare; la cultura d’ufficio fa eccezione, perché nessuna fonte unica la copre, quindi ogni paese cita le proprie pagine.',
  'By city': 'Per città', 'Whole country': 'Tutto il paese', 'City': 'Città', 'no figure in this source': 'nessun dato in questa fonte',
  'Climate': 'Clima', 'Coldest month': 'Mese più freddo', 'Warmest month': 'Mese più caldo', 'Rain a year': 'Pioggia annua',
  'Cloud cover': 'Copertura nuvolosa', '{m}: {t} °C': '{m}: {t} °C', '{n} mm': '{n} mm',
  'Daylight': 'Luce del giorno', 'Shortest day': 'Giorno più corto', 'Longest day': 'Giorno più lungo', '{h} h {m} min': '{h} h {m} min',
  'Air quality': 'Qualità dell’aria', 'Fine particles (PM2.5)': 'Polveri sottili (PM2,5)', 'Against the WHO guideline': 'Rispetto alla soglia OMS',
  '{n} µg/m³': '{n} µg/m³', '{n} × the guideline': '{n} × la soglia',
  'Time zone': 'Fuso orario',
  'All {n} hubs': 'Tutti i {n} poli', '{u} all year': '{u} tutto l’anno', '{a} in January and {b} in July': '{a} a gennaio e {b} a luglio',
  '{a} h ahead of Central European Time in January and {b} h in July': '{a} h avanti rispetto all’ora dell’Europa centrale a gennaio e {b} h a luglio',
  '{a} h behind Central European Time in January and {b} h in July': '{a} h indietro rispetto all’ora dell’Europa centrale a gennaio e {b} h a luglio', 'January': 'Gennaio', 'July': 'Luglio', 'same as Central European Time': 'come l’ora dell’Europa centrale',
  '{n} h ahead of Central European Time': '{n} h avanti rispetto all’ora dell’Europa centrale',
  '{n} h behind Central European Time': '{n} h indietro rispetto all’ora dell’Europa centrale',
  'English': 'Inglese', 'EF city score': 'Punteggio EF della città',
  'Whole country: EF English Proficiency Index {y} score {s} ({b}), {r} in the world.':
    'Tutto il paese: EF English Proficiency Index {y}, punteggio {s} ({b}), {r} al mondo.',
  'very high': 'molto alto', 'high': 'alto', 'moderate': 'moderato', 'low': 'basso', 'very low': 'molto basso',
  'EF publishes no score for this country’s hub cities.': 'EF non pubblica punteggi per le città dei poli di questo paese.',
  'Whole country: EF does not rank countries where English is the main language, so it publishes no score here.':
    'Tutto il paese: EF non classifica i paesi in cui l’inglese è la lingua principale, quindi qui non pubblica un punteggio.',
  'Whole country: EF publishes no English proficiency score for this country.':
    'Tutto il paese: EF non pubblica un punteggio di conoscenza dell’inglese per questo paese.',
  'Prices': 'Prezzi', 'Price level {v} (US = 100) in {y}: {rank} of the {of} countries.':
    'Livello dei prezzi {v} (Stati Uniti = 100) nel {y}: {rank} dei {of} paesi.',
  'Safety': 'Sicurezza', '{v} intentional homicides per 100,000 people in {y}: {rank} of the {of} countries with a figure.':
    '{v} omicidi volontari ogni 100.000 abitanti nel {y}: {rank} dei {of} paesi con un dato.',
  'No figure for this country in the UNODC series the World Bank publishes.': 'Nessun dato per questo paese nella serie UNODC pubblicata dalla Banca mondiale.',
  'Working hours': 'Orario di lavoro', 'People in work put in {v} hours a week on average in {y}: {rank} of the {of} countries with a figure.':
    'Chi lavora fa in media {v} ore a settimana nel {y}: {rank} dei {of} paesi con un dato.',
  'highest': 'più alto', 'lowest': 'più basso', 'shortest': 'più breve',
  'the highest': 'il più alto', 'the lowest': 'il più basso', 'the shortest': 'il più breve',
  'No figure for this country in ILOSTAT.': 'Nessun dato per questo paese in ILOSTAT.',
  'Office culture': 'Cultura d’ufficio', 'Swiss German': 'Tedesco svizzero',
  'By law, at least {n} paid days of annual leave a year, plus {m} public holidays.': 'Per legge almeno {n} giorni di ferie retribuite all’anno, più {m} festività pubbliche.',
  'By law, at least {n} paid days of annual leave a year.': 'Per legge almeno {n} giorni di ferie retribuite all’anno.',
  '{m} public holidays a year.': '{m} festività pubbliche all’anno.',
  'There is no national legal minimum of paid annual leave for private employers: it is set by the contract.': 'Non esiste un minimo nazionale di ferie retribuite per i datori di lavoro privati: lo stabilisce il contratto.',
  'Leave and holiday counts are legal minimums for a full-time job on a five-day week: contracts, regions and years of service often add days. The sentences on the working day and office style are what business guides report, not rules: workplaces differ.':
    'I giorni di ferie e di festività sono i minimi di legge per un lavoro a tempo pieno su cinque giorni: contratti, regioni e anzianità spesso ne aggiungono. Le frasi sulla giornata di lavoro e sullo stile d’ufficio riportano ciò che dicono le guide per chi fa affari, non regole: i luoghi di lavoro cambiano.',
  'Not researched yet for this country.': 'Non ancora ricercato per questo paese.',
  'Language in daily life': 'Lingua nella vita quotidiana', '{l} (spoken by about {p}%)': '{l} (parlato da circa il {p}%)',
  'Official languages: {list}.': 'Lingue ufficiali: {list}.', 'Official language: {list}.': 'Lingua ufficiale: {list}.',
  'Official in some regions: {list}.': 'Ufficiale in alcune regioni: {list}.',
  'Shares are Unicode CLDR’s estimates of how many people speak each language. Many workplaces run in another language: see English below and Working there.':
    'Le quote sono stime di Unicode CLDR su quante persone parlano ciascuna lingua. Molti luoghi di lavoro usano un’altra lingua: vedi Inglese qui sotto e Lavorarci.',
  'Essential health services reach {v} on the UHC service coverage index (0–100, {y}): {rank} of the {of} countries.':
    'I servizi sanitari essenziali arrivano a {v} sull’indice di copertura dei servizi UHC (0–100, {y}): {rank} dei {of} paesi.',
  '{d} doctors and {b} hospital beds per 1,000 people ({y}).': '{d} medici e {b} posti letto in ospedale ogni 1.000 abitanti ({y}).',
  '{d} doctors per 1,000 people ({y}).': '{d} medici ogni 1.000 abitanti ({y}).',
  '{b} hospital beds per 1,000 people ({y}).': '{b} posti letto in ospedale ogni 1.000 abitanti ({y}).',
  'The chance of dying between 30 and 70 from heart disease, cancer, diabetes or chronic lung disease is {v}% ({y}): {rank} of the {of} countries.':
    'La probabilità di morire tra i 30 e i 70 anni per malattie del cuore, tumori, diabete o malattie polmonari croniche è del {v}% ({y}): {rank} dei {of} paesi.',
  'These describe the health system as a whole, not any one hospital or doctor. Whether a newcomer can join the public scheme is covered under First weeks, health cover.':
    'Descrivono il sistema sanitario nel suo insieme, non un singolo ospedale o medico. Se un nuovo arrivato può iscriversi al servizio pubblico è spiegato in Le prime settimane, copertura sanitaria.',
  'Health care': 'Sanità', 'Patients pay {v}% of health spending out of their own pocket ({y}).':
    'I pazienti pagano di tasca propria il {v}% della spesa sanitaria ({y}).',
  'How locals come across': 'Come appaiono le persone del posto',
  'Foreign residents surveyed by InterNations in {y} rank locals’ friendliness {n} of {of} destinations: {third}.':
    'Gli stranieri residenti intervistati da InterNations nel {y} collocano la cordialità delle persone del posto al {n} posto su {of} destinazioni: {third}.',
  'among the friendliest third': 'nel terzo più cordiale', 'in the middle third': 'nel terzo intermedio', 'among the least friendly third': 'nel terzo meno cordiale',
  'Making local friends: {a} of {of}. Feeling welcome and at home: {b} of {of}.':
    'Fare amicizia con le persone del posto: {a} su {of}. Sentirsi accolti e a casa: {b} su {of}.',
  'How foreign residents who answered the survey see locals, not a measure of a people: experiences vary by city, group and person.':
    'È come gli stranieri residenti che hanno risposto al sondaggio vedono le persone del posto, non una misura di un popolo: le esperienze variano per città, gruppo e persona.',
  'Not among the {of} destinations InterNations ranked in {y}.': 'Non è tra le {of} destinazioni classificate da InterNations nel {y}.',
  'Crime recorded by the police': 'Reati registrati dalla polizia', 'England and Wales': 'Inghilterra e Galles',
  'Serious assault': 'Aggressioni gravi', 'Robbery': 'Rapine', 'Theft': 'Furti', 'Burglary': 'Furti in abitazione',
  '{what}: {v} per 100,000 people in {y}': '{what}: {v} ogni 100.000 abitanti nel {y}',
  'up {n}% since {y}': '+{n}% dal {y}', 'down {n}% since {y}': '−{n}% dal {y}', 'unchanged since {y}': 'invariato dal {y}',
  'Each country defines and records these offences differently, and people report crime more readily in some places than others: compare a country with itself over time, not countries with each other. The homicide rate above is the most comparable measure.':
    'Ogni paese definisce e registra questi reati in modo diverso, e in alcuni luoghi si denuncia più facilmente che in altri: confronta un paese con sé stesso nel tempo, non i paesi tra loro. Il tasso di omicidi qui sopra è la misura più confrontabile.',
  'No recent figure for this country in UNODC’s crime statistics.': 'Nessun dato recente per questo paese nelle statistiche sui reati dell’UNODC.',
  'Life expectancy at birth is {v} years ({y}).': 'La speranza di vita alla nascita è di {v} anni ({y}).',
  'No figure for this country in the World Bank’s health series.': 'Nessun dato per questo paese nelle serie sanitarie della Banca mondiale.',
  'The first-weeks research for this country could not be loaded. Check your connection and try again.':
    'Non è stato possibile caricare la ricerca sulle prime settimane per questo paese. Controlla la connessione e riprova.',
  'This is your own country, so there are no first steps to describe. Pick another passport to see what newcomers do.':
    'Questo è il tuo paese, quindi non ci sono primi passi da descrivere. Scegli un altro passaporto per vedere cosa fa chi arriva.',
  'Outside Admetia’s scope for this passport, as in Visas and permits above.':
    'Fuori dall’ambito di Admetia per questo passaporto, come in Visti e permessi qui sopra.',
  'Not covered by Admetia’s research for this passport yet.':
    'La ricerca di Admetia non copre ancora questo passaggio per questo passaporto.',
  'Visa regulations, legal limits, financial thresholds, and bilateral agreements change continuously: treat this as an indicative overview and always confirm current requirements on official sources before applying.':
    'Normative sui visti, limiti di legge, soglie economiche e accordi bilaterali cambiano continuamente: considera questo un quadro indicativo e verifica sempre i requisiti vigenti sulle fonti ufficiali prima di fare domanda.',
  'This research is past its review date ({date}): rules and figures may have changed since.':
    'Questa ricerca ha superato la data di revisione ({date}): regole e importi potrebbero essere cambiati.',
  'The visa research for this country could not be loaded. Check your connection and try again.':
    'Non è stato possibile caricare la ricerca sui visti per questo paese. Controlla la connessione e riprova.',
  'You move freely': 'Ti sposti liberamente', 'Watch out:': 'Attenzione:',
  'Traps people fall into': 'Le trappole più comuni', 'Not settled yet': 'Ancora da chiarire',
  'What the research could not confirm, or saw changing, when it was checked.':
    'Ciò che la ricerca non ha potuto confermare, o ha visto cambiare, al momento della verifica.',
  'Admetia’s visa research has no route for this passport here yet.':
    'La ricerca di Admetia sui visti non ha ancora un percorso per questo passaporto qui.',
  'Visas and permits: the full research, in Italian, with every case, trap and open question:':
    'Visti e permessi: la ricerca completa, con ogni caso, trappola e questione aperta:',
  'How hiring works in 46 countries': 'Come si viene assunti in 46 paesi', 'How hiring works in 46 countries — Admetia': 'Come si viene assunti in 46 paesi — Admetia',
  'How hiring works — Admetia': 'Come si viene assunti — Admetia',
  'Foreign desk · the way in, country by country': 'Esteri · la via d’ingresso, paese per paese',
  'The same questions asked of every country: what is the real way into a job, is a master’s expected, which language do employers need, what do they ask of an application, and how do graduates fare. Compare them below, or tell the planner where you are and what you want, and see the route most people take.':
    'Le stesse domande per ogni paese: qual è la vera via d’ingresso nel lavoro, serve una magistrale, quale lingua chiedono i datori di lavoro, che cosa si aspettano da una candidatura e come se la cavano i laureati. Confrontali qui sotto, oppure di’ al pianificatore dove sei e che cosa vuoi, e guarda la strada che segue la maggior parte delle persone.',
  'This country is not in Eurostat’s survey. Graduate and youth unemployment are the ILO’s modelled estimates, the same definition for every country outside Eurostat; any other figure has its own definition and year. Do not set either beside a Eurostat country’s.':
    'Questo paese non è nell’indagine Eurostat. La disoccupazione dei laureati e quella giovanile sono stime modellate dell’ILO, con la stessa definizione per tutti i paesi fuori da Eurostat; ogni altro dato ha una definizione e un anno propri. Non confrontare né gli uni né gli altri con un paese Eurostat.',
  'Plan your route': 'Pianifica la tua strada', 'Choose a country': 'Scegli un paese', 'Country': 'Paese',
  'Where you are now': 'Dove sei adesso', 'Still studying': 'Sto ancora studiando', 'Just graduated, or about to': 'Appena laureato, o quasi', 'Already working': 'Lavoro già',
  'What you want': 'Che cosa vuoi', 'Role family': 'Famiglia di ruoli', 'Any': 'Qualsiasi',
  'Pick a country to see the route most people take there for what you want to do, what it needs, and when it opens.':
    'Scegli un paese per vedere la strada che segue la maggior parte delle persone, ciò che serve e quando si apre.',
  'This country’s hiring research could not be loaded.': 'Non è stato possibile caricare la ricerca sulle assunzioni di questo paese.',
  'The route most used': 'La strada più usata', 'What it needs': 'Che cosa serve', 'When it opens': 'Quando si apre',
  'number {n} of {m} routes here': 'numero {n} di {m} strade qui', 'Also used:': 'Si usa anche:',
  'No route here is marked as specific to this path; this is the most common route overall.': 'Nessuna strada qui è indicata come specifica per questo percorso; questa è la più comune in generale.',
  'No dates found for this country and role family. See its page for the full picture.': 'Nessuna data trovata per questo paese e questa famiglia di ruoli. Vedi la sua pagina per il quadro completo.',
  'Open {country}’s page': 'Apri la pagina di {country}', 'Sources': 'Fonti',
  'Compare the countries': 'Confronta i paesi', 'A route in use': 'Una strada in uso',
  '{n} of {m} countries': '{n} paesi su {m}', 'No country matches all of these. Loosen one filter.': 'Nessun paese corrisponde a tutti questi criteri. Allenta un filtro.',
  'Most-used route': 'Strada più usata', 'Where this route ranks': 'Posizione di questa strada', 'Language': 'Lingua', 'Recent graduates in work': 'Neolaureati che lavorano',
  '† This country is not in Eurostat’s survey: its figure has its own definition (hover for it), so do not compare it with the others. The Eurostat figure is the employment rate of graduates aged 20-34 who finished 1 to 3 years ago.':
    '† Questo paese non è nell’indagine Eurostat: il suo dato ha una definizione propria (passaci sopra il mouse), quindi non confrontarlo con gli altri. Il dato Eurostat è il tasso di occupazione dei laureati di 20-34 anni che hanno finito da 1 a 3 anni fa.',
  'Open a country for the evidence behind every cell, its sources and the dates it was read.': 'Apri un paese per le prove dietro ogni cella, le fonti e le date di lettura.',
  'Compare all 46 countries': 'Confronta tutti i 46 paesi', 'Plan your route in this country': 'Pianifica la tua strada in questo paese',
  'How hiring works': 'Come si viene assunti', 'Hiring': 'Assunzioni',
  'There are many ways into a first job. This is the one most graduates here actually take, and it is rarely “apply on LinkedIn from abroad and hope”.':
    'Le strade per un primo lavoro sono tante. Questa è quella che la maggior parte dei laureati qui segue davvero, e raramente è “candidarsi su LinkedIn dall’estero e sperare”.',
  'This research is past its review date ({date}): hiring habits may have changed since.':
    'Questa ricerca ha superato la data di revisione ({date}): le abitudini di assunzione potrebbero essere cambiate.',
  'Most people get in through': 'Quasi tutti entrano attraverso',
  'When the economy turns': 'Quando l’economia gira', 'Where a field works differently': 'Dove un settore funziona diversamente',
  'Schools and people that open doors': 'Scuole e persone che aprono porte', 'Where students meet employers': 'Dove studenti e aziende si incontrano',
  'How to apply': 'Come candidarsi',
  'No field-specific account found for: {list}. The general route above applies as far as the research knows.':
    'Nessun resoconto specifico trovato per: {list}. Per quanto ne sa la ricerca, vale la strada generale descritta sopra.',
  'Admetia’s own reading of how hiring works here; no single source was read for it':
    'Lettura di Admetia di come si assume qui; non è stata letta una fonte specifica',
  'Our reading': 'Nostra lettura', 'as of {date}': 'aggiornata al {date}',
  '{n} sources, numbered in the order the page cites them': '{n} fonti, numerate nell’ordine in cui la pagina le cita',
  'Source {n}': 'Fonte {n}', 'Sources {a} to {b}': 'Fonti da {a} a {b}', 'Back to the text': 'Torna al testo',
  'Zoom in': 'Ingrandisci',
  'Zoom out': 'Riduci',
  'Reset the map': 'Ripristina la mappa',
  'Why it is a hub': 'Perché è un polo',
  'Sectors present': 'Settori presenti',
  'Named employers and ecosystems': 'Datori di lavoro ed ecosistemi citati',
  'Demand by role family': 'Domanda per famiglia di ruoli',
  'Inside finance': 'Dentro la finanza',
  'Adjacent paths': 'Percorsi affini',
  'Calculator programmes here': 'Programmi del calcolatore qui',
  'Family': 'Famiglia',
  'Level': 'Livello',
  'Based on': 'Fonti',
  'Not rated, no source found: {list}': 'Non valutato, nessuna fonte trovata: {list}',
  'Major sectors': 'Settori principali',
  'Main hub': 'Polo principale',
  'Main hubs': 'Poli principali',
  'Most-requested roles': 'Ruoli più richiesti',
  'Not rated: no source read puts any family at strong or dominant in this country.': 'Non valutati: nessuna fonte letta colloca una famiglia a livello forte o dominante in questo paese.',
  'Open the country page →': 'Apri la pagina del paese →',
  'Routes there on your passport are outside Admetia’s scope; the hubs above still apply.':
    'I percorsi con il tuo passaporto sono fuori dall’ambito di Admetia; i poli qui sopra restano validi.',
  'Data': 'Dati',
  'Employer-stated': 'Dichiarato dal datore di lavoro',
  'Practitioner consensus': 'Consenso degli esperti',
  'Anecdotal': 'Aneddotico',
  'Your Atlas passport is saved.': 'Il passaporto dell’Atlante è salvato.',

  'A world map of where graduates are hired, in and out of Europe: hubs, the roles each one hires for, and how to get there on your passport. Free and private.':
    'Una mappa del mondo di dove si assumono i laureati, verso l’Europa e dall’Europa: i poli, i ruoli per cui assume ciascuno e come arrivarci con il tuo passaporto. Gratuita e privata.',
  'Foreign desk · in, out and across Europe': 'Esteri · verso, dall’Europa e al suo interno',
  'Where the work is': 'Dove si trova il lavoro',
  'A country hires in many sectors, but each hub concentrates on a few kinds of role. Pick a country for what its hubs hire for, then open its page for how to get there on your passport.':
    'Un paese assume in molti settori, ma ogni polo si concentra su pochi tipi di ruolo. Scegli un paese per vedere per cosa assumono i suoi poli, poi apri la sua pagina per sapere come arrivarci con il tuo passaporto.',
  'Read this before you rely on the map': 'Leggi qui prima di fidarti della mappa',
  'A reality check on hubs and rules': 'Un bagno di realtà su poli e regole',
  'The Atlas is an informed starting point, not advice. Every rating is a judgement from the sources it cites, and every rule was read on the date shown beside it.':
    'L’Atlante è un punto di partenza informato, non una consulenza. Ogni valutazione è un giudizio basato sulle fonti che cita, e ogni regola è stata letta nella data indicata accanto.',
  '<strong>Demand levels are judgements.</strong> Dominant, strong, present and marginal summarise named employers, official statistics and specialist reports. None of them is a count of vacancies, and where nothing could be sourced the page says “not rated”.':
    '<strong>I livelli di domanda sono giudizi.</strong> Dominante, forte, presente e marginale riassumono datori di lavoro citati, statistiche ufficiali e rapporti specialistici. Nessuno è un conteggio dei posti vacanti, e dove non è stato possibile trovare una fonte la pagina scrive «non valutato».',
  '<strong>Immigration rules change without notice.</strong> Salary floors reset every January, quotas every year, and some routes close overnight. Check the official page linked beside each rule before you apply for anything.':
    '<strong>Le regole sull’immigrazione cambiano senza preavviso.</strong> Le soglie salariali si aggiornano ogni gennaio, le quote ogni anno, e alcuni percorsi chiudono dall’oggi al domani. Controlla la pagina ufficiale indicata accanto a ogni regola prima di presentare qualsiasi domanda.',
  '<strong>Your case is not the average case.</strong> Nationality, degree, age and employer all change which route applies. This page gives general information about published routes for a passport group, not immigration advice about your own case; in the UK, advice on an individual’s case may only be given by regulated advisers. For a decision with legal or tax consequences, ask an immigration lawyer or a tax adviser.':
    '<strong>Il tuo caso non è il caso medio.</strong> Cittadinanza, laurea, età e datore di lavoro cambiano il percorso applicabile. Questa pagina dà informazioni generali sui percorsi pubblicati per un gruppo di passaporti, non una consulenza di immigrazione sul tuo caso; nel Regno Unito la consulenza sul caso individuale può essere data solo da consulenti regolamentati. Per una decisione con conseguenze legali o fiscali, chiedi a un avvocato esperto di immigrazione o a un consulente fiscale.',
  'Nothing you choose on this page leaves your browser. The passport you pick is remembered here only, and “Clear everything” removes it.':
    'Nulla di ciò che scegli in questa pagina lascia il tuo browser. Il passaporto che scegli è ricordato solo qui, e «Cancella tutto» lo rimuove.',
  '<b class="rubric-in">Map data</b>Country shapes from Natural Earth (public domain), drawn as Italy recognises boundaries; no position on any boundary is implied. Simplified for the screen, so coastlines and borders are approximate.':
    '<b class="rubric-in">Dati cartografici</b>Forme dei paesi da Natural Earth (pubblico dominio), disegnate secondo i confini riconosciuti dall’Italia; non si intende prendere posizione su alcun confine. Semplificate per lo schermo, quindi coste e confini sono approssimativi.',
  '<b class="rubric-in">Colophon</b>Your choices never leave this browser. Visits are counted anonymously — which page, never which country.':
    '<b class="rubric-in">Colophon</b>Le tue scelte non lasciano mai questo browser. Le visite sono contate in forma anonima — quale pagina, mai quale paese.',

  /* ------------------------------------------------- Career Explorer */
  /* The interface around the research (careers/); the research itself
   * stays in English and carries translate="no". */
  'Careers':
    'Carriere',
  'Which kind of role, though? The <a href="careers/index.html">Career Explorer</a> sets out what each one involves, what it pays and how people get in.':
    'Ma quale ruolo? <a href="careers/index.html">Esplora le carriere</a> spiega che cosa comporta ciascuno, quanto paga e come si entra.',
  'Still deciding which job to aim for? The <a href="careers/index.html">Career Explorer</a> sets out what each role involves, what it pays and how people get in.':
    'Non hai ancora deciso a quale lavoro puntare? <a href="careers/index.html">Esplora le carriere</a> spiega che cosa comporta ogni ruolo, quanto paga e come si entra.',
  'Careers desk · what the jobs are, and the way in':
    'Pagina carriere · che cosa sono i lavori, e come si entra',
  'Career Explorer':
    'Esplora le carriere',
  'role families in':
    'famiglie di ruoli in',
  'fields: what the work is like, what it pays, how hard it is to get in and which degrees lead there. Start from what you studied, from a field, or from the job you want.':
    'settori: com’è il lavoro, quanto paga, quanto è difficile entrare e quali lauree ci portano. Parti da ciò che hai studiato, da un settore o dal lavoro che vuoi.',
  'Search every role':
    'Cerca tra tutti i ruoli',
  'e.g. private equity, SOC analyst, brand manager':
    'es. private equity, SOC analyst, brand manager',
  'Or browse':
    'Oppure sfoglia',
  'every role':
    'tutti i ruoli',
  ', or':
    ', oppure',
  'compare them side by side':
    'confrontali fianco a fianco',
  'Door one':
    'Prima porta',
  'I know what I studied':
    'So che cosa ho studiato',
  'Pick your background. You will see every field and role family it leads to, grouped by how well it fits.':
    'Scegli il tuo percorso di studi. Vedrai ogni settore e famiglia di ruoli a cui porta, raggruppati per quanto si adatta.',
  'Door two':
    'Seconda porta',
  'I know the field':
    'Conosco il settore',
  'Open a field for its map of areas and sectors, its role families with their scores, the employers and the backgrounds that fit.':
    'Apri un settore per vederne le aree, le famiglie di ruoli con i loro punteggi, i datori di lavoro e i percorsi di studi adatti.',
  'Door three':
    'Terza porta',
  'I know where I want to end up':
    'So dove voglio arrivare',
  'Find the role you want and read how people get there: the degrees, the programmes, the timeline and the exits.':
    'Trova il ruolo che vuoi e leggi come ci si arriva: le lauree, i programmi, i tempi e le uscite.',
  'All role families, searchable':
    'Tutte le famiglie di ruoli, con ricerca',
  'Compare roles: hours, stress, pay, entry':
    'Confronta i ruoli: ore, stress, stipendio, ingresso',
  'Italy pay add-on':
    'Appendice sugli stipendi in Italia',
  'Sources, scales and gaps':
    'Fonti, scale e lacune',
  'The thirteen fields':
    'I tredici settori',
  'Field':
    'Settore',
  'Depth':
    'Profondità',
  'Role families':
    'Famiglie di ruoli',
  'What it is':
    'Che cos’è',
  'Explorer':
    'Esplora',
  'By background':
    'Per studi',
  'By field':
    'Per settore',
  'All roles':
    'Tutti i ruoli',
  'Career Explorer — Admetia':
    'Esplora le carriere — Admetia',
  'What 124 graduate jobs in 13 fields are really like: the work, hours, stress, pay by region, the way in and the exits. Start from your degree, a field or the job you want.':
    'Come sono davvero 124 lavori per laureati in 13 settori: il lavoro, le ore, lo stress, lo stipendio per area, come si entra e le uscite. Parti dalla tua laurea, da un settore o dal lavoro che vuoi.',
  'Skip to content':
    'Vai al contenuto',
  'Career Explorer sections':
    'Sezioni di Esplora le carriere',
  'Read this before you rely on the explorer':
    'Leggi prima di fidarti di queste pagine',
  'A reality check on pay, hours and tiers':
    'Una verifica su stipendi, ore e classifiche',
  'Every figure here is dated and approximate, copied from the research with its source and year. Pay is in local currency and never converted. Tier lists reflect industry consensus and practitioner perception, not objective fact. Three limits apply to almost every page:':
    'Ogni cifra qui è datata e approssimativa, copiata dalla ricerca con la sua fonte e il suo anno. Gli stipendi sono in valuta locale e mai convertiti. Le classifiche dei datori di lavoro riflettono il consenso del settore e la percezione di chi ci lavora, non fatti oggettivi. Tre limiti valgono per quasi ogni pagina:',
  'The full list of gaps, the rating scales and the researchers’ assumptions are on the':
    'L’elenco completo delle lacune, le scale di valutazione e le ipotesi dei ricercatori sono nella',
  'sources page':
    'pagina delle fonti',
  'The research':
    'La ricerca',
  'Thirteen branch reports and an Italy pay add-on, researched on 9 October 2026 for Admetia. Nothing on these pages is advice; check the sources before relying on a number.':
    'Tredici rapporti di settore e un’appendice sugli stipendi in Italia, ricercati il 9 ottobre 2026 per Admetia. Niente in queste pagine è una consulenza: controlla le fonti prima di fidarti di una cifra.',
  'Strong fit':
    'Adatto',
  'role families':
    'famiglie di ruoli',
  'role family':
    'famiglia di ruoli',
  'Fields rated strong overall':
    'Settori con valutazione complessiva «adatto»',
  'Field rating':
    'Valutazione del settore',
  'Role families rated strong':
    'Famiglie di ruoli valutate «adatto»',
  'rating':
    'valutazione',
  'People/communication':
    'Persone/comunicazione',
  'People':
    'Persone',
  'Quantitative/technical':
    'Quantitativo/tecnico',
  'Quant':
    'Quant.',
  'Stress':
    'Stress',
  'Entry difficulty':
    'Difficoltà di ingresso',
  'Entry':
    'Ingresso',
  'Possible fit':
    'Possibile',
  'Fields rated possible overall':
    'Settori con valutazione complessiva «possibile»',
  'Role families rated possible':
    'Famiglie di ruoli valutate «possibile»',
  'Fields rated stretch overall':
    'Settori con valutazione complessiva «difficile»',
  'Role families rated stretch':
    'Famiglie di ruoli valutate «difficile»',
  'No field is rated strong overall for this background.':
    'Nessun settore ha valutazione complessiva «adatto» per questi studi.',
  'No field is rated possible overall for this background.':
    'Nessun settore ha valutazione complessiva «possibile» per questi studi.',
  'No field is rated stretch overall for this background.':
    'Nessun settore ha valutazione complessiva «difficile» per questi studi.',
  'No role family is rated strong for this background.':
    'Nessuna famiglia di ruoli è valutata «adatto» per questi studi.',
  'No role family is rated possible for this background.':
    'Nessuna famiglia di ruoli è valutata «possibile» per questi studi.',
  'No role family is rated stretch for this background.':
    'Nessuna famiglia di ruoli è valutata «difficile» per questi studi.',
  'If you studied':
    'Se hai studiato',
  'Every field and role family in the research, grouped by how well this background fits. A strong fit means the background is a standard feeder, not that entry is easy: check each role’s entry difficulty.':
    'Ogni settore e famiglia di ruoli della ricerca, raggruppati per quanto questi studi si adattano. «Adatto» significa che questi studi sono un canale d’ingresso abituale, non che entrare sia facile: controlla la difficoltà di ingresso di ogni ruolo.',
  'Ratings: the background fit matrix in the research index (section 3), one letter per role family; reasons: section 5 of each field’s report. See also':
    'Valutazioni: la matrice di adattamento nell’indice della ricerca (sezione 3), una lettera per famiglia di ruoli; motivazioni: sezione 5 del rapporto di ogni settore. Vedi anche',
  'the whole matrix':
    'la matrice completa',
  'Other backgrounds':
    'Altri studi',
  'Next background':
    'Studi successivi',
  'Previous background':
    'Studi precedenti',
  'Breadcrumb':
    'Percorso',
  'Role families and their scores':
    'Famiglie di ruoli e punteggi',
  '(from the research index; 1-5 scales on the sources page)':
    '(dall’indice della ricerca; scale da 1 a 5 nella pagina delle fonti)',
  'Hours/week (peak)':
    'Ore/settimana (picco)',
  'Italy pay (add-on)':
    'Stipendi in Italia (appendice)',
  'Verify before relying':
    'Verifica prima di fidarti',
  'Parts of this field to check first':
    'Parti di questo settore da verificare prima',
  'Parts of this page to check first':
    'Parti di questa pagina da verificare prima',
  'Italian pay: what is still missing':
    'Stipendi in Italia: che cosa manca ancora',
  'The research index lists these as gaps or low-confidence areas to check against primary sources. Quoted from index.md, section 6 (full list on the':
    'L’indice della ricerca le elenca come lacune o aree poco affidabili da verificare sulle fonti primarie. Citazione da index.md, sezione 6 (elenco completo nella',
  'Each background’s full list of roles:':
    'L’elenco completo dei ruoli per ogni percorso di studi:',
  'From the Italy pay addendum (compiled 9 October 2026), which fills Italian gaps across all thirteen reports. How to read RAL, net pay and the 13th month:':
    'Dall’appendice sugli stipendi in Italia (compilata il 9 ottobre 2026), che colma le lacune italiane dei tredici rapporti. Come leggere RAL, netto e tredicesima:',
  'Other fields':
    'Altri settori',
  'Next field':
    'Settore successivo',
  'Previous field':
    'Settore precedente',
  'At a glance':
    'In breve',
  'Hours a week, typical (peak)':
    'Ore a settimana, tipiche (picco)',
  'Entry pay: US / UK / Italy (approx.)':
    'Stipendio d’ingresso: USA / Regno Unito / Italia (indicativo)',
  'How to get there':
    'Come arrivarci',
  'From the cross-field comparison in the research index; scales on the':
    'Dal confronto tra settori nell’indice della ricerca; scale nella',
  '. “n.r.d.” means no reliable data found.':
    '. «n.r.d.» significa che non sono stati trovati dati affidabili.',
  'Where this role connects':
    'Dove porta questo ruolo',
  'Roles named in its exit opportunities':
    'Ruoli citati tra le sue uscite',
  'named as':
    'citato come',
  'Roles whose exits lead here':
    'Ruoli le cui uscite portano qui',
  'No other role family names this one in its exits.':
    'Nessun’altra famiglia di ruoli cita questa tra le sue uscite.',
  'Other roles in':
    'Altri ruoli in',
  'Similar scores in other fields':
    'Punteggi simili in altri settori',
  'The closest matches on the four 1-5 scores (people, quant, stress, entry difficulty). A similar profile, not the same work.':
    'I più vicini sui quattro punteggi da 1 a 5 (persone, quantitativo, stress, difficoltà di ingresso). Un profilo simile, non lo stesso lavoro.',
  'Which backgrounds fit':
    'Quali studi sono adatti',
  'From the background fit matrix in the research index. The reasons are on each background’s page and in section 5 of the field’s report:':
    'Dalla matrice di adattamento nell’indice della ricerca. Le motivazioni sono nella pagina di ogni percorso di studi e nella sezione 5 del rapporto del settore:',
  'Master’s calculators on this site':
    'Calcolatori per i master su questo sito',
  'Master in Finance calculator':
    'Calcolatore Master in Finance',
  'Master in Management calculator':
    'Calcolatore Master in Management',
  'Marketing master’s calculator':
    'Calcolatore master in Marketing',
  'Computer Science master’s calculator':
    'Calcolatore master in Informatica',
  'Data Science & AI master’s calculator':
    'Calcolatore master in Data Science e IA',
  'Conversion master’s calculator (if you studied something else)':
    'Calcolatore master di conversione (se hai studiato altro)',
  'MBA calculator':
    'Calcolatore MBA',
  'All roles in':
    'Tutti i ruoli in',
  'next':
    'successivo',
  'previous':
    'precedente',
  'Rows from the Italy pay addendum (9 October 2026) that match this role. The match is the editors’; each row keeps the add-on’s own label, source and confidence. All rows for the field:':
    'Righe dell’appendice sugli stipendi in Italia (9 ottobre 2026) che corrispondono a questo ruolo. L’abbinamento è della redazione; ogni riga conserva l’etichetta, la fonte e l’affidabilità dell’appendice. Tutte le righe del settore:',
  '; how to read Italian pay:':
    '; come leggere gli stipendi italiani:',
  'Other roles in this field':
    'Altri ruoli di questo settore',
  'Back to':
    'Torna a',
  'Next role':
    'Ruolo successivo',
  'Previous role':
    'Ruolo precedente',
  'The Italy pay add-on has no row for this role family. The Italian figures the report itself found, if any, are under the pay section above.':
    'L’appendice sugli stipendi in Italia non ha righe per questa famiglia di ruoli. Le cifre italiane trovate dal rapporto, se ci sono, sono nella sezione sullo stipendio più sopra.',
  'None of the exits above names another role family exactly. Read them in full, or browse the related roles below.':
    'Nessuna delle uscite qui sopra nomina esattamente un’altra famiglia di ruoli. Leggile per intero, o sfoglia i ruoli collegati qui sotto.',
  'From the add-on’s table for':
    'Dalla tabella dell’appendice per',
  'All role families':
    'Tutte le famiglie di ruoli',
  'Every role in the research. Search by job title, employer or skill, or narrow the list by field and scores, then open a role for how to get there.':
    'Ogni ruolo della ricerca. Cerca per nome del lavoro, datore di lavoro o competenza, oppure restringi l’elenco per settore e punteggi, poi apri un ruolo per vedere come arrivarci.',
  'Filter roles':
    'Filtra i ruoli',
  'Search':
    'Cerca',
  'Job title, employer or skill':
    'Lavoro, datore di lavoro o competenza',
  'All fields':
    'Tutti i settori',
  'Entry difficulty at most':
    'Difficoltà di ingresso al massimo',
  'Stress at most':
    'Stress al massimo',
  'Leans':
    'Tende a',
  'Either way':
    'Indifferente',
  'More quantitative than people':
    'Più numeri che persone',
  'More people than quantitative':
    'Più persone che numeri',
  'Even':
    'In equilibrio',
  'No role matches these filters.':
    'Nessun ruolo corrisponde a questi filtri.',
  'All role families — Career Explorer — Admetia':
    'Tutte le famiglie di ruoli — Esplora le carriere — Admetia',
  'Search and filter all 124 role families by field, entry difficulty, stress and profile.':
    'Cerca e filtra tutte le 124 famiglie di ruoli per settore, difficoltà di ingresso, stress e profilo.',
  'Compare roles':
    'Confronta i ruoli',
  'Hours, stress, how much of the job is people or numbers, entry pay and how hard it is to get in, for every role family. Sort a column, filter, or tick up to three roles to set them side by side.':
    'Ore, stress, quanto il lavoro è fatto di persone o di numeri, stipendio d’ingresso e difficoltà di ingresso, per ogni famiglia di ruoli. Ordina una colonna, filtra, o spunta fino a tre ruoli per metterli fianco a fianco.',
  'Filter the table':
    'Filtra la tabella',
  'Role name':
    'Nome del ruolo',
  'Side by side':
    'Fianco a fianco',
  'Tick up to three roles in the table.':
    'Spunta fino a tre ruoli nella tabella.',
  'All role families compared':
    'Tutte le famiglie di ruoli a confronto',
  'Entry pay cannot be sorted: the research gives it in local currency, base or total, by city and year, and does not convert it. Scores sort on the lowest figure given (“3-4” as 3, “4 (5 at top boutiques)” as 4); hours on the first (“75-85 (100-120)” as 75). Scales:':
    'Lo stipendio d’ingresso non si può ordinare: la ricerca lo riporta in valuta locale, base o totale, per città e anno, e non lo converte. I punteggi si ordinano sulla cifra più bassa indicata («3-4» vale 3, «4 (5 at top boutiques)» vale 4); le ore sulla prima («75-85 (100-120)» vale 75). Scale:',
  'Compare roles — Career Explorer — Admetia':
    'Confronta i ruoli — Esplora le carriere — Admetia',
  'Sort and filter every role family by hours, stress, people vs quantitative work, entry pay and entry difficulty; set up to three side by side.':
    'Ordina e filtra ogni famiglia di ruoli per ore, stress, lavoro con le persone o con i numeri, stipendio d’ingresso e difficoltà di ingresso; mettine fino a tre fianco a fianco.',
  'How the research was done, the scales every score uses, what the researchers assumed, what is still uncertain, and every source each report cites.':
    'Come è stata fatta la ricerca, le scale di ogni punteggio, che cosa hanno ipotizzato i ricercatori, che cosa è ancora incerto, e ogni fonte citata da ciascun rapporto.',
  'About the research':
    'La ricerca',
  'Shared scales and conventions':
    'Scale e convenzioni comuni',
  'Background fit matrix':
    'Matrice di adattamento per studi',
  'Assumptions made':
    'Ipotesi adottate',
  'Gaps and low-confidence areas':
    'Lacune e aree poco affidabili',
  'Gaps and low-confidence areas to verify':
    'Lacune e aree poco affidabili da verificare',
  'Sources by report':
    'Fonti per rapporto',
  'Italian pay has its own page:':
    'Gli stipendi italiani hanno una pagina a parte:',
  'Role-family ratings are on each background’s page:':
    'Le valutazioni per famiglia di ruoli sono nella pagina di ogni percorso di studi:',
  'Open the field':
    'Apri il settore',
  'Sources, scales and gaps — Career Explorer — Admetia':
    'Fonti, scale e lacune — Esplora le carriere — Admetia',
  'The sources behind every Career Explorer page, the 1-5 rating scales, the researchers’ assumptions and the list of gaps to verify.':
    'Le fonti dietro ogni pagina di Esplora le carriere, le scale di valutazione da 1 a 5, le ipotesi dei ricercatori e l’elenco delle lacune da verificare.',
  'Italian pay, field by field':
    'Stipendi in Italia, settore per settore',
  'How to read Italian pay':
    'Come leggere gli stipendi italiani',
  'Pay by field and role family':
    'Stipendi per settore e famiglia di ruoli',
  'Graduate outcome benchmarks':
    'Dati di riferimento sugli sbocchi dei laureati',
  'Italy pay':
    'Stipendi in Italia',
  'Italy pay add-on — Career Explorer — Admetia':
    'Appendice sugli stipendi in Italia — Esplora le carriere — Admetia',
  'Italian gross pay (RAL) by field and role family from recruiter guides, contract tables and postings, with source, year and confidence for every row.':
    'Stipendi lordi italiani (RAL) per settore e famiglia di ruoli da guide dei recruiter, tabelle contrattuali e annunci, con fonte, anno e affidabilità per ogni riga.',
  '{n} of {total} role families shown':
    '{n} famiglie di ruoli su {total}',
  'No role matches “{q}”.':
    'Nessun ruolo corrisponde a «{q}».',
  'Search could not load here. Every role is listed on the All roles page.':
    'La ricerca non si è caricata. Ogni ruolo è elencato nella pagina Tutti i ruoli.',
  '{n} of {max} chosen. Untick a role in the table, or remove it here.':
    '{n} su {max} scelti. Togli la spunta nella tabella, o rimuovilo qui.',
  'Remove':
    'Rimuovi',

  /* ------------------------------------------------- Career Compass */
  /* careers/compass.html and careers/assets/compass.js; the quoted
   * research stays in English (translate="no"). */
  'Door zero':
    'Porta zero',
  'I don’t know yet':
    'Non lo so ancora',
  'Answer 8 to 17 questions about what you studied, what you would enjoy doing and how you want to work. The Career Compass ranks the role families against your answers and shows why, what stands in the way, and a door that is still open.':
    'Rispondi a 8-17 domande su che cosa hai studiato, che cosa ti piacerebbe fare e come vuoi lavorare. La Bussola delle carriere ordina le famiglie di ruoli in base alle tue risposte e mostra perché, che cosa si mette di traverso e una porta ancora aperta.',
  'Take the Career Compass':
    'Usa la Bussola delle carriere',
  'Compass':
    'Bussola',
  'Career Compass · for when you have not decided yet':
    'Bussola delle carriere · per quando non hai ancora deciso',
  'Career Compass':
    'Bussola delle carriere',
  'A short questionnaire that ranks all 124 role families in the Career Explorer against what you studied, what you would enjoy doing and how you want to work, and shows the reasons, the obstacles and the research behind each one.':
    'Un breve questionario che ordina tutte le 124 famiglie di ruoli di Esplora le carriere in base a che cosa hai studiato, che cosa ti piacerebbe fare e come vuoi lavorare, e mostra per ciascuna le ragioni, gli ostacoli e la ricerca su cui si basa.',
  'You have answers saved in this browser.':
    'Hai delle risposte salvate in questo browser.',
  'Pick up where you left off':
    'Riprendi da dove eri rimasto',
  'Clear them':
    'Cancellale',
  'Quick':
    'Rapida',
  '8 questions, about 2 minutes: your degree, your stage, the work you would enjoy, and how you want to work.':
    '8 domande, circa 2 minuti: la tua laurea, a che punto sei, il lavoro che ti piacerebbe e come vuoi lavorare.',
  'Start the quick version':
    'Inizia la versione rapida',
  'Full':
    'Completa',
  '17 questions, about 6 minutes. Adds citizenship, languages and where you want to work, pressure and competition, employers, sectors, more study and AI.':
    '17 domande, circa 6 minuti. Aggiunge cittadinanza, lingue e dove vuoi lavorare, pressione e concorrenza, datori di lavoro, settori, altri studi e intelligenza artificiale.',
  'Start the full version':
    'Inizia la versione completa',
  'The Career Compass needs JavaScript. Without it, start from':
    'La Bussola delle carriere richiede JavaScript. Senza, parti da',
  'what you studied':
    'che cosa hai studiato',
  'compare every role':
    'confronta tutti i ruoli',
  'What you get':
    'Che cosa ottieni',
  'Three fields and eight role families that fit now, plus those that fit later, after a PhD or a first job elsewhere.':
    'Tre settori e otto famiglie di ruoli adatte adesso, più quelle adatte più avanti, dopo un dottorato o un primo lavoro altrove.',
  'For each role, the answers that moved it up or down, its scores, and the research’s own lines on the main door, language, visas, AI and whether a master’s helps.':
    'Per ogni ruolo, le risposte che lo hanno fatto salire o scendere, i suoi punteggi e le righe della ricerca su porta d’ingresso principale, lingua, visti, IA e utilità di un master.',
  'A door that is still open for every hard-to-enter role, and what would change your list.':
    'Una porta ancora aperta per ogni ruolo difficile da raggiungere, e che cosa cambierebbe la tua lista.',
  'The myths and constraints your answers run into, quoted from the research.':
    'I miti e i vincoli in cui si imbattono le tue risposte, citati dalla ricerca.',
  'What it is not':
    'Che cosa non è',
  'Not a personality test: no types, no labels, nothing said about you that you did not say.':
    'Non è un test di personalità: niente tipi, niente etichette, nulla su di te che tu non abbia detto.',
  'Not a prediction. Interest tests predict job satisfaction only weakly; the results end with cheap ways to test a career for real.':
    'Non è una previsione. I test sugli interessi prevedono la soddisfazione sul lavoro solo debolmente; i risultati si chiudono con modi economici per mettere alla prova una carriera dal vero.',
  'Not advice. Every figure is dated and approximate, with its source on the role pages.':
    'Non è una consulenza. Ogni cifra è datata e approssimativa, con la fonte nelle pagine dei ruoli.',
  'Your answers':
    'Le tue risposte',
  'Scored in this browser. Nothing is sent anywhere, and there is no account.':
    'Calcolate in questo browser. Non viene inviato nulla e non serve un account.',
  'Saved in this browser so you can come back; “Start again” clears them.':
    'Salvate in questo browser perché tu possa tornarci; «Ricomincia» le cancella.',
  'A share link carries them after the “#” in the address, which browsers do not send to servers.':
    'Un link da condividere le porta dopo il «#» nell’indirizzo, che i browser non inviano ai server.',
  'Career Compass — Career Explorer — Admetia':
    'Bussola delle carriere — Esplora le carriere — Admetia',
  'A short questionnaire for undecided students: ranks 124 graduate role families against your degree, interests and constraints, and shows why, what stands in the way, and what to check next.':
    'Un breve questionario per chi non ha ancora deciso: ordina 124 famiglie di ruoli per laureati in base a laurea, interessi e vincoli, e mostra perché, che cosa si mette di traverso e che cosa verificare dopo.',
  'Mostly solo work':
    'Lavoro quasi sempre da solo',
  'Mostly solo, with some teamwork':
    'Per lo più da solo, con un po’ di lavoro di squadra',
  'Regular team and stakeholder contact':
    'Contatto regolare con il team e gli interlocutori',
  'A lot of client or team contact':
    'Molto contatto con clienti o team',
  'The job is mainly relationships and persuasion':
    'Il lavoro è soprattutto relazioni e persuasione',
  'Basic numeracy':
    'Calcolo di base',
  'Comfortable with spreadsheets':
    'A mio agio con i fogli di calcolo',
  'Solid spreadsheets, modelling or statistics, some scripting':
    'Fogli di calcolo solidi, modelli o statistica, un po’ di programmazione',
  'Strong statistics or programming':
    'Statistica o programmazione avanzate',
  'Advanced maths, statistics or programming is the job':
    'Matematica, statistica o programmazione avanzate sono il lavoro',
  'Low, predictable deadlines':
    'Bassa, scadenze prevedibili',
  'Occasional crunch':
    'Picchi occasionali',
  'Regular deadlines and steady pressure':
    'Scadenze regolari e pressione costante',
  'Frequent high-stakes pressure':
    'Pressione frequente su decisioni importanti',
  'Sustained extreme pressure':
    'Pressione estrema e prolungata',
  'Many openings, open to most graduates':
    'Molte posizioni, aperte alla maggior parte dei laureati',
  'Some competition':
    'Un po’ di concorrenza',
  'Competitive: needs a relevant internship or skills':
    'Competitivo: serve uno stage o competenze pertinenti',
  'Very competitive':
    'Molto competitivo',
  'Extremely selective: low single-digit acceptance rates':
    'Estremamente selettivo: tassi di ammissione di pochi punti percentuali',
  'Build software and systems':
    'Costruire software e sistemi',
  'back ends, apps, data pipelines':
    'back end, app, pipeline di dati',
  'Analyse data to answer business questions':
    'Analizzare dati per rispondere a domande di business',
  'SQL, dashboards, experiments':
    'SQL, dashboard, esperimenti',
  'Build models with maths, statistics or code':
    'Costruire modelli con matematica, statistica o codice',
  'pricing, forecasting, machine learning':
    'prezzi, previsioni, machine learning',
  'Protect systems and investigate incidents':
    'Proteggere sistemi e indagare sugli incidenti',
  'security monitoring, forensics':
    'monitoraggio della sicurezza, informatica forense',
  'Advise clients on their problems':
    'Consigliare i clienti sui loro problemi',
  'consulting, advisory work':
    'consulenza, advisory',
  'Negotiate, structure and close deals':
    'Negoziare, strutturare e chiudere operazioni',
  'M&A, financing, buying':
    'M&A, finanziamenti, acquisti',
  'Judge markets and pick investments':
    'Valutare i mercati e scegliere investimenti',
  'trading, asset management':
    'trading, gestione patrimoniale',
  'Persuade, sell and win customers':
    'Convincere, vendere e conquistare clienti',
  'sales, client relationships':
    'vendite, relazioni con i clienti',
  'Create brands, products and campaigns':
    'Creare marchi, prodotti e campagne',
  'marketing, product design':
    'marketing, progettazione di prodotto',
  'Plan operations and make things run':
    'Pianificare le operazioni e far funzionare le cose',
  'supply chains, projects, programmes':
    'supply chain, progetti, programmi',
  'Check, audit and report numbers or rules':
    'Controllare, verificare e rendicontare numeri o regole',
  'audit, controlling, compliance':
    'revisione, controllo di gestione, compliance',
  'Research and write about economies, markets or policy':
    'Studiare e scrivere di economie, mercati o politiche pubbliche',
  'economics, research, policy':
    'economia, ricerca, politiche pubbliche',
  'Lead and develop people':
    'Guidare e far crescere le persone',
  'HR, managing teams':
    'risorse umane, gestione di team',
  'What did you study, or are you studying?':
    'Che cosa hai studiato, o stai studiando?',
  'Up to two, for a double degree.':
    'Fino a due, per un doppio titolo.',
  'The research rates eleven degree backgrounds as a strong, possible or stretch fit for every role (research/branches/index.md, section 3). Other degrees are not rated, so they do not move your scores.':
    'La ricerca classifica undici percorsi di laurea come adatti, possibili o una forzatura per ogni ruolo (research/branches/index.md, sezione 3). Le altre lauree non sono classificate, quindi non spostano i tuoi punteggi.',
  'Engineering, maths or physics':
    'Ingegneria, matematica o fisica',
  'Natural or life sciences':
    'Scienze naturali o della vita',
  'Humanities, law or social sciences':
    'Lettere, giurisprudenza o scienze sociali',
  'Something else':
    'Altro',
  'Where are you now?':
    'A che punto sei?',
  'Graduate schemes and pre-experience master’s count their windows from your graduation date, so the right next step depends on where you are (decisions/decision-framework.md).':
    'I programmi per neolaureati e i master pre-esperienza contano le loro finestre dalla data di laurea, quindi il passo giusto dipende da dove sei (decisions/decision-framework.md).',
  'Bachelor’s, first or second year':
    'Triennale, primo o secondo anno',
  'Bachelor’s, final year':
    'Triennale, ultimo anno',
  'In a master’s':
    'Durante un master o una magistrale',
  'Graduated less than two years ago':
    'Laureato da meno di due anni',
  'Working, two years or more':
    'Lavoro da due anni o più',
  'Your citizenship':
    'La tua cittadinanza',
  'Citizenship and languages prune more options than anything else: since Brexit an EU citizen needs a UK visa like anyone else (decisions/decision-framework.md, step 0).':
    'Cittadinanza e lingue tagliano più opzioni di qualunque altra cosa: dopo la Brexit un cittadino UE ha bisogno di un visto per il Regno Unito come chiunque altro (decisions/decision-framework.md, passo 0).',
  'EU, EEA or Swiss':
    'UE, SEE o Svizzera',
  'United Kingdom':
    'Regno Unito',
  'United States':
    'Stati Uniti',
  'Another country':
    'Un altro paese',
  'Languages you speak at B2/C1 or better':
    'Lingue che parli a livello B2/C1 o superiore',
  'Only 2–3% of German job postings waive German, and German-speaking strategy consulting treats fluent German as mandatory (decisions/decision-framework.md).':
    'Solo il 2-3% degli annunci di lavoro tedeschi rinuncia al tedesco, e la consulenza strategica di lingua tedesca considera obbligatorio un tedesco fluente (decisions/decision-framework.md).',
  'German':
    'Tedesco',
  'French':
    'Francese',
  'Italian':
    'Italiano',
  'Spanish':
    'Spagnolo',
  'Portuguese':
    'Portoghese',
  'Dutch':
    'Olandese',
  'A Nordic language':
    'Una lingua nordica',
  'Where would you like to start working?':
    'Dove vorresti iniziare a lavorare?',
  'Up to three.':
    'Fino a tre.',
  'The research’s advice is to choose the country you want to work in first, then study there or in a school that feeds it (decisions/decision-framework.md, step 2).':
    'Il consiglio della ricerca è scegliere prima il paese in cui vuoi lavorare, poi studiare lì o in una scuola che vi porta (decisions/decision-framework.md, passo 2).',
  'Germany, Austria or Switzerland':
    'Germania, Austria o Svizzera',
  'Belgium, Netherlands or Luxembourg':
    'Belgio, Paesi Bassi o Lussemburgo',
  'Nordic countries':
    'Paesi nordici',
  'Spain or Portugal':
    'Spagna o Portogallo',
  'The Gulf or Asia':
    'Golfo o Asia',
  'Open, or I don’t know yet':
    'Aperto, o non lo so ancora',
  'Which of these would you most enjoy spending your days on?':
    'A quali di queste attività ti piacerebbe di più dedicare le giornate?',
  'Pick up to four. This counts most.':
    'Scegline fino a quattro. È la domanda che conta di più.',
  'Interest is the best starting point for a shortlist; skills and credentials decide whether you can get in, and the later questions cover those.':
    'L’interesse è il miglior punto di partenza per una rosa di opzioni; competenze e titoli decidono se riesci a entrare, e le domande successive se ne occupano.',
  'And one you would rather avoid?':
    'E una che preferiresti evitare?',
  'A role whose core is something you would rather avoid moves down the list; it is never removed.':
    'Un ruolo il cui nucleo è qualcosa che preferiresti evitare scende nella lista; non viene mai tolto.',
  'Nothing in particular':
    'Niente in particolare',
  'How much of the job should be about people?':
    'Quanto del lavoro dovrebbe riguardare le persone?',
  'The research scores every role from 1 (mostly solo) to 5 (the job is mainly relationships, persuasion and client work).':
    'La ricerca dà a ogni ruolo un punteggio da 1 (quasi sempre da solo) a 5 (il lavoro è soprattutto relazioni, persuasione e clienti).',
  'How technical should it be?':
    'Quanto dovrebbe essere tecnico?',
  'Scored 1 (basic numeracy) to 5 (advanced maths, statistics or programming is the core of the job). A role more technical than you want costs more than one less technical.':
    'Punteggio da 1 (calcolo di base) a 5 (matematica, statistica o programmazione avanzate sono il cuore del lavoro). Un ruolo più tecnico di quanto vorresti pesa più di uno meno tecnico.',
  'What working week would you accept for the first three years?':
    'Quale settimana lavorativa accetteresti per i primi tre anni?',
  'Hours are the researchers’ estimates from practitioner accounts; no systematic hours survey by role exists (research/branches/index.md, section 6).':
    'Le ore sono stime dei ricercatori basate su resoconti di chi fa il lavoro; non esiste un’indagine sistematica sulle ore per ruolo (research/branches/index.md, sezione 6).',
  'About 40 hours':
    'Circa 40 ore',
  'About 50 hours':
    'Circa 50 ore',
  'About 60 hours':
    'Circa 60 ore',
  '70 hours or more':
    '70 ore o più',
  'The most pressure you would accept':
    'La pressione massima che accetteresti',
  'Only roles above what you accept lose points; a calmer role never does.':
    'Perdono punti solo i ruoli sopra quello che accetti; un ruolo più tranquillo mai.',
  'How competitive a door are you ready to try?':
    'Quanto è competitiva la porta che sei pronto a tentare?',
  'Entry difficulty is scored 1 to 5. A hard door is not a reason to skip a role: the results pair each one with a door that is still open.':
    'La difficoltà d’ingresso va da 1 a 5. Una porta difficile non è un motivo per scartare un ruolo: i risultati affiancano a ciascuna una porta ancora aperta.',
  'What matters most to you?':
    'Che cosa conta di più per te?',
  'Pick two.':
    'Scegline due.',
  'Pay, upside, exits and stability are our reading of each role’s research page, on a three-step scale; time for a life outside work comes from the role’s hours and stress scores.':
    'Stipendio, margini di crescita, sbocchi e stabilità sono la nostra lettura della pagina di ricerca di ogni ruolo, su una scala a tre gradini; il tempo per una vita fuori dal lavoro deriva dai punteggi di ore e stress del ruolo.',
  'A high starting salary':
    'Uno stipendio d’ingresso alto',
  'High pay in the long run':
    'Uno stipendio alto nel lungo periodo',
  'Time for a life outside work':
    'Tempo per una vita fuori dal lavoro',
  'Learning, and options to move later':
    'Imparare, e opzioni per cambiare più avanti',
  'A stable way in':
    'Un ingresso stabile',
  'Public impact or a mission':
    'Impatto pubblico o una missione',
  'Making things: creative work':
    'Creare: lavoro creativo',
  'More study you would consider':
    'Altri studi che prenderesti in considerazione',
  'Some roles are rarely a first job without a PhD; others train you for a qualification on the job.':
    'Alcuni ruoli sono raramente un primo lavoro senza dottorato; altri ti preparano a un’abilitazione professionale mentre lavori.',
  'A master’s':
    'Un master o una magistrale',
  'A PhD':
    'Un dottorato',
  'A professional qualification (ACA/ACCA, CPA, CFA)':
    'Un’abilitazione professionale (ACA/ACCA, CPA, CFA)',
  'No more study':
    'Nessun altro studio',
  'What kind of employer would you enjoy?':
    'Che tipo di datore di lavoro ti piacerebbe?',
  'Up to two.':
    'Fino a due.',
  'Each field’s report compares its employer types (banks, consultancies, companies, public bodies); each role is tagged with where it mostly sits.':
    'Il rapporto di ogni settore confronta i suoi tipi di datore di lavoro (banche, società di consulenza, aziende, enti pubblici); ogni ruolo è etichettato con il luogo dove si trova più spesso.',
  'A bank, fund or financial firm':
    'Una banca, un fondo o una società finanziaria',
  'A consulting or professional-services firm':
    'Una società di consulenza o di servizi professionali',
  'A large company':
    'Una grande azienda',
  'A tech company':
    'Un’azienda tecnologica',
  'A startup':
    'Una startup',
  'The public sector or an international organisation':
    'Il settore pubblico o un’organizzazione internazionale',
  'An agency or boutique':
    'Un’agenzia o una boutique',
  'A university or research lab':
    'Un’università o un laboratorio di ricerca',
  'No preference':
    'Nessuna preferenza',
  'Any sectors that attract you?':
    'Ci sono settori che ti attirano?',
  'Optional.':
    'Facoltativo.',
  'Sector research that is not in the role pages: pharma, luxury, commodities, industry and defence, public policy, tech business, and a few smaller sectors (research/careers/).':
    'Ricerca di settore che non è nelle pagine dei ruoli: farmaceutico, lusso, materie prime, industria e difesa, politiche pubbliche, business tecnologico e qualche settore più piccolo (research/careers/).',
  'Pharma and health':
    'Farmaceutico e sanità',
  'Luxury and fashion':
    'Lusso e moda',
  'Energy and commodities':
    'Energia e materie prime',
  'Industry, automotive and defence':
    'Industria, automotive e difesa',
  'Public sector and EU institutions':
    'Settore pubblico e istituzioni UE',
  'Tech and startups':
    'Tecnologia e startup',
  'Sports and gaming':
    'Sport e videogiochi',
  'Real estate':
    'Immobiliare',
  'Sustainability and climate':
    'Sostenibilità e clima',
  'How much does AI pressure on junior hiring worry you?':
    'Quanto ti preoccupa la pressione dell’IA sulle assunzioni junior?',
  'Junior hiring is falling in the most AI-exposed jobs, not wages, and not yet whole professions (evidence/trends.md).':
    'Nei lavori più esposti all’IA calano le assunzioni junior, non gli stipendi, e non ancora intere professioni (evidence/trends.md).',
  'Not much':
    'Poco',
  'Somewhat':
    'Abbastanza',
  'A lot':
    'Molto',
  'Where you start':
    'Da dove parti',
  'Constraints first: they prune more options than preferences do.':
    'Prima i vincoli: tagliano più opzioni delle preferenze.',
  'What you would enjoy doing':
    'Che cosa ti piacerebbe fare',
  'The activities behind each job, not the job titles.':
    'Le attività dietro ogni lavoro, non i titoli.',
  'How you want to work':
    'Come vuoi lavorare',
  'People, technical depth, hours, pressure and competition, on the research’s own scales.':
    'Persone, profondità tecnica, ore, pressione e concorrenza, sulle scale della ricerca.',
  'What matters, and what next':
    'Che cosa conta, e poi',
  'Motives, more study, employers and sectors.':
    'Motivazioni, altri studi, datori di lavoro e settori.',
  '{n} of {max} chosen':
    '{n} su {max} scelti',
  'You would need a visa or a sponsoring employer in: {places}.':
    'Ti servirebbe un visto o un datore di lavoro che faccia da sponsor in: {places}.',
  'Since Brexit an EU citizen needs a UK visa, and from 1 January 2027 the Graduate visa lasts 18 months.':
    'Dopo la Brexit un cittadino UE ha bisogno di un visto per il Regno Unito, e dal 1° gennaio 2027 il Graduate visa dura 18 mesi.',
  'No working language yet for: {places}. Roles where the local language is usually required will say so and move down.':
    'Non hai ancora una lingua di lavoro per: {places}. I ruoli in cui di solito serve la lingua locale lo diranno e scenderanno.',
  'Progress':
    'Avanzamento',
  'Quick version':
    'Versione rapida',
  'Full version':
    'Versione completa',
  'Back to the start':
    'Torna all’inizio',
  'Back':
    'Indietro',
  'See my shortlist':
    'Vedi la mia rosa',
  'Next':
    'Avanti',
  'Every question can be skipped; a skipped answer counts as neutral.':
    'Ogni domanda si può saltare; una risposta saltata conta come neutra.',
  'Strong match':
    'Molto adatto',
  'Good match':
    'Adatto',
  'Worth a look':
    'Da guardare',
  'Weak match':
    'Poco adatto',
  'about 40':
    'circa 40',
  'about 50':
    'circa 50',
  'about 60':
    'circa 60',
  '70 or more':
    '70 o più',
  'You picked: {list}':
    'Hai scelto: {list}',
  'None of the activities you picked is a main part of this role':
    'Nessuna delle attività che hai scelto è una parte importante di questo ruolo',
  'Its core is something you would rather avoid: {a}':
    'Il suo nucleo è qualcosa che preferiresti evitare: {a}',
  'Part of it is something you would rather avoid: {a}':
    'In parte è qualcosa che preferiresti evitare: {a}',
  'People/communication {r}/5; you said {y}/5':
    'Persone/comunicazione {r}/5; hai detto {y}/5',
  'Quantitative/technical {r}/5; you said {y}/5':
    'Quantitativo/tecnico {r}/5; hai detto {y}/5',
  'Typical week {r} hours; you would accept {y}':
    'Settimana tipo {r} ore; ne accetteresti {y}',
  'Stress {r}/5; your limit is {y}/5':
    'Stress {r}/5; il tuo limite è {y}/5',
  'Entry difficulty {r}/5; you said up to {y}/5':
    'Difficoltà d’ingresso {r}/5; hai detto fino a {y}/5',
  '{bg} is a standard feeder (strong fit)':
    '{bg} è un percorso di provenienza tipico (adatto)',
  '{bg} is hired regularly with extra preparation (possible fit)':
    '{bg} viene assunto regolarmente con preparazione in più (possibile)',
  '{bg} is a stretch: it needs a deliberate route':
    '{bg} è una forzatura: serve un percorso mirato',
  'Scores high on what you said matters: {p}':
    'Punteggio alto su ciò che hai detto che conta: {p}',
  'Scores low on what you said matters: {p}':
    'Punteggio basso su ciò che hai detto che conta: {p}',
  'Mostly at the kind of employer you chose: {o}':
    'Per lo più presso il tipo di datore di lavoro che hai scelto: {o}',
  'The local language is usually required where you want to work':
    'Dove vuoi lavorare di solito serve la lingua locale',
  'Employers of this kind rarely sponsor visas, and every place you chose would need one':
    'I datori di lavoro di questo tipo fanno raramente da sponsor per i visti, e ogni luogo che hai scelto ne richiederebbe uno',
  'Many posts require citizenship of the country or of the EU':
    'Molti posti richiedono la cittadinanza del paese o dell’UE',
  'Some posts require citizenship of the country':
    'Alcuni posti richiedono la cittadinanza del paese',
  'In a sector you chose: {s}':
    'In un settore che hai scelto: {s}',
  'Junior work here is among the most exposed to AI':
    'Qui il lavoro junior è tra i più esposti all’IA',
  'Some junior work here is exposed to AI':
    'Qui una parte del lavoro junior è esposta all’IA',
  'Trains you for a professional qualification on the job, which you said you would consider':
    'Ti prepara a un’abilitazione professionale mentre lavori, che hai detto di considerare',
  'Needs a PhD, which you said you would consider':
    'Richiede un dottorato, che hai detto di considerare',
  'Rarely open without a PhD':
    'Raramente accessibile senza dottorato',
  'Close to a role you marked “interested”':
    'Simile a un ruolo che hai segnato «mi interessa»',
  'Close to a role you marked “not for me”':
    'Simile a un ruolo che hai segnato «non fa per me»',
  'Hours':
    'Ore',
  'From the cross-career table, row':
    'Dalla tabella di confronto tra carriere, riga',
  'Main door':
    'Porta d’ingresso principale',
  'Language need':
    'Lingua necessaria',
  'Visa-friendliness':
    'Facilità con i visti',
  'AI exposure of junior work':
    'Esposizione all’IA del lavoro junior',
  'Does a master’s help?':
    'Un master aiuta?',
  'Does a master’s change the outcome?':
    'Un master cambia il risultato?',
  'Without a master’s':
    'Senza master',
  'What a master’s adds':
    'Che cosa aggiunge un master',
  'Entry pay (approx.)':
    'Stipendio d’ingresso (approssimativo)',
  'What the research says about this kind of job':
    'Che cosa dice la ricerca su questo tipo di lavoro',
  'Interested ✓':
    'Mi interessa ✓',
  'Interested':
    'Mi interessa',
  'Not for me':
    'Non fa per me',
  'List re-ranked: roles like this one moved up.':
    'Lista riordinata: i ruoli simili a questo sono saliti.',
  'Removed, and roles like it moved down. “Undo” is under “Your answers”.':
    'Tolto, e i ruoli simili sono scesi. «Annulla» è in «Le tue risposte».',
  'Career Compass · your shortlist':
    'Bussola delle carriere · la tua rosa',
  'Fields and roles that fit your answers':
    'Settori e ruoli adatti alle tue risposte',
  'A starting point for exploring, not a verdict. Each role shows the answers that moved it and the research behind it; the best test of a career is still talking to people who do it and trying the work.':
    'Un punto di partenza per esplorare, non un verdetto. Ogni ruolo mostra le risposte che lo hanno spostato e la ricerca dietro; la prova migliore di una carriera resta parlare con chi la fa e provare il lavoro.',
  'Compass {v} · research of {d} · {mode} · {n} of {total} questions answered':
    'Bussola {v} · ricerca del {d} · {mode} · {n} domande su {total} con risposta',
  'quick version':
    'versione rapida',
  'full version':
    'versione completa',
  'Change my answers':
    'Cambia le risposte',
  'Answer the full version':
    'Rispondi alla versione completa',
  'Copy a link to these results':
    'Copia un link a questi risultati',
  'Link copied':
    'Link copiato',
  'Copy this link':
    'Copia questo link',
  'Print':
    'Stampa',
  'Start again':
    'Ricomincia',
  'The link holds your answers in the address after “#”, which browsers do not send to any server. Anyone you give it to can read them.':
    'Il link contiene le tue risposte nell’indirizzo dopo il «#», che i browser non inviano a nessun server. Chiunque lo riceva può leggerle.',
  'You skipped most questions, or the activities question, so the list below is close to arbitrary. Answer at least the activities you would enjoy.':
    'Hai saltato la maggior parte delle domande, o quella sulle attività, quindi la lista qui sotto è quasi arbitraria. Rispondi almeno sulle attività che ti piacerebbero.',
  'Scores are out of 100: 75 and above is a strong match, 60–74 good, 45–59 worth a look. They compare roles with each other for your answers; they are not a probability of getting in or of liking the job.':
    'I punteggi sono su 100: da 75 in su molto adatto, 60-74 adatto, 45-59 da guardare. Confrontano i ruoli tra loro per le tue risposte; non sono una probabilità di entrare o di trovarti bene.',
  'Three fields to explore first':
    'Tre settori da esplorare per primi',
  'Each field is scored by its three best roles for your answers.':
    'Ogni settore ha il punteggio dei suoi tre ruoli migliori per le tue risposte.',
  'Field {n}':
    'Settore {n}',
  'Roles that fit now':
    'Ruoli adatti adesso',
  'Open to someone at your stage. Ranked by fit; the reasons are your own answers set against the research’s scores. Mark roles “interested” or “not for me” to re-rank the list by how alike the roles are.':
    'Aperti a chi è al tuo punto. Ordinati per adattamento; le ragioni sono le tue risposte confrontate con i punteggi della ricerca. Segna i ruoli «mi interessa» o «non fa per me» per riordinare la lista in base a quanto i ruoli si somigliano.',
  'Later, after more preparation':
    'Più avanti, dopo altra preparazione',
  'These fit your answers but are rarely a first job: they need a PhD, or most people arrive from another job first.':
    'Sono adatti alle tue risposte ma raramente sono un primo lavoro: richiedono un dottorato, o quasi tutti ci arrivano da un altro lavoro.',
  'Doors still open':
    'Porte ancora aperte',
  'If you aim for':
    'Se punti a',
  'entry {r}/5':
    'ingresso {r}/5',
  'fit {n}':
    'adattamento {n}',
  'the research names it as a route in: its exits lead there.':
    'la ricerca lo indica come via d’ingresso: i suoi sbocchi portano lì.',
  'same core activity, easier to enter.':
    'stessa attività principale, più facile da raggiungere.',
  'What would change your list':
    'Che cosa cambierebbe la tua lista',
  'The answers that hold roles back, and the role each one holds back most.':
    'Le risposte che frenano dei ruoli, e il ruolo che ciascuna frena di più.',
  'If you accepted 70+ hour weeks':
    'Se accettassi settimane da 70 ore e oltre',
  'If you accepted sustained high pressure':
    'Se accettassi una pressione alta e prolungata',
  'If you tried the most selective doors':
    'Se tentassi le porte più selettive',
  'If you did not rule out the activity you would rather avoid':
    'Se non escludessi l’attività che preferiresti evitare',
  'If you spoke the local language where you want to work':
    'Se parlassi la lingua locale dove vuoi lavorare',
  'would rank {n} (now {was}).':
    'sarebbe al {n}º posto (ora {was}º).',
  'would rank {n}.':
    'sarebbe al {n}º posto.',
  'Things to be alert for':
    'A che cosa fare attenzione',
  'Triggered by your answers. Quoted from the research, with the file each passage comes from.':
    'Fatti emergere dalle tue risposte. Citati dalla ricerca, con il file da cui viene ogni passo.',
  'Myth {n} of 15, ranked by damage':
    'Mito {n} di 15, in ordine di danno',
  'Sector notes':
    'Note di settore',
  'From the sector research, which the role pages do not cover. Quoted from each file’s bottom line.':
    'Dalla ricerca di settore, che le pagine dei ruoli non coprono. Citate dalla sintesi di ogni file.',
  'Test it before you commit':
    'Mettilo alla prova prima di impegnarti',
  'Career tests predict little on their own. Three cheap checks for your top roles, in the next month:':
    'Da soli i test di orientamento prevedono poco. Tre verifiche economiche per i tuoi ruoli migliori, nel prossimo mese:',
  'Talk to two people who do each job.':
    'Parla con due persone che fanno ciascun lavoro.',
  'Alumni and second-degree contacts answer more often than strangers. Ask what a second-year does that a tool cannot, and last year’s average and peak weekly hours.':
    'Ex alunni e contatti di secondo grado rispondono più spesso degli sconosciuti. Chiedi che cosa fa al secondo anno una persona che uno strumento non sa fare, e le ore settimanali medie e di picco dell’anno scorso.',
  'Read the way in, then try a piece of the work.':
    'Leggi come si entra, poi prova un pezzo del lavoro.',
  'Each role page has “How to enter” and “Honest downsides”: ':
    'Ogni pagina di ruolo ha «How to enter» e «Honest downsides»: ',
  'A short task (a model, a dashboard, a campaign brief, a small program) tells you more than any quiz.':
    'Un breve compito (un modello, una dashboard, un brief di campagna, un piccolo programma) ti dice più di qualunque questionario.',
  'Check the door and its date.':
    'Verifica la porta e la sua data.',
  'Internships are the hiring channel, and their windows close early. Missing one costs a year.':
    'Gli stage sono il canale di assunzione, e le loro finestre chiudono presto. Perderne una costa un anno.',
  'The research’s rules behind these checks':
    'Le regole della ricerca dietro queste verifiche',
  'Next steps on this site':
    'Prossimi passi su questo sito',
  'How hiring works in 46 countries, and the route most used for your path':
    'Come si assume in 46 paesi, e la via più usata per il tuo percorso',
  'The Atlas: cities, employers and visas by country':
    'L’Atlante: città, datori di lavoro e visti per paese',
  'Compare every role side by side':
    'Confronta tutti i ruoli fianco a fianco',
  'Visas and languages':
    'Visti e lingue',
  'For where you are now':
    'Per dove sei adesso',
  'If you are weighing a master’s':
    'Se stai valutando un master',
  'AI and junior hiring':
    'IA e assunzioni junior',
  'How this works, your answers, and its limits':
    'Come funziona, le tue risposte e i suoi limiti',
  'The score':
    'Il punteggio',
  'Your activities against what each role mostly is; a role’s core activity counts most.':
    'Le tue attività confrontate con ciò che ogni ruolo è soprattutto; l’attività principale del ruolo conta di più.',
  'People and technical depth against the role’s 1–5 scores; hours and pressure only when the role asks more than you accept.':
    'Persone e profondità tecnica confrontate con i punteggi 1-5 del ruolo; ore e pressione solo quando il ruolo chiede più di quanto accetti.',
  'What you studied':
    'Che cosa hai studiato',
  'Strong, possible or stretch, from the research’s background matrix.':
    'Adatto, possibile o forzatura, dalla matrice dei percorsi della ricerca.',
  'What matters to you':
    'Che cosa conta per te',
  'Your two motives against the role’s pay, upside, exits, stability, mission or creative work.':
    'Le tue due motivazioni confrontate con stipendio, crescita, sbocchi, stabilità, missione o lavoro creativo del ruolo.',
  'How competitive a door':
    'Quanto è competitiva la porta',
  'Entry difficulty against the competition you are ready for.':
    'La difficoltà d’ingresso confrontata con la concorrenza che sei pronto ad affrontare.',
  'Kind of employer':
    'Tipo di datore di lavoro',
  'Where the role mostly sits.':
    'Dove si trova più spesso il ruolo.',
  'Then, each shown on the role: +4 for a sector you chose; up to −8 where the local language is usually required and you lack it; −5 for employers that rarely sponsor visas when every place you chose needs one; −6 where citizenship conditions are common and you are not an EU citizen; up to −6 for AI exposure if it worries you; −4 for PhD-gated roles unless you would consider a PhD; up to ±12 for roles like the ones you marked.':
    'Poi, ognuno mostrato sul ruolo: +4 per un settore che hai scelto; fino a −8 dove di solito serve la lingua locale e non ce l’hai; −5 per datori di lavoro che fanno raramente da sponsor per i visti quando ogni luogo che hai scelto ne richiede uno; −6 dove sono comuni requisiti di cittadinanza e non sei cittadino UE; fino a −6 per l’esposizione all’IA se ti preoccupa; −4 per i ruoli che richiedono un dottorato, a meno che tu non lo consideri; fino a ±12 per i ruoli simili a quelli che hai segnato.',
  'What is research and what is our reading':
    'Che cosa è ricerca e che cosa è una nostra lettura',
  'Hours, stress, people, quant, entry difficulty, background fit and pay come from the thirteen branch reports (research/branches/index.md). Every quoted passage comes from the file named under it. What each role mostly involves, the kind of employer, relative pay, upside, exits, stability, AI exposure and language need are our reading of each role’s research page, made once for all 124 roles and listed in tools/careers/compass.js.':
    'Ore, stress, persone, aspetto quantitativo, difficoltà d’ingresso, adattamento del percorso e stipendio vengono dai tredici rapporti di settore (research/branches/index.md). Ogni passo citato viene dal file indicato sotto. Che cosa comporta soprattutto ogni ruolo, il tipo di datore di lavoro, stipendio relativo, crescita, sbocchi, stabilità, esposizione all’IA e lingua necessaria sono una nostra lettura della pagina di ricerca di ogni ruolo, fatta una volta per tutti i 124 ruoli ed elencata in tools/careers/compass.js.',
  'Limits':
    'Limiti',
  'This is not a psychometric test and has not been validated against anyone’s later satisfaction. Interest inventories in general predict job satisfaction only weakly.':
    'Non è un test psicometrico e non è stato convalidato rispetto alla soddisfazione successiva di nessuno. In generale gli inventari di interessi prevedono la soddisfazione sul lavoro solo debolmente.',
  'Hours and stress are the researchers’ estimates from practitioner accounts, not a survey.':
    'Ore e stress sono stime dei ricercatori basate su resoconti di chi fa il lavoro, non un’indagine.',
  'Your answers are a snapshot. Take it again when your plans change.':
    'Le tue risposte sono un’istantanea. Rifallo quando cambiano i tuoi piani.',
  'Nothing here is advice; check the role pages and their sources before relying on a number.':
    'Niente di tutto questo è una consulenza; controlla le pagine dei ruoli e le loro fonti prima di fidarti di una cifra.',
  'Skipped':
    'Saltata',
  'Roles you marked':
    'Ruoli che hai segnato',
  'Undo':
    'Annulla',

  /* --------------------------------------------- Programme Directory */
  /* programmes.html, js/page-programmes.js and the picked-programme notes
   * in js/results-kit.js. */
  'Programme Directory — Admetia':
    'Elenco dei programmi — Admetia',
  'Every programme the Admetia calculators score — 136 MBA, business and computing master’s programmes in the UK, Europe, the US and Asia — with published requirements, experience caps, test policy, fees and this cycle’s deadlines. Filter and compare without a questionnaire. Free and private.':
    'Tutti i programmi valutati dai calcolatori di Admetia — 136 MBA e master in business e informatica nel Regno Unito, in Europa, negli Stati Uniti e in Asia — con requisiti pubblicati, limiti di esperienza, politica sui test, rette e scadenze di questo ciclo. Filtra e confronta senza questionario. Gratuito e privato.',
  'Directory desk · every programme the calculators score':
    'Elenco · tutti i programmi valutati dai calcolatori',
  'Programme Directory':
    'Elenco dei programmi',
  'All 136 programmes behind the three calculators — 67 business master’s, 26 computing master’s and 43 MBAs — with what each one publishes about who it takes: test policy, experience caps, the credits and degrees it requires, its fee where our research has one, and this cycle’s deadlines. Filter and compare without answering a single question; when one looks right, test your chances in one click.':
    'Tutti i 136 programmi dietro i tre calcolatori — 67 master in business, 26 master in informatica e 43 MBA — con quello che ciascuno pubblica su chi ammette: politica sui test, limiti di esperienza, crediti e lauree richiesti, la retta quando la nostra ricerca ce l’ha, e le scadenze di questo ciclo. Filtra e confronta senza rispondere a nessuna domanda; quando uno ti sembra giusto, verifica le tue possibilità con un clic.',
  'Not sure which kind of job the programme should lead to? The <a href="careers/compass.html">Career Compass</a> ranks 124 graduate roles against what you studied and what you would enjoy doing.':
    'Non sai a quale lavoro dovrebbe portare il programma? La <a href="careers/compass.html">Bussola delle carriere</a> ordina 124 ruoli per laureati in base a che cosa hai studiato e che cosa ti piacerebbe fare.',
  'Read this before you rely on the directory':
    'Leggi qui prima di fidarti dell’elenco',
  'A reality check on bars, fees and dates':
    'Un bagno di realtà su soglie, rette e date',
  'Every requirement here is what the school publishes, tagged with where it was read. Three things are ours, and are labelled as such:':
    'Ogni requisito qui è quello che la scuola pubblica, con l’indicazione di dove è stato letto. Tre cose sono nostre, e sono indicate come tali:',
  '<strong>“Our bar” is calibration.</strong> No school publishes a points requirement. The number is the calculator’s own threshold, shown with its rank in the track so you can see how the models order programmes — not an admission rate.':
    '<strong>«La nostra soglia» è una calibrazione.</strong> Nessuna scuola pubblica un punteggio richiesto. Il numero è la soglia del calcolatore, mostrata con la sua posizione nel percorso perché tu veda come i modelli ordinano i programmi — non è un tasso di ammissione.',
  '<strong>Fees are never converted.</strong> They are copied in the school’s currency from our research, for the intake shown. The fee bands compare the number in its own currency (a semester counts twice), so a £ and a € fee in the same band can differ by a fifth. Programmes without a fee in the research say “Not in our data”.':
    '<strong>Le rette non vengono mai convertite.</strong> Sono copiate nella valuta della scuola dalla nostra ricerca, per l’intake indicato. Le fasce di retta confrontano il numero nella sua valuta (un semestre conta doppio), quindi una retta in £ e una in € nella stessa fascia possono differire di un quinto. I programmi senza retta nella ricerca indicano «Non nei nostri dati».',
  '<strong>Deadlines move.</strong> Every date was read on the school’s own page on the day shown beside it. Confirm on the official admissions page before you plan around one.':
    '<strong>Le scadenze si spostano.</strong> Ogni data è stata letta sulla pagina della scuola nel giorno indicato accanto. Verificala sulla pagina ufficiale delle ammissioni prima di organizzarti.',
  'Nothing you choose on this page leaves your browser. Your filters live in the address after “#”, so you can bookmark or share a list.':
    'Niente di ciò che scegli in questa pagina lascia il tuo browser. I tuoi filtri stanno nell’indirizzo dopo il «#», così puoi salvare o condividere una lista.',
  'Or browse first: the <a href="programmes.html">Programme Directory</a> filters all 136 programmes by track, region, fee, test, experience and prerequisites, with no questions asked.':
    'Oppure guarda prima: l’<a href="programmes.html">Elenco dei programmi</a> filtra tutti i 136 programmi per percorso, area, retta, test, esperienza e prerequisiti, senza domande.',
  'Want to look before you answer? The <a href="programmes.html">Programme Directory</a> lists all 136 programmes with what each one requires, its fee and its deadlines, and opens any of them here in one click.':
    'Vuoi guardare prima di rispondere? L’<a href="programmes.html">Elenco dei programmi</a> riporta tutti i 136 programmi con i requisiti, la retta e le scadenze di ciascuno, e li apre qui con un clic.',
  'a year':
    'l’anno',
  'a semester':
    'a semestre',
  'Free':
    'Gratuito',
  'Free or under 2,000':
    'Gratuito o sotto i 2.000',
  'Under 20,000':
    'Sotto i 20.000',
  '40,000 or more':
    '40.000 o più',
  'Not in our data':
    'Non nei nostri dati',
  'Track':
    'Percorso',
  'Fee':
    'Retta',
  'Business master’s only: the computing and MBA models do not record test policy.':
    'Solo master in business: i modelli di informatica e MBA non registrano la politica sui test.',
  'Required':
    'Obbligatorio',
  'Required unless':
    'Obbligatorio salvo eccezioni',
  'Optional':
    'Facoltativo',
  'Not used':
    'Non usato',
  'Published minimum score':
    'Punteggio minimo pubblicato',
  'Experience':
    'Esperienza',
  'Takes fresh graduates':
    'Accetta neolaureati',
  'Caps experience':
    'Limita l’esperienza',
  'Needs experience':
    'Richiede esperienza',
  'Prerequisites':
    'Prerequisiti',
  'Maths or quant credits':
    'Crediti di matematica o quantitativi',
  'Business credits':
    'Crediti di business',
  'A specific degree':
    'Una laurea specifica',
  'A minimum degree class':
    'Un voto di laurea minimo',
  'Only if you did not study computing':
    'Solo se non hai studiato informatica',
  'No hard prerequisite':
    'Nessun prerequisito vincolante',
  'Within 60 days':
    'Entro 60 giorni',
  'A dated round still ahead':
    'Una scadenza datata ancora da venire',
  'Filter the programmes':
    'Filtra i programmi',
  'Find a school, city or requirement…':
    'Cerca una scuola, una città o un requisito…',
  'Find a programme':
    'Cerca un programma',
  'A to Z':
    'Dalla A alla Z',
  'Highest bar first':
    'Prima la soglia più alta',
  'Lowest fee first':
    'Prima la retta più bassa',
  'Fees shown for':
    'Rette mostrate per',
  'Fees for EU/EEA citizens':
    'Rette per cittadini UE/SEE',
  'Fees for everyone else':
    'Rette per tutti gli altri',
  'Clear all filters':
    'Togli tutti i filtri',
  'Not recorded in the MBA model':
    'Non registrato nel modello MBA',
  'Not recorded in the computing model':
    'Non registrato nel modello di informatica',
  'Required unless…':
    'Obbligatorio salvo…',
  'Post-experience: MBA classes average 5–6 years':
    'Post-esperienza: le classi MBA hanno in media 5-6 anni',
  'No published rule':
    'Nessuna regola pubblicata',
  'non-EU fee':
    'retta extra-UE',
  'EU/EEA fee':
    'retta UE/SEE',
  'Competitive at {n} on the MBA points scale · {r} highest of {of} MBAs':
    'Competitivo a {n} sulla scala a punti MBA · {r} più alta di {of} MBA',
  '{n} on the MBA points scale · {r} highest of {of} MBAs':
    '{n} sulla scala a punti MBA · {r} più alta di {of} MBA',
  '{n} on our 0–100 scale · {r} highest of {of} {track} programmes':
    '{n} sulla nostra scala 0-100 · {r} più alta di {of} programmi di {track}',
  'Requirements':
    'Requisiti',
  'No hard prerequisite published':
    'Nessun prerequisito vincolante pubblicato',
  'Our bar':
    'La nostra soglia',
  'What the school publishes, and how it selects':
    'Che cosa pubblica la scuola, e come seleziona',
  'How it selects':
    'Come seleziona',
  'Rounds':
    'Turni',
  'Fee for EU/EEA citizens':
    'Retta per cittadini UE/SEE',
  'everyone else':
    'tutti gli altri',
  'the calculator’s own fact':
    'dato del calcolatore',
  'Test my chances · {track}':
    'Verifica le mie possibilità · {track}',
  'Test my chances':
    'Verifica le mie possibilità',
  'Place':
    'Luogo',
  'No dated round ahead':
    'Nessuna scadenza datata in arrivo',
  '{n} programme of {total}':
    '{n} programma su {total}',
  '{n} programmes of {total}':
    '{n} programmi su {total}',
  'No programme matches every filter. Untick one, or clear them all.':
    'Nessun programma soddisfa tutti i filtri. Togline uno, o toglili tutti.',
  'Show {n} more':
    'Mostrane altri {n}',
  'Testing your chances at {name}.':
    'Stai verificando le tue possibilità per {name}.',
  'Answer the questions as usual: the results open at this programme, with every other one in the track below it.':
    'Rispondi alle domande come sempre: i risultati si aprono su questo programma, con tutti gli altri del percorso sotto.',
  'See it with the answers saved here':
    'Guardalo con le risposte salvate qui',
  'Back to the programme directory':
    'Torna all’elenco dei programmi',
  'Your programme: {name}.':
    'Il tuo programma: {name}.',
  'It is not scored on this page.':
    'Non è valutato in questa pagina.',
  'A published requirement rules it out for your answers; its row says which.':
    'Un requisito pubblicato lo esclude per le tue risposte; la sua riga dice quale.',
  'Its row is marked below, with its verdict and what it weighs.':
    'La sua riga è segnata qui sotto, con il verdetto e ciò che pesa.',
  'Jump to it':
    'Vai alla riga',
  'Every programme the calculators score, filtered by what you studied and where you want to work':
    'Tutti i programmi valutati dai calcolatori, filtrati per i tuoi ruoli e per dove vuoi lavorare'
});
