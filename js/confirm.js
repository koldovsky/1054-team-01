// window.onload = function () {
//     const modal = document.querySelector('.confirm'); 
//     modal.classList.remove('hidden'); 
// }
  // Закрийте модальне вікно при натисканні на кнопку закриття або поза ним
//   closeButton.onclick = function () {
//     const closeButton = document.getElementsByClassName('confirm__window-button button')[0]; // Отримуємо кнопку закриття
//     modal.style.display = 'none'; // Встановлюємо стиль "display" в "none" для закриття модального вікна
// }

// document.addEventListener("DOMContentLoaded", () => {
//     const modal = document.querySelector('confirm'); 
//     modal.classList.add('hidden'); 
// });
document.querySelector('.confirm')
.addEventListener("DOMContentLoaded", () => {
    const modal = document.querySelector('.confirm'); 
    modal.classList.remove('confirm'); 
});

