export default class CameraFollow {
 constructor(target){
  this.target=target;
  this.x=0;
  this.y=0;
 }
 update(){
  if(!this.target)return;
  this.x=this.target.x-320;
  this.y=this.target.y-240;
 }
}