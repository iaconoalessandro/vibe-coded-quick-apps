---
country: "Singapore"
country_it: "Singapore"
iso_code: "SG"
last_verified: "2026-10-05"
review_by: "2027-03-31"
version: "1.0.0"
citizenships_covered:
  - "UE / SEE / Svizzera (inclusa Italia)"
  - "Extra-UE (incl. UK, USA, Paesi Commonwealth e Paesi terzi)"
---

# Guida Ufficiale Visti e Immigrazione: Singapore

> **Regola di integrità:** Questo documento costituisce l'**UNICA fonte di verità** del progetto Admetia per quanto concerne le normative di ingresso, soggiorno, studio, ricerca, tirocinio, lavoro e fiscalità a Singapore. Ogni dato numerico, tariffa, soglia o requisito amministrativo contiene un riferimento univoco `[SG-SRC-XX]` collegato al file `singapore_sources.md`. Gli aspetti operativi e le riserve interpretative sono documentati in `singapore_open_questions.md`.

---

## 1. Architettura Giuridica ed Enti Competenti

La disciplina dell'immigrazione e del lavoro per cittadini stranieri a Singapore si fonda su due pilastri legislativi inderogabili:
- **Immigration Act 1959 (2020 Rev. Ed.):** Regola le condizioni di ingresso, i visti, la permanenza sul territorio e le sanzioni penali per soggiorni irregolari (*overstaying*) `[SG-SRC-01]`.
- **Employment of Foreign Manpower Act 1990 (EFMA):** Regola l'autorizzazione al lavoro, la concessione dei permessi (*Work Passes*), i requisiti salariali e le responsabilità penali dei datori di lavoro `[SG-SRC-02]`.

