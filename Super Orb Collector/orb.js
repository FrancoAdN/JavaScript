class Orb {
    constructor(x, y){
        this.body = createVector(x, y);
        this.radius = 10;
        this.change = false;
    }

    show(){
        fill(255);
        noStroke();
        circle(this.body.x, this.body.y, this.radius);
    }

    changePos(x, y){
        this.body.x = x;
        this.body.y = y;
    }
}