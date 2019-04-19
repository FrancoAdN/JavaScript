let grid;
let cols,rows;
let scl = 40;

let current;
let stack = [];
let cont = 0

function setup(){
    createCanvas(1001, 801);
    cols = floor(width / scl);
    rows = floor(height / scl);

    grid = make2DArray(cols, rows);
    for(let i = 0; i < cols; i++){
        for(let j = 0; j < rows; j++){
            grid[i][j] = new Cell(i, j);
        }
    }

    current = grid[0][0];


}

function draw(){
    background(51);

    for(let i = 0; i < cols; i++){
        for(let j = 0; j < rows; j++){
            grid[i][j].show();
            if(grid[i][j].visited)
                cont++;
            else
                cont = 0;
        }
    }

    if(cont > rows*cols){
        noLoop();
        console.log('MAZE DONE');
    }else{
        current.visited = true;
        current.highlight();
        //STEP 1 
        let next = current.checkNeighbors();
        if(next){
            next.visited = true;

            //STEP 2
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


function make2DArray(cols, rows) {
    let arr = new Array(cols);
    for (let i = 0; i < arr.length; i++) {
      arr[i] = new Array(rows);
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