export default class TestPlayer {
 constructor(x=320,y=240){
  this.x=x;
  this.y=y;
  this.speed=3;
  this.frame=0;
  this.animTimer=0;
  this.walking=false;
  this.spriteNames=[
   "spr_krisd_0.png",
   "spr_krisd_1.png",
   "spr_krisd_2.png",
   "spr_krisd_3.png"
  ];
  this.images=[];
  this.loaded=false;

  this.loadSprites();
 }

 loadSprites(){
  let loaded=0;
  this.spriteNames.forEach(name=>{
   const img=new Image();
   img.src=name;
   img.onload=()=>{
    loaded++;
    if(loaded===this.spriteNames.length) this.loaded=true;
   };
   this.images.push(img);
  });
 }

 update(input){
  this.walking=false;

  if(input.down('ArrowUp')||input.down('w')) {
   this.y-=this.speed;
   this.walking=true;
  }
  if(input.down('ArrowDown')||input.down('s')) {
   this.y+=this.speed;
   this.walking=true;
  }
  if(input.down('ArrowLeft')||input.down('a')) {
   this.x-=this.speed;
   this.walking=true;
  }
  if(input.down('ArrowRight')||input.down('d')) {
   this.x+=this.speed;
   this.walking=true;
  }

  if(this.walking){
   this.animTimer++;
   if(this.animTimer>=8){
    this.frame=(this.frame+1)%this.images.length;
    this.animTimer=0;
   }
  } else {
   this.frame=0;
  }
 }

 draw(ctx){
  if(this.loaded && this.images[this.frame]){
   ctx.drawImage(this.images[this.frame],this.x-16,this.y-16);
  } else {
   ctx.fillStyle='red';
   ctx.fillRect(this.x-8,this.y-8,16,16);
  }
 }
}