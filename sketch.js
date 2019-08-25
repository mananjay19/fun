var fixrect,movingrect;
function setup() {
  createCanvas(800,400);
  fixrect=createSprite(400, 200, 50, 50);
  movingrect=createSprite(600, 200, 50, 50);
  fixrect.velocityX=4;
  movingrect.velocityX=-4;
}

function draw() {
  background(255,255,255); 
  //movingrect.x=World.mouseX;
  //movingrect.y=World.mouseY;
  if(fixrect.x-movingrect.x<fixrect.width/2+movingrect.width/2 &&
         movingrect.x-fixrect.x<fixrect.width/2+movingrect.width/2)
 
     { fixrect.shapeColor="red";
      movingrect.shapeColor="red";
      fixrect.velocityX*=(-1);
  movingrect.velocityX*=(-1);
     } 
     else if( fixrect.y-movingrect.y<fixrect.height/2+movingrect.height/2 &&
      movingrect.y-fixrect.y<fixrect.height/2+movingrect.height/2){
        fixrect.shapeColor="blue";
  movingrect.shapeColor="blue"; 
  fixrect.velocityY*=(-1);
  movingrect.velocityY*=(-1);
  }
  drawSprites();
}