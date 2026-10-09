# Report Red Team: Audit Avversario Immigrazione, Frontiere e Conformità Legale — Federazione Russa (RU)
**Data di riferimento:** 05 Ottobre 2026  
**Autore:** AGENTE 2 — RED TEAM (Avversario) del Council di verifica immigrazione Russia  
**Destinatario:** Agente 1 (Coordinatore / Redattore Guida Russia), Council di Verifica  
**Ambito:** Identificazione sistematica di falle, trappole normative, automatismi sanzionatori, respingimenti alla frontiera, rischi di incriminazione penale ed espulsione per cittadini UE/Italia, UK, USA ed Extra-UE nell'ordinamento della Federazione Russa al 2026.

---

## 1. Executive Summary & Obiettivi dell'Audit Avversario

Il presente documento costituisce l'audit avversario del **Red Team** per la Federazione Russa al **5 ottobre 2026**. 
La missione esclusiva del Red Team è **smontare qualsiasi guida o consiglio turistico/professionale superficiale**, evidenziando i punti precisi in cui un viaggiatore, lavoratore espatriato, studente o nomade digitale, pur in perfetta buona fede, rischia concretamente:
1. **Il respingimento immediato alla frontiera (*непропуск*)** senza spiegazione formale, con blocco del passaporto, imbarco forzato a proprie spese e interdizione d'ingresso quinquennale o perpetua;
2. **L'arresto e l'incriminazione penale** per violazioni documentali (artt. 322.2, 322.3 УК РФ), reati doganali/valutari (art. 200.1 УК РФ), presunto contrabbando di medicinali (art. 229.1 УК РФ) o attività considerate ostili alla sicurezza dello Stato (artt. 205.1, 275, 280.3, 284.1 УК РФ);
3. **L'espulsione amministrativa forzata (*административное выдворение / водворение*)** con trattenimento nei centri speciali (ЦВСИГ) e bando da 3 a 5 anni (artt. 18.8 e 18.10 КоАП РФ), con automatismo rigido nelle città federali di Mosca e San Pietroburgo;
4. **L'inclusione immediata nel nuovo "Registro delle Persone Controllate" (*Реестр контролируемых лиц*) e l'assoggettamento al "Regime di Espulsione/Soggiorno Controllato"** (introdotto dalle Leggi Federali n. 248-ФЗ e 260-ФЗ), che comporta la paralisi civile assoluta: divieto di aprire o movimentare conti bancari, divieto di guidare o immatricolare auto, divieto di sposarsi, divieto di compravendita immobiliare e perquisizioni domiciliari di polizia senza mandato giudiziario;
5. **Il tracollo finanziario e la perdita di denaro** derivanti da blackout dei circuiti bancari internazionali, sequestri doganali per superamento della soglia di 10.000 USD contanti (Decreto Presidenziale n. 81) o truffe sui mercati clandestini di cambio/crypto P2P.

L'ecosistema normativo e di sicurezza della Federazione Russa nel 2026 non ammette alcuna tolleranza o discrezionalità bonaria: la gestione dei visti e dell'immigrazione è stata integralmente digitalizzata e collegata ai database federali del Ministero dell'Interno (МВД) e del Servizio di Sicurezza Federale (ФСБ). Qualsiasi scostamento di un solo giorno, di un timbro o di una dichiarazione non veritiera fa scattare conseguenze irreversibili.

---

## 2. Registro delle Trappole e Vulnerabilità Procedurali (Red Team Traps)

---

### FALLA RT-01: Trappola Geopolitica "Paesi Ostili" (Decreto 430-r) e Fine dell'Accordo di Facilitazione Visti UE-Russia (Legge 624-FZ)
* **Gravità:** **ALTA**
* **Descrizione della trappola:**  
  Molti viaggiatori europei, britannici e americani si basano su vecchie guide pre-2022 o credono che le procedure consolari siano rimaste semplici, economiche ed elastiche.  
  In realtà, a seguito del Decreto Governativo del 5 marzo 2022 n. 430-р (*Распоряжение Правительства РФ № 430-р*), tutti i 27 Stati membri dell'UE (inclusa l'Italia), il Regno Unito, gli Stati Uniti, il Canada, la Svizzera, la Norvegia, l'Australia e il Giappone sono formalmente classificati come **"Stati e territori esteri che commettono atti non amichevoli contro la Federazione Russa"** (*недружественные государства*).  
  Inoltre, l'Unione Europea ha sospeso l'accordo di facilitazione visti con la Decisione del Consiglio (UE) 2022/1500 del 9 settembre 2022. La Federazione Russa ha risposto simmetricamente approvando la **Legge Federale del 25 dicembre 2023 n. 624-ФЗ**, che ha revocato formalmente tutte le clausole agevolative per i cittadini dei paesi UE/SEE/Svizzera.
* **Conseguenze:**  
  1. **Abolizione della tariffa agevolata di 35 EUR:** La tassa consolare per il visto ordinario è stata quadruplicata. Ai sensi della Legge 624-ФЗ, si applicano ora le tariffe standard piene (tra gli 80 e i 160 EUR per l'emissione ordinaria in 10-20 giorni, e fino a 160-320 EUR per le procedure d'urgenza), a cui si sommano le commissioni di servizio dei Centri Visti (VFS Global / Artisa / Russia Visa Centre).
  2. **Soppressione dei visti a ingressi multipli quinquennali semplificati:** Non esistono più canali corsivi o accordi di favore per giornalisti, operatori culturali, scienziati, atleti o imprenditori europei. Ogni visto richiede inviti formali completi (tramite МВД o telex del МИД).
  3. **Chiusura dei canali consolari e attese estenuanti:** A causa delle reciproche espulsioni di personale diplomatico, le sezioni consolari russe in Italia (Roma, Milano, Genova, Palermo) e in Europa operano a organico ridotto. I tempi per ottenere un appuntamento possono superare le 4-8 settimane.
  4. **Restrizioni societarie e patrimoniali per cittadini di paesi ostili:** I Decreti Presidenziali n. 81 e n. 95 impongono che qualsiasi transazione immobiliare o societaria (acquisto quote, vendita immobili) effettuata da cittadini residenti in paesi dell'elenco 430-р richieda la preventiva autorizzazione speciale della *Commissione Governativa per il Controllo degli Investimenti Esteri*, rendendo le operazioni civili ordinarie estremamente complesse e bloccate per mesi.
* **Norma di Legge / Fonte Primaria:**  
  - *Распоряжение Правительства РФ от 05.03.2022 № 430-р* (Elenco degli Stati e territori non amichevoli);  
  - *Федеральный закон от 25.12.2023 № 624-ФЗ* "О приостановлении Российской Федерацией действия отдельных положений международных договоров РФ с европейскими государствами...";  
  - *Указы Президента РФ № 81 от 01.03.2022 и № 95 от 05.03.2022* (Restrizioni transazioni finanziarie e societarie per soggetti di paesi non amichevoli);  
  - *Decisione (UE) 2022/1500 del Consiglio del 9 settembre 2022*.
* **Istruzione Operativa Correttiva:**  
  - Programmare la richiesta del visto cartaceo con almeno 8 settimane di anticipo rispetto alla partenza programmata;  
  - Mettere a budget tra 180 e 350 EUR per richiedente tra tasse consolari, diritti di agenzia del centro visti e assicurazione medica conforme;  
  - Verificare che l'assicurazione sanitaria sia stipulata con una compagnia formalmente riconosciuta in Russia (che garantisca una copertura minima di 30.000 EUR per l'intera durata del soggiorno);  
  - Non ipotizzare aperture societarie o acquisti immobiliari senza preventiva consulenza notarile/legale su come ottenere il nulla osta della Commissione Governativa.

