// Database FAQ, Pulsanti Rapidi e Dizionario integrato per Arturo 2.0
let appConfig = {
  "quickButtons": [
    {
      "id": "AIUTO",
      "label": "❓ Cos'è Arturo?"
    },
    {
      "id": "CONTATTI",
      "label": "📞 Contatti"
    },
    {
      "id": "DIRIGENZA",
      "label": "🏛️ Dirigenza"
    },
    {
      "id": "SEGRETERIE",
      "label": "🏢 Segreteria e Uffici"
    },
    {
      "id": "MICROSOFT365",
      "label": "💻 Servizi Digitali (Teams/Argo)"
    }
  ],
  "dictionary": {
    "registro": "Il registro elettronico Spaggiari/Argo utilizzato per la gestione di voti, assenze e argomenti di lezione.",
    "spaggiari": "La piattaforma per i servizi scolastici e didattici integrati.",
    "argo": "Il portale dei servizi per la gestione del registro elettronico e del personale.",
    "noipa": "Il sistema informativo del MEF per il trattamento economico e le cedole stipendio del personale della scuola.",
    "teams": "La piattaforma Microsoft 365 usata per le classi virtuali, riunioni e comunicazione didattica."
  },
  "faqs": [
    {
      "id": "AIUTO",
      "type": "school",
      "keywords": ["chi sei", "cosa fai", "aiuto", "arturo"],
      "responses": [
        "Ciao! Sono Arturo 2.0, l'assistente digitale dell'IIS Arturo Checchi. Posso aiutarti a trovare informazioni su modulistica, orari di segreteria e supporto sui servizi digitali."
      ]
    },
    {
      "id": "CONTATTI",
      "type": "school",
      "keywords": ["contatti", "email", "telefono", "assistenza", "supporto"],
      "responses": [
        "Per assistenza tecnica puoi contattare l'Assistente Tecnico Informatica Luca Vorraro inviando una mail a: lucavorraro@istitutochecchi.edu.it"
      ]
    },
    {
      "id": "DIRIGENZA",
      "type": "school",
      "keywords": ["dirigente", "preside", "dirigenza", "ricevimento dirigente"],
      "responses": [
        "La Dirigenza riceve previo appuntamento da richiedere via e-mail all'indirizzo istituzionale dell'istituto o contattando la segreteria."
      ]
    },
    {
      "id": "SEGRETERIE",
      "type": "school",
      "keywords": ["segreteria", "orari segreteria", "uffici", "orario apertura"],
      "responses": [
        "Gli uffici di segreteria dell'IIS Arturo Checchi sono aperti al pubblico secondo gli orari pubblicati sul sito istituzionale nella sezione Contatti e Uffici."
      ]
    },
    {
      "id": "MICROSOFT365",
      "type": "school",
      "keywords": ["microsoft 365", "teams", "account scuola", "credenziali", "email scuola"],
      "responses": [
        "Per gli studenti l'email istituzionale è nel formato nome.cognome@istitutochecchi.edu.it, mentre per i docenti è nomecognome@istitutochecchi.edu.it. Per il reset password utilizza l'apposito modulo nella sezione servizi digitali."
      ]
    }
  ]
};

// LOGICA FUNZIONALE DELLA CHAT DI ARTURO 2.0
document.addEventListener("DOMContentLoaded", function () {
    renderQuickButtons();
});

function renderQuickButtons() {
    const container = document.getElementById("quickButtonsContainer");
    if (!container || !appConfig.quickButtons) return;

    container.innerHTML = "";
    appConfig.quickButtons.forEach(btn => {
        const buttonEl = document.createElement("button");
        buttonEl.className = "btn-quick";
        buttonEl.innerText = btn.label;
        buttonEl.onclick = function () {
            sendQuickMessage(btn.id);
        };
        container.appendChild(buttonEl);
    });
}

function handleKeyPress(event) {
    if (event.key === "Enter") {
        sendMessage();
    }
}

function sendQuickMessage(faqId) {
    const faq = appConfig.faqs.find(f => f.id === faqId);
    if (faq) {
        const userText = faq.keywords[0] || faq.id;
        appendMessage("user", userText);
        const botResponse = faq.responses[0] || "Nessuna risposta disponibile.";
        setTimeout(() => {
            appendMessage("bot", botResponse);
        }, 300);
    }
}

function sendMessage() {
    const inputEl = document.getElementById("userInput");
    if (!inputEl) return;

    const text = inputEl.value.trim();
    if (!text) return;

    appendMessage("user", text);
    inputEl.value = "";

    const response = findBestResponse(text);
    setTimeout(() => {
        appendMessage("bot", response);
    }, 300);
}

function findBestResponse(query) {
    const cleanQuery = query.toLowerCase();

    for (let faq of appConfig.faqs) {
        if (Array.isArray(faq.keywords)) {
            for (let kw of faq.keywords) {
                if (cleanQuery.includes(kw.toLowerCase())) {
                    return Array.isArray(faq.responses) ? faq.responses[0] : faq.response;
                }
            }
        }
    }

    if (appConfig.dictionary) {
        for (let [term, def] of Object.entries(appConfig.dictionary)) {
            if (cleanQuery.includes(term.toLowerCase())) {
                return `📖 <strong>${term.toUpperCase()}</strong>: ${def}`;
            }
        }
    }

    return "Spiacente, non ho trovato una risposta specifica per la tua richiesta. Prova a riformulare la domanda o utilizza i pulsanti rapidi.";
}

function appendMessage(sender, text) {
    const chatContainer = document.getElementById("chatMessages");
    if (!chatContainer) return;

    const msgDiv = document.createElement("div");
    msgDiv.className = sender === "user" ? "message user-message" : "message bot-message";
    msgDiv.innerHTML = text;

    chatContainer.appendChild(msgDiv);
    chatContainer.scrollTop = chatContainer.scrollHeight;
}

function resetChat() {
    const chatContainer = document.getElementById("chatMessages");
    if (chatContainer) {
        chatContainer.innerHTML = `
            <div class="message bot-message">
                <strong>Ciao! Sono Arturo.</strong><br><br>
                Sono l'assistente digitale dell'IIS Arturo Checchi. Posso aiutarti a trovare informazioni sull'istituto, modulistica, orari di segreteria e supporto sui servizi digitali.<br><br>
                <em>Come posso aiutarti oggi?</em>
            </div>
        `;
    }
}
