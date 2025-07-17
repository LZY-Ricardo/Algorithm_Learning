// 1049. 最后一块石头的重量 II
/**
 * @param {number[]} stones
 * @return {number}
 */
// var lastStoneWeightII = function(stones) {
//     let sum = stones.reduce((pre, cur) => pre + cur)
//     let target = Math.floor(sum / 2)
//     // dp[j] 表示重量为j的背包 所能包含的最大重量
//     // 石头的重量为stones[i] 价值也为stones[i]
//     let dp = new Array(target + 1).fill(0)
//     for (let num of stones) {
//         for (let i = target; i >= num; i--) {
//             dp[i] = Math.max(dp[i], dp[i - num] + num)
//         }
//     }
//     return sum - dp[target] - dp[target]
// };


var lastStoneWeightII = function(stones) {
    let sum = stones.reduce((pre, cur) => pre + cur , 0)
    let target = Math.floor(sum / 2)
    let m = stones.length
    // dp[i][j] 表示 任取前i个石头 用重量为j的背包来装 背包所能包含的最大重量
    let dp = new Array(m).fill().map((item) => new Array(target + 1).fill(0))
    // dp 数组初始化
    for (let j = 0; j < target + 1; j++) { // for (let j = stone[0]; j < target + 1; j++)
        dp[0][j] = j >= stones[0] ? stones[0] : 0;
    }
    // 遍历顺序
    for (let i = 1; i < m; i++) {
        for (let j = 0; j < target + 1; j++) {
            if (j < stones[i]) {
                dp[i][j] = dp[i - 1][j];
            } else {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i - 1][j - stones[i]] + stones[i]);
            }
        }
    }
    // 用 sum-dp[m - 1][target] 这一堆石头 去撞 dp[m - 1][target] 这一堆石头
    return sum - dp[m - 1][target] - dp[m - 1][target]
};
stones = [1,2]
console.log(lastStoneWeightII(stones))
