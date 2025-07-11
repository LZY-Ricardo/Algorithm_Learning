// 55. 跳跃游戏
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    let cover = 0
    for (let i = 0; i <= cover; i++) {
        // 贪心策略：更新最大可覆盖距离
        cover = Math.max(cover, i + nums[i])
        if (cover >= nums.length - 1) return true
    }
    return false
};
