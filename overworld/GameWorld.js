export default class GameWorld {
 constructor(player, room){
  this.player = player;
  this.room = room;
 }
 update(dt){
  if(this.player) this.player.update(dt);
 }
 draw(ctx){
  if(this.room) this.room.draw(ctx);
  if(this.player) this.player.draw(ctx);
 }
}
