---
country: "Luxembourg"
country_it: "Lussemburgo"
iso_code: "LU"
last_verified: "2026-10-05"
review_by: "2027-03-31"
version: "1.0.0"
citizenships_covered:
  - "UE / SEE / Svizzera (inclusa cittadinanza italiana)"
  - "Extra-UE (Paesi Terzi: USA, UK, India, Cina, ecc.)"
---

# Guida Ufficiale Visti e Immigrazione: Granducato di Lussemburgo (*Grand-Duché de Luxembourg*)

> **Regola di integrità:** Questo documento costituisce l'**UNICA fonte di verità** del progetto Admetia per il Granducato di Lussemburgo. Ogni dato quantitativo, soglia salariale, tariffa di visto/permesso, parametro di sussistenza o requisito procedurale reca un riferimento univoco `[ID-fonte]` collegato al registro ufficiale [`luxembourg_sources.md`](luxembourg_sources.md). Le questioni aperte e i monitoraggi normativi sono catalogati in [`luxembourg_open_questions.md`](luxembourg_open_questions.md).

---

## 1. Architettura Giuridica ed Enti Competenti

Il sistema di immigrazione, soggiorno e mercato del lavoro del Granducato di Lussemburgo si fonda su una rigorosa intelaiatura normativa centralizzata presso i ministeri competenti, integrata dalle amministrazioni comunali di prossimità:

- **Normativa Cardine di Riferimento:**
  - *Loi modifiée du 29 août 2008 sur la libre circulation des personnes et l’immigration* (`[LU-SRC-01]`): testo coordinato fondamentale che disciplina l'ingresso, il soggiorno dei cittadini UE/SEE e il rilascio dei titoli per lavoratori, studenti, ricercatori e familiari di paesi terzi.
  - *Loi du 4 juin 2024* (`[LU-SRC-02]`) e *Règlement grand-ducal du 20 juin 2024* (`[LU-SRC-03]`): recepimento della Direttiva (UE) 2021/1883 sulla Carta Blu UE (durata minima contrattuale a 6 mesi, unificazione della soglia al 100% del salario medio annuo lordo, esenzione totale dal test ADEM).
  - *Loi du 7 août 2023* (`[LU-SRC-05]`): modernizzazione dell'immigrazione economica, soppressione del test di mercato ADEM per le professioni in penuria (rilascio certificato in 5 giorni), riduzione del test ordinario a 7 giorni lavorativi ed estensione del titolo post-studio per diplomati di master/dottorato a **12 mesi**.
  - *Loi du 1er août 2018* (`[LU-SRC-06]`): recepimento della Direttiva (UE) 2016/801 su studenti, ricercatori, tirocinanti e mobilità accademica intra-UE.
  - *Code du travail luxembourgeois* (`[LU-SRC-07]`): norme vincolanti su contratti, indennità di stage obbligatorie (artt. L. 151-1 e segg.) e disciplina del Salaire Social Minimum (artt. L. 222-1 e segg.).
  - *Loi du 23 juillet 2024 sur le bail à loyer* (`[LU-SRC-24]`): riforma delle locazioni abitative in vigore dal 1° agosto 2024 (cauzione plafonata a 2 mesi, spese di agenzia ripartite al 50/50, contratto scritto obbligatorio).

- **Enti Pubblici Competenti:**
  - **Direction générale de l'immigration (Ministère des Affaires intérieures / MAEE):** Autorità statale centrale preposta all'istruzione delle autorizzazioni temporanee di soggiorno preventive (*Autorisation de séjour temporaire - AST*), al rilascio dei titoli biometrici definitivi (*Titre de séjour*) e all'applicazione delle misure di allontanamento (`[LU-SRC-01]`, `[LU-SRC-21]`).
  - **ADEM (Agence pour le développement de l'emploi):** Agenzia pubblica del lavoro preposta al monitoraggio del mercato occupazionale, alla ricezione delle dichiarazioni di posto vacante (*déclaration de vacance de poste*) e al rilascio del certificato abilitante all'assunzione di lavoratori terzi ordinari (`[LU-SRC-20]`).
  - **CCSS (Centre commun de la sécurité sociale):** Ente centrale preposto all'affiliazione previdenziale e sanitaria dei lavoratori, alla riscossione dei contributi sociali e all'attribuzione del codice identificativo nazionale a 13 cifre (*Matricule national*) (`[LU-SRC-08]`, `[LU-SRC-23]`).
  - **CNS (Caisse nationale de santé):** Cassa sanitaria nazionale per la gestione dell'assicurazione malattie-maternità, rimborso delle prestazioni sanitarie e rilascio della tessera sanitaria fisica.
  - **ACD (Administration des contributions directes):** Autorità tributaria competente per l'emissione della scheda fiscale di ritenuta alla fonte (*Fiche de retenue d'impôt*) e il controllo delle imposte dirette sui salari (`[LU-SRC-26]`).
  - **Direction de la santé (Division de l'inspection sanitaire) & Ligue Médico-Sociale (LMS):** Autorità sanitaria competente per il controllo medico obbligatorio dei cittadini di paesi terzi e lo screening per la tubercolosi (`[LU-SRC-22]`).
  - **Bierger-Center (Lussemburgo Città) e Uffici Comunali di Popolazione:** Sportelli anagrafici comunali competenti per la ricezione della dichiarazione d'arrivo (*Déclaration d'arrivée*) e il rilascio dell'attestato di registrazione per cittadini UE (`[LU-SRC-11]`, `[LU-SRC-12]`).
  - **ITM (Inspection du travail et des mines):** Ispettorato del lavoro preposto alla vigilanza sui distacchi transfrontalieri e al rilascio del *Badge social*.

---

## 2. Onboarding Amministrativo: Il Percorso Integrato a 6 Pilastri

Per evitare paralisi operative, ogni persona che si trasferisce in Lussemburgo deve seguire una precisa sequenza cronologica articolata su 6 pilastri amministrativi:

