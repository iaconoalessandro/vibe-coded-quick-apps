# Report Fact-Checking Immigrazione e Diritto del Lavoro — Norvegia (NO)
**Data di verifica:** 05/10/2026  
**Autore:** Agente 1 — Fact-Checker (Fonti Primarie) del Council di verifica immigrazione  
**Ambito:** Codice Admetia (`data/atlas/no.js`, `research/places/iberia-and-nordics.md`, `research/countries/no-norway.md`, `docs/launch-audit/4-immigration-europe.md`) e quadro normativo norvegese vigente al 2026.

---

## 1. Sintesi Esecutiva dell'Audit

Dall'audit approfondito delle affermazioni presenti nella codebase e dal confronto con il quadro giuridico norvegese (*Utlendingsloven*, *Utlendingsforskriften*, *Universitets- og høyskoleloven*, *Folketrygdloven*) e i portali istituzionali primari (**UDI**, **Lovdata**, **Skatteetaten**, **Politiet**, **NAV**, **Lånekassen / HK-dir**):

1. **Soglie salariali Skilled Worker (UDI / Utlendingsloven § 23): OBSOLETO.**
   - La codebase riporta per il livello master la soglia di **NOK 599.200** (e menziona NOK 522.600 per bachelor), contrassegnandola come derivata da summary di studio legale (EIG, sett. 2025).
   - **Rettifica con fonte primaria:** Dal **1° maggio 2026**, l'UDI ha aggiornato ufficialmente le soglie salariali minime (per posizioni non coperte da contrattazione collettiva):
     - **Master's degree requirement:** **NOK 624.700** lordi/anno.
     - **Bachelor's degree requirement:** **NOK 545.400** lordi/anno.
   - L'adeguamento decorre dal 1° maggio (a seguito del *lønnsoppgjør* primaverile), e non dal 1° settembre.

2. **Permesso per ricerca lavoro post-studio (Job-Seeker Permit ex Utlendingsforskriften § 6-29): GAP RISOLTO.**
   - Nella codebase figurava come "non letto / bloccato dal WAF dell'UDI".
   - **Verifica fonte primaria:** Il permesso è disciplinato dall'art. **6-29 dell'Utlendingsforskriften**:
     - **Durata:** fino a **1 anno (12 mesi)**.
     - **Diritto di lavoro:** include piena autorizzazione al **lavoro a tempo pieno (*heltidsarbeid*)** e parziale durante la ricerca, in qualsiasi mansione (art. 6-33 fjerde ledd).
     - **Requisiti economici (*underholdskrav*):** **NOK 28.448 al mese** (pari a NOK 170.688 per 6 mesi, depositati su conto bancario norvegese intestato al richiedente).
     - **Tempistiche:** domanda da presentare prima della scadenza del permesso per studio.
     - **Tariffa UDI (*gebyr*):** **NOK 6.300** (art. 17-10 første ledd bokstav a). Non dà diritto al ricongiungimento familiare né computa per il permesso di soggiorno permanente (*permanent oppholdstillatelse*).

3. **Requisito fondi studio e tariffe visti studenti (Lånekassen / UDI / Utlendingsforskriften § 6-19 & § 17-10): PARZIALMENTE OBSOLETO.**
   - In `docs/launch-audit/4-immigration-europe.md` viene citato l'importo di **NOK 166.859** / tariffa NOK 5.400.
   - **Rettifica:** NOK 166.859 era l'importo per l'anno accademico 2025/2026. Per l'anno accademico **2026/2027**, l'importo fissato dall'UDI (indicizzato sul tasso di supporto base *grunnstøtte* di Lånekassen) è di **NOK 170.368** per l'intero anno accademico (Autunno 2026: NOK 77.440; Primavera 2027: NOK 92.928).
   - La tariffa governativa per la domanda di permesso studio è confermata a **NOK 5.400** (Utlendingsforskriften § 17-10 første ledd bokstav a nr. 1).

4. **Tasse universitarie per studenti non-UE (Universitets- og høyskoleloven § 8-3): DA INTEGRARE.**
   - Non menzionate in `no.js` o `no-norway.md`. Introdotte con riforma legislativa dall'autunno 2023, ora codificate nell'art. 8-3 della nuova *Universitets- og høyskolelov* (LOV-2024-03-08-9).
   - Gli atenei pubblici sono obbligati a richiedere tasse universitarie (*studieavgift*) agli studenti extracomunitari (tipicamente tra NOK 130.000 e NOK 300.000+/anno).
   - **Esenzioni:** Cittadini UE/SEE e svizzeri (gratuità confermata), studenti in scambio Erasmus/accordi bilaterali e dottorandi. Dal 1° agosto 2026 è stato rimosso l'obbligo di integrale copertura dei costi (*kostnadsdekning*), lasciando margine discrezionale agli atenei.

5. **Regime di registrazione cittadini UE/SEE (Utlendingsloven § 117): VERIFICATO E PRECISAZIONE GIURIDICA.**
   - La codebase riporta correttamente la registrazione entro 3 mesi presso la polizia.
   - **Specifiche legali confermate:** I cittadini UE/SEE godono di diritto originario di soggiorno (*oppholdsrett* ex direttiva 2004/38/CE, Cap. 13 Utlendingsloven). **Non ottengono un permesso di soggiorno (*oppholdstillatelse*) né una carta di soggiorno (*oppholdskort*)**.
   - Ottengono un certificato di registrazione cartaceo (*registreringsbevis*), rilasciato dalla Polizia/SUA, **gratuito (*gebyrfritt*)** e a **tempo indeterminato**.

