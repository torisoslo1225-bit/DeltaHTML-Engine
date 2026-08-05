export default class Fight {
  constructor(){
    this.power=0;
    this.active=false;
  }

  start(){
    this.active=true;
    this.power=0;
  }

  hit(){
    return Math.floor(this.power*10);
  }

  update(){
    if(this.active){
      this.power+=0.05;
      if(this.power>1) this.power=0;
    }
  }
}
