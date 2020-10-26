var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup;
var invisibleGround;
var score;
var SurvivalTime = 0

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  
}

function setup() {
  createCanvas(600,600);
  
  monkey=createSprite(50,450,10,10);
  monkey.addAnimation("running",monkey_running);
  monkey.scale=0.1;
  monkey.setCollider("rectangle",0,0,290,550);
  //monkey.debug ="true";
  
  score=0
    
 
  ground=createSprite(300,450,600,10);
  
 
  obstacleGroup=new Group();
  FoodGroup=new Group();
  
}
function draw() {
 background("white");
  
  spawnBanana()
  spawnObstacles() 
  monkey.collide(ground);
  obstacleGroup.collide(ground);
  
 monkey.velocityY = monkey.velocityY + 0.8;
  
  if(keyDown("space")&& monkey.y >= 380) {
        monkey.velocityY = -12;
   } 
  
  if (FoodGroup.isTouching(monkey)) {
      FoodGroup.destroyEach()
    score=score+2;
      }
  
  if ( obstacleGroup.isTouching(monkey)) {
    obstacleGroup.destroyEach()
    monkey.scale=0.1;
   score=0;
  }
  stroke("black")
  textSize (10)
  fill("black")
  SurvivalTime = Math.ceil(frameCount/frameRate())
  text("Survival Time:"+SurvivalTime,100,50)
  
  
  
  stroke("red")
  textSize(20)
  fill("red")
  text ("Score:"+score,500,50)
  
 drawSprites();

}
 function spawnBanana()            {  
   if (frameCount % 180 === 20) {
    var banana= createSprite(580,120,40,10);
    banana.y = Math.round(random(300,340));
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -8;
    banana.lifetime=250; 
     FoodGroup.add(banana)
   }
 }
   function spawnObstacles()            {  
   if (frameCount % 300 === 0) {
    var obstacle= createSprite(580,450,40,10);
    obstacle.addImage(obstacleImage);
    obstacle.scale = 0.1;
    obstacle.velocityX = -7;
     obstacle.lifetime=250;
     obstacleGroup.add(obstacle)
     obstacle.setCollider("circle",0,0,200);
   }
 }
  

