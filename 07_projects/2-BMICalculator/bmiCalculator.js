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

    results.innerHTML = `Your BMI is ${bmiCalculated}<br>
    Please refer to the BMI Weight Guide given below.`;
});

