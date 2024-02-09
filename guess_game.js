'use strict';
const  randomNumber = Math.floor(Math.random() * 20) + 1;
 document.querySelector(".number").textContent = randomNumber ;

document.querySelector(".check").addEventListener('click',function()
{

const guessNumber = Number(document.querySelector(".guess").value);
console.log(guessNumber,typeof guessNumber);
const Message = document.querySelector(".message").textContent;

const Score = document.querySelector(".score").textContent;
if (!guessNumber) {
  Message = "Wrong Number 😫😫😫🤐" 
}
 else if (randomNumber === guessNumber){
   //console.log('Correct number 👏👏👏!');
   Message = 'Correct number 👏👏👏!';

} else if (randomNumber > guessNumber) {
    Message = "Too high 🙄🙄😑😐";
    Score -- ;

}else if (randomNumber < guessNumber) {
    Message = "Too low  😮😮😮😮";
  
    Score=--;
}
   


}

);