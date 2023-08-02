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