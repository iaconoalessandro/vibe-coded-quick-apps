---
country: "Malaysia"
country_it: "Malaysia"
iso_code: "MY"
last_verified: "2026-10-05"
review_by: "2027-03-31"
version: "1.0.0"
citizenships_covered:
  - "UE / SEE / Svizzera (inclusa Italia)"
  - "Extra-UE (incl. UK, USA, Commonwealth, Paesi terzi)"
---

# Guida Ufficiale Visti e Immigrazione: Malaysia

> **Regola di integrità:** Questo documento costituisce l'**UNICA fonte di verità** del progetto Admetia per la Malaysia. Ogni dato numerico, soglia di stipendio, tariffa consolare, termine temporale o requisito amministrativo reca un riferimento univoco `[ID-fonte]` consultabile nel file [`malaysia_sources.md`](malaysia_sources.md). Le questioni aperte, le divergenze prasseologiche tra sportelli e i requisiti non verificati su fonti primarie sono registrati in [`malaysia_open_questions.md`](malaysia_open_questions.md).

---

## 1. Architettura Giuridica ed Enti Competenti

L'ordinamento migratorio malese è a struttura federale ma presenta una peculiarità costituzionale unica: la federazione è divisa in tre giurisdizioni migratorie autonome (Malaysia Peninsulare, Stato di Sabah e Stato di Sarawak). Un permesso rilasciato a Kuala Lumpur non autorizza il lavoro o la residenza nel Borneo malese `[MYS-SRC-01]`, `[MYS-SRC-28]`.

### Quadro Normativo Cardine
- **Immigration Act 1959/63 (Act 155)** e **Immigration Regulations 1963**: Testo unico federale su ingressi, visti, titoli di soggiorno, espulsioni e sanzioni penali `[MYS-SRC-01]`.
- **Employment Act 1955 (Act 265)** con emendamenti 2022/2023 & **Section 60K**: Disciplina generale del lavoro e autorizzazione preventiva obbligatoria del Dipartimento del Lavoro per l'assunzione di lavoratori stranieri `[MYS-SRC-02]`.
- **Income Tax Act 1967 (Act 53)**: Disciplina della residenza fiscale (Sezione 7) e del trattamento delle borse di studio (Schedule 6 Para 24) `[MYS-SRC-18]`, `[MYS-SRC-19]`.
- **EPF (Amendment) Act 2025**: Riforma che ha reso obbligatoria la previdenza pensionistica anche per i lavoratori non cittadini a partire dal 1° ottobre 2025 `[MYS-SRC-21]`.
- **Dangerous Drugs Act 1952 (Act 234)** & **Penal Code (Act 574)**: Normativa penale ad estremo rigore su stupefacenti e reati contro la morale `[MYS-SRC-26]`, `[MYS-SRC-27]`.

### Mappa degli Enti e Portali Ufficiali
- **Ministero dell'Interno (*Kementerian Dalam Negeri - KDN*) & Jabatan Imigresen Malaysia (JIM)**: Autorità centrale competente per il controllo delle frontiere, visti e titoli di soggiorno (`https://www.imi.gov.my`) `[MYS-SRC-01]`, `[MYS-SRC-07]`.
- **Expatriate Services Division (ESD) & MYXpats Centre**: Divisione congiunta JIM e TalentCorp competente per la gestione degli Employment Pass e dei visti per espatriati qualificati (`https://esd.imi.gov.my`) `[MYS-SRC-03]`, `[MYS-SRC-05]`.
- **Education Malaysia Global Services (EMGS)**: Agenzia governativa del Ministero dell'Istruzione Superiore (KPT) che centralizza le domande di visto per studenti internazionali (`https://visa.educationmalaysia.gov.my`) `[MYS-SRC-11]`.
- **Malaysia Digital Economy Corporation (MDEC)**: Agenzia governativa incaricata dei visti tecnologici e del programma per nomadi digitali DE Rantau (`https://mdec.my/derantau`) `[MYS-SRC-15]`.
- **Talent Corporation Malaysia (TalentCorp)**: Agenzia per l'attrazione dei talenti internazionali, emittente del *Residence Pass-Talent (RP-T)* (`https://rpt.talentcorp.com.my`) `[MYS-SRC-14]`.
- **Lembaga Hasil Dalam Negeri (LHDN / Inland Revenue Board)**: Autorità tributaria federale, gestione del codice fiscale (TIN) e dell'imposta di bollo locazioni su *MyTax* (`https://mytax.hasil.gov.my`) `[MYS-SRC-18]`, `[MYS-SRC-20]`.
- **Bank Negara Malaysia (BNM)**: Banca Centrale della Malaysia, regolatore della conformità bancaria AML e tassi di cambio (`https://www.bnm.gov.my`) `[MYS-SRC-16]`, `[MYS-SRC-17]`.

