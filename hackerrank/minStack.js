/**
 * initialize your data structure here.
 */
var MinStack = function() {
  this.minStack = [];
  this.stack = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
  this.stack.push(x);
  if (
    this.minStack.length < 1 ||
    x <= this.minStack[this.minStack.length - 1]
  ) {
    this.minStack.push(x);
    console.log(this.minStack);
  }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
  let popped = this.stack.pop();
  if (popped === this.minStack[this.minStack.length - 1]) {
    this.minStack.pop();
  }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
  return this.stack[this.stack.length - 1] || null;
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
  return this.minStack[this.minStack.length - 1] || null;
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
