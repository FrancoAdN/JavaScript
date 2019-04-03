let speed = 1;
let level = 1;

class Smove {
    constructor(){
        this.body = createVector(225, 225);
        this.score = 0;
    }

    show(){
        noStroke();
        fill(255, 0, 0);
        circle(this.body.x, this.body.y, radius);
    }

    eat(pos){
        if(dist(pos.x, pos.y, this.body.x, this.body.y) < 10)
            return true;
        
        return false;
    }

}

class Ball {
    constructor(){
        this.body = createVector(75, -200);
        this.speed = createVector(0, speed);
        this.getSideBall();
    }

    update(){
        this.body.x += this.speed.x;
        this.body.y += this.speed.y;
    }

    show(){
        noStroke();
        fill(0);
        circle(this.body.x, this.body.y, radius);
    }

    end(pos){
        if(dist(pos.x, pos.y, this.body.x, this.body.y) < 80){
            noLoop();
        }
    }

    getSideBall(){
        switch(floor(random(11))){
            case 0:
                this.body = createVector(75, -200);
                this.speed = createVector(0, speed);
                break;
            case 1:
                this.body = createVector(225, -200);
                this.speed = createVector(0, speed);
                break;
            case 2:
                this.body = createVector(375, -200);
                this.speed = createVector(0, speed);
                break;
            case 3:
                this.body = createVector(75, 800);
                this.speed = createVector(0, -speed);
                break;
            case 4:
                this.body = createVector(225, 800);
                this.speed = createVector(0, -speed);
                break;
            case 5:
                this.body = createVector(375, 800);
                this.speed = createVector(0, -speed);
                break;
            case 6:
                this.body = createVector(-200, 75);
                this.speed = createVector(speed, 0);
                break;
            case 7:
                this.body = createVector(-200, 225);
                this.speed = createVector(speed, 0);
                break;
            case 8:
                this.body = createVector(-200, 375);
                this.speed = createVector(speed, 0);
                break;
            case 9:
                this.body = createVector(800, 75);
                this.speed = createVector(-speed, 0);
                break;
            case 10:
                this.body = createVector(800, 225);
                this.speed = createVector(-speed, 0);
                break;
            case 11:
                this.body = createVector(800, 375);
                this.speed = createVector(-speed, 0);
                break;
        }
    }
}


function setLevelMode(a){
    let mode;
    let i, j;

    if(a <= 4)
        mode = a
    else
        mode = floor(random(3)) + 1;

    
    if(mode == 1){
        for(i = 0; i < balls.length; i++)
            balls.pop()
        balls.push(new Ball);
    }else if(mode == 2){
        console.log(mode);

        for(i = 0; i < balls.length; i++)
            balls.pop();
        for(i = 0; i < mode; i++)
            balls.push(new Ball);
        
        for(i = 1; i < balls.length; i++){
            for(j = 0; j < balls.length; j++){
                if(i != j){
                    while(balls[i].body == balls[j].body)
                        balls[i].getSideBall();
                }
            }
        }
        
            
    }else if(mode == 3){
        console.log(mode);

        for(i = 0; i < balls.length; i++)
            balls.pop();
        for(i = 0; i < mode; i++)
            balls.push(new Ball);

        for(i = 1; i < balls.length; i++){
            for(j = 0; j < balls.length; j++){
                if(i != j){
                    while(balls[i].body == balls[j].body)
                        balls[i].getSideBall();
                }
            }
        }

        if((balls[0].body.x == balls[1].body.x && balls[1].body.x == balls[2].x)){
            while(balls[0].body.y + balls[1].bodyy + balls[2].body.y == 675)
                balls[0].getSideBall();
        }else if((balls[0].body.y == balls[1].body.y && balls[1].body.y == balls[2].y)){
            while(balls[0].body.x + balls[1].body.x + balls[2].body.x == 675)
                balls[0].getSideBall();
        }

    }else{
        console.log(mode);

        for(i = 0; i < balls.length; i++)
            balls.pop();
        for(i = 0; i < mode; i++)
            balls.push(new Ball);

        for(i = 1; i < balls.length; i++){
            for(j = 0; j < balls.length; j++){
                if(i != j){
                    while(balls[i].body == balls[j].body)
                        balls[i].getSideBall();
                }
            }
        }
        if(balls[0].body.x == balls[1].body.x){
            if(balls[1].body.x == balls[2].body.x || balls[1].body.x == balls[3].body.x){
                while(balls[0].body.y+ balls[1].body.y + balls[2].body.y == 675|| balls[0].body.y + balls[1].body.y + balls[3].body.y == 675){
                    balls[0].getSideBall();
                }
            }
        }else if((balls[1].body.x == balls[2].body.x && balls[3].body.x == balls[2].x)){
            while(balls[1].body.y + balls[2].bodyy + balls[3].body.y == 675)
                balls[0].getSideBall();
        }

        if(balls[0].body.y == balls[1].body.y){
            if(balls[1].body.y == balls[2].body.y || balls[1].body.y == balls[3].body.y){
                while(balls[0].body.x + balls[1].body.x + balls[2].body.x == 675|| balls[0].body.x + balls[1].body.x + balls[3].body.x == 675){
                    balls[0].getSideBall();
                }
            }
        }else if((balls[0].body.y == balls[1].body.y && balls[1].body.y == balls[2].y)){
            while(balls[0].body.x + balls[1].body.x + balls[2].body.x == 675)
                balls[0].getSideBall();
        }


    }

}
//LEVELES

/*

    type 1 = 1 ball in map
    type 2 = 2 balls in map each other in differents sides 
    type 3 = 3 balls in map each other in differents sides and can`t be  growing up in the same 3 rows or colummns
    type 4 = 4 balls in map each other in differents sides and cant't be growing up in the same 3 rows or columns 

*/