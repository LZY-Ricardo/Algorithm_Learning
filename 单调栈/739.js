// 739. 每日温度
/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    const len = temperatures.length;
    const stack = []; // 递减栈
    const res = new Array(len).fill(0); // 初始化结果数组

    for (let i = 0; i < len; i++) {
        // temperatures[i]
        while (stack.length &&temperatures[i] > temperatures[stack[stack.length - 1]]) {
            const top = stack.pop();
            res[top] = i -top

        }

        stack.push(i); // 入栈
    }

    return res;
};