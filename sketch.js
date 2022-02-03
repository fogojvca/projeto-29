const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,ball,ground;
var stand1,stand2;
var ball;
var slingShot;
var polygon_img;
var polygon;
function preload(){
  polygon_img=loadImage("polygon.png");
}
function setup() {
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);

  ground = new Ground();
  stand1 = new Stand(390,300,250,10);
  stand2 = new Stand(700,200,200,10);
 
  //level one P1
  block1 = new Block(300,275,30,40);
  //console.log(block1);
  block2 = new Block(330,275,30,40);
  block3 = new Block(360,275,30,40);
  block4 = new Block(390,275,30,40);
  block5 = new Block(420,275,30,40);
  block6 = new Block(450,275,30,40);
  block7 = new Block(480,275,30,40);
  //level two P1
  block8 = new Block(330,235,30,40);
  block9 = new Block(360,235,30,40);
  block10 = new Block(390,235,30,40);
  block11 = new Block(420,235,30,40);
  block12 = new Block(450,235,30,40);
  //level three P1
  block13 = new Block(360,195,30,40);
  block14 = new Block(390,195,30,40);
  block15 = new Block(420,195,30,40);
  //top P1
  block16 = new Block(390,155,30,40);


  //level one P2
  block1P2 = new Block(640,170,30,40);
  block2P2 = new Block(670,170,30,40);
  block3P2 = new Block(700,170,30,40);
  block4P2 = new Block(730,170,30,40);
  block5P2 = new Block(760,170,30,40);

  //level two P2
  block6P2 = new Block(670,140,30,40);
  block7P2 = new Block(700,140,30,40);
  block8P2 = new Block(730,140,30,40);

  //top P2
  block9P2 = new Block(700,110,30,40);

  ball = Bodies.circle(200, 100, 20);
  World.add(world, ball);

  slingShot = new SlingShot(this.ball,{x:100,y:200});

}
function draw() {
  background(56,44,44); 
 
  textSize(20);
  fill("lightyellow");
  text("Drag the Hexagonal Stone and Realease it, to launch it towards the blocks",100,30)

  ground.display();
  stand1.display();
  stand2.display();
  
  strokeWeight(2);
  stroke(15);
  fill("skyblue");
  //P1
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  //P2
  block1P2.display();
  block2P2.display();
  block3P2.display();
  block4P2.display();
  block5P2.display();

  fill("pink");
  //P1
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  //P2
  block6P2.display();
  block7P2.display();
  block8P2.display();

  fill("turquoise");
  //P1
  block13.display();
  block14.display();
  block15.display();
  //P2
  block9P2.display();
  fill("grey");
  //P1
  block16.display();


  imageMode(CENTER)
  image(polygon_img ,ball.position.x,ball.position.y,40,40);

  slingShot.display();

}

function mouseDragged(){
  Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY});
}

function mouseReleased(){
  slingShot.fly();
}
