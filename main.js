function preload() {

}
function setup() {
    canvas = createCanvas(450,450);
    canvas.position(500,150);
    video = createCapture(VIDEO);
    video.hide();
}

function draw() {
    image(video,0,0,350,450);

    stroke(0, 0, 255);
    fill(0, 0, 255);
    circle(350,10,30);

    stroke(0, 0, 255);
    fill(0, 0, 255);
    circle(350,440,30);

    stroke(0, 0, 255);
    fill(0, 0, 255);
    circle(10,10,30);

    stroke(0, 0, 255);
    fill(0, 0, 255);
    circle(10,440,30);
}

function takeSnapshot() {
    save('name.png');
}

