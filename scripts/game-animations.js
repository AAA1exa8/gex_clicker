let heart = document.getElementById("clicker-heart");

let image = localStorage.getItem("heart-image");
heart.src = `/public/images/${image}-static.webp`;

const clickEvent = new Event("manualgain");



heart.addEventListener("click", () => {
    if (heart.classList.contains("clicked") || heart.classList.contains("regen")) return;
    if (navigator.userAgent.search("Firefox") > -1) {
        // Firefox keeps playing it in the background.
        // No other solution worked, but at least it's only 4kiB...
        heart.src = `/public/images/${image}.webp?v=${Date.now()}`;
    } else {
        heart.src = `/public/images/${image}.webp`;
    }
    heart.classList.add("clicked");
    setTimeout(() => {
        heart.classList.remove("clicked");
        heart.classList.add("regen");
        heart.dispatchEvent(clickEvent);
    }, 200);
    setTimeout(() => {
        heart.src = `/public/images/${image}-static.webp`;
        heart.classList.remove("regen");
    }, 2100);
});