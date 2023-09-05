function updateCountdown() {
    let now = new Date().getTime();
    let timeCount = deadline - now;
    let days = Math.floor(timeCount / (1000 * 60 * 60 * 24));
    let hours = Math.floor((timeCount % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((timeCount % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((timeCount % (1000 * 60)) / 1000);
  
    document.getElementById('countdown-days').innerHTML = days;
    document.getElementById('countdown-hours').innerHTML = hours;
    document.getElementById('countdown-minutes').innerHTML = minutes;
    document.getElementById('countdown-seconds').innerHTML = seconds;
  }
  
let deadline = new Date("sep 07, 2023 20:00:00").getTime();
  
setInterval(updateCountdown, 1000);
  
updateCountdown();


document.querySelector('.confirm__window-button').addEventListener('click', () => {
  setTimeout(function() {
  const modal = document.querySelector('.celebration');
  modal.classList.remove('hidden-celebr');
}, 5000)
})



document.querySelector('.celebration__promo-button')
.addEventListener('click', (event) => {
  event.preventDefault();
  const modal = document.querySelector('.celebration');
  modal.classList.add('hidden-celebr');
})