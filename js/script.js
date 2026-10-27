/**
 * MOTORE CORE DI ARTURO - ASSISTENTE VIRTUALE UFFICIALE
 * IIS "Arturo Checchi" (Fucecchio)
 * Sviluppato da Luca Vorraro
 */

let appData = {
    settings: {},
    faqs: []
};

document.addEventListener("DOMContentLoaded", () => {
    loadFAQData();
    setupEventListeners();
    startClock();
});

/**
 * Carica dinamicamente il file faq.json esterno
 */
async function loadFAQData() {
    try {
        const response = await fetch('faq.json');
        if (!response.ok) throw new Error('Errore nel caricamento del file FAQ');
        appData = await response.json();
        renderQuickButtons();
    } catch (error) {
        console.error("Impossibile caricare il database delle FAQ:", error);
    }
}

function renderQuickButtons() {
    const container = document.getElementById("faq-buttons-container");
    if (!container) return;
    container.innerHTML = "";
    
    // Pulsanti rapidi fissi basati sulle macro-aree principali della scuola
    const quickButtonsConfig = [
        { id: "AIUTO", label: "Cos'è Arturo?", icon: "fa-solid fa-circle-question" },
        { id: "CONTATTI", label: "Contatti", icon: "fa-solid fa-address-book" },
        { id: "DIRIGENZA", label: "Dirigenza", icon: "fa-solid fa-user-tie" },
        { id: "SEGRETERIE", label: "Segreteria e Uffici", icon: "fa-solid fa-building-columns" },
        { id: "MICROSOFT365", label: "Servizi Digitali", icon: "fa-solid fa-laptop-code" }
    ];

    quickButtonsConfig.forEach(btn => {
        const buttonEl = document.createElement("button");
        buttonEl.className = "quick-btn";
        buttonEl.innerHTML = `<i class="${btn.icon}"></i> ${btn.label}`;
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

/**
 * MOTORE LOGICO INTelligente CON REGOLE BLINDATE
 */
function processUserQuery(query) {
    let cleanQuery = query.toLowerCase()
        .replace(/’/g, "'")
        .replace(/[èé]/g, "e")
        .replace(/[àá]/g, "a")
        .replace(/[ìí]/g, "i")
        .replace(/[òó]/g, "o")
        .replace(/[ùú]/g, "u")
        .replace(/[,!?-]/g, " ")
        .replace(/\s+/g, " ")
        .trim();

    if (cleanQuery === "") return;

    // Spezzettiamo la query in un array di parole
    const parole = cleanQuery.split(" ");

    // 1. REGINA DELLE REGOLE: La parola singola (es. "fotocopie")
    if (parole.length === 1) {
        let parolaSingola = parole[0];
        // Esempio di gestione mirata della parola singola senza spammare risposte a caso
        rispondiBot(`🤔 Hai digitato la parola singola <strong>"${parolaSingola}"</strong>.<br>Necessiti del form per la richiesta o desideri conoscere informazioni generali su questo argomento? Per favore, prova a formulare una richiesta più mirata (es. 'modulo fotocopie' o 'orario segreteria').`);
        return;
    }

    // 2. CONTROLLO FRASE NELLE FAQ (Insieme di parole)
    let bestMatch = null;
    let maxScore = 0;

    for (let faq of appData.faqs) {
        for (let kw of faq.keywords) {
            let kwClean = kw.toLowerCase().trim();
            // Se la query contiene la keyword o viceversa
            if (cleanQuery.includes(kwClean)) {
                // Assegniamo un punteggio basato sulla lunghezza della keyword (keyword più specifiche vincono)
                let score = kwClean.length;
                if (score > maxScore) {
                    maxScore = score;
                    bestMatch = faq;
                }
            }
        }
    }

    // Se troviamo un riscontro solido nel database JSON
    if (bestMatch && maxScore > 2) {
        let randomResp = bestMatch.responses[Math.floor(Math.random() * bestMatch.responses.length)];
        rispondiBot(randomResp);
        return;
    }

    // 3. REGOLA DI SBARRAMENTO ONESTA (Niente allucinazioni o rimandi inutili)
    rispondiBot("🤖 Hmm, non ho capito bene la domanda. Ti ricordo che <strong>Arturo non è un'intelligenza artificiale</strong>, ma un assistente virtuale programmato per darti informazioni precise sul nostro istituto.<br><br>A questo punto ti consiglio di usare altri tipi di informazioni, ma <strong>ti prometto che a breve sarò in condizioni di darti anche questo tipo di risposta</strong>!");
}

function rispondiBot(testo) {
    appendMessage(testo, "bot");
}

function quickAction(id) {
    let found = appData.faqs.find(f => f.id === id);
    if (found) {
        let resp = found.responses[0];
        rispondiBot(resp);
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
    // Formattazione sicura dei grassetti e degli a capo
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
    
    function updateDateTime() {
        const now = new Date();
        const options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };
        const dataFormattata = now.toLocaleDateString('it-IT', options);
        const oraFormattata = now.toLocaleTimeString('it-IT');
        
        if (clockEl) {
            clockEl.innerHTML = `<i class="fa-regular fa-clock"></i> ${dataFormattata} - ${oraFormattata}`;
        }
    }
    
    updateDateTime();
    setInterval(updateDateTime, 1000);
}
