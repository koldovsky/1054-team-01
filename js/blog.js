const slides = [
  '<div> No blog posts yet... </div>',
  '<div> Grapevine cultivation in Europe is diverse, spanning various climates and regions. </div>',
  '<div> European vineyards produce a wide range of grape varieties, resulting in diverse wine types. </div>',
  '<div> The terroir of each region influences grape quality and flavor profiles. </div>',
  '<div> Prominent European wine-producing countries include France, Italy, Spain, and Germany. </div>',
  '<div> European vineyards often have centuries-old traditions, contributing to wine heritage. </div>',
];

let currentSlide = 0;

const slideContainer = document.querySelector('.blog__slider-container');

function renderSlide() {
  slideContainer.innerHTML = slides[currentSlide];
  renderIndicators();
}

function nextSlide() {
  currentSlide = currentSlide + 1 >= slides.length ? 0 : currentSlide + 1;
  renderSlide();
}

renderSlide();

const nextButton = document.querySelector('.blog__slider-button-next');
nextButton.addEventListener('click', nextSlide);

function prevSlide() {
  currentSlide = currentSlide - 1 < 0 ? slides.length - 1 : currentSlide - 1;
  renderSlide();
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
      currentSlide = index;
      renderSlide();
      renderIndicators(slides, currentSlide);
    });
  });
}

renderIndicators();