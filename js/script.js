// Database FAQ, Pulsanti Rapidi, Dizionario e Funzioni Avanzate per Arturo 2.0
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
      "id": "DATA_ORA",
      "label": "📅 Data e Ora"
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
    "modulistica": "La sezione del sito contenente i moduli per richieste amministrative, permessi e reset credenziali.",
    "pdef": "Piano Didattico Educativo e Formativo.",
    "pdp": "Piano Didattico Personalizzato per studenti con BES/DSA.",
    "pei": "Piano Educativo Individualizzato per studenti con disabilità.",
    "matematica": "Arturo include un calcolatore integrato! Puoi scrivermi direttamente un'espressione matematica (es. 'quanto fa 12 * 8' o '25 + 15') e la calcolerò per te."
  },
  "faqs": [
    {
      "id": "AIUTO",
      "type": "school",
      "keywords": ["chi sei", "cosa fai", "aiuto", "arturo", "chi ti ha creato", "creatore"],
      "responses": [
        "Ciao! Sono Arturo 2.0, l'assistente digitale dell'IIS Arturo Checchi. Sono stato sviluppato per fornirti supporto rapido su modulistica, orari di segreteria, credenziali, data/ora, calcoli matematici e servizi digitali dell'istituto."
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
      "id": "DATA_ORA",
      "type": "school",
      "keywords": ["data", "ora", "che giorno è", "che ore sono", "orologio", "calendario oggi"],
      "responses": [
        "DATE_TIME_DYNAMIC"
      ]
    },
    {
      "id": "MICROSOFT365",
      "type": "school",
      "keywords": ["microsoft 365", "teams", "account scuola", "email scuola", "formato email", "email studenti", "email docenti", "office"],
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
      "keywords": ["segreteria", "orari segreteria", "uffici", "orario apertura", "orario", "orario segreteria", "didattica", "personale"],
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
      "id": "MODULISTICA_DOCENTI",
      "type": "form",
      "keywords": ["moduli docenti", "modulistica docenti", "ferie", "permessi docenti", "cambio orario"],
      "responses": [
        "La modulistica riservata ai docenti (richiesta ferie, permessi brevi, sostituzioni e progetti) è disponibile nell'Area Riservata del sito o richiedibile via email alla Segreteria del Personale."
      ]
    },
    {
      "id": "MODULISTICA_STUDENTI",
      "type": "form",
      "keywords": ["moduli studenti", "modulistica studenti", "uscita anticipata", "entrata in ritardo", "esonero scienze motorie", "deleghe"],
      "responses": [
        "I moduli per uscite anticipate, ingressi in ritardo, deleghe per il ritiro e richiesta certificati di frequenza si trovano nella sezione Modulistica Studenti e Famiglie del sito web."
      ]
    },
    {
      "id": "ORIENTAMENTO",
      "type": "school",
      "keywords": ["orientamento", "open day", "iscrizioni", "corsi", "indirizzi di studio"],
      "responses": [
        "Per informazioni riguardanti l'Orientamento in Ingresso, le date degli Open Day e l'offerta formativa dei vari indirizzi, consulta la sezione dedicata all'Orientamento sul sito dell'istituto."
      ]
    },
    {
      "id": "CALENDARIO_SCOLASTICO",
      "type": "school",
      "keywords": ["calendario", "feste", "vacanze", "inizio scuola", "fine scuola", "ponti"],
      "responses": [
        "Il calendario scolastico approvato con tutte le festività, sospensioni delle attività e ponti è liberamente consultabile sul sito dell'istituto nella sezione Circolari e Calendario."
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
