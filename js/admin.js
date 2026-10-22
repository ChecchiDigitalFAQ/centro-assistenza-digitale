document.addEventListener("DOMContentLoaded", function () {
    const faqIdInput = document.getElementById("faqId");
    if (!faqIdInput) return;

    // 1. RECUPERA L'ELENCO FAQ DA appConfig.faqs
    function getFaqsList() {
        if (typeof appConfig !== "undefined" && Array.isArray(appConfig.faqs)) {
            return appConfig.faqs;
        }
        return [];
    }

    // 2. CREA IL DATALIST PER GLI ID SUGGERITI
    let datalist = document.getElementById("faqIdSuggestions");
    if (!datalist) {
        datalist = document.createElement("datalist");
        datalist.id = "faqIdSuggestions";
        document.body.appendChild(datalist);
    }
    faqIdInput.setAttribute("list", "faqIdSuggestions");

    function updateDatalist() {
        datalist.innerHTML = "";
        const faqs = getFaqsList();
        faqs.forEach(faq => {
            let option = document.createElement("option");
            option.value = faq.id;
            option.label = Array.isArray(faq.keywords) ? faq.keywords.join(", ") : "";
            datalist.appendChild(option);
        });
    }

    // 3. MOSTRAMO LE FAQ NELLA TABELLA DELL'ADMIN
    function renderFaqsTable() {
        const tbody = document.getElementById("faqsTableBody");
        if (!tbody) return;

        tbody.innerHTML = "";
        const faqs = getFaqsList();

        faqs.forEach((faq, index) => {
            const tr = document.createElement("tr");
            const keywordsText = Array.isArray(faq.keywords) ? faq.keywords.join(", ") : (faq.keywords || "");
            
            // Gestisce sia il formato risposte array che stringa
            let responseText = "";
            if (Array.isArray(faq.responses) && faq.responses.length > 0) {
                responseText = faq.responses[0];
            } else if (faq.response) {
                responseText = faq.response;
            }

            tr.innerHTML = `
                <td><strong>${faq.id}</strong></td>
                <td>${faq.type || 'school'}</td>
                <td>${keywordsText}</td>
                <td>${responseText}</td>
                <td>
                    <button class="btn-edit" onclick="editFaqDirect(${index})">✏️ Modifica</button>
                    <button class="btn-danger" onclick="deleteFaqDirect(${index})">🗑️ Elimina</button>
                </td>
            `;
            tbody.appendChild(tr);
        });
    }

    // 4. FUNZIONE DI MODIFICA DA TABELLA O AUTOCOMPLETAMENTO
    window.editFaqDirect = function(index) {
        const faqs = getFaqsList();
        const faq = faqs[index];
        if (!faq) return;

        document.getElementById("faqId").value = faq.id;
        document.getElementById("faqIndex").value = index;
        document.getElementById("faqType").value = faq.type || "school";
        document.getElementById("faqKeywords").value = Array.isArray(faq.keywords) ? faq.keywords.join(", ") : (faq.keywords || "");
        
        let responseText = Array.isArray(faq.responses) ? faq.responses[0] : (faq.response || "");
        document.getElementById("faqResponse").value = responseText;

        document.getElementById("faqFormTitle").innerText = "✏️ Modifica FAQ / Form (" + faq.id + ")";
        document.getElementById("btnSaveFaq").innerText = "💾 Aggiorna Modifica";
        if (document.getElementById("btnCancelEdit")) {
            document.getElementById("btnCancelEdit").style.display = "inline-block";
        }
    };

    // 5. FUNZIONE DI ELIMINAZIONE
    window.deleteFaqDirect = function(index) {
        if (confirm("Sei sicuro di voler eliminare questa FAQ?")) {
            if (typeof appConfig !== "undefined" && Array.isArray(appConfig.faqs)) {
                appConfig.faqs.splice(index, 1);
            }
            updateDatalist();
            renderFaqsTable();
            resetAdminForm();
            generateExportCode();
        }
    };

    // 6. RICERCA E AUTOCOMPLETAMENTO IN TEMPO REALE DURANTE LA DIGITAZIONE
    faqIdInput.addEventListener("input", function () {
        const query = this.value.trim().toUpperCase();
        if (!query) {
            resetAdminForm();
            return;
        }

        const faqs = getFaqsList();
        const index = faqs.findIndex(f => f.id.toUpperCase() === query);

        if (index !== -1) {
            // Se esiste l'ID digitato: compila subito tutti i campi!
            window.editFaqDirect(index);
        } else {
            // Se non esiste: prepara il form per la creazione da zero
            document.getElementById("faqIndex").value = "-1";
            document.getElementById("faqFormTitle").innerText = "➕ Aggiungi Nuova FAQ / Form";
            document.getElementById("btnSaveFaq").innerText = "💾 Salva Nuova FAQ";
            if (document.getElementById("btnCancelEdit")) {
                document.getElementById("btnCancelEdit").style.display = "none";
            }
        }
    });

    // 7. SALVATAGGIO FAQ/FORM
    window.saveFAQ = function(event) {
        if (event) event.preventDefault();

        const id = document.getElementById("faqId").value.trim().toUpperCase();
        const type = document.getElementById("faqType").value;
        const keywords = document.getElementById("faqKeywords").value.split(",").map(k => k.trim()).filter(k => k !== "");
        const responseText = document.getElementById("faqResponse").value.trim();
        const index = parseInt(document.getElementById("faqIndex").value, 10);

        if (!id || keywords.length === 0 || !responseText) {
            alert("Compila tutti i campi obbligatori (ID, Parole chiave, Risposta).");
            return;
        }

        const faqData = {
            id: id,
            type: type,
            keywords: keywords,
            responses: [responseText]
        };

        if (typeof appConfig !== "undefined" && Array.isArray(appConfig.faqs)) {
            if (index >= 0 && index < appConfig.faqs.length) {
                appConfig.faqs[index] = faqData;
            } else {
                appConfig.faqs.unshift(faqData);
            }
        }

        updateDatalist();
        renderFaqsTable();
        resetAdminForm();
        generateExportCode();
        alert("FAQ salvata con successo!");
    };

    function resetAdminForm() {
        document.getElementById("faqId").value = "";
        document.getElementById("faqIndex").value = "-1";
        document.getElementById("faqKeywords").value = "";
        document.getElementById("faqResponse").value = "";
        document.getElementById("faqFormTitle").innerText = "➕ Aggiungi / Modifica FAQ";
        document.getElementById("btnSaveFaq").innerText = "💾 Salva FAQ";
        if (document.getElementById("btnCancelEdit")) {
            document.getElementById("btnCancelEdit").style.display = "none";
        }
    }

    window.cancelEditFAQ = resetAdminForm;

    // 8. ESPORTAZIONE E COPIA CODICE PER SCRIPT.JS
    window.generateExportCode = function() {
        const exportArea = document.getElementById("exportCode");
        if (!exportArea) return;
        if (typeof appConfig !== "undefined") {
            exportArea.value = "// Database FAQ, Pulsanti Rapidi e Dizionario integrato per Arturo 2.0\nlet appConfig = " + JSON.stringify(appConfig, null, 2) + ";";
        }
    };

    window.copyExportCode = function() {
        const exportArea = document.getElementById("exportCode");
        if (!exportArea || !exportArea.value) {
            generateExportCode();
        }
        exportArea.select();
        document.execCommand("copy");
        alert("Codice aggiornato copiato negli appunti! Ora incollalo in js/script.js su GitHub.");
    };

    // INIZIALIZZAZIONE
    updateDatalist();
    renderFaqsTable();
    generateExportCode();
});
