//Feeedback modal
var feedbackLink = document.querySelector('.link-feedback');
var feedbackModal = document.querySelector('.modal-feedback');
var buttonClose = document.querySelector('.button-close');
var inputName = document.querySelector('.feedback-name-input');
var inputEmail = document.querySelector('.feedback-email-input');
var inputText = document.querySelector('.feedback-text-input');
var formFeedback = document.querySelector('.form-feedback');

var isStorageSupport = true;
var userName = '';
var userEmail = '';

try {
    userName = localStorage.getItem('name');
    userEmail = localStorage.getItem('email');
} catch (err) {
    isStorageSupport = false;
}

feedbackLink.addEventListener('click', function (evt) {
    evt.preventDefault();
    feedbackModal.classList.add('modal-show');
    if (userName && userEmail) {
        inputName.value = userName;
        inputEmail.value = userEmail;
        inputText.focus();
    } else if (userName && !userEmail) {
        inputName.value = userName;
        inputEmail.focus();
    } else if (!userName && userEmail) {
        inputName.focus();
    }
});

buttonClose.addEventListener('click', function (evt) {
    evt.preventDefault();
    feedbackModal.classList.remove('modal-show');
    feedbackModal.classList.remove('modal-error');
});

formFeedback.addEventListener('submit', function (evt) {
    if (!inputName.value || !inputEmail.value || !inputText.value) {
        evt.preventDefault();
        formFeedback.classList.remove('modal-error')
        feedbackModal.offsetWidth = feedbackModal.offsetWidth;
        formFeedback.classList.add('modal-error')
    } else {
        if (isStorageSupport) {
            localStorage.setItem('name', inputName.value);
            localStorage.setItem('email', inputEmail.value);
        }
    }
});

window.addEventListener('keydown', function (evt) {
    if (evt.keyCode === 27) {
        if (feedbackModal.classList.contains('modal-show')) {
            evt.preventDefault();
            feedbackModal.classList.remove('modal-show');
            feedbackModal.classList.remove('modal-error');
        }
        if (mapModal.classList.contains('modal-show')) {
            evt.preventDefault();
            mapModal.classList.remove('modal-show');
        }
    }
});

//Modal map
var mapLink = document.querySelector('.link-map');
var mapModal = document.querySelector('.modal-map');
var buttonCloseMap = document.querySelector('.button-close-map');

mapLink.addEventListener('click', function (evt) {
    evt.preventDefault();
    mapModal.classList.add('modal-show');
});

buttonCloseMap.addEventListener('click', function (evt) {
    evt.preventDefault();
    mapModal.classList.remove('modal-show');
});

//sliders
var sliderInputs = Array.from(document.querySelectorAll('.slider-input'));
var slides = Array.from(document.querySelectorAll('.slide'));

for (let i = 0; i < sliderInputs.length; i++) {
    sliderInputs[i].addEventListener('change', function () {
        for (var j = 0; j < slides.length; j++) {
            slides[j].classList.remove('slide-active')
        }
        slides[i].classList.add('slide-active');
    });
};

var servicesInputs = Array.from(document.querySelectorAll('.services-label > input'));
var servicesBtn = Array.from(document.querySelectorAll('.services-label > .link-button'));
var servicesSlides = Array.from(document.querySelectorAll('.services-info'));

for (let i = 0; i < servicesInputs.length; i++) {
    servicesInputs[i].addEventListener('change', function () {
        for (let j = 0; j < servicesSlides.length; j++) {
            servicesSlides[j].classList.remove('services-info-active');
            servicesBtn[j].classList.remove('services-button-active')
        };
        servicesSlides[i].classList.add('services-info-active');
        servicesBtn[i].classList.add('services-button-active');
    });
};