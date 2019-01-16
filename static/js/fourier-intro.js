const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
// TODO get user input & add UI

window.onload = function () {
  canvas.width = canvas.parentElement.clientWidth;
  canvas.height = canvas.parentElement.clientHeight;
  window.requestAnimationFrame(() => {
    draw([
      { r: 100, f: 0.04, t: 0 },
      { r: 50, f: 0.12, t: 0 },
      { r: 30, f: 0.20, t: 0 },
      { r: 20, f: 0.28, t: 0 },
    ])
  });
};

function draw(circles) {
  let wave = [];
  return (function animate() {
    for(let i = 0; i < circles.length; i++)
      circles[i].t += circles[i].f;
    ctx.resetTransform();
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.translate(300, 200);
    ctx.beginPath();
    let fy = 0;
    for (let i = 0; i < circles.length; i++) {
      let x = circles[i].r * Math.cos(circles[i].t);
      let y = circles[i].r * Math.sin(circles[i].t);
      ctx.arc(0, 0, circles[i].r, 0, 2 * Math.PI, false);
      ctx.moveTo(0, 0); // TODO remove that stupid line
      ctx.lineTo(x, y);
      ctx.save();
      ctx.translate(x, y);
      fy += y;
    }
    for (let i = 0; i < circles.length; i++) ctx.restore();
    ctx.stroke();
    wave.unshift({y: fy});
    drawWave();
    window.requestAnimationFrame(animate);
  })();
  function drawWave() {
    ctx.translate(500, 0);
    for (let i = 0; i < wave.length; i++)
      ctx.arc(i+10, wave[i].y, 2, 0, 2 * Math.PI, false);
    if (wave.length > 1000) wave.pop();
    ctx.stroke();
  }
}