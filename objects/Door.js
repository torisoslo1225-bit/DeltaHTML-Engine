export default class Door {
 constructor(x,y,targetRoom){
  this.x=x;
  this.y=y;
  this.width=32;
  this.height=48;
  this.targetRoom=targetRoom;
  this.open=false;
 }

 interact(){
  this.open=true;
  return this.targetRoom;
 }

 draw(ctx){
  ctx.fillStyle=this.open ? '#777' : '#4b2b16';
  ctx.fillRect(this.x,this.y,this.width,this.height);
 }
}
