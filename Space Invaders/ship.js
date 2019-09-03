class Ship{
    constructor(){
        this.len = createVector(80, 40);
        this.body = createVector(width/2 - this.len.x/2, height - this.len.y - 10);
    }

    show(){
        noStroke();
        fill(0);
        rect(this.body.x, this.body.y, this.len.x, this.len.y);
    }
}

class Shot{
    constructor(x, y, s, c){
        this.body = createVector(x, y);
        this.speed = s;
        this.color = c;
    }
    show(){
        strokeWeight(10);
        stroke(this.color);
        point(this.body.x, this.body.y);
    }
    update(){
        this.body.y += this.speed;
    }
    coll(obj){
        
        if(dist(obj.x, obj.y, this.body.x, this.body.y) < 30)
            return true;
        else 
            return false;
    }
}