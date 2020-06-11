let bubbles = []

function setup() {
    createCanvas(600, 600);
}

function mouseDragged() {
    let rad = random(15, 100)
    let bubble = new Bubble(mouseX, mouseY, rad);
    bubbles.push(bubble);
}

function draw() {
    background(0);
    for (let i = 0; i < bubbles.length; i++) {
        let s = random(2, 6)
        bubbles[i].move(-s, s);
        bubbles[i].show(0, 255, 255, 255);
    }
}
