import * as catalogue from './products-catalogue.js'

document.addEventListener('partialsLoaded', () => {
  const websiteLogo = document.querySelector('.websiteLogo')
  websiteLogo.style.cursor = 'pointer'
  websiteLogo.addEventListener('click', () => window.location.href = "index.html")
})

const productsArea = document.querySelector('.storehome__products-container');
const pageButtonsContainer = document.querySelector('.storehome__pageindex-container');

function updatePageButtons() {
  const pageCountSelect = document.querySelector('.storehome__pagestyle-selector');
  const productsPerPage = parseInt(pageCountSelect.value);
  
  const totalProducts = catalogue.products.length;

  pageButtonsContainer.innerHTML = '';

  const pageCount = Math.ceil(totalProducts / productsPerPage);

  for (let i = 1; i <= pageCount; i++) {
    const button = document.createElement('span');
    button.classList.add('button', 'storehome__pageindex');
    button.textContent = i;
    pageButtonsContainer.appendChild(button);

    button.addEventListener('click', () => {
      showProductsByPage(i, productsPerPage);
    });
  }

  // showAllProducts(1, productsPerPage);
  showProductsByPage(1, productsPerPage);
}

function showProductsByPage(currentPage, productsPerPage) {
  productsArea.innerHTML = '';

  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;

  for (let i = startIndex; i < endIndex && i < catalogue.products.length; i++) {
    const item = catalogue.products[i];
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
    `;
  }
}

// function showAllProducts() {
//   productsArea.innerHTML = ''
//   for (const item of catalogue.products) {
//     productsArea.innerHTML += `
//       <div class="storehome__productcard">
//           <a class="storehome__link" href="store-product.html?id=${item.code}">
//           <figure class="storehome__figure">
//               <img class="storehome__img" src=${item.images[0]} alt="Bottle of ${
//       item.name
//     }" />
//               <figcaption class="storehome__caption">${item.name}</figcaption>
//           </figure>
//           </a>
//           <p class="storehome__price"><span>${item.price + ',00'}</span> ${
//       item.currency
//     }</p>
//           <button class="button storehome__button">Buy</button>
//       </div>
//     `
//   }
// }

// showAllProducts()

const pageCountSelect = document.querySelector('.storehome__pagestyle-selector');
pageCountSelect.addEventListener('change', updatePageButtons);

updatePageButtons();