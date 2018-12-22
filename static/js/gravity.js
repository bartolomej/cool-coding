const canvas = document.getElementById('canvas-view').getContext('2d');

let balls = [];

window.onload = function() {
  canvas.canvas.height = window.innerHeight;
  canvas.canvas.width = window.innerWidth;
  balls.push(new Ball(10, 10, 10));
  balls.push(new Ball(30, 30, 10));
  drawAll(balls);
  animateAll(balls, 100, 100);
};

function drawAll(array) {
  for (let i = 0; i < array.length; i++) {
    array[i].draw();
  }
}

function animateAll(array, forX, forY) {
  setInterval(() => {
    array[0].animate(forX, forY)
  }, 100);
}

addEventListener('resize', () => {
  canvas.height = innerHeight;
  canvas.width = innerWidth;
  init();
});

addEventListener('mousemove', (event) => {
  //console.log(event.clientX);
  //console.log(event.clientY);
});

setInterval(() => {

}, 30);

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
  this.animate = function(moveForX, moveForY) {
    this.x = this.x + 1;
    this.y = this.y + 1;
    this.draw();
  }
}