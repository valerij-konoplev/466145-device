var carousel = document.getElementById("carousel");
var slides = 3;
var speed = 14000; // 10 seconds

function carouselHide(num) {
  indicators[num].setAttribute("data-state", "");
  slides[num].setAttribute("data-state", "");
  slides[num].classList.add("hidden");
}

function carouselShow(num) {
  indicators[num].checked = true;
  indicators[num].setAttribute("data-state", "active");
  slides[num].setAttribute("data-state", "active");
  slides[num].classList.remove("hidden");
}

function setSlide(slide) {
  return function() {
    // Reset all slides
    for (var i = 0; i < indicators.length; i++) {
      indicators[i].setAttribute("data-state", "");
      slides[i].setAttribute("data-state", "");
      carouselHide(i);
    }
    // Set defined slide as active
    indicators[slide].setAttribute("data-state", "active");
    slides[slide].setAttribute("data-state", "active");
    carouselShow(slide);
    // Stop the auto-switcher
    clearInterval(switcher);
  };
}

function switchSlide() {
  var nextSlide = 0;
  // Reset all slides
  for (var i = 0; i < indicators.length; i++) {
    // If current slide is active & NOT equal to last slide then increment nextSlide
    if (
      indicators[i].getAttribute("data-state") == "active" &&
      i != indicators.length - 1
    ) {
      nextSlide = i + 1;
    }
    // Remove all active states & hide
    carouselHide(i);
  }
  // Set next slide as active & show the next slide
  carouselShow(nextSlide);
}

if (carousel) {
  var slides = carousel.querySelectorAll(".main-slide");
  var indicators = carousel.querySelectorAll(".main-slide-btn");
  var switcher = setInterval(function() {
    switchSlide();
  }, speed);
  for (var i = 0; i < indicators.length; i++) {
    indicators[i].addEventListener("click", setSlide(i));
  }
}
