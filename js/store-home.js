import * as catalogue from './products-catalogue.js'

const productsArea = document.querySelector('.storehome__products-container')

for (const item of catalogue.products) {
  productsArea.innerHTML += `
    <div class="storehome__productcard">
        <a class="storehome__link" id=${item.name} href="store-product.html">
        <figure class="storehome__figure">
            <img class="storehome__img" src=${item.images[0]} alt="Bottle of ${
    item.name
  }" />
            <figcaption class="storehome__caption" src=${
              item.name
            }></figcaption>
        </figure>
        </a>
        <p class="storehome__price"><span>${item.price + ',00'}</span> ${
    item.currency
  }</p>
        <button class="button storehome__button">Buy</button>
    </div>
    `
}