let iconBurger = document.querySelector('.menu__burger');
let navMain = document.querySelector('.nav');
let formTel = document.querySelector('input[name="tel"]');
let sendForm = document.querySelector('.form');
let mainScreen = document.querySelector('.main-screen');
let mainPage = document.querySelector('.page');
let button = document.querySelector('.button');
let menu = document.querySelector('.menu');
let header = document.querySelector('.main-header');
let re = /^\d[\d\(\)\ -]{4,14}\d$/;

header.classList.remove('no-js');

window.onload = function () {
  if (iconBurger != null && navMain != null) {

    iconBurger.classList.remove('no-js');
    navMain.classList.remove('no-js');
    iconBurger.addEventListener('click', function () {
      menu.classList.toggle('active');
      iconBurger.classList.toggle('active');
      navMain.classList.toggle('active');
      mainPage.classList.toggle('page--modal-open');
    });
  } else alert('нет элементов menu__burger или nav');

  if (formTel != null) {
    return true;
  } else {
    alert('нет элемента для ввода номера телефона');
  };

  if (sendForm != null) {
    return true;
  } else {
    alert('нет элемента form');
  }
}

// Validation

function validPhone() {
  if (!validate(re, formTel.value)) {
    isInValid(formTel);
    return false;
  } else {
    isValid(formTel);
    return true;
  }
}

function validate(regex, inp) {
  return regex.test(inp);
}

function isValid(inp) {
  inp.classList.remove('is-invalid');
  inp.classList.add('is-valid');
}

function isInValid(inp) {
  inp.classList.add('is-invalid');
}


// Scroll to the anchor

document.querySelectorAll('.nav a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (evt) {
    evt.preventDefault();
    iconBurger.classList.remove('active');
    navMain.classList.remove('active');
    mainPage.classList.remove('page--modal-open');
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});
