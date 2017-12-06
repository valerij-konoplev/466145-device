var navLink = document.querySelector(".shop-block-catalog-btn");
var navPopup = document.querySelector(".shop-block-inner");

navLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  navPopup.classList.toggle("hidden");
});
