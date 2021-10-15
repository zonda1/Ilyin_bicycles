let iconBurger = document.querySelector('.menu__burger');
let navMain = document.querySelector('.nav');
let formTel = document.querySelector('input[name="tel"]');
let sendForm = document.querySelector('.form');
let mainScreen = document.querySelector('.main-screen');
let mainPage = document.querySelector('.page');

window.onload = function () {
  if (iconBurger != null && navMain != null) {
    iconBurger.classList.remove('no-js');
    navMain.classList.remove('no-js');
    iconBurger.addEventListener('click', function () {
      iconBurger.classList.toggle('active');
      navMain.classList.toggle('active');
      mainPage.classList.toggle('page--modal-open');
    });
  } else alert('нет элементов menu__burger или nav');

  if (formTel != null) {
    formTel.addEventListener('input', validPhone);
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
  let re = /^\d[\d\(\)\ -]{4,14}\d$/;
  let myPhone = formTel.value;
  let valid = re.test(myPhone);

  if (valid) {
    return valid;
  }
  return false;
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
