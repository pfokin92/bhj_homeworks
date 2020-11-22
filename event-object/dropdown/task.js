const open = document.querySelector('.dropdown__value');
const linkList = document.querySelectorAll('.dropdown__link');


function openList(event){
    const list = document.querySelector('.dropdown__list');
    if(list.className.includes('dropdown__list_active')){
        list.classList.remove('dropdown__list_active');
    } else {
        list.classList.add('dropdown__list_active');
    }
    event.preventDefault();
}

console.log(open.textContent)



function selectNewCell(event) {
    open.textContent = this.textContent;
    document.querySelector('.dropdown__list').classList.remove('dropdown__list_active');
    event.preventDefault();
}

for(let item of linkList){
    console.log(item.textContent)
    item.addEventListener('click', selectNewCell)
}

open.onclick = openList