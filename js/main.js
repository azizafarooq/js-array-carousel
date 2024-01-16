const images = ['./img/01.webp', './img/02.webp', './img/03.webp', './img/04.webp', './img/05.webp'];

const carouselContainer = document.querySelector('.carousel-container');
const carousel = document.querySelector('.carousel');
const buttonUp = document.querySelector('.button-up');
const buttonDown = document.querySelector('.button-down');

let currentIndex = 0;


for (let i = 0; i < images.length; i++) {
  const img = document.createElement('img');
  img.src = images[i];
  img.alt = `Image ${i + 1}`;
  img.classList.add('carousel-img');

  if (i === currentIndex) {
    img.classList.add('active');
  }

  carousel.appendChild(img);
}

const carouselImgs = document.querySelectorAll('.carousel-img');


buttonUp.addEventListener('click', function () {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  updateActiveImage();
})


buttonDown.addEventListener('click', function () {
  currentIndex = (currentIndex + 1) % images.length;
  updateActiveImage();
})


