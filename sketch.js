const Engine = Matter.Engine; 
const World = Matter.World; 
const Bodies = Matter.Bodies; 
const Constraint = Matter.Constraint;
var bg;
var boy;
var boy1;
var boy1image;
var boyimage;
var spear;
var spearimage;
var engine,world
function preload()
{
	bg=loadImage("ground.jpg");
	boyimage=loadImage("boy.png") 
	//spearimage=loadImage("1.png")
	boy1image=loadImage("download+(4).png")



}
function setup()
{
	createCanvas(windowWidth,windowHeight);
	engine=Engine.create()
	world=engine.world
	boy=createSprite(200,200,400,500);
	boy.addImage(boyimage)
	boy.scale=0.2
	boy1=createSprite(800,200,400,500)
	boy1.addImage(boy1image)
	boy1.scale=0.2


	//spear=createSprite(200,200,550,450)
	//spear.addImage(spearimage)
	//spear.scale=0.2
	
}
function draw()
{
	background(bg);
	Engine.update(engine)
	drawSprites()
}