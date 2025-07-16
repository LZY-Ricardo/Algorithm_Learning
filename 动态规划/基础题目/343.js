// 343. 整数拆分
/**
 * @param {number} n
 * @return {number}
 */
var integerBreak = function(n) {
    // 初始化DP数组，dp[i]表示数字i拆分后的最大乘积
    let dp = new Array(n + 1).fill(0) 
    
    // 基础情况：
    // dp[0] = 0 (无意义，0不能被拆分)
    // dp[1] = 0 (1不能被拆分)
    // dp[2] = 1 (2只能拆分为1+1，乘积为1)
    dp[2] = 1
    
    // 从3开始计算每个数字的最大乘积
    for (let i = 3; i <= n; i++) {
        // 遍历所有可能的拆分点j (1 <= j <= i/2)
        // 只需要遍历到i/2即可，因为拆分是对称的
        for (let j = 1; j <= i / 2; j++) {
            // 计算三种情况的最大值：
            // 1. 保持当前最大值
            // 2. 拆分为j和i-j两部分，且i-j不继续拆分
            // 3. 拆分为j和i-j两部分，且i-j继续拆分
            dp[i] = Math.max(dp[i], j * (i - j), j * dp[i - j])
        }
    }
    
    // 返回数字n拆分后的最大乘积
    return dp[n]
};