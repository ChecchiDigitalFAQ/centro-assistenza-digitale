// Database FAQ, Pulsanti Rapidi e Dizionario ENCICLOPEDICO MILLENARIO ESTESO per Arturo | IIS "Arturo Checchi"
let appConfig = {
    quickButtons: [
        { id: "AIUTO", label: "❓ Cos'è Arturo?", icon: "fa-solid fa-circle-question" },
        { id: "CONTATTI", label: "📞 Contatti", icon: "fa-solid fa-address-book" },
        { id: "DIRIGENZA", label: "👔 Dirigenza", icon: "fa-solid fa-user-tie" },
        { id: "SEGRETERIE", label: "🏢 Segreteria e Uffici", icon: "fa-solid fa-building-columns" },
        { id: "MICROSOFT365", label: "💻 Servizi Digitali (Teams/Argo)", icon: "fa-solid fa-laptop-code" }
    ],
    
    // DIZIONARIO ED ENCICLOPEDIA ESTESA (A-Z)
    dictionary: {
        "abaco": "📖 **Abaco:** Antico strumento di calcolo manuale costituito da una cornice con guide parallele su cui scorrono palline.",
        "account": "📖 **Account:** Insieme di credenziali (username e password) che identificano in modo univoco un utente su un sistema informatico.",
        "addendo": "📖 **Addendo:** Ciascuno dei numeri che vengono sommati in un'operazione di addizione.",
        "aforisma": "📖 **Aforisma:** Breve massima o sentenza che esprime in modo denso e sintetico una verità o un principio morale.",
        "algebra": "📖 **Algebra:** Ramo della matematica che studia le strutture algebriche, le relazioni e le quantità.",
        "algoritmo": "📖 **Algoritmo:** Sequenza ordinata e finita di istruzioni elementari per risolvere un problema.",
        "allegoria": "📖 **Allegoria:** Figura retorica mediante la quale un concetto astratto viene espresso attraverso un'immagine concreta.",
        "allitterazione": "📖 **Allitterazione:** Ripetizione dello stesso suono o della stessa sillaba all'inizio o all'interno di parole vicine.",
        "amministratore": "📖 **Amministratore:** Persona responsabile della gestione, configurazione e sicurezza di un sistema o organizzazione.",
        "analogia": "📖 **Analogia:** Rapporto di somiglianza tra elementi o situazioni diverse, usato per spiegare un concetto.",
        "anarchia": "📖 **Anarchia:** Teoria e movimento politico che persegue l'abolizione di ogni forma di Stato e autorità.",
        "anatomia": "📖 **Anatomia:** Scienza che studia la forma e la struttura degli organismi viventi.",
        "android": "📖 **Android:** Sistema operativo mobile open source basato su kernel Linux, sviluppato da Google.",
        "anfora": "📖 **Anfora:** Antico vaso di terracotta con due manici e collo stretto, usato per contenere vino o olio.",
        "antigene": "📖 **Antigene:** Sostanza capace di indurre una risposta immunitaria e la produzione di anticorpi.",
        "antitesi": "📖 **Antitesi:** Figura retorica che accosta due concetti o parole di senso opposto per risaltare il contrasto.",
        "antropologia": "📖 **Antropologia:** Scienza che studia l'essere umano sotto l'aspetto biologico, culturale e sociale.",
        "api": "📖 **API:** Application Programming Interface. Protocolli che consentono a software diversi di comunicare tra loro.",
        "app": "📖 **Applicazione (App):** Programma informatico progettato per svolgere specifiche attività su dispositivi digitali.",
        "archeologia": "📖 **Archeologia:** Scienza che studia le civiltà e le culture del passato attraverso i resti materiali.",
        "architettura": "📖 **Architettura:** Arte e tecnica di progettare e costruire edifici e spazi urbani.",
        "aristocrazia": "📖 **Aristocrazia:** Forma di governo in cui il potere supremo è detenuto dai nobili o dai migliori.",
        "armonia": "📖 **Armonia:** Combinazione equilibrata e gradevole di suoni, colori, forme o elementi distinti.",
        "asteroide": "📖 **Asteroide:** Piccolo corpo celeste roccioso o metallico che orbita attorno al Sole.",
        "atomo": "📖 **Atomo:** La più piccola unità fondamentale di un elemento chimico che ne conserva le proprietà.",
        "audiobook": "📖 **Audiobook:** Libro recitato da uno speaker o attore e registrato in formato audio digitale.",
        "aurora": "📖 **Aurora:** Fenomeno luminoso atmosferico o celeste visibile all'alba o nelle regioni polari.",
        "autonomia": "📖 **Autonomia:** Capacità di un individuo o di un ente di governarsi da solo e prendere decisioni.",
        "backup": "📖 **Backup:** Copia di sicurezza di file e dati creata per prevenire la perdita involontaria delle informazioni.",
        "barometro": "📖 **Barometro:** Strumento scientifico utilizzato per misurare la pressione atmosferica.",
        "barocco": "📖 **Barocco:** Movimento culturale e artistico del Seicento caratterizzato da sfarzo ed esuberanza.",
        "batterio": "📖 **Batterio:** Microorganismo unicellulare procariota privo di un nucleo cellulare ben definito.",
        "big_bang": "📖 **Big Bang:** Modello cosmologico che descrive l'origine e l'evoluzione iniziale dell'universo.",
        "biografia": "📖 **Biografia:** Narrazione scritta della vita di una persona.",
        "biologia": "📖 **Biologia:** Scienza che studia la vita, gli organismi viventi, la loro struttura e la loro evoluzione.",
        "botanica": "📖 **Botanica:** Ramo della biologia che studia gli organismi vegetali.",
        "browser": "📖 **Browser:** Programma applicativo utilizzato per navigare, visualizzare e interagire con le pagine web.",
        "bug": "📖 **Bug:** Errore o anomalia nel codice sorgente di un software che ne causa un funzionamento anomalo.",
        "cappannone": "📖 **Capannone:** Grande edificio ad un solo piano adibito a magazzino, produzione o laboratorio.",
        "cartografia": "📖 **Cartografia:** Scienza e tecnica della preparazione, studio e disegno delle carte geografiche.",
        "catalizzatore": "📖 **Catalizzatore:** Sostanza che aumenta la velocità di una reazione chimica senza consumarsi.",
        "catacomba": "📖 **Catacomba:** Antico cimitero sotterraneo.",
        "cellula": "📖 **Cellula:** Unità strutturale e funzionale fondamentale di tutti gli organismi viventi.",
        "chiave_pubblica": "📖 **Crittografia Asimmetrica:** Sistema di cifratura basato su una coppia di chiavi (pubblica e privata).",
        "chiaroscuro": "📖 **Chiaroscuro:** Tecnica pittorica basata sull'uso dei contrasti tra luce e ombra.",
        "chimerico": "📖 **Chimerico:** Fantastico, irreale, privo di fondamento concreto.",
        "clorofilla": "📖 **Clorofilla:** Pigmento verde presente nelle piante indispensabile per la fotosintesi.",
        "cloud": "📖 **Cloud Computing:** Rete di server remoti accessibili via internet per memorizzare dati ed elaborare programmi.",
        "codice": "📖 **Codice:** Sistema di segni e regole per la trasmissione di informazioni.",
        "cometa": "📖 **Cometa:** Corpo celeste ghiacciato che sviluppa una chioma luminosa quando si avvicina al Sole.",
        "comunicazione": "📖 **Comunicazione:** Processo di trasmissione di informazioni e messaggi tra un emittente e un ricevente.",
        "cpu": "📖 **CPU:** Central Processing Unit. Unità centrale di elaborazione, il 'cervello' del computer.",
        "crittografia": "📖 **Crittografia:** Disciplina che studia i metodi per rendere un messaggio illeggibile ai non autorizzati.",
        "database": "📖 **Database:** Banca dati. Raccolta strutturata ed organizzata di dati digitali consultabile.",
        "democrazia": "📖 **Democrazia:** Forma di governo in cui il potere sovrano appartiene al popolo.",
        "dialetto": "📖 **Dialetto:** Sistema linguistico di ambito geografico o culturale limitato.",
        "didattica": "📖 **Didattica:** Scienza dell'insegnamento e dei metodi di apprendimento educativo.",
        "dizionario": "📖 **Dizionario:** Opera che raccoglie e spiega le parole di una lingua.",
        "diploma": "📖 **Diploma:** Titolo di studio ufficiale rilasciato al completamento di un percorso scolastico.",
        "dna": "📖 **DNA:** Acido desossiribonucleico. Macromolecola che contiene le informazioni genetiche.",
        "ecosistema": "📖 **Ecosistema:** Insieme degli organismi viventi e dell'ambiente fisico di un territorio.",
        "elettricita": "📖 **Elettricità:** Insieme dei fenomeni fisici associati alla presenza e al flusso di cariche elettriche.",
        "energia": "📖 **Energia:** Grandezza fisica che misura la capacità di un sistema di compiere un lavoro.",
        "epica": "📖 **Epica:** Genere letterario incentrato su gesta eroiche e mitologiche.",
        "filosofia": "📖 **Filosofia:** Indagine critica sui fondamenti dell'esperienza e del sapere umano.",
        "fotone": "📖 **Fotone:** Particella elementare che costituisce la radiazione elettromagnetica e la luce.",
        "galassia": "📖 **Galassia:** Immense aggregazioni di stelle, gas e polveri tenute insieme dalla gravità.",
        "genetica": "📖 **Genetica:** Scienza che studia l'ereditarietà e la variabilità biologica.",
        "geografia": "📖 **Geografia:** Scienza che descrive la Terra nei suoi aspetti fisici e umani.",
        "gravita": "📖 **Gravità:** Forza di attrazione reciproca tra corpi dotati di massa.",
        "hardware": "📖 **Hardware:** La parte fisica, tangibile e meccanica di un computer.",
        "illuminismo": "📖 **Illuminismo:** Movimento culturale del Settecento basato sulla centralità della ragione.",
        "internet": "📖 **Internet:** Rete globale di telecomunicazioni che connette computer in tutto il mondo.",
        "letteratura": "📖 **Letteratura:** Insieme delle opere scritte che rivestono valore estetico o culturale.",
        "memoria": "📖 **Memoria RAM:** Dispositivo elettronico che memorizza temporaneamente i dati in elaborazione.",
        "mitologia": "📖 **Mitologia:** Insieme di miti propri di una civiltà o di una cultura.",
        "molecola": "📖 **Molecola:** Particella costituita da due o più atomi uniti da legami chimici.",
        "nanotecnologia": "📖 **Nanotecnologia:** Scienza e ingegneria della manipolazione della materia su scala nanometrica.",
        "neolitico": "📖 **Neolitico:** Età della pietra pulita e levigata, caratterizzata dall'agricoltura.",
        "osmose": "📖 **Osmosi:** Diffusione di un solvente attraverso una membrana semipermeabile.",
        "paradigma": "📖 **Paradigma:** Modello di riferimento o schema teorico esplicativo.",
        "pianeta": "📖 **Pianeta:** Corpo celeste che orbita attorno a una stella senza emettere luce propria.",
        "piramide": "📖 **Piramide:** Solido geometrico con base poligonale e facce triangolari convergenti in un vertice.",
        "plasma": "📖 **Plasma:** Stato della materia costituito da un gas ionizzato ad altissima temperatura.",
        "rinascimento": "📖 **Rinascimento:** Movimento artistico e culturale fiorito in Italia tra il XV e il XVI secolo.",
        "rivoluzione": "📖 **Rivoluzione:** Profondo mutamento politico, sociale o tecnologico in tempi rapidi.",
        "robotica": "📖 **Robotica:** Disciplina ingegneristica che progetta e costruisce robot automatici.",
        "software": "📖 **Software:** Insieme dei programmi e delle istruzioni che permettono a un computer di funzionare.",
        "storia": "📖 **Storia:** Disciplina che studia gli eventi del passato umano.",
        "teatro": "📖 **Teatro:** Edificio o genere letterario di rappresentazione drammatica.",
        "termodinamica": "📖 **Termodinamica:** Scienza che studia gli scambi di calore e lavoro nei sistemi.",
        "umanesimo": "📖 **Umanesimo:** Movimento culturale del Quattrocento incentrato sulla centralità dell'uomo.",
        "universo": "📖 **Universo:** L'insieme di tutta la materia, dell'energia, dello spazio e del tempo.",
        "vaccino": "📖 **Vaccino:** Preparato biologico volto a procurare immunità attiva verso una specifica malattia.",
        "velocita": "📖 **Velocità:** Rapporto tra lo spazio percorso da un corpo e il tempo impiegato.",
        "virus": "📖 **Virus:** Agente infettivo submicroscopico che si replica solo all'interno di cellule ospiti.",
        "vulcano": "📖 **Vulcano:** Spaccatura della crosta terrestre da cui fuoriescono magma, ceneri e gas.",
        "zeta": "📖 **Zeta:** Ventiseiesima e ultima lettera dell'alfabeto italiano."
    },

    faqs: [
        {
            "id": "AIUTO",
            "type": "school",
            "keywords": ["aiuto", "help", "cosa sai fare", "istruzioni", "cos'e arturo", "cose arturo", "chi e arturo"],
            "responses": [
                "🤖 **Arturo** è l'assistente virtuale ufficiale dell'**IIS \"Arturo Checchi\"** di Fucecchio, progettato per offrire supporto immediato a tutta la comunità scolastica.\n\n" +
                "💡 **Cosa posso fare per te?**\n" +
                "• 📋 **Ricerca di Form e Modulistica:** Ti aiuto a trovare e compilare i moduli ufficiali dell'istituto (richiesta fotocopie, autorizzazione esperti esterni, piani di lavoro, permessi).\n" +
                "• 🧭 **Orientamento e Informazioni:** Guido studenti, docenti e famiglie tra le risorse, le attività e l'offerta formativa della scuola.\n" +
                "• 💻 **Account e Servizi Digitali:** Fornisco indicazioni e supporto per l'accesso agli account istituzionali, Microsoft 365, Teams e al registro elettronico Argo.\n" +
                "• 📚 **Enciclopedia e Calcoli:** Puoi chiedermi la definizione di centinaia di termini enciclopedici o calcoli matematici al volo.\n\n" +
                "Scrivi pure la tua richiesta qui sotto o seleziona un argomento rapido!"
            ]
        },
        {
            "id": "CHI_SEI",
            "type": "chat",
            "keywords": ["chi sei", "come ti chiami", "presentati", "chi e arturo", "tuo nome", "nome", "ti chiami"],
            "responses": ["👋 Mi chiamo **Arturo** e sono l'assistente digitale ufficiale dell'IIS \"Arturo Checchi\" di Fucecchio!"]
        },
        {
            "id": "DOVE_VIVI",
            "type": "chat",
            "keywords": ["dove vivi", "dove ti trovi", "dove abiti", "sei umano", "sei un robot", "cosa sei"],
            "responses": ["🤖 Io vivo nel cloud e nei sistemi digitali dell'IIS \"Arturo Checchi\"! Sono sempre attivo per aiutarti."]
        },
        {
            "id": "CREATORE",
            "type": "personal",
            "keywords": ["chi ti ha creato", "chi ti ha inventato", "chi ti ha sviluppato", "chi ti ha programmato", "creatore", "chi ti ha fatto", "programmato", "sviluppato"],
            "responses": ["🤖 Sono stato ideato e creato presso l'**IIS \"Arturo Checchi\"** di Fucecchio dal Tecnico Informatico **Luca Vorraro** per offrire supporto e risorse alla comunità scolastica!"]
        },
        {
            "id": "FORM_LISTA",
            "type": "form",
            "keywords": ["form", "moduli", "modulo", "modulistica", "elenco form", "tutti i form"],
            "responses": ["📋 **Modulistica e Form Scolastici:**\n\nEcco i principali moduli disponibili:\n• 🖨️ <a href='https://forms.cloud.microsoft/e/PKygPpxkAQ' target='_blank'>Richiesta Fotocopie</a>\n• 📋 <a href='https://forms.cloud.microsoft/e/jvGm4wwcz4' target='_blank'>Autorizzazione Esperti Esterni</a>\n• 📑 <a href='https://forms.cloud.microsoft/e/AjrmwV0qXa' target='_blank'>Piano di Lavoro Docenti</a>\n• 💰 <a href='https://forms.cloud.microsoft/e/pv7mxGHyC5' target='_blank'>Sostituzioni e Permessi Brevi</a>"]
        },
        {
            "id": "FORM_RICHIESTA_FOTOCOPIE",
            "type": "form",
            "keywords": ["richiesta fotocopie", "fotocopie", "form fotocopie", "modulo fotocopie", "stampa fotocopie"],
            "responses": ["🖨️ **Richiesta Fotocopie:**\n\nPuoi inoltrare la richiesta di stampa fotocopie tramite il Form dedicato:\n🔗 <a href='https://forms.cloud.microsoft/e/PKygPpxkAQ' target='_blank' style='color: #1e3a8a; font-weight: bold;'>Apri Form Richiesta Fotocopie</a>"]
        },
        {
            "id": "FORM_INGRESSO_ESPERTI_ESTERNI",
            "type": "form",
            "keywords": ["ingresso esperti esterni", "esperti esterni", "esperti", "autorizzazione esperti", "form esperti"],
            "responses": ["📋 **Richiesta Autorizzazione Ingresso Esperti Esterni:**\n\nPuoi accedere e compilare il modulo ufficiale al seguente link:\n🔗 <a href='https://forms.cloud.microsoft/e/jvGm4wwcz4' target='_blank' style='color: #1e3a8a; font-weight: bold;'>Apri Form Autorizzazione Esperti Esterni</a>"]
        },
        {
            "id": "GESTIONE_PASSWORD",
            "type": "school",
            "keywords": ["password", "smarrito la password", "recuperare password", "password persa", "non ricordo la password", "credenziali", "account istituzionali", "account argo"],
            "responses": ["🔑 A quale piattaforma ti riferisci? Esistono credenziali differenti:\n\n1️⃣ **Account Istituzionali / Microsoft 365 e Teams**.\n2️⃣ **Account Argo** per il registro elettronico.\n\nDimmi quale password o account ti serve recuperare così ti spiego come fare!"]
        },
        {
            "id": "MODERAZIONE_ESPLICITA",
            "type": "moderation",
            "keywords": ["sesso", "porno", "scopare", "uccidere"],
            "responses": ["😊 Su questi argomenti preferisco mantenere toni consoni all'ambiente scolastico. Concentriamoci pure sulle attività dell'IIS \"Arturo Checchi\"!"]
        },
        {
            "id": "SALUTO",
            "type": "chat",
            "keywords": ["ciao", "salve", "buongiorno", "buonasera", "hey"],
            "responses": ["👋 Ciao! Sono **Arturo**, l'assistente digitale ufficiale dell'IIS \"Arturo Checchi\" di Fucecchio. Come posso aiutarti oggi?"]
        },
        {
            "id": "CONTATTI",
            "type": "school",
            "keywords": ["contatti scuola", "telefono scuola", "email scuola", "pec scuola", "dove siete", "indirizzo", "contatti"],
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
            "keywords": ["teams", "microsoft", "argo", "registro", "m365", "servizi digitali"],
            "responses": ["💻 Per i servizi digitali (Microsoft 365, Teams, Registro Elettronico Argo) puoi rivolgerti all'assistenza tecnica o consultare le sezioni dedicate sul sito della scuola."]
        }
    ]
};

