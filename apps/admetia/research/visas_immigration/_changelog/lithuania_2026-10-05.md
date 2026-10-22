# Registro delle Modifiche (Changelog): Lituania (LT)

**Data di consolidamento:** 05/10/2026  
**Operatore / Orchestratore:** Council di verifica immigrazione Admetia  
**Branch git dedicato:** `chore/visas-lithuania-consolidation`  
**Obiettivo:** Istituzione della cartella `visas_immigration/lithuania/` come **UNICA fonte di verità** per la Lituania; risoluzione delle lacune informative pregresse (blocco HTTP 403 su Migracija, incertezza orari studenti post-maggio 2026, mancata verifica della registrazione UE dopo 3 mesi), colmatura analitica dei 10 casi d'uso (UE vs Extra-UE), e allineamento alla normativa statale consolidata al 05/10/2026 (*UTPĮ* Nr. IX-2206 e riforma Legge Nr. XV-945 del 14/05/2026 in vigore dal 22/05/2026, *Vyriausybės nutarimas Nr. 1458*, *Vyriausybės nutarimas Nr. 700* MMA 2026, *Konsulinio mokesčio įstatymas* Nr. I-509, *Sveikatos draudimo įstatymas*, *Užimtumo įstatymas*).

---

## 1. File Creati (Struttura della Fonte Unica di Verità)

1. `visas_immigration/lithuania/lithuania_visas_immigration_guide.md`
   - *Scopo:* Guida ufficiale consolidata e verificata su fonti primarie lituane (TAR, Migracijos departamentas / MIGRIS, URM, Užimtumo tarnyba, Sodra, VMI, Registrų centras, Invest Lithuania).
   - *Contenuto:* Architettura istituzionale e giudiziaria; procedura di registrazione cittadini UE entro 3 mesi (*pažyma*, tassa 10 €); procedura TRP lavoro subordinato ordinario (160 € / 320 €, fine dei visti D generici dal 01/07/2024, quota nazionale 2026 di 24.706 posizioni esaurita il 07/09/2026, vincolo retributivo post-quota 1,2 VDU = 2.893,68 €/mese); Carta Blu UE (*ES Mėlynoji kortelė*, soglia ordinaria 1,5 VDU = 3.617,10 €/mese, soglia 1,2 VDU = 2.893,68 €/mese, contratto min. 6 mesi, qualifica o 5 anni exp / 3 anni ICT, esenzione totale da quote e parere Užimtumo tarnyba, ricongiungimento immediato); tirocini curriculari (*trišalė*) ed extracurriculari (*savanoriška praktika* max 29 anni e 2 mesi, obbligo assicurazione infortuni Sodra a carico datore); studio universitario (TRP studio, sussistenza 2026 pari a 0,5 MMA = 576,50 €/mese + 1 MMA rimpatrio = 1.153 € per un totale di 8.071 €/anno, riforma 22/05/2026 con limite 20h solo per bachelor I-II anno e 40h per magistrali/dottorandi/bachelor III-IV anno); ricerca scientifica (*priėmimo sutartis / hosting agreement*); mobilità intra-UE studenti ex Direttiva 2016/801 fino a 360 giorni con sola notifica ateneo su MIGRIS senza visto/TRP lituano; dottorato di ricerca (borsa esente GPM 0%, Sodra VSD 0%, sanità PSD coperta dallo Stato, lavoro full-time 40h); Working Holiday (Giappone, Canada, Nuova Zelanda; visto D 140 €, convertibile in loco); post-studio 12 mesi ex art. 40 c. 1 n. 4 UTPĮ (esenzione una tantum tassa statale 160 €, fondi 14.989 €, esenzione decennale dal test di mercato); soggiorni brevi Schengen C (90 €) ed EES/ETIAS; ricongiungimento familiare (superficie minima 7 mq netti per persona, attesa 2 anni per lavoro ordinario vs immediato per Carta Blu/ricerca); adempimenti post-arrivo (*asmens kodas*, dichiarazione di residenza entro 1 mese, onboarding bancario consigliato su Revolut Bank UAB con IBAN lituano); red team warning su assenza di visto ponte durante attesa TRP e preclusione versamento PSD autonomo per titolari di TRP non dipendenti.
2. `visas_immigration/lithuania/lithuania_sources.md`
   - *Scopo:* Registro completo di 28 fonti primarie ufficiali con codici univoci da `[LT-SRC-01]` a `[LT-SRC-28]`, con URL specifici aperti e verificati al 05/10/2026.
3. `visas_immigration/lithuania/lithuania_open_questions.md`
   - *Scopo:* Tracciamento delle questioni aperte per monitoraggio periodico (saturazione appuntamenti MIGRIS e regional hack, commissioni istruttorie bancarie 200–250 € vs Direttiva PAD, riluttanza dei locatori privati alla dichiarazione anagrafica "be deklaravimo", attuazione controlli linguistici A1/A2 dal 01/01/2026, misure restrittive geopolitiche RU/BY).
4. `visas_immigration/_changelog/lithuania_2026-10-05.md`
   - *Scopo:* Presente registro analitico di ogni modifica apportata alla codebase.

