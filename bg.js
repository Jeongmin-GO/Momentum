const body = document.querySelector("body");

const IMG_NUM = 11;

function paintImage(imgNumber) {
    const image = new Image();
    image.src = `images/${imgNumber + 1}.jpg`; //랜덤값이 0을 줄 수 있기 때문에 +1
    image.classList.add("bgImage");
    body.prepend(image);

}

function genRandom() {
    const number = Math.floor(Math.random() * IMG_NUM);
    return number;
}

function init() {
    const randomNumber = genRandom();
    paintImage(randomNumber);
}

init();