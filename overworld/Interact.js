import Input from "../engine/Input.js";

export default class Interact {
    static check(player,npcs){
        if(!Input.down("z") && !Input.down("Enter")) return;
        for(const npc of npcs){
            const dx=Math.abs(player.x-npc.x);
            const dy=Math.abs(player.y-npc.y);
            if(dx<32 && dy<32 && npc.talk){
                npc.talk();
            }
        }
    }
}
