# Prompt — intro animata di Admission Chances

Costruisci l'intro animata (splash) del sito, **versione A "Titoli"** del laboratorio
`design/intro/lab.html`, con **Rosso Watchlist = "Nero + rosso"** e **Testo = "Casuale (3)"**.

Il laboratorio è il riferimento visivo vincolante: stile, tempi, colori, font, easing e
struttura vanno riprodotti fedelmente. Leggine il codice (funzioni `SC.word`, `SC.rows`,
`landing`, `playFlash`, `glitch`, `buildHud`, oggetti `ED`, `REDS`, `LINES`) prima di
scrivere. Per vederlo: serviscilo da una copia nella scratchpad (vedi la memoria sul
preview server), non dal repo.

---

## 1. Quando compare

| Situazione | Cosa vede |
|---|---|
| **Entra nel sito**: scheda nuova, indirizzo digitato, preferito, link da un altro sito | Intro completa, ~3,3 s |
| **Ricarica** la pagina | Dissolvenza dal colore della carta, 0,32 s, nessun movimento |
| **Si muove nel sito**: link interni, indietro/avanti | Niente |
| `prefers-reduced-motion: reduce` | Niente: la pagina appare subito |
| Scheda aperta in background | Niente |
| Stampa | Niente (`@media print`) |

- Si decide dal tipo di navigazione (`reload`, `back_forward`) e dal `document.referrer`
  (stessa origine e stessa cartella = già sul sito). Non si salva nulla.

## 2. Salto

- Pulsante **Skip / Salta** sempre visibile in basso a destra, quadrato (nessun angolo
  arrotondato: vedi il design delle edizioni), stile HUD, raggiungibile da tastiera e
  con il focus iniziale.
- Saltano l'intro anche: clic/tap ovunque, `Esc`, qualunque tasto.
- Il salto porta allo stato finale (pagina visibile) con una dissolvenza ≤ 150 ms.

## 3. Le tre frasi (casuali)

A ogni intro completa ne esce una a caso, con probabilità uguale. Stesso stile per tutte.
La lingua segue `admissions-calc:lang` (EN di default).

| EN | IT |
|---|---|
| INSEAD? / LBS? / BOCCONI? / YOU? | INSEAD? / LBS? / BOCCONI? / E TU? |
| GMAT. / GPA. / CV. / VERDICT. | GMAT. / MEDIA. / CV. / VERDETTO. |
| WHERE / DO YOU / ACTUALLY / STAND? | A CHE / PUNTO / SEI / DAVVERO? |

Le prime tre parole sono i tre tagli a tutto schermo; la quarta è la parola delle righe.
Tutti i testi dell'intro (frasi, Skip, etichette HUD) passano dal sistema i18n del sito
(`js/i18n.js` / `js/i18n-it.js`) e l'italiano resta allineato.

## 4. Sequenza dell'intro completa (1×)

Ordine delle edizioni: **le altre due prima, quella dell'utente per ultima**. Chi arriva
per la prima volta ha l'edizione di default (`city`, da `js/theme.js`), quindi di solito:
Wall Street → Watchlist → The City.

| Tempo | Scena | Contenuto |
|---|---|---|
| 0–500 ms | Parola 1 | Fotogramma dell'edizione `c[0]` |
| 500–1000 ms | Parola 2 | Fotogramma dell'edizione `c[1]` |
| 1000–1520 ms | Parola 3 | Fotogramma dell'edizione `c[2]` (quella dell'utente) |
| 1520–2280 ms | Righe | Parola 4, colori dell'edizione dell'utente |
| 2280–3280 ms | Atterraggio | La testata si compone, sale al suo posto e la pagina compare |

**Fotogrammi "parola"** (come `SC.word` con `loud = true`):

| Edizione | Fondo | Testo | Font titolo | Linea sotto | Ombra RGB (primi 110 ms) |
|---|---|---|---|---|---|
| The City | `#990f3d` | `#fff1e5` | Source Serif 4, 600 | colore del testo | `#0d7680` / `#fcd0b1` |
| Wall Street | `#ffffff` | `#111111` | Roboto Serif Condensed, 700 | `#111111` | `#0080c3` / `#e10000` |
| FBI Watchlist | `#171717` | `#ffffff` | Noto Serif Display, 800, stretch 75% | `#dc0000` | `#dc0000` / `#007ac8` |

- Parola al centro, adattata all'86% della larghezza e al 50% dell'altezza (62% se va su
  più righe; su schermo verticale ogni parola della frase va a capo).
- Lettere che salgono da una maschera: 300 ms, sfasate di 20 ms,
  `cubic-bezier(.2,.9,.1,1)`. Parola che cresce da 1 a 1,05 in modo lineare per tutta la
  scena. Linea sotto che si disegna da sinistra (90% della scena).
- Etichetta in alto a sinistra "01 — Wall Street" (Hanken Grotesk 600, maiuscolo,
  spaziatura .16em); su Watchlist è `#ff5a4f`.
- Tra un taglio e l'altro, glitch: bande orizzontali sfalsate per 45 ms + 40 ms. **Le
  bande devono coprire in totale meno del 25% dello schermo.**

