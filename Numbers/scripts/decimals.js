// Copyright 2018 - Samuel Dominic Chukwuemeka (Samdom For Peace)
// www.samuelchukwuemeka.com
// www.chukwuemekasamuel.com
// www.chukwuemeka-samuel.appspot.com
// www.numbersandnotations.appspot.com

"use strict";

// Add, Subtract, Multiply, and Divide Decimals
document.getElementById("addSubtractMultiplyDivideDecimals").addEventListener("submit", addSubtractMultiplyDivideDecimals);
function addSubtractMultiplyDivideDecimals(event) {
    event.preventDefault();
    event.stopPropagation();

    var operationsDecimals = document.getElementById("operationsDecimals").value,
        answerOperationsDecimals;
        
    
    answerOperationsDecimals = math.eval(operationsDecimals);
        
document.getElementById("answerOperationsDecimals").value = answerOperationsDecimals;
}


