/**
 * MOTORE CORE DI ARTURO - ASSISTENTE VIRTUALE UFFICIALE
 * IIS "Arturo Checchi" (Fucecchio)
 * Sviluppato da Luca Vorraro (Assistente Tecnico Informatico)
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
    
    const quickButtonsConfig = [
        { id: "AIUTO", label: "❓ Cos'è Arturo?", icon: "fa-solid fa-circle-question" },
        { id: "CONTATTI", label: "📞 Contatti", icon: "fa-solid fa-address-book" },
        { id: "DIRIGENZA", label: "👔 Dirigenza", icon: "fa-solid fa-user-tie" },
        { id: "SEGRETERIE", label: "🏢 Segreteria e Uffici", icon: "fa-solid fa-building-columns" },
        { id: "MICROSOFT365", label: "💻 Servizi Digitali (Teams/Argo)", icon: "fa-solid fa-laptop-code" }
    ];

    quickButtonsConfig.forEach(btn => {
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

/**
 * MOTORE LOGICO INTEGRATO DI ARTURO
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

    // 1. Chiusura / Uscita
    const paroleChiusura = ["niente", "nulla", "grazie", "no grazie", "no va bene cosi", "va bene cosi", "ok"];
    if (paroleChiusura.includes(cleanQuery)) {
        rispondiBot("👋 Spero di esserti stato utile. Quando vuoi sono sempre pronto a fornirti nuove informazioni sui servizi dell'IIS \"Arturo Checchi\"!");
        return;
    }

    // 2. Controllo Orario ("che ora è", "ora", "orario")
    if (cleanQuery.includes("che ora e") || cleanQuery === "ora" || cleanQuery.includes("orario attuale")) {
        const now = new Date();
        rispondiBot(`⏰ Al momento sono le ore **${now.toLocaleTimeString('it-IT')}** del giorno ${now.toLocaleDateString('it-IT', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}.`);
        return;
    }

    // 3. Controllo Esatto nelle FAQ del file JSON (Saluti, Chi sei, Chi ti ha creato, Barzellette, Contatti, ecc.)
    for (let faq of appData.faqs) {
        for (let kw of faq.keywords) {
            let kwClean = kw.toLowerCase().trim();
            if (cleanQuery.includes(kwClean)) {
                let resp = faq.responses[Math.floor(Math.random() * faq.responses.length)];
                rispondiBot(resp);
                return;
            }
        }
    }

    // 4. Controllo Calcoli Matematici / Espressioni al volo (es. 15 * 4, radice, ecc.)
    try {
        // Sostituisci parole chiave matematiche se necessario o eval sicuro per espressioni numeriche
        if (/^[0-9\+\-\*\/\.\(\)\s]+$/.test(query)) {
            let risultato = eval(query);
            rispondiBot(`🔢 Il risultato del calcolo è: **${risultato}**`);
            return;
        }
    } catch (e) {
        // Se non è un'espressione valida, prosegui
    }

    // 5. Spezzettiamo la query in parole per valutare la regola della parola singola
    const parole = cleanQuery.split(" ");

    // Se l'utente digita una sola parola ma non ha trovato riscontro nel JSON
    if (parole.length === 1) {
        rispondiBot(`🤔 Hai digitato la parola singola <strong>"${query}"</strong>.<br>Non riconosco questo termine. Per favore, prova a formulare una richiesta più mirata (es. 'modulo fotocopie' o 'orario segreteria').`);
        return;
    }

    // 6. REGOLA DI SBARRAMENTO ONESTA (Se la frase ha più parole ma non c'è riscontro)
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
