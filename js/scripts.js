(function () {
  var searchButton = document.querySelector(".reserv__btn");
  var popupSection = document.querySelector(".reserv-modal");

  var form = popupSection.querySelector(".reserv-modal__form");
  var formFields = popupSection.querySelectorAll(".reserv-modal__input");
  var adults = popupSection.querySelector("[name=adults]");
  var childrens = popupSection.querySelector("[name=children]");

  var isStorageSupport = true;
  var storageAdult = "";
  var storageChildren = "";

  try {
    storageAdult = localStorage.getItem("adults");
    storageChildren = localStorage.getItem("children");
  } catch (err) {
    isStorageSupport = false;
  }

  popupSection.classList.add("reserv-modal--hide");

  searchButton.addEventListener("click", function(evt) {
    evt.preventDefault();
    popupSection.classList.toggle("reserv-modal--show");
    popupSection.classList.toggle("reserv-modal--hide");
    if (popupSection.classList.contains("reserv-modal--show")) {
      if (storageAdult && storageChildren) {
        adults.value = storageAdult;
        childrens.value = storageChildren;
      }
      popupSection.querySelector("[name=arrival_date]").focus();
    } else {
      popupSection.classList.remove("reserv-modal--error");
    };
    return;
  });

  form.addEventListener("submit", function(evt) {
    for(var i = 0, len = formFields.length; i < len; i++) {
      if(!formFields[i].value) {
        evt.preventDefault();
        popupSection.classList.remove("reserv-modal--error");
        popupSection.offsetWidth = popupSection.offsetWidth;
        popupSection.classList.add("reserv-modal--error");
        formFields[i].focus();
      } else {
        if (isStorageSupport) {
        localStorage.setItem("adults", adults.value);
        localStorage.setItem("children", childrens.value);
        }
      }
    };
    return;
  });

  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (popupSection.classList.contains("reserv-modal--show")) {
        popupSection.classList.remove("reserv-modal--show");
        popupSection.classList.remove("reserv-modal--error");
        popupSection.classList.add("reserv-modal--hide");
      }
    }
    return;
  });
})();
