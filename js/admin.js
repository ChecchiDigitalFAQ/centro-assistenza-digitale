/**
 * Pannello di Amministrazione - Arturo | IIS "Arturo Checchi"
 * Sviluppato da Luca Vorraro (Assistente Tecnico Informatico)
 */

const ADMIN_PASSWORD = "arturo2026";

function verifyAdminPassword() {
    const inputVal = document.getElementById("adminPasswordInput").value;
    if (inputVal === ADMIN_PASSWORD) {
        document.getElementById("loginOverlay").style.display = "none";
        document.getElementById("adminPanel").style.display = "block";
        initAdminPanel();
    } else {
        alert("❌ Password errata!");
        document.getElementById("adminPasswordInput").value = "";
    }
}

function checkLoginEnter(e) {
    if (e.key === "Enter") {
        verifyAdminPassword();
    }
}

function switchTab(tabId, element) {
    document.querySelectorAll(".tab-content").forEach(tab => tab.classList.remove("active"));
    document.querySelectorAll(".nav-tab").forEach(tab => tab.classList.remove("active"));
    
    document.getElementById(tabId).classList.add("active");
    element.classList.add("active");

    if (tabId === "exportTab") {
        generateExportData();
    }
}

function initAdminPanel() {
    renderFaqTable();
    renderBtnTable();
    setupFaqSmartSearch();
}

function setupFaqSmartSearch() {
    const faqIdInput = document.getElementById("faqId");
    if (!faqIdInput) return;

    let datalist = document.getElementById("faqIdSuggestions");
    if (!datalist) {
        datalist = document.createElement("datalist");
        datalist.id = "faqIdSuggestions";
        document.body.appendChild(datalist);
        faqIdInput.setAttribute("list", "faqIdSuggestions");
    }

    updateFaqDatalistOptions();

    faqIdInput.addEventListener("input", function() {
        const typedId = this.value.trim().toUpperCase();
        
        // Filtra automaticamente la tabella in base all'ID selezionato/digitato
        const searchInput = document.getElementById("faqTableSearch");
        if (searchInput) {
            searchInput.value = typedId;
            renderFaqTable();
        }

        if (typeof appConfig === "undefined" || !appConfig.faqs) return;

        const existingIndex = appConfig.faqs.findIndex(f => f.id.toUpperCase() === typedId);
        const catSelect = document.getElementById("faqCategory");

        if (existingIndex !== -1) {
            const faq = appConfig.faqs[existingIndex];
            document.getElementById("faqEditIndex").value = existingIndex;
            document.getElementById("faqKeywords").value = Array.isArray(faq.keywords) ? faq.keywords.join(", ") : faq.keywords;
            document.getElementById("faqResponse").value = Array.isArray(faq.responses) ? faq.responses[0] : faq.response;
            
            if (catSelect) {
                catSelect.value = faq.type || (faq.id.startsWith("FORM_") ? "form" : "scuola");
            }

            document.getElementById("faqFormTitle").innerHTML = `<i class="fa-solid fa-pen-to-square"></i> Modifica FAQ Esistente (${faq.id})`;
            document.getElementById("faqSubmitBtn").innerHTML = `<i class="fa-solid fa-sync"></i> Aggiorna FAQ`;
            document.getElementById("faqCancelBtn").style.display = "inline-flex";
            document.getElementById("faqDeleteInFormBtn").style.display = "inline-flex";
            document.getElementById("faqNewBtn").style.display = "inline-flex";
        } else {
            document.getElementById("faqEditIndex").value = "-1";
            if (catSelect) {
                if (typedId.startsWith("FORM_")) {
                    catSelect.value = "form";
                } else if (typedId === "CHI_SEI" || typedId.includes("TI_") || typedId === "AIUTO") {
                    catSelect.value = "personali";
                } else {
                    catSelect.value = "scuola";
                }
            }
            
            if (typedId.length > 0) {
                document.getElementById("faqFormTitle").innerHTML = `<i class="fa-solid fa-plus-circle"></i> Aggiungi Nuovo ID (${typedId})`;
                document.getElementById("faqSubmitBtn").innerHTML = `<i class="fa-solid fa-save"></i> Salva Nuova FAQ`;
                document.getElementById("faqCancelBtn").style.display = "inline-flex";
                document.getElementById("faqDeleteInFormBtn").style.display = "none";
                document.getElementById("faqNewBtn").style.display = "inline-flex";
            } else {
                resetFaqForm();
            }
        }
    });
}

function updateFaqDatalistOptions() {
    const datalist = document.getElementById("faqIdSuggestions");
    if (!datalist || typeof appConfig === "undefined" || !appConfig.faqs) return;
    
    datalist.innerHTML = "";
    appConfig.faqs.forEach(faq => {
        const option = document.createElement("option");
        option.value = faq.id;
        datalist.appendChild(option);
    });
}

