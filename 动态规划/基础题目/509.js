// 509. 斐波那契数
/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) { // 递归
    if (n <= 1) return n
    return fib(n - 1) + fib(n - 2)  
};

// 动规五部曲
// 1. 确定dp数组以及下标的含义 dp[i]表示第i个斐波那契数
// 2. 确定递推公式 dp[i] = dp[i - 1] + dp[i - 2]
// 3. dp数组如何初始化 dp[0] = 0, dp[1] = 1
// 4. 确定遍历顺序 从前往后遍历
// 5. 打印dp数组 找出debug
var fib = function(n) { // 动态规划
    if (n <= 1) return n
    dp = []
    dp[0] = 0, dp[1] = 1
    for (let i = 2; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2]
    }
    return dp[n]
};


var fib = function(n) { // 动态规划 状态压缩
    // 动规状态转移中，当前结果只依赖前两个元素的结果，所以只要两个变量代替dp数组记录状态过程。将空间复杂度降到O(1)
    if (n <= 1) return n
    let pre1 = 1
    let pre2 = 0
    let temp
    for (let i = 2; i <= n; i++) {
        temp = pre1
        pre1 = pre1 + pre2
        pre2 = temp
    }
    return pre1
};