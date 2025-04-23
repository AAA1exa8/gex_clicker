let ui = {
    "bi": {
        value: document.getElementById("bi-amount"),
        change: document.getElementById("bi-gain")
    },
    "gay": {
        value: document.getElementById("gay-amount"),
        change: document.getElementById("gay-gain")
    },
    "trans": {
        value: document.getElementById("trans-amount"),
        change: document.getElementById("trans-gain")
    },
    "poly": {
        value: document.getElementById("poly-amount"),
        change: document.getElementById("poly-gain")
    }
};

for (currency in ui) {
    if (!localStorage.getItem(currency)) {
        localStorage.setItem(currency, 0);
    }
}

setInterval(() => {
    for (currencyName in ui) {
        const value = localStorage.getItem(currencyName);
        let currency = ui[currencyName];
        if (value - currency.value.textContent > 0) {
            currency.change.classList.remove("loss");
            currency.change.classList.add("gain");
            currency.change.textContent = `+${value - currency.value.textContent}`;
        } else if (value - currency.value.textContent == 0) {
            currency.change.classList.remove("loss");
            currency.change.classList.remove("gain");
        } else {
            currency.change.classList.remove("gain");
            currency.change.classList.add("loss");
            currency.change.textContent = value - currency.value.textContent;
        }
        currency.value.textContent = value;
    }
}, 50);