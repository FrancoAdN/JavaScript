class Invander{
    constructor(x, y){
        this.body = createVector(x, y);
        this.r = 30;
    }
    show(){
        noStroke();
        fill(0);
        circle(this.body.x, this.body.y, this.r);
    }
}