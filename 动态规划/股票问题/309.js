// 309. 买卖股票的最佳时机含冷冻期
/**
 * @param {number[]} prices
 * @return {number}
 */
/**
 * 309. 最佳买卖股票时机含冷冻期
 * 解决思路: 动态规划
 * 
 * @param {number[]} prices - 股票价格数组
 * @return {number} - 最大利润
 */
var maxProfit = function(prices) {
    const n = prices.length

    // 边界条件: 如果数组长度小于2，无法完成交易
    if (n < 2) {
        return 0
    }

    // 创建dp数组
    // dp[i][0]: 第i天持有股票的最大利润
    // dp[i][1]: 第i天卖出股票的最大利润
    // dp[i][2]: 第i天处于冷却期的最大利润
    let dp = new Array(n).fill().map(() => new Array(3).fill(0))

    // 初始化
    dp[0][0] = -prices[0]  // 第一天买入股票
    dp[0][1] = 0           // 第一天不可能卖出股票
    dp[0][2] = 0           // 第一天不可能处于冷却期

    // 状态转移
    for (let i = 1; i < n; i++) {
        // 第i天持有股票: 要么之前就持有，要么冷却期后买入
        dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][2] - prices[i])
        // 第i天卖出股票: 只能是之前持有股票，然后在第i天卖出
        dp[i][1] = dp[i - 1][0] + prices[i]
        // 第i天处于冷却期或处于可买入状态: 要么之前就处于可买入状态，要么是之前卖出股票后进入冷却期
        dp[i][2] = Math.max(dp[i - 1][2], dp[i - 1][1])
    }

    // 最终返回: 最后一天卖出股票或者处于冷却期的最大利润
    return Math.max(dp[n - 1][1], dp[n - 1][2])
}


var maxProfit = function(prices) {
    const n = prices.length

    // 边界条件: 如果数组长度小于2，无法完成交易
    if (n < 2) {
        return 0
    }

    // 创建dp数组
    // dp[i][0]: 第i天持有股票的最大利润
    // dp[i][1]: 第i天卖出股票的最大利润
    // dp[i][2]: 第i天处于冷冻期的最大利润
    // dp[i][3]: 第i天不处于冷冻期保持可买入股票状态的最大利润
    let dp = new Array(n).fill().map(() => new Array(4).fill(0))

    // 初始化
    dp[0][0] = -prices[0]  // 第一天买入股票
    dp[0][1] = 0           // 第一天不可能卖出股票
    dp[0][2] = 0           // 第一天不可能处于冷冻期
    dp[0][3] = 0           // 第一天不处于冷冻期且可买入

    // 状态转移
    for (let i = 1; i < n; i++) {
        // 第i天持有股票: 要么之前就持有，要么从可买入状态或冷冻期买入
        dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][3] - prices[i], dp[i - 1][2] - prices[i])
        // 第i天卖出股票: 只能是之前持有股票，然后在第i天卖出
        dp[i][1] = dp[i - 1][0] + prices[i]
        // 第i天处于冷冻期: 只能是之前卖出股票后进入冷冻期
        dp[i][2] = dp[i - 1][1]
        // 第i天不处于冷冻期且可买入: 要么之前就可买入，要么之前处于冷冻期
        dp[i][3] = Math.max(dp[i - 1][3], dp[i - 1][2])
    }

    // 最终返回: 最后一天卖出股票、处于冷冻期或可买入状态的最大利润
    return Math.max(dp[n - 1][1], dp[n - 1][2], dp[n - 1][3])
}


var maxProfit = function(prices) { // 一维数组 空间优化
    const n = prices.length

    // 边界条件: 如果数组长度小于2，无法完成交易
    if (n < 2) {
        return 0
    }

    let dp = new Array(4)

    // 初始化
    dp[0] = -prices[0]  // 第一天买入股票
    dp[1] = 0
    dp[2] = 0
    dp[3] = 0

    for (let i = 1; i < n; i++) {
        let t1 = dp[0] // 缓存前一天的持有股票状态
        let t2 = dp[1] // 缓存前一天的卖出股票状态
        dp[0] = Math.max(dp[0], dp[2] - prices[i], dp[3] - prices[i])
        dp[1] = t1 + prices[i]
        dp[2] = t2
        dp[3] = Math.max(dp[3], dp[2])
    }

    // 最终返回: 最后一天卖出股票、处于冷冻期或可买入状态的最大利润
    return Math.max(dp[1], dp[2], dp[3])
}