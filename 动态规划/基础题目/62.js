// 62. 不同路径
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    // 动规五部曲
    // 1. 确定dp数组及下标含义 dp[i][j]表示到达第i行第j列的不同路径数量
    // 2. 确定递推公式 dp[i][j] = dp[i - 1][j] + dp[i][j - 1]
    // 3. dp数组如何初始化 dp[i][0] = 1, dp[0][j] = 1
    // 4. 确定遍历顺序 从左往右一行一行遍历
    // 5. 打印dp数组 找出debug
    let dp = new Array(m).fill(new Array(n))
    for (let i = 0; i < m; i++) {
        dp[i][0] = 1
    }
    for (let i = 0; i < n; i++) {
        dp[0][i] = 1
    }
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            dp[i][j] = dp[i - 1][j] + dp[i][j - 1]
        }
    }
    return dp[m - 1][n - 1]
};