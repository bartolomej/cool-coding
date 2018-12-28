const lengthInput = document.getElementById('length-input');
const widthInput = document.getElementById('width-input');
const angleInput = document.getElementById('angle-input');
const scaleInput = document.getElementById('scale-input');
const rotationInput = document.getElementById('rotation-input');
const computeC = document.getElementById('computeC');
let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');

canvas.width = canvas.parentElement.clientWidth;
canvas.height = canvas.parentElement.clientHeight;

lengthInput.addEventListener('mousemove', () => {
  window.requestAnimationFrame( () => {
    document.getElementById('length').innerHTML = lengthInput.value;
    updateDraw();
  });
});

widthInput.addEventListener('mousemove', () => {
  window.requestAnimationFrame( () => {
    document.getElementById('width').innerHTML = widthInput.value;
    updateDraw();
  });
});

angleInput.addEventListener('mousemove', () => {
  window.requestAnimationFrame( () => {
    document.getElementById('angle').innerHTML = angleInput.value;
    updateDraw();
  });
});

scaleInput.addEventListener('mousemove', () => {
  window.requestAnimationFrame( () => {
    document.getElementById('scale').innerHTML = scaleInput.value;
    updateDraw();
  });
});

rotationInput.addEventListener('mousemove', () => {
  window.requestAnimationFrame( () => {
    document.getElementById('rotation').innerHTML = rotationInput.value;
    updateDraw();
  });
});

computeC.addEventListener('click', () => updateDraw());

function updateDraw() {
  drawFractalCircle(ctx,
    Number.parseFloat(angleInput.value)/100,
    Number.parseFloat(scaleInput.value)/100,
    Number.parseFloat(rotationInput.value)/100,
    Number.parseFloat(widthInput.value)/100,
    Number.parseInt(lengthInput.value));
}

function drawFractalCircle(ctx, angle, scale, rotation, width, length, clear = true) {
  ctx.resetTransform();
  if (clear) ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.translate((canvas.width/3)*2, canvas.height/2);
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