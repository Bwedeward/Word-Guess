var wins = 0;
var numGuesses = 10;
var letGuessed = "";
var words = ["Bobby", "Ashley", "Rob", "Brooke"];
var alph = ("abcdefghijklmnopqrstuvwxyz").split("");
console.log(alph)

document.onkeyup = function (event) {
    console.log(event);
    var userGuess = event.key;
}

