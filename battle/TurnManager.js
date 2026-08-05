export default class TurnManager {
  constructor() {
    this.turn = "player";
  }

  next() {
    this.turn = this.turn === "player" ? "enemy" : "player";
  }
}