---

### FALLA RT-02: La Trappola Mortale dell'E-Visa (Max 16 Giorni di Calendario, Non Prorogabile, Non Convertibile)
* **Gravità:** **CRITICA**
* **Descrizione della trappola:**  
  L'E-Visa (visto elettronico unificato russo), operativa dal 1° agosto 2023 per i cittadini di 55 paesi (inclusi i cittadini italiani e di tutti gli Stati membri UE, **ma con esclusione categorica di cittadini di Stati Uniti, Regno Unito, Canada e Australia**), è uno dei punti a più alto rischio di respingimento e sanzione.  
  La trappola si articola su tre livelli letali:
  1. **Il tranello dei "16 giorni di calendario" (Calendar Day Trap):** Molti viaggiatori interpretano "16 giorni" come "16 periodi di 24 ore" (384 ore) o pianificano 16 notti. Questo errore è fatale. Il sistema di frontiera dell'FSB computa i giorni **esclusivamente come giorni di calendario solari (dalle 00:00 alle 23:59)**.  
     - *Esempio letale:* Se il passeggero atterra all'aeroporto di Sheremetyevo (Mosca) alle 23:45 del 1° ottobre, il 1° ottobre è conteggiato come **Giorno 1 intero** (consumato in 15 minuti!). Di conseguenza, il 16° giorno scade tassativamente alle 23:59 del 16 ottobre. Se il volo di rientro è programmato per il 17 ottobre alle ore 00:30, il passeggero si presenta al controllo passaporti con 31 minuti di ritardo, trovandosi formalmente in **overstay illegale (17° giorno)**.
  2. **Divieto assoluto di proroga sul territorio:** L'E-Visa non può essere prorogata per alcun motivo ordinario (voli cancellati, riunioni prolungate, cambi di programma). L'unica eccezione ammissibile è il ricovero ospedaliero d'urgenza in pericolo di vita certificato da struttura sanitaria statale o cause di forza maggiore naturale certificata (*art. 25.17 Legge Federale 114-ФЗ*).
  3. **Divieto assoluto di conversione in loco:** L'E-Visa è valida per un solo ingresso (single-entry) per finalità turistiche, d'affari o umanitarie. **Non può in alcun caso essere convertita in Russia in un visto per studio, lavoro o residenza temporanea (РВП/ВНЖ)**. Chi desidera lavorare o studiare non può usare l'E-Visa per "entrare e poi cambiare status".
* **Conseguenze:**  
  - Superare la mezzanotte del 16° giorno comporta l'arresto immediato al box del controllo passaporti dell'FSB;  
  - Il viaggiatore perde il volo, viene trattenuto nella zona sterile o scortato presso un ufficio di polizia giudiziaria di frontiera;  
  - Viene redatto processo verbale ai sensi dell'**art. 18.8 KoAP RF** (*КоАП РФ*). Nelle città di Mosca e San Pietroburgo, la sanzione prevede obbligatoriamente l'ammenda (da 5.000 a 7.000 RUB) e l'**espulsione amministrativa con divieto di reingresso nella Federazione Russa per 5 anni**;  
  - Lo straniero viene inserito nella *Blacklist* informatica del Servizio di Frontiera e non potrà più ottenere alcun visto o transitare in Russia per un quinquennio.
* **Norma di Legge / Fonte Primaria:**  
  - *Федеральный закон от 15.08.1996 № 114-ФЗ "О порядке выезда из РФ и въезда в РФ"* (art. 25.17);  
  - *Распоряжение Правительства РФ от 06.10.2020 № 2573-р* (con successive modifiche per l'elenco dei 55 paesi ammessi all'E-Visa);  
  - *Статья 18.8 КоАП РФ* (Violazione delle norme di ingresso e soggiorno nella RF);  
  - *Статья 27 Федерального закона № 114-ФЗ* (Divieto di reingresso per 5 anni).
* **Istruzione Operativa Correttiva:**  
  - Prima dell'acquisto del biglietto aereo, conteggiare il giorno di atterraggio come Giorno 1 e fissare il decollo del volo di uscita **entro e non oltre il 15° giorno di calendario** (mantenendo 24 ore piene di margine di sicurezza per scongiurare ritardi di coincidenze aeree via Istanbul, Belgrado o Dubai);  
  - I cittadini con solo passaporto USA, UK o canadese NON devono tentare di richiedere l'E-Visa (l'istanza online viene bloccata o rigettata, e il tentativo di imbarco viene negato al check-in aereo);  
  - Chiunque intenda cercare lavoro o iscriversi all'università deve richiedere il corrispondente visto per motivi di studio o di lavoro direttamente all'estero tramite il consolato o il centro visti, escludendo a priori l'E-Visa.

---

### FALLA RT-03: La Trappola del Lavoro su Visto Turistico o Commerciale/Business (Art. 18.8 e 18.10 KoAP RF)
* **Gravità:** **CRITICA**
* **Descrizione della trappola:**  
  Una convinzione estremamente diffusa tra professionisti, freelance, consulenti e aziende internazionali è che con un "Visto d'Affari / Commerciale" (*Деловая виза - Delovaya*) o con un visto turistico a ingressi multipli sia lecito svolgere consulenze, tenere corsi retribuiti, prestare attività per una filiale russa, fare smart working da un coworking a Mosca per clienti locali o stipulare contratti d'opera.  
  Questa prassi costituisce una violazione frontale e insanabile del diritto migratorio russo.
  - Il **visto commerciale (*деловая*)** autorizza unicamente: partecipazione a trattative commerciali preliminari, firma di accordi quadro intersocietari, partecipazione a fiere espositive, conferenze scientifiche o incontri istituzionali di rappresentanza.
  - **È tassativamente vietato** svolgere qualsiasi mansione operativa, produrre codice software per clienti russi, effettuare audit tecnici retribuiti, erogare lezioni pagate, prestare manodopera o ricevere compensi diretti da una persona fisica o giuridica russa.
* **Conseguenze:**  
  Ai sensi dell'ordinamento russo scattano simultaneamente due fattispecie di illecito amministrativo gravissimo:
  1. **Art. 18.8 parte 2 KoAP RF:** *Incoerenza tra lo scopo effettivo del soggiorno e lo scopo del visto dichiarato all'ingresso* (*Несоответствие заявленной цели въезда фактически осуществляемой деятельности*);
  2. **Art. 18.10 KoAP RF:** *Esercizio abusivo di attività lavorativa da parte di cittadino straniero privo di idoneo permesso di lavoro o brevetto* (*Незаконное осуществление иностранным гражданином трудовой деятельности в РФ*).  
  Nelle aree di **Mosca, San Pietroburgo, Regione di Mosca e Regione di Leningrado**, il secondo comma dell'art. 18.10 e i commi 4-5 dell'art. 18.8 prevedono una clausola di severità inderogabile:  
  - **Sanzione pecuniaria immediata (da 5.000 a 7.000 RUB)**;  
  - **Espulsione amministrativa forzata obbligatoria (*обязательное административное выдворение*) con divieto di reingresso per 5 anni (art. 27 Legge 114-ФЗ)**. Il giudice non ha alcuna facoltà discrezionale di comminare la sola sanzione economica;  
  - Lo straniero viene tradotto al Centro di Detenzione per Immigrati (*ЦВСИГ - Centro di Sakharovo*) in attesa del volo di espulsione forzata;  
  - **Ripercussioni sull'azienda/datore di lavoro ospitante (art. 18.15 KoAP RF):** Sanzione pecuniaria compresa tra 400.000 e 1.000.000 di RUB per ogni singolo lavoratore straniero abusivo, oppure sospensione immediata dell'attività d'impresa da 14 a 90 giorni.
