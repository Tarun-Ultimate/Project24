
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var Rectangle1
var rightSide,leftSide,bottom;
var ground;
var paper;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

  ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
  World.add(world,ground)
	//Create the Bodies Here.
  rightSide = new Dustbin(850,605,20,100);

	 bottom = new Dustbin(940,640,200,20);
 
   leftSide = new Dustbin(1030,605,20,100);

   paper = new Paper(50,630,20);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
 rightSide.display();
 leftSide.display();
 bottom.display();
 paper.display();
  drawSprites();
 fill("yellow"); 
 rectMode(CENTER);
 rect(this.ground.position.x,this.ground.position.y,1200,10);
}

 function keyPressed(){
   if(keyCode === UP_ARROW){
     Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85});
   }
 } 

