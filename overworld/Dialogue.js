export default class Dialogue {
 static active=false;
 static text="";
 static say(text){
  this.active=true;
  this.text=text;
 }
 static draw(ctx){
  if(!this.active) return;
  ctx.fillStyle="white";
  ctx.fillRect(20,360,600,90);
  ctx.fillStyle="black";
  ctx.font="18px monospace";
  ctx.fillText(this.text,40,410);
 }
}