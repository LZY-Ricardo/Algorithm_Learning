// 121. 买卖股票的最佳时机
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function maxProfit(prices) {
    const len = prices.length
    
    // 确定 dp 数组及其下标含义
    // dp[i][0] 表示第i天持有股票所得最多现金
    // dp[i][1] 表示第i天不持有股票所得最多现金
    let dp = new Array(len).fill().map(() => new Array(2).fill(0))

    // 确定递推公式
    // 如果第i天持有股票即dp[i][0]， 那么可以由两个状态推出来
    // 第i-1天就持有股票，那么就保持现状，所得现金就是昨天持有股票的所得现金 即：dp[i - 1][0]
    // 第i天买入股票，所得现金就是买入今天的股票后所得现金即：-prices[i]
    // 那么dp[i][0]应该选所得现金最大的，所以dp[i][0] = max(dp[i - 1][0], -prices[i])

    // 如果第i天不持有股票即dp[i][1]， 也可以由两个状态推出来
    // 第i-1天就不持有股票，那么就保持现状，所得现金就是昨天不持有股票的所得现金 即：dp[i - 1][1]
    // 第i天卖出股票，所得现金就是按照今天股票价格卖出后所得现金即：prices[i] + dp[i - 1][0]
    // dp[i][1]取最大的，dp[i][1] = max(dp[i - 1][1], prices[i] + dp[i - 1][0]);

    // dp[i][0] = max(dp[i - 1][0], -prices[i])
    // dp[i][1] = max(dp[i - 1][1], prices[i] + dp[i - 1][0])

    // dp 数组初始化 由递归公式可得 dp[0][0] 和 dp[0][1] 都需要初始化
    // dp[0][0]表示第0天持有股票，此时的持有股票就一定是买入股票了，因为不可能有前一天推出来，所以dp[0][0] -= prices[0]
    dp[0][0] = -prices[0]
    // dp[0][1]表示第0天不持有股票，不持有股票那么现金就是0，所以dp[0][1] = 0
    dp[0][1] = 0

    // 确定遍历顺序
    // 从递推公式可以看出dp[i]都是由dp[i - 1]推导出来的，那么一定是从前向后遍历
    for (let i = 1; i < len; i++) {
        dp[i][0] = Math.max(dp[i - 1][0], -prices[i])
        dp[i][1] = Math.max(dp[i - 1][1], prices[i] + dp[i - 1][0])
    }

    return dp[len - 1][1]
}


var maxProfit = function maxProfit(prices) { // 贪心解法
    // 取最左最小值，取最右最大值，那么得到的差值就是最大利润
    let low = Infinity
    let res = 0

    for (let i = 0; i < prices.length; i++) {
        low = Math.min(low, prices[i])
        res = Math.max(res, prices[i] - low)
    }
    return res
}