// let colour = 144,238,14;
function setup() {
  createCanvas(700, 600);
  background(0,100,3);
  fill(144,238,14);
}

function draw(){

  // fill(colour);

  rect(290,290,20,20);
}

function keyPressed(){
    // if (keyCode === ENTER) {
      // colour = 60,179,113;
      fill(60,179,113);
      rect(random(0,width),random(0,height),40);
    // }
    // else{
    //   //nothing.
    // }
}
