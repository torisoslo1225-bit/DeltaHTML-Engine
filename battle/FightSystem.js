export default class FightSystem {
  constructor(){
    this.power = 0;
    this.active = false;
  }

  start(){
    this.active = true;
    this.power = 0;
  }

  hit(timing){
    this.power = Math.max(0, 100 - Math.abs(50 - timing) * 2);
    this.active = false;
    return this.power;
  }
}
