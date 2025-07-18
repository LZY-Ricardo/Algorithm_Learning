// 474. 一和零
/**
 * @param {string[]} strs
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var findMaxForm = function (strs, m, n) { // 动态规划 滚动数组
    // dp数组及其下标含义 最多有i个0和j个1的strs的最大子集的大小为dp[i][j]
    let dp = new Array(m + 1).fill().map(() => new Array(n + 1).fill(0))
    // 递推公式 dp[i][j] = Math.max(dp[i][j], dp[i - ZeroNum][j - OneNum] + 1)
    // dp数组初始化 dp[0][0] = 0 其他初始化为0 背包容量为0 能装的最大子集的大小为0
    // 遍历顺序 先遍历物品 再遍历背包 同时背包要倒序遍历 确保每个物品只被添加一次
    for (const str of strs) {
        // x 为0的数量 y 为1的数量
        let x = 0, y = 0
        for (let c of str) {
            if (c === '0') x++
            else y++
        }
        for (let i = m; i >= x; i--) {
            for (let j = n; j >= y; j--) {
                dp[i][j] = Math.max(dp[i][j], dp[i - x][j - y] + 1)
            }
        }
    }
    return dp[m][n]
}



var findMaxForm = function (strs, m, n) {
    const len = strs.length
    // dp数组及其下标含义 前 i 个字符串中，使用 j 个 0 和 k 个 1 的情况下最多可以得到的字符串数量
    let dp = new Array(len + 1).fill().map(() => new Array(m + 1).fill().map(() => new Array(n + 1).fill(0)))
    // 递推公式 dp[i][j] = Math.max(dp[i - 1][j][k], dp[i - 1][j - zeroNum][k - oneNum] + 1)
    // dp数组初始化 dp[0][0 ~ m][0 ~ n] = 0 背包容量为0 能装的最大子集的大小为0
    // 遍历顺序 先物品后背包
    for (let i = 1; i < len + 1; i++) {
        // x 为0的数量 y 为1的数量
        let x = 0, y = 0
        for (let c of strs[i - 1]) {
            if (c === '0') x++
            else y++
        }
        for (let j = 0; j < m + 1; j++) {
            for (let k = 0; k < n + 1; k++) {
                if (j < x || k < y) {
                    dp[i][j][k] = dp[i - 1][j][k]
                } else {
                    dp[i][j][k] = Math.max(dp[i - 1][j][k], dp[i - 1][j - x][k - y] + 1)
                }
            }
        }
    }
    return dp[len][m][n]
}