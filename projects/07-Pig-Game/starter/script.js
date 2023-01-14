'use strict';

// selecting DOM elements
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El =document.getElementById('current--0');
const current1El =document.getElementById('current--1');
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

const switchPlayer = function () {
currentScore = 0;
document.getElementById(`current--${activePlayer}`).textContent = 0; 
activePlayer = activePlayer === 0 ? 1 : 0;
//player0.classList.toggle('player--active');
//player1.classList.toggle('player--active');
    if (player0.classList.contains('player--active') ) {
        player0.classList.remove('player--active');
        player1.classList.add('player--active');}
     else {
        player1.classList.remove('player--active');
        player0.classList.add('player--active');
    }
}


// Starting conditions

score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');
const scores = [0 , 0];
let currentScore = 0;
let activePlayer = 0;
let playing = true;

//ROlling dice functionality
btnRoll.addEventListener('click',function(){

    if (playing){
    // 1. Generate random dice roll
    const dice = Math.trunc(Math.random()*6) + 1;
    diceEl.src = `dice-${dice}.png`;
    
    // 2. Display dice
    diceEl.classList.remove('hidden');

    // 3. Check for rolled 1: if true, switch to next player.
    if (dice != 1){
        // add dice to current score
        currentScore += dice;
        document.getElementById(`current--${activePlayer}`).textContent = currentScore;
    } else {
        // Swith to next player
         switchPlayer();

        }
    }    
});
// button hold functionality
btnHold.addEventListener('click', function() {
    if (playing){
    // add current score to active player score[].
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];

//check is score is over or equal to 100 and that will trigger player win.
if (scores[activePlayer] >= 20) {
//finish game
diceEl.classList.add('hidden');
playing = false;
document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
}
    
//switch player

 else {   switchPlayer();}
}
})