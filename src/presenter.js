import TennisScorer from "./tennisScorer.js";

const player1Button = document.querySelector("#player1-button");
const player2Button = document.querySelector("#player2-button");
const resetButton = document.querySelector("#reset-button");
const scoreDisplay = document.querySelector("#current-score");

let scorer = new TennisScorer();

function updateScore() {
  const score = scorer.showScore();
  scoreDisplay.innerHTML = score;
  
  // Check if game is won and auto-reset after 3 seconds
  if (score.includes("wins")) {
    setTimeout(() => {
      resetGame();
    }, 3000);
  }
}

function resetGame() {
  scorer = new TennisScorer();
  updateScore();
}

player1Button.addEventListener("click", (event) => {
  event.preventDefault();
  scorer.player1Scores();
  updateScore();
});

player2Button.addEventListener("click", (event) => {
  event.preventDefault();
  scorer.player2Scores();
  updateScore();
});

resetButton.addEventListener("click", (event) => {
  event.preventDefault();
  resetGame();
});
