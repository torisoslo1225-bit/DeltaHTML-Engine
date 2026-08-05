export default class TileMap {
    constructor(data){
        this.data=data;
        this.size=data.tileSize;
    }

    draw(ctx){
        for(let y=0;y<this.data.tiles.length;y++){
            for(let x=0;x<this.data.tiles[y].length;x++){
                ctx.fillStyle=this.data.tiles[y][x]===1 ? '#555' : '#222';
                ctx.fillRect(x*this.size,y*this.size,this.size,this.size);
            }
        }
    }
}