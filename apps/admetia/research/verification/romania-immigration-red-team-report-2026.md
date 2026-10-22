# Report Red Team: Audit Avversario Immigrazione e Diritto del Lavoro — Romania (RO)
**Data di riferimento:** 05 Ottobre 2026  
**Autore:** AGENTE 2 — RED TEAM (Avversario) del Council di verifica immigrazione Romania  
**Ambito:** Analisi di vulnerabilità, trappole documentali, scadenze a incastro perentorie, rischi sanzionatori e di respingimento alla frontiera/espulsione nell'ordinamento rumeno vigente (OUG 194/2002, OG 25/2014, OUG 102/2005, Legea 28/2024, OUG 32/2026, Legea 44/2026, Decizia Consiliului UE 2024/210).

---

## 1. Executive Summary & Obiettivi dell'Audit Avversario

Il presente dossier costituisce l'audit avversario indipendente redatto dal **Red Team** per la giurisdizione della Romania. L'obiettivo primario è identificare ogni potenziale scenario in cui un cittadino straniero (sia comunitario UE/SEE/CH che extra-UE), seguendo le istruzioni o affidandosi a prassi consolidate pre-2024/2026, incorrerebbe in:
1. **Respingimento immediato alla frontiera o diniego di imbarco aereo**;
2. **Irricevibilità insanabile dell'istanza e rigetto con archiviazione del fascicolo**;
3. **Decadenza dei titoli autorizzativi per superamento di finestre temporali perentorie**;
4. **Soggiorno irregolare (overstay), ordine di rimpatrio forzato (*decizie de returnare*) ed espulsione con divieto di reingresso nell'intera area Schengen (*interdicție de intrare*) da 6 mesi a 5 anni**;
5. **Ammende amministrative pecuniarie e sanzioni penali (*fals în declarații*, *trecerea frauduloasă a frontierei*)**.

Il contesto normativo rumeno al 5 ottobre 2026 ha subito cambiamenti strutturali derivanti da:
- **Adesione a Schengen Air & Sea (31 marzo 2024 - Decizia Consiliului UE 2024/210)**: applicazione dell'acquis Schengen sui soggiorni brevi con computo cumulativo 90/180; persistenza dei controlli sistematici alle frontiere terrestri;
- **Legea nr. 28/2024 (in vigore dall'8 marzo 2024)**: innalzamento dell'orario part-time per studenti a 6 ore/giorno (30h/settimana) senza avviso di lavoro; riduzione della soglia retributiva per Carta Blu UE a 1x salario medio lordo;
- **Legea nr. 44/2026 (Legea bugetului asigurărilor sociale de stat)**: nuovo guadagno salariale medio lordo nazionale di riferimento fissato a **9.192 RON/mese**;
- **OUG nr. 32/2026 (Monitorul Oficial nr. 335 del 27 aprile 2026)**: radicale trasformazione digitale delle procedure di assunzione tramite la piattaforma governativa **WorkinRomania.gov.ro** (a pieno regime da agosto 2026), superamento dell'avviso cartaceo tramite la "Cerere Unică", sdoppiamento dei visti di lavoro in **D/AM1** (fuori quota, alte qualifiche) e **D/AM2** (contingentato a 90.000 unità nel 2026 e subordinato alla "Lista ocupațiilor deficitare").

---

## 2. Registro delle Trappole e Vulnerabilità Procedurali (Red Team Traps)

### FALLA RT-01: Il "Fatal Schengen Overstay Trap" post-31 Marzo 2024 (Air & Sea)
* **Gravità:** **CRITICA**
* **Descrizione della falla:**  
  Fino al 30 marzo 2024, la Romania non faceva parte dello spazio Schengen e applicava un plafond nazionale autonomo di 90 giorni di soggiorno breve che non consumava i 90 giorni dell'area Schengen (consentendo il cosiddetto "Balkan shuffle"). Dal **31 marzo 2024**, in forza della Decisione (UE) 2024/210 del Consiglio, la Romania è entrata in Schengen per le frontiere aeree e marittime e applica pienamente il Codice Frontiere Schengen.  
  Se un viaggiatore extra-UE esente da visto C (es. cittadino USA, UK, Canada, Australia) ha trascorso 80 giorni nell'area Schengen (es. Italia, Francia, Germania) e atterra a Bucarest convinto di avere a disposizione 90 giorni rumeni indipendenti, **ha in realtà soltanto 10 giorni di soggiorno legale residuo**.
* **Conseguenze:**  
  Al compimento dell'11° giorno, il soggetto si trova in **overstay Schengen**. All'uscita dal paese o a un controllo di polizia sul territorio:
  - Scatta l'ordine di rimpatrio forzato (*decizie de returnare* ex art. 85 OUG 194/2002);
  - Viene irrogata una sanzione amministrativa pecuniaria;
  - Viene inserita una segnalazione nel **Sistema d'Informazione Schengen (SIS)** con divieto di reingresso nell'intera area Schengen da 6 mesi a 3 anni (art. 106 OUG 194/2002);
  - I controlli alle frontiere terrestri (Romania-Ungheria e Romania-Bulgaria) rimangono fisici e sistematici, rendendo ineludibile il controllo del passaporto e il calcolo dei giorni.
* **Fonte primaria:**  
  - Decizia (UE) 2024/210 a Consiliului din 30 decembrie 2023 (JO L 2024/210);  
  - Poliția de Frontieră Română – Condiții de călătorie în spațiul Schengen: `https://www.politiadefrontiera.ro/ro/main/pg-schengen-conditii-de-calatorie-403.html`  
  - Art. 106 din OUG nr. 194/2002 privind regimul străinilor în România (republicată).
* **Correzione operativa:**  
  Inserire un alert rosso nella guida: *"ATTENZIONE SCHENGEN 90/180: Dal 31 marzo 2024, ogni giorno trascorso in Romania si cumula con i giorni trascorsi negli altri paesi Schengen. Prima di partire, calcola i tuoi giorni con il calcolatore ufficiale Schengen della Commissione Europea. Chi ha già esaurito 90 giorni in Europa non può entrare in Romania senza visto di lungo soggiorno D."*

---

### FALLA RT-02: La Trappola dell'Esenzione Visto C per Extra-UE (USA, UK, Canada) e Impossibilità di Conversione *in loco*
* **Gravità:** **CRITICA**
* **Descrizione della falla:**  
  Cittadini di paesi esenti da visto per soggiorni brevi (es. USA, Regno Unito, Canada, Australia) ritengono di poter entrare in Romania con il solo passaporto, cercare lavoro o iscriversi all'università e successivamente depositare la richiesta di permesso di soggiorno (*permis de ședere*) direttamente presso gli sportelli territoriali dell'IGI.
* **Conseguenze:**  
  Ai sensi dell'**art. 51 e art. 54 din OUG 194/2002**, il permesso di soggiorno temporaneo può essere concesso **esclusivamente a chi è entrato regolarmente in Romania con un visto di lunga degenza di tipo D** emesso dalle missioni diplomatiche/consolari all'estero per lo specifico scopo del soggiorno. La legge rumena non ammette alcuna conversione sul territorio nazionale di un soggiorno visa-free o di un visto turistico C in un permesso per lavoro, studio o affari.  
  L'istanza viene dichiarata irricevibile all'istante (*respingerea cererii fără examinare*). Se nel frattempo i 90 giorni sono trascorsi, il richiedente cade in clandestinità con emissione di *decizie de returnare* e divieto di reingresso.
* **Fonte primaria:**  
  - Art. 51 alin. (1) și Art. 54 alin. (1) lit. a) din OUG 194/2002 republicată: `https://igi.mai.gov.ro/legislatie/`  
  - Ministerul Afacerilor Externe (MAE) – eVisa: `https://evisa.mae.ro/`
