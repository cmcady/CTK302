var f, f1;

function setup() {
createCanvas(800, 800);

f=loadFont("assets/a.ttf");
f1=loadFont("assets/ms.ttf");
textAlign(CENTER);
}

function draw() {
background(100);

textFont(f);
textSize(30);
text("Nothing is fucked? NOTHING IS FUCKED?!", width/2, height/2);

textFont(f1);
textSize(25);
text("THE GODDAMN PLANE HAS CRASHED INTO THE MOUNTAIN!!", width/2, height/2 + 100);

}
