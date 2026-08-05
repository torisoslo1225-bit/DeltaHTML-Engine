import SpriteManager from "../engine/SpriteManager.js";

export default class TestPlayer {
 constructor(x=320,y=240){
  this.x=x;
  this.y=y;
  this.speed=3;
  this.frame=0;
  this.animTimer=0;
  this.walking=false;
  this.direction="down";

  this.sprites=[
   "spr_krisd_0.png",
   "spr_krisd_1.png",
   "spr_krisd_2.png",
   "spr_krisd_3.png"
  ];

  this.spriteManager=new SpriteManager();
  this.images=this.sprites.map(name=>this.spriteManager.load(name));
 }

 update(input){
  this.walking=false;

  if(input.down('ArrowUp')||input.down('w')){
   this.y-=this.speed;
   this.direction="up";
   this.walking=true;
  }
  if(input.down('ArrowDown')||input.down('s')){
   this.y+=this.speed;
   this.direction="down";
   this.walking=true;
  }
  if(input.down('ArrowLeft')||input.down('a')){
   this.x-=this.speed;
   this.direction="left";
   this.walking=true;
  }
  if(input.down('ArrowRight')||input.down('d')){
   this.x+=this.speed;
   this.direction="right";
   this.walking=true;
  }

  if(this.walking){
   this.animTimer++;
   if(this.animTimer>=8){
    this.frame=(this.frame+1)%this.images.length;
    this.animTimer=0;
   }
  }else{
   this.frame=0;
  }
 }

 draw(ctx){
  this.spriteManager.draw(
   ctx,
   this.images[this.frame],
   this.x-16,
   this.y-16
  );
 }
}