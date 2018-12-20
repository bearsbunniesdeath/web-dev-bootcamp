//Create secret number
var secretNumber = 4;

//Ask user for guess
var guess = Number(prompt("Guess a number"));

//Check if guess is right
if (guess === secretNumber) {
    alert("YOU GOT IT RIGHT!");
}
else if (guess > secretNumber) {
    alert("Too high!");
}
else {
    alert("Too low!");
}

