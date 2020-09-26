
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var score;
var ground;
var survivalTime,score;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,400);
  
  monkey = createSprite(80,315,20,20);
  monkey.addAnimation("monkey",monkey_running);
  monkey.scale = 0.1;
  
  ground = createSprite(400,350,900,10);
  ground.velocityX = -4;
  ground.x = ground.width/2;
  console.log(ground.x);
  
  bananaGroup = new Group();
  obstacleGroup = new Group();

  survivalTime = 0;
  score = 0;
  
}


function draw() {
  background("white");
  
  if(keyDown("space")) {
     monkey.velocityY = -12;
  }
  
  monkey.velocityY = monkey.velocityY + 0.8;
  
  if (ground.x < ground.width/2){
      ground.x = ground.width/2;
    }
  
  monkey.collide(ground);
  
  stroke("white");
  textSize(20);
  fill("white");
  text("score: "+score,500,50);
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate());
  text("survival Time: "+ survivalTime,100,50);
  
  food();
  obstacle();
  
  drawSprites();

}

function food() {
  if(frameCount%80 === 0) {
     banana = createSprite(350,300);
     banana.addImage(bananaImage);
     banana.scale = 0.1;
     banana.velocityX = -3;
     banana.y = Math.round(random(120,250));
     banana.lifeTime = 800;
    
     bananaGroup.add(banana);
     
  }
  
}

function obstacle() {
  if(frameCount%300 === 0) {
     var obstacle = createSprite(600,335,10,40);
     obstacle.addImage(obstacleImage);
     obstacle.scale = 0.1;
     obstacle.velocityX = -4;
    
    obstacle.lifeTime = 800;
    
    obstacleGroup.add(obstacle);
  }
}




