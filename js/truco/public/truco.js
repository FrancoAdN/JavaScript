let socket = io('http://192.168.0.17:3000/');

socket.on('welcome', (data) => { console.log(data); });
socket.on('cards', (data) => { console.log(data); });
//socket.emit('msg','hi from client');


// let aux = {num:0,type:''};
// let game = true;

// let is_there_num = (n, arr) => { 
//   for( let i = 0; i < arr.length; i++){
//     if(n == arr[i].num)
//       return true
//     else if( i == arr.length -1)
//       return false
//   }
// }; 
// let is_there_type = (s, arr) => {
//   for(let i = 0; i < arr.length; i++){
//     if(s == arr[i].type)
//       return true
//     else if(i == arr.length -1)
//       return false
//   }
// };


// let get_cards = (arr) => {
//   for( i = 1; i < arr.length; i++){
//     do{
//       aux.num = Math.floor(Math.random() * 11) + 1;
//       aux.type = Math.floor(Math.random() * 3) + 1;
//       if(aux.type == 1)
//         aux.type = 'Basto';
//       else if(aux.type == 2)
//         aux.type = 'Espada';
//       else if(aux.type == 3)
//         aux.type = 'Oro';
//       else if(aux.type == 4)
//         aux.type = 'Copa'
//     }
//     while( (is_there_num( aux.num, arr) == true) && (is_there_type(aux.type, arr) == true));
//     arr[i].num = aux.num;
//     arr[i].type = aux.type;
//   }
  
// }

// let playerOne = [{num:0,type:''},{num:0,type:''},{num:0,type:''}];

// let i = 0;

// playerOne[0].num = Math.floor(Math.random() * 11) + 1;
// playerOne[0].type = Math.floor(Math.random() * 3) + 1;
// if(playerOne[i].type == 1)
//   playerOne[i].type = 'Basto';
// else if(playerOne[i].type == 2)
//   playerOne[i].type = 'Espada';
// else if(playerOne[i].type == 3)
//   playerOne[i].type= 'Oro';
// else if(playerOne[i].type == 4)
//   playerOne[i].type = 'Copa';
  
// get_cards(playerOne)

// let playerTwo = [{num:0,type:''},{num:0,type:''},{num:0,type:''}];

// playerTwo[0].num = Math.floor(Math.random() * 11) + 1;
// playerTwo[0].type = Math.floor(Math.random() * 3) + 1;
// if(playerTwo[0].type == 1)
//   playerTwo[0].type = 'Basto';
// else if(playerTwo[0].type == 2)
//   playerTwo[0].type = 'Espada';
// else if(playerTwo[0].type == 3)
//   playerTwo[0].type= 'Oro';
// else if(playerTwo[0].type == 4)
//   playerTwo[0].type = 'Copa';
  
// get_cards(playerTwo)
// for( i = 0; i < playerTwo.length; i++){
//   while( is_there_num(playerTwo[i].num,playerOne) == true && is_there_type(playerTwo[i].type, playerOne) == true ){
//     do{
//       aux.num = Math.floor(Math.random() * 11) + 1;
//       aux.type = Math.floor(Math.random() * 3) + 1;
//       if(aux.type == 1)
//         aux.type = 'Basto';
//       else if(aux.type == 2)
//         aux.type = 'Espada';
//       else if(aux.type == 3)
//         aux.type = 'Oro';
//       else if(aux.type == 4)
//         aux.type = 'Copa'
//     }while( (is_there_num( aux.num, playerOne) == true) && (is_there_type(aux.type, playerOne) == true));
//     playerTwo[i].num = aux.num;
//     playerTwo[i].type = aux.type;
//   }
// }

// playerOne.forEach(element => {
//   document.write(element.num + ' ' + element.type + '</br>');
// });

// document.write('</br>');

// playerTwo.forEach(element => {
//   document.write(element.num + ' ' + element.type + '</br>');
// });