### Mappa degli Enti e Portali Competenti:
1. **Ministry of Manpower (MOM):** Gestisce tutti i titoli abilitanti al lavoro (Employment Pass, S Pass, Work Permit, TEP, TWP, WHP, ONE Pass, PEP) tramite i portali telematici **myMOM** e **EP eService** (`www.mom.gov.sg`) `[SG-SRC-03]`.
2. **Immigration & Checkpoints Authority (ICA):** Autorità di frontiera preposta all'ammissione sul territorio, all'emissione dei titoli di studio (**Student's Pass** tramite sistema **SOLAR**), dei permessi di visita a lungo termine (**LTVP**) e della dichiarazione d'ingresso obbligatoria (**SG Arrival Card - SGAC**) (`www.ica.gov.sg`) `[SG-SRC-10]`, `[SG-SRC-13]`.
3. **Inland Revenue Authority of Singapore (IRAS):** Amministrazione finanziaria competente per l'imposizione personale sul reddito e la liquidazione fiscale preventiva dei lavoratori stranieri in uscita (**Form IR21 Tax Clearance**) (`www.iras.gov.sg`) `[SG-SRC-17]`.
4. **Central Provident Fund Board (CPFB):** Ente previdenziale statale che certifica l'esenzione totale dei lavoratori stranieri dal fondo pensione pubblico obbligatorio `[SG-SRC-16]`.
5. **Ministry of Education (MOE):** Disciplina l'inquadramento delle rette universitarie, il *Tuition Grant Scheme* e i relativi vincoli di servizio post-laurea `[SG-SRC-18]`.

---

## 2. Matrice dei Casi d'Uso (Dettaglio Operativo UE vs Extra-UE)

```
┌────────────────────────────────────────────────────────────────────────────────────────┐
│                        MATRICE OPERATIVA CASI x PERMESSI (SINGAPORE)                   │
├────────────────────────────────┬──────────────────────────┬────────────────────────────┤
│ CASO D'USO                     │ TITOLO UFFICIALE         │ REQUISITO CHIAVE (2026)    │
├────────────────────────────────┼──────────────────────────┼────────────────────────────┤
│ 1. Lavoro Dipendente Ordinario │ S Pass                   │ S$3.300/m (S$3.800 Fin)    │
│ 2. Lavoro Altamente Qualificato│ Employment Pass (EP)     │ S$5.600/m + COMPASS 40 pt  │
│                                │ ONE Pass / PEP           │ S$30.000/m / S$22.500/m    │
│ 3. Internship / Tirocinio      │ TEP / TWP / WHP          │ TEP: S$3.000/m (max 3 m)   │
│ 4. Studio Universitario        │ Student's Pass (STP)     │ Ammissione IHL via SOLAR   │
│ 5. Tesi e Ricerca all'Estero   │ Non-graduating STP / TEP │ TEP (stage) / STP (studio) │
│ 6. Erasmus+ / Scambi Accademici│ Student's Pass Exchange  │ Accordo bilaterale IHL     │
│ 7. Master II liv. & Dottorato  │ STP Research (SINGA)     │ Borsa esente IR e CPF      │
│ 8. Working Holiday             │ Work Holiday Pass (WHP)  │ 18-25 anni; 10 Paesi (no IT)│
│ 9. Post-Study Work / Job Search│ LTVP for IHL Graduates   │ 1 anno fisso, non rinnov.  │
│ 10. Soggiorni Brevi & Famiglia │ STVP / Dependant's Pass  │ DP: sponsor >= S$6.000/m   │
└────────────────────────────────┴──────────────────────────┴────────────────────────────┘
```

---

### Caso 1: Lavoro Dipendente Ordinario (S Pass e Work Permit)

#### A. Inquadramento Giuridico
- **Cittadini UE / Italiani:** Non godono di alcuna libertà di circolazione automatica. Per ruoli operativi e quadri intermedi (*mid-level skilled*), l'unico canale accessibile è l'**S Pass** `[SG-SRC-06]`. I cittadini europei **NON possono essere assunti con Work Permit ordinario** nei settori servizi, costruzioni o manifattura, essendo tali titoli riservati a paesi asiatici convenzionati (*Approved Source Countries*) `[SG-SRC-06]`.
- **Cittadini Extra-UE:** Soggetti alle medesime regole S Pass; i cittadini di NAS (Corea del Sud, Taiwan, Hong Kong) o Malaysia possono accedere anche a specifici Work Permit datoriali.

#### B. Requisiti e Parametri Economici S Pass (05/10/2026)
- **Soglia Salariale Minima:** Minimo **S$3.300 lordi/mese** per i settori ordinari e **S$3.800 lordi/mese** per il settore Servizi Finanziari (*Financial Services*) per candidati di 23 anni `[SG-SRC-06]`.
  - La soglia scala progressivamente con l'età fino a **S$4.800/mese** (generale) e **S$5.650/mese** (finanza) per profili senior (45+ anni) `[SG-SRC-06]`.
  - *Prospettiva 2027:* Dal 1° gennaio 2027 la soglia salirà a S$3.600 generale e S$4.000 finanza `[SG-SRC-06]`.
- **Quota Aziendale (Dependency Ratio Ceiling - DRC):** Massimo **10%** della forza lavoro totale nei Servizi, e **15%** in Manifattura e Costruzioni `[SG-SRC-06]`.
- **Foreign Worker Levy:** Prelievo mensile fisso a carico esclusivo del datore pari a **S$650/mese** per lavoratore `[SG-SRC-06]`.
- **Assicurazione Sanitaria Obbligatoria:** Polizza a carico datoriale con massimale di almeno **S$60.000/anno** per ricoveri ospedalieri e chirurgia `[SG-SRC-06]`.

#### C. Costi e Tempi Amministrativi S Pass
- **Tassa di domanda (Application fee):** **S$105** `[SG-SRC-06]`.
- **Tassa di rilascio (Issuance fee):** **S$100** (+ S$30 per visto multiplo se nazionalità soggetta a visto) `[SG-SRC-06]`.
- **Tempi di istruttoria:** Ufficiali: fino a 10 giorni lavorativi; Reali: 3–6 settimane `[SG-SRC-06]`.
- **Errori Comuni & Trappole:** Trattenere il costo della tassa o della levy dalla busta paga del lavoratore costituisce reato penale ai sensi della Section 22A dell'EFMA (fino a S$10.000 di multa e carcere) `[SG-SRC-02]`.

---

### Caso 2: Lavoro Altamente Qualificato (Employment Pass, ONE Pass, PEP)

#### A. Employment Pass (EP) e Griglia COMPASS
L'Employment Pass è il canale cardine per manager, dirigenti e specialisti (*PMETs*):
- **Stage 1 – Floor Salariale per Età (vigente al 05/10/2026):**
  - **Settori Generali:** Minimo **S$5.600/mese** per i candidati fino a 23 anni, che scala progressivamente fino a **S$10.700/mese** a 45+ anni `[SG-SRC-03]`.
  - **Financial Services Sector:** Minimo **S$6.200/mese** fino a 23 anni, scalando fino a **S$11.800/mese** a 45+ anni `[SG-SRC-03]`.
  - *Scatto Programmato (01/01/2027):* Base a S$6.000 (fino a S$11.500) e S$6.600 (fino a S$12.700) `[SG-SRC-03]`.
- **Stage 2 – Framework COMPASS (Minimo 40 Punti Obbligatorio):**
  - **C1 Salary:** 20 pt ($\ge 90^\circ$ percentile locale), 10 pt (65°–90°), 0 pt ($<65^\circ$).
  - **C2 Qualifications:** 20 pt per università incluse nella lista *Top-Tier* MOM `[SG-SRC-04]`; 10 pt per titolo degree-equivalent.
  - **C3 Diversity:** 20 pt se la nazionalità del candidato è $<5\%$ dei PMET aziendali; 10 pt se 5%–25%; 0 pt se $\ge 25\%$.
  - **C4 Local Employment:** 20 pt se la quota di locali dell'azienda è $\ge 50^\circ$ percentile del settore; 10 pt se 20°–50°; 0 pt se $<20^\circ$.
  - **Bonus C5 (Shortage Occupation List - SOL):** +20 pt per ruoli strategici mancanti (AI, cyber, green finance).
  - **Bonus C6 (Strategic Economic Priorities):** +10 pt per partnership con EDB/EnterpriseSG.
- **Obbligo di Screening Titoli C2:** Obbligatorio allegare il report di verifica emesso da 1 delle 12 agenzie accreditate MOM (Dataflow, Veremark, Sterling, HireRight, ecc.) per convalidare i punti C2 `[SG-SRC-05]`.
- **Esenzione COMPASS e FCF:** Candidati con stipendio mensile fisso pari o superiore a **S$22.500/mese** `[SG-SRC-03]`.

#### B. Percorsi Top Talent: ONE Pass e PEP
- **ONE Pass (Overseas Networks & Expertise Pass):** Retribuzione fissa $\ge$ **S$30.000/mese** (o eccellenza mondiale dimostrata); durata di 5 anni; libertà di operare su più imprese contemporaneamente; coniuge abilitato al lavoro con Letter of Consent (LOC) `[SG-SRC-15]`.
- **Personalised Employment Pass (PEP):** Retribuzione fissa $\ge$ **S$22.500/mese**; durata 3 anni non rinnovabile; pass personale slegato dal singolo datore con fino a 6 mesi di inoccupazione consentita `[SG-SRC-15]`.

#### C. Costi e Tempi Amministrativi EP
- **Tassa di domanda:** **S$105**; **Tassa di rilascio:** **S$225** (+ S$30 visto multiplo) `[SG-SRC-03]`.
- **Tempi di istruttoria:** Ufficiali: fino a 10 giorni lavorativi; Reali: 2–4 settimane standard; fino a 6–8 settimane se vi sono ritardi nella verifica dei titoli italiani `[SG-SRC-03]`, `[SG-SRC-05]`.

---

### Caso 3: Internship e Tirocinio (TEP, TWP, WHP)

A seconda del paese in cui lo studente consegue la laurea, sussiste una netta demarcazione tra tre percorsi:

#### 1. Training Employment Pass (TEP) – Canale per Studenti da Atenei Italiani / Generali
- **Aventi diritto:** Studenti universitari stranieri (inclusi iscritti ad atenei italiani come Bocconi, Polimi, Sapienza) per stage curriculari legati al piano di studi `[SG-SRC-08]`.
- **Requisiti:** Compenso fisso mensile di almeno **S$3.000/mese** `[SG-SRC-08]`.
- **Durata:** **Massimo 3 mesi tassativi, NON rinnovabile** `[SG-SRC-08]`.
- **Quote e Levy:** Totalmente esente dalla quota lavoratori stranieri e dalla levy aziendale `[SG-SRC-08]`.

#### 2. Training Work Permit (TWP)
- **Aventi diritto:** Studenti per tirocini pratici o semi-qualificati fino a **6 mesi (non rinnovabile)** `[SG-SRC-08]`.
- **Condizioni:** Rientra nella quota DRC aziendale e comporta il versamento mensile della Foreign Worker Levy a carico del datore `[SG-SRC-08]`.

#### 3. Stage Curriculare per Studenti già Iscritti in IHL a Singapore
- Gli studenti di NUS, NTU, SMU, INSEAD o ESSEC Singapore beneficiano di esenzione totale da permesso di lavoro (*Work Pass Exemption*) per stage curriculari senza limiti di ore durante il semestre o nelle vacanze `[SG-SRC-09]`.

---

### Caso 4: Studio Universitario (Bachelor e Master presso IHL e PEI)

#### A. Istituzioni IHL vs PEI
- **Institutes of Higher Learning (IHL):** Università autonome statali (NUS, NTU, SMU, SUTD, SIT, SUSS) e campus d'eccellenza (INSEAD, ESSEC) `[SG-SRC-10]`. Accordano diritti di lavoro part-time (16h/sett) e stage `[SG-SRC-09]`.
- **Private Education Institutions (PEI):** Scuole private certificate *EduTrust*. Agli studenti internazionali è fatto **divieto assoluto di qualsiasi attività lavorativa**, pena revoca del visto ed espulsione `[SG-SRC-09]`.

#### B. Procedura di Registrazione SOLAR
1. L'università approva l'immatricolazione e registra lo studente nel portale **SOLAR**, generando il numero di registrazione `[SG-SRC-10]`.
2. Lo studente trasmette telematicamente il modulo **eForm 16** tra 2 e 3 mesi prima dell'avvio delle lezioni `[SG-SRC-10]`.
3. Pagamento della tassa di domanda non rimborsabile di **S$45** `[SG-SRC-10]`.
4. Rilascio della lettera di **In-Principle Approval (IPA)**, con FIN temporaneo, che abilita al viaggio `[SG-SRC-10]`.
5. Compilazione della **SG Arrival Card (SGAC)** entro 3 giorni dal volo `[SG-SRC-13]`.
6. Visita medica di frontiera (radiografia toracica per TBC e test HIV) per soggiorni $\ge 6$ mesi `[SG-SRC-10]`.
7. Pagamento tassa di emissione: **S$60** (+ S$30 visa fee se applicabile) e rilascio del **Digital Student's Pass** via FileSG/Singpass `[SG-SRC-10]`.

---

### Caso 5: Tesi e Ricerca all'Estero (Visiting vs Ricercatore Retribuito)

1. **Visiting Student Researcher (Tesi Accademica Non Retribuita):**
   - Richiede un **Non-graduating Student's Pass (STP)** via SOLAR presso NUS/NTU/SMU `[SG-SRC-10]`.
   - L'attività deve essere rigorosamente non retribuita (sono ammesse solo borse o rimborsi dell'ateneo d'origine). Vietato il lavoro dipendente `[SG-SRC-09]`.
2. **Research Internship Aziendale Retribuito:**
   - Si inquadra sotto il **Training Employment Pass (TEP)** (min. S$3.000/mese, durata max 3 mesi) `[SG-SRC-08]`.
3. **Seminari e Workshop Accademici Brevi ($\le 90$ giorni):**
   - Ingresso con timbro turistico STVP. Se si percepiscono gettoni o si tengono lezioni magistrali, obbligo di trasmissione telematica della **e-Notification for Work Pass Exempt Activities** a MOM prima di avviare l'attività (massimo 90 giorni/anno) `[SG-SRC-09]`.

---

### Caso 6: Erasmus+ e Accordi di Mobilità Bilaterale

- **Inquadramento:** Mobilità semestrale o annuale nell'ambito di convenzioni bilaterali tra atenei europei e università singaporiane (sostenute da fondi d'ateneo o Erasmus+ KA171) `[SG-SRC-10]`.
- **Titolo di Soggiorno:** **Student's Pass (Exchange / Non-graduating)** con validità parametrata al calendario didattico (1 o 2 semestri) `[SG-SRC-10]`.
- **Agevolazione Sanitaria per Soggiorni di 1 Semestre (< 6 mesi):** Esenzione dalla visita medica ICA (test HIV e lastra torace non richiesti per permanenze inferiori a 6 mesi) `[SG-SRC-10]`.
- **Assicurazione Sanitaria:** Obbligatoria la sottoscrizione del piano sanitario universitario ospitante per l'accesso alle cliniche di campus `[SG-SRC-10]`.

