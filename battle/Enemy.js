export default class Enemy {
    constructor(name="Enemy"){
        this.name=name;
        this.hp=100;
        this.maxHp=100;
        this.dialogue=["... "];
    }

    hurt(amount){
        this.hp=Math.max(0,this.hp-amount);
    }
}
