var box;
function setup() {
  createCanvas(400,400);
  box=createSprite(100,100,50,50);
  box.shapeColor="green";
}

function draw() 
{
  background(30);
  if (keyIsDown(LEFT_ARROW)){
box.x-=3
  }
if (keyIsDown(RIGHT_ARROW)){
box.x+=3
}
if (keyIsDown(UP_ARROW)){
box.y-=3
}
if (keyIsDown(DOWN_ARROW)){
box.y+=3
}
drawSprites();
}




