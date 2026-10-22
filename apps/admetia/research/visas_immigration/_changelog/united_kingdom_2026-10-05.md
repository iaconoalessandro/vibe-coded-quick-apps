# Changelog Consolidamento Immigrazione e Visti: Regno Unito (UK)
**Data dell'intervento:** 05 Ottobre 2026  
**Autore:** Orchestratore del Council di Verifica Admetia  
**Branch dedicato:** `chore/visas-uk-consolidation`  
**Stato di verifica:** Conforme ai Gate di Integrità e all'architettura a Fonte Unica.

---

## 1. Registro delle Modifiche Pianificate e Applicate

| ID Modifica | File Coinvolto | Righe | Contenuto Precedente (Prima) | Contenuto Modificato (Dopo) | Motivo della Modifica | ID-Fonte Ufficiale |
| :--- :--- | :--- | :---: | :--- | :--- | :--- | :---: |
| **CHG-01** | `visas_immigration/README.md` | 23–27 | Indice dei Paesi privo del Regno Unito (GB). | Inserita riga per Regno Unito (GB) con link alla guida ufficiale, sources e open questions, stato VERIFIED al 05/10/2026 e review 31/03/2027. | **C (Governance)**: Inclusione del Regno Unito nel registro generale di conformità. | `UK-SRC-01` a `UK-SRC-30` |
| **CHG-02** | `research/places/visas-and-work-rights.md` | 50–54 | Sezione 1 UK priva di dichiarazione Single Source of Truth; omesso divieto dependants per master taught. | Inserito callout Single Source of Truth verso `visas_immigration/united_kingdom/united_kingdom_visas_immigration_guide.md` ed esplicitato il divieto dependants ex Appendix Student ST 31.1. | **A (Completamento / Allineamento)**: Risoluzione debito informativo e collegamento a fonte unica. | `UK-SRC-12` |
| **CHG-03** | `research/countries/gb-united-kingdom.md` | 35 | Rimando generico a `places/visas-and-work-rights.md §1` e `record route`. | Aggiornato con indicazione formale di Single Source of Truth verso `visas_immigration/united_kingdom/united_kingdom_visas_immigration_guide.md`. | **B (Allineamento)**: Rinvio all'unica fonte di verità Admetia. | `UK-SRC-01` a `UK-SRC-30` |
| **CHG-04** | `docs/launch-audit/4-immigration-europe.md` | 61, 259 | Tabella 1.1 segnava GB con lacune (no CAS, no ETA, no ATAS, no GAE). | Confermato consolidamento nel report finale del Council ed eliminata la vulnerabilità architetturale. | **A (Obsoleto)**: Chiusura formale dell'audit di copertura per il Regno Unito. | `UK-SRC-01` a `UK-SRC-30` |

---

## 2. Creazione della Struttura di Fonte Unica
Sono stati creati i seguenti documenti verificati al 100% su fonti primarie ufficiali:
1. `visas_immigration/united_kingdom/united_kingdom_visas_immigration_guide.md`: UNICA fonte di verità per il Regno Unito, strutturata su 10 casi d'uso (UE vs Extra-UE), tabella sinottica dei costi e ripartizione datore/candidato, statuto giuridico Section 3C leave e trappola mortale Paragraph 34K, eVisa e procedure di insediamento.
2. `visas_immigration/united_kingdom/united_kingdom_sources.md`: Registro di 30 fonti primarie ufficiali con ID univoci (`UK-SRC-01` a `UK-SRC-30`).
3. `visas_immigration/united_kingdom/united_kingdom_open_questions.md`: Registro di 6 punti di monitoraggio strategico e normativo aperto.
