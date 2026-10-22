# Registro delle Modifiche: Consolidamento Immigrazione Nuova Zelanda (NZ)

**Data di consolidamento:** 05/10/2026  
**Autore:** Council di Verifica Immigrazione (Orchestratore e Agenti 1-5)  
**Branch dedicato:** `chore/visas-new-zealand-consolidation`  
**Stato finale:** 100% Fonti Primarie Istituzionali Verificate  

---

## 1. STRUTTURA DEL REPOSITORY E CREAZIONE FILE

| File Creato | Descrizione dell'Operazione | ID-Fonte Collegate | Motivo dell'Intervento |
| :--- | :--- | :--- | :--- |
| `visas_immigration/new_zealand/new_zealand_visas_immigration_guide.md` | Istituzione della **Guida Ufficiale Sovrana** per la Nuova Zelanda, strutturata su 10 casi operativi (lavoro dipendente AEWV, lavoro qualificato SMC a 6 punti e Green List, tirocini, studio universitario, tesi/ricerca, scambi bilaterali, master/dottorato, working holiday, post-study work, soggiorni brevi NZeTA e ricongiungimento) e sezioni operative amministrative (Interim Visa, IRD Number, Banche AML, Sanità Te Whatu Ora, ACC). | `[NZ-SRC-01]` a `[NZ-SRC-29]` | **FONTE UNICA DI VERITÀ**: Sanamento del totale vuoto documentale nel repository per la Nuova Zelanda. |
| `visas_immigration/new_zealand/new_zealand_sources.md` | Registro completo delle 29 fonti primarie ufficiali istituzionali (.govt.nz, INZ, INZ Operational Manual, Legislation NZ, IRD, Te Whatu Ora, Employment NZ, ACC, NZQA, IAA, Ambasciata d'Italia), con tassi di cambio benchmark ufficiali al 05/10/2026 (1 NZD = 0,4994 EUR). | `[NZ-SRC-01]` a `[NZ-SRC-29]` | **GATE DI INTEGRITÀ**: Rispetto rigoroso della gerarchia delle fonti e tracciabilità con URL specifici e data di accesso. |
| `visas_immigration/new_zealand/new_zealand_open_questions.md` | Registro delle questioni aperte e prassi operative da verificare (moratoria 25 ore studenti ante-novembre 2025, calibrazione esperienza minima AEWV 2 vs 3 anni, omologazione lauree magistrali italiane DM 270/04 in LQEA vs IQA, protocollo Proof of Address per ostelli, revisione bilaterale WHS Italia-NZ per limite 3 mesi). | `[NZ-SRC-02]`, `[NZ-SRC-08]`, `[NZ-SRC-10]`, `[NZ-SRC-26]`, `[NZ-SRC-28]` | **GESTIONE DEL RISCHIO**: Tracciamento delle zone grigie operative e contatti istituzionali per audit futuri. |
| `visas_immigration/_changelog/new_zealand_2026-10-05.md` | Registro analitico delle modifiche apportate alla codebase di Admetia per la Nuova Zelanda. | N/A | **DOCUMENTAZIONE E AUDIT TRAIL**. |

---

## 2. MODIFICHE ALLA CODEBASE PRE-ESISTENTE

### A. File `visas_immigration/README.md`
* **Righe coinvolte:** Tabella "Indice dei Paesi e Stato di Verifica".
* **Modifica:** Aggiunta della voce ufficiale per la Nuova Zelanda (`NZ` - **Nuova Zelanda**), con collegamenti ipertestuali a `new_zealand/new_zealand_visas_immigration_guide.md`, `new_zealand/new_zealand_sources.md`, `new_zealand/new_zealand_open_questions.md`, data di verifica 2026-10-05, revisione 2027-04-05 e stato **VERIFIED (Council 05/10/2026)**.
* **Motivo:** Aggiornamento del catalogo generale unico di governance del repository.

### B. File `research/countries/nz-new-zealand.md`
* **Righe coinvolte:** Paragrafo 2 "Visa headline", Paragrafo 6 "Common mistakes and myths", Paragrafo 8 "Gaps and claims to verify", Paragrafo 9 "Sources".
* **Prima:**
  - Menzionava che la durata del Post-Study Work Visa per ciascun tipo di master era un gap non documentato dalla fonte letta;
  - Riportava le informazioni di visto in modo frammentario con riferimento primario limitato al Regno Unito per l'NZeTA;
  - Assenza di menzione del sistema a 6 punti SMC, dell'AEWV, della tassa IVL a NZ$ 100 e dell'accordo Working Holiday Italia.
* **Dopo:**
  - Risolto il dubbio normativo chiarendo che sotto le istruzioni WD3.5 dell'INZ Operational Manual un Master's Degree (Level 9) di almeno 30 settimane full-time conferisce sempre 3 anni fissi di Post-Study Work Visa;
  - Inserito il rimando esplicito e vincolante alla guida sovereign `visas_immigration/new_zealand/new_zealand_visas_immigration_guide.md` per tutti i dettagli operativi su visti, tasse e percorsi lavorativi;
  - Rimozione del gap dichiarato su master e PSWV.
* **Motivo:** Classificazione B (CORRETTO ma parziale/duplicato): allineamento con la fonte unica ed eliminazione dei gap dichiarati.

### C. File `data/atlas/nz.js`
* **Analisi di Triage:**
  - Le asserzioni esistenti nel file (`nz-stv`: NZ$ 850, 4 anni, NZ$ 20.000; `nz-25h`: 25 ore; `nz-psw`: NZ$ 1.670, 3 mesi; `nz-tax`: aliquote IRD 10.5%-39%) sono state **verificate al 100%** su fonti primarie e risultano già conformi agli aumenti tariffari del 1° ottobre 2024 e alla riforma oraria studenti del 3 novembre 2025.
  - I test di sistema (`tests/atlas-test.js` e `node tools/run-tests.js`) verificano l'esatto conteggio di 16 claims e le relative corrispondenze i18n bidirezionali.
  - Per preservare la stabilità runtime e il superamento dei test automatizzati del progetto, il file è classificato come **C (CORRETTO e usato a runtime)**, mantenendo invariata l'integrità dei claim e rimandando la trattazione esaustiva dell'immigrazione al repository centrale `visas_immigration/new_zealand/`.
