// Una célula muerta con exactamente 3 células vecinas vivas "nace" (es decir, al turno siguiente estará viva).
// Una célula viva con 2 o 3 células vecinas vivas sigue viva, en otro caso muere (por "soledad" o "superpoblación").
let i, j;
let scl = 20;
let columns;
let rows;
let board = [];
let cont;
let nextStatus;

function setup(){
  createCanvas(801,801);
  columns = floor(width / scl);
  row = floor(height / scl);
  for(i = 0; i <= row; i++){
    for(j = 0; j <= columns; j++){
      board.push(createVector(i * scl, j * scl, 0));
    }
  }

  for(i = 0; i < floor(width/2); i++){
    let aux = floor(random(board.length));
    if(board[aux].z == 1){
      while(board[aux].z == 1)
        aux = floor(random(board.length));
    }else
      board[aux].z = 1;
  }

}

function draw(){
  frameRate(5);
  background(240);
  for(i = 0; i < board.length; i++){
    stroke(0);
    if(board[i].z == 1)
      fill(0);
    else
      fill(240)
    rect(board[i].x, board[i].y, scl, scl);
  }

  next();
}


function next(){
  nextStatus = []
  cont;
  for(i = 41 ; i < board.length - 41; i++){
    cont = 0;
    if( i % 41 != 40 && i % 41 != 0){

      if(board[i].z == 1){
        if(board[i-1].z == 1)
          cont++;
        if(board[i+1].z == 1)
          cont++;
        if(board[i-41].z == 1)
          cont++;
        if(board[i+41].z == 1)
          cont++;
        if(board[i-40].z == 1)
          cont++;
        if(board[i+40].z == 1)
          cont++;
        if(board[i-42].z == 1)
          cont++;
        if(board[i+42].z == 1)
          cont++;

        if(cont == 2 || cont == 3)
          nextStatus.push(createVector(i, 0, 1));
        else
          nextStatus.push(createVector(i, 0, 0));

      }else{
        if(board[i-1].z == 1)
          cont++;
        if(board[i+1].z == 1)
          cont++;
        if(board[i-41].z == 1)
          cont++;
        if(board[i+41].z == 1)
          cont++;
        if(board[i-40].z == 1)
          cont++;
        if(board[i+40].z == 1)
          cont++;
        if(board[i-42].z == 1)
          cont++;
        if(board[i+42].z == 1)
          cont++;
        
        if(cont == 3)
          nextStatus.push(createVector(i, 0, 1));
      }
    }else if(i % 41 == 0){
      //FILA DE ARRIBA
      if(i == 1640){
        if(board[i].z == 1){
          if(board[i+1].z == 1)
            cont++;
          if(board[i-41].z == 1)
            cont++;
          if(board[i-42].z == 1)
            cont++;
  
          if(cont == 2 || cont == 3)
            nextStatus.push(createVector(i, 0, 1));
          else
            nextStatus.push(createVector(i, 0, 0));
        }else{
  
          if(board[i+1].z == 1)
            cont++;
          if(board[i-41].z == 1)
            cont++;
          if(board[i-42].z == 1)
            cont++;
  
          if(cont == 3)
            nextStatus.push(createVector(i, 0, 1));
        }
      }
    }else if(i % 41 == 40){
      //FILA DE ABAJO
      if(board[i].z == 1){

        if(board[i-1].z == 1)
          cont++;
        if(board[i+41].z == 1)
          cont++;
        if(board[i+40].z == 1)
          cont++;
        if(board[i-41].z == 1)
          cont++;
        if(board[i-40].z == 1)
          cont++;

        if(cont == 2 || cont == 3)
          nextStatus.push(createVector(i, 0, 1));
        else
          nextStatus.push(createVector(i, 0, 0));
      }else{

        if(board[i-1].z == 1)
          cont++;
        if(board[i+41].z == 1)
          cont++;
        if(board[i+40].z == 1)
          cont++;
        if(board[i-41].z == 1)
          cont++;
        if(board[i-4].z == 1)
          cont++;

        if(cont == 3)
          nextStatus.push(createVector(i, 0, 1));
      }
    }
  }

  // PRIMERA COLUMNA
  for(i = 0; i <= 40; i++){
    cont = 0;
    //PRIMERA ESQUINA
    if(i != 0){
      if(board[i].z == 1){

        if(board[i-1].z == 1)
          cont++;
        if(board[i+1].z == 1)
          cont++;
        if(board[i+40].z == 1)
          cont++;
        if(board[i+41].z == 1)
          cont++;
        if(board[i+42].z == 1)
          cont++;
        
        if(cont == 2 || cont == 3)
          nextStatus.push(createVector(i,0,1));
        else
          nextStatus.push(createVector(i,0,0));


      }else{

        if(board[i-1].z == 1)
          cont++;
        if(board[i+1].z == 1)
          cont++;
        if(board[i+40].z == 1)
          cont++;
        if(board[i+41].z == 1)
          cont++;
        if(board[i+42].z == 1)
          cont++;

        if(cont == 3)
          nextStatus.push(createVector(i,0,1));
      }
    }else if(i == 40){
      if(board[i].z == 1){

        if(board[i-1].z == 1)
          cont++;
        if(board[i+40].z == 1) 
          cont++;
        if(board[i+41].z == 1)
          cont++;

        if(cont == 2 || cont == 3)
          nextStatus.push(createVector(i, 0, 1));
        else
          nextStatus.push(createVector(i, 0, 0));
      }else{

        if(board[i-1].z == 1)
          cont++;
        if(board[i+40].z == 1) 
          cont++;
        if(board[i+41].z == 1)
          cont++;

        if(cont == 3)
          nextStatus.push(createVector(i, 0, 1));
      }

    }else{
      if(board[i].z == 1){

        if(board[i+1].z == 1)
          cont++;
        if(board[i+41].z == 1)
          cont++;
        if(board[i+42].z == 1)
          cont++;
        
        if(cont == 2 || cont == 3)
          nextStatus.push(createVector(i, 0, 1));
        else
          nextStatus.push(createVector(i, 0, 0));
        
        
      }else{
        if(board[i+1].z == 1)
          cont++;
        if(board[i+41].z == 1)
          cont++;
        if(board[i+42].z == 1)
          cont++;
        if(cont == 3)
          nextStatus.push(createVector(i, 0, 1));
      }
    }

  }

  //ULTIMA COLUMNA
  for(i = board.length - 40; i <= board.length - 1; i++){
    cont = 0;

    if(i == 1680){
      if(board[i].z == 1){
        if(board[i-1].z == 1)
          cont++;
        if(board[i-41].z == 1)
          cont++;
        if(board[i-40].z == 1)
          cont++;

        if(cont == 2 || cont == 3)
          nextStatus.push(createVector(i, 0, 1));
        else
          nextStatus.push(createVector(i, 0, 0));
      }else{

        if(board[i-1].z == 1)
          cont++;
        if(board[i-41].z == 1)
          cont++;
        if(board[i-40].z == 1)
          cont++;

        if(cont == 3)
          nextStatus.push(createVector(i, 0, 1));
      }
    }else{

      if(board[i].z == 1){

        if(board[i-1].z == 1)
          cont++;
        if(board[i+1].z == 1)
          cont++;
        if(board[i-40].z == 1)
          cont++;
        if(board[i-41].z == 1)
          cont++;
        if(board[i-42].z == 1)
          cont++;
        
        if(cont == 2 || cont == 3)
          nextStatus.push(createVector(i,0,1));
        else
          nextStatus.push(createVector(i,0,0));
  
  
      }else{
  
        if(board[i-1].z == 1)
          cont++;
        if(board[i+1].z == 1)
          cont++;
        if(board[i-40].z == 1)
          cont++;
        if(board[i-41].z == 1)
          cont++;
        if(board[i-42].z == 1)
          cont++;
  
        if(cont == 3)
          nextStatus.push(createVector(i,0,1));
      }
    }

  }


  for(i = 0; i < nextStatus.length; i++)
    board[nextStatus[i].x].z = nextStatus[i].z;
  
  
  
}