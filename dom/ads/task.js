const rotatorCase = Array.from(document.querySelectorAll('.rotator__case'));

function changeText(){
    let activeIndex = rotatorCase.findIndex(element => element.classList.contains('rotator__case_active'));
    let index = Math.floor(Math.random()*rotatorCase.length);
    rotatorCase[activeIndex].classList.remove('rotator__case_active');
    rotatorCase[index].classList.add('rotator__case_active');
    rotatorCase[index].style.color = rotatorCase[index].dataset.color;
    const timer = rotatorCase[index].dataset.speed;
    setTimeout(changeText, timer);
}



changeText();


