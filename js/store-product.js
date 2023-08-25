import * as catalogue from './products-catalogue.js'

document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const productIdentifier = urlParams.get('id');

    const selectedProduct = catalogue.products.find( (product) => product.code === productIdentifier)

document.querySelector('.storeproduct__image').src = selectedProduct.images[0]
document.querySelector('.storeproduct__image').alt = `Bottle of ${selectedProduct.name}`
document.querySelector('.storeproduct__thumbnail').src = selectedProduct.images[0]
document.querySelector('.storeproduct__thumbnail').alt = `Bottle of ${selectedProduct.name}`
if (selectedProduct.inStock) {
    document.querySelector('.storeproduct__instockindicator').innerHTML = 'In Stock'
} else {
    document.querySelector('.storeproduct__instockindicator').innerHTML = 'Sorry, out of Stock'
    document.querySelector('.storeproduct__instockindicator').style.color = 'orange'
}
document.querySelector('.storeproduct__productname').innerHTML = `${selectedProduct.name} (<span class="storeproduct__productnamecode">093049</span>)`
document.querySelector('.storeproduct__productcode').innerHTML = selectedProduct.code
document.querySelector('.storeproduct__price').innerHTML = selectedProduct.price.toFixed(2)
document.querySelector('.storeproduct__pricetext').innerHTML += ` ${selectedProduct.currency}`
document.querySelector('.storeproduct__description').innerHTML = selectedProduct.description

let quantity// needed to submit later to the Basket

document.querySelector('.storeproduct__form-uparrow').addEventListener('click', () => {
    quantity = Number(document.querySelector('.storeproduct__form-input').value) + 1
    document.querySelector('.storeproduct__form-input').value = quantity
    console.log(quantity)
})



document.querySelector('.storeproduct__form-downarrow').addEventListener('click', () => {
    quantity = Math.max(1, document.querySelector('.storeproduct__form-input').value - 1)
    document.querySelector('.storeproduct__form-input').value = quantity
    console.log(quantity)
})
})