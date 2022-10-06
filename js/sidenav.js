let toggle = document.getElementById('toggle');
let toggle1 = document.getElementById('toggle1');
let nav = document.querySelector('.nav');
let didiNav = document.querySelector('.nav__didi');
let whiteLogo = document.getElementById('white__logo');
let blueLogo = document.getElementById('blue__logo');


toggle.addEventListener('click', () => {
  nav.classList.toggle('active');
  blueLogo.classList.toggle('d-none');
  whiteLogo.classList.toggle('d-none');
});

toggle1.addEventListener('click', () => {
  nav.classList.toggle('active');
  blueLogo.classList.toggle('d-none');
  whiteLogo.classList.toggle('d-none');

});