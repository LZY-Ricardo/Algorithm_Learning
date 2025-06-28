// 225. 用队列实现栈

// 两个队列实现栈
var MyStack = function() {
    this.queue = []
    this.tmpQueue = []
};

/** 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
    this.queue.push(x)
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function() {
    while (this.queue.length > 1) {
        this.tmpQueue.push(this.queue.shift())
    }
    let res = this.queue.shift()
    while (this.tmpQueue.length) {
        this.queue.push(this.tmpQueue.shift())
    }
    return res
};

/**
 * @return {number}
 */
MyStack.prototype.top = function() {
    if (this.tmpQueue.length) {
        return this.tmpQueue[this.tmpQueue.length - 1]
    } else if (this.queue.length) {
        return this.queue[this.queue.length - 1]
    }
    return undefined
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
    return this.queue.length === 0 && this.tmpQueue.length === 0 ? true : false
};

/** 
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */



// 一个队列实现栈
var MyStack = function() {
    this.queue = []
};

/** 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
    this.queue.push(x)
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function() {
    let len = this.queue.length 
    while (len-- > 1) {
        this.queue.push(this.queue.shift())
    }
    return this.queue.shift()
};

/**
 * @return {number}
 */
MyStack.prototype.top = function() {
    return this.queue.length ? this.queue[this.queue.length - 1] : undefined
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
    return this.queue.length === 0 
};

/** 
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */