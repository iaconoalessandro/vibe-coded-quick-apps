---
country: "Finland"
country_it: "Finlandia"
iso_code: "FI"
last_verified: "2026-10-05"
review_by: "2027-03-31"
version: "1.0.0"
citizenships_covered:
  - "UE / SEE / Svizzera"
  - "Extra-UE (incl. UK, USA, Canada, Commonwealth, Paesi terzi)"
---

# Guida Ufficiale Visti e Immigrazione: Finlandia (Finland)

> **Regola di integrità:** Questo documento costituisce l'**UNICA fonte di verità** del progetto Admetia per quanto concerne le normative di ingresso, soggiorno, studio, ricerca, tirocinio, lavoro subordinato e autonomo, residenza permanente e fiscalità nella Repubblica di Finlandia (*Suomen tasavalta*). Ogni dato numerico, tariffa, soglia retributiva o termine temporale reca un identificativo `[FI-SRC-XX]` collegato al registro analitico [`finland_sources.md`](finland_sources.md). I punti soggetti a divergenze applicative o discrezionalità d'ufficio confluiscono in [`finland_open_questions.md`](finland_open_questions.md).

---

## 1. Architettura Giuridica ed Enti Competenti

### Quadro Normativo Cardine
La disciplina dell'immigrazione e del soggiorno in Finlandia è retta dai seguenti testi normativi, aggiornati al quadro delle riforme varate tra il 2024 e il 2026:
* **Legge sugli Stranieri (*Ulkomaalaislaki 301/2004* e ss.mm.ii.):** Disciplina l'ingresso, il rilascio dei visti, i permessi di soggiorno di primo rilascio (*ensimmäinen oleskelulupa*) ed estensione (*jatkolupa*), il permesso permanente (*pysyvä oleskelulupa - P-lupa*) e le sanzioni di allontanamento.
* **Riforma della Regola di Disoccupazione 3/6 Mesi (*Työttömyyssääntö* - Legge 11/06/2025):** Introduce l'obbligo del datore di notificare a Migri il licenziamento/dimissioni entro 14 giorni e stabilisce un termine di decadenza di 3 mesi (elevato a 6 mesi per specialisti, possessori di Blue Card e residenti con permesso lavorativo >2 anni) per stipulare un nuovo contratto di lavoro conforme `[FI-SRC-17]`.
* **Centralizzazione TTOL e Riforma TE2024 (in vigore dal 01/01/2025):** Abolizione formale della decisione parziale (*osapäätös*) dei disciolti uffici TE-toimistot. La verifica della disponibilità sul mercato del lavoro locale/UE (*saatavuusharkinta*) e la conformità salariale sono ora accentrate al 100% in capo a Migri `[FI-SRC-04]`.
* **Legge su Studenti e Ricercatori (*Laki 719/2018* novellata con L. 218/2022):** Concede permessi continui di Tipo A per l'intera durata del ciclo di studio, diritto di lavoro esteso a 30 ore medie settimanali e permesso biennale di ricerca lavoro post-studio `[FI-SRC-08, FI-SRC-09, FI-SRC-11]`.
* **Legge sulla Cittadinanza (*Kansalaisuuslaki 359/2003*, novellata 01/10/2024):** Innalzamento del requisito di residenza ininterrotta da 5 a 8 anni e limite massimo di 365 giorni di assenza dal Paese `[FI-SRC-19]`.
* **Riforma del Permesso Permanente P-lupa (in vigore dal 08/01/2026):** Innalzamento del requisito generale da 4 a 6 anni di soggiorno continuativo con permesso A, competenza linguistica B1 e 2 anni di storia lavorativa, con canali accelerati a 4 anni (reddito >= 40.000 €/anno) o esenzione totale da anni di attesa per laureati in Finlandia `[FI-SRC-18]`.
* **Legge Fiscale sui Lavoratori Chiave Esteri (*Avainhenkilölaki 1551/1995*, novellata 01/01/2026):** Riduzione dell'aliquota sostitutiva della ritenuta alla fonte (*lähdevero*) dal 32% al 25% per specialisti con retribuzione lorda non inferiore a 5.800 €/mese `[FI-SRC-20]`.

### Mappa degli Enti e Portali Competenti
* **Maahanmuuttovirasto (Migri - Servizio Finlandese per l'Immigrazione):** Ente ministeriale dipendente dal Ministero dell'Interno (*Sisäministeriö*). Gestisce le istruttorie per visti D, permessi di soggiorno, registrazioni UE, asilo e cittadinanza tramite il portale telematico unificato **Enter Finland** (`https://enterfinland.fi`).
* **Digi- ja väestötietovirasto (DVV - Agenzia per i Dati Digitali e Demografici):** Gestisce il Registro della Popolazione (*Väestötietojärjestelmä*). Assegna il codice identificativo personale (*henkilötunnus*) e iscrive il comune di residenza (*kotikunta*) ex Legge 201/1994 `[FI-SRC-22]`.
* **Verohallinto (Vero - Amministrazione Fiscale):** Emette la carta fiscale (*verokortti*). Se il lavoratore non presenta la carta fiscale prima della prima busta paga, il datore applica la ritenuta cautelare automatica al 60% `[FI-SRC-21]`.
* **Kela (Kansaneläkelaitos - Istituto di Previdenza Sociale):** Gestisce il sistema di sicurezza sociale, la tessera sanitaria nazionale (*Kela-kortti*) e la riscossione della tassa sanitaria semestrale per l'assistenza agli studenti universitari (YTHS) `[FI-SRC-24]`.
* **Poliisi (Polizia Finlandese):** Rilascia la Carta d'Identità per Stranieri (*Ulkomaalaisen henkilökortti*), documento indispensabile per sbloccare le credenziali di forte autenticazione bancaria (*BankID*) `[FI-SRC-23]`.
* **Ulkoministeriö (Ministero Affari Esteri) & Centri VFS Global:** Curano l'identificazione biometrica all'estero e l'apposizione del visto D tramite la rete diplomatica *Finland Abroad*.
* **Mela (Maatalousyrittäjien eläkelaitos):** Istituto previdenziale obbligatorio per ricercatori universitari e dottorandi finanziati tramite borsa di studio (*apurahatutkijat*) `[FI-SRC-27]`.

---

## 2. Matrice dei Casi d'Uso (Dettaglio Operativo UE vs Extra-UE)

```
                            ┌────────────────────────────────────────┐
                            │    INGRESSO E SOGGIORNO IN FINLANDIA   │
                            └───────────────────┬────────────────────┘
                                                │
                     ┌──────────────────────────┴──────────────────────────┐
                     ▼                                                     ▼
      ┌───────────────────────────────┐                     ┌───────────────────────────────┐
      │     CITTADINI UE / SEE / CH   │                     │      CITTADINI EXTRA-UE       │
      ├───────────────────────────────┤                     ├───────────────────────────────┤
      │ • Libera circolazione TFUE     │                     │ • Domanda via Enter Finland   │
      │ • No visto d'ingresso         │                     │ • Identificazione biometria   │
      │ • Soggiorno >90 gg:           │                     │   (Ambasciata / VFS Global)   │
      │   Registrazione UE (Migri)    │                     │ • Visto D per partenza rapida │
      │   Tariffa: 53 €               │                     │ • Rilascio Permesso di Tipo   │
      │ • DVV: Henkilötunnus +        │                     │   A (continuo) o B (temp.)    │
      │   Kotikunta (se >1 anno)      │                     │ • Sequenza: DVV → Poliisi ID  │
      │ • Polizia ID per BankID       │                     │   → BankID → Vero → Kela      │
      └───────────────────────────────┘                     └───────────────────────────────┘
```

---

### Caso 1: Lavoro Dipendente Ordinario (Subordinate Employment - TTOL)

#### Cittadini UE/SEE/CH
* **Regime Giuridico:** Accesso illimitato al mercato del lavoro ai sensi dell'art. 45 TFUE e della Sezione 158 dell'*Ulkomaalaislaki*. Nessun test del mercato del lavoro, nessuna quota di flussi `[FI-SRC-02]`.
* **Adempimenti:**
  1. Ingresso con passaporto o carta d'identità valida per l'espatrio.
  2. Entro 3 mesi dall'ingresso, deposito della domanda di registrazione del diritto di soggiorno (*EU-rekisteröinti*) tramite *Enter Finland* e successivo appuntamento di persona presso un punto di servizio Migri (es. Malmi o International House Helsinki).
  3. Registrazione anagrafica al DVV per attribuzione dell'*henkilötunnus* e iscrizione del *kotikunta* `[FI-SRC-22]`.
* **Costi e Tempi:** Tariffa governativa Migri: **53 €** (online o cartacea) `[FI-SRC-01]`. Tempi di trattazione Migri: 1–3 settimane in presenza di contratto firmato.

#### Cittadini Extra-UE (*Työntekijän oleskelulupa - TTOL*)
* **Titolo Richiesto:** Permesso di soggiorno per lavoratore subordinato (*TTOL* ex Sez. 70-76 *Ulkomaalaislaki*).
* **Riforma Istituzionale 01/01/2025:** L'iter a due fasi (decisione parziale dell'ufficio TE-toimisto + decisione Migri) è stato soppresso. Migri istruisce direttamente l'intera pratica `[FI-SRC-04]`.
* **Requisiti Contrattuali e Retributivi:**
  * **Soglia Minima di Sussistenza:** Almeno **1.600 € lordi al mese** per il 2026 `[FI-SRC-03]`.
  * **Prevalenza Contrattuale (TES):** Se il contratto collettivo di categoria (*työehtosopimus*) prevede un minimo tabellare superiore a 1.600 €, il datore di lavoro è tenuto a corrispondere il minimo del TES.
  * **Composizione Salario:** I fringe benefit (vitto, alloggio) concorrono per un massimo del 50% al valore imponibile; straordinari e indennità discontinue non sono computabili `[FI-SRC-03]`.
  * **Labor Market Testing (*Saatavuusharkinta*):** Obbligatorio. Il posto deve essere pubblicizzato per almeno 14 giorni sul portale *Työmarkkinatori* per verificare l'indisponibilità di lavoratori finlandesi o comunitari, salvo che la qualifica rientri nella lista regionale delle professioni in carenza (*työvoimapula-alat*).
* **Vincolo Settoriale Tassativo (*Ammattiala*):** Il permesso TTOL abilita a lavorare **esclusivamente nel settore professionale indicato sul titolo**. Il passaggio a un settore differente richiede una nuova autorizzazione di Migri prima di iniziare le nuove mansioni, a pena di contestazione di lavoro non autorizzato (*luvaton työnteko*), salvo che il nuovo impiego rientri nei settori in carenza `[FI-SRC-04]`.
* **Regola dei 3 Mesi di Disoccupazione:** In caso di cessazione anticipata del rapporto, il lavoratore ha **3 mesi** dalla data di fine lavoro per trovare un nuovo impiego conforme prima che scatti la revoca del permesso `[FI-SRC-17]`. Il termine sale a 6 mesi per chi ha maturato oltre 2 anni continuativi con permesso di lavoro.
* **Costi Amministrativi:**
  * Prima domanda online (*Enter Finland*): **750 €** `[FI-SRC-01]`.
  * Prima domanda cartacea: **950 €** `[FI-SRC-01]`.
  * Rinnovo (*Jatkolupa*): **230 €** online / **430 €** cartaceo `[FI-SRC-01]`.
  * Commissione VFS Global all'estero (se applicabile): circa **20–35 €**.
