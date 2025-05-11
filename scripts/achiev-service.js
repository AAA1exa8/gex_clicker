let completed = JSON.parse(localStorage.getItem("completed-achievements"));
if (completed === null) {
    completed = {};
}
for (const achiev of achievements) {
    if (!completed[achiev.id]) {
        completed[achiev.id] = false;
    }
}
localStorage.setItem("completed-achievements", JSON.stringify(completed));
let incomplete = [];
for (const achiev in completed) {
    if (!completed[achiev]) {
        incomplete.push(achievements.find((v) => v.id === achiev));
    }
}

function completeAchievement(achiev) {
    completed[achiev.id] = true;
    localStorage.setItem("completed-achievements", JSON.stringify(completed));
    incomplete.splice(incomplete.indexOf(achiev), 1);

    let container = document.createElement("div");
    container.classList.add("popup-container");
    container.classList.add("hidden");
    let inner = "";

    inner += `<article class="popup-achiev">`;
    inner += `  <img src="${achiev.iconPath}" alt="">`;
    inner += `  <div class="popup-group">`;
    inner += `      <h2>Achievement get!</h2>`;
    inner += `      <h3>${achiev.name}</h3>`;
    inner += `      <p>${achiev.description}</p>`;
    inner += `  </div>`;
    inner += `</article>`;

    container.innerHTML = inner;
    document.body.append(container);

    setTimeout(() => {
        container.classList.remove("hidden");
    }, 10);
    setTimeout(() => {
        container.classList.add("hidden");
    }, 5000);
    setTimeout(() => {
        container.remove();
    }, 7500);
}

let lastCheck = {
    bi: Number(localStorage.getItem("bi")),
    gay: Number(localStorage.getItem("gay")),
    trans: Number(localStorage.getItem("trans")),
    poly: Number(localStorage.getItem("poly")),
    timestamp: Date.now()
};
setInterval(() => {
    for (const achiev of incomplete) {
        if (achiev.type === "currency") {
            if (localStorage.getItem(achiev.what) >= achiev.amount) {
                completeAchievement(achiev);
            }
        }
        if (achiev.type === "per-second") {
            const deltaTime = Date.now() - lastCheck.timestamp;
            const delta = (localStorage.getItem(achiev.what) - lastCheck[achiev.what]) * 1000 / deltaTime;
            if (delta >= achiev.amount) {
                completeAchievement(achiev);
            }
        }
        if (achiev.type === "owns") {
            const ownedItems = JSON.parse(localStorage.getItem("owned"));
            if (ownedItems[achiev.what] >= achiev.amount) {
                completeAchievement(achiev);
            }
        }
    }
    lastCheck = {
        bi: Number(localStorage.getItem("bi")),
        gay: Number(localStorage.getItem("gay")),
        trans: Number(localStorage.getItem("trans")),
        poly: Number(localStorage.getItem("poly")),
        timestamp: Date.now()
    };
}, 1000);