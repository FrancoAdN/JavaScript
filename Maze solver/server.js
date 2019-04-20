let game = true;
let grid;
let cols,rows;
let scl = 40;

let current;
let stack = [];
let cont = 0

let width = 1000;
let height = 800;

class Cell{
    constructor(i, j){
        this.body = {x: i * scl, y: j * scl};
        this.walls = [true, true, true, true];  // top, right, bot, left
        this.visited = false;
    }

    checkNeighbors(){

        let x = this.body.x / scl;
        let y = this.body.y / scl;
        let neighbors = [];

        let top, right, bot, left;

        if(index(x-1,y))
            top = grid[x-1][y];
        else
            top = index(x-1,y);

        if(index(x, y+1))
            right = grid[x][y+1];
        else
            right = index(x, y+1);

        if(index(x+1, y))
            bot = grid[x+1][y];
        else
            bot = index(x+1, y);

        if(index(x, y-1))
            left = grid[x][y-1];
        else
            left = index(x, y-1)


        
        
        
        if(top && !top.visited)
            neighbors.push(top);
        if(right && !right.visited)
            neighbors.push(right);
        if(bot && !bot.visited)
            neighbors.push(bot)
        if(left && !left.visited)
            neighbors.push(left)
        

        if(neighbors.length > 0){
            let r = Math.floor(Math.random() * neighbors.length);
            return neighbors[r];

        }else
            return undefined;
    }
}

function index(i, j) {
    if (i < 0 || j < 0 || i > cols-1 || j > rows-1) {
      return undefined;
    }
    return 1
}

cols = Math.floor(width / scl);
rows = Math.floor(height / scl);

grid = make2DArray(cols, rows);
for(let i = 0; i < cols; i++){
    for(let j = 0; j < rows; j++){
        grid[i][j] = new Cell(i, j);
    }
}
    
current = grid[0][0];

while (game){

    for(let i = 0; i < cols; i++){
        for(let j = 0; j < rows; j++){
            if(grid[i][j].visited)
                cont++;
            else
                cont = 0;
        }
    }
    
    if(cont > rows*cols){
        game = false;
        console.log('MAZE DONE');
    }else{
        current.visited = true;

        let next = current.checkNeighbors();
        if(next){
            next.visited = true;    

            stack.push(current);
                //STEP 3
            removeWalls(current, next);
    
                //STEP 4
            current = next;
        }else if(stack.length > 0){
            current = stack.pop();
        }
    }
        
        
}
    
    

function make2DArray(a, b) {
    let arr = new Array(a);
    for (let i = 0; i < arr.length; i++) {
      arr[i] = new Array(b);
    }
    return arr;
}

function removeWalls(a, b){
    var x = (a.body.x / scl)  - (b.body.x / scl);
    if (x === 1) {
        a.walls[3] = false;
        b.walls[1] = false;
    } else if (x === -1) {
        a.walls[1] = false;
        b.walls[3] = false;
    }
    var y = (a.body.y / scl) - (b.body.y / scl);
    if (y === 1) {
        a.walls[0] = false;
        b.walls[2] = false;
    } else if (y === -1) {
        a.walls[2] = false;
        b.walls[0] = false;
    }
}


//SERVER CONFIG

const express = require('express');

let app = express();
const server = app.listen(8000);

app.use(express.static('public'));

const socket = require('socket.io');

let cont_players = 0;
let end = {
    x: Math.floor(Math.random()* (cols-1)) * scl,
    y: Math.floor(Math.random()* (rows-1)) * scl
};
let player_one = {
    socket,
    pos:{
        start: {
            x: Math.floor(Math.random()* (cols-1)) * scl + (scl/2),
            y: Math.floor(Math.random()* (rows-1)) * scl + (scl/2)
        },
        x: 0,
        y: 0,
        radius: (scl/2) - 10,
        color:'#00ff00'
    }
};
let player_two = {
    socket,
    pos:{
        start: {
            x: Math.floor(Math.random()* (cols-1)) * scl + (scl/2),
            y: Math.floor(Math.random()* (rows-1)) * scl + (scl/2)
        },
        x:0,
        y:0,
        radius: (scl/2) - 10,
        color:'#d142f4'
    }
};

player_one.pos.x = player_one.pos.start.x;
player_one.pos.y = player_one.pos.start.y;
player_two.pos.x = player_two.pos.start.x;
player_two.pos.y = player_two.pos.start.y;

let io = socket(server);
console.log('Server running \n');

io.sockets.on('connection', (socket) => {
    console.log('New connection ' + socket.id);
    if(cont_players === 0){
        player_one.socket = socket;
        player_one.socket.emit('welcome', 'Welcome to MAZE!, you are player one!');
        cont_players++;
    }else if(cont_players === 1){
        player_two.socket = socket;
        player_two.socket.emit('welcome', 'Welcome to MAZE!, you are player two!');
        cont_players++;
    }else
        socket.emit('welcome', 'We are out of players, SORRY!!');
    
    
    if(cont_players === 2){
        player_one.socket.emit('maze', grid, player_one.pos, end);
        player_two.socket.emit('maze', grid, player_two.pos, end);

        player_one.socket.on('pos', (data) => {
            player_two.socket.emit('adv_pos', data);
        });

        player_two.socket.on('pos', (data) => {
            player_one.socket.emit('adv_pos', data);
        });

        player_one.socket.on('win', () => {
            player_two.socket.emit('over', false);
        });
        player_two.socket.on('win', () => {
            player_one.socket.emit('over', false);
        });
    }
    
});