//Select all the boxes
let boxes = document.querySelectorAll('.container .empty');

for (let box of boxes) {
    box.addEventListener("click", SquareClicked);
}

//Define the players
let player1 = document.querySelector('#player-x');
let player2 = document.querySelector('#player-o');

//Select both players
let players = document.querySelectorAll('.players p')


//Define the individual boxes
const box1 = document.getElementById('1');
const box2 = document.getElementById('2');
const box3 = document.getElementById('3');
const box4 = document.getElementById('4');
const box5 = document.getElementById('5');
const box6 = document.getElementById('6');
const box7 = document.getElementById('7');
const box8 = document.getElementById('8');
const box9 = document.getElementById('9');

//The game starts with player 1 (X)
let currentPlayer = 1;

//When the game is over, the squares are unabled to be clicked
function gameOver(){
    for (let box of boxes) {
        box.removeEventListener("click", SquareClicked);
    }
}

//Gives players the option to play another round
const button = document.querySelector('button');

function playAgain(){
    for (let box of boxes) {
        box.addEventListener("click", SquareClicked);
        box.classList.add('empty');
        box.classList.remove('full');
        box.innerText = '';
        box.style.removeProperty('background-color');
        box.style.removeProperty('border');
        box.style.color = 'black';
    }
    for (let player of players){
        player.style.display = 'block';
        player.style.fontSize = '50px';
    }

    player1.innerText = 'Player 1 = X'
    player2.innerText = 'Player 2 = O'
    button.style.display = 'none';
  
}

button.addEventListener("click", playAgain);

//Player 1 Wins
function player1Wins(a, b, c) {
    let winArray = [a, b, c];
    if (a.innerText === 'X' && b.innerText === 'X' && c.innerText === 'X') {
         for (let item of winArray){
            item.style.color = 'white';
            item.style.backgroundColor = 'green';
            item.style.border = '1px solid green';
        }
        player2.style.display = 'none';
        player1.innerText = 'PLAYER 1 WINS!!!'
        player1.style.fontSize = '84px';
        player1.style.border = 'none';
        for (let box of boxes) {
            box.classList.remove('empty');
        }
        gameOver();
        button.style.display = 'block';
    }
}

//Player 2 Wins
function player2Wins(a, b, c) {
    let winArray = [a, b, c];
    if (a.innerText === 'O' && b.innerText === 'O' && c.innerText === 'O') {
        for (let item of winArray){
            item.style.color = 'white';
            item.style.backgroundColor = 'green';
            item.style.border = '1px solid green';
        }
        player1.style.display = 'none';
        player2.innerText = 'PLAYER 2 WINS!!!'
        player2.style.fontSize = '84px';
        player2.style.border = 'none';
        for (let box of boxes) {
            box.classList.remove('empty');
        }
        gameOver();
        button.style.display = 'block';
    }
}

function SquareClicked(event) {
    if (currentPlayer === 1 && event.target.className === 'empty') {
        player1.style.border = '1px solid black';
        player2.style.border = '5px solid red';
        event.target.innerText = 'X';
        event.target.classList.add('full');
        event.target.classList.remove('empty');
        currentPlayer = 2;
    } else if (currentPlayer === 2 && event.target.className === 'empty') {
        player1.style.border = '5px solid red';
        player2.style.border = '1px solid black';
        event.target.innerText = 'O';
        event.target.classList.add('full');
        event.target.classList.remove('empty');
        currentPlayer = 1;
    }

    player1Wins(box1, box2, box3);
    player1Wins(box1, box4, box7);
    player1Wins(box1, box5, box9);
    player1Wins(box2, box5, box8);
    player1Wins(box3, box5, box7);
    player1Wins(box3, box6, box9);
    player1Wins(box4, box5, box6);
    player1Wins(box7, box8, box9);

    player2Wins(box1, box2, box3);
    player2Wins(box1, box4, box7);
    player2Wins(box1, box5, box9);
    player2Wins(box2, box5, box8);
    player2Wins(box3, box5, box7);
    player2Wins(box3, box6, box9);
    player2Wins(box4, box5, box6);
    player2Wins(box7, box8, box9);
    
    //How the computer knows when there has been a draw
    const fullBoxes = document.querySelectorAll('.full');
    
    if (fullBoxes.length === 9){
        player1.style.display = 'none';
        player2.innerText = "IT'S A DRAW!"
        player2.style.border = 'none';
        gameOver();
    }
}
