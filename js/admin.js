document.addEventListener("DOMContentLoaded", function () {
    const faqIdInput = document.getElementById("faqId");
    const dictTermInput = document.getElementById("dictTerm");

    // 1. GESTIONE CAMBIO SCHEDE (TABS)
    window.showTab = function (tabId, element) {
        const tabs = document.querySelectorAll(".tab-content");
        tabs.forEach(tab => tab.classList.remove("active"));

        const buttons = document.querySelectorAll(".admin-nav button");
        buttons.forEach(btn => btn.classList.remove("active"));

        const targetTab = document.getElementById(tabId);
        if (targetTab) {
            targetTab.classList.add("active");
        }

        if (element) {
            element.classList.add("active");
        } else {
            const btn = Array.from(buttons).find(b => b.getAttribute("onclick") && b.getAttribute("onclick").includes(tabId));
            if (btn) btn.classList.add("active");
        }

        if (tabId === "exportTab") {
            generateExportCode();
        }
    };

    // 2. RECUPERO DATI DA appConfig (da script.js)
    function getFaqsList() {
        if (typeof appConfig !== "undefined" && Array.isArray(appConfig.faqs)) {
            return appConfig.faqs;
        }
        return [];
    }

    // 3. AUTOCOMPLETAMENTO FAQ ID
    let faqDatalist = document.getElementById("faqIdSuggestions");
    if (!faqDatalist) {
        faqDatalist = document.createElement("datalist");
        faqDatalist.id = "faqIdSuggestions";
        document.body.appendChild(faqDatalist);
    }
    if (faqIdInput) {
        faqIdInput.setAttribute("list", "faqIdSuggestions");
    }

    function updateFaqD
