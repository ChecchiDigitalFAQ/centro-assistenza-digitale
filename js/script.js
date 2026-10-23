let appConfig = {
    quickButtons: [
        { id: "AIUTO", label: "❓ Cos'è Arturo?", icon: "fa-solid fa-circle-question" },
        { id: "CONTATTI", label: "📞 Contatti", icon: "fa-solid fa-address-book" },
        { id: "DIRIGENZA", label: "👔 Dirigenza", icon: "fa-solid fa-user-tie" },
        { id: "SEGRETERIE", label: "🏢 Segreteria e Uffici", icon: "fa-solid fa-building-columns" },
        { id: "MICROSOFT365", label: "💻 Servizi Digitali (Teams/Argo)", icon: "fa-solid fa-laptop-code" }
    ],
    
    dictionary: {
        "abaco": "📖 **Abaco:** Antico strumento di calcolo manuale costituito da una cornice con guide parallele su cui scorrono palline.",
        "account": "📖 **Account:** Insieme di credenziali (username e password) che identificano in modo univoco un utente su un sistema informatico.",
        "addendo": "📖 **Addendo:** Ciascuno dei numeri che vengono sommati in un'operazione di addizione.",
        "algebra": "📖 **Algebra:** Ramo della matematica che studia le strutture algebriche, le relazioni e le quantità.",
        "algoritmo": "📖 **Algoritmo:** Sequenza ordinata e finita di istruzioni elementari per risolvere un problema.",
        "atomo": "📖 **Atomo:** La più piccola unità fondamentale di un elemento chimico che ne conserva le proprietà.",
        "backup": "📖 **Backup:** Copia di sicurezza di file e dati creata per prevenire la perdita involontaria delle informazioni.",
        "browser": "📖 **Browser:** Programma applicativo utilizzato per navigare, visualizzare e interagire con le pagine web.",
        "bug": "📖 **Bug:** Errore o anomalia nel codice sorgente di un software che ne causa un funzionamento anomalo.",
        "cellula": "📖 **Cellula:** Unità strutturale e funzionale fondamentale di tutti gli organismi viventi.",
        "cpu": "📖 **CPU:** Central Processing Unit. Unità centrale di elaborazione, il 'cervello' del computer.",
        "database": "📖 **Database:** Banca dati. Raccolta strutturata ed organizzata di dati digitali consultabile.",
        "dizionario": "📖 **Dizionario:** Opera che raccoglie e spiega le parole di una lingua.",
        "dna": "📖 **DNA:** Acido desossiribonucleico. Macromolecola che contiene le informazioni genetiche.",
        "hardware": "📖 **Hardware:** La parte fisica, tangibile e meccanica di un computer.",
        "internet": "📖 **Internet:** Rete globale di telecomunicazioni che connette computer in tutto il mondo.",
        "memoria": "📖 **Memoria RAM:** Dispositivo elettronico che memorizza temporaneamente i dati in elaborazione.",
        "software": "📖 **Software:** Insieme dei programmi e delle istruzioni che permettono a un computer di funzionare.",
        "osmosi": "📖 **Osmosi:** Diffusione di un solvente attraverso una membrana semipermeabile."
    },

    faqs: [
        {
            "id": "SALUTO",
            "keywords": ["ciao", "salve", "buongiorno", "buonasera", "hey"],
            "responses": ["👋 Ciao! Sono **Arturo**, l'assistente digitale dell'IIS Arturo Checchi. Come posso aiutarti oggi?"]
        },
        {
            "id": "CHI_SEI",
            "keywords": ["chi sei", "come ti chiami", "presentati", "chi e arturo", "tuo nome", "cimo tu chiami", "comu ti chiami"],
            "responses": ["👋 Mi chiamo **Arturo** e sono l'assistente digitale dell'IIS Arturo Checchi!"]
        },
        {
            "id": "NASCITA_LUOGO",
            "keywords": ["quando sei nato", "dove sei nato", "dove vivi", "dove ti trovi", "eta", "sei un robot"],
            "responses": ["🤖 Sono nato nel mondo digitale e vivo nei server dell'**IIS Arturo Checchi** a Fucecchio! Non ho un'età vera e propria, ma sono sempre aggiornato."]
        },
        {
            "id": "BARZELLETTA",
            "keywords": ["barzelletta", "raccontami una barzelletta", "fammi ridere", "battuta", "indovinello"],
            "responses": [
                "😄 Perché i computer vanno in vacanza? Per ricaricare le batterie!",
                "😄 Cosa fa un punto e virgola su una spiaggia? Il punto di domanda!",
                "😄 Perché il Wi-Fi della scuola è sempre sereno? Perché naviga nell'aria!"
            ]
        },
        {
            "id": "AIUTO",
            "keywords": ["aiuto", "help", "cosa sai fare", "istruzioni", "come funzioni", "cos'e arturo"],
            "responses": ["Posso aiutarti a trovare informazioni generali, contatti, orari di segreteria, moduli per docenti/studenti, definizioni del dizionario e supporto per Teams e Argo!"]
        },
        {
            "id": "CONTATTI",
            "keywords": ["contatti", "telefono", "email", "pec", "dove siete", "indirizzo"],
            "responses": ["📍 **Sede Principale:** Viale Gramsci 7 - 50054 Fucecchio (FI)\n☎️ **Tel:** +39 0571 20889\n📧 **Email:** FIIS00300C@istruzione.it\n📨 **PEC:** FIIS00300C@pec.istruzione.it"]
        },
        {
            "id": "DIRIGENZA",
            "keywords": ["dirigenza", "preside", "dirigente", "dirigente scolastico"],
            "responses": ["👔 La Dirigenza riceve su appuntamento. Attualmente in carica la Dirigente Scolastica dell'IIS \"Arturo Checchi\" si chiama **Jenny Pellitteri**."]
        },
        {
            "id": "SEGRETERIE",
            "keywords": ["segreteria", "uffici", "orari segreteria", "didattica", "personale", "plessi", "sedi", "sede centrale", "ite"],
            "responses": ["📋 La segreteria si divide in **Didattica** e **Personale**. Gli sportelli sono aperti al pubblico dal lunedì al venerdì dalle 08:00 alle 10:00."]
        },
        {
            "id": "MICROSOFT365",
            "keywords": ["teams", "microsoft", "argo", "registro", "servizi digitali", "password"],
            "responses": ["💻 Per i servizi digitali (Teams, Outlook, Argo) puoi recuperare la password o richiedere assistenza rivolgendoti all'Animatore Digitale o alla segreteria."]
        },
        {
            "id": "RINGRAZIAMENTO",
            "keywords": ["ok grazie", "grazie e basta", "grazie per l'aiuto", "grazie sei un grande", "grazie di tutto", "grazie mille", "perfetto grazie", "molto gentile", "grazie", "ti ringrazio", "perfetto", "sei un mito"],
            "responses": ["😊 Prego! È un vero piacere poter dare una mano. Se hai bisogno di altro per l'IIS \"Arturo Checchi\", chiedi pure! A presto! 👋"]
        },
        {
            "id": "SALUTO_FINALE",
            "keywords": ["ti saluto", "arrivederci", "ciao ciao", "buona giornata", "buona serata", "a presto", "addio"],
            "responses": ["👋 Ricambio con affetto il saluto! Ti auguro una splendida giornata. A presto da Arturo e da tutta la comunità dell'IIS \"Arturo Checchi\"! 🏫"]
        },
        {
            "id": "FORM_FOTOCOPIE",
            "keywords": ["fotocopie", "form fotocopie", "modulo fotocopie", "stampa fotocopie"],
            "responses": ["🖨️ **Richiesta Fotocopie:**\n\nPuoi inoltrare la richiesta di stampa fotocopie tramite il Form dedicato:\n🔗 <a href='https://forms.cloud.microsoft/e/PKygPpxkAQ' target='_blank' style='color: #1e3a8a; font-weight: bold;'>Apri Form Richiesta Fotocopie</a>"]
        },
        {
            "id": "FORM_ESPERTI",
            "keywords": ["esperti", "esperti esterni", "autorizzazione esperti", "form esperti"],
            "responses": ["📋 **Richiesta Autorizzazione Ingresso Esperti Esterni:**\n\nPuoi accedere e compilare il modulo ufficiale al seguente link:\n🔗 <a href='https://forms.cloud.microsoft/e/jvGm4wwcz4' target='_blank' style='color: #1e3a8a; font-weight: bold;'>Apri Form Autorizzazione Esperti Esterni</a>"]
        }
    ]
};

