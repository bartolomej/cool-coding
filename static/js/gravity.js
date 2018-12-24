const canvas = document.getElementById('canvas-view').getContext('2d');

let balls = [];

window.onload = function() {
  init();
};

function init() {
  canvas.canvas.height = window.innerHeight;
  canvas.canvas.width = window.innerWidth;
}

function animate() {
  requestAnimationFrame(animate);
  for (let i = 0; i < balls.length; i++) {
    balls[i].update();
  }
}

addEventListener('resize', () => {
  init();
});

addEventListener('mousemove', (event) => {
  //console.log(event.clientX);
  //console.log(event.clientY);
});

function Ball(width, height, radius, color) {
  this.x = width;
  this.y = height;
  this.radius = radius;
  this.color = color;
  this.draw = function() {
    canvas.beginPath();
    canvas.arc(
      this.x,
      this.y,
      this.radius,
      0,
      Math.PI * 2,
      false);
    canvas.fillStyle = this.color;
    canvas.fill();
    canvas.closePath();
  };
  this.animate = function(moveToX, moveToY, time) {
    setInterval(() => {
      canvas.clearRect(0, 0, innerWidth, innerHeight);
      this.x += 0.5;
      this.y += 0.5;
      this.draw();
    }, time);
  }
}