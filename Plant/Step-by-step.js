let level = localStorage.getItem("current_level");
let balls = [];
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
let yes = 1;

function preload() {
  seed = loadImage('Tree-1.png.png');
  sprout = loadImage('Tree-2.png.png');
  tinytree = loadImage('Tree-3.png.png');
  smoltree = loadImage('Tree-4.png.png');
  thictree = loadImage('Tree-5.png.png');
  blossoms = loadImage('Tree-6.png.png');
  apples = loadImage('Tree-7.png.png');
  deadtree = loadImage('Tree-9.png.png');
}

function setup() {
  createCanvas(1000, 900);
  fill(144,238,14);
  waterpoint = 0;
  growth = 0;
  angleMode(DEGREES);
}

function wateringcan(){
  strokeWeight (10);
  noFill();
  bezier(154, 199, 0, 170, 3, 425, 79, 370);
  strokeWeight (0);
  push();
  translate(100, 100);
  rotate(25);
  fill("yellow");
  ellipse(150, 150, 200,300);
  rotate(300);
  rect(-55, 270, 300, 35,50,50);
  ellipse(240,290,50,60);
  pop();
}

function draw(){
//new simple structure
if(localStorage){
  if (level == null){
          if (frameCount % 60 == 0 && timer > 0) {
    //zach's stuff
          background(44,89,163);
          wateringcan();

            for (let i = 0; i < balls.length; i++) {
            balls[i].drawBall();
            balls[i].moveBall();
            print("thishasrun");
            }
          //julia's stuff
          life();
          image(seed,50,0,900,900);
            timer = timer-1;
            if (timer == 0){
              if (waterpoint>3 && waterpoint< 12){
                growth = true
              }
              else{
                growth = false;
              }
                if(growth == true){
                background(44,89,163);
                image(sprout, 50,0,900,900);
                level ++;
                // Store
                localStorage.setItem("current_level", level);
                location.reload();
                // continue?
                //seed.hide();
              }
                if(growth == false){
                  death();
                }
              }
            }
    }
    else if(level == 1){
        if (frameCount % 60 == 0 && timer > 0) {
              //zach's stuff
              background(44,89,163);
              wateringcan();
                  for (let i = 0; i < balls.length; i++) {
                      balls[i].drawBall();
                      balls[i].moveBall();
                      print("thishasrun");
                  }
              //julia's stuff
              life();
              image(sprout,50,0,900,900);
                timer = timer-1;
                if (timer == 0){
                    if (waterpoint>5 && waterpoint< 16){
                    growth = true
                  }
                else{
                    growth = false;
                }
                if(growth == true){
                    background(44,89,163);
                    image(tinytree, 50,0,900,900);
                    level ++;
                    localStorage.setItem("current_level", level);
                    location.reload();
                    // continue?
                    //seed.hide();
                  }
                    if(growth == false){
                      death();
                    }
                }
              }
  }

  else if(level == 2){
  if (timer==0){
    timer = 10;
    waterpoint = 0;
  }
  if (frameCount % 60 == 0 && timer > 0) {
    //zach's stuff
    background(44,89,163);
    wateringcan();

    for (let i = 0; i < balls.length; i++) {
        balls[i].drawBall();
        balls[i].moveBall();
        print("thishasrun");
      }
    //julia's stuff
    life();
    image(tinytree,50,0,900,900);
      timer = timer-1;
      if (timer == 0){
        if (waterpoint>8 && waterpoint< 16){
          growth = true
        }
        else{
          growth = false;
        }
          if(growth == true){
          background(44,89,163);
          image(smoltree, 50,0,900,900);
          level ++;
          // Store
          localStorage.setItem("current_level", level);
          location.reload();
          // continue?
          //seed.hide();
        }
          if(growth == false){
            death();
          }
      }
    }
  }
}

else{
     print("Sorry, your browser do not support local storage.");
 }
}




function life(){
  //image(plantpic, 20,20,400,400);
  fill("blue");
  //rect(290,290,20,20);
  text(waterpoint, 100, 200);
  text(timer, 100,250);
}

function death(){
  background(0,100,3);
  image(deadtree,50,0,900,900)
  text("you died", 100, 100);
  print("you died");
  localStorage.clear();
//  location.reload();
}

function keyPressed(){
  if (keyCode === ENTER){
  localStorage.clear();

  location.reload();
}

  if (keyCode === UP_ARROW) {
     let  b = new Ball(random(400,500), random(400,300),"lightblue");
     waterpoint = waterpoint +1;
     balls.push(b);
     console.log(balls);
  }
  return false; //
}

class Ball {

	constructor(x,y,color){ //every ball needs an x value and a y value
		    this.x = x;
    		this.y = y;
        this.color = color
	}

	drawBall(){  // draw a ball on the screen at x,y
        stroke(0);
        fill(this.color);
        bezier(this.x+31, this.y-27, this.x+68, this.y+88, this.x-12, this.y+91, this.x+31, this.y-28);
        fill(0);
        text('+1', this.x+25, this.y-40);
	}

