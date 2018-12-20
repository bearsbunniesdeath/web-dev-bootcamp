var p1Button = document.querySelector("#p1");
var p2Button = document.querySelector("#p2");
var resetButton = document.querySelector("#reset");

var p1Span = document.querySelector("#p1Score");
var p2Span = document.querySelector("#p2Score");

var numInput = document.querySelector("input");

var winningScoreSpan = document.querySelector("p span");

var p1Score = 0;
var p2Score = 0;

var gameOver = false;
var winningScore = 5;

p1Button.addEventListener("click", function() {
    if (!gameOver){
        p1Score++;

        if (p1Score === winningScore){
            p1Span.classList.add("winner");
            gameOver = true;
        }

        p1Span.textContent = p1Score;
    }  
});

p2Button.addEventListener("click", function() {
    if (!gameOver){
        p2Score++;

        if (p2Score === winningScore){
            p2Span.classList.add("winner");
            gameOver = true;
        }

        p2Span.textContent = p2Score;
    } 
});

resetButton.addEventListener("click", function() {
    resetGame()
});

numInput.addEventListener("change", function() {
    winningScore = Number(numInput.value);
    winningScoreSpan.textContent = numInput.value;
    resetGame();
});

function resetGame() {
    p1Score = 0;
    p2Score = 0;

    p1Span.textContent = p1Score;
    p2Span.textContent = p2Score;
    
    p1Span.classList.remove("winner");
    p2Span.classList.remove("winner");

    gameOver = false;
}