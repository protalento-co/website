const boxes = document.querySelectorAll('.details__icons');

boxes.forEach((item, idx) => {

  item.id = `boxes-${idx}`

  item.addEventListener('click', () => {

    // change box
    boxes.forEach((item, id) => {
      item.classList.remove('bg-blueLight');
      change(id + 1, 'none');
    });

    // 
    if (item.id === `boxes-${idx}`) item.classList.add('bg-blueLight');

    change(idx + 1, '');
  });

  change(idx + 2, 'none');
});

// re-construccion
function change(number, display) {
  const grupo = document.querySelectorAll(`.group-${number}`);

  grupo.forEach((item) => {
    item.style.display = display;
  });
}
