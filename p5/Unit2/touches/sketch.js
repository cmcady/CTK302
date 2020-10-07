let numberOfTouches;
var img1, img2, img3;
let state = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);

  img1 = loadImage("assets/forrest.jpg");
  img2 = loadImage("assets/godfather.jpg");
  img3 = loadImage("assets/fightclub.jpg");
  imagMode(CENTER);
}

function draw() {
clear();
numberOfTouches = touches.length; //automatically available to us
text(numberOfTouches + 'touches', 5, 10);

switch(numberOfTouches) {
  case 0:
  text("no one is touching the screen", 5, 22);
  break;

  case 1:
  text("life is like a box of chocolates", 5, 22);
  //put a picture here
image(img1, width/2, height/2, 200, 200);
  break;

  case 2:
  text("Really Man? On my daughters wedding day?", 5, 22);
  //put a picture here
  image(img2, width/2, height/2, 200, 200);
  break;

  case 3:
  text("Screw societal possesions, lets blow some shit up", 5, 22);
  //put a picture here
  image(img3, width/2, height/2, 200, 200);
  break;
}
}