---

## 2. Modifiche alla Codebase Esistente

### Modifica 1: `visas_immigration/README.md`
* **Righe interessate:** Tabella "Indice dei Paesi e Stato di Verifica" (nuova riga 40).
* **Classificazione:** INTEGRAZIONE INDICE GOVERNANCE.
* **Prima:** La Lituania (**LT**) non era presente nella tabella riassuntiva dei Paesi verificati.
* **Dopo:** Inserimento della riga della Lituania (**LT**) con collegamenti diretti a `lithuania/lithuania_visas_immigration_guide.md`, `lithuania/lithuania_sources.md`, `lithuania/lithuania_open_questions.md`, data ultima verifica `2026-10-05`, data revisione `2027-03-31` e stato `VERIFIED (Council 05/10/2026)`.
* **Motivo:** Centralizzazione del sistema di governance e conformità alla Fase 5.
* **ID-Fonte:** N/A (Governance).

### Modifica 2: `data/atlas/lt.js`
* **Righe interessate:** `route.eu` (righe 81–83), `gaps` (righe 104–111), `claims` (righe 114–115) e dizionario `I18N.add('it')` (righe 140–150).
* **Classificazione:** CORRETTO MA DUPLICATO (B) e AGGIORNAMENTO RUNTIME (C).
* **Prima:**
  - `route.eu` riportava solo "Living and working" senza indicare il passaggio formale del certificato di soggiorno per cittadini UE dopo 3 mesi.
  - Nei `gaps` permanevano come insoluti l'accesso ai requisiti di registrazione UE e la conferma dell'orario di lavoro per studenti di master dopo la riforma del maggio 2026.
  - Il claim `lt-eu` affermava categoricamente che i cittadini UE non hanno bisogno di permessi, omettendo l'obbligo di registrazione della *pažyma* dopo 3 mesi.
* **Dopo:**
  - Inserito in `route.eu` il passaggio: `{ k: 'Registration certificate', c: ['lt-eu-reg'] }`.
  - Aggiunto il claim `lt-eu-reg` verificato su fonte primaria (artt. 98¹–100 UTPĮ, tassa 10 €, 1 mese di rilascio, dichiarazione residenza locale).
  - Aggiornato `lt-20h` specificando che il limite di 20 ore si applica solo al 1° e 2° anno di triennale, mentre gli studenti magistrali e di dottorato possono lavorare fino a 40 ore (tempo pieno).
  - Aggiornato il blocco `gaps` certificando che tutte le regole su visti, permessi e soglie sono consolidate nella guida unica `visas_immigration/lithuania/lithuania_visas_immigration_guide.md`.
  - Allineate tutte le traduzioni italiane corrispondenti.
* **Motivo:** Risoluzione definitiva dei gap storici del repository e allineamento alla fonte unica di verità senza regressioni sui test.
* **ID-Fonte:** `[LT-SRC-01]`, `[LT-SRC-02]`, `[LT-SRC-03]`, `[LT-SRC-10]`, `[LT-SRC-11]`, `[LT-SRC-12]`.

### Modifica 3: `research/countries/lt-lithuania.md`
* **Righe interessate:** §1 (Bottom line, riga 20), §7 (Decision rules, riga 91), §8 (Gaps and claims, righe 94–101) e §9 (Sources, riga 111).
* **Classificazione:** RIFERIMENTO ALLA FONTE UNICA (B) e AGGIORNAMENTO OBSOLETO (A).
* **Prima:** Indicava il blocco nell'accesso al sito del Dipartimento della Migrazione e lasciava come aperti i requisiti di registrazione UE e i limiti orari per master.
* **Dopo:** Inserito il rinvio esplicito a `visas_immigration/lithuania/lithuania_visas_immigration_guide.md` e `lithuania_sources.md`; rimossi i gap risolti; chiarito che dal 22/05/2026 gli studenti master lavorano a tempo pieno (40h) e che i cittadini UE richiedono la *pažyma* dopo 3 mesi (10 €).
* **Motivo:** Eliminazione di frammentazioni informative e superamento dei blocchi tecnici di lettura.
* **ID-Fonte:** `[LT-SRC-01]`, `[LT-SRC-02]`, `[LT-SRC-11]`.

### Modifica 4: `research/verification/claims-to-verify.md`
* **Righe interessate:** Tabella claims, riga 145 (ID P57 - Lithuania).
* **Classificazione:** AGGIORNAMENTO AUDIT STORICO (B).
* **Prima:** Registrava 6 claim (5 letti, 1 dalla library) con gap aperti: *"The EU registration step after three months could not be read; The working-hours limit for non-EU master’s students after the May 2026 amendments was not confirmed"*.
* **Dopo:** Aggiornato lo stato a `CONFIRMED & FULLY VERIFIED (Council 05/10/2026)`, indicando che tutti i gap sull'immigrazione lituana sono stati integralmente risolti e consolidati in `visas_immigration/lithuania/`.
* **Motivo:** Chiusura formale del debito di verifica del registro di audit.
* **ID-Fonte:** `[LT-SRC-01]`, `[LT-SRC-02]`, `[LT-SRC-11]`.
