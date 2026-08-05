export default class BattleManager {
    constructor(){
        this.active=false;
        this.enemy=null;
    }

    start(enemy){
        this.active=true;
        this.enemy=enemy;
    }

    end(){
        this.active=false;
        this.enemy=null;
    }
}