---

## 2. Matrice dei Casi d'Uso (Dettaglio Operativo UE vs Extra-UE)

---

### Caso 1: Lavoro Dipendente Ordinario / Non-Skilled (PLKS)
* **Titolo Legale:** *Pas Lawatan Kerja Sementara* (PLKS - Temporary Employment Visit Pass) `[MYS-SRC-01]`.
* **Inquadramento Giuridico:** Riservato a manodopera non specializzata nei settori: Costruzioni, Manifattura, Piantagioni, Agricoltura, Servizi subalterni e Lavoratori domestici. Soggetto al pagamento di una tassa di reclutamento annuale (*Foreign Worker Levy*) a carico aziendale `[MYS-SRC-01]`.
* **Elenco Paesi Fonte Ammessi:** Concesso **esclusivamente a cittadini di 15 Paesi asiatici approvati**: Indonesia, Bangladesh, Nepal, Myanmar, India, Filippine (solo domestiche), Vietnam, Pakistan, Sri Lanka, Thailandia, Cambogia, Laos, Kazakistan, Uzbekistan e Turkmenistan `[MYS-SRC-01]`.
* **Cittadini Italiani ed Europei:** **INACCESSIBILE PER LEGGE.** I cittadini italiani, dell'Unione Europea o di altri paesi occidentali non possono essere assunti con PLKS né svolgere mansioni manuali/operative.
* **Sanzioni per Lavoro Clandestino:** Lavorare senza un Employment Pass valido costituisce reato ai sensi dell'art. 39(b) delle *Immigration Regulations 1963* (fino a 6 mesi di carcere) e dell'art. 6(1)(c) dell'*Immigration Act 1959/63* (fino a 5 anni di reclusione e **fino a 6 frustate giudiziarie**), con detenzione nel *Depot Imigresen*, deportazione coatta e blacklist permanente nel sistema BLI `[MYS-SRC-01]`. Sanzioni pesanti per il datore ex Sez. 55B (multe da RM 10.000 a 50.000 per lavoratore e reclusione) `[MYS-SRC-01]`.

---

### Caso 2: Lavoro Altamente Qualificato (Employment Pass, PVP, RP-T, DE Rantau)

#### A. Employment Pass (EP) — Le Nuove Soglie in Vigore dal 1° Giugno 2026
Il regime dell'Employment Pass è stato profondamente riformato a partire dal **1° giugno 2026** (delibera di Gabinetto del 17/10/2025, Ann. ESD 266 del 15/01/2026) `[MYS-SRC-03]`:

| Categoria EP | Stipendio Base Minimo Mensile | Controvalore EUR Mensile | Durata Massima Pass | Ricongiungimento Familiare (DP) | Requisiti Chiave & Vincoli |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Categoria I** | $\ge$ **RM 20.000** | $\ge$ **€4.364,24** | Fino a **10 anni** (contratti pluriennali) | **Sì:** Coniuge e figli <21 anni (DP); genitori su LTSVP | Ruoli C-level, Managing Director, specialisti apicali. No succession plan. Coniuge può lavorare con approval letter `[MYS-SRC-03]`. |
| **Categoria II** | **RM 10.000 – RM 19.999** | **€2.182,12 – €4.364,02** | Fino a **10 anni** (in blocchi fino a 2 anni) | **Sì:** Coniuge e figli <21 anni (DP); genitori su LTSVP | Ruoli manageriali e tecnici avanzati. Obbligo di Succession Plan locale dal 01/01/2027 `[MYS-SRC-03]`, `[MYS-SRC-04]`. |
| **Categoria III (Generale)** | **RM 5.000 – RM 9.999** | **€1.091,06 – €2.181,90** | Fino a **5 anni** (rinnovi annuali; prima max 2 anni) | **Sì:** **Concesso dal 01/06/2026** (prima escluso) | Ruoli junior e specialisti tecnici. Obbligo di Succession Plan locale dal 01/01/2027 `[MYS-SRC-03]`, `[MYS-SRC-04]`. |
| **Categoria III (Manifatturiero)** | **RM 7.000 – RM 9.999** | **€1.527,48 – €2.181,90** | Fino a **5 anni** | **Sì:** Concesso dal 01/06/2026 | Riservato a servizi a supporto della manifattura `[MYS-SRC-03]`. |

