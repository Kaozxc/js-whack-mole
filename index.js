const squares = document.querySelectorAll('.square');
const mole = document.querySelector('.mole');
let randomNum = 0;
// let num = showMole.randomNum;

let scoreHere = 0;
let score = document.querySelector('#score');
console.log('score', score)
let timeLeft = document.querySelector('#timeLeft').innerText;
console.log('timeleft', timeLeft);

function showMole() {
    randomNum = Math.floor(Math.random() * 9) + 1;
    console.log(randomNum);
    console.log(squares)
    squares[randomNum - 1].classList.add('mole')
    // console.log('nuim', num);
    // return num = randomNum;
}

function clickMole() {
    let sq = document.querySelector('.mole')
    console.log(sq);
    sq.addEventListener('click', () => {
        squares[randomNum - 1].classList.remove('mole');
        scoreHere++;
        score.innerText = scoreHere;
        console.log('score here', score)
        showMole();
    })
}

function game() {
    showMole();
    clickMole();

}


// mole.addEventListener('click', () => {
//     console.log('elo');
// })

game();