const image = document.getElementById('cookie');
let previos = 0;
function changeWidth(){
    const counter = document.getElementById('clicker__counter');
    const count = Number(counter.innerHTML);
    if(count%2==0){
        image.width = 250;
    } else {
        image.width =200;
    }    
    counter.textContent ++;
    const speed = document.getElementById('speed');
    const current = new Date().getTime();
    speed.textContent = (1/(current - previos)*1000).toFixed(2);
    previos = current;
}


image.onclick = changeWidth;