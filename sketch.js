 var tom1; 
 var jerry, jerrysgroup;
 var dog, dogsgroup;
 var path,pathImg;        
 var bg;

 function preload(){
 tomImg = loadImage("tom.png");
 jerry = loadImage("jerry.png");
 dog = loadImage("dog.png");
 //path = loadImage("path.jpg");
 bgImg = loadImage("path.jpg");
}

function setup() {
 createCanvas(600,300)

bg = createSprite(1200,60);
bg.addImage(bgImg);
//bg.scale=2;
bg.velocityX = -10;

 //create tomSprites
 tom1 = createSprite(150,150,20,50);
tom1.addImage(tomImg);
tom1.scale = 0.2;
}


function draw() {
background("grey");

if (bg.x < 200){
    bg.x = bg.width/2;
  }
  
drawSprites();
}
