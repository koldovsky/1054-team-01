const slides = [
    '<div><img src="img/best-deals-cabernet.jpeg" alt="Cabernet"></div>',
    '<div><img src="img/best-deals-pinotgrigio.jpeg" alt="Pinot Grigio"></div>',
    '<div><img src="img/best-deals-sauvignonblanc.jpeg" alt="Sauvignon Blanc"></div>',
    '<div><img src="img/best-deals-syrah.jpeg" alt="Syrah"></div>',
];

let currentSlide = 0;

const slideContainer = document.querySelector('.best-deals__carousel-slide');

function renderSlide() {
    slideContainer.innerHTML = slides[currentSlide];
    if (window.matchMedia('(min-height: 242px)').matches) {
        const secondSlide = currentSlide + 1 >= slides.length ? 0 : currentSlide + 1;
        slideContainer.innerHTML += slides[secondSlide];
        if (window.matchMedia('(min-width: 1024px)').matches) {
            const thirdSlide = secondSlide + 1 >= slides.length ? 0 : secondSlide + 1;
            slideContainer.innerHTML += slides[thirdSlide];
        }
    }
}

function nextSlide() {
    currentSlide = currentSlide + 1 >= slides.length ? 0 : currentSlide + 1;
    renderSlide();
}

renderSlide();

const nextButton = document.querySelector('.best-deals__carousel-btn-next');
nextButton.addEventListener('click', nextSlide);

function prevSlide() {
    currentSlide = currentSlide - 1 < 0 ? slides.length - 1 : currentSlide - 1;
    renderSlide();
}

const prevButton = document.querySelector('.best-deals__carousel-btn-prev');
prevButton.addEventListener('click', prevSlide);

window.addEventListener('resize', renderSlide);