// Database FAQ, Pulsanti Rapidi e Dizionario integrato completo per Arturo 2.0 | IIS "Arturo Checchi"
let appConfig = {
    quickButtons: [
        { id: "AIUTO", label: "❓ Cos'è Arturo?", icon: "fa-solid fa-circle-question" },
        { id: "CONTATTI", label: "📞 Contatti", icon: "fa-solid fa-address-book" },
        { id: "DIRIGENZA", label: "👔 Dirigenza", icon: "fa-solid fa-user-tie" },
        { id: "SEGRETERIE", label: "🏢 Segreteria e Uffici", icon: "fa-solid fa-building-columns" },
        { id: "MICROSOFT365", label: "💻 Servizi Digitali (Teams/Argo)", icon: "fa-solid fa-laptop-code" }
    ],
    
    // DIZIONARIO ED ENCICLOPEDIA LOCALE (Integrale e completo A-Z)
    dictionary: {
        "abaco": "📖 **Abaco:** Antico strumento di calcolo manuale costituito da una cornice con guide parallele su cui scorrono palline.",
        "account": "📖 **Account:** Insieme di credenziali (username e password) che identificano in modo univoco un utente su un sistema informatico.",
        "addendo": "📖 **Addendo:** Ciascuno dei numeri che vengono sommati in un'operazione di addizione.",
        "aforisma": "📖 **Aforisma:** Breve massima o sentenza che esprime in modo denso e sintetico una verità o un principio morale.",
        "algebra": "📖 **Algebra:** Ramo della matematica che studia le strutture algebriche, le relazioni e le quantità rappresentate tramite simboli.",
        "algoritmo": "📖 **Algoritmo:** Sequenza ordinata e finita di istruzioni per risolvere un problema.",
        "allegoria": "📖 **Allegoria:** Figura retorica mediante la quale un concetto astratto viene espresso attraverso un'immagine concreta.",
        "allitterazione": "📖 **Allitterazione:** Ripetizione dello stesso suono o della stessa sillaba all'inizio o all'interno di più parole vicine.",
        "amministratore": "📖 **Amministratore:** Persona responsabile della gestione e configurazione avanzata di un sistema informatico o di un'organizzazione.",
        "analogia": "📖 **Analogia:** Rapporto di somiglianza tra due elementi o situazioni diverse, usato per spiegare un concetto.",
        "android": "📖 **Android:** Sistema operativo mobile open source basato sul kernel Linux, sviluppato da Google per smartphone e tablet.",
        "anfora": "📖 **Anfora:** Vaso antico di terracotta con due manici e collo stretto, usato per contenere vino, olio o grano.",
        "antigene": "📖 **Antigene:** Sostanza capace di indurre una risposta immunitaria e la produzione di anticorpi nell'organismo.",
        "antitesi": "📖 **Antitesi:** Figura retorica che accosta due concetti opposti per far risaltare il loro contrasto.",
        "antropologia": "📖 **Antropologia:** Scienza che studia l'essere umano dal punto di vista biologico, culturale, sociale ed evolutivo.",
        "api": "📖 **API:** Application Programming Interface. Insieme di definizioni e protocolli usati per far comunicare software diversi.",
        "app": "📖 **Applicazione (App):** Programma informatico progettato per consentire all'utente di svolgere specifiche attività su PC o dispositivi mobili.",
        "archeologia": "📖 **Archeologia:** Scienza che studia le civiltà antiche attraverso il recupero e l'analisi dei reperti materiali.",
        "armonia": "📖 **Armonia:** Combinazione gradevole ed equilibrata di suoni, colori, forme o elementi distinti.",
        "audiobook": "📖 **Audiobook:** Libro recitato da uno speaker o attore e registrato in formato audio digitale.",
        "autonomia": "📖 **Autonomia:** Capacità di un individuo o di un ente di governarsi da solo e di prendere decisioni indipendenti.",
        "backup": "📖 **Backup:** Copia di sicurezza di file o dati informatici creata per prevenire la perdita involontaria di informazioni.",
        "barometro": "📖 **Barometro:** Strumento scientifico utilizzato per misurare la pressione atmosferica.",
        "batterio": "📖 **Batterio:** Microorganismo unicellulare procariota privo di nucleo ben definito.",
        "biologia": "📖 **Biologia:** Scienza scientifica che studia i viventi, la loro struttura, funzione, crescita ed evoluzione.",
        "browser": "📖 **Browser:** Programma applicativo utilizzato per navigare, visualizzare e interagire con le pagine del World Wide Web.",
        "bug": "📖 **Bug:** Errore, anomalia o difetto nel codice sorgente di un software che causa un funzionamento imprevisto o errato.",
        "cappannone": "📖 **Capannone:** Grande edificio ad un solo piano adibito a magazzino, produzione industriale o laboratorio.",
        "cartografia": "📖 **Cartografia:** Scienza e tecnica della preparazione e del disegno di carte geografiche e mappe.",
        "catalizzatore": "📖 **Catalizzatore:** Sostanza chimica che aumenta la velocità di una reazione senza consumarsi nel processo.",
        "cellula": "📖 **Cellula:** L'unità strutturale e funzionale di base di tutti gli organismi viventi.",
        "chiaroscuro": "📖 **Chiaroscuro:** Tecnica pittorica basata sull'uso accentuato dei contrasti tra luce e ombra per dare rilievo alle figure.",
        "chimerico": "📖 **Chimerico:** Che è frutto di pura fantasia, utopico, irreale o impossibile da realizzare.",
        "clorofilla": "📖 **Clorofilla:** Pigmento verde presente nelle piante indispensabile per la fotosintesi clorofilliana.",
        "cloud": "📖 **Cloud Computing:** Rete di server remoti accessibili via internet per memorizzare dati ed elaborare programmi.",
        "cometa": "📖 **Cometa:** Corpo celeste roccioso e ghiacciato che sviluppa una chioma luminosa quando si avvicina al Sole.",
        "comunicazione": "📖 **Comunicazione:** Processo di trasmissione di informazioni, idee e messaggi tra un emittente e un ricevente.",
        "cpu": "📖 **CPU:** Central Processing Unit. Unità centrale di elaborazione, il vero e proprio 'cervello' del computer.",
        "database": "📖 **Database:** Banca dati. Raccolta strutturata ed organizzata di dati digitali consultabile ed aggiornabile.",
        "democrazia": "📖 **Democrazia:** Forma di governo in cui il potere sovrano appartiene al popolo, che lo esercita direttamente o tramite rappresentanti.",
        "didattica": "📖 **Didattica:** Scienza dell'insegnamento e dei metodi di apprendimento scolastico ed educativo.",
        "diploma": "📖 **Diploma:** Titolo di studio ufficiale rilasciato al completamento di un percorso di istruzione scolastica o accademica.",
        "dna": "📖 **DNA:** Acido desossiribonucleico. Macromolecola che racchiude tutte le informazioni genetiche dell'organismo.",
        "dramma": "📖 **Dramma:** Opera teatrale o cinematografica caratterizzata dallo sviluppo inteso di conflitti ed emozioni forti.",
        "ecosistema": "📖 **Ecosistema:** Insieme degli organismi viventi e dell'ambiente fisico con cui interagiscono in un determinato territorio.",
        "educazione": "📖 **Educazione:** Processo continuo di sviluppo delle facoltà intellettuali, morali e fisiche dell'individuo.",
        "elettricita": "📖 **Elettricità:** Insieme dei fenomeni fisici associati alla presenza e al flusso di cariche elettriche.",
        "elettrone": "📖 **Elettrone:** Particella subatomica con carica elettrica negativa che orbita attorno al nucleo atomico.",
        "email": "📖 **E-mail:** Posta elettronica. Servizio per la trasmissione di messaggi digitali via internet tra utenti.",
        "enciclopedia": "📖 **Enciclopedia:** Opera che raccoglisce in modo sistematico il complesso delle conoscenze umane o di una disciplina.",
        "energia": "📖 **Energia:** Grandezza fisica che misura la capacità di un sistema di compiere un lavoro.",
        "entropia": "📖 **Entropia:** In termodinamica, misura del grado di disordine o di indisponibilità di energia di un sistema isolato.",
        "enzima": "📖 **Enzima:** Proteina ad azione catalitica grado di accelerare specifiche reazioni biochimiche nell'organismo.",
        "equazione": "📖 **Equazione:** Uguaglianza matematica tra due espressioni algebriche contenente una o più incognite.",
        "ermeneutica": "📖 **Ermeneutica:** Arte e metodologia dell'interpretazione, della spiegazione e della traduzione dei testi.",
        "etica": "📖 **Etica:** Ramo della filosofia che studia i principi e i valori che guidano il comportamento umano distinguendo il bene dal male.",
        "evoluzione": "📖 **Evoluzione:** Processo di graduale e continuo cambiamento biologico delle specie viventi nel corso delle generazioni.",
        "filantropo": "📖 **Filantropo:** Persona che si dedica a opere di bene, alla beneficenza e ad aiutare il prossimo per amore dell'umanità.",
        "filologia": "📖 **Filologia:** Disciplina che studia i testi letterari ed i documenti scritti per ricostruirne la forma originale.",
        "fisiologia": "📖 **Fisiologia:** Scienza biologica che studia il funzionamento degli organismi viventi e dei loro organi.",
        "frazione": "📖 **Frazione:** Rappresentazione matematica del rapporto tra due numeri interi detti numeratore e denominatore.",
        "fusione": "📖 **Fusione Nucleare:** Reazione nucleare in cui due nuclei atomici leggeri si uniscono per formarne uno più pesante.",
        "galassia": "📖 **Galassia:** Insieme gigantesco di stelle, sistemi, gas e polveri legati insieme dalla forza di gravità.",
        "genoma": "📖 **Genoma:** Il corredo genetico completo di un organismo contenuto nel suo DNA.",
        "gravita": "📖 **Gravità:** Forza fondamentale di attrazione reciproca esercitata tra corpi dotati di massa.",
        "hardware": "📖 **Hardware:** La parte fisica e tangibile di un computer (componenti, schermo, tastiera).",
        "html": "📖 **HTML:** HyperText Markup Language. Linguaggio di marcatura usato per definire la struttura delle pagine web.",
        "idillio": "📖 **Idillio:** Breve componimento poetico d'ispirazione pastorale, incentrato su temi sereni e naturali.",
        "indirizzo ip": "📖 **Indirizzo IP:** Etichetta numerica che identifica in modo univoco un dispositivo collegato a una rete informatica.",
        "internet": "📖 **Internet:** Rete globale di calcolatori collegati tra loro che comunicano tramite protocolli standardizzati.",
        "istruzione": "📖 **Istruzione:** L'attività metodica di insegnamento e trasmissione delle conoscenze e competenze culturali.",
        "java": "📖 **Java:** Linguaggio di programmazione orientato agli oggetti ampiamente utilizzato nello sviluppo di applicazioni.",
        "json": "📖 **JSON:** JavaScript Object Notation. Formato leggero basato su testo per lo scambio ed il trasferimento di dati digitali.",
        "kernel": "📖 **Kernel:** Il core centrale del sistema operativo che gestisce direttamente l'hardware e l'allocazione delle risorse.",
        "laboratorio": "📖 **Laboratorio:** Locale attrezzato con strumenti specifici per la sperimentazione scientifica o la didattica pratica.",
        "lan": "📖 **LAN:** Local Area Network. Rete informatica privata che collega computer in un'area geografica limitata.",
        "litote": "📖 **Litote:** Figura retorica che consiste nell'affermare un concetto negando il suo contrario.",
        "malware": "📖 **Malware:** Qualsiasi programma informatico malevolo progettato per danneggiare, spiare o compromettere un sistema.",
        "maratona": "📖 **Maratona:** Corsa podistica sulla distanza olimpica di 42,195 km. In senso figurato indica una prova lunga e impegnativa.",
        "matematica": "📖 **Matematica:** Scienza che studia le quantità, le structures spaziali, le forme ed i concetti di calcolo e misura.",
        "mecenate": "📖 **Mecenate:** Persona di ampie disponibilità economiche che protegge e sostiene finanziariamente artisti, letterati e studiosi.",
        "metafora": "📖 **Metafora:** Figura retorica che sostituisce un termine con un altro legato da un rapporto di somiglianza.",
        "metodologia": "📖 **Metodologia:** Studio dei metodi e dei principi guida applicati in una ricerca scientifica o nella didattica.",
        "metonimia": "📖 **Metonimia:** Figura retorica che consiste nel sostituire un termine con un altro legato da una relazione di contiguità.",
        "museo": "📖 **Museo:** Istituzione permanente che raccoglisce, conserva, studia ed espone opere d'arte o reperti storici e scientifici.",
        "neologismo": "📖 **Neologismo:** Parola o espressione nuova introdotta di recente all'interno di una lingua.",
        "normativa": "📖 **Normativa:** Insieme di leggi, regolamenti e norme che disciplinano un determinato settore o attività.",
        "omeostasi": "📖 **Omeostasi:** Attitudine degli organismi viventi a mantenere costante il proprio ambiente interno.",
        "onomatopea": "📖 **Onomatopea:** Figura retorica che consiste nel riprodurre o evocare, tramite i suoni di una parola, un rumore naturale o un'azione.",
        "ossimoro": "📖 **Ossimoro:** Unione di due parole di significato opposto e apparentemente inconciliabile.",
        "paragrafo": "📖 **Paragrafo:** Porzione di testo compresa tra due punti a capo, formata da una o più frasi incentrate su un unico concetto.",
        "password": "📖 **Password:** Parola chiave o sequenza segreta di caratteri usata per autenticarsi ed accedere ad un account protetto.",
        "pec": "📖 **PEC:** Posta Elettronica Certificata. Email con valore legale pari ad una raccomandata con ricevuta di ritorno.",
        "procedura": "📖 **Procedura:** Insieme di istruzioni riutilizzabili che eseguono un compito senza restituire un valore formale di ritorno.",
        "prosopopea": "📖 **Prosopopea:** Personificazione retorica mediante la quale si fanno parlare oggetti inanimati, defunti o concetti astratti.",
        "python": "📖 **Python:** Linguaggio di programmazione ad alto livello famoso per la sua sintassi semplice e versatilità.",
        "ram": "📖 **RAM:** Random Access Memory. Memoria ad accesso casuale ad alta velocità usata dal computer per i dati in esecuzione.",
        "relitto": "📖 **Relitto:** Ciò che rimane di una nave, di un aereo o di un veicolo distrutto o affondato.",
        "router": "📖 **Router:** Dispositivo di rete che instrada i pacchetti di dati tra reti informatiche diverse.",
        "server": "📖 **Server:** Elaboratore ad alte prestazioni destinato a gestire ed erogare risorse e servizi a molteplici client.",
        "sillogismo": "📖 **Sillogismo:** Tipo di ragionamento deduttivo della logica aristotelica formato da due premesse e una conclusione.",
        "similitudine": "📖 **Similitudine:** Figura retorica che paragona due elementi esplicitamente usando connettivi come *come*, *sembra*, *pare*.",
        "sinecdoche": "📖 **Sinecdoche:** Figura retorica che esprime una parola usando la parte per il tutto o il tutto per la parte.",
        "sinestesia": "📖 **Sinestesia:** Figura retorica che accosta due termini appartenenti a sfere sensoriali differenti.",
        "software": "📖 **Software:** L'insieme dei programmi e istruzioni che permettono ad un computer di funzionare.",
        "sql": "📖 **SQL:** Structured Query Language. Linguaggio standard per la creazione, gestione ed interrogazione di database.",
        "tutela": "📖 **GDPR:** Regolamento Generale sulla Protezione dei Dati personali in vigore nell'Unione Europea.",
        "url": "📖 **URL:** Uniform Resource Locator. Indirizzo univoco che identifica la posizione di una risorsa sulla rete Internet.",
        "usb": "📖 **USB:** Universal Serial Bus. Standard di connessione via cavo per collegare periferiche e scambiare dati o energia.",
        "virus": "📖 **Virus Informatico:** Codice malevolo in grado di replicarsi autonomamente all'interno di altri programmi o file.",
        "wifi": "📖 **Wi-Fi:** Tecnologia di connessione senza fili che consente a dispositivi digitali di accedere ad una rete locale."
    },

    faqs: [
        {
            "id": "FORM_INGRESSO_ESPERTI_ESTERNI",
            "type": "form",
            "label": "l'autorizzazione per l'ingresso di esperti esterni",
            "keywords": ["richiesta autorizzazione ingresso esperti esterni", "ingresso esperti esterni", "esperti esterni", "esperti", "autorizzazione esperti", "form esperti esterni", "modulo esperti esterni", "esperto esterno"],
            "responses": ["📋 **Richiesta Autorizzazione Ingresso Esperti Esterni:**\n\nPuoi accedere e compilare il modulo ufficiale al seguente link:\n🔗 <a href='https://forms.cloud.microsoft/e/jvGm4wwcz4' target='_blank' style='color: #1e3a8a; font-weight: bold;'>Apri Form Autorizzazione Esperti Esterni</a>"]
        },
        {
            "id": "FORM_RICHIESTA_FOTOCOPIE",
            "type": "form",
            "label": "la richiesta di stampa fotocopie",
            "keywords": ["richiesta fotocopie", "fotocopie", "form fotocopie", "modulo fotocopie", "fare fotocopie", "stampa fotocopie", "richiedere fotocopie"],
            "responses": ["🖨️ **Richiesta Fotocopie:**\n\nPuoi inoltrare la richiesta di stampa fotocopie tramite il Form dedicato:\n🔗 <a href='https://forms.cloud.microsoft/e/PKygPpxkAQ' target='_blank' style='color: #1e3a8a; font-weight: bold;'>Apri Form Richiesta Fotocopie</a>"]
        },
        {
            "id": "FORM_PIANO_LAVORO_LICEO_ITE_ITT",
            "type": "form",
            "label": "il Piano di Lavoro Annuale per Liceo, ITE o ITT",
            "keywords": ["piano lavoro annuale del docente indirizzo liceo ite itt", "piano di lavoro liceo", "piano di lavoro ite", "piano di lavoro itt", "piani di lavoro liceo ite itt", "form piano di lavoro liceo", "modulo piano di lavoro liceo ite itt", "piano lavoro liceo"],
            "responses": ["📑 **Piano di Lavoro Annuale del Docente (Liceo / ITE / ITT):**\n\nPuoi compilare il Form al seguente link:\n🔗 <a href='https://forms.cloud.microsoft/e/AjrmwV0qXa' target='_blank' style='color: #1e3a8a; font-weight: bold;'>Apri Form Piano di Lavoro Liceo / ITE / ITT</a>"]
        },
        {
            "id": "FORM_PIANO_LAVORO_IPIA_PRIME_ITE_ITT",
            "type": "form",
            "label": "il Piano di Lavoro Annuale per IPIA e Classi Prime ITE/ITT",
            "keywords": ["piano di lavoro annuale docente ipia e classi prime ite itt", "piano di lavoro ipia", "piano di lavoro prime ite", "piano di lavoro prime itt", "form piano di lavoro ipia", "modulo piano di lavoro ipia", "piano lavoro ipia", "piani di lavoro ipia"],
            "responses": ["📑 **Piano di Lavoro Annuale Docente (IPIA e Classi Prime ITE/ITT):**\n\nPuoi accedere e compilare il modulo al seguente link:\n🔗 <a href='https://forms.cloud.microsoft/e/cd1wGeKYiK' target='_blank' style='color: #1e3a8a; font-weight: bold;'>Apri Form Piano di Lavoro IPIA / Prime ITE-ITT</a>"]
        },
        {
            "id": "FORM_SOSTITUZIONI_RECUPERO_PERMESSI",
            "type": "form",
            "label": "la registrazione di sostituzioni retribuite o recupero permessi brevi",
            "keywords": ["registrazione sostituzioni retribuite e recupero permessi brevi", "sostituzioni retribuite", "recupero permessi brevi", "sostituzioni docenti", "form sostituzioni", "modulo sostituzioni", "registro sostituzioni", "permessi brevi"],
            "responses": ["💰 **Registrazione Sostituzioni Retribuite e Recupero Permessi Brevi:**\n\nPuoi accedere e compilare il modulo ufficiale al seguente link:\n🔗 <a href='https://forms.cloud.microsoft/e/pv7mxGHyC5' target='_blank' style='color: #1e3a8a; font-weight: bold;'>Apri Form Sostituzioni e Permessi Brevi</a>"]
        },
        {
            "id": "CREATORE",
            "type": "personal",
            "keywords": ["chi ti ha creato", "chi ti ha inventato", "chi ti ha sviluppato", "chi ti ha programmato", "creatore", "chi ti ha fatto"],
            "responses": ["🤖 Sono stato ideato e creato presso l'**IIS \"Arturo Checchi\"** di Fucecchio dal Tecnico Informatico **Luca Vorraro** per offrire supporto e risorse alla comunità scolastica!"]
        },
        {
            "id": "SCOPO_ARTURO",
            "type": "personal",
            "keywords": ["perche ti hanno creato", "a cosa servi", "cosa fai", "perche esisti"],
            "responses": ["💡 Sono stato creato per aiutare la comunità scolastica dell'IIS \"Arturo Checchi\" ad accedere facilmente a svariate informazioni, modulistica, supporto tecnico e risorse dell'istituto."]
        },
        {
            "id": "PRIVACY_DATI_PERSONALI",
            "type": "school",
            "keywords": ["numero di telefono di", "numero di", "dammi il numero", "telefono di", "email di", "cellulare di", "dove abita"],
            "responses": ["🔒 Per motivi di **privacy**, non sono autorizzato a fornire informazioni personali su docenti, studenti o personale dell'istituto. Posso però aiutarti con le informazioni di carattere istituzionale!"]
        },
        {
            "id": "STRUTTURA_EMAIL",
            "type": "school",
            "keywords": ["email istituzionale", "struttura mail", "come sono fatte le email", "formato email", "indirizzo email scuola"],
            "responses": ["📧 Le email istituzionali dell'IIS \"Arturo Checchi\" seguono queste strutture standard:\n\n• **Studenti**: `nome.cognome@istitutochecchi.edu.it`\n• **Docenti e Personale**: `NomeCognome@istitutochecchi.edu.it`"]
        },
        {
            "id": "GESTIONE_PASSWORD",
            "type": "school",
            "keywords": ["password", "ho smarrito la password", "recuperare password", "password persa", "non ricordo la password"],
            "responses": ["🔑 A quale piattaforma ti riferisci? Esistono password differenti:\n\n1️⃣ Le credenziali per **Microsoft 365 e Teams** (che utilizzano lo stesso accesso).\n2️⃣ Le credenziali separate per il registro elettronico **Argo**.\n\nDimmi quale delle deux password ti serve recuperare così ti spiego come fare!"]
        },
        {
            "id": "MODERAZIONE_ESPLICITA",
            "type": "moderation",
            "keywords": ["sesso", "fai sesso", "porno", "pornografia", "scopare", "uccidere"],
            "responses": ["😊 Su questi argomenti preferisco mantenere toni consoni all'ambiente scolastico. Concentriamoci pure sulle attività dell'IIS \"Arturo Checchi\"!"]
        },
        {
            "id": "INSULTI_OFFESE",
            "type": "moderation",
            "keywords": ["sei stupido", "non capisci niente", "brutto", "inutile", "vaffanculo", "stronzo"],
            "responses": ["🤖 Ho molta pazienza, ma zero memoria per gli insulti! Se hai finito, come posso aiutarti sul serio per la scuola?"]
        },
        {
            "id": "SALUTO",
            "type": "chat",
            "keywords": ["ciao", "salve", "buongiorno", "buonasera", "hey"],
            "responses": ["👋 Ciao! Sono **Arturo**, l'assistente digitale ufficiale dell'IIS \"Arturo Checchi\" di Fucecchio. Come posso aiutarti oggi?"]
        },
        {
            "id": "BARZELLETTA",
            "type": "chat",
            "keywords": ["barzelletta", "raccontami una barzelletta", "fammi ridere", "indovinello"],
            "responses": ["😄 Perché i programmatori preferiscono la notte? Perché di giorno ci sono troppi bug che danno fastidio alla luce del sole!"]
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
            "keywords": ["contatti scuola", "telefono scuola", "email scuola", "pec scuola", "dove siete", "indirizzo"],
            "responses": ["📍 **Sede Principale:** Viale Gramsci 7 - 50054 Fucecchio (FI)\n☎️ **Tel:** +39 0571 20889\n📧 **Email:** FIIS00300C@istruzione.it\n✉️ **PEC:** FIIS00300C@pec.istruzione.it"]
        },
        {
            "id": "DIRIGENZA",
            "type": "school",
            "keywords": ["dirigenza", "preside", "dirigente"],
            "responses": ["👔 La Dirigenza riceve su appuntamento tramite la segreteria dell'istituto."]
        },
        {
            "id": "SEGRETERIE",
            "type": "school",
            "keywords": ["segreteria", "uffici", "orari segreteria", "orari"],
            "responses": ["📋 Gli sportelli di segreteria dell'IIS \"Arturo Checchi\" sono aperti al pubblico dal lunedì al venerdì secondo gli orari pubblicati sul sito ufficiale."]
        },
        {
            "id": "MICROSOFT365",
            "type": "school",
            "keywords": ["teams", "microsoft", "argo", "registro", "m365"],
            "responses": ["💻 Per i servizi digitali (Microsoft 365, Teams, Registro Elettronico Argo) puoi rivolgerti all'assistenza tecnica o consultare le sezioni dedicate sul sito della scuola."]
        }
    ]
};

