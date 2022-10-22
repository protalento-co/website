const accordeonTitle = document.querySelectorAll('.accordeon-title--forms');
const accordeonContent = document.querySelectorAll('.accordeon-content--forms');
const accordeonArrow = document.querySelectorAll('.arrow--forms');
const accordeonItemFaq = document.querySelectorAll('.item--forms');


for (let i = 0; i < accordeonTitle.length; i++) {
  const itemFaq = accordeonItemFaq[i];

  itemFaq.addEventListener('click', () => {
    const index = i;

    accordeonTitle[index].classList.toggle('active');
    accordeonContent[index].classList.toggle('active');
    accordeonArrow[index].classList.toggle('arrow-rotate--forms');

    for (let f = 0; f < accordeonTitle.length; f++) {
      if (f !== i) {
        accordeonTitle[f].classList.remove('active');
        accordeonContent[f].classList.remove('active');
        accordeonItemFaq[f].classList.remove('active');
        accordeonArrow[f].classList.remove('arrow-rotate--forms');
      }
    }

  })
}