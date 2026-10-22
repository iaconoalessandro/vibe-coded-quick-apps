---
country: "Romania"
country_it: "Romania"
iso_code: "RO"
last_verified: "2026-10-05"
review_by: "2027-03-31"
version: "1.0.0"
citizenships_covered:
  - "UE / SEE / Svizzera (incl. cittadini italiani)"
  - "Extra-UE (incl. UK, USA, Canada, Commonwealth, India, Cina, Paesi terzi)"
---

# Guida Ufficiale Visti e Immigrazione: Romania

> **Regola di integrità:** Questo documento è l'**UNICA fonte di verità** del progetto Admetia per quanto concerne le normative di immigrazione, visti, permessi di soggiorno, autorizzazioni al lavoro, mobilità accademica e fiscalità per la Romania. Ogni asserzione fattuale, importo economico, tariffa o termine procedurale è vincolato a un riscontro documentale recante il codice `[RO-SRC-xx]` corrispondente al registro ufficiale [`romania_sources.md`](romania_sources.md). I profili applicativi privi di consolidamento o in via di attuazione diplomatica sono tracciati nel documento [`romania_open_questions.md`](romania_open_questions.md).

---

## 1. Architettura Giuridica ed Enti Competenti

### Quadro Normativo Cardine
1. **Regime generale dei cittadini stranieri (Extra-UE):** *Ordonanța de urgență a Guvernului nr. 194/2002 privind regimul străinilor în România* (republicată în Monitorul Oficial nr. 421/2008, con le successive modifiche e integrazioni) `[RO-SRC-01]`.
2. **Accesso al lavoro e distacco dei lavoratori stranieri:** *Ordonanța Guvernului nr. 25/2014* `[RO-SRC-02]`, profondamente modificata dalla *Legea nr. 28/2024* `[RO-SRC-03]` e integrata dalla riforma telematica dell'*Ordonanța de urgență a Guvernului nr. 32/2026* `[RO-SRC-07]`.
3. **Libera circolazione dei cittadini UE/SEE/CH:** *Ordonanța de urgență a Guvernului nr. 102/2005 privind libera circulație pe teritoriul României a cetățenilor statelor membre ale Uniunii Europene, Spațiului Economic European și a cetățenilor Confederației Elvețiene* (republicată) `[RO-SRC-04]`.
4. **Recepimento Direttiva Carta Blu UE (Direttiva (UE) 2021/1883):** *Legea nr. 28/2024* (in vigore dall'8 marzo 2024), che ha abbassato la soglia retributiva a 1,0 volte il salario medio lordo, ridotto la durata contrattuale minima a 6 mesi ed esteso il lavoro degli studenti a 6 ore/giorno `[RO-SRC-03]`.
5. **Adesione allo Spazio Schengen:** *Decizia (UE) 2024/210 a Consiliului din 30 decembrie 2023* (frontiere aeree e marittime dal 31 marzo 2024) integrata dalla *Decizia Consiliului JAI del 12 dicembre 2024* (estensione alle frontiere terrestri dal 1° gennaio 2025, con mantenimento di filtri mobili di polizia e controlli e-DAC) `[RO-SRC-09]`, `[RO-SRC-28]`.
6. **Parametri macroeconomici e contingentamento per il 2026:**
   - *Câștigul salarial mediu brut* (salario medio lordo di riferimento): **9.192 RON/mese** (*Legea nr. 44/2026 a bugetului asigurărilor sociale de stat*) `[RO-SRC-05]`.
   - *Salariul de bază minim brut pe țară garantat în plată* (salario minimo lordo): **4.325 RON/mese** dal 1° luglio 2026 (*Hotărârea Guvernului nr. 146/2026*, che ha superato i 4.050 RON della HG 1506/2024) `[RO-SRC-06]`.
   - *Contingentul de lucrători străini nou-admiși*: **90.000 unità** per il 2026 (*Hotărârea Guvernului nr. 1.169/2025*) `[RO-SRC-08]`.
   - Tasso di cambio ufficiale BNR al 05/10/2026: **1 EUR = 5,3306 RON** `[RO-SRC-20]`.

### Mappa degli Enti e Portali Competenti
* **Visti consolari d'ingresso (Viza de tip C e tip D):** Ministerul Afacerilor Externe (MAE) tramite la piattaforma telematica ufficiale `[RO-SRC-10]` [`evisa.mae.ro`](https://evisa.mae.ro).
* **Autorizzazioni al lavoro e permessi di soggiorno:** Inspectoratul General pentru Imigrări (IGI) del Ministero degli Affari Interni tramite [`portaligi.mai.gov.ro`](https://portaligi.mai.gov.ro) `[RO-SRC-19]` e la piattaforma integrata [`workinromania.gov.ro`](https://workinromania.gov.ro) `[RO-SRC-30]`.
* **Riconoscimento ed equipollenza titoli di studio accademici:** Centrul Național de Recunoaștere și Echivalare a Diplomelor (CNRED) tramite [`cnred.edu.ro`](https://cnred.edu.ro) `[RO-SRC-21]`.
* **Ammissione studenti internazionali:** Ministerul Educației tramite [`studyinromania.gov.ro`](https://studyinromania.gov.ro) `[RO-SRC-22]`.
* **Fisco e identificazione tributaria:** Agenția Națională de Administrare Fiscală (ANAF) tramite [`anaf.ro`](https://www.anaf.ro) `[RO-SRC-24]`, `[RO-SRC-25]`.
* **Assistenza sanitaria statale:** Casa Națională de Asigurări de Sănătate (CNAS) tramite [`cnas.ro`](https://cnas.ro) `[RO-SRC-23]`.
* **Polizia di frontiera e controlli di sicurezza:** Poliția de Frontieră Română tramite [`politiadefrontiera.ro`](https://www.politiadefrontiera.ro) `[RO-SRC-28]`.

---

## 2. Matrice dei Casi d'Uso (Dettaglio Operativo UE vs Extra-UE)

---

### CASO 1: Lavoro Dipendente Ordinario (Lucrător Permanent)

#### Cittadini UE / SEE / Svizzera (incl. Italiani)
* **Regime:** Piena parità di trattamento e libero accesso al mercato del lavoro senza necessità di autorizzazione all'assunzione o visto `[RO-SRC-04]`.
* **Procedura:**
  - Soggiorno fino a 3 mesi: libero con passaporto o carta d'identità valida.
  - Soggiorno superiore a 3 mesi: registrazione obbligatoria presso la struttura territoriale dell'IGI della provincia di dimora per il rilascio del **Certificat de înregistrare** (art. 14 OUG 102/2005) `[RO-SRC-04]`.
  - Documenti richiesti: contratto individuale di lavoro registrato o attestato datoriale (*adeverință de angajare*), documento di identità, prova di alloggio.
  - Costo: **0 RON (totalmente gratuito)** `[RO-SRC-13]`.
  - Tempi di rilascio: **Nello stesso giorno (*în aceeași zi*)** ex art. 15 OUG 102/2005 `[RO-SRC-04]`. All'atto dell'emissione viene impresso il **Cod Numeric Personal (CNP)**.

#### Cittadini Extra-UE (Terzi Paesi, UK, USA, ecc.)
* **Inquadramento Giuridico:** Procedura bifasica regolata da OUG 194/2002 `[RO-SRC-01]`, OG 25/2014 `[RO-SRC-02]` e OUG 32/2026 `[RO-SRC-07]`.
* **Fase 1: Autorizzazione al Lavoro (Aviz de angajare / Cerere Unică):**
  - Il datore di lavoro richiede l'autorizzazione all'IGI tramite `portaligi.mai.gov.ro` o `workinromania.gov.ro` `[RO-SRC-19]`, `[RO-SRC-30]`.
  - Condizioni preliminari: il datore deve essere in regola fiscalmente (certificato fiscale ANAF senza debiti), non aver subito condanne per lavoro sommerso e aver svolto il test del mercato del lavoro (annuncio su quotidiani e *adeverință de la AJOFM* attestante l'assenza di candidati idonei residenti o comunitari) `[RO-SRC-02]`.
  - Contingente: l'assunzione rientra nel contingente numerico di **90.000 quote** per il 2026 `[RO-SRC-08]`. Sotto OUG 32/2026 la mansione deve essere compresa nella lista delle professioni deficitarie (*ocupații deficitare*) `[RO-SRC-07]`.
  - Costo autorizzazione IGI: **100 EUR** (pagato in RON al cambio BNR del giorno) `[RO-SRC-14]`.
  - Tempi di rilascio de jure: 30 giorni (+15 giorni per accertamenti) `[RO-SRC-02]`; de facto 60–120 giorni nelle grandi province (Bucarest, Cluj, Timiș).
* **Fase 2: Visto Consolare di Lungo Soggiorno (Viza D/AM):**
  - Con l'avviso approvato, il lavoratore inoltra la domanda di visto su `evisa.mae.ro` `[RO-SRC-10]`.
  - **Termine perentorio:** La domanda di visto deve essere depositata entro **180 giorni** dalla data di rilascio dell'avviso di assunzione ex art. 44 alin. (4) OUG 194/2002 (termine esteso da OUG nr. 59/2022 dai vecchi 60 giorni) `[RO-SRC-01]`, `[RO-SRC-02]`.
  - Tassa consolare visto D: **300 EUR** per istanze dal 27/04/2026 ex OUG 32/2026 `[RO-SRC-07]`, `[RO-SRC-11]`. Durata del visto: 90 giorni.
* **Fase 3: Ingresso, Contratto e Permesso di Soggiorno (Permis Unic):**
  - Entro **15 giorni lavorativi** dall'ingresso in Romania, il datore deve stipulare il Contratto Individuale di Lavoro (CIM) e registrarlo nel sistema informatico dei lavoratori (REVISAL) `[RO-SRC-02]`.
  - Entro e non oltre **30 giorni prima della scadenza del visto D di 90 giorni**, il lavoratore deve depositare su `portaligi.mai.gov.ro` la richiesta per il *Permis de ședere temporară în scop de muncă* (Permis unic) `[RO-SRC-01]`, `[RO-SRC-19]`.
  - Costo IGI: **120 EUR** (tassa proroga soggiorno) + **265 RON** (costo materiale della card biometrica versato a CEC Bank) `[RO-SRC-14]`, `[RO-SRC-16]`.
  - Validità del permesso: 1 anno, rinnovabile annualmente.
* **Soglia Salariale Minima:** Almeno il salario minimo lordo nazionale garantito: **4.325 RON/mese** `[RO-SRC-06]`.
* **Vincolo di Stabilità (Trappola 12 mesi):** Durante i primi 12 mesi dal primo contratto, il lavoratore non può cambiare azienda senza il consenso scritto formale del datore iniziale (*acord scris*), a pena di revoca del titolo ed espulsione (art. 17 alin. 1^1 OG 25/2014, Legea 28/2024) `[RO-SRC-02]`, `[RO-SRC-03]`. Salve le eccezioni di licenziamento incolpevole (art. 65 Codul Muncii) o dimissioni per stipendio non pagato (art. 81 alin. 8).

---

### CASO 2: Lavoro Altamente Qualificato (Carta Blu UE / Cartea Albastră)

#### Cittadini UE / SEE / Svizzera
* Accesso libero senza vincoli retributivi minimi di legge speciali `[RO-SRC-04]`.

#### Cittadini Extra-UE
* **Inquadramento Normativo:** Art. 56 alin. (1) OUG 194/2002 `[RO-SRC-01]`, integrato da OG 25/2014 `[RO-SRC-02]` e riformato radicalmente dalla *Legea nr. 28/2024* `[RO-SRC-03]`.
* **Requisiti Contrattuali e Formativi:**
  - Contratto di lavoro per occupazione ad alta qualificazione (classificazioni ISCO-08 livelli 1 e 2 / COR) stipulato per una durata di **almeno 6 mesi** (termine abbassato dalla Legge 28/2024, in precedenza 12 mesi) `[RO-SRC-03]`.
  - Possesso di un titolo di istruzione terziaria universitaria di almeno 3 anni (validato da CNRED `[RO-SRC-21]`), **OPPURE esperienza professionale equiparata**:
    * Per manager e specialisti ICT (gruppi COR 133 e 25): **almeno 3 anni di esperienza professionale pertinente** maturata nei 7 anni precedenti `[RO-SRC-03]`;
    * Per gli altri settori qualificati: almeno 5 anni di esperienza professionale affine `[RO-SRC-03]`.
* **Soglia Salariale Obbligatoria (2026):**
  - La Legge 28/2024 ha ridotto il moltiplicatore salariale al livello del salario medio lordo (1.0x, eliminando il vecchio vincolo del 2x o 1.5x) `[RO-SRC-03]`.
  - Importo vincolante per il 2026: **almeno 9.192 RON/mese lordi** (ca. 1.724 EUR/mese al cambio BNR) ex Legea 44/2026 `[RO-SRC-05]`.
* **Procedura:**
  - Il datore richiede l'*Aviz de angajare pentru lucrători înalt calificați* (tassa **100 EUR**; ridotta a **25 EUR** se il richiedente è già residente legale o per rinnovo) `[RO-SRC-14]`. **Esenzione totale dal test del mercato del lavoro (nessun passaggio AJOFM) ed esenzione dal contingente annuale flussi** `[RO-SRC-02]`, `[RO-SRC-07]`.
  - Rilascio del visto D/AM (o classificazione speciale D/AM1) su `evisa.mae.ro` (**300 EUR** ex OUG 32/2026) `[RO-SRC-07]`, `[RO-SRC-10]`, `[RO-SRC-11]`.
  - All'arrivo: rilascio del permesso plastificato **Cartea Albastră a UE** presso l'IGI (tassa **120 EUR** proroga soggiorno + **265 RON** card biometrica) `[RO-SRC-15]`, `[RO-SRC-16]`.
  - Validità: durata del contratto più 3 mesi, con un massimo di **3 anni** (esteso rispetto ai 2 anni previgenti) `[RO-SRC-03]`.
* **Diritti Speciali Carta Blu:**
  - **Ricongiungimento familiare immediato e simultaneo:** Possibilità per lo sponsor di depositare l'istanza per il coniuge e i figli contestualmente alla propria domanda di Carta Blu (art. 46 alin. 6^1 OUG 194/2002) `[RO-SRC-03]`. Il coniuge ottiene l'accesso al lavoro subordinato senza autorizzazione datoriale `[RO-SRC-03]`.
  - **Mobilità Intra-UE:** Possibilità di svolgere viaggi e attività di lavoro di breve durata in altri Stati UE fino a 90 giorni su 180; diritto di trasferirsi in Romania dopo 12 mesi di soggiorno con Carta Blu in un altro Stato UE senza dover rientrare nel Paese d'origine `[RO-SRC-03]`.

---

### CASO 3: Internship / Tirocinio (Stagiar)

* **Tipologia A: Tirocinio curriculare per studenti già iscritti:**
  - Gli studenti già regolarmente soggiornanti in Romania con permesso per studio svolgono il tirocinio previsto dal piano di studi universitario senza avviso di lavoro datoriale e senza limitazioni tariffarie aggiuntive `[RO-SRC-02]`.
* **Tipologia B: Convenzione di Formazione Professionale (Stagiar ex Direttiva (UE) 2016/801):**
  - Riservato a candidati che abbiano conseguito un titolo universitario nei 2 anni precedenti o a studenti universitari all'estero `[RO-SRC-01]`.
  - Richiede un accordo di tirocinio (*convenție de formare profesională / stagiu*) stipulato con un'entità ospitante autorizzata in Romania, con programma di addestramento teorico-pratico `[RO-SRC-01]`.
  - Indennità minima di tirocinio: ai sensi della *Legea nr. 176/2018*, l'indennità (*indemnizația de internship*) non può essere inferiore al **50% del salario minimo lordo** (**2.162,50 RON/mese** nel 2026) `[RO-SRC-27]`.
  - Visto di lungo soggiorno: **Viza D/ST (Studii/Stagiu)** o D/AS (**300 EUR** ex OUG 32/2026) `[RO-SRC-07]`, `[RO-SRC-11]`.
  - Permesso temporaneo IGI: durata massima di **6 mesi**, non prorogabile salvo specifiche convenzioni internazionali (costo: **120 EUR + 265 RON**) `[RO-SRC-14]`, `[RO-SRC-16]`.

---

### CASO 4: Studio Universitario (Bachelor / Master)

#### Cittadini UE / SEE / Svizzera
* Iscrizione parificata ai cittadini rumeni tramite riconoscimento del diploma di scuola superiore o laurea presso il CNRED `[RO-SRC-21]`.
* Nessun visto. Per soggiorni superiori a 3 mesi: richiesta gratuita del *Certificat de înregistrare în scop de studii* all'IGI (con certificato d'iscrizione all'ateneo, alloggio, TEAM/EHIC o assicurazione) `[RO-SRC-04]`, `[RO-SRC-13]`.

#### Cittadini Extra-UE
* **Iter Pre-Partenza:**
  1. Iscrizione e rilascio della **Scrisoare de acceptare la studii** emessa dal Ministero dell'Istruzione romeno tramite la piattaforma `studyinromania.gov.ro` `[RO-SRC-22]`.
  2. Ricevuta di pagamento delle tasse universitarie per almeno il primo anno accademico.
  3. Prova dei mezzi economici di sussistenza (*Proof of Funds*): obbligo di dimostrare disponibilità finanziarie pari ad almeno il salario minimo lordo nazionale (**4.325 RON/mese**, ca. 811 EUR/mese) per l'intero periodo di validità del titolo (minimo **25.950 RON** per 6 mesi su conto bancario) `[RO-SRC-01]`, `[RO-SRC-06]`.
  4. Domanda di visto di lungo soggiorno per studi (**Viza D/SD**) su `evisa.mae.ro` `[RO-SRC-10]`. Tassa: **300 EUR** ex OUG 32/2026 (gratuito unicamente per borsisti dello Stato romeno) `[RO-SRC-07]`, `[RO-SRC-11]`.
* **Procedura all'Arrivo e Titolo di Soggiorno:**
  - Entro 90 giorni dall'ingresso (e con almeno 30 giorni prima della scadenza del visto D), deposito della domanda di *Permis de ședere temporară în scop de studii* su `portaligi.mai.gov.ro` `[RO-SRC-19]`.
  - **Regime tariffario IGI (Art. 58 OUG 194/2002):**
    * *Borsisti dello Stato romeno:* Esenzione totale da ambedue le tasse (0 EUR proroga + 0 RON card) ex lege `[RO-SRC-01]`, `[RO-SRC-16]`.
    * *Studenti ordinari autofinanziati:* Pagamento della tassa ordinaria di proroga di **120 EUR** (in RON) + **265 RON** per la card biometrica `[RO-SRC-14]`, `[RO-SRC-16]`.
* **Lavoro Part-Time durante gli Studi (Legea nr. 28/2024):**
  - Gli studenti extracomunitari con permesso di studio possono lavorare **senza autorizzazione al lavoro (*fără aviz de angajare*)** `[RO-SRC-02]`.
  - **Nuovo limite orario:** Fino a un massimo di **6 ore al giorno (30 ore settimanali)** con contratto part-time regolarmente registrato in REVISAL (limite innalzato da 4 a 6 ore dalla Legge 28/2024) `[RO-SRC-02]`, `[RO-SRC-03]`.
* **Copertura Sanitaria:**
  - Gli studenti universitari fino a 26 anni di età sono **assicurati gratuitamente d'ufficio senza versamento di contributi** presso il Servizio Sanitario Nazionale (CNAS) ex art. 224 Legea nr. 95/2006, purché non percepiscano redditi da lavoro `[RO-SRC-23]`.

---

### CASO 5: Tesi e Ricerca Scientifica (Cercetare Științifică)

* **Visiting Student per Tesi:**
  - Se il soggiorno non prevede remunerazione di ricerca: iscrizione come visiting con accordo inter-universitario. Fino a 90 giorni si applica il regime Schengen C o l'esenzione visto; oltre 90 giorni si richiede il visto studio D/SD `[RO-SRC-01]`.
* **Ricercatore Scientifico (Hosting Agreement / Acord de Primire):**
  - Inquadramento ex art. 48 e art. 67 OUG 194/2002 e Direttiva (UE) 2016/801 `[RO-SRC-01]`.
  - Richiede un **Acord de primire** sottoscritto con un istituto universitario o centro di ricerca romeno accreditato dal Ministero della Ricerca, dell'Innovazione e della Digitalizzazione (MCID) `[RO-SRC-17]`. L'ente garantisce le risorse e assume l'obbligo per le spese di rimpatrio per 6 mesi dopo la fine dell'accordo.
  - **Esenzione Lavoro:** I ricercatori sono **esenti dall'Aviz de angajare IGI** (art. 3 OG 25/2014) `[RO-SRC-02]`.
  - Visto di lungo soggiorno: **Viza D/CS** (**300 EUR** ex OUG 32/2026) `[RO-SRC-07]`, `[RO-SRC-10]`, `[RO-SRC-11]`.
  - Permesso IGI: rilascio di *Permis de ședere în scop de cercetare științifică* per la durata del progetto (costo: **120 EUR + 265 RON**) `[RO-SRC-16]`.
  - **Mobilità Intra-UE:** I titolari di permesso di ricerca emesso da un altro Stato membro UE possono svolgere attività di ricerca in Romania fino a 180 giorni (mobilità a breve termine) o fino a 360 giorni (mobilità a lungo termine) mediante semplice notifica dell'ente ad IGI `[RO-SRC-17]`.
  - Al termine del progetto, il ricercatore gode del diritto a una proroga di **9 mesi** per cercare lavoro o avviare un'impresa in Romania (art. 67 alin. 4 OUG 194/2002) `[RO-SRC-01]`.

---

### CASO 6: Erasmus+ e Mobilità Intra-UE Studentesca

* **Cittadini UE in Erasmus+:** Regime ordinario di libera circolazione; per soggiorni oltre 3 mesi rilascio gratuito del *Certificat de înregistrare* ad IGI `[RO-SRC-04]`. Copertura sanitaria garantita tramite Tessera TEAM (EHIC).
* **Studenti Extra-UE Titolari di Permesso UE (Direttiva (UE) 2016/801, art. 31):**
  - Gli studenti extracomunitari regolarmente soggiornanti per studio in un altro Stato UE e partecipanti a mobilità Erasmus+ o scambi accademici in Romania **NON necessitano di visto d'ingresso D/SD** `[RO-SRC-01]`.
  - L'università rumena ospitante trasmette una **notifica preventiva all'IGI** corredata dalla copia del permesso UE valido, dal Learning Agreement Erasmus+, dalla prova di sussistenza e dall'assicurazione sanitaria `[RO-SRC-16]`.
  - Se l'IGI non formula obiezioni entro 30 giorni, lo studente soggiorna e studia legalmente in Romania per una durata fino a **360 giorni** (o per la durata residua del permesso del primo Paese membro) `[RO-SRC-01]`.

---

### CASO 7: Master di II Livello e Dottorato di Ricerca (Doctorat)

* **Master Universitari:** L'ordinamento accademico rumeno adotta l'architettura Bologna (Licență - Masterat - Doctorat). Il programma biennale di *Masterat* è inquadrato formalmente come corso di secondo ciclo e segue integralmente il canale studio (Visto D/SD, permesso studio, franchigia lavorativa di 6h/giorno) `[RO-SRC-01]`, `[RO-SRC-02]`.
* **Dottorato di Ricerca (Școala Doctorală):**
  - **Canale 1: Dottorando con Borsa di Studio (Student Doctorand):**
    * Inquadramento accademico con visto D/SD e permesso di soggiorno per studio `[RO-SRC-01]`.
    * **Regime Fiscale e Previdenziale Straordinario:** Ai sensi dell'art. 62 lit. a) del Codice Fiscale rumeno (*Legea nr. 227/2015*), le borse di dottorato (*burse doctorale*) sono **totalmente esenti dall'imposta sul reddito delle persone fisiche (10%)** e non sono gravate da contributi previdenziali obbligatori CAS (25%) e CASS (10%) `[RO-SRC-24]`.
  - **Canale 2: Dottorando con Inquadramento Contrattuale Datoriale:**
    * Qualora l'ateneo o l'istituto di ricerca assuma il dottorando come assistente di ricerca, si applica il canale di ricerca scientifica (**Visto D/CS**) o il Contratto Individuale di Lavoro (CIM) ordinario `[RO-SRC-01]`, `[RO-SRC-02]`.
    * In tal caso si applicano le ordinarie aliquote fiscali e contributive sul salario lordo: 25% CAS, 10% CASS, 10% IRPEF, 2,25% CAM datoriale, con immediata iscrizione mutualistica alla CNAS `[RO-SRC-23]`.

---

### CASO 8: Working Holiday (Programul Vacanță și Muncă)

* **Stato Giuridico Attuale (05/10/2026):** **NON ATTIVO / INACCESSIBILE** `[RO-SRC-01]`.
* **Dettaglio Accordi:**
  - La Romania non possiede schemi multilaterali di vacanza-lavoro attivi con nazioni anglofone (nessun accordo con Australia, Nuova Zelanda, Canada, Regno Unito o USA).
  - Nel settembre 2025 il Governo romeno ha approvato il memorandum di negoziato per un accordo bilaterale con la **Repubblica di Corea (Corea del Sud)** (quota annua prevista di 200 candidati tra 18 e 34 anni, validità max 12 mesi).
  - Alla data odierna l'accordo **non è ancora entrato formalmente in vigore** sul piano operativo consolare (si veda [`romania_open_questions.md`](romania_open_questions.md)).
* **Regola per gli Espatriati:** I candidati interessati a viaggiare e lavorare temporaneamente in Romania devono obbligatoriamente ricorrere alle vie ordinarie: visto subordinato D/AM o Carta Blu D/AC `[RO-SRC-01]`, `[RO-SRC-02]`.

---

### CASO 9: Post-Study Work (Proroga 9 Mesi per Ricerca Lavoro o Avvio Impresa)

* **Base Normativa:** Art. 58 alin. (4) OUG nr. 194/2002 (recepimento art. 25 Direttiva (UE) 2016/801) `[RO-SRC-01]`.
* **Aventi Diritto:** Tutti i cittadini extracomunitari che hanno conseguito un titolo accademico superiore (laurea triennale *Licență*, master *Masterat* o dottorato *Doctorat*) presso un ateneo accreditato in Romania `[RO-SRC-01]`.
* **Durata della Proroga:** **9 mesi** non rinnovabili, decorrenti dalla data di completamento degli studi accademici `[RO-SRC-01]`.
* **Tempistica di Richiesta Tassativa:** L'istanza deve pervenire ad IGI tramite `portaligi.mai.gov.ro` **prima della scadenza del permesso di soggiorno per studio** (e con almeno 30 giorni di anticipo) `[RO-SRC-01]`, `[RO-SRC-19]`. Non è necessario attendere la cerimonia di laurea: è sufficiente il certificato provvisorio di laurea (*adeverință de absolvire*) rilasciato dalla segreteria di facoltà.
* **Requisiti Economici:** Dimostrazione di risorse finanziarie proprie pari ad almeno il salario minimo lordo nazionale per i 9 mesi di permanenza (**4.325 RON/mese**, per un totale di almeno **38.925 RON** depositati su conto bancario) `[RO-SRC-01]`, `[RO-SRC-06]`.
* **Vantaggi Straordinari di Conversione:**
  - **Esenzione dal Test del Mercato del Lavoro:** Ai sensi dell'art. 8 lett. e) OG 25/2014, quando il neolaureato trova un'offerta di lavoro, il datore è **totalmente esentato dall'obbligo di pubblicare annunci e di richiedere l'attestazione AJOFM** `[RO-SRC-02]`.
  - **Conversione Diretta in Romania (*In-Country*):** Lo straniero converte il titolo direttamente presso l'ufficio IGI locale in permesso di soggiorno per lavoro o Carta Blu UE, **senza dover uscire dal territorio della Romania e senza dover richiedere un nuovo visto consolare** `[RO-SRC-01]`.
  - Tassa ridotta per l'avviso di assunzione del neolaureato: **25 EUR** (anziché 100 EUR) `[RO-SRC-14]`.

---

### CASO 10: Soggiorni Brevi (≤90 gg) e Ricongiungimento Familiare

#### Soggiorni Brevi e Regime Schengen
* **Regime Schengen:** Ai sensi della Decisione (UE) 2024/210 (dal 31 marzo 2024 per aria/mare) e della Decisione JAI del 12 dicembre 2024 (frontiere terrestri dal 1° gennaio 2025), la Romania applica integralmente le norme Schengen `[RO-SRC-09]`.
* **Computo Cumulativo dei 90 Giorni:** Ogni giorno trascorso sul territorio della Romania viene **conteggiato all'interno del limite massimo consentito di 90 giorni su qualsiasi periodo mobile di 180 giorni nell'intero Spazio Schengen** `[RO-SRC-09]`.
* **Nazionalità Visa-Free (USA, UK, Canada, Australia, Giappone, ecc.):** Ingresso senza visto per max 90/180 giorni per motivi turistici o di affari `[RO-SRC-01]`.
* **Nazionalità con Obbligo di Visto:** Richiesta del **Visto Uniforme Schengen di Tipo C** su `evisa.mae.ro` `[RO-SRC-10]`. Tariffa consolare: **90 EUR** per adulti, **45 EUR** per minori tra 6 e 12 anni (Regolamento (UE) 2024/1415) `[RO-SRC-12]`. Mezzi finanziari: almeno 50 EUR/giorno (minimo 500 EUR per l'intero viaggio).
* **Divieto Assoluto di Conversione:** È categoricamente vietato convertire un soggiorno turistico o visa-free in permesso di soggiorno per lavoro o studio dall'interno della Romania `[RO-SRC-01]`. Chi intende lavorare o studiare deve richiedere il visto D nel Paese d'origine `[RO-SRC-01]`.

#### Ricongiungimento Familiare (Reîntregirea Familiei — Visto D/VF)
* **Sponsor Aventi Diritto:** Cittadini stranieri titolari di permesso di soggiorno temporaneo di almeno 1 anno, titolari di Carta Blu UE, ricercatori o titolari di permesso permanente `[RO-SRC-01]`. (Per i familiari di cittadini UE si applica l'OUG 102/2005: carta di soggiorno a 70 RON e visto gratuito).
* **Procedura in Due Fasi per Familiari di Cittadini Extra-UE:**
  1. *Fase I (Nulla Osta IGI in Romania):* Lo sponsor presenta istanza ad IGI. Requisiti: alloggio idoneo e mezzi di sussistenza continuativi pari ad almeno il **salariul de bază minim brut pe țară (4.325 RON/mese)** per ogni familiare a carico `[RO-SRC-01]`, `[RO-SRC-06]`. L'IGI esamina e rilascia la comunicazione di approvazione (*comunicare de aprobare*) entro 3 mesi `[RO-SRC-18]`.
  2. *Fase II (Visto Consolare D/VF):* I familiari hanno **60 giorni** dalla notifica dell'approvazione per richiedere il visto di lungo soggiorno per ricongiungimento (**Viza D/VF**) su `evisa.mae.ro` `[RO-SRC-10]`. Tariffa consolare: **300 EUR** a persona ex OUG 32/2026 `[RO-SRC-07]`, `[RO-SRC-11]`.
  3. *Fase III (Permesso IGI all'arrivo):* Richiesta del permesso per ricongiungimento entro 90 giorni dall'ingresso (tassa: **120 EUR + 265 RON**) `[RO-SRC-16]`. I familiari ricongiunti godono del pieno diritto di accesso al lavoro subordinato `[RO-SRC-01]`.

---

### CASO 11: Nomadi Digitali (Viza D/ND — Legea nr. 22/2022)

* **Inquadramento Giuridico:** Art. 49^1 OUG 194/2002 introdotto dalla *Legea nr. 22/2022* `[RO-SRC-26]`.
* **Destinatari:** Cittadini extracomunitari impiegati da remoto con contratto di lavoro dipendente presso una società registrata fuori dalla Romania da almeno 3 anni, oppure titolari/amministratori di una società estera attiva da almeno 3 anni `[RO-SRC-26]`.
* **Soglia di Reddito Mensile Obbligatoria (2026):**
  - La legge richiede la dimostrazione di redditi esteri continuativi pari ad **almeno 3 volte il salario medio lordo mensile** della Romania nei 6 mesi precedenti la domanda `[RO-SRC-26]`.
  - Parametro 2026: \(3 \times 9.192\text{ RON} = \mathbf{27.576\text{ RON/mese}}\) (pari a **5.173,15 EUR/mese** al cambio BNR) `[RO-SRC-05]`, `[RO-SRC-20]`.
* **Regime Fiscale e Previdenziale Straordinario:**
  - Ai sensi dell'art. 60 e 76 Codul Fiscal `[RO-SRC-24]`, i nomadi digitali sono **totalmente esenti da imposta sul reddito (10%) e da contributi previdenziali e sanitari (CAS 25%, CASS 10%) per i primi 183 giorni** di presenza continuativa nell'arco di 12 mesi consecutivi.
* **Titolo e Costi:**
  - Visto di lungo soggiorno: **Viza D/ND** su `evisa.mae.ro` (**300 EUR**) `[RO-SRC-07]`, `[RO-SRC-11]`.
  - Permesso temporaneo IGI: durata iniziale di **6 mesi**, rinnovabile per ulteriori 6 mesi fino a 1 anno (tassa IGI: **120 EUR + 265 RON**) `[RO-SRC-16]`.

---

## 3. Riepilogo Costi Amministrativi Obbligatori per Tipologia

Tutti i versamenti in valuta nazionale (RON) per tariffe denominate in Euro si calcolano al tasso ufficiale BNR al momento del pagamento (**1 EUR = 5,3306 RON** al 05/10/2026) `[RO-SRC-20]`.

| Tipologia di Procedura / Titolo | Tariffa Consolare Visto (MAE) | Tassa Autorizzazione Lavoro (IGI) | Tassa Proroga Soggiorno (IGI) | Tassa Tessera Plastificata / Card | Totale Spese Amministrative Obbligatorie |
| :--- | :---: | :---: | :---: | :---: | :---: |
| **Registrazione Cittadino UE/SEE/CH** | *N/A (Esente)* | *N/A (Esente)* | *N/A (Esente)* | **0 RON** (Gratuito) | **0 RON** `[RO-SRC-13]` |
| **Carta di Soggiorno Familiare Non-UE di Cittadino UE** | *N/A (Esente)* | *N/A (Esente)* | *N/A (Esente)* | **70 RON** | **70 RON** (~13,13 EUR) `[RO-SRC-04]` |
| **Lavoro Dipendente Subordinato Ordinario** | **300 EUR** (~1.599,18 RON) | **100 EUR** (~533,06 RON) | **120 EUR** (~639,67 RON) | **265 RON** | **520 EUR + 265 RON = 3.036,91 RON** (~569,71 EUR) `[RO-SRC-07]`, `[RO-SRC-14]`, `[RO-SRC-16]` |
| **Carta Blu UE (Altamente Qualificati)** | **300 EUR** (~1.599,18 RON) | **100 EUR** (~533,06 RON) *(o 25 EUR se cambio)* | **120 EUR** (~639,67 RON) | **265 RON** | **520 EUR + 265 RON = 3.036,91 RON** (~569,71 EUR) `[RO-SRC-07]`, `[RO-SRC-14]`, `[RO-SRC-16]` |
| **Studio Universitario (Non-Borsisti)** | **300 EUR** (~1.599,18 RON) | *N/A (Esente)* | **120 EUR** (~639,67 RON) | **265 RON** | **420 EUR + 265 RON = 2.503,85 RON** (~469,71 EUR) `[RO-SRC-07]`, `[RO-SRC-16]` |
| **Studio Universitario (Borsisti dello Stato Romeno)** | **0 EUR (Esente)** | *N/A (Esente)* | **0 EUR (Esente)** | **0 RON (Esente)** | **0 RON (Totalmente Gratuito)** `[RO-SRC-01]`, `[RO-SRC-16]` |
| **Post-Study Work (Proroga 9 Mesi Neolaureati)** | *N/A (In-country)* | *N/A (Fase ricerca)* | **120 EUR** (~639,67 RON) | **265 RON** | **120 EUR + 265 RON = 904,67 RON** (~169,71 EUR) `[RO-SRC-14]`, `[RO-SRC-16]` |
| **Ricerca Scientifica (Hosting Agreement)** | **300 EUR** (~1.599,18 RON) | *N/A (Esente)* | **120 EUR** (~639,67 RON) | **265 RON** | **420 EUR + 265 RON = 2.503,85 RON** (~469,71 EUR) `[RO-SRC-07]`, `[RO-SRC-16]` |
| **Ricongiungimento Familiare Extra-UE** | **300 EUR** (~1.599,18 RON) | *N/A (Esente)* | **120 EUR** (~639,67 RON) | **265 RON** | **420 EUR + 265 RON = 2.503,85 RON** (~469,71 EUR) `[RO-SRC-07]`, `[RO-SRC-16]` |
| **Nomadi Digitali (Visto D/ND)** | **300 EUR** (~1.599,18 RON) | *N/A (Esente)* | **120 EUR** (~639,67 RON) | **265 RON** | **420 EUR + 265 RON = 2.503,85 RON** (~469,71 EUR) `[RO-SRC-07]`, `[RO-SRC-26]` |
| **Visto Turistico / Affari Breve Termine (Schengen C)** | **90 EUR** (~479,75 RON) | *N/A (Esente)* | *N/A (Esente)* | *N/A (Esente)* | **90 EUR** (~479,75 RON) `[RO-SRC-12]` |

---

## 4. Statuto Giuridico durante l'Attesa (La Ricevuta IGI)

* **Efficacia Territoriale Esclusiva:** All'atto del deposito della domanda di rilascio o rinnovo del permesso di soggiorno, l'IGI rilascia una ricevuta con codice e timbro (*dovada depunerii dosarului / adeverință*) `[RO-SRC-01]`. Tale ricevuta certifica la piena regolarità del soggiorno **esclusivamente all'interno del territorio nazionale della Romania** `[RO-SRC-01]`.
* **Diritti Riconosciuti:** Permette di iniziare o proseguire l'attività lavorativa, iscriversi al medico di base o frequentare i corsi universitari `[RO-SRC-01]`, `[RO-SRC-02]`.
* **Divieto Tassativo di Espatrio (Trappola della Ricevuta):**
  - La ricevuta cartacea IGI **NON costituisce titolo di viaggio internazionale né documento valido per circolare nello Spazio Schengen** `[RO-SRC-09]`, `[RO-SRC-28]`.
  - Se il titolare ha il visto D scaduto o è in attesa del primo rilascio ed esce dalla Romania, le compagnie aeree e le polizie di frontiera estere **negheranno categoricamente l'imbarco per il rientro** `[RO-SRC-28]`.
  - Non sono consentiti transiti attraverso altri Stati membri. Per viaggiare all'estero occorre attendere il rilascio materiale del tesserino plastificato *Permis de Ședere* `[RO-SRC-01]`.

---

## 5. Integrazione Amministrativa e Pratiche Post-Arrivo

1. **Cod Numeric Personal (CNP):**
   - Codice identificativo di 13 cifre che funge da identificativo unico per lavoro, sanità e fisco.
   - È impresso direttamente sul *Certificat de înregistrare* per i cittadini UE `[RO-SRC-04]` e sul *Permis de ședere* per gli extracomunitari `[RO-SRC-01]`. Il visto D apposto sul passaporto **non contiene il CNP**.
2. **Numero di Identificazione Fiscale (NIF) e Registrazione ANAF:**
   - Gli stranieri privi di CNP che devono compiere atti fiscali prima del rilascio del permesso di soggiorno (es. versamento imposte, compravendite, contratti d'impresa) ottengono il **NIF** tramite il **Formularul 030** depositato presso l'ANAF `[RO-SRC-25]`.
3. **Conto Bancario Rumeno:**
   - I principali istituti bancari (Banca Transilvania, BCR, BRD, Raiffeisen, ING) esigono obbligatoriamente il documento attestante il CNP (tessera plastificata *Permis de Ședere* o *Certificat de înregistrare*), l'attestazione del codice fiscale del Paese d'origine (TIN) e la prova documentata dell'alloggio `[RO-SRC-01]`. Spesso rifiutano l'apertura con il solo visto D consolare.
4. **Assicurazione Sanitaria Statale (CNAS):**
   - **Lavoratori dipendenti:** Iscrizione automatica d'ufficio con trattenuta in busta paga del contributo sanitario CASS pari al **10%** del salario lordo `[RO-SRC-23]`.
   - **Studenti fino a 26 anni:** Copertura mutualistica statale gratuita senza versamento di contributi, previa presentazione della dichiarazione notarile di assenza di redditi e dell'attestato universitario `[RO-SRC-23]`.
   - **Studenti over 26 o disoccupati:** Iscrizione volontaria alla CNAS mediante deposito della *Declarația Unică* ad ANAF e versamento del 10% calcolato su una base forfettaria di 6 salari minimi lordi `[RO-SRC-23]`.
   - È obbligatoria la scelta e iscrizione presso un **Medico di Famiglia (*Medic de familie*)** convenzionato con la cassa distrettuale (CAS) per accedere a visite specialistiche e ricette mutuabili `[RO-SRC-23]`.
5. **Prova Alloggio e Registrazione Fiscale dei Contratti di Locazione:**
   - Ai sensi dell'art. 120 del Codice Fiscale rumeno e dell'Ordinul ANAF 2031/2022, il locatore ha l'obbligo di registrare il contratto di affitto all'ANAF entro 30 giorni tramite il **Formularul 168** `[RO-SRC-24]`.
   - L'IGI esige inderogabilmente la copia del contratto con la ricevuta telematica rilasciata dal cassetto fiscale ANAF (SPV). In caso di ospitalità gratuita, è necessario un **contratto di comodato in forma notarile autentica (*contract de comodat la notar*)** con estratto catastale recente (*extras de carte funciară*) `[RO-SRC-01]`, `[RO-SRC-24]`.

---

## 6. Red Flags e Trappole Procedurali Critiche

1. **Trappola Schengen 90/180:** Non è più possibile "resettare" i 90 giorni Schengen soggiornando in Romania. Qualsiasi giorno trascorso in Romania si cumula con i giorni trascorsi negli altri 28 Paesi Schengen `[RO-SRC-09]`.
2. **Divieto di Conversione In-Country per Soggiorni Brevi:** I turisti e i cittadini con passaporti esenti da visto (USA, UK, Canada, Australia) non possono presentare domanda di permesso di soggiorno direttamente in Romania: devono uscire e richiedere il visto D presso il consolato romeno nel proprio Paese di residenza `[RO-SRC-01]`.
3. **Scadenza Perentoria dei 30 Giorni Pre-Visto:** La domanda di permesso di soggiorno temporaneo deve essere registrata su `portaligi.mai.gov.ro` con **almeno 30 giorni di anticipo rispetto alla scadenza del visto D di 90 giorni** (art. 51 OUG 194/2002) `[RO-SRC-01]`. Depositare a meno di 30 giorni comporta contravvenzioni pecuniarie e il pericolo concreto di allontanamento forzato con ordine di rimpatrio (*decizie de returnare*) `[RO-SRC-01]`.
4. **Termine Deposito Visto D post-Avviso di Lavoro:** Dal momento in cui l'IGI rilascia l'avviso di assunzione (*aviz de angajare*), il lavoratore ha **180 giorni di calendario** per richiedere il visto D/AM su `evisa.mae.ro` ai sensi dell'art. 44 alin. (4) OUG 194/2002 modificato da OUG nr. 59/2022 `[RO-SRC-01]`. (I vecchi 60 giorni previsti dall'art. 30 OG 25/2014 sono stati abrogati, ma è tassativo attivarsi tempestivamente a causa delle attese consolari di 2-4 mesi in Asia).
5. **Vincolo di Assunzione entro 15 Giorni Lavorativi:** Il contratto individuale di lavoro deve essere firmato e registrato in REVISAL entro 15 giorni lavorativi dallo sbarco in Romania `[RO-SRC-02]`.
6. **Formula Obbligatoria del Certificato Medico:** Per l'istruttoria IGI, i certificati medici emessi in Romania devono riportare testualmente la formula sacramentale: *"Clinic sănătos, apt pentru muncă, nu este în evidență cu boli infecto-contagioase care pun în pericol sănătatea publică"* `[RO-SRC-01]`. Certificati generici vengono sospesi o rigettati.
7. **Legalizzazione del Casellario Giudiziale:** Il certificato penale rilasciato dal Paese d'origine deve recare tassativamente l'**Apostille dell'Aja** (o sovralegalizzazione consolare per i Paesi non aderenti; esenzione ex Reg. UE 2016/1191 per atti pubblici UE con modulo multilingue) e una **traduzione giurata in rumeno legalizzata da un notaio pubblico in Romania** `[RO-SRC-01]`.
8. **Controlli Domiciliari IGI (*Verificări în Teren*):** Le unità investigative dell'IGI compiono ispezioni a sorpresa al domicilio dichiarato. L'irreperibilità o la dichiarazione di indirizzi fittizi comporta l'annullamento immediato del permesso e la denuncia penale per falsità ideologica (*fals în declarații*, art. 326 Cod Penal) `[RO-SRC-29]`.
9. **Frontiere Terrestri e Divieto di Espatrio con la Sola Ricevuta IGI:** Nonostante l'adesione Schengen terrestre dal 1° gennaio 2025, permangono filtri mobili di polizia e verifiche mirate con scanner `e-DAC` ai valichi autostradali (Nădlac II, Borș II) e ferroviari `[RO-SRC-28]`. È categoricamente vietato viaggiare all'estero con la semplice ricevuta cartacea IGI (*dovada depunerii*): le polizie di frontiera estere e ungheresi non la riconoscono, con rischio di respingimento e sanzioni `[RO-SRC-09]`, `[RO-SRC-28]`.
10. **Requisiti Nascosti del Datore per l'Aviz (Art. 4 OG 25/2014):** L'avviso di assunzione viene respinto se l'azienda ha debiti tributari ANAF, iscrizioni nel *cazier fiscal* o se ha subito sanzioni dall'ITM per lavoro non dichiarato/sotto-dichiarato nei **6 mesi precedenti** la domanda `[RO-SRC-02]`.
11. **Obbligo Registrazione Cittadini UE entro 90 Giorni:** Il superamento del termine di 90 giorni senza richiedere il *Certificat de înregistrare* costituisce illecito amministrativo punito con sanzione pecuniaria ex art. 35 OUG 102/2005 `[RO-SRC-04]`.

---
*Fine della Guida Ufficiale Visti e Immigrazione per la Romania. Validata dal Council il 05/10/2026 (Revisione Integrale 06/10/2026).*
