class dayScene extends Phaser.Scene {
  constructor (){
    super({key: 'dayScene'});
  }
  
  preload(){
    this.load.image("bg", "images/hiking_background_real.png");
    this.load.image("start", "images/start.png");
    this.load.image("tent", "images/tent.png");
    this.load.image("lake", "images/lake.png");
    this.load.image("mountain", "images/mountain.png");
    this.load.image("food", "images/food_stall.png");
    this.load.image("bg_night", "images/night_background.png");
    this.load.image("player", "images/casper.png");
  }
  create (data){
    this.bg = this.add.sprite(0, 0, "bg").setOrigin(0,0);
    this.start = this.add.image(20, 350, "start").setScale(0.2);
    this.tent = this.add.image(850, 390, "tent").setScale(.3);
    this.lake = this.add.image(220, 230, "lake").setScale(.8);
    this.mountain = this.add.image(500, 550, "mountain").setScale(.3);
    this.food = this.add.image(650, 200, "food").setScale(.2);
    this.player = this.physics.add.sprite(40, 400, "player").setScale(.3);
    // Enable collision with the world bounds
    this.player.setCollideWorldBounds(true);

    // Enable physics for other objects
    this.physics.world.enable([this.start, this.tent, this.lake, this.mountain, this.food]);

    // Set up collisions
    this.physics.add.collider(this.player, [this.start, this.tent, this.lake, this.mountain, this.food]);
  }
  update(time, delta){
    const keyLeftObj = this.input.keyboard.addKey('LEFT');
    const keyRightObj = this.input.keyboard.addKey('RIGHT');
    const keyUpObj = this.input.keyboard.addKey('UP');
    const keyDownObj = this.input.keyboard.addKey('DOWN');
    if (keyLeftObj.isDown) {
      this.player.x -= 5;
    }
    if (keyRightObj.isDown) {
      this.player.x += 5;
    }
    if (keyUpObj.isDown) {
      this.player.y -= 5;
    }
    if (keyDownObj.isDown) {
      this.player.y += 5;
    }
  }
}
export default dayScene