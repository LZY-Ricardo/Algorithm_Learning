// 53. 最大子数组和
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) { // 动态规划
    // dp[i][j] 表示包括下标i（以nums[i]为结尾）的最大连续子序列和为dp[i]
    let dp = new Array(nums.length).fill(0)
    // 递推公式 dp[i] = max(nums[i], dp[i - 1] + nums[i])
    // 初始化 第一个元素的最大连续子序列和自然是它nums[0]
    dp[0] = nums[0]
    let res = nums[0]
    // 确定遍历顺序 递推公式中dp[i]依赖于dp[i - 1]的状态，需要从前向后遍历
    for (let i = 1; i < nums.length; i++) {
        dp[i] = Math.max(nums[i], dp[i - 1] + nums[i])
        res = Math.max(res, dp[i])
    }
    return res
};

var maxSubArray = function(nums) { // 动规空间优化
    let pre = nums[0]
    let res = nums[0]
    for (let i = 1; i < nums.length; i++) {
        if (pre + nums[i] > nums[i]) {
            pre += nums[i]
        } else {
            pre = nums[i]
        }
        res = Math.max(res, pre)
    }
    return res
};

maxSubArray([-2,1,-3,4,-1,2,1,-5,4])

var maxSubArray = function(nums) { // 贪心
    let res = -Infinity
    let count = 0
    for (let i = 0; i < nums.length; i++) {
        count += nums[i]
        if (count > res) res = count
        if (count < 0) count = 0 
    }
    return res
};