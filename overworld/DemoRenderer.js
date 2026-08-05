export default class DemoRenderer {
  draw(ctx, player){
    ctx.fillStyle = '#202040';
    ctx.fillRect(0,0,ctx.canvas.width,ctx.canvas.height);

    ctx.fillStyle = '#303060';
    ctx.fillRect(100,100,400,250);

    ctx.fillStyle = '#00ffff';
    ctx.fillRect(player.x, player.y, 20, 20);

    ctx.fillStyle = 'white';
    ctx.font = '16px sans-serif';
    ctx.fillText('DeltaHTML Demo Room',20,30);
  }
}
