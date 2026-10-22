---
country: "Switzerland"
country_it: "Svizzera"
iso_code: "CH"
last_verified: "2026-10-05"
review_by: "2027-03-31"
version: "1.0.0"
citizenships_covered:
  - "UE / AELS (inclusa cittadinanza italiana)"
  - "Extra-UE (Paesi Terzi: USA, UK, India, Cina, ecc.)"
---

# Guida Ufficiale Visti e Immigrazione: Svizzera (Confederazione Svizzera)

> **Regola di integrità:** Questo documento costituisce l'**UNICA fonte di verità** del progetto Admetia per la Svizzera. Ogni dato numerico, tariffa, soglia di reddito, prova di sussistenza o requisito procedurale reca un riferimento univoco `[ID-fonte]` collegato al registro ufficiale [`switzerland_sources.md`](switzerland_sources.md). I punti soggetti a divergenza prasseologica cantonale o a monitoraggio normativo sono catalogati in [`switzerland_open_questions.md`](switzerland_open_questions.md).

---

## 1. Architettura Giuridica ed Enti Competenti

Il sistema dell'immigrazione, del soggiorno e del mercato del lavoro della Confederazione Svizzera (*Schweizerische Eidgenossenschaft / Confédération suisse / Confederazione Svizzera*) si fonda su una rigorosa ripartizione federale delle competenze tra la Confederazione (Berna) e i 26 Cantoni sovrani:

