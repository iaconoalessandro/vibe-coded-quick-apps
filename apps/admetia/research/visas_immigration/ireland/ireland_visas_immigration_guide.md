---
country: "Ireland"
country_it: "Irlanda"
iso_code: "IE"
last_verified: "2026-10-05"
review_by: "2027-03-31"
version: "1.0.0"
citizenships_covered:
  - "UE / SEE / Svizzera"
  - "Regno Unito (Common Travel Area - CTA)"
  - "Extra-UE (incl. USA, Canada, Commonwealth, Paesi terzi)"
---

# Guida Ufficiale Visti e Immigrazione: Irlanda (IE)

> **Regola di integrità:** Questo documento è l'**UNICA fonte di verità** del progetto Admetia per l'Irlanda. Ogni dato numerico, tariffa, soglia retributiva o adempimento amministrativo contiene un riferimento puntuale `[IE-SRC-XX]` collegato al registro ufficiale in `ireland_sources.md`. Le problematiche applicative e le divergenze prasseologiche de facto non sono presentate come asserzioni certe, ma sono analiticamente trattate in `ireland_open_questions.md`.

---

## 1. Architettura Giuridica ed Enti Competenti

### 1.1 Quadro Normativo Cardine
- **Employment Permits Act 2024 (Act No. 34 of 2024):** Nuova legge organica sui permessi di lavoro (in vigore dal 2 settembre 2024). Ha abrogato e sostituito la disciplina degli *Employment Permits Acts 2003–2014*, introducendo la portabilità del lavoro dopo 9 mesi [IE-SRC-01], la digitalizzazione del *Labour Market Needs Test* (con eliminazione dell'obbligo di inserzione su carta stampata) [IE-SRC-05], e il divieto penale assoluto per i datori di lavoro di addebitare o trattenere le spese del permesso dalla busta paga del lavoratore [IE-SRC-01].
- **Immigration Act 2004 (Act No. 1 of 2004):** Disciplina l'ingresso, i poteri discrezionali di frontiera della *Border Management Unit* (BMU) (*Leave to Land*) [IE-SRC-06] e l'obbligo di registrazione sul territorio dello Stato entro 90 giorni con rilascio dell'*Irish Residence Permit (IRP)* [IE-SRC-11].
- **European Communities (Eligibility for Inclusion in a Hosting Agreement) Regulations 2007 (S.I. No. 257/2007):** Recepisce il regime europeo dei ricercatori scientifici, garantendo l'esenzione totale dai permessi di lavoro ordinari e l'accesso diretto allo *Stamp 1* accademico [IE-SRC-14].
- **Taxes Consolidation Act 1997, Section 192:** Disciplina l'esenzione fiscale integrale (da *Income Tax*, *USC* e *PRSI*) per le borse di studio e di dottorato di ricerca a tempo pieno [IE-SRC-16].
- **Protocollo n. 21 allegato al TFUE:** Sancisce l'opt-out dell'Irlanda dallo Spazio di Libertà, Sicurezza e Giustizia dell'UE. Di conseguenza, l'Irlanda non partecipa all'area Schengen né alla Direttiva (UE) 2016/801 sulla mobilità intra-UE di studenti e ricercatori [IE-SRC-22], [IE-SRC-23].
- **Common Travel Area (CTA) Concordat:** Accordo bilaterale vincolante tra Irlanda e Regno Unito che garantisce la piena reciprocità di diritti di soggiorno, studio, lavoro e assistenza senza formalità migratorie [IE-SRC-20].

### 1.2 Mappa degli Enti Competenti
1. **DETE (Department of Enterprise, Trade and Employment):** Ministero responsabile della politica occupazionale, delle liste delle professioni critiche (*Critical Skills Occupations List*) e dell'emissione dei permessi di lavoro tramite la piattaforma telematica EPOS (*Employment Permits Online System*) [IE-SRC-01], [IE-SRC-02], [IE-SRC-03].
2. **ISD (Immigration Service Delivery - Department of Justice):** Gestisce il rilascio dei visti consolari (piattaforma AVATS), la registrazione dell'Irish Residence Permit (IRP) a Burgh Quay e sul portale online, e le politiche per studenti e ricongiungimenti familiari [IE-SRC-06], [IE-SRC-07], [IE-SRC-11], [IE-SRC-12].
3. **Border Management Unit (BMU) & Garda National Immigration Bureau (GNIB):** Esercitano i controlli di frontiera nei porti e aeroporti statali, concedendo il timbro provvisorio di atterraggio (*Leave to Land*) [IE-SRC-06].
4. **DSP (Department of Social Protection):** Preposto al rilascio del codice fiscale e previdenziale irlandese (*Personal Public Service Number - PPSN*) tramite il portale *MyWelfare* e gli uffici territoriali *Intreo* [IE-SRC-18].
5. **Office of the Revenue Commissioners (Revenue):** Autorità fiscale; gestisce il portale *myAccount*, il registro delle detrazioni (*Tax Credits*) e il sistema di prelievo alla fonte PAYE, applicando l'aliquota di emergenza (*Emergency Tax*) in assenza di tempestiva registrazione [IE-SRC-17].
6. **EURAXESS Ireland / Irish Universities Association (IUA):** Sovrintendono alla stipula e alla validazione delle convenzioni di accoglienza (*Hosting Agreements*) per ricercatori stranieri [IE-SRC-15].
7. **Residential Tenancies Board (RTB):** Registro pubblico delle locazioni abitative; emette la certificazione formale di contratto necessaria ai fini della prova di residenza (*proof of address*) [IE-SRC-25].

---

## 2. Matrice dei Casi d'Uso (Dettaglio Operativo UE vs Extra-UE vs UK)

---

### Caso 1: Lavoro Dipendente Ordinario (General Employment Permit - GEP)

- **Cittadini UE/SEE/CH:**
  - Piena libertà di circolazione ex art. 45 TFUE e *European Communities (Free Movement of Persons) Regulations* [IE-SRC-21].
  - Nessun visto d'ingresso, nessun permesso di lavoro, nessun obbligo di registrazione anagrafica IRP [IE-SRC-11], [IE-SRC-21].
  - Unici adempimenti: richiesta del PPS Number per fini fiscali [IE-SRC-18] e associazione dell'impiego su Revenue *myAccount* [IE-SRC-17].
- **Cittadini del Regno Unito (CTA):**
  - Parità assoluta di trattamento in forza della *Common Travel Area* [IE-SRC-20]. Nessun visto né permesso richiesto.
- **Cittadini Extra-UE:**
  - Richiesto il rilascio preventivo del **General Employment Permit (GEP)** da parte del DETE [IE-SRC-03].
  - **Labour Market Needs Test (LMNT) obbligatorio:** Prima della domanda, il datore di lavoro deve pubblicare l'annuncio per almeno **28 giorni consecutivi** sul portale del DSP *JobsIreland / EURES* e per almeno **28 giorni consecutivi** su una piattaforma commerciale online aggiuntiva [IE-SRC-05]. È soppresso l'obbligo di pubblicazione sui giornali cartacei [IE-SRC-01].
  - **Regola del 50:50:** Almeno il 50% dell'organico dell'azienda deve essere composto da cittadini di Paesi membri SEE/UK al momento della richiesta [IE-SRC-01].
  - **Soglia Salariale Minima (in vigore dal 1° marzo 2026):**
    - Standard: **€ 36.605 all'anno** (pari a € 18,05/ora calcolati su 39 ore settimanali) [IE-SRC-03].
    - Neo-laureati in Irlanda (titolo conseguito da istituto universitario irlandese nei 12 mesi precedenti): **€ 34.009 all'anno** [IE-SRC-03].
    - Operatori socio-sanitari (*Healthcare Assistants / Home Support Workers*) e addetti settore carni/orticoltura: **€ 32.691 all'anno** [IE-SRC-03].
  - **Portabilità del Lavoro (Riforma 2024):** Ai sensi della Sezione 37 dell'*Employment Permits Act 2024*, il lavoratore può cambiare datore di lavoro dopo **9 mesi** di servizio (invece dei precedenti 12 mesi) nell'ambito dello stesso gruppo professionale SOC-4, senza necessità di rieseguire il LMNT [IE-SRC-01].
- **Procedura Passo-Passo (Extra-UE):**
  1. Datore esegue il LMNT per 28 giorni [IE-SRC-05].
  2. Domanda telematica su EPOS (DETE) con caricamento contratto e documentazione [IE-SRC-03].
  3. Approvazione ed emissione del permesso GEP [IE-SRC-03].
  4. Se *visa-required*: richiesta del Visto Nazionale 'D' Employment su piattaforma AVATS [IE-SRC-06].
  5. Ingresso in Irlanda con timbro di frontiera BMU (validità provvisoria fino a 90 giorni) [IE-SRC-06].
  6. Registrazione di persona a Dublino (Burgh Quay) per rilascio della carta IRP con timbro **Stamp 1** [IE-SRC-07], [IE-SRC-11].
- **Costi:**
  - Tassa GEP (DETE): **€ 500** (fino a 6 mesi) o **€ 1.000** (fino a 24 mesi) [IE-SRC-01]. *(Rimborso del 90% in caso di rigetto; divieto penale assoluto di addebito al lavoratore ex art. 55 EP Act 2024)* [IE-SRC-01].
  - Visto D (se visa-required): **€ 60** (singolo) o **€ 100** (multiplo) [IE-SRC-06].
  - Tassa carta IRP: **€ 300** [IE-SRC-11].
- **Tempi:** LMNT: 28 giorni fissi [IE-SRC-05]; Lavorazione DETE: circa 5–6 settimane [IE-SRC-03]; Visto consolare: 4–8 settimane [IE-SRC-06]; Registrazione IRP: 8–12 settimane di attesa appuntamento [IE-SRC-11].
- **Errori Comuni:**
  - Presentare la domanda GEP al 27° giorno di pubblicazione dell'annuncio (rigetto automatico immediato) [IE-SRC-05].
  - Applicare trattenute sullo stipendio per rifarsi dei costi della tassa del permesso (costituisce reato penale ai sensi della Sezione 55 dell'Act 2024) [IE-SRC-01].

---

### Caso 2: Lavoro Qualificato / Skilled (Critical Skills Employment Permit - CSEP)

- **Cittadini UE/SEE/CH e UK:** Accesso diretto e incondizionato al mercato del lavoro senza alcun vincolo [IE-SRC-20], [IE-SRC-21].
- **Cittadini Extra-UE:**
  - Rilascio del **Critical Skills Employment Permit (CSEP)** da parte del DETE [IE-SRC-02].
  - **Esenzione totale dal Labour Market Needs Test (LMNT):** Nessuna ricerca preliminare di manodopera locale [IE-SRC-02].
  - **Durata minima del contratto:** Almeno **2 anni** (contratto a tempo indeterminato o a termine di durata biennale) [IE-SRC-02].
  - **Soglie Salariali Minime (in vigore dal 1° marzo 2026):**
    - Professioni incluse nella *Critical Skills Occupations List* con laurea triennale/magistrale pertinente (NFQ Level 7 o superiore): **€ 40.904 all'anno** [IE-SRC-02].
    - Deroga speciale per neo-laureati (titolo conseguito nei 12 mesi precedenti per professioni in lista critica): **€ 36.848 all'anno** (pari al 90% della soglia base) [IE-SRC-02].
    - Qualsiasi professione ammissibile non presente nella *Ineligible List of Occupations* (anche senza laurea specialistica, purché con esperienza documentata): **€ 68.911 all'anno** [IE-SRC-02].
  - **Regola del 50:50:** Almeno il 50% dei dipendenti dell'azienda deve essere cittadino SEE/UK (derogabile per un massimo di 2 anni per startup supportate formalmente da Enterprise Ireland o IDA) [IE-SRC-01].
  - **Benefici Straordinari del CSEP:**
    - Ricongiungimento familiare immediato: il coniuge o partner civile può richiedere subito il visto/permesso e riceve uno **Stamp 1G** che autorizza al lavoro immediato a tempo pieno senza necessità di proprio permesso [IE-SRC-07], [IE-SRC-13].
    - Transizione a **Stamp 4**: Dopo 21 mesi di impiego effettivo e continuativo con CSEP (al termine dei 24 mesi del titolo), il lavoratore riceve lo Stamp 4 gratuito dall'ISD, ottenendo il diritto di lavorare permanentemente senza sponsorship [IE-SRC-07].
    - Portabilità: Possibilità di cambiare datore di lavoro dopo **9 mesi** ex Sezione 37 EP Act 2024, purché per un ruolo incluso tra le occupazioni critiche [IE-SRC-01].
- **Costi:**
  - Tassa CSEP DETE: **€ 1.000** (rimborso del 90% pari a € 900 se rifiutato; spesa non detraibile dallo stipendio del dipendente ex art. 55) [IE-SRC-01], [IE-SRC-02].
  - Visto consolare D (se visa-required): **€ 60 / € 100** [IE-SRC-06].
  - Carta IRP iniziale: **€ 300** [IE-SRC-11].
  - Transizione a Stamp 4 (a 21 mesi): **€ 300** (tassa standard di emissione card IRP) [IE-SRC-07], [IE-SRC-11].
- **Tempi:** Istruttoria DETE EPOS: eccezionalmente rapida, circa **1–2 settimane** per pratiche *decision-ready* [IE-SRC-02]; Visto AVATS: 4–8 settimane [IE-SRC-06]; Registrazione IRP: 8–12 settimane per appuntamento [IE-SRC-11].
- **Errori Comuni:** Offrire un contratto di durata pari a 12 o 18 mesi (il DETE richiede tassativamente 24 mesi minimi o tempo indeterminato) [IE-SRC-02].

---

### Caso 3: Internship / Tirocinio (Curriculare vs Extracurriculare)

- **Cittadini UE/SEE/CH e UK:** Piena parità; accesso libero a stage curriculari ed extracurriculari senza formalità di visto [IE-SRC-20], [IE-SRC-21].
- **Cittadini Extra-UE:**
  - **Tirocinio Curriculare per studenti già residenti su Stamp 2:**
    - Se il tirocinio o lo stage professionale è parte integrante e accreditata del piano di studi universitario (fino a un massimo del **50% della durata totale del corso**), è consentito svolgerlo a tempo pieno senza richiedere alcun permesso di lavoro al DETE [IE-SRC-07].
  - **Tirocinio per studenti iscritti presso atenei esteri (Internship Employment Permit):**
    - Disciplinato dal DETE per studenti extra-UE residenti all'estero che svolgono un tirocinio obbligatorio legato a una disciplina inclusa nella lista *Critical Skills* [IE-SRC-01].
    - Durata massima: **12 mesi non rinnovabili** [IE-SRC-01].
    - Retribuzione obbligatoria: Almeno il Salario Minimo Nazionale (**€ 14,15/ora nel 2026**) [IE-SRC-24].
    - Obbligo formale di ritorno nel Paese di origine al termine dello stage per completare il corso di studi (l'azienda deve rilasciare impegno scritto) [IE-SRC-01].
  - **Tirocini Extracurriculari Post-Laurea:**
    - Svolti tramite lo **Stamp 1G** (Third Level Graduate Programme) senza oneri di sponsorizzazione per i laureati da università irlandesi [IE-SRC-08].
- **Costi:**
  - Internship Employment Permit DETE: **€ 500** (fino a 6 mesi) o **€ 1.000** (fino a 12 mesi) [IE-SRC-01].
  - Visto D consolare: **€ 60 / € 100** [IE-SRC-06]; Carta IRP: **€ 300** [IE-SRC-11].
  - Tirocinio curriculare su Stamp 2: **€ 0** costi aggiuntivi [IE-SRC-07].

---

### Caso 4: Studio Universitario (Bachelor / Master)

- **Cittadini UE/SEE/CH e UK:** Iscrizione diretta; copertura sanitaria tramite TEAM (Tessera Sanitaria Europea) o NHS per britannici; nessun obbligo di registrazione immigratoria [IE-SRC-20], [IE-SRC-21].
- **Cittadini Extra-UE:**
  - **Accreditamento del corso (ILEP):** Il corso universitario deve essere iscritto nella *Interim List of Eligible Programmes (ILEP)* dell'ISD [IE-SRC-07].
  - **Requisiti Finanziari e Prova Fondi (Aggiornamento Armonizzato 2025/2026):**
    - Corsi di durata $\ge$ 8 mesi (es. Bachelor o Master annuali): Obbligo di dimostrare la disponibilità liquida immediata di almeno **€ 10.000** per il primo anno accademico [IE-SRC-09]. *(Requisito esteso dal 30 giugno 2025 a TUTTI i cittadini extra-UE, inclusi quelli non soggetti a visto come USA, Canada, Brasile)* [IE-SRC-09].
    - Corsi inferiori a 8 mesi: **€ 833 per ogni mese** di permanenza prevista [IE-SRC-09].
    - **Pagamento anticipato delle tasse universitarie:** Ricevuta attestante il saldo di almeno **€ 6.000** di retta (o del 100% se il costo totale del corso è inferiore a € 6.000) prima della richiesta del visto o della registrazione [IE-SRC-09].
    - **Tracciabilità dei fondi:** Estratti conto completi degli ultimi **6 mesi**. Il versamento improvviso di somme non tracciate (*funds parking*) costituisce causa di rigetto automatico per fondi non genuini [IE-SRC-09]. In alternativa per i degree programme è ammesso l'acquisto dell'*Education Bond* da € 10.000 [IE-SRC-09].
  - **Assicurazione Sanitaria Privata:** Obbligatoria per tutti i possessori di Stamp 2; deve garantire un massimale minimo di **€ 25.000 per infortuni** e **€ 25.000 per malattie**, includendo esplicitamente il **ricovero ospedaliero** (*hospitalisation*) [IE-SRC-10]. Dal secondo anno di rinnovo o per percorsi pluriennali sono **vietate le polizze di viaggio standard**, con obbligo di polizza sanitaria privata regolamentata in Irlanda (VHI, Laya, Irish Life Health) o convenzione universitaria [IE-SRC-10].
  - **Regole Tassative sul Lavoro Part-Time (Stamp 2):**
    - Durante il periodo didattico (*term time*): massimo **20 ore a settimana** [IE-SRC-07].
    - Durante le finestre fisse di vacanza formalizzate dall'ISD: massimo **40 ore a settimana** ESCLUSIVAMENTE dal **1° giugno al 30 settembre** e dal **15 dicembre al 15 gennaio** [IE-SRC-07].
    - Divieto assoluto di lavoro a 40 ore durante la *Reading Week*, le vacanze pasquali o in qualsiasi altra settimana dell'anno [IE-SRC-07].
    - **Divieto categorico di lavoro autonomo:** È vietata qualsiasi attività freelance, prestazione d'opera a partita IVA, subappalto, e l'attività come rider/driver per piattaforme (Deliveroo, Just Eat, Uber Eats); la violazione comporta la revoca del permesso ex art. 4(7) Imm. Act 2004 ed emissione dell'ordine di espulsione ex art. 3 Imm. Act 1999 [IE-SRC-06], [IE-SRC-07].
- **Costi:**
  - Visto d'ingresso AVATS Study 'D': **€ 60** (singolo) o **€ 100** (multiplo) [IE-SRC-06].
  - Carta IRP (da rinnovare annualmente): **€ 300 all'anno** [IE-SRC-11], [IE-SRC-12].
  - Polizza medica privata studentesca: da circa **€ 150 a € 600 all'anno** [IE-SRC-10].
- **Tempi:** Visto studio AVATS: 4–6 settimane (bassa stagione) / 10–12 settimane (picco estivo) [IE-SRC-06]; Prima registrazione IRP: 8–12 settimane per appuntamento a Burgh Quay [IE-SRC-11].

---

### Caso 5: Tesi e Ricerca Scientifica (Hosting Agreement)

- **Cittadini UE/SEE/CH e UK:** Piena libertà di ricerca accademica; nessun permesso necessario [IE-SRC-20], [IE-SRC-21].
- **Cittadini Extra-UE:**
  - **Hosting Agreement Scheme (S.I. No. 257/2007):** Procedura di corsia preferenziale per ricercatori scientifici assunti o ospitati da università o istituti di ricerca accreditati [IE-SRC-14], [IE-SRC-15].
  - **Esenzione dal DETE:** Il ricercatore è **totalmente esente dall'obbligo di richiedere un permesso di lavoro al DETE** [IE-SRC-14].
  - **Procedura Semplificata:** L'ente di ricerca stipula direttamente la convenzione di accoglienza (*Hosting Agreement*) e rilascia la documentazione con cui il ricercatore richiede il visto consolare o si registra all'immigrazione [IE-SRC-14], [IE-SRC-15].
  - **Soglia Salariale Minima Statutaria:**
    - Ricercatore singolo senza familiari: **€ 23.181 all'anno** [IE-SRC-15].
    - Ricercatore con familiari a carico (coniuge/figli): **€ 30.000 all'anno** [IE-SRC-15].
    - *(Negli atenei pubblici le tabelle IUA Researcher Salary Scales garantiscono per i Postdoc Level 2 retribuzioni reali tra € 44.000 e € 47.000 lordi/anno)* [IE-SRC-15].
  - **Status Immigratorio:** All'arrivo riceve lo **Stamp 1** [IE-SRC-07].
  - **Vantaggi Chiave:**
    - Visto consolare d'ingresso **gratuito (*Fee Exempt*)** ai sensi della normativa sui ricercatori [IE-SRC-06], [IE-SRC-14].
    - Ricongiungimento familiare immediato: il coniuge riceve lo **Stamp 1G** con pieno diritto al lavoro [IE-SRC-07], [IE-SRC-13].
    - Transizione a **Stamp 4** permanente dopo **21 mesi** di attività continuativa [IE-SRC-07], [IE-SRC-14].
  - **Visiting Student (Preparazione Tesi all'Estero):** Se lo studente estero si reca in Irlanda per un breve periodo di ricerca legato alla tesi senza stipendio, l'inquadramento transita come studente ospite accreditato con rilascio di **Stamp 2** [IE-SRC-07].
- **Costi:**
  - Permesso di lavoro DETE: **€ 0** (esenzione per legge) [IE-SRC-14].
  - Visto consolare D Scientific Researcher: **€ 0** (gratuito) [IE-SRC-06], [IE-SRC-14].
  - Carta IRP iniziale e rinnovo: **€ 300** [IE-SRC-11].
- **Tempi:** Stipula Hosting Agreement: 1–2 settimane [IE-SRC-15]; Visto consolare: 2–4 settimane [IE-SRC-06]; Registrazione IRP: 8–12 settimane di attesa [IE-SRC-11].

---

### Caso 6: Erasmus+ e Mobilità Internazionale (Trappola Protocollo 21)

- **Cittadini UE:** Piena libertà di circolazione ex art. 21 TFUE; assistenza sanitaria coperta dalla TEAM; nessuna registrazione [IE-SRC-21].
- **Studenti e Ricercatori Extra-UE residenti in altro Stato UE (es. Italia, Francia, Germania):**
  - **TRAPPOLA CRITICA DI FRONTIERA:** L'Irlanda **NON FA PARTE DELL'AREA SCHENGEN** e ha esercitato l'opt-out totale dal Titolo V del TFUE ai sensi del **Protocollo n. 21** [IE-SRC-22].
  - Di conseguenza, l'Irlanda **NON HA RECEPITO la Direttiva (UE) 2016/801** sulla mobilità intra-UE di studenti e ricercatori (Considerando 60) [IE-SRC-23].
  - **Effetto Giuridico:** Il permesso di soggiorno o visto rilasciato dall'Italia (o da altro Stato Schengen) **NON CONFERISCE ALCUN DIRITTO DI INGRESSO O STUDIO IN IRLANDA**. Le clausole di mobilità semplificata fino a 360 giorni valide nel resto d'Europa in Irlanda **NON HANNO EFFICACIA** [IE-SRC-22], [IE-SRC-23].
  - **Procedura Tassativa:**
    - Lo studente extracomunitario deve richiedere ex novo un **Visto Nazionale Irlandese (Study Visa)** su piattaforma AVATS se appartenente a nazionalità soggetta a visto (*visa-required*, es. India, Cina, Turchia, Marocco) [IE-SRC-06].
    - Se esente da visto (es. USA, Giappone), deve viaggiare con il dossier completo e registrarsi per lo **Stamp 2** all'arrivo [IE-SRC-06], [IE-SRC-07].
    - Obbligo di dimostrare l'accreditamento formale dell'istituto irlandese ricevente, la prova dei fondi di € 10.000 (o quota mensile di € 833) [IE-SRC-09] e la polizza sanitaria privata [IE-SRC-10].
- **Costi:** Visto AVATS: **€ 60 / € 100** [IE-SRC-06]; Carta IRP (per soggiorni superiori a 90 giorni): **€ 300** [IE-SRC-11].
- **Tempi:** Rilascio visto: 4–8 settimane [IE-SRC-06].
- **Rischio di Respinta:** Tentare di imbarcarsi con la sola carta di soggiorno italiana/Schengen comporta il negato imbarco da parte della compagnia aerea o il respingimento immediato alla frontiera (*Refusal of Leave to Land*) con rimpatrio forzato ai sensi della Sezione 4(3) dell'Immigration Act 2004 [IE-SRC-06].

---

### Caso 7: Master di II Livello e Dottorato di Ricerca (PhD)

- **Cittadini UE/SEE/CH e UK:** Iscrizione paritaria; borsa esente da imposte ex art. 192 TCA 1997 [IE-SRC-16], [IE-SRC-20], [IE-SRC-21].
- **Cittadini Extra-UE:**
  - **Dottorato con Borsa di Studio (Fellowship / Stipend):**
    - Inquadramento formale come studente di terzo ciclo universitario su **Stamp 2** [IE-SRC-07].
    - **Regime Fiscale Esente (Section 192 Taxes Consolidation Act 1997):** La borsa di studio erogata dall'ateneo o da enti pubblici di ricerca (*Research Ireland*) è **totalmente esente da Income Tax, Universal Social Charge (USC) e contributi PRSI** [IE-SRC-16]. È richiesto il deposito telematico del modulo di esenzione di borsa presso i Revenue Commissioners [IE-SRC-16].
    - Limiti di lavoro collaterale: Possibilità di svolgere attività retribuite aggiuntive (es. tutoraggi, docenze integrative) fino a un massimo di 20 ore a settimana in *term time*, le quali sono invece soggette a tassazione ordinaria [IE-SRC-07], [IE-SRC-17].
  - **Dottorato con Contratto di Lavoro Subordinato:**
    - Qualora il dottorando sia inquadrato come dipendente di ricerca, si applica lo schema dell'**Hosting Agreement (S.I. No. 257/2007)** con concessione di **Stamp 1** [IE-SRC-07], [IE-SRC-14].
  - **Accesso Post-Titolo al Third Level Graduate Programme:**
    - Al conseguimento del Master (NFQ Level 9) o del Dottorato (NFQ Level 10), il candidato accede a pieno diritto allo **Stamp 1G per una durata massima di 24 mesi (12 mesi + 12 mesi)** [IE-SRC-08].
- **Costi:** Visto consolare: **€ 60 / € 100** (o gratuito se su Hosting Agreement) [IE-SRC-06], [IE-SRC-14]; Carta IRP: **€ 300 all'anno** [IE-SRC-11].
- **Tempi:** Visto: 4–6 settimane [IE-SRC-06]; Registrazione IRP: 8–12 settimane [IE-SRC-11].

---

### Caso 8: Working Holiday Authorisation (WHA)

- **Cittadini UE/SEE/CH e UK:** Non applicabile (piena libertà di stabilimento e lavoro ex lege) [IE-SRC-20], [IE-SRC-21].
- **Cittadini di Paesi Convenzionati Extra-UE:**
  - Riservato ai cittadini di: **Argentina, Australia, Canada, Cile, Hong Kong, Giappone, Nuova Zelanda, Corea del Sud, Taiwan e USA** (*US-Ireland Intern WHA*) in forza di trattati bilaterali [IE-SRC-19].
  - **Requisiti Anagrafici:** Età compresa tra i **18 e i 30 anni** compiuti al momento della domanda (elevata a **35 anni** per cittadini di Canada, Australia e Nuova Zelanda) [IE-SRC-19].
  - **Durata e Quote:** Validità di **12 mesi** (estesa a **24 mesi** per i cittadini canadesi) entro contingenti annuali numerici prefissati [IE-SRC-19].
  - **Limiti Lavorativi Tassativi:**
    - Consente di svolgere lavoro subordinato temporaneo incidentale allo scopo principale della vacanza.
    - Vietato stipulare contratti a tempo indeterminato [IE-SRC-19].
    - Limite massimo di durata di impiego con lo stesso datore di lavoro: non superiore a **6 mesi** per la maggior parte dei Paesi convenzionati [IE-SRC-19].
    - **Inconvertibilità:** Al termine del programma WHA, il titolo **non può essere convertito in loco** in un permesso di lavoro ordinario (CSEP o GEP); il partecipante deve uscire dallo Stato per presentare eventuali nuove domande di visto lavorativo dall'estero [IE-SRC-07], [IE-SRC-19].
  - **Titolo di Soggiorno:** All'arrivo viene rilasciata la carta IRP con annotazione specifica **Stamp 1 WHA** [IE-SRC-07], [IE-SRC-19].
- **Costi:**
  - Tassa WHA consolare (DFA): da circa **€ 60 a € 100** a seconda della convenzione [IE-SRC-19].
  - Carta IRP all'arrivo: **€ 300** [IE-SRC-11].
  - Prova fondi obbligatoria: disponibilità liquida tra **€ 1.500 e € 3.000** oltre al biglietto aereo di rientro [IE-SRC-19].
- **Tempi:** Domanda consolare WHA: 6–12 settimane [IE-SRC-19]; Registrazione IRP: 8–12 settimane [IE-SRC-11].

---

### Caso 9: Post-Study Work / Third Level Graduate Programme (Stamp 1G)

- **Cittadini UE/SEE/CH e UK:** Accesso illimitato al mercato del lavoro senza necessità di permessi [IE-SRC-20], [IE-SRC-21].
- **Cittadini Extra-UE:**
  - Concessione del titolo di soggiorno **Stamp 1G** ai sensi della revisione delle linee guida dell'ISD [IE-SRC-07], [IE-SRC-08].
  - **Condizione Preliminare di Domanda:** Presentazione dell'istanza entro **6 mesi** dalla ricezione ufficiale dei risultati finali (*final results*), mentre si è ancora titolari di un permesso **Stamp 2** valido [IE-SRC-08].
  - **Durata del Titolo per Livello NFQ:**
    - **NFQ Level 8 (Honours Bachelor Degree):** Concessione di **12 mesi NON rinnovabili** [IE-SRC-08]. Limite massimo cumulativo di soggiorno nel percorso di studio/laurea (Stamp 2 + Stamp 1G): **7 anni** [IE-SRC-08].
    - **NFQ Level 9 (Master Degree, Postgraduate Diploma) e Level 10 (PhD):** Concessione iniziale di **12 mesi**, rinnovabile per **ulteriori 12 mesi** (per un totale complessivo massimo di **24 mesi**) [IE-SRC-08]. Limite massimo cumulativo di soggiorno (Stamp 2 + Stamp 1G): **8 anni** [IE-SRC-08].
  - **Condizioni di Rinnovo per il 2° Anno (Level 9/10):** Il laureato deve dimostrare attivamente all'ISD di aver intrapreso passi concreti per conseguire un'occupazione di livello laureato (partecipazione a colloqui, iscrizione ad agenzie per il lavoro, contratti stipulati) [IE-SRC-08].
  - **Diritti e Divieti Operativi:**
    - Diritto di lavorare a tempo pieno (**40 ore a settimana**) senza dover richiedere preventivamente un permesso di lavoro al DETE [IE-SRC-07], [IE-SRC-08].
    - **DIVIETO ASSOLUTO DI SELF-EMPLOYMENT:** È rigorosamente vietato svolgere lavoro autonomo, aprire partita IVA, operare come *contractor* tramite *personal service company* o costituire società commerciali [IE-SRC-08]. Ammesso unicamente il lavoro subordinato registrato PAYE [IE-SRC-08], [IE-SRC-17].
  - **Computabilità ai fini della Naturalizzazione:** A differenza dello Stamp 2 (che è escluso ex lege ex art. 16A Irish Nationality and Citizenship Act 1956), il periodo trascorso con permesso **Stamp 1G nell'ambito del Third Level Graduate Programme è computabile (*reckonable residence*)** ai fini della cittadinanza irlandese [IE-SRC-08].
  - **Transizione Obbligatoria a Permesso Sponsorizzato:** Entro la fine dei 12 o 24 mesi, il laureato deve obbligatoriamente ottenere dal datore di lavoro la sponsorizzazione di un **Critical Skills Employment Permit (CSEP)** [IE-SRC-02] o di un **General Employment Permit (GEP)** [IE-SRC-03]. In caso contrario, lo Stamp 1G decade irrevocabilmente, costringendo il lavoratore a lasciare lo Stato.
- **Costi:**
  - Rilascio IRP iniziale Stamp 1G: **€ 300** [IE-SRC-11].
  - Rinnovo IRP per il secondo anno (Level 9/10): **€ 300** [IE-SRC-11], [IE-SRC-12].
- **Tempi:** Rilascio telematico o su appuntamento a Burgh Quay: 4–8 settimane [IE-SRC-08], [IE-SRC-11].

---

### Caso 10: Soggiorni Brevi (≤ 90 gg) e Ricongiungimento Familiare

- **Soggiorni Brevi (≤ 90 giorni):**
  - **Cittadini UE/SEE/CH e UK:** Libero ingresso e soggiorno; nessun adempimento formale fino a 90 giorni [IE-SRC-20], [IE-SRC-21].
  - **Cittadini Extra-UE Non-Visa Required (es. USA, Canada, Australia, Giappone, Brasile):** Ingresso con passaporto valido ed esibizione dei documenti giustificativi alla BMU; timbro di frontiera con validità determinata fino a un massimo di 90 giorni [IE-SRC-06].
  - **Cittadini Extra-UE Visa-Required:** Obbligo di richiedere preventivamente il **Visto Short Stay 'C'** tramite il sistema telematico AVATS [IE-SRC-06].
  - **British-Irish Visa Scheme (BIVS):** Accordo specifico riservato ai cittadini di **Cina e India** muniti di visto recante la dicitura "BIVS", che consente di viaggiare tra Regno Unito e Irlanda senza dover richiedere due visti separati, a condizione di entrare prima nel Paese che ha emesso il visto [IE-SRC-06].
  - **Divieto Assoluto di Lavoro:** Il Visto C e il soggiorno breve non consentono in nessun caso di svolgere attività lavorativa subordinata né autonoma in Irlanda [IE-SRC-06], [IE-SRC-07].
- **Ricongiungimento Familiare (Policy Document on Non-EEA Family Reunification):**
  - **Sponsor titolare di Critical Skills Employment Permit (CSEP) o Hosting Agreement:**
    - Ricongiungimento **immediato**: i familiari diretti (coniuge/partner registrato e figli minori a carico) possono entrare con il titolare o raggiungerlo subito [IE-SRC-02], [IE-SRC-13], [IE-SRC-14].
    - Il coniuge riceve lo **Stamp 1G per coniugi**, che garantisce il pieno diritto di lavorare a tempo pieno senza necessità di richiedere un permesso al DETE [IE-SRC-07], [IE-SRC-13].
  - **Sponsor titolare di General Employment Permit (GEP):**
    - Periodo di attesa obbligatorio: lo sponsor deve aver lavorato regolarmente in Irlanda per almeno **12 mesi** prima di poter richiedere il ricongiungimento [IE-SRC-03], [IE-SRC-13].
    - Requisito economico minimo: reddito annuo netto non inferiore a **€ 30.000** negli ultimi 12 mesi per un coniuge senza figli (parametri crescenti in presenza di figli minori) [IE-SRC-13].
    - Dal **15 maggio 2024** il coniuge/partner ammesso al ricongiungimento riceve lo **Stamp 1G** (non più lo Stamp 3) e può **lavorare senza un proprio Employment Permit**; resta vietato il lavoro autonomo. I coniugi già in Irlanda con Stamp 3 sono stati aggiornati d'ufficio alle condizioni dello Stamp 1G (senza nuova IRP fino al rinnovo) [IE-SRC-07], [IE-SRC-13], [IE-SRC-26].
- **Costi:**
  - Visto C Short Stay: **€ 60** (singolo) o **€ 100** (multiplo) [IE-SRC-06].
  - Visto D Long Stay Join Family: **€ 60 / € 100** [IE-SRC-06].
  - Registrazione IRP per ogni familiare maggiorenne: **€ 300** [IE-SRC-11].
- **Tempi:** Visto Short Stay: 2–4 settimane [IE-SRC-06]; Pratica Join Family per coniuge CSEP: 4–8 settimane [IE-SRC-13]; Pratica Join Family per coniuge GEP: 6–12 mesi di istruttoria [IE-SRC-13].

---

### Caso 11: Cittadini Britannici (Common Travel Area - CTA)

- **Fondamento Giuridico:** Accordo bilaterale vincolante e reciproco riconfermato formalmente nel 2019 e garantito dalla legislazione irlandese (*Immigration Act 2004*, Section 9(a) e *Ireland Act 1949*) [IE-SRC-20].
- **Regime di Mobilità e Residenza:**
  - I cittadini britannici godono della piena parità di trattamento con i cittadini irlandesi [IE-SRC-20].
  - Non necessitano di alcun visto d'ingresso, autorizzazione elettronica né permesso di soggiorno [IE-SRC-20].
  - Sono espressamente esonerati da qualsiasi obbligo di registrazione anagrafica o immigratoria IRP [IE-SRC-11], [IE-SRC-20].
  - Hanno pieno e immediato accesso a: lavoro subordinato e autonomo senza autorizzazioni del DETE, immatricolazione universitaria (con applicazione delle retribuzioni ed esenzioni identiche ai residenti locali), iscrizione al sistema sanitario pubblico HSE e partecipazione al voto per le elezioni parlamentari irlandesi (*Dáil Éireann*) [IE-SRC-20].
- **Unici Adempimenti Amministrativi:** Richiesta ordinaria del PPS Number presso il DSP per la regolarizzazione fiscale [IE-SRC-18] e associazione della posizione contributiva su Revenue *myAccount* [IE-SRC-17].
- **Documento di Viaggio Operativo 2026:** Sebbene per le autorità di immigrazione irlandesi la CTA non imponga il passaporto per i viaggi diretti tra Regno Unito e Irlanda, le compagnie aeree e marittime richiedono dal 2026 l'esibizione del passaporto valido per le verifiche di sicurezza a bordo [IE-SRC-20].

---

## 3. Riepilogo Costi Amministrativi Obbligatori per Tipologia

| Tipologia / Categoria di Procedura | Tassa Consolare Visto (AVATS) | Tassa Permesso di Lavoro (DETE) | Tassa Registrazione Carta IRP | Spese Amministrative Fisse Obbligatorie | Eventuali Spese Aggiuntive |
| :--- | :---: | :---: | :---: | :---: | :--- |
| **Cittadino UE / SEE / Svizzera (Tutti i casi)** | **€ 0** | **€ 0** | **€ 0** *(Non richiesta)* | **€ 0** | Visite mediche GP a consumo (€ 60–€ 80) [IE-SRC-21] |
| **Cittadino Britannico (CTA - Tutti i casi)** | **€ 0** | **€ 0** | **€ 0** *(Esente per legge)* | **€ 0** | Spese vive ordinarie [IE-SRC-20] |
| **Lavoro Altamente Qualificato (CSEP 24 mesi)** | **€ 60 / € 100** *(Se visa-required)* | **€ 1.000** *(DETE, vietato rivalersi sul lavoratore)* | **€ 300** *(A carico del lavoratore)* | **€ 1.360 – € 1.400** | Transizione a Stamp 4 a 21 mesi: € 300 [IE-SRC-01], [IE-SRC-02], [IE-SRC-11] |
| **Lavoro Dipendente Ordinario (GEP 24 mesi)** | **€ 60 / € 100** *(Se visa-required)* | **€ 1.000** *(DETE, vietato rivalersi sul lavoratore)* | **€ 300** *(A carico del lavoratore)* | **€ 1.360 – € 1.400** | Rinnovo GEP fino a 36 mesi: € 1.500 [IE-SRC-01], [IE-SRC-03], [IE-SRC-11] |
| **Ricercatore Scientifico (Hosting Agreement)** | **€ 0** *(Esente per legge)* | **€ 0** *(Esente per legge)* | **€ 300** | **€ 300** | Rinnovo IRP: € 300; Passaggio Stamp 4: € 300 [IE-SRC-11], [IE-SRC-14] |
| **Studio Universitario (Master / Bachelor)** | **€ 60 / € 100** *(Se visa-required)* | **€ 0** | **€ 300 all'anno** | **€ 360 – € 400** | Polizza medica: € 150–€ 600/anno; Fondi: € 10.000 [IE-SRC-09], [IE-SRC-10] |
| **Post-Study Work (Stamp 1G - TLGP)** | **€ 0** *(Già sul territorio)* | **€ 0** | **€ 300 all'anno** | **€ 300 (NFQ 8)** / **€ 600 (NFQ 9)** | Spese ordinarie di mantenimento [IE-SRC-08], [IE-SRC-11] |
| **Working Holiday Authorisation (WHA)** | **€ 60 – € 100** *(Tassa consolare DFA)* | **€ 0** | **€ 300** | **€ 360 – € 400** | Polizza assicurativa completa obbligatoria [IE-SRC-11], [IE-SRC-19] |

---

## 4. Statuto Giuridico durante l'Attesa e Regime Tassativo dei Viaggi

### 4.1 Diritti Riconosciuti durante la Lavorazione Amministrativa
- **Attesa della Prima Registrazione IRP:**
  - Ai sensi della circolare ministeriale applicata da ISD, il richiedente che ha effettuato l'ingresso con timbro di frontiera e ha prenotato l'appuntamento a Burgh Quay prima della scadenza dei 90 giorni ha diritto di risiedere legalmente, iniziare l'attività lavorativa (se in possesso di CSEP o GEP convalidato) o frequentare i corsi accademici [IE-SRC-06], [IE-SRC-11].
  - La ricevuta telematica di conferma della prenotazione rilasciata dal *Digital Contact Centre* certifica la regolarità del soggiorno sul territorio nazionale fino alla data della convocazione [IE-SRC-11].
- **Attesa del Rinnovo Online dell'IRP (Clausola di Salvaguardia OREG):**
  - Per i rinnovi inoltrati sul portale ISD prima della scadenza del titolo, la ricevuta di presentazione dell'istanza (*OREG Acknowledgement*) concede legalmente fino a **12 settimane di proroga automatica** dei diritti precedentemente associati allo Stamp (inclusi lavoro e assistenza sanitaria), proteggendo il lavoratore e l'azienda da sanzioni per lavoro irregolare [IE-SRC-12].

### 4.2 Regime Tassativo dei Viaggi all'Estero e Divieto di Scali
- **Divieto di Espatrio senza Tessera IRP Fisica:**
  - La ricevuta di prenotazione dell'appuntamento o la ricevuta telematica di rinnovo dell'ISD **NON HANNO ALCUNA VALIDITÀ DI VIAGGIO INTERNAZIONALE** [IE-SRC-06], [IE-SRC-11].
  - Se un cittadino extracomunitario lascia l'Irlanda prima di aver ritirato la carta IRP plastificata, le compagnie aeree e di navigazione applicano le sanzioni ai vettori (*Carrier Sanctions*) e **RIFIUTANO L'IMBARCO** sul volo di rientro [IE-SRC-06].
  - Inoltre, la BMU al controllo passaporti può negare l'ingresso (*Leave to Land*) in quanto la concessione iniziale di frontiera decade all'uscita dal territorio dello Stato [IE-SRC-06].
- **Tratte Aeree e Scali nello Spazio Schengen o nel Regno Unito:**
  - Poiché l'Irlanda non è parte dello Spazio Schengen [IE-SRC-22], i passeggeri che viaggiano verso o dall'Irlanda con scali intermedi in Paesi Schengen (es. Francoforte, Parigi, Amsterdam) devono verificare attentamente la necessità di un **Visto Schengen di Transito Aeroportuale** o di un visto Schengen per uscire dall'area transiti, qualora il loro passaporto appartenga a nazionalità sottoposta a restrizioni [IE-SRC-22].
  - Similmente, i transiti attraverso aeroporti del Regno Unito (es. Londra Heathrow) richiedono un visto di transito britannico (*Direct Airside Transit Visa*), salvo che il passeggero non sia esente in base agli accordi di transito del Regno Unito.

---

## 5. Protocollo di Insediamento: Checklist Operativa Passo-Passo

### Fase 1: Pre-Partenza
1. **Domanda di Visto d'Ingresso (se visa-required):** Compilazione modulo AVATS online, pagamento tassa (€ 60 / € 100) e deposito dossier presso l'Ambasciata/Centro Visti [IE-SRC-06].
2. **Legalizzazione Documenti:** Munirsi di copie integrali con **Apostille dell'Aja** (o legalizzazione consolare) dell'atto di nascita, certificato di matrimonio e titoli accademici, corredate da traduzione asseverata in lingua inglese.
3. **Provvista Finanziaria e Alloggio:** Garantire la disponibilità documentata di € 10.000 su conto corrente da almeno 6 mesi per studenti [IE-SRC-09]; stipulare contratto di alloggio formale o assicurarsi la lettera formale di alloggio provvisorio rilasciata dall'università o dal datore di lavoro [IE-SRC-18], [IE-SRC-25].
4. **Assicurazione Sanitaria:** Attivare polizza medica privata con copertura minima per infortuni e malattia di € 25.000 con degenza ospedaliera inclusa [IE-SRC-10].

### Fase 2: Frontiera di Ingresso (Border Management Unit)
1. **Dossier nel Bagaglio a Mano:** Non imbarcare i documenti di immigrazione. Esibire all'ufficiale BMU: passaporto valido, copia dell'Employment Permit DETE (o Hosting Agreement o lettera di ammissione ILEP con ricevuta tasse), prova di alloggio e fondi [IE-SRC-06].
2. **Landing Stamp:** L'ufficiale appone sul passaporto il timbro di frontiera con autorizzazione temporanea di soggiorno (fino a 90 giorni) [IE-SRC-06].

### Fase 3: Registrazione Residenza (Irish Residence Permit - IRP)
1. **Prenotazione Slot Burgh Quay:** Accedere al *Digital Contact Centre* di ISD e prenotare l'appuntamento di persona presso la sede di 13-14 Burgh Quay, Dublino 2 (obbligatorio su scala nazionale per tutti i residenti in Irlanda dal 13 gennaio 2025) [IE-SRC-11].
2. **Appuntamento di Persona:** Presentarsi puntuali con dossier completo e carta di credito/debito per il pagamento della tassa di **€ 300** [IE-SRC-11]. Vengono rilevate le impronte digitali e la fotografia biometrica.
3. **Consegna Tessera:** La carta IRP plastificata viene recapitata per posta raccomandata all'indirizzo irlandese dichiarato entro 10–15 giorni lavorativi [IE-SRC-11].

### Fase 4: Codice Fiscale (PPS Number) e Conto Bancario
1. **Istanza Telematica MyWelfare:** Creare l'account base MyGovID e sottomissione richiesta PPSN su *MyWelfare.ie*, allegando documento di identità, motivazione valida (*transaction reason*, es. contratto di lavoro) e prova di residenza (*proof of address*) [IE-SRC-18].
2. **Proof of Address Valida:** Presentare una bolletta utenze intestata, la lettera di registrazione del *Residential Tenancies Board (RTB)* [IE-SRC-25], o la formale *Employer Verification Letter* redatta su carta intestata aziendale per i neoassunti privi di bollette [IE-SRC-18].
3. **Colloquio SAFE in Presenza:** Convocazione presso il centro Intreo locale per il fotosegnalamento e il rilascio della *Public Services Card (PSC)*; il PPSN viene notificato per posta cartacea in 4–10 giorni lavorativi [IE-SRC-18].
4. **Apertura Conto Bancario:** Apertura conto corrente retail (AIB, Bank of Ireland, PTSB) tramite esibizione di passaporto, proof of address e PPSN, oppure attivazione istantanea di conto digitale con IBAN irlandese nativo (es. Revolut Bank UAB Irish Branch) per l'accredito immediato dello stipendio.

### Fase 5: Regolarizzazione Fiscale (Revenue myAccount) per Evitare l'Emergency Tax
1. **Registrazione Immediata su Revenue Online:** Non appena ricevuto il PPSN, accedere a `revenue.ie` e creare il profilo personale *myAccount* [IE-SRC-17].
2. **Associazione dell'Impiego (*Add Job Details*):** Inserire il codice aziendale del datore di lavoro (*Employer Registration Number*) e la data di inizio del contratto per consentire a Revenue di generare la *Revenue Payroll Notification (RPN)* [IE-SRC-17].
3. **Sblocco e Rimborso:** L'emissione tempestiva dell'RPN assegna i crediti d'imposta personali (*Tax Credits*) e la fascia ad aliquota standard del 20%, **evitando l'aliquota di emergenza al 40% + 8% USC (52% lordo)** e sbloccando il rimborso integrale delle eventuali somme trattenute nella prima busta paga utile successiva [IE-SRC-17].

---
*Documento convalidato dal Council di Verifica Immigrazione. Unica fonte di verità conforme agli standard di integrità del progetto Admetia.*
