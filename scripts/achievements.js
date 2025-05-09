const main = document.querySelector("main");
const footer = document.querySelector("footer");

for (const achiev in completed) {
    const achievObj = achievements.find((v) => v.id === achiev);
    let entry = document.createElement("article");
    let inner = "";

    entry.classList.add("achievement");
    if (!completed[achiev]) {
        entry.classList.add("incomplete");
    }
    entry.id = achiev;
    inner += `<div class="achiev-info-container">`;
    inner += `  <section class="achiev-info">`;
    inner += `      <img src="${achievObj.iconPath}" alt="" class="achiev-image">`;
    inner += `      <h2 class="achiev-name">${achievObj.name}</h2>`;
    inner += `  </section>`;
    inner += `  <section class="achiev-status">`;
    inner += `      <p class="achiev-done"><i class="fa-solid ${completed[achiev] ? "fa-square-check" : "fa-square"}"></i></p>`;
    inner += `  </section>`;
    inner += `</div>`;
    inner += `<p class="achiev-desc">${achievObj.description}</p>`;

    entry.innerHTML = inner;
    footer.before(entry);
}