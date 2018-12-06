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
//make computerGuess into function to be called
}

startGame();

// function checkForLetter(obj, letters) {
    https://stackoverflow.com/questions/4587061/how-to-determine-if-object-is-in-array
// }

document.onkeyup = function(event) {
    if (guessesLeft < 9) {
        userGuess.innerHTML += ', ';
    } 
    userGuess.innerHTML += event.key;
    var keyPressed = event.key;
    console.log(keyPressed);

    // var isALetter = checkForLetter(keyPressed);
    // if (isALetter == false) {
    //     userMessage.innerHTML == "that is not a letter";
    // } - next if would be else if
    
    if (keyPressed === computerGuess) {
        wins++;
        userWins.innerHTML = wins;
        startGame();
        console.log('this many wins' + wins);
            alert("Well Done! Continue to test your mind?")

    //append wins.append(wins)
    //call computer guess function
    //clear user guess
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


//allow for display of 9

//if letter guessed- 
    //reset- keep track of wins

//if letter not guessed
    //add to userGuess
        //reduce turns left
            //
    //keep track of losses



//reset after 