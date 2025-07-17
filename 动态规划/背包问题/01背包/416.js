// 416. 分割等和子集
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function (nums) {
    // 01背包
    // 求出总和
    let sum = nums.reduce((pre, cur) => pre + cur)
    // 总和为奇数，无法平分
    if (sum % 2 !== 0) return false
    // 总和为偶数的话 背包重量为中和的一半 看是否能够用数组中的数据填满背包
    let bagweight = sum / 2
    // 初始化dp数组 dp[j] 表示重量为j的背包 其所能包含的最大价值
    let dp = new Array(bagweight + 1).fill(0)
    // 遍历物品
    for (let i = 0; i < nums.length; i++) {
        // 遍历背包重量
        // 倒序遍历 确保一个数据只能用一遍 不会被本轮新更新的dp[j]影响
        for (let j = bagweight; j >= nums[i]; j--) {
            // 背包重量j 所能包含的最大价值 为 之前的价值 与 之前重量为j - nums[i]的价值 + nums[i]的价值 中的较大值
            dp[j] = Math.max(dp[j], dp[j - nums[i]] + nums[i])
        }
    }
    return dp[bagweight] === bagweight
};


var canPartition = function (nums) {
    let sum = 0
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i]
    }
    let target = 0
    if (sum % 2 === 0) {
        target = sum / 2
    } else {
        return false
    }
    let dp = new Array(target + 1).fill(false)
    dp[0] = true

    for (let num of nums) {
        for (let i = target; i >= num; i--) {
            dp[i] = dp[i] || dp[i - num]
        }

    }
    return dp[target]


};