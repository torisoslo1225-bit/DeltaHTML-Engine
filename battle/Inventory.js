export class Inventory {
  constructor(){
    this.items = [];
  }

  add(item){
    this.items.push(item);
  }

  remove(item){
    this.items = this.items.filter(i => i !== item);
  }
}