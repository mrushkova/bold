'use strict';

const body = document.querySelector('body');
const burger = document.querySelector('.header__burger');
const burgerOpen = document.querySelector('.burger__button--open');
const burgerClose = document.querySelector('.burger__button--close');
const menuMobile = document.querySelector('.nav__mobile');
const form = document.querySelector('.contact__form');
const submit = document.querySelector('.contact__confirm');
const navMenu = document.querySelector('.nav');

console.log(navMenu);

// Mobile menu
burger.addEventListener('click', function (e) {
  e.preventDefault();
  burgerOpen.classList.toggle('visually-hidden');
  burgerClose.classList.toggle('visually-hidden');
  menuMobile.classList.toggle('visually-hidden');
  body.classList.toggle('lock');
});

// Submit confirmation
form.addEventListener('submit', function (e) {
  e.preventDefault();
  submit.classList.remove('visually-hidden');
  form.reset();
  setTimeout(() => {
    submit.classList.add('visually-hidden');
  }, 2000);
});

// Smooth scrolling
navMenu.addEventListener('click', function (e) {
  e.preventDefault();
  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({
      behavior: 'smooth',
    });
  }
});
