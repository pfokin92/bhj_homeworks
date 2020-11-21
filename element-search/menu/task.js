const  clickMenu = document.querySelectorAll('.menu__link');

for (let item of clickMenu){
    item.onclick = function(event){
        const sub = item.closest(".menu__item").querySelector('.menu_sub');
        if(document.querySelector('.menu_active')!=null){
            if (sub.className.includes('menu_active')){
                sub.classList.remove('menu_active');
                return false;
            } 
            document.querySelector('.menu_active').classList.remove('menu_active');
        }
        if(sub!=null){
            sub.classList.add('menu_active');
        }
        event.preventDefault();
    }
}