```
┌─────────────────────────────────────────────────────────────────────────────────┐
│               ROADMAP INTEGRATA DI ONBOARDING (LUSSEMBURGO)                     │
└────────────────────────────────────────┬────────────────────────────────────────┘
                                         │
    ┌────────────────────────────────────┴────────────────────────────────────┐
    ▼                                                                         ▼
[CANDIDATO UE / SEE / SVIZZERA]                           [CANDIDATO DI PAESE TERZO EXTRA-UE]
    │                                                                         │
    ├─ 1. Déclaration d'arrivée (entro 8 giorni)                              ├─ 1. Autorisation de séjour temporaire (da estero)
    │     al Comune di residenza [LU-SRC-11]                                  │     approvata PRIMA dell'ingresso [LU-SRC-01]
    │                                                                         ├─ 2. Visto Nazionale D (se richiesto) [LU-SRC-21]
    ├─ 2. Déclaration d'enregistrement (entro 3 mesi)                         ├─ 3. Déclaration d'arrivée (entro 3 giorni lav.)
    │     rilascio Attestation d'enregistrement [LU-SRC-12]                   │     presso l'amministrazione comunale [LU-SRC-11]
    │                                                                         ├─ 4. Visita Medica + TBC alla LMS (entro 30 gg)
    │                                                                         │     trasmissione a Inspection sanitaire [LU-SRC-22]
    │                                                                         ├─ 5. Richiesta Titre de séjour definitivo (€80)
    │                                                                         │     rilevamento biometrico [LU-SRC-13]
    │                                                                         │
    └────────────────────────────────────┬────────────────────────────────────┘
                                         │
                     ┌───────────────────┴───────────────────┐
                     ▼                                       ▼
          [PILASTRO 4: CCSS / CNS]               [PILASTRO 5: FISCO ACD]
          Dichiarazione d'entrata datore          Emissione Fiche de retenue d'impôt.
          entro 8 gg -> Matricule a 13 cifre.    Attenzione: senza scheda, ritenuta
          Tessera CNS fisica in 3-6 settimane.   forfettaria d'ufficio al 33% [LU-SRC-26]
                     │                                       │
                     └───────────────────┬───────────────────┘
                                         │
                                         ▼
                         [PILASTRO 6: BANCA E TRASPORTI]
                         Apertura conto (POST Luxembourg per base);
                         Trasporti pubblici 100% gratuiti in 2a classe [LU-SRC-29]
```

### Pilastro 1: Déclaration d'Arrivée (Dichiarazione d'Arrivo al Comune)
- **Tempistiche legali perentorie:**
  - **Extra-UE:** Entro **3 giorni lavorativi** (*trois jours ouvrables*) dall'ingresso fisico in Lussemburgo (`[LU-SRC-01]`, art. 40; `[LU-SRC-11]`).
  - **Cittadini UE/SEE/CH:** Entro **8 giorni** dall'arrivo nel comune di residenza abituale (`[LU-SRC-01]`, art. 8; `[LU-SRC-23]`).
