// === INIT CODE ===
function initStorage(key, value) {
    if (!localStorage.getItem(key) || localStorage.getItem(key) == undefined) {
        localStorage.setItem(key, value);
    }
}

const storeItems = [];

const devStoreItems = [];

const items = sessionStorage.getItem("dev") ? devStoreItems : storeItems;

function init() {
    // TODO: HANDLE CLASS SELECTION!
    initStorage("heart-image", "sibex");
    initStorage("heart-anim-ext", "gif");
    initStorage("heart-static-ext", "png");

    initStorage("bi", 0);
    initStorage("gay", 0);
    initStorage("trans", 0);
    initStorage("poly", 0);

    initStorage("bi-per-click", 1);
    initStorage("gay-per-click", 0);
    initStorage("trans-per-click", 0);
    initStorage("poly-per-click", 0);

    initStorage("currency-generators", JSON.stringify([]));
    let ownedItems = {};
    for (const item of items) {
        ownedItems[item.id] = 0;
    }
}

init();

// === CONSOLE COMMANDS ===

function dev() {
    localStorage.clear();
    sessionStorage.setItem("dev", true);
    location.reload();
}

function undev() {
    localStorage.clear();
    sessionStorage.removeItem("dev");
    location.reload();
}

// === LIBRARY FUNCTIONS ===

function changeCurrencyValue(currency, delta) {
    if (delta === 0) {
        return;
    }
    localStorage.setItem(
        currency,
        Number(localStorage.getItem(currency)) + Number(delta),
    );
    let container = document.getElementById(currency);
    container.dispatchEvent(changeEvent);
}

function setCurrencyValue(currency, value) {
    localStorage.setItem(currency, value);
}

function setHeartByCurrency(currency) {
    if (currency === "bi") {
        localStorage.setItem("heart-image", "sibex");
        localStorage.setItem("heart-anim-ext", "gif");
        localStorage.setItem("heart-static-ext", "png");
    }
    if (currency === "gay") {
        localStorage.setItem("heart-image", localStorage.getItem("gay-class"));
        localStorage.setItem("heart-anim-ext", "webp");
        localStorage.setItem("heart-static-ext", "webp");
    }
    if (currency === "trans") {
        localStorage.setItem("heart-image", "sranstex");
        localStorage.setItem("heart-anim-ext", "gif");
        localStorage.setItem("heart-static-ext", "png");
    }
    if (currency === "poly") {
        localStorage.setItem("heart-image", "poly");
        localStorage.setItem("heart-anim-ext", "webp");
        localStorage.setItem("heart-static-ext", "webp");
    }
}
