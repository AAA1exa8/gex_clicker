let heart = document.getElementById("clicker-heart");

let image = localStorage.getItem("heart-image");
let ext = {
    static: localStorage.getItem("heart-static-ext"),
    anim: localStorage.getItem("heart-anim-ext")
};
heart.style.backgroundImage = `url("/public/images/${image}-static.${ext.static}")`;

const clickEvent = new Event("manualgain");

heart.addEventListener("click", () => {
    if (heart.classList.contains("clicked") || heart.classList.contains("regen")) return;
    heart.style.backgroundImage = `url("/public/images/${image}.${ext.anim}")`;
    heart.classList.add("clicked");
    setTimeout(() => {
        heart.classList.remove("clicked");
        heart.classList.add("regen");
        heart.dispatchEvent(clickEvent);
    }, 200);
    setTimeout(() => {
        heart.style.backgroundImage = `url("/public/images/${image}-static.${ext.static}")`;
        heart.classList.remove("regen");
    }, 2000);
});