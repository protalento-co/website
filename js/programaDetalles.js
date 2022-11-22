const boxes = document.querySelectorAll('.details__icons');




var marker = document.querySelector("#marker");
var markerBackground = document.querySelector("#markerBackground");


function indicator(e) {
  markerBackground.classList.add('hide-markerBackground');
  marker.style.left = e.offsetLeft + "px";
  marker.style.width = e.offsetWidth + "px";

  /* console.log(marker); */
}

boxes.forEach((link) => {
  link.addEventListener("click", (e) => {
    indicator(e.target);
  });
});


boxes.forEach((item, idx) => {

  item.id = `boxes-${idx}`

  item.addEventListener('click', () => {


    // change box
    boxes.forEach((item, id) => {
      /* item.classList.remove('bg-blueLight'); */
      change(id + 1, 'none');
    });

    // 
    /* if (item.id === `boxes-${idx}`) item.classList.add('bg-blueLight'); */

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

  document.querySelectorAll(".details--card__content").forEach(a => a.style.display = "none");
  document.querySelectorAll("#dots").forEach(a => a.style.display = "block");
  document.querySelectorAll(".box__li").forEach(a => a.classList.remove('bg-blueLighter'));
}


