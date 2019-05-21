let level = localStorage.getItem("current_level");
let balls = [];
let waterpoint;
let growth;
let timer = 30;
let dead = false;
let seed;
let sprout;
let tinytree;
let smoltree;
let thictree;
let blossoms;
let apples;
let plantpic;
let mySound;

function preload() {
  seed = loadImage('Tree-1.png.png');
  sprout = loadImage('Tree-2.png.png');
  tinytree = loadImage('Tree-3.png.png');
  smoltree = loadImage('Tree-4.png.png');
  thictree = loadImage('Tree-5.png.png');
  blossoms = loadImage('Tree-6.png.png');
  apples = loadImage('Tree-7.png.png');
  deadtree = loadImage('Tree-9.png.png');
  plantit = loadImage('Tree-10.png.png');
  soundFormats('mp3','ogg');
  mySound = loadSound('relaxingmusic.mp3');
}

function setup() {
  localStorage.clear();
  createCanvas(900, 900);
  fill(144,238,14);
  waterpoint = 0;
  growth = 0;
  angleMode(DEGREES);
  mySound.setVolume(5);
  mySound.play();
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
if  (level == null){
  begin();
}
  else if (level == 1){
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
          image(seed,0,0,900,900);
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
                image(sprout, 0,0,900,900);
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
    else if(level == 2){
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
              image(sprout,0,0,900,900);
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
                    image(tinytree, 0,0,900,900);
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

  else if(level == 3){
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
    image(tinytree,0,0,900,900);
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
          image(smoltree, 0,0,900,900);
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
  else if(level == 4){
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
    image(smoltree,0,0,900,900);
    timer = timer-1;
      if (timer == 0){
        if (waterpoint>9 && waterpoint< 17){
          growth = true
        }
        else{
          growth = false;
        }
        if(growth == true){
          background(44,89,163);
          image(thictree, 0,0,900,900);
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

  else if(level == 5){
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
    image(thictree,0,0,900,900);
    timer = timer-1;
      if (timer == 0){
        if (waterpoint>11 && waterpoint< 15){
          growth = true
        }
        else{
          growth = false;
        }
        if(growth == true){
          background(44,89,163);
          image(blossoms, 0,0,900,900);
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

  else if(level == 6){
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
    image(blossoms,0,0,900,900);
    timer = timer-1;
      if (timer == 0){
        if (waterpoint>9 && waterpoint< 17){
          growth = true
        }
        else{
          growth = false;
        }
        if(growth == true){
          background(44,89,163);
          image(apple, 0,0,900,900);
          level --;
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
  else if(level == 7){
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
    image(apples,0,0,900,900);
    timer = timer-1;
      if (timer == 0){
        if (waterpoint>11 && waterpoint< 15){
          growth = true
        }
        else{
          growth = false;
        }
        if(growth == true){
          background(44,89,163);
          image(thictree, 0,0,900,900);
          // Store
          localStorage.setItem("current_level", level);
          location.reload();
          level = 5;
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





function life(){
  //image(plantpic, 20,20,400,400);
  textSize(12);
  fill("white");
  text('level'+ level, 785, 850);
  rect(698,167+400,184,38);
  rect(748,217+400,83,38);
  fill(44,89,163);
  text("amount you've watered your plant", 700, 180+400);
  text(waterpoint, 785, 200+400);
  text("time remaining",750,230+400);
  text(timer, 785,250+400);
}

function death(){
  background(44,89,163);
  textFont('Helvetica');
  textSize(20);
  fill(255,255,255);
  text("You died. Press enter to restart.", 350, 30);
  image(deadtree,0,0,900,900);
  //print("you died");
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

  if (keyCode === SHIFT){
    level= 1;
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

function begin() {
  background(222, 232, 249);
  textFont('Helvetica');
  textSize(20);
  fill(44,89,163);
  text('click shift to begin', 300, 185);
  text (' press the up arrow to water your plant', 220, 160);
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
  image(plantit,0,0,900,900);
}