* **Autorizzazione Preventiva Section 60K (Employment Act 1955):** Il datore di lavoro deve tassativamente ottenere il nulla osta del Dipartimento del Lavoro (JTKSM) tramite il portale **ePPAx** prima di poter inoltrare la richiesta di EP a ESD o MDEC `[MYS-SRC-02]`.
* **Capitale Sociale Minimo Versato (*Paid-Up Capital*) dell'Azienda Sponsor:**
  - Azienda 100% di proprietà malese: **RM 250.000** (€54.553) `[MYS-SRC-06]`.
  - Joint Venture (quota estera $\ge$ 30%): **RM 350.000** (€76.374) `[MYS-SRC-06]`.
  - **Azienda 100% a capitale estero (Regola Generale):** **RM 500.000** (€109.106) `[MYS-SRC-06]`.
  - **Aziende con capitale estero $\ge$ 51% nel Commercio / Distribuzione (WRT):** **RM 1.000.000** (€218.212) con licenza preventiva KPDN `[MYS-SRC-06]`.

#### B. Professional Visit Pass (PVP - Pas Lawatan Ikhtisas)
- **Destinatari:** Consulenti internazionali, tecnici di installazione/collaudo, revisori o formatori distaccati in Malaysia per conto di un'azienda estera `[MYS-SRC-01]`.
- **Condizione essenziale:** Il lavoratore **DEVE rimanere a libro paga della società estera**. È vietata qualsiasi retribuzione diretta da entità malesi `[MYS-SRC-01]`.
- **Durata:** Fino a un massimo di **12 mesi complessivi** (non estendibile oltre) `[MYS-SRC-01]`.
- **Familiari:** Il PVP **NON dà diritto** al Dependant Pass per coniuge o figli `[MYS-SRC-01]`.

#### C. Residence Pass - Talent (RP-T)
- **Caratteristiche:** Titolo decennale (**10 anni rinnovabile**) auto-sponsorizzato (*talent-based*) gestito da TalentCorp. Slegato dal singolo datore di lavoro: consente di cambiare impiego senza rifare il visto o avviare attività professionali `[MYS-SRC-14]`.
- **Requisiti tassativi:** Almeno 3 anni continuativi di lavoro in Malaysia con Employment Pass I; salario base mensile $\ge$ **RM 15.000** (€3.273); codice fiscale LHDN attivo con almeno 2 anni di imposte regolarmente versate; laurea e 5 anni di esperienza qualificata `[MYS-SRC-14]`.
- **Vantaggio familiare:** Il coniuge può lavorare senza richiedere un pass di lavoro autonomo `[MYS-SRC-14]`.

#### D. DE Rantau Nomad Pass (MDEC)
- **Caratteristiche:** Visto per nomadi digitali, lavoratori da remoto e freelance con committenti esteri promosso da MDEC `[MYS-SRC-15]`.
- **Soglie di reddito:** Minimo **USD 24.000/anno** (~RM 98.100 / €21.407) per professionisti tech/digitali; minimo **USD 60.000/anno** (~RM 245.250 / €53.516) per figure non-tech (consulenza, finanza, legal, marketing) `[MYS-SRC-15]`.
- **Durata:** Da 3 a 12 mesi, rinnovabile una volta per ulteriori 12 mesi (massimo cumulativo 24 mesi) `[MYS-SRC-15]`.
- **Divieto tassativo:** Vietato operare con clienti o aziende del mercato domestico malese `[MYS-SRC-15]`.

---

### Caso 3: Internship / Tirocinio Professionale

La legge malese distingue rigorosamente in base allo status dell'ateneo di provenienza dello stagista:

#### A. Tirocinio per Studenti Iscritti presso Università in Malaysia
Gli studenti regolarmente iscritti presso atenei malesi (pubblici o privati) svolgono lo stage curriculare previsto dal corso con il proprio **Student Pass**. L'ateneo emette una lettera di autorizzazione formale (*Training Endorsement / NOC*) indirizzata all'azienda. Non occorre un visto autonomo `[MYS-SRC-11]`.

#### B. Tirocinio per Studenti di Università Estere (es. Università Italiane o Europee)
Se uno studente di un ateneo italiano (Bocconi, PoliMi, Bologna, ecc.) deve svolgere uno stage in Malaysia:
- **Divieto assoluto di Social Visit Pass:** È **illegale** entrare come turista per svolgere uno stage, anche se non retribuito `[MYS-SRC-01]`, `[MYS-SRC-24]`.
- **Canale Unico — Professional Visit Pass (PVP - Training / Internship):**
  - L'azienda ospitante deve essere registrata su ESD o MDEC e fare richiesta di PVP per motivi di stage/formazione `[MYS-SRC-05]`.
  - Durata tipica: da 3 a 6 mesi (tetto massimo 12 mesi) `[MYS-SRC-01]`.
  - Trattamento economico: l'azienda può erogare esclusivamente un'indennità forfettaria per spese di soggiorno (*allowance/stipend*), non uno stipendio formale `[MYS-SRC-01]`.
  - Non consente di portare familiari a carico `[MYS-SRC-01]`.

