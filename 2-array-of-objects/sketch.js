
//create an empty array called balls
let balls = [];
let waterpoint;
let mySound;

function preload() {
  soundFormats('mp3','ogg');
  mySound = loadSound('relaxingmusic.mp3');
}


function setup() {
  createCanvas(800, 600);
   angleMode(DEGREES);
   mySound.setVolume(5);
   mySound.play();
}

function draw(){
background(220);
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



	for (let i = 0; i < balls.length; i++) {
      balls[i].drawBall();
	    balls[i].moveBall();
      print("thishasrubn");
    }




}
// function keyPressed(){ //every time you push a key, make a new ball from the ball class and add it to the balls array

  function keyPressed() {
    if (keyCode === UP_ARROW) {
       let  b = new Ball(random(400,500), random(400,300),"lightblue");
       waterpoint = waterpoint +1;
       balls.push(b);
       console.log(balls);
    }
    return false; // prevent default hiiii
  }

//ball class from which to create new balls with similar properties.
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
		this.y = this.y+5;
    // if (this.y > 450) {
    //    this.y = -20
    // }
	}
}
