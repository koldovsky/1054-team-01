const burger = document.querySelector('.burger');
const body = document.body;
const links = document.querySelectorAll('.header__link');
burger.addEventListener('click', () => {
  burger.classList.toggle('active');
  body.classList.toggle('disable__scrollbar');
});
links.forEach((link) => {
  link.addEventListener('click', () => {
    burger.classList.remove('active');
    body.classList.remove('disable__scrollbar');
  });
});
