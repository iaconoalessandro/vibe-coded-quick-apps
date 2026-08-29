import urllib.request
import urllib.parse
import json
import time

companies_raw = [
    # Page 1
    ("ABB", "Valukoja 8", "Ülemiste City", "ABB Tallinn Service & Engineering Hub"),
    ("Ericsson", "Valukoja 8/1", "Ülemiste City", "Ericsson Eesti AS Tech / R&D Office"),
    ("Monese", "Telliskivi 60/2", "Põhja-Tallinn", "Monese Tallinn Office"),
    ("Riverty", "Telliskivi 60/2", "Põhja-Tallinn", "Riverty Tech OÜ"),
    ("Kuehne+Nagel", "Valukoja 8", "Ülemiste City", "Kuehne + Nagel IT Service Centre"),
    ("SYNLAB Eesti", "Veerenni 53a", "Kesklinn", "SYNLAB Eesti Central Lab & IT Hub"),
    # Page 2
    ("Guardtime", "A. H. Tammsaare tee 60", "Mustamäe", "Guardtime HQ"),
    ("Antegenes", "Teaduspargi 6/1", "Mustamäe", "Antegenes HealthTech"),
    ("MindTitan", "Volta 1", "Põhja-Tallinn", "MindTitan AI Office"),
    ("Auve Tech", "Järvevana tee 11", "Kesklinn", "Auve Tech Autonomous Tech Hub"),
    ("indiGOtech Europe", "Lõõtsa 8", "Ülemiste City", "indiGOtech Europe"),
    ("Krakul", "Pärnu mnt 186", "Kristiine", "Krakul IoT & Autonomous Systems"),
    ("DefSecIntel Solutions", "Akadeemia tee 21/4", "Mustamäe", "DefSecIntel Defense AI Hub"),
    # Page 3
    ("EyeVi Technologies", "Teaduspargi 8", "Mustamäe", "EyeVi Technologies (Tehnopol)"),
    ("Twilio", "Veerenni 24", "Kesklinn", "Twilio Tallinn Office"),
    ("OlyBet Group", "Pronksi 19", "Kesklinn", "Olympic Entertainment Group / OlyBet HQ"),
    ("Evolution", "Tartu mnt 83", "Kesklinn", "Evolution Estonia Tech Hub"),
    ("Betsson Group", "Hobujaama 4", "Kesklinn", "Betsson Tallinn Tech Hub"),
    ("Paf - Games Sport Casino", "Rotermanni 8", "Kesklinn", "Paf Tallinn Tech Office"),
    ("Bally's Interactive", "Sepapaja 1", "Ülemiste City", "Bally's Interactive Tallinn"),
    # Page 4
    ("Relax Gaming Ltd", "Pärnu mnt 141", "Kristiine", "Relax Gaming Tallinn Office"),
    ("Coolbet", "Telliskivi 60/1", "Põhja-Tallinn", "Coolbet / Vincent Group HQ"),
    ("Yolo Group", "Erika 14", "Põhja-Tallinn", "Yolo Group HQ (Noblessner/Kalamaja area)"),
    ("Zendesk QA (Klaus)", "Telliskivi 60a", "Põhja-Tallinn", "Zendesk QA (Klaus)"),
    ("Lingvist", "Pärnu mnt 67a", "Kesklinn", "Lingvist HQ"),
    ("Modash", "Telliskivi 60a", "Põhja-Tallinn", "Modash HQ"),
    # Page 5
    ("Katana Cloud Inventory", "Kalaranna 8", "Põhja-Tallinn", "Katana Cloud Inventory HQ"),
    ("Xolo", "A. H. Tammsaare tee 47", "Mustamäe", "Xolo HQ"),
    ("Zone.eu", "Lõõtsa 5", "Ülemiste City", "Zone Media OÜ HQ"),
    ("Bondora", "A. H. Tammsaare tee 47", "Mustamäe", "Bondora Group HQ"),
    ("Adcash", "Kentmanni 4", "Kesklinn", "Adcash HQ"),
    ("Inbank", "Niine 11", "Põhja-Tallinn", "Inbank HQ"),
    ("Coop Pank AS", "Maakri 30", "Kesklinn", "Coop Pank HQ (Skyon)"),
    # Page 6
    ("Cleveron", "Mäealuse 2/1", "Mustamäe", "Cleveron Tallinn Tech Hub (Tehnopol)"),
    ("Testlio", "Telliskivi 60a", "Põhja-Tallinn", "Testlio HQ"),
    ("Proekspert AS", "Sõpruse pst 157", "Kristiine", "Proekspert AS HQ"),
    ("Cybernetica", "Mäealuse 2/1", "Mustamäe", "Cybernetica HQ (Tehnopol)"),
    ("Mooncascade", "Telliskivi 60a", "Põhja-Tallinn", "Mooncascade Tallinn Office"),
    ("Icefire OÜ", "Valukoja 8", "Ülemiste City", "Icefire / Checkout.com Tech Hub"),
    ("Milrem Robotics", "Mäealuse 2/1", "Mustamäe", "Milrem Robotics Tallinn R&D Hub"),
    # Page 7
    ("Bigbank", "Tartu mnt 18", "Kesklinn", "Bigbank HQ"),
    ("Luminor Group", "Liivalaia 45", "Kesklinn", "Luminor HQ & Tech Hub"),
    ("LHV", "Tartu mnt 2", "Kesklinn", "LHV Pank HQ & Tech Centre"),
    ("Skeleton Technologies", "Kaabli 1", "Ülemiste / Rae", "Skeleton Technologies R&D Hub"),
    ("Starship Technologies", "Teaduspargi 8", "Mustamäe", "Starship Technologies HQ (Tehnopol)"),
    ("CGI", "Lõõtsa 1a", "Ülemiste City", "CGI Eesti AS (Ülemiste City)"),
    ("Eesti Energia", "Lelle 22", "Kristiine", "Eesti Energia HQ & Tech"),
    # Page 8
    ("Helmes", "Lõõtsa 6", "Ülemiste City", "Helmes HQ"),
    ("Elisa Eesti AS", "Sõpruse pst 145", "Kristiine", "Elisa Eesti AS HQ"),
    ("SEB Eesti", "Tornimäe 2", "Kesklinn", "SEB Eesti HQ & Innovation Centre"),
    ("Telia", "Mustamäe tee 3", "Kristiine", "Telia Eesti AS HQ"),
    ("Swedbank Estonia", "Liivalaia 8", "Kesklinn", "Swedbank HQ & IT Hub"),
    ("Nortal", "Lõõtsa 6c", "Ülemiste City", "Nortal HQ"),
    # Page 9
    ("Playtech", "Lõõtsa 5", "Ülemiste City", "Playtech Tallinn Tech Hub"),
    ("Pipedrive", "Mustamäe tee 3a", "Kristiine", "Pipedrive HQ (WoHo)"),
    ("Veriff", "Niine 11", "Põhja-Tallinn", "Veriff HQ"),
    ("Wise", "Veerenni 24", "Kesklinn", "Wise Tallinn HQ (Baltika Kvartal)"),
    ("Bolt", "Vana-Lõuna 39/1", "Kesklinn", "Bolt Global HQ"),
    ("Microsoft", "Akadeemia tee 15b", "Mustamäe", "Microsoft Development Center Estonia (Tehnopol)")
]

print(f"Total entries: {len(companies_raw)}")
