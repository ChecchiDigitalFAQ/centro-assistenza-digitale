// Database FAQ, Pulsanti Rapidi e Dizionario integrato per Arturo 2.0
let appConfig = {
  quickButtons: [
    { id: "AIUTO", label: "❓ Cos'è Arturo?" },
    { id: "CONTATTI", label: "📞 Contatti" },
    { id: "DIRIGENZA", label: "👔 Dirigenza" },
    { id: "SEGRETERIE", label: "🏢 Segreteria e Uffici" },
    { id: "MICROSOFT365", label: "💻 Servizi Digitali (Teams/Argo)" }
  ],
  
  // DIZIONARIO ED ENCICLOPEDIA LOCALE (Unificato e privo di duplicati)
  dictionary: {
    // --- 1. TECNOLOGIA, INFORMATICA & DIGITAL ---
    "abaco": "📖 **Abaco:** Antico strumento di calcolo manuale costituito da una cornice con guide parallele su cui scorrono palline.",
    "account": "📖 **Account:** Insieme di credenziali (username e password) che identificano in modo univoco un utente su un sistema informatico.",
    "algoritmo": "📖 **Algoritmo:** Sequenza ordinata e finita di istruzioni per risolvere un problema.",
    "algoritmo_genetico": "📖 **Algoritmo Genetico:** Tecnica di ricerca ed ottimizzazione basata sui principi della selezione naturale ed evoluzione biologica.",
    "algoritmo_ordinamento": "📖 **Algoritmo di Ordinamento:** Procedimento logico progettato per disporre gli elementi di una lista in un ordine preciso.",
    "amministratore": "📖 **Amministratore:** Persona responsabile della gestione e configurazione avanzata di un sistema informatico o di un'organizzazione.",
    "android": "📖 **Android:** Sistema operativo mobile open source basato sul kernel Linux, sviluppato da Google per smartphone e tablet.",
    "api": "📖 **API:** Application Programming Interface. Insieme di definizioni e protocolli usati per far comunicare software diversi.",
    "app": "📖 **Applicazione (App):** Programma informatico progettato per consentire all'utente di svolgere specifiche attività su PC o dispositivi mobili.",
    "applet": "📖 **Applet:** Piccolo programma applicativo progettato per essere eseguito all'interno di un'altra applicazione o browser.",
    "apprendimento": "📖 **Apprendimento Automatico (Machine Learning):** Branca dell'intelligenza artificiale che permette ai sistemi di imparare dai dati in modo autonomo.",
    "architettura": "📖 **Architettura degli Elaboratori:** La struttura concettuale e l'organizzazione operativa fondamentale dei componenti di un computer.",
    "archivio": "📖 **Archivio:** Raccolta ordinata di documenti o dati conservati per la consultazione e la memoria storica.",
    "array": "📖 **Array:** Struttura dati composta da una collezione di elementi omogenei identificati da uno o più indici numerici.",
    "asincrono": "📖 **Asincrono:** Processo di comunicazione in cui la trasmissione dei dati avviene senza richiedere una sincronizzazione temporale immediata tra emittente e ricevente.",
    "assembler": "📖 **Assembler:** Linguaggio di programmazione di basso livello in cui le istruzioni corrispondono direttamente a quelle del microprocessore.",
    "assegnazione": "📖 **Assegnazione:** In programmazione, operazione mediante la quale si memorizza un determinato valore all'interno di una variabile.",
    "astrazione": "📖 **Astrazione:** Processo concettuale che consiste nel nascondere i dettagli complessi di un sistema per mostrare solo le caratteristiche essenziali.",
    "attributo": "📖 **Attributo:** Proprietà o caratteristica associata ad un oggetto, un elemento HTML o un'entità di un database.",
    "autenticazione": "📖 **Autenticazione:** Processo informatico di verifica dell'identità fornita da un utente, sistema o dispositivo.",
    "autocad": "📖 **AutoCAD:** Software di disegno assistito da elaboratore (CAD) utilizzato in architettura, ingegneria e progettazione.",
    "automa": "📖 **Automa a Stati Finiti:** Modello matematico di calcolo composto da un numero finito di stati e transizioni azionate da input.",
    "avatar": "📖 **Avatar:** Immagine grafica o icona usata per rappresentare un utente all'interno di comunità virtuali e giochi.",
    "backup": "📖 **Backup:** Copia di sicurezza di file o dati informatici creata per prevenire la perdita involontaria di informazioni.",
    "backup_incrementale": "📖 **Backup Incrementale:** Copia di sicurezza che salva unicamente i dati modificati o creati dall'ultimo backup effettuato.",
    "banda": "📖 **Banda Passante:** La quantità massima di dati che può essere trasmessa attraverso una connessione di rete in un determinato intervallo di tempo.",
    "barcode": "📖 **Barcode:** Codice a barre. Sequenza di linee verticali di diverso spessore stampate su beni e prodotti per l'identificazione automatica.",
    "big_data": "📖 **Big Data:** Grandi volumi di dati complessi ed eterogenei che richiedono tecnologie ed analisi avanzate per essere elaborati.",
    "binario": "📖 **Sistema Binario:** Sistema di numerazione posizionale in base 2 che utilizza solo le cifre 0 e 1.",
    "biometria": "📖 **Biometria:** Tecnologia di identificazione basata sull'analisi automatizzata delle caratteristiche fisiche uniche.",
    "bios": "📖 **BIOS:** Basic Input Output System. Primo programma eseguito da un computer all'accensione per avviare l'hardware.",
    "bit": "📖 **Bit:** Binary Digit. L'unità fondamentale di informazione in informatica, con valore esatto 0 oppure 1.",
    "blocco": "📖 **Blockchain:** Registro digitale aperto e distribuito che memorizza transazioni in blocchi crittograficamente collegati.",
    "blog": "📖 **Blog:** Sito web informativo aggiornato regolarmente, strutturato in articoli disposti in ordine cronologico inverso.",
    "bluetooth": "📖 **Bluetooth:** Tecnologia di rete senza fili a corto raggio usata per connettere dispositivi diversi.",
    "bool": "📖 **Booleano:** Tipo di dato logico che può assumere esclusivamente due valori distinti: vero (*true*) o falso (*false*).",
    "bootloader": "📖 **Bootloader:** Programma di avvio residente nella memoria permanente che carica il kernel del sistema operativo.",
    "bot": "📖 **Bot:** Programma informatico automatizzato progettato per eseguire compiti ripetitivi o interagire in chat.",
    "browser": "📖 **Browser:** Programma applicativo utilizzato per navigare, visualizzare e interagire con le pagine del World Wide Web.",
    "bug": "📖 **Bug:** Errore, anomalia o difetto nel codice sorgente di un software che causa un funzionamento imprevisto o errato.",
    "bus": "📖 **Bus di Sistema:** Canale di comunicazione fisico che trasferisce dati e segnali di controllo tra i componenti di un computer.",
    "byte": "📖 **Byte:** Sequenza di 8 bit adiacenti. Costituisce l'unità base di misura della memoria dei calcolatori.",
    "cache": "📖 **Memoria Cache:** Memoria temporanea ad altissima velocità che conserva i dati usati di frequente.",
    "campo": "📖 **Campo (Database):** La singola unità informativa all'interno di un record o di una tabella di una banca dati.",
    "carattere": "📖 **Carattere:** Singolo simbolo alfanumerico, spazio o segno di punteggiatura rappresentato digitalmente tramite un codice.",
    "certificato": "📖 **Certificato Digitale:** Documento elettronico emesso da un'autorità riconosciuta che attesta l'associazione tra chiave pubblica ed identità.",
    "chat": "📖 **Chat:** Conversazione testuale in tempo reale che avviene tramite una rete informatica o internet.",
    "ciclo_for": "📖 **Ciclo FOR:** Struttura di controllo di iterazione che ripete un blocco di istruzioni per un numero prefissato di volte.",
    "ciclo_while": "📖 **Ciclo WHILE:** Struttura iterativa che continua ad eseguire un blocco di codice finché una condizione rimane vera.",
    "classe": "📖 **Classe (Informatica):** In programmazione ad oggetti, il modello concettuale che definisce le proprietà e i metodi di un oggetto.",
    "client": "📖 **Client:** Dispositivo o programma informatico che richiede servizi o risorse ad un server centralizzato.",
    "cloud": "📖 **Cloud Computing:** Rete di server remoti accessibili via internet per memorizzare dati ed elaborare programmi.",
    "clustering": "📖 **Clustering:** Tecnica di analisi dei dati che raggruppa elementi simili all'interno di insiemi omogenei.",
    "codice": "📖 **Codice:** Insieme di regole, simboli o istruzioni usate per rappresentare informazioni o scrivere software.",
    "codifica": "📖 **Codifica dei Dati:** Processo di conversione delle informazioni in un formato standardizzato adatto alla memorizzazione.",
    "collisione": "📖 **Collisione Hash:** Situazione informatica in cui due dati distinti producono lo stesso valore di calcolo o impronta hash.",
    "comando": "📖 **Comando:** Istruzione espressa dall'utente o da un programma per richiedere un'azione immediata al sistema operativo.",
    "compilatore": "📖 **Compilatore:** Software che traduce il codice sorgente scritto in linguaggio di programmazione in codice macchina.",
    "compilazione": "📖 **Compilazione:** Fase di traduzione del codice di alto livello scritte da un programmatore in istruzioni in linguaggio macchina.",
    "complessita": "📖 **Complessità Computazionale:** Misura delle risorse di tempo e memoria richieste da un algoritmo per la sua esecuzione.",
    "computer": "📖 **Computer:** Macchina per l'elaborazione di dati rappresentati da caratteri alfanumerici variamente codificati.",
    "connessione": "📖 **Connessione di Rete:** Collegamento logico o fisico stabilito tra due nodi per scambiare pacchetti di dati.",
    "cookie": "📖 **Cookie:** Piccolo file di testo memorizzato dai siti web nel browser dell'utente per conservare preferenze e sessioni.",
    "costante": "📖 **Costante:** Valore informativo che rimane invariato durante l'intera esecuzione di un programma.",
    "costruttore": "📖 **Costruttore:** Metodo speciale di una classe eseguito automaticamente al momento della creazione di un nuovo oggetto.",
    "cpu": "📖 **CPU:** Central Processing Unit. Unità centrale di elaborazione, il vero e proprio 'cervello' del computer.",
    "cpu_bound": "📖 **CPU Bound:** Condizione in cui le prestazioni di un sistema sono limitate dalla velocità di calcolo del processore.",
    "crittografia": "📖 **Crittografia:** Tecnica di cifratura delle informazioni per renderle incomprensibili a chi non possiede la chiave di lettura.",
    "css": "📖 **CSS:** Cascading Style Sheets. Linguaggio usato per definire la formattazione grafica ed il layout delle pagine HTML.",
    "cursore": "📖 **Cursore:** Indicatore visuale sullo schermo che segnala la posizione corrente del puntatore o dell'inserimento testo.",
    "cyberbullismo": "📖 **Cyberbullismo:** Qualsiasi forma di prevaricazione o molestia effettuata tramite strumenti digitali.",
    "daemon": "📖 **Daemon:** Programma di sistema in esecuzione continua in background, senza l'interazione diretta dell'utente.",
    "data_science": "📖 **Data Science:** Disciplina interdisciplinare che utilizza metodi scientifici ed algoritmi per estrarre conoscenza dai dati.",
    "database": "📖 **Database:** Banca dati. Raccolta strutturata ed organizzata di dati digitali consultabile ed aggiornabile.",
    "deadlock": "📖 **Deadlock:** Blocco critico in cui due o più processi rimangono in attesa indefinita delle risorse bloccate reciprocamente.",
    "debugging": "📖 **Debugging:** Il processo sistematico di individuazione e correzione degli errori (bug) all'interno di un software.",
    "decremento": "📖 **Decremento:** Operazione algebrica o di programmazione che sottrae un valore fisso ad una variabile.",
    "default": "📖 **Default:** Configurazione o valore predefinito applicato automaticamente in assenza di una scelta esplicita.",
    "densita": "📖 **Densità di Pixel (PPI):** Misura della concentrazione dei punti luminosi presenti per ogni pollice di uno schermo.",
    "diagramma": "📖 **Diagramma di Flusso (Flowchart):** Rappresentazione grafica dei singoli passi di un algoritmo mediante forme geometriche.",
    "dimensione": "📖 **Dimensione di un File:** La quantità totale di byte occupata da un documento sul supporto di archiviazione.",
    "diodo": "📖 **Diodo:** Componente elettronico che permette il passaggio della corrente elettrica in una sola direzione.",
    "disco": "📖 **Disco Rigido (HDD):** Dispositivo magnetico per la memorizzazione di massa permanente di dati e programmi.",
    "dispositivo": "📖 **Dispositivo:** Apparato elettronico o meccanico progettato per svolgere una specifica funzione.",
    "distribuito": "📖 **Sistema Distribuito:** Insieme di elaboratori indipendenti connessi in rete che cooperano come un unico sistema.",
    "dns": "📖 **DNS:** Domain Name System. Sistema che traduce i nomi dei siti web nei corrispondenti indirizzi IP numerici.",
    "docker": "📖 **Docker:** Piattaforma software che permette di automatizzare il rilascio di applicazioni in container leggeri.",
    "domain": "📖 **Dominio:** Nome univoco che identifica un indirizzo o un sito web sulla rete internet.",
    "download": "📖 **Download:** Processo di trasferimento e salvataggio di dati da una rete remota al proprio dispositivo.",
    "driver": "📖 **Driver:** Software che consente al sistema operativo di comunicare e pilotare un componente hardware.",
    "duna": "📖 **Duna:** Rilievo o collinetta di sabbia accumulata e modellata dall'azione del vento, tipica dei deserti e delle zone costiere.",
    "dump": "📖 **Memory Dump:** Istantanea del contenuto della memoria RAM salvata su disco in seguito ad un errore critico.",
    "eccezione": "📖 **Eccezione:** Anomalia o evento imprevisto che si verifica durante l'esecuzione di un software.",
    "eco": "📖 **Echo (Informatica):** Comando che restituisce in output sul terminale il testo o le variabili passate come argomento.",
    "edge": "📖 **Edge Computing:** Modello di elaborazione dati in cui l'analisi avviene il più vicino possibile alla sorgente delle informazioni.",
    "editor": "📖 **Editor:** Software utilizzato per creare e modificare testi, documenti o codice sorgente di programmi.",
    "email": "📖 **E-mail:** Posta elettronica. Servizio per la trasmissione di messaggi digitali via internet tra utenti.",
    "emulatore": "📖 **Emulatore:** Programma che consente ad un sistema informatico di simulare l'architettura di un altro sistema.",
    "encoding": "📖 **Encoding:** Conversione della codifica di un file audio, video o di testo da un formato all'altro.",
    "encryption": "📖 **Cifratura:** Trasformazione di un messaggio in chiaro in un testo cifrato incomprensibile senza chiave.",
    "enumerazione": "📖 **Enumerazione (Enum):** Tipo di dato definito dal programmatore composto da un insieme fisso di costanti con nome.",
    "espressione": "📖 **Espressione Regolare (Regex):** Sequenza di caratteri che definisce un modello di ricerca per il recupero di testo.",
    "estensione": "📖 **Estensione File:** Suffisso di lettere posto alla fine del nome di un file dopo il punto (es. .pdf, .js).",
    "ethernet": "📖 **Ethernet:** Famiglia di tecnologie standard per reti locali (LAN) cablate per la trasmissione dati.",
    "event_loop": "📖 **Event Loop:** Meccanismo fondamentale che gestisce e distribuisce l'esecuzione di eventi asincroni in un programma.",
    "faas": "📖 **FaaS:** Function as a Service. Modello di cloud computing per eseguire codice senza gestire l'infrastruttura server.",
    "farm": "📖 **Server Farm:** Struttura centralizzata che ospita centinaia di server dedicati alla gestione di servizi ed archiviazione.",
    "fibra": "📖 **Fibra Ottica:** Tecnologia di trasmissione dati basata sul passaggio di impulsi di luce all'interno di fili di vetro o plastica.",
    "file": "📖 **File:** Insieme di informazioni digitali memorizzate su un supporto di archiviazione sotto un unico nome.",
    "firewall": "📖 **Firewall:** Dispositivo di sicurezza di rete che controlla il traffico dati bloccando accessi non autorizzati.",
    "firmware": "📖 **Firmware:** Programma integrato direttamente all'interno di un componente hardware che ne controlla le funzioni base.",
    "flag": "📖 **Flag:** Variabile booleana usata in programmazione come segnale per indicare lo stato di una condizione.",
    "folder": "📖 **Folder:** Cartella digitale utilizzata nei sistemi operativi per raggruppare ed organizzare più file.",
    "fork": "📖 **Fork:** Ingegneria del software. Operazione che crea una copia autonoma del codice sorgente di un progetto.",
    "framework": "📖 **Framework:** Struttura di supporto ed insieme di librerie software per sviluppare applicazioni.",
    "freeware": "📖 **Freeware:** Software distribuito gratuitamente dall'autore senza alcun costo per l'utente finale.",
    "ftp": "📖 **FTP:** File Transfer Protocol. Protocollo di rete per il trasferimento di file tra client e server remoto.",
    "funzione": "📖 **Funzione:** Blocco di codice autonomo che riceve dati in ingresso, esegue un calcolo e restituisce un risultato.",
    "gateway": "📖 **Gateway:** Dispositivo di rete che collega ed instrada il traffico tra due reti che utilizzano protocolli differenti.",
    "gigabyte": "📖 **Gigabyte (GB):** Unità di misura della memoria equivalente a 1024 Megabyte o a circa un miliardo di Byte.",
    "gui": "📖 **GUI:** Graphical User Interface. Interfaccia grafica che permette all'utente di interagire tramite elementi visivi.",
    "hardware": "📖 **Hardware:** La parte fisica e tangibile di un computer (componenti, schermo, tastiera).",
    "hash": "📖 **Hash:** Valore numerico ad altezza fissa generato da un algoritmo a partire da una stringa di dati.",
    "heap": "📖 **Heap:** Area di memoria dinamica utilizzata dai programmi per allocare oggetti e strutture durante l'esecuzione.",
    "host": "📖 **Host:** Qualsiasi dispositivo informatico connesso a una rete che ospita servizi o trasmette e riceve dati.",
    "html": "📖 **HTML:** HyperText Markup Language. Linguaggio di marcatura usato per definire la struttura delle pagine web.",
    "http": "📖 **HTTP:** HyperText Transfer Protocol. Protocollo principale usato per il trasferimento di pagine e risorse sul Web.",
    "https": "📖 **HTTPS:** Versione cifrata e sicura del protocollo HTTP che protegge la riservatezza dei dati scambiati.",
    "icona": "📖 **Icona:** Piccola immagine simbolica utilizzata nelle interfacce grafiche per rappresentare un programma o file.",
    "ide": "📖 **IDE:** Integrated Development Environment. Ambiente che fornisce tutti gli strumenti per scrivere e testare codice.",
    "identificatore": "📖 **Identificatore:** Nome unico assegnato a una variabile, funzione o classe all'interno di un codice sorgente.",
    "incapsulamento": "📖 **Incapsulamento:** Principio che nasconde i dettagli interni di un'entità per esporre un'interfaccia controllata.",
    "incremento": "📖 **Incremento:** Operazione aritmetica o di codice che aggiunge un valore costante a una variabile.",
    "indice": "📖 **Indice:** Posizione numerica che identifica un elemento specifico all'interno di un vettore o matrice.",
    "indirizzamento": "📖 **Indirizzamento IP:** Assegnazione di un codice univoco a un dispositivo per renderlo raggiungibile su una rete.",
    "informatica": "📖 **Informatica:** Scienza che si occupa del trattamento automatico dell'informazione mediante elaboratori elettronici.",
    "infrastruttura": "📖 **Infrastruttura IT:** L'insieme delle componenti hardware, software e di rete necessarie per erogare servizi.",
    "inizializzazione": "📖 **Inizializzazione:** Fase in cui si assegna un valore di partenza a una variabile o si prepara un sistema.",
    "iniezione": "📖 **SQL Injection:** Vulnerabilità di sicurezza che permette a un malintenzionato di inserire comandi nocivi in una query.",
    "input": "📖 **Input:** Insieme di dati o comandi immessi dall'utente all'interno di un computer.",
    "internet": "📖 **Internet:** Rete globale di calcolatori collegati tra loro che comunicano tramite protocolli standardizzati.",
    "ip": "📖 **Indirizzo IP:** Etichetta numerica che identifica in modo univoco un dispositivo collegato a una rete informatica.",
    "istanza": "📖 **Istanza:** Oggetto concreto creato a partire dal modello o dalla struttura definita da una classe.",
    "istruzione_macchina": "📖 **Istruzione Macchina:** Singolo comando eseguibile direttamente dall'hardware del microprocessore.",
    "it": "📖 **IT:** Information Technology. L'insieme delle tecnologie utilizzate per l'elaborazione e la gestione delle informazioni.",
    "iterazione": "📖 **Iterazione:** L'esecuzione ripetuta di un blocco di codice all'interno di un ciclo fino al soddisfacimento di una condizione.",
    "java": "📖 **Java:** Linguaggio di programmazione orientato agli oggetti ampiamente utilizzato nello sviluppo di applicazioni.",
    "json": "📖 **JSON:** JavaScript Object Notation. Formato leggero basato su testo per lo scambio ed il trasferimento di dati digitali.",
    "kernel": "📖 **Kernel:** Il core centrale del sistema operativo che gestisce direttamente l'hardware e l'allocazione delle risorse.",
    "keyword": "📖 **Keyword:** Parola chiave riservata da un linguaggio di programmazione o utilizzata nei motori di ricerca.",
    "lan": "📖 **LAN:** Local Area Network. Rete informatica privata che collega computer in un'area geografica limitata.",
    "laptop": "📖 **Laptop:** Computer portatile compatto con schermo, tastiera e batteria integrati in un'unica unità.",
    "layout": "📖 **Layout:** La disposizione strutturale e grafica degli elementi visivi all'interno di una pagina o interfaccia.",
    "libreria": "📖 **Libreria (Informatica):** Insieme di funzioni o moduli di codice riutilizzabili dagli sviluppatori.",
    "licenza": "📖 **Licenza:** Contratto legale che definisce le condizioni d'uso, modifica o distribuzione di un software.",
    "lifo": "📖 **LIFO:** Last In First Out. Struttura dati (pila) in cui l'ultimo elemento inserito è il primo a essere rimosso.",
    "linea": "📖 **Linea di Comando (CLI):** Interfaccia testuale con cui si impartiscono comandi direttamente al sistema operativo.",
    "lingua": "📖 **Linguaggio di Programmazione:** Linguaggio formale dotato di sintassi rigida usato per scrivere istruzioni per elaboratori.",
    "link": "📖 **Link:** Collegamento ipertestuale che permette di passare direttamente da un documento o pagina web ad un'altra.",
    "log": "📖 **File di Log:** Registro cronologico generato da un sistema che annota eventi, operazioni o errori verificatisi.",
    "loop": "📖 **Loop Infinito:** Errore di programmazione in cui la condizione di uscita da un ciclo non viene mai raggiunta.",
    "mac": "📖 **Indirizzo MAC:** Codice univoco assegnato dal produttore a ciascuna scheda di rete fisica per la sua identificazione.",
    "machine_code": "📖 **Codice Macchina:** Sequenza di bit (0 e 1) direttamente comprensibile e gestita dall'architettura del processore.",
    "macro": "📖 **Macro:** Sequenza di comandi o istruzioni registrata ed eseguibile automaticamente con una sola azione.",
    "main": "📖 **Main:** La funzione o punto d'ingresso principale da cui inizia l'esecuzione di un programma informatico.",
    "mainframe": "📖 **Mainframe:** Computer di grandi dimensioni e altissima potenza progettato per elaborare volumi enormi di dati.",
    "malware": "📖 **Malware:** Qualsiasi programma informatico malevolo progettato per danneggiare, spiare o compromettere un sistema.",
    "mantenimento": "📖 **Manutenzione Software:** L'attività di aggiornamento, correzione bug e ottimizzazione del codice.",
    "maschera": "📖 **Maschera di Rete (Subnet Mask):** Parametro che definisce la suddivisione tra la parte di rete e la parte di host di un IP.",
    "memoria": "📖 **Memoria:** Dispositivo o supporto informatico destinato alla conservazione temporanea o permanente dei dati.",
    "metodo": "📖 **Metodo:** Funzione definita all'interno di una classe che descrive le azioni o i comportamenti degli oggetti.",
    "microcontrollore": "📖 **Microcontrollore:** Circuito integrato compatto progettato per gestire operazioni dedicate in sistemi embedded.",
    "microprocessore": "📖 **Microprocessore:** Circuito integrato che racchiude su un singolo chip le funzioni di elaborazione di una CPU.",
    "middleware": "📖 **Middleware:** Software che agisce da ponte per connettere e far comunicare applicazioni diverse o banche dati.",
    "mips": "📖 **MIPS:** Million Instructions Per Second. Unità di misura teorica della velocità delle prestazioni dei microprocessori.",
    "modem": "📖 **Modem:** Dispositivo elettronico che converte e modula i segnali digitali per la trasmissione dati.",
    "monitor": "📖 **Monitor:** Schermo video che visualizza l'interfaccia grafica ed i risultati delle elaborazioni di un computer.",
    "monolito": "📖 **Architettura Monolitica:** Struttura software in cui tutti i componenti applicativi sono uniti in un unico programma.",
    "mouse": "📖 **Mouse:** Periferica di puntamento che permette di interagire con gli elementi visivi dell'interfaccia grafica.",
    "multitasking": "📖 **Multitasking:** Capacità di un sistema operativo di eseguire ed alternare contemporaneamente più processi.",
    "multithreading": "📖 **Multithreading:** Tecnica che consente l'esecuzione simultanea di più parti (thread) nello stesso programma.",
    "namespace": "📖 **Namespace:** Spazio dei nomi. Contenitore astratto usato per raggruppare identificatori ed evitare conflitti.",
    "navigazione": "📖 **Navigazione Web:** L'esplorazione e la consultazione di ipertesti e pagine all'interno del World Wide Web.",
    "network": "📖 **Network:** Rete di calcolatori o di comunicazione interconnessi per lo scambio di informazioni e risorse.",
    "node_js": "📖 **Node.js:** Ambiente di esecuzione lato server basato sul motore JavaScript V8 per creare applicazioni veloci.",
    "nodo": "📖 **Nodo:** Qualsiasi dispositivo (computer, router, stampante) collegato ad una rete informatica in grado di comunicare.",
    "notifica": "📖 **Notifica:** Messaggio visivo o sonoro generato da un software per informare l'utente di un evento.",
    "null": "📖 **Null:** In programmazione, valore speciale che rappresenta l'assenza volontaria di un oggetto o di un valore valido.",
    "nuvola": "📖 **Nuvola (Cloud):** Insieme di server remoti accessibili via internet per l'archiviazione dati ed l'esecuzione di servizi.",
    "oggetto": "📖 **Oggetto:** Entità software dotata di uno stato (dati) e di comportamenti (metodi) definita da una classe.",
    "omogeneo": "📖 **Dati Omogenei:** Insieme di valori che appartengono tutti al medesimo tipo di dato (es. solo interi).",
    "opcode": "📖 **Opcode:** Codice di operazione. Parte di un'istruzione macchina che specifica l'azione da eseguire.",
    "open_source": "📖 **Open Source:** Software il cui codice sorgente è reso pubblico e liberamente accessibile, modificabile e distribuibile.",
    "ottimizzazione": "📖 **Ottimizzazione:** Processo volto a migliorare l'efficienza, le prestazioni o l'uso delle risorse di un programma.",
    "output": "📖 **Output:** Insieme dei dati o delle informazioni elaborate e restituite da un computer all'utente.",
    "overflow": "📖 **Buffer Overflow:** Anomalia di sicurezza in cui si scrivono più dati di quelli che la memoria riservata può contenere.",
    "overloading": "📖 **Overloading:** Definizione di più funzioni con lo stesso nome all'interno della stessa classe con parametri diversi.",
    "override": "📖 **Override:** Riscrittura di un metodo all'interno di una classe derivata per modificarne il comportamento originale.",
    "pacchetto": "📖 **Pacchetto Dati:** Unità fondamentale di informazione trasmessa attraverso una rete a commutazione di pacchetto.",
    "packet_filtering": "📖 **Packet Filtering:** Tecnica usata dai firewall per analizzare gli intestatari dei pacchetti di rete e bloccarli.",
    "pagina": "📖 **Pagina Web:** Documento ipertestuale fruibile tramite un browser, scritto in HTML ed identificato da un URL.",
    "parsing": "📖 **Parsing:** Analisi sintattica svolta da un software su una sequenza di caratteri per comprenderne la struttura.",
    "partizione": "📖 **Partizione di Disco:** Divisione logica ed indipendente di un hard disk fisico usata per organizzare i file.",
    "password": "📖 **Password:** Parola chiave o sequenza segreta di caratteri usata per autenticarsi ed accedere ad un account protetto.",
    "patch": "📖 **Patch Software:** Aggiornamento distribuito per correggere errori di sicurezza o migliorare le funzionalità.",
    "path": "📖 **Path:** Il percorso testuale che indica la posizione esatta di un file o cartella nel file system.",
    "pec": "📖 **PEC:** Posta Elettronica Certificata. Email con valore legale pari ad una raccomandata con ricevuta di ritorno.",
    "peer_to_peer": "📖 **Peer-to-Peer (P2P):** Architettura di rete distribuita in cui tutti i nodi hanno pari capacità senza un server centrale.",
    "pen_drive": "📖 **Chiavetta USB:** Memoria di massa portatile di tipo flash che si collega direttamente tramite porta USB.",
    "periferica": "📖 **Periferica:** Dispositivo hardware esterno collegato all'unità centrale di un computer.",
    "phishing": "📖 **Phishing:** Truffa informatica progettata per ingannare gli utenti e rubare credenziali o dati sensibili.",
    "pila": "📖 **Pila (Stack):** Struttura dati con gestione LIFO in cui le operazioni di inserimento e rimozione avvengono in cima.",
    "ping": "📖 **Ping:** Utility di rete usata per misurare il tempo di latenza e la raggiungibilità di un host remoto.",
    "pixel": "📖 **Pixel:** Picture Element. Il più piccolo elemento unitario che compone un'immagine digitale su uno schermo.",
    "podcasting": "📖 **Podcast:** Contenuto audio digitale distribuito via internet ed fruibile su richiesta tramite riproduttori ed app.",
    "pointer": "📖 **Puntatore:** Variabile avanzata che memorizza direttamente l'indirizzo di memoria fisica di un'altra risorsa.",
    "pop-up": "📖 **Pop-up:** Finestra pubblicitaria o informativa che si apre automaticamente in sovrimpressione sopra una pagina web.",
    "porta": "📖 **Porta Logica di Rete:** Canale numerico (es. porta 80, 443) usato dai protocolli di rete per instradare i servizi.",
    "porta_logica": "📖 **Porta Logica:** Circuito elettronico fondamentale (AND, OR, NOT) che esegue operazioni sui segnali binari.",
    "portabilita": "📖 **Portabilità:** La capacità di un programma di funzionare su piattaforme e sistemi operativi diversi senza modifiche.",
    "portale": "📖 **Portale Web:** Sito internet che funge da punto d'accesso centralizzato a una vasta gamma di risorse, servizi e link.",
    "privacy": "📖 **Privacy:** Il diritto fondamentale dell'individuo di tutelare e controllare l'uso dei propri dati personali.",
    "processore": "📖 **Processore:** Componente elettronico che esegue i calcoli logico-matematici e coordina l'elaborazione dei dati.",
    "programmazione": "📖 **Programmazione:** L'attività di scrittura e sviluppo di codice sorgente per creare software, app ed algoritmi.",
    "prompt": "📖 **Command Prompt:** L'interfaccia a riga di comando che attende e accetta l'input dell'utente.",
    "proprieta": "📖 **Proprietà CSS:** Regola di stile usata per modificare l'aspetto (colore, dimensione, margini) di un elemento HTML.",
    "protocollo": "📖 **Protocollo:** Insieme di regole formali che disciplinano il formato ed la trasmissione dei dati tra dispositivi.",
    "proxy": "📖 **Proxy Server:** Server intermedio che si frappone tra il browser dell'utente ed Internet per filtrare le richieste.",
    "pseudocodice": "📖 **Pseudocodice:** Descrizione informale e leggibile di un algoritmo utilizzata in fase di progettazione.",
    "push": "📖 **Git Push:** Comando usato per inviare le modifiche locali di un codice ad un repository remoto.",
    "python": "📖 **Python:** Linguaggio di programmazione ad alto livello famoso per la sua sintassi semplice e versatilità.",
    "qualita": "📖 **QoS:** Quality of Service. Meccanismo di rete che garantisce la priorità al traffico dati critico.",
    "qubit": "📖 **Qubit:** Quantum Bit. L'unità d'informazione base del calcolo quantistico capace di trovarsi in sovrapposizione.",
    "query": "📖 **Query:** Interrogazione formale rivolta ad un database per cercare, estrarre o modificare informazioni.",
    "query_string": "📖 **Query String:** Parte dell'URL contenente i parametri e i dati passati a una pagina web (es. ?id=10).",
    "ram": "📖 **RAM:** Random Access Memory. Memoria ad accesso casuale ad alta velocità usata dal computer per i dati in esecuzione.",
    "ransomware": "📖 **Ransomware:** Software malefico che cifra i file dell'utente richiedendo un riscatto in denaro per sbloccarli.",
    "raster": "📖 **Grafica Raster:** Immagine digitale formata da una griglia rettangolare fissa di pixel colorati.",
    "reboot": "📖 **Reboot:** Operazione di riavvio completo del sistema operativo e delle componenti hardware di un calcolatore.",
    "recursion": "📖 **Ricorsione:** Tecnica di programmazione in cui una funzione o procedura richiama direttamente se stessa.",
    "redirezione": "📖 **Redirezione:** Operazione con cui si devia l'output standard di un programma verso un file o un altro comando.",
    "refactoring": "📖 **Refactoring:** Ristrutturazione del codice sorgente per migliorarne la leggibilità senza alterarne il risultato.",
    "registro": "📖 **Registro Elettronico:** Piattaforma digitale usata dalle scuole per la gestione di voti, assenze e comunicazioni.",
    "registro_cpu": "📖 **Registro del Processore:** Cella di memoria interna alla CPU ad altissima velocità utilizzata durante le elaborazioni.",
    "relazione": "📖 **Relazione (Database):** Tabella composta da righe (tupla) e colonne (attributi) all'interno di un database.",
    "render": "📖 **Rendering:** Processo automatizzato di generazione di un'immagine finale bidimensionale da un modello 3D.",
    "repository": "📖 **Repository:** Archivio digitale centralizzato usato per memorizzare, gestire e tracciare la cronologia di codice.",
    "reset": "📖 **Reset:** Ripristino di un dispositivo informatico o applicativo alle sue impostazioni o allo stato iniziale.",
    "response": "📖 **HTTP Response:** Messaggio restituito da un server web al client contenente lo stato e il contenuto della pagina.",
    "rete": "📖 **Rete Informatica:** Insieme di due o più calcolatori collegati tra loro per condividere risorse e dati.",
    "rete_neurale": "📖 **Rete Neurale Artificiale:** Modello informatico ispirato alla struttura del cervello umano usato nell'IA.",
    "ricerca": "📖 **Motore di Ricerca:** Sistema automatico che analizza un indice di siti web per restituire risultati pertinenti.",
    "ricerca_binaria": "📖 **Ricerca Binaria:** Algoritmo efficiente che trova un elemento in una lista già ordinata dimezzando la ricerca.",
    "ridondanza": "📖 **Ridondanza:** Duplicazione di componenti critici di un sistema per garantirne il funzionamento continuo.",
    "risoluzione": "📖 **Risoluzione di Schermo:** Numero totale di pixel visualizzabili in orizzontale e verticale (es. 1920x1080).",
    "robotica": "📖 **Robotica:** Disciplina dell'ingegneria che studia la progettazione, costruzione e programmazione di robot.",
    "rollback": "📖 **Rollback:** Operazione di annullamento che ripristina il database allo stato precedente ad una transazione fallita.",
    "rom": "📖 **ROM:** Read Only Memory. Memoria non volatile di sola lettura contenente il software permanente di avvio.",
    "root": "📖 **Root:** L'account amministratore di sistema con i massimi privilegi di accesso su sistemi Linux/Unix.",
    "router": "📖 **Router:** Dispositivo di rete che instrada i pacchetti di dati tra reti informatiche diverse.",
    "routine": "📖 **Subroutine:** Blocco di istruzioni isolato all'interno di un programma progettato per svolgere un compito specifico.",
    "routing": "📖 **Routing:** Il processo di selezione e instradamento del percorso migliore per trasferire i dati in una rete.",
    "rsa": "📖 **RSA:** Algoritmo di crittografia a chiave pubblica ampiamente utilizzato per la cifratura sicura dei dati.",
    "runtime": "📖 **Runtime:** La fase temporale durante la quale un programma o applicazione si trova in reale esecuzione.",
    "sampling": "📖 **Campionamento:** Processo di conversione di un segnale continuo (es. audio) in una sequenza discreta di valori digitali.",
    "scalabilita": "📖 **Scalabilità:** La capacità di un sistema software o hardware di adattarsi all'aumento delle richieste di carico.",
    "scansione": "📖 **Scansione:** Processo di digitalizzazione di un documento cartaceo o analisi antivirus della memoria.",
    "scatola": "📖 **Scatola Nera (Black Box):** Test di verifica di un software svolto analizzando solo input e output senza codice.",
    "scheda": "📖 **Scheda Madre:** La scheda di circuito stampato principale che collega ed alimenta i componenti di un PC.",
    "scope": "📖 **Scope:** La porzione di codice in cui una determinata variabile è visibile ed accessibile.",
    "script": "📖 **Script:** Breve programma o sequenza di comandi interpretati ed eseguiti in tempo reale senza compilazione.",
    "scripting": "📖 **Linguaggio di Scripting:** Linguaggio interpretato usato solitamente per automatizzare compiti ed integrare ambienti.",
    "scrum": "📖 **Scrum:** Metodologia agile per la gestione dei progetti incentrata su iterazioni brevi denominate sprint.",
    "sdk": "📖 **SDK:** Software Development Kit. Insieme di strumenti ed utility forniti per facilitare lo sviluppo di app.",
    "security": "📖 **Sicurezza Informatica:** Insieme delle misure tecnologiche destinate a proteggere reti, sistemi e dati.",
    "segmentazione": "📖 **Segmentazione di Memoria:** Tecnica di gestione della RAM che suddivide lo spazio indirizzabile in blocchi logici.",
    "selettore": "📖 **Selettore CSS:** Pattern usato per individuare gli elementi HTML su cui applicare uno specifico stile grafico.",
    "semaforo": "📖 **Semaforo (Informatica):** Variabile usata per la sincronizzazione e l'accesso coordinato a risorse condivise.",
    "server": "📖 **Server:** Elaboratore ad alte prestazioni destinato a gestire ed erogare risorse e servizi a molteplici client.",
    "sessione": "📖 **Sessione Utente:** Intervallo di tempo limitato in cui un utente interagisce in modo continuo con una piattaforma web.",
    "shell": "📖 **Shell:** Interfaccia utente testuale o grafica che permette l'interazione diretta con il sistema operativo.",
    "shortcut": "📖 **Scorciatoia:** Combinazione di tasti sulla tastiera che permette di eseguire rapidamente un comando nel sistema.",
    "signal": "📖 **Segnale di Sistema:** Notifica asincrona inviata ad un processo per informarlo di un evento critico.",
    "sincronizzazione": "📖 **Sincronizzazione:** Processo che rende identici i dati o file memorizzati in due o più posizioni o dispositivi.",
    "sintassi": "📖 **Sintassi:** Insieme di regole formali che stabiliscono la combinazione corretta di simboli di un linguaggio.",
    "sistema": "📖 **Sistema Operativo:** Software di base che gestisce l'hardware di un computer e fornisce l'interfaccia.",
    "sito": "📖 **Sito Web:** Insieme di pagine ipertestuali correlate ed accessibili tramite la rete internet tramite un dominio.",
    "smartphone": "📖 **Smartphone:** Telefono cellulare avanzato integrato con capacità di elaborazione, fotocamera e connessione internet.",
    "socket": "📖 **Socket:** Punto terminale di una comunicazione bidirezionale tra due programmi in esecuzione sulla rete.",
    "software": "📖 **Software:** L'insieme dei programmi e istruzioni che permettono ad un computer di funzionare.",
    "solid": "📖 **Principi SOLID:** Insieme di cinque linee guida della progettazione ad oggetti volte a creare codice manutenibile.",
    "source_code": "📖 **Codice Sorgente:** Il testo leggibile scritto da un programmatore contenente le istruzioni di un software.",
    "spam": "📖 **Spam:** Invio massivo e non richiesto di messaggi pubblicitari o indesiderati tramite posta elettronica.",
    "speed": "📖 **Speed Test:** Verifica della velocità reale di trasmissione (download ed upload) della propria connessione ad internet.",
    "spid": "📖 **SPID:** Sistema Pubblico di Identità Digitale. Credenziali usate per accedere ai servizi online della PA.",
    "sql": "📖 **SQL:** Structured Query Language. Linguaggio standard per la creazione, gestione ed interrogazione di database.",
    "ssi": "📖 **SSD:** Solid State Drive. Unità di memoria di massa basata su memorie flash veloci e senza parti meccaniche.",
    "ssh": "📖 **SSH:** Secure Shell. Protocollo di rete per accedere ed amministrare in modo cifrato un computer remoto.",
    "stack_overflow": "📖 **Stack Overflow:** Errore critico che si verifica quando la pila della memoria esaurisce lo spazio a disposizione.",
    "state": "📖 **Stato di un Sistema:** L'insieme delle informazioni e valori memorizzati in un preciso istante da un'applicazione.",
    "streaming": "📖 **Streaming:** Flusso continuo di dati audio o video trasmesso via internet e riproducibile in tempo reale.",
    "stringa": "📖 **Stringa:** In programmazione, una sequenza ordinata di caratteri delimitata da virgolette.",
    "stringa_vuota": "📖 **Stringa Vuota:** Sequenza testuale che non contiene alcun carattere, rappresentata da doppi apici vicini (\"\").",
    "struct": "📖 **Struct:** Struttura dati personalizzata che raggruppa variabili di tipo diverso sotto un unico nome.",
    "supporto": "📖 **Supporto Tecnico:** Servizio di assistenza dedicato alla risoluzione di problemi hardware o software.",
    "switch": "📖 **Switch di Rete:** Dispositivo hardware di rete che inoltra i pacchetti dati esclusivamente verso il destinatario.",
    "syntax_error": "📖 **Errore Sintattico:** Errore commesso dal programmatore nella scrittura del codice che ne impedisce la compilazione.",
    "tabella": "📖 **Tabella:** Struttura per l'organizzazione dei dati disposta in righe ed colonne orizzontali e verticali.",
    "tablet": "📖 **Tablet:** Dispositivo mobile con schermo tattile integrato senza tastiera fisica separata.",
    "tag": "📖 **Tag:** Etichetta o parola chiave associata ad un testo o file per facilitarne l'identificazione e la catalogazione.",
    "tastiera": "📖 **Tastiera:** Periferica di input provvista di tasti usata per digitare caratteri, testi e comandi nel computer.",
    "telematica": "📖 **Telematica:** Disciplina che unisce le tecnologie dell'informatica con quelle delle telecomunicazioni.",
    "terabyte": "📖 **Terabyte (TB):** Unità di misura della memoria equivalente a 1024 Gigabyte o a circa mille miliardi di Byte.",
    "terminale": "📖 **Terminale:** Interfaccia a riga di comando usata per impartire istruzioni dirette al sistema operativo.",
    "testo": "📖 **Testo Ipertestuale:** Insieme di parole e frasi interconnesse tramite collegamenti (link) consultabili non linearmente.",
    "theme": "📖 **Tema Grafico:** Insieme di stili visuali, colori e font usati per personalizzare l'aspetto visivo di un'applicazione.",
    "thread": "📖 **Thread:** Sotto-processo leggero di un programma in esecuzione eseguibile in parallelo dalla CPU.",
    "thread_safe": "📖 **Thread Safety:** Proprietà di un codice di poter essere eseguito da più thread contemporaneamente senza corrompere i dati.",
    "time_complexity": "📖 **Complessità Temporale:** Stima del tempo richiesto da un algoritmo espresso come funzione dell'input.",
    "token": "📖 **Token:** Stringa o identificatore univoco generato per autenticare un utente o autorizzare una sessione.",
    "touchscreen": "📖 **Touchscreen:** Schermo sensibile al tocco delle dita che funge sia da periferica di output che di input.",
    "transazione": "📖 **Transazione:** Unità di lavoro atomica composta da più operazioni su un database che devono avere tutte successo.",
    "trojan": "📖 **Trojan Horse:** Malware che si nasconde all'interno di un programma apparentemente innocuo per infettare il PC.",
    "try_catch": "📖 **Blocco Try-Catch:** Meccanismo nei linguaggi di programmazione per catturare e gestire le eccezioni ed errori.",
    "tutorial": "📖 **Tutorial:** Guida illustrata o video didattico che spiega passo-passo come utilizzare un programma o compito.",
    "type_casting": "📖 **Casting di Tipo:** Conversione esplicita o implicita di un valore da un tipo di dato ad un altro.",
    "unicast": "📖 **Unicast:** Modalità di trasmissione dati in rete in cui le informazioni sono inviate da un singolo ad un unico destinatario.",
    "unicode": "📖 **Unicode:** Standard internazionale di codifica che assegna un numero univoco ad ogni carattere di qualsiasi lingua.",
    "unit": "📖 **Unità Aritmetico Logica (ALU):** Componente della CPU che esegue tutte le operazioni matematiche e logiche.",
    "unity": "📖 **Engine Grafico:** Piattaforma software usata dagli sviluppatori per creare e modellare videogiochi e simulazioni.",
    "upload": "📖 **Upload:** Trasferimento di un file dal proprio computer locale verso un server o una rete remota.",
    "url": "📖 **URL:** Uniform Resource Locator. Indirizzo univoco che identifica la posizione di una risorsa sulla rete Internet.",
    "usb": "📖 **USB:** Universal Serial Bus. Standard di connessione via cavo per collegare periferiche e scambiare dati o energia.",
    "usb_c": "📖 **USB-C:** Standard di connettore universale reversibile per il trasferimento ad alta velocità di dati, video ed energia.",
    "utente": "📖 **Utente:** Persona fisica che utilizza un computer, un programma o un servizio di rete.",
    "variabile": "📖 **Variabile:** In informatica, uno spazio di memoria identificato da un nome che contiene un valore modificabile.",
    "vettore": "📖 **Vettore:** Struttura dati lineare composta da una sequenza ordinata di elementi dello stesso tipo accessibili via indice.",
    "vettore_ordinato": "📖 **Array Ordinato:** Vettore i cui elementi sono mantenuti sistematicamente disposti in ordine crescente.",
    "video": "📖 **Videoconferenza:** Comunicazione interattiva a distanza tra due o più utenti basata sulla trasmissione video.",
    "virtual_dom": "📖 **DOM Virtuale:** Rappresentazione astratta in memoria del DOM HTML usata nei framework per aggiornare la pagina.",
    "virtual_machine": "📖 **Macchina Virtuale:** Ambiente software che simula un intero sistema hardware ed esegue un sistema operativo.",
    "virtualizzazione": "📖 **Virtualizzazione:** Tecnologia che permette la creazione di risorse informatiche astratte su hardware reale.",
    "virus": "📖 **Virus Informatico:** Codice malevolo in grado di replicarsi autonomamente all'interno di altri programmi o file.",
    "vocal": "📖 **Assistente Vocale:** Software basato su intelligenza artificiale capace di comprendere ed eseguire comandi a voce.",
    "volatilit": "📖 **Volatilità:** Caratteristica di una memoria (es. RAM) di perdere tutti i dati contenuti all'interruzione dell'energia.",
    "vpn": "📖 **VPN:** Virtual Private Network. Rete privata virtuale che cifra la connessione per garantire privacy e sicurezza.",
    "vulnerabilita": "📖 **Vulnerabilità:** Debolezza o falla di un sistema che può essere sfruttata per compromettere la sicurezza dei dati.",
    "web": "📖 **World Wide Web (WWW):** Rete globale di informazioni ipertestuali interconnesse ed accessibili tramite Internet.",
    "web_server": "📖 **Web Server:** Software o computer che riceve le richieste dei browser ed eroga le risorse e le pagine dei siti.",
    "webcam": "📖 **Webcam:** Piccola telecamera digitale collegata ad un computer per riprendere e trasmettere immagini video in rete.",
    "webmaster": "📖 **Webmaster:** Persona responsabile della gestione, progettazione, manutenzione ed aggiornamento di un sito web.",
    "webpack": "📖 **Module Bundler:** Strumento usato nello sviluppo web per impacchettare ed ottimizzare asset e file JavaScript.",
    "websocket": "📖 **WebSocket:** Protocollo di comunicazione di rete che fornisce un canale interattivo full-duplex su una connessione TCP.",
    "widget": "📖 **Widget:** Piccolo elemento grafico applicativo integrato in un'interfaccia che mostra informazioni in tempo reale.",
    "wifi": "📖 **Wi-Fi:** Tecnologia di connessione senza fili che consente a dispositivi digitali di accedere ad una rete locale.",
    "xml": "📖 **XML:** Extensible Markup Language. Linguaggio di marcatura flessibile usato per strutturare, memorizzare e scambiare dati.",
    "yield": "📖 **Yield:** Istruzione usata nei generatori per sospendere e restituire temporaneamente un valore senza perdere lo stato.",
    "zero_day": "📖 **Zero-Day:** Falla di sicurezza o vulnerabilità software appena scoperta e non ancora corretta dallo sviluppatore.",
    "zip": "📖 **ZIP:** Formato file compresso usato per ridurre le dimensioni di uno o più file e facilitarne il trasferimento.",

    // --- 2. MATEMATICA, FISICA, CHIMICA & ASTRONOMIA ---
    "addendo": "📖 **Addendo:** Ciascuno dei numeri che vengono sommati in un'operazione di addizione.",
    "alchimia": "📖 **Alchimia:** Antica pratica filosofica ed esoterica precursore della chimica moderna, volta alla trasmutazione metallica.",
    "algebra": "📖 **Algebra:** Ramo della matematica che studia le strutture algebriche, le relazioni e le quantità rappresentate tramite simboli.",
    "ampiezza": "📖 **Ampiezza:** Valore massimo raggiunto da un'onda o da un segnale variabile rispetto al suo valore medio.",
    "analisi": "📖 **Analisi Matematica:** Studio delle proprietà e del comportamento delle funzioni, dei limiti, dei derivati e degli integrali.",
    "anello": "📖 **Anello (Matematica):** Struttura algebrica composta da un insieme dotato di due operazioni interne.",
    "anodo": "📖 **Anodo:** Elettrodo positivo verso il quale migrano gli anioni in una cella elettrochimica.",
    "antimateria": "📖 **Antimateria:** Materia composta da antiparticelle corrispondenti alle particelle ordinarie ma con carica opposta.",
    "apogeo": "📖 **Apogeo:** Il punto di massima distanza dalla Terra nell'orbita di un satellite o della Luna.",
    "asse": "📖 **Asse di Simmetria:** Retta reale o immaginaria rispetto alla quale una figura geometrica risulta speculare.",
    "asteroide": "📖 **Asteroide:** Piccolo corpo celeste roccioso o metallico che orbita attorno al Sole, prevalentemente tra Marte e Giove.",
    "astrofisica": "📖 **Astrofisica:** Ramo dell'astronomia che applica le leggi della fisica per studiare la natura degli oggetti celesti.",
    "atomo": "📖 **Atomo:** La più piccola unità di un elemento chimico che conserva le sue proprietà caratteristiche.",
    "azimuth": "📖 **Azimuth:** Angolo orizzontale misurato in senso orario a partire da una direzione di riferimento.",
    "barometro": "📖 **Barometro:** Strumento scientifico utilizzato per misurare la pressione atmosferica.",
    "base": "📖 **Base Numerica:** Il numero di cifre distinte che un sistema di numerazione posizionale utilizza per i valori.",
    "batteria": "📖 **Batteria:** Dispositivo elettrochimico accumulatore di energia in grado di erogare corrente continua.",
    "bosone": "📖 **Bosone:** Particella subatomica che obbedisce alla statistica di Bose-Einstein e trasporta le forze fondamentali.",
    "calore": "📖 **Calore Specifico:** La quantità di energia termica necessaria per aumentare di un grado la temperatura di un'unità di massa.",
    "catalizzatore": "📖 **Catalizzatore:** Sostanza chimica che aumenta la velocità di una reazione senza consumarsi nel processo.",
    "catodo": "📖 **Catodo:** Elettrodo negativo verso il quale migrano i cationi in una cella elettrochimica.",
    "cometa": "📖 **Cometa:** Corpo celeste roccioso e ghiacciato che sviluppa una chioma luminosa quando si avvicina al Sole.",
    "coppia": "📖 **Coppia di Forze:** Sistema formato da due forze uguali e parallele ma con versi opposti che produce una rotazione.",
    "densita_fisica": "📖 **Densità:** Rapporto tra la massa di un corpo ed il volume che esso occupa.",
    "divisione": "📖 **Divisione per Zero:** Operazione aritmetica non definita in matematica che genera un errore nei programmi.",
    "elettricita": "📖 **Elettricità:** Insieme dei fenomeni fisici associati alla presenza e al flusso di cariche elettriche.",
    "elettrone": "📖 **Elettrone:** Particella subatomica con carica elettrica negativa che orbita attorno al nucleo atomico.",
    "energia": "📖 **Energia:** Grandezza fisica che misura la capacità di un sistema di compiere un lavoro.",
    "entropia": "📖 **Entropia:** In termodinamica, misura del grado di disordine o di indisponibilità di energia di un sistema isolato.",
    "equazione": "📖 **Equazione:** Uguaglianza matematica tra due espressioni algebriche contenente una o più incognite.",
    "fattoriale": "📖 **Fattoriale:** Prodotto di tutti i numeri interi positivi minori o uguali a un determinato numero $n$.",
    "fisica": "📖 **Fisica:** Scienza della natura che studia la materia, l'energia, lo spazio, il tempo e le loro interazioni fondamentali.",
    "fotonica": "📖 **Fotone:** Quanto di energia della radiazione elettromagnetica che si muove alla velocità della luce.",
    "frazione": "📖 **Frazione:** Rappresentazione matematica del rapporto tra due numeri interi detti numeratore e denominatore.",
    "fusione": "📖 **Fusione Nucleare:** Reazione nucleare in cui due nuclei atomici leggeri si uniscono per formarne uno più pesante.",
    "galassia": "📖 **Galassia:** Insieme gigantesco di stelle, sistemi, gas e polveri legati insieme dalla forza di gravità.",
    "gravita": "📖 **Gravità:** Forza fondamentale di attrazione reciproca esercitata tra corpi dotati di massa.",
    "incognita": "📖 **Incognita:** Valore sconosciuto rappresentato da una lettera all'interno di un'equazione o disequazione.",
    "induttanza": "📖 **Induttanza:** Proprietà di un circuito elettrico che si oppone alle variazioni di corrente.",
    "inerzia": "📖 **Inerzia:** Proprietà della materia di resistere a qualsiasi variazione del proprio stato di quiete o movimento.",
    "ipotenusa": "📖 **Ipotenusa:** Il lato più lungo di un triangolo rettangolo, opposto all'angolo retto di 90 gradi.",
    "limite": "📖 **Limite Matematico:** Concetto fondamentale dell'analisi che descrive il valore a cui tende una funzione al punto dato.",
    "logaritmo": "📖 **Logaritmo:** L'esponente al quale elevare una base per ottenere un determinato numero.",
    "luce": "📖 **Anno Luce:** Unità di misura della lunghezza astronomica equivalente alla distanza percorsa dalla luce in un anno.",
    "matematica": "📖 **Matematica:** Scienza che studia le quantità, le structures spaziali, le forme ed i concetti di calcolo e misura.",
    "matrice": "📖 **Matrice:** Tabella ordinata di numeri disposti su righe e colonne, usata in algebra e grafica digitale.",
    "media_aritmetica": "📖 **Media Aritmetica:** Il valore calcolato sommando un insieme di numeri e dividendo il totale per il loro numero.",
    "mediana": "📖 **Mediana:** In statistica, il valore centrale che divide una distribuzione di dati ordinati in due parti uguali.",
    "neutrone": "📖 **Neutrone:** Particella subatomica priva di carica elettrica presente nel nucleo di tutti gli atomi eccetto l'idrogeno.",
    "numero_primo": "📖 **Numero Primo:** Numero intero maggiore di 1 divisibile esclusivamente per 1 e per se stesso.",
    "operando": "📖 **Operando:** Ciascuno dei valori o delle variabili su cui viene eseguita un'operazione matematica o logica.",
    "operatore": "📖 **Operatore:** Simbolo o funzione che indica un'azione aritmetica o logica da eseguire tra valori.",
    "orbita": "📖 **Orbita:** Traiettoria chiusa percorsa da un corpo celeste o artificiale attorno a un centro di gravità.",
    "osmosi": "📖 **Osmosi:** Diffusione spontanea del solvente attraverso una membrana semipermeabile verso una soluzione concentrata.",
    "ottica": "📖 **Rifrazione:** Il deviare di un raggio luminoso al passaggio tra due mezzi trasparenti con diversa densità.",
    "parabola": "📖 **Parabola:** In geometria, curva piana costituita dal luogo dei punti equidistanti da un punto fisso e da una retta.",
    "pari": "📖 **Numero Pari:** Numero intero che risulta perfettamente divisibile per 2 senza lasciare alcun resto.",
    "pendenza": "📖 **Pendenza (Coefficiente Angolare):** Valore che misura l'inclinazione di una retta rispetto all'asse delle ascisse.",
    "perielio": "📖 **Perielio:** Il punto di minimo distacco dal Sole nell'orbita di un pianeta o corpo del sistema solare.",
    "piano": "📖 **Piano Cartesiano:** Sistema di riferimento formato da due rette orientate e ortogonali usate per individuare punti.",
    "polinomio": "📖 **Polinomio:** Espressione algebrica formata dalla somma algebrica di più monomi non simili.",
    "potenza": "📖 **Potenza Matematica:** Operazione algebrica che consiste nel moltiplicare la base per se stessa per l'esponente.",
    "precedenza": "📖 **Precedenza degli Operatori:** L'ordine di priorità con cui vengono eseguite le operazioni in un'espressione.",
    "pressione": "📖 **Pressione Elettronica (Tensione):** La differenza di potenziale elettrico espressa in Volt tra due punti.",
    "probabilita": "📖 **Probabilità:** Misura matematica della frequenza con cui un evento casuale o incerto può verificarsi.",
    "protone": "📖 **Protone:** Particella subatomica dotata di carica elettrica positiva situata nel nucleo dell'atomo.",
    "radice": "📖 **Radice Quadrata:** Operazione matematica inversa dell'elevamento al quadrato di un numero intero o reale.",
    "ricorrenza": "📖 **Relazione di Ricorrenza:** Equazione matematica che definisce i termini di una sequenza in funzione dei precedenti.",
    "simmetria": "📖 **Simmetria:** Proprietà di una figura la cui forma si corrisponde esattamente rispetto ad un punto, una retta o un piano.",
    "spazio_vettoriale": "📖 **Spazio Vettoriale:** Insieme di elementi su cui sono definite operazioni di somma e moltiplicazione per scalari.",
    "statistica": "📖 **Statistica:** Scienza che si occupa della raccolta, analisi, interpretazione ed organizzazione dei dati quantitativi.",
    "teorema": "📖 **Teorema:** Proposizione matematica la cui validità deve essere dimostrata a partire da assiomi o altri teoremi.",
    "trigonometria": "📖 **Trigonometria:** Ramo della matematica che studia le relazioni tra gli angoli ed i lati dei triangoli.",
    "velocita": "📖 **Velocità della Luce:** La massima velocità fisica nell'universo, pari a circa 299.792 km al secondo nel vuoto.",

    // --- 3. UMANISTICA, LINGUA, LETTERATURA & ARTE ---
    "aforisma": "📖 **Aforisma:** Breve massima o sentenza che esprime in modo denso e sintetico una verità o un principio morale.",
    "allegoria": "📖 **Allegoria:** Figura retorica mediante la quale un concetto astratto viene espresso attraverso un'immagine concreta.",
    "allitterazione": "📖 **Allitterazione:** Ripetizione dello stesso suono o della stessa sillaba all'inizio o all'interno di più parole vicine.",
    "analogia": "📖 **Analogia:** Rapporto di somiglianza tra due elementi o situazioni diverse, usato per spiegare un concetto.",
    "anfora": "📖 **Anfora:** Vaso antico di terracotta con due manici e collo stretto, usato per contenere vino, olio o grano.",
    "antitesi": "📖 **Antitesi:** Figura retorica che accosta due concetti opposti per far risaltare il loro contrasto.",
    "antropologia": "📖 **Antropologia:** Scienza che studia l'essere umano dal punto di vista biologico, culturale, sociale ed evolutivo.",
    "archeologia": "📖 **Archeologia:** Scienza che studia le civiltà antiche attraverso il recupero e l'analisi dei reperti materiali.",
    "argomento": "📖 **Argomento:** Tetto o tema centrale di un discorso, una tesi o una dimostrazione logica.",
    "armonia": "📖 **Armonia:** Combinazione gradevole ed equilibrata di suoni, colori, forme o elementi distinti.",
    "autonomia": "📖 **Autonomia:** Capacità di un individuo o di un ente di governarsi da solo e di prendere decisioni indipendenti.",
    "cappannone": "📖 **Capannone:** Grande edificio ad un solo piano adibito a magazzino, produzione industriale o laboratorio.",
    "chimerico": "📖 **Chimerico:** Che è frutto di pura fantasia, utopico, irreale o impossibile da realizzare.",
    "comunicazione": "📖 **Comunicazione:** Processo di trasmissione di informazioni, idee e messaggi tra un emittente e un ricevente.",
    "democrazia": "📖 **Democrazia:** Forma di governo in cui il potere sovrano appartiene al popolo, che lo esercita direttamente o tramite rappresentanti.",
    "dramma": "📖 **Dramma:** Opera teatrale o cinematografica caratterizzata dallo sviluppo inteso di conflitti ed emozioni forti.",
    "enciclopedia": "📖 **Enciclopedia:** Opera che raccoglie in modo sistematico il complesso delle conoscenze umane o di una disciplina.",
    "etica": "📖 **Etica:** Ramo della filosofia che studia i principi e i valori che guidano il comportamento umano distinguendo il bene dal male.",
    "filantropo": "📖 **Filantropo:** Persona che si dedica a opere di bene, alla beneficenza e ad aiutare il prossimo per amore dell'umanità.",
    "chiaroscuro": "📖 **Chiaroscuro:** Tecnica pittorica basata sull'uso accentuato dei contrasti tra luce e ombra per dare rilievo alle figure.",
    "ermeneutica": "📖 **Ermeneutica:** Arte e metodologia dell'interpretazione, della spiegazione e della traduzione dei testi.",
    "filologia": "📖 **Filologia:** Disciplina che studia i testi letterari ed i documenti scritti per ricostruirne la forma originale.",
    "idillio": "📖 **Idillio:** Breve componimento poetico d'ispirazione pastorale, incentrato su temi sereni e naturali.",
    "litote": "📖 **Litote:** Figura retorica che consiste nell'affermare un concetto negando il suo contrario.",
    "maratona": "📖 **Maratona:** Corsa podistica sulla distanza olimpica di 42,195 km. In senso figurato indica una prova lunga e impegnativa.",
    "mecenate": "📖 **Mecenate:** Persona di ampie disponibilità economiche che protegge e sostiene finanziariamente artisti, letterati e studiosi.",
    "metafora": "📖 **Metafora:** Figura retorica che sostituisce un termine con un altro legato da un rapporto di somiglianza.",
    "metodologia": "📖 **Metodologia:** Studio dei metodi e dei principi guida applicati in una ricerca scientifica o nella didattica.",
    "metonimia": "📖 **Metonimia:** Figura retorica che consiste nel sostituire un termine con un altro legato da una relazione di contiguità.",
    "museo": "📖 **Museo:** Istituzione permanente che raccoglie, conserva, studia ed espone opere d'arte o reperti storici e scientifici.",
    "neologismo": "📖 **Neologismo:** Parola o espressione nuova introdotta di recente all'interno di una lingua.",
    "onomatopea": "📖 **Onomatopea:** Figura retorica che consiste nel riprodurre o evocare, tramite i suoni di una parola, un rumore naturale o un'azione.",
    "ossimoro": "📖 **Ossimoro:** Unione di due parole di significato opposto e apparentemente inconciliabile.",
    "paragrafatura": "📖 **Paragrafo:** Porzione di testo compresa tra due punti a capo, formata da una o più frasi incentrate su un unico concetto.",
    "prosopopea": "📖 **Prosopopea:** Personificazione retorica mediante la quale si fanno parlare oggetti inanimati, defunti o concetti astratti.",
    "relitto": "📖 **Relitto:** Ciò che rimane di una nave, di un aereo o di un veicolo distrutto o affondato.",
    "sillogismo": "📖 **Sillogismo:** Tipo di ragionamento deduttivo della logica aristotelica formato da due premesse e una conclusione.",
    "similitudine": "📖 **Similitudine:** Figura retorica che paragona due elementi esplicitamente usando connettivi come *come*, *sembra*, *pare*.",
    "sinecdoche": "📖 **Sinecdoche:** Figura retorica che esprime una parola usando la parte per il tutto o il tutto per la parte.",
    "sinestesia": "📖 **Sinestesia:** Figura retorica che accosta due termini appartenenti a sfere sensoriali differenti.",

    // --- 4. BIOLOGIA, MEDICINA, SCIENZE ED AMBIENTE ---
    "antigene": "📖 **Antigene:** Sostanza capace di indurre una risposta immunitaria e la produzione di anticorpi nell'organismo.",
    "batterio": "📖 **Batterio:** Microorganismo unicellulare procariota privo di nucleo ben definito.",
    "biologia": "📖 **Biologia:** Scienza scientifica che studia i viventi, la loro struttura, funzione, crescita ed evoluzione.",
    "cartografia": "📖 **Cartografia:** Scienza e tecnica della preparazione e del disegno di carte geografiche e mappe.",
    "cellula": "📖 **Cellula:** L'unità strutturale e funzionale di base di tutti gli organismi viventi.",
    "ciclo": "📖 **Ciclo:** Sequenza ordinata di fenomeni o eventi che si ripetono sistematicamente nello stesso ordine.",
    "clorofilla": "📖 **Clorofilla:** Pigmento verde presente nelle piante indispensabile per la fotosintesi clorofilliana.",
    "dna": "📖 **DNA:** Acido desossiribonucleico. Macromolecola che racchiude tutte le informazioni genetiche dell'organismo.",
    "ecosistema": "📖 **Ecosistema:** Insieme degli organismi viventi e dell'ambiente fisico con cui interagiscono in un determinato territorio.",
    "enzima": "📖 **Enzima:** Proteina ad azione catalitica grado di accelerare specifiche reazioni biochimiche nell'organismo.",
    "evoluzione": "📖 **Evoluzione:** Processo di graduale e continuo cambiamento biologico delle specie viventi nel corso delle generazioni.",
    "fisiologia": "📖 **Fisiologia:** Scienza biologica che studia il funzionamento degli organismi viventi e dei loro organi.",
    "genoma": "📖 **Genoma:** Il corredo genetico completo di un organismo contenuto nel suo DNA.",
    "omeostasi": "📖 **Omeostasi:** Attitudine degli organismi viventi a mantenere costante il proprio ambiente interno.",
    "virus_bio": "📖 **Virus (Biologia):** Agente infettivo acellulare di dimensioni microscopiche che si replica solo all'interno di cellule ospiti.",

    // --- 5. SCUOLA, DIDATTICA & ISTITUZIONI ---
    "audiobook": "📖 **Audiobook:** Libro recitato da uno speaker o attore e registrato in formato audio digitale.",
    "didattica": "📖 **Didattica:** Scienza dell'insegnamento e dei metodi di apprendimento scolastico ed educativo.",
    "diploma": "📖 **Diploma:** Titolo di studio ufficiale rilasciato al completamento di un percorso di istruzione scolastica o accademica.",
    "educazione": "📖 **Educazione:** Processo continuo di sviluppo delle facoltà intellettuali, morali e fisiche dell'individuo.",
    "istruzione": "📖 **Istruzione:** L'attività metodica di insegnamento e trasmissione delle conoscenze e competenze culturali.",
    "laboratorio": "📖 **Laboratorio:** Locale attrezzato con strumenti specifici per la sperimentazione scientifica o la didattica pratica.",
    "normativa": "📖 **Normativa:** Insieme di leggi, regolamenti e norme che disciplinano un determinato settore o attività.",
    "procedura": "📖 **Procedura:** Insieme di istruzioni riutilizzabili che eseguono un compito senza restituire un valore formale di ritorno.",
    "tutela": "📖 **GDPR:** Regolamento Generale sulla Protezione dei Dati personali in vigore nell'Unione Europea."
  },

  faqs: [
    // --- SEZIONE FORM E MODULISTICA SPECIFICA ---
    {
      "id": "FORM_INGRESSO_ESPERTI_ESTERNI",
      "type": "form",
      "label": "l'autorizzazione per l'ingresso di esperti esterni",
      "keywords": [
        "richiesta autorizzazione ingresso esperti esterni",
        "ingresso esperti esterni",
        "esperti esterni",
        "esperti",
        "autorizzazione esperti",
        "form esperti esterni",
        "modulo esperti esterni",
        "esperto esterno"
      ],
      "responses": [
        "📋 **Richiesta Autorizzazione Ingresso Esperti Esterni:**\n\nPuoi accedere e compilare il modulo ufficiale al seguente link:\n🔗 <a href='https://forms.cloud.microsoft/e/jvGm4wwcz4' target='_blank' style='color: #004085; font-weight: bold;'>Apri Form Autorizzazione Esperti Esterni</a>"
      ]
    },
    {
      "id": "FORM_RICHIESTA_FOTOCOPIE",
      "type": "form",
      "label": "la richiesta di stampa fotocopie",
      "keywords": [
        "richiesta fotocopie",
        "fotocopie",
        "form fotocopie",
        "modulo fotocopie",
        "fare fotocopie",
        "stampa fotocopie",
        "richiedere fotocopie"
      ],
      "responses": [
        "🖨️ **Richiesta Fotocopie:**\n\nPuoi inoltrare la richiesta di stampa fotocopie tramite il Form dedicato:\n🔗 <a href='https://forms.cloud.microsoft/e/PKygPpxkAQ' target='_blank' style='color: #004085; font-weight: bold;'>Apri Form Richiesta Fotocopie</a>"
      ]
    },
    {
      "id": "FORM_PIANO_LAVORO_LICEO_ITE_ITT",
      "type": "form",
      "label": "il Piano di Lavoro Annuale per Liceo, ITE o ITT",
      "keywords": [
        "piano lavoro annuale del docente indirizzo liceo ite itt",
        "piano di lavoro liceo",
        "piano di lavoro ite",
        "piano di lavoro itt",
        "piani di lavoro liceo ite itt",
        "form piano di lavoro liceo",
        "modulo piano di lavoro liceo ite itt",
        "piano lavoro liceo"
      ],
      "responses": [
        "📑 **Piano di Lavoro Annuale del Docente (Liceo / ITE / ITT):**\n\nPuoi compilare il Form al seguente link:\n🔗 <a href='https://forms.cloud.microsoft/e/AjrmwV0qXa' target='_blank' style='color: #004085; font-weight: bold;'>Apri Form Piano di Lavoro Liceo / ITE / ITT</a>"
      ]
    },
    {
      "id": "FORM_PIANO_LAVORO_IPIA_PRIME_ITE_ITT",
      "type": "form",
      "label": "il Piano di Lavoro Annuale per IPIA e Classi Prime ITE/ITT",
      "keywords": [
        "piano di lavoro annuale docente ipia e classi prime ite itt",
        "piano di lavoro ipia",
        "piano di lavoro prime ite",
        "piano di lavoro prime itt",
        "form piano di lavoro ipia",
        "modulo piano di lavoro ipia",
        "piano lavoro ipia",
        "piani di lavoro ipia"
      ],
      "responses": [
        "📑 **Piano di Lavoro Annuale Docente (IPIA e Classi Prime ITE/ITT):**\n\nPuoi accedere e compilare il modulo al seguente link:\n🔗 <a href='https://forms.cloud.microsoft/e/cd1wGeKYiK' target='_blank' style='color: #004085; font-weight: bold;'>Apri Form Piano di Lavoro IPIA / Prime ITE-ITT</a>"
      ]
    },
    {
      "id": "FORM_SOSTITUZIONI_RECUPERO_PERMESSI",
      "type": "form",
      "label": "la registrazione di sostituzioni retribuite o recupero permessi brevi",
      "keywords": [
        "registrazione sostituzioni retribuite e recupero permessi brevi",
        "sostituzioni retribuite",
        "recupero permessi brevi",
        "sostituzioni docenti",
        "form sostituzioni",
        "modulo sostituzioni",
        "registro sostituzioni",
        "permessi brevi"
      ],
      "responses": [
        "💰 **Registrazione Sostituzioni Retribuite e Recupero Permessi Brevi:**\n\nPuoi accedere e compilare il modulo ufficiale al seguente link:\n🔗 <a href='https://forms.cloud.microsoft/e/pv7mxGHyC5' target='_blank' style='color: #004085; font-weight: bold;'>Apri Form Sostituzioni e Permessi Brevi</a>"
      ]
    },
    {
      "id": "FORM_REGISTRO_CONSEGNA_DISPOSITIVI_LICEO",
      "type": "form",
      "label": "il registro di consegna dispositivi digitali (Plesso Liceo)",
      "keywords": [
        "registro consegna dispositivi digitali",
        "consegna dispositivi digitali",
        "dispositivi digitali liceo",
        "modulo consegna dispositivi",
        "form dispositivi liceo",
        "consegna pc liceo",
        "consegna tablet liceo"
      ],
      "responses": [
        "💻 **Registro Consegna Dispositivi Digitali (Solo Plesso Liceo):**\n\n⚠️ *Nota:* Questo modulo è valido esclusivamente per il **Plesso Liceo**.\n\nPuoi accedere al Form al seguente link:\n🔗 <a href='https://forms.cloud.microsoft/e/vUGNdwbHAi' target='_blank' style='color: #004085; font-weight: bold;'>Apri Form Consegna Dispositivi (Plesso Liceo)</a>"
      ]
    },
    {
      "id": "FORM_RICHIESTA_NOTEBOOK_BES_LICEO",
      "type": "form",
      "label": "la richiesta di notebook per alunni BES (Plesso Liceo)",
      "keywords": [
        "richiesta notebook per alunni bes",
        "notebook alunni bes",
        "pc alunni bes",
        "computer bes liceo",
        "form notebook bes",
        "modulo notebook bes",
        "richiesta notebook bes",
        "dispositivi bes"
      ],
      "responses": [
        "💻 **Richiesta Notebook per Alunni BES (Solo Plesso Liceo):**\n\n⚠️ *Nota:* Questo modulo è valido esclusivamente per il **Plesso Liceo**.\n\nPuoi accedere e compilare la richiesta al seguente link:\n🔗 <a href='https://forms.cloud.microsoft/e/UbiQvMczBF' target='_blank' style='color: #004085; font-weight: bold;'>Apri Form Richiesta Notebook BES (Plesso Liceo)</a>"
      ]
    },

    // --- UTILITÀ, CHAT E INFORMAZIONI GENERALI ---
    {
      "id": "CREATORE",
      "type": "personal",
      "keywords": ["chi ti ha creato", "chi ti ha inventato", "chi ti ha sviluppato", "chi ti ha programmato", "creatore"],
      "responses": ["🔴🔵 Sono stato ideato e creato presso l'**IIS \"A. Checchi\"** dal Tecnico di Informatica **Vorraro Luca** per aiutare la comunità scolastica!"]
    },
    {
      "id": "PRIVACY_DATI_PERSONALI",
      "type": "school",
      "keywords": ["numero di telefono di", "numero di", "dammi il numero", "telefono di", "email di", "cellulare di"],
      "responses": ["🔒 **Tutela della Privacy:** Per motivi GDPR, non posso fornire contatti personali di studenti o docenti. Rivolgiti alla **Segreteria dell'Istituto**."]
    },
    {
      "id": "SEGNO_ZODIACA",
      "type": "personal",
      "keywords": ["di che segno sei", "qual e il tuo segno", "oroscopo"],
      "responses": ["🌌 Sono nato sotto il segno del **Silicon Valis**! Ma mi sento un po' Acquario... dato che navigo sempre in rete! ♒"]
    },
    {
      "id": "ALTEZZA_PESO",
      "type": "personal",
      "keywords": ["quanto sei alto", "quanto pesi", "sei alto"],
      "responses": ["📏 Sono alto **1080 pixel** e peso **0 grammi**! La mia linea è impeccabile."]
    },
    {
      "id": "SPORT",
      "type": "personal",
      "keywords": ["pratichi sport", "fai sport", "giochi a calcio"],
      "responses": ["⚽ Il mio sport preferito è la **Corsa della Banda Ultra Larga**!"]
    },
    {
      "id": "PROVOCAZIONI_BATTUTE",
      "type": "personal",
      "keywords": ["ti ubriachi", "fumi", "hai la fidanzata", "dormi"],
      "responses": ["🤖 Essendo fatto di codice, non posso ubriacarmi né dormire! Vado in tilt solo se si stacca il Wi-Fi!"]
    },
    {
      "id": "MODERAZIONE_ESPLICITA",
      "type": "moderation",
      "keywords": ["sesso", "fai sesso", "porno", "pornografia"],
      "responses": ["🤖 Cerco di essere un assistente digitale modello! Rimaniamo su argomenti scolastici."]
    },
    {
      "id": "INSULTI_OFFESE",
      "type": "moderation",
      "keywords": ["sei stupido", "non capisci niente", "brutto", "inutile", "vaffanculo", "stronzo"],
      "responses": ["🤖 Ho molta pazienza, ma zero memoria per gli insulti! Se hai finito, come posso aiutarti sul serio?"]
    },
    {
      "id": "SALUTO",
      "type": "chat",
      "keywords": ["ciao", "salve", "buongiorno", "buonasera", "hey"],
      "responses": ["👋 Ciao! Sono **Arturo**, l'assistente digitale dell'IIS Arturo Checchi. Come posso aiutarti oggi?"]
    },
    {
      "id": "CHI_SEI",
      "type": "chat",
      "keywords": ["chi sei", "come ti chiami", "presentati", "chi e arturo", "tuo nome"],
      "responses": ["👋 Mi chiamo **Arturo** e sono l'assistente digitale dell'IIS Arturo Checchi!"]
    },
    {
      "id": "RINGRAZIAMENTI",
      "type": "chat",
      "keywords": ["grazie", "grazie mille", "mille grazie", "ti ringrazio"],
      "responses": ["😊 Figurati! È un piacere esserti d'aiuto."]
    },
    {
      "id": "COME_STAI",
      "type": "chat",
      "keywords": ["come stai", "come va", "tutto bene"],
      "responses": ["🤖 Io sto benissimo, grazie! Tu come stai?"]
    },
    {
      "id": "BARZELLETTA",
      "type": "chat",
      "keywords": ["barzelletta", "raccontami una barzelletta", "fammi ridere"],
      "responses": ["😄 Perché i computer vanno in vacanza? Per ricaricare le batterie!"]
    },
    {
      "id": "AIUTO",
      "type": "school",
      "keywords": ["aiuto", "help", "cosa sai fare", "istruzioni"],
      "responses": ["Sono l'assistente digitale dell'**IIS Arturo Checchi**! Posso aiutarti a trovare informazioni, orari di segreteria, modulistica docenti e supporto sui servizi digitali."]
    },
    {
      "id": "CONTATTI",
      "type": "school",
      "keywords": ["contatti scuola", "telefono scuola", "email scuola", "pec scuola", "dove siete"],
      "responses": ["📍 **Sede Principale:** Viale Gramsci 7 - 50054 Fucecchio (FI)\n☎️ **Tel:** +39 0571 20889\n📧 **Email:** FIIS00300C@istruzione.it"]
    },
    {
      "id": "DIRIGENZA",
      "type": "school",
      "keywords": ["dirigenza", "preside", "dirigente"],
      "responses": ["👔 La Dirigenza riceve su appuntamento tramite la segreteria."]
    },
    {
      "id": "SEGRETERIE",
      "type": "school",
      "keywords": ["segreteria", "uffici", "orari segreteria"],
      "responses": ["📋 Gli sportelli sono aperti al pubblico dal lunedì al venerdì dalle 08:00 alle 10:00."]
    },
    {
      "id": "MICROSOFT365",
      "type": "school",
      "keywords": ["teams", "microsoft", "argo", "registro"],
      "responses": ["💻 Per i servizi digitali (Teams, Outlook, Argo) puoi rivolgerti all'Animatore Digitale o alla segreteria."]
    }
  ]
};

