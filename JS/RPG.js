const config ={
	width: 1200,
	height:300,
	type:Phaser.AUTO,
	// ajout de la physique au jeu (gravité)
	physics:{
		default: 'arcade',
		arcade: {
			gravity:{y:400}
		}
	},
	// exécute les fonctions si dessous
	scene:{
		preload: preload,
		create: create,
		update: update
	}
};


var game = new Phaser.Game(config);
let dude
let cursors

function preload(){
	this.load.image('dude','JS/phaser-dude.png')
}

function create(){
	dude=this.physics.add.image(100,100,'dude')
	console.log(dude)
	// collision des bords
	dude.body.collideWorldBounds =true;

	// flèche directionnelle orientation
	cursors =this.input.keyboard.createCursorKeys()
	console.log(cursors);
}

function update(){
	dude.setVelocityX(0)
	
	if(cursors.up.isDown){
		dude.setVelocity(0,-200)
	}
	if(cursors.left.isDown){
		dude.setVelocity(-100,0)
	}
	if(cursors.right.isDown){
		dude.setVelocity(100,0)
	}
	
}