**Righe** (come `SC.rows`): 7 bande a tutta larghezza, la parola 4 ripetuta con " · ".
Le bande pari/dispari scorrono in direzioni opposte e le bande 1 e 5 hanno il testo
solo contornato. La banda centrale è ferma, con la parola che sale lettera per lettera.
Al 62% della scena le bande sopra escono verso l'alto e quelle sotto verso il basso.

| Edizione dell'utente | Bande A | Bande B | Banda centrale |
|---|---|---|---|
| The City | `#990f3d` / `#fff1e5` | `#fff1e5` / `#990f3d` | `#262a33` / `#fff1e5` |
| Wall Street | `#111111` / `#ffffff` | `#ffffff` / `#111111` | `#0080c3` / `#ffffff` |
| FBI Watchlist | `#171717` / `#ffffff` | `#fcfcfc` / `#171717` | `#ffffff` / `#dc0000` |

**Atterraggio** (come `landing`): sul fondo dell'edizione dell'utente compare la testata
vera del sito. The City: lettere "composte" una alla volta. Wall Street e Watchlist:
l'immagine della testata si rivela da sinistra a scatti. Watchlist parte dalla sua fascia
nera `#171717` con il motto in `#bbb`. Poi compaiono motto e doppia linea. A +560 ms
la testata **vola nella posizione e dimensione reali della `.nameplate` della pagina**
(tecnica FLIP: misura il rettangolo vero), mentre la pagina compare sotto. Poi l'overlay
si rimuove senza nessuno scatto.

**HUD** (come `buildHud`): angoli a "mirino", etichette Hanken Grotesk 600 maiuscole
all'80% di opacità, nel colore del testo della scena corrente.

- In alto a sinistra: "Admission Chances".
- In alto a destra: "01/04 — Wall Street".
- In basso a sinistra: i numeri veri del sito (vedi §6).
- In basso a destra: "Loading 000%", che arriva a 100% all'inizio dell'atterraggio, con
  una linea di avanzamento.
- Su schermo verticale si nascondono le etichette di sinistra.

## 5. Ricarica

Solo una dissolvenza: l'overlay parte col colore della carta dell'edizione e sfuma in 320 ms
quando la pagina è pronta. Nessuna testata, nessun movimento. (Versioni precedenti: una
striscia colorata, poi la testata che saliva; tolte perché ripetute stancavano.)

## 6. Numeri veri

L'etichetta in basso a sinistra dice "90+ programmes · 42 MBA schools · 26 computing" /
"90+ programmi · 42 scuole MBA · 26 informatica".

- I numeri **non vanno scritti a mano**: devono venire dagli stessi dati del sito
  (`data/mba-model.js`, `data/masters-model.js`, `data/it-model.js`), con la stessa
  logica con cui la home dice "more than 90 programmes" e "42 business schools".
- Se l'intro parte prima che quei file siano caricati (sono `defer`), aggiungi un test in
  `tests/` che fallisce se i numeri dell'intro non coincidono con i dati. Aggiorna anche
  il testo della home se oggi è scritto a mano.

## 7. Vincoli tecnici

- **Niente librerie**: JS e CSS puri, Web Animations API. Si animano solo `transform`,
  `opacity` e `clip-path`. Deve andare fluida su un telefono medio.
- File nuovi `js/intro.js` e `css/intro.css`, inclusi in `<head>` di **tutte e 6 le
  pagine** subito dopo `js/theme.js`, così l'overlay copre la pagina **prima del primo
  disegno**. Non deve esserci nessun lampo della pagina sotto e nessuno spostamento del
  layout.
- Budget: `intro.js` + `intro.css` ≤ 8 KB gzip. I font sono esclusi, ma carica solo quelli
  che servono: i 3 font dei titoli + Hanken Grotesk dall'intro completa, e solo quelli
  dell'edizione per il lampo. Se i font non sono pronti entro 700 ms, fai il lampo al
  posto dell'intro completa.
- Testate: `img/wordmark/wall-street.webp` e `fbi-watchlist.webp`, già presenti (The City
  è testo). Il fallback `.png` va gestito come in `css/app.css`.
- Accessibilità:
  - Overlay `aria-hidden="true"`, pagina sotto `inert` finché l'intro è attiva.
  - Il pulsante Skip ha un nome accessibile.
  - Nessun contenuto della pagina resta nascosto dopo la fine o dopo un errore: se
    `intro.js` va in errore, la pagina deve comparire comunque.
- Offline: aggiungi i file nuovi a `SHELL_FILES` in `sw.js` e aumenta `VERSION`. Se serve,
  aggiornali anche in `tools/build.js`.
- Nessun suono.

## 8. Verifica

- `npm test` e `npm run build` passano.
- Test nuovi: logica della chiave `intro-seen` (primo ingresso → completa, poi lampo),
  reduced-motion → nessuna intro, storage bloccato → lampo, numeri HUD = dati.
- Nel Browser pane, su una copia servita dalla scratchpad:
  - Intro completa per ciascuna delle 3 edizioni e delle 3 frasi, in EN e IT.
  - Lampo, desktop e telefono (375×812).
  - Salto con clic, `Esc` e pulsante.
  - Ingresso diretto da `mba.html` e da un URL con `#`.
  - Screenshot al rallentatore dei passaggi chiave come prova.
- Rimuovi le configurazioni temporanee di preview alla fine.
