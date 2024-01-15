const slides = ['01.webp', '02.webp', '03.webp', '04.webp', '05.webp', '06.webp'];
  const totalSlides = slides.length;
  let currentSlideIndex = 0;

  const carouselImg = document.querySelector('.carousel-img');
  const buttonUp = document.querySelector('.button-up');
  const buttonDown = document.querySelector('.button-down');

  const slidesEl = document.querySelectorAll('.carousel-img');

  for (let i = 0; i < imgElements.length; i++) {
    const slide = `./img/${slides[i]}`;
    slidesEl[i] = slide;
  }


