export default class BattleLoop {
  constructor(){
    this.turn = 'player';
    this.result = null;
  }

  nextTurn(){
    this.turn = this.turn === 'player' ? 'enemy' : 'player';
  }

  win(){
    this.result = 'win';
  }

  lose(){
    this.result = 'lose';
  }
}
