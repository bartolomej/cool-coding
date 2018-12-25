export class Stack {
  constructor(maxSize = null) {
    this.MAX = maxSize;
    this.size = 0;
    this.top = null;
  }

  push(data) {
    if (this.size >= this.MAX)
      return new Error("Stack overflow");
    this.top = new Node(data, this.top);
    this.size++;
  }

  pop() {
    this.top = this.top.next;
    this.size--;
  }

  peek() {
    return this.top.data;
  }

  isEmpty() {
    return this.size === 0 && this.top === null;
  }

  getSize() {
    return this.size;
  }

}

class Node {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}