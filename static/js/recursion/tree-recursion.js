const lengthInput = document.getElementById('length-input');
const widthInput = document.getElementById('width-input');
const angleInput = document.getElementById('angle-input');
const scaleInput = document.getElementById('scale-input');
const computeC = document.getElementById('computeC');
const computeT = document.getElementById('computeT');
let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');


window.onload = function() {
  canvas.width = canvas.parentElement.clientWidth;
  canvas.height = canvas.parentElement.clientHeight;
};

canvas.width = canvas.parentElement.clientWidth;
canvas.height = canvas.parentElement.clientHeight;

computeT.addEventListener('click', () => {
  //drawTree(ctx, angleInput.value, scaleInput.value, widthInput.value, lengthInput.value);
  drawTree(ctx, 0.3, 0.75, 0.1, 200);
});

computeC.addEventListener('click', () => {
  drawFractalCircle(ctx, 0.3, 0.4, 1.5, 1, 200);
});

// animate ?

function drawTree(ctx, angle, scale, width, length) {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.translate(canvas.width/2, canvas.height);
  ctx.rotate(Math.PI);
  branch(length, angle, scale);

  function branch(length, angle, scale) {
    ctx.fillRect(0, 0, width, length);
    if (length < 1) return;
    ctx.save();
    ctx.translate(0, length);
    ctx.rotate(-angle);
    branch(length * scale, angle, scale);
    ctx.rotate(angle * 2);
    branch(length * scale, angle, scale);
    ctx.restore();
  }
}

function drawFractalCircle(ctx, angle, scale, rotation, width, length) {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.translate(canvas.width/2, canvas.height/2);
  ctx.rotate(Math.PI);
  branch(length, angle, scale);

  function branch(length, angle, scale) {
    ctx.fillRect(0, 0, width, length);
    if (length < 1) return;
    ctx.save();
    ctx.translate(0, length);
    ctx.rotate(-rotation*angle);
    branch(length - scale, angle, scale);
    // change line colors
    ctx.restore();
  }
}