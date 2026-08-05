export default class Collision {
 static check(a,b){
  return a.x < b.x+b.width &&
         a.x+a.width > b.x &&
         a.y < b.y+b.height &&
         a.y+a.height > b.y;
 }

 static solid(rect,objects){
  return objects.some(o=>o.solid && this.check(rect,o));
 }
}
