'use strict'
//instruction
const modal = document.querySelector(".modal");
const btnCloseModal = document.querySelector(".close-modal");
const btnOpenModal = document.querySelectorAll(".run");

const openModal = function () {
    modal.classList.remove('hidden');
};
for (let x = 0; x < btnOpenModal.length; x++)
{
    btnOpenModal[x].addEventListener('click',openModal)
 };

const closeModal = function () {
    modal.classList.add('hidden');
   
    //document.querySelector('body').style.backgroundColor = 'red'; 
};

btnCloseModal.addEventListener('click',closeModal);



// connecting HTML
let Current1 = document.getElementById("current--0")
let Current2 = document.getElementById("current--1")
let Score1 = document.getElementById("score--0")
let Score2 = document.getElementById("score--1")
let dice = document.querySelector(".dice")
let btnRestart = document.querySelector(".btn--new")
let btnRollDice = document.querySelector(".btn--roll")
let btnHold = document.querySelector(".btn--hold")
let player1 = document.querySelector("player--0")
let player2 = document.querySelector("player--1")

let cur1Score = 0; 
let cur2Score = 0; 
let player1Score = 0;
let player2Score = 0;
let diceRoller = 0;
let CurrentPlayer = Current1;

// dice.classList.add('hidden');

btnRollDice.addEventListener('click', function () {
    diceRoller = (Math.trunc(Math.random() * 6) + 1);

    dice.src = (`dice-${diceRoller}.png`);

    if (CurrentPlayer == Current1){
        if (diceRoller == 1) {
            cur1Score = 0;
            document.querySelector('.player--0').classList.remove('player--active')
            Current1.textContent = cur1Score;
            CurrentPlayer = Current2; 
            document.querySelector('.player--1').classList.toggle('player--active')
          
        }
        else {
            cur1Score = cur1Score + diceRoller;
            Current1.textContent = cur1Score;
         
        }
    } else {

        if (diceRoller == 1) {
            cur2Score = 0;
            document.querySelector('.player--1').classList.remove('player--active')
            Current2.textContent =  cur2Score;
            CurrentPlayer = Current1;
            document.querySelector('.player--0').classList.toggle('player--active');
        } else {
            cur2Score = cur2Score + diceRoller;
            Current2.textContent = cur2Score;
           
        }}
    }
);

btnHold.addEventListener('click', function () {

    if (player1Score >= 50 && player2Score < 50) {
        document.querySelector('.player--0').classList.add('player--winner')

    } else if (player2Score >= 50 && player1Score < 50) {
        document.querySelector('.player--1').classList.add('player--winner')
    }
    else {
        if (Current1 == CurrentPlayer) {
            player1Score = player1Score + cur1Score;
            Score1.textContent = player1Score;
            document.querySelector('.player--0').classList.remove('player--active')
            cur1Score = 0;
            Current1.textContent = cur1Score;
            CurrentPlayer = Current2;
            document.querySelector('.player--1').classList.toggle('player--active')


        } else {
            player2Score = player2Score + cur2Score;
            Score2.textContent = player2Score;
            cur2Score = 0;
            document.querySelector('.player--1').classList.remove('player--active')
            Current2.textContent = cur2Score;
            CurrentPlayer = Current1;
            document.querySelector('.player--0').classList.toggle('player--active')
        }
    }

});

btnRestart.addEventListener('click', function () {
    location.reload();
});





