// 52. 携带研究材料
// const readline = require('readline').createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// let input = [];
// readline.on('line', (line) => {
//     input.push(line.trim());
// });

// readline.on('close', () => {
//     // 第一行解析 n 和 v
//     const [n, bagweight] = input[0].split(' ').map(Number);
    
//     /// 剩余 n 行解析重量和价值
//     const weight = [];
//     const value = [];
//     for (let i = 1; i <= n; i++) {
//         const [wi, vi] = input[i].split(' ').map(Number);
//         weight.push(wi);
//         value.push(vi);
//     }

//     // 二维dp数组
//     // 确定 dp 数组及其下标含义 dp[i][j] 表示从下标为[0-i]的物品里任意取，放进容量为j的背包，价值总和最大是多少。
//     let dp = new Array(n).fill().map((item) => new Array(bagweight + 1).fill(0))

//     // 确定递推公式 dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - weight[i]] + value[i])

//     // 初始化 dp 数组
//     // 当 j < weight[0] 时，dp[0][j] 应该是 0，因为背包容量不足无法放入物品。
//     // 当 j >= weight[0] 时，dp[0][j] 应该是 value[0]，因为背包容量足够放下物品。
//     for (let j = weight[0]; j< bagweight + 1; j++) {
//         dp[0][j] = dp[0][j - weight[0]] + value[0]
//     }
//     // 当 j = 0 时, dp[i][0] 应该是 0, 因为背包容量为 0, 无法放入物品
//     // for (let i = 1; i < n; i++) { // 定义 dp 数组时, 就已经初始化为0 所以该步骤可以不写
//     //     dp[i][0] = 0
//     // }

//     // 确定遍历顺序
//     // 先遍历物品, 再遍历背包容量
//     for (let i = 1; i < n; i++) {
//         for (let j = 0; j < bagweight + 1; j++) {
//             if (j < weight[i]) {
//                 dp[i][j] = dp[i - 1][j]
//             } else {
//                 dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - weight[i]] + value[i])
//             }
//         }
//     }
//     // 也可以先遍历背包容量, 再遍历物品
//     // 因为 dp[i][j] 是由 dp[i - 1][j] 和 dp[i][j - weight[i]] 推导出来的, 所以先遍历背包容量, 再遍历物品, 也可以
//     // for (let j = 0; j < bagweight + 1; j++) {
//     //     for (let i = 1; i < n; i++) {
//     //         if (j < weight[i]) {
//     //             dp[i][j] = dp[i - 1][j]
//     //         } else {
//     //             dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - weight[i]] + value[i])
//     //         }
//     //     }
//     // }

//     console.log(dp[n - 1][bagweight])
// });


const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];
readline.on('line', (line) => {
    input.push(line.trim());
});

readline.on('close', () => {
    // 第一行解析 n 和 v
    const [n, bagweight] = input[0].split(' ').map(Number);
    
    /// 剩余 n 行解析重量和价值
    const weight = [];
    const value = [];
    for (let i = 1; i <= n; i++) {
        const [wi, vi] = input[i].split(' ').map(Number);
        weight.push(wi);
        value.push(vi);
    }

    // 一维 dp 数组
    // 确定 dp 数组及其下标含义 dp[j] 表示从下标为[0-i]的物品里任意取，放进容量为j的背包，价值总和最大是多少。
    let dp = new Array(bagweight + 1).fill(0)

    // 确定递推公式 dp[j] = Math.max(dp[j], dp[j - weight[i]] + value[i])

    // 初始化 dp 数组
    // 当 j < weight[0] 时，dp[0][j] 应该是 0，因为背包容量不足无法放入物品。
    // 当 j >= weight[0] 时，dp[0][j] 应该是 value[0]，因为背包容量足够放下物品。
    for (let j = weight[0]; j< bagweight + 1; j++) {
        dp[j] = dp[j - weight[0]] + value[0]
    }

    // 确定遍历顺序
    // 先遍历物品, 再遍历背包容量
    // 遍历背包 一定要正序遍历 这样才能让 物品重复放入
    for (let i = 0; i < n; i++) {
        for (let j = weight[i]; j < bagweight + 1; j++) {
            dp[j] = Math.max(dp[j], dp[j - weight[i]] + value[i])
        }
    }

    console.log(dp[bagweight])
});