let toggle = document.getElementById('toggle');
let nav = document.querySelector('.nav');

toggle.addEventListener('click', () => {
  nav.classList.toggle('active');
});
