export default class BattleRenderer {
  draw(ctx, battle) {
    ctx.fillStyle = "black";
    ctx.fillRect(0,0,ctx.canvas.width,ctx.canvas.height);

    if (battle.enemy) {
      ctx.fillStyle = "white";
      ctx.fillText(battle.enemy.name, 40, 40);
      ctx.fillText("HP: " + battle.enemy.hp, 40, 65);
    }
  }
}
