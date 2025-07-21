// 多重背包问题
// 对比01背包问题 相当于每个物品可以使用 k 次
// 可以把多重背包问题转换为01背包问题
// 把每个物品展开，每个物品的重量和价值都乘以 k
function maxValue(bagWeight, weight, value, nums) {
    // 初始化dp数组
    const dp = new Array(bagWeight + 1).fill(0);
    
    // 遍历物品
    for (let i = 0; i < weight.length; i++) {
        // 遍历背包容量（从大到小，避免重复使用物品）
        for (let j = bagWeight; j >= weight[i]; j--) { // 相比于 01 背包 多套了一层物品数量的for循环
            // 遍历个数
            for (let k = 1; k <= nums[i] && (j - k * weight[i]) >= 0; k++) {
                dp[j] = Math.max(dp[j], dp[j - k * weight[i]] + k * value[i]);
            }
        }
    }
    
    return dp[bagWeight];
}