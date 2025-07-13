// 1005. K 次取反后最大化的数组和
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
/**
 * @param {number[]} nums - 整数数组
 * @param {number} k - 最多可以进行的取反操作次数
 * @return {number} - 经过最多k次取反操作后的最大数组和
 */
var largestSumAfterKNegations = function(nums, k) {
    // 对数组进行排序
    nums.sort((a, b) => a - b);
    let i = 0;

    // 尽可能地将负数取反
    while (k > 0 && i < nums.length && nums[i] < 0) {
        nums[i] = -nums[i]; // 取反
        k--; // 剩余操作次数减1
        i++; // 移动到下一个元素
    }

    // 如果k还有剩余且为奇数
    if (k > 0 && k % 2 === 1) {
        // 找到最小的元素并取反
        // 由于前面的操作，数组前面的元素都是非负的，且已经排序
        if (i === 0 || (i < nums.length && nums[i] < nums[i - 1])) {
            // 当前元素比前一个元素小或i为0
            nums[i] = -nums[i];
        } else {
            // 前一个元素更小
            nums[i - 1] = -nums[i - 1];
        }
    }

    // 计算数组的和
    return nums.reduce((a, b) => a + b, 0);
};


var largestSumAfterKNegations = function(nums, k) {
    // 按绝对值从大到小排序
    nums.sort((a, b) => Math.abs(b) - Math.abs(a))
    let i = 0
    // 遍历数组，优先将负数取反
    while (i < nums.length && k > 0) {
        if (nums[i] < 0) {
            nums[i] = -nums[i]  // 取反负数
            k--
        }
        i++
    }
    // 如果k仍大于0且为奇数，将最小的正数取反
    if (k > 0 && k % 2 !== 0) {
        nums[nums.length - 1] *= -1
    }
    // 计算数组和
    return nums.reduce((acc, curr) => acc + curr, 0)
};  
// nums = [3,-1,0,2], k = 3


console.log(largestSumAfterKNegations([-8,3,-5,-3,-5,-2],6));
