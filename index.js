const squares = document.querySelectorAll('.square');
const mole = document.querySelector('.mole');
let score = document.querySelector('#score');
let timeLeft = document.querySelector('#timeLeft');

let position;
let shouldStartGame = false;

let countDownTimerId;
let currentTime = 20;
let timerId = null;
let points = 0;

timeLeft.innerText = currentTime;

function generateMole() {
    squares.forEach(square => {
        square.classList.remove('mole');
    })
    let randomNum = Math.floor(Math.random() * 9) + 1;
    squares[randomNum - 1].classList.add('mole')
    position = randomNum;
}

function clickMole() {
    squares.forEach(square => {
        square.addEventListener('click', () => {
            if (square.id == position) {
                points++;
                score.innerText = points;
            }
        })
    })
}

function randomizePosition() {
    timerId = setInterval(generateMole, 1000);
}

function countDown() {
    currentTime--;
    timeLeft.innerText = currentTime;

    if (currentTime <= 0) {
        clearInterval(countDownTimerId)
        clearInterval(timerId)
        alert(`Game over! You got ${points} points`);
    }
}

function initializeGame() {
    shouldStartGame = true;

    if (shouldStartGame === true) {
        countDownTimerId = setInterval(countDown, 1000);
        countDown();
    }

    randomizePosition();
    clickMole();
}
