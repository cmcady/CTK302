function setup() {
createCanvas(400, 400);
}

function draw() {
  background('blue');


    //sun
    fill('yellow');
    ellipse(335, 50, 90, 90);

    //clouds
    fill('white');
    noStroke();
    ellipse(12, 46, 50, 60);
    ellipse(36, 46, 50, 60);
    ellipse(60, 46, 50, 60);
    ellipse(82, 46, 50, 60);
    ellipse(106, 46, 50, 60);
    ellipse(130, 46, 50, 60);
    ellipse(154, 46, 50, 60);
    ellipse(178, 46, 50, 60);

    //middle cloud
    ellipse(178, 61, 60, 60);

    //bottom layer clouds
    ellipse(12, 76, 50, 60);
    ellipse(36, 76, 50, 60);
    ellipse(60, 76, 50, 60);
    ellipse(82, 76, 50, 60);
    ellipse(106, 76, 50, 60);
    ellipse(130, 76, 50, 60);
    ellipse(154, 76, 50, 60);
    ellipse(178, 76, 50, 60);

    fill('black')
      text('Chad Johnson is a weatherman who is possessed by Thor the God of Thunder. When he takes on his possessed form he can control lighting and can also control the time of day. He uses his powers against opposing weather stations.', 5, 20, 180, 120);

    //grass
    fill('green');
    rect(0, 380, 400, 20);

    //head
    fill('peachpuff');
    circle(225, width/2, 80, 80);

    //hair
    fill('black')
    ellipse(222, 165, 50, 16);

    //eyes
    fill('black');
    ellipse(210, 185, 12, 12);
    ellipse(235, 185, 12, 12);

    //nose
    triangle(222, 195, 217, 200, 227, 200);

    //mouth
    ellipse(222, 225, 25, 12);

    //neck
    fill('peachpuff');
    rect(212, 235, 20, 12 );

    //torso
    fill('white');
    rect(170, 247, 110, 90);

    fill('#000080');
    rect(170, 247, 35, 90);
    rect(245, 247, 35, 90);

    //tie
    rect(217, 247, 15, 60 );
    triangle(217, 307, 232, 307, 224, 315);



    //legs

    rect(190, 337, 20, 50);
    rect(240, 337, 20, 50);

    //arms
    rect(115, 260, 55, 20);
      rect( 280, 260, 55, 20);

    //hands
    fill('peachpuff');
    circle(330, 270, 25);
    circle(115, 270, 25);

    //feet
    fill('black');
    ellipse(192, 390, 40, 20);
    ellipse(258, 390, 40, 20);


    if(mouseIsPressed){

    background('#000080');

     //sun
    fill('white');
    ellipse(335, 50, 90, 90);

    //clouds
    fill('#A9A9A9');
    noStroke();
    ellipse(12, 46, 50, 60);
    ellipse(36, 46, 50, 60);
    ellipse(60, 46, 50, 60);
    ellipse(82, 46, 50, 60);
    ellipse(106, 46, 50, 60);
    ellipse(130, 46, 50, 60);
    ellipse(154, 46, 50, 60);
    ellipse(178, 46, 50, 60);

    //middle cloud
    ellipse(178, 61, 60, 60);

    //bottom layer clouds
    ellipse(12, 76, 50, 60);
    ellipse(36, 76, 50, 60);
    ellipse(60, 76, 50, 60);
    ellipse(82, 76, 50, 60);
    ellipse(106, 76, 50, 60);
    ellipse(130, 76, 50, 60);
    ellipse(154, 76, 50, 60);
    ellipse(178, 76, 50, 60);

    //grass
    fill('#006400');
    rect(0, 380, 400, 20);

    //head
    fill('peachpuff');
    circle(225, width/2, 80, 80);



    //eyes
    fill('white');
    ellipse(210, 185, 12, 12);
    ellipse(235, 185, 12, 12);

    //nose
      fill('black');
    triangle(222, 195, 217, 200, 227, 200);

    //mouth
    rect(210, 220, 25, 2);

    //neck
    fill('peachpuff');
    rect(212, 235, 20, 12 );

    //torso
    fill('white');
    rect(170, 247, 110, 90);

    fill('white');
    rect(170, 247, 35, 90);
    rect(245, 247, 35, 90);

    //tie
    rect(217, 247, 15, 60 );
    triangle(217, 307, 232, 307, 224, 315);



    //legs

    rect(190, 337, 20, 50);
    rect(240, 337, 20, 50);

    //arms
    rect(115, 260, 55, 20);
      rect( 280, 260, 55, 20);

    //hands
    fill('peachpuff');
    circle(330, 270, 25);
    circle(115, 270, 25);

    //feet
    fill('black');
    ellipse(192, 390, 40, 20);
    ellipse(258, 390, 40, 20);

    //lightning bolt
      fill('yellow');
      quad(46, 165, 141, 165, 119, 200, 24, 200);

    triangle(88, 165, 46, 165, 88, 100);
    triangle(88, 199, 119, 200, 85, 280);





    }










    print("debugger");

}
