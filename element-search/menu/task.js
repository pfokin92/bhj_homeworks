const  clickMenu = document.querySelectorAll('.menu__link');

// for (let item of clickMenu){
//     item.onclick = function(){
//     const sub = item.closest(".menu__item");
//     const b = sub.querySelector('.menu_sub');
//     if(b!=null){
//         b.classList.add('menu_active');
//         }
//     }
// }

const company = document.getElementById('about_company');
const services = document.getElementById('servies');

function openMenu(){
    const sub = company.closest(".menu__item");
    const b = sub.querySelector('.menu_sub');
    b.classList.add('menu_active')
}

company.onclick = openMenu;
// services.onclick = openMenu;


