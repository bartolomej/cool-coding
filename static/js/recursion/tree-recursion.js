const lengthInput = document.getElementById('length-input');
const widthInput = document.getElementById('width-input');
const angleInput = document.getElementById('angle-input');
const scaleInput = document.getElementById('scale-input');
const computeT = document.getElementById('computeT');
let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');


canvas.width = canvas.parentElement.clientWidth;
canvas.height = canvas.parentElement.clientHeight;

listener("mousedown");
listener("mousemove");
listener("keydown");

function listener(eventType) {
  let prevLength = 50;
  let prevWidth = 1;
  let prevAngle = 0.4;
  let prevScale = 0.4;

  lengthInput.addEventListener(eventType, () => {
    window.requestAnimationFrame( () => {
      document.getElementById('length').innerHTML = lengthInput.value;
      if (lengthInput.value !== prevLength) {
        updateDraw();
        prevLength = lengthInput.value
      }
    });
  });

  widthInput.addEventListener(eventType, () => {
    window.requestAnimationFrame( () => {
      document.getElementById('width').innerHTML = widthInput.value;
      if (widthInput.value !== prevWidth) {
        updateDraw();
        prevWidth = widthInput.value
      }
    });
  });

  angleInput.addEventListener(eventType, () => {
    window.requestAnimationFrame( () => {
      document.getElementById('angle').innerHTML = angleInput.value;
      if (angleInput.value !== prevAngle) {
        updateDraw();
        prevAngle = angleInput.value
      }
    });
  });

  scaleInput.addEventListener(eventType, () => {
    window.requestAnimationFrame( () => {
      document.getElementById('scale').innerHTML = scaleInput.value;
      if (scaleInput.value !== prevScale) {
        updateDraw();
        prevScale = scaleInput.value
      }
    });
  });

  computeT.addEventListener('click', () => updateDraw());
}


function updateDraw() {
  drawTree(ctx,
    Number.parseFloat(angleInput.value)/100,
    Number.parseFloat(scaleInput.value)/100,
    Number.parseFloat(widthInput.value)/100,
    Number.parseInt(lengthInput.value));
}


function drawTree(ctx, angle, scale, width, length, clear = true) {
  ctx.resetTransform();
  if (clear) ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.translate(canvas.width/2, canvas.height/2);
  ctx.rotate(Math.PI);
  ctx.save();
  branch(length, angle, scale);

  function branch(length, angle, scale) {
    ctx.fillRect(0, 0, width, length);
    if (length < 2) return;
    ctx.save();
    ctx.translate(0, length);
    ctx.rotate(-angle);
    branch(length * scale, angle, scale);
    ctx.rotate(angle * 2);
    branch(length * scale, angle, scale);
    ctx.restore();
  }
}