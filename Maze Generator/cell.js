class Cell{
    constructor(i, j){
        this.body = {x: i * scl, y: j * scl};
        this.walls = [true, true, true, true];  // top, right, bot, left
        this.visited = false;
    }

    show(){
        let x = this.body.x;
        let y = this.body.y
        stroke(255);
        if(this.walls[0]) // TOP WALL
            line(x, y, x + scl, y);
        if(this.walls[1]) //RIGHT WALL
            line(x + scl, y, x + scl, y + scl);
        if(this.walls[2]) //BOT WALL
            line(x + scl, y + scl, x, y + scl);
        if(this.walls[3]) //LEFT WALL
            line(x, y + scl, x, y);

        if(this.visited){
            noStroke();
            fill(255, 0, 255, 100);
            rect(x, y, scl, scl);
        }

    }

    highlight(){
        noStroke();
        fill(0, 255, 0);
        rect(this.body.x, this.body.y, scl, scl);
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