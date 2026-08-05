// DeltaHTML Engine Game Loop
// Connects update and render systems

export class GameLoop {
  constructor(update, render) {
    this.update = update;
    this.render = render;
    this.running = false;
    this.last = 0;
  }

  start() {
    this.running = true;
    requestAnimationFrame((t) => this.frame(t));
  }

  frame(time) {
    if (!this.running) return;

    const delta = (time - this.last) / 1000;
    this.last = time;

    this.update(delta);
    this.render();

    requestAnimationFrame((t) => this.frame(t));
  }
}
