---
country: "Canada"
country_it: "Canada"
iso_code: "CA"
last_verified: "2026-10-05"
review_by: "2027-03-31"
version: "1.0.0"
citizenships_covered:
  - "UE / SEE / Svizzera (inclusa specificità italiana e accordi bilaterali)"
  - "Extra-UE (incl. UK, USA, India, Cina, Paesi terzi)"
---

# Guida Ufficiale Visti e Immigrazione: Canada

> **Regola di integrità:** Questo documento è l'UNICA fonte di verità per il Canada all'interno della codebase Admetia. Ogni dato numerico, tariffa, soglia di reddito, termine procedurale o prescrizione amministrativa contiene un riferimento normativo univoco `[CA-SRC-xx]` collegato al registro `canada_sources.md`. Le questioni soggette a variazione prasseologica o in attesa di formalizzazione definitiva confluiscono esclusivamente in `canada_open_questions.md`.

---

## 1. Architettura Giuridica ed Enti Competenti

Il sistema dell'immigrazione canadese è fondato su una giurisdizione concorrente federale e provinciale:

- **Quadro Normativo Cardine:**
  - *Immigration and Refugee Protection Act (SC 2001, c. 27 - IRPA)*: legge organica federale `[CA-SRC-01]`.
  - *Immigration and Refugee Protection Regulations (SOR/2002-227 - IRPR)*: regolamento di esecuzione federale (inclusi artt. 22(2) sul Dual Intent, 52 sulla durata massima legata al passaporto, 186/188 sulle attività esenti da permesso, 186(w) sul maintained status e 204(a) sugli accordi commerciali) `[CA-SRC-01]`.
  - *Service Fees Act*: meccanismo federale di indicizzazione automatica delle tariffe e dei diritti amministrativi `[CA-SRC-10]`.
  - *Accordo CETA (Comprehensive Economic and Trade Agreement)*: capitolo 10 sulla mobilità temporanea di professionisti e investitori tra Unione Europea e Canada `[CA-SRC-14]`.
  - *Loi sur l'immigration au Québec* e regolamenti MIFI: competenze speciali della Provincia del Québec per la selezione di studenti e lavoratori qualificati `[CA-SRC-05]`, `[CA-SRC-19]`.

- **Mappa degli Enti e Portali Istituzionali:**
  - **IRCC (Immigration, Refugees and Citizenship Canada):** ministero federale per la ricezione e la delibera dei permessi di studio, lavoro, visti di residenza temporanea (TRV), eTA e residenza permanente `[CA-SRC-02]`.
  - **CBSA (Canada Border Services Agency):** agenzia delle dogane e frontiere, responsabile dell'esame al Port of Entry (aeroporti e valichi terrestri) e dell'emissione materiale dei permessi cartacei `[CA-SRC-12]`, `[CA-SRC-21]`.
  - **ESDC / Service Canada (Employment and Social Development Canada):** gestione delle autorizzazioni datoriali LMIA (Labour Market Impact Assessment) e rilascio del Social Insurance Number (SIN) `[CA-SRC-13]`, `[CA-SRC-22]`.
  - **CRA (Canada Revenue Agency):** amministrazione fiscale federale per imposte sul reddito, status di residenza fiscale e crediti d'imposta `[CA-SRC-26]`.
  - **Enti Provinciali:** Ministero dell'Immigrazione del Québec (MIFI) per il rilascio del CAQ `[CA-SRC-05]`; Ministry of Labour, Immigration, Training and Skills Development (MLITSD) in Ontario per OINP `[CA-SRC-17]`; WelcomeBC in British Columbia per BC PNP `[CA-SRC-18]`.

---

## 2. Matrice dei Casi d'Uso (Dettaglio Operativo UE vs Extra-UE)

### Caso 1: Lavoro Dipendente Ordinario (Employer-Specific Work Permit via LMIA)

- **Quadro Normativo:** *IRPR* Parte 11 (artt. 197–209) e Temporary Foreign Worker Program (TFWP) `[CA-SRC-01]`, `[CA-SRC-13]`.
- **Cittadini UE / Italiani:** Non godono di esenzione generale dalla valutazione del mercato del lavoro se il profilo non rientra negli accordi CETA o IEC. Il datore di lavoro canadese deve richiedere una LMIA standard dimostrando l'assenza di residenti o cittadini canadesi idonei `[CA-SRC-13]`.
- **Cittadini Extra-UE:** Soggetti al medesimo iter LMIA federale. I richiedenti con passaporto richiedente visto (es. India, Cina) necessitano contestualmente dell'apposizione del TRV (visto adesivo) sul passaporto prima della partenza `[CA-SRC-10]`.
- **Requisiti Datoriali e Soglie Salariali:**
  - Il datore deve versare la tassa di elaborazione LMIA di **CAD 1.000,00** a posizione (non rimborsabile e non addebitabile al lavoratore) `[CA-SRC-13]`.
  - Distinzione tra High-Wage e Low-Wage basata sul salario orario mediano della provincia di destinazione (es. Ontario CAD 28,39/h; Québec CAD 27,47/h; British Columbia CAD 28,85/h) `[CA-SRC-13]`.
  - *Restrizione Low-Wage 2026:* Tetto massimo di lavoratori temporanei Low-Wage ridotto al 10% dell'organico aziendale nelle Census Metropolitan Areas (CMA) con tasso di disoccupazione $\ge 6\%$ (Toronto, Montréal, Calgary) `[CA-SRC-13]`.
- **Costi Amministrativi:**
  - Tassa domanda Work Permit (a carico del candidato): **CAD 155,00** `[CA-SRC-10]`.
  - Biometria (se non fornita negli ultimi 10 anni): **CAD 85,00** `[CA-SRC-10]`.
  - Tassa LMIA (obbligatoriamente a carico datoriale): **CAD 1.000,00** `[CA-SRC-13]`.
- **Tempi di Elaborazione:**
  - Richiesta LMIA datoriale: 6–12 settimane (a seconda della categoria) `[CA-SRC-13]`.
  - Domanda Work Permit: 7–10 settimane dall'Italia/UE; 9–14 settimane da paesi terzi `[CA-SRC-30]`.
- **Errori Comuni & Trappole:**
  - Tentare di rimborsare al datore la tariffa LMIA di CAD 1.000: reato federale ex IRPA che comporta l'annullamento della domanda e sanzioni al datore.
  - Iniziare a lavorare prima dell'emissione formale del permesso cartaceo al Port of Entry da parte della CBSA `[CA-SRC-21]`.

---

### Caso 2: Lavoro Altamente Qualificato / Skilled (Esenzioni LMIA: CETA, Global Talent Stream, Significant Benefit)

- **Quadro Normativo:** *IRPR* art. 204(a) (Accordi internazionali / CETA), art. 205 (Beneficio significativo per il Canada / Codice C10, C12 Intra-Company Transferees) e Global Talent Stream (GTS) `[CA-SRC-01]`, `[CA-SRC-14]`.
- **Canale Preferenziale Cittadini UE (CETA - Art. 10):**
  - I cittadini di stati membri UE (inclusa l'Italia) beneficiano di esenzione totale da LMIA nelle seguenti categorie `[CA-SRC-14]`:
    - **Contractual Services Suppliers (CSS - Codice T47):** professionisti con contratto di fornitura servizi tra azienda UE e cliente canadese; durata fino a 12 mesi (estendibile a 24); laurea e 3 anni di esperienza professionale.
    - **Independent Professionals (IP - Codice T43):** lavoratori autonomi UE con contratto con committente canadese in specifiche discipline professionali; laurea e 6 anni di esperienza.
    - **Intra-Company Transferees (ICT - Codici T41 Dirigenti, T42 Manager, T44 Personale con conoscenze specialistiche):** trasferimento intra-gruppo; assunzione da almeno 1 anno nell'ultimo triennio presso la capogruppo UE.
    - **Investors (Codice T46):** investitori o figure apicali che impiantano o gestiscono un'attività economica con capitale proprio in Canada.
    - **Engineering and Scientific Technologists (Codice T48):** tecnici specializzati con qualifica terziaria.
- **Canale Extra-UE (Global Talent Stream - GTS):**
  - Per candidati extra-UE altamente qualificati (specialmente in discipline STEM, informatica e ingegneria), il GTS offre un iter LMIA accelerato garantito in 10 giorni lavorativi per ruoli ad alta retribuzione o figure sulla Global Talent Occupations List `[CA-SRC-13]`, seguito da emissione del visto in 2 settimane.
- **Adempimenti e Costi:**
  - Procedura su *IRCC Employer Portal*: il datore versa la **Employer Compliance Fee di CAD 230,00** e trasmette l'Offerta di Lavoro numerata (Offer of Employment number, prefisso A#) `[CA-SRC-10]`, `[CA-SRC-14]`.
  - Tassa Work Permit a carico del professionista: **CAD 155,00** `[CA-SRC-10]`.
  - Biometria: **CAD 85,00** `[CA-SRC-10]`.
- **Tempi:** 2–4 settimane per pratiche CETA online complete; 2 settimane per GTS qualificato `[CA-SRC-14]`, `[CA-SRC-30]`.

---

### Caso 3: Internship / Tirocinio (Curriculare vs Extracurriculare)

- **Riforma Cardine del 1° Aprile 2026 (Tirocinio Curriculare Post-Secondario):**
  - **Svolta normativa:** Dal 1° aprile 2026, gli studenti internazionali iscritti a corsi post-secondari presso atenei o college pubblici (DLI) il cui piano di studi prevede un tirocinio curriculare obbligatorio (Co-op) **NON devono più richiedere un Co-op Work Permit separato** `[CA-SRC-07]`.
  - L'autorizzazione al lavoro curriculare è incorporata direttamente nelle condizioni stampate sul retro dello **Study Permit**, a condizione che il tirocinio sia formalmente attestato dalla DLI come parte integrante e non superiore al 50% della durata totale del programma accademico `[CA-SRC-07]`.
  - Risparmio di costi e azzeramento dei tempi morti procedurali: nessuna tassa addizionale (CAD 0,00 aggiuntivi) rispetto allo Study Permit `[CA-SRC-07]`.
- **Tirocinio Extracurriculare o per Studenti Iscritti all'Estero:**
  - Studenti iscritti a università in Italia/UE che desiderano svolgere uno stage o tirocinio in Canada:
    - **IEC International Co-op (Internship):** accessibile per cittadini italiani fino a 35 anni iscritti a un ateneo estero; richiede convenzione di tirocinio tripartita e offerta formale in Canada.
    - Costo: **CAD 184,75** (quota partecipazione IEC) `[CA-SRC-10]`, `[CA-SRC-11]`. Nessuna Open Work Permit fee (trattasi di permesso vincolato a singolo datore).
    - Employer Compliance Fee: versata dal datore ospitante (**CAD 230,00**) `[CA-SRC-14]`.
  - Tirocini extracurriculari non convenzionati: assimilati a lavoro ordinario, soggetti a LMIA salvo eccezioni specifiche di scambio accademico `[CA-SRC-13]`.

---

### Caso 4: Studio Universitario (Bachelor / Master)

- **Quadro Normativo:** *IRPR* Parte 12 (artt. 210–222) `[CA-SRC-01]`, `[CA-SRC-02]`.
- **Tetto Nazionale e Provincial Attestation Letter (PAL):**
  - Per il 2026, il contingente federale è fissato a **408.000 Study Permits** complessivi `[CA-SRC-03]`.
  - **Esenzione PAL per Master e PhD:** Dal 1° gennaio 2026, gli studenti ammessi a corsi di Master (laurea magistrale) e Dottorato (PhD) presso istituzioni pubbliche accreditate sono **esenti dall'obbligo della Provincial Attestation Letter (PAL)** `[CA-SRC-03]`. IRCC ha riservato loro una quota protetta federale di 49.000 permessi `[CA-SRC-03]`.
  - Studenti di corsi Bachelor (triennale) e College: devono obbligatoriamente ottenere la PAL dalla provincia prima di poter inoltrare la domanda di Study Permit `[CA-SRC-03]`.
- **Specificità Provincia del Québec (MIFI):**
  - Prima dello Study Permit federale, è obbligatorio ottenere il **Certificat d'acceptation du Québec (CAQ)** per studi `[CA-SRC-05]`.
  - Tariffa CAQ 2026: **CAD 135,00** `[CA-SRC-05]`, `[CA-SRC-10]`.
  - Tempi di rilascio CAQ: 3–5 settimane tramite portale telematico Arrima `[CA-SRC-05]`.
- **Requisiti Finanziari (Proof of Funds aggiornata al 05/10/2026):**
  - **Fuori dal Québec:** Dal 1° settembre 2026, la soglia di sussistenza minima richiesta (parametrata al 75% del LICO federale) è pari a **CAD 23.448,00 per anno** per richiedente singolo `[CA-SRC-04]`.
  - A tale cifra devono aggiungersi: l'intero importo della retta del primo anno di corso + CAD 2.000,00 forfettari per le spese di viaggio `[CA-SRC-04]`.
  - **In Québec (MIFI):** Soglia per studente singolo fissata a **CAD 24.617,00 per il 2026** (inclusi costi di alloggio, vitto e assicurazione) + retta del primo anno `[CA-SRC-05]`.
- **Diritti Lavorativi Durante lo Studio:**
  - Lavoro off-campus autorizzato fino a un massimo tassativo di **24 ore a settimana** durante i semestri regolari di lezione `[CA-SRC-06]`.
  - Lavoro a tempo pieno illimitato (40+ ore/settimana) consentito esclusivamente durante le pause accademiche calendarizzate ufficiali (vacanze natalizie, break estivo o primaverile) `[CA-SRC-06]`.
  - Violazione del limite delle 24 ore: comporta decadenza immediata dello status di studente, revoca del permesso ed espulsione per inammissibilità ex art. 41 IRPA `[CA-SRC-01]`.
- **Copertura Sanitaria Studentesca:**
  - **Ontario:** Esclusione assoluta da OHIP. Adesione obbligatoria al piano universitario privato **UHIP (University Health Insurance Plan)** con addebito diretto sulle tasse universitarie: **CAD 948,00 per anno** (tariffa 2026/27) `[CA-SRC-23]`.
  - **British Columbia:** Iscrizione obbligatoria al Medical Services Plan (MSP) dopo un periodo di carenza di 3 mesi; International Student Health Fee fissata a **CAD 75,00 al mese** `[CA-SRC-24]`.
  - **Québec:** L'Italia **NON dispone di accordo bilaterale di reciprocità per studenti** con il Québec (a differenza di Francia o Belgio) `[CA-SRC-25]`. Lo studente italiano non può iscriversi gratuitamente alla RAMQ e deve pagare l'assicurazione privata obbligatoria dell'ateneo (CAD 900,00–1.200,00/anno) `[CA-SRC-25]`.
- **Costi e Tempi:**
  - Costo Study Permit: **CAD 150,00** `[CA-SRC-10]`.
  - Tempi di elaborazione: 6–8 settimane dall'Italia/Francia; 8–10 settimane da paesi terzi `[CA-SRC-30]`.

---

### Caso 5: Tesi / Ricerca all'Estero (Visiting Student Researchers)

- **Quadro Normativo:** *IRPR* art. 205 (Interesse canadese / Beneficio significativo), Codici di esenzione LMIA C22 e C52, ed esenzione da permesso ex art. 186(x) `[CA-SRC-01]`, `[CA-SRC-15]`.
- **Regime per Brevi Soggiorni di Tesi (< 120 giorni):**
  - I ricercatori e dottorandi invitati da università pubbliche canadesi per progetti di ricerca accademica non retribuita fino a 120 giorni possono beneficiare dell'esenzione dal permesso di lavoro ex **IRPR R186(x)** (*Short-term research exemption*) `[CA-SRC-15]`.
  - Requisito: lettera formale di invito del dipartimento canadese, verifica che la permanenza avvenga ogni 12 mesi; ingresso con semplice eTA (CAD 7,00) per cittadini UE `[CA-SRC-10]`.
- **Regime per Soggiorni di Tesi/Ricerca da 4 a 12 Mesi (Visiting Student Researcher - Codice C22):**
  - Si applica a studenti regolarmente iscritti a corsi di laurea magistrale o dottorato all'estero invitati per condurre ricerca fondamentale correlata al proprio percorso di tesi `[CA-SRC-15]`.
  - **Iter Datoriale:** Il dipartimento universitario canadese ospitante deve trasmettere l'offerta di accoglienza tramite l'Employer Portal IRCC e versare la **Employer Compliance Fee di CAD 230,00** `[CA-SRC-10]`, `[CA-SRC-15]`.
  - **Iter Studente:** Domanda di Work Permit esente da LMIA (Codice C22) allegando l'Offer of Employment Number e la convenzione interuniversitaria. Costo: **CAD 155,00** `[CA-SRC-10]`.
  - Assenza di retribuzione locale diretta: ammessa borsa di studio erogata dall'ateneo d'origine (es. Erasmus+ Traineeship, borsa per tesi all'estero) `[CA-SRC-15]`.

---

### Caso 6: Erasmus+ e Scambi Universitari Bilaterali (< 6 Mesi)

- **Quadro Normativo:** *IRPR* art. 188(1)(a) (Corsi di studio di durata inferiore a sei mesi) `[CA-SRC-01]`.
- **Regola dei 6 Mesi per Soggiorni di Scambio:**
  - Uno studente universitario (UE o extra-UE) che partecipa a un programma di scambio bilaterale della durata massima di 1 semestre accademico ($\le 6$ mesi) **NON necessita di richiedere uno Study Permit** né una PAL `[CA-SRC-01]`.
  - Ingresso per cittadini UE/italiani: semplice autorizzazione di viaggio elettronica (**eTA**, costo **CAD 7,00**, validità 5 anni o fino a scadenza passaporto) `[CA-SRC-10]`.
  - Ingresso per cittadini extra-UE non esenti da visto: visto turistico/visitatore adesivo (**TRV**, costo **CAD 100,00** + biometria CAD 85,00) `[CA-SRC-10]`.
- **Limitazioni Tassative del Regime Visitatore (< 6 mesi):**
  - **Divieto assoluto di lavoro:** Lo status di visitatore non autorizza in alcun modo il lavoro, né on-campus né off-campus `[CA-SRC-01]`, `[CA-SRC-06]`.
  - **Inconvertibilità in loco per lavoro post-laurea:** Non conferisce alcun diritto futuro all'ottenimento del Post-Graduation Work Permit (PGWP), il quale richiede tassativamente un programma completato con regolare Study Permit `[CA-SRC-08]`.
  - **Estensione:** Se il semestre di scambio dovesse essere prolungato a un anno intero, lo Study Permit deve essere richiesto prima della scadenza dei 6 mesi, ma le pratiche onshore possono essere rigettate se non supportate da CAQ (in Québec) o PAL/ammissione formale `[CA-SRC-02]`.

---

### Caso 7: Master di II Livello e Dottorato di Ricerca (PhD)

- **Quadro Normativo:** *IRPR* artt. 210–222 e *Allocation Notice 2026* `[CA-SRC-01]`, `[CA-SRC-03]`.
- **Status di Ingresso:**
  - Ammissione diretta esente da Provincial Attestation Letter (PAL) dal 1° gennaio 2026 `[CA-SRC-03]`.
  - Rilascio di Study Permit per la durata stimata del programma (tipicamente 1–2 anni per Master, 4–5 anni per PhD) `[CA-SRC-02]`.
- **Finanziamenti, Borse di Studio e Lavoro Accademico:**
  - Dottorandi e borsisti impiegati come Teaching Assistant (TA) o Research Assistant (RA) operano con autorizzazione di lavoro on-campus illimitata ex art. 186(p) IRPR `[CA-SRC-01]`.
  - **Regime Fiscale delle Borse:** Le borse di studio post-graduate (Fellowships/Scholarships) per studenti a tempo pieno sono **esenti da imposta sul reddito federale** ai sensi dell'art. 56(3) dell'*Income Tax Act* (certificazione fiscale T4A box 105) `[CA-SRC-26]`. I compensi per docenza o tutoraggio (TA) costituiscono invece reddito da lavoro dipendente ordinario (T4 con ritenute CPP ed EI) `[CA-SRC-26]`.
- **Benefici per Familiari:**
  - Il coniuge dello studente di Master ($\ge 16$ mesi) o PhD è pienamente idoneo a richiedere lo **Spousal Open Work Permit (SOWP)** con validità pari a quella del percorso del partner e diritto di lavoro illimitato `[CA-SRC-16]`.
- **Soglie Finanziarie:** Dimostrazione di Proof of Funds di **CAD 23.448,00/anno** per il richiedente principale (+ quote aggiuntive per familiari: +CAD 8.350/partner, +CAD 5.150/figlio), dedotti gli importi formalmente garantiti da borsa di studio confermata dall'ateneo `[CA-SRC-04]`.

---

### Caso 8: Working Holiday / Vacanza-Lavoro (International Experience Canada - IEC)

- **Quadro Normativo:** Accordo Bilaterale Italia-Canada sulla Mobilità Giovanile (legge federale di ratifica) e *IRPR* art. 205(b) `[CA-SRC-01]`, `[CA-SRC-11]`.
- **Condizioni Specifiche per Cittadini Italiani:**
  - Fascia anagrafica: **18–35 anni** (inclusi fino al compimento del 36° anno) `[CA-SRC-11]`.
  - Durata massima autorizzata: **12 mesi** per soggiorno `[CA-SRC-11]`.
  - Ripetibilità: I cittadini italiani possono partecipare per un **massimo di 2 volte**, in qualsiasi categoria (Working Holiday, Young Professionals o International Co-op), a condizione che vi sia una pausa tra i soggiorni e nuova estrazione `[CA-SRC-11]`.
  - *Tipologia permesso:* **Open Work Permit** per Working Holiday (libertà di cambiare impiego senza vincolo di settore); **Employer-specific Work Permit** per Young Professionals (richiede contratto qualificato NOC TEER 0/1/2/3) `[CA-SRC-11]`.
- **Asimmetrie e Discriminazioni di Nazionalità UE:**
  - Germania, Francia, Irlanda e Spagna: accordi fino a 24 mesi.
  - **Paesi UE Totalmente Esclusi da Accordi Bilaterali IEC:** Cittadini di **Bulgaria, Cipro, Ungheria, Malta e Romania NON possono accedere ai pool diretti IEC** `[CA-SRC-11]`.
  - *Rimedio per cittadini UE esclusi:* Possono accedere esclusivamente acquistando una quota attraverso le *Recognized Organizations (RO)* approvate da IRCC (es. Stepwest, GO International), sostenendo un costo di intermediazione privato di circa CAD 1.500–2.800 `[CA-SRC-11]`.
- **Procedura di Selezione:**
  - Iscrizione al pool telematico (gratuita) $\rightarrow$ Estrazione casuale (Rounds of Invitations) $\rightarrow$ Invito a richiedere (ITA) $\rightarrow$ 10 giorni per accettare + 20 giorni per completare la documentazione `[CA-SRC-11]`.
- **Costi Amministrativi Obbligatori (Tariffe 2026):**
  - Quota di partecipazione IEC: **CAD 184,75** `[CA-SRC-10]`.
  - Open Work Permit Holder Fee (solo per Working Holiday): **CAD 100,00** `[CA-SRC-10]`.
  - Spese biometriche: **CAD 85,00** `[CA-SRC-10]`.
  - **Totale Governamento per Working Holiday:** **CAD 369,75** `[CA-SRC-10]`.
- **Trappola Mortale dell'Assicurazione Sanitaria alla Frontiera:**
  - Alla frontiera (Port of Entry), il viaggiatore DEVE esibire all'ufficiale CBSA una polizza sanitaria privata che copra espressamente **rimpatrio della salma, cure mediche urgenti e ricovero ospedaliero per l'intera durata dei 12 mesi** `[CA-SRC-12]`.
  - **Principio dell'art. 52 IRPR:** Se la polizza presentata ha una copertura di durata inferiore (es. 6 mesi o 8 mesi), l'ufficiale di frontiera ha l'obbligo di legge di **rilasciare il permesso di lavoro parametrato esattamente alla durata dell'assicurazione** `[CA-SRC-12]`. Il permesso non può essere esteso in seguito, con perdita irrevocabile dei mesi rimanenti `[CA-SRC-12]`.
- **Fondi alla Frontiera:** Obbligo di dimostrare disponibilità finanziaria minima all'arrivo pari a **CAD 2.500,00** tramite estratto conto bancario recente timbrato `[CA-SRC-11]`.

---

### Caso 9: Post-Study Work (Post-Graduation Work Permit - PGWP)

- **Quadro Normativo:** *IRPR* art. 205 (Interesse canadese) e linee guida operative IRCC PGWP `[CA-SRC-01]`, `[CA-SRC-08]`.
- **Criteri di Eleggibilità e Durata del Titolo:**
  - **Master Universitari:** Qualsiasi corso di laurea magistrale (Master) completato presso una DLI pubblica avente durata legale di **almeno 8 mesi** conferisce il diritto a un PGWP di **3 anni pieni**, indipendentemente dalla durata effettiva del corso e **senza alcun vincolo di area disciplinare (Field of Study)** `[CA-SRC-08]`.
  - **Corsi di Bachelor (Triennale):** PGWP di 3 anni per percorsi di 4 anni; nessun vincolo di area disciplinare `[CA-SRC-08]`.
  - **Corsi di College (Diplomi post-secondari):** Durata pari a quella del corso (fino a max 3 anni); **obbligo restrittivo di appartenenza a una delle 5 categorie occupazionali deficitarie** (Agricoltura, Sanità, STEM, Edilizia/Trades, Trasporti) `[CA-SRC-08]`.
- **Requisiti Linguistici Obbligatori:**
  - I laureati universitari (Bachelor, Master, PhD) che richiedono il PGWP devono certificare un livello di competenza linguistica in inglese o francese pari ad almeno **CLB 7 (Canadian Language Benchmark)** in tutte e quattro le abilità (Reading, Writing, Listening, Speaking) `[CA-SRC-08]`.
  - Test ammessi: IELTS General Training (minimo 6.0 in ogni abilità), CELPIP-General (minimo 7), TEF Canada (minimo NCLC 7) o TCF Canada `[CA-SRC-08]`.
- **Finestra Temporale di Presentazione:**
  - Il candidato ha a disposizione tassativamente **180 giorni solari** dalla data in cui l'università emette la lettera ufficiale di fine studi o i transcript finali `[CA-SRC-08]`.
  - Non conta la data della cerimonia formale di laurea (convocation), che si tiene spesso mesi dopo `[CA-SRC-08]`.
- **Statuto Lavorativo durante l'Attesa (*Maintained Status* - Art. 186(w) IRPR):**
  - Se la domanda di PGWP viene sottomessa prima della scadenza dello Study Permit e il candidato possedeva l'autorizzazione al lavoro off-campus, egli ha il diritto di **iniziare a lavorare a tempo pieno immediatamente** in attesa della delibera `[CA-SRC-09]`.
  - **Trappola Mortale dell'Espatrio:** Se il candidato lascia il Canada durante l'attesa del PGWP, l'autorizzazione al lavoro garantita dall'art. 186(w) decade all'istante `[CA-SRC-09]`. Il candidato può rientrare in Canada solo come visitatore e non potrà più lavorare fino al formale rilascio del permesso da parte di IRCC `[CA-SRC-09]`.
- **Chiusura dei Canali Provinciali per Laureati Senza Offerta di Lavoro:**
  - **Ontario (OINP):** Il canale *Masters Graduate Stream* (che consentiva la residenza permanente ai laureati master in Ontario senza offerta di lavoro) è stato **definitivamente chiuso il 30 maggio 2026** `[CA-SRC-17]`.
  - **British Columbia (BC PNP):** L'*International Post-Graduate Stream* è stato **chiuso il 7 gennaio 2025** `[CA-SRC-18]`.
  - **Québec:** Il programma *PEQ Diplômés* è stato abrogato il 19 novembre 2025; finestra transitoria limitata ai titoli antecedenti e con francese avanzato (livello 7) `[CA-SRC-19]`.
  - **Conseguenza Strategica:** La conversione a residenza permanente post-PGWP passa quasi esclusivamente per **Express Entry - Canadian Experience Class (CEC)**, che nel 2026 richiede punteggi CRS elevatissimi (518–523 punti) `[CA-SRC-20]`, rendendo cruciale accumulare almeno 1–2 anni di esperienza qualificata (TEER 0/1/2/3) ed eccellenti punteggi di lingua `[CA-SRC-20]`.
- **Costi:** Domanda Work Permit: **CAD 155,00** + Open Work Permit Holder Fee: **CAD 100,00** = **CAD 255,00** `[CA-SRC-10]`.

---

### Caso 10: Soggiorni Brevi e Ricongiungimento Familiare

- **Soggiorni Brevi ($\le 6$ Mesi):**
  - **Cittadini UE / Italiani:** Esenti da visto consolare. Richiedono l'autorizzazione elettronica di viaggio (**eTA**, costo **CAD 7,00**) richiesta online sul portale IRCC `[CA-SRC-10]`. Validità 5 anni o fino alla scadenza del passaporto; consente permanenze continuative fino a un massimo di 6 mesi per ingresso a discrezione del Border Services Officer `[CA-SRC-10]`.
  - **Cittadini Extra-UE Non Esenti (India, Cina, ecc.):** Devono richiedere il visto consolare adesivo (**TRV - Temporary Resident Visa**, costo **CAD 100,00** + biometria **CAD 85,00**) `[CA-SRC-10]`.
  - **Divieto Assoluto di Lavoro:** Nessun soggiorno breve consente attività lavorativa subordinata `[CA-SRC-01]`.
  - **Divieto di "Flagpoling" ai Confini Terrestri USA:** La pratica di uscire brevemente verso gli Stati Uniti per poi ripresentarsi alla frontiera canadese per convertire lo status o farsi stampare un permesso è stata formalmente vietata e bloccata con respingimento amministrativo `[CA-SRC-21]`. Tutte le domande di cambio o rinnovo status devono avvenire telematicamente onshore `[CA-SRC-21]`.
- **Ricongiungimento Familiare per Studenti e Lavoratori:**
  - **Restrizioni Spousal Open Work Permit (SOWP):**
    - Il coniuge o partner convivente di fatto di uno studente internazionale ha diritto all'Open Work Permit **esclusivamente se lo studente è iscritto a un Master ($\ge 16$ mesi), un Dottorato (PhD) o corsi professionali specifici (Medicina, Giurisprudenza, Ingegneria)** `[CA-SRC-16]`.
    - I coniugi di studenti iscritti a corsi di Bachelor (triennale) o College sono esclusi dal diritto al lavoro e possono entrare esclusivamente con TRV/eTA come visitatori `[CA-SRC-16]`.
  - **Coniugi di Lavoratori Temporanei:** Hanno diritto all'Open Work Permit se il lavoratore principale opera in una mansione qualificata (NOC TEER 0, 1, 2, 3) con contratto di lavoro di almeno 6 mesi `[CA-SRC-16]`.
  - **Figli Minori:** Hanno diritto a frequentare gratuitamente le scuole pubbliche dell'obbligo (K-12) nella provincia di residenza se almeno un genitore è titolare di uno Study Permit o Work Permit valido `[CA-SRC-03]`.

---

## 3. Riepilogo Costi Amministrativi Obbligatori per Tipologia

Tassi e tariffe ufficiali governativi al **05/10/2026** (indicizzati ex *Service Fees Act* `[CA-SRC-10]`), convertiti in Euro al tasso ufficiale di cambio di 1 CAD = 0,6452 EUR `[CA-SRC-27]`.

| Tipologia Pratica | Tassa Base Governativa | Open Permit / Compliance Fee | Biometria (se dovuta) | Totale CAD | Totale EUR (stimato) | Note di Riferimento |
| :--- | :---: | :---: | :---: | :---: | :---: | :--- |
| **eTA (Viaggi Brevi / UE)** | CAD 7,00 | — | — | **CAD 7,00** | **€ 4,52** | Obbligatoria per volo `[CA-SRC-10]` |
| **TRV (Visto Turistico Extra-UE)** | CAD 100,00 | — | CAD 85,00 | **CAD 185,00** | **€ 119,36** | Valido fino a 10 anni `[CA-SRC-10]` |
| **Study Permit (Ordinario)** | CAD 150,00 | — | CAD 85,00 | **CAD 235,00** | **€ 151,62** | Richiede DLI valida `[CA-SRC-02]` |
| **CAQ Québec (per Studi)** | CAD 135,00 | — | — | **CAD 135,00** | **€ 87,10** | MIFI, solo per Québec `[CA-SRC-05]` |
| **Co-op Work Permit (Post-Secondario)** | CAD 0,00 | — | — | **CAD 0,00** | **€ 0,00** | Incorporato dal 01/04/2026 `[CA-SRC-07]` |
| **Work Permit Ordinario (LMIA)** | CAD 155,00 | — | CAD 85,00 | **CAD 240,00** | **€ 154,85** | LMIA CAD 1k a carico datore `[CA-SRC-10]` |
| **Work Permit CETA (UE - LMIA Exempt)** | CAD 155,00 | CAD 230,00 *(a carico datore)* | CAD 85,00 | **CAD 240,00** *(candidato)* | **€ 154,85** | Datore paga CAD 230 via portale `[CA-SRC-14]` |
| **IEC Working Holiday (Italia)** | CAD 184,75 | CAD 100,00 | CAD 85,00 | **CAD 369,75** | **€ 238,56** | 12 mesi; polizza a parte `[CA-SRC-10]` |
| **IEC Young Professionals** | CAD 184,75 | CAD 230,00 *(a carico datore)* | CAD 85,00 | **CAD 269,75** *(candidato)* | **€ 174,04** | Offerta qualificata `[CA-SRC-11]` |
| **Post-Graduation Work Permit (PGWP)** | CAD 155,00 | CAD 100,00 | — *(già resa)* | **CAD 255,00** | **€ 164,53** | 3 anni per master `[CA-SRC-08]` |
| **Spousal Open Work Permit (SOWP)** | CAD 155,00 | CAD 100,00 | CAD 85,00 | **CAD 340,00** | **€ 219,37** | Solo per coniugi Master/PhD `[CA-SRC-16]` |
| **Restoration of Status** | CAD 246,25 | + Tassa del nuovo titolo | — | **CAD 396,25 – 401,25** | **€ 255,66 – 258,89** | Se scaduto da < 90 giorni `[CA-SRC-10]` |

---

## 4. Statuto Giuridico durante l'Attesa e Protocollo di Insediamento

### A. Regole Fondamentali di Status e Frontiera
1. **Validità del Passaporto ex Art. 52 IRPR:** Nessun visto, Study Permit o Work Permit canadese può essere rilasciato con una validità che superi la data di scadenza del passaporto del titolare `[CA-SRC-01]`. Se un candidato ottiene il diritto a un PGWP di 3 anni o a un IEC di 12 mesi ma il passaporto scade tra 8 mesi, il permesso emesso scadrà tra 8 mesi con perdita irrevocabile del periodo residuo `[CA-SRC-01]`, `[CA-SRC-12]`. Rinnovare tassativamente il passaporto prima di inoltrare la domanda.
2. **Maintained Status (*IRPR* R186(w)):** Consente la prosecuzione legale del lavoro tra il termine degli studi e la decisione sul PGWP solo a condizione di aver presentato domanda completa prima della scadenza dello Study Permit e di **non uscire dal territorio canadese** `[CA-SRC-09]`.
3. **Divieto di Flagpoling:** Vietato recarsi ai confini terrestri USA per forzare il rinnovo o cambio di permesso `[CA-SRC-21]`. Le richieste devono essere elaborate tramite il sistema telematico ordinario.

### B. Procedura di Insediamento Post-Arrivo (Primi 30 Giorni)
1. **Rilascio del Social Insurance Number (SIN):**
   - Il SIN (numero di 9 cifre necessario per lavorare, percepire stipendi e pagare imposte; serie numerica '9' per residenti temporanei) deve essere richiesto **immediatamente di persona presso un ufficio Service Canada** muniti del permesso cartaceo originale e del passaporto `[CA-SRC-22]`.
   - Il rilascio allo sportello è istantaneo (15–20 minuti) ed è gratuito (CAD 0,00) `[CA-SRC-22]`. Evitare la procedura postale/online che richiede fino a un mese di attesa `[CA-SRC-22]`.
2. **Iscrizione Sanitaria Provinciale e Polizze Universitarie:**
   - In Ontario: studenti universitari registrati automaticamente su UHIP (CAD 948,00/anno) `[CA-SRC-23]`. I lavoratori con permesso $\ge 6$ mesi e contratto a tempo pieno possono iscriversi a OHIP con lettera datoriale.
   - In British Columbia: iscrizione a MSP obbligatoria (CAD 75,00/mese per studenti) dopo 3 mesi di carenza `[CA-SRC-24]`.
   - In Québec: studenti italiani tenuti a stipulare la polizza privata universitaria (CAD 900–1.200/anno), data l'assenza di intesa bilaterale RAMQ `[CA-SRC-25]`.
3. **Apertura Conto Bancario e Trappola del Credit Score:**
   - Presentarsi in filiale (RBC, TD, Scotiabank, BMO o CIBC) con passaporto, Study/Work permit cartaceo e indirizzo residenziale.
   - *Mercato immobiliare:* La totale assenza di uno storico creditizio canadese (*Credit Score*) a Toronto e Vancouver induce i proprietari privati a richiedere contrattualmente depositi anticipati da 3 a 6 mensilità (CAD 5.000–11.000) `[CA-SRC-29]`. È fondamentale dotarsi di liquidità immediatamente disponibile all'arrivo.
4. **Residenza Fiscale e Posizione CRA:**
   - Ai sensi del folio *S5-F1-C1*, il residente temporaneo presente per oltre 183 giorni con legami residenziali primari (alloggio, conto) è considerato *Factual Resident* ed è soggetto a tassazione canadese sui redditi ovunque prodotti con obbligo di dichiarazione T1 `[CA-SRC-26]`.

---
*Guida consolidata e validata conforme agli standard del Council di verifica immigrazione.*
