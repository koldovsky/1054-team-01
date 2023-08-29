const addBtns = document.querySelectorAll('.add-btn');

addBtns.forEach(btn => {
    btn.addEventListener('click', () => {
    const cartBadge = document.querySelector('.cart-badge');
    cartBadge.classList.remove('hidden');
    });
});