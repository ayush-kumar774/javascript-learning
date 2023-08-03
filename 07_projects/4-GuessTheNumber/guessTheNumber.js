let randomNumber = parseInt( Math.random() * 100 + 1 ) ;
// console.log("Random number: " , randomNumber);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let guessNum =  1 ;

let playGame = true ;

if (playGame) {
    submit.addEventListener('click' , function (event) {
        event.preventDefault();
        const currentGuess = parseInt(userInput.value );
        console.log(currentGuess);
        validateGuess(currentGuess);
    })
}

function validateGuess (guess) {
    if (isNaN (guess)) {
        alert ("Please enter a valid number");
    } 
    else if (guess < 1) {
        alert ("Please enter a number more than or equal to 1");
    }
    else if (guess > 100) {
        alert("Please enter a number lesser then or equal to 100")
    }
    else {
        prevGuess.push(guess);
        if (guessNum === 10) {
            displayGuess(guess);
            displayMessage(`Game Over. Random number was ${randomNumber}`);
            endGame();
        }
        else {
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}

function checkGuess (guess) {
    if (guess === randomNumber) {
        displayMessage(`You guessed it right`);
        endGame();
    }
    else if (guess < randomNumber) {
        displayMessage(`Number is TOOOO low`);
    }
    else if (guess > randomNumber) {
        displayMessage(`Number is TOOOO high`);
    }
}

function displayGuess (guess) {
    userInput.value = '';
    guessSlot.innerHTML += `${guess} `;
    guessNum++;
    remaining.innerHTML = `${11 - guessNum}`;
}

function displayMessage (message) {
    lowOrHi.innerHTML = `<h2>${message}</h2>`
}

function endGame () {
    userInput.value = '';
    userInput.setAttribute('disabled', ''); // this function take key value pair.
    p.classList.add('button');
    p.innerHTML = `<h2 id="newGame"> Start game again </h2>`
    startOver.appendChild(p);
    playGame = false;
    newGame();
}

function newGame () {
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click', function (event) {
        randomNumber = parseInt(Math.random() * 100 + 1);
        prevGuess = [];
        guessNum = 1;
        guessSlot.innerHTML = '';
        remaining.innerHTML = `${11 - guessNum} `;
        userInput.removeAttribute('disabled');
        startOver.removeChild(p);

        playGame = true;
    });
};