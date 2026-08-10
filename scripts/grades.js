/*
    Copyright 2023 - Samuel Dominic Chukwuemeka (SamDom For Peace)
    www.samuelchukwuemeka.com
    www.chukwuemekasamuel.com
    www.samdomforpeace.com

    www.quantitativereasoning.appspot.com
    message 1
*/

// Script to open and close sidebar
function w3_open() {
    document.getElementById("mySidebar").style.display = "block";
}

function w3_close() {
    document.getElementById("mySidebar").style.display = "none";
}

// Solutions to the Questions
function solutions(solution) {
    var e = document.getElementById(solution);
    if (e.style.display === 'block' || e.style.display ==='') e.style.display = 'none';
    else e.style.display = 'block';
  }
  
// Answers to the Questions
function toggle(answer) {
  var e = document.getElementById(answer);
  if (e.style.display === 'block' || e.style.display === '') e.style.display = 'none';
  else e.style.display = 'block';
}
  
// Used to toggle the menu on small screens when clicking on the menu button
function myFunction() {
  var x = document.getElementById("navDemo");
  if (x.className.indexOf("w3-show") == -1) {
    x.className += " w3-show";
  } else {
    x.className = x.className.replace(" w3-show", "");
  }
}


/* 
  MTH 154
  Given: Student MLM scores
  To Calculate: the current MLM grade and the cumulative MLM grade
*/

document.getElementById("gradeMLM").addEventListener("submit", gradeMLM);

