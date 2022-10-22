const accordeonTitle = document.querySelectorAll('.accordeon-title');
const accordeonContent = document.querySelectorAll('.accordeon-content');
const accordeonArrow = document.querySelectorAll('.arrow');
const accordeonItemFaq = document.querySelectorAll('.item-faq');


for (let i = 0; i < accordeonTitle.length; i++) {
    const itemFaq = accordeonItemFaq[i];

    itemFaq.addEventListener('click', () => {
        const index = i;

        accordeonTitle[index].classList.toggle('active');
        accordeonContent[index].classList.toggle('active');
        accordeonArrow[index].classList.toggle('arrow-rotate');

        for (let f = 0; f < accordeonTitle.length; f++) {
            if (f !== i) {
                accordeonTitle[f].classList.remove('active');
                accordeonContent[f].classList.remove('active');
                accordeonItemFaq[f].classList.remove('active');
                accordeonArrow[f].classList.remove('arrow-rotate');
            }
        }

    })
}

const accordeonTitle2 = document.querySelectorAll('.accordeon-title2');
const accordeonContent2 = document.querySelectorAll('.accordeon-content2');
const accordeonArrow2 = document.querySelectorAll('.arrow2');
const accordeonItemNav = document.querySelectorAll('.item-nav');

for (let i = 0; i < accordeonTitle2.length; i++) {
    const itemNav = accordeonItemNav[i];

    itemNav.addEventListener('click', () => {
        const index = i;

        accordeonTitle2[index].classList.toggle('active');
        accordeonContent2[index].classList.toggle('active');
        accordeonContent2[index].classList.toggle('d-none');
        accordeonArrow2[index].classList.toggle('arrow-rotate');


        for (let f = 0; f < accordeonTitle2.length; f++) {
            if (f !== i) {
                accordeonTitle2[f].classList.remove('active');
                accordeonContent2[f].classList.remove('active');
                accordeonContent2[f].classList.add('d-none');
                accordeonItemNav[f].classList.remove('active');
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
            if (f !== i) {
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
        accordeonContent4[index].classList.toggle('d-none');
        accordeonArrow4[index].classList.toggle('arrow-rotate');

        for (let f = 0; f < accordeonTitle4.length; f++) {
            if (f !== i) {
                accordeonTitle4[f].classList.remove('active');
                accordeonContent4[f].classList.remove('active');
                accordeonContent4[f].classList.add('d-none');
                accordeonItem[f].classList.remove('active');
                accordeonArrow4[f].classList.remove('arrow-rotate');
            }
        }

    })
}

const accordeonTitle5 = document.querySelectorAll('.accordeon-title5');
const accordeonContent5 = document.querySelectorAll('.accordeon-content5');
const accordeonArrow5 = document.querySelectorAll('.arrow5');
const accordeonItemCards = document.querySelectorAll('.item-cards');



for (let i = 0; i < accordeonTitle5.length; i++) {
    const itemCards = accordeonItemCards[i];

    itemCards.addEventListener('click', () => {
        const index = i;

        accordeonTitle5[index].classList.toggle('active');
        accordeonContent5[index].classList.toggle('active');
        accordeonContent5[index].classList.toggle('d-none');
        accordeonArrow5[index].classList.toggle('arrow-rotate5');

        for (let f = 0; f < accordeonTitle5.length; f++) {
            if (f !== i) {
                accordeonTitle5[f].classList.remove('active');
                accordeonContent5[f].classList.remove('active');
                accordeonContent5[f].classList.add('d-none');
                accordeonItemCards[f].classList.remove('active');
                accordeonArrow5[f].classList.remove('arrow-rotate5');
            }
        }

    })
}


/* para forms embed */
const accordeonTitleForms = document.querySelectorAll('.accordeon-title--forms');
const accordeonContentForms = document.querySelectorAll('.accordeon-content--forms');
const accordeonArrowForms = document.querySelectorAll('.arrow');
const accordeonItemForms = document.querySelectorAll('.item--forms');


for (let i = 0; i < accordeonTitleForms.length; i++) {
    const itemForms = accordeonItemForms[i];

    itemForms.addEventListener('click', () => {
        const index = i;

        accordeonTitleForms[index].classList.toggle('active');
        accordeonContentForms[index].classList.toggle('active');
        accordeonArrowForms[index].classList.toggle('arrow');

        for (let f = 0; f < accordeonTitleForms.length; f++) {
            if (f !== i) {
                accordeonTitleForms[f].classList.remove('active');
                accordeonContentForms[f].classList.remove('active');
                accordeonItemForms[f].classList.remove('active');
                accordeonArrowForms[f].classList.remove('arrow');
            }
        }

    })
}
/* END para forms embed */