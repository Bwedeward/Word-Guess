
// WHAT DOES THE USER HAVE TO DO:
// choose theme
// write out html
// display wins and losses and declare variables 
// choose random word from array
// log key from user
// output word length with dashes
// replace dashes with correct guessed letters from user
// decrease number of guesses are incorrect and push guessed letters into an array
// output new values to html (wins and losses)
// write a reset function

var wins = 0;
var selectedWord = "";
var numberOfGuesses = 10;
var lettersGuessed = [];
var words = ["bobby", "Ashley", "Rob", "Brooke"];
var alph = ("abcdefghijklmnopqrstuvwxyz").split("");
console.log(alph)
var string = "";

function generateWord() {
    return words[Math.floor(Math.random() * words.length)];
}
selectedWord = generateWord();
console.log(selectedWord);

function displayWord() {
    for (var index = 0; index < selectedWord.length; index++) {
        string = string =+ "_";
        // generateWord().push("_");
//wouldn't using "selectedWord" go back to the orginal string before one was chosen?
// maybe?
        
        
    }
}
displayWord();
console.log(string);

document.onkeyup = function (event) {
    console.log(event);
    var userGuess = event.key.toLowerCase();
    console.log(userGuess);

    

    if (alph) {

    }
}

