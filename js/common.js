var feedbackLink = document.querySelector(".link-feedback");
var feedbackModal = document.querySelector(".modal-feedback");
var buttonClose = document.querySelector(".button-close");
var inputName = document.querySelector(".feedback-name-input");
var inputEmail = document.querySelector(".feedback-email-input");
var formFeedback = document.querySelector(".form-feedback");

var mapLink = document.querySelector('.link-map');
var mapModal = document.querySelector('.modal-map');
var buttonCloseMap = document.querySelector('.button-close-map');

var sliderInputs = Array.from(document.querySelectorAll(".slider-input"));
var slides = document.querySelectorAll(".slide");

    for(var i = 0; i < sliderInputs; i++) {
        sliderInputs[i].addEventListener("change", function(){
            console.log(true)
        })
    };

var isStorageSupport = true;
var storage = "";

try {
    storage = localStorage.getItem("login");
  } catch (err) {
    isStorageSupport = false;
  }

feedbackLink.addEventListener("click", function (evt) {
    evt.preventDefault();
    feedbackModal.classList.add("modal-show");
    
    if(storage) {
        inputName.value = storage;
        inputEmail.focus();
    }else{
        inputName.focus();
    }    
});

mapLink.addEventListener("click", function (evt) {
    evt.preventDefault();
    mapModal.classList.add("modal-show");   
});

buttonClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    feedbackModal.classList.remove("modal-show");
    feedbackModal.classList.remove("modal-error");
});

buttonCloseMap.addEventListener("click", function (evt) {
    evt.preventDefault();
    mapModal.classList.remove("modal-show");
});

formFeedback.addEventListener("submit", function (evt) {
    if (!inputName.value){
        evt.preventDefault();
        formFeedback.classList.remove("modal-error")
        loginPopup.offsetWidth = loginPopup.offsetWidth;
        formFeedback.classList.add("modal-error")
    }else{
        if(isStorageSupport){
            localStorage.setItem("login", inputName.value);
        }
    }
});

window.addEventListener("keydown", function(evt){
    if (evt.keyCode === 27) {
        if (feedbackModal.classList.contains("modal-show")) {
          evt.preventDefault();
          feedbackModal.classList.remove("modal-show");
          feedbackModal.classList.remove("modal-error");
        }
        if (mapModal.classList.contains("modal-show")) {
            evt.preventDefault();
            mapModal.classList.remove("modal-show");
          }
      }
});

