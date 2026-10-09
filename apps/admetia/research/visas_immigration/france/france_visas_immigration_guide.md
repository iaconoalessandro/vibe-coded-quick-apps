---
country: "France"
country_it: "Francia"
iso_code: "FR"
last_verified: "2026-10-05"
review_by: "2027-03-31"
version: "1.0.0"
citizenships_covered:
  - "UE / SEE / Svizzera (inclusi cittadini italiani)"
  - "Extra-UE (inclusi Regno Unito, USA, Canada, Paesi terzi)"
---

# Guida Ufficiale Visti, Immigrazione e Soggiorno: Francia

> [!IMPORTANT]
> **UNICA FONTE DI VERITÀ DEL PROGETTO ADMETIA PER LA FRANCIA**  
> Questa guida costituisce l'unico riferimento autorizzato per le normative di visto, titolo di soggiorno, studio, stage, ricerca e lavoro in Francia. Ogni cifra, soglia reddituale, tassa o requisito formale è verificato su fonti primarie della Repubblica Francese ed è associato a un identificativo univoco `[FR-SRC-XX]` tracciabile in [`france_sources.md`](france_sources.md). I punti soggetti ad asimmetrie territoriali o monitoraggio continuo sono archiviati in [`france_open_questions.md`](france_open_questions.md).

---

## 1. Architettura Giuridica ed Enti Competenti

* **Quadro Legislativo Cardine:**
  * **CESEDA:** *Code de l'entrée et du séjour des étrangers et du droit d'asile* (consolidato con la Legge n° 2024-42 del 26 gennaio 2024 e le disposizioni tariffarie della Legge di Finanza 2026) `[FR-SRC-01]`, `[FR-SRC-04]`, `[FR-SRC-23]`.
  * **Code du travail:** Disciplina dell'autorizzazione al lavoro (*Autorisation de travail*), del salario minimo di crescita (SMIC) e dell'impiego di manodopera straniera `[FR-SRC-05]`, `[FR-SRC-12]`, `[FR-SRC-16]`.
  * **Code de l'éducation:** Regolamentazione dei corsi accademici e dei tirocini formativi curricolari (Legge n° 2014-788) `[FR-SRC-11]`, `[FR-SRC-13]`.
  * **Diritto dell'Unione Europea:** Direttiva 2004/38/CE (libera circolazione UE) `[FR-SRC-01]`; Direttiva (UE) 2016/801 (studenti, ricercatori e mobilità intra-UE) `[FR-SRC-18]`; Direttiva (UE) 2021/1883 (Carta Blu UE) `[FR-SRC-08]`.
* **Enti e Portali Competenti:**
  * **France-Visas:** Portale ufficiale unificato per la richiesta dei visti consolari (`france-visas.gouv.fr`) `[FR-SRC-10]`.
  * **ANEF:** *Administration Numérique pour les Étrangers en France* (`administration-etrangers-en-france.interieur.gouv.fr`), portale del Ministero dell'Interno per la convalida dei visti, autorizzazioni di lavoro e rilascio/rinnovo dei titoli di soggiorno `[FR-SRC-04]`.
  * **Campus France / Études en France (EEF):** Agenzia nazionale per la mobilità studentesca e procedura pre-consolare obbligatoria in oltre 70 Paesi `[FR-SRC-26]`.
  * **DREETS / DRIEETS:** Direzioni regionali dell'economia, del lavoro e dell'occupazione competenti per la validazione di stage e autorizzazioni `[FR-SRC-05]`, `[FR-SRC-13]`.
  * **Préfectures de département:** Autorità statali periferiche per la consegna dei titoli plastificati e la polizia amministrativa `[FR-SRC-24]`.
  * **Assurance Maladie (CPAM / Ameli):** Gestione della copertura sanitaria pubblica (PUMA) `[FR-SRC-02]`, `[FR-SRC-03]`.
  * **DGFiP (Direction Générale des Finances Publiques):** Gestione fiscale, rilascio del *Numéro fiscal* e riscossione delle imposte datoriali `[FR-SRC-16]`, `[FR-SRC-22]`.
  * **Action Logement:** Ente paritetico per la garanzia locativa pubblica gratuita `VISALE` `[FR-SRC-15]`.

---

## 2. Matrice dei Casi d'Uso: Cittadini UE vs Cittadini Extra-UE

### Caso 1: Lavoro Dipendente Ordinario (Salarié / Travailleur temporaire)