function gradeMLM(event) {
    event.preventDefault();
    event.stopPropagation();

    var weightOneA1st = parseFloat(document.getElementById("weightOneA1st").value, 10) || 0,
        scoreOneA1st = parseFloat(document.getElementById("scoreOneA1st").value, 10) || 0,
        weightedScoreOneA1st,

        weightOneA2nd =+ parseFloat(document.getElementById("weightOneA2nd").value, 10) || 0,
        scoreOneA2nd =+ parseFloat(document.getElementById("scoreOneA2nd").value, 10) || 0,
        weightedScoreOneA2nd,

        weightOneB1st =+ parseFloat(document.getElementById("weightOneB1st").value, 10) || 0,
        scoreOneB1st =+ parseFloat(document.getElementById("scoreOneB1st").value, 10) || 0,
        weightedScoreOneB1st,

        weightOneB2nd =+ parseFloat(document.getElementById("weightOneB2nd").value, 10) || 0,
        scoreOneB2nd =+ parseFloat(document.getElementById("scoreOneB2nd").value, 10) || 0,
        weightedScoreOneB2nd,

        weightOneB3rd =+ parseFloat(document.getElementById("weightOneB3rd").value, 10) || 0,
        scoreOneB3rd =+ parseFloat(document.getElementById("scoreOneB3rd").value, 10) || 0,
        weightedScoreOneB3rd,
        
        weightOneC1st =+ parseFloat(document.getElementById("weightOneC1st").value, 10) || 0,
        scoreOneC1st =+ parseFloat(document.getElementById("scoreOneC1st").value, 10) || 0,
        weightedScoreOneC1st,

        weightOneC2nd =+ parseFloat(document.getElementById("weightOneC2nd").value, 10) || 0,
        scoreOneC2nd =+ parseFloat(document.getElementById("scoreOneC2nd").value, 10) || 0,
        weightedScoreOneC2nd,

        weightOneC3rd =+ parseFloat(document.getElementById("weightOneC3rd").value, 10) || 0,
        scoreOneC3rd =+ parseFloat(document.getElementById("scoreOneC3rd").value, 10) || 0,
        weightedScoreOneC3rd,

        weightOneD1st =+ parseFloat(document.getElementById("weightOneD1st").value, 10) || 0,
        scoreOneD1st =+ parseFloat(document.getElementById("scoreOneD1st").value, 10) || 0,
        weightedScoreOneD1st,

        weightOneD2nd =+ parseFloat(document.getElementById("weightOneD2nd").value, 10) || 0,
        scoreOneD2nd =+ parseFloat(document.getElementById("scoreOneD2nd").value, 10) || 0,
        weightedScoreOneD2nd,

        weightOneE1st =+ parseFloat(document.getElementById("weightOneE1st").value, 10) || 0,
        scoreOneE1st =+ parseFloat(document.getElementById("scoreOneE1st").value, 10) || 0,
        weightedScoreOneE1st,

        weightOneE2nd =+ parseFloat(document.getElementById("weightOneE2nd").value, 10) || 0,
        scoreOneE2nd =+ parseFloat(document.getElementById("scoreOneE2nd").value, 10) || 0,
        weightedScoreOneE2nd,

        weightTwoA1st =+ parseFloat(document.getElementById("weightTwoA1st").value, 10) || 0,
        scoreTwoA1st =+ parseFloat(document.getElementById("scoreTwoA1st").value, 10) || 0,
        weightedScoreTwoA1st,

        weightTwoA2nd =+ parseFloat(document.getElementById("weightTwoA2nd").value, 10) || 0,
        scoreTwoA2nd =+ parseFloat(document.getElementById("scoreTwoA2nd").value, 10) || 0,
        weightedScoreTwoA2nd,

        weightTwoA3rd =+ parseFloat(document.getElementById("weightTwoA3rd").value, 10) || 0,
        scoreTwoA3rd =+ parseFloat(document.getElementById("scoreTwoA3rd").value, 10) || 0,
        weightedScoreTwoA3rd,

        weightTwoB1st =+ parseFloat(document.getElementById("weightTwoB1st").value, 10) || 0,
        scoreTwoB1st =+ parseFloat(document.getElementById("scoreTwoB1st").value, 10) || 0,
        weightedScoreTwoB1st,

        weightTwoB2nd =+ parseFloat(document.getElementById("weightTwoB2nd").value, 10) || 0,
        scoreTwoB2nd =+ parseFloat(document.getElementById("scoreTwoB2nd").value, 10) || 0,
        weightedScoreTwoB2nd,

        weightTwoB3rd =+ parseFloat(document.getElementById("weightTwoB3rd").value, 10) || 0,
        scoreTwoB3rd =+ parseFloat(document.getElementById("scoreTwoB3rd").value, 10) || 0,
        weightedScoreTwoB3rd,

        weightTwoB4th =+ parseFloat(document.getElementById("weightTwoB4th").value, 10) || 0,
        scoreTwoB4th =+ parseFloat(document.getElementById("scoreTwoB4th").value, 10) || 0,
        weightedScoreTwoB4th,
        
        weightTwoC1st =+ parseFloat(document.getElementById("weightTwoC1st").value, 10) || 0,
        scoreTwoC1st =+ parseFloat(document.getElementById("scoreTwoC1st").value, 10) || 0,
        weightedScoreTwoC1st,

        weightTwoC2nd =+ parseFloat(document.getElementById("weightTwoC2nd").value, 10) || 0,
        scoreTwoC2nd =+ parseFloat(document.getElementById("scoreTwoC2nd").value, 10) || 0,
        weightedScoreTwoC2nd,

        weightThreeA1st =+ parseFloat(document.getElementById("weightThreeA1st").value, 10) || 0,
        scoreThreeA1st =+ parseFloat(document.getElementById("scoreThreeA1st").value, 10) || 0,
        weightedScoreThreeA1st,

        weightThreeA2nd =+ parseFloat(document.getElementById("weightThreeA2nd").value, 10) || 0,
        scoreThreeA2nd =+ parseFloat(document.getElementById("scoreThreeA2nd").value, 10) || 0,
        weightedScoreThreeA2nd,

        weightThreeA3rd =+ parseFloat(document.getElementById("weightThreeA3rd").value, 10) || 0,
        scoreThreeA3rd =+ parseFloat(document.getElementById("scoreThreeA3rd").value, 10) || 0,
        weightedScoreThreeA3rd,

        weightThreeA4th =+ parseFloat(document.getElementById("weightThreeA4th").value, 10) || 0,
        scoreThreeA4th =+ parseFloat(document.getElementById("scoreThreeA4th").value, 10) || 0,
        weightedScoreThreeA4th,

        weightThreeB1st =+ parseFloat(document.getElementById("weightThreeB1st").value, 10) || 0,
        scoreThreeB1st =+ parseFloat(document.getElementById("scoreThreeB1st").value, 10) || 0,
        weightedScoreThreeB1st,

        weightThreeB2nd =+ parseFloat(document.getElementById("weightThreeB2nd").value, 10) || 0,
        scoreThreeB2nd =+ parseFloat(document.getElementById("scoreThreeB2nd").value, 10) || 0,
        weightedScoreThreeB2nd,

        weightThreeB3rd =+ parseFloat(document.getElementById("weightThreeB3rd").value, 10) || 0,
        scoreThreeB3rd =+ parseFloat(document.getElementById("scoreThreeB3rd").value, 10) || 0,
        weightedScoreThreeB3rd,

        weightThreeC1st =+ parseFloat(document.getElementById("weightThreeC1st").value, 10) || 0,
        scoreThreeC1st =+ parseFloat(document.getElementById("scoreThreeC1st").value, 10) || 0,
        weightedScoreThreeC1st,

        weightThreeC2nd =+ parseFloat(document.getElementById("weightThreeC2nd").value, 10) || 0,
        scoreThreeC2nd =+ parseFloat(document.getElementById("scoreThreeC2nd").value, 10) || 0,
        weightedScoreThreeC2nd,

        weightThreeD1st =+ parseFloat(document.getElementById("weightThreeD1st").value, 10) || 0,
        scoreThreeD1st =+ parseFloat(document.getElementById("scoreThreeD1st").value, 10) || 0,
        weightedScoreThreeD1st,

        weightThreeD2nd =+ parseFloat(document.getElementById("weightThreeD2nd").value, 10) || 0,
        scoreThreeD2nd =+ parseFloat(document.getElementById("scoreThreeD2nd").value, 10) || 0,
        weightedScoreThreeD2nd,

        weightThreeE =+ parseFloat(document.getElementById("weightThreeE").value, 10) || 0,
        scoreThreeE =+ parseFloat(document.getElementById("scoreThreeE").value, 10) || 0,
        weightedScoreThreeE,

        weightFourA1st =+ parseFloat(document.getElementById("weightFourA1st").value, 10) || 0,
        scoreFourA1st =+ parseFloat(document.getElementById("scoreFourA1st").value, 10) || 0,
        weightedScoreFourA1st,

        weightFourA2nd =+ parseFloat(document.getElementById("weightFourA2nd").value, 10) || 0,
        scoreFourA2nd =+ parseFloat(document.getElementById("scoreFourA2nd").value, 10) || 0,
        weightedScoreFourA2nd,

        weightFourA3rd =+ parseFloat(document.getElementById("weightFourA3rd").value, 10) || 0,
        scoreFourA3rd =+ parseFloat(document.getElementById("scoreFourA3rd").value, 10) || 0,
        weightedScoreFourA3rd,

        weightFourB1st =+ parseFloat(document.getElementById("weightFourB1st").value, 10) || 0,
        scoreFourB1st =+ parseFloat(document.getElementById("scoreFourB1st").value, 10) || 0,
        weightedScoreFourB1st,

        weightFourB2nd =+ parseFloat(document.getElementById("weightFourB2nd").value, 10) || 0,
        scoreFourB2nd =+ parseFloat(document.getElementById("scoreFourB2nd").value, 10) || 0,
        weightedScoreFourB2nd,

        weightFourB3rd =+ parseFloat(document.getElementById("weightFourB3rd").value, 10) || 0,
        scoreFourB3rd =+ parseFloat(document.getElementById("scoreFourB3rd").value, 10) || 0,
        weightedScoreFourB3rd,

        weightFourB4th =+ parseFloat(document.getElementById("weightFourB4th").value, 10) || 0,
        scoreFourB4th =+ parseFloat(document.getElementById("scoreFourB4th").value, 10) || 0,
        weightedScoreFourB4th,
        
        weightFourC1st =+ parseFloat(document.getElementById("weightFourC1st").value, 10) || 0,
        scoreFourC1st =+ parseFloat(document.getElementById("scoreFourC1st").value, 10) || 0,
        weightedScoreFourC1st,

        weightFourC2nd =+ parseFloat(document.getElementById("weightFourC2nd").value, 10) || 0,
        scoreFourC2nd =+ parseFloat(document.getElementById("scoreFourC2nd").value, 10) || 0,
        weightedScoreFourC2nd,

        weightFourD1st =+ parseFloat(document.getElementById("weightFourD1st").value, 10) || 0,
        scoreFourD1st =+ parseFloat(document.getElementById("scoreFourD1st").value, 10) || 0,
        weightedScoreFourD1st,

        weightFourD2nd =+ parseFloat(document.getElementById("weightFourD2nd").value, 10) || 0,
        scoreFourD2nd =+ parseFloat(document.getElementById("scoreFourD2nd").value, 10) || 0,
        weightedScoreFourD2nd,

        weightFourE1st =+ parseFloat(document.getElementById("weightFourE1st").value, 10) || 0,
        scoreFourE1st =+ parseFloat(document.getElementById("scoreFourE1st").value, 10) || 0,
        weightedScoreFourE1st,

        weightFourE2nd =+ parseFloat(document.getElementById("weightFourE2nd").value, 10) || 0,
        scoreFourE2nd =+ parseFloat(document.getElementById("scoreFourE2nd").value, 10) || 0,
        weightedScoreFourE2nd,

        weightFiveA1st =+ parseFloat(document.getElementById("weightFiveA1st").value, 10) || 0,
        scoreFiveA1st =+ parseFloat(document.getElementById("scoreFiveA1st").value, 10) || 0,
        weightedScoreFiveA1st,

        weightFiveA2nd =+ parseFloat(document.getElementById("weightFiveA2nd").value, 10) || 0,
        scoreFiveA2nd =+ parseFloat(document.getElementById("scoreFiveA2nd").value, 10) || 0,
        weightedScoreFiveA2nd,

        weightFiveA3rd =+ parseFloat(document.getElementById("weightFiveA3rd").value, 10) || 0,
        scoreFiveA3rd =+ parseFloat(document.getElementById("scoreFiveA3rd").value, 10) || 0,
        weightedScoreFiveA3rd,

        weightFiveB1st =+ parseFloat(document.getElementById("weightFiveB1st").value, 10) || 0,
        scoreFiveB1st =+ parseFloat(document.getElementById("scoreFiveB1st").value, 10) || 0,
        weightedScoreFiveB1st,

        weightFiveB2nd =+ parseFloat(document.getElementById("weightFiveB2nd").value, 10) || 0,
        scoreFiveB2nd =+ parseFloat(document.getElementById("scoreFiveB2nd").value, 10) || 0,
        weightedScoreFiveB2nd,
        
        weightFiveC1st =+ parseFloat(document.getElementById("weightFiveC1st").value, 10) || 0,
        scoreFiveC1st =+ parseFloat(document.getElementById("scoreFiveC1st").value, 10) || 0,
        weightedScoreFiveC1st,

        weightFiveC2nd =+ parseFloat(document.getElementById("weightFiveC2nd").value, 10) || 0,
        scoreFiveC2nd =+ parseFloat(document.getElementById("scoreFiveC2nd").value, 10) || 0,
        weightedScoreFiveC2nd,

        weightFiveD1st =+ parseFloat(document.getElementById("weightFiveD1st").value, 10) || 0,
        scoreFiveD1st =+ parseFloat(document.getElementById("scoreFiveD1st").value, 10) || 0,
        weightedScoreFiveD1st,

        weightFiveD2nd =+ parseFloat(document.getElementById("weightFiveD2nd").value, 10) || 0,
        scoreFiveD2nd =+ parseFloat(document.getElementById("scoreFiveD2nd").value, 10) || 0,
        weightedScoreFiveD2nd,

        weightFiveE1st =+ parseFloat(document.getElementById("weightFiveE1st").value, 10) || 0,
        scoreFiveE1st =+ parseFloat(document.getElementById("scoreFiveE1st").value, 10) || 0,
        weightedScoreFiveE1st,

        weightFiveE2nd =+ parseFloat(document.getElementById("weightFiveE2nd").value, 10) || 0,
        scoreFiveE2nd =+ parseFloat(document.getElementById("scoreFiveE2nd").value, 10) || 0,
        weightedScoreFiveE2nd,

        sumWeightsMLM,
        sumWeightedScoresMLM,
        currentGradeMLM,
        cumulativeGradeMLM;

        weightedScoreOneA1st = weightOneA1st * scoreOneA1st;
        document.getElementById("weightedScoreOneA1st").value = weightedScoreOneA1st;

        weightedScoreOneA2nd = weightOneA2nd * scoreOneA2nd;
        document.getElementById("weightedScoreOneA2nd").value = weightedScoreOneA2nd;

        weightedScoreOneB1st = weightOneB1st * scoreOneB1st;
        document.getElementById("weightedScoreOneB1st").value = weightedScoreOneB1st;

        weightedScoreOneB2nd = weightOneB2nd * scoreOneB2nd;
        document.getElementById("weightedScoreOneB2nd").value = weightedScoreOneB2nd;

        weightedScoreOneB3rd = weightOneB3rd * scoreOneB3rd;
        document.getElementById("weightedScoreOneB3rd").value = weightedScoreOneB3rd;

        weightedScoreOneC1st = weightOneC1st * scoreOneC1st;
        document.getElementById("weightedScoreOneC1st").value = weightedScoreOneC1st;

        weightedScoreOneC2nd = weightOneC2nd * scoreOneC2nd;
        document.getElementById("weightedScoreOneC2nd").value = weightedScoreOneC2nd;

        weightedScoreOneC3rd = weightOneC3rd * scoreOneC3rd;
        document.getElementById("weightedScoreOneC3rd").value = weightedScoreOneC3rd;

        weightedScoreOneD1st = weightOneD1st * scoreOneD1st;
        document.getElementById("weightedScoreOneD1st").value = weightedScoreOneD1st;

        weightedScoreOneD2nd = weightOneD2nd * scoreOneD2nd;
        document.getElementById("weightedScoreOneD2nd").value = weightedScoreOneD2nd;

        weightedScoreOneE1st = weightOneE1st * scoreOneE1st;
        document.getElementById("weightedScoreOneE1st").value = weightedScoreOneE1st;

        weightedScoreOneE2nd = weightOneE2nd * scoreOneE2nd;
        document.getElementById("weightedScoreOneE2nd").value = weightedScoreOneE2nd;

        weightedScoreTwoA1st = weightTwoA1st * scoreTwoA1st;
        document.getElementById("weightedScoreTwoA1st").value = weightedScoreTwoA1st;

        weightedScoreTwoA2nd = weightTwoA2nd * scoreTwoA2nd;
        document.getElementById("weightedScoreTwoA2nd").value = weightedScoreTwoA2nd;

        weightedScoreTwoA3rd = weightTwoA3rd * scoreTwoA3rd;
        document.getElementById("weightedScoreTwoA3rd").value = weightedScoreTwoA3rd;

        weightedScoreTwoB1st = weightTwoB1st * scoreTwoB1st;
        document.getElementById("weightedScoreTwoB1st").value = weightedScoreTwoB1st;

        weightedScoreTwoB2nd = weightTwoB2nd * scoreTwoB2nd;
        document.getElementById("weightedScoreTwoB2nd").value = weightedScoreTwoB2nd;

        weightedScoreTwoB3rd = weightTwoB3rd * scoreTwoB3rd;
        document.getElementById("weightedScoreTwoB3rd").value = weightedScoreTwoB3rd;

        weightedScoreTwoB4th = weightTwoB4th * scoreTwoB4th;
        document.getElementById("weightedScoreTwoB4th").value = weightedScoreTwoB4th;

        weightedScoreTwoC1st = weightTwoC1st * scoreTwoC1st;
        document.getElementById("weightedScoreTwoC1st").value = weightedScoreTwoC1st;

        weightedScoreTwoC2nd = weightTwoC2nd * scoreTwoC2nd;
        document.getElementById("weightedScoreTwoC2nd").value = weightedScoreTwoC2nd;

        weightedScoreThreeA1st = weightThreeA1st * scoreThreeA1st;
        document.getElementById("weightedScoreThreeA1st").value = weightedScoreThreeA1st;

        weightedScoreThreeA2nd = weightThreeA2nd * scoreThreeA2nd;
        document.getElementById("weightedScoreThreeA2nd").value = weightedScoreThreeA2nd;

        weightedScoreThreeA3rd = weightThreeA3rd * scoreThreeA3rd;
        document.getElementById("weightedScoreThreeA3rd").value = weightedScoreThreeA3rd;

        weightedScoreThreeA4th = weightThreeA4th * scoreThreeA4th;
        document.getElementById("weightedScoreThreeA4th").value = weightedScoreThreeA4th;

        weightedScoreThreeB1st = weightThreeB1st * scoreThreeB1st;
        document.getElementById("weightedScoreThreeB1st").value = weightedScoreThreeB1st;

        weightedScoreThreeB2nd = weightThreeB2nd * scoreThreeB2nd;
        document.getElementById("weightedScoreThreeB2nd").value = weightedScoreThreeB2nd;

        weightedScoreThreeB3rd = weightThreeB3rd * scoreThreeB3rd;
        document.getElementById("weightedScoreThreeB3rd").value = weightedScoreThreeB3rd;

        weightedScoreThreeC1st = weightThreeC1st * scoreThreeC1st;
        document.getElementById("weightedScoreThreeC1st").value = weightedScoreThreeC1st;

        weightedScoreThreeC2nd = weightThreeC2nd * scoreThreeC2nd;
        document.getElementById("weightedScoreThreeC2nd").value = weightedScoreThreeC2nd;

        weightedScoreThreeD1st = weightThreeD1st * scoreThreeD1st;
        document.getElementById("weightedScoreThreeD1st").value = weightedScoreThreeD1st;

        weightedScoreThreeD2nd = weightThreeD2nd * scoreThreeD2nd;
        document.getElementById("weightedScoreThreeD2nd").value = weightedScoreThreeD2nd;

        weightedScoreThreeE = weightThreeE * scoreThreeE;
        document.getElementById("weightedScoreThreeE").value = weightedScoreThreeE;

        weightedScoreFourA1st = weightFourA1st * scoreFourA1st;
        document.getElementById("weightedScoreFourA1st").value = weightedScoreFourA1st;

        weightedScoreFourA2nd = weightFourA2nd * scoreFourA2nd;
        document.getElementById("weightedScoreFourA2nd").value = weightedScoreFourA2nd;

        weightedScoreFourA3rd = weightFourA3rd * scoreFourA3rd;
        document.getElementById("weightedScoreFourA3rd").value = weightedScoreFourA3rd;

        weightedScoreFourB1st = weightFourB1st * scoreFourB1st;
        document.getElementById("weightedScoreFourB1st").value = weightedScoreFourB1st;

        weightedScoreFourB2nd = weightFourB2nd * scoreFourB2nd;
        document.getElementById("weightedScoreFourB2nd").value = weightedScoreFourB2nd;

        weightedScoreFourB3rd = weightFourB3rd * scoreFourB3rd;
        document.getElementById("weightedScoreFourB3rd").value = weightedScoreFourB3rd;

        weightedScoreFourB4th = weightFourB4th * scoreFourB4th;
        document.getElementById("weightedScoreFourB4th").value = weightedScoreFourB4th;

        weightedScoreFourC1st = weightFourC1st * scoreFourC1st;
        document.getElementById("weightedScoreFourC1st").value = weightedScoreFourC1st;

        weightedScoreFourC2nd = weightFourC2nd * scoreFourC2nd;
        document.getElementById("weightedScoreFourC2nd").value = weightedScoreFourC2nd;

        weightedScoreFourD1st = weightFourD1st * scoreFourD1st;
        document.getElementById("weightedScoreFourD1st").value = weightedScoreFourD1st;

        weightedScoreFourD2nd = weightFourD2nd * scoreFourD2nd;
        document.getElementById("weightedScoreFourD2nd").value = weightedScoreFourD2nd;

        weightedScoreFourE1st = weightFourE1st * scoreFourE1st;
        document.getElementById("weightedScoreFourE1st").value = weightedScoreFourE1st;

        weightedScoreFourE2nd = weightFourE2nd * scoreFourE2nd;
        document.getElementById("weightedScoreFourE2nd").value = weightedScoreFourE2nd;

        weightedScoreFiveA1st = weightFiveA1st * scoreFiveA1st;
        document.getElementById("weightedScoreFiveA1st").value = weightedScoreFiveA1st;

        weightedScoreFiveA2nd = weightFiveA2nd * scoreFiveA2nd;
        document.getElementById("weightedScoreFiveA2nd").value = weightedScoreFiveA2nd;

        weightedScoreFiveA3rd = weightFiveA3rd * scoreFiveA3rd;
        document.getElementById("weightedScoreFiveA3rd").value = weightedScoreFiveA3rd;

        weightedScoreFiveB1st = weightFiveB1st * scoreFiveB1st;
        document.getElementById("weightedScoreFiveB1st").value = weightedScoreFiveB1st;

        weightedScoreFiveB2nd = weightFiveB2nd * scoreFiveB2nd;
        document.getElementById("weightedScoreFiveB2nd").value = weightedScoreFiveB2nd;

        weightedScoreFiveC1st = weightFiveC1st * scoreFiveC1st;
        document.getElementById("weightedScoreFiveC1st").value = weightedScoreFiveC1st;

        weightedScoreFiveC2nd = weightFiveC2nd * scoreFiveC2nd;
        document.getElementById("weightedScoreFiveC2nd").value = weightedScoreFiveC2nd;

        weightedScoreFiveD1st = weightFiveD1st * scoreFiveD1st;
        document.getElementById("weightedScoreFiveD1st").value = weightedScoreFiveD1st;

        weightedScoreFiveD2nd = weightFiveD2nd * scoreFiveD2nd;
        document.getElementById("weightedScoreFiveD2nd").value = weightedScoreFiveD2nd;

        weightedScoreFiveE1st = weightFiveE1st * scoreFiveE1st;
        document.getElementById("weightedScoreFiveE1st").value = weightedScoreFiveE1st;

        weightedScoreFiveE2nd = weightFiveE2nd * scoreFiveE2nd;
        document.getElementById("weightedScoreFiveE2nd").value = weightedScoreFiveE2nd;


        sumWeightsMLM = 
        weightOneA1st + weightOneA2nd 
        + weightOneB1st + weightOneB2nd + weightOneB3rd
        + weightOneC1st + weightOneC2nd + weightOneC3rd
        + weightOneD1st + weightOneD2nd
        + weightOneE1st + weightOneE2nd
        + weightTwoA1st + weightTwoA2nd + weightTwoA3rd
        + weightTwoB1st + weightTwoB2nd + weightTwoB3rd + weightTwoB4th
        + weightTwoC1st + weightTwoC2nd
        + weightThreeA1st + weightThreeA2nd + weightThreeA3rd + weightThreeA4th
        + weightThreeB1st + weightThreeB2nd + weightThreeB3rd
        + weightThreeC1st + weightThreeC2nd
        + weightThreeD1st + weightThreeD2nd
        + weightThreeE
        + weightFourA1st + weightFourA2nd + weightFourA3rd
        + weightFourB1st + weightFourB2nd + weightFourB3rd + weightFourB4th
        + weightFourC1st + weightFourC2nd
        + weightFourD1st + weightFourD2nd
        + weightFourE1st + weightFourE2nd
        + weightFiveA1st + weightFiveA2nd + weightFiveA3rd
        + weightFiveB1st + weightFiveB2nd
        + weightFiveC1st + weightFiveC2nd
        + weightFiveD1st + weightFiveD2nd
        + weightFiveE1st + weightFiveE2nd
        ;

        document.getElementById("sumWeightsMLM").value = sumWeightsMLM;
        
        sumWeightedScoresMLM = 
        weightedScoreOneA1st + weightedScoreOneA2nd 
        + weightedScoreOneB1st + weightedScoreOneB2nd + weightedScoreOneB3rd
        + weightedScoreOneC1st + weightedScoreOneC2nd + weightedScoreOneC3rd
        + weightedScoreOneD1st + weightedScoreOneD2nd
        + weightedScoreOneE1st + weightedScoreOneE2nd
        + weightedScoreTwoA1st + weightedScoreTwoA2nd + weightedScoreTwoA3rd
        + weightedScoreTwoB1st + weightedScoreTwoB2nd + weightedScoreTwoB3rd + weightedScoreTwoB4th
        + weightedScoreTwoC1st + weightedScoreTwoC2nd
        + weightedScoreThreeA1st + weightedScoreThreeA2nd + weightedScoreThreeA3rd + weightedScoreThreeA4th
        + weightedScoreThreeB1st + weightedScoreThreeB2nd + weightedScoreThreeB3rd
        + weightedScoreThreeC1st + weightedScoreThreeC2nd
        + weightedScoreThreeD1st + weightedScoreThreeD2nd
        + weightedScoreThreeE
        + weightedScoreFourA1st + weightedScoreFourA2nd + weightedScoreFourA3rd
        + weightedScoreFourB1st + weightedScoreFourB2nd + weightedScoreFourB3rd + weightedScoreFourB4th
        + weightedScoreFourC1st + weightedScoreFourC2nd
        + weightedScoreFourD1st + weightedScoreFourD2nd
        + weightedScoreFourE1st + weightedScoreFourE2nd
        + weightedScoreFiveA1st + weightedScoreFiveA2nd + weightedScoreFiveA3rd
        + weightedScoreFiveB1st + weightedScoreFiveB2nd
        + weightedScoreFiveC1st + weightedScoreFiveC2nd
        + weightedScoreFiveD1st + weightedScoreFiveD2nd
        + weightedScoreFiveE1st + weightedScoreFiveE2nd
        ;

        document.getElementById("sumWeightedScoresMLM").value = sumWeightedScoresMLM;

        currentGradeMLM = sumWeightedScoresMLM / sumWeightsMLM;

        document.getElementById("currentGradeMLM").value = currentGradeMLM;

        cumulativeGradeMLM = sumWeightedScoresMLM / 100;

        document.getElementById("cumulativeGradeMLM").value = cumulativeGradeMLM;        

}
// End MTH 154 MLM Grade Calculations