* **Correzione operativa:**  
  Esplicitare: *"Il possesso di passaporto esente da visto (USA, UK, ecc.) consente solo il turismo fino a 90 giorni. Per lavorare o studiare in Romania, devi obbligatoriamente richiedere il visto D (D/AM, D/SD, ecc.) su evisa.mae.ro presso il consolato romeno nel tuo paese di residenza, attendere l'apposizione del visto sul passaporto e solo dopo entrare in Romania per richiedere il permesso di soggiorno."*

---

### FALLA RT-03: La Finestra Perentoria dei 30 Giorni Pre-Scadenza Visto D (Art. 51 alin. 1 OUG 194/2002)
* **Gravità:** **CRITICA**
* **Descrizione della falla:**  
  Il visto D è rilasciato per una durata massima di 90 giorni ed è **non prorogabile sul territorio rumeno** (art. 51 OUG 194/2002). Per prolungare la permanenza legale è necessario ottenere il permesso di soggiorno (*permis de ședere*). Molti candidati ritengono di poter presentare la domanda fino all'ultimo giorno di validità del visto D.  
  Tuttavia, l'**art. 51 alin. (1) din OUG 194/2002** impone che la domanda sia presentata all'IGI **con almeno 30 giorni prima della scadenza del soggiorno concesso dal visto D**.  
  Ciò concede al richiedente **soli 60 giorni netti dall'ingresso in Romania** per raccogliere tutti i documenti (alloggio registrato ANAF, visita medica, firma contratto di lavoro, ecc.).
* **Conseguenze:**  
  La presentazione a meno di 30 giorni dalla scadenza:
  1. Integra una contravvenzione sanzionata con ammenda (art. 134 pct. 7 e art. 135 OUG 194/2002: da 100 a 500 RON);
  2. Crea un rischio letale: se l'IGI rifiuta la ricezione per incompletezza o se il visto D scade prima del perfezionamento del deposito, lo straniero perde il diritto di soggiornare, riceve l'ordine di rimpatrio e non ha più strumenti per regolarizzarsi in Romania.
