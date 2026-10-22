---
country: "Netherlands"
country_it: "Paesi Bassi"
iso_code: "NL"
last_verified: "2026-10-05"
review_by: "2027-03-31"
version: "1.0.0"
citizenships_covered:
  - "UE / SEE / Svizzera (inclusa cittadinanza italiana)"
  - "Extra-UE (incl. UK, USA, Canada, India, Cina, Paesi terzi)"
---

# Guida Ufficiale Visti e Immigrazione: Paesi Bassi (Netherlands)

> **Regola di integrità:** Questo documento costituisce l'**UNICA fonte di verità** del progetto Admetia per i Paesi Bassi. Ogni dato numerico, tariffa, soglia di reddito o requisito procedurale reca un riferimento univoco `[ID-fonte]` collegato al registro ufficiale [`netherlands_sources.md`](netherlands_sources.md). I punti soggetti a divergenza prasseologica o a monitoraggio normativo sono catalogati in [`netherlands_open_questions.md`](netherlands_open_questions.md).

---

## 1. Architettura Giuridica ed Enti Competenti

Il sistema dell'immigrazione e del soggiorno olandese si fonda su un'architettura integrata statale e municipale:

- **Livello Centrale dell'Immigrazione (Ministero della Giustizia e della Sicurezza / Ministero dell'Asilo e della Migrazione):**
  - **Immigratie- en Naturalisatiedienst (IND):** Agenzia esecutiva sovrana competente per la valutazione di tutte le domande di visto per soggiorno prolungato (*Machtiging tot voorlopig verblijf* - MVV), permessi di soggiorno temporanei e permanenti (*Verblijfsvergunning* - VVR), accreditamento degli sponsor (*Erkend referentschap*) e contenzioso `[NL-SRC-01]`, `[NL-SRC-02]`, `[NL-SRC-14]`.
  - **Ministero degli Affari Esteri (*Ministerie van Buitenlandse Zaken* / Netherlands Worldwide):** Rete diplomatica estera (ambasciate e consolati generali) competente per la raccolta dei dati biometrici e il rilascio materiale del visto MVV e dei visti Schengen C `[NL-SRC-23]`.
- **Livello Mercato del Lavoro e Previdenza:**
  - **Uitvoeringsinstituut Werknemersverzekeringen (UWV):** Istituto pubblico per le assicurazioni dei lavoratori, responsabile del rilascio dell'autorizzazione al lavoro (*Tewerkstellingsvergunning* - TWV) e della verifica dell'esame del mercato del lavoro (*arbeidsmarkttoets*) per i lavoratori dipendenti ordinari `[NL-SRC-08]`, `[NL-SRC-20]`.
- **Livello Anagrafico Locale e Sicurezza:**
  - **Amministrazioni Comunali (*Gemeenten* - 342 municipalità):** Competenti per l'iscrizione obbligatoria nell'Anagrafe della Popolazione (*Basisregistratie Personen* - BRP), il controllo dell'autenticità dell'indirizzo abitativo e l'attribuzione del codice fiscale e di servizio unico cittadino (**BSN** - *Burgerservicenummer*) `[NL-SRC-17]`, `[NL-SRC-30]`.
  - **Punti di Registrazione per Non Residenti (*RNI - Registratie Niet-Ingezetenen*):** 19 comuni designati per l'attribuzione del BSN a chi soggiorna per meno di 4 mesi `[NL-SRC-18]`.
- **Livello Fiscale e Sanitario:**
  - **Belastingdienst (Amministrazione Finanziaria):** Gestione del regime fiscale agevolato per impatriati (*30%-regeling*) e dei sussidi sociali (*Toeslagen*) `[NL-SRC-19]`, `[NL-SRC-31]`.
  - **Het CAK / Zorginstituut Nederland:** Vigilanza sull'obbligo di assicurazione sanitaria nazionale (*Zorgverzekeringswet*) `[NL-SRC-21]`.
- **Livello Istruzione Superiore:**
  - **Nuffic:** Ente nazionale per l'internazionalizzazione dell'istruzione, responsabile della comparazione dei titoli accademici esteri e della convenzione standard di tirocinio `[NL-SRC-22]`.

---

## 2. Matrice dei Casi d'Uso (Dettaglio Operativo UE vs Extra-UE)

---

### Caso 1: Lavoro Dipendente Ordinario (Single Permit / GVVA con Test UWV)

#### A. Cittadini UE / SEE / Svizzera
- **Regime giuridico:** Piena libertà di circolazione dei lavoratori (art. 45 TFUE; art. 8(e) Vw 2000) `[NL-SRC-12]`, `[NL-SRC-25]`. Nessun visto d'ingresso, nessun permesso di lavoro (TWV) né quote flussi.
- **Procedura all'arrivo:**
  1. Ingresso con passaporto o carta d'identità valida.
  2. Iscrizione entro **5 giorni** presso l'anagrafe municipale (*Gemeente*) del luogo di residenza se il soggiorno supera i 4 mesi `[NL-SRC-17]`.
  3. Rilascio immediato del **BSN** (*Burgerservicenummer*), indispensabile per il contratto di lavoro, le imposte e la sanità.
  4. Non è richiesto alcun titolo cartaceo dell'IND, ma è possibile richiedere la *Verificatie tegen het EU-gemeenschapsrecht* (attestazione facoltativa di soggiorno lecito, costo 85,00 €) `[NL-SRC-02]`, `[NL-SRC-12]`.
- **Costi:** 0 € di leges IND. Eventuale costo per certificato anagrafico comunale (circa 15,00 € - 20,00 €).

