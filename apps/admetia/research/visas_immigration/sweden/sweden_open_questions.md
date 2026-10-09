# Registro delle Questioni Aperte e Conflitti Risolti: Svezia (SE)
**Data dell'audit:** 05 Ottobre 2026  
**Autore:** Orchestratore del Council di Verifica Admetia  
**Ambito:** Monitoraggio delle discrasie interpretative, delle riforme in itinere e delle questioni amministrative aperte per la Svezia.

---

## 1. Conflitti Risolti durante il Council di Verifica

| ID Conflitto | Oggetto del Conflitto | Tesi Contraria / Precedente nella Codebase | Evidenza Primaria Risolutiva | Esito e Decisione Finale del Council |
| :---: | :--- | :--- | :--- | :--- |
| **CR-SE-01** | **Durata dell'esenzione fiscale per esperti (*expertskatt*)** | La codebase riportava "3 anni" di esenzione fiscale del 25% (`research/places/iberia-and-nordics.md` r. 155, `data/atlas/se.js` r. 177). | *Inkomstskattelagen* 11 kap. 22 § emendata dalla legge parlamentare **SFS 2023:765**, in vigore dal 1° gennaio 2024. Fonte: Forskarskattenämnden `[SE-SRC-14]`. | **RISOLTO:** L'esenzione fiscale dura formalmente **SETTE (7) ANNI** per soggiorni iniziati dopo il 31 marzo 2023. La menzione di 3 anni è obsoleta ed è stata corretta. |
| **CR-SE-02** | **Moltiplicatore salariale Carta Blu UE (*EU-blåkort*)** | Presunzione diffusa che la soglia salariale fosse parametrata a 1,5 volte lo stipendio medio (vecchio standard UE 2009/50/CE). | *Utlänningslagen* 6a kap. di recepimento della Direttiva (UE) 2021/1883 fissa il parametro a **1,25 volte** (*1,25 gånger*) la retribuzione media lorda calcolata da Medlingsinstitutet `[SE-SRC-03]`. | **RISOLTO:** La soglia è esattamente **53.625 SEK/mese lordi** (1,25x stipendio medio). Durata minima contratto ridotta a 6 mesi; PUT accelerato a 36 mesi. |
| **CR-SE-03** | **Soglia salariale minima per permesso di lavoro (*försörjningskrav*)** | Voci contrastanti su 80% (vecchia regola nov. 2023) vs 100% della mediana SCB (promessa politica del Tidöavtalet). | Riksdagen, **Proposition 2025/26:87** (*Bet. 2025/26:SfU12*), in vigore dal 1° giugno 2026: requisito fissato al **90% del salario mediano SCB** (mediana 38.300 SEK pubblicata il 16/06/2026 $\rightarrow$ 90% = **34.470 SEK/mese**) `[SE-SRC-01]`, `[SE-SRC-02]`. | **RISOLTO:** Il parametro legale cogente per nuove domande è **34.470 SEK/mese**. Deroga al 75% (**28.725 SEK/mese**) limitata a professioni in carenza. L'innalzamento al 100% rimane proposta politica non ancora approvata. |
| **CR-SE-04** | **Requisito di titolo per permesso ricerca lavoro post-studio** | La codebase indicava che il permesso spettasse esclusivamente a laureati di secondo livello / master (`visas-and-work-rights.md` r. 176). | *Utlänningsförordningen* 5 kap. 1 b § richiede l'avvenuto completamento di un percorso universitario con almeno **due semestri (60 CFU/ECTS)** in Svezia `[SE-SRC-06]`. | **RISOLTO:** Il diritto spetta a tutti i laureati con almeno 60 CFU svedesi, inclusi i corsi triennali di primo ciclo (*Bachelor*), master di 1 e 2 anni e dottorandi. Corretto in tutta la documentazione. |
| **CR-SE-05** | **Accesso a Residenza Permanente (PUT) per Dottorandi** | Convinzione che 4 anni di studi di dottorato garantissero il diritto incondizionato e automatico al PUT. | *Utlänningslagen* 5 kap. 5 § coordinato con 5 kap. 7 § (riforma restrittiva legge SFS 2021:765) `[SE-SRC-07]`. | **RISOLTO:** Il compimento dei 4 anni dà diritto al PUT **SOLO A CONDIZIONE** che il neodottore dimostri al momento della delibera un contratto di lavoro stabile di almeno **18 mesi residui**. Le borse di studio non qualificano per il PUT. |

