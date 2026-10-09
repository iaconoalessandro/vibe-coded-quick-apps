# Registro delle Questioni Aperte, Conflitti e Monitoraggio: Paesi Bassi (NL)
**Data dell'audit:** 05 Ottobre 2026  
**Stato complessivo:** Nessun dato essenziale non verificabile nella guida principale. 3 conflitti risolti con fonti primarie e 3 punti di monitoraggio prasseologico aperti.

---

## 1. Conflitti Risolti con Fonti Primarie (Audit Fase 2 e 3)

### Conflitto 1: Requisito dello Sponsor Riconosciuto (Erkend Referent) per la Carta Blu UE
- **Dato contestato nella codebase:** In `research/places/visas-and-work-rights.md` (riga 166) si affermava: *"The employer must be an IND-recognised sponsor"*, lasciando intendere che il requisito valesse sia per il migrante altamente qualificato (Kennismigrant) sia per la Carta Blu UE.
- **Risoluzione con fonte primaria:** L'audit su `ind.nl/en/residence-permits/work/european-blue-card` `[NL-SRC-04]` e sul testo della Direttiva (UE) 2021/1883 recepita nella normativa olandese ha dimostrato che per la **Carta Blu UE il datore di lavoro NON deve necessariamente essere uno sponsor riconosciuto (*erkend referent*)**. L'obbligo di riconoscimento preventivo vale in modo tassativo per il canale nazionale del *Kennismigrant*, ma non per la Carta Blu europea. Se il datore non è sponsor riconosciuto, la procedura per Carta Blu UE segue i tempi standard IND (fino a 90 giorni) invece del canale rapido in 2 settimane, ma la domanda è pienamente ammissibile.
- **Stato:** RISOLTO. Errore corretto nella guida ufficiale e classificato come Modifica A/B nella codebase.

### Conflitto 2: Riforma della 30%-regeling (Agevolazione Fiscale Impatriati 2026-2027)
- **Dato contestato:** Sussisteva incertezza sull'entrata in vigore del taglio progressivo 30%-20%-10% (introdotto con emendamento parlamentare alla fine del 2023) rispetto alle proposte di revisione governativa del 2024/2025.
- **Risoluzione con fonte primaria:** La verifica su `belastingdienst.nl` `[NL-SRC-19]` e sui documenti del *Belastingplan 2025/2026* `[NL-SRC-35]` ha confermato che il governo olandese ha revocato l'abbattimento progressivo a scaglioni (30-20-10): per tutto il 2026 l'esenzione resta al **30%**, mentre a partire dal **1° gennaio 2027** l'aliquota sarà stabilizzata in misura costante al **27%**, con salvaguardia transitoria per chi già beneficiava del regime. Le soglie salariali imponibili 2026 sono formalmente verificate: **€48.013,00** (standard) e **€36.497,00** (under 30 con titolo Master accademico).
- **Stato:** RISOLTO e allineato alla normativa vigente al 05/10/2026.

### Conflitto 3: Obbligatorietà dell'Assicurazione Sanitaria Olandese (Zorgverzekeringswet) per Studenti
- **Dato contestato:** Nella scheda tecnica `data/atlas/nl.js` (riga 635) figurava la lacuna informativa: *"Compulsory Dutch health insurance for students who work was not read on an official page"*.
- **Risoluzione con fonte primaria:** Verificato su *Het CAK / Zorginstituut Nederland* `[NL-SRC-21]` e `ind.nl`. La distinzione è chiarissima: lo studente straniero (sia UE che extra-UE) che soggiorna nei Paesi Bassi esclusivamente per motivi di studio NON può iscriversi all'assicurazione sanitaria pubblica di base (*basisverzekering*) e deve avere una copertura privata (o TEAM per cittadini UE). Tuttavia, **nel momento esatto in cui lo studente intraprende qualsiasi lavoro subordinato retribuito o tirocinio pagato soggetto a imposta sui salari, scatta l'obbligo imperativo per legge di sottoscrivere la Basisverzekering olandese entro 4 mesi**, pena sanzioni amministrative pecuniarie retroattive da parte del CAK.
- **Stato:** RISOLTO e integrato nella guida.

### Conflitto 4: Quota di Accreditamento dello Sponsor Riconosciuto IND (Erkend Referent)
- **Dato contestato:** Nella bozza della guida (riga 82) figuravano gli importi di € 4.733,00 (standard) e € 2.366,00 (ridotto).
- **Risoluzione con fonte primaria:** L'audit sulle tabelle ufficiali IND 2026 (`ind.nl/en/fees-costs-of-an-application` `[NL-SRC-02]`) ha rilevato che le cifre di € 4.733 / € 2.366 risalivano all'anno 2024. Per effetto dell'indicizzazione inflazionistica (+4,4%), dal 1° gennaio 2026 le tariffe di accreditamento sono pari a:
  - **€ 5.080,00** per le imprese ordinarie (>50 dipendenti);
  - **€ 2.539,00** per le piccole imprese (≤50 dipendenti) e start-up.
