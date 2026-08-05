export default class DebugOverlay {
 constructor(){
  this.enabled=false;
 }

 toggle(){
  this.enabled=!this.enabled;
 }

 draw(ctx,player){
  if(!this.enabled) return;
  ctx.fillStyle='white';
  ctx.font='14px monospace';
  ctx.fillText('X: '+Math.floor(player.x),10,20);
  ctx.fillText('Y: '+Math.floor(player.y),10,40);
 }
}