---

## 2. Questioni Aperte e Punti di Monitoraggio Amministrativo

I seguenti punti non possono essere inseriti come dati definitivi nella guida primaria e richiedono monitoraggio periodico:

### OPEN-SE-01: Proposta Tidöavtalet di innalzamento al 100% del Salario Mediano
- **Descrizione:** L'accordo di programma della maggioranza di governo (Tidöavtalet) impegna l'esecutivo a raggiungere il 100% del salario mediano (oltre 38.300 SEK/mese). Dopo il gradino del 90% scattato il 1° giugno 2026 (34.470 SEK), non è ancora stata calendarizzata la data del secondo scatto legislativo al 100%.
- **Chi contattare per verifica:** *Justitiedepartementet* (Ministero della Giustizia - Divisione Migrazione) / *Riksdagens socialförsäkringsutskott (SfU)*.
- **Cosa chiedere:** *"Är det planerat ytterligare höjning av försörjningskravet för arbetstillstånd till 100 procent av medianlönen under mandatperioden 2026/2027, och från vilket datum beräknas den träda i kraft?"*

### OPEN-SE-02: Attuazione Riforma Cittadinanza Svedese (Periodo di residenza a 8 anni)
- **Descrizione:** È in corso l'iter per l'elevazione definitiva del requisito di residenza ininterrotta da 5 a 8 anni, l'introduzione di esami di lingua svedese (livello B1) e di cultura civica (*samhällskunskap*), e un requisito di autosufficienza economica (almeno 3 prisbasbelopp annui, ~250.200 SEK).
- **Chi contattare per verifica:** Migrationsverket Ufficio Stampa / *Regeringskansliet Utredningar*.
- **Cosa chiedere:** *"Vilka övergångsregler gäller för medborgarskapsansökningar inlämnade före respektive efter ikraftträdandet av de nya kraven på 8 års hemvist och språktest?"*

### OPEN-SE-03: Prassi Skatteverket per Contratti con Periodo di Prova (*Provanställning*)
- **Descrizione:** La *Folkbokföringslagen* impone un soggiorno documentato di almeno 1 anno per il *personnummer*. Un contratto a tempo indeterminato che inizi con 6 mesi di prova (*provanställning*) viene accettato dalla maggioranza degli uffici di Skatteverket se la lettera d'assunzione esplicita la continuità lavorativa, ma alcuni uffici periferici continuano a richiedere il completamento dei 6 mesi prima dell'iscrizione, causando la trappola del ritardo nel rilascio del BankID.
- **Chi contattare per verifica:** Skatteverket Ufficio Legale Folkbokföring (`huvudkontoret@skatteverket.se`).
- **Cosa chiedere:** *"Hur bedömer Skatteverket en provanställning på 6 månader som förväntas övergå i en tillsvidareanställning för en EU-medborgare som ansöker om personnummer enligt 3 § folkbokföringslagen?"*

### OPEN-SE-04: Estensione della Verifica Digitale del Passaporto con Freja eID
- **Descrizione:** Migrationsverket consente la verifica biometrica digitale remota del passaporto tramite l'app Freja eID esclusivamente ai cittadini esenti da visto per lo spazio Schengen (USA, UK, Canada, Australia). I cittadini di Paesi soggetti a visto (India, Cina, Turchia) devono recarsi fisicamente in Ambasciata. Resta aperta la possibilità di estensione del pilota digitale ad altri Paesi.
- **Chi contattare per verifica:** Migrationsverket Digitalisering / Passkontrollenheten.
- **Cosa chiedere:** *"Finns det planer på att utvidga den digitala passkontrollen via Freja eID till medborgare från viseringspliktiga länder under 2027?"*
