'use strict';

   let secretNumber = Math.trunc(Math.random() * 20) +1;
   console.log(secretNumber);
   let score = 20;

document.querySelector('.check').addEventListener('click', function (){
   const guess = Number(document.querySelector('.guess').value);
   
   //When there is no input
   if (!guess) {
    document.querySelector('.message').textContent = '⛔ No Number!';
   }

   //When player wins
   else if (guess === secretNumber){
    document.querySelector('.message').textContent = '🎉 Correct Number!';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
   }

   //When guess is too high
   else if (guess > secretNumber) {
      if (score > 1) {
         document.querySelector('.message').textContent = '📈Too high';
         score--;
         document.querySelector('.score').textContent = score;
      }
      else {
         // when player loses the game due to high guess
         document.querySelector('.message').textContent = '💥You lost the game!';
         document.querySelector('.score').textContent = 0;
      }
   
   }

   //when player guess is too low
   else if (guess < secretNumber) {

          if (score > 1) {
               document.querySelector('.message').textContent = '📉Too low';
               score--;
               document.querySelector('.score').textContent = score;
      }
         //when player loses due to low guess
          else {
              document.querySelector('.message').textContent = '💥You lost the game!';
              document.querySelector('.score').textContent = 0;
         }
  
      }
      document.querySelector('.again').addEventListener('click', function(){
         secretNumber = Math.trunc(Math.random() * 20) +1;
         score=20;
         document.querySelector('.message').textContent = 'Start guessing...';
         document.querySelector('.number').textContent = '?';
         document.querySelector('.number').style.width = '15rem';
         document.querySelector('.score').textContent = score;
         document.querySelector('body').style.backgroundColor = '#222';
         document.querySelector('.guess').value = '';

      });

   });





    