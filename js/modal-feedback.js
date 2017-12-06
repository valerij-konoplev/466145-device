var link = document.querySelector(".feedback-open");
var popup = document.querySelector(".modal-feedback");
var close = popup.querySelector(".modal-close");
var form = popup.querySelector("form");
var textarea = popup.querySelector("textarea");
var feedbackName = popup.querySelector("#feedback-name");
var feedbackEmail = popup.querySelector("#feedback-email");
var storageName = localStorage.getItem("feedbackName");
var storageEmail = localStorage.getItem("feedbackEmail");

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
