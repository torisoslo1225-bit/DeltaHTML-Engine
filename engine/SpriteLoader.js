export class SpriteLoader {
  constructor() {
    this.cache = {};
  }

  load(name, path) {
    return new Promise((resolve, reject) => {
      if (this.cache[name]) return resolve(this.cache[name]);

      const img = new Image();
      img.onload = () => {
        this.cache[name] = img;
        resolve(img);
      };
      img.onerror = reject;
      img.src = path;
    });
  }

  get(name) {
    return this.cache[name];
  }
}
