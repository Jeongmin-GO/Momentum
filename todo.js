const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = 'toDos';

//해야할 일을 생성했을 때 toDos array에 추가되도록 함
let toDos = [];

function deleteTodo(event) {
    const btn = event.target;
    const li = btn.parentNode;
    toDoList.removeChild(li);
    const cleanToDos = toDos.filter(function (toDo) {
        return toDo.id !== parseInt(li.id);
    }); // filter : array의 모든 아이템을 통해 함수를 실행하고 true인 아이템들만 가지고 새로운 array를 만듦
    toDos = cleanToDos; //toDos가 let이어야 됨 (const X)
    saveToDos();
}

/*local storage는 string으로 저장하기 때문에 toDos를 string으로 바꿔줘야됨 (json)
JSON(JavaScript Object Notation) : 데이터를 저장할 때, 자바스크립트가 데이터를 다룰 수 있도록 object로 바꿔주는 기능
string> object, object > string 둘 다 가능 */
function saveToDos() {
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function paintToDo(text) {
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const span = document.createElement("span");
    const newId = toDos.length + 1;

    delBtn.innerText = "❌";
    delBtn.addEventListener("click", deleteTodo);
    span.innerText = text;
    li.appendChild(span); //ex.span을 li(=father element)에 넣는 것
    li.appendChild(delBtn);
    li.id = newId;
    toDoList.appendChild(li); //완성된 li를 ul(toDoList)에 넣는 것

    const toDoObj = {
        text: text,
        id: newId
    };
    toDos.push(toDoObj); //array에 toDoObj를 넣어줌
    saveToDos();
}

function handleSubmit(event) {
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value = ""; //enter를 누르면 초기화됨
}

function loadToDos() {
    const loadedToDos = localStorage.getItem(TODOS_LS);
    if (loadedToDos !== null) {
        // remove this and look at difference
        //console.log(loadedToDos);
        const parsedToDos = JSON.parse(loadedToDos);
        //forEach : array안에 있는 것들을 각각 한 번씩 함수를 실행
        parsedToDos.forEach(function (toDo) { // 안에 있는 함수를 밖으로 꺼낼 수도 있음
            paintToDo(toDo.text);
        })
    }
}
function init() {
    loadToDos();
    toDoForm.addEventListener("submit", handleSubmit);
}

init();