// 53. 最大子数组和
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
    const len = nums.length
    let dp = new Array(len)
    dp[0] = nums[0]
    for (let i = 1; i < len; i++) {
        dp[i] = Math.max(dp[i - 1] + nums[i], nums[i])
    }
    let max = -Infinity
    dp.forEach(item => { max = Math.max(max, item) })
    return max
};


var maxSubArray = function (nums) {
    const len = nums.length
    let max = nums[0]
    let pre = nums[0]
    for (let i = 1; i < len; i++) {
        pre = Math.max(pre + nums[i], nums[i])
        max = Math.max(max, pre)
    }
    return max
};