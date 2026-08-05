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
  this.running=true;
  Input.init();
 }
 start(){
  console.log("DeltaHTML Engine started");
  requestAnimationFrame(this.loop.bind(this));
 }
 loop(time){
  if(!this.running) return;
  const dt=(time-this.last)/1000;
  this.last=time;
  this.update(dt);
  this.draw();
  requestAnimationFrame(this.loop.bind(this));
 }
 update(dt){}
 draw(){
  this.ctx.clearRect(0,0,this.width,this.height);

  // Temporary test scene so the engine is visibly running
  this.ctx.fillStyle="#111";
  this.ctx.fillRect(0,0,this.width,this.height);

  this.ctx.fillStyle="white";
  this.ctx.font="20px monospace";
  this.ctx.fillText("DeltaHTML Engine",20,40);
  this.ctx.fillText("Running!",20,70);

  this.ctx.strokeStyle="white";
  this.ctx.strokeRect(260,190,120,120);
 }
}