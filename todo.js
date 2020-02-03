const toDoform = document.querySelector(".js-toDoForm"),
    toDoinput = form.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = 'toDos';
function loadToDos() {
    const toDos = localStorage.getItem();
}
function init() {
    loadToDos();
}

init();