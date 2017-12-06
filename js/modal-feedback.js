var link = document.querySelector(".feedback-open");
var popup = document.querySelector(".modal-feedback");
var close = popup.querySelector(".modal-close");
var form = popup.querySelector("form");
var name = popup.querySelector("#feedback-name");
var email = popup.querySelector("#feedback-email");
var storage = localStorage.getItem("email");

var textarea = popup.querySelector("textarea");

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("hidden");
  popup.classList.add("modal-open");
  name.focus();
  if (storage) {
    email.value = storage;
    name.focus();
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
  if(!name.value || !email.value) {
    evt.preventDefault();
    popup.classList.add("modal-error");
  } else {
    localStorage.setItem("email", email.value);
  }
});
