// 123. 买卖股票的最佳时机 III
// 最多可以完成两笔交易，设计一个算法计算最大利润
// 动态规划解法：定义5种状态分别表示不同交易阶段
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) { // 动态规划
    const len = prices.length;
    
    // 确定 dp 数组及其下标含义 
    // dp[i][0] 表示第i天不操作
    // dp[i][1] 表示第i天第一次持有
    // dp[i][2] 表示第i天第一次不持有
    // dp[i][3] 表示第i天第二次持有
    // dp[i][4] 表示第i天第二次不持有
    let dp = new Array(len).fill([0, 0, 0, 0, 0])

    // 确定递推公式
    // dp[i][0] = dp[i - 1][0]
    // dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] - prices[i])
    // dp[i][2] = Math.max(dp[i - 1][2], dp[i - 1][1] + prices[i])
    // dp[i][3] = Math.max(dp[i - 1][3], dp[i - 1][2] - prices[i])
    // dp[i][4] = Math.max(dp[i - 1][4], dp[i - 1][3] + prices[i])

    // 初始化 dp 数组
    dp[0][0] = 0
    dp[0][1] = -prices[0]
    dp[0][2] = 0
    dp[0][3] = - prices[0]
    dp[0][4] = 0

    // 确定遍历顺序
    // 根据递推公式 后面的值只能由前面推出  所以为从前向后遍历
    for (let i = 1; i < len; i++) {
        dp[i][0] = dp[i - 1][0]
        dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] - prices[i])
        dp[i][2] = Math.max(dp[i - 1][2], dp[i - 1][1] + prices[i])
        dp[i][3] = Math.max(dp[i - 1][3], dp[i - 1][2] - prices[i])
        dp[i][4] = Math.max(dp[i - 1][4], dp[i - 1][3] + prices[i])
    }

    // 两次卖出的状态现金最大一定是最后一次卖出
    // 第一次卖出已经是最大值了，那么我们可以在当天立刻买入再立刻卖出
    // 只需要考虑第二次卖出的状态
    return dp[len - 1][4]
};



var maxProfit = function(prices) { // 动态规划 滚动数组
    const len = prices.length;
    
    let have1 = -prices[0] // 第一次买入
    let have2 = -prices[0] // 第二次买入
    let not1 = 0 // 第一次卖出
    let not2 = 0 // 第二次卖出

    for (let i = 1; i < len; i++) {
        have1 = Math.max(have1, -prices[i])
        not1 = Math.max(not1, have1 + prices[i])
        have2 = Math.max(have2, not1 - prices[i])
        not2 = Math.max(not2, have2 + prices[i])
    }

    return not2
};