* **Cittadini UE / SEE / Svizzera (inclusi italiani):**
  * Piena libertà di circolazione e accesso immediato all'impiego subordinato a tempo indeterminato (CDI) o determinato (CDD) senza necessità di permesso di lavoro né titolo di soggiorno `[FR-SRC-01]`.
  * Registrazione obbligatoria da parte del datore tramite la DPAE (*Déclaration Préalable à l'Embauche*) all'URSSAF per l'assegnazione del codice fiscale/previdenziale.
* **Cittadini Extra-UE:**
  * **Tipologia di Titolo:** *Visa de Long Séjour valant Titre de Séjour (VLS-TS) mention "Salarié"* per contratti a tempo indeterminato (CDI) o *mention "Travailleur temporaire"* per contratti a termine (CDD) da 3 a 12 mesi `[FR-SRC-16]`.
  * **Condizione Preliminare Imputabile al Datore di Lavoro:**
    1. Obbligo di pubblicazione preventiva dell'offerta di lavoro su *France Travail* (ex Pôle Emploi) per **21 giorni di calendario** per esperire il test del mercato del lavoro (*opposabilité de la situation de l'emploi*). Esenti solo i profili rientranti nella lista ufficiale dei *métiers en tension* `[FR-SRC-16]`.
    2. Richiesta telematica dell'**Autorisation de travail** sul portale ANEF da parte del datore.
  * **Procedura del Lavoratore:** Ottenuta l'approvazione ANEF, richiesta del visto VLS-TS su *France-Visas*; all'arrivo in Francia, convalida telematica del titolo su ANEF entro 3 mesi con visita medica d'integrazione OFII `[FR-SRC-04]`, `[FR-SRC-16]`.
* **Costi e Tasse Amministrative:**
  * Visto d'ingresso Type D: **99,00 €** `[FR-SRC-10]`.
  * Tassa di rilascio/convalida titolo a carico del lavoratore (modifica Loi de finances 2026): **350,00 €** (300 € tassa + 50 € marca da bollo) `[FR-SRC-16]`.
  * **Tassa Datoriale OFII / DGFiP a carico esclusivo dell'azienda:**
    * Per CDI o CDD $\ge 12$ mesi: pari al **55% dello stipendio mensile lordo di base**, con tetto massimo legale fissato a 2,5 volte lo SMIC mensile = **4.667,55 €** `[FR-SRC-12]`, `[FR-SRC-16]`.
    * Per CDD tra 3 e 12 mesi: tariffa forfettaria da 74,00 € a 300,00 € parametrata al salario `[FR-SRC-16]`.
* **Tempi di Istruttoria:** 21 giorni per il test dell'impiego + da 3 a 8 settimane per l'autorizzazione ANEF + da 2 a 4 settimane per il visto consolare `[FR-SRC-16]`.
* **Errori Comuni & Trappole:** L'assunzione senza autorizzazione costituisce reato di lavoro nero (*travail dissimulé*, art. L. 8251-1 Code du travail) punibile penalmente e con sanzioni amministrative prefettizie; divieto di iniziare a lavorare prima della data esatta di convalida o inizio indicata sull'autorizzazione.

---

### Caso 2: Lavoro Altamente Qualificato (Carte de séjour pluriannuelle "Talent")

* **Cittadini UE / SEE / Svizzera:** Accesso libero a qualsiasi qualifica direttiva o specialistica.
* **Cittadini Extra-UE:**
  * **Vantaggi Sistemici del Titolo "Talent":**
    1. **Esenzione TOTALE dal test del mercato del lavoro** (nessuna pubblicazione di 21 giorni su France Travail) `[FR-SRC-07]`, `[FR-SRC-08]`.
    2. **Esenzione TOTALE della tassa datoriale OFII** per l'azienda assumente (risparmio fino a 4.667,55 €) `[FR-SRC-07]`, `[FR-SRC-16]`.
    3. Rilascio diretto di una **carta pluriennale fino a 4 anni** fin dalla prima emissione `[FR-SRC-07]`.
    4. Procedura semplificata **"Talent (famille)"**: il coniuge ottiene un titolo di pari durata abilitante immediatamente a qualsiasi impiego subordinato o autonomo `[FR-SRC-20]`.
  * **Profili e Soglie Economiche Ufficiali (2026):**
    * **Talent - Salarié qualifié:** Riservato a titolari di Master universitario francese, titolo CGE accreditato o equivalente estero. Richiede contratto di lavoro $>3$ mesi e stipendio annuo lordo minimo fissato per decreto ad almeno **39.582,00 €** `[FR-SRC-07]`.
    * **Talent - Salarié d'une entreprise innovante (French Tech):** Assunzione in Giovane Impresa Innovativa (JEI) con mansioni di ricerca e sviluppo; stipendio annuo lordo minimo pari ad almeno **39.582,00 €** `[FR-SRC-07]`.
    * **Talent - Carte bleue européenne (CBE):** Richiede diploma di istruzione superiore di almeno 3 anni o 5 anni di esperienza professionale comparabile; contratto di lavoro di almeno **6 mesi**; retribuzione annua lorda minima pari a 1,5 volte il salario medio di riferimento = **59.373,00 €** `[FR-SRC-08]`.
    * **Talent - Salarié en mission:** Distacco infragruppo internazionale; anzianità nel gruppo $\ge 3$ mesi; retribuzione annua lorda minima $\ge$ **39.582,00 €** `[FR-SRC-07]`.
* **Costi:** Visto consolare Type D: **99,00 €** `[FR-SRC-10]`. Rilascio carta di soggiorno pluriennale: **350,00 €** (300 € tassa di soggiorno + 50 € diritto di timbro) `[FR-SRC-07]`, `[FR-SRC-08]`.
* **Tempi:** Procedura preferenziale: visto in 2-3 settimane; carta pluriennale in 4-8 settimane via ANEF.

---

### Caso 3: Internship / Tirocinio Formativo (Stage)