* **Fonte primaria:**  
  - Art. 51 alin. (1), Art. 134 pct. 7, Art. 135 din OUG 194/2002 republicată: `https://igi.mai.gov.ro/prelungirea-dreptului-de-sedere-temporara/`
* **Correzione operativa:**  
  Fissare la regola operativa: *"La domanda di permesso di soggiorno va inoltrata telematicamente tramite portaligi.mai.gov.ro entro e non oltre il 60° giorno dall'ingresso in Romania. Superare la soglia dei 30 giorni precedenti la scadenza del visto comporta sanzioni e mette ad alto rischio la permanenza nel paese."*

---

### FALLA RT-04: La Scadenza Letale dei 60 Giorni dell'Avviso di Lavoro / Aviz de Angajare (Art. 30 OG 25/2014 & OUG 32/2026)
* **Gravità:** **CRITICA**
* **Descrizione della falla:**  
  Una volta ottenuto l'avviso di assunzione (*aviz de angajare*) dall'IGI su richiesta del datore di lavoro, il candidato o l'azienda spesso ritengono che il documento abbia una validità di diversi mesi o di un anno.  
  Ai sensi dell'**art. 30 din OG 25/2014**, il lavoratore straniero ha a disposizione **tassativamente 60 giorni dalla data di rilascio dell'aviz** per inoltrare la richiesta di visto di lungo soggiorno per lavoro (D/AM) presso la rappresentanza diplomatico-consolare rumena.
* **Conseguenze:**  
  Se la domanda di visto su `evisa.mae.ro` viene inoltrata al 61° giorno, **l'aviz de angajare si estingue per decadenza assoluta (*își pierde valabilitatea*)**. Il consolato rigetta d'ufficio la domanda. L'azienda perde l'intera trafila, le spese vive e la tassa IGI di 100 EUR, dovendo riavviare da capo l'iter amministrativo.
* **Fonte primaria:**  
  - Art. 30 din OG nr. 25/2014 privind încadrarea în muncă și detașarea străinilor: `https://igi.mai.gov.ro/wp-content/uploads/2024/03/OG-nr.-25.pdf`  
  - MAE – eVisa: `https://evisa.mae.ro/ro/LongStayVisa`
* **Correzione operativa:**  
  Evidenziare: *"Non appena il datore trasmette l'aviz de angajare, il candidato deve caricare la domanda di visto D/AM su evisa.mae.ro entro pochi giorni. Al compimento del 60° giorno dalla data di rilascio, l'atto decade automaticamente e non può essere riattivato."*

---

### FALLA RT-05: La Riforma OUG 32/2026, la Piattaforma WorkinRomania.gov.ro e la "Lista Ocupațiilor Deficitare"
* **Gravità:** **CRITICA**
* **Descrizione della falla:**  
  Numerose prassi continuano a fare riferimento alla vecchia modulistica cartacea e a una categoria indifferenziata di lavoratori stranieri.  
  Con l'emanazione dell'**OUG nr. 32/2026** (pubblicata nel Monitorul Oficial nr. 335 del 27 aprile 2026, a regime tramite la piattaforma **WorkinRomania.gov.ro** da agosto 2026):
  1. Le domande di lavoro sono centralizzate tramite la **"Cerere Unică"** digitale;
  2. I visti di lavoro vengono biforcati in:
     - **D/AM1**: per categorie speciali (alta qualificazione, atleti, collaborazioni governative speciali) — **esente da contingentamento**;
     - **D/AM2**: per lavoratori permanenti, stagionali e transfrontalieri ordinari — **soggetto al contingentamento annuale (fissato a 90.000 unità per il 2026)**;
  3. **Vincolo della "Lista ocupațiilor deficitare"**: per il visto D/AM2, la professione oggetto del contratto **deve figurare obbligatoriamente nella lista delle occupazioni deficitarie** periodicamente aggiornata dal Ministero del Lavoro.
* **Conseguenze:**  
  Se la mansione non è compresa nella lista di carenza, la Cerere Unică per visto D/AM2 viene respinta in fase di pre-screening informatico. L'azienda rischia inoltre sanzioni severe fino a 40.000 RON per violazioni nelle procedure di intermediazione.
* **Fonte primaria:**  
  - Ordonanța de Urgență nr. 32/2026 privind accesul cetățenilor străini pe piața muncii din România;  
  - Piattaforma ufficiale: `https://workinromania.gov.ro/`  
  - Ministerul Muncii și Solidarității Sociale – Lista ocupațiilor deficitare: `https://mmuncii.gov.ro/`
* **Correzione operativa:**  
  Aggiornare le procedure per le assunzioni 2026: verificare se il profilo rientra nelle alte qualifiche (D/AM1 - esente quota) o nella lista delle professioni deficitarie (D/AM2 - quota 90.000 per il 2026), e operare esclusivamente tramite WorkinRomania.gov.ro.

---

