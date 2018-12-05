var letters = ["a", "b", "c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

let wins = 0;
let losses = 0;
let guessesLeft = 9;

var userWins = document.getElementById("user-wins");
var userLosses = document.getElementById("user-losses");
var userGuessesLeft = document.getElementById("user-guessesLeft");
var userGuess = document.getElementById("user-guesses");
var userGuessArray = [];
var userInput;
var computerGuess = letters[Math.floor(Math.random() * letters.length)];
console.log(computerGuess);





document.onkeyup = function(event) {
    userGuess.innerHTML += event.key;
    var keyPressed = event.key;
    console.log(keyPressed);
console.log(wins);
if (keyPressed === computerGuess) {
    wins++

//append wins.append(wins)
//call function that generated random letter
//clear user guess
}
else if (keyPressed !== computerGuess){ 
    guessesLeft--;
    console.log(guessesLeft);
}
// console.log(wins);
}

//allow for display of 9

//if letter guessed- 
    //reset- keep track of wins

//if letter not guessed
    //add to userGuess
        //reduce turns left
            //
    //keep track of losses



//reset after 