let inAttesaSceltaForm = false;

document.addEventListener("DOMContentLoaded", () => {
    initApp();
    startClock();
});

function initApp() {
    renderQuickButtons();
    setupEventListeners();
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
        .replace(/[,!]/g, "")
        .replace(/\s+/g, " ")
        .trim();

    if (inAttesaSceltaForm) {
        inAttesaSceltaForm = false;
        if (cleanQuery.includes("fotocopie") || cleanQuery.includes("stampa")) {
            rispondiBot("🖨️ **Richiesta Fotocopie:**\n\nPuoi inoltrare la richiesta tramite il Form dedicato:\n🔗 <a href='https://forms.cloud.microsoft/e/PKygPpxkAQ' target='_blank' style='color: #1e3a8a; font-weight: bold;'>Apri Form Richiesta Fotocopie</a>");
            return;
        } else if (cleanQuery.includes("esperti") || cleanQuery.includes("esterni")) {
            rispondiBot("📋 **Richiesta Autorizzazione Ingresso Esperti Esterni:**\n\nPuoi compilare il modulo ufficiale al seguente link:\n🔗 <a href='https://forms.cloud.microsoft/e/jvGm4wwcz4' target='_blank' style='color: #1e3a8a; font-weight: bold;'>Apri Form Autorizzazione Esperti Esterni</a>");
            return;
        }
    }

    if (cleanQuery === "form" || cleanQuery === "modulo" || cleanQuery === "moduli" || cleanQuery === "modulistica") {
        inAttesaSceltaForm = true;
        rispondiBot("📋 Certamente! A quale form o modulo ti riferisci?\n\n1️⃣ **Fotocopie**\n2️⃣ **Esperti Esterni**\n\nDimmi pure quale ti interessa!");
        return;
    }

    let wordToSearch = cleanQuery
        .replace(/\b(che cos'e|cos'e|cosa significa|cosa vuol dire|definizione di|significato di|un|una|uno|il|lo|la|i|gli|le|del|della|che)\b/gi, "")
        .trim();

    if (wordToSearch !== "") {
        for (const [term, def] of Object.entries(appConfig.dictionary)) {
            if (wordToSearch === term || cleanQuery.includes(term)) {
                rispondiBot(def);
                return;
            }
        }
    }

    let matchedFaq = null;
    appConfig.faqs.forEach(faq => {
        faq.keywords.forEach(kw => {
            if (cleanQuery.includes(kw) || kw.includes(cleanQuery) || calcolaSomiglianza(cleanQuery, kw) > 0.65) {
                matchedFaq = faq;
            }
        });
    });

    if (matchedFaq) {
        let resp = matchedFaq.responses[Math.floor(Math.random() * matchedFaq.responses.length)];
        rispondiBot(resp);
    } else {
        appendMessage(`🤖 Al momento non ho informazioni specifiche su "${query}", ma ho registrato la tua richiesta per aggiornare il mio database!`, "bot");
    }
}

