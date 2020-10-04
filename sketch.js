const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var waste, ground, Line1, Line2, Line3;

function preload(){}

function setup() {

 createCanvas(800, 600);

 engine = Engine.create();
 world = engine.world;

 //Create the Bodies Here.

 ground = new Ground(600,height,1200,20)

 fill("red");   
 Line1 = new baseLine(650, 580, 200, 20);

 fill("red");   
 Line2 = new baseLine(550, 540, 20, 100);

 fill("red");   
 Line3 = new baseLine(750, 540, 20, 100);

 waste = new Paperball(100, 480, 5, 5, {isStatic:true})

 Engine.run(engine);
  
}


function draw() {

 rectMode(CENTER);
  
 background(0);
  
 keyPressed();

 drawSprites();

 waste.display();

 ground.display();

 Line1.display();
 
 Line2.display();

 Line3.display();

}

function keyPressed() {
	if (keyCode === UP_ARROW) {
	   
		Matter.Body.applyForce(waste.body, waste.body.position, {x:0.2, y:-0.25})
	   
	 }
   }