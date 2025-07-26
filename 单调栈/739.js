// 739. 每日温度
/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    const len = temperatures.length
    let res = new Array(len).fill(0)
    let stack = [] // 递增栈 用来存储右面第一个比它大的元素的下标
    stack.push(0)
    for (let i = 1; i < len; i++) {
        // 栈顶元素
        const top = stack[stack.length - 1]
        if (temperatures[i] < temperatures[top]) {
            stack.push(i)
        } else if (temperatures[i] === temperatures[top]) {
            stack.push(i)
        } else {
            while (stack.length && temperatures[i] > temperatures[stack[stack.length - 1]]) {
                let index = stack.pop()
                res[index] = i - index
            }
            stack.push(i)
        }
    }
    return res
};



var dailyTemperatures = function(temperatures) {
    const len = temperatures.length
    let res = new Array(len).fill(0)
    let stack = []

    for (let i = 0; i < len; i++) {
        while (stack.length && temperatures[i] > temperatures[stack[stack.length - 1]]) {
            let index = stack.pop()
            res[index] = i - index
        }
        stack.push(i)
    }

    return res
};