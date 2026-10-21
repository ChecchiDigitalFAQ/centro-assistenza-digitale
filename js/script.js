// Database FAQ e Pulsanti Rapidi integrati
let appConfig = {
  quickButtons: [
    { id: "AIUTO", label: "❓ Cos'è Arturo?" },
    { id: "CONTATTI", label: "📞 Contatti" },
    { id: "DIRIGENZA", label: "👔 Dirigenza" },
    { id: "SEGRETERIE", label: "🏢 Segreteria e Uffici" },
    { id: "MICROSOFT365", label: "💻 Servizi Digitali (Teams/Argo)" }
  ],
  faqs: [
    {
      "id": "SALUTO",
      "keywords": ["ciao", "salve", "buongiorno", "buonasera", "hey"],
      "responses": ["👋 Ciao! Sono **Arturo**, l'assistente digitale dell'IIS Arturo Checchi. Come posso aiutarti oggi?"]
    },
    {
      "id": "CHI_SEI",
      "keywords": ["chi sei", "come ti chiami", "presentati", "chi e arturo", "tuo nome"],
      "responses": ["👋 Mi chiamo **Arturo** e sono l'assistente digitale dell'IIS Arturo Checchi!"]
    },
    {
      "id": "NASCITA_LUOGO",
      "keywords": ["quando sei nato", "dove sei nato", "dove vivi", "dove ti trovi", "eta"],
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
      "keywords": ["aiuto", "help", "cosa sai fare", "istruzioni", "come funzioni"],
      "responses": ["Posso aiutarti a trovare informazioni generali, contatti, orari di segreteria, moduli per docenti/studenti e supporto per Teams e Argo!"]
    },
    {
      "id": "CONTATTI",
      "keywords": ["contatti", "telefono", "email", "pec", "dove siete", "indirizzo"],
      "responses": ["📍 **Sede Principale:** Viale Gramsci 7 - 50054 Fucecchio (FI)\n☎️ **Tel:** +39 0571 20889\n📧 **Email:** FIIS00300C@istruzione.it\n📨 **PEC:** FIIS00300C@pec.istruzione.it"]
    },
    {
      "id": "DIRIGENZA",
      "keywords": ["dirigenza", "preside", "dirigente", "dirigente scolastico"],
      "responses": ["👔 La Dirigenza riceve su appuntamento. Puoi contattare la segreteria per richiedere un colloquio con la Presidenza."]
    },
    {
      "id": "SEGRETERIE",
      "keywords": ["segreteria", "uffici", "orari segreteria", "didattica", "personale"],
      "responses": ["📋 La segreteria si divide in **Didattica** e **Personale**. Gli sportelli sono aperti al pubblico dal lunedì al venerdì dalle 08:00 alle 10:00."]
    },
    {
      "id": "MICROSOFT365",
      "keywords": ["teams", "microsoft", "argo", "registro", "servizi digitali", "password"],
      "responses": ["💻 Per i servizi digitali (Teams, Outlook, Argo) puoi recuperare la password o richiedere assistenza rivolgendoti all'Animatore Digitale o alla segreteria."]
    }
  ]
};

let inactivityTimer = null;
const RESET_TIME_MS = 5 * 60 * 1000; // 5 minuti

document.addEventListener("DOMContentLoaded", () => {
    renderQuickButtons();
    resetInactivityTimer();
});

// Genera dinamica dei pulsanti rapidi
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
    const message = inputField.value.trim();

    if (message === "") return;

    appendMessage(message, "user");
    inputField.value = "";

    resetInactivityTimer();

    setTimeout(() => {
        processUserQuery(message);
    }, 400);
}

function processUserQuery(query) {
    const cleanQuery = query.toLowerCase().trim();

    // 1. Controllo domande su Data e Ora
    if (cleanQuery.includes("ora") || cleanQuery.includes("ore") || cleanQuery.includes("che ora")) {
        const now = new Date();
        const timeStr = now.toLocaleTimeString('it-IT', { hour: '2-digit', minute: '2-digit' });
        appendMessage(`⌚ Attualmente sono le ore **${timeStr}**.`, "bot");
        return;
    }

    if (cleanQuery.includes("giorno") || cleanQuery.includes("data") || cleanQuery.includes("oggi")) {
        const now = new Date();
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        const dateStr = now.toLocaleDateString('it-IT', options);
        appendMessage(`📅 Oggi è **${dateStr}**.`, "bot");
        return;
    }

    // 2. Ricerca nelle FAQ
    let bestMatch = null;
    let highestScore = 0;

    appConfig.faqs.forEach(item => {
        item.keywords.forEach(keyword => {
            const cleanKeyword = keyword.toLowerCase().trim();

            if (cleanQuery.includes(cleanKeyword) || cleanKeyword.includes(cleanQuery)) {
                highestScore = 1.0;
                bestMatch = item;
            } else {
                const score = similarity(cleanQuery, cleanKeyword);
                if (score > highestScore) {
                    highestScore = score;
                    bestMatch = item;
                }
            }
        });
    });

    if (bestMatch && highestScore >= 0.30) {
        const responseText = bestMatch.responses[Math.floor(Math.random() * bestMatch.responses.length)];
        appendMessage(responseText, "bot");
    } else {
        appendMessage("🤖 Ci ho provato, ma al momento questa informazione non è presente nel mio archivio. Ho preso nota della tua richiesta e cercheremo di aggiungerla presto!", "bot");
    }
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
    const chatBox = document.getElementById("chatBox");
    
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
    const chatBox = document.getElementById("chatBox");
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
