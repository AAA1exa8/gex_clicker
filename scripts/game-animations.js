let clickInhibit = false;

let heart = document.getElementById("clicker-heart");

heart.addEventListener("click", () => {
    if (heart.classList.contains("clicked") || heart.classList.contains("regen")) return;
    const image = localStorage.getItem("heart_image");
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