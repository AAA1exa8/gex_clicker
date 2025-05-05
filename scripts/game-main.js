const changeEvent = new Event("currencychange");
const genEvent = new Event("generatorgain");

if (typeof heart !== undefined) {
    heart.addEventListener("manualgain", () => {
        changeCurrencyValue("bi", localStorage.getItem("bi-per-click"));
        changeCurrencyValue("gay", localStorage.getItem("gay-per-click"));
        changeCurrencyValue("trans", localStorage.getItem("trans-per-click"));
        changeCurrencyValue("poly", localStorage.getItem("poly-per-click"));
    });

    const autoclickInterval = localStorage.getItem("autoclick-frequency");
    if (typeof autoclickInterval !== undefined) {
        setInterval(() => {
            heart.dispatchEvent("click");
        }, autoclickInterval);
    }
}

function registerGenerator(generator) {
    setInterval(() => {
        for (const currency of generator.currencies) {
            changeCurrencyValue(currency.name, currency.gain);
        }
    }, generator.frequency);
}

const generators = JSON.parse(localStorage.getItem("currency-generators"));
for (const generator of Object.values(generators)) {
    setInterval(() => {
        changeCurrencyValue(
            generator.currency,
            generator.gain * generator.count,
        );
        window.dispatchEvent(genEvent);
    }, generator.frequency);
}

window.addEventListener("buygen", () => {
    const gen = sessionStorage.getItem("gen-to-handle");
    setInterval(() => {
        changeCurrencyValue(gen.currency, gen.gain * gen.count);
        window.dispatchEvent(genEvent);
    }, gen.frequency);
    sessionStorage.removeItem("gen-to-handle");
});
