const userInput = document.querySelector('#guessField');
const SubmitBtn = document.querySelector('#subt');
const guessSlots = document.querySelector('.guesses');
const remainingGuesses = document.querySelector('.lastResult');
const suggestionGuess = document.querySelector('.lowOrHi');

//generating the random number for the game using Math.random() methode.

let randomNumber = parseInt(Math.random()*100 +1);
console.log(randomNumber)
let prevGuess = [];
let numGuses = 1;
let playGame = true;


  if(playGame){
    SubmitBtn.addEventListener('click', function (e) {
      e.preventDefault();
      let userGuess = parseInt(userInput.value);
      validateGuess(userGuess);
    });
  }




function validateGuess(userGuess) {
  if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
    alert('Please enter a valid number between 1 to 100');
  } else {
    prevGuess.push(userGuess);
    if(numGuses > 10 ){
      endGame()
    }else{
      checkGuess(userGuess);
      displayGuess(userGuess);
    } 
  }
}

function checkGuess(userGuess){
  if(userGuess === randomNumber){
    alert('you won the game')
  }
}

function displayGuess(guess) {
  userInput.value = '';
  guessSlots.innerHTML += `${guess}, `;
  numGuses++;
  remainingGuesses.innerHTML = `${11 - numGuses}`
}

function endGame(){
  userInput.value = "";
  userInput.setAttribute ('disabled', '')
  playGame = false;
  btnAction()
}

function btnAction(){
  SubmitBtn.value = 'Game Over'
  setTimeout(function(){
    SubmitBtn.value = 'Start New Game'
    gameStart()
  },1000)
}

function gameStart(){
  // SubmitBtn.removeAttribute ('disabled', '')
  if(SubmitBtn.value === 'Start New Game' ){
    SubmitBtn.addEventListener('click', function(e){
      SubmitBtn.value = "submit Guess"
      userInput.removeAttribute ('disabled', '')
      randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuses = 1;
    guessSlots.innerHTML = '';
    remainingGuesses.innerHTML = `${11 - numGuses} `;
      playGame = true;
    })
  }  
}
