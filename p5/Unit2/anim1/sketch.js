var x= 0;

function setup() {
  createCanvas(500, 500);
}

function draw() {
background(100);
textSize(60);
text("Est. 2001", x, height/2,) ;

x = x+5;

if (x >= width ) {

x=0;

}


}
