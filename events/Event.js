export default class Event {
    constructor(callback){
        this.callback=callback;
        this.done=false;
    }

    run(){
        if(!this.done){
            this.callback();
            this.done=true;
        }
    }
}