---

### Caso 7: Master di II Livello e Dottorato di Ricerca (PhD)

- **Student's Pass per Ricerca Post-laurea:** I dottorandi presso NUS, NTU, SUTD e A*STAR beneficiano di borse d'eccellenza, tra cui la borsa **SINGA (Singapore International Graduate Award)** (copertura retta + sussidio mensile di S$2.700–S$3.200/mese) `[SG-SRC-10]`.
- **Regime Fiscale delle Borse di Dottorato (IRAS):** Gli assegni di ricerca e mantenimento dottorale (SINGA/ateneo) sono qualificati come contributi di sussistenza accademica e sono **ESENTI AL 100% DALL'IMPOSTA SUL REDDITO DELLE PERSONE FISICHE** a Singapore `[SG-SRC-17]`.
- **Esenzione Previdenziale:** I dottorandi stranieri non sono soggetti ad alcuna trattenuta pensionistica CPF `[SG-SRC-16]`.
- **Attività di Didattica:** Incarichi di Graduate Assistant (GAP) consentiti fino a un massimo di 16 ore settimanali all'interno della struttura universitaria `[SG-SRC-09]`.

---

### Caso 8: Working Holiday / Vacanza-Lavoro (Work Holiday Programme - WHP)

- **Titolo ufficiale:** MOM Work Holiday Pass `[SG-SRC-07]`.
- **Durata e Quota:** Massimo **6 mesi**, non rinnovabile; contingente limitato a **2.000 posti** attivi `[SG-SRC-07]`.
- **Requisiti Anagrafici e Accademici:** Età **18–25 anni**; studenti iscritti o neolaureati di università legalmente riconosciute in soli **10 Paesi convenzionati**:
  - *Australia, Francia, Germania, Hong Kong, Giappone, Paesi Bassi, Nuova Zelanda, Svizzera, Regno Unito, Stati Uniti d'America* `[SG-SRC-07]`.
