class Obs{
    constructor(y){
        this.body = createVector(width/2, y);
        this.r = this.getRadius();
        this.angle = 0;
    }

    getRadius(){
        let n = random(1);
        if(n >= 0  && n < 0.25)
            return 100;
        else if(n >= 0.25 && n < 0.5)
            return 150;
        else if(n >= 0.5 && n < 0.75)
            return 200;
        else if(n >= 0.75 && n <= 1)
            return 250;
            
    }

    show(){

        translate(this.body.x, this.body.y);
        //rotate(this.angle * 0.0174533);
        applyMatrix(cos(this.angle), sin(this.angle), -sin(this.angle), cos(this.angle), 0, 0);
        noFill();
        strokeWeight(10);
        //CELESTE
        stroke('#1ae2f0');
        arc(0, 0, this.r, this.r, PI, PI + HALF_PI);
        //AMARILLO
        stroke('#f5df35');
        arc(0, 0, this.r, this.r, PI + HALF_PI, TWO_PI);
        //VIOLETA
        stroke('#9030fa');
        arc(0, 0, this.r, this.r, 0, HALF_PI);
        //ROSA
        stroke('#ff1e79');
        arc(0, 0, this.r, this.r, HALF_PI, PI);

        this.angle += 0.01;
        if(this.angle >= 360*PI/180)
            this.angle = 0;
        
        resetMatrix();
        
    }

    update(){
        this.body.y += 10;
    }

    crash(obj){
        let d = dist(obj.body.x, obj.body.y, this.body.x, this.body.y);
        if(d < this.r/2 && d > 50){
            let color;
            if(this.body.y < obj.body.y && this.body.y + this.r > obj.body.y){
                if(this.angle  >= 0*PI/180 && this.angle < 90*PI/180){
                    color = '#9030fa';
                }else if(this.angle >= 90*PI/180 && this.angle < 180*PI/180){
                    color = '#f5df35';
                }else if(this.angle >= 180*PI/180 && this.angle < 270*PI/180){
                    color = '#1ae2f0';
                }else if(this.angle >= 270*PI/180 && this.angle < 360*PI/180){
                    color = '#ff1e79';
                }
            }else{
                if(this.angle  >= 0*PI/180 && this.angle < 90*PI/180){
                    color = '#1ae2f0';
                }else if(this.angle >= 90*PI/180 && this.angle < 180*PI/180){
                    color = '#ff1e79';
                }else if(this.angle >= 180*PI/180 && this.angle < 270*PI/180){
                    color = '#9030fa';
                }else if(this.angle >= 270*PI/180 && this.angle < 360*PI/180){
                    color = '#f5df35';
                }
            }

            if(color != obj.color){
                obj.end();
            }
        }
    }
}




class Changer{
    constructor(y){
        this.body = createVector(width/2, y);
        this.color;
        this.r = 18;
        this.reach = false;
    }
    check(obj){
        if(dist(this.body.x, this.body.y, obj.body.x, obj.body.y) <= 2 * this.r){
            obj.color = obj.getColor();
            this.reach = true;
        }
            
    }
    update(){
        this.body.y += 10;
    }
    show(){
        this.color = ball.getColor();
        noStroke();
        fill(this.color);
        circle(this.body.x, this.body.y, this.r);
        
        
    }
}