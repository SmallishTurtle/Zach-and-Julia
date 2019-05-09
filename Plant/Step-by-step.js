// let colour = 144,238,14;
let waterpoint;
let growth;
let timer = 10;
let dead = false;
function setup() {
  createCanvas(700, 600);

  fill(144,238,14);
  waterpoint = 0;
  growth = 0;
}


function draw(){
 if (dead == false){
   life();
 }
 if (dead == true){
   death();
 }
  // fill(colour);
  if (waterpoint > 3){
    growth = 2;
    //fill(100,100,100);
  }
  if (waterpoint > 12){
    //fill(144,238,14);
    growth = 0;
  }

if (frameCount % 60 == 0 && timer > 0) {
  timer = timer-1;
  if (timer == 0){

    if(growth > 1){
    fill(100,100,100);
  }
  else {
    fill(30,50, 210);
    dead = true;
  }
}
}
}

function life(){
  background(0,100,3);
  rect(290,290,20,20);
  text(waterpoint, 100, 200);
  text(timer, 100,250);
}

function death(){
  background(0,100,3);
  text("you died", 100, 100);
  print("you died");
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