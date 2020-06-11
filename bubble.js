class Bubble {
    // x and y control the starting position
    // rad controls radius
    constructor(x, y, rad){
        this.x = x;
        this.y = y;
        this.rad = rad;
    }

    // low and high determine the low and high ends of the position randomizer respectively
    move(low, high){
        this.x = this.x + random(low, high);
        this.y = this.y + random(low, high);
    }

    // f is a binary input to control whether or not fill is used. 1 turns it on. 0 turns it off
    // r, g, b control the red, green, and blue values, respectively
    show(f, r, g, b){
        stroke(r, g, b);
        strokeWeight(4);

        if (f === 1){
            fill(r, g, b);
        } else {
            noFill()
        }

        ellipse(this.x, this.y, this.rad, this.rad);
    }
}
