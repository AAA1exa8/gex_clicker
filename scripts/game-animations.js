let clickInhibit = false;

let heart = document.getElementById("clicker-heart");

let image = localStorage.getItem("heart_image");
if (!image) {
    localStorage.setItem("heart_image", image = "sibex");
}
heart.style.backgroundImage = `url("/public/images/${image}-static.png")`;

heart.addEventListener("click", () => {
    if (heart.classList.contains("clicked") || heart.classList.contains("regen")) return;
    heart.style.backgroundImage = `url("/public/images/${image}.gif")`;
    heart.classList.add("clicked");
    setTimeout(() => {
        heart.classList.remove("clicked");
        heart.classList.add("regen");
    }, 200);
    setTimeout(() => {
        heart.style.backgroundImage = `url("/public/images/${image}-static.png")`;
        heart.classList.remove("regen");
    }, 2000);
});