/* 
  MTH 154
  Given: student scores
  To Calculate: the current grade and the cumulative grade
*/

document.getElementById("gradeCourse").addEventListener("submit", gradeCourse);

function gradeCourse(event) {
    event.preventDefault();
    event.stopPropagation();

    var weightMLM = parseFloat(document.getElementById("weightMLM").value, 10) || 0,
        scoreMLM = parseFloat(document.getElementById("scoreMLM").value, 10) || 0,
        weightedScoreMLM,

        weightDB1 =+ parseFloat(document.getElementById("weightDB1").value, 10) || 0,
        scoreDB1 =+ parseFloat(document.getElementById("scoreDB1").value, 10) || 0,
        weightedScoreDB1,

        weightDB2 =+ parseFloat(document.getElementById("weightDB2").value, 20) || 0,
        scoreDB2 =+ parseFloat(document.getElementById("scoreDB2").value, 20) || 0,
        weightedScoreDB2,

        weightDB3 =+ parseFloat(document.getElementById("weightDB3").value, 30) || 0,
        scoreDB3 =+ parseFloat(document.getElementById("scoreDB3").value, 30) || 0,
        weightedScoreDB3,

        weightDB4 =+ parseFloat(document.getElementById("weightDB4").value, 40) || 0,
        scoreDB4 =+ parseFloat(document.getElementById("scoreDB4").value, 40) || 0,
        weightedScoreDB4,

        weightDB5 =+ parseFloat(document.getElementById("weightDB5").value, 50) || 0,
        scoreDB5 =+ parseFloat(document.getElementById("scoreDB5").value, 50) || 0,
        weightedScoreDB5,

        weightDB6 =+ parseFloat(document.getElementById("weightDB6").value, 60) || 0,
        scoreDB6 =+ parseFloat(document.getElementById("scoreDB6").value, 60) || 0,
        weightedScoreDB6,

        weightDB7 =+ parseFloat(document.getElementById("weightDB7").value, 70) || 0,
        scoreDB7 =+ parseFloat(document.getElementById("scoreDB7").value, 70) || 0,
        weightedScoreDB7,

        weightDB8 =+ parseFloat(document.getElementById("weightDB8").value, 80) || 0,
        scoreDB8 =+ parseFloat(document.getElementById("scoreDB8").value, 80) || 0,
        weightedScoreDB8,

        weightDB9 =+ parseFloat(document.getElementById("weightDB9").value, 90) || 0,
        scoreDB9 =+ parseFloat(document.getElementById("scoreDB9").value, 90) || 0,
        weightedScoreDB9,
        
        weightDB10 =+ parseFloat(document.getElementById("weightDB10").value, 100) || 0,
        scoreDB10 =+ parseFloat(document.getElementById("scoreDB10").value, 100) || 0,
        weightedScoreDB10,

        weightProject =+ parseFloat(document.getElementById("weightProject").value, 10) || 0,
        scoreProject =+ parseFloat(document.getElementById("scoreProject").value, 10) || 0,
        weightedScoreProject,

                
        sumWeightsCourse,
        sumWeightedScoresCourse,
        currentGradeCourse,
        cumulativeGradeCourse;


        weightedScoreMLM = weightMLM * scoreMLM;
        document.getElementById("weightedScoreMLM").value = weightedScoreMLM;

        weightedScoreDB1 = weightDB1 * scoreDB1;
        document.getElementById("weightedScoreDB1").value = weightedScoreDB1;

        weightedScoreDB2 = weightDB2 * scoreDB2;
        document.getElementById("weightedScoreDB2").value = weightedScoreDB2;

        weightedScoreDB3 = weightDB3 * scoreDB3;
        document.getElementById("weightedScoreDB3").value = weightedScoreDB3;

        weightedScoreDB4 = weightDB4 * scoreDB4;
        document.getElementById("weightedScoreDB4").value = weightedScoreDB4;

        weightedScoreDB5 = weightDB5 * scoreDB5;
        document.getElementById("weightedScoreDB5").value = weightedScoreDB5;

        weightedScoreDB6 = weightDB6 * scoreDB6;
        document.getElementById("weightedScoreDB6").value = weightedScoreDB6;

        weightedScoreDB7 = weightDB7 * scoreDB7;
        document.getElementById("weightedScoreDB7").value = weightedScoreDB7;

        weightedScoreDB8 = weightDB8 * scoreDB8;
        document.getElementById("weightedScoreDB8").value = weightedScoreDB8;

        weightedScoreDB9 = weightDB9 * scoreDB9;
        document.getElementById("weightedScoreDB9").value = weightedScoreDB9;

        weightedScoreDB10 = weightDB10 * scoreDB10;
        document.getElementById("weightedScoreDB10").value = weightedScoreDB10;

        weightedScoreProject = weightProject * scoreProject;
        document.getElementById("weightedScoreProject").value = weightedScoreProject;


        sumWeightsCourse = 
        weightMLM 
        + weightDB1 + weightDB2 + weightDB3 + weightDB4 + weightDB5 + weightDB6 + weightDB7 + weightDB8 + weightDB9 + weightDB10 
        + weightProject
        ;

        document.getElementById("sumWeightsCourse").value = sumWeightsCourse;
        
        sumWeightedScoresCourse = 
        weightedScoreMLM 
        + weightedScoreDB1 + weightedScoreDB2 + weightedScoreDB3 + weightedScoreDB4 + weightedScoreDB5 + weightedScoreDB6 + weightedScoreDB7 + weightedScoreDB8 + weightedScoreDB9 + weightedScoreDB10 
        + weightedScoreProject
        ;

        document.getElementById("sumWeightedScoresCourse").value = sumWeightedScoresCourse;

        currentGradeCourse = sumWeightedScoresCourse / sumWeightsCourse;

        document.getElementById("currentGradeCourse").value = currentGradeCourse;

        cumulativeGradeCourse = sumWeightedScoresCourse / 100;

        document.getElementById("cumulativeGradeCourse").value = cumulativeGradeCourse;        

}
// End MTH 154 MLM Grade Calculations


