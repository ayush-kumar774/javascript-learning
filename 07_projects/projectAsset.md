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

    const height = parseFloat(document.querySelector('#height').value);
    const weight = parseFloat(document.querySelector('#weight').value);
    const bmiCalculated = ((weight / height / height) * 10000).toFixed(2) ;
    console.log(bmiCalculated);

    document.querySelector('#results').innerText =  `Your BMI is ${bmiCalculated}\n
    Please refer to the BMI Weight Guide given below.`;

}) 
```