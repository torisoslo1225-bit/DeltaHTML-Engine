export default class AudioManager {
  constructor(){
    this.music = null;
  }

  playMusic(src){
    this.stopMusic();
    this.music = new Audio(src);
    this.music.loop = true;
    this.music.play();
  }

  stopMusic(){
    if(this.music){
      this.music.pause();
      this.music = null;
    }
  }
}
