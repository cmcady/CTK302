let timer = 0;
let state = 0;
function setup() {
  createCanvas(500, 500);
textSize(32);
textAlign(CENTER);
rectMode(CENTER);
}

function draw() {

switch(state){

case 0:
background('red');
text("why did the chicke\n cross the road?", 250, 250, 350, 400);
// increment the timer variable
timer++
// if the timer var is greater than 200
if(timer > 5*60) { // or millis
// make it go to state 1
  state = 1;
  timer = 0;
}

break;


case 1:
background('blue');
text("to get to the other side", 250, 250, 350, 200);
break;

}

}
