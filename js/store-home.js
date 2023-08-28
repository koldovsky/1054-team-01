import * as catalogue from './products-catalogue.js'

document.addEventListener('partialsLoaded', () => {
  const websiteLogo = document.querySelector('.websiteLogo')
  websiteLogo.style.cursor = 'pointer'
  websiteLogo.addEventListener('click', () => window.location.href = "index.html")
})

const productsArea = document.querySelector('.storehome__products-container')

function showAllProducts() {
  productsArea.innerHTML = ''
  for (const item of catalogue.products) {
    productsArea.innerHTML += `
      <div class="storehome__productcard">
          <a class="storehome__link" href="store-product.html?id=${item.code}">
          <figure class="storehome__figure">
              <img class="storehome__img" src=${item.images[0]} alt="Bottle of ${
      item.name
    }" />
              <figcaption class="storehome__caption">${item.name}</figcaption>
          </figure>
          </a>
          <p class="storehome__price"><span>${item.price + ',00'}</span> ${
      item.currency
    }</p>
          <button class="button storehome__button">Buy</button>
      </div>
    `
  }
}

showAllProducts()