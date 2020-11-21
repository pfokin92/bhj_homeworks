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
    activateElements((activeImage < sliderMass.length-1) ? activeImage ++ : activeImage = 0);
}


function showPrevImg() {
    deactivateElements();
    activateElements((activeImage>0)? activeImage--: activeImage=dotsMass.length-1);
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