let personalQueryCount = 0;
let inactivityTimer = null;
const RESET_TIME_MS = 30 * 60 * 1000;
let conversationState = null;
let pendingFormMatch = null;
let contatoreInappropriato = 0;

document.addEventListener("DOMContentLoaded", () => {
    initApp();
});

function initApp() {
    renderQuickButtons();
    setupEventListeners();
    aggiornaOrologio();
    setInterval(aggiornaOrologio, 1000);
    resetInactivityTimer();
}

function renderQuickButtons() {
    const container = document.getElementById("faq-buttons-container") || document.getElementById("quickButtonsContainer");
    if (!container) return;
    
    container.innerHTML = "";
    appConfig.quickButtons.forEach(btn => {
        const buttonEl = document.createElement("button");
        buttonEl.className = "quick-btn";
        buttonEl.innerHTML = `<i class="${btn.icon}"></i> ${btn.label.replace(/^[^\s]+\s/, '')}`;
        buttonEl.onclick = () => quickAction(btn.id);
        container.appendChild(buttonEl);
    });
}

function setupEventListeners() {
    const chatForm = document.getElementById("chat-form");
    if (chatForm) {
        chatForm.addEventListener("submit", (e) => {
            e.preventDefault();
            sendMessage();
        });
    }

    const newChatBtn = document.getElementById("new-chat-btn");
    if (newChatBtn) {
        newChatBtn.addEventListener("click", resetChat);
    }
}

