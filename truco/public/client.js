let socket = io('http://192.168.0.17:3000/');
let cards;
let dr = false;
let turn;
let c_turns;
let adv_cards = [];

socket.on('welcome', (data) => { console.log(data); });

//RECIVING CARDS

socket.on('cards', (data) => {
    dr = true;
    for(i = 0; i < data.length; i++){
        data[i].pos.x = i * scl + (scl/2);
        data[i].pos.y = scl/2;
    }
    cards = data;
});


socket.on('turn', (data, t) => {
    console.log(data, t);
    turn = data;
    c_turns = t;
});

socket.on('adv_card', (data) => { 
    console.log(data)
    //adv_cards.push(data) 
});




//FUNCTIONS

function makeGrid(){
    for(let i = 1; i < 4 ; i++){
        line(i * scl, 0, i * scl, height);
        line(0, i * scl, width, i * scl);
    }
}

function draw_cards(arr){
    for(i = 0; i < arr.length; i++){
        text(arr[i].num +' '+ arr[i].type, arr[i].pos.x, arr[i].pos.y);
        stroke(0);
    }

    if(adv_cards.length != 0){
        for(i = 0; i < adv_cards.length; i++){
            text(adv_cards[i].num +' '+ adv_cards[i].type, adv_cards[i].pos.x, adv_cards[i].pos.y + 200);
            stroke(0);
        }
    }
}


function turn_on(){
    let x = 0;
    // if( c_turns == 0 || c_turns == 1 )
    //     x = 100;
    // else if(c_turns == 2 || c_turns == 3)
    //     x = 300;
    // else if(c_turns == 4 || c_turns == 5)
    //     x = 500;

    if( c_turns == 0)
        x = 100;
    else if(c_turns == 1)
        x = 300;
    else if(c_turns == 2)
        x = 500;
    
    if(mouseIsPressed){
        if(mouseX > 0 && mouseX < 200 && mouseY < 200)
            sendCard(x, 200, cards[0]);
        else if(mouseX > 200 && mouseX < 400 && mouseY < 200)
            sendCard(x, 200, cards[1]);
        else if(mouseX > 400 && mouseX < 600 && mouseY < 200)
            sendCard(x, 200, cards[2]);
    }
}

function sendCard(x, y, c){
    c.pos.y += y;
    c.pos.x = x;
    socket.emit('card_played', c);
    turn = false;
}


