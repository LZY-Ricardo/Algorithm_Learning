// 322. 零钱兑换
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) { // 二维 dp 数组
    let len = coins.length
    // 确定 dp[i][j] 数组及其下标含义 dp[i][j] 表示使用前 i 个硬币, 凑成 j 元的最少硬币数量
    let dp = new Array(len).fill(0).map(() => new Array(amount + 1).fill(0))

    // 确定递推公式 dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - coins[i]] + 1)

    // 初始化 dp 数组
    // dp[i][0] = 0 背包为 0 时 不需要硬币
    // for (let i = 0; i < len; i++) { // 该步骤已经在定义dp数组时完成 可以不用写
    //     dp[i][0] = 0
    // }
    
    // dp[0][j] 
    for (let j = 0; j < amount + 1; j++) {
        if (j % coins[0] === 0) {
            dp[0][j] = j /coins[0] 
        } else {
            dp[0][j] = Infinity
        }
    }

    // 确定遍历顺序 
    // 求的是最小值, 先遍历物品, 再遍历背包
    for (let i = 1; i < len; i++) {
        for (let j = 0; j < amount + 1; j++) {
            if (j < coins[i]) {
                dp[i][j] = dp[i - 1][j]
            } else {
                dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - coins[i]] + 1)
            }
        }
    }
    return dp[len - 1][amount] === Infinity ? -1 : dp[len - 1][amount]
}


var coinChange = function(coins, amount) { // 一维 dp 数组
    let len = coins.length
    // 确定 dp[j] 数组及其下标含义 dp[j] 表示使用前 i 个硬币, 凑成 j 元的最少硬币数量
    let dp = new Array(amount + 1).fill(0)

    // 确定递推公式 dp[j] = Math.min(dp[j], dp[j - coins[i]] + 1)

    // 初始化 dp 数组
    // dp[j] = 0 背包为 0 时 不需要硬币
    
    // dp[j] 
    for (let j = 0; j < amount + 1; j++) {
        if (j % coins[0] === 0) {
            dp[j] = j /coins[0] 
        } else {
            dp[j] = Infinity
        }
    }

    // 确定遍历顺序 
    // 求的是最小值, 先遍历物品, 再遍历背包
    // for (let i = 1; i < len; i++) {
    //     for (let j = coins[i]; j < amount + 1; j++) {
    //         dp[j] = Math.min(dp[j], dp[j - coins[i]] + 1)
    //     }
    // }

    // 先遍历背包 再遍历物品 也可以
    for (let j = 0; j < amount + 1; j++) {
        for (let i = 0; i < len; i++) {
            if (j >= coins[i]) {
                dp[j] = Math.min(dp[j], dp[j - coins[i]] + 1)
            }
        }
    }
    return dp[amount] === Infinity ? -1 : dp[amount]
}
