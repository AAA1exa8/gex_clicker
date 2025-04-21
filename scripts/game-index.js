let heart = document.getElementById("clicker-heart");
heart.addEventListener("click", (ev) => {
    heart.style.backgroundImage = 'url("/public/images/gex_new.gif")';
    heart.classList.add("clicked");
    setTimeout(() => {
        heart.classList.remove("clicked");
        heart.classList.add("regen");
    }, 200);
    setTimeout(() => {
        heart.style.backgroundImage = 'url("/public/images/gex_new-static.png")';
        heart.classList.remove("regen");
    }, 2000);
});