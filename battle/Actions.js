export default class Actions {
  constructor(enemy){
    this.enemy=enemy;
  }

  act(name){
    if(name==='check'){
      return `${this.enemy.name} HP: ${this.enemy.hp}`;
    }

    if(name==='spare'){
      this.enemy.spared=true;
      return 'Enemy can be spared';
    }
  }
}
