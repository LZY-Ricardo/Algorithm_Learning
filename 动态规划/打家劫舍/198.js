// 198. 打家劫舍
// 你是一个专业的小偷，计划偷窃沿街的房屋。
// 每间房内都藏有一定的现金，影响你偷窃的唯一制约因素就是相邻的房屋装有相互连通的防盗系统，
// 如果两间相邻的房屋在同一晚上被小偷闯入，系统会自动报警。
// 给定一个代表每个房屋存放金额的非负整数数组，计算你 不触动警报装置的情况下 ，一夜之内能够偷窃到的最高金额。
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    const len = nums.length
    
    // 确定 dp 数组及其下标含义 考虑下标i（包括i）以内的房屋，最多可以偷窃的金额为dp[i]
    let dp = new Array(nums.length).fill(0)

    // 确定递推公式 dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i])

    // 确定初始化
    // 从递推公式dp[i] = max(dp[i - 2] + nums[i], dp[i - 1]);
    // 可以看出，递推公式的基础就是dp[0] 和 dp[1]
    // 从dp[i]的定义上来讲，dp[0] 一定是 nums[0]，d
    // p[1]就是nums[0]和nums[1]的最大值即：dp[1] = max(nums[0], nums[1])
    dp[0] = nums[0]
    dp[1] = nums[1] > nums[0] ? nums[1] : nums[0]

    // 确定遍历顺序
    // dp[i] 是根据dp[i - 2] 和 dp[i - 1] 推导出来的，那么一定是从前到后遍历
    for (let i = 2; i < len; i++) {
        dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i])
    }

    return dp[len - 1]
};