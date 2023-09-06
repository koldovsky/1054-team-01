const slides = [
  '<div> Grape cultivation in Europe is incredibly diverse, spanning a wide range of climates and regions. </div>',
  '<div> European vineyards cultivate numerous grape varieties, resulting in a rich diversity of wine styles. </div>',
  '<div> The unique terroir of each region plays a significant role in influencing grape quality and flavor profiles. </div>',
  '<div> Prominent European countries known for wine production include France, Italy, Spain, and Germany. </div>',
  '<div> Many European vineyards have a rich heritage with centuries-old traditions contributing to their winemaking legacy. </div>',
];

let currentSlide = 0;
let autoScrollInterval = 3000; 
let autoScrollTimer;
let resumeAutoScrollTimer;

const slideContainer = document.querySelector('.blog__slider-container');

function renderSlide() {
  slideContainer.innerHTML = slides[currentSlide];
  renderIndicators();
}

function nextSlide() {
  stopAutoScroll(); 
  currentSlide = currentSlide + 1 >= slides.length ? 0 : currentSlide + 1;
  renderSlide();
  resumeAutoScroll(); 
}

const nextButton = document.querySelector('.blog__slider-button-next');
nextButton.addEventListener('click', nextSlide);

function prevSlide() {
  stopAutoScroll(); 
  currentSlide = currentSlide - 1 < 0 ? slides.length - 1 : currentSlide - 1;
  renderSlide();
  resumeAutoScroll(); 
}

const prevButton = document.querySelector('.blog__slider-button-prev');
prevButton.addEventListener('click', prevSlide);

window.addEventListener('resize', renderSlide);

function renderIndicators() {
  const indicatorsContainer = document.querySelector('.blog__slider-indicators');
  indicatorsContainer.innerHTML = '';
  for (let i = 0; i < slides.length; i++) {
    indicatorsContainer.innerHTML += `<button class="blog__slider-indicator ${i === currentSlide ? 'blog__slider-indicator--active' : ''}"></button>`;
  }
  const indicators = document.querySelectorAll('.blog__slider-indicator');
  indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => {
      stopAutoScroll(); 
      currentSlide = index;
      renderSlide();
      renderIndicators(slides, currentSlide);
      resumeAutoScroll(); 
    });
  });
}

function startAutoScroll() {
  autoScrollTimer = setInterval(nextSlide, autoScrollInterval);
}

function stopAutoScroll() {
  clearInterval(autoScrollTimer);
  clearTimeout(resumeAutoScrollTimer); 
}

function resumeAutoScroll() {
  clearTimeout(resumeAutoScrollTimer); 
  resumeAutoScrollTimer = setTimeout(startAutoScroll, 10000); 
}

startAutoScroll(); 