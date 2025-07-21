// 56. 携带矿石资源
// 你是一名宇航员，即将前往一个遥远的行星。在这个行星上，有许多不同类型的矿石资源，每种矿石都有不同的重要性和价值。
// 你需要选择哪些矿石带回地球，但你的宇航舱有一定的容量限制。 
// 给定一个宇航舱，最大容量为 C。现在有 N 种不同类型的矿石，每种矿石有一个重量 w[i]，一个价值 v[i]，以及最多 k[i] 个可用。
// 不同类型的矿石在地球上的市场价值不同。你需要计算如何在不超过宇航舱容量的情况下，最大化你所能获取的总价值

/**
 * 解决多重背包问题的函数（使用三维dp数组）
 * @param {number} C - 宇航舱的最大容量
 * @param {number} N - 矿石的种类数量
 * @param {number[]} w - 每种矿石的重量数组
 * @param {number[]} v - 每种矿石的价值数组
 * @param {number[]} k - 每种矿石的最大可用数量数组
 * @return {number} - 能够获取的最大总价值
 */
function maxValueThreeD(C, N, w, v, k) {
    // 初始化三维dp数组
    // dp[i][j][m] 表示考虑前i种矿石，容量为j的宇航舱，选择m个第i种矿石时所能携带的最大价值
    let dp = new Array(N + 1);
    for (let i = 0; i <= N; i++) {
        dp[i] = new Array(C + 1);
        for (let j = 0; j <= C; j++) {
            dp[i][j] = new Array(Math.max(...k) + 1).fill(0);
        }
    }
    
    // 填充dp数组
    for (let i = 1; i <= N; i++) {
        for (let j = 0; j <= C; j++) {
            for (let m = 0; m <= k[i - 1]; m++) {
                if (j < m * w[i - 1]) {
                    // 容量不足，无法选择m个第i种矿石
                    dp[i][j][m] = dp[i - 1][j][0];
                } else {
                    // 状态转移方程：选择m个第i种矿石的最大价值
                    dp[i][j][m] = Math.max(dp[i - 1][j][0], dp[i - 1][j - m * w[i - 1]][0] + m * v[i - 1]);
                }
            }
            // 更新不选择第i种矿石的情况
            dp[i][j][0] = Math.max(...dp[i][j]);
        }
    }
    
    // 返回最大容量下的最大价值
    return dp[N][C][0];
}

/**
 * 解决多重背包问题的函数（使用一维dp数组，优化空间复杂度）
 * @param {number} C - 宇航舱的最大容量
 * @param {number} N - 矿石的种类数量
 * @param {number[]} w - 每种矿石的重量数组
 * @param {number[]} v - 每种矿石的价值数组
 * @param {number[]} k - 每种矿石的最大可用数量数组
 * @return {number} - 能够获取的最大总价值
 */
function maxValue(C, N, w, v, k) {
    // 初始化dp数组，dp[j]表示容量为j的宇航舱所能携带的最大价值
    let dp = new Array(C + 1).fill(0);
    
    // 遍历每种矿石
    for (let i = 0; i < N; i++) {
        // 逆序遍历宇航舱容量，避免重复计算
        for (let j = C; j >= w[i]; j--) {
            // 遍历当前矿石的数量
            for (let m = 1; m <= k[i] && j >= m * w[i]; m++) {
                // 状态转移方程：选择m个当前矿石的最大价值
                dp[j] = Math.max(dp[j], dp[j - m * w[i]] + m * v[i]);
            }
        }
    }
    
    // 返回最大容量下的最大价值
    return dp[C];
}

// 测试示例
// 例如：宇航舱容量为10，有3种矿石
// 第一种矿石：重量1，价值2，最多2个
// 第二种矿石：重量2，价值3，最多3个
// 第三种矿石：重量3，价值4，最多2个
// let C = 10;
// let N = 3;
// let w = [1, 2, 3];
// let v = [2, 3, 4];
// let k = [2, 3, 2];
// console.log(maxValue(C, N, w, v, k));  // 应该输出13
