import TestPlayer from './TestPlayer.js';

export default class TestRoom {
 constructor(){
  this.player=new TestPlayer();
 }
 update(input){
  this.player.update(input);
 }
 draw(ctx){
  ctx.fillStyle='#202020';
  ctx.fillRect(0,0,640,480);
  this.player.draw(ctx);
  ctx.fillStyle='white';
  ctx.font='16px monospace';
  ctx.fillText('DeltaHTML Test Room',20,30);
 }
}