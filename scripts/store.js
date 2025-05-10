let footer = document.querySelector("footer");
const owned = JSON.parse(localStorage.getItem("owned"));
const poly = Number(localStorage.getItem("poly"));

function canBuyItemCurrency(item, currency) {
    if (item.cost[currency] === 0) {
        return true;
    }
    const mul =
        1 + item.cost.baseMul * owned[item.id] + item.cost.polyMul * poly;
    const add =
        item.cost.baseIncrease * owned[item.id] + item.cost.polyIncrease * poly;

    return localStorage.getItem(currency) >= item.cost[currency] * mul + add;
}

function canBuyItemCurrencies(item, currencies) {
    for (const currency of currencies) {
        if (!canBuyItemCurrency(item, currency)) {
            return false;
        }
    }

    return true;
}

function canBuyItem(item) {
    return canBuyItemCurrencies(item, ["bi", "gay", "trans", "poly"]);
}

function getItemCostHTML(item) {
    if (owned[item.id] === item.max) {
        return "";
    }
    let result = "";

    const mul = 1 + item.cost.baseMul * owned[item.id];
    const add = item.cost.baseIncrease * owned[item.id];
    if (item.cost.bi !== 0) {
        result += `<p class="item-cost ${canBuyItem(item) ? "" : "expensive"}" id="${item.id}-bi"><img src="/public/images/sibex-static.webp" alt="bi" class="currency-icon"> ${item.cost.bi * mul + add}</p>`;
    }
    if (item.cost.gay !== 0) {
        result += `<p class="item-cost ${canBuyItem(item) ? "" : "expensive"}" id="${item.id}-gay"><img src="/public/images/saygex-static.webp" alt="gay" class="currency-icon"> ${item.cost.gay * mul + add}</p>`;
    }
    if (item.cost.trans !== 0) {
        result += `<p class="item-cost ${canBuyItem(item) ? "" : "expensive"}" id="${item.id}-trans"><img src="/public/images/sranstex-static.webp" alt="trans" class="currency-icon"> ${item.cost.trans * mul + add}</p>`;
    }
    if (item.cost.poly !== 0) {
        result += `<p class="item-cost ${canBuyItem(item) ? "" : "expensive"}" id="${item.id}-poly"><img src="/public/images/solypex-static.webp" alt="trans" class="currency-icon"> ${item.cost.trans * mul + add}</p>`;
    }

    return result;
}

function refreshAvailability(gain = true) {
    for (let cost of document.querySelectorAll(
        gain ? ".item-cost.expensive" : ".item-cost:not(.expensive)",
    )) {
        const splitID = cost.id.split("-");
        const currency = splitID[splitID.length - 1];
        const itemID = cost.id.substring(
            0,
            cost.id.length - currency.length - 1,
        );
        const item = items.find(v => v.id === itemID);
        let icon = document.getElementById(`${item.id}-icon`);

        if (owned[itemID] === item.max) {
            cost.style.display = "none";
            icon.style.display = "none";
            continue;
        }

        if (gain && canBuyItemCurrency(item, currency)) {
            cost.classList.remove("expensive");
            icon.classList.remove("expensive");
        }
        if (!gain && !canBuyItemCurrency(item, currency)) {
            cost.classList.add("expensive");
            icon.classList.add("expensive");
        }

        const mul = 1 + item.cost.baseMul * owned[itemID];
        const add = item.cost.baseIncrease * owned[itemID];

        cost.textContent = item.cost[currency] * mul + add;
    }

    for (let buyButton of document.querySelectorAll("item-purchase")) {
        const item = items[buyButton.id];

        if (gain && canBuyItem(item)) {
            cost.classList.remove("disabled");
        }
        if (!gain && !canBuyItem(item)) {
            cost.classList.add("disabled");
        }
    }
}

function ownsRequirements(item) {
    for (const id of item.requires) {
        if (owned[id] === items.find((v) => v.max)) {
            return false;
        }
    }
    return true;
}

