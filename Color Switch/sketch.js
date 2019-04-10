
let sw;

function setup(){
    createCanvas(600, 600);
    sw = new Sw();
}

function draw(){
    background(220);
    sw.fall();
    sw.show();

}

function keyPressed(){
    if(key === ' '){
        sw.jump();
    }
}