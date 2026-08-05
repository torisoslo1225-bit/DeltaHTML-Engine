export default class SpriteManager {
  constructor(basePath = "") {
    this.basePath = basePath;
    this.cache = {};
  }

  load(name, path) {
    if (this.cache[name]) return this.cache[name];

    const img = new Image();
    img.src = this.basePath + path;
    this.cache[name] = img;
    return img;
  }

  draw(ctx, name, path, x, y, width, height) {
    const img = this.load(name, path);

    if (img.complete && img.naturalWidth > 0) {
      ctx.drawImage(img, x, y, width, height);
    } else {
      // fallback while loading/missing
      ctx.fillStyle = "#ff00ff";
      ctx.fillRect(x, y, width, height);
    }
  }
}
