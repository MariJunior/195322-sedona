var searchButton = document.querySelector(".reserv__btn");
var popupForm = document.querySelector(".reserv-modal");

if (searchButton && popupForm) {
  searchButton.addEventListener("click", function(evt) {
    evt.preventDefault();
    popupForm.classList.toggle("reserv-modal--show");
    popupForm.classList.toggle("reserv-modal--hide");
  });
}

