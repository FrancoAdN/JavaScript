var canvas = document.getElementById('mycanvas');
var ctx = canvas.getContext('2d');
var game = true;
window.addEventListener('keyup',this.check,false);

var t = {
  w : 400,
  h : 200,
  centW :0,
  centH :0
};
t.centW = (canvas.width - t.w)/2;
t.centH = (canvas.height - t.h)/2;

var c = {
    rad:15,
    cir:[{
      speed:5,
      x:t.centW + 25,
      y:275
    },{
      rad:15,
      speed:5,
      x:t.centW + 25,
      y:375
    },{
      rad:15,
      speed:-5,
      x:t.centW + t.w - 25,
      y:225
    },{
      rad:15,
      speed:-5,
      x:t.centW + t.w - 25,
      y:325
    }]
  };

var you = {
  len:20,
  x:t.centW - 125,
  y:t.centH + 200,
  speed:0
};
win ={
  x:800,y:160
};

function check(teclaPresionada) {

    if ((teclaPresionada.code == 'ArrowRight' || teclaPresionada.code == 'KeyD') /*&& (snake.x + 20) < canvas.width*/){
      you.x += 20;
    }
    if ((teclaPresionada.code == 'ArrowLeft' || teclaPresionada.code == 'KeyA') /*&& (snake.x - 20) > 0*/){
      you.x += -20;
    }
    if ((teclaPresionada.code == 'ArrowDown' || teclaPresionada.code == 'KeyS') /*&& (snake.y + 20) < canvas.height*/){
      you.y += 20;
    }
    if ((teclaPresionada.code == 'ArrowUp' || teclaPresionada.code == 'KeyW') /*&& (snake.y - 20) > 0*/){
      you.y += -20;
    }



}

function tablero(){
  ctx.beginPath();
  ctx.strokeStyle = 'red';
  ctx.rect(t.centW,t.centH,t.w,t.h);
  ctx.fillStyle = 'lightgrey';
  var a=0;
  for (var i = 0; i < 4; i++) {
    for(var j = 0; j < 2; j++){
      ctx.fillRect(t.centW + (i*50)+a,t.centH + (j*100),50,50);
    }
    a+=50;
  }
  a=0;
  for (var i = 0; i < 4; i++) {
    for(var j = 0; j < 2; j++){
      ctx.fillRect(t.centW + (i*50)+a+50,t.centH + (j*100)+50,50,50);
    }
    a+=50;
  }

  ctx.rect(t.centW + t.w - 50, t.centH - 50,100,50);
  ctx.fillRect(t.centW + t.w - 50, t.centH - 50,50,50);

  ctx.rect(t.centW - 50, t.centH + t.h ,100,50);
  ctx.fillRect(t.centW, t.centH + t.h ,50,50);
  ctx.stroke();

  ctx.fillStyle = 'lightgreen';
  ctx.fillRect(t.centW + t.w + 50, t.centH - 50,150,t.h+100);
  ctx.strokeRect(t.centW + t.w + 50, t.centH - 50,150,t.h+100);
  ctx.fillRect(t.centW - 200, t.centH - 50,150,t.h+100);
  ctx.strokeRect(t.centW - 200, t.centH - 50,150,t.h+100);

  ctx.stroke();
  ctx.closePath();
}

function circles(){
  ctx.fillStyle = 'blue';
  ctx.strokeStyle = 'black';
  ctx.lineWidth = '3';
  for (var i = 0; i < c.cir.length; i++) {
    ctx.beginPath();
    ctx.arc(c.cir[i].x += c.cir[i].speed, c.cir[i].y, c.rad, 0, 2 * Math.PI);
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
    if(d(c.cir[i].x,c.cir[i].y, t.w + t.centW ,c.cir[i].y) <= 15)
      c.cir[i].speed = -5;
    else if (d(c.cir[i].x,c.cir[i].y,t.centW ,c.cir[i].y) <= 15)
      c.cir[i].speed = 5;

    if (d(c.cir[i].x , c.cir[i].y , you.x+5,you.y+5) <= 20)
      game = false;
    if(d(you.x+5,you.y+5,win.x+10,win.y+10)<=50){
      game = false;
      console.log('win');
    }
  }
}

function square() {
  ctx.fillStyle = 'red';
  ctx.strokeStyle = 'black';
  ctx.lineWidth = '3';
  ctx.beginPath();
  ctx.rect(you.x,you.y,you.len,you.len);
  ctx.rect(win.x,win.y,20,20);
  ctx.fill();
  ctx.stroke();
  ctx.closePath();
}

function d(x1,y1,x2,y2) {
  return Math.sqrt(Math.pow((x2-x1),2) + Math.pow((y2-y1),2));
}


function init(){
  ctx.clearRect(0,0,canvas.width,canvas.height);
  tablero();
  circles();
  square();
  if(game)
    window.requestAnimationFrame(init);
}
init();
