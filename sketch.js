var b1, a1;

function setup() {
  createCanvas(1200,800);
  b1 = createSprite(400, 100, 50, 80);
  b1.shapeColor = "green";
  b1.debug = true;
  a1 = createSprite(400, 800,80,30);
  a1.shapeColor = "green";
  a1.debug = true;

  a1.velocityY = -5;
  b1.velocityY = +5;
}

function draw() {
  background(0,0,0);  
 bounceoff(a1,b1);
  drawSprites();
}
  
 
