const changeEvent = new Event("currencychange");
const genEvent = new Event("generatorgain");

let clickerHeart = document.getElementById("clicker-heart");

if (clickerHeart) {
    clickerHeart.addEventListener("manualgain", () => {
        changeCurrencyValue("bi", localStorage.getItem("bi-per-click"));
        changeCurrencyValue("gay", localStorage.getItem("gay-per-click"));
        changeCurrencyValue("trans", localStorage.getItem("trans-per-click"));
        changeCurrencyValue("poly", localStorage.getItem("poly-per-click"));
    });

    const autoclickInterval = Number(localStorage.getItem("autoclick-frequency"));
    if (autoclickInterval !== -1) {
        setInterval(() => {
            clickerHeart.click();
        }, autoclickInterval);
    }
}

setInterval(() => {
    const generators = JSON.parse(localStorage.getItem("currency-generators"));
    for (const generator in generators) {
        const gen = generators[generator];
        const lastDate = Number(sessionStorage.getItem(`last-run-${generator}`));
        const delta = Date.now() - lastDate;
        let mul = 1;
        console.log(delta);
        if (Number.isFinite(delta)) {
            mul = Math.floor(delta / gen.frequency);
        }
        if (delta > gen.frequency) {
            changeCurrencyValue(gen.currency, gen.gain * gen.count * mul);
            sessionStorage.setItem(`last-run-${generator}`, Date.now());
        }
    }
    lastGenRun = Date.now();
}, 500);