* **Tempi di Elaborazione:** De jure: max 2 mesi. De facto: **1,5 – 3 mesi** (con picchi fino a 4-5 mesi in caso di controlli societari o verifiche sindacali) `[FI-SRC-04]`.

---

### Caso 2: Lavoro Altamente Qualificato (Specialist & Carta Blu UE)

#### Cittadini UE/SEE/CH
* Accesso immediato senza formalità lavorative. Registrazione UE ordinaria a 53 € dopo 90 giorni `[FI-SRC-02]`.

#### Cittadini Extra-UE: Specialista Nazionale (*Erityisasiantuntija*)
* **Base Normativa:** *Ulkomaalaislaki* Sez. 77(1)(1).
* **Requisiti:** Titolo universitario (laurea triennale/magistrale) o competenze specialistiche equivalenti comprovate; offerta o contratto vincolante per mansioni che esigono elevata qualificazione tecnica o manageriale `[FI-SRC-05]`.
* **Soglia Retributiva Fissa 2026:** Almeno **3.937 € lordi al mese** (pari a 47.244 € lordi annui) `[FI-SRC-05]`.
* **Regola Tassativa Fringe Benefit:** La soglia deve essere coperta **esclusivamente dallo stipendio monetario di base (*peruspalkka*)**. Vitto, alloggio aziendale, auto, buoni pasto e indennità di trasferta (*päivärahat*) sono integralmente esclusi dal computo del minimo legale `[FI-SRC-05]`.
* **Esenzione Totale dal Test di Mercato:** Non è richiesta la verifica della reperibilità di manodopera locale `[FI-SRC-05]`.
* **Fast-Track (*Pikakaista*) in 14 Giorni:**
  * Domanda telematica su *Enter Finland*.
  * Obbligo di identificazione biometrica presso l'ambasciata o centro VFS entro **5 giorni lavorativi** dall'invio `[FI-SRC-07]`.
  * Obbligo per il datore di completare la sezione *Enter Finland for Employers* entro **2 giorni lavorativi**.
  * Rilascio del **Visto D nazionale (+95 €)** contestuale alla decisione favorevole, per volare subito in Finlandia senza attendere 3-4 settimane per la spedizione della card plastificata `[FI-SRC-01, FI-SRC-07]`.
* **Costi e Tempi:**
  * Prima domanda: **530 €** online / **630 €** cartacea `[FI-SRC-01]`.
  * Rinnovo: **230 €** online / **430 €** cartaceo `[FI-SRC-01]`.
  * Visto D: **95 €**.
  * Tempi: **10 – 14 giorni di calendario** (rispettato nel 95% dei casi con Fast-Track completo) `[FI-SRC-07]`.

#### Cittadini Extra-UE: Carta Blu UE (*EU:n sininen kortti*)
* **Base Normativa:** *Ulkomaalaislaki* Sez. 81 e Direttiva (UE) 2021/1883 recepita nell'ordinamento finlandese `[FI-SRC-06]`.
* **Requisiti:** Contratto di lavoro altamente qualificato di durata pari ad almeno **6 mesi** (ridotto dai precedenti 12 mesi). Titolo accademico triennale o esperienza professionale equiparata di 3 anni nel settore ICT (5 anni per altri settori) `[FI-SRC-06]`.
* **Soglia Salariale 2026:** Almeno **3.937 € lordi al mese** (medesima soglia dello Specialist) `[FI-SRC-06]`.
* **Vantaggi Distintivi:** Mobilità intra-UE facilitata verso altri Stati membri dell'Unione dopo 12 mesi di soggiorno regolare; computo favorevole dei periodi di residenza ai fini dello status di residente di lungo periodo UE (P-EU) `[FI-SRC-06]`.
* **Costi:** **530 €** online / **630 €** cartacea `[FI-SRC-01]`.
* **Protezione Disoccupazione:** Beneficia del termine esteso a **6 mesi** per reperire una nuova occupazione `[FI-SRC-17]`.

#### Regime Fiscale Speciale Impatriati Esperti (*Avainhenkilölaki*)
* **Condizioni:** Lavoratore estero impiegato in mansioni qualificate, con stipendio monetario di almeno **5.800 € lordi al mese** (esclusi benefit in natura) e non residente fiscale in Finlandia nei **5 anni solari precedenti** `[FI-SRC-20]`.
* **Aliquota dal 01/01/2026:** Imposta sostitutiva fissa (*lähdevero*) al **25%** (ridotta dal precedente 32%) applicabile per un massimo di **84 mesi (7 anni)** `[FI-SRC-20]`. Non si applicano addizionali comunali progressive.
* **Docenti e Ricercatori:** Per docenti e ricercatori accademici il regime al 25% si applica a prescindere dal limite di 5.800 €/mese `[FI-SRC-20]`.

---

### Caso 3: Internship / Tirocinio (Harjoittelu)

#### Tirocinio Curriculare (Studenti già regolarmente residenti)
* **Cittadini UE:** Libero svolgimento; copertura sanitaria garantita tramite TEAM (EHIC).
* **Studenti Extra-UE in Finlandia:** I tirocini curriculari approvati dall'ateneo per l'acquisizione di crediti formativi (ECTS) o la redazione della tesi sono **esenti dal limite orario delle 30 ore settimanali** e possono essere svolti a tempo pieno (40 h/settimana) senza titoli addizionali `[FI-SRC-09]`.

