// --- VALIDAZIONE PREVENTIVA DEGLI ERRORI ---
function validateFaqData(id, keywords, response) {
    let errors = [];

    // 1. Controllo ID vuoto o con spazi/caratteri non validi
    if (!id) {
        errors.push("• L'ID della FAQ non può essere vuoto.");
    } else if (/\s/.test(id)) {
        errors.push("• L'ID non deve contenere spazi vuoti (usa il carattere underscore '_' al posto degli spazi).");
    } else if (!/^[A-Z0-9_]+$/.test(id)) {
        errors.push("• L'ID deve contenere solo lettere maiuscole, numeri e underscore (es. FORM_NOME_MODULO).");
    }

    // 2. Controllo Parole Chiave
    if (!keywords || keywords.length === 0 || (keywords.length === 1 && keywords[0] === "")) {
        errors.push("• Inserisci almeno una parola chiave valida.");
    }

    // 3. Controllo Risposta
    if (!response || response.trim() === "") {
        errors.push("• Il testo della risposta non può essere vuoto.");
    }

    return errors;
}

// Sostituisci la tua funzione handleFaqSubmit esistente con questa:
function handleFaqSubmit(e) {
    e.preventDefault();
    const index = parseInt(document.getElementById("faqEditIndex").value, 10);
    const id = document.getElementById("faqId").value.trim().toUpperCase();
    const keywordsRaw = document.getElementById("faqKeywords").value;
    const keywords = keywordsRaw.split(",").map(k => k.trim()).filter(k => k);
    const response = document.getElementById("faqResponse").value.trim();
    const catSelect = document.getElementById("faqCategory");
    const category = catSelect ? catSelect.value : (id.startsWith("FORM_") ? "form" : "scuola");

    // ESEGUI LA VALIDAZIONE PREVENTIVA
    const validationErrors = validateFaqData(id, keywords, response);
    if (validationErrors.length > 0) {
        alert("❌ ATTENZIONE - Errore di validazione:\n\n" + validationErrors.join("\n") + "\n\nIl codice NON è stato salvato per evitare corruzioni.");
        return;
    }

    const newFaq = { 
        id, 
        type: category, 
        keywords, 
        responses: [response] 
    };

    if (index >= 0) {
        appConfig.faqs[index] = newFaq;
        alert("✅ FAQ aggiornata e validata con successo!");
    } else {
        const checkDuplicate = appConfig.faqs.findIndex(f => f.id.toUpperCase() === id);
        if (checkDuplicate !== -1) {
            appConfig.faqs[checkDuplicate] = newFaq;
            alert("✅ FAQ esistente sovrascritta e validata con successo!");
        } else {
            appConfig.faqs.unshift(newFaq);
            alert("✅ Nuova FAQ aggiunta e validata con successo!");
        }
    }

    renderFaqTable();
    resetFaqForm();
}

// Sostituisci la tua funzione generateExportData esistente con questa:
function generateExportData() {
    const exportArea = document.getElementById("exportArea");
    if (!exportArea || typeof appConfig === "undefined") return;

    // Controllo di integrità globale prima dell'esportazione
    let globalErrors = [];
    if (!appConfig.faqs || !Array.isArray(appConfig.faqs)) {
        globalErrors.push("• L'array delle FAQ è corrotto o mancante.");
    } else {
        appConfig.faqs.forEach((faq, idx) => {
            if (!faq.id || !faq.responses || faq.responses.length === 0) {
                globalErrors.push(`• FAQ alla posizione #${idx + 1} ha un ID o una risposta mancante.`);
            }
        });
    }

    if (globalErrors.length > 0) {
        exportArea.value = "❌ ERRORE DI INTEGRITÀ RILEVATO NEL DATABASE:\n\n" + globalErrors.join("\n") + "\n\nCorreggi gli errori prima di procedere all'esportazione.";
        return;
    }

    let cleanConfig = {
        quickButtons: appConfig.quickButtons || [],
        dictionary: appConfig.dictionary || {},
        faqs: (appConfig.faqs || []).map(faq => ({
            id: faq.id,
            type: faq.type || (faq.id.startsWith("FORM_") ? "form" : "scuola"),
            keywords: Array.isArray(faq.keywords) ? faq.keywords : faq.keywords.split(",").map(k => k.trim()),
            responses: Array.isArray(faq.responses) ? faq.responses : [faq.response || ""]
        }))
    };

    try {
        // Test di serializzazione JSON per verificare che non ci siano errori di sintassi occulti
        const jsonString = JSON.stringify(cleanConfig, null, 2);
        exportArea.value = `let appConfig = ${jsonString};`;
    } catch (err) {
        exportArea.value = `❌ Errore critico durante la generazione del JSON: ${err.message}`;
    }
}