/* 
  MTH 154
  Given: student scores
  To Calculate: the current grade and the cumulative grade
*/

document.getElementById("gradeCourse").addEventListener("submit", gradeCourse);

function gradeCourse(event) {
    event.preventDefault();
    event.stopPropagation();

    var weightMLM = parseFloat(document.getElementById("weightMLM").value, 10) || 0,
        scoreMLM = parseFloat(document.getElementById("scoreMLM").value, 10) || 0,
        weightedScoreMLM,

        weightDB1 =+ parseFloat(document.getElementById("weightDB1").value, 10) || 0,
        scoreDB1 =+ parseFloat(document.getElementById("scoreDB1").value, 10) || 0,
        weightedScoreDB1,

        weightDB2 =+ parseFloat(document.getElementById("weightDB2").value, 20) || 0,
        scoreDB2 =+ parseFloat(document.getElementById("scoreDB2").value, 20) || 0,
        weightedScoreDB2,

        weightDB3 =+ parseFloat(document.getElementById("weightDB3").value, 30) || 0,
        scoreDB3 =+ parseFloat(document.getElementById("scoreDB3").value, 30) || 0,
        weightedScoreDB3,

        weightDB4 =+ parseFloat(document.getElementById("weightDB4").value, 40) || 0,
        scoreDB4 =+ parseFloat(document.getElementById("scoreDB4").value, 40) || 0,
        weightedScoreDB4,

        weightDB5 =+ parseFloat(document.getElementById("weightDB5").value, 50) || 0,
        scoreDB5 =+ parseFloat(document.getElementById("scoreDB5").value, 50) || 0,
        weightedScoreDB5,

        weightDB6 =+ parseFloat(document.getElementById("weightDB6").value, 60) || 0,
        scoreDB6 =+ parseFloat(document.getElementById("scoreDB6").value, 60) || 0,
        weightedScoreDB6,

        weightDB7 =+ parseFloat(document.getElementById("weightDB7").value, 70) || 0,
        scoreDB7 =+ parseFloat(document.getElementById("scoreDB7").value, 70) || 0,
        weightedScoreDB7,

        weightDB8 =+ parseFloat(document.getElementById("weightDB8").value, 80) || 0,
        scoreDB8 =+ parseFloat(document.getElementById("scoreDB8").value, 80) || 0,
        weightedScoreDB8,

        weightDB9 =+ parseFloat(document.getElementById("weightDB9").value, 90) || 0,
        scoreDB9 =+ parseFloat(document.getElementById("scoreDB9").value, 90) || 0,
        weightedScoreDB9,
        
        weightDB10 =+ parseFloat(document.getElementById("weightDB10").value, 100) || 0,
        scoreDB10 =+ parseFloat(document.getElementById("scoreDB10").value, 100) || 0,
        weightedScoreDB10,

        weightProject =+ parseFloat(document.getElementById("weightProject").value, 10) || 0,
        scoreProject =+ parseFloat(document.getElementById("scoreProject").value, 10) || 0,
        weightedScoreProject,

                
        sumWeightsCourse,
        sumWeightedScoresCourse,
        currentGradeCourse,
        cumulativeGradeCourse;


        weightedScoreMLM = weightMLM * scoreMLM;
        document.getElementById("weightedScoreMLM").value = weightedScoreMLM;

        weightedScoreDB1 = weightDB1 * scoreDB1;
        document.getElementById("weightedScoreDB1").value = weightedScoreDB1;

        weightedScoreDB2 = weightDB2 * scoreDB2;
        document.getElementById("weightedScoreDB2").value = weightedScoreDB2;

        weightedScoreDB3 = weightDB3 * scoreDB3;
        document.getElementById("weightedScoreDB3").value = weightedScoreDB3;

        weightedScoreDB4 = weightDB4 * scoreDB4;
        document.getElementById("weightedScoreDB4").value = weightedScoreDB4;

        weightedScoreDB5 = weightDB5 * scoreDB5;
        document.getElementById("weightedScoreDB5").value = weightedScoreDB5;

        weightedScoreDB6 = weightDB6 * scoreDB6;
        document.getElementById("weightedScoreDB6").value = weightedScoreDB6;

        weightedScoreDB7 = weightDB7 * scoreDB7;
        document.getElementById("weightedScoreDB7").value = weightedScoreDB7;

        weightedScoreDB8 = weightDB8 * scoreDB8;
        document.getElementById("weightedScoreDB8").value = weightedScoreDB8;

        weightedScoreDB9 = weightDB9 * scoreDB9;
        document.getElementById("weightedScoreDB9").value = weightedScoreDB9;

        weightedScoreDB10 = weightDB10 * scoreDB10;
        document.getElementById("weightedScoreDB10").value = weightedScoreDB10;

        weightedScoreProject = weightProject * scoreProject;
        document.getElementById("weightedScoreProject").value = weightedScoreProject;


        sumWeightsCourse = 
        weightMLM 
        + weightDB1 + weightDB2 + weightDB3 + weightDB4 + weightDB5 + weightDB6 + weightDB7 + weightDB8 + weightDB9 + weightDB10 
        + weightProject
        ;

        document.getElementById("sumWeightsCourse").value = sumWeightsCourse;
        
        sumWeightedScoresCourse = 
        weightedScoreMLM 
        + weightedScoreDB1 + weightedScoreDB2 + weightedScoreDB3 + weightedScoreDB4 + weightedScoreDB5 + weightedScoreDB6 + weightedScoreDB7 + weightedScoreDB8 + weightedScoreDB9 + weightedScoreDB10 
        + weightedScoreProject
        ;

        document.getElementById("sumWeightedScoresCourse").value = sumWeightedScoresCourse;

        currentGradeCourse = sumWeightedScoresCourse / sumWeightsCourse;

        document.getElementById("currentGradeCourse").value = currentGradeCourse;

        cumulativeGradeCourse = sumWeightedScoresCourse / 100;

        document.getElementById("cumulativeGradeCourse").value = cumulativeGradeCourse;        

}
// End MTH 154 MLM Grade Calculations