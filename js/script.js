'use strict';

const burger = document.querySelector('.header__burger');
const burgerOpen = document.querySelector('.burger__button--open');
const burgerClose = document.querySelector('.burger__button--close');
const menuMobile = document.querySelector('.nav__mobile');
const body = document.querySelector('body');

// Mobile menu

burger.addEventListener('click', function (e) {
  e.preventDefault();
  burgerOpen.classList.toggle('visually-hidden');
  burgerClose.classList.toggle('visually-hidden');
  menuMobile.classList.toggle('visually-hidden');
  body.classList.toggle('lock');
});
