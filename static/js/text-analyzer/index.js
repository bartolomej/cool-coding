let text = document.getElementById('text_input');
let submitButton = document.getElementById('submit');
let canvas = document.getElementById('my_canvas');
let ctx = canvas.getContext('2d');

window.onload = function() {
  init();
};

function init() {
  canvas.width = window.innerWidth;
}

let textObj = null;
let graphObj = null;

submitButton.addEventListener('click', () => {
  textObj = new Text(text.value);
  textObj.computeCharStats();
  graphObj = new Graph(textObj.characters);
  graphObj.graphData(20);
  text.value = '';
});


function Text(text) {
  this.alphabet = [
    'a', 'b', 'c', 'd', 'e',
    'f', 'g', 'i', 'j', 'k',
    'l', 'm', 'n', 'o', 'p',
    'r', 's', 't', 'u', 'v',
    'z', 'y'
  ];
  this.rawText = text;
  this.rawWords = text.split(' ');
  this.characters = {};
  this.words = {};
  this.computeCharStats = function() {
    for (let i = 0; i < this.alphabet.length; i++) {
      let statsL = this.rawText.match(
        new RegExp(this.alphabet[i], 'g'));
      if (statsL !== null)
        this.characters[this.alphabet[i]] = statsL.length;
      let statsU = this.rawText.match(
        new RegExp(this.alphabet[i].toUpperCase(), 'g'));
      if (statsU !== null)
        this.characters[this.alphabet[i]] += statsL.length;
    }
  };
  this.computeWordStats = function() {};
  this.graph = function() {};
}

function Graph(dataObject) {
  this.rowWidth = 30;
  this.rowMargin = 10;
  this.data = dataObject;
  this.getMaxValue = function () {
    let max = 0;
    for (let key in this.data)
      if (this.data[key] > max)
        max = this.data[key];
      return max;
  };
  this.graphData = function() {
    let position = { y: canvas.height - 30, x: 20 };
    let subValue = (position.y - 30) / this.getMaxValue();
    console.log(subValue)
    for (let key in this.data)  {
      ctx.fillStyle = "#33bb8e";
      ctx.font = '20px Arial';
      ctx.fillRect(position.x, position.y, this.rowWidth, -this.data[key] * subValue);
      if (this.data[key] < 10)
        ctx.fillText(this.data[key].toString(), position.x + this.rowWidth/3,position.y - this.data[key] * subValue - 10);
      else if (this.data[key] >= 10 && this.data[key] < 100)
        ctx.fillText(this.data[key].toString(), position.x + this.rowWidth/7,position.y - this.data[key] * subValue - 10);
      ctx.fillText(key, position.x + this.rowWidth/3, position.y + 20);
      position.x += this.rowWidth + this.rowMargin;
    }
  }
}