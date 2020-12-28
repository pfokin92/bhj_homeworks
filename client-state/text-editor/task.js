  
let editor = document.getElementById('editor');

window.onload = () => {
    editor.value = localStorage.getItem('value');
};

editor.oninput = () => {
    let valueText = editor.value;
    localStorage.setItem('value', valueText);
}
