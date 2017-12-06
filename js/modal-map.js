var mapLink = document.querySelector(".map-open");
var mapPopup = document.querySelector(".modal-map");
var mapClose = mapPopup.querySelector(".modal-close");

mapLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.remove("hidden");
  mapPopup.classList.add("modal-open");
});

mapClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.add("hidden");
  maPopup.classList.remove("modal-open");
});
