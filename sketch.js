const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var block8,block9,block10,block11,block12,block13,block14,block15,block16;
var ground;
var stand1,stand2;
var slingShot;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    block8 = new Block(330,235,30,40);
    block9 = new Block(360,235,30,40);
    block10 = new Block(390,235,30,40);
    block11 = new Block(420,235,30,40);
    block12= new Block(450,235,30,40);
    block13 = new Block(360,195,30,40);
    block14 = new Block(390,195,30,40);
    block15 = new Block(420,195,30,40);
    block16 = new Block(390,155,30,40);
    
    
    ground=new Ground(200,390,400,20);
    stand1=new Ground(200,390,400,20);
    stand2=new Ground(200,390,400,20);

    polygon=Bodies.circle(50,200,20);
    World.add(world,polygon);

    slingShot=new SlingShot(this.polygon,{x:100,y:200});
}

function draw(){
    background(0);
    Engine.update(engine);



    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    block13.display();
    block14.display();
    block15.display();
    block16.display();
   ground1.display();
   stand1.display();
   stand2.display();
}

