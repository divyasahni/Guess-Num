"use strict";

/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '🎉Correct Number!';
console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent=13;
document.querySelector('.score').textContent=10;

console.log( document.querySelector('.guess').value);// empty line as input is not filled
document.querySelector('.guess').value =23;
console.log( document.querySelector('.guess').value);// it shows 23 as in above line we set he value to 23
*/

let randomNum = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highscore = 0;
const displayMessage=function(message){
  document.querySelector('.message').textContent=message;
}

document.querySelector('.check').addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);
  
  // if no number is entered then the value is taken as 0 but as 0 is a falsey value then in the following
  if (!guess) {
    // !guess means if guess is false which is when either 0 is entered or nothing is entered then the following text is executed
    // document.querySelector(".message").textContent = "❌No number!";
    displayMessage('❌No number!');
  } 
  
  else if (guess === randomNum) {  // when win
    // document.querySelector(".message").textContent = "🎉Correct Number!";
    displayMessage('🎉Correct Number!');

    document.querySelector(".number").textContent = randomNum;
    
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.guess').style.backgroundColor ='#60b347';
    
    document.querySelector('.number').style.width = '40vh';

    if(score>highscore){
      highscore=score;
      document.querySelector('.highscore').textContent=highscore;
    }
  } 
  
  else if(guess!==randomNum){
    if (score > 1) {
      // document.querySelector(".message").textContent = guess>randomNum?'⬆ Too High!':'⬇ Too Low!';
      displayMessage(guess>randomNum?'⬆ Too High!':'⬇ Too Low!');

      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "😑You Lost!";
      displayMessage('😑You Lost!');
      document.querySelector(".score").textContent = 0;
    }
  }

//   else if (guess > randomNum) {   //  when guess too high
//     if (score > 1) {
//       document.querySelector(".message").textContent = "⬆ Too High!";
//       score--;
//       document.querySelector(".score").textContent = score;
//     } else {
//       document.querySelector(".message").textContent = "😑You Lost!";
//       document.querySelector(".score").textContent = 0;
//     }
//   } 
  
//   else if (guess < randomNum) {   //  when guess too low
//     if (score > 1) {
//       document.querySelector(".message").textContent = "⬇ Too Low!";
//       score--;
//       document.querySelector(".score").textContent = score;
//     } else {
//       document.querySelector(".message").textContent = "😑You Lost!";
//       document.querySelector(".score").textContent = 0;
//     }
//   }
});


document.querySelector('.again').addEventListener('click', function(){
  score=20;
  randomNum = Math.trunc(Math.random() * 20) + 1;
  
  // document.querySelector('.message').textContent='Start Guessing...';
  displayMessage('Start Guessing...');
  
  document.querySelector(".score").textContent = score;

  document.querySelector(".number").textContent = '?';

  document.querySelector('.guess').value ='';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.guess').style.backgroundColor ='#222';

  document.querySelector('.number').style.width = '20vh';
});