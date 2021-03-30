var mouse;
var cat;
var catImg1, catImg2, mouseImg1, mouseImg2, catImg3, mouseImg3;
var garden, gardenImg;




function preload() {
    //load the images here
    catImg1 = loadAnimation("images/cat1.png");
    MouseImg1 = loadAnimation("images/mouse1.png");
    gardenImg = loadImage("images/garden.png");
    catImg2 = loadAnimation("images/cat2.png", "images/cat3.png");
    mouseImg2 = loadAnimation("images/mouse2.png", "images/mouse3.png");
    catImg3 = loadAnimation("images/cat4.png");
    mouseImg3 = loadAnimation("images/mouse4.png");

}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
cat = createSprite(200, 200);
cat.addAnimation("cat", catImg1);
mouse = createSprite(100, 100);
mouse.addAnimation("mouseRunning", mouseImg1);

}

function draw() {

    background(gardenImg);
    //Write condition here to evalute if tom and jerry collide
    if(cat.x - mouse.x < (cat.width - mouse.width)/2) {
        cat.velocityX = 0;
        cat.addAnimation("catRunning", catImg2);
        cat.changeAnimation("catRunning");
        
    }
  
    drawSprites();
    
    }



function keyPressed(){

  //For moving and changing animation write code here
  if (KeyCode === LEFT_ARROW) {
      mouse.addAnimation("mouseTeasing", mouseImg2);
      mouse.changeAnimation("mouseTeasing");
      mouse.frameDelay = 25;
  }

 
}


