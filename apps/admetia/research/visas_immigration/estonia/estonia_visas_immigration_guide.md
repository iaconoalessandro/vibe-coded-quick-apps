---
country: "Estonia"
country_it: "Estonia"
iso_code: "EE"
last_verified: "2026-10-05"
review_by: "2027-04-05"
version: "1.0.0"
citizenships_covered:
  - "UE / SEE / Svizzera (inclusi cittadini italiani)"
  - "Extra-UE (incl. UK, USA, Canada, Giappone, Paesi terzi)"
---

# Guida Ufficiale Visti e Immigrazione: Estonia (EE)

> **Regola di integrità del Council:** Il presente documento costituisce l'**UNICA fonte di verità** del progetto Admetia per l'Estonia. Ogni dato numerico, soglia salariale, tariffa amministrativa o disposizione procedurale reca un riferimento univoco `[EE-SRC-XX]` tracciabile nel registro [`estonia_sources.md`](estonia_sources.md). I punti privi di consolidamento primario o sottoposti a monitoraggio prasseologico sono registrati in [`estonia_open_questions.md`](estonia_open_questions.md).

---

## 1. Architettura Giuridica ed Enti Competenti

### 1.1 Quadro Normativo Cardine
Il regime di ingresso, soggiorno, studio e lavoro nella Repubblica d'Estonia è disciplinato da un corpus normativo codificato, integrato con i regolamenti dell'Unione Europea e gli standard dello Spazio Schengen:
*   **Välismaalaste seadus (Aliens Act - VMS):** Regola l'ingresso, il soggiorno temporaneo, l'impiego a breve termine (*Lühiajaline töötamine*), il rilascio dei visti nazionali di lunga durata (Visto D), i permessi di soggiorno temporanei (TRP), la Carta Blu UE e la quota annuale di immigrazione (*sisserände piirarv*) `[EE-SRC-01]`.
*   **Euroopa Liidu kodaniku seadus (Citizen of the European Union Act - ELKS):** Disciplina l'esercizio della libera circolazione per i cittadini UE/SEE/CH e i loro familiari, la costituzione del diritto di soggiorno temporaneo quinquennale mediante registrazione anagrafica e le cause tassative di estinzione ex § 15 `[EE-SRC-02]`.
*   **Isikut tõendavate dokumentide seadus (Identity Documents Act - ITDS):** Definisce lo status e il valore probatorio della carta d'identità (*isikutunnistus* per cittadini UE), della carta di soggiorno (*elamisloakaart* per extra-UE), dei certificati crittografici digitali (Digi-ID) e lo statuto di non-residenza dell'e-Residency ex § 20^6 `[EE-SRC-03]`.
*   **Riigilõivuseadus (State Fees Act - RLS):** Stabilisce le tariffe statali per ogni istanza migratoria, rilascio documenti d'identità e registrazioni datoriali (aggiornato al 2025–2026) `[EE-SRC-04]`.
*   **Rahvastikuregistri seadus (Population Register Act - RRS):** Prescrive gli obblighi di registrazione della residenza, i requisiti legali del contratto di locazione e la facoltà di cancellazione anagrafica a tutela del locatore ex § 96 `[EE-SRC-05]`.
*   **Ravikindlustuse seadus (Health Insurance Act - RKS):** Disciplina la copertura sanitaria pubblica (*Tervisekassa*), subordinata all'iscrizione nel Registro dell'Occupazione (*TÖötamise register* - TÖR) e soggetta a un periodo di carenza legale di 14 giorni ex § 6 `[EE-SRC-06]`.
*   **Tulumaksuseadus (Income Tax Act):** Fissa il regime di tassazione delle persone fisiche all'aliquota proporzionale unica del **22%**, con una franchigia base universale (*maksuvaba tulu*) a regime dal 1° gennaio 2026 pari a **700 €/mese** (**8.400 €/anno**) indipendente dal reddito lordo `[EE-SRC-07]`.

