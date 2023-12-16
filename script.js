function add() {
  const firstNumber = parseFloat(prompt("Enter the first number:"));
  const secondNumber = parseFloat(prompt("Enter the second number:"));
  const result = firstNumber + secondNumber;
  alert("The result is: " + result);
}

function subtract() {
  const firstNumber = parseFloat(prompt("Enter the first number:"));
  const secondNumber = parseFloat(prompt("Enter the second number:"));
  const result = firstNumber - secondNumber;
  alert("The result is: " + result);
}

function multiply() {
  const firstNumber = parseFloat(prompt("Enter the first number:"));
  const secondNumber = parseFloat(prompt("Enter the second number:"));
  const result = firstNumber * secondNumber;
  alert("The result is: " + result);
}

function divide() {
  const firstNumber = parseFloat(prompt("Enter the first number:"));
  const secondNumber = parseFloat(prompt("Enter the second number:"));
  const result = firstNumber / secondNumber;
  alert("The result is: " + result);
}

function simpleInterest() {
  const principal = parseFloat(prompt("Enter the your initial balance:"));
  const interestRate = parseFloat(prompt("Enter the your interest rate:"))/ 100;
  const year = parseFloat(prompt("Enter the duration in years:"));
  const result = principal * interestRate * year;
  alert("The result is: " + result);
}

function compoundInterest() {
  const principal = parseFloat(prompt("Enter the your initial balance:"));
  const interestRate = parseFloat(prompt("Enter the your interest rate:"))/ 100;
  const year = parseInt(prompt("Enter the duration in years:"));
  const result = principal * ((1 + interestRate) ** year);
  alert("The result is: " + result);
}