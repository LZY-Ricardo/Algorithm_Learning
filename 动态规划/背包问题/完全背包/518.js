// 518. 零钱兑换 II
/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
// var change = function (amount, coins) { // 二维 dp 数组
//     let len = coins.length

const { log } = require("console");

//     // 确定 dp 数组及其下标含义 dp[i][j] 表示 前 i 个物品任取, 凑成 j 元的组合数量
//     let dp = new Array(len).fill().map(((item) => new Array(amount + 1).fill(0)))

//     // 确定递推公式 dp[i][j] = dp[i - 1][j] + dp[i][j - coins[i]]
//     // dp[i][j] 表示 前 i 个物品任取, 凑成 j 元的组合数量
//     // 分为 2 种情况
//     // 1. 不包含第 i 个物品, 那么 dp[i][j] = dp[i - 1][j]
//     // 2. 包含第 i 个物品, 那么 dp[i][j] = dp[i][j - coins[i]]

//     // 初始化 dp 数组
//     // dp[i][0] = 1 表示 前 i 个物品任取, 凑成 0 元的组合数量为 1
//     for(let i = 0  ; i < len; i++) {
//         dp[i][0] = 1
//     }
//     // dp[0][j]
//     for (let j = 1; j < amount + 1; j++) {
//         if (j % coins[0] === 0) {
//             dp[0][j] = 1
//         } else {
//             dp[0][j] = 0 // 此步骤可以省略 因为 dp 数组定义时全为 0
//         }
//     }

//     // 确定遍历顺序
//     // 先遍历物品, 再遍历背包容量
//     for (let i = 1; i < len; i++) {
//         for (let j = 0; j < amount + 1; j++) {
//             if (j < coins[i]) {
//                 dp[i][j] = dp[i - 1][j]
//             } else {
//                 dp[i][j] = dp[i - 1][j] + dp[i][j - coins[i]]
//             }
//         }
//     }
//     return dp[len - 1][amount]
// };



var change = function (amount, coins) { // 一维 dp 数组
    let len = coins.length

    // 确定 dp 数组及其下标含义 dp[j] 表示 凑成 j 元的组合数量
    let dp = new Array(amount + 1).fill(0)

    // 确定递推公式 dp[j] = dp[j] + dp[j - coins[i]]
    // dp[j] 表示 凑成 j 元的组合数量
    // 分为 2 种情况
    // 1. 不包含第 i 个物品, 那么 dp[j] = dp[j]
    // 2. 包含第 i 个物品, 那么 dp[j] = dp[j - coins[i]]

    // 初始化 dp 数组
    // dp[0] = 1 表示 凑成 0 元的组合数量为 1
    dp[0] = 1

    // 确定遍历顺序
    // 先遍历物品, 再遍历背包容量
    // 求的组合数 不能先遍历背包容量, 再遍历物品
    for (let i = 0; i < len; i++) {
        for (let j = coins[i]; j < amount + 1; j++) {
            dp[j] = dp[j] + dp[j - coins[i]]
        }
        console.log(dp);      
    }

    return dp[amount]
};

amount = 5, coins = [1, 2, 5]
change(amount, coins)