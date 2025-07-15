// 70. 爬楼梯
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    // 动规五部曲
    // 1. 确定dp数组及下标含义 dp[i]表示爬到第 i 层楼梯的方法
    // 2. 确定递推公式 dp[i] = dp[i - 1] + dp[i - 2]
    // 3. dp数组如何初始化 dp[0] = 1, dp[1] = 1
    // 4. 确定遍历顺序 从前往后
    // 5. 打印dp数组 找出debug
    dp = []
    dp[0] = 1, dp[1] = 1
    for(let i = 2; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2]
    }
    return dp[n]
};


var climbStairs = function(n) { // 动规压缩
    let pre1 = 1
    let pre2 = 1
    let temp
    for(let i = 2; i <= n; i++) {
        temp = pre1
        pre1 = pre1 + pre2
        pre2 = temp
    }
    return pre1
};