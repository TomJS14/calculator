/* Selectors */
const calculator = document.querySelector(".calculator")
const lastScreen = calculator.querySelector(".last-screen")
const displayScreen = calculator.querySelector(".current-screen");
const calculatorKeys = calculator.querySelector(".calculator-keys");


/* Initial variables */
let firstNumber = 0
let secondNumber = 0
let operand = ""
let result = 0
let calculationPerformed = false;

/* Variables used to convert firstNumber & secondNumber from strings to floats later */
let num1;
let num2; 



/* Calculator */

calculatorKeys.addEventListener("click", e => {
    if (!e.target.closest("button")) {return}; //If click is not the button then return, (stops the calculator body triggering event)

    //assign variables for later use
    const key = e.target;
    const keyValue = e.target.textContent;
    const displayValue = displayScreen.textContent;
    const type = key.dataset.type
    const previousKeyType = calculator.dataset.previousKeyType
    
    if (type == "number") {
        if (previousKeyType == "equals") {
            clear()
            console.log("test")
        }
        else if (calculationPerformed || displayValue == 0 || previousKeyType == "operator") {
            displayScreen.textContent = keyValue;
            calculationPerformed = false;
        } else if (keyValue =="." && displayValue.includes(".")) {
            return
        } 
        else 
        {
        displayScreen.textContent += keyValue;
        }
        
    
    }

    //check if the key pressed is an operator
    if (type === "operator"){       
        operand = key.dataset.key;
        lastScreen.textContent = operand;
        firstNumber = displayScreen.textContent;
        calculationPerformed = false;
    }

    if (type === "equals" && previousKeyType != "clear" && previousKeyType != "equals" && operand != ""){
        num1 = parseFloat(firstNumber);
        num2 = parseFloat(displayScreen.textContent);
        if (operand === "+") result = num1 + num2;
        if (operand === "×") result = num1 * num2;
        if (operand === "÷") result = num1 / num2;
        if (operand === "−") result = num1 - num2;

        displayScreen.textContent = result.toString().slice(0, 8);
        calculationPerformed = true;
        lastScreen.textContent = `${num1} ${operand} ${num2}`; 
    };

    /* check to perform subsequent calculations if equals repeatedly pressed */
    if (type === "equals" && previousKeyType === "equals" && operand != ""){
        num1 = parseFloat(displayScreen.textContent);
        if (operand === "+") result = num1 + num2;
        if (operand === "×") result = num1 * num2;
        if (operand === "÷") result = num1 / num2;
        if (operand === "−") result = num1 - num2;

        displayScreen.textContent = result.toString().slice(0, 8);
        calculationPerformed = true;
        lastScreen.textContent = `${num1} ${operand} ${num2}`; 
    };

    /* Clear the calculator */
    function clear() {
        result = 0;
        firstNumber = 0;
        secondNumber = 0;
        num1 = 0;
        num2 = 0;
        operand = ""      
        lastScreen.textContent = "";
        displayScreen.textContent = result;
    }

    if (type === "clear") {
        clear()
        
    };

    calculator.dataset.previousKeyType = type
});
