let i = 0;
let turn = false;
let  dr = false;
let c_turns;
let cards = [];
let adv_cards = [];

function drawCards(arr){
    for(i = 0; i < arr.length; i++){
        text(arr[i].num +' '+ arr[i].type, arr[i].x, arr[i].y);
        stroke(0);
    }

    if(adv_cards.length != 0){
        for(i = 0; i < adv_cards.length; i++){
            text(adv_cards[i].num +' '+ adv_cards[i].type, adv_cards[i].x, adv_cards[i].y + 200);
            stroke(0);
        }
    }

}

function turnOn(){
    let x = 0;
    if( c_turns == 0)
        x = 100;
    else if(c_turns == 1)
        x = 300;
    else if(c_turns == 2)
        x = 500;
    
    if(mouseIsPressed){
        if(mouseX > 0 && mouseX < 200 && mouseY < 200){
            cards[0].y += 200;
            cards[0].x = x;
            socket.emit('card_played', cards[0]);
            turn = false;
        }
        else if(mouseX > 200 && mouseX < 400 && mouseY < 200){
            cards[1].y += 200;
            cards[1].x = x;
            socket.emit('card_played', cards[1]);
            turn = false;
        }
        else if(mouseX > 400 && mouseX < 600 && mouseY < 200){
            cards[2].y += 200;
            cards[2].x = x;
            socket.emit('card_played', cards[2]);
            turn = false;
        }
        
    }
}


function setup() {
    createCanvas(800, 800);
}

function draw() {
    background(220);

    for(i = 200; i < 800; i += 200){
        line(0, i, width, i);
        line(i,0,i,height);
        stroke(0);
    }

    if(dr)
        drawCards(cards);
    
    if(turn)
        turnOn();
}
