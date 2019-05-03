
//create an empty array called balls
let balls = [];
let squares = [];

function setup() {
  createCanvas(800, 400);

}

function draw(){
	background(220);

//	draw all the balls in that array
	for (let i = 0; i < balls.length; i++) {
	      balls[i].drawBall();
        balls[i].moveBall();
	  }
for (let i = 0; i < squares.length; i++) {
    squares[i].drawSquare();
    squares[i].moveSquare();
}
}

// function keyPressed(){ //every time you push a key, make a new ball from the ball class and add it to the balls array

  function keyPressed() {
    if (keyCode === UP_ARROW) {
       let  b = new Ball(10, 10,"yellow");
       balls.push(b);
       console.log(balls);
    }
    else if (keyCode === DOWN_ARROW) {
      let  s = new Square(10,10,"green");
      squares.push(s);
      console.log(squares);
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
		    ellipse(this.x,this.y,this.x+10,this.y+10);
	}

	moveBall(){ //update the location of the ball, so it moves across the screen
		this.x = this.x+2;
		this.y = this.y+1;
	}


}
class Square {

	constructor(x,y,color){ //every ball needs an x value and a y value
		    this.x = x;
    		this.y = y;
        this.color = color
	}

	drawSquare(){  // draw a ball on the screen at x,y
    		stroke(0);
        fill(this.color);
		   rect(this.x,this.y,this.x+10,this.y+10);
	}

	moveSquare(){ //update the location of the ball, so it moves across the screen
		this.x = this.x+2;
		this.y = this.y+1;
	}


}
