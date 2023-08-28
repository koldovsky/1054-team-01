const slides = [
    '<p> “I really like to please myself with good wine with a rich taste. Therefore, from time to time, I order wine directly from the CaliWines winery. I also buy Chardonnay and Cabernet for family holidays. We are completely delighted with the amazing taste of these wines, which we want to enjoy endlessly.”</p>',
    '<p> “We were to hold a responsible event with a buffet table and wanted to surprise our guests with some local products. I recalled that we have the CaliWines winery in California and ordered 10 bottles of Chardonnay. Our guests were delighted and asked for the name of the producer!”</p>',
    '<p> “Our restaurant has been cooperating with this winery for over 10 years. We order the whole range of wines from them. We are completely satisfied with the quality of the wine supplied to us. And our guests often choose CaliWines from our wine menu.”</p>',
];

let currentSlide = 0;

const slideContainer = document.querySelector('.testimonials__list')
function renderSlide() {
    slideContainer.innerHTML = slides[currentSlide];
    renderIndicators();
}
renderIndicators

function nextSlide() {
    currentSlide = currentSlide + 1 >= slides.length ? 0 : currentSlide + 1;
    renderSlide();
}

const nextButton = document.querySelector('.testimonials__button-testimonials__button-next');
nextButton.addEventListener('click', nextSlide);

function prevSlide() {
    currentSlide = currentSlide - 1 < 0 ? slides.length - 1 : currentSlide - 1;
    renderSlide();
}
const prevButton = document.querySelector('.testimonials__button-testimonials__button-prev');
prevButton.addEventListener('click', prevSlide);

renderSlide();
window.addEventListener('resize', renderSlide);

function renderIndicators() {
    const indicatorsContainer = document.querySelector('.indicator-nav');
    indicatorsContainer.innerHTML = '';
    for (let i = 0; i < slides.length; i++) {
        indicatorsContainer.innerHTML += `<div class="indicator-nav__button ${i === currentSlide ? 'indicator-nav__button--active' : ''}"></div>`;
    }
    const indicators = document.querySelectorAll('.indicator-nav__button');
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            currentSlide = index;
            renderSlide();
            renderIndicators(slides, currentSlide);
        });
    });
}
renderIndicators();