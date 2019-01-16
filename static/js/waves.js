const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

window.onload = function () {
  canvas.width = canvas.parentElement.clientWidth;
  canvas.height = canvas.parentElement.clientHeight;
  window.requestAnimationFrame(draw);
};

function draw() {
  let time = 0;
  let radius = 100;
  let wave = [];
  return (function animate() {
    time -= 0.02;
    let x = radius * Math.cos(time);
    let y = radius * Math.sin(time);
    wave.unshift({ t: time, y: y });
    ctx.resetTransform();
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.translate(300, 200);
    ctx.beginPath();
    ctx.arc(100, 0, radius, 0, 2 * Math.PI, false);
    ctx.moveTo(100, 0);
    ctx.translate(100, 0);
    ctx.lineTo(x, y);
    ctx.arc(x, y, 5, 0, 2 * Math.PI, false);
    ctx.stroke();
    drawWave(time, y);
    window.requestAnimationFrame(animate);
  })();
  async function drawWave(time, y) {
    ctx.translate(500, 0);
    //ctx.arc(time, y, 5, 0, 2 * Math.PI, false);
    for (let i = 0; i < wave.length; i++) {
      ctx.arc(i+10, wave[i].y, 2, 0, 2 * Math.PI, false);
    }
    if (wave.length > 1000) wave.pop();
    ctx.stroke();
  }
}