function explode(oldHeart, newHeart, text = "New currency unlocked!", refresh = false) {
    let overlay = document.querySelector("div.overlay");
    let overlayHeart = document.querySelector("img.explosion-subject");
    let overlayText = document.querySelector("p.explosion-text");

    overlay.style.display = "flex";
    overlayHeart.src = `/public/images/${oldHeart}-static.webp`;
    setTimeout(() => {
        overlay.classList.remove("hidden");
        overlay.animate([
            {
                opacity: "0%"
            },
            {
                opacity: "100%"
            }
        ], {
            duration: 500,
            easing: "linear"
        }).addEventListener("finish", () => {
            overlayHeart.classList.add("shaking");
            setTimeout(() => {
                overlayHeart.classList.remove("shaking");
                setTimeout(() => {
                    overlayHeart.classList.add("shaking-lots");
                }, 2500);
                overlayHeart.animate([
                    {
                        transform: "scale(1)"
                    },
                    {
                        transform: "scale(2)",
                        filter: "brightness(25)"
                    }
                ], {
                    duration: 3000,
                    easing: "ease-out"
                }).addEventListener("finish", () => {
                    overlayHeart.animate([
                        {
                            transform: "scale(2)",
                            filter: "brightness(25)"
                        },
                        {
                            transform: "scale(0)",
                            filter: "brightness(25)"
                        }
                    ], {
                        duration: 200,
                        easing: "linear"
                    }).addEventListener("finish", () => {
                        overlayHeart.src = `/public/images/${newHeart}-static.webp`;
                        overlayHeart.animate([
                            {
                                transform: "scale(0)",
                                filter: "brightness(25)"
                            },
                            {
                                transform: "scale(1.05)",
                                filter: "brightness(25)"
                            }
                        ], {
                            duration: 150,
                            easing: "linear"
                        }).addEventListener("finish", () => {
                            overlayHeart.animate([
                                {
                                    transform: "scale(1.05)",
                                    filter: "brightness(25)"

                                },
                                {
                                    transform: "scale(1)",
                                    filter: "brightness(1)"
                                }
                            ], {
                                duration: 1000,
                                easing: "linear"
                            }).addEventListener("finish", () => {
                                setTimeout(() => {
                                    overlayText.textContent = text;
                                    overlayText.classList.remove("hidden");
                                    setTimeout(() => {
                                        overlayHeart.src = `/public/images/${newHeart}.webp`;
                                    }, 1000);
                                    setTimeout(() => {
                                        overlayHeart.src = `/public/images/${newHeart}-static.webp`;
                                    }, 3100);
                                    setTimeout(() => {
                                        overlay.classList.add("hidden");
                                        overlayText.classList.add("hidden");
                                    }, 4000);
                                    setTimeout(() => {
                                        overlay.style.display = "none";
                                        if (refresh) {
                                            location.reload();
                                        }
                                    }, 4500);
                                }, 750);
                            });
                        });
                    });
                });
            }, 500);
        });
    }, 10);
}

for (const item of items) {
    if (item.minPoly > poly
        || (item.maxPoly < poly && item.maxPoly != -1)
        || (owned[item.id] === item.max && item.max === 1)) {
        continue;
    }

    let entry = document.createElement("article");
    entry.id = `${item.id}-container`;
    entry.classList.add("shop-item");
    for (const id of item.requires) {
        entry.classList.add(`requires-${id}`);
    }

    let inner = "";

    inner += `<div class="item-info-container">`;
    inner += `    <section class="item-info">`;
    inner += `        <img src="${item.iconPath}" alt="" class="item-image ${canBuyItem(item) ? "" : "expensive"}" id="${item.id}-icon">`;
    inner += `        <h2 class="item-name">${item.name}</h2>`;
    if (owned[item.id] === item.max) {
        inner += `<p id="${item.id}-owned">(MAX)</p>`;
    } else if (owned[item.id] !== 0) {
        inner += `<p id="${item.id}-owned">(${owned[item.id]})</p>`;
    } else {
        inner += `<p id="${item.id}-owned"></p>`;
    }
    inner += `    </section>`;
    inner += `    <section class="item-status">`;
    inner += getItemCostHTML(item);
    inner += `        <button class="item-purchase ${canBuyItem(item) ? "" : "disabled"}" id="${item.id}" ${owned[item.id] === item.max ? 'style="display: none"' : ""}><i class="fa-solid fa-cart-shopping"></i></button>`;
    inner += `    </section>`;
    inner += `</div>`;
    inner += `<p class="item-desc">${item.description}</p>`;

    entry.innerHTML = inner;

    if (!ownsRequirements(item)) {
        entry.style.display = "none";
    }

    footer.before(entry);
}