* **Norma di Legge / Fonte Primaria:**  
  - *Федеральный закон от 25.07.2002 № 115-ФЗ "О правовом положении иностранных граждан в РФ"* (artt. 13 e 13.2);  
  - *Статья 18.8 части 2, 4, 5 КоАП РФ*;  
  - *Статья 18.10 части 1, 2 КоАП РФ*;  
  - *Статья 18.15 КоАП РФ* (Responsabilità del datore di lavoro);  
  - *Статья 27 Федерального закона № 114-ФЗ*.
* **Istruzione Operativa Correttiva:**  
  - Vietare categorized qualsiasi attività lavorativa, consulenziale o produttiva con visto turistico o visto per affari;  
  - Per operare professionalmente in Russia è obbligatorio ottenere lo status di **Specialista Altamente Qualificato (ВКС / HQS)** o un regolare **Permesso di Lavoro per Lavoratori Stranieri (*Разрешение на работу*)** abbinato a un visto di lavoro ordinario (*Рабочая виза*);  
  - Se un'azienda russa o filiale locale richiede la presenza di un tecnico straniero per montaggio, collaudo o manutenzione di macchinari importati, è indispensabile richiedere lo specifico visto per "montaggio e assistenza tecnica" (*Монтажные работы*), corredato da contratti di fornitura intergovernativi/doganali, senza mai utilizzare visti commerciali generici.

---

### FALLA RT-04: La Ghigliottina della Registrazione Migratoria (Миграционный учет) e le "Case di Gomma" (Art. 322.2/322.3 Codice Penale RF)
* **Gravità:** **CRITICA**
* **Descrizione della trappola:**  
  Ogni cittadino straniero che fa ingresso in Russia deve essere formalmente registrato presso il Ministero dell'Interno (МВД) entro **7 giorni lavorativi** dall'arrivo nel luogo di soggiorno temporaneo (*art. 20 Legge Federale 109-ФЗ*). Se si alloggia in una struttura ricettiva (hotel, albergo, ostello accreditato), la registrazione viene effettuata d'ufficio entro il primo giorno lavorativo successivo al check-in.  
  Tuttavia, quando lo straniero affitta un appartamento da privati o alloggia presso conoscenti, emergono due trappole catastrofiche:
  1. **Il rifiuto sistematico dei locatori privati russi:** Per legge, la registrazione migratoria è una notifica che può essere presentata **esclusivamente dalla parte ospitante (*принимающая сторона*)**, ossia dal proprietario dell'immobile, presentandosi di persona all'ufficio multifunzionale (МФЦ "Мои документы") o tramite il portale telematico statale *Gosuslugi* (*Госуслуги*).  
     Oltre il 70% dei proprietari di appartamenti in Russia rifiuta categoricamente di recarsi all'МФЦ o di registrare lo straniero. I motivi sono il timore (frequente tra gli evasori totali) che la registrazione faccia scattare controlli dell'Agenzia delle Entrate russa (ФНС) sui canoni di locazione non dichiarati, o il pregiudizio che registrare un cittadino straniero crei vincoli di prelazione sull'immobile.  
     Lo straniero non ha per legge alcun potere di registrarsi da solo presso un appartamento privato in locazione senza il pieno consenso e la cooperazione telematica/fisica del proprietario.
  2. **La truffa delle "Registrazioni Comprate" e delle "Case di Gomma" (*Резиновые квартиры*):** Trovandosi a ridosso del 7° giorno lavorativo senza registrazione, molti stranieri cercano annunci su internet (Telegram, VK, cartelli stradali) dove agenzie o intermediari offrono la "registrazione migratoria ufficiale" per 2.000 - 5.000 RUB consegnando un tagliando timbrato (*отрывной талон уведомления*).  
     Queste registrazioni vengono effettuate da organizzazioni criminali presso indirizzi in cui risultano fittiziamente registrate centinaia di persone (cosiddette *резиновые квартиры*).
* **Conseguenze:**  
  - **Rilievo Penale (artt. 322.2 e 322.3 del Codice Penale della Federazione Russa - УК РФ):** La registrazione fittizia costituisce reato penale punibile con la reclusione fino a 3 anni sia per l'ospitante sia per chi ne agevola l'uso fraudolento.
  - **Cancellazione unilaterale silenziosa da parte dell'МВД:** Il sistema informatico centralizzato dell'immigrazione (ЦБДУИГ МВД) individua automaticamente gli indirizzi "anomali" ed espunge d'ufficio lo straniero dai registri legali (*снятие с миграционного учета*) senza inviare alcuna comunicazione formale al cittadino.
  - **Arresto e divieto di reingresso:** Lo straniero, convinto di essere in regola poiché in possesso del tagliando cartaceo originale, viene fermato per un controllo ordinario di polizia o si presenta al controllo passaporti dell'aeroporto per partire. Al controllo terminale, il sistema restituisce lo stato di "irregolare non registrato". Scattano la denuncia per soggiorno illegale ex art. 18.8 KoAP RF, sanzione pecuniaria, espulsione convalidata per direttissima dal tribunale e interdizione d'ingresso per 3-5 anni.
* **Norma di Legge / Fonte Primaria:**  
  - *Федеральный закон от 18.07.2006 № 109-ФЗ "О миграционном учете иностранных граждан и лиц без гражданства в РФ"* (artt. 20, 21, 22);  
  - *Статьи 322.2 и 322.3 Уголовного кодекса РФ (УК РФ)* (Registrazione fittizia di cittadini stranieri);  
  - *Статья 18.8 КоАП РФ*;  
  - *Приказ МВД России от 10.12.2020 № 856* (Regolamento amministrativo sulla tenuta del registro migratorio).
* **Istruzione Operativa Correttiva:**  
  - Alloggiare rigorosamente in hotel o aparthotel regolarmente accreditati per i primi 10-15 giorni di soggiorno, richiedendo alla reception la stampa della ricevuta di registrazione (*отрывной талон*) con timbro originale dell'albergo entro 24 ore dal check-in;  
  - In caso di stipula di un contratto di locazione per lungo periodo, inserire nel contratto preliminare una clausola risolutiva espressa con penalità economica che vincoli il proprietario a effettuare la registrazione migratoria tramite l'МФЦ o *Gosuslugi* entro 48 ore dalla consegna delle chiavi;  
  - Se il proprietario dell'immobile rifiuta o accampa scuse, non versare caparre e interrompere immediatamente la trattativa;  
  - **NON comprare MAI tagliandi di registrazione da agenzie terze, canali Telegram o intermediari online.** Qualsiasi registrazione acquistata senza che si risieda fisicamente a quell'indirizzo è un reato penale e garantisce l'espulsione.

---

### FALLA RT-05: Il Regime Medico-Biometrico Tassativo: Dattiloscopia, Screening Malattie Infettive e Revoca del Soggiorno entro 3 Giorni (Legge 274-FZ)
* **Gravità:** **CRITICA**
* **Descrizione della trappola:**  
  Entrata a regime dal 29 dicembre 2021 in forza della **Legge Federale del 1° luglio 2021 n. 274-ФЗ**, questa disciplina impone a tutti i cittadini stranieri che intendono soggiornare in Russia:
  1. **Per motivi di lavoro:** Obbligo di completare la procedura entro **30 giorni di calendario** dalla data di ingresso nel territorio russo;
  2. **Per motivi diversi dal lavoro (studio, familiari di specialisti ВКС, soggiorni superiori a 90 giorni):** Obbligo di completare la procedura entro **90 giorni di calendario** dalla data di ingresso.
  
  La procedura comprende tre adempimenti congiunti e obbligatori:
  - **Fotografia biometrica e Dattiloscopia statale obbligatoria (rilievo delle 10 impronte digitali)** presso gli organi dell'МВД (a Mosca: Centro Migratorio Multifunzionale di Sakharovo; a SPb: Centro di Ulitsa Krasnogo Tekstilshchika), con rilascio del tesserino plastificato verde (*дактилоскопическая карта / "зеленая карта"*);
  - **Screening medico completo e invasivo** condotto esclusivamente presso policlinici municipali autorizzati dal Ministero della Salute russo (*Приказ Минздрава России № 1079н*), comprendente:
    - Test sierologico per infezione da HIV (*ВИЧ-инфекция*);
    - Radiografia/fluorografia dei polmoni per esclusione di Tubercolosi;
    - Visita dermatovenereologica e analisi per Sifilide e Lebbra (*болезнь Гансена*);
    - Test tossicologico delle urine per l'assunzione di sostanze stupefacenti, psicotrope e loro metaboliti (oppiacei, cannabinoidi, cocaina, anfetamine, barbiturici, benzodiazepine).
  - **L'incubo della scadenza annuale:** A seguito della revisione delle direttive sanitarie, i certificati medici hanno validità massima di **1 anno**. Al termine dei 12 mesi, lo straniero deve **ripetere integralmente l'intero ciclo di esami medici entro 30 giorni di calendario** e ridepositare i referti all'МВД.
* **Conseguenze:**  
  - **Trappola farmacologica del test antidroga:** Farmaci d'uso comune in Europa o negli USA contenenti sostanze psicotrope (come farmaci per il deficit di attenzione/ADHD a base di metilfenidato/anfetamine, analgesici a base di codeina o forti tranquillanti/ansiolitici a base di benzodiazepine) risultano positivi al test tossicologico. In assenza di prescrizione medica tradotta con asseverazione consolare russa e dichiarazione doganale all'ingresso, la positività comporta la bocciatura medica immediata e l'apertura di un fascicolo penale per traffico illecito di stupefacenti (*art. 229.1 УК РФ*).
  - **In caso di mancato rispetto delle scadenze o esito positivo:** Ai sensi dell'**art. 5 comma 3 della Legge 115-ФЗ**, la mancata effettuazione della dattiloscopia o degli esami medici entro i termini perentori determina la **riduzione immediata della durata del soggiorno temporaneo (*сокращение срока временного пребывания*)**.
  - Ai sensi dell'**art. 31 della Legge 115-ФЗ**, il visto e il permesso di lavoro vengono annullati d'ufficio e lo straniero riceve la notifica ufficiale di dover **lasciare la Russia entro 3 giorni di calendario**. Chi non ottempera entro 72 ore viene arrestato, trasferito nel centro di detenzione e deportato con interdizione quinquennale.
  - In caso di accertamento di positività all'HIV o alla lebbra, il Rospotrebnadzor emette un decreto di **"indesiderabilità della permanenza" (*нежелательность пребывания*) ai sensi dell'art. 25.10 Legge 114-ФЗ**, che sancisce l'espulsione immediata e il bando a tempo indeterminato.
* **Norma di Legge / Fonte Primaria:**  
  - *Федеральный закон от 01.07.2021 № 274-ФЗ "О внесении изменений в Федеральный закон "О правовом положении иностранных граждан в РФ" и Федеральный закон "О государственной дактилоскопической регистрации в РФ"*;  
  - *Статья 5 часть 3 и Статья 31 Федерального закона № 115-ФЗ*;  
  - *Приказ Минздрава России от 19.11.2021 № 1079н* (Regolamento degli esami medici per stranieri);  
  - *Статья 25.10 Федерального закона № 114-ФЗ* (Provvedimento di soggiorno indesiderato).
* **Istruzione Operativa Correttiva:**  
  - Appena entrati in Russia, prenotare l'accesso al Centro Migratorio autorizzato entro i primi 7-10 giorni lavorativi, senza attendere la scadenza del 30° o 90° giorno;  
  - Interrompere l'assunzione di qualsiasi farmaco o integratore non strettamente indispensabile nelle due settimane antecedenti le analisi delle urine. Per i farmaci salvavita contenenti sostanze controllate, viaggiare esclusivamente con cartella clinica originale, prescrizione del medico specialista, apostille e traduzione asseverata da notaio della Federazione Russa, notificando i farmaci alla dogana all'ingresso;  
  - Impostare un promemoria perentorio a 10 mesi dall'effettuazione dei test per avviare il rinnovo annuale degli esami medici prima della scadenza dei 365 giorni.

---

### FALLA RT-06: La Nuova Soglia Retributiva HQS / VKS (Legge Federale 316-FZ) e la Trappola dei 30 Giorni di Ritiro
* **Gravità:** **CRITICA**
* **Descrizione della trappola:**  
  La categoria degli Specialisti Altamente Qualificati (ВКС / HQS), tradizionalmente la corsia preferenziale per manager ed espatriati occidentali (garantendo visti triennali multipli esenti da quote, estendibili anche ai familiari), ha subito una riforma drastica con la **Legge Federale del 10 luglio 2023 n. 316-ФЗ**, entrata pienamente in vigore il **1° marzo 2024**.  
  La riforma ha introdotto due trappole procedurali letali:
  1. **Innalzamento della soglia salariale e passaggio al computo trimestrale fisso:**  
     La retribuzione minima obbligatoria è stata aumentata da 167.000 RUB/mese a **non meno di 750.000 RUB lordi per trimestre di calendario** (*не менее 750 000 рублей из расчета за один квартал*), equivalente a una media mensile di 250.000 RUB.  
     La rendicontazione deve essere notificata all'МВД dal datore di lavoro su base trimestrale (entro l'ultimo giorno lavorativo del mese successivo al trimestre).  
     - *La trappola dell'aspettativa o malattia:* Se il dipendente usufruisce di un periodo di congedo non retribuito (*отпуск без сохранения заработной платы*), di malattia prolungata non coperta integralmente dall'azienda o se il contratto prevede premi a conguaglio annuale, la retribuzione erogata nel singolo trimestre solare rischia di scendere al di sotto dei 750.000 RUB.
  2. **Il termine perentorio di 30 giorni per il ritiro del permesso di lavoro plastificato:**  
     Ai sensi della Legge 316-ФЗ, il dipendente HQS è tenuto a presentarsi **personalmente presso gli uffici territoriali dell'МВД entro 30 giorni di calendario** dalla data di adozione della decisione favorevole per ritirare il permesso di lavoro plastificato. Il termine può essere prorogato una sola volta per un massimo di ulteriori 30 giorni previa tempestiva istanza scritta motivata (per motivi di salute o trasferta), per un limite massimo invalicabile di 60 giorni.
* **Conseguenze:**  
  - **Mancato rispetto della soglia retributiva trimestrale:**  
    - Lo straniero perde retroattivamente lo status di HQS; il suo permesso di lavoro e il visto di lavoro triennale vengono revocati d'ufficio per sé e per l'intero nucleo familiare al seguito;  
    - Il datore di lavoro viene sanzionato ai sensi dell'art. 18.15 KoAP RF con ammende da 400.000 a 1.000.000 di RUB;  
    - L'azienda subisce la sanzione accessoria devastante del **divieto interdittivo assoluto di 2 anni dall'assunzione di qualsiasi lavoratore HQS** (*art. 13.2 comma 11 Legge 115-ФЗ*).
  - **Mancato ritiro entro i termini del tesserino plastificato:**  
    - Se lo straniero non si reca a ritirare il tesserino entro i 30 giorni (o 60 in caso di proroga autorizzata), la decisione di rilascio del permesso di lavoro viene **annullata con archiviazione d'ufficio**. La domanda di visto viene cancellata, costringendo l'azienda a pagare nuovamente tutte le imposte di bollo e a ricominciare la procedura dall'inizio.
* **Norma di Legge / Fonte Primaria:**  
  - *Федеральный закон от 10.07.2023 № 316-ФЗ "О внесении изменений в статью 13-2 Федерального закона "О правовом положении иностранных граждан в РФ"*;  
  - *Статья 13.2 Федерального закона № 115-ФЗ*;  
  - *Статья 18.15 КоАП РФ*.
* **Istruzione Operativa Correttiva:**  
  - Strutturare il contratto di assunzione HQS fissando uno stipendio base mensile contrattuale minimo non inferiore a 260.000 RUB (per avere un cuscinetto di sicurezza rispetto all'inflazione o a festività non retribuite), escludendo clausole di variabilità legate al raggiungimento di target trimestrali;  
  - Vietare categorized la fruizione di congedi non retribuiti che possano comprimere l'erogazione lorda trimestrale al di sotto della soglia inderogabile di 750.000 RUB;  
  - Appena inoltrata la documentazione all'МВД, pianificare la presenza fisica dello specialista in Russia per garantire il ritiro del permesso di lavoro plastificato entro i primi 15-20 giorni dalla notifica di approvazione.

---

### FALLA RT-07: Il Pacchetto Riforme 2024-2026: Sostituzione del 90/180 con 90 Giorni per Anno Solare, Regime di Espulsione e Biometria Frontaliera Obbligatoria (Decreto 1510)
* **Gravità:** **CRITICA**
* **Descrizione della trappola:**  
  Nel triennio 2024-2026, la Federazione Russa ha varato la più profonda e repressiva riforma dell'ordinamento migratorio contemporaneo, concretizzatasi nelle **Leggi Federali dell'8 agosto 2024 n. 260-ФЗ e n. 248-ФЗ** e nel **Decreto del Governo della RF del 7 novembre 2024 n. 1510**.  
  L'impatto sul viaggiatore o straniero comprende tre pilastri operativi:
  1. **Il nuovo massimale di 90 giorni per ANNO SOLARE (Legge 260-ФЗ, in vigore dal 1° gennaio 2025):**  
     Per tutti i cittadini stranieri che beneficiano dell'ingresso senza visto (es. cittadini di Bielorussia, Armenia, Kazakistan, Israele, Emirati Arabi Uniti, Serbia, ecc.), il precedente limite di soggiorno mobile di "90 giorni su 180" è stato formalmente abrogato. Dal 1° gennaio 2025, il tetto massimo inderogabile è fissato in **non più di 90 giorni totali cumulativi all'interno di un singolo anno solare (dal 1° gennaio al 31 dicembre)**.  
     - *La fine definitiva dei "Visa Run":* Chiunque utilizzi i 90 giorni nei primi mesi dell'anno non può più uscire per una notte in Kazakistan o Georgia e rientrare: per tutto il resto dell'anno solare non ha più alcun diritto di accesso senza visto fino al 1° gennaio dell'anno successivo.
  2. **Il "Regime di Espulsione / Soggiorno Controllato" (*Режим высылки*) e il "Registro delle Persone Controllate" (*Реестр контролируемых лиц*) (Legge 248-ФЗ):**  
     Per gli stranieri il cui titolo di soggiorno è scaduto, è stato revocato o che hanno commesso illeciti amministrativi, entra in funzione un regime speciale ad efficacia immediata. Il nominativo viene inserito in un registro telematico pubblico gestito dall'МВД. L'inclusione comporta una condizione automatica di "morte civile" e privazione di diritti:
     - Blocco dei conti correnti bancari (consentito solo il prelievo di una quota fissa mensile per alimenti di prima necessità pari al minimo vitale);
     - Divieto assoluto di aprire nuovi conti o richiedere carte di credito;
     - Divieto di compravendita o registrazione di immobili e autoveicoli;
     - Sospensione della patente e divieto di condurre veicoli a motore sul territorio russo;
     - Divieto assoluto di contrarre matrimonio civile in Russia;
     - **Facoltà per le forze dell'ordine di accedere al domicilio dello straniero senza autorizzazione dell'autorità giudiziaria;**
     - **Potere di espulsione amministrativa emesso direttamente dalla polizia (*МВД*) in via stragiudiziale**, senza necessità di udienza o convalida in tribunale.
  3. **La Sperimentazione Biometrica Obbligatoria alle Frontiere di Mosca (Decreto del Governo n. 1510 del 07.11.2024):**  
     Avviato il 1° dicembre 2024 e operante a pieno regime nel 2025-2027 negli aeroporti del nodo di Mosca (Sheremetyevo - SVO, Domodedovo - DME, Vnukovo - VKO, Zhukovsky - ZIA) e al valico automobilistico di Mashtakovo (Oblast di Orenburg). Tutti i cittadini stranieri in transito devono sottostare al rilievo fotografico e dattiloscopico completo di tutte le dita direttamente alle postazioni di controllo passaporti, con obbligo di pre-registrazione dati tramite piattaforma ministeriale.
* **Conseguenze:**  
  - Qualsiasi superamento anche di un solo giorno della franchigia temporale (overstay) attiva l'inserimento istantaneo nel *Реестр контролируемых лиц*;  
  - La carta bancaria russa viene bloccata, il contratto di affitto non può essere rinnovato, le patenti vengono invalidate e lo straniero può essere fermato a casa o sul posto di lavoro dalla polizia ed espulso entro 24-48 ore;  
  - Le nuove postazioni biometriche aeroportuali identificano con precisione biometrica facciale chiunque abbia subito precedenti decreti di espulsione o divieti d'ingresso con altre identità o passaporti precedenti.
* **Norma di Legge / Fonte Primaria:**  
  - *Федеральный закон от 08.08.2024 № 260-ФЗ "О внесении изменений в отдельные законодательные акты Российской Федерации"*;  
  - *Федеральный закон от 08.08.2024 № 248-ФЗ "О внесении изменений в Кодекс РФ об административных правонарушениях"*;  
  - *Постановление Правительства РФ от 07.11.2024 № 1510* (Esperimento raccolta biometrica stranieri aeroporti Mosca).
* **Istruzione Operativa Correttiva:**  
  - Per i soggiorni in esenzione da visto, istituire un diario di viaggio rigoroso: sommare ogni singolo giorno trascorso dal 1° gennaio e pianificare l'uscita definitiva non oltre l'85° giorno cumulativo dell'anno solare;  
  - Non tentare mai uscite e rientri transfrontalieri (visa-run) a ridosso dei 90 giorni;  
  - Non consentire ad alcun documento (visto, migratsionka, registrazione) di scadere: procedere al rinnovo o alla partenza con almeno 20 giorni di anticipo per evitare la segnalazione nel *Реестр контролируемых лиц*;  
  - Per gli arrivi negli aeroporti di Mosca (SVO, DME, VKO), mettere in conto fino a 3-5 ore aggiuntive di controlli biometrici e di frontiera, pre-compilando accuratamente i dati anagrafici richiesti prima dell'imbarco.

---

### FALLA RT-08: Sanzioni Finanziarie, Blackout Bancario e Dogana Valutaria (Decreto Presidenziale n. 81)
* **Gravità:** **CRITICA**
* **Descrizione della trappola:**  
  Molti viaggiatori occidentali atterrano in Russia convinti di poter prelevare rubli con carte di credito Visa o Mastercard, di poter pagare con Apple Pay/Google Pay o di poter portare con sé o esportare liberamente contanti senza dichiarazione. La realtà finanziaria in Russia è un terreno minato da sanzioni occidentali e contromisure russe:
  1. **Blackout totale delle carte occidentali:** Dal marzo 2022, Visa, Mastercard, American Express e Maestro emesse fuori dalla Russia sono totalmente scollegate dalla rete di pagamento nazionale russa (NSPK). **Nessun bancomat russo eroga contante a carte estere, nessun POS accetta pagamenti e nessun servizio online locale (Yandex Taxi, Aeroflot, Ferrovie Russe RZD, delivery) accetta carte occidentali.**
  2. **Il fallimento delle carte UnionPay estere:** Molti tentano di ovviare portando carte UnionPay emesse in Europa o UK. Oltre il 60-70% dei POS commerciali russi rifiuta queste carte, perché i terminali sono gestiti da banche russe primarie colpite da sanzioni dirette SDN (Sberbank, VTB, Alfa-Bank, PSB), le cui reti bloccano l'interconnessione con circuiti internazionali.
  3. **Il tetto assoluto di 10.000 USD per l'esportazione di valuta (Decreto n. 81):** Ai sensi del Decreto Presidenziale del 1° marzo 2022 n. 81, **è fatto divieto assoluto di esportare dalla Federazione Russa valuta contante estera (USD, EUR, GBP, CHF) per un importo complessivo superiore al controvalore di 10.000 Dollari USA a persona**.  
     - *Il tranello:* Questo limite non è superabile con dichiarazione doganale! È un divieto di esportazione assoluto. Chi si presenta all'imbarco di uscita con 10.000 Euro in contanti (che al cambio supera 10.000 USD) o con 10.500 USD commette un illecito doganale gravissimo.
  4. **Importazione di contanti oltre i 10.000 USD:** All'ingresso, qualsiasi somma in contanti (in qualsiasi valuta) pari o superiore a 10.000 USD deve essere tassativamente dichiarata per iscritto al funzionario doganale transitando dal *Canale Rosso* (*Красный коридор*). Attraversare il *Canale Verde* (*Зеленый коридор*) con somme superiori a 10.000 USD configura l'omessa dichiarazione o contrabbando.
  5. **La trappola dei canali clandestini di cambio e Crypto P2P:** L'impossibilità di fare bonifici SWIFT spinge molti a utilizzare gruppi Telegram per lo scambio contanti P2P o scambi di criptovalute (USDT) verso carte russe di conoscenti. Tali transazioni attivano sistematicamente il blocco antifrode bancario ex **Legge Federale 115-ФЗ (Antiriciclaggio)**, esponendo lo straniero a indagini penali per esercizio abusivo di attività bancaria (*art. 172 УК РФ*).
* **Conseguenze:**  
  - Se un viaggiatore atterra senza contanti fisici, non ha alcuna possibilità di acquistare un biglietto della metropolitana, pagare un taxi o acquistare cibo;  
  - L'esportazione illecita di valuta oltre i 10.000 USD comporta il **sequestro immediato della quota eccedente**, sanzioni pecuniarie amministrative dal 50% al 200% dell'importo (*art. 16.4 KoAP RF*) o, in caso di importi elevati, l'incriminazione penale per contrabbando valutario (*art. 200.1 УК РФ*), con reclusione fino a 4 anni;  
  - Il blocco della carta bancaria russa per movimentazioni P2P sospette congela i fondi indefinitamente e impedisce il pagamento dell'affitto e delle tasse.
* **Norma di Legge / Fonte Primaria:**  
  - *Указ Президента РФ от 01.03.2022 № 81 "О дополнительных временных мерах экономического характера по обеспечению финансовой стабильности РФ"*;  
  - *Таможенный кодекс Евразийского экономического союза (ТК ЕАЭС)* (artt. 260, 261);  
  - *Статья 16.4 КоАП РФ* (Violazione delle norme di dichiarazione doganale della valuta);  
  - *Статья 200.1 Уголовного кодекса РФ (УК РФ)* (Contrabbando di contanti);  
  - *Федеральный закон от 07.08.2001 № 115-ФЗ "О противодействии легализации доходов..."*.
* **Istruzione Operativa Correttiva:**  
  - Portare con sé banconote contanti intatte in Euro o Dollari USA (per i dollari: rigorosamente tagli da 50 o 100 USD emessi dopo il 2013, privi di abrasioni, macchie, fori o timbri di banche di cambio, che gli sportelli russi rifiutano categoricamente);  
  - Accertarsi che il valore totale dei contanti sia **rigorosamente inferiore a 9.500 USD equivalenti** al momento dell'ingresso e dell'uscita, per evitare oscillazioni di cambio sfavorevoli ai varchi doganali;  
  - Non oltrepassare mai il canale verde doganale con più di 10.000 USD senza aver compilato la dichiarazione passeggeri;  
  - Non appena giunti sul posto, cambiare i contanti presso sportelli bancari fisici accreditati (es. Sber, VTB, T-Bank, Raiffeisen) conservando le ricevute di cambio;  
  - Aprire una carta di debito russa su circuito *Mir* (es. presso T-Bank o Sberbank presentando passaporto, traduzione notarile in russo, carta di migrazione e tagliando di registrazione), trasferendo rubli per le spese quotidiane e collegandola all'applicazione Yandex Go per taxi e trasporti.

---

### FALLA RT-09: Lo Scoglio della Filtrazione FSB: Ispezione Forense dei Dispositivi Digitali, Chat Telegram, Donazioni e Respingimento Inappellabile (Art. 27 Legge 114-FZ)
* **Gravità:** **CRITICA**
* **Descrizione della trappola:**  
  Al momento del passaggio ai valichi di frontiera internazionali (aeroporti di Mosca Sheremetyevo, Vnukovo, Domodedovo, San Pietroburgo Pulkovo, o valichi terrestri aperti con Estonia o Georgia), la Polizia di Frontiera dell'FSB (*Пограничная служба ФСБ России*) adotta controlli di sicurezza intensivi di secondo livello (comunemente definiti **"seconda linea" o procedura di filtrazione**).  
  Questa procedura viene applicata in modo mirato e sistematico ai titolari di passaporti di paesi occidentali considerati non amichevoli (UE, Italia, UK, USA) e a chiunque abbia luogo di nascita in Ucraina, legami di parentela ucraini o timbri di ingresso in Ucraina sul passaporto.
  - Lo straniero viene prelevato dalla fila del controllo passaporti e condotto in uffici chiusi per interrogatori che durano regolarmente dalle 2 alle 8 ore;  
  - Gli agenti richiedono l'esibizione di tutti i dispositivi informatici al seguito (smartphone, tablet, laptop) e la digitazione delle password di sblocco;  
  - I dispositivi vengono sottoposti a scansione forense mediante software di estrazione dati: vengono passate al setaccio le chat di Telegram, WhatsApp, Signal, la cronologia del browser, i messaggi cancellati (compresi i backup iCloud/Google Drive), la cartella "Eliminati di recente" della galleria fotografica, i contatti telefonici e i feed di social media (Instagram, Facebook, X, LinkedIn, VK).
* **Conseguenze e Reati Penali Immediati:**  
  Il ritrovamento di elementi ritenuti ostili fa scattare conseguenze drammatiche:
  1. **Donazioni a fondi ucraini o a ONG ostili:** Se nella cronologia bancaria, nell'email o nei messaggi viene accertata una donazione economica a fondi di sostegno all'Ucraina (es. *Come Back Alive*, *United24* o enti di supporto umanitario a rifugiati ucraini) — anche per un importo irrisorio di 10 EUR risalente a diversi anni prima — le autorità contestano:
     - Per i cittadini con doppia cittadinanza russa: il delitto di **Alto Tradimento (*Государственная измена - art. 275 УК РФ*)**, punito con pene fino all'ergastolo;
     - Per i cittadini stranieri: l'imputazione di **Finanziamento del terrorismo o estremismo (*art. 205.1 УК РФ*)** o partecipazione a organizzazioni indesiderabili (*art. 284.1 УК РФ*), con arresto immediato e trasferimento in carcere di massima sicurezza (Lefortovo).
  2. **Contenuti contrari all'operazione militare o critiche al governo:** Post, meme, like o messaggi inoltrati su Telegram che criticano l'esercito russo configurano il reato di **"Screditamento delle Forze Armate della RF" (*art. 20.3.3 KoAP RF* e *art. 280.3 УК РФ*)**.
  3. **Iscrizione a canali media vietati:** Risultare iscritti a testate giornalistiche o canali Telegram dichiarati "organizzazioni indesiderabili" (*нежелательные организации* - es. Meduza, Bellingcat, Proekt, Novaya Gazeta Europe) espone a sanzioni e fermo giudiziario.
  4. **Il decreto di respingimento inappellabile (*Непропуск / Отказ во въезде*):**  
     Ai sensi dell'**art. 27 comma 1 della Legge Federale 114-ФЗ**, la Polizia di Frontiera dell'FSB ha il potere insindacabile di negare l'ingresso a qualsiasi cittadino straniero *"per motivi di difesa della capacità militare o di sicurezza dello Stato, dell'ordine pubblico o della tutela della salute"*.  
     Non viene fornita alcuna motivazione verbale o scritta dettagliata (sul passaporto viene apposto un timbro di diniego o viene consegnato un foglio di notifica standard).  
     Lo straniero viene rinchiuso nella zona sterile dell'aeroporto senza accesso ai bagagli registrati, il passaporto viene ritirato e consegnato direttamente al comandante del volo di rimpatrio forzato verso lo scalo di provenienza (Istanbul, Belgrado, Dubai, ecc.). Le compagnie aeree non riconoscono alcun rimborso, e il soggetto riceve un divieto di ingresso automatico che varia da 5 anni fino al bando perpetuo a vita.
* **Norma di Legge / Fonte Primaria:**  
  - *Федеральный закон от 15.08.1996 № 114-ФЗ "О порядке выезда из РФ и въезда в РФ"* (artt. 26 e 27);  
  - *Статьи 205.1, 275, 280.3, 284.1 Уголовного кодекса РФ (УК РФ)*;  
  - *Статья 20.3.3 Кодекса РФ об административных правонарушениях (КоАП РФ)*.
* **Istruzione Operativa Correttiva:**  
  - Prima di partire, condurre una bonifica integrale dei dispositivi digitali: eliminare l'iscrizione a qualsiasi canale informativo, gruppo di discussione o chat su Telegram classificati dalla legislazione russa come "indesiderabili", "estremisti" o "agenti stranieri";  
  - Svuotare la cronologia di navigazione, eliminare file memorizzati nella cartella cestino ("Eliminati di recente") e disattivare la sincronizzazione automatica di gallerie cloud contenenti immagini o screenshot a sfondo politico o militare;  
  - **Se si sono effettuate donazioni finanziarie a organizzazioni ucraine o fondi esteri pro-Ucraina, NON intraprendere alcun viaggio nella Federazione Russa per nessun motivo.** Il rischio di arresto per reati contro la sicurezza dello Stato è quasi certo;  
  - Tenere un comportamento assolutamente calmo, collaborativo e formale con i funzionari di frontiera. Avere a portata di mano stampati in formato cartaceo la conferma dell'hotel, il biglietto di rientro, l'assicurazione medica e la lettera d'invito consolare.

---

### FALLA RT-10: La Trappola della Carta di Migrazione (Миграционная карта) e l'Incoerenza dello "Scopo del Viaggio" (Цель въезда)
* **Gravità:** **CRITICA**
* **Descrizione della trappola:**  
  All'ingresso nella Federazione Russa, ogni cittadino straniero riceve al varco passaporti la **Carta di Migrazione (*Миграционная карта / Migratsionka*)**, un modulo cartaceo in due parti (A e B). La parte A viene trattenuta dalla guardia di frontiera, mentre la parte B timbrata viene consegnata al viaggiatore e deve essere riconsegnata all'uscita dal paese.  
  La trappola risiede nell'indicazione del campo **"Scopo della visita" (*Цель въезда*)**:  
  - Se il viaggiatore ha un visto per lavoro (*Рабочая*) o per studio (*Учебная*), ma per errore materiale del viaggiatore o per distrazione dell'operatore di frontiera viene spuntata la casella "Turismo" (*Туризм*) o "Commerciale" (*Деловая*), **è assolutamente impossibile correggere la carta di migrazione all'interno del paese**.  
  - Senza una carta di migrazione con l'esatta dicitura "Lavoro" (*Работа*), l'МВД non procederà al rilascio del permesso di lavoro né alla registrazione migratoria per lavoro. Senza la dicitura "Studio" (*Учеба*), l'università non può perfezionare l'immatricolazione né estendere il visto di studio.
* **Conseguenze:**  
  - Lo straniero si trova bloccato in un vicolo cieco burocratico: per correggere lo scopo del viaggio è costretto a **lasciare fisicamente la Russia, volare all'estero e rientrare**, spendendo migliaia di euro e rischiando di incappare nei ritardi o nei controlli di seconda linea dell'FSB;  
  - Se lo straniero perde la parte B della carta di migrazione durante il soggiorno, non può effettuare la registrazione in nessun hotel o appartamento e non può rinnovare visti. La richiesta di duplicato all'МВД richiede giorni e, se tentata all'aeroporto in fase di partenza, causa la perdita del volo e sanzioni amministrative.
* **Norma di Legge / Fonte Primaria:**  
  - *Постановление Правительства РФ от 16.08.2004 № 413 "О миграционной карте"*;  
  - *Статья 18.8 КоАП РФ*.
* **Istruzione Operativa Correttiva:**  
  - Al varco di frontiera, prima di allontanarsi dal box del controllo passaporti, controllare riga per riga la carta di migrazione appena stampata dal funzionario: verificare che il cognome, il nome, il numero di passaporto e soprattutto la casella **"Цель въезда"** corrispondano esattamente alla causale del proprio visto (*Работа* per lavoro, *Учеба* per studio, *Туризм* per turismo);  
  - Se si nota un errore, pretendere immediatamente dall'agente la ristampa corretta prima di varcare la linea di frontiera;  
  - Custodire il tagliando cartaceo originale della migratsionka all'interno del passaporto per tutta la durata del soggiorno, conservandone una copia fotografica sul telefono.

---

### FALLA RT-11: La Trappola delle Traduzioni Notarili Russe e dell'Apostille sui Documenti Stranieri
* **Gravità:** **ALTA**
* **Descrizione della trappola:**  
  Molti cittadini europei e stranieri arrivano in Russia muniti di certificati (certificato di nascita, matrimonio, casellario giudiziale, titoli di studio, lauree, deleghe e procure) legalizzati in patria con traduzione asseverata presso un tribunale italiano o europeo.  
  Tale documentazione è **totalmente priva di efficacia giuridica e inaccettabile per le autorità russe (МВД, Ministero dell'Istruzione, notai, banche)**.
  - Per essere valido in Russia, ogni atto pubblico rilasciato da uno Stato estero deve essere munito di **Apostille de L'Aia** (rilasciata in Italia dalla Prefettura o dalla Procura della Repubblica competente per territorio);  
  - La traduzione dell'intero documento e dell'Apostille deve essere obbligatoriamente asseverata da un **Notaio iscritto all'ordine professionale della Federazione Russa (*нотариальный перевод*)**, oppure asseverata presso la sezione consolare dell'Ambasciata Russa all'estero.
* **Conseguenze:**  
  - Rigetto istantaneo di qualsiasi fascicolo di domanda per permesso di soggiorno (РВП, ВНЖ), visto di lavoro HQS, immatricolazione universitaria o apertura di conti societari;  
  - Se i termini perentori del visto stanno per scadere, la necessità di rispedire i documenti in Italia per l'Apostille o di rifare le traduzioni fa decadere i termini legali, trascinando il cittadino nello status di overstay irregolare e conseguente espulsione.
* **Norma di Legge / Fonte Primaria:**  
  - *Конвенция, отменяющая требование легализации иностранных официальных документов (Гаага, 5 октября 1961 г.)*;  
  - *Основы законодательства Российской Федерации о нотариате от 11.02.1993 № 4462-1* (artt. 80, 81).
* **Istruzione Operativa Correttiva:**  
  - Apporre l'Apostille su tutti i documenti originali nel proprio paese d'origine prima della partenza;  
  - Non spendere denaro per traduzioni asseverate in tribunali europei: effettuare la traduzione giurata in lingua russa direttamente sul territorio della Federazione Russa tramite agenzie di traduzione collegate a notai statali russi;  
  - Verificare che la traslitterazione in caratteri cirillici del proprio nome e cognome nella traduzione notarile corrisponda esattamente a quella indicata sul visto russo, lettera per lettera.

---

## 3. Matrice Sinottica delle Trappole Red Team per la Russia (2026)

| ID | Titolo della Trappola | Gravità | Normativa di Riferimento | Conseguenza Principale in Caso di Errore | Azione Preventiva Tassativa |
|---|---|---|---|---|---|
| **RT-01** | Paesi Ostili & Sospensione Facilitazione Visti | **ALTA** | Legge 624-ФЗ, Decr. 430-р, Decr. 81/95 | Tariffe quadruplicate, rigetto, blocco compravendite | Anticipare 8 settimane, budget maggiorato, inviti МВД |
| **RT-02** | E-Visa 16 Giorni di Calendario & Overstay | **CRITICA** | Legge 114-ФЗ art. 25.17, KoAP 18.8, 27 114-ФЗ | Overstay al 17° giorno, espulsione, bando 5 anni | Volo di uscita entro il 15° giorno solare; no UK/USA |
| **RT-03** | Lavoro su Visto Turistico o Commerciale | **CRITICA** | Legge 115-ФЗ art. 13/13.2, KoAP 18.8/18.10/18.15 | Espulsione automatica a Mosca/SPb, multa 1M RUB datore | Solo status HQS o visto di lavoro ordinario con quota |
| **RT-04** | Registrazione 7 Giorni & "Case di Gomma" | **CRITICA** | Legge 109-ФЗ art. 20, Cod. Penale 322.2/322.3, KoAP 18.8 | Revoca silenziosa, clandestinità, arresto, reato penale | Registrazione solo con proprietario o hotel; mai agenzie |
| **RT-05** | Dattiloscopia, Visite Mediche 274-FZ | **CRITICA** | Legge 274-ФЗ, 115-ФЗ art. 5/31, Minzdrav 1079n | Revoca soggiorno, ordine di uscita entro 3 giorni | Visite entro 7-10 gg a Sakharovo; rinnovo ogni 12 mesi |
| **RT-06** | Soglia HQS 750k RUB/Trimestre & Ritiro 30gg | **CRITICA** | Legge 316-ФЗ, Legge 115-ФЗ art. 13.2, KoAP 18.15 | Revoca HQS, bando 2 anni azienda, annullamento pratica | Salario garantito >250k/mese fisso; ritiro tesserino <30gg |
| **RT-07** | Riforme 2024-2026: 90gg/Anno, Registro Espulsione, Biometria | **CRITICA** | Leggi 260-ФЗ e 248-ФЗ, Decreto Gov. 1510 | "Morte civile", confisca diritti, espulsione diretta polizia | Tetto 90gg per anno solare; no overstay; pre-registrazione |
| **RT-08** | Blackout Carte Estere & Tetto 10.000 USD | **CRITICA** | Decreto Pres. 81, Codice Doganale EAEU, Cod. Penale 200.1 | Sequestro contante, reato contrabbando, zero fondi | Max 9.500 USD cash intatti; cambio in banca; Carta Mir |
| **RT-09** | Filtrazione FSB, Ispezione Dispositivi, Chat | **CRITICA** | Legge 114-ФЗ art. 27, Cod. Penale 205.1/275/280.3/284.1 | Respingimento immediato, bando a vita, arresto per terrorismo | Bonifica digitale totale; divieto assoluto se fatte donazioni |
| **RT-10** | Errore Causale Carta di Migrazione | **CRITICA** | Decreto Gov. 413, KoAP 18.8 | Impossibilità di lavorare o studiare, espatrio obbligato | Controllo immediato al box passaporti prima di uscire |
| **RT-11** | Difetto di Apostille e Traduzione Notarile | **ALTA** | Convenzione Aia 1961, Legge Notariato 4462-1 | Rigetto totale istanze МВД, decorrenza termini, overstay | Apostille in Italia; traduzione con notaio russo in loco |

---

## 4. Direttive Vincolanti per l'Agente 1 (Redattore della Guida)

In qualità di Red Team avversario, si impone l'integrazione obbligatoria dei seguenti elementi all'interno di qualsiasi capitolo o guida per la Russia:
1. **Disclaimer Iniziale di Sicurezza Geopolitica:** Inserire un box di allerta rosso ad apertura di guida che ricordi che i paesi UE, UK e USA sono classificati come "paesi non amichevoli" ai sensi del Decreto 430-р, che non esistono tutele consolari automatiche sul posto e che le norme di sicurezza statale prevalgono su qualsiasi precedente prassi turistica;
2. **Il Calcolo dell'E-Visa:** Bandire categoricamente l'uso dell'espressione "16 giorni di soggiorno" senza la specifica che si tratta di **16 giorni di calendario (compreso l'arrivo e la partenza, fino alle 23:59)**, evidenziando che cittadini UK e USA ne sono esclusi;
3. **Divieto Assoluto di Lavoro con Visti Inappropriati:** Inserire l'avvertimento in grassetto che lavorare da remoto o fare consulenze in Russia con visto turistico o business costituisce illecito amministrativo con espulsione obbligatoria e bando quinquennale nelle metropoli;
4. **Vademecum Finanziario di Sopravvivenza:** Dichiarare a caratteri cubitali che le carte Visa e Mastercard europee e americane **non funzionano minimamente**, che è vietato esportare oltre 10.000 USD contanti (Decreto 81) e che l'unico metodo sicuro è portare contanti Euro/Dollari intatti per acquistare una carta russa Mir sul posto;
5. **Protocollo di Igiene Digitale:** Esplicitare le regole per superare la filtrazione dell'FSB al controllo passaporti (ispezione telefoni, disiscrizione da canali vietati, divieto per chiunque abbia sostenuto finanziariamente cause ucraine).

*Dossier redatto e convalidato dal Red Team Russia — 05 Ottobre 2026.*
