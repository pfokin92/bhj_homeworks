
function getKill(){
    const kill = document.getElementById('dead');
    kill.textContent ++;
    if(Number(kill.innerHTML)==10){
        alert('Вы победили')
    }
}
function getMiss(){
    const miss = document.getElementById('lost');
    miss.textContent ++;
    if(Number(miss.innerHTML)==5){
        alert('Вы проиграли')
    }
}
getHole = index => document.getElementById(`hole${index}`)

for (let index = 1; index < 10; index++) {
    const hole = getHole(index);
    if(hole.className.includes('hole hole_has-mole')){
        hole.onclick=getKill;
    } else{
        hole.onclick=getMiss;
    }
    
}


