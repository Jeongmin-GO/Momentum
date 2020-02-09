const form = document.querySelector(".js-form"),
    input = form.querySelector("input"),
    greeting = document.querySelector(".js-greetings");

const USER_LS = "currentUser", // local storage의 기본key값
    SHOWING_CN = "showing";

function saveName(text) {
    localStorage.setItem(USER_LS, text);
}

function handleSubmit(event) {
    event.preventDefault(); //폼을 제출하면 자동으로 없어지는 기능 없앰
    const currentValue = input.value;
    paintGreeting(currentValue); //방금 제출한 입력값을 value에 넣음
    saveName(currentValue);
}
// user가 없을 때 폼을 띄움
function askForName() {
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit", handleSubmit);

}

//currentUser가 존재할 경우 value값을 색칠하는 함수
function paintGreeting(text) {
    form.classList.remove(SHOWING_CN); // form is hidden
    greeting.classList.add(SHOWING_CN);
    greeting.innerText = `Hello, ${text}`;
}

function loadName() {
    const currentUser = localStorage.getItem(USER_LS);
    if (currentUser === null) {
        // local storage에 user가 없을 때
        askForName();
    } else {
        paintGreeting(currentUser);
    }
}
function init() {
    loadName();
}

init();