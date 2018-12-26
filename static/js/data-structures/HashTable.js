export default class HashTable {
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