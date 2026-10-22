# Registro delle Modifiche (Changelog): Arabia Saudita (KSA)

**Data di consolidamento:** 05/10/2026  
**Autore:** Orchestratore del Verification Council  
**Branch:** `chore/visas-saudi-arabia-consolidation`  
**Obiettivo:** Creazione della fonte unica di verità per l'Arabia Saudita in `visas_immigration/saudi_arabia/`, eliminazione dei gap documentali e allineamento dei file della codebase.

---

## 1. File Creati

| File Percorso | Finalità | Note di Rilevanza | ID Fonti Chiave |
| :--- | :--- | :--- | :--- |
| `visas_immigration/saudi_arabia/saudi_arabia_visas_immigration_guide.md` | Guida ufficiale unica e definitiva visti e immigrazione per l'Arabia Saudita | Copre tutti i 10 casi d'uso (lavoro, skilled, internship, studio, ricerca, Erasmus, master/PhD, working holiday, post-studio, soggiorni brevi/famiglia) + Onboarding passo-passo (caso 11). | `[KSA-SRC-01]` a `[KSA-SRC-26]` |
| `visas_immigration/saudi_arabia/saudi_arabia_sources.md` | Registro completo delle fonti primarie e secondarie ufficiali con URL specifici | 26 fonti primarie (MOFA, MHRSD, Qiwa, Jawazat, Absher, Muqeem, Premium Residency, Study in Saudi, CHI, GOSI, SAMA, GASTAT, KAUST). | `[KSA-SRC-01]` a `[KSA-SRC-26]` |
| `visas_immigration/saudi_arabia/saudi_arabia_open_questions.md` | Registro punti aperti, discrepanze tra sportelli e quesiti da verificare manualmente | Traccia i Visitor Accounts SAMA vs conti payroll, l'assenza di tirocini aziendali diretti, tempi SACB Roma per le lauree, crisi compound a Riad e soglie ricongiungimento. | `Q-KSA-01` a `Q-KSA-05` |
| `visas_immigration/_changelog/saudi_arabia_2026-10-05.md` | Registro storico cronologico delle modifiche apportate alla codebase | Il presente documento. | N/A |

---

## 2. Modifiche Chirurgiche alla Codebase

### A. `visas_immigration/README.md`
- **Righe:** Tabella Indice dei Paesi (riga 50).
- **Modifica:** Aggiunta dell'Arabia Saudita (SA) con link alla guida, al registro fonti e alle domande aperte, data di verifica `2026-10-05`, revisione `2027-03-31` e stato `VERIFIED (Council 05/10/2026)`.
- **Motivo:** Registrazione istituzionale dell'Arabia Saudita nell'indice sovrano del repository.
- **ID-Fonte:** `[KSA-SRC-01]`, `[KSA-SRC-08]`.

### B. `data/atlas/sa.js`
- **Righe:** `gaps` (righe 174-175).
- **Prima:**
  ```javascript
  "Entry for EU passports, the Premium Residency tracks and gratuity rules were not read on official pages.",
  "Saudi Arabia offers no study-to-work route for European students in the sources read.",
  ```
- **Dopo:**
  ```javascript
  "Saudi Arabia visas, residency rules, Qiwa contracts, Premium Residency and Study in Saudi routes are fully verified in visas_immigration/saudi_arabia/saudi_arabia_visas_immigration_guide.md.",
  ```
- **Motivo:** Obsoleto / Risolto (i gap su regole d'ingresso UE, Premium Residency, TFR/gratuity, Qiwa e visti studio MOE sono stati interamente reperiti e verificati sulle fonti primarie ufficiali nel Council del 05/10/2026).
- **ID-Fonte:** `[KSA-SRC-01]`, `[KSA-SRC-03]`, `[KSA-SRC-08]`, `[KSA-SRC-09]`, `[KSA-SRC-10]`.

### C. `research/countries/sa-saudi-arabia.md`
- **Righe:** Sezione 2 (*Visa headline*, riga 37) e Sezione 8 (*Gaps and claims to verify*, riga 92).
- **Modifica:** Inserimento del rimando formale a `visas_immigration/saudi_arabia/saudi_arabia_visas_immigration_guide.md` come unica fonte di verità per visti, quote, contratti Qiwa e borse KAUST/Study in Saudi. Risoluzione della dichiarazione di gap su ingresso UE e Premium Residency.
- **Motivo:** Allineamento alla fonte unica di verità (B - Duplicato / Ricerca pregressa).
- **ID-Fonte:** `[KSA-SRC-08]`, `[KSA-SRC-09]`, `[KSA-SRC-10]`.

### D. `research/places/gulf-and-central-eastern-europe.md`
- **Righe:** Sezione 1 (*Saudi Arabia: Nitaqat and Saudisation*, riga 33).
- **Modifica:** Aggiunta di nota introduttiva che rimanda alla guida verificata di `visas_immigration/saudi_arabia/` per i dettagli completi su permessi di soggiorno, Art. 40 e mobilità LRI.
- **Motivo:** Duplicato / Allineamento gerarchico.
- **ID-Fonte:** `[KSA-SRC-01]`, `[KSA-SRC-02]`.

---

## 3. Esito Verifiche e Integrità della Build

- **Test suite (`npm test`):** Tutte le 11 suite di test superate (`All tests passed (11 suites)`).
- **Build di produzione (`npm run build`):** Compilazione superata con successo (`Built _site/`).
- **Verifica link interni:** Nessun link rotto.
