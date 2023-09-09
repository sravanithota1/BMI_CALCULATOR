document.querySelectorAll(".container button").forEach(function (button) {
    button.addEventListener("click", function () {
        console.log("Button clicked");
        const name = document.getElementById('name').value.trim();
        const gender = this.getAttribute('data-gender');

        let greeting = 'Hi';

        if (gender === 'Mr.') {
            greeting += ' Mr.';
        } else if (gender === 'Ms.') {
            greeting += ' Ms.';
        }

        greeting += ' ' + name + '! Please enter your details.';
        document.getElementById('greeting').textContent = greeting;
        document.getElementById('name').value = '';

        // Hide the greeting form and show the BMI calculator
        document.getElementById('greeting-container').style.display = 'none';
        document.getElementById('bmi-container').style.display = 'block';
        document.body.style.background = "url('bg.jpg')";
    });
});
// Get references to the name input and gender buttons
const nameInput = document.getElementById('name');
const mrButton = document.querySelector('button[data-gender="Mr."]');
const msButton = document.querySelector('button[data-gender="Ms."]');

// Function to enable or disable gender buttons
function toggleGenderButtons() {
    if (nameInput.value.trim() !== '') {
        mrButton.disabled = false;
        msButton.disabled = false;
    } else {
        mrButton.disabled = true;
        msButton.disabled = true;
    }
}

// Initially, disable gender buttons
toggleGenderButtons();


function calculateBMI() {
    document.getElementById('underweightImage').style.display = 'none';
    document.getElementById('normalImage').style.display = 'none';
    document.getElementById('overweightImage').style.display = 'none';
    document.getElementById('obeseImage').style.display = 'none';
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value) / 100; // Convert height to meters
    const bmi = weight / (height * height);
    let measure = '';

    if (height <= 0) {
        measure = "Invalid Values";
    } else if (bmi <= 0) {
        measure = "Invalid Values";
    } else if (bmi >= 1 && bmi <= 18.4) {
        measure = "Your BMI is " + bmi.toFixed(2) + " which means you are Underweight.";
        measure += " Consider including more nutritious foods in your diet.";
        document.getElementById('underweightImage').style.display = 'inline-block';
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        measure = "Your BMI is " + bmi.toFixed(2) + " which means you are Normal.";
        measure += " Keep up the healthy lifestyle!";
        document.getElementById('normalImage').style.display = 'inline-block';
    } else if (bmi >= 25 && bmi <= 29.9) {
        measure = "Your BMI is " + bmi.toFixed(2) + " which means you are Overweight.";
        measure += " Focus on balanced eating and regular exercise.";
        document.getElementById('overweightImage').style.display = 'inline-block';
    } else if (bmi >= 30) {
        measure = "Your BMI is " + bmi.toFixed(2) + " which means you are Obese.";
        measure += "\n Consult a Doctor.You can even refer the following diet";
        document.getElementById('obeseImage').style.display = 'inline-block';
    }
    const result = measure;
    document.getElementById('result').textContent = measure;
    document.getElementById('result-container').style.display = 'block';
}

function PreviousForm() {
    document.getElementById('name').value = '';
    document.getElementById('greeting').textContent = '';
    document.getElementById('greeting-container').style.display = 'block';
    document.getElementById('bmi-container').style.display = 'none';
    document.body.style.background = "url('bg.jpg')";
}
function PreviousPage() {
    location.reload();
}
