// 128. 最长连续序列
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) { // 时间复杂度O(nlogn) 空间复杂度O(1)
    let res = 0
    let count = 1
    if (nums.length === 0) return 0
    nums.sort((a, b) => a - b)
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== nums[i + 1]) {
            if (nums[i] + 1 !== nums[i + 1]) {
                count = 1
            } else {
                count++ 
                res = Math.max(res, count)
            }
        }
    }
    return res  
};

var longestConsecutive = function(nums) { // 时间复杂度O(n) 空间复杂度O(n)
    const set = new Set(nums)
    let res = 0
    for (let num of set) {
        if (!set.has(num - 1)) { // 确保只从该数组 每一段连续数组的开头开始遍历 这样每一段连续数组只会遍历一遍
            let current = num
            let count = 1
            while (set.has(current + 1)) {
                count++
                current++
            }
            res = Math.max(count, res)
        }
    }
    return res
};