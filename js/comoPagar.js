
let hideText_btn = document.getElementById('hideText_btn');
let hideText = document.getElementById('hideText');

hideText_btn.addEventListener('click', toggleText);

function toggleText() {
    hideText.classList.toggle('show');

    if(hideText.classList.contains('show')) {
        hideText_btn.innerHTML = 'Ver Menos'
    } else {
        hideText_btn.innerHTML = 'Ver Mas'
    }
}


let hideText_btn2 = document.getElementById('hideText_btn2');
let hideText2 = document.getElementById('hideText2');

hideText_btn2.addEventListener('click', toggleText2);

function toggleText2() {
    hideText2.classList.toggle('show');

    if(hideText2.classList.contains('show')) {
        hideText_btn2.innerHTML = 'Ver Menos'
    } else {
        hideText_btn2.innerHTML = 'Ver Mas'
    }
}