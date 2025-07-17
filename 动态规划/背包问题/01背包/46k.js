// 46. 携带研究材料

// const readline = require('readline').createInterface({  // 二维数组解法
//     input: process.stdin,
//     output: process.stdout
// });

// let input = [];

// // 读取输入数据
// readline.on('line', (line) => {
//     input.push(line);
// });

// // 输入结束后处理数据
// readline.on('close', () => {
//     // 解析输入：物品数量n，背包容量bagweight
//     let [n, bagweight] = input[0].split(' ').map(Number);
//     // 物品重量数组
//     let weight = input[1].split(' ').map(Number);
//     // 物品价值数组
//     let value = input[2].split(' ').map(Number);

//     // 初始化DP数组：dp[i][j] 表示从下标为[0-i]的物品里任意取，放进容量为j的背包，价值总和最大是多少
//     let dp = new Array(n).fill().map(item => new Array(bagweight + 1).fill(0))
//     // 另一种初始化方式（功能相同）
//     // let dp = Array.from({ length: n }, () => Array(bagweight + 1).fill(0));

//     // 确定递推公式
//     // 不取物品 i ： dp[i][j] = dp[i - 1][j]
//     // 取物品 i ： dp[i][j] = dp[i - 1][j - weight[i]] + value[i] 
//     // 前i - 1 个物品任取时背包容量为减去当前第i个物品重量时的最大价值加上 该第i个物品价值
//     // 递推公式：dp[i][j] = Math.max(dp[i - 1][j], dp[i - 1][j - weight[i]] + value[i])

//     // dp数组初始化
//     // 初始化第一行：只考虑第一个物品时的情况
//     // 其实还应该初始化第一列，即背包容量为0时的情况，但是dp数组已经初始化为0了，所以就不需要手动初始化了
//     for (let j = weight[0]; j < bagweight + 1; j++) {
//         dp[0][j] = value[0]; // 能放下第一个物品时，价值就是value[0]
//     }

//     // 确定遍历顺序
//     // 先遍历物品，再遍历背包容量
//     // 先遍历背包容量，再遍历物品
//     // 两者遍历顺序不同，得到的结果不同
//     // 因为dp[i][j]是靠dp[i-1][j]和dp[i - 1][j - weight[i]]推导出来的
//     // 虽然两个for循环遍历的次序不同，但是dp[i][j]所需要的数据就是左上角，根本不影响dp[i][j]公式的推导
//     // 动态规划主循环
//     for (let i = 1; i < n; i++) { // 遍历每个物品
//         for (let j = 0; j < bagweight + 1; j++) { // 遍历每个容量
//             if (j < weight[i]) {
//                 // 当前物品重量超过容量j，不能放入
//                 dp[i][j] = dp[i - 1][j]; // 继承前i-1个物品时的最大价值
//             } else {
//                 // 可以放入当前物品，比较放入和不放入的价值
//                 dp[i][j] = Math.max(
//                     dp[i - 1][j], // 不放入当前物品
//                     dp[i - 1][j - weight[i]] + value[i] // 放入当前物品
//                 );
//             }
//         }
//     }
//     // 输出结果：前n个物品在容量bagweight时的最大价值
//     console.log(dp[n - 1][bagweight])
// });

const readline = require('readline').createInterface({  // 一维数组解法(滚动数组)
    input: process.stdin,
    output: process.stdout
});

let input = [];

// 读取输入数据
readline.on('line', (line) => {
    input.push(line);
});

// 输入结束后处理数据
readline.on('close', () => {
    // 解析输入：物品数量n，背包容量bagweight
    let [n, bagweight] = input[0].split(' ').map(Number);
    // 物品重量数组
    let weight = input[1].split(' ').map(Number);
    // 物品价值数组
    let value = input[2].split(' ').map(Number);

    // 初始化DP数组：dp[j] 表示容量为j的背包，所背的物品价值最大为dp[j]
    let dp = new Array(bagweight + 1).fill(0)

    // 确定递推公式
    // dp[j] = Math.max(dp[j], dp[j - weight[i]] + value[i])

    // dp 数组初始化
    // dp[0] = 0 其他也初始化为0 这样才不会影响dp[j]的推导 导致价值被覆盖
     
    // 确定遍历顺序
    // 倒序遍历是为了保证物品i只被放入一次
    // 也是为了保证不被这一轮新更新的dp[j]影响
    for (let i = 0; i < n; i++) {
        for (let j = bagweight; j >= weight[i]; j--) { // 背包容量从大到小遍历 当前如果容量小于物品重量 则不能放入 dp值不变
            dp[j] = Math.max(dp[j], dp[j - weight[i]] + value[i])
        }
    }
    // 输出结果：前n个物品在容量bagweight时的最大价值
    console.log(dp[bagweight])
}); 