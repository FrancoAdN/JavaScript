

//THERE'S A SHIFT FUNCTION!!!!!!!
//THERE'S A SCALE FUNCTION IN P5JS !!!

let i = 0;
class Snake{
    constructor(x, y){
        this.x = x;
        this.y = y;
        this.tail = []
        this.score = 0;
    }
}

function update(){
    for (let i = 0; i < s.tail.length - 1; i++) {
        s.tail[i] = s.tail[i + 1];
    }
    if(s.tail.length >= 1){
        fill(255);
        for(let i = 0; i < s.tail.length; i++)
            rect(s.tail[i].x, s.tail[i].y, scl, scl);
    }
    s.x += speed.x;
    s.y += speed.y;
   
}

function eat(){
    s.tail.push({x: s.x , y: s.y});
    s.x += scl;
}