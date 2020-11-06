const image = document.getElementById('cookie');
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
    const previos = document.getElementById('time').innerHTML;
    speed.textContent = (1/(current - previos)*1000).toFixed(2);
    document.getElementById('time').textContent = current;
}


image.onclick = changeWidth;