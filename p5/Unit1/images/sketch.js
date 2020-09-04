var inglorious, trainingday, rancid;

function setup() {
  createCanvas(800, 800);
imageMode(CENTER);
inglorious = loadImage("assets/inglorious.jpg");
trainingday = loadImage("assets/trainingday.jpg");
rancid = loadImage("assets/rancid.jpg");

}

function draw() {
background(100);
image(inglorious, width/2, height/2, 200, 200);
image(trainingday, width/2, height/2-210, 200, 200);
image(rancid, width/2, height/2+210, 200, 200);
}
