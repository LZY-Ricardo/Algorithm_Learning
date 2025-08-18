// 41. 缺失的第一个正数
/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    nums.sort((a, b) => a - b); 
    if (nums[nums.length - 1] <= 0) return 1; // 全为非正数，返回 1
    let missing = 1;
    for (const num of nums) {
        if (num === missing) {
            missing++;
        } else if (num > missing) {
            return missing; // 发现缺失的正整数
        }
    }
    return missing; // 数组是 [1, 2, 3], 返回 4
};

var firstMissingPositive = function(nums) {
    const n = nums.length 
    for (let i = 0; i < n; i++) {
        // 如果当前学生的学号在 [1,n] 中，但（真身）没有坐在正确的座位上
        while (nums[i] !== nums[nums[i] - 1] && nums[i] <= n && nums[i] >= 1) {
            const j = nums[i] - 1; // 减一是因为数组下标从 0 开始
            [nums[i], nums[j]] = [nums[j], nums[i]];
        }   
    }
    // 找第一个学号与座位编号不匹配的学生
    for (let i = 0; i < n; i++) {
        if (nums[i] !== i + 1) {
            return i + 1
        }
    }
    return n + 1
};

