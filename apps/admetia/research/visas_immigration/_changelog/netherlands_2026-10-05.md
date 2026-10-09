# Changelog Consolidamento Immigrazione e Visti: Paesi Bassi (NL)
**Data dell'intervento:** 05 Ottobre 2026  
**Autore:** Orchestratore del Council di Verifica Admetia  
**Branch dedicato:** `chore/visas-netherlands-consolidation`  
**Stato di verifica:** Conforme ai Gate di Integrità e all'architettura a Fonte Unica.

---

## 1. Registro delle Modifiche Pianificate e Applicate

| ID Modifica | File Coinvolto | Righe | Contenuto Precedente (Prima) | Contenuto Modificato (Dopo) | Motivo della Modifica | ID-Fonte Ufficiale |
| :---: | :--- | :---: | :--- | :--- | :--- | :---: |
| **CHG-01** | `visas_immigration/README.md` | 30 | Mancava la riga dei Paesi Bassi nella tabella riepilogativa. | Inserita la riga per i Paesi Bassi (NL) con link a guida, fonti, open questions, data 2026-10-05 e stato **VERIFIED (Council 05/10/2026)**. | **C (Governance)**: Aggiornamento del catalogo unico dei paesi consolidati. | `NL-SRC-01` a `NL-SRC-39` |
| **CHG-02** | `visas_immigration/netherlands/netherlands_visas_immigration_guide.md` | File principale | Bozza iniziale con tariffe sponsor 2024 e citazione BuWav obsoleta. | Consolidata l'UNICA fonte di verità con 10 casi d'uso UE vs extra-UE, tariffe sponsor indicizzate 2026 (5.080 € / 2.539 €), BuWav 2022 art. 3.1 lid 2, Zorgtoeslag a 129 €/m, ciclo di onboarding in 3 fasi, 11 Red Flag Traps, pipeline di conversione e 10 checklist documentali. | **C (Creazione Fonte Unica)**: Allineamento agli standard di eccellenza Fase 5. | `NL-SRC-01` a `NL-SRC-39` |
| **CHG-03** | `visas_immigration/netherlands/netherlands_sources.md` | 38, 48-52 | Registro con 35 fonti primarie, BuWav precedente. | Aggiornato `NL-SRC-27` al BuWav 2022 e integrate le fonti primarie `NL-SRC-36` (RvIG RNI Breda/Venlo), `NL-SRC-37` (IND residenza permanente art. 45b Vw 2000), `NL-SRC-38` (Anoniementarief 52%) e `NL-SRC-39` (NLA sanzioni Wav). | **C (Tracciabilità)**: Rispetto del vincolo inderogabile di tracciabilità su fonti primarie. | `NL-SRC-27`, `NL-SRC-36` a `NL-SRC-39` |
| **CHG-04** | `visas_immigration/netherlands/netherlands_open_questions.md` | 24-43 | Registro questioni con 3 conflitti risolti. | Aggiunti i Conflitti 4 (tariffe sponsor 5.080 € / 2.539 €), 5 (BuWav 2022 art. 3.1) e 6 (Zorgtoeslag 129 €/m); aggiornato il monitoraggio RNI 2026 e riforme Governo Schoof (naturalizzazione 10 anni, lingua B1, WIB). | **C (Integrità)**: Confinamento di conflitti risolti e prassi fuori dal testo normativo. | `NL-SRC-02`, `NL-SRC-27`, `NL-SRC-31`, `NL-SRC-36` |
| **CHG-05** | `research/places/visas-and-work-rights.md` | 165 | "The employer must be an IND-recognised sponsor" collocato ambiguamente sotto la Blue Card. | Chiarito che l'Erkend Referent è obbligatorio solo per Kennismigrant mentre per la Carta Blu UE è facoltativo (Dir. 2021/1883); inserito rinvio esplicito a `visas_immigration/netherlands/netherlands_visas_immigration_guide.md`. | **A (Falso/Impreciso)**: Eliminazione dell'ambiguità sullo sponsor Blue Card. | `NL-SRC-04` |
| **CHG-06** | `research/places/visas-and-work-rights.md` | 282 | Nella tabella comparativa dei laureati master, il percorso di residenza permanente era indicato come "CtV #20". | Aggiornato con "5 yrs (permanent residence; 100% PhD count, 50% study count)" e link a `visas_immigration/netherlands/`. | **A (Obsoleto)**: Chiusura del debito informativo nella tabella comparativa. | `NL-SRC-13`, `NL-SRC-37` |
| **CHG-07** | `research/countries/nl-netherlands.md` | 35 | Nota sintetica sui permessi priva di link alla guida consolidata. | Inserito link esplicito alla fonte unica di verità `visas_immigration/netherlands/netherlands_visas_immigration_guide.md`. | **B (Allineamento)**: Centralizzazione delle regole migratorie verso la fonte unica. | `NL-SRC-03`, `NL-SRC-05` |

---

## 2. Creazione della Struttura di Fonte Unica
Sono stati verificati e consolidati i seguenti documenti:
1. `visas_immigration/netherlands/netherlands_visas_immigration_guide.md`: UNICA fonte di verità per i Paesi Bassi, strutturata su 10 casi d'uso operativi UE ed extra-UE, tabella costi amministrativi obbligatori 2026, statuto giuridico di attesa (*Verblijfssticker* e divieto viaggi Schengen senza *Terugkeervisum* a 197 €), protocollo di onboarding in 3 fasi, registro di 11 Red Flag Traps (alloggi e *Anoniementarief* al 52%, *Zorgverzekeringswet* e multe CAK a 529,74 €, soglia 21 anni per partner, MoMi 50%, sanzioni NLA da 8.000 €), pipeline di conversione e 10 checklist documentali.
2. `visas_immigration/netherlands/netherlands_sources.md`: Registro di 39 fonti primarie ufficiali governative con ID univoci (`NL-SRC-01` a `NL-SRC-39`).
3. `visas_immigration/netherlands/netherlands_open_questions.md`: Dossier di 6 conflitti risolti e 3 questioni aperte di monitoraggio prasseologico.
