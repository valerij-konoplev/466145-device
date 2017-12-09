var carousel = document.getElementById("carousel");
var slides = 3;
// var speed = 14000; // 10 seconds
var link = document.querySelector(".feedback-open");
var popup = document.querySelector(".modal-feedback");
var close = popup.querySelector(".modal-close");
var form = popup.querySelector("form");
var textarea = popup.querySelector("textarea");
var feedbackName = popup.querySelector("#feedback-name");
var feedbackEmail = popup.querySelector("#feedback-email");
var storageName = localStorage.getItem("feedbackName");
var storageEmail = localStorage.getItem("feedbackEmail");
var mapLink = document.querySelector(".map-open");
var mapPopup = document.querySelector(".modal-map");
var mapClose = mapPopup.querySelector(".modal-close");
var tabsContainer = document.querySelector('.features-controls');
var tabsLinks = tabsContainer.querySelectorAll('.btn');
var tabsContents = document.querySelectorAll('.features-description');

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
  // var switcher = setInterval(function() {
  //   switchSlide();
  // }, speed);
  for (var i = 0; i < indicators.length; i++) {
    indicators[i].addEventListener("click", setSlide(i));
  }
}

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("hidden");
  popup.classList.add("modal-open");
  feedbackName.focus();
  if (storageEmail) {
    feedbackEmail.value = storageEmail;
    feedbackName.focus();
  }
  if (storageName) {
    feedbackName.value = storageName;
    feedbackEmail.focus();
  }
  if (storageEmail && storageName) {
    feedbackEmail.value = storageEmail;
    feedbackName.value = storageName;
    textarea.focus();
  }
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("hidden");
  popup.classList.remove("modal-error");
  popup.classList.remove("modal-open");
});

window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    if (!popup.classList.contains("hidden")) {
      popup.classList.add("hidden");
      popup.classList.remove("modal-error");
    }
  }
});

form.addEventListener("submit", function(evt) {
  if(!feedbackName.value || !feedbackEmail.value) {
    evt.preventDefault();
    // popup.classList.remove("modal-error");
    // void popup.offsetWidth;
    popup.classList.add("modal-error");
  } else {
    localStorage.setItem("feedbackEmail", feedbackEmail.value);
    localStorage.setItem("feedbackName", feedbackName.value);
  }
  if (!feedbackName.value) {
    feedbackName.classList.add("input-invalid");
  } else {
    feedbackName.classList.remove("input-invalid");
  }
  if (!feedbackEmail.value) {
    feedbackEmail.classList.add("input-invalid");
  } else {
    feedbackEmail.classList.remove("input-invalid");
  }
  if (!textarea.value) {
    textarea.classList.add("input-invalid");
  } else {
    textarea.classList.remove("input-invalid");
  }
});

mapLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.remove("hidden");
  mapPopup.classList.add("modal-open");
});

mapClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.add("hidden");
  mapPopup.classList.remove("modal-open");
});

// спрятать все таб контенты кроме первого
document.querySelectorAll('.features-description:not(:first-of-type)').forEach(function(tabContent) {
  tabContent.style.display = 'none';
});

// к каждому таб линку и таб контенту добавить одинаковый дата аттрибут
for (var i = 0; i < tabsLinks.length; i++) {
  tabsLinks[i].setAttribute('data-tab', i);
  tabsContents[i].setAttribute('data-tab', i);
}

// клик на табе
tabsContainer.onclick = function(e) {
  if (!e.target.classList.contains('btn')) return;
  // удалить со всех класс активного элемента
  tabsLinks.forEach(function(link) {
    link.classList.remove('active');
  });
  // пометить элемент как активный
  e.target.classList.add('active');
  // скрыть все таб контенты
  tabsContents.forEach(function(tabContent) {
    tabContent.style.display = 'none';
  });
  // сверить дата атрибуты, показать подходящий таб контент
  tabsContents.forEach(function(tabContent) {
    if (tabContent.dataset.tab === e.target.dataset.tab) {
      tabContent.style.display = 'block';
    }
  });
};
