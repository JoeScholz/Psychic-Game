var letters = ["a", "b", "c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

var wins = 0;
var losses = 0;
var guessesLeft = 9;

var userWins = document.getElementById("user-wins");
var userLosses = document.getElementById("user-losses");
var userGuessesLeft = document.getElementById("user-guessesLeft");
var userGuess = document.getElementById("user-guesses");

var computerGuess = letters[Math.floor(Math.random() * letters.length)];


document.onkeyup = function(event) {
    userGuess.textContent = event.key;



//if userGuess === computerGuess (loop to varify if user guess is in array)
    //run reset
        //add to wins - how to keep wins?
    //else write guess to "user-guesses" - how to write multiple guesses while keeping computer guess

    //after 9 misses 
        //run reset
            //add to losses
