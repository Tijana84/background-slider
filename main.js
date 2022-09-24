const body = document.body;
const slides = document.querySelectorAll('.slide');
const leftBtn = document.querySelector('#left');
const rightBtn = document.querySelector('#right');

let activeSlide = 0;

function bodyBg() {
  body.style.backgroundImage = slides[activeSlide].style.backgroundImage;
}
bodyBg();

function currentSlide() {
  slides.forEach(slide => {
    slide.classList.remove('active');
  })
  slides[activeSlide].classList.add('active');
}

rightBtn.addEventListener('click', () => {
  activeSlide++;

  if (activeSlide > slides.length - 1) {
    activeSlide = 0;
  }

  bodyBg();
  currentSlide();
});

leftBtn.addEventListener('click', () => {
  activeSlide--;

  if (activeSlide < 0) {
    activeSlide = slides.length - 1;
  }

  bodyBg();
  currentSlide();
});
