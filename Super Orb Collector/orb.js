class Orb {
    constructor(x, y){
        this.body = createVector(x, y);
        this.radius = 10;
        this.change = false;
        this.score = 0;
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

    eat(pos){
        if(dist(pos.x, pos.y, this.body.x, this.body.y) < 15)
            return true;
        
        return false;
    }

    end(x, y, r){        
        if(dist(x, y, this.body.x, this.body.y) < r)
            noLoop();
    }

    win(pos){
        if(dist(pos.x, pos.y, this.body.x, this.body.y) < 40)
            return true;
        
        return false;
    }
}