* **Cittadini UE / SEE / Svizzera:** Diritto pieno a svolgere stage formativi in Francia sulla base della sola convenzione di tirocinio siglata tra l'ente formativo (anche italiano), il tirocinante e il soggetto ospitante `[FR-SRC-13]`.
* **Cittadini Extra-UE:**
  * **Se già regolarmente soggiornanti come studenti in Francia (VLS-TS Étudiant):** Lo stage curricolare previsto dal piano di studi si svolge liberamente e **non viene conteggiato nel tetto annuale di 964 ore di lavoro** consentito `[FR-SRC-05]`, `[FR-SRC-13]`.
  * **Se residenti all'estero:** Richiesta del **VLS-TS mention "Stagiaire"** (CESEDA art. L. 422-4). La *Convention de stage* tripartita deve essere obbligatoriamente trasmessa preventivamente alla DREETS competente per la formale vidimazione amministrativa prima del deposito della domanda di visto `[FR-SRC-13]`.
* **Regole Giuslavoristiche Inderogabili (Code de l'éducation):**
  1. **Durata Massima:** **6 mesi (pari a 924 ore)** per anno accademico presso lo stesso datore di lavoro `[FR-SRC-13]`.
  2. **Gratificazione Minima Obbligatoria:** Diventa vincolante non appena lo stage supera le **308 ore complessive** di presenza (ovvero oltre 2 mesi solari).
     * **Soglia Oraria 2026:** Fissata al 15% del Plafond Orario della Sécurité Sociale (30,00 €/ora) = **4,50 € / ora netti esenti da contributi** `[FR-SRC-13]`.
     * Su base standard di 35 ore settimanali (151,67 ore/mese), l'importo mensile corrisponde ad almeno **682,52 €** `[FR-SRC-13]`.
  3. **Divieto Assoluto di Stage Post-Laurea:** In Francia non esiste il tirocinio extracurriculare post-laurea slegato da un percorso formativo. Lo stage senza regolare convenzione emessa da un istituto di istruzione attivo è equiparato a **lavoro nero** (*travail dissimulé*), con conseguenze penali per l'azienda e revoca del titolo per lo straniero `[FR-SRC-13]`.
* **Costi:** Visto VLS-TS Stagiaire: **99,00 €** `[FR-SRC-10]`. Convalida telematica ANEF all'arrivo: **100,00 €** `[FR-SRC-04]`.

---

### Caso 4: Studio Universitario (Bachelor / Master)

* **Cittadini UE / SEE / Svizzera:** Iscrizione accademica diretta (portali *Parcoursup* per triennali o *Mon Master* per magistrali); nessun visto né titolo di soggiorno `[FR-SRC-01]`. Pagamento della contribuzione CVEC (105,00 €) `[FR-SRC-11]`. Copertura sanitaria garantita dalla TEAM/CEAM rilasciata dalla ASL italiana `[FR-SRC-02]`.
* **Cittadini Extra-UE:**
  * **Iter Pre-Consolare:** Nei 72 Paesi convenzionati, passaggio preliminare obbligatorio sulla piattaforma *Études en France* (Campus France), comprensivo di colloquio pedagogico di validazione `[FR-SRC-26]`.
  * **Requisito Finanziario (Proof of Funds 2026):**
    * **Riforma Décret n° 2026-526 del 22 giugno 2026 (in vigore dal 1° agosto 2026):** Ha abrogato la soglia storica di 615 € indicizzandola stabilmente al **47% dello SMIC mensile lordo** `[FR-SRC-09]`.
    * **Soglia Mensile Minima:** **877,50 € / mese** `[FR-SRC-09]`.
    * **Totale per 10 mesi (anno accademico):** **8.775,00 €** `[FR-SRC-09]`.
    * **Totale per 12 mesi (anno solare):** **10.530,00 €** `[FR-SRC-09]`.
    * *Modalità probatorie ammesse:* Conto bloccato (*Attestation de Virement Irrévocable* - AVI), borsa di studio governativa, o garante solvibile (redditi netti pari ad almeno 3-4 volte il sussidio) `[FR-SRC-09]`.
  * **Visto e Titolo:** Visto di lungo soggiorno valente titolo di soggiorno (*VLS-TS Étudiant*, durata 4-12 mesi). Obbligo di convalida online su ANEF entro 3 mesi dall'arrivo `[FR-SRC-04]`.
  * **Lavoro Accessorio Consentito:** Fino al 60% della durata annuale del lavoro = **964 ore l'anno** senza necessità di autorizzazione ministeriale `[FR-SRC-05]`.
  * **Contratti di Apprendistato (Alternance):** Ammessi per studenti extra-UE fin dal primo anno; una volta validati dall'OPCO (settore privato) o dalla Dreets, non sono computati nelle 964 ore e non richiedono autorizzazione al lavoro preventiva `[FR-SRC-05]`.
  * **Rinnovo Successivo:** Richiesta della *Carte de séjour pluriannuelle "Étudiant"* su ANEF (durata pari agli anni residui del ciclo di studio) da depositare tassativamente tra 4 e 2 mesi prima della scadenza `[FR-SRC-04]`, `[FR-SRC-25]`.
* **Riepilogo Costi Obbligatori:**
  * Frais de dossier Campus France: da **50,00 € a 150,00 €** (a seconda del Paese) `[FR-SRC-26]`.
  * Visto long séjour Étudiant: **50,00 €** (se via procedura EEF) / **99,00 €** (se procedura ordinaria non-EEF) `[FR-SRC-10]`.
  * CVEC (Contribution de vie étudiante et de campus) 2026/2027: **105,00 €** `[FR-SRC-11]`.
  * Convalida VLS-TS su ANEF: **100,00 €** `[FR-SRC-04]`.
  * Rinnovo pluriennale successivo su ANEF: **150,00 €** (100 € tassa + 50 € marca da bollo) `[FR-SRC-04]`.

---

### Caso 5: Tesi di Dottorato e Ricerca Scientifica

* **Cittadini UE / SEE / Svizzera:** Libero accesso a posizioni dottorali, borse di ricerca e contratti di lavoro scientifico.
* **Cittadini Extra-UE:**
  * **Dottorato con Contratto Retribuito (Contrat doctoral / Assegno di Ricerca):**
    * Inquadramento sotto lo statuto **Passeport Talent mention "Chercheur"** (CESEDA art. L. 421-14) `[FR-SRC-17]`.
    * **Presupposto Vincolante:** Sottoscrizione della **Convention d'Accueil** siglata con l'università o l'organismo di ricerca accreditato (CNRS, INRIA, INSERM, ecc.) `[FR-SRC-17]`.
    * **Retribuzione Minima Obbligatoria (in vigore dal 1° gennaio 2026):** Fissata per decreto ad almeno **2.300,00 € lordi / mese** `[FR-SRC-17]`.
    * **Vantaggi:** Nessuna richiesta di autorizzazione di lavoro ordinaria; rilascio diretto di carta pluriennale pari alla durata del contratto (fino a 4 anni); coniuge con carta *Talent (famille)* abilitata al lavoro `[FR-SRC-17]`, `[FR-SRC-20]`.
  * **Visiting PhD / Dottorato con Borsa Estera senza Contratto Francese:**
    * Inquadramento con *VLS-TS Étudiant* ordinario (obbligo di prova fondi di 877,50 €/mese) `[FR-SRC-04]`, `[FR-SRC-09]`.
* **Costi:** Visto Type D: **99,00 €** `[FR-SRC-10]`. Tassa carta di soggiorno Talent Chercheur: **350,00 €** `[FR-SRC-07]`, `[FR-SRC-17]`.

---

### Caso 6: Erasmus+ e Mobilità Accademica Intra-UE

* **Cittadini UE / SEE / Svizzera:** Libera mobilità accademica sulla base degli accordi interuniversitari; copertura medica tramite TEAM italiana `[FR-SRC-01]`, `[FR-SRC-02]`.
* **Cittadini Extra-UE Regolarmente Soggiornanti in Altro Stato UE (es. Italia):**
  * **Regime di Mobilità Direttiva (UE) 2016/801 (CESEDA art. L. 422-5):**
    * Se lo studente possiede un permesso di soggiorno per studio valido rilasciato da uno Stato UE vincolato dalla direttiva e partecipa a un programma di mobilità dell'Unione (es. Erasmus+ o convenzione tra due atenei), ha diritto di entrare e soggiornare in Francia per motivi di studio per un periodo **fino a 360 giorni SENZA VISTO FRANCESE** `[FR-SRC-18]`.
    * **Procedura Vincolante:** L'istituto di istruzione superiore francese ospitante deve trasmettere una notifica preventiva di mobilità alla Préfecture competente prima dell'ingresso dello studente. Si applica la regola del **silenzio-assenso dopo 30 giorni** `[FR-SRC-18]`.
    * **Oltre 360 giorni:** Obbligo di richiedere un visto nazionale VLS-TS Étudiant standard `[FR-SRC-04]`.

---

### Caso 7: Master e Dottorato — Uscita e Post-Studio (Carta RECE)

* **Cittadini UE / SEE / Svizzera:** Accesso incondizionato e permanente al mercato del lavoro.
* **Cittadini Extra-UE:**
  * **Titolo Dedicato:** *Carte de séjour temporaire mention "Recherche d'emploi ou création d'entreprise" (RECE)* (CESEDA art. L. 422-10 a L. 422-14) `[FR-SRC-06]`.
  * **Aventi Diritto:** Neolaureati che abbiano conseguito in Francia un Master (Grado di Master, Bac+5, EQF 7), un diploma di *Mastère Spécialisé* o *MSc* accreditato dalla *Conférence des grandes écoles* (CGE), una *Licence Professionnelle*, o un Dottorato `[FR-SRC-06]`.
  * **Durata:** **12 mesi non rinnovabile** `[FR-SRC-06]`.
  * **Esercizio dell'Attività Lavorativa durante la Ricerca:**
    * Durante i 12 mesi di validità, il titolare può lavorare **a tempo pieno e liberamente** in qualsiasi settore per assicurare il proprio sostentamento economico `[FR-SRC-06]`.
  * **Condizioni per il Cambio di Status Verso Lavoro (Changement de statut):**
    * Non appena il laureato conclude un contratto di lavoro (CDI o CDD di almeno 12 mesi) in relazione diretta con il percorso accademico svolto e con una retribuzione annua lorda pari ad almeno **1,5 volte lo SMIC** (pari a **2.800,53 € lordi / mese**, ovvero 33.606,36 €/anno), ottiene il cambio di status a titolo "Salarié" con **esenzione totale dal test del mercato del lavoro** (*inopposabilité de la situation de l'emploi*) `[FR-SRC-06]`, `[FR-SRC-12]`.
    * Se la retribuzione supera **39.582,00 € / anno**, può accedere direttamente alla carta pluriennale *Talent - salarié qualifié* `[FR-SRC-07]`.
  * **Diritto di Richiesta dall'Estero:** Coloro che lasciano la Francia al termine degli studi mantengono il diritto di richiedere la carta RECE presso il consolato francese del proprio Paese di residenza entro **4 anni** dal conseguimento del titolo `[FR-SRC-06]`.
* **Costi:** Tassa di rilascio carta RECE in Francia: **150,00 €** (100 € tassa + 50 € timbro) `[FR-SRC-04]`, `[FR-SRC-06]`. Domanda consolare dall'estero: visto D a 99,00 € + convalida VLS-TS a 100,00 € `[FR-SRC-04]`, `[FR-SRC-10]`.

---

### Caso 8: Working Holiday (Programme Vacances-Travail — PVT)

* **Cittadini UE:** Non applicabile (godono già della libertà di stabilimento e lavoro).
* **Cittadini Extra-UE:**
  * **Paesi Convenzionati (Accordi Bilaterali):** Riservato ai cittadini di 16 Paesi: Argentina, Australia, Brasile, Canada, Cile, Colombia, Corea del Sud, Ecuador, Giappone, Hong Kong, Messico, Nuova Zelanda, Perù, Taiwan, Uruguay `[FR-SRC-19]`.
  * **Limiti di Età:** Da 18 a 30 anni compiuti alla data di presentazione (elevato a **35 anni** per cittadini di Australia, Canada e Argentina) `[FR-SRC-19]`.
  * **Titolo Rilasciato:** *VLS-T (Visa de Long Séjour Temporaire) mention "Vacances-Travail"* di validità massima pari a **12 mesi non rinnovabile** (fino a 24 mesi per accordi specifici con il Canada) `[FR-SRC-19]`.
  * **Regime Lavorativo:** Consente di esercitare un'attività lavorativa a titolo accessorio senza dover richiedere autorizzazioni al lavoro e senza opposizione del mercato dell'occupazione `[FR-SRC-19]`.
  * **DIVIETO ASSOLUTO DI CONVERSIONE IN LOCO (Inconvertibilità):**  
    È formalmente vietato richiedere qualsiasi cambio di status (*changement de statut*) sul territorio francese; allo scadere del titolo, il titolare deve obbligatoriamente rimpatriare `[FR-SRC-19]`.
* **Costi:** Gratuito per accordo di reciprocità per cittadini di Canada, Brasile, Argentina e Colombia; **99,00 €** per gli altri Paesi `[FR-SRC-10]`, `[FR-SRC-19]`.

---

### Caso 9: Soggiorni Brevi (≤ 90 giorni) e Ricongiungimento Familiare

* **Soggiorni Brevi (≤ 90 giorni su 180):**
  * *Cittadini Esenti da Visto (Reg. UE 2018/1806, Allegato II - es. USA, UK, Canada, Giappone):* Ingresso libero con passaporto; registrazione obbligatoria ai varchi Schengen tramite il sistema biometrico **EES** (Entry/Exit System) ed autorizzazione di viaggio preventiva **ETIAS** `[FR-SRC-10]`. Divieto tassativo di esercitare lavoro subordinato.
  * *Cittadini Soggetti ad Obbligo di Visto:* Visto Schengen Uniforme di Tipo C; tariffa ordinaria pari a **90,00 €** (minori 6-12 anni: 45,00 €) `[FR-SRC-10]`.
* **Ricongiungimento Familiare — Due Regimi Opposti:**
  1. **Regime Ordinario (*Regroupement familial*, CESEDA art. L. 434-1 e segg.):**  
     * Riservato a residenti stranieri ordinari (titolari di carta Salarié, VLS-TS studente, ecc.) `[FR-SRC-20]`.
     * Richiede **almeno 18 mesi di residenza legale ininterrotta** del richiedente in Francia `[FR-SRC-20]`.
     * Requisito economico stabile parametrato allo SMIC netto per 12 mesi; perizia tecnica di idoneità alloggiativa da parte del Comune e dell'OFII `[FR-SRC-20]`.
     * Durata della procedura: da **12 a 24 mesi**. Il familiare ammesso non può lavorare finché non ottiene il titolo definitivo `[FR-SRC-20]`.
  2. **Regime Agevolato (*Famille accompagnante - Carte Talent*, CESEDA art. L. 421-22):**  
     * Si applica simultaneamente ai familiari di titolari di carta "Talent" (Salarié qualifié, Carte bleue européenne, Chercheur, ecc.) `[FR-SRC-07]`, `[FR-SRC-20]`.
     * **Nessun periodo di attesa di 18 mesi**: arrivo congiunto o immediato `[FR-SRC-20]`.
     * Rilascio della carta di soggiorno pluriennale **"Talent (famille)"** di pari durata del titolare principale, abilitante **immediatamente al pieno esercizio di qualsiasi attività lavorativa dipendente o autonoma** senza test del mercato né autorizzazioni datoriali `[FR-SRC-20]`.

---

## 3. Riepilogo Costi Amministrativi Obbligatori per Tipologia (Tariffe 2026)

| Tipologia di Percorso / Titolo | Visto d'Ingresso Consolare | Convalida ANEF / Tassa Titolo | Diritto di Timbro Fiscale | Totale Titolo Lavoratore | Oneri Datoriali OFII (Azienda) | Prova Mezzi di Sussistenza |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: |
| **Studio (VLS-TS Étudiant - via EEF)** | 50,00 € | 100,00 € | Inclusi | **150,00 €** *(+105 € CVEC)* | — | **877,50 € / mese** (8.775 € su 10m) `[FR-SRC-09]` |
| **Studio (VLS-TS Étudiant - Non-EEF)** | 99,00 € | 100,00 € | Inclusi | **199,00 €** *(+105 € CVEC)* | — | **877,50 € / mese** (8.775 € su 10m) `[FR-SRC-09]` |
| **Rinnovo Carta Pluriennale Studente** | — | 100,00 € | 50,00 € | **150,00 €** | — | **877,50 € / mese** `[FR-SRC-09]` |
| **Stage (VLS-TS Stagiaire)** | 99,00 € | 100,00 € | Inclusi | **199,00 €** | — | Gratifica min. 4,50 €/h (>308h) `[FR-SRC-13]` |
| **Post-Studio (Carta RECE)** | — *(99 € se estero)* | 100,00 € | 50,00 € | **150,00 €** | — | Risorse autosufficienti `[FR-SRC-06]` |
| **Lavoro Dipendente (Salarié ordinario CDI)**| 99,00 € | 300,00 € | 50,00 € | **449,00 €** | **55% stipendio mensile** (max 4.667,55 €) `[FR-SRC-16]` | Contratto di lavoro $\ge$ SMIC |
| **Lavoro Qualificato (Talent - Salarié qualifié)**| 99,00 € | 300,00 € | 50,00 € | **449,00 €** | **0,00 € (Esente)** `[FR-SRC-07]` | Stipendio $\ge$ **39.582,00 € / anno** `[FR-SRC-07]` |
| **Lavoro Qualificato (Talent - Carte Bleue UE)**| 99,00 € | 300,00 € | 50,00 € | **449,00 €** | **0,00 € (Esente)** `[FR-SRC-08]` | Stipendio $\ge$ **59.373,00 € / anno** `[FR-SRC-08]` |
| **Ricerca Scientifica (Talent - Chercheur)**| 99,00 € | 300,00 € | 50,00 € | **449,00 €** | **0,00 € (Esente)** `[FR-SRC-17]` | Contratto $\ge$ **2.300,00 € / mese** `[FR-SRC-17]` |
| **Working Holiday (PVT)** | 0 € / 99,00 € | — | — | **0 € / 99,00 €** | — | Risorse rimpatrio + primo soggiorno `[FR-SRC-19]` |
| **Soggiorno Breve Schengen (Visto C)** | 90,00 € | — | — | **90,00 €** | — | Risorse giornaliere secondo alloggio |

---

## 4. Procedure Accessorie Obbligatorie (Checklist di Insediamento)

### 4.1 Numéro Fiscal (Codice Fiscale Francese) e Dichiarazione dei Redditi
* **Scopo:** Obbligatorio per la riscossione del *Prélèvement à la source* (imposta alla fonte), per la registrazione dell'alloggio, e per ottenere l'**Avis de Situation Déclarative à l'Impôt sur le Revenu (ASDIR)** `[FR-SRC-22]`.
* **Procedura di Primo Assegnamento:** Chi non ha mai dichiarato redditi in Francia deve compilare il **Modulo Cerfa 2043** e depositarlo presso il *Centre des Finances Publiques* (SIP) competente per domicilio, allegando passaporto e giustificativo di alloggio `[FR-SRC-22]`.
* **Obbligo Fiscale Fondamentale:** Anche gli studenti a reddito zero o con borse esenti devono **obbligatoriamente presentare la dichiarazione dei redditi annuale in primavera**. La mancata dichiarazione priva dell'Avis d'imposition, provocando la **revoca immediata dei sussidi per l'alloggio (APL) da parte della CAF** (perdita secca da 150 a 300 € al mese) `[FR-SRC-22]`.

### 4.2 Sanità: Numéro de Sécurité Sociale (NIR) e Carte Vitale
* **Studenti Extra-UE:** Registrazione obbligatoria e gratuita sul portale `etudiant-etranger.ameli.fr` `[FR-SRC-03]`. Viene generato un numero provvisorio (NIA, che inizia con 7 o 8) e un'attestazione cartacea provvisoria. L'INSEE emette successivamente il numero definitivo (NIR, che inizia con 1 o 2) dopo verifica dell'atto di nascita con traduzione giurata, consentendo di richiedere la **Carte Vitale** (tempo medio: 6-12 mesi) `[FR-SRC-03]`. Nelle more della Carte Vitale, i rimborsi sanitari si ottengono inviando alla CPAM la *Feuille de soins* cartacea compilata dal medico `[FR-SRC-03]`.
* **Studenti UE (Italiani):** Coperti direttamente dalla TEAM/CEAM dell'ASL italiana `[FR-SRC-02]`.  
  *Attenzione:* La Sécurité Sociale rimborsa solo il **70% della tariffa convenzionata di base** per i medici di *Secteur 1* (30,00 € la visita) con una partecipazione forfettaria di 2,00 € a carico; non rimborsa i *dépassements d'honoraires* dei medici di *Secteur 2*. È vivamente consigliata una **Mutuelle santé complementare** `[FR-SRC-02]`.

### 4.3 Conto Bancario e Garanzia del "Droit au Compte" (Banque de France)
* **Catch-22 Bancario:** Le banche tradizionali francesi pretendono un contratto di locazione o fattura di utenza intestata (*justificatif de domicile*) per aprire il conto, ma i proprietari pretendono un conto francese per affittare `[FR-SRC-21]`.
* **Soluzioni Pratiche:** Apertura immediata di conti con IBAN francese tramite neobanche (Revolut con succursale FR, Compte Nickel presso tabaccai abilitati) `[FR-SRC-21]`.
* **Droit au Compte Istituzionale:** In caso di rifiuto scritto (*attestation de refus*) da parte di una banca ordinaria, l'art. L. 312-1 del Code monétaire et financier consente di adire la **Banque de France**, che designa d'ufficio entro **1 giorno lavorativo** un istituto obbligato ad aprire un conto con i servizi bancari di base gratuiti entro **3 giorni lavorativi** `[FR-SRC-21]`.

### 4.4 Alloggio, Garanzia VISALE e Disciplina dei Depositi Cauzionali
* **Garanzia VISALE (Action Logement):** Fideiussione statale gratuita al 100% che garantisce al proprietario fino a 36 mensilità di canone e oneri non pagati `[FR-SRC-15]`.
  * Spetta a tutti i giovani tra 18 e 30 anni (studenti extra-UE, ricercatori, apprendisti inclusi) muniti di visto di lungo soggiorno, e a dipendenti over 30 in mobilità `[FR-SRC-15]`.
  * Accettata nel 100% dei casi nelle residenze studentesche universitarie (CROUS) `[FR-SRC-15]`.
* **Limiti Legali al Deposito Cauzionale (Loi 89-462 art. 22):**
  * Per alloggi non ammobiliati (*vide*): massimo **1 mese di canone netto** (oneri esclusi) `[FR-SRC-14]`.
  * Per alloggi ammobiliati (*meublé*): massimo **2 mesi di canone netto** `[FR-SRC-14]`.
  * È formalmente vietato al proprietario pretendere versamenti di denaro prima della firma del contratto (*bail*) `[FR-SRC-14]`.

---

## 5. Statuto Giuridico durante l'Attesa: Attestation ANEF e Regime dei Viaggi

* **Tipologia di Ricevute ANEF e Diritti Associati:**
  1. **Attestation de confirmation de dépôt:** Ricevuta automatica rilasciata al momento dell'invio telematico. **NON costituisce titolo di soggiorno** e non autorizza il lavoro né i viaggi transfrontalieri `[FR-SRC-04]`.
  2. **Attestation de prolongation d'instruction (ADP):** Rilasciata quando la domanda è formalmente istruita dalla Préfecture. Mantiene la regolarità del soggiorno e i diritti al lavoro associati al titolo precedente `[FR-SRC-04]`, `[FR-SRC-24]`.
  3. **Attestation de décision favorable (ADF):** Rilasciata ad approvazione conclusa in attesa della fabbricazione materiale della carta di soggiorno plastificata `[FR-SRC-04]`.
* **Regime Vincolante dei Viaggi all'Estero (Frontiere Schengen):**
  * **Prima Richiesta di Titolo di Soggiorno:** Un'ADP o ricevuta di prima richiesta **NON consente assolutamente di uscire e rientrare in Francia** (divieto di attraversamento dei valichi di frontiera Schengen senza un apposito *visa de retour* consolare) `[FR-SRC-04]`.
  * **Rinnovo del Titolo di Soggiorno:** L'ADP di rinnovo, accompagnata dal titolo di soggiorno plastificato scaduto e dal passaporto in corso di validità, autorizza formalmente il soggiorno e il transito nello Spazio Schengen `[FR-SRC-04]`.
  * **AVVERTENZA CRITICA SUI VOLI INTERNAZIONALI:** Nei viaggi verso Paesi extra-Schengen o con scali aerei intermedi (es. Francoforte, Monaco, Zurigo), i vettori aerei e le polizie estere applicano rigidamente i database IATA TIMATIC e rifiutano frequentemente l'imbarco (*Boarding Denial*) a chi esibisce una semplice attestazione cartacea PDF priva di timbro a umido o ologramma. Si raccomanda tassativamente di **evitare viaggi fuori dall'area Schengen o voli con scalo aeroportuale intermedio prima di aver ritirato la carta di soggiorno definitiva plastificata** `[FR-SRC-04]`, `[FR-SRC-24]`.

---

## 6. Red Flag e Trappole Ricorrenti (integrazione 06/10/2026)

> Sezione aggiunta per recepire le critiche del Red Team del Council (falle F-01, F-02, F-04, F-10, F-11) e le correzioni dell'audit del 05/10/2026. I punti basati su prassi (non su testo di legge) sono indicati come tali.

### 6.1 Cittadini UE/SEE: il soggiorno oltre 3 mesi non è incondizionato
- Dopo i primi 3 mesi il diritto di soggiorno dell'UE dipende dall'art. L. 233-1 CESEDA: attività lavorativa, **oppure** iscrizione a un corso con assicurazione malattia e risorse sufficienti, **oppure** risorse sufficienti e assicurazione malattia per gli inattivi `[FR-SRC-01]`.
- Se la condizione viene meno (es. fine degli studi senza lavoro) e si ricorre a prestazioni sociali, la Préfecture può contestare un onere irragionevole per il sistema di assistenza sociale; il rischio è un'**OQTF** (obbligo di lasciare il territorio). Conservare le prove della categoria in cui si rientra `[FR-SRC-01]`.

### 6.2 La TEAM/CEAM basta solo allo studente che non lavora
- Lo studente UE puro, senza attività, resta coperto dal sistema italiano con TEAM/CEAM (cure necessarie, rimborso parziale) `[FR-SRC-02]`.
- Chi lavora in Francia (job studentesco, CDD/CDI, alternance, stage gratificato) è soggetto alla sicurezza sociale francese (Reg. CE 883/2004, principio della *lex loci laboris*): il datore deve effettuare la DPAE/DSN, che richiede un **NIR**; senza di esso mancano la gestione di infortuni e malattie, la Carte Vitale e la mutuelle `[FR-SRC-02]`, `[FR-SRC-03]`. Quindi **qualsiasi contratto di lavoro o stage retribuito impone l'immatricolazione alla CPAM**.
- Nota: il § 4.2 sopra, che indica per gli studenti UE la sola copertura TEAM, va letto con questa eccezione.

### 6.3 Esenti da visto (USA, UK, Canada, Giappone...): nessuna conversione in loco
- L'ingresso senza visto per 90 giorni **non** permette di richiedere in Préfecture un titolo "étudiant" o "salarié": serve il **visto di lungo soggiorno (VLS-TS, tipo D)** ottenuto all'estero **prima** dell'ingresso `[FR-SRC-04]`.
- Se i 90 giorni scadono durante i tentativi di regolarizzazione si diventa irregolari, con rischio di OQTF. Il visto D va richiesto dal Paese di residenza (Campus France / France-Visas per gli studenti) `[FR-SRC-26]`.

### 6.4 Scadenze con penale
- **Convalida del VLS-TS entro 3 mesi dall'arrivo**: tassa di 100 € `[FR-SRC-04]`.
- **Rinnovo del titolo**: da presentare **al più presto 4 mesi e al più tardi 2 mesi prima** della scadenza; fuori da questa finestra si paga una **penale di regolarizzazione di 180 €** (salvo forza maggiore) `[FR-SRC-25]`.
- **RECE**: la domanda per la carta "Recherche d'emploi ou création d'entreprise" va presentata **prima della scadenza del titolo di studente**; non attendere la scadenza (vedi Caso 7) `[FR-SRC-06]`.

### 6.5 Documenti: traduzioni, legalizzazioni, atti plurilingue
- Per i cittadini UE gli atti di stato civile (es. nascita) emessi da uno Stato membro sono esenti da apostille/legalizzazione se accompagnati dal **modulo standard plurilingue** del Reg. (UE) 2016/1191; richiederlo al comune italiano prima di partire.
- Per gli extra-UE servono apostille dell'Aia (o legalizzazione consolare) **nel Paese di emissione**, prima della partenza.
- **Immatricolazione CPAM (NIR):** l'atto di nascita in lingua originale va presentato con traduzione eseguita da un *traducteur assermenté* (presso una Cour d'appel, un consolato/ambasciata di Francia o un interprete giurato in Francia) **tranne** quando è redatto in una delle lingue accettate senza traduzione, tra cui **l'italiano** (anche inglese, tedesco, spagnolo, portoghese, olandese, polacco, rumeno, svedese, ecc.), o è un estratto plurilingue (Convenzione di Vienna CIEC / Reg. UE 2016/1191). Gli studenti italiani non devono quindi tradurre l'atto di nascita per la CPAM; restano da legalizzare/tradurre i documenti in lingue non accettate `[FR-SRC-03]` *(verificato il 06/10/2026 su sintesi di risposte ufficiali Assurance Maladie e guide universitarie; vedi OPEN-FR-DOC)*.

### 6.6 Truffe e prassi illegali
- **Appuntamenti in Préfecture venduti da bot/intermediari** (Telegram, WhatsApp, marketplace): pagarli è rischioso e le prenotazioni possono essere annullate. In caso di impossibilità documentata di ottenere un appuntamento è usato il ricorso al giudice amministrativo (*référé mesure utile*, art. L. 521-3 Code de justice administrative) per far fissare una convocazione `[FR-SRC-24]`.
- **Truffe sugli alloggi** (caparre via bonifico istantaneo, ricariche prepagate o Western Union prima della visita): non pagare nulla prima di visitare l'immobile e firmare il *bail*; usare la garanzia gratuita VISALE `[FR-SRC-15]`.
- **AIRE (cittadini italiani):** chi trasferisce la residenza all'estero per oltre 12 mesi deve iscriversi all'AIRE; verificare anche gli obblighi di monitoraggio fiscale (Quadro RW) per i conti aperti in Francia.

