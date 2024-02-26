'use strict'
// game play panna instruction solla
// html connenting
const modal = document.querySelector(".modal");
// const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnOpenModal = document.querySelectorAll(".run");

// gamela start button click panna instruction kattum

const openModal = function () {
    modal.classList.remove('hidden');
    // overlay.classList.remove('hidden');
}; 
for (let x = 0; x < btnOpenModal.length; x++){
    btnOpenModal[x].addEventListener('click',openModal)
 };
// gamela instruction button na pannum
const closeModal = function () {
    modal.classList.add('hidden');
    // overlay.classList.add('hidden');
   
    //document.querySelector('body').style.backgroundColor = 'red'; 
};
// function call pannum
btnCloseModal.addEventListener('click',closeModal);




// connecting HTML

// let input2 = document.getElementById("player2")

let Name1 = document.getElementById("name--0")
let Name2 = document.getElementById("name--1")
// current 1 & 2 current boxla value increment panna
let Current1 = document.getElementById("current--0")
let Current2 = document.getElementById("current--1")
// player 1 & 2 current box la vantha scorera display katta
let Score1 = document.getElementById("score--0")
let Score2 = document.getElementById("score--1")
// dicena imagesa change panna
let dice = document.querySelector(".dice")
// btnRestart button game thirumba play panna
let btnRestart = document.querySelector(".btn--new")
// btnRollDice na game current box pannura function
let btnRollDice = document.querySelector(".btn--roll")
//btnHold na next player play panna
let btnHold = document.querySelector(".btn--hold")
// intha yaru winnernu solla player1 & 2
let player1 = document.querySelector("player--0")
let player2 = document.querySelector("player--1")
// let checkingBtn=document.getElementById("check");

//  function update () {
//   input1 = input1.textContent

// }

let cur1Score = 0; 
let cur2Score = 0; 
let player1Score = 0;
let player2Score = 0;
let diceRoller = 0;
let CurrentPlayer = Current1;

// dice.classList.add('hidden');
 // addEventListener nu implement function vaithu directa btnRollDice buttonclick function call panna
btnRollDice.addEventListener('click', function () {
    //  diceRoller number 1 to 6 kulla random number vara
    diceRoller = (Math.trunc(Math.random() * 6) + 1);
// dice.src imagesa change panna
    dice.src = (`dice-${diceRoller}.png`);
// if condition CurrentPlayer = Current1) is true game ulla pogum 

    if (CurrentPlayer == Current1){
        // condition true na player 1 call pannum 
        //diceRoller == 1 condition false player 2 call pannum
        if (diceRoller == 1) {
            cur1Score = 0;
            document.querySelector('.player--0').classList.toggle('player--active')
            Current1.textContent = cur1Score;
            CurrentPlayer = Current2; 
            document.querySelector('.player--1').classList.toggle('player--active')
          
        }
        // current box la player1kku increment pannum
        else {
            cur1Score = cur1Score + diceRoller;
            Current1.textContent = cur1Score;
         
        }
    } // if condition false 
    else {
         // condition true na player2 call pannum 
        //diceRoller == 1 condition false player 1 call pannum

        if (diceRoller == 1) {
            cur2Score = 0;
            document.querySelector('.player--1').classList.remove('player--active')
            Current2.textContent =  cur2Score;
            CurrentPlayer = Current1;
            document.querySelector('.player--0').classList.toggle('player--active');
             // current box la player2kku increment pannum
        } else {
            cur2Score = cur2Score + diceRoller;
            Current2.textContent = cur2Score;
           
        }}
    }
);
// btnHold button click panna player 1 & 2 la yaru winnernu kattum and colorla change pannum
//(player1Score >= 10 && player2Score < 10) 
btnHold.addEventListener('click', function () {
 //if condition ture player 1 winner
    if (player1Score >= 10) {
        document.querySelector('.player--0').classList.add('player--winner')
        Name1.textContent = " Player-1 is a Winner congratulations !..👏👏👏👏 ";
       // if condition false na player 2 winner
    } else if (player2Score >= 10) {
        document.querySelector('.player--1').classList.add('player--winner')
        Name2.textContent = " Player-2 is a Winner congratulations !..👏👏👏👏 ";
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
// game ma again play pannalam

btnRestart.addEventListener('click', function () {
    location.reload();
});





