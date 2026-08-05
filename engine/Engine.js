import Input from "./Input.js";

export default class Engine {
 constructor(){
  this.canvas=document.getElementById("game");
  this.ctx=this.canvas.getContext("2d");
  this.width=640;
  this.height=480;
  this.canvas.width=this.width;
  this.canvas.height=this.height;
  this.last=0;
  Input.init();
 }
 start(){requestAnimationFrame(this.loop.bind(this));}
 loop(time){
  const dt=(time-this.last)/1000;
  this.last=time;
  this.update(dt);
  this.draw();
  requestAnimationFrame(this.loop.bind(this));
 }
 update(dt){}
 draw(){
  this.ctx.fillStyle="black";
  this.ctx.fillRect(0,0,this.width,this.height);
  this.ctx.fillStyle="white";
  this.ctx.font="20px monospace";
  this.ctx.fillText("DeltaHTML Engine",20,40);
 }
}