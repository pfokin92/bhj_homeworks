document.addEventListener('DOMContentLoaded', getModal);

let dialog = document.getElementById('modal_main');
let dialogSuccess = document.getElementById('modal_success');

function  getModal(){
    dialog.classList.add('modal_active');
}

const forClick = document.querySelector('.show-success');

function getModalGood() {
    dialog.classList.remove('modal_active');
    dialogSuccess.classList.add('modal_active');
}

forClick.onclick = getModalGood;

const closeWindow = dialogSuccess.querySelector('.modal__close');

function closeWindowModal(){
    const parent = closeWindow.closest('.modal_active');
    dialogSuccess.classList.remove('modal_active');
}

closeWindow.onclick = closeWindowModal;