---

### Caso 4: Studio Universitario (Bachelor, Master, Corsi Accademici)

Tutti i visti studio per istituti accreditati (*Institusi Pendidikan Tinggi - IPT*) sono centralizzati dall'agenzia statale **Education Malaysia Global Services (EMGS)** `[MYS-SRC-11]`.

#### Lifecycle Operativo End-to-End
1. **Ammissione & Domanda EMGS:** L'ateneo rilascia l'offerta incondizionata e avvia la pratica sul portale EMGS caricando passaporto, titoli di studio tradotti in inglese, foto e questionario medico preliminare `[MYS-SRC-11]`.
2. **Emissione eVAL:** Il Dipartimento Immigrazione (JIM) approva la richiesta ed emette la *Electronic Visa Approval Letter* (eVAL), scaricabile online `[MYS-SRC-11]`.
3. **Single Entry Visa (eVISA/SEV):** I candidati non esenti da visto devono richiedere l'eVISA prima della partenza. Gli studenti italiani, pur visa-free per turismo, devono viaggiare con la eVAL stampata e farsi registrare al desk accoglienza studenti internazionali all'arrivo a KLIA per ottenere il timbro speciale d'ingresso per studio (e non un visto turistico generico) `[MYS-SRC-09]`, `[MYS-SRC-11]`.
4. **Post-Arrival Medical Screening:** **Entro 7 giorni lavorativi dall'arrivo**, lo studente deve recarsi presso una clinica accreditata EMGS per sottoporsi a visita medica completa: RX torace (screening TBC), sierologia (HIV, epatiti) e **test tossicologico delle urine (cannabis, oppiacei, anfetamine)** `[MYS-SRC-11]`. *In caso di positività o fallimento dei test clinici, lo Student Pass viene revocato con espulsione immediata e rischio penale per stupefacenti ex Sez. 15(1)(a) DDA 1952* `[MYS-SRC-26]`.
5. **Endorsement & i-Kad:** Consegna del passaporto all'università; JIM appone lo sticker dello *Student Pass* (durata 1 anno) ed emette la carta d'identità biometrica per stranieri residenti (**i-Kad**) `[MYS-SRC-11]`.

#### Restrizioni al Lavoro Durante lo Studio
- **Durante i semestri di lezione:** **DIVIETO TOTALE DI LAVORO** `[MYS-SRC-12]`.
- **Durante le pause semestrali o vacanze > 7 giorni:** Consentito per un massimo di **20 ore a settimana** `[MYS-SRC-12]`.
- **Settori ammessi (Tassativamente 4):** Ristoranti, distributori di benzina, minimarket, alberghi `[MYS-SRC-12]`.
- **Mansioni vietate per legge:** È **vietato tassativamente lavorare come cassiere (*cashier*)**, cantante, massaggiatore, musicista o PR/GRO `[MYS-SRC-12]`. Lavoro autonomo o freelance non consentito.
- **Rinnovo annuale:** Frequenza minima all'**80%** e media cumulativa (**CGPA**) minima di **2.00**; in caso contrario, il pass viene revocato `[MYS-SRC-11]`.

---

### Caso 5: Tesi all'Estero e Ricerca Visiting
- **Visiting Research Student:** Gli studenti di atenei italiani che si recano in Malaysia per svolgere ricerche di tesi o mobilità di laboratorio presso università malesi devono richiedere uno **Student Mobility Pass (Research)** tramite EMGS (per durate da 1 a 12 mesi) `[MYS-SRC-11]`.
- **Ricercatori presso Istituti o Aziende:** Se la ricerca si svolge presso enti governativi (MIMOS, SIRIM) o centri R&D industriali senza immatricolazione universitaria, il canale obbligatorio è il **Professional Visit Pass (PVP - Research)** richiesto tramite ESD `[MYS-SRC-01]`, `[MYS-SRC-05]`.
- **Divieto:** È vietato svolgere ricerche sul campo con il visto turistico da 90 giorni; ricerche socio-economiche o ambientali richiedono la clearance preventiva dell'Economic Planning Unit (EPU) `[MYS-SRC-01]`.

---

### Caso 6: Erasmus+ e Accordi di Mobilità Internazionale
- **Atenei Partner:** La mobilità tra atenei europei e malesi si articola sia con le primarie università pubbliche (*Universiti Malaya, UKM, USM, UTM, UPM*) sia con i prestigiosi campus transfrontalieri esteri (*Monash University Malaysia, University of Nottingham Malaysia, Southampton Malaysia, Heriot-Watt Malaysia*) `[MYS-SRC-11]`.
- **Titolo di Soggiorno:** Gli studenti in scambio semestrale o annuale devono ottenere il **Mobility Student Pass** tramite EMGS `[MYS-SRC-11]`.
- **Adempimenti:** Anche per soggiorni di un solo semestre (3-6 mesi), sono obbligatori: eVAL, screening medico entro 7 giorni dall'arrivo, assicurazione sanitaria locale ed endorsement dello sticker `[MYS-SRC-11]`.

