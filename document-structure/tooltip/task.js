let tooltip = document.createElement('div');
tooltip.classList.add("tooltip");

const hasTooltip = Array.from(document.querySelectorAll('.has-tooltip'));

function showTooltip(event){
    let tooltipText = this.title;

    if (tooltip.classList.contains('tooltip_active')) {
        tooltip.classList.toggle('tooltip_active');
    } 
    tooltip.innerText = tooltipText;
    let coordinates = this.getBoundingClientRect();
    tooltip.style.left = `${coordinates.x}px`;
    tooltip.style.top = `${coordinates.y + 20}px`; 
    tooltip.classList.toggle('tooltip_active');
    this.appendChild(tooltip);
    event.preventDefault();
}

for(let link of hasTooltip){
    link.addEventListener('click', showTooltip);
}