// 238. 除自身以外数组的乘积
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
    const n = nums.length
    const res = new Array(n)
    const pre = new Array(n).fill(1)
    const order = new Array(n).fill(1)
    for (let i = 1; i < n; i++) {
        pre[i] = pre[i - 1] * nums[i - 1]
    }
    for (let i = n - 2; i >= 0; i--) {
        order[i] = order[i + 1] * nums[i + 1]
    }
    for (let i = 0; i < n; i++) {
        res[i] = pre[i] * order[i]
    }
    return res
};

var productExceptSelf = function (nums) { // 优化 省空间 省时间
    const n = nums.length
    const order = new Array(n).fill(1)
    for (let i = n - 2; i >= 0; i--) {
        order[i] = order[i + 1] * nums[i + 1]
    }
    let pre = 1
    for (let i = 0; i < n; i++) {
        order[i] *= pre
        pre *= nums[i]
    }
    return order
};

nums = [1,2,3,4]
console.log(productExceptSelf(nums));
