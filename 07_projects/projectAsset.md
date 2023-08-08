# Projects related to DOM

## Project link
[Click Here](https://github.com/ayush-kumar774/javascript-learning/tree/main/07_projects)

# Solution code

## Project 1
```javascript
console.log("Project 1");
const buttons = document.querySelectorAll('.button');
// console.log(buttons);
const body = document.querySelector("body");

buttons.forEach( (button) => {
    // console.log(button);
    button.addEventListener
    ('click', (event) => {
            // console.log(event);
            // console.log(event.target);

            // Optimal approach since we know that each button is having an id 
            // which is representing a color, so we can directly assign the color to the background of the body.

            const colorID = event.target.id;
            body.style.backgroundColor = colorID;

            // Naive Solution
            // switch (colorID) {
            //     case 'grey':
            //         body.style.backgroundColor = 'grey';
            //         break;

            //     case 'white':
            //         body.style.backgroundColor = 'white';
            //         break;

            //     case 'blue':
            //         body.style.backgroundColor = 'blue';
            //         break;

            //     case 'yellow':
            //         body.style.backgroundColor = 'yellow';
            //         break;
        
            //     default:
            //         body.style.backgroundColor = 'black';
            //         break;
            // }
        }
    )
} )
```


## Project 2
```javascript
const form = document.querySelector('form');

// console.log(form);
// this usecase will give you empty height
// const height = parseFloat(document.querySelector('#height').value);


form.addEventListener('submit', (event) => {
    event.preventDefault();

    const heightInput = document.querySelector('#height');
    const weightInput = document.querySelector('#weight');
    const results = document.querySelector('#results');

    // Clear previous results
    results.innerHTML = '';

    // Get the input values and validate
    const heightValue = heightInput.value.trim();
    const weightValue = weightInput.value.trim();

    if (!heightValue || isNaN(parseFloat(heightValue)) || !isFinite(heightValue) || parseFloat(heightValue) <= 0) {
        results.innerHTML = "Please provide a valid positive height.";
        return; // Stop execution if height is invalid
    }

    if (!weightValue || isNaN(parseFloat(weightValue)) || !isFinite(weightValue) || parseFloat(weightValue) <= 0) {
        results.innerHTML = "Please provide a valid positive weight.";
        return; // Stop execution if weight is invalid
    }

    // Parse the validated values to floats
    const height = parseFloat(heightValue);
    const weight = parseFloat(weightValue);

    let bmiCalculated = ((weight / height / height) * 10000).toFixed(2);
    console.log(bmiCalculated);

    const bmiRange = '';
    if (bmiCalculated < 18.6) {
        bmiRange = 'Under Weight';
    }
    else if (bmiCalculated >= 18.6 && bmiCalculated <= 24.9) {
        bmiRange = 'Normal Range' ;
    }
    else {
        bmiRange = 'OverWeight';
    }
    results.innerHTML = `<span>Your BMI is ${bmiCalculated}</span><br>
    <span>You are ${bmiRange}.</span>`;
});

```

## Project 3
```javascript
const clock = document.getElementById('clock');
// const clock = document.querySelector('#clock');

setInterval( function() {
    let date = new Date();
    // console.log(date.toLocaleTimeString());
    clock.innerHTML= date.toLocaleTimeString();
}, 1000);
```

## Project 4
```javascript

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

```

## Project 5
```javascript
console.log('Project 5');

const insert = document.getElementById('insert') ;

window.addEventListener('keydown', (event) => {
    insert.innerHTML = `
    <div class='color'>
        <table>
            <tr> 
                <th> Key </th>
                <th> Keycode </th>
                <th> Code </th>
            </tr>
            <tr>
                <th> ${event.key === ' ' ? 'Space' : event.key} </th>
                <th> ${event.keyCode} </th>
                <th> ${event.code} </th>
            </tr>
        </table>
    </div>
    `
})
```


## Project 6
```javascript
// generate a random color

const randomColor = function () {
    const hex = "0123456789ABCDEF";
    let color = '#';
    for (let i = 0; i < 6; ++i) {
        color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
};

let intervalId ;

const startChangingColor = function () {

    if (!intervalId) {
        intervalId = setInterval(changeBGColor, 1000);
    }
    
    function changeBGColor() { 
        document.body.style.backgroundColor = randomColor(); 
    }
};

const stopChangingColor = function () {
    clearInterval(intervalId);
    intervalId = null;
};

document.querySelector('#start').addEventListener('click', startChangingColor);
document.querySelector('#stop').addEventListener('click', stopChangingColor);
```