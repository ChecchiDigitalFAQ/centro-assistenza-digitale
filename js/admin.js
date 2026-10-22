document.addEventListener("DOMContentLoaded", function () {
    const faqIdInput = document.getElementById("faqId");
    if (!faqIdInput) return;

    // 1. CARICAMENTO DATI DA appConfig (da script.js)
    function getFaqsList() {
        if (typeof appConfig !== "undefined" && Array.isArray(appConfig.faqs)) {
            return appConfig.faqs;
        }
        return [];
    }

    // 2. CONFIGURAZIONE AUTOCOMPLETAMENTO (DATALIST)
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

    // 3. GENERAZIONE TABELLA FAQ NELL'ADMIN
    function renderFaqsTable() {
        const tbody = document.getElementById("faqsTableBody");
        if (!tbody) return;

        tbody.innerHTML = "";
        const faqs = getFaqsList();

        faqs.forEach((faq, index) => {
            const tr = document.createElement("tr");
            const keywordsText = Array.isArray(faq.keywords) ? faq.keywords.join(", ") : faq.keywords;
            const responseText = Array.isArray(faq.responses) ? faq.responses[0] : (faq.response || "");

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

    // 4. FUNZIONE DI MODIFICA DIRETTA
    window.editFaqDirect = function(index) {
        const faqs = getFaqsList();
        const faq = faqs[index];
        if (!faq) return;

        document.getElementById("faqId").value = faq.id;
        document.getElementById("faqIndex").value = index;
        document.getElementById("faqType").value = faq.type || "school";
        document.getElementById("faqKeywords").value = Array.isArray(faq.keywords) ? faq.keywords.join(", ") : faq.keywords;
        document.getElementById("faqResponse").value = Array.isArray(faq.responses) ? faq.responses[0] : (faq.response || "");

        document.getElementById("faqFormTitle").innerText = "✏️ Modifica FAQ / Form (" + faq.id + ")";
        document.getElementById("btnSaveFaq").innerText = "💾 Aggiorna Modifica";
        if (document.getElementById("btnCancelEdit")) {
            document.getElementById("btnCancelEdit").style.display = "inline-block";
        }
    };

    // 5. FUNZIONE DI ELIMINAZIONE DIRETTA
    window.deleteFaqDirect = function(index) {
        if (confirm("Sei sicuro di voler eliminare questa FAQ?")) {
            appConfig.faqs.splice(index, 1);
            updateDatalist();
            renderFaqsTable();
            resetAdminForm();
            generateExportCode();
        }
    };

    // 6. EVENTO AUTOCOMPLETAMENTO SU INPUT "ID UNIVOCO"
    faqIdInput.addEventListener("input", function () {
        const query = this.value.trim().toUpperCase();
        if (!query) {
            resetAdminForm();
            return;
        }

        const faqs = getFaqsList();
        const index = faqs.findIndex(f => f.id.toUpperCase() === query);

        if (index !== -1) {
            // CORRISPONDENZA TROVATA: Compila i campi
            window.editFaqDirect(index);
        } else {
            // NUOVA VOCE
            document.getElementById("faqIndex").value = "-1";
            document.getElementById("faqFormTitle").innerText = "➕ Aggiungi Nuova FAQ / Form";
            document.getElementById("btnSaveFaq").innerText = "💾 Salva Nuova FAQ";
            if (document.getElementById("btnCancelEdit")) {
                document.getElementById("btnCancelEdit").style.display = "none";
            }
        }
    });

    // 7. SALVATAGGIO / AGGIORNAMENTO FAQ DAL FORM ADMIN
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

        if (index >= 0 && index < appConfig.faqs.length) {
            // Aggiorna esistente
            appConfig.faqs[index] = faqData;
        } else {
            // Inserisci nuova
            appConfig.faqs.unshift(faqData);
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

    // 8. FUNZIONE ESPORTAZIONE CODICE PER SCRIPT.JS
    window.generateExportCode = function() {
        const exportArea = document.getElementById("exportCode");
        if (!exportArea) return;
        exportArea.value = "// Database FAQ, Pulsanti Rapidi e Dizionario integrato per Arturo 2.0\nlet appConfig = " + JSON.stringify(appConfig, null, 2) + ";";
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

    // Inizializzazione
    updateDatalist();
    renderFaqsTable();
    generateExportCode();
});
