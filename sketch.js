const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

const Constraint = Matter.Constraint;

function preload()
{
	boyImg=loadImage("boy.png");
}

function setup() {
	createCanvas(1200, 580);
	engine = Engine.create();
	world = engine.world;

	tree = new Tree(950 , 300 , 100, 100)
	
	ground = new Ground(width/2 , height , width , 10)

	stone = new Stone(235, 420, 30)

	mango1=new Mango(900,100,20);
    mango2=new Mango(850,130,20);
	mango3=new Mango(800,200,20);
	mango4=new Mango(1000,70,20);
	mango5=new Mango(950,70,20);
	mango6=new Mango(1000,230,20);
	mango7=new Mango(900,230,30);
	mango8=new Mango(1050,150,30);
	mango9=new Mango(1000,230,30);


	slingshot = new SlingShot(stone.body,{x:100, y:400});

	Engine.run(engine);
  
}


function draw() {
	rectMode(CENTER);
	background(255);
	
	textSize(25);
  	text("Press Space to get a second Chance to Play!!",50 ,50);
  	image(boyImg ,50,350,200,300);

	tree.display();
	ground.display();
	stone.display();
	
	mango1.display();
	mango2.display();
	mango3.display();
	mango4.display();
	mango5.display();
	mango6.display();
	mango7.display();
	mango8.display();
	mango9.display();

	slingshot.display();

	detectCollision(stone,mango1);
	detectCollision(stone,mango2);
	detectCollision(stone,mango3);
	detectCollision(stone,mango4);
	detectCollision(stone,mango5);
	detectCollision(stone,mango6);
	detectCollision(stone,mango7);
	detectCollision(stone,mango8);
	detectCollision(stone,mango9);
	
}

function mouseDragged(){
    Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}

function keyPressed(){
    if (keyCode === 32){
		Matter.Body.setPosition(stone.body, {x:235, y:420}) 
        slingshot.attach(stone.body);

    }
}

function detectCollision(lstone , lmango){
	
	mangoBodyPosition=lmango.body.position
	stoneBodyPosition=lstone.body.position

	var distance = dist(stoneBodyPosition.x , stoneBodyPosition.y , mangoBodyPosition.x , stoneBodyPosition.y )

	if (distance<-lmango.r+lstone.r){
		Body.setStatic(lmango.body , false);
	}
}