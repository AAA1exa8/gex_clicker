// === INIT CODE ===
function initStorage(key, value) {
    if (!localStorage.getItem(key) || localStorage.getItem(key) == undefined) {
        localStorage.setItem(key, value);
    }
}

const latestVersion = "BETA-0";

const storeItems = [
    {
        id: "0-lemon-bar",
        name: "Lemon bar",
        iconPath: "/public/images/icons/Lemon-bar.png",
        description: "Increases <img src='/public/images/sibex-static.webp' alt='bi'> per click by 1",
        max: 4,
        minPoly: 0,
        maxPoly: -1,
        requires: [],
        cost: {
            bi: 10,
            gay: 0,
            trans: 0,
            poly: 0,
            baseMul: 0,
            baseIncrease: 5,
            polyMul: 1,
            polyIncrease: 0,
        },
        gain: {
            type: "click-increase-add",
            currency: "bi",
            increase: 1
        }
    },
    {
        id: "0-stonewall",
        name: "Stand up against oppression",
        iconPath: "/public/images/icons/Stonewall.jpg",
        description: "Unlocks <img src='/public/images/saygex-static.webp' alt='gay'>",
        max: 1,
        minPoly: 0,
        maxPoly: -1,
        requires: [],
        cost: {
            bi: 200,
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
            increase: 1
        }
    }
];

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
    initStorage("version", latestVersion);
    const version = localStorage.getItem("version");

    if (version !== latestVersion) {
        alert(`You are loading a newer, incompatible version. Progress will be cleared. You can download version ${version} from the github. Your data:\n${JSON.stringify(localStorage)}`);
        localStorage.clear();
        location.reload();
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
