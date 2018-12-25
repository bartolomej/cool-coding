export class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  peek() {
    if (this.tail === null)
      return new Error('Queue empty');
    return this.tail.data;
  }

  getSize() {
    return this.size;
  }

  add(data) {
    let node = new Node(data, null);
    if (this.head === null)
      this.head = node;
    if (this.tail !== null)
      this.tail.next = node;
    this.tail = node;
    this.size++;
  }

  remove() {
    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
      this.size--;
    } else {
      this.head = this.head.next;
      this.size--;
    }
  }

}

class Node {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}