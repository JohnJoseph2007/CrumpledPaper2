
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;



function preload()
{

}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paperBall = new Paper();
	dustbinLeft = new Bin(500+25, 500-75, 20, 250);
	dustbinRight = new Bin(750-25, 500-75, 20, 250);
	dustbinBottom = new Bin((505+745)/2, 540, 200, 20);
	ground = new Ground();

	Engine.run(engine);

	keyPressed();
  
}


function draw() {
	background(255);

	paperBall.display();
	dustbinBottom.display();
	dustbinLeft.display();
	dustbinRight.display();
	ground.display();
	
	drawSprites(); 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		Body.applyForce(paperBall.body, paperBall.body.position, {x:40, y:-95});
	}
}

