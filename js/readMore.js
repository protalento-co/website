function readMore(company) {

    let dots = document.querySelector(`.paid__card[data-company="${company}"] #dots`);
    let moreText = document.querySelector(`.paid__card[data-company="${company}"] #more`);
    let btnText = document.querySelector(`.paid__card[data-company="${company}"] #myBtn`);


    /*  console.log(dots);
     console.log(moreText);
     console.log(btnText); */

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Ver más";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.innerHTML = "Ver menos";
        moreText.style.display = "inline";
    }
}