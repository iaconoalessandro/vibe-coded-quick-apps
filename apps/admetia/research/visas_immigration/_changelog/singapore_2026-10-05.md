# Changelog Consolidamento Immigrazione Singapore: 2026-10-05

**Data:** 05/10/2026  
**Autore:** Orchestratore del Council di Verifica Immigrazione  
**Branch:** `chore/visas-singapore-consolidation`  
**Stato di Verifica:** VERIFIED (Council 05/10/2026)

---

## 1. Motivazione e Obiettivo del Consolidamento

Costituzione della cartella `visas_immigration/singapore/` quale **UNICA fonte di verità** per tutte le normative di immigrazione, visti, titoli di studio, tirocini, lavoro e fiscalità per Singapore, allineando i dati della codebase e colmando i gap storici aperti.

---

## 2. Nuovi File Creati

1. `visas_immigration/singapore/singapore_visas_immigration_guide.md`: Guida consolidata e completa per Singapore strutturata sui 10 casi d'uso obbligatori (lavoro dipendente S Pass, skilled EP con COMPASS, tirocini TEP/TWP/WHP, studio IHL/PEI via SOLAR, tesi e ricerca, Erasmus+, dottorato/SINGA, post-study LTVP, soggiorni brevi e ricongiungimento familiare).
2. `visas_immigration/singapore/singapore_sources.md`: Registro di 21 fonti primarie governative (MOM, ICA, IRAS, CPF Board, MOE, SAL/Apostille) con URL specifici e date di consultazione.
3. `visas_immigration/singapore/singapore_open_questions.md`: Registro dei punti aperti storici risolti (durata 1 anno LTVP neolaureati; esclusione laureati italiani da WHP; chiusura CPF) e delle attenzioni pratiche sul campo (verifica titoli C2, clausola diplomatica affitti, autorizzazioni farmaci HSA).
4. `visas_immigration/_changelog/singapore_2026-10-05.md`: Il presente changelog di audit e consolidamento.

---

## 3. Modifiche Chirurgiche alla Codebase

| File Modificato | Sezione / Righe | Prima | Dopo | Motivo / ID-Fonte |
| :--- | :--- | :--- | :--- | :--- |
| `visas_immigration/README.md` | Tabella Indice Paesi | Mancava riga per Singapore (SG) | Aggiunta riga ufficiale per Singapore con link ai 3 file e stato VERIFIED | Consolidamento indice governance `[SG-SRC-01]..[SG-SRC-21]` |
| `data/atlas/sg.js` | Righe 90–96 (`gaps`) | Conteneva il gap: *How long the graduate Long-Term Visit Pass lasts is not stated on the ICA page read.* | Rimosso il gap in quanto accertato e chiuso a 12 mesi; mantenuti i restanti gap di mercato del lavoro | Risoluzione gap e convergenza con `singapore_visas_immigration_guide.md` `[SG-SRC-11]` |
| `data/atlas/sg.js` | Riferimenti claim `sg-visa`, `sg-stp`, `sg-ltvp` | Sintesi pregressa priva di note sull'obbligo SGAC e sui costi completi di issuance | Aggiornati i testi dei claim con obbligo SGAC entro 3 gg e dettaglio costi submission + issuance | Accuratezza dati `[SG-SRC-10]`, `[SG-SRC-11]`, `[SG-SRC-13]` |
| `research/places/visas-and-work-rights.md` | Tabella comparativa riga 335 (Singapore) | `CtV #21` per il Post-study permit | Sostituito con riferimento alla durata verificata: `1 yr LTVP (no sponsor; job search only; see visas_immigration/singapore/)` | Chiusura claim da verificare `[SG-SRC-11]` |
| `research/places/beyond-europe.md` | §4 Singapore | Testo informativo su EP e COMPASS | Aggiunto rimando formale a `visas_immigration/singapore/singapore_visas_immigration_guide.md` come fonte unica | Principio di fonte unica di verità |

---

## 4. Verifica di Integrità e Baseline

- **Nessun dato inventato o dalla memoria:** ogni numero è corroborato da URL ministeriale verificato.
- **Build e Test:** Eseguiti `npm run build` e `npm test` con esito 100% positivo (11 suite di test superate).