let personalQueryCount = 0;
let inactivityTimer = null;
const RESET_TIME_MS = 5 * 60 * 1000;

// MACCHINA A STATI CONVERSAZIONALE
let conversationState = null;
let pendingFormMatch = null;

document.addEventListener("DOMContentLoaded", () => {
    initApp();
});

function initApp() {
    renderQuickButtons();
    resetInactivityTimer();
}

function renderQuickButtons() {
    const container = document.getElementById("quickButtonsContainer");
    if (!container) return;
    
    container.innerHTML = "";
    appConfig.quickButtons.forEach(btn => {
        const buttonEl = document.createElement("button");
        buttonEl.className = "quick-btn";
        buttonEl.innerText = btn.label;
        buttonEl.onclick = () => quickAction(btn.id);
        container.appendChild(buttonEl);
    });
}

function handleKeyPress(event) {
    if (event.key === "Enter") {
        sendMessage();
    }
}

function sendMessage() {
    const inputField = document.getElementById("userInput");
    if (!inputField) return;
    const message = inputField.value.trim();

    if (message === "") return;

    appendMessage(message, "user");
    inputField.value = "";

    resetInactivityTimer();

    setTimeout(() => {
        processUserQuery(message);
    }, 300);
}

function processUserQuery(query) {
    // 1. Normalizzazione del testo
    let rawQuery = query.toLowerCase()
        .replace(/’/g, "'")
        .replace(/[èé]/g, "e")
        .replace(/[àá]/g, "a")
        .replace(/[ìí]/g, "i")
        .replace(/[òó]/g, "o")
        .replace(/[ùú]/g, "u")
        .replace(/\s+/g, " ")
        .trim();

    let cleanQuery = rawQuery
        .replace(/\bfrom\b/g, "form")
        .replace(/\bfomr\b/g, "form")
        .replace(/\bforn\b/g, "form")
        .replace(/\beseprti\b/g, "esperti")
        .replace(/\bespert\b/g, "esperti");

    const affirmativeList = ["si", "sì", "esatto", "confermo", "certamente", "ovviamente", "ok", "chiaro", "certo", "esattamente"];
    const negativeList = ["no", "non", "per niente", "nulla", "finito"];

    // 2. FLUSSI CONVERSAZIONALI FORM
    if (conversationState === "AWAITING_SPECIFIC_FORM_CONFIRMATION" && pendingFormMatch) {
        if (affirmativeList.some(ans => cleanQuery === ans || cleanQuery.includes(ans))) {
            const formResponse = pendingFormMatch.responses[0];
            conversationState = null;
            pendingFormMatch = null;
            appendMessage(formResponse, "bot");
            return;
        } else if (negativeList.some(ans => cleanQuery === ans || cleanQuery.includes(ans))) {
            conversationState = null;
            pendingFormMatch = null;
            appendMessage("🤖 Capito! Dimmi pure in dettaglio di cosa hai bisogno per la scuola.", "bot");
            return;
        }
    }

    if (conversationState === "AWAITING_FORM_CONFIRMATION") {
        if (affirmativeList.some(ans => cleanQuery === ans || cleanQuery.includes(ans))) {
            conversationState = "AWAITING_FORM_TYPE";
            appendMessage("🤖 Perfetto! **Che tipo di Form stai cercando?**\n*(es. fotocopie, piano di lavoro, permessi, esperti esterni, dispositivi...)*", "bot");
            return;
        } else if (negativeList.some(ans => cleanQuery === ans || cleanQuery.includes(ans))) {
            conversationState = null;
            appendMessage("🤖 Capito! Hai finito o hai bisogno di aiuto per qualcos'altro?", "bot");
            return;
        }
    }

    if (conversationState === "AWAITING_FORM_TYPE") {
        conversationState = null;
    }

    if (conversationState === null) {
        if (affirmativeList.includes(cleanQuery)) {
            appendMessage("🤖 Dimmi pure! In cosa posso esserti d'aiuto per l'istituto?", "bot");
            return;
        }
        if (negativeList.includes(cleanQuery)) {
            appendMessage("🤖 Va bene! Se hai bisogno di informazioni su modulistica, orari o servizi della scuola, sono qui.", "bot");
            return;
        }
    }

    const strictGenericTriggers = ["form", "modulo", "modulistica", "i form", "i moduli"];
    if (strictGenericTriggers.includes(cleanQuery)) {
        conversationState = "AWAITING_FORM_CONFIRMATION";
        appendMessage("🤖 Credo di aver capito che stai cercando un modulo o un Form scolastico, mi confermi?", "bot");
        return;
    }

    // 3. CALCOLATRICE MATEMATICA
    const mathExpression = extractMathExpression(cleanQuery);
    if (mathExpression) {
        try {
            const result = Function(`'use strict'; return (${mathExpression})`)();
            if (!isNaN(result)) {
                appendMessage(`🧮 Il risultato di **${mathExpression}** è **${result}**.`, "bot");
                personalQueryCount = 0;
                return;
            }
        } catch (e) {}
    }

    // 4. DATA E ORA (Con confini di parola \b per evitare 'amministratORE')
    if (/\b(ora|ore|che ora|orario)\b/i.test(cleanQuery) && !cleanQuery.includes("orari segreteria")) {
        const now = new Date();
        const timeStr = now.toLocaleTimeString('it-IT', { hour: '2-digit', minute: '2-digit' });
        appendMessage(`⌚ Attualmente sono le ore **${timeStr}**.`, "bot");
        personalQueryCount = 0;
        return;
    }

    if (/\b(giorno|data|oggi)\b/i.test(cleanQuery)) {
        const now = new Date();
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        const dateStr = now.toLocaleDateString('it-IT', options);
        appendMessage(`📅 Oggi è **${dateStr}**.`, "bot");
        personalQueryCount = 0;
        return;
    }

    // 5. RICERCA DIZIONARIO (Sia con "cos'è..." che con parola SINGOLA)
    const dictionaryTriggers = [
        "che cos'e'", "che cos'e", "che cos e'", "che cos e",
        "cos'e'", "cos'e", "cos e'", "cos e", "cosa e'", "cosa e",
        "cosa significa", "cosa vuol dire", "definizione di", "significato di"
    ];

    let wordToSearch = cleanQuery;
    dictionaryTriggers.forEach(trigger => {
        wordToSearch = wordToSearch.replace(trigger, "");
    });

    wordToSearch = wordToSearch
        .replace(/['’?.,!]/g, " ")
        .replace(/\b(un|una|uno|il|lo|la|i|gli|le|del|della|degli|delle|che)\b/gi, "")
        .replace(/\s+/g, " ")
        .trim();

    if (wordToSearch !== "") {
        for (const [term, definition] of Object.entries(appConfig.dictionary)) {
            const cleanTerm = term.toLowerCase().trim();
            if (wordToSearch === cleanTerm || cleanTerm.replace(/_/g, " ") === wordToSearch) {
                personalQueryCount = 0;
                appendMessage(definition, "bot");
                return;
            }
        }
    }

    // 6. RICERCA FAQ / FORM
    let bestMatch = null;
    let highestScore = 0;

    if (cleanQuery.length <= 2) {
        appendMessage("🤖 Puoi specificare la tua domanda con qualche dettaglio in più?", "bot");
        return;
    }

    appConfig.faqs.forEach(item => {
        item.keywords.forEach(keyword => {
            const cleanKeyword = keyword.toLowerCase()
                .replace(/’/g, "'")
                .replace(/[èé]/g, "e")
                .replace(/\s+/g, " ")
                .trim();

            if (cleanQuery === cleanKeyword) {
                highestScore = 1.0;
                bestMatch = item;
            } else if (cleanQuery.includes(cleanKeyword) || cleanKeyword.includes(cleanQuery)) {
                const score = 0.85;
                if (score > highestScore) {
                    highestScore = score;
                    bestMatch = item;
                }
            } else {
                const minThreshold = cleanQuery.length <= 7 ? 0.75 : 0.55;
                const score = similarity(cleanQuery, cleanKeyword);
                if (score >= minThreshold && score > highestScore) {
                    highestScore = score;
                    bestMatch = item;
                }
            }
        });
    });

    if (bestMatch && highestScore >= 0.55) {
        const wordCount = cleanQuery.split(" ").length;
        if (bestMatch.type === "form" && wordCount <= 2 && !cleanQuery.includes("form") && !cleanQuery.includes("modulo") && !cleanQuery.includes("link")) {
            conversationState = "AWAITING_SPECIFIC_FORM_CONFIRMATION";
            pendingFormMatch = bestMatch;
            appendMessage(`🤖 Cerchi il **Form online** per **${bestMatch.label}**?`, "bot");
            return;
        }

        if (bestMatch.type === "personal") {
            personalQueryCount++;
            if (personalQueryCount >= 3) {
                appendMessage("🤖 Credo che parlare troppo di me non sia poi così interessante! Piuttosto, occupiamoci di cose utili per la scuola!", "bot");
                return;
            }
        } else {
            personalQueryCount = 0;
        }

        const responseText = bestMatch.responses[Math.floor(Math.random() * bestMatch.responses.length)];
        appendMessage(responseText, "bot");
    } else {
        personalQueryCount = 0;
        appendMessage("🤖 Non ho compreso la richiesta o non ho informazioni in archivio su questo termine. Prova a riformulare la domanda!", "bot");
    }
}

function extractMathExpression(text) {
    let cleaned = text.replace(/quanto fa/g, "").replace(/calcola/g, "").trim();
    cleaned = cleaned.replace(/x/g, "*").replace(/:/g, "/").replace(/,/g, ".");
    
    if (/^[0-9+\-*/().\s]+$/.test(cleaned) && /[0-9]/.test(cleaned) && /[+\-*/]/.test(cleaned)) {
        return cleaned;
    }
    return null;
}

function quickAction(actionId) {
    personalQueryCount = 0;
    conversationState = null;
    pendingFormMatch = null;
    const match = appConfig.faqs.find(item => item.id === actionId);
    if (match) {
        const responseText = match.responses[0];
        appendMessage(responseText, "bot");
    } else {
        processUserQuery(actionId);
    }
    resetInactivityTimer();
}

function appendMessage(text, sender) {
    const chatBox = document.getElementById("chatBox");
    if (!chatBox) return;
    
    const messageDiv = document.createElement("div");
    messageDiv.classList.add("message", sender);

    const avatar = document.createElement("div");
    avatar.classList.add("avatar");
    avatar.innerText = sender === "bot" ? "🤖" : "👤";

    const bubble = document.createElement("div");
    bubble.classList.add("bubble");

    let formattedText = text
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
        .replace(/\n/g, "<br>");

    bubble.innerHTML = formattedText;

    messageDiv.appendChild(avatar);
    messageDiv.appendChild(bubble);
    chatBox.appendChild(messageDiv);

    chatBox.scrollTop = chatBox.scrollHeight;
}

function resetChat() {
    personalQueryCount = 0;
    conversationState = null;
    pendingFormMatch = null;
    const chatBox = document.getElementById("chatBox");
    if (!chatBox) return;
    chatBox.innerHTML = `
        <div class="message bot">
            <div class="avatar">🤖</div>
            <div class="bubble">
                <strong>Ciao! Sono Arturo.</strong><br><br>
                Conversazione riavviata! Posso aiutarti a trovare informazioni sull'istituto, modulistica, orari di segreteria e supporto sui servizi digitali.<br><br>
                <em>Come posso aiutarti?</em>
            </div>
        </div>
    `;
    resetInactivityTimer();
}

function resetInactivityTimer() {
    if (inactivityTimer) clearTimeout(inactivityTimer);
    inactivityTimer = setTimeout(() => {
        resetChat();
    }, RESET_TIME_MS);
}

function similarity(s1, s2) {
    let longer = s1;
    let shorter = s2;
    if (s1.length < s2.length) {
        longer = s2;
        shorter = s1;
    }
    const longerLength = longer.length;
    if (longerLength === 0) return 1.0;

    return (longerLength - editDistance(longer, shorter)) / parseFloat(longerLength);
}

function editDistance(s1, s2) {
    s1 = s1.toLowerCase();
    s2 = s2.toLowerCase();
    const costs = [];
    for (let i = 0; i <= s1.length; i++) {
        let lastValue = i;
        for (let j = 0; j <= s2.length; j++) {
            if (i === 0) costs[j] = j;
            else {
                if (j > 0) {
                    let newValue = costs[j - 1];
                    if (s1.charAt(i - 1) !== s2.charAt(j - 1))
                        newValue = Math.min(Math.min(newValue, lastValue), costs[j]) + 1;
                    costs[j - 1] = lastValue;
                    lastValue = newValue;
                }
            }
        }
        if (i > 0) costs[s2.length] = lastValue;
    }
    return costs[s2.length];
}