function sendMessage() {
    const inputField = document.getElementById("user-input") || document.getElementById("userInput");
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
    let cleanQuery = query.toLowerCase()
        .replace(/’/g, "'")
        .replace(/[èé]/g, "e")
        .replace(/[àá]/g, "a")
        .replace(/[ìí]/g, "i")
        .replace(/[òó]/g, "o")
        .replace(/[ùú]/g, "u")
        .replace(/\s+/g, " ")
        .trim();

    // 1. Moderazione
    const paroleInappropriate = ["sesso", "porno", "scopare", "uccidere"];
    if (paroleInappropriate.some(p => cleanQuery.includes(p))) {
        contatoreInappropriato++;
        if (contatoreInappropriato === 1) {
            appendMessage("😊 Su questi argomenti preferisco mantenere toni consoni all'ambiente scolastico. Concentriamoci pure sulle attività dell'IIS \"Arturo Checchi\"!", "bot");
        } else if (contatoreInappropriato === 2) {
            appendMessage("⚠️ Insisti su argomenti del tutto inopportuni. Ti invito calorosamente a concentrarti sull'aspetto scolastico e sulle informazioni utili per la scuola.", "bot");
        } else {
            appendMessage("🛑 La nostra conversazione può anche terminare qui, visto che continui a insistere su argomenti non consoni all'assistente scolastico. Ti auguro una buona giornata.", "bot");
        }
        return;
    }

    // 2. Calcolatrice matematica al volo
    const mathExpression = extractMathExpression(cleanQuery);
    if (mathExpression) {
        try {
            const result = Function(`'use strict'; return (${mathExpression})`)();
            if (!isNaN(result)) {
                appendMessage(`🧮 Ho calcolato l'espressione per te:\n**${mathExpression} = ${result}**`, "bot");
                return;
            }
        } catch (e) {}
    }

    // 3. Ricerca nel Dizionario Universale
    let wordToSearch = cleanQuery
        .replace(/['’?.,!]/g, " ")
        .replace(/\b(che cos'e|cos'e|cosa significa|cosa vuol dire|definizione di|significato di|un|una|uno|il|lo|la|i|gli|le|del|della|che)\b/gi, "")
        .trim();

    if (wordToSearch !== "") {
        for (const [term, definition] of Object.entries(appConfig.dictionary)) {
            if (wordToSearch === term || cleanQuery.includes(term)) {
                appendMessage(definition, "bot");
                return;
            }
        }
    }

    // 4. Ricerca FAQ
    let bestMatch = null;
    appConfig.faqs.forEach(item => {
        item.keywords.forEach(keyword => {
            const cleanKeyword = keyword.toLowerCase().trim();
            if (cleanQuery === cleanKeyword || cleanQuery.includes(cleanKeyword)) {
                bestMatch = item;
            }
        });
    });

    if (bestMatch) {
        const responseText = bestMatch.responses[Math.floor(Math.random() * bestMatch.responses.length)];
        appendMessage(responseText, "bot");
    } else {
        appendMessage(`🤖 Al momento purtroppo non ho ancora informazioni specifiche su questo argomento ("${query}"), ma ho registrato la tua richiesta: aggiornerò presto il mio database per poterti rispondere al meglio!`, "bot");
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
    const chatBox = document.getElementById("chatBox") || document.getElementById("chat-messages");
    if (!chatBox) return;
    
    const messageDiv = document.createElement("div");
    const isBot = (sender === "bot");
    messageDiv.classList.add("message", isBot ? "bot-message" : "user-message");

    const avatarIcon = isBot ? "fa-solid fa-robot" : "fa-solid fa-user";
    const avatarDiv = document.createElement("div");
    avatarDiv.classList.add("message-avatar");
    avatarDiv.innerHTML = `<i class="${avatarIcon}"></i>`;

    const bubble = document.createElement("div");
    bubble.classList.add("message-content");

    let formattedText = text
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
        .replace(/\n/g, "<br>");

    bubble.innerHTML = formattedText;

    if (isBot) {
        messageDiv.appendChild(avatarDiv);
        messageDiv.appendChild(bubble);
    } else {
        messageDiv.appendChild(bubble);
        messageDiv.appendChild(avatarDiv);
    }

    chatBox.appendChild(messageDiv);
    chatBox.scrollTop = chatBox.scrollHeight;
}

function resetChat() {
    contatoreInappropriato = 0;
    const chatBox = document.getElementById("chatBox") || document.getElementById("chat-messages");
    if (!chatBox) return;
    chatBox.innerHTML = `
        <div class="message bot-message">
            <div class="message-avatar"><i class="fa-solid fa-robot"></i></div>
            <div class="message-content">
                👋 Ciao! Sono <strong>Arturo</strong>, il tuo assistente virtuale ufficiale dell'IIS "Arturo Checchi".<br><br>
                Conversazione riavviata! Come posso aiutarti oggi?
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

function aggiornaOrologio() {
    const liveClock = document.getElementById("live-clock");
    if (!liveClock) return;
    const ora = new Date();
    const opzioniData = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };
    const dataStr = ora.toLocaleDateString('it-IT', opzioniData);
    const oraStr = ora.toLocaleTimeString('it-IT', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
    liveClock.innerHTML = `<i class="fa-regular fa-clock"></i> ${dataStr} - ${oraStr}`;
}
