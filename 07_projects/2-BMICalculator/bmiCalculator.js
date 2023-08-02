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

    const bmiCalculated = ((weight / height / height) * 10000).toFixed(2);
    console.log(bmiCalculated);

    let bmiRange = '';
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