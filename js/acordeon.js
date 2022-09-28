const accordeonTitle = document.querySelectorAll('.accordeon-title');
const accordeonContent = document.querySelectorAll('.accordeon-content');
const accordeonArrow = document.querySelectorAll('.arrow');

for (let i = 0; i < accordeonTitle.length; i++) {
    const title = accordeonTitle[i];
    
    title.addEventListener('click', () => {
        const index = i;

        accordeonTitle[index].classList.toggle('active');
        accordeonContent[index].classList.toggle('active');
        accordeonArrow[index].classList.toggle('arrow-rotate')

        for (let f = 0; f < accordeonTitle.length; f++) {
            if(f !== i) {
                accordeonTitle[f].classList.remove('active');
                accordeonContent[f].classList.remove('active');
                accordeonArrow[f].classList.remove('arrow-rotate');
            }               
        }

    })
}