function preload()
{}

function setup(){
canvas = createCanvas(640, 480);
canvas.position(110, 250);
video = createCapture(VIDEO);
video.hide();
}

function draw(){
image(video, 180, 140, 250, 250);
stroke(12, 58, 36);
fill(32, 198, 255);
circle(60, 50, 90);

circle(560, 50, 90);

circle(60, 430, 90);

circle(560, 430, 90);

stroke(0, 255, 0);
fill(0, 255, 0);
rect(105, 40, 410, 20);

rect(105, 420, 410, 20);

rect(50, 95, 20, 292);

rect(550, 95, 20, 292);

}

function take_snapshot(){
save("your_new_img.png")
}