
class Sw {
    constructor(){
        this.body = createVector(width/2, height - (height/4));
        this.color = this.switchColor();
        this.r = 15;
        this.gravity = 2.5;
        this.jValue = 75;
    }

    switchColor(){
        color = floor(random(4));
        if(color == 0)
            color = 'red'
        else if(color == 1)
            color = 'blue';
        else if(color == 2)
            color = 'yellow'
        else
            color = 'green';
        return color;
    }

    fall(){
        this.body.y += this.gravity;
    }

    show(){
        noStroke();
        fill(this.color);
        circle(this.body.x, this.body.y, this.r);
    }

    jump(){
        this.body.y -= this.jValue;
    }


}