function calcolaSomiglianza(s1, s2) {
    let parole1 = s1.split(" ");
    let parole2 = s2.split(" ");
    let matchCount = 0;
    parole1.forEach(p1 => {
        parole2.forEach(p2 => {
            if (p1 === p2 || (p1.length > 2 && p2.length > 2 && (p1.includes(p2) || p2.includes(p1)))) {
                matchCount++;
            }
        });
    });
    return matchCount / Math.max(parole1.length, parole2.length);
}

function rispondiBot(testo) {
    appendMessage(testo, "bot");
}

function quickAction(id) {
    let found = appConfig.faqs.find(f => f.id === id);
    if (found) {
        rispondiBot(found.responses[0]);
    }
}

function appendMessage(text, sender) {
    const chatBox = document.getElementById("chat-messages");
    if (!chatBox) return;
    
    const messageDiv = document.createElement("div");
    const isBot = (sender === "bot");
    messageDiv.classList.add("message", isBot ? "bot-message" : "user-message");

    const avatarDiv = document.createElement("div");
    avatarDiv.classList.add("message-avatar");
    avatarDiv.innerHTML = `<i class="${isBot ? "fa-solid fa-robot" : "fa-solid fa-user"}"></i>`;

    const bubble = document.createElement("div");
    bubble.classList.add("message-content");
    bubble.innerHTML = text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>').replace(/\n/g, "<br>");

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
    inAttesaSceltaForm = false;
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
}

function startClock() {
    const clockEl = document.getElementById("live-clock");
    if (!clockEl) return;
    setInterval(() => {
        const now = new Date();
        clockEl.innerHTML = `<i class="fa-regular fa-clock"></i> ${now.toLocaleTimeString()}`;
    }, 1000);
}