---

### Caso 7: Master di Ricerca e Dottorato (PhD) — Incarichi GRA/GTA
- **Inquadramento Giuridico:** I dottorandi e studenti di master mantengono lo status migratorio di studenti (*Student Pass*) `[MYS-SRC-11]`. Gli incarichi di *Graduate Research Assistant (GRA)* o *Graduate Teaching Assistant (GTA)* costituiscono borse di formazione alla ricerca (*scholarship allowances* tipicamente comprese tra RM 2.000 e RM 3.500/mese) e non rapporti di lavoro subordinato regolati dall'Employment Act `[MYS-SRC-02]`, `[MYS-SRC-19]`.
- **Esenzione Fiscale Totale:** Ai sensi del **Paragrafo 24, Schedule 6 dell'Income Tax Act 1967**, le borse di studio e gli assegni di ricerca percepiti da studenti a tempo pieno sono **totalmente esenti da imposta sui redditi malese** `[MYS-SRC-19]`.
- **Ricongiungimento Familiare:** Agli studenti di programmi Master e PhD è consentito sponsorizzare il coniuge e i figli tramite **Dependant Pass** `[MYS-SRC-01]`, `[MYS-SRC-11]`.

---

### Caso 8: Working Holiday / Vacanza-Lavoro
* **Stato Giuridico:** **ACCORDO TOTALMENTE INESISTENTE PER CITTADINI ITALIANI ED EUROPEI** `[MYS-SRC-30]`.
* **Paesi Convenzionati:** La Malaysia intrattiene accordi bilaterali *Working Holiday Scheme* esclusivamente con **Australia** e **Nuova Zelanda** `[MYS-SRC-30]`.
* **Avvertenza per candidati italiani:** Nessun cittadino italiano o UE può soggiornare in Malaysia con formule di vacanza-lavoro. Qualsiasi proposta di agenzie in tal senso costituisce tentativo di truffa o induzione al lavoro clandestino `[MYS-SRC-01]`, `[MYS-SRC-30]`.

---

### Caso 9: Post-Study Work / Ricerca Lavoro post-laurea

* **Assenza di Graduate Visa Automatico:** La Malaysia non offre un permesso di ricerca lavoro automatico aperto a tutti gli stranieri `[MYS-SRC-13]`.
* **Il Graduate Pass (Pas Lawatan Sosial Graduan) e l'ESCLUSIONE DELL'ITALIA:**
  - Nel 2024 il Dipartimento Immigrazione (JIM) ed EMGS hanno attivato il *Graduate Pass*, un titolo di 12 mesi per neolaureati di atenei malesi (Bachelor+) per viaggiare, fare lavori part-time e cercare impiego `[MYS-SRC-13]`.
  - **Elenco chiuso di 32 Paesi:** Aperto a cittadini di UK, Germania, Francia, Paesi Bassi, Danimarca, Norvegia, Svezia, Finlandia, Svizzera, USA, Canada, Australia, Giappone, ecc. `[MYS-SRC-13]`.
  - **ESCLUSIONE TASSATIVA DELL'ITALIA:** **L'Italia NON fa parte dei 32 Paesi.** Un laureato italiano da università malese non può accedere al Graduate Pass `[MYS-SRC-13]`.
  - **Conseguenza:** Alla scadenza dello Student Pass, il laureato italiano deve avere già un'offerta di lavoro conforme ai requisiti dell'Employment Pass (es. Categoria III a RM 5.000/mese o Categoria II a RM 10.000/mese) oppure lasciare il Paese `[MYS-SRC-03]`, `[MYS-SRC-13]`.
* **Per Laureati da Atenei Esteri (Italiani/Europei):** Nessun visto di ricerca lavoro. Si può entrare per 90 giorni senza visto come visitatori per colloqui d'affari (*business discussions*), ma per iniziare a lavorare occorre l'approvazione formale dell'Employment Pass `[MYS-SRC-01]`, `[MYS-SRC-03]`, `[MYS-SRC-24]`.

---

### Caso 10: Soggiorni Brevi e Ricongiungimento Familiare

