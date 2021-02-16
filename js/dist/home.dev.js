"use strict";

bars = document.querySelector('header .bars');
nav = document.querySelector('header .nav'); // darks = document.querySelectorAll('.darken');

body = document.querySelector('body');
main = document.querySelector('main');
bars.addEventListener('click', function () {
  cond = nav.classList.toggle('show');

  if (cond) {
    bars.src = 'img/icon-close.svg';
    main.style.filter = 'brightness(30%)';
    body.style.overflow = 'hidden'; // darks.forEach(dark => {
    //     dark.style.filter = 'brightness(30%)';
    // })
  } else {
    bars.src = 'img/icon-hamburger.svg';
    main.style.filter = 'none';
    body.style.overflow = 'unset'; // darks.forEach(dark => {
    //     dark.style.filter = 'none';
    // })
  }
});