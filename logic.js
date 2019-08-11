//Global Variables
//-------------------------------------------
//Arrays and Variables for holding data
var wordOptions = ["montgomery", "juneau", "phoenix", "little rock", "sacramento", "denver", "hartford", "dover", "tallahassee"];
var selectedWord = "";
var lettersinWord = [];
var numBlanks = 1;
var blanksAndSuccesses = [];
var wrongLetters = [];

//Game counters
var winCount = 0;
var lossCount = 0;
var guessesLeft = 9;
//Functions
//-------------------------------------------

function startGame () {
    selectedWord = wordOptions[Math.floor(Math.random() * wordOptions.length)];
    lettersinWord = selectedWord.split("");
    numBlanks = lettersinWord.length;

    //Reset
    guessesLeft = 9;
    wrongLetters = [];
    blanksAndSuccesses = [];

    //Populate blanks and successes with right number of blanks.
    for (var i=0; i<numBlanks; i++){
        blanksAndSuccesses.push("_");
}
 
//Change HTML to reflect round conditions
document.getElementById("wordToGuess").innerHTML = blanksAndSuccesses.join(" ");
document.getElementById("numGuesses").innerHTML = guessesLeft;
document.getElementById("winCounter").innerHTML = winCount;
document.getElementById("lossCounter").innerHTML = lossCount;

//Testing/Debugging
console.log(selectedWord);
console.log(lettersinWord);
console.log(numBlanks);
console.log(blanksAndSuccesses);
}

//Main Process
//-------------------------------------------

//Initiates the code the first time
startGame();

//Register keyclicks

document.onkeyup = function(event) {
    letter
}