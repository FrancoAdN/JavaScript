let map;
let orb;


function setup(){
    createCanvas(600, 600);
    map = new Map(4);
    orb = new Orb(100, 100);
}

function draw(){
    background(51);
    map.show();
    orb.show();
    if(orb.change)
        orb.changePos(mouseX, mouseY);
}

function mousePressed(){
    console.log(mouseX, mouseY);
    
    if((mouseX > orb.body.x - orb.radius && mouseX < orb.body.x + orb.radius) && (mouseY > orb.body.y - orb.radius && mouseY < orb.body.y + orb.radius )){
        orb.change = true;
    }
}