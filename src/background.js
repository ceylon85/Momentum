const body = document.querySelector("body");

const IMG_NUMBER = 10; //img dir에 파일이 10개

function paintImage(imgNumber){
    const image = new Image(); //새로운 image를 받고
    image.src = `./img/${imgNumber + 1}.jpg` //math.random이 0부터 시작
    image.classList.add("bgImage"); //img 추가
    body.appendChild(image);
}

function genRandom(){ //math.floor를 사용해 나머지 값을 버리고 
    //random 함수를 사용하여  1~10까지 정수를 리턴
    const number = Math.floor(Math.random()* IMG_NUMBER);
    return number;
}

function init(){
    const randomNumber = genRandom();
    paintImage(randomNumber);
}

init();