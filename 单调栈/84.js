// 84. 柱状图中最大的矩形
/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
    // 在数组前后添加0，便于处理边界情况
    heights.unshift(0) // [8, 6, 4, 2]
    heights.push(0) // [2, 4, 6, 8]
    const len = heights.length;
    // 初始化单调栈，存储索引
    let stack = []
    // 先将第一个元素的索引入栈
    stack.push(0)
    // 初始化最大面积
    let maxArea = 0
    
    // 遍历数组
    for (let i = 1; i < len; i++) {
        // 当栈不为空且当前高度小于栈顶索引对应的高度时
        // 说明找到了一个可以计算面积的柱子
        while (stack.length && heights[i] < heights[stack[stack.length - 1]]) {
            // 弹出栈顶元素作为中间柱子
            let mid = stack.pop()
            // 中间柱子的高度
            const height = heights[mid]
            // 计算宽度 = 右边界(i) - 左边界(新的栈顶) - 1 不用考虑stack为空的情况因为在数组头部添加了0
            const width = i - stack[stack.length - 1] - 1
            // 更新最大面积
            maxArea = Math.max(maxArea, height * width)
        }
        // 将当前索引入栈
        stack.push(i)
    }
    
    return maxArea
};


var largestRectangleArea = function(heights) {
    const len = heights.length;
    // minLeft[i]表示第i个柱子左侧第一个比它小的柱子的索引
    const minLeft = new Array(len).fill(0);
    // minRight[i]表示第i个柱子右侧第一个比它小的柱子的索引
    const minRight = new Array(len).fill(0);
    // 存储最大矩形面积
    let maxArea = 0;

    // 初始化左边界
    minLeft[0] = -1;
    // 填充minLeft数组
    for (let i = 1; i < len; i++) {
        let t = i - 1;
        // 寻找左侧第一个比当前柱子小的柱子
        while (t >= 0 && heights[t] >= heights[i]) {
            // 优化：直接跳转到上一个更小的柱子
            t = minLeft[t];
        }
        minLeft[i] = t;
    }

    // 初始化右边界
    minRight[len - 1] = len;
    // 填充minRight数组
    for (let i = len - 2; i >= 0; i--) {
        let t = i + 1;
        // 寻找右侧第一个比当前柱子小的柱子
        while (t < len && heights[t] >= heights[i]) {
            // 优化：直接跳转到下一个更小的柱子
            t = minRight[t];
        }
        minRight[i] = t;
    } 

    // 计算每个柱子对应的最大矩形面积
    for (let i = 0; i < len; i++) {
        const h = heights[i];
        // 宽度 = 右侧第一个小柱子索引 - 左侧第一个小柱子索引 - 1
        const w = minRight[i] - minLeft[i] - 1;
        // 更新最大面积
        maxArea = Math.max(maxArea, h * w);
    }

    return maxArea;
};