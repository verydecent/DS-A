class Queue {
  constructor() {
    this.items = [];
  }

  // Main Methods
  
  // Enqueue (item)
  enqueue(element) {
    this.items.push(element);
  }
  // Dequeue
  dequeue() {
    if (this.isEmpty()) return "Underflow";
    return this.items.shift();
  }
  // Peek
  peek() {
    if (this.isEmpty()) return "No elements in Queue";
    return this.items[0];
  }

  // Helper Methods

  // isEmpty
  isEmpty() {
    if (this.items.length == 0) return true;
  }
  // printQueue
  printQueue() {
    let str = "";
    for (let item of this.items) {
      str += item + " ";
    }
    return str;
  }
}

const queue = new Queue();

queue.enqueue("Wonjae");
queue.enqueue("Hwang");
queue.enqueue("Is");
queue.enqueue("Currently");
queue.enqueue("On");
queue.enqueue("The");
queue.enqueue("Job");
queue.enqueue("Search");
queue.enqueue("And");
queue.enqueue("He");
queue.enqueue("Is");
queue.enqueue("Anxious");
queue.enqueue("So");
queue.enqueue("He");
queue.enqueue("Is");
queue.enqueue("Studying");
queue.enqueue("To");
queue.enqueue("Prepare");

console.log(queue.printQueue());

queue.dequeue();
queue.dequeue();
queue.dequeue();
queue.dequeue();
queue.dequeue();

console.log(queue.printQueue());

console.log(queue.peek());
queue.dequeue();
console.log(queue.peek());