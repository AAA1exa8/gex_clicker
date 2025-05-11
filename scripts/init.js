// === INIT CODE ===
function initStorage(key, value) {
    if (!localStorage.getItem(key) || localStorage.getItem(key) == undefined) {
        localStorage.setItem(key, value);
    }
}

const latestVersion = "BETA-0-WBA";

const items = sessionStorage.getItem("dev") ? devStoreItems : storeItems;

function init() {
    initStorage("version", latestVersion);
    const version = localStorage.getItem("version");

    if (version !== latestVersion) {
        alert(`You are loading a newer, incompatible version. Progress will be cleared. You can download version ${version} from the github. Your data:\n${JSON.stringify(localStorage)}`);
        localStorage.clear();
        location.reload();
    }

    if (location.href.includes("clicker.saygex.gay")) {
        //<script disable-devtool-auto src='https://cdn.jsdelivr.net/npm/disable-devtool'></script>
        let script = document.createElement("script");
        script.setAttribute("disable-devtool-auto", "");
        script.setAttribute("src", "https://cdn.jsdelivr.net/npm/disable-devtool");
        document.head.append(script);
    }

    initStorage("heart-image", "sibex");
    initStorage("gay-class", "saygex");

    initStorage("unlocked-currencies", JSON.stringify({
        bi: true,
        gay: false,
        trans: false,
        poly: false
    }));

    initStorage("bi", 0);
    initStorage("gay", 0);
    initStorage("trans", 0);
    initStorage("poly", 0);

    initStorage("bi-per-click", 1);
    initStorage("gay-per-click", 0);
    initStorage("trans-per-click", 0);
    initStorage("poly-per-click", 0);

    initStorage("autoclick-frequency", -1);

    initStorage("currency-generators", JSON.stringify({}));
    let ownedItems = JSON.parse(localStorage.getItem("owned"));
    if (ownedItems === null) {
        ownedItems = {};
    }
    for (const item of items) {
        if (!ownedItems[item.id]) {
            ownedItems[item.id] = 0;
        }
    }
    localStorage.setItem("owned", JSON.stringify(ownedItems));
}

init();

// === CONSOLE COMMANDS ===
const on = true;
const off = false;
function devView(val) {
    if (val) {
        sessionStorage.setItem("dev-view", true);
    } else {
        sessionStorage.removeItem("dev-view");
    }
    location.reload();
}

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
    }
    if (currency === "gay") {
        localStorage.setItem("heart-image", localStorage.getItem("gay-class"));
    }
    if (currency === "trans") {
        localStorage.setItem("heart-image", "sranstex");
    }
    if (currency === "poly") {
        localStorage.setItem("heart-image", "poly");
    }
}

function clearOwned() {
    const dev = sessionStorage.getItem("dev");
    sessionStorage.clear();
    sessionStorage.setItem("dev", dev);

    localStorage.setItem("unlocked-currencies", JSON.stringify({
        bi: true,
        gay: false,
        trans: false,
        poly: true
    }));

    localStorage.setItem("bi", 0);
    localStorage.setItem("gay", 0);
    localStorage.setItem("trans", 0);

    localStorage.setItem("bi-per-click", 1);
    localStorage.setItem("gay-per-click", 0);
    localStorage.setItem("trans-per-click", 0);

    localStorage.setItem("autoclick-frequency", -1);

    localStorage.setItem("currency-generators", JSON.stringify({}));
    let ownedItems = {};
    for (const item of items) {
        ownedItems[item.id] = 0;
    }
    localStorage.setItem("owned", JSON.stringify(ownedItems));
}
