import Input from "../engine/Input.js";

export default class Player {
    constructor(){
        this.x = 320;
        this.y = 240;
        this.speed = 120;
    }

    update(dt){
        if(Input.down("ArrowLeft")) this.x -= this.speed * dt;
        if(Input.down("ArrowRight")) this.x += this.speed * dt;
        if(Input.down("ArrowUp")) this.y -= this.speed * dt;
        if(Input.down("ArrowDown")) this.y += this.speed * dt;
    }

    draw(ctx){
        ctx.fillStyle = "red";
        ctx.fillRect(this.x,this.y,16,24);
    }
}
