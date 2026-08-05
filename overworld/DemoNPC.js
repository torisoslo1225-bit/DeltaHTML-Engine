export default class DemoNPC {
  constructor(x,y,text='Hello!') {
    this.x=x;
    this.y=y;
    this.text=text;
  }

  draw(ctx){
    ctx.fillStyle='purple';
    ctx.fillRect(this.x,this.y,16,16);
  }
}
