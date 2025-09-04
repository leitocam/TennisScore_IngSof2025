import TennisScorer from "./tennisScorer.js";

describe("TennisScorer", () => {
  //Empieza sin puntos     --> "Love - Love"
  it("game empieza con ambos en cero", () => {
    const scorer = new TennisScorer();
    expect(scorer.showScore()).toEqual("Love - Love");
  });

  it("Jugador 1 marca un punto y el jugador en cero", () => {
    const scorer = new TennisScorer();
    scorer.player1Scores();
    expect(scorer.showScore()).toEqual("15 - Love");
  });

  it("Jugador 1 marca 2 puntos y jugador 2 en cero", () => {
    const scorer = new TennisScorer();
    scorer.player1Scores();
    scorer.player1Scores();
    expect(scorer.showScore()).toEqual("30 - Love");
  });

  it("El Jugador 1 marca 3 puntos y jugador 2 en 0", () => {
    const scorer = new TennisScorer();
    scorer.player1Scores();
    scorer.player1Scores();
    scorer.player1Scores();
    expect(scorer.showScore()).toEqual("40 - Love");
  });

  it ("El Jugador 1 marca 4 puntos y gana el juego", () => {
    const scorer = new TennisScorer();
    scorer.player1Scores();
    scorer.player1Scores();
    scorer.player1Scores();
    scorer.player1Scores();
    expect(scorer.showScore()).toEqual("Player 1 wins");
  });

  //Jugador 2 hace punto
  it("Jugador 2 marca un punto y el jugador en cero", () => {
    const scorer = new TennisScorer();
    scorer.player2Scores();
    expect(scorer.showScore()).toEqual("Love - 15");
  });

  // Ambos jugadores anotan
  it("Jugador 1 y Jugador 2 marcan un punto", () => {
    const scorer = new TennisScorer();
    scorer.player1Scores();
    scorer.player2Scores();
    expect(scorer.showScore()).toEqual("15 - 15");
  });

  // Empates en 30 
  it("Jugador 1 y Jugador 2 marcan dos puntos", () => {
    const scorer = new TennisScorer();
    scorer.player1Scores();
    scorer.player1Scores();
    scorer.player2Scores();
    scorer.player2Scores();
    expect(scorer.showScore()).toEqual("30 - 30");
  });

  it("Jugador 2 marca 2 puntos y jugador 1 en cero", () => {
    const scorer = new TennisScorer();
    scorer.player2Scores();
    scorer.player2Scores();
    expect(scorer.showScore()).toEqual("Love - 30");
  });

  it("El Jugador 2 marca 3 puntos y jugador 1 en 0", () => {
    const scorer = new TennisScorer();
    scorer.player2Scores();
    scorer.player2Scores();
    scorer.player2Scores();
    expect(scorer.showScore()).toEqual("Love - 40");
  });

  it("El Jugador 2 marca 4 puntos y gana el juego", () => {
    const scorer = new TennisScorer();
    scorer.player2Scores();
    scorer.player2Scores();
    scorer.player2Scores();
    scorer.player2Scores();
    expect(scorer.showScore()).toEqual("Player 2 wins");
  });
});
