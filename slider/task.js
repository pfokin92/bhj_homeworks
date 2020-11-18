const sliderMass = Array.from(document.querySelectorAll('.slider__item'));
const dotsMass = Array.from(document.querySelectorAll('.slider__dot'));
const prev = document.querySelector('.slider__arrow_prev');
const next = document.querySelector('.slider__arrow_next');
let activeImage = 0;



function deactivateElements() {
    sliderMass[activeImage].classList.remove("slider__item_active");
    dotsMass[activeImage].classList.remove("slider__dot_active");
}


function activateElements() {
    sliderMass[activeImage].classList.add("slider__item_active");
    dotsMass[activeImage].classList.add("slider__dot_active");
}



function showNextImg() {
    deactivateElements();
    if(activeImage < sliderMass.length-1){
        activeImage ++;
    } else {
        activeImage = 0;
    }
    activateElements(activeImage);
}


function showPrevImg() {
    deactivateElements();
    if(activeImage>0){
        activeImage --;
    } else {
        activeImage = dotsMass.length;
    }
    activateElements();
}

prev.onclick = showPrevImg;
next.onclick = showNextImg;


function dotAction() {
    deactivateElements();
    activeImage = dotsMass.indexOf(this);
    activateElements();
}


for(let dots of dotsMass){
    dots.onclick = dotAction;
}

activateElements()
