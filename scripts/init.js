// === INIT CODE ===
function initStorage(key, value) {
    if (!localStorage.getItem(key) || localStorage.getItem(key) == undefined) {
        localStorage.setItem(key, value);
    }
}

const storeItems = [];

const devStoreItems = [
    {
        id: "test-max-single",
        name: "Single Max Test",
        iconPath: "/public/images/gex_old.gif",
        description: "Tests max = 1",
        max: 1,
        minPoly: 0,
        maxPoly: 0,
        requires: [],
        cost: {
            bi: 0,
            gay: 0,
            trans: 0,
            poly: 0,
            baseMul: 0,
            baseIncrease: 0,
            polyMul: 0,
            polyIncrease: 0,
        },
        gain: {
            type: "click-increase-add",
            currency: "bi",
            increase: 0,
        },
    },
    {
        id: "test-max-multiple",
        name: "Multiple Max Test",
        iconPath: "/public/images/gex_old.gif",
        description: "Tests max = 5 + req",
        max: 5,
        minPoly: 0,
        maxPoly: 0,
        requires: ["test-max-single"],
        cost: {
            bi: 0,
            gay: 0,
            trans: 0,
            poly: 0,
            baseMul: 0,
            baseIncrease: 0,
            polyMul: 0,
            polyIncrease: 0,
        },
        gain: {
            type: "click-increase-add",
            currency: "bi",
            increase: 0,
        },
    },
    {
        id: "test-cost",
        name: "Cost Test",
        iconPath: "/public/images/gex_old.gif",
        description: "Tests cost and click increase",
        max: -1,
        minPoly: 0,
        maxPoly: -1,
        requires: [],
        cost: {
            bi: 5,
            gay: 0,
            trans: 0,
            poly: 0,
            baseMul: 0,
            baseIncrease: 0,
            polyMul: 0,
            polyIncrease: 0,
        },
        gain: {
            type: "click-increase-add",
            currency: "bi",
            increase: 1,
        },
    },
    {
        id: "test-new-currency",
        name: "New Currency Test",
        iconPath: "/public/images/gex_old.gif",
        description: "Tests new currency heart change",
        max: 1,
        minPoly: 0,
        maxPoly: -1,
        requires: [],
        cost: {
            bi: 5,
            gay: 0,
            trans: 0,
            poly: 0,
            baseMul: 0,
            baseIncrease: 0,
            polyMul: 0,
            polyIncrease: 0,
        },
        gain: {
            type: "click-increase-add",
            currency: "gay",
            increase: 1,
        },
    },
    {
        id: "test-click-mul",
        name: "Click Multiplier Test",
        iconPath: "/public/images/gex_old.gif",
        description: "Tests click multiplier",
        max: 1,
        minPoly: 0,
        maxPoly: -1,
        requires: ["test-new-currency"],
        cost: {
            bi: 0,
            gay: 5,
            trans: 0,
            poly: 0,
            baseMul: 0,
            baseIncrease: 0,
            polyMul: 0,
            polyIncrease: 0,
        },
        gain: {
            type: "click-increase-mul",
            currency: "gay",
            multiplier: 2,
        },
    },
    {
        id: "test-generator",
        name: "Generator Test",
        iconPath: "/public/images/gex_old.gif",
        description: "Tests generators",
        max: 10,
        minPoly: 0,
        maxPoly: -1,
        requires: ["test-new-currency"],
        cost: {
            bi: 1,
            gay: 0,
            trans: 0,
            poly: 0,
            baseMul: 0,
            baseIncrease: 0,
            polyMul: 0,
            polyIncrease: 0,
        },
        gain: {
            type: "generator",
            currency: "bi",
            amount: 5,
            frequency: 2000
        },
    },
    {
        id: "test-autoclick",
        name: "Autoclick Test",
        iconPath: "/public/images/gex_old.gif",
        description: "Tests autoclick",
        max: 1,
        minPoly: 0,
        maxPoly: -1,
        requires: [],
        cost: {
            bi: 0,
            gay: 5,
            trans: 0,
            poly: 0,
            baseMul: 0,
            baseIncrease: 0,
            polyMul: 0,
            polyIncrease: 0,
        },
        gain: {
            type: "autoclick",
            frequency: 5000
        },
    },
    {
        id: "test-rebirth",
        name: "Rebirth Test",
        iconPath: "/public/images/gex_old.gif",
        description: "Tests rebirths",
        max: 1,
        minPoly: 0,
        maxPoly: -1,
        requires: ["test-max-multiple", "test-cost", "test-click-mul", "test-generator", "test-autoclick"],
        cost: {
            bi: 0,
            gay: 5,
            trans: 0,
            poly: 0,
            baseMul: 0,
            baseIncrease: 0,
            polyMul: 0,
            polyIncrease: 0,
        },
        gain: {
            type: "rebirth",
            amount: 1,
            reset: ["bi", "gay"],
        },
    },
];

const items = sessionStorage.getItem("dev") ? devStoreItems : storeItems;

function init() {
    // TODO: HANDLE CLASS SELECTION!
    initStorage("heart-image", "sibex");
    initStorage("gay-class", "saygex");

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
    localStorage.setItem("bi", 0);
    localStorage.setItem("gay", 0);
    localStorage.setItem("trans", 0);

    localStorage.setItem("bi-per-click", 1);
    localStorage.setItem("gay-per-click", 0);
    localStorage.setItem("trans-per-click", 0);

    localStorage.setItem("autoclick-frequency", -1);

    localStorage.setItem("currency-generators", JSON.stringify([]));
    let ownedItems = {};
    for (const item of items) {
        ownedItems[item.id] = 0;
    }
    localStorage.setItem("owned", JSON.stringify(ownedItems));
}
