// Basic interactable NPC

class NPC {
    constructor(x, y, text = "Hello!") {
        this.x = x;
        this.y = y;
        this.text = text;
        this.interactable = true;
    }

    interact() {
        return this.text;
    }
}

export default NPC;
