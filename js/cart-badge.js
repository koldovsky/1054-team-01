// Коментарі буде видалено. 

// const addBtns = document.querySelectorAll('.add-btn');
// let badgeCount = document.querySelector('.cart-badge__counter');

// addBtns.forEach(btn => {
//     btn.addEventListener('click', () => {
//     const cartBadge = document.querySelector('.cart-badge');
//     cartBadge.classList.remove('hidden');
//     let counter = 0;
//     counter++;
//     badgeCount = counter;
//     });
// });

// const addBtns = document.querySelectorAll('.add-btn');
// const cartBadge = document.querySelector('.cart-badge');
// let itemCount = 0; // Початково кількість товарів в корзині - 0
// const cartCounter = document.querySelector('.cart-badge__counter');
// cartCounter.textContent = itemCount;

// addBtns.forEach(btn => {
//     btn.addEventListener('click', () => { // Збільшуємо лічильник при кожному кліку
//         updateCartBadge(); // Викликаємо функцію для оновлення значка корзини
//         return itemCount++;
//     });
// }); 

// function updateCartBadge() {
//     if (itemCount > 0) {
//         cartBadge.classList.remove('hidden');
//     } else {
//         cartBadge.classList.add('hidden');
//     }
// }

const addBtns = document.querySelectorAll('.add-btn');
const cartBadge = document.querySelector('.cart-badge');
let itemCount = 0; // Початково кількість товарів в корзині - 0
const cartCounter = document.querySelector('.cart-badge__counter');

addBtns.forEach(btn => {
    btn.addEventListener('click', () => { // Збільшуємо лічильник при кожному кліку
        itemCount++; // Збільшуємо лічильник
        updateCartBadge(); // Викликаємо функцію для оновлення значка корзини
    });
}); 

function updateCartBadge() {
    cartCounter.textContent = itemCount; // Оновлюємо вміст лічильника
    if (itemCount > 0) {
        cartBadge.classList.remove('hidden');
    } else {
        cartBadge.classList.add('hidden');
    }
}
