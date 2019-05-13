
let waterpoint;
let growth;
let timer = 10;
let dead = false;
let seed;
let sprout;
let tinytree;
let smoltree;
let thictree;
let blossoms;
let apples;
let plantpic;

function preload() {
  seed = loadImage('Tree-1.png.png');
  sprout = loadImage('Tree-2.png.png');
  tinytree = loadImage('Tree-3.png.png');
  smoltree = loadImage('Tree-4.png.png');
  thictree = loadImage('Tree-5.png.png');
  blossoms = loadImage('Tree-6.png.png');
  apples = loadImage('Tree-7.png.png');
}

function setup() {
  createCanvas(700, 600);
  background(0,100,3);
  fill(144,238,14);
  waterpoint = 0;
  growth = 0;
}


function draw(){
//new simple structure
  if (frameCount % 60 == 0 && timer > 0) {
    background(0,100,3);
    life();
    image(seed,20,20,300,300);
      timer = timer-1;
      if (timer == 0){
        if (waterpoint>3 && waterpoint< 12){
          growth = true
        }
        else{
          growth = false;
        }
          if(growth == true){
          image(sprout, 20,20,300,300);
          //seed.hide();
        }
          if(growth == false){
            death();
          }
      }
  }



//seed2sprout();

//sprout2tinytree();

//tinytree2smoltree();

//smoltree2thictree();

//thictree2blossoms();

//blossoms2fruit();

//fruit2normal();

}

function life(){
  //image(plantpic, 20,20,400,400);
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
      waterpoint = waterpoint + 1;
}

//function timer(){
// something.
//}

function seed2sprout(){
  //plantpic = seed;
if (dead == false){
    //print(plantpic);
    background(0,100,3);
    life();
    if(growth<1){
      image(seed, 20,20,400,400);
    }
    if (waterpoint > 3){
      growth = true;
      image(seed, 20,20,400,400);
      //fill(100,100,100);
    }
    if (waterpoint > 12){
      //fill(144,238,14);
      growth = false;
    }

    if (frameCount % 60 == 0 && timer > 0) {
    timer = timer-1;
    if (timer == 0){

      if(growth > true){
      //image(sprout, 20,20,400,400);
      fill(100,100,100);
      print("it worked?");
      image(sprout, 20,20,400,400);
    }
    else {
      fill(30,50,210);
      dead = true;
    }
    }
    }
  }
if (dead == true){
    death();
  }
}

function sprout2tinytree(){
  if (dead == false){
    life();
  }
  if (dead == true){
    death();
  }
   // fill(colour);
   if (waterpoint > 7){
     growth = true;
     //fill(100,100,100);
   }
   if (waterpoint > 18){
     //fill(144,238,14);
     growth = false;
   }

 if (frameCount % 60 == 0 && timer > 0) {
   timer = timer-1;
   if (timer == 0){

     if(growth = true){
     fill(100,100,100);
   }
   else {
     fill(30,50, 210);
     dead = true;
   }
}
}
}

function tinytree2smoltree(){
  if (dead == false){
    life();
  }
  if (dead == true){
    death();
  }
   // fill(colour);
   if (waterpoint > 7){
     growth = 2;
     //fill(100,100,100);
   }
   if (waterpoint > 18){
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

function smoltree2thictree(){
  if (dead == false){
    life();
  }
  if (dead == true){
    death();
  }
   // fill(colour);
   if (waterpoint > 10){
     growth = 2;
     //fill(100,100,100);
   }
   if (waterpoint > 14){
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

function thictree2blossoms(){
  if (dead == false){
    life();
  }
  if (dead == true){
    death();
  }
   // fill(colour);
   if (waterpoint > 12){
     growth = 2;
     //fill(100,100,100);
   }
   if (waterpoint > 16){
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


function blossoms2fruit(){
  if (dead == false){
    life();
  }
  if (dead == true){
    death();
  }
   // fill(colour);
   if (waterpoint > 10){
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
}}}

function fruit2normal(){
  if (dead == false){
    life();
  }
  if (dead == true){
    death();
  }
   // fill(colour);
   if (waterpoint > 10){
     growth = 2;
     //fill(100,100,100);
   }
   if (waterpoint > 17){
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
}}}
