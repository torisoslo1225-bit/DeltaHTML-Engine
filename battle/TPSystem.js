export class TPSystem {
  constructor(){
    this.tp = 0;
    this.max = 100;
  }

  add(amount){
    this.tp = Math.min(this.max, this.tp + amount);
  }

  use(amount){
    if(this.tp >= amount){
      this.tp -= amount;
      return true;
    }
    return false;
  }
}