for (const purchase of document.querySelectorAll(".item-purchase")) {
    purchase.addEventListener("click", () => {
        const item = items.find((v) => v.id === purchase.id);
        if (!canBuyItem(item)) {
            return;
        }

        const ownedUI = document.getElementById(`${item.id}-owned`);
        changeCurrencyValue("bi", -item.cost.bi);
        changeCurrencyValue("gay", -item.cost.gay);
        changeCurrencyValue("trans", -item.cost.trans);
        changeCurrencyValue("poly", -item.cost.poly);
        refreshAvailability(false);
        owned[item.id] += 1;
        localStorage.setItem("owned", JSON.stringify(owned));
        ownedUI.textContent = `(${owned[item.id]})`;

        if (owned[item.id] === item.max) {
            ownedUI.textContent = "(MAX)";
            //purchase.classList.add("disabled");
            purchase.style.display = "none";

            let parent = document.getElementById(`${item.id}-container`);

            if (item.max === 1) {
                parent.style.display = "none";
            }

            for (let dependent of document.getElementsByClassName(
                `requires-${item.id}`,
            )) {
                if (
                    ownsRequirements(
                        items.find(v => v.id ===
                            dependent.id.substring(
                                0,
                                dependent.id.length - "-container".length,
                            )
                        ),
                    )
                ) {
                    dependent.style.display = "flex";
                }
                parent.after(dependent);
            }
        }

        switch (item.gain.type) {
            case "click-increase-add": {
                const old = Number(
                    localStorage.getItem(`${item.gain.currency}-per-click`),
                );
                localStorage.setItem(
                    `${item.gain.currency}-per-click`,
                    old + item.gain.increase,
                );
                if (old === 0) {
                    const oldHeart = localStorage.getItem("heart-image");
                    setHeartByCurrency(item.gain.currency);
                    const newHeart = localStorage.getItem("heart-image");
                    explode(oldHeart, newHeart);

                    let unlocked = JSON.parse(localStorage.getItem("unlocked-currencies"));
                    unlocked[item.gain.currency] = true;
                    localStorage.setItem("unlocked-currencies", JSON.stringify(unlocked));
                    changeCurrencyValue(item.gain.currency, 0); // Refresh currency bar
                }
                break;
            }

            case "click-increase-mul": {
                const old = Number(
                    localStorage.getItem(`${item.gain.currency}-per-click`),
                );
                localStorage.setItem(
                    `${item.gain.currency}-per-click`,
                    old * item.gain.multiplier,
                );
                break;
            }

            case "generator": {
                let gens = JSON.parse(
                    localStorage.getItem("currency-generators"),
                );
                if (gens[item.id] !== undefined) {
                    gens[item.id].count += 1;
                } else {
                    gens[item.id] = {
                        currency: item.gain.currency,
                        gain: item.gain.amount,
                        frequency: item.gain.frequency,
                        count: 1,
                    };
                    sessionStorage.setItem(`last-run-${item.id}`, Date.now());
                }
                localStorage.setItem(
                    "currency-generators",
                    JSON.stringify(gens),
                );
                break;
            }
            case "autoclick": {
                localStorage.setItem(
                    "autoclick-frequency",
                    item.gain.frequency,
                );
                break;
            }

            case "rebirth": {
                const prevPoly = Number(localStorage.getItem("poly"));
                changeCurrencyValue("poly", item.gain.amount);
                for (const currency of ["bi", "gay", "trans"]) {
                    setCurrencyValue(currency, 0);
                }
                clearOwned();
                setHeartByCurrency("bi");
                if (localStorage.getItem("poly") < 2) {
                    explode("solypex", "solypex", "Relationship acquired!", true);
                } else if (Number(localStorage.getItem("poly")) === 2) {
                    explode("solypex", "solypex", "Polyamory achieved!", true);
                } else if (Number(localStorage.getItem("poly")) >= 8_000_000_000 && prevPoly < 8_000_000_000) {
                    explode("solypex", "solypex", "Polycule includes everyone! ..or does it?", true);
                } else {
                    explode("solypex", "solypex", "Polycule expanded!", true);
                }
                localStorage.setItem("gay-class", item.gain.class);
                break;
            }

            default:
                console.error(
                    `Unknown item gain type! Type: ${item.gain.type}`,
                );
                break;
        }
    });
}

window.addEventListener("generatorgain", refreshAvailability);