let inactivityTimer = null;
const RESET_TIME_MS = 30 * 60 * 1000;
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
    const container = document.getElementById("faq-buttons-container");
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
    const inputField = document.getElementById("user-input");
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
        .replace(/[?.,!]/g, "")
        .replace(/\s+/g, " ")
        .trim();

    // 1. Moderazione
    const paroleInappropriate = ["sesso", "porno", "scopare", "uccidere"];
    if (paroleInappropriate.some(p => cleanQuery.includes(p))) {
        contatoreInappropriato++;
        if (contatoreInappropriato === 1) {
            appendMessage("😊 Su questi argomenti preferisco mantenere toni consoni all'ambiente scolastico. Concentriamoci pure sulle attività dell'IIS \"Arturo Checchi\"!", "bot");
        } else {
            appendMessage("🛑 La nostra conversazione può anche terminare qui, visto che continui a insistere su argomenti non consoni all'assistente scolastico.", "bot");
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

    // 3. Ricerca nel Dizionario
    let wordToSearch = cleanQuery
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

    // 4. Ricerca FAQ avanzata
    let bestMatch = null;
    appConfig.faqs.forEach(item => {
        item.keywords.forEach(keyword => {
            const cleanKeyword = keyword.toLowerCase().trim();
            if (cleanQuery === cleanKeyword || cleanQuery.includes(cleanKeyword) || cleanKeyword.includes(cleanQuery)) {
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
    const chatBox = document.getElementById("chat-messages");
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
    const chatBox = document.getElementById("chat-messages");
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
