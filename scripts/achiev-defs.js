const achievements = [
    {
        id: "0-gay-stonewall",
        name: "Liberation",
        iconPath: "/public/images/icons/StonewallToday.jpg",
        description: "Gain your first <img src='/public/images/saygex-static.webp' alt='gay'>",
        type: "currency",
        what: "gay",
        amount: 1
    },
    {
        id: "0-trans-crack",
        name: "Something cracked?",
        iconPath: "/public/images/icons/TransEgg.png",
        description: "Gain your first <img src='/public/images/sranstex-static.webp' alt='trans'>",
        type: "currency",
        what: "trans",
        amount: 1
    },
    {
        id: "meta-poly-first-relationship",
        name: "Monogamy Enjoyer",
        iconPath: "/public/images/icons/Monoamory.png",
        description: "Get your first relationship",
        type: "currency",
        what: "poly",
        amount: 1
    },
    {
        id: "meta-poly-second-relationship",
        name: "Exploring Polyamory",
        iconPath: "/public/images/solypex-static.webp",
        description: "Have 2 partners",
        type: "currency",
        what: "poly",
        amount: 2
    },
    {
        id: "meta-poly-second-relationship",
        name: "Polycule",
        iconPath: "/public/images/solypex-static.webp",
        description: "Have 5 partners",
        type: "currency",
        what: "poly",
        amount: 5
    },
    {
        id: "meta-poly-la-polycule",
        name: "Greater LA Polycule",
        iconPath: "/public/images/icons/LA-polycule.png",
        description: "Outgrow the greater LA polycule",
        type: "currency",
        what: "poly",
        amount: 150
    },
    {
        id: "meta-poly-reaching-seattle",
        name: "Reaching seattle",
        iconPath: "/public/images/icons/Space-needle.png",
        description: "Outgrow the LA polycule 10x",
        type: "currency",
        what: "poly",
        amount: 1_500
    },
    {
        id: "meta-poly-growing",
        name: "You have enough now, right?",
        iconPath: "/public/images/solypex-static.webp",
        description: "Have 10 000 partners",
        type: "currency",
        what: "poly",
        amount: 10_000
    },
    {
        id: "meta-poly-what",
        name: "(ㆆ _ ㆆ)",
        iconPath: "/public/images/solypex-static.webp",
        description: "Have 100 000 partners",
        type: "currency",
        what: "poly",
        amount: 100_000
    },
    {
        id: "meta-poly-entire-la",
        name: "ENTIRE LA?!",
        iconPath: "/public/images/icons/LA.webp",
        description: "Have the entirety of LA in your polycule",
        type: "currency",
        what: "poly",
        amount: 3_800_000
    },
    {
        id: "meta-poly-entire-ca",
        name: "...California? All of it?",
        iconPath: "/public/images/icons/California.png",
        description: "Have all of California in your polycule",
        type: "currency",
        what: "poly",
        amount: 40_000_000
    },
    {
        id: "meta-poly-entire-us",
        name: "Okay yeah, dominate the world ig",
        iconPath: "/public/images/icons/Transmerica.webp",
        description: "Have the entire US in your polycule",
        type: "currency",
        what: "poly",
        amount: 340_000_000
    },
    {
        id: "meta-poly-plurality",
        name: "Plurality",
        iconPath: "/public/images/icons/Pluralkit.webp",
        description: "Have a polycule larger than the world's population",
        type: "currency",
        what: "poly",
        amount: 8_000_000_000
    },
    {
        id: "0-bi-experienced",
        name: "Experienced Bisexual",
        iconPath: "/public/images/sibex-static.webp",
        description: "Have 500 <img src='/public/images/sibex-static.webp' alt='bi'>",
        type: "currency",
        what: "bi",
        amount: 500
    },
    {
        id: "0-bi-universal-partner",
        name: "Universal <s>donor</s> partner",
        iconPath: "/public/images/sibex-static.webp",
        description: "Have 1 000 <img src='/public/images/sibex-static.webp' alt='bi'>",
        type: "currency",
        what: "bi",
        amount: 1_000
    },
    {
        id: "0-bi-senior",
        name: "Senior Bisexual",
        iconPath: "/public/images/sibex-static.webp",
        description: "Have 10 000 <img src='/public/images/sibex-static.webp' alt='bi'>",
        type: "currency",
        what: "bi",
        amount: 10_000
    },
    {
        id: "0-bi-biest-sexual",
        name: "Biest Sexual",
        iconPath: "/public/images/sibex-static.webp",
        description: "Have 100 000 <img src='/public/images/sibex-static.webp' alt='bi'>",
        type: "currency",
        what: "bi",
        amount: 100_000
    },
    {
        id: "0-gay-home-of-sexual",
        name: "Home of Sexual",
        iconPath: "/public/images/saygex-static.webp",
        description: "Have 1 000 <img src='/public/images/saygex-static.webp' alt='gay'>",
        type: "currency",
        what: "gay",
        amount: 1_000
    },
    {
        id: "0-gay-pride-regular",
        name: "Regular at Pride",
        iconPath: "/public/images/saygex-static.webp",
        description: "Have 10 000 <img src='/public/images/saygex-static.webp' alt='gay'>",
        type: "currency",
        what: "gay",
        amount: 10_000
    },
    {
        id: "0-gay-alan-turing-legacy",
        name: "Legacy of Alan Turing",
        iconPath: "/public/images/icons/Turing.jpg",
        description: "Have 100 000 <img src='/public/images/saygex-static.webp' alt='gay'>",
        type: "currency",
        what: "gay",
        amount: 100_000
    },
    {
        id: "0-gay-invading-denmark",
        name: "Invading Denmark",
        iconPath: "/public/images/sonex-static.webp",
        description: "Have enough <img src='/public/images/saygex-static.webp' alt='gay'> to invade Denmark",
        type: "currency",
        what: "gay",
        amount: 6_000_000
    },
    {
        id: "0-trans-turning-frogs-gay",
        name: "Turning the frickin frogs gay",
        iconPath: "/public/images/icons/Alex-jones.jpeg",
        description: "Have 1 000 <img src='/public/images/sranstex-static.webp' alt='trans'>",
        type: "currency",
        what: "trans",
        amount: 1_000
    },
    {
        id: "0-trans-egg-cracker",
        name: "Eierschalensollbruchstellenverursacher",
        iconPath: "/public/images/icons/Egg-cracker.png",
        description: "Have 10 000 <img src='/public/images/sranstex-static.webp' alt='trans'>",
        type: "currency",
        what: "trans",
        amount: 10_000
    },
    {
        id: "0-trans-snip-snip",
        name: "Snip Snip",
        iconPath: "/public/images/icons/Scissors.png",
        description: "Have 100 000 <img src='/public/images/sranstex-static.webp' alt='trans'>",
        type: "currency",
        what: "trans",
        amount: 100_000
    },
    {
        id: "0-trans-cs-major",
        name: "CS Major",
        iconPath: "/public/images/icons/Ferris.png",
        description: "Have 1 000 000 <img src='/public/images/sranstex-static.webp' alt='trans'>",
        type: "currency",
        what: "trans",
        amount: 1_000_000
    },
];