// Database FAQ, Pulsanti Rapidi e Dizionario integrato per Arturo 2.0
let appConfig = {
  "quickButtons": [
    {
      "id": "AIUTO",
      "label": "❓ Cos'è Arturo?"
    },
    {
      "id": "FORM_RESET_PWD",
      "label": "🔑 Reset Password M365"
    },
    {
      "id": "CONTATTI",
      "label": "📞 Contatti Assistenza"
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
    "teams": "La piattaforma Microsoft 365 usata per le classi virtuali, riunioni e comunicazione didattica.",
    "modulistica": "La sezione del sito contenente i moduli per richieste amministrative, permessi e reset credenziali."
  },
  "faqs": [
    {
      "id": "AIUTO",
      "type": "school",
      "keywords": ["chi sei", "cosa fai", "aiuto", "arturo", "chi ti ha creato", "creatore"],
      "responses": [
        "Ciao! Sono Arturo 2.0, l'assistente digitale dell'IIS Arturo Checchi. Sono stato sviluppato per fornirti supporto rapido su modulistica, orari di segreteria, credenziali e servizi digitali dell'istituto."
      ]
    },
    {
      "id": "FORM_RESET_PWD",
      "type": "form",
      "keywords": ["reset password", "password", "credenziali", "recupero password", "form", "modulo", "reset", "m365", "resetta password"],
      "responses": [
        "Per richiedere il reset della password del tuo account Microsoft 365, compila l'apposito modulo indicando: Tipologia Utente (Docente/Studente), Nome, Cognome, Indirizzo Email Privato e Motivazioni. Una volta approvata la richiesta, la nuova password verrà generata automaticamente dal sistema e inviata alla tua email privata."
      ]
    },
    {
      "id": "MICROSOFT365",
      "type": "school",
      "keywords": ["microsoft 365", "teams", "account scuola", "email scuola", "formato email", "email studenti", "email docenti"],
      "responses": [
        "Per gli studenti l'email istituzionale è nel formato <code>nome.cognome@istitutochecchi.edu.it</code>, mentre per i docenti è <code>nomecognome@istitutochecchi.edu.it</code>. Se hai perso la password utilizza l'apposito modulo di reset."
      ]
    },
    {
      "id": "CONTATTI",
      "type": "school",
      "keywords": ["contatti", "email", "telefono", "assistenza", "supporto", "tecnico", "luca vorraro", "assistente tecnico"],
      "responses": [
        "Per assistenza tecnica puoi contattare l'Assistente Tecnico di Informatica Luca Vorraro inviando una mail a: <strong>lucavorraro@istitutochecchi.edu.it</strong>"
      ]
    },
    {
      "id": "DIRIGENZA",
      "type": "school",
      "keywords": ["dirigente", "preside", "dirigenza", "ricevimento dirigente", "appuntamento"],
      "responses": [
        "La Dirigenza riceve previo appuntamento da richiedere via e-mail all'indirizzo istituzionale dell'istituto o contattando la segreteria."
      ]
    },
    {
      "id": "SEGRETERIE",
      "type": "school",
      "keywords": ["segreteria", "orari segreteria", "uffici", "orario apertura", "orario", "orario segreteria"],
      "responses": [
        "Gli uffici di segreteria dell'IIS Arturo Checchi sono aperti al pubblico secondo gli orari pubblicati sul sito istituzionale nella sezione Contatti e Uffici."
      ]
    },
    {
      "id": "SITO_ISTITUZIONALE",
      "type": "school",
      "keywords": ["sito", "sito web", "sito scuola", "link", "portale", "istitutochecchi"],
      "responses": [
        "Puoi accedere al sito web ufficiale dell'istituto tramite l'indirizzo: <strong>https://www.istitutochecchi.edu.it/</strong>"
      ]
    },
    {
      "id": "MODERATION_OFFENSIVE",
      "type": "moderation",
      "keywords": ["parolaccia", "offesa", "insulto"],
      "responses": [
        "Si prega di mantenere un linguaggio consono ed educato all'interno del servizio di assistenza dell'istituto."
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
