'use strict';
 
 let randomNumber = Math.trunc(Math.random() * 20) +1;
  
 let score = 20
 let highscore = 0
 const displayChange = function(message){
    document.querySelector('.message').textContent = message
 };
 const displayScore = function(score){
    document.querySelector('.score').textContent = score
 };
    document.querySelector('.check').addEventListener('click', function()
    {
    const guessNumber = Number(document.querySelector('.guess').value);
   
   
if (!guessNumber) {
    displayChange("enter number!';😫😪😫😫😪🤐")
    } else if (randomNumber === guessNumber) {
        displayChange('Correct Number!😁😀😁😀😁😀👏👏👏 '); 
    document.querySelector('.number').textContent = randomNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > highscore){
         highscore = score
        document.querySelector('.highscore').textContent = highscore 
    } 
        
    
} else if (randomNumber !== guessNumber){
        if (score >= 1) {
            displayChange((randomNumber < guessNumber) ?
            "too high😠😡🤬😡🤬😤!" : "too low 😭😔😭😔😭😔😭");
            score--;
            displayScore(score);
        }else {
            displayChange("you lost the game😵‍💫😵😵‍💫😵😵‍💫😵");
            displayScore(0);
            
            document.querySelector('.number').textContent = randomNumber;
            document.querySelector('body').style.backgroundColor = 'red'; 
    }

    } 
        });
        
 // running the old time new page again button
        document.querySelector('.again').addEventListener('click', function () {
        let score = 20;

        displayChange("Start guessing...");
    
        displayScore(score)
        
        document.querySelector('body').style.backgroundColor = '#222';
        document.querySelector('.number').textContent = '?';
        document.querySelector('.guess').value = "";
        document.querySelector('.number').style.width = '15rem';
        
        randomNumber = Math.trunc(Math.random() * 20) +1;
        
        //let randomNumber = Math.trunc(Math.random() * 20) +1;
        //console.log(randomNumber);
        //console.log(Check);
        });  
