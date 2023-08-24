const products = [
    {
        id: 1,
        name: "Cabernet",
        price: 17,
        currency: "USD",
        image: 'img/best-deals-cabernet.jpeg',
    },
    {
        id: 2,
        name: "Pinot Grigio",
        price: 10,
        currency: "USD",
        image: 'img/best-deals-pinotgrigio.jpeg',
    },
    {
        id: 3,
        name: "Sauvignon Blanc",
        price: 12,
        currency: "USD",
        image: 'img/best-deals-sauvignonblanc.jpeg',
    },
    {
        id: 4,
        name: "Syrah",
        price: 13,
        currency: "USD",
        image: 'img/best-deals-syrah.jpeg',
    },
];

renderProduct(products);

function renderProduct(products) {
    const productsContainer = document.querySelector('.products__list');
    productsContainer.innerHTML = '';
    for (const product of products) {
        productsContainer.innerHTML +=
            `<div class="<div class="best-deals__product product">">
                <div class="best-deals__product product">
                    <a href="store-product.html"><img src="${product.image}" alt="${product.name}"></img></a>
                    <a href="store-product.html" class="product__name">${product.name}</a>
                    <p class="product__price">${product.price.toFixed(2)} ${product.currency}</p>
                    <a class="button" href="#"><strong>Add to cart</strong></a>
                </div>
            </div>`;
    }
}