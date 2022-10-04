const accordeonTitle = document.querySelectorAll('.accordeon-title');
const accordeonContent = document.querySelectorAll('.accordeon-content');
const accordeonArrow = document.querySelectorAll('.arrow');

for (let i = 0; i < accordeonTitle.length; i++) {
    const title = accordeonTitle[i];
    
    title.addEventListener('click', () => {
        const index = i;

        accordeonTitle[index].classList.toggle('active');
        accordeonContent[index].classList.toggle('active');
        accordeonItem[index].classList.toggle('active-item');
        accordeonArrow[index].classList.toggle('arrow-rotate');

        for (let f = 0; f < accordeonTitle.length; f++) {
            if(f !== i) {
                accordeonTitle[f].classList.remove('active');
                accordeonContent[f].classList.remove('active');
                accordeonItem[f].classList.remove('active');
                accordeonArrow[f].classList.remove('arrow-rotate');
            }               
        }

    })
}

const accordeonTitle2 = document.querySelectorAll('.accordeon-title2');
const accordeonContent2 = document.querySelectorAll('.accordeon-content2');
const accordeonArrow2 = document.querySelectorAll('.arrow2');
const liAccordeon2 = document.querySelectorAll('.li__accordeon2')

for (let i = 0; i < accordeonTitle2.length; i++) {
    const title2 = accordeonTitle2[i];
    
    title2.addEventListener('click', () => {
        const index = i;

        accordeonTitle2[index].classList.toggle('active');
        accordeonContent2[index].classList.toggle('active');
        accordeonArrow2[index].classList.toggle('arrow-rotate');


        for (let f = 0; f < accordeonTitle2.length; f++) {
            if(f !== i) {
                accordeonTitle2[f].classList.remove('active');
                accordeonContent2[f].classList.remove('active');
                accordeonArrow2[f].classList.remove('arrow-rotate');
            }               
        }

    })
}

const accordeonTitle3 = document.querySelectorAll('.accordeon-title3');
const accordeonContent3 = document.querySelectorAll('.accordeon-content3');
const accordeonArrow3 = document.querySelectorAll('.arrow3');
const heroButton3 = document.querySelectorAll('.hero__button')

for (let i = 0; i < accordeonTitle3.length; i++) {
    const title3 = accordeonTitle3[i];
    
    title3.addEventListener('click', () => {
        const index = i;

        accordeonTitle3[index].classList.toggle('active');
        accordeonContent3[index].classList.toggle('active');
        accordeonArrow3[index].classList.toggle('arrow-rotate3');
        heroButton3[index].classList.toggle('btn-didi-hero');


        for (let f = 0; f < accordeonTitle3.length; f++) {
            if(f !== i) {
                accordeonTitle3[f].classList.remove('active');
                accordeonContent3[f].classList.remove('active');
                accordeonArrow3[f].classList.remove('arrow-rotate3');
                heroButton3[f].classList.remove('btn-didi-hero');
            }               
        }

    })
}

const accordeonTitle4 = document.querySelectorAll('.accordeon-title4');
const accordeonContent4 = document.querySelectorAll('.accordeon-content4');
const accordeonArrow4 = document.querySelectorAll('.arrow4');
const accordeonItem = document.querySelectorAll('.item');

for (let i = 0; i < accordeonTitle4.length; i++) {
    const item = accordeonItem[i];
    
    item.addEventListener('click', () => {
        const index = i;

        accordeonTitle4[index].classList.toggle('active');
        accordeonContent4[index].classList.toggle('active');
        accordeonArrow4[index].classList.toggle('arrow-rotate');

        for (let f = 0; f < accordeonTitle4.length; f++) {
            if(f !== i) {
                accordeonTitle4[f].classList.remove('active');
                accordeonContent4[f].classList.remove('active');
                accordeonItem[f].classList.remove('active');
                accordeonArrow4[f].classList.remove('arrow-rotate');
            }               
        }

    })
}