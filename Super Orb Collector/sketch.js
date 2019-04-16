let orb;
let map;




function setup(){
    createCanvas(1000, 600);
    map = new N2();
    orb = new Orb(map.start.x, map.start.y);
     

}

function draw(){
    translate(0, 0);
    background(0);
    
    orb.show();

    map.show();

    if(orb.change)
        orb.changePos(mouseX, mouseY);

    

}

function mousePressed(){
    
    
    if((mouseX > orb.body.x - orb.radius && mouseX < orb.body.x + orb.radius) && (mouseY > orb.body.y - orb.radius && mouseY < orb.body.y + orb.radius )){
        orb.change = true;
    }
}