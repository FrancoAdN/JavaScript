var ctx =document.getElementById('canvas').getContext('2d');
var y = 0;
var g = 2.1;
var game = true;
function init(){
  ctx.clearRect(0,0,canvas.width,canvas.height);
  ball();
  if(game)
    window.requestAnimationFrame(init);
}

function ball(){
  ctx.beginPath();
  ctx.arc(canvas.width/2,142*g, 10, 0, 2 * Math.PI);
  ctx.fill();
  ctx.stroke();
  ctx.closePath();
/*if(d(canvas.width/2,y,canvas.width/2,canvas.height) <= 10)
    g=-2.1;
  else if(d(canvas.width/2,y,canvas.width/2,0) <= 10)
    g = 2.1*/
    //rebote();
}

function rebote() {

}

function d(x1,y1,x2,y2) {
  return Math.sqrt(Math.pow((x2-x1),2) + Math.pow((y2-y1),2));
}

init();
