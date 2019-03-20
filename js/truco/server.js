let turns = 0;

let sort_cards = [
    {num: 1, type:'Espada'},{num: 1, type:'Basto'},
    {num: 7, type:'Espada'},{num: 7, type:'Oro'},
    {num: 3, type:'Todos'},{num: 2, type:'Todos'},
    {num: 1, type: 'Todos'},{num: 12, type:'Todos'},
    {num: 11, type:'Todos'},{num: 10, type:'Todos'},
    {num: 7, type:'Todos'},{num: 6, type:'Todos'},
    {num: 5, type:'Todos'},{num: 4, type:'Todos'},
];

let card_player1;
let card_player2;

let greater_card = (cardp1, cardp2) => {
  let p1, p2;
  for(i = 0; i < sort_cards.length; i++){
    if(cardp1.num == sort_cards[i].num){
      if(sort_cards[i].type == 'Todos')
        p1 = i;
      else if(cardp1.type == sort_cards[i].type){
        p1 = i;
      }
    }


    if(cardp2.num == sort_cards[i].num){
      if(sort_cards[i].type == 'Todos')
        p2 = i;
      else if(cardp2.type == sort_cards[i].type){
        p2 = i;
      }
    }
  }

  if(p1 < p2)
    return 'PLAYER ONE';
  else if(p1 > p2)
    return 'PLAYER TWO';
  else
    return 'PLAYER ONE';
}

let aux = {num:0,type:''};

let is_there_num = (n, arr) => { 
  for( let i = 0; i < arr.length; i++){
    if(n == arr[i].num)
      return true
    else if( i == arr.length -1)
      return false
  }
}; 
let is_there_type = (s, arr) => {
  for(let i = 0; i < arr.length; i++){
    if(s == arr[i].type)
      return true
    else if(i == arr.length -1)
      return false
  }
};


let get_cards = (arr) => {
  for( i = 1; i < arr.length; i++){
    do{
      aux.num = Math.floor(Math.random() * 11) + 1;
      while(aux.num == 8 || aux.num == 9)
        aux.num = Math.floor(Math.random() * 11) + 1;

      aux.type = Math.floor(Math.random() * 3) + 1;
      if(aux.type == 1)
        aux.type = 'Basto';
      else if(aux.type == 2)
        aux.type = 'Espada';
      else if(aux.type == 3)
        aux.type = 'Oro';
      else if(aux.type == 4)
        aux.type = 'Copa'
    }
    while( (is_there_num( aux.num, arr) == true) && (is_there_type(aux.type, arr) == true));
    arr[i].num = aux.num;
    arr[i].type = aux.type;
  }
  
}

let cards_one = [{num:0,type:''},{num:0,type:''},{num:0,type:''}];

let i = 0;

cards_one[0].num = Math.floor(Math.random() * 11) + 1;
while(cards_one[0].num == 8 || cards_one[0].num == 9)
    cards_one[0].num = Math.floor(Math.random() * 11) + 1;

cards_one[0].type = Math.floor(Math.random() * 3) + 1;
if(cards_one[i].type == 1)
  cards_one[i].type = 'Basto';
else if(cards_one[i].type == 2)
  cards_one[i].type = 'Espada';
else if(cards_one[i].type == 3)
  cards_one[i].type= 'Oro';
else if(cards_one[i].type == 4)
  cards_one[i].type = 'Copa';
  
get_cards(cards_one)

let cards_two = [{num:0,type:''},{num:0,type:''},{num:0,type:''}];

cards_two[0].num = Math.floor(Math.random() * 11) + 1;
while(cards_two[0].num == 8 || cards_two[0].num == 9)
    cards_two[0].num = Math.floor(Math.random() * 11) + 1;

cards_two[0].type = Math.floor(Math.random() * 3) + 1;
if(cards_two[0].type == 1)
  cards_two[0].type = 'Basto';
else if(cards_two[0].type == 2)
  cards_two[0].type = 'Espada';
else if(cards_two[0].type == 3)
  cards_two[0].type= 'Oro';
else if(cards_two[0].type == 4)
  cards_two[0].type = 'Copa';
  
get_cards(cards_two)
for( i = 0; i < cards_two.length; i++){
  while( is_there_num(cards_two[i].num,cards_one) == true && is_there_type(cards_two[i].type, cards_one) == true ){
    do{
      aux.num = Math.floor(Math.random() * 11) + 1;
      while(aux.num == 8 || aux.num == 9)
        aux.num = Math.floor(Math.random() * 11) + 1;

      aux.type = Math.floor(Math.random() * 3) + 1;
      if(aux.type == 1)
        aux.type = 'Basto';
      else if(aux.type == 2)
        aux.type = 'Espada';
      else if(aux.type == 3)
        aux.type = 'Oro';
      else if(aux.type == 4)
        aux.type = 'Copa'
    }while( (is_there_num( aux.num, cards_one) == true) && (is_there_type(aux.type, cards_one) == true));
    cards_two[i].num = aux.num;
    cards_two[i].type = aux.type;
  }
}





const express = require('express');

let app = express();
const server = app.listen(3000);

app.use(express.static('public'))

const socket = require('socket.io')

let playerOne, playerTwo;
let cont = 0;

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
      playerOne.emit('cards', cards_one);
      playerTwo.emit('cards', cards_two);

      playerOne.emit('turn', true, turns);

      playerOne.on('card_played', (data) => { 
        playerTwo.emit('adv_card', data);
        card_player1 = data; 
        playerTwo.emit('turn', true, turns);
      });
      
      playerTwo.on('card_played', (data) => {
        turns++;
        playerOne.emit('adv_card', data);
        card_player2 = data;
        playerOne.emit('turn', true, turns);
      });


      
      

      


    
    }
    
   
});

