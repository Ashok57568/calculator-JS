/*
 * Implement all your JavaScript in this file!
 */
// Select the HTML elements we will be working with
// Get references to DOM elements
const display = document.getElementById("display");
const buttons = document.getElementsByTagName("button");
const addButton = document.getElementById("addButton");
const subtractButton = document.getElementById("subtractButton");
const multiplyButton = document.getElementById("multiplyButton");
const divideButton = document.getElementById("divideButton");
const equalsButton = document.getElementById("equalsButton");
const clearButton = document.getElementById("clearButton");

// Add event listeners to buttons
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function() {
    // Get the value of the clicked button
    const buttonValue = this.value;

    // Handle the button click based on its value
    switch(buttonValue) {
      case "C":
        // Clear the display
        display.value = "";
        break;
      case "=":
        // Evaluate the expression and update the display
        try {
          display.value = eval(display.value);
        } catch(error) {
          display.value = "Error";
        }
        break;
      default:
        // Append the button value to the display
        display.value += buttonValue;
    }
  });
}
addButton.addEventListener("click", () => {
    const expression = display.value;
    if (expression) {
      const result = eval(expression);
      display.value = result + " + ";
    }
  });
  
  subtractButton.addEventListener("click", () => {
    const expression = display.value;
    if (expression) {
      const result = eval(expression);
      display.value = result + " - ";
    }
  });
  
  multiplyButton.addEventListener("click", () => {
    const expression = display.value;
    if (expression) {
      const result = eval(expression);
      display.value = result + " * ";
    }
  });
  
  divideButton.addEventListener("click", () => {
    const expression = display.value;
    if (expression) {
      const result = eval(expression);
      display.value = result + " / ";
    }
  });
  equalsButton.addEventListener("click", () => {
    const expression = display.value;
    if (expression) {
      const result = eval(expression);
      display.value = result;
    }
  });
  
  clearButton.addEventListener("click", () => {
    display.value = "";
  });
  
  

