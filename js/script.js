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
      "keywords": ["reset password", "password", "credenziali", "recupero password", "form", "modulo", "reset", "m365"],
      "responses": [
        "Per richiedere il reset della password del tuo account Microsoft 365, compila l'apposito modulo indicando: Tipologia Utente (Docente/Studente), Nome, Cognome, Indirizzo Email Privato e Motivazione. Una volta approvata la richiesta, la nuova password verrà generata automaticamente dal sistema e inviata alla tua email privata."
      ]
    },
    {
      "id": "MICROSOFT365",
      "type": "school",
      "keywords": ["microsoft 365", "teams", "account scuola", "email scuola", "formato email"],
      "responses": [
        "Per gli studenti l'email istituzionale è nel formato <code>nome.cognome@istitutochecchi.edu.it</code>, mentre per i docenti è <code>nomecognome@istitutochecchi.edu.it</code>. Se hai perso la password usa il pulsante 'Reset Password M365'."
      ]
    },
    {
      "id": "CONTATTI",
      "type": "school",
      "keywords": ["contatti", "email", "telefono", "assistenza", "supporto", "tecnico", "luca vorraro"],
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
      "keywords": ["segreteria", "orari segreteria", "uffici", "orario apertura", "orario"],
      "responses": [
        "Gli uffici di segreteria dell'IIS Arturo Checchi sono aperti al pubblico secondo gli orari pubblicati sul sito istituzionale nella sezione Contatti e Uffici."
      ]
    },
    {
      "id": "SITO_ISTITUZIONALE",
      "type": "school",
      "keywords": ["sito", "sito web", "sito scuola", "link"],
      "responses": [
        "Puoi accedere al sito web ufficiale dell'istituto tramite l'indirizzo: <strong>https://www.istitutochecchi.edu.it/</strong>"
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

    container.