#### A. Soggiorni Brevi (≤ 90 giorni) per Turismo e Affari
- **Regime di Ingresso:** Cittadini italiani ed europei sono **esenti da visto d'ingresso** per soggiorni turistici o affari non retribuiti fino a **90 giorni consecutivi** (rilascio dello *Short-Term Social Visit Pass* all'arrivo) `[MYS-SRC-01]`, `[MYS-SRC-07]`, `[MYS-SRC-24]`.
- **Requisiti Inderogabili alla Frontiera:**
  1. Passaporto con **almeno 6 mesi di validità residua** all'arrivo ed integrità fisica perfetta (nessuno strappo, macchia o chip danneggiato; rischio Not-to-Land immediato) `[MYS-SRC-01]`, `[MYS-SRC-24]`.
  2. **Obbligo MDAC (Malaysia Digital Arrival Card):** Registrazione telematica gratuita obbligatoria entro **3 giorni prima dell'arrivo** su `imigresen-online.imi.gov.my/mdac/main` `[MYS-SRC-09]`.
  3. Biglietto aereo confermato di uscita entro i 90 giorni `[MYS-SRC-24]`.
- **Autogates a KLIA:** Accessibili ai cittadini italiani/UE con passaporto biometrico. *Trappola operativa: al primo ingresso assoluto in Malaysia occorre transitare dai banchi manuali per il rilievo delle impronte digitali; l'Autogate funziona solo dai successivi ingressi* `[MYS-SRC-10]`.
- **Divieto di Visa Runs:** Uscite e rientri ravvicinati (Singapore, Thailandia) per resettare i 90 giorni vengono bloccati dai sistemi JIM: fermo in *Bilik Soal Siasat*, respingimento immediato con timbro **NTL (Not to Land)** e inserimento nella blacklist BLI `[MYS-SRC-01]`.

#### B. Ricongiungimento Familiare
- **Dependant Pass (DP):** Concesso al coniuge legalmente sposato (matrimonio eterosessuale civile) e figli di età inferiore a 21 anni di titolari di **EP Categoria I, EP Categoria II e (dal 01/06/2026) EP Categoria III** `[MYS-SRC-03]`.
  - *Lavoro del coniuge su DP:* Non automatico. Il coniuge deve ottenere uno specifico *Permission to Work endorsement* su passaporto dal JIM o convertire il titolo in un Employment Pass autonomo `[MYS-SRC-01]`.
- **Long-Term Social Visit Pass (LTSVP):** Rilasciato per genitori del titolare di EP, suoceri e figli non sposati di età compresa tra 21 e 25 anni `[MYS-SRC-01]`, `[MYS-SRC-03]`.

---

## 3. Riepilogo Costi Amministrativi Obbligatori per Tipologia

Tutti gli importi sono ricalcolati applicando il tasso ufficiale BNM al 05/10/2026 (**1 EUR = 4,5827 MYR** / **1 MYR = 0,21820 EUR**) `[MYS-SRC-16]`:

| Tipologia Titolo / Pratica | Tassa Elaborazione (MYXpats/EMGS/MDEC) | Tassa Statutaria JIM Pass (Annuale) | Tassa Processing JIM | Visto Multiplo (MEV) Italia | TOTALE DOVUTO (MYR) | TOTALE DOVUTO (EUR) |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Employment Pass Cat I, II, III (Singolo)** | RM 2.160,00 *(RM 2k + 8% SST)* `[MYS-SRC-05]` | RM 200,00 `[MYS-SRC-07]` | RM 125,00 `[MYS-SRC-07]` | RM 9,50 `[MYS-SRC-08]` | **RM 2.494,50** | **€544,33** |
| **Dependant Pass (Coniuge / Figlio)** | RM 540,00 *(RM 500 + 8% SST)* `[MYS-SRC-05]` | RM 90,00 `[MYS-SRC-07]` | RM 50,00 `[MYS-SRC-07]` | RM 9,50 `[MYS-SRC-08]` | **RM 689,50** | **€150,46** |
| **Professional Visit Pass (PVP)** | RM 1.296,00 *(RM 1.2k + 8% SST)* `[MYS-SRC-05]` | RM 360,00 *(RM 90 x 4 trim.)* `[MYS-SRC-07]` | Inclusa | RM 9,50 `[MYS-SRC-08]` | **RM 1.665,50** | **€363,45** |
| **Student Pass Package (EMGS - Anno 1)** | RM 1.728,00 *(incluso SST)* `[MYS-SRC-11]` | RM 60,00 `[MYS-SRC-07]` | RM 162,00 *(eVAL)* `[MYS-SRC-11]` | RM 9,50 `[MYS-SRC-08]` | **RM 2.759,50 – RM 3.220,10** *(incl. visita medica RM 250-350, polizza RM 500-850, i-Kad RM 50-60)* `[MYS-SRC-11]` | **€602,16 – €702,66** |
| **Residence Pass-Talent (10 Anni)** | RM 5.940,00 *(Stage 1 RM 540 + Stage 2 RM 5.400)* `[MYS-SRC-14]` | RM 500,00 *(RM 50 x 10 anni)* `[MYS-SRC-14]` | Inclusa | RM 9,50 `[MYS-SRC-08]` | **RM 6.449,50** | **€1.407,35** |
| **DE Rantau Nomad Pass (1 Anno)** | RM 1.080,00 *(RM 1k + 8% SST)* `[MYS-SRC-15]` | RM 360,00 `[MYS-SRC-15]` | Inclusa | RM 9,50 `[MYS-SRC-08]` | **RM 1.449,50** | **€316,30** |

