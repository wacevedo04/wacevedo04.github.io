function setup() {
    createCanvas(600, 400);
}

function draw() {
    background(0);
    strokeWeight(4);


    var x = 0;
    var y = 0;
    var x_r = x - 1.5;
    var x_b = x + 1.5;

    while(x_r <= width){
        while(y <= height){
            ellipse(x_r, y, 25, 25);
            stroke(255, 0, 0);
            fill(255, 0, 0);
            y = y + 50;
        }
        x_r = x_r + 50;
        y = 0
    }

    while(x_b <= width){
        while(y <= height){
            ellipse(x_b, y, 25, 25);
            stroke(0, 0, 255);
            fill(0, 0, 255);
            y = y + 50;
        }
        x_b = x_b + 50;
        y = 0
    }

    while(x <= width){
        while(y <= height){
            ellipse(x, y, 25, 25);
            stroke(255);
            fill(255);
            y = y + 50;
        }
        x = x + 50;
        y = 0
    }

    ellipse(0, 0, 25, 25);
    stroke(255);
    fill(255);
}
