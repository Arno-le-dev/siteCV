const items = document.querySelectorAll('div.projet');
const nbSlide = items.length;
const suivant = document.querySelector('.right');
const precedent = document.querySelector('.left');
let count =0; 

const item_slideshow = document.querySelectorAll('div.rond_slideshow')

function slideSuivante() {
    items[count].classList.remove('active');
    item_slideshow[count].classList.remove('active');
    if (count < nbSlide - 1){
        count++;
    }else {
        count=0;
    }
    items[count].classList.add('active'); 
    item_slideshow[count].classList.add('active');
}
suivant.addEventListener('click', slideSuivante)

function slidePrecedente() {
    items[count].classList.remove('active');
    item_slideshow[count].classList.remove('active');

    if (count > 0){
        count--;
    }else {
        count=nbSlide - 1;
    }
    items[count].classList.add('active'); 
    item_slideshow[count].classList.add('active');
}

precedent.addEventListener('click', slidePrecedente);

