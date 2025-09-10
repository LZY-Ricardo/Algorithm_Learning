// 121. 买卖股票的最佳时机
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function maxProfit(prices) {
    const len = prices.length
    const dp = new Array(len).fill().map(() => new Array(2).fill(0))
    dp[0][0] = -prices[0]
    dp[0][1] = 0
    for (let i = 1; i < len; i++) {
        dp[i][0] = Math.max(dp[i - 1][0], -prices[i])
        dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] + prices[i])
    }
    return dp[len - 1][1]
}

    var maxProfit = function maxProfit(prices) {
        let min = Infinity
        let res = 0
        for (let i = 0; i < prices.length; i++) {
            min = Math.min(min, prices[i])
            res = Math.max(res, prices[i] - min)
        }
        return res
    }

console.log(maxProfit([7,1,5,3,6,4]));
