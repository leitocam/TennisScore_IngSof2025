class TennisScorer {
  constructor() {
    this.player1Points = 0;
    this.player2Points = 0;
  }

  getPointName(points) {
    const pointNames = ['Love', '15', '30', '40'];
    return pointNames[points] || '40';
  }

  isGameWon() {
    return (this.player1Points >= 4 && this.player1Points - this.player2Points >= 2) ||
           (this.player2Points >= 4 && this.player2Points - this.player1Points >= 2);
  }

  getWinner() {
    if (this.player1Points >= 4 && this.player1Points - this.player2Points >= 2) {
      return "Player 1 wins";
    }
    if (this.player2Points >= 4 && this.player2Points - this.player1Points >= 2) {
      return "Player 2 wins";
    }
    return null;
  }

  isDeuce() {
    return this.player1Points >= 3 && this.player2Points >= 3 && 
           this.player1Points === this.player2Points;
  }

  hasAdvantage() {
    if (this.player1Points >= 4 && this.player1Points - this.player2Points === 1) {
      return "Advantage Player 1";
    }
    if (this.player2Points >= 4 && this.player2Points - this.player1Points === 1) {
      return "Advantage Player 2";
    }
    return null;
  }

  showScore() {
    // Check for game end
    const winner = this.getWinner();
    if (winner) return winner;

    // Check for advantage
    const advantage = this.hasAdvantage();
    if (advantage) return advantage;

    // Check for deuce
    if (this.isDeuce()) return "Deuce";

    // Regular scoring
    const player1Score = this.getPointName(this.player1Points);
    const player2Score = this.getPointName(this.player2Points);
    return `${player1Score} - ${player2Score}`;
  }

  player1Scores() {
    this.player1Points++;
  }

  player2Scores() {
    this.player2Points++;
  }
}
export default TennisScorer;
