class Stack {
  constructor() {
    this.items = [];
  }
  // Push(item)
  push(element) {
    this.items.push(element);
  }
  // Pop()
  pop() {
    if (this.isEmpty()) return "Underflow";
    return this.items.pop();
  }
  // Peek()
  peek() {
    return this.items[this.items.length - 1];
  }
  // isEmpty()
  isEmpty() {
    return this.items.length == 0;
  }
  // printStack()
  printStack() {
    let str = "";
    for (let item of this.items) {
      str += item + " ";
    }
    return str;
  }
}

const stack = new Stack();

stack.push(23);
stack.push(24);
stack.push(34);
stack.push(1);
stack.push(12);
stack.push(25);

console.log(stack.printStack());

stack.pop();
stack.pop();
stack.pop();
console.log(stack.printStack());


stack.pop();
stack.pop();
stack.pop();
console.log(stack.pop());
console.log(stack.printStack());

stack.push(99);
console.log(stack.peek());
stack.push(30);
console.log(stack.peek());
