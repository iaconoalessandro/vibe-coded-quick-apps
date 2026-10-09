---
country: "Denmark"
country_it: "Danimarca"
iso_code: "DK"
last_verified: "2026-10-05"
review_by: "2027-03-31"
version: "1.0.0"
citizenships_covered:
  - "UE / SEE / Svizzera (inclusa cittadinanza italiana)"
  - "Extra-UE (incl. UK, USA, Canada, India, Cina, Paesi terzi)"
---

# Guida Ufficiale Visti e Immigrazione: Danimarca

> **Regola di integrità:** Questo documento costituisce l'**UNICA fonte di verità** del progetto Admetia per la Danimarca. Ogni dato numerico, tariffa, soglia di reddito o requisito procedurale reca un riferimento univoco `[ID-fonte]` collegato al registro ufficiale [`denmark_sources.md`](denmark_sources.md). I punti soggetti a divergenza prasseologica o a monitoraggio normativo sono catalogati in [`denmark_open_questions.md`](denmark_open_questions.md).

---

## 1. Architettura Giuridica ed Enti Competenti

Il sistema dell'immigrazione, del soggiorno e dell'integrazione del Regno di Danimarca (*Kongeriget Danmark*) è caratterizzato da una gestione centralizzata e altamente digitalizzata:

- **Autorità Centrali dell'Immigrazione:**
  - **SIRI (*Styrelsen for International Rekruttering og Integration*):** Agenzia del Ministero dell'Immigrazione e dell'Integrazione (*Udlændinge- og Integrationsministeriet*), competente in via esclusiva per visti e permessi per lavoro qualificato, studio universitario, tirocinio, ricerca, dottorati, Working Holiday e titoli di soggiorno per cittadini UE/SEE `[DK-SRC-01]`, `[DK-SRC-02]`, `[DK-SRC-08]`, `[DK-SRC-09]`.
  - **Udlændingestyrelsen (*Danish Immigration Service - DIS*):** Agenzia competente per il ricongiungimento familiare nazionale, asilo, questioni umanitarie e visti d'ingresso Schengen per turismo/visite d'affari `[DK-SRC-19]`, `[DK-SRC-21]`.
- **Rappresentanze Diplomatico-Consolari e Partner Esterni:**
  - **Udenrigsministeriet (Ministero degli Affari Esteri Danese):** Rete di ambasciate e consolati all'estero, supportata dai centri visti esternalizzati VFS Global per l'acquisizione dei dati biometrici e l'apposizione dell'adesivo del visto d'ingresso D (*Indrejsevisum*) `[DK-SRC-29]`.
- **Sportelli Territoriali Unificati e Anagrafe:**
  - **International Citizen Service (ICS):** Sportelli unici fisici operativi a **Copenaghen, Aarhus, Odense e Aalborg**, che raggruppano SIRI, l'amministrazione fiscale (Skat) e il Folkeregister municipale per completare l'intero onboarding amministrativo in un unico appuntamento `[DK-SRC-22]`.
  - **Folkeregister / Borgerservice (Comuni danesi - *Kommuner*):** Registrazione anagrafica della residenza, rilascio del codice identificativo nazionale **CPR-nummer** (*Centrale Personregister*) e della tessera sanitaria **Sundhedskort** `[DK-SRC-23]`, `[DK-SRC-24]`.
- **Infrastruttura Digitale di Stato:**
  - **MitID:** Identità digitale nazionale obbligatoria per qualsiasi interazione con pubblica amministrazione, banche e datori di lavoro `[DK-SRC-25]`.
  - **NemKonto:** Conto corrente bancario primario designato per ricevere stipendi e rimborsi statali `[DK-SRC-26]`.
  - **Skatteforvaltningen (Skat):** Agenzia delle entrate danese per emissione della scheda fiscale (*Skattekort*), trattenuta dell'8% di contributo al mercato del lavoro (*AM-bidrag*) e gestione del regime fiscale speciale per ricercatori ed esperti `[DK-SRC-27]`, `[DK-SRC-28]`.

---

## 2. Matrice Completa dei Casi d'Uso (Dettaglio Operativo UE vs Extra-UE)

---

### Caso 1: Lavoro Dipendente Ordinario (General Employment & Test di Mercato)

#### A. Cittadini UE / SEE / Svizzera
- **Regime giuridico:** Libera circolazione dei lavoratori (art. 45 TFUE). Nessun visto né permesso di lavoro richiesto.
- **Procedura:**
  1. Ingresso senza visto sul territorio danese con passaporto o carta d'identità valida.
  2. Entro 3 mesi dall'arrivo (o entro 6 mesi se in cerca di occupazione), presentazione online della domanda di documento di soggiorno UE (**EU-opholdsdokument**) tramite modulo telematico **OD1** sul portale `nyidanmark.dk` `[DK-SRC-01]`.
  3. Appuntamento fisico presso una sede SIRI o sportello ICS per il controllo del documento di identità e l'esame del contratto di lavoro danese (che deve prevedere un impiego effettivo di almeno 10-12 ore settimanali continuative).
  4. Rilascio immediato del certificato di registrazione (*Registreringsbevis*) a costo **0 DKK** `[DK-SRC-01]`.

