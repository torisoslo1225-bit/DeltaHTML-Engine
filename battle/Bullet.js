export default class Bullet {
  constructor(x,y,vx,vy,size=8){
    this.x=x; this.y=y;
    this.vx=vx; this.vy=vy;
    this.size=size;
    this.active=true;
  }

  update(){
    this.x+=this.vx;
    this.y+=this.vy;
  }

  hits(soul){
    return Math.abs(this.x-soul.x)<this.size && Math.abs(this.y-soul.y)<this.size;
  }
}
