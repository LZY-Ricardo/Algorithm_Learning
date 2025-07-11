// 122. 买卖股票的最佳时机 II
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let res = 0
    for (let i = 1; i < prices.length; i++) {
        // 贪心策略：如果当前价格比前一天高，就卖出
        if (prices[i] > prices[i - 1]) {
            res += prices[i] - prices[i - 1]
        }
    }
    return res
};