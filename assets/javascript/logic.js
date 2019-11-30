$(document).ready(function() {

//Global Variables
//-------------------------------------------
//Arrays and Variables for holding data
var wordOptions = ["montgomery", "juneau", "phoenix", "little rock", "sacramento", "denver", "hartford", "dover", "tallahassee"];
var buttons= [];
var correct = 0;
var wrong = 0;
var unanswered = 0;
var time = 60;
var title = "<h1>Tennessee Word Guess Game</h1><h3>Tennessee Themed Trivia Quiz</h3><br>"

// Countdown timer for game
setTimeout(timeUp, 1000 * 60);
interval = setInterval(count, 1000);

//Functions
//-------------------------------------------
function count() {
// decrement time by 1
time--;
// Here we are getting the current time, 
// passing it into the timeConverter function
// and saving the result in the 'converted' variable.
var converted = timeConverter(time);
console.log(converted);
// Here we are going to use jQuery
// to show the converted time variable
// in the 'display' div.
$("#display").text("Time left: " + converted);
}

//Functions
//-------------------------------------------
function timeConverter(t) {
    var minutes = Math.floor(t/60);
    var seconds = t - (minutes * 60);

    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    if (minutes === 0) {
        minutes = "00";
    }

    else if (minutes < 10) {
        minutes = "0" + minutes;
    }

    return minutes + ":" + seconds;
}

//Functions
//-------------------------------------------
function timeUp() {
    var button1 = $("input[name=]:checked").val();
}

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
console.log("B&S: " + blanksAndSuccesses);
}

function checkLetters(letter) { 
     //Check if letter exists in code at all
     var isLetterInWord = false;
        console.log("In checkLetters.");
        console.log("letter: " + letter);
    for (var i=0; i<numBlanks; i++) {
        console.log("Inside for loop");
         if(selectedWord[i] == letter) {
             console.log("In if inside for loop in checkLetters.")
             isLetterInWord = true;
             console.log("isLetterInWord: " + isLetterInWord);
         }
     }
     if(isLetterInWord) {
         console.log("In If(isLetterInWord)");
        for (var i=0; i<numBlanks; i++) {
            console.log("In For loop after If(isLetterInWord)");
            if(selectedWord[i] == letter) {
            console.log("In If(selectedWord[i] == letter)after For loop after If(isLetterInWord)");
            blanksAndSuccesses[i] = letter;
            console.log("B&S: " + blanksAndSuccesses);
            document.getElementById("wordToGuess").innerHTML = blanksAndSuccesses.join(" ");
            guessesLeft--;
            }//end if (selectedWord[i])
        }//end for
    }//end if(isLetterInWord)
    else {
        wrongLetters.push(letter);
        guessesLeft--
    }//end else
}//end function
/*Check where in the word the letter exists, then populate out blankAnd Successes array.
if(isLetterInWord) {
    for (var i=0; i<numBlanks; i++) {
        if(selectedWord[i] == letter) {
        blanksAndSuccesses[i] == letter;
        }
    }
}
Letter wasn't found
else {
    wrongLetters.push(letter);
    guessesLeft--
} */
//Testing and Debugging
console.log(blanksAndSuccesses);

function roundComplete(){
    console.log("Win Count:" + "| Loss Count:" + lossCount + "| Guesses Left" + guessesLeft);

    //Update the HTML to reflect the most recent count stats
    document.getElementById("numGuesses").innerHTML = guessesLeft;
    document.getElementById("wordToGuess").innerHTML = blanksAndSuccesses.join(" ");
    document.getElementById("wrongGuesses").innerHTML = wrongLetters.join(" ");
    

    //Check if user won
    if (lettersinWord.toString() == blanksAndSuccesses.toString()) {
        winCount++;  
        alert("You Won!");

        //Update the win counter in the HTML
        document.getElementById("winCounter").innerHTML = winCount;

        startGame();
    }

    //Check if user lost
    else if (guessesLeft == 0) {
        lossCount++;
        alert("You Lost!");

        //Update the HTML
        document.getElementById("lossCounter").innerHTML = lossCount;

        startGame();
    }
  
    
}//end function RoundComplete

//Main Process
//-------------------------------------------

//Initiates the code the first time
startGame();

//Register keyclicks

document.onkeyup = function(event) {
   var letterGuessed = String.fromCharCode(event.keyCode).toLocaleLowerCase();
   console.log("letterGuessed: " + letterGuessed)
   //guessesLeft = guessesLeft - 1;
   checkLetters(letterGuessed);
   roundComplete();
   
   //Testing/Debugging
   console.log(letterGuessed);
}
}