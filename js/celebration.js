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


  setTimeout(function() {
    const modal = document.querySelector('.celebration');
    modal.classList.remove('hidden-celebr');
  }, 10000)

  document.querySelector('.celebration__promo-button')
  .addEventListener('click', () => {
    const modal = document.querySelector('.celebration');
    modal.classList.add('hidden-celebr');
  })