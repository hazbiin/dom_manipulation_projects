// variables
const accordion = document.getElementsByClassName('content-container');
// console.log(accordion);

for(let i = 0; i < accordion.length; i++){
    accordion[i].addEventListener('click',function(){
        // console.log(this);
        // accordion[i].classList.toggle('active');
        this.classList.toggle('active');
    });
}