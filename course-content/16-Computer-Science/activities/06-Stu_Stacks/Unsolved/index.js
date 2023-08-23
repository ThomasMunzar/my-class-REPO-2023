// create the Stack class with two methods to remove and add an element
class Stack {
    constructor(container = []) {
        this.container = container;
      }
      // add item to top of stack
      addToStack(el) {
        return this.container.push(el);
      }
      //remove item from top of stack
      pop(){
        return this.container.pop();
    }


}

module.exports = Stack;

// DATA STRUCTURES
// QUEUE
// STACK
// 