- **Stato:** RISOLTO e corretto nella guida ufficiale.

### Conflitto 5: Base Normativa BuWav per l'Esenzione Tirocini Curriculari Nuffic
- **Dato contestato:** Nella bozza (riga 124) si citava l'art. 4.3 del *Besluit uitvoering Wet arbeid vreemdelingen (BuWav)*.
- **Risoluzione con fonte primaria:** Il testo coordinato vigente del *Besluit uitvoering Wet arbeid vreemdelingen 2022* `[NL-SRC-27]` colloca l'esenzione da TWV per gli stage curriculari con convenzione Nuffic all'**art. 3.1, secondo comma, BuWav 2022**. L'art. 4.3 apparteneva alla precedente versione normativa.
- **Stato:** RISOLTO e allineato alla gazzetta ufficiale.

### Conflitto 6: Massimale Statale Zorgtoeslag per Persona Sola 2026
- **Dato contestato:** Nella bozza figurava la stima generica *"fino a ~120 €/mese"*.
- **Risoluzione con fonte primaria:** La verifica su `toeslagen.nl/zorgtoeslag` `[NL-SRC-31]` ha confermato che l'importo massimo del rimborso sanitario statale per single per il 2026 è esattamente di **€ 129,00 al mese** (fino a una soglia di reddito annuo di € 40.857,00).
- **Stato:** RISOLTO e precisato al centesimo.

---

## 2. Punti di Monitoraggio Prasseologico e Questioni Aperte

### Punto Aperto 1: Classifiche Top 200 per l'Orientation Year (Zoekjaar) da Laurea Estera
- **Oggetto:** Verifica delle classifiche internazionali valide al momento del conseguimento del titolo per laureati esteri che chiedono il Zoekjaar.
- **Dettagli:** L'IND accetta titoli conseguiti presso università straniere classificate nella top 200 di almeno due tra Times Higher Education (THE), QS World University Rankings o Academic Ranking of World Universities (ARWU Shanghai). La classificazione può essere generale oppure per materia/facoltà (*faculty rating*). La regola IND impone che l'ateneo estero comparisse nella top 200 alla data esatta di conseguimento del titolo o alla data di pubblicazione della classifica per quell'anno.
- **Azione richiesta per verifica manuale:** In caso di atenei esteri al limite del ranking, consultare lo strumento di equivalenza Nuffic o contattare l'IND Desk Student/Work (`arbeid.kennis@ind.nl`) allegando il certificato di laurea con indicazione della disciplina e l'estratto delle due classifiche per l'anno di riferimento.

### Punto Aperto 2: La Crisi Abitativa (*Woningcrisis*), la Trappola dell'Iscrizione e la Riforma RNI 2026
- **Oggetto:** Prassi diffusa di subaffitti o locazioni che negano l'iscrizione anagrafica al comune (*geen inschrijving mogelijk*) e restrizione degli sportelli RNI.
- **Impatto operativo:** In città ad altissima tensione abitativa (Amsterdam, Utrecht, Rotterdam, Delft, Eindhoven), molti proprietari offrono stanze senza registrazione BRP. Senza iscrizione BRP scatta l'applicazione dell'*Anoniementarief* al 52% sullo stipendio lordo (*art. 26b Wet LB 1964* `[NL-SRC-38]`).
- **Novità vincolante RNI 2026 (`NL-SRC-36`):** Dal 1° gennaio 2026, i cittadini **extra-UE** possono iscriversi come non residenti (RNI per soggiorni < 4 mesi per sbloccare il BSN) **esclusivamente presso gli sportelli di BREDA e VENLO** (gli altri 17 sportelli rifiutano le registrazioni extra-UE). I cittadini UE/italiani possono continuare ad accedere a tutti i 19 sportelli RNI.
- **Raccomandazione prudenziale:** Non accettare contratti senza diritto formale di registrazione. In caso di urgenza contrattuale per cittadini UE, utilizzare lo sportello RNI più vicino; per extra-UE, pianificare la trasferta a Breda o Venlo.

### Punto Aperto 3: Riforme del Governo Schoof (Inasprimento Naturalizzazione a 10 Anni, Lingua B1 e Wet WIB)
- **Oggetto:** Proposte legislative in corso di iter parlamentare su cittadinanza, lingua e studenti internazionali.
- **Dettagli:** Il Consiglio dei Ministri ha avviato la riforma della *Rijkswet op het Nederlanderschap* per estendere il requisito di residenza continuativa per la naturalizzazione da 5 a **10 anni**. È in corso l'innalzamento del requisito linguistico di integrazione civica (*inburgering*) dal livello A2 al **livello B1**. Con la *Wet internationalisering in balans* (WIB), le università stanno riducendo i corsi triennali in lingua inglese e introducendo tetti di immatricolazione (*numerus fixus*) per studenti internazionali.
- **Azione richiesta:** Monitorare i dossier parlamentari della *Tweede Kamer* e della *Eerste Kamer* e le circolari del Ministero dell'Asilo e della Migrazione per le date esatte di promulgazione.

