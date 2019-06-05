class Ball{
    constructor(){
        this.body = createVector(width / 2, 550);
        this.grav = 0.6;
        this.lift = -15;
        this.v = 0;
        this.r = 10;
        this.color = this.getColor();
    }

    getColor(){
        let n = floor(random(4));
        let c;
        if(n == 0)
            c = '#9030fa';
        else if(n == 1)
            c = '#f5df35';
        else  if(n == 2)
            c = '#1ae2f0'
        else  if(n == 3)
            c = '#ff1e79';
        return c;
    }

    show(){
        noStroke();
        fill(this.color);
        circle(this.body.x, this.body.y, this.r);
    }

    update(){
        this.v += this.grav;
        this.v *= 0.9;
        this.body.y += this.v;

        if(this.body.y > height){
            this.body.y = height;
            this.v = 0;
        }
        if(this.body.y < 0){
            this.body.y = 0;
            this.v = 0;
        }
    }

    up(){
        this.v += this.lift;

    }

    


    end(){
        noLoop();
        //background(255, 0, 0);
    }
}