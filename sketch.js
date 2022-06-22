var path,boy, leftBoundary, rightBoundary;
var pathImg,boyImg;
var i;

function preload(){
  pathImg = loadImage("path.png");
  boyImg = loadAnimation("Jake1.png", "Jake2.png", "jake3.png");
}

function setup(){
  
  createCanvas(400,400);
 path = createSprite(200, 0);
 path.addImage(pathImg);
 path.scale=1.2;
 path.velocityY = 4;

 

 boy = createSprite(200,250);
 boy.addAnimation("menino", boyImg);
  

 leftBoundary=createSprite(0,0,100,800);
 leftBoundary.visible = false


 rightBoundary=createSprite(410,0,100,800);
 rightBoundary.visible = false
}

function draw() {
  background(0);
  
  boy.x = World.mouseX

  
  boy.collide(leftBoundary);
  boy.collide(rightBoundary);
  
  //código para redefinir o fundo
  if(path.y > 400 ){
    path.y = height/2;
  }
  
  drawSprites();
}
