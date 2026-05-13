// Copyright 2018 - Samuel Dominic Chukwuemeka (Samdom For Peace)
// www.samuelchukwuemeka.com
// www.chukwuemekasamuel.com
// www.chukwuemeka-samuel.appspot.com
// www.numbersandnotations.appspot.com

"use strict";

// Calculate the GCF of an array of numbers
document.getElementById("gcfArray").addEventListener("submit", gcfArray);
function gcfArray(event) {
    event.preventDefault();

    var array1GCF = document.getElementById("array1GCF").value,
        arrayGCF = array1GCF.split(','),
        answerGCF;
        
    var greatestCommonFactor = function (a, b) {
        return a ? greatestCommonFactor(b % a, a) : b;
    };

    answerGCF = arrayGCF.reduce(greatestCommonFactor);
        
document.getElementById("answerGCF").value = answerGCF;
}


// Calculate the LCM of an array of numbers
document.getElementById("lcmArray").addEventListener("submit", lcmArray);
function lcmArray(event) {
    event.preventDefault();
    event.stopPropagation();

    var array1LCM = document.getElementById("array1LCM").value,
        arrayLCM = array1LCM.split(','),
        answerLCM;
        
    var greatestCommonDivisor = function (a, b) {
        return a ? greatestCommonDivisor(b % a, a) : b;
    };

    var leastCommonMultiple = function (a, b) {
        return Math.abs(a * b) / greatestCommonDivisor(a, b);
    };

    answerLCM = arrayLCM.reduce(leastCommonMultiple);
        
document.getElementById("answerLCM").value = answerLCM;
}


// Add, Subtract, Multiply, and Divide Fractions
document.getElementById("addSubtractMultiplyDivide").addEventListener("submit", addSubtractMultiplyDivide);
function addSubtractMultiplyDivide(event) {
    event.preventDefault();
    event.stopPropagation();

    var operations = document.getElementById("operations").value,
        answerOperations;
        
    answerOperations = math.simplify(operations).toString();
        
document.getElementById("answerOperations").value = answerOperations;
}

