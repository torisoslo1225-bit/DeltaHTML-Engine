// DeltaHTML simple editor foundation
// Designed for easy modding like Kristal configs

export default class Editor {
 constructor(){
  this.rooms=[];
 }
 addRoom(room){
  this.rooms.push(room);
 }
 export(){
  return JSON.stringify(this.rooms,null,2);
 }
}