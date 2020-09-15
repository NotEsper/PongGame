var ball,img,paddle, edges;
var ballImg, paddleImg


function preload() {
  /* preload your images here of the ball and the paddle */
    
  ballImg = loadImage("ball.png");
  paddleImg = loadImage("paddle.png");
  
}
function setup() {
  createCanvas(400, 400);
  

  

  ball = createSprite(200,200,10,10);
  ball.addImage("ballImg", ballImg)
  
  paddle = createSprite(300,200, 15, 90);
  paddle.addImage("paddleImg", paddleImg)
  
   /* create the Ball Sprite and the Paddle Sprite */
  /* assign the images to the sprites */
  
  /* give the ball an initial velocity of 9 in the X direction */
  

}

function draw() {
  background(205,153,0);
  edges = createEdgeSprites;
  
  
 
  
  /* Allow the ball sprite to bounceOff the left, top and bottom edges only, leaving the right edge of the canvas to be open. */
  

  /* Allow the ball to bounceoff from the paddle */
  /* Also assign a collision callback function, so that the ball can have a random y velocity, making the game interesting */
 
    /* Prevent the paddle from going out of the edges */ 

  
 
  
  if(keyDown(UP_ARROW))
  {
     paddle.velocityY = -5;
  }
  
  if(keyDown(DOWN_ARROW))
  {
   paddle.velocityY = 5;
  }
  
 
  drawSprites();
  
}

function randomVelocity()
{
  /* this function gets called when the ball bounces off the paddle */
  /* assign the ball a random vertical velocity, so it bounces off in random direction */
}