*Nota di esenzione:* La registrazione iniziale dell'azienda sul portale ESD è **gratuita (RM 0,00)** per legge `[MYS-SRC-06]`. Spese di cancellazione pass (*Check-Out Memo*): **RM 0,00** `[MYS-SRC-05]`.

---

## 4. Statuto Giuridico durante l'Attesa e Onboarding Operativo Post-Arrivo

### A. Regime della Ricevuta e "La Trappola del Passaporto Sequestrato"
- All'ingresso con eVAL o Approval Letter, il controllo di frontiera appone un timbro provvisorio (*Special Pass*, durata tipica 30 giorni) `[MYS-SRC-01]`.
- **Ritiro del passaporto per Sticker Endorsement:** Il datore di lavoro o l'università ritira il passaporto originale per consegnarlo a JIM per l'applicazione dell'adesivo e l'emissione dell'**i-Kad** `[MYS-SRC-11]`.
- **Durata del sequestro burocratico:** L'operazione richiede **tra 2 e 6 settimane** sul campo.
- **Divieti durante il sequestro:** Con il passaporto in endorsement, lo straniero **non può espatriare né prendere voli interni verso Sabah o Sarawak** (soggetti a controllo passaporti autonomo ex Parte VII Act 155) `[MYS-SRC-28]`.

### B. Registrazione Contratto di Locazione (Tenancy Agreement)
- Ogni contratto d'affitto deve essere registrato e bollato con imposta di bollo governativa (*Stamp Duty*) sul portale **e-Duti Setem (MyTax)** entro 30 giorni dalla sottoscrizione `[MYS-SRC-20]`.
- I contratti non timbrati sono privi di valore legale nei tribunali malesi e non possono essere utilizzati come prova di residenza per aprire conti bancari o utenze domestiche `[MYS-SRC-17]`, `[MYS-SRC-20]`.
- *Prassi cauzioni:* Schema tipico **2+1+0.5** (2 mesi deposito danni + 1 mese anticipato + mezzo mese deposito utenze) `[MYS-SRC-20]`.

### C. Apertura del Conto Corrente Bancario
- **Norme AML di Bank Negara Malaysia (BNM):** Le banche malesi (Maybank, CIMB, Public Bank, RHB) rifiutano tassativamente di aprire conti con visto turistico o semplice eVAL `[MYS-SRC-17]`.
- **Requisiti inderogabili:** Passaporto originale con sticker fisico del visto applicato; carta i-Kad originale; lettera di presentazione nominativa (*ad personam*) emessa dall'azienda o dall'università indirizzata alla specifica filiale; copia del contratto di locazione registrato con certificato di bollo LHDN `[MYS-SRC-17]`, `[MYS-SRC-20]`.

