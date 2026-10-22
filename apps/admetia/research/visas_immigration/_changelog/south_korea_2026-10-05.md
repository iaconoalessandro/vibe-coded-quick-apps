# Registro delle Modifiche: Consolidamento Immigrazione Corea del Sud (KR)

**Data di consolidamento:** 05/10/2026  
**Autore:** Council di Verifica Immigrazione (Orchestratore e Agenti 1-5)  
**Branch dedicato:** `chore/visas-south-korea-consolidation`  
**Stato finale:** 100% Fonti Primarie Istituzionali Verificate  

---

## 1. STRUTTURA DEL REPOSITORY E CREAZIONE FILE

| File Creato | Descrizione dell'Operazione | ID-Fonte Collegate | Motivo dell'Intervento |
| :--- | :--- | :--- | :--- |
| `visas_immigration/south_korea/south_korea_visas_immigration_guide.md` | Istituzione della **Guida Ufficiale Sovrana** per la Corea del Sud, strutturata su 10 casi operativi (lavoro dipendente, lavoro qualificato, internship, studio bachelor/master, tesi/ricerca, Erasmus+/scambi, master/PhD, working holiday, post-study work, soggiorni brevi e ricongiungimento) e sezione operativa amministrativa. | `[KR-SRC-01]` a `[KR-SRC-25]` | **FONTE UNICA DI VERITÀ**: Sanamento del totale vuoto documentale nel repository per la Repubblica di Corea. |
| `visas_immigration/south_korea/south_korea_sources.md` | Registro completo delle 25 fonti primarie ufficiali istituzionali (.go.kr, KIS, HiKorea, MOJ, MOFA, K-ETA, BOK, MOEL, NHIS), con tassi di cambio benchmark ufficiali al 05/10/2026 (1 EUR = 1.518,21 KRW). | `[KR-SRC-01]` a `[KR-SRC-25]` | **GATE DI INTEGRITÀ**: Rispetto della gerarchia delle fonti e tracciabilità con URL specifici e data di accesso. |
| `visas_immigration/south_korea/south_korea_open_questions.md` | Registro delle questioni aperte e prassi consolari da monitorare periodicamente (K-ETA post-2026, sblocco negoziale conversione H-1 per italiani, Mobile ARC e conti bancari, rimborso NPS, soglie Partita IVA forfettaria per visto nomadi digitali F-1-D). | `[KR-SRC-08]`, `[KR-SRC-09]`, `[KR-SRC-16]`, `[KR-SRC-25]` | **GESTIONE DEL RISCHIO**: Tracciamento delle zone grigie e contatti istituzionali per audit futuri. |
| `visas_immigration/_changelog/south_korea_2026-10-05.md` | Registro analitico delle modifiche apportate alla codebase di Admetia. | N/A | **DOCUMENTAZIONE E AUDIT TRAIL**. |

---

## 2. MODIFICHE ALLA CODEBASE PRE-ESISTENTE

### A. File `visas_immigration/README.md`
* **Righe coinvolte:** Tabella "Indice dei Paesi e Stato di Verifica".
* **Modifica:** Aggiunta della voce ufficiale per la Corea del Sud (`KR` - **Corea del Sud**), con collegamenti ipertestuali a `south_korea_visas_immigration_guide.md`, `south_korea_sources.md`, `south_korea_open_questions.md`, data di verifica 2026-10-05, revisione 2027-03-31 e stato **VERIFIED (Council 05/10/2026)**.
* **Motivo:** Aggiornamento del catalogo generale unico di governance del repository.

### B. File `data/atlas/kr.js`
* **Righe coinvolte:** Sezione `claims`, `summary`, `gaps`, e dizionario i18n (`I18N.add('it', ...)`).
* **Prima:**
  - `kr-uk-entry`: limitato ai soli cittadini britannici;
  - `kr-30h`: riferito unicamente a una pagina della Yonsei University senza inquadramento normativo del TOPIK né delle sanzioni;
  - `kr-ajou`: tariffa di cambio status obsoleta fissata a KRW 130.000;
  - `kr-top200`: assenza di indicazione sui ranking mondiali validi;
  - Sezione `gaps`: indicazione di gap informativi sull'ingresso per passaporti UE, tasse e visti lavoro.
* **Dopo:**
  - `kr-uk-entry`: esteso a cittadini italiani ed europei in virtù dell'accordo bilaterale di esenzione visto B-1 (90 gg) e della proroga dell'esenzione K-ETA fino al 31/12/2026, con divieto assoluto di lavoro subordinato;
  - `kr-30h`: chiarita la subordinazione normativa del lavoro a 30 ore settimanali (feriali) al possesso del livello TOPIK 3/4 o a corsi in lingua inglese, e riduzione a 10 ore in caso contrario;
  - `kr-ajou`: aggiornata la tariffa statale di cambio status da KRW 130.000 a KRW 135.000 allo sportello (o KRW 115.000 online) in vigore dal 2025/2026 con il chip IC;
  - `kr-top200`: esplicitato il riconoscimento ufficiale dei ranking mondiali QS e Times Higher Education (THE);
  - Rimozione dei gap informativi ora integralmente coperti dalla guida in `visas_immigration/south_korea/`;
  - Allineamento delle chiavi di traduzione italiana in `I18N.add('it', ...)`.
* **Motivo:** Classificazione C (CORRETTO e usato a runtime). Eliminazione di dati obsoleti/parziali e sincronizzazione con la fonte unica di verità `[KR-SRC-01]`, `[KR-SRC-03]`, `[KR-SRC-04]`, `[KR-SRC-09]`, `[KR-SRC-10]`, `[KR-SRC-11]`.

### C. File `research/countries/kr-south-korea.md`
* **Righe coinvolte:** Paragrafo 2 "Visa headline", Paragrafo 8 "Gaps and claims to verify", Paragrafo 9 "Sources".
* **Modifica:** Aggiornamento dei riferimenti al visto D-10, all'esenzione K-ETA per passaporti italiani/UE al 31/12/2026, all'esenzione Top 200 per classifiche QS/THE e inserimento del puntatore alla guida ufficiale `visas_immigration/south_korea/south_korea_visas_immigration_guide.md`.
* **Motivo:** Classificazione B (CORRETTO ma parziale/duplicato): allineamento con la fonte unica ed eliminazione dei gap dichiarati.
