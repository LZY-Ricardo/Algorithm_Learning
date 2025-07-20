// 279. 完全平方数
/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function(n) { // 二维 dp 数组
    let m = Math.floor(Math.sqrt(n))
    
    // 确定 dp[i][j] 数组及其下标含义 dp[i][j] 表示使用前 i 个完全平方数, 凑成 j 的完全平方数的最少数量
    let dp = new Array(m + 1).fill(0).map(() => new Array(n + 1).fill(0))

    // 确定递推公式 dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - i * i] + 1)

    // dp 数组初始化
    // dp[0][j]
    for (let j = 0; j < n + 1; j++) {
        dp[0][j] = j
    }
    // dp[i][0]
    // for (let i = 1; i < m ; i++) { // 背包容量为 0, 所需完全平方数为 0 该步骤可以省略 在定义dp数组时已经填充0
    //     dp[i][0] = 0
    // }

    // 确定遍历顺序
    for (let i = 1; i < m + 1; i++) {
        for (let j = 0; j < n + 1; j++) {
            if (j < i * i) {
                dp[i][j] = dp[i - 1][j]
            } else {
                dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - i * i] + 1)
            }
        }
    }
    return dp[m][n]
}


var numSquares = function(n) { // 一维 dp 数组
    let m = Math.floor(Math.sqrt(n))
    
    // 确定 dp[j] 数组及其下标含义 dp[j] 表示使用前 i 个完全平方数, 凑成 j 的完全平方数的最少数量
    let dp = new Array(n + 1).fill(0)

    // 确定递推公式 dp[j] = Math.min(dp[j], dp[j - i * i] + 1)

    // dp 数组初始化
    // dp[j]
    for (let j = 0; j < n + 1; j++) {
        dp[j] = j
    }

    // 确定遍历顺序
    // 先遍历物品再遍历背包
    // for (let i = 1; i < m + 1; i++) {
    //     for (let j = i * i; j < n + 1; j++) {
    //         dp[j] = Math.min(dp[j], dp[j - i * i] + 1)
    //     }
    // }
    // 先遍历背包再遍历物品
    for (let j = 0; j < n + 1; j++) {
        for (let i = 1; i < m + 1; i++) {
            if (j >= i * i) {
                dp[j] = Math.min(dp[j], dp[j - i * i] + 1)
            }
        }
    }
    return dp[n]
}


// n = 12
// numSquares(n)