let revealBlocks = document.getElementsByClassName('reveal');

function appearanceBlock() {
    let viewportHeight = window.innerHeight;

    for (const block of revealBlocks) {
        let blockTop = block.getBoundingClientRect().top;

        if (blockTop < viewportHeight) {
            block.classList.add('reveal_active');
        }
    }
}

window.addEventListener('scroll', appearanceBlock);