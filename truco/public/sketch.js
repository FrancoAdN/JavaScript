let scl;


function setup(){
    createCanvas(800, 800);
    scl = width / 4;
}

function draw(){
    background(240);
    makeGrid();

    if(dr)
        draw_cards(cards);

    if(turn)
        turn_on();
}

