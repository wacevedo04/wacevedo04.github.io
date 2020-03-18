// ball parameters
var x = 300;
var y = 200;
var rad = 50;

// controls rate of change in position
var speed_x = 3;
var speed_y = 3;

function setup() {
  createCanvas(x*2, y*2); // the ball will always be in the center of the canvas
}

function draw() {
  background(0);
  stroke(255);
  strokeWeight(5);
  noFill();
  
  // spawn ball
  ellipse(x, y, rad, rad);
  ellipseMode(RADIUS);
  
  // checks if ball is outside of canvas
  if (x > width - rad) {
    speed_x = -1 * speed_x;
  }  
  
  if (x < rad ) {
    speed_x = -1 * speed_x;
  }

  if (y > height - rad) {
    speed_y = -1 * speed_y;
  }  
  
  if (y < rad ) {
    speed_y = -1 * speed_y;
  }
  
  // changes the position of the ball
  x = x + speed_x;
  y = y + speed_y;
}
