const menuArrows = document.querySelectorAll('.burger');
menuArrows.forEach(burger => {
    burger.addEventListener('click', () => {
        burger.classList.toggle('active');
    });
});