#### Tirocinio Extracurriculare / Tirocinanti da Atenei Esteri
* **Base Normativa:** *Ulkomaalaislaki* e Direttiva (UE) 2016/801 (modulo telematico **OLE_TY3**) `[FI-SRC-13]`.
* **Requisiti Tassativi:**
  * Lo stage deve essere correlato agli studi in corso all'estero oppure deve iniziare entro **massimo 2 anni** dal conseguimento della laurea estera `[FI-SRC-13]`.
  * **Convenzione di Tirocinio Obbligatoria:** Contratto dettagliato firmato da candidato, università estera ed ente ospitante finlandese, con piano formativo e tutor dedicato.
  * **DIVIETO ASSOLUTO DI TIROCINIO NON RETRIBUITO:** Migri rigetta qualsiasi istanza di stage gratuito. Il compenso deve garantire l'autosufficienza economica, pari ad almeno **1.463 € netti/mese** (parametro 2026) o al minimo contrattuale previsto dal contratto collettivo TES applicabile `[FI-SRC-13]`.
* **Durata Massima:** Fino a un massimo di **18 mesi** complessivi `[FI-SRC-13]`.
* **Costi e Tempi:** Domanda online: **530 €**; cartacea: **630 €** `[FI-SRC-01]`. Tempi medi: **1 – 2 mesi**.

---

### Caso 4: Studio Universitario (Bachelor / Master)

#### Cittadini UE/SEE/CH
* **Rette Accademiche (*Tuition Fees*):** **0 €** (istruzione universitaria gratuita per comunitari).
* **Procedura:** Iscrizione tramite *Studyinfo.fi*. Ingresso libero, registrazione UE presso Migri entro 90 giorni (53 €) `[FI-SRC-02]`. Copertura sanitaria con TEAM; pagamento della tassa sanitaria studentesca Kela YTHS (36,80 €/semestre) `[FI-SRC-24]`.

