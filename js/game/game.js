/*var i = 0,j=0;
var n=1280;
var celulas=[n];
var posX=0;
var posY=0;
var canvas=document.getElementById('canvas');
var ctx=canvas.getContext("2d");
document.write('</br>'+' Una c&eacute;lula muerta con exactamente 3 c&eacute;lulas vecinas vivas "nace" (es decir, al turno siguiente estar&aacute; viva).'+'</br>');

document.write('Una c&eacute;lula viva con 2 o 3 c&eacute;lulas vecinas vivas sigue viva, en otro caso muere (por "soledad" o "superpoblaci&oacute;n").');

function grill(){
  ctx.beginPath();
  for(i = 1; i < canvas.width/25;i++){
    ctx.moveTo(i*25,0);
    ctx.lineTo(i*25,800);
    ctx.moveTo(0,i*25);
    ctx.lineTo(1000,i*25);
  }
  ctx.strokeStyle="white";
  ctx.stroke();
  ctx.closePath();
}
var num;
function cells(){
  for(i=0;i<n;i++){
    celulas[i]={
      x:0,
      y:0,
      state:false
    }
  }
var numX=0;
var numY=0;
for(i=0;i<celulas.length;i++){
  if(numX<40){
    celulas[i].x=numX*25;
    numX++;
  }else{
    numX=0;
  }
  if(numY<32){
    celulas[i].y=numY*25;
    numY++;
  }else{
    numY=0;
  }

}
for(i=0;i<500;i++){
  num=Math.floor(Math.random()*1280);
  celulas[num].state=true;
}
/*for(i=0;i<celulas.length;i++){
  console.log(celulas[i]);
}*/

/*  ctx.beginPath();
  ctx.fillStyle="red";
  for( i = 0; i < celulas.length ; i++){
    if(celulas[i].state)
      ctx.fillRect(celulas[i].x+1,celulas[i].y+1,23,23);
  }
  ctx.closePath();

}

function boton(){
  cellLive();
}

function cellLive(){
  var around=0;
  for(i=0;i<celulas.length;i++){
    if(celulas[i].state && i>41 && i<n-41){
      if(celulas[i-41].state || celulas[i-40].state || celulas[i-39].state){
        around++;
      }else if(celulas[i-1].state || celulas[i+1].state){
        around++;
      }else if (celulas[i+39].state || celulas[i+40].state || celulas[i+41]) {
        around++;
      }
      if(around == 2 || around == 3){
        console.log(celulas[i]);
        console.log("Celula viva");
      }else{
        console.log(celulas[i]);
        console.log("Celula muerta");
      }
    }

    around=0;
  }
}




grill();
cells();*/
var i=0,j=0,cont=-1;
var n=9;
var ent = true;
var celulas=[n];
var around=0;
var aux=[];
var nAux=[];
var a=-1,b=-1;
var canvas=document.getElementById('canvas');
var ctx=canvas.getContext("2d");
document.write('</br>'+' Una c&eacute;lula muerta con exactamente 3 c&eacute;lulas vecinas vivas "nace" (es decir, al turno siguiente estar&aacute; viva).'+'</br>');
document.write('Una c&eacute;lula viva con 2 o 3 c&eacute;lulas vecinas vivas sigue viva, en otro caso muere (por "soledad" o "superpoblaci&oacute;n").');
function grill(){
  ctx.beginPath();
  for(i=1;i<3;i++){
    ctx.moveTo(i*100,0);
    ctx.lineTo(i*100,300);
    ctx.moveTo(0,i*100);
    ctx.lineTo(300,i*100);
  }
  ctx.strokeStyle="white";
  ctx.stroke();
  ctx.closePath();

}


function cells(){
  if(ent){
    for(i=0;i<n;i++){
      celulas[i]={
        x:0,
        y:0,
        state:false
      }
    }
var contY=1;
  for(i=0;i<celulas.length;i++){
    if(cont != 2){
      cont++;
      celulas[i].x = cont*100;
    }else{
      cont=0;
    }

    if(i>2 && i<6){
      celulas[i].y=contY*100;
    }
    if (i>5) {
      if(i == 6){
        contY++;
      }
      celulas[i].y=contY*100;
    }
  }

var ran=0;
  for(i=0;i<4;i++){
    ran=Math.floor(Math.random()*9);
    for(j=0;j<celulas.length;j++){
      while(celulas[ran].state)
        ran=Math.floor(Math.random()*9);
    }
    celulas[ran].state=true;
  }


    ent=false;
  }


  ctx.beginPath();
  ctx.fillStyle="red";
  for(i=0;i<celulas.length;i++){
    if(celulas[i].state){
      ctx.fillRect(celulas[i].x+1,celulas[i].y+1,98,98);
    }
  }
  ctx.closePath();
}


/*function act(){
  console.log("act");
  ctx.beginPath();
  ctx.fillStyle="red";
  for(i=0;i<celulas.length;i++){
    if(celulas[i].state){
      ctx.fillRect(celulas[i].x+1,celulas[i].y+1,98,98);
    }
  }
  ctx.closePath();
*/

function boton(){

  console.log("bot");
  for(i=0;i<celulas.length;i++){

    if(celulas[i].state){
      // costados
      if(i>0 && celulas[i-1].state){
        around++;
      }
      if(i<8 && celulas[i+1].state){
        around++;
      }

      //arriba y abajo

      if( i >= 2 && celulas[i-3].state){
        around++;
      }

      if(i <= 5 && celulas[i+3].state){
        around++;
      }


      if(around == 2 || around == 2 ){
        a++;
        aux[a]=i;
      }



    }else{


      if(i>0 && !celulas[i-1].state){
        around++;
      }
      if(i<8 && !celulas[i+1].state){
        around++;
      }

      //arriba y abajo

      if( i >= 2 && !celulas[i-3].state){
        around++;
      }

      if(i <= 5 && !celulas[i+3].state){
        around++;
      }
    }


    if( around == 3){
      b++;
      nAux[b]=i;
    }



  }

  for(i=0;i<aux.length;i++){
      celulas[aux[i]].state=false;
  }

  for(i=0;i<nAux.length;i++){
    celulas[nAux[i]].state=true;
  }

  ctx.clearRect(0,0,canvas.width,canvas.height);
  grill();
  cells();
  //act();
}




grill();
cells();
