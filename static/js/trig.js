const lengthInput = document.getElementById('length-input');
const widthInput = document.getElementById('width-input');
const angleInput = document.getElementById('angle-input');
const scaleInput = document.getElementById('scale-input');
const clearInput = document.getElementById('clear-input');
const colorInput = document.getElementById('color-input');
let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');

let d1 = 0.01;
let d2 = 0.02;

window.onload = function () {
  canvas.width = canvas.parentElement.clientWidth;
  canvas.height = canvas.parentElement.clientHeight;
  init();
};

function init(d1, d2) {
  let i = 0;
  let i2 = 0;
  let baseRadius = 150;
  let secRadius = 70;
  let diff = 0;
  let path = [];
  window.requestAnimationFrame(draw);
  function draw(d1, d2) {
    let sin = Math.sin(i);
    let cos = Math.cos(i);
    let step = (baseRadius + secRadius + diff);
    let secSin = Math.sin(i2);
    let secCos = Math.cos(i2);

    ctx.resetTransform()
    ctx.clearRect(0, 0, 1000, 1000)
    ctx.translate(600, 300);
    ctx.save()

    ctx.beginPath();
    
    ctx.arc(0, 0, baseRadius, 0, 2*Math.PI);
    ctx.moveTo(step * cos + secRadius, step * sin);

    ctx.arc(step * cos, step * sin, secRadius, 0, 2*Math.PI);
    let x = step * cos + secCos * secRadius;
    let y = step * sin + secSin * secRadius;
    path.push({x: x, y: y})

    ctx.translate(step * cos, step * sin);
    ctx.moveTo(secCos * secRadius, secSin * secRadius);
    ctx.arc(secCos * secRadius, secSin * secRadius, 15, 0, 2*Math.PI);

    ctx.restore()
    //ctx.arc(0, 0, 15, 0, 2*Math.PI);
    drawPath()

    ctx.stroke();
    i += 0.01;
    i2 += 0.04;
    window.requestAnimationFrame(draw)
  }
  function drawPath() {
    for (let i = 0; i < path.length; i++)
      ctx.arc(path[i].x, path[i].y, 3, 0, 2*Math.PI);
  }
}