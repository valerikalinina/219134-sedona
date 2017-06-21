'use-strict'

var close = document.querySelector('.button-close');
var open = document.querySelector('.button-open');
var subMenu = document.querySelector('.main-nav');
var btnForm = document.querySelector('.btn__form');
var popup = document.querySelector('.modal-content--js');
var overlay = document.querySelector('.overlay');
var form = document.querySelector('.feedback-form');
var userName = document.querySelector('#user-data_1');
var userSurname = document.querySelector('#user-data_2');
var userNameTwo = document.querySelector('#user-data_3');
var userNumber = document.querySelector('#user-telephone');
var userMail = document.querySelector('#user-mail');
//mobile-menu

open.addEventListener('click', function(event) {
  if (subMenu.classList.contains('main-nav--open-js')) {
    event.preventDefault();
    subMenu.classList.remove('main-nav--open-js');
    subMenu.classList.add('main-nav--close');
  } else {
    subMenu.classList.remove('main-nav--close-js');
    subMenu.classList.add('main-nav--open-js');
  }
});


close.addEventListener('click', function(event) {
  if (subMenu.classList.contains('main-nav--open-js')) {
    event.preventDefault();
    subMenu.classList.remove('main-nav--open-js');
    subMenu.classList.add('main-nav--close-js');
  }
});

// form

function closePopup(event) {
  if (popup.classList.contains('modal-content')) {
    popup.classList.remove('modal-content');
    popup.classList.add('modal-content--js');
    overlay.classList.remove('overlay--js');
  }
};

form.addEventListener('submit', function(event) {
  if (!userName.value || !userSurname.value || !userNametwo.value || !userMail.value || !userNumber.value) {
    event.preventDefault();
    popup.classList.remove('modal-content--js');
    popup.classList.add('modalcontent--error');
  } else {
    localStorage.setItem('feedback-userName', userName.value);
    localStorage.setItem('feedback-userMail', userMail.value);
  }
});

btnForm.addEventListener('click', function(event) {
  event.preventDefault();
  overlay.classList.remove('overlay');
  overlay.classList.add('overlay--js');
  popup.classList.remove('modal-content--js');
  popup.classList.add('modal-content');
});

window.addEventListener('keydown', function(event) {
  if (event.keyCode === 27) {
    closePopup();
  }
});
overlay.addEventListener('click', function(event) {
  closePopup();
});
