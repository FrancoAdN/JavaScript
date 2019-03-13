var i;
var game = true;
var canvas=document.getElementById('mycanvas');
var ctx=canvas.getContext('2d');
var desde=parseInt(new Date().getTime());
var hasta=desde;
var time=parseInt(new Date().getTime());

window.addEventListener('keyup',this.check,false);

var snake={
  x:1,y:1
}




function check(teclaPresionada) {

    if ((teclaPresionada.code == 'ArrowRight' || teclaPresionada.code == 'KeyD') && (snake.x + 20) < canvas.width){
      snake.x += 20;
    }
    if ((teclaPresionada.code == 'ArrowLeft' || teclaPresionada.code == 'KeyA') && (snake.x - 20) > 0){
      snake.x += -20;
    }
    if ((teclaPresionada.code == 'ArrowDown' || teclaPresionada.code == 'KeyS') && (snake.y + 20) < canvas.height){
      snake.y += 20;
    }
    if ((teclaPresionada.code == 'ArrowUp' || teclaPresionada.code == 'KeyW') && (snake.y - 20) > 0){
      snake.y += -20;
    }



}

function actCanvas() {
  ctx.clearRect(0,0,300,300);
  snake.x += 20
  ctx.beginPath();

  ctx.fillStyle = 'red';
  ctx.fillRect(snake.x,snake.y,19,19);

  ctx.lineWidth = 2
  for(i = 0; i < 16; i++){
    ctx.moveTo(i*20,0);
    ctx.lineTo(i*20,300);
    ctx.moveTo(0,i*20);
    ctx.lineTo(300,i*20);
  }

  ctx.stroke();
  ctx.closePath();
  if(game)
    setTimeout(actCanvas,300);
  else
    gameOver();
}

actCanvas();

/*function gameLoop(){
  window.requestAnimationFrame(gameLoop);
  hasta=parseInt(new Date().getTime());
  var dif=hasta-desde;

  if(dif>1000){
    console.log("hi");
    desde = parseInt(new Date().getTime());

    ctx.clearRect(0,0,300,300);

    actCanvas();

  }


}




gameLoop();*/
