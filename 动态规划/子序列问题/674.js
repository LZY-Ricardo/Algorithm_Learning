// 674. 最长连续递增序列
/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function(nums) {
    let left = 1
    let max = 0
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > nums[i - 1]) {
            left++
        } else {
            left = 1
        }
        max = Math.max(max, left)
    }   
    return max
}; 



var findLengthOfLCIS = function(nums) {
    let res = 1

    // dp[i] 以下标i为结尾的连续递增的子序列长度为dp[i]
    // 全部初始化为1 因为单个元素的子序列长度为1
    let dp = new Array(nums.length).fill(1)
    // 递推公式 dp[i] = dp[i - 1] + 1
    // 遍历顺序
    // 从前往后
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > nums[i - 1]) {
            dp[i] = dp[i - 1] + 1
            res = Math.max(res, dp[i])
        }
    }
    return res
}; 

 