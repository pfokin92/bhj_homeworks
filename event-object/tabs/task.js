const tabsArr = Array.from(document.querySelectorAll('.tab'));
const contentArr = Array.from(document.querySelectorAll('.tab__content'));


function changeActiveElement(){
    document.querySelector('.tab_active').classList.remove('tab_active');
    document.querySelector('.tab__content_active').classList.remove('tab__content_active');
    let index = tabsArr.indexOf(this);
    tabsArr[index].classList.add('tab_active');
    contentArr[index].classList.add('tab__content_active');
}

for(let tab of tabsArr){
    tab.addEventListener('click', changeActiveElement);
}