function renderFaqTable() {
    const tbody = document.getElementById("faqTableBody");
    if (!tbody || typeof appConfig === "undefined" || !appConfig.faqs) return;

    const filterSelect = document.getElementById("faqCategoryFilter");
    const selectedCategory = filterSelect ? filterSelect.value : "ALL";
    
    const searchInput = document.getElementById("faqTableSearch");
    const searchQuery = searchInput ? searchInput.value.trim().toLowerCase() : "";

    tbody.innerHTML = "";
    
    appConfig.faqs.forEach((faq, index) => {
        const faqType = faq.type || (faq.id.startsWith("FORM_") ? "form" : "scuola");
        
        if (selectedCategory !== "ALL" && faqType !== selectedCategory) {
            return;
        }

        const kwText = Array.isArray(faq.keywords) ? faq.keywords.join(", ") : faq.keywords;
        const respText = Array.isArray(faq.responses) ? faq.responses[0] : faq.response;
        
        if (searchQuery !== "") {
            const matchId = faq.id.toLowerCase().includes(searchQuery);
            const matchKw = kwText.toLowerCase().includes(searchQuery);
            const matchResp = respText.toLowerCase().includes(searchQuery);
            if (!matchId && !matchKw && !matchResp) {
                return;
            }
        }

        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td><code>${faq.id}</code><br><small style="color: #1e3a8a; font-weight: bold;">📁 [${faqType}]</small></td>
            <td>${kwText}</td>
            <td>${respText}</td>
            <td class="actions-cell">
                <button class="btn btn-warning" onclick="editFaq(${index})" title="Modifica"><i class="fa-solid fa-pen"></i></button>
                <button class="btn btn-danger" onclick="deleteFaq(${index})" title="Elimina"><i class="fa-solid fa-trash"></i></button>
            </td>
        `;
        tbody.appendChild(tr);
    });
    
    updateFaqDatalistOptions();
}

// --- VALIDAZIONE PREVENTIVA DEGLI ERRORI ---
function validateFaqData(id, keywords, response) {
    let errors = [];

    if (!id) {
        errors.push("• L'ID della FAQ non può essere vuoto.");
    } else if (/\s/.test(id)) {
        errors.push("• L'ID non deve contenere spazi vuoti (usa il carattere underscore '_' al posto degli spazi).");
    } else if (!/^[A-Z0-9_]+$/.test(id)) {
        errors.push("• L'ID deve contenere solo lettere maiuscole, numeri e underscore (es. FORM_NOME_MODULO).");
    }

    if (!keywords || keywords.length === 0 || (keywords.length === 1 && keywords[0] === "")) {
        errors.push("• Inserisci almeno una parola chiave valida.");
    }

    if (!response || response.trim() === "") {
        errors.push("• Il testo della risposta non può essere vuoto.");
    }

    return errors;
}

function handleFaqSubmit(e) {
    e.preventDefault();
    const index = parseInt(document.getElementById("faqEditIndex").value, 10);
    const id = document.getElementById("faqId").value.trim().toUpperCase();
    const keywordsRaw = document.getElementById("faqKeywords").value;
    const keywords = keywordsRaw.split(",").map(k => k.trim()).filter(k => k);
    const response = document.getElementById("faqResponse").value.trim();
    const catSelect = document.getElementById("faqCategory");
    const category = catSelect ? catSelect.value : (id.startsWith("FORM_") ? "form" : "scuola");

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

function editFaq(index) {
    const faq = appConfig.faqs[index];
    document.getElementById("faqEditIndex").value = index;
    document.getElementById("faqId").value = faq.id;
    document.getElementById("faqKeywords").value = Array.isArray(faq.keywords) ? faq.keywords.join(", ") : faq.keywords;
    document.getElementById("faqResponse").value = Array.isArray(faq.responses) ? faq.responses[0] : faq.response;
    
    const catSelect = document.getElementById("faqCategory");
    if (catSelect) {
        catSelect.value = faq.type || (faq.id.startsWith("FORM_") ? "form" : "scuola");
    }

    const searchInput = document.getElementById("faqTableSearch");
    if (searchInput) {
        searchInput.value = faq.id;
        renderFaqTable();
    }

    document.getElementById("faqFormTitle").innerHTML = `<i class="fa-solid fa-pen-to-square"></i> Modifica FAQ (${faq.id})`;
    document.getElementById("faqSubmitBtn").innerHTML = `<i class="fa-solid fa-sync"></i> Aggiorna FAQ`;
    document.getElementById("faqCancelBtn").style.display = "inline-flex";
    document.getElementById("faqDeleteInFormBtn").style.display = "inline-flex";
    document.getElementById("faqNewBtn").style.display = "inline-flex";
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function deleteFaq(index) {
    if (confirm("Vuoi davvero eliminare definitivamente questa FAQ?")) {
        appConfig.faqs.splice(index, 1);
        renderFaqTable();
        resetFaqForm();
        alert("🗑️ FAQ rimossa con successo!");
    }
}

function deleteCurrentEditingFaq() {
    const index = parseInt(document.getElementById("faqEditIndex").value, 10);
    if (index >= 0) {
        deleteFaq(index);
    }
}

function resetFaqForm() {
    document.getElementById("faqForm").reset();
    document.getElementById("faqEditIndex").value = "-1";
    document.getElementById("faqFormTitle").innerHTML = `<i class="fa-solid fa-plus-circle"></i> Aggiungi Nuova FAQ`;
    document.getElementById("faqSubmitBtn").innerHTML = `<i class="fa-solid fa-save"></i> Salva FAQ`;
    document.getElementById("faqCancelBtn").style.display = "none";
    document.getElementById("faqDeleteInFormBtn").style.display = "none";
    document.getElementById("faqNewBtn").style.display = "none";
    
    const searchInput = document.getElementById("faqTableSearch");
    if (searchInput) {
        searchInput.value = "";
        renderFaqTable();
    }
}

// --- GESTIONE PULSANTI RAPIDI ---
function renderBtnTable() {
    const tbody = document.getElementById("btnTableBody");
    if (!tbody || typeof appConfig === "undefined" || !appConfig.quickButtons) return;

    tbody.innerHTML = "";
    appConfig.quickButtons.forEach((btn, index) => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td><strong>${btn.label}</strong></td>
            <td><code>${btn.id}</code></td>
            <td class="actions-cell">
                <button class="btn btn-warning" onclick="editBtn(${index})"><i class="fa-solid fa-pen"></i></button>
                <button class="btn btn-danger" onclick="deleteBtn(${index})"><i class="fa-solid fa-trash"></i></button>
            </td>
        `;
        tbody.appendChild(tr);
    });
}

