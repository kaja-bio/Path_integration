import dayScene from "./dayScene.js"
import titleScene from "./titleScene.js"

const config = {
  type: Phaser.AUTO,
  width: 1000,
  height: 700,
  backgroundColor: '#000001',
  // scene: {
  //   preload: preload,
  //   create: create,
  //   update: update
  // },
  physics: {
    default: 'arcade',
    arcade: {
      debug: true,
    }
  },
  scale: {
    mode:Phaser.Scale.FIT,
    autoCenter:Phaser.Scale.CENTER_BOTH,
  }
}

const game = new Phaser.Game(config);

game.scene.add('dayScene', dayScene);
game.scene.add('titleScene', titleScene);

game.scene.start('titleScene');