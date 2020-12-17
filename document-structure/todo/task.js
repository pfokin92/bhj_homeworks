let taskInput = document.getElementById('task__input');
let tasksList = document.getElementById('tasks__list');
const addTaskButton = document.getElementById('tasks__add');


function addTasks(event){

    let taskHTML = document.createElement('div');
    taskHTML.classList.add('task');

    let taskTitleHTML = document.createElement('div');
    taskTitleHTML.classList.add('task__title');
    taskTitleHTML.textContent = taskInput.value;


    taskHTML.insertAdjacentHTML('afterbegin', taskTitleHTML.outerHTML);
    taskHTML.insertAdjacentHTML('beforeend', "<a href='#' class='task__remove'>&times;</a>");


    tasksList.insertAdjacentHTML('beforeend', taskHTML.outerHTML);
    console.log(tasksList);

    let taskRemove = document.getElementsByClassName('task__remove')
    taskRemove[taskRemove.length -1].addEventListener('click', removeTask);
    
    function removeTask() {
        this.closest('.task').remove();
    }
    taskInput.value = '';
    event.preventDefault();
}

addTaskButton.addEventListener('click', addTasks);
