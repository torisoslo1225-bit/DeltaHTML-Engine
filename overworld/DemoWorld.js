import TestPlayer from './TestPlayer.js';

export default class DemoWorld {
  constructor(canvas) {
    this.canvas = canvas;
    this.player = new TestPlayer(160, 120);
  }

  update() {
    this.player.update();
  }

  draw(ctx) {
    ctx.fillStyle = '#111';
    ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

    ctx.fillStyle = '#444';
    ctx.fillRect(40, 40, 300, 220);

    this.player.draw(ctx);
  }
}
