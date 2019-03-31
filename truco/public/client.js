let socket = io('http://192.168.0.17:3000/');
let asd = false;

socket.on('welcome', (data) => { console.log(data); });
socket.on('cards', (data) => {   
    dr = true;
    for(i = 0; i < data.length; i++ ){
        data[i]['x'] = i*200 + 100;
        data[i]['y'] = 100;
    }
    cards = data; 
});
socket.on('turn',(data, t) => {turn = data; c_turns = t; console.log(c_turns)});

socket.on('adv_card', (data) => { adv_cards.push(data) });







