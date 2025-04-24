function initStorage(key, value) {
    if (!localStorage.getItem(key)) {
        localStorage.setItem(key, value);
    }
}

function init() {
    initStorage("bi", 0);
    initStorage("gay", 0);
    initStorage("trans", 0);
    initStorage("poly", 0);

    initStorage("bi-per-click", 1);
    initStorage("gay-per-click", 0);
    initStorage("trans-per-click", 0);
    initStorage("poly-per-click", 0);

    initStorage("currency-generators", JSON.stringify([]));
}

function dev() {
    localStorage.clear();
    sessionStorage.setItem("dev", true);
    location.reload();
}

init();