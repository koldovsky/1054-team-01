import * as catalogue from './products-catalogue.js'

const slides = []
let currentSlide = 0
const nextButton = document.querySelector('.best-deals__arrowL')
nextButton.addEventListener('click', nextSlide)
const prevButton = document.querySelector('.best-deals__arrowR')
prevButton.addEventListener('click', prevSlide)

renderProduct(catalogue.products)

function renderProduct(products) {
    const productsContainer = document.querySelector('.best-deals__products')
    productsContainer.innerHTML = ''
    for (let i = 0; i < products.length; i++) {
        if (products[i].bestDeal) {
            const content =
                `<div class="best-deals__product product">
            <div class="best-deals__product product">
                <a href="store-product.html?id=${products[i].code}"><img src="${products[i].images[0]}" alt="${products[i].name}"></img></a>
                <a href="store-product.html" class="product__name">${products[i].name}</a>
                <p class="product__price">${products[i].price.toFixed(2)}${products[i].currency}</p>
                <a class="button" href="#"><strong>Add to cart</strong></a>
            </div>
        </div>`
            slides.push(content)
        }
    }
    renderSlide()
}

function renderSlide() {
    const productsContainer = document.querySelector('.best-deals__products');
    productsContainer.innerHTML = slides[currentSlide];

    if (window.matchMedia('(min-width: 768px)').matches) {
        const secondSlide = currentSlide + 1 >= slides.length ? 0 : currentSlide + 1;
        productsContainer.innerHTML += slides[secondSlide];
    }

    if (window.matchMedia('(min-width: 1024px)').matches) {
        const thirdSlide = currentSlide + 2 >= slides.length ? currentSlide + 2 - slides.length : currentSlide + 2;
        productsContainer.innerHTML += slides[thirdSlide];
    }
}


function prevSlide() {
    currentSlide = currentSlide + 1 >= slides.length ? 0 : currentSlide + 1
    renderSlide()
}


function nextSlide() {
    currentSlide = currentSlide - 1 < 0 ? slides.length - 1 : currentSlide - 1
    renderSlide()
}


window.addEventListener('resize', renderProduct)