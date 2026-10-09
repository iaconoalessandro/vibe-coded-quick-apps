# Registro delle Modifiche (Changelog): Australia (AU)

**Data di consolidamento:** 05/10/2026  
**Operatore / Orchestratore:** Council di verifica immigrazione Admetia  
**Branch git dedicato:** `chore/visas-australia-consolidation`  
**Obiettivo:** Istituzione della cartella `visas_immigration/australia/` come **UNICA fonte di verità** per il Commonwealth of Australia; risoluzione sistematica di omissioni e gap informativi (mancanza totale di guide per lavoro, skilled, working holiday, soggiorni brevi e onboarding); verifica delle tariffe al 05/10/2026 (VAC Student 500 ad AUD 2.500 dal 01/07/2026, VAC 485 ad AUD 5.750, WHV 417 ad AUD 840/1.000, TSMIT/CSIT ad AUD 79.423, sussistenza ad AUD 29.710, salario minimo ad AUD 26,44/h); audit delle 8 trappole legali e consolidamento dei percorsi UE vs extra-UE.

---

## 1. File Creati (Struttura della Fonte Unica di Verità)

1. `visas_immigration/australia/australia_visas_immigration_guide.md`
   - *Scopo:* Guida ufficiale consolidata e verificata su fonti primarie federali australiane (Department of Home Affairs, Federal Register of Legislation, Fair Work Ombudsman, ATO, Services Australia, AFP, QILT, RBA).
   - *Contenuto:* 
     - Architettura istituzionale e legislativa federale (*Migration Act 1958*, *Migration Regulations 1994*, *Fair Work Act 2009*, *Income Tax Rates Act 1986*).
     - Procedura di onboarding a due fasi (prima e dopo l'arrivo: TFN online ATO, Superannuation al 12% con Super Stapling, Medicare RHCA con modulo MS015 per italiani, Conto bancario BSB con verifica a 100 punti entro 6 settimane, USI post-atterraggio).
     - Matrice completa degli 11 casi d'uso (UE vs Extra-UE): lavoro sponsorizzato (482 SID nei 3 flussi Specialist, Core ed Essential; 186 ENS; 494 SESR), Skilled indipendente GSM (189, 190, 491, Points Test Schedule 6D), Internship (407 nei 3 stream; distinzione Fair Work Act tra Vocational Placement curriculare unpaid e stage di lavoro retribuito ad almeno AUD 26,44/h), Studio (500 Higher Ed, CoE PRISMS, Genuine Student requirement MD 106, Proof of Funds AUD 29.710, OSHC obbligatoria, lavoro max 48h/quindicina), Tesi e ricerca (500 Non-Award vs 408 Research activities senza tasse accademiche né CoE), Scambi (500 Exchange tuition-free vs Study Abroad), Master ricerca e PhD (lavoro illimitato per studente e coniuge, borse RTP tax-free AUD 32-38k+), Post-study work (485 Post-Higher Ed: 2 anni, limite età a 35 anni, VAC AUD 5.750, inglese 6.5 valido 1 anno), Working Holiday (417 per Italia/Francia/UK 18-35 anni; asimmetria A-UKFTA con UK esente da lavoro regionale e italiani/UE vincolati a 88 giorni / 6 mesi; Condizione 8547 max 6 mesi per datore; Backpacker Tax 15% 0-45k; DASP tax trap al 65%), Soggiorni brevi (eVisitor 651 gratuito per UE vs ETA 601 per USA/CAN ad AUD 20 app fee vs Visitor 600; Partner 820/801 onshore AUD 8.850-9.095 con BVA e lavoro illimitato vs 309/100 offshore).
     - Tabelle sinottiche costi amministrativi (in AUD ed EUR al cambio 0,6202).
     - Statuto giuridico dei Bridging Visas: BVA (010) e decadenza immediata uscendo dal Paese, BVB (020) per viaggi ad AUD 575,00, Section 48 Bar e ricorsi al nuovo Administrative Review Tribunal (ART).
2. `visas_immigration/australia/australia_sources.md`
   - *Scopo:* Registro completo di 38 fonti primarie ufficiali governative con codici univoci da `[AU-SRC-01]` a `[AU-SRC-38]`, con URL specifici aperti e verificati al 05/10/2026.
3. `visas_immigration/australia/australia_open_questions.md`
   - *Scopo:* Tracciamento delle questioni aperte per monitoraggio periodico (raccordo riforme Skills in Demand / liste CSOL di Jobs and Skills Australia, contingenti provider caps MD 111, prassi rifiuti offshore per border runs da Bali/NZ, monitoraggio 88 giorni WHV per italiani).
4. `visas_immigration/_changelog/australia_2026-10-05.md`
   - *Scopo:* Presente registro analitico di ogni modifica apportata alla codebase.

---

## 2. Modifiche alla Codebase Esistente

### Modifica 1: `visas_immigration/README.md`
* **Righe interessate:** Tabella "Indice dei Paesi e Stato di Verifica" (riga 61).
* **Classificazione:** INTEGRAZIONE INDICE GOVERNANCE.
* **Prima:** La tabella non conteneva la riga dell'Australia (AU).
* **Dopo:** Inserimento della riga dell'Australia (**AU**) con collegamenti diretti a `australia/australia_visas_immigration_guide.md`, `australia_sources.md`, `australia_open_questions.md`, data ultima verifica `2026-10-05`, data revisione `2027-03-31` e stato `VERIFIED (Council 05/10/2026)`.
* **Motivo:** Allineamento della governance dell'archivio unico.
* **ID-Fonte:** N/A (Governance).

### Modifica 2: `data/atlas/au.js`
* **Righe interessate:** Commento di testata (righe 1-9).
* **Classificazione:** AGGIORNAMENTO RUNTIME (C) / RIFERIMENTO ALLA FONTE UNICA (B).
* **Prima:**
  ```javascript
  /* Atlas record: Australia. Read 3 October 2026; log P62
   * (research/verification/round-4g.md). Outside Europe: routes for EU/EEA/Swiss
   * and UK passports only. The Department of Home Affairs and the Tax Office
   * refused automated reads (403) and were not bypassed: the student visa rules
   * are read on Study Australia, the 485 visa and QILT outcomes come from
   * research/places/beyond-europe.md §3. Sydney was the first hub.
  ```
* **Dopo:**
  ```javascript
  /* Atlas record: Australia. Read 3 October 2026; log P62
   * (research/verification/round-4g.md). Outside Europe: routes for EU/EEA/Swiss
   * and UK passports only. Full official guide: visas_immigration/australia/australia_visas_immigration_guide.md.
   * Student visa rules are verified on Study Australia / Home Affairs, the 485 visa and QILT
   * outcomes come from research/places/beyond-europe.md §3 and the official guide. Sydney was the first hub.
  ```
* **Motivo:** Ancoraggio del file runtime alla fonte unica di verità; preservazione dell'integrità dei claim (`au-500`, `au-48h`, `au-485`, `au-uk-entry`) già pienamente verificati e testati nella suite i18n (`tests/i18n-test.js`).
* **ID-Fonte:** `[AU-SRC-01]`, `[AU-SRC-02]`, `[AU-SRC-03]`, `[AU-SRC-04]`, `[AU-SRC-05]`.

### Modifica 3: `research/places/beyond-europe.md`
* **Righe interessate:** §3 (Australia, righe 129-140) e sezione Claims to verify (riga 398).
* **Classificazione:** RIFERIMENTO ALLA FONTE UNICA (B) / RISOLUZIONE GAP (C).
* **Prima:**
  - Nessun rinvio alla cartella `visas_immigration/`.
  - Riga 140: *"I could not verify the student visa fee or processing times from an official page (Claims to verify #5)."*
  - Riga 396: *"5. Australian student visa fee, processing times and the department's own page on the 2027 National Planning Level (page timed out)."*
* **Dopo:**
  - Inserimento dell'intestazione: *"Full official guide and single source of truth: `visas_immigration/australia/australia_visas_immigration_guide.md`."*
  - Risoluzione della nota tariffe con conferma di Student visa Subclass 500 ad AUD 2.500 dal 1° luglio 2026 ex `[AU-SRC-01]`, Subclass 485 ad AUD 5.750 ex `[AU-SRC-04]`, e sussistenza ad AUD 29.710 ex `[AU-SRC-13]`.
  - Marcatura del claim #5 come `RESOLVED` con rinvio a `visas_immigration/australia/australia_visas_immigration_guide.md`.
* **Motivo:** Eliminazione di dati incerti e centralizzazione informativa.
* **ID-Fonte:** `[AU-SRC-01]`, `[AU-SRC-02]`, `[AU-SRC-04]`, `[AU-SRC-13]`, `[AU-SRC-37]`.

### Modifica 4: `research/countries/au-australia.md`
* **Righe interessate:** §2 (Visa headline, riga 35), §8 (Gaps, riga 128), §9 (Sources, riga 131).
* **Classificazione:** RIFERIMENTO ALLA FONTE UNICA (B) / RISOLUZIONE GAP (C).
* **Prima:**
  - Riga 35: *"The record's route section has the detail; the Department of Home Affairs refused automated reads, so EU entry rules were not read on its own pages. British citizens need an eVisitor or Electronic Travel Authority to visit (FCDO) [data]."*
  - Riga 128 (Gap 7): *"7. The Department of Home Affairs and the Tax Office refused automated reads; the 485 and QILT figures come from the library (places/beyond-europe.md)."*
* **Dopo:**
  - Riga 35: *"EU/Italian citizens enter on a free eVisitor (subclass 651) or Working Holiday (subclass 417, 18–35). Full official guide and single source of truth: `visas_immigration/australia/australia_visas_immigration_guide.md`."*
  - Riga 128 (Gap 7): *"7. RESOLVED: Full primary rules for Home Affairs, ATO tax rates, Medicare RHCA, and visas (500, 485, 417, 482/SID, GSM) are verified and consolidated in `visas_immigration/australia/australia_visas_immigration_guide.md`."*
  - Inserimento in testa alla bibliografia di: *"- Single source of truth: `visas_immigration/australia/australia_visas_immigration_guide.md`"*.
* **Motivo:** Chiusura definitiva del gap conoscitivo mediante estrazione diretta delle fonti primarie ufficiali.
* **ID-Fonte:** `[AU-SRC-01]`, `[AU-SRC-05]`, `[AU-SRC-08]`, `[AU-SRC-15]`, `[AU-SRC-29]`.

---

## 3. Esito Verifiche Tecniche di Integrità e Regressione

- **Test Suite (`npm test` / `tools/run-tests.js`):** Eseguito con successo. Tutti gli 11 test suite superati al 100% (incluso `tests/i18n-test.js` con 22/22 asserzioni verificate, senza stringhe mancanti o disallineamenti linguistici, e `tests/atlas-test.js` con validazione schemi e briefs).
- **Build Engine (`node tools/build.js`):** Eseguito con successo. Output generato in `_site/` senza errori o warning.
- **Link Checking:** Tutti i collegamenti incrociati interni tra `visas_immigration/README.md`, `australia_visas_immigration_guide.md`, `australia_sources.md` e `australia_open_questions.md` sono validi e verificati.
