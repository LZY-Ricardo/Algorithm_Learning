// 189. 轮转数组
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// var rotate = function(nums, k) {
//     const res = [...nums]
//     for (let i = 0; i < res.length; i++) {
//         let index = (i + k) % res.length
//         nums[index] = res[i]
        
//     }
//     return nums
// };

var rotate = function(nums, k) {
    const reverse = (nums, start, end) => {
        while (start < end) {
            [nums[start], nums[end]] = [nums[end], nums[start]]
            start++
            end--
        }
    }
    k %= nums.length
    reverse(nums, 0, nums.length - 1)
    reverse(nums, 0, k - 1)
    reverse(nums, k, nums.length - 1)
    return nums
};

nums = [1,2,3,4,5,6,7], k = 3
console.log(rotate(nums, k));
