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

// Function to calculate the total amount per person (without tip)
const calculatePerPerson = () => {
    const bill = parseFloat(billValue.value) || 0;  // Get bill value, default to 0 if empty
    const people = parseInt(numOfPeople.value) || 1;  // Get number of people, default to 1 if empty

    // Calculate total amount per person (without tip)
    calculatedTotalPerPerson = bill / people;

    // Calculate the total amount per person (including tip)
    totalPerPersonValue = calculatedTotalPerPerson + tipPerPersonValue;

    // Update the DOM with the calculated values
    totalPricePerPerson.innerHTML = totalPerPersonValue.toFixed(2);  // Show total per person
    tipPerPerson.innerHTML = tipPerPersonValue.toFixed(2);  // Show tip per person
};

// Function to calculate the tip per person
const calculateTip = (userPercentage = 0) => {
    const bill = parseFloat(billValue.value) || 0;  // Get bill value, default to 0 if empty
    const people = parseInt(numOfPeople.value) || 1;  // Get number of people, default to 1 if empty

    // Calculate the tip based on the user-provided percentage
    tipPercentage = bill * (userPercentage / 100);
    
    // Calculate the tip amount per person
    tipPerPersonValue = tipPercentage / people;

    // Recalculate the total per person (including the tip)
    calculatePerPerson();
};

// Event listeners to trigger calculation when bill or number of people changes
billValue.addEventListener("change", calculatePerPerson);
numOfPeople.addEventListener("change", calculatePerPerson);

// Function to be called when the user inputs a tip percentage
function userTipPercentage(userPercentage) {
    calculateTip(userPercentage);
}
