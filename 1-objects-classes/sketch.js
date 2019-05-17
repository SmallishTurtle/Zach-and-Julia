//create a variable to hold one ball
let b;
let anotherBall;

function setup() {
  createCanvas(800, 400);
}


function draw(){
  background(222, 232, 249);
  textFont('Helvetica');
  textSize(20);
  text('click space bar to begin', 300, 185);
  textSize(15);
  text ('Warning: clicking enter deletes all progress', 100, 240);
  textSize(15);
  text('Note: to successfully water your plant, follow these intervals below to', 100, 275);
    text('enter the correct number of water drops per level', 140, 300);
  text('Level 1: 3 < x < 12     Level 2: 5 < x < 16     Level 3: 8 < x < 16', 100,330);
  text('Level 4: 9 < x < 17     Level 5: 11 < x < 15 (and beyond)', 100, 360);
  textFont('Helvetica');
  textSize(40);
  textStyle(ITALIC);
  text('Welcome to Tree Simulator', 150, 100);
}
