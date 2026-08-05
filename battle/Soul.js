export default class Soul {
    constructor(){
        this.x = 320;
        this.y = 360;
        this.speed = 180;
        this.size = 10;
    }

    update(dt,input){
        if(input.down("ArrowLeft")) this.x -= this.speed * dt;
        if(input.down("ArrowRight")) this.x += this.speed * dt;
        if(input.down("ArrowUp")) this.y -= this.speed * dt;
        if(input.down("ArrowDown")) this.y += this.speed * dt;
    }

    draw(ctx){
        ctx.fillStyle = "red";
        ctx.fillRect(this.x,this.y,this.size,this.size);
    }
}
