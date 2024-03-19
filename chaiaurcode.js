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



const userGuessEvent = function(e){
  if(playGame){
    e.preventDefault();
    let userGuess = parseInt(userInput.value);
    validateGuess(userGuess);
  }
}

SubmitBtn.addEventListener('click', userGuessEvent)
 




function validateGuess(userGuess) {
  if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
    alert('Please enter a valid number between 1 to 100');
    // displayMsg(`Please enter a valid number between 1 to 100`)
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
    displayMsg(`You won the Game. Random number was ${randomNumber}`)
  }
}

function displayMsg(msg){
  suggestionGuess.innerHTML = `<h3>${msg}</h3>`
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
  SubmitBtn.setAttribute ('disabled', '')
  playGame = false;
  btnAction()
}

function btnAction(){
  SubmitBtn.value = 'Game Over'
  SubmitBtn.removeEventListener('click', userGuessEvent)
  setTimeout(function(){
    SubmitBtn.value = 'Start New Game'
    SubmitBtn.removeAttribute('disabled', '')
    SubmitBtn.addEventListener('click', gameStart)
  },1000)
}



function gameStart(e){
  e.preventDefault()
  SubmitBtn.value = "submit Guess"
  userInput.removeAttribute ('disabled', '')
  randomNumber = parseInt(Math.random() * 100 + 1);
  // console.log(randomNumber)
  prevGuess = [];
  numGuses = 1;
  guessSlots.innerHTML = '';
  remainingGuesses.innerHTML = `${11 - numGuses} `;
  playGame = true;
  SubmitBtn.removeEventListener('click', gameStart)
  SubmitBtn.addEventListener('click', userGuessEvent)
}
