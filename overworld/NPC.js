export default class NPC {
    constructor(x,y){
        this.x=x;
        this.y=y;
    }

    update(dt){ }

    draw(ctx){
        ctx.fillStyle="green";
        ctx.fillRect(this.x,this.y,16,24);
    }
}
