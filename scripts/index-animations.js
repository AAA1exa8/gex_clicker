let heart = document.getElementById("clicker-heart");

let image = localStorage.getItem("heart-image");
heart.style.backgroundImage = `url("/public/images/${image}-static.webp")`;

const clickEvent = new Event("manualgain");



heart.addEventListener("click", () => {
    if (heart.getAnimations().length > 0) return;
    if (navigator.userAgent.search("Firefox") > -1) {
        // Firefox keeps playing it in the background.
        // No other solution worked, but at least it's only 4kiB...
        heart.style.backgroundImage = `url("/public/images/${image}.webp?v=${Date.now()}")`;
    } else {
        heart.style.backgroundImage = `url("/public/images/${image}.webp")`;
    }
    heart.classList.add("clicked");
    setTimeout(() => {
        heart.classList.remove("clicked");
        heart.classList.add("regen");
        heart.dispatchEvent(clickEvent);
    }, 200);
    setTimeout(() => {
        heart.style.backgroundImage = `url("/public/images/${image}-static.webp")`;
        heart.classList.remove("regen");
    }, 2100);
});