let table;
const radius = 40;
let smove;
let balls = [];
let food;
let angle = 0;

function setup(){
    createCanvas(800, 800);
    angleMode(DEGREES);
    table = createVector(450, 450);
    smove = new Smove();
    setLevelMode(level);
    //balls.push(new Ball());
    foodLocation();
}

function draw(){
    background(220);


    textSize(46);
    noStroke();
    fill(255);
    text('SCORE ' + smove.score, 10, 50);

    textSize(36);
    text('LEVEL ' + level, 10, 100);


    translate(175, 175);
    showTable();
    smove.show();
    for(let i = 0; i < balls.length; i++){
        balls[i].update();
        balls[i].show();
        balls[i].end(smove.body);

        if(balls[i].body.x > 800 || balls[i].body.x < -800 || balls[i].body.y > 800 || balls[i].body.y < -800)
            balls[i].getSideBall();
    }

    translate(food.x, food.y);
    rotate(angle)
    if((smove.score % 10) != 9)
        fill(255, 255, 0);
    else
        fill(0, 255, 0);
    rectMode(CENTER);
    stroke(0);
    rect(0, 0, radius+10, radius+10);
    angle++;
    if(smove.eat(food)){
        smove.score++;
        if((smove.score % 10) == 0){
            level++;
            speed++;
            setLevelMode(level);
        }
        foodLocation();
    }
    rectMode(CORNER);


}

function foodLocation(){
    let x = floor(random(3) + 1);
    if(x == 1)
        x = 75;
    else if(x == 2)
        x = 225;
    else
        x = 375;

    let y = floor(random(3) + 1);
    if(y == 1)
        y = 75;
    else if(y == 2)
        y = 225;
    else
        y = 375;

    food = createVector(x, y);

}

function showTable(){
    fill(255);
    rect(0, 0, table.x, table.y, 100);
    for(let i = 1; i < 3; i++){
        stroke(0);
        line(0, i*150, 450, i*150);
        line(i*150, 0, i*150, 450);
    }
        
}

function keyPressed() {
    if(key === 'a' || keyCode === LEFT_ARROW) {
        if(smove.body.x - 150 > 0)
            smove.body.x -= 150;
    }else if (key === 'd' || keyCode === RIGHT_ARROW){
        if(smove.body.x + 150 < 450)
            smove.body.x += 150;
    }else if (key === 's' || keyCode === DOWN_ARROW){
        if(smove.body.y + 150 < 450)
            smove.body.y += 150;
    }else if (key === 'w' || keyCode === UP_ARROW){
        if(smove.body.y - 150 > 0)
            smove.body.y -= 150;
    }else if(key === 'n')
        foodLocation();

        
  
  }