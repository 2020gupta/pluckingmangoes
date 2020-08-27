
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
var stone
var boy
 var mango
 var mango1,mango2,mango3,mango4,mango5
var tree
var chain
function preload()
{
   	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	 stone=new Stone (90,550,50)
	 boy=new Boy(150,640,100,250)
	 ground=new Ground(400,690,800,20)
	 tree=new Tree(600,620,300,650)
	 mango=new Mango(540,540,50,30)
	 mango1=new Mango(650,540,50,30)
	 mango2=new Mango(690,510,50,30)
	 mango3=new Mango(550,430,50,30)
	 mango4=new Mango(640,480,50,30)
	 mango5=new Mango(690,450,50,30)
	 chain=new Launcher(stone.body,{x:90,y:550})
	 
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  stone.display();
  boy.display();
  ground.display();
  tree.display();
  mango.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  chain.display();
  drawSprites();
 
}

function mouseDragged(){
    Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
  stone.fly();
}
function keyPressed(){
if(keyCode===32){
Matter.Body.setPosition(stone.body,{x:90,y:550})
launcher.attach(stone.body);
 }
}
function detectCollision(mango,stone){
mangoBodyPosition=mango.body.Position
stoneBodyPosition=stone.body.position
detectollision(stone,mango)
detectollision(stone,mango1)
detectollision(stone,mango2)
detectollision(stone,mango3)
detectollision(stone,mango4)
detectollision(stone,mango5)
var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)

if (distance<=Image.r+stone.r) 
{
Matter.Body.setStatic(mango.body,false)
}
}