6. **Status dei Dottorandi (PhD / Stipendiat): DA INTEGRARE.**
   - In Norvegia il dottorando ordinario (*doktorgradsstipendiat*, codice 1017) è contrattualizzato come **lavoratore subordinato (*arbeidstaker*)** e ottiene un permesso per lavoro qualificato (*oppholdstillatelse som faglært*, Utlendingsforskriften § 6-1), non un permesso per studio.
   - **Conseguenze critiche:** Il soggiorno conta ai fini del permesso permanente (3 anni di residenza continua); percepisce stipendio statale tabellare (> NOK 530.000/anno); è iscritto obbligatoriamente a *Folketrygden*; non paga rette universitarie.

---

## 2. Verifica Puntuale di TUTTE le Affermazioni Estratte dalla Codebase

### A. File: `data/atlas/no.js`

#### Claim NO-ATLAS-01: Regime SEE e Libertà di Circolazione
- **Testo esatto (`data/atlas/no.js:13`, tradotto a riga 190-191):**  
  *"Norway is in the EEA, not the EU, and EU citizens move freely."*  
  *(IT: "La Norvegia è nel SEE, non nell’UE, e i cittadini UE si muovono liberamente.")*
- **Stato:** `VERIFIED`
- **Fonte Primaria Ufficiale:**  
  Lovdata — *Lov om utlendingers adgang til riket og deres opphold her (utlendingsloven)*, LOV-2008-05-15-35, Kapittel 13 (§§ 109–116)  
  URL: `https://lovdata.no/dokument/NL/lov/2008-05-15-35/KAPITTEL_13`  
  Data di consultazione: 05/10/2026.
- **Riscontro Giuridico:**  
  La Norvegia fa parte dello Spazio Economico Europeo (Accordo SEE del 1992, in vigore dal 1994). La libera circolazione dei cittadini dell'Unione Europea e dei loro familiari è pienamente garantita ai sensi dell'Accordo SEE e recepita nel Capitolo 13 dell'*Utlendingsloven* (attuazione della Direttiva 2004/38/CE). I cittadini UE hanno un diritto soggettivo diretto al soggiorno (*oppholdsrett*) per lavoro, studio o autosufficienza finanziaria.
