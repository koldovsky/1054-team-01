const menuArrows = document.querySelectorAll('.burger');
const body = document.body 
menuArrows.forEach(burger => {
    burger.addEventListener('click', () => {
        burger.classList.toggle('active')
        body.classList.toggle('disable__scrollbar');
    });
});