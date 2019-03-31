let width = 600;
let height = 600;
let s = new Snake(10,10)

let scl = 20;

let speed = {
  x:0,y:0
};

let food = {
  x: Math.floor(Math.random()*width),
  y: Math.floor(Math.random()*height)
}


function setup(){
  createCanvas(600, 600);
}

function draw(){
  background(51);


  update();
  if(dist(s.x, s.y, food.x, food.y) < 10){
    s.score++;
    eat();
    console.log(s.score);
    food.x = Math.floor(Math.random()*width);
    food.y = Math.floor(Math.random()*height);
  }


  fill(255);
  rect(s.x, s.y, scl, scl);
  fill('red');
  rect(food.x, food.y, scl, scl);

  
}



function keyPressed() {
  if (keyCode === UP_ARROW) {
    speed.x = 0;
    speed.y = -1;
  } else if (keyCode === DOWN_ARROW) {
    speed.x = 0;
    speed.y = 1;
  } else if (keyCode === RIGHT_ARROW) {
    speed.x = 1;
    speed.y = 0;
  } else if (keyCode === LEFT_ARROW) {
    speed.x = -1;
    speed.y = 0;
  }
}