#### B. Cittadini Extra-UE (Almindelig beskæftigelse / Test del Mercato del Lavoro)
- **Regime giuridico:** *Udlændingeloven § 9a, stk. 1* (Lavoro ordinario regolato da condizioni generali di mercato) `[DK-SRC-07]`, `[DK-SRC-11]`.
- **Modulo SIRI:** **Modulo AR1** (avviato online dall'azienda su `nyidanmark.dk` e completato dal lavoratore) `[DK-SRC-07]`.
- **Requisiti soggettivi e oggettivi:**
  - **Offerta contrattuale vincolante:** Contratto di lavoro a tempo pieno o determinato con datore di lavoro registrato in Danimarca (CVR).
  - **Test del mercato del lavoro (*Arbejdsmarkedstest*):** Il datore di lavoro deve comprovare che la posizione è stata pubblicata su *Jobnet* e sul portale europeo *EURES* per almeno **2 settimane** consecutive senza che sia stato possibile reperire manodopera danese o comunitaria idonea `[DK-SRC-07]`.
  - **Parere del Consiglio Regionale per l'Occupazione (*Det Regionale Arbejdsmarkedsråd - RAR*):** SIRI consulta il RAR per confermare che le qualifiche richieste non siano reperibili localmente.
  - **Condizioni salariali e di lavoro danesi (*Danske løn- og ansættelsesvilkår*):** La retribuzione, l'orario e le ferie devono conformarsi rigorosamente ai contratti collettivi nazionali danesi di settore (*overenskomst*).
- **Documenti necessari (Checklist pre-arrivo):**
  - Copia integrale del passaporto in corso di validità (tutte le pagine, copertine incluse).
  - Contratto di lavoro firmato da entrambe le parti contenente: orario settimanale, mansioni, stipendio lordo, ratei ferie e contributi previdenziali.
  - Prova di pubblicazione dell'annuncio su Jobnet ed EURES per almeno 14 giorni.
  - Documentazione delle qualifiche professionali e formative del lavoratore (curriculum vitae, attestati di servizio, diplomi).
  - Ricevuta di pagamento della tassa SIRI `[DK-SRC-18]`.
- **Procedura passo-passo:**
  1. *Fase 1 (Pre-arrivo - Datore):* Il datore di lavoro crea il *Case Order ID* su `nyidanmark.dk` e compila la Parte 1 del Modulo AR1 online, allegando il contratto e la prova del test di mercato.
  2. *Fase 2 (Pre-arrivo - Candidato):* Il lavoratore riceve il link di condivisione, compila la Parte 2 del Modulo AR1, carica i documenti personali e paga la tassa.
  3. *Fase 3 (Biometria all'estero):* Entro 14 giorni dall'invio della domanda, il lavoratore si presenta presso il consolato danese o centro VFS Global per il rilascio di impronte digitali e fotografia `[DK-SRC-29]`.
  4. *Fase 4 (Istruttoria e Decisione):* SIRI esamina il dossier e trasmette la decisione (*Afgørelse*). Se il lavoratore necessita di visto d'ingresso, il consolato appone l'adesivo D sul passaporto.
  5. *Fase 5 (Arrivo):* Ingresso in Danimarca e completamento dell'onboarding presso l'ICS (vedi Sezione 3).
- **Costi obbligatori 2026:**
  - Tassa amministrativa SIRI (*Case processing fee*): **6.810 DKK** `[DK-SRC-18]`.
  - Commissione consolare / VFS Global per acquisizione biometria: circa **200 - 350 DKK** (variabile per valuta locale) `[DK-SRC-29]`.
- **Tempi di lavorazione:**
  - Termine ordinario di legge: **3 mesi (90 giorni)** `[DK-SRC-07]`. Tempi reali de facto: 2,5 - 4 mesi.
- **Rinnovo e Conversione:**
  - Rinnovabile presentando il Modulo AR1 online prima della scadenza, a condizione che l'impiego sussista e rispetti i contratti collettivi.
  - Se il lavoratore perde il lavoro, ha a disposizione fino a 6 mesi per trovare un nuovo impiego, ma deve notificare tempestivamente SIRI e richiedere un nuovo permesso prima di assumere nuove mansioni.

---

### Caso 2: Lavoro Altamente Qualificato / Skilled (Pay Limit, Supplementary Pay Limit, Fast Track, Positive Lists)

#### A. Cittadini UE / SEE / Svizzera
- Accesso libero incondizionato con registrazione **OD1** e rilascio dell'*EU-opholdsdokument* a costo zero `[DK-SRC-01]`.

#### B. Cittadini Extra-UE: Canali Speciali SIRI

Il modello danese offre 5 distinte corsie preferenziali per profili qualificati, esenti dal test del mercato del lavoro RAR:

```
                                ┌────────────────────────────────────────────────────────┐
                                │   Offerta di Lavoro Qualificato in Danimarca (CVR)     │
                                └──────────────────────────┬─────────────────────────────┘
                                                           │
               ┌───────────────────────────┬───────────────┴───────────────┬───────────────────────────┐
               ▼                           ▼                               ▼                           ▼
    ┌─────────────────────┐     ┌─────────────────────┐         ┌─────────────────────┐     ┌─────────────────────┐
    │  Pay Limit Scheme   │     │ Supplerende Beløb   │         │  Fast-Track Scheme  │     │   Positive Lists    │
    │  (Beløbsordningen)  │     │ (Supplementary Pay) │         │ (Azienda Certificata│     │ (Higher Ed / Skilled│
    ├─────────────────────┤     ├─────────────────────┤         ├─────────────────────┤     ├─────────────────────┤
    │ Stipendio ≥ 552.000 │     │ Stipendio ≥ 446.000 │         │ Kvikstart immediato │     │ Titolo in lista di  │
    │ DKK/anno lordi.     │     │ DKK/anno lordi.     │         │ 5 track operativi:  │     │ carenza semestrale. │
    │ Nessun vincolo di   │     │ Annuncio Jobnet 14g │         │ Pay Limit, Ricerca, │     │ Salario conforme a  │
    │ titolo o settore.   │     │ Vincolo disoccupaz. │         │ Short-term, Educat. │     │ standard di settore │
    └──────────┬──────────┘     └──────────┬──────────┘         └──────────┬──────────┘     └──────────┬──────────┘
               │                           │                               │                           │
               └───────────────────────────┼───────────────────────────────┴───────────────────────────┘
                                           ▼
                      ┌─────────────────────────────────────────┐
                      │    Modulo Online AR1 / AR6 su SIRI      │
                      │    Tassa istruttoria: 6.810 DKK (2026)  │
                      └─────────────────────────────────────────┘
```

##### 1. Pay Limit Scheme (*Beløbsordningen*)
- **Base giuridica:** *Udlændingeloven § 9a, stk. 2, nr. 1* `[DK-SRC-02]`, `[DK-SRC-11]`.
- **Modulo:** **AR1** online su `nyidanmark.dk`.
- **Soglia salariale minima 2026:** Almeno **552.000 DKK lordi all'anno** (circa 46.000 DKK/mese) `[DK-SRC-02]`.
- **Requisiti retributivi tassativi:**
  - Si computano solo: stipendio tabellare liquido, indennità fisse contrattualmente garantite, quota ferie retribuite e contributi pensionistici a carico datore/lavoratore.
  - **Esclusi rigorosamente:** fringe benefits incerti (alloggio gratuito, auto aziendale, rimborsi spese, quote variabili o bonus legati a risultati futuri non garantiti).
  - Il pagamento dello stipendio deve avvenire **tassativamente su un conto bancario danese (NemKonto)** intestato al lavoratore.
- **Nessun vincolo:** Non sono richiesti requisiti specifici di titolo di studio o appartenenza a specifici ordini professionali.

##### 2. Supplementary Pay Limit Scheme (*Supplerende Beløbsordning*)
- **Base giuridica:** *Udlændingeloven § 9a, stk. 2, nr. 2* `[DK-SRC-03]`, `[DK-SRC-11]`.
- **Modulo:** **AR1** online su `nyidanmark.dk`.
- **Soglia salariale minima 2026:** Almeno **446.000 DKK lordi all'anno** `[DK-SRC-03]`.
- **Condizioni aggiuntive inderogabili:**
  - La posizione deve essere stata pubblicata su *Jobnet* e sul portale *EURES* per almeno **2 settimane** prima della presentazione della domanda `[DK-SRC-03]`.
  - Clausola macroeconomica di salvaguardia: l'accesso allo schema è subordinato al mancato superamento del tasso di disoccupazione lorda nazionale trimestrale fissato per legge `[DK-SRC-03]`.
  - Accredito esclusivo su conto bancario danese.

##### 3. Fast Track Scheme (*Fast track-ordningen*)
- **Base giuridica:** *Udlændingeloven § 9a, stk. 2, nr. 7* `[DK-SRC-04]`, `[DK-SRC-11]`.
- **Modulo:** **AR6** online (compilato dall'azienda certificata).
- **Prerequisito aziendale:** Il datore di lavoro deve essere **certificato da SIRI** (condizioni di solvibilità finanziaria, assenza di violazioni del diritto del lavoro, minimo 20 dipendenti a tempo pieno in Danimarca) `[DK-SRC-04]`.
- **Le 5 opzioni operative (Track):**
  1. *Pay Limit Track:* Salario annuo $\ge$ 552.000 DKK.
  2. *Supplementary Pay Limit Track:* Salario annuo $\ge$ 446.000 DKK.
  3. *Researcher Track:* Ricercatori di livello universitario o R&D aziendale.
  4. *Educational Track:* Dipendenti che svolgono alta formazione o tirocini interni qualificati.
  5. *Short-term Track:* Soggiorni di lavoro brevi fino a un massimo complessivo di 90 giorni in un periodo di 365 giorni.
- **Vantaggio procedurale "Kvikstart" (Inizio immediato):**
  - Il lavoratore può iniziare l'attività lavorativa in azienda **immediatamente** dopo l'invio telematico del modulo AR6 e la registrazione dei dati biometrici presso SIRI o l'ambasciata, **senza dover attendere la decisione scritta finale** `[DK-SRC-04]`.

##### 4. Positive List for People with a Higher Education (*Positivlisten videregående*)
- **Base giuridica:** *Udlændingeloven § 9a, stk. 2, nr. 3* `[DK-SRC-05]`, `[DK-SRC-11]`.
- **Modulo:** **AR1** online.
- **Requisiti:** Il candidato deve essere in possesso di titolo di studio universitario (almeno Laurea Triennale / Bachelor, Livello EQF 6+) e aver ricevuto un'offerta contrattuale per una professione inclusa nella lista ufficiale delle professioni carenti di manodopera altamente qualificata (es. ingegneri del software, data analyst, medici, revisori legali, chimici farmaceutici) `[DK-SRC-05]`.
- La lista viene aggiornata due volte all'anno (1° gennaio e 1° luglio; con revisione tecnica al 1° ottobre) `[DK-SRC-05]`.
- Stipendio conforme agli accordi collettivi di categoria.

##### 5. Positive List for Skilled Work (*Positivlisten faglært*)
- **Base giuridica:** *Udlændingeloven § 9a, stk. 2, nr. 4* `[DK-SRC-06]`, `[DK-SRC-11]`.
- **Modulo:** **AR1** online.
- **Requisiti:** Possesso di diploma di qualifica professionale tecnica riconosciuta e offerta contrattuale in mansione compresa nella lista di carenza per figure tecniche specializzate `[DK-SRC-06]`.

- **Costi obbligatori 2026 (per tutti i canali qualificati):**
  - Tassa di trattazione SIRI: **6.810 DKK** `[DK-SRC-18]`.
- **Tempi di decisione:**
  - Fast-track: **10 - 14 giorni lavorativi** `[DK-SRC-04]`.
  - Pay Limit e Positive List: **30 giorni** standard (max 60 giorni).

---

### Caso 3: Internship / Tirocinio (Praktikant under SIRI)

#### A. Tirocinio svolto da Studenti regolarmente iscritti in Danimarca
- **Regime giuridico:** Se lo studente extra-UE risiede già in Danimarca con permesso di studio ST1, il tirocinio curriculare che costituisce parte integrante del piano di studi universitario approvato **non richiede il permesso da tirocinante PR1**; è disciplinato dal modulo integrativo **ST4** (a costo zero o ridotto) o coperto dal diritto di studio ordinario `[DK-SRC-08]`, `[DK-SRC-09]`.

#### B. Candidati dall'Estero (Praktikantordningen)
- **Base giuridica:** *Udlændingeloven § 9k* `[DK-SRC-08]`, `[DK-SRC-11]`.
- **Modulo SIRI:** **Modulo PR1** online (obbligatorio in via digitale dal 1° giugno 2023) `[DK-SRC-08]`.
- **Requisiti soggettivi del tirocinante:**
  - **Età:** Compresa tassativamente tra **18 e 35 anni** al momento della domanda `[DK-SRC-08]`.
  - **Connessione didattica obbligatoria:** Il tirocinio deve essere formalmente parte integrante di un corso di studi universitari terziari in corso di svolgimento all'estero, oppure svolto entro e non oltre 12 mesi dal conseguimento del titolo di studio terziario estero `[DK-SRC-08]`.
  - **Competenze linguistiche:** Conoscenza accertata di danese, svedese, norvegese, inglese o tedesco a livello professionale.
- **Requisiti oggettivi dell'ente ospitante e condizioni retributive:**
  - **Convenzione di tirocinio (*Praktikaftale*):** Sottoscritta tra studente, azienda ospitante danese e ateneo estero d'origine, con indicazione esplicita degli obiettivi formativi e delle mansioni assegnate.
  - **Retribuzione e indennità:** In Danimarca non esiste un salario minimo legale universale, ma vige l'obbligo che la retribuzione corrisponda a quella prevista dai contratti collettivi nazionali per tirocinanti nel settore di riferimento `[DK-SRC-08]`. Se il tirocinio è non retribuito (ammesso solo per tirocini accademici curriculari), il tirocinante deve documentare la disponibilità di fondi propri di sussistenza pari ad almeno **7.426 DKK/mese** per l'intera durata `[DK-SRC-08]`.
  - **Assicurazione Infortuni Obbligatoria:** Il datore di lavoro deve formalmente stipulare e dimostrare la copertura dell'assicurazione obbligatoria contro gli infortuni sul lavoro (*lovpligtig arbejdsskadeforsikring*) `[DK-SRC-08]`.
- **Durata massima del titolo:**
  - Settore istruzione superiore terziaria: fino a un massimo continuativo di **18 mesi** `[DK-SRC-08]`.
- **Costi obbligatori 2026:**
  - Tassa SIRI per tirocinanti (*Intern fee*): **4.305 DKK** `[DK-SRC-18]`.
- **Limiti tassativi:** Il permesso da tirocinante autorizza l'attività esclusivamente presso l'ente indicato e non consente attività lavorativa secondaria né part-time esterno.

---

### Caso 4: Studio Universitario (Bachelor e Master Universitari)

#### A. Cittadini UE / SEE / Svizzera
- **Costi accademici:** Frequenza universitaria interamente **gratuita** (esente da *tuition fees* per decisione del parlamento danese).
- **Ammissione:** Domanda tramite *Den Koordinerede Tilmelding (KOT)* per Bachelor entro il 15 marzo; portali digitali diretti degli atenei (es. DANS) per i Master.
- **Soggiorno:** Domanda online **OD1** per *EU-opholdsdokument* (studio). Diritti di lavoro illimitati (con possibilità di richiedere l'assegno statale di studio danese **SU - Statens Uddannelsesstøtte** lavorando almeno 10-12 ore settimanali continuative). Costo pratica: **0 DKK** `[DK-SRC-01]`.

#### B. Cittadini Extra-UE (Higher Education Permit)
- **Base giuridica:** *Udlændingeloven § 9c, stk. 1* `[DK-SRC-09]`, `[DK-SRC-11]`.
- **Modulo SIRI:** **Modulo ST1** online (la Parte 1 viene creata e validata dall'università danese, la Parte 2 viene finalizzata dallo studente) `[DK-SRC-09]`.
- **Requisiti soggettivi e oggettivi:**
  - **Ammissione formale:** Lettera di ammissione incondizionata a un programma accreditato a tempo pieno presso un istituto danese di istruzione superiore (es. CBS, KU, DTU, AU, AAU, SDU).
  - **Pagamento delle tasse universitarie (*Tuition Fees*):** Ricevuta del saldo o della prima rata delle tasse accademiche (generalmente comprese tra 45.000 e 120.000 DKK/anno a seconda della facoltà).
  - **Mezzi di sussistenza (*Proof of Funds*):**
    - Se le rette non coprono il vitto/alloggio, lo studente deve dimostrare sul proprio conto bancario personale la somma parametrata all'assegno SU: **7.426 DKK/mese** per 12 mesi, pari a **89.112 DKK/anno** (circa 11.923 €) `[DK-SRC-09]`.
    - L'estratto conto deve essere rilasciato da una banca a nome esclusivo dello studente e risalire a non oltre 30 giorni prima della domanda. Non sono ammesse fideiussioni di terzi, salvo borse istituzionali.
- **Diritti di lavoro durante lo studio:**
  - **Regime standard (Settembre - Maggio):** Diritto di lavorare part-time fino a **90 ore al mese** `[DK-SRC-09]`. *(Nota: la norma è stata riformata portando il vecchio limite di 20 ore settimanali a un massimale mensile flessibile di 90 ore per agevolare turni concentrati e collaborazioni universitarie).*
  - **Regime estivo (Giugno, Luglio, Agosto):** Diritto di lavorare a **tempo pieno illimitato (*fuldtid*)** `[DK-SRC-09]`.
  - **Divieti inderogabili:** È vietato esercitare attività di lavoro autonomo o aprire ditta individuale con partita IVA danese (*CVR*). Lavorare anche solo 1 ora oltre le 90 ore mensili costituisce reato penale (*ulovligt arbejde*) e comporta l'immediata revoca del permesso ed espulsione amministrativa con divieto d'ingresso Schengen `[DK-SRC-09]`, `[DK-SRC-11]`.
- **Costi obbligatori 2026:**
  - Tassa di trattazione SIRI: **3.060 DKK** `[DK-SRC-18]`.
- **Copertura Sanitaria:** Non appena iscritto al Folkeregister con rilascio del CPR number, lo studente acquisisce la **Sundhedskort** e l'accesso gratuito al sistema sanitario nazionale primario e ospedaliero `[DK-SRC-24]`.

---

### Caso 5: Tesi e Ricerca all'Estero (Visiting Student e Guest Researcher)

#### A. Visiting Student (Preparazione Tesi all'Estero)
- **Cittadini UE:** Ingresso libero, soggiorno coperto da accordo inter-universitario o programma di scambio, registrazione **OD1** oltre i 3 mesi `[DK-SRC-01]`.
- **Cittadini Extra-UE:**
  - **Modulo SIRI:** **Modulo ST1** (opzione *Guest student / Exchange student*) `[DK-SRC-09]`.
  - **Requisiti:** Accordo formale tra l'università d'origine e l'ateneo danese che attesti il riconoscimento dei crediti (ECTS) o la supervisione congiunta della tesi magistrale.
  - **Mezzi di sussistenza:** Prova di possesso di 7.426 DKK/mese tramite borsa di studio dell'ateneo d'origine o fondi propri `[DK-SRC-09]`.
  - Tassa SIRI: **3.060 DKK** `[DK-SRC-18]`.

#### B. Guest Researcher / PhD Guest (*Gæsteforsker*)
- **Base giuridica:** *Udlændingeloven § 9a, stk. 13* `[DK-SRC-11]`, `[DK-SRC-15]`.
- **Modulo SIRI:** **Modulo AR1** online (canale *Guest researcher*) `[DK-SRC-15]`.
- **Definizione dello status:** Ricercatore scientifico o dottorando in visita invitato da un'università o ente di ricerca pubblico/privato danese accreditato per condurre attività di ricerca senza essere assunto alle dipendenze contrattuali dirette dell'ente ospitante (es. stipendio erogato dall'ente estero, borsa post-doc estera, o soggiorno autofinanziato) `[DK-SRC-15]`.
- **Requisiti documentali:**
  - Lettera di invito/convenzione dell'istituto di ricerca danese che specifichi le strutture messe a disposizione, il progetto di ricerca e l'assenza di retribuzione a carico dell'ateneo danese.
  - Possesso di titolo accademico terziario (Laurea Magistrale o Ph.d.).
  - **Requisito economico di autosostentamento 2026:**
    - Per il solo ricercatore: almeno **7.426 DKK/mese** `[DK-SRC-15]`.
    - Con coniuge/partner al seguito: almeno **12.770 DKK/mese** complessivi.
    - Con coniuge e figli: almeno **16.972 DKK/mese** complessivi.
- **Costi obbligatori 2026:**
  - Tassa di trattazione SIRI: **6.810 DKK** `[DK-SRC-18]`.
- **Esenzioni di breve soggiorno (≤ 90 giorni):** I ricercatori scientifici o docenti ospiti invitati per conferenze o periodi di ricerca non retribuita inferiori a 90 giorni sono esenti dal richiedere il permesso di soggiorno/lavoro, purché in possesso di visto C o regime visa-free `[DK-SRC-15]`.

---

### Caso 6: Erasmus+ e Mobilità Intra-UE (Focus Opt-Out Danese)

```
                            ┌────────────────────────────────────────────────────────┐
                            │    Studente Extra-UE Iscritto in Ateneo UE (es. IT)    │
                            │      Titolare di Permesso di Soggiorno UE per Studio   │
                            └──────────────────────────┬─────────────────────────────┘
                                                       │
                                   Mobilità Erasmus+ verso la Danimarca
                                                       │
                                                       ▼
                            ┌────────────────────────────────────────────────────────┐
                            │           CLAUSOLA COSTITUZIONALE EUROPEA:             │
                            │      Protocollo n. 22 sui Trattati UE (TUE / TFUE)     │
                            │   LA DANIMARCA NON PARTECIPA ALLA DIR. (UE) 2016/801!   │
                            └──────────────────────────┬─────────────────────────────┘
                                                       │
                               ┌───────────────────────┴───────────────────────┐
                               ▼                                               ▼
                ┌─────────────────────────────┐                 ┌─────────────────────────────┐
                │   ERRORE GRAVE / TRAPPOLA   │                 │      PROCEDURA CORRETTA     │
                │ Notifica di mobilità intra- │                 │ Domanda di Permesso Danese  │
                │ UE senza visto: NULLA.      │                 │ ST1 ex novo tramite SIRI.   │
                │ Negato imbarco o respingim. │                 │ Pagamento tassa 3.060 DKK e │
                │ alla frontiera per ingresso │                 │ rilascio biometria estera.  │
                │ irregolare.                 │                 │                             │
                └─────────────────────────────┘                 └─────────────────────────────┘
```

#### A. Cittadini UE (es. Studenti Italiani Erasmus+)
- **Regime:** Libera circolazione.
- **Copertura Sanitaria:** Uso della **Tessera Sanitaria Europea (TEAM / EHIC)** per l'assistenza medica urgente e necessaria.
- **Pratiche:** Se il soggiorno di mobilità supera i 3 mesi, rilascio gratuito dell'*EU-opholdsdokument* (**Modulo OD1**) presso l'ICS per ottenere CPR-nummer e tessera sanitaria locale `[DK-SRC-01]`, `[DK-SRC-22]`. Costo: **0 DKK**.

#### B. Studenti Extra-UE iscritti in altro Stato Membro dell'Unione Europea
- **ATTENZIONE NORMATIVA CARDINE (L'OPT-OUT DANESE SULLA GIUSTIZIA E AFFARI INTERNI):**
  - Ai sensi del **Protocollo n. 22 sulla posizione della Danimarca** allegato al Trattato sull'Unione Europea (TUE) e al Trattato sul Funzionamento dell'Unione Europea (TFUE), il Regno di Danimarca gode di un **opt-out totale** dall'acquis comunitario in materia di visti, asilo e immigrazione regolare `[DK-SRC-12]`.
  - **Conseguenza Giuridica:** La Danimarca **NON recepisce né applica la Direttiva (UE) 2016/801** (relativa alle condizioni di ingresso e soggiorno dei cittadini di paesi terzi per motivi di ricerca, studio, tirocinio o volontariato) `[DK-SRC-12]`.
  - Pertanto, le procedure di **mobilità intra-UE** previste dagli articoli 27-32 della Direttiva (UE) 2016/801 (che consentono a uno studente con permesso di studio in Italia, Spagna o Germania di spostarsi in un altro Paese UE con una semplice notifica amministrativa della scuola) **NON HANNO ALCUN VALORE GIURIDICO VERSO LA DANIMARCA** `[DK-SRC-12]`.
- **Procedura obbligatoria:**
  - Lo studente extra-UE deve avviare da zero una richiesta di permesso di soggiorno per studio in Danimarca (**Modulo ST1**) attraverso la piattaforma `nyidanmark.dk` `[DK-SRC-09]`.
  - Deve pagare per intero la tassa SIRI di **3.060 DKK** `[DK-SRC-18]`.
  - Deve registrare i dati biometrici presso un consolato o centro vfs autorizzato prima dell'arrivo e dimostrare la disponibilità economica mensile (7.426 DKK/mese).
  - **Rischio di respingimento:** Il tentativo di accedere in Danimarca con il solo permesso di soggiorno per studio rilasciato da un altro Paese Schengen oltre i 90 giorni comporta il diniego all'imbarco o l'accertamento di permanenza illegale con decreto di espulsione `[DK-SRC-11]`, `[DK-SRC-12]`.

---

### Caso 7: Master di II Livello e Dottorato di Ricerca (Ph.d.)

#### A. Master Universitari di II Livello
- Nel sistema accademico danese, i percorsi magistrali sono articolati in diplomi accademici biennali da 120 ECTS (*kandidatuddannelse*: es. Cand.merc., Cand.scient., Cand.mag.) e nuovi percorsi mirati da 75-120 ECTS. Sono inquadrati integralmente sotto la disciplina dello studio terziario (Modulo ST1, tassa 3.060 DKK, lavoro part-time 90 ore/mese) `[DK-SRC-09]`.

#### B. Dottorato di Ricerca (*Ph.d.-uddannelse*)

In Danimarca, il dottorato di ricerca non è considerato una semplice borsa di studio studentesca, ma costituisce un **rapporto di lavoro dipendente qualificato** ad alta retribuzione e protezione sociale:

- **Doppio Inquadramento Formale:**
  - **Dottorando Salariato (*Ansat Ph.d.-stipendiat*):** Il dottorando è assunto con regolare contratto di lavoro subordinato dall'università o da un centro di ricerca pubblico/privato danese, disciplinato dal contratto collettivo nazionale per il personale accademico (*Overenskomst for Akademikere i staten - AC*) stipulato con il Ministero delle Finanze `[DK-SRC-13]`, `[DK-SRC-14]`.
  - **Dottorando Autofinanziato (*Ikke-ansat Ph.d.*):** Ipotesi eccezionale in cui il dottorando è ammesso al corso di dottorato con borsa di studio estera o fondi personali.
- **Trattamento Economico e Previdenziale del Ph.d. Salariato (Contratto AC):**
  - **Stipendio lordo mensile:** Compreso mediamente tra **32.500 DKK e 36.500 DKK al mese** (indicizzato per anzianità di servizio e scatti contrattuali) `[DK-SRC-14]`.
  - **Contributo Pensionistico Obbligatorio a carico Datore:** **17,1% dello stipendio base lordo**, versato mensilmente nei fondi pensione di categoria degli accademici danesi (**PFA Pension** o **AkademikerPension**) `[DK-SRC-14]`.
  - **Tutele sindacali ed extra:** Diritto a 5 settimane di ferie retribuite più giorni festivi speciali (*feriefridage*), indennità di ferie (*feriepenge*), congedo parentale e di maternità indennizzato (*barselsorlov*), iscrizione alle casse di disoccupazione per accademici (*Akademikernes A-kasse*) `[DK-SRC-14]`.
  - **Regime Fiscale:** Trattamento ordinario come reddito da lavoro dipendente (*A-indkomst* con ritenuta dell'8% AM-bidrag e imposta progressiva) `[DK-SRC-27]`.
- **Modulo e Procedura SIRI:**
  - **Modulo PHD1** online (obbligatorio su `nyidanmark.dk`) `[DK-SRC-13]`.
  - L'università compila la Parte 1 attestando l'ammissione e il contratto di impiego stipendiato; il dottorando finalizza la Parte 2 e allega il passaporto e la ricevuta di pagamento.
- **Costi obbligatori 2026:**
  - Tassa SIRI per dottorandi: **3.060 DKK** `[DK-SRC-18]`.
- **Diritti di ricerca lavoro post-dottorato:**
  - Tutti i dottorandi che conseguono il titolo di Ph.d. in Danimarca godono del diritto prioritario a un **permesso di soggiorno per ricerca lavoro di 3 anni** post-dottorato, escluso dal taglio restrittivo della riforma dell'ottobre 2026 `[DK-SRC-10]`.

---

### Caso 8: Working Holiday (Accordi Bilaterali di Vacanza-Lavoro)

- **Paesi firmatari degli accordi bilaterali con la Danimarca:**
  - **Australia, Canada, Nuova Zelanda, Giappone, Corea del Sud, Cile, Argentina** `[DK-SRC-16]`.
- **Base giuridica:** *Udlændingeloven § 9h* `[DK-SRC-11]`, `[DK-SRC-16]`.
- **Modulo SIRI:** **Modulo WH1** online `[DK-SRC-16]`.
- **Requisiti anagrafici e soggettivi:**
  - **Età:** Compresa tra **18 e 30 anni compiuti** al momento della domanda (non aver compiuto 31 anni) per la maggior parte dei Paesi `[DK-SRC-16]`.
  - **Eccezioni anagrafiche speciali:**
    - Per cittadini di **Australia** e **Canada**: limite esteso a **35 anni compiuti** (non aver compiuto 36 anni) `[DK-SRC-16]`.
    - Per la Corea del Sud: limite fino a 34 anni in base all'accordo bilaterale.
  - Non è ammesso viaggiare con familiari o figli a carico sotto questo schema.
  - Obbligo di stipula di una polizza assicurativa medica e di rimpatrio per l'intera durata del soggiorno.
- **Mezzi di sussistenza minimi richiesti:**
  - Prova di disponibilità finanziaria per i primi mesi (generalmente tra **15.000 DKK e 25.000 DKK** documentati tramite estratto conto) e possesso del biglietto aereo di andata e ritorno (o fondi supplementari per acquistarlo) `[DK-SRC-16]`.
- **Limiti lavorativi e di studio tassativi:**
  - **Durata del titolo:** Validità massima di **12 mesi** non prorogabile.
  - **Mesi di lavoro complessivi:** È consentito lavorare per un massimo di **6 mesi** nel corso dei 12 mesi totali di validità (esteso fino a 9 mesi per i cittadini canadesi) `[DK-SRC-16]`.
  - **Mesi con lo stesso datore:** Divieto di lavorare per più di **3 mesi** consecutivi con lo stesso datore di lavoro `[DK-SRC-16]`.
  - **Studi consentiti:** Partecipazione a corsi di lingua o perfezionamento per non oltre 3 - 6 mesi.
  - **Inconvertibilità:** Il titolo non può essere convertito direttamente in un permesso ordinario di lungo soggiorno senza lasciare il territorio, salvo rarissimi casi di offerte eccezionali che soddisfino il Pay Limit Scheme `[DK-SRC-16]`.
- **Costi obbligatori 2026:**
  - Tassa SIRI per Working Holiday: **3.060 DKK** `[DK-SRC-18]`.

---

### Caso 9: Post-Study Work (Abolizione Etableringskort vs Ricerca Lavoro Riforma 01/10/2026)

#### A. Il quadro storico: L'Abolizione dell'Establishment Card (*Etableringskort*)
- **Chiarimento normativo:** Lo schema *Etableringskort* (precedente modulo ET1) è stato **formalmente soppresso il 1° aprile 2023** `[DK-SRC-17]`. Tutti i riferimenti che propongono ancora l'Establishment Card come opzione operativa per neolaureati sono obsoleti e privi di base giuridica.

#### B. Il Regime Attuale: Permesso di Soggiorno per Ricerca Lavoro Post-Studio (*Jobsøgningsophold*)
- **Base giuridica:** *Udlændingeloven § 9a, stk. 15 / § 9c* `[DK-SRC-10]`, `[DK-SRC-11]`.
- **Aventi diritto:** Studenti internazionali che completano con successo un corso di istruzione superiore terziaria in Danimarca (Professional Bachelor, Bachelor, Master universitario, o Ph.d.) presso un ateneo pubblico o accreditato dallo Stato `[DK-SRC-10]`.
- **La Riforma Cruciale del 1° Ottobre 2026:**
  - **Regime Transitorio 1 (Domande di studio depositate prima del 1° ottobre 2026):**
    - Il laureato ottiene automaticamente un periodo per ricerca di lavoro di **3 anni** (36 mesi) a partire dalla data di proclamazione della laurea `[DK-SRC-10]`.
  - **Regime Riformato 2 (Domande di studio depositate a partire dal 1° ottobre 2026):**
    - La durata del permesso di ricerca lavoro post-laurea concesso automaticamente è ridotta drasticamente a **1 anno** (12 mesi) `[DK-SRC-10]`.
  - **Eccezione Dottorandi:** I possessori di titolo di Ph.d. conseguito in Danimarca continuano a godere del diritto a **3 anni** di ricerca lavoro, indipendentemente dalla data di domanda iniziale `[DK-SRC-10]`.
- **Diritti di Lavoro durante la Ricerca Lavoro:**
  - Durante il periodo di ricerca lavoro concesso con il titolo di studio, il laureato mantiene i diritti studenteschi: **90 ore al mese** di lavoro consentite (e full-time in estate) `[DK-SRC-10]`.
  - Se il laureato trova un impiego a tempo pieno durante la ricerca, può richiedere un permesso di lavoro separato durante il periodo di ricerca (tassa SIRI ridotta di **840 DKK**) oppure procedere alla conversione formale verso uno schema di lavoro qualificato `[DK-SRC-10]`, `[DK-SRC-18]`.
- **Conversione a Lavoro (*Job Change Rule*):**
  - Il laureato che riceve un'offerta di lavoro conforme al *Pay Limit Scheme* (552.000 DKK) o *Supplementary Pay Limit* (446.000 DKK) può presentare il modulo AR1 online e, in virtù della norma sul cambio lavoro (*jobskiftereglen*), **può iniziare immediatamente a lavorare dal giorno del deposito dell'istanza**, senza attendere la risposta definitiva di SIRI `[DK-SRC-02]`, `[DK-SRC-03]`.
- **Costi 2026:**
  - Istanza di estensione per ricerca lavoro: **3.060 DKK** `[DK-SRC-18]`.
  - Permesso di lavoro complementare durante la ricerca: **840 DKK** `[DK-SRC-18]`.

---

### Caso 10: Ricongiungimento Familiare e Soggiorni Brevi (≤90 gg)

#### A. Soggiorni Brevi (≤ 90 giorni) — Turismo, Affari, Visite Accademiche
- **Nazionalità Visa-Exempt (es. UK, USA, Canada, Australia, Giappone):** Ingresso senza visto per massimo 90 giorni su un periodo mobile di 180 giorni nell'Area Schengen.
- **Nazionalità Visa-Required (es. India, Cina, Paesi terzi non esenti):** Obbligo di **Visto C Schengen** per turismo, conferenze scientifiche o visite d'affari `[DK-SRC-19]`.
- **Divieto Assoluto di Lavoro Ordinario:** Non è consentito alcun tipo di lavoro subordinato ordinario o retribuito in Danimarca durante il visto C. Le uniche attività permesse sono strettamente negoziali o didattico-accademiche brevi (interventi come guest lecturer, riunioni del consiglio d'amministrazione) senza compenso corrisposto da fonte danese.
- **Proroga del Visto Breve:** Possibile solo in casi eccezionali e documentati di forza maggiore o motivi umanitari gravi tramite il **Modulo VF1** presentato alla Polizia o a Udlændingestyrelsen `[DK-SRC-19]`.

#### B. Ricongiungimento Familiare UE (Direttiva 2004/38/CE)
- **Base giuridica:** Regolamento UE sul diritto di soggiorno (*EU-opholdsbekendtgørelsen*) e art. 21 TFUE `[DK-SRC-20]`.
- **Autorità Competente:** **SIRI**.
- **Modulo:** **Modulo OD2** (online) o modulo cartaceo **FA1-EU** `[DK-SRC-20]`.
- **Familiari ammessi:** Coniuge, partner unito civilmente, partner convivente di fatto documentato (convivenza continuativa di almeno 18-24 mesi), figli di età inferiore a 21 anni o a carico, ascendenti diretti a carico del cittadino UE `[DK-SRC-20]`.
- **Requisiti dello sponsor:** Il cittadino UE deve essere titolare di valido titolo di soggiorno (*EU-opholdsdokument*) per lavoro, studio o autosufficienza economica `[DK-SRC-01]`, `[DK-SRC-20]`.
- **Esenzioni integrali di favore europeo:**
  - **NON si applica la regola dei 24 anni.**
  - **NON si applicano i test di lingua danese.**
  - **NON si richiede la garanzia bancaria né il test di integrazione.**
- **Titolo rilasciato e Costi:**
  - Carta di soggiorno plastificata di familiare UE (*EU-opholdskort*), valida 5 anni.
  - Tassa: **0 DKK** (gratuito per espressa previsione del diritto dell'Unione) `[DK-SRC-18]`, `[DK-SRC-20]`.

#### C. Ricongiungimento Familiare Nazionale ex § 9 Udlændingeloven
- **Base giuridica:** *Udlændingeloven § 9* `[DK-SRC-11]`, `[DK-SRC-21]`.
- **Autorità Competente:** **Udlændingestyrelsen (Danish Immigration Service - DIS)** `[DK-SRC-21]`.
- **Ambito:** Si applica ai coniugi e partner di cittadini danesi o di cittadini extra-UE regolarmente residenti che non ricadono sotto il regime agevolato del personale altamente qualificato SIRI.
- **Condizioni draconiane e cumulative:**
  1. **La Regola dei 24 Anni (*24-års-reglen*):** Entrambi i coniugi devono aver compiuto almeno **24 anni** di età alla data della domanda `[DK-SRC-21]`.
  2. **Il Requisito di Integrazione (*Integrationskravet*):** La coppia deve soddisfare cumulativamente almeno **4 criteri su 6** in materia di livello di istruzione, occupazione pregressa e conoscenza linguistica (danese o inglese) `[DK-SRC-21]`.
  3. **Garanzia Finanziaria / Deposito Cauzionale Bancario (*Økonomisk sikkerhedsstillelse*):** Il coniuge residente in Danimarca deve costituire una fideiussione bancaria o deposito a garanzia vincolato a favore del comune pari a **61.709,34 DKK** nel 2026 (riducibile progressivamente al superamento di Danskprøve A1 per 12.341,87 DKK, Danskprøve A2 per 6.170,93 DKK ed esame finale per 6.170,93 DKK, con residuo minimo non svincolabile prima di 10 anni pari a 37.025,61 DKK) `[DK-SRC-21]`.
  4. **Idoneità dell'Alloggio (*Boligkravet*):** La coppia deve disporre di un'abitazione indipendente adeguata (almeno 20 m² a persona o non più di 2 persone per vano abitativo) e l'immobile non deve essere situato nei quartieri inclusi nella lista governativa di prevenzione (*forebyggelsesområder*) `[DK-SRC-21]`.
  5. **Divieto di Sussidi Pubblici (*Selvforsørgelseskravet*):** Lo sponsor in Danimarca non deve aver percepito alcuna forma di assistenza sociale pubblica (*kontanthjælp*) nei 3 anni precedenti l'istanza `[DK-SRC-21]`.
  6. **Esami di Lingua Danese (*Danskprøve*):** Il coniuge straniero deve superare il test *Danskprøve A1* entro 6 mesi dall'arrivo e il test *Danskprøve A2* entro 9-12 mesi `[DK-SRC-21]`.
- **Modulo:** **Modulo FA1** online su `nyidanmark.dk`.
- **Costi obbligatori 2026:**
  - Tassa amministrativa DIS: **8.490 DKK** (prima domanda; proroga 5.435 DKK) `[DK-SRC-18]`, `[DK-SRC-21]` *(verificato 06/10/2026 su nyidanmark.dk, Fee – overview of fee rates; il valore precedente di ~10.335 DKK era errato)*.

---

## 3. Guida Operativa all'Onboarding e Obblighi all'Arrivo in Danimarca

Il perfezionamento del soggiorno in Danimarca si articola in una rigorosa sequenza a sportello unico (*International Citizen Service - ICS*) o municipale (*Borgerservice*):

```
 ┌────────────────────────────────────────────────────────────────────────────────┐
 │                      FASE 1: REGISTRAZIONE SIRI                                │
 │  - Cittadini UE: Ritiro EU-opholdsdokument (OD1)                               │
 │  - Extra-UE: Registrazione biometrica per emissione Opholdskort plastificato   │
 └───────────────────────────────────────┬────────────────────────────────────────┘
                                         ▼
 ┌────────────────────────────────────────────────────────────────────────────────┐
 │                  FASE 2: FOLKEREGISTER (CIVIL REGISTRATION)                    │
 │  - Registrazione residenza fisica locale con contratto di locazione            │
 │  - Assegnazione del CPR-NUMMER (10 cifre: DDMMYY-XXXX)                         │
 │  - Emissione automatica della SUNDHEDSKORT (Yellow Card) con scelta del medico │
 └───────────────────────────────────────┬────────────────────────────────────────┘
                                         ▼
 ┌────────────────────────────────────────────────────────────────────────────────┐
 │                   FASE 3: IDENTITÀ DIGITALE NAZIONALE: MitID                   │
 │  - Attivazione tramite app su smartphone (scansione NFC passaporto)            │
 │  - In alternativa: emissione fisica allo sportello Borgerservice               │
 └───────────────────────────────────────┬────────────────────────────────────────┘
                                         ▼
 ┌────────────────────────────────────────────────────────────────────────────────┐
 │                    FASE 4: SISTEMA BANCARIO E NemKonto                         │
 │  - Apertura conto corrente bancario ordinario (Danske Bank, Nordea, ecc.)      │
 │  - Designazione ufficiale del conto come "NemKonto" per accrediti statali      │
 └───────────────────────────────────────┬────────────────────────────────────────┘
                                         ▼
 ┌────────────────────────────────────────────────────────────────────────────────┐
 │                   FASE 5: FISCALITÀ SKAT (SCHEDA FISCALE)                      │
 │  - Compilazione preliminare dei redditi (Forskudsopgørelse) su Skat.dk         │
 │  - Generazione digitale di Hovedkort (con detrazione base) e Bikort            │
 │  - Applicazione automatica dell'imposta sul lavoro AM-bidrag (8%)              │
 │  - Eventuale opzione per il regime agevolato ricercatori ed esperti (27%)     │
 └────────────────────────────────────────────────────────────────────────────────┘
```

### 1. Registrazione SIRI / ICS
- L'appuntamento viene fissato preventivamente online su `icitizen.dk` presso gli hub ICS di Copenaghen, Aarhus, Odense o Aalborg `[DK-SRC-22]`.
- I cittadini UE presentano il contratto di lavoro o lettera di iscrizione universitaria per ricevere il *Registreringsbevis*.
- I cittadini extra-UE convalidano la propria presenza per la spedizione postale della tessera di soggiorno (*Opholdskort*), recapitata entro 2-4 settimane `[DK-SRC-22]`.

### 2. CPR Number e Sundhedskort (Yellow Card)
- **Il CPR-nummer:** Codice identificativo di 10 cifre (*Det Centrale Personregister* - formato: data di nascita a sei cifre seguita da quattro cifre personali: DDMMYY-XXXX). È la chiave d'accesso per il sistema bancario, i contratti d'affitto, la telefonia, la sanità e le buste paga `[DK-SRC-23]`.
- **Condizione d'iscrizione:** Dimostrazione di un indirizzo di residenza certo in Danimarca con contratto di locazione valido (*lejekontrakt*) o dichiarazione scritta del proprietario `[DK-SRC-23]`.
- **La Yellow Card (*Sundhedskort*):** Tessera sanitaria magnetica gialla che reca nome, indirizzo, codice CPR e i recapiti del medico di base assegnato (*praktiserende læge*). Garantisce la gratuità totale di tutte le prestazioni mediche territoriali e ospedaliere `[DK-SRC-24]`.

### 3. Emissione del MitID
- Il **MitID** è il sistema unificato di identità elettronica della Danimarca (che ha sostituito integralmente il vecchio NemID).
- È indispensabile per accedere a `borger.dk`, `skat.dk`, alla casella di posta digitale di Stato (**e-Boks** o **Mit.dk**) e all'home banking `[DK-SRC-25]`.
- Può essere attivato autonomamente leggendo il chip biometrico del passaporto tramite l'app MitID oppure recandosi personalmente al Borgerservice `[DK-SRC-25]`.

### 4. Apertura Conto Bancario e Assegnazione NemKonto
- In Danimarca non è consentito ricevere stipendi su conti terzi. Il lavoratore apre un conto presso una banca commerciale danese e richiede l'associazione di tale conto come **NemKonto** (*Easy Account*) `[DK-SRC-26]`.
- Tutte le istituzioni pubbliche (Skat per i rimborsi fiscali, SU per le borse universitarie, casse previdenziali) e i datori di lavoro canalizzano i pagamenti tramite il codice CPR direttamente sul NemKonto collegato `[DK-SRC-26]`.

### 5. Scheda Fiscale Skat (*Skattekort*) e Contributo AM-bidrag
- Non appena ottenuto il CPR e firmato il contratto, il lavoratore o dottorando accede su `skat.dk/tastselv` per compilare la stima preliminare del reddito annuo (*Forskudsopgørelse*) `[DK-SRC-27]`.
- **Le Tipologie di Skattekort:**
  - **Hovedkort (Scheda Principale):** Usata dal datore primario; applica la percentuale di trattenuta e incorpora la detrazione fiscale personale di base (*Personfradrag*, pari a circa 51.600 DKK/anno) `[DK-SRC-27]`.
  - **Bikort (Scheda Secondaria):** Usata per secondi lavori o borse accessorie, applica l'aliquota marginale piena senza detrazioni `[DK-SRC-27]`.
  - **Frikort (Scheda di Esenzione):** Consente di non pagare imposte sul reddito fino a concorrenza del tetto del *Personfradrag* (usata tipicamente da studenti) `[DK-SRC-27]`.
- **AM-bidrag (*Arbejdsmarkedsbidrag*):** Contributo statale obbligatorio dell'**8%** calcolato su tutte le retribuzioni lorde da lavoro dipendente, trattenuto alla fonte prima del calcolo dell'imposta sul reddito comunale e statale `[DK-SRC-27]`.
- **Regime Speciale per Ricercatori e Lavoratori Chiave (*Forskerskatteordningen* - KSL §§ 48 E-F):**
  - Consente a ricercatori accademici qualificati e a personale aziendale altamente remunerato di beneficiare di un'imposta forfettaria sul reddito lordo del **27%** per una durata massima di **7 anni (84 mesi)** `[DK-SRC-28]`.
  - Con l'aggiunta dell'8% di AM-bidrag, l'aliquota effettiva complessiva è pari al **32,84%** (rispetto all'aliquota marginale ordinaria danese che può superare il 52%) `[DK-SRC-28]`.
  - **Soglia salariale minima 2026 per Key Employees:** Almeno **65.400 DKK lordi/mese** (prima dell'AM-bidrag). Per i ricercatori universitari accreditati non si applica la soglia di reddito, ma occorre la validazione delle qualifiche scientifiche dall'ateneo danese `[DK-SRC-28]`.
  - **Requisito di non residenza pregressa:** Il candidato non deve essere stato fiscalmente residente in Danimarca nei **10 anni** precedenti `[DK-SRC-28]`.

### 6. Red Flag Operativi (Trappole Ricorrenti)
- **Trattenuta d'emergenza del 55%:** chi lavora in Danimarca senza *skattekort* paga il **55% di imposta** sullo stipendio `[DK-SRC-31]`; a questo si aggiunge l'AM-bidrag dell'8% (fonti secondarie: circa 58,6% complessivo, non confermato da skat.dk). Lo skattekort richiede il numero CPR e **non può essere generato prima di 1 mese dall'inizio del lavoro**: va richiesto su `skat.dk/tastselv` (generazione di norma immediata se si hanno CPR, tessera sanitaria e MitID) o tramite il modulo per lavoratori non danesi `[DK-SRC-31]`.
- **Truffe sugli affitti:** richieste di caparra o primo mese via bonifico prima della visita dell'immobile, annunci con prezzo fuori mercato e contratti non registrati; verificare sempre il contratto e l'identità del locatore prima di qualsiasi pagamento. *(Pratica generale; il dato quantitativo sul mercato locativo non è verificato in questo registro, vedi OPEN-DK-05.)*

---

## 4. Tabella Sinottica: Costi, Moduli e Tempi di Trattazione 2026

| Tipologia / Caso | Modulo SIRI / DIS | Tassa Autorità (2026) `[DK-SRC-18]` | Visto D Consolare `[DK-SRC-29]` | Tempi De Jure | Tempi De Facto |
| :--- | :---: | :---: | :---: | :---: | :---: |
| **Lavoro UE / SEE (Tutti i casi)** | `OD1` | **0 DKK** | Esente | 30 giorni | 1 - 3 settimane |
| **Lavoro Pay Limit Scheme** | `AR1` | **6.810 DKK** | ~250 DKK (VFS) | 30 giorni | 3 - 5 settimane |
| **Lavoro Supplementary Pay Limit** | `AR1` | **6.810 DKK** | ~250 DKK (VFS) | 30 giorni | 4 - 6 settimane |
| **Lavoro Fast-Track Scheme** | `AR6` | **6.810 DKK** | ~250 DKK (VFS) | 10 - 14 giorni | **Kvikstart immediato** |
| **Lavoro Positive Lists (Higher/Skilled)**| `AR1` | **6.810 DKK** | ~250 DKK (VFS) | 30 giorni | 4 - 6 settimane |
| **Lavoro Ordinario con Test RAR** | `AR1` | **6.810 DKK** | ~250 DKK (VFS) | 90 giorni | 3 - 4 mesi |
| **Tirocinio / Intern (Praktikant)** | `PR1` | **4.305 DKK** | ~250 DKK (VFS) | 60 giorni | 6 - 8 settimane |
| **Studio Terziario (Bachelor / Master)** | `ST1` | **3.060 DKK** | ~250 DKK (VFS) | 60 giorni | 4 - 8 settimane |
| **Dottorato di Ricerca (Ph.d.)** | `PHD1` | **3.060 DKK** | ~250 DKK (VFS) | 60 giorni | 4 - 6 settimane |
| **Guest Researcher (Gæsteforsker)** | `AR1` | **6.810 DKK** | ~250 DKK (VFS) | 30 giorni | 3 - 5 settimane |
| **Working Holiday Scheme** | `WH1` | **3.060 DKK** | ~250 DKK (VFS) | 90 giorni | 2 - 3 mesi |
| **Permesso Ricerca Lavoro Post-Studio**| Online | **3.060 DKK** | In loco | 60 giorni | 4 - 6 settimane |
| **Permesso Lavoro durante Ricerca Lavoro**| Online | **840 DKK** | In loco | 30 giorni | 2 - 4 settimane |
| **Ricongiungimento Familiare UE** | `OD2` / `FA1-EU` | **0 DKK** | Gratuito | 90 giorni | 2 - 3 mesi |
| **Ricongiungimento Familiare DIS § 9** | `FA1` | **8.490 DKK** | ~250 DKK (VFS) | 7 - 10 mesi | 8 - 12 mesi |

---

## 5. Statuto Giuridico durante l'Attesa e Viaggi Internazionali

- **Diritti sul territorio durante l'attesa (*Procesuelt ophold*):**
  - Chi ha presentato tempestivamente domanda di estensione, rinnovo o conversione di status in Danimarca prima della scadenza del titolo precedente acquisisce il diritto di soggiorno procedurale (*procesuelt ophold*) `[DK-SRC-11]`.
  - In pendenza di giudizio per cambi di impiego qualificato (Pay Limit / Fast Track), la **job change rule** consente di lavorare regolarmente `[DK-SRC-02]`, `[DK-SRC-04]`.
- **Regime Tassativo dei Viaggi all'Estero in pendenza di istruttoria:**
  - **PERICOLO BLOCCO AEROPORTUALE:** Se il precedente permesso di soggiorno o visto è scaduto e la nuova carta non è stata ancora recapitata, il richiedente **NON PUÒ VIAGGIARE FUORI DALLA DANIMARCA** `[DK-SRC-11]`.
  - La ricevuta telematica SIRI o il documento di soggiorno procedurale **NON costituiscono titolo di viaggio** ai sensi del Codice Frontiere Schengen e determinano il negato imbarco aeroportuale da parte delle compagnie aeree.
  - Per viaggiare all'estero per comprovate emergenze prima della consegna della nuova carta, occorre richiedere preventivamente un **visto di re-ingresso danese (*Tilbagerejsetilladelse*)** presso uno sportello SIRI `[DK-SRC-11]`.
