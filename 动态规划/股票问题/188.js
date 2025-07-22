// 188. 买卖股票的最佳时机 IV
// 最多可以完成k笔交易，设计一个算法计算最大利润
/**
 * @param {number} k - 最多可以完成的交易次数
 * @param {number[]} prices - 每天的股票价格
 * @return {number} - 最大利润
 */
var maxProfit = function(k, prices) {
    const n = prices.length;
    
    // 边界条件处理
    if (n === 0 || k === 0) return 0;
    
    // 优化：当k大于n/2时，相当于可以进行无限次交易
    if (k >= Math.floor(n / 2)) {
        let profit = 0;
        for (let i = 1; i < n; i++) {
            if (prices[i] > prices[i - 1]) {
                profit += prices[i] - prices[i - 1];
            }
        }
        return profit;
    }
    
    // 定义dp数组
    // dp[i][j][0]表示第i天最多进行j次交易且不持有股票的最大利润
    // dp[i][j][1]表示第i天最多进行j次交易且持有股票的最大利润
    let dp = new Array(n).fill(0).map(() => {
        return new Array(k + 1).fill(0).map(() => {
            return [0, 0];
        });
    });
    
    // 初始化dp数组
    // dp[0][j][0] = 0; // 第0天不持有股票，利润为0
    // dp[0][j][1] = -prices[0]; // 第0天持有股票，利润为负的第0天价格
    for (let j = 1; j <= k; j++) {
        dp[0][j][1] = -prices[0];
    }
    
    // 状态转移
    for (let i = 1; i < n; i++) {
        for (let j = 1; j <= k; j++) {
            // 不持有股票：要么之前就不持有，要么今天卖出
            dp[i][j][0] = Math.max(dp[i - 1][j][0], dp[i - 1][j][1] + prices[i]);
            // 持有股票：要么之前就持有，要么今天买入
            if (j === 1) {
                dp[i][j][1] = Math.max(dp[i - 1][j][1], -prices[i]);
            } else {
                dp[i][j][1] = Math.max(dp[i - 1][j][1], dp[i - 1][j - 1][0] - prices[i]);
            }
        }
    }
    
    return dp[n - 1][k][0];
};


var maxProfit = function(k, prices) {
    const n = prices.length;
    
    // 边界条件处理
    if (n === 0 || k === 0) return 0
    
    // 优化：当k大于n/2时，相当于可以进行无限次交易
    if (k > Math.floor(n / 2)) {
        let profit = 0
        for (let i = 1; i < prices.length; i++) {
            if (prices[i] > prices[i - 1]) {
                profit += prices[i] - prices[i - 1];
            }
        }
        return profit
    }
    
    // 定义dp数组
    // dp[i][j]
    // j 为0时 表示 第i天不进行操作所拥有的最大利润
    // j 为 奇数时 表示 第i天进行了第j次交易且持有股票的最大利润
    // j 为 偶数时 表示 第i天进行了第j次交易且不持有股票的最大利润
    let dp = new Array(n).map(() => new Array(2 * k + 1).fill(0));

    // 确定递推公式
    // dp[i][j] = Math.max(dp[i - 1][j], dp[i - 1][j - 1] - prices[i])
    // dp[i][j] = Math.max(dp[i - 1][j], dp[i - 1][j - 1] + prices[i])

    // 初始化 dp 数组
    // dp[0][0] = 0
    // 第 1 天买入利润都为 -prices[0]
    for (let i = 1; i < 2 * k + 1; i+=2) {
        dp[0][i] = -prices[0];
    }

    // 确定遍历顺序
    // 先遍历天数，再遍历交易次数
    for (let i = 1; i < n; i++) {
        for (let j = 1; j < 2 * k + 1; j++) {
            if (j % 2 === 1) {
                // 奇数状态：持有股票，可由前一天同一状态或前一天卖出状态+今天买入得到
                dp[i][j] = Math.max(dp[i - 1][j], dp[i - 1][j - 1] - prices[i]);
            } else {
                // 偶数状态：不持有股票，可由前一天同一状态或前一天持有状态+今天卖出得到
                dp[i][j] = Math.max(dp[i - 1][j], dp[i - 1][j - 1] + prices[i]);
            }
        }
    }
    
    // 返回最后一天完成k次交易且不持有股票的状态
    return dp[n - 1][2 * k];
};


var maxProfit = function(k, prices) { // 动态规划 状态压缩
    const n = prices.length;
    
    // 边界条件处理
    if (k === 0 || n <= 1) return 0;

    let dp = new Array(2 * k + 1).fill(0)

    // dp 数组初始化 买入都为 -prices[0]
    for (let i = 1; i < 2 * k + 1; i+=2) {
        dp[i] = -prices[0];
    }

    for (let i = 1; i < n; i++) {
        for (let j = 1; j < 2 * k + 1; j++) {
            // j 为奇数 买入状态
            if (j % 2 === 1) {
                dp[j] = Math.max(dp[j], dp[j - 1] - prices[i])
            } else {
                // j 为偶数 卖出状态
                dp[j] = Math.max(dp[j], dp[j - 1] + prices[i])
            }
        }
    }
    return dp[2 * k]
}
