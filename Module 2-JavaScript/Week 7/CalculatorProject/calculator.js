const operators = ["+", "-", "/", "*"];

let output = document.getElementById("output");
let operationHistory = document.getElementById("operation-history");
let operator = document.getElementsByClassName("operator");
let equals = document.getElementById("equalSign").value;
let dot = document.getElementById("dot").value;

let firstNum = true;

let numbers = [];
let operatorValue;
let lastOperator;
let calcOperator;

let total;

function numberBtn(btn) {
    lastOperator = btn;
    //if button is not an operator or = sign
    if(!operators.includes(btn) && btn!= equals) {
        //if it is the first button clicked
        if(firstNum) {
            //and it's a dot, show 0.
            if(btn == dot) {
                output.innerText = "0" + dot;
            } 
            //else clear output and show the number
            else {
                output.innerText = btn;
            }
            firstNum = false;
        }
        else {
            //return if the output value is 0
            if(output.innerText.length == 1 && output.innerText == 0) {
                if(btn == dot) {
                    output.innerText += btn;
                }
                return;
            }
            //return if the output already has dot and clicked btn is a dot
            if(output.innerText.includes(dot) && btn == dot) {
                return;
            }

            //max allowed numbers inputted are 20
            if(output.innerText.length == 20) {
                return;
            }

            //if pressed dot and output already has - sign, show -0
            if(btn == dot && output.innerText == "-") {
                output.innerText = "-0" + dot;
            }
            //else append number
            else {
                output.innerText += btn;
            }
        }
    }
    //if it's an operator or = sign
    else {
        //return if operator is already pressed
        if(operatorValue != null &&  btn == operatorValue) {
            return;
        }
        //show minus sign if its the first value selected and finally return
        if(btn == "-" && output.innerText == 0) {
            output.innerText = btn;
            firstNum = false;
            operatorValue = btn;
            showSelectedOperator();
            return;
        }
        //return if minus operator pressed and its already printed on screen
        else if (operators.includes(btn) && output.innerText == "-") {
            return;
        }
        //return if minus operator pressed and history already has equal sign
        else if (btn == "-" && operatorValue == "-" && 
        operationHistory.innerText.includes("=")) {
            return;
        }

        //set value of operator if it's one
        if(operators.includes(btn)) {
            if(typeof lastOperator != "undefined" && lastOperator != null) {
                calcOperator = lastOperator;
            }
            else {
                calcOperator = btn;
            }
            if(btn == "*") {
                lastOperator = "x";
            } 
            else if (btn == "/") {
                lastOperator = "/";
            } 
            else {
                lastOperator = btn;
            }
            operatorValue = btn;
            firstNum = true;
            showSelectedOperator();
        }

        //add first number to numbers array and show it on history
        if (numbers.length == 0) {
            numbers.push(output.innerText);
            if(typeof lastOperator != "undefined" && lastOperator != null) {
                operationHistory.innerText = output.innerText + " " + lastOperator;
            }
        }
        //rest of calculations
        else {
            if (numbers.length == 1) {
                numbers[1] = output.innerText;
            }
            let temporaryNum = output.innerText;

            //calculate total
            if(btn == equals && calcOperator != null) {
                total = calculate(numbers[0], numbers[1], calcOperator);
                output.innerText = total;

                //append second number to history
                if(!operationHistory.innerText.includes("=")) {
                    operationHistory.innerText += " " + numbers[1] + " =";
                }

                temporaryNum = numbers[0];

                numbers[0] = total;
                operatorValue = null;
                showSelectedOperator();

                //replace first numb history w/ the value of total
                let historyArray = operationHistory.innerText.split(" ");
                historyArray[0] = temporaryNum;
                operationHistory.innerText = historyArray.join(" ");
            }
            //update history w/ the value on screen&the pressed operator
            else if (calcOperator != null) {
                operationHistory.innerText = temporaryNum + " " + lastOperator;
                calcOperator = btn;
                numbers = [];
                numbers.push(output.innerText);
            }
        }
    }
}
//highlight operator button when selected
function showSelectedOperator() {
    
    for(let i = 0; i < operator.length; i++) {
        operator[i].style.backgroundColor = "#A15D98";
    }

    if(operatorValue == "+") {
        document.getElementById("add").style.backgroundColor = "#E4CEE0";
    } else if (operatorValue == "-") {
        document.getElementById("subtract").style.backgroundColor = "#E4CEE0";
    } else if (operatorValue == "*") {
        document.getElementById("multiply").style.backgroundColor = "#E4CEE0";
    } else if (operatorValue == "/") {
        document.getElementById("divide").style.backgroundColor = "#E4CEE0";
    }
}
//calculates result using 2 numbers and an operator
function calculate(num1, num2, operator) {
    if(operator === "+") {
        total = (parseFloat)(num1) + (parseFloat)(num2);
    } else if (operator === "-") {
        total = (parseFloat)(num1) - (parseFloat)(num2);
    } else if (operator === "*") {
        total = (parseFloat)(num1) * (parseFloat)(num2);
    } else if (operator === "/") {
        total = (parseFloat)(num1) / (parseFloat)(num2);
    } else {
        if(total == output.innerText) {
            return total;
        } else {
            return output.innerText;
        }
    }
    //if total is not integer, show max 12 decimal places
    if(!Number.isInteger(total)) {
        total = total.toPrecision(12);
    }

    return parseFloat(total);
}
//function to clear output and reset everything 
function clearBtn() {
    window.location.reload();
}
//clears last number typed into display
function backspaceBtn() {
    if(numbers.length > 0 && typeof lastOperator != "undefined") {
        output.innerText = 0;
        let temporary = numbers[0];
        numbers = [];
        numbers.push(temporary);
        firstNum = true;
    }
}
//calculate the percentage of a number
function calcPercent() {
    if(numbers.length > 0 && typeof lastOperator != "undefined") {
        if(lastOperator == "+" ||  lastOperator == "-") {
            output.innerText = numbers * output.innerText / 100;
        } else {
            output.innerText = output.innerText / 100;
        }
    } else {
        output.innerText / 100;
    }
    numbers = [];
    numbers.push(output.innerText);

    //deselect operator if any selected
    for(let i = 0; i < operator.length; i++) {
        operator[i].style.backgroundColor = "#A15D98";
    }
}
//function to change sign of the number currently shown
function plusMinus() {
    //if any operator is already selected
    if (typeof lastOperator != "undefined") {
        if(numbers.length > 0) {
            //if last button pressed is an operator
            if(operators.includes(lastOperator)) {
                //if the displayed txt is just a negative sign, replace it with a 0
                if(output.innerText == "-") {
                    output.innerText = 0;
                    firstNum = true;
                    return;
                } //if the displayed text is NOT just a negative sign, replace it with a neg sign
                else {
                    output.innerText = "-";
                    firstNum = false;
                }
            }
            //if last button pressed is not an operator, change its sign
            else {
                output.innerText = -output.innerText;
                if(numbers.length == 1) {
                    numbers[0] = output.innerText;
                } else {
                    numbers[1] = output.innerText;
                }
            }
        }
        return;
    }
    //if displayed text is 0, replace it with a neg sign
    if(output.innerText == 0) {
        output.innerText = "-";
        firstNum = false;
        return;
    }
    output.innerText = -output.innerText;
}
//calculates the division of 1 with the number currently on screen
function divOne() {
    let denominatorNum = 1/output.innerText;
    output.innerText = denominatorNum;
    numbers.push(denominatorNum);
}
//calculates the power of number currently on screen
function squared() {
    let squaredNum = Math.pow(output.innerText, 2);
    output.innerText = squaredNum;
    numbers.push(squaredNum);
}
//calculates the square root of number currently on screen
function squareRoot() {
    let squareRootNum = Math.sqrt(output.innerText);
    output.innerText = squareRootNum;
    numbers.push(squareRootNum);
}

document.addEventListener('keydown', pressedKey);
//function to capture keydown events
function pressedKey(e) {
    e.preventDefault();

    if(e.key == "Delete") {
        clearBtn();
        return;
    }

    let isNumber = isFinite(e.key);
    let pressEnter;
    let pressDot;
    let pressComma = false;

    if (e.key == "Enter") {
        pressEnter = equals;
    }
    if (e.key == ".") {
        pressDot = dot;
    }
    if (e.key == ",") {
        pressComma = true;
    }

    if (isNumber || operators.includes(e.key) || e.key == "Enter" || e.key == pressDot || pressComma) {
        if (e.key == "Enter") {
            numberBtn(pressEnter);
        }
        else if (pressComma) {
            numberBtn(dot);
        } 
        else {
            numberBtn(e.key);
        }
    }

}