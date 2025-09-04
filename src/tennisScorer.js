class TennisScorer {
  constructor() {
    this.player1Points = 0;
  }
  showScore() {
    if (this.player1Points === 4) {
      return "Player 1 wins";
    } else if (this.player1Points === 3) {
      return "40 - Love";
    } else if (this.player1Points === 2) {
      return "30 - Love";
    } else if (this.player1Points === 1) {
      return "15 - Love";
    }
    return "Love - Love";
  }
  player1Scores() {
    this.player1Points++;
  }
}
export default TennisScorer;
