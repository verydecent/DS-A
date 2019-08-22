class Queue {
  constructor() {
    this.items = [];
  }

  // Peek
  peek() {
    return this.items[this.items.length - 1];
  }
  // isEmpty
  isEmpty() {
    if (this.items.length == 0) {
      return true;
    }
    else {
      return false;
    }
  }
  // Return Values
  printValues() {
    let str = "";
    for (let item of this.items) {
      str += item + " ";
    }
    return str;
  }
  // Queue
  queue(item) {
    this.items.push(item)
  }
  // Dequeue
  dequeue() {
    return this.items.pop();
  }
}

const queue = new Queue();
queue.queue(1);
queue.queue(1);
console.log(queue.printValues());