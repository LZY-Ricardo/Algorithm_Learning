// 714. 买卖股票的最佳时机含手续费
/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */
var maxProfit = function(prices, fee) {
    const n = prices.length

    // 边界条件: 如果数组长度为0，无法完成交易
    if (n === 0) {
        return 0
    }

    // 创建dp数组
    // dp[i][0]: 第i天持有股票的最大利润
    // dp[i][1]: 第i天不持有股票的最大利润
    let dp = new Array(n).fill().map(() => new Array(2).fill(0))

    // 初始化
    dp[0][0] = -prices[0]  // 第一天买入股票
    dp[0][1] = 0           // 第一天不持有股票

    // 状态转移
    for (let i = 1; i < n; i++) {
        // 第i天持有股票: 要么之前就持有，要么之前不持有然后买入
        dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] - prices[i])
        // 第i天不持有股票: 要么之前就不持有，要么之前持有然后卖出(扣除手续费)
        dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] + prices[i] - fee)
    }
    
    // 最终返回: 最后一天不持有股票的最大利润
    return dp[n - 1][1]
};


var maxProfit = function(prices, fee) { // 滚动数组
    const n = prices.length

    if (n === 0) return 0

    let have = -prices[0]
    let notHave = 0

    for (let i = 1; i < n; i++) {
        have = Math.max(have, notHave - prices[i])
        notHave = Math.max(notHave, have + prices[i] - fee)
    }
    
    return notHave
};