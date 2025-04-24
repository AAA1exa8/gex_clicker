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

for (currency in ui) {
    if (!localStorage.getItem(currency)) {
        localStorage.setItem(currency, 0);
    }
}

function updateCurrencyUI(currency) {
    const value = localStorage.getItem(currency);
    const delta = value - ui[currency].value.textContent;

    ui[currency].value.textContent = value;
    
    if (delta > 0) {
        ui[currency].value.classList.remove("loss");
        ui[currency].value.classList.add("gain");
        ui[currency].value.textContent = `+${delta}`;
    } else if (delta == 0) {
        ui[currency].value.classList.remove("loss");
        ui[currency].value.classList.remove("gain");
    } else if (delta < 0) {
        ui[currency].value.classList.remove("gain");
        ui[currency].value.classList.add("loss");
        ui[currency].value.textContent = delta;
    } else {
        console.error(`Currency delta of ${currency} was not valid! Delta: ${delta}`);
    }
}

for (currency in ui) {
    updateCurrencyUI(currency);
    let container = document.getElementById(currency);
    container.addEventListener("currencychange", () => {
        updateCurrencyUI(currency);
    });
}