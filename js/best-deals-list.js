import * as catalogue from './products-catalogue.js'


renderProduct(catalogue.products);

function renderProduct(products) {
    const productsContainer = document.querySelector('.best-deals__products');
    productsContainer.innerHTML = '';
    for (const product of products) {
        if (product.bestDeal) {
            productsContainer.innerHTML +=
                `<div class="best-deals__product product">
                <div class="best-deals__product product">
                    <a href="store-product.html"><img src="${product.images[0]}" alt="${product.name}"></img></a>
                    <a href="store-product.html" class="product__name">${product.name}</a>
                    <p class="product__price">${product.price.toFixed(2)}${product.currency}</p>
                    <a class="button" href="#"><strong>Add to cart</strong></a>
                </div>
            </div>`;
        }
    }
}

