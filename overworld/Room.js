export default class Room {
    constructor(){
        this.npcs=[];
    }

    addNPC(npc){
        this.npcs.push(npc);
    }

    update(dt){
        for(const npc of this.npcs){
            npc.update(dt);
        }
    }

    draw(ctx){
        for(const npc of this.npcs){
            npc.draw(ctx);
        }
    }
}
