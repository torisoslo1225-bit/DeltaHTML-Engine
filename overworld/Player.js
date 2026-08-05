import Input from "../engine/Input.js";

export default class Player {
 constructor(){
  this.x=320;
  this.y=240;
  this.speed=120;
  this.size=16;
  this.direction="down";
 }
 update(dt){
  if(Input.down("ArrowLeft")){this.x-=this.speed*dt;this.direction="left";}
  if(Input.down("ArrowRight")){this.x+=this.speed*dt;this.direction="right";}
  if(Input.down("ArrowUp")){this.y-=this.speed*dt;this.direction="up";}
  if(Input.down("ArrowDown")){this.y+=this.speed*dt;this.direction="down";}
 }
 draw(ctx){
  ctx.fillStyle="red";
  ctx.fillRect(this.x,this.y,this.size,24);
 }
}