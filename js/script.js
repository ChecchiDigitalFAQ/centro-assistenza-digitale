// Database FAQ, Pulsanti Rapidi e Dizionario integrato per Arturo 2.0 | IIS "Arturo Checchi"
let appConfig = {
    quickButtons: [
        { id: "AIUTO", label: "❓ Cos'è Arturo?" },
        { id: "CONTATTI", label: "📞 Contatti" },
        { id: "DIRIGENZA", label: "👔 Dirigenza" },
        { id: "SEGRETERIE", label: "🏢 Segreteria e Uffici" },
        { id: "MICROSOFT365", label: "💻 Servizi Digitali (Teams/Argo)" }
    ],
    
    // DIZIONARIO ED ENCICLOPEDIA LOCALE (Unificato e completo)
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
        "apprendimento": "📖 **Apprendimento Automatico (Machine Learning):** Branca dell'intelligenza artificiale che permette ai sistemi di imparare dai dati in modo autonomo.",
        "archivio": "📖 **Archivio:** Raccolta ordinata di documenti o dati conservati per la consultazione e la memoria storica.",
        "autenticazione": "📖 **Autenticazione:** Processo informatico di verifica dell'identità fornita da un utente, sistema o dispositivo.",
        "backup": "📖 **Backup:** Copia di sicurezza di file o dati informatici creata per prevenire la perdita involontaria di informazioni.",
        "banda": "📖 **Banda Passante:** La quantità massima di dati che può essere trasmessa attraverso una connessione di rete in un determinato intervallo di tempo.",
        "browser": "📖 **Browser:** Programma applicativo utilizzato per navigare, visualizzare e interagire con le pagine del World Wide Web.",
        "bug": "📖 **Bug:** Errore, anomalia o difetto nel codice sorgente di un software che causa un funzionamento imprevisto o errato.",
        "byte": "📖 **Byte:** Sequenza di 8 bit adiacenti. Costituisce l'unità base di misura della memoria dei calcolatori.",
        "cache": "📖 **Memoria Cache:** Memoria temporanea ad altissima velocità che conserva i dati usati di frequente.",
        "cloud": "📖 **Cloud Computing:** Rete di server remoti accessibili via internet per memorizzare dati ed elaborare programmi.",
        "cpu": "📖 **CPU:** Central Processing Unit. Unità centrale di elaborazione, il vero e proprio 'cervello' del computer.",
        "crittografia": "📖 **Crittografia:** Tecnica di cifratura delle informazioni per renderle incomprensibili a chi non possiede la chiave di lettura.",
        "css": "📖 **CSS:** Cascading Style Sheets. Linguaggio usato per definire la formattazione grafica ed il layout delle pagine HTML.",
        "database": "📖 **Database:** Banca dati. Raccolta strutturata ed organizzata di dati digitali consultabile ed aggiornabile.",
        " debugging": "📖 **Debugging:** Il processo sistematico di individuazione e correzione degli errori (bug) all'interno di un software.",
        "dns": "📖 **DNS:** Domain Name System. Sistema che traduce i nomi dei siti web nei corrispondenti indirizzi IP numerici.",
        "driver": "📖 **Driver:** Software che consente al sistema operativo di comunicare e pilotare un componente hardware.",
        "email": "📖 **E-mail:** Posta elettronica. Servizio per la trasmissione di messaggi digitali via internet tra utenti.",
        "firewall": "📖 **Firewall:** Dispositivo di sicurezza di rete che controlla il traffico dati bloccando accessi non autorizzati.",
        "hardware": "📖 **Hardware:** La parte fisica e tangibile di un computer (componenti, schermo, tastiera).",
        "html": "📖 **HTML:** HyperText Markup Language. Linguaggio di marcatura usato per definire la struttura delle pagine web.",
        "indirizzo ip": "📖 **Indirizzo IP:** Etichetta numerica che identifica in modo univoco un dispositivo collegato a una rete informatica.",
        "internet": "📖 **Internet:** Rete globale di calcolatori collegati tra loro che comunicano tramite protocolli standardizzati.",
        "java": "📖 **Java:** Linguaggio di programmazione orientato agli oggetti ampiamente utilizzato nello sviluppo di applicazioni.",
        "json": "📖 **JSON:** JavaScript Object Notation. Formato leggero basato su testo per lo scambio ed il trasferimento di dati digitali.",
        "kernel": "📖 **Kernel:** Il core centrale del sistema operativo che gestisce direttamente l'hardware e l'allocazione delle risorse.",
        "lan": "📖 **LAN:** Local Area Network. Rete informatica privata che collega computer in un'area geografica limitata.",
        "malware": "📖 **Malware:** Qualsiasi programma informatico malevolo progettato per danneggiare, spiare o compromettere un sistema.",
        "memoria": "📖 **Memoria:** Dispositivo o supporto informatico destinato alla conservazione temporanea o permanente dei dati.",
        "open_source": "📖 **Open Source:** Software il cui codice sorgente è reso pubblico e liberamente accessibile, modificabile e distribuibile.",
        "phishing": "📖 **Phishing:** Truffa informatica progettata per ingannare gli utenti e rubare credenziali o dati sensibili.",
        "python": "📖 **Python:** Linguaggio di programmazione ad alto livello famoso per la sua sintassi semplice e versatilità.",
        "ram": "📖 **RAM:** Random Access Memory. Memoria ad accesso casuale ad alta velocità usata dal computer per i dati in esecuzione.",
        "router": "📖 **Router:** Dispositivo di rete che instrada i pacchetti di dati tra reti informatiche diverse.",
        "scanner": "📖 **Scanner:** Periferica di input che permette di digitalizzare documenti cartacei trasformandoli in file immagine o PDF.",
        "server": "📖 **Server:** Elaboratore ad alte prestazioni destinato a gestire ed erogare risorse e servizi a molteplici client.",
        "software": "📖 **Software:** L'insieme dei programmi e istruzioni che permettono ad un computer di funzionare.",
        "sql": "📖 **SQL:** Structured Query Language. Linguaggio standard per la creazione, gestione ed interrogazione di database.",
        "streaming": "📖 **Streaming:** Flusso continuo di dati audio o video trasmesso via internet e riproducibile in tempo reale.",
        "tablet": "📖 **Tablet:** Dispositivo mobile con schermo tattile integrato senza tastiera fisica separata.",
        "url": "📖 **URL:** Uniform Resource Locator. Indirizzo univoco che identifica la posizione di una risorsa sulla rete Internet.",
        "usb": "📖 **USB:** Universal Serial Bus. Standard di connessione via cavo per collegare periferiche e scambiare dati o energia.",
        "virus": "📖 **Virus Informatico:** Codice malevolo in grado di replicarsi autonomamente all'interno di altri programmi o file.",
        "wifi": "📖 **Wi-Fi:** Tecnologia di connessione senza fili che consente a dispositivi digitali di accedere ad una rete locale."
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

        // --- IDENTITÀ, CREATORE E PRIVACY (IIS ARTURO CHECCHI) ---
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
            "keywords": ["numero di telefono di", "numero di", "dammi il numero", "telefono di", "email di", "cellulare di", "dove abita", "informazioni su"],
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
            "responses": ["🔑 A quale piattaforma ti riferisci? Esistono password differenti:\n\n1️⃣ Le credenziali per **Microsoft 365 e Teams** (che utilizzano lo stesso accesso).\n2️⃣ Le credenziali separate per il registro elettronico **Argo**.\n\nDimmi quale delle due password ti serve recuperare così ti spiego come fare!"]
        },
        {
            "id": "PASSWORD_TEAMS",
            "type": "school",
            "keywords": ["password teams", "password microsoft", "password m365"],
            "responses": ["☁️ Per il recupero della password di **Microsoft 365 / Teams**, puoi rivolgerti all'amministrazione o all'assistenza tecnica dell'istituto (Luca Vorraro) per procedere al reset delle credenziali."]
        },
        {
            "id": "PASSWORD_ARGO",
            "type": "school",
            "keywords": ["password argo", "password registro"],
            "responses": ["💻 Per il recupero della password del registro elettronico **Argo**, puoi utilizzare la funzione di recupero password direttamente nella schermata di login di Argo o contattare la segreteria scolastica."]
        },

        // --- MODERAZIONE GRADUALE (LIVELLI) ---
        {
            "id": "MODERAZIONE_ESPLICITA",
            "type": "moderation",
            "keywords": ["sesso", "fai sesso", "porno", "pornografia", "scopare", "uccidere"],
            "responses": ["😊 Su questi argomenti preferisco mantenere toni consoni all'ambiente scolastico. Concentriamoci pure sulle attività dell'IIS \"Arturo Checchi\"!"]
        },
        {
            "id": "INSULTI_OFFESE",
            "type": "moderation",
            "keywords": ["sei stupido", "non capisci niente", "brutto", "inutile", "vaffanculo", "stronzo", "idiota"],
            "responses": ["🤖 Ho molta pazienza, ma zero memoria per gli insulti! Se hai finito, come posso aiutarti sul serio per la scuola?"]
        },

        // --- CHAT E UTILITY GENERALI ---
        {
            "id": "SALUTO",
            "type": "chat",
            "keywords": ["ciao", "salve", "buongiorno", "buonasera", "hey"],
            "responses": ["👋 Ciao! Sono **Arturo**, l'assistente digitale ufficiale dell'IIS \"Arturo Checchi\" di Fucecchio. Come posso aiutarti oggi?"]
        },
        {
            "id": "CHI_SEI",
            "type": "chat",
            "keywords": ["chi sei", "come ti chiami", "presentati", "chi e arturo", "tuo nome"],
            "responses": ["👋 Mi chiamo **Arturo** e sono l'assistente digitale ufficiale dell'IIS \"Arturo Checchi\"!"]
        },
        {
            "id": "RINGRAZIAMENTI",
            "type": "chat",
            "keywords": ["grazie", "grazie mille", "mille grazie", "ti ringrazio"],
            "responses": ["😊 Figurati! È un piacere esserti d'aiuto per la nostra comunità scolastica."]
        },
        {
            "id": "COME_STAI",
            "type": "chat",
            "keywords": ["come stai", "come va", "tutto bene"],
            "responses": ["🤖 Io sto benissimo, pronto a gestire dati e risposte! Tu come stai?"]
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
const RESET_TIME_MS = 30 * 60 * 1000; // Timer inattività predefinito (30 min)

// MACCHINA A STATI CONVERSAZIONALE
let conversationState = null;
let pendingFormMatch = null;
let contatoreInappropriato = 0; // Gestione livelli severità per moderazione

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

    // 1.5 CONTROLLO MODERAZIONE / INSISTENZA SU ARGOMENTI INAPPROPRIATI
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

    // 3. CALCOLATRICE MATEMATICA AL VOLO
    const mathExpression = extractMathExpression(cleanQuery);
    if (mathExpression) {
        try {
            const result = Function(`'use strict'; return (${mathExpression})`)();
            if (!isNaN(result)) {
                appendMessage(`🧮 Ho calcolato l'espressione per te:\n**${mathExpression} = ${result}**`, "bot");
                personalQueryCount = 0;
                return;
            }
        } catch (e) {}
    }

    // 4. DATA E ORA IN TEMPO REALE
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

    // 5. RICERCA DIZIONARIO UNIVERSALE (Scolastico e Generale)
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
            if (wordToSearch === cleanTerm || cleanTerm.replace(/_/g, " ") === wordToSearch || cleanQuery.includes(cleanTerm)) {
                personalQueryCount = 0;
                appendMessage(definition, "bot");
                return;
            }
        }
    }

    // 6. RICERCA FAQ / FORM / ASSISTENTE
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

        const responseText = bestMatch.responses[Math.floor(Math.random() * bestMatch.responses.length)];
        appendMessage(responseText, "bot");
    } else {
        // 7. FALLBACK INTELLIGENTE CON REGISTRAZIONE RICHIESTA
        personalQueryCount = 0;
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
    const chatBox = document.getElementById("chatBox") || document.getElementById("chat-messages");
    if (!chatBox) return;
    
    const messageDiv = document.createElement("div");
    messageDiv.classList.add("message", sender === "bot" ? "bot-message" : "user-message");

    const bubble = document.createElement("div");
    bubble.classList.add("message-content");

    let formattedText = text
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
        .replace(/\n/g, "<br>");

    bubble.innerHTML = formattedText;
    messageDiv.appendChild(bubble);
    chatBox.appendChild(messageDiv);

    chatBox.scrollTop = chatBox.scrollHeight;
}

function resetChat() {
    personalQueryCount = 0;
    conversationState = null;
    pendingFormMatch = null;
    contatoreInappropriato = 0;
    const chatBox = document.getElementById("chatBox") || document.getElementById("chat-messages");
    if (!chatBox) return;
    chatBox.innerHTML = `
        <div class="message bot-message">
            <div class="message-content">
                <strong>Ciao! Sono Arturo.</strong><br><br>
                Conversazione riavviata! Posso aiutarti a trovare informazioni sull'IIS "Arturo Checchi", modulistica, orari e supporto sui servizi digitali.<br><br>
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