	moveBall(){ //update the location of the ball, so it moves across the screen
		this.x = this.x;
		this.y = this.y+145;
    // if (this.y > 450) {
    //    this.y = -20
    // }
	}
}






//function timer(){
// something.
//}

// function seed2sprout(){
//   //plantpic = seed;
// if (dead == false){
//     //print(plantpic);
//     background(0,100,3);
//     life();
//     if(growth<1){
//       image(seed, 20,20,400,400);
//     }
//     if (waterpoint > 3){
//       growth = true;
//       image(seed, 20,20,400,400);
//       //fill(100,100,100);
//     }
//     if (waterpoint > 12){
//       //fill(144,238,14);
//       growth = false;
//     }
//
//     if (frameCount % 60 == 0 && timer > 0) {
//     timer = timer-1;
//     if (timer == 0){
//
//       if(growth == true){
//       //image(sprout, 20,20,400,400);
//       fill(100,100,100);
//       print("it worked?");
//       rect(0,0,1000,1000);
//       image(sprout, 20,20,400,400);
//     }
//     else {
//       fill(30,50,210);
//       dead = true;
//     }
//     }
//     }
//   }
// if (dead == true){
//     death();
//   }
// }
//
// function sprout2tinytree(){
//   if (dead == false){
//     life();
//   }
//   if (dead == true){
//     death();
//   }
//    // fill(colour);
//    if (waterpoint > 7){
//      growth = true;
//      //fill(100,100,100);
//    }
//    if (waterpoint > 18){
//      //fill(144,238,14);
//      growth = false;
//    }
//
//  if (frameCount % 60 == 0 && timer > 0) {
//    timer = timer-1;
//    if (timer == 0){
//
//      if(growth = true){
//      fill(100,100,100);
//    }
//    else {
//      fill(30,50, 210);
//      dead = true;
//    }
// }
// }
// }
//
// function tinytree2smoltree(){
//   if (dead == false){
//     life();
//   }
//   if (dead == true){
//     death();
//   }
//    // fill(colour);
//    if (waterpoint > 7){
//      growth = 2;
//      //fill(100,100,100);
//    }
//    if (waterpoint > 18){
//      //fill(144,238,14);
//      growth = 0;
//    }
//
//  if (frameCount % 60 == 0 && timer > 0) {
//    timer = timer-1;
//    if (timer == 0){
//
//      if(growth > 1){
//      fill(100,100,100);
//
//    }
//    else {
//      fill(30,50, 210);
//      dead = true;
// }
// }
// }
// }
//
// function smoltree2thictree(){
//   if (dead == false){
//     life();
//   }
//   if (dead == true){
//     death();
//   }
//    // fill(colour);
//    if (waterpoint > 10){
//      growth = 2;
//      //fill(100,100,100);
//    }
//    if (waterpoint > 14){
//      //fill(144,238,14);
//      growth = 0;
//    }
//
//  if (frameCount % 60 == 0 && timer > 0) {
//    timer = timer-1;
//    if (timer == 0){
//
//      if(growth > 1){
//      fill(100,100,100);
//    }
//    else {
//      fill(30,50, 210);
//      dead = true;
// }
// }
// }
// }
//
// function thictree2blossoms(){
//   if (dead == false){
//     life();
//   }
//   if (dead == true){
//     death();
//   }
//    // fill(colour);
//    if (waterpoint > 12){
//      growth = 2;
//      //fill(100,100,100);
//    }
//    if (waterpoint > 16){
//      //fill(144,238,14);
//      growth = 0;
//    }
//
//  if (frameCount % 60 == 0 && timer > 0) {
//    timer = timer-1;
//    if (timer == 0){
//
//      if(growth > 1){
//      fill(100,100,100);
//    }
//    else {
//      fill(30,50, 210);
//      dead = true;
// }
// }
// }
// }
//
//
// function blossoms2fruit(){
//   if (dead == false){
//     life();
//   }
//   if (dead == true){
//     death();
//   }
//    // fill(colour);
//    if (waterpoint > 10){
//      growth = 2;
//      //fill(100,100,100);
//    }
//    if (waterpoint > 12){
//      //fill(144,238,14);
//      growth = 0;
//    }
//
//  if (frameCount % 60 == 0 && timer > 0) {
//    timer = timer-1;
//    if (timer == 0){
//
//      if(growth > 1){
//      fill(100,100,100);
//    }
//    else {
//      fill(30,50, 210);
//      dead = true;
// }
// }}}
//
// function fruit2normal(){
//   if (dead == false){
//     life();
//   }
//   if (dead == true){
//     death();
//   }
//    // fill(colour);
//    if (waterpoint > 10){
//      growth = 2;
//      //fill(100,100,100);
//    }
//    if (waterpoint > 17){
//      //fill(144,238,14);
//      growth = 0;
//    }
//
//  if (frameCount % 60 == 0 && timer > 0) {
//    timer = timer-1;
//    if (timer == 0){
//
//      if(growth > 1){
//      fill(100,100,100);
//    }
//    else {
//      fill(30,50, 210);
//      dead = true;
// }
// }}}
