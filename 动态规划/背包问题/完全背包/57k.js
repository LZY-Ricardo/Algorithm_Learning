// 57. 爬楼梯
// 假设你正在爬楼梯。需要 n 阶你才能到达楼顶。 
// 每次你可以爬至多m (1 <= m < n)个台阶。你有多少种不同的方法可以爬到楼顶呢？ 
// 注意：给定 n 是一个正整数
var climbStairs = function (n) {
    // 确定 dp 数组及其下标含义 dp[j] 表示爬到 j 层楼梯的方法数
    let dp = new Array(n + 1).fill(0)
    // 确定递推公式 dp[j] = dp[j] + dp[j - 1]
    
    // 确定初始化 dp[0] = 1
    dp[0] = 1
    // 确定遍历顺序 
    // 求的是排列数, 先遍历背包容量, 再遍历物品
    for (let j = 0; j < n + 1; j++) {
        for (let i = 1; i < m + 1; i++) {
            if (j >= i) {
                dp[j] = dp[j] + dp[j - i]
            }
        }
    }
    return dp[n]
}