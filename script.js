document.addEventListener('DOMContentLoaded', function () {
  const slideContainer = document.querySelector('.slide-container');
  const slides = document.querySelectorAll('.slide');
  const prevButton = document.querySelector('.prev-button');
  const nextButton = document.querySelector('.next-button');

  const slideWidth = slides[0].clientWidth;
  let slideIndex = 0;

  prevButton.addEventListener('click', () => {
    slideIndex--;
    if (slideIndex < 0) {
      slideIndex = slides.length - 1;
    }
    updateSlidePosition();
  });

  nextButton.addEventListener('click', () => {
    slideIndex++;
    if (slideIndex >= slides.length) {
      slideIndex = 0;
    }
    updateSlidePosition();
  });

  function updateSlidePosition() {
    const translateXValue = -slideWidth * slideIndex;
    slideContainer.style.transform = `translateX(${translateXValue}px)`;
  }
});