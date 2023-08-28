const prizes = [
    {
        id: 1,
        name: 'The Best Craft Wine in California',
        year: '1956',
        description: 'Our Sauvignon Blanc wine was entered for the first time in a competition and immediately received this award. Experts noted the amazing aroma and luxurious taste of our wine. This award has become an important impetus for the development of our company.',
        image: 'img/awards-fine-wines-logo.svg',
    },
    {
        id: 2,
        name: 'The Most Intense Red Wine',
        year: '1992',
        description: 'In 1992, in conditions of very tough competition from winemakers in our state, our wine managed to take first place. It was preferred by most critics of Orange Wine Fund. They noted the bright and rich taste of our Pinot Noir, its ruby color, and intense aroma.',
        image: 'img/awards-orange-wine-fund-logo.svg',
    },
    {
        id: 3,
        name: "Year's Best Chardonnay",
        year: '2016',
        description: 'Our Chardonnay got a gold medal at the Wine Corporation Annual Contest. Our wine scored the highest number of points - 99 out of 100 possible, and was rated by experts and critics as “amazing”. By the way, a few bottles of Chardonnay produced in 2016 are still on sale.',
        image: 'img/awards-the-wine-corporation-logo.svg',
    },
    {
        id: 4,
        name: 'The Best American Riesling',
        year: '2022',
        description: 'In 2022, our wine was presented in this competition among all US wine producers for the first time. And right off the bat, it was able to get the highest award. Experts rated our Riesling wine at 97 points out of 100 possible, noting its excellent taste.',
        image: 'img/awards-wine-finds-logo.svg',
    },
]

renderPrize(prizes)

function renderPrize(prizes) {
    const prizesContainer = document.querySelector('.awards__prizes__list');
    prizesContainer.innerHTML = '';
    for (const prize of prizes) {
        prizesContainer.innerHTML +=
        `<li class="awards__fine-wines">
        <img class="awards__fine-wines__logo" src="${prize.image}" alt="Fine Wines logo">
        <p class="awards__award-name">${prize.name}</p>
        <p class="awards__year-take-award">${prize.year}</p>
        <p class="awards__text-about-award">${prize.description}</p>
        </li>`;
    }

}