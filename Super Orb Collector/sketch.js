let orb;
let food = [];
let rectangles = [];
let triangles = [];
let start;
let cWin;



function setup(){
    createCanvas(1000, 600);
    start = createVector(100 , 125)

    orb = new Orb(start.x, start.y); 
    cWin = new Circle(start.x, start.y, 30, 255, true);

    //FOOD
    for(let i = 0; i < 10; i++)
        food.push(new Circle(i * 60 + 230, 125, 5, 255, true));

    for(let i = 0; i < 4; i++){
        food.push(new Circle(900, i * 100 + 200, 5, 255, true));
        food.push(new Circle(825 - i * 200, 500, 5, 255, true));
        food.push(new Circle(125 + i * 200, 300, 5, 255, true));
    }


    //RECTANGLES
    //EDGES
    rectangles.push(new Rect(1, 1, width-2, 50, 255));
    rectangles.push(new Rect(1, height-51, width-2, 50, 255));
    rectangles.push(new Rect(1, 51, 50, height - 102, 255));
    rectangles.push(new Rect(width - 51, 51, 50, height - 102, 255));
    //OBSTACLES OF MAP
    rectangles.push(new Rect(51, 200, 800, 50, 255));
    for(let i = 1; i < 5; i++)
        rectangles.push(new Rect(i * 200 + 1, 250, 50, 200, 255));

    for(let i = 1; i < 4; i++)
        rectangles.push(new Rect(i * 200 + 100, 349, 50, 200, 255));


    //TRIANGLES
    //for(let i = 0; i < 5; i++)
    triangles.push(new Triangle(30, 0, 270, 180, 255, 200, 200, false, DEGREES));
    for(let i = 0; i < 9; i++)
        triangles.push(new Triangle(30, 270, 180, 0, 255, 60, 0, false, DEGREES));
    
    triangles.push(new Triangle(30, 90, 180, 0, 255, -540, -149, false, DEGREES));
    for(let i = 0; i < 9; i++)
        triangles.push(new Triangle(30, 90, 180, 0, 255, 60, 0, false, DEGREES));
    
    
    

    // c = new Circle(400, 100, 50, 255);
    // t = new Triangle(100, 0, 90, 180, 255, width/2, height/2, true);
}

function draw(){
    translate(0, 0);
    background(0);
    
    orb.show();

    if(food.length == 0){
        cWin.show();
        if(orb.win(cWin.body)){
            console.log('WIN');
            noLoop();
        }
    }

    for(let i = 0; i < food.length; i++){
        food[i].show();
        if(orb.eat(food[i].body)){
            orb.score++;
            console.log(orb.score);
            food.splice(i, 1);
        }
    }
        

    for(let i = 0; i < rectangles.length; i++){
        rectangles[i].show();
        //orb.end(rectangles[i].body.x + (rectangles[i].b/2), rectangles[i].body.y + (rectangles[i].h/2), )
    }
        

    for(let i = 0; i < triangles.length; i++)
        triangles[i].show();
    
    if(orb.change)
        orb.changePos(mouseX, mouseY);

    

}

function mousePressed(){
    
    
    if((mouseX > orb.body.x - orb.radius && mouseX < orb.body.x + orb.radius) && (mouseY > orb.body.y - orb.radius && mouseY < orb.body.y + orb.radius )){
        orb.change = true;
    }
}