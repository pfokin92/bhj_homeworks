const quantityValueArr = Array.from(document.getElementsByClassName("product__quantity-value"));
const controlDecArr =Array.from(document.getElementsByClassName("product__quantity-control_dec"));
const controlIncArr = Array.from(document.getElementsByClassName("product__quantity-control_inc"));
const productAddArr = Array.from(document.getElementsByClassName("product__add"));

function add(){
    let indexActive = controlIncArr.indexOf(this);
    let count = Number(quantityValueArr[indexActive].innerHTML)
    count++;
    quantityValueArr[indexActive].textContent = count;
}

function subtract(){
    let indexActive = controlDecArr.indexOf(this);
    let count = Number(quantityValueArr[indexActive].innerHTML)
    if (count>0){
        count--;
        quantityValueArr[indexActive].textContent = count;
    }
}

function addInBasket(){
    let cartProductHTML = document.createElement('div');
    cartProductHTML.classList.add("cart__product");
    cartProductHTML.dataset.id = this.closest('.product').dataset.id;

    let clonedImg = document.createElement('img');
    clonedImg.classList.add('cart__product-image');
    clonedImg.src = this.closest('.product__controls').previousElementSibling.src;

    cartProductHTML.insertAdjacentHTML('afterBegin', clonedImg.outerHTML);
    
    let countDiv = document.createElement('div');
    countDiv.classList.add('cart__product-count');
    countDiv.textContent = this.previousElementSibling.getElementsByClassName('product__quantity-value')[0].textContent;

    cartProductHTML.insertAdjacentHTML('beforeEnd', countDiv.outerHTML);
   
    let cart = Array.from(document.getElementsByClassName('cart__products'))[0];
    let cartContents = Array.from(cart.getElementsByClassName("cart__product"));
    let cartOverlap = -1;

    for (let i = 0; i < cartContents.length; i++) {
        if (cartContents[i].dataset.id == cartProductHTML.dataset.id) {
            cartOverlap = i;
        } 
    }

    if (cartOverlap > -1) {
        let cartContentsCountDiv = cartContents[cartOverlap].getElementsByClassName("cart__product-count")[0];
        cartContentsCountDiv.textContent = Number(cartContentsCountDiv.textContent) + Number(countDiv.textContent);
    } else {
        cart.insertAdjacentHTML("afterBegin", cartProductHTML.outerHTML);
    }
}


for(const inc of controlIncArr){
    inc.addEventListener('click', add);

}
for(const dec of controlDecArr){
    dec.addEventListener('click', subtract);
}
for (const add of productAddArr){
    add.addEventListener('click', addInBasket);
}