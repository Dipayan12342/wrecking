const Engine=Matter.Engine;
const World=Matter.World;
const Constraint = Matter.Constraint;
const Bodies=  Matter.Bodies;

var engine,world;
var ground1;

function setup(){
    createCanvas(3000,800);
    engine = Engine.create()
    world=engine.world;

    ground1 = new Ground(600,600,1200,20);



}

function draw(){

    background(180);

    Engine.update(engine);

    ground1.display();
}