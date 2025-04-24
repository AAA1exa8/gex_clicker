const changeEvent = new Event("currencychange");

let heart = document.getElementById("clicker-heart");

function changeCurrencyValue(currency, delta) {
    localStorage.setItem(currency, localStorage.getItem(currency) + delta);
    let container = document.getElementById(currency);
    container.dispatchEvent(changeEvent);
}

if (heart) {
    heart.addEventListener("manualgain", () => {
        changeCurrencyValue("bi", localStorage.getItem("bi-per-click"));
        changeCurrencyValue("gay", localStorage.getItem("gay-per-click"));
        changeCurrencyValue("trans", localStorage.getItem("trans-per-click"));
    });
}