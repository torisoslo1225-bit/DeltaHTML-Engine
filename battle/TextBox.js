export default class TextBox {
  constructor(){
    this.text="";
    this.visible=false;
  }
  show(message){
    this.text=message;
    this.visible=true;
  }
  hide(){
    this.visible=false;
  }
}
