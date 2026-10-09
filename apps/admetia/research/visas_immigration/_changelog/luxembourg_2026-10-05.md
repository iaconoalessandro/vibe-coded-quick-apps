# Registro delle Modifiche (Changelog): Lussemburgo (LU)

**Data di consolidamento:** 05/10/2026  
**Operatore / Orchestratore:** Council di verifica immigrazione Admetia  
**Branch git dedicato:** `chore/visas-luxembourg-consolidation`  
**Obiettivo:** Istituzione della cartella `visas_immigration/luxembourg/` come **UNICA fonte di verità** per il Granducato di Lussemburgo; risoluzione sistematica di gap informativi, parametri obsoleti e allineamento alla normativa consolidata al 05/10/2026.

---

## 1. File Creati (Struttura della Fonte Unica di Verità)

1. `visas_immigration/luxembourg/luxembourg_visas_immigration_guide.md`
   - *Scopo:* Guida ufficiale consolidata e verificata su fonti primarie (Legilux, Guichet.lu, ADEM, CCSS, STATEC, FNS, Direction générale de l'immigration, Direction de la santé).
   - *Contenuto:* Architettura istituzionale; onboarding amministrativo a 6 pilastri; matrice completa dei 12 casi d'uso (UE/SEE/CH vs Extra-UE); parametri salariali e sociali indicizzati al 1° giugno 2026 (indice 992,24: SSM non-qualifié € 2.771,33, qualifié € 3.325,60, soglia Carta Blu € 65.652,00, soglia studenti 80% REVIS € 1.555,52); realtà pratica (riforma locazioni 2024, divieto regolarizzazione in loco ex art. 39, trappola fiscale del 33%, regime frontalieri 34 giorni); checklist documentali operative.
2. `visas_immigration/luxembourg/luxembourg_sources.md`
   - *Scopo:* Registro completo delle 30 fonti primarie ufficiali con codici univoci da `[LU-SRC-01]` a `[LU-SRC-30]`, con URL specifici aperti e verificati al 05/10/2026.
3. `visas_immigration/luxembourg/luxembourg_open_questions.md`
   - *Scopo:* Tracciamento delle questioni aperte per monitoraggio periodico (previsione scatto indice 2027, riforma delle classi d'imposta ACD, lista annuale ADEM dei mestieri in penuria 2027, prassi comunali sulla co-locazione).
4. `visas_immigration/_changelog/luxembourg_2026-10-05.md`
   - *Scopo:* Presente registro analitico di ogni modifica apportata alla codebase.

---

## 2. Modifiche alla Codebase Esistente

### Modifica 1: `visas_immigration/README.md`
* **Righe interessate:** Tabella "Indice dei Paesi e Stato di Verifica".
* **Classificazione:** INTEGRAZIONE INDICE GOVERNANCE.
* **Prima:** La tabella conteneva 10 Paesi (IT, FR, PT, IE, ES, IS, GB, BE, DK, CH), con assenza della riga per il Lussemburgo.
* **Dopo:** Inserimento della riga del Lussemburgo (**LU**) con collegamenti diretti a `luxembourg/luxembourg_visas_immigration_guide.md`, `luxembourg_sources.md`, `luxembourg_open_questions.md`, data ultima verifica `2026-10-05`, data revisione `2027-03-31` e stato `VERIFIED (Council 05/10/2026)`.
* **Motivo:** Allineamento della governance dell'archivio unico.
* **ID-Fonte:** N/A (Governance).

### Modifica 2: `data/atlas/lu.js`
* **Righe interessate:** Sezione `route`, `arrival`, `claims` (`lu-eu`, `lu-15h`, `lu-59`), `gaps` e traduzioni `it`.
* **Classificazione:** FALSO / OBSOLETO (A) e CORRETTO MA DUPLICATO (B).
* **Prima:**
  - `lu-eu`: riportava solo l'obbligo di registrazione entro 3 mesi, omettendo la *Déclaration d'arrivée* entro 8 giorni.
  - `lu-59`: asseriva obsoletamente che solo i laureati di un ciclo quinquennale potevano ottenere un permesso per un lavoro correlato, omettendo il permesso post-studio di 12 mesi per ricerca lavoro introdotto dalle riforme 2018/2023.
  - `gaps`: lamentava la mancata verifica della dichiarazione d'arrivo e del titolo post-studio a causa dello spostamento delle pagine di Guichet.lu.
* **Dopo:**
  - Aggiornamento dei claim `lu-eu` (integrando i due termini: 8 giorni arrivo + 3 mesi registrazione ex `[LU-SRC-01]`, `[LU-SRC-11]`, `[LU-SRC-12]`).
  - Aggiornamento di `lu-59` con la nuova norma consolidata (titolo per ricerca lavoro di 12 mesi per diplomati di master/dottorato ed esenzione dal test ADEM per impiego correlato ex `[LU-SRC-01]`, `[LU-SRC-05]`, `[LU-SRC-18]`).
  - Chiusura dei gap sull'immigrazione con rinvio esplicito alla guida unica: `visas_immigration/luxembourg/luxembourg_visas_immigration_guide.md`.
  - Aggiornamento coerente delle stringhe localizzate in italiano.
* **Motivo:** Eliminazione di dati parziali o obsoleti e centralizzazione nella fonte unica di verità.
* **ID-Fonte:** `[LU-SRC-01]`, `[LU-SRC-05]`, `[LU-SRC-08]`, `[LU-SRC-11]`, `[LU-SRC-12]`, `[LU-SRC-18]`.

### Modifica 3: `research/countries/lu-luxembourg.md`
* **Righe interessate:** §1 (Bottom line riga 21), §2 (riga 35) e §8 (Gaps riga 88).
* **Classificazione:** OBSOLETO (A) e RIFERIMENTO ALLA FONTE UNICA (B).
* **Prima:**
  - Segnalava: "the job-search permit length was not re-read... declaration-of-arrival rule and job-search permit length were not re-read after guichet.lu moved its pages".
* **Dopo:**
  - Chiarimento sulla durata di 12 mesi del titolo post-studio per master/dottorato e sui termini anagrafici (3 giorni lavorativi extra-UE, 8 giorni UE).
  - Inserimento del banner istituzionale di rinvio a `visas_immigration/luxembourg/luxembourg_visas_immigration_guide.md`.
* **Motivo:** Risoluzione definitiva dei gap di ricerca a seguito dell'audit su fonti primarie al 05/10/2026.
* **ID-Fonte:** `[LU-SRC-01]`, `[LU-SRC-05]`, `[LU-SRC-11]`, `[LU-SRC-18]`.

---

## 3. Esito del Controllo di Integrità e Baseline

- **Verifica build/test prima delle modifiche:** `npm test` ha superato con successo tutte le 11 suite di test (89 test passati in `tests/atlas-test.js`); `npm run build` ha completato regolarmente la compilazione.
- **Verifica parametri economici:** Tutti i valori quantitativi (SSM non-qualifié € 2.771,33, qualifié € 3.325,60, soglia ordinaria Carta Blu € 65.652,00, soglia penuria € 47.174,00, fondo studenti € 1.555,52/mese) sono ancorati a fonti primarie ufficiali aggiornate con l'indice mobile 992,24 scattato il 1° giugno 2026.
