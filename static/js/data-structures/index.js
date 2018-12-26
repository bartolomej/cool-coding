const addButton = document.getElementById('addB');
const keyInput = document.getElementById('keyInput');
const valueInput = document.getElementById('valueInput');
const getButton = document.getElementById('getB');
const outputField = document.getElementById('output');
const display = document.getElementById('display');

class HashTable {
  constructor(size) {
    this.size = size;
    this.array = [];
  }

  add(key, object) {
    this.array[this.computeHash(key)] = object;
  }

  get(key) {
    return this.array[this.computeHash(key)];
  }

  computeHash(string) {
    let sumChar = 0;
    for (let i = 0; i < string.length; i++)
      sumChar += string.charCodeAt(i);
    return sumChar % this.size;
  }

}


let hashtable = new HashTable(10);

addButton.addEventListener('click', () => {
  hashtable.add(keyInput.value, valueInput.value);
  displayTable()
});

getButton.addEventListener('click', () => {
  outputField.innerText = 'OUTPUT: ' + hashtable.get(keyInput.value);
  displayTable()
});

function displayTable() {
  let text = '\n';
  hashtable.array.forEach((ele, index) => {
    text += (index.toString() + ': ' + ele + '\n');
  });
  display.innerText = text;
}