// 45. 跳跃游戏 II
/**
 * @param {number[]} nums - 非负整数数组，每个元素表示在该位置可以跳跃的最大长度
 * @return {number} - 到达数组最后一个位置的最少跳跃次数
 */
var jump = function(nums) {
    // 边界条件：数组为空时返回0
    if (nums.length === 0) return 0;
    let step = 0; // 记录跳跃次数
    let next = 0; // 记录下一步能到达的最远位置
    let cover = 0; // 记录当前能覆盖的最远位置

    // 遍历数组
    for (let i = 0; i < nums.length; i++) {
        // 更新下一步能到达的最远位置
        next = Math.max(next, nums[i] + i);

        // 如果下一步能到达或超过终点，直接返回当前步数+1
        if (next >= nums.length - 1) return step + 1;

        // 当到达当前覆盖的边界时，更新覆盖范围并增加跳跃次数
        if (i === cover) {
            cover = next; // 更新当前能覆盖的最远位置
            step++; // 跳跃次数加1
        }
    }
};

