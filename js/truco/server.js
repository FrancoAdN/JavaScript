const express = require('express');

let app = express();
const server = app.listen(3000);

app.use(express.static('public'))

const socket = require('socket.io')

let playerOne, playerTwo;
let cont = 0;
let game = false;

let io = socket(server);

io.sockets.on('connection',(socket) => {
    console.log('New connection ' + socket.id); 
    
    if(cont == 0){
        playerOne = socket;
        playerOne.emit('welcome','Bienvenido al truco, eres el jugador uno');
        cont++;
    }else if(cont == 1){
        playerTwo = socket;
        playerTwo.emit('welcome','Bienvenido al truco, eres el jugador dos');
        cont++;
    }else{
        socket.emit('welcome', 'We are out of players');
    }

    if(cont == 2){
        playerOne.emit('cards','1 , 2 , 3');
        playerTwo.emit('cards','4 , 5 , 6');
    }
    
   
});

