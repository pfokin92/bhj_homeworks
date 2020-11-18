const  clickMenu = document.querySelectorAll('.menu__link');

for (let item of clickMenu){
    item.onclick = function(){
        const sub = item.closest(".menu__item").querySelector('.menu_sub');
        if(document.querySelector('.menu_active')!=null){
            document.querySelector('.menu_active').classList.remove('menu_active');
        }
        if(sub!=null){
            if (sub.classList.contains('menu_active')){
                sub.classList.remove('menu_active'); // Я хочу что б по повторному клику меню закрывалось но что-то не срабатывает
            } else {
                sub.classList.add('menu_active');
            }
        }
        event.preventDefault();
    }
}




