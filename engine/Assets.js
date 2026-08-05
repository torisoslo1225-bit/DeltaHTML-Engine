export default class Assets {
 static images={};
 static loadImage(name,path){
  return new Promise(resolve=>{
   const img=new Image();
   img.onload=()=>{this.images[name]=img;resolve(img);};
   img.src=path;
  });
 }
}