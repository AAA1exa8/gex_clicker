let ui = {
    bi: {
        value: document.getElementById("bi-amount"),
        change: document.getElementById("bi-gain")
    },
    gay: {
        value: document.getElementById("gay-amount"),
        change: document.getElementById("gay-gain")
    },
    trans: {
        value: document.getElementById("trans-amount"),
        change: document.getElementById("trans-gain")
    },
    poly: {
        value: document.getElementById("poly-amount"),
        change: document.getElementById("poly-gain")
    }
};

function updateCurrencyUI(currency) {
    const unlocked = JSON.parse(localStorage.getItem("unlocked-currencies"));
    let container = document.getElementById(currency);
    if (unlocked[currency]) {
        container.classList.remove("locked");
    } else {
        container.classList.add("locked");
    }

    const value = localStorage.getItem(currency);
    let delta = ui[currency].value.textContent !== "" ? value - ui[currency].value.textContent : 0;
    if (isNaN(delta)) {
        delta = 0;
    }

    let valString = value;
    if (value.length > 5) {
        valString = `${value.substring(0, value.length - 3)}k`;
    }
    if (value.length > 8) {
        valString = `${value.substring(0, value.length - 6)}M`;
    }
    if (value.length > 11) {
        valString = `${value.substring(0, value.length - 9)}B`;
    }
    if (value.length > 14) {
        valString = `${value.substring(0, value.length - 12)}T`;
    }
    ui[currency].value.textContent = valString;
    
    if (delta > 0) {
        ui[currency].change.classList.remove("loss");
        ui[currency].change.classList.add("gain");
        ui[currency].change.textContent = `+${delta}`;
        setTimeout(() => {
            updateCurrencyUI(currency);
        }, 100);
    } else if (delta == 0) {
        ui[currency].change.classList.remove("loss");
        ui[currency].change.classList.remove("gain");
    } else if (delta < 0) {
        ui[currency].change.classList.remove("gain");
        ui[currency].change.classList.add("loss");
        ui[currency].change.textContent = delta;
        setTimeout(() => {
            updateCurrencyUI(currency);
        }, 100);
    } else {
        console.error(`Currency delta of ${currency} was not valid! Delta: ${delta}`);
    }
}

for (const currency in ui) {
    updateCurrencyUI(currency);
    let container = document.getElementById(currency);
    container.addEventListener("currencychange", () => {
        updateCurrencyUI(currency);
    });
}