#### B. Cittadini Extra-UE (Single Permit / GVVA - Gecombineerde vergunning voor verblijf en arbeid)
- **Regime giuridico:** Artt. 14 e segg. Vw 2000; Wet arbeid vreemdelingen (Wav) `[NL-SRC-07]`, `[NL-SRC-27]`.
- **Legittimazione esclusiva:** L'istanza non può essere presentata dal lavoratore, ma **deve essere inoltrata esclusivamente dal datore di lavoro olandese all'IND**, che acquisisce il parere vincolante di UWV `[NL-SRC-07]`.
- **Esame prioritario del mercato del lavoro (*Prioriteitgenietend aanbod*):**
  1. Il datore di lavoro deve notificare il posto vacante a UWV con almeno **5 settimane di anticipo** rispetto alla richiesta di permesso `[NL-SRC-20]`.
  2. Il datore deve dimostrare di aver effettuato una ricerca attiva e documentata di candidati olandesi o comunitari (UE/SEE/Svizzera) senza esito positivo.
  3. La retribuzione deve rispettare il salario minimo legale olandese (**WML**) o il Contratto Collettivo (CAO) di settore applicabile. Al 2026, la soglia minima legale corrisponde ad almeno **2.337,00 € lordi/mese senza ferie** (o **2.523,96 € lordi/mese con l'8% di indennità ferie**) `[NL-SRC-01]`, `[NL-SRC-24]`.
- **Istruttoria e Visto MVV:**
  - Procedura unificata TEV (*Toegang en Verblijf*): l'IND decide contestualmente sull'ingresso (MVV) e sul soggiorno (VVR).
  - Ritiro dell'MVV presso l'ambasciata/consolato olandese all'estero previa acquisizione dei dati biometrici `[NL-SRC-23]`.
  - Arrivo nei Paesi Bassi: registrazione BRP al comune entro 5 giorni e ritiro del permesso plastificato GVVA presso uno sportello IND `[NL-SRC-17]`.
- **Costi obbligatori 2026:**
  - Leges IND (a carico del datore o lavoratore): **423,00 €** `[NL-SRC-02]`.
- **Tempi di elaborazione:**
  - Termine statutario IND: **90 giorni (3 mesi)** `[NL-SRC-15]`. Tempi reali de facto: 8–12 settimane.
- **Errori comuni & Trappole:**
  - *Inizio del lavoro prima del rilascio della GVVA:* È rigorosamente vietato lavorare prima che la GVVA sia stata concessa e che il documento di soggiorno (o lo sticker di autorizzazione al lavoro dell'IND) sia stato apposto sul passaporto. L'Uspettore del Lavoro (*Nederlandse Arbeidsinspectie*) commina multe fino a 8.000 € per dipendente non autorizzato `[NL-SRC-27]`.

---

### Caso 2: Lavoro Altamente Qualificato (Highly Skilled Migrant & Carta Blu UE)

#### A. Cittadini UE / SEE / Svizzera
- Accesso libero e incondizionato con le regole della libera circolazione europea `[NL-SRC-12]`.

#### B. Cittadini Extra-UE: Canale 1 – Highly Skilled Migrant (*Kennismigrant*)
- **Requisito di riconoscimento dello Sponsor (*Erkend Referent*):**
  - Il datore di lavoro DEVE essere preventivamente iscritto nel Registro Pubblico degli Sponsor Riconosciuti dell'IND (*Openbaar register erkende referenten*) `[NL-SRC-03]`, `[NL-SRC-14]`.
  - Se l'azienda non è ancora accreditata, deve presentare domanda preventiva all'IND (costo di accreditamento sponsor 2026: **5.080,00 €** per aziende ordinarie con oltre 50 dipendenti, ridotto a **2.539,00 €** per piccole imprese fino a 50 dipendenti o start-up) `[NL-SRC-02]`.
- **Esenzione dal test del mercato del lavoro:**
  - **Completamente esente da qualsiasi esame di mercato o priorità di manodopera locale (UWV non interviene)** `[NL-SRC-03]`.
- **Soglie salariali minime ufficiali 2026 (valide dal 01/01/2026 al 31/12/2026, lorde mensili, escluso 8% indennità ferie):**
  - Lavoratore di età pari o superiore a 30 anni: **5.942,00 € lordi/mese** (con indennità ferie 8%: **6.417,36 €**) `[NL-SRC-01]`.
  - Lavoratore di età inferiore a 30 anni: **4.357,00 € lordi/mese** (con indennità ferie 8%: **4.705,56 €**) `[NL-SRC-01]`.
  - Criterio salariale ridotto (*Verlaagd salariscriterium*): **3.122,00 € lordi/mese** (con indennità ferie 8%: **3.371,76 €**) `[NL-SRC-01]`.
    - *Aventi diritto al criterio ridotto:* soggetti assunti entro 3 anni dal conseguimento di un Bachelor o Master nei Paesi Bassi, oppure entro 3 anni dal conseguimento di un titolo presso un ateneo estero top-200, oppure immediatamente dopo un Orientation Year (*Zoekjaar*).
- **Procedura e Tempi:**
  - Domanda telematica presentata dallo sponsor tramite l'IND Business Portal.
  - Procedura accelerata fast-track: decisione formale IND in **2 settimane** (massimo 4 settimane de facto) `[NL-SRC-15]`.
- **Costi obbligatori 2026:**
  - Leges domanda IND: **423,00 €** `[NL-SRC-02]`.

#### C. Cittadini Extra-UE: Canale 2 – Carta Blu UE (*Europese Blauwe Kaart* - Direttiva (UE) 2021/1883)
- **Assenza di vincolo dello Sponsor Riconosciuto:**
  - **Il datore di lavoro NON deve necessariamente essere uno sponsor riconosciuto (*erkend referent*) dell'IND** `[NL-SRC-04]`. Qualsiasi azienda legalmente stabilita nei Paesi Bassi può assumere un titolare di Carta Blu UE.
- **Requisiti contrattuali e di qualifica:**
  - Contratto di lavoro di durata pari ad almeno **6 mesi** (modificato dalla Direttiva 2021/1883; precedentemente 12 mesi) `[NL-SRC-04]`.
  - Diploma terziario di almeno 3 anni (livello Bachelor/Master, EQF 6+) convalidato da Nuffic, oppure comprovata esperienza professionale equiparata di almeno 3 anni (specialmente nel settore ICT) maturata nei 7 anni precedenti `[NL-SRC-04]`.
- **Soglie salariali minime ufficiali 2026 (lorde mensili, escluso 8% vacanze):**
  - Soglia standard: **5.942,00 € lordi/mese** `[NL-SRC-01]`.
  - Soglia ridotta (neolaureati terziari entro 3 anni dal conseguimento del titolo): **4.754,00 € lordi/mese** `[NL-SRC-01]`.
- **Mobilità facilitata intra-UE:**
  - Dopo 12 mesi di soggiorno legale con Carta Blu in un altro Stato membro UE (o 6 mesi per secondo cambio), il titolare può trasferirsi nei Paesi Bassi per assumere un impiego altamente qualificato con procedura semplificata.
- **Costi obbligatori 2026:**
  - Leges IND: **423,00 €** `[NL-SRC-02]`.

#### D. Cittadini Extra-UE: Canale 3 – Start-up & Essential Start-up Personnel
- **Permesso per Imprenditori Start-up:** Accordo formale con un facilitatore accreditato (*facilitator* convenzionato con RVO), prodotto o servizio innovativo, piano di attività dettagliato e mezzi finanziari di sussistenza. Valido 1 anno, non rinnovabile (funzionale al passaggio a lavoratore autonomo ordinario) `[NL-SRC-33]`. Leges: **423,00 €** `[NL-SRC-02]`.
- **Permesso per Personale Essenziale di Start-up (*Essential start-up personnel*):** Per imprese innovative emergenti con massimo 15 dipendenti; contratto di lavoro con concessione di partecipazione azionaria (*employee equity/stock options* di almeno l'1%) e stipendio conforme almeno alla soglia ridotta per Kennismigrant (**3.122,00 € lordi/mese**) `[NL-SRC-32]`. Leges: **423,00 €** `[NL-SRC-02]`.

---

### Caso 3: Internship / Tirocinio (Curriculare vs Extracurriculare)

#### A. Cittadini UE / SEE / Svizzera
- Pieno accesso a stage curriculari ed extracurriculari senza alcuna autorizzazione preventiva.
- *Nota previdenziale e sanitaria:* se il tirocinio prevede un compenso lordo che supera la soglia di rimborso spese e viene assoggettato a imposta sul salario o raggiunge il salario minimo, scatta l'obbligo di iscrizione alla *Zorgverzekering* olandese `[NL-SRC-21]`.

#### B. Studenti Extra-UE iscritti presso atenei nei Paesi Bassi (Tirocinio Curriculare)
- **Esenzione totale dal permesso di lavoro (TWV):**
  - In virtù dell'art. 3.1, secondo comma, del *Besluit uitvoering Wet arbeid vreemdelingen 2022* (BuWav 2022), il tirocinio curriculare è **completamente esente da TWV** `[NL-SRC-22]`, `[NL-SRC-27]`.
- **Condizione obbligatoria:**
  - Sottoscrizione della **Convenzione di Tirocinio Standard Nuffic** (*Nuffic Standard Internship Agreement / Stageovereenkomst voor buitenlandse studenten*) `[NL-SRC-22]`.
  - Il documento deve essere firmato da tutte e tre le parti: lo studente, l'ateneo olandese di appartenenza e l'azienda ospitante. Una copia deve essere conservata nei registri aziendali ed esibita in caso di ispezione del lavoro.

#### C. Cittadini Extra-UE iscritti presso atenei fuori dai Paesi Bassi o Neolaureati (Tirocinio Extracurriculare)
- **Non è possibile utilizzare la convenzione Nuffic studentesca standard** `[NL-SRC-22]`.
- L'azienda ospitante deve richiedere:
  - Una **TWV** ad UWV se il tirocinio ha una durata non superiore a 90 giorni `[NL-SRC-08]`.
  - Un **Single Permit / GVVA per tirocinio / apprendistato** (*lerend werken / stagiair*) all'IND se la durata supera i 90 giorni `[NL-SRC-02]`, `[NL-SRC-07]`.
- Requisiti: programma di tirocinio formale che attesti una finalità formativa non sostituibile a una normale posizione lavorativa dipendente, piano di apprendimento e rimborso conforme.
- Leges IND: **423,00 €** (oppure **85,00 €** nell'ambito del programma bilaterale di scambi giovanili YWEP) `[NL-SRC-02]`.

---

### Caso 4: Studio Universitario (Bachelor / Master / Corsi Accademici)

#### A. Cittadini UE / SEE / Svizzera
- Iscrizione diretta tramite il portale nazionale *Studielink*. Nessun visto né permesso di soggiorno `[NL-SRC-12]`.
- Copertura sanitaria: tessera europea TEAM/EHIC valida, a condizione che lo studente non svolga alcuna attività lavorativa retribuita `[NL-SRC-21]`.

#### B. Cittadini Extra-UE
- **Presentazione dell'istanza esclusiva tramite Ateneo:**
  - Lo studente non può fare domanda in proprio: la richiesta di visto MVV e permesso di soggiorno per studio (*verblijfsvergunning voor studie*) deve essere inoltrata telematicamente dall'**università olandese accreditata come sponsor riconosciuto** (*Erkend referent*) `[NL-SRC-06]`, `[NL-SRC-14]`.
- **Requisito economico di sussistenza (Proof of Funds) 2026:**
  - Soglia minima mensile per istruzione superiore (HBO o Università WO): **1.130,77 € al mese** `[NL-SRC-01]`.
  - Fabbisogno per un anno accademico completo (12 mesi): **13.569,24 €** (calcolo analitico: $1.130,77 \times 12$), a cui si deve aggiungere il saldo integrale della retta universitaria annuale (*tuition fee*) `[NL-SRC-01]`, `[NL-SRC-06]`.
  - Modalità di dimostrazione: versamento preventivo dell'intera somma sul conto vincolato dell'ateneo (*living fee deposit* rimborsato all'arrivo dopo l'apertura del conto olandese) o certificazione di borsa di studio ufficiale.
- **Obbligo di rendimento accademico (MoMi - *Wet modern migratiebeleid*):**
  - **Soglia del 50% dei crediti (ECTS):** Lo studente extra-UE deve tassativamente conseguire almeno il **50% dei crediti formativi annuali previsti** (tipicamente almeno 30 ECTS su 60) per ciascun anno accademico `[NL-SRC-06]`.
  - In caso di mancato raggiungimento del 50%, l'università ha l'obbligo di legge di revocare la sponsorizzazione e notificare l'IND, comportando la cancellazione del permesso di soggiorno, a meno che non sussistano cause di forza maggiore documentate (gravi motivi di salute, maternità) `[NL-SRC-06]`.
- **Disciplina del lavoro durante lo studio:**
  - *Lavoro subordinato:* Ammesso per un massimo rigido di **16 ore a settimana** durante i periodi di lezione, OPPURE a tempo pieno nei mesi estivi di **giugno, luglio e agosto** (le due opzioni sono rigidamente alternative, non cumulabili) `[NL-SRC-06]`, `[NL-SRC-08]`.
  - **Obbligo di TWV:** Il datore di lavoro DEVE richiedere e ottenere preventivamente una **TWV da UWV** (rilascio gratuito entro 2–4 settimane). Lavorare anche solo 1 ora senza TWV comporta la violazione della legge Wav e sanzioni amministrative pecuniarie all'azienda e allo studente `[NL-SRC-27]`.
  - *Lavoro autonomo / Freelance:* Lo studente extra-UE può svolgere liberamente attività di lavoro autonomo (registrandosi alla *Kamer van Koophandel* - KvK) **senza limiti di orario e senza TWV**, a condizione che l'attività non comprometta il conseguimento del 50% dei crediti ECTS MoMi `[NL-SRC-06]`.
- **Sanità e Zorgverzekering:**
  - Se lo studente non lavora: non può iscriversi al servizio sanitario pubblico olandese; deve disporre di un'assicurazione privata internazionale per studenti (es. Aon, OOM) `[NL-SRC-21]`.
  - **Se lo studente lavora (anche solo 1 ora a settimana con contratto o tirocinio pagato):** scatta l'obbligo immediato di stipulare la polizza sanitaria di base olandese (*basisverzekering*) entro 4 mesi dall'inizio dell'impiego `[NL-SRC-21]`. In tal caso, lo studente ha facoltà di richiedere il sussidio pubblico statale **Zorgtoeslag** (fino a **129,00 €/mese** per single nel 2026) per compensare il costo della polizza `[NL-SRC-31]`.
- **Costi obbligatori 2026:**
  - Leges IND: **254,00 €** `[NL-SRC-02]`.

---

### Caso 5: Tesi e Ricerca all'Estero (Visiting Student vs Ricercatore ex Direttiva 2016/801)

#### A. Visiting Student per Preparazione Tesi
- Se lo studente è iscritto presso un ateneo UE estero e si reca nei Paesi Bassi per svolgere ricerche di tesi per un periodo fino a 90 giorni: applicazione del regime di soggiorno breve (nessun visto per cittadini UE; visto C o esenzione per extra-UE).
- Se il soggiorno supera i 90 giorni: mobilità studentesca intra-UE ex Direttiva 2016/801 (fino a 360 giorni) tramite notifica dell'ateneo olandese ospitante `[NL-SRC-16]`.

#### B. Ricercatore Scientifico (*Wetenschappelijk Onderzoeker* - Direttiva (UE) 2016/801)
- **Convenzione di Accoglienza (*Gastovereenkomst*):**
  - Deve essere stipulata con un ente di ricerca o università olandese accreditata come sponsor riconosciuto dall'IND `[NL-SRC-09]`.
  - L'ente ospitante valuta l'adeguatezza del progetto di ricerca e le risorse finanziarie.
- **Esenzione lavorativa totale:**
  - **Completamente esente da TWV:** il ricercatore può lavorare a tempo pieno al progetto di ricerca senza alcuna autorizzazione di lavoro separata `[NL-SRC-09]`.
- **Requisito economico:**
  - Il compenso o la borsa di ricerca deve essere pari ad almeno la soglia minima di legge per le persone sole: **2.337,00 € lordi/mese senza ferie** (o **2.523,96 € con ferie**) `[NL-SRC-01]`, `[NL-SRC-24]`.
- **Mobilità intra-UE:**
  - Diritto di svolgere attività di ricerca presso istituti in altri Stati membri dell'UE fino a 180 giorni (mobilità a breve termine) o fino a 360 giorni (mobilità a lungo termine) senza dover richiedere un nuovo permesso di soggiorno nazionale `[NL-SRC-09]`, `[NL-SRC-16]`.
- **Costi obbligatori 2026:**
  - Leges IND: **254,00 €** `[NL-SRC-02]`.

---

### Caso 6: Erasmus+ e Mobilità Intra-UE

#### A. Cittadini UE
- Piena libertà di circolazione. Iscrizione anagrafica BRP solo per soggiorni effettivi superiori a 4 mesi `[NL-SRC-17]`. Copertura sanitaria con TEAM `[NL-SRC-21]`.

#### B. Studenti Extra-UE titolari di permesso di soggiorno in altro Stato Membro UE (Direttiva (UE) 2016/801)
- **Regime di mobilità intra-UE senza visto (fino a 360 giorni):**
  - Gli studenti terzi già in possesso di un titolo di studio valido rilasciato da un altro Stato membro UE possono svolgere parte degli studi nei Paesi Bassi (es. scambio Erasmus+) fino a un massimo di **360 giorni senza dover richiedere un permesso di soggiorno olandese né un visto MVV** `[NL-SRC-16]`.
- **Procedura di notifica preventiva:**
  - L'istituto universitario olandese ospitante deve trasmettere all'IND la **notifica di mobilità intra-UE per studenti** (*Kennisgeving van mobiliteit*) almeno **30 giorni prima** della data prevista di ingresso `[NL-SRC-16]`.
  - Se l'IND non solleva motivi ostativi entro 30 giorni, lo studente può entrare liberamente ed è coperto per l'intera durata del programma di mobilità.
- **Risorse economiche e documenti:**
  - Dimostrazione di risorse pari ad almeno **1.130,77 €/mese** per il periodo di mobilità e assicurazione sanitaria valida `[NL-SRC-01]`.

---

### Caso 7: Master e Dottorato di Ricerca (PhD / Promovendus)

#### A. Master Accademici
- Inquadrati a pieno titolo nel regime dei permessi per studio terziario (HBO o WO) descritti al Caso 4 `[NL-SRC-06]`.

#### B. Dottorato di Ricerca (PhD): La Specificità del Modello dei Paesi Bassi
- **Inquadramento come Lavoratore Dipendente (*Werknemer-promovendus*):**
  - A differenza di molti ordinamenti europei, nei Paesi Bassi la stragrande maggioranza dei dottorandi ha lo status giuridico di **dipendente accademico stipendiato**, contrattualizzato in base al *CAO Nederlandse Universiteiten* `[NL-SRC-28]`.
  - *Condizioni contrattuali standard:* contratto a tempo determinato di 4 anni, stipendio mensile progressivo (indicativamente da ~2.900 € lordi/mese nel primo anno fino a superare 3.700 € lordi/mese nel quarto anno), con versamento dei contributi previdenziali integrali (fondo pensione ABP), ferie retribuite e indennità di ferie (8%) e tredicesima (8,3%) `[NL-SRC-28]`.
- **Inquadramento migratorio per candidati extra-UE:**
  - I candidati extra-UE vengono registrati come **Ricercatori scientifici ex Direttiva (UE) 2016/801** `[NL-SRC-09]` oppure come **Highly Skilled Migrants (*Kennismigranten*)** `[NL-SRC-03]`, e **NON come studenti**.
  - *Vantaggi determinanti:*
    1. Nessun limite di orario lavorativo (non si applica il tetto delle 16 ore) `[NL-SRC-09]`.
    2. Gli anni trascorsi con contratto da ricercatore/kennismigrant contano **al 100%** (e non al 50% come gli anni da studente) per il computo del quinquennio necessario al rilascio del permesso di soggiorno a tempo indeterminato UE (*EU-langdurig ingezetene*) e per la naturalizzazione `[NL-SRC-13]`.
    3. Obbligo e diritto alla *Zorgverzekering* standard olandese `[NL-SRC-21]`.
- **Borsisti puri (*Beurspromovendi*):**
  - Una minoranza di dottorandi su bandi internazionali specifici percepisce una borsa esente da imposte e viene immessa con permesso per ricerca o studio, ma non beneficia del contratto collettivo CAO `[NL-SRC-28]`.

---

### Caso 8: Working Holiday (WHP / WHS - Working Holiday Programme & Scheme)

#### A. Paesi Convenzionati
- Riservato ai cittadini dei Paesi con accordo bilaterale reciproco con i Paesi Bassi: **Argentina, Australia, Canada, Giappone, Nuova Zelanda, Corea del Sud, Taiwan, Uruguay e Hong Kong** `[NL-SRC-10]`.

#### B. Requisiti e Limiti Operativi
- **Età:** Compresa tra **18 e 30 anni** inclusi (l'istanza deve essere introdotta prima del compimento del 31° anno di età) `[NL-SRC-10]`.
- **Durata:** Valido per un massimo tassativo di **1 anno (12 mesi)**. **Assolutamente non rinnovabile né prorogabile** `[NL-SRC-10]`.
- **Condizioni lavorative:**
  - Il soggiorno deve avere come scopo primario la vacanza e la conoscenza culturale.
  - È consentito svolgere lavori occasionali e accessori per sostenere le spese di soggiorno. A seconda del paese partner, vigono limiti temporali specifici (es. massimo 1 anno di lavoro complessivo o massimo 12/24 settimane per singolo datore di lavoro) `[NL-SRC-10]`.
- **Regime di conversione:**
  - Il titolo non è normalmente convertibile in loco, salvo deroga per il passaggio a un permesso per lavoro altamente qualificato (*Kennismigrant*) in presenza di uno sponsor riconosciuto o per motivi familiari `[NL-SRC-03]`, `[NL-SRC-10]`.
- **Costi obbligatori 2026:**
  - Leges IND: **85,00 €** `[NL-SRC-02]`.

---

### Caso 9: Post-Study Work / Orientation Year (*Zoekjaar Hoogopgeleiden*)

#### A. Soggetti Aventi Diritto
Il permesso per "Anno di Orientamento per Personale Altamente Qualificato" (*Zoekjaar hoogopgeleiden*) può essere richiesto da `[NL-SRC-05]`:
1. Laureati con titolo Bachelor o Master conseguito presso un'istituzione terziaria olandese (HBO o Università WO);
2. Titolari di dottorato di ricerca (PhD) conseguito nei Paesi Bassi;
3. Laureati con Master o PhD presso un'**istituzione universitaria estera classificata nella top 200** delle classifiche mondiali (a livello generale o per specifica disciplina) in almeno due tra: *Times Higher Education (THE)*, *QS World University Rankings* o *Shanghai ARWU*, con conoscenza linguistica provata (inglese o olandese a livello B2 / IELTS 6.0) `[NL-SRC-05]`;
4. Ricercatori scientifici che hanno completato un progetto di ricerca nei Paesi Bassi ex Direttiva 2016/801.

#### B. Finestra Temporale e Condizioni
- **Finestra triennale:** L'istanza può essere presentata in qualsiasi momento entro **3 anni dal conseguimento del titolo accademico** o dal termine del progetto di ricerca `[NL-SRC-05]`.
- **Ripetibilità:** Il permesso può essere concesso più volte nella vita di un individuo, a condizione che ciascuna domanda segua il completamento di un diverso ciclo di studi accademici (es. dopo il Master e poi nuovamente dopo il PhD).
- **Durata:** Valido per **1 anno (12 mesi), rigorosamente non rinnovabile** `[NL-SRC-05]`.

#### C. Diritti di Lavoro e la Clausola Salariale Ridotta
- **Libertà totale di impiego:**
  - Durante l'anno di Zoekjaar, il titolare ha libero accesso al mercato del lavoro. Il retro della carta di soggiorno reca la dicitura: *"Arbeid vrij toegestaan. TWV niet vereist"* (Lavoro liberamente consentito, TWV non richiesto). Il datore non deve richiedere alcuna autorizzazione né dimostrare il test del mercato del lavoro `[NL-SRC-05]`.
- **La clausola salariale agevolata post-Zoekjaar (*Verlaagd salariscriterium*):**
  - Se durante l'anno di Zoekjaar (o direttamente entro i 3 anni dalla laurea senza fruire dello Zoekjaar) il candidato riceve un'offerta di lavoro da uno sponsor riconosciuto per un ruolo da *Kennismigrant*, si applica in modo permanente il **criterio salariale ridotto**: nel 2026 pari a **3.122,00 € lordi/mese** (anziché 4.357 € under 30 o 5.942 € per over 30) `[NL-SRC-01]`, `[NL-SRC-03]`.
  - Tale soglia ridotta permane valida per i successivi rinnovi contrattuali o in caso di cambio datore di lavoro, a patto di non interrompere la continuità del soggiorno `[NL-SRC-03]`.
- **Costi obbligatori 2026:**
  - Leges IND: **254,00 €** `[NL-SRC-02]`.

---

### Caso 10: Soggiorni Brevi (≤ 90 gg) e Ricongiungimento Familiare

#### A. Soggiorni Brevi (≤ 90 giorni)
- **Cittadini esenti da visto Schengen** (es. USA, UK, Canada, Australia, Giappone) e **titolari di Visto Schengen C**:
  - Possono soggiornare per un massimo di 90 giorni su qualsiasi arco mobile di 180 giorni nell'Area Schengen `[NL-SRC-23]`.
  - **Divieto assoluto di svolgere attività lavorativa subordinata** senza che il datore abbia ottenuto una specifica TWV da UWV `[NL-SRC-08]`.
  - Costo Visto Schengen C: **90,00 €** (adulti) / **45,00 €** (minori 6–12 anni) `[NL-SRC-02]`, `[NL-SRC-23]`.

#### B. Ricongiungimento Familiare (*Verblijf bij partner of familie*)
- **Familiari ammessi:** Coniuge, partner unito civilmente (*geregistreerd partner*) o **partner convivente non sposato** che dimostri una relazione duratura ed esclusiva (certificata da stato libero e dichiarazione di partnership) `[NL-SRC-11]`.
- **Il rigido requisito anagrafico olandese dei 21 anni:**
  - Ai sensi dell'art. 3.14 del *Vreemdelingenbesluit 2000* (Vb 2000), **sia il richiedente che il partner sponsor devono avere compiuto almeno 21 anni di età** al momento della presentazione della domanda `[NL-SRC-11]`, `[NL-SRC-26]`. Se uno dei due ha meno di 21 anni, la domanda viene respinta senza eccezioni.
- **Requisito di reddito dello sponsor (norma semestrale luglio–dicembre 2026):**
  - Lo sponsor deve disporre di un reddito autonomo, sufficiente e duraturo pari al **100% del salario minimo statutario SV (*sociaalverzekeringsloon*)**:
    - **2.337,00 € lordi/mese senza indennità di ferie** `[NL-SRC-01]`.
    - **2.523,96 € lordi/mese con indennità di ferie (8%)** `[NL-SRC-01]`.
  - Il contratto di lavoro deve avere una durata residua di almeno **1 anno (12 mesi)** al momento della domanda, oppure lo sponsor deve dimostrare di aver percepito un reddito sufficiente in modo ininterrotto nei 3 anni precedenti `[NL-SRC-11]`.
- **Esame di integrazione civica all'estero (*Basisexamen inburgering buitenland*):**
  - Per i partner di residenti ordinari extra-UE soggetti a MVV, è obbligatorio superare l'esame di lingua olandese (livello A1) e conoscenza della società olandese presso l'ambasciata olandese nel paese d'origine PRIMA dell'inoltro della richiesta di visto `[NL-SRC-29]`.
  - **Esenzioni totali dall'esame all'estero:**
    - Familiari di cittadini UE/SEE/Svizzera (inclusi partner di italiani che esercitano la libera circolazione) `[NL-SRC-12]`;
    - Familiari di Highly Skilled Migrants (*Kennismigranten*) `[NL-SRC-03]`;
    - Familiari di ricercatori scientifici ex Direttiva 2016/801 `[NL-SRC-09]`;
    - Familiari di titolari di Carta Blu UE `[NL-SRC-04]`;
    - Nazionali esenti da visto MVV (cittadini di USA, UK, Canada, Australia, Nuova Zelanda, Giappone, Corea del Sud, Svizzera).
- **Accesso al lavoro del partner:**
  - Il partner acquisisce i medesimi diritti di lavoro dello sponsor principale. Se lo sponsor è un *Kennismigrant*, un ricercatore o titolare di Carta Blu, il partner riceve un permesso con annotazione *"Arbeid vrij toegestaan. TWV niet vereist"* (lavoro libero senza TWV) `[NL-SRC-03]`, `[NL-SRC-11]`.
- **Costi obbligatori 2026:**
  - Leges IND per partner adulto: **254,00 €** `[NL-SRC-02]`.
  - Leges IND per figlio minore convivente: **85,00 €** `[NL-SRC-02]`.

---

## 3. Riepilogo Costi Amministrativi Obbligatori per Tipologia (Anno 2026)

Tutte le tariffe elencate corrispondono agli importi ufficiali legalmente in vigore per il 2026 `[NL-SRC-02]`, `[NL-SRC-23]`.

| Tipologia di Domanda | Leges IND (Tariffa) | Tassa Consolare Visto (MVV o C) | Rilascio Titolo Elettronico | Totale Amministrativo Obbligatorio |
| :--- | :---: | :---: | :---: | :---: |
| **Cittadino UE (Registrazione anagrafica BRP / BSN)** | 0,00 € | 0,00 € | 0,00 € (BRP gratuito) | **0,00 €** (eventuali 15-20 € per certificato anagrafico) |
| **Cittadino UE (Attestazione lecita presenza art. 8 Vw)** | 85,00 € | 0,00 € | Incluso | **85,00 €** |
| **Lavoro Altamente Qualificato (Kennismigrant)** | 423,00 € | Incluso nella TEV | Incluso | **423,00 €** |
| **Carta Blu UE (European Blue Card)** | 423,00 € | Incluso nella TEV | Incluso | **423,00 €** |
| **Lavoro Dipendente Ordinario (Single Permit / GVVA)** | 423,00 € | Incluso nella TEV | Incluso | **423,00 €** |
| **Start-up / Personale Essenziale Start-up** | 423,00 € | Incluso nella TEV | Incluso | **423,00 €** |
| **Studio Terziario (Bachelor / Master)** | 254,00 € | Incluso nella TEV | Incluso | **254,00 €** |
| **Ricercatore Scientifico (Direttiva 2016/801)** | 254,00 € | Incluso nella TEV | Incluso | **254,00 €** |
| **Orientation Year (Zoekjaar hoogopgeleiden)** | 254,00 € | Incluso se richiesto con TEV | Incluso | **254,00 €** |
| **Working Holiday (WHP/WHS)** | 85,00 € | Incluso nella TEV | Incluso | **85,00 €** |
| **Ricongiungimento Familiare (Partner adulto)** | 254,00 € | Incluso nella TEV | Incluso | **254,00 €** (+ 150 € esame DUO se non esente) |
| **Ricongiungimento Familiare (Figlio minore)** | 85,00 € | Incluso nella TEV | Incluso | **85,00 €** |
| **Visto di Ritorno (Terugkeervisum)** | 197,00 € | – | Adesivo su passaporto | **197,00 €** |
| **Duplicato / Sostituzione Permesso Smarrito o Deteriorato** | 171,00 € | – | Incluso | **171,00 €** |
| **Visto Breve Soggiorno (Schengen C, adulti)** | – | 90,00 € (VFS fee ~30-40 €) | – | **~120,00 € - 130,00 €** |

---

## 4. Statuto Giuridico durante l'Attesa e Diritti di Viaggio

### Il Verblijfssticker (Adesivo di Soggiorno dell'IND)
- Quando una domanda di permesso di soggiorno o di proroga è in corso di trattazione presso l'IND e il visto o titolo precedente è scaduto, il richiedente ha facoltà di richiedere un appuntamento presso un ufficio IND per farsi apporre sul passaporto un adesivo formale (*verblijfssticker* o *verlijfsaantekening*) `[NL-SRC-15]`.
- **Valore giuridico:** L'adesivo certifica la lecita presenza sul territorio olandese e specifica i diritti lavorativi applicabili (es. *"Arbeid is toegestaan"* per chi è in rinnovo con gli stessi diritti).

### Il Divieto Tassativo di Viaggio Schengen e il Terugkeervisum
- **Regola di frontiera fondamentale:** Lo sticker di attesa o la lettera di conferma dell'IND certificano il diritto di soggiorno **esclusivamente all'interno del territorio nazionale olandese**.
- L'adesivo di attesa o la ricevuta IND **NON costituiscono titolo di viaggio valido per circolare negli altri Paesi dell'Area Schengen né per rientrare nei Paesi Bassi dall'estero** (Codice Frontiere Schengen) `[NL-SRC-34]`.
- Se uno straniero in attesa di permesso ha una necessità urgente e documentata di viaggiare fuori dai Paesi Bassi prima che il titolo di soggiorno plastificato sia stato emesso, deve tassativamente richiedere all'IND un **Visto di Ritorno (*Terugkeervisum*)** `[NL-SRC-34]`:
  - Costo: **197,00 €** `[NL-SRC-02]`, `[NL-SRC-34]`.
  - Validità: temporanea (tipicamente da 1 a 3 mesi), consente il rientro legale attraverso i valichi di frontiera esterni.
  - Viaggiare all'estero senza *Terugkeervisum* comporta il negato imbarco da parte delle compagnie aeree o il blocco alla frontiera esterna con impossibilità di rientrare nei Paesi Bassi.

---

## 5. Protocollo Operativo di Onboarding Cronologico (Lifecycle Integrato)

### Fase 1: Prima della Partenza (Pre-arrival)
1. **Procedura TEV (*Toegang en Verblijf*):** Lo sponsor accreditato (azienda o università) inoltra la domanda combinata all'IND per via telematica tramite l'IND Business Portal `[NL-SRC-03]`, `[NL-SRC-06]`. Per categorie non sponsorizzate (es. Zoekjaar dall'estero), il richiedente deposita la richiesta presso l'Ambasciata/Consolato olandese territorialmente competente `[NL-SRC-23]`.
2. **Apposizione del visto MVV (*Machtiging tot voorlopig verblijf*):**
   - Una volta ricevuta la lettera di approvazione preventiva dell'IND (*kennisgeving*), il candidato prenota l'appuntamento consolare tramite Netherlands Worldwide `[NL-SRC-23]`.
   - Presso il consolato: verifica dell'identità, consegna del passaporto, acquisizione dei dati biometrici (fotografia e 10 impronte digitali).
   - Rilascio dello sticker MVV (visto D nazionale valido per 90 giorni con ingressi multipli).
   - *Esenzioni dal visto MVV (art. 17 Vw 2000 `[NL-SRC-25]`):* Cittadini UE/SEE/Svizzera, e nazionali di Australia, Canada, Giappone, Nuova Zelanda, Corea del Sud, Regno Unito, Stati Uniti d'America, Monaco, San Marino, Città del Vaticano.
3. **Legalizzazione, Apostille e Traduzione Giurata degli Atti di Stato Civile:**
   - **Atto di nascita integrale** (e eventuale atto di matrimonio): indispensabile per la registrazione anagrafica BRP `[NL-SRC-30]`.
   - Se emesso da paese aderente alla Convenzione dell'Aja del 1961: apposizione dell'**Apostille**.
   - Se emesso da paese non aderente: doppia legalizzazione (Ministero degli Esteri locale + Ambasciata olandese).
   - *Paesi UE (inclusa Italia):* Esenzione totale da Apostille ai sensi del Regolamento (UE) 2016/1191. È sufficiente richiedere al comune italiano l'**Estratto di Nascita Plurilingue (Modello Vienna 1976)**, che non richiede traduzione.
   - *Lingua dei documenti:* Se il documento non è in olandese, inglese, francese o tedesco, deve essere tradotto da un traduttore giurato (*beëdigde vertaler*).
4. **Ricerca dell'Alloggio e Verifica del Consenso BRP:**
   - A causa della severa crisi abitativa (*woningcrisis*), verificare preventivamente che il contratto di locazione consenta esplicitamente la registrazione anagrafica municipale (**"inschrijving mogelijk"**) `[NL-SRC-17]`.
   - Farsi rilasciare dal locatore o dall'inquilino principale la dichiarazione formale di consenso all'iscrizione (*Verklaring van instemming / Toestemming van de verhuurder*), corredata da copia del documento d'identità del proprietario e copia del contratto principale `[NL-SRC-30]`.

### Fase 2: All'Arrivo nei Paesi Bassi (Day 1 – Day 14)
1. **Registrazione all'Anagrafe Comunale (BRP - *Basisregistratie Personen*):**
   - **Termine perentorio dei 5 giorni:** Chiunque intenda stabilirsi nei Paesi Bassi per più di 4 mesi deve registrarsi presso la *Gemeente* di domicilio entro **5 giorni lavorativi dall'arrivo** (art. 2.38 *Wet BRP* `[NL-SRC-17]`).
   - Documenti da esibire: passaporto originale con sticker MVV o timbro di ingresso, lettera di approvazione IND, contratto di locazione firmato con modulo di consenso del proprietario, atto di nascita legalizzato/apostillato (o estratto plurilingue UE) `[NL-SRC-30]`.
2. **Attribuzione Immediata del BSN (*Burgerservicenummer*):**
   - Al termine dell'appuntamento BRP, l'ufficiale dell'anagrafe rilascia il certificato di iscrizione anagrafica contenente il **BSN** (codice identificativo unico a 9 cifre per fisco, sanità e previdenza) `[NL-SRC-17]`.
3. **Ritiro del Titolo di Soggiorno Plastificato (VVR/GVVA) e Biometrici:**
   - L'IND invia una comunicazione scritta (*Brief: Uw verblijfsdocument ligt klaar*) indicando lo sportello IND Desk assegnato per il ritiro `[NL-SRC-15]`.
   - Il titolare prenota un appuntamento online su `ind.nl` per il ritiro del documento (*Verblijfsdocument ophalen*).
   - I cittadini esenti da MVV che non hanno rilasciato impronte all'estero prenotano un appuntamento preliminare presso l'IND Desk per fototessera e impronte digitali `[NL-SRC-15]`.
4. **Apposizione del Verblijfssticker (se titolo in lavorazione):**
   - Se il titolo plastificato non è ancora pronto e il lavoratore necessita di dimostrare formalmente il diritto di soggiorno o lavoro, può fissare un appuntamento all'IND per l'apposizione dello sticker transitorio (*verblijfsaantekening*) sul passaporto `[NL-SRC-15]`.
5. **Test di Screening TBC presso la GGD (Gemeentelijke Gezondheidsdienst):**
   - I cittadini di Paesi terzi non esenti (esenti UE/SEE/Svizzera, USA, Canada, Australia, Giappone, UK) devono sottoporsi allo screening radiografico polmonare contro la tubercolosi entro **3 mesi** dall'arrivo presso la GGD municipale, riconsegnando all'IND il modulo timbrato *Tuberculoseverklaring*.

### Fase 3: Primi 30 – 120 Giorni (Settling In & Compliance)
1. **Apertura Conto Corrente Bancario Olandese (IBAN NL):**
   - Necessario per l'accredito dello stipendio, il pagamento dell'affitto e gli addebiti diretti SEPA. Banche principali: ABN AMRO, ING, Rabobank, Bunq.
   - *Tolleranza:* Bunq e ING consentono l'apertura con periodo di grazia di 90 giorni per caricare il BSN; Rabobank richiede quasi sempre il BSN contestuale all'apertura.
2. **Attivazione dell'Identità Digitale di Stato (DigiD):**
   - Fondamentale per interagire con l'Agenzia delle Entrate (*Belastingdienst*), il portale *MijnOverheid*, l'assicurazione sanitaria e l'IND.
   - Richiesta online su `digid.nl` inserendo BSN e codice postale. Il codice di attivazione viene recapitato per posta cartacea all'indirizzo registrato BRP entro 3 giorni lavorativi (o attivazione istantanea con verifica NFC del passaporto/carta d'identità elettronica).
3. **Stipula della Polizza Sanitaria di Base (*Basisverzekering*):**
   - **Obbligo inderogabile entro 4 mesi per chi lavora:** Chiunque svolga attività lavorativa subordinata (inclusi studenti che lavorano anche 1 sola ora a settimana o tirocinanti pagati) ha l'**obbligo imperativo di sottoscrivere la Basisverzekering entro 4 mesi** dall'inizio dell'attività (art. 2 *Zorgverzekeringswet* `[NL-SRC-21]`).
   - La polizza opera con effetto retroattivo dal primo giorno di lavoro.
   - Costo medio 2026: **145,00 € – 165,00 € al mese**. Franchigia obbligatoria di legge (*eigen risico*): **385,00 € / anno** `[NL-SRC-21]`.
4. **Domanda di Sussidio Sanitario Statale (*Zorgtoeslag*):**
   - I lavoratori con reddito annuo modesto (inclusi studenti lavoratori e tirocinanti) possono richiedere il rimborso pubblico statale **Zorgtoeslag** tramite il portale telematico `toeslagen.nl`, ottenendo per il 2026 fino a **129,00 € al mese** per persona sola (soglia di reddito annuo fino a 40.857,00 €) `[NL-SRC-31]`.
5. **Domanda per l'Agevolazione Fiscale Impatriati (*30%-regeling*):**
   - Istanza congiunta datore di lavoro - dipendente inoltrata al *Belastingdienst* `[NL-SRC-19]`.
   - **Regola perentoria dei 4 mesi:** Se la domanda perviene entro **4 mesi** dal primo giorno di impiego, l'esenzione opera con retroattività totale dal giorno 1. Se presentata oltre i 4 mesi, l'agevolazione decorre solo dal primo giorno del mese successivo a quello di deposito, con perdita irrevocabile del beneficio per i mesi pregressi `[NL-SRC-19]`.
6. **Registrazione presso il Medico di Famiglia (*Huisarts*):**
   - Assegnazione a un medico territoriale entro il proprio codice postale di residenza. In caso di rifiuto generalizzato per saturazione (*patiëntenstop*), attivare la procedura di **Zorgbemiddeling** con la propria assicurazione sanitaria, che è legalmente obbligata a trovare un medico disponibile entro 10 giorni lavorativi `[NL-SRC-21]`.

---

## 6. Disciplina del Registro Non Residenti (RNI - Soggiorni < 4 Mesi)

Il registro **RNI (*Registratie Niet-Ingezetenen*)** è la sezione speciale dell'Anagrafe olandese per soggiorni **inferiori a 4 mesi** o per soggetti fiscalmente residenti all'estero `[NL-SRC-18]`.

### Finalità e Vantaggi
- Rilascio **immediato a vista del BSN** al termine dell'appuntamento;
- Non richiede un contratto di locazione a lungo termine né la registrazione su un immobile residenziale olandese (è sufficiente dichiarare l'indirizzo estero di residenza permanente);
- Il BSN rilasciato dal RNI è definitivo e resta invariato in caso di successiva iscrizione al BRP.

### Elenco dei 19 Comuni Abilitati allo Sportello RNI
1. Alkmaar, 2. Almelo, 3. Amsterdam, 4. Breda, 5. Den Haag (L'Aia), 6. Doetinchem, 7. Eindhoven, 8. Goes, 9. Groningen, 10. Heerlen, 11. Leeuwarden, 12. Leiden, 13. Nijmegen, 14. Rotterdam, 15. Terneuzen, 16. Utrecht, 17. Venlo, 18. Westland, 19. Zwolle `[NL-SRC-18]`.

### Riforma Reclutamento Tassativa 2026 (Separazione UE vs Extra-UE)
Ai sensi delle direttive operative della *Rijksdienst voor Identiteitsgegevens* (RvIG) in vigore dal **1° gennaio 2026** `[NL-SRC-36]`:
- **Cittadini UE / SEE / Svizzera (inclusi italiani):** Possono prenotare l'appuntamento RNI presso **uno qualsiasi dei 19 comuni abilitati**;
- **Cittadini di Paesi Terzi (Extra-UE privi di passaporto comunitario):** **Non possono registrarsi nei 17 sportelli ordinari.** L'iscrizione RNI e il rilascio del BSN per cittadini extra-UE sono **centralizzati esclusivamente presso i due sportelli specializzati di BREDA e VENLO** `[NL-SRC-36]`. Le richieste prenotate presso Amsterdam, Utrecht o Rotterdam vengono respinte all'accoglienza.

---

## 7. Registro delle Trappole Procedurali e Vulnerabilità (Red Team Traps)

| # | Trappola / Vulnerabilità | Gravità | Base Giuridica Primaria | Conseguenza Finanziaria o Legale | Azione Preventiva Obbligatoria |
|:--:|:---|:---:|:---|:---|:---|
| **1** | **Alloggio con divieto di iscrizione (*geen inschrijving*)** | **CRITICA** | Art. 4.17 *Wet BRP*; Art. 26b *Wet LB 1964* `[NL-SRC-38]` | Multa fino a 325 €; applicazione forzosa dell'***Anoniementarief* al 52%** sullo stipendio lordo; blocco conto bancario. | Rifiutare qualsiasi stanza senza consenso BRP firmato dal proprietario `[NL-SRC-30]`. |
| **2** | **Viaggio Schengen con ricevuta IND o Verblijfssticker** | **CRITICA** | Codice Frontiere Schengen art. 6/14; Art. 3.3 *Vb 2000* `[NL-SRC-34]` | Costo Terugkeervisum 197 €; fermo di polizia, respingimento alla frontiera e *boarding denial* aereo. | Non uscire dai Paesi Bassi senza aver ottenuto il *Terugkeervisum* (197 €) `[NL-SRC-34]`. |
| **3** | **Omessa Basisverzekering per studente lavoratore** | **ALTA** | Art. 2 *Zvw*; Art. 2.1.1 *Wlz*; Reg. CAK `[NL-SRC-21]` | Sanzione CAK di **529,74 €** (reiterabile fino a 1.059,48 €) + premio forzoso al 130% trattenuto in busta paga. | Stipulare la *Basisverzekering* entro 4 mesi dall'inizio di qualsiasi lavoro anche di 1 sola ora/settimana `[NL-SRC-21]`. |
| **4** | **Ricongiungimento partner under 21** | **CRITICA** | Art. 3.14, primo comma, *Vb 2000* `[NL-SRC-11]`, `[NL-SRC-26]` | Perdita a fondo perduto delle leges IND (254,00 €) e rigetto immediato della domanda. | Entrambi i partner devono avere compiuto 21 anni il giorno del deposito dell'istanza (deroga a 18 anni solo se sponsor UE). |
| **5** | **Decadenza MoMi per studenti (< 50% ECTS)** | **CRITICA** | Art. 5.5a *Voorschrift Vreemdelingen 2000*; Artt. 18-19 *Vw 2000* `[NL-SRC-06]` | Revoca del titolo di soggiorno, cancellazione della sponsorizzazione ateneo e rimpatrio forzoso in 28 giorni. | Segnalare tempestivamente cause di forza maggiore allo *Studentendecaan* prima della chiusura dell'anno accademico. |
| **6** | **Inizio attività lavorativa prima del rilascio TWV** | **CRITICA** | Artt. 2 e 18 *Wet arbeid vreemdelingen (Wav)* `[NL-SRC-27]`, `[NL-SRC-39]` | Sanzione dell'Ispettorato del Lavoro (NLA) fino a **8.000,00 €** per lavoratore; revoca del permesso di soggiorno. | Non iniziare mai a lavorare con la sola ricevuta di domanda: attendere la notifica formale di concessione TWV di UWV. |
| **7** | **Cumulo orario 16 ore + tempo pieno estivo** | **ALTA** | Art. 3.1 *BuWav 2022*; Art. 2 *Wav* `[NL-SRC-27]` | Sanzione NLA fino a 8.000 € per violazione delle condizioni autorizzative. | Le opzioni sono rigidamente alternative: 16 ore settimanali OPPURE tempo pieno a giugno, luglio e agosto. |
| **8** | **Trappola 150 km per la 30%-regeling** | **ALTA** | Art. 31a, ottavo comma, *Wet LB 1964*; CGUE causa C-512/10 `[NL-SRC-19]` | Rigetto Belastingdienst e perdita secca di 800–1.600 € netti/mese per 5 anni. | Verificare di aver risieduto a più di 150 km dai confini per almeno 16 dei 24 mesi antecedenti (esclusi Belgio e Renania tedesca). |
| **9** | **Zoekjaar calcolato dalla cerimonia di laurea** | **ALTA** | Art. 3.42 *Vb 2000*; *Vc 2000*, B9/1 `[NL-SRC-05]` | Perdita irreversibile del diritto allo Zoekjaar e della soglia salariale agevolata da 3.122 €/mese. | Calcolare i 3 anni dalla data ufficiale di conseguimento (*afstudeerdatum*) stampata sul certificato, non dalla cerimonia. |
| **10** | **Conversione in loco da soggiorno breve/turistico** | **CRITICA** | Art. 16, primo comma, lett. a *Vw 2000*; Art. 17 *Vw* `[NL-SRC-25]` | Inammissibilità della domanda, perdita delle leges IND e obbligo di rimpatrio per avvio TEV consolare all'estero. | Non recarsi nei Paesi Bassi da turista sperando di convertire il visto in loco se non si appartiene a una delle nazionalità esenti da MVV. |
| **11** | **Truffe su anticipi cauzioni e falsi sponsor** | **ALTA** | Artt. 225 e 326 *Codice Penale olandese (Sr)*; Art. 66a *Vw 2000* | Perdita di 1.500–5.000 €; divieto di reingresso nell'Area Schengen (*inreisverbod*) fino a 5 anni annotato nel SIS II. | Non versare mai depositi su conti fintech anonimi senza visita fisica e visura catastale dell'immobile su *Kadaster.nl*. |

---

## 8. Pipeline di Conversione di Status e Residenza Permanente a 5 Anni

### Transizione 1: Da Studio Universitario a Zoekjaar (Orientation Year)
1. **Finestra Temporale:** Presentabile prima della scadenza del permesso studio o in qualsiasi momento entro **3 anni dalla data ufficiale di laurea (*afstudeerdatum*)** `[NL-SRC-05]`. Se il diploma pergamena non è ancora pronto, è sufficiente la dichiarazione accademica provvisoria (*Verklaring afronding studie*).
2. **Lavoro Ponte:** Con la conferma di ricezione IND, è possibile apporre sul passaporto il **Verblijfssticker** con dicitura *"Arbeid vrij toegestaan. TWV niet vereist"*, consentendo l'impiego immediato a tempo pieno `[NL-SRC-05]`.
3. **Durata:** 12 mesi rigidi, non rinnovabile per lo stesso percorso di studi.

### Transizione 2: Da Zoekjaar a Highly Skilled Migrant (*Kennismigrant*)
1. **Ancoraggio Permanente alla Soglia Salariale Ridotta (*Verlaagd salariscriterium*):**
   - Con offerta da uno sponsor riconosciuto IND (*erkend referent*), la soglia minima lorda 2026 scende a **3.122,00 € lordi/mese** (escluso 8% ferie), anziché 4.357 € (<30 anni) o 5.942 € (≥30 anni) `[NL-SRC-01]`, `[NL-SRC-03]`.
   - **Clausola permanente:** Tale soglia ridotta permane per tutti i futuri rinnovi contrattuali e cambi di datore di lavoro, a patto di non interrompere la continuità del soggiorno legale (*geen verblijfsgat*) `[NL-SRC-03]`.
2. **Presentazione:** Istanza telematica tramite IND Business Portal a cura dello sponsor prima della scadenza dello Zoekjaar; decisione IND in fast-track in 2 settimane `[NL-SRC-15]`.

### Transizione 3: Verso la Residenza Permanente (5 Anni di Soggiorno Legale Continuo)
Dopo 5 anni ininterrotti con titolo di soggiorno a scopo non temporaneo, il cittadino extra-UE può richiedere:
- **Opzione A:** Permesso di Soggiorno di Lungo Periodo UE (*EU-langdurig ingezetene* - Direttiva 2003/109/CE, art. 45b *Vw 2000* `[NL-SRC-13]`, `[NL-SRC-37]`);
- **Opzione B:** Permesso di Soggiorno a Tempo Indeterminato Nazionale (*Verblijfsvergunning onbepaalde tijd regulier*).

#### Requisiti di Ammissibilità
1. **Regola di Computo dei 5 Anni:**
   - Gli anni con permesso da **Kennismigrant, Ricercatore scientifico (Dir. 2016/801) o Dottorando dipendente (PhD werknemer-promovendus)** contano **al 100%** `[NL-SRC-13]`, `[NL-SRC-37]`;
   - Gli anni con permesso per **Studio Universitario** contano **al 50%** esclusivamente per il Lungo Periodo UE (art. 45b *Vw 2000* `[NL-SRC-37]`), mentre non rilevano per il titolo nazionale se non convertiti;
   - L'anno di **Zoekjaar** conta al 100% per il titolo UE se seguito da lavoro qualificato;
   - Assenza dal territorio: non più di 6 mesi consecutivi e massimo 10 mesi complessivi nel quinquennio.
2. **Requisito di Integrazione Civica (Inburgering):**
   - Superamento dell'*Inburgeringsexamen* con livello di lingua olandese confermato ad **A2** per i candidati ordinari (in monitoraggio proposta di innalzamento a B1 sotto il Governo Schoof) `[NL-SRC-29]`.
   - Esenti i titolari di titoli universitari olandesi erogati in lingua olandese o titolari di *Staatsexamen NT2*.
3. **Requisito di Reddito:** Contratto di lavoro in corso valido per almeno altri 12 mesi con stipendio pari ad almeno il 100% del WML (€2.337,00/mese escl. ferie o €2.523,96 con ferie) `[NL-SRC-01]`.
4. **Costi IND 2026:** Leges pari a **254,00 €** `[NL-SRC-02]`.

---

## 9. Le 10 Liste di Controllo (Checklist) Documentali Operative

### Checklist 1: Lavoro Dipendente Ordinario (Single Permit / GVVA)
- **A carico del Datore Sponsor:**
  - [ ] Prova notifica posto vacante a UWV con almeno 5 settimane di anticipo;
  - [ ] Relazione documentata sull'esame prioritario del mercato (*arbeidsmarkttoets*);
  - [ ] Contratto di lavoro conforme al WML 2026 (≥ €2.337,00/m escl. ferie o €2.523,96 con 8% ferie);
  - [ ] Visura camerale KvK recente (massimo 3 mesi);
  - [ ] Modulo di domanda Single Permit firmato dal legale rappresentante.
- **A carico del Lavoratore Extra-UE:**
  - [ ] Copia integrale del passaporto (validità residua ≥ 6 mesi);
  - [ ] Curriculum vitae e titoli di studio legalizzati e tradotti;
  - [ ] Dichiarazione precedenti penali (*Antecedentenverklaring*);
  - [ ] Ricevuta versamento leges IND (€423,00).

### Checklist 2: Lavoro Altamente Qualificato
- **A. Highly Skilled Migrant (*Kennismigrant*):**
  - [ ] Iscrizione attiva azienda nel Registro Sponsor Riconosciuti IND;
  - [ ] Contratto con salario conforme alle soglie 2026: ≥ €5.942 (≥30 anni), ≥ €4.357 (<30 anni), ≥ €3.122 (criterio ridotto);
  - [ ] Domanda digitale trasmessa tramite IND Business Portal;
  - [ ] Copia passaporto, Antecedentenverklaring e ricevuta leges IND (€423,00).
- **B. Carta Blu UE (European Blue Card):**
  - [ ] Contratto di lavoro di durata minima di 6 mesi con salario ≥ €5.942/m (o €4.754/m ridotto);
  - [ ] Titolo di studio terziario triennale con equivalenza Nuffic (o 3 anni di esperienza ICT equiparata);
  - [ ] Non è richiesta l'iscrizione dello sponsor nel registro Erkend Referent;
  - [ ] Ricevuta leges IND (€423,00).
- **C. Start-up & Essential Personnel:**
  - [ ] Accordo con Facilitatore RVO (Start-up) o stock options ≥ 1% e stipendio ≥ €3.122/m (Essential Personnel);
  - [ ] Ricevuta leges IND (€423,00).

### Checklist 3: Internship / Tirocinio
- **A. Curriculare (Studenti atenei olandesi):**
  - [ ] Convenzione di Tirocinio Standard Nuffic tripartita firmata da studente, università NL e azienda;
  - [ ] Prova di iscrizione attiva e piano formativo integrato nel percorso di studi;
  - [ ] Esente da TWV; conservazione convenzione agli atti aziendali per controlli NLA.
- **B. Extracurriculare:**
  - [ ] Richiesta TWV ad UWV (≤90 gg) o GVVA stagiair all'IND (>90 gg, leges €423,00);
  - [ ] Piano dettagliato di apprendimento e supervisione non sostituibile a lavoro ordinario.

### Checklist 4: Studio Universitario (Bachelor / Master)
- **A carico dell'Ateneo Sponsor:**
  - [ ] Lettera di ammissione incondizionata al corso WO o HBO;
  - [ ] Domanda TEV telematica inoltrata all'IND;
  - [ ] Ricevuta saldo retta accademica (*tuition fee*).
- **A carico dello Studente Extra-UE:**
  - [ ] Copia passaporto valido;
  - [ ] Dimostrazione risorse di sussistenza 2026: almeno **€1.130,77 al mese** (**€13.569,24 per 12 mesi**) tramite deposito su conto vincolato ateneo, borsa ufficiale o estratto conto bancario conforme;
  - [ ] Antecedentenverklaring e ricevuta leges IND (€254,00).

### Checklist 5: Tesi e Ricerca all'Estero (Direttiva (UE) 2016/801)
- **A carico dell'Istituto di Ricerca:**
  - [ ] Convenzione di accoglienza formale (*Gastovereenkomst*) con ente accreditato;
  - [ ] Approvazione del progetto di ricerca e impegno per spese di rimpatrio;
  - [ ] Domanda TEV telematica all'IND.
- **A carico del Ricercatore:**
  - [ ] Titolo di studio terziario (Master o equivalente);
  - [ ] Prova di remunerazione o borsa ≥ €2.337,00/m escl. ferie (€2.523,96 con ferie);
  - [ ] Esenzione totale da TWV; ricevuta leges IND (€254,00).

### Checklist 6: Erasmus+ e Mobilità Intra-UE Studenti Terzi
- **A carico dell'Università Ospitante Olandese:**
  - [ ] Invio del modulo **Notifica di mobilità intra-UE per studenti** all'IND almeno 30 giorni prima dell'arrivo;
  - [ ] Copia passaporto e del permesso di studio in corso emesso da altro Paese UE (Dir. 2016/801);
  - [ ] Prova di Learning Agreement Erasmus+ e risorse di sussistenza (almeno €1.130,77/mese);
  - [ ] Polizza assicurativa sanitaria per i Paesi Bassi;
  - [ ] Costo leges IND: **0,00 €**.

### Checklist 7: Dottorato di Ricerca (PhD / Werknemer-promovendus)
- **A carico dell'Università:**
  - [ ] Contratto di lavoro dipendente quadriennale ex CAO Universiteiten;
  - [ ] Prova inquadramento retributivo contrattuale (stipendio progressivo da ~€2.900 a >€3.700/m lordi + tredicesima e ferie);
  - [ ] Domanda telematica all'IND come Ricercatore Dir. 2016/801 o Kennismigrant.
- **A carico del Dottorando:**
  - [ ] Copia passaporto e diploma di laurea di secondo livello (Master) legalizzato con valutazione Nuffic se estero;
  - [ ] Antecedentenverklaring e leges IND (€254,00 come ricercatore; €423,00 come Kennismigrant).

### Checklist 8: Working Holiday (WHP/WHS)
- **A carico del Candidato (Cittadino di uno dei 9 Paesi convenzionati, età 18-30):**
  - [ ] Passaporto con validità residua ≥ 15 mesi;
  - [ ] Biglietto aereo di ritorno o fondi documentati equivalenti;
  - [ ] Mezzi finanziari per il soggiorno iniziale;
  - [ ] Assicurazione sanitaria per cure mediche e rimpatrio valida per l'intero anno;
  - [ ] Modulo WHP/WHS e ricevuta leges IND (**€85,00**).

### Checklist 9: Orientation Year (Zoekjaar hoogopgeleiden)
- **A carico del Richiedente:**
  - [ ] Copia passaporto valido;
  - [ ] Diploma Bachelor/Master/PhD conseguito in NL entro i 3 anni precedenti (oppure certificato formale di fine studi dell'ateneo);
  - [ ] In alternativa, titolo estero equivalente da ateneo Top 200 mondiale (THE, QS o ARWU) con comparazione Nuffic e certificazione inglese B2 / IELTS 6.0 o olandese;
  - [ ] Antecedentenverklaring e ricevuta leges IND (**€254,00**).

### Checklist 10: Soggiorni Brevi (Visto C) e Ricongiungimento Familiare
- **A. Visto Schengen C (Breve Soggiorno):**
  - [ ] Modulo di visto, passaporto valido con 2 pagine libere, prova scopo viaggio e alloggio;
  - [ ] Mezzi di sussistenza: almeno 55,00 € al giorno a persona; assicurazione viaggio da 30.000 €;
  - [ ] Tassa consolare: 90,00 € (adulti) / 45,00 € (minori 6-12 anni).
- **B. Ricongiungimento Familiare (Partner):**
  - [ ] Prova età minima di **21 anni compiuti** sia per lo sponsor che per il partner;
  - [ ] Sponsor con contratto di lavoro ≥ 1 anno e reddito minimo 100% WML (≥ €2.337,00/m escl. ferie o €2.523,96 con ferie);
  - [ ] Certificato di matrimonio o dichiarazione di partnership non registrata con prove di relazione duratura;
  - [ ] Attestato superamento *Basisexamen inburgering buitenland* (livello A1 DUO, costo 150 €) salvo esenzioni;
  - [ ] Ricevuta leges IND: **€254,00** per partner adulto; **€85,00** per figlio minore.

