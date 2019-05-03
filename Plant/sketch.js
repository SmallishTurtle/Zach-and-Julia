//create an empty array called balls
let balls = [];
let wizard;
let point;
let mySound;
let seed;
let seedDied = false;
let waterpoint;
let seedgrowth1;
let seedgrowth1 = false;
let seedgrowth = true;

//create a variable to hold your avatar
let me;

function preload() {
  wizard = loadImage('mrWizard.png');
  seed = loadImage('Seed11.png')
  soundFormats('mp3', 'ogg');
  mySound = loadSound('sound.mp3');  //seed = loadImage('Seed11.png');
}

function setup() {
  point=0;
  createCanvas(500, 400);
   //make one avatar called me
  me = new Avatar(width/2, 300, 3);

}


function draw(){
	background(173, 216, 230);
  if (seedDied==false){
    stroke(2);
    fill("white")
    rect(26,18,33,20);
    fill("black");
    text(point, 30,30);  //make
    me.drawMe();
    me.moveMe();
    image(seed, 250, 300, 10,20);
    //line(85,120,85,240);
    //image(seed, 0, 200);

    if (frameCount % 40 == 0) {
        let  b = new Ball(width, random(0,height), -3);
        balls.push(b);
        console.log(balls); //print the balls array to the console
      }

  //	draw all the balls in that array
    for (let i = 0; i < balls.length; i++) {
            balls[i].drawBall();
            balls[i].moveBall();
            balls[i].bounceBall();
      }

  }

  else if(seedDied == true){
    me.die();
  }


}

plant() {
if (seedgrowth = true){
  seed();
}
else {
  //nothing.
}
  seed(){
    image(seed, 250, 300, 10,20);
  }
  growth1(){
    if (waterpoint > 3) {
      seedgrowth1 = true;
      seedgrowth = false;
    }
    if (waterpoint > 12) {
      seedgrowth1 = false;
      // wait ten seconds??
      die();
    }

  }
}
//avatar class
class Avatar {

	constructor(x,y, speed){ //every avatar needs an x value, a y value, and a speed
		    this.x = x;
    		this.y = y;
        this.speed = speed;
	}

	drawMe(){  // draw the running person
        image(wizard, this.x-75, this.y-20, 75, 75);
        // stroke("green");
        // strokeWeight(3);
    		// fill("blue");
		    // ellipse(this.x,this.y,20,20);
        // line(this.x,this.y, this.x, this.y+40);
        // line(this.x, this.y+40, this.x-20, this.y+60);
        // line(this.x, this.y+40, this.x+10, this.y+50);
        // line(this.x+10, this.y+50, this.x+5, this.y+60);
        // line(this.x, this.y+15, this.x-10, this.y+25);
        // line(this.x-10, this.y+25, this.x+10, this.y+35);
	}

	moveMe(){
    if (keyIsDown(UP_ARROW)) { //if you hold the up arrow, move up by speed
       this.y -= this.speed;
    }

    if (keyIsDown(DOWN_ARROW)) { // if you hold the down arrow, move down by speed
        this.y += this.speed;
    }
	}



}


//ball class from which to create new balls with similar properties.
class Ball {

	//every ball needs an x value, a y value, and a speed
	constructor(x,y, speed){
		this.x = x;
    this.y = y;
    this.speed = speed;
	}

	// draw a ball on the screen at x,y
	drawBall(){
      let a = random(255);
      let b = random(255);
      let c = random(255);
    	stroke(0);
      strokeWeight(1);
    	fill(a, b, c);
		  ellipse(this.x,this.y,10,10);
	}

	//update the location of the ball, so it moves across the screen
	moveBall(){
		this.x = this.x+ this.speed;
		this.y = this.y+.5;
	}

	//if the ball hits the person, change the speed value to negative (send it in the opposite direction)
  	bounceBall(){
    		if (this.x >= me.x-1 && this.x <= me.x+1 && this.y > me.y-50 && this.y < me.y+50){
            stroke("yellow");
            strokeWeight(10);
            line(this.x,this.y-10, this.x, this.y+10);
            this.speed = -this.speed;
            point=point+1
            mySound.setVolume(0.1);
            mySound.play();
    		}
        if(this.x>= 84 && this.x<= 86 && this.y > 120 && this.y < 240){

          seedDied = true;
        }

  	}
}

die(){
  background("black");
  stroke("red");
  fill("red");
  text("the seed died",100, 200);
  text("you got "+point+" points", 100, 220);
}
