
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var roof,bob1,bob2,bob3,bob4,bob5;

function preload(){
	
}

function setup() {
	createCanvas(800, 700);
	roof=createSprite(600,200,350,20);
	roof.shapeColor=("white")

	engine = Engine.create();
	world = engine.world;
    roof = Bodies.rectangle(400,200,350,20);
	World.add(world,roof)
	
	bob1= new Bob(400,500,30,30);
	bob2= new Bob(500,500,30,30);
	bob3= new Bob(600,500,30,30);
	bob4= new Bob(300,500,30,30);
	bob5= new Bob(200,500,30,30);


	Engine.run(engine);
    
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  line(bob1.body.position.x,bob1.body.position.y,roof.body.position.x,roof.body.position.y)
}



