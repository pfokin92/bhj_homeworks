const countTime = function(){
    const now = new Date()
    const timer = document.getElementById('timer');
    const time = Number(timer.innerHTML);
    timer.textContent -= 1;
    if (time === 0) {
        alert('Вы победили в конкурсе!');
        clearInterval(ider)
    }
}

const ider = setInterval(countTime, 100);