### FALLA RT-06: Il Vincolo dei Primi 12 Mesi: Divieto di Cambio Datore senza Accordo Scritto (OG 25/2014 & Legea 28/2024)
* **Gravità:** **ALTA**
* **Descrizione della falla:**  
  Un lavoratore assunto con visto D/AM o permesso unico decide di rassegnare le dimissioni nei primi mesi per accettare un impiego con stipendio migliore presso un'altra società.
* **Conseguenze:**  
  L'**art. 17 alin. (1^1) - (1^4) din OG 25/2014** (introdotto da OUG 143/2022 e confermato con Legea 28/2024) stabilisce che **durante i primi 12 mesi** dalla data del primo contratto individuale di lavoro, lo straniero **può cambiare datore di lavoro solo con il consenso scritto espresso del datore precedente (*acordul scris al angajatorului inițial*)**.  
  L'accordo non è richiesto unicamente se l'interruzione è avvenuta su iniziativa del datore (licenziamento per esubero) o per dimissioni a causa di gravi inadempimenti retributivi o contributivi accertati dall'ITM.  
  Se il lavoratore si dimette unilateralmente e l'azienda si rifiuta di firmare la liberatoria:
  - L'IGI nega l'emissione del nuovo titolo di lavoro;
  - Il permesso di soggiorno originario viene revocato;
  - Il lavoratore deve abbandonare la Romania entro i termini dell'ordine di rimpatrio.
* **Fonte primaria:**  
  - Art. 17 alin. (1^1)-(1^4) din OG nr. 25/2014: `https://igi.mai.gov.ro/wp-content/uploads/2024/03/OG-nr.-25.pdf`
* **Correzione operativa:**  
  Avvisare i candidati: *"Il primo contratto in Romania vincola per 12 mesi. Salvo accordo consensuale con liberatoria scritta firmata dal primo datore, non è consentito cambiare lavoro nel primo anno. Chi si dimette senza liberatoria perde il titolo di soggiorno."*

---

### FALLA RT-07: Termine Inderogabile dei 15 Giorni Lavorativi per la Stipula del CIM (Art. 17 alin. 1 OG 25/2014)
* **Gravità:** **ALTA**
* **Descrizione della falla:**  
  All'arrivo del lavoratore con visto D/AM, il datore ritarda la stipula del contratto individuale di lavoro (CIM) o la registrazione nel database ministeriale **REVISAL**, ad esempio in attesa dell'assegnazione della sede definitiva o dell'apertura del conto bancario.
* **Conseguenze:**  
  Ai sensi dell'**art. 17 alin. (1) din OG 25/2014**, il datore ha l'obbligo inderogabile di concludere e formalizzare il CIM entro **15 giorni lavorativi dall'ingresso dello straniero in Romania**.  
  In caso di mancato rispetto:
  1. L'approvazione IGI decade e viene annullata d'ufficio;
  2. L'azienda incorre in pesanti sanzioni da parte dell'Inspecția Muncii (ITM);
  3. Il lavoratore non può richiedere il permesso di soggiorno e si ritrova senza basi legali di permanenza.
* **Fonte primaria:**  
  - Art. 17 alin. (1) din OG nr. 25/2014: `https://igi.mai.gov.ro/wp-content/uploads/2024/03/OG-nr.-25.pdf`
* **Correzione operativa:**  
  Fissare il cronoprogramma: *"Entro 15 giorni lavorativi dallo sbarco in Romania, il contratto di lavoro deve essere firmato e registrato in REVISAL. L'estratto REVISAL timbrato (Raport per salariat) è documento obbligatorio per la richiesta del permesso di soggiorno all'IGI."*

---

### FALLA RT-08: Trappola Alloggio: Obbligo Registrazione ANAF del Contratto di Locazione o Comodato Notarile vs "Verificările în Teren" IGI
* **Gravità:** **CRITICA**
* **Descrizione della falla:**  
  Per comprovare l'alloggio (*dovada spațiului de locuit*), il richiedente presenta un contratto di affitto informale non registrato al fisco, una sublocazione verbale, prenotazioni alberghiere/Airbnb a lungo termine o lettere di ospitalità amichevoli.
* **Conseguenze:**  
  L'ordinamento rumeno impone requisiti documentali tassativi:
  1. Per i contratti di locazione: **obbligo di registrazione presso l'ANAF** (Codul Fiscal art. 120 e Ordinul ANAF nr. 2031/2022). L'IGI esige la ricevuta telematica ufficiale Formularul 168 (*Dovada înregistrării contractului la organul fiscal*);
  2. Per l'ospitalità gratuita: **contratto di comodato redatto esclusivamente in forma autentica notarile (*contract de comodat la notar*)**, allegando la visura catastale recente (*extras de carte funciară*) o il titolo di proprietà del disponente;
  3. **Controlli a sorpresa della Polizia IGI (*verificări în teren*)**: gli ispettori compiono verifiche domiciliari senza preavviso. Se lo straniero non è reperibile all'indirizzo o l'immobile risulta un domicilio di comodo sovraffollato (*adrese fantomă*), la domanda di permesso viene rigettata all'istante con denuncia per dichiarazioni mendaci (art. 352 Cod Penal) e revoca del soggiorno.
* **Fonte primaria:**  
  - Art. 51 alin. (2), Art. 54 OUG 194/2002;  
  - Codul Fiscal (Legea nr. 227/2015), Art. 120 alin. (6^1);  
  - Ordinul ANAF nr. 2031/2022 privind înregistrarea contractelor de locațiune: `https://www.anaf.ro/`
* **Correzione operativa:**  
  Specificare: *"Prima di firmare un contratto di locazione, esigere che il proprietario si impegni a registrarlo presso l'ANAF entro 30 giorni e a fornire la ricevuta Formular 168. Non sono ammessi Airbnb né contratti informali. Indicare chiaramente il proprio nominativo sul citofono per le visite ispettive IGI."*

---

### FALLA RT-09: Trappola Casellario Giudiziale (*Cazier Judiciar*): Apostille dell'Aja e Traduzione Giurata Riconosciuta dal Ministero della Giustizia Romeno
* **Gravità:** **ALTA**
* **Descrizione della falla:**  
  I candidati allegano alla domanda di visto D o al dossier IGI il certificato penale del paese d'origine privo di legalizzazione internazionale, oppure accompagnato da una traduzione in inglese non legalizzata o asseverata da traduttori esteri non abilitati in Romania.
* **Conseguenze:**  
  La documentazione viene respinta per vizi formali insanabili:
  - Per i paesi firmatari della Convenzione dell'Aja: **Apostille originale sul certificato penale estero**;
  - Per i paesi non aderenti: **sovralegalizzazione consolare a catena** (Ministero Esteri estero + Ambasciata rumena competente);
  - **Traduzione obbligatoria in lingua rumena**: eseguita da un traduttore autorizzato dal Ministero della Giustizia rumeno (*traducător autorizat de Ministerul Justiției din România*) e **legalizzata con formula notarile rumena (*încheiere de legalizare notarială*)**;
  - **Validità temporale**: il certificato penale ha validità ordinaria di **3 o 6 mesi** dal rilascio; se scade durante l'istruttoria consolare o IGI, deve essere riemesso.
* **Fonte primaria:**  
  - Art. 21 alin. (2) OUG 194/2002;  
  - Legea nr. 36/1995 a notarilor publici și a activității notariale (republicată);  
  - Registrul traducătorilor autorizați: `https://www.just.ro/`
* **Correzione operativa:**  
  Istruire la sequenza documentale: *"Richiedere il casellario penale nel paese di origine, apporre l'Apostille dell'Aja sul documento cartaceo originale, trasmetterlo in Romania per la traduzione asseverata da traduttore abilitato dal Ministero della Giustizia rumeno e successiva legalizzazione notarile rumena. Verificare che la data di rilascio sia inferiore a 90 giorni."*

---

### FALLA RT-10: Trappola Certificato Medico: Formula Sacramentale di Idoneità e Malattie Trasmissibili
* **Gravità:** **MEDIA**
* **Descrizione della falla:**  
  Presentazione di certificati medici generici rilasciati da medici di base esteri con diciture non conformi alle prescrizioni dell'art. 21 alin. (2) e art. 51 OUG 194/2002.
* **Conseguenze:**  
  Il documento deve recare la formula specifica attestante che il soggetto è "clinic sănătos, apt de muncă, nu este în evidență cu boli infecto-contagioase sau boli cronice care pun în pericol sănătatea publică".  
  L'IGI sospende la procedura concedendo un termine di integrazione breve. Se non viene prodotta una scheda di medicina del lavoro emessa da una clinica rumena autorizzata (*fișă de aptitudine eliberată de medic de medicina muncii din România*), la domanda viene respinta per mancata dimostrazione dei requisiti sanitari.
* **Fonte primaria:**  
  - Art. 21 alin. (2) lit. d) OUG 194/2002 republicată;  
  - Legea nr. 319/2006 a securității și sănătății în muncă și HG 355/2007.
* **Correzione operativa:**  
  Indicare: *"Effettuare la visita medica direttamente all'arrivo in Romania presso un centro di medicina del lavoro accreditato, ottenendo la 'Fișă de aptitudini' conforme alle tabelle HG 355/2007 con attestazione espressa di 'Apt pentru muncă' e assenza di malattie infettive."*

---

### FALLA RT-11: Prova di Mezzi Economici: Nuove Soglie Salariali 2026 e Trappola Nomadi Digitali (3x Salario Medio Lordo)
* **Gravità:** **ALTA**
* **Descrizione della falla:**  
  I richiedenti utilizzano soglie finanziarie non aggiornate per la dimostrazione dei mezzi di sussistenza (*mijloace de întreținere*):
  - **Nomadi Digitali (Visto D/DS ex art. 49^1 OUG 194/2002)**: la legge prescrive di dimostrare per ciascuno degli ultimi 6 mesi un reddito da lavoro remoto pari ad **almeno 3 volte il guadagno salariale medio lordo mensile in Romania**.  
    Con la **Legea nr. 44/2026**, il salario medio lordo BASS è salito a **9.192 RON/mese** (8.620 RON nel 2025; 7.567 RON nel 2024).  
    La soglia minima mensile è dunque pari a **27.576 RON/mese (circa 5.540 EUR/mese)**! Chi presenta redditi inferiori (es. 3.000-4.000 EUR) subisce il diniego immediato del visto D/DS;
  - **Studenti (Visto D/SD)**: devono attestare disponibilità pari al **salario minimo netto mensile garantito** per l'intera durata del soggiorno (circa 2.574 RON/mese nel 2025/2026, pari a ~6.200 EUR annui), oltre alla ricevuta di pagamento della retta universitaria e alla **Lettera di Accettazione del Ministero dell'Educazione**;
  - **Carta Blu UE**: con la Legea 28/2024 la soglia è scesa dal vecchio 2x a **1x guadagno salariale medio lordo** (**9.192 RON/mese lordi nel 2026**, ~1.850 EUR/mese lordi).
* **Conseguenze:**  
  Rigetto della domanda consolare per insufficienza di mezzi economici senza rimborso delle tasse consolari.
* **Fonte primaria:**  
  - Art. 49^1, Art. 45 OUG 194/2002;  
  - Legea nr. 44/2026 (salariul mediu brut de 9.192 lei);  
  - Legea nr. 28/2024 (regimul Cărții Albastre);  
  - MAE eVisa: `https://evisa.mae.ro/`
* **Correzione operativa:**  
  Inserire nella guida i valori aggiornati al 2026: Nomade Digitale D/DS: minimo **€ 5.540/mese**; Carta Blu UE: minimo **€ 1.850/mese lordi**; Studenti D/SD: minimo **€ 6.200/anno** su conto bancario.

---

### FALLA RT-12: Cittadini UE/SEE/CH: Obbligo di Registrazione IGI dopo 3 Mesi, CNP e la Trappola dell'Assicurazione Sanitaria (TEAM/EHIC vs CNAS)
* **Gravità:** **ALTA**
* **Descrizione della falla:**  
  I cittadini europei spesso ritengono di poter soggiornare indefinitamente in Romania senza registrazione o contando esclusivamente sulla Tessera Europea di Assicurazione Malattia (TEAM/EHIC).
* **Conseguenze:**  
  1. **Obbligo IGI (OUG 102/2005)**: dopo **3 mesi (90 giorni)** di soggiorno continuativo scatta l'obbligo di richiedere il **Certificat de înregistrare** presso l'ufficio IGI competente. L'omessa richiesta costituisce contravvenzione punita con ammenda;
  2. **CNP (Cod Numeric Personal)**: il Certificato IGI attribuisce il CNP rumeno. Senza CNP non è possibile completare la registrazione contrattuale in REVISAL, accedere al sistema fiscale per residenti, stipulare utenze o aprire agevolmente conti correnti;
  3. **Trappola TEAM/EHIC**: la TEAM copre esclusivamente le cure indifferibili e urgenti durante soggiorni **temporanei**. Con l'acquisizione della dimora abituale o l'inizio di un'attività lavorativa in Romania, la TEAM non copre le cure ordinarie: è obbligatorio iscriversi alla **Casa Națională de Asigurări de Sănătate (CNAS)** con il versamento del contributo CASS (10%), presentare il modello europeo S1 o stipulare una polizza sanitaria privata locale completa.
* **Fonte primaria:**  
  - OUG nr. 102/2005 privind libera circulație a cetățenilor UE/SEE/CH: `https://igi.mai.gov.ro/en/residence-registration/`  
  - Casa Națională de Asigurări de Sănătate: `http://www.cnas.ro/`
* **Correzione operativa:**  
  Istruire i cittadini UE: *"Se risiedi in Romania oltre 90 giorni, prendi appuntamento su portaligi.mai.gov.ro per richiedere il Certificat de înregistrare (rilasciato in giornata), ottenendo il tuo CNP. Per l'assistenza sanitaria ordinaria, attiva l'iscrizione alla CNAS o stipula una copertura privata locale."*

---