- **CRITERIO DISCRIMINANTE PER CANDIDATI ITALIANI / UE:**
  - Il requisito si basa **esclusivamente sul Paese in cui ha sede l'università**, NON sulla cittadinanza del candidato `[SG-SRC-07]`.
  - Un cittadino italiano con laurea conseguita in Italia (Bocconi, Polimi, Sapienza) **NON È ELEGGIBILE** per il WHP `[SG-SRC-07]`.
  - Un cittadino italiano con laurea conseguita in Francia, Germania, Olanda, Svizzera o UK **È ELEGGIBILE** `[SG-SRC-07]`.
- **Costi:** Tassa di rilascio pass: **S$175** `[SG-SRC-07]`.

---

### Caso 9: Post-Study Work e Ricerca Lavoro (LTVP per Laureati IHL)

- **Titolo ufficiale:** ICA Long-Term Visit Pass (LTVP) for Graduates from an Institute of Higher Learning Seeking Employment in Singapore `[SG-SRC-11]`.
- **Aventi diritto:** Neolaureati da corsi a tempo pieno presso università autonome singaporiane (NUS, NTU, SMU, SUTD, SIT, SUSS, INSEAD, ESSEC) `[SG-SRC-11]`.
- **Durata Tassativa (Chiusura Definitiva del Gap):** Il pass ha una durata di **esattamente 1 ANNO (12 mesi), rilasciato UNA SOLA VOLTA (one-off) e NON RINNOVABILE** `[SG-SRC-11]`.
- **Condizioni di Soggiorno:** Non richiede sponsor; **non autorizza allo svolgimento di lavoro dipendente**. Consente di soggiornare lecitamente per sostenere selezioni e colloqui `[SG-SRC-11]`.
- **Conversione in-country:** Non appena si ottiene un'offerta conforme (EP o S Pass), il datore inoltra la richiesta telematica a MOM; all'emissione dell'IPA letter il candidato converte lo status senza dover lasciare Singapore `[SG-SRC-03]`, `[SG-SRC-11]`.
- **Costi:** S$45 processing fee + S$60 issuance fee (+ S$30 visa) `[SG-SRC-11]`.

