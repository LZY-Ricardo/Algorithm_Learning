// 503. 下一个更大元素 II
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function(nums) {
    let n = nums.length
    let res = new Array(n).fill(-1)
    let stack = []
    stack.push(0)
    for (let i = 1; i < n * 2; i++) {
        if (nums[i % n] <= nums[stack[stack.length - 1]]) {
            stack.push(i % n)
        } else {
            while (stack.length && nums[i % n] > nums[stack[stack.length - 1]]) {
                let index = stack.pop()
                res[index] = nums[i % n]
            }
            stack.push(i % n)
        }
    }
    return res
};