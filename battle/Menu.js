export default class Menu {
    constructor(){
        this.options=["FIGHT","ACT","ITEM","MERCY"];
        this.selected=0;
    }

    next(){
        this.selected=(this.selected+1)%this.options.length;
    }

    current(){
        return this.options[this.selected];
    }
}
