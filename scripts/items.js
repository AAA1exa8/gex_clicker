const storeItems = [
    {
        id: "0-lemon-bar",
        name: "Lemon bar",
        iconPath: "/public/images/icons/Lemon-bar.png",
        description: "Increases <img src='/public/images/sibex-static.webp' alt='bi'> per click by 1",
        max: 4,
        minPoly: 0,
        maxPoly: -1,
        requires: [],
        cost: {
            bi: 10,
            gay: 0,
            trans: 0,
            poly: 0,
            baseMul: 0,
            baseIncrease: 5,
            polyMul: 0,
            polyIncrease: 0,
        },
        gain: {
            type: "click-increase-add",
            currency: "bi",
            increase: 1
        }
    },
    {
        id: "0-quality-lemons",
        name: "Quality lemons",
        iconPath: "/public/images/icons/Lemon.png",
        description: "Doubles <img src='/public/images/sibex-static.webp' alt='bi'> per click",
        max: 1,
        minPoly: 0,
        maxPoly: -1,
        requires: ["0-lemon-bar"],
        cost: {
            bi: 100,
            gay: 0,
            trans: 0,
            poly: 0,
            baseMul: 0,
            baseIncrease: 0,
            polyMul: 0,
            polyIncrease: 25,
        },
        gain: {
            type: "click-increase-mul",
            currency: "bi",
            multiplier: 2
        }
    },
    {
        id: "0-lemon-bar-tray",
        name: "Lemon bar tray",
        iconPath: "/public/images/icons/Lemon-bar-tray.jpg",
        description: "Increases <img src='/public/images/sibex-static.webp' alt='bi'> per click by 5",
        max: 18,
        minPoly: 0,
        maxPoly: -1,
        requires: ["0-quality-lemons"],
        cost: {
            bi: 50,
            gay: 0,
            trans: 0,
            poly: 0,
            baseMul: 1,
            baseIncrease: 0,
            polyMul: 0,
            polyIncrease: 0,
        },
        gain: {
            type: "click-increase-add",
            currency: "bi",
            increase: 5
        }
    },
    {
        id: "0-village-chef",
        name: "Village chef",
        iconPath: "/public/images/icons/Gus.png",
        description: "Produces 5 <img src='/public/images/sibex-static.webp' alt='bi'> every 10s",
        max: 5,
        minPoly: 0,
        maxPoly: -1,
        requires: ["0-quality-lemons"],
        cost: {
            bi: 100,
            gay: 0,
            trans: 0,
            poly: 0,
            baseMul: 1,
            baseIncrease: 0,
            polyMul: 0,
            polyIncrease: 0,
        },
        gain: {
            type: "generator",
            currency: "bi",
            amount: 5,
            frequency: 10_000 //10s
        }
    },
    {
        id: "0-stonewall",
        name: "Stand up against oppression",
        iconPath: "/public/images/icons/Stonewall.jpg",
        description: "Unlocks <img src='/public/images/saygex-static.webp' alt='gay'>",
        max: 1,
        minPoly: 0,
        maxPoly: -1,
        requires: [],
        cost: {
            bi: 500,
            gay: 0,
            trans: 0,
            poly: 0,
            baseMul: 0,
            baseIncrease: 0,
            polyMul: 0,
            polyIncrease: 0,
        },
        gain: {
            type: "click-increase-add",
            currency: "gay",
            increase: 1
        }
    }
];