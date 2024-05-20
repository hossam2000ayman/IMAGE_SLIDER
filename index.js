//IMAGE SLIDER

const slides = document.querySelectorAll(".slider img");
let slideIndex = 0;
let intervalID = null;

// when DOMContent is loaded then display the IMAGE
document.addEventListener("DOMContentLoaded", initializeSlider);

function initializeSlider() {
  if (slides.length > 0) {
    slides[slideIndex].classList.add("displaySlide");
    // use to clear the function when go to preious slide
    // because the timer is still running for the nextSLide
    intervalID = setInterval(nextSlide, 5000);
  }
}

function showSlide(slideIndex) {
  if (slideIndex >= slides.length) {
    //in case of next
    slideIndex = 0;
  } else if (slideIndex < 0) {
    //in case of previous
    slideIndex = slides.length - 1;
  }
  slides.forEach((slide) => {
    slide.classList.remove("displaySlide");
  });
  slides[slideIndex].classList.add("displaySlide");
}

function prevSlide() {
  // use to clear the function when go to preious slide
  // because the timer is still running for the nextSLide by intervalID relate to nextSlide setInterval
  clearInterval(intervalID);
  slideIndex--;
  showSlide(slideIndex);
}

function nextSlide() {
  slideIndex++;
  showSlide(slideIndex);
}