- **Testo Rettificato / Confermato:**  
  La Norvegia appartiene al SEE (ma non all'UE): i cittadini UE/SEE beneficiano della libera circolazione e del diritto di soggiorno senza visto né permesso formale.

---

#### Claim NO-ATLAS-02: `no-eea` (Certificato di Registrazione Cittadini SEE)
- **Testo esatto (`data/atlas/no.js:128, 146, 164`, tradotto a riga 272-275):**  
  *"EEA nationals staying in Norway more than three months must register and are issued a registration certificate."*  
  *(IT: "I cittadini SEE che restano in Norvegia più di tre mesi devono registrarsi e ricevono un certificato di registrazione.")*
- **Stato:** `VERIFIED`
- **Fonte Primaria Ufficiale:**  
  Lovdata — *Utlendingsloven*, § 117 ("Registreringsbevis for utlendinger med oppholdsrett etter §§ 112 eller 113"); Politiet (Registrering for EU/EØS-borgere) / UDI  
  URL Lovdata: `https://lovdata.no/dokument/NL/lov/2008-05-15-35/%C2%A7117`  
  URL UDI: `https://www.udi.no/ord-og-begreper/registreringsbevis-for-eueos-borgere/`  
  URL Politiet: `https://www.politiet.no/tjenester/opphold-i-norge/for-eu-eos-borgere/`  
  Data di consultazione: 05/10/2026.
- **Riscontro Giuridico:**  
  L'art. 117 primo comma dell'*Utlendingsloven* impone al cittadino SEE che soggiorni per più di tre mesi di registrarsi presso la polizia entro tre mesi dalla data di ingresso (*skal registrere seg. Fristen for registrering er tre måneder fra innreisedatoen*). All'atto della presentazione della documentazione comprovante lo status di lavoratore, studente o persona con mezzi propri (ex art. 112), viene rilasciato immediatamente un certificato di registrazione (*registreringsbevis*). Il rilascio è **completamente gratuito** (*gebyrfritt*) e a **durata indeterminata**. Nessuna carta di soggiorno plastificata (*oppholdskort*) viene rilasciata ai cittadini SEE.
- **Testo Rettificato / Integrato:**  
  I cittadini UE/SEE che soggiornano oltre tre mesi devono registrarsi presso la polizia entro tre mesi dall'arrivo; ricevono un certificato di registrazione (*registreringsbevis*) cartaceo, gratuito e senza scadenza.

---

#### Claim NO-ATLAS-03: `no-20h` (Lavoro Studentesco durante gli Studi)
- **Testo esatto (`data/atlas/no.js:131, 165`, tradotto a riga 276-277):**  
  *"International students with a study permit may work up to 20 hours a week during the semester and full-time in the holidays."*  
  *(IT: "Gli studenti internazionali con permesso per studio possono lavorare fino a 20 ore settimanali durante il semestre e a tempo pieno durante le vacanze.")*
- **Stato:** `VERIFIED`
- **Fonte Primaria Ufficiale:**  
  Lovdata — *Utlendingsforskriften*, FOR-2009-10-15-1286, § 6-33 annet ledd; UDI Study Permit conditions  
  URL Lovdata: `https://lovdata.no/dokument/SF/forskrift/2009-10-15-1286/%C2%A76-33`  
  URL UDI: `https://www.udi.no/en/want-to-apply/studies/studietillatelse/`  
  Data di consultazione: 05/10/2026.
- **Riscontro Giuridico:**  
  L'art. 6-33 secondo comma dell'*Utlendingsforskriften* sancisce per legge: *"Utlendinger som får tillatelse etter § 6-19, skal samtidig få tillatelse til deltidsarbeid for 20 timer i uken og heltidsarbeid i de ordinære feriene..."*. Il diritto a svolgere lavoro part-time (fino a 20 ore a settimana nei periodi di lezione) e full-time durante le vacanze universitarie ordinarie è quindi automatico e accessorio al rilascio del permesso per motivi di studio.
- **Testo Rettificato / Confermato:**  
  Gli studenti extracomunitari titolari di permesso di studio possono lavorare automaticamente fino a 20 ore a settimana durante il semestre e a tempo pieno durante le vacanze ordinarie.

---

#### Claim NO-ATLAS-04: `no-floor` (Soglia Salariale Skilled Worker)
- **Testo esatto (`data/atlas/no.js:132, 166`, tradotto a riga 278-279):**  
  *"A skilled-worker permit is reported to need at least NOK 599,200 a year for a master’s-level job from 1 September 2025."*  
  *(IT: "Secondo quanto riportato, dal 1° settembre 2025 un permesso per lavoratori qualificati richiede almeno 599.200 NOK annui per un lavoro di livello magistrale.")*
- **Stato:** `OBSOLETO` (e parziale: omette la soglia bachelor)
- **Fonte Primaria Ufficiale:**  
  UDI — *Lønns- og arbeidsvilkår i Norge / Pay and working conditions in Norway*  
  URL: `https://www.udi.no/ord-og-begreper/lonns--og-arbeidsvilkar/`  
  URL EN: `https://www.udi.no/en/word-definitions/pay-and-working-conditions-in-norway/`  
  Fondamento legislativo: *Utlendingsloven* § 23 første ledd bokstav b; *Utlendingsforskriften* § 6-1.  
  Data aggiornamento fonte: **01/05/2026**. Data consultazione: 05/10/2026.
- **Riscontro Giuridico Puntuale:**  
  La cifra di NOK 599.200 (in vigore dal 1° settembre 2025) è stata superata. A decorrere dal **1° maggio 2026**, l'UDI ha fissato le seguenti soglie retributive minime annuali per le posizioni non regolate da contratti collettivi nazionali (*tariffavtaler*):
  1. Mansioni che richiedono una **laurea magistrale (Master's degree / 5 anni di istruzione superiore):** almeno **NOK 624.700** lordi/anno prima delle imposte.
  2. Mansioni che richiedono una **laurea triennale (Bachelor's degree / 3 anni di istruzione superiore):** almeno **NOK 545.400** lordi/anno prima delle imposte.  
  Se la posizione ricade in un settore dotato di contratto collettivo (*tariffavtale*), si applica la tariffa tabellare del contratto collettivo. L'offerta di lavoro deve richiedere esplicitamente il livello formativo posseduto e la disciplina di studio deve essere rilevante per le mansioni.
- **Testo Corretto e Rettificato:**  
  Dal 1° maggio 2026, il permesso per lavoratori qualificati (Skilled Worker) in settori senza contrattazione collettiva richiede uno stipendio minimo lordo di **NOK 624.700/anno** per posizioni di livello magistrale (Master) e di **NOK 545.400/anno** per posizioni di livello triennale (Bachelor).

---

#### Claim NO-ATLAS-05: Gap sul Job-Seeker Permit e Soglia Salariale
- **Testo esatto (`data/atlas/no.js:153-154`, tradotto a riga 198-201):**  
  *"The job-seeker permit for graduates of Norwegian institutions was not read: UDI’s site could not be read. The skilled-worker pay floor comes from a law-firm summary, not UDI."*  
  *(IT: "Il permesso per cercare lavoro dei laureati di istituti norvegesi non è stato letto: il sito dell’UDI non si è potuto leggere. La soglia salariale per i lavoratori qualificati proviene dal riepilogo di uno studio legale, non dall’UDI.")*
- **Stato:** `OBSOLETO` (entrambi i gap sono ora interamente colmati su fonti primarie)
- **Fonte Primaria Ufficiale:**  
  UDI — *Job seekers who have completed education in Norway*; Lovdata — *Utlendingsforskriften* § 6-29, § 6-33 fjerde ledd, § 17-10 første ledd bokstav a.
- **Rettifica:** Il gap va cancellato dal file `no.js` e sostituito con la scheda normativa verificata (Job-seeker permit di 1 anno ex § 6-29, lavoro full-time ammesso ex § 6-33, tariffa NOK 6.300, fondi NOK 28.448/mese; soglie salariali UDI aggiornate al 1° maggio 2026).

---

#### Claim NO-ATLAS-06: `no-stay` (Tasso di Permanenza Laureati Extra-UE)
- **Testo esatto (`data/atlas/no.js:169`, tradotto a riga 284-285):**  
  *"62% of students from outside the EU and EEA who completed a Norwegian degree were still resident the year after, and 86% of those still in Norway were employed."*  
  *(IT: "Il 62% degli studenti extra-UE e SEE che hanno completato una laurea norvegese risiedeva ancora nel paese l’anno dopo, e l’86% di quelli rimasti in Norvegia lavorava.")*
- **Stato:** `VERIFIED`
- **Fonte Primaria Ufficiale:**  
  Statistisk sentralbyrå (SSB), *Utdanningsinnvandrere i Norge* (Rapporter 2024/37)  
  URL: `https://www.ssb.no/utdanning/hoyere-utdanning/artikler/utdanningsinnvandrere-i-norge`  
  Data di pubblicazione: 24/10/2024. Data consultazione: 05/10/2026.
- **Riscontro Statistico:**  
  L'indagine ufficiale di Statistics Norway sui laureati internazionali (coorti dal 2013/14 al 2022/23) rileva esattamente che il 62% degli studenti di Paesi terzi (*tredjelandsstudenter*) che hanno completato il percorso di studi in Norvegia risultava ancora formalmente residente a distanza di un anno dal conseguimento del titolo. Tra coloro che sono rimasti, l'86% risultava occupato.
- **Testo Confermato:**  
  Il 62% dei laureati extracomunitari di atenei norvegesi risiede ancora in Norvegia un anno dopo la laurea, e l'86% di essi ha un impiego (SSB Rapporter 2024/37).

---

### B. File: `research/countries/no-norway.md`

#### Claim NO-CNTRY-01: Sintesi su Permessi e Lingua
- **Testo esatto (`research/countries/no-norway.md:33`):**  
  *"Norway is in the EEA: EEA nationals register after three months. International students may work 20 hours a week in term. A skilled-worker permit is reported to need at least NOK 599,200 a year for a master's-level job (law-firm summary, not UDI). The job-seeker permit was not read."*
- **Stato:** `PARZIALE / OBSOLETO`
- **Riscontro Puntuale:**
  - Registrazione EEA dopo 3 mesi: `VERIFIED` (Utlendingsloven § 117).
  - Lavoro studenti 20 ore/settimana: `VERIFIED` (Utlendingsforskriften § 6-33 annet ledd).
  - Soglia NOK 599.200: `OBSOLETO` (Sostituita da NOK 624.700 per master e NOK 545.400 per bachelor dal 1° maggio 2026, UDI).
  - Job-seeker permit "not read": `OBSOLETO` (Disciplinato da Utlendingsforskriften § 6-29, durata 1 anno, pieno diritto di lavoro).
- **Testo Rettificato:**  
  La Norvegia fa parte del SEE: i cittadini UE/SEE si registrano presso la polizia entro tre mesi. Gli studenti extra-UE possono lavorare 20 ore a settimana durante il semestre e full-time nelle vacanze. Il permesso Skilled Worker richiede un salario lordo minimo di NOK 624.700/anno per ruoli master e NOK 545.400/anno per ruoli bachelor (valori UDI dal 1° maggio 2026). I neolaureati possono richiedere un permesso di ricerca lavoro di 1 anno con pieno diritto al lavoro (Utlendingsforskriften § 6-29).

#### Claim NO-CNTRY-02: Gap Dichiarati su UDI
- **Testo esatto (`research/countries/no-norway.md:101, 106`):**  
  *"5. If you need a visa, read the current UDI rules; the record could not read the graduate job-seeker permit."*  
  *"1. UDI's site blocked automated reads: the job-seeker permit is unread and the skilled-worker floor is from a law-firm summary."*
- **Stato:** `OBSOLETO / GAP RISOLTO`
- **Rettifica:** Aggiornare la sezione rimuovendo l'indicazione di unreadable site e inserendo i parametri ufficiali UDI.

---

### C. File: `research/places/iberia-and-nordics.md`

#### Claim NO-IBN-01: Regime Fiscale Forfettario Non Residenti (PAYE / Kildeskatt på lønn)
- **Testo esatto (`research/places/iberia-and-nordics.md:157`):**  
  *"Norway | No expat relief for resident employees verified; a flat 25% PAYE applies to temporary non-residents earning under NOK 725,050 | Not applicable | PwC Norway, 3 Sep 2026 [practitioner consensus]"*
- **Stato:** `VERIFIED`
- **Fonte Primaria Ufficiale:**  
  Skatteetaten — *PAYE scheme (kildeskatt på lønn) for foreign workers*  
  URL: `https://www.skatteetaten.no/en/person/taxes/get-a-tax-card/paye-scheme/`  
  Data di consultazione: 05/10/2026.
- **Riscontro Fiscale:**  
  Per l'anno d'imposta 2026, il regime fiscale semplificato forfettario per lavoratori stranieri temporanei (*kildeskatt på lønn*) prevede un'aliquota fissa del **25%** trattenuta alla fonte dal datore di lavoro. L'aliquota è composta dal 17,4% di imposta sul reddito e dal 7,6% di contributi previdenziali (*trygdeavgift*). Il tetto massimo di retribuzione annua ammissibile per rientrare nel regime nel 2026 è esattamente di **NOK 725.050**. Se il lavoratore supera tale soglia o sceglie volontariamente di uscire (*opt-out*), viene tassato con le regole ordinarie e può beneficiare delle detrazioni forfettarie e specifiche.
- **Testo Confermato:**  
  In Norvegia non esiste una tax relief per impatriati residenti; ai lavoratori esteri temporanei non residenti con redditi inferiori a NOK 725.050 si applica l'aliquota forfettaria del 25% (kildeskatt på lønn).

---

#### Claim NO-IBN-02: Confronto Permessi e Registrazione UE
- **Testo esatto (`research/places/iberia-and-nordics.md:166`):**  
  *"EU citizens need no permit. Your Europe says registration with local authorities may be required after three months (accessed 2 Oct 2026) [data]... Norway's rules were not verified."*
- **Stato:** `PARZIALE / RISOLTO`
- **Fonte Primaria:** Utlendingsloven § 117. Registrazione obbligatoria entro 3 mesi presso la Polizia / SUA. Certificato gratuito a tempo indeterminato.

---

#### Claim NO-IBN-03: Tabella Comparativa Permessi Extra-UE e Soglie
- **Testo esatto (`research/places/iberia-and-nordics.md:176`):**  
  *"Norway | Skilled-worker permit needs a concrete offer; a job-seeker permit for Norwegian graduates exists (conditions not read) | Reported NOK 599,200 (master's-level job) and NOK 522,600 (bachelor's-level) from 1 Sept 2025 | UDI's site blocked my fetches; law-firm summary (EIG, 2025) [unverified]"*
- **Stato:** `OBSOLETO / RISOLTO`
- **Riscontro e Rettifica:**
  - Offerta concreta di lavoro: Richiesta obbligatoriamente dall'*Utlendingsloven* § 23 første ledd bokstav d (di regola a tempo pieno).
  - Job-seeker permit: Disciplinato da *Utlendingsforskriften* § 6-29 (durata 12 mesi; lavoro consentito sia part-time che full-time senza restrizioni di settore ex § 6-33 fjerde ledd; fondi richiesti NOK 28.448/mese).
  - Soglie retributive: Aggiornate dall'UDI il **1° maggio 2026** a **NOK 624.700** (master) e **NOK 545.400** (bachelor).
- **Testo Rettificato:**  
  Norway | Offerta formale full-time per Skilled Worker; Job-seeker permit di 12 mesi per laureati in Norvegia (con lavoro full-time ammesso, fondi NOK 28.448/mese, fee NOK 6.300 ex art. 6-29 Utlendingsforskriften) | UDI 1 maggio 2026: NOK 624.700 (master) e NOK 545.400 (bachelor) in assenza di tariffavtale | UDI (udi.no) / Lovdata [data].

---

#### Claim NO-IBN-04: Note e Verifiche Aperte
- **Testo esatto (`research/places/iberia-and-nordics.md:291, 297, 342`):**  
  *"Norwegian permit floors: one secondary source from September 2025."*  
  *"2. UDI skilled-worker floors (NOK 599,200 and 522,600 from 1 Sept 2025; another summary says NOK 624,700 and 545,400) and Norway's job-seeker permit: UDI's site blocked my fetches."*
- **Stato:** `VERIFIED & RESOLVED`
- **Riscontro:** L'ipotesi alternativa indicata nel testo ("another summary says NOK 624,700 and 545,400") era esattamente corretta: si tratta dell'aggiornamento entrato in vigore il 1° maggio 2026. La cifra di settembre 2025 (NOK 599.200 / 522.600) è superata.

---

### D. File: `docs/launch-audit/4-immigration-europe.md`

#### Claim NO-AUDIT-01: Riga Norvegia nella Tabella di Copertura dei 25 Paesi
- **Testo esatto (`docs/launch-audit/4-immigration-europe.md:75`):**  
  `| NO | ❌ | ❌ NOK 5,400 (secondary) | ❌ NOK 166,859/yr (secondary) | ❌ 1-yr job-seeker permit missing; floor is a practitioner source | ✅ |`
- **Stato:** `PARZIALMENTE OBSOLETO`
- **Riscontro e Rettifiche:**
  1. **Application step:** ❌ → Da implementare: domanda online sul portale UDI, appuntamento biometrico presso VFS Global all'estero o Polizia/SUA in Norvegia.
  2. **Tariffa del permesso (*Permit fee*):** La tabella indica `NOK 5,400 (secondary)`.  
     - Per il **permesso di studio (*studenttillatelse*)**, la tariffa primaria è esattamente **NOK 5.400** (*Utlendingsforskriften* § 17-10 første ledd bokstav a nr. 1).  
     - Per il **permesso Skilled Worker** e per il **Job-seeker permit**, la tariffa primaria è **NOK 6.300** (*Utlendingsforskriften* § 17-10 første ledd bokstav a).
  3. **Fondi richiesti (*Proof of funds*):** La tabella indica `NOK 166,859/yr (secondary)`.  
     - **NOK 166.859** era l'importo per l'anno accademico 2025/2026.  
     - Per l'anno accademico **2026/2027**, l'importo ufficiale UDI/Lånekassen è **NOK 170.368** per l'intero anno (Autunno 2026: NOK 77.440; Primavera 2027: NOK 92.928).
  4. **Post-study search / floor:**  
     - Il Job-seeker permit di 1 anno è ora verificato ex art. 6-29 *Utlendingsforskriften*.
     - Il floor salariale è verificato su UDI: NOK 624.700 (master) / NOK 545.400 (bachelor) dal 1° maggio 2026.

---

#### Claim NO-AUDIT-02: Sezione M8 — Job-Seeker Permit
- **Testo esatto (`docs/launch-audit/4-immigration-europe.md:265`):**  
  *"M8. Norway: the 1-year job-seeker permit after a Norwegian degree is missing from the non-EU route. UDI: up to one year, apply before the permit expires, full- or part-time work allowed. The record gap says UDI "could not be read". https://www.udi.no/en/want-to-apply/work-immigration/job-seekers/"*
- **Stato:** `VERIFIED`
- **Fonte Primaria:** *Utlendingsforskriften* § 6-29 e § 6-33 fjerde ledd. Confermata durata di 1 anno, obbligo di candidatura prima della scadenza del permesso per studenti, facoltà di lavorare full-time o part-time.

---

#### Claim NO-AUDIT-03: Codice Identificativo D-number vs Fødselsnummer
- **Testo esatto (`docs/launch-audit/4-immigration-europe.md:285`):**  
  *"Norway: D-number vs fødselsnummer."*
- **Stato:** `VERIFIED`
- **Fonte Primaria:** Skatteetaten / *Folkeregisterloven*.  
  - Soggiorni inferiori a 6 mesi: assegnazione del **D-nummer** (11 cifre, prima cifra aumentata di 4, per pagare tasse e aprire conto bancario).
  - Soggiorni di 6 o più mesi con notifica di trasferimento (*innflytting*): rilascio del **Fødselsnummer** (National Identity Number definitivo), necessario per accedere a BankID e a tutti i servizi della pubblica amministrazione.

---

#### Claim NO-AUDIT-04: Nota di Sezione 3 su `no-floor`
- **Testo esatto (`docs/launch-audit/4-immigration-europe.md:310`):**  
  *"no.js:166 (`no-floor`). 'Reported to need NOK 599,200' is tagged practitioner consensus. UDI's own page states NOK 599,200 (master's) and 522,600 (bachelor's) from 1 Sep 2025. Re-tag as data and check whether the 1 Sep 2026 annual adjustment changed it. https://udi.no/en/word-definitions/pay-and-working-conditions-in-norway"*
- **Stato:** `OBSOLETO / RETTIFICATO`
- **Rettifica:** L'adeguamento annuale non è avvenuto il 1° settembre 2026, ma il **1° maggio 2026**. I nuovi valori ufficiali UDI sono **NOK 624.700** (master) e **NOK 545.400** (bachelor).

---

#### Claim NO-AUDIT-05: Calendario Adeguamenti Annuali
- **Testo esatto (`docs/launch-audit/4-immigration-europe.md:398`):**  
  *"Norwegian floor (1 September)."*
- **Stato:** `ERRATO / OBSOLETO`
- **Riscontro Giuridico:**  
  Nel 2025 l'adeguamento è stato formalizzato a settembre, ma nel 2026 l'UDI ha deliberato l'aggiornamento con effetto dal **1° maggio 2026**, allineandosi temporalmente alle conclusioni dei rinnovi contrattuali nazionali delle parti sociali (*hovedoppgjøret*).

---

#### Claim NO-AUDIT-06: Riga Riassuntiva Parametri Chiave Norvegia
- **Testo esatto (`docs/launch-audit/4-immigration-europe.md:441`):**  
  *"Norway: NOK 166,859 / NOK 5,400; job-seeker 1 year; NOK 599,200."*
- **Stato:** `PARZIALMENTE OBSOLETO`
- **Rettifica con Dati 2026/2027:**  
  - Fondi studio: **NOK 170.368** (anno accademico 2026/2027; NOK 166.859 era per il 2025/2026).
  - Tariffe UDI: **NOK 5.400** per studio (§ 6-19), **NOK 6.300** per Skilled Worker (§ 6-1) e Job-seeker (§ 6-29).
  - Job-seeker permit: **1 anno** (confermato ex § 6-29).
  - Floor salariale Skilled Worker: **NOK 624.700** (master) / **NOK 545.400** (bachelor), in vigore dal 1° maggio 2026.

---

## 3. Matrice Sinottica dei Requisiti Primari Verificati al 05/10/2026

| Istituto Giuridico / Parametro | Fonte Primaria Ufficiale | Articolo / Sezione Normativa | Valore / Regola Vigente (05/10/2026) | Valore Precedente / Errato nella Codebase |
|---|---|---|---|---|
| **Skilled Worker Floor (Master)** | UDI (udi.no) / Lovdata | *Utlendingsloven* § 23(1)(b); *Utlendingsforskriften* § 6-1 | **NOK 624.700 / anno** lordi (dal 01/05/2026) | NOK 599.200 (dal 01/09/2025) |
| **Skilled Worker Floor (Bachelor)** | UDI (udi.no) / Lovdata | *Utlendingsloven* § 23(1)(b); *Utlendingsforskriften* § 6-1 | **NOK 545.400 / anno** lordi (dal 01/05/2026) | NOK 522.600 (dal 01/09/2025) |
| **Fondi Studio (Study Permit)** | UDI / Lånekassen | *Utlendingsforskriften* § 6-19 & § 10-7 | **NOK 170.368 / anno accademico** (2026/2027) | NOK 166.859 (2025/2026) / NOK 151.690 |
| **Tariffa Permesso Studio** | Lovdata / UDI | *Utlendingsforskriften* § 17-10(1)(a)(1) | **NOK 5.400** | NOK 5.400 (confermato come fonte primaria) |
| **Tariffa Permesso Lavoro / Job-Seeker** | Lovdata / UDI | *Utlendingsforskriften* § 17-10(1)(a) | **NOK 6.300** | Non specificato (confuso con 5.400) |
| **Job-Seeker Permit (Durata)** | Lovdata / UDI | *Utlendingsforskriften* § 6-29 | **Fino a 1 anno (12 mesi)** | "Not read / Gap" |
| **Job-Seeker Permit (Diritto Lavoro)** | Lovdata / UDI | *Utlendingsforskriften* § 6-33(4) | **Lavoro a tempo pieno consentito** | "Not read / Gap" |
| **Job-Seeker Permit (Fondi)** | UDI (udi.no) | *Utlendingsforskriften* § 10-7 | **NOK 28.448 / mese** (conto bancario norvegese) | "Not read / Gap" |
| **Tasse Universitarie Non-UE** | Lovdata / HK-dir | *Universitets- og høyskoleloven* § 8-3 | **Obbligatorie** (tipicamente NOK 130.000–300.000+) | Non menzionate nella codebase |
| **Esenzione Tasse Universitarie** | Lovdata | *Universitets- og høyskoleloven* § 8-3 | **Cittadini UE/SEE/CH, scambi, dottorandi** | Non menzionate |
| **Status Dottorato (PhD / Stipendiat)** | UDI / Lovdata | *Utlendingsforskriften* § 6-1; *Statsansatteloven* | **Lavoratore subordinato (Skilled Worker)** | Non chiarito |
| **Registrazione UE/SEE (Procedura)** | Lovdata / Politiet | *Utlendingsloven* § 117 | **Registrazione Polizia entro 3 mesi** | Confermato |
| **Registrazione UE/SEE (Documento & Costo)** | Lovdata / Politiet | *Utlendingsloven* § 117 | *Registreringsbevis*, **gratuito**, tempo indeterminato | Confermato |
| **Regime Fiscale Forfettario (Kildeskatt)** | Skatteetaten | *Skatteetaten PAYE scheme* | **25% flat** (soglia max NOK 725.050/anno) | Confermato NOK 725.050 |
| **Identificativo Fiscale / Anagrafico** | Skatteetaten | *Folkeregisterloven* | **D-nummer** (< 6 mesi) vs **Fødselsnummer** (≥ 6 mesi) | Confermato |
| **Copertura Sanitaria (Folketrygden)** | NAV / Lovdata | *Folketrygdloven* § 2-1, § 2-2 | Iscrizione automatica lavoratori; studenti > 12 mesi | Da specificare |

---

## 4. Schede di Approfondimento su Punti Critici

### 4.1 Soglie Retributive UDI per Lavoratori Qualificati (Skilled Workers)
- **Quadro giuridico:** Ai sensi dell'art. 23 comma 1 lettera b dell'*Utlendingsloven*, la retribuzione e le condizioni di lavoro non possono essere inferiori a quelle previste dal contratto collettivo (*tariffavtale*) o, in subordine, a quelle normalmente riconosciute per la mansione e il luogo.
- **Le soglie UDI (aggiornate al 1° maggio 2026):**
  - **Requisito Master:** NOK 624.700 annui lordi.
  - **Requisito Bachelor:** NOK 545.400 annui lordi.
- **Applicazione pratica:** Le soglie operano come presunzione assoluta di congruità per i datori di lavoro non firmatari di *tariffavtaler*. Salari inferiori possono essere eccezionalmente accolti solo se il datore fornisce prova documentale rigorosa che il salario offerto è quello normale per quella specifica mansione in quel distretto (evenienza rara nel settore white-collar/ICT/finance).

### 4.2 Tasse di Iscrizione Universitaria per Studenti non-UE (Riforma 2023–2026)
- **Origine della norma:** Con la legge di bilancio 2023 e la modifica della legge sull'istruzione superiore (*Prop. 68 L (2022–2023)*), la Norvegia ha abolito il principio di gratuità per gli studenti provenienti da Paesi al di fuori dello Spazio Economico Europeo e della Svizzera.
- **Quadro normativo consolidato (2024–2026):** L'art. 8-3 della *Universitets- og høyskolelov* (LOV-2024-03-08-9) impone agli istituti statali di applicare rette universitarie (*studieavgift* / *egenbetaling*) a tali studenti.
- **Riforma del 1° agosto 2026:** È stato rimosso l'obbligo vincolante di garantire la totale copertura dei costi (*kostnadsdekning*), conferendo agli atenei facoltà di modulare le rette per attrarre talenti internazionali in settori strategici (STEM, ICT, ingegneria).
- **Importi medi:** Da NOK 130.000 a oltre NOK 350.000 all'anno a seconda della facoltà e dell'ateneo (es. NTNU, UiO, NHH).

### 4.3 Dottorato di Ricerca (*Doktorgradsstipendiat*): Lavoratore vs Studente
- **Inquadramento contrattuale:** A differenza di altri ordinamenti europei dove il dottorando è uno studente con borsa di studio, in Norvegia il dottorando standard è assunto tramite contratto di lavoro come dipendente pubblico (*statstilsatt*, codice qualifica 1017 *stipendiat*).
- **Inquadramento migratorio:** Richiede un permesso di soggiorno come **lavoratore qualificato (*faglært arbeidstaker*)** ex art. 6-1 *Utlendingsforskriften*.
- **Conseguenze giuridiche decisive:**
  1. **Permesso di Soggiorno Permanente:** Gli anni trascorsi come dottorando sono pienamente validi ai fini del computo dei 3 anni necessari per il permesso permanente (*permanent oppholdstillatelse* ex art. 62 *Utlendingsloven*). Al contrario, il permesso per studio ordinario (§ 6-19) non è valido ai fini del permesso permanente.
  2. **Copertura Sociale NAV:** Iscrizione automatica e obbligatoria alla cassa previdenziale nazionale (*Folketrygden*) dal primo giorno di lavoro.
  3. **Esenzione Rette:** Non si applicano le tasse universitarie per non-UE ex art. 8-3.

### 4.4 Regime Cittadini UE/SEE (*Oppholdsrett* ex Art. 117 *Utlendingsloven*)
- **Assenza di discrezionalità:** Il soggiorno del cittadino comunitario poggia sul diritto eurounitario (*oppholdsrett*). Le autorità norvegesi non "concedono" un permesso discrezionale.
- **Registrazione:** Se la permanenza supera i 3 mesi, il cittadino UE/SEE deve recarsi presso la Polizia o il Centro Servizi per Lavoratori Stranieri (SUA) munito di documento d'identità valido e contratto di lavoro o prova di iscrizione a corso di studio.
- **Esito:** Viene stampato immediatamente il *registreringsbevis*. Il certificato non ha data di scadenza, non richiede rinnovi periodici (a patto che sussistano i requisiti di soggiorno) ed è a costo zero.

---

## 5. Elenco delle Fonti Primarie Consultate

1. **Lovdata — Utlendingsloven (LOV-2008-05-15-35):**
   - URL: `https://lovdata.no/dokument/NL/lov/2008-05-15-35`
   - Specifici capitoli: Kapittel 3 (§ 23: Arbeidstakere), Kapittel 13 (§§ 109–125: EØS/EFTA-borgere).
2. **Lovdata — Utlendingsforskriften (FOR-2009-10-15-1286):**
   - URL: `https://lovdata.no/dokument/SF/forskrift/2009-10-15-1286`
   - Specifici articoli: § 6-1 (Faglært), § 6-19 (Studenter), § 6-29 (Arbeidssøkere etter fullført utdanning), § 6-33 (Deltids- og heltidsarbeid), § 10-7 (Underholdskrav), § 17-10 (Behandlingsgebyr).
3. **Lovdata — Universitets- og høyskoleloven (LOV-2024-03-08-9):**
   - URL: `https://lovdata.no/dokument/NL/lov/2024-03-08-9`
   - Specifico articolo: § 8-3 (Egenbetaling).
4. **Lovdata — Folketrygdloven (LOV-1997-02-28-19):**
   - URL: `https://lovdata.no/dokument/NL/lov/1997-02-28-19`
   - Specifici articoli: § 2-1 (Bosted), § 2-2 (Arbeidstakere).
5. **UDI (Utlendingsdirektoratet):**
   - *Pay and working conditions in Norway:* `https://www.udi.no/en/word-definitions/pay-and-working-conditions-in-norway/` (aggiornato 01/05/2026).
   - *Lønns- og arbeidsvilkår i Norge:* `https://www.udi.no/ord-og-begreper/lonns--og-arbeidsvilkar/`.
   - *Job seekers who have completed education in Norway:* `https://www.udi.no/en/want-to-apply/work-immigration/job-seekers/`.
   - *Study permit requirements & checklist:* `https://www.udi.no/en/want-to-apply/studies/studietillatelse/`.
   - *Skilled worker residence permit:* `https://www.udi.no/en/want-to-apply/work-immigration/skilled-workers/`.
   - *Registreringsbevis for EU/EØS-borgere:* `https://www.udi.no/ord-og-begreper/registreringsbevis-for-eueos-borgere/`.
6. **Skatteetaten (Norwegian Tax Administration):**
   - *PAYE scheme (kildeskatt på lønn):* `https://www.skatteetaten.no/en/person/taxes/get-a-tax-card/paye-scheme/`.
   - *National identity numbers and D-numbers:* `https://www.skatteetaten.no/en/person/national-id-number/`.
7. **Politiet (Norwegian Police Service):**
   - *For EU/EØS-borgere:* `https://www.politiet.no/tjenester/opphold-i-norge/for-eu-eos-borgere/`.
8. **Statistisk sentralbyrå (SSB):**
   - *Utdanningsinnvandrere i Norge (Rapporter 2024/37):* `https://www.ssb.no/utdanning/hoyere-utdanning/artikler/utdanningsinnvandrere-i-norge`.
   - *Table 12852: Monthly earnings by place of work.*
9. **HK-dir (Direktoratet for høyere utdanning og kompetanse) / Study in Norway:**
   - *Tuition fees:* `https://studyinnorway.no/tuition-fees`.
   - *Working while studying:* `https://studyinnorway.no/working-while-studying`.
10. **Lånekassen (Statens lånekasse for utdanning):**
    - *Basisstøtte satser 2026–2027:* `https://lanekassen.no/`.
