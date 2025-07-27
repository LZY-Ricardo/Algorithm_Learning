// 42. 接雨水
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) { // 单调栈
    const n = height.length;
    let res = 0; // 存储能接的雨水总量
    const stack = []; // 单调栈，存储柱子的索引，栈中元素对应的高度是递减的
    stack.push(0); // 初始化栈，放入第一个柱子的索引

    // 遍历所有柱子
    for (let i = 1; i < n; i++) {
        // 情况1：当前柱子高度小于栈顶柱子高度，直接入栈
        if (height[i] < height[stack[stack.length - 1]]) {
            stack.push(i);
        }
        // 情况2：当前柱子高度等于栈顶柱子高度，更新栈顶元素
        else if (height[i] === height[stack[stack.length - 1]]) {
            stack.pop(); // 弹出相同高度的栈顶元素
            stack.push(i); // 压入当前柱子索引
        }
        // 情况3：当前柱子高度大于栈顶柱子高度，开始计算能接的雨水
        else {
            // 当栈不为空且当前柱子高度大于栈顶柱子高度时
            while (stack.length && height[i] > height[stack[stack.length - 1]]) {
                const index = stack.pop(); // 弹出栈顶元素（凹槽的底部）
                // 如果栈为空，说明没有左边界，无法接雨水
                if (!stack.length) break;
                // 计算凹槽的高度：左右边界的最小值减去凹槽底部的高度
                const h = Math.min(height[stack[stack.length - 1]], height[i]) - height[index];
                // 计算凹槽的宽度：右边界索引减去左边界索引再减1
                const w = i - stack[stack.length - 1] - 1;
                // 累加雨水总量
                res += h * w;
            }
            // 将当前柱子索引入栈
            stack.push(i);
        }
    }
    return res;
};

var trap = function(height) { // 单调栈 优化
    const n = height.length
    if (n <= 2) return 0
    let res = 0
    let stack = []
    stack.push(0)
    for (let i = 1; i < n; i++) { // 只处理情况三 把情况一和情况二融合
        while (stack.length && height[i] > height[stack[stack.length - 1]]) {
            let mid = stack.pop()
            if(stack.length) {
                let h = Math.min(height[i], height[stack[stack.length - 1]]) - height[mid]
                let w = i - stack[stack.length - 1] - 1 // 要减一 只要中间宽度
                res += h * w
            }
        }
        stack.push(i)
    }
    return res
};

var trap = function(height) { // 暴力解法 超时
    const len = height.length;
    let sum = 0;
    for(let i = 0; i < len; i++){
        // 第一个柱子和最后一个柱子不接雨水
        if(i == 0 || i == len - 1) continue;
        let rHeight = height[i]; // 记录右边柱子的最高高度
        let lHeight = height[i]; // 记录左边柱子的最高高度
        for(let r = i + 1; r < len; r++){
            if(height[r] > rHeight) rHeight = height[r];
        }
        for(let l = i - 1; l >= 0; l--){
            if(height[l] > lHeight) lHeight = height[l];
        }
        let h = Math.min(lHeight, rHeight) - height[i];
        if(h > 0) sum += h;
    }
    return sum;
};


var trap = function(height) { // 双指针
    const len = height.length;
    if(len <= 2) return 0;
    const maxLeft = new Array(len).fill(0);
    const maxRight = new Array(len).fill(0);
    // 记录每个柱子左边柱子最大高度
    maxLeft[0] = height[0];
    for(let i = 1; i < len; i++){
        maxLeft[i] = Math.max(height[i], maxLeft[i - 1]);
    }
    // 记录每个柱子右边柱子最大高度
    maxRight[len - 1] = height[len - 1];
    for(let i = len - 2; i >= 0; i--){
        maxRight[i] = Math.max(height[i], maxRight[i + 1]);
    }
    // 求和
    let sum = 0;
    for(let i = 0; i < len; i++){
        let count = Math.min(maxLeft[i], maxRight[i]) - height[i];
        if(count > 0) sum += count;
    }
    return sum;
};