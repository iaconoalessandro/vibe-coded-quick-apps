---
country: "Bulgaria"
country_it: "Bulgaria"
iso_code: "BG"
last_verified: "2026-10-06"
review_by: "2027-03-31"
version: "1.0.0"
citizenships_covered:
  - "UE / SEE / Svizzera (italiana, comunitaria)"
  - "Extra-UE (incl. UK, USA, Canada, India, Cina, Paesi terzi)"
---

# Guida Ufficiale Visti e Immigrazione: Bulgaria

> **Regola di integrità:** Questo documento costituisce l'**UNICA fonte di verità** del progetto Admetia per quanto attiene a visti, permessi di soggiorno, autorizzazioni al lavoro, percorsi universitari, ricerca, tirocini e integrazione amministrativa in Bulgaria. Ogni dato economico, soglia salariale, tariffa consolare, termine perentorio o requisito procedurale reca un riferimento univoco `[ID-fonte]` consultabile nel registro [`bulgaria_sources.md`](bulgaria_sources.md). I quesiti privi di riscontro definitivo o soggetti a monitoraggio periodico sono censiti in [`bulgaria_open_questions.md`](bulgaria_open_questions.md).

---

## 1. Architettura Giuridica ed Enti Competenti

### 1.1 Quadro Normativo Cardine
1. **Disciplina degli Stranieri:** *Закон за чужденците в Република България (ЗЧРБ)* `[BG-SRC-01]` e relativo Regolamento di Attuazione *Правилник за прилагане на ЗЧРБ (ППЗЧРБ)* `[BG-SRC-02]`. Disciplinano l'ingresso, i visti C e D, i titoli di soggiorno temporaneo, prolungato (*продължително*), di lungo periodo (*дългосрочно*) e permanente (*постоянно*).
2. **Migrazione per Lavoro:** *Закон за трудовата миграция и трудовата мобилност (ЗТМТМ)* `[BG-SRC-03]` e Regolamento *ППЗТМТМ* `[BG-SRC-04]`. Regolano l'accesso al mercato del lavoro, le quote aziendali, il test del mercato del lavoro, il Permesso Unico di Lavoro (*ЕРПР*), la Carta Blu UE (*Синя карта на ЕС*), i tirocinanti e il lavoro per studenti.
3. **Cittadini UE/SEE/Svizzera:** *Закон за влизането, пребиваването и напускането на Република България на гражданите на ЕС и членовете на техните семейства (ЗВПРБГЕСЧТС)* `[BG-SRC-05]`. Attuazione della Direttiva 2004/38/CE sulla libera circolazione.
4. **Valuta Nazionale:** *Закон за въвеждане на еврото в Република България (ЗВЕРБ)* `[BG-SRC-08]`. Dal 1° gennaio 2026 l'Euro (**EUR / €**) è la valuta ufficiale a corso legale esclusivo in Bulgaria (tasso irrevocabile di conversione: **1 EUR = 1,95583 BGN**) `[BG-SRC-11]`.
5. **Status Schengen:** *Decisione (UE) 2024/210* `[BG-SRC-26]` (applicazione dell'acquis Schengen ad aria e mare dal 31 marzo 2024) e *Decisione (UE) 2024/3212* `[BG-SRC-27]` (revoca dei controlli sulle persone alle frontiere terrestri interne dal 1° gennaio 2025). La Bulgaria applica integralmente il Codice Frontiere Schengen `[BG-SRC-24]` e il computo cumulativo dei 90 giorni su 180 giorni.

### 1.2 Mappa degli Enti Istituzionali e Portali
* **Ministero dell'Interno (МВР) — Дирекция "Миграция":** Ente governativo responsabile per la ricezione delle domande di soggiorno, la verifica di sicurezza con l'Agenzia Statale per la Sicurezza Nazionale (**ДАНС**), l'acquisizione dei dati biometrici e il rilascio delle carte di soggiorno e dei codici identificativi per stranieri (**ЛНЧ**) `[BG-SRC-12]`.
* **Ministero degli Affari Esteri (МВнР) — Дирекция "Консулски отношения":** Rete dei consolati bulgari all'estero preposti al rilascio dei Visti Schengen C e dei Visti Nazionali D `[BG-SRC-13]`.
* **Ministero del Lavoro e delle Politiche Sociali — Агенция по заетостта (АЗ):** Agenzia governativa per l'impiego incaricata di emettere i pareri vincolanti per il lavoro subordinato, la Carta Blu UE, le notifiche di tirocinio e la registrazione dei contratti per studenti `[BG-SRC-14]`.
* **Ministero dell'Istruzione e della Scienza (МОН):** Ammissione degli studenti stranieri e rilascio del Certificato di Accettazione agli Studi (*Удостоверение за приемане на студент*) `[BG-SRC-16]`.
* **Национален център за информация и документация (НАЦИД - NACID):** Registro ufficiale degli enti di ricerca scientifica accreditati per gli accordi di accoglienza (*Споразумение за прием*) ed equipollenza titoli di studio `[BG-SRC-18]`.
* **Национална агенция за приходите (НАП - NRA):** Agenzia fiscale per l'attribuzione del codice provvisorio di servizio (*Служебен номер*), registrazione contratti di lavoro e fiscalità (flat tax 10%) `[BG-SRC-19]`.
* **Национална здравноосигурителна каса (НЗОК):** Cassa Sanitaria Nazionale statale per l'assicurazione sanitaria obbligatoria da lavoro subordinato (8% lordo) `[BG-SRC-20]`.

---

## 2. Matrice dei Casi d'Uso (Dettaglio Operativo UE vs Extra-UE)

---

### Caso 1: Lavoro Dipendente Ordinario (Single Permit / ЕРПР)
*Base legale:* Art. 24и ЗЧРБ `[BG-SRC-01]`, art. 15 ЗТМТМ `[BG-SRC-03]`, Direttiva 2011/98/UE.

#### Cittadini UE/SEE/CH
* **Regime:** Piena parità di trattamento con i lavoratori bulgari in virtù della libera circolazione dei lavoratori ex art. 45 TFUE e ЗВПРБГЕСЧТС `[BG-SRC-05]`. Nessuna autorizzazione al lavoro né visto consolare.
* **Procedura:** Soggiorno libero fino a 3 mesi `[BG-SRC-05]`. Per periodi superiori, registrazione presso la Direzione Migrazione competente territorialmente entro 3 mesi dall'ingresso. Presentare: carta d'identità/passaporto, contratto di lavoro registrato ad НАП ex art. 62 КТ `[BG-SRC-15]` o dichiarazione del datore, prova di alloggio.
* **Titolo Rilasciato:** *Удостоверение за продължително пребиваване* (Attestato cartaceo) rilasciato in giornata `[BG-SRC-05]`. Costo: **3,58 EUR (7 BGN)** `[BG-SRC-06]` *(conversione dal lev al cambio fisso 1,95583; una fonte secondaria riporta 7 EUR dopo l'adozione dell'euro, non confermata da fonte primaria: vedi OPEN-BG-EUR)*. Facoltativa la carta plastificata UE a **15,34 EUR (30 BGN)** `[BG-SRC-06]`.

#### Cittadini Extra-UE
* **Titolo Richiesto:** *Единно разрешение за пребиваване и работа (ЕРПР)* — Permesso Unico di Soggiorno e Lavoro `[BG-SRC-01]`.
* **Pre-requisiti & Vincoli a Carico del Datore di Lavoro:**
  1. **Test del Mercato del Lavoro (*Пазарен тест*):** Obbligo per il datore di pubblicare la vacanza presso l'ufficio di collocamento locale di АЗ per almeno 15 giorni per accertare l'indisponibilità di lavoratori bulgari o comunitari `[BG-SRC-03]`. Derogabile solo se la mansione rientra nella Shortage Occupations List ministeriale.
  2. **Tetto Quote di Personale Straniero (Art. 7 ЗТМТМ):** Il numero complessivo di cittadini terzi impiegati non può superare il **20%** della forza lavoro media annua (limite elevato al **35%** per le Piccole e Medie Imprese - PMI) `[BG-SRC-03]`.
  3. **Stipula del Contratto:** Contratto conforme al Codice del Lavoro bulgaro `[BG-SRC-15]` con retribuzione non inferiore al salario minimo nazionale (**620,20 EUR / 1.213 BGN**) `[BG-SRC-09]`.
* **Procedura Passo-Passo (One-Stop-Shop):**
  1. *Fase 1 (In Bulgaria):* Il datore di lavoro presenta l'istanza di ЕРПР alla Direzione Migrazione (МВР) mentre il candidato è all'estero. МВР trasmette gli atti ad АЗ (che rilascia parere entro 14 giorni) e a ДАНС (per il nulla osta di sicurezza) `[BG-SRC-01]`. Tassa parere АЗ: **51,13 EUR (100 BGN)** `[BG-SRC-14]`.
  2. *Fase 2 (Al Consolato):* Notificata l'approvazione a Sofia, il candidato deposita la domanda di **Visto D per lavoro (art. 15, al. 1 ЗЧРБ)** presso il consolato bulgaro di residenza `[BG-SRC-01]`. Tassa: **100,00 EUR** `[BG-SRC-07]`.
  3. *Fase 3 (All'Arrivo):* Ingresso in Bulgaria. Entro 3 giorni: registrazione dell'indirizzo `[BG-SRC-21]`. Almeno 14 giorni prima della scadenza del visto D: comparizione alla Direzione Migrazione per impronte e foto biometrica `[BG-SRC-02]`.
* **Costi Amministrativi Obbligatori:** Visto D: **100 EUR** `[BG-SRC-07]`; Istruttoria МВР: **5,11 EUR (10 BGN)** `[BG-SRC-06]`; Tassa emissione titolo lavorativo: **56,24 EUR (110 BGN)** `[BG-SRC-06]`; Carta biometrica ordinaria: **20,45 EUR (40 BGN)** (+ comm. bancaria) `[BG-SRC-06]`.
* **Tempi:** 6–10 settimane complessive (de jure fino a 2 mesi ex art. 24и ЗЧРБ `[BG-SRC-01]`).
* **Diritti & Limitazioni:** Il permesso è vincolato tassativamente a quel datore di lavoro e a quella specifica mansione. Il cambio di datore richiede una nuova procedura autorizzativa.

---

### Caso 2: Lavoro Altamente Qualificato (EU Blue Card / Синя карта на ЕС)
*Base legale:* Art. 33к ЗЧРБ `[BG-SRC-01]`, artt. 17–23 ЗТМТМ `[BG-SRC-03]`, Direttiva (UE) 2021/1883 `[BG-SRC-28]`.

#### Cittadini UE/SEE/CH
* Accesso incondizionato e libero senza requisiti salariali o autorizzazioni. Registrazione ordinaria ex ЗВПРБГЕСЧТС `[BG-SRC-05]`.

#### Cittadini Extra-UE
* **Requisiti Contrattuali e Formativi:**
  - Contratto di lavoro o offerta vincolante per mansione ad alta qualificazione di durata non inferiore a **6 mesi** `[BG-SRC-03]`.
  - **Soglia Salariale Minima:** Retribuzione lorda pari ad almeno **1,5 volte** il salario medio lordo nazionale annuo rilevato da NSI `[BG-SRC-03]`. Con il salario medio consolidato al Q2 2026 pari a 1.444 EUR/mese, la soglia minima inderogabile è fissata a **2.166,00 EUR lordi/mese (4.236,33 BGN)**, pari a **25.992,00 EUR lordi/anno** `[BG-SRC-10]`.
  - **Titoli Accademici o Esperienza Professionale:** Titolo di studio universitario superiore di almeno 3 anni (riconosciuto da NACID ove regolamentato) `[BG-SRC-18]` OPPURE, per il settore informatico/ICT (ISCO-08 133 e 25), almeno **3 anni di esperienza professionale documentata maturata negli ultimi 7 anni** `[BG-SRC-03]`.
  - **Esenzioni Chiave:** **Nessun test del mercato del lavoro (*пазарен тест*)** e procedura di deroga al tetto quote del 20%/35% `[BG-SRC-03]`.
* **Procedura:** Istanza presentata dal datore di lavoro a МВР -> nulla osta АЗ e ДАНС -> rilascio del Visto D a 100 EUR `[BG-SRC-07]` -> rilascio in Bulgaria della Carta Blu UE valida da **24 mesi a un massimo di 5 anni** (o durata del contratto + 3 mesi) `[BG-SRC-01]`.
* **Costi:** Istruttoria: 5,11 EUR; Tassa rilascio titolo: **56,24 EUR (110 BGN)** `[BG-SRC-06]`; Carta biometrica: **20,45 EUR (40 BGN)** `[BG-SRC-06]`; Visto D: 100 EUR `[BG-SRC-07]`. Tassa parere АЗ a carico datore: 51,13 EUR (100 BGN) `[BG-SRC-14]`.
* **Mobilità e Flessibilità (Direttiva 2021/1883):**
  - Nei primi 12 mesi di lavoro, il cambio datore richiede comunicazione/autorizzazione ad АЗ.
  - **Trascorsi 12 mesi:** Libero cambio di datore di lavoro per posizioni altamente qualificate su semplice notifica scritta ad АЗ `[BG-SRC-03]`.
  - **Ricongiungimento Familiare Immediato:** Coniuge e figli a carico ricevono il permesso senza attendere l'anno di residenza e **godono di accesso immediato e libero al mercato del lavoro bulgaro** senza bisogno di autorizzazioni separate `[BG-SRC-01]`.
  - **Mobilità Intra-UE:** I titolari di Blue Card di un altro Stato UE da almeno 12 mesi (o 6 mesi) possono trasferirsi in Bulgaria per impiego qualificato con iter semplificato `[BG-SRC-01]`.

---

### Caso 3: Internship / Tirocinio (Curriculare vs Extracurriculare)
*Base legale:* Art. 24в ЗЧРБ `[BG-SRC-01]`, art. 38а ЗТМТМ `[BG-SRC-03]`, art. 233б Codice del Lavoro `[BG-SRC-15]`, artt. 58–63 ППЗТМТМ `[BG-SRC-04]`.

#### 1. Tirocinio Curriculare (Studenti Universitari)
* **Cittadini UE:** Libero svolgimento nell'ambito della convenzione di tirocinio tra ateneo e impresa ospitante.
* **Cittadini Extra-UE:** Se lo studente è già regolarmente iscritto presso un'università bulgara (o in mobilità Erasmus+), il tirocinio curriculare non richiede autorizzazioni lavorative: si fonda sull'accordo tripartito università-studente-azienda `[BG-SRC-01]`.

#### 2. Tirocinio Extracurriculare / Professionale Internazionale (Стажант)
* **Destinatari:** Cittadini terzi neolaureati (laurea conseguita da non più di 2 anni) o studenti iscritti a corsi universitari all'estero `[BG-SRC-03]`.
* **Requisiti Tassativi:**
  - Contratto di lavoro con clausola di tirocinio (*трудов договор с условие за стажуване*) ai sensi dell'art. 233б del Codice del Lavoro `[BG-SRC-15]`.
  - Assegnazione obbligatoria di un **mentore aziendale (*наставник*)** con almeno 3 anni di esperienza specifica nella professione `[BG-SRC-15]`.
  - Programma formativo dettagliato (*програма на стажа*) approvato dalle parti `[BG-SRC-04]`.
  - Retribuzione non inferiore al salario minimo nazionale (**620,20 EUR / 1.213 BGN**) `[BG-SRC-09]`.
  - Durata: **da 6 mesi a un massimo inderogabile di 12 mesi** (non rinnovabile per la stessa mansione) `[BG-SRC-03]`.
* **Procedura:** Notifica ad АЗ -> autorizzazione МВР -> rilascio Visto D per tirocinio (100 EUR) `[BG-SRC-07]` -> permesso di soggiorno per tirocinante (*разрешение за пребиваване на стажант*). Tassa МВР: 102,26 EUR (200 BGN se ≤ 6 mesi) o 255,65 EUR (500 BGN se > 6 mesi) `[BG-SRC-06]`.
* **Limitazioni:** Il tirocinante non può svolgere lavori secondari né richiedere il ricongiungimento dei familiari `[BG-SRC-01]`.

---

### Caso 4: Studio Universitario (Bachelor / Master)
*Base legale:* Art. 24в ЗЧРБ `[BG-SRC-01]`, Закон за висшето образование (ЗВО) `[BG-SRC-16]`, art. 38 ЗТМТМ `[BG-SRC-03]`.

#### Cittadini UE/SEE/CH
* Ammissione parificata ai cittadini bulgari. Nessun visto. Soggiorno oltre 3 mesi registrato esibendo il certificato di iscrizione universitaria (*уверение*), tessera TEAM/EHIC e dichiarazione di autosufficienza `[BG-SRC-05]`. Tassa: 3,58 EUR `[BG-SRC-06]`.

#### Cittadini Extra-UE
* **Ammissione Accademica:** Convalida del titolo di scuola superiore o laurea presso l'Ispettorato Regionale (*РУО*) o NACID `[BG-SRC-18]`. L'università bulgara inoltra il dossier al Ministero dell'Istruzione (МОН), che emette il Certificato Ufficiale di Ammissione (*Удостоверение за приемане*) `[BG-SRC-16]`.
* **Visto Consolare:** Visto D studio (art. 15, al. 1 e art. 24в ЗЧРБ) rilasciato a 100 EUR `[BG-SRC-07]`.
  - *Requisiti finanziari (Proof of Funds):* Risorse documentate pari ad almeno la quota mensile del salario minimo nazionale (620,20 EUR) moltiplicata per 12 mesi = **7.442,40 EUR (14.556 BGN)** `[BG-SRC-09]`.
* **Permesso di Soggiorno Studio in Bulgaria:**
  - Validità: **1 anno**, rinnovabile annualmente per l'intera durata legale del corso di laurea `[BG-SRC-01]`.
  - Tasse agevolate per studenti: Istruttoria 5,11 EUR + Tassa rilascio titolo ridotta **51,13 EUR (100 BGN)** ex art. 10, al. 2 Тарифа № 4 `[BG-SRC-06]` + Carta biometrica **20,45 EUR (40 BGN)** `[BG-SRC-06]`.
* **Diritti Lavorativi Durante gli Studi (Art. 38 ЗТМТМ `[BG-SRC-03]`):**
  - **Durante il semestre didattico:** Lavoro part-time fino a **20 ore settimanali**.
  - **Durante le vacanze universitarie ufficiali:** Lavoro a tempo pieno (**40 ore settimanali**) senza il limite delle 20 ore `[BG-SRC-03]`.
  - **Nessun permesso di lavoro separato:** Il datore di lavoro deve solo registrare l'assunzione presso l'ufficio locale di АЗ entro **7 giorni lavorativi** dall'inizio dell'attività `[BG-SRC-03]`.
* **Regime Sanitario:** Obbligo di polizza assicurativa privata con massimale di 30.000 EUR (60.000 BGN) `[BG-SRC-01]`. Qualora lo studente venga assunto con contratto di lavoro dipendente registrato, scatta l'iscrizione automatica alla cassa statale НЗОК (8%) `[BG-SRC-20]`.
* **Computo ai Fini del Soggiorno Permanente:** Gli anni trascorsi con permesso di studio sono computati al **50%** per il raggiungimento dei 5 anni di residenza continuativa richiesti per il permesso UE di lungo periodo ex art. 25 ЗЧРБ `[BG-SRC-01]`.

---

### Caso 5: Tesi / Ricerca all'Estero (Visiting Student vs Ricercatore)
*Base legale:* Art. 24б ЗЧРБ `[BG-SRC-01]`, art. 36 ЗТМТМ `[BG-SRC-03]`, Direttiva (UE) 2016/801 `[BG-SRC-29]`.

#### 1. Visiting Student (Preparazione Tesi di Laurea)
* **Soggiorno ≤ 90 giorni:** Visto uniforme Schengen C (o esenzione per nazionalità esenti) `[BG-SRC-25]`. Nessuna autorizzazione di soggiorno locale.
* **Soggiorno > 90 giorni:** Inquadramento come studente ospite ex art. 24в ЗЧРБ (convenzione inter-ateneo per crediti formativi/tesi). Richiede Visto D e permesso semestrale/annuale per motivi di studio `[BG-SRC-01]`.

#### 2. Ricercatore Scientifico (Art. 24б ЗЧРБ)
* **Requisiti Istituzionali:**
  - Stipula di un Accordo di Accoglienza (*Споразумение за прием*) conforme al modello standard МОН con un ente di ricerca o università registrata presso NACID `[BG-SRC-18]`.
  - L'ente ospitante garantisce la copertura finanziaria (stipendio da contratto di ricerca o borsa scientifica non inferiore alla media dei docenti ricercatori) e risponde finanziariamente delle spese sanitarie e di soggiorno `[BG-SRC-01]`.
* **Titolo & Diritti:**
  - Visto D ricerca (100 EUR) `[BG-SRC-07]` e Permesso di soggiorno per ricercatore (tassa: 255,65 EUR / 500 BGN ex art. 10, al. 5 `[BG-SRC-06]`).
  - **Esenzione dal permesso di lavoro:** Il ricercatore può svolgere sia l'attività di ricerca sia attività di **docenza accademica** senza alcuna autorizzazione supplementare ex art. 36 ЗТМТМ `[BG-SRC-03]`.
  - **Ricongiungimento familiare immediato:** Senza attendere 1 anno di soggiorno `[BG-SRC-01]`.
  - **Mobilità Intra-UE:** Fino a 180 giorni su 360 giorni verso altri Stati membri UE con pura notifica `[BG-SRC-29]`.

---

### Caso 6: Erasmus+ e Mobilità Intra-UE (Direttiva 2016/801)
*Base legale:* Art. 24в, ал. 8–12 ЗЧРБ `[BG-SRC-01]`, Direttiva (UE) 2016/801 `[BG-SRC-29]`, Regolamento (CE) 883/2004.

#### Cittadini UE (Erasmus+ Studio o Traineeship)
* Copertura sanitaria garantita dalla **Tessera TEAM (EHIC)** senza obbligo di assicurazione privata.
* Fino a 3 mesi nessun adempimento. Oltre 3 mesi: attestato di soggiorno ex ЗВПРБГЕСЧТС `[BG-SRC-05]` (3,58 EUR) esibendo il Learning Agreement.

#### Cittadini Extra-UE Titolari di Titolo di Studio di Altro Stato UE
* **Regime di Mobilità Senza Visto D Bulgaro:**
  - Ai sensi dell'art. 24в, commi 8–12 ЗЧРБ `[BG-SRC-01]` e della Direttiva 2016/801 `[BG-SRC-29]`, lo studente extra-UE regolarmente soggiornante in uno Stato membro dell'Unione Europea per motivi di studio che si reca in Bulgaria per un periodo di mobilità fino a **360 giorni**:
  - **NON DEVE RICHIEDERE ALCUN VISTO D AL CONSOLATO BULGARO NÉ UN PERMESSO DI SOGGIORNO BULGARO!**
* **Procedura di Notifica:**
  - L'università bulgara ospitante trasmette una **formale notifica di mobilità intra-UE** alla Direzione Migrazione (МВР) prima dell'arrivo o immediatamente dopo l'ingresso.
  - Documenti allegati: Copia del permesso di soggiorno del primo Stato UE con dicitura "student" (valido per l'intero scambio); Learning Agreement approvato; prova di mezzi di sussistenza (borsa Erasmus+ o estratto conto); assicurazione sanitaria con massimale di 60.000 BGN `[BG-SRC-01]`.
  - In assenza di obiezioni di sicurezza entro 30 giorni, la mobilità è perfezionata a costo zero (0 EUR).

---

### Caso 7: Master di II Livello e Dottorato di Ricerca (PhD / Докторанти)
*Base legale:* Закон за висшето образование `[BG-SRC-16]`, ЗРАСРБ `[BG-SRC-17]`, art. 24в e 24б ЗЧРБ `[BG-SRC-01]`, art. 13 ЗДДФЛ `[BG-SRC-22]`.

#### 1. Dottorando su Canale Studio Ordinario (Art. 24в ЗЧРБ)
* Inquadramento formale come studente del terzo ciclo accademico.
* Visto D studio (100 EUR) e tassa annuale ridotta per studenti di **51,13 EUR (100 BGN)** `[BG-SRC-06]`.
* **Regime Fiscale delle Borse di Dottorato:** Ai sensi dell'art. 13, comma 1, punto 14 del ЗДДФЛ `[BG-SRC-22]`, le borse di studio e di ricerca statali o universitarie erogate ai dottorandi sono **totalmente esenti da imposte sui redditi (IRPEF 0%) e contributi sociali**.
* Sanità: Obbligo di polizza sanitaria privata (massimale 60.000 BGN), salva stipula di contratto part-time che attiva НЗОК `[BG-SRC-20]`.

#### 2. Dottorando-Ricercatore Contrattualizzato (Art. 24б ЗЧРБ)
* Se il dottorando è assunto nell'ambito di progetti scientifici retribuiti (es. Horizon Europe): inquadramento ex art. 24б ЗЧРБ con *Споразумение за прием* `[BG-SRC-01]`.
* Vantaggi: Contratto di lavoro con copertura previdenziale e sanitaria pubblica automatica (**НЗОК**), diritto al ricongiungimento familiare immediato e computo del 100% degli anni ai fini del permesso permanente `[BG-SRC-01]`.

---

### Caso 8: Working Holiday / Vacanza-Lavoro
*Base legale:* Analisi della normativa bilaterale e art. 24к ЗЧРБ `[BG-SRC-01]`.

> [!CAUTION]
> **STATO GIURIDICO CERTO:**  
> **La Bulgaria NON ha accordi bilaterali vigenti di tipo "Working Holiday" (Vacanza-Lavoro) o "Youth Mobility" con alcuno Stato estero (né Canada, né Corea del Sud, né Australia, né Nuova Zelanda o UK) `[BG-SRC-13]`.**

* **Chiarimento sul regime di viaggio dei Paesi terzi:** Cittadini canadesi, sudcoreani, australiani, britannici o statunitensi beneficiano unicamente dell'esenzione dal visto Schengen per brevi periodi (fino a 90 giorni ogni 180 giorni), con **divieto assoluto di svolgere qualsiasi attività lavorativa subordinata o autonoma** `[BG-SRC-24]`.
* **Unica Alternativa Stagionale Legale:** Il permesso per **Lavoro Stagionale (*Сезонен работник*)** ai sensi dell'art. 24к ЗЧРБ `[BG-SRC-01]` e artt. 24–30 ЗТМТМ `[BG-SRC-03]`:
  - Limitato ai settori agricolo e turistico per una durata compresa tra 90 giorni e 9 mesi;
  - Richiede autorizzazione del datore presso АЗ e rilascio di Visto C o D stagionale (tassa ridotta ex art. 10б Тарифа № 4: 30,68 EUR / 60 BGN) `[BG-SRC-06]`. Non convertibile in permesso ordinario.

---

### Caso 9: Post-Study Work / Ricerca Lavoro o Impresa (9 Mesi Post-Laurea)
*Base legale:* Art. 24в, ал. 8, 9 и 10 ЗЧРБ `[BG-SRC-01]`, art. 25 Direttiva (UE) 2016/801 `[BG-SRC-29]`.

#### Cittadini UE/SEE/CH
* Possono trattenersi indefinitamente sul territorio nazionale senza alcuna conversione di titolo.

#### Cittadini Extra-UE
* **Aventi Diritto:** Cittadini terzi che hanno conseguito un diploma universitario in Bulgaria (Bachelor, Master o PhD) o completato un progetto di ricerca scientifica `[BG-SRC-01]`.
* **Durata:** **9 mesi continui** (non prorogabili; entro i 9 mesi occorre perfezionare l'assunzione o aprire l'attività d'impresa).
* **Adempimenti e Termini Perentori a Pena di Decadenza:**
  1. **Registrazione all'Agenzia per l'Impiego (АЗ):** Entro e non oltre **7 giorni lavorativi** dalla data di conseguimento del titolo/laurea, il neolaureato deve registrarsi come persona in cerca di lavoro (*търсещо работа лице*) presso l'ufficio locale di collocamento (*Бюро по труда*) di АЗ `[BG-SRC-01]`.
  2. **Deposito Domanda a МВР:** La domanda di permesso di soggiorno prolungato per ricerca lavoro (Образец № 3) deve essere presentata alla Direzione Migrazione **almeno 30 giorni di calendario prima della scadenza del permesso per motivi di studio in corso** `[BG-SRC-01]`.
* **Requisiti Finanziari:** Estratto conto bancario personale con saldo pari ad almeno 9 mensilità di salario minimo: 9 x 620,20 EUR = **5.581,80 EUR (10.917 BGN)** `[BG-SRC-09]`, alloggio notarile e assicurazione sanitaria privata 9 mesi (60.000 BGN).
* **Diritti Durante i 9 Mesi & Conversione Fuori Quota:**
  - Il permesso autorizza il soggiorno e la ricerca sul territorio bulgaro.
  - **Conversione Diretta in Loco (*In-Country Transition*):** Trovato il lavoro o costituita l'impresa, il titolare converte direttamente il proprio status in **Single Permit (ЕРПР)** `[BG-SRC-01]` o **EU Blue Card** `[BG-SRC-01]`.
  - **Straordinario Vantaggio Normativo:** La transizione avviene **senza dover lasciare la Bulgaria, senza richiedere un nuovo visto D consolare e con esenzione totale dal test del mercato del lavoro (*пазарен тест*)!** `[BG-SRC-03]`.

---

### Caso 10: Soggiorni Brevi (≤ 90 gg Schengen C) e Ricongiungimento Familiare
*Base legale:* Regolamento (UE) 2016/399 `[BG-SRC-24]`, Regolamento (UE) 2024/1415 `[BG-SRC-25]`, Decisione (UE) 2024/210 `[BG-SRC-26]`, art. 24, ал. 1, т. 13 ЗЧРБ `[BG-SRC-01]`.

#### 1. Soggiorni Brevi (≤ 90 Giorni su Finestra Mobile di 180 Giorni)
* **Status Schengen Pieno:** Dal 31 marzo 2024 (aria/mare) `[BG-SRC-26]` e dal 1° gennaio 2025 (terra) `[BG-SRC-27]`, i giorni trascorsi in Bulgaria erodono l'unico plafond cumulativo Schengen di 90 giorni su qualsiasi finestra di 180 giorni.
* **Cittadini Esenti da Visto (es. USA, UK, Canada, Australia):** Ingresso libero con passaporto valido fino a 90/180 giorni complessivi in tutta l'area Schengen. Divieto assoluto di lavoro.
* **Cittadini Soggetti a Visto (es. India, Turchia, Cina):** Richiesta di visto Schengen C. Costo: **90,00 EUR** (adulti) e **45,00 EUR** (minori 6–12 anni) ex Regolamento (UE) 2024/1415 `[BG-SRC-25]`.
* **Divieto Categorico di Cambio di Status:** Ai sensi dell'**art. 24, comma 2 ЗЧРБ `[BG-SRC-01]`**, è severamente vietato convertire un soggiorno turistico o un visto C in permesso di soggiorno dall'interno della Bulgaria.

#### 2. Ricongiungimento Familiare (Събиране на семейство)
* **Aventi Diritto:** Coniuge legalmente sposato e figli minori non sposati `[BG-SRC-01]`.
* **Requisiti dello Sponsor Residente:**
  - Per residenti ordinari (Single Permit, lavoro autonomo): almeno **1 anno di residenza legale continuativa** in Bulgaria con permesso rinnovato `[BG-SRC-01]`.
  - **Per titolari di EU Blue Card (art. 33к) e Ricercatori (art. 24б):** **Nessun periodo di attesa (ricongiungimento immediato e contestuale)** `[BG-SRC-01]`.
* **Procedura in Due Fasi:**
  1. *Fase 1 (A Sofia):* Lo sponsor deposita l'istanza a МВР dimostrando alloggio idoneo e reddito familiare aggregato (almeno un salario minimo per ciascun componente). МВР approva entro 1 mese `[BG-SRC-01]`.
  2. *Fase 2 (All'Estero):* I familiari richiedono il Visto D per ricongiungimento familiare (100 EUR ciascuno) `[BG-SRC-07]`.
  3. *Fase 3 (In Bulgaria):* Concessione del permesso di soggiorno ex art. 24, al. 1, т. 13 ЗЧРБ (tassa: **255,65 EUR / 500 BGN** a persona ex art. 10, al. 5 `[BG-SRC-06]`).
* **Lavoro dei Familiari:** I familiari di titolari di EU Blue Card hanno **accesso libero e immediato al lavoro** senza permessi aggiuntivi `[BG-SRC-01]`. I familiari di residenti ordinari devono seguire l'iter ordinario ЗТМТМ.

---

## 3. Riepilogo Costi Amministrativi Obbligatori per Tipologia

Tutti i valori sono conformi alla *Тарифа № 4 МВР* `[BG-SRC-06]`, alla *Тарифа № 3 МВнР* `[BG-SRC-07]` e al cambio fisso irrevocabile 1 EUR = 1,95583 BGN `[BG-SRC-08]`.

| Tipologia Titolo / Caso | Visto D Consolare | Istruttoria МВР | Concessione Permesso МВР | Carta Biometrica Ordinaria (30 gg) | Totale Amministrativo Obbligatorio |
| :--- | :---: | :---: | :---: | :---: | :---: |
| **Cittadino UE (Registrazione > 3 mesi)** | *N/A (Esente)* | *0,00 €* | **3,58 €** (7 BGN - cartaceo) | **15,34 €** (30 BGN - card opz.) | **3,58 €** *(18,92 € con card)* |
| **Lavoro Dipendente (Single Permit / ЕРПР)** | **100,00 €** | **5,11 €** (10 лв) | **56,24 €** (110 лв - art. 10(3)) | **20,45 €** (40 лв) | **181,80 €** *(+51,13 € tassa АЗ datore)* |
| **Lavoro Altamente Qualificato (Blue Card)** | **100,00 €** | **5,11 €** (10 лв) | **56,24 €** (110 лв - art. 10(3)) | **20,45 €** (40 лв) | **181,80 €** *(+51,13 € tassa АЗ datore)* |
| **Studio Universitario (Bachelor / Master)** | **100,00 €** | **5,11 €** (10 лв) | **51,13 €** (100 лв - art. 10(2)) | **20,45 €** (40 лв) | **176,69 €** |
| **Tirocinio Extracurriculare (Стажант ≤ 6m)** | **100,00 €** | **5,11 €** (10 лв) | **102,26 €** (200 лв - art. 10(5)) | **20,45 €** (40 лв) | **227,82 €** |
| **Tirocinio Extracurriculare (Стажант > 6m)** | **100,00 €** | **5,11 €** (10 лв) | **255,65 €** (500 лв - art. 10(5)) | **20,45 €** (40 лв) | **381,21 €** |
| **Ricerca Scientifica (Art. 24б ЗЧРБ)** | **100,00 €** | **5,11 €** (10 лв) | **255,65 €** (500 лв - art. 10(5)) | **20,45 €** (40 лв) | **381,21 €** |
| **Mobilità Intra-UE Studenti (Dir. 2016/801)** | *0,00 € (Esente)* | *0,00 €* | *0,00 € (Notifica)* | *0,00 €* | **0,00 €** |
| **Post-Study Job Search (9 mesi)** | *N/A (In loco)* | **5,11 €** (10 лв) | **255,65 €** (500 лв - art. 10(5)) | **20,45 €** (40 лв) | **281,21 €** |
| **Ricongiungimento Familiare (per persona)** | **100,00 €** | **5,11 €** (10 лв) | **255,65 €** (500 лв - art. 10(5)) | **20,45 €** (40 лв) | **381,21 €** |

*Note sulle maggiorazioni celeri della carta biometrica:*
* Servizio rapido (10 giorni lavorativi): **40,90 EUR (80 BGN)** `[BG-SRC-06]`.
* Servizio express (3 giorni lavorativi, solo a Sofia): **102,25 EUR (200 BGN)** `[BG-SRC-06]`.
* Commissioni di sportello bancario presso i commissariati: tipicamente 2,50–5,00 BGN aggiuntivi per bollettino.

---

## 4. Statuto Giuridico durante l'Attesa (La Ricevuta di Richiesta)

* **Documento Rilasciato:** Al momento del deposito della domanda di rilascio o rinnovo del permesso presso la Direzione Migrazione (МВР), allo straniero viene rilasciata una **Ricevuta con Numero di Protocollo (*Талон / Входящ номер*)** `[BG-SRC-02]`.
* **Diritti Riconosciuti sul Territorio Bulgaro:**
  - Garantisce il soggiorno provvisorio regolare in Bulgaria fino alla conclusione dell'istruttoria;
  - Se si tratta di rinnovo di un permesso lavorativo (Single Permit o Blue Card), autorizza la continuazione del rapporto di lavoro con il medesimo datore `[BG-SRC-03]`;
  - Consente l'accesso alle prestazioni sanitarie continuative se iscritto a НЗОК `[BG-SRC-20]`.
* **Regime Tassativo dei Viaggi all'Estero — DIVIETO DI TRANSITO:**
  > [!WARNING]
  > **DIVIETO ASSOLUTO DI VIAGGIO NELL'AREA SCHENGEN CON VISTO D SCADUTO:**  
  > La ricevuta di domanda bulgara ha validità **esclusivamente interna al territorio della Repubblica di Bulgaria**.  
  > Se il Visto D è scaduto e la carta di soggiorno non è stata ancora ritirata, **è assolutamente vietato transitare o viaggiare verso altri Paesi dell'Area Schengen (es. Italia, Francia, Grecia)** `[BG-SRC-24]`.  
  > Qualsiasi controllo alla frontiera o in aeroporto comporterà il fermo per soggiorno irregolare Schengen, sanzione e segnalazione nel SIS II. L'unico viaggio consentito a visto scaduto è il rientro diretto nel proprio Paese d'origine con volo che non effettui scali intermedi nell'Area Schengen.

---

## 5. Requisiti Amministrativi e Integrazione Post-Arrivo

### 5.1 Codici Identificativi: ЕГН vs ЛНЧ vs Служебен номер
1. **ЛНЧ (Личен номер на чужденец):** Codice di 10 cifre attribuito d'ufficio dal Ministero dell'Interno (МВР) al momento del primo permesso di soggiorno continuativo `[BG-SRC-01]`. È il codice cardine per la vita in Bulgaria.
2. **ЕГН (Единен граждански номер):** Riservato unicamente ai cittadini bulgari, ai titolari di residenza a tempo indeterminato/permanente (*постоянно*) e di lungo periodo UE (*дългосрочно*) `[BG-SRC-21]`. Non viene emesso per permessi temporanei.
3. **Служебен номер от НАП:** Codice fiscale di servizio emesso dall'Agenzia delle Entrate per atti societari, bancari o tributari prima dell'ottenimento dell'LNCh `[BG-SRC-19]`.

### 5.2 Registrazione dell'Indirizzo (Termine di 3 Giorni)
* Ai sensi degli artt. 27 e 28 del ЗЧРБ `[BG-SRC-01]`, ogni straniero deve registrarsi anagraficamente **entro 3 giorni di calendario dall'ingresso**.
* Negli alloggi in affitto privato, è obbligatorio presentare la **Dichiarazione Notarile del Proprietario (*Нотариално заверена декларация за осигуряване на подслон*)** unitamente alla copia dell'Atto Notarile di Proprietà (*Нотариален акт*) `[BG-SRC-02]`. L'indirizzo è soggetto ai vincoli di capienza dell'art. 92 del ЗГР contro le residenze fittizie `[BG-SRC-21]`.

### 5.3 Apertura Conto Bancario e Prassi
* Diritto formale al conto base per residenti legali ex art. 118 ЗПУПС `[BG-SRC-23]`.
* Nella realtà operativa, le banche bulgare (UniCredit Bulbank, DSK, UBB, Fibank) esigono la presenza fisica e il codice LNCh plastificato, imponendo commissioni di verifica istruttoria (KYC) non rimborsabili per non-residenti `[BG-SRC-11]`. Soluzione per il Visto D: utilizzare estratti conto bancari originari apostillati del proprio Paese.

### 5.4 Sanità: Cassa Pubblica (НЗОК) vs Assicurazione Privata
* **Lavoratori Dipendenti:** Iscrizione automatica alla cassa statale **НЗОК**; versamento mensile dell'8% sui salari lordi (4,8% a carico del datore, 3,2% del lavoratore) `[BG-SRC-20]`.
* **Studenti, Tirocinanti, Ricercatori a borsa e Familiari:** Obbligo di polizza sanitaria privata stipulata con compagnie autorizzate con massimale di almeno **30.000 EUR (60.000 BGN)** per cure d'urgenza e rimpatrio `[BG-SRC-01]`.

---

## 6. Catalogo delle Trappole e Red Flags Procedurali

1. **La Finestra Decadenziale dei 14 Giorni (Art. 12 ППЗЧРБ `[BG-SRC-02]`):** La richiesta di permesso di soggiorno deve essere depositata a МВР **almeno 14 giorni prima della scadenza del Visto D**. Chi deposita al 13° giorno o successivo viene respinto d'ufficio e diventa clandestino.
2. **Divieto di Cambio Status da Visto C (Art. 24, comma 2 ЗЧРБ `[BG-SRC-01]`):** È tassativamente escluso richiedere permessi di soggiorno partendo da soggiorni turistici di 90 giorni o visti C.
3. **Mancata Registrazione Anagrafica in 3 Giorni (Art. 27 ЗЧРБ `[BG-SRC-01]`):** Comporta sanzione amministrativa pecuniaria e blocco dell'istruttoria di soggiorno.
4. **Scadenza dei 6 Mesi del Casellario Giudiziale:** I certificati penali esteri scadono tassativamente dopo 6 mesi dalla data di emissione; devono essere muniti di Apostille e tradotti **esclusivamente da traduttori autorizzati dal Ministero Esteri bulgaro (МВнР)** `[BG-SRC-13]`. Le traduzioni giurate eseguite all'estero vengono respinte.
5. **Cumulo Giorni Schengen 90/180:** Con l'ingresso della Bulgaria in Schengen `[BG-SRC-26, BG-SRC-27]`, i giorni trascorsi in Bulgaria si sommano a quelli trascorsi in Italia, Francia o Germania. Chi esaurisce i 90 giorni Schengen e rimane in Bulgaria commette *overstay*, punito con multa, espulsione e bando Schengen nel SIS II da 1 a 3 anni.
6. **Mancata Iscrizione ad АЗ entro 7 Giorni Post-Laurea:** Il neolaureato extra-UE che intende usufruire dei 9 mesi per ricerca lavoro deve registrarsi come disoccupato ad АЗ entro **7 giorni lavorativi** dal conseguimento della laurea, a pena di inammissibilità dell'istanza ex art. 24в ЗЧРБ `[BG-SRC-01]`.
7. **Ispezioni Domiciliari di Polizia:** La Polizia distrettuale effettua controlli a sorpresa presso l'indirizzo dichiarato per verificare campanelli, cassette postali e intervistare i vicini. Indirizzi non confermati portano alla revoca immediata del permesso `[BG-SRC-01]`.
