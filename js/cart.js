const orderForm = document.querySelector('.cart');

document.querySelector('.cart-badge').addEventListener('click', () => {
    orderForm.classList.remove('cart__hidden');
    document.querySelector('.cart-badge').classList.add('hidden');
});

document.querySelector('.cart__header-close').addEventListener('click', () => {
    orderForm.classList.add('cart__hidden');
    document.querySelector('.cart-badge').classList.remove('hidden');
});