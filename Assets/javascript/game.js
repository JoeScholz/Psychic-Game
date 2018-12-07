var letters = ["a", "b", "c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

var wins = 0;
var losses = 0;
var guessesLeft;

var userWins = document.getElementById("user-wins");
var userLosses = document.getElementById("user-losses");
var userGuessesLeft = document.getElementById("user-guessesLeft");
var userGuess = document.getElementById("user-guesses");
var computerGuess;

function startGame() {
    computerGuess = letters[Math.floor(Math.random() * letters.length)];
    guessesLeft = 9;
    userGuess.innerHTML = '';
    userGuessesLeft.innerHTML = '9';
    console.log(computerGuess);
}

startGame();

document.onkeyup = function(event) {
    var keyPressed = event.key;
    if (letters.indexOf(keyPressed) === -1) {
        alert("That is not a letter");
        // show a message to the user... invalid character...
        return
    }
    
    if (guessesLeft < 9) {
        userGuess.innerHTML += ', ';
    } 
    userGuess.innerHTML += keyPressed;
    console.log(keyPressed);

    if (keyPressed === computerGuess) {
        wins++;
        userWins.innerHTML = wins;
        startGame();
        console.log('this many wins' + wins);
            alert("Well Done! Continue to test your mind?")
    }

    else if (keyPressed !== computerGuess){ 
        guessesLeft--;
        userGuessesLeft.innerHTML = guessesLeft;
        if (guessesLeft == 0) {
            losses++;
            userLosses.innerHTML = losses;
            startGame();
            console.log(guessesLeft);
                alert("Perhaps you are not focusing hard enough. Try again?")
        }
    }
}
