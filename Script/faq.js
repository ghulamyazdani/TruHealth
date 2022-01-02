
//FAQ SECTION

const toggleBtn = document.querySelectorAll('.toggle-btn');
const faqAns = document.querySelectorAll('.faq-answer');
const faqQuestion = document.querySelectorAll('.faq-question--text');

for (let i = 0; i < toggleBtn.length; i++) {
    console.log('click');
    toggleBtn[i].onclick = function () {

        for (let j = 0; j < toggleBtn.length; j++) {
            if (toggleBtn[j] != this) {
                toggleBtn[j].classList.remove('rotated');
                faqAns[j].classList.add("hidden");
                faqQuestion[j].classList.remove("active");
            }
        }
        faqAns[i].classList.toggle("hidden");
        toggleBtn[i].classList.toggle("rotated");
        faqQuestion[i].classList.toggle("active");
    };
}