### FALLA RT-13: Studenti Extra-UE: Limite Lavoro Part-Time (6h/giorno ex Legea 28/2024) e Trappola Permesso Post-Laurea di 9 Mesi
* **Gravità:** **MEDIA**
* **Descrizione della falla:**  
  - **Lavoro durante gli studi**: molti studenti fanno affidamento su vecchie guide che indicavano un limite di 4 ore al giorno. Con la **Legea nr. 28/2024**, il limite è stato innalzato a un massimo di **6 ore al giorno (30h/settimana)** senza obbligo di avviso di lavoro. Superare le 6 ore giornaliere configura lavoro irregolare con revoca del permesso per studio e multe da 10.000 a 20.000 RON a carico dell'azienda;
  - **Permesso post-laurea di 9 mesi (art. 53^1 OUG 194/2002)**: i neolaureati possono richiedere una proroga di 9 mesi per cercare lavoro o aprire un'impresa. Tuttavia, la domanda **deve essere presentata tassativamente PRIMA della scadenza del permesso per studi in corso**. Chi attende la pergamena cartacea o la proclamazione estiva facendo scadere il titolo perde irrevocabilmente il diritto e deve rimpatriare.
* **Conseguenze:**  
  Decadenza automatica del diritto al soggiorno post-studio e impossibilità di regolarizzazione sul territorio nazionale.
* **Fonte primaria:**  
  - Art. 3 alin. (3) din OG nr. 25/2014, modificat prin Legea nr. 28/2024;  
  - Art. 53^1 din OUG 194/2002 republicată: `https://igi.mai.gov.ro/`
* **Correzione operativa:**  
  Specificare: *"1) Studenti: potete lavorare part-time fino a 6 ore/giorno con regolare CIM. 2) Neolaureati: non attendete la pergamena di laurea! Richiedete all'università l'attestazione di completamento (Adeverință de absolvire) e depositate la domanda di proroga di 9 mesi all'IGI con almeno 30 giorni di anticipo sulla scadenza del permesso studio."*

---

### FALLA RT-14: Truffe di Reclutamento, Agenzie Fantasma e Reato di Attraversamento Illegale della Frontiera (Art. 262 Cod Penal)
* **Gravità:** **CRITICA**
* **Descrizione della falla:**  
  Intermediari abusivi ed agenzie fantasma (*firme fantomă*) fanno pagare tra 3.000 e 8.000 euro a lavoratori vulnerabili per avvisi fittizi. All'arrivo in Romania il datore di lavoro è irreperibile o inattivo. Privi di alloggio e sussistenza, molti lavoratori tentano di varcare clandestinamente la frontiera occidentale rumena verso l'Ungheria (a piedi o nascosti a bordo di mezzi pesanti).
* **Conseguenze:**  
  - Il tentativo di varcare clandestinamente il confine costituisce **reato penale punito con la reclusione da 6 mesi a 3 anni ai sensi dell'art. 262 din Codul Penal (*trecerea frauduloasă a frontierei de stat*)**;
  - I migranti vengono arrestati dalla Poliția de Frontieră, condannati, espulsi e segnalati nel SIS con divieto Schengen quinquennale;
  - L'**OUG nr. 32/2026** ha introdotto garanzie stringenti: fideiussione di **75.000 EUR** per le agenzie di reclutamento autorizzate, stipendio erogato **esclusivamente con bonifico bancario** e corsi obbligatori di lingua rumena di almeno 6 mesi a carico dell'azienda.
* **Fonte primaria:**  
  - Art. 262 Cod Penal al României (Legea nr. 286/2009);  
  - OUG nr. 32/2026 privind accesul cetățenilor străini pe piața muncii din România;  
  - Poliția de Frontieră Română: `https://www.politiadefrontiera.ro/`
* **Correzione operativa:**  
  Integrare un avviso di sicurezza: *"Verificare che il datore esista nel registro ONRC (portal.onrc.ro) e sia censito nel Registro degli Angajatori Autorizați su WorkinRomania.gov.ro. Non tentare mai di passare la frontiera verso l'Ungheria: il passaggio fraudolento è un reato penale sanzionato con l'arresto immediato e la detenzione carceraria."*

---

### FALLA RT-15: La Ricevuta di Deposito IGI e il Divieto di Viaggio all'Estero con Visto Scaduto
* **Gravità:** **ALTA**
* **Descrizione della falla:**  
  L'IGI impiega 30-45 giorni per deliberare sulle domande di permesso di soggiorno (art. 51 alin. 3 OUG 194/2002). Durante l'attesa del rilascio della tessera biometrica plastificata, molti stranieri titolari di visto D scaduto ritengono di poter viaggiare all'estero esibendo alla frontiera o all'imbarco aereo la sola ricevuta cartacea IGI (*dovada depunerii dosarului*).
* **Conseguenze:**  
  La ricevuta IGI attesta la legalità del soggiorno **esclusivamente sul territorio nazionale della Romania**.  
  Le compagnie aeree e le polizie di frontiera degli altri Stati Schengen non consentono l'imbarco né il transito con la sola ricevuta IGI se il visto D è scaduto. Il viaggiatore viene bloccato all'estero e non può fare rientro in Romania se non richiedendo un nuovo visto consolare dal proprio paese di origine.
* **Fonte primaria:**  
  - Art. 51 alin. (3), Art. 83 OUG 194/2002 republicată;  
  - Codul Frontierelor Schengen (Regulamentul UE 2016/399);  
  - IGI: `https://igi.mai.gov.ro/`