- **Dove si fa:** Presso il *Bureau de la population* del comune di dimora (es. *Bierger-Center* in 44, Place Guillaume II a Lussemburgo Città).
- **Documenti obbligatori:** Passaporto/carta d'identità in corso di validità; autorizzazione temporanea di soggiorno ministeriale e visto D (per extra-UE); contratto di locazione registrato conforme alle norme igienico-sanitarie (`[LU-SRC-24]`, `[LU-SRC-25]`) o dichiarazione di alloggio (*accord d'hébergement*) firmata dal proprietario dell'immobile.
- **Costo:** Gratuito (€ 0,00 ex lege) (`[LU-SRC-11]`). Rilascio di una ricevuta timbrata (*récépissé de déclaration d'arrivée*).

### Pilastro 2: Registrazione UE o Richiesta del Titolo Biometrico Extra-UE
- **Cittadini UE (Attestation d'enregistrement):** Domanda da perfezionare entro **3 mesi** dall'arrivo (`[LU-SRC-01]`, art. 8; `[LU-SRC-12]`). Presentando contratto di lavoro (per dipendenti) o prova di iscrizione universitaria + fondi + assicurazione (per studenti), il comune rilascia seduta stante l'*attestation d'enregistrement* cartacea senza scadenza. Tassa: gratuita (€ 0,00).
- **Cittadini Extra-UE (Titre de séjour biometrico):** Entro **3 mesi** dall'arrivo (durata dell'autorizzazione provvisoria), il candidato deve depositare il fascicolo di richiesta formale alla Direction générale de l'immigration (`[LU-SRC-13]`), allegando: copia della dichiarazione d'arrivo comunale, ricevuta del bonifico della tassa statale di **€ 80,00** (`[LU-SRC-21]`) e prova di alloggio. Una volta validato il controllo sanitario, viene convocato per foto e impronte biometriche; la carta plastificata è consegnata entro 5-10 giorni lavorativi.

### Pilastro 3: Controllo Medico Sanitario Obbligatorio (Solo Extra-UE)
- **Natura dell'obbligo:** Indispensabile ex lege per tutti i cittadini di paesi terzi che richiedono un permesso > 3 mesi (`[LU-SRC-01]`, art. 41; `[LU-SRC-22]`).
- **Articolazione in 2 esami coordinati:**
  1. *Visita clinica generale:* Eseguita da un medico autorizzato a esercitare in Lussemburgo (medico generalista o internista). Costo: tariffa convenzionata CNS (~€ 56–€ 65), anticipata dal candidato.
  2. *Dépistage TBC (tubercolosi):* Eseguito mediante radiografia polmonare toracica presso uno dei centri della **Ligue Médico-Sociale (LMS)**. Esame gratuito/sovvenzionato dallo Stato.
- **Trasmissione dei referti:** I medici trasmettono i referti d'ufficio alla **Division de l'inspection sanitaire** (Direction de la santé, Strassen), che convalida l'idoneità ed emette il *certificat médical autorisant le séjour*, inviandolo direttamente alla Direction générale de l'immigration. Senza certificato medico approvato, il titolo di soggiorno è respinto per legge ex art. 41(3).

### Pilastro 4: Previdenza Sociale, Sanità e Matricola a 13 Cifre (CCSS & CNS)
- **Déclaration d'entrée:** Il datore di lavoro deve notificare l'assunzione al CCSS entro **8 giorni** dall'inizio dell'attività tramite il portale telematico SECUline (`[LU-SRC-08]`).
- **Matricule National a 13 cifre:** Il CCSS genera il codice identificativo unico (`AAAA MM GG XXXXX`, formato su data di nascita e 5 caratteri alfanumerici di controllo, `[LU-SRC-23]`) in circa **1–3 settimane**.
- **Tessera sanitaria CNS:** Emessa dalla Caisse nationale de santé e recapitata per posta entro **3–6 settimane**.
- **Gestione sanitaria del "Periodo Ponte" (senza matricola o senza tessera):** Il sistema del *Paiement Immédiat Direct (PID)* non opera in assenza di matricola attiva. Il candidato deve anticipare il 100% delle visite mediche e dei farmaci da prescrizione, conservando i giustificativi originali (*Mémoire d'honoraires acquitté* quietanzati dal medico). A ricezione della matricola, i moduli vanno spediti in busta chiusa a *CNS - Service Remboursements, L-2980 Luxembourg* (spedizione postale gratuita all'interno del paese) per ottenere il rimborso sul proprio conto bancario entro 2–6 settimane (`[LU-SRC-08]`).

### Pilastro 5: Fisco e Scheda Ritenute (ACD - Fiche de Retenue d'Impôt)
- **Emissione automatica:** Una volta acquisita l'affiliazione CCSS, l'ACD (Bureau RTS) genera la scheda fiscale elettronica indicando la classe d'imposta (Classe 1 per celibi/nubili, 1a per famiglie monoparentali, 2 per coniugati) (`[LU-SRC-26]`).
- **LA TRAPPOLA FISCALE DEL 33% FORFETTARIO D'UFFICIO:** Ai sensi degli artt. 138 e 139 della *Loi sur l'impôt sur le revenu (L.I.R.)*, se al momento del calcolo del primo stipendio mensile il datore non dispone della scheda fiscale, è legalmente obbligato ad applicare una **ritenuta d'ufficio forfettaria del 33%** (`[LU-SRC-26]`). Su uno stipendio lordo di € 4.000, ciò provoca un taglio netto immediato di oltre € 850 rispetto alla tassazione progressiva attesa in Classe 1.
- **Rettifica e recupero:** Il datore di lavoro può conguagliare le imposte sulle buste paga successive dell'anno in corso non appena la scheda fiscale è accessibile. In subordine, il contribuente deve presentare domanda di **Décompte annuel (Modèle 163)** all'ACD entro il 31 dicembre dell'anno successivo.

### Pilastro 6: Sistema Bancario e Mobilità
- **Apertura del conto corrente:** Le grandi banche private (BGL BNP Paribas, BIL, Spuerkeess) richiedono rigidi controlli KYC, esigendo un *certificat de résidence* comunale stabile e buste paga locali. **POST Luxembourg (POST Finance)** è il fornitore del servizio bancario universale in virtù della direttiva PAD e della legge 13 giugno 2017: apre conti correnti per nuovi residenti con requisiti minimi (documento e contratto), sebbene con tempistiche di emissione carte e accesso LuxTrust di circa 10–20 giorni lavorativi.
- **Trasporti pubblici 100% gratuiti:** Dal 1° marzo 2020, treni nazionali CFL, Luxtram e autobus urbani (AVL) ed extraurbani (RGTR) sono **interamente gratuiti in 2ª classe** su tutto il territorio nazionale per residenti e turisti, senza biglietto (`[LU-SRC-29]`). La 1ª classe ferroviaria e le linee bus transfrontaliere (*RegioZone*) rimangono a pagamento (€ 40,00/mese abbonamento RegioZone).

---

## 3. Matrice Completa dei 12 Casi d'Uso: UE vs Extra-UE

---

### CASO 1: Lavoro Dipendente Standard (Salarié)
- **Titolo Ufficiale:** *Titre de séjour pour travailleur salarié* (Art. 42 e segg., Loi du 29 août 2008 modifiée, `[LU-SRC-01]`, `[LU-SRC-13]`).
- **Cittadini UE/SEE/CH:** Libero accesso al mercato del lavoro senza test preventivi. Ingresso libero, inizio attività immediato, *Déclaration d'arrivée* entro 8 giorni e *Déclaration d'enregistrement* al comune entro 3 mesi presentando il contratto di lavoro.
- **Cittadini Extra-UE:**
  - *Requisito retributivo minimo:* Stipendio almeno pari al Salaire Social Minimum non qualificato (€ 2.771,33 lordi/mese) o qualificato (€ 3.325,60 lordi/mese) (`[LU-SRC-08]`).
  - *Test del mercato del lavoro ADEM (Riforma Legge 7 agosto 2023, `[LU-SRC-05]`, `[LU-SRC-20]`):*
    1. Il datore dichiara il posto vacante all'ADEM (*déclaration de vacance de poste*).
    2. **Se il profilo rientra nella lista ufficiale dei mestieri in grave carenza (*métiers très en pénurie*, IT, ingegneria, contabilità):** il test di mercato è soppresso; l'ADEM rilascia il *Certificat autorisant l'employeur à recruter un ressortissant de pays tiers* entro **5 giorni lavorativi**.
    3. **Per le professioni ordinarie:** l'ADEM verifica i disoccupati residenti per **7 giorni lavorativi** (anziché le vecchie 3 settimane). Se non vi sono candidati idonei, rilascia il certificato nei successivi 5 giorni lavorativi.
  - *Iter Extra-UE:*
    1. Richiesta di *Autorisation de séjour temporaire* alla Direction générale de l'immigration dall'estero con certificato ADEM e contratto firmato;
    2. Rilascio Visto D consolare (€ 50,00, `[LU-SRC-21]`);
    3. Arrivo in Lussemburgo e Déclaration d'arrivée al comune entro 3 giorni lavorativi (`[LU-SRC-11]`);
    4. Visita medica e screening TBC alla LMS entro 30 giorni (`[LU-SRC-22]`);
    5. Emissione del *Titre de séjour* biometrico (tassa € 80,00; durata iniziale 1 anno settoriale, rinnovabile per 3 anni multisettoriale).

---

### CASO 2: Lavoro Altamente Qualificato (Carta Blu UE / Carte Bleue Européenne)
- **Titolo Ufficiale:** *Titre de séjour « Carte bleue européenne »* (Art. 45 e segg., Loi du 29 août 2008 modifiée dalla *Loi du 4 juin 2024*, `[LU-SRC-01]`, `[LU-SRC-02]`, `[LU-SRC-14]`).
- **Cittadini UE/SEE/CH:** Inapplicabile (hanno già piena libertà di stabilimento e lavoro incondizionato).
- **Cittadini Extra-UE (Disciplina 2024–2026):**
  - *Contratto di lavoro:* Durata minima ridotta a **6 mesi** (`[LU-SRC-02]`).
  - *Qualifica elevata:* Titolo universitario di livello superiore (laurea almeno triennale / EQF 6+) o esperienza professionale comprovata di livello superiore di almeno 3 anni maturata nei 7 anni precedenti (per quadri e specialisti ICT, `[LU-SRC-03]`).
  - *Soglia retributiva annuale 2026 (`[LU-SRC-04]`):*
    - **Soglia standard (1,0x salario lordo medio):** **€ 65.652,00 lordi/anno** (€ 5.471,00/mese).
    - **Soglia professioni in carenza (*métiers en pénurie* - gruppi ISCO 1 e 2):** **€ 47.174,00 lordi/anno** (€ 3.931,17/mese).
  - *Vantaggi determinanti:*
    - **Esenzione totale dal test del mercato del lavoro ADEM** (`[LU-SRC-02]`);
    - Durata del titolo: **4 anni** (o durata del contratto + 3 mesi se inferiore);
    - **Ricongiungimento familiare immediato e contestuale** per il coniuge (senza periodo di attesa di 1 anno, con diritto immediato al lavoro per il familiare);
    - Mobilità intra-UE agevolata dopo 12 mesi di soggiorno regolare.
  - *Iter:* Procedura accelerata AST prima dell'ingresso -> Visto D (€ 50,00) -> Déclaration d'arrivée (3 gg) -> Visita medica -> Rilascio carta biometrica "Carte bleue européenne" (€ 80,00).

---

### CASO 3: Tirocinio / Internship (Stagiaire)
- **Titolo Ufficiale:** *Titre de séjour en qualité de stagiaire* (Art. 61 e segg., Loi du 29 août 2008; Code du travail artt. L. 151-1 e segg., `[LU-SRC-01]`, `[LU-SRC-07]`, `[LU-SRC-17]`).
- **Classificazione Contrattuale e Compensi Minimi Obbligatori (Indice 992,24):**
  1. *Stage curriculare convenzionato (*Stage sous cursus scolaire/universitaire*):*
     - Tripartito (studente, ateneo/scuola, impresa ospitante). Durata max 6 mesi.
     - Durata < 4 settimane: compenso facoltativo.
     - Durata $\ge$ 4 settimane: **almeno il 30% del SSM non qualificato = € 831,40 lordi/mese** (`[LU-SRC-07]`, `[LU-SRC-08]`).
  2. *Stage pratico extracurriculare post-laurea (*Stage de pratique professionnelle*):*
     - Riservato a chi ha completato un percorso universitario da meno di 2 anni.
     - Da 4 a 12 settimane: **almeno il 40% del SSM non qualificato = € 1.108,53 lordi/mese**.
     - Oltre le 12 settimane (dalla 13ª alla 26ª settimana): **almeno il 75% del SSM non qualificato = € 2.078,50 lordi/mese** (se titolare di Master Bac+5, indicizzato al SSM qualificato a **€ 2.494,19 lordi/mese**).
- **Cittadini UE:** Ingresso libero; stipula della convenzione conforme; registrazione al comune se stage > 3 mesi (*Attestation d'enregistrement*, provando alloggio e TEAM/EHIC).
- **Cittadini Extra-UE:**
  - Richiesta dell'*Autorisation de séjour en qualité de stagiaire* dall'estero allegando convenzione di tirocinio approvata e prova di risorse integrative (se l'indennità è inferiore al SSM, integrare con fondi propri o borsa fino a raggiungere il minimo legale).
  - Visto D (€ 50,00) -> Déclaration d'arrivée entro 3 giorni -> Visita medica -> Titolo di soggiorno biometrico "stagiaire" (€ 80,00; durata pari allo stage, max 6 mesi).

---

### CASO 4: Studio Universitario (Bachelor / Master - Étudiant)
- **Titolo Ufficiale:** *Titre de séjour pour étudiant* (Art. 56 e segg., Loi du 29 août 2008 modifiée, `[LU-SRC-01]`, `[LU-SRC-15]`).
- **Cittadini UE:** Iscrizione accademica (es. Università del Lussemburgo); ingresso libero; Déclaration d'arrivée entro 8 giorni; registrazione entro 3 mesi al comune esibendo certificato di iscrizione, tessera sanitaria europea (TEAM) e dichiarazione di sussistenza. Nessun limite per impieghi part-time in parallelo.
- **Cittadini Extra-UE:**
  - *Iscrizione:* Ammissione formale a tempo pieno presso un istituto d'insegnamento superiore autorizzato in Lussemburgo.
  - *Requisito economico (Proof of Funds al 2026, `[LU-SRC-10]`, `[LU-SRC-15]`):*
    - Obbligo di dimostrare disponibilità finanziaria pari ad **almeno l'80% del REVIS (Revenu d'Inclusion Sociale) per persona sola**:
      $$\mathbf{€\ 1.555,52\ lordi/mese}\quad (\mathbf{€\ 18.666,24\ all'anno\ per\ 12\ mesi})$$
    - Modalità ammesse: conto corrente con saldo bloccato o borsa di studio formale, oppure atto di fideiussione (*Engagement de prise en charge*, art. 4) sottoscritto da garante solvibile residente in Lussemburgo/UE o genitore con ampie liquidità documentate.
  - *Lavoro durante gli studi (Extra-UE, `[LU-SRC-01]`, art. 57(3)):*
    - **Massimo 15 ore medie settimanali calcolate su base mensile** (massimo 60 ore/mese) durante il periodo delle lezioni.
    - Durante le vacanze accademiche (*congés scolaires*): autorizzato il lavoro a tempo pieno (**40 ore/settimana**).
  - *Iter:* AST studente prima dell'ingresso -> Visto D (€ 50,00) -> Déclaration d'arrivée (3 gg) -> Visita medica LMS -> Titolo di soggiorno studente (€ 80,00, validità 1 anno rinnovabile previa progressione accademica).

---

### CASO 5: Dottorato di Ricerca (Doctorant)
- **Titolo Ufficiale:** *Doctorant sous statut étudiant* (Art. 56) vs *Doctorant-chercheur salarié* (Art. 65, `[LU-SRC-01]`).
- **Dicotomia di Status (Fondamentale):**
  1. *Dottorando con borsa estera / non dipendente (Statuto Étudiant):*
     - Inquadrato con permesso di soggiorno per motivi di studio.
     - Soglia di fondi 80% REVIS (€ 1.555,52/mese); limite accessorio di 15 h/settimana per attività remunerate esterne; nessuna affiliazione pensionistica automatica CCSS; nessun diritto al ricongiungimento familiare immediato.
  2. *Dottorando assunto con contratto di lavoro subordinato (Statuto Chercheur):*
     - Assunto dall'Université du Luxembourg o istituti pubblici (LIST, LIH, LISER, FNR-AFR) con contratto CDD di 3-4 anni.
     - Stipula una formale **Convention d'accueil d'un chercheur** ex Direttiva 2016/801.
     - Retribuzione ordinariamente superiore al SSM qualificato (€ 3.325,60/mese, tipicamente € 3.500–€ 4.500 lordi/mese).
     - **Titre de séjour per "Chercheur":** Esenzione totale dal test ADEM, piena affiliazione CCSS (pensione, disoccupazione, malattia), **ricongiungimento familiare immediato senza attesa** e accesso al titolo post-studio di 12 mesi per ricerca lavoro (`[LU-SRC-16]`, `[LU-SRC-18]`).

---

### CASO 6: Tesi e Ricerca all'Estero (Chercheur con Convention d'Accueil)
- **Titolo Ufficiale:** *Titre de séjour pour chercheur* (Art. 65 e segg., Loi du 29 août 2008 modifiée, Direttiva UE 2016/801, `[LU-SRC-01]`, `[LU-SRC-06]`, `[LU-SRC-16]`).
- **Cittadini UE:** Accesso libero; stipula della convenzione di accoglienza; registrazione al comune entro 3 mesi.
- **Cittadini Extra-UE:**
  - *Requisito cardine:* Sottoscrizione di una *Convention d'accueil* con un organismo di ricerca accreditato in Lussemburgo dal Ministero della Ricerca.
  - La convenzione include l'impegno finanziario dell'ente ad assumere le spese di soggiorno e di eventuale allontanamento fino a 6 mesi dopo la conclusione del progetto.
  - Risorse economiche: almeno pari al Salaire Social Minimum qualificato (€ 3.325,60/mese).
  - *Privilegi:* Esenzione dal test ADEM; ricongiungimento familiare immediato per coniuge e figli (con diritto al lavoro); mobilità intra-UE facilitata verso altri centri dell'Unione.
  - *Iter:* AST ricercatore prima dell'arrivo -> Visto D (€ 50,00) -> Déclaration d'arrivée (3 gg) -> Visita medica LMS -> Rilascio Titre de séjour biometrico "chercheur" (€ 80,00).

---

### CASO 7: Erasmus+ e Mobilità Universitaria Intra-UE
- **Titolo Ufficiale:** *Mobilité des étudiants intra-UE* (Art. 58-1 e segg., Loi du 29 août 2008 modifiée, Direttiva UE 2016/801, `[LU-SRC-01]`, `[LU-SRC-06]`).
- **Studenti Cittadini UE:** Mobilità Erasmus standard. Ingresso libero con carta d'identità; tessera sanitaria europea TEAM valida per l'assistenza medica d'urgenza. Se il soggiorno supera i 3 mesi: Déclaration d'enregistrement al comune esibendo contratto didattico Erasmus e attestato di borsa.
- **Studenti Extra-UE residenti in altro Stato UE con permesso studente (es. studente non-UE in Italia che svolge un periodo di scambio a Uni.lu):**
  - **Procedura di Notifica senza Visto Nazionale D:**
    - L'università ospitante lussemburghese trasmette una **Notification de mobilité** alla Direction générale de l'immigration prima dell'ingresso.
    - Documenti: copia del permesso di soggiorno studente dello Stato UE di provenienza (valido per l'intera durata della mobilità), convenzione Erasmus, prova di fondi (80% REVIS = € 1.555,52/mese), assicurazione sanitaria.
    - Se l'immigrazione non solleva obiezioni entro 30 giorni, lo studente può entrare liberamente per un periodo fino a **360 giorni**.
    - All'arrivo: Déclaration d'arrivée entro 3 giorni lavorativi al comune di dimora. Nessun obbligo di visto D né di emissione di nuovo titolo di soggiorno (salvo rilascio facoltativo del tesserino "mobilité étudiant").

---

### CASO 8: Post-Studio / Ricerca Lavoro o Creazione d'Impresa
- **Titolo Ufficiale:** *Titre de séjour pour recherche d'emploi ou création d'entreprise après les études* (Art. 59 e Art. 67-4, Loi du 29 août 2008 modifiée, `[LU-SRC-01]`, `[LU-SRC-05]`, `[LU-SRC-18]`).
- **Cittadini UE:** Diritto incondizionato di permanenza e ricerca lavoro; registrazione al comune come *demandeur d'emploi* ed eventuale iscrizione all'ADEM.
- **Cittadini Extra-UE (Riforma Legge 7 agosto 2023, `[LU-SRC-05]`):**
  - *Aventi diritto:* Neolaureati che abbiano conseguito con successo un **Master (EQF 7)** o un **Dottorato (PhD, EQF 8)** presso un'istituzione universitaria lussemburghese, o ricercatori che abbiano concluso la convenzione d'accoglienza.
  - *Durata del titolo:* **12 mesi non rinnovabili** (la riforma del 2023 ha innalzato la durata dai vecchi 9 mesi a un anno pieno).
  - *Termine di presentazione perentorio:* La domanda deve essere presentata alla Direction générale de l'immigration **almeno 30 giorni prima della scadenza del titolo di soggiorno per studenti in corso**. Presentare la domanda a titolo scaduto determina la decadenza dal diritto.
  - *Risorse finanziarie:* Almeno l'**80% del REVIS = € 1.555,52/mese** per i 12 mesi (€ 18.666,24), oltre ad alloggio e assicurazione.
  - **L'ENORME VANTAGGIO COMPETITIVO (ESENZIONE TEST ADEM EX ART. 59):** Non appena il neolaureato trova un'offerta di lavoro coerente con i propri studi o avvia un'impresa durante i 12 mesi, richiede il cambio di statuto a lavoratore dipendente. Il datore di lavoro **È TOTALMENTE ESENTE DAL TEST DEL MERCATO DEL LAVORO ADEM** e non deve attendere né richiedere il certificato di manodopera locale!
  - *Vincolo retributivo:* Il contratto deve prevedere una retribuzione almeno pari al Salaire Social Minimum qualificato (€ 3.325,60/mese, `[LU-SRC-08]`).

---

### CASO 9: Working Holiday / Vacances-Travail (Accordi Bilaterali)
- **Titolo Ufficiale:** *Programme Vacances-Travail (PVT) / Visa Vacances-Travail* (`[LU-SRC-19]`).
- **Accordi Bilaterali Attivi (7 Paesi Partner):**
  - **Australia:** 18 – 30 anni
  - **Nuova Zelanda:** 18 – 30 anni
  - **Giappone:** 18 – 30 anni
  - **Canada:** 18 – 35 anni
  - **Cile:** 18 – 35 anni
  - **Corea del Sud:** 18 – 35 anni
  - **Taiwan:** 18 – 35 anni
- **Posizione dei Cittadini Italiani ed Europei:**
  - **I cittadini italiani/UE NON hanno accesso né necessità del Working Holiday per il Lussemburgo.** In virtù dei Trattati UE, godono del diritto primario e illimitato di lavorare, viaggiare e risiedere a qualsiasi età, senza quote né limiti temporali.
- **Disciplina per i Giovani dei 7 Paesi Terzi in Lussemburgo:**
  - Visto D speciale valido 12 mesi non rinnovabile; finalità prevalente turistico-culturale; lavoro subordinato consentito a titolo accessorio per finanziare il soggiorno; contingenti annuali limitati per nazionalità; alloggio, risorse minime sul conto e assicurazione medica/rimpatrio obbligatori.

---

### CASO 10: Lavoratori Frontalieri (Frontaliers da Francia, Belgio, Germania)
- **Quadro Normativo:** Regolamento (CE) n. 883/2004; Accordo quadro europeo sul telelavoro del 1° luglio 2023 (`[LU-SRC-28]`); Convenzioni fiscali bilaterali (`[LU-SRC-27]`).
- **Rilevanza:** Oltre 237.000 lavoratori (il 47% dell'intera forza lavoro del Paese) risiedono all'estero e fanno i pendolari quotidianamente da Francia (~125.000), Germania (~53.000) e Belgio (~52.000).
- **La Doppia Disciplina Transfrontaliera:**
  1. **FISCALITÀ: LA SOGLIA DEI 34 GIORNI E IL "CLIFF EFFECT" (`[LU-SRC-27]`):**
     - Le convenzioni fiscali stabiliscono una soglia uniforme di tolleranza di **34 giorni all'anno** di lavoro svolto fuori dal Lussemburgo (telelavoro dal domicilio o missioni estere).
     - Fino a 34 giorni, il reddito è tassato al 100% in Lussemburgo con trattenuta d'imposta alla fonte (*fiche de retenue*).
     - **TRACOLLO FISCALE (FALAISE EFFECT):** Se il frontaliere lavora all'estero anche solo per il **35° giorno**, **decade l'intera franchigia sin dal primo giorno lavorato all'estero**! Tutte le 35 giornate (e le successive) diventano immediatamente imponibili nello Stato di residenza (Francia, Belgio o Germania), esponendo il lavoratore a pesanti ricalcoli d'imposta e sanzioni. Ogni frazione di giornata (anche poche ore) conta come 1 giorno intero.
  2. **SICUREZZA SOCIALE: ACCORDO QUADRO EUROPEO (SOGLIA 49,9%, `[LU-SRC-28]`):**
     - Dal 1° luglio 2023, l'accordo multilaterale deroga all'art. 16 del Regolamento 883/2004, consentendo ai frontalieri di telelavorare dal proprio domicilio fino a **meno del 50% dell'orario di lavoro complessivo (49,9%)** continuando a rimanere affiliati alla previdenza lussemburghese (CCSS). Il datore richiede il **Certificato A1** telematico al CCSS.
     - *Divergenza Pratica:* Poiché la soglia fiscale è bloccata a 34 giorni (~15% del tempo di lavoro annuo), le aziende applicano nella prassi interna un massimale di telelavoro di 34 giorni/anno, neutralizzando i margini della norma previdenziale.
  3. **Copertura Sanitaria Bilaterale:** Affiliazione CCSS lussemburghese + rilascio del **Formulario S1** per l'iscrizione alla cassa mutua del paese di residenza (CPAM in Francia, Mutuelle in Belgio, Krankenkasse in Germania).

---

### CASO 11: Ricongiungimento Familiare (Regroupement Familial)
- **Titolo Ufficiale:** *Titre de séjour pour membre de famille d'un ressortissant de pays tiers* (Artt. 68-74) vs *Carte de séjour de membre de famille d'un citoyen de l'Union* (Artt. 6-7, `[LU-SRC-01]`).
- **Sponsor Cittadino UE (es. italiano residente):**
  - Nessun periodo di attesa di 1 anno. Il familiare (anche extra-UE) richiede la *Carte de séjour de membre de famille d'un citoyen de l'Union* (durata 5 anni, rilascio entro 6 mesi con ricevuta provvisoria di deposito); diritto immediato al lavoro.
- **Sponsor Cittadino Extra-UE:**
  - *Regola Ordinaria:* Lo sponsor deve risiedere regolarmente in Lussemburgo da **almeno 1 anno (12 mesi)** con titolo di soggiorno valido almeno 1 anno e prospettive fondate di rinnovo.
  - **ECCEZIONE DECISIVA (AZZERAMENTO TEMPO DI ATTESA):** Il periodo di attesa di 1 anno è **completamente soppresso** per i familiari di:
    - Titolari di **Carta Blu UE (Carte bleue européenne, `[LU-SRC-02]`)**;
    - **Ricercatori accreditati (Chercheurs, `[LU-SRC-01]`, art. 65)**;
    - Quadri/specialisti trasferiti intra-societari (ICT).
  - *Requisiti sostanziali sponsor:* Alloggio idoneo conforme ai regolamenti comunali di salubrità (`[LU-SRC-25]`); risorse stabili e regolari pari ad almeno il Salaire Social Minimum non qualificato (€ 2.771,33/mese, `[LU-SRC-08]`), maggiorato in base al numero di familiari a carico; assicurazione sanitaria per tutti i componenti.
  - *Iter:* Domanda preventiva di AST per ricongiungimento dall'estero -> Visto D (€ 50,00) -> Déclaration d'arrivée (3 gg) -> Visita medica LMS -> Titolo biometrico per membro di famiglia (€ 80,00; conferisce pieno diritto al lavoro).

---

### CASO 12: Soggiorni Brevi e Visite d'Affari (< 90 Giorni)
- **Quadro Normativo:** Codice Frontiere Schengen; Loi du 29 août 2008 modifiée, artt. 34 e segg. (`[LU-SRC-01]`, `[LU-SRC-30]`).
- **Cittadini UE/SEE/CH:** Piena libertà di circolazione con documento d'identità; nessuna formalità anagrafica se il soggiorno è inferiore a 3 mesi.
- **Cittadini Extra-UE:** Soggiorno max di 90 giorni su qualsiasi periodo mobile di 180 giorni nello spazio Schengen. Nazionalità esenti da visto: ingresso senza visto Schengen; nazionalità soggette a visto: Visto Schengen di tipo C (€ 90,00).
- **Distinzione Operativa tra Affari e Lavoro Produttivo:**
  - *Attività di Business ammesse:* Partecipazione a riunioni, negoziati commerciali, conferenze, fiere, visite di audit interne tra società dello stesso gruppo.
  - *Lavoro Operativo / Prestazioni di Servizio:* Vietato senza formale autorizzazione. L'impresa estera che distacca temporaneamente dipendenti in Lussemburgo per eseguire una commessa deve effettuare la dichiarazione preventiva di distacco sul portale dell'**ITM (Inspection du travail et des mines)**, ottenere il **Badge social** per ciascun addetto e garantire il rispetto delle condizioni di lavoro e del salario minimo lussemburghese.
  - **DIVIETO ASSOLUTO DI CONVERSIONE IN LOCO (Art. 39(1), `[LU-SRC-01]`):** Un cittadino di paese terzo entrato per soggiorno breve o affari **non può in alcun caso richiedere un permesso di soggiorno per lavoro subordinato, studio o tirocinio rimanendo in Lussemburgo**. La domanda deve essere introdotta e approvata favorevolmente prima dell'ingresso, a pena di inammissibilità insanabile.

---

## 4. Quadro Economico, Costi, Parametri Volatili e Tempistiche al 05/10/2026

### 4.1 Riepilogo Parametri Economici e Soglie Legali

| Parametro / Voce di Spesa | Valore Ufficiale (05/10/2026) | Base Giuridica / Ente | Note Operative & Validità |
| :--- | :--- | :--- | :--- |
| **Indice mobile salari** | **992,24** | CCSS / STATEC (`[LU-SRC-08]`, `[LU-SRC-09]`) | In vigore dal 1° giugno 2026 (+2,5% tranche indiciaire). |
| **Salaire Social Minimum (Non qualificato)** | **€ 2.771,33 lordi/mese**<br>(€ 33.255,96 lordi/anno) | Art. L. 222-1 Code du travail (`[LU-SRC-07]`, `[LU-SRC-08]`) | Base di calcolo minima per lavoratori subordinati maggiorenni. |
| **Salaire Social Minimum (Qualificato)** | **€ 3.325,60 lordi/mese**<br>(€ 39.907,20 lordi/anno) | Art. L. 222-4 Code du travail (+20% del SSM non qualificato) | Richiesto per titoli post-studio art. 59, ricercatori e tecnici diplomati. |
| **Soglia Carta Blu UE (Standard 1,0x)** | **€ 65.652,00 lordi/anno**<br>(€ 5.471,00 lordi/mese) | Règl. min. 23/02/2026 (`[LU-SRC-04]`, in vigore 03/03/2026) | 1,0x salario annuo lordo medio; esenzione test del mercato ADEM. |
| **Soglia Carta Blu UE (Métiers en pénurie)** | **€ 47.174,00 lordi/anno**<br>(€ 3.931,17 lordi/mese) | Règl. min. 23/02/2026 (`[LU-SRC-04]`) | Gruppi ISCO 1 e 2 in grave penuria (IT, ingegneria, sanità). |
| **Fondi Studenti e Post-Studio (80% REVIS)** | **€ 1.555,52 lordi/mese**<br>(€ 18.666,24 all'anno) | FNS / Guichet.lu (`[LU-SRC-10]`, `[LU-SRC-15]`) | 80% del REVIS persona sola (€ 1.944,40/mese a indice 992,24). |
| **Indennità Stage curriculare $\ge$ 4 sett.** | **€ 831,40 lordi/mese** (minimo) | Art. L. 152-8 Code du travail (30% SSM non qualificato, `[LU-SRC-07]`) | Obbligatoria per stage universitari/scolastici di durata $\ge$ 4 settimane. |
| **Indennità Stage pratico post-laurea** | **€ 1.108,53** (sett. 4-12, 40% SSM)<br>**€ 2.078,50** (sett. 13-26, 75% SSM) | Art. L. 152-9 Code du travail (`[LU-SRC-07]`) | Per laureati da meno di 2 anni (Master Bac+5: 75% SSMQ = € 2.494,19). |
| **Tassa Visto Nazionale D (Consolato)** | **€ 50,00** | MAEE / Tarifs chancellerie (`[LU-SRC-21]`) | Non rimborsabile; dovuta per ingressi di lungo soggiorno extra-UE. |
| **Tassa rilascio Titre de séjour** | **€ 80,00** | Direction générale de l'immigration (`[LU-SRC-13]`, `[LU-SRC-21]`) | Bonifico bancario su conto CCPLLULL prima della biometria. |
| **Tasse comunali anagrafiche** | **€ 0,00** (gratuito) | Loi du 19 juin 2013 (`[LU-SRC-11]`, `[LU-SRC-23]`) | Déclaration d'arrivée e attestation d'enregistrement gratuite ex lege. |
| **Visita medica obbligatoria extra-UE** | **€ 56,00 – € 65,00** (medico)<br>€ 0,00 (dépistage TBC presso LMS) | Direction de la santé (`[LU-SRC-22]`) | Visita clinica rimborsabile parzialmente all'88% dalla CNS post-matricola. |
| **Sussistenza Soggiorno Breve (Schengen)** | **€ 50,00 / giorno** (min. € 500) | Notifica Schengen DG HOME (`[LU-SRC-30]`) | Mezzi di sussistenza per soggiorni turistici/affari senza alloggio prepagato. |

### 4.2 Tempi di Processing: Ufficiali di Legge vs Reali Riscontrati

```
┌───────────────────────────────────────────────────────────────────────────────────────┐
│              TEMPI DI PROCESSING: NORMA DI LEGGE VS REALTÀ SUL CAMPO                  │
├──────────────────────────────────────┬───────────────────────┬────────────────────────┤
│ Fase Procedurale                     │ Termine di Legge      │ Tempi Reali Riscontrati│
├──────────────────────────────────────┼───────────────────────┼────────────────────────┤
│ Test Mercato ADEM (Penuria)          │ 5 giorni lavorativi   │ 5 – 7 giorni lavorativi│
│ Test Mercato ADEM (Ordinario)        │ 7 giorni lavorativi   │ 2 – 3 settimane        │
│ Autorisation de séjour (Salarié)     │ 3 mesi (90 giorni)    │ 7 – 12 settimane       │
│ Autorisation de séjour (Carta Blu)   │ 90 giorni (priorità)  │ 4 – 6 settimane        │
│ Rilascio Visto D consolare all'estero│ 15 – 30 giorni        │ 2 – 3 settimane        │
│ Déclaration d'arrivée comunale       │ 3 gg lav. (8 gg UE)   │ Immediata allo sportello│
│ Visita medica e screening TBC LMS    │ Entro 3 mesi          │ 1 – 3 settimane        │
│ Validazione Inspection sanitaire     │ N.D.                  │ 1 – 2 settimane        │
│ Rilascio carta biometrica definitiva │ N.D.                  │ 5 – 10 giorni lavorativi│
│ TEMPO TOTALE END-TO-END (Salarié)    │ ~5 – 6 mesi teorici   │ 3 – 4,5 mesi effettivi │
│ TEMPO TOTALE END-TO-END (Carta Blu)  │ ~3 – 4 mesi teorici   │ 2,5 – 3,5 mesi         │
└──────────────────────────────────────┴───────────────────────┴────────────────────────┘
```

---

## 5. Realtà Pratica, Friczioni Burocratiche e Trappole Red Team

### 5.1 Il Blocco Circolare dell'Alloggio e dell'Anagrafe (The Housing Trap)
- **La crisi dell'alloggio e i costi:** Un monolocale a Lussemburgo Città costa tra € 1.400 e € 1.750/mese + spese; un appartamento con 1 camera tra € 1.850 e € 2.300/mese + € 250–€ 350 di spese accessorie. Proprietari e agenzie esigono uno stipendio netto pari a **3 volte il canone** ed escludono profili con periodo di prova (*période d'essai*) in corso.
- **La Riforma del Bail à Loyer (Loi du 23 juillet 2024, in vigore dal 01/08/2024, `[LU-SRC-24]`):**
  - Garanzia locativa (*caution*) **plafonata per legge a massimo 2 mesi di affitto** escluse spese (in precedenza 3 mesi).
  - Spese di agenzia immobiliare (*frais d'agence*) ripartite obbligatoriamente **50% a carico del locatore e 50% a carico del locatario** (in precedenza 100% all'inquilino).
  - Contratto scritto obbligatorio (*bail écrit obligatoire*) e formalizzazione del *Pacte de colocation*.
- **Perché Airbnb e Hotel rifiutano la Déclaration d'arrivée:** Le strutture ricettive brevi sono censite ad uso commerciale/turistico. Autorizzare l'iscrizione anagrafica comporterebbe la riqualificazione dell'immobile a destinazione residenziale stabile con perdita di benefici fiscali, violazione dei regolamenti condominiali e applicazione delle rigide tutele contro lo sfratto.
- **Controlli di Abitabilità Comunale (Loi du 20 décembre 2019, `[LU-SRC-25]`):** Minimo **9 m² di superficie per occupante** nelle stanze da letto; massimo 2 adulti per camera. Se un alloggio ospita più persone del consentito, il sistema informatico anagrafico del *Bierger-Center* blocca l'iscrizione.
- **La Truffa della Domiciliazione Fittizia e Sanzioni Penali (Art. 141, `[LU-SRC-01]`):** Accettare camere "sans domiciliation" o farsi domiciliare fittiziamente da terzi espone a verifiche a sorpresa della *Police grand-ducale*. La falsa dichiarazione anagrafica è punita con la radiazione d'ufficio, la revoca del titolo di soggiorno, l'espulsione e la reclusione **da 1 mese a 3 anni** oltre a un'ammenda da **€ 251 a € 12.500**.

### 5.2 Il Divieto Assoluto di Regolarizzazione in Loco (Art. 39(1), `[LU-SRC-01]`)
- **La Trappola Visa-Free / Visto C:** Cittadini extra-UE che entrano in esenzione visto per soggiorni brevi (es. UK, USA, Canada, Australia) **non possono richiedere un permesso di soggiorno direttamente sul territorio lussemburghese**. L'istanza è dichiarata inammissibile d'ufficio ex art. 39(1).
- **Le Conseguenze:** Rigetto *de plano*; allo scadere dei 90 giorni Schengen scatta lo stato di clandestinità con emissione di una *Décision de retour* e di un *Ordre de quitter le territoire (OQT)* accompagnato da un divieto di ingresso fino a **5 anni registrato nel SIS II** (`[LU-SRC-01]`, artt. 100, 111).
- **Regola Aurea:** La domanda di *Autorisation de séjour temporaire* deve essere depositata e formalmente approvata dalla Direction générale de l'immigration **prima** che il candidato faccia ingresso sul territorio granducale.

### 5.3 Friczioni della Sanità e Trattenuta Fiscale d'Ufficio nel Primo Mese
- **Periodo Ponte Sanitario:** Tra l'ingresso al lavoro e la ricezione del Matricule a 13 cifre intercorrono 1–3 settimane (e ulteriori 2–4 settimane per la carta CNS fisica). Il candidato deve pagare integralmente di tasca propria visite e farmaci, conservando i *Mémoires d'honoraires* timbrati per richiedere il rimborso cartaceo retroattivo alla CNS non appena noto il matricule.
- **Imposizione forfettaria al 33% (Payroll Shock, `[LU-SRC-26]`):** La mancata disponibilità della *Fiche de retenue d'impôt* al primo ciclo di busta paga impone al datore la ritenuta d'ufficio del 33%.
- **Cuscinetto di Liquidità per il Mese 1:** Si raccomanda a ogni nuovo assunto di disporre di una riserva liquida iniziale di almeno **€ 6.000 – € 7.000** per assorbire simultaneamente: canone del primo mese + 2 mesi cauzione + 50% spese agenzia + ritenuta fiscale d'ufficio al 33% + spese sanitarie anticipate.

---

## 6. Liste di Controllo Documentali e Operative per Caso

### Checklist 1: Lavoratore Subordinato Extra-UE (Salarié)
1. **Fase 1 (Dall'Estero):**
   - [ ] Certificato ADEM rilasciato al datore di lavoro (`[LU-SRC-20]`);
   - [ ] Contratto di lavoro firmato (retribuzione $\ge$ SSM non-qualifié € 2.771,33 o qualifié € 3.325,60);
   - [ ] Copia integrale del passaporto in corso di validità;
   - [ ] Estratto del casellario giudiziale emesso da meno di 3 mesi, con **Apostille** dell'Aia e traduzione giurata in FR/DE/EN (`[LU-SRC-01]`, art. 38);
   - [ ] Curriculum vitae e copie autenticate dei titoli di studio/diplomi;
   - [ ] Invio del fascicolo alla Direction générale de l'immigration e ottenimento dell'*Autorisation de séjour temporaire* (validità 90 giorni);
   - [ ] Rilascio del Visto Nazionale D presso il consolato competente (€ 50,00, `[LU-SRC-21]`).
2. **Fase 2 (In Lussemburgo):**
   - [ ] Déclaration d'arrivée al comune di residenza entro **3 giorni lavorativi** con passaporto, visto D e contratto di locazione (`[LU-SRC-11]`);
   - [ ] Visita medica presso medico autorizzato e radiografia TBC presso la Ligue Médico-Sociale (`[LU-SRC-22]`);
   - [ ] Bonifico di **€ 80,00** su conto CCPLLULL per la tassa del titolo di soggiorno (`[LU-SRC-21]`);
   - [ ] Convocazione biometrica (foto + impronte) alla Direction de l'immigration e ritiro della carta plastificata;
   - [ ] Notifica di assunzione CCSS entro 8 giorni da parte del datore e generazione del Matricule a 13 cifre (`[LU-SRC-08]`).

### Checklist 2: Carta Blu UE Extra-UE (Carte Bleue Européenne)
- [ ] Contratto di lavoro di durata minima di **almeno 6 mesi** (`[LU-SRC-02]`);
- [ ] Retribuzione annua lorda pari ad almeno **€ 65.652,00** (o € 47.174,00 per professioni in penuria ISCO 1-2, `[LU-SRC-04]`);
- [ ] Diploma di laurea almeno triennale (EQF 6+) o prova di 3 anni di esperienza professionale qualificata (specialisti IT);
- [ ] Casellario giudiziale (< 3 mesi) con Apostille e traduzione giurata;
- [ ] AST Carta Blu (istruttoria prioritaria senza test ADEM) -> Visto D (€ 50,00) -> Déclaration d'arrivée (3 gg) -> Visita medica LMS -> Carta biometrica di 4 anni (€ 80,00).

### Checklist 3: Studente Extra-UE (Bachelor / Master)
- [ ] Lettera di ammissione definitiva a tempo pieno presso l'Università del Lussemburgo o istituto accreditato;
- [ ] Prova di mezzi finanziari: disponibilità di almeno **€ 1.555,52 al mese** (€ 18.666,24/anno, pari all'80% del REVIS, `[LU-SRC-10]`, `[LU-SRC-15]`) tramite conto bancario bloccato, borsa di studio o presa in carico (*Engagement de prise en charge*, art. 4);
- [ ] Contratto di alloggio o attestazione di alloggio universitario;
- [ ] Copertura assicurativa sanitaria;
- [ ] Casellario giudiziale (< 3 mesi) legalizzato/apostillato;
- [ ] AST studente -> Visto D (€ 50,00) -> Déclaration d'arrivée (3 gg) -> Controllo medico LMS -> Titolo biometrico studente annuale (€ 80,00).

### Checklist 4: Cittadino UE / Italiano (Lavoro o Studio)
- [ ] Carta d'identità o passaporto UE valido;
- [ ] Contratto di lavoro firmato (per salariati) o certificato di iscrizione accademica + TEAM + dichiarazione fondi (per studenti);
- [ ] Contratto di locazione registrato conforme alle norme igienico-sanitarie (`[LU-SRC-24]`, `[LU-SRC-25]`);
- [ ] **Déclaration d'arrivée al comune entro 8 giorni** dall'insediamento (`[LU-SRC-11]`);
- [ ] **Déclaration d'enregistrement al comune entro 3 mesi** e ritiro dell'*Attestation d'enregistrement* gratuita a tempo indeterminato (`[LU-SRC-12]`);
- [ ] Affiliazione CCSS da parte del datore (per lavoratori) con rilascio del Matricule a 13 cifre e tessera CNS (`[LU-SRC-08]`).

---
*Documento ufficiale consolidato conforme al protocollo di verifica Fase 5 del Council di verifica immigrazione.*
