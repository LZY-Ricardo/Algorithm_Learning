// 232. 用栈实现队列

var MyQueue = function() {
    this.inStack = []
    this.outStack = []
};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    this.inStack.push(x)
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    if (this.outStack.length) {
        return this.outStack.pop()
    } else {
        while (this.inStack.length) {
            this.outStack.push(this.inStack.pop())
        }
        return this.outStack.pop()
    }
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    if (!this.outStack.length) {
        while (this.inStack.length) {
            this.outStack.push(this.inStack.pop())
        }
    }
    return this.outStack[this.outStack.length - 1]
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    return this.outStack.length === 0 && this.inStack.length === 0
};

/** 
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */