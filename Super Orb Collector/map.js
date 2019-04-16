class N1 {
    constructor(){
        this.food = [];
        this.rectangles = [];
        this.triangles = [];
        this.start;
        this.cWin;

        this.start = createVector(100 , 125);
        this.cWin = new Circle(this.start.x, this.start.y, 30, 255, true);

        for(let i = 0; i < 10; i++)
            this.food.push(new Circle(i * 60 + 230, 125, 5, 255, true));

        for(let i = 0; i < 4; i++){
            this.food.push(new Circle(900, i * 100 + 200, 5, 255, true));
            this.food.push(new Circle(825 - i * 200, 500, 5, 255, true));
            this.food.push(new Circle(125 + i * 200, 300, 5, 255, true));
        }
        this.rectangles.push(new Rect(1, 1, width-2, 50, 255));
        this.rectangles.push(new Rect(1, height-51, width-2, 50, 255));
        this.rectangles.push(new Rect(1, 51, 50, height - 102, 255));
        this.rectangles.push(new Rect(width - 51, 51, 50, height - 102, 255));
        //OBSTACLES OF MAP
        this.rectangles.push(new Rect(51, 200, 800, 50, 255));
        for(let i = 1; i < 5; i++)
            this.rectangles.push(new Rect(i * 200 + 1, 250, 50, 200, 255));

        for(let i = 1; i < 4; i++)
            this.rectangles.push(new Rect(i * 200 + 100, 349, 50, 200, 255));

        
        this.triangles.push(new Triangle(30, 0, 270, 180, 255, 200, 200, false, DEGREES));
        for(let i = 0; i < 9; i++)
            this.triangles.push(new Triangle(30, 270, 180, 0, 255, 60, 0, false, DEGREES));
            
        this.triangles.push(new Triangle(30, 90, 180, 0, 255, -540, -149, false, DEGREES));
        for(let i = 0; i < 9; i++)
            this.triangles.push(new Triangle(30, 90, 180, 0, 255, 60, 0, false, DEGREES));

        
    }


    show(){
        if(this.food.length == 0){
            this.cWin.show();
            if(orb.win(this.cWin.body)){
                console.log('WIN');
                noLoop();
            }
        }
    
        for(let i = 0; i < this.food.length; i++){
            this.food[i].show();
            if(orb.eat(this.food[i].body)){
                orb.score++;
                console.log(orb.score);
                this.food.splice(i, 1);
            }
        }
            
    
        for(let i = 0; i < this.rectangles.length; i++){
            this.rectangles[i].show();
            //orb.end(rectangles[i].body.x + (rectangles[i].b/2), rectangles[i].body.y + (rectangles[i].h/2), )
        }
            
    
        for(let i = 0; i < this.triangles.length; i++)
            this.triangles[i].show();
    }
}

class N2{
    constructor(){
        this.start;

        this.start = createVector(15 , 15);
        this.rectangles = [];
        this.food = [];
        

        for(let i = 1; i < 8; i++){
            this.rectangles.push(new Rect(i*100,0,10,500,255));
        }
        for(let i = 1; i < 8; i++){
            this.rectangles.push(new Rect(i *100+50,100,10,500,255));
        }

        for(let i = 1; i < 5; i++){
            this.rectangles.push(new Rect(850,i* 100+100,500,10,255));
        }
        for(let i = 1; i < 5; i++){
            this.rectangles.push(new Rect(750, i*100+50,100,10,255));
        }
        
        for(let i = 0; i < 6; i++)
            this.food.push(new Circle(i * 101 + 200, 550, 5, 255, true));

        for(let i = 0; i < 6; i++)
            this.food.push(new Circle(i * 100 + 155, 50, 5, 255, true));
        
        this.rectangles.push(new Rect(850,75,100,10,255));

        this.food.push(new Circle(900 , 40, 5, 255, true));
        this.food.push(new Circle(900 , 120, 5, 255, true));
        

    }

    show(){
        for(let i = 0; i < this.rectangles.length; i++)
            this.rectangles[i].show();

        for(let i = 0; i < this.food.length; i++)
            this.food[i].show();

    }
}