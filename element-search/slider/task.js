const sliderMass = document.querySelectorAll('.slider__item');
const dotsMass = document.querySelectorAll('.slider__dot');
const prev = document.querySelector('.slider__arrow_prev');
const next = document.querySelector('.slider__arrow_next');

function showNextImg(){
    for(let i=0; i<sliderMass.length; i++){
        if(sliderMass[i].className.includes('slider__item_active')){
            sliderMass[i].classList.remove('slider__item_active');
            dotsMass[i].classList.remove('slider__dot_active');
            if(i === sliderMass.length-1){
                dotsMass[0].classList.add('slider__dot_active');
                return sliderMass[0].classList.add('slider__item_active');
            }
            dotsMass[i+1].classList.add('slider__dot_active');
            return sliderMass[i+1].classList.add('slider__item_active');
        }
    }

}

function showPrevImg(){
    for(let i=0; i<sliderMass.length; i++){
        if(sliderMass[i].className.includes('slider__item_active')){
            sliderMass[i].classList.remove('slider__item_active');
            dotsMass[i].classList.remove('slider__dot_active');
            if(i === 0){
                dotsMass[sliderMass.length-1].classList.add('slider__dot_active');
                return sliderMass[sliderMass.length-1].classList.add('slider__item_active');
            }
            dotsMass[i-1].classList.add('slider__dot_active');
            return sliderMass[i-1].classList.add('slider__item_active');
        }
    }

}

for(let i=0; i<dotsMass.length; i++){
    if(sliderMass[i].className.includes('slider__item_active')){
        dotsMass[i].classList.add('slider__dot_active');
    }
    dotsMass[i].onclick = function(){
        dotsMass[i].classList.add('slider__dot_active');
        sliderMass[i].classList.add('slider__item_active');
        for(let j=0; j<dotsMass.length; j++)
        if(j!=i){
            dotsMass[j].classList.remove('slider__dot_active');
            sliderMass[j].classList.remove('slider__item_active');
        }
    }
}





prev.onclick = showPrevImg;
next.onclick = showNextImg;
