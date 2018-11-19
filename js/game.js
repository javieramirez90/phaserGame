//create a new scene
let gameScene = new Phaser.Scene('Game');

//Load assets
gameScene.preload = function() {
  //Loading background
  this.load.image('background', '../assets/background.png');
  this.load.image('player', '../assets/player.png');
};

//called after the preloads ends.
gameScene.create = function() {
  //create background sprite
  let bg = this.add.sprite(0, 0, 'background');
  //changing the origin to the top left corner
  //bg.setOrigin(0,0);
  let gameW = this.sys.game.config.width;
  let gameH = this.sys.game.config.height;
  bg.setPosition(gameW/2, gameH/2);

  //creating player sprite
  let player = this.add.sprite(50, 180, 'player');
  // player.depth = 1;
  //the dept property allow us to put our elements in order they appear in our canvas.
  //in order to not worry for the place we put them. The higher the number of the depth
  //the more on top the element is.
  
  /*SCALING THE SPRITE*/
  player.setScale(2, 2);
}

//Set the congfiguration of the game
let config = {
  type: Phaser.AUTO, //Phaser will use WebGL if available, if not it will ude Canvas API
  width: 640,
  height: 360,
  scene: gameScene
}

//To create a new game I pass the configuration
let game = new Phaser.Game(config);