### D. Codice Fiscale (TIN / LHDN) e la Trappola Fiscale dei 182 Giorni
- Registrazione telematica del Tax Identification Number (TIN) sul portale **MyTax (LHDN)** `[MYS-SRC-18]`.
- **Regola dei 182 Giorni (Residenza Fiscale):**
  - **Residenti ($\ge$ 182 giorni di presenza fisica nell'anno solare):** Tassati con aliquote progressive ordinarie (0% – 30%) con pieno diritto a detrazioni personali `[MYS-SRC-18]`.
  - **Non Residenti (< 182 giorni):** Tassati ad **aliquota fissa secca del 30% (flat rate)** senza alcuna detrazione `[MYS-SRC-18]`.
- **La Trappola dei Primi 6 Mesi:** Per legge, le aziende trattengono alla fonte (PCB) il **30% secco** sullo stipendio mensile dell'espatriato fino al compimento effettivo del 182° giorno sul suolo malese `[MYS-SRC-18]`.
- **La Trappola dei 14 Giorni per Arrivi nel Secondo Semestre (Sezione 7(1)(b) ITA 1967):**
  Chi arriva nella seconda metà dell'anno può collegare i giorni a un periodo di 182 giorni consecutivi nell'anno successivo, ma la legge tollera assenze all'estero per motivi di vacanza/sociali per un **totale massimo aggregato di 14 giorni**. Se l'espatriato rientra in Italia per più di 14 giorni durante le festività, la catena si spezza irrimediabilmente e il reddito del primo anno resta tassato al 30% a fondo perduto `[MYS-SRC-18]`.

### E. Previdenza Obbligatoria EPF (KWSP) e Assicurazione SOCSO
- **Fondo Pensione EPF/KWSP (Obbligatorio dal 1° Ottobre 2025):** Ai sensi dell'*EPF (Amendment) Act 2025*, tutti i lavoratori stranieri con Employment Pass sono soggetti a contribuzione pensionistica obbligatoria: **2% a carico del lavoratore** e **2% a carico del datore di lavoro** trattenuti mensilmente `[MYS-SRC-21]`. Il montante è riscattabile al momento del rimpatrio definitivo previa cancellazione del visto (Check-Out Memo) e Tax Clearance LHDN `[MYS-SRC-21]`.
- **SOCSO / PERKESO:** Obbligatorio l'Employment Injury Scheme (1,25% a carico esclusivo del datore) e l'Invalidity Scheme `[MYS-SRC-22]`. Gli espatriati sono **espressamente esclusi dall'Employment Insurance System (EIS - sussidio di disoccupazione)** `[MYS-SRC-22]`.

---

## 5. Regimi Speciali, Sanzioni e Norme di Sicurezza Penale

### A. Autonomia Migratoria del Borneo (Sabah e Sarawak)
Ai sensi della Parte VII dell'*Immigration Act 1959/63* e degli accordi MA63, gli Stati di **Sabah** e **Sarawak** esercitano sovranità migratoria autonoma:
- Chi atterra a Kota Kinabalu o Kuching provenendo da Kuala Lumpur deve esibire il passaporto e riceve un timbro d'ingresso statale `[MYS-SRC-28]`.
- L'Employment Pass peninsulare non autorizza lo svolgimento di attività lavorative in Sabah o Sarawak; operare nel Borneo con visto peninsulare equivale a lavoro clandestino `[MYS-SRC-28]`.
- I programmi di residenza per pensionati/investitori MM2H statali (S-MM2H in Sarawak e SBH-MM2H in Sabah) seguono requisiti patrimoniali e bancari indipendenti `[MYS-SRC-28]`.

### B. Inapplicabilità dell'Apostille dell'Aia
La Malaysia **NON è firmataria della Convenzione dell'Aia del 1961 sull'Apostille** `[MYS-SRC-23]`. Qualsiasi documento apostillato viene respinto dalle autorità malesi. È obbligatoria la procedura di **doppia legalizzazione consolare diplomatica**:
1. Legalizzazione in Italia (Procura della Repubblica o Prefettura) `[MYS-SRC-23]`, `[MYS-SRC-25]`.
2. Traduzione giurata ufficiale in inglese e legalizzazione del verbale in Procura `[MYS-SRC-25]`.
3. Legalizzazione consolare finale presso l'**Ambasciata di Malaysia a Roma** `[MYS-SRC-25]`.

### C. Legislazione Draconiana sugli Stupefacenti
- **Dangerous Drugs Act 1952 (Act 234):** Tolleranza zero assoluta. La Sezione 39B punisce il traffico di stupefacenti con la **pena di morte** (a discrezione del giudice) o con la reclusione da 30 a 40 anni con almeno 12 colpi di frusta giudiziaria `[MYS-SRC-26]`.
- Presunzione legale di traffico applicata a quantitativi minimi (15g eroina, 50g metanfetamina, 200g cannabis) `[MYS-SRC-26]`.
- **Sezione 15(1)(a):** Costituisce reato penale autonomo la semplice positività delle urine a sostanze stupefacenti (cannabis, THC, droghe sintetiche), anche se consumate legalmente all'estero prima dell'arrivo, punibile con reclusione fino a 2 anni `[MYS-SRC-26]`. Divieto totale di importazione di prodotti al CBD.

### D. Criminalizzazione delle Relazioni Omosessuali e Morale Pubblica
- Ai sensi delle Sezioni 377A, 377B e 377D del Codice Penale Malese (*Kanun Keseksaan*), i rapporti sessuali tra persone dello stesso sesso sono criminalizzati per chiunque sul suolo malese, con pene che prevedono la **reclusione fino a 20 anni e colpi di frusta** `[MYS-SRC-27]`.
- Vietata l'esibizione di simboli LGBTQ+ su accessori e abbigliamento ex *Printing Presses and Publications Act 1984* (sanzioni penali fino a 3 anni di reclusione) `[MYS-SRC-27]`.

---
*Documento consolidato conforme alle direttive di Single Source of Truth del Council di Verifica.*
