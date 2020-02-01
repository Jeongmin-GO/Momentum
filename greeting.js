const form = document.querySelector(".js-form"),
    input = form.querySelector("input"),
    greeting = document.querySelector(".js-greetings");

const USER_LS = "currentUser", // local storage의 key값
    SHOWING_CN = "showing";

//currentUser가 존재할 경우 value값을 색칠하는 함수
function paintGreeting(text) {
    form.classList.remove(SHOWING_CN); // form is hidden
    greeting.classList.add(SHOWING_CN);
    greeting.innerText = `Hello ${text}`;
}

function loadName() {
    const currentUser = localStorage.getItem(USER_LS);
    if (currentUser === null) {
        // local storage에 user가 없을 때
    } else {
        paintGreeting(currentUser);
    }
}
function init() {
    loadName();
}

init();