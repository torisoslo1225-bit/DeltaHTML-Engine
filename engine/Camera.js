// Simple Deltarune-style camera follow system

export default class Camera {
  constructor(){
    this.x = 0;
    this.y = 0;
  }

  follow(target, width, height){
    this.x = target.x - width / 2;
    this.y = target.y - height / 2;
  }

  apply(ctx){
    ctx.translate(-this.x, -this.y);
  }
}