### 1.2 Mappa degli Enti e Portali Istituzionali
*   **Politsei- ja Piirivalveamet (PBGB / PPA - Polizia e Guardia di Frontiera):** Autorità statale preposta all'istruttoria e al rilascio di permessi di soggiorno (TRP), registrazione del lavoro a breve termine (RTO), estensioni di visti ed emissione dei documenti d'identità fisici e biometrici (*isikutunnistus*, *elamisloakaart*). Portali: [politsei.ee](https://www.politsei.ee) `[EE-SRC-11]`, prenotazioni [broneering.politsei.ee](https://broneering.politsei.ee) `[EE-SRC-18]` e self-service [iseteenindus.politsei.ee](https://iseteenindus.politsei.ee).
*   **Välisministeerium (Ministero degli Affari Esteri):** Sovraintende alla rete consolare per il rilascio dei visti Schengen C e dei visti nazionali di lunga durata D. Portale: [vm.ee](https://vm.ee) `[EE-SRC-19]`.
*   **Eesti Töötukassa (Fondo di Assicurazione contro la Disoccupazione):** Gestisce il test del mercato del lavoro e rilascia il nulla osta preventivo (*Töötukassa luba*) necessario ai datori di lavoro per assumere cittadini extra-UE al di fuori dei canali esenti `[EE-SRC-23]`.
*   **Eesti Tervisekassa (Fondo di Assicurazione Sanitaria):** Ente pubblico deputato all'erogazione delle prestazioni del servizio sanitario nazionale per i soggetti assicurati tramite l'imposta sociale (*sotsiaalmaks*) `[EE-SRC-28]`.
*   **Maksu- ja Tolliamet (EMTA - Agenzia delle Entrate e Dogane):** Gestisce il Registro dell'Occupazione (*Töötamise register* - TÖR) in cui ogni datore di lavoro deve registrare il dipendente prima dell'inizio materiale della prestazione `[EE-SRC-29]`.
*   **Study in Estonia / Harno (Education and Youth Board):** Ente governativo di coordinamento e accoglienza per studenti e ricercatori internazionali `[EE-SRC-24]`.
*   **Startup Estonia / EAS:** Ente promotore dell'ecosistema innovativo; il suo *Startup Committee* certifica i requisiti di scalabilità e tecnologia per accedere allo Startup Visa e alle esenzioni salariali e di quota `[EE-SRC-27]`.

---

## 2. Matrice dei Casi d'Uso (Dettaglio Operativo UE vs Extra-UE)

---

### CASO 1: Lavoro Dipendente Ordinario (Subordinate Employment)

#### A. Cittadini UE / SEE / Svizzera (inclusi italiani)
*   **Regime Giuridico:** Libera circolazione integrale ai sensi del Trattato FUE e dell'ELKS `[EE-SRC-02]`. Nessun visto, permesso di lavoro o autorizzazione preventiva di Töötukassa `[EE-SRC-23]`.
*   **Iter Amministrativo di Ingresso e Residenza:**
    1.  *Giorno 1–90:* Ingresso libero con passaporto o carta d'identità italiana valida per l'espatrio. L'attività lavorativa può iniziare sin dal primo giorno: il datore di lavoro deve iscrivere il lavoratore nel Registro dei Lavoratori (TÖR) presso l'EMTA prima della presa di servizio `[EE-SRC-29]`.
    2.  *Oltre i 3 mesi:* Obbligo perentorio di registrare la propria residenza presso il Comune (*Kohalik omavalitsus*, es. uffici anagrafici distrettuali di Tallinn o Tartu) `[EE-SRC-05]`. La registrazione anagrafica attribuisce automaticamente il codice identificativo personale estone (*isikukood*) e costituisce il **diritto di soggiorno temporaneo di 5 anni** (*tähtajaline elamisõigus*, ELKS § 13) `[EE-SRC-02]`.
    3.  *Entro 1 mese dalla registrazione anagrafica:* Obbligo di richiedere presso uno sportello PBGB la carta d'identità estone per cittadino UE (*EL kodaniku isikutunnistus*) `[EE-SRC-03]`, dotata di microchip crittografico e certificati di firma digitale qualificata eIDAS `[EE-SRC-32]`.
*   **Costi Amministrativi:** Registrazione anagrafica: 0 €; Rilascio ID-kaart allo sportello PBGB: **45 €** (35 € se richiesta tramite portale self-service per successivi rinnovi) `[EE-SRC-04]`, `[EE-SRC-17]`.
*   **Tempi:** Registrazione residenza e isikukood: a vista allo sportello (1 giorno lavorativo); Rilascio ID-kaart: 10–15 giorni lavorativi (massimo legale 30 giorni) `[EE-SRC-17]`.

#### B. Cittadini EXTRA-UE: Due Canali Alternativi (Breve vs Lungo Periodo)

##### Opzione 1: Lavoro a Breve Termine (RTO + Visto D)
*   **Titolo:** Registrazione del lavoro a breve termine (*Lühiajalise töötamise registreerimine* - RTO) abbinata a un Visto nazionale per soggiorni di lunga durata (Visto D) `[EE-SRC-01]`, `[EE-SRC-14]`.
*   **Durata Massima:** Fino a **365 giorni nell'arco di 455 giorni consecutivi** (270 giorni su 365 per mansioni stagionali) `[EE-SRC-01]`. Non rinnovabile all'infinito: superati i 365 giorni scatta un periodo obbligatorio di interruzione (*cooling-off*) di 90 giorni fuori dal Paese.
*   **Condizioni e Requisiti:**
    *   *Soglia Salariale Obbligatoria (05/10/2026):* Retribuzione mensile lorda pari ad almeno il salario medio nazionale estone, fissato a **2.092,00 €/mese** (consuntivo Statistics Estonia PA101 per il 2026) `[EE-SRC-08]`.
    *   *Test del Mercato del Lavoro (Töötukassa):* **NON RICHIESTO**. Nessun nulla osta preventivo `[EE-SRC-23]`.
    *   *Quota di Immigrazione:* **TOTALMENTE ESENTE** `[EE-SRC-31]`.
    *   *Requisito Aziendale 2026:* Il datore di lavoro estone deve dimostrare almeno 6 mesi di attività economica effettiva in Estonia `[EE-SRC-14]`.
*   **Procedura Operativa:**
    1.  Il datore di lavoro presenta l'istanza RTO telematicamente tramite il portale *PPA Iseteenindus*. Delibera PBGB entro 10–15 giorni lavorativi (tassa statale **130 €** online, 140 € cartaceo) `[EE-SRC-04]`.
    2.  Ottenuto l'RTO, il lavoratore richiede il **Visto D nazionale per lavoro** presso l'Ambasciata estone competente all'estero o centro visti VFS Global (tassa **120 €**) `[EE-SRC-19]`.
    3.  Ingresso in Estonia, registrazione anagrafica al *Rahvastikuregister* e registrazione al TÖR prima del primo giorno di lavoro `[EE-SRC-29]`.

##### Opzione 2: Permesso di Soggiorno Temporaneo per Lavoro (TRP for Employment)
*   **Titolo:** *Tähtajaline elamisluba töötamiseks* (Aliens Act §§ 176–181) `[EE-SRC-01]`, con rilascio di carta di soggiorno biometrica (*elamisloakaart*) `[EE-SRC-03]`.
*   **Durata:** Rilasciato inizialmente per un periodo fino a **2 anni**, rinnovabile fino a **5 anni** alla volta `[EE-SRC-11]`.
*   **Condizioni Tassative:**
    *   *Test del Mercato del Lavoro Töötukassa:* **OBBLIGATORIO**. L'azienda deve pubblicare l'offerta d'impiego sul portale Töötukassa per almeno 3 settimane. Solo se nessun cittadino estone o comunitario risulta reperibile ed idoneo, Töötukassa rilascia l'autorizzazione all'assunzione entro 7 giorni lavorativi `[EE-SRC-23]`.
    *   *Quota Annuale di Immigrazione (Sisserände piirarv):* **SOGGETTO**. Il contingente annuale (0,1% della popolazione permanente, pari a **1.292 posti per il 2026**) si esaurisce regolarmente nelle prime settimane dell'anno. Le istanze eccedenti vengono respinte automaticamente `[EE-SRC-31]`.
    *   *Soglia Salariale:* Almeno **2.092,00 €/mese lordi** `[EE-SRC-08]`.
*   **Procedura e Canali:** Domanda presentata di persona presso la rappresentanza diplomatica estone all'estero (tassa **280 €**) oppure presso uno sportello PBGB in Estonia se legalmente soggiornante (tassa **250 €**) `[EE-SRC-04]`, `[EE-SRC-17]`. Istruttoria PBGB entro 2 mesi (60 giorni) `[EE-SRC-11]`.
*   **Documenti Obbligatori:** Passaporto in corso di validità (scadenza > 3 mesi rispetto al titolo); foto biometrica ICAO; modulo di domanda TRP; nulla osta Töötukassa; conferma del datore (*Employer's Confirmation/Annex 2*); contratto di lavoro firmato con retribuzione lorda $\ge$ 2.092 €/mese; prova alloggio; polizza sanitaria privata (copertura minima 30.000 €) per i primi 30 giorni `[EE-SRC-11]`.
*   **Errori Comuni & Trappole:** L'assunzione ordinaria tramite TRP è impraticabile per gran parte dell'anno a causa del blocco della quota annuale (1.292 posti). La prassi consolidata delle aziende consiste nell'assumere inizialmente il candidato tramite RTO + Visto D (esente da quota) e preparare la domanda di TRP per l'apertura delle quote dell'anno successivo `[EE-SRC-14]`.

---

### CASO 2: Lavoro Altamente Qualificato (Skilled: Carta Blu UE, Top Specialist, Startup, ICT)

#### A. Cittadini UE / SEE (inclusi italiani)
Accesso immediato senza barriere retributive minime o autorizzazioni amministrative. Registrazione anagrafica ordinaria e richiesta ID-kaart se il soggiorno supera i 3 mesi `[EE-SRC-02]`.

#### B. Cittadini EXTRA-UE: I 4 Canali di Immigrazione Qualificata

```
                      ┌────────────────────────────────────────┐
                      │    CANALI LAVORO QUALIFICATO EXTRA-UE   │
                      │  (Tutti 100% Esenti da Quota e Töötukassa) │
                      └───────────────────┬────────────────────┘
                                          │
         ┌──────────────────┬─────────────┴───────┬───────────────────┐
         │                  │                     │                   │
         ▼                  ▼                     ▼                   ▼
  CARTA BLU UE        TOP SPECIALIST        STARTUP PERMIT      ICT SPECIALIST
(Aliens Act § 189)  (Aliens Act § 181¹)   (Aliens Act § 178¹) (Aliens Act § 181)
Contratto $\ge$ 6m    Salario $\ge$ 1,5x     Certificazione       Mansioni ICT
Laurea o 3a exp     (3.138 €/mese)        Startup Estonia     (EMTAK Sez. J)
Std: 1,5x (3.138€)  No laurea formale     0,8x (1.674 €/m)    1,0x (2.092 €/m)
STEM: 1,24x (2.594€)                      o Salario Minimo
```

##### 1. Carta Blu UE (EL sinine kaart - Aliens Act §§ 189–192 / Direttiva (UE) 2021/1883)
*   **Requisiti Contrattuali e Formativi:** Contratto di lavoro di durata minima di **6 mesi**. Possesso di diploma di istruzione superiore terziaria (laurea almeno triennale con apostille) OPPURE almeno 3 anni di esperienza professionale qualificata maturata nei 7 anni precedenti `[EE-SRC-01]`, `[EE-SRC-15]`.
*   **Soglie Salariali Vigenti (05/10/2026):**
    *   *Standard (Coefficiente 1.5x):* $1.5 \times 2.092\ € =$ **3.138,00 €/mese lordi** (37.656,00 €/anno) `[EE-SRC-08]`, `[EE-SRC-15]`.
    *   *Settori Carenti / Professioni STEM e neolaureati entro 3 anni (Coefficiente 1.24x):* $1.24 \times 2.092\ € =$ **2.594,08 €/mese lordi** (31.128,96 €/anno) `[EE-SRC-08]`, `[EE-SRC-15]`.
*   **Deroghe Sovrane:** **TOTALMENTE ESENTE dalla quota di immigrazione** `[EE-SRC-31]` e **ESENTE da autorizzazione Töötukassa** `[EE-SRC-23]`. Mobilità agevolata in altro Stato UE dopo 12 mesi. Ricongiungimento familiare immediato e contestuale con accesso illimitato al lavoro per il coniuge.
*   **Durata:** Durata del contratto + 3 mesi, con un massimo iniziale di **2 anni e 3 mesi** (27 mesi), rinnovabile fino a **4 anni e 3 mesi** `[EE-SRC-15]`.
*   **Costi:** 250 € (domanda PBGB in Estonia), 280 € (domanda in Ambasciata all'estero) `[EE-SRC-04]`. Tempi: delibera entro 30–60 giorni `[EE-SRC-15]`.

##### 2. Top Specialist (Tippspetsialist - Aliens Act § 181¹)
*   **Definizione e Requisiti:** Professionista con qualifiche ed esperienza settoriale avanzata assunto da un'impresa registrata in Estonia `[EE-SRC-01]`.
*   **Soglia Salariale Obbligatoria:** In base all'emendamento consolidato dell'Aliens Act, la soglia retributiva è stabilita a **1,5 volte la media mensile lorda nazionale** ($1.5 \times 2.092\ € =$ **3.138,00 €/mese lordi**) `[EE-SRC-08]`, `[EE-SRC-11]`. *(Nota tecnica Council: l'originario coefficiente 2.0x/4.184 € è stato definitivamente superato dalla riforma legislativa).*
*   **Deroghe e Vantaggi:** **ESENTE dalla quota di immigrazione** `[EE-SRC-31]` e **ESENTE dall'autorizzazione Töötukassa** `[EE-SRC-23]`. Non richiede necessariamente il possesso formale di un titolo di studio accademico, purché sussistano comprovate competenze e la retribuzione concordata. Esente dall'obbligo del test di lingua estone A2 al 5° anno `[EE-SRC-11]`.

##### 3. Startup Permit & Startup Visa (Aliens Act §§ 106¹, 178¹)
*   **Requisiti:** L'impresa datrice di lavoro deve possedere la formale certificazione di conformità emessa dal Comitato di Valutazione di *Startup Estonia*, che ne accerta il modello di business ad alta intensità tecnologica e scalabilità globale `[EE-SRC-27]`.
*   **Regime Retributivo:**
    *   *Scale-up / Growth Companies (Kasvuettevõte ex VMS § 178 lg 14):* Coefficiente **0.8x** del salario medio = **1.673,60 €/mese lordi** (convenzionalmente **1.674 €/mese**) `[EE-SRC-08]`, `[EE-SRC-27]`.
    *   *Startup Innovative (Iduettevõte ex VMS § 178 lg 3):* Totale esenzione dal salario medio, con il solo obbligo di corrispondere almeno il salario minimo nazionale (**946,00 €/mese lordi** dal 01/04/2026) `[EE-SRC-09]`.
*   **Deroghe:** **ESENTE dalla quota di immigrazione** e **ESENTE da Töötukassa** `[EE-SRC-27]`.

##### 4. Specialisti ICT (Aliens Act § 181, comma 1, n. 7)
*   **Requisiti:** Inquadramento contrattuale riconducibile alle tecnologie dell'informazione e della comunicazione (codice ISCO 25 o impresa classificata nella Sezione J dei codici EMTAK/NACE) `[EE-SRC-01]`.
*   **Soglia Salariale:** Salario medio nazionale ordinario (**2.092,00 €/mese**) `[EE-SRC-08]`.
*   **Deroghe:** **ESENZIONE INTEGRALE dalla quota annuale di immigrazione** `[EE-SRC-31]` ed **ESENZIONE da autorizzazione Töötukassa** `[EE-SRC-23]`.

---

### CASO 3: Internship / Tirocinio (Curriculare vs Extracurriculare)

#### A. Cittadini UE / SEE (inclusi italiani)
Accesso libero e non contingentato a qualsiasi forma di tirocinio formativo o pratico. Sottoscrizione di convenzione di tirocinio standard. Nessun visto o permesso. Copertura sanitaria tramite TEAM/EHIC se non retribuito; se retribuito con indennità soggetta a imposta sociale, scatta l'iscrizione a TÖR e Tervisekassa `[EE-SRC-06]`, `[EE-SRC-29]`.

#### B. Cittadini EXTRA-UE: Regime dei Tirocini

##### 1. Tirocinio Curriculare per Studenti Iscritti in Estonia
Coperto interamente dal **TRP for Study** (*Õppimiseks*) già in possesso dello studente `[EE-SRC-13]`. Non occorrono permessi di lavoro né registrazione RTO. L'ente ospitante procede all'iscrizione nel registro TÖR unicamente qualora sia erogata un'indennità economica qualificata come reddito `[EE-SRC-29]`.

##### 2. Tirocinio Extracurriculare / Formazione Pratica per Soggetti Esterni
*   **Titolo Abilitativo:** **Visto D nazionale per formazione pratica (*practical training / praktika*)** ex Aliens Act § 62 fino a 365 giorni, con obbligo di preventiva **registrazione RTO sotto causale "praktika"** da parte dell'azienda ospitante presso la PBGB `[EE-SRC-01]`, `[EE-SRC-14]`.
*   **Requisiti Soggettivi:** Lo stagista deve essere correntemente iscritto a un corso di laurea terziario all'estero oppure aver conseguito la laurea da non più di 2 anni `[EE-SRC-14]`. Il tirocinio deve essere strettamente correlato al piano di studi.
*   **Documentazione Indispensabile:**
    *   **Convenzione di Tirocinio Tripartita (*Praktikaleping*):** Sottoscritta dall'ente accademico di provenienza, dall'azienda ospitante in Estonia e dal tirocinante. Deve specificare: piano formativo analitico, ore settimanali, nominativo del supervisore aziendale e ammontare dell'indennità economica o borsa `[EE-SRC-14]`.
    *   Prova di alloggio registrato;
    *   Risorse finanziarie di autosufficienza (indennità, borsa Erasmus+ Traineeship o estratto conto bancario con saldo minimo pari ad almeno 220 €/mese per la durata del periodo) `[EE-SRC-10]`;
    *   Assicurazione sanitaria privata valida con copertura minima di 30.000 € `[EE-SRC-19]`.
*   **Costi:** Registrazione RTO: **130 €** (online a carico del datore) `[EE-SRC-04]`; Visto D: **120 €** `[EE-SRC-19]`.

---

### CASO 4: Studio Universitario (Bachelor / Master)

#### A. Cittadini UE / SEE (inclusi italiani)
Ammissione diretta tramite i portali universitari (es. DreamApply). Fino a 3 mesi soggiorno libero. Oltre i 3 mesi: registrazione anagrafica al Comune (*isikukood*) e richiesta ID-kaart UE (45 €) entro 1 mese `[EE-SRC-02]`, `[EE-SRC-12]`. Assistenza sanitaria garantita dalla TEAM/EHIC `[EE-SRC-06]`. Lavoro consentito senza restrizioni orarie né autorizzazioni `[EE-SRC-02]`.

#### B. Cittadini EXTRA-UE: Permesso di Soggiorno per Studio (TRP for Study)
*   **Titolo:** *Tähtajaline elamisluba õppimiseks* (Aliens Act §§ 160–168) `[EE-SRC-01]`, `[EE-SRC-13]`.
*   **Durata di Rilascio:** Rilasciato per l'**intera durata nominale del corso di studi** (*õppekava nominaalkestus*: tipicamente 3 anni per Bachelor, 2 anni per Master, fino a 5 anni per percorsi a ciclo unico) `[EE-SRC-13]`.
*   **Condizione di Mantenimento:** Obbligo continuativo di soddisfare il piano di studi a tempo pieno (*täiskoormusega õpe* ex VMS § 160). La mancata maturazione dei crediti ECTS annuali minimi o l'esmatricolazione comporta l'obbligo di tempestiva notifica da parte dell'ateneo e la revoca immediata del permesso da parte del PBGB `[EE-SRC-13]`.
*   **Diritti di Lavoro Durante gli Studi (Norma Estone):**
    *   Gli studenti extra-UE con TRP for Study **HANNO IL DIRITTO DI LAVORARE SENZA ALCUN LIMITE DI ORE SETTIMANALI** (nessun limite di 20h/settimana!) `[EE-SRC-13]`, `[EE-SRC-24]`.
    *   Nessuna autorizzazione di Töötukassa, nessun RTO e nessuna soglia di stipendio medio richiesta.
    *   *Unico limite:* L'impiego non deve pregiudicare il completamento degli studi full-time `[EE-SRC-13]`.
*   **Copertura Sanitaria Studenti (Rilievo Critico di Audit):**
    *   Il TRP for Study **NON CONFERISCE la copertura sanitaria pubblica Tervisekassa** `[EE-SRC-28]`.
    *   Lo studente è obbligato a stipulare e mantenere per l'intero soggiorno una **polizza sanitaria privata conforme** (es. ERGO, Inges, Swisscare) con copertura minima di almeno **30.000 €** `[EE-SRC-26]`.
    *   *Eccezione lavorativa:* Qualora lo studente venga assunto con un regolare contratto di lavoro dipendente in Estonia e il datore versi l'imposta sociale (33%), lo studente acquisisce lo status di lavoratore assicurato e ottiene la **piena copertura statale Tervisekassa** (dopo 14 giorni di carenza TÖR) `[EE-SRC-06]`, `[EE-SRC-28]`.
*   **Requisiti Finanziari (Proof of Funds):** Dimostrazione di risorse economiche adeguate indicizzate al *toimetulekupiir* statale (**220 €/mese**, pari a **2.640 €/anno accademico**) `[EE-SRC-10]`. Nella prassi, le università consigliano una disponibilità di almeno **4.000 € – 5.000 €** su conto corrente bancario intestato allo studente `[EE-SRC-24]`.
*   **Costi:** Domanda presentata in Estonia al PBGB: **225 €**; Domanda presentata all'estero presso Ambasciata estone: **255 €** `[EE-SRC-04]`, `[EE-SRC-17]`. Tempi: istruttoria PBGB entro 2 mesi (60 giorni) `[EE-SRC-13]`.

---

### CASO 5: Tesi / Ricerca all'Estero (Visiting vs Ricercatore Scientifico)

#### A. Cittadini UE / SEE (inclusi italiani)
Soggiorno libero sulla base dell'accordo inter-universitario o lettera di invito dell'ente di ricerca. Nessun permesso. Registrazione anagrafica se la permanenza supera i 3 mesi `[EE-SRC-02]`.

#### B. Cittadini EXTRA-UE: Ricerca Scientifica e Tesi
*   **Titolo:** *Tähtajaline elamisluba teadustööks* (Aliens Act §§ 171–175 / Direttiva (UE) 2016/801) per soggiorni oltre 365 giorni, oppure **Visto D per ricerca** per periodi fino a 1 anno `[EE-SRC-01]`, `[EE-SRC-16]`.
*   **Condizione Cardine: Hosting Agreement (Võõrustamisleping):** Stipula obbligatoria di un Accordo di Accoglienza formale con un'istituzione di ricerca o università estone accreditata nel registro ETIS (*Eesti Teadusinfosüsteem*) `[EE-SRC-16]`.
*   **Deroghe e Agevolazioni:** **TOTALMENTE ESENTE dalla quota di immigrazione** `[EE-SRC-31]` e **ESENTE da autorizzazione Töötukassa** `[EE-SRC-23]`. Diritto al ricongiungimento familiare immediato e parallelo `[EE-SRC-16]`. Diritto di svolgere attività di insegnamento accademico senza permessi supplementari.
*   **Regime Sanitario:** Se assunto con contratto di ricerca con versamento di imposta sociale: copertura automatica *Tervisekassa* (dopo 14 giorni TÖR) `[EE-SRC-06]`. Se titolare unicamente di borsa di studio esente da contributi: obbligo di polizza sanitaria privata (min. 30.000 €) `[EE-SRC-16]`.
*   **Costi:** TRP Ricerca: **225 €** (Estonia) / **255 €** (all'estero) `[EE-SRC-04]`. Visto D Ricerca: **120 €** `[EE-SRC-19]`.

---

### CASO 6: Erasmus+ e Mobilità Intra-UE

#### A. Cittadini UE / SEE (inclusi italiani)
Libero ingresso con passaporto/carta d'identità. Per mobilità semestrali o annuali (> 3 mesi): registrazione dell'indirizzo al Comune (*Rahvastikuregister*), assegnazione dell'*isikukood* e successiva richiesta ID-kaart UE (45 €) entro 30 giorni `[EE-SRC-02]`, `[EE-SRC-12]`. Assistenza sanitaria coperta integralmente dalla TEAM/EHIC `[EE-SRC-06]`.

#### B. Studenti EXTRA-UE Titolari di Titolo di Studio in Altro Stato UE (Direttiva UE 2016/801)
*   **Regime Speciale di Mobilità Intra-UE:** In conformità all'art. 27–32 della Direttiva (UE) 2016/801, uno studente extra-UE regolarmente soggiornante per studio in uno Stato membro UE (ad eccezione di Irlanda e Danimarca) **ha il diritto di entrare e studiare in Estonia per un periodo fino a 360 GIORNI SENZA DOVER RICHIEDERE UN VISTO ESTONE NÉ UN TRP ESTONE** `[EE-SRC-01]`, `[EE-SRC-24]`.
*   **Procedura Amministrativa e Notifica:** L'università estone ospitante registra la mobilità nel sistema accademico estone (EHIS) e conserva l'accordo Erasmus+ (*Learning Agreement*) e la copia del permesso di soggiorno del primo Paese UE. Nessuna procedura consolare preventiva richiesta.
*   **Documenti da Portare:** Passaporto valido, titolo di soggiorno per studio valido del primo Paese UE per tutta la durata del soggiorno estone, *Learning Agreement* approvato, polizza sanitaria privata o copertura Erasmus+ con massimale di 30.000 € `[EE-SRC-24]`.

---

### CASO 7: Master di I/II Livello e Dottorato di Ricerca (PhD)

#### A. Master Universitario (I e II Livello)
Regime ordinario del Permesso di Soggiorno per Studio (**Caso 4**): emissione per la durata nominale biennale, diritto al lavoro illimitato, assicurazione privata obbligatoria salvo impiego dipendente `[EE-SRC-13]`.

#### B. Dottorato di Ricerca (PhD) – Riforma Estone del Dottorato 2022
A decorrere dall'anno accademico 2022/2023, la Repubblica d'Estonia ha operato una riforma strutturale del dottorato universitario (*Higher Education Act*):
*   **Inquadramento Contrattuale: Junior Research Fellow (Nooremteadur):**
    1.  Il dottorando ha un **doppio status giuridico**: è immatricolato come studente di dottorato (*doktorant*) ed è contemporaneamente assunto dall'università con un regolare **contratto di lavoro subordinato (*tööleping*) a tempo determinato di 4 anni come Ricercatore Junior (*Nooremteadur*)** `[EE-SRC-25]`.
    2.  *Trattamento Economico:* Non percepisce una borsa esentasse, ma un **salario mensile lordo regolare**, di importo contrattuale pari o superiore alla media nazionale estone (generalmente tra **2.100 € e 2.500 € lordi/mese** nel 2026) `[EE-SRC-25]`.
    3.  *Previdenza e Sanità:* L'università versa su ogni mensilità l'imposta sociale del **33%** (`[EE-SRC-07]`). Il dottorando gode ex lege di **PIENA COPERTURA SANITARIA PUBBLICA TERVISEKASSA**, 42 giorni di ferie retribuite all'anno, contributi pensionistici e indennità di malattia statale `[EE-SRC-06]`, `[EE-SRC-25]`.
    4.  *Titolo di Soggiorno per Extra-UE:* Rilascio di TRP for Study o TRP for Scientific Research, totalmente **esente da quota immigrazione** e **esente da autorizzazione Töötukassa** `[EE-SRC-16]`, `[EE-SRC-31]`.
*   **Dottorandi con Finanziamenti Esteri Non Contrattualizzati (Regime Residuale):** I dottorandi che rifiutano il contratto o sono titolari di borse estere mantengono il mero status di studente con TRP for Study, ma **non godono di Tervisekassa automatica** e devono stipulare una polizza sanitaria privata (min. 30.000 €) `[EE-SRC-25]`, `[EE-SRC-26]`.

---

### CASO 8: Working Holiday / Vacanza-Lavoro

#### A. Cittadini UE / SEE (inclusi italiani)
Non applicabile (godono già della libertà assoluta di movimento, residenza e lavoro senza vincoli temporali) `[EE-SRC-02]`.

#### B. Cittadini EXTRA-UE: Accordi Bilaterali Attivi
L'Estonia ha stipulato accordi bilaterali di vacanza-lavoro attivi e vigenti **esclusivamente** con 4 nazioni `[EE-SRC-21]`:
1.  **Australia:** MoU bilaterale (Età: 18–30 anni) `[EE-SRC-21]`.
2.  **Nuova Zelanda:** Accordo bilaterale (Età: 18–30 anni) `[EE-SRC-21]`.
3.  **Canada:** Youth Mobility Agreement (Età: 18–35 anni) `[EE-SRC-21]`.
4.  **Giappone:** Accordo bilaterale (Età: 18–30 anni) `[EE-SRC-21]`.

> [!CAUTION]
> **Smentita Ufficiale (Corea del Sud):** A differenza di quanto riportato in fonti secondarie non aggiornate, **NON sussiste alcun accordo Working Holiday in vigore tra Estonia e Corea del Sud**. I cittadini sudcoreani devono utilizzare i canali ordinari (RTO, visto studio, startup visa o TRP) `[EE-SRC-21]`.

*   **Titolo Rilasciato:** **Visto D Working Holiday** a ingressi multipli per un massimo di **12 mesi** `[EE-SRC-21]`.
*   **Condizioni di Lavoro:** Scopo primario turistico-culturale; il lavoro deve essere ancillare e accessorio a coprire i costi di soggiorno. **Esente da quota immigrazione e da test Töötukassa** `[EE-SRC-21]`. In base agli accordi, non è consentito lavorare per lo stesso datore di lavoro per più di 3–6 mesi consecutivi, né stipulare contratti a tempo indeterminato.
*   **Requisiti e Documenti:** Passaporto dei 4 Paesi; età 18–30 anni (18–35 CA); biglietto di ritorno o fondi sufficienti per il riacquisto; fondi minimi di sussistenza (min. 2.000 € – 3.000 €); polizza sanitaria integrale per 12 mesi; dichiarazione di assenza di familiari a carico al seguito. Tassa statale Visto D: **120 €** `[EE-SRC-04]`, `[EE-SRC-19]`.

---

### CASO 9: Post-Study Work / Ricerca Lavoro o Imprenditorialità

#### A. Cittadini UE / SEE (inclusi italiani)
Diritto permanente di soggiorno e ricerca lavoro con iscrizione anagrafica ordinaria `[EE-SRC-02]`.

#### B. Cittadini EXTRA-UE: Il Regime Sovrano dei Laureati in Estonia

##### 1. Il Periodo di Soggiorno Legale di 270 Giorni (Aliens Act § 43 lg 5)
*   Al conseguimento del titolo di istruzione superiore in Estonia (Bachelor, Master o PhD) o alla naturale scadenza del TRP for Study, il laureato ha il diritto legale di **soggiornare in Estonia per ulteriori 270 GIORNI (9 MESI)** `[EE-SRC-01]`, `[EE-SRC-24]`.
*   *Finalità:* Ricerca di un impiego subordinato o costituzione e avvio di una nuova impresa (`OÜ`).
*   *Lavoro durante i 270 giorni:* Il laureato può lavorare legalmente a tempo pieno durante l'intero periodo di transizione `[EE-SRC-24]`.
*   *Vincolo Tassativo di Viaggio:* La residenza durante i 270 giorni è valida **esclusivamente all'interno del territorio estone**. Con la residence card di studio scaduta, non è consentito viaggiare negli altri Paesi dello Spazio Schengen né rientrare in Estonia se si varcano i confini senza un visto valido `[EE-SRC-01]`.

##### 2. Le 3 Esenzioni Strutturali Codificate per i Laureati Estoni
Quando un'impresa estone assume uno straniero laureatosi presso un'università estone accreditata, scattano **tre esenzioni di eccezionale rilievo codificate nel VMS**:
1.  **ESENZIONE TOTALE DALLA QUOTA DI IMMIGRAZIONE (VMS § 115 lg 2 p 8):** Il TRP for Employment viene rilasciato senza alcuna limitazione sul contingente dei 1.292 posti `[EE-SRC-01]`, `[EE-SRC-31]`.
2.  **ESENZIONE DALL'AUTORIZZAZIONE TÖÖTUKASSA (VMS § 181 lg 1 p 6 / § 177):** Nessun test del mercato del lavoro, nessuna attesa delle 3 settimane di annuncio `[EE-SRC-01]`, `[EE-SRC-23]`.
3.  **ESENZIONE DALLA SOGLIA SALARIALE MEDIA (VMS § 178 lg 4):** Il datore di lavoro **NON è obbligato a corrispondere la media nazionale (2.092 €/m)**. È consentita qualsiasi retribuzione contrattuale pattuita, purché pari o superiore al salario minimo nazionale legale (**946,00 €/mese** dal 01/04/2026) `[EE-SRC-01]`, `[EE-SRC-09]`.
*   *Computo per la Residenza Permanente (Pikaajalise elaniku elamisluba):* Il 50% del periodo trascorso con TRP for Study viene conteggiato nei 5 anni continuativi richiesti per il permesso di soggiorno di lungo periodo UE `[EE-SRC-01]`.

---

### CASO 10: Soggiorni Brevi (≤ 90 gg) e Ricongiungimento Familiare

#### 1. Soggiorni Brevi (≤ 90 Giorni su 180 nello Spazio Schengen)
*   **Cittadini UE:** Libera circolazione Schengen senza limitazioni amministrative `[EE-SRC-02]`.
*   **Cittadini Extra-UE Visa-Free (USA, UK, Canada, Australia, Giappone, ecc.):**
    *   Ingresso con passaporto biometrico senza visto per un massimo di 90 giorni ogni 180 giorni nell'intero Spazio Schengen.
    *   *Regola Lavorativa:* **Il soggiorno visa-free turistico NON consente di lavorare**. L'attività lavorativa è legittima solo se l'azienda estone ha preventivamente registrato il lavoratore con **RTO** presso la PBGB `[EE-SRC-14]`. Con RTO approvato, il cittadino visa-free lavora legalmente nei suoi 90 giorni di franchigia senza visto D `[EE-SRC-01]`.
*   **Cittadini Extra-UE Soggetti a Visto:** Richiesta di Visto Schengen C (tariffa **90 €** ex Regolamento CE aggiornato a giugno 2024, 45 € per minori 6–11 anni) `[EE-SRC-20]`. Se devono svolgere attività lavorativa breve, occorre sia l'approvazione RTO sia il visto idoneo `[EE-SRC-14]`.

#### 2. Ricongiungimento Familiare (Aliens Act §§ 137–146)
*   **Familiari Ammissibili:** Coniuge legale o partner registrato (inclusi matrimoni e unioni tra persone dello stesso sesso, pienamente riconosciuti dal 1° gennaio 2024); figli minori di anni 18; figli maggiorenni o genitori non autosufficienti per gravi e comprovati motivi di salute `[EE-SRC-01]`.
*   **Regime Ordinario vs Corsie Preferenziali per Sponsor:**
    *   *Regola Generale (Lavoro Ordinario):* Richiede che lo sponsor principale abbia risieduto regolarmente in Estonia per almeno **2 anni** `[EE-SRC-01]`.
    *   *Corsie Preferenziali Immediate (Senza periodo di attesa di 2 anni):* Possono richiedere il ricongiungimento simultaneo ed immediato dei familiari sin dal primo giorno:
        *   Titolari di Carta Blu UE (*EL sinine kaart*) `[EE-SRC-15]`;
        *   Top Specialist (*Tippspetsialist*) `[EE-SRC-11]`;
        *   Dipendenti e fondatori di Startup certificate `[EE-SRC-27]`;
        *   Specialisti ICT `[EE-SRC-01]`;
        *   Ricercatori scientifici e Dottorandi *Nooremteadur* `[EE-SRC-16]`, `[EE-SRC-25]`.
*   **Requisiti Amministrativi:** Disponibilità di un alloggio registrato nel *Rahvastikuregister* idoneo per il nucleo; risorse economiche nette sufficienti per ciascun componente (indicizzate al *toimetulekupiir*: 220 € per lo sponsor + 440 € per il coniuge + 264 € per ogni minore) `[EE-SRC-10]`; polizza sanitaria privata per i familiari `[EE-SRC-01]`.
*   **Diritti Lavorativi del Coniuge Ricongiunto:** Il coniuge a cui viene concesso il TRP per motivi familiari **HA IL PIENO DIRITTO DI LAVORARE IN ESTONIA SENZA LIMITI**, sia come lavoratore dipendente sia come lavoratore autonomo/imprenditore, senza autorizzazione Töötukassa e al di fuori della quota annuale `[EE-SRC-01]`.

---

## 3. Riepilogo Costi Amministrativi Obbligatori per Tipologia

| Tipologia di Titolo / Procedura | Canale di Presentazione | Visto D | Tassa Domanda TRP / RTO | Emissione Carta Id / Soggiorno | Totale Amministrativo Obbligatorio | Tempi di Rilascio (De Jure vs De Facto) | Riferimenti Fonti |
| :--- | :--- | :---: | :---: | :---: | :---: | :---: | :---: |
| **Registrazione UE (Soggiorno > 3m)** | Comune + Sportello PBGB | — | 0 € (anagrafe) | 45 € (*isikutunnistus*) | **45,00 €** | 1 gg anagrafe / 10–15 gg lavorativi carta | `[EE-SRC-04]`, `[EE-SRC-12]`, `[EE-SRC-17]` |
| **Registrazione UE (Rinnovo online)** | Portale Self-service PBGB | — | 0 € | 35 € | **35,00 €** | 5–10 gg lavorativi | `[EE-SRC-04]`, `[EE-SRC-17]` |
| **Lavoro Breve Extra-UE (RTO + Visto D)** | Portale PBGB + Ambasciata estero | 120 € | 130 € (RTO online) | Inclusa nel Visto D | **250,00 €** | 10–15 gg RTO / 10–14 gg lavorativi Visto D | `[EE-SRC-04]`, `[EE-SRC-14]`, `[EE-SRC-19]` |
| **TRP Lavoro Ordinario / Skilled** | Sportello PBGB (in Estonia) | — | 250 € | Inclusa nella tassa TRP | **250,00 €** | Fino a 60 gg de jure / 40–60 gg reali | `[EE-SRC-04]`, `[EE-SRC-11]`, `[EE-SRC-17]` |
| **TRP Lavoro Ordinario / Skilled** | Ambasciata estone all'estero | — | 280 € | Inclusa nella tassa TRP | **280,00 €** | Fino a 60 gg de jure / 50–70 gg reali | `[EE-SRC-04]`, `[EE-SRC-11]`, `[EE-SRC-17]` |
| **Carta Blu UE** | Sportello PBGB / Ambasciata | — | 250 € / 280 € | Inclusa nella tassa TRP | **250,00 € / 280,00 €** | Fino a 60 gg de jure / 25–40 gg reali | `[EE-SRC-04]`, `[EE-SRC-15]`, `[EE-SRC-17]` |
| **TRP Studio Universitario** | Sportello PBGB (in Estonia) | — | 225 € | Inclusa nella tassa TRP | **225,00 €** | Fino a 60 gg de jure / 30–50 gg reali | `[EE-SRC-04]`, `[EE-SRC-13]`, `[EE-SRC-17]` |
| **TRP Studio Universitario** | Ambasciata estone all'estero | — | 255 € | Inclusa nella tassa TRP | **255,00 €** | Fino a 60 gg de jure / 40–60 gg reali | `[EE-SRC-04]`, `[EE-SRC-13]`, `[EE-SRC-17]` |
| **TRP Ricerca Scientifica / Dottorato** | Sportello PBGB / Ambasciata | — | 225 € / 255 € | Inclusa nella tassa TRP | **225,00 € / 255,00 €** | Fino a 60 gg de jure / 30–45 gg reali | `[EE-SRC-04]`, `[EE-SRC-16]`, `[EE-SRC-17]` |
| **Visto D Tirocinio / Ricerca / Startup** | Ambasciata estone all'estero | 120 € | — | Inclusa nel Visto D | **120,00 €** | Fino a 30 gg de jure / 10–15 gg reali | `[EE-SRC-04]`, `[EE-SRC-19]` |
| **Working Holiday (AU, NZ, CA, JP)** | Ambasciata estone all'estero | 120 € | — | Inclusa nel Visto D | **120,00 €** | Fino a 30 gg de jure / 14–21 gg reali | `[EE-SRC-04]`, `[EE-SRC-21]` |
| **Soggiorno Breve (Visto C Schengen)** | Ambasciata / VFS Global | 90 € | — | Inclusa nel Visto C | **90,00 €** (+ service fee VFS ~25–35 €) | 15 gg de jure / 7–15 gg reali | `[EE-SRC-04]`, `[EE-SRC-20]` |
| **Emissione Espressa Carta (Kiirkorras)**| Sportello PBGB (solo a Tallinn) | — | — | 250 € | **250,00 €** | **2 giorni lavorativi tassativi** | `[EE-SRC-04]`, `[EE-SRC-17]` |

---

## 4. Statuto Giuridico durante l'Attesa

### 4.1 Assenza di Soggiorno Ponte per Prima Domanda di TRP (VMS §§ 43–44)
*   A differenza di altri ordinamenti europei che rilasciano ricevute attestanti il soggiorno provvisorio (es. cedolino postale in Italia o *Fiktionsbescheinigung* in Germania), **in Estonia la mera presentazione della prima domanda di Permesso di Soggiorno Temporaneo (TRP) NON costituisce titolo legale di soggiorno** `[EE-SRC-01]`.
*   L'art. 43 della *Välismaalaste seadus* stabilisce un elenco chiuso delle basi legali di soggiorno temporaneo (visto consolare valido, franchigia esente visto Schengen 90/180). La pendenza della delibera di un primo TRP non è compresa tra esse `[EE-SRC-01]`.
*   *La Trappola dell'Overstay:* Se il richiedente entra con esenzione visto (90 giorni) o con visto D in scadenza e presenta domanda di TRP in Estonia, **alla scadenza del visto/periodo Schengen diventa un soggiornante illegale** qualora la decisione PBGB non sia ancora stata notificata. Il richiedente è tenuto per legge a lasciare l'Estonia e attendere l'esito all'estero, a meno che non richieda tempestivamente un visto D per coprire formalmente l'istruttoria `[EE-SRC-01]`, `[EE-SRC-11]`.
*   *(Nota: Il soggiorno automatico ex lege fino alla delibera è riconosciuto esclusivamente per la PROROGA di un TRP già posseduto, presentata almeno 2 mesi prima della scadenza ex VMS § 44).*

### 4.2 Regime Tassativo dei Viaggi all'Estero durante i 270 Giorni Post-Studio
*   Ai sensi del VMS § 43 lg 5, i 270 giorni di soggiorno per ricerca lavoro o avvio d'impresa operano **esclusivamente all'interno dei confini della Repubblica d'Estonia** `[EE-SRC-01]`, `[EE-SRC-24]`.
*   Poiché la carta di soggiorno (*elamisloakaart*) per studio risulta scaduta, lo straniero **non ha titolo per viaggiare negli altri Paesi dello Spazio Schengen**. Se lascia il territorio estone, non potrà fare rientro senza aver ottenuto un nuovo visto consolare `[EE-SRC-01]`.

---

## 5. Sezione Speciale: Red Flags, Trappole Amministrative e Rifiuti

Di seguito le 12 vulnerabilità e cause critiche di respingimento individuate dal Red Team:

1.  **Perdita Automatica del Diritto di Soggiorno UE per Cancellazione Anagrafica [CRITICA] (ELKS § 15 lg 1 p 1):**  
    In Estonia il diritto di soggiorno UE è strettamente subordinato alla presenza di un indirizzo valido nel Registro della Popolazione (*Rahvastikuregister*). Se l'inquilino trasloca senza registrare il nuovo appartamento entro 30 giorni, o se il proprietario cancella il nominativo a fine locazione ex § 96 RRS, **il cittadino UE perde istantaneamente il proprio status legale di residente** `[EE-SRC-02]`, `[EE-SRC-05]`. Decadono all'istante l'assicurazione Tervisekassa e i servizi comunali.
2.  **Obbligo Perentorio di Richiesta ID-Card entro 1 Mese dall'Anagrafe [ALTA] (ELKS § 14 lg 1; ITDS § 31):**  
    I cittadini UE residenti hanno l'obbligo di legge di richiedere la carta d'identità (*EL kodaniku isikutunnistus*) entro un mese dalla registrazione della residenza `[EE-SRC-02]`, `[EE-SRC-03]`. Senza di essa è impossibile configurare Smart-ID, firmare contratti di lavoro o d'affitto via DigiDoc ed evitare le commissioni onerose imposte dalle banche ai non-residenti `[EE-SRC-32]`, `[EE-SRC-33]`.
3.  **Mancato Consenso del Locatore e Sfratto Anagrafico [CRITICA] (RRS §§ 65, 96):**  
    La registrazione della residenza richiede un contratto di locazione formalmente inoppugnabile o il consenso del proprietario `[EE-SRC-05]`. Se il locatore affitta in "nero" e rifiuta la firma, l'iscrizione è preclusa. Inoltre, in caso di comproprietà (*kaasomand*), occorre il consenso di tutti i comproprietari `[EE-SRC-05]`.
4.  **Tetto della Quota di Immigrazione per Lavoro Ordinario [ALTA] (VMS §§ 113–115):**  
    La quota per il 2026 è di sole **1.292 unità** `[EE-SRC-31]`. Chi non rientra nelle categorie esenti (ICT, startup, Top Specialist, laureati estoni o cittadini USA/UK/JP) rischia il rigetto automatico dell'istanza di TRP per esaurimento quota nei primi giorni di gennaio `[EE-SRC-01]`, `[EE-SRC-31]`.
5.  **Il Limite Rigido del Lavoro a Breve Termine RTO [CRITICA] (VMS § 106 lg 1):**  
    L'RTO non può superare 365 giorni su 455 consecutivi `[EE-SRC-01]`. Non è possibile rinnovarlo indefinitamente. Raggiunto il limite, scatta un cooling-off di almeno 90 giorni fuori dall'Estonia. Chi intende stabilizzarsi deve depositare l'istanza per il TRP ordinario o Carta Blu almeno 3–4 mesi prima della scadenza `[EE-SRC-14]`.
6.  **Assenza di Soggiorno Ponte durante Istruttoria del 1° TRP [CRITICA] (VMS §§ 43–44):**  
    La presentazione della domanda non dà titolo di soggiorno. Se il visto d'ingresso scade prima dei 60–90 giorni di decisione PBGB, si cade nello stato di clandestinità (*overstay*) con obbligo di allontanamento `[EE-SRC-01]`, `[EE-SRC-11]`.
7.  **Revoca Immediata dei 270 Giorni Post-Studio in caso di Dropout [ALTA] (VMS § 43 lg 5, § 158):**  
    La finestra di 9 mesi opera esclusivamente alla **naturale conclusione del corso di laurea**. In caso di abbandono, mancato rispetto dei crediti ECTS a tempo pieno o espulsione, il PBGB revoca il titolo all'istante, con obbligo di rimpatrio entro 15–30 giorni `[EE-SRC-01]`, `[EE-SRC-24]`.
8.  **Periodo di Carenza di 14 Giorni di Tervisekassa [ALTA] (RKS § 6 lg 4):**  
    L'assicurazione sanitaria pubblica non decorre dal primo giorno di lavoro, ma **dopo 14 giorni di calendario** dall'iscrizione nel TÖR `[EE-SRC-06]`. In questo lasso temporale, le spese mediche per infortuni o malattie sono interamente scoperte. È indispensabile utilizzare la TEAM (cittadini UE) o mantenere una polizza privata attiva per i primi 30 giorni (extra-UE) `[EE-SRC-06]`, `[EE-SRC-28]`.
9.  **Rigore su Apostille, Traduzioni Giurate e Scadenza Casellario [MEDIA/ALTA]:**  
    Tutti i documenti esteri devono recare l'Apostille dell'Aia ed essere asseverati da un traduttore giurato (*vannutatud tõlk*) esclusivamente in **estone o inglese** `[EE-SRC-19]`. I certificati del casellario giudiziale decadono dopo 6 mesi (3 mesi per molte ambasciate): data la carenza di slot consolari, rischiano di scadere prima dell'appuntamento `[EE-SRC-19]`.
10. **La Tagliola dell'Estone A2 al 5° Anno di Lavoro Ordinario [ALTA] (VMS § 178¹):**  
    Chi lavora con TRP subordinato ordinario per 5 anni ha l'obbligo di certificare la conoscenza della lingua estone almeno al **livello A2** per ottenere il rinnovo `[EE-SRC-01]`, `[EE-SRC-11]`. Chi non supera il test Harno subisce il rigetto dell'estensione e l'avvio della procedura di rimpatrio (sono esenti Carta Blu, Top Specialist, ICT, startup e ricercatori) `[EE-SRC-11]`.
11. **La Grande Illusione della e-Residency [CRITICA] (ITDS § 20^6; VMS § 189):**  
    L'e-Residency è una mera smart card per l'accesso telematico da remoto e la firma digitale; **NON conferisce residenza fisica, residenza fiscale né alcun diritto di ingresso o soggiorno in Estonia o nell'Area Schengen** `[EE-SRC-03]`, `[EE-SRC-30]`. Gestire fisicamente la propria azienda in loco con visto turistico configura reato di lavoro irregolare. Per trasferirsi occorrono o 65.000 € di investimento accertato in OÜ (TRP Business) oppure la qualifica di Startup innovativa certificata `[EE-SRC-01]`, `[EE-SRC-27]`.
12. **Incompetenza dell'Ambasciata a Roma per i Visti [ALTA] (roma.mfa.ee):**  
    L'Ambasciata d'Estonia a Roma non accetta domande di visto di alcun tipo `[EE-SRC-22]`. I cittadini extra-UE regolarmente residenti in Italia devono entrare in Estonia sfruttando la franchigia dei 90 giorni Schengen e depositare la domanda di TRP o RTO direttamente sul territorio estone presso la PBGB `[EE-SRC-22]`.

---

## 6. Guida Operativa all'Onboarding Pratico e Infrastruttura Digitale

### 6.1 Roadmap Operativa Step-by-Step per Espatriati Italiani / UE
1.  **Arrivo in Estonia:** Ingresso con passaporto o carta d'identità italiana valida per l'espatrio + Tessera Sanitaria TEAM (indispensabile per coprire il gap sanitario iniziale) `[EE-SRC-02]`, `[EE-SRC-06]`.
2.  **Contratto di Locazione:** Ottenere un contratto di affitto (*üürileping*) firmato dalle parti. Se il locatore estone usa la firma digitale DigiDoc (.asice) e il cittadino non ha ancora l'e-ID, firmare una copia cartacea originale con firma autografa e allegare copia del documento del proprietario `[EE-SRC-05]`.
3.  **Registrazione Anagrafica (Rahvastikuregister):** Entro 3 mesi dall'arrivo, recarsi presso l'ufficio anagrafe distrettuale (*linnaosavalitsus*) o all'*International House of Estonia* a Ülemiste City (Tallinn) muniti di contratto d'affitto. Rilascio immediato del codice fiscale estone (**isikukood**) e costituzione del diritto di soggiorno per 5 anni `[EE-SRC-02]`, `[EE-SRC-05]`.
4.  **Richiesta Carta d'Identità (ID-kaart):** Entro 30 giorni dall'iscrizione anagrafica, presentarsi presso un ufficio PBGB (Tammsaare o Pinna a Tallinn, prenotando prima su *broneering.politsei.ee*) per fototessera, rilevamento impronte e pagamento della tassa di **45 €** `[EE-SRC-04]`, `[EE-SRC-18]`.
5.  **Conto Bancario:** Evitare le lungaggini e i 250 € di istruttoria KYC imposti dalle banche tradizionali ai neo-residenti `[EE-SRC-33]`. Comunicare al datore di lavoro il proprio IBAN europeo **Wise** o **Revolut** (l'accettazione per stipendi e borse è obbligatoria ex art. 9 Reg. UE 260/2012 e garantita al 100% in Estonia) `[EE-SRC-33]`. Una volta in possesso della ID-kaart estone, l'apertura di un conto LHV o Swedbank sarà immediata e gratuita online.
6.  **Attivazione Digitale (Smart-ID):** Ritirata l'ID-kaart con la busta PIN sigillata (PIN1 autenticazione, PIN2 firma), acquistare un lettore smart card USB da Euronics (10–15 €), installare il software *DigiDoc4* sul computer e configurare immediatamente l'applicazione **Smart-ID** sullo smartphone per autenticarsi ed apporre firme digitali con pieno valore legale eIDAS dal telefono `[EE-SRC-32]`.
