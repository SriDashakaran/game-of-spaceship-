
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var spaceship1;
var bg;
var bombGroup;
var select_enemy;
var gameState = "start"

function preload(){
    backgroundImg = loadImage("bg.jpeg")
}
function setup(){
    var canvas = createCanvas(1536,740);
    engine = Engine.create();
    world = engine.world;
    bg = createSprite(750,300);
    bg.addImage(backgroundImg);
    
    
    spaceship1 = new Spaceship(1400,335,250,250);
   
   
   bombGroup = new Group();
}
function draw (){
    Engine.update(engine);
    background(0);
//redenemy1.display();


if ((keyDown('space'))&&(gameState==="start")){
gameState="play"

}
if(gameState==="play")
{
   bg.velocityX=2;
   if(bg.x>1000) 
   {
       bg.x=600;
   }
 if(keyWentUp('space'))
 {
createBomb();
 }
  
 select_enemy = Math.round(random(1,3));
  
 if (frameCount % 50 === 0) {
   if (select_enemy === 1) {
     redenm();
   } else if (select_enemy === 2) {
     greenenm();
   } else   {
     yellowenm();
   } 
 }

}
drawSprites();
if (gameState==="start") 
{
    textSize(32);
    fill('white')
    text("press space to start the game",560,320);
}
spaceship1.display();
//yellowenemy1.display();
//greenenemy1.display();
}

function createBomb() {
    var bomb= createSprite(1400,335,50,50);
//    bomb.addImage(arrowImage);
    bomb.x = 1400;
    bomb.y=spaceship1.body.position.y;
    bomb.velocityX = -4;
    bomb.lifetime = 1000;
   // bomb.scale = 0.3;
     bombGroup.add(bomb);
  }
function redenm(){
    console.log("insidered")
  var  redenemy1 = new Redenemy(-50,Math.round(random(20, 500)),200,200);
  Matter.Body.setVelocity(redenemy1,2);
  console.log(redenemy1)
//}
//function greenenm(){
   // console.log("insidegreen")
 //var   greenenemy1 = new Greenenemy (-50,Math.round(random(20, 500)),150,150);
Matter.Body.setVelocity(greenenemy1,6);
}
function yellowenm(){
    console.log("insideyellow")
 var  yellowenemy1 = new Yellowenemy (-50,Math.round(random(20, 500)),200,200);
Matter.Body.setVelocity( yellowenemy1,3);
}
function mousePressed(){

}