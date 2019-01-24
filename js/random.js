var ctx = document.getElementById('canvas').getContext('2d');
console.log(ctx);
var x = Math.floor(Math.random()*canvas.width)
var y = Math.floor(Math.random()*canvas.width)
ctx.beginPath();
ctx.arc(x,y,5, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.closePath();

var rec = {
  x: 25,y:0,m:3,b:6
}
rec.y = rec.m*rec.x+rec.b;

ctx.beginPath();
ctx.strokeStyle = 'red'
ctx.moveTo(0,0)
ctx.lineTo(x,y)
ctx.stroke()
ctx.closePath()
