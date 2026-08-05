export default class DemoControls {
  constructor(player){
    this.player = player;
    this.keys = {};
    addEventListener('keydown', e => this.keys[e.key] = true);
    addEventListener('keyup', e => this.keys[e.key] = false);
  }

  update(){
    const p = this.player;
    const speed = 2;
    if(this.keys.ArrowUp || this.keys.w) p.y -= speed;
    if(this.keys.ArrowDown || this.keys.s) p.y += speed;
    if(this.keys.ArrowLeft || this.keys.a) p.x -= speed;
    if(this.keys.ArrowRight || this.keys.d) p.x += speed;
  }
}
