export default class SoulArena {
  constructor(x=160,y=120){
    this.x=x;
    this.y=y;
    this.size=16;
    this.speed=3;
  }
  update(input){
    if(input.left) this.x-=this.speed;
    if(input.right) this.x+=this.speed;
    if(input.up) this.y-=this.speed;
    if(input.down) this.y+=this.speed;
  }
}
