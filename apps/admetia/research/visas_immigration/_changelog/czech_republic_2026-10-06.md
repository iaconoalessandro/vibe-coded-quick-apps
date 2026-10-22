# Registro delle Modifiche (Changelog): Repubblica Ceca (CZ)

**Data di consolidamento:** 06/10/2026 (Data di audit normativo: 05/10/2026)  
**Operatore / Orchestratore:** Council di verifica immigrazione Admetia  
**Branch git dedicato:** `chore/visas-czech-republic-consolidation`  
**Obiettivo:** Istituzione della cartella `visas_immigration/czech_republic/` come **UNICA fonte di verità** per la Repubblica Ceca; superamento del gap informativo preesistente (< 5% di copertura), integrazione della matrice completa dei 10 casi d'uso (UE vs Extra-UE) e allineamento all'ordinamento vigente (*Zákon č. 326/1999 Sb.*, *Zákon č. 435/2004 Sb.*, *Zákon č. 278/2023 Sb.* per la fine del monopolio pVZP e massimale 400 000 EUR, *Zákon č. 349/2023 Sb.* per l'abolizione definitiva delle marche da bollo cartacee *kolky*, *Zákon č. 163/2024 Sb.* e *NV č. 158/2024 Sb.* per l'abrogazione del test del mercato del lavoro preventivo e libero accesso per 9 Paesi, *Sdělení MPSV č. 356/2025 Sb.* per il salario minimo 2026 a 22 400 CZK, *Sdělení MPSV č. 44/2026 Sb.* per la soglia Carta Blu UE 2026/2027 a 73 823 CZK/mese, *NV č. 55/2024 Sb.* sul blocco visti Russia/Bielorussia, e l'accordo Working Holiday col Perù attivo dal 01/02/2026).

---

## 1. File Creati (Struttura della Fonte Unica di Verità)

1. `visas_immigration/czech_republic/czech_republic_visas_immigration_guide.md`
   - *Scopo:* Guida ufficiale consolidata e verificata su fonti primarie ceche (MVČR, OAMP/IPC, MPSV, MZV, ČNB, ČSÚ, e-Sbírka).
   - *Contenuto:* Architettura istituzionale e giudiziaria; procedura di registrazione cittadini UE entro 30 giorni alla Polizia degli Stranieri e *Osvědčení o registraci* (200 CZK); Carta del Dipendente (*Zaměstnanecká karta*, duale vs non-duale, abolizione test preventivo del mercato del lavoro ex L. 163/2024 Sb., vincolo 6 mesi per cambio datore); Carta Blu UE (*Modrá karta*, soglia 2026/2027 di 73 823 CZK lordi/mese = 885 870 CZK/anno, contratto min. 6 mesi, deroga per esperienza ICT triennale, esenzione dal corso di integrazione e ricongiungimento immediato); tirocini curriculari (esenti ex art. 98 písm. j) ed extracurriculari (*stáž* ex art. 64 písm. d); studio universitario accreditato (visto D a 2 500 CZK, permesso lungo termine studio, libero accesso al mercato del lavoro senza limiti orari di legge per corsi accreditati a tempo pieno ex art. 98 písm. j; prova fondi ex art. 13 su existenční minimum = 115 810 CZK per 1 anno e 78 250 CZK per 6 mesi; assicurazione commerciale complessa min. 400 000 EUR senza franchigia ex L. 278/2023 Sb.); ricerca scientifica (art. 42f, convenzione di accoglienza *Dohoda o hostování* con ente accreditato RVVI ed esenzione lavoro ex art. 98 písm. n); mobilità intra-UE studenti fino a 360 giorni ex art. 42t senza nuovo visto; dottorato di ricerca (doppio status: borsa esente da imposte DPFO ex art. 4 TUIR e zero contributi, sanità pubblica pagata dallo Stato per dottorandi over 26 a tempo pieno ex art. 7 L. 48/1997 Sb.); Working Holiday (9 Paesi partner incluso Perù dal 01/02/2026, visto D/VC/00/-/27, inconvertibilità assoluta in loco); post-study work 9 mesi ex art. 42 odst. 3 e libero accesso a vita al mercato del lavoro per laureati di atenei cechi ex art. 98 písm. m/p con facoltà di switch a carta non-duale o attività d'impresa *Živnost* senza attendere 5 anni; soggiorni brevi Schengen C (90 EUR); ricongiungimento familiare ex art. 42a (requisito stringente di reddito mensile continuativo, i risparmi bancari non bastano); abolizione definitiva delle marche da bollo cartacee *kolky* (pagamenti solo POS/bonifico); trappole Schengen (divieto di viaggio con la sola ricevuta OAMP, obbligo di *Překlenovací štítek* sul passaporto).
2. `visas_immigration/czech_republic/czech_republic_sources.md`
   - *Scopo:* Registro completo di 35 fonti primarie ufficiali con codici univoci da `[CZ-SRC-01]` a `[CZ-SRC-35]`, con URL specifici aperti e verificati al 05/10/2026.
3. `visas_immigration/czech_republic/czech_republic_open_questions.md`
   - *Scopo:* Tracciamento delle questioni aperte per monitoraggio periodico (accentramento consolare a Dresda per residenti Schengen, tempi reali OAMP e azioni contro l'inerzia ex art. 80 Správní řád, disegno di legge sul nuovo codice dell'immigrazione, prassi su Existenční vs Životní minimum per prova fondi, inclusione e pagamenti sanitari minori con permesso).
4. `visas_immigration/_changelog/czech_republic_2026-10-06.md`
   - *Scopo:* Presente registro analitico di ogni modifica apportata alla codebase.

---

## 2. Modifiche alla Codebase Esistente

### Modifica 1: `visas_immigration/README.md`
* **Righe interessate:** Tabella "Indice dei Paesi e Stato di Verifica" (riga 37).
* **Classificazione:** INTEGRAZIONE INDICE GOVERNANCE.
* **Stato:** Allineata con collegamenti diretti a `czech_republic/czech_republic_visas_immigration_guide.md`, `czech_republic/czech_republic_sources.md`, `czech_republic/czech_republic_open_questions.md`, data ultima verifica `2026-10-05`, data revisione `2027-03-31` e stato `VERIFIED (Council 05/10/2026)`.
* **Motivo:** Governance del sistema di riferimento unico Admetia.
* **ID-Fonte:** N/A (Governance).

### Modifica 2: `data/atlas/cz.js`
* **Righe interessate:** `gaps` (righe 147–153), `claims` (righe 156–158) e traduzioni in `I18N.add('it')` (righe 196–201).
* **Classificazione:** CORRETTO MA DUPLICATO (B) e AGGIORNAMENTO RUNTIME (C).
* **Prima:**
  - I claim riportavano genericamente le norme senza ancoraggio alle nuove disposizioni 2026, omettevano il riferimento alla guida unica monografica e non specificavano le condizioni di accreditamento accademico né l'accesso permanente al mercato del lavoro per i laureati.
* **Dopo:**
  - Inserimento nel blocco `gaps` del puntatore alla guida unica: `'All Czech immigration, visa, residence permit, work authorization and salary rules are consolidated from primary sources in visas_immigration/czech_republic/czech_republic_visas_immigration_guide.md.'` con rispettiva traduzione italiana.
  - Aggiornamento del campo `by` nei claim `cz-eu`, `cz-work` e `cz-grad` con rinvio esplicito a `visas_immigration/czech_republic/czech_republic_visas_immigration_guide.md` e alle norme puntuali (*Zákon č. 326/1999 Sb.* artt. 42 odst. 3, 87a, 93; *Zákon č. 435/2004 Sb.* art. 98), preservando l'integrità del testo dei claim per la piena corrispondenza con i test di build e internazionalizzazione.
* **Motivo:** Centralizzazione del dato e rimozione del rischio di divergenze informative.
* **ID-Fonte:** `[CZ-SRC-01]`, `[CZ-SRC-02]`, `[CZ-SRC-04]`, `[CZ-SRC-08]`, `[CZ-SRC-10]`, `[CZ-SRC-26]`.

### Modifica 3: `research/places/visas-and-work-rights.md`
* **Righe interessate:** Sezione 6 ("Other EU countries").
* **Classificazione:** INTEGRAZIONE FONTE UNICA (B).
* **Prima:** La Repubblica Ceca non era presente nella trattazione comparativa dei visti e permessi di lavoro europei.
* **Dopo:** Inserimento della sottosezione organica `- **Czech Republic:**` con rinvio istituzionale a `visas_immigration/czech_republic/czech_republic_visas_immigration_guide.md`, sintesi dei parametri cardine (Carta Blu 73 823 CZK/mese = 885 870 CZK/anno per 2026/2027 ex Sdělení č. 44/2026 Sb.; salario minimo 2026 a 22 400 CZK/mese; soppressione del test del mercato del lavoro preventivo e libero accesso per 9 Paesi ex L. 163/2024 Sb. e NV 158/2024 Sb.; studenti universitari accreditati a tempo pieno con libero accesso al lavoro ex art. 98 písm. j; laureati di atenei cechi con libero accesso permanente ex art. 98 písm. m/p e 9 mesi di ricerca lavoro ex art. 42 odst. 3; abolizione totale delle marche da bollo *kolky*; massimale assicurazione complessa a 400 000 EUR senza franchigia ex L. 278/2023 Sb.; competenza consolare per residenti Schengen accentrata a Dresda).
* **Motivo:** Centralizzazione del dato ed eliminazione di frammentazioni.
* **ID-Fonte:** `[CZ-SRC-01]`, `[CZ-SRC-02]`, `[CZ-SRC-06]`, `[CZ-SRC-07]`, `[CZ-SRC-08]`, `[CZ-SRC-09]`, `[CZ-SRC-10]`, `[CZ-SRC-31]`.

### Modifica 4: `research/countries/cz-czech-republic.md`
* **Righe interessate:** §2 (Permits, riga 37) e §9 (Sources, riga 128).
* **Classificazione:** RIFERIMENTO ALLA FONTE UNICA (B).
* **Prima:** Conteneva un riassunto di una riga senza indicare le norme cardine, la Carta Blu o il rinvio alla guida monografica.
* **Dopo:** Inserimento del riferimento esplicito alla guida unica in `visas_immigration/czech_republic/czech_republic_visas_immigration_guide.md`, con sintesi dei parametri principali (Carta Blu 73 823 CZK/mese, salario minimo 22 400 CZK, notifica 30 gg per UE ex art. 93, libero accesso permanente per laureati cechi ex art. 98 písm. m).
* **Motivo:** Allineamento alla fonte unica di verità.
* **ID-Fonte:** `[CZ-SRC-01]`, `[CZ-SRC-02]`, `[CZ-SRC-10]`.

---
*Changelog redatto e validato in conformità agli standard di governance Admetia Fase 5.*
