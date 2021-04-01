const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;
var rubber,stone;
var iron;
var rubber2,rubber3,rubber4,rubber5;



function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,50)
    hammer = new Hammer(10,100);
    rubber = new Rubber(900,100,40);
    stone = new Stone(600,100,50,50);
    iron = new Iron(400,100,50,30);
    rubber2 = new Dimond(500,1000,20);
    rubber3 = new Dimond(500,200,20);
    rubber4 = new Dimond(500,50,20);
    rubber5 = new Dimond(500,25,20);
}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer.display();
    rubber.display();
    stone.display();
    iron.display();
    rubber2.display();
    rubber3.display();
    rubber4.display();
    rubber5.display();
}