// Variables to store calculations
let totalTip = 0;
let calculatedTotalPerPerson = 0;
let tipPercentage = 0;
let tipPerPersonValue = 0;
let totalPerPersonValue = 0;

// DOM elements
const billValue = document.getElementById("bill");
const tipPerPerson = document.getElementById("tipAmountPerPerson");
const totalPricePerPerson = document.getElementById("totalPerPerson");
const numOfPeople = document.getElementById("numOfPeople");
const customTipInput = document.getElementById("custom");
const reset = document.getElementById("reset");
const errorLabel = document.getElementById("redError");

// Function to calculate the total amount per person (without tip)
const calculatePerPerson = () => {
    const bill = parseFloat(billValue.value) || 0;  // Get bill value, default to 0 if empty
    const people = parseInt(numOfPeople.value);

    // Check if number of people is valid
    if (people === 0 || isNaN(people)) {
        numOfPeople.classList.add("redBorder");
        errorLabel.style.display = "block";
        return;
    }
    numOfPeople.classList.remove("redBorder");
    errorLabel.style.display = "none";

    // Calculate total amount per person (without tip)
    calculatedTotalPerPerson = bill / people;

    totalPerPersonValue = calculatedTotalPerPerson + tipPerPersonValue;

    totalPricePerPerson.innerHTML = totalPerPersonValue.toFixed(2);  // Show total per person
    tipPerPerson.innerHTML = tipPerPersonValue.toFixed(2);  // Show tip per person
};

// Function to calculate the tip per person
const calculateTip = (userPercentage = 0) => {
    const bill = parseFloat(billValue.value) || 0;  // Get bill value, default to 0 if empty
    const people = parseInt(numOfPeople.value);

    // Check if number of people is valid
    if (people === 0 || isNaN(people)) {
        numOfPeople.classList.add("redBorder");
        errorLabel.style.display = "block";
        return;
    }
    numOfPeople.classList.remove("redBorder");
    errorLabel.style.display = "none";

    tipPercentage = bill * (userPercentage / 100);
    tipPerPersonValue = tipPercentage / people;

    // Recalculate the total per person (including the tip)
    calculatePerPerson();
};

// Event listeners to trigger calculation when bill or number of people changes
billValue.addEventListener("input", () => {
});

numOfPeople.addEventListener("input", () => {
});


function userTipPercentage(userPercentage) {
    calculateTip(userPercentage);
}

customTipInput.addEventListener("input", () => {
    const customTipValue = parseFloat(customTipInput.value);
    
    if (!isNaN(customTipValue) && customTipValue >= 0) {
        // Call calculateTip with the custom percentage
        calculateTip(customTipValue);
    }
});

// Reset all values
reset.addEventListener("click", () => {
    billValue.value = "";
    numOfPeople.value = "";
    tipPerPerson.innerHTML = "0.00";
    totalPricePerPerson.innerHTML = "0.00";
    customTipInput.value = "";
    tipPerPersonValue = 0;
    tipPercentage = 0;
    totalPerPersonValue = 0;
});
