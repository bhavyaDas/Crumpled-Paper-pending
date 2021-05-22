const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var engine,world,ground,backgroundImg,dustbin,paper

function preload(){
backgroundImg=loadImage("background.png")
}
function setup(){
	createCanvas(windowWidth,windowHeight-10)
	engine=Engine.create()
	world=engine.world
	

	ground = new Ground(100,360)
	dustbin = new Dustbin(1200,595)
	paper = new Paper(200,1200)
}

function draw(){
	background(backgroundImg)
	Engine.update(engine);
	ground.display()
dustbin.display()
paper.display()
	




}
