// 746. 使用最小花费爬楼梯
/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
    // 动规五部曲
    // 1. 确定dp数组及下标含义 dp[i]表示爬到第 i 层楼梯的最小花费
    // 2. 确定递推公式 dp[i] = Math.min(dp[i - 1] + cost[i - 1], dp[i - 2] + cost[i - 2])
    // 3. dp数组如何初始化 dp[0] = 0, dp[1] = 0
    // 4. 确定遍历顺序 从前往后
    // 5. 打印dp数组 找出debug
    let dp = []
    dp[0] = 0
    dp[1] = 0
    for (let i = 2; i < cost.length; i++) {
        dp[i] = Math.min(dp[i - 1] + cost[i - 1], dp[i - 2] + cost[i - 2])
    }
    return Math.min(dp[cost.length - 1] + cost[cost.length - 1], dp[cost.length - 2] + cost[cost.length - 2])
};


var minCostClimbingStairs = function(cost) {
    let dp = []
    dp[0] = cost[0]
    dp[1] = cost[1]
    for (let i = 2; i < cost.length; i++) {
        dp[i] = Math.min(dp[i - 1], dp[i - 2]) + cost[i]
    }
    return Math.min(dp[cost.length - 1], dp[cost.length - 2])
};


var minCostClimbingStairs = function(cost) {
    let pre1 = 0
    let pre2 = 0
    for (let i = 2; i < cost.length; i++) {
       temp = pre1
       pre1 = Math.min(pre1 + cost[i - 1], pre2 + cost[i - 2])
       pre2 = temp
    }
    return Math.min(pre1 + cost[cost.length - 1], pre2 + cost[cost.length - 2])
};

var minCostClimbingStairs = function(cost) { // 动规 状态压缩
    let pre1 = cost[1]
    let pre2 = cost[0]
    let temp
    for (let i = 2; i < cost.length; i++) {
        temp = pre1
        pre1 = Math.min(pre1, pre2) + cost[i]
        pre2 = temp
    }
    return Math.min(pre2, pre1)
};