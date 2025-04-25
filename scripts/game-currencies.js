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
    const value = localStorage.getItem(currency);
    const delta = ui[currency].value.textContent !== "" ? value - ui[currency].value.textContent : 0;

    ui[currency].value.textContent = value;
    
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