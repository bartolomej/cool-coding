function Graph(config) {
  this.canvas = document.getElementById(config.canvasId);
  this.max = {
    x: config.max.x,
    y: config.max.y
  };
  this.min = {
    x: config.min.x,
    y: config.min.y
  };
  this.drawAxis = function() {}
}