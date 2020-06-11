// ball parameters
var x = 300;
var y = 200;
var rad = 50;
var x_setup = 300;
var y_setup = 200;

// controls rate of change in position
var speed_x = 3;
var speed_y = 3;

function setup() {
    createCanvas(x_setup*2, y_setup*2); // the ball will always be in the center of the canvas
}

function draw() {

    // Inverts color within canvas
    if (mouseX < x_setup*2) {
        if (mouseX > 0) {
            if (mouseY < y_setup*2) {
                if (mouseY > 0) {
                    if (mouseIsPressed) {
                        background(255);
                        stroke(0);
                    } else {
                        background(0);
                        stroke(255);
                    }
                } else {
                    background(0);
                    stroke(255);
                }
            } else {
                background(0);
                stroke(255);
            }
        } else {
            background(0);
            stroke(255);
        }
    } else {
        background(0);
        stroke(255);
    }

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
