const changeEvent = new Event("currencychange");

function changeCurrencyValue(currency, delta) {
    localStorage.setItem(currency, Number(localStorage.getItem(currency)) + Number(delta));
    let container = document.getElementById(currency);
    container.dispatchEvent(changeEvent);
}

if (heart) {
    heart.addEventListener("manualgain", () => {
        changeCurrencyValue("bi", localStorage.getItem("bi-per-click"));
        changeCurrencyValue("gay", localStorage.getItem("gay-per-click"));
        changeCurrencyValue("trans", localStorage.getItem("trans-per-click"));
        changeCurrencyValue("poly", localStorage.getItem("poly-per-click"));
    });
}

function registerGenerator(generator) {
    setInterval(() => {
        for (const currency of generator.currencies) {
            changeCurrencyValue(currency.name, currency.gain);
        }
    }, generator.frequency);
}

const generators = JSON.parse(localStorage.getItem("currency-generators"));
for (const generator of generators) {
    setInterval(() => {
        for (const currency of generator.currencies) {
            changeCurrencyValue(currency.name, currency.gain * generator.count);
        }
    }, generator.frequency);
}

