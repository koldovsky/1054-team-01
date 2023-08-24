import * as catalogue from './products-catalogue.js';

const slides = catalogue.products
    .filter(product => product.bestDeal)
    .map(product => `
        <div class="best-deals__product product">
        <a href="store-product.html"><img src="${product.images[0]}" alt="${product.name}"></a>
        <a href="store-product.html" class="product__name">${product.name}</a>
        <p class="product__price">${product.price.toFixed(2)}${product.currency}</p>
        <a class="button" href="#"><strong>Add to cart</strong></a>
        </div>
    `);

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