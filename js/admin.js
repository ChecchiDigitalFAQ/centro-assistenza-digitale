/**
 * Pannello di Amministrazione - Arturo | IIS "Arturo Checchi"
 * Sviluppato da Luca Vorraro (Assistente Tecnico Informatico)
 */

// PASSWORD DI ACCESSO AL PANNELLO (Modificabile a piacimento)
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

// GESTIONE SCHEDE (TABS)
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
    ensureCategorySelectExists();
    setupCategoryFilterUI();
    renderFaqTable();
    renderBtnTable();
    setupFaqSmartSearch();
}

// --- AGGIUNTA MENU A TENDINA BLOCCATO PER LE MACRO-CATEGORIE NEL FORM ---
function ensureCategorySelectExists() {
    const faqForm = document.getElementById("faqForm");
    if (!faqForm || document.getElementById("faqCategory")) return;

    const categoryDiv = document.createElement("div");
    categoryDiv.className = "form-group";
    categoryDiv.style.cssText = "margin-bottom: 15px;";
    categoryDiv.innerHTML = `
        <label for="faqCategory" style="font-weight: bold; display: block; margin-bottom: 5px;">Categoria Ufficiale:</label>
        <select id="faqCategory" class="form-control" style="width: 100%; padding: 8px; border-radius: 6px; border: 1px solid #ccc;">
            <option value="form">📋 form (Moduli Microsoft Forms)</option>
            <option value="scuola">🏫 scuola (Informazioni e Uffici)</option>
            <option value="personali">👋 personali (Presentazioni, battute e indovinelli)</option>
            <option value="dizionario">📖 dizionario (Termini enciclopedici)</option>
        </select>
    `;
    
    const responseField = document.getElementById("faqResponse")?.closest(".form-group") || faqForm.children[2];
    faqForm.insertBefore(categoryDiv, responseField);
}

// --- FILTRO DINAMICO PER CATEGORIE NELLA TABELLA ---
function setupCategoryFilterUI() {
    const container = document.querySelector("#faqTableBody")?.closest(".card") || document.getElementById("faqTableBody")?.parentElement;
    if (!container || document.getElementById("faqCategoryFilter")) return;

    const filterWrapper = document.createElement("div");
    filterWrapper.style.cssText = "margin-bottom: 15px; display: flex; align-items: center; gap: 10px;";
    filterWrapper.innerHTML = `
        <label for="faqCategoryFilter" style="font-weight: bold; color: #1e3a8a;"><i class="fa-solid fa-filter"></i> Filtra per Categoria:</label>
        <select id="faqCategoryFilter" class="form-control" style="max-width: 280px; display: inline-block; padding: 6px; border-radius: 6px; border: 1px solid #ccc;" onchange="renderFaqTable()">
            <option value="ALL">🔍 Tutte le categorie</option>
            <option value="form">📋 form</option>
            <option value="scuola">🏫 scuola</option>
            <option value="personali">👋 personali</option>
            <option value="dizionario">📖 dizionario</option>
        </select>
    `;
    container.insertBefore(filterWrapper, document.getElementById("faqTableBody").parentElement);
}

// --- GESTIONE FAQ CON RICERCA INTELLIGENTE SULL'ID ---
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
        } else {
            document.getElementById("faqEditIndex").value = "-1";
            if (catSelect) {
                if (typedId.startsWith("FORM_")) {
                    catSelect.value = "form";
                } else if (typedId === "CHI_SEI" || typedId.includes("TI_") || typedId === "AIUTO") {
                    catSelect.value = "personali";
                }
            }
            
            if (typedId.length > 0) {
                document.getElementById("faqFormTitle").innerHTML = `<i class="fa-solid fa-plus-circle"></i> Aggiungi Nuovo ID (${typedId})`;
                document.getElementById("faqSubmitBtn").innerHTML = `<i class="fa-solid fa-save"></i> Salva Nuova FAQ`;
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

    tbody.innerHTML = "";
    
    appConfig.faqs.forEach((faq, index) => {
        const faqType = faq.type || (faq.id.startsWith("FORM_") ? "form" : "scuola");
        
        if (selectedCategory !== "ALL" && faqType !== selectedCategory) {
            return;
        }

        const tr = document.createElement("tr");
        const kwText = Array.isArray(faq.keywords) ? faq.keywords.join(", ") : faq.keywords;
        const respText = Array.isArray(faq.responses) ? faq.responses[0] : faq.response;

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

function handleFaqSubmit(e) {
    e.preventDefault();
    const index = parseInt(document.getElementById("faqEditIndex").value, 10);
    const id = document.getElementById("faqId").value.trim().toUpperCase();
    const keywords = document.getElementById("faqKeywords").value.split(",").map(k => k.trim()).filter(k => k);
    const response = document.getElementById("faqResponse").value.trim();
    const catSelect = document.getElementById("faqCategory");
    const category = catSelect ? catSelect.value : (id.startsWith("FORM_") ? "form" : "scuola");

    if (!id || keywords.length === 0 || !response) {
        alert("⚠️ Per favore compila tutti i campi.");
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
        alert("✅ FAQ aggiornata con successo!");
    } else {
        const checkDuplicate = appConfig.faqs.findIndex(f => f.id.toUpperCase() === id);
        if (checkDuplicate !== -1) {
            appConfig.faqs[checkDuplicate] = newFaq;
            alert("✅ FAQ esistente sovrascritta con successo!");
        } else {
            appConfig.faqs.unshift(newFaq);
            alert("✅ Nuova FAQ aggiunta con successo!");
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

    document.getElementById("faqFormTitle").innerHTML = `<i class="fa-solid fa-pen-to-square"></i> Modifica FAQ (${faq.id})`;
    document.getElementById("faqSubmitBtn").innerHTML = `<i class="fa-solid fa-sync"></i> Aggiorna FAQ`;
    document.getElementById("faqCancelBtn").style.display = "inline-flex";
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

function resetFaqForm() {
    document.getElementById("faqForm").reset();
    document.getElementById("faqEditIndex").value = "-1";
    document.getElementById("faqFormTitle").innerHTML = `<i class="fa-solid fa-plus-circle"></i> Aggiungi Nuova FAQ`;
    document.getElementById("faqSubmitBtn").innerHTML = `<i class="fa-solid fa-save"></i> Salva FAQ`;
    document.getElementById("faqCancelBtn").style.display = "none";
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

// --- ESPORTAZIONE CODICE PERFETTA E PULITA ---
function generateExportData() {
    const exportArea = document.getElementById("exportArea");
    if (!exportArea || typeof appConfig === "undefined") return;

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

    exportArea.value = `let appConfig = ${JSON.stringify(cleanConfig, null, 2)};`;
}

function copyExportCode() {
    const exportArea = document.getElementById("exportArea");
    exportArea.select();
    document.execCommand("copy");
    alert("📋 Codice copiato negli appunti! Incollalo dentro js/script.js per aggiornare il bot.");
}
