export class BulletPatterns {
  static basic(x, y, speed = 2) {
    return {
      x,
      y,
      vx: 0,
      vy: speed,
      update() {
        this.x += this.vx;
        this.y += this.vy;
      }
    };
  }

  static spread(x, y) {
    return [
      this.basic(x, y, 2),
      this.basic(x, y, 3),
      this.basic(x, y, 4)
    ];
  }
}