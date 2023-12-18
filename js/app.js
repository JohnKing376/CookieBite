const label = document.getElementById('label');
const content = document.querySelector('.content');
const spanny = document.querySelector('.spanny');

label.addEventListener('click', ()=> {
    spanny.classList.toggle('rotateSpanny')
    content.classList.toggle('showContent');
})