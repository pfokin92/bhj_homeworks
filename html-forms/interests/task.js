const interestCheck = document.querySelectorAll('div > ul > li > label .interest__check');
console.log(interestCheck);


function checkBoxes() {
    let interestsChilds = this.closest('.interest').querySelectorAll('ul > li > label .interest__check');
    if (this.checked) {
        for (let i = 0; i < interestsChilds.length; i++) {
            interestsChilds[i].checked = true;
        }
    } else {
        for (let i = 0; i < interestsChilds.length; i++) {
            interestsChilds[i].checked = false;
        }
    }
}


for (let boxes of interestCheck) {
    boxes.addEventListener('change', checkBoxes)
}