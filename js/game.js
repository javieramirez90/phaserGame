//create a new scene
let gameScene = new Phaser.Scene('Game');

//Load assets
gameScene.preload = function() {
  //Loading background
  this.load.image('background', '../assets/background.png');
  this.load.image('player', '../assets/player.png');
  this.load.image('enemy', '../assets/dragon.png');
};

//called after the preloads ends.
gameScene.create = function() {
  //create background sprite
  this.bg = this.add.sprite(0, 0, 'background');
  //changing the origin to the top left corner
  //bg.setOrigin(0,0);
  this.gameW = this.sys.game.config.width;
  this.gameH = this.sys.game.config.height;
  this.bg.setPosition(this.gameW/2, this.gameH/2);

  //creating player sprite
  this.player = this.add.sprite(50, 180, 'player');
  // player.depth = 1;
  //the dept property allow us to put our elements in order they appear in our canvas.
  //in order to not worry for the place we put them. The higher the number of the depth
  //the more on top the element is.
  
  /*SCALING THE SPRITE*/
  this.player.setScale(.5, .5);

  //create an enemy
  this.enemy1 =  this.add.sprite(250, 180, 'enemy');
  

  this.enemy1.scaleX = 2;
  this.enemy1.scaleY = 2;

  // enemy1.angle = 45;
  // enemy1.setAngle(45); this give us the same result as the one before
  // enemy1.setAngle(-45); this give us the same result as the one before but to the contrary clockwise 
  // enemy1.rotation = -(Math.PI / 4);
  //create a new enemy
  this.enemy1.setRotation = -(Math.PI / 4);

  this.enemy2 =  this.add.sprite(450, 180, 'enemy');
  this.enemy2.displayWidth = 100;

  //flip sprite
  this.enemy1.flipX = true;

}

gameScene.update = function(){
  // this.enemy1.x += 1;
  this.enemy1.angle += 1;

  //check if we checked the scale of two

  if(this.player.scaleX < 2){
    //make the player grow
    this.player.scaleX += .01;
    this.player.scaleY += .01;
  }
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
