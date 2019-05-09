// let colour = 144,238,14;
let waterpoint;
let growth;
function setup() {
  createCanvas(700, 600);
  background(0,100,3);
  fill(144,238,14);
  waterpoint = 0;
  growth = 0;
}


function draw(){

  // fill(colour);

  rect(290,290,20,20);
  text(waterpoint, 100, 200);

  if (waterpoint > 3){
    growth = 2;
    //fill(100,100,100);
  }
  if (waterpoint > 12){
    //fill(144,238,14);
    growth = 0;
  }
  
  if (growth > 1){
    fill(100,100,100);
  }
  else{
    fill(144,238,14);
  }
}


function keyPressed(){
    // if (keyCode === ENTER) {
      // colour = 60,179,113;
      waterpoint = waterpoint + 1;
      //fill(60,179,113);
      //rect(random(0,width),random(0,height),40);
    // }
    // else{
    //   //nothing.
    // }
}
