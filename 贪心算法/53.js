// 53. 最大子数组和
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) { // 暴力解法 超时
    let res = -Infinity  // 初始化为负无穷，以处理全负数数组的情况
    let sum = 0
    for (let i = 0; i < nums.length; i++) {
        sum = 0
        for (let j = i; j < nums.length; j++) {
            sum += nums[j]
            res = Math.max(res, sum)  // 直接比较sum和res，而不是sum + res
        }
    }
    return res
};

var maxSubArray = function(nums) {
    // res: 存储最大子数组和，初始为负无穷以处理全负数数组
    let res = -Infinity
    // count: 当前子数组和
    let count = 0
    
    // 遍历数组
    for (let i = 0; i < nums.length; i++) {
        // 累加当前元素到count
        count += nums[i]
        
        // 更新最大子数组和
        if (count > res) res = count
        
        // 如果当前子数组和为负，重置为0（贪心策略：负和对后续子数组无贡献）
        if (count < 0) count = 0 
    }
    return res
};