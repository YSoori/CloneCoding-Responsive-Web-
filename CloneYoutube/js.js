const down = document.querySelector('.down');
const mainText = document.querySelector('.mainText');

down.addEventListener('click', ()=>{
    down.classList.toggle('clicked');
    mainText.classList.toggle('clamp');
})