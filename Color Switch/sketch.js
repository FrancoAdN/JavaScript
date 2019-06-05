let ball;
let obs = [];
let ch = [];
function setup(){
    createCanvas(600, 800);
    ball = new Ball();
    obs.push(new Obs(height/3));
    ch.push(new Changer(obs[0].body.y - obs[0].r - 50));
    obs.push(new Obs(ch[ch.length-1].body.y - 300));
    ch.push(new Changer(obs[1].body.y - obs[1].r - 50));
}

function draw(){
    background(0);
    translate(0, 0);
    ball.update();
    ball.show();
    
    for(let i = 0; i < obs.length; i++){
        resetMatrix();
        if(!ch[i].reach){
            ch[i].check(ball);
            ch[i].show();
        }
        obs[i].show();
        obs[i].crash(ball);
    }
        
    if(ball.body.y < obs[obs.length-1].body.y - obs[obs.length-1].r){
        obs.push(new Obs(ch[ch.length-1].body.y - 300));
        ch.push(new Changer(obs[obs.length-1].body.y - obs[obs.length-1].r- 50))
    }

    
    
}


function keyPressed(){
    if(key === ' '){
        for(let i = 0; i < obs.length; i++){
            obs[i].update();
            ch[i].update();
        }
        ball.up();
    }else if(key === 'p')
        frameRate(5);
        
}