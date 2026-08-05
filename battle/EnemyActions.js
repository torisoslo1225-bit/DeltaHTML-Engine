export default class EnemyActions {
  constructor(enemy){
    this.enemy = enemy;
  }

  act(name){
    if(this.enemy.actions && this.enemy.actions[name]){
      return this.enemy.actions[name];
    }
    return 'Nothing happened.';
  }

  spare(){
    this.enemy.spared = true;
    return true;
  }
}
