// 122. 买卖股票的最佳时机 II
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) { // 动态规划
    const len = prices.length

    // 确定 dp 数组及其下标含义
    // dp[i][0] 表示第i天持有股票所得现金。
    // dp[i][1] 表示第i天不持有股票所得最多现金
    let dp = new Array(len).fill([0, 0])

    // 确定递推公式
    // 第i-1天就持有股票，那么就保持现状，所得现金就是昨天持有股票的所得现金 即：dp[i - 1][0]
    // 第i天持有股票即dp[i][0]，如果是第i天买入股票，所得现金就是昨天不持有股票的所得现金 减去 今天的股票价格 即：dp[i - 1][1] - prices[i]
    // dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] - prices[i])
    // // 第i-1天就不持有股票，那么就保持现状，所得现金就是昨天不持有股票的所得现金 即：dp[i - 1][1]
    // 第i天卖出股票，所得现金就是按照今天股票价格卖出后所得现金即：dp[i - 1][0] + prices[i]
    // dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] + prices[i])
    
    // 初始化 dp 数组
    dp[0][0] = -prices[0]
    dp[0][1] = 0

    // 确定遍历顺序
    for (let i = 1; i < len; i++){
        dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] - prices[i])
        dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] + prices[i])
    }

    return dp[len - 1][1]
};




var maxProfit = function(prices) { // 动态规划 滚动数组
    const len = prices.length

    let have = -prices[0]
    let notHave = 0

    for (let i = 1; i < len; i++) {
        have = Math.max(have, notHave - prices[i])
        notHave = Math.max(notHave, have + prices[i])
    }

    return notHave
};




var maxProfit = function(prices) { // 贪心
    let res = 0
    for (let i = 1; i < prices.length; i++) {
        // 贪心策略：如果当前价格比前一天高，就卖出
        if (prices[i] > prices[i - 1]) {
            res += prices[i] - prices[i - 1]
        }
    }
    return res
};