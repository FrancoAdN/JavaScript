class Rect{
    constructor(x, y, b, h, c){
        this.body = createVector(x, y);
        this.b = b;
        this.h = h;
        this.color = c;
    } 
    show(){
        noStroke();
        fill(this.color);
        rect(this.body.x, this.body.y, this.b, this.h);
    }
}

class Circle{
    constructor(x, y, r, c, s){
        this.body = createVector(x, y);
        this.r = r;
        this.color = c;
        this.shadow = s;
    }

    show(){
        noStroke();
        fill(this.color);
        if(this.shadow){
            drawingContext.shadowBlur = 30;
            drawingContext.shadowColor = 'white';
            circle(this.body.x, this.body.y, this.r);
            drawingContext.shadowBlur = 0;
        }else
            circle(this.body.x, this.body.y, this.r);
        
    }
}

class Triangle{
    constructor(r, a1, a2, a3, c, x, y, rotate, mode){
        this.color = c;
        this.r = r;
        this.a1 = a1;
        this.a2 = a2;
        this.a3 = a3;
        this.x = x;
        this.y = y;
        this.rotate = rotate;
        this.mode = mode
    }

    show(){
        angleMode(this.mode);
        noStroke();
        translate(this.x, this.y);
        // drawingContext.shadowBlur = 40;
        // drawingContext.shadowColor = 'white';
        fill(this.color);
        beginShape();
        vertex(this.r * cos(this.a1), this.r * sin(this.a1));
        vertex(this.r * cos(this.a2), this.r * sin(this.a2));
        vertex(this.r * cos(this.a3), this.r * sin(this.a3));
        endShape(CLOSE);


        if(this.rotate){
            this.a1 += 0.01;
            this.a2 += 0.01;
            this.a3 += 0.01;
        }
        // drawingContext.shadowBlur = 0;


        translate(0, 0);
    }
}