- **Autorità Federali Centrali:**
  - **SEM (Segreteria di Stato della migrazione / Staatssekretariat für Migration):** Agenzia del Dipartimento federale di giustizia e polizia (DFGP/EJPD). Competente per l'applicazione della legislazione federale sugli stranieri (`[CH-SRC-01]`, `[CH-SRC-02]`), la fissazione e gestione dei contingenti annuali per Paesi terzi e Regno Unito (`[CH-SRC-14]`), la riserva federale di permessi (*Bundesreserve*), la procedura federale di approvazione vincolante (*Zustimmungsverfahren*) per lavoratori extra-UE (`[CH-SRC-16]`), e la gestione del portale federale **SEM Meldeverfahren online** per attività lucrative fino a 90 giorni (`[CH-SRC-13]`).
  - **DFAE / EDA (Dipartimento federale degli affari esteri):** Rete globale delle ambasciate e dei consolati generali della Svizzera, competenti per la ricezione delle domande di visto nazionale D per soggiorni di lunga durata (>90 giorni) e rilascio delle vignette su autorizzazione formale cantonale/federale (`[CH-SRC-05]`, `[CH-SRC-28]`).
  - **SECO (Segreteria di Stato dell'economia):** Competente per la vigilanza sul mercato del lavoro, l'applicazione delle misure di accompagnamento alla libera circolazione contro il dumping salariale (`[CH-SRC-12]`), e la gestione della lista annuale delle professioni soggette all'obbligo di annuncio dei posti vacanti (**Stellenmeldepflicht**, con disoccupazione nazionale $\ge 5\%$) tramite il portale *Job-Room / arbeit.swiss* (`[CH-SRC-20]`).
  - **UFSP / BAG (Ufficio federale della sanità pubblica):** Vigilanza sull'assicurazione malattie obbligatoria (LAMal/KVG), pubblicazione annuale dei premi medi cantonali (`[CH-SRC-17]`), e definizione dei criteri di esenzione ex art. 2 OAMal (`[CH-SRC-07]`).
  - **UCC / ZAS (Ufficio centrale di compensazione, Ginevra):** Gestione del registro federale centrale degli assicurati e coordinamento dell'attribuzione del numero AVS/AHV a 13 cifre (`[CH-SRC-08]`).
  - **Movetia:** Agenzia nazionale svizzera per la promozione degli scambi e della mobilità, incaricata dalla Confederazione della gestione del **Swiss-European Mobility Programme (SEMP)**, lo strumento finanziario elvetico che sostituisce la partecipazione a Erasmus+ (`[CH-SRC-21]`).

- **Autorità Cantonali della Migrazione e del Mercato del Lavoro:**
  In Svizzera l'istruzione primaria dei permessi di dimora e l'esame del mercato del lavoro appartengono ai Cantoni:
  - **Canton Zurigo (ZH):** *Migrationsamt des Kantons Zürich* (permessi e soggiorno) e *Amt für Wirtschaft und Arbeit (AWA)* (valutazione economica e autorizzazioni lavoro) (`[CH-SRC-23]`).
  - **Canton Ginevra (GE):** *Office cantonal de la population et des migrations (OCPM)* e *Office cantonal de l'inspection et des relations du travail (OCIRT)* (`[CH-SRC-24]`).
  - **Canton Vaud (VD):** *Service de la population (SPOP)* e *Direction générale de l'emploi et du marché du travail (DGEM)* (`[CH-SRC-25]`).
  - **Canton Basilea-Città (BS):** *Bevölkerungsdienste und Migration (BDM)* e *Amt für Wirtschaft und Arbeit (AWA)* (`[CH-SRC-26]`).
  - **Canton Ticino (TI):** *Sezione della popolazione (Ufficio della migrazione)* e *Ufficio dell'ispettorato del lavoro (UIL)* (`[CH-SRC-27]`).

- **Sportelli Territoriali Municipali (Anagrafe di Prossimità):**
  - **Einwohnerkontrolle / Contrôle des habitants / Ufficio controllo abitanti:** Uffici anagrafici dei singoli Comuni (*Gemeinden / Communes*), presso i quali ogni straniero deve presentarsi personalmente per la notifica obbligatoria di presa di domicilio (*Wohnsitzanmeldung*) entro 14 giorni dall'arrivo e prima dell'inizio di qualsiasi attività lavorativa (`[CH-SRC-04]`).

- **Servizio Pubblico Postale e Bancario:**
  - **PostFinance:** Ente federale a cui l'art. 13 della Legge sulle poste conferisce il mandato vincolante di servizio universale per i servizi di pagamento in franchi svizzeri a chiunque risieda stabilmente nel Paese (`[CH-SRC-11]`).

---

## 2. Tassonomia Formale dei Titoli di Soggiorno Svizzeri

La legislazione elvetica riconosce uno statuto giuridico differenziato a seconda della cittadinanza (regime ALCP per UE/AELS vs regime LStrI/AIG per Paesi terzi):

```
                        ┌────────────────────────────────────────────────────────┐
                        │      TITOLI DI SOGGIORNO IN SVIZZERA (CH)              │
                        └──────────────────────────┬─────────────────────────────┘
                                                   │
         ┌────────────────────────┬────────────────┴────────────────┬────────────────────────┐
         ▼                        ▼                                 ▼                        ▼
┌──────────────────┐    ┌──────────────────┐              ┌──────────────────┐    ┌──────────────────┐
│   Permesso L     │    │   Permesso B     │              │   Permesso C     │    │   Permesso G     │
│  Breve durata    │    │    Dimora        │              │   Domicilio      │    │   Frontalieri    │
│  (fino a 1 anno) │    │  (UE: 5 anni;    │              │  (Permanente;    │    │ (Rientro sett.)  │
│  [CH-SRC-01/03]  │    │   Extra: 1 anno) │              │   UE: 5 anni;    │    │  [CH-SRC-01/03]  │
│                  │    │  [CH-SRC-01/03]  │              │  Extra: 10 anni) │    │                  │
└──────────────────┘    └──────────────────┘              └──────────────────┘    └──────────────────┘
```

1. **Permesso L (Kurzaufenthaltsbewilligung / Autorisation de courte durée):**
   - *Cittadini UE/AELS:* Rilasciato a fronte di un contratto di lavoro di durata compresa tra 3 mesi e 364 giorni (`[CH-SRC-03]`), oppure per periodi di studio/tirocinio di breve durata. Rinnovabile se il contratto viene prorogato.
   - *Cittadini Extra-UE:* Rilasciato a specialisti e quadri per impieghi temporanei fino a 1 anno, a tirocinanti (*Stagiaires*, max 18 mesi, `[CH-SRC-15]`), a visiting researchers o a neolaureati in cerca di lavoro (max 6 mesi ex Art. 21 cpv. 3 LStrI, `[CH-SRC-01]`). Soggetto al contingente federale annuo di **4.000 unità per il 2026** (`[CH-SRC-14]`).
2. **Permesso B (Aufenthaltsbewilligung / Autorisation de séjour):**
   - *Cittadini UE/AELS:* Rilasciato a fronte di un contratto di lavoro a tempo indeterminato o di durata pari o superiore a 365 giorni. **Validità: 5 anni** rinnovabile di diritto (`[CH-SRC-03]`). Rilasciato anche a studenti universitari (validità 1 anno rinnovabile annualmente per la durata degli studi, `[CH-SRC-03]`).
   - *Cittadini Extra-UE:* Rilasciato a personale qualificato ammesso sotto contingente federale annuo (**4.500 unità nel 2026**, `[CH-SRC-14]`), a dottorandi/ricercatori remunerati (`[CH-SRC-22]`), o a studenti universitari ex Art. 27 LStrI (`[CH-SRC-01]`). **Validità: 1 anno**, rinnovabile annualmente previa verifica della conformità salariale e dell'integrazione. Vincolato al datore e al cantone per i primi anni.
3. **Permesso C (Niederlassungsbewilligung / Autorisation d'établissement):**
   - Titolo di soggiorno permanente a tempo indeterminato. Non subordinato ad alcun vincolo di impiego. La carta biometrica ha validità di controllo decennale (o quinquennale).
   - *Concessione a cittadini UE/AELS:* Di regola dopo **5 anni** di dimora ininterrotta e regolare in Svizzera (in virtù dell'ALCP e degli accordi bilaterali di stabilimento per cittadini italiani e della maggior parte dei paesi dell'Europa occidentale, `[CH-SRC-01]`, `[CH-SRC-03]`).
   - *Concessione a cittadini Extra-UE:* Di regola dopo **10 anni** di dimora ininterrotta con permesso B (Art. 34 cpv. 2 LStrI). Può essere concesso in via anticipata dopo **5 anni** in caso di integrazione riuscita (*vorzeitige Erteilung*, Art. 34 cpv. 4 LStrI: competenze linguistiche livello B1 orale e A1 scritto nella lingua cantonale, assenza di casellario penale, assenza di precetti esecutivi e nessun ricorso all'aiuto sociale, `[CH-SRC-01]`).
   - *Computo degli anni di studio:* Ai sensi dell'art. 34 cpv. 5 LStrI, gli anni trascorsi in Svizzera con un permesso per motivi di studio o formazione (permesso L o B per studenti) **vengono computati solo se, una volta conclusi gli studi, lo straniero è stato titolare di un permesso di dimora duraturo (B ordinario di lavoro) per almeno 2 anni ininterrotti** (`[CH-SRC-01]`).
4. **Permesso G (Grenzgängerbewilligung / Autorisation frontalière):**
   - Rilasciato ai lavoratori residenti nelle zone frontaliere dei Paesi limitrofi (Italia, Francia, Germania, Austria) che lavorano in Svizzera e rientrano al proprio domicilio estero con frequenza minima settimanale (`[CH-SRC-03]`). Durata: 5 anni per contratti $\ge 1$ anno, o commisurata alla durata per contratti più brevi.
5. **Permesso Ci (Autorisation de séjour avec activité lucrative pour conjoints de diplomates):**
   - Rilasciato a coniugi e figli fino a 25 anni di funzionari di rappresentanze diplomatiche o di organizzazioni internazionali con sede in Svizzera (es. agenzie ONU, OMC, CERN a Ginevra). Garantisce pieno e libero accesso al mercato del lavoro svizzero.
6. **Titoli di protezione e asilo:** Permesso F (stranieri ammessi provvisoriamente), Permesso N (richiedenti asilo), Permesso S (statuto di protezione provvisoria per persone bisognose di protezione, introdotto ex Art. 71 LAsi).

---

## 3. Procedura di Onboarding Obbligatoria (I 5 Pilastri Amministrativi)

L'insediamento in Svizzera è vincolato a una successione procedurale tassativa. L'omissione di uno dei passaggi comporta sanzioni pecuniarie, decadenza di diritti o affiliazione coatta a tariffe maggiorate:

```
[Arrivo fisico in Svizzera]
       │
       ▼
1. Wohnsitzanmeldung al Controllo Abitanti (Entro 14 gg, PRIMA di lavorare) ──► Meldebestätigung
       │
       ├──────────────────────────────────────────────────┐
       ▼                                                  ▼
2. Assegnazione Numero AVS/AHV (13 cifre)        3. Apertura Conto Bancario Svizzero
   (LAVS Art. 50c - Prefisso 756)                   (PostFinance ex Legge sulle poste Art. 13)
       │                                                  │
       ▼                                                  ▼
4. Tassazione alla Fonte - Quellensteuer          5. Cassa Malati Obbligatoria (KVG/LAMal)
   (LIFD Artt. 83-100; Soglia NOV CHF 120.000)      (LAMal Art. 3 entro 3 mesi retroattiva;
                                                     oppure Esenzione Studenti Art. 2 OAMal)
```

### Pilastro 1: Wohnsitzanmeldung al Controllo Abitanti (Entro 14 Giorni, PRIMA del Lavoro)
- **Base Legale:** Art. 2 OLCP (`[CH-SRC-04]`) per cittadini UE/AELS; Leggi cantonali sul registro della popolazione (es. MERG a Zurigo, LCH a Ginevra).
- **Termine vincolante:** Entro **14 giorni di calendario** dall'arrivo fisico sul territorio elvetico e **tassativamente prima del primo giorno effettivo di lavoro (*vor Stellenantritt*)** (`[CH-SRC-04]`). Iniziare a lavorare prima dell'annuncio costituisce reato di attività lucrativa non autorizzata / lavoro nero (*Schwarzarbeit* ai sensi della legge federale BGSA e violazione dell'art. 115 cpv. 1 lett. c LStrI, `[CH-SRC-01]`).
- **Documenti indispensabili:** Passaporto o carta d'identità in corso di validità; contratto di locazione ufficiale (*Mietvertrag*) o dichiarazione scritta d'alloggio firmata dal locatore principale autorizzato dalla gestione (*Verwaltung/Régie*); contratto di lavoro firmato o certificato d'immatricolazione universitaria; 2 fototessere biometriche; estratti di stato civile (nascita, matrimonio con apostille se applicabile).
- **Esito:** Rilascio immediato della ricevuta di annuncio (*Meldebestätigung / Attestation d'établissement*), che funge da titolo provvisorio legale per lavorare e avviare le altre pratiche amministrative durante le 3–8 settimane necessarie alla produzione della carta biometrica del permesso (`[CH-SRC-23]`).

### Pilastro 2: Assegnazione del Numero AVS/AHV a 13 Cifre (NAVS13 / AHVN13)
- **Base Legale:** Art. 50c della Legge federale sull'assicurazione per la vecchiaia e per i superstiti (LAVS, `[CH-SRC-08]`).
- **Formato:** Codice a 13 cifre immutabile e non parlante, che inizia obbligatoriamente con il codice ISO della Svizzera **756** (es. `756.xxxx.xxxx.xx`), generato dall'Ufficio centrale di compensazione (UCC / ZAS) di Ginevra (`[CH-SRC-08]`).
- **Attribuzione:** Avviene automaticamente tramite la cassa cantonale di compensazione AVS del datore di lavoro all'inizio dell'impiego, o tramite il controllo abitanti per gli studenti e i non attivi. È la chiave di identificazione universale per previdenza statale (1° Pilastro), previdenza professionale (2° Pilastro LPP), registro tributario e cassa malati.

### Pilastro 3: Apertura del Conto Corrente Bancario Svizzero
- **Requisiti KYC e antiriciclaggio:** Passaporto originale, contratto di lavoro svizzero (o prova d'immatricolazione), ricevuta di annuncio comunale (*Meldebestätigung* emessa da meno di 3 mesi) o permesso di soggiorno fisico, codice fiscale dello Stato d'origine per la trasmissione automatica AIA/CRS.
- **Obbligo legale del Servizio Universale:** L'art. 13 della Legge sulle poste (LPO / PostG, `[CH-SRC-11]`) obbliga **PostFinance** a garantire a chiunque risieda in Svizzera l'apertura e la tenuta di un conto corrente base per i pagamenti in franchi svizzeri. Le banche commerciali private (UBS, ZKB, BCV) possono invece rifiutare aperture o imporre vincoli onerosi a chi non possiede ancora la carta fisica del permesso.
- **Limitazioni Neobank (Neon, Yuh):** Neon e Yuh ammettono l'onboarding digitale esclusivamente tramite scansione della **carta fisica biometrica del permesso di soggiorno** (permessi B, C, L); rifiutano categoricamente le ricevute cartacee comunali (`[CH-SRC-11]`). Escludono inoltre per contratto le persone assoggettate fiscalmente negli Stati Uniti (*US Persons* ai sensi del FATCA).

### Pilastro 4: Tassazione alla Fonte (Quellensteuer) e Soglia NOV a CHF 120.000
- **Base Legale:** Artt. 83–100 della Legge federale sull'imposta federale diretta (LIFD, `[CH-SRC-09]`) e Ordinanza del DFF sull'imposta alla fonte (OIFo, `[CH-SRC-10]`).
- **Meccanismo di trattenuta:** I lavoratori stranieri residenti senza permesso di domicilio C (quindi titolari di permessi B, L o G) subiscono la trattenuta mensile dell'imposta direttamente sulla busta paga da parte del datore di lavoro. La trattenuta ingloba imposta federale diretta, imposta cantonale e imposta comunale. Le aliquote (Tariffe A, B, C, H) dipendono da cantone di domicilio, stato civile, figli a carico e presenza di doppio reddito coniugale.
- **Soglia di Riconciliazione Obbligatoria (NOV):** Ai sensi dell'art. 89b LIFD (`[CH-SRC-09]`), se il reddito lordo annuo del lavoratore (o di uno dei coniugi conviventi) è pari o superiore a **CHF 120.000 / anno**, scatta l'obbligo vincolante e definitivo di **Tassazione Ordinaria Successiva** (*Nachträgliche ordentliche Veranlagung - NOV*). Il contribuente deve compilare ogni anno la dichiarazione dei redditi ordinaria completa, ricevendo la notifica di tassazione definitiva con conguaglio (a debito o a credito) delle imposte cantonali e comunali.

### Pilastro 5: Affiliazione o Esenzione Cassa Malati Obbligatoria (KVG / LAMal)
- **Base Legale:** Legge federale sull'assicurazione malattie (LAMal, `[CH-SRC-06]`) e Ordinanza OAMal (`[CH-SRC-07]`).
- **Termine perentorio di 3 mesi:** Chiunque risieda in Svizzera ha l'obbligo legale di stipulare un'assicurazione malattie di base entro **3 mesi esatti** dalla presa di residenza (`[CH-SRC-06]`).
- **Retroattività assoluta dei premi:** La copertura decorre retroattivamente dal primo giorno di presa di domicilio (`[CH-SRC-06]`). Se ci si assicura l'89° giorno, si riceve una fattura cumulativa arretrata per i tre mesi pregressi. Non esiste alcun mese di franchigia temporale gratuita.
- **Affiliazione coatta d'ufficio (*Zwangszuweisung*):** Se trascorrono i 3 mesi senza stipulare la polizza e senza presentare domanda di esenzione valida, l'autorità cantonale (es. SVA Zurigo, SAM Ginevra) assegna d'ufficio l'assicurando a una cassa malati a propria discrezione, applicando il modello standard tradizionale più oneroso, la franchigia minima obbligatoria di CHF 300 e un supplemento di premio punitivo per ritardo colpevole ex art. 5 cpv. 2 LAMal (`[CH-SRC-06]`).
- **Regime di Esenzione per Studenti e Ricercatori non remunerati (Art. 2 cpv. 1 e 4 OAMal, `[CH-SRC-07]`):**
  - *Studenti UE/AELS:* Possono essere esentati dalla cassa malati svizzera presentando la Tessera Europea di Assicurazione Malattia (TEAM/EHIC) valida e il modulo cantonale di richiesta esenzione entro i 3 mesi.
  - *Studenti Extra-UE:* Possono chiedere la dispensa stipulando una polizza assicurativa privata per studenti esteri equivalente (es. Swisscare StudentPass, Scorestudies, Academic Care a CHF 60–115/mese) e facendola certificare dall'autorità cantonale competente (`[CH-SRC-18]`).
  - **Avvertenza di revoca automatica:** Nel momento in cui lo studente intraprende un'attività lucrativa retribuita in Svizzera (anche un assistentato di ricerca o uno stage di poche ore settimanali), **il diritto all'esenzione decade ipso jure per il principio del luogo di lavoro (*Erwerbsortsprinzip*)**. L'affiliazione a una cassa malati svizzera LAMal diventa obbligatoria a tariffa piena ordinaria (`[CH-SRC-06]`, `[CH-SRC-07]`).

---

## 4. Matrice Completa dei 9 Casi d'Uso: UE/AELS vs Extra-UE

---

### Caso 1: Lavoro Dipendente Ordinario (General Employment)

#### A. Cittadini UE / AELS
- **Regime giuridico:** Libera circolazione dei lavoratori (ALCP All. I Artt. 6–11, `[CH-SRC-03]`). Accesso diretto e incondizionato al mercato del lavoro. Nessun test del mercato né contingentamento.
- **Titolo rilasciato:**
  - Contratto fino a 364 giorni: **Permesso L UE/AELS** di breve durata (`[CH-SRC-03]`).
  - Contratto $\ge 1$ anno o a tempo indeterminato: **Permesso B UE/AELS** (validità 5 anni, rinnovabile, `[CH-SRC-03]`).
  - Lavoro fino a 90 giorni per anno civile: Procedura di notifica online **SEM Meldeverfahren** senza permesso (`[CH-SRC-13]`).
- **Procedura passo-passo:**
  1. Firma del contratto di lavoro con datore svizzero prima della partenza.
  2. Ingresso in Svizzera con passaporto o carta d'identità valida.
  3. Notifica personale di residenza (*Wohnsitzanmeldung*) presso il controllo abitanti del comune di domicilio entro 14 giorni dall'arrivo e **tassativamente prima del primo giorno effettivo di lavoro** (`[CH-SRC-04]`).
  4. Ritiro della *Meldebestätigung* allo sportello che autorizza l'inizio dell'impiego.
  5. Convocazione per rilevamento dati biometrici e recapito postale della carta biometrica (tassa cantonale CHF 65,00, `[CH-SRC-05]`).
- **Costi:** Tassa cantonale per rilascio permesso max **CHF 65,00** (adulti) (`[CH-SRC-05]`).
- **Tempi:** Immediato diritto al lavoro dalla notifica; 2–3 settimane per il recapito della carta.

#### B. Cittadini Extra-UE (Paesi Terzi)
- **Regime giuridico:** Artt. 18–23 LStrI (`[CH-SRC-01]`) e Artt. 19–20 OASA (`[CH-SRC-02]`). L'ammissione per lavoro ordinario/generico non qualificato è **giuridicamente preclusa** dalla legge federale (l'art. 23 LStrI riserva i permessi solo a quadri e specialisti, `[CH-SRC-01]`).
- **Requisiti per assunzioni autorizzabili:**
  - **Inländervorrang (Priorità dei lavoratori residenti, Art. 21 LStrI):** Il datore deve provare di aver cercato invano manodopera in Svizzera e in tutta l'UE/AELS (pubblicazioni su Job-Room ed EURES, `[CH-SRC-01]`).
  - **Stellenmeldepflicht (Art. 21a LStrI):** Per gruppi professionali con disoccupazione $\ge 5\%$, obbligo di notifica preventiva esclusiva al RAV/URC con finestra di blocco di 5 giorni lavorativi (`[CH-SRC-20]`).
  - **Condizioni salariali e lavorative conformi (Art. 22 LStrI):** Retribuzione conforme agli usi locali e di settore verificata tramite Salarium/BFS (`[CH-SRC-19]`).
  - **Contingenti (Art. 20 LStrI):** Disponibilità di quote cantonali o federali (8.500 quote 2026, `[CH-SRC-14]`).
- **Procedura a triplo livello (Zweifaches Prüfungsverfahren):**
  1. *Fase 1 (Cantonale):* Il datore presenta la domanda all'ufficio cantonale del lavoro (es. AWA Zurigo, OCPM Ginevra, SPOP Vaud).
  2. *Fase 2 (Federale):* L'autorità cantonale trasmette la decisione preliminare favorevole alla SEM di Berna per l'approvazione federale (*Zustimmungsverfügung*, `[CH-SRC-16]`).
  3. *Fase 3 (Consolare):* La SEM autorizza la rappresentanza diplomatica all'estero (*Ermächtigung zur Visumserteilung*, tassa federale CHF 95,00, `[CH-SRC-05]`).
  4. *Fase 4 (Ingresso):* Il candidato ritira il Visto D (90 EUR/CHF, `[CH-SRC-05]`), entra in Svizzera, si registra al comune prima di lavorare e paga le tasse del permesso (CHF 137,00–144,00, `[CH-SRC-05]`, `[CH-SRC-23]`).
- **Costi totali:** Visto D 90 EUR/CHF + Assicurazione ingresso CHF 95 + Rilascio permesso biometrico CHF 137–144 = **CHF 322,00 – CHF 329,00** (`[CH-SRC-05]`).
- **Tempi:** **10 – 16 settimane** (3–4 mesi reali).

---

### Caso 2: Lavoro Altamente Qualificato / Skilled (Specialisti, Quadri, Executive)

#### A. Cittadini UE / AELS
- Stesso canale privilegiato ALCP del Caso 1. Nessuna distinzione burocratica per livello gerarchico o stipendio. Rilascio diretto del **Permesso B UE/AELS** quinquennale (`[CH-SRC-03]`).

#### B. Cittadini Extra-UE: Canale Art. 23 LStrI (AIG)
- **Regime giuridico:** Art. 23 LStrI: ammessi solo dirigenti, specialisti con diploma universitario/politecnico o persone con formazione professionale superiore ed esperienza comprovata pluriennale (`[CH-SRC-01]`).
- **Requisiti specifici:**
  - Offerta contrattuale a tempo indeterminato o pluriennale con mansioni di elevata responsabilità tecnica, scientifica o manageriale.
  - Salario allineato al percentile medio-alto di categoria (es. quadri superiori: stipendi tipicamente superiori a CHF 110.000–130.000/anno a Zurigo/Ginevra verificati su Salarium/BFS, `[CH-SRC-19]`).
  - Superamento del test di priorità indigeno (*Inländervorrang*, `[CH-SRC-01]`).
  - Assegnazione di una quota dal contingente cantonale o dalla riserva federale SEM (**4.500 permessi B e 4.000 permessi L per il 2026**, `[CH-SRC-14]`). Per i cittadini UK, contingente dedicato di **3.500 permessi (2.100 B e 1.400 L)** (`[CH-SRC-14]`).
- **Procedura:** Identica alla procedura a triplo livello del Caso 1B (Cantone $\rightarrow$ SEM $\rightarrow$ Visto D consolare $\rightarrow$ Registrazione comunale).
- **Costi e Tempi:** CHF 322–329; 10–16 settimane.

---

### Caso 3: Internship / Tirocinio (Stage Curriculare vs Extracurricolare)

#### A. Cittadini UE / AELS
- **Stage fino a 90 giorni per anno solare:** Il datore di lavoro notifica online l'assunzione sul portale **SEM Meldeverfahren** entro il giorno precedente l'inizio del lavoro (`[CH-SRC-13]`). Nessun permesso cartaceo richiesto, costo CHF 0.
- **Stage di durata compresa tra 91 giorni e 12 mesi:** Registrazione obbligatoria al controllo abitanti entro 14 giorni dall'arrivo e rilascio di un **Permesso L UE/AELS** (`[CH-SRC-03]`).
- **Documenti:** Contratto di stage (*Praktikumsvertrag*), convenzione universitaria (se curriculare), passaporto, contratto d'alloggio. Tassa permesso cantonale max CHF 65,00 (`[CH-SRC-05]`).

#### B. Cittadini Extra-UE
- **Tirocinio Curriculare Obbligatorio (Art. 39 OASA, `[CH-SRC-02]`):**
  - Aperto a studenti iscritti a un'università svizzera o estera, a condizione che lo stage sia **parte integrante e obbligatoria del piano di studi universitario** (*Pflichtpraktikum*).
  - La durata non può eccedere il 50% della durata totale del corso di studi accademico.
  - La domanda deve essere presentata dall'azienda assumente all'autorità cantonale del mercato del lavoro, allegando la certificazione ufficiale dell'università che ne attesti l'obbligatorietà ai fini della laurea.
  - Retribuzione conforme agli usi cantonali per tirocinanti (es. a Zurigo/Ginevra solitamente CHF 2.200–3.000/mese lordi). Viene rilasciato un **Permesso L per formazione** (`[CH-SRC-02]`).
- **Tirocinio Extracurricolare Post-Laurea:**
  - **SEVERAMENTE VIETATO E PRECLUSO** per laureati da atenei esteri terzi (non soddisfa i requisiti di specialista ex Art. 23 LStrI, `[CH-SRC-01]`).
  - **Uniche eccezioni legali ammesse:**
    1. Partecipazione agli Accordi bilaterali per Giovani Professionisti (*Stagiaires*) se cittadini di uno dei 14 Paesi convenzionati (vedi Caso 8, `[CH-SRC-15]`).
    2. Laureati da una scuola universitaria svizzera entro i 6 mesi di ricerca lavoro ex Art. 21 cpv. 3 LStrI (`[CH-SRC-01]`).

---

### Caso 4: Studio Universitario (Bachelor / Master)

#### A. Cittadini UE / AELS
- **Regime giuridico:** ALCP All. I Art. 24 (`[CH-SRC-03]`). Diritto di soggiorno per motivi di studio.
- **Procedura:** Ingresso senza visto. Entro 14 giorni dall'arrivo, registrazione al controllo abitanti del comune di residenza portando l'attestazione d'immatricolazione definitiva (*Immatrikulationsbestätigung*), la prova di mezzi finanziari sufficienti (autocertificazione con estratto conto bancario comprovante circa CHF 1.750–2.000/mese), copia della tessera sanitaria europea TEAM e contratto d'alloggio.
- **Titolo rilasciato:** **Permesso B UE/AELS per motivi di studio**, valido 1 anno e rinnovabile annualmente fino al termine del percorso formativo (`[CH-SRC-03]`).
- **Lavoro consentito:** Fino a 15 ore settimanali durante i corsi; fino al 100% (tempo pieno) durante le vacanze accademiche ufficiali (`[CH-SRC-03]`).

#### B. Cittadini Extra-UE (Procedura Visto D e Permesso B Studio)
- **Regime giuridico:** Art. 27 LStrI (`[CH-SRC-01]`) e Artt. 23–24 OASA (`[CH-SRC-02]`).
- **Requisiti imperativi di ammissibilità:**
  - Ammissione o pre-immatricolazione formale presso un'università svizzera riconosciuta (Politecnici federali ETH/EPFL, università cantonali, SUP/HES).
  - Piano personale di studio (*Studienplan*) e lettera di motivazione accademica.
  - Impegno scritto formale a **lasciare la Svizzera alla conclusione degli studi** (Art. 23 cpv. 2 OASA, `[CH-SRC-02]`).
  - Limite d'età: di regola età inferiore a 30 anni per Bachelor/Master (per età superiori, motivazione dettagliata sulla necessità accademica).
  - **Dimostrazione dei Mezzi Finanziari (Proof of Funds):**
    - Deposito bancario bloccato nominativo a nome dello studente presso una **banca autorizzata e vigilata dalla FINMA con sede o succursale in Svizzera** (`[CH-SRC-16]`).
    - *Importi minimi cantonali accertati:* **CHF 21.000 / anno** (CHF 1.750/mese) per il Canton **Zurigo** (`[CH-SRC-23]`); **CHF 24.000 / anno** (CHF 2.000/mese) per i Cantoni **Vaud, Ginevra, Basilea-Città e San Gallo** (`[CH-SRC-24]`, `[CH-SRC-25]`, `[CH-SRC-26]`); **CHF 18.000 / anno** per il Canton **Berna**.
- **Procedura operativa:**
  1. Presentazione della domanda di Visto D in triplice copia presso l'ambasciata/consolato svizzero nel Paese di residenza almeno 3–4 mesi prima dell'inizio del semestre (`[CH-SRC-28]`).
  2. L'ambasciata trasmette il fascicolo all'Ufficio migrazione cantonale dell'università.
  3. Il Cantone emette la *Zusicherung der Aufenthaltsbewilligung* (tassa federale CHF 95,00, `[CH-SRC-05]`).
  4. L'ambasciata appone la vignetta del Visto D sul passaporto (90 EUR/CHF, `[CH-SRC-05]`).
  5. Arrivo in Svizzera, notifica al comune entro 14 giorni e rilascio del **Permesso B Studio** (tassa cantonale CHF 142–182, `[CH-SRC-23]`).
- **DIVIETO DI LAVORO NEI PRIMI 6 MESI (Art. 38 cpv. 1 OASA, `[CH-SRC-02]`):**
  - Agli studenti di Paesi terzi è **rigorosamente vietato svolgere qualsiasi attività lucrativa accessoria per i primi 6 mesi di soggiorno**.
  - A partire dal 7° mese, è consentita un'attività part-time fino a un massimo di **15 ore a settimana** durante i periodi di lezione (tempo pieno nelle vacanze), a condizione che il datore presenti domanda all'autorità cantonale del lavoro e l'università attesti per iscritto che l'impiego non pregiudica il regolare svolgimento degli studi (`[CH-SRC-02]`).
  - *Eccezione atenei federali:* Per gli studenti di corsi di Master presso ETH ed EPFL, l'attesa di 6 mesi non si applica per impieghi accademici interni (es. assistente alla didattica o alla ricerca / *Hilfsassistent*) svolti all'interno dell'istituto stesso.

---

### Caso 5: Tesi / Ricerca all'Estero (Visiting Student vs Visiting Researcher)

#### A. Visiting Student (Preparazione Tesi senza Contratto di Lavoro)
- **UE / AELS:** Registrazione al comune di residenza come studente ospite non attivo in virtù dell'art. 24 All. I ALCP (`[CH-SRC-03]`). Esibizione della convenzione tra atenei (*Hosting Agreement* o accordo Erasmus/SEMP) e copertura sanitaria TEAM (`[CH-SRC-07]`). Permesso L o B per studio.
- **Extra-UE:** Istanza ex Art. 27 LStrI (`[CH-SRC-01]`) come studente per soggiorno di formazione temporaneo. Lettera d'invito dell'università ospitante svizzera, piano di ricerca per la tesi, prova fondi (CHF 1.750–2.000/mese) e Visto D consolare (`[CH-SRC-28]`). Permesso L per studio (fino a 12 mesi).

#### B. Visiting Researcher / Postdoc Accademico (con Borsa o Retribuzione)
- **Regime giuridico agevolato (Art. 40 OASA, `[CH-SRC-02]`):** Il Consiglio Federale garantisce condizioni di accesso agevolate al personale docente, scientifico e di ricerca delle università e dei centri R&D:
  - Esenzione o deroga alla priorità dei residenti (*Inländervorrang* neutralizzato ex art. 40 OASA per ricercatori di riconosciuto valore accademico, `[CH-SRC-02]`).
  - La procedura viene gestita direttamente dall'ateneo svizzero (*Academic Guest / Visiting Scholar*). Viene rilasciato un **Permesso L con attività di ricerca** (fino a 12 mesi prorogabile a 24) o un **Permesso B** in base alla durata del contratto di ricerca (`[CH-SRC-02]`).

---

### Caso 6: Erasmus+ / SEMP (Swiss European Mobility Programme)

#### A. Inquadramento Istituzionale e Finanziamento Federale (Movetia)
- La Svizzera **NON è paese associato a Erasmus+** (partecipazione come Paese terzo non associato).
- La mobilità universitaria studentesca con gli atenei europei è garantita e interamente finanziata dal governo federale elvetico tramite il **Swiss-European Mobility Programme (SEMP)**, gestito dall'agenzia nazionale **Movetia** (`[CH-SRC-21]`).
- **Contributo economico erogato agli studenti in arrivo in Svizzera:**
  - Borsa di studio mensile SEMP: **CHF 380 – CHF 440 / mese** (erogata direttamente dall'università svizzera ospitante) (`[CH-SRC-21]`).
  - Bonus "Green Travel": supplemento una tantum di **CHF 100** per chi viaggia in treno o autobus (`[CH-SRC-21]`).

#### B. Procedura per Studenti UE / AELS
- Nessun visto. Ingresso con passaporto/carta d'identità.
- Registrazione al comune di residenza entro 14 giorni con la conferma SEMP (*Learning Agreement*) e il certificato d'ammissione. Rilascio di **Permesso L UE/AELS** (per 1 semestre) o **Permesso B UE/AELS** (per l'intero anno accademico) (`[CH-SRC-03]`).
- **Esenzione Cassa Malati:** Piena esenzione dalla LAMal svizzera presentando la TEAM/EHIC europea e il formulario di dispensa cantonale ex art. 2 cpv. 1 lett. g OAMal (`[CH-SRC-07]`).

#### C. TRAPPOLA CRITICA PER STUDENTI EXTRA-UE ISCRITTI IN ATENEI EUROPEI
- **Mancato recepimento della Direttiva UE 2016/801:** La Svizzera non fa parte dell'UE e non recepisce la direttiva sulla mobilità intra-europea degli studenti di Paesi terzi. Un permesso di soggiorno per studio o un visto Schengen rilasciato da Francia, Germania, Italia o Spagna **NON DÀ ALCUN DIRITTO DI STUDIARE IN SVIZZERA**.
- **Obbligo procedurale:** Lo studente extra-UE deve richiedere obbligatoriamente un **Visto nazionale D per studio** presso l'ambasciata/consolato svizzero del Paese europeo in cui risiede, con istruttoria cantonale identica al Caso 4B. La borsa SEMP (CHF 380–440/mese) viene conteggiata come mezzo finanziario, ma lo studente deve comprovare la disponibilità dei fondi residui fino al minimo cantonale (CHF 1.750–2.000/mese) su conto bancario autorizzato FINMA (`[CH-SRC-16]`, `[CH-SRC-28]`).

---

### Caso 7: Master e Dottorato (PhD / Post-doc Salariati)

#### A. Inquadramento Giuridico del Dottorato in Svizzera
- In Svizzera i candidati al dottorato (PhD) e i ricercatori post-dottorato (Postdoc) sono inquadrati quasi universalmente come **collaboratori scientifici e dipendenti salariati** dell'università o politecnico federale (ETHZ, EPFL, università cantonali).
- **Scale salariali standardizzate dal Fondo Nazionale Svizzero (FNS / SNSF, `[CH-SRC-22]`):**
  - Stipendio lordo dottorando (PhD student): **CHF 48.000 – CHF 55.000 / anno** (a seconda dell'anno di corso e della disciplina accademica, `[CH-SRC-22]`).
  - Stipendio lordo ricercatore post-doc: **CHF 80.000 – CHF 110.000 / anno** (`[CH-SRC-22]`).

#### B. Regime dei Permessi e Procedura
- **Cittadini UE / AELS:** Contratto di lavoro accademico $\ge 1$ anno $\rightarrow$ registrazione al comune di residenza entro 14 giorni $\rightarrow$ rilascio immediato del **Permesso B UE/AELS con attività lucrativa** (validità 5 anni, `[CH-SRC-03]`).
- **Cittadini Extra-UE:** Trattandosi di attività accademica qualificata (Art. 23 LStrI e Art. 40 OASA, `[CH-SRC-01]`, `[CH-SRC-02]`), il servizio Risorse Umane dell'ateneo avvia la pratica cantonale per personale accademico/scientifico. La SEM accorda l'approvazione federale e rilascia l'autorizzazione di visto D. Viene emesso un **Permesso B con attività lucrativa per ricerca accademica** (validità 1 anno rinnovabile annualmente, `[CH-SRC-02]`).
- **Assicurazione Sanitaria:** Poiché percepiscono un regolare salario svizzero soggetto a contribuzione previdenziale AVS/LPP, i dottorandi salariati **hanno l'obbligo inderogabile di affiliarsi a una cassa malati svizzera ordinaria (LAMal/KVG)** a tariffa piena; non possono usufruire dell'esenzione studenti ex art. 2 OAMal (`[CH-SRC-06]`, `[CH-SRC-07]`).

---

### Caso 8: Working Holiday / Giovani Professionisti (Stagiaires)

#### A. Assenza di Programmi Working Holiday Generali
- La Svizzera **NON dispone di visti Vacanza-Lavoro (Working Holiday Visa)** aperti liberamente a viaggiatori zaino in spalla per lavori occasionali/stagionali come in Australia, Canada o Nuova Zelanda. I cittadini UE/AELS non ne hanno bisogno poiché beneficiano della totale libera circolazione ALCP (`[CH-SRC-03]`).

#### B. Accordi Bilaterali per Giovani Professionisti (Stagiaires, `[CH-SRC-15]`)
- Per favorire la mobilità e l'acquisizione di competenze professionali, la Svizzera ha sottoscritto specifici accordi bilaterali per **Giovani Professionisti (*Stagiaires*)** con **14 Paesi Terzi**:
  - *Paesi aderenti:* Argentina, Australia, Canada, Cile, Filippine, Giappone, Indonesia, Monaco, Nuova Zelanda, San Marino, Sudafrica, Tunisia, Stati Uniti d'America (USA) e Regno Unito (UK) (accordo con la Russia attualmente sospeso) (`[CH-SRC-15]`).
- **Requisiti imperativi:**
  - Età anagrafica compresa tra **18 e 35 anni** (18–30 anni per Australia e Nuova Zelanda) (`[CH-SRC-15]`).
  - Titolo di studio: diploma di laurea (Bachelor o Master) oppure attestato di formazione professionale biennale conclusa nel Paese d'origine.
  - Impiego a tempo pieno (100%) in Svizzera in **stretta correlazione con la professione e gli studi conseguiti** (vietati lavori non qualificati o generici) (`[CH-SRC-15]`).
  - Retribuzione conforme agli usi locali e di settore (vietati compensi simbolici; retribuzioni verificate su Salarium/BFS, `[CH-SRC-19]`).
  - Durata massima autorizzabile: **18 mesi** complessivi (contratto iniziale fino a 12 mesi, prorogabile per ulteriori 6 mesi) (`[CH-SRC-15]`).
- **Vantaggio legale:** I permessi rilasciati nell'ambito degli accordi Stagiaires sono **esenti dal test di precedenza indigeno (*Inländervorrang*) e non vengono conteggiati nei contingenti ordinari federali** ex Art. 20 LStrI (`[CH-SRC-01]`, `[CH-SRC-15]`). Viene rilasciato un **Permesso L Stagiaire**.

---

### Caso 9: Ricongiungimento Familiare e Soggiorni Brevi (Fino a 90 gg)

#### A. Soggiorni Brevi per Lavoro (Fino a 90 Giorni per Anno Civile - Meldeverfahren)
- **Cittadini UE / AELS:** Disciplinati dall'ALCP e dall'art. 2 della Legge sui lavoratori distaccati (LDist, `[CH-SRC-12]`). Possono lavorare in Svizzera per un massimo di **90 giorni effettivi per anno solare** senza richiedere alcun permesso di soggiorno, tramite la procedura di notifica telematica **SEM Meldeverfahren online** (`[CH-SRC-13]`):
  - *Assunzione presso azienda svizzera:* Notifica inviata dal datore di lavoro entro il **giorno antecedente l'inizio dell'attività**.
  - *Distacco di personale o prestazione di servizi indipendenti da azienda UE:* Notifica obbligatoria con un anticipo vincolante di almeno **8 giorni di calendario interi** prima dell'inizio dei lavori in Svizzera (`[CH-SRC-12]`).
- **Cittadini Extra-UE:** **Nessun Meldeverfahren consentito.** Qualsiasi attività lucrativa in Svizzera (anche di 1 solo giorno) richiede l'autorizzazione preventiva dell'autorità cantonale del mercato del lavoro e il rilascio di un visto d'ingresso Schengen per motivi di lavoro (Visto C per affari con attività lucrativa, `[CH-SRC-01]`, `[CH-SRC-28]`).

#### B. Ricongiungimento Familiare ALCP (Cittadini UE / AELS, `[CH-SRC-03]`)
- **Regime giuridico:** Art. 3 All. I ALCP (`[CH-SRC-03]`). Diritto soggettivo pieno e incondizionato.
- **Aventi diritto:** Coniuge o partner registrato; discendenti (figli, nipoti) fino a 21 anni o a carico; ascendenti diretti a carico (genitori, nonni) del lavoratore o del coniuge (`[CH-SRC-03]`).
- **Accesso al lavoro dei familiari:** Il coniuge e i figli ammessi per ricongiungimento **hanno il diritto automatico di esercitare qualsiasi attività lucrativa** in Svizzera senza formalità aggiuntive, a prescindere dalla loro cittadinanza originaria (`[CH-SRC-03]`).
- **Requisiti:** Alloggio ritenuto convenevole per la famiglia e reddito sufficiente a non dover ricorrere all'aiuto sociale.

#### C. Ricongiungimento Familiare LStrI (Cittadini Extra-UE, `[CH-SRC-01]`)
- **Regime giuridico:** Artt. 42–47 e 58a LStrI (`[CH-SRC-01]`) e Artt. 73–77a OASA (`[CH-SRC-02]`). Regime estremamente restrittivo:
  - **Aventi diritto limitati:** Ammessi solo il coniuge e i **figli minori di 18 anni** (esclusi categoricamente genitori, nonni e figli maggiorenni, `[CH-SRC-01]`).
  - **Termini perentori di decadenza (Art. 47 LStrI, `[CH-SRC-01]`):**
    - La richiesta deve essere presentata entro **5 anni** dal rilascio del titolo per il coniuge e per i figli di età inferiore a 12 anni.
    - Per i figli che hanno compiuto **12 anni di età**, la domanda deve essere presentata entro il termine perentorio di **12 mesi**. Decorso l'anno, il diritto al ricongiungimento **decade per sempre** (nessuna deroga ammessa dalla giurisprudenza del Tribunale Federale).
  - **Requisito linguistico del coniuge (Art. 58a LStrI, `[CH-SRC-01]`):** All'ingresso in Svizzera il coniuge deve comprovare competenze orali di livello almeno **A1 (QCER / fide)** nella lingua ufficiale del luogo di domicilio (tedesco, francese o italiano), oppure esibire l'iscrizione certificata a un corso di lingua per raggiungere tale livello entro la scadenza del primo permesso. Per il rinnovo e il successivo permesso C permanente è richiesto il livello A2 orale e A1 scritto (`[CH-SRC-02]`).
  - **Condizioni alloggiative e finanziarie:** Alloggio dimensionato al nucleo familiare (regola standard: numero locali $\ge$ numero occupanti meno uno); certificato del casellario dell'Ufficio esecuzioni e fallimenti attestante l'assenza totale di debiti e indipendenza assoluta dall'assistenza sociale (`[CH-SRC-01]`).

---

## 5. Costi Ufficiali, Prova Fondi e Salari (Dati Verificati 2026)

### 5.1. Tariffe Amministrative Ufficiali (Livello Federale e Cantonale)

| Tipologia di Atto Amministrativo | Base Giuridica Primaria | Tariffa Ufficiale Adulti | Dettaglio e Ripartizione Voci |
| :--- | :--- | :---: | :--- |
| **Visto Nazionale D (Lunga durata)** | Art. 12 OEmol-LStrI (RU 2024 258) `[CH-SRC-05]` | **90 EUR / 90 CHF** | Minori 6–12 anni: 45 EUR; minori sotto 6 anni e borsisti FNS/ETH: esenti. |
| **Autorizzazione ingresso / Zusicherung** | Art. 8 cpv. 1 lett. a OEmol-LStrI `[CH-SRC-05]` | **CHF 95,00** | Tassa federale riscossa dal Cantone per nulla osta all'ingresso Paesi terzi. |
| **Rilascio Permesso L/B (Cittadini UE/AELS)** | Art. 8 cpv. 4 OEmol-LStrI `[CH-SRC-05]` | **CHF 65,00** | Tetto massimo federale onnicomprensivo (+ eventuali CHF 7 spese postali a ZH). |
| **Rilascio Permesso B/L (Cittadini Extra-UE)** | Art. 8 cpv. 1–3 OEmol-LStrI `[CH-SRC-05]` | **CHF 137,00 – CHF 144,00** | Ripartito in: CHF 95 decisione + CHF 22 carta biometrica + CHF 20 biometria. |
| **Rinnovo Permesso B/L (Extra-UE)** | Art. 8 cpv. 1 lett. e OEmol-LStrI `[CH-SRC-05]` | **CHF 117,00** | Ripartito in: CHF 75 rinnovo + CHF 22 carta + CHF 20 biometria. |
| **Visto di Ritorno (Rückreisevisum)** | Art. 12 cpv. 2 OEmol-LStrI `[CH-SRC-05]` | **CHF 90,00** | Rilasciato dall'ufficio cantonale della migrazione in caso di viaggio urgente senza permesso. |

### 5.2. Requisiti di Sussistenza Economica per Studenti (Proof of Funds)

La prova dei mezzi finanziari deve consistere in un estratto conto bancario nominativo intestato allo studente presso una **banca vigilata dalla FINMA con sede o succursale autorizzata in Svizzera** (`[CH-SRC-16]`):

| Cantone / Istituzione Accademica | Fabbisogno Mensile | Fabbisogno Annuo Minimo Richiesto | Ricerca Lavoro (6 Mesi Art. 21 cpv. 3) | Fonte Cantonale Verificata |
| :--- | :---: | :---: | :---: | :--- |
| **Canton Zurigo (ETH Zürich / UZH)** | CHF 1.750 / mese | **CHF 21.000 / anno** | **CHF 10.500** (50% del fabbisogno annuo) | Merkblatt Studium Migrationsamt ZH `[CH-SRC-23]` |
| **Canton Vaud (EPFL / UNIL)** | CHF 2.000 / mese | **CHF 24.000 / anno** | **CHF 12.000** | Directives SPOP Vaud `[CH-SRC-25]` |
| **Canton Ginevra (UNIGE / IHEID)** | CHF 1.665 – 2.000 / m | **CHF 20.000 – CHF 24.000** | **CHF 12.000** | Guide financière UNIGE / OCPM `[CH-SRC-24]` |
| **Canton Basilea-Città (Uni Basel)** | CHF 2.000 / mese | **CHF 24.000 / anno** | **CHF 12.000** | Bevölkerungsdienste Basel-Stadt `[CH-SRC-26]` |
| **Canton San Gallo (HSG)** | CHF 2.000 / mese | **CHF 24.000 / anno** | **CHF 12.000** | Migrationsamt St. Gallen |
| **Canton Berna (Uni Bern)** | CHF 1.500 / mese | **CHF 18.000 / anno** | **CHF 9.000** | Migrationsdienst Bern |

### 5.3. Costi dell'Assicurazione Sanitaria KVG/LAMal (Dati Ufficiali UFSP 2026, `[CH-SRC-17]`)

- **Media Nazionale Svizzera 2026:** **CHF 393,30 / mese** (Adulti 26+: CHF 465,30/mese; Giovani adulti 19–25 anni: CHF 326,30/mese; Minori: CHF 122,50/mese).
- **Premi Medi Cantonali 2026 (Modello base franchigia ordinaria CHF 300 con infortuni):**
  - Canton Ginevra (GE): **CHF 489,80 / mese**.
  - Canton Zurigo (ZH): **CHF 477,00 / mese** (Città di Zurigo Regione 1: CHF 458,50 per giovani adulti 19–25 anni; CHF 640,10 per adulti 26+).
  - Canton Basilea-Città (BS): **CHF 470,10 / mese**.
  - Canton Vaud (VD): **CHF 441,50 / mese**.
- **Franchigia e Co-pagamento (Art. 64 LAMal, `[CH-SRC-06]`):**
  - Franchigia annua standard per adulti: **CHF 300,00** (opzionale fino a CHF 2.500).
  - Quota parte (*Selbstbehalt*): **10%** dei costi eccedenti la franchigia fino a un tetto massimo di **CHF 700,00 / anno** per adulti.
  - *Esposizione massima viva out-of-pocket (franchigia base):* CHF 300 + CHF 700 = **CHF 1.000,00 / anno**.
- **Assicurazioni Studentesche Private Agevolate (Esenzione LAMal ex Art. 2 OAMal, `[CH-SRC-07]`, `[CH-SRC-18]`):**
  - Swisscare (StudentPass): **CHF 38,00 – CHF 85,00 / mese** (a seconda della franchigia prescelta).
  - Scorestudies: **CHF 60,00 – CHF 90,00 / mese**.
  - Academic Care (Groupe Mutuel): **CHF 90,00 – CHF 115,00 / mese**.

### 5.4. Salari e Retribuzioni Minime di Riferimento 2026

- **Livello Federale:** **Nessun salario minimo legale federale** (`[CH-SRC-19]`). Valgono unicamente i Contratti Collettivi di Lavoro (CCL/GAV) dichiarati di obbligatorietà generale o i Contratti Normali di Lavoro (CNL/NAV).
- **Salari Minimi Legali Cantonali (in vigore al 1° gennaio 2026):**
  1. **Canton Ginevra (GE):** **CHF 24,59 / ora** lordi (indicizzato all'inflazione; circa **CHF 4.262 / mese** per 40 ore/settimana, `[CH-SRC-24]`).
  2. **Canton Basilea-Città (BS):** **CHF 22,20 / ora** lordi (`[CH-SRC-26]`).
  3. **Canton Giura (JU):** **CHF 21,40 / ora** lordi.
  4. **Canton Neuchâtel (NE):** **CHF 21,35 / ora** lordi.
  5. **Canton Ticino (TI):** **CHF 20,00 – CHF 20,50 / ora** lordi a seconda del settore economico (`[CH-SRC-27]`).
- **Benchmark Salariali Ufficiali (Rilevazione BFS LSE 2024 / Salarium, `[CH-SRC-19]`):**
  - Salario mediano lordo a tempo pieno nazionale: **CHF 7.024 / mese**.
  - Regione di Zurigo: **CHF 7.502 / mese**; Regione Nord-occidentale (Basilea): **CHF 7.156 / mese**; Regione Lago di Ginevra: **CHF 6.998 / mese**; Ticino: **CHF 5.708 / mese**.
  - Dipendenti con diploma universitario: **CHF 10.533 / mese**; con diploma SUP/Fachhochschule: **CHF 9.288 / mese**.
  - Laureati master in economia a 1 anno dalla laurea: mediana di **CHF 87.100 / anno**.

---

## 6. Realtà Pratica, Friczioni e Trappole Operative

### 6.1. La Crisi Abitativa e la Trappola dell'Anagrafe (*Anmelde-Falle*)
- **Penuria estrema:** Tasso di sfitto 2026 ai minimi storici: **0,11%** nella città di Zurigo e **0,31%** nel Cantone di Ginevra (`[CH-SRC-19]`). Le agenzie immobiliari (*Régies/Verwaltungen*) esigono sistematicamente il permesso svizzero già emesso, l'estratto del registro esecuzioni (*Betreibungsauszug*) e le ultime tre buste paga svizzere con reddito triplo rispetto al canone.
- **Inidoneità di Airbnb e hotel:** I comuni svizzeri **respingono la registrazione anagrafica** se supportata unicamente da una ricevuta di prenotazione Airbnb o hotel. I proprietari privati rifiutano di compilare la dichiarazione di alloggio per evitare vincoli fiscali o commerciali.
- **La spirale bloccante:** Senza contratto di locazione ufficiale o subaffitto espressamente approvato dalla gestione (*Verwaltung*) $\rightarrow$ Impossibile completare la *Wohnsitzanmeldung* al comune entro 14 giorni $\rightarrow$ Mancato rilascio del permesso di soggiorno $\rightarrow$ Impossibilità di aprire il conto corrente bancario ordinario $\rightarrow$ Blocco del pagamento dello stipendio da parte dell'azienda.
- **Soluzione di ripiego operativa:** Per registrarsi regolarmente entro i 14 giorni, il neo-arrivato deve contrattualizzare prima della partenza un monolocale arredato presso società professionali di *serviced apartments* accreditate (es. City Pop, Visionapartments), sostenendo canoni temporanei elevati (CHF 2.000–3.200/mese).

### 6.2. Tempi Reali di Rilascio dei Permessi e il Limbo dei Viaggi Schengen
- **Colli di bottiglia amministrativi:**
  - *Canton Ginevra (OCPM):* Storici ritardi burocratici dovuti alla totale centralizzazione. Il rilascio di permessi per studenti ed extra-UE richiede nella prassi tra **3 e 5 mesi** (i ricongiungimenti familiari sforano regolarmente gli 8–12 mesi).
  - *Canton Vaud (SPOP):* Doppio passaggio burocratico (comune $\rightarrow$ cantone), con tempi medi di 6–10 settimane per cittadini UE e 3–6 mesi per extra-UE.
  - *Canton Zurigo (Migrationsamt):* Sistema più digitalizzato; circa 3–6 settimane per permessi UE, 8–14 settimane per specialisti extra-UE.
- **La Trappola dei Viaggi fuori dalla Svizzera:**
  - La ricevuta provvisoria di annuncio (*Meldebestätigung* o *Attestation de dépôt*) comprova la legalità del soggiorno in Svizzera MA **non costituisce un documento di viaggio valido nello Spazio Schengen**.
  - Se un cittadino di Paese terzo esce dalla Svizzera dopo la scadenza del Visto D d'ingresso senza avere ancora ricevuto la carta fisica biometrica del permesso, le compagnie aeree all'estero gli **negheranno l'imbarco per la Svizzera**.
  - Per uscire e rientrare legalmente durante l'attesa burocratica, il cittadino deve presentarsi personalmente all'ufficio cantonale della migrazione e richiedere a pagamento un **Visto di Ritorno nazionale (Rückreisevisum / Visa de retour, tassa CHF 90,00, `[CH-SRC-05]`)**, concesso unicamente per motivi urgenti comprovati.

### 6.3. Difficoltà Bancarie e Barriera FATCA per Cittadini USA
- **Banche tradizionali:** UBS, PostFinance e le Banche Cantonali accettano la *Meldebestätigung* comunale per l'apertura del conto, ma pretendono categoricamente la **presenza fisica allo sportello** (*in-person visit*) per il riconoscimento antiriciclaggio.
- **Neobank (Neon, Yuh):** Accettano solo la tessera biometrica fisica del permesso (nessun onboarding possibile con ricevuta cartacea).
- **Cittadini Statunitensi (FATCA):** Le neobank escludono a priori qualsiasi persona con obblighi fiscali negli USA (*US Persons*). Presso UBS e PostFinance l'apertura richiede la sottoscrizione del modulo IRS **W-9**, la rinuncia al segreto bancario e l'addebito di commissioni mensili supplementari di compliance (CHF 25–40/mese), con divieto assoluto di accesso a prodotti d'investimento e fondi previdenziali in titoli (PFIC).

### 6.4. Rigidità dei Controlli sul Meldeverfahren e Tolleranza Zero
- Nei cantoni transfrontalieri ad alta intensità ispettiva (**Ticino, Ginevra, Basilea**), la Segreteria di Stato dell'economia (SECO) e gli ispettorati del lavoro applicano tolleranza zero sulla procedura di notifica dei 90 giorni (`[CH-SRC-12]`).
- Qualora una notifica di distacco venga registrata 7 giorni prima anziché rispettare il termine inderogabile di **8 giorni di calendario interi**, l'attività viene sanzionata all'istante come **lavoro nero (*Schwarzarbeit*)**: blocco immediato dei lavori, sanzioni pecuniarie fino a CHF 5.000–30.000 (`[CH-SRC-12]`) e applicazione della **Dienstleistungssperre** (bando dal mercato svizzero da 1 a 5 anni con iscrizione nella banca dati pubblica RESA della SECO).

### 6.5. Mercato del Lavoro Reale per Laureati Extra-UE di Atenei Svizzeri
- Nonostante l'art. 21 cpv. 3 LStrI consenta di derogare al test di precedenza dei residenti per un impiego di elevato interesse economico, il disegno di legge federale di esenzione dai contingenti (Affare 22.067, `[CH-SRC-29]`) è stato archiviato.
- Di conseguenza, ogni assunzione rimane subordinata alla disponibilità dei contingenti cantonali/federali di permessi B/L (`[CH-SRC-14]`).
- Studi empirici confermano che solo il **10% – 15%** dei laureati non-UE di atenei elvetici riesce a ottenere un permesso di lavoro stabile entro il semestre di ricerca lavoro; i filtri ATS automatici delle grandi società e la riluttanza burocratica delle PMI (che rifiutano le trafile autorizzative di 3 mesi) provocano lo scarto della maggioranza delle candidature.

---

## 7. Checklist Documentali per la Presentazione delle Domande

### Checklist A: Lavoratore Dipendente UE/AELS
1. Passaporto o Carta d'identità in corso di validità.
2. Contratto di lavoro originale controfirmato (indicante salario lordo, percentuale d'impiego e durata).
3. Contratto di locazione ufficiale (*Mietvertrag*) o dichiarazione d'alloggio firmata dal locatore con consenso della *Verwaltung*.
4. 2 fototessere recenti formato biometrico.
5. Modulo di annuncio comunale di arrivo (*Wohnsitzanmeldung*).
6. Tassa amministrativa cantonale (CHF 65,00 allo sportello o su fattura postale).

### Checklist B: Lavoratore Qualificato Extra-UE (Domanda Aziendale)
1. Formulario di domanda cantonale del datore (es. Formular AWA a Zurigo, Formulaire M a Ginevra, Formulaire 1350 a Vaud).
2. Contratto di lavoro a tempo indeterminato con retribuzione conforme ai benchmark Salarium/BFS per quadri.
3. Rapporto motivato sull'interesse economico dell'azienda e sull'insostituibilità del candidato.
4. Dossier di prova del test di mercato (*Inländervorrang*): annunci Job-Room/EURES per congruo periodo e resoconto motivato dei candidati indigeni scartati.
5. Curriculum vitae dettagliato e copie autenticate dei titoli di studio universitari (Bachelor, Master o PhD) con traduzione certificata in tedesco, francese o italiano.
6. Copia integrale del passaporto del candidato (tutte le pagine con timbri e visti).
7. Decisione di approvazione cantonale e federale SEM (*Zustimmungsverfügung*).
8. Ricevuta versamento tassa d'ingresso (*Zusicherung* CHF 95,00).

### Checklist C: Studente Universitario Extra-UE (Domanda Visto D)
1. Modulo di domanda di visto nazionale D compilato in triplice copia e firmato.
2. Passaporto in corso di validità (con scadenza superiore di almeno 3 mesi al soggiorno previsto).
3. Certificato formale di ammissione definitiva o immatricolazione dell'università svizzera (ETH, EPFL, università cantonale).
4. Piano degli studi accademico dettagliato (*Studienplan*) e curriculum vitae.
5. Lettera di motivazione personale e dichiarazione d'impegno scritto a **lasciare la Svizzera alla conclusione degli studi** (Art. 23 OASA).
6. **Attestazione bancaria originale comprovante la disponibilità di almeno CHF 21.000 (Zurigo) o CHF 24.000 (Vaud/Ginevra/Basilea/San Gallo)** depositati su conto bancario nominativo intestato allo studente presso istituto autorizzato FINMA con sede in Svizzera.
7. Copia del contratto d'alloggio o conferma prenotazione residenza studentesca.
8. Diplomi di laurea precedenti con traduzione autenticata e legalizzazione/apostille.
9. Tassa consolare visto D (90 EUR/CHF).
