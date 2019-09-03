let ship;
let move = 10;
let shots = [];
let invanders = [];

function setup(){
    createCanvas(600, 800);
    ship = new Ship();
    for(let i = 1; i < 4; i++){
        for(let j = 1; j < 9; j++)
            invanders.push(new Invander(j*50 + j*20, i*50 + i*30));
    }
        
}

function draw(){
    background(220);
    ship.show();
    if(shots.length > 0){
        for(let i = 0; i < shots.length; i++){
            shots[i].show();
            if(shots[i].body.y > 0 && shots[i].body.y < height){
                shots[i].update();
                // if(shots[i].coll(ship.body) && shots[i].color == 'red')
                //     end();
                // for(let i = ship.body.x; i < ship.body.x + ship.len.x; i++){
                //     if(i == shots[i].body.x && ship.body.y == shots[i].body.y && shots[i].color == 'red')
                //         end();
                // }
                for(let j = 0; j < invanders.length; j++){
                    if(shots[i].coll(invanders[j].body) && shots[i].color == 0){
                        shots.splice(i, 1);
                        invanders.splice(j, 1);
                        break;
                    }
                }
            }else{
                if(shots.length > 0)
                    shots.splice(i, 1);
            }

            
        }
    }

    if(invanders.length > 0){
        for(let inv of invanders){
            inv.show();
            if(random(1) <= 0.001){
                shots.push(new Shot(inv.body.x, inv.body.y, 10, 'red'));
            }
        }
    }else
        end();
}


function keyPressed(){

    if(keyCode ===  LEFT_ARROW){
        if(ship.body.x - move > 0)
            ship.body.x += -move;
        
    }else if(keyCode ===  RIGHT_ARROW){
        if(ship.body.x + move < width - ship.len.x)
            ship.body.x += move;
    }else if(key === ' ')
        shots.push(new Shot(ship.body.x + ship.len.x/2, ship.body.y, -10, 0));
}

function end(){
    noLoop();
    background(`red`);
}