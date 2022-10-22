const accordeonTitle = document.querySelectorAll('.accordeon-title');
const accordeonContent = document.querySelectorAll('.accordeon-content');
const accordeonArrow = document.querySelectorAll('.arrow');
const accordeonItemFaq = document.querySelectorAll('.item-faq');
const postulationForm = document.querySelectorAll('.postulation_form');


for (let i = 0; i < accordeonTitle.length; i++) {
  const itemFaq = accordeonItemFaq[i];

  itemFaq.addEventListener('click', () => {
    const index = i;

    accordeonTitle[index].classList.toggle('active');
    accordeonContent[index].style.display = "inline";
    postulationForm[index].style.display = "inline";
    accordeonContent[index].classList.toggle('active');
    accordeonArrow[index].classList.toggle('arrow-rotate');

    const subject = document.querySelector('#subject');


    var insertedContent = document.querySelector(".insertedContent");
    if (insertedContent) {
      insertedContent.parentNode.removeChild(insertedContent);
    }
    /* el.insertAdjacentHTML('afterend', "<span class ='insertedContent'>foo bar</span>"); */
    subject.insertAdjacentHTML('afterend', `<div class="external-form">
        <div
          class="calendly-inline-widget"
          data-url="https://calendly.com/protalento/entrevista-candidato?hide_gdpr_banner=1&text_color=20212f&primary_color=f1af4d"
          style="height: 630px; width: 95%"
        ></div>
        <script
          type="text/javascript"
          src="https://assets.calendly.com/assets/external/widget.js"
          async
        ></script>
      </div>`);

    for (let f = 0; f < accordeonTitle.length; f++) {
      if (f !== i) {
        /* document.location.reload(); */
        accordeonContent[f].style.display = "none";
        /* postulationForm[f].style.display = "none"; */
        accordeonTitle[f].classList.remove('active');
        accordeonContent[f].classList.remove('active');
        accordeonItemFaq[f].classList.remove('active');
        accordeonArrow[f].classList.remove('arrow-rotate');
      }
    }

  })
}