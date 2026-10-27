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

    if (cleanQuery === "") return;

    // 1. Chiusura / Uscita (incluso "ciao" o saluti finali di chiusura)
    const paroleChiusura = ["niente", "nulla", "grazie", "no grazie", "no va bene cosi", "va bene cosi", "ok", "addio"];
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

    // 3. Gestione interattiva form (se il bot aveva fatto una domanda e l'utente risponde)
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

    // Spezzettiamo la query in parole per valutare la regola della parola singola
    const parole = cleanQuery.split(" ");

    // 4. REGOLA DELLA PAROLA SINGOLA ISOLATA
    if (parole.length === 1) {
        if (["ciao", "salve", "buongiorno", "buonasera"].includes(cleanQuery)) {
            let faqSaluto = appConfig.faqs.find(f => f.id === "SALUTO");
            if (faqSaluto) {
                rispondiBot(faqSaluto.responses[0]);
                return;
            }
        }
        if (appConfig.dictionary[cleanQuery]) {
            rispondiBot(appConfig.dictionary[cleanQuery]);
            return;
        }
        rispondiBot(`🤔 Hai digitato la parola singola <strong>"${query}"</strong>.<br>Necessiti del form per la richiesta o desideri conoscere informazioni generali su questo argomento? Per favore, prova a formulare una richiesta più mirata (es. 'modulo fotocopie' o 'orario segreteria').`);
        return;
    }

    // 5. Gestione RADICI QUADRATE
    if (cleanQuery.includes("radice quadrata") || cleanQuery.includes("radice")) {
        let num = parseFloat(cleanQuery.replace(/[^0-9.]/g, ""));
        if (!isNaN(num)) {
            let risultato = Math.sqrt(num);
            rispondiBot(`📐 La radice quadrata di **${num}** è **${risultato.toFixed(2)}**!`);
            return;
        }
    }

    // 6. Calcolatrice e conversioni base
    if (cleanQuery.includes("grammi") && cleanQuery.includes("kili")) {
        let num = parseFloat(cleanQuery.replace(/[^0-9.]/g, ""));
        if (!isNaN(num)) {
            rispondiBot(`${num} chili equivalgono a **${num * 1000} grammi**!`);
            return;
        }
    }
    if (cleanQuery.includes("quintale")) {
        rispondiBot("Un quintale equivale a **100 chili** (e quindi a **100.000 grammi**)!");
        return;
    }

    // 7. Ricerca Dizionario (se l'utente chiede "cosa significa", "cos'è", ecc.)
    for (const [term, def] of Object.entries(appConfig.dictionary)) {
        if (cleanQuery.includes(term)) {
            rispondiBot(def);
            return;
        }
    }

    // 8. Se l'utente chiede esplicitamente un FORM/MODULO, cerchiamo tra i form, altrimenti diamo priorità alle FAQ generali
    let matchedFaq = null;
    let cercaForm = cleanQuery.includes("form") || cleanQuery.includes("modulo") || cleanQuery.includes("richiesta") || cleanQuery.includes("compilare") || cleanQuery.includes("link");

    for (let faq of appConfig.faqs) {
        // Se la richiesta è esplicitamente per un form, cerchiamo le FAQ di tipo form
        if (cercaForm && faq.id.startsWith("FORM_")) {
            for (let kw of faq.keywords) {
                if (cleanQuery.includes(kw.toLowerCase().trim())) {
                    matchedFaq = faq;
                    break;
                }
            }
        } else if (!cercaForm && !faq.id.startsWith("FORM_")) {
            // Altrimenti cerchiamo prima tra le FAQ generali e informative
            for (let kw of faq.keywords) {
                if (cleanQuery.includes(kw.toLowerCase().trim())) {
                    matchedFaq = faq;
                    break;
                }
            }
        }
        if (matchedFaq) break;
    }

    // Fallback generale se non ha trovato nulla con la prima passata
    if (!matchedFaq) {
        for (let faq of appConfig.faqs) {
            for (let kw of faq.keywords) {
                if (cleanQuery.includes(kw.toLowerCase().trim())) {
                    matchedFaq = faq;
                    break;
                }
            }
            if (matchedFaq) break;
        }
    }

    if (matchedFaq) {
        let resp = matchedFaq.responses[Math.floor(Math.random() * matchedFaq.responses.length)];
        rispondiBot(resp);
        return;
    }

    // 9. REGOLA DI SBARRAMENTO ONESTA
    rispondiBot("🤖 Hmm, non ho capito bene la domanda. Ti ricordo che <strong>Arturo non è un'intelligenza artificiale</strong>, ma un assistente virtuale programmato per darti informazioni precise sul nostro istituto.<br><br>A questo punto ti consiglio di usare altri tipi di informazioni, ma <strong>ti prometto che a breve sarò in condizioni di darti anche questo tipo di risposta</strong>!");
}
