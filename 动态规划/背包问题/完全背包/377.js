// 377. 组合总和 Ⅳ
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var combinationSum4 = function(nums, target) {
    let len = nums.length
    // dp[j] 凑成目标正整数为j的排列个数为dp[j]
    let dp = new Array(target + 1).fill(0)

    // 确定递推公式 dp[j] = dp[j] + dp[j - nums[i]]

    // 初始化 dp 数组
    dp[0] = 1

    // 确定遍历顺序 
    // 求的是排列数, 先遍历背包容量, 再遍历物品
    for (let j = 0; j < target + 1; j++) {
        for (let i = 0; i < len; i++) {
            if (j >= nums[i]) {
                dp[j] = dp[j] + dp[j - nums[i]]
            }
        }
    }
    return dp[target]
};