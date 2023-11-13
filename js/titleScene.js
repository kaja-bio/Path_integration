class titleScene extends Phaser.Scene {
  constructor (){
    super({key: 'titleScene'});
  }

  preload(){
    console.log("title")
  }
  create (data){

  }
  update(time, delta){
    if (time>6000){ //will change this later to be on click rather than timewise
      this.scene.switch('dayScene')
    }

  }
}
export default titleScene