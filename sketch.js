
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var foodGroup, obstacleGroup
var score,ground ;
var survivalTime =0;

function preload(){
  
  //load images and animation 
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
  }



function setup() {
  createCanvas(400,400);
  
  //create sprite and add animation to the monkey
  monkey=createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.1;
  
  
  //scrolling ground
  ground=createSprite(400,350,900,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  console.log(ground.x);
  
  //create group
  foodGroup = new Group();
  obstacleGroup= new Group();
  
  }


function draw() {
background(255);
  
  // make monkey jump
  if(keyDown("space")&& monkey.y >= 100) {
      monkey.velocityY = -12;
        
  }
  
  //scrolling ground
  if(ground.x < 0){
      ground.x = ground.width/2;
  }
  
  //gravity for monkey
  monkey.velocityY = monkey.velocityY + 0.8;
  monkey.collide(ground);
  
  stroke("white");
  textSize(20);
  fill("white");
  text("Score:"+ score,500,50);
  
  //to text surevival time
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate());
  text("Survival Time: "+ survivalTime,100,50);
  
  drawSprites();
  food();
  obstacles();

  }

function food(){
  //to make banana after every 80frames
  if(World.frameCount%80===0){
    banana=createSprite(600,200,20,20);
    banana.addImage(bananaImage);
    banana.scale=0.1;
    banana.y=Math.round(random(120,200));
    banana.velocityX=-2;
    banana.setLifetime=100;
    foodGroup.add (banana);
  }
  }

function obstacles(){
  //to make obstacle after every 300frames
  if(World.frameCount%300===0){
    obstacle=createSprite(600,327,20,20);
    obstacle.addImage(obstaceImage);
    obstacle.scale=0.1;
    obstacle.velocityX=-3;
    
   }
   }