function handleBtnSubmit(e) {
    e.preventDefault();
    const index = parseInt(document.getElementById("btnEditIndex").value, 10);
    const label = document.getElementById("btnLabel").value.trim();
    const id = document.getElementById("btnFaqId").value.trim().toUpperCase();

    const newBtn = { id, label };

    if (index >= 0) {
        appConfig.quickButtons[index] = newBtn;
        alert("✅ Pulsante aggiornato con successo!");
    } else {
        appConfig.quickButtons.push(newBtn);
        alert("✅ Pulsante rapido aggiunto con successo!");
    }

    renderBtnTable();
    resetBtnForm();
}

function editBtn(index) {
    const btn = appConfig.quickButtons[index];
    document.getElementById("btnEditIndex").value = index;
    document.getElementById("btnLabel").value = btn.label;
    document.getElementById("btnFaqId").value = btn.id;

    document.getElementById("btnFormTitle").innerHTML = `<i class="fa-solid fa-pen-to-square"></i> Modifica Pulsante`;
    document.getElementById("btnSubmitBtn").innerHTML = `<i class="fa-solid fa-sync"></i> Aggiorna Pulsante`;
    document.getElementById("btnCancelBtn").style.display = "inline-flex";
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function deleteBtn(index) {
    if (confirm("Vuoi davvero eliminare questo pulsante?")) {
        appConfig.quickButtons.splice(index, 1);
        renderBtnTable();
    }
}

function resetBtnForm() {
    document.getElementById("btnForm").reset();
    document.getElementById("btnEditIndex").value = "-1";
    document.getElementById("btnFormTitle").innerHTML = `<i class="fa-solid fa-plus-circle"></i> Aggiungi Pulsante Rapido`;
    document.getElementById("btnSubmitBtn").innerHTML = `<i class="fa-solid fa-save"></i> Salva Pulsante`;
    document.getElementById("btnCancelBtn").style.display = "none";
}

// --- ESPORTAZIONE CODICE CON CONTROLLO INTEGRITÀ ---
function generateExportData() {
    const exportArea = document.getElementById("exportArea");
    if (!exportArea || typeof appConfig === "undefined") return;

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
        const jsonString = JSON.stringify(cleanConfig, null, 2);
        exportArea.value = `let appConfig = ${jsonString};`;
    } catch (err) {
        exportArea.value = `❌ Errore critico durante la generazione del JSON: ${err.message}`;
    }
}

function copyExportCode() {
    const exportArea = document.getElementById("exportArea");
    exportArea.select();
    document.execCommand("copy");
    alert("📋 Codice copiato negli appunti! Incollalo dentro js/script.js per aggiornare il bot.");
}
