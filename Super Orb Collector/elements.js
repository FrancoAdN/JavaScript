class Element {
    constructor(){
        this.type = this.getTypeElement();
        this.len = this.getLengthElement();
        this.body = this.getPositionElement();
    }

    getTypeElement(){
        let t;
        switch (floor(random(3))) {
            case 0:
                t = 'square';
                break;
            case 1:
                t = 'rect';
                break;
            case 2:
                t = 'circle';
                break;
        
        }
        return t;
    }


    getLengthElement(){
        let len;
        switch (floor(random(5))) {
            case 1:
                len = 100;
                break;
            case 2:
                len = 200
                break;
            case 3:
                len = 50;
                break;
            case 4:
                len = 75;
                break;
            case 5:
                len = 120;
                break;
            case 0:
                len = 300;
                break;
        
        }
        return len;
    }


    getPositionElement(){
        return createVector(floor(random(width - this.len)), floor(random(height - this.len)));
    }


    show(){
        stroke(255)
        fill(0);
        switch(this.type){
            case 'square':
                rect(this.body.x, this.body.y, this.len, this.len);
                break;
            case 'circle':
                circle(this.body.x, this.body.y, this.len/2);
                break;
            case 'rect':
                rect(this.body.x, this.body.y, this.len, this.len - 30);
                break;
        }
    }
}