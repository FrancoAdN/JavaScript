//CLASS THAT MAKES THE CARD

class Card{
  constructor(){
      this.type;
      this.num;
      this.pos = {x: 0, y: 0};
      this.getCard();
  }
  

  getNum(){
      let n;
      do {
          n = Math.floor(Math.random() * 11) + 1;
      } while (n == 8 || n == 9);
      return n;
  }
  
  getType(){
      let t;
      switch(Math.floor(Math.random() * 3)){
          case 0:
              t = 'Espada';
              break;
          case 1:
              t = 'Basto';
              break;
          case 2:
              t = 'Copa';
              break;
          case 3:
              t = 'Oro';
              break;
      }
      return t;
  }

  getCard(){
      this.num = this.getNum();
      this.type = this.getType();
  }

}

//SORTED CARD 

const sort_cards = [
  {num: 1, type:'Espada'},{num: 1, type:'Basto'},
  {num: 7, type:'Espada'},{num: 7, type:'Oro'},
  {num: 3, type:'Todos'},{num: 2, type:'Todos'},
  {num: 1, type: 'Todos'},{num: 12, type:'Todos'},
  {num: 11, type:'Todos'},{num: 10, type:'Todos'},
  {num: 7, type:'Todos'},{num: 6, type:'Todos'},
  {num: 5, type:'Todos'},{num: 4, type:'Todos'},
];


//FUNCTIONS OF CARDS (NO IN SERVER)
function is_there_num(arr, c){
  for(let i = 0; i < arr.length; i++){
      if(arr[i].num == c)
          return true;
  }
  return false;
}

function is_there_type(arr, t){
  for(let i = 0; i < arr.length; i++){
      if(arr[i].type == t)
          return true;
  }
  return false;
}


function greater_card(cardp1, cardp2){
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
    return 'TIE';
}

function get_card_one(arr){
  arr.push(new Card());

  for(let i = 1; i < 3; i++){
      let aux = new Card();
      while(is_there_num(arr, aux.num) && is_there_type(arr, aux.type))
          aux.getCard();
      
      arr.push(aux);
  }
}

function get_card_two(arr, arr1){
  for(let i = 0; i < 3; i++){
      let aux = new Card();
      while((is_there_num(arr1, aux.num) && is_there_type(arr1, aux.type)) || (is_there_num(arr, aux.num) && is_there_type(arr, aux.type)))
          aux.getCard();
  
      arr.push(aux);
  }
}

function remove_card(arr){
  for(let i = 0; i < arr.length + 2; i++)
      arr.pop();    
}   

//MAKING CARDS PLAYER ONE
let cards_player_one = [];

get_card_one(cards_player_one);

//MAKING CARDS PLAYER TWO
let cards_player_two = [];
get_card_two(cards_player_two, cards_player_one);







//    MAKING THE SERVER



//FUNCTIONS ON THE SERVER


//THE SERVER ITSELF

const express = require('express');

let app = express();
const server = app.listen(3000);

app.use(express.static('public'));

const socket = require('socket.io');

let cont = 0;
let playerOne, playerTwo;

let io = socket(server);
console.log('Server running \n');

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
    let compare = false;
    let turns = 0;
    let card_played_one, card_played_two;

    //PASSING CARDS TO THE PLAYERS
    playerOne.emit('cards', cards_player_one);
    playerTwo.emit('cards', cards_player_two);

    //PLAYER ONE PLAYS
    playerTwo.emit('turn', true, turns);

    //RECIVING THE CARDS PLAYED, SENDING TO THE PLAYER TWO AND DECIDING WHO PLAYS NEXT

    playerOne.on('card_played', (data) => { 
      card_played_one = data; 
      playerTwo.emit('adv_card', card_played_one);

      if(compare){
        compare = false;
        turns++;
        let decide = greater_card(card_played_one, card_played_two);
        console.log(decide);
        if(decide == 'PLAYER ONE')
          playerOne.emit('turn', true, turns);
        else if(decide == 'PLAYER TWO')
          playerTwo.emit('turn', true, turns);
        else if(decide == 'TIE')
          playerOne.emit('turn', true, turns);

      }else{
        playerTwo.emit('turn', true, turns);
        compare = true;
      }
    });
    
    
    playerTwo.on('card_played', (data) => { 
      card_played_two = data; 
      playerOne.emit('adv_card', card_played_two);

      if(compare){
        compare = false;
        turns++;
        let decide = greater_card(card_played_one, card_played_two);
        console.log(decide);
        if(decide == 'PLAYER ONE')
          playerOne.emit('turn', true, turns);
        else if(decide == 'PLAYER TWO')
          playerTwo.emit('turn', true, turns);
        else if(decide == 'TIE')
          playerOne.emit('turn', true, turns);

      }else{
        playerOne.emit('turn', true, turns);
        compare = true;
      }
    });







    // playerOne.on('card_played', (data) => {

    //   turns++;

    //   card_played_one = data;

    //   playerTwo.emit('adv_card', card_played_one);
      
    //   //COMPARING WHO WINS THE HAND
    //   if(compare){

    //     compare = false;
    //     console.log(greater_card(card_played_one, card_played_two));
    //     if(greater_card(card_played_one, card_played_two) == 'PLAYER ONE')
    //       playerOne.emit('turn', true, turns);
    //     else if(greater_card() == 'PLAYER TWO')
    //       playerTwo.emit('turn', true, turns);
    //     else
    //       playerOne.emit('turn', true, turns);


    //   }else{
    //     compare = true;
    //     playerTwo.emit('turn', true, turns);
    //   }

    // });



    // playerTwo.on('card_played', (data) => {

    //   turns++;
      
    //   card_played_two = data;

    //   playerOne.emit('adv_card', card_played_two);
      
    //   //COMPARING WHO WINS THE HAND
    //   if(compare){
    //     console.log(greater_card(card_played_one, card_played_two));
    //     compare = false;
    //     if(greater_card(card_played_one, card_played_two) == 'PLAYER ONE')
    //       playerOne.emit('turn', true, turns);
    //     else if(greater_card() == 'PLAYER TWO')
    //       playerTwo.emit('turn', true, turns);
    //     else
    //       playerOne.emit('turn', true, turns);


    //   }else{
    //     compare = true;
    //     playerOne.emit('turn', true, turns);
    //   }

    // });

  }

 
});




