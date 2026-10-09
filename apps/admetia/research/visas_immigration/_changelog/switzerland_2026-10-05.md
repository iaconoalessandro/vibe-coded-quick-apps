# Registro delle Modifiche (Changelog): Svizzera (CH)

**Data di consolidamento:** 05/10/2026  
**Operatore / Orchestratore:** Council di verifica immigrazione Admetia  
**Branch git dedicato:** `chore/visas-switzerland-consolidation`  
**Obiettivo:** Istituzione della cartella `visas_immigration/switzerland/` come **UNICA fonte di verità** per la Svizzera; bonifica sistematica di errori materiali, miti burocratici ("no permit" UE) e duplicazioni nella codebase.

---

## 1. File Creati (Struttura della Fonte Unica di Verità)

1. `visas_immigration/switzerland/switzerland_visas_immigration_guide.md`
   - *Scopo:* Guida ufficiale consolidata e verificata su fonti primarie federali e cantonali (Fedlex, SEM, Cantoni, UFSP, BFS, SECO, Movetia).
   - *Contenuto:* Architettura istituzionale; tassonomia dei permessi L, B, C, G, Ci; onboarding a 5 pilastri; matrice completa dei 9 casi d'uso (UE/AELS vs Paesi terzi); costi e tariffe 2026; realtà pratica e friczioni burocratiche; checklist documentali.
2. `visas_immigration/switzerland/switzerland_sources.md`
   - *Scopo:* Registro completo e analitico delle 30 fonti primarie con codici univoci `[CH-SRC-01]` fino a `[CH-SRC-30]`, URL specifici aperti e verificati al 05/10/2026.
3. `visas_immigration/switzerland/switzerland_open_questions.md`
   - *Scopo:* Tracciamento delle questioni aperte da monitorare periodicamente (ratifica Bilaterali III, re-integrazione in Erasmus+ nel 2027, prassi anagrafica sui subaffitti nei cantoni saturi, parametri cantonali per l'interesse economico ex art. 21 cpv. 3 LStrI).
4. `visas_immigration/_changelog/switzerland_2026-10-05.md`
   - *Scopo:* Presente registro analitico di ogni modifica apportata alla codebase.

---

## 2. Modifiche Chirurgiche alla Codebase Esistente

### Modifica 1: `research/places/visas-and-work-rights.md`
* **Righe interessate:** 13 (Bottom line #1) e Sezione 2 (righe 117–128).
* **Classificazione:** FALSO / OBSOLETO (A) e DUPLICATO (B).
* **Prima:**
  - *Riga 13:* *"Across the EU/EEA and Switzerland an Italian can work from day one, with no permit, no salary floor and no sponsor (EPFL, 2026, https://www.epfl.ch/education/studies/law-foreigners) [data]."*
  - *Righe 117–128:* Testo sintetico su Svizzera con quote, iniziativa 10 milioni come Claims to Verify #5, #6, #7 non verificate.
* **Dopo:**
  - *Riga 13:* *"Across the EU/EEA an Italian can work without a permit; in Switzerland, under the AFMP, an Italian needs no labour-market test or sponsor, but must register with the commune within 14 days and before starting work to receive an L or B permit (SEM; see single source of truth)."*
  - *Sezione 2:* Inserimento del banner istituzionale di reindirizzamento:
    `> **Single Source of Truth:** All Switzerland immigration, visa, permit, and work rules are centralized and verified in [`visas_immigration/switzerland/switzerland_visas_immigration_guide.md`](../../visas_immigration/switzerland/switzerland_visas_immigration_guide.md).`
    Seguito da un estratto essenziale e conformato alle fonti verificate `[CH-SRC-01]`, `[CH-SRC-03]`, `[CH-SRC-14]`.
* **Motivo:** L'affermazione originaria violava l'art. 2 OLCP e l'art. 115 LStrI: in Svizzera non si lavora senza permesso; la notifica al comune *vor Stellenantritt* è obbligatoria e genera il permesso L o B. La Sezione 2 viene centralizzata nella guida unica di verità.
* **ID-Fonte:** `[CH-SRC-01]`, `[CH-SRC-03]`, `[CH-SRC-04]`, `[CH-SRC-14]`, `[CH-SRC-29]`, `[CH-SRC-30]`.

### Modifica 2: `research/countries/ch-switzerland.md`
* **Righe interessate:** 21 e 33.
* **Classificazione:** FALSO / OBSOLETO (A) e DUPLICATO (B).
* **Prima:**
  - *Riga 21:* *"EU citizens move freely (register within 14 days)..."*
  - *Riga 33:* *"EU citizens do not need a permit; non-EU graduates of Swiss universities get a six-month search permission that cannot be extended; permits for non-EU nationals are capped at 8,500 for 2026 (4,500 B and 4,000 L), plus 3,500 for UK nationals..."*
* **Dopo:**
  - Correzione di riga 33 chiarendo che i cittadini UE non necessitano di autorizzazione del mercato del lavoro preventiva, ma ricevono un permesso di dimora UE/AELS (B o L) a seguito della registrazione obbligatoria prima dell'impiego.
  - Inserimento del riferimento alla guida unica: `visas_immigration/switzerland/switzerland_visas_immigration_guide.md`.
* **Motivo:** Eliminazione della dicitura fuorviante "do not need a permit" e collegamento alla fonte unica.
* **ID-Fonte:** `[CH-SRC-03]`, `[CH-SRC-04]`, `[CH-SRC-14]`.

### Modifica 3: `visas_immigration/README.md`
* **Righe interessate:** Tabella "Indice dei Paesi e Stato di Verifica".
* **Classificazione:** AGGIORNAMENTO INDICE (Integrazione).
* **Prima:** La tabella conteneva 9 Paesi (IT, FR, PT, IE, ES, IS, GB, BE, DK), con assenza della riga per la Svizzera.
* **Dopo:** Inserimento della riga della Svizzera (**CH**) con collegamenti diretti a `switzerland/switzerland_visas_immigration_guide.md`, `switzerland_sources.md`, `switzerland_open_questions.md`, data ultima verifica `2026-10-05`, data revisione `2027-03-31` e stato `VERIFIED (Council 05/10/2026)`.
* **Motivo:** Allineamento della governance dell'archivio unico.
* **ID-Fonte:** N/A (Indice generale).

---

## 3. Esito del Controllo di Integrità e Baseline

- **Verifica build/test prima delle modifiche:** Eseguito `npm test && npm run build`: 11 suite di test superate con successo; build completata regolarmente.
- **Verifica parametri volatili:** Tutti i costi (tassa Visto D aggiornata a 90 EUR/CHF post RU 2024 258, tasse permessi cantonali ZH CHF 142 e GE CHF 137, premi medi KVG 2026 ZH CHF 477 e GE CHF 489,80, prova fondi studenti CHF 21.000/anno a ZH e CHF 24.000 a GE/VD/BS) sono ancorati a fonti ufficiali aggiornate al 2026.
