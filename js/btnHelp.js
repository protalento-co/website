const widget = document.querySelector('.contact-widget');
const button = document.querySelector('.contact-widget > .button');
const linksBox = document.querySelector('.contact-widget > .links-container');

button.addEventListener('click', () => {
  linksBox.classList.toggle('hidden');
  if (linksBox.classList.contains('hidden')) {
    widget.style.bottom = '1rem';
  } else {
    widget.style.bottom = '3rem';
  }
});
