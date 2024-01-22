const images = ['./img/01.webp', './img/02.webp', './img/03.webp', './img/04.webp', './img/05.webp'];
const slidesContainer = document.querySelector('.slides');
const previous = document.getElementById('previous');
const next = document.getElementById("next");
let currentImage= 0;

previous.addEventListener('click', showPreviousImage);
next.addEventListener('click', showNextImage);

function showImage(index) {
  const imagesElements = document.querySelectorAll('.image');
  for (let i = 0; i < imagesElements.length; i++) {
      const img = imagesElements[i];
      if (i === index) {
          img.classList.add('active');
      } else {
          img.classList.remove('active');
      }
  }
}

function showPreviousImage() {
  currentImage--;
  if (currentImage < 0) {
      currentImage = images.length - 1;
  }
  showImage(currentImage);
}

function showNextImage() {
  currentImage++;
  if (currentImage >= images.length) {
      currentImage = 0;
  }
  showImage(currentImage);
}


for (let i = 0; i < images.length; i++){
  console.log(images[i]);
  let img = document.createElement('img');
  img.classList.add('image');
  img.src = images[i];
  img.alt = `Image ${i + 1}`
  slidesContainer.appendChild(img);

  console.log(img); 
}

showImage(currentImage);




