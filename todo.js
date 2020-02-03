const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = 'toDos';

function paintToDo(text) {
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    delBtn.innerText = "❌";
    const span = document.createElement("span");
    span.innerText = text;
    li.appendChild(span); //ex.span을 li(=father element)에 넣는 것
    li.appendChild(delBtn);
    toDoList.appendChild(li); //완성된 li를 ul(toDoList)에 넣는 것
}

function handleSubmit(event) {
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value = ""; //enter를 누르면 초기화됨
}

function loadToDos() {
    const toDos = localStorage.getItem(TODOS_LS);
    if (toDos !== null) {

    }
}
function init() {
    loadToDos();
    toDoForm.addEventListener("submit", handleSubmit);
}

init();