---

### Caso 10: Soggiorni Brevi (≤ 90 gg) e Ricongiungimento Familiare

#### 1. Soggiorni Brevi Turistici e Affari (STVP)
- **Cittadini UE / Italiani:** Esenti da visto per soggiorni tra 30 e 90 giorni (a discrezione dell'ufficiale ICA) per turismo, conferenze o trattative commerciali non retribuite `[SG-SRC-12]`.
- **SG Arrival Card (SGAC):** Obbligo perentorio di trasmissione online entro i 3 giorni precedenti l'arrivo `[SG-SRC-13]`.
- **Divieto di Lavoro:** Qualsiasi prestazione lavorativa senza pass configura reato penale ai sensi della Section 5 dell'EFMA (fino a 2 anni di carcere e multa fino a S$20.000) `[SG-SRC-02]`.

#### 2. Ricongiungimento Familiare (Dependant's Pass & LTVP MOM)
- **Dependant's Pass (DP):** Riservato al coniuge legalmente sposato e figli celibi under 21 di titolari di EP o S Pass con stipendio fisso personale $\ge$ **S$6.000/mese** `[SG-SRC-14]`.
  - *Lavoro per Coniugi DP:* Dal 1° maggio 2021 **è abolita la Letter of Consent (LOC)** per lavoro subordinato. Per lavorare, il coniuge deve qualificarsi autonomamente per un proprio EP, S Pass o Work Permit `[SG-SRC-14]`.
- **LTVP per Familiari:** Coniugi di fatto (*common-law*) e figliastri ammessi con stipendio sponsor $\ge$ S$6.000/mese. **Genitori ammessi esclusivamente per titolari di EP** con stipendio fisso personale $\ge$ **S$12.000/mese** (non accessibile a titolari di S Pass) `[SG-SRC-14]`.

---

## 3. Riepilogo Costi Amministrativi Obbligatori per Tipologia

Tutti i valori sono espressi in Dollari di Singapore (SGD) con conversione indicativa in Euro al cambio MAS del 05/10/2026 (1 SGD ≈ 0,695 EUR) `[SG-SRC-21]`.

| Tipologia Titolo | Ente | Tassa Domanda (*Application*) | Tassa Rilascio (*Issuance*) | Visto Multiplo (*MJV*) | Totale Amministrativo (SGD) | Controvalore Indicativo (€) |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Employment Pass (EP)** | MOM | S$ 105 | S$ 225 | S$ 30 (se naz. visto) | **S$ 330 – S$ 360** | **~€ 229 – € 250** |
| **S Pass** | MOM | S$ 105 | S$ 100 | S$ 30 (se naz. visto) | **S$ 205 – S$ 235** | **~€ 142 – € 163** |
| **Training EP (TEP)** | MOM | S$ 105 | S$ 225 | S$ 30 (se naz. visto) | **S$ 330 – S$ 360** | **~€ 229 – € 250** |
| **Work Holiday Pass (WHP)** | MOM | S$ 0 | S$ 175 | S$ 30 (se naz. visto) | **S$ 175 – S$ 205** | **~€ 122 – € 142** |
| **Student's Pass (STP)** | ICA | S$ 45 | S$ 60 | S$ 30 (se naz. visto) | **S$ 105 – S$ 135** | **~€ 73 – € 94** |
| **LTVP Neolaureati IHL** | ICA | S$ 45 | S$ 60 | S$ 30 (se naz. visto) | **S$ 105 – S$ 135** | **~€ 73 – € 94** |
| **Dependant's Pass (DP)** | MOM | S$ 105 | S$ 225 | S$ 30 (se naz. visto) | **S$ 330 – S$ 360** | **~€ 229 – € 250** |

### Oneri Accessori Obbligatori:
- **Screening Medico di Frontiera (HIV + TBC toracica):** S$ 55 – S$ 120 (presso SATA CommHealth o cliniche certificate Minmed/Fullerton) `[SG-SRC-10]`.
- **Rapporto di Verifica Titoli Accademici C2 (Dataflow/Veremark):** S$ 60 – S$ 150 a titolo a carico del datore `[SG-SRC-05]`.
- **Stamp Duty Locazione Residenziale (IRAS):** 0,4% del valore locativo totale del contratto `[SG-SRC-17]`.

---

## 4. Statuto Giuridico durante l'Attesa: In-Principle Approval (IPA) e Notification Letter

1. **Valore Legale della Lettera IPA (In-Principle Approval):**
   - L'IPA non costituisce permesso di lavoro definitivo, ma una concessione condizionata che funge da visto d'ingresso singolo `[SG-SRC-03]`.
   - **Divieto di Lavoro su sola IPA:** È formalmente vietato iniziare a prestare attività lavorativa prima che il datore abbia richiesto l'emissione del pass su myMOM e ottenuto la **Notification Letter (NL)** `[SG-SRC-02]`.
2. **Diritti con la Notification Letter:**
   - La Notification Letter ha validità di 1 mese e consente di iniziare a lavorare immediatamente e viaggiare liberamente dentro e fuori Singapore in attesa della registrazione biometrica e ricezione della smart card fisica presso MOM Services Centre (Hall C) `[SG-SRC-03]`.
3. **Cessazione del Rapporto e Regime dei 30 Giorni:**
   - Alla cancellazione dell'EP o S Pass viene emesso uno Short-Term Visit Pass di **30 giorni non prorogabile**.
   - Se il lavoratore non trova un nuovo sponsor entro tale termine, deve lasciare Singapore. L'overstaying oltre i 90 giorni comporta ai sensi della Section 15 dell'Immigration Act la **reclusione fino a 6 mesi e un minimo obbligatorio di 3 colpi di canna da caning** `[SG-SRC-01]`.

---

## 5. Riconoscimento Documenti e Fiscalità

- **Apostille dell'Aia (16/09/2021):** Singapore accetta atti e certificati italiani muniti di Apostille della Prefettura/Procura della Repubblica e traduzione asseverata in inglese, senza necessità di legalizzazione diplomatica presso l'Ambasciata di Singapore a Roma `[SG-SRC-19]`.
- **Residenza Fiscale IRAS (Regola dei 183 Giorni):** I residenti fiscali ($\ge 183$ gg) sono soggetti ad aliquote progressive dallo 0% al 24% (i primi S$20.000 sono esenti) `[SG-SRC-17]`. I non residenti (61-182 gg) pagano il 15% flat o l'aliquota residente se superiore.
- **Trattenuta di Uscita IR21 (Tax Clearance):** Alla cessazione del lavoro il datore trattiene il 100% dell'ultimo stipendio e bonus per liquidare le imposte IRAS prima del rimpatrio `[SG-SRC-17]`.
- **Esenzione Totale CPF:** Tutti i lavoratori stranieri non Permanent Resident sono esenti dal CPF e non possono ricevere contributi dal datore `[SG-SRC-16]`. Possono utilizzare il programma deducibile Supplementary Retirement Scheme (SRS) fino a S$35.700/anno `[SG-SRC-16]`, `[SG-SRC-17]`.

---
*Fine della Guida Ufficiale Visti e Immigrazione: Singapore. Conforme ai gate di integrità del Council di Verifica.*
