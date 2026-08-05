export default class SavePoint {
    constructor(x,y){
        this.x=x;
        this.y=y;
    }

    activate(){
        localStorage.setItem('delta_save', JSON.stringify({x:this.x,y:this.y}));
    }
}