* **Correzione operativa:**  
  Allerta mobilità: *"Durante l'attesa del rilascio del permesso di soggiorno plastificato, la ricevuta IGI protegge la presenza SOLO all'interno della Romania. Non viaggiare all'estero né prendere voli internazionali finché non hai ritirato fisicamente il tesserino Permis de Ședere."*

---

## 3. Matrice Sinottica delle Scadenze a Incastro Letali

| Procedura / Termine | Scadenza Inderogabile | Base Normativa | Conseguenza del Mancato Rispetto |
| :--- | :--- | :--- | :--- |
| **Soggiorno Schengen 90/180** | Max 90 giorni su qualsiasi periodo di 180 giorni | Decizia Consiliului UE 2024/210; Codice Schengen | Overstay Schengen, ordine di rimpatrio, inserimento nel SIS con divieto fino a 3 anni. |
| **Richiesta Visto D dopo Avviso Lavoro** | **60 giorni** dalla data di rilascio dell'avviso | Art. 30 OG 25/2014; OUG 32/2026 | Decadenza assoluta dell'avviso (*își pierde valabilitatea*); rifacimento della pratica da zero. |
| **Firma e Registrazione Contratto Lavoro (CIM)** | **15 giorni lavorativi** dall'ingresso in Romania | Art. 17 alin. (1) OG 25/2014 | Annullamento titolo IGI; sanzione ITM fino a 20.000 RON; perdita del diritto di soggiorno. |
| **Domanda Permesso di Soggiorno** | **Almeno 30 giorni PRIMA** della scadenza del visto D | Art. 51 alin. (1) OUG 194/2002 | Sanzione pecuniaria (art. 134-135 OUG 194/2002); rischio di ordine di rimpatrio forzato. |
| **Vincolo Primo Datore di Lavoro** | **12 mesi** dalla data del primo CIM | Art. 17 alin. (1^1) OG 25/2014; Legea 28/2024 | Rigetto del nuovo avviso senza liberatoria scritta del primo datore; perdita del permesso. |
| **Registrazione Cittadini UE/SEE/CH** | Entro **3 mesi (90 giorni)** dall'ingresso | OUG 102/2005 | Sanzione pecuniaria; mancata attribuzione CNP; blocco registrazione contratti e conti banca. |
| **Domanda Permesso Post-Laurea** | **PRIMA** della scadenza del permesso per studi | Art. 53^1 OUG 194/2002 | Decadenza automatica del diritto alla proroga di 9 mesi; obbligo di rimpatrio. |
| **Notifica Risoluzione Contratto Lavoro** | **10 giorni** dall'evento (a carico del datore) | Art. 34 OG 25/2014 | Sanzioni all'azienda; revoca del diritto di soggiorno dello straniero entro 90 giorni. |

---

## 4. Riferimenti Istituzionali e Fonti Primarie Consultate

1. **Inspectoratul General pentru Imigrări (IGI):** `https://igi.mai.gov.ro/`
   - Registrazione cittadini UE/SEE/CH: `https://igi.mai.gov.ro/en/residence-registration/`
   - Portale telematico IGI: `https://portaligi.mai.gov.ro/portaligi/`
2. **Ministerul Afacerilor Externe (MAE) — Portale eVisa:** `https://evisa.mae.ro/`
3. **Piattaforma Guvernamentale WorkinRomania:** `https://workinromania.gov.ro/`
4. **Poliția de Frontieră Română (Condiții Schengen):** `https://www.politiadefrontiera.ro/`
5. **Atti Legislativi Ufficiali:**
   - **OUG nr. 194/2002** privind regimul străinilor în România (republicată în Monitorul Oficial nr. 421/2008, con modifiche fino a Legea 28/2024 e OUG 32/2026).
   - **OG nr. 25/2014** privind încadrarea în muncă și detașarea străinilor pe teritoriul României (modificata da OUG 143/2022, Legea 28/2024 e OUG 32/2026).
   - **OUG nr. 102/2005** privind libera circulație pe teritoriul României a cetățenilor statelor membre ale UE, SEE și ai Confederației Elvețiene.
   - **Legea nr. 28/2024** (MO nr. 188 din 7 martie 2024): lavoro studenti a 6h/giorno e Carta Blu UE a 1x salario medio lordo.
   - **OUG nr. 32/2026** (MO nr. 335 din 27 aprile 2026): riforma dell'accesso al lavoro per i cittadini terzi, visti D/AM1 e D/AM2, quota contingentata a 90.000 unità.
   - **Legea nr. 44/2026** (Legea bugetului asigurărilor sociale de stat): parametro guadagno salariale medio lordo fissato a 9.192 RON/mese.
   - **Decizia (UE) 2024/210 a Consiliului** din 30 decembrie 2023: applicazione integrale dell'acquis Schengen in Romania e Bulgaria (Air & Sea dal 31 marzo 2024).
