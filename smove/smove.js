

/*function tabla(){
  for(var i = 1 ; i < 3 ; i++){
    ctx.beginPath();
    ctx.moveTo(i*100,0);
    ctx.lineTo(i*100,295);
    ctx.moveTo(0,i*50);
    ctx.lineTo(300,i*50);
    ctx.strokeStyle="black";
    ctx.stroke();
  }
}*/
/*function dibujarSmove(){
  context.beginPath();
  context.fillStyle = "red";
  context.strokeStyle="black";
  context.arc(75, 100, 50, 0, 2 * Math.PI, false);
  context.fill();
  context.stroke();
  context.closePath();
}*/

//tabla();
//dibujarSmove();

var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
dibujar();
function dibujar(){
  ctx.fillStyle = "#FF0000";
  ctx.fillRect(20,20,150,75);
}
