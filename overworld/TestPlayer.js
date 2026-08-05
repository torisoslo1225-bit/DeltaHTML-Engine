export default class TestPlayer {
 constructor(x=320,y=240){
  this.x=x;
  this.y=y;
  this.speed=3;
 }
 update(input){
  if(input.down('ArrowUp')||input.down('w')) this.y-=this.speed;
  if(input.down('ArrowDown')||input.down('s')) this.y+=this.speed;
  if(input.down('ArrowLeft')||input.down('a')) this.x-=this.speed;
  if(input.down('ArrowRight')||input.down('d')) this.x+=this.speed;
 }
 draw(ctx){
  ctx.fillStyle='red';
  ctx.fillRect(this.x-8,this.y-8,16,16);
 }
}