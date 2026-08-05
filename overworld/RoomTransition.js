export default class RoomTransition {
    constructor(target,x,y){
        this.target=target;
        this.x=x;
        this.y=y;
    }

    check(player){
        if(Math.abs(player.x-this.x)<16 && Math.abs(player.y-this.y)<16){
            return this.target;
        }
        return null;
    }
}