#### Cittadini Extra-UE (*Opiskelijan oleskelulupa*)
* **Titolo Rilasciato:** Permesso di soggiorno continuo di **Tipo A** concesso per l'intera durata nominale del corso di studi (es. 2 anni per Master, 3 anni per Bachelor) `[FI-SRC-08]`.
* **Rette Accademiche (*Tuition Fees*):** Obbligatorie per i corsi impartiti in lingua inglese (fissate dai singoli atenei tra 6.000 € e 18.000 €/anno). La ricevuta del pagamento dell'annualità o l'assegnazione di borsa totale è condizione per il rilascio del visto `[FI-SRC-08]`.
* **Requisiti Finanziari di Sussistenza (*Toimeentuloedellytys* dal 01/11/2024):**
  * Almeno **800 € netti al mese** (**9.600 € all'anno**) `[FI-SRC-08]`.
  * Se il corso è biennale, dimostrare 9.600 € al primo rilascio; Migri monitora la permanenza dei fondi al secondo anno.
  * **Riduzioni Alloggio:** Se l'ateneo fornisce alloggio gratuito certificato, la soglia scende a **400 €/mese**; con vitto e alloggio inclusi, scende a **270 €/mese** `[FI-SRC-08]`.
  * **Intestazione Conto Bancario:** I fondi devono trovarsi su un conto bancario **intestato nominativamente allo studente**. Garanzie di terzi (*affidavit of support*), conti dei genitori (salvo minori) o fideiussioni sono **tassativamente respinti** da Migri `[FI-SRC-08]`.
* **Assicurazione Sanitaria Privata Obbligatoria:**
  * Corsi di durata inferiore a 2 anni: massimale medico minimo di **120.000 €** `[FI-SRC-10]`.
  * Corsi di durata pari o superiore a 2 anni: massimale minimo di **40.000 €** per spese mediche/farmaci (in quanto il corso biennale conferisce l'iscrizione anagrafica al kotikunta) `[FI-SRC-10]`.
  * Franchigia massima (*omavastuu*): non superiore a **300 €** per evento `[FI-SRC-10]`.
  * Polizze accreditate: Swisscare (ESI Finland), SIP/Marsh, AON Student Insurance.
* **Tassa Sanitaria Studentesca YTHS:** Tutti i discenti dei corsi di laurea (compresi gli extra-UE) devono pagare la tassa di assistenza sanitaria per studenti universitari a Kela, pari a **36,80 € per semestre** (73,60 €/anno) `[FI-SRC-24]`.
* **Attività Lavorativa Consentita:** Fino a una **media di 30 ore settimanali calcolata su base annua** (1.560 ore/anno), elevabile a tempo pieno nei periodi di vacanza accademica o per tirocini curriculari `[FI-SRC-09]`.
* **Costi e Tempi:**
  * Prima domanda maggiorenni: **600 €** online / **750 €** cartacea `[FI-SRC-01]`.
  * Minorenni: **400 €** online / **430 €** cartacea `[FI-SRC-01]`.
  * Rinnovo: **230 €** online / **430 €** cartaceo `[FI-SRC-01]`.
  * Tempi: 1–2 mesi (fase decisionale automatizzata: 1–3 settimane; ma nei picchi di luglio-agosto attese fino a 60–90 giorni per la biometria estera) `[FI-SRC-01]`.

---

### Caso 5: Tesi / Ricerca all'Estero (Visiting Student vs Researcher)

#### Visiting Student (Elaborazione Tesi senza Iscrizione)
* **Status:** Se lo studente rimane immatricolato all'università di provenienza estera e non si iscrive a un ateneo finlandese:
  * Soggiorno ≤ 90 giorni: Visto Schengen C o esenzione; nessun compenso da ente finlandese.
  * Soggiorno > 90 giorni: Inquadramento obbligatorio come tirocinante (*Harjoittelu* ex Dir. 2016/801) con convenzione formale ed erogazione di compenso minimo (1.463 €/mese), oppure come visiting researcher se già provvisto di laurea magistrale e contrattualizzato.

#### Ricercatore Scientifico (*Tutkija*)
* **Base Normativa:** Direttiva (UE) 2016/801 e *Ulkomaalaislaki* Sez. 77(1)(2) `[FI-SRC-14]`.
* **Documento Cardine:** **Hosting Agreement (*Vastaanottosopimus*)** redatto dall'università o ente di ricerca accreditato finlandese, attestante progetto, durata, risorse e copertura assicurativa `[FI-SRC-14]`.
* **Finanziamento:** Stipendio contrattuale, borsa di studio (*apuraha*) o fondi propri (almeno 1.210 € netti/mese di sussistenza autonoma).
* **Agevolazioni:** Esente da labor market testing; diritto alla corsia preferenziale Fast-Track (14 giorni) e richiesta del visto D (95 €) `[FI-SRC-07, FI-SRC-14]`.
* **Costi:** Prima domanda: **530 €** online / **630 €** cartacea; rinnovo: **230 €** online / **430 €** cartaceo `[FI-SRC-01]`.

---

### Caso 6: Erasmus+ e Mobilità Intra-UE

#### Studenti e Docenti Comunitari (UE/SEE/CH)
* Ingresso libero con TEAM. Soggiorni inferiori a 90 giorni non richiedono formalità. Per scambi superiori a 3 mesi: registrazione UE presso Migri (53 €) e registrazione domicilio temporaneo al DVV `[FI-SRC-02, FI-SRC-22]`.

#### Studenti Extra-UE residenti in altro Stato UE (Dir. 2016/801)
* **Notifica di Mobilità Intra-UE (*Opiskelijan liikkuvuusilmoitus*):**
  * Lo studente di Paese terzo regolarmente soggiornante in uno Stato UE (es. Italia, Francia, Germania) per motivi di studio nell'ambito di un programma europeo (Erasmus+) o accordo interuniversitario può soggiornare e studiare in Finlandia per un periodo massimo di **360 giorni SENZA dover richiedere un permesso di soggiorno finlandese** `[FI-SRC-12]`.
  * **Procedura:** Invio della notifica telematica a Migri prima dell'ingresso (o contestualmente all'arrivo) allegando il permesso di soggiorno UE valido per l'intera durata della mobilità, accordo di mobilità, prova di sussistenza (800 €/mese) e assicurazione sanitaria valida `[FI-SRC-12]`.
  * **Silenzio-Assenso:** Se Migri non formula obiezioni formali entro 30 giorni dalla ricezione, la mobilità si intende approvata.
  * **Diritti Lavorativi:** Accesso al lavoro part-time consentito fino a 30 ore medie settimanali `[FI-SRC-09]`.
  * **Tariffa:** La notifica di mobilità è soggetta alla tariffa amministrativa di **100 €** `[FI-SRC-01]`.

---

### Caso 7: Master e Dottorato di Ricerca (PhD)

#### Master Universitari (I / II Livello)
* Inquadramento formale nel permesso per studio (*Opiskelija*). Durata 2 anni, tipo A, sussistenza 800 €/mese, lavoro max 30 h/settimana `[FI-SRC-08, FI-SRC-09]`.

#### Dottorato di Ricerca (Doppio Binario)
Il sistema accademico finlandese struttura il dottorato su due distinti regimi giuridici:

1. **Binario A: Dottorando Contrattualizzato (*Työsuhteinen tohtorikoulutettava*):**
   * Assunzione con contratto di lavoro subordinato con l'Ateneo (*työsopimus*). Titolo: permesso di soggiorno per ricercatore scientifico (*Tutkija*) `[FI-SRC-14]`.
   * Stipendio imponibile soggetto a ritenuta progressiva (*verokortti*), versamento contributi pensionistici TyEL e piena copertura del sistema di sicurezza sociale Kela fin dal primo giorno `[FI-SRC-24]`.
2. **Binario B: Dottorando Borsista (*Apurahatutkija*):**
   * Finanziamento tramite borsa di studio erogata da fondazioni private (Koneen Säätiö, Suomen Kulttuurirahasto) o agenzie statali (Business Finland, Suomen Akatemia). Titolo: permesso per ricercatore con fondi di borsa `[FI-SRC-14]`.
   * **Regime Fiscale:** La borsa di studio per ricerca scientifica è **totalmente esente da imposte sul reddito fino a 26.200 € all'anno** (parametro allineato al premio statale per artisti ex art. 82 Tuloverolaki). La quota eccedente è assoggettata a tassazione progressiva ordinaria `[FI-SRC-20]`.
   * **OBBLIGO PREVIDENZIALE MELA (Assicurazione MYEL/MATA):** Ai sensi della legge sulle pensioni per agricoltori e borsisti (LFAL 1280/2006), se la borsa di studio ha una durata continuativa di almeno **4 mesi** e un importo lordo annuo pari o superiore a **4.712 €** (parametro 2026), il ricercatore ha l'**obbligo giuridico di iscriversi a Mela entro 3 mesi dall'avvio della borsa** `[FI-SRC-27]`. L'aliquota contributiva (circa 13-15% dell'importo borsa) è a carico del borsista e garantisce pensione di invalidità, reversibilità, indennità di maternità/malattia e copertura infortuni MATA sul lavoro `[FI-SRC-27]`.

---

### Caso 8: Working Holiday (Vacanza-Lavoro)

* **Paesi Convenzionati (Elenco Tassativo):** **Australia, Nuova Zelanda, Giappone, Canada** `[FI-SRC-15]`.
  *(Nota di rigore: la Finlandia NON ha convenzioni Working Holiday attive con la Corea del Sud, Stati Uniti o Regno Unito).*
