let cars = [];
let f1, f2, f3 ;
let bg ;
let wg ;
let lg ;
let ig ;
let pg ;
let fonts = [] ;
let maxCars = 5 ;
let frogPos ;
let state = 0 ;
let timer = 0;

function setup() {
  createCanvas(600, 600);
  frogPos = createVector(width/2, height - 80);
textAlign(CENTER) ;
rectMode(CENTER) ;

f1 = loadFont("assets/simplicity.ttf");
f2 = loadFont("assets/starkey.ttf");
f3 = loadFont("assets/twinkle.ttf");

bg = loadImage("assets/daynite.jpg");
wg = loadImage("assets/sunny.jpg");
lg = loadImage("assets/moon.jpg");
ig = loadImage("assets/sunpiece.jpg");
pg = loadImage("assets/moonpiece.jpg");


fonts = [f1, f2, f3] ;
  // Spawn objects
  for (let i = 0; i < maxCars; i++) {
    cars.push(new Car());
  }
}

function draw() {
switch(state) {
case 0:
image(bg, 0, 0, width, height) ;
textSize(28) ;

text("Sun time is fun time! Collect Suns for daylight!", width/2, 30);

break;

case 1:
game() ;
timer++;
if (timer > 10*60){
  state = 3;
}
break;

case 2:
image(wg, 0, 0, width, height) ;
text("THE DAYLIGHT IS TOO SWEET!", width/2, height/2);
break;

case 3:
image(lg, 0, 0, width, height) ;
textSize(30);
text("Sorry M8 the sun still hasn't come up", width/2, height/2) ;
break;


}

}

function game() {
  //background(100);

  image(bg, 0, 0, width, height) ;

  // display and move objects
  for (let i = 0; i < cars.length; i++) {
    cars[i].display();
    cars[i].move();
    if (cars[i].pos.dist(frogPos) < 50) {
      cars.splice(i, 1) ;
    }
  }

if (cars.length == 0){
  state = 2 ;
}
//frog
 //fill('green') ;
 //ellipse(frogPos.x, frogPos.y, 50, 50) ;
 image(pg, frogPos.x, frogPos.y, 50, 50) ;
// image(ig, frogPos.x, frogPos.y, 40, 40) ;

 checkForKeys() ;


}

function resetTheGame(){
  cars = [];
  for (let i = 0; i < maxCars; i++) {
    cars.push(new Car());
  }
  timer = 0;
}
function checkForKeys() {
  if(keyIsDown(LEFT_ARROW)) frogPos.x = frogPos.x -=5;
  if (keyIsDown(RIGHT_ARROW)) frogPos.x += 5;
  if (keyIsDown(UP_ARROW)) frogPos.y -= 5;
  if (keyIsDown(DOWN_ARROW)) frogPos.y +=5;

}

function mouseReleased() {
  switch(state){
    case 0:
    state = 1;
    break ;

    case 2: //they won
resetTheGame();
    state = 0;
    break;

    case 3: //they LOST
resetTheGame();
    state = 0;
    break;
  }
}

// Car class
class Car {

  // constructor and attributes
  constructor() {
    this.pos = createVector(100, 100);
    this.vel = createVector(random(-8, 8), random(-8, 8));
    this.size = random(40, 80);
    this.c = color(random(200, 255), random(50), random(50)) ;

let b = floor(random(3));

this.font = fonts[b] ;
  }

  // methods

  display() {
    //rect(this.pos.x, this.pos.y, 50, 25);
// fill(this.c) ;
// textFont(this.font) ;
//     textSize(this.size);
//     text("word", this.pos.x, this.pos.y);
    image(ig,this.pos.x, this.pos.y, 40, 40) ;
    //image command (use this later instead of words)
    //image(name, this.pos.x, this.pos.y) ;
  }


  move() {
    this.pos.add(this.vel);
    if (this.pos.x > width) this.pos.x = 0;
    if (this.pos.x < 0) this.pos.x = width;
    if (this.pos.y > height) this.pos.y = 0;
    if (this.pos.y < 0) this.pos.y = height;

  }

}