* **Requisiti Anagrafici:**
  * Età compresa tra 18 e 30 anni compiuti (Australia, Giappone) `[FI-SRC-15]`.
  * Età compresa tra 18 e 35 anni compiuti (Nuova Zelanda, Canada) `[FI-SRC-15]`.
* **Durata e Condizioni:** Durata massima di **12 mesi**; rilasciato una sola volta nella vita `[FI-SRC-15]`.
* **Fondi di Sussistenza:** Almeno **2.450 €** documentati per coprire le spese iniziali dei primi 3 mesi `[FI-SRC-15]`.
* **Limiti all'Attività Lavorativa:**
  * Il lavoro deve avere natura accessoria rispetto allo scopo principale della vacanza.
  * **Australia:** Durata massima complessiva di lavoro di 9 mesi sui 12, con limite massimo di **3 mesi con lo stesso datore di lavoro** `[FI-SRC-15]`.
  * **Nuova Zelanda e Canada:** Nessun limite restrittivo di mesi per singolo datore di lavoro `[FI-SRC-15]`.
* **Inconvertibilità del Titolo in Loco:** Il permesso non è rinnovabile come Working Holiday. L'eventuale passaggio a permesso di lavoro o studio richiede una domanda ordinaria di primo permesso (con labor market testing se lavoro ordinario).
* **Costi:**
  * Tariffa standard: **530 €** online / **630 €** cartacea `[FI-SRC-01, FI-SRC-15]`.
  * **Cittadini della Nuova Zelanda: 0 €** (esenzione totale delle spese di istruttoria in forza dell'accordo bilaterale del 1973) `[FI-SRC-01, FI-SRC-15]`.

---

### Caso 9: Post-Study Work / Ricerca Lavoro o Impresa

* **Aventi Diritto:** Cittadini di Paesi terzi che hanno completato un ciclo di studi universitari (Bachelor, Master o Dottorato) o hanno concluso un progetto di ricerca scientifica in Finlandia `[FI-SRC-11]`.
* **Durata Massima:** Fino a **2 anni totali** `[FI-SRC-11]`.
* **Finestra Temporale di Richiesta:** La domanda può essere presentata entro un massimo di **5 anni** dal conseguimento del titolo accademico o dalla conclusione del progetto di ricerca `[FI-SRC-11]`.
* **Frazionamento delle Tranche:** Il biennio può essere fruito in un unico blocco oppure frazionato in un massimo di **3 periodi distinti** (ciascun periodo deve avere durata minima di 6 mesi; l'ultimo periodo deve concludersi entro 3 anni dall'inizio del primo) `[FI-SRC-11]`.
* **Requisiti Economici di Sussistenza:** Almeno **800 € netti al mese** di mezzi propri (pari a 19.200 € per il biennio intero, o 4.800 € per una tranche di 6 mesi), dimostrabili con conto corrente o redditi da lavoro continuativi `[FI-SRC-11]`.
* **Accesso al Lavoro:** Durante la ricerca, il titolare ha diritto di svolgere **qualsiasi attività lavorativa a tempo pieno senza limitazioni di ore o settore**.
* **CONVERSIONE A PERMESSO LAVORO FUORI QUOTA:** Quando il neolaureato stipula un contratto di lavoro ordinario, converte il titolo nel permesso specifico per titolari di laurea finlandese (*Oleskelulupa tutkinnon suorittaneelle*), che è **TOTALMENTE ESENTE DA TEST DEL MERCATO DEL LAVORO (*Saatavuusharkinta*)** `[FI-SRC-03, FI-SRC-11]`.
* **Costi:**
  * Domanda di estensione in Finlandia (*Jatkolupa*): **230 €** online / **430 €** cartacea `[FI-SRC-01]`.
  * Domanda depositata dall'estero (entro 5 anni): **750 €** online / **800 €** cartacea `[FI-SRC-01]`.

---

### Caso 10: Soggiorni Brevi (≤90 gg) e Ricongiungimento Familiare

#### Soggiorni Brevi (≤ 90 giorni su 180)
* **Regime Visti:** Cittadini UE/SEE e Paesi esenti (USA, UK, Canada, Australia, Giappone): ingresso senza visto; obbligo passaporto con validità residua ≥ 3 mesi. Cittadini soggetti a visto: Visto Schengen Tipo C (tariffa 90 € adulti, 45 € minori 6-12 anni).
* **Divieto Assoluto di Lavoro Ordinario:** Non è consentita alcuna attività subordinata locale, salvo le deroghe tassative per soggiorni brevissimi ex Sez. 79 e 81b *Ulkomaalaislaki* (docenti universitari invitati per seminari ≤ 1 anno, artisti e atleti per manifestazioni, personale diplomatico, collaudatori di impianti industriali assunti da fornitore estero).
* **Inconvertibilità:** Divieto di richiedere permessi di soggiorno di lungo periodo dall'interno della Finlandia per i titolari di visto Schengen C turistico, salvo casi eccezionali di matrimonio con cittadino finlandese o Fast-Track per specialisti.

#### Ricongiungimento Familiare (*Perheside*)
* **Familiari Ammessi:** Coniuge, partner registrato, convivente *more uxorio* da almeno 2 anni continuativi (o con figli comuni) e figli minorenni (< 18 anni) a carico `[FI-SRC-16]`.
* **Diritto Incondizionato al Lavoro:** Il familiare ricongiunto acquisisce il **pieno e illimitato diritto al lavoro subordinato e autonomo in qualsiasi settore**, senza test di mercato `[FI-SRC-16]`.
* **Soglie di Reddito Netto Minimo Mensile (Scaglioni 2026):**
  Il reddito dello sponsor (al netto di tasse e previdenza) deve soddisfare la tabella ufficiale divisa per costo della vita municipale `[FI-SRC-16]`:
  * **Gruppo 1 (Helsinki, Espoo, Vantaa, Kauniainen):**
    * Sponsor: **1.210 €/mese** (14.520 €/anno).
    * Coniuge/Partner: **+ 610 €/mese** (+ 7.320 €/anno).  
      *(Coppia a Helsinki: **1.820 € netti/mese**)*.
    * 1° figlio a carico: **+ 610 €/mese**; 2° figlio: **+ 480 €/mese**; successivi: **+ 360 €/mese ciascuno**.
  * **Gruppo 2 (Tampere, Turku, Oulu, Jyväskylä, Kuopio, Lahti, ecc.):**
    * Sponsor: **1.090 €/mese**; Coniuge: **+ 550 €/mese**.  
      *(Coppia a Tampere/Turku: **1.640 € netti/mese**)*.
    * 1° figlio: **+ 550 €/mese**; 2° figlio: **+ 430 €/mese**; successivi: **+ 320 €/mese**.
  * **Gruppo 3 (Resto dei Comuni della Finlandia):**
    * Sponsor: **1.030 €/mese**; Coniuge: **+ 520 €/mese**.  
      *(Coppia nel Gr. 3: **1.550 € netti/mese**)*.
    * 1° figlio: **+ 520 €/mese**; 2° figlio: **+ 410 €/mese**; successivi: **+ 310 €/mese**.
* **Costi:** Prima domanda adulto: **750 €** online / **800 €** cartacea; minore: **400 €** online / **430 €** cartacea. Rinnovo: **230 €** online / **430 €** cartaceo `[FI-SRC-01]`.

---

## 3. Riepilogo Costi Amministrativi Obbligatori per Tipologia (Tariffe 2026)

Tutte le tariffe sono stabilite dal Decreto del Ministero dell'Interno *1336/2025* in vigore per il 2026 `[FI-SRC-01]`:

| Tipologia di Domanda | Canale Elettronico (*Enter Finland*) | Canale Cartaceo | Risparmio Online | Visto D Nazionale (Opzionale) | Riferimento Fonte |
| :--- | :---: | :---: | :---: | :---: | :---: |
| **Registrazione Cittadino UE (*EU_REG*)** | **53 €** | **53 €** | 0 € | Non applicabile | `[FI-SRC-01, FI-SRC-02]` |
| **Lavoro Ordinario (TTOL) - Prima Domanda** | **750 €** | **950 €** | - 200 € | Non disponibile | `[FI-SRC-01, FI-SRC-03]` |
| **Lavoro Ordinario (TTOL) - Rinnovo** | **230 €** | **430 €** | - 200 € | Non applicabile | `[FI-SRC-01]` |
| **Specialista / Carta Blu UE - Prima Domanda** | **530 €** | **630 €** | - 100 € | **+ 95 €** (Fast-track) | `[FI-SRC-01, FI-SRC-05]` |
| **Specialista / Carta Blu UE - Rinnovo** | **230 €** | **430 €** | - 200 € | Non applicabile | `[FI-SRC-01]` |
| **Studio Universitario (Maggiorenni) - Prima Domanda** | **600 €** | **750 €** | - 150 € | **+ 95 €** (Fast-track) | `[FI-SRC-01, FI-SRC-08]` |
| **Studio Universitario (Minorenni) - Prima Domanda** | **400 €** | **430 €** | - 30 € | + 95 € | `[FI-SRC-01]` |
| **Studio Universitario - Rinnovo** | **230 €** | **430 €** | - 200 € | Non applicabile | `[FI-SRC-01]` |
| **Ricercatore Scientifico (*Tutkija*) - Prima Domanda** | **530 €** | **630 €** | - 100 € | **+ 95 €** (Fast-track) | `[FI-SRC-01, FI-SRC-14]` |
| **Tirocinio (*Harjoittelu*) - Prima Domanda** | **530 €** | **630 €** | - 100 € | Non applicabile | `[FI-SRC-01, FI-SRC-13]` |
| **Post-Study Work (in Finlandia) - Rinnovo** | **230 €** | **430 €** | - 200 € | Non applicabile | `[FI-SRC-01, FI-SRC-11]` |
| **Post-Study Work (dall'Estero entro 5 anni)** | **750 €** | **800 €** | - 50 € | Non applicabile | `[FI-SRC-01, FI-SRC-11]` |
| **Working Holiday (Australia, Giappone, Canada)** | **530 €** | **630 €** | - 100 € | Non applicabile | `[FI-SRC-01, FI-SRC-15]` |
| **Working Holiday (Nuova Zelanda)** | **0 €** | **0 €** | 0 € (Esente) | Non applicabile | `[FI-SRC-01, FI-SRC-15]` |
| **Ricongiungimento Familiare (Adulto) - Prima Domanda** | **750 €** | **800 €** | - 50 € | + 95 € | `[FI-SRC-01, FI-SRC-16]` |
| **Ricongiungimento Familiare (Minore) - Prima Domanda** | **400 €** | **430 €** | - 30 € | + 95 € | `[FI-SRC-01, FI-SRC-16]` |
| **Permesso Permanente (P-lupa / P-EU) - Adulto** | **380 €** | **600 €** | - 220 € | Non applicabile | `[FI-SRC-01, FI-SRC-18]` |
| **Cittadinanza (*Kansalaisuus*) - Adulto** | **550 €** | **650 €** | - 100 € | Non applicabile | `[FI-SRC-01, FI-SRC-19]` |

*Spese accessorie obbligatorie da considerare:*
* Identificazione biometrica presso centri esterni VFS Global: circa **20 – 35 €** a persona.
* Carta d'Identità per Stranieri rilasciata dalla Polizia (*Poliisi*): **55 – 60 €** `[FI-SRC-23]`.
* Tassa semestrale sanitaria universitaria Kela YTHS per studenti: **36,80 € / semestre** `[FI-SRC-24]`.

---

## 4. Statuto Giuridico durante l'Attesa: Il Certificato di Pendenza (*Vireilläolotodistus*)

### Diritti Riconosciuti sul Territorio Finlandese
Ai sensi dell'articolo 40 § comma 3 dell'*Ulkomaalaislaki*:
* Se il candidato deposita la domanda di rinnovo (*jatkolupa*) **PRIMA della scadenza naturale del permesso di soggiorno in corso**, ha il diritto per legge di rimanere sul territorio e continuare a svolgere la propria attività lavorativa o di studio alle medesime condizioni del titolo precedente fino all'emissione della decisione definitiva `[FI-SRC-25]`.
* **La ricevuta telematica (*vireilläolotodistus*):** Scaricabile da *Enter Finland*, attesta la pendenza della domanda e la legittimità della permanenza in Finlandia.

### REGIME TASSATIVO DEI VIAGGI ALL'ESTERO (LA TRAPPOLA MORTALE)
* **La ricevuta NON è un documento di viaggio valido ai sensi del Codice Frontiere Schengen (Regolamento UE 2016/399)** `[FI-SRC-25]`.
* Se il lavoratore o studente lascia la Finlandia e il precedente tesserino di soggiorno scade mentre si trova all'estero:
  1. **Divieto di Imbarco:** Le compagnie aeree all'estero rifiutano l'imbarco per la Finlandia in assenza di un titolo di soggiorno o visto d'ingresso fisicamente valido `[FI-SRC-25]`.
  2. **Respingimento alle Frontiere Schengen:** In caso di transito o scalo in aeroporti europei (es. Francoforte, Parigi, Amsterdam), le guardie di frontiera degli altri Paesi Schengen contestano la presenza irregolare, negano il transito ed emettono provvedimenti di espulsione o segnalazioni SIS `[FI-SRC-25]`.
  3. **Nessun Visto di Rientro:** Le ambasciate finlandesi all'estero **non rilasciano visti di ritorno (*paluuviisumi*)** ai titolari di domande di rinnovo pendenti `[FI-SRC-25]`.
* **Regola di Condotta Imperativa:** **È SEVERAMENTE VIETATO USCIRE DALLA FINLANDIA** durante l'istruttoria di rinnovo se la data di rientro cade posteriormente alla scadenza stampata sul tesserino di soggiorno in possesso `[FI-SRC-25]`.

---

## 5. La Sequenza Burocratica Post-Arrivo e il Cortocircuito del BankID

Per insediarsi con successo, il nuovo arrivato (comunitario o extra-UE) deve seguire la sequenza logica dei passaggi post-arrivo, evitando i colli di bottiglia riscontrati sul campo:

```
[Arrivo in Finlandia]
        │
        ▼
[Step 1: DVV (Agenzia Dati Demografici)]
  • Registrazione anagrafica di persona
  • Rilascio codice personale (Henkilötunnus)
  • Attribuzione comune di residenza (Kotikunta) se contratto >= 12 mesi
        │
        ▼
[Step 2: Poliisi (Polizia Finlandese)]
  • Richiesta Carta d'Identità per Stranieri (Ulkomaalaisen henkilökortti)
  • Costo: 55-60 €; tempo: 1-2 settimane
  • Requisito indispensabile per superare i blocchi KYC delle banche
        │
        ▼
[Step 3: Banca Commerciale (Nordea / OP / Danske Bank)]
  • Apertura conto corrente ed emissione carta di debito
  • Consegna della Carta della Polizia per attivazione Verkkopankkitunnukset (BankID)
  • Sblocco accesso a Suomi.fi, OmaVero, OmaKanta, contratti affitto e luce
        │
        ▼
[Step 4: Verohallinto (Vero - Fisco)]
  • Richiesta e calcolo della carta fiscale (Verokortti)
  • Consegna al datore prima della prima busta paga (evita ritenuta fissa al 60%)
        │
        ▼
[Step 5: Kela (Previdenza e Sanità)]
  • Domanda di iscrizione alla sicurezza sociale e richiesta Kela-kortti
  • Pagamento tassa semestrale YTHS (36,80 €) per studenti universitari
```

### Le Trappole Operative Evidenziate:
1. **Il Paradosso del BankID:** Le banche finlandesi aprono conti base ma rifiutano i codici di home banking (*verkkopankkitunnukset*) sui passaporti esteri privi di chip verificato dalla polizia locale. Senza la carta dell'*ulkomaalaisen henkilökortti*, l'immigrato rimane escluso per mesi dai portali statali `[FI-SRC-23]`.
2. **La Ritenuta al 60% di Vero:** Se la carta fiscale non perviene al dipartimento paghe in tempo utile, la legge tributaria impone al datore di lavoro di trattenere il **60% dello stipendio lordo** come ritenuta cautelare `[FI-SRC-21]`.
3. **Le Nuove Tariffe Sanitarie (*Hyvinvointialueet* 2025-2026):** I ticket sanitari sono stati innalzati del 22,5% per le cure primarie (medico di base: **28,20 €**) e del 45% per la specialistica (visita ambulatoriale: **66,70 €**). Il tetto massimo annuo di spesa (*maksukatto*) per i residenti è di **762 €** `[FI-SRC-26]`. Senza *kotikunta* o TEAM, la contea fattura il costo reale integrale della prestazione (centinaia di euro).

---
*Fine della Guida Ufficiale Consolidata per la Finlandia. Documento approvato dal Council